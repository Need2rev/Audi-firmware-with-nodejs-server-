(window.webpackJsonp = window.webpackJsonp || []).push([
  [48, 72],
  {
    JCQ5: function (e, n, l) {
      "use strict";
      var t = l("GVcY");
      (l.d(n, "a", function () {
        return t.a;
      }),
        l.d(n, "b", function () {
          return t.b;
        }),
        l.d(n, "c", function () {
          return t.d;
        }),
        l.d(n, "d", function () {
          return t.e;
        }),
        l.d(n, "e", function () {
          return t.g;
        }),
        l("8u35"),
        l("qciS"),
        l("K9Bs"),
        l("KyqV"));
    },
    TOCt: function (e, n, l) {
      "use strict";
      (l.d(n, "b", function () {
        return k;
      }),
        l.d(n, "a", function () {
          return B;
        }));
      var t = l("D57K"),
        i = l("Yi6/"),
        a = l("JCQ5"),
        o = l("J7Kz"),
        u = l("ZTXN"),
        c = l("bwdy"),
        r = l("ROBh"),
        s = l("IdLP"),
        b = l("GoAz"),
        d = l("HM3f"),
        p = l("J+dc"),
        h = l("xVbo"),
        v = l("TLy2"),
        g = l("kuMc"),
        m = l("YtkY"),
        x = l("iT4G"),
        f = l("jIqt"),
        T = l("Lrfq"),
        O = l("i7Dj"),
        D = l("vAPC"),
        S = l("CsoK"),
        N = l("uHmZ"),
        I = l("djHQ"),
        y = l("q5gU"),
        P = l("P1io"),
        C = l("2DZl"),
        E = l("YEFf"),
        _ = l("t8AR"),
        A = l("kNkr"),
        L = l("kZht"),
        w = l("sg2e"),
        $ = l("FfND"),
        M = l("yNay"),
        k = (function (e) {
          return (
            (e[(e.InProgress = 0)] = "InProgress"),
            (e[(e.RequiresPairing = 1)] = "RequiresPairing"),
            (e[(e.Succeeded = 2)] = "Succeeded"),
            (e[(e.Failed = 3)] = "Failed"),
            (e[(e.AlreadyBonding = 4)] = "AlreadyBonding"),
            e
          );
        })({});
      let B = (() => {
        class e {
          constructor(e, n, l, t, i, a, o) {
            ((this.bluetoothService = e),
              (this.popupManagementService = n),
              (this.connectivityService = l),
              (this.phoneService = t),
              (this.asiService = i),
              (this.routingService = a),
              (this.connectingDevices = new Set()),
              (this.destroyed$$ = new u.a()),
              (this.subscriptionConnectService = c.a.EMPTY),
              (this.logger = o.getLogger("main.BluetoothConnectionService")));
          }
          automaticallyActivateBluetooth() {
            this.bluetoothService.bluetoothAvailable$
              .pipe(Object(p.a)(1))
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
                Object(h.a)((e) => !!e),
                Object(p.a)(1),
                Object(v.a)(() => this.bluetoothService.audioPlayerAvailable$),
                Object(p.a)(1),
                Object(g.a)(this.destroyed$$),
              )
              .subscribe((e) => {
                e ||
                  (this.logger.info(
                    "automaticallyActivateAudioplayer: try to activate bluetooth audioplayer before trying to connect to device...",
                  ),
                  this.bluetoothService.setAudioPlayer(!0));
              });
          }
          automaticallyTogglePhones(e, n) {
            this.connectivityService
              .bluetoothDevice$(e.id)
              .pipe(
                Object(h.a)(i.wd),
                Object(p.a)(1),
                Object(g.a)(this.destroyed$$),
              )
              .subscribe((e) => {
                this.phoneService.setSlotForDevice(
                  e.id,
                  n === N.a.PHONE1 ? 1 : 2,
                );
              });
          }
          connectService(e, n, l) {
            if (
              (this.logger.info(
                `connectService: attempting to connect ${n} for device`,
                e,
              ),
              this.connectingDevices.has(e))
            )
              return Object(r.a)({
                state: k.AlreadyBonding,
                device: void 0,
                pairing: void 0,
              });
            this.connectingDevices.add(e);
            const o = this.bluetoothService.devices$.pipe(
                Object(m.a)((n) => n.find((n) => n.id === e)),
                Object(i.Kd)(),
              ),
              c = this.bluetoothService.pairings$.pipe(
                Object(m.a)((n) =>
                  n.find(
                    (n) => !!n.bluetoothDevice && n.bluetoothDevice.id === e,
                  ),
                ),
                Object(i.Kd)(),
              );
            return s.a.create((i) =>
              Object(t.a)(this, void 0, void 0, function* () {
                yield this.bluetoothService.cancelSearch();
                const t = yield o
                  .pipe(Object(p.a)(1), Object(x.a)(1e3))
                  .toPromise();
                if (!t)
                  return i.error(
                    "connectService: Could not resolve device snapshot",
                  );
                if (
                  n === a.b.WIRELESSCARPLAY ||
                  n === a.b.WIRELESSANDROIDAUTO
                ) {
                  const e = yield this.asiService.devices$
                    .pipe(Object(p.a)(1), Object(x.a)(4e3))
                    .toPromise();
                  if (e) {
                    const n = e.find(
                      (e) =>
                        !!e.bluetoothMacAddress &&
                        e.bluetoothMacAddress === t.macAddress,
                    );
                    n &&
                      (yield this.asiService
                        .setDeviceMode(n, A.l.Smartphone)
                        .pipe(Object(p.a)(1), Object(x.a)(1e3))
                        .toPromise());
                  }
                }
                const r = Object(b.a)(
                  this.bluetoothService.connectService(t, n, l),
                ).pipe(
                  Object(m.a)((e) => !!e),
                  Object(f.a)(void 0),
                );
                i.next({ state: k.InProgress, device: t });
                let s = !1;
                const h = new u.a();
                return (
                  Object(d.b)(o, c, r)
                    .pipe(Object(g.a)(h))
                    .subscribe(([l, t, o]) => {
                      (this.logger.info("connectService: state changed", {
                        device: l,
                        pairing: t,
                        connectResult: o,
                      }),
                        l && l.connectionState === a.a.CONNECTING && (s = !0),
                        t && t.pairingState !== a.c.OK
                          ? t.pairingState === a.c.ERROR
                            ? (this.logger.warn(
                                `connectService: pairing failed for ${e}`,
                                t,
                              ),
                              this.connectingDevices.delete(e),
                              i.next({
                                state: k.Failed,
                                device: l,
                                pairing: t,
                              }),
                              i.complete(),
                              h.next())
                            : (this.logger.info(
                                `connectService: pairing required for ${e}`,
                                t,
                              ),
                              i.next({
                                state: k.RequiresPairing,
                                device: l,
                                pairing: t,
                              }))
                          : l &&
                            (l.connectedServices &&
                            l.connectedServices.includes(n)
                              ? (this.logger.info(
                                  `connectService: service ${n} was connected for ${e}`,
                                  l,
                                ),
                                this.connectingDevices.delete(e),
                                i.next({
                                  state: k.Succeeded,
                                  device: l,
                                  pairing: t,
                                }),
                                i.complete(),
                                h.next())
                              : ((s && l.connectionState !== a.a.CONNECTING) ||
                                  !1 === o) &&
                                (this.logger.warn(
                                  `connectService: connect service ${n} failed for device ${e}`,
                                  l,
                                ),
                                this.connectingDevices.delete(e),
                                i.next({
                                  state: k.Failed,
                                  device: l,
                                  pairing: t,
                                }),
                                i.complete(),
                                h.next())));
                    }),
                  () => h.next()
                );
              }),
            );
          }
          disconnectService(e, n) {
            if (
              (this.logger.info(
                `disconnectService: attempting to disconnect ${n} for device`,
                e,
              ),
              this.connectingDevices.has(e))
            )
              return Object(r.a)({ state: k.AlreadyBonding });
            this.connectingDevices.add(e);
            const l = this.bluetoothService.devices$.pipe(
              Object(m.a)((n) => n.find((n) => n.id === e)),
              Object(T.a)(),
              Object(O.a)(),
            );
            return s.a.create((i) =>
              Object(t.a)(this, void 0, void 0, function* () {
                const t = yield l
                  .pipe(Object(p.a)(1), Object(D.a)(1e3, [void 0]))
                  .toPromise();
                if (!t)
                  return i.error(
                    "disconnectService: Could not resolve device snapshot",
                  );
                const o = Object(b.a)(
                  this.bluetoothService.disconnectService(t, n),
                ).pipe(
                  Object(m.a)((e) => !!e),
                  Object(f.a)(void 0),
                );
                i.next({ state: k.InProgress, device: t });
                let c = !1;
                const r = new u.a();
                return (
                  Object(d.b)(l, o)
                    .pipe(Object(g.a)(r))
                    .subscribe(([l, t]) => {
                      (l && l.connectionState === a.a.CONNECTING && (c = !0),
                        l &&
                          (l.connectedServices &&
                          !l.connectedServices.includes(n)
                            ? (this.logger.info(
                                `disconnectService: service ${n} was disconnected for ${e}`,
                                l,
                              ),
                              this.connectingDevices.delete(e),
                              i.next({ state: k.Succeeded, device: l }),
                              i.complete(),
                              r.next())
                            : ((c && l.connectionState !== a.a.CONNECTING) ||
                                !1 === t) &&
                              (this.logger.warn(
                                `disconnectService: disconnect service ${n} failed for device ${e}`,
                                l,
                              ),
                              this.connectingDevices.delete(e),
                              i.next({ state: k.Failed, device: l }),
                              i.complete(),
                              r.next())));
                    }),
                  () => r.next()
                );
              }),
            );
          }
          connectDeviceToService(e, n, l, t) {
            (this.automaticallyActivateBluetooth(),
              n === N.a.AUDIOPLAYER && this.automaticallyActivateAudioplayer(),
              this.subscriptionConnectService.closed
                ? (this.popupManagementService.request(
                    i.Ob.POPUP_CM_POPUP_BLUETOOTH_CONNECTING,
                  ),
                  (this.subscriptionConnectService = Object(d.b)(
                    this.bluetoothService.bluetoothAvailable$,
                    this.bluetoothService.audioPlayerAvailable$,
                  )
                    .pipe(
                      Object(m.a)(([e, l]) =>
                        n === N.a.AUDIOPLAYER ? e && l : e,
                      ),
                      Object(h.a)((e) => !!e),
                      Object(S.a)(t),
                      Object(p.a)(1),
                      Object(v.a)((n) =>
                        this.connectService(e.id, l, n ? n.uri : void 0),
                      ),
                      Object(g.a)(this.destroyed$$),
                    )
                    .subscribe((l) => {
                      if (
                        (this.logger.debug("received connection process: ", l),
                        l.state === k.RequiresPairing && l.pairing)
                      )
                        switch (l.pairing.passKeyMode) {
                          case a.e.SECURESIMPLEPAIRINGSHOWANDCONFIRM:
                            this.logger.debug(
                              "Navigate to BTDevicePairing",
                              l.pairing.id,
                            );
                            const e = {};
                            ((e.id = l.pairing.id),
                              (e.context = n),
                              this.routingService.goTo(
                                y.a.children.SSPCompareCancelOnly,
                                e,
                              ));
                            break;
                          default:
                            this.logger.warn(
                              "Encountered unknown RsiPassKeyState for pairing:",
                              l.pairing,
                            );
                        }
                      else
                        l.state === k.Succeeded &&
                          (I.b.isPhoneContext(n) &&
                            this.automaticallyTogglePhones(e, n),
                          this.routingService.activeAppContextSnapshot ===
                            P.s &&
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
          disconnectDeviceFromService(e, n, l) {
            n.pipe(
              Object(p.a)(1),
              Object(h.a)((n) => !!n && n.id === e.id),
              Object(v.a)(() => this.disconnectService(e.id, l)),
              Object(g.a)(this.destroyed$$),
            ).subscribe((n) => {
              n.state === k.Succeeded
                ? (this.popupManagementService.request(
                    i.Ob.POPUP_CM_POPUP_BT_DEVICES_DISCONNECT_OK,
                  ),
                  this.logger.info(
                    "disconnectDeviceFromService: Successfully disconnected service " +
                      l +
                      " from device " +
                      e.name,
                  ))
                : n.state === k.Failed &&
                  this.logger.warn(
                    `disconnectDeviceFromService: failed to disconnect service ${l} from device ${e.name}`,
                    n,
                  );
            });
          }
        }
        return (
          (e.ɵprov = L.bc({
            factory: function () {
              return new e(
                L.cc(o.a),
                L.cc(w.a),
                L.cc(C.a),
                L.cc(E.c),
                L.cc(_.a),
                L.cc($.a),
                L.cc(M.a),
              );
            },
            token: e,
            providedIn: "root",
          })),
          e
        );
      })();
    },
    djHQ: function (e, n, l) {
      "use strict";
      (l.d(n, "a", function () {
        return a;
      }),
        l.d(n, "b", function () {
          return o;
        }));
      var t = l("uHmZ"),
        i = l("o1hM"),
        a = (function (e) {
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
      let o = (() => {
        class e {
          static getIconForContext(e, n = !1, l, i) {
            switch (e) {
              case t.a.PHONE:
              case t.a.PHONE1:
              case t.a.PHONE2:
                return n
                  ? l
                    ? "E9BA_phone_hfp_preferred_device.webp"
                    : "ES0BA_phone_hfp_preferred_device.webp"
                  : "E1A2_phone_handsfree_hfp.webp";
              case t.a.AUDIOPLAYER:
                return "E07E_media_ami_mediaplayer.webp";
              case t.a.HEADSET:
                return "E9DD_connect_headset.webp";
              case t.a.VEHICLECONTROL:
                return "E9DC_connect_key.webp";
              case t.a.WIFIHOTSPOT:
                return "E89E_connect_wifi_hotspot.webp";
              case t.a.SMARTPHONEINTEGRATION:
                return i ? this.getAsiIcon(i) : this.universalAsiDeviceIcon;
              case t.a.MMICONNECTAPP:
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
              case i.a.AndroidAuto:
                return this.googleAndroidAutoIcon;
              case i.a.CarPlay:
                return this.appleCarPlayIcon;
              default:
                return this.universalAsiDeviceIcon;
            }
          }
          static getIconForAsiTechnology(e) {
            switch (e) {
              case i.l.AndroidAuto:
                return this.googleAndroidAutoIcon;
              case i.l.CarPlay:
                return this.appleCarPlayIcon;
              default:
                return this.universalAsiDeviceIcon;
            }
          }
          static getTitleForContext(e, n, l) {
            switch (e) {
              case t.a.PHONE:
              case t.a.PHONE1:
                return n ? a.PHONE1 : a.PHONE;
              case t.a.PHONE2:
                return a.PHONE2;
              case t.a.AUDIOPLAYER:
                return a.AUDIOPLAYER;
              case t.a.HEADSET:
                return a.HEADSET;
              case t.a.VEHICLECONTROL:
                return a.VEHICLECONTROL;
              case t.a.WIFIHOTSPOT:
                return a.WIFIHOTSPOT;
              case t.a.SMARTPHONEINTEGRATION:
                return l ? this.getTitle(l) : a.SMARTPHONEINTERFACE;
              default:
                return "";
            }
          }
          static getTitle(e) {
            if (e && e.asiTechnology)
              switch (e.asiTechnology) {
                case i.l.AndroidAuto:
                  return a.ANDROIDAUTO;
                case i.l.CarPlay:
                  return a.CARPLAY;
                default:
                  return a.SMARTPHONEINTERFACE;
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
                return a.SMARTPHONEINTERFACE;
              switch (e.device.asiDevice.activeTechnology) {
                case i.a.AndroidAuto:
                  return a.ANDROIDAUTO;
                case i.a.CarPlay:
                  return a.CARPLAY;
                default:
                  return a.SMARTPHONEINTERFACE;
              }
            }
          }
          static getTitleOnTwoLines(e) {
            const n = e.device ? e.device.deviceName : "",
              l = this.getTitle({
                device: { asiDevice: e.device },
                asiTechnology: e.technology,
                context: t.a.SMARTPHONEINTEGRATION,
                forDetails: !0,
              });
            return "" === n ? l : l + "\n" + n;
          }
          static getAsiDeviceName(e) {
            return e && e.asiDevice && e.asiDevice.deviceName
              ? e.asiDevice.deviceName
              : "";
          }
          static mapActiveToSupportedTechnology(e) {
            switch (e) {
              case i.a.AndroidAuto:
                return i.l.AndroidAuto;
              case i.a.CarPlay:
                return i.l.CarPlay;
              default:
                return;
            }
          }
          static isPhoneContext(e) {
            return e === t.a.PHONE || e === t.a.PHONE1 || e === t.a.PHONE2;
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
    zuly: function (e, n, l) {
      "use strict";
      (l.r(n),
        l.d(n, "ConnectedDevicesModuleNgFactory", function () {
          return Zt;
        }));
      var t = l("kZht"),
        i = l("QQZH"),
        a = l("HM3f"),
        o = l("GoAz"),
        u = l("Yi6/"),
        c = l("JCQ5"),
        r = l("J7Kz"),
        s = l("TOCt"),
        b = l("YtkY"),
        d = l("kuMc"),
        p = l("jIqt"),
        h = l("Ohay"),
        v = l("J+dc"),
        g = l("xVbo"),
        m = l("2DZl"),
        x = l("YEFf"),
        f = l("uHmZ"),
        T = l("q5gU"),
        O = l("P1io"),
        D = l("djHQ"),
        S = l("MzQn"),
        N = l("z+Ui"),
        I = (function (e) {
          return (
            (e.SEARCHING = "Suche..."),
            (e.CHOOSE_A_DEVICE = "Ger\xe4t ausw\xe4hlen"),
            (e.NOTE = "Hinweis"),
            e
          );
        })({});
      class y {
        constructor(e, n, l, t, a, o, r, s, v, g) {
          switch (
            ((this.bluetoothService = e),
            (this.router = n),
            (this.btDevicePairingService = l),
            (this.popupManagementService = t),
            (this.connectivityService = a),
            (this.phoneService = o),
            (this.clampService = r),
            (this.wifiService = s),
            (this.titleTextIds = D.a),
            (this.subtitleTextIds = I),
            (this.iconCategory = u.Z),
            (this.listItemType = u.rb),
            (this.showUsbUserHint = !1),
            (this.requiredService = []),
            (this.destroyed$$ = new i.a(1)),
            (this.logger = g.getLogger("phone.BTDevicesFoundComponent")),
            (this.title =
              this.router.activeAppContextSnapshot === O.w
                ? D.a.PHONE_CONTEXT
                : D.a.SETTINGS_CONTEXT),
            (this.disconnectExisting = v.snapshot.queryParams
              ? v.snapshot.queryParams.disconnectExisting
              : void 0),
            (this.context = v.snapshot.params.context),
            this.context === f.a.PHONE && (this.context = f.a.PHONE1),
            this.context)
          ) {
            case f.a.PHONE1:
            case f.a.PHONE2:
              this.requiredService = [c.b.TELEPHONYHFP];
              break;
            case f.a.AUDIOPLAYER:
              ((this.requiredService = [c.b.A2DPAVRCPSOURCE]),
                (this.showUsbUserHint = !0));
              break;
            case f.a.HEADSET:
              this.requiredService = [c.b.TELEPHONYHEADSET];
              break;
            case f.a.SMARTPHONEINTEGRATION:
              ((this.requiredService = [
                c.b.WIRELESSCARPLAY,
                c.b.WIRELESSANDROIDAUTO,
                c.b.TELEPHONYHFP,
              ]),
                (this.showUsbUserHint = !0));
              break;
            default:
              ((this.requiredService = [c.b.TELEPHONYHFP]),
                this.logger.error(
                  "Undefined enter context after routing to BTDevicesFoundComponent!",
                ));
          }
          ((this.searching$ = this.bluetoothService.classicNodes$.pipe(
            Object(b.a)((e) => {
              const n = e && e.length > 0 ? e[0] : void 0;
              return Object(u.xd)(n, "isInquiryActive") && n.isInquiryActive;
            }),
            Object(d.a)(this.destroyed$$),
            Object(p.a)(!1),
          )),
            (this.discoveredDevices$ =
              this.bluetoothService.discoveredDevices$.pipe(
                Object(b.a)((e) =>
                  e.filter(
                    (e) =>
                      !!this.requiredService &&
                      this.requiredService.some(
                        (n) =>
                          e.offeredServices && e.offeredServices.includes(n),
                      ),
                  ),
                ),
                Object(d.a)(this.destroyed$$),
                Object(p.a)([]),
              )),
            (this.devicesFound$ = this.discoveredDevices$.pipe(
              Object(b.a)((e) => e && e.length > 0),
              Object(h.a)(),
            )),
            this.clampService.clampSStateOn$
              .pipe(Object(d.a)(this.destroyed$$))
              .subscribe((e) => {
                e || this.router.goBack();
              }));
        }
        ngOnInit() {
          this.isAsiContext()
            ? Object(a.b)([
                Object(o.a)(this.bluetoothService.setVisibility(!0, !0)),
                Object(o.a)(this.wifiService.setWifiEnabled(!0)),
              ])
                .pipe(Object(v.a)(1))
                .subscribe(() => this.startSearch())
            : this.startSearch();
        }
        ngOnDestroy() {
          (this.bluetoothService.cancelOngoingConnection(),
            this.bluetoothService.cancelSearch(),
            this.destroyed$$.next());
        }
        connectDevice(e) {
          let n;
          (this.popupManagementService.request(
            u.Ob.POPUP_CM_POPUP_BLUETOOTH_CONNECTING.toString(),
          ),
            D.b.isPhoneContext(this.context) &&
              this.connectivityService
                .bluetoothDevice$(e.id)
                .pipe(
                  Object(g.a)(u.wd),
                  Object(v.a)(1),
                  Object(d.a)(this.destroyed$$),
                )
                .subscribe((e) => {
                  this.phoneService.setSlotForDevice(
                    e.id,
                    this.context === f.a.PHONE1 ? 1 : 2,
                  );
                }),
            (n =
              this.context === f.a.SMARTPHONEINTEGRATION
                ? e.offeredServices &&
                  e.offeredServices.includes(c.b.WIRELESSCARPLAY)
                  ? c.b.WIRELESSCARPLAY
                  : c.b.WIRELESSANDROIDAUTO
                : this.requiredService[0]),
            this.btDevicePairingService
              .connectService(e.id, n, this.disconnectExisting)
              .pipe(Object(d.a)(this.destroyed$$))
              .subscribe((e) => {
                if (
                  (this.logger.info("received connection process: ", e),
                  e.state === s.b.RequiresPairing && e.pairing)
                )
                  switch (e.pairing.passKeyMode) {
                    case c.e.SECURESIMPLEPAIRINGSHOWANDCONFIRM:
                      this.logger.debug(
                        "Navigate to BTDevicePairing",
                        e.pairing.id,
                      );
                      const n = {};
                      ((n.id = e.pairing.id),
                        (n.context = this.context),
                        this.router.goTo(T.a.children.SSPCompareCancelOnly, n));
                      break;
                    default:
                      this.logger.warn(
                        "Encountered unknown RsiPassKeyState for pairing:",
                        e.pairing,
                      );
                  }
                else
                  e.state === s.b.Succeeded &&
                    this.router.goBack(void 0, this.context);
              }));
        }
        startSearch() {
          this.bluetoothService.searchForDevices();
        }
        back() {
          this.router.goBack();
        }
        isAsiContext() {
          return this.context === f.a.SMARTPHONEINTEGRATION;
        }
      }
      var P = l("bwdy"),
        C = l("8lHc"),
        E = l("TLy2"),
        _ = l("E2zj"),
        A = l("6qsK");
      class L {
        constructor(e, n, l, t, i, a) {
          ((this.bluetoothService = e),
            (this.router = n),
            (this.route = l),
            (this.lockingService = t),
            (this.popupManager = i),
            (this.deviceName = ""),
            (this.autoAcceptDelay = 3e3),
            (this.subscriptions = new P.a()),
            (this.cancelled = !1),
            (this.borderStyleEnum = u.m),
            (this.titleTextIds = D.a),
            (this.logger = a.getLogger("phone.BTDevicePairingComponent")),
            (this.context = l.snapshot.params.context),
            this.logger.info("constructor: received context ", this.context),
            (this.title =
              this.router.activeAppContextSnapshot === O.w
                ? D.a.PHONE_CONTEXT
                : D.a.SETTINGS_CONTEXT));
        }
        ngOnInit() {
          this.subscriptions.add(
            this.lockingService
              .getProperty({ type: u.Eb.BONDING })
              .pipe(
                Object(E.a)((e) => e.lock$),
                Object(h.a)(),
              )
              .subscribe((e) => {
                e &&
                  (this.logger.info(
                    "ngOnInit: cancel internal pairing because of locking",
                  ),
                  this.popupManager.request(
                    u.Ob.POPUP_CM_POPUP_MAIN_PAIRING_BT_ERROR_LOCKED,
                  ),
                  this.pairing
                    ? this.bluetoothService.deletePairing(this.pairing)
                    : this.logger.error(
                        "ngOnInit: delete pairing not possible. pairing could not be found",
                      ),
                  this.router.goBack());
              }),
          );
          const e = this.route.params.pipe(Object(b.a)((e) => e.id));
          (this.subscriptions.add(
            e.subscribe((e) => {
              ((this.pairId = e),
                this.logger.debug(
                  "Received pairing id from routing:" + this.pairId,
                ));
            }),
          ),
            (this.pairing$ = Object(a.b)(
              this.bluetoothService.pairings$,
              e,
            ).pipe(Object(b.a)(([e, n]) => e.find((e) => e.id === n)))),
            this.subscriptions.add(
              this.pairing$.subscribe((e) => {
                (this.logger.debug("Received pairing", e),
                  (this.pairing = e),
                  (this.deviceName = (this.pairing && this.pairing.name) || ""),
                  this.pairing && this.pairing.passKeyError
                    ? this.goToFoundDevices()
                    : this.pairing || this.leavePairing());
              }),
            ),
            this.subscriptions.add(
              Object(C.a)(this.autoAcceptDelay).subscribe(() => {
                this.pairing && !this.cancelled
                  ? (this.logger.info(
                      `auto-accept pairing after ${this.autoAcceptDelay}ms:`,
                      this.pairing,
                    ),
                    this.bluetoothService.acceptPairing(this.pairing))
                  : this.logger.info(
                      "auto-accept pairing: pairing already cancelled or no longer active",
                    );
              }),
            ));
        }
        ngOnDestroy() {
          this.subscriptions.unsubscribe();
        }
        isCancelAllowed() {
          return (
            !!this.pairing &&
            (this.pairing.pairingState === c.c.WAITINGFORDECISION ||
              this.pairing.pairingState === c.c.WAITINGFORDEVICE)
          );
        }
        cancel() {
          (this.pairing &&
            this.isCancelAllowed() &&
            ((this.cancelled = !0),
            this.bluetoothService.rejectPairing(this.pairing)),
            this.leavePairing());
        }
        goToFoundDevices() {
          (this.logger.info(
            `goToFoundDevices: navigating to found devices with context ${this.context}`,
          ),
            this.router.goTo(T.a.children.DiscoveredDevices, this.context));
        }
        leavePairing() {
          switch (this.router.activeAppContextSnapshot) {
            case O.w:
              return (
                this.logger.info(
                  "leavingPairing: phoneAppContext, navigating to PhoneRoute.Main",
                ),
                void this.router.goTo(A.b.Main)
              );
            case O.s:
              return (
                this.logger.info(
                  "leavingPairing: mediaAppContext, navigating to MediaRoute.SourceSelection",
                ),
                void this.router.goBack(_.a.SourceSelection)
              );
            default:
              return (
                this.logger.info("leavingPairing: navigation goBack"),
                void this.router.goBack()
              );
          }
        }
      }
      class w {
        constructor(e) {
          ((this.routingService = e),
            (this.titleTextIds = D.a),
            (this.title =
              this.routingService.activeAppContextSnapshot === O.w
                ? D.a.PHONE_CONTEXT
                : D.a.SETTINGS_CONTEXT));
        }
      }
      var $ = l("ROBh"),
        M = l("t8AR"),
        k = l("JS0r"),
        B = (function (e) {
          return (
            (e.bluetoothProfile = "Bluetoothprofil"),
            (e.preferredDevice = "Preferred Device"),
            (e.enterPin = "PIN\n eingeben"),
            (e.asiDisclaimer = "rechtliche\nHinweise"),
            (e.asiConnectionType = "Verbindungsart"),
            (e.activateWifi = "WLAN\n aktivieren"),
            (e.deactivateWifi = "WLAN\n deaktivieren"),
            (e.deleteDevice = "l\xf6schen"),
            e
          );
        })({});
      class j {
        constructor(e, n, l, t, i, a, o, c, r, s) {
          ((this.optionMenuService = e),
            (this.wifiService = n),
            (this.globalRoutingService = l),
            (this.bluetoothService = t),
            (this.smartphoneIntegrationService = i),
            (this.connectivityService = a),
            (this.phoneService = o),
            (this.popupManager = c),
            (this.clampService = r),
            (this.asiTechnology = void 0),
            (this.asiLockingParams = [
              {
                lockingKey: {
                  type: u.Eb.SCREEN,
                  category: u.Ab.COMPLEX,
                  context: u.Bb.DEFAULT_CONTEXT,
                },
              },
              {
                lockingKey: {
                  type: u.Eb.SCREEN,
                  category: u.Ab.LONG_TEXT,
                  context: u.Bb.DEFAULT_CONTEXT,
                },
              },
            ]),
            (this.bluetoothProfileOption = {
              icon: "E07A_media_bluetooth.webp",
              developerText: "Bluetoothprofil",
              visible: !0,
              enabled: !0,
              textId: B.bluetoothProfile,
            }),
            (this.preferredDeviceOption = {
              icon: "E0FC_radio_Favorit.webp",
              developerText: "Preferred Device",
              visible: !0,
              enabled: !0,
              textId: B.preferredDevice,
            }),
            (this.enterPinOption = {
              icon: "E02C_phone_sim.webp",
              developerText: "PIN\n eingeben",
              visible: !1,
              enabled: !1,
              textId: B.enterPin,
            }),
            (this.asiDisclaimerOption = {
              icon: "E9C1_Information.webp",
              developerText: "rechtliche\nHinweise",
              visible: !1,
              enabled: !1,
              disabledLockingParams: this.asiLockingParams,
              textId: B.asiDisclaimer,
            }),
            (this.asiConnectionTypeOption = {
              icon: "",
              developerText: "Verbindungsart",
              visible: !1,
              enabled: !1,
              textId: B.asiConnectionType,
            }),
            (this.activateWifiOption = {
              icon: "E89E_connect_wifi_hotspot.webp",
              developerText: "WLAN\n aktivieren",
              visible: !1,
              enabled: !0,
              textId: B.activateWifi,
            }),
            (this.deactivateWifiOption = {
              icon: "E89E_connect_wifi_hotspot_enabled.webp",
              developerText: "WLAN\n deaktivieren",
              visible: !1,
              enabled: !0,
              textId: B.deactivateWifi,
            }),
            (this.deleteDeviceOption = {
              icon: "E16F_phone_delete_number.webp",
              developerText: "l\xf6schen",
              visible: !0,
              enabled: !0,
              textId: B.deleteDevice,
            }),
            (this.options = [
              this.bluetoothProfileOption,
              this.preferredDeviceOption,
              this.enterPinOption,
              this.asiDisclaimerOption,
              this.activateWifiOption,
              this.deactivateWifiOption,
              this.deleteDeviceOption,
            ]),
            (this.logger = s.getLogger("ConnectionManagerOptionsService")),
            (this.generalInfo$ =
              this.retrieveGeneralConnectivityInformations$()),
            (this.options$ = this.determineOptionAvailability$(
              this.generalInfo$,
            )));
        }
        determineOptionAvailability$(e) {
          return e.pipe(
            Object(b.a)((e) => {
              const n = e.item.context === f.a.WIFIHOTSPOT,
                l = e.item.context === f.a.MMICONNECTAPP,
                t = e.item.context === f.a.SMARTPHONEINTEGRATION,
                i =
                  e.item.context === f.a.PHONE1 ||
                  e.item.context === f.a.PHONE2;
              ((this.context = e.item.context),
                (this.activateWifiOption.visible =
                  !e.item.forDetails &&
                  (n || l) &&
                  e.wifiState.available &&
                  !e.wifiState.enabled),
                (this.deactivateWifiOption.visible = !1));
              let a = void 0,
                o = !1;
              if (e.item.device) {
                const i = e.item.device,
                  u =
                    i.bluetoothDevice ||
                    (i.phoneDevice && i.phoneDevice.bluetoothDevice);
                ((this.bluetoothProfileOption.visible =
                  !!u &&
                  u.connectionState === c.a.CONNECTED &&
                  !n &&
                  !t &&
                  !l &&
                  e.clampSOn),
                  (a = this.existingAsiDevice(i, e.asiDevices)));
                const r = e.item.forDetails && !!a;
                ((o = this.isDeviceIdle(i, e.connectivityDevices, a)),
                  (this.deleteDeviceOption.visible = !n && !l),
                  (this.deleteDeviceOption.enabled =
                    e.clampSOn && (!r || a.deletable) && o));
              } else
                ((this.bluetoothProfileOption.visible = !1),
                  (this.deleteDeviceOption.visible = !1));
              ((this.asiTechnology = e.item.asiTechnology),
                (this.asiDisclaimerOption.visible = t && !!this.asiTechnology),
                (this.asiDisclaimerOption.enabled =
                  this.asiDisclaimerOption.visible),
                (this.asiConnectionTypeOption.visible = t),
                (this.preferredDeviceOption.visible = i));
              const u = this.options.filter((e) => e.visible);
              return (
                this.logger.info(
                  "options$: emitting visible options for item ",
                  {
                    item: e.item,
                    existingAsiDevice: a,
                    isDeviceIdle: o,
                    options: u,
                  },
                ),
                u
              );
            }),
          );
        }
        retrieveGeneralConnectivityInformations$() {
          return this.optionMenuService.item$.pipe(
            Object(E.a)((e) =>
              e
                ? Object(a.b)(
                    this.optionMenuService.item$,
                    this.wifiService.wifiState$,
                    this.connectivityService.devices$.pipe(Object(p.a)([])),
                    this.smartphoneIntegrationService.devices$.pipe(
                      Object(p.a)([]),
                    ),
                    this.clampService.clampSStateOn$,
                  )
                : Object($.a)([]),
            ),
            Object(g.a)((e) => !!e && e.length > 0),
            Object(b.a)(([e, n, l, t, i]) => ({
              item: e,
              wifiState: n,
              connectivityDevices: l,
              asiDevices: t,
              clampSOn: i,
            })),
            Object(u.Xc)(this.logger, "generalInformation changed:"),
            Object(u.Kd)(),
          );
        }
        isDeviceIdle(e, n, l) {
          this.logger.info("connectivityDevices:", n);
          const t = this.phoneService.calls
            .filter((e) => !!e.phoneDevice.device)
            .map((e) => e.phoneDevice.device);
          if (t.length > 0) {
            const i = e.bluetoothDevice,
              a =
                e.phoneDevice ||
                n.find(
                  (e) =>
                    !!i && !!e.bluetoothDevice && e.bluetoothDevice.id === i.id,
                ),
              o = !!a && t.some((e) => e.id === a.id);
            let u = !1;
            if (!o && l) {
              const e = l.bluetoothMacAddress,
                i = n.find((n) =>
                  n.bluetoothDevice
                    ? n.bluetoothDevice.macAddress === e &&
                      n.bluetoothDevice.connectionState === c.a.CONNECTED
                    : !!n.asiDevice && n.asiDevice.bluetoothMacAddress === e,
                );
              u = !!i && t.some((e) => e.id === i.id);
            }
            return !(o || u);
          }
          return !0;
        }
        existingAsiDevice(e, n) {
          const l = e.phoneDevice,
            t = e.bluetoothDevice;
          return (
            e.asiDevice ||
            n.find(
              (e) =>
                (!!t && e.bluetoothMacAddress === t.macAddress) ||
                (!!l && !!l.asiDevice && e.id === l.asiDevice.id),
            )
          );
        }
        onOptionTap(e) {
          switch ((this.logger.debug("onOptionTap: tapped ", e), e.option)) {
            case this.bluetoothProfileOption:
              this.goToBluetoothProfiles(e.item.device);
              break;
            case this.preferredDeviceOption:
              this.setAsFavorite(e.item.device);
              break;
            case this.enterPinOption:
              break;
            case this.asiDisclaimerOption:
              (this.logger.debug("requesting POPUP_CM_BANNER_ASI_ABOUT"),
                this.popupManager.request(u.Ob.POPUP_CM_BANNER_ASI_ABOUT, {
                  data: this.asiTechnology,
                }));
              break;
            case this.activateWifiOption:
              this.wifiService.setWifiActivated(!0);
              break;
            case this.deleteDeviceOption:
              this.deleteDevice(e.item.device);
              break;
            default:
              this.logger.warn(
                "Received option tap event with unexpected type: ",
                event,
              );
          }
        }
        setAsFavorite(e) {
          e.bluetoothDevice
            ? this.bluetoothService.setAsPreferredDevice(
                e.bluetoothDevice,
                !e.bluetoothDevice.isPreferred,
              )
            : e.phoneDevice &&
              e.phoneDevice.bluetoothDevice &&
              this.bluetoothService.trustedDevices$
                .pipe(
                  Object(b.a)((n) =>
                    n.find(
                      (n) =>
                        !(!e.phoneDevice || !e.phoneDevice.bluetoothDevice) &&
                        n.id === e.phoneDevice.bluetoothDevice.id,
                    ),
                  ),
                  Object(v.a)(1),
                )
                .subscribe((e) => {
                  e &&
                    this.bluetoothService.setAsPreferredDevice(
                      e,
                      !e.isPreferred,
                    );
                });
        }
        deleteDevice(e) {
          e
            ? this.generalInfo$
                .pipe(
                  Object(b.a)((e) => (!!e && e.connectivityDevices) || []),
                  Object(E.a)((n) =>
                    M.a.isAsiDeviceActive(e.asiDevice)
                      ? this.smartphoneIntegrationService
                          .deactivateAsiTechnology(e.asiDevice)
                          .pipe(Object(b.a)(() => n))
                      : Object($.a)(n),
                  ),
                  Object(b.a)((n) => {
                    if (
                      e.bluetoothDevice ||
                      (e.phoneDevice && e.phoneDevice.bluetoothDevice)
                    ) {
                      const l = e.bluetoothDevice
                        ? e.bluetoothDevice.id
                        : e.phoneDevice.bluetoothDevice.id;
                      return n.find(
                        (e) =>
                          !!e.bluetoothDevice && e.bluetoothDevice.id === l,
                      );
                    }
                    if (e.asiDevice) {
                      const l = e.asiDevice.id;
                      return n.find(
                        (e) => !!e.asiDevice && e.asiDevice.id === l,
                      );
                    }
                    if (e.wifiDevice) {
                      const l = e.wifiDevice.id;
                      return n.find(
                        (e) =>
                          !!e.wlanClientDevice && e.wlanClientDevice.id === l,
                      );
                    }
                    return (
                      this.logger.warn(
                        "deleteDevice: Deletion of the current type of trusted device cannot be performed as it is not implemented yet or the type unknown.",
                        e,
                      ),
                      null
                    );
                  }),
                  Object(v.a)(1),
                  Object(E.a)((e) =>
                    e
                      ? this.connectivityService.deleteConnectivityDevice(e)
                      : (this.logger.warn(
                          "deleteDevice: No device found in connectivityDevices",
                        ),
                        Object($.a)(null)),
                  ),
                )
                .subscribe((e) => {
                  e && this.popupManager.request(e);
                })
            : this.logger.warn(
                "deleteDevice: reference to device to delete is invalid! Cannot delete ",
                e,
              );
        }
        goToBluetoothProfiles(e) {
          const n = e.bluetoothDevice
            ? e.bluetoothDevice.id
            : e.phoneDevice && e.phoneDevice.bluetoothDevice
              ? e.phoneDevice.bluetoothDevice.id
              : void 0;
          n &&
            this.globalRoutingService.goTo(
              k.a.children.Bluetooth.children.BluetoothProfiles,
              { id: n, context: this.context },
            );
        }
      }
      var R = l("o1hM");
      class H {
        constructor(e, n, l, t, o, r, s, p, h, v, g, m) {
          switch (
            ((this.routingService = e),
            (this.bluetoothService = n),
            (this.phoneService = l),
            (this.connectivityService = t),
            (this.popupManagementService = o),
            (this.optionMenuService = r),
            (this.smiService = v),
            (this.bluetoothConnectionService = g),
            (this.cdr = m),
            (this.ConnectedDevicesRoute = T.a),
            (this.lockingParamBonding = { lockingKey: { type: u.Eb.BONDING } }),
            (this.utils = D.b),
            (this.connectivityDeviceTextIds = D.a),
            (this.listItemType = u.rb),
            (this.optionTypeEnum = B),
            (this.newConnectionTile = { disabled: !1, highlight: !1 }),
            (this.clampSStateOn = !1),
            (this.destroyed$$ = new i.a(1)),
            (this.logger = h.getLogger(
              "main.bluetooth-trusted-devices-component",
            )),
            (this.context = p.snapshot.params.context),
            this.context === f.a.PHONE && (this.context = f.a.PHONE1),
            this.context)
          ) {
            case f.a.PHONE1:
              ((this.subtitle = this.phoneService.twoPhonesSupported
                ? D.a.PHONE1
                : D.a.PHONE),
                (this.requiredService = c.b.TELEPHONYHFP));
              break;
            case f.a.PHONE2:
              ((this.subtitle = D.a.PHONE2),
                (this.requiredService = c.b.TELEPHONYHFP));
              break;
            case f.a.AUDIOPLAYER:
              ((this.subtitle = D.a.AUDIOPLAYER),
                (this.requiredService = c.b.A2DPAVRCPSOURCE));
              break;
            case f.a.HEADSET:
              ((this.subtitle = D.a.HEADSET),
                (this.requiredService = c.b.TELEPHONYHEADSET));
              break;
            default:
              ((this.requiredService = c.b.TELEPHONYHFP),
                this.logger.error(
                  "Undefined enter context after routing to BTDevicesFoundComponent!",
                ));
          }
          if (this.context === f.a.AUDIOPLAYER)
            this.currentlyConnectedPhone$ =
              this.bluetoothService.audioPlayerDevice$.pipe(
                Object(d.a)(this.destroyed$$),
              );
          else if (D.b.isPhoneContext(this.context)) {
            const e = (
              this.context === f.a.PHONE1
                ? this.phoneService.phone1$
                : this.phoneService.phone2$
            ).pipe(
              Object(d.a)(this.destroyed$$),
              Object(E.a)((e) =>
                e
                  ? this.connectivityService.devices$.pipe(
                      Object(b.a)((n) =>
                        n.find(
                          (n) => !(!e || !e.device) && n.id === e.device.id,
                        ),
                      ),
                    )
                  : Object($.a)(void 0),
              ),
            );
            this.currentlyConnectedPhone$ = Object(a.b)(
              e,
              this.bluetoothService.trustedDevices$,
            ).pipe(
              Object(b.a)(([e, n]) =>
                e
                  ? n.find(
                      (n) =>
                        !!e.bluetoothDevice && n.id === e.bluetoothDevice.id,
                    )
                  : void 0,
              ),
              Object(d.a)(this.destroyed$$),
            );
          } else
            this.currentlyConnectedPhone$ =
              this.bluetoothService.trustedDevices$.pipe(
                Object(b.a)((e) =>
                  e.find(
                    (e) =>
                      !!e.connectedServices &&
                      e.connectedServices.includes(this.requiredService),
                  ),
                ),
                Object(d.a)(this.destroyed$$),
              );
          ((this.trustedDevicesTiles$ = Object(a.b)(
            this.bluetoothService.trustedDevices$.pipe(
              Object(b.a)((e) => this.createTilesForBtDevices(e)),
            ),
            this.currentlyConnectedPhone$,
          ).pipe(
            Object(b.a)(
              ([e, n]) => (
                e.forEach((e) => {
                  e.device &&
                    e.device.bluetoothDevice &&
                    ((e.highlight =
                      !!n && n.id === e.device.bluetoothDevice.id),
                    (e.disabled =
                      e.device.bluetoothDevice.connectedServices &&
                      e.device.bluetoothDevice.connectedServices.includes(
                        this.requiredService,
                      ) &&
                      (!n || n.id !== e.device.bluetoothDevice.id)));
                }),
                e
              ),
            ),
            Object(d.a)(this.destroyed$$),
          )),
            s.clampSStateOn$
              .pipe(Object(d.a)(this.destroyed$$))
              .subscribe((e) => {
                ((this.clampSStateOn = e), this.cdr.markForCheck());
              }),
            this.phoneService.callActive$
              .pipe(Object(d.a)(this.destroyed$$))
              .subscribe((e) => {
                e &&
                  this.context === f.a.HEADSET &&
                  this.routingService.goBack();
              }));
        }
        ngAfterViewInit() {
          this.smiService.currentActiveDevice$
            .pipe(Object(g.a)(u.wd), Object(d.a)(this.destroyed$$))
            .subscribe((e) => {
              (e.activeTechnology === R.a.CarPlay &&
                this.routingService.activeAppContextSnapshot.includes(
                  "phone",
                )) ||
                this.routingService.goBack();
            });
        }
        ngOnDestroy() {
          (this.bluetoothService.cancelOngoingConnection(),
            this.destroyed$$.next());
        }
        createNewConnection() {
          if (!this.clampSStateOn)
            return (
              this.popupManagementService.request(
                u.Ob.POPUP_CM_POPUP_SETTINGS_BLUETOOTH_SCONTACT_ERROR,
              ),
              void this.routingService.goBack()
            );
          Object(a.b)(
            this.bluetoothService.bluetoothAvailable$,
            this.currentlyConnectedPhone$,
          )
            .pipe(
              Object(b.a)(
                ([e, n]) => (
                  e ||
                    this.bluetoothService.setVisibility(!0, !0).catch((e) => {
                      throw (
                        this.logger.error(
                          "set bluetooth visibility failed:",
                          e,
                        ),
                        e
                      );
                    }),
                  n
                ),
              ),
              Object(v.a)(1),
              Object(d.a)(this.destroyed$$),
            )
            .subscribe((e) => {
              this.routingService.goTo(
                T.a.children.DiscoveredDevices,
                this.context,
                e
                  ? {
                      navigationExtras: {
                        queryParams: { disconnectExisting: e.id },
                      },
                    }
                  : void 0,
              );
            });
        }
        createTilesForBtDevices(e) {
          return e && 0 !== e.length
            ? e
                .filter(
                  (e) =>
                    e.offeredServices &&
                    e.offeredServices.includes(this.requiredService),
                )
                .reduce(
                  (e, n) => (
                    e.push({
                      icon: D.b.getIconForContext(
                        this.context,
                        n.isPreferred,
                        !0,
                      ),
                      device: { name: n.name, bluetoothDevice: n },
                      highlight: !1,
                      disabled: !1,
                    }),
                    e
                  ),
                  [this.newConnectionTile],
                )
            : [this.newConnectionTile];
        }
        disconnectDeviceFromService(e) {
          this.bluetoothConnectionService.disconnectDeviceFromService(
            e,
            this.currentlyConnectedPhone$,
            this.requiredService,
          );
        }
        connectDeviceToService(e) {
          this.bluetoothConnectionService.connectDeviceToService(
            e,
            this.context,
            this.requiredService,
            this.currentlyConnectedPhone$,
          );
        }
        toggleDeviceConnected(e) {
          if (!this.clampSStateOn)
            return (
              this.popupManagementService.request(
                u.Ob.POPUP_CM_POPUP_SETTINGS_BLUETOOTH_SCONTACT_ERROR,
              ),
              void this.routingService.goBack()
            );
          e.connectedServices &&
          e.connectedServices.includes(this.requiredService)
            ? this.disconnectDeviceFromService(e)
            : e.offeredServices &&
              e.offeredServices.includes(this.requiredService) &&
              this.connectDeviceToService(e);
        }
        openOptionsMenu(e) {
          e &&
            this.optionMenuService.showOptionMenu({
              device: e,
              context: this.context,
              forDetails: !0,
            });
        }
      }
      var F = l("Zbi+"),
        W = l("4piS"),
        z = l("B0wk");
      class U {
        constructor(e, n, l, t, a, o, c, r) {
          ((this.routingService = e),
            (this.phoneService = n),
            (this.wifiService = l),
            (this.systemConfigService = t),
            (this.smartphoneIntegration = a),
            (this.connectivityService = o),
            (this.bluetoothService = c),
            (this.optionMenuService = r),
            (this.destroyed$$ = new i.a(1)),
            (this.complexLockingParam = W.a),
            (this.longTextLockingParam = W.e),
            (this.ConnectedDevicesRoute = T.a),
            (this.utils = D.b),
            (this.connectivityDeviceTextIds = D.a),
            (this.listItemType = u.rb),
            (this.optionTypeEnum = B),
            (this.baseConfigVariant = z.l.BASE),
            (this.carRemoteDevice = void 0),
            (this.adbDevice = void 0),
            (this.enterDetailsContext = f.a),
            (this.wifiDisabled = !0),
            (this.asiAvailable$ =
              this.smartphoneIntegration.isAsiAvailable$.pipe(Object(u.Kd)())),
            (this.phoneActive$ = n.calls$.pipe(
              Object(b.a)((e) => (e.focusCall ? e.focusCall.callState : null)),
              Object(b.a)(
                (e) =>
                  e === F.d.RINGINGINCOMING ||
                  e === F.d.ACTIVE ||
                  e === F.d.DIALING ||
                  e === F.d.HOLD ||
                  e === F.d.RINGINGOUTGOING,
              ),
              Object(h.a)(),
              Object(d.a)(this.destroyed$$),
            )),
            (this.phone1$ = this.phoneService.phone1$.pipe(
              Object(E.a)((e) =>
                e
                  ? this.connectivityService.devices$.pipe(
                      Object(b.a)((n) =>
                        n.find(
                          (n) => !(!e || !e.device) && n.id === e.device.id,
                        ),
                      ),
                    )
                  : Object($.a)(void 0),
              ),
              Object(b.a)((e) =>
                e ? { name: e.name, phoneDevice: e } : void 0,
              ),
              Object(d.a)(this.destroyed$$),
              Object(p.a)(void 0),
            )),
            (this.phone2$ = this.phoneService.phone2$.pipe(
              Object(E.a)((e) =>
                e
                  ? this.connectivityService.devices$.pipe(
                      Object(b.a)((n) =>
                        n.find(
                          (n) => !(!e || !e.device) && n.id === e.device.id,
                        ),
                      ),
                    )
                  : Object($.a)(void 0),
              ),
              Object(b.a)((e) =>
                e ? { name: e.name, phoneDevice: e } : void 0,
              ),
              Object(d.a)(this.destroyed$$),
              Object(p.a)(void 0),
            )),
            (this.audioplayer$ = this.bluetoothService.audioPlayerDevice$.pipe(
              Object(b.a)((e) =>
                e ? { name: e.name, bluetoothDevice: e } : void 0,
              ),
              Object(d.a)(this.destroyed$$),
              Object(p.a)(void 0),
            )),
            (this.numberOfConnWifiDevices$ = this.wifiService.wifiState$.pipe(
              Object(E.a)((e) =>
                e && e.enabled && e.available
                  ? this.wifiService.wifiClients$.pipe(
                      Object(b.a)((e) => (e ? e.length : 0)),
                    )
                  : Object($.a)(-1),
              ),
              Object(d.a)(this.destroyed$$),
              Object(p.a)(-1),
            )),
            (this.asiDevice$ =
              this.smartphoneIntegration.currentActiveDevice$.pipe(
                Object(b.a)((e) =>
                  e ? { name: e.deviceName || e.name, asiDevice: e } : void 0,
                ),
                Object(d.a)(this.destroyed$$),
                Object(p.a)(void 0),
              )),
            (this.headsetDevice$ = this.bluetoothService.headsetDevice$.pipe(
              Object(b.a)((e) =>
                e ? { name: e.name, bluetoothDevice: e } : void 0,
              ),
              Object(d.a)(this.destroyed$$),
              Object(p.a)(void 0),
            )));
        }
        get adbDeviceName() {
          return this.adbDevice ? this.adbDevice.name : "";
        }
        get carRemoteDeviceName() {
          return this.carRemoteDevice ? this.carRemoteDevice.name : "";
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        openOptionsMenu(e, n) {
          if (e && (e.bluetoothDevice || e.asiDevice || e.phoneDevice)) {
            const l = !!e.asiDevice,
              t = e.asiDevice
                ? D.b.mapActiveToSupportedTechnology(
                    e.asiDevice.activeTechnology,
                  )
                : void 0;
            this.optionMenuService.showOptionMenu({
              device: e,
              asiTechnology: t,
              context: n,
              forDetails: l,
            });
          } else
            n === f.a.WIFIHOTSPOT && this.wifiDisabled
              ? this.optionMenuService.showOptionMenu({
                  context: n,
                  forDetails: !1,
                })
              : e &&
                e.bluetoothDevice &&
                n === f.a.HEADSET &&
                this.optionMenuService.showOptionMenu({
                  device: e,
                  context: n,
                  forDetails: !1,
                });
        }
      }
      var G = l("sQI3"),
        Y = l("8j5Y"),
        q = l("C05f"),
        V = l("8lto"),
        K = l("AfGm"),
        Z = l("y5NU"),
        X = l("H+9d"),
        Q = (function (e) {
          return (
            (e.NoDeviceIsConnectedToHotspot =
              "Aktuell ist kein Ger\xe4t mit dem Audi WLAN Hotspot verbunden.\n\nHotspot Name (SSID): {{ssid}}\nPasswort: {{pwd}}"),
            (e.PleaseConnectToWifiHotspot =
              "Please connect to Wi-Fi hotspot.\n\nHotspot Name (SSID): {{ssid}}\n\nPasswort: {{pwd}}"),
            e
          );
        })({});
      class J {
        constructor(e, n, l, t, a, o, c, r) {
          ((this.routingService = e),
            (this.onlineRoutingService = n),
            (this.webappResources = l),
            (this.connectivityService = t),
            (this.wifiService = a),
            (this.lockingService = o),
            (this.disclaimerService = c),
            (this.popupManager = r),
            (this.ConnectedDevicesRoute = T.a),
            (this.lockingParamBonding = { lockingKey: { type: u.Eb.BONDING } }),
            (this.BondingInfoTextEnum = Q),
            (this.createNewConnectionElement = {
              id: "New",
              name: "New",
              uri: "",
            }),
            (this.hotspotConnectInfoRequested$$ = new q.a(!1)),
            (this.destroyed$$ = new i.a(1)),
            this.lockingService
              .getProperty(W.e[0].lockingKey)
              .pipe(
                Object(E.a)((e) => e.lock$),
                Object(d.a)(this.destroyed$$),
              )
              .subscribe(),
            this.lockingService
              .getProperty(W.a[0].lockingKey)
              .pipe(
                Object(E.a)((e) => e.lock$),
                Object(d.a)(this.destroyed$$),
              )
              .subscribe());
        }
        ngOnInit() {
          ((this.devices$ = this.wifiService.wifiClients$.pipe(
            Object(b.a)((e) =>
              e && e.length > 0 ? [this.createNewConnectionElement, ...e] : [],
            ),
          )),
            (this.hotspotDisabled$ = this.wifiService.wifiState$.pipe(
              Object(Y.a)((e) => {
                (e && e.available) || this.routingService.goBack(T.a);
              }),
              Object(b.a)((e) => !e || !e.available || !e.enabled),
              Object(h.a)(),
            )),
            (this.purchaseOfAdditDataPackagesNeeded$ =
              this.connectivityService.dataModuleObject$.pipe(
                Object(b.a)((e) =>
                  e && e.esimTrafficState ? e.esimTrafficState.state : void 0,
                ),
                Object(b.a)((e) => e === Z.d.EXPIRED || e === Z.d.LOW),
                Object(h.a)(),
                Object(E.a)((e) =>
                  e
                    ? this.webappResources.webappList$.pipe(
                        Object(b.a)(
                          (e) => !!e.find((e) => e.serviceId === K.a.DATAPLAN),
                        ),
                      )
                    : Object($.a)(!1),
                ),
                Object(h.a)(),
              )));
          const e = {
            enabled$: Object(a.b)(
              this.hotspotDisabled$,
              this.hotspotConnectInfoRequested$$,
              this.devices$,
            ).pipe(
              Object(E.a)(([e, n, l]) =>
                e
                  ? Object($.a)(!1)
                  : this.lockingService
                      .getProperty(
                        n || 0 === l.length
                          ? W.e[0].lockingKey
                          : W.a[0].lockingKey,
                      )
                      .pipe(Object(E.a)((e) => e.lock$)),
              ),
              Object(h.a)(),
              Object(d.a)(this.destroyed$$),
            ),
            reason$: Object($.a)(u.B.LOCKING),
            priority: u.D.LockingComplex,
          };
          this.disclaimerSubscription =
            this.disclaimerService.registerDisclaimer(e);
        }
        ngOnDestroy() {
          (this.disclaimerService.unregisterDisclaimer(
            this.disclaimerSubscription,
          ),
            this.destroyed$$.next(),
            this.hotspotConnectInfoRequested$$.complete());
        }
        createNewConnection() {
          this.hotspotConnectInfoRequested$$.next(!0);
        }
        back() {
          this.hotspotConnectInfoRequested$$.getValue()
            ? this.hotspotConnectInfoRequested$$.next(!1)
            : this.routingService.goUp();
        }
        activateWifi() {
          this.wifiService
            .setWifiActivated(!0)
            .then(() => {
              this.popupManager.request(
                u.Ob.POPUP_TERMINAL_MODE_POPUP_WIFI_HOTSPOT_ACTIVATED,
              );
            })
            .catch(() => {
              this.routingService.goTo(T.a.children.ConnectionSettings);
            });
        }
        goToDataplansOverview() {
          this.onlineRoutingService.goToIncludeStateWebApp(
            O.z,
            `${K.a.DATAPLAN}@@${X.b.DATAPLANS_TOP_UP}`,
          );
        }
        get wifiConnectQrCode() {
          const e = this.wifiService.mainAP;
          if (!e) return;
          let n;
          switch (e.encryptionType) {
            case G.a.WAPI:
            case G.a.WPA2:
            case G.a.WPA3:
              n = "WPA";
              break;
            case G.a.NONE:
              n = "nopass";
          }
          return (
            "WIFI:" +
            [
              this.qrCodeFragment("T", n),
              this.qrCodeFragment("S", e.ssidTwoPointFourGHz),
              this.qrCodeFragment("P", e.password),
              this.qrCodeFragment("H", (!e.isVisible).toString()),
              ";",
            ]
              .filter(u.wd)
              .join(";")
          );
        }
        qrCodeFragment(e, n) {
          if (null != n) return `${e}:${n.replace(/[",:;\\]/g, "\\$&")}`;
        }
      }
      var ee = l("88uq");
      class ne {
        constructor(e, n, l, t, o, c, r, s, h, v) {
          ((this.routingService = e),
            (this.asiService = n),
            (this.connectivityService = l),
            (this.bluetoothService = t),
            (this.optionMenuService = o),
            (this.popupManager = c),
            (this.popupManagementService = r),
            (this.disclaimerService = s),
            (this.lockingService = h),
            (this.ConnectedDevicesRoute = T.a),
            (this.lockingParamBonding = { lockingKey: { type: u.Eb.BONDING } }),
            (this.optionTypeEnum = B),
            (this.utils = D.b),
            (this.listItemType = u.rb),
            (this.connectivityDeviceTextIds = D.a),
            (this.disabledTextsEnum = u.C),
            (this.iconCategoryEnum = u.Z),
            (this.destroyed$$ = new i.a(1)),
            (this.lockingActive = !1),
            (this.newConnectionTile = {}),
            (this.tilesTappedBlocking$$ = new q.a(!1)),
            (this.currentlyConnectingDeviceId = new q.a("")),
            (this.logger = v.getLogger("AsiDevicesComponent")),
            (this.asiDevices$ = Object(a.b)(
              this.connectivityService.asiDevices$,
              this.asiService.wirelessEnabled$$,
            ).pipe(
              Object(b.a)(([e, n]) => {
                const l = [];
                return (
                  e
                    .map((e) =>
                      e.asiDevice.supportedTechnology.map((n) =>
                        this.createAsiTile(e, n),
                      ),
                    )
                    .forEach((e) => {
                      l.push(...e);
                    }),
                  l.sort(
                    (e, n) =>
                      (e.disabled ? 3 : e.highlight ? 1 : 2) -
                      (n.disabled ? 3 : n.highlight ? 1 : 2),
                  ),
                  n &&
                    (l.unshift(this.newConnectionTile),
                    (this.newConnectionTile.disabled = l.some(
                      (e) => !!e && !!e.highlight,
                    ))),
                  l
                );
              }),
              Object(p.a)([]),
              Object(d.a)(this.destroyed$$),
            )),
            (this.tilesBlocked$ = Object(a.b)(
              this.connectivityService.asiDevices$,
              this.tilesTappedBlocking$$.asObservable(),
            ).pipe(
              Object(b.a)(
                ([e, n]) =>
                  !!n ||
                  !!e.find(
                    (e) =>
                      !(
                        !e.asiDevice ||
                        (e.asiDevice.connectionState !== R.d.Activating &&
                          e.asiDevice.connectionState !== R.d.Deactivating)
                      ),
                  ),
              ),
              Object(ee.distinctUntilChanged)(),
              Object(u.pd)(this.logger, "tilesBlocked$"),
              Object(d.a)(this.destroyed$$),
            )),
            this.asiService.devices$
              .pipe(
                Object(ee.distinctUntilChanged)(),
                Object(b.a)((e) =>
                  e.filter((e) => e.connectionState === R.d.Activating),
                ),
                Object(ee.filter)((e) => e.length > 0),
                Object(d.a)(this.destroyed$$),
              )
              .subscribe((e) => {
                this.currentlyConnectingDeviceId.next(e[0].id);
              }));
        }
        ngOnInit() {
          (this.initSpeedDisclaimer(),
            this.subscribeAsiConnectionFailedPopups());
        }
        setTileTappedBlocking(e = !0, n = !0) {
          (this.logger.info(
            `setTileTappedBlocking: state ${e}; useResetTimer: ${n}`,
          ),
            this.tilesTappedBlocking$$.next(e),
            n &&
              window.setTimeout(
                () => this.tilesTappedBlocking$$.next(!e),
                200,
              ));
        }
        toggleDeviceConnected(e) {
          if (!e || !e.device)
            return void this.logger.error(
              "toggleDeviceConnected: no asiTile or no device for asiTile",
            );
          const n = e.device;
          if (M.a.isAsiDeviceActive(n))
            this.asiService
              .deactivateAsiTechnology(n)
              .pipe(Object(d.a)(this.destroyed$$))
              .subscribe(() => {});
          else {
            const l = e.technology;
            if (
              (this.popupManager.request(u.Ob.POPUP_CM_POPUP_ASI_CONNECTING),
              !n.attached &&
                this.asiService.wirelessAvailable &&
                e.correspondingBluetoothDevice)
            )
              return (
                this.setTileTappedBlocking(!0, !1),
                void this.asiService.currentActiveDevice$
                  .pipe(
                    Object(ee.take)(1),
                    Object(E.a)((e) =>
                      e
                        ? (this.logger.info(
                            "toggleDeviceConnected: deactivate currentActiveDevice",
                            e,
                          ),
                          this.asiService.deactivateAsiTechnology(e).pipe(
                            Object(u.pd)(
                              this.logger,
                              "toggleDeviceConnected: currentActiveDevice deactivated, waiting for previously active device being deactivated",
                            ),
                            Object(E.a)(() =>
                              this.asiService.devices$.pipe(
                                Object(b.a)((n) =>
                                  n.find((n) => n.id === e.id),
                                ),
                                Object(ee.filter)(
                                  (e) => !e || M.a.isDeactivationDone(e),
                                ),
                                Object(ee.take)(1),
                              ),
                            ),
                          ))
                        : (this.logger.info(
                            "toggleDeviceConnected: no currentActiveDevice to deactivate --\x3e just proceed activating new device",
                          ),
                          Object($.a)("")),
                    ),
                    Object(E.a)(() => this.bluetoothService.setVisibility(!0)),
                    Object(u.pd)(
                      this.logger,
                      "toggleDeviceConnected: BT visibility set",
                    ),
                    Object(E.a)(() =>
                      this.asiService.setDeviceMode(n, R.f.Smartphone),
                    ),
                    Object(E.a)(() =>
                      e.correspondingBluetoothDevice && l === R.l.CarPlay
                        ? (this.logger.info(
                            "toggleDeviceConnected: connectService for bluetoothDevice carplay",
                            e.correspondingBluetoothDevice,
                          ),
                          this.bluetoothService.connectService(
                            e.correspondingBluetoothDevice,
                            c.b.WIRELESSCARPLAY,
                          ))
                        : e.correspondingBluetoothDevice &&
                            l === R.l.AndroidAuto
                          ? (this.logger.info(
                              "toggleDeviceConnected: connectService for bluetoothDevice androidauto",
                              e.correspondingBluetoothDevice,
                            ),
                            this.bluetoothService.connectService(
                              e.correspondingBluetoothDevice,
                              c.b.WIRELESSANDROIDAUTO,
                            ))
                          : (this.logger.error(
                              "toggleDeviceConnected: no corresponding bluetooth device available",
                            ),
                            Object($.a)(void 0)),
                    ),
                    Object(E.a)((e) =>
                      e
                        ? (this.logger.info(
                            "toggleDeviceConnected: waiting for asiDevice being attached",
                            n,
                          ),
                          this.asiService.devices$.pipe(
                            Object(b.a)((e) => e.find((e) => e.id === n.id)),
                            Object(u.pd)(
                              this.logger,
                              "toggleDeviceConnected: found connected device by id",
                            ),
                            Object(ee.filter)((e) => !!e && !!e.attached),
                            Object(ee.take)(1),
                          ))
                        : Object($.a)(void 0),
                    ),
                    Object(E.a)((e) =>
                      e &&
                      (this.logger.info(
                        "toggleDeviceConnected: device attached",
                        e,
                      ),
                      e.disclaimerState !== R.g.Accepted)
                        ? (this.popupManager.request(
                            u.Ob.POPUP_CM_BANNER_ASI_FIRST_ENTRY_SCREEN2,
                            { data: n },
                          ),
                          Object($.a)(void 0))
                        : Object($.a)(void 0),
                    ),
                    Object(ee.timeoutWith)(
                      3e4,
                      Object($.a)(void 0).pipe(
                        Object(Y.a)(() =>
                          this.logger.warn(
                            "toggleDeviceConnected: timeout fired",
                          ),
                        ),
                        Object(Y.a)(() => this.setTileTappedBlocking(!1, !1)),
                        Object(b.a)(() =>
                          this.requestBluetoothConnectionFailedPopup(),
                        ),
                      ),
                    ),
                  )
                  .subscribe(() => {
                    (this.logger.info(
                      "toggleDeviceConnected: pipe finished and subscribe called. Unblocking tiles.",
                    ),
                      this.setTileTappedBlocking(!1, !1));
                  })
              );
            n.disclaimerState === R.g.Accepted && l
              ? (this.setTileTappedBlocking(),
                this.asiService.activateAsiTechnology(n, l).subscribe(() => {
                  this.setTileTappedBlocking(!1, !1);
                }))
              : this.popupManager.request(
                  u.Ob.POPUP_CM_BANNER_ASI_FIRST_ENTRY_SCREEN2,
                  { data: n },
                );
          }
        }
        createNewConnection() {
          this.routingService.goTo(
            T.a.children.DiscoveredDevices,
            f.a.SMARTPHONEINTEGRATION,
          );
        }
        ngOnDestroy() {
          (this.disclaimerSub &&
            this.disclaimerService.unregisterDisclaimer(this.disclaimerSub),
            this.destroyed$$.next(),
            this.destroyed$$.complete());
        }
        openOptionsMenu(e) {
          e &&
            this.optionMenuService.showOptionMenu({
              device: { asiDevice: e.device },
              asiTechnology: e.technology,
              context: f.a.SMARTPHONEINTEGRATION,
              forDetails: !0,
            });
        }
        createAsiTile(e, n) {
          return {
            device: e.asiDevice,
            correspondingBluetoothDevice: e.bluetoothDevice,
            icon: D.b.getIconForAsiTechnology(n),
            highlight: this.isDeviceToBeHighlighted(
              e.asiDevice.activeTechnology,
              n,
            ),
            disabled: this.isDeviceToBeDisabled(
              e.asiDevice.attached,
              n,
              e.bluetoothDevice,
            ),
            technology: n,
          };
        }
        isDeviceToBeHighlighted(e, n) {
          switch (e) {
            case R.a.AndroidAuto:
              return n === R.l.AndroidAuto;
            case R.a.CarPlay:
              return n === R.l.CarPlay;
            default:
              return !1;
          }
        }
        isDeviceToBeDisabled(e, n, l) {
          return !(e || (this.asiService.wirelessAvailable && l));
        }
        initSpeedDisclaimer() {
          const e = this.lockingService
            .getProperty({ type: u.Eb.SCREEN, category: u.Ab.LONG_TEXT })
            .pipe(Object(E.a)((e) => e.lock$));
          ((this.disclaimerSub = this.disclaimerService.registerDisclaimer({
            priority: u.D.LockingLongText,
            reason$: Object($.a)(u.B.LOCKING_LONG_TEXT),
            enabled$: e,
            allowOperationPanel: !0,
          })),
            this.disclaimerService.active$
              .pipe(Object(d.a)(this.destroyed$$))
              .subscribe((e) => {
                this.lockingActive = e;
              }));
        }
        requestBluetoothConnectionFailedPopup() {
          this.popupManagementService
            .isActive(u.Ob.POPUP_CM_POPUP_BLUETOOTH_CONNECTING)
            .pipe(
              Object(Y.a)((e) => {
                e &&
                  this.logger.info(
                    "requestBluetoothConnectionFailedPopup: POPUP_CM_POPUP_BLUETOOTH_CONNECTING is active, waiting for it to disappear",
                  );
              }),
              Object(ee.filter)((e) => !e),
              Object(ee.take)(1),
              Object(d.a)(this.destroyed$$),
            )
            .subscribe(() => {
              (this.logger.info(
                "requestBluetoothConnectionFailedPopup: toast gone, requesting popup",
              ),
                this.popupManager.request(
                  u.Ob.POPUP_CM_POPUP_MAIN_PAIRING_BT_ERROR_ELSE,
                ));
            });
        }
        subscribeAsiConnectionFailedPopups() {
          const e = this.asiService.devices$.pipe(
            Object(ee.pairwise)(),
            Object(u.pd)(
              this.logger,
              "subscribeAsiConnectionFailedPopups: received devices",
            ),
            Object(b.a)(([e, n]) => {
              const l = n.find(
                (e) =>
                  e.id === this.currentlyConnectingDeviceId.getValue() &&
                  (e.connectionState === R.d.Failed || e.failedDuringBusCycle),
              );
              if (!l) return !1;
              const t = e.find((e) => e.id === l.id);
              return (
                !t ||
                !(
                  !t ||
                  t.connectionState === R.d.Failed ||
                  t.failedDuringBusCycle
                )
              );
            }),
            Object(ee.distinctUntilChanged)(),
          );
          Object(a.b)(
            e,
            this.popupManagementService.isActive(
              u.Ob.POPUP_CM_POPUP_ASI_CONNECTING,
            ),
          )
            .pipe(
              Object(ee.distinctUntilChanged)(),
              Object(ee.filter)(([e]) => e),
              Object(E.a)(([e, n]) =>
                n
                  ? Object($.a)(
                      this.popupManager.unrequest(
                        u.Ob.POPUP_CM_POPUP_ASI_CONNECTING,
                      ),
                    )
                  : Object($.a)(null),
              ),
              Object(d.a)(this.destroyed$$),
            )
            .subscribe(() => {
              (this.logger.info(
                "subscribeAsiConnectionFailedPopups: toast gone, requesting popup",
              ),
                this.popupManager.request(
                  u.Ob.POPUP_CM_POPUP_ASI_CONNECTING_FAILED,
                ));
            });
        }
      }
      class le {
        constructor(e, n, l, t) {
          ((this.routingService = e),
            (this.wifiService = n),
            (this.bluetoothService = l),
            (this.smartphoneIntegrationService = t),
            (this.Routes = T.a),
            (this.canActivateCarPlay$ = Object(a.b)(
              this.wifiService.wifiState$,
              this.bluetoothService.bluetoothAvailable$,
            ).pipe(
              Object(b.a)(([e, n]) => e && e.enabled && e.available && n),
              Object(h.a)(),
            )),
            (this.bluetoothNodeName$ = this.bluetoothService.classicNodes$.pipe(
              Object(b.a)((e) => (e && e.length > 0 ? e[0].name : null)),
            )));
        }
        activateBtAndWifi() {
          (this.wifiService.wifiState$
            .pipe(
              Object(v.a)(1),
              Object(E.a)((e) =>
                e && e.enabled && e.available
                  ? Object($.a)("")
                  : this.wifiService.setWifiActivated(!0),
              ),
              Object(u.Qd)(this),
            )
            .subscribe(),
            this.bluetoothService.bluetoothAvailable$
              .pipe(
                Object(v.a)(1),
                Object(E.a)((e) =>
                  e
                    ? Object($.a)("")
                    : this.bluetoothService.setVisibility(!0, !0),
                ),
                Object(u.Qd)(this),
              )
              .subscribe());
        }
        ngOnDestroy() {}
      }
      class te extends u.cc {
        constructor(e, n, l) {
          (super(l.getLogger("settings.BtPairingGuard")),
            (this.bluetoothService = e),
            (this.routingService = n));
        }
        checkActivation(e, n) {
          this.logger.debug("canActivate: called with ", { next: e, state: n });
          const l = e.params.context,
            t = e.params.id;
          return t
            ? this.bluetoothService.pairings$.pipe(
                Object(E.a)((e) =>
                  e && e.find((e) => e && e.id === t)
                    ? Promise.resolve(!0)
                    : (this.logger.info(
                        "canActivate: deny access to bluetooth pairing screen: no pairing exists for given UUID ",
                        t,
                      ),
                      this.leavePairing(l)),
                ),
              )
            : (this.logger.info(
                "canActivate: deny access to bluetooth pairing screen: missing routing parameter id (uuid of pairing)",
              ),
              this.leavePairing(l));
        }
        leavePairing(e) {
          return e === f.a.AUDIOPLAYER
            ? (this.logger.info(
                "leavePairing: return back to Media.SourceSelection",
              ),
              this.routingService.goBack(_.a.SourceSelection))
            : e === f.a.PHONE1 || e === f.a.PHONE2
              ? (this.logger.info("leavePairing: return back to Phone.Main"),
                this.routingService.goBack(A.b.Main))
              : (this.logger.info("leavePairing: goBack to context ", e),
                this.routingService.goBack(void 0, e));
        }
      }
      const ie = () =>
        Promise.all([l.e(1), l.e(2), l.e(3), l.e(4), l.e(28), l.e(77)])
          .then(l.bind(null, "HeFu"))
          .then((e) => e.ConnectionSettingsModuleNgFactory);
      class ae {}
      var oe = l("C9Ky"),
        ue = l("4XZL"),
        ce = l("OtM5"),
        re = l("9ZFG"),
        se = l("yNay"),
        be = l("bMuc"),
        de = l("fu7d"),
        pe = l("bou3"),
        he = l("ZIdM"),
        ve = l("3bpu"),
        ge = l("6zvu"),
        me = l("VcEz"),
        xe = l("y9xZ"),
        fe = l("+sw+"),
        Te = l("BMrr"),
        Oe = l("IEns"),
        De = l("6480"),
        Se = l("FfND"),
        Ne = l("oeT7"),
        Ie = l("t7cT"),
        ye = l("vwU6"),
        Pe = l("z6QT"),
        Ce = l("flsk"),
        Ee = l("FQEI"),
        _e = l("O82V"),
        Ae = l("Eln4"),
        Le = l("evAh"),
        we = l("URLa"),
        $e = l("YcCK"),
        Me = l("mYyF"),
        ke = l("v98a"),
        Be = l("CpzC"),
        je = l("0Bsn"),
        Re = l("5GjX"),
        He = l("aOG8"),
        Fe = l("Krzs"),
        We = l("0qMr"),
        ze = l("An66"),
        Ue = l("bmFL"),
        Ge = l("E7cc"),
        Ye = l("N2Hj"),
        qe = l("UbWD"),
        Ve = l("2rvh"),
        Ke = l("odRV"),
        Ze = l("Udyh"),
        Xe = l("I3ve"),
        Qe = l("qiAR"),
        Je = l("007S"),
        en = l("oxWk"),
        nn = l("Tr//"),
        ln = l("Z2XD"),
        tn = l("VUTu"),
        an = l("nK9R"),
        on = l("qzuC"),
        un = l("8yWk"),
        cn = l("8WOv"),
        rn = l("1pak"),
        sn = l("P+G5"),
        bn = l("zPMi"),
        dn = l("iAsw"),
        pn = l("Pqed"),
        hn = l("BS+8"),
        vn = l("VYaS"),
        gn = l("HygI"),
        mn = l("sg2e"),
        xn = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;font-size:40px}.settings-list__route-item[_ngcontent-%COMP%]{padding:0 20px;height:120px}.settings-list[_ngcontent-%COMP%]:hover::-webkit-scrollbar{display:none}",
            ],
          ],
          data: {},
        });
      function fn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              13,
              "au3-list-route-item",
              [
                ["class", "settings-list__route-item"],
                ["id", "ConnDeviceFirstPhoneOfTwo"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Longpress"]],
              function (e, n, l) {
                var t = !0,
                  i = e.component;
                return (
                  "mib3Longpress" === n &&
                    (t =
                      !1 !==
                        i.openOptionsMenu(
                          e.context.mib3Let,
                          i.enterDetailsContext.PHONE1,
                        ) && t),
                  t
                );
              },
              ue.b,
              ue.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              ce.a,
              [re.a, t.h, se.a, [3, ce.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(2, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              De.a,
              [Se.a, Ne.i, ce.a, ge.a, De.b, Ie.a],
              {
                routeInfo: [0, "routeInfo"],
                routerParams: [1, "routerParams"],
              },
              null,
            ),
            t.xb(
              7,
              212992,
              null,
              0,
              ye.a,
              [
                se.a,
                t.z,
                t.l,
                me.b,
                Te.a,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                [2, Oe.a],
              ],
              null,
              { longpress: "mib3Longpress" },
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              9,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              10,
              114688,
              null,
              0,
              we.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                subtitleDeveloperText: [2, "subtitleDeveloperText"],
                subtitleNonI18nText: [3, "subtitleNonI18nText"],
                hasSubtitle: [4, "hasSubtitle"],
                type: [5, "type"],
                twolineBeginIcon: [6, "twolineBeginIcon"],
              },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              $e.a,
              [[2, ye.a], t.l, Me.a, ke.b],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(
              n,
              1,
              0,
              n.parent.parent.context.mib3Let ||
                (null == n.parent.parent.parent.context.mib3Let
                  ? null
                  : n.parent.parent.parent.context.mib3Let.asiDevice),
            ),
              e(n, 3, 0, "ConnDeviceFirstPhoneOfTwo"),
              e(n, 5, 0),
              e(
                n,
                6,
                0,
                l.ConnectedDevicesRoute.children.TrustedDevices,
                l.enterDetailsContext.PHONE1,
              ),
              e(n, 7, 0),
              e(n, 9, 0),
              e(
                n,
                10,
                0,
                "E1A0_phone_phone1.webp",
                l.connectivityDeviceTextIds.PHONE1,
                l.connectivityDeviceTextIds.NOTCONNECTED,
                null == n.context.mib3Let ? null : n.context.mib3Let.name,
                !0,
                l.listItemType.ITEM_TYPE_NO_END_ICON,
                !0,
              ));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 1).combinedDisabled,
              t.Nb(n, 1).useBrighterIcon,
              t.Nb(n, 9).markerClassEnabled,
            );
          },
        );
      }
      function Tn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), t.hb(16777216, [[1, 2]], null, 2, null, fn)),
            t.xb(
              2,
              16384,
              null,
              0,
              We.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (e()(), t.hb(0, null, null, 0)),
          ],
          function (e, n) {
            var l = n.component;
            e(n, 2, 0, t.Yb(n, 2, 0, t.Nb(n, 3).transform(l.phone1$)));
          },
          null,
        );
      }
      function On(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              13,
              "au3-list-route-item",
              [
                ["class", "settings-list__route-item"],
                ["id", "ConnDeviceSinglePhone"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Longpress"]],
              function (e, n, l) {
                var t = !0,
                  i = e.component;
                return (
                  "mib3Longpress" === n &&
                    (t =
                      !1 !==
                        i.openOptionsMenu(
                          e.context.mib3Let,
                          i.enterDetailsContext.PHONE1,
                        ) && t),
                  t
                );
              },
              ue.b,
              ue.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              ce.a,
              [re.a, t.h, se.a, [3, ce.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(2, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              De.a,
              [Se.a, Ne.i, ce.a, ge.a, De.b, Ie.a],
              {
                routeInfo: [0, "routeInfo"],
                routerParams: [1, "routerParams"],
              },
              null,
            ),
            t.xb(
              7,
              212992,
              null,
              0,
              ye.a,
              [
                se.a,
                t.z,
                t.l,
                me.b,
                Te.a,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                [2, Oe.a],
              ],
              null,
              { longpress: "mib3Longpress" },
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              9,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              10,
              114688,
              null,
              0,
              we.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                subtitleDeveloperText: [2, "subtitleDeveloperText"],
                subtitleNonI18nText: [3, "subtitleNonI18nText"],
                hasSubtitle: [4, "hasSubtitle"],
                type: [5, "type"],
                twolineBeginIcon: [6, "twolineBeginIcon"],
              },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              $e.a,
              [[2, ye.a], t.l, Me.a, ke.b],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(
              n,
              1,
              0,
              n.parent.parent.context.mib3Let ||
                (null == n.parent.parent.parent.context.mib3Let
                  ? null
                  : n.parent.parent.parent.context.mib3Let.asiDevice),
            ),
              e(n, 3, 0, "ConnDeviceSinglePhone"),
              e(n, 5, 0),
              e(
                n,
                6,
                0,
                l.ConnectedDevicesRoute.children.TrustedDevices,
                l.enterDetailsContext.PHONE1,
              ),
              e(n, 7, 0),
              e(n, 9, 0),
              e(
                n,
                10,
                0,
                "E1A2_phone_handsfree_hfp.webp",
                l.connectivityDeviceTextIds.PHONE,
                l.connectivityDeviceTextIds.NOTCONNECTED,
                null == n.context.mib3Let ? null : n.context.mib3Let.name,
                !0,
                l.listItemType.ITEM_TYPE_NO_END_ICON,
                !0,
              ));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 1).combinedDisabled,
              t.Nb(n, 1).useBrighterIcon,
              t.Nb(n, 9).markerClassEnabled,
            );
          },
        );
      }
      function Dn(e) {
        return t.ac(
          0,
          [
            (e()(), t.hb(16777216, [[1, 2]], null, 2, null, On)),
            t.xb(
              1,
              16384,
              null,
              0,
              We.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (e()(), t.hb(0, null, null, 0)),
          ],
          function (e, n) {
            var l = n.component;
            e(n, 1, 0, t.Yb(n, 1, 0, t.Nb(n, 2).transform(l.phone1$)));
          },
          null,
        );
      }
      function Sn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              13,
              "au3-list-route-item",
              [
                ["class", "settings-list__route-item"],
                ["id", "ConnDevicePhone2"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Longpress"]],
              function (e, n, l) {
                var t = !0,
                  i = e.component;
                return (
                  "mib3Longpress" === n &&
                    (t =
                      !1 !==
                        i.openOptionsMenu(
                          e.context.mib3Let,
                          i.enterDetailsContext.PHONE2,
                        ) && t),
                  t
                );
              },
              ue.b,
              ue.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              ce.a,
              [re.a, t.h, se.a, [3, ce.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(2, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              De.a,
              [Se.a, Ne.i, ce.a, ge.a, De.b, Ie.a],
              {
                routeInfo: [0, "routeInfo"],
                routerParams: [1, "routerParams"],
              },
              null,
            ),
            t.xb(
              7,
              212992,
              null,
              0,
              ye.a,
              [
                se.a,
                t.z,
                t.l,
                me.b,
                Te.a,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                [2, Oe.a],
              ],
              null,
              { longpress: "mib3Longpress" },
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              9,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              10,
              114688,
              null,
              0,
              we.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                subtitleDeveloperText: [2, "subtitleDeveloperText"],
                subtitleNonI18nText: [3, "subtitleNonI18nText"],
                hasSubtitle: [4, "hasSubtitle"],
                type: [5, "type"],
                twolineBeginIcon: [6, "twolineBeginIcon"],
              },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              $e.a,
              [[2, ye.a], t.l, Me.a, ke.b],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(
              n,
              1,
              0,
              n.parent.parent.context.mib3Let ||
                (null == n.parent.parent.parent.context.mib3Let
                  ? null
                  : n.parent.parent.parent.context.mib3Let.asiDevice),
            ),
              e(n, 3, 0, "ConnDevicePhone2"),
              e(n, 5, 0),
              e(
                n,
                6,
                0,
                l.ConnectedDevicesRoute.children.TrustedDevices,
                l.enterDetailsContext.PHONE2,
              ),
              e(n, 7, 0),
              e(n, 9, 0),
              e(
                n,
                10,
                0,
                "E1A1_phone_phone2.webp",
                l.connectivityDeviceTextIds.PHONE2,
                l.connectivityDeviceTextIds.NOTCONNECTED,
                null == n.context.mib3Let ? null : n.context.mib3Let.name,
                !0,
                l.listItemType.ITEM_TYPE_NO_END_ICON,
                !0,
              ));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 1).combinedDisabled,
              t.Nb(n, 1).useBrighterIcon,
              t.Nb(n, 9).markerClassEnabled,
            );
          },
        );
      }
      function Nn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), t.hb(16777216, [[1, 2]], null, 2, null, Sn)),
            t.xb(
              2,
              16384,
              null,
              0,
              We.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (e()(), t.hb(0, null, null, 0)),
          ],
          function (e, n) {
            var l = n.component;
            e(n, 2, 0, t.Yb(n, 2, 0, t.Nb(n, 3).transform(l.phone2$)));
          },
          null,
        );
      }
      function In(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              14,
              "au3-list-route-item",
              [
                ["class", "settings-list__route-item"],
                ["id", "ConnDeviceAudiSmartphoneInterface"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Longpress"]],
              function (e, n, l) {
                var t = !0,
                  i = e.component;
                return (
                  "mib3Longpress" === n &&
                    (t =
                      !1 !==
                        i.openOptionsMenu(
                          e.parent.parent.context.mib3Let,
                          i.enterDetailsContext.SMARTPHONEINTEGRATION,
                        ) && t),
                  t
                );
              },
              ue.b,
              ue.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              ce.a,
              [re.a, t.h, se.a, [3, ce.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(2, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              De.a,
              [Se.a, Ne.i, ce.a, ge.a, De.b, Ie.a],
              {
                routeInfo: [0, "routeInfo"],
                longTextButton: [1, "longTextButton"],
              },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            t.xb(
              8,
              212992,
              null,
              0,
              ye.a,
              [
                se.a,
                t.z,
                t.l,
                me.b,
                Te.a,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                [2, Oe.a],
              ],
              null,
              { longpress: "mib3Longpress" },
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              10,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              11,
              114688,
              null,
              0,
              we.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                subtitleDeveloperText: [2, "subtitleDeveloperText"],
                subtitleNonI18nText: [3, "subtitleNonI18nText"],
                hasSubtitle: [4, "hasSubtitle"],
                type: [5, "type"],
                twolineBeginIcon: [6, "twolineBeginIcon"],
              },
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              $e.a,
              [[2, ye.a], t.l, Me.a, ke.b],
              null,
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              14,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, !1),
              e(n, 3, 0, "ConnDeviceAudiSmartphoneInterface"),
              e(n, 5, 0),
              e(
                n,
                6,
                0,
                l.ConnectedDevicesRoute.children.TrustedAsiDevices,
                !t.Yb(
                  n,
                  6,
                  1,
                  t
                    .Nb(n, 7)
                    .transform(
                      l.smartphoneIntegration.asiDevicesTilesAvailable$,
                    ),
                ),
              ),
              e(n, 8, 0),
              e(n, 10, 0),
              e(
                n,
                11,
                0,
                l.utils.universalAsiDeviceIcon,
                l.connectivityDeviceTextIds.SMARTPHONEINTERFACE,
                l.connectivityDeviceTextIds.NOTCONNECTED,
                null == n.parent.parent.context.mib3Let ||
                  null == n.parent.parent.context.mib3Let.asiDevice
                  ? null
                  : n.parent.parent.context.mib3Let.asiDevice.deviceName,
                !0,
                l.listItemType.ITEM_TYPE_NO_END_ICON,
                !0,
              ));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 1).combinedDisabled,
              t.Nb(n, 1).useBrighterIcon,
              t.Nb(n, 10).markerClassEnabled,
            );
          },
        );
      }
      function yn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              13,
              "au3-list-route-item",
              [
                ["class", "settings-list__route-item"],
                ["id", "ConnDeviceAudioPlayer"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Longpress"]],
              function (e, n, l) {
                var t = !0,
                  i = e.component;
                return (
                  "mib3Longpress" === n &&
                    (t =
                      !1 !==
                        i.openOptionsMenu(
                          e.context.mib3Let,
                          i.enterDetailsContext.AUDIOPLAYER,
                        ) && t),
                  t
                );
              },
              ue.b,
              ue.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              ce.a,
              [re.a, t.h, se.a, [3, ce.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(2, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              De.a,
              [Se.a, Ne.i, ce.a, ge.a, De.b, Ie.a],
              {
                routeInfo: [0, "routeInfo"],
                routerParams: [1, "routerParams"],
              },
              null,
            ),
            t.xb(
              7,
              212992,
              null,
              0,
              ye.a,
              [
                se.a,
                t.z,
                t.l,
                me.b,
                Te.a,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                [2, Oe.a],
              ],
              null,
              { longpress: "mib3Longpress" },
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              9,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              10,
              114688,
              null,
              0,
              we.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                subtitleDeveloperText: [2, "subtitleDeveloperText"],
                subtitleNonI18nText: [3, "subtitleNonI18nText"],
                hasSubtitle: [4, "hasSubtitle"],
                type: [5, "type"],
                twolineBeginIcon: [6, "twolineBeginIcon"],
              },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              $e.a,
              [[2, ye.a], t.l, Me.a, ke.b],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(
              n,
              1,
              0,
              null == n.parent.parent.context.mib3Let
                ? null
                : n.parent.parent.context.mib3Let.asiDevice,
            ),
              e(n, 3, 0, "ConnDeviceAudioPlayer"),
              e(n, 5, 0),
              e(
                n,
                6,
                0,
                l.ConnectedDevicesRoute.children.TrustedDevices,
                l.enterDetailsContext.AUDIOPLAYER,
              ),
              e(n, 7, 0),
              e(n, 9, 0),
              e(
                n,
                10,
                0,
                "E07E_media_ami_mediaplayer.webp",
                l.connectivityDeviceTextIds.AUDIOPLAYER,
                l.connectivityDeviceTextIds.NOTCONNECTED,
                null == n.context.mib3Let ? null : n.context.mib3Let.name,
                !0,
                l.listItemType.ITEM_TYPE_NO_END_ICON,
                !0,
              ));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 1).combinedDisabled,
              t.Nb(n, 1).useBrighterIcon,
              t.Nb(n, 9).markerClassEnabled,
            );
          },
        );
      }
      function Pn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-list-route-item",
              [
                ["class", "settings-list__route-item"],
                ["id", "ConnDeviceAddressbook"],
                ["titleDeveloperText", "Adressbuch"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              null,
              null,
              ue.b,
              ue.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              147456,
              null,
              0,
              ce.a,
              [re.a, t.h, se.a, [3, ce.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              3,
              114688,
              null,
              0,
              we.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                subtitleDeveloperText: [2, "subtitleDeveloperText"],
                subtitleNonI18nText: [3, "subtitleNonI18nText"],
                hasSubtitle: [4, "hasSubtitle"],
                type: [5, "type"],
                twolineBeginIcon: [6, "twolineBeginIcon"],
              },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "ConnDeviceAddressbook"),
              e(n, 2, 0, !0),
              e(
                n,
                3,
                0,
                "E89D_connect_contacts.webp",
                "Adressbuch",
                l.connectivityDeviceTextIds.NOTCONNECTED,
                l.adbDeviceName,
                !0,
                l.listItemType.ITEM_TYPE_NO_END_ICON,
                !0,
              ));
          },
          function (e, n) {
            e(n, 0, 0, t.Nb(n, 2).combinedDisabled, t.Nb(n, 2).useBrighterIcon);
          },
        );
      }
      function Cn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              13,
              "au3-list-route-item",
              [
                ["class", "settings-list__route-item"],
                ["id", "WlanHotspotDisabled"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Longpress"]],
              function (e, n, l) {
                var t = !0,
                  i = e.component;
                return (
                  "mib3Longpress" === n &&
                    (t =
                      !1 !==
                        i.openOptionsMenu(
                          null,
                          i.enterDetailsContext.WIFIHOTSPOT,
                        ) && t),
                  t
                );
              },
              ue.b,
              ue.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              ce.a,
              [re.a, t.h, se.a, [3, ce.a]],
              null,
              null,
            ),
            t.xb(2, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              De.a,
              [Se.a, Ne.i, ce.a, ge.a, De.b, Ie.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.xb(
              7,
              212992,
              null,
              0,
              ye.a,
              [
                se.a,
                t.z,
                t.l,
                me.b,
                Te.a,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                [2, Oe.a],
              ],
              null,
              { longpress: "mib3Longpress" },
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              9,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              10,
              114688,
              null,
              0,
              we.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                subtitleDeveloperText: [2, "subtitleDeveloperText"],
                hasSubtitle: [3, "hasSubtitle"],
                type: [4, "type"],
                twolineBeginIcon: [5, "twolineBeginIcon"],
              },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              $e.a,
              [[2, ye.a], t.l, Me.a, ke.b],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 3, 0, "WlanHotspotDisabled"),
              e(n, 5, 0),
              e(n, 6, 0, l.ConnectedDevicesRoute.children.WlanHotspot),
              e(n, 7, 0),
              e(n, 9, 0),
              e(
                n,
                10,
                0,
                "E89E_connect_wifi_hotspot.webp",
                l.connectivityDeviceTextIds.WIFIHOTSPOT,
                l.connectivityDeviceTextIds.DEACTIVATED,
                !0,
                l.listItemType.ITEM_TYPE_NO_END_ICON,
                !0,
              ));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 1).combinedDisabled,
              t.Nb(n, 1).useBrighterIcon,
              t.Nb(n, 9).markerClassEnabled,
            );
          },
        );
      }
      function En(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              14,
              "au3-list-route-item",
              [
                ["class", "settings-list__route-item"],
                ["id", "ConnDeviceAudiWlanHotspot"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              ue.b,
              ue.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              ce.a,
              [re.a, t.h, se.a, [3, ce.a]],
              null,
              null,
            ),
            t.xb(2, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              De.a,
              [Se.a, Ne.i, ce.a, ge.a, De.b, Ie.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.xb(
              7,
              16384,
              null,
              0,
              Ue.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(8, { numberOfClients: 0 }),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              10,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              11,
              114688,
              null,
              0,
              we.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                subtitleDeveloperText: [2, "subtitleDeveloperText"],
                hasSubtitle: [3, "hasSubtitle"],
                type: [4, "type"],
                twolineBeginIcon: [5, "twolineBeginIcon"],
              },
              null,
            ),
            t.xb(
              12,
              671744,
              null,
              0,
              Ge.a,
              [ce.a, Ne.i, [2, Ne.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              14,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 3, 0, "ConnDeviceAudiWlanHotspot"),
              e(n, 5, 0),
              e(n, 6, 0, l.ConnectedDevicesRoute.children.WlanHotspot));
            var t = e(n, 8, 0, n.parent.context.mib3Let);
            (e(n, 7, 0, t),
              e(n, 10, 0),
              e(
                n,
                11,
                0,
                "E89E_connect_wifi_hotspot.webp",
                l.connectivityDeviceTextIds.WIFIHOTSPOT,
                "Aktuell verbundene Ger\xe4te: {{numberOfClients}}",
                !0,
                l.listItemType.ITEM_TYPE_NO_END_ICON,
                !0,
              ),
              e(
                n,
                12,
                0,
                0 === n.parent.context.mib3Let
                  ? l.longTextLockingParam
                  : l.complexLockingParam,
              ));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 1).combinedDisabled,
              t.Nb(n, 1).useBrighterIcon,
              t.Nb(n, 10).markerClassEnabled,
            );
          },
        );
      }
      function _n(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, Cn)),
            t.xb(
              2,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(),
            t.hb(
              0,
              [
                [1, 2],
                ["wifiDevicesConnectedTemplate", 2],
              ],
              null,
              0,
              null,
              En,
            )),
          ],
          function (e, n) {
            e(n, 2, 0, -1 === n.context.mib3Let, t.Nb(n, 3));
          },
          null,
        );
      }
      function An(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), t.hb(16777216, [[1, 2]], null, 2, null, _n)),
            t.xb(
              2,
              16384,
              null,
              0,
              We.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (e()(), t.hb(0, null, null, 0)),
          ],
          function (e, n) {
            var l = n.component;
            e(
              n,
              2,
              0,
              t.Yb(n, 2, 0, t.Nb(n, 3).transform(l.numberOfConnWifiDevices$)),
            );
          },
          null,
        );
      }
      function Ln(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              15,
              "au3-list-route-item",
              [
                ["class", "settings-list__route-item"],
                ["id", "ConnDeviceHeadset"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Longpress"]],
              function (e, n, l) {
                var t = !0,
                  i = e.component;
                return (
                  "mib3Longpress" === n &&
                    (t =
                      !1 !==
                        i.openOptionsMenu(
                          e.parent.context.mib3Let,
                          i.enterDetailsContext.HEADSET,
                        ) && t),
                  t
                );
              },
              ue.b,
              ue.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              ce.a,
              [re.a, t.h, se.a, [3, ce.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            t.Pb(131072, ze.b, [t.h]),
            t.xb(4, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              5,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              6,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              7,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              671744,
              null,
              0,
              De.a,
              [Se.a, Ne.i, ce.a, ge.a, De.b, Ie.a],
              {
                routeInfo: [0, "routeInfo"],
                routerParams: [1, "routerParams"],
              },
              null,
            ),
            t.xb(
              9,
              212992,
              null,
              0,
              ye.a,
              [
                se.a,
                t.z,
                t.l,
                me.b,
                Te.a,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                [2, Oe.a],
              ],
              null,
              { longpress: "mib3Longpress" },
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              11,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              12,
              114688,
              null,
              0,
              we.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                subtitleDeveloperText: [2, "subtitleDeveloperText"],
                subtitleNonI18nText: [3, "subtitleNonI18nText"],
                hasSubtitle: [4, "hasSubtitle"],
                type: [5, "type"],
                twolineBeginIcon: [6, "twolineBeginIcon"],
              },
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              $e.a,
              [[2, ye.a], t.l, Me.a, ke.b],
              null,
              null,
            ),
            t.xb(
              14,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              15,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(
              n,
              1,
              0,
              t.Yb(n, 1, 0, t.Nb(n, 2).transform(l.phoneService.callActive$)) ||
                t.Yb(
                  n,
                  1,
                  0,
                  t
                    .Nb(n, 3)
                    .transform(l.smartphoneIntegration.currentActiveDevice$),
                ),
            ),
              e(n, 5, 0, "ConnDeviceHeadset"),
              e(n, 7, 0),
              e(
                n,
                8,
                0,
                l.ConnectedDevicesRoute.children.TrustedDevices,
                l.enterDetailsContext.HEADSET,
              ),
              e(n, 9, 0),
              e(n, 11, 0),
              e(
                n,
                12,
                0,
                "E9DD_connect_headset.webp",
                l.connectivityDeviceTextIds.HEADSET,
                l.connectivityDeviceTextIds.NOTCONNECTED,
                null == n.parent.context.mib3Let
                  ? null
                  : n.parent.context.mib3Let.name,
                !0,
                l.listItemType.ITEM_TYPE_NO_END_ICON,
                !0,
              ));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 1).combinedDisabled,
              t.Nb(n, 1).useBrighterIcon,
              t.Nb(n, 11).markerClassEnabled,
            );
          },
        );
      }
      function wn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), t.hb(16777216, [[1, 2]], null, 2, null, Ln)),
            t.xb(
              2,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (e()(), t.hb(0, null, null, 0)),
          ],
          function (e, n) {
            var l = n.component;
            e(
              n,
              2,
              0,
              t.Yb(
                n,
                2,
                0,
                t.Nb(n, 3).transform(l.systemConfigService.variant$),
              ) !== l.baseConfigVariant,
            );
          },
          null,
        );
      }
      function $n(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              7,
              "au3-list-route-item",
              [
                ["class", "settings-list__route-item"],
                ["id", "ConnDeviceBthCarRemote"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "mib3Longpress"]],
              function (e, n, l) {
                var t = !0,
                  i = e.component;
                return (
                  "mib3Longpress" === n &&
                    (t =
                      !1 !==
                        i.openOptionsMenu(
                          i.carRemoteDevice,
                          i.enterDetailsContext.VEHICLECONTROL,
                        ) && t),
                  t
                );
              },
              ue.b,
              ue.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              ce.a,
              [re.a, t.h, se.a, [3, ce.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              ye.a,
              [
                se.a,
                t.z,
                t.l,
                me.b,
                Te.a,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                [2, Oe.a],
              ],
              null,
              { longpress: "mib3Longpress" },
            ),
            t.xb(
              6,
              114688,
              null,
              0,
              we.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                subtitleDeveloperText: [2, "subtitleDeveloperText"],
                subtitleNonI18nText: [3, "subtitleNonI18nText"],
                hasSubtitle: [4, "hasSubtitle"],
                type: [5, "type"],
                twolineBeginIcon: [6, "twolineBeginIcon"],
              },
              null,
            ),
            t.xb(
              7,
              147456,
              null,
              0,
              $e.a,
              [[2, ye.a], t.l, Me.a, ke.b],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "ConnDeviceBthCarRemote"),
              e(n, 4, 0, !0),
              e(n, 5, 0),
              e(
                n,
                6,
                0,
                "E9DC_connect_key.webp",
                l.connectivityDeviceTextIds.VEHICLECONTROL,
                l.connectivityDeviceTextIds.NOTCONNECTED,
                l.carRemoteDeviceName,
                !0,
                l.listItemType.ITEM_TYPE_NO_END_ICON,
                !0,
              ));
          },
          function (e, n) {
            e(n, 0, 0, t.Nb(n, 4).combinedDisabled, t.Nb(n, 4).useBrighterIcon);
          },
        );
      }
      function Mn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              26,
              "au3-list",
              [["id", "ConnectedDevicesSettingsList"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Ye.b,
              Ye.a,
            )),
            t.Sb(6144, null, qe.a, null, [Ve.a]),
            t.xb(
              2,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 16384, null, 0, Ke.a, [t.l], null, null),
            t.xb(
              4,
              12828672,
              null,
              1,
              Ve.a,
              [
                [2, Ze.a],
                [2, Xe.a],
                [8, null],
                [2, de.a],
                [2, Qe.a],
                [2, Je.a],
                [2, me.b],
                Ne.i,
                t.z,
                t.h,
                se.a,
                en.a,
                nn.a,
                [2, Ee.a],
                ve.a,
                [2, Ne.a],
              ],
              null,
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (e()(), t.hb(16777216, [[1, 2]], 0, 1, null, Tn)),
            t.xb(
              7,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(),
            t.hb(
              0,
              [
                [1, 2],
                ["onePhoneSupported", 2],
              ],
              0,
              0,
              null,
              Dn,
            )),
            (e()(), t.hb(16777216, [[1, 2]], 0, 1, null, Nn)),
            t.xb(
              10,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], 0, 2, null, In)),
            t.xb(
              12,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (e()(), t.hb(16777216, [[1, 2]], 0, 2, null, yn)),
            t.xb(
              15,
              16384,
              null,
              0,
              We.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (e()(), t.hb(16777216, [[1, 2]], 0, 1, null, Pn)),
            t.xb(
              18,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], 0, 2, null, An)),
            t.xb(
              20,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (e()(), t.hb(16777216, [[1, 2]], 0, 2, null, wn)),
            t.xb(
              23,
              16384,
              null,
              0,
              We.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (e()(), t.hb(16777216, [[1, 2]], 0, 1, null, $n)),
            t.xb(
              26,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (e, n) {
            var l,
              i = n.component;
            (e(n, 2, 0, "ConnectedDevicesSettingsList"),
              e(n, 4, 0),
              e(n, 7, 0, i.phoneService.twoPhonesSupported, t.Nb(n, 8)),
              e(n, 10, 0, i.phoneService.twoPhonesSupported),
              e(
                n,
                12,
                0,
                t.Yb(n, 12, 0, t.Nb(n, 13).transform(i.asiAvailable$)),
              ),
              e(
                n,
                15,
                0,
                t.Yb(n, 15, 0, t.Nb(n, 16).transform(i.audioplayer$)),
              ),
              e(n, 18, 0, !1),
              e(
                n,
                20,
                0,
                null ==
                  (l = t.Yb(
                    n,
                    20,
                    0,
                    t.Nb(n, 21).transform(i.wifiService.wifiState$),
                  ))
                  ? null
                  : l.available,
              ),
              e(
                n,
                23,
                0,
                t.Yb(n, 23, 0, t.Nb(n, 24).transform(i.headsetDevice$)),
              ),
              e(n, 26, 0, !1));
          },
          function (e, n) {
            e(n, 0, 0, t.Nb(n, 4).showLineNumbers);
          },
        );
      }
      function kn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-list-route-item",
              [["class", "settings-list__route-item"]],
              null,
              null,
              null,
              ue.b,
              ue.a,
            )),
            t.xb(
              1,
              114688,
              null,
              0,
              we.a,
              [],
              {
                icon: [0, "icon"],
                titleTextId: [1, "titleTextId"],
                titleTextIdEnum: [2, "titleTextIdEnum"],
                titleDeveloperText: [3, "titleDeveloperText"],
                subtitleDeveloperText: [4, "subtitleDeveloperText"],
                subtitleNonI18nText: [5, "subtitleNonI18nText"],
                hasSubtitle: [6, "hasSubtitle"],
                type: [7, "type"],
                twolineBeginIcon: [8, "twolineBeginIcon"],
              },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            e(
              n,
              1,
              0,
              l.utils.getIconForContext(
                null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.context,
                !1,
                !1,
                n.parent.context.$implicit,
              ),
              n.context.mib3Let,
              l.connectivityDeviceTextIds,
              n.context.mib3Let,
              l.connectivityDeviceTextIds.DEACTIVATED,
              null != n.parent.context.$implicit &&
                n.parent.context.$implicit.device
                ? null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.device.name
                : void 0,
              !0,
              l.listItemType.ITEM_TYPE_NO_END_ICON,
              !0,
            );
          },
          null,
        );
      }
      function Bn(e) {
        return t.ac(
          0,
          [
            (e()(), t.hb(16777216, [[2, 2]], null, 1, null, kn)),
            t.xb(
              1,
              16384,
              null,
              0,
              We.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            (e()(), t.hb(0, null, null, 0)),
          ],
          function (e, n) {
            var l = n.component;
            e(
              n,
              1,
              0,
              l.utils.getTitleForContext(
                null == n.context.$implicit
                  ? null
                  : n.context.$implicit.context,
                l.phoneService.twoPhonesSupported,
                n.context.$implicit,
              ),
            );
          },
          null,
        );
      }
      function jn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              37,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:CM_APPLICATIONS"],
              ],
              null,
              null,
              null,
              ln.b,
              ln.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, xe.a, [se.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              25,
              "au3-title-line",
              [
                ["class", "title"],
                ["id", ""],
              ],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              tn.b,
              tn.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              an.a,
              [on.a, un.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              10,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", ""],
                ["left", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t = !1 !== e.component.routingService.goUp() && t),
                  t
                );
              },
              cn.b,
              cn.a,
            )),
            t.xb(7, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              rn.a,
              [se.a, sn.a, t.l, [2, ge.a], [2, ce.a]],
              null,
              null,
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              13,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              14,
              49152,
              null,
              0,
              bn.a,
              [[2, ce.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              15,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              17,
              0,
              null,
              2,
              11,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "GoToSettings"],
                ["right", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              cn.b,
              cn.a,
            )),
            t.xb(
              18,
              147456,
              null,
              0,
              ce.a,
              [re.a, t.h, se.a, [3, ce.a]],
              null,
              null,
            ),
            t.xb(19, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              20,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              21,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              22,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              null,
            ),
            t.xb(
              23,
              671744,
              null,
              0,
              De.a,
              [Se.a, Ne.i, ce.a, ge.a, De.b, Ie.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              25,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              26,
              49152,
              null,
              0,
              bn.a,
              [[2, ce.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              27,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              28,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
            (e()(), t.hb(16777216, null, 0, 2, null, Mn)),
            t.xb(
              30,
              16384,
              null,
              0,
              We.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (e()(),
            t.yb(
              32,
              0,
              null,
              0,
              5,
              "au3-option-menu-wrapper",
              [],
              null,
              null,
              null,
              dn.b,
              dn.a,
            )),
            t.Sb(6144, null, pn.b, null, [hn.a]),
            t.Sb(512, null, Le.a, Le.a, [[3, Le.a]]),
            t.xb(
              35,
              245760,
              null,
              1,
              hn.a,
              [vn.a, gn.a, t.h, Le.a],
              { ttEnumType: [0, "ttEnumType"] },
              null,
            ),
            t.Tb(603979776, 2, { template: 0 }),
            (e()(), t.hb(0, [[2, 2]], null, 0, null, Bn)),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "Screen:CM_APPLICATIONS"),
              e(n, 2, 0, "Screen:CM_APPLICATIONS"),
              e(n, 4, 0, ""),
              e(n, 5, 0, "Settings", "Verbundene Ger\xe4te"),
              e(n, 8, 0, ""),
              e(n, 10, 0),
              e(n, 13, 0),
              e(n, 14, 0, !1, "E163_Backbutton.webp"),
              e(n, 20, 0, "GoToSettings"),
              e(n, 22, 0),
              e(n, 23, 0, l.ConnectedDevicesRoute.children.ConnectionSettings),
              e(n, 25, 0),
              e(n, 26, 0, !1, "E186_settings.webp"),
              e(
                n,
                30,
                0,
                t.Yb(n, 30, 0, t.Nb(n, 31).transform(l.phoneActive$)),
              ),
              e(n, 35, 0, l.optionTypeEnum));
          },
          function (e, n) {
            (e(
              n,
              3,
              0,
              t.Nb(n, 5).hideLeftBorder,
              t.Nb(n, 5).hideDividingBorders,
            ),
              e(
                n,
                6,
                0,
                t.Nb(n, 13).markerClassEnabled,
                t.Nb(n, 14).useItemPlaceholder,
              ),
              e(
                n,
                17,
                0,
                t.Nb(n, 18).combinedDisabled,
                t.Nb(n, 18).useBrighterIcon,
                t.Nb(n, 25).markerClassEnabled,
                t.Nb(n, 26).useItemPlaceholder,
              ));
          },
        );
      }
      function Rn(e) {
        return t.ac(
          2,
          [
            (e()(), t.hb(16777216, null, null, 2, null, jn)),
            t.xb(
              1,
              16384,
              null,
              0,
              We.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
          ],
          function (e, n) {
            var l = n.component;
            e(n, 1, 0, t.Yb(n, 1, 0, t.Nb(n, 2).transform(l.asiDevice$)));
          },
          null,
        );
      }
      function Hn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-connected-devices",
              [],
              null,
              null,
              null,
              Rn,
              xn,
            )),
            t.Sb(4608, null, j, j, [
              gn.a,
              N.a,
              Se.a,
              r.a,
              M.a,
              m.a,
              x.c,
              mn.a,
              S.a,
              se.a,
            ]),
            t.Sb(6144, null, vn.a, null, [j]),
            t.xb(
              3,
              180224,
              null,
              0,
              U,
              [Se.a, x.c, N.a, pe.a, M.a, m.a, r.a, gn.a],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var Fn = t.ub("au3-connected-devices", U, Hn, {}, {}, []),
        Wn = l("eZMD"),
        zn = l("HD2x"),
        Un = l("M706"),
        Gn = l("aMc6"),
        Yn = l("fzcM"),
        qn = l("erFY"),
        Vn = l("5wO1"),
        Kn = l("8TlW"),
        Zn = l("Xo58"),
        Xn = l("m3Ja"),
        Qn = l("r+e+"),
        Jn = l("ijxY"),
        el = l("ywFE"),
        nl = l("yn/i"),
        ll = l("Obt0"),
        tl = l("3qdr"),
        il = l("Xast"),
        al = l("jgeG"),
        ol = l("nSAP"),
        ul = l("ihOk"),
        cl = l("ZMtB"),
        rl = l("OyZc"),
        sl = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{position:static;height:100%}.screen[_ngcontent-%COMP%], .screen__hotspot-connect-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch}.screen__hotspot-connect-info[_ngcontent-%COMP%]{flex-grow:1}.wifi-clients-tiles__device-tile[_ngcontent-%COMP%]{text-align:center}.hotspot-connect-info__ssid-pwd-qr[_ngcontent-%COMP%]{display:flex;flex-direction:row;min-width:0;flex-grow:1;min-height:0}.ssid-pwd-qr__qr-code[_ngcontent-%COMP%]{align-self:center;border:10px solid #fff;width:265px;min-width:265px}.ssid-pwd-qr__credentials-text[_ngcontent-%COMP%]{font-size:40px;align-self:stretch;flex-grow:1;min-width:0;padding-top:80px;padding-left:20px;padding-right:20px}",
            ],
          ],
          data: {},
        });
      function bl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              14,
              "au3-instruction-text",
              [["id", "WifiHotspotCurrentlyDisabled"]],
              null,
              null,
              null,
              Wn.b,
              Wn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              zn.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryFixedNumberOfLines: [1, "primaryFixedNumberOfLines"],
              },
              null,
            ),
            (e()(),
            t.yb(
              3,
              0,
              null,
              1,
              11,
              "au3-operation-panel",
              [],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              Un.b,
              Un.a,
            )),
            t.xb(
              4,
              49152,
              null,
              0,
              Gn.a,
              [Yn.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (e()(),
            t.yb(
              5,
              0,
              null,
              1,
              9,
              "au3-operation-panel-item",
              [["id", "WlanHotspotActivateWifi"]],
              [
                [2, "mib3-haptic", null],
                [2, "op-item--separator-left", null],
                [2, "op-item--separator-right", null],
                [2, "op-item--prio1-main", null],
                [2, "op-item--prio1-small-scale", null],
                [2, "op-item--prio2-small-scale", null],
                [2, "op-item--prio1", null],
                [2, "op-item--prio2", null],
                [2, "op-item--prio1-icon-text", null],
                [2, "op-item--prio1-icon-only", null],
                [2, "op-item--prio1-text-only", null],
                [2, "op-item--prio2-icon-text", null],
                [2, "op-item--prio2-icon-only", null],
                [2, "op-item--prio2-text-only", null],
                [2, "op-item--default-max-width", null],
                [2, "op-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t = !1 !== e.component.activateWifi() && t),
                  t
                );
              },
              qn.b,
              qn.a,
            )),
            t.xb(
              6,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(7, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              8,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              9,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              11,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              12,
              49152,
              null,
              0,
              Vn.a,
              [],
              {
                hasText: [0, "hasText"],
                developerText: [1, "developerText"],
                prio1Item: [2, "prio1Item"],
              },
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              14,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "WifiHotspotCurrentlyDisabled"),
              e(
                n,
                2,
                0,
                "Der WLAN-Hotspot ist zurzeit deaktiviert.\nBitte aktivieren Sie den WLAN-Hotspot",
                6,
              ),
              e(n, 4, 0, !0),
              e(n, 6, 0, "WlanHotspotActivateWifi"),
              e(n, 9, 0),
              e(n, 11, 0),
              e(n, 12, 0, !0, "Audi WLAN Hotspot aktivieren", !0));
          },
          function (e, n) {
            (e(n, 3, 0, t.Nb(n, 4).alignInside, t.Nb(n, 4).alignOutside),
              e(n, 5, 1, [
                t.Nb(n, 11).markerClassEnabled,
                t.Nb(n, 12).showSeparatorLeft,
                t.Nb(n, 12).showSeparatorRight,
                t.Nb(n, 12).prio1Main,
                t.Nb(n, 12).prio1SmallScale,
                t.Nb(n, 12).prio2SmallScale,
                t.Nb(n, 12).prio1,
                t.Nb(n, 12).prio2,
                t.Nb(n, 12).prio1IconText,
                t.Nb(n, 12).prio1IconOnly,
                t.Nb(n, 12).prio1TextOnly,
                t.Nb(n, 12).prio2IconText,
                t.Nb(n, 12).prio2IconOnly,
                t.Nb(n, 12).prio2TextOnly,
                t.Nb(n, 12).useDefaultMaxWidth,
                t.Nb(n, 12).isDummy,
              ]));
          },
        );
      }
      function dl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-operation-panel-item",
              [["id", "WlanHotspotBuyDataPackages"]],
              [
                [2, "mib3-haptic", null],
                [2, "op-item--separator-left", null],
                [2, "op-item--separator-right", null],
                [2, "op-item--prio1-main", null],
                [2, "op-item--prio1-small-scale", null],
                [2, "op-item--prio2-small-scale", null],
                [2, "op-item--prio1", null],
                [2, "op-item--prio2", null],
                [2, "op-item--prio1-icon-text", null],
                [2, "op-item--prio1-icon-only", null],
                [2, "op-item--prio1-text-only", null],
                [2, "op-item--prio2-icon-text", null],
                [2, "op-item--prio2-icon-only", null],
                [2, "op-item--prio2-text-only", null],
                [2, "op-item--default-max-width", null],
                [2, "op-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t = !1 !== e.component.goToDataplansOverview() && t),
                  t
                );
              },
              qn.b,
              qn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              49152,
              null,
              0,
              Vn.a,
              [],
              {
                hasText: [0, "hasText"],
                developerText: [1, "developerText"],
                prio1Item: [2, "prio1Item"],
              },
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "WlanHotspotBuyDataPackages"),
              e(n, 4, 0),
              e(n, 6, 0),
              e(n, 7, 0, !0, "Datenpakete kaufen", !0));
          },
          function (e, n) {
            e(n, 0, 1, [
              t.Nb(n, 6).markerClassEnabled,
              t.Nb(n, 7).showSeparatorLeft,
              t.Nb(n, 7).showSeparatorRight,
              t.Nb(n, 7).prio1Main,
              t.Nb(n, 7).prio1SmallScale,
              t.Nb(n, 7).prio2SmallScale,
              t.Nb(n, 7).prio1,
              t.Nb(n, 7).prio2,
              t.Nb(n, 7).prio1IconText,
              t.Nb(n, 7).prio1IconOnly,
              t.Nb(n, 7).prio1TextOnly,
              t.Nb(n, 7).prio2IconText,
              t.Nb(n, 7).prio2IconOnly,
              t.Nb(n, 7).prio2TextOnly,
              t.Nb(n, 7).useDefaultMaxWidth,
              t.Nb(n, 7).isDummy,
            ]);
          },
        );
      }
      function pl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              13,
              "div",
              [["class", "screen__hotspot-connect-info"]],
              null,
              null,
              null,
              null,
              null,
            )),
            t.xb(
              1,
              16384,
              null,
              0,
              Ue.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(2, { pwd: 0, ssid: 1 }),
            (e()(),
            t.yb(
              3,
              0,
              null,
              null,
              5,
              "div",
              [["class", "hotspot-connect-info__ssid-pwd-qr"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            t.yb(
              4,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "ssid-pwd-qr__credentials-text"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Kn.b,
              Kn.a,
            )),
            t.xb(
              5,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              6,
              245760,
              null,
              0,
              Zn.a,
              [[6, de.a], Xn.a, t.h, t.l, t.D, [2, Qn.a], [2, Jn.a], [2, Ue.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (e()(),
            t.yb(
              7,
              0,
              null,
              null,
              1,
              "qrcode",
              [["class", "ssid-pwd-qr__qr-code"]],
              null,
              null,
              null,
              el.b,
              el.a,
            )),
            t.xb(
              8,
              638976,
              null,
              0,
              nl.a,
              [t.l],
              { qrdata: [0, "qrdata"], size: [1, "size"] },
              null,
            ),
            (e()(),
            t.yb(
              9,
              0,
              null,
              null,
              4,
              "au3-operation-panel",
              [],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              Un.b,
              Un.a,
            )),
            t.xb(
              10,
              49152,
              null,
              0,
              Gn.a,
              [Yn.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (e()(), t.hb(16777216, null, 1, 2, null, dl)),
            t.xb(
              12,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
          ],
          function (e, n) {
            var l = n.component,
              i = e(
                n,
                2,
                0,
                null == l.wifiService.mainAP
                  ? null
                  : l.wifiService.mainAP.password,
                null == l.wifiService.mainAP ? null : l.wifiService.mainAP.name,
              );
            (e(n, 1, 0, i),
              e(
                n,
                5,
                0,
                0 ===
                  (null == n.parent.parent.context.mib3Let
                    ? null
                    : n.parent.parent.context.mib3Let.length)
                  ? l.BondingInfoTextEnum.NoDeviceIsConnectedToHotspot
                  : l.BondingInfoTextEnum.PleaseConnectToWifiHotspot,
                l.BondingInfoTextEnum,
              ),
              e(
                n,
                6,
                0,
                0 ===
                  (null == n.parent.parent.context.mib3Let
                    ? null
                    : n.parent.parent.context.mib3Let.length)
                  ? l.BondingInfoTextEnum.NoDeviceIsConnectedToHotspot
                  : l.BondingInfoTextEnum.PleaseConnectToWifiHotspot,
                0 ===
                  (null == n.parent.parent.context.mib3Let
                    ? null
                    : n.parent.parent.context.mib3Let.length)
                  ? l.BondingInfoTextEnum.NoDeviceIsConnectedToHotspot
                  : l.BondingInfoTextEnum.PleaseConnectToWifiHotspot,
                6,
              ),
              e(n, 8, 0, l.wifiConnectQrCode, 245),
              e(n, 10, 0, !0),
              e(
                n,
                12,
                0,
                t.Yb(
                  n,
                  12,
                  0,
                  t.Nb(n, 13).transform(l.purchaseOfAdditDataPackagesNeeded$),
                ),
              ));
          },
          function (e, n) {
            (e(
              n,
              4,
              0,
              t.Nb(n, 6).backgroundColor,
              t.Nb(n, 6).fixedNumberOfLines,
              t.Nb(n, 6).mayContainLatinCharsForArabic,
              t.Nb(n, 6).shortenWithEllipsisForArabic,
            ),
              e(n, 9, 0, t.Nb(n, 10).alignInside, t.Nb(n, 10).alignOutside));
          },
        );
      }
      function hl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-tile",
              [
                ["class", "wifi-clients-tiles__device-tile"],
                ["ttIgnore", ""],
              ],
              null,
              null,
              null,
              ll.b,
              ll.a,
            )),
            t.xb(1, 16384, null, 0, Jn.a, [], null, null),
            t.xb(
              2,
              49152,
              null,
              0,
              tl.a,
              [],
              { nonI18nText: [0, "nonI18nText"], icon: [1, "icon"] },
              null,
            ),
          ],
          function (e, n) {
            e(
              n,
              2,
              0,
              null == n.parent.context.$implicit
                ? null
                : n.parent.context.$implicit.name,
              "E89E_connect_wifi_hotspot.webp",
            );
          },
          null,
        );
      }
      function vl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-tile",
              [
                ["class", "wifi-clients-tiles__device-tile"],
                ["id", "NewConnectionTile"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t = !1 !== e.component.createNewConnection() && t),
                  t
                );
              },
              ll.b,
              ll.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              ce.a,
              [re.a, t.h, se.a, [3, ce.a]],
              null,
              null,
            ),
            t.xb(2, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              De.a,
              [Se.a, Ne.i, ce.a, ge.a, De.b, Ie.a],
              {
                routeInfo: [0, "routeInfo"],
                preventGoToRoute: [1, "preventGoToRoute"],
              },
              null,
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              49152,
              null,
              0,
              tl.a,
              [],
              { developerText: [0, "developerText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              10,
              671744,
              null,
              0,
              Ge.a,
              [ce.a, Ne.i, [2, Ne.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 3, 0, "NewConnectionTile"),
              e(n, 5, 0),
              e(
                n,
                6,
                0,
                l.ConnectedDevicesRoute.children.DiscoveredDevices,
                !0,
              ),
              e(n, 8, 0),
              e(n, 9, 0, "Neue\nVerbindung", "E89F_connect_add_device.webp"),
              e(n, 10, 0, l.lockingParamBonding));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 1).combinedDisabled,
              t.Nb(n, 1).useBrighterIcon,
              t.Nb(n, 8).markerClassEnabled,
            );
          },
        );
      }
      function gl(e) {
        return t.ac(
          0,
          [
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, hl)),
            t.xb(
              1,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(),
            t.hb(
              0,
              [
                [1, 2],
                ["newConnectionTileTemplate", 2],
              ],
              null,
              0,
              null,
              vl,
            )),
          ],
          function (e, n) {
            e(
              n,
              1,
              0,
              "New" !==
                (null == n.context.$implicit ? null : n.context.$implicit.id),
              t.Nb(n, 2),
            );
          },
          null,
        );
      }
      function ml(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              6,
              "au3-tile-grid",
              [
                ["class", "screen__wifi-clients-tiles"],
                ["id", ""],
              ],
              null,
              null,
              null,
              il.b,
              il.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.Sb(512, null, je.a, je.a, [ve.a]),
            t.xb(
              4,
              1032192,
              null,
              1,
              al.a,
              [t.s, t.h, ol.a, Pe.a, je.a, ve.a, se.a],
              { tiles: [0, "tiles"] },
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (e()(), t.hb(0, [[1, 2]], null, 0, null, gl)),
          ],
          function (e, n) {
            (e(n, 1, 0, ""), e(n, 4, 0, n.parent.parent.context.mib3Let));
          },
          null,
        );
      }
      function xl(e) {
        return t.ac(
          0,
          [
            (e()(), t.hb(16777216, null, null, 2, null, pl)),
            t.xb(
              1,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (e()(), t.hb(0, [["deviceListTemplate", 2]], null, 0, null, ml)),
          ],
          function (e, n) {
            var l = n.component;
            e(
              n,
              1,
              0,
              t.Yb(
                n,
                1,
                0,
                t.Nb(n, 2).transform(l.hotspotConnectInfoRequested$$),
              ) ||
                0 ===
                  (null == n.parent.context.mib3Let
                    ? null
                    : n.parent.context.mib3Let.length),
              t.Nb(n, 3),
            );
          },
          null,
        );
      }
      function fl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              5,
              "au3-disclaimer",
              [],
              null,
              null,
              null,
              ul.b,
              ul.a,
            )),
            t.xb(
              1,
              4440064,
              null,
              0,
              cl.a,
              [Yn.a, [2, de.a], t.h, se.a],
              null,
              null,
            ),
            (e()(), t.hb(16777216, null, 0, 2, null, bl)),
            t.xb(
              3,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (e()(), t.hb(0, [["hotSpotAvailableTemplate", 2]], 0, 0, null, xl)),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0),
              e(
                n,
                3,
                0,
                t.Yb(n, 3, 0, t.Nb(n, 4).transform(l.hotspotDisabled$)),
                t.Nb(n, 5),
              ));
          },
          null,
        );
      }
      function Tl(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              32,
              "au3-screen",
              [
                ["au3LockOnClamp15Off", ""],
                ["class", "screen"],
                ["id", "Screen:CM_APPLICATIONS_DETAIL_VIEW_HOTSPOT"],
              ],
              null,
              null,
              null,
              ln.b,
              ln.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, xe.a, [se.a], { id: [0, "id"] }, null),
            t.xb(3, 212992, null, 0, rl.a, [S.a, Yn.a], null, null),
            (e()(),
            t.yb(
              4,
              0,
              null,
              0,
              25,
              "au3-title-line",
              [
                ["class", "title"],
                ["id", "Titleline"],
              ],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              tn.b,
              tn.a,
            )),
            t.xb(
              5,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              6,
              49152,
              null,
              0,
              an.a,
              [on.a, un.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              7,
              0,
              null,
              0,
              10,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", "BackButton"],
                ["left", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n && (t = !1 !== e.component.back() && t),
                  t
                );
              },
              cn.b,
              cn.a,
            )),
            t.xb(8, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              9,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              11,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              rn.a,
              [se.a, sn.a, t.l, [2, ge.a], [2, ce.a]],
              null,
              null,
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              14,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              15,
              49152,
              null,
              0,
              bn.a,
              [[2, ce.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              18,
              0,
              null,
              2,
              11,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "GoToSettings"],
                ["right", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              cn.b,
              cn.a,
            )),
            t.xb(
              19,
              147456,
              null,
              0,
              ce.a,
              [re.a, t.h, se.a, [3, ce.a]],
              null,
              null,
            ),
            t.xb(20, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              21,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              22,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              23,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              null,
            ),
            t.xb(
              24,
              671744,
              null,
              0,
              De.a,
              [Se.a, Ne.i, ce.a, ge.a, De.b, Ie.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              26,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              27,
              49152,
              null,
              0,
              bn.a,
              [[2, ce.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              28,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              29,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
            (e()(), t.hb(16777216, null, 0, 2, null, fl)),
            t.xb(
              31,
              16384,
              null,
              0,
              We.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "Screen:CM_APPLICATIONS_DETAIL_VIEW_HOTSPOT"),
              e(n, 2, 0, "Screen:CM_APPLICATIONS_DETAIL_VIEW_HOTSPOT"),
              e(n, 3, 0),
              e(n, 5, 0, "Titleline"),
              e(n, 6, 0, "Settings", "Audi WLAN Hotspot"),
              e(n, 9, 0, "BackButton"),
              e(n, 11, 0),
              e(n, 14, 0),
              e(n, 15, 0, !1, "E163_Backbutton.webp"),
              e(n, 21, 0, "GoToSettings"),
              e(n, 23, 0),
              e(
                n,
                24,
                0,
                l.ConnectedDevicesRoute.children.ConnectionSettings,
                !0,
              ),
              e(n, 26, 0),
              e(n, 27, 0, !1, "E186_settings.webp"),
              e(n, 31, 0, t.Yb(n, 31, 0, t.Nb(n, 32).transform(l.devices$))));
          },
          function (e, n) {
            (e(
              n,
              4,
              0,
              t.Nb(n, 6).hideLeftBorder,
              t.Nb(n, 6).hideDividingBorders,
            ),
              e(
                n,
                7,
                0,
                t.Nb(n, 14).markerClassEnabled,
                t.Nb(n, 15).useItemPlaceholder,
              ),
              e(
                n,
                18,
                0,
                t.Nb(n, 19).combinedDisabled,
                t.Nb(n, 19).useBrighterIcon,
                t.Nb(n, 26).markerClassEnabled,
                t.Nb(n, 27).useItemPlaceholder,
              ));
          },
        );
      }
      function Ol(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-connected-to-wifi-hotspot",
              [],
              null,
              null,
              null,
              Tl,
              sl,
            )),
            t.xb(
              1,
              245760,
              null,
              0,
              J,
              [Se.a, V.a, K.b, m.a, N.a, Ne.i, Yn.a, mn.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            e(n, 1, 0);
          },
          null,
        );
      }
      var Dl = t.ub("au3-connected-to-wifi-hotspot", J, Ol, {}, {}, []),
        Sl = l("HVUF"),
        Nl = l("B3Zb"),
        Il = l("1VvW"),
        yl = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.screen[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;align-items:stretch}.component-layout-arabic[_nghost-%COMP%]   .list__item[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list__item[_ngcontent-%COMP%]{direction:rtl;text-align:right}.list__item[_ngcontent-%COMP%]{font-size:40px;height:100px;padding:0 20px}.list-with-userhint[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:row;align-items:stretch;height:100%;flex-grow:1}.userhint-text[_ngcontent-%COMP%]{justify-self:flex-end;display:flex;flex-direction:column;width:365px;font-size:28px;text-align:center}.no-devices-found-hint[_ngcontent-%COMP%]{font-size:40px;display:flex;align-items:center;justify-content:center;width:100%}",
            ],
          ],
          data: {},
        });
      function Pl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-title-line-item",
              [
                ["icon", "E092_audio_repeat_medium.webp"],
                ["id", "2"],
                ["right", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t = !1 !== e.component.startSearch() && t),
                  t
                );
              },
              cn.b,
              cn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              49152,
              null,
              0,
              bn.a,
              [[2, ce.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "2"),
              e(n, 4, 0),
              e(n, 6, 0),
              e(n, 7, 0, !1, "E092_audio_repeat_medium.webp"));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 6).markerClassEnabled,
              t.Nb(n, 7).useItemPlaceholder,
            );
          },
        );
      }
      function Cl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "no-devices-found-hint"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            t.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "NoDevicesFoundItem"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Kn.b,
              Kn.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              3,
              245760,
              null,
              0,
              Zn.a,
              [[6, de.a], Xn.a, t.h, t.l, t.D, [2, Qn.a], [2, Jn.a], [2, Ue.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, n) {
            (e(n, 2, 0, "NoDevicesFoundItem"),
              e(n, 3, 0, "Keine Ger\xe4te gefunden", "NoDevicesFoundItem", 1));
          },
          function (e, n) {
            e(
              n,
              1,
              0,
              t.Nb(n, 3).backgroundColor,
              t.Nb(n, 3).fixedNumberOfLines,
              t.Nb(n, 3).mayContainLatinCharsForArabic,
              t.Nb(n, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function El(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["ttIgnore", ""],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t =
                      !1 !== e.component.connectDevice(e.context.$implicit) &&
                      t),
                  t
                );
              },
              ue.b,
              ue.a,
            )),
            t.xb(1, 16384, null, 0, Jn.a, [], null, null),
            t.xb(2, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              114688,
              null,
              0,
              we.a,
              [],
              { titleNonI18nText: [0, "titleNonI18nText"], type: [1, "type"] },
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 4, 0),
              e(n, 6, 0),
              e(
                n,
                7,
                0,
                null == n.context.$implicit ? null : n.context.$implicit.name,
                l.listItemType.ITEM_TYPE_NO_END_ICON,
              ));
          },
          function (e, n) {
            e(n, 0, 0, t.Nb(n, 6).markerClassEnabled);
          },
        );
      }
      function _l(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              6,
              "au3-list",
              [["class", "list"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Ye.b,
              Ye.a,
            )),
            t.Sb(6144, null, qe.a, null, [Ve.a]),
            t.xb(2, 16384, null, 0, Ke.a, [t.l], null, null),
            t.xb(
              3,
              12828672,
              null,
              1,
              Ve.a,
              [
                [2, Ze.a],
                [2, Xe.a],
                [8, null],
                [2, de.a],
                [2, Qe.a],
                [2, Je.a],
                [2, me.b],
                Ne.i,
                t.z,
                t.h,
                se.a,
                en.a,
                nn.a,
                [2, Ee.a],
                ve.a,
                [2, Ne.a],
              ],
              { defaultTemplate: [0, "defaultTemplate"], items: [1, "items"] },
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            t.Pb(131072, ze.b, [t.h]),
            (e()(),
            t.hb(
              0,
              [
                [1, 2],
                ["default", 2],
              ],
              0,
              0,
              null,
              El,
            )),
          ],
          function (e, n) {
            var l = n.component;
            e(
              n,
              3,
              0,
              t.Nb(n, 6),
              t.Yb(n, 3, 1, t.Nb(n, 5).transform(l.discoveredDevices$)),
            );
          },
          function (e, n) {
            e(n, 0, 0, t.Nb(n, 3).showLineNumbers);
          },
        );
      }
      function Al(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "ConnectUSB"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Kn.b,
              Kn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              Zn.a,
              [[6, de.a], Xn.a, t.h, t.l, t.D, [2, Qn.a], [2, Jn.a], [2, Ue.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "ConnectUSB"),
              e(
                n,
                2,
                0,
                "Sie k\xf6nnen Ihr Ger\xe4t\n auch per USB verbinden.",
                "ConnectUSB",
                3,
              ));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 2).backgroundColor,
              t.Nb(n, 2).fixedNumberOfLines,
              t.Nb(n, 2).mayContainLatinCharsForArabic,
              t.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Ll(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "ConnectUsbAsi"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Kn.b,
              Kn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              Zn.a,
              [[6, de.a], Xn.a, t.h, t.l, t.D, [2, Qn.a], [2, Jn.a], [2, Ue.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "ConnectUsbAsi"),
              e(
                n,
                2,
                0,
                "Sie k\xf6nnen Apple\nCarplay auch per\nUSB verbinden.",
                "ConnectUsbAsi",
                3,
              ));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 2).backgroundColor,
              t.Nb(n, 2).fixedNumberOfLines,
              t.Nb(n, 2).mayContainLatinCharsForArabic,
              t.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function wl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              5,
              "div",
              [["class", "userhint-text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            t.yb(
              1,
              0,
              null,
              null,
              1,
              "au3-icon",
              [
                [
                  "fileName",
                  "/decorators/W255_Listitems/mib2plus_w255_new_audioplayer_decorator.webp",
                ],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              Sl.b,
              Sl.a,
            )),
            t.xb(
              2,
              4243456,
              null,
              0,
              Nl.b,
              [se.a, t.z],
              { fileName: [0, "fileName"] },
              null,
            ),
            (e()(), t.hb(16777216, null, null, 1, null, Al)),
            t.xb(
              4,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(), t.hb(0, [["asiDevicesTemplate", 2]], null, 0, null, Ll)),
          ],
          function (e, n) {
            var l = n.component;
            (e(
              n,
              2,
              0,
              "/decorators/W255_Listitems/mib2plus_w255_new_audioplayer_decorator.webp",
            ),
              e(n, 4, 0, !l.isAsiContext(), t.Nb(n, 5)));
          },
          function (e, n) {
            e(n, 1, 0, t.Nb(n, 2).iconComponentHidden);
          },
        );
      }
      function $l(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              26,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:CM_MAIN_FOUND"],
              ],
              null,
              null,
              null,
              ln.b,
              ln.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, xe.a, [se.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              15,
              "au3-title-line",
              [
                ["class", "title"],
                ["id", ""],
              ],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              tn.b,
              tn.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              an.a,
              [on.a, un.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryId: [1, "primaryId"],
                primaryIdEnumType: [2, "primaryIdEnumType"],
                secondaryDeveloperText: [3, "secondaryDeveloperText"],
                secondaryId: [4, "secondaryId"],
                secondaryIdEnumType: [5, "secondaryIdEnumType"],
                loaderActive: [6, "loaderActive"],
                hasLoader: [7, "hasLoader"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              10,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", "1"],
                ["left", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n && (t = !1 !== e.component.back() && t),
                  t
                );
              },
              cn.b,
              cn.a,
            )),
            t.xb(7, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              rn.a,
              [se.a, sn.a, t.l, [2, ge.a], [2, ce.a]],
              null,
              null,
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              13,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              14,
              49152,
              null,
              0,
              bn.a,
              [[2, ce.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              15,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
            (e()(), t.hb(16777216, null, 2, 1, null, Pl)),
            t.xb(
              18,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            t.yb(
              19,
              0,
              null,
              0,
              7,
              "au3-disclaimer",
              [],
              null,
              null,
              null,
              ul.b,
              ul.a,
            )),
            t.xb(
              20,
              4440064,
              null,
              0,
              cl.a,
              [Yn.a, [2, de.a], t.h, se.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              21,
              0,
              null,
              0,
              5,
              "div",
              [["class", "list-with-userhint"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), t.hb(16777216, null, null, 1, null, Cl)),
            t.xb(
              23,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(), t.hb(0, [["deviceList", 2]], null, 0, null, _l)),
            (e()(), t.hb(16777216, null, null, 1, null, wl)),
            t.xb(
              26,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "Screen:CM_MAIN_FOUND"),
              e(n, 2, 0, "Screen:CM_MAIN_FOUND"),
              e(n, 4, 0, ""),
              e(
                n,
                5,
                0,
                l.title,
                l.title,
                l.titleTextIds,
                n.context.mib3Let.isSearching
                  ? l.subtitleTextIds.SEARCHING
                  : n.context.mib3Let.devicesFound
                    ? l.subtitleTextIds.CHOOSE_A_DEVICE
                    : l.subtitleTextIds.NOTE,
                n.context.mib3Let.isSearching
                  ? l.subtitleTextIds.SEARCHING
                  : n.context.mib3Let.devicesFound
                    ? l.subtitleTextIds.CHOOSE_A_DEVICE
                    : l.subtitleTextIds.NOTE,
                l.subtitleTextIds,
                n.context.mib3Let.isSearching,
                !0,
              ),
              e(n, 8, 0, "1"),
              e(n, 10, 0),
              e(n, 13, 0),
              e(n, 14, 0, !1, "E163_Backbutton.webp"),
              e(n, 18, 0, !n.context.mib3Let.isSearching),
              e(n, 20, 0),
              e(
                n,
                23,
                0,
                !n.context.mib3Let.devicesFound &&
                  !n.context.mib3Let.isSearching,
                t.Nb(n, 24),
              ),
              e(n, 26, 0, l.showUsbUserHint));
          },
          function (e, n) {
            (e(
              n,
              3,
              0,
              t.Nb(n, 5).hideLeftBorder,
              t.Nb(n, 5).hideDividingBorders,
            ),
              e(
                n,
                6,
                0,
                t.Nb(n, 13).markerClassEnabled,
                t.Nb(n, 14).useItemPlaceholder,
              ));
          },
        );
      }
      function Ml(e) {
        return t.ac(
          2,
          [
            (e()(), t.hb(16777216, null, null, 4, null, $l)),
            t.xb(
              1,
              16384,
              null,
              0,
              We.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            t.Pb(131072, ze.b, [t.h]),
            t.Qb(4, { devicesFound: 0, isSearching: 1 }),
          ],
          function (e, n) {
            var l = n.component,
              i = e(
                n,
                4,
                0,
                t.Yb(n, 1, 0, t.Nb(n, 2).transform(l.devicesFound$)),
                t.Yb(n, 1, 0, t.Nb(n, 3).transform(l.searching$)),
              );
            e(n, 1, 0, i);
          },
          null,
        );
      }
      function kl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-bt-devices-found",
              [],
              null,
              null,
              null,
              Ml,
              yl,
            )),
            t.xb(
              1,
              245760,
              null,
              0,
              y,
              [r.a, Se.a, s.a, mn.a, m.a, x.c, S.a, N.a, Il.a, se.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            e(n, 1, 0);
          },
          null,
        );
      }
      var Bl = t.ub("au3-bt-devices-found", y, kl, {}, {}, []),
        jl = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{display:block;height:100%}.settings-list__route-item[_ngcontent-%COMP%]{padding:0 20px;height:120px;font-size:40px}",
            ],
          ],
          data: {},
        });
      function Rl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-tile",
              [
                ["class", "device-tile"],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [
                [null, "mib3Tap"],
                [null, "mib3Longpress"],
                [null, "mib3DisabledLongpress"],
              ],
              function (e, n, l) {
                var t = !0,
                  i = e.component;
                return (
                  "mib3Tap" === n &&
                    (t =
                      !1 !==
                        i.toggleDeviceConnected(
                          null == e.parent.context.$implicit ||
                            null == e.parent.context.$implicit.device
                            ? null
                            : e.parent.context.$implicit.device.bluetoothDevice,
                        ) && t),
                  "mib3Longpress" === n &&
                    (t =
                      !1 !==
                        i.openOptionsMenu(
                          null == e.parent.context.$implicit
                            ? null
                            : e.parent.context.$implicit.device,
                        ) && t),
                  "mib3DisabledLongpress" === n &&
                    (t =
                      !1 !==
                        i.openOptionsMenu(
                          null == e.parent.context.$implicit
                            ? null
                            : e.parent.context.$implicit.device,
                        ) && t),
                  t
                );
              },
              ll.b,
              ll.a,
            )),
            t.xb(1, 16384, null, 0, Jn.a, [], null, null),
            t.xb(2, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              ce.a,
              [re.a, t.h, se.a, [3, ce.a]],
              { disabled: [0, "disabled"], showReason: [1, "showReason"] },
              { longpress: "mib3DisabledLongpress" },
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              6,
              212992,
              null,
              0,
              ye.a,
              [
                se.a,
                t.z,
                t.l,
                me.b,
                Te.a,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                [2, Oe.a],
              ],
              null,
              { longpress: "mib3Longpress" },
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              49152,
              null,
              0,
              tl.a,
              [],
              {
                nonI18nText: [0, "nonI18nText"],
                icon: [1, "icon"],
                highlight: [2, "highlight"],
              },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              $e.a,
              [[2, ye.a], t.l, Me.a, ke.b],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            (e(
              n,
              4,
              0,
              null == n.parent.context.$implicit
                ? null
                : n.parent.context.$implicit.disabled,
              !1,
            ),
              e(n, 5, 0),
              e(n, 6, 0),
              e(n, 8, 0),
              e(
                n,
                9,
                0,
                null == n.parent.context.$implicit ||
                  null == n.parent.context.$implicit.device
                  ? null
                  : n.parent.context.$implicit.device.name,
                null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.icon,
                null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.highlight,
              ));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 4).combinedDisabled,
              t.Nb(n, 4).useBrighterIcon,
              t.Nb(n, 8).markerClassEnabled,
            );
          },
        );
      }
      function Hl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-tile",
              [["id", "NewConnectionTile"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t = !1 !== e.component.createNewConnection() && t),
                  t
                );
              },
              ll.b,
              ll.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              ce.a,
              [re.a, t.h, se.a, [3, ce.a]],
              null,
              null,
            ),
            t.xb(2, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              De.a,
              [Se.a, Ne.i, ce.a, ge.a, De.b, Ie.a],
              {
                routeInfo: [0, "routeInfo"],
                preventGoToRoute: [1, "preventGoToRoute"],
              },
              null,
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              49152,
              null,
              0,
              tl.a,
              [],
              { developerText: [0, "developerText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              10,
              671744,
              null,
              0,
              Ge.a,
              [ce.a, Ne.i, [2, Ne.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 3, 0, "NewConnectionTile"),
              e(n, 5, 0),
              e(
                n,
                6,
                0,
                l.ConnectedDevicesRoute.children.DiscoveredDevices,
                !0,
              ),
              e(n, 8, 0),
              e(n, 9, 0, "Neue\nVerbindung", "E89F_connect_add_device.webp"),
              e(n, 10, 0, l.lockingParamBonding));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 1).combinedDisabled,
              t.Nb(n, 1).useBrighterIcon,
              t.Nb(n, 8).markerClassEnabled,
            );
          },
        );
      }
      function Fl(e) {
        return t.ac(
          0,
          [
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, Rl)),
            t.xb(
              1,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(),
            t.hb(
              0,
              [
                [1, 2],
                ["newConnectionTileTemplate", 2],
              ],
              null,
              0,
              null,
              Hl,
            )),
          ],
          function (e, n) {
            e(
              n,
              1,
              0,
              !(null == n.context.$implicit || !n.context.$implicit.device),
              t.Nb(n, 2),
            );
          },
          null,
        );
      }
      function Wl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-list-route-item",
              [["class", "settings-list__route-item"]],
              null,
              null,
              null,
              ue.b,
              ue.a,
            )),
            t.xb(
              1,
              114688,
              null,
              0,
              we.a,
              [],
              {
                icon: [0, "icon"],
                titleTextId: [1, "titleTextId"],
                titleTextIdEnum: [2, "titleTextIdEnum"],
                titleDeveloperText: [3, "titleDeveloperText"],
                subtitleNonI18nText: [4, "subtitleNonI18nText"],
                hasSubtitle: [5, "hasSubtitle"],
                type: [6, "type"],
                twolineBeginIcon: [7, "twolineBeginIcon"],
              },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            e(
              n,
              1,
              0,
              l.utils.getIconForContext(
                null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.context,
                null == n.parent.context.$implicit ||
                  null == n.parent.context.$implicit.device.bluetoothDevice
                  ? null
                  : n.parent.context.$implicit.device.bluetoothDevice
                      .isPreferred,
                !1,
              ),
              n.context.mib3Let,
              l.connectivityDeviceTextIds,
              n.context.mib3Let,
              null == n.parent.context.$implicit ||
                null == n.parent.context.$implicit.device
                ? null
                : n.parent.context.$implicit.device.name,
              !0,
              l.listItemType.ITEM_TYPE_NO_END_ICON,
              !0,
            );
          },
          null,
        );
      }
      function zl(e) {
        return t.ac(
          0,
          [
            (e()(), t.hb(16777216, [[2, 2]], null, 1, null, Wl)),
            t.xb(
              1,
              16384,
              null,
              0,
              We.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            (e()(), t.hb(0, null, null, 0)),
          ],
          function (e, n) {
            var l = n.component;
            e(
              n,
              1,
              0,
              l.utils.getTitleForContext(
                null == n.context.$implicit
                  ? null
                  : n.context.$implicit.context,
                l.phoneService.twoPhonesSupported,
              ),
            );
          },
          null,
        );
      }
      function Ul(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              42,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:CM_MAIN_TRUSTED_DEVICES"],
              ],
              null,
              null,
              null,
              ln.b,
              ln.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, xe.a, [se.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              25,
              "au3-title-line",
              [
                ["class", "title"],
                ["id", "TitleLine"],
              ],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              tn.b,
              tn.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              an.a,
              [on.a, un.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
                secondaryId: [2, "secondaryId"],
                secondaryIdEnumType: [3, "secondaryIdEnumType"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              10,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", "BackButton"],
                ["left", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t = !1 !== e.component.routingService.goBack() && t),
                  t
                );
              },
              cn.b,
              cn.a,
            )),
            t.xb(7, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              rn.a,
              [se.a, sn.a, t.l, [2, ge.a], [2, ce.a]],
              null,
              null,
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              13,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              14,
              49152,
              null,
              0,
              bn.a,
              [[2, ce.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              15,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              17,
              0,
              null,
              2,
              11,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "SettingsButton"],
                ["right", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              cn.b,
              cn.a,
            )),
            t.xb(
              18,
              147456,
              null,
              0,
              ce.a,
              [re.a, t.h, se.a, [3, ce.a]],
              null,
              null,
            ),
            t.xb(19, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              20,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              21,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              22,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              null,
            ),
            t.xb(
              23,
              671744,
              null,
              0,
              De.a,
              [Se.a, Ne.i, ce.a, ge.a, De.b, Ie.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              25,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              26,
              49152,
              null,
              0,
              bn.a,
              [[2, ce.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              27,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              28,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              29,
              0,
              null,
              0,
              7,
              "au3-tile-grid",
              [["id", ""]],
              null,
              null,
              null,
              il.b,
              il.a,
            )),
            t.xb(
              30,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.Sb(512, null, je.a, je.a, [ve.a]),
            t.xb(
              33,
              1032192,
              null,
              1,
              al.a,
              [t.s, t.h, ol.a, Pe.a, je.a, ve.a, se.a],
              { tiles: [0, "tiles"] },
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            t.Pb(131072, ze.b, [t.h]),
            (e()(), t.hb(0, [[1, 2]], null, 0, null, Fl)),
            (e()(),
            t.yb(
              37,
              0,
              null,
              0,
              5,
              "au3-option-menu-wrapper",
              [],
              null,
              null,
              null,
              dn.b,
              dn.a,
            )),
            t.Sb(6144, null, pn.b, null, [hn.a]),
            t.Sb(512, null, Le.a, Le.a, [[3, Le.a]]),
            t.xb(
              40,
              245760,
              null,
              1,
              hn.a,
              [vn.a, gn.a, t.h, Le.a],
              { ttEnumType: [0, "ttEnumType"] },
              null,
            ),
            t.Tb(603979776, 2, { template: 0 }),
            (e()(), t.hb(0, [[2, 2]], null, 0, null, zl)),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "Screen:CM_MAIN_TRUSTED_DEVICES"),
              e(n, 2, 0, "Screen:CM_MAIN_TRUSTED_DEVICES"),
              e(n, 4, 0, "TitleLine"),
              e(
                n,
                5,
                0,
                "Verbundene Ger\xe4te",
                l.subtitle,
                l.subtitle,
                l.connectivityDeviceTextIds,
              ),
              e(n, 8, 0, "BackButton"),
              e(n, 10, 0),
              e(n, 13, 0),
              e(n, 14, 0, !1, "E163_Backbutton.webp"),
              e(n, 20, 0, "SettingsButton"),
              e(n, 22, 0),
              e(
                n,
                23,
                0,
                l.ConnectedDevicesRoute.children.ConnectionSettings,
                !0,
              ),
              e(n, 25, 0),
              e(n, 26, 0, !1, "E186_settings.webp"),
              e(n, 30, 0, ""),
              e(
                n,
                33,
                0,
                t.Yb(n, 33, 0, t.Nb(n, 35).transform(l.trustedDevicesTiles$)),
              ),
              e(n, 40, 0, l.optionTypeEnum));
          },
          function (e, n) {
            (e(
              n,
              3,
              0,
              t.Nb(n, 5).hideLeftBorder,
              t.Nb(n, 5).hideDividingBorders,
            ),
              e(
                n,
                6,
                0,
                t.Nb(n, 13).markerClassEnabled,
                t.Nb(n, 14).useItemPlaceholder,
              ),
              e(
                n,
                17,
                0,
                t.Nb(n, 18).combinedDisabled,
                t.Nb(n, 18).useBrighterIcon,
                t.Nb(n, 25).markerClassEnabled,
                t.Nb(n, 26).useItemPlaceholder,
              ));
          },
        );
      }
      function Gl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-trusted-devices",
              [],
              null,
              null,
              null,
              Ul,
              jl,
            )),
            t.Sb(4608, null, j, j, [
              gn.a,
              N.a,
              Se.a,
              r.a,
              M.a,
              m.a,
              x.c,
              mn.a,
              S.a,
              se.a,
            ]),
            t.Sb(6144, null, vn.a, null, [j]),
            t.xb(
              3,
              4374528,
              null,
              0,
              H,
              [Se.a, r.a, x.c, m.a, mn.a, gn.a, S.a, Il.a, se.a, M.a, s.a, t.h],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var Yl = t.ub("au3-trusted-devices", H, Gl, {}, {}, []),
        ql = l("ZUXc"),
        Vl = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;height:100%}.settings-list__route-item[_ngcontent-%COMP%]{padding:0 20px;height:120px;font-size:40px}.speed-disclaimer[_ngcontent-%COMP%], .statustext[_ngcontent-%COMP%]{text-align:center;font-size:40px}.speed-disclaimer[_ngcontent-%COMP%]{display:flex;height:100%;max-width:100%;justify-content:center;padding-top:70px;flex-direction:row;align-items:center}.speed-disclaimer__label[_ngcontent-%COMP%]{flex-grow:1;margin-left:40px;line-height:65px}.speed-disclaimer__icon[_ngcontent-%COMP%]{flex-grow:0;margin-left:30px}",
            ],
          ],
          data: {},
        });
      function Kl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-tile",
              [["ttIgnore", ""]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [
                [null, "mib3Tap"],
                [null, "mib3Longpress"],
                [null, "mib3DisabledLongpress"],
              ],
              function (e, n, l) {
                var t = !0,
                  i = e.component;
                return (
                  "mib3Tap" === n &&
                    (t =
                      !1 !==
                        i.toggleDeviceConnected(e.parent.context.$implicit) &&
                      t),
                  "mib3Longpress" === n &&
                    (t =
                      !1 !== i.openOptionsMenu(e.parent.context.$implicit) &&
                      t),
                  "mib3DisabledLongpress" === n &&
                    (t =
                      !1 !== i.openOptionsMenu(e.parent.context.$implicit) &&
                      t),
                  t
                );
              },
              ll.b,
              ll.a,
            )),
            t.xb(1, 16384, null, 0, Jn.a, [], null, null),
            t.xb(2, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              ce.a,
              [re.a, t.h, se.a, [3, ce.a]],
              { disabled: [0, "disabled"], showReason: [1, "showReason"] },
              { longpress: "mib3DisabledLongpress" },
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              6,
              212992,
              null,
              0,
              ye.a,
              [
                se.a,
                t.z,
                t.l,
                me.b,
                Te.a,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                [2, Oe.a],
              ],
              null,
              { longpress: "mib3Longpress" },
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              49152,
              null,
              0,
              tl.a,
              [],
              {
                nonI18nText: [0, "nonI18nText"],
                icon: [1, "icon"],
                highlight: [2, "highlight"],
              },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              $e.a,
              [[2, ye.a], t.l, Me.a, ke.b],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(
              n,
              4,
              0,
              (null == n.parent.context.$implicit
                ? null
                : n.parent.context.$implicit.disabled) ||
                n.parent.parent.parent.context.mib3Let.tilesBlocked,
              !1,
            ),
              e(n, 5, 0),
              e(n, 6, 0),
              e(n, 8, 0),
              e(
                n,
                9,
                0,
                l.utils.getTitleOnTwoLines(n.parent.context.$implicit),
                null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.icon,
                null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.highlight,
              ));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 4).combinedDisabled,
              t.Nb(n, 4).useBrighterIcon,
              t.Nb(n, 8).markerClassEnabled,
            );
          },
        );
      }
      function Zl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-tile",
              [["id", "NewConnectionTile"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t = !1 !== e.component.createNewConnection() && t),
                  t
                );
              },
              ll.b,
              ll.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              ce.a,
              [re.a, t.h, se.a, [3, ce.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(2, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              De.a,
              [Se.a, Ne.i, ce.a, ge.a, De.b, Ie.a],
              {
                routeInfo: [0, "routeInfo"],
                preventGoToRoute: [1, "preventGoToRoute"],
              },
              null,
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              49152,
              null,
              0,
              tl.a,
              [],
              { developerText: [0, "developerText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              10,
              671744,
              null,
              0,
              Ge.a,
              [ce.a, Ne.i, [2, Ne.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(
              n,
              1,
              0,
              (null == n.parent.context.$implicit
                ? null
                : n.parent.context.$implicit.disabled) ||
                n.parent.parent.parent.context.mib3Let.tilesBlocked,
            ),
              e(n, 3, 0, "NewConnectionTile"),
              e(n, 5, 0),
              e(
                n,
                6,
                0,
                l.ConnectedDevicesRoute.children.DiscoveredDevices,
                !0,
              ),
              e(n, 8, 0),
              e(n, 9, 0, "Neue\nVerbindung", "E89F_connect_add_device.webp"),
              e(n, 10, 0, l.lockingParamBonding));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 1).combinedDisabled,
              t.Nb(n, 1).useBrighterIcon,
              t.Nb(n, 8).markerClassEnabled,
            );
          },
        );
      }
      function Xl(e) {
        return t.ac(
          0,
          [
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, Kl)),
            t.xb(
              1,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(),
            t.hb(
              0,
              [
                [1, 2],
                ["newConnectionTileTemplate", 2],
              ],
              null,
              0,
              null,
              Zl,
            )),
          ],
          function (e, n) {
            e(
              n,
              1,
              0,
              !(null == n.context.$implicit || !n.context.$implicit.device),
              t.Nb(n, 2),
            );
          },
          null,
        );
      }
      function Ql(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              6,
              "au3-tile-grid",
              [["id", "AsiDevicesTileGrid"]],
              null,
              null,
              null,
              il.b,
              il.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.Sb(512, null, je.a, je.a, [ve.a]),
            t.xb(
              4,
              1032192,
              null,
              1,
              al.a,
              [t.s, t.h, ol.a, Pe.a, je.a, ve.a, se.a],
              { tiles: [0, "tiles"] },
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (e()(), t.hb(0, [[1, 2]], null, 0, null, Xl)),
          ],
          function (e, n) {
            (e(n, 1, 0, "AsiDevicesTileGrid"),
              e(n, 4, 0, n.parent.context.mib3Let.asiDevices));
          },
          null,
        );
      }
      function Jl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-instruction-text",
              [["id", "NoTrustedAsiDevice"]],
              null,
              null,
              null,
              Wn.b,
              Wn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              zn.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryFixedNumberOfLines: [1, "primaryFixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "NoTrustedAsiDevice"),
              e(
                n,
                2,
                0,
                "Bitte verbinden Sie ein kompatibles Telefon \xfcber USB mit dem MMI,\num Audi Smartphone Interface zu nutzen.",
                8,
              ));
          },
          null,
        );
      }
      function et(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              5,
              "div",
              [["class", "speed-disclaimer"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            t.yb(
              1,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [["class", "speed-disclaimer__label"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Kn.b,
              Kn.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            t.xb(
              4,
              245760,
              null,
              0,
              Zn.a,
              [[6, de.a], Xn.a, t.h, t.l, t.D, [2, Qn.a], [2, Jn.a], [2, Ue.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
          ],
          function (e, n) {
            var l = n.component;
            (e(
              n,
              2,
              0,
              t.Yb(n, 2, 0, t.Nb(n, 3).transform(l.disclaimerService.reason$)),
              l.disabledTextsEnum,
            ),
              e(
                n,
                4,
                0,
                l.disabledTextsEnum.LOCKING_LONG_TEXT,
                t.Yb(
                  n,
                  4,
                  1,
                  t.Nb(n, 5).transform(l.disclaimerService.reason$),
                ),
                2,
              ));
          },
          function (e, n) {
            e(
              n,
              1,
              0,
              t.Nb(n, 4).backgroundColor,
              t.Nb(n, 4).fixedNumberOfLines,
              t.Nb(n, 4).mayContainLatinCharsForArabic,
              t.Nb(n, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function nt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-list-route-item",
              [
                ["class", "settings-list__route-item"],
                ["id", "OptionMenuSelectedItem"],
              ],
              null,
              null,
              null,
              ue.b,
              ue.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              114688,
              null,
              0,
              we.a,
              [],
              {
                icon: [0, "icon"],
                titleTextId: [1, "titleTextId"],
                titleTextIdEnum: [2, "titleTextIdEnum"],
                titleDeveloperText: [3, "titleDeveloperText"],
                subtitleNonI18nText: [4, "subtitleNonI18nText"],
                hasSubtitle: [5, "hasSubtitle"],
                type: [6, "type"],
                twolineBeginIcon: [7, "twolineBeginIcon"],
              },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "OptionMenuSelectedItem"),
              e(
                n,
                2,
                0,
                l.utils.getIconForAsiTechnology(
                  null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.asiTechnology,
                ),
                n.context.mib3Let,
                l.connectivityDeviceTextIds,
                n.context.mib3Let,
                l.utils.getAsiDeviceName(
                  null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.device,
                ),
                !0,
                l.listItemType.ITEM_TYPE_NO_END_ICON,
                !0,
              ));
          },
          null,
        );
      }
      function lt(e) {
        return t.ac(
          0,
          [
            (e()(), t.hb(16777216, [[2, 2]], null, 1, null, nt)),
            t.xb(
              1,
              16384,
              null,
              0,
              We.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            (e()(), t.hb(0, null, null, 0)),
          ],
          function (e, n) {
            e(n, 1, 0, n.component.utils.getTitle(n.context.$implicit));
          },
          null,
        );
      }
      function tt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              40,
              "au3-screen",
              [["id", "Screen:CM_APPLICATIONS_DETAIL_VIEW_ASI_*"]],
              null,
              null,
              null,
              ln.b,
              ln.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, xe.a, [se.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              25,
              "au3-title-line",
              [
                ["class", "title"],
                ["id", "TitleLine"],
              ],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              tn.b,
              tn.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              an.a,
              [on.a, un.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              10,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", "BackButton"],
                ["left", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t = !1 !== e.component.routingService.goBack() && t),
                  t
                );
              },
              cn.b,
              cn.a,
            )),
            t.xb(7, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              rn.a,
              [se.a, sn.a, t.l, [2, ge.a], [2, ce.a]],
              null,
              null,
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              13,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              14,
              49152,
              null,
              0,
              bn.a,
              [[2, ce.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              15,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              17,
              0,
              null,
              2,
              11,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "SettingsButton"],
                ["right", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              cn.b,
              cn.a,
            )),
            t.xb(
              18,
              147456,
              null,
              0,
              ce.a,
              [re.a, t.h, se.a, [3, ce.a]],
              null,
              null,
            ),
            t.xb(19, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              20,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              21,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              22,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              null,
            ),
            t.xb(
              23,
              671744,
              null,
              0,
              De.a,
              [Se.a, Ne.i, ce.a, ge.a, De.b, Ie.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              25,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              26,
              49152,
              null,
              0,
              bn.a,
              [[2, ce.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              27,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              28,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
            (e()(), t.hb(16777216, null, 0, 1, null, Ql)),
            t.xb(
              30,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), t.hb(16777216, null, 0, 1, null, Jl)),
            t.xb(
              32,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), t.hb(16777216, null, 0, 1, null, et)),
            t.xb(
              34,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            t.yb(
              35,
              0,
              null,
              0,
              5,
              "au3-option-menu-wrapper",
              [],
              null,
              null,
              null,
              dn.b,
              dn.a,
            )),
            t.Sb(6144, null, pn.b, null, [hn.a]),
            t.Sb(512, null, Le.a, Le.a, [[3, Le.a]]),
            t.xb(
              38,
              245760,
              null,
              1,
              hn.a,
              [vn.a, gn.a, t.h, Le.a],
              { ttEnumType: [0, "ttEnumType"] },
              null,
            ),
            t.Tb(603979776, 2, { template: 0 }),
            (e()(), t.hb(0, [[2, 2]], null, 0, null, lt)),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "Screen:CM_APPLICATIONS_DETAIL_VIEW_ASI_*"),
              e(n, 2, 0, "Screen:CM_APPLICATIONS_DETAIL_VIEW_ASI_*"),
              e(n, 4, 0, "TitleLine"),
              e(n, 5, 0, "Verbundene Ger\xe4te", "Audi Smartphone Interface"),
              e(n, 8, 0, "BackButton"),
              e(n, 10, 0),
              e(n, 13, 0),
              e(n, 14, 0, !1, "E163_Backbutton.webp"),
              e(n, 20, 0, "SettingsButton"),
              e(n, 22, 0),
              e(
                n,
                23,
                0,
                l.ConnectedDevicesRoute.children.ConnectionSettings,
                !0,
              ),
              e(n, 25, 0),
              e(n, 26, 0, !1, "E186_settings.webp"),
              e(
                n,
                30,
                0,
                0 !==
                  (null == n.context.mib3Let.asiDevices
                    ? null
                    : n.context.mib3Let.asiDevices.length),
              ),
              e(
                n,
                32,
                0,
                0 ===
                  (null == n.context.mib3Let.asiDevices
                    ? null
                    : n.context.mib3Let.asiDevices.length) && !l.lockingActive,
              ),
              e(
                n,
                34,
                0,
                l.lockingActive &&
                  0 ===
                    (null == n.context.mib3Let.asiDevices
                      ? null
                      : n.context.mib3Let.asiDevices.length),
              ),
              e(n, 38, 0, l.optionTypeEnum));
          },
          function (e, n) {
            (e(
              n,
              3,
              0,
              t.Nb(n, 5).hideLeftBorder,
              t.Nb(n, 5).hideDividingBorders,
            ),
              e(
                n,
                6,
                0,
                t.Nb(n, 13).markerClassEnabled,
                t.Nb(n, 14).useItemPlaceholder,
              ),
              e(
                n,
                17,
                0,
                t.Nb(n, 18).combinedDisabled,
                t.Nb(n, 18).useBrighterIcon,
                t.Nb(n, 25).markerClassEnabled,
                t.Nb(n, 26).useItemPlaceholder,
              ));
          },
        );
      }
      function it(e) {
        return t.ac(
          2,
          [
            (e()(), t.hb(16777216, null, null, 4, null, tt)),
            t.xb(
              1,
              16384,
              null,
              0,
              We.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            t.Pb(131072, ze.b, [t.h]),
            t.Qb(4, { asiDevices: 0, tilesBlocked: 1 }),
          ],
          function (e, n) {
            var l = n.component,
              i = e(
                n,
                4,
                0,
                t.Yb(n, 1, 0, t.Nb(n, 2).transform(l.asiDevices$)),
                t.Yb(n, 1, 0, t.Nb(n, 3).transform(l.tilesBlocked$)),
              );
            e(n, 1, 0, i);
          },
          null,
        );
      }
      function at(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-asi-devices",
              [],
              null,
              null,
              null,
              it,
              Vl,
            )),
            t.Sb(4608, null, j, j, [
              gn.a,
              N.a,
              Se.a,
              r.a,
              M.a,
              m.a,
              x.c,
              mn.a,
              S.a,
              se.a,
            ]),
            t.Sb(6144, null, vn.a, null, [j]),
            t.xb(
              3,
              245760,
              null,
              0,
              ne,
              [Se.a, M.a, m.a, r.a, gn.a, ql.a, mn.a, Yn.a, Ne.i, se.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            e(n, 3, 0);
          },
          null,
        );
      }
      var ot = t.ub("au3-asi-devices", ne, at, {}, {}, []),
        ut = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;align-items:stretch}",
            ],
          ],
          data: {},
        });
      function ct(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              0,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
          ],
          null,
          null,
        );
      }
      function rt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-instruction-text",
              [["id", "ConnectToCarPlayWirelessHint"]],
              null,
              null,
              null,
              Wn.b,
              Wn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              Ue.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            t.Qb(4, { btName: 0 }),
            t.xb(
              5,
              49152,
              null,
              0,
              zn.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryFixedNumberOfLines: [1, "primaryFixedNumberOfLines"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              1,
              3,
              "au3-operation-panel",
              [],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              Un.b,
              Un.a,
            )),
            t.xb(
              7,
              49152,
              null,
              0,
              Gn.a,
              [Yn.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (e()(), t.hb(16777216, null, 1, 1, null, ct)),
            t.xb(
              9,
              540672,
              null,
              0,
              ze.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            e(n, 1, 0, "ConnectToCarPlayWirelessHint");
            var i = e(
              n,
              4,
              0,
              t.Yb(n, 2, 0, t.Nb(n, 3).transform(l.bluetoothNodeName$)),
            );
            (e(n, 2, 0, i),
              e(
                n,
                5,
                0,
                "Verbinden Sie jetzt CarPlay wireless aus den Carplay-\nEinstellungen Ihreskompatiblen Mobilger\xe4tes. Stellen Sie\ndort eine Verbindung zu Ihrem Fahrzeug her:\n({{btName}})\nAlternativ k\xf6nnen Sie ein Ger\xe4t per USB verbinden oder ein\nbekanntes Ger\xe4t aus den Verbundenen Ger\xe4ten aktivieren.",
                5,
              ),
              e(n, 7, 0, !0),
              e(n, 9, 0, t.Nb(n.parent, 10)));
          },
          function (e, n) {
            e(n, 6, 0, t.Nb(n, 7).alignInside, t.Nb(n, 7).alignOutside);
          },
        );
      }
      function st(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              0,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
          ],
          null,
          null,
        );
      }
      function bt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              16,
              "au3-instruction-text",
              [["id", "ActivateWifiToEnableCarPlayWirelessHint"]],
              null,
              null,
              null,
              Wn.b,
              Wn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              zn.a,
              [],
              { primaryDeveloperText: [0, "primaryDeveloperText"] },
              null,
            ),
            (e()(),
            t.yb(
              3,
              0,
              null,
              1,
              13,
              "au3-operation-panel",
              [],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              Un.b,
              Un.a,
            )),
            t.xb(
              4,
              49152,
              null,
              0,
              Gn.a,
              [Yn.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (e()(),
            t.yb(
              5,
              0,
              null,
              1,
              9,
              "au3-operation-panel-item",
              [["id", "ActivateBtAndWifi"]],
              [
                [2, "mib3-haptic", null],
                [2, "op-item--separator-left", null],
                [2, "op-item--separator-right", null],
                [2, "op-item--prio1-main", null],
                [2, "op-item--prio1-small-scale", null],
                [2, "op-item--prio2-small-scale", null],
                [2, "op-item--prio1", null],
                [2, "op-item--prio2", null],
                [2, "op-item--prio1-icon-text", null],
                [2, "op-item--prio1-icon-only", null],
                [2, "op-item--prio1-text-only", null],
                [2, "op-item--prio2-icon-text", null],
                [2, "op-item--prio2-icon-only", null],
                [2, "op-item--prio2-text-only", null],
                [2, "op-item--default-max-width", null],
                [2, "op-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t = !1 !== e.component.activateBtAndWifi() && t),
                  t
                );
              },
              qn.b,
              qn.a,
            )),
            t.xb(
              6,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(7, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              8,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              9,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              11,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              12,
              49152,
              null,
              0,
              Vn.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              14,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
            (e()(), t.hb(16777216, null, 1, 1, null, st)),
            t.xb(
              16,
              540672,
              null,
              0,
              ze.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "ActivateWifiToEnableCarPlayWirelessHint"),
              e(
                n,
                2,
                0,
                "Um Apple wireless Carplay verbinden zu k\xf6nnen, aktivieren\nSie bitte Bluetooth und WLAN Sichtbarkeit.\nSie k\xf6nnen ein neues Ger\xe4t auch per USB verbinden oder\n\xfcber die verbundenen Ger\xe4te ausw\xe4hlen",
              ),
              e(n, 4, 0, !0),
              e(n, 6, 0, "ActivateBtAndWifi"),
              e(n, 9, 0),
              e(n, 11, 0),
              e(n, 12, 0, "Bluetooth & WLAN an", !0),
              e(n, 16, 0, t.Nb(n.parent, 10)));
          },
          function (e, n) {
            (e(n, 3, 0, t.Nb(n, 4).alignInside, t.Nb(n, 4).alignOutside),
              e(n, 5, 1, [
                t.Nb(n, 11).markerClassEnabled,
                t.Nb(n, 12).showSeparatorLeft,
                t.Nb(n, 12).showSeparatorRight,
                t.Nb(n, 12).prio1Main,
                t.Nb(n, 12).prio1SmallScale,
                t.Nb(n, 12).prio2SmallScale,
                t.Nb(n, 12).prio1,
                t.Nb(n, 12).prio2,
                t.Nb(n, 12).prio1IconText,
                t.Nb(n, 12).prio1IconOnly,
                t.Nb(n, 12).prio1TextOnly,
                t.Nb(n, 12).prio2IconText,
                t.Nb(n, 12).prio2IconOnly,
                t.Nb(n, 12).prio2TextOnly,
                t.Nb(n, 12).useDefaultMaxWidth,
                t.Nb(n, 12).isDummy,
              ]));
          },
        );
      }
      function dt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-operation-panel-item",
              [["id", "GoToConnectedAsiDevices"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "op-item--separator-left", null],
                [2, "op-item--separator-right", null],
                [2, "op-item--prio1-main", null],
                [2, "op-item--prio1-small-scale", null],
                [2, "op-item--prio2-small-scale", null],
                [2, "op-item--prio1", null],
                [2, "op-item--prio2", null],
                [2, "op-item--prio1-icon-text", null],
                [2, "op-item--prio1-icon-only", null],
                [2, "op-item--prio1-text-only", null],
                [2, "op-item--prio2-icon-text", null],
                [2, "op-item--prio2-icon-only", null],
                [2, "op-item--prio2-text-only", null],
                [2, "op-item--default-max-width", null],
                [2, "op-item--placeholder", null],
              ],
              null,
              null,
              qn.b,
              qn.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              ce.a,
              [re.a, t.h, se.a, [3, ce.a]],
              null,
              null,
            ),
            t.xb(2, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              De.a,
              [Se.a, Ne.i, ce.a, ge.a, De.b, Ie.a],
              {
                routeInfo: [0, "routeInfo"],
                longTextButton: [1, "longTextButton"],
              },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              9,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              10,
              49152,
              null,
              0,
              Vn.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 3, 0, "GoToConnectedAsiDevices"),
              e(n, 5, 0),
              e(
                n,
                6,
                0,
                l.Routes.children.TrustedAsiDevices,
                !t.Yb(
                  n,
                  6,
                  1,
                  t
                    .Nb(n, 7)
                    .transform(
                      l.smartphoneIntegrationService.asiDevicesTilesAvailable$,
                    ),
                ),
              ),
              e(n, 9, 0),
              e(n, 10, 0, "Zu den verbundenen Ger\xe4ten", !0));
          },
          function (e, n) {
            e(n, 0, 1, [
              t.Nb(n, 1).combinedDisabled,
              t.Nb(n, 1).useBrighterIcon,
              t.Nb(n, 9).markerClassEnabled,
              t.Nb(n, 10).showSeparatorLeft,
              t.Nb(n, 10).showSeparatorRight,
              t.Nb(n, 10).prio1Main,
              t.Nb(n, 10).prio1SmallScale,
              t.Nb(n, 10).prio2SmallScale,
              t.Nb(n, 10).prio1,
              t.Nb(n, 10).prio2,
              t.Nb(n, 10).prio1IconText,
              t.Nb(n, 10).prio1IconOnly,
              t.Nb(n, 10).prio1TextOnly,
              t.Nb(n, 10).prio2IconText,
              t.Nb(n, 10).prio2IconOnly,
              t.Nb(n, 10).prio2TextOnly,
              t.Nb(n, 10).useDefaultMaxWidth,
              t.Nb(n, 10).isDummy,
            ]);
          },
        );
      }
      function pt(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:ASI_TERMINAL_MODE_NO_DEVICE_*"],
              ],
              null,
              null,
              null,
              ln.b,
              ln.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, xe.a, [se.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              2,
              "au3-title-line",
              [
                ["class", "title"],
                ["id", "TitleLine"],
              ],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              tn.b,
              tn.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              an.a,
              [on.a, un.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
                hideLeftBorder: [2, "hideLeftBorder"],
              },
              null,
            ),
            (e()(), t.hb(16777216, null, 0, 2, null, rt)),
            t.xb(
              7,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (e()(), t.hb(0, [["NoBtOrWifiTemplate", 2]], 0, 0, null, bt)),
            (e()(),
            t.hb(0, [["GoToConnectedDevicesTemplate", 2]], 0, 0, null, dt)),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "Screen:ASI_TERMINAL_MODE_NO_DEVICE_*"),
              e(n, 2, 0, "Screen:ASI_TERMINAL_MODE_NO_DEVICE_*"),
              e(n, 4, 0, "TitleLine"),
              e(n, 5, 0, "Audi Smartphone Interface", "Hinweis", !0),
              e(
                n,
                7,
                0,
                t.Yb(n, 7, 0, t.Nb(n, 8).transform(l.canActivateCarPlay$)),
                t.Nb(n, 9),
              ));
          },
          function (e, n) {
            e(
              n,
              3,
              0,
              t.Nb(n, 5).hideLeftBorder,
              t.Nb(n, 5).hideDividingBorders,
            );
          },
        );
      }
      function ht(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-activate-for-car-play-warning",
              [],
              null,
              null,
              null,
              pt,
              ut,
            )),
            t.xb(1, 180224, null, 0, le, [Se.a, N.a, r.a, M.a], null, null),
          ],
          null,
          null,
        );
      }
      var vt = t.ub("au3-activate-for-car-play-warning", le, ht, {}, {}, []),
        gt = l("U6SP"),
        mt = l("1ZTq"),
        xt = t.wb({
          encapsulation: 0,
          styles: [
            [
              '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.screen[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column}.title[_ngcontent-%COMP%]{width:100%}.content[_ngcontent-%COMP%]{flex:1 1 0;flex-direction:row;padding:20px}.content[_ngcontent-%COMP%], .content__text[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;display:flex;align-items:flex-start}.content__text[_ngcontent-%COMP%]{flex:1 1 0;flex-direction:column;overflow:hidden}.info[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:30px;padding:15px 0;max-width:1004px}.pin[_ngcontent-%COMP%]{font-size:40px;padding:20px 0 25px;height:95px}.button[_ngcontent-%COMP%]{position:absolute;bottom:20px;left:calc(50% - 180px);width:350px}.content__decorator[_ngcontent-%COMP%]{margin-right:-35px;width:262px;height:422px}.component-layout-arabic[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .content[_ngcontent-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .content__decorator[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .content__decorator[_ngcontent-%COMP%]{margin-right:0}.component-layout-latin[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .content[_ngcontent-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .content__decorator[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .content__decorator[_ngcontent-%COMP%]{margin-right:-35px}@media (max-width:1280px){.info[_ngcontent-%COMP%]{max-width:782px}}.state-disabled[_ngcontent-%COMP%]{filter:grayscale(100%) brightness(.4)}',
            ],
          ],
          data: {},
        });
      function ft(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["id", "Pin"],
                ["ttIgnore", ""],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Kn.b,
              Kn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 16384, null, 0, Jn.a, [], null, null),
            t.xb(
              3,
              245760,
              null,
              0,
              Zn.a,
              [[6, de.a], Xn.a, t.h, t.l, t.D, [2, Qn.a], [2, Jn.a], [2, Ue.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "Pin"),
              e(n, 3, 0, "Pin", null == l.pairing ? null : l.pairing.passKey));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 3).backgroundColor,
              t.Nb(n, 3).fixedNumberOfLines,
              t.Nb(n, 3).mayContainLatinCharsForArabic,
              t.Nb(n, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Tt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              42,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:CM_MAIN_PAIRING_BT_SIMPLE_COMPARE_CANCEL_ONLY"],
              ],
              null,
              null,
              null,
              ln.b,
              ln.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, xe.a, [se.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              13,
              "au3-title-line",
              [
                ["class", "title"],
                ["id", "TitleLine"],
              ],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              tn.b,
              tn.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              an.a,
              [on.a, un.a],
              {
                primaryId: [0, "primaryId"],
                primaryIdEnumType: [1, "primaryIdEnumType"],
                secondaryNonI18nText: [2, "secondaryNonI18nText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              10,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", "BackButton"],
                ["left", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n && (t = !1 !== e.component.cancel() && t),
                  t
                );
              },
              cn.b,
              cn.a,
            )),
            t.xb(7, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              rn.a,
              [se.a, sn.a, t.l, [2, ge.a], [2, ce.a]],
              null,
              null,
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              13,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              14,
              49152,
              null,
              0,
              bn.a,
              [[2, ce.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              15,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              17,
              0,
              null,
              0,
              25,
              "au3-disclaimer",
              [],
              null,
              null,
              null,
              ul.b,
              ul.a,
            )),
            t.xb(
              18,
              4440064,
              null,
              0,
              cl.a,
              [Yn.a, [2, de.a], t.h, se.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              19,
              0,
              null,
              0,
              23,
              "div",
              [["class", "content"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            t.yb(
              20,
              0,
              null,
              null,
              9,
              "div",
              [["class", "content__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            t.yb(
              21,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "info"],
                ["id", "SecurePairing"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Kn.b,
              Kn.a,
            )),
            t.xb(
              22,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              23,
              245760,
              null,
              0,
              Zn.a,
              [[6, de.a], Xn.a, t.h, t.l, t.D, [2, Qn.a], [2, Jn.a], [2, Ue.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (e()(),
            t.yb(
              24,
              0,
              null,
              null,
              2,
              "div",
              [["class", "pin"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), t.hb(16777216, null, null, 1, null, ft)),
            t.xb(
              26,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            t.yb(
              27,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "info"],
                ["id", "CheckPinInstructions"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Kn.b,
              Kn.a,
            )),
            t.xb(
              28,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              29,
              245760,
              null,
              0,
              Zn.a,
              [[6, de.a], Xn.a, t.h, t.l, t.D, [2, Qn.a], [2, Jn.a], [2, Ue.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (e()(),
            t.yb(
              30,
              0,
              null,
              null,
              10,
              "au3-button",
              [
                ["class", "button"],
                ["id", "CancelButton"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "button--activated", null],
                [2, "button--horizontal", null],
                [2, "button--with-border", null],
                [2, "button--with-thick-border", null],
              ],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n && (t = !1 !== e.component.cancel() && t),
                  t
                );
              },
              gt.b,
              gt.a,
            )),
            t.xb(
              31,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(32, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              33,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              34,
              147456,
              null,
              0,
              ce.a,
              [re.a, t.h, se.a, [3, ce.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              35,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              37,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              38,
              49152,
              null,
              0,
              mt.b,
              [],
              {
                developerText: [0, "developerText"],
                borderStyle: [1, "borderStyle"],
              },
              null,
            ),
            t.xb(
              39,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              40,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              41,
              0,
              null,
              null,
              1,
              "au3-icon",
              [
                ["class", "content__decorator"],
                [
                  "fileName",
                  "/decorators/W368_InstructionTextWidgetActionWidget/mib3_W368_connectivity_paring_screens_decorator.webp",
                ],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              Sl.b,
              Sl.a,
            )),
            t.xb(
              42,
              4243456,
              null,
              0,
              Nl.b,
              [se.a, t.z],
              { fileName: [0, "fileName"] },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "Screen:CM_MAIN_PAIRING_BT_SIMPLE_COMPARE_CANCEL_ONLY"),
              e(
                n,
                2,
                0,
                "Screen:CM_MAIN_PAIRING_BT_SIMPLE_COMPARE_CANCEL_ONLY",
              ),
              e(n, 4, 0, "TitleLine"),
              e(n, 5, 0, l.title, l.titleTextIds, l.deviceName),
              e(n, 8, 0, "BackButton"),
              e(n, 10, 0),
              e(n, 13, 0),
              e(n, 14, 0, !1, "E163_Backbutton.webp"),
              e(n, 18, 0),
              e(n, 22, 0, "SecurePairing"),
              e(n, 23, 0, "Sichere Bluetoothverbindung", "SecurePairing", 5),
              e(n, 26, 0, null == l.pairing ? null : l.pairing.passKey),
              e(n, 28, 0, "CheckPinInstructions"),
              e(
                n,
                29,
                0,
                "\xdcberpr\xfcfen Sie, ob dieser PIN und der PIN\nIhres Mobiltelefons \xfcbereinstimmen.\nAchten Sie auf Anfragen auf Ihrem Mobiltelefon.",
                "CheckPinInstructions",
                5,
              ),
              e(n, 31, 0, "CancelButton"),
              e(n, 34, 0, !l.isCancelAllowed()),
              e(n, 35, 0),
              e(n, 37, 0),
              e(n, 38, 0, "Abbrechen", l.borderStyleEnum.THICK),
              e(
                n,
                42,
                0,
                "/decorators/W368_InstructionTextWidgetActionWidget/mib3_W368_connectivity_paring_screens_decorator.webp",
              ));
          },
          function (e, n) {
            (e(
              n,
              3,
              0,
              t.Nb(n, 5).hideLeftBorder,
              t.Nb(n, 5).hideDividingBorders,
            ),
              e(
                n,
                6,
                0,
                t.Nb(n, 13).markerClassEnabled,
                t.Nb(n, 14).useItemPlaceholder,
              ),
              e(
                n,
                21,
                0,
                t.Nb(n, 23).backgroundColor,
                t.Nb(n, 23).fixedNumberOfLines,
                t.Nb(n, 23).mayContainLatinCharsForArabic,
                t.Nb(n, 23).shortenWithEllipsisForArabic,
              ),
              e(
                n,
                27,
                0,
                t.Nb(n, 29).backgroundColor,
                t.Nb(n, 29).fixedNumberOfLines,
                t.Nb(n, 29).mayContainLatinCharsForArabic,
                t.Nb(n, 29).shortenWithEllipsisForArabic,
              ),
              e(
                n,
                30,
                0,
                t.Nb(n, 34).combinedDisabled,
                t.Nb(n, 34).useBrighterIcon,
                t.Nb(n, 37).markerClassEnabled,
                t.Nb(n, 38).activated,
                t.Nb(n, 38).layoutHorizontal,
                t.Nb(n, 38).thinBorder,
                t.Nb(n, 38).thickBorder,
              ),
              e(n, 41, 0, t.Nb(n, 42).iconComponentHidden));
          },
        );
      }
      function Ot(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-bt-device-pairing",
              [],
              null,
              null,
              null,
              Tt,
              xt,
            )),
            t.xb(
              1,
              245760,
              null,
              0,
              L,
              [r.a, Se.a, Il.a, Ne.i, mn.a, se.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            e(n, 1, 0);
          },
          null,
        );
      }
      var Dt = t.ub("au3-bt-device-pairing", L, Ot, {}, {}, []),
        St = l("oWpa"),
        Nt = l("yegR"),
        It = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch}.text[_ngcontent-%COMP%]{text-align:center;font-size:40px}",
            ],
          ],
          data: {},
        });
      function yt(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              23,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:CM_MAIN_PAIRING_BT_PAIRING_WAIT"],
              ],
              null,
              null,
              null,
              ln.b,
              ln.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, xe.a, [se.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              17,
              "au3-title-line",
              [
                ["class", "title"],
                ["id", ""],
              ],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              tn.b,
              tn.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              an.a,
              [on.a, un.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryId: [1, "primaryId"],
                primaryIdEnumType: [2, "primaryIdEnumType"],
                secondaryDeveloperText: [3, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              10,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t = !1 !== e.component.routingService.goUp() && t),
                  t
                );
              },
              cn.b,
              cn.a,
            )),
            t.xb(7, 147456, null, 0, be.a, [t.l, t.z], null, null),
            t.xb(
              8,
              147456,
              null,
              0,
              he.a,
              [be.a, [2, ve.a], [2, de.a], se.a],
              null,
              null,
            ),
            t.xb(
              9,
              212992,
              null,
              0,
              ge.a,
              [
                se.a,
                me.b,
                he.a,
                [2, ve.a],
                [2, de.a],
                [2, ce.a],
                [2, xe.a],
                [2, fe.a],
                t.z,
                Te.a,
                t.l,
                [2, Oe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              rn.a,
              [se.a, sn.a, t.l, [2, ge.a], [2, ce.a]],
              null,
              null,
            ),
            t.xb(11, 16384, null, 0, Jn.a, [], null, null),
            t.Sb(131584, null, Pe.a, Pe.a, [[3, Pe.a]]),
            t.xb(
              13,
              4407296,
              null,
              0,
              Ce.a,
              [
                t.l,
                Ee.a,
                t.h,
                Pe.a,
                [2, _e.a],
                [2, ve.b],
                [2, ve.a],
                [2, Ae.a],
                [2, Le.a],
              ],
              null,
              null,
            ),
            t.xb(
              14,
              49152,
              null,
              0,
              bn.a,
              [[2, ce.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              15,
              147456,
              null,
              0,
              Be.a,
              [
                [2, ge.a],
                [2, ce.a],
                [2, je.a],
                [2, Ce.a],
                [2, Re.b],
                t.l,
                Me.a,
                ke.b,
              ],
              null,
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              He.a,
              [[2, Ce.a], [2, ge.a], [2, me.b], Fe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              17,
              0,
              null,
              2,
              3,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              cn.b,
              cn.a,
            )),
            t.xb(18, 16384, null, 0, Jn.a, [], null, null),
            t.xb(
              19,
              147456,
              null,
              0,
              ce.a,
              [re.a, t.h, se.a, [3, ce.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              20,
              49152,
              null,
              0,
              bn.a,
              [[2, ce.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            (e()(),
            t.yb(
              21,
              0,
              null,
              0,
              2,
              "au3-statustext",
              [
                ["class", "text"],
                ["id", ""],
              ],
              null,
              null,
              null,
              St.b,
              St.a,
            )),
            t.xb(
              22,
              212992,
              null,
              0,
              de.a,
              [t.l, t.D, pe.a, se.a, [3, de.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              23,
              49152,
              null,
              0,
              Nt.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "Screen:CM_MAIN_PAIRING_BT_PAIRING_WAIT"),
              e(n, 2, 0, "Screen:CM_MAIN_PAIRING_BT_PAIRING_WAIT"),
              e(n, 4, 0, ""),
              e(
                n,
                5,
                0,
                l.title,
                l.title,
                l.titleTextIds,
                "Ger\xe4t verbinden",
              ),
              e(n, 9, 0),
              e(n, 13, 0),
              e(n, 14, 0, !1, "E163_Backbutton.webp"),
              e(n, 19, 0, !0),
              e(n, 20, 0, !1, "E186_settings.webp"),
              e(n, 22, 0, ""),
              e(
                n,
                23,
                0,
                6,
                "Bitte beachten Sie Verbindungsanfragen auf ihrem Mobiltelefon.\nDie Verbindung wird hergestellt,\nbitte warten...",
              ));
          },
          function (e, n) {
            (e(
              n,
              3,
              0,
              t.Nb(n, 5).hideLeftBorder,
              t.Nb(n, 5).hideDividingBorders,
            ),
              e(
                n,
                6,
                0,
                t.Nb(n, 13).markerClassEnabled,
                t.Nb(n, 14).useItemPlaceholder,
              ),
              e(
                n,
                17,
                0,
                t.Nb(n, 19).combinedDisabled,
                t.Nb(n, 19).useBrighterIcon,
                t.Nb(n, 20).useItemPlaceholder,
              ));
          },
        );
      }
      function Pt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-bt-pairing-wait",
              [],
              null,
              null,
              null,
              yt,
              It,
            )),
            t.xb(1, 49152, null, 0, w, [Se.a], null, null),
          ],
          null,
          null,
        );
      }
      var Ct = t.ub("au3-bt-pairing-wait", w, Pt, {}, {}, []),
        Et = l("aDqW"),
        _t = l("/W5r"),
        At = l("+Qv1"),
        Lt = l("XtoR"),
        wt = l("jTHl"),
        $t = l("zL3T"),
        Mt = l("+epw"),
        kt = l("zMPs"),
        Bt = l("6Yk8"),
        jt = l("u6+O"),
        Rt = l("CIQC"),
        Ht = l("REmV"),
        Ft = l("Y3N+"),
        Wt = l("MJxn"),
        zt = l("eIOF"),
        Ut = l("t+4g"),
        Gt = l("myjn"),
        Yt = l("fOZ7"),
        qt = l("QDrj"),
        Vt = l("DFsf"),
        Kt = l("bx0v"),
        Zt = t.vb(ae, [], function (e) {
          return t.Kb([
            t.Lb(512, t.j, t.X, [
              [8, [oe.a, Fn, Dl, Bl, Yl, ot, vt, Dt, Ct]],
              [3, t.j],
              t.x,
            ]),
            t.Lb(4608, ze.m, ze.l, [t.u]),
            t.Lb(4608, Et.h, Et.g, []),
            t.Lb(4608, Et.d, Et.f, []),
            t.Lb(4608, Et.j, Et.e, []),
            t.Lb(4608, Et.c, Et.b, []),
            t.Lb(4608, Et.k, Et.k, [
              Et.l,
              Et.h,
              Et.d,
              Et.j,
              Et.c,
              Et.m,
              Et.o,
              Et.n,
              Et.a,
            ]),
            t.Lb(4608, _t.b, _t.b, [At.e, [2, _t.a]]),
            t.Lb(4608, Lt.b, Lt.b, [At.e, [2, Lt.a]]),
            t.Lb(4608, wt.b, wt.b, [At.e, [2, wt.a]]),
            t.Lb(4608, $t.b, $t.b, [At.e, [2, $t.a]]),
            t.Lb(4608, te, te, [r.a, Se.a, se.a]),
            t.Lb(1073742336, ze.c, ze.c, []),
            t.Lb(1073742336, Et.i, Et.i, []),
            t.Lb(1073742336, Mt.a, Mt.a, []),
            t.Lb(1073742336, kt.a, kt.a, []),
            t.Lb(1073742336, Bt.a, Bt.a, []),
            t.Lb(1073742336, jt.a, jt.a, []),
            t.Lb(1073742336, Rt.a, Rt.a, []),
            t.Lb(1073742336, Ht.a, Ht.a, []),
            t.Lb(1073742336, Ft.a, Ft.a, []),
            t.Lb(1073742336, Wt.a, Wt.a, []),
            t.Lb(1073742336, zt.a, zt.a, []),
            t.Lb(1073742336, Ut.a, Ut.a, []),
            t.Lb(1073742336, Gt.a, Gt.a, []),
            t.Lb(1073742336, Yt.a, Yt.a, []),
            t.Lb(1073742336, qt.a, qt.a, []),
            t.Lb(1073742336, Il.n, Il.n, [
              [2, Il.s],
              [2, Il.m],
            ]),
            t.Lb(1073742336, Vt.a, Vt.a, []),
            t.Lb(1073742336, Kt.a, Kt.a, []),
            t.Lb(1073742336, ae, ae, []),
            t.Lb(256, Et.o, void 0, []),
            t.Lb(256, Et.m, void 0, []),
            t.Lb(256, Et.n, void 0, []),
            t.Lb(256, Et.a, void 0, []),
            t.Lb(
              1024,
              Il.k,
              function () {
                return [
                  [
                    {
                      path: "",
                      children: [
                        { path: "", component: U },
                        { path: "wlan-hotspot", component: J },
                        { path: "discovered-devices/:context", component: y },
                        { path: "trusted-devices/:context", component: H },
                        { path: "trusted-asi-devices", component: ne },
                        { path: "connect-to-carplay-hint", component: le },
                        {
                          path: "sc-cancel-only",
                          component: L,
                          canActivate: [te],
                        },
                        { path: "pairing-wait", component: w },
                        { path: "connection", loadChildren: ie },
                      ],
                    },
                  ],
                ];
              },
              [],
            ),
          ]);
        });
    },
  },
]);
