class PlaybackState {
  constructor(initialState = {}) {
    this.listeners = new Set();
    this.state = {
      backend: "no-audio",
      backendAvailable: false,
      mode: "stopped",
      volume: 60,
      positionSec: 0,
      durationSec: null,
      source: null,
      deviceCount: 0,
      lastError: null,
      updatedAt: new Date().toISOString(),
      ...initialState,
    };
  }

  subscribe(listener) {
    this.listeners.add(listener);
    listener(this.snapshot());
    return () => this.listeners.delete(listener);
  }

  snapshot() {
    return { ...this.state };
  }

  update(patch) {
    this.state = {
      ...this.state,
      ...patch,
      updatedAt: new Date().toISOString(),
    };
    const snapshot = this.snapshot();
    for (const listener of this.listeners) {
      listener(snapshot);
    }
    return snapshot;
  }
}

module.exports = {
  PlaybackState,
};
