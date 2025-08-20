(window.webpackJsonp = window.webpackJsonp || []).push([
  [53],
  {
    "5VR/": function (e, n, l) {
      "use strict";
      (l.r(n),
        l.d(n, "PhoneSettingsModuleNgFactory", function () {
          return $l;
        }));
      var t = l("kZht"),
        a = l("ROBh"),
        i = l("YEFf"),
        u = l("YtkY"),
        o = l("Ohay"),
        r = l("P1io"),
        s = l("aehS"),
        c = l("Yi6/"),
        b = l("2DZl"),
        d = l("0Zlr"),
        h = l("IXiK"),
        p = l("d3LF"),
        g = l("4piS"),
        m = (function (e) {
          return ((e.Settings = "Einstellungen"), (e.Phone = "Telefon"), e);
        })({});
      class x {
        constructor(e, n, l, t, a) {
          ((this.phoneService = e),
            (this.routingService = n),
            (this.messageInfoService = l),
            (this.connectivityService = t),
            (this.systemConfigService = a),
            (this.inPhoneContext = !1),
            (this.PhoneSettingsRoute = s.a),
            (this.deviceObjectThreeWayCallingSettingEnum = d.e),
            (this.editLockingParam = g.b),
            (this.phoneSettingsTextIds = m));
        }
        ngOnInit() {
          ((this.inPhoneContext =
            this.routingService.activeAppContextSnapshot === r.w),
            (this.phoneName$ = this.phoneService.deviceName$.pipe(
              Object(u.a)((e) => (0 === e.length ? void 0 : e)),
            )),
            (this.supportsSendingSms$ =
              this.messageInfoService.isSendingPossibleForFocusDevice(h.a.SMS)),
            (this.isRejectAllowed$ = this.supportsSendingSms$.pipe(
              Object(u.a)(
                (e) => e && !this.systemConfigService.isBaseVariant(),
              ),
            )),
            (this.threeWayCallingState$ = this.inPhoneContext
              ? this.phoneService.phones$.pipe(
                  Object(u.a)((e) =>
                    e.focusDevice ? e.focusDevice.threeWayCallingSetting : null,
                  ),
                  Object(o.a)(),
                )
              : Object(a.a)(null)),
            (this.hasFocusdevice$ = this.phoneService.phones$.pipe(
              Object(u.a)((e) => !!e && !!e.focusDevice),
            )));
        }
        togglePhones() {
          this.phoneService.togglePhones();
        }
        setThreeWayCallingSetting(e) {
          this.phoneService.setThreeWayCallingSetting(e ? d.e.ON : d.e.OFF);
        }
      }
      var v = l("bwdy"),
        S = l("HM3f"),
        T = (function (e) {
          return (
            (e.Moon = "Moon"),
            (e.Photograph = "Photograph"),
            (e.Urban = "Urban"),
            (e.Hunt = "Hunt"),
            (e.Voice = "Voice"),
            (e.ClassicPhone = "Classic Phone"),
            (e.Passion = "Passion"),
            (e.SpaceEcho = "Space Echo"),
            (e.Kalimba = "Kalimba"),
            (e.Bells = "Bells"),
            e
          );
        })({});
      const f = [
        T.Moon,
        T.Photograph,
        T.Urban,
        T.Hunt,
        T.Voice,
        T.ClassicPhone,
        T.Passion,
        T.SpaceEcho,
        T.Kalimba,
        T.Bells,
      ];
      var P = l("aiQ1"),
        D = l("I9JC"),
        y = l("Eboi");
      class O {
        constructor(e, n, l, t, a, i) {
          ((this.phoneService = e),
            (this.routingService = n),
            (this.popupManager = l),
            (this.ringtoneNames = f),
            (this.ringtoneEnum = T),
            (this.subscriptions = new v.a()),
            (this.logger = i.getLogger("phone-settings.RingtoneComponent")),
            (this.menuDisabled$ = Object(S.b)(
              t.activeAnnouncement$,
              a.naviAnnouncementActive$,
              this.phoneService.callActive$,
            ).pipe(
              Object(u.a)(([e, n, l]) => {
                const t = !!e || n || l;
                return (
                  this.logger.info("menuDisabled$: " + t),
                  t &&
                    this.logger.info(
                      "menuDisabled$ => active announcements: radio =" +
                        !!e +
                        " navi=" +
                        n +
                        " / active call: " +
                        l,
                    ),
                  t
                );
              }),
              Object(o.a)(),
            )));
        }
        ngOnInit() {
          this.subscriptions.add(
            this.phoneService.phones$
              .pipe(
                Object(u.a)((e) => Object(P.isNullOrUndefined)(e.focusDevice)),
                Object(o.a)(),
              )
              .subscribe((e) => {
                e && this.routingService.goUp();
              }),
          );
        }
        ngOnDestroy() {
          (this.subscriptions.unsubscribe(),
            this.phoneService.stopRingtonePreviewPlayer());
        }
        showDisabledPopup() {
          Object(P.isNullOrUndefined)(this.phoneService.phones.focusDevice)
            ? this.popupManager.request(
                c.Ob.POPUP_TONE_POPUP_TEL_OR_SIM_MISSING,
              )
            : this.popupManager.request(
                this.phoneService.phones.focusDevice.supportsInBandRinging
                  ? c.Ob.POPUP_TONE_POPUP_TEL_TAKEOVER
                  : c.Ob.POPUP_TONE_POPUP_UNAVAILABLE,
              );
        }
        setRingtone(e) {
          this.phoneService.setDeviceRingtone(e).then(() => {
            (this.logger.info(
              "setRingtone: new ringtone was selected. Start ringtone preview player.",
            ),
              this.phoneService.playRingtonePreview(e, !0));
          });
        }
        back() {
          (this.phoneService.stopRingtonePreviewPlayer(),
            this.routingService.goUp());
        }
      }
      var I = l("mzeX"),
        N = l("ZTXN"),
        L = l("QQZH"),
        _ = l("g6G6"),
        C = l("kuMc"),
        E = l("J+dc"),
        M = l("mWib"),
        R = l("TLy2"),
        w = l("BwBJ"),
        k = l("jIqt"),
        A = l("prE9"),
        $ = l("d5RP");
      class j {
        constructor(e, n, l, t, a, i, o, r) {
          ((this.phoneService = e),
            (this.routingService = n),
            (this.radioAnnouncementService = l),
            (this.naviAnnouncementService = t),
            (this.popupManager = a),
            (this.cdr = i),
            (this.ringtoneVolumeSetting = new $.a(
              0,
              0,
              0,
              void 0,
              I.c.NOTAVAILABLE,
            )),
            (this.micSensitivitySetting = new $.a(
              -6,
              6,
              0,
              void 0,
              I.c.NOTAVAILABLE,
            )),
            (this.debounceTime = 2e3),
            (this.PhoneSettingsRoute = s.a),
            (this.dragging = !1),
            (this.ringtoneEnum = T),
            (this.userSetVolume$$ = new N.a()),
            (this.destroyed$$ = new L.a(1)),
            (this.isPreviewPlaying = !1),
            (this.logger = r.getLogger("phone-settings.ToneTelComponent")),
            (this.phoneDeviceId = o.snapshot.queryParams.callDeviceId),
            this.phoneService.phones$
              .pipe(
                Object(u.a)((e) => e.find((e) => e.id === this.phoneDeviceId)),
                Object(C.a)(this.destroyed$$),
              )
              .subscribe((e) => {
                this.phoneDevice = e;
              }));
        }
        ngOnInit() {
          (this.phoneService.phones$
            .pipe(
              Object(u.a)((e) =>
                e.focusDevice ? e.focusDevice.microphoneGain : void 0,
              ),
              Object(o.a)(),
              Object(C.a)(this.destroyed$$),
            )
            .subscribe((e) => {
              (this.logger.info("microphone sensitivity:", e),
                void 0 !== e
                  ? ((this.micSensitivitySetting.currentVal = e),
                    delete this.micSensitivitySetting.restrictionReason)
                  : ((this.micSensitivitySetting.currentVal = 0),
                    (this.micSensitivitySetting.restrictionReason =
                      I.c.NOTAVAILABLE)),
                this.cdr.detectChanges());
            }),
            this.phoneService.phones$
              .pipe(
                Object(u.a)((e) =>
                  e.focusDevice
                    ? e.focusDevice.isMessageRingtoneMuted &&
                      e.focusDevice.isCallRingtoneMuted
                    : void 0,
                ),
                Object(C.a)(this.destroyed$$),
              )
              .subscribe((e) => {
                ((this.muted = e),
                  e &&
                    (this.logger.info(
                      "Phone ringtone has been muted => ringtone preview needs to be stopped.",
                    ),
                    this.phoneService.stopRingtonePreviewPlayer()));
              }),
            this.phoneService.callActive$
              .pipe(Object(C.a)(this.destroyed$$))
              .subscribe((e) => {
                ((this.callActive = e), this.cdr.detectChanges());
              }),
            (this.focusDeviceName$ = this.phoneService.deviceName$.pipe(
              Object(u.a)((e) => (e && e.length > 0 ? e : void 0)),
              Object(o.a)(),
            )),
            this.phoneService.ringtoneIndex$
              .pipe(Object(C.a)(this.destroyed$$))
              .subscribe(
                (e) => {
                  (void 0 !== e && e >= 0 && e < f.length
                    ? ((this.selectedRingtone = f[e]),
                      (this.selectedRingtoneIndex = e))
                    : (this.logger.error("invalid rintone index"),
                      (this.selectedRingtone = ""),
                      (this.selectedRingtoneIndex = void 0)),
                    this.cdr.detectChanges());
                },
                (e) => {
                  this.logger.error(
                    "Failed to retrieve system ringtone: \nReason: " + e,
                  );
                },
              ),
            (this.doNotAllowRingtoneChanges$ = Object(S.b)(
              this.radioAnnouncementService.activeAnnouncement$,
              this.naviAnnouncementService.naviAnnouncementActive$,
              this.phoneService.callActive$,
              this.phoneService.ringtoneIndex$,
            ).pipe(
              Object(u.a)(([e, n, l, t]) => {
                const a = !!e || n || l || Object(c.rd)(t);
                return (
                  this.logger.info("doNotAllowRingtoneChanges$: " + a),
                  a &&
                    this.logger.info(
                      "doNotAllowRingtoneChanges$ => active announcements: radio =" +
                        e +
                        " navi=" +
                        n +
                        " / active call: " +
                        l +
                        " / selected ringtone: " +
                        t,
                    ),
                  (this.announcementActive = !!e || n),
                  a
                );
              }),
              Object(o.a)(),
            )));
          const e = Object(_.a)(
              this.phoneService.ringtonePreviewVolume$.pipe(Object(E.a)(1)),
              this.phoneService.ringtonePreviewVolume$.pipe(Object(M.a)(500)),
            ),
            n = this.userSetVolume$$.pipe(
              Object(R.a)(() =>
                Object(a.a)(!0).pipe(
                  Object(w.a)(this.debounceTime),
                  Object(k.a)(!1),
                ),
              ),
              Object(k.a)(!0),
            );
          (Object(S.b)(e, n)
            .pipe(Object(C.a)(this.destroyed$$))
            .subscribe(
              ([e, n]) => {
                n &&
                  (this.logger.info("take over new volume setting:", e),
                  e
                    ? ((this.ringtoneVolumeSetting.currentVal = e.value || 0),
                      (this.ringtoneVolumeSetting.maxVal = e.maximum || 0),
                      (this.ringtoneVolumeSetting.rsiDataId = e.id),
                      delete this.ringtoneVolumeSetting.restrictionReason)
                    : ((this.ringtoneVolumeSetting.currentVal = 0),
                      (this.ringtoneVolumeSetting.maxVal = 0),
                      (this.ringtoneVolumeSetting.rsiDataId = void 0),
                      (this.ringtoneVolumeSetting.restrictionReason =
                        I.c.NOTAVAILABLE)),
                  this.cdr.detectChanges());
              },
              (e) => {
                this.logger.error(
                  "Failed to retrieve ringtone preview volume: \nReason: " + e,
                );
              },
            ),
            this.phoneService.ringtonePreview$
              .pipe(
                Object(u.a)(
                  (e) =>
                    e &&
                    Object(c.wd)(e.state) &&
                    (e.state === d.j.PLAYINGONCE ||
                      e.state === d.j.PLAYINGREPEAT),
                ),
                Object(o.a)(),
                Object(C.a)(this.destroyed$$),
              )
              .subscribe((e) => {
                this.isPreviewPlaying = e;
              }),
            this.userSetVolume$$
              .pipe(
                Object(o.a)(),
                Object(A.a)(50),
                Object(C.a)(this.destroyed$$),
              )
              .subscribe((e) => {
                this.processRingtoneVolumeUpdate(e);
              }));
        }
        ngOnDestroy() {
          (this.phoneService.stopRingtonePreviewPlayer(),
            this.userSetVolume$$.complete(),
            this.destroyed$$.next(),
            this.destroyed$$.complete());
        }
        showCustomDisabledPopupReasonConditionally(e) {
          e && this.handleDefaultDisable();
        }
        handleDefaultDisable(e) {
          this.announcementActive
            ? this.popupManager.request(c.Ob.POPUP_TONE_POPUP_UNAVAILABLE)
            : this.phoneService.hasConnectedPhones
              ? this.phoneService.phones &&
                this.phoneService.phones.focusDevice &&
                this.phoneService.phones.focusDevice.supportsInBandRinging
                ? this.popupManager.request(c.Ob.POPUP_TONE_POPUP_TEL_TAKEOVER)
                : e && Object(c.wd)(e.restrictionReason) && e.restrictionPopup
                  ? this.popupManager.request(e.restrictionPopup.toString())
                  : this.popupManager.request(c.Ob.POPUP_TONE_POPUP_UNAVAILABLE)
              : this.popupManager.request(c.Ob.POPUP_TONE_POPUP_TEL_MISSING);
        }
        deactivatedMicSensitivityTapped() {
          const e = this.micSensitivitySetting;
          (this.logger.info(
            "deactivatedMicSensitivityTapped: SoundSettingsSliderModel",
            e,
          ),
            Object(c.rd)(e.restrictionReason) && !this.callActive
              ? this.popupManager.request(c.Ob.POPUP_TONE_POPUP_TEL_ACTIVECALL)
              : Object(c.wd)(e.restrictionReason) && e.restrictionPopup
                ? this.popupManager.request(e.restrictionPopup.toString())
                : this.popupManager.request(c.Ob.POPUP_TONE_POPUP_UNAVAILABLE));
        }
        updateMicSensitivity(e) {
          e !== this.micSensitivitySetting.currentVal &&
            ((this.micSensitivitySetting.currentVal = e),
            this.phoneService.setMicrophoneSensitivity(
              e,
              this.phoneDevice ? this.phoneDevice.id : void 0,
            ),
            this.cdr.detectChanges());
        }
        processVolumeSliderDragEnd() {
          ((this.dragging = !1),
            Object(c.wd)(this.selectedRingtoneIndex) &&
              (this.logger.info(
                "processVolumeSliderDragEnd => ringtone preview needs to play out after dragging ended (play once).",
              ),
              this.phoneService.playRingtonePreview(
                this.selectedRingtoneIndex,
                !1,
              )));
        }
        processVolumeSliderTap(e) {
          e > 0 &&
            !this.isPreviewPlaying &&
            Object(c.wd)(this.selectedRingtoneIndex) &&
            (this.logger.info(
              "processVolumeSliderTap => ringtone preview needs to be (re)startet (play once).",
            ),
            this.phoneService.playRingtonePreview(
              this.selectedRingtoneIndex,
              !1,
            ));
        }
        processRingtoneVolumeUpdate(e) {
          (((0 === e && !this.muted) || (e > 0 && this.muted)) &&
            (this.logger.info(
              "processRingtoneVolumeUpdate => phone ringtone needs to be " +
                (e > 0 ? "un" : "") +
                "muted",
            ),
            this.phoneService.toggleMuteRingtone(0 === e)),
            e !== this.ringtoneVolumeSetting.currentVal &&
              (this.dragging &&
                e > 0 &&
                !this.isPreviewPlaying &&
                Object(c.wd)(this.selectedRingtoneIndex) &&
                (this.logger.info(
                  "processRingtoneVolumeUpdate => ringtone preview needs to be (re)startet (play in loop).",
                ),
                this.phoneService.playRingtonePreview(
                  this.selectedRingtoneIndex,
                  !0,
                )),
              this.phoneService.setRingtoneAndMessageVolume(e)));
        }
      }
      var V = l("AEBN"),
        B = l("6qsK"),
        U = l("H+fK");
      class z {
        constructor(e, n, l, t, a) {
          ((this.phoneService = e),
            (this.configService = n),
            (this.routingService = l),
            (this.textInputService = t),
            (this.contextId = V.e.TIF_ID_04_ENTER_MAILBOX_NUMBER),
            (this.popupIds = c.Ob),
            (this.logger = a.getLogger("settings.EditMailbox")));
        }
        ngOnInit() {
          const e = this.phoneService.phones.focusDevice;
          this.inputField$ = this.textInputService.getInputField(
            "mailbox-number",
            this.contextId,
            (e && e.mailboxNumber) || "",
          );
        }
        onAccept(e) {
          e
            ? this.phoneService
                .setMailboxNumber(e)
                .then(() => {
                  this.goToMain();
                })
                .catch((e) => {
                  (this.logger.error(`Failed to set mailbox number: ${e}`),
                    this.goToMain());
                })
            : this.logger.error(
                "onAccept: Could not set mailbox number due to invalid text",
              );
        }
        goToMain() {
          this.routingService.activeAppContextSnapshot === r.w
            ? this.routingService.goTo(B.b.Main)
            : this.routingService.activeAppContextSnapshot === r.z &&
              this.routingService.goTo(U.a.Main);
        }
      }
      class F {
        constructor(e, n) {
          ((this.globalRoutingService = e),
            (this.dataModule$ = n.dataModuleObject$));
        }
      }
      var Y = l("AYqq");
      class W {
        constructor(e, n, l, t, a) {
          ((this.phoneService = e),
            (this.rejectWithSmsService = n),
            (this.textInputService = l),
            (this.i18nService = t),
            (this.contextId = V.e.TIF_ID_09_CREATE_MESSAGING_TEMPLATE),
            (this.logger = a.getLogger(
              "phone-settings.EditRejectCallSmsTextComponent",
            )));
        }
        ngOnInit() {
          this.inputField$ = this.phoneService.phones$.pipe(
            Object(u.a)((e) => (e.focusDevice ? e.focusDevice.id : void 0)),
            Object(o.a)(),
            Object(R.a)((e) => {
              const n = this.phoneService.phones.focusDevice,
                l =
                  (n && n.rejectCallText) ||
                  this.i18nService.getConstantTranslation(Y.a);
              return (
                this.logger.info(
                  `focusDevice changed to ${e}, update SMS text to "${l}"`,
                ),
                this.textInputService.getInputField(
                  "reject-text",
                  this.contextId,
                  l,
                )
              );
            }),
          );
        }
        ok(e) {
          this.rejectWithSmsService.setRejectCallText(e);
        }
      }
      var q = l("Wm/T");
      class K {}
      var X = l("C9Ky"),
        G = l("VUTu"),
        H = l("fu7d"),
        Z = l("bou3"),
        Q = l("yNay"),
        J = l("nK9R"),
        ee = l("qzuC"),
        ne = l("8yWk"),
        le = l("8WOv"),
        te = l("bMuc"),
        ae = l("ZIdM"),
        ie = l("3bpu"),
        ue = l("6zvu"),
        oe = l("VcEz"),
        re = l("OtM5"),
        se = l("y9xZ"),
        ce = l("+sw+"),
        be = l("BMrr"),
        de = l("IEns"),
        he = l("1pak"),
        pe = l("P+G5"),
        ge = l("z6QT"),
        me = l("flsk"),
        xe = l("FQEI"),
        ve = l("O82V"),
        Se = l("Eln4"),
        Te = l("evAh"),
        fe = l("zPMi"),
        Pe = l("CpzC"),
        De = l("0Bsn"),
        ye = l("5GjX"),
        Oe = l("mYyF"),
        Ie = l("v98a"),
        Ne = l("aOG8"),
        Le = l("Krzs"),
        _e = l("8TlW"),
        Ce = l("bmFL"),
        Ee = l("Xo58"),
        Me = l("m3Ja"),
        Re = l("r+e+"),
        we = l("ijxY"),
        ke = l("QSdq"),
        Ae = l("D0GA"),
        $e = l("An66"),
        je = l("4XZL"),
        Ve = l("9ZFG"),
        Be = l("6480"),
        Ue = l("FfND"),
        ze = l("oeT7"),
        Fe = l("t7cT"),
        Ye = l("URLa"),
        We = l("E7cc"),
        qe = l("N2Hj"),
        Ke = l("UbWD"),
        Xe = l("2rvh"),
        Ge = l("odRV"),
        He = l("Udyh"),
        Ze = l("I3ve"),
        Qe = l("qiAR"),
        Je = l("007S"),
        en = l("oxWk"),
        nn = l("Tr//"),
        ln = l("0qMr"),
        tn = l("Z2XD"),
        an = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column}.list[_ngcontent-%COMP%], .screen[_ngcontent-%COMP%]{height:100%;position:relative}.list[_ngcontent-%COMP%]{width:100%;flex:1 1 0}.list__item[_ngcontent-%COMP%]{display:flex;align-items:center;height:100px;padding:0 20px;font-size:40px}.component-layout-latin[_nghost-%COMP%]   .list__item[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list__item[_ngcontent-%COMP%]{text-align:left}.component-layout-arabic[_nghost-%COMP%]   .list__item[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list__item[_ngcontent-%COMP%]{text-align:right}",
            ],
          ],
          data: {},
        });
      function un(e) {
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
              "au3-title-line",
              [["id", "TitleLine"]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              G.b,
              G.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              J.a,
              [ee.a, ne.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryId: [1, "primaryId"],
                primaryIdEnumType: [2, "primaryIdEnumType"],
                primaryNonI18nText: [3, "primaryNonI18nText"],
                secondaryDeveloperText: [4, "secondaryDeveloperText"],
                secondaryId: [5, "secondaryId"],
                secondaryIdEnumType: [6, "secondaryIdEnumType"],
              },
              null,
            ),
            (e()(),
            t.yb(
              3,
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
              le.b,
              le.a,
            )),
            t.xb(4, 147456, null, 0, te.a, [t.l, t.z], null, null),
            t.xb(
              5,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              6,
              147456,
              null,
              0,
              ae.a,
              [te.a, [2, ie.a], [2, H.a], Q.a],
              null,
              null,
            ),
            t.xb(
              7,
              212992,
              null,
              0,
              ue.a,
              [
                Q.a,
                oe.b,
                ae.a,
                [2, ie.a],
                [2, H.a],
                [2, re.a],
                [2, se.a],
                [2, ce.a],
                t.z,
                be.a,
                t.l,
                [2, de.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              he.a,
              [Q.a, pe.a, t.l, [2, ue.a], [2, re.a]],
              null,
              null,
            ),
            t.Sb(131584, null, ge.a, ge.a, [[3, ge.a]]),
            t.xb(
              10,
              4407296,
              null,
              0,
              me.a,
              [
                t.l,
                xe.a,
                t.h,
                ge.a,
                [2, ve.a],
                [2, ie.b],
                [2, ie.a],
                [2, Se.a],
                [2, Te.a],
              ],
              null,
              null,
            ),
            t.xb(
              11,
              49152,
              null,
              0,
              fe.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              Pe.a,
              [
                [2, ue.a],
                [2, re.a],
                [2, De.a],
                [2, me.a],
                [2, ye.b],
                t.l,
                Oe.a,
                Ie.b,
              ],
              null,
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              Ne.a,
              [[2, me.a], [2, ue.a], [2, oe.b], Le.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "TitleLine"),
              e(
                n,
                2,
                0,
                n.context.mib3Let && l.inPhoneContext
                  ? null
                  : l.inPhoneContext
                    ? l.phoneSettingsTextIds.Phone
                    : l.phoneSettingsTextIds.Settings,
                n.context.mib3Let && l.inPhoneContext
                  ? null
                  : l.inPhoneContext
                    ? l.phoneSettingsTextIds.Phone
                    : l.phoneSettingsTextIds.Settings,
                l.phoneSettingsTextIds,
                l.inPhoneContext ? n.context.mib3Let : null,
                l.inPhoneContext
                  ? l.phoneSettingsTextIds.Settings
                  : l.phoneSettingsTextIds.Phone,
                l.inPhoneContext
                  ? l.phoneSettingsTextIds.Settings
                  : l.phoneSettingsTextIds.Phone,
                l.phoneSettingsTextIds,
              ),
              e(n, 5, 0, "BackButton"),
              e(n, 7, 0),
              e(n, 10, 0),
              e(n, 11, 0, !1, "E163_Backbutton.webp"));
          },
          function (e, n) {
            (e(
              n,
              0,
              0,
              t.Nb(n, 2).hideLeftBorder,
              t.Nb(n, 2).hideDividingBorders,
            ),
              e(
                n,
                3,
                0,
                t.Nb(n, 10).markerClassEnabled,
                t.Nb(n, 11).useItemPlaceholder,
              ));
          },
        );
      }
      function on(e) {
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
              "div",
              [["class", "list__item"]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t = !1 !== e.component.togglePhones() && t),
                  t
                );
              },
              null,
              null,
            )),
            t.xb(1, 147456, null, 0, te.a, [t.l, t.z], null, null),
            t.xb(
              2,
              147456,
              null,
              0,
              ae.a,
              [te.a, [2, ie.a], [2, H.a], Q.a],
              null,
              null,
            ),
            t.xb(
              3,
              212992,
              null,
              0,
              ue.a,
              [
                Q.a,
                oe.b,
                ae.a,
                [2, ie.a],
                [2, H.a],
                [2, re.a],
                [2, se.a],
                [2, ce.a],
                t.z,
                be.a,
                t.l,
                [2, de.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, ge.a, ge.a, [[3, ge.a]]),
            t.xb(
              5,
              4407296,
              null,
              0,
              me.a,
              [
                t.l,
                xe.a,
                t.h,
                ge.a,
                [2, ve.a],
                [2, ie.b],
                [2, ie.a],
                [2, Se.a],
                [2, Te.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              147456,
              null,
              0,
              Pe.a,
              [
                [2, ue.a],
                [2, re.a],
                [2, De.a],
                [2, me.a],
                [2, ye.b],
                t.l,
                Oe.a,
                Ie.b,
              ],
              null,
              null,
            ),
            t.xb(
              7,
              147456,
              null,
              0,
              Ne.a,
              [[2, me.a], [2, ue.a], [2, oe.b], Le.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              8,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [["id", "TogglePhones"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              _e.b,
              _e.a,
            )),
            t.xb(
              9,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              10,
              16384,
              null,
              0,
              Ce.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(11, { secondPhoneName: 0 }),
            t.xb(
              12,
              245760,
              null,
              0,
              Ee.a,
              [[6, H.a], Me.a, t.h, t.l, t.D, [2, Re.a], [2, we.a], [2, Ce.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, n) {
            (e(n, 3, 0), e(n, 5, 0), e(n, 9, 0, "TogglePhones"));
            var l = e(
              n,
              11,
              0,
              null == n.context.ngIf ? null : n.context.ngIf.name,
            );
            (e(n, 10, 0, l),
              e(
                n,
                12,
                0,
                "Telefone tauschen: {{secondPhoneName}} in die Anzeige holen",
                "TogglePhones",
                1,
              ));
          },
          function (e, n) {
            (e(n, 0, 0, t.Nb(n, 5).markerClassEnabled),
              e(
                n,
                8,
                0,
                t.Nb(n, 12).backgroundColor,
                t.Nb(n, 12).fixedNumberOfLines,
                t.Nb(n, 12).mayContainLatinCharsForArabic,
                t.Nb(n, 12).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function rn(e) {
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
              "au3-list-switch-item",
              [
                ["class", "list__item"],
                [
                  "developerText",
                  "Telefonlisten nur im SCON anzeigen (Privatmodus)",
                ],
                ["id", "PrivacyMode"],
              ],
              null,
              [[null, "valueChange"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "valueChange" === n &&
                    (t =
                      !1 !== e.component.phoneService.setConfidentialMode(l) &&
                      t),
                  t
                );
              },
              ke.b,
              ke.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              Ae.a,
              [[2, re.a]],
              {
                fixedNumberOfLines: [0, "fixedNumberOfLines"],
                developerText: [1, "developerText"],
                value: [2, "value"],
              },
              { valueChange: "valueChange" },
            ),
            t.Pb(131072, $e.b, [t.h]),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "PrivacyMode"),
              e(
                n,
                2,
                0,
                1,
                "Telefonlisten nur im SCON anzeigen (Privatmodus)",
                !!t.Yb(
                  n,
                  2,
                  2,
                  t
                    .Nb(n, 3)
                    .transform(
                      l.phoneService.focusPhoneConfidentialModeActive$,
                    ),
                ),
              ));
          },
          null,
        );
      }
      function sn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["id", "RejectWithSMS"],
                ["titleDeveloperText", "Ablehnen mit SMS Text"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              je.b,
              je.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              re.a,
              [Ve.a, t.h, Q.a, [3, re.a]],
              null,
              null,
            ),
            t.xb(2, 147456, null, 0, te.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              ae.a,
              [te.a, [2, ie.a], [2, H.a], Q.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              ue.a,
              [
                Q.a,
                oe.b,
                ae.a,
                [2, ie.a],
                [2, H.a],
                [2, re.a],
                [2, se.a],
                [2, ce.a],
                t.z,
                be.a,
                t.l,
                [2, de.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              Be.a,
              [Ue.a, ze.i, re.a, ue.a, Be.b, Fe.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.Sb(131584, null, ge.a, ge.a, [[3, ge.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              me.a,
              [
                t.l,
                xe.a,
                t.h,
                ge.a,
                [2, ve.a],
                [2, ie.b],
                [2, ie.a],
                [2, Se.a],
                [2, Te.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              114688,
              null,
              0,
              Ye.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              Pe.a,
              [
                [2, ue.a],
                [2, re.a],
                [2, De.a],
                [2, me.a],
                [2, ye.b],
                t.l,
                Oe.a,
                Ie.b,
              ],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Ne.a,
              [[2, me.a], [2, ue.a], [2, oe.b], Le.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 3, 0, "RejectWithSMS"),
              e(n, 5, 0),
              e(n, 6, 0, l.PhoneSettingsRoute.children.RejectCallDefaultSms),
              e(n, 8, 0),
              e(n, 9, 0, "Ablehnen mit SMS Text"));
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
      function cn(e) {
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
              "au3-list-switch-item",
              [
                ["class", "list__item"],
                ["developerText", "Dreierkonferenz-Service"],
                ["id", "ThreeWayCalling"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "valueChange"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "valueChange" === n &&
                    (t = !1 !== e.component.setThreeWayCallingSetting(l) && t),
                  t
                );
              },
              ke.b,
              ke.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              147456,
              null,
              0,
              re.a,
              [Ve.a, t.h, Q.a, [3, re.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              3,
              49152,
              null,
              0,
              Ae.a,
              [[2, re.a]],
              {
                fixedNumberOfLines: [0, "fixedNumberOfLines"],
                developerText: [1, "developerText"],
                value: [2, "value"],
              },
              { valueChange: "valueChange" },
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "ThreeWayCalling"),
              e(
                n,
                2,
                0,
                n.parent.context.mib3Let ===
                  l.deviceObjectThreeWayCallingSettingEnum.NOTSUPPORTEDBYDEVICE,
              ),
              e(
                n,
                3,
                0,
                1,
                "Dreierkonferenz-Service",
                n.parent.context.mib3Let ===
                  l.deviceObjectThreeWayCallingSettingEnum.ON,
              ));
          },
          function (e, n) {
            e(n, 0, 0, t.Nb(n, 2).combinedDisabled, t.Nb(n, 2).useBrighterIcon);
          },
        );
      }
      function bn(e) {
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
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, cn)),
            t.xb(
              2,
              16384,
              null,
              0,
              $e.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), t.hb(0, null, null, 0)),
          ],
          function (e, n) {
            e(n, 2, 0, null != n.context.mib3Let);
          },
          null,
        );
      }
      function dn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["id", "RingtoneVolume"],
                [
                  "titleDeveloperText",
                  "Rufton- und Lautst\xe4rkeeinstellungen",
                ],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              je.b,
              je.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              re.a,
              [Ve.a, t.h, Q.a, [3, re.a]],
              null,
              null,
            ),
            t.xb(2, 147456, null, 0, te.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              ae.a,
              [te.a, [2, ie.a], [2, H.a], Q.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              ue.a,
              [
                Q.a,
                oe.b,
                ae.a,
                [2, ie.a],
                [2, H.a],
                [2, re.a],
                [2, se.a],
                [2, ce.a],
                t.z,
                be.a,
                t.l,
                [2, de.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              Be.a,
              [Ue.a, ze.i, re.a, ue.a, Be.b, Fe.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.Sb(131584, null, ge.a, ge.a, [[3, ge.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              me.a,
              [
                t.l,
                xe.a,
                t.h,
                ge.a,
                [2, ve.a],
                [2, ie.b],
                [2, ie.a],
                [2, Se.a],
                [2, Te.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              114688,
              null,
              0,
              Ye.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              Pe.a,
              [
                [2, ue.a],
                [2, re.a],
                [2, De.a],
                [2, me.a],
                [2, ye.b],
                t.l,
                Oe.a,
                Ie.b,
              ],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Ne.a,
              [[2, me.a], [2, ue.a], [2, oe.b], Le.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 3, 0, "RingtoneVolume"),
              e(n, 5, 0),
              e(n, 6, 0, l.PhoneSettingsRoute.children.ToneTel),
              e(n, 8, 0),
              e(n, 9, 0, "Rufton- und Lautst\xe4rkeeinstellungen"));
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
      function hn(e) {
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
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["id", "ChangeMailboxNumber"],
                ["titleDeveloperText", "Mailboxnummer bearbeiten"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              je.b,
              je.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              re.a,
              [Ve.a, t.h, Q.a, [3, re.a]],
              null,
              null,
            ),
            t.xb(2, 147456, null, 0, te.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              ae.a,
              [te.a, [2, ie.a], [2, H.a], Q.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              ue.a,
              [
                Q.a,
                oe.b,
                ae.a,
                [2, ie.a],
                [2, H.a],
                [2, re.a],
                [2, se.a],
                [2, ce.a],
                t.z,
                be.a,
                t.l,
                [2, de.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              Be.a,
              [Ue.a, ze.i, re.a, ue.a, Be.b, Fe.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.Sb(131584, null, ge.a, ge.a, [[3, ge.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              me.a,
              [
                t.l,
                xe.a,
                t.h,
                ge.a,
                [2, ve.a],
                [2, ie.b],
                [2, ie.a],
                [2, Se.a],
                [2, Te.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              114688,
              null,
              0,
              Ye.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
            t.xb(
              10,
              671744,
              null,
              0,
              We.a,
              [re.a, ze.i, [2, ze.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Pe.a,
              [
                [2, ue.a],
                [2, re.a],
                [2, De.a],
                [2, me.a],
                [2, ye.b],
                t.l,
                Oe.a,
                Ie.b,
              ],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              Ne.a,
              [[2, me.a], [2, ue.a], [2, oe.b], Le.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 3, 0, "ChangeMailboxNumber"),
              e(n, 5, 0),
              e(n, 6, 0, l.PhoneSettingsRoute.children.MailboxEdit),
              e(n, 8, 0),
              e(n, 9, 0, "Mailboxnummer bearbeiten"),
              e(n, 10, 0, l.editLockingParam));
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
      function pn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              33,
              "au3-list",
              [
                ["class", "list"],
                ["id", "PhoneSettingsList"],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              qe.b,
              qe.a,
            )),
            t.Sb(6144, null, Ke.a, null, [Xe.a]),
            t.xb(
              2,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 16384, null, 0, Ge.a, [t.l], null, null),
            t.xb(
              4,
              12828672,
              null,
              1,
              Xe.a,
              [
                [2, He.a],
                [2, Ze.a],
                [8, null],
                [2, H.a],
                [2, Qe.a],
                [2, Je.a],
                [2, oe.b],
                ze.i,
                t.z,
                t.h,
                Q.a,
                en.a,
                nn.a,
                [2, xe.a],
                ie.a,
                [2, ze.a],
              ],
              null,
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (e()(), t.hb(16777216, [[1, 2]], 0, 2, null, on)),
            t.xb(
              7,
              16384,
              null,
              0,
              $e.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Pb(131072, $e.b, [t.h]),
            (e()(), t.hb(16777216, [[1, 2]], 0, 1, null, rn)),
            t.xb(
              10,
              16384,
              null,
              0,
              $e.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], 0, 2, null, sn)),
            t.xb(
              12,
              16384,
              null,
              0,
              $e.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Pb(131072, $e.b, [t.h]),
            (e()(), t.hb(16777216, [[1, 2]], 0, 2, null, bn)),
            t.xb(
              15,
              16384,
              null,
              0,
              ln.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, $e.b, [t.h]),
            (e()(), t.hb(16777216, [[1, 2]], 0, 1, null, dn)),
            t.xb(
              18,
              16384,
              null,
              0,
              $e.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], 0, 1, null, hn)),
            t.xb(
              20,
              16384,
              null,
              0,
              $e.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            t.yb(
              21,
              0,
              null,
              0,
              12,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["id", "CarPhoneSerialNumber"],
                [
                  "titleDeveloperText",
                  "Seriennummer des Autotelefons bzw. Datenmoduls",
                ],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              je.b,
              je.a,
            )),
            t.xb(
              22,
              147456,
              null,
              0,
              re.a,
              [Ve.a, t.h, Q.a, [3, re.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.Pb(131072, $e.b, [t.h]),
            t.xb(24, 147456, null, 0, te.a, [t.l, t.z], null, null),
            t.xb(
              25,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              26,
              147456,
              null,
              0,
              ae.a,
              [te.a, [2, ie.a], [2, H.a], Q.a],
              null,
              null,
            ),
            t.xb(
              27,
              212992,
              null,
              0,
              ue.a,
              [
                Q.a,
                oe.b,
                ae.a,
                [2, ie.a],
                [2, H.a],
                [2, re.a],
                [2, se.a],
                [2, ce.a],
                t.z,
                be.a,
                t.l,
                [2, de.a],
              ],
              null,
              null,
            ),
            t.xb(
              28,
              671744,
              null,
              0,
              Be.a,
              [Ue.a, ze.i, re.a, ue.a, Be.b, Fe.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.Sb(131584, null, ge.a, ge.a, [[3, ge.a]]),
            t.xb(
              30,
              4407296,
              null,
              0,
              me.a,
              [
                t.l,
                xe.a,
                t.h,
                ge.a,
                [2, ve.a],
                [2, ie.b],
                [2, ie.a],
                [2, Se.a],
                [2, Te.a],
              ],
              null,
              null,
            ),
            t.xb(
              31,
              114688,
              null,
              0,
              Ye.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
            t.xb(
              32,
              147456,
              null,
              0,
              Pe.a,
              [
                [2, ue.a],
                [2, re.a],
                [2, De.a],
                [2, me.a],
                [2, ye.b],
                t.l,
                Oe.a,
                Ie.b,
              ],
              null,
              null,
            ),
            t.xb(
              33,
              147456,
              null,
              0,
              Ne.a,
              [[2, me.a], [2, ue.a], [2, oe.b], Le.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l,
              a = n.component;
            (e(n, 2, 0, "PhoneSettingsList"),
              e(n, 4, 0),
              e(
                n,
                7,
                0,
                a.phoneService.twoPhonesSupported &&
                  t.Yb(n, 7, 0, t.Nb(n, 8).transform(a.phoneService.phone2$)),
              ),
              e(n, 10, 0, a.phoneService.isSconTelephonyCoded),
              e(
                n,
                12,
                0,
                t.Yb(n, 12, 0, t.Nb(n, 13).transform(a.isRejectAllowed$)),
              ),
              e(
                n,
                15,
                0,
                t.Yb(n, 15, 0, t.Nb(n, 16).transform(a.threeWayCallingState$)),
              ),
              e(n, 18, 0, n.context.mib3Let),
              e(n, 20, 0, n.context.mib3Let),
              e(
                n,
                22,
                0,
                (null ==
                (l = t.Yb(
                  n,
                  22,
                  0,
                  t
                    .Nb(n, 23)
                    .transform(a.connectivityService.dataModuleObject$),
                ))
                  ? null
                  : l.imei.length) < 1,
              ),
              e(n, 25, 0, "CarPhoneSerialNumber"),
              e(n, 27, 0),
              e(n, 28, 0, a.PhoneSettingsRoute.children.DisplayImei),
              e(n, 30, 0),
              e(n, 31, 0, "Seriennummer des Autotelefons bzw. Datenmoduls"));
          },
          function (e, n) {
            (e(n, 0, 0, t.Nb(n, 4).showLineNumbers),
              e(
                n,
                21,
                0,
                t.Nb(n, 22).combinedDisabled,
                t.Nb(n, 22).useBrighterIcon,
                t.Nb(n, 30).markerClassEnabled,
              ));
          },
        );
      }
      function gn(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              8,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:PHONE_SETUP_MAIN"],
              ],
              null,
              null,
              null,
              tn.b,
              tn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, se.a, [Q.a], { id: [0, "id"] }, null),
            (e()(), t.hb(16777216, null, 0, 2, null, un)),
            t.xb(
              4,
              16384,
              null,
              0,
              ln.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, $e.b, [t.h]),
            (e()(), t.hb(16777216, null, 0, 2, null, pn)),
            t.xb(
              7,
              16384,
              null,
              0,
              ln.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, $e.b, [t.h]),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "Screen:PHONE_SETUP_MAIN"),
              e(n, 2, 0, "Screen:PHONE_SETUP_MAIN"),
              e(n, 4, 0, t.Yb(n, 4, 0, t.Nb(n, 5).transform(l.phoneName$))),
              e(
                n,
                7,
                0,
                t.Yb(n, 7, 0, t.Nb(n, 8).transform(l.hasFocusdevice$)),
              ));
          },
          null,
        );
      }
      function mn(e) {
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
              "au3-phone-settings",
              [],
              null,
              null,
              null,
              gn,
              an,
            )),
            t.xb(1, 114688, null, 0, x, [i.c, Ue.a, p.a, b.a, Z.a], null, null),
          ],
          function (e, n) {
            e(n, 1, 0);
          },
          null,
        );
      }
      var xn = t.ub("au3-phone-settings", x, mn, {}, {}, []),
        vn = l("nSSr"),
        Sn = l("8i5V"),
        Tn = l("KczA"),
        fn = l("UaS1"),
        Pn = l("u0hB"),
        Dn = t.wb({
          encapsulation: 0,
          styles: [["[_nghost-%COMP%]{display:block;width:100%;height:100%}"]],
          data: {},
        });
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
              2,
              "au3-enter-phone-number",
              [],
              null,
              [
                [null, "onOk"],
                [null, "onBack"],
              ],
              function (e, n, l) {
                var t = !0,
                  a = e.component;
                return (
                  "onOk" === n && (t = !1 !== a.onAccept(l) && t),
                  "onBack" === n && (t = !1 !== a.routingService.goUp() && t),
                  t
                );
              },
              vn.b,
              vn.a,
            )),
            t.xb(
              1,
              573440,
              null,
              0,
              Sn.a,
              [Tn.a, Ve.a],
              {
                inputField: [0, "inputField"],
                placeholderDeveloperText: [1, "placeholderDeveloperText"],
                descriptionNonI18nTitle: [2, "descriptionNonI18nTitle"],
                descriptionText: [3, "descriptionText"],
                primaryNonI18nTitle: [4, "primaryNonI18nTitle"],
                secondaryDeveloperTitle: [5, "secondaryDeveloperTitle"],
                buttonText: [6, "buttonText"],
                contextId: [7, "contextId"],
              },
              { onOk: "onOk", onBack: "onBack" },
            ),
            t.Pb(131072, $e.b, [t.h]),
          ],
          function (e, n) {
            var l = n.component;
            e(
              n,
              1,
              0,
              t.Yb(n, 1, 0, t.Nb(n, 2).transform(l.inputField$)),
              "Nummerneingabe",
              n.context.mib3Let,
              "Bitte geben Sie Ihre Mailboxnummer ein.",
              n.context.mib3Let,
              "Mailbox bearbeiten",
              "OK",
              l.contextId,
            );
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
              6,
              "au3-screen",
              [
                ["id", "Screen:PHONE_SETUP_MAILBOX_EDIT"],
                ["ttDisplayVariant", ""],
              ],
              null,
              null,
              null,
              tn.b,
              tn.a,
            )),
            t.xb(1, 16384, null, 0, fn.a, [], null, null),
            t.xb(
              2,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [6, fn.a]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 4440064, null, 0, se.a, [Q.a], { id: [0, "id"] }, null),
            (e()(), t.hb(16777216, null, 0, 2, null, yn)),
            t.xb(
              5,
              16384,
              null,
              0,
              ln.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, $e.b, [t.h]),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 2, 0, "Screen:PHONE_SETUP_MAILBOX_EDIT"),
              e(n, 3, 0, "Screen:PHONE_SETUP_MAILBOX_EDIT"),
              e(
                n,
                5,
                0,
                t.Yb(n, 5, 0, t.Nb(n, 6).transform(l.phoneService.deviceName$)),
              ));
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
              1,
              "au3-mailbox-edit",
              [],
              null,
              null,
              null,
              On,
              Dn,
            )),
            t.xb(
              1,
              114688,
              null,
              0,
              z,
              [i.c, Z.a, Ue.a, Pn.c, Q.a],
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
      var Nn = t.ub("au3-mailbox-edit", z, In, {}, {}, []),
        Ln = l("/iCL"),
        _n = l("3X01"),
        Cn = l("VwjD"),
        En = l("/AMN"),
        Mn = l("sg2e"),
        Rn = l("1VvW"),
        wn = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{height:100%;width:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column}.list__item[_ngcontent-%COMP%]{padding:30px 0;font-size:40px}.slider__listitem[_ngcontent-%COMP%]{padding:30px 10px 30px 0;font-size:40px}",
            ],
          ],
          data: {},
        });
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
              27,
              "au3-list",
              [["id", "tone_tel_settings"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              qe.b,
              qe.a,
            )),
            t.Sb(6144, null, Ke.a, null, [Xe.a]),
            t.xb(
              2,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 16384, null, 0, Ge.a, [t.l], null, null),
            t.xb(
              4,
              12828672,
              null,
              1,
              Xe.a,
              [
                [2, He.a],
                [2, Ze.a],
                [8, null],
                [2, H.a],
                [2, Qe.a],
                [2, Je.a],
                [2, oe.b],
                ze.i,
                t.z,
                t.h,
                Q.a,
                en.a,
                nn.a,
                [2, xe.a],
                ie.a,
                [2, ze.a],
              ],
              null,
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              4,
              "au3-slider",
              [
                ["class", "slider__listitem"],
                ["decrementingDeveloperText", "aus"],
                ["id", "RuftonNachrichtenLautstaerke"],
                ["incrementingDeveloperText", "max"],
                ["titleDeveloperText", "Rufton- und Nachrichtenlautst\xe4rke"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [
                [null, "mib3DisabledTap"],
                [null, "handleDragStart"],
                [null, "handleDragEnd"],
                [null, "valueChange"],
                [null, "valueChangeAfterInteraction"],
              ],
              function (e, n, l) {
                var t = !0,
                  a = e.component;
                return (
                  "mib3DisabledTap" === n &&
                    (t =
                      !1 !== a.handleDefaultDisable(a.ringtoneVolumeSetting) &&
                      t),
                  "handleDragStart" === n && (t = 0 != (a.dragging = !0) && t),
                  "handleDragEnd" === n &&
                    (t = !1 !== a.processVolumeSliderDragEnd() && t),
                  "valueChange" === n &&
                    (t = !1 !== a.userSetVolume$$.next(l) && t),
                  "valueChangeAfterInteraction" === n &&
                    (t = !1 !== a.processVolumeSliderTap(l) && t),
                  t
                );
              },
              Ln.b,
              Ln.a,
            )),
            t.Sb(6144, null, Ke.a, null, [_n.b]),
            t.xb(
              8,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              re.a,
              [Ve.a, t.h, Q.a, [3, re.a]],
              { disabled: [0, "disabled"], showReason: [1, "showReason"] },
              { tap: "mib3DisabledTap" },
            ),
            t.xb(
              10,
              4374528,
              null,
              0,
              _n.b,
              [[2, re.a], Oe.a, t.h, Ie.b, Q.a],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                decrementingDeveloperText: [1, "decrementingDeveloperText"],
                incrementingDeveloperText: [2, "incrementingDeveloperText"],
                intermediateSteps: [3, "intermediateSteps"],
                hasAudioFeedback: [4, "hasAudioFeedback"],
                resetDelay: [5, "resetDelay"],
                min: [6, "min"],
                max: [7, "max"],
                segmentStep: [8, "segmentStep"],
                value: [9, "value"],
              },
              {
                valueChange: "valueChange",
                valueChangeAfterInteraction: "valueChangeAfterInteraction",
                handleDraggedStart: "handleDragStart",
                handleDraggedEnd: "handleDragEnd",
              },
            ),
            (e()(),
            t.yb(
              11,
              0,
              null,
              0,
              11,
              "au3-list-preview-item",
              [
                ["class", "list__item"],
                ["id", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3DisabledTap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3DisabledTap" === n &&
                    (t =
                      !1 !==
                        e.component.showCustomDisabledPopupReasonConditionally(
                          e.context.mib3Let,
                        ) && t),
                  t
                );
              },
              Cn.b,
              Cn.a,
            )),
            t.xb(
              12,
              147456,
              null,
              0,
              re.a,
              [Ve.a, t.h, Q.a, [3, re.a]],
              { disabled: [0, "disabled"], showReason: [1, "showReason"] },
              { tap: "mib3DisabledTap" },
            ),
            t.xb(13, 147456, null, 0, te.a, [t.l, t.z], null, null),
            t.xb(
              14,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              15,
              147456,
              null,
              0,
              ae.a,
              [te.a, [2, ie.a], [2, H.a], Q.a],
              null,
              null,
            ),
            t.xb(
              16,
              212992,
              null,
              0,
              ue.a,
              [
                Q.a,
                oe.b,
                ae.a,
                [2, ie.a],
                [2, H.a],
                [2, re.a],
                [2, se.a],
                [2, ce.a],
                t.z,
                be.a,
                t.l,
                [2, de.a],
              ],
              null,
              null,
            ),
            t.xb(
              17,
              671744,
              null,
              0,
              Be.a,
              [Ue.a, ze.i, re.a, ue.a, Be.b, Fe.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.Sb(131584, null, ge.a, ge.a, [[3, ge.a]]),
            t.xb(
              19,
              4407296,
              null,
              0,
              me.a,
              [
                t.l,
                xe.a,
                t.h,
                ge.a,
                [2, ve.a],
                [2, ie.b],
                [2, ie.a],
                [2, Se.a],
                [2, Te.a],
              ],
              null,
              null,
            ),
            t.xb(
              20,
              49152,
              null,
              0,
              En.a,
              [],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                previewDeveloperText: [1, "previewDeveloperText"],
                previewTextId: [2, "previewTextId"],
                previewTextEnum: [3, "previewTextEnum"],
              },
              null,
            ),
            t.xb(
              21,
              147456,
              null,
              0,
              Pe.a,
              [
                [2, ue.a],
                [2, re.a],
                [2, De.a],
                [2, me.a],
                [2, ye.b],
                t.l,
                Oe.a,
                Ie.b,
              ],
              null,
              null,
            ),
            t.xb(
              22,
              147456,
              null,
              0,
              Ne.a,
              [[2, me.a], [2, ue.a], [2, oe.b], Le.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              23,
              0,
              null,
              0,
              4,
              "au3-slider",
              [
                ["class", "slider__listitem"],
                ["decrementingDeveloperText", "min"],
                ["id", "Mikrofonempfindlichkeit"],
                ["incrementingDeveloperText", "max"],
                ["titleDeveloperText", "Mikrofonempfindlichkeit"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [
                [null, "mib3DisabledTap"],
                [null, "valueChange"],
              ],
              function (e, n, l) {
                var t = !0,
                  a = e.component;
                return (
                  "mib3DisabledTap" === n &&
                    (t = !1 !== a.deactivatedMicSensitivityTapped() && t),
                  "valueChange" === n &&
                    (t = !1 !== a.updateMicSensitivity(l) && t),
                  t
                );
              },
              Ln.b,
              Ln.a,
            )),
            t.Sb(6144, null, Ke.a, null, [_n.b]),
            t.xb(
              25,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              26,
              147456,
              null,
              0,
              re.a,
              [Ve.a, t.h, Q.a, [3, re.a]],
              { disabled: [0, "disabled"], showReason: [1, "showReason"] },
              { tap: "mib3DisabledTap" },
            ),
            t.xb(
              27,
              4374528,
              null,
              0,
              _n.b,
              [[2, re.a], Oe.a, t.h, Ie.b, Q.a],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                decrementingDeveloperText: [1, "decrementingDeveloperText"],
                incrementingDeveloperText: [2, "incrementingDeveloperText"],
                intermediateSteps: [3, "intermediateSteps"],
                hasAudioFeedback: [4, "hasAudioFeedback"],
                min: [5, "min"],
                max: [6, "max"],
                segmentStep: [7, "segmentStep"],
                value: [8, "value"],
              },
              { valueChange: "valueChange" },
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 2, 0, "tone_tel_settings"),
              e(n, 4, 0),
              e(n, 8, 0, "RuftonNachrichtenLautstaerke"),
              e(
                n,
                9,
                0,
                n.context.mib3Let ||
                  !(
                    null == l.ringtoneVolumeSetting ||
                    !l.ringtoneVolumeSetting.restrictionReason
                  ),
                !1,
              ),
              e(
                n,
                10,
                0,
                "Rufton- und Nachrichtenlautst\xe4rke",
                "aus",
                "max",
                !1,
                !0,
                l.debounceTime,
                null == l.ringtoneVolumeSetting
                  ? null
                  : l.ringtoneVolumeSetting.minVal,
                null == l.ringtoneVolumeSetting
                  ? null
                  : l.ringtoneVolumeSetting.maxVal,
                1,
                null == l.ringtoneVolumeSetting
                  ? null
                  : l.ringtoneVolumeSetting.currentVal,
              ),
              e(n, 12, 0, n.context.mib3Let, !n.context.mib3Let),
              e(n, 14, 0, ""),
              e(n, 16, 0),
              e(
                n,
                17,
                0,
                l.PhoneSettingsRoute.children.ToneTel.children.Ringtones,
                !0,
              ),
              e(n, 19, 0),
              e(
                n,
                20,
                0,
                "Rufton",
                l.selectedRingtone,
                l.selectedRingtone,
                l.ringtoneEnum,
              ),
              e(n, 25, 0, "Mikrofonempfindlichkeit"),
              e(
                n,
                26,
                0,
                !l.callActive ||
                  !(
                    null == l.micSensitivitySetting ||
                    !l.micSensitivitySetting.restrictionReason
                  ),
                !1,
              ),
              e(
                n,
                27,
                0,
                "Mikrofonempfindlichkeit",
                "min",
                "max",
                !1,
                !1,
                -6,
                6,
                2,
                l.micSensitivitySetting.currentVal,
              ));
          },
          function (e, n) {
            (e(n, 0, 0, t.Nb(n, 4).showLineNumbers),
              e(
                n,
                6,
                0,
                t.Nb(n, 9).combinedDisabled,
                t.Nb(n, 9).useBrighterIcon,
              ),
              e(
                n,
                11,
                0,
                t.Nb(n, 12).combinedDisabled,
                t.Nb(n, 12).useBrighterIcon,
                t.Nb(n, 19).markerClassEnabled,
              ),
              e(
                n,
                23,
                0,
                t.Nb(n, 26).combinedDisabled,
                t.Nb(n, 26).useBrighterIcon,
              ));
          },
        );
      }
      function An(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              20,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:TONE_TEL"],
              ],
              null,
              null,
              null,
              tn.b,
              tn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, se.a, [Q.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              14,
              "au3-title-line",
              [["id", "TitleLine"]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              G.b,
              G.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              J.a,
              [ee.a, ne.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryNonI18nText: [1, "primaryNonI18nText"],
                secondaryDeveloperText: [2, "secondaryDeveloperText"],
              },
              null,
            ),
            t.Pb(131072, $e.b, [t.h]),
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
                  "mib3Tap" === n &&
                    (t = !1 !== e.component.routingService.goBack() && t),
                  t
                );
              },
              le.b,
              le.a,
            )),
            t.xb(8, 147456, null, 0, te.a, [t.l, t.z], null, null),
            t.xb(
              9,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              ae.a,
              [te.a, [2, ie.a], [2, H.a], Q.a],
              null,
              null,
            ),
            t.xb(
              11,
              212992,
              null,
              0,
              ue.a,
              [
                Q.a,
                oe.b,
                ae.a,
                [2, ie.a],
                [2, H.a],
                [2, re.a],
                [2, se.a],
                [2, ce.a],
                t.z,
                be.a,
                t.l,
                [2, de.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              he.a,
              [Q.a, pe.a, t.l, [2, ue.a], [2, re.a]],
              null,
              null,
            ),
            t.Sb(131584, null, ge.a, ge.a, [[3, ge.a]]),
            t.xb(
              14,
              4407296,
              null,
              0,
              me.a,
              [
                t.l,
                xe.a,
                t.h,
                ge.a,
                [2, ve.a],
                [2, ie.b],
                [2, ie.a],
                [2, Se.a],
                [2, Te.a],
              ],
              null,
              null,
            ),
            t.xb(
              15,
              49152,
              null,
              0,
              fe.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              Pe.a,
              [
                [2, ue.a],
                [2, re.a],
                [2, De.a],
                [2, me.a],
                [2, ye.b],
                t.l,
                Oe.a,
                Ie.b,
              ],
              null,
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              Ne.a,
              [[2, me.a], [2, ue.a], [2, oe.b], Le.a],
              null,
              null,
            ),
            (e()(), t.hb(16777216, null, 0, 2, null, kn)),
            t.xb(
              19,
              16384,
              null,
              0,
              ln.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, $e.b, [t.h]),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "Screen:TONE_TEL"),
              e(n, 2, 0, "Screen:TONE_TEL"),
              e(n, 4, 0, "TitleLine"),
              e(
                n,
                5,
                0,
                "Telefon",
                l.phoneDevice
                  ? null == l.phoneDevice
                    ? null
                    : l.phoneDevice.name
                  : t.Yb(n, 5, 1, t.Nb(n, 6).transform(l.focusDeviceName$)),
                "Rufton und Nachrichtenlautst\xe4rke",
              ),
              e(n, 9, 0, "BackButton"),
              e(n, 11, 0),
              e(n, 14, 0),
              e(n, 15, 0, !1, "E163_Backbutton.webp"),
              e(
                n,
                19,
                0,
                t.Yb(
                  n,
                  19,
                  0,
                  t.Nb(n, 20).transform(l.doNotAllowRingtoneChanges$),
                ),
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
                7,
                0,
                t.Nb(n, 14).markerClassEnabled,
                t.Nb(n, 15).useItemPlaceholder,
              ));
          },
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
              1,
              "au3-tone-tel",
              [],
              null,
              null,
              null,
              An,
              wn,
            )),
            t.xb(
              1,
              245760,
              null,
              0,
              j,
              [i.c, Ue.a, D.a, y.a, Mn.a, t.h, Rn.a, Q.a],
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
      var jn = t.ub("au3-tone-tel", j, $n, {}, {}, []),
        Vn = l("xwkZ"),
        Bn = l("qoeV"),
        Un = l("ihOk"),
        zn = l("ZMtB"),
        Fn = l("fzcM"),
        Yn = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{height:100%;width:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column}.state-disabled[_ngcontent-%COMP%]{filter:grayscale(100%) brightness(.4)}.ringtone__name[_ngcontent-%COMP%]{height:100px;font-size:40px}",
            ],
          ],
          data: {},
        });
      function Wn(e) {
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
              "au3-list-radiobutton-item",
              [
                ["class", "ringtone__name"],
                ["group", "ringtones"],
              ],
              null,
              [[null, "valueChange"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "valueChange" === n &&
                    (t = !1 !== e.component.setRingtone(e.context.index) && t),
                  t
                );
              },
              Vn.b,
              Vn.a,
            )),
            t.xb(
              1,
              49152,
              null,
              0,
              Bn.a,
              [],
              {
                titleTextId: [0, "titleTextId"],
                titleIdEnumType: [1, "titleIdEnumType"],
                titleDeveloperText: [2, "titleDeveloperText"],
                checked: [3, "checked"],
                group: [4, "group"],
              },
              { valueChange: "valueChange" },
            ),
          ],
          function (e, n) {
            var l = n.component,
              t = n.context.$implicit.toString(),
              a = l.ringtoneEnum,
              i = n.context.$implicit.toString();
            e(
              n,
              1,
              0,
              t,
              a,
              i,
              n.context.index === n.parent.context.mib3Let,
              "ringtones",
            );
          },
          null,
        );
      }
      function qn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              8,
              "au3-list",
              [["id", "RingtoneList"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "list--with-line-numbers", null],
              ],
              [[null, "mib3DisabledTap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3DisabledTap" === n &&
                    (t = !1 !== e.component.showDisabledPopup() && t),
                  t
                );
              },
              qe.b,
              qe.a,
            )),
            t.Sb(6144, null, Ke.a, null, [Xe.a]),
            t.xb(
              2,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 16384, null, 0, Ge.a, [t.l], null, null),
            t.xb(
              4,
              147456,
              null,
              0,
              re.a,
              [Ve.a, t.h, Q.a, [3, re.a]],
              { disabled: [0, "disabled"], showReason: [1, "showReason"] },
              { tap: "mib3DisabledTap" },
            ),
            t.Pb(131072, $e.b, [t.h]),
            t.xb(
              6,
              12828672,
              null,
              1,
              Xe.a,
              [
                [2, He.a],
                [2, Ze.a],
                [8, null],
                [2, H.a],
                [2, Qe.a],
                [2, Je.a],
                [2, oe.b],
                ze.i,
                t.z,
                t.h,
                Q.a,
                en.a,
                nn.a,
                [2, xe.a],
                ie.a,
                [2, ze.a],
              ],
              { items: [0, "items"] },
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (e()(), t.hb(0, [[1, 2]], 0, 0, null, Wn)),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 2, 0, "RingtoneList"),
              e(
                n,
                4,
                0,
                t.Yb(n, 4, 0, t.Nb(n, 5).transform(l.menuDisabled$)),
                !1,
              ),
              e(n, 6, 0, l.ringtoneNames));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 4).combinedDisabled,
              t.Nb(n, 4).useBrighterIcon,
              t.Nb(n, 6).showLineNumbers,
            );
          },
        );
      }
      function Kn(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              21,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:TONE_TEL_RINGTONE"],
              ],
              null,
              null,
              null,
              tn.b,
              tn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, se.a, [Q.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              13,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              G.b,
              G.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              J.a,
              [ee.a, ne.a],
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
                  "mib3Tap" === n && (t = !1 !== e.component.back() && t),
                  t
                );
              },
              le.b,
              le.a,
            )),
            t.xb(7, 147456, null, 0, te.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              ae.a,
              [te.a, [2, ie.a], [2, H.a], Q.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              ue.a,
              [
                Q.a,
                oe.b,
                ae.a,
                [2, ie.a],
                [2, H.a],
                [2, re.a],
                [2, se.a],
                [2, ce.a],
                t.z,
                be.a,
                t.l,
                [2, de.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              he.a,
              [Q.a, pe.a, t.l, [2, ue.a], [2, re.a]],
              null,
              null,
            ),
            t.Sb(131584, null, ge.a, ge.a, [[3, ge.a]]),
            t.xb(
              13,
              4407296,
              null,
              0,
              me.a,
              [
                t.l,
                xe.a,
                t.h,
                ge.a,
                [2, ve.a],
                [2, ie.b],
                [2, ie.a],
                [2, Se.a],
                [2, Te.a],
              ],
              null,
              null,
            ),
            t.xb(
              14,
              49152,
              null,
              0,
              fe.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              15,
              147456,
              null,
              0,
              Pe.a,
              [
                [2, ue.a],
                [2, re.a],
                [2, De.a],
                [2, me.a],
                [2, ye.b],
                t.l,
                Oe.a,
                Ie.b,
              ],
              null,
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              Ne.a,
              [[2, me.a], [2, ue.a], [2, oe.b], Le.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              17,
              0,
              null,
              0,
              4,
              "au3-disclaimer",
              [],
              null,
              null,
              null,
              Un.b,
              Un.a,
            )),
            t.xb(
              18,
              4440064,
              null,
              0,
              zn.a,
              [Fn.a, [2, H.a], t.h, Q.a],
              null,
              null,
            ),
            (e()(), t.hb(16777216, null, 0, 2, null, qn)),
            t.xb(
              20,
              16384,
              null,
              0,
              ln.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, $e.b, [t.h]),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "Screen:TONE_TEL_RINGTONE"),
              e(n, 2, 0, "Screen:TONE_TEL_RINGTONE"),
              e(n, 4, 0, ""),
              e(n, 5, 0, "Rufton und Nachrichtenlautst\xe4rke", "Rufton"),
              e(n, 8, 0, "BackButton"),
              e(n, 10, 0),
              e(n, 13, 0),
              e(n, 14, 0, !1, "E163_Backbutton.webp"),
              e(n, 18, 0),
              e(
                n,
                20,
                0,
                t.Yb(
                  n,
                  20,
                  0,
                  t.Nb(n, 21).transform(l.phoneService.ringtoneIndex$),
                ),
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
              ));
          },
        );
      }
      function Xn(e) {
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
              "au3-ringtone",
              [],
              null,
              null,
              null,
              Kn,
              Yn,
            )),
            t.xb(
              1,
              245760,
              null,
              0,
              O,
              [i.c, Ue.a, Mn.a, D.a, y.a, Q.a],
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
      var Gn = t.ub("au3-ringtone", O, Xn, {}, {}, []),
        Hn = l("eZMD"),
        Zn = l("HD2x"),
        Qn = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}",
            ],
          ],
          data: {},
        });
      function Jn(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              22,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:DISPLAY_IMEI"],
              ],
              null,
              null,
              null,
              tn.b,
              tn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, se.a, [Q.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              13,
              "au3-title-line",
              [["id", "TitleLine"]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              G.b,
              G.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              J.a,
              [ee.a, ne.a],
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
                    (t = !1 !== e.component.globalRoutingService.goUp() && t),
                  t
                );
              },
              le.b,
              le.a,
            )),
            t.xb(7, 147456, null, 0, te.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              ae.a,
              [te.a, [2, ie.a], [2, H.a], Q.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              ue.a,
              [
                Q.a,
                oe.b,
                ae.a,
                [2, ie.a],
                [2, H.a],
                [2, re.a],
                [2, se.a],
                [2, ce.a],
                t.z,
                be.a,
                t.l,
                [2, de.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              he.a,
              [Q.a, pe.a, t.l, [2, ue.a], [2, re.a]],
              null,
              null,
            ),
            t.Sb(131584, null, ge.a, ge.a, [[3, ge.a]]),
            t.xb(
              13,
              4407296,
              null,
              0,
              me.a,
              [
                t.l,
                xe.a,
                t.h,
                ge.a,
                [2, ve.a],
                [2, ie.b],
                [2, ie.a],
                [2, Se.a],
                [2, Te.a],
              ],
              null,
              null,
            ),
            t.xb(
              14,
              49152,
              null,
              0,
              fe.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              15,
              147456,
              null,
              0,
              Pe.a,
              [
                [2, ue.a],
                [2, re.a],
                [2, De.a],
                [2, me.a],
                [2, ye.b],
                t.l,
                Oe.a,
                Ie.b,
              ],
              null,
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              Ne.a,
              [[2, me.a], [2, ue.a], [2, oe.b], Le.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              17,
              0,
              null,
              0,
              5,
              "au3-instruction-text",
              [["id", "ImeiText"]],
              null,
              null,
              null,
              Hn.b,
              Hn.a,
            )),
            t.xb(
              18,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              19,
              16384,
              null,
              0,
              Ce.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Pb(131072, $e.b, [t.h]),
            t.Qb(21, { imei: 0 }),
            t.xb(
              22,
              49152,
              null,
              0,
              Zn.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                hasSecondaryText: [1, "hasSecondaryText"],
              },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "Screen:DISPLAY_IMEI"),
              e(n, 2, 0, "Screen:DISPLAY_IMEI"),
              e(n, 4, 0, "TitleLine"),
              e(n, 5, 0, "Telefon", "Seriennummer"),
              e(n, 8, 0, "BackButton"),
              e(n, 10, 0),
              e(n, 13, 0),
              e(n, 14, 0, !1, "E163_Backbutton.webp"),
              e(n, 18, 0, "ImeiText"));
            var a,
              i = e(
                n,
                21,
                0,
                null ==
                  (a = t.Yb(n, 19, 0, t.Nb(n, 20).transform(l.dataModule$)))
                  ? null
                  : a.imei,
              );
            (e(n, 19, 0, i),
              e(
                n,
                22,
                0,
                "Seriennummer (IMEI) vom Datenmodul:\n\n{{imei}}",
                !1,
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
              ));
          },
        );
      }
      function el(e) {
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
              "au3-display-imei",
              [],
              null,
              null,
              null,
              Jn,
              Qn,
            )),
            t.xb(1, 49152, null, 0, F, [Ue.a, b.a], null, null),
          ],
          null,
          null,
        );
      }
      var nl = t.ub("au3-display-imei", F, el, {}, {}, []),
        ll = l("pNLL"),
        tl = l("dtma"),
        al = t.wb({
          encapsulation: 0,
          styles: [["[_nghost-%COMP%]{display:block;width:100%;height:100%}"]],
          data: {},
        });
      function il(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              7,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:REJECT_CALL_SMS_TEXT"],
                ["ttDisplayVariant", ""],
              ],
              null,
              null,
              null,
              tn.b,
              tn.a,
            )),
            t.xb(1, 16384, null, 0, fn.a, [], null, null),
            t.xb(
              2,
              212992,
              null,
              0,
              H.a,
              [t.l, t.D, Z.a, Q.a, [3, H.a], [6, fn.a]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 4440064, null, 0, se.a, [Q.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              4,
              0,
              null,
              0,
              3,
              "au3-enter-name-or-code",
              [],
              null,
              [[null, "onSave"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "onSave" === n && (t = !1 !== e.component.ok(l) && t),
                  t
                );
              },
              ll.b,
              ll.a,
            )),
            t.xb(
              5,
              704512,
              null,
              0,
              tl.a,
              [Pn.c, Tn.a, Ue.a, Mn.a, Rn.a],
              {
                hasProposals: [0, "hasProposals"],
                placeholderDeveloperText: [1, "placeholderDeveloperText"],
                descriptionText: [2, "descriptionText"],
                inputField: [3, "inputField"],
                primaryNonI18nTitle: [4, "primaryNonI18nTitle"],
                secondaryDeveloperTitle: [5, "secondaryDeveloperTitle"],
                contextId: [6, "contextId"],
              },
              { onSave: "onSave" },
            ),
            t.Pb(131072, $e.b, [t.h]),
            t.Pb(131072, $e.b, [t.h]),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 2, 0, "Screen:REJECT_CALL_SMS_TEXT"),
              e(n, 3, 0, "Screen:REJECT_CALL_SMS_TEXT"),
              e(
                n,
                5,
                0,
                !0,
                "Ich kann gerade nicht sprechen. Melde mich sp\xe4ter.",
                "Geben Sie den Inhalt\nIhres Templates ein.",
                t.Yb(n, 5, 3, t.Nb(n, 6).transform(l.inputField$)),
                t.Yb(n, 5, 4, t.Nb(n, 7).transform(l.phoneService.deviceName$)),
                "SMS Text bearbeiten",
                l.contextId,
              ));
          },
          null,
        );
      }
      function ul(e) {
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
              "au3-reject-call-default-sms-text",
              [],
              null,
              null,
              null,
              il,
              al,
            )),
            t.xb(
              1,
              114688,
              null,
              0,
              W,
              [i.c, Y.b, Pn.c, Me.a, Q.a],
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
      var ol = t.ub("au3-reject-call-default-sms-text", W, ul, {}, {}, []),
        rl = l("aDqW"),
        sl = l("/W5r"),
        cl = l("+Qv1"),
        bl = l("XtoR"),
        dl = l("jTHl"),
        hl = l("zL3T"),
        pl = l("zm/l"),
        gl = l("XOcJ"),
        ml = l("doQC"),
        xl = l("nRk7"),
        vl = l("K3fK"),
        Sl = l("2Uk/"),
        Tl = l("+epw"),
        fl = l("zMPs"),
        Pl = l("6Yk8"),
        Dl = l("u6+O"),
        yl = l("CIQC"),
        Ol = l("REmV"),
        Il = l("Y3N+"),
        Nl = l("MJxn"),
        Ll = l("eIOF"),
        _l = l("t+4g"),
        Cl = l("myjn"),
        El = l("fOZ7"),
        Ml = l("QDrj"),
        Rl = l("TBks"),
        wl = l("yUFt"),
        kl = l("YCQm"),
        Al = l("6gUO"),
        $l = t.vb(K, [], function (e) {
          return t.Kb([
            t.Lb(512, t.j, t.X, [
              [8, [X.a, xn, Nn, jn, Gn, nl, ol]],
              [3, t.j],
              t.x,
            ]),
            t.Lb(4608, $e.m, $e.l, [t.u]),
            t.Lb(4608, rl.h, rl.g, []),
            t.Lb(4608, rl.d, rl.f, []),
            t.Lb(4608, rl.j, rl.e, []),
            t.Lb(4608, rl.c, rl.b, []),
            t.Lb(4608, rl.k, rl.k, [
              rl.l,
              rl.h,
              rl.d,
              rl.j,
              rl.c,
              rl.m,
              rl.o,
              rl.n,
              rl.a,
            ]),
            t.Lb(4608, sl.b, sl.b, [cl.e, [2, sl.a]]),
            t.Lb(4608, bl.b, bl.b, [cl.e, [2, bl.a]]),
            t.Lb(4608, dl.b, dl.b, [cl.e, [2, dl.a]]),
            t.Lb(4608, hl.b, hl.b, [cl.e, [2, hl.a]]),
            t.Lb(4608, pl.a, pl.a, [i.c, Q.a]),
            t.Lb(4608, gl.a, gl.a, [i.c, Q.a]),
            t.Lb(4608, ml.a, ml.a, [i.c, Q.a]),
            t.Lb(4608, xl.a, xl.a, [i.c, Q.a]),
            t.Lb(4608, vl.a, vl.a, [Sl.a, Q.a]),
            t.Lb(1073742336, $e.c, $e.c, []),
            t.Lb(1073742336, rl.i, rl.i, []),
            t.Lb(1073742336, Tl.a, Tl.a, []),
            t.Lb(1073742336, fl.a, fl.a, []),
            t.Lb(1073742336, Pl.a, Pl.a, []),
            t.Lb(1073742336, Dl.a, Dl.a, []),
            t.Lb(1073742336, yl.a, yl.a, []),
            t.Lb(1073742336, Ol.a, Ol.a, []),
            t.Lb(1073742336, Il.a, Il.a, []),
            t.Lb(1073742336, Nl.a, Nl.a, []),
            t.Lb(1073742336, Ll.a, Ll.a, []),
            t.Lb(1073742336, _l.a, _l.a, []),
            t.Lb(1073742336, Cl.a, Cl.a, []),
            t.Lb(1073742336, El.a, El.a, []),
            t.Lb(1073742336, Ml.a, Ml.a, []),
            t.Lb(1073742336, Rl.a, Rl.a, []),
            t.Lb(1073742336, wl.a, wl.a, []),
            t.Lb(1073742336, kl.a, kl.a, []),
            t.Lb(1073742336, Al.a, Al.a, []),
            t.Lb(1073742336, Rn.n, Rn.n, [
              [2, Rn.s],
              [2, Rn.m],
            ]),
            t.Lb(1073742336, K, K, []),
            t.Lb(256, rl.o, void 0, []),
            t.Lb(256, rl.m, void 0, []),
            t.Lb(256, rl.n, void 0, []),
            t.Lb(256, rl.a, void 0, []),
            t.Lb(
              1024,
              Rn.k,
              function () {
                return [
                  [
                    {
                      path: "",
                      children: [
                        { path: "", component: x },
                        { path: "mailbox", canActivate: [q.a], component: z },
                        {
                          path: "tonetel",
                          children: [
                            { path: "", component: j },
                            { path: "ringtones", component: O },
                          ],
                        },
                        { path: "imei", component: F },
                        { path: "smsText", component: W },
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
