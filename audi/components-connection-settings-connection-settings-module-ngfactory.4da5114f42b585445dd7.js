(window.webpackJsonp = window.webpackJsonp || []).push([
  [72],
  {
    JCQ5: function (e, t, i) {
      "use strict";
      var c = i("GVcY");
      (i.d(t, "a", function () {
        return c.a;
      }),
        i.d(t, "b", function () {
          return c.b;
        }),
        i.d(t, "c", function () {
          return c.d;
        }),
        i.d(t, "d", function () {
          return c.e;
        }),
        i.d(t, "e", function () {
          return c.g;
        }),
        i("8u35"),
        i("qciS"),
        i("K9Bs"),
        i("KyqV"));
    },
    TOCt: function (e, t, i) {
      "use strict";
      (i.d(t, "b", function () {
        return L;
      }),
        i.d(t, "a", function () {
          return F;
        }));
      var c = i("D57K"),
        n = i("Yi6/"),
        o = i("JCQ5"),
        r = i("J7Kz"),
        a = i("ZTXN"),
        s = i("bwdy"),
        d = i("ROBh"),
        u = i("IdLP"),
        l = i("GoAz"),
        v = i("HM3f"),
        h = i("J+dc"),
        g = i("xVbo"),
        O = i("TLy2"),
        b = i("kuMc"),
        p = i("YtkY"),
        A = i("iT4G"),
        S = i("jIqt"),
        E = i("Lrfq"),
        P = i("i7Dj"),
        T = i("vAPC"),
        f = i("CsoK"),
        N = i("uHmZ"),
        I = i("djHQ"),
        y = i("q5gU"),
        C = i("P1io"),
        D = i("2DZl"),
        j = i("YEFf"),
        R = i("t8AR"),
        H = i("kNkr"),
        m = i("kZht"),
        w = i("sg2e"),
        _ = i("FfND"),
        $ = i("yNay"),
        L = (function (e) {
          return (
            (e[(e.InProgress = 0)] = "InProgress"),
            (e[(e.RequiresPairing = 1)] = "RequiresPairing"),
            (e[(e.Succeeded = 2)] = "Succeeded"),
            (e[(e.Failed = 3)] = "Failed"),
            (e[(e.AlreadyBonding = 4)] = "AlreadyBonding"),
            e
          );
        })({});
      let F = (() => {
        class e {
          constructor(e, t, i, c, n, o, r) {
            ((this.bluetoothService = e),
              (this.popupManagementService = t),
              (this.connectivityService = i),
              (this.phoneService = c),
              (this.asiService = n),
              (this.routingService = o),
              (this.connectingDevices = new Set()),
              (this.destroyed$$ = new a.a()),
              (this.subscriptionConnectService = s.a.EMPTY),
              (this.logger = r.getLogger("main.BluetoothConnectionService")));
          }
          automaticallyActivateBluetooth() {
            this.bluetoothService.bluetoothAvailable$
              .pipe(Object(h.a)(1))
              .subscribe((e) => {
                e ||
                  (this.logger.info(
                    "automaticallyActivateBluetooth: try to activate bluetooth before trying to connect to device...",
                  ),
                  this.bluetoothService.setVisibility(!0, !1));
              });
          }
          automaticallyActivateAudioplayer() {
            this.bluetoothService.bluetoothAvailable$
              .pipe(
                Object(g.a)((e) => !!e),
                Object(h.a)(1),
                Object(O.a)(() => this.bluetoothService.audioPlayerAvailable$),
                Object(h.a)(1),
                Object(b.a)(this.destroyed$$),
              )
              .subscribe((e) => {
                e ||
                  (this.logger.info(
                    "automaticallyActivateAudioplayer: try to activate bluetooth audioplayer before trying to connect to device...",
                  ),
                  this.bluetoothService.setAudioPlayer(!0));
              });
          }
          automaticallyTogglePhones(e, t) {
            this.connectivityService
              .bluetoothDevice$(e.id)
              .pipe(
                Object(g.a)(n.wd),
                Object(h.a)(1),
                Object(b.a)(this.destroyed$$),
              )
              .subscribe((e) => {
                this.phoneService.setSlotForDevice(
                  e.id,
                  t === N.a.PHONE1 ? 1 : 2,
                );
              });
          }
          connectService(e, t, i) {
            if (
              (this.logger.info(
                `connectService: attempting to connect ${t} for device`,
                e,
              ),
              this.connectingDevices.has(e))
            )
              return Object(d.a)({
                state: L.AlreadyBonding,
                device: void 0,
                pairing: void 0,
              });
            this.connectingDevices.add(e);
            const r = this.bluetoothService.devices$.pipe(
                Object(p.a)((t) => t.find((t) => t.id === e)),
                Object(n.Kd)(),
              ),
              s = this.bluetoothService.pairings$.pipe(
                Object(p.a)((t) =>
                  t.find(
                    (t) => !!t.bluetoothDevice && t.bluetoothDevice.id === e,
                  ),
                ),
                Object(n.Kd)(),
              );
            return u.a.create((n) =>
              Object(c.a)(this, void 0, void 0, function* () {
                yield this.bluetoothService.cancelSearch();
                const c = yield r
                  .pipe(Object(h.a)(1), Object(A.a)(1e3))
                  .toPromise();
                if (!c)
                  return n.error(
                    "connectService: Could not resolve device snapshot",
                  );
                if (
                  t === o.b.WIRELESSCARPLAY ||
                  t === o.b.WIRELESSANDROIDAUTO
                ) {
                  const e = yield this.asiService.devices$
                    .pipe(Object(h.a)(1), Object(A.a)(4e3))
                    .toPromise();
                  if (e) {
                    const t = e.find(
                      (e) =>
                        !!e.bluetoothMacAddress &&
                        e.bluetoothMacAddress === c.macAddress,
                    );
                    t &&
                      (yield this.asiService
                        .setDeviceMode(t, H.l.Smartphone)
                        .pipe(Object(h.a)(1), Object(A.a)(1e3))
                        .toPromise());
                  }
                }
                const d = Object(l.a)(
                  this.bluetoothService.connectService(c, t, i),
                ).pipe(
                  Object(p.a)((e) => !!e),
                  Object(S.a)(void 0),
                );
                n.next({ state: L.InProgress, device: c });
                let u = !1;
                const g = new a.a();
                return (
                  Object(v.b)(r, s, d)
                    .pipe(Object(b.a)(g))
                    .subscribe(([i, c, r]) => {
                      (this.logger.info("connectService: state changed", {
                        device: i,
                        pairing: c,
                        connectResult: r,
                      }),
                        i && i.connectionState === o.a.CONNECTING && (u = !0),
                        c && c.pairingState !== o.c.OK
                          ? c.pairingState === o.c.ERROR
                            ? (this.logger.warn(
                                `connectService: pairing failed for ${e}`,
                                c,
                              ),
                              this.connectingDevices.delete(e),
                              n.next({
                                state: L.Failed,
                                device: i,
                                pairing: c,
                              }),
                              n.complete(),
                              g.next())
                            : (this.logger.info(
                                `connectService: pairing required for ${e}`,
                                c,
                              ),
                              n.next({
                                state: L.RequiresPairing,
                                device: i,
                                pairing: c,
                              }))
                          : i &&
                            (i.connectedServices &&
                            i.connectedServices.includes(t)
                              ? (this.logger.info(
                                  `connectService: service ${t} was connected for ${e}`,
                                  i,
                                ),
                                this.connectingDevices.delete(e),
                                n.next({
                                  state: L.Succeeded,
                                  device: i,
                                  pairing: c,
                                }),
                                n.complete(),
                                g.next())
                              : ((u && i.connectionState !== o.a.CONNECTING) ||
                                  !1 === r) &&
                                (this.logger.warn(
                                  `connectService: connect service ${t} failed for device ${e}`,
                                  i,
                                ),
                                this.connectingDevices.delete(e),
                                n.next({
                                  state: L.Failed,
                                  device: i,
                                  pairing: c,
                                }),
                                n.complete(),
                                g.next())));
                    }),
                  () => g.next()
                );
              }),
            );
          }
          disconnectService(e, t) {
            if (
              (this.logger.info(
                `disconnectService: attempting to disconnect ${t} for device`,
                e,
              ),
              this.connectingDevices.has(e))
            )
              return Object(d.a)({ state: L.AlreadyBonding });
            this.connectingDevices.add(e);
            const i = this.bluetoothService.devices$.pipe(
              Object(p.a)((t) => t.find((t) => t.id === e)),
              Object(E.a)(),
              Object(P.a)(),
            );
            return u.a.create((n) =>
              Object(c.a)(this, void 0, void 0, function* () {
                const c = yield i
                  .pipe(Object(h.a)(1), Object(T.a)(1e3, [void 0]))
                  .toPromise();
                if (!c)
                  return n.error(
                    "disconnectService: Could not resolve device snapshot",
                  );
                const r = Object(l.a)(
                  this.bluetoothService.disconnectService(c, t),
                ).pipe(
                  Object(p.a)((e) => !!e),
                  Object(S.a)(void 0),
                );
                n.next({ state: L.InProgress, device: c });
                let s = !1;
                const d = new a.a();
                return (
                  Object(v.b)(i, r)
                    .pipe(Object(b.a)(d))
                    .subscribe(([i, c]) => {
                      (i && i.connectionState === o.a.CONNECTING && (s = !0),
                        i &&
                          (i.connectedServices &&
                          !i.connectedServices.includes(t)
                            ? (this.logger.info(
                                `disconnectService: service ${t} was disconnected for ${e}`,
                                i,
                              ),
                              this.connectingDevices.delete(e),
                              n.next({ state: L.Succeeded, device: i }),
                              n.complete(),
                              d.next())
                            : ((s && i.connectionState !== o.a.CONNECTING) ||
                                !1 === c) &&
                              (this.logger.warn(
                                `disconnectService: disconnect service ${t} failed for device ${e}`,
                                i,
                              ),
                              this.connectingDevices.delete(e),
                              n.next({ state: L.Failed, device: i }),
                              n.complete(),
                              d.next())));
                    }),
                  () => d.next()
                );
              }),
            );
          }
          connectDeviceToService(e, t, i, c) {
            (this.automaticallyActivateBluetooth(),
              t === N.a.AUDIOPLAYER && this.automaticallyActivateAudioplayer(),
              this.subscriptionConnectService.closed
                ? (this.popupManagementService.request(
                    n.Ob.POPUP_CM_POPUP_BLUETOOTH_CONNECTING,
                  ),
                  (this.subscriptionConnectService = Object(v.b)(
                    this.bluetoothService.bluetoothAvailable$,
                    this.bluetoothService.audioPlayerAvailable$,
                  )
                    .pipe(
                      Object(p.a)(([e, i]) =>
                        t === N.a.AUDIOPLAYER ? e && i : e,
                      ),
                      Object(g.a)((e) => !!e),
                      Object(f.a)(c),
                      Object(h.a)(1),
                      Object(O.a)((t) =>
                        this.connectService(e.id, i, t ? t.uri : void 0),
                      ),
                      Object(b.a)(this.destroyed$$),
                    )
                    .subscribe((i) => {
                      if (
                        (this.logger.debug("received connection process: ", i),
                        i.state === L.RequiresPairing && i.pairing)
                      )
                        switch (i.pairing.passKeyMode) {
                          case o.e.SECURESIMPLEPAIRINGSHOWANDCONFIRM:
                            this.logger.debug(
                              "Navigate to BTDevicePairing",
                              i.pairing.id,
                            );
                            const e = {};
                            ((e.id = i.pairing.id),
                              (e.context = t),
                              this.routingService.goTo(
                                y.a.children.SSPCompareCancelOnly,
                                e,
                              ));
                            break;
                          default:
                            this.logger.warn(
                              "Encountered unknown RsiPassKeyState for pairing:",
                              i.pairing,
                            );
                        }
                      else
                        i.state === L.Succeeded &&
                          (I.b.isPhoneContext(t) &&
                            this.automaticallyTogglePhones(e, t),
                          this.routingService.activeAppContextSnapshot ===
                            C.s &&
                            (this.logger.info(
                              "Route back to source selection after successful device bonding.",
                            ),
                            this.routingService.goBack()));
                    })))
                : this.logger.warn(
                    "connectDeviceToService: previous request still running, ignoring new request for: ",
                    e,
                  ));
          }
          disconnectDeviceFromService(e, t, i) {
            t.pipe(
              Object(h.a)(1),
              Object(g.a)((t) => !!t && t.id === e.id),
              Object(O.a)(() => this.disconnectService(e.id, i)),
              Object(b.a)(this.destroyed$$),
            ).subscribe((t) => {
              t.state === L.Succeeded
                ? (this.popupManagementService.request(
                    n.Ob.POPUP_CM_POPUP_BT_DEVICES_DISCONNECT_OK,
                  ),
                  this.logger.info(
                    "disconnectDeviceFromService: Successfully disconnected service " +
                      i +
                      " from device " +
                      e.name,
                  ))
                : t.state === L.Failed &&
                  this.logger.warn(
                    `disconnectDeviceFromService: failed to disconnect service ${i} from device ${e.name}`,
                    t,
                  );
            });
          }
        }
        return (
          (e.ɵprov = m.bc({
            factory: function () {
              return new e(
                m.cc(r.a),
                m.cc(w.a),
                m.cc(D.a),
                m.cc(j.c),
                m.cc(R.a),
                m.cc(_.a),
                m.cc($.a),
              );
            },
            token: e,
            providedIn: "root",
          })),
          e
        );
      })();
    },
    djHQ: function (e, t, i) {
      "use strict";
      (i.d(t, "a", function () {
        return o;
      }),
        i.d(t, "b", function () {
          return r;
        }));
      var c = i("uHmZ"),
        n = i("o1hM"),
        o = (function (e) {
          return (
            (e.NOTCONNECTED = "nicht verbunden"),
            (e.DEACTIVATED = "Deaktiviert"),
            (e.DEVICENAME = "%1"),
            (e.PHONE1 = "Telefon 1"),
            (e.PHONE2 = "Telefon 2"),
            (e.PHONE = "Telefon"),
            (e.VEHICLECONTROL = "Bluetooth-Fahrzeugfernbedienung"),
            (e.AUDIOPLAYER = "Audio Player"),
            (e.HEADSET = "Headset"),
            (e.SMARTPHONEINTERFACE = "Audi Smartphone Interface"),
            (e.ANDROIDAUTO = "Android Auto"),
            (e.CARPLAY = "Apple CarPlay"),
            (e.WIFIHOTSPOT = "Audi WLAN Hotspot"),
            (e.PHONE_CONTEXT = "Phone"),
            (e.SETTINGS_CONTEXT = "Settings"),
            e
          );
        })({});
      let r = (() => {
        class e {
          static getIconForContext(e, t = !1, i, n) {
            switch (e) {
              case c.a.PHONE:
              case c.a.PHONE1:
              case c.a.PHONE2:
                return t
                  ? i
                    ? "E9BA_phone_hfp_preferred_device.webp"
                    : "ES0BA_phone_hfp_preferred_device.webp"
                  : "E1A2_phone_handsfree_hfp.webp";
              case c.a.AUDIOPLAYER:
                return "E07E_media_ami_mediaplayer.webp";
              case c.a.HEADSET:
                return "E9DD_connect_headset.webp";
              case c.a.VEHICLECONTROL:
                return "E9DC_connect_key.webp";
              case c.a.WIFIHOTSPOT:
                return "E89E_connect_wifi_hotspot.webp";
              case c.a.SMARTPHONEINTEGRATION:
                return n ? this.getAsiIcon(n) : this.universalAsiDeviceIcon;
              case c.a.MMICONNECTAPP:
                return "E183_connect.webp";
              default:
                return "";
            }
          }
          static getAsiIcon(e) {
            if (
              !(
                e.device &&
                e.device.asiDevice &&
                e.device.asiDevice.activeTechnology
              )
            )
              return e.asiTechnology
                ? this.getIconForAsiTechnology(e.asiTechnology)
                : this.universalAsiDeviceIcon;
            switch (e.device.asiDevice.activeTechnology) {
              case n.a.AndroidAuto:
                return this.googleAndroidAutoIcon;
              case n.a.CarPlay:
                return this.appleCarPlayIcon;
              default:
                return this.universalAsiDeviceIcon;
            }
          }
          static getIconForAsiTechnology(e) {
            switch (e) {
              case n.l.AndroidAuto:
                return this.googleAndroidAutoIcon;
              case n.l.CarPlay:
                return this.appleCarPlayIcon;
              default:
                return this.universalAsiDeviceIcon;
            }
          }
          static getTitleForContext(e, t, i) {
            switch (e) {
              case c.a.PHONE:
              case c.a.PHONE1:
                return t ? o.PHONE1 : o.PHONE;
              case c.a.PHONE2:
                return o.PHONE2;
              case c.a.AUDIOPLAYER:
                return o.AUDIOPLAYER;
              case c.a.HEADSET:
                return o.HEADSET;
              case c.a.VEHICLECONTROL:
                return o.VEHICLECONTROL;
              case c.a.WIFIHOTSPOT:
                return o.WIFIHOTSPOT;
              case c.a.SMARTPHONEINTEGRATION:
                return i ? this.getTitle(i) : o.SMARTPHONEINTERFACE;
              default:
                return "";
            }
          }
          static getTitle(e) {
            if (e && e.asiTechnology)
              switch (e.asiTechnology) {
                case n.l.AndroidAuto:
                  return o.ANDROIDAUTO;
                case n.l.CarPlay:
                  return o.CARPLAY;
                default:
                  return o.SMARTPHONEINTERFACE;
              }
            else {
              if (
                !(
                  e &&
                  e.device &&
                  e.device.asiDevice &&
                  e.device.asiDevice.activeTechnology
                )
              )
                return o.SMARTPHONEINTERFACE;
              switch (e.device.asiDevice.activeTechnology) {
                case n.a.AndroidAuto:
                  return o.ANDROIDAUTO;
                case n.a.CarPlay:
                  return o.CARPLAY;
                default:
                  return o.SMARTPHONEINTERFACE;
              }
            }
          }
          static getTitleOnTwoLines(e) {
            const t = e.device ? e.device.deviceName : "",
              i = this.getTitle({
                device: { asiDevice: e.device },
                asiTechnology: e.technology,
                context: c.a.SMARTPHONEINTEGRATION,
                forDetails: !0,
              });
            return "" === t ? i : i + "\n" + t;
          }
          static getAsiDeviceName(e) {
            return e && e.asiDevice && e.asiDevice.deviceName
              ? e.asiDevice.deviceName
              : "";
          }
          static mapActiveToSupportedTechnology(e) {
            switch (e) {
              case n.a.AndroidAuto:
                return n.l.AndroidAuto;
              case n.a.CarPlay:
                return n.l.CarPlay;
              default:
                return;
            }
          }
          static isPhoneContext(e) {
            return e === c.a.PHONE || e === c.a.PHONE1 || e === c.a.PHONE2;
          }
        }
        return (
          (e.universalAsiDeviceIcon = "E0AA_smartphone_integration.webp"),
          (e.googleAndroidAutoIcon = "E0A9_google_android_auto.webp"),
          (e.appleCarPlayIcon = "E0A7_apple_car_play.webp"),
          e
        );
      })();
    },
  },
]);
