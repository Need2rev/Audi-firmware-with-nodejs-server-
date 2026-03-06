class SimulatorService {
  constructor(options = {}) {
    this.onStateChanged = options.onStateChanged || (() => {});
    this.state = {
      session: "idle",
      userPresent: false,
      simulatedIgnition: "off",
      doorState: "closed",
      seatOccupied: false,
      lastEvent: null,
      updatedAt: new Date().toISOString(),
    };
    this.supportedEvents = new Set([
      "sim.session.start",
      "sim.session.stop",
      "sim.user.entered",
      "sim.user.left",
      "sim.ignition.on",
      "sim.ignition.off",
      "sim.door.open",
      "sim.door.close",
      "sim.seat.occupied",
      "sim.seat.empty",
    ]);
  }

  getState() {
    return { ...this.state };
  }

  isSupportedEvent(type) {
    return this.supportedEvents.has(String(type || ""));
  }

  update(patch, eventName) {
    this.state = {
      ...this.state,
      ...patch,
      lastEvent: eventName || this.state.lastEvent,
      updatedAt: new Date().toISOString(),
    };
    const snapshot = this.getState();
    this.onStateChanged(snapshot);
    return snapshot;
  }

  handleEvent(type, payload = {}) {
    switch (type) {
      case "sim.session.start":
        return this.success(this.update({ session: "active" }, type));
      case "sim.session.stop":
        return this.success(
          this.update(
            {
              session: "idle",
              userPresent: false,
              simulatedIgnition: "off",
              seatOccupied: false,
            },
            type,
          ),
        );
      case "sim.user.entered":
        return this.success(this.update({ userPresent: true }, type));
      case "sim.user.left":
        return this.success(
          this.update(
            {
              userPresent: false,
              seatOccupied: false,
              simulatedIgnition: "off",
            },
            type,
          ),
        );
      case "sim.ignition.on":
        return this.success(this.update({ simulatedIgnition: "on" }, type));
      case "sim.ignition.off":
        return this.success(this.update({ simulatedIgnition: "off" }, type));
      case "sim.door.open":
        return this.success(this.update({ doorState: "open" }, type));
      case "sim.door.close":
        return this.success(this.update({ doorState: "closed" }, type));
      case "sim.seat.occupied":
        return this.success(this.update({ seatOccupied: true }, type));
      case "sim.seat.empty":
        return this.success(this.update({ seatOccupied: false }, type));
      default:
        return {
          ok: false,
          error: `unsupported_sim_event:${type}`,
          state: this.getState(),
          payload,
        };
    }
  }

  success(state) {
    return {
      ok: true,
      state,
    };
  }
}

module.exports = {
  SimulatorService,
};
