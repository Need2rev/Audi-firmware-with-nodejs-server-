(window.webpackJsonp = window.webpackJsonp || []).push([
  [28],
  {
    HeFu: function (e, t, n) {
      "use strict";
      (n.r(t),
        n.d(t, "ConnectionSettingsModuleNgFactory", function () {
          return In;
        }));
      var l = n("kZht"),
        i = n("JS0r"),
        a = n("HM3f"),
        o = n("YtkY"),
        s = n("Ohay"),
        u = n("Zbi+"),
        r = n("Yi6/"),
        c = n("H+9d"),
        b = n("8lto"),
        d = n("YEFf"),
        h = n("MzQn"),
        p = n("z+Ui"),
        g = n("t8AR"),
        m = n("dr0G"),
        v = n("P1io");
      class S {
        constructor(e, t, n, l, a, o, s, u, c, b) {
          ((this.clampsService = e),
            (this.routingService = t),
            (this.privacyService = n),
            (this.wifiSettingsService = l),
            (this.entrypointService = a),
            (this.phoneService = o),
            (this.asiService = s),
            (this.onlineRoutingService = u),
            (this.ConnectionSettingsRoute = i.a),
            (this.PopupIdsAudi = r.Ob),
            (this.settingsAppContext = v.z),
            (this.passwordWillBeSavedToast =
              r.Ob.POPUP_CM_POPUP_SETTINGS_WIFI_SETTING_WILL_BE_SAVED),
            (this.logger = b.getLogger(
              "settings.ConnectionSettingsComponent",
            )));
        }
        ngOnInit() {
          const e = this.phoneService.calls$.pipe(
            Object(o.a)((e) =>
              e.some((e) => e.callState !== u.d.DISCONNECTING),
            ),
            Object(s.a)(),
            Object(r.pd)(this.logger, "ngOnInit: callActive$:"),
          );
          ((this.bluetoothDisabledPopup$ = Object(a.b)(
            e,
            this.asiService.currentActiveDevice$,
            this.clampsService.clampSStateOn$,
          ).pipe(
            Object(o.a)(([e, t, n]) =>
              e || t
                ? r.Ob.POPUP_CM_POPUP_SETTINGS_BLUETOOTH_NOT_FUNCTIONAL
                : n
                  ? void 0
                  : r.Ob.POPUP_CM_POPUP_SETTINGS_BLUETOOTH_SCONTACT_ERROR,
            ),
            Object(s.a)(),
            Object(r.pd)(this.logger, "ngOnInit: bluetoothDisabledPopup$:"),
          )),
            (this.entrypoints$ = this.entrypointService.entryPointsForTag$(
              c.b.CONNECTIVITY,
            )));
        }
      }
      var f = n("bwdy"),
        x = n("C05f"),
        _ = n("g6G6"),
        P = n("8lHc"),
        T = n("J7Kz"),
        O = n("mWib"),
        C = n("J+dc"),
        y = n("8j5Y"),
        I = n("3mST"),
        M = n("H+fK"),
        N = (function (e) {
          return (
            (e.VISIBLE = "visible"),
            (e.INVISIBLE = "invisible"),
            (e.OFF = "off"),
            e
          );
        })({});
      class D {
        constructor(e, t, n, l, a, o, s) {
          ((this.routingService = e),
            (this.bluetoothService = t),
            (this.wifiSettingsService = n),
            (this.phoneService = l),
            (this.clampsService = a),
            (this.popupService = o),
            (this.ConnectionSettingsRoute = i.a),
            (this.bluetoothStateItems = {
              labelIdEnumType: N,
              items: [
                {
                  itemId: 0,
                  labelId: N.VISIBLE,
                  developerText: N.VISIBLE.toString(),
                },
                {
                  itemId: 1,
                  labelId: N.INVISIBLE,
                  developerText: N.INVISIBLE.toString(),
                },
                { itemId: 2, labelId: N.OFF, developerText: N.OFF.toString() },
              ],
            }),
            (this.popupIds = r.Ob),
            (this.visibility = this.bluetoothStateItems.items[2]),
            (this.audioActive = !1),
            (this.name = ""),
            (this.subscriptions = new f.a()),
            (this.debounceTimeMS = 500),
            (this.resetTimeMS = 2 * this.debounceTimeMS),
            (this.visibilityChangePending$$ = new x.a(!1)),
            (this.logger = s.getLogger("settings.BluetoothSettingsComponent")));
        }
        ngOnInit() {
          ((this.bluetoothAvailable$ = this.bluetoothService.classicNodes$.pipe(
            Object(o.a)((e) => e && e.length > 0),
          )),
            (this.asiDeviceActive$ = this.phoneService.asiDeviceActive$));
          const e = this.bluetoothService.classicNodes$.pipe(
            Object(o.a)((e) => {
              const t = e && e.length > 0 ? e[0] : void 0,
                n = t && t.isActive ? (t.isVisible ? 0 : 1) : 2;
              return (
                this.cancelTimer(this.lastVisibilityTimer),
                (this.lastKnownVisibility = this.bluetoothStateItems.items[n]),
                this.lastKnownVisibility
              );
            }),
          );
          this.visibility$ = Object(_.a)(
            e.pipe(Object(O.a)(this.debounceTimeMS)),
            e.pipe(Object(C.a)(1)),
          ).pipe(
            Object(s.a)(),
            Object(y.a)(() => this.visibilityChangePending$$.next(!1)),
          );
          const t = this.bluetoothService.audioPlayerAvailable$.pipe(
            Object(y.a)(() => this.cancelTimer(this.lastAudioStateTimer)),
          );
          this.audioActive$ = Object(_.a)(
            t.pipe(Object(O.a)(this.debounceTimeMS)),
            t.pipe(Object(C.a)(1)),
          );
          const n = this.bluetoothService.classicNodes$.pipe(
            Object(o.a)((e) => {
              const t = e && e.length > 0 ? e[0] : void 0;
              return (
                this.cancelTimer(this.lastNameTimer),
                (this.lastKnownName = t ? t.name : ""),
                this.lastKnownName
              );
            }),
          );
          ((this.name$ = Object(_.a)(
            n.pipe(Object(O.a)(this.debounceTimeMS)),
            n.pipe(Object(C.a)(1)),
          ).pipe(Object(s.a)())),
            this.subscriptions.add(
              this.visibility$.subscribe((e) => {
                this.visibility = e;
              }),
            ),
            this.subscriptions.add(
              this.audioActive$.subscribe((e) => {
                this.audioActive = e;
              }),
            ),
            this.subscriptions.add(
              this.name$.subscribe((e) => {
                this.name = e;
              }),
            ),
            this.subscriptions.add(
              this.phoneService.calls$.subscribe((e) => {
                e.forEach((e) => {
                  e.callState !== u.d.DISCONNECTING &&
                    this.routingService.goTo(i.a);
                });
              }),
            ),
            this.subscriptions.add(
              this.phoneService.asiDeviceActive$.subscribe((e) => {
                e &&
                  (this.logger.info(
                    "ngOnInit: asi device became active, navigating back!",
                  ),
                  this.routingService.isRouteInHistory(
                    M.a.Main.children.ConnectedDevices,
                    v.z,
                  )
                    ? this.routingService.goBack(
                        M.a.Main.children.ConnectedDevices,
                      )
                    : this.routingService.isRouteInHistory(
                          M.a.Main.children.Connection,
                          v.z,
                        )
                      ? this.routingService.goBack(M.a.Main.children.Connection)
                      : this.routingService.goBack(M.a.Main));
              }),
            ),
            this.subscribeToClampS());
        }
        ngOnDestroy() {
          (this.cancelTimer(this.lastVisibilityTimer),
            this.cancelTimer(this.lastAudioStateTimer),
            this.cancelTimer(this.lastNameTimer),
            this.subscriptions.unsubscribe());
        }
        subscribeToClampS() {
          let e;
          this.subscriptions.add(
            this.clampsService.clampSStateOn$
              .pipe(
                Object(s.a)(),
                Object(I.a)(1),
                Object(r.pd)(
                  this.logger,
                  "subscribeToClampS: clamp-s-state changed to:",
                ),
              )
              .subscribe((t) => {
                ((e = t),
                  t
                    ? this.popupService.unrequest(
                        r.Ob.POPUP_CM_POPUP_SETTINGS_BLUETOOTH_SCONTACT_ERROR,
                      )
                    : this.popupService
                        .request(
                          r.Ob.POPUP_CM_POPUP_SETTINGS_BLUETOOTH_SCONTACT_ERROR,
                        )
                        .then((t) => {
                          (this.logger.info(
                            "subscribeToClampS: received result from popup: ",
                            { result: t, clampSactive: e },
                          ),
                            e || this.routingService.goBack());
                        }));
              }),
          );
        }
        bluetoothStateChanged(e) {
          if (e.labelId === N.VISIBLE) this.setBluetoothVisibility(!0, !0);
          else if (e.labelId === N.INVISIBLE)
            this.setBluetoothVisibility(!0, !1);
          else {
            if (e.labelId !== N.OFF)
              return void this.logger.error(
                "Unknown toggle button group state:",
                e,
              );
            this.setBluetoothVisibility(!1);
          }
          (this.cancelTimer(this.lastVisibilityTimer),
            (this.visibility = e),
            (this.lastVisibilityTimer = Object(P.a)(this.resetTimeMS).subscribe(
              () => {
                ((this.visibility = this.lastKnownVisibility),
                  this.visibilityChangePending$$.next(!1),
                  this.logger.info(
                    "No BL confirmation of BT visibility change after " +
                      this.resetTimeMS +
                      "ms. Resetting to last known value: " +
                      this.visibility.developerText,
                  ));
              },
            )));
        }
        setBluetoothVisibility(e, t) {
          (this.visibilityChangePending$$.next(!0),
            this.bluetoothService.setVisibility(e, t));
        }
        toggleAudioPlayerState(e) {
          (this.bluetoothService.setAudioPlayer(e),
            this.cancelTimer(this.lastAudioStateTimer),
            (this.audioActive = e),
            (this.lastAudioStateTimer = Object(P.a)(this.resetTimeMS).subscribe(
              () => {
                ((this.audioActive = this.lastKnownAudioState),
                  this.logger.info(
                    "No BL confirmation of BT audio player state change after " +
                      this.resetTimeMS +
                      "ms. Resetting to last known value: " +
                      this.audioActive,
                  ));
              },
            )));
        }
        bluetoothNameChanged(e) {
          (this.bluetoothService.setName(e),
            this.cancelTimer(this.lastNameTimer),
            (this.name = e),
            (this.lastNameTimer = Object(P.a)(this.resetTimeMS).subscribe(
              () => {
                ((this.name = this.lastKnownName),
                  this.logger.info(
                    "No BL confirmation of BT name change after " +
                      this.resetTimeMS +
                      "ms. Resetting to last known value: " +
                      this.name,
                  ));
              },
            )));
        }
        cancelTimer(e) {
          e && !e.closed && e.unsubscribe();
        }
        bluetoothNameDisabledReason(e, t) {
          return e
            ? t
              ? r.Ob.POPUP_CM_POPUP_SETTINGS_WIFI_SETTING_WILL_BE_SAVED
              : r.Ob.POPUP_CM_SETTINGS_BLUETOOTH_NAME_EDIT_BT_OFF
            : r.Ob.POPUP_CM_POPUP_SETTINGS_BLUETOOTH_SCONTACT_ERROR;
        }
      }
      var w = n("QQZH"),
        L = n("TLy2"),
        E = n("xVbo"),
        A = n("kuMc"),
        $ = n("AEBN");
      class B {
        constructor(e, t, n, l, i) {
          ((this.routingService = e),
            (this.bluetoothService = t),
            (this.textInputService = n),
            (this.phoneService = l),
            (this.popupIds = r.Ob),
            (this.contextId = $.e.TIF_ID_73_WLAN_SSID_APN),
            (this.destroyed$$ = new w.a(1)),
            (this.logger = i.getLogger("settings.BluetoothEditNameComponent")));
        }
        ngOnInit() {
          ((this.inputField$ = this.bluetoothService.classicNodes$.pipe(
            Object(L.a)((e) => {
              const t = e && e.length > 0 ? e[0] : void 0;
              return this.textInputService.getInputField(
                "bluetooth-name",
                this.contextId,
                t ? t.name : "",
              );
            }),
          )),
            this.phoneService.calls$
              .pipe(
                Object(E.a)((e) =>
                  e.some((e) => e.callState !== u.d.DISCONNECTING),
                ),
                Object(A.a)(this.destroyed$$),
              )
              .subscribe(() => this.routingService.goTo(i.a)),
            this.phoneService.asiDeviceActive$
              .pipe(
                Object(E.a)((e) => !!e),
                Object(A.a)(this.destroyed$$),
              )
              .subscribe(() => {
                (this.logger.info(
                  "ngOnInit: asi device became active, navigating back!",
                ),
                  this.routingService.isRouteInHistory(
                    M.a.Main.children.ConnectedDevices,
                    v.z,
                  )
                    ? this.routingService.goBack(
                        M.a.Main.children.ConnectedDevices,
                      )
                    : this.routingService.isRouteInHistory(
                          M.a.Main.children.Connection,
                          v.z,
                        )
                      ? this.routingService.goBack(M.a.Main.children.Connection)
                      : this.routingService.goTo(M.a.Main));
              }));
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
      }
      var W = n("ZTXN");
      class R {
        constructor(e, t, n, l) {
          ((this.routingService = e),
            (this.privacyService = t),
            (this.wifiService = n),
            (this.ConnectionSettingsRoute = i.a),
            (this.changeInProgress$$ = new W.a()),
            (this.privacyEnabled$ = Object(a.b)(
              this.privacyService.privacyModeEnabled$,
              this.privacyService.gpsDataEnabled$,
            ).pipe(Object(o.a)(([e, t]) => !0 === e || !1 === t))),
            (this.passwordWillBeSavedToast =
              r.Ob.POPUP_CM_POPUP_SETTINGS_WIFI_SETTING_WILL_BE_SAVED),
            (this.privacyDisabledReason = {
              popup:
                r.Ob.POPUP_SETUP_DATA_MGT_PRIVACY_STAGED_BLOCKED_FUNCTION_POPUP,
              type: r.A.SHOW_PRIVACY_POPUP,
            }),
            (this.defaultDisabledReason = ""),
            (this.logger = l.getLogger("settings.WifiSettingsComponent")));
        }
        ngOnDestroy() {
          this.changeInProgress$$.complete();
        }
        wifiStateChange(e) {
          const t = this.wifiService.mainAP;
          t
            ? (this.changeInProgress$$.next(!0),
              this.wifiService
                .setWifiEnabled(e, t.id)
                .then(() => this.changeInProgress$$.next(!1))
                .catch((e) => {
                  this.changeInProgress$$.next(!1);
                }))
            : this.logger.error(
                "wifiStateChange: Could not set Wifi mode due to invalid main access point",
              );
        }
        wifiDevicesDisabledReason(e, t) {
          return e
            ? this.privacyDisabledReason
            : t
              ? this.passwordWillBeSavedToast
              : this.defaultDisabledReason;
        }
      }
      var k = n("sQI3");
      class F {
        constructor(e, t, n, l) {
          ((this.routingService = e),
            (this.asiService = t),
            (this.wifiService = n),
            (this.ConnectionSettingsRoute = i.a),
            (this.passwordWillBeSavedToast =
              r.Ob.POPUP_CM_POPUP_SETTINGS_WIFI_SETTING_WILL_BE_SAVED),
            (this.destroyed$$ = new w.a(1)),
            (this.encryptionStateItems = {
              labelIdEnumType: k.a,
              items: [
                {
                  itemId: 0,
                  labelId: k.a.WPA2,
                  developerText: k.a.WPA2.toString(),
                },
                {
                  itemId: 1,
                  labelId: k.a.WAPI,
                  developerText: k.a.WAPI.toString(),
                },
              ],
            }),
            (this.encryption = this.encryptionStateItems.items[1]),
            (this.logger = l.getLogger(
              "settings.WifiChangePasswordComponent",
            )));
        }
        ngOnInit() {
          ((this.visible$ = this.wifiService.mainAP$.pipe(
            Object(o.a)((e) => !!e && !!e.isEnabled && !!e.isVisible),
            Object(s.a)(),
          )),
            (this.ssid$ = this.wifiService.mainAP$.pipe(
              Object(o.a)((e) => (e ? e.name : "")),
              Object(s.a)(),
            )),
            (this.password$ = this.wifiService.mainAP$.pipe(
              Object(o.a)((e) => (e && e.password) || ""),
              Object(s.a)(),
            )),
            this.wifiService.mainAP$
              .pipe(
                Object(o.a)((e) => (e ? e.encryptionType : k.a.NONE)),
                Object(s.a)(),
                Object(A.a)(this.destroyed$$),
              )
              .subscribe((e) => {
                this.encryption =
                  e === k.a.WPA2
                    ? this.encryptionStateItems.items[0]
                    : this.encryptionStateItems.items[1];
              }));
        }
        visibleChange(e) {
          const t = this.wifiService.mainAP;
          t
            ? this.wifiService.setWifiVisibility(e, t.id)
            : this.logger.error(
                "visibleChange: Could not set Wifi mode due to invalid main access point",
              );
        }
        encryptionStateChanged(e) {
          const t = this.wifiService.mainAP;
          t
            ? e.labelId === k.a.WPA2
              ? this.wifiService
                  .setEncryptionType(k.a.WPA2, t.id)
                  .catch(
                    (t) => (
                      this.logger.error(
                        "could not set encryptiontype to " +
                          e.labelId +
                          " error:",
                        t,
                      ),
                      Promise.reject(t)
                    ),
                  )
              : e.labelId === k.a.WAPI
                ? this.wifiService
                    .setEncryptionType(k.a.WAPI, t.id)
                    .catch(
                      (t) => (
                        this.logger.error(
                          "could not set encryptiontype to " +
                            e.labelId +
                            " error:",
                          t,
                        ),
                        Promise.reject(t)
                      ),
                    )
                : this.logger.error("Unknown toggle button group state:", e)
            : this.logger.error(
                "encrytionStateChanged: Could not set encryptionState due to invalid main access point",
              );
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
      }
      class U {
        constructor(e, t, n) {
          ((this.wifiService = e),
            (this.textInputService = t),
            (this.contextId = $.e.TIF_ID_73_WLAN_SSID_APN),
            (this.ConnectionSettingsRoute = i.a),
            (this.popupIds = r.Ob),
            (this.logger = n.getLogger("settings.WifiChangeSsidComponent")));
        }
        ngOnInit() {
          this.inputField$ = this.wifiService.mainAP$.pipe(
            Object(L.a)((e) =>
              this.textInputService.getInputField(
                "wifi-ssid",
                this.contextId,
                e ? e.name : "",
              ),
            ),
          );
        }
        ok(e) {
          const t = this.wifiService.mainAP;
          t && e
            ? this.wifiService.setWifiSSID(e, t.id)
            : this.logger.error(
                "ok: Could not set Wifi password due to invalid main access point or invalid text",
              );
        }
      }
      class z {
        constructor(e, t, n) {
          ((this.wifiService = e),
            (this.textInputService = t),
            (this.popupIds = r.Ob),
            (this.contextId = $.e.TIF_ID_77_WLAN_SSID),
            (this.ConnectionSettingsRoute = i.a),
            (this.logger = n.getLogger(
              "settings.WifiChangePasswordComponent",
            )));
        }
        ngOnInit() {
          this.inputField$ = this.wifiService.mainAP$.pipe(
            Object(L.a)((e) =>
              this.textInputService.getInputField(
                "wifi-password",
                this.contextId,
                e ? e.password : "",
              ),
            ),
          );
        }
        ok(e) {
          const t = this.wifiService.mainAP;
          t && e
            ? this.wifiService.setWifiPassword(e, t.id)
            : this.logger.error(
                "ok: Could not set Wifi password due to invalid main access point or invalid text",
              );
        }
      }
      var j = n("JCQ5"),
        G = n("ROBh"),
        H = n("TOCt"),
        V = n("q5gU"),
        Y = (function (e) {
          return (
            (e.CarPhoneProfile = "Autotelefon"),
            (e.HandsFreeProfile = "Freisprechen"),
            (e.MessagesProfile = "Mitteilungen"),
            (e.SimContactsProfile = "Kontakte (f\xfcr SIM-Karte)"),
            (e.AudioplayerProfile = "Audioplayer"),
            (e.CalendarProfile = "Kalender"),
            e
          );
        })({});
      class K {
        constructor(e, t, n, l, i, s) {
          ((this.routingService = e),
            (this.bluetoothService = t),
            (this.btDevicePairingService = n),
            (this.phoneService = l),
            (this.profileNameTextEnum = Y),
            (this.carPhoneProfile = {
              id: "CarPhoneProfile",
              icon: "E1A3_phone_car_rsap.webp",
              text: Y.CarPhoneProfile,
              enabled: !1,
              visible: !1,
              service: void 0,
            }),
            (this.handsFreeProfile = {
              id: "HandsFreeProfile",
              icon: "E1A2_phone_handsfree_hfp.webp",
              text: Y.HandsFreeProfile,
              enabled: !1,
              visible: !1,
              service: j.b.TELEPHONYHFP,
            }),
            (this.messagesProfile = {
              id: "MessagesProfile",
              icon: "E27A_media_messaging_settings.webp",
              text: Y.MessagesProfile,
              enabled: !1,
              visible: !1,
              service: void 0,
            }),
            (this.contactsProfile = {
              id: "SimContactsProfile",
              icon: "E05A_phone_adressbuch.webp",
              text: Y.SimContactsProfile,
              enabled: !1,
              visible: !1,
              service: j.b.ADDRESSBOOK,
            }),
            (this.audioPlayerProfile = {
              id: "AudioplayerProfile",
              icon: "E07E_ami_mediaplayer.webp",
              text: Y.AudioplayerProfile,
              enabled: !1,
              visible: !1,
              service: j.b.A2DPAVRCPSOURCE,
            }),
            (this.calendarProfile = {
              id: "CalendarProfile",
              icon: "EAB5_connect_calendar.webp",
              text: Y.CalendarProfile,
              enabled: !1,
              visible: !1,
              service: void 0,
            }),
            (this.profiles = [
              this.carPhoneProfile,
              this.handsFreeProfile,
              this.messagesProfile,
              this.contactsProfile,
              this.audioPlayerProfile,
              this.calendarProfile,
            ]),
            (this.temporaryDisabledServices$$ = new x.a([])),
            (this.temporaryDisabledServices$ =
              this.temporaryDisabledServices$$.asObservable()),
            (this.destroyed$$ = new w.a(1)),
            (this.logger = s.getLogger("settings.BluetoothProfilesComponent")),
            (this.context = i.snapshot.params.context),
            (this.refDeviceId = i.snapshot.params.id),
            this.refDeviceId
              ? (this.device$ = this.bluetoothService.devices$.pipe(
                  Object(o.a)((e) => e.find((e) => e.id === this.refDeviceId)),
                  Object(y.a)((e) => {
                    e ||
                      this.logger.error(
                        `device$: Unable to match device id ${this.refDeviceId} to a bluetooth device! This should not happen.`,
                      );
                  }),
                  Object(r.pd)(this.logger, "device$"),
                  Object(A.a)(this.destroyed$$),
                  Object(r.Kd)(),
                ))
              : (this.logger.error(
                  "device$: unable to determine ref bluetooth device. Activated route did not contain an id: ",
                  i.snapshot.params,
                ),
                (this.device$ = Object(G.a)(void 0))),
            (this.profiles$ = Object(a.b)(
              this.device$,
              this.bluetoothService.devices$,
            ).pipe(
              Object(o.a)(([e, t]) => {
                const n = t.filter(
                  (e) =>
                    !!e.connectedServices &&
                    e.connectedServices.includes(j.b.TELEPHONYHFP),
                );
                return (
                  this.profiles
                    .filter((e) => e !== this.contactsProfile)
                    .forEach((l) => {
                      ((l.enabled =
                        !!l.service &&
                        !!e &&
                        !!e.connectedServices &&
                        e.connectedServices.includes(l.service)),
                        (l.visible =
                          !!l.service &&
                          !!e &&
                          !!e.offeredServices &&
                          e.offeredServices.includes(l.service)),
                        l.service === j.b.TELEPHONYHFP &&
                          n.length >=
                            (this.phoneService.twoPhonesSupported ? 2 : 1) &&
                          e &&
                          !n.some((t) => t.id === e.id) &&
                          (this.logger.info(
                            "constructor: profiles$, max number of hfp reached!",
                            { btDevice: e, allDevices: t, profile: l },
                          ),
                          (l.enabled = !1)));
                    }),
                  this.profiles
                );
              }),
            )),
            this.device$
              .pipe(
                Object(E.a)((e) => !e || e.connectionState !== j.a.CONNECTED),
                Object(A.a)(this.destroyed$$),
              )
              .subscribe((e) => {
                (this.logger.info(
                  "constructor: device is not connected, go back:",
                  e,
                ),
                  this.routingService.goBack());
              }));
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        setServiceEnabled(e, t) {
          if (!this.temporaryDisabledServices$$.getValue().includes(e))
            return (
              this.setTemporaryDisabled(e, !0),
              this.refDeviceId
                ? void (
                    t
                      ? this.btDevicePairingService.connectService(
                          this.refDeviceId,
                          e,
                        )
                      : this.btDevicePairingService.disconnectService(
                          this.refDeviceId,
                          e,
                        )
                  )
                    .pipe(Object(A.a)(this.destroyed$$))
                    .subscribe((n) => {
                      if (n.state === H.b.Failed)
                        this.logger.warn(
                          `setServiceEnabled: failed to ${t ? "" : "dis"}connect service ${e} for device ${this.refDeviceId}`,
                          n,
                        );
                      else if (
                        t &&
                        n.state === H.b.RequiresPairing &&
                        n.pairing
                      )
                        switch (n.pairing.passKeyMode) {
                          case j.e.SECURESIMPLEPAIRINGSHOWANDCONFIRM:
                            this.logger.debug(
                              "setServiceEnabled: Navigate to BTDevicePairing",
                            );
                            const e = {};
                            ((e.id = n.pairing.id),
                              (e.context = this.context),
                              this.routingService.goTo(
                                V.a.children.SSPCompareCancelOnly,
                                e,
                              ));
                            break;
                          default:
                            this.logger.warn(
                              "setServiceEnabled: Encountered unknown RsiPassKeyState for pairing:",
                              n.pairing,
                            );
                        }
                      n.state !== H.b.AlreadyBonding &&
                      n.state !== H.b.InProgress
                        ? this.setTemporaryDisabled(e, !1)
                        : this.logger.info(
                            "setServiceEnabled: an action was already in progress",
                            n,
                          );
                    })
                : (this.logger.error(
                    "setServiceEnabled: Could not set service enabled due to invalid BT device",
                  ),
                  void this.setTemporaryDisabled(e, !1))
            );
          this.logger.info(
            "setServiceEnabled: received click on disabled element",
          );
        }
        setTemporaryDisabled(e, t) {
          (this.temporaryDisabledServices$$.next(
            t
              ? [...this.temporaryDisabledServices$$.getValue(), e]
              : this.temporaryDisabledServices$$
                  .getValue()
                  .filter((t) => t !== e),
          ),
            this.logger.info(
              "setTemporaryDisabled: disabled elements:",
              this.temporaryDisabledServices$$.getValue(),
            ));
        }
      }
      class Z extends r.cc {
        constructor(e, t) {
          (super(t.getLogger("settings.WifiSettingsGuard"), 5e3),
            (this.wifiSettingsService = e));
        }
        checkActivation(e, t) {
          return this.wifiSettingsService.initialized$.pipe(
            Object(y.a)((e) =>
              this.logger.info("canActivate: wifi settings initialized: " + e),
            ),
            Object(L.a)((e) =>
              e
                ? this.wifiSettingsService.wifiAPs$.pipe(
                    Object(o.a)(
                      (e) => (
                        this.logger.info(
                          `canActivate: received ${(!!e && e.length) || "undefined"} wifi accesspoints.`,
                        ),
                        !!e && e.length > 0 && !!e[0]
                      ),
                    ),
                  )
                : Object(G.a)(!1),
            ),
            Object(C.a)(1),
          );
        }
      }
      var Q = n("Wm/T");
      const J = () =>
        Promise.all([
          n.e(1),
          n.e(2),
          n.e(3),
          n.e(4),
          n.e(8),
          n.e(7),
          n.e(10),
          n.e(14),
          n.e(26),
          n.e(56),
          n.e(94),
        ])
          .then(n.bind(null, "g+oZ"))
          .then((e) => e.WebappsModuleNgFactory);
      class X {}
      var q = n("C9Ky"),
        ee = n("4XZL"),
        te = n("fu7d"),
        ne = n("bou3"),
        le = n("yNay"),
        ie = n("ijxY"),
        ae = n("bMuc"),
        oe = n("ZIdM"),
        se = n("3bpu"),
        ue = n("OtM5"),
        re = n("9ZFG"),
        ce = n("6zvu"),
        be = n("VcEz"),
        de = n("y9xZ"),
        he = n("+sw+"),
        pe = n("BMrr"),
        ge = n("IEns"),
        me = n("z6QT"),
        ve = n("flsk"),
        Se = n("FQEI"),
        fe = n("O82V"),
        xe = n("Eln4"),
        _e = n("evAh"),
        Pe = n("URLa"),
        Te = n("CpzC"),
        Oe = n("0Bsn"),
        Ce = n("5GjX"),
        ye = n("mYyF"),
        Ie = n("v98a"),
        Me = n("aOG8"),
        Ne = n("Krzs"),
        De = n("6480"),
        we = n("FfND"),
        Le = n("oeT7"),
        Ee = n("t7cT"),
        Ae = n("An66"),
        $e = n("Z2XD"),
        Be = n("VUTu"),
        We = n("nK9R"),
        Re = n("qzuC"),
        ke = n("8yWk"),
        Fe = n("8WOv"),
        Ue = n("1pak"),
        ze = n("P+G5"),
        je = n("zPMi"),
        Ge = n("ihOk"),
        He = n("ZMtB"),
        Ve = n("fzcM"),
        Ye = n("N2Hj"),
        Ke = n("UbWD"),
        Ze = n("2rvh"),
        Qe = n("odRV"),
        Je = n("Udyh"),
        Xe = n("I3ve"),
        qe = n("qiAR"),
        et = n("007S"),
        tt = n("oxWk"),
        nt = n("Tr//"),
        lt = n("0qMr"),
        it = l.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.screen[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;align-items:center}.title[_ngcontent-%COMP%]{width:100%}.settings-list[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;flex:1 1 0}.list-item[_ngcontent-%COMP%]{font-size:40px;padding-top:30px;padding-bottom:30px;position:relative;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}",
            ],
          ],
          data: {},
        });
      function at(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-list-route-item",
              [
                ["class", "list-item"],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (e, t, n) {
                var l = !0,
                  i = e.component;
                return (
                  "mib3Tap" === t &&
                    (l =
                      !1 !==
                        i.onlineRoutingService.goToIncludeStateWebApp(
                          i.settingsAppContext,
                          null == e.context.$implicit
                            ? null
                            : e.context.$implicit.id,
                        ) && l),
                  l
                );
              },
              ee.b,
              ee.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 16384, null, 0, ie.a, [], null, null),
            l.xb(3, 147456, null, 0, ae.a, [l.l, l.z], null, null),
            l.xb(
              4,
              147456,
              null,
              0,
              oe.a,
              [ae.a, [2, se.a], [2, te.a], le.a],
              null,
              null,
            ),
            l.xb(
              5,
              147456,
              null,
              0,
              ue.a,
              [re.a, l.h, le.a, [3, ue.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            l.xb(
              6,
              212992,
              null,
              0,
              ce.a,
              [
                le.a,
                be.b,
                oe.a,
                [2, se.a],
                [2, te.a],
                [2, ue.a],
                [2, de.a],
                [2, he.a],
                l.z,
                pe.a,
                l.l,
                [2, ge.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, me.a, me.a, [[3, me.a]]),
            l.xb(
              8,
              4407296,
              null,
              0,
              ve.a,
              [
                l.l,
                Se.a,
                l.h,
                me.a,
                [2, fe.a],
                [2, se.b],
                [2, se.a],
                [2, xe.a],
                [2, _e.a],
              ],
              null,
              null,
            ),
            l.xb(
              9,
              114688,
              null,
              0,
              Pe.a,
              [],
              { icon: [0, "icon"], titleNonI18nText: [1, "titleNonI18nText"] },
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              Te.a,
              [
                [2, ce.a],
                [2, ue.a],
                [2, Oe.a],
                [2, ve.a],
                [2, Ce.b],
                l.l,
                ye.a,
                Ie.b,
              ],
              null,
              null,
            ),
            l.xb(
              11,
              147456,
              null,
              0,
              Me.a,
              [[2, ve.a], [2, ce.a], [2, be.b], Ne.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            (e(
              t,
              1,
              0,
              null == t.context.$implicit ? null : t.context.$implicit.id,
            ),
              e(
                t,
                5,
                0,
                !(
                  null == t.context.$implicit ||
                  !t.context.$implicit.disableReason
                ),
                null == t.context.$implicit
                  ? null
                  : t.context.$implicit.disableReason,
              ),
              e(t, 6, 0),
              e(t, 8, 0),
              e(
                t,
                9,
                0,
                null == t.context.$implicit
                  ? null
                  : t.context.$implicit.smallIcon,
                null == t.context.$implicit ? null : t.context.$implicit.title,
              ));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              l.Nb(t, 5).combinedDisabled,
              l.Nb(t, 5).useBrighterIcon,
              l.Nb(t, 8).markerClassEnabled,
            );
          },
        );
      }
      function ot(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-list-route-item",
              [
                ["class", "list-item"],
                ["id", "Bluetooth"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              ee.b,
              ee.a,
            )),
            l.xb(
              1,
              147456,
              null,
              0,
              ue.a,
              [re.a, l.h, le.a, [3, ue.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            l.xb(2, 147456, null, 0, ae.a, [l.l, l.z], null, null),
            l.xb(
              3,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              4,
              147456,
              null,
              0,
              oe.a,
              [ae.a, [2, se.a], [2, te.a], le.a],
              null,
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              ce.a,
              [
                le.a,
                be.b,
                oe.a,
                [2, se.a],
                [2, te.a],
                [2, ue.a],
                [2, de.a],
                [2, he.a],
                l.z,
                pe.a,
                l.l,
                [2, ge.a],
              ],
              null,
              null,
            ),
            l.xb(
              6,
              671744,
              null,
              0,
              De.a,
              [we.a, Le.i, ue.a, ce.a, De.b, Ee.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            l.Sb(131584, null, me.a, me.a, [[3, me.a]]),
            l.xb(
              8,
              4407296,
              null,
              0,
              ve.a,
              [
                l.l,
                Se.a,
                l.h,
                me.a,
                [2, fe.a],
                [2, se.b],
                [2, se.a],
                [2, xe.a],
                [2, _e.a],
              ],
              null,
              null,
            ),
            l.xb(
              9,
              114688,
              null,
              0,
              Pe.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
              },
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              Te.a,
              [
                [2, ce.a],
                [2, ue.a],
                [2, Oe.a],
                [2, ve.a],
                [2, Ce.b],
                l.l,
                ye.a,
                Ie.b,
              ],
              null,
              null,
            ),
            l.xb(
              11,
              147456,
              null,
              0,
              Me.a,
              [[2, ve.a], [2, ce.a], [2, be.b], Ne.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, void 0 !== t.context.mib3Let, t.context.mib3Let),
              e(t, 3, 0, "Bluetooth"),
              e(t, 5, 0),
              e(t, 6, 0, n.ConnectionSettingsRoute.children.Bluetooth),
              e(t, 8, 0),
              e(t, 9, 0, "E07A_media_bluetooth.webp", "Bluetooth"));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              l.Nb(t, 1).combinedDisabled,
              l.Nb(t, 1).useBrighterIcon,
              l.Nb(t, 8).markerClassEnabled,
            );
          },
        );
      }
      function st(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-list-route-item",
              [
                ["class", "list-item"],
                ["id", "WiFi"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              ee.b,
              ee.a,
            )),
            l.xb(
              1,
              147456,
              null,
              0,
              ue.a,
              [re.a, l.h, le.a, [3, ue.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            l.Pb(131072, Ae.b, [l.h]),
            l.xb(3, 147456, null, 0, ae.a, [l.l, l.z], null, null),
            l.xb(
              4,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              5,
              147456,
              null,
              0,
              oe.a,
              [ae.a, [2, se.a], [2, te.a], le.a],
              null,
              null,
            ),
            l.xb(
              6,
              212992,
              null,
              0,
              ce.a,
              [
                le.a,
                be.b,
                oe.a,
                [2, se.a],
                [2, te.a],
                [2, ue.a],
                [2, de.a],
                [2, he.a],
                l.z,
                pe.a,
                l.l,
                [2, ge.a],
              ],
              null,
              null,
            ),
            l.xb(
              7,
              671744,
              null,
              0,
              De.a,
              [we.a, Le.i, ue.a, ce.a, De.b, Ee.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            l.Sb(131584, null, me.a, me.a, [[3, me.a]]),
            l.xb(
              9,
              4407296,
              null,
              0,
              ve.a,
              [
                l.l,
                Se.a,
                l.h,
                me.a,
                [2, fe.a],
                [2, se.b],
                [2, se.a],
                [2, xe.a],
                [2, _e.a],
              ],
              null,
              null,
            ),
            l.xb(
              10,
              114688,
              null,
              0,
              Pe.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
              },
              null,
            ),
            l.xb(
              11,
              147456,
              null,
              0,
              Te.a,
              [
                [2, ce.a],
                [2, ue.a],
                [2, Oe.a],
                [2, ve.a],
                [2, Ce.b],
                l.l,
                ye.a,
                Ie.b,
              ],
              null,
              null,
            ),
            l.xb(
              12,
              147456,
              null,
              0,
              Me.a,
              [[2, ve.a], [2, ce.a], [2, be.b], Ne.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(
              t,
              1,
              0,
              !l.Yb(
                t,
                1,
                0,
                l.Nb(t, 2).transform(n.clampsService.clampSStateOn$),
              ) || t.parent.context.mib3Let,
              t.parent.context.mib3Let
                ? n.passwordWillBeSavedToast
                : n.PopupIdsAudi.POPUP_CM_POPUP_SETTINGS_WiFi_SCONTACT_ERROR,
            ),
              e(t, 4, 0, "WiFi"),
              e(t, 6, 0),
              e(t, 7, 0, n.ConnectionSettingsRoute.children.Wifi),
              e(t, 9, 0),
              e(t, 10, 0, "E079_audio_wlan.webp", "Wi-Fi"));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              l.Nb(t, 1).combinedDisabled,
              l.Nb(t, 1).useBrighterIcon,
              l.Nb(t, 9).markerClassEnabled,
            );
          },
        );
      }
      function ut(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
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
            (e()(), l.hb(16777216, [[1, 2]], null, 2, null, st)),
            l.xb(
              2,
              16384,
              null,
              0,
              Ae.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            l.Pb(131072, Ae.b, [l.h]),
            (e()(), l.hb(0, null, null, 0)),
          ],
          function (e, t) {
            var n,
              i = t.component;
            e(
              t,
              2,
              0,
              null ==
                (n = l.Yb(
                  t,
                  2,
                  0,
                  l.Nb(t, 3).transform(i.wifiSettingsService.wifiState$),
                ))
                ? null
                : n.available,
            );
          },
          null,
        );
      }
      function rt(e) {
        return l.ac(
          2,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              33,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:CM_SETTINGS"],
              ],
              null,
              null,
              null,
              $e.b,
              $e.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 4440064, null, 0, de.a, [le.a], { id: [0, "id"] }, null),
            (e()(),
            l.yb(
              3,
              0,
              null,
              0,
              14,
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
              Be.b,
              Be.a,
            )),
            l.xb(
              4,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              5,
              49152,
              null,
              0,
              We.a,
              [Re.a, ke.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            l.yb(
              6,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", ""],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, t, n) {
                var l = !0;
                return (
                  "mib3Tap" === t &&
                    (l = !1 !== e.component.routingService.goBack() && l),
                  l
                );
              },
              Fe.b,
              Fe.a,
            )),
            l.xb(7, 147456, null, 0, ae.a, [l.l, l.z], null, null),
            l.xb(
              8,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              oe.a,
              [ae.a, [2, se.a], [2, te.a], le.a],
              null,
              null,
            ),
            l.xb(
              10,
              212992,
              null,
              0,
              ce.a,
              [
                le.a,
                be.b,
                oe.a,
                [2, se.a],
                [2, te.a],
                [2, ue.a],
                [2, de.a],
                [2, he.a],
                l.z,
                pe.a,
                l.l,
                [2, ge.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.xb(
              11,
              147456,
              null,
              0,
              Ue.a,
              [le.a, ze.a, l.l, [2, ce.a], [2, ue.a]],
              null,
              null,
            ),
            l.xb(12, 16384, null, 0, ie.a, [], null, null),
            l.Sb(131584, null, me.a, me.a, [[3, me.a]]),
            l.xb(
              14,
              4407296,
              null,
              0,
              ve.a,
              [
                l.l,
                Se.a,
                l.h,
                me.a,
                [2, fe.a],
                [2, se.b],
                [2, se.a],
                [2, xe.a],
                [2, _e.a],
              ],
              null,
              null,
            ),
            l.xb(
              15,
              49152,
              null,
              0,
              je.a,
              [[2, ue.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            l.xb(
              16,
              147456,
              null,
              0,
              Te.a,
              [
                [2, ce.a],
                [2, ue.a],
                [2, Oe.a],
                [2, ve.a],
                [2, Ce.b],
                l.l,
                ye.a,
                Ie.b,
              ],
              null,
              null,
            ),
            l.xb(
              17,
              147456,
              null,
              0,
              Me.a,
              [[2, ve.a], [2, ce.a], [2, be.b], Ne.a],
              null,
              null,
            ),
            (e()(),
            l.yb(
              18,
              0,
              null,
              0,
              15,
              "au3-disclaimer",
              [],
              null,
              null,
              null,
              Ge.b,
              Ge.a,
            )),
            l.xb(
              19,
              4440064,
              null,
              0,
              He.a,
              [Ve.a, [2, te.a], l.h, le.a],
              null,
              null,
            ),
            (e()(),
            l.yb(
              20,
              0,
              null,
              0,
              13,
              "au3-list",
              [
                ["class", "settings-list"],
                ["id", ""],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Ye.b,
              Ye.a,
            )),
            l.Sb(6144, null, Ke.a, null, [Ze.a]),
            l.xb(
              22,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(23, 16384, null, 0, Qe.a, [l.l], null, null),
            l.xb(
              24,
              12828672,
              null,
              1,
              Ze.a,
              [
                [2, Je.a],
                [2, Xe.a],
                [8, null],
                [2, te.a],
                [2, qe.a],
                [2, et.a],
                [2, be.b],
                Le.i,
                l.z,
                l.h,
                le.a,
                tt.a,
                nt.a,
                [2, Se.a],
                se.a,
                [2, Le.a],
              ],
              { defaultTemplate: [0, "defaultTemplate"], items: [1, "items"] },
              null,
            ),
            l.Tb(603979776, 1, { template: 0 }),
            l.Pb(131072, Ae.b, [l.h]),
            (e()(),
            l.hb(
              0,
              [
                [1, 2],
                ["defaultTemplate", 2],
              ],
              0,
              0,
              null,
              at,
            )),
            (e()(), l.hb(16777216, [[1, 2]], 0, 2, null, ot)),
            l.xb(
              29,
              16384,
              null,
              0,
              lt.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, Ae.b, [l.h]),
            (e()(), l.hb(16777216, [[1, 2]], 0, 2, null, ut)),
            l.xb(
              32,
              16384,
              null,
              0,
              lt.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, Ae.b, [l.h]),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, "Screen:CM_SETTINGS"),
              e(t, 2, 0, "Screen:CM_SETTINGS"),
              e(t, 4, 0, ""),
              e(t, 5, 0, "Settings", "Conn. settings"),
              e(t, 8, 0, ""),
              e(t, 10, 0),
              e(t, 14, 0),
              e(t, 15, 0, !1, "E163_Backbutton.webp"),
              e(t, 19, 0),
              e(t, 22, 0, ""),
              e(
                t,
                24,
                0,
                l.Nb(t, 27),
                l.Yb(t, 24, 1, l.Nb(t, 26).transform(n.entrypoints$)),
              ),
              e(
                t,
                29,
                0,
                l.Yb(
                  t,
                  29,
                  0,
                  l.Nb(t, 30).transform(n.bluetoothDisabledPopup$),
                ),
              ),
              e(
                t,
                32,
                0,
                l.Yb(
                  t,
                  32,
                  0,
                  l
                    .Nb(t, 33)
                    .transform(n.wifiSettingsService.wifiChangePending$$),
                ),
              ));
          },
          function (e, t) {
            (e(
              t,
              3,
              0,
              l.Nb(t, 5).hideLeftBorder,
              l.Nb(t, 5).hideDividingBorders,
            ),
              e(
                t,
                6,
                0,
                l.Nb(t, 14).markerClassEnabled,
                l.Nb(t, 15).useItemPlaceholder,
              ),
              e(t, 20, 0, l.Nb(t, 24).showLineNumbers));
          },
        );
      }
      function ct(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-connection-settings",
              [],
              null,
              null,
              null,
              rt,
              it,
            )),
            l.xb(
              1,
              114688,
              null,
              0,
              S,
              [h.a, we.a, m.a, p.a, c.a, d.c, g.a, b.a, ne.a, le.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            e(t, 1, 0);
          },
          null,
        );
      }
      var bt = l.ub("au3-connection-settings", S, ct, {}, {}, []),
        dt = n("yVoU"),
        ht = n("Fn96"),
        pt = n("ixDV"),
        gt = n("cdBV"),
        mt = n("QSdq"),
        vt = n("D0GA"),
        St = n("sg2e"),
        ft = l.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;flex-direction:column;font-size:40px}.settings-list__item[_ngcontent-%COMP%]{height:100px;padding:0 20px}.settings-list__toggle-item[_ngcontent-%COMP%]{height:207px;padding:0 20px}.component-layout-latin[_nghost-%COMP%]   .settings-list__item[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .settings-list__item[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .settings-list__toggle-item[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .settings-list__toggle-item[_ngcontent-%COMP%]{text-align:left}.component-layout-arabic[_nghost-%COMP%]   .settings-list__item[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .settings-list__item[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .settings-list__toggle-item[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .settings-list__toggle-item[_ngcontent-%COMP%]{text-align:right}[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}",
            ],
          ],
          data: {},
        });
      function xt(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-list-form-field-item",
              [
                ["developerText", "Bluetooth name"],
                ["id", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              dt.b,
              dt.a,
            )),
            l.xb(
              1,
              147456,
              null,
              0,
              ue.a,
              [re.a, l.h, le.a, [3, ue.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            l.xb(2, 147456, null, 0, ae.a, [l.l, l.z], null, null),
            l.xb(
              3,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              4,
              147456,
              null,
              0,
              oe.a,
              [ae.a, [2, se.a], [2, te.a], le.a],
              null,
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              ce.a,
              [
                le.a,
                be.b,
                oe.a,
                [2, se.a],
                [2, te.a],
                [2, ue.a],
                [2, de.a],
                [2, he.a],
                l.z,
                pe.a,
                l.l,
                [2, ge.a],
              ],
              null,
              null,
            ),
            l.xb(
              6,
              671744,
              null,
              0,
              De.a,
              [we.a, Le.i, ue.a, ce.a, De.b, Ee.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            l.Sb(131584, null, me.a, me.a, [[3, me.a]]),
            l.xb(
              8,
              4407296,
              null,
              0,
              ve.a,
              [
                l.l,
                Se.a,
                l.h,
                me.a,
                [2, fe.a],
                [2, se.b],
                [2, se.a],
                [2, xe.a],
                [2, _e.a],
              ],
              null,
              null,
            ),
            l.xb(
              9,
              49152,
              null,
              0,
              ht.a,
              [],
              { developerText: [0, "developerText"], content: [1, "content"] },
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              Te.a,
              [
                [2, ce.a],
                [2, ue.a],
                [2, Oe.a],
                [2, ve.a],
                [2, Ce.b],
                l.l,
                ye.a,
                Ie.b,
              ],
              null,
              null,
            ),
            l.xb(
              11,
              147456,
              null,
              0,
              Me.a,
              [[2, ve.a], [2, ce.a], [2, be.b], Ne.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(
              t,
              1,
              0,
              2 === (null == n.visibility ? null : n.visibility.itemId) ||
                (null == t.parent.context.mib3Let
                  ? null
                  : t.parent.context.mib3Let.asiDeviceActive) ||
                !(
                  null != t.parent.context.mib3Let &&
                  t.parent.context.mib3Let.clampSOn
                ) ||
                t.context.mib3Let,
              n.bluetoothNameDisabledReason(
                null == t.parent.context.mib3Let
                  ? null
                  : t.parent.context.mib3Let.clampSOn,
                t.context.mib3Let,
              ),
            ),
              e(t, 3, 0, ""),
              e(t, 5, 0),
              e(
                t,
                6,
                0,
                n.ConnectionSettingsRoute.children.Bluetooth.children
                  .BluetoothEditName,
              ),
              e(t, 8, 0),
              e(t, 9, 0, "Bluetooth name", n.name));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              l.Nb(t, 1).combinedDisabled,
              l.Nb(t, 1).useBrighterIcon,
              l.Nb(t, 8).markerClassEnabled,
            );
          },
        );
      }
      function _t(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              18,
              "au3-list",
              [
                ["class", "settings-list"],
                ["id", ""],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Ye.b,
              Ye.a,
            )),
            l.Sb(6144, null, Ke.a, null, [Ze.a]),
            l.xb(
              2,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(3, 16384, null, 0, Qe.a, [l.l], null, null),
            l.xb(
              4,
              12828672,
              null,
              1,
              Ze.a,
              [
                [2, Je.a],
                [2, Xe.a],
                [8, null],
                [2, te.a],
                [2, qe.a],
                [2, et.a],
                [2, be.b],
                Le.i,
                l.z,
                l.h,
                le.a,
                tt.a,
                nt.a,
                [2, Se.a],
                se.a,
                [2, Le.a],
              ],
              null,
              null,
            ),
            l.Tb(603979776, 1, { template: 0 }),
            (e()(),
            l.yb(
              6,
              0,
              null,
              0,
              5,
              "au3-toggle-button-group",
              [
                ["class", "settings-list__toggle-item"],
                ["id", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "selectedChange"]],
              function (e, t, n) {
                var l = !0;
                return (
                  "selectedChange" === t &&
                    (l = !1 !== e.component.bluetoothStateChanged(n) && l),
                  l
                );
              },
              pt.b,
              pt.a,
            )),
            l.xb(
              7,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              8,
              147456,
              null,
              0,
              ue.a,
              [re.a, l.h, le.a, [3, ue.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            l.Pb(131072, Ae.b, [l.h]),
            l.Pb(131072, Ae.b, [l.h]),
            l.xb(
              11,
              4374528,
              null,
              0,
              gt.a,
              [[2, ue.a], l.h],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                data: [1, "data"],
                selected: [2, "selected"],
              },
              { selectedChange: "selectedChange" },
            ),
            (e()(),
            l.yb(
              12,
              0,
              null,
              0,
              3,
              "au3-list-switch-item",
              [
                ["class", "settings-list__item"],
                ["developerText", "Bluetooth audio player"],
                ["id", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "valueChange"]],
              function (e, t, n) {
                var l = !0;
                return (
                  "valueChange" === t &&
                    (l = !1 !== e.component.toggleAudioPlayerState(n) && l),
                  l
                );
              },
              mt.b,
              mt.a,
            )),
            l.xb(
              13,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              14,
              147456,
              null,
              0,
              ue.a,
              [re.a, l.h, le.a, [3, ue.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            l.xb(
              15,
              49152,
              null,
              0,
              vt.a,
              [[2, ue.a]],
              {
                developerText: [0, "developerText"],
                value: [1, "value"],
                resetDelay: [2, "resetDelay"],
              },
              { valueChange: "valueChange" },
            ),
            (e()(), l.hb(16777216, [[1, 2]], 0, 2, null, xt)),
            l.xb(
              17,
              16384,
              null,
              0,
              lt.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, Ae.b, [l.h]),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 2, 0, ""),
              e(t, 4, 0),
              e(t, 7, 0, ""),
              e(
                t,
                8,
                0,
                !l.Yb(t, 8, 0, l.Nb(t, 9).transform(n.bluetoothAvailable$)) ||
                  (null == t.context.mib3Let
                    ? null
                    : t.context.mib3Let.asiDeviceActive) ||
                  !(null != t.context.mib3Let && t.context.mib3Let.clampSOn) ||
                  l.Yb(
                    t,
                    8,
                    0,
                    l.Nb(t, 10).transform(n.visibilityChangePending$$),
                  ),
                null != t.context.mib3Let && t.context.mib3Let.clampSOn
                  ? void 0
                  : n.popupIds.POPUP_CM_POPUP_SETTINGS_BLUETOOTH_SCONTACT_ERROR,
              ),
              e(t, 11, 0, "Bluetooth", n.bluetoothStateItems, n.visibility),
              e(t, 13, 0, ""),
              e(
                t,
                14,
                0,
                2 === (null == n.visibility ? null : n.visibility.itemId) ||
                  (null == t.context.mib3Let
                    ? null
                    : t.context.mib3Let.asiDeviceActive) ||
                  !(null != t.context.mib3Let && t.context.mib3Let.clampSOn),
                null != t.context.mib3Let && t.context.mib3Let.clampSOn
                  ? void 0
                  : n.popupIds.POPUP_CM_POPUP_SETTINGS_BLUETOOTH_SCONTACT_ERROR,
              ),
              e(t, 15, 0, "Bluetooth audio player", n.audioActive, 0),
              e(
                t,
                17,
                0,
                l.Yb(
                  t,
                  17,
                  0,
                  l
                    .Nb(t, 18)
                    .transform(n.wifiSettingsService.wifiChangePending$$),
                ),
              ));
          },
          function (e, t) {
            (e(t, 0, 0, l.Nb(t, 4).showLineNumbers),
              e(
                t,
                6,
                0,
                l.Nb(t, 8).combinedDisabled,
                l.Nb(t, 8).useBrighterIcon,
              ),
              e(
                t,
                12,
                0,
                l.Nb(t, 14).combinedDisabled,
                l.Nb(t, 14).useBrighterIcon,
              ));
          },
        );
      }
      function Pt(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              22,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:CM_SETTINGS_BLUETOOTH"],
              ],
              null,
              null,
              null,
              $e.b,
              $e.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 4440064, null, 0, de.a, [le.a], { id: [0, "id"] }, null),
            (e()(),
            l.yb(
              3,
              0,
              null,
              0,
              14,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Be.b,
              Be.a,
            )),
            l.xb(
              4,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              5,
              49152,
              null,
              0,
              We.a,
              [Re.a, ke.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            l.yb(
              6,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", ""],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, t, n) {
                var l = !0;
                return (
                  "mib3Tap" === t &&
                    (l = !1 !== e.component.routingService.goUp() && l),
                  l
                );
              },
              Fe.b,
              Fe.a,
            )),
            l.xb(7, 147456, null, 0, ae.a, [l.l, l.z], null, null),
            l.xb(
              8,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              oe.a,
              [ae.a, [2, se.a], [2, te.a], le.a],
              null,
              null,
            ),
            l.xb(
              10,
              212992,
              null,
              0,
              ce.a,
              [
                le.a,
                be.b,
                oe.a,
                [2, se.a],
                [2, te.a],
                [2, ue.a],
                [2, de.a],
                [2, he.a],
                l.z,
                pe.a,
                l.l,
                [2, ge.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.xb(
              11,
              147456,
              null,
              0,
              Ue.a,
              [le.a, ze.a, l.l, [2, ce.a], [2, ue.a]],
              null,
              null,
            ),
            l.xb(12, 16384, null, 0, ie.a, [], null, null),
            l.Sb(131584, null, me.a, me.a, [[3, me.a]]),
            l.xb(
              14,
              4407296,
              null,
              0,
              ve.a,
              [
                l.l,
                Se.a,
                l.h,
                me.a,
                [2, fe.a],
                [2, se.b],
                [2, se.a],
                [2, xe.a],
                [2, _e.a],
              ],
              null,
              null,
            ),
            l.xb(
              15,
              49152,
              null,
              0,
              je.a,
              [[2, ue.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            l.xb(
              16,
              147456,
              null,
              0,
              Te.a,
              [
                [2, ce.a],
                [2, ue.a],
                [2, Oe.a],
                [2, ve.a],
                [2, Ce.b],
                l.l,
                ye.a,
                Ie.b,
              ],
              null,
              null,
            ),
            l.xb(
              17,
              147456,
              null,
              0,
              Me.a,
              [[2, ve.a], [2, ce.a], [2, be.b], Ne.a],
              null,
              null,
            ),
            (e()(), l.hb(16777216, null, 0, 4, null, _t)),
            l.xb(
              19,
              16384,
              null,
              0,
              lt.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, Ae.b, [l.h]),
            l.Pb(131072, Ae.b, [l.h]),
            l.Qb(22, { asiDeviceActive: 0, clampSOn: 1 }),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, "Screen:CM_SETTINGS_BLUETOOTH"),
              e(t, 2, 0, "Screen:CM_SETTINGS_BLUETOOTH"),
              e(t, 4, 0, ""),
              e(t, 5, 0, "Settings", "Bluetooth"),
              e(t, 8, 0, ""),
              e(t, 10, 0),
              e(t, 14, 0),
              e(t, 15, 0, !1, "E163_Backbutton.webp"));
            var i = e(
              t,
              22,
              0,
              l.Yb(t, 19, 0, l.Nb(t, 20).transform(n.asiDeviceActive$)),
              l.Yb(
                t,
                19,
                0,
                l.Nb(t, 21).transform(n.clampsService.clampSStateOn$),
              ),
            );
            e(t, 19, 0, i);
          },
          function (e, t) {
            (e(
              t,
              3,
              0,
              l.Nb(t, 5).hideLeftBorder,
              l.Nb(t, 5).hideDividingBorders,
            ),
              e(
                t,
                6,
                0,
                l.Nb(t, 14).markerClassEnabled,
                l.Nb(t, 15).useItemPlaceholder,
              ));
          },
        );
      }
      function Tt(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-bluetooth-settings",
              [],
              null,
              null,
              null,
              Pt,
              ft,
            )),
            l.xb(
              1,
              245760,
              null,
              0,
              D,
              [we.a, T.a, p.a, d.c, h.a, St.a, le.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            e(t, 1, 0);
          },
          null,
        );
      }
      var Ot = l.ub("au3-bluetooth-settings", D, Tt, {}, {}, []),
        Ct = n("UaS1"),
        yt = n("pNLL"),
        It = n("dtma"),
        Mt = n("u0hB"),
        Nt = n("KczA"),
        Dt = n("1VvW"),
        wt = l.wb({
          encapsulation: 0,
          styles: [["[_nghost-%COMP%]{display:block;width:100%;height:100%}"]],
          data: {},
        });
      function Lt(e) {
        return l.ac(
          2,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              6,
              "au3-screen",
              [
                ["id", "Screen:CM_SETTINGS_BLUETOOTH_NAME_EDIT"],
                ["ttDisplayVariant", ""],
              ],
              null,
              null,
              null,
              $e.b,
              $e.a,
            )),
            l.xb(1, 16384, null, 0, Ct.a, [], null, null),
            l.xb(
              2,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [6, Ct.a]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(3, 4440064, null, 0, de.a, [le.a], { id: [0, "id"] }, null),
            (e()(),
            l.yb(
              4,
              0,
              null,
              0,
              2,
              "au3-enter-name-or-code",
              [],
              null,
              [[null, "onSave"]],
              function (e, t, n) {
                var l = !0;
                return (
                  "onSave" === t &&
                    (l = !1 !== e.component.bluetoothService.setName(n) && l),
                  l
                );
              },
              yt.b,
              yt.a,
            )),
            l.xb(
              5,
              704512,
              null,
              0,
              It.a,
              [Mt.c, Nt.a, we.a, St.a, Dt.a],
              {
                hasProposals: [0, "hasProposals"],
                placeholderDeveloperText: [1, "placeholderDeveloperText"],
                descriptionText: [2, "descriptionText"],
                inputField: [3, "inputField"],
                inputInvalidWarningMessage: [4, "inputInvalidWarningMessage"],
                primaryDeveloperTitle: [5, "primaryDeveloperTitle"],
                secondaryDeveloperTitle: [6, "secondaryDeveloperTitle"],
                contextId: [7, "contextId"],
              },
              { onSave: "onSave" },
            ),
            l.Pb(131072, Ae.b, [l.h]),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 2, 0, "Screen:CM_SETTINGS_BLUETOOTH_NAME_EDIT"),
              e(t, 3, 0, "Screen:CM_SETTINGS_BLUETOOTH_NAME_EDIT"),
              e(
                t,
                5,
                0,
                !0,
                "Bluetooth-Name",
                "Bitte geben Sie einen\nBluetooth-Namen ein.",
                l.Yb(t, 5, 3, l.Nb(t, 6).transform(n.inputField$)),
                n.popupIds.POPUP_CM_POPUP_BLUETOOTH_NAME_EDIT_ERROR,
                "Settings",
                "Bluetooth-Name",
                n.contextId,
              ));
          },
          null,
        );
      }
      function Et(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-bluetooth-edit-name",
              [],
              null,
              null,
              null,
              Lt,
              wt,
            )),
            l.xb(
              1,
              245760,
              null,
              0,
              B,
              [we.a, T.a, Mt.c, d.c, le.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            e(t, 1, 0);
          },
          null,
        );
      }
      var At = l.ub("au3-bluetooth-edit-name", B, Et, {}, {}, []),
        $t = l.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;position:relative}.list__switch-item[_ngcontent-%COMP%]{padding:0 20px;font-size:40px;height:100px;display:flex;justify-content:space-between;align-items:center}",
            ],
          ],
          data: {},
        });
      function Bt(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-list-switch-item",
              [["class", "list__switch-item"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "valueChange"]],
              function (e, t, n) {
                var l = !0;
                return (
                  "valueChange" === t &&
                    (l =
                      !1 !==
                        e.component.setServiceEnabled(
                          e.parent.context.$implicit.service,
                          !e.parent.context.$implicit.enabled,
                        ) && l),
                  l
                );
              },
              mt.b,
              mt.a,
            )),
            l.xb(
              1,
              147456,
              null,
              0,
              ue.a,
              [re.a, l.h, le.a, [3, ue.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            l.Pb(131072, Ae.b, [l.h]),
            l.xb(
              3,
              49152,
              null,
              0,
              vt.a,
              [[2, ue.a]],
              {
                icon: [0, "icon"],
                textId: [1, "textId"],
                textIdEnum: [2, "textIdEnum"],
                developerText: [3, "developerText"],
                value: [4, "value"],
                resetDelay: [5, "resetDelay"],
              },
              { valueChange: "valueChange" },
            ),
          ],
          function (e, t) {
            var n = t.component,
              i = null;
            (e(
              t,
              1,
              0,
              null ==
                (i = l.Yb(
                  t,
                  1,
                  0,
                  l.Nb(t, 2).transform(n.temporaryDisabledServices$),
                ))
                ? null
                : i.includes(t.parent.context.$implicit.service),
            ),
              e(
                t,
                3,
                0,
                t.parent.context.$implicit.icon,
                t.parent.context.$implicit.id,
                n.profileNameTextEnum,
                t.parent.context.$implicit.text,
                t.parent.context.$implicit.enabled,
                0,
              ));
          },
          function (e, t) {
            e(t, 0, 0, l.Nb(t, 1).combinedDisabled, l.Nb(t, 1).useBrighterIcon);
          },
        );
      }
      function Wt(e) {
        return l.ac(
          0,
          [
            (e()(), l.hb(16777216, [[1, 2]], null, 1, null, Bt)),
            l.xb(
              1,
              16384,
              null,
              0,
              Ae.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), l.hb(0, null, null, 0)),
          ],
          function (e, t) {
            e(t, 1, 0, t.context.$implicit.visible);
          },
          null,
        );
      }
      function Rt(e) {
        return l.ac(
          2,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              26,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:CM_MAIN_BT_PROFILES"],
              ],
              null,
              null,
              null,
              $e.b,
              $e.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 4440064, null, 0, de.a, [le.a], { id: [0, "id"] }, null),
            (e()(),
            l.yb(
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
              Be.b,
              Be.a,
            )),
            l.xb(
              4,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              5,
              49152,
              null,
              0,
              We.a,
              [Re.a, ke.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryNonI18nText: [1, "primaryNonI18nText"],
                secondaryDeveloperText: [2, "secondaryDeveloperText"],
              },
              null,
            ),
            l.Pb(131072, Ae.b, [l.h]),
            (e()(),
            l.yb(
              7,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", ""],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, t, n) {
                var l = !0;
                return (
                  "mib3Tap" === t &&
                    (l = !1 !== e.component.routingService.goBack() && l),
                  l
                );
              },
              Fe.b,
              Fe.a,
            )),
            l.xb(8, 147456, null, 0, ae.a, [l.l, l.z], null, null),
            l.xb(
              9,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              oe.a,
              [ae.a, [2, se.a], [2, te.a], le.a],
              null,
              null,
            ),
            l.xb(
              11,
              212992,
              null,
              0,
              ce.a,
              [
                le.a,
                be.b,
                oe.a,
                [2, se.a],
                [2, te.a],
                [2, ue.a],
                [2, de.a],
                [2, he.a],
                l.z,
                pe.a,
                l.l,
                [2, ge.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.xb(
              12,
              147456,
              null,
              0,
              Ue.a,
              [le.a, ze.a, l.l, [2, ce.a], [2, ue.a]],
              null,
              null,
            ),
            l.xb(13, 16384, null, 0, ie.a, [], null, null),
            l.Sb(131584, null, me.a, me.a, [[3, me.a]]),
            l.xb(
              15,
              4407296,
              null,
              0,
              ve.a,
              [
                l.l,
                Se.a,
                l.h,
                me.a,
                [2, fe.a],
                [2, se.b],
                [2, se.a],
                [2, xe.a],
                [2, _e.a],
              ],
              null,
              null,
            ),
            l.xb(
              16,
              49152,
              null,
              0,
              je.a,
              [[2, ue.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            l.xb(
              17,
              147456,
              null,
              0,
              Te.a,
              [
                [2, ce.a],
                [2, ue.a],
                [2, Oe.a],
                [2, ve.a],
                [2, Ce.b],
                l.l,
                ye.a,
                Ie.b,
              ],
              null,
              null,
            ),
            l.xb(
              18,
              147456,
              null,
              0,
              Me.a,
              [[2, ve.a], [2, ce.a], [2, be.b], Ne.a],
              null,
              null,
            ),
            (e()(),
            l.yb(
              19,
              0,
              null,
              0,
              7,
              "au3-list",
              [["id", "BluetoothProfilesList"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Ye.b,
              Ye.a,
            )),
            l.Sb(6144, null, Ke.a, null, [Ze.a]),
            l.xb(
              21,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(22, 16384, null, 0, Qe.a, [l.l], null, null),
            l.xb(
              23,
              12828672,
              null,
              1,
              Ze.a,
              [
                [2, Je.a],
                [2, Xe.a],
                [8, null],
                [2, te.a],
                [2, qe.a],
                [2, et.a],
                [2, be.b],
                Le.i,
                l.z,
                l.h,
                le.a,
                tt.a,
                nt.a,
                [2, Se.a],
                se.a,
                [2, Le.a],
              ],
              { items: [0, "items"] },
              null,
            ),
            l.Tb(603979776, 1, { template: 0 }),
            l.Pb(131072, Ae.b, [l.h]),
            (e()(), l.hb(0, [[1, 2]], 0, 0, null, Wt)),
          ],
          function (e, t) {
            var n,
              i = t.component;
            (e(t, 1, 0, "Screen:CM_MAIN_BT_PROFILES"),
              e(t, 2, 0, "Screen:CM_MAIN_BT_PROFILES"),
              e(t, 4, 0, ""),
              e(
                t,
                5,
                0,
                "Unknown device",
                null == (n = l.Yb(t, 5, 1, l.Nb(t, 6).transform(i.device$)))
                  ? null
                  : n.name,
                "Bluetooth Profile",
              ),
              e(t, 9, 0, ""),
              e(t, 11, 0),
              e(t, 15, 0),
              e(t, 16, 0, !1, "E163_Backbutton.webp"),
              e(t, 21, 0, "BluetoothProfilesList"),
              e(t, 23, 0, l.Yb(t, 23, 0, l.Nb(t, 25).transform(i.profiles$))));
          },
          function (e, t) {
            (e(
              t,
              3,
              0,
              l.Nb(t, 5).hideLeftBorder,
              l.Nb(t, 5).hideDividingBorders,
            ),
              e(
                t,
                7,
                0,
                l.Nb(t, 15).markerClassEnabled,
                l.Nb(t, 16).useItemPlaceholder,
              ),
              e(t, 19, 0, l.Nb(t, 23).showLineNumbers));
          },
        );
      }
      function kt(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-bluetooth-profiles",
              [],
              null,
              null,
              null,
              Rt,
              $t,
            )),
            l.xb(
              1,
              180224,
              null,
              0,
              K,
              [we.a, T.a, H.a, d.c, Dt.a, le.a],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var Ft = l.ub("au3-bluetooth-profiles", K, kt, {}, {}, []);
      class Ut {
        constructor(e, t, n) {
          ((this.clampsService = e),
            (this.globalRoutingService = t),
            (this._returnRoute = void 0),
            (this.logger = n.getLogger("ReturnOnClampSOffDirective")));
        }
        set returnTo(e) {
          this._returnRoute = e;
        }
        ngOnInit() {
          this.clampSubscription = this.clampsService.clampSStateOn$
            .pipe(
              Object(E.a)((e) => !e),
              Object(r.pd)(
                this.logger,
                "ngOnInit: clamp S is off -> navigating back or up",
              ),
            )
            .subscribe(() => {
              this.globalRoutingService
                .goBack(this._returnRoute)
                .then((e) => {
                  e || this.globalRoutingService.goUp();
                })
                .catch(() => {
                  this.globalRoutingService.goUp();
                });
            });
        }
        ngOnDestroy() {
          this.clampSubscription.unsubscribe();
        }
      }
      var zt = l.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;width:100%;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column}.list[_ngcontent-%COMP%], .screen[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}.list[_ngcontent-%COMP%]{flex:1 1 0}.list__item[_ngcontent-%COMP%]{height:100px;padding:0 20px;font-size:40px}.component-layout-latin[_nghost-%COMP%]   .list__item[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list__item[_ngcontent-%COMP%]{text-align:left}.component-layout-arabic[_nghost-%COMP%]   .list__item[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list__item[_ngcontent-%COMP%]{text-align:right}",
          ],
        ],
        data: {},
      });
      function jt(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-list-switch-item",
              [
                ["class", "list__item"],
                ["id", "AllowWLANDevices"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "valueChange"]],
              function (e, t, n) {
                var l = !0;
                return (
                  "valueChange" === t &&
                    (l = !1 !== e.component.wifiService.setWifiShared(n) && l),
                  l
                );
              },
              mt.b,
              mt.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              147456,
              null,
              0,
              ue.a,
              [re.a, l.h, le.a, [3, ue.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            l.xb(
              3,
              49152,
              null,
              0,
              vt.a,
              [[2, ue.a]],
              {
                fixedNumberOfLines: [0, "fixedNumberOfLines"],
                developerText: [1, "developerText"],
                value: [2, "value"],
              },
              { valueChange: "valueChange" },
            ),
            l.Pb(131072, Ae.b, [l.h]),
          ],
          function (e, t) {
            var n,
              i = t.component;
            (e(t, 1, 0, "AllowWLANDevices"),
              e(
                t,
                2,
                0,
                t.context.mib3Let ||
                  !(
                    null != t.parent.context.mib3Let &&
                    null != t.parent.context.mib3Let.wifiState &&
                    t.parent.context.mib3Let.wifiState.enabled
                  ) ||
                  (null == t.parent.context.mib3Let
                    ? null
                    : t.parent.context.mib3Let.changeInProgress) ||
                  (null == t.parent.context.mib3Let
                    ? null
                    : t.parent.context.mib3Let.wifiPasswordChangePending),
                i.wifiDevicesDisabledReason(
                  t.context.mib3Let,
                  null == t.parent.context.mib3Let
                    ? null
                    : t.parent.context.mib3Let.wifiPasswordChangePending,
                ),
              ),
              e(
                t,
                3,
                0,
                1,
                "WLAN-Ger\xe4te zulassen",
                null ==
                  (n = l.Yb(
                    t,
                    3,
                    2,
                    l.Nb(t, 4).transform(i.wifiService.mainAP$),
                  ))
                  ? null
                  : n.isInternetShared,
              ));
          },
          function (e, t) {
            e(t, 0, 0, l.Nb(t, 2).combinedDisabled, l.Nb(t, 2).useBrighterIcon);
          },
        );
      }
      function Gt(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              24,
              "au3-list",
              [
                ["class", "list"],
                ["id", ""],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Ye.b,
              Ye.a,
            )),
            l.Sb(6144, null, Ke.a, null, [Ze.a]),
            l.xb(
              2,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(3, 16384, null, 0, Qe.a, [l.l], null, null),
            l.xb(
              4,
              12828672,
              null,
              1,
              Ze.a,
              [
                [2, Je.a],
                [2, Xe.a],
                [8, null],
                [2, te.a],
                [2, qe.a],
                [2, et.a],
                [2, be.b],
                Le.i,
                l.z,
                l.h,
                le.a,
                tt.a,
                nt.a,
                [2, Se.a],
                se.a,
                [2, Le.a],
              ],
              null,
              null,
            ),
            l.Tb(603979776, 2, { template: 0 }),
            (e()(),
            l.yb(
              6,
              0,
              null,
              0,
              3,
              "au3-list-switch-item",
              [
                ["class", "list__item"],
                ["id", "WLAN"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "valueChange"]],
              function (e, t, n) {
                var l = !0;
                return (
                  "valueChange" === t &&
                    (l = !1 !== e.component.wifiStateChange(n) && l),
                  l
                );
              },
              mt.b,
              mt.a,
            )),
            l.xb(
              7,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              8,
              147456,
              null,
              0,
              ue.a,
              [re.a, l.h, le.a, [3, ue.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            l.xb(
              9,
              49152,
              [
                [1, 4],
                ["wlan", 4],
              ],
              0,
              vt.a,
              [[2, ue.a]],
              {
                fixedNumberOfLines: [0, "fixedNumberOfLines"],
                developerText: [1, "developerText"],
                value: [2, "value"],
                resetDelay: [3, "resetDelay"],
              },
              { valueChange: "valueChange" },
            ),
            (e()(),
            l.yb(
              10,
              0,
              null,
              0,
              11,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["id", "WlanHotspotEinstellungen"],
                ["titleDeveloperText", "WLAN-Hotspot Einstellungen"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              ee.b,
              ee.a,
            )),
            l.xb(
              11,
              147456,
              null,
              0,
              ue.a,
              [re.a, l.h, le.a, [3, ue.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            l.xb(12, 147456, null, 0, ae.a, [l.l, l.z], null, null),
            l.xb(
              13,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              14,
              147456,
              null,
              0,
              oe.a,
              [ae.a, [2, se.a], [2, te.a], le.a],
              null,
              null,
            ),
            l.xb(
              15,
              212992,
              null,
              0,
              ce.a,
              [
                le.a,
                be.b,
                oe.a,
                [2, se.a],
                [2, te.a],
                [2, ue.a],
                [2, de.a],
                [2, he.a],
                l.z,
                pe.a,
                l.l,
                [2, ge.a],
              ],
              null,
              null,
            ),
            l.xb(
              16,
              671744,
              null,
              0,
              De.a,
              [we.a, Le.i, ue.a, ce.a, De.b, Ee.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            l.Sb(131584, null, me.a, me.a, [[3, me.a]]),
            l.xb(
              18,
              4407296,
              null,
              0,
              ve.a,
              [
                l.l,
                Se.a,
                l.h,
                me.a,
                [2, fe.a],
                [2, se.b],
                [2, se.a],
                [2, xe.a],
                [2, _e.a],
              ],
              null,
              null,
            ),
            l.xb(
              19,
              114688,
              null,
              0,
              Pe.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
            l.xb(
              20,
              147456,
              null,
              0,
              Te.a,
              [
                [2, ce.a],
                [2, ue.a],
                [2, Oe.a],
                [2, ve.a],
                [2, Ce.b],
                l.l,
                ye.a,
                Ie.b,
              ],
              null,
              null,
            ),
            l.xb(
              21,
              147456,
              null,
              0,
              Me.a,
              [[2, ve.a], [2, ce.a], [2, be.b], Ne.a],
              null,
              null,
            ),
            (e()(), l.hb(16777216, [[2, 2]], 0, 2, null, jt)),
            l.xb(
              23,
              16384,
              null,
              0,
              lt.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, Ae.b, [l.h]),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 2, 0, ""),
              e(t, 4, 0),
              e(t, 7, 0, "WLAN"),
              e(
                t,
                8,
                0,
                !(
                  null != t.context.mib3Let &&
                  null != t.context.mib3Let.wifiState &&
                  t.context.mib3Let.wifiState.available
                ) ||
                  (null == t.context.mib3Let
                    ? null
                    : t.context.mib3Let.changeInProgress) ||
                  (null == t.context.mib3Let
                    ? null
                    : t.context.mib3Let.wifiPasswordChangePending),
                null != t.context.mib3Let &&
                  t.context.mib3Let.wifiPasswordChangePending
                  ? n.passwordWillBeSavedToast
                  : void 0,
              ),
              e(
                t,
                9,
                0,
                1,
                "WLAN",
                !(
                  null == t.context.mib3Let ||
                  null == t.context.mib3Let.wifiState ||
                  !t.context.mib3Let.wifiState.enabled
                ),
                0,
              ),
              e(
                t,
                11,
                0,
                !(
                  null != t.context.mib3Let &&
                  null != t.context.mib3Let.wifiState &&
                  t.context.mib3Let.wifiState.enabled
                ) ||
                  (null == t.context.mib3Let
                    ? null
                    : t.context.mib3Let.changeInProgress) ||
                  (null == t.context.mib3Let
                    ? null
                    : t.context.mib3Let.wifiPasswordChangePending),
                null != t.context.mib3Let &&
                  t.context.mib3Let.wifiPasswordChangePending
                  ? n.passwordWillBeSavedToast
                  : void 0,
              ),
              e(t, 13, 0, "WlanHotspotEinstellungen"),
              e(t, 15, 0),
              e(
                t,
                16,
                0,
                n.ConnectionSettingsRoute.children.Wifi.children.WifiHotspot,
                !0,
              ),
              e(t, 18, 0),
              e(t, 19, 0, "WLAN-Hotspot Einstellungen"),
              e(
                t,
                23,
                0,
                l.Yb(t, 23, 0, l.Nb(t, 24).transform(n.privacyEnabled$)),
              ));
          },
          function (e, t) {
            (e(t, 0, 0, l.Nb(t, 4).showLineNumbers),
              e(
                t,
                6,
                0,
                l.Nb(t, 8).combinedDisabled,
                l.Nb(t, 8).useBrighterIcon,
              ),
              e(
                t,
                10,
                0,
                l.Nb(t, 11).combinedDisabled,
                l.Nb(t, 11).useBrighterIcon,
                l.Nb(t, 18).markerClassEnabled,
              ));
          },
        );
      }
      function Ht(e) {
        return l.ac(
          2,
          [
            l.Tb(671088640, 1, { wlanSwitch: 0 }),
            (e()(),
            l.yb(
              1,
              0,
              null,
              null,
              24,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:CM_SETTINGS_WiFi"],
              ],
              null,
              null,
              null,
              $e.b,
              $e.a,
            )),
            l.xb(
              2,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(3, 4440064, null, 0, de.a, [le.a], { id: [0, "id"] }, null),
            l.xb(
              4,
              212992,
              null,
              0,
              Ut,
              [h.a, we.a, le.a],
              { returnTo: [0, "returnTo"] },
              null,
            ),
            (e()(),
            l.yb(
              5,
              0,
              null,
              0,
              14,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Be.b,
              Be.a,
            )),
            l.xb(
              6,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              7,
              49152,
              null,
              0,
              We.a,
              [Re.a, ke.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            l.yb(
              8,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", ""],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, t, n) {
                var l = !0;
                return (
                  "mib3Tap" === t &&
                    (l = !1 !== e.component.routingService.goUp() && l),
                  l
                );
              },
              Fe.b,
              Fe.a,
            )),
            l.xb(9, 147456, null, 0, ae.a, [l.l, l.z], null, null),
            l.xb(
              10,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              11,
              147456,
              null,
              0,
              oe.a,
              [ae.a, [2, se.a], [2, te.a], le.a],
              null,
              null,
            ),
            l.xb(
              12,
              212992,
              null,
              0,
              ce.a,
              [
                le.a,
                be.b,
                oe.a,
                [2, se.a],
                [2, te.a],
                [2, ue.a],
                [2, de.a],
                [2, he.a],
                l.z,
                pe.a,
                l.l,
                [2, ge.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.xb(
              13,
              147456,
              null,
              0,
              Ue.a,
              [le.a, ze.a, l.l, [2, ce.a], [2, ue.a]],
              null,
              null,
            ),
            l.xb(14, 16384, null, 0, ie.a, [], null, null),
            l.Sb(131584, null, me.a, me.a, [[3, me.a]]),
            l.xb(
              16,
              4407296,
              null,
              0,
              ve.a,
              [
                l.l,
                Se.a,
                l.h,
                me.a,
                [2, fe.a],
                [2, se.b],
                [2, se.a],
                [2, xe.a],
                [2, _e.a],
              ],
              null,
              null,
            ),
            l.xb(
              17,
              49152,
              null,
              0,
              je.a,
              [[2, ue.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            l.xb(
              18,
              147456,
              null,
              0,
              Te.a,
              [
                [2, ce.a],
                [2, ue.a],
                [2, Oe.a],
                [2, ve.a],
                [2, Ce.b],
                l.l,
                ye.a,
                Ie.b,
              ],
              null,
              null,
            ),
            l.xb(
              19,
              147456,
              null,
              0,
              Me.a,
              [[2, ve.a], [2, ce.a], [2, be.b], Ne.a],
              null,
              null,
            ),
            (e()(), l.hb(16777216, null, 0, 5, null, Gt)),
            l.xb(
              21,
              16384,
              null,
              0,
              lt.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, Ae.b, [l.h]),
            l.Pb(131072, Ae.b, [l.h]),
            l.Pb(131072, Ae.b, [l.h]),
            l.Qb(25, {
              wifiState: 0,
              changeInProgress: 1,
              wifiPasswordChangePending: 2,
            }),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 2, 0, "Screen:CM_SETTINGS_WiFi"),
              e(t, 3, 0, "Screen:CM_SETTINGS_WiFi"),
              e(t, 4, 0, n.ConnectionSettingsRoute),
              e(t, 6, 0, ""),
              e(t, 7, 0, "Einstell.", "WLAN"),
              e(t, 10, 0, ""),
              e(t, 12, 0),
              e(t, 16, 0),
              e(t, 17, 0, !1, "E163_Backbutton.webp"));
            var i = e(
              t,
              25,
              0,
              l.Yb(t, 21, 0, l.Nb(t, 22).transform(n.wifiService.wifiState$)),
              l.Yb(t, 21, 0, l.Nb(t, 23).transform(n.changeInProgress$$)),
              l.Yb(
                t,
                21,
                0,
                l.Nb(t, 24).transform(n.wifiService.wifiChangePending$$),
              ),
            );
            e(t, 21, 0, i);
          },
          function (e, t) {
            (e(
              t,
              5,
              0,
              l.Nb(t, 7).hideLeftBorder,
              l.Nb(t, 7).hideDividingBorders,
            ),
              e(
                t,
                8,
                0,
                l.Nb(t, 16).markerClassEnabled,
                l.Nb(t, 17).useItemPlaceholder,
              ));
          },
        );
      }
      function Vt(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-wifi-settings",
              [],
              null,
              null,
              null,
              Ht,
              zt,
            )),
            l.xb(1, 180224, null, 0, R, [we.a, m.a, p.a, le.a], null, null),
          ],
          null,
          null,
        );
      }
      var Yt = l.ub("au3-wifi-settings", R, Vt, {}, {}, []),
        Kt = l.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;width:100%;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column}.list[_ngcontent-%COMP%], .screen[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}.list[_ngcontent-%COMP%]{flex:1 1 0}.list__item[_ngcontent-%COMP%]{height:100px;padding:0 20px;font-size:40px}.component-layout-latin[_nghost-%COMP%]   .list__item[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list__item[_ngcontent-%COMP%]{text-align:left}.component-layout-arabic[_nghost-%COMP%]   .list__item[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list__item[_ngcontent-%COMP%]{text-align:right}",
            ],
          ],
          data: {},
        });
      function Zt(e) {
        return l.ac(
          2,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              54,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:CM_SETTINGS_WiFi_AUDI_MMI_HOTSPOT_SETTINGS"],
              ],
              null,
              null,
              null,
              $e.b,
              $e.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 4440064, null, 0, de.a, [le.a], { id: [0, "id"] }, null),
            l.xb(
              3,
              212992,
              null,
              0,
              Ut,
              [h.a, we.a, le.a],
              { returnTo: [0, "returnTo"] },
              null,
            ),
            (e()(),
            l.yb(
              4,
              0,
              null,
              0,
              14,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Be.b,
              Be.a,
            )),
            l.xb(
              5,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              6,
              49152,
              null,
              0,
              We.a,
              [Re.a, ke.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            l.yb(
              7,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", ""],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, t, n) {
                var l = !0;
                return (
                  "mib3Tap" === t &&
                    (l = !1 !== e.component.routingService.goBack() && l),
                  l
                );
              },
              Fe.b,
              Fe.a,
            )),
            l.xb(8, 147456, null, 0, ae.a, [l.l, l.z], null, null),
            l.xb(
              9,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              oe.a,
              [ae.a, [2, se.a], [2, te.a], le.a],
              null,
              null,
            ),
            l.xb(
              11,
              212992,
              null,
              0,
              ce.a,
              [
                le.a,
                be.b,
                oe.a,
                [2, se.a],
                [2, te.a],
                [2, ue.a],
                [2, de.a],
                [2, he.a],
                l.z,
                pe.a,
                l.l,
                [2, ge.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.xb(
              12,
              147456,
              null,
              0,
              Ue.a,
              [le.a, ze.a, l.l, [2, ce.a], [2, ue.a]],
              null,
              null,
            ),
            l.xb(13, 16384, null, 0, ie.a, [], null, null),
            l.Sb(131584, null, me.a, me.a, [[3, me.a]]),
            l.xb(
              15,
              4407296,
              null,
              0,
              ve.a,
              [
                l.l,
                Se.a,
                l.h,
                me.a,
                [2, fe.a],
                [2, se.b],
                [2, se.a],
                [2, xe.a],
                [2, _e.a],
              ],
              null,
              null,
            ),
            l.xb(
              16,
              49152,
              null,
              0,
              je.a,
              [[2, ue.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            l.xb(
              17,
              147456,
              null,
              0,
              Te.a,
              [
                [2, ce.a],
                [2, ue.a],
                [2, Oe.a],
                [2, ve.a],
                [2, Ce.b],
                l.l,
                ye.a,
                Ie.b,
              ],
              null,
              null,
            ),
            l.xb(
              18,
              147456,
              null,
              0,
              Me.a,
              [[2, ve.a], [2, ce.a], [2, be.b], Ne.a],
              null,
              null,
            ),
            (e()(),
            l.yb(
              19,
              0,
              null,
              0,
              35,
              "au3-disclaimer",
              [],
              null,
              null,
              null,
              Ge.b,
              Ge.a,
            )),
            l.xb(
              20,
              4440064,
              null,
              0,
              He.a,
              [Ve.a, [2, te.a], l.h, le.a],
              null,
              null,
            ),
            (e()(),
            l.yb(
              21,
              0,
              null,
              0,
              33,
              "au3-list",
              [
                ["class", "list"],
                ["id", ""],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Ye.b,
              Ye.a,
            )),
            l.Sb(6144, null, Ke.a, null, [Ze.a]),
            l.xb(
              23,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(24, 16384, null, 0, Qe.a, [l.l], null, null),
            l.xb(
              25,
              12828672,
              null,
              1,
              Ze.a,
              [
                [2, Je.a],
                [2, Xe.a],
                [8, null],
                [2, te.a],
                [2, qe.a],
                [2, et.a],
                [2, be.b],
                Le.i,
                l.z,
                l.h,
                le.a,
                tt.a,
                nt.a,
                [2, Se.a],
                se.a,
                [2, Le.a],
              ],
              null,
              null,
            ),
            l.Tb(603979776, 1, { template: 0 }),
            (e()(),
            l.yb(
              27,
              0,
              null,
              0,
              13,
              "au3-list-form-field-item",
              [
                ["developerText", "Zugangspunkt (SSID)"],
                ["id", "SSID"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              dt.b,
              dt.a,
            )),
            l.xb(
              28,
              147456,
              null,
              0,
              ue.a,
              [re.a, l.h, le.a, [3, ue.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            l.Pb(131072, Ae.b, [l.h]),
            l.xb(30, 147456, null, 0, ae.a, [l.l, l.z], null, null),
            l.xb(
              31,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              32,
              147456,
              null,
              0,
              oe.a,
              [ae.a, [2, se.a], [2, te.a], le.a],
              null,
              null,
            ),
            l.xb(
              33,
              212992,
              null,
              0,
              ce.a,
              [
                le.a,
                be.b,
                oe.a,
                [2, se.a],
                [2, te.a],
                [2, ue.a],
                [2, de.a],
                [2, he.a],
                l.z,
                pe.a,
                l.l,
                [2, ge.a],
              ],
              null,
              null,
            ),
            l.xb(
              34,
              671744,
              null,
              0,
              De.a,
              [we.a, Le.i, ue.a, ce.a, De.b, Ee.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            l.Sb(131584, null, me.a, me.a, [[3, me.a]]),
            l.xb(
              36,
              4407296,
              null,
              0,
              ve.a,
              [
                l.l,
                Se.a,
                l.h,
                me.a,
                [2, fe.a],
                [2, se.b],
                [2, se.a],
                [2, xe.a],
                [2, _e.a],
              ],
              null,
              null,
            ),
            l.xb(
              37,
              49152,
              null,
              0,
              ht.a,
              [],
              { developerText: [0, "developerText"], content: [1, "content"] },
              null,
            ),
            l.Pb(131072, Ae.b, [l.h]),
            l.xb(
              39,
              147456,
              null,
              0,
              Te.a,
              [
                [2, ce.a],
                [2, ue.a],
                [2, Oe.a],
                [2, ve.a],
                [2, Ce.b],
                l.l,
                ye.a,
                Ie.b,
              ],
              null,
              null,
            ),
            l.xb(
              40,
              147456,
              null,
              0,
              Me.a,
              [[2, ve.a], [2, ce.a], [2, be.b], Ne.a],
              null,
              null,
            ),
            (e()(),
            l.yb(
              41,
              0,
              null,
              0,
              13,
              "au3-list-form-field-item",
              [
                ["developerText", "Passwort"],
                ["id", "Passwort"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              dt.b,
              dt.a,
            )),
            l.xb(
              42,
              147456,
              null,
              0,
              ue.a,
              [re.a, l.h, le.a, [3, ue.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            l.Pb(131072, Ae.b, [l.h]),
            l.xb(44, 147456, null, 0, ae.a, [l.l, l.z], null, null),
            l.xb(
              45,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              46,
              147456,
              null,
              0,
              oe.a,
              [ae.a, [2, se.a], [2, te.a], le.a],
              null,
              null,
            ),
            l.xb(
              47,
              212992,
              null,
              0,
              ce.a,
              [
                le.a,
                be.b,
                oe.a,
                [2, se.a],
                [2, te.a],
                [2, ue.a],
                [2, de.a],
                [2, he.a],
                l.z,
                pe.a,
                l.l,
                [2, ge.a],
              ],
              null,
              null,
            ),
            l.xb(
              48,
              671744,
              null,
              0,
              De.a,
              [we.a, Le.i, ue.a, ce.a, De.b, Ee.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            l.Sb(131584, null, me.a, me.a, [[3, me.a]]),
            l.xb(
              50,
              4407296,
              null,
              0,
              ve.a,
              [
                l.l,
                Se.a,
                l.h,
                me.a,
                [2, fe.a],
                [2, se.b],
                [2, se.a],
                [2, xe.a],
                [2, _e.a],
              ],
              null,
              null,
            ),
            l.xb(
              51,
              49152,
              null,
              0,
              ht.a,
              [],
              { developerText: [0, "developerText"], content: [1, "content"] },
              null,
            ),
            l.Pb(131072, Ae.b, [l.h]),
            l.xb(
              53,
              147456,
              null,
              0,
              Te.a,
              [
                [2, ce.a],
                [2, ue.a],
                [2, Oe.a],
                [2, ve.a],
                [2, Ce.b],
                l.l,
                ye.a,
                Ie.b,
              ],
              null,
              null,
            ),
            l.xb(
              54,
              147456,
              null,
              0,
              Me.a,
              [[2, ve.a], [2, ce.a], [2, be.b], Ne.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, "Screen:CM_SETTINGS_WiFi_AUDI_MMI_HOTSPOT_SETTINGS"),
              e(t, 2, 0, "Screen:CM_SETTINGS_WiFi_AUDI_MMI_HOTSPOT_SETTINGS"),
              e(t, 3, 0, n.ConnectionSettingsRoute),
              e(t, 5, 0, ""),
              e(t, 6, 0, "Einstell.", "WLAN-Hotspot"),
              e(t, 9, 0, ""),
              e(t, 11, 0),
              e(t, 15, 0),
              e(t, 16, 0, !1, "E163_Backbutton.webp"),
              e(t, 20, 0),
              e(t, 23, 0, ""),
              e(t, 25, 0),
              e(
                t,
                28,
                0,
                l.Yb(
                  t,
                  28,
                  0,
                  l.Nb(t, 29).transform(n.wifiService.wifiChangePending$$),
                ),
                n.passwordWillBeSavedToast,
              ),
              e(t, 31, 0, "SSID"),
              e(t, 33, 0),
              e(
                t,
                34,
                0,
                n.ConnectionSettingsRoute.children.Wifi.children.WifiSSID,
                !0,
              ),
              e(t, 36, 0),
              e(
                t,
                37,
                0,
                "Zugangspunkt (SSID)",
                l.Yb(t, 37, 1, l.Nb(t, 38).transform(n.ssid$)),
              ),
              e(
                t,
                42,
                0,
                l.Yb(
                  t,
                  42,
                  0,
                  l.Nb(t, 43).transform(n.wifiService.wifiChangePending$$),
                ),
                n.passwordWillBeSavedToast,
              ),
              e(t, 45, 0, "Passwort"),
              e(t, 47, 0),
              e(
                t,
                48,
                0,
                n.ConnectionSettingsRoute.children.Wifi.children.WifiPassword,
                !0,
              ),
              e(t, 50, 0),
              e(
                t,
                51,
                0,
                "Passwort",
                l.Yb(t, 51, 1, l.Nb(t, 52).transform(n.password$)),
              ));
          },
          function (e, t) {
            (e(
              t,
              4,
              0,
              l.Nb(t, 6).hideLeftBorder,
              l.Nb(t, 6).hideDividingBorders,
            ),
              e(
                t,
                7,
                0,
                l.Nb(t, 15).markerClassEnabled,
                l.Nb(t, 16).useItemPlaceholder,
              ),
              e(t, 21, 0, l.Nb(t, 25).showLineNumbers),
              e(
                t,
                27,
                0,
                l.Nb(t, 28).combinedDisabled,
                l.Nb(t, 28).useBrighterIcon,
                l.Nb(t, 36).markerClassEnabled,
              ),
              e(
                t,
                41,
                0,
                l.Nb(t, 42).combinedDisabled,
                l.Nb(t, 42).useBrighterIcon,
                l.Nb(t, 50).markerClassEnabled,
              ));
          },
        );
      }
      function Qt(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-wifi-hotspot",
              [],
              null,
              null,
              null,
              Zt,
              Kt,
            )),
            l.xb(1, 245760, null, 0, F, [we.a, g.a, p.a, le.a], null, null),
          ],
          function (e, t) {
            e(t, 1, 0);
          },
          null,
        );
      }
      var Jt = l.ub("au3-wifi-hotspot", F, Qt, {}, {}, []),
        Xt = l.wb({
          encapsulation: 0,
          styles: [["[_nghost-%COMP%]{display:block;width:100%;height:100%}"]],
          data: {},
        });
      function qt(e) {
        return l.ac(
          2,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              7,
              "au3-screen",
              [
                ["id", "Screen:CM_SETTINGS_WiFi_AUDI_MMI_SETTINGS_CHANGE_SSID"],
                ["ttDisplayVariant", ""],
              ],
              null,
              null,
              null,
              $e.b,
              $e.a,
            )),
            l.xb(1, 16384, null, 0, Ct.a, [], null, null),
            l.xb(
              2,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [6, Ct.a]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(3, 4440064, null, 0, de.a, [le.a], { id: [0, "id"] }, null),
            l.xb(
              4,
              212992,
              null,
              0,
              Ut,
              [h.a, we.a, le.a],
              { returnTo: [0, "returnTo"] },
              null,
            ),
            (e()(),
            l.yb(
              5,
              0,
              null,
              0,
              2,
              "au3-enter-name-or-code",
              [],
              null,
              [[null, "onSave"]],
              function (e, t, n) {
                var l = !0;
                return (
                  "onSave" === t && (l = !1 !== e.component.ok(n) && l),
                  l
                );
              },
              yt.b,
              yt.a,
            )),
            l.xb(
              6,
              704512,
              null,
              0,
              It.a,
              [Mt.c, Nt.a, we.a, St.a, Dt.a],
              {
                hasProposals: [0, "hasProposals"],
                placeholderDeveloperText: [1, "placeholderDeveloperText"],
                descriptionText: [2, "descriptionText"],
                inputField: [3, "inputField"],
                inputInvalidWarningMessage: [4, "inputInvalidWarningMessage"],
                primaryDeveloperTitle: [5, "primaryDeveloperTitle"],
                secondaryDeveloperTitle: [6, "secondaryDeveloperTitle"],
                contextId: [7, "contextId"],
              },
              { onSave: "onSave" },
            ),
            l.Pb(131072, Ae.b, [l.h]),
          ],
          function (e, t) {
            var n = t.component;
            (e(
              t,
              2,
              0,
              "Screen:CM_SETTINGS_WiFi_AUDI_MMI_SETTINGS_CHANGE_SSID",
            ),
              e(
                t,
                3,
                0,
                "Screen:CM_SETTINGS_WiFi_AUDI_MMI_SETTINGS_CHANGE_SSID",
              ),
              e(t, 4, 0, n.ConnectionSettingsRoute),
              e(
                t,
                6,
                0,
                !0,
                "Zugangspunkt (SSID)",
                "Geben Sie einen\nNamen f\xfcr den\nWLAN Hotspot ein.",
                l.Yb(t, 6, 3, l.Nb(t, 7).transform(n.inputField$)),
                n.popupIds.POPUP_CM_POPUP_BLUETOOTH_NAME_EDIT_ERROR,
                "Settings",
                "Zugangspunkt (SSID)",
                n.contextId,
              ));
          },
          null,
        );
      }
      function en(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-wifi-change-ssid",
              [],
              null,
              null,
              null,
              qt,
              Xt,
            )),
            l.xb(1, 114688, null, 0, U, [p.a, Mt.c, le.a], null, null),
          ],
          function (e, t) {
            e(t, 1, 0);
          },
          null,
        );
      }
      var tn = l.ub("au3-wifi-change-ssid", U, en, {}, {}, []),
        nn = l.wb({
          encapsulation: 0,
          styles: [["[_nghost-%COMP%]{display:block;width:100%;height:100%}"]],
          data: {},
        });
      function ln(e) {
        return l.ac(
          2,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              7,
              "au3-screen",
              [
                [
                  "id",
                  "Screen:CM_SETTINGS_WiFi_AUDI_MMI_SETTINGS_CHANGE_PASSWORD",
                ],
                ["ttDisplayVariant", ""],
              ],
              null,
              null,
              null,
              $e.b,
              $e.a,
            )),
            l.xb(1, 16384, null, 0, Ct.a, [], null, null),
            l.xb(
              2,
              212992,
              null,
              0,
              te.a,
              [l.l, l.D, ne.a, le.a, [3, te.a], [6, Ct.a]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(3, 4440064, null, 0, de.a, [le.a], { id: [0, "id"] }, null),
            l.xb(
              4,
              212992,
              null,
              0,
              Ut,
              [h.a, we.a, le.a],
              { returnTo: [0, "returnTo"] },
              null,
            ),
            (e()(),
            l.yb(
              5,
              0,
              null,
              0,
              2,
              "au3-enter-name-or-code",
              [],
              null,
              [[null, "onSave"]],
              function (e, t, n) {
                var l = !0;
                return (
                  "onSave" === t && (l = !1 !== e.component.ok(n) && l),
                  l
                );
              },
              yt.b,
              yt.a,
            )),
            l.xb(
              6,
              704512,
              null,
              0,
              It.a,
              [Mt.c, Nt.a, we.a, St.a, Dt.a],
              {
                hasProposals: [0, "hasProposals"],
                placeholderDeveloperText: [1, "placeholderDeveloperText"],
                descriptionText: [2, "descriptionText"],
                inputField: [3, "inputField"],
                inputInvalidWarningMessage: [4, "inputInvalidWarningMessage"],
                primaryDeveloperTitle: [5, "primaryDeveloperTitle"],
                secondaryDeveloperTitle: [6, "secondaryDeveloperTitle"],
                contextId: [7, "contextId"],
              },
              { onSave: "onSave" },
            ),
            l.Pb(131072, Ae.b, [l.h]),
          ],
          function (e, t) {
            var n = t.component;
            (e(
              t,
              2,
              0,
              "Screen:CM_SETTINGS_WiFi_AUDI_MMI_SETTINGS_CHANGE_PASSWORD",
            ),
              e(
                t,
                3,
                0,
                "Screen:CM_SETTINGS_WiFi_AUDI_MMI_SETTINGS_CHANGE_PASSWORD",
              ),
              e(t, 4, 0, n.ConnectionSettingsRoute),
              e(
                t,
                6,
                0,
                !0,
                "WLAN Passwort",
                "Geben Sie ein\nPasswort f\xfcr den\nWLAN Hotspot ein.",
                l.Yb(t, 6, 3, l.Nb(t, 7).transform(n.inputField$)),
                n.popupIds
                  .POPUP_CM_SETTINGS_WiFi_AUDI_MMI_SETTINGS_CHANGE_PASSWORD_MIN_NOT_REACHED,
                "Settings",
                "WLAN Passwort",
                n.contextId,
              ));
          },
          null,
        );
      }
      function an(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-wifi-change-password",
              [],
              null,
              null,
              null,
              ln,
              nn,
            )),
            l.xb(1, 114688, null, 0, z, [p.a, Mt.c, le.a], null, null),
          ],
          function (e, t) {
            e(t, 1, 0);
          },
          null,
        );
      }
      var on = l.ub("au3-wifi-change-password", z, an, {}, {}, []),
        sn = n("aDqW"),
        un = n("/W5r"),
        rn = n("+Qv1"),
        cn = n("XtoR"),
        bn = n("jTHl"),
        dn = n("zL3T"),
        hn = n("+epw"),
        pn = n("zMPs"),
        gn = n("6Yk8"),
        mn = n("u6+O"),
        vn = n("CIQC"),
        Sn = n("REmV"),
        fn = n("Y3N+"),
        xn = n("MJxn"),
        _n = n("eIOF"),
        Pn = n("t+4g"),
        Tn = n("myjn"),
        On = n("fOZ7"),
        Cn = n("QDrj"),
        yn = n("DFsf"),
        In = l.vb(X, [], function (e) {
          return l.Kb([
            l.Lb(512, l.j, l.X, [
              [8, [q.a, bt, Ot, At, Ft, Yt, Jt, tn, on]],
              [3, l.j],
              l.x,
            ]),
            l.Lb(4608, Ae.m, Ae.l, [l.u]),
            l.Lb(4608, sn.h, sn.g, []),
            l.Lb(4608, sn.d, sn.f, []),
            l.Lb(4608, sn.j, sn.e, []),
            l.Lb(4608, sn.c, sn.b, []),
            l.Lb(4608, sn.k, sn.k, [
              sn.l,
              sn.h,
              sn.d,
              sn.j,
              sn.c,
              sn.m,
              sn.o,
              sn.n,
              sn.a,
            ]),
            l.Lb(4608, un.b, un.b, [rn.e, [2, un.a]]),
            l.Lb(4608, cn.b, cn.b, [rn.e, [2, cn.a]]),
            l.Lb(4608, bn.b, bn.b, [rn.e, [2, bn.a]]),
            l.Lb(4608, dn.b, dn.b, [rn.e, [2, dn.a]]),
            l.Lb(4608, Z, Z, [p.a, le.a]),
            l.Lb(1073742336, Ae.c, Ae.c, []),
            l.Lb(1073742336, sn.i, sn.i, []),
            l.Lb(1073742336, hn.a, hn.a, []),
            l.Lb(1073742336, pn.a, pn.a, []),
            l.Lb(1073742336, gn.a, gn.a, []),
            l.Lb(1073742336, mn.a, mn.a, []),
            l.Lb(1073742336, vn.a, vn.a, []),
            l.Lb(1073742336, Sn.a, Sn.a, []),
            l.Lb(1073742336, fn.a, fn.a, []),
            l.Lb(1073742336, xn.a, xn.a, []),
            l.Lb(1073742336, _n.a, _n.a, []),
            l.Lb(1073742336, Pn.a, Pn.a, []),
            l.Lb(1073742336, Tn.a, Tn.a, []),
            l.Lb(1073742336, On.a, On.a, []),
            l.Lb(1073742336, Cn.a, Cn.a, []),
            l.Lb(1073742336, yn.a, yn.a, []),
            l.Lb(1073742336, Dt.n, Dt.n, [
              [2, Dt.s],
              [2, Dt.m],
            ]),
            l.Lb(1073742336, X, X, []),
            l.Lb(256, sn.o, void 0, []),
            l.Lb(256, sn.m, void 0, []),
            l.Lb(256, sn.n, void 0, []),
            l.Lb(256, sn.a, void 0, []),
            l.Lb(
              1024,
              Dt.k,
              function () {
                return [
                  [
                    {
                      path: "",
                      children: [
                        { path: "", component: S, pathMatch: "full" },
                        {
                          path: "bluetooth",
                          children: [
                            { path: "", component: D, pathMatch: "full" },
                            {
                              path: "bluetooth-edit-name",
                              canActivate: [Q.a],
                              component: B,
                            },
                            { path: "bluetooth-profiles", component: K },
                          ],
                        },
                        {
                          path: "wifi",
                          canActivate: [Z],
                          children: [
                            { path: "", component: R, pathMatch: "full" },
                            { path: "wifi-hotspot", component: F },
                            {
                              path: "wifi-ssid",
                              canActivate: [Q.a],
                              component: U,
                            },
                            {
                              path: "wifi-password",
                              canActivate: [Q.a],
                              component: z,
                            },
                          ],
                        },
                        { path: "webapp", loadChildren: J },
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
    yVoU: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return g;
      }),
        n.d(t, "b", function () {
          return m;
        }));
      var l = n("kZht"),
        i = n("Ps6X"),
        a = n("6zvu"),
        o = n("8TlW"),
        s = n("fu7d"),
        u = n("bou3"),
        r = n("yNay"),
        c = n("ijxY"),
        b = n("Xo58"),
        d = n("m3Ja"),
        h = n("r+e+"),
        p = n("bmFL"),
        g =
          (n("Fn96"),
          l.wb({
            encapsulation: 0,
            styles: [
              [
                '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:block;position:relative;width:100%}.container[_ngcontent-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);display:flex;width:100%;padding:16px 20px;align-items:center;font-size:40px}.title[_ngcontent-%COMP%]{flex-grow:1}.content[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.content[_ngcontent-%COMP%]{height:68px;min-width:486px;max-width:617px;margin-left:30px;padding:9px 30px;border:1px solid var(--current-context)}.placeholder[_ngcontent-%COMP%]{color:grey}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .content[_ngcontent-%COMP%]{margin-left:30px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .content[_ngcontent-%COMP%]{margin-left:0;margin-right:30px}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}',
              ],
            ],
            data: {},
          }));
      function m(e) {
        return l.ac(
          2,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              9,
              "div",
              [["class", "container"]],
              [
                [2, "ui-state--list-horizontal", null],
                [2, "ui-state--list-vertical", null],
                [2, "ui-state--cover-left", null],
                [2, "ui-state--cover-right", null],
                [2, "ui-state--cover-bottom", null],
                [2, "ui-state--button-by", null],
                [2, "ui-state--by-dab-left", null],
                [2, "ui-state--by-dab-right", null],
                [2, "ui-state--lb-dab-left", null],
                [2, "ui-state--lb-dab-right", null],
              ],
              null,
              null,
              null,
              null,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              i.a,
              [[2, a.a], [8, null], [3, i.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (e()(),
            l.yb(
              2,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "title"],
                ["id", "ListFormFieldItemTitle"],
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
              o.b,
              o.a,
            )),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, u.a, r.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              4,
              16384,
              null,
              0,
              c.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            l.xb(
              5,
              245760,
              null,
              0,
              b.a,
              [[6, s.a], d.a, l.h, l.l, l.D, [2, h.a], [2, c.a], [2, p.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
            (e()(),
            l.yb(
              6,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "content"],
                ["id", "ListFormFieldItemContent"],
                ["ttIgnore", ""],
              ],
              [
                [2, "placeholder", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              o.b,
              o.a,
            )),
            l.xb(
              7,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, u.a, r.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              8,
              16384,
              null,
              0,
              c.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            l.xb(
              9,
              245760,
              null,
              0,
              b.a,
              [[6, s.a], d.a, l.h, l.l, l.D, [2, h.a], [2, c.a], [2, p.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, n.uiStateType),
              e(t, 3, 0, "ListFormFieldItemTitle"),
              e(t, 4, 0, !n.developerText),
              e(
                t,
                5,
                0,
                n.developerText,
                "ListFormFieldItemTitle",
                n.nonI18nText,
              ),
              e(t, 7, 0, "ListFormFieldItemContent"),
              e(t, 8, 0, !n.placeholderDeveloperText),
              e(
                t,
                9,
                0,
                n.placeholderDeveloperText,
                "ListFormFieldItemContent",
                n.content || n.placeholderNonI18nText,
              ));
          },
          function (e, t) {
            var n = t.component;
            (e(
              t,
              0,
              0,
              l.Nb(t, 1).uiStateListHorizontal,
              l.Nb(t, 1).uiStateListVertical,
              l.Nb(t, 1).uiStateCoverLeft,
              l.Nb(t, 1).uiStateCoverRight,
              l.Nb(t, 1).uiStateCoverBottom,
              l.Nb(t, 1).uiStateButton,
              l.Nb(t, 1).uiStateByDabLeft,
              l.Nb(t, 1).uiStateByDabRight,
              l.Nb(t, 1).uiStateLbDabLeft,
              l.Nb(t, 1).uiStateLbDabRight,
            ),
              e(
                t,
                2,
                0,
                l.Nb(t, 5).backgroundColor,
                l.Nb(t, 5).fixedNumberOfLines,
                l.Nb(t, 5).mayContainLatinCharsForArabic,
                l.Nb(t, 5).shortenWithEllipsisForArabic,
              ),
              e(
                t,
                6,
                0,
                !n.content,
                l.Nb(t, 9).backgroundColor,
                l.Nb(t, 9).fixedNumberOfLines,
                l.Nb(t, 9).mayContainLatinCharsForArabic,
                l.Nb(t, 9).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
    },
  },
]);
