(window.webpackJsonp = window.webpackJsonp || []).push([
  [96, 71, 73, 74, 101],
  {
    "4ZeQ": function (l, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return b;
      });
      var t = n("RGxT"),
        a = (n("AEBN"), n("Yi6/")),
        i = n("QQZH"),
        o = n("C05f"),
        u = n("xVbo"),
        r = n("YtkY"),
        c = n("Ohay"),
        s = n("kuMc");
      (n("HMkY"), n("tZxQ"), n("zSEC"));
      class b {
        constructor(l, e, n, t, c) {
          ((this.speechService = l),
            (this.dialogService = e),
            (this.actionService = n),
            (this.engineeringMenusService = t),
            (this.statusbarHeight = 80),
            (this.PopupIdsAudi = a.Ob),
            (this.popupType = a.Rb),
            (this.iconCategory = a.Z),
            (this.targetRectCalculationCallbacks = a.nc),
            (this.pauseButtonDisabled = !1),
            (this.paused = !1),
            (this.destroy$$ = new i.a(1)),
            (this.requestedScreenRoute$$ = new o.a(void 0)),
            (this.logger = c.getLogger("speech.SdsPopupComponent")),
            (this.isBackButtonVisible$ =
              this.speechService.activeFullscreenPopupId$.pipe(
                Object(u.a)(a.wd),
                Object(r.a)(
                  (l) =>
                    ![
                      a.Ob.POPUP_SDS_BIG_COMMAND_DISPLAY_WELCOME_SCREEN,
                      a.Ob.POPUP_SDS_ALEXA_MAIN,
                    ].includes(l),
                ),
              )),
            (this.activeFullscreenPopupId$ = l.activeFullscreenPopupId$.pipe(
              Object(u.a)(a.wd),
            )));
        }
        handleHkBackEvent() {
          a.gd.isBentley && this.stopDialog();
        }
        ngOnInit() {
          this.subscribeToDialog();
        }
        ngOnDestroy() {
          (this.destroy$$.next(), this.destroy$$.complete());
        }
        stopDialog() {
          (this.logger.info("Close button tapped"),
            this.actionService
              .requestAction(t.a.STOP)
              .catch((l) =>
                this.logger.error("Error requesting dialog stop: ", l),
              ));
        }
        pauseClicked() {
          this.pauseButtonDisabled ||
            (this.logger.info(`${this.paused ? "Pause" : "Resume"} tapped`),
            this.actionService
              .requestAction(this.paused ? t.a.RESUME : t.a.PAUSE)
              .catch((l) =>
                this.logger.error("Error requesting dialog pause/resume: ", l),
              ));
        }
        backTapped() {
          this.actionService
            .requestAction(t.a.CORRECTION)
            .catch((l) =>
              this.logger.error(
                "Error requesting dialog correction (back): ",
                l,
              ),
            );
        }
        setRequestedScreenRoute(l) {
          (this.logger.info("setRequestedScreenRoute:", l),
            this.requestedScreenRoute$$.next(l));
        }
        subscribeToDialog() {
          this.dialogService.dialog$
            .pipe(
              Object(r.a)((l) => l.dialogState),
              Object(u.a)(a.wd),
              Object(c.a)(),
              Object(s.a)(this.destroy$$),
            )
            .subscribe((l) => {
              this.paused = l === t.f.PAUSED;
            });
        }
      }
    },
    "89Z2": function (l, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        }));
      var t = n("kZht"),
        a =
          (n("kqft"),
          n("+sw+"),
          n("FfND"),
          n("bou3"),
          n("yNay"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                "[_nghost-%COMP%]{display:block;position:relative;height:100%;width:100%}",
              ],
            ],
            data: {
              animation: [
                {
                  type: 7,
                  name: "screenChange",
                  definitions: [
                    {
                      type: 0,
                      name: "*",
                      styles: { type: 6, styles: { opacity: 0 }, offset: null },
                      options: void 0,
                    },
                    {
                      type: 0,
                      name: "visible",
                      styles: { type: 6, styles: { opacity: 1 }, offset: null },
                      options: void 0,
                    },
                    {
                      type: 1,
                      expr: "void => visible",
                      animation: [],
                      options: null,
                    },
                    {
                      type: 1,
                      expr: "visible => upwards",
                      animation: [
                        {
                          type: 11,
                          selector: ":leave",
                          animation: {
                            type: 6,
                            styles: {
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                            },
                            offset: null,
                          },
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: ":enter",
                          animation: {
                            type: 6,
                            styles: {
                              opacity: 0,
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                            },
                            offset: null,
                          },
                          options: { optional: !0 },
                        },
                        {
                          type: 2,
                          steps: [
                            {
                              type: 11,
                              selector: ":leave",
                              animation: [
                                {
                                  type: 4,
                                  styles: {
                                    type: 6,
                                    styles: {
                                      opacity: 0,
                                      transform: "scale(0.9)",
                                    },
                                    offset: null,
                                  },
                                  timings:
                                    "125ms cubic-bezier(.22,.43,.57,.85)",
                                },
                              ],
                              options: { optional: !0 },
                            },
                          ],
                          options: null,
                        },
                      ],
                      options: null,
                    },
                    {
                      type: 1,
                      expr: "visible => downwards",
                      animation: [
                        {
                          type: 11,
                          selector: ":leave",
                          animation: {
                            type: 6,
                            styles: {
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                            },
                            offset: null,
                          },
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: ":enter",
                          animation: {
                            type: 6,
                            styles: {
                              opacity: 0,
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                            },
                            offset: null,
                          },
                          options: { optional: !0 },
                        },
                        {
                          type: 2,
                          steps: [
                            {
                              type: 11,
                              selector: ":leave",
                              animation: [
                                {
                                  type: 4,
                                  styles: {
                                    type: 6,
                                    styles: {
                                      opacity: 0,
                                      transform: "scale(1.1)",
                                    },
                                    offset: null,
                                  },
                                  timings:
                                    "125ms cubic-bezier(.22,.43,.57,.85)",
                                },
                              ],
                              options: { optional: !0 },
                            },
                          ],
                          options: null,
                        },
                      ],
                      options: null,
                    },
                    {
                      type: 1,
                      expr: "upwards => visible",
                      animation: [
                        {
                          type: 6,
                          styles: { opacity: 0, transform: "scale(1.1" },
                          offset: null,
                        },
                        {
                          type: 4,
                          styles: null,
                          timings: "125ms cubic-bezier(.22,.43,.57,.85)",
                        },
                      ],
                      options: null,
                    },
                    {
                      type: 1,
                      expr: "downwards => visible",
                      animation: [
                        {
                          type: 6,
                          styles: { opacity: 0, transform: "scale(0.9)" },
                          offset: null,
                        },
                        {
                          type: 4,
                          styles: null,
                          timings: "125ms cubic-bezier(.22,.43,.57,.85)",
                        },
                      ],
                      options: null,
                    },
                  ],
                  options: {},
                },
              ],
            },
          }));
      function i(l) {
        return t.ac(2, [t.Mb(null, 0)], null, null);
      }
    },
    JDb9: function (l, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var t = n("RGxT"),
        a = (n("Yi6/"), n("QQZH")),
        i = n("xVbo"),
        o = n("kuMc"),
        u = n("hHAo");
      (n("4ZeQ"), n("tZxQ"));
      class r {
        constructor(l, e, n, t, i) {
          ((this.list = l),
            (this.sdsPopup = e),
            (this.actionsService = n),
            (this.mainPerceivableContextService = t),
            (this.isNextPageActionPending = !1),
            (this.isPreviousPageActionPending = !1),
            (this.isFirstPageActionPending = !1),
            (this._sdsPaging = !1),
            (this.destroy$$ = new a.a(1)),
            (this.logger = i.getLogger("speech.SdsPagingDirective")));
        }
        set sdsPaging(l) {
          ((this._sdsPaging = l), this.list && (this.list.sdsPaging = l));
        }
        set lineNumbers(l) {
          this.sdsPaging = l;
        }
        ngOnInit() {
          (this.actionsService.clientActions$
            .pipe(
              Object(i.a)(
                (l) =>
                  l.state === t.b.REQUESTED &&
                  [t.a.NEXTPAGE, t.a.FIRSTPAGE, t.a.PREVIOUSPAGE].includes(
                    l.action,
                  ),
              ),
              Object(i.a)(({ action: l }) => {
                switch (l) {
                  case t.a.NEXTPAGE:
                    return !this.isNextPageActionPending;
                  case t.a.PREVIOUSPAGE:
                    return !this.isPreviousPageActionPending;
                  case t.a.FIRSTPAGE:
                    return !this.isFirstPageActionPending;
                  default:
                    return (
                      this.logger.error("Unexpected paging action: ", l),
                      !1
                    );
                }
              }),
              Object(o.a)(this.destroy$$),
            )
            .subscribe((l) => {
              (this.logger.info("Received paging action request: ", l.action),
                this.performPagingAction(l));
            }),
            this.logger.info(
              `ngOnInit: set list.sdsPaging to ${this._sdsPaging}`,
            ),
            (this.list.sdsPaging = this._sdsPaging),
            this.list.currentListPage$
              .pipe(Object(o.a)(this.destroy$$))
              .subscribe((l) => {
                (this.logger.debug(
                  "Updating current list page in perceivablecontext: ",
                  l.page,
                ),
                  this.mainPerceivableContextService
                    .updateCurrentPage(
                      l.page,
                      this._sdsPaging ? u.a.Popup : u.a.Screen,
                    )
                    .catch((l) => {
                      this.logger.error(
                        "Could not update current list page in perceivablecontext: ",
                        l,
                      );
                    }));
              }));
        }
        ngOnDestroy() {
          ((this.list.sdsPaging = !1),
            this.destroy$$.next(),
            this.destroy$$.complete(),
            this.mainPerceivableContextService.clearContext(
              this.sdsPopup ? u.a.Popup : u.a.Screen,
            ));
        }
        performPagingAction(l) {
          switch (
            (this.logger.info("Performing paging action: ", l.action), l.action)
          ) {
            case t.a.FIRSTPAGE:
              ((this.isFirstPageActionPending = !0), this.list.firstPage());
              break;
            case t.a.NEXTPAGE:
              ((this.isNextPageActionPending = !0), this.list.nextPage());
              break;
            case t.a.PREVIOUSPAGE:
              ((this.isPreviousPageActionPending = !0),
                this.list.previousPage());
              break;
            default:
              throw (
                this.logger.error("Unexpected paging action: ", l),
                new Error("Unexpected paging action!")
              );
          }
          this.actionsService
            .acceptAction(l.action)
            .then(() => {
              (this.logger.info(`Accepted action ${l.action}`),
                this.resetPendingActionFlag(l.action));
            })
            .catch((e) => {
              (this.logger.error("Error accepting paging action: ", e),
                this.resetPendingActionFlag(l.action));
            });
        }
        resetPendingActionFlag(l) {
          switch (l) {
            case t.a.FIRSTPAGE:
              this.isFirstPageActionPending = !1;
              break;
            case t.a.NEXTPAGE:
              this.isNextPageActionPending = !1;
              break;
            case t.a.PREVIOUSPAGE:
              this.isPreviousPageActionPending = !1;
              break;
            default:
              this.logger.error(
                "resetPendingActionFlag called for invalid paging action: ",
                l,
              );
          }
        }
      }
    },
    TGtD: function (l, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "PhoneModuleNgFactory", function () {
          return cu;
        }));
      var t = n("kZht"),
        a = n("YEFf"),
        i = n("Vc2n"),
        o = n("QQZH"),
        u = n("YtkY"),
        r = n("Ohay"),
        c = n("xVbo"),
        s = n("kuMc"),
        b = n("AEBN"),
        d = n("6qsK"),
        p = n("Yi6/");
      class h {
        constructor(l, e, n, t) {
          ((this.phoneService = l),
            (this.phoneRoutingService = e),
            (this.textInputService = n),
            (this.PhoneRoute = d.b),
            (this.inputFieldName = "dtmf-input"),
            (this.contextId = b.e.TIF_ID_02_DTMF_INPUT),
            (this.destroyed$$ = new o.a(1)),
            (this.logger = t.getLogger("phone.ActiveCallDtmfComponent")));
        }
        ngOnInit() {
          (this.phoneService.calls$
            .pipe(
              Object(u.a)((l) => !!l.focusCall),
              Object(r.a)(),
              Object(c.a)((l) => !l),
              Object(s.a)(this.destroyed$$),
            )
            .subscribe(() => {
              this.phoneRoutingService.goToPhoneMain();
            }),
            this.textInputService
              .getInputField(
                this.inputFieldName,
                this.contextId,
                (this.phoneService.calls.focusCall &&
                  this.phoneService.calls.focusCall.dtmfSymbols) ||
                  "",
              )
              .pipe(Object(s.a)(this.destroyed$$))
              .subscribe((l) => {
                ((this.inputField = l),
                  void 0 !== l.text && this.processText(l.text));
              }),
            this.phoneService.calls$
              .pipe(
                Object(u.a)(
                  (l) => (l.focusCall && l.focusCall.dtmfSymbols) || "",
                ),
                Object(c.a)(() => !!this.inputField),
                Object(r.a)(),
                Object(s.a)(this.destroyed$$),
              )
              .subscribe((l) => {
                this.textInputService.replace(l, this.inputField.id);
              }));
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        processText(l) {
          this.phoneService.calls.focusCall
            ? l !== this.phoneService.calls.focusCall.dtmfSymbols &&
              this.phoneService.sendDtmf(
                this.phoneService.calls.focusCall.id,
                l,
              )
            : this.logger.error("can't send dtmf, no focus call found");
        }
      }
      var m = n("Zbi+"),
        g = n("FkRV"),
        f = n("HM3f"),
        x = n("ZTXN"),
        v = (function (l) {
          return (
            (l.RemoveConferenceMember = "Teilnehmer\nentfernen"),
            (l.RetrieveAudio = "Audio\nzur\xfcckholen"),
            (l.ForwardAudio = "Audio\nweiterleiten"),
            (l.SendAudioToMobile = "Audio an Mobiltelefon\nweiterleiten"),
            (l.SendAudioToHeadset = "Audio an Headset\nweiterleiten"),
            (l.SendAudioToScon = "Audio an SCON\nweiterleiten"),
            (l.AddCall = "Anruf\nhinzuf\xfcgen"),
            (l.MicSensitivity = "Mikrofonempfindlichkeit"),
            l
          );
        })({});
      class S {
        constructor(l) {
          ((this.phoneService = l),
            (this.selectedOption$$ = new x.a()),
            (this.options$ = Object(f.b)(
              this.phoneService.calls$.pipe(
                Object(u.a)((l) => (l && l.focusCall) || void 0),
              ),
              this.phoneService.phones$,
            ).pipe(
              Object(u.a)(([l, e]) => {
                if (l) {
                  const e = [],
                    n =
                      l &&
                      l.availableAudioEndpoints &&
                      l.availableAudioEndpoints.filter(
                        (l) => l !== m.a.SPEAKER,
                      );
                  return (
                    l.audioEndpoint !== m.a.SPEAKER
                      ? e.push({
                          type: v.RetrieveAudio,
                          developerText: "Audio\nzur\xfcckholen",
                          icon: "EA05_phone_retrieve_audio.webp",
                          visible: !0,
                          enabled: !0,
                          textId: v.RetrieveAudio,
                        })
                      : n && n.length > 1
                        ? e.push({
                            type: v.ForwardAudio,
                            developerText: "Audio\nweiterleiten",
                            icon: "EA04_phone_transfer_audio.webp",
                            visible: !0,
                            enabled: !0,
                            textId: v.ForwardAudio,
                          })
                        : n &&
                          n[0] &&
                          e.push({
                            type: this.getAudioOption(n[0]),
                            developerText: this.getAudioOption(n[0]),
                            icon: "EA04_phone_transfer_audio.webp",
                            visible: !0,
                            enabled: !0,
                            textId: this.getAudioOption(n[0]),
                          }),
                    l.isConference &&
                      l.participants.some((l) =>
                        (l.availableTransitions || []).includes(
                          m.j.SPLITANDHANGUP,
                        ),
                      ) &&
                      e.push({
                        type: v.RemoveConferenceMember,
                        developerText: "Teilnehmer\nentfernen",
                        icon: "EA06_phone_delete_conferencemember.webp",
                        visible: !0,
                        enabled: !0,
                        textId: v.RemoveConferenceMember,
                      }),
                    e.push({
                      type: v.MicSensitivity,
                      developerText: "Mikrofonempfindlichkeit",
                      icon: "EA08_phone_micro_sensitivity.webp",
                      visible: !0,
                      enabled: !0,
                      textId: v.MicSensitivity,
                    }),
                    l.phoneDevice.isCallPossible &&
                      e.push({
                        type: v.AddCall,
                        developerText: "Anruf\nhinzuf\xfcgen",
                        icon: "EA09_phone_additional_call.webp",
                        visible: !0,
                        enabled: !0,
                        textId: v.AddCall,
                      }),
                    e
                  );
                }
                return [];
              }),
              Object(r.a)(
                (l, e) =>
                  l.map((l) => l.type).join(",") ===
                  e.map((l) => l.type).join(","),
              ),
            )),
            (this.selectedOption$ = this.selectedOption$$.asObservable()));
        }
        onOptionTap(l) {
          l && l.option && this.selectedOption$$.next(l.option);
        }
        getAudioOption(l) {
          switch (l) {
            case m.a.MOBILE:
              return v.SendAudioToMobile;
            case m.a.HEADSET:
              return v.SendAudioToHeadset;
            case m.a.SCON:
              return v.SendAudioToScon;
            case m.a.SPEAKER:
              return v.RetrieveAudio;
            default:
              return v.SendAudioToMobile;
          }
        }
      }
      var y = n("8j5Y"),
        O = n("jIqt"),
        C = n("hBG2"),
        N = n("YzIb"),
        T = (function (l) {
          return (
            (l[(l.NORMAL = 0)] = "NORMAL"),
            (l[(l.UNKNOWN = 1)] = "UNKNOWN"),
            (l[(l.CONFERENCE = 2)] = "CONFERENCE"),
            (l[(l.CONFIDENTIAL = 3)] = "CONFIDENTIAL"),
            l
          );
        })({});
      class P {
        constructor(l, e, n, a, i, u, r) {
          ((this.phoneService = l),
            (this.callOperationsService = e),
            (this.phoneRoutingService = n),
            (this.optionMenuService = a),
            (this.optionsService = i),
            (this.textInputService = u),
            (this.callTypeEnum = T),
            (this.callTextEnum = N.c),
            (this.callStateEnum = m.d),
            (this.scaleMode = p.ab.Contain),
            (this.uiCallStateEnum = g.b),
            (this.moreLockingParam = { lockingKey: { type: p.Eb.MORE_MENU } }),
            (this.callOperationEnum = C.a),
            (this.PhoneRoute = d.b),
            (this.optionTypeEnum = v),
            (this.PopupIdsAudi = p.Ob),
            (this.dtmfActive = !1),
            (this.dtmfPressed = new t.n()),
            (this.destroyed$$ = new o.a(1)),
            (this.logger = r.getLogger("phone.ActiveCallViewComponent")));
        }
        get isConference() {
          return this.focusCall && this.focusCall.isConference;
        }
        get callerText() {
          return (
            (this.focusCall &&
              (this.focusCall.callerName || this.focusCall.number)) ||
            ""
          );
        }
        get isConfidential() {
          return this.focusCall && this.focusCall.isConfidential;
        }
        get callType() {
          if (this.focusCall) {
            if (this.focusCall.isConfidential) return T.CONFIDENTIAL;
            if (this.focusCall.isConference) return T.CONFERENCE;
            if (this.callerText) return T.NORMAL;
          }
          return T.UNKNOWN;
        }
        get forDtmf() {
          return (
            this.phoneRoutingService.currentRouteSnapshot === d.b.ActiveCallDtmf
          );
        }
        get dtmfIcon() {
          return this.forDtmf || this.dtmfActive
            ? "E843_phone_numpad_inactive.webp"
            : "E830_phone_nummer_waehlen.webp";
        }
        ngOnInit() {
          ((this.moreMenuDisabled$ = Object(f.b)(
            this.optionsService.options$,
            this.optionMenuService.item$,
          ).pipe(
            Object(u.a)(
              ([l, { focusCall: e }]) =>
                null == e ||
                [
                  m.d.DISCONNECTING,
                  m.d.DIALING,
                  m.d.RINGINGOUTGOING,
                  m.d.RINGINGINCOMING,
                ].includes(e.callState) ||
                l.every((l) => !l.visible || !l.enabled),
            ),
            Object(r.a)(),
            Object(y.a)((l) => {
              l && this.optionMenuService.hideOptionMenu();
            }),
            Object(O.a)(!0),
          )),
            this.phoneService.calls$
              .pipe(
                Object(c.a)((l) => !!l.focusCall),
                Object(s.a)(this.destroyed$$),
              )
              .subscribe((l) => {
                const e = l.focusCall;
                (this.logger.info("ngOnInit: get focus call", l.focusCall),
                  (this.calls = l.filter(
                    (l) => l.id === e.id || (l.userApproved && !l.isIncoming),
                  )),
                  (this.deviceCount = this.calls
                    .map((l) => (l.phoneDevice ? l.phoneDevice.id : ""))
                    .filter((l) => !!l)
                    .filter((l, e, n) => n.indexOf(l) === e).length),
                  (this.focusCall = e),
                  this.optionMenuService.setMoreMenuItem({
                    calls: l,
                    focusCall: e,
                  }));
              }),
            this.optionsService.selectedOption$
              .pipe(Object(s.a)(this.destroyed$$))
              .subscribe((l) => {
                switch (l.type) {
                  case v.RemoveConferenceMember:
                    this.goToConferenceMembers();
                    break;
                  case v.RetrieveAudio:
                    this.retrieveAudio();
                    break;
                  case v.SendAudioToScon:
                    this.phoneService.redirectAudio(
                      this.focusCall.id,
                      m.a.SCON,
                    );
                    break;
                  case v.SendAudioToHeadset:
                    this.phoneService.redirectAudio(
                      this.focusCall.id,
                      m.a.HEADSET,
                    );
                    break;
                  case v.SendAudioToMobile:
                    this.phoneService.redirectAudio(
                      this.focusCall.id,
                      m.a.MOBILE,
                    );
                    break;
                  case v.ForwardAudio:
                    this.phoneRoutingService.goTo(d.b.ForwardAudio);
                    break;
                  case v.AddCall:
                    this.addCall();
                    break;
                  case v.MicSensitivity:
                    this.phoneRoutingService.goTo(
                      d.b.Main.children.Settings.children.ToneTel,
                      null,
                      {
                        navigationExtras: {
                          queryParams: {
                            callDeviceId: this.focusCall.phoneDevice.id,
                          },
                        },
                      },
                    );
                }
              }));
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        isAudioInCar(l) {
          return l && l.audioEndpoint === m.a.SPEAKER;
        }
        muteCall() {
          this.focusCall && this.phoneService.muteCall(this.focusCall.id);
        }
        unmuteCall() {
          this.focusCall && this.phoneService.unmuteCall(this.focusCall.id);
        }
        openMoreMenu() {
          this.optionMenuService.showOptionMenu(
            { calls: this.calls, focusCall: this.focusCall },
            p.Lb.MoreMenu,
          );
        }
        goToConferenceMembers() {
          this.phoneRoutingService.goTo(d.b.ConferenceMembers);
        }
        retrieveAudio() {
          this.focusCall &&
            this.phoneService.redirectAudio(this.focusCall.id, m.a.SPEAKER);
        }
        addCall() {
          this.phoneRoutingService.goTo(d.b.Main);
        }
      }
      var _ = n("TLy2");
      class I {
        constructor(l, e, n, t, a, i) {
          ((this.phoneService = l),
            (this.phoneRoutingService = e),
            (this.systemConfigService = n),
            (this.textInputService = t),
            (this.cdr = a),
            (this.titleIdEnum = N.a),
            (this.titleId = N.a.CallOnOneDevice),
            (this.titleReplacement = {}),
            (this.inputFieldName = "dtmf-input"),
            (this.contextId = b.e.TIF_ID_02_DTMF_INPUT),
            (this.destroyed$$ = new o.a(1)),
            (this.logger = i.getLogger("phone.ActiveCallComponent")));
        }
        ngOnInit() {
          const l = this.phoneService.calls$.pipe(
              Object(u.a)(
                (l) =>
                  l
                    .filter((l) => l && !!l.id)
                    .filter(
                      (e) =>
                        (!!l.focusCall && e.id === l.focusCall.id) ||
                        (e.userApproved && !e.isIncoming),
                    )
                    .map((l) => (l.phoneDevice ? l.phoneDevice.id : ""))
                    .filter((l) => !!l)
                    .filter((l, e, n) => n.indexOf(l) === e).length,
              ),
              Object(r.a)(),
              Object(s.a)(this.destroyed$$),
            ),
            e = this.phoneService.calls$.pipe(
              Object(u.a)((l) => l.focusCall),
              Object(r.a)(),
              Object(s.a)(this.destroyed$$),
            );
          (Object(f.b)(l, e)
            .pipe(Object(s.a)(this.destroyed$$))
            .subscribe(([l, e]) => {
              this.titleId =
                e && e.isSOS
                  ? N.a.SosCallOnEsimKoreaChina
                  : e && e.callType === m.b.CONCIERGE
                    ? N.a.Concierge
                    : l < 2
                      ? N.a.CallOnOneDevice
                      : N.a.CallOnTwoDevices;
            }),
            this.phoneService.calls$
              .pipe(
                Object(u.a)(
                  (l) =>
                    l.focusCall &&
                    l.focusCall.phoneDevice &&
                    l.focusCall.phoneDevice.id,
                ),
                Object(r.a)(),
                Object(_.a)((l) =>
                  this.phoneService.phones$.pipe(
                    l
                      ? Object(u.a)(
                          (e) => e.find((e) => e.id === l) || e.focusDevice,
                        )
                      : Object(u.a)((l) => l.focusDevice),
                  ),
                ),
                Object(u.a)((l) => (l && l.name) || ""),
                Object(r.a)(),
                Object(s.a)(this.destroyed$$),
              )
              .subscribe((l) => {
                this.titleReplacement = { device: l };
              }),
            this.phoneService.calls$
              .pipe(
                Object(u.a)((l) => !!l.focusCall),
                Object(r.a)(),
                Object(c.a)((l) => !l),
                Object(s.a)(this.destroyed$$),
              )
              .subscribe(() => {
                (this.logger.info("Focus call disappeared, navigating back"),
                  this.phoneRoutingService
                    .goToPreviousContextOrBack()
                    .then((l) => {
                      l || this.logger.error("Failed to navigate back");
                    })
                    .catch((l) =>
                      this.logger.error("Failed to navigate back because:", l),
                    ));
              }),
            this.systemConfigService.isDualDisplay() &&
              (this.textInputService
                .getInputField(
                  this.inputFieldName,
                  this.contextId,
                  (this.phoneService.calls.focusCall &&
                    this.phoneService.calls.focusCall.dtmfSymbols) ||
                    "",
                )
                .pipe(Object(s.a)(this.destroyed$$))
                .subscribe((l) => {
                  const e =
                    (this.inputField && this.inputField.active) !==
                    (l && l.active);
                  ((this.inputField = l),
                    void 0 !== l.text && this.processText(l.text),
                    e && this.cdr.markForCheck());
                }),
              e
                .pipe(
                  Object(u.a)((l) => (l && l.dtmfSymbols) || ""),
                  Object(r.a)(),
                  Object(c.a)(() => this.dtmfActive),
                  Object(s.a)(this.destroyed$$),
                )
                .subscribe((l) => {
                  this.textInputService.replace(l, this.inputField.id);
                })));
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        toggleDtmf() {
          if (this.systemConfigService.isSingleDisplay())
            this.phoneRoutingService.goTo(d.b.ActiveCallDtmf);
          else if (this.inputField) {
            const l = this.inputField.id;
            this.dtmfActive
              ? this.textInputService.setInactive(l)
              : this.textInputService.setActive(l, this.contextId);
          }
        }
        get dtmfActive() {
          return null != this.inputField && this.inputField.active;
        }
        processText(l) {
          this.phoneService.calls.focusCall
            ? l !== this.phoneService.calls.focusCall.dtmfSymbols &&
              this.phoneService.sendDtmf(
                this.phoneService.calls.focusCall.id,
                l,
              )
            : this.logger.error("can't send dtmf, no focus call found");
        }
      }
      var E = (function (l) {
        return (
          (l.CONFERENCE = "CONFERENCE"),
          (l.NAME_OR_NUMBER = "NUMBER"),
          (l.UNKNOWN = "UNKNOWN"),
          (l.CONFIDENTIAL = "CONFIDENTIAL"),
          (l.CONCIERGE = "CONCIERGE"),
          l
        );
      })({});
      class A {
        constructor(l, e) {
          ((this.callOperationsService = l),
            (this.callTextEnum = N.c),
            (this.iconCategoryEnum = p.Z),
            (this.callStateEnum = m.d),
            (this.scaleMode = p.ab.Contain),
            (this.uiCallStateEnum = g.b),
            (this.callOperationEnum = C.a),
            (this.callerType = E),
            (this.confidentialModeReplacement = N.d),
            (this.logger = e.getLogger("phone.CallTileComponent")));
        }
        set call(l) {
          ((this._call = l),
            (this.currentCallerType = l.isConfidential
              ? E.CONFIDENTIAL
              : this.isConference
                ? E.CONFERENCE
                : this.callerText
                  ? E.NAME_OR_NUMBER
                  : this.isConcierge
                    ? E.CONCIERGE
                    : E.UNKNOWN),
            this.logger.info(
              `call: updated type to ${this.currentCallerType} for `,
              l,
            ));
        }
        get call() {
          return this._call;
        }
        get isFocusCall() {
          return (
            this.call && this.focusCall && this.call.id === this.focusCall.id
          );
        }
        get inBackground() {
          return !this.isFocusCall;
        }
        get isConference() {
          return this.call && this.call.isConference;
        }
        get isConcierge() {
          return this.call && this.call.callType === m.b.CONCIERGE;
        }
        get callerText() {
          return (
            (this.call && (this.call.callerName || this.call.number)) || ""
          );
        }
      }
      var D = n("ROBh"),
        M = n("fbWu");
      class w {
        constructor(l, e, n, t, a) {
          ((this.phoneService = l),
            (this.phoneRoutingService = e),
            (this.popupService = n),
            (this.PhoneRoute = d.b),
            (this.destroyed$$ = new o.a(1)),
            (this.groupedRecentCall$$ = new o.a(1)),
            (this.groupedRecentCall$ = this.groupedRecentCall$$
              .asObservable()
              .pipe(Object(p.Kd)())),
            (this.logger = a.getLogger("phone.CallstackHistoryComponent")),
            (this.deviceName$ = this.createDeviceName$()),
            this.subscribeForGroupedRecentCall(t));
        }
        createDeviceName$() {
          return this.groupedRecentCall$.pipe(
            Object(u.a)((l) => l && l.phoneDevice && l.phoneDevice.id),
            Object(c.a)(p.wd),
            Object(u.a)((l) => this.phoneService.getDeviceForId(l)),
            Object(c.a)(p.wd),
            Object(u.a)((l) => l.name),
            Object(p.Kd)(),
          );
        }
        subscribeForGroupedRecentCall(l) {
          l.paramMap
            .pipe(
              Object(u.a)((l) => l.get("groupedRecentCallId")),
              Object(p.pd)(
                this.logger,
                "constructor: recent call id changed to:",
              ),
              Object(_.a)((l) =>
                l
                  ? this.phoneService
                      .getGroupedRecentCall$(l, 1)
                      .pipe(
                        Object(M.a)(
                          () =>
                            new Error(
                              "could not retrieve the grouped recent call",
                            ),
                        ),
                      )
                  : Object(D.a)(null),
              ),
              Object(p.pd)(
                this.logger,
                "constructor: received new grouped call:",
              ),
              Object(s.a)(this.destroyed$$),
            )
            .subscribe(
              (l) => {
                l
                  ? this.groupedRecentCall$$.next(l)
                  : this.phoneRoutingService.goBack();
              },
              (l) => {
                (this.logger.error("constructor: failed:", l),
                  this.phoneRoutingService.goBack());
              },
            );
        }
        dial(l) {
          if (!l.phoneNumber)
            return (
              this.logger.warn(
                "Could not dial number due to invalid phone number",
              ),
              void this.popupService.request(
                p.Ob.POPUP_PHONE_POPUP_TOAST_NUMBER_NOT_AVAILABLE,
              )
            );
          this.phoneService
            .dialNumber(l.phoneNumber)
            .catch((l) => this.logger.info("dial:", l));
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
      }
      var L = n("J+dc"),
        k = n("bwdy"),
        R = n("6xFL"),
        $ = n("GZoL"),
        F = n("d3LF"),
        B = n("IXiK"),
        j = n("xS3h"),
        H = n("3Sae"),
        z = n("ONRh"),
        U = n("AGsL"),
        V = n("88uq"),
        K = (function (l) {
          return (
            (l.addAsFavorite = "Als Favorit\nspeichern"),
            (l.editPhoneNumber = "Nummer\nbearbeiten"),
            (l.newSms = "SMS\nsenden"),
            (l.newEmail = "Email\nsenden"),
            (l.showHistory = "Verlauf\nanzeigen"),
            (l.saveAsPreset = "als Shortcut\nspeichern"),
            l
          );
        })({});
      class G {
        constructor(l, e, n, t, a, i, u, r, s, b) {
          ((this.optionMenuService = l),
            (this.phoneRoutingService = e),
            (this.messagingContextService = n),
            (this.messagingInfoService = t),
            (this.addressbookService = a),
            (this.shortcutsOptionsService = i),
            (this.usermanagementService = u),
            (this.shortCutFactoryService = r),
            (this.messagingResourcesService = s),
            (this.subscriptions = new k.a()),
            (this.options$$ = new o.a(1)),
            (this.addAsFavoriteOption = {
              icon: "E16E_addressbook_save_as_favorite.webp",
              developerText: "Als Favorit\nspeichern",
              visible: !0,
              enabled: !0,
              disabledReason: p.Ob.POPUP_PHONE_POPUP_FAVOURITE_FULL,
              textId: K.addAsFavorite,
            }),
            (this.editPhoneNumberOption = {
              icon: "E170_phone_edit_number.webp",
              developerText: "Nummer\nbearbeiten",
              visible: !0,
              enabled: !0,
              textId: K.editPhoneNumber,
            }),
            (this.newSmsOption = {
              icon: "E2A7_messaging_write_new_sms.webp",
              developerText: "SMS\nsenden",
              visible: !0,
              enabled: !0,
              textId: K.newSms,
            }),
            (this.newEmailOption = {
              icon: "E2A8_messaging_write_new_email.webp",
              developerText: "Email\nsenden",
              visible: !0,
              enabled: !0,
              textId: K.newEmail,
            }),
            (this.showHistoryOption = {
              icon: "E845_phone_show_history.webp",
              developerText: "Verlauf\nanzeigen",
              visible: !1,
              enabled: !0,
              textId: K.showHistory,
            }),
            (this.saveAsPreset = {
              icon: "E3F0_save_shortcut_preset.webp",
              developerText: "als Shortcut\nspeichern",
              visible: !1,
              enabled: !1,
              textId: K.saveAsPreset,
            }),
            (this.options = [
              this.addAsFavoriteOption,
              this.editPhoneNumberOption,
              this.newSmsOption,
              this.newEmailOption,
              this.showHistoryOption,
              this.saveAsPreset,
            ]),
            (this.options$ = this.options$$.asObservable()),
            (this.logger = b.getLogger("phone.CallstackOptionsService")));
          const d = this.optionMenuService.item$.pipe(
            Object(_.a)(
              (l) =>
                l && l.contact
                  ? this.addressbookService.contact$(l.contact.id)
                  : Object(D.a)(void 0),
              (l, e) =>
                l && null !== e
                  ? ((l.contact = e), l)
                  : (this.logger.warn(
                      "attempted to resolve options for invalid item: ",
                      l,
                    ),
                    void this.options$$.next([])),
            ),
            Object(c.a)(p.wd),
          );
          this.subscriptions.add(
            Object(f.b)(
              d,
              this.messagingInfoService.isSendingPossibleForFocusDevice(
                B.a.SMS,
              ),
              this.messagingInfoService.isSendingPossibleForFocusDevice(
                B.a.MAIL,
              ),
            ).subscribe(([l, e, n]) => {
              const t = this.addressbookService.getCurrentFocusDeviceProfile();
              if (
                ((this.editPhoneNumberOption.visible = !!l.phoneNumber),
                (this.showHistoryOption.visible =
                  !!l.entries && l.entries.length > 1),
                (this.newEmailOption.visible =
                  n && !!l.contact && !!l.contact.emailList),
                (this.newEmailOption.enabled =
                  !!l.contact &&
                  !!l.contact.emailList &&
                  l.contact.emailList.length > 0),
                (this.newSmsOption.visible = e),
                (this.newSmsOption.enabled = !!l.phoneNumber),
                this.updateAddAsFavoriteOption(t, l),
                l.phoneNumber)
              ) {
                const e = this.shortcutsOptionsService.saveShortcutOption(
                  this.shortCutFactoryService.createShortcutFromCall(l),
                );
                ((this.saveAsPreset.visible = e.visible),
                  this.usermanagementService.isGuestAccountActive() ||
                  this.usermanagementService.isOfflineAccountActive()
                    ? ((this.saveAsPreset.enabled = !1),
                      (this.saveAsPreset.disabledReason =
                        p.Ob.POPUP_PRESET_TEL_GUEST))
                    : ((this.saveAsPreset.enabled = e.enabled),
                      (this.saveAsPreset.disabledReason = e.disabledReason)));
              } else
                ((this.saveAsPreset.visible = !1),
                  (this.saveAsPreset.enabled = !1));
              this.options$$.next(this.options);
            }),
          );
        }
        ngOnDestroy() {
          this.subscriptions.unsubscribe();
        }
        onOptionTap(l) {
          switch (l.option) {
            case this.addAsFavoriteOption:
              this.addAsFavorite(l.item);
              break;
            case this.editPhoneNumberOption:
              this.editNumber(l.item);
              break;
            case this.newSmsOption:
              this.newSmsMessageTo(l.item);
              break;
            case this.newEmailOption:
              this.newEmailTo(l.item);
              break;
            case this.showHistoryOption:
              const e = {};
              ((e.groupedRecentCallId = l.item.id),
                this.phoneRoutingService.goTo(
                  d.b.Main.children.CallstackHistory,
                  e,
                ));
              break;
            case this.saveAsPreset:
              this.shortcutsOptionsService.saveShortcut(
                this.shortCutFactoryService.createShortcutFromCall(l.item),
              );
              break;
            default:
              this.logger.error(
                "Received option tap event with unexpected type: ",
                event,
              );
          }
        }
        updateAddAsFavoriteOption(l, e) {
          const n = !!l && !!l.maxFavorites,
            t = n && !!l.favorites && l.favorites.length >= l.maxFavorites,
            a =
              !!l &&
              !!l.favorites &&
              l.favorites.some((l) => l.number === e.phoneNumber),
            i =
              !!e.contact &&
              !!e.contact.phoneNumberList &&
              e.contact.phoneNumberList.every((l) => !!l.isFavorite || a);
          ((this.addAsFavoriteOption.enabled = n && !t && !(a || i)),
            (this.addAsFavoriteOption.visible =
              (!!e.contact && !e.contact.isFavorite) || !!e.phoneNumber),
            (this.addAsFavoriteOption.icon =
              a || i
                ? "E16E_addressbook_save_as_favorite_enabled.webp"
                : "E16E_addressbook_save_as_favorite.webp"),
            a || i
              ? (this.addAsFavoriteOption.disabledReason =
                  p.Ob.POPUP_ADB_DETAIL_OPTION_STORE_FAVORITE_ALREADY_EXISTING)
              : t &&
                (this.addAsFavoriteOption.disabledReason =
                  p.Ob.POPUP_PHONE_POPUP_FAVOURITE_FULL));
        }
        newSmsMessageTo(l) {
          (this.logger.info("Sending sms to: ", l),
            this.subscriptions.add(
              this.messagingResourcesService.accounts$
                .pipe(
                  Object(L.a)(1),
                  Object(p.pd)(
                    this.logger,
                    "newSmsMessageTo: received accounts",
                  ),
                  Object(V.map)((e) =>
                    e.find(
                      (e) =>
                        !!e.device &&
                        !!l.phoneDevice &&
                        !!l.phoneDevice.device &&
                        e.device.id === l.phoneDevice.device.id,
                    ),
                  ),
                )
                .subscribe((e) => {
                  (this.logger.info("newSmsMessageTo: using account", e),
                    this.messagingContextService
                      .enterMessagingSMS(
                        { selectedNumber: l.phoneNumber, contact: l.contact },
                        e,
                      )
                      .then((l) => {
                        l || this.logger.info("Failed to enter messaging sms.");
                      })
                      .catch((l) => {
                        this.logger.error(
                          "Failed to create new SMS message for caller.\nReason: " +
                            l,
                        );
                      }));
                }),
            ));
        }
        newEmailTo(l) {
          (this.logger.info("Sending mail to: ", l),
            this.messagingContextService
              .enterMessagingMail({ contact: l.contact })
              .then((l) => {
                l || this.logger.info("Failed to enter messaging mail.");
              })
              .catch((l) => {
                this.logger.error(
                  "Failed to create new mail message for caller.\nReason: " + l,
                );
              }));
        }
        editNumber(l) {
          l.phoneNumber
            ? this.phoneRoutingService.goToEditNumber(l.phoneNumber)
            : this.logger.error(
                "Could not edit number due to undefined phone number",
              );
        }
        addAsFavorite(l) {
          l.contact
            ? this.addressbookService
                .contact$(l.contact.id)
                .pipe(Object(L.a)(1))
                .subscribe((e) => {
                  e
                    ? void 0 !== l.phoneNumberIndex
                      ? this.addressbookService.addContactNumberAsFavorite(
                          e,
                          l.phoneNumberIndex,
                        )
                      : this.addressbookService.addContactAsFavorite(e)
                    : this.logger.error(
                        `Could not resolve contact object for call contact "${l.contact.id}"`,
                      );
                })
            : l.phoneNumber &&
              this.addressbookService.addPhoneNumberAsFavorite(
                l.phoneNumber,
                !0,
              );
        }
      }
      var Y = n("e+pb");
      class W {
        constructor(l, e, n, t, a, i, u) {
          ((this.routingService = l),
            (this.phoneService = e),
            (this.optionMenuService = n),
            (this.lockingService = t),
            (this.popupService = a),
            (this.editMode = !1),
            (this.editLockingKey = { type: p.Eb.EDIT_MODE }),
            (this.editLockingParam = { lockingKey: this.editLockingKey }),
            (this.phoneNumberTypeEnum = m.k),
            (this.optionTypeEnum = K),
            (this.destroyed$$ = new o.a(1)),
            (this.PhoneRoute = d.b),
            (this.SearchTypeEnum = Y.b),
            (this.logger = u.getLogger("phone.CallstackComponent")),
            this.logger.debug("Enter CallstackComponent"),
            (this.groupedRecentCalls$ = i.data.pipe(
              Object(_.a)((l) => l.groupedRecentCalls),
            )));
        }
        ngOnInit() {
          this.lockingService
            .getProperty(this.editLockingKey)
            .pipe(
              Object(_.a)((l) => l.lock$),
              Object(c.a)((l) => l),
              Object(s.a)(this.destroyed$$),
            )
            .subscribe(() => {
              this.editMode &&
                (this.logger.info(
                  "ngOnInit: leave edit mode because of blocking function",
                ),
                this.toggleEditMode(),
                this.popupService.request(p.Db.DEFAULT_LOCKING_TOAST));
            });
          const l = this.phoneService.phones.focusDevice;
          l && this.phoneService.deleteMissedCalls(l.id);
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        dial(l) {
          if (!l.phoneNumber)
            return (
              this.logger.warn(
                "Could not dial number due to invalid phone number",
              ),
              void this.popupService.request(
                p.Ob.POPUP_PHONE_POPUP_TOAST_NUMBER_NOT_AVAILABLE,
              )
            );
          l.phoneDevice
            ? this.phoneService
                .dialNumber(l.phoneNumber, l.phoneDevice.uri)
                .catch((l) => this.logger.info("dial:", l))
            : this.logger.error(
                "Could not dial number due to invalid phone device of call object",
              );
        }
        openOptionsMenu(l) {
          this.phoneService
            .getGroupedRecentCall$(l.id)
            .pipe(Object(L.a)(1), Object(s.a)(this.destroyed$$))
            .subscribe((e) => {
              e
                ? l.name || l.phoneNumber
                  ? this.optionMenuService.showOptionMenu(e)
                  : (this.logger.info("openOptionsMenu: caller is unknown:"),
                    this.popupService.request(
                      p.Ob.POPUP_PHONE_POPUP_TOAST_NUMBER_NOT_AVAILABLE,
                    ))
                : this.logger.error(
                    "openOptionsMenu: could not find recentCalls entry for call",
                    { recentCalls: e, call: l },
                  );
            });
        }
        mainText(l) {
          let e;
          return (
            (e =
              l && l.name ? l.name : l && l.phoneNumber ? l.phoneNumber : ""),
            e
          );
        }
        subText(l) {
          return l && l && l.name && l.phoneNumber ? l.phoneNumber : "";
        }
        toggleEditMode() {
          this.editMode = !this.editMode;
        }
      }
      var Z = n("Lrfq"),
        q = n("i7Dj");
      class J {
        constructor(l, e, n) {
          ((this.phoneService = l),
            (this.phoneRoutingService = e),
            (this.PhoneRoute = d.b),
            (this.numberTypeEnum = m.k),
            (this.iconCategoryEnum = p.Z),
            (this.uiStateType = p.uc.ListHorizontal),
            (this.confidentialModeReplacement = N.d),
            (this.destroyed$$ = new o.a(1)),
            (this.logger = n.getLogger("phone.ConferenceMembersComponent")),
            (this.focusPhoneSconConfidentialModeActive$ =
              l.focusPhoneConfidentialModeActive$.pipe(
                Object(u.a)((l) => !!l),
              )));
        }
        ngOnInit() {
          const l = this.phoneService.calls$.pipe(
            Object(u.a)((l) => (l && l.focusCall) || void 0),
            Object(Z.a)(1),
            Object(q.a)(),
          );
          ((this.conferenceMembers$ = l.pipe(
            Object(c.a)(p.wd),
            Object(u.a)((l) => l.participants),
          )),
            this.phoneService.calls$
              .pipe(
                Object(u.a)((l) => !!l.focusCall),
                Object(r.a)(),
                Object(c.a)((l) => !l),
                Object(s.a)(this.destroyed$$),
              )
              .subscribe(() => {
                (this.logger.info(
                  "ConferenceMembersComponent: Focus call disappeared, navigating to phone main",
                ),
                  this.phoneRoutingService
                    .goToPhoneMain()
                    .then((l) => {
                      l ||
                        this.logger.error(
                          "ConferenceMembersComponent: Failed to navigate to phone main",
                        );
                    })
                    .catch((l) =>
                      this.logger.error(
                        "ConferenceMembersComponent: Failed to navigate to phone main because:",
                        l,
                      ),
                    ));
              }));
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        goBack() {
          this.phoneRoutingService.goToActiveCall();
        }
        callerText(l) {
          return (l && (l.name || l.number)) || "";
        }
        numberType(l) {
          return l && l.name ? l.phoneNumberType || m.k.UNKNOWN : void 0;
        }
        numberText(l) {
          return l && l.number && l.name ? l.number : "";
        }
        isPossibleToDeleteMember(l) {
          return (
            !(!l || !l.availableTransitions) &&
            l.availableTransitions.includes(m.j.SPLITANDHANGUP)
          );
        }
        deleteMember(l) {
          l && this.phoneService.disconnectParticipant(l.id);
        }
        trackConferenceMember(l, e) {
          return e.id;
        }
      }
      var X = n("948h"),
        Q = n("HsO4"),
        ll = (function (l) {
          return (
            (l.DIAL = "Nummer w\xe4hlen"),
            (l.EDIT = "Nummer bearbeiten"),
            l
          );
        })({}),
        el = (function (l) {
          return (
            (l.DIAL = "Bitte geben Sie eine Nummer ein."),
            (l.EDIT = "Bitte geben Sie eine neue Nummer ein."),
            l
          );
        })({});
      class nl {
        constructor(l, e, n, t, a, i) {
          ((this.phoneService = l),
            (this.phoneRoutingService = e),
            (this.sosCallKoreaChinaService = n),
            (this.textInputService = t),
            (this.activatedRoute = a),
            (this.logService = i),
            (this.subscriptions = new k.a()),
            (this.destroy$$ = new o.a(1)),
            (this.inEditMode = !1),
            (this.isFirstTryToDial = !0),
            (this.dialOrEditNumberTitelEnum = ll),
            (this.dialOrEditNumberInstrTextEnum = el),
            (this.PhoneRoute = d.b),
            (this.logger = this.logService.getLogger(
              "phone.DialNumberComponent",
            )));
          const u =
            this.activatedRoute.snapshot.routeConfig &&
            this.activatedRoute.snapshot.routeConfig.path;
          (this.logger.info("dialNumberPath:", u),
            (this.isSos = u === d.a.DialSosNumber));
        }
        ngOnInit() {
          this.subscriptions.add(
            this.activatedRoute.queryParams
              .pipe(
                Object(L.a)(1),
                Object(_.a)(
                  (l) => (
                    (this.inEditMode = l && l.number && l.number.length > 0),
                    (this.subtitle = this.inEditMode ? ll.EDIT : ll.DIAL),
                    (this.description = this.inEditMode ? el.EDIT : el.DIAL),
                    this.textInputService.getInputField(
                      "dial-number",
                      this.contextId,
                      this.inEditMode ? l.number : "",
                    )
                  ),
                ),
              )
              .subscribe((l) => {
                this.inputField = l;
              }),
          );
        }
        get contextId() {
          return this.inEditMode
            ? b.e.TIF_ID_03_EDIT_PHONE_NUMBER_BEFORE_CALL
            : b.e.TIF_ID_06_ENTER_PHONE_NUMBER;
        }
        ngOnDestroy() {
          (this.subscriptions.unsubscribe(),
            this.destroy$$.next(),
            this.destroy$$.complete());
        }
        goBack() {
          this.inEditMode
            ? this.phoneRoutingService.goBack()
            : this.phoneRoutingService.goUp();
        }
        onDial(l) {
          this.isSos
            ? (this.logger.info(
                "onDial triggered: calling dialNumber via SosCallKoreaChinaService",
              ),
              this.sosCallKoreaChinaService.dialSosNumber(l))
            : this.phoneService.phones$
                .pipe(
                  Object(L.a)(1),
                  Object(u.a)(
                    (l) => l.focusDevice && l.focusDevice.isCallPossible,
                  ),
                  Object(_.a)((e) =>
                    e || this.isFirstTryToDial
                      ? ((this.isFirstTryToDial = !1),
                        this.logger.info(
                          "onDial triggered: calling dialNumber via PhoneService",
                        ),
                        Object(Q.a)(
                          this.phoneService.dialNumber(l).then(() => {
                            /^\*.*#$/.test(l) && this.goBack();
                          }),
                        ))
                      : (this.logger.warn(
                          "onDial: currently not possible to call on focus phone!",
                        ),
                        Object(D.a)(null)),
                  ),
                  Object(L.a)(1),
                  Object(s.a)(this.destroy$$),
                )
                .subscribe((l) =>
                  this.logger.info(`onDial: finished: ${JSON.stringify(l)}`),
                );
        }
      }
      var tl = n("2Uk/"),
        al = n("wa3p"),
        il = n("e1XN"),
        ol = n("4UlK"),
        ul = n("ZEJ2"),
        rl = n("iW6x"),
        cl = n("4C60"),
        sl = n("I/e0"),
        bl = n("ndMh"),
        dl = n("CAY6");
      const pl = d.b.ECallOPR.children,
        hl = ol.a,
        ml = hl.oprAuto.toUpperCase(),
        gl = hl.eCall.toUpperCase(),
        fl = hl.oprUser.toUpperCase(),
        xl = new Map([
          [
            pl.SOSAccomplished.path,
            {
              title: gl,
              primaryText: "Der Notruf wurde beendet.",
              buttons: [
                {
                  text: "OK",
                  action() {
                    this.eCallOPRService.confirmECall();
                  },
                  id: "OK",
                },
              ],
            },
          ],
          [
            pl.SOSCallbackIncoming.path,
            {
              title: gl,
              primaryText:
                "R\xfcckruf von der Notrufzentrale.\nDer Anruf wird automatisch durchgestellt.\nBitte warten..",
            },
          ],
          [
            pl.SOSConnected.path,
            {
              title: gl,
              primaryText: "Verbindung zum Notruf ist aktiv.",
              secondaryText: "Ihre Position:\n{{positionAndCoordinates}}",
            },
          ],
          [
            pl.SOSConnecting.path,
            {
              title: gl,
              primaryText:
                "Verbindung zum Notruf wird aufgebaut.\nBitte warten...",
            },
          ],
          [
            pl.SOSConnectingWithCancel.path,
            {
              title: gl,
              primaryText:
                "Verbindung zum Notruf wird aufgebaut.\nBitte warten...",
              buttons: [
                {
                  text: "Abbrechen",
                  action() {
                    this.eCallOPRService.cancelService(al.m.Mec);
                  },
                  id: "Abbrechen",
                },
              ],
            },
          ],
          [
            pl.SOSFailed.path,
            {
              title: gl,
              primaryText:
                "Die Verbindung zum Notruf kann\nnicht aufgebaut werden",
              buttons: [
                {
                  text: "OK",
                  action() {
                    this.eCallOPRService.confirmECall();
                  },
                  id: "OK",
                },
              ],
            },
          ],
          [
            pl.SOSCanceled.path,
            {
              title: gl,
              primaryText:
                "Der Notruf wurde abgebrochen.\nDie Funktion wird beendet.",
            },
          ],
          [
            pl.SOSNotPossibleNetworkError.path,
            {
              title: gl,
              primaryText:
                "Die Verbindung zum Notruf kann aufgrund eines Netzfehlers\nnicht aufgebaut werden",
              buttons: [
                {
                  text: "OK",
                  action() {
                    this.eCallOPRService.confirmECall();
                  },
                  id: "OK",
                },
              ],
            },
          ],
          [
            pl.SOSSendingData.path,
            {
              title: gl,
              primaryText:
                "Die Fahrzeugdaten werden gesendet.\nBitte warten...",
            },
          ],
          [
            pl.SOSLicenceExpired.path,
            {
              title: gl,
              primaryText:
                "Die Lizenzlaufzeit f\xfcr den Notruf ist\nabgelaufen. Informationen zu Verl\xe4ngerungs-\nm\xf6glichkeiten erhalten Sie bei Ihrem Audi\nPartner oder auf der Audi Website.",
              buttons: [
                {
                  text: "OK",
                  action() {
                    this.eCallOPRService.confirmECall();
                  },
                  id: "OK",
                },
              ],
            },
          ],
          [
            pl.OPRUserCallFailed.path,
            {
              title: fl,
              primaryText:
                "Der Online Pannenruf wurde\naufgrund eines Fehlers abgebrochen.",
            },
          ],
          [
            pl.OPRUserCallFailedNetwork.path,
            {
              title: fl,
              primaryText:
                "Der Online Pannenruf wurde aufgrund eines Netzfehlers\nabgebrochen.",
            },
          ],
          [
            pl.OPRUserCanceled.path,
            {
              title: fl,
              primaryText:
                "Der Online Pannenruf wurde\nabgebrochen.\nDie Funktion wird beendet.",
            },
          ],
          [
            pl.OPRUserConnected.path,
            {
              title: fl,
              primaryText: "Die Verbindung zur Servicezentrale ist aufgebaut.",
              secondaryText: "VIN: {{vin}}\n\nIhre Position:\n{{position}}",
              buttons: [
                {
                  text: "Auflegen",
                  action() {
                    this.eCallOPRService.hangupServiceCall();
                  },
                  id: "Auflegen",
                },
              ],
            },
          ],
          [
            pl.OPRUserConnecting.path,
            {
              title: fl,
              primaryText: "Die Verbindung zur Servicezentrale wird aufgebaut.",
              buttons: [
                {
                  text: "Auflegen",
                  action() {
                    this.eCallOPRService.hangupServiceCall();
                  },
                  id: "Auflegen",
                },
              ],
            },
          ],
          [
            pl.OPRUserDataCollect.path,
            {
              title: fl,
              primaryText: "Daten werden gesammelt.\nBitte warten...",
              buttons: [
                {
                  text: "Abbrechen",
                  action() {
                    this.eCallOPRService.terminateService(
                      al.m.ServiceBreakdownCall,
                    );
                  },
                  id: "Abbrechen",
                },
              ],
            },
          ],
          [
            pl.OPRUserDataSend.path,
            {
              title: fl,
              primaryText:
                "Die Fahrzeugdaten werden versendet.\nBitte warten...",
              buttons: [
                {
                  text: "Abbrechen",
                  action() {
                    this.eCallOPRService.terminateService(
                      al.m.ServiceBreakdownCall,
                    );
                  },
                  id: "Abbrechen",
                },
              ],
            },
          ],
          [
            pl.OPRUserDisconnect.path,
            {
              title: fl,
              primaryText: "Die Verbindung zur Servicezentrale wird beendet.",
              secondaryText: "VIN: {{vin}}\n\nIhre Position:\n{{position}}",
            },
          ],
          [
            pl.OPRUserEndActiveCall.path,
            {
              title: fl,
              primaryText:
                "Sie m\xfcssen zuerst Ihr aktives Telefongespr\xe4ch beenden\nbevor der Pannenruf gestartet werden kann.",
              buttons: [
                {
                  text: "Telefonat beenden",
                  action() {
                    this.eCallOPRService.hangupCustomerCalls();
                  },
                  id: "TelefonatBeenden",
                },
                {
                  text: "Pannenruf beenden",
                  action() {
                    this.eCallOPRService.terminateService(
                      al.m.ServiceBreakdownCall,
                    );
                  },
                  id: "PannenrufBeenden",
                },
              ],
            },
          ],
          [
            pl.OPRUserLicenceExpired.path,
            {
              title: fl,
              primaryText:
                "Die Lizenz f\xfcr den Online Pannenruf ist\nabgelaufen. Informationen zu Verl\xe4ngerungs-\nm\xf6glichkeiten erhalten Sie bei Ihrem Audi\nPartner oder auf der Audi Website.",
            },
          ],
          [
            pl.OPRAutoCallFailed.path,
            {
              title: ml,
              primaryText:
                "Die Verbindung zum Audi Schadenservice wurde\naufgrund eines Fehlers abgebrochen.",
            },
          ],
          [
            pl.OPRAutoCallFailedNetwork.path,
            {
              title: ml,
              primaryText:
                "Die Verbindung zum Audi Schadenservice wurde aufgrund eines\nNetzfehlers abgebrochen.",
            },
          ],
          [
            pl.OPRAutoCanceled.path,
            {
              title: ml,
              primaryText:
                "Die Verbindung zum Audi Schadenservice wurde\nabgebrochen.\nDie Funktion wird beendet.",
            },
          ],
          [
            pl.OPRAutoConnected.path,
            {
              title: ml,
              primaryText:
                "Die Verbindung zum Audi Schadenservice ist aufgebaut.",
              secondaryText: "VIN: {{vin}}\n\nIhre Position:\n{{position}}",
              buttons: [
                {
                  text: "Auflegen",
                  action() {
                    this.eCallOPRService.hangupServiceCall();
                  },
                  id: "Auflegen",
                },
              ],
            },
          ],
          [
            pl.OPRAutoConnecting.path,
            {
              title: ml,
              primaryText:
                "Die Verbindung zum Audi Schadenservice wird\naufgebaut.",
              buttons: [
                {
                  text: "Auflegen",
                  action() {
                    this.eCallOPRService.hangupServiceCall();
                  },
                  id: "Auflegen",
                },
              ],
            },
          ],
          [
            pl.OPRAutoDataCollect.path,
            {
              title: ml,
              primaryText:
                "Die Schadendaten werden analysiert.\nBitte warten...",
              buttons: [
                {
                  text: "Abbrechen",
                  action() {
                    this.eCallOPRService.terminateService(al.m.Usm);
                  },
                  id: "Abbrechen",
                },
              ],
            },
          ],
          [
            pl.OPRAutoDataSend.path,
            {
              title: ml,
              primaryText:
                "Die Schadendaten werden versendet.\nBitte warten...",
              buttons: [
                {
                  text: "Abbrechen",
                  action() {
                    this.eCallOPRService.terminateService(al.m.Usm);
                  },
                  id: "Abbrechen",
                },
              ],
            },
          ],
          [
            pl.OPRAutoDisconnect.path,
            {
              title: ml,
              primaryText:
                "Die Verbindung zum Audi Schadenservice wird beendet.",
              secondaryText: "VIN: {{vin}}\n\nIhre Position:\n{{position}}",
            },
          ],
          [
            pl.OPRAutoEndActiveCall.path,
            {
              title: ml,
              primaryText:
                "Sie m\xfcssen zuerst Ihr aktives Telefongespr\xe4ch beenden\nbevor die Verbindung zum Audi Schadenservice gestartet\nwerden kann.",
              buttons: [
                {
                  text: "Telefonat beenden",
                  action() {
                    this.eCallOPRService.hangupCustomerCalls();
                  },
                  id: "TelefonatBeenden",
                },
                {
                  text: "Schadenservice beenden",
                  action() {
                    this.eCallOPRService.terminateService(al.m.Usm);
                  },
                  id: "SchadenserviceBeenden",
                },
              ],
            },
          ],
          [
            pl.OPRAutoLicenceExpired.path,
            {
              title: ml,
              primaryText:
                "Die Lizenz f\xfcr den Audi Schadenservice ist\nabgelaufen. Informationen zu Verl\xe4ngerungs-\nm\xf6glichkeiten erhalten Sie bei Ihrem Audi\nPartner oder auf der Audi Website.",
            },
          ],
        ]);
      class vl {
        constructor(l, e, n, t, a, i, o, r, c) {
          ((this.eCallOPRService = l),
            (this.activatedRoute = e),
            (this.addressFormattingService = n),
            (this.naviService = t),
            (this.gnssService = a),
            (this.naviAppService = i),
            (this.geoPositionSource = ""),
            (this.emptyCarPosObject = { id: "", name: "", uri: "" }),
            (this.emptyLocationObject = {
              id: "",
              name: "",
              uri: "",
              coordinates: {
                latitude: 0,
                longitude: 0,
                latitudeDegree: 0,
                longitudeDegree: 0,
              },
              accessPoints: [],
              poiInfos: [],
              poiType: [],
              memoryType: [],
            }),
            (this.logger = c.getLogger("phone.ECallOPRComponent")),
            (this.isChinaOrKorea = r.isChinaRegion() || r.isKoreaRegion()),
            o.vehicleIdentificationNumber$
              ? (this.vin$ = o.vehicleIdentificationNumber$.pipe(
                  Object(u.a)((l) => (l && l.text) || ""),
                  Object(p.pd)(this.logger, "vehicleIdentificationNumber:"),
                ))
              : Object(D.a)(""));
          const s = this.activatedRoute.snapshot.routeConfig;
          (s &&
            s.path &&
            ((this.screenData = xl.get(s.path)),
            (this.screenId = s.path.replace(/-/g, "_").toUpperCase())),
            this.screenData ||
              this.logger.error("Failed to load screen data for route:", s),
            (this.dynamicScreenData$ = this.createDynamicScreenData()));
        }
        buttonTapped(l) {
          (this.logger.info(
            `Button "${l.text}" tapped on screen ${this.screenId}.`,
          ),
            l.action.call(this));
        }
        createDynamicScreenData() {
          return p.gd.textToolMode
            ? Object(D.a)({
                showSecondaryText: !(
                  !this.screenData || !this.screenData.secondaryText
                ),
                positionAndCoordinates: "",
                positionOrCoordinates: "",
              })
            : this.getPosition();
        }
        getPosition() {
          const l = this.naviService.carpositioninfos.isPresent().pipe(
              Object(r.a)(),
              Object(_.a)((l) =>
                l
                  ? this.extractNaviLocationFromPosition()
                  : Object(D.a)(this.emptyLocationObject),
              ),
            ),
            e = Object(f.b)(
              this.naviAppService.state$.pipe(Object(r.a)()),
              this.gnssService.locations.isPresent().pipe(Object(r.a)()),
            ).pipe(
              Object(_.a)(([l, e]) =>
                l === bl.a.NotExisting && e
                  ? this.gnssService.locations
                      .retrieveLocationObjects({
                        search: { name: "Vehicle location" },
                        updatelimit: 3e3,
                        autosubscribe: !0,
                      })
                      .pipe(Object(u.a)(Object(ul.b)()))
                  : Object(D.a)(void 0),
              ),
              Object(u.a)((l) =>
                l
                  ? {
                      id: l.id,
                      name: l.name,
                      uri: l.uri,
                      coordinates: {
                        latitudeDegree: l.latitude,
                        longitudeDegree: l.longitude,
                        latitude: dl.a.degreeToWgs84(l.latitude || 0),
                        longitude: dl.a.degreeToWgs84(l.longitude || 0),
                      },
                      accessPoints: [],
                      poiInfos: [],
                      poiType: [],
                      memoryType: [],
                    }
                  : this.emptyLocationObject,
              ),
            );
          return Object(f.b)(l, e).pipe(
            Object(u.a)(([l, e]) =>
              this.geoCoordinatesAvailable(l)
                ? ((this.geoPositionSource = "Navi"),
                  this.positionToDynamicScreenData(l))
                : ((this.geoPositionSource = "GNSS"),
                  this.positionToDynamicScreenData(e)),
            ),
          );
        }
        extractNaviLocationFromPosition() {
          const l = this.naviAppService.state$.pipe(Object(r.a)()),
            e = this.naviService.carpositioninfos
              .retrieveCarpositioninfoObjects({
                updatelimit: 3e3,
                autosubscribe: !0,
              })
              .pipe(
                Object(u.a)((l) => l.data),
                Object(u.a)((l) =>
                  l.length > 0 ? l[0] : this.emptyCarPosObject,
                ),
              );
          return Object(f.b)(l, e).pipe(
            Object(_.a)(([l, e]) => {
              if (l !== bl.a.Initialized) {
                const l = {
                  id: e.id,
                  name: e.name,
                  uri: e.uri,
                  coordinates: e.coordinates,
                  countryAbbreviation: e.countryCode,
                  accessPoints: [],
                  poiInfos: [],
                  poiType: [],
                  memoryType: [],
                };
                return (
                  this.logger.warn(
                    "Navi is not initialized! Using data from car position instead.",
                  ),
                  Object(D.a)(l)
                );
              }
              return this.geoCoordinatesAvailable(e)
                ? this.naviService.locations
                    .insertLocationObject({ coordinates: e.coordinates })
                    .pipe(
                      Object(p.Vc)(),
                      Object(_.a)(
                        (l) => (
                          this.logger.out.info(
                            `retrieving location with id ${l}`,
                          ),
                          this.naviService.locations.retrieveLocationObject(l, {
                            autosubscribe: !0,
                          })
                        ),
                      ),
                      Object(L.a)(1),
                    )
                : Object(D.a)(this.emptyLocationObject);
            }),
          );
        }
        geoCoordinatesAvailable(l) {
          return !!(
            l &&
            l.coordinates &&
            l.coordinates.latitudeDegree &&
            l.coordinates.longitudeDegree
          );
        }
        positionToDynamicScreenData(l) {
          if (this.isChinaOrKorea) {
            const e = l;
            ((e.coordinates = {
              latitude: 0,
              longitude: 0,
              latitudeDegree: 0,
              longitudeDegree: 0,
            }),
              this.logger.info(
                "LocationObject(CN/KR, " + this.geoPositionSource + "): ",
                e,
              ));
          } else
            this.logger.info(
              "LocationObject(" + this.geoPositionSource + "): ",
              l,
            );
          const e = this.getFormattedPosition(l),
            n = this.isChinaOrKorea ? "" : e.coordinates,
            t = e.address,
            a = this.screenData,
            i = {
              showSecondaryText:
                (!!a && !!a.secondaryText && a.secondaryText.length > 0) ||
                (this.isChinaOrKorea && t.length > 0) ||
                (!this.isChinaOrKorea && (t.length > 0 || n.length > 0)),
              positionOrCoordinates: t || n,
              positionAndCoordinates: t ? n + "\n\n" + t : n,
            };
          return (this.logger.info("DynamicScreenData: ", i), i);
        }
        getFormattedPosition(l) {
          const e = Object(cl.a)(l),
            n = this.addressFormattingService.getLines(1, e)[0];
          return n.indexOf(e.latitude) >= 0 || n.indexOf(e.longitude) >= 0
            ? { address: "", coordinates: n }
            : { address: n, coordinates: e.latitude + ", " + e.longitude };
        }
      }
      class Sl {
        constructor(l) {
          ((this.sosCallKoreaChinaService = l), (this.PhoneRoute = d.b));
        }
      }
      var yl = n("8lHc"),
        Ol = n("g6G6"),
        Cl = n("H+9d"),
        Nl = n("8lto"),
        Tl = n("P1io"),
        Pl = (function (l) {
          return (
            (l.CallList = "CallList"),
            (l.Addressbook = "AddressBook"),
            (l.Search = "Search"),
            (l.Favorites = "Favorites"),
            (l.Mailbox = "Mailbox"),
            (l.CallNumber = "CallNumber"),
            l
          );
        })({}),
        _l = (function (l) {
          return (
            (l[(l.PHONE = 0)] = "PHONE"),
            (l[(l.ONLINE = 1)] = "ONLINE"),
            l
          );
        })({});
      class Il {
        constructor(l, e, n, t, a, i, o, u, r) {
          ((this.routingService = l),
            (this.phoneService = e),
            (this.addressbookService = n),
            (this.popupManager = t),
            (this.entrypointService = a),
            (this.onlineRoutingService = i),
            (this.textInputService = o),
            (this.sosCallKoreaChinaService = u),
            (this.PhoneRoute = d.b),
            (this.addressbookTile = {
              id: Pl.Addressbook,
              icon: "E05A_phone_adressbuch.webp",
              route: d.b.Main.children.Addressbook,
              title: "Kontakte",
              disabled: !0,
            }),
            (this.defaultTiles = [
              {
                id: Pl.Search,
                icon: "E811_settings_search.webp",
                title: "Suchen",
                route: d.b.Main.children.Search,
                disabled: !1,
                textInputRequired: !0,
              },
              {
                id: Pl.CallList,
                icon: "E05B_phone_ruflisten.webp",
                title: "Anrufliste",
                route: d.b.Main.children.Callstack,
                disabled: !1,
              },
              {
                id: Pl.Favorites,
                icon: "E0FC_favoriten.webp",
                title: "Favoriten",
                route: d.b.Main.children.Favorites,
                disabled: !1,
              },
              this.addressbookTile,
              {
                id: Pl.Mailbox,
                icon: "E02B_phone_mailbox.webp",
                title: "Mailbox",
                route: null,
                disabled: !1,
              },
              {
                id: Pl.CallNumber,
                icon: "E830_phone_nummer_waehlen.webp",
                title: "Nr. w\xe4hlen",
                route: d.b.Main.children.DialNumber,
                disabled: !1,
                textInputRequired: !0,
                ignoreConfidentialMode: !0,
              },
            ]),
            (this.tileNameTextEnum = Pl),
            (this.tiles = [...this.defaultTiles]),
            (this.subscriptions = new k.a()),
            (this.logger = r.getLogger("phone.MainComponent")));
        }
        ngOnInit() {
          ((this.toggleIcon$ = this.phoneService.phones$.pipe(
            Object(u.a)(
              (l) => l.filter((l) => l.connectionState === m.e.ATTACHED).length,
            ),
            Object(u.a)((l) =>
              l > 1
                ? "E9C3_phone_toggle_active.webp"
                : "E9B3_media_online_connect_external_device.webp",
            ),
          )),
            this.subscriptions.add(
              this.addressbookService.state$.subscribe((l) => {
                (this.logger.info("addressbookstate", l),
                  (this.addressbookTile.disabled = l === R.b.NotAvailable));
              }),
            ),
            this.subscriptions.add(
              this.entrypointService
                .entryPointsForTag$(Cl.b.PHONE)
                .subscribe((l) => {
                  const e = l.map((l) => ({
                    id: l.id,
                    icon: l.bigIcon,
                    title: l.title,
                    route: void 0,
                    disabled: !!l.disableReason,
                    disableReason: l.disableReason,
                    type: _l.ONLINE,
                    ignoreConfidentialMode: !0,
                  }));
                  this.tiles = [...this.defaultTiles, ...e];
                }),
            ));
        }
        ngOnDestroy() {
          this.subscriptions.unsubscribe();
        }
        goToActiveCall() {
          this.routingService.goToActiveCall();
        }
        tileClick(l) {
          if (l.disabled) return;
          const e = this.phoneService.phones.focusDevice;
          if (e && e.isConfidentialModeActive && !l.ignoreConfidentialMode)
            return (
              this.logger.info(
                "tileClick: confidential mode is active, tile:",
                l,
              ),
              void this.routingService.goTo(d.b.MainPrivacy)
            );
          if (l.type !== _l.ONLINE) {
            switch ((this.logger.debug("Tile clicked", l), l.route)) {
              case d.b.Main.children.Callstack:
                this.routingService.goTo(d.b.Main.children.Callstack);
                break;
              case d.b.Main.children.DialNumber:
                this.routingService.goTo(d.b.Main.children.DialNumber);
                break;
              case d.b.Main.children.Addressbook:
                this.goToAddressbook();
                break;
              case d.b.Main.children.Favorites:
                this.routingService.goTo(d.b.Main.children.Favorites);
                break;
              case d.b.Main.children.Search:
                this.routingService.goTo(d.b.Main.children.Search, Y.b.Global);
            }
            "Mailbox" === l.id && this.handleMailbox();
          } else this.onlineRoutingService.goToIncludeStateWebApp(Tl.w, l.id);
        }
        goToPhoneSettings() {
          this.routingService.goTo(d.b.Main.children.Settings);
        }
        togglePhones() {
          this.phoneService.togglePhones();
        }
        goToAddressbook() {
          const l = this.addressbookService.state$.pipe(
              Object(c.a)((l) => l !== R.b.Loading),
            ),
            e = Object(yl.a)(1500);
          Object(Ol.a)(l, e)
            .pipe(Object(L.a)(1))
            .subscribe(() => {
              this.routingService.goTo(d.b.Main.children.Addressbook);
            });
        }
        handleMailbox() {
          const l = this.phoneService.phones.focusDevice,
            e = l ? l.mailboxNumber : null;
          (this.logger.debug("Mailbox:", e),
            e
              ? this.phoneService.dialNumber(e).catch(() => {
                  this.popupManager.request(
                    p.Ob.POPUP_PHONE_POPUP_TOAST_CALL_NOT_POSSIBLE,
                  );
                })
              : this.popupManager.request(p.Ob.POPUP_PHONE_MAILBOX_NOT_SET));
        }
      }
      var El = n("J7Kz"),
        Al = n("JCQ5"),
        Dl = n("uHmZ"),
        Ml = n("vAPC"),
        wl = n("MzQn"),
        Ll = n("t8AR");
      class kl {
        constructor(l, e, n, t, a, i) {
          ((this.bluetoothService = l),
            (this.phoneRoutingService = e),
            (this.phoneService = n),
            (this.clampsService = t),
            (this.smartphoneIntegrationService = a),
            (this.sosCallKoreaChinaService = i),
            (this.PhoneRoute = d.b),
            (this.popupIds = p.Ob),
            (this.activeReconnect$ = this.bluetoothService.reconnects$.pipe(
              Object(u.a)((l) => {
                const e = l.find((l) =>
                  l.serviceTypes.includes(Al.b.TELEPHONYHFP),
                );
                return (e && e.deviceName) || "";
              }),
            )),
            (this.numConnectedPhones$ = n.phones$.pipe(
              Object(u.a)(
                (l) =>
                  l.filter((l) => l.connectionState === m.e.ATTACHED).length,
              ),
            )));
        }
        connectPhone() {
          this.bluetoothService.trustedDevices$
            .pipe(
              Object(L.a)(1),
              Object(Ml.a)(1e3, []),
              Object(u.a)((l) => l && l.length > 0),
            )
            .subscribe((l) => {
              l
                ? this.phoneRoutingService.goToTrustedDevices(Dl.a.PHONE)
                : this.phoneRoutingService.goToBTDevicesFound(Dl.a.PHONE);
            });
        }
      }
      var Rl = (function (l) {
        return (
          (l.newSms = "SMS\nsenden"),
          (l.saveAs = "als Shortcut\nspeichern"),
          l
        );
      })({});
      class $l {
        constructor(l, e, n, t, a, i, u, r) {
          ((this.optionMenuService = l),
            (this.messagingContextService = e),
            (this.messagingInfoService = n),
            (this.shortcutsOptionsService = t),
            (this.usermanagementService = a),
            (this.shortCutFactoryService = i),
            (this.adbService = u),
            (this.newSmsOption = {
              icon: "E2A7_messaging_write_new_sms.webp",
              developerText: "SMS\nsenden",
              visible: !0,
              enabled: !1,
              textId: Rl.newSms,
            }),
            (this.saveAsPreset = {
              icon: "E3F0_save_shortcut_preset.webp",
              developerText: "als Shortcut\nspeichern",
              visible: !1,
              enabled: !1,
              textId: Rl.saveAs,
            }),
            (this.options = [this.newSmsOption, this.saveAsPreset]),
            (this.destroy$$ = new o.a(1)),
            (this.options$$ = new o.a(1)),
            (this.options$ = this.options$$.asObservable()),
            (this.logger = r.getLogger("phone.PhoneFavoritesOptionsService")),
            Object(f.b)(
              this.optionMenuService.item$,
              this.messagingInfoService.isSendingPossibleForFocusDevice(
                B.a.SMS,
              ),
              this.optionMenuService.isOptionMenuVisible$,
            )
              .pipe(
                Object(y.a)(([l, ,]) =>
                  this.logger.info("option menu item", l),
                ),
                Object(c.a)(([, , l]) => l),
                Object(s.a)(this.destroy$$),
              )
              .subscribe(([l, e]) => {
                if (l) {
                  ((this.newSmsOption.enabled =
                    (!!l.contact &&
                      null != l.index &&
                      !!l.contact.phoneNumberList &&
                      l.contact.phoneNumberList.length > 0) ||
                    !!l.number),
                    (this.newSmsOption.visible = e));
                  const n = this.shortcutsOptionsService.saveShortcutOption(
                    this.shortCutFactoryService.createShortcutFromFavorite(l),
                  );
                  ((this.saveAsPreset.visible = n.visible),
                    this.usermanagementService.isGuestAccountActive() ||
                    this.usermanagementService.isOfflineAccountActive()
                      ? ((this.saveAsPreset.enabled = !1),
                        (this.saveAsPreset.disabledReason =
                          p.Ob.POPUP_PRESET_TEL_GUEST))
                      : ((this.saveAsPreset.enabled = n.enabled),
                        (this.saveAsPreset.disabledReason = n.disabledReason)),
                    this.options$$.next(this.options),
                    this.logger.info(
                      "sms option visibility",
                      this.newSmsOption,
                    ));
                } else
                  (this.logger.warn(
                    "attempted to resolve options for invalid item: ",
                    l,
                  ),
                    this.options$$.next([]));
              }));
        }
        moreMenuForItemEnabled$(l) {
          const e = this.shortcutsOptionsService.saveShortcutOption(
            this.shortCutFactoryService.createShortcutFromFavorite(l),
          );
          return this.messagingInfoService
            .isSendingPossibleForFocusDevice(B.a.SMS)
            .pipe(
              Object(u.a)((l) => l || e.visible),
              Object(r.a)(),
              Object(p.pd)(
                this.logger,
                `moreMenuForItemEnabled$: number: ${l.number}, result:`,
              ),
            );
        }
        onOptionTap(l) {
          switch (l.option) {
            case this.newSmsOption:
              this.newSmsMessageTo(l.item);
              break;
            case this.saveAsPreset:
              this.shortcutsOptionsService.saveShortcut(
                this.shortCutFactoryService.createShortcutFromFavorite(l.item),
              );
              break;
            default:
              this.logger.error(
                "Received option tap event with unexpected type: ",
                event,
              );
          }
        }
        newSmsMessageTo(l) {
          const e = this.adbService.findPreferredFavoriteNumber(l);
          e
            ? this.messagingContextService
                .enterMessagingSMS({ selectedNumber: e.number })
                .then((l) => {
                  this.logger.info("Entering sms from phone favorites: ", l);
                })
                .catch((l) => {
                  this.logger.error(
                    "Failed to create new SMS message for favorite.\nReason: " +
                      l,
                  );
                })
            : this.logger.warn(
                "Failed to retrieve phone number for favorite: ",
                l,
              );
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
      }
      var Fl = (function (l) {
        return (
          (l.NoPhoneFavoritesStoredHint =
            "Es sind keine Favoriten hinterlegt."),
          (l.PhoneFavoritesStillNotAvailableHint =
            "Favoriten sind noch nicht verf\xfcgbar."),
          l
        );
      })({});
      class Bl {
        constructor(l, e, n, t, a, i, c, s, b, h) {
          ((this.adbService = l),
            (this.phoneService = e),
            (this.routingService = n),
            (this.popupManager = t),
            (this.optionsMenuService = a),
            (this.changeDetector = i),
            (this.favoriteOptionService = c),
            (this.lockingService = s),
            (this.optionTypeEnum = Rl),
            (this.statusTextEnum = Fl),
            (this.borderStyle = p.gd.isBentley ? p.m.NONE : p.m.THICK),
            (this.environment = p.gd),
            (this.favoritesToDelete = new Map()),
            (this.editMode = !1),
            (this.PhoneRoute = d.b),
            (this.SearchTypeEnum = Y.b),
            (this.popupIds = p.Ob),
            (this.infoRoute = d.b.Main.children.Addressbook.children.Contact),
            (this.borderStyleEnum = p.m),
            (this.editLockingKey = { type: p.Eb.EDIT_MODE }),
            (this.editLockingParam = { lockingKey: this.editLockingKey }),
            (this.destroy$$ = new o.a(1)),
            (this.logger = h.getLogger("phone.PhoneFavoritesComponent")),
            (this.favorites$ = b.data.pipe(Object(_.a)((l) => l.favorites))),
            (this.totalFavorites$ = this.favorites$.pipe(
              Object(u.a)((l) => l && l.length),
              Object(r.a)(),
            )),
            (this.hasFavorites$ = this.favorites$.pipe(
              Object(u.a)((l) => !!l && l.length > 0),
              Object(r.a)(),
            )),
            (this.favoritesAvailable$ =
              this.adbService.focusDeviceProfileWithReload$.pipe(
                Object(u.a)((l) => !!l),
                Object(r.a)(),
              )));
        }
        ngOnInit() {
          this.lockingService
            .getProperty({ type: p.Eb.EDIT_MODE })
            .pipe(
              Object(_.a)((l) => l.lock$),
              Object(s.a)(this.destroy$$),
              Object(r.a)(),
            )
            .subscribe((l) => {
              l &&
                this.editMode &&
                (this.logger.info(
                  "ngOnInit: leave edit mode because of blocking function",
                ),
                this.toggleEditMode(),
                this.popupManager.request(p.Db.DEFAULT_LOCKING_TOAST));
            });
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        tryToStartCall(l) {
          !this.editMode &&
            l &&
            (l.contact || l.number) &&
            this.adbService.callFavorite(l);
        }
        openOptionsMenu(l) {
          l &&
            this.favoriteOptionService
              .moreMenuForItemEnabled$(l)
              .pipe(Object(L.a)(1))
              .toPromise()
              .then((e) => {
                e && this.optionsMenuService.showOptionMenu(l);
              });
        }
        toggleEditMode() {
          ((this.editMode = !this.editMode),
            this.favoritesToDelete.clear(),
            this.changeDetector.markForCheck());
        }
        deleteButtonTapped() {
          const l = [];
          (this.favoritesToDelete.forEach((e) => {
            e.contact ? l.push(e.contact.id) : e.number && l.push(e.number);
          }),
            this.adbService
              .deleteFavorites(l, !1)
              .catch((l) => {
                (this.logger.warn(
                  "deleteButtonTapped: deleteFavorites failed with:",
                  l,
                ),
                  this.popupManager.request(
                    p.Ob.POPUP_PHONE_FAVORITE_EDIT_DELETE_ERR,
                  ));
              })
              .then(() => {
                (this.popupManager.request(
                  p.Ob.POPUP_PHONE_FAVORITE_EDIT_DELETE,
                ),
                  (this.editMode = !1),
                  this.favoritesToDelete.clear(),
                  this.changeDetector.markForCheck());
              }));
        }
        deSelectFavoriteToDelete(l) {
          l.contact || l.number
            ? (l.contact
                ? this.favoritesToDelete.has(l.contact.id)
                  ? this.favoritesToDelete.delete(l.contact.id)
                  : this.favoritesToDelete.set(l.contact.id, l)
                : l.number &&
                  (this.favoritesToDelete.has(l.number)
                    ? this.favoritesToDelete.delete(l.number)
                    : this.favoritesToDelete.set(l.number, l)),
              this.changeDetector.markForCheck())
            : this.logger.error(
                "deSelectFavoriteToDelete: Could not deselect favorite to delete due to invalid contact or number",
                l,
              );
        }
        toggleDeleteAllSelection() {
          this.favorites$
            .pipe(Object(L.a)(1), Object(s.a)(this.destroy$$))
            .subscribe((l) => {
              (this.favoritesToDelete.size === l.length
                ? this.favoritesToDelete.clear()
                : l.forEach((l) => {
                    l.contact
                      ? this.favoritesToDelete.set(l.contact.id, l)
                      : l.number && this.favoritesToDelete.set(l.number, l);
                  }),
                this.changeDetector.markForCheck());
            });
        }
      }
      var jl = n("o1hM"),
        Hl = n("TOCt"),
        zl = n("2DZl"),
        Ul = n("kNkr");
      class Vl {
        constructor(l, e, n, t) {
          ((this.asiService = l),
            (this.connectivityService = e),
            (this.btConnectionService = n),
            (this.PhoneRoute = d.b),
            (this.destroyed$$ = new x.a()),
            (this.logger = t.getLogger("phone.init-car-play")));
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        goToCarPlay() {
          this.asiService.requestAsiUi(jl.m.Phone);
        }
        connectDevice() {
          this.connectivityService.asiDevices$
            .pipe(
              Object(u.a)((l) =>
                l.find(
                  (l) =>
                    !!(l && l.asiDevice && l.asiDevice.activeTechnology) &&
                    l.asiDevice.activeTechnology === Ul.a.CarPlay,
                ),
              ),
              Object(L.a)(1),
            )
            .subscribe((l) => {
              l && l.bluetoothDevice
                ? (this.logger.info(
                    "connectDevice: carplay was attached. attach this device via hfp",
                    l,
                  ),
                  this.btConnectionService.connectDeviceToService(
                    l.bluetoothDevice,
                    Dl.a.PHONE,
                    Al.b.TELEPHONYHFP,
                    Object(D.a)(void 0),
                  ))
                : (this.logger.info(
                    "connectDevice: previous carplay device has no bluetooth reference. Only deactivate carplay",
                    l,
                  ),
                  this.deactivateCarPlay());
            });
        }
        deactivateCarPlay() {
          this.asiService.deactivateCarPlayAndEnterAppContext(Tl.w);
        }
      }
      class Kl {
        constructor(l, e) {
          ((this.sosCallKoreaChinaService = l),
            (this.routingService = e),
            (this.PhoneRoute = d.b),
            (this.listItemType = p.rb),
            (this.sosCallNameEnum = N.e));
        }
        dialSosNumber(l) {
          this.sosCallKoreaChinaService.dialSosNumber(l);
        }
      }
      class Gl {
        constructor() {
          this.context = p.s.Phone;
        }
      }
      class Yl {}
      var Wl = n("C9Ky"),
        Zl = n("89Z2"),
        ql = n("kqft"),
        Jl = n("+sw+"),
        Xl = n("FfND"),
        Ql = n("bou3"),
        le = n("yNay"),
        ee = n("1VvW"),
        ne = n("CDcS"),
        te = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:100%;width:100%;color:#fff}",
            ],
          ],
          data: {},
        });
      function ae(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              5,
              "au3-app-outlet",
              [],
              [
                [40, "@screenChange", 0],
                [2, "context", null],
              ],
              [
                ["component", "@screenChange.start"],
                ["component", "@screenChange.done"],
              ],
              function (l, e, n) {
                var a = !0;
                return (
                  "component:@screenChange.start" === e &&
                    (a = !1 !== t.Nb(l, 1).animationStarted(n) && a),
                  "component:@screenChange.done" === e &&
                    (a = !1 !== t.Nb(l, 1).animationDone(n) && a),
                  a
                );
              },
              Zl.b,
              Zl.a,
            )),
            t.xb(
              1,
              245760,
              null,
              1,
              ql.a,
              [[2, Jl.a], Xl.a, t.h, Ql.a, le.a],
              null,
              null,
            ),
            t.Tb(335544320, 1, { arod: 0 }),
            (l()(),
            t.yb(
              3,
              16777216,
              null,
              0,
              2,
              "router-outlet",
              [],
              [[2, "mib3-router-outlet--hide-adjacent-sibling", null]],
              null,
              null,
              null,
              null,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              ee.o,
              [ee.b, t.P, t.j, [8, null], t.h],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              [[1, 4]],
              0,
              ne.a,
              [ee.o, t.h, t.z, le.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            (l(e, 1, 0), l(e, 4, 0), l(e, 5, 0));
          },
          function (l, e) {
            (l(e, 0, 0, t.Nb(e, 1).screenState, !0),
              l(e, 3, 0, t.Nb(e, 5).hideAdjacentSibling));
          },
        );
      }
      function ie(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-phone",
              [],
              [[8, "className", 0]],
              null,
              null,
              ae,
              te,
            )),
            t.xb(1, 49152, null, 0, Gl, [], null, null),
          ],
          null,
          function (l, e) {
            l(e, 0, 0, t.Nb(e, 1).context);
          },
        );
      }
      var oe = t.ub("au3-phone", Gl, ie, {}, {}, []),
        ue = n("8WOv"),
        re = n("OtM5"),
        ce = n("9ZFG"),
        se = n("bMuc"),
        be = n("fu7d"),
        de = n("ZIdM"),
        pe = n("3bpu"),
        he = n("6zvu"),
        me = n("VcEz"),
        ge = n("y9xZ"),
        fe = n("BMrr"),
        xe = n("IEns"),
        ve = n("6480"),
        Se = n("oeT7"),
        ye = n("t7cT"),
        Oe = n("ijxY"),
        Ce = n("z6QT"),
        Ne = n("flsk"),
        Te = n("FQEI"),
        Pe = n("O82V"),
        _e = n("Eln4"),
        Ie = n("evAh"),
        Ee = n("zPMi"),
        Ae = n("CpzC"),
        De = n("0Bsn"),
        Me = n("5GjX"),
        we = n("mYyF"),
        Le = n("v98a"),
        ke = n("aOG8"),
        Re = n("Krzs"),
        $e = n("Z2XD"),
        Fe = n("VUTu"),
        Be = n("nK9R"),
        je = n("qzuC"),
        He = n("8yWk"),
        ze = n("An66"),
        Ue = n("ZXHi"),
        Ve = n("IRNg"),
        Ke = n("8TlW"),
        Ge = n("Xo58"),
        Ye = n("m3Ja"),
        We = n("r+e+"),
        Ze = n("bmFL"),
        qe = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}",
            ],
          ],
          data: {},
        });
      function Je(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-title-line-item",
              [
                ["icon", "ES058_phone_sos_call_cn.webp"],
                ["id", "SosButton"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
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
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              null,
              null,
            ),
            t.xb(2, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              ve.a,
              [Xl.a, Se.i, re.a, he.a, ve.b, ye.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.xb(7, 16384, null, 0, Oe.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              9,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              10,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 3, 0, "SosButton"),
              l(e, 5, 0),
              l(e, 6, 0, n.PhoneRoute.SosDialingList),
              l(e, 9, 0),
              l(e, 10, 0, !1, "ES058_phone_sos_call_cn.webp"));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 1).combinedDisabled,
              t.Nb(e, 1).useBrighterIcon,
              t.Nb(e, 9).markerClassEnabled,
              t.Nb(e, 10).useItemPlaceholder,
            );
          },
        );
      }
      function Xe(l) {
        return t.ac(
          2,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              26,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:PHONE_INIT_MAIN"],
              ],
              null,
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ge.a, [le.a], { id: [0, "id"] }, null),
            (l()(),
            t.yb(
              3,
              0,
              null,
              0,
              18,
              "au3-title-line",
              [
                ["class", "title-line"],
                ["id", ""],
              ],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Fe.b,
              Fe.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              Be.a,
              [je.a, He.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
                hideLeftBorder: [2, "hideLeftBorder"],
              },
              null,
            ),
            (l()(), t.hb(16777216, null, 2, 2, null, Je)),
            t.xb(
              7,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (l()(),
            t.yb(
              9,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "GoToSettings"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              ue.b,
              ue.a,
            )),
            t.xb(
              10,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(11, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              12,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              14,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              null,
            ),
            t.xb(
              15,
              671744,
              null,
              0,
              ve.a,
              [Xl.a, Se.i, re.a, he.a, ve.b, ye.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(16, 16384, null, 0, Oe.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              18,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              19,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              20,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              21,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(),
            t.yb(
              22,
              0,
              null,
              0,
              4,
              "au3-init-view",
              [],
              null,
              null,
              null,
              Ue.b,
              Ue.a,
            )),
            t.xb(23, 49152, null, 0, Ve.a, [], null, null),
            (l()(),
            t.yb(
              24,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [["id", "PhoneWirdInitialisiert"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(
              25,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              26,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "Screen:PHONE_INIT_MAIN"),
              l(e, 2, 0, "Screen:PHONE_INIT_MAIN"),
              l(e, 4, 0, ""),
              l(e, 5, 0, "Phone", "Hinweis", !0),
              l(
                e,
                7,
                0,
                t.Yb(
                  e,
                  7,
                  0,
                  t
                    .Nb(e, 8)
                    .transform(n.sosCallKoreaChinaService.sosButtonAvailable$),
                ),
              ),
              l(e, 10, 0, !0),
              l(e, 12, 0, "GoToSettings"),
              l(e, 14, 0),
              l(e, 15, 0, n.PhoneRoute.Main.children.Settings, !0),
              l(e, 18, 0),
              l(e, 19, 0, !1, "E186_settings.webp"),
              l(e, 25, 0, "PhoneWirdInitialisiert"),
              l(
                e,
                26,
                0,
                "Phone wird initialisiert.\nBitte warten...",
                "PhoneWirdInitialisiert",
                3,
              ));
          },
          function (l, e) {
            (l(
              e,
              3,
              0,
              t.Nb(e, 5).hideLeftBorder,
              t.Nb(e, 5).hideDividingBorders,
            ),
              l(
                e,
                9,
                0,
                t.Nb(e, 10).combinedDisabled,
                t.Nb(e, 10).useBrighterIcon,
                t.Nb(e, 18).markerClassEnabled,
                t.Nb(e, 19).useItemPlaceholder,
              ),
              l(
                e,
                24,
                0,
                t.Nb(e, 26).backgroundColor,
                t.Nb(e, 26).fixedNumberOfLines,
                t.Nb(e, 26).mayContainLatinCharsForArabic,
                t.Nb(e, 26).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function Qe(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-initialization",
              [],
              null,
              null,
              null,
              Xe,
              qe,
            )),
            t.xb(1, 49152, null, 0, Sl, [X.a], null, null),
          ],
          null,
          null,
        );
      }
      var ln = t.ub("au3-initialization", Sl, Qe, {}, {}, []),
        en = n("eZMD"),
        nn = n("HD2x"),
        tn = n("M706"),
        an = n("aMc6"),
        on = n("fzcM"),
        un = n("erFY"),
        rn = n("5wO1"),
        cn = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}",
            ],
          ],
          data: {},
        });
      function sn(l) {
        return t.ac(
          2,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              44,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:PHONE_INIT_CARPLAY_*"],
              ],
              null,
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ge.a, [le.a], { id: [0, "id"] }, null),
            (l()(),
            t.yb(
              3,
              0,
              null,
              0,
              16,
              "au3-title-line",
              [
                ["class", "title-line"],
                ["id", ""],
              ],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Fe.b,
              Fe.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              Be.a,
              [je.a, He.a],
              {
                primaryNonI18nText: [0, "primaryNonI18nText"],
                hasSecondaryText: [1, "hasSecondaryText"],
                secondaryDeveloperText: [2, "secondaryDeveloperText"],
                hideLeftBorder: [3, "hideLeftBorder"],
              },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (l()(),
            t.yb(
              7,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "SettingsButton"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              ue.b,
              ue.a,
            )),
            t.xb(
              8,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              null,
              null,
            ),
            t.xb(9, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              10,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              12,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              null,
            ),
            t.xb(
              13,
              671744,
              null,
              0,
              ve.a,
              [Xl.a, Se.i, re.a, he.a, ve.b, ye.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(14, 16384, null, 0, Oe.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              16,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              17,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              18,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              19,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(),
            t.yb(
              20,
              0,
              null,
              0,
              24,
              "au3-instruction-text",
              [["id", "AppleCarPlayActivatedHint"]],
              null,
              null,
              null,
              en.b,
              en.a,
            )),
            t.xb(
              21,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              22,
              49152,
              null,
              0,
              nn.a,
              [],
              { primaryDeveloperText: [0, "primaryDeveloperText"] },
              null,
            ),
            (l()(),
            t.yb(
              23,
              0,
              null,
              1,
              21,
              "au3-operation-panel",
              [],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              tn.b,
              tn.a,
            )),
            t.xb(
              24,
              49152,
              null,
              0,
              an.a,
              [on.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (l()(),
            t.yb(
              25,
              0,
              null,
              1,
              9,
              "au3-operation-panel-item",
              [["id", "GoToCarPlayButton"]],
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
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== l.component.goToCarPlay() && t),
                  t
                );
              },
              un.b,
              un.a,
            )),
            t.xb(
              26,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(27, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              28,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              29,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              31,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              32,
              49152,
              null,
              0,
              rn.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            t.xb(
              33,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              34,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(),
            t.yb(
              35,
              0,
              null,
              1,
              9,
              "au3-operation-panel-item",
              [["id", "DeactivateCarPlayButton"]],
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
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== l.component.connectDevice() && t),
                  t
                );
              },
              un.b,
              un.a,
            )),
            t.xb(
              36,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(37, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              38,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              39,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              41,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              42,
              49152,
              null,
              0,
              rn.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            t.xb(
              43,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              44,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n,
              a = e.component;
            (l(e, 1, 0, "Screen:PHONE_INIT_CARPLAY_*"),
              l(e, 2, 0, "Screen:PHONE_INIT_CARPLAY_*"),
              l(e, 4, 0, ""),
              l(
                e,
                5,
                0,
                null ==
                  (n = t.Yb(
                    e,
                    5,
                    0,
                    t.Nb(e, 6).transform(a.asiService.currentActiveDevice$),
                  ))
                  ? null
                  : n.name,
                !0,
                "Hinweis",
                !0,
              ),
              l(e, 10, 0, "SettingsButton"),
              l(e, 12, 0),
              l(e, 13, 0, a.PhoneRoute.Main.children.Settings, !0),
              l(e, 16, 0),
              l(e, 17, 0, !1, "E186_settings.webp"),
              l(e, 21, 0, "AppleCarPlayActivatedHint"),
              l(
                e,
                22,
                0,
                "Ihr iPhone befindet sich im Apple CarPlay Modus.\nTelefonieren ist nur \xfcber Apple CarPlay m\xf6glich.\nM\xf6chten Sie jetzt zu Apple CarPlay wechseln oder\ndiese Funktion aktivieren?",
              ),
              l(e, 24, 0, !0),
              l(e, 26, 0, "GoToCarPlayButton"),
              l(e, 29, 0),
              l(e, 31, 0),
              l(e, 32, 0, "Apple CarPlay", !0),
              l(e, 36, 0, "DeactivateCarPlayButton"),
              l(e, 39, 0),
              l(e, 41, 0),
              l(e, 42, 0, "Audi MMI", !0));
          },
          function (l, e) {
            (l(
              e,
              3,
              0,
              t.Nb(e, 5).hideLeftBorder,
              t.Nb(e, 5).hideDividingBorders,
            ),
              l(
                e,
                7,
                0,
                t.Nb(e, 8).combinedDisabled,
                t.Nb(e, 8).useBrighterIcon,
                t.Nb(e, 16).markerClassEnabled,
                t.Nb(e, 17).useItemPlaceholder,
              ),
              l(e, 23, 0, t.Nb(e, 24).alignInside, t.Nb(e, 24).alignOutside),
              l(e, 25, 1, [
                t.Nb(e, 31).markerClassEnabled,
                t.Nb(e, 32).showSeparatorLeft,
                t.Nb(e, 32).showSeparatorRight,
                t.Nb(e, 32).prio1Main,
                t.Nb(e, 32).prio1SmallScale,
                t.Nb(e, 32).prio2SmallScale,
                t.Nb(e, 32).prio1,
                t.Nb(e, 32).prio2,
                t.Nb(e, 32).prio1IconText,
                t.Nb(e, 32).prio1IconOnly,
                t.Nb(e, 32).prio1TextOnly,
                t.Nb(e, 32).prio2IconText,
                t.Nb(e, 32).prio2IconOnly,
                t.Nb(e, 32).prio2TextOnly,
                t.Nb(e, 32).useDefaultMaxWidth,
                t.Nb(e, 32).isDummy,
              ]),
              l(e, 35, 1, [
                t.Nb(e, 41).markerClassEnabled,
                t.Nb(e, 42).showSeparatorLeft,
                t.Nb(e, 42).showSeparatorRight,
                t.Nb(e, 42).prio1Main,
                t.Nb(e, 42).prio1SmallScale,
                t.Nb(e, 42).prio2SmallScale,
                t.Nb(e, 42).prio1,
                t.Nb(e, 42).prio2,
                t.Nb(e, 42).prio1IconText,
                t.Nb(e, 42).prio1IconOnly,
                t.Nb(e, 42).prio1TextOnly,
                t.Nb(e, 42).prio2IconText,
                t.Nb(e, 42).prio2IconOnly,
                t.Nb(e, 42).prio2TextOnly,
                t.Nb(e, 42).useDefaultMaxWidth,
                t.Nb(e, 42).isDummy,
              ]));
          },
        );
      }
      function bn(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-phone-init-car-play",
              [],
              null,
              null,
              null,
              sn,
              cn,
            )),
            t.xb(1, 180224, null, 0, Vl, [Ll.a, zl.a, Hl.a, le.a], null, null),
          ],
          null,
          null,
        );
      }
      var dn = t.ub("au3-phone-init-car-play", Vl, bn, {}, {}, []),
        pn = n("HVUF"),
        hn = n("B3Zb"),
        mn = n("0qMr"),
        gn = t.wb({
          encapsulation: 0,
          styles: [
            [
              '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.content-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;flex:1;height:100%;position:relative}.not-connected__message[_ngcontent-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:40px;width:100%;text-align:center}.button-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around}.button--connect-phone[_ngcontent-%COMP%]{flex:0 1 auto;width:100%;text-align:center}.button__icon--connect-phone[_ngcontent-%COMP%]{height:224px}.button__text[_ngcontent-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:40px}',
            ],
          ],
          data: {},
        });
      function fn(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-title-line-item",
              [
                ["icon", "E9C3_phone_toggle_active.webp"],
                ["id", "TogglePhones"],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== l.component.phoneService.togglePhones() && t),
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
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 16384, null, 0, Oe.a, [], null, null),
            t.xb(3, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              4,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              5,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            t.xb(
              7,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              9,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              10,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "TogglePhones"),
              l(
                e,
                5,
                0,
                0 ===
                  t.Yb(e, 5, 0, t.Nb(e, 6).transform(n.numConnectedPhones$)),
              ),
              l(e, 7, 0),
              l(e, 9, 0),
              l(e, 10, 0, !1, "E9C3_phone_toggle_active.webp"));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 5).combinedDisabled,
              t.Nb(e, 5).useBrighterIcon,
              t.Nb(e, 9).markerClassEnabled,
              t.Nb(e, 10).useItemPlaceholder,
            );
          },
        );
      }
      function xn(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-title-line-item",
              [
                ["icon", "ES058_phone_sos_call_cn.webp"],
                ["id", "SosButton"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
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
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              null,
              null,
            ),
            t.xb(2, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              ve.a,
              [Xl.a, Se.i, re.a, he.a, ve.b, ye.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.xb(7, 16384, null, 0, Oe.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              9,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              10,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 3, 0, "SosButton"),
              l(e, 5, 0),
              l(e, 6, 0, n.PhoneRoute.SosDialingList),
              l(e, 9, 0),
              l(e, 10, 0, !1, "ES058_phone_sos_call_cn.webp"));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 1).combinedDisabled,
              t.Nb(e, 1).useBrighterIcon,
              t.Nb(e, 9).markerClassEnabled,
              t.Nb(e, 10).useItemPlaceholder,
            );
          },
        );
      }
      function vn(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              11,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            t.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "AutomatischerVerbindungsaufbau"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              3,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (l()(),
            t.yb(
              4,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["id", "ReconnectDevice"],
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
              Ke.b,
              Ke.a,
            )),
            t.xb(
              5,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(6, 16384, null, 0, Oe.a, [], null, null),
            t.xb(
              7,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (l()(),
            t.yb(
              9,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "Mobilteilbeachten"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(
              10,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              11,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 2, 0, "AutomatischerVerbindungsaufbau"),
              l(
                e,
                3,
                0,
                "Automatischer Verbindungsaufbau zu:",
                "AutomatischerVerbindungsaufbau",
                1,
              ),
              l(e, 5, 0, "ReconnectDevice"),
              l(
                e,
                7,
                0,
                "ReconnectDevice",
                t.Yb(e, 7, 1, t.Nb(e, 8).transform(n.activeReconnect$)),
              ),
              l(e, 10, 0, "Mobilteilbeachten"),
              l(
                e,
                11,
                0,
                "Bitte beachten Sie eventuelle Anfragen an ihrem Mobiltelefon.\n Zu Ihrer Sicherheit f\xfchren Sie diese nicht w\xe4hrend der Fahrt durch.",
                "Mobilteilbeachten",
                2,
              ));
          },
          function (l, e) {
            (l(
              e,
              1,
              0,
              t.Nb(e, 3).backgroundColor,
              t.Nb(e, 3).fixedNumberOfLines,
              t.Nb(e, 3).mayContainLatinCharsForArabic,
              t.Nb(e, 3).shortenWithEllipsisForArabic,
            ),
              l(
                e,
                4,
                0,
                t.Nb(e, 7).backgroundColor,
                t.Nb(e, 7).fixedNumberOfLines,
                t.Nb(e, 7).mayContainLatinCharsForArabic,
                t.Nb(e, 7).shortenWithEllipsisForArabic,
              ),
              l(
                e,
                9,
                0,
                t.Nb(e, 11).backgroundColor,
                t.Nb(e, 11).fixedNumberOfLines,
                t.Nb(e, 11).mayContainLatinCharsForArabic,
                t.Nb(e, 11).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function Sn(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "NochKeinGer\xe4tVerbunden"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, e) {
            (l(e, 1, 0, "NochKeinGer\xe4tVerbunden"),
              l(
                e,
                2,
                0,
                "Mit dem MMI ist noch kein Ger\xe4t verbunden.",
                "NochKeinGer\xe4tVerbunden",
                1,
              ));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 2).backgroundColor,
              t.Nb(e, 2).fixedNumberOfLines,
              t.Nb(e, 2).mayContainLatinCharsForArabic,
              t.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function yn(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              16,
              "div",
              [["class", "button-container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            t.yb(
              1,
              0,
              null,
              null,
              15,
              "div",
              [["class", "button--connect-phone"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== l.component.connectPhone() && t),
                  t
                );
              },
              null,
              null,
            )),
            t.xb(2, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(),
            t.yb(
              10,
              0,
              null,
              null,
              2,
              "au3-icon",
              [["class", "button__icon--connect-phone"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "icon-component--hidden", null],
              ],
              null,
              null,
              pn.b,
              pn.a,
            )),
            t.xb(
              11,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              12,
              4243456,
              null,
              0,
              hn.b,
              [le.a, t.z],
              { fileName: [0, "fileName"] },
              null,
            ),
            (l()(),
            t.yb(
              13,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "button__text"],
                ["id", "MobiltelefonVerbinden"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(
              14,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              15,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
          ],
          function (l, e) {
            (l(
              e,
              4,
              0,
              (null == e.context.mib3Let.nodes
                ? null
                : e.context.mib3Let.nodes.length) < 1 ||
                !e.context.mib3Let.clampSOn ||
                e.context.mib3Let.androidAutoActive,
              e.context.mib3Let.clampSOn
                ? void 0
                : e.component.popupIds
                    .POPUP_CM_POPUP_SETTINGS_BLUETOOTH_SCONTACT_ERROR,
            ),
              l(e, 5, 0),
              l(e, 7, 0),
              l(
                e,
                11,
                0,
                (null == e.context.mib3Let.nodes
                  ? null
                  : e.context.mib3Let.nodes.length) < 1 ||
                  e.context.mib3Let.androidAutoActive,
              ),
              l(
                e,
                12,
                0,
                "/decorators/W714_ConnectionManager/mib2plus_w714_bluetooth_aktivieren.webp",
              ),
              l(e, 14, 0, "MobiltelefonVerbinden"),
              l(e, 15, 0, "Mobiltelefon verbinden", "MobiltelefonVerbinden", 1),
              l(
                e,
                16,
                0,
                (null == e.context.mib3Let.nodes
                  ? null
                  : e.context.mib3Let.nodes.length) < 1 ||
                  e.context.mib3Let.androidAutoActive,
              ));
          },
          function (l, e) {
            (l(
              e,
              1,
              0,
              t.Nb(e, 4).combinedDisabled,
              t.Nb(e, 4).useBrighterIcon,
              t.Nb(e, 7).markerClassEnabled,
            ),
              l(
                e,
                10,
                0,
                t.Nb(e, 11).combinedDisabled,
                t.Nb(e, 11).useBrighterIcon,
                t.Nb(e, 12).iconComponentHidden,
              ),
              l(
                e,
                13,
                0,
                t.Nb(e, 15).backgroundColor,
                t.Nb(e, 15).fixedNumberOfLines,
                t.Nb(e, 15).mayContainLatinCharsForArabic,
                t.Nb(e, 15).shortenWithEllipsisForArabic,
                t.Nb(e, 16).combinedDisabled,
                t.Nb(e, 16).useBrighterIcon,
              ));
          },
        );
      }
      function On(l) {
        return t.ac(
          2,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              35,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:PHONE_INIT_NOT_ATTACHED"],
              ],
              null,
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ge.a, [le.a], { id: [0, "id"] }, null),
            (l()(),
            t.yb(
              3,
              0,
              null,
              0,
              20,
              "au3-title-line",
              [
                ["class", "title-line"],
                ["id", ""],
              ],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Fe.b,
              Fe.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              Be.a,
              [je.a, He.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (l()(), t.hb(16777216, null, 0, 1, null, fn)),
            t.xb(
              7,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), t.hb(16777216, null, 2, 2, null, xn)),
            t.xb(
              9,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (l()(),
            t.yb(
              11,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "GoToSettings"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              ue.b,
              ue.a,
            )),
            t.xb(
              12,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              null,
              null,
            ),
            t.xb(13, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              14,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              15,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              16,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              null,
            ),
            t.xb(
              17,
              671744,
              null,
              0,
              ve.a,
              [Xl.a, Se.i, re.a, he.a, ve.b, ye.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(18, 16384, null, 0, Oe.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              20,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              21,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              22,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              23,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(),
            t.yb(
              24,
              0,
              null,
              0,
              11,
              "div",
              [["class", "content-container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            t.yb(
              25,
              0,
              null,
              null,
              4,
              "div",
              [["class", "not-connected__message"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(), t.hb(16777216, null, null, 2, null, vn)),
            t.xb(
              27,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (l()(), t.hb(0, [["noReconnects", 2]], null, 0, null, Sn)),
            (l()(), t.hb(16777216, null, null, 5, null, yn)),
            t.xb(
              31,
              16384,
              null,
              0,
              mn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            t.Pb(131072, ze.b, [t.h]),
            t.Pb(131072, ze.b, [t.h]),
            t.Qb(35, { nodes: 0, androidAutoActive: 1, clampSOn: 2 }),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "Screen:PHONE_INIT_NOT_ATTACHED"),
              l(e, 2, 0, "Screen:PHONE_INIT_NOT_ATTACHED"),
              l(e, 4, 0, ""),
              l(e, 5, 0, "Phone", "Hinweis"),
              l(e, 7, 0, n.phoneService.twoPhonesSupported),
              l(
                e,
                9,
                0,
                t.Yb(
                  e,
                  9,
                  0,
                  t
                    .Nb(e, 10)
                    .transform(n.sosCallKoreaChinaService.sosButtonAvailable$),
                ),
              ),
              l(e, 14, 0, "GoToSettings"),
              l(e, 16, 0),
              l(e, 17, 0, n.PhoneRoute.Main.children.Settings, !0),
              l(e, 20, 0),
              l(e, 21, 0, !1, "E186_settings.webp"),
              l(
                e,
                27,
                0,
                t.Yb(e, 27, 0, t.Nb(e, 28).transform(n.activeReconnect$)),
                t.Nb(e, 29),
              ));
            var a = l(
              e,
              35,
              0,
              t.Yb(
                e,
                31,
                0,
                t.Nb(e, 32).transform(n.bluetoothService.classicNodes$),
              ),
              t.Yb(
                e,
                31,
                0,
                t
                  .Nb(e, 33)
                  .transform(n.smartphoneIntegrationService.androidAutoActive$),
              ),
              t.Yb(
                e,
                31,
                0,
                t.Nb(e, 34).transform(n.clampsService.clampSStateOn$),
              ),
            );
            l(e, 31, 0, a);
          },
          function (l, e) {
            (l(
              e,
              3,
              0,
              t.Nb(e, 5).hideLeftBorder,
              t.Nb(e, 5).hideDividingBorders,
            ),
              l(
                e,
                11,
                0,
                t.Nb(e, 12).combinedDisabled,
                t.Nb(e, 12).useBrighterIcon,
                t.Nb(e, 20).markerClassEnabled,
                t.Nb(e, 21).useItemPlaceholder,
              ));
          },
        );
      }
      function Cn(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-not-connected",
              [],
              null,
              null,
              null,
              On,
              gn,
            )),
            t.xb(
              1,
              49152,
              null,
              0,
              kl,
              [El.a, i.a, a.c, wl.a, Ll.a, X.a],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var Nn = t.ub("au3-not-connected", kl, Cn, {}, {}, []),
        Tn = n("1pak"),
        Pn = n("P+G5"),
        _n = n("Obt0"),
        In = n("3qdr"),
        En = n("Xast"),
        An = n("jgeG"),
        Dn = n("nSAP"),
        Mn = n("sg2e"),
        wn = n("u0hB"),
        Ln = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".screen[_ngcontent-%COMP%], [_nghost-%COMP%]{height:100%;display:block}",
            ],
          ],
          data: {},
        });
      function kn(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", "GoToActiveCall"],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== l.component.goToActiveCall() && t),
                  t
                );
              },
              ue.b,
              ue.a,
            )),
            t.xb(1, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              2,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              3,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              5,
              147456,
              null,
              0,
              Tn.a,
              [le.a, Pn.a, t.l, [2, he.a], [2, re.a]],
              null,
              null,
            ),
            t.xb(6, 16384, null, 0, Oe.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            (l(e, 2, 0, "GoToActiveCall"),
              l(e, 4, 0),
              l(e, 8, 0),
              l(e, 9, 0, !1, "E163_Backbutton.webp"));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 8).markerClassEnabled,
              t.Nb(e, 9).useItemPlaceholder,
            );
          },
        );
      }
      function Rn(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              13,
              "au3-title-line-item",
              [
                ["id", "TogglePhones"],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== l.component.togglePhones() && t),
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
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 16384, null, 0, Oe.a, [], null, null),
            t.xb(3, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              4,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              5,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            t.xb(
              7,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              9,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              10,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            t.xb(
              12,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "TogglePhones"),
              l(
                e,
                5,
                0,
                t.Yb(
                  e,
                  5,
                  0,
                  t.Nb(e, 6).transform(n.phoneService.asiDeviceActive$),
                ),
              ),
              l(e, 7, 0),
              l(e, 9, 0),
              l(
                e,
                10,
                0,
                !1,
                t.Yb(e, 10, 1, t.Nb(e, 11).transform(n.toggleIcon$)),
              ));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 5).combinedDisabled,
              t.Nb(e, 5).useBrighterIcon,
              t.Nb(e, 9).markerClassEnabled,
              t.Nb(e, 10).useItemPlaceholder,
            );
          },
        );
      }
      function $n(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-title-line-item",
              [
                ["icon", "ES058_phone_sos_call_cn.webp"],
                ["id", "SosButton"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
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
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              null,
              null,
            ),
            t.xb(2, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              ve.a,
              [Xl.a, Se.i, re.a, he.a, ve.b, ye.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.xb(7, 16384, null, 0, Oe.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              9,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              10,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 3, 0, "SosButton"),
              l(e, 5, 0),
              l(e, 6, 0, n.PhoneRoute.SosDialingList),
              l(e, 9, 0),
              l(e, 10, 0, !1, "ES058_phone_sos_call_cn.webp"));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 1).combinedDisabled,
              t.Nb(e, 1).useBrighterIcon,
              t.Nb(e, 9).markerClassEnabled,
              t.Nb(e, 10).useItemPlaceholder,
            );
          },
        );
      }
      function Fn(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-tile",
              [],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t =
                      !1 !== l.component.tileClick(l.context.$implicit) && t),
                  t
                );
              },
              _n.b,
              _n.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(2, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              49152,
              null,
              0,
              In.a,
              [],
              { developerText: [0, "developerText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            (l(e, 1, 0, e.context.$implicit.id, e.component.tileNameTextEnum),
              l(
                e,
                4,
                0,
                e.context.$implicit.disabled ||
                  (e.context.$implicit.textInputRequired &&
                    !e.parent.context.mib3Let),
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.disableReason,
              ),
              l(e, 5, 0),
              l(e, 7, 0),
              l(e, 8, 0, e.context.$implicit.title, e.context.$implicit.icon));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 4).combinedDisabled,
              t.Nb(e, 4).useBrighterIcon,
              t.Nb(e, 7).markerClassEnabled,
            );
          },
        );
      }
      function Bn(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              6,
              "au3-tile-grid",
              [["id", ""]],
              null,
              null,
              null,
              En.b,
              En.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.Sb(512, null, De.a, De.a, [pe.a]),
            t.xb(
              4,
              1032192,
              null,
              1,
              An.a,
              [t.s, t.h, Dn.a, Ce.a, De.a, pe.a, le.a],
              { columns: [0, "columns"], tiles: [1, "tiles"] },
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (l()(), t.hb(0, [[1, 2]], null, 0, null, Fn)),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, ""), l(e, 4, 0, 3, n.tiles));
          },
          null,
        );
      }
      function jn(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              30,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:PHONE_MAIN"],
              ],
              null,
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ge.a, [le.a], { id: [0, "id"] }, null),
            (l()(),
            t.yb(
              3,
              0,
              null,
              0,
              24,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Fe.b,
              Fe.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              Be.a,
              [je.a, He.a],
              {
                primaryNonI18nText: [0, "primaryNonI18nText"],
                hasSecondaryText: [1, "hasSecondaryText"],
              },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (l()(), t.hb(16777216, null, 0, 2, null, kn)),
            t.xb(
              8,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (l()(), t.hb(16777216, null, 0, 1, null, Rn)),
            t.xb(
              11,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), t.hb(16777216, null, 2, 2, null, $n)),
            t.xb(
              13,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (l()(),
            t.yb(
              15,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "GoToSettings"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              ue.b,
              ue.a,
            )),
            t.xb(
              16,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              null,
              null,
            ),
            t.xb(17, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              18,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              19,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              20,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              null,
            ),
            t.xb(
              21,
              671744,
              null,
              0,
              ve.a,
              [Xl.a, Se.i, re.a, he.a, ve.b, ye.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(22, 16384, null, 0, Oe.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              24,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              25,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              26,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              27,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(), t.hb(16777216, null, 0, 2, null, Bn)),
            t.xb(
              29,
              16384,
              null,
              0,
              mn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
          ],
          function (l, e) {
            var n,
              a = e.component;
            (l(e, 1, 0, "Screen:PHONE_MAIN"),
              l(e, 2, 0, "Screen:PHONE_MAIN"),
              l(e, 4, 0, ""),
              l(
                e,
                5,
                0,
                t.Yb(e, 5, 0, t.Nb(e, 6).transform(a.phoneService.deviceName$)),
                !1,
              ),
              l(
                e,
                8,
                0,
                null ==
                  (n = t.Yb(
                    e,
                    8,
                    0,
                    t.Nb(e, 9).transform(a.phoneService.calls$),
                  ))
                  ? null
                  : n.focusCall,
              ),
              l(e, 11, 0, a.phoneService.twoPhonesSupported),
              l(
                e,
                13,
                0,
                t.Yb(
                  e,
                  13,
                  0,
                  t
                    .Nb(e, 14)
                    .transform(a.sosCallKoreaChinaService.sosButtonAvailable$),
                ),
              ),
              l(e, 18, 0, "GoToSettings"),
              l(e, 20, 0),
              l(e, 21, 0, a.PhoneRoute.Main.children.Settings, !0),
              l(e, 24, 0),
              l(e, 25, 0, !1, "E186_settings.webp"),
              l(
                e,
                29,
                0,
                t.Yb(
                  e,
                  29,
                  0,
                  t.Nb(e, 30).transform(a.textInputService.initialized$),
                ),
              ));
          },
          function (l, e) {
            (l(
              e,
              3,
              0,
              t.Nb(e, 5).hideLeftBorder,
              t.Nb(e, 5).hideDividingBorders,
            ),
              l(
                e,
                15,
                0,
                t.Nb(e, 16).combinedDisabled,
                t.Nb(e, 16).useBrighterIcon,
                t.Nb(e, 24).markerClassEnabled,
                t.Nb(e, 25).useItemPlaceholder,
              ));
          },
        );
      }
      function Hn(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-connected",
              [],
              null,
              null,
              null,
              jn,
              Ln,
            )),
            t.xb(
              1,
              245760,
              null,
              0,
              Il,
              [i.a, a.c, R.a, Mn.a, Cl.a, Nl.a, wn.c, X.a, le.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            l(e, 1, 0);
          },
          null,
        );
      }
      var zn = t.ub("au3-connected", Il, Hn, {}, {}, []),
        Un = n("l9Gk"),
        Vn = n("E7cc"),
        Kn = n("cl4r"),
        Gn = n("OgGm"),
        Yn = n("oWpa"),
        Wn = n("yegR"),
        Zn = n("iAsw"),
        qn = n("Pqed"),
        Jn = n("BS+8"),
        Xn = n("VYaS"),
        Qn = n("HygI"),
        lt = n("xaqU"),
        et = t.wb({
          encapsulation: 0,
          styles: [
            [
              '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.data[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;justify-content:center;overflow:hidden;padding:0 20px}.data__row[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;font-size:30px;height:50px}.main[_ngcontent-%COMP%]{font-size:40px}.main[_ngcontent-%COMP%], .sub[_ngcontent-%COMP%]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.info-text[_ngcontent-%COMP%]{width:100%;flex-grow:1;text-align:center;font-size:40px}.done-button[_ngcontent-%COMP%]{width:242px}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .phone-number-type[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .phone-number-type[_ngcontent-%COMP%]{margin-right:30px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .phone-number-type[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .phone-number-type[_ngcontent-%COMP%]{margin-left:30px}',
            ],
          ],
          data: {},
        });
      function nt(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              13,
              "au3-title-line-item",
              [
                ["icon", "E811_SearchButton.webp"],
                ["id", "SearchButton"],
                ["left", ""],
                ["ttDoNotToggleChildren", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
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
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              null,
              null,
            ),
            t.xb(2, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              ve.a,
              [Xl.a, Se.i, re.a, he.a, ve.b, ye.a],
              {
                routeInfo: [0, "routeInfo"],
                routerParams: [1, "routerParams"],
              },
              null,
            ),
            t.xb(7, 16384, null, 0, Oe.a, [], null, null),
            t.xb(8, 16384, null, 0, Un.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              10,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              11,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 3, 0, "SearchButton"),
              l(e, 5, 0),
              l(
                e,
                6,
                0,
                n.PhoneRoute.Main.children.Callstack.children.Search,
                n.SearchTypeEnum.CallHistory,
              ),
              l(e, 10, 0),
              l(e, 11, 0, !1, "E811_SearchButton.webp"));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 1).combinedDisabled,
              t.Nb(e, 1).useBrighterIcon,
              t.Nb(e, 10).markerClassEnabled,
              t.Nb(e, 11).useItemPlaceholder,
            );
          },
        );
      }
      function tt(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              15,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            t.yb(
              1,
              0,
              null,
              null,
              12,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", "BackButton"],
                ["left", ""],
                ["ttDoNotToggleChildren", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== l.component.routingService.goUp() && t),
                  t
                );
              },
              ue.b,
              ue.a,
            )),
            t.xb(2, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              6,
              147456,
              null,
              0,
              Tn.a,
              [le.a, Pn.a, t.l, [2, he.a], [2, re.a]],
              null,
              null,
            ),
            t.xb(7, 16384, null, 0, Oe.a, [], null, null),
            t.xb(8, 16384, null, 0, Un.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              10,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              11,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(), t.hb(16777216, null, null, 1, null, nt)),
            t.xb(
              15,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), t.hb(0, null, null, 0)),
          ],
          function (l, e) {
            (l(e, 3, 0, "BackButton"),
              l(e, 5, 0),
              l(e, 10, 0),
              l(e, 11, 0, !1, "E163_Backbutton.webp"),
              l(e, 15, 0, e.parent.context.mib3Let));
          },
          function (l, e) {
            l(
              e,
              1,
              0,
              t.Nb(e, 10).markerClassEnabled,
              t.Nb(e, 11).useItemPlaceholder,
            );
          },
        );
      }
      function at(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-title-line-item",
              [
                ["class", "done-button tl-item--background-gradient"],
                ["id", "DoneButton"],
                ["left", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== l.component.toggleEditMode() && t),
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
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              {
                text: [0, "text"],
                centered: [1, "centered"],
                hasOnlyText: [2, "hasOnlyText"],
              },
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            (l(e, 1, 0, "DoneButton"),
              l(e, 4, 0),
              l(e, 6, 0),
              l(e, 7, 0, "Fertig", !0, !0));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 6).markerClassEnabled,
              t.Nb(e, 7).useItemPlaceholder,
            );
          },
        );
      }
      function it(l) {
        return t.ac(
          0,
          [
            (l()(), t.hb(16777216, null, null, 1, null, at)),
            t.xb(
              1,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), t.hb(0, null, null, 0)),
          ],
          function (l, e) {
            l(e, 1, 0, e.parent.context.mib3Let);
          },
          null,
        );
      }
      function ot(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              13,
              "au3-title-line-item",
              [
                ["icon", "E3EC_edit_mode.webp"],
                ["id", "EditButton"],
                ["right", ""],
                ["ttDoNotToggleChildren", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== l.component.toggleEditMode() && t),
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
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 16384, null, 0, Oe.a, [], null, null),
            t.xb(3, 16384, null, 0, Un.a, [], null, null),
            t.xb(4, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              5,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              6,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              null,
              null,
            ),
            t.xb(
              7,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              9,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              10,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              11,
              671744,
              null,
              0,
              Vn.a,
              [re.a, Se.i, [2, Se.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "EditButton"),
              l(e, 7, 0),
              l(e, 9, 0),
              l(e, 10, 0, !1, "E3EC_edit_mode.webp"),
              l(e, 11, 0, n.editLockingParam));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 6).combinedDisabled,
              t.Nb(e, 6).useBrighterIcon,
              t.Nb(e, 9).markerClassEnabled,
              t.Nb(e, 10).useItemPlaceholder,
            );
          },
        );
      }
      function ut(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              16,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(), t.hb(16777216, null, null, 1, null, ot)),
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
            (l()(),
            t.yb(
              3,
              0,
              null,
              null,
              13,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "SettingsButton"],
                ["right", ""],
                ["ttDoNotToggleChildren", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              ue.b,
              ue.a,
            )),
            t.xb(
              4,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              null,
              null,
            ),
            t.xb(5, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              6,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              7,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              8,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              671744,
              null,
              0,
              ve.a,
              [Xl.a, Se.i, re.a, he.a, ve.b, ye.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(10, 16384, null, 0, Oe.a, [], null, null),
            t.xb(11, 16384, null, 0, Un.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              13,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              14,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              15,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 2, 0, e.parent.context.mib3Let),
              l(e, 6, 0, "SettingsButton"),
              l(e, 8, 0),
              l(e, 9, 0, n.PhoneRoute.Main.children.Settings, !0),
              l(e, 13, 0),
              l(e, 14, 0, !1, "E186_settings.webp"));
          },
          function (l, e) {
            l(
              e,
              3,
              0,
              t.Nb(e, 4).combinedDisabled,
              t.Nb(e, 4).useBrighterIcon,
              t.Nb(e, 13).markerClassEnabled,
              t.Nb(e, 14).useItemPlaceholder,
            );
          },
        );
      }
      function rt(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-callstack-view",
              [],
              null,
              [
                [null, "entryLongpressed"],
                [null, "entryTapped"],
                [null, "entryContactTapped"],
                [null, "entryEditTapped"],
              ],
              function (l, e, n) {
                var t = !0,
                  a = l.component;
                return (
                  "entryLongpressed" === e &&
                    (t = !1 !== a.openOptionsMenu(n) && t),
                  "entryTapped" === e && (t = !1 !== a.dial(n) && t),
                  "entryContactTapped" === e &&
                    (t =
                      !1 !==
                        a.routingService.goTo(
                          a.PhoneRoute.Main.children.Addressbook.children
                            .Contact,
                          null == n || null == n.contact ? null : n.contact.id,
                        ) && t),
                  "entryEditTapped" === e &&
                    (t =
                      !1 !==
                        a.routingService.goToEditNumber(
                          null == n ? null : n.phoneNumber,
                        ) && t),
                  t
                );
              },
              Kn.b,
              Kn.a,
            )),
            t.xb(
              1,
              49152,
              null,
              0,
              Gn.a,
              [],
              { recentCalls: [0, "recentCalls"], editMode: [1, "editMode"] },
              {
                entryLongpressed: "entryLongpressed",
                entryTapped: "entryTapped",
                entryContactTapped: "entryContactTapped",
                entryEditTapped: "entryEditTapped",
              },
            ),
          ],
          function (l, e) {
            l(e, 1, 0, e.parent.parent.context.mib3Let, e.component.editMode);
          },
          null,
        );
      }
      function ct(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "info-text"],
                ["id", "NoCallsInfoText"],
              ],
              null,
              null,
              null,
              Yn.b,
              Yn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              Wn.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (l, e) {
            (l(e, 1, 0, "NoCallsInfoText"),
              l(e, 2, 0, 5, "Es sind keine Anrufe vorhanden"));
          },
          null,
        );
      }
      function st(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "main"],
                ["id", "callNametext"],
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
              Ke.b,
              Ke.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 16384, null, 0, Oe.a, [], null, null),
            t.xb(
              3,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (l, e) {
            (l(e, 1, 0, "callNametext"),
              l(e, 3, 0, "callNametext", e.parent.context.mib3Let));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 3).backgroundColor,
              t.Nb(e, 3).fixedNumberOfLines,
              t.Nb(e, 3).mayContainLatinCharsForArabic,
              t.Nb(e, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function bt(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "main"],
                ["id", "CallStackOptionsCallerUnknown"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, e) {
            (l(e, 1, 0, "CallStackOptionsCallerUnknown"),
              l(e, 2, 0, "Unbekannt", "CallStackOptionsCallerUnknown", 1));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 2).backgroundColor,
              t.Nb(e, 2).fixedNumberOfLines,
              t.Nb(e, 2).mayContainLatinCharsForArabic,
              t.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function dt(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [["class", "phone-number-type"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            t.Rb(3, 1),
          ],
          function (l, e) {
            l(
              e,
              1,
              0,
              null == e.parent.parent.parent.context.$implicit
                ? null
                : e.parent.parent.parent.context.$implicit.phoneNumberType,
              e.component.phoneNumberTypeEnum,
            );
            var n = t.Yb(
              e,
              2,
              0,
              l(
                e,
                3,
                0,
                t.Nb(e.parent.parent.parent.parent.parent.parent, 0),
                null == e.parent.parent.parent.context.$implicit
                  ? null
                  : e.parent.parent.parent.context.$implicit.phoneNumberType,
              ),
            );
            l(
              e,
              2,
              0,
              n,
              null == e.parent.parent.parent.context.$implicit
                ? null
                : e.parent.parent.parent.context.$implicit.phoneNumberType,
              1,
            );
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 2).backgroundColor,
              t.Nb(e, 2).fixedNumberOfLines,
              t.Nb(e, 2).mayContainLatinCharsForArabic,
              t.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function pt(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              5,
              "div",
              [["class", "data__row"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(), t.hb(16777216, [[1, 2]], null, 1, null, dt)),
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
            (l()(),
            t.yb(
              3,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "sub"],
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
              Ke.b,
              Ke.a,
            )),
            t.xb(4, 16384, null, 0, Oe.a, [], null, null),
            t.xb(
              5,
              245760,
              null,
              0,
              Ge.a,
              [[8, null], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              { nonI18nValue: [0, "nonI18nValue"] },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(
              e,
              2,
              0,
              null == e.parent.parent.context.$implicit
                ? null
                : e.parent.parent.context.$implicit.phoneNumberType,
            ),
              l(e, 5, 0, n.subText(e.parent.parent.context.$implicit)));
          },
          function (l, e) {
            l(
              e,
              3,
              0,
              t.Nb(e, 5).backgroundColor,
              t.Nb(e, 5).fixedNumberOfLines,
              t.Nb(e, 5).mayContainLatinCharsForArabic,
              t.Nb(e, 5).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function ht(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              8,
              "div",
              [
                ["class", "data"],
                ["id", "templateDiv"],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (l()(),
            t.yb(
              2,
              0,
              null,
              null,
              4,
              "div",
              [["class", "data__row"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(), t.hb(16777216, [[1, 2]], null, 1, null, st)),
            t.xb(
              4,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), t.hb(16777216, [[1, 2]], null, 1, null, bt)),
            t.xb(
              6,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), t.hb(16777216, [[1, 2]], null, 1, null, pt)),
            t.xb(
              8,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (l, e) {
            (l(e, 1, 0, "templateDiv"),
              l(e, 4, 0, !!e.context.mib3Let),
              l(e, 6, 0, !e.context.mib3Let),
              l(
                e,
                8,
                0,
                !!e.parent.context.$implicit &&
                  !!e.parent.context.$implicit.name,
              ));
          },
          null,
        );
      }
      function mt(l) {
        return t.ac(
          0,
          [
            (l()(), t.hb(16777216, [[1, 2]], null, 1, null, ht)),
            t.xb(
              1,
              16384,
              null,
              0,
              mn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            (l()(), t.hb(0, null, null, 0)),
          ],
          function (l, e) {
            l(e, 1, 0, e.component.mainText(e.context.$implicit));
          },
          null,
        );
      }
      function gt(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              18,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            t.yb(
              1,
              0,
              null,
              null,
              8,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Fe.b,
              Fe.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              3,
              49152,
              null,
              0,
              Be.a,
              [je.a, He.a],
              {
                primaryNonI18nText: [0, "primaryNonI18nText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (l()(), t.hb(16777216, null, 0, 1, null, tt)),
            t.xb(
              6,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (l()(), t.hb(0, [["editModeLeft", 2]], null, 0, null, it)),
            (l()(), t.hb(16777216, null, 2, 1, null, ut)),
            t.xb(
              9,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), t.hb(16777216, null, null, 1, null, rt)),
            t.xb(
              11,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (l()(),
            t.hb(0, [["noRecentCallsAvailable", 2]], null, 0, null, ct)),
            (l()(),
            t.yb(
              13,
              0,
              null,
              null,
              5,
              "au3-option-menu-wrapper",
              [],
              null,
              null,
              null,
              Zn.b,
              Zn.a,
            )),
            t.Sb(6144, null, qn.b, null, [Jn.a]),
            t.Sb(512, null, Ie.a, Ie.a, [[3, Ie.a]]),
            t.xb(
              16,
              245760,
              null,
              1,
              Jn.a,
              [Xn.a, Qn.a, t.h, Ie.a],
              { ttEnumType: [0, "ttEnumType"] },
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (l()(), t.hb(0, [[1, 2]], null, 0, null, mt)),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 2, 0, ""),
              l(
                e,
                3,
                0,
                t.Yb(e, 3, 0, t.Nb(e, 4).transform(n.phoneService.deviceName$)),
                "Anrufliste",
              ),
              l(e, 6, 0, !n.editMode, t.Nb(e, 7)),
              l(e, 9, 0, !n.editMode),
              l(e, 11, 0, e.context.mib3Let, t.Nb(e, 12)),
              l(e, 16, 0, n.optionTypeEnum));
          },
          function (l, e) {
            l(
              e,
              1,
              0,
              t.Nb(e, 3).hideLeftBorder,
              t.Nb(e, 3).hideDividingBorders,
            );
          },
        );
      }
      function ft(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:PHONE_CALLSTACK_MAIN"],
              ],
              null,
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ge.a, [le.a], { id: [0, "id"] }, null),
            (l()(), t.hb(16777216, null, 0, 1, null, gt)),
            t.xb(
              4,
              16384,
              null,
              0,
              mn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
          ],
          function (l, e) {
            (l(e, 1, 0, "Screen:PHONE_CALLSTACK_MAIN"),
              l(e, 2, 0, "Screen:PHONE_CALLSTACK_MAIN"),
              l(
                e,
                4,
                0,
                (null == e.context.mib3Let ? null : e.context.mib3Let.length) >
                  0,
              ));
          },
          null,
        );
      }
      function xt(l) {
        return t.ac(
          0,
          [
            t.Pb(0, lt.a, []),
            (l()(), t.hb(16777216, null, null, 2, null, ft)),
            t.xb(
              2,
              16384,
              null,
              0,
              mn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
          ],
          function (l, e) {
            var n = e.component;
            l(
              e,
              2,
              0,
              t.Yb(e, 2, 0, t.Nb(e, 3).transform(n.groupedRecentCalls$)),
            );
          },
          null,
        );
      }
      function vt(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-callstack",
              [],
              null,
              null,
              null,
              xt,
              et,
            )),
            t.Sb(135680, null, G, G, [
              Qn.a,
              i.a,
              $.b,
              F.a,
              R.a,
              j.b,
              H.a,
              z.a,
              U.a,
              le.a,
            ]),
            t.Sb(6144, null, Xn.a, null, [G]),
            t.xb(
              3,
              245760,
              null,
              0,
              W,
              [i.a, a.c, Qn.a, Se.i, Mn.a, ee.a, le.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            l(e, 3, 0);
          },
          null,
        );
      }
      var St = t.ub("au3-callstack", W, vt, {}, {}, []),
        yt = n("0qWS"),
        Ot = n("z7LQ"),
        Ct = n("oPv+"),
        Nt = n("N2Hj"),
        Tt = n("UbWD"),
        Pt = n("2rvh"),
        _t = n("odRV"),
        It = n("Udyh"),
        Et = n("I3ve"),
        At = n("qiAR"),
        Dt = n("007S"),
        Mt = n("oxWk"),
        wt = n("Tr//"),
        Lt = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}",
            ],
          ],
          data: {},
        });
      function kt(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-callstack-item",
              [
                ["class", "item"],
                ["id", ""],
              ],
              null,
              [[null, "itemClicked"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "itemClicked" === e &&
                    (t = !1 !== l.component.dial(l.context.$implicit) && t),
                  t
                );
              },
              yt.b,
              yt.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              114688,
              null,
              0,
              Ot.a,
              [Ct.a],
              {
                forSds: [0, "forSds"],
                editMode: [1, "editMode"],
                call: [2, "call"],
                numCalls: [3, "numCalls"],
                selectedEntryIndex: [4, "selectedEntryIndex"],
                uiStateType: [5, "uiStateType"],
              },
              { itemClicked: "itemClicked" },
            ),
          ],
          function (l, e) {
            (l(e, 1, 0, ""),
              l(
                e,
                2,
                0,
                !1,
                !1,
                e.parent.context.mib3Let,
                1,
                e.context.index,
                void 0,
              ));
          },
          null,
        );
      }
      function Rt(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              38,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:PHONE_CALLSTACK_OPTION_CALL_HISTORY"],
              ],
              null,
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ge.a, [le.a], { id: [0, "id"] }, null),
            (l()(),
            t.yb(
              3,
              0,
              null,
              0,
              28,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Fe.b,
              Fe.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              Be.a,
              [je.a, He.a],
              {
                primaryNonI18nText: [0, "primaryNonI18nText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (l()(),
            t.yb(
              7,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", "BackButton"],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== l.component.phoneRoutingService.goBack() && t),
                  t
                );
              },
              ue.b,
              ue.a,
            )),
            t.xb(8, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              9,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              11,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              Tn.a,
              [le.a, Pn.a, t.l, [2, he.a], [2, re.a]],
              null,
              null,
            ),
            t.xb(13, 16384, null, 0, Oe.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              15,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              16,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              18,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(),
            t.yb(
              19,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "SettingsButton"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              ue.b,
              ue.a,
            )),
            t.xb(
              20,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              null,
              null,
            ),
            t.xb(21, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              22,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              23,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              24,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              null,
            ),
            t.xb(
              25,
              671744,
              null,
              0,
              ve.a,
              [Xl.a, Se.i, re.a, he.a, ve.b, ye.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(26, 16384, null, 0, Oe.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              28,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              29,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              30,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              31,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(),
            t.yb(
              32,
              0,
              null,
              0,
              6,
              "au3-list",
              [["id", ""]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Nt.b,
              Nt.a,
            )),
            t.Sb(6144, null, Tt.a, null, [Pt.a]),
            t.xb(
              34,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(35, 16384, null, 0, _t.a, [t.l], null, null),
            t.xb(
              36,
              12828672,
              null,
              1,
              Pt.a,
              [
                [2, It.a],
                [2, Et.a],
                [8, null],
                [2, be.a],
                [2, At.a],
                [2, Dt.a],
                [2, me.b],
                Se.i,
                t.z,
                t.h,
                le.a,
                Mt.a,
                wt.a,
                [2, Te.a],
                pe.a,
                [2, Se.a],
              ],
              { defaultTemplate: [0, "defaultTemplate"], items: [1, "items"] },
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (l()(),
            t.hb(
              0,
              [
                [1, 2],
                ["itemTemplate", 2],
              ],
              0,
              0,
              null,
              kt,
            )),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "Screen:PHONE_CALLSTACK_OPTION_CALL_HISTORY"),
              l(e, 2, 0, "Screen:PHONE_CALLSTACK_OPTION_CALL_HISTORY"),
              l(e, 4, 0, ""),
              l(
                e,
                5,
                0,
                t.Yb(e, 5, 0, t.Nb(e, 6).transform(n.deviceName$)),
                "Anrufverlauf",
              ),
              l(e, 9, 0, "BackButton"),
              l(e, 11, 0),
              l(e, 15, 0),
              l(e, 16, 0, !1, "E163_Backbutton.webp"),
              l(e, 22, 0, "SettingsButton"),
              l(e, 24, 0),
              l(e, 25, 0, n.PhoneRoute.Main.children.Settings, !0),
              l(e, 28, 0),
              l(e, 29, 0, !1, "E186_settings.webp"),
              l(e, 34, 0, ""),
              l(
                e,
                36,
                0,
                t.Nb(e, 38),
                null == e.context.mib3Let ? null : e.context.mib3Let.entries,
              ));
          },
          function (l, e) {
            (l(
              e,
              3,
              0,
              t.Nb(e, 5).hideLeftBorder,
              t.Nb(e, 5).hideDividingBorders,
            ),
              l(
                e,
                7,
                0,
                t.Nb(e, 15).markerClassEnabled,
                t.Nb(e, 16).useItemPlaceholder,
              ),
              l(
                e,
                19,
                0,
                t.Nb(e, 20).combinedDisabled,
                t.Nb(e, 20).useBrighterIcon,
                t.Nb(e, 28).markerClassEnabled,
                t.Nb(e, 29).useItemPlaceholder,
              ),
              l(e, 32, 0, t.Nb(e, 36).showLineNumbers));
          },
        );
      }
      function $t(l) {
        return t.ac(
          2,
          [
            (l()(), t.hb(16777216, null, null, 2, null, Rt)),
            t.xb(
              1,
              16384,
              null,
              0,
              mn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
          ],
          function (l, e) {
            var n = e.component;
            l(
              e,
              1,
              0,
              t.Yb(e, 1, 0, t.Nb(e, 2).transform(n.groupedRecentCall$)),
            );
          },
          null,
        );
      }
      function Ft(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-callstack-history",
              [],
              null,
              null,
              null,
              $t,
              Lt,
            )),
            t.xb(
              1,
              180224,
              null,
              0,
              w,
              [a.c, i.a, Mn.a, ee.a, le.a],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var Bt = t.ub("au3-callstack-history", w, Ft, {}, {}, []),
        jt = n("nSSr"),
        Ht = n("8i5V"),
        zt = n("KczA"),
        Ut = n("UaS1"),
        Vt = n("OJ7R"),
        Kt = t.wb({
          encapsulation: 0,
          styles: [["[_nghost-%COMP%]{display:block;height:100%}"]],
          data: {},
        });
      function Gt(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-enter-phone-number",
              [["id", "nonSOS"]],
              null,
              [
                [null, "onOk"],
                [null, "onBack"],
              ],
              function (l, e, n) {
                var t = !0,
                  a = l.component;
                return (
                  "onOk" === e && (t = !1 !== a.onDial(n) && t),
                  "onBack" === e && (t = !1 !== a.goBack() && t),
                  t
                );
              },
              jt.b,
              jt.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              573440,
              null,
              0,
              Ht.a,
              [zt.a, ce.a],
              {
                inputField: [0, "inputField"],
                placeholderDeveloperText: [1, "placeholderDeveloperText"],
                descriptionNonI18nTitle: [2, "descriptionNonI18nTitle"],
                descriptionId: [3, "descriptionId"],
                descriptionText: [4, "descriptionText"],
                descriptionIdEnumType: [5, "descriptionIdEnumType"],
                primaryNonI18nTitle: [6, "primaryNonI18nTitle"],
                secondaryTitleId: [7, "secondaryTitleId"],
                secondaryDeveloperTitle: [8, "secondaryDeveloperTitle"],
                secondaryTitleIdEnumType: [9, "secondaryTitleIdEnumType"],
                buttonText: [10, "buttonText"],
                buttonIcon: [11, "buttonIcon"],
                hasSettingsButton: [12, "hasSettingsButton"],
                contextId: [13, "contextId"],
              },
              { onOk: "onOk", onBack: "onBack" },
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "nonSOS"),
              l(e, 2, 1, [
                n.inputField,
                "Nummerneingabe",
                e.parent.context.mib3Let,
                n.description,
                n.description,
                n.dialOrEditNumberInstrTextEnum,
                e.parent.context.mib3Let,
                n.subtitle,
                n.subtitle,
                n.dialOrEditNumberTitelEnum,
                "W\xe4hlen",
                "E054_phone_continue_call.webp",
                !0,
                n.contextId,
              ]));
          },
          null,
        );
      }
      function Yt(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-enter-phone-number",
              [["id", "SOS"]],
              null,
              [
                [null, "onOk"],
                [null, "onBack"],
              ],
              function (l, e, n) {
                var t = !0,
                  a = l.component;
                return (
                  "onOk" === e && (t = !1 !== a.onDial(n) && t),
                  "onBack" === e && (t = !1 !== a.goBack() && t),
                  t
                );
              },
              jt.b,
              jt.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              573440,
              null,
              0,
              Ht.a,
              [zt.a, ce.a],
              {
                inputField: [0, "inputField"],
                placeholderDeveloperText: [1, "placeholderDeveloperText"],
                descriptionTitle: [2, "descriptionTitle"],
                descriptionText: [3, "descriptionText"],
                primaryDeveloperTitle: [4, "primaryDeveloperTitle"],
                secondaryDeveloperTitle: [5, "secondaryDeveloperTitle"],
                buttonText: [6, "buttonText"],
                buttonIcon: [7, "buttonIcon"],
                hasSettingsButton: [8, "hasSettingsButton"],
                disableSDS: [9, "disableSDS"],
                contextId: [10, "contextId"],
              },
              { onOk: "onOk", onBack: "onBack" },
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "SOS"),
              l(e, 2, 1, [
                n.inputField,
                "SOS Nummer eingeben",
                "Emergency Call",
                "Bitte geben Sie eine SOS Nummer ein.",
                "Emergency Call",
                "Nummer w\xe4hlen",
                "W\xe4hlen",
                "E054_phone_continue_call.webp",
                !0,
                !0,
                n.contextId,
              ]));
          },
          null,
        );
      }
      function Wt(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              6,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:PHONE_KEYPAD_MAIN"],
                ["ttDisplayVariant", ""],
              ],
              null,
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(1, 16384, null, 0, Ut.a, [], null, null),
            t.xb(
              2,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [6, Ut.a]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 4440064, null, 0, ge.a, [le.a], { id: [0, "id"] }, null),
            (l()(), t.hb(16777216, null, 0, 1, null, Gt)),
            t.xb(
              5,
              540672,
              null,
              0,
              Vt.a,
              [le.a, t.P, t.L],
              {
                ttStaticIf: [0, "ttStaticIf"],
                ttStaticIfElse: [1, "ttStaticIfElse"],
              },
              null,
            ),
            (l()(), t.hb(0, [["sos", 2]], 0, 0, null, Yt)),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 2, 0, "Screen:PHONE_KEYPAD_MAIN"),
              l(e, 3, 0, "Screen:PHONE_KEYPAD_MAIN"),
              l(e, 5, 0, !n.isSos, t.Nb(e, 6)));
          },
          null,
        );
      }
      function Zt(l) {
        return t.ac(
          0,
          [
            (l()(), t.hb(16777216, null, null, 2, null, Wt)),
            t.xb(
              1,
              16384,
              null,
              0,
              mn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
          ],
          function (l, e) {
            var n = e.component;
            l(
              e,
              1,
              0,
              t.Yb(e, 1, 0, t.Nb(e, 2).transform(n.phoneService.deviceName$)),
            );
          },
          null,
        );
      }
      function qt(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-dial-number",
              [],
              null,
              null,
              null,
              Zt,
              Kt,
            )),
            t.xb(
              1,
              245760,
              null,
              0,
              nl,
              [a.c, i.a, X.a, wn.c, ee.a, le.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            l(e, 1, 0);
          },
          null,
        );
      }
      var Jt = t.ub("au3-dial-number", nl, qt, {}, {}, []),
        Xt = n("IlA8"),
        Qt = n("6mtq"),
        la = n("U6SP"),
        ea = n("1ZTq"),
        na = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;height:100%}.content-area[_ngcontent-%COMP%]{flex-grow:1}.done-button[_ngcontent-%COMP%]{width:231px}.statustext[_ngcontent-%COMP%]{min-height:0}.statustext[_ngcontent-%COMP%], .statustext-bentley[_ngcontent-%COMP%]{text-align:center;font-size:40px}.statustext-bentley[_ngcontent-%COMP%]{min-height:504px;max-height:504px}.button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:10px 0}.delete-button[_ngcontent-%COMP%]{width:350px;height:112px}.tl-button[_ngcontent-%COMP%]{width:231px}.component-layout-arabic[_nghost-%COMP%]   .title-line--edit-mode[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .title-line--edit-mode[_ngcontent-%COMP%]{direction:rtl}.component-layout-latin[_nghost-%COMP%]   .title-line--edit-mode[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .title-line--edit-mode[_ngcontent-%COMP%]{direction:ltr}.options--favorit-list-item[_ngcontent-%COMP%]{pointer-events:none}",
            ],
          ],
          data: {},
        });
      function ta(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              55,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            t.yb(
              1,
              0,
              null,
              null,
              54,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Fe.b,
              Fe.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              3,
              49152,
              null,
              0,
              Be.a,
              [je.a, He.a],
              {
                primaryNonI18nText: [0, "primaryNonI18nText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (l()(),
            t.yb(
              5,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", "BackButton"],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== l.component.routingService.goBack() && t),
                  t
                );
              },
              ue.b,
              ue.a,
            )),
            t.xb(6, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              7,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              9,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              Tn.a,
              [le.a, Pn.a, t.l, [2, he.a], [2, re.a]],
              null,
              null,
            ),
            t.xb(11, 16384, null, 0, Oe.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              13,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              14,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              15,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(),
            t.yb(
              17,
              0,
              null,
              0,
              12,
              "au3-title-line-item",
              [
                ["icon", "E811_SearchButton.webp"],
                ["id", "SearchButton"],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              ue.b,
              ue.a,
            )),
            t.xb(
              18,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(19, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              20,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              21,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              22,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              null,
            ),
            t.xb(
              23,
              671744,
              null,
              0,
              ve.a,
              [Xl.a, Se.i, re.a, he.a, ve.b, ye.a],
              {
                routeInfo: [0, "routeInfo"],
                routerParams: [1, "routerParams"],
              },
              null,
            ),
            t.xb(24, 16384, null, 0, Oe.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              26,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              27,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              28,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              29,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(),
            t.yb(
              30,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["icon", "E3EC_edit_mode.webp"],
                ["id", "EditButton"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== l.component.toggleEditMode() && t),
                  t
                );
              },
              ue.b,
              ue.a,
            )),
            t.xb(
              31,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(32, 16384, null, 0, Oe.a, [], null, null),
            t.xb(33, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              34,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              35,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              36,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              38,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              39,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              40,
              671744,
              null,
              0,
              Vn.a,
              [re.a, Se.i, [2, Se.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            t.xb(
              41,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              42,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(),
            t.yb(
              43,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "SettingsButton"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              ue.b,
              ue.a,
            )),
            t.xb(
              44,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              null,
              null,
            ),
            t.xb(45, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              46,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              47,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              48,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              null,
            ),
            t.xb(
              49,
              671744,
              null,
              0,
              ve.a,
              [Xl.a, Se.i, re.a, he.a, ve.b, ye.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(50, 16384, null, 0, Oe.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              52,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              53,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              54,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              55,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 2, 0, ""),
              l(
                e,
                3,
                0,
                t.Yb(e, 3, 0, t.Nb(e, 4).transform(n.phoneService.deviceName$)),
                "Favoriten",
              ),
              l(e, 7, 0, "BackButton"),
              l(e, 9, 0),
              l(e, 13, 0),
              l(e, 14, 0, !1, "E163_Backbutton.webp"),
              l(e, 18, 0, !e.parent.context.mib3Let),
              l(e, 20, 0, "SearchButton"),
              l(e, 22, 0),
              l(
                e,
                23,
                0,
                n.PhoneRoute.Main.children.Favorites.children.Search,
                n.SearchTypeEnum.Favorites,
              ),
              l(e, 26, 0),
              l(e, 27, 0, !1, "E811_SearchButton.webp"),
              l(e, 31, 0, "EditButton"),
              l(e, 35, 0, !e.parent.context.mib3Let),
              l(e, 36, 0),
              l(e, 38, 0),
              l(e, 39, 0, !1, "E3EC_edit_mode.webp"),
              l(e, 40, 0, n.editLockingParam),
              l(e, 46, 0, "SettingsButton"),
              l(e, 48, 0),
              l(e, 49, 0, n.PhoneRoute.Main.children.Settings, !0),
              l(e, 52, 0),
              l(e, 53, 0, !1, "E186_settings.webp"));
          },
          function (l, e) {
            (l(
              e,
              1,
              0,
              t.Nb(e, 3).hideLeftBorder,
              t.Nb(e, 3).hideDividingBorders,
            ),
              l(
                e,
                5,
                0,
                t.Nb(e, 13).markerClassEnabled,
                t.Nb(e, 14).useItemPlaceholder,
              ),
              l(
                e,
                17,
                0,
                t.Nb(e, 18).combinedDisabled,
                t.Nb(e, 18).useBrighterIcon,
                t.Nb(e, 26).markerClassEnabled,
                t.Nb(e, 27).useItemPlaceholder,
              ),
              l(
                e,
                30,
                0,
                t.Nb(e, 35).combinedDisabled,
                t.Nb(e, 35).useBrighterIcon,
                t.Nb(e, 38).markerClassEnabled,
                t.Nb(e, 39).useItemPlaceholder,
              ),
              l(
                e,
                43,
                0,
                t.Nb(e, 44).combinedDisabled,
                t.Nb(e, 44).useBrighterIcon,
                t.Nb(e, 52).markerClassEnabled,
                t.Nb(e, 53).useItemPlaceholder,
              ));
          },
        );
      }
      function aa(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              12,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            t.yb(
              1,
              0,
              null,
              null,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-button"],
                ["edit", ""],
                ["id", "DeselectAllButton"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== l.component.toggleDeleteAllSelection() && t),
                  t
                );
              },
              ue.b,
              ue.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              4,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              5,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              null,
              null,
            ),
            t.xb(
              6,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              {
                text: [0, "text"],
                centered: [1, "centered"],
                hasOnlyText: [2, "hasOnlyText"],
              },
              null,
            ),
            t.xb(
              10,
              671744,
              null,
              0,
              Vn.a,
              [re.a, Se.i, [2, Se.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 2, 0, "DeselectAllButton"),
              l(e, 6, 0),
              l(e, 8, 0),
              l(e, 9, 0, "Alle abw\xe4hlen", !0, !0),
              l(e, 10, 0, n.editLockingParam));
          },
          function (l, e) {
            l(
              e,
              1,
              0,
              t.Nb(e, 5).combinedDisabled,
              t.Nb(e, 5).useBrighterIcon,
              t.Nb(e, 8).markerClassEnabled,
              t.Nb(e, 9).useItemPlaceholder,
            );
          },
        );
      }
      function ia(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-button"],
                ["edit", ""],
                ["id", "SelectAllButton"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== l.component.toggleDeleteAllSelection() && t),
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
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              {
                text: [0, "text"],
                centered: [1, "centered"],
                hasOnlyText: [2, "hasOnlyText"],
              },
              null,
            ),
            t.xb(
              9,
              671744,
              null,
              0,
              Vn.a,
              [re.a, Se.i, [2, Se.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "SelectAllButton"),
              l(e, 5, 0),
              l(e, 7, 0),
              l(e, 8, 0, "Alle ausw\xe4hlen", !0, !0),
              l(e, 9, 0, n.editLockingParam));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 4).combinedDisabled,
              t.Nb(e, 4).useBrighterIcon,
              t.Nb(e, 7).markerClassEnabled,
              t.Nb(e, 8).useItemPlaceholder,
            );
          },
        );
      }
      function oa(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              17,
              "au3-title-line",
              [
                ["class", "title-line--edit-mode"],
                ["id", "Edit"],
              ],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Fe.b,
              Fe.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              Be.a,
              [je.a, He.a],
              {
                primaryNonI18nText: [0, "primaryNonI18nText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (l()(),
            t.yb(
              4,
              0,
              null,
              3,
              9,
              "au3-title-line-item",
              [
                ["class", "done-button tl-item--background-gradient"],
                ["done", ""],
                ["id", "DoneButton"],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== l.component.toggleEditMode() && t),
                  t
                );
              },
              ue.b,
              ue.a,
            )),
            t.xb(
              5,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(6, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              7,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              8,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              10,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              11,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              {
                text: [0, "text"],
                centered: [1, "centered"],
                hasOnlyText: [2, "hasOnlyText"],
              },
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(), t.hb(16777216, null, 4, 2, null, aa)),
            t.xb(
              15,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (l()(), t.hb(0, [["SelectAll", 2]], null, 0, null, ia)),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "Edit"),
              l(
                e,
                2,
                0,
                t.Yb(e, 2, 0, t.Nb(e, 3).transform(n.phoneService.deviceName$)),
                "Favoriten",
              ),
              l(e, 5, 0, "DoneButton"),
              l(e, 8, 0),
              l(e, 10, 0),
              l(e, 11, 0, "Fertig", !0, !0),
              l(
                e,
                15,
                0,
                n.favoritesToDelete.size ===
                  t.Yb(e, 15, 0, t.Nb(e, 16).transform(n.totalFavorites$)),
                t.Nb(e, 17),
              ));
          },
          function (l, e) {
            (l(
              e,
              0,
              0,
              t.Nb(e, 2).hideLeftBorder,
              t.Nb(e, 2).hideDividingBorders,
            ),
              l(
                e,
                4,
                0,
                t.Nb(e, 10).markerClassEnabled,
                t.Nb(e, 11).useItemPlaceholder,
              ));
          },
        );
      }
      function ua(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-phone-favorite-list-item",
              [],
              null,
              [
                [null, "itemLongpressed"],
                [null, "itemTapped"],
                [null, "infoIconTapped"],
                [null, "selectionChanged"],
              ],
              function (l, e, n) {
                var t = !0,
                  a = l.component;
                return (
                  "itemLongpressed" === e &&
                    (t =
                      !1 !== a.openOptionsMenu(l.parent.context.$implicit) &&
                      t),
                  "itemTapped" === e &&
                    (t =
                      !1 !== a.tryToStartCall(l.parent.context.$implicit) && t),
                  "infoIconTapped" === e &&
                    (t =
                      !1 !==
                        a.routingService.goTo(
                          a.PhoneRoute.Main.children.Addressbook.children
                            .Contact,
                          null == l.parent.context.$implicit ||
                            null == l.parent.context.$implicit.contact
                            ? null
                            : l.parent.context.$implicit.contact.id,
                        ) && t),
                  "selectionChanged" === e &&
                    (t =
                      !1 !==
                        a.deSelectFavoriteToDelete(
                          l.parent.context.$implicit,
                        ) && t),
                  t
                );
              },
              Xt.b,
              Xt.a,
            )),
            t.xb(
              1,
              49152,
              null,
              0,
              Qt.a,
              [t.h],
              {
                contact: [0, "contact"],
                onlyNumber: [1, "onlyNumber"],
                number: [2, "number"],
                editMode: [3, "editMode"],
                showInfoIcon: [4, "showInfoIcon"],
                selected: [5, "selected"],
                infoRoute: [6, "infoRoute"],
              },
              {
                itemTapped: "itemTapped",
                itemLongpressed: "itemLongpressed",
                infoIconTapped: "infoIconTapped",
                selectionChanged: "selectionChanged",
              },
            ),
          ],
          function (l, e) {
            var n = e.component;
            l(
              e,
              1,
              0,
              null == e.parent.context.$implicit
                ? null
                : e.parent.context.$implicit.contact,
              e.context.mib3Let,
              n.adbService.findPreferredFavoriteNumber(
                e.parent.context.$implicit,
              ),
              n.editMode,
              null == e.context.mib3Let,
              n.favoritesToDelete.has(
                (null == e.parent.context.$implicit ||
                null == e.parent.context.$implicit.contact
                  ? null
                  : e.parent.context.$implicit.contact.id) ||
                  (null == e.parent.context.$implicit
                    ? null
                    : e.parent.context.$implicit.number),
              ),
              n.infoRoute,
            );
          },
          null,
        );
      }
      function ra(l) {
        return t.ac(
          0,
          [
            (l()(), t.hb(16777216, [[1, 2]], null, 1, null, ua)),
            t.xb(
              1,
              16384,
              null,
              0,
              mn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            (l()(), t.hb(0, null, null, 0)),
          ],
          function (l, e) {
            l(
              e,
              1,
              0,
              e.component.adbService.onlyFavoriteNumber(e.context.$implicit),
            );
          },
          null,
        );
      }
      function ca(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              6,
              "au3-list",
              [["class", "content-area"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Nt.b,
              Nt.a,
            )),
            t.Sb(6144, null, Tt.a, null, [Pt.a]),
            t.xb(2, 16384, null, 0, _t.a, [t.l], null, null),
            t.xb(
              3,
              12828672,
              null,
              1,
              Pt.a,
              [
                [2, It.a],
                [2, Et.a],
                [8, null],
                [2, be.a],
                [2, At.a],
                [2, Dt.a],
                [2, me.b],
                Se.i,
                t.z,
                t.h,
                le.a,
                Mt.a,
                wt.a,
                [2, Te.a],
                pe.a,
                [2, Se.a],
              ],
              { defaultTemplate: [0, "defaultTemplate"], items: [1, "items"] },
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            t.Pb(131072, ze.b, [t.h]),
            (l()(),
            t.hb(
              0,
              [
                [1, 2],
                ["defaultTemplate", 2],
              ],
              0,
              0,
              null,
              ra,
            )),
          ],
          function (l, e) {
            var n = e.component;
            l(
              e,
              3,
              0,
              t.Nb(e, 6),
              t.Yb(e, 3, 1, t.Nb(e, 5).transform(n.favorites$)),
            );
          },
          function (l, e) {
            l(e, 0, 0, t.Nb(e, 3).showLineNumbers);
          },
        );
      }
      function sa(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              11,
              "div",
              [["class", "button-container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            t.yb(
              1,
              0,
              null,
              null,
              10,
              "au3-button",
              [
                ["class", "delete-button"],
                ["developerText", "L\xf6schen"],
                ["id", "DeleteButton"],
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
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== l.component.deleteButtonTapped() && t),
                  t
                );
              },
              la.b,
              la.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              4,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              5,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(
              6,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              49152,
              null,
              0,
              ea.b,
              [],
              {
                developerText: [0, "developerText"],
                borderStyle: [1, "borderStyle"],
                layoutHorizontal: [2, "layoutHorizontal"],
              },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 2, 0, "DeleteButton"),
              l(
                e,
                5,
                0,
                0 === n.favoritesToDelete.size,
                n.popupIds.POPUP_PHONE_FAVORITE_EDIT_DELETE_GREYED_OUT,
              ),
              l(e, 6, 0),
              l(e, 8, 0),
              l(e, 9, 0, "L\xf6schen", n.borderStyle, !0));
          },
          function (l, e) {
            l(
              e,
              1,
              0,
              t.Nb(e, 5).combinedDisabled,
              t.Nb(e, 5).useBrighterIcon,
              t.Nb(e, 8).markerClassEnabled,
              t.Nb(e, 9).activated,
              t.Nb(e, 9).layoutHorizontal,
              t.Nb(e, 9).thinBorder,
              t.Nb(e, 9).thickBorder,
            );
          },
        );
      }
      function ba(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-phone-favorite-list-item",
              [["class", "options--favorit-list-item"]],
              null,
              null,
              null,
              Xt.b,
              Xt.a,
            )),
            t.xb(
              1,
              49152,
              null,
              0,
              Qt.a,
              [t.h],
              {
                contact: [0, "contact"],
                onlyNumber: [1, "onlyNumber"],
                number: [2, "number"],
                editMode: [3, "editMode"],
                showInfoIcon: [4, "showInfoIcon"],
              },
              null,
            ),
          ],
          function (l, e) {
            l(
              e,
              1,
              0,
              null == e.context.$implicit ? null : e.context.$implicit.contact,
              null == e.context.$implicit ? null : e.context.$implicit.number,
              null == e.context.$implicit || null == e.context.$implicit.contact
                ? null
                : e.context.$implicit.contact.phoneNumberList[
                    null == e.context.$implicit
                      ? null
                      : e.context.$implicit.index
                  ],
              !1,
              !1,
            );
          },
          null,
        );
      }
      function da(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-statustext",
              [["class", "content-area"]],
              null,
              null,
              null,
              Yn.b,
              Yn.a,
            )),
            t.xb(
              1,
              278528,
              null,
              0,
              ze.i,
              [t.s, t.t, t.l, t.D],
              { klass: [0, "klass"], ngClass: [1, "ngClass"] },
              null,
            ),
            t.xb(
              2,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              3,
              49152,
              null,
              0,
              Wn.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(
              e,
              1,
              0,
              "content-area",
              n.environment.isBentley ? "statustext-bentley" : "statustext",
            ),
              l(
                e,
                2,
                0,
                e.context.mib3Let && !e.parent.parent.context.mib3Let
                  ? n.statusTextEnum.NoPhoneFavoritesStoredHint
                  : n.statusTextEnum.PhoneFavoritesStillNotAvailableHint,
                n.statusTextEnum,
              ),
              l(
                e,
                3,
                0,
                6,
                e.context.mib3Let && !e.parent.parent.context.mib3Let
                  ? n.statusTextEnum.NoPhoneFavoritesStoredHint
                  : n.statusTextEnum.PhoneFavoritesStillNotAvailableHint,
              ));
          },
          null,
        );
      }
      function pa(l) {
        return t.ac(
          0,
          [
            (l()(), t.hb(16777216, null, null, 2, null, da)),
            t.xb(
              1,
              16384,
              null,
              0,
              mn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (l()(), t.hb(0, null, null, 0)),
          ],
          function (l, e) {
            var n = e.component;
            l(
              e,
              1,
              0,
              t.Yb(e, 1, 0, t.Nb(e, 2).transform(n.favoritesAvailable$)),
            );
          },
          null,
        );
      }
      function ha(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              16,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:PHONE_FAVORITE_MAIN"],
              ],
              null,
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ge.a, [le.a], { id: [0, "id"] }, null),
            (l()(), t.hb(16777216, null, 0, 1, null, ta)),
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
            (l()(), t.hb(0, [["editTitle", 2]], 0, 0, null, oa)),
            (l()(), t.hb(16777216, null, 0, 1, null, ca)),
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
            (l()(), t.hb(16777216, null, 0, 1, null, sa)),
            t.xb(
              9,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(),
            t.yb(
              10,
              0,
              null,
              0,
              5,
              "au3-option-menu-wrapper",
              [],
              null,
              null,
              null,
              Zn.b,
              Zn.a,
            )),
            t.Sb(6144, null, qn.b, null, [Jn.a]),
            t.Sb(512, null, Ie.a, Ie.a, [[3, Ie.a]]),
            t.xb(
              13,
              245760,
              null,
              1,
              Jn.a,
              [Xn.a, Qn.a, t.h, Ie.a],
              { ttEnumType: [0, "ttEnumType"] },
              null,
            ),
            t.Tb(603979776, 2, { template: 0 }),
            (l()(), t.hb(0, [[2, 2]], null, 0, null, ba)),
            (l()(), t.hb(0, [["statustextTemplate", 2]], 0, 0, null, pa)),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "Screen:PHONE_FAVORITE_MAIN"),
              l(e, 2, 0, "Screen:PHONE_FAVORITE_MAIN"),
              l(e, 4, 0, !n.editMode, t.Nb(e, 5)),
              l(e, 7, 0, e.context.mib3Let, t.Nb(e, 16)),
              l(e, 9, 0, n.editMode),
              l(e, 13, 0, n.optionTypeEnum));
          },
          null,
        );
      }
      function ma(l) {
        return t.ac(
          2,
          [
            (l()(), t.hb(16777216, null, null, 2, null, ha)),
            t.xb(
              1,
              16384,
              null,
              0,
              mn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
          ],
          function (l, e) {
            var n = e.component;
            l(e, 1, 0, t.Yb(e, 1, 0, t.Nb(e, 2).transform(n.hasFavorites$)));
          },
          null,
        );
      }
      function ga(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-phone-favorites",
              [],
              null,
              null,
              null,
              ma,
              na,
            )),
            t.Sb(6144, null, Xn.a, null, [$l]),
            t.Sb(131584, null, $l, $l, [
              Qn.a,
              $.b,
              F.a,
              j.b,
              H.a,
              z.a,
              R.a,
              le.a,
            ]),
            t.xb(
              3,
              245760,
              null,
              0,
              Bl,
              [R.a, a.c, i.a, Mn.a, Qn.a, t.h, $l, Se.i, ee.a, le.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            l(e, 3, 0);
          },
          null,
        );
      }
      var fa = t.ub("au3-phone-favorites", Bl, ga, {}, {}, []);
      class xa {
        constructor(l, e, n, t) {
          ((this.phoneService = l),
            (this.sosCallKoreaChinaService = e),
            (this.phoneRoutingService = n),
            (this.PhoneRoute = d.b),
            (this.destroy$$ = new o.a(1)),
            (this.logger = t.getLogger("phone.PhoneMainPrivacyComponent")));
        }
        ngOnInit() {
          ((this.toggleIcon$ = this.phoneService.phones$.pipe(
            Object(u.a)((l) =>
              l.filter((l) => l.connectionState === m.e.ATTACHED).length > 1
                ? "E9C3_phone_toggle_active.webp"
                : "E9B3_media_online_connect_external_device.webp",
            ),
          )),
            this.phoneService.focusPhoneConfidentialModeActive$
              .pipe(Object(s.a)(this.destroy$$))
              .subscribe((l) => {
                !1 === l &&
                  (this.logger.info(
                    "subscribeToConfidentialMode: confidential mode was turned off -> navigate back",
                  ),
                  this.phoneRoutingService.goBack());
              }));
        }
        ngOnDestroy() {
          (this.destroy$$.next(), this.destroy$$.complete());
        }
      }
      var va = t.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{display:block;height:100%}.privacy-label[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;justify-content:center;font-size:40px;text-align:center}",
          ],
        ],
        data: {},
      });
      function Sa(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              13,
              "au3-title-line-item",
              [
                ["id", "TogglePhones"],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== l.component.phoneService.togglePhones() && t),
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
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 16384, null, 0, Oe.a, [], null, null),
            t.xb(3, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              4,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              5,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            t.xb(
              7,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              9,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              10,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            t.xb(
              12,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "TogglePhones"),
              l(
                e,
                5,
                0,
                t.Yb(
                  e,
                  5,
                  0,
                  t.Nb(e, 6).transform(n.phoneService.asiDeviceActive$),
                ),
              ),
              l(e, 7, 0),
              l(e, 9, 0),
              l(
                e,
                10,
                0,
                !1,
                t.Yb(e, 10, 1, t.Nb(e, 11).transform(n.toggleIcon$)),
              ));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 5).combinedDisabled,
              t.Nb(e, 5).useBrighterIcon,
              t.Nb(e, 9).markerClassEnabled,
              t.Nb(e, 10).useItemPlaceholder,
            );
          },
        );
      }
      function ya(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-title-line-item",
              [
                ["icon", "ES058_phone_sos_call_cn.webp"],
                ["id", "SosButton"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
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
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              null,
              null,
            ),
            t.xb(2, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              ve.a,
              [Xl.a, Se.i, re.a, he.a, ve.b, ye.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.xb(7, 16384, null, 0, Oe.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              9,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              10,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 3, 0, "SosButton"),
              l(e, 5, 0),
              l(e, 6, 0, n.PhoneRoute.SosDialingList),
              l(e, 9, 0),
              l(e, 10, 0, !1, "ES058_phone_sos_call_cn.webp"));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 1).combinedDisabled,
              t.Nb(e, 1).useBrighterIcon,
              t.Nb(e, 9).markerClassEnabled,
              t.Nb(e, 10).useItemPlaceholder,
            );
          },
        );
      }
      function Oa(l) {
        return t.ac(
          2,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              39,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:PHONE_MAIN_PRIVACY"],
              ],
              null,
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ge.a, [le.a], { id: [0, "id"] }, null),
            (l()(),
            t.yb(
              3,
              0,
              null,
              0,
              33,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Fe.b,
              Fe.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              Be.a,
              [je.a, He.a],
              {
                primaryNonI18nText: [0, "primaryNonI18nText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (l()(),
            t.yb(
              7,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", "GoBack"],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t =
                      !1 !== l.component.phoneRoutingService.enterContext() &&
                      t),
                  t
                );
              },
              ue.b,
              ue.a,
            )),
            t.xb(8, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              9,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              11,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              Tn.a,
              [le.a, Pn.a, t.l, [2, he.a], [2, re.a]],
              null,
              null,
            ),
            t.xb(13, 16384, null, 0, Oe.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              15,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              16,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              18,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(), t.hb(16777216, null, 0, 1, null, Sa)),
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
            (l()(), t.hb(16777216, null, 2, 2, null, ya)),
            t.xb(
              22,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (l()(),
            t.yb(
              24,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "GoToSettings"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              ue.b,
              ue.a,
            )),
            t.xb(
              25,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              null,
              null,
            ),
            t.xb(26, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              27,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              28,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              29,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              null,
            ),
            t.xb(
              30,
              671744,
              null,
              0,
              ve.a,
              [Xl.a, Se.i, re.a, he.a, ve.b, ye.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(31, 16384, null, 0, Oe.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              33,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              34,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              35,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              36,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(),
            t.yb(
              37,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [
                ["class", "privacy-label"],
                ["id", "PrivacyModeActive"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(
              38,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              39,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "Screen:PHONE_MAIN_PRIVACY"),
              l(e, 2, 0, "Screen:PHONE_MAIN_PRIVACY"),
              l(e, 4, 0, ""),
              l(
                e,
                5,
                0,
                t.Yb(e, 5, 0, t.Nb(e, 6).transform(n.phoneService.deviceName$)),
                "HINWEIS",
              ),
              l(e, 9, 0, "GoBack"),
              l(e, 11, 0),
              l(e, 15, 0),
              l(e, 16, 0, !1, "E163_Backbutton.webp"),
              l(e, 20, 0, n.phoneService.twoPhonesSupported),
              l(
                e,
                22,
                0,
                t.Yb(
                  e,
                  22,
                  0,
                  t
                    .Nb(e, 23)
                    .transform(n.sosCallKoreaChinaService.sosButtonAvailable$),
                ),
              ),
              l(e, 27, 0, "GoToSettings"),
              l(e, 29, 0),
              l(e, 30, 0, n.PhoneRoute.Main.children.Settings, !0),
              l(e, 33, 0),
              l(e, 34, 0, !1, "E186_settings.webp"),
              l(e, 38, 0, "PrivacyModeActive"),
              l(
                e,
                39,
                0,
                "Das verbundene Mobiltelefon befindet sich im Privatmodus.\nDer Zugriff auf die Telefonlisten ist gesperrt.",
                "PrivacyModeActive",
              ));
          },
          function (l, e) {
            (l(
              e,
              3,
              0,
              t.Nb(e, 5).hideLeftBorder,
              t.Nb(e, 5).hideDividingBorders,
            ),
              l(
                e,
                7,
                0,
                t.Nb(e, 15).markerClassEnabled,
                t.Nb(e, 16).useItemPlaceholder,
              ),
              l(
                e,
                24,
                0,
                t.Nb(e, 25).combinedDisabled,
                t.Nb(e, 25).useBrighterIcon,
                t.Nb(e, 33).markerClassEnabled,
                t.Nb(e, 34).useItemPlaceholder,
              ),
              l(
                e,
                37,
                0,
                t.Nb(e, 39).backgroundColor,
                t.Nb(e, 39).fixedNumberOfLines,
                t.Nb(e, 39).mayContainLatinCharsForArabic,
                t.Nb(e, 39).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function Ca(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-phone-main-privacy",
              [],
              null,
              null,
              null,
              Oa,
              va,
            )),
            t.xb(1, 245760, null, 0, xa, [a.c, X.a, i.a, le.a], null, null),
          ],
          function (l, e) {
            l(e, 1, 0);
          },
          null,
        );
      }
      var Na = t.ub("au3-phone-main-privacy", xa, Ca, {}, {}, []),
        Ta = n("dLds"),
        Pa = n("EM0g"),
        _a = n("tZxQ"),
        Ia = n("3OpO"),
        Ea = n("1qmX"),
        Aa = n("ZUXc"),
        Da = n("6ifu"),
        Ma = n("iEqp"),
        wa = n("Oguw"),
        La = n("DElP"),
        ka = t.wb({
          encapsulation: 0,
          styles: [
            [
              '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;position:relative;transition:transform .5s,filter .5s}.in-background[_nghost-%COMP%]{transform:scale(.85);filter:brightness(.8)}.layer[_ngcontent-%COMP%]{display:grid;position:absolute;top:0;left:0;width:100%;height:100%;transition:filter .5s,opacity .3s;overflow:hidden;padding:15px;grid-template-columns:minmax(0,1fr) 150px;grid-template-rows:auto auto 1fr;grid-row-gap:6px;grid-column-gap:15px;align-items:baseline}.layer--main[_ngcontent-%COMP%]{border-top:1px solid var(--current-context);border-bottom:3px solid var(--current-context);background-image:radial-gradient(farthest-corner at bottom,var(--current-context-alpha),transparent)}.layer--resume[_ngcontent-%COMP%]{border-top:1px solid transparent;border-bottom:3px solid transparent}.layer--in-background[_ngcontent-%COMP%]{filter:grayscale(100%)}.caller-and-duration[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:baseline;grid-row:1;grid-column-start:1;grid-column-end:3}.caller[_ngcontent-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);margin-right:15px;font-size:40px;flex:1;min-width:0}.duration[_ngcontent-%COMP%]{text-align:right;max-width:150px}.call-state[_ngcontent-%COMP%], .duration[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:30px}.call-state[_ngcontent-%COMP%]{grid-row:2;grid-column-start:1;grid-column-end:3}.button[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);grid-row:3;grid-column:1;align-self:end;justify-self:start;max-width:280px;font-size:30px}.button[_ngcontent-%COMP%]     .button__text--with-icon{margin:11px 0 0}.hd-voice[_ngcontent-%COMP%]{grid-column:1;justify-self:end}.hd-voice[_ngcontent-%COMP%], .picture[_ngcontent-%COMP%]{grid-row:3;align-self:end}.picture[_ngcontent-%COMP%]{grid-column:2;width:150px;height:150px}.invisible[_ngcontent-%COMP%]{opacity:0;pointer-events:none}@media (max-width:1280px){.hd-voice[_ngcontent-%COMP%]{grid-column:2}.picture[_ngcontent-%COMP%]{align-self:start;justify-self:end;width:120px;height:120px}}',
            ],
          ],
          data: {},
        });
      function Ra(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["ttIgnore", ""]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(1, 16384, null, 0, Oe.a, [], null, null),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[8, null], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              { nonI18nValue: [0, "nonI18nValue"] },
              null,
            ),
          ],
          function (l, e) {
            l(e, 2, 0, e.component.callerText);
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 2).backgroundColor,
              t.Nb(e, 2).fixedNumberOfLines,
              t.Nb(e, 2).mayContainLatinCharsForArabic,
              t.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function $a(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "Conference"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "Conference"),
              l(e, 2, 0, n.callTextEnum.ConferenceCall, "Conference", 1));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 2).backgroundColor,
              t.Nb(e, 2).fixedNumberOfLines,
              t.Nb(e, 2).mayContainLatinCharsForArabic,
              t.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Fa(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "ConfidentialName"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "ConfidentialName"),
              l(e, 2, 0, n.confidentialModeReplacement, "ConfidentialName", 1));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 2).backgroundColor,
              t.Nb(e, 2).fixedNumberOfLines,
              t.Nb(e, 2).mayContainLatinCharsForArabic,
              t.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Ba(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "Concierge"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "Concierge"),
              l(e, 2, 0, n.callTextEnum.ConciergeCall, "Concierge", 1));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 2).backgroundColor,
              t.Nb(e, 2).fixedNumberOfLines,
              t.Nb(e, 2).mayContainLatinCharsForArabic,
              t.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function ja(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "CallerUnknown"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "CallerUnknown"),
              l(e, 2, 0, n.callTextEnum.CallerUnknown, "CallerUnknown", 1));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 2).backgroundColor,
              t.Nb(e, 2).fixedNumberOfLines,
              t.Nb(e, 2).mayContainLatinCharsForArabic,
              t.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Ha(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["ttIgnore", ""]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(1, 16384, null, 0, Oe.a, [], null, null),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[8, null], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              { nonI18nValue: [0, "nonI18nValue"] },
              null,
            ),
          ],
          function (l, e) {
            l(e, 2, 0, e.component.call.durationString);
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 2).backgroundColor,
              t.Nb(e, 2).fixedNumberOfLines,
              t.Nb(e, 2).mayContainLatinCharsForArabic,
              t.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function za(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(
              e,
              1,
              0,
              null == n.call ? null : n.call.uiCallState,
              n.uiCallStateEnum,
            ),
              l(
                e,
                2,
                0,
                null == n.call ? null : n.call.uiCallState,
                null == n.call ? null : n.call.uiCallState,
                1,
              ));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 2).backgroundColor,
              t.Nb(e, 2).fixedNumberOfLines,
              t.Nb(e, 2).mayContainLatinCharsForArabic,
              t.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Ua(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "hd-voice"],
                ["fileName", "E95A_phone_hd_voice.webp"],
                ["id", "HDVoice"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              pn.b,
              pn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              4243456,
              null,
              0,
              hn.b,
              [le.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "HDVoice"),
              l(e, 2, 0, "E95A_phone_hd_voice.webp", n.iconCategoryEnum.List));
          },
          function (l, e) {
            l(e, 0, 0, t.Nb(e, 2).iconComponentHidden);
          },
        );
      }
      function Va(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon",
              [["au3ImageLockingCategory", ""]],
              [
                [2, "icon-component--hidden", null],
                [2, "lock-state-hidden", null],
                [2, "lock-state-faded", null],
              ],
              null,
              null,
              pn.b,
              pn.a,
            )),
            t.xb(
              1,
              4243456,
              null,
              0,
              hn.b,
              [le.a, t.z],
              { fileName: [0, "fileName"], scaleMode: [1, "scaleMode"] },
              null,
            ),
            t.xb(2, 212992, null, 0, La.a, [Se.i, [2, Se.a], t.h], null, null),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, null == n.call ? null : n.call.pictureUri, n.scaleMode),
              l(e, 2, 0));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 1).iconComponentHidden,
              t.Nb(e, 2).hide,
              t.Nb(e, 2).fade,
            );
          },
        );
      }
      function Ka(l) {
        return t.ac(
          2,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              35,
              "div",
              [["class", "layer layer--main"]],
              [[2, "layer--in-background", null]],
              null,
              null,
              null,
              null,
            )),
            (l()(),
            t.yb(
              1,
              0,
              null,
              null,
              15,
              "div",
              [["class", "caller-and-duration"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            t.yb(
              2,
              0,
              null,
              null,
              11,
              "div",
              [["class", "caller"]],
              null,
              null,
              null,
              null,
              null,
            )),
            t.xb(
              3,
              16384,
              null,
              0,
              ze.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (l()(), t.hb(16777216, null, null, 1, null, Ra)),
            t.xb(
              5,
              278528,
              null,
              0,
              ze.p,
              [t.P, t.L, ze.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), t.hb(16777216, null, null, 1, null, $a)),
            t.xb(
              7,
              278528,
              null,
              0,
              ze.p,
              [t.P, t.L, ze.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), t.hb(16777216, null, null, 1, null, Fa)),
            t.xb(
              9,
              278528,
              null,
              0,
              ze.p,
              [t.P, t.L, ze.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), t.hb(16777216, null, null, 1, null, Ba)),
            t.xb(
              11,
              278528,
              null,
              0,
              ze.p,
              [t.P, t.L, ze.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), t.hb(16777216, null, null, 1, null, ja)),
            t.xb(13, 16384, null, 0, ze.q, [t.P, t.L, ze.o], null, null),
            (l()(),
            t.yb(
              14,
              0,
              null,
              null,
              2,
              "div",
              [["class", "duration"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(), t.hb(16777216, null, null, 1, null, Ha)),
            t.xb(
              16,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(),
            t.yb(
              17,
              0,
              null,
              null,
              2,
              "div",
              [["class", "call-state"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(), t.hb(16777216, null, null, 1, null, za)),
            t.xb(
              19,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(),
            t.yb(
              20,
              0,
              null,
              null,
              10,
              "au3-button",
              [
                ["class", "button"],
                ["id", "HangUpButton"],
              ],
              [
                [2, "invisible", null],
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "button--activated", null],
                [2, "button--horizontal", null],
                [2, "button--with-border", null],
                [2, "button--with-thick-border", null],
              ],
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0,
                  a = l.component;
                return (
                  "mib3Tap" === e &&
                    (t =
                      !1 !==
                        a.callOperationsService.perform(
                          a.call,
                          a.callOperationEnum.HangUp,
                        ) && t),
                  t
                );
              },
              la.b,
              la.a,
            )),
            t.xb(
              21,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(22, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              23,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              24,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              {
                mib3DisabledBrighterIcon: [0, "mib3DisabledBrighterIcon"],
                disabled: [1, "disabled"],
              },
              null,
            ),
            t.xb(
              25,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              27,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              28,
              49152,
              null,
              0,
              ea.b,
              [],
              { developerText: [0, "developerText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              29,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              30,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(), t.hb(16777216, null, null, 1, null, Ua)),
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
            (l()(),
            t.yb(
              33,
              0,
              null,
              null,
              2,
              "div",
              [["class", "picture"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(), t.hb(16777216, null, null, 1, null, Va)),
            t.xb(
              35,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(),
            t.yb(
              36,
              0,
              null,
              null,
              11,
              "div",
              [["class", "layer layer--resume"]],
              [
                [2, "invisible", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0,
                  a = l.component;
                return (
                  "mib3Tap" === e &&
                    (t =
                      !1 !==
                        (a.callOperationsService.isPossible(
                          a.focusCall,
                          a.callOperationEnum.Swap,
                        ) &&
                          a.callOperationsService.perform(
                            a.call,
                            a.callOperationEnum.Swap,
                          )) && t),
                  t
                );
              },
              null,
              null,
            )),
            t.xb(37, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              38,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              39,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              41,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              42,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              43,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(),
            t.yb(
              44,
              0,
              null,
              null,
              3,
              "au3-button",
              [
                ["class", "button"],
                ["id", "ResumeButton"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "button--activated", null],
                [2, "button--horizontal", null],
                [2, "button--with-border", null],
                [2, "button--with-thick-border", null],
              ],
              null,
              null,
              la.b,
              la.a,
            )),
            t.xb(
              45,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              46,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              47,
              49152,
              null,
              0,
              ea.b,
              [],
              { developerText: [0, "developerText"], icon: [1, "icon"] },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 3, 0, n.currentCallerType),
              l(e, 5, 0, n.callerType.NAME_OR_NUMBER),
              l(e, 7, 0, n.callerType.CONFERENCE),
              l(e, 9, 0, n.callerType.CONFIDENTIAL),
              l(e, 11, 0, n.callerType.CONCIERGE),
              l(
                e,
                16,
                0,
                n.call && n.call.callState === n.callStateEnum.ACTIVE,
              ),
              l(e, 19, 0, n.call),
              l(e, 21, 0, "HangUpButton"),
              l(
                e,
                24,
                0,
                !0,
                !n.callOperationsService.isPossible(
                  n.call,
                  n.callOperationEnum.HangUp,
                ),
              ),
              l(e, 25, 0),
              l(e, 27, 0),
              l(e, 28, 0, n.callTextEnum.HangupCall, "E04E_phone_no_call.webp"),
              l(e, 32, 0, n.call && n.call.isHdVoice),
              l(e, 35, 0, n.call),
              l(e, 39, 0),
              l(e, 41, 0),
              l(e, 45, 0, "ResumeButton"),
              l(
                e,
                46,
                0,
                !n.callOperationsService.isPossible(
                  n.focusCall,
                  n.callOperationEnum.Swap,
                ),
              ),
              l(
                e,
                47,
                0,
                n.callTextEnum.ContinueCall,
                "E054_phone_continue_call.webp",
              ));
          },
          function (l, e) {
            var n = e.component;
            (l(e, 0, 0, n.inBackground),
              l(
                e,
                20,
                0,
                !n.isFocusCall,
                t.Nb(e, 24).combinedDisabled,
                t.Nb(e, 24).useBrighterIcon,
                t.Nb(e, 27).markerClassEnabled,
                t.Nb(e, 28).activated,
                t.Nb(e, 28).layoutHorizontal,
                t.Nb(e, 28).thinBorder,
                t.Nb(e, 28).thickBorder,
              ),
              l(e, 36, 0, n.isFocusCall, t.Nb(e, 41).markerClassEnabled),
              l(
                e,
                44,
                0,
                t.Nb(e, 46).combinedDisabled,
                t.Nb(e, 46).useBrighterIcon,
                t.Nb(e, 47).activated,
                t.Nb(e, 47).layoutHorizontal,
                t.Nb(e, 47).thinBorder,
                t.Nb(e, 47).thickBorder,
              ));
          },
        );
      }
      var Ga = n("XOjC"),
        Ya = n("7r1m"),
        Wa = t.wb({
          encapsulation: 0,
          styles: [
            [
              '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;flex-grow:1}.operation-panel[_ngcontent-%COMP%]{height:116px}.operation-panel--two-calls[_ngcontent-%COMP%]     .content--center{border:0}.operation-panel__center-item[_ngcontent-%COMP%]{max-width:500px}@media (max-width:1280px){au3-active-call[_nghost-%COMP%]   .operation-panel__center-item[_ngcontent-%COMP%], au3-active-call   [_nghost-%COMP%]   .operation-panel__center-item[_ngcontent-%COMP%]{max-width:360px}au3-active-call-dtmf[_nghost-%COMP%]   .operation-panel__center-item[_ngcontent-%COMP%], au3-active-call-dtmf   [_nghost-%COMP%]   .operation-panel__center-item[_ngcontent-%COMP%]{max-width:366px}au3-active-call-dtmf[_nghost-%COMP%]   .operation-panel__item.op-item--prio2-small-scale[_ngcontent-%COMP%], au3-active-call-dtmf   [_nghost-%COMP%]   .operation-panel__item.op-item--prio2-small-scale[_ngcontent-%COMP%]{min-width:156px}}.content--two-calls[_ngcontent-%COMP%]{position:relative;height:303px;margin:auto 0}.tile[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;width:calc(54.05405% - 23px)}.tile--left[_ngcontent-%COMP%]{transform-origin:left;left:0}.tile--right[_ngcontent-%COMP%]{transform-origin:right;right:0}.option[_ngcontent-%COMP%]{display:grid;height:120px;grid-template-columns:120px 1fr;grid-column-gap:15px;align-items:center;padding:0 20px}.picture[_ngcontent-%COMP%]{grid-column:1;grid-row-start:1;grid-row-end:3;width:120px;height:120px}.caller[_ngcontent-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);grid-row:1;font-size:40px}.call-state[_ngcontent-%COMP%], .caller[_ngcontent-%COMP%]{grid-column:2;min-width:0}.call-state[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);grid-row:2;font-size:30px}',
            ],
          ],
          data: {},
        });
      function Za(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              7,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            t.yb(
              1,
              0,
              null,
              null,
              6,
              "div",
              [["class", "content content--two-calls"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            t.yb(
              2,
              0,
              null,
              null,
              2,
              "au3-call-tile",
              [
                ["class", "tile tile--left"],
                ["id", "tileLeft"],
              ],
              [[2, "in-background", null]],
              null,
              null,
              Ka,
              ka,
            )),
            t.xb(
              3,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              49152,
              null,
              0,
              A,
              [C.b, le.a],
              { call: [0, "call"], focusCall: [1, "focusCall"] },
              null,
            ),
            (l()(),
            t.yb(
              5,
              0,
              null,
              null,
              2,
              "au3-call-tile",
              [
                ["class", "tile tile--right"],
                ["id", "tileRight"],
              ],
              [[2, "in-background", null]],
              null,
              null,
              Ka,
              ka,
            )),
            t.xb(
              6,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              7,
              49152,
              null,
              0,
              A,
              [C.b, le.a],
              { call: [0, "call"], focusCall: [1, "focusCall"] },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 3, 0, "tileLeft"),
              l(e, 4, 0, n.calls ? n.calls[0] : t.ab, n.focusCall),
              l(e, 6, 0, "tileRight"),
              l(e, 7, 0, n.calls ? n.calls[1] : t.ab, n.focusCall));
          },
          function (l, e) {
            (l(e, 2, 0, t.Nb(e, 4).inBackground),
              l(e, 5, 0, t.Nb(e, 7).inBackground));
          },
        );
      }
      function qa(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-call-info",
              [
                ["class", "content"],
                ["id", ""],
              ],
              null,
              null,
              null,
              Ga.b,
              Ga.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              Ya.a,
              [X.a, le.a],
              { call: [0, "call"] },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, ""), l(e, 2, 0, n.focusCall));
          },
          null,
        );
      }
      function Ja(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["icon", "E263_phone_conference_circuit.webp"],
                ["id", "Conference"],
              ],
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
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0,
                  a = l.component;
                return (
                  "mib3Tap" === e &&
                    (t =
                      !1 !==
                        a.callOperationsService.perform(
                          a.focusCall,
                          a.callOperationEnum.Join,
                        ) && t),
                  t
                );
              },
              un.b,
              un.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              49152,
              null,
              0,
              rn.a,
              [],
              {
                developerText: [0, "developerText"],
                icon: [1, "icon"],
                showSeparatorRight: [2, "showSeparatorRight"],
                prio2SmallScale: [3, "prio2SmallScale"],
              },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "Conference"),
              l(
                e,
                4,
                0,
                !n.callOperationsService.isPossible(
                  n.focusCall,
                  n.callOperationEnum.Join,
                ) ||
                  (null == n.focusCall
                    ? null
                    : n.focusCall.participants.length) >= 6,
                (null == n.focusCall
                  ? null
                  : n.focusCall.participants.length) >= 6
                  ? n.PopupIdsAudi.POPUP_PHONE_POPUP_ERR
                  : void 0,
              ),
              l(e, 5, 0),
              l(e, 7, 0),
              l(
                e,
                8,
                0,
                n.callTextEnum.ConferenceCall,
                "E263_phone_conference_circuit.webp",
                !0,
                !0,
              ));
          },
          function (l, e) {
            l(e, 0, 1, [
              t.Nb(e, 4).combinedDisabled,
              t.Nb(e, 4).useBrighterIcon,
              t.Nb(e, 7).markerClassEnabled,
              t.Nb(e, 8).showSeparatorLeft,
              t.Nb(e, 8).showSeparatorRight,
              t.Nb(e, 8).prio1Main,
              t.Nb(e, 8).prio1SmallScale,
              t.Nb(e, 8).prio2SmallScale,
              t.Nb(e, 8).prio1,
              t.Nb(e, 8).prio2,
              t.Nb(e, 8).prio1IconText,
              t.Nb(e, 8).prio1IconOnly,
              t.Nb(e, 8).prio1TextOnly,
              t.Nb(e, 8).prio2IconText,
              t.Nb(e, 8).prio2IconOnly,
              t.Nb(e, 8).prio2TextOnly,
              t.Nb(e, 8).useDefaultMaxWidth,
              t.Nb(e, 8).isDummy,
            ]);
          },
        );
      }
      function Xa(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["icon", "E013_phone_mic_off.webp"],
                ["id", "TwoCallsMute"],
              ],
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
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e && (t = !1 !== l.component.muteCall() && t),
                  t
                );
              },
              un.b,
              un.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              49152,
              null,
              0,
              rn.a,
              [],
              {
                developerText: [0, "developerText"],
                icon: [1, "icon"],
                showSeparatorRight: [2, "showSeparatorRight"],
                prio2SmallScale: [3, "prio2SmallScale"],
              },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "TwoCallsMute"),
              l(
                e,
                4,
                0,
                !n.isAudioInCar(n.focusCall) ||
                  (null == n.focusCall ? null : n.focusCall.callState) !==
                    n.callStateEnum.ACTIVE,
              ),
              l(e, 5, 0),
              l(e, 7, 0),
              l(
                e,
                8,
                0,
                n.callTextEnum.MuteCall,
                "E013_phone_mic_off.webp",
                !0,
                !0,
              ));
          },
          function (l, e) {
            l(e, 0, 1, [
              t.Nb(e, 4).combinedDisabled,
              t.Nb(e, 4).useBrighterIcon,
              t.Nb(e, 7).markerClassEnabled,
              t.Nb(e, 8).showSeparatorLeft,
              t.Nb(e, 8).showSeparatorRight,
              t.Nb(e, 8).prio1Main,
              t.Nb(e, 8).prio1SmallScale,
              t.Nb(e, 8).prio2SmallScale,
              t.Nb(e, 8).prio1,
              t.Nb(e, 8).prio2,
              t.Nb(e, 8).prio1IconText,
              t.Nb(e, 8).prio1IconOnly,
              t.Nb(e, 8).prio1TextOnly,
              t.Nb(e, 8).prio2IconText,
              t.Nb(e, 8).prio2IconOnly,
              t.Nb(e, 8).prio2TextOnly,
              t.Nb(e, 8).useDefaultMaxWidth,
              t.Nb(e, 8).isDummy,
            ]);
          },
        );
      }
      function Qa(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["icon", "E012_phone_mic_on.webp"],
                ["id", "TwoCallsUnmute"],
              ],
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
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e && (t = !1 !== l.component.unmuteCall() && t),
                  t
                );
              },
              un.b,
              un.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              49152,
              null,
              0,
              rn.a,
              [],
              {
                developerText: [0, "developerText"],
                icon: [1, "icon"],
                showSeparatorRight: [2, "showSeparatorRight"],
                prio2SmallScale: [3, "prio2SmallScale"],
              },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "TwoCallsUnmute"),
              l(
                e,
                4,
                0,
                !n.isAudioInCar(n.focusCall) ||
                  (null == n.focusCall ? null : n.focusCall.callState) !==
                    n.callStateEnum.ACTIVE,
              ),
              l(e, 5, 0),
              l(e, 7, 0),
              l(
                e,
                8,
                0,
                n.callTextEnum.UnmuteCall,
                "E012_phone_mic_on.webp",
                !0,
                !0,
              ));
          },
          function (l, e) {
            l(e, 0, 1, [
              t.Nb(e, 4).combinedDisabled,
              t.Nb(e, 4).useBrighterIcon,
              t.Nb(e, 7).markerClassEnabled,
              t.Nb(e, 8).showSeparatorLeft,
              t.Nb(e, 8).showSeparatorRight,
              t.Nb(e, 8).prio1Main,
              t.Nb(e, 8).prio1SmallScale,
              t.Nb(e, 8).prio2SmallScale,
              t.Nb(e, 8).prio1,
              t.Nb(e, 8).prio2,
              t.Nb(e, 8).prio1IconText,
              t.Nb(e, 8).prio1IconOnly,
              t.Nb(e, 8).prio1TextOnly,
              t.Nb(e, 8).prio2IconText,
              t.Nb(e, 8).prio2IconOnly,
              t.Nb(e, 8).prio2TextOnly,
              t.Nb(e, 8).useDefaultMaxWidth,
              t.Nb(e, 8).isDummy,
            ]);
          },
        );
      }
      function li(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["developerText", "Mehr"],
                ["icon", "E9BF_options_more.webp"],
                ["id", "TwoCallsMore"],
              ],
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
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== l.component.openMoreMenu() && t),
                  t
                );
              },
              un.b,
              un.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            t.xb(
              6,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              49152,
              null,
              0,
              rn.a,
              [],
              {
                developerText: [0, "developerText"],
                icon: [1, "icon"],
                prio2SmallScale: [2, "prio2SmallScale"],
              },
              null,
            ),
            t.xb(
              10,
              671744,
              null,
              0,
              Vn.a,
              [re.a, Se.i, [2, Se.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "TwoCallsMore"),
              l(
                e,
                4,
                0,
                t.Yb(e, 4, 0, t.Nb(e, 5).transform(n.moreMenuDisabled$)) ||
                  (null == n.focusCall ? null : n.focusCall.callState) ===
                    n.callStateEnum.DISCONNECTING ||
                  (null == n.focusCall ? null : n.focusCall.callState) ===
                    n.callStateEnum.DIALING ||
                  (null == n.focusCall ? null : n.focusCall.callState) ===
                    n.callStateEnum.RINGINGOUTGOING ||
                  (null == n.focusCall ? null : n.focusCall.callState) ===
                    n.callStateEnum.RINGINGINCOMING,
              ),
              l(e, 6, 0),
              l(e, 8, 0),
              l(e, 9, 0, "Mehr", "E9BF_options_more.webp", !0),
              l(e, 10, 0, n.moreLockingParam));
          },
          function (l, e) {
            l(e, 0, 1, [
              t.Nb(e, 4).combinedDisabled,
              t.Nb(e, 4).useBrighterIcon,
              t.Nb(e, 8).markerClassEnabled,
              t.Nb(e, 9).showSeparatorLeft,
              t.Nb(e, 9).showSeparatorRight,
              t.Nb(e, 9).prio1Main,
              t.Nb(e, 9).prio1SmallScale,
              t.Nb(e, 9).prio2SmallScale,
              t.Nb(e, 9).prio1,
              t.Nb(e, 9).prio2,
              t.Nb(e, 9).prio1IconText,
              t.Nb(e, 9).prio1IconOnly,
              t.Nb(e, 9).prio1TextOnly,
              t.Nb(e, 9).prio2IconText,
              t.Nb(e, 9).prio2IconOnly,
              t.Nb(e, 9).prio2TextOnly,
              t.Nb(e, 9).useDefaultMaxWidth,
              t.Nb(e, 9).isDummy,
            ]);
          },
        );
      }
      function ei(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              21,
              "au3-operation-panel",
              [
                ["class", "operation-panel operation-panel--two-calls"],
                ["id", ""],
              ],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
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
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              an.a,
              [on.a],
              { alignItemsInside: [0, "alignItemsInside"] },
              null,
            ),
            (l()(), t.hb(16777216, null, 1, 1, null, Ja)),
            t.xb(
              4,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), t.hb(16777216, null, 1, 1, null, Xa)),
            t.xb(
              6,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), t.hb(16777216, null, 1, 1, null, Qa)),
            t.xb(
              8,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(),
            t.yb(
              9,
              0,
              null,
              1,
              10,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["developerText", "Ziffern"],
                ["id", "TwoCallsNumbers"],
              ],
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
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== l.component.dtmfPressed.emit() && t),
                  t
                );
              },
              un.b,
              un.a,
            )),
            t.xb(
              10,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(11, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              12,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              14,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              16,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              17,
              49152,
              null,
              0,
              rn.a,
              [],
              {
                developerText: [0, "developerText"],
                icon: [1, "icon"],
                showSeparatorRight: [2, "showSeparatorRight"],
                prio2SmallScale: [3, "prio2SmallScale"],
              },
              null,
            ),
            t.xb(
              18,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              19,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(), t.hb(16777216, null, 1, 1, null, li)),
            t.xb(
              21,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, ""),
              l(e, 2, 0, !0),
              l(e, 4, 0, n.deviceCount < 2),
              l(
                e,
                6,
                0,
                !(null != n.focusCall && n.focusCall.isMicrophoneMuted),
              ),
              l(
                e,
                8,
                0,
                null == n.focusCall ? null : n.focusCall.isMicrophoneMuted,
              ),
              l(e, 10, 0, "TwoCallsNumbers"),
              l(
                e,
                13,
                0,
                (null == n.focusCall ? null : n.focusCall.callState) ===
                  n.callStateEnum.DISCONNECTING ||
                  (null == n.focusCall ? null : n.focusCall.callState) ===
                    n.callStateEnum.RINGINGINCOMING ||
                  !e.parent.context.mib3Let,
              ),
              l(e, 14, 0),
              l(e, 16, 0),
              l(e, 17, 0, "Ziffern", n.dtmfIcon, !n.forDtmf, !0),
              l(e, 21, 0, !n.forDtmf));
          },
          function (l, e) {
            (l(e, 0, 0, t.Nb(e, 2).alignInside, t.Nb(e, 2).alignOutside),
              l(e, 9, 1, [
                t.Nb(e, 13).combinedDisabled,
                t.Nb(e, 13).useBrighterIcon,
                t.Nb(e, 16).markerClassEnabled,
                t.Nb(e, 17).showSeparatorLeft,
                t.Nb(e, 17).showSeparatorRight,
                t.Nb(e, 17).prio1Main,
                t.Nb(e, 17).prio1SmallScale,
                t.Nb(e, 17).prio2SmallScale,
                t.Nb(e, 17).prio1,
                t.Nb(e, 17).prio2,
                t.Nb(e, 17).prio1IconText,
                t.Nb(e, 17).prio1IconOnly,
                t.Nb(e, 17).prio1TextOnly,
                t.Nb(e, 17).prio2IconText,
                t.Nb(e, 17).prio2IconOnly,
                t.Nb(e, 17).prio2TextOnly,
                t.Nb(e, 17).useDefaultMaxWidth,
                t.Nb(e, 17).isDummy,
              ]));
          },
        );
      }
      function ni(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-operation-panel-item",
              [
                ["class", "operation-panel__item"],
                ["icon", "E013_phone_mic_off.webp"],
                ["id", "Mute"],
                ["left", ""],
              ],
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
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e && (t = !1 !== l.component.muteCall() && t),
                  t
                );
              },
              un.b,
              un.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              49152,
              null,
              0,
              rn.a,
              [],
              {
                developerText: [0, "developerText"],
                icon: [1, "icon"],
                showSeparatorRight: [2, "showSeparatorRight"],
                prio2SmallScale: [3, "prio2SmallScale"],
              },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "Mute"),
              l(
                e,
                4,
                0,
                !n.isAudioInCar(n.focusCall) ||
                  (null == n.focusCall ? null : n.focusCall.callState) !==
                    n.callStateEnum.ACTIVE ||
                  (null == n.focusCall ? null : n.focusCall.isSOS) ||
                  (null == n.focusCall ? null : n.focusCall.isPOI),
              ),
              l(e, 5, 0),
              l(e, 7, 0),
              l(
                e,
                8,
                0,
                n.callTextEnum.MuteCall,
                "E013_phone_mic_off.webp",
                !0,
                !0,
              ));
          },
          function (l, e) {
            l(e, 0, 1, [
              t.Nb(e, 4).combinedDisabled,
              t.Nb(e, 4).useBrighterIcon,
              t.Nb(e, 7).markerClassEnabled,
              t.Nb(e, 8).showSeparatorLeft,
              t.Nb(e, 8).showSeparatorRight,
              t.Nb(e, 8).prio1Main,
              t.Nb(e, 8).prio1SmallScale,
              t.Nb(e, 8).prio2SmallScale,
              t.Nb(e, 8).prio1,
              t.Nb(e, 8).prio2,
              t.Nb(e, 8).prio1IconText,
              t.Nb(e, 8).prio1IconOnly,
              t.Nb(e, 8).prio1TextOnly,
              t.Nb(e, 8).prio2IconText,
              t.Nb(e, 8).prio2IconOnly,
              t.Nb(e, 8).prio2TextOnly,
              t.Nb(e, 8).useDefaultMaxWidth,
              t.Nb(e, 8).isDummy,
            ]);
          },
        );
      }
      function ti(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-operation-panel-item",
              [
                ["class", "operation-panel__item"],
                ["icon", "E012_phone_mic_on.webp"],
                ["id", "Unmute"],
                ["left", ""],
              ],
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
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e && (t = !1 !== l.component.unmuteCall() && t),
                  t
                );
              },
              un.b,
              un.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              49152,
              null,
              0,
              rn.a,
              [],
              {
                developerText: [0, "developerText"],
                icon: [1, "icon"],
                showSeparatorRight: [2, "showSeparatorRight"],
                prio2SmallScale: [3, "prio2SmallScale"],
              },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "Unmute"),
              l(
                e,
                4,
                0,
                !n.isAudioInCar(n.focusCall) ||
                  (null == n.focusCall ? null : n.focusCall.callState) !==
                    n.callStateEnum.ACTIVE,
              ),
              l(e, 5, 0),
              l(e, 7, 0),
              l(
                e,
                8,
                0,
                n.callTextEnum.UnmuteCall,
                "E012_phone_mic_on.webp",
                !0,
                !0,
              ));
          },
          function (l, e) {
            l(e, 0, 1, [
              t.Nb(e, 4).combinedDisabled,
              t.Nb(e, 4).useBrighterIcon,
              t.Nb(e, 7).markerClassEnabled,
              t.Nb(e, 8).showSeparatorLeft,
              t.Nb(e, 8).showSeparatorRight,
              t.Nb(e, 8).prio1Main,
              t.Nb(e, 8).prio1SmallScale,
              t.Nb(e, 8).prio2SmallScale,
              t.Nb(e, 8).prio1,
              t.Nb(e, 8).prio2,
              t.Nb(e, 8).prio1IconText,
              t.Nb(e, 8).prio1IconOnly,
              t.Nb(e, 8).prio1TextOnly,
              t.Nb(e, 8).prio2IconText,
              t.Nb(e, 8).prio2IconOnly,
              t.Nb(e, 8).prio2TextOnly,
              t.Nb(e, 8).useDefaultMaxWidth,
              t.Nb(e, 8).isDummy,
            ]);
          },
        );
      }
      function ai(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-operation-panel-item",
              [
                ["class", "operation-panel__item"],
                ["icon", "E055_phone_hold_call.webp"],
                ["id", "Hold"],
                ["left", ""],
              ],
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
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0,
                  a = l.component;
                return (
                  "mib3Tap" === e &&
                    (t =
                      !1 !==
                        a.callOperationsService.perform(
                          a.focusCall,
                          a.callOperationEnum.Hold,
                        ) && t),
                  t
                );
              },
              un.b,
              un.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              49152,
              null,
              0,
              rn.a,
              [],
              {
                developerText: [0, "developerText"],
                icon: [1, "icon"],
                prio2SmallScale: [2, "prio2SmallScale"],
              },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "Hold"),
              l(
                e,
                4,
                0,
                !n.callOperationsService.isPossible(
                  n.focusCall,
                  n.callOperationEnum.Hold,
                ) || (null == n.focusCall ? null : n.focusCall.isSOS),
              ),
              l(e, 5, 0),
              l(e, 7, 0),
              l(
                e,
                8,
                0,
                n.callTextEnum.HoldCall,
                "E055_phone_hold_call.webp",
                !0,
              ));
          },
          function (l, e) {
            l(e, 0, 1, [
              t.Nb(e, 4).combinedDisabled,
              t.Nb(e, 4).useBrighterIcon,
              t.Nb(e, 7).markerClassEnabled,
              t.Nb(e, 8).showSeparatorLeft,
              t.Nb(e, 8).showSeparatorRight,
              t.Nb(e, 8).prio1Main,
              t.Nb(e, 8).prio1SmallScale,
              t.Nb(e, 8).prio2SmallScale,
              t.Nb(e, 8).prio1,
              t.Nb(e, 8).prio2,
              t.Nb(e, 8).prio1IconText,
              t.Nb(e, 8).prio1IconOnly,
              t.Nb(e, 8).prio1TextOnly,
              t.Nb(e, 8).prio2IconText,
              t.Nb(e, 8).prio2IconOnly,
              t.Nb(e, 8).prio2TextOnly,
              t.Nb(e, 8).useDefaultMaxWidth,
              t.Nb(e, 8).isDummy,
            ]);
          },
        );
      }
      function ii(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-operation-panel-item",
              [
                ["class", "operation-panel__item"],
                ["icon", "E054_phone_continue_call.webp"],
                ["id", "Resume"],
                ["left", ""],
              ],
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
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0,
                  a = l.component;
                return (
                  "mib3Tap" === e &&
                    (t =
                      !1 !==
                        a.callOperationsService.perform(
                          a.focusCall,
                          a.callOperationEnum.Resume,
                        ) && t),
                  t
                );
              },
              un.b,
              un.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              49152,
              null,
              0,
              rn.a,
              [],
              {
                developerText: [0, "developerText"],
                icon: [1, "icon"],
                prio2SmallScale: [2, "prio2SmallScale"],
              },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "Resume"),
              l(
                e,
                4,
                0,
                !n.callOperationsService.isPossible(
                  n.focusCall,
                  n.callOperationEnum.Resume,
                ),
              ),
              l(e, 5, 0),
              l(e, 7, 0),
              l(
                e,
                8,
                0,
                n.callTextEnum.ContinueCall,
                "E054_phone_continue_call.webp",
                !0,
              ));
          },
          function (l, e) {
            l(e, 0, 1, [
              t.Nb(e, 4).combinedDisabled,
              t.Nb(e, 4).useBrighterIcon,
              t.Nb(e, 7).markerClassEnabled,
              t.Nb(e, 8).showSeparatorLeft,
              t.Nb(e, 8).showSeparatorRight,
              t.Nb(e, 8).prio1Main,
              t.Nb(e, 8).prio1SmallScale,
              t.Nb(e, 8).prio2SmallScale,
              t.Nb(e, 8).prio1,
              t.Nb(e, 8).prio2,
              t.Nb(e, 8).prio1IconText,
              t.Nb(e, 8).prio1IconOnly,
              t.Nb(e, 8).prio1TextOnly,
              t.Nb(e, 8).prio2IconText,
              t.Nb(e, 8).prio2IconOnly,
              t.Nb(e, 8).prio2TextOnly,
              t.Nb(e, 8).useDefaultMaxWidth,
              t.Nb(e, 8).isDummy,
            ]);
          },
        );
      }
      function oi(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-operation-panel-item",
              [
                ["class", "operation-panel__item"],
                ["developerText", "Mehr"],
                ["icon", "E9BF_options_more.webp"],
                ["id", "More"],
                ["right", ""],
              ],
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
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== l.component.openMoreMenu() && t),
                  t
                );
              },
              un.b,
              un.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            t.xb(
              6,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              49152,
              null,
              0,
              rn.a,
              [],
              {
                developerText: [0, "developerText"],
                icon: [1, "icon"],
                prio2SmallScale: [2, "prio2SmallScale"],
              },
              null,
            ),
            t.xb(
              10,
              671744,
              null,
              0,
              Vn.a,
              [re.a, Se.i, [2, Se.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "More"),
              l(
                e,
                4,
                0,
                t.Yb(e, 4, 0, t.Nb(e, 5).transform(n.moreMenuDisabled$)) ||
                  (null == n.focusCall ? null : n.focusCall.isSOS),
              ),
              l(e, 6, 0),
              l(e, 8, 0),
              l(e, 9, 0, "Mehr", "E9BF_options_more.webp", !0),
              l(e, 10, 0, n.moreLockingParam));
          },
          function (l, e) {
            l(e, 0, 1, [
              t.Nb(e, 4).combinedDisabled,
              t.Nb(e, 4).useBrighterIcon,
              t.Nb(e, 8).markerClassEnabled,
              t.Nb(e, 9).showSeparatorLeft,
              t.Nb(e, 9).showSeparatorRight,
              t.Nb(e, 9).prio1Main,
              t.Nb(e, 9).prio1SmallScale,
              t.Nb(e, 9).prio2SmallScale,
              t.Nb(e, 9).prio1,
              t.Nb(e, 9).prio2,
              t.Nb(e, 9).prio1IconText,
              t.Nb(e, 9).prio1IconOnly,
              t.Nb(e, 9).prio1TextOnly,
              t.Nb(e, 9).prio2IconText,
              t.Nb(e, 9).prio2IconOnly,
              t.Nb(e, 9).prio2TextOnly,
              t.Nb(e, 9).useDefaultMaxWidth,
              t.Nb(e, 9).isDummy,
            ]);
          },
        );
      }
      function ui(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              34,
              "au3-operation-panel",
              [
                ["class", "operation-panel"],
                ["id", ""],
              ],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
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
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              an.a,
              [on.a],
              { alignItemsInside: [0, "alignItemsInside"] },
              null,
            ),
            (l()(), t.hb(16777216, null, 0, 1, null, ni)),
            t.xb(
              4,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), t.hb(16777216, null, 0, 1, null, ti)),
            t.xb(
              6,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), t.hb(16777216, null, 0, 1, null, ai)),
            t.xb(
              8,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), t.hb(16777216, null, 0, 1, null, ii)),
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
            (l()(),
            t.yb(
              11,
              0,
              null,
              1,
              10,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["class", "operation-panel__center-item"],
                ["icon", "E04E_phone_no_call.webp"],
                ["id", "Disconnect"],
              ],
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
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0,
                  a = l.component;
                return (
                  "mib3Tap" === e &&
                    (t =
                      !1 !==
                        a.callOperationsService.perform(
                          a.focusCall,
                          a.callOperationEnum.HangUp,
                        ) && t),
                  t
                );
              },
              un.b,
              un.a,
            )),
            t.xb(
              12,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(13, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              14,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              15,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              {
                mib3DisabledBrighterIcon: [0, "mib3DisabledBrighterIcon"],
                disabled: [1, "disabled"],
              },
              null,
            ),
            t.xb(
              16,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              18,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              19,
              49152,
              null,
              0,
              rn.a,
              [],
              {
                developerText: [0, "developerText"],
                icon: [1, "icon"],
                prio1Item: [2, "prio1Item"],
              },
              null,
            ),
            t.xb(
              20,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              21,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(),
            t.yb(
              22,
              0,
              null,
              2,
              10,
              "au3-operation-panel-item",
              [
                ["class", "operation-panel__item"],
                ["developerText", "Ziffern"],
                ["id", "Numbers"],
                ["right", ""],
              ],
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
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== l.component.dtmfPressed.emit() && t),
                  t
                );
              },
              un.b,
              un.a,
            )),
            t.xb(
              23,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(24, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              25,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              26,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              27,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              29,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              30,
              49152,
              null,
              0,
              rn.a,
              [],
              {
                developerText: [0, "developerText"],
                icon: [1, "icon"],
                showSeparatorRight: [2, "showSeparatorRight"],
                prio2SmallScale: [3, "prio2SmallScale"],
              },
              null,
            ),
            t.xb(
              31,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              32,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(), t.hb(16777216, null, 2, 1, null, oi)),
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
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, ""),
              l(e, 2, 0, !0),
              l(
                e,
                4,
                0,
                !(
                  n.forDtmf ||
                  (null != n.focusCall && n.focusCall.isMicrophoneMuted)
                ),
              ),
              l(
                e,
                6,
                0,
                !n.forDtmf &&
                  (null == n.focusCall ? null : n.focusCall.isMicrophoneMuted),
              ),
              l(
                e,
                8,
                0,
                (null == n.focusCall ? null : n.focusCall.callState) !==
                  n.callStateEnum.HOLD,
              ),
              l(
                e,
                10,
                0,
                (null == n.focusCall ? null : n.focusCall.callState) ===
                  n.callStateEnum.HOLD,
              ),
              l(e, 12, 0, "Disconnect"),
              l(
                e,
                15,
                0,
                !0,
                !n.callOperationsService.isPossible(
                  n.focusCall,
                  n.callOperationEnum.HangUp,
                ),
              ),
              l(e, 16, 0),
              l(e, 18, 0),
              l(
                e,
                19,
                0,
                n.callTextEnum.HangupCall,
                "E04E_phone_no_call.webp",
                !0,
              ),
              l(e, 23, 0, "Numbers"),
              l(
                e,
                26,
                0,
                (null == n.focusCall ? null : n.focusCall.callState) ===
                  n.callStateEnum.DISCONNECTING ||
                  (null == n.focusCall ? null : n.focusCall.callState) ===
                    n.callStateEnum.RINGINGINCOMING ||
                  !e.parent.context.mib3Let,
              ),
              l(e, 27, 0),
              l(e, 29, 0),
              l(e, 30, 0, "Ziffern", n.dtmfIcon, !n.forDtmf, !0),
              l(e, 34, 0, !n.forDtmf));
          },
          function (l, e) {
            (l(e, 0, 0, t.Nb(e, 2).alignInside, t.Nb(e, 2).alignOutside),
              l(e, 11, 1, [
                t.Nb(e, 15).combinedDisabled,
                t.Nb(e, 15).useBrighterIcon,
                t.Nb(e, 18).markerClassEnabled,
                t.Nb(e, 19).showSeparatorLeft,
                t.Nb(e, 19).showSeparatorRight,
                t.Nb(e, 19).prio1Main,
                t.Nb(e, 19).prio1SmallScale,
                t.Nb(e, 19).prio2SmallScale,
                t.Nb(e, 19).prio1,
                t.Nb(e, 19).prio2,
                t.Nb(e, 19).prio1IconText,
                t.Nb(e, 19).prio1IconOnly,
                t.Nb(e, 19).prio1TextOnly,
                t.Nb(e, 19).prio2IconText,
                t.Nb(e, 19).prio2IconOnly,
                t.Nb(e, 19).prio2TextOnly,
                t.Nb(e, 19).useDefaultMaxWidth,
                t.Nb(e, 19).isDummy,
              ]),
              l(e, 22, 1, [
                t.Nb(e, 26).combinedDisabled,
                t.Nb(e, 26).useBrighterIcon,
                t.Nb(e, 29).markerClassEnabled,
                t.Nb(e, 30).showSeparatorLeft,
                t.Nb(e, 30).showSeparatorRight,
                t.Nb(e, 30).prio1Main,
                t.Nb(e, 30).prio1SmallScale,
                t.Nb(e, 30).prio2SmallScale,
                t.Nb(e, 30).prio1,
                t.Nb(e, 30).prio2,
                t.Nb(e, 30).prio1IconText,
                t.Nb(e, 30).prio1IconOnly,
                t.Nb(e, 30).prio1TextOnly,
                t.Nb(e, 30).prio2IconText,
                t.Nb(e, 30).prio2IconOnly,
                t.Nb(e, 30).prio2TextOnly,
                t.Nb(e, 30).useDefaultMaxWidth,
                t.Nb(e, 30).isDummy,
              ]));
          },
        );
      }
      function ri(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["ttIgnore", ""]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(1, 16384, null, 0, Oe.a, [], null, null),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[8, null], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              { nonI18nValue: [0, "nonI18nValue"] },
              null,
            ),
          ],
          function (l, e) {
            l(e, 2, 0, e.component.callerText);
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 2).backgroundColor,
              t.Nb(e, 2).fixedNumberOfLines,
              t.Nb(e, 2).mayContainLatinCharsForArabic,
              t.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function ci(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "ConferenceCall"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "ConferenceCall"),
              l(e, 2, 0, n.callTextEnum.ConferenceCall, "ConferenceCall", 1));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 2).backgroundColor,
              t.Nb(e, 2).fixedNumberOfLines,
              t.Nb(e, 2).mayContainLatinCharsForArabic,
              t.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function si(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "ConfidentialCall"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "ConfidentialCall"),
              l(
                e,
                2,
                0,
                n.callTextEnum.ConfidentialCall,
                "ConfidentialCall",
                1,
              ));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 2).backgroundColor,
              t.Nb(e, 2).fixedNumberOfLines,
              t.Nb(e, 2).mayContainLatinCharsForArabic,
              t.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function bi(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "CallerUnknown"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "CallerUnknown"),
              l(e, 2, 0, n.callTextEnum.CallerUnknown, "CallerUnknown", 1));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 2).backgroundColor,
              t.Nb(e, 2).fixedNumberOfLines,
              t.Nb(e, 2).mayContainLatinCharsForArabic,
              t.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function di(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(
              e,
              1,
              0,
              null == n.focusCall ? null : n.focusCall.uiCallState,
              n.uiCallStateEnum,
            ),
              l(
                e,
                2,
                0,
                null == n.focusCall ? null : n.focusCall.uiCallState,
                null == n.focusCall ? null : n.focusCall.uiCallState,
                1,
              ));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 2).backgroundColor,
              t.Nb(e, 2).fixedNumberOfLines,
              t.Nb(e, 2).mayContainLatinCharsForArabic,
              t.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function pi(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              17,
              "div",
              [["class", "option"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            t.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["au3ImageLockingCategory", ""],
                ["class", "picture"],
              ],
              [
                [2, "icon-component--hidden", null],
                [2, "lock-state-hidden", null],
                [2, "lock-state-faded", null],
              ],
              null,
              null,
              pn.b,
              pn.a,
            )),
            t.xb(
              2,
              4243456,
              null,
              0,
              hn.b,
              [le.a, t.z],
              { fileName: [0, "fileName"], scaleMode: [1, "scaleMode"] },
              null,
            ),
            t.xb(3, 212992, null, 0, La.a, [Se.i, [2, Se.a], t.h], null, null),
            (l()(),
            t.yb(
              4,
              0,
              null,
              null,
              10,
              "div",
              [["class", "caller"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            t.yb(
              5,
              0,
              null,
              null,
              9,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            t.xb(
              6,
              16384,
              null,
              0,
              ze.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (l()(), t.hb(16777216, [[1, 2]], null, 1, null, ri)),
            t.xb(
              8,
              278528,
              null,
              0,
              ze.p,
              [t.P, t.L, ze.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), t.hb(16777216, [[1, 2]], null, 1, null, ci)),
            t.xb(
              10,
              278528,
              null,
              0,
              ze.p,
              [t.P, t.L, ze.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), t.hb(16777216, [[1, 2]], null, 1, null, si)),
            t.xb(
              12,
              278528,
              null,
              0,
              ze.p,
              [t.P, t.L, ze.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), t.hb(16777216, [[1, 2]], null, 1, null, bi)),
            t.xb(14, 16384, null, 0, ze.q, [t.P, t.L, ze.o], null, null),
            (l()(),
            t.yb(
              15,
              0,
              null,
              null,
              2,
              "div",
              [["class", "call-state"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(), t.hb(16777216, [[1, 2]], null, 1, null, di)),
            t.xb(
              17,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(
              e,
              2,
              0,
              null == n.focusCall ? null : n.focusCall.pictureUri,
              n.scaleMode,
            ),
              l(e, 3, 0),
              l(e, 6, 0, n.callType),
              l(e, 8, 0, n.callTypeEnum.NORMAL),
              l(e, 10, 0, n.callTypeEnum.CONFERENCE),
              l(e, 12, 0, n.callTypeEnum.CONFIDENTIAL),
              l(e, 17, 0, n.focusCall));
          },
          function (l, e) {
            l(
              e,
              1,
              0,
              t.Nb(e, 2).iconComponentHidden,
              t.Nb(e, 3).hide,
              t.Nb(e, 3).fade,
            );
          },
        );
      }
      function hi(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              12,
              "div",
              [],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            t.yb(
              1,
              0,
              null,
              null,
              5,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            t.xb(
              2,
              16384,
              null,
              0,
              ze.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (l()(), t.hb(16777216, null, null, 1, null, ei)),
            t.xb(
              4,
              278528,
              null,
              0,
              ze.p,
              [t.P, t.L, ze.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), t.hb(16777216, null, null, 1, null, ui)),
            t.xb(6, 16384, null, 0, ze.q, [t.P, t.L, ze.o], null, null),
            (l()(),
            t.yb(
              7,
              0,
              null,
              null,
              5,
              "au3-option-menu-wrapper",
              [],
              null,
              null,
              null,
              Zn.b,
              Zn.a,
            )),
            t.Sb(6144, null, qn.b, null, [Jn.a]),
            t.Sb(512, null, Ie.a, Ie.a, [[3, Ie.a]]),
            t.xb(
              10,
              245760,
              null,
              1,
              Jn.a,
              [Xn.a, Qn.a, t.h, Ie.a],
              { ttEnumType: [0, "ttEnumType"] },
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (l()(), t.hb(0, [[1, 2]], null, 0, null, pi)),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 2, 0, null == n.calls ? null : n.calls.length),
              l(e, 4, 0, 2),
              l(e, 10, 0, n.optionTypeEnum));
          },
          null,
        );
      }
      function mi(l) {
        return t.ac(
          0,
          [
            (l()(), t.hb(16777216, null, null, 1, null, Za)),
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
            (l()(), t.hb(0, [["singlecall", 2]], null, 0, null, qa)),
            (l()(), t.hb(16777216, null, null, 2, null, hi)),
            t.xb(
              4,
              16384,
              null,
              0,
              mn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
          ],
          function (l, e) {
            var n = e.component;
            (l(
              e,
              1,
              0,
              (null == n.calls ? null : n.calls.length) > 1,
              t.Nb(e, 2),
            ),
              l(
                e,
                4,
                0,
                t.Yb(
                  e,
                  4,
                  0,
                  t.Nb(e, 5).transform(n.textInputService.initialized$),
                ),
              ));
          },
          null,
        );
      }
      var gi = t.wb({
        encapsulation: 0,
        styles: [
          [
            '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:100%}',
          ],
        ],
        data: {},
      });
      function fi(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-input-field-host",
              [["ttIgnore", ""]],
              null,
              null,
              null,
              Ta.b,
              Ta.a,
            )),
            t.xb(1, 16384, null, 0, Oe.a, [], null, null),
            t.xb(
              2,
              4374528,
              null,
              0,
              Pa.a,
              [
                wn.c,
                zt.a,
                _a.a,
                Xl.a,
                Ia.a,
                Ql.a,
                t.h,
                Se.i,
                [2, Ea.b],
                [2, re.a],
                Aa.a,
                le.a,
                Da.a,
                Ma.a,
                t.l,
                we.a,
                wa.a,
                on.a,
              ],
              { inputField: [0, "inputField"] },
              null,
            ),
          ],
          function (l, e) {
            l(e, 2, 0, e.component.inputField);
          },
          null,
        );
      }
      function xi(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              24,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:PHONE_CALL_*_ACTIVE"],
              ],
              null,
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ge.a, [le.a], { id: [0, "id"] }, null),
            (l()(),
            t.yb(
              3,
              0,
              null,
              0,
              16,
              "au3-title-line",
              [["id", "CallTitle"]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Fe.b,
              Fe.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              16384,
              null,
              0,
              Ze.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.xb(
              6,
              49152,
              null,
              0,
              Be.a,
              [je.a, He.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryId: [1, "primaryId"],
                primaryIdEnumType: [2, "primaryIdEnumType"],
                hasSecondaryText: [3, "hasSecondaryText"],
                hasTextInput: [4, "hasTextInput"],
                hideRightPadding: [5, "hideRightPadding"],
              },
              null,
            ),
            (l()(),
            t.yb(
              7,
              0,
              null,
              0,
              10,
              "au3-title-line-item",
              [
                ["id", ""],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0,
                  a = l.component;
                return (
                  "mib3Tap" === e &&
                    (t =
                      !1 !==
                        (a.dtmfActive
                          ? a.toggleDtmf()
                          : a.phoneRoutingService.goBack()) && t),
                  t
                );
              },
              ue.b,
              ue.a,
            )),
            t.xb(
              8,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(9, 16384, null, 0, Oe.a, [], null, null),
            t.xb(10, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              11,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              12,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              14,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              15,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(), t.hb(16777216, null, 1, 1, null, fi)),
            t.xb(
              19,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(),
            t.yb(
              20,
              0,
              null,
              0,
              4,
              "au3-active-call-view",
              [["id", ""]],
              null,
              [[null, "dtmfPressed"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "dtmfPressed" === e &&
                    (t = !1 !== l.component.toggleDtmf() && t),
                  t
                );
              },
              mi,
              Wa,
            )),
            t.Sb(6144, null, Xn.a, null, [S]),
            t.xb(
              22,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.Sb(512, null, S, S, [a.c]),
            t.xb(
              24,
              245760,
              null,
              0,
              P,
              [a.c, C.b, i.a, Qn.a, S, wn.c, le.a],
              { dtmfActive: [0, "dtmfActive"] },
              { dtmfPressed: "dtmfPressed" },
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "Screen:PHONE_CALL_*_ACTIVE"),
              l(e, 2, 0, "Screen:PHONE_CALL_*_ACTIVE"),
              l(e, 4, 0, "CallTitle"),
              l(e, 5, 0, n.titleReplacement),
              l(
                e,
                6,
                0,
                n.titleId,
                n.titleId,
                n.titleIdEnum,
                !1,
                n.dtmfActive,
                !0,
              ),
              l(e, 8, 0, ""),
              l(e, 12, 0),
              l(e, 14, 0),
              l(
                e,
                15,
                0,
                !1,
                n.dtmfActive
                  ? "E163_Backbutton.webp"
                  : "E3EE_common_tiles_view.webp",
              ),
              l(e, 19, 0, n.dtmfActive),
              l(e, 22, 0, ""),
              l(e, 24, 0, n.dtmfActive));
          },
          function (l, e) {
            (l(
              e,
              3,
              0,
              t.Nb(e, 6).hideLeftBorder,
              t.Nb(e, 6).hideDividingBorders,
            ),
              l(
                e,
                7,
                0,
                t.Nb(e, 14).markerClassEnabled,
                t.Nb(e, 15).useItemPlaceholder,
              ));
          },
        );
      }
      function vi(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-active-call",
              [],
              null,
              null,
              null,
              xi,
              gi,
            )),
            t.xb(
              1,
              245760,
              null,
              0,
              I,
              [a.c, i.a, Ql.a, wn.c, t.h, le.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            l(e, 1, 0);
          },
          null,
        );
      }
      var Si = t.ub("au3-active-call", I, vi, {}, {}, []),
        yi = n("KoKl"),
        Oi = n("bh6+"),
        Ci = n("RiFk"),
        Ni = n("MJw2"),
        Ti = n("llYL"),
        Pi = n("bbXE"),
        _i = n("ZGXH"),
        Ii = n("TmB6"),
        Ei = t.wb({
          encapsulation: 0,
          styles: [
            [
              '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:100%}.content-area[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;flex-direction:row;max-width:100%}.keyboard[_ngcontent-%COMP%]{width:auto}.content-area__content-wrapper[_ngcontent-%COMP%]{flex-grow:1}.content-area__content[_ngcontent-%COMP%]{max-width:100%;height:100%;padding-bottom:25px}',
            ],
          ],
          data: {},
        });
      function Ai(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              32,
              "au3-screen",
              [
                ["class", "screen"],
                [
                  "id",
                  "Screen:PHONE_CALL_*_ACTIVE_DTMF_SINGLEDISPLAY_NUMERIC_KEYBOARD",
                ],
              ],
              null,
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ge.a, [le.a], { id: [0, "id"] }, null),
            (l()(),
            t.yb(
              3,
              0,
              null,
              0,
              19,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Fe.b,
              Fe.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              Be.a,
              [je.a, He.a],
              {
                hasPrimaryText: [0, "hasPrimaryText"],
                hasSecondaryText: [1, "hasSecondaryText"],
                hasTextInput: [2, "hasTextInput"],
              },
              null,
            ),
            (l()(),
            t.yb(
              6,
              0,
              null,
              0,
              13,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", "BackButton"],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              ue.b,
              ue.a,
            )),
            t.xb(7, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              null,
              null,
            ),
            t.xb(
              11,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              Tn.a,
              [le.a, Pn.a, t.l, [2, he.a], [2, re.a]],
              null,
              null,
            ),
            t.xb(
              13,
              671744,
              null,
              0,
              ve.a,
              [Xl.a, Se.i, re.a, he.a, ve.b, ye.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.xb(14, 16384, null, 0, Oe.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              16,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              17,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              18,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              19,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(),
            t.yb(
              20,
              0,
              null,
              1,
              2,
              "au3-input-field-host",
              [["ttIgnore", ""]],
              null,
              null,
              null,
              Ta.b,
              Ta.a,
            )),
            t.xb(21, 16384, null, 0, Oe.a, [], null, null),
            t.xb(
              22,
              4374528,
              null,
              0,
              Pa.a,
              [
                wn.c,
                zt.a,
                _a.a,
                Xl.a,
                Ia.a,
                Ql.a,
                t.h,
                Se.i,
                [2, Ea.b],
                [2, re.a],
                Aa.a,
                le.a,
                Da.a,
                Ma.a,
                t.l,
                we.a,
                wa.a,
                on.a,
              ],
              { inputField: [0, "inputField"] },
              null,
            ),
            (l()(),
            t.yb(
              23,
              0,
              null,
              0,
              9,
              "div",
              [["class", "content-area"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            t.yb(
              24,
              0,
              null,
              null,
              1,
              "au3-keyboard-host",
              [["class", "keyboard"]],
              null,
              null,
              null,
              yi.b,
              yi.a,
            )),
            t.xb(
              25,
              770048,
              null,
              0,
              Oi.a,
              [
                wn.c,
                zt.a,
                Ci.a,
                Se.i,
                t.h,
                Ql.a,
                Ni.a,
                Mn.a,
                Ye.a,
                Ti.a,
                Ma.a,
                we.a,
                Le.b,
                Pi.a,
                le.a,
              ],
              { inputField: [0, "inputField"], contextId: [1, "contextId"] },
              null,
            ),
            (l()(),
            t.yb(
              26,
              0,
              null,
              null,
              6,
              "au3-resizable-container",
              [["class", "content-area__content-wrapper"]],
              null,
              null,
              null,
              _i.b,
              _i.a,
            )),
            t.xb(
              27,
              4374528,
              null,
              0,
              Ii.a,
              [[2, Jl.a], He.a, t.l, Le.b, t.h],
              { resizable: [0, "resizable"] },
              null,
            ),
            (l()(),
            t.yb(
              28,
              0,
              null,
              0,
              4,
              "au3-active-call-view",
              [
                ["class", "content-area__content"],
                ["id", ""],
              ],
              null,
              [[null, "dtmfPressed"]],
              function (l, e, n) {
                var t = !0,
                  a = l.component;
                return (
                  "dtmfPressed" === e &&
                    (t =
                      !1 !==
                        a.phoneRoutingService.goTo(a.PhoneRoute.ActiveCall) &&
                      t),
                  t
                );
              },
              mi,
              Wa,
            )),
            t.Sb(6144, null, Xn.a, null, [S]),
            t.xb(
              30,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.Sb(512, null, S, S, [a.c]),
            t.xb(
              32,
              245760,
              null,
              0,
              P,
              [a.c, C.b, i.a, Qn.a, S, wn.c, le.a],
              null,
              { dtmfPressed: "dtmfPressed" },
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(
              e,
              1,
              0,
              "Screen:PHONE_CALL_*_ACTIVE_DTMF_SINGLEDISPLAY_NUMERIC_KEYBOARD",
            ),
              l(
                e,
                2,
                0,
                "Screen:PHONE_CALL_*_ACTIVE_DTMF_SINGLEDISPLAY_NUMERIC_KEYBOARD",
              ),
              l(e, 4, 0, ""),
              l(e, 5, 0, !1, !1, !0),
              l(e, 8, 0, "BackButton"),
              l(e, 11, 0),
              l(e, 13, 0, n.PhoneRoute.ActiveCall),
              l(e, 16, 0),
              l(e, 17, 0, !1, "E163_Backbutton.webp"),
              l(e, 22, 0, n.inputField),
              l(e, 25, 0, n.inputField, n.contextId),
              l(e, 27, 0, !1),
              l(e, 30, 0, ""),
              l(e, 32, 0));
          },
          function (l, e) {
            (l(
              e,
              3,
              0,
              t.Nb(e, 5).hideLeftBorder,
              t.Nb(e, 5).hideDividingBorders,
            ),
              l(
                e,
                6,
                0,
                t.Nb(e, 10).combinedDisabled,
                t.Nb(e, 10).useBrighterIcon,
                t.Nb(e, 16).markerClassEnabled,
                t.Nb(e, 17).useItemPlaceholder,
              ));
          },
        );
      }
      function Di(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-active-call-dtmf",
              [],
              null,
              null,
              null,
              Ai,
              Ei,
            )),
            t.xb(1, 245760, null, 0, h, [a.c, i.a, wn.c, le.a], null, null),
          ],
          function (l, e) {
            l(e, 1, 0);
          },
          null,
        );
      }
      var Mi = t.ub("au3-active-call-dtmf", h, Di, {}, {}, []),
        wi = n("4XZL"),
        Li = n("URLa"),
        ki = (function (l) {
          return (
            (l.Mobile = "Audio ans Mobiltelefon weiterleiten"),
            (l.SCON = "Audio an SCON weiterleiten"),
            (l.Headset = "Audio ans Bluetooth Headset weiterleiten"),
            l
          );
        })({});
      class Ri {
        constructor(l, e, n, t) {
          ((this.phoneService = l),
            (this.routingService = e),
            (this.cdr = t),
            (this.AudioEndpointEnum = m.a),
            (this.AudioEndpointText = ki),
            (this.PhoneRoute = d.b),
            (this.listItemType = p.rb),
            (this.destroy$$ = new o.a(1)),
            (this.logger = n.getLogger("phone.ForwardAudioOptions")),
            this.phoneService.calls$
              .pipe(
                Object(u.a)((l) => l && l.focusCall),
                Object(s.a)(this.destroy$$),
              )
              .subscribe((l) => {
                (l ||
                  (this.logger.warn(
                    "forward audio options: focus call disappeared. routing back to phone main",
                  ),
                  this.routingService.goTo(d.b.Main)),
                  (this.focusCall = l),
                  this.cdr.markForCheck());
              }));
        }
        forwardAudioToDevice(l) {
          (this.phoneService.redirectAudio(this.focusCall.id, l),
            this.routingService.goBack());
        }
        audioEndpointText(l) {
          switch (l) {
            case m.a.MOBILE:
              return ki.Mobile;
            case m.a.SCON:
              return ki.SCON;
            case m.a.HEADSET:
              return ki.Headset;
            default:
              return ki.Mobile;
          }
        }
        ngOnDestroy() {
          (this.destroy$$.next(), this.destroy$$.complete());
        }
      }
      var $i = t.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{height:100%;display:block}.list__item[_ngcontent-%COMP%]{height:100px;font-size:40px}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}",
          ],
        ],
        data: {},
      });
      function Fi(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              8,
              "au3-list-route-item",
              [["class", "list__item"]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t =
                      !1 !==
                        l.component.forwardAudioToDevice(
                          l.parent.context.$implicit,
                        ) && t),
                  t
                );
              },
              wi.b,
              wi.a,
            )),
            t.xb(1, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              2,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              3,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              5,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              114688,
              null,
              0,
              Li.a,
              [],
              {
                titleTextId: [0, "titleTextId"],
                titleTextIdEnum: [1, "titleTextIdEnum"],
                titleDeveloperText: [2, "titleDeveloperText"],
                type: [3, "type"],
              },
              null,
            ),
            t.xb(
              7,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 3, 0),
              l(e, 5, 0),
              l(
                e,
                6,
                0,
                n.audioEndpointText(e.parent.context.$implicit),
                n.AudioEndpointText,
                n.audioEndpointText(e.parent.context.$implicit),
                n.listItemType.ITEM_TYPE_NO_END_ICON,
              ));
          },
          function (l, e) {
            l(e, 0, 0, t.Nb(e, 5).markerClassEnabled);
          },
        );
      }
      function Bi(l) {
        return t.ac(
          0,
          [
            (l()(), t.hb(16777216, [[1, 2]], null, 1, null, Fi)),
            t.xb(
              1,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), t.hb(0, null, null, 0)),
          ],
          function (l, e) {
            l(
              e,
              1,
              0,
              e.context.$implicit !== e.component.AudioEndpointEnum.SPEAKER,
            );
          },
          null,
        );
      }
      function ji(l) {
        return t.ac(
          2,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              38,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:PHONE_CALL_OPTION_AUDIO"],
              ],
              null,
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ge.a, [le.a], { id: [0, "id"] }, null),
            (l()(),
            t.yb(
              3,
              0,
              null,
              0,
              28,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Fe.b,
              Fe.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              Be.a,
              [je.a, He.a],
              {
                primaryNonI18nText: [0, "primaryNonI18nText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (l()(),
            t.yb(
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
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== l.component.routingService.goUp() && t),
                  t
                );
              },
              ue.b,
              ue.a,
            )),
            t.xb(7, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Tn.a,
              [le.a, Pn.a, t.l, [2, he.a], [2, re.a]],
              null,
              null,
            ),
            t.xb(12, 16384, null, 0, Oe.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              14,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              15,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(),
            t.yb(
              18,
              0,
              null,
              2,
              13,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "SettingsButton"],
                ["right", ""],
                ["ttDoNotToggleChildren", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              ue.b,
              ue.a,
            )),
            t.xb(
              19,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              null,
              null,
            ),
            t.xb(20, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              21,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              22,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              23,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              null,
            ),
            t.xb(
              24,
              671744,
              null,
              0,
              ve.a,
              [Xl.a, Se.i, re.a, he.a, ve.b, ye.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(25, 16384, null, 0, Oe.a, [], null, null),
            t.xb(26, 16384, null, 0, Un.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              28,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              29,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              30,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              31,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(),
            t.yb(
              32,
              0,
              null,
              0,
              6,
              "au3-list",
              [
                ["class", "list"],
                ["id", ""],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Nt.b,
              Nt.a,
            )),
            t.Sb(6144, null, Tt.a, null, [Pt.a]),
            t.xb(
              34,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(35, 16384, null, 0, _t.a, [t.l], null, null),
            t.xb(
              36,
              12828672,
              null,
              1,
              Pt.a,
              [
                [2, It.a],
                [2, Et.a],
                [8, null],
                [2, be.a],
                [2, At.a],
                [2, Dt.a],
                [2, me.b],
                Se.i,
                t.z,
                t.h,
                le.a,
                Mt.a,
                wt.a,
                [2, Te.a],
                pe.a,
                [2, Se.a],
              ],
              { items: [0, "items"] },
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (l()(), t.hb(0, [[1, 2]], 0, 0, null, Bi)),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "Screen:PHONE_CALL_OPTION_AUDIO"),
              l(e, 2, 0, "Screen:PHONE_CALL_OPTION_AUDIO"),
              l(e, 4, 0, ""),
              l(
                e,
                5,
                0,
                null == n.focusCall ? null : n.focusCall.phoneDevice.name,
                "AUDIO WEITERLEITEN",
              ),
              l(e, 8, 0, ""),
              l(e, 10, 0),
              l(e, 14, 0),
              l(e, 15, 0, !1, "E163_Backbutton.webp"),
              l(e, 21, 0, "SettingsButton"),
              l(e, 23, 0),
              l(e, 24, 0, n.PhoneRoute.Main.children.Settings, !0),
              l(e, 28, 0),
              l(e, 29, 0, !1, "E186_settings.webp"),
              l(e, 34, 0, ""),
              l(
                e,
                36,
                0,
                null == n.focusCall
                  ? null
                  : n.focusCall.availableAudioEndpoints,
              ));
          },
          function (l, e) {
            (l(
              e,
              3,
              0,
              t.Nb(e, 5).hideLeftBorder,
              t.Nb(e, 5).hideDividingBorders,
            ),
              l(
                e,
                6,
                0,
                t.Nb(e, 14).markerClassEnabled,
                t.Nb(e, 15).useItemPlaceholder,
              ),
              l(
                e,
                18,
                0,
                t.Nb(e, 19).combinedDisabled,
                t.Nb(e, 19).useBrighterIcon,
                t.Nb(e, 28).markerClassEnabled,
                t.Nb(e, 29).useItemPlaceholder,
              ),
              l(e, 32, 0, t.Nb(e, 36).showLineNumbers));
          },
        );
      }
      function Hi(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-forward-audio-options",
              [],
              null,
              null,
              null,
              ji,
              $i,
            )),
            t.xb(1, 180224, null, 0, Ri, [a.c, Xl.a, le.a, t.h], null, null),
          ],
          null,
          null,
        );
      }
      var zi = t.ub("au3-forward-audio-options", Ri, Hi, {}, {}, []),
        Ui = n("Ps6X"),
        Vi = t.wb({
          encapsulation: 0,
          styles: [
            [
              '@charset "UTF-8";@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:block}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{height:100%;width:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch}.item[_ngcontent-%COMP%]{height:120px;display:grid;grid-template-columns:1fr auto;align-items:center;padding:0 20px;position:relative}.state-disabled[_ngcontent-%COMP%]{filter:grayscale(100%) brightness(.4)}.caller[_ngcontent-%COMP%]{grid-row:1;font-size:40px}.caller[_ngcontent-%COMP%], .number[_ngcontent-%COMP%]{grid-column:1;min-width:0}.number[_ngcontent-%COMP%]{grid-row:2;font-size:30px;display:flex}.number[_ngcontent-%COMP%]:before{content:"\u200b"}.number__type[_ngcontent-%COMP%]:after{content:" "}.delete[_ngcontent-%COMP%]{grid-column:2;grid-row-start:1;grid-row-end:3}.component-layout-arabic[_nghost-%COMP%]   .caller[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .caller[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .item[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .item[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .number[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .number[_ngcontent-%COMP%]{direction:rtl}',
            ],
          ],
          data: {},
        });
      function Ki(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["ttIgnore", ""]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(1, 16384, null, 0, Oe.a, [], null, null),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[8, null], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              { nonI18nValue: [0, "nonI18nValue"] },
              null,
            ),
          ],
          function (l, e) {
            l(e, 2, 0, e.parent.context.mib3Let);
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 2).backgroundColor,
              t.Nb(e, 2).fixedNumberOfLines,
              t.Nb(e, 2).mayContainLatinCharsForArabic,
              t.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Gi(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "Unknown"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, e) {
            (l(e, 1, 0, "Unknown"), l(e, 2, 0, "Unbekannt", "Unknown", 1));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 2).backgroundColor,
              t.Nb(e, 2).fixedNumberOfLines,
              t.Nb(e, 2).mayContainLatinCharsForArabic,
              t.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Yi(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              4,
              "div",
              [["class", "caller"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(), t.hb(16777216, [[1, 2]], null, 1, null, Ki)),
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
            (l()(), t.hb(16777216, [[1, 2]], null, 1, null, Gi)),
            t.xb(
              4,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (l, e) {
            (l(e, 2, 0, !!e.context.mib3Let), l(e, 4, 0, !e.context.mib3Let));
          },
          null,
        );
      }
      function Wi(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "number__type"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, e) {
            (l(e, 1, 0, e.context.ngIf, e.component.numberTypeEnum),
              l(e, 2, 0, e.context.ngIf, e.context.ngIf, 1));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 2).backgroundColor,
              t.Nb(e, 2).fixedNumberOfLines,
              t.Nb(e, 2).mayContainLatinCharsForArabic,
              t.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Zi(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "number__text"],
                ["id", ""],
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
              Ke.b,
              Ke.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 16384, null, 0, Oe.a, [], null, null),
            t.xb(
              3,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              {
                id: [0, "id"],
                fixedNumberOfLines: [1, "fixedNumberOfLines"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (l, e) {
            (l(e, 1, 0, ""), l(e, 3, 0, "", 1, e.context.ngIf));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 3).backgroundColor,
              t.Nb(e, 3).fixedNumberOfLines,
              t.Nb(e, 3).mayContainLatinCharsForArabic,
              t.Nb(e, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function qi(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              7,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(), t.hb(16777216, [[1, 2]], null, 1, null, Yi)),
            t.xb(
              2,
              16384,
              null,
              0,
              mn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            (l()(),
            t.yb(
              3,
              0,
              null,
              null,
              4,
              "div",
              [["class", "number"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(), t.hb(16777216, [[1, 2]], null, 1, null, Wi)),
            t.xb(
              5,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), t.hb(16777216, [[1, 2]], null, 1, null, Zi)),
            t.xb(
              7,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 2, 0, n.callerText(e.parent.context.$implicit)),
              l(e, 5, 0, n.numberType(e.parent.context.$implicit)),
              l(e, 7, 0, n.numberText(e.parent.context.$implicit)));
          },
          null,
        );
      }
      function Ji(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "caller"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            t.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "PrivateName"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              3,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 2, 0, "PrivateName"),
              l(e, 3, 0, n.confidentialModeReplacement, "PrivateName", 1));
          },
          function (l, e) {
            l(
              e,
              1,
              0,
              t.Nb(e, 3).backgroundColor,
              t.Nb(e, 3).fixedNumberOfLines,
              t.Nb(e, 3).mayContainLatinCharsForArabic,
              t.Nb(e, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Xi(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              17,
              "div",
              [["class", "item"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
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
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t =
                      !1 !== l.component.deleteMember(l.context.$implicit) &&
                      t),
                  t
                );
              },
              null,
              null,
            )),
            t.xb(1, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              2,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              3,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              212992,
              null,
              0,
              Ui.a,
              [[2, he.a], [8, null], [3, Ui.a], t.l, t.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(), t.hb(16777216, [[1, 2]], null, 2, null, qi)),
            t.xb(
              11,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (l()(),
            t.hb(
              0,
              [
                [1, 2],
                ["privacyMode", 2],
              ],
              null,
              0,
              null,
              Ji,
            )),
            (l()(),
            t.yb(
              14,
              0,
              null,
              null,
              3,
              "au3-button",
              [
                ["class", "delete"],
                ["id", "DeleteButton"],
                ["ttIgnore", ""],
              ],
              [
                [2, "button--activated", null],
                [2, "button--horizontal", null],
                [2, "button--with-border", null],
                [2, "button--with-thick-border", null],
              ],
              null,
              null,
              la.b,
              la.a,
            )),
            t.xb(
              15,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(16, 16384, null, 0, Oe.a, [], null, null),
            t.xb(
              17,
              49152,
              null,
              0,
              ea.b,
              [],
              {
                hasText: [0, "hasText"],
                icon: [1, "icon"],
                iconCategory: [2, "iconCategory"],
              },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 3, 0, !n.isPossibleToDeleteMember(e.context.$implicit)),
              l(e, 4, 0),
              l(e, 6, 0),
              l(e, 7, 0, n.uiStateType),
              l(
                e,
                11,
                0,
                !t.Yb(
                  e,
                  11,
                  0,
                  t
                    .Nb(e, 12)
                    .transform(n.focusPhoneSconConfidentialModeActive$),
                ),
                t.Nb(e, 13),
              ),
              l(e, 15, 0, "DeleteButton"),
              l(
                e,
                17,
                0,
                !1,
                "EA10_icon_delete.webp",
                n.iconCategoryEnum.ListTwoline,
              ));
          },
          function (l, e) {
            (l(e, 0, 1, [
              t.Nb(e, 3).combinedDisabled,
              t.Nb(e, 3).useBrighterIcon,
              t.Nb(e, 6).markerClassEnabled,
              t.Nb(e, 7).uiStateListHorizontal,
              t.Nb(e, 7).uiStateListVertical,
              t.Nb(e, 7).uiStateCoverLeft,
              t.Nb(e, 7).uiStateCoverRight,
              t.Nb(e, 7).uiStateCoverBottom,
              t.Nb(e, 7).uiStateButton,
              t.Nb(e, 7).uiStateByDabLeft,
              t.Nb(e, 7).uiStateByDabRight,
              t.Nb(e, 7).uiStateLbDabLeft,
              t.Nb(e, 7).uiStateLbDabRight,
            ]),
              l(
                e,
                14,
                0,
                t.Nb(e, 17).activated,
                t.Nb(e, 17).layoutHorizontal,
                t.Nb(e, 17).thinBorder,
                t.Nb(e, 17).thickBorder,
              ));
          },
        );
      }
      function Qi(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              41,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:PHONE_CALL_OPTION_CC_MEMBERS"],
              ],
              null,
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ge.a, [le.a], { id: [0, "id"] }, null),
            (l()(),
            t.yb(
              3,
              0,
              null,
              0,
              28,
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
              Fe.b,
              Fe.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              Be.a,
              [je.a, He.a],
              {
                primaryNonI18nText: [0, "primaryNonI18nText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            (l()(),
            t.yb(
              7,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", "BackButton"],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e && (t = !1 !== l.component.goBack() && t),
                  t
                );
              },
              ue.b,
              ue.a,
            )),
            t.xb(8, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              9,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              11,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              Tn.a,
              [le.a, Pn.a, t.l, [2, he.a], [2, re.a]],
              null,
              null,
            ),
            t.xb(13, 16384, null, 0, Oe.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              15,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              16,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              18,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(),
            t.yb(
              19,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "SettingsButton"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              ue.b,
              ue.a,
            )),
            t.xb(
              20,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              null,
              null,
            ),
            t.xb(21, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              22,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              23,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              24,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              null,
            ),
            t.xb(
              25,
              671744,
              null,
              0,
              ve.a,
              [Xl.a, Se.i, re.a, he.a, ve.b, ye.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(26, 16384, null, 0, Oe.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              28,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              29,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              30,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              31,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(),
            t.yb(
              32,
              0,
              null,
              0,
              9,
              "au3-list",
              [
                ["au3ListDomPaging", ""],
                ["id", ""],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Nt.b,
              Nt.a,
            )),
            t.Sb(6144, null, Tt.a, null, [Pt.a]),
            t.xb(
              34,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(35, 16384, null, 0, _t.a, [t.l], null, null),
            t.xb(
              36,
              16384,
              null,
              0,
              It.a,
              [le.a],
              { itemHeightGuess: [0, "itemHeightGuess"] },
              null,
            ),
            t.xb(
              37,
              12828672,
              null,
              1,
              Pt.a,
              [
                [2, It.a],
                [2, Et.a],
                [8, null],
                [2, be.a],
                [2, At.a],
                [2, Dt.a],
                [2, me.b],
                Se.i,
                t.z,
                t.h,
                le.a,
                Mt.a,
                wt.a,
                [2, Te.a],
                pe.a,
                [2, Se.a],
              ],
              { itemHeightGuess: [0, "itemHeightGuess"] },
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (l()(), t.hb(16777216, [[1, 2]], 0, 2, null, Xi)),
            t.xb(
              40,
              278528,
              null,
              0,
              ze.j,
              [t.P, t.L, t.s],
              { ngForOf: [0, "ngForOf"], ngForTrackBy: [1, "ngForTrackBy"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "Screen:PHONE_CALL_OPTION_CC_MEMBERS"),
              l(e, 2, 0, "Screen:PHONE_CALL_OPTION_CC_MEMBERS"),
              l(e, 4, 0, ""),
              l(
                e,
                5,
                0,
                t.Yb(e, 5, 0, t.Nb(e, 6).transform(n.phoneService.deviceName$)),
                "Teilnehmer entfernen",
              ),
              l(e, 9, 0, "BackButton"),
              l(e, 11, 0),
              l(e, 15, 0),
              l(e, 16, 0, !1, "E163_Backbutton.webp"),
              l(e, 22, 0, "SettingsButton"),
              l(e, 24, 0),
              l(e, 25, 0, n.PhoneRoute.Main.children.Settings, !0),
              l(e, 28, 0),
              l(e, 29, 0, !1, "E186_settings.webp"),
              l(e, 34, 0, ""),
              l(e, 36, 0, 100),
              l(e, 37, 0, 100),
              l(
                e,
                40,
                0,
                t.Yb(e, 40, 0, t.Nb(e, 41).transform(n.conferenceMembers$)),
                n.trackConferenceMember,
              ));
          },
          function (l, e) {
            (l(
              e,
              3,
              0,
              t.Nb(e, 5).hideLeftBorder,
              t.Nb(e, 5).hideDividingBorders,
            ),
              l(
                e,
                7,
                0,
                t.Nb(e, 15).markerClassEnabled,
                t.Nb(e, 16).useItemPlaceholder,
              ),
              l(
                e,
                19,
                0,
                t.Nb(e, 20).combinedDisabled,
                t.Nb(e, 20).useBrighterIcon,
                t.Nb(e, 28).markerClassEnabled,
                t.Nb(e, 29).useItemPlaceholder,
              ),
              l(e, 32, 0, t.Nb(e, 37).showLineNumbers));
          },
        );
      }
      function lo(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-conference-members",
              [],
              null,
              null,
              null,
              Qi,
              Vi,
            )),
            t.xb(1, 245760, null, 0, J, [a.c, i.a, le.a], null, null),
          ],
          function (l, e) {
            l(e, 1, 0);
          },
          null,
        );
      }
      var eo = t.ub("au3-conference-members", J, lo, {}, {}, []),
        no = n("SFb6"),
        to = n("DlQy"),
        ao = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:100%}.instruction-text[_ngcontent-%COMP%]     .primary-text{flex:0 0 auto}.instruction-text[_ngcontent-%COMP%]     .secondary-text{white-space:pre-line}",
            ],
          ],
          data: {},
        });
      function io(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-operation-panel-item",
              [],
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
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t =
                      !1 !== l.component.buttonTapped(l.context.$implicit) &&
                      t),
                  t
                );
              },
              un.b,
              un.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              49152,
              null,
              0,
              rn.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
          ],
          function (l, e) {
            (l(e, 1, 0, e.context.$implicit.id),
              l(e, 4, 0),
              l(e, 6, 0),
              l(e, 7, 0, e.context.$implicit.text, !0));
          },
          function (l, e) {
            l(e, 0, 1, [
              t.Nb(e, 6).markerClassEnabled,
              t.Nb(e, 7).showSeparatorLeft,
              t.Nb(e, 7).showSeparatorRight,
              t.Nb(e, 7).prio1Main,
              t.Nb(e, 7).prio1SmallScale,
              t.Nb(e, 7).prio2SmallScale,
              t.Nb(e, 7).prio1,
              t.Nb(e, 7).prio2,
              t.Nb(e, 7).prio1IconText,
              t.Nb(e, 7).prio1IconOnly,
              t.Nb(e, 7).prio1TextOnly,
              t.Nb(e, 7).prio2IconText,
              t.Nb(e, 7).prio2IconOnly,
              t.Nb(e, 7).prio2TextOnly,
              t.Nb(e, 7).useDefaultMaxWidth,
              t.Nb(e, 7).isDummy,
            ]);
          },
        );
      }
      function oo(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              8,
              "au3-instruction-text",
              [["class", "instruction-text"]],
              null,
              null,
              null,
              en.b,
              en.a,
            )),
            t.xb(
              1,
              16384,
              null,
              0,
              Ze.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
            t.Qb(3, { vin: 0, position: 1, positionAndCoordinates: 2 }),
            t.xb(
              4,
              49152,
              null,
              0,
              nn.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryFixedNumberOfLines: [1, "primaryFixedNumberOfLines"],
                secondaryDeveloperText: [2, "secondaryDeveloperText"],
                secondaryFixedNumberOfLines: [3, "secondaryFixedNumberOfLines"],
                hasSecondaryText: [4, "hasSecondaryText"],
              },
              null,
            ),
            (l()(),
            t.yb(
              5,
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
              tn.b,
              tn.a,
            )),
            t.xb(
              6,
              49152,
              null,
              0,
              an.a,
              [on.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (l()(), t.hb(16777216, null, 1, 1, null, io)),
            t.xb(
              8,
              278528,
              null,
              0,
              ze.j,
              [t.P, t.L, t.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component,
              a = l(
                e,
                3,
                0,
                t.Yb(e, 1, 0, t.Nb(e, 2).transform(n.vin$)),
                null == e.context.mib3Let
                  ? null
                  : e.context.mib3Let.positionOrCoordinates,
                null == e.context.mib3Let
                  ? null
                  : e.context.mib3Let.positionAndCoordinates,
              );
            (l(e, 1, 0, a),
              l(
                e,
                4,
                0,
                null == n.screenData ? null : n.screenData.primaryText,
                2,
                null == n.screenData ? null : n.screenData.secondaryText,
                5,
                null == e.context.mib3Let
                  ? null
                  : e.context.mib3Let.showSecondaryText,
              ),
              l(e, 6, 0, !0),
              l(e, 8, 0, null == n.screenData ? null : n.screenData.buttons));
          },
          function (l, e) {
            l(e, 5, 0, t.Nb(e, 6).alignInside, t.Nb(e, 6).alignOutside);
          },
        );
      }
      function uo(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              8,
              "au3-screen",
              [],
              null,
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ge.a, [le.a], { id: [0, "id"] }, null),
            (l()(),
            t.yb(
              3,
              0,
              null,
              0,
              2,
              "au3-title-line",
              [["id", "TitleLine"]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Fe.b,
              Fe.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              Be.a,
              [je.a, He.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                hasSecondaryText: [1, "hasSecondaryText"],
              },
              null,
            ),
            (l()(), t.hb(16777216, null, 0, 2, null, oo)),
            t.xb(
              7,
              16384,
              null,
              0,
              mn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "Screen:" + n.screenId),
              l(e, 2, 0, "Screen:" + n.screenId),
              l(e, 4, 0, "TitleLine"),
              l(e, 5, 0, null == n.screenData ? null : n.screenData.title, !1),
              l(
                e,
                7,
                0,
                t.Yb(e, 7, 0, t.Nb(e, 8).transform(n.dynamicScreenData$)),
              ));
          },
          function (l, e) {
            l(
              e,
              3,
              0,
              t.Nb(e, 5).hideLeftBorder,
              t.Nb(e, 5).hideDividingBorders,
            );
          },
        );
      }
      function ro(l) {
        return t.ac(
          0,
          [
            (l()(), t.hb(16777216, null, null, 1, null, uo)),
            t.xb(
              1,
              16384,
              null,
              0,
              ze.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (l, e) {
            l(e, 1, 0, e.component.screenData);
          },
          null,
        );
      }
      function co(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-ecall-opr",
              [],
              null,
              null,
              null,
              ro,
              ao,
            )),
            t.xb(
              1,
              49152,
              null,
              0,
              vl,
              [tl.a, ee.a, no.a, il.d, rl.d, sl.a, to.a, Ql.a, le.a],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var so = t.ub("au3-ecall-opr", vl, co, {}, {}, []),
        bo = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column}.list[_ngcontent-%COMP%], .screen[_ngcontent-%COMP%]{height:100%;position:relative}.list[_ngcontent-%COMP%]{width:100%;flex:1 1 0}.list__item-container[_ngcontent-%COMP%]{display:flex;flex-direction:row}.list__item[_ngcontent-%COMP%]{padding:30px 0;font-size:40px}.call-number[_ngcontent-%COMP%]{max-width:100px}.separator[_ngcontent-%COMP%]{max-width:60px}",
            ],
          ],
          data: {},
        });
      function po(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              18,
              "div",
              [["class", "list__item-container"]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t =
                      !1 !== l.component.dialSosNumber(l.context.mib3Let) && t),
                  t
                );
              },
              null,
              null,
            )),
            t.xb(1, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              2,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              3,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              5,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              7,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(),
            t.yb(
              8,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "list__item call-number"],
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
              Ke.b,
              Ke.a,
            )),
            t.xb(9, 16384, null, 0, Oe.a, [], null, null),
            t.xb(
              10,
              245760,
              null,
              0,
              Ge.a,
              [[8, null], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              { nonI18nValue: [0, "nonI18nValue"] },
              null,
            ),
            (l()(),
            t.yb(
              11,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "list__item separator"],
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
              Ke.b,
              Ke.a,
            )),
            t.xb(12, 16384, null, 0, Oe.a, [], null, null),
            t.xb(
              13,
              245760,
              null,
              0,
              Ge.a,
              [[8, null], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              { nonI18nValue: [0, "nonI18nValue"] },
              null,
            ),
            (l()(),
            t.yb(
              14,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [["class", "list__item"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            t.xb(
              15,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              16,
              16384,
              null,
              0,
              Ze.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(17, { name: 0 }),
            t.xb(
              18,
              245760,
              null,
              0,
              Ge.a,
              [[6, be.a], Ye.a, t.h, t.l, t.D, [2, We.a], [2, Oe.a], [2, Ze.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 3, 0),
              l(e, 5, 0),
              l(e, 10, 0, e.context.mib3Let),
              l(e, 13, 0, " \u2014 "),
              l(
                e,
                15,
                0,
                n.sosCallKoreaChinaService.sosCallNumberToName(
                  e.context.mib3Let,
                ),
                n.sosCallNameEnum,
              ));
            var t = l(
              e,
              17,
              0,
              null == e.parent.context.$implicit
                ? null
                : e.parent.context.$implicit.name,
            );
            (l(e, 16, 0, t),
              l(
                e,
                18,
                0,
                n.sosCallKoreaChinaService.sosCallNumberToName(
                  e.context.mib3Let,
                ),
                n.sosCallKoreaChinaService.sosCallNumberToName(
                  e.context.mib3Let,
                ),
                1,
              ));
          },
          function (l, e) {
            (l(e, 0, 0, t.Nb(e, 5).markerClassEnabled),
              l(
                e,
                8,
                0,
                t.Nb(e, 10).backgroundColor,
                t.Nb(e, 10).fixedNumberOfLines,
                t.Nb(e, 10).mayContainLatinCharsForArabic,
                t.Nb(e, 10).shortenWithEllipsisForArabic,
              ),
              l(
                e,
                11,
                0,
                t.Nb(e, 13).backgroundColor,
                t.Nb(e, 13).fixedNumberOfLines,
                t.Nb(e, 13).mayContainLatinCharsForArabic,
                t.Nb(e, 13).shortenWithEllipsisForArabic,
              ),
              l(
                e,
                14,
                0,
                t.Nb(e, 18).backgroundColor,
                t.Nb(e, 18).fixedNumberOfLines,
                t.Nb(e, 18).mayContainLatinCharsForArabic,
                t.Nb(e, 18).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function ho(l) {
        return t.ac(
          0,
          [
            (l()(), t.hb(16777216, [[1, 2]], null, 1, null, po)),
            t.xb(
              1,
              16384,
              null,
              0,
              mn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            (l()(), t.hb(0, null, null, 0)),
          ],
          function (l, e) {
            l(
              e,
              1,
              0,
              null == e.context.$implicit
                ? null
                : e.context.$implicit.telNumber,
            );
          },
          null,
        );
      }
      function mo(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              50,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:PHONE_CN_KOREA_SOS_LIST"],
              ],
              null,
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ge.a, [le.a], { id: [0, "id"] }, null),
            (l()(),
            t.yb(
              3,
              0,
              null,
              0,
              29,
              "au3-title-line",
              [["id", "'Title'"]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Fe.b,
              Fe.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              Be.a,
              [je.a, He.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (l()(),
            t.yb(
              6,
              0,
              null,
              0,
              12,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", "BackButton"],
                ["left", ""],
                ["ttDoNotToggleChildren", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (l, e, n) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t =
                      !1 !== l.component.routingService.goToPhoneMain() && t),
                  t
                );
              },
              ue.b,
              ue.a,
            )),
            t.xb(7, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Tn.a,
              [le.a, Pn.a, t.l, [2, he.a], [2, re.a]],
              null,
              null,
            ),
            t.xb(12, 16384, null, 0, Oe.a, [], null, null),
            t.xb(13, 16384, null, 0, Un.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              15,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              16,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              18,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(),
            t.yb(
              19,
              0,
              null,
              2,
              13,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "SettingsButton"],
                ["right", ""],
                ["ttDoNotToggleChildren", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              ue.b,
              ue.a,
            )),
            t.xb(
              20,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              null,
              null,
            ),
            t.xb(21, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              22,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              23,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              24,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              null,
            ),
            t.xb(
              25,
              671744,
              null,
              0,
              ve.a,
              [Xl.a, Se.i, re.a, he.a, ve.b, ye.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(26, 16384, null, 0, Oe.a, [], null, null),
            t.xb(27, 16384, null, 0, Un.a, [], null, null),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              29,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              30,
              49152,
              null,
              0,
              Ee.a,
              [[2, re.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              31,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              32,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(),
            t.yb(
              33,
              0,
              null,
              0,
              17,
              "au3-list",
              [["class", "list"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Nt.b,
              Nt.a,
            )),
            t.Sb(6144, null, Tt.a, null, [Pt.a]),
            t.xb(35, 16384, null, 0, _t.a, [t.l], null, null),
            t.xb(
              36,
              12828672,
              null,
              1,
              Pt.a,
              [
                [2, It.a],
                [2, Et.a],
                [8, null],
                [2, be.a],
                [2, At.a],
                [2, Dt.a],
                [2, me.b],
                Se.i,
                t.z,
                t.h,
                le.a,
                Mt.a,
                wt.a,
                [2, Te.a],
                pe.a,
                [2, Se.a],
              ],
              { items: [0, "items"] },
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (l()(),
            t.yb(
              38,
              0,
              null,
              0,
              11,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["id", "DialNumber"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              wi.b,
              wi.a,
            )),
            t.xb(
              39,
              147456,
              null,
              0,
              re.a,
              [ce.a, t.h, le.a, [3, re.a]],
              null,
              null,
            ),
            t.xb(40, 147456, null, 0, se.a, [t.l, t.z], null, null),
            t.xb(
              41,
              212992,
              null,
              0,
              be.a,
              [t.l, t.D, Ql.a, le.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              42,
              147456,
              null,
              0,
              de.a,
              [se.a, [2, pe.a], [2, be.a], le.a],
              null,
              null,
            ),
            t.xb(
              43,
              212992,
              null,
              0,
              he.a,
              [
                le.a,
                me.b,
                de.a,
                [2, pe.a],
                [2, be.a],
                [2, re.a],
                [2, ge.a],
                [2, Jl.a],
                t.z,
                fe.a,
                t.l,
                [2, xe.a],
              ],
              null,
              null,
            ),
            t.xb(
              44,
              671744,
              null,
              0,
              ve.a,
              [Xl.a, Se.i, re.a, he.a, ve.b, ye.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.Sb(131584, null, Ce.a, Ce.a, [[3, Ce.a]]),
            t.xb(
              46,
              4407296,
              null,
              0,
              Ne.a,
              [
                t.l,
                Te.a,
                t.h,
                Ce.a,
                [2, Pe.a],
                [2, pe.b],
                [2, pe.a],
                [2, _e.a],
                [2, Ie.a],
              ],
              null,
              null,
            ),
            t.xb(
              47,
              114688,
              null,
              0,
              Li.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
            t.xb(
              48,
              147456,
              null,
              0,
              Ae.a,
              [
                [2, he.a],
                [2, re.a],
                [2, De.a],
                [2, Ne.a],
                [2, Me.b],
                t.l,
                we.a,
                Le.b,
              ],
              null,
              null,
            ),
            t.xb(
              49,
              147456,
              null,
              0,
              ke.a,
              [[2, Ne.a], [2, he.a], [2, me.b], Re.a],
              null,
              null,
            ),
            (l()(), t.hb(0, [[1, 2]], 0, 0, null, ho)),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "Screen:PHONE_CN_KOREA_SOS_LIST"),
              l(e, 2, 0, "Screen:PHONE_CN_KOREA_SOS_LIST"),
              l(e, 4, 0, "'Title'"),
              l(e, 5, 0, "Telephone", "Emergency Call"),
              l(e, 8, 0, "BackButton"),
              l(e, 10, 0),
              l(e, 15, 0),
              l(e, 16, 0, !1, "E163_Backbutton.webp"),
              l(e, 22, 0, "SettingsButton"),
              l(e, 24, 0),
              l(e, 25, 0, n.PhoneRoute.Main.children.Settings, !0),
              l(e, 29, 0),
              l(e, 30, 0, !1, "E186_settings.webp"),
              l(e, 36, 0, e.context.mib3Let),
              l(e, 41, 0, "DialNumber"),
              l(e, 43, 0),
              l(e, 44, 0, n.PhoneRoute.SosDialingList.children.DialNumber),
              l(e, 46, 0),
              l(e, 47, 0, "Nummer w\xe4hlen"));
          },
          function (l, e) {
            (l(
              e,
              3,
              0,
              t.Nb(e, 5).hideLeftBorder,
              t.Nb(e, 5).hideDividingBorders,
            ),
              l(
                e,
                6,
                0,
                t.Nb(e, 15).markerClassEnabled,
                t.Nb(e, 16).useItemPlaceholder,
              ),
              l(
                e,
                19,
                0,
                t.Nb(e, 20).combinedDisabled,
                t.Nb(e, 20).useBrighterIcon,
                t.Nb(e, 29).markerClassEnabled,
                t.Nb(e, 30).useItemPlaceholder,
              ),
              l(e, 33, 0, t.Nb(e, 36).showLineNumbers),
              l(
                e,
                38,
                0,
                t.Nb(e, 39).combinedDisabled,
                t.Nb(e, 39).useBrighterIcon,
                t.Nb(e, 46).markerClassEnabled,
              ));
          },
        );
      }
      function go(l) {
        return t.ac(
          0,
          [
            (l()(), t.hb(16777216, null, null, 2, null, mo)),
            t.xb(
              1,
              16384,
              null,
              0,
              mn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, ze.b, [t.h]),
          ],
          function (l, e) {
            var n = e.component;
            l(
              e,
              1,
              0,
              t.Yb(
                e,
                1,
                0,
                t
                  .Nb(e, 2)
                  .transform(n.sosCallKoreaChinaService.emergencyNumbers$),
              ),
            );
          },
          null,
        );
      }
      function fo(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-sos-dialing-list",
              [],
              null,
              null,
              null,
              go,
              bo,
            )),
            t.xb(1, 49152, null, 0, Kl, [X.a, i.a], null, null),
          ],
          null,
          null,
        );
      }
      var xo = t.ub("au3-sos-dialing-list", Kl, fo, {}, {}, []),
        vo = n("aDqW"),
        So = n("/W5r"),
        yo = n("+Qv1"),
        Oo = n("XtoR"),
        Co = n("jTHl"),
        No = n("zL3T"),
        To = n("zm/l"),
        Po = n("XOcJ"),
        _o = n("doQC"),
        Io = n("nRk7"),
        Eo = n("K3fK"),
        Ao = n("tf/y");
      class Do extends p.cc {
        constructor(l, e) {
          (super(e.getLogger("phone.PhoneAppleCarplayActiveGuard")),
            (this.asiService = l));
        }
        checkActivation(l, e) {
          return this.asiService.appleCarplayActive$.pipe(
            Object(u.a)((l) => !l),
            Object(L.a)(1),
            Object(y.a)((e) => {
              e || this.logger.warn(`routing to ${l} not allowed. result:`, e);
            }),
          );
        }
      }
      var Mo = n("+epw"),
        wo = n("zMPs"),
        Lo = n("6Yk8"),
        ko = n("u6+O"),
        Ro = n("CIQC"),
        $o = n("REmV"),
        Fo = n("Y3N+"),
        Bo = n("MJxn"),
        jo = n("eIOF"),
        Ho = n("t+4g"),
        zo = n("myjn"),
        Uo = n("fOZ7"),
        Vo = n("QDrj");
      let Ko = (() => {
        class l extends p.Kb {
          constructor(l, e) {
            const n = e.getLogger("FavoritesResolver");
            super(
              l.focusDeviceProfileWithReload$.pipe(
                Object(_.a)((e) =>
                  e
                    ? l.favorites$
                    : (n.info("constructor() profile is not available!"),
                      Object(D.a)([])),
                ),
              ),
              n,
            );
          }
        }
        return (
          (l.ɵprov = t.bc({
            factory: function () {
              return new l(t.cc(R.a), t.cc(le.a));
            },
            token: l,
            providedIn: "root",
          })),
          l
        );
      })();
      var Go = n("Wm/T");
      let Yo = (() => {
          class l extends p.cc {
            constructor(l, e) {
              (super(e.getLogger("phone.PhoneFocusDeviceGuard")),
                (this.phoneService = l));
            }
            checkActivation(l) {
              const e = this.phoneService.phones;
              return e && e.focusDevice
                ? (this.logger.warn(
                    "canActivate: deny activation because a focus device is set",
                  ),
                  !1)
                : (this.logger.info(
                    "canActivate: allow activation because no focus device is set",
                  ),
                  !0);
            }
          }
          return (
            (l.ɵprov = t.bc({
              factory: function () {
                return new l(t.cc(a.c), t.cc(le.a));
              },
              token: l,
              providedIn: "root",
            })),
            l
          );
        })(),
        Wo = (() => {
          class l extends p.cc {
            constructor(l, e) {
              (super(e.getLogger("phone.PhoneNotInitializedGuard")),
                (this.phoneService = l));
            }
            checkActivation(l) {
              return this.phoneService.initialized$.pipe(
                Object(L.a)(1),
                Object(u.a)((e) =>
                  e
                    ? (this.logger.warn(
                        `canActivate: routing to ${l} not allowed. phone already initialized:`,
                        e,
                      ),
                      !1)
                    : (this.logger.info(
                        `canActivate: routing to ${l} allowed. phone not initialized:`,
                        e,
                      ),
                      !0),
                ),
              );
            }
          }
          return (
            (l.ɵprov = t.bc({
              factory: function () {
                return new l(t.cc(a.c), t.cc(le.a));
              },
              token: l,
              providedIn: "root",
            })),
            l
          );
        })(),
        Zo = (() => {
          class l extends p.Kb {
            constructor(l, e) {
              const n = e.getLogger("GroupedRecentCallsResolver");
              super(l.groupedRecentCalls$, n);
            }
          }
          return (
            (l.ɵprov = t.bc({
              factory: function () {
                return new l(t.cc(a.c), t.cc(le.a));
              },
              token: l,
              providedIn: "root",
            })),
            l
          );
        })();
      const qo = () =>
          Promise.all([n.e(8), n.e(57)])
            .then(n.bind(null, "mPYu"))
            .then((l) => l.PhoneSearchModuleNgFactory),
        Jo = () =>
          Promise.all([n.e(8), n.e(57)])
            .then(n.bind(null, "mPYu"))
            .then((l) => l.PhoneSearchModuleNgFactory),
        Xo = () =>
          Promise.all([n.e(11), n.e(32), n.e(31), n.e(61)])
            .then(n.bind(null, "qqN+"))
            .then((l) => l.AddressbookModuleNgFactory),
        Qo = () =>
          Promise.all([n.e(1), n.e(9), n.e(17), n.e(53), n.e(108)])
            .then(n.bind(null, "5VR/"))
            .then((l) => l.PhoneSettingsModuleNgFactory),
        lu = () =>
          Promise.all([n.e(8), n.e(57)])
            .then(n.bind(null, "mPYu"))
            .then((l) => l.PhoneSearchModuleNgFactory),
        eu = () =>
          Promise.all([n.e(1), n.e(28), n.e(104)])
            .then(n.bind(null, "HeFu"))
            .then((l) => l.ConnectionSettingsModuleNgFactory),
        nu = () =>
          Promise.all([n.e(11), n.e(23), n.e(55), n.e(0), n.e(89)])
            .then(n.bind(null, "rR4V"))
            .then((l) => l.SendMessageModuleNgFactory),
        tu = () =>
          Promise.all([n.e(6), n.e(5), n.e(27), n.e(48), n.e(0), n.e(103)])
            .then(n.bind(null, "zuly"))
            .then((l) => l.ConnectedDevicesModuleNgFactory);
      class au {}
      var iu = n("TBks"),
        ou = n("yUFt"),
        uu = n("YCQm"),
        ru = n("6gUO"),
        cu = t.vb(Yl, [], function (l) {
          return t.Kb([
            t.Lb(512, t.j, t.X, [
              [
                8,
                [
                  Wl.a,
                  oe,
                  ln,
                  dn,
                  Nn,
                  zn,
                  St,
                  Bt,
                  Jt,
                  fa,
                  Na,
                  Si,
                  Mi,
                  zi,
                  eo,
                  so,
                  xo,
                ],
              ],
              [3, t.j],
              t.x,
            ]),
            t.Lb(4608, ze.m, ze.l, [t.u]),
            t.Lb(4608, vo.h, vo.g, []),
            t.Lb(4608, vo.d, vo.f, []),
            t.Lb(4608, vo.j, vo.e, []),
            t.Lb(4608, vo.c, vo.b, []),
            t.Lb(4608, vo.k, vo.k, [
              vo.l,
              vo.h,
              vo.d,
              vo.j,
              vo.c,
              vo.m,
              vo.o,
              vo.n,
              vo.a,
            ]),
            t.Lb(4608, So.b, So.b, [yo.e, [2, So.a]]),
            t.Lb(4608, Oo.b, Oo.b, [yo.e, [2, Oo.a]]),
            t.Lb(4608, Co.b, Co.b, [yo.e, [2, Co.a]]),
            t.Lb(4608, No.b, No.b, [yo.e, [2, No.a]]),
            t.Lb(4608, To.a, To.a, [a.c, le.a]),
            t.Lb(4608, Po.a, Po.a, [a.c, le.a]),
            t.Lb(4608, _o.a, _o.a, [a.c, le.a]),
            t.Lb(4608, Io.a, Io.a, [a.c, le.a]),
            t.Lb(4608, Eo.a, Eo.a, [tl.a, le.a]),
            t.Lb(4608, Ao.a, Ao.a, [El.a, le.a]),
            t.Lb(4608, Do, Do, [Ll.a, le.a]),
            t.Lb(1073742336, ze.c, ze.c, []),
            t.Lb(1073742336, vo.i, vo.i, []),
            t.Lb(1073742336, Mo.a, Mo.a, []),
            t.Lb(1073742336, wo.a, wo.a, []),
            t.Lb(1073742336, Lo.a, Lo.a, []),
            t.Lb(1073742336, ko.a, ko.a, []),
            t.Lb(1073742336, Ro.a, Ro.a, []),
            t.Lb(1073742336, $o.a, $o.a, []),
            t.Lb(1073742336, Fo.a, Fo.a, []),
            t.Lb(1073742336, Bo.a, Bo.a, []),
            t.Lb(1073742336, jo.a, jo.a, []),
            t.Lb(1073742336, Ho.a, Ho.a, []),
            t.Lb(1073742336, zo.a, zo.a, []),
            t.Lb(1073742336, Uo.a, Uo.a, []),
            t.Lb(1073742336, Vo.a, Vo.a, []),
            t.Lb(1073742336, ee.n, ee.n, [
              [2, ee.s],
              [2, ee.m],
            ]),
            t.Lb(1073742336, au, au, []),
            t.Lb(1073742336, iu.a, iu.a, []),
            t.Lb(1073742336, ou.a, ou.a, []),
            t.Lb(1073742336, uu.a, uu.a, []),
            t.Lb(1073742336, ru.a, ru.a, []),
            t.Lb(1073742336, Yl, Yl, []),
            t.Lb(256, vo.o, void 0, []),
            t.Lb(256, vo.m, void 0, []),
            t.Lb(256, vo.n, void 0, []),
            t.Lb(256, vo.a, void 0, []),
            t.Lb(
              1024,
              ee.k,
              function () {
                return [
                  [
                    {
                      path: "",
                      component: Gl,
                      children: [
                        {
                          path: "init",
                          component: Sl,
                          canActivate: [Do, Eo.a, Wo],
                        },
                        {
                          path: "init-carplay",
                          component: Vl,
                          canActivate: [Eo.a],
                        },
                        {
                          path: "not-connected",
                          canActivate: [Io.a, Do, Eo.a, Yo],
                          component: kl,
                        },
                        {
                          path: "main",
                          canActivate: [Io.a, Eo.a],
                          children: [
                            {
                              path: "",
                              component: Il,
                              pathMatch: "full",
                              canActivate: [Po.a],
                            },
                            {
                              path: "callstack",
                              canActivate: [Po.a, Do],
                              children: [
                                {
                                  path: "",
                                  component: W,
                                  pathMatch: "full",
                                  resolve: { groupedRecentCalls: Zo },
                                },
                                {
                                  path: "search",
                                  canActivate: [Go.a],
                                  loadChildren: qo,
                                },
                              ],
                            },
                            {
                              path: "callstack-history",
                              component: w,
                              canActivate: [Po.a],
                            },
                            {
                              path: "dial-number",
                              component: nl,
                              canActivate: [Po.a, Go.a],
                            },
                            {
                              path: "favorites",
                              canActivate: [Po.a, Do],
                              resolve: { favorites: Ko },
                              children: [
                                { path: "", component: Bl, pathMatch: "full" },
                                {
                                  path: "search",
                                  canActivate: [Go.a],
                                  loadChildren: Jo,
                                },
                              ],
                            },
                            {
                              path: "addressbook",
                              canActivate: [Po.a, Do],
                              loadChildren: Xo,
                            },
                            { path: "phone-settings", loadChildren: Qo },
                            {
                              path: "search",
                              canActivate: [Po.a, Do, Go.a],
                              loadChildren: lu,
                            },
                          ],
                        },
                        { path: "main-privacy", component: xa },
                        {
                          path: "active-call",
                          component: I,
                          canActivate: [To.a, Do, Eo.a],
                        },
                        {
                          path: "active-call-dtmf",
                          component: h,
                          canActivate: [To.a, Do, Eo.a, Go.a],
                        },
                        {
                          path: "forward-audio",
                          component: Ri,
                          canActivate: [To.a, Do, Eo.a],
                        },
                        {
                          path: "conference-members",
                          component: J,
                          canActivate: [To.a, Do, Eo.a],
                        },
                        {
                          path: "connection",
                          canActivate: [Eo.a],
                          loadChildren: eu,
                        },
                        { path: "send-message", loadChildren: nu },
                        {
                          path: "connected-devices",
                          canActivate: [Ao.a, Do, Eo.a],
                          loadChildren: tu,
                        },
                        {
                          path: "ecall-opr",
                          children: [
                            { path: "sos-accomplished", component: vl },
                            { path: "sos-callback-incoming", component: vl },
                            { path: "sos-connected", component: vl },
                            { path: "sos-connecting", component: vl },
                            {
                              path: "sos-connecting-with-cancel",
                              component: vl,
                            },
                            { path: "sos-failed", component: vl },
                            { path: "sos-canceled", component: vl },
                            { path: "sos-not-possible", component: vl },
                            { path: "sos-sending-data", component: vl },
                            { path: "sos-licence-expired", component: vl },
                            { path: "opr-auto-call-failed", component: vl },
                            {
                              path: "opr-auto-call-failed-network",
                              component: vl,
                            },
                            { path: "opr-auto-canceled", component: vl },
                            { path: "opr-auto-connected", component: vl },
                            { path: "opr-auto-connecting", component: vl },
                            { path: "opr-auto-data-collect", component: vl },
                            { path: "opr-auto-data-send", component: vl },
                            { path: "opr-auto-disconnect", component: vl },
                            { path: "opr-auto-end-active-call", component: vl },
                            { path: "opr-auto-licence-expired", component: vl },
                            { path: "opr-user-call-failed", component: vl },
                            {
                              path: "opr-user-call-failed-network",
                              component: vl,
                            },
                            { path: "opr-user-canceled", component: vl },
                            { path: "opr-user-connected", component: vl },
                            { path: "opr-user-connecting", component: vl },
                            { path: "opr-user-data-collect", component: vl },
                            { path: "opr-user-data-send", component: vl },
                            { path: "opr-user-disconnect", component: vl },
                            { path: "opr-user-end-active-call", component: vl },
                            { path: "opr-user-licence-expired", component: vl },
                          ],
                        },
                        {
                          path: "sos-dialing-list",
                          canActivate: [_o.a],
                          children: [
                            { path: "", component: Kl },
                            {
                              path: "dial-sos-number",
                              component: nl,
                              canActivate: [Go.a, _o.a],
                            },
                          ],
                        },
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
    TOCt: function (l, e, n) {
      "use strict";
      (n.d(e, "b", function () {
        return R;
      }),
        n.d(e, "a", function () {
          return $;
        }));
      var t = n("D57K"),
        a = n("Yi6/"),
        i = n("JCQ5"),
        o = n("J7Kz"),
        u = n("ZTXN"),
        r = n("bwdy"),
        c = n("ROBh"),
        s = n("IdLP"),
        b = n("GoAz"),
        d = n("HM3f"),
        p = n("J+dc"),
        h = n("xVbo"),
        m = n("TLy2"),
        g = n("kuMc"),
        f = n("YtkY"),
        x = n("iT4G"),
        v = n("jIqt"),
        S = n("Lrfq"),
        y = n("i7Dj"),
        O = n("vAPC"),
        C = n("CsoK"),
        N = n("uHmZ"),
        T = n("djHQ"),
        P = n("q5gU"),
        _ = n("P1io"),
        I = n("2DZl"),
        E = n("YEFf"),
        A = n("t8AR"),
        D = n("kNkr"),
        M = n("kZht"),
        w = n("sg2e"),
        L = n("FfND"),
        k = n("yNay"),
        R = (function (l) {
          return (
            (l[(l.InProgress = 0)] = "InProgress"),
            (l[(l.RequiresPairing = 1)] = "RequiresPairing"),
            (l[(l.Succeeded = 2)] = "Succeeded"),
            (l[(l.Failed = 3)] = "Failed"),
            (l[(l.AlreadyBonding = 4)] = "AlreadyBonding"),
            l
          );
        })({});
      let $ = (() => {
        class l {
          constructor(l, e, n, t, a, i, o) {
            ((this.bluetoothService = l),
              (this.popupManagementService = e),
              (this.connectivityService = n),
              (this.phoneService = t),
              (this.asiService = a),
              (this.routingService = i),
              (this.connectingDevices = new Set()),
              (this.destroyed$$ = new u.a()),
              (this.subscriptionConnectService = r.a.EMPTY),
              (this.logger = o.getLogger("main.BluetoothConnectionService")));
          }
          automaticallyActivateBluetooth() {
            this.bluetoothService.bluetoothAvailable$
              .pipe(Object(p.a)(1))
              .subscribe((l) => {
                l ||
                  (this.logger.info(
                    "automaticallyActivateBluetooth: try to activate bluetooth before trying to connect to device...",
                  ),
                  this.bluetoothService.setVisibility(!0, !1));
              });
          }
          automaticallyActivateAudioplayer() {
            this.bluetoothService.bluetoothAvailable$
              .pipe(
                Object(h.a)((l) => !!l),
                Object(p.a)(1),
                Object(m.a)(() => this.bluetoothService.audioPlayerAvailable$),
                Object(p.a)(1),
                Object(g.a)(this.destroyed$$),
              )
              .subscribe((l) => {
                l ||
                  (this.logger.info(
                    "automaticallyActivateAudioplayer: try to activate bluetooth audioplayer before trying to connect to device...",
                  ),
                  this.bluetoothService.setAudioPlayer(!0));
              });
          }
          automaticallyTogglePhones(l, e) {
            this.connectivityService
              .bluetoothDevice$(l.id)
              .pipe(
                Object(h.a)(a.wd),
                Object(p.a)(1),
                Object(g.a)(this.destroyed$$),
              )
              .subscribe((l) => {
                this.phoneService.setSlotForDevice(
                  l.id,
                  e === N.a.PHONE1 ? 1 : 2,
                );
              });
          }
          connectService(l, e, n) {
            if (
              (this.logger.info(
                `connectService: attempting to connect ${e} for device`,
                l,
              ),
              this.connectingDevices.has(l))
            )
              return Object(c.a)({
                state: R.AlreadyBonding,
                device: void 0,
                pairing: void 0,
              });
            this.connectingDevices.add(l);
            const o = this.bluetoothService.devices$.pipe(
                Object(f.a)((e) => e.find((e) => e.id === l)),
                Object(a.Kd)(),
              ),
              r = this.bluetoothService.pairings$.pipe(
                Object(f.a)((e) =>
                  e.find(
                    (e) => !!e.bluetoothDevice && e.bluetoothDevice.id === l,
                  ),
                ),
                Object(a.Kd)(),
              );
            return s.a.create((a) =>
              Object(t.a)(this, void 0, void 0, function* () {
                yield this.bluetoothService.cancelSearch();
                const t = yield o
                  .pipe(Object(p.a)(1), Object(x.a)(1e3))
                  .toPromise();
                if (!t)
                  return a.error(
                    "connectService: Could not resolve device snapshot",
                  );
                if (
                  e === i.b.WIRELESSCARPLAY ||
                  e === i.b.WIRELESSANDROIDAUTO
                ) {
                  const l = yield this.asiService.devices$
                    .pipe(Object(p.a)(1), Object(x.a)(4e3))
                    .toPromise();
                  if (l) {
                    const e = l.find(
                      (l) =>
                        !!l.bluetoothMacAddress &&
                        l.bluetoothMacAddress === t.macAddress,
                    );
                    e &&
                      (yield this.asiService
                        .setDeviceMode(e, D.l.Smartphone)
                        .pipe(Object(p.a)(1), Object(x.a)(1e3))
                        .toPromise());
                  }
                }
                const c = Object(b.a)(
                  this.bluetoothService.connectService(t, e, n),
                ).pipe(
                  Object(f.a)((l) => !!l),
                  Object(v.a)(void 0),
                );
                a.next({ state: R.InProgress, device: t });
                let s = !1;
                const h = new u.a();
                return (
                  Object(d.b)(o, r, c)
                    .pipe(Object(g.a)(h))
                    .subscribe(([n, t, o]) => {
                      (this.logger.info("connectService: state changed", {
                        device: n,
                        pairing: t,
                        connectResult: o,
                      }),
                        n && n.connectionState === i.a.CONNECTING && (s = !0),
                        t && t.pairingState !== i.c.OK
                          ? t.pairingState === i.c.ERROR
                            ? (this.logger.warn(
                                `connectService: pairing failed for ${l}`,
                                t,
                              ),
                              this.connectingDevices.delete(l),
                              a.next({
                                state: R.Failed,
                                device: n,
                                pairing: t,
                              }),
                              a.complete(),
                              h.next())
                            : (this.logger.info(
                                `connectService: pairing required for ${l}`,
                                t,
                              ),
                              a.next({
                                state: R.RequiresPairing,
                                device: n,
                                pairing: t,
                              }))
                          : n &&
                            (n.connectedServices &&
                            n.connectedServices.includes(e)
                              ? (this.logger.info(
                                  `connectService: service ${e} was connected for ${l}`,
                                  n,
                                ),
                                this.connectingDevices.delete(l),
                                a.next({
                                  state: R.Succeeded,
                                  device: n,
                                  pairing: t,
                                }),
                                a.complete(),
                                h.next())
                              : ((s && n.connectionState !== i.a.CONNECTING) ||
                                  !1 === o) &&
                                (this.logger.warn(
                                  `connectService: connect service ${e} failed for device ${l}`,
                                  n,
                                ),
                                this.connectingDevices.delete(l),
                                a.next({
                                  state: R.Failed,
                                  device: n,
                                  pairing: t,
                                }),
                                a.complete(),
                                h.next())));
                    }),
                  () => h.next()
                );
              }),
            );
          }
          disconnectService(l, e) {
            if (
              (this.logger.info(
                `disconnectService: attempting to disconnect ${e} for device`,
                l,
              ),
              this.connectingDevices.has(l))
            )
              return Object(c.a)({ state: R.AlreadyBonding });
            this.connectingDevices.add(l);
            const n = this.bluetoothService.devices$.pipe(
              Object(f.a)((e) => e.find((e) => e.id === l)),
              Object(S.a)(),
              Object(y.a)(),
            );
            return s.a.create((a) =>
              Object(t.a)(this, void 0, void 0, function* () {
                const t = yield n
                  .pipe(Object(p.a)(1), Object(O.a)(1e3, [void 0]))
                  .toPromise();
                if (!t)
                  return a.error(
                    "disconnectService: Could not resolve device snapshot",
                  );
                const o = Object(b.a)(
                  this.bluetoothService.disconnectService(t, e),
                ).pipe(
                  Object(f.a)((l) => !!l),
                  Object(v.a)(void 0),
                );
                a.next({ state: R.InProgress, device: t });
                let r = !1;
                const c = new u.a();
                return (
                  Object(d.b)(n, o)
                    .pipe(Object(g.a)(c))
                    .subscribe(([n, t]) => {
                      (n && n.connectionState === i.a.CONNECTING && (r = !0),
                        n &&
                          (n.connectedServices &&
                          !n.connectedServices.includes(e)
                            ? (this.logger.info(
                                `disconnectService: service ${e} was disconnected for ${l}`,
                                n,
                              ),
                              this.connectingDevices.delete(l),
                              a.next({ state: R.Succeeded, device: n }),
                              a.complete(),
                              c.next())
                            : ((r && n.connectionState !== i.a.CONNECTING) ||
                                !1 === t) &&
                              (this.logger.warn(
                                `disconnectService: disconnect service ${e} failed for device ${l}`,
                                n,
                              ),
                              this.connectingDevices.delete(l),
                              a.next({ state: R.Failed, device: n }),
                              a.complete(),
                              c.next())));
                    }),
                  () => c.next()
                );
              }),
            );
          }
          connectDeviceToService(l, e, n, t) {
            (this.automaticallyActivateBluetooth(),
              e === N.a.AUDIOPLAYER && this.automaticallyActivateAudioplayer(),
              this.subscriptionConnectService.closed
                ? (this.popupManagementService.request(
                    a.Ob.POPUP_CM_POPUP_BLUETOOTH_CONNECTING,
                  ),
                  (this.subscriptionConnectService = Object(d.b)(
                    this.bluetoothService.bluetoothAvailable$,
                    this.bluetoothService.audioPlayerAvailable$,
                  )
                    .pipe(
                      Object(f.a)(([l, n]) =>
                        e === N.a.AUDIOPLAYER ? l && n : l,
                      ),
                      Object(h.a)((l) => !!l),
                      Object(C.a)(t),
                      Object(p.a)(1),
                      Object(m.a)((e) =>
                        this.connectService(l.id, n, e ? e.uri : void 0),
                      ),
                      Object(g.a)(this.destroyed$$),
                    )
                    .subscribe((n) => {
                      if (
                        (this.logger.debug("received connection process: ", n),
                        n.state === R.RequiresPairing && n.pairing)
                      )
                        switch (n.pairing.passKeyMode) {
                          case i.e.SECURESIMPLEPAIRINGSHOWANDCONFIRM:
                            this.logger.debug(
                              "Navigate to BTDevicePairing",
                              n.pairing.id,
                            );
                            const l = {};
                            ((l.id = n.pairing.id),
                              (l.context = e),
                              this.routingService.goTo(
                                P.a.children.SSPCompareCancelOnly,
                                l,
                              ));
                            break;
                          default:
                            this.logger.warn(
                              "Encountered unknown RsiPassKeyState for pairing:",
                              n.pairing,
                            );
                        }
                      else
                        n.state === R.Succeeded &&
                          (T.b.isPhoneContext(e) &&
                            this.automaticallyTogglePhones(l, e),
                          this.routingService.activeAppContextSnapshot ===
                            _.s &&
                            (this.logger.info(
                              "Route back to source selection after successful device bonding.",
                            ),
                            this.routingService.goBack()));
                    })))
                : this.logger.warn(
                    "connectDeviceToService: previous request still running, ignoring new request for: ",
                    l,
                  ));
          }
          disconnectDeviceFromService(l, e, n) {
            e.pipe(
              Object(p.a)(1),
              Object(h.a)((e) => !!e && e.id === l.id),
              Object(m.a)(() => this.disconnectService(l.id, n)),
              Object(g.a)(this.destroyed$$),
            ).subscribe((e) => {
              e.state === R.Succeeded
                ? (this.popupManagementService.request(
                    a.Ob.POPUP_CM_POPUP_BT_DEVICES_DISCONNECT_OK,
                  ),
                  this.logger.info(
                    "disconnectDeviceFromService: Successfully disconnected service " +
                      n +
                      " from device " +
                      l.name,
                  ))
                : e.state === R.Failed &&
                  this.logger.warn(
                    `disconnectDeviceFromService: failed to disconnect service ${n} from device ${l.name}`,
                    e,
                  );
            });
          }
        }
        return (
          (l.ɵprov = M.bc({
            factory: function () {
              return new l(
                M.cc(o.a),
                M.cc(w.a),
                M.cc(I.a),
                M.cc(E.c),
                M.cc(A.a),
                M.cc(L.a),
                M.cc(k.a),
              );
            },
            token: l,
            providedIn: "root",
          })),
          l
        );
      })();
    },
    VUTu: function (l, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return v;
      }),
        n.d(e, "b", function () {
          return D;
        }));
      var t = n("kZht"),
        a = n("HVUF"),
        i = n("B3Zb"),
        o = n("yNay"),
        u = n("8TlW"),
        r = n("fu7d"),
        c = n("bou3"),
        s = n("ijxY"),
        b = n("Xo58"),
        d = n("m3Ja"),
        p = n("r+e+"),
        h = n("bmFL"),
        m = n("T8E5"),
        g = n("An66"),
        f = n("gKAS"),
        x = n("Brsi"),
        v =
          (n("nK9R"),
          n("qzuC"),
          n("8yWk"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);position:relative;display:flex;flex-direction:row;flex:0 0 auto;color:#fff;height:119px;border-style:solid;border-width:0 0 2px;border-image:linear-gradient(90deg,hsla(0,0%,87.1%,.7) 0,hsla(0,0%,87.1%,.9) 36%,hsla(0,0%,87.1%,.4)) 1 1;z-index:10;transform:translateZ(0)}[_nghost-%COMP%]   .fpk-stage-big[_nghost-%COMP%], .fpk-stage-big   [_nghost-%COMP%], [_nghost-%COMP%]   .fpk-stage-small[_nghost-%COMP%], .fpk-stage-small   [_nghost-%COMP%]{border:none}[_nghost-%COMP%]     au3-button .button__text{font-size:30px}[_nghost-%COMP%]:after{content:"";position:absolute;bottom:-7px;left:0;width:100%;height:5px;background:linear-gradient(180deg,#000,transparent)}.tl--text-only[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{border-left:0}.tl--no-dividing-border[_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%], .tl--no-dividing-border[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{border-image:none;border-style:none}.title-line__content--left[_ngcontent-%COMP%]{display:inline-flex;flex-direction:row;align-self:center;margin-right:auto}.title-line__breadcrumbs[_ngcontent-%COMP%]{position:absolute;align-self:center;margin-right:2px}.title-line__content-wrapper--center[_ngcontent-%COMP%]{position:relative;flex:1 0 0;align-self:center;font-size:40px;height:119px;border-style:solid;border-image:linear-gradient(0deg,hsla(0,0%,100%,.7),transparent 80%) 1 2%;display:flex;flex-direction:row}.title-line__content-wrapper--center[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-1px;width:2px;height:2px;background:#000}.title-line__content--center[_ngcontent-%COMP%]{position:relative;flex:1 0 0}.title-line__loader[_ngcontent-%COMP%]{padding-top:12px;display:block;opacity:0;overflow:hidden}.title-line__loader--visible[_ngcontent-%COMP%]{opacity:1}.title-line__loader--display-none[_ngcontent-%COMP%]{display:none}.steering-wheel-left[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{margin-right:2px;border-width:0 0 0 1px}.steering-wheel-left[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after, .steering-wheel-left   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after{left:auto;right:-2px}.steering-wheel-left[_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%]{padding:0 0 0 30px}.steering-wheel-right[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{margin-left:2px;border-width:0 1px 0 0}.steering-wheel-right[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after, .steering-wheel-right   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after{left:-2px;right:auto}.steering-wheel-right[_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%]{padding:0 30px 0 0}.title-line__content--right[_ngcontent-%COMP%]{display:inline-flex;flex-direction:row;align-self:center;text-align:end}.content__title[_ngcontent-%COMP%]{position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:100%;height:100%;padding:12px 20px 0}.content__title--loader[_ngcontent-%COMP%]{padding-left:20px}.content__title--primary[_ngcontent-%COMP%]{color:var(--current-context);font-size:30px;width:100%}.content__title--primary[_ngcontent-%COMP%], .content__title--secondary[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.component-layout-arabic[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{direction:rtl}.component-layout-latin[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{direction:ltr}.secondary-title__wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;flex:1 1 0;overflow:hidden;max-width:100%;width:100%}.content__title--icon[_ngcontent-%COMP%]{margin:0 30px 0 10px}.content__title--separator[_ngcontent-%COMP%]{padding:0 22px;color:var(--current-context)}@media (max-width:1280px){.content__title[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.content__title--loader[_ngcontent-%COMP%]{padding-left:20px}.content__title--primary[_ngcontent-%COMP%]{font-size:30px;width:100%}.content__title--separator[_ngcontent-%COMP%]{display:none}}.title-line__content--text-input[_ngcontent-%COMP%]{position:relative;flex:1;display:flex;align-items:flex-end;min-width:0;direction:ltr;font-size:40px;height:calc(100% + 2px);padding:0 30px;border-style:solid;border-image:linear-gradient(0deg,hsla(0,0%,100%,.7),transparent 80%) 1 2%}.title-line__content--text-input[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;bottom:0;height:2px;width:100%;background-color:#000}.title-line__content--hidden[_ngcontent-%COMP%]{display:none}.steering-wheel-left[_nghost-%COMP%], .steering-wheel-left   [_nghost-%COMP%]{direction:ltr}.steering-wheel-left[_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%]{border-width:0 0 0 1px}.steering-wheel-right[_nghost-%COMP%], .steering-wheel-right   [_nghost-%COMP%]{direction:rtl}.steering-wheel-right[_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%]{border-width:0 1px 0 0}',
              ],
            ],
            data: {},
          }));
      function S(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [
                ["class", "title-line__breadcrumbs"],
                ["fileName", "E163_breadcrump_back.webp"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              a.b,
              a.a,
            )),
            t.xb(
              1,
              4243456,
              null,
              0,
              i.b,
              [o.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (l, e) {
            l(
              e,
              1,
              0,
              "E163_breadcrump_back.webp",
              e.component.iconCategoryBreadcrumb,
            );
          },
          function (l, e) {
            l(e, 0, 0, t.Nb(e, 1).iconComponentHidden);
          },
        );
      }
      function y(l) {
        return t.ac(
          0,
          [
            (l()(),
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
      function O(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "div",
              [["class", "title-line__content--text-input"]],
              [[2, "title-line__content--text-input-no-right-padding", null]],
              null,
              null,
              null,
              null,
            )),
            t.Mb(null, 1),
          ],
          null,
          function (l, e) {
            l(e, 0, 0, e.component.hideRightPadding);
          },
        );
      }
      function C(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "content__title--primary"],
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
              u.b,
              u.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              r.a,
              [t.l, t.D, c.a, o.a, [3, r.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              s.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            t.xb(
              3,
              245760,
              null,
              0,
              b.a,
              [[6, r.a], d.a, t.h, t.l, t.D, [2, p.a], [2, s.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, n.primaryId, n.primaryIdEnumType),
              l(
                e,
                2,
                0,
                !n.hasPrimaryText ||
                  !(n.primaryIdEnumType || n.primaryDeveloperText),
              ),
              l(
                e,
                3,
                0,
                n.primaryDeveloperText,
                n.primaryId,
                n.primaryNonI18nText,
              ));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 3).backgroundColor,
              t.Nb(e, 3).fixedNumberOfLines,
              t.Nb(e, 3).mayContainLatinCharsForArabic,
              t.Nb(e, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function N(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "content__title--icon"],
                ["ttDoNotToggle", ""],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              a.b,
              a.a,
            )),
            t.xb(
              1,
              16384,
              null,
              0,
              m.a,
              [],
              { ttDoNotToggleDynamicValue: [0, "ttDoNotToggleDynamicValue"] },
              null,
            ),
            t.xb(
              2,
              4243456,
              null,
              0,
              i.b,
              [o.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, !n.possibleIcon),
              l(e, 2, 0, n.icon, n.iconCategoryBreadcrumb));
          },
          function (l, e) {
            l(e, 0, 0, t.Nb(e, 2).iconComponentHidden);
          },
        );
      }
      function T(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              7,
              "div",
              [
                ["class", "secondary-title__wrapper"],
                ["id", "SecondaryText"],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              r.a,
              [t.l, t.D, c.a, o.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (l()(),
            t.yb(
              2,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "content__title--secondary"],
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
              u.b,
              u.a,
            )),
            t.xb(
              3,
              212992,
              null,
              0,
              r.a,
              [t.l, t.D, c.a, o.a, [3, r.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              4,
              16384,
              null,
              0,
              s.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            t.xb(
              5,
              245760,
              null,
              0,
              b.a,
              [[6, r.a], d.a, t.h, t.l, t.D, [2, p.a], [2, s.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
            (l()(), t.hb(16777216, null, null, 1, null, N)),
            t.xb(
              7,
              16384,
              null,
              0,
              g.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, "SecondaryText"),
              l(e, 3, 0, n.secondaryId, n.secondaryIdEnumType),
              l(
                e,
                4,
                0,
                !n.hasSecondaryText ||
                  !(n.secondaryIdEnumType || n.secondaryDeveloperText),
              ),
              l(
                e,
                5,
                0,
                n.secondaryDeveloperText,
                n.secondaryId,
                n.secondaryNonI18nText,
              ),
              l(e, 7, 0, !!n.icon));
          },
          function (l, e) {
            l(
              e,
              2,
              0,
              t.Nb(e, 5).backgroundColor,
              t.Nb(e, 5).fixedNumberOfLines,
              t.Nb(e, 5).mayContainLatinCharsForArabic,
              t.Nb(e, 5).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function P(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-title-line-loader-item",
              [["class", "title-line__loader"]],
              [
                [2, "title-line__loader--display-none", null],
                [2, "title-line__loader--visible", null],
              ],
              null,
              null,
              f.b,
              f.a,
            )),
            t.xb(
              1,
              49152,
              null,
              0,
              x.a,
              [],
              { animated: [0, "animated"] },
              null,
            ),
          ],
          function (l, e) {
            l(e, 1, 0, e.component.loaderActive);
          },
          function (l, e) {
            var n = e.component;
            l(e, 0, 0, !n.textToolHasLoader, n.loaderActive);
          },
        );
      }
      function _(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              8,
              "div",
              [["class", "title-line__content-wrapper--center"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            t.yb(
              1,
              0,
              null,
              null,
              5,
              "div",
              [["class", "title-line__content--center"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            t.yb(
              2,
              0,
              null,
              null,
              4,
              "div",
              [["class", "content__title"]],
              [[2, "content__title--loader", null]],
              null,
              null,
              null,
              null,
            )),
            (l()(), t.hb(16777216, null, null, 1, null, C)),
            t.xb(
              4,
              16384,
              null,
              0,
              g.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), t.hb(16777216, null, null, 1, null, T)),
            t.xb(
              6,
              16384,
              null,
              0,
              g.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), t.hb(16777216, null, null, 1, null, P)),
            t.xb(
              8,
              16384,
              null,
              0,
              g.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 4, 0, n.hasPrimaryText),
              l(e, 6, 0, n.hasSecondaryText),
              l(e, 8, 0, n.hasLoader));
          },
          function (l, e) {
            l(e, 2, 0, e.component.hasLoader);
          },
        );
      }
      function I(l) {
        return t.ac(
          0,
          [
            (l()(),
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
      function E(l) {
        return t.ac(
          0,
          [t.Mb(null, 3), (l()(), t.hb(0, null, null, 0))],
          null,
          null,
        );
      }
      function A(l) {
        return t.ac(
          0,
          [t.Mb(null, 4), (l()(), t.hb(0, null, null, 0))],
          null,
          null,
        );
      }
      function D(l) {
        return t.ac(
          2,
          [
            (l()(), t.hb(16777216, null, null, 1, null, S)),
            t.xb(
              1,
              16384,
              null,
              0,
              g.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(),
            t.yb(
              2,
              0,
              null,
              null,
              4,
              "div",
              [["class", "title-line__content--left"]],
              null,
              null,
              null,
              null,
              null,
            )),
            t.Mb(null, 0),
            (l()(), t.hb(16777216, null, null, 2, null, y)),
            t.xb(
              5,
              540672,
              null,
              0,
              g.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            t.Pb(131072, g.b, [t.h]),
            (l()(), t.hb(16777216, null, null, 1, null, O)),
            t.xb(
              8,
              16384,
              null,
              0,
              g.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (l()(), t.hb(0, [["center", 2]], null, 0, null, _)),
            (l()(),
            t.yb(
              10,
              0,
              null,
              null,
              4,
              "div",
              [["class", "title-line__content--right"]],
              null,
              null,
              null,
              null,
              null,
            )),
            t.Mb(null, 2),
            (l()(), t.hb(16777216, null, null, 2, null, I)),
            t.xb(
              13,
              540672,
              null,
              0,
              g.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            t.Pb(131072, g.b, [t.h]),
            (l()(), t.hb(0, [["done", 2]], null, 0, null, E)),
            (l()(), t.hb(0, [["edit", 2]], null, 0, null, A)),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 1, 0, n.showBreadcrumbsIcon),
              l(
                e,
                5,
                0,
                t.Yb(e, 5, 0, t.Nb(e, 6).transform(n.editButtonLeft$))
                  ? t.Nb(e, 16)
                  : t.Nb(e, 15),
              ),
              l(e, 8, 0, n.hasTextInput, t.Nb(e, 9)),
              l(
                e,
                13,
                0,
                t.Yb(e, 13, 0, t.Nb(e, 14).transform(n.editButtonLeft$))
                  ? t.Nb(e, 15)
                  : t.Nb(e, 16),
              ));
          },
          null,
        );
      }
    },
    VWff: function (l, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return d;
      });
      var t = n("Yi6/"),
        a = n("kuMc"),
        i = n("xVbo"),
        o = n("YtkY"),
        u = n("jIqt"),
        r = n("0Woy"),
        c = n("qMQG"),
        s = n("hHAo"),
        b = n("QQZH");
      class d {
        constructor(l, e, n, a) {
          ((this.mainPerceivableContextService = l),
            (this.list = e),
            (this.popupComponent = a),
            (this.updateDisplayElements = !1),
            (this.lineNumbers = !1),
            (this.staticItems = []),
            (this.items = []),
            (this.destroy$$ = new b.a(1)),
            (this.logger = n.getLogger("speech.DisplayElementsDirective")),
            (this.context = Object(t.wd)(a) ? s.a.Popup : s.a.Screen));
        }
        set staticDisplayElements(l) {
          ((this.staticItems = l || []),
            this.updateVisibleItems(l, this.items));
        }
        ngAfterViewInit() {
          (this.updateDisplayElements || this.lineNumbers) &&
            (this.list.scrolling$
              .pipe(Object(a.a)(this.destroy$$))
              .subscribe((l) => {
                (this.mainPerceivableContextService.updateMainDisplay({
                  scrollingActive: l,
                }),
                  l &&
                    this.mainPerceivableContextService.updateDisplayElements(
                      [],
                      this.context,
                    ));
              }),
            this.list.itemsWithLineNumbers$
              .pipe(
                Object(i.a)((l) => l.length > 0),
                Object(o.a)((l) =>
                  l.map((l) => this.prepareListItemReferenceData(l)),
                ),
                Object(u.a)([]),
                Object(r.a)(),
                Object(i.a)(
                  ([l, e]) =>
                    l.length !== e.length ||
                    l.some(
                      (l, n) =>
                        l.item.referenceId !== e[n].item.referenceId ||
                        l.item.id !== e[n].item.id,
                    ),
                ),
                Object(o.a)(([l, e]) => e),
                Object(a.a)(this.destroy$$),
              )
              .subscribe((l) => {
                ((this.items = l),
                  this.updateVisibleItems(this.staticItems, l));
              }));
        }
        ngOnDestroy() {
          (this.destroy$$.next(),
            this.mainPerceivableContextService.clearContext(this.context));
        }
        prepareListItemReferenceData(l) {
          if (!l.item)
            return (
              this.logger.error(
                "prepareListItemReferenceData: Invalid visibleItem! visibleItem.item is null: ",
                l,
              ),
              l
            );
          const e = Object.assign({}, l);
          return (
            e.item.id &&
              !e.item.referenceId &&
              (e.item.referenceId = e.item.id),
            e.item.referenceType ||
              (this.defaultDisplayElementReferenceType
                ? (e.item.referenceType =
                    this.defaultDisplayElementReferenceType)
                : this.logger.error(
                    "prepareListItemReferenceData: list item without referenceType. Also no default referenceType was provided. ",
                    e,
                  )),
            e.item.referenceId ||
              e.item.referenceType === c.d.DIALOGSTEPELEMENT ||
              this.logger.warn(
                "prepareListItemReferenceData: displayelementObjects usually need to be provided with either their id or referenceId (same as id)! No id found on item ",
                e,
              ),
            e
          );
        }
        updateVisibleItems(l, e) {
          (this.logger.info("updateVisibleItems: staticItems: ", l),
            this.logger.info("updateVisibleItems: items: ", e));
          const n = [...l.map((l) => ({ item: l, index: -1 })), ...e];
          this.mainPerceivableContextService.updateVisibleItems(
            n,
            this.context,
          );
        }
      }
    },
    Z2XD: function (l, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        }));
      var t = n("kZht"),
        a =
          (n("y9xZ"),
          n("yNay"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;padding:16px 48px 25px}.steering-wheel-left[_nghost-%COMP%], .steering-wheel-left   [_nghost-%COMP%]{padding-right:56px}.steering-wheel-right[_nghost-%COMP%], .steering-wheel-right   [_nghost-%COMP%]{padding-left:56px}",
              ],
            ],
            data: {},
          }));
      function i(l) {
        return t.ac(0, [t.Mb(null, 0)], null, null);
      }
    },
    ZXHi: function (l, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return o;
      }),
        n.d(e, "b", function () {
          return u;
        }));
      var t = n("kZht"),
        a = n("EyLa"),
        i = n("4nnk"),
        o =
          (n("IRNg"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%}.init-view__message[_ngcontent-%COMP%]{height:230px;max-width:100%;font-size:40px;line-height:66px;color:#fff;text-align:center}.init-view__progress[_ngcontent-%COMP%]{width:500px;max-width:60%;height:20px;margin:0 auto}",
              ],
            ],
            data: {},
          }));
      function u(l) {
        return t.ac(
          2,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "div",
              [["class", "init-view__message"]],
              null,
              null,
              null,
              null,
              null,
            )),
            t.Mb(null, 0),
            (l()(),
            t.yb(
              2,
              0,
              null,
              null,
              2,
              "div",
              [["class", "init-view__progress"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            t.yb(
              3,
              0,
              null,
              null,
              1,
              "au3-progressbar",
              [],
              [
                [2, "sxm--rotate", null],
                [2, "progressbar--infinite", null],
              ],
              null,
              null,
              a.b,
              a.a,
            )),
            t.xb(
              4,
              49152,
              null,
              0,
              i.a,
              [t.l, t.h],
              { current: [0, "current"] },
              null,
            ),
          ],
          function (l, e) {
            l(e, 4, 0, e.component.current);
          },
          function (l, e) {
            l(e, 3, 0, t.Nb(e, 4).shouldRotateForSxm, t.Nb(e, 4).infinite);
          },
        );
      }
    },
    djHQ: function (l, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return o;
        }));
      var t = n("uHmZ"),
        a = n("o1hM"),
        i = (function (l) {
          return (
            (l.NOTCONNECTED = "nicht verbunden"),
            (l.DEACTIVATED = "Deaktiviert"),
            (l.DEVICENAME = "%1"),
            (l.PHONE1 = "Telefon 1"),
            (l.PHONE2 = "Telefon 2"),
            (l.PHONE = "Telefon"),
            (l.VEHICLECONTROL = "Bluetooth-Fahrzeugfernbedienung"),
            (l.AUDIOPLAYER = "Audio Player"),
            (l.HEADSET = "Headset"),
            (l.SMARTPHONEINTERFACE = "Audi Smartphone Interface"),
            (l.ANDROIDAUTO = "Android Auto"),
            (l.CARPLAY = "Apple CarPlay"),
            (l.WIFIHOTSPOT = "Audi WLAN Hotspot"),
            (l.PHONE_CONTEXT = "Phone"),
            (l.SETTINGS_CONTEXT = "Settings"),
            l
          );
        })({});
      let o = (() => {
        class l {
          static getIconForContext(l, e = !1, n, a) {
            switch (l) {
              case t.a.PHONE:
              case t.a.PHONE1:
              case t.a.PHONE2:
                return e
                  ? n
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
                return a ? this.getAsiIcon(a) : this.universalAsiDeviceIcon;
              case t.a.MMICONNECTAPP:
                return "E183_connect.webp";
              default:
                return "";
            }
          }
          static getAsiIcon(l) {
            if (
              !(
                l.device &&
                l.device.asiDevice &&
                l.device.asiDevice.activeTechnology
              )
            )
              return l.asiTechnology
                ? this.getIconForAsiTechnology(l.asiTechnology)
                : this.universalAsiDeviceIcon;
            switch (l.device.asiDevice.activeTechnology) {
              case a.a.AndroidAuto:
                return this.googleAndroidAutoIcon;
              case a.a.CarPlay:
                return this.appleCarPlayIcon;
              default:
                return this.universalAsiDeviceIcon;
            }
          }
          static getIconForAsiTechnology(l) {
            switch (l) {
              case a.l.AndroidAuto:
                return this.googleAndroidAutoIcon;
              case a.l.CarPlay:
                return this.appleCarPlayIcon;
              default:
                return this.universalAsiDeviceIcon;
            }
          }
          static getTitleForContext(l, e, n) {
            switch (l) {
              case t.a.PHONE:
              case t.a.PHONE1:
                return e ? i.PHONE1 : i.PHONE;
              case t.a.PHONE2:
                return i.PHONE2;
              case t.a.AUDIOPLAYER:
                return i.AUDIOPLAYER;
              case t.a.HEADSET:
                return i.HEADSET;
              case t.a.VEHICLECONTROL:
                return i.VEHICLECONTROL;
              case t.a.WIFIHOTSPOT:
                return i.WIFIHOTSPOT;
              case t.a.SMARTPHONEINTEGRATION:
                return n ? this.getTitle(n) : i.SMARTPHONEINTERFACE;
              default:
                return "";
            }
          }
          static getTitle(l) {
            if (l && l.asiTechnology)
              switch (l.asiTechnology) {
                case a.l.AndroidAuto:
                  return i.ANDROIDAUTO;
                case a.l.CarPlay:
                  return i.CARPLAY;
                default:
                  return i.SMARTPHONEINTERFACE;
              }
            else {
              if (
                !(
                  l &&
                  l.device &&
                  l.device.asiDevice &&
                  l.device.asiDevice.activeTechnology
                )
              )
                return i.SMARTPHONEINTERFACE;
              switch (l.device.asiDevice.activeTechnology) {
                case a.a.AndroidAuto:
                  return i.ANDROIDAUTO;
                case a.a.CarPlay:
                  return i.CARPLAY;
                default:
                  return i.SMARTPHONEINTERFACE;
              }
            }
          }
          static getTitleOnTwoLines(l) {
            const e = l.device ? l.device.deviceName : "",
              n = this.getTitle({
                device: { asiDevice: l.device },
                asiTechnology: l.technology,
                context: t.a.SMARTPHONEINTEGRATION,
                forDetails: !0,
              });
            return "" === e ? n : n + "\n" + e;
          }
          static getAsiDeviceName(l) {
            return l && l.asiDevice && l.asiDevice.deviceName
              ? l.asiDevice.deviceName
              : "";
          }
          static mapActiveToSupportedTechnology(l) {
            switch (l) {
              case a.a.AndroidAuto:
                return a.l.AndroidAuto;
              case a.a.CarPlay:
                return a.l.CarPlay;
              default:
                return;
            }
          }
          static isPhoneContext(l) {
            return l === t.a.PHONE || l === t.a.PHONE1 || l === t.a.PHONE2;
          }
        }
        return (
          (l.universalAsiDeviceIcon = "E0AA_smartphone_integration.webp"),
          (l.googleAndroidAutoIcon = "E0A9_google_android_auto.webp"),
          (l.appleCarPlayIcon = "E0A7_apple_car_play.webp"),
          l
        );
      })();
    },
    "e+pb": function (l, e, n) {
      "use strict";
      (n.d(e, "b", function () {
        return P;
      }),
        n.d(e, "a", function () {
          return _;
        }));
      var t = n("QQZH"),
        a = n("C05f"),
        i = n("HM3f"),
        o = n("ROBh"),
        u = n("6Oco"),
        r = n("IdLP"),
        c = n("YtkY"),
        s = n("xVbo"),
        b = n("Ohay"),
        d = n("kuMc"),
        p = n("fnmL"),
        h = n("TLy2"),
        m = n("BwBJ"),
        g = n("8j5Y"),
        f = n("J+dc"),
        x = n("AEBN"),
        v = n("Yi6/"),
        S = n("Zbi+"),
        y = n("zcBZ"),
        O = n("q+H2"),
        C = (n("VDgF"), n("YEFf"), n("j7uj")),
        N = n("pWIT"),
        T = (n("6xFL"), n("P1io")),
        P = (function (l) {
          return (
            (l.Global = "global"),
            (l.Addressbook = "addressbook"),
            (l.MessagingAddressbook = "messaging-addressbook"),
            (l.CallHistory = "call-history"),
            (l.Favorites = "favorites"),
            l
          );
        })({});
      class _ {
        constructor(l, e, n, o, u, r, m) {
          ((this.routingService = l),
            (this.textInputService = e),
            (this.phoneService = n),
            (this.searchService = o),
            (this.proposalValidationService = u),
            (this.addressbookService = r),
            (this.initialSuggestions$$ = new t.a(1)),
            (this.searchResults$$ = new t.a(1)),
            (this.searchStatus$$ = new a.a(C.a.WaitingForInput)),
            (this.searchId$$ = new a.a("")),
            (this.searchType$$ = new t.a(1)),
            (this.searchDeviceId$$ = new t.a(1)),
            (this.needles$$ = new a.a([])),
            (this.destroyed$$ = new t.a(1)),
            (this.logger = m.getLogger("phone.PhoneSearchProviderService")),
            (this.deviceToSearch$ = Object(i.b)(
              this.phoneService.phones$,
              this.searchDeviceId$$,
            ).pipe(
              Object(c.a)(([l, e]) =>
                e
                  ? l.find((l) => !!l.device && l.device.id === e)
                  : l.focusDevice,
              ),
              Object(s.a)(v.wd),
              Object(b.a)((l, e) => l.id === e.id),
              Object(v.pd)(this.logger, "constructor: deviceToSearch$:"),
              Object(v.Kd)(),
            )));
          const g = this.searchType$$.pipe(
              Object(b.a)(),
              Object(c.a)((l) => {
                switch (l) {
                  case P.CallHistory:
                    return [y.d.CALLSTACK];
                  case P.MessagingAddressbook:
                  case P.Addressbook:
                    return [y.d.CONTACTS];
                  case P.Favorites:
                    return [y.d.FAVORITES];
                  default:
                    return [y.d.CALLSTACK, y.d.FAVORITES, y.d.CONTACTS];
                }
              }),
            ),
            f = this.needles$$.pipe(Object(b.a)(v.Xd));
          ((this.isEmptySearch$ = f.pipe(
            Object(c.a)((l) => Object(O.a)(l)),
            Object(d.a)(this.destroyed$$),
          )),
            this.deviceToSearch$
              .pipe(
                Object(p.a)(g, f),
                Object(h.a)(([l, e, n]) => this.createSearchForDevice(l, e, n)),
                Object(d.a)(this.destroyed$$),
              )
              .subscribe((l) => {
                this.searchId$$.next(l || "");
              }),
            (this.searchId$ = this.searchId$$.pipe(Object(b.a)())),
            (this.searchResults$ = this.searchResults$$.pipe(
              Object(c.a)((l) => l.map((l) => new N.a(l))),
            )),
            (this.searchStatus$ = this.searchStatus$$),
            (this.initialSuggestions$ = this.initialSuggestions$$.pipe(
              Object(c.a)((l) => l.map((l) => ({ text: l }))),
            )),
            this.subscribeToSearchService());
        }
        convert(l) {
          if (l) return y.b[S.l[l]];
        }
        subscribeToSearchService() {
          const l = this.searchId$.pipe(
              Object(h.a)((l) =>
                l
                  ? this.searchService
                      .searchResults$(l, Object(o.a)({ offset: 0, limit: 100 }))
                      .pipe(Object(c.a)((l) => l.data || []))
                  : Object(o.a)([]),
              ),
              Object(v.Kd)(),
            ),
            e = Object(i.b)(
              this.addressbookService.hideInvalidContacts$,
              this.addressbookService
                .contacts$(Object(o.a)({ offset: 0, limit: 100 }))
                .pipe(Object(c.a)((l) => l.data || [])),
            ).pipe(
              Object(c.a)(([l, e]) =>
                (l ? e.filter((l) => this.isContactValidForContext(l)) : e).map(
                  (l) => ({
                    id: "",
                    uri: "",
                    name: l.name,
                    combinedName: { text: l.name },
                    searchAdbEntry: { contact: l, isFavorite: !1 },
                  }),
                ),
              ),
            ),
            n = this.phoneService.groupedRecentCalls$.pipe(
              Object(c.a)((l) =>
                l.map((l) => {
                  const e = l.entries && l.entries[0];
                  return {
                    id: "",
                    uri: "",
                    name: l.name,
                    combinedName: { text: l.name },
                    numbers: [
                      {
                        number: { text: l.phoneNumber },
                        numberType: l.phoneNumberType,
                      },
                    ],
                    searchCallstackEntry: {
                      timestamp: e && e.timestamp,
                      type: this.convert(e && e.type),
                      contact: l.contact,
                    },
                  };
                }),
              ),
            ),
            t = this.addressbookService.favorites$.pipe(
              Object(h.a)((l) => {
                const e = l.map((l) => this.mapFavoriteToSearchResult(l));
                return e.length < 1 ? Object(o.a)([]) : Object(i.b)(...e);
              }),
            ),
            a = this.searchType$$.pipe(
              Object(h.a)((l) => {
                switch (l) {
                  case P.Addressbook:
                    return e;
                  case P.CallHistory:
                    return n;
                  case P.Favorites:
                    return t;
                  default:
                    return Object(o.a)([]);
                }
              }),
            );
          (l
            .pipe(
              Object(p.a)(a, this.searchStatus$),
              Object(d.a)(this.destroyed$$),
            )
            .subscribe(([l, e, n]) => {
              this.searchResults$$.next(
                (n === C.a.WaitingForInput ? e : l).map((l) => {
                  let e;
                  return (
                    (e = l.searchAdbEntry
                      ? l.searchAdbEntry.isFavorite
                        ? y.d.FAVORITES
                        : y.d.CONTACTS
                      : y.d.CALLSTACK),
                    { source: e, value: l }
                  );
                }),
              );
            }),
            this.searchId$
              .pipe(
                Object(b.a)(),
                Object(h.a)((l) =>
                  l ? this.searchService.searchState$(l) : Object(o.a)(void 0),
                ),
                Object(p.a)(this.needles$$, l),
                Object(h.a)(([l, e, n]) => {
                  const t = !!l && l.state === y.e.DONE;
                  return e && e[0]
                    ? t
                      ? t && 0 === n.length
                        ? (this.logger.debug("delay SearchCompleted status"),
                          Object(o.a)(C.a.SearchCompleted).pipe(
                            Object(m.a)(3e3),
                          ))
                        : Object(o.a)(C.a.SearchCompleted)
                      : Object(o.a)(C.a.Searching)
                    : Object(o.a)(C.a.WaitingForInput);
                }),
                Object(g.a)((l) =>
                  this.logger.debug(
                    "set searchStatus$ to ",
                    this.mapSearchStatusToString(l),
                  ),
                ),
                Object(d.a)(this.destroyed$$),
              )
              .subscribe((l) => {
                this.searchStatus$$.next(l);
              }),
            this.deviceToSearch$
              .pipe(
                Object(h.a)((l) =>
                  l && l.id
                    ? this.searchService.proposals$(l)
                    : Object(o.a)([]),
                ),
                Object(d.a)(this.destroyed$$),
              )
              .subscribe((l) => {
                this.initialSuggestions$$.next(
                  (l.length > 0 && l[0].proposals) || [],
                );
              }));
        }
        mapFavoriteToSearchResult(l) {
          return l.contact
            ? this.addressbookService
                .contact$(l.contact ? l.contact.id : "")
                .pipe(
                  Object(c.a)((e) => {
                    const n = this.getFavoriteNumberFromContact(e, l.index);
                    return {
                      id: "",
                      uri: "",
                      name: e ? e.name : "",
                      combinedName: e ? { text: e.name } : void 0,
                      numbers: [
                        {
                          number: n ? { text: n.number } : void 0,
                          numberType: n ? n.type : void 0,
                        },
                      ],
                      numberType: n ? n.type : void 0,
                      searchAdbEntry: { contact: e, isFavorite: !0 },
                    };
                  }),
                )
            : l.number
              ? Object(o.a)({
                  id: "",
                  uri: "",
                  name: "",
                  combinedName: { text: l.number },
                  numbers: [{ number: { text: l.number } }],
                  searchAdbEntry: {
                    isFavorite: !0,
                    contact: {
                      id: "",
                      uri: "",
                      name: l.number,
                      phoneNumberList: [{ number: l.number }],
                    },
                  },
                })
              : (this.logger.error(
                  "mapFavoriteToSearchResult: unexpected Favorite received, favorite search will return no results!",
                  l,
                ),
                u.a);
        }
        getFavoriteNumberFromContact(l, e) {
          if (l && l.phoneNumberList && 0 !== l.phoneNumberList.length)
            return e && l.phoneNumberList.length > e
              ? l.phoneNumberList[e]
              : l.phoneNumberList.find((l) => !!l.isFavorite);
        }
        mapSearchStatusToString(l) {
          switch (l) {
            case C.a.WaitingForInput:
              return "WaitingForInput";
            case C.a.Searching:
              return "Searching";
            case C.a.SearchCompleted:
              return "SearchCompleted";
          }
          return "" + l;
        }
        ngOnDestroy() {
          (this.destroyed$$.next(),
            this.searchId$$.complete(),
            this.searchResults$$.complete(),
            this.searchStatus$$.complete(),
            this.searchType$$.complete(),
            this.initialSuggestions$$.complete(),
            this.needles$$.complete());
        }
        setSearchTypeAndDevice(l, e) {
          (this.logger.info("setSearchTypeAndDevice", {
            searchType: l,
            deviceId: e,
          }),
            this.searchType$$.next(l),
            this.searchDeviceId$$.next(e));
        }
        onBackButtonTap() {
          this.routingService.goBack();
        }
        getInputModel(l) {
          return this.textInputService.getInputField(
            "phone search input",
            this.getContextId(),
            l,
          );
        }
        getSearchNeedles(l) {
          return this.proposalValidationService.getSearchNeedles(l);
        }
        getContextId() {
          return x.e.TIF_ID_05_SEARCH_FIELD_PHONE_LISTS;
        }
        createSearch(l) {
          ((this.needles = l),
            this.logger.info("search needles changed:", l),
            this.needles$$.next(l));
        }
        restoreSearch(l) {
          return l
            ? new Promise((e, n) => {
                (this.stopSearch(),
                  this.searchService
                    .getExistingSearch(l)
                    .pipe(Object(d.a)(this.destroyed$$), Object(f.a)(1))
                    .subscribe(
                      (l) => {
                        (this.logger.info(
                          "restoreSearch: received previous search: ",
                          l,
                        ),
                          l.state === y.e.DONE
                            ? (this.searchId$$.next(l.id), e(!0))
                            : e(!1));
                      },
                      (l) => {
                        (this.logger.error(
                          "restoreSearch: error retrieving previous search: ",
                          l,
                        ),
                          e(!1));
                      },
                      () => {
                        (this.logger.info(
                          "restoreSearch: getExistingSearch completed without getting a previous search",
                        ),
                          e(!1));
                      },
                    ));
              })
            : Promise.resolve(!1);
        }
        replaceInput(l, e) {
          this.textInputService.replace(l, e);
        }
        stopSearch() {
          this.logger.info("stopping search");
        }
        addToDictionary(l) {
          this.textInputService.addWordsFromTruffleResultToDictionary(
            l.staticObject,
          );
        }
        getDynamicSuggestions$(l, e) {
          this.logger.info("getting dynamic suggestions for:", l);
          const n = this.searchService.suggestions$(l).pipe(
              Object(c.a)((l) =>
                l.map((l) => ({
                  fullSuggestion: l.fullSuggestion,
                  suggestion: l.suggestion || "",
                  needleIndex: l.inputTextIndex,
                  type: l.suggestionType === y.f.FAST ? x.u.FAST : x.u.SLOW,
                })),
              ),
              Object(d.a)(this.destroyed$$),
              Object(v.Kd)(),
            ),
            t = n.pipe(
              Object(c.a)((l) => l.filter((l) => l.type === x.u.FAST)),
            ),
            a = n.pipe(
              Object(c.a)((l) => l.filter((l) => l.type !== x.u.FAST)),
            );
          return this.proposalValidationService.validateProposals(e, t, a);
        }
        saveInputAsProposal() {
          const l = this.phoneService.phones.focusDevice,
            e = this.needles && this.needles[0];
          l && e && this.searchService.addProposal(l, e);
        }
        isContactValidForContext(l) {
          return this.routingService.activeAppContextSnapshot === T.w
            ? !!l.phoneNumberList && l.phoneNumberList.length > 0
            : this.routingService.activeAppContextSnapshot === T.u
              ? !!l.addressList && l.addressList.length > 0
              : this.routingService.activeAppContextSnapshot !== T.t ||
                (!!l.emailList && l.emailList.length > 0);
        }
        createSearchForDevice(l, e, n) {
          return n && n[0]
            ? new r.a((t) => {
                const i = new a.a(!1);
                return (
                  this.logger.info(
                    "attempting to create a new search object:",
                    { device: l, sources: e, needles: n },
                  ),
                  this.searchService
                    .createSearch(l, e, n)
                    .pipe(Object(p.a)(i))
                    .subscribe(([n, a]) => {
                      (this.logger.info("handling update for search object:", {
                        deviceId: l.id,
                        sources: e,
                        searchId: n,
                        unsubscribed: a,
                      }),
                        n
                          ? a
                            ? (t.complete(), this.searchService.deleteSearch(n))
                            : t.next(n)
                          : a ||
                            this.logger.error(
                              "creating a search object failed, no searchId received",
                            ));
                    }),
                  () => i.next(!0)
                );
              })
            : Object(o.a)(void 0);
        }
      }
    },
    eZMD: function (l, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return h;
      }),
        n.d(e, "b", function () {
          return f;
        }));
      var t = n("kZht"),
        a = n("8TlW"),
        i = n("fu7d"),
        o = n("bou3"),
        u = n("yNay"),
        r = n("ijxY"),
        c = n("Xo58"),
        s = n("m3Ja"),
        b = n("r+e+"),
        d = n("bmFL"),
        p = n("An66"),
        h =
          (n("HD2x"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;max-height:100%;max-width:100%;overflow:hidden}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;text-align:center;flex:1 1 0;font-size:40px;min-height:0}.secondary-text[_ngcontent-%COMP%]{padding-top:40px;font-size:30px}[_nghost-%COMP%]     [instruction-text-operational-panel], [_nghost-%COMP%]     au3-operation-panel{padding-top:9px;padding-bottom:8px}.component-layout-arabic[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .content[_ngcontent-%COMP%]{direction:rtl}.component-layout-latin[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .content[_ngcontent-%COMP%]{direction:ltr}.steering-wheel-left[_nghost-%COMP%]   .action-area[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .action-area[_ngcontent-%COMP%]{flex-direction:row}.steering-wheel-right[_nghost-%COMP%]   .action-area[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .action-area[_ngcontent-%COMP%]{flex-direction:row-reverse}",
              ],
            ],
            data: {},
          }));
      function m(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "primary-text"],
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
              a.b,
              a.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              i.a,
              [t.l, t.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              r.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            t.xb(
              3,
              245760,
              null,
              0,
              c.a,
              [[6, i.a], s.a, t.h, t.l, t.D, [2, b.a], [2, r.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(
              e,
              1,
              0,
              n.primaryTextId ? n.primaryTextId : "PrimaryText",
              n.primaryTextIdEnum,
            ),
              l(e, 2, 0, !n.hasPrimaryText),
              l(
                e,
                3,
                0,
                n.primaryDeveloperText,
                n.primaryTextId ? n.primaryTextId : "PrimaryText",
                n.primaryFixedNumberOfLines,
                n.primaryNonI18nText,
              ));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 3).backgroundColor,
              t.Nb(e, 3).fixedNumberOfLines,
              t.Nb(e, 3).mayContainLatinCharsForArabic,
              t.Nb(e, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function g(l) {
        return t.ac(
          0,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "secondary-text"],
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
              a.b,
              a.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              i.a,
              [t.l, t.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              r.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            t.xb(
              3,
              245760,
              null,
              0,
              c.a,
              [[6, i.a], s.a, t.h, t.l, t.D, [2, b.a], [2, r.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (l, e) {
            var n = e.component;
            (l(
              e,
              1,
              0,
              n.secondaryTextId ? n.secondaryTextId : "SecondaryText",
              n.secondaryTextIdEnum,
            ),
              l(
                e,
                2,
                0,
                !n.hasSecondaryText ||
                  (!n.secondaryDeveloperText && !n.secondaryTextIdEnum),
              ),
              l(
                e,
                3,
                0,
                n.secondaryDeveloperText,
                n.secondaryTextId ? n.secondaryTextId : "SecondaryText",
                n.secondaryFixedNumberOfLines,
                n.secondaryNonI18nText,
              ));
          },
          function (l, e) {
            l(
              e,
              0,
              0,
              t.Nb(e, 3).backgroundColor,
              t.Nb(e, 3).fixedNumberOfLines,
              t.Nb(e, 3).mayContainLatinCharsForArabic,
              t.Nb(e, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function f(l) {
        return t.ac(
          2,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              5,
              "div",
              [["class", "content"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(), t.hb(16777216, null, null, 1, null, m)),
            t.xb(
              2,
              16384,
              null,
              0,
              p.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), t.hb(16777216, null, null, 1, null, g)),
            t.xb(
              4,
              16384,
              null,
              0,
              p.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Mb(null, 0),
            t.Mb(null, 1),
          ],
          function (l, e) {
            var n = e.component;
            (l(e, 2, 0, n.hasPrimaryText), l(e, 4, 0, n.hasSecondaryText));
          },
          null,
        );
      }
    },
    j7uj: function (l, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return t;
      });
      var t = (function (l) {
        return (
          (l[(l.WaitingForInput = 0)] = "WaitingForInput"),
          (l[(l.Searching = 1)] = "Searching"),
          (l[(l.SearchCompleted = 2)] = "SearchCompleted"),
          l
        );
      })({});
    },
    nQV3: function (l, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return u;
      }),
        n.d(e, "b", function () {
          return r;
        }));
      var t = n("kZht"),
        a = n("fu7d"),
        i = n("bou3"),
        o = n("yNay"),
        u =
          (n("3+OJ"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;width:46px;height:50px}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr;padding-left:20px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:ltr;padding-right:20px}.checkbox[_ngcontent-%COMP%]{width:100%;height:100%}.checkbox__frame[_ngcontent-%COMP%]{display:block;position:absolute;width:24px;height:24px;transform:translateY(50%);border:1px solid #fff}.checkbox__checkmark[_ngcontent-%COMP%]{display:none;width:28px;height:12px;border:solid #fff;border-width:0 0 2px 2px;transform:translate3d(-1%,68%,0) rotate(-55deg) skewX(-20deg);box-shadow:inset 0 -5px #000,5px 4px #000}.checkbox__checkmark--checked[_ngcontent-%COMP%]{display:block}",
              ],
            ],
            data: {},
          }));
      function r(l) {
        return t.ac(
          2,
          [
            (l()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "checkbox"]],
              null,
              null,
              null,
              null,
              null,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [t.l, t.D, i.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (l()(),
            t.yb(
              2,
              0,
              null,
              null,
              0,
              "div",
              [["class", "checkbox__frame"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            t.yb(
              3,
              0,
              null,
              null,
              0,
              "div",
              [["class", "checkbox__checkmark"]],
              [[2, "checkbox__checkmark--checked", null]],
              null,
              null,
              null,
              null,
            )),
          ],
          function (l, e) {
            l(e, 1, 0, e.component.id);
          },
          function (l, e) {
            l(e, 3, 0, e.component.checked);
          },
        );
      }
    },
    "q+H2": function (l, e, n) {
      "use strict";
      function t(l) {
        return !(l && l.length > 0 && "" !== l[0]);
      }
      n.d(e, "a", function () {
        return t;
      });
    },
    xS3h: function (l, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return c;
      }),
        n.d(e, "b", function () {
          return s;
        }));
      var t = n("Hnhs"),
        a = n("Yi6/"),
        i = n("kZht"),
        o = n("bou3"),
        u = n("sg2e"),
        r = n("yNay"),
        c = (function (l) {
          return (
            (l.saveShortcut = "Shortcut\nspeichern"),
            (l.SaveFavorite = "Favorit\nspeichern"),
            l
          );
        })({});
      let s = (() => {
        class l {
          constructor(l, e, n, t) {
            ((this.globalShortcutsService = l),
              (this.systemConfigService = e),
              (this.popupService = n),
              (this.initialSaveShortcutOption = {
                icon: "E3F0_save_shortcut_preset.webp",
                developerText: "Shortcut\nspeichern",
                visible: !1,
                enabled: !0,
                textId: c.saveShortcut,
              }),
              (this.logger = t.getLogger("main.ShortcutsOptionsService")));
          }
          saveShortcut(l) {
            return this.globalShortcutsService
              .addShortcut(l)
              .then((e) => {
                e === t.c.Saved
                  ? (this.logger.info(
                      `saveShortcut: Saved shortcut "${l.name}"`,
                    ),
                    this.popupService
                      .request(a.Ob.POPUP_TOAST_PRESET_SAVED)
                      .then((l) =>
                        this.logger.debug(
                          "saveShortcut: Show toast for successful saving of shortcut",
                          l,
                        ),
                      ))
                  : this.logger.warn(
                      `saveShortcut: Could not save shortcut "${l.name}"`,
                      e,
                    );
              })
              .catch((e) =>
                this.logger.error(
                  `saveShortcut: Could not save shortcut "${l.name}"`,
                  e,
                ),
              );
          }
          saveShortcutOption(l) {
            const e = this.globalShortcutsService.checkDuplicateShortcut(l);
            let n = void 0;
            return (
              this.globalShortcutsService.checkMaximumSavedShortcuts(l)
                ? (n = a.Ob.POPUP_TOAST_PRESET_MAXIMUM_PRESETS_SAVED)
                : e && (n = a.Ob.POPUP_TOAST_PRESET_ALREADY_SAVED),
              Object.assign(
                {},
                this.initialSaveShortcutOption,
                { disabledReason: n },
                { enabled: null == n },
                { visible: this.shortcutsAvailable },
              )
            );
          }
          get shortcutsAvailable() {
            return this.systemConfigService.isDualDisplay();
          }
        }
        return (
          (l.ɵprov = i.bc({
            factory: function () {
              return new l(i.cc(t.a), i.cc(o.a), i.cc(u.a), i.cc(r.a));
            },
            token: l,
            providedIn: "root",
          })),
          l
        );
      })();
    },
    xaqU: function (l, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      var t = n("Zbi+");
      class a {
        transform(l) {
          switch (l) {
            case t.k.MOBILE:
              return "Mobil";
            case t.k.LANDLINE:
              return "Festnetz";
            case t.k.PRIVATE:
              return "Privat";
            case t.k.BUSINESS:
              return "Gesch\xe4ftlich";
            case t.k.FAX:
              return "Fax";
            case t.k.UNKNOWN:
            default:
              return "Unbekannt";
          }
        }
      }
    },
  },
]);
