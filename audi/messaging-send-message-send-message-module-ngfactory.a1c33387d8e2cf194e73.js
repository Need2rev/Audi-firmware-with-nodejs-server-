(window.webpackJsonp = window.webpackJsonp || []).push([
  [89, 108],
  {
    "4UH/": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return R;
      });
      var i = n("IXiK"),
        o = n("RGxT"),
        a = n("a4+N"),
        s = n("Yi6/"),
        c = n("QQZH"),
        r = n("g6G6"),
        l = n("HM3f"),
        u = n("rYDR"),
        h = n("ROBh"),
        d = n("GoAz"),
        g = n("8lHc"),
        p = n("YtkY"),
        m = n("J+dc"),
        b = n("TLy2"),
        f = n("jIqt"),
        O = n("8j5Y"),
        _ = n("kuMc"),
        S = n("P1io"),
        P = n("sK8D"),
        T = n("6qsK"),
        y = (n("YEFf"), n("tZxQ"), n("clth")),
        C = n("d3LF"),
        v = (n("vPDv"), n("rJ2r")),
        x = (n("+vJ/"), n("AGsL"), n("kmPl")),
        M = n("RXfg");
      class R {
        constructor(e, t, n, o, d, g, _, S, P, T, y, x, R, E) {
          ((this.infoService = e),
            (this.routingService = t),
            (this.operationService = n),
            (this.locationService = o),
            (this.resourceService = d),
            (this.readoutService = g),
            (this.phoneService = _),
            (this.i18nService = S),
            (this.templatesService = P),
            (this.disclaimerService = T),
            (this.actionsService = x),
            (this.displayService = R),
            (this.forSds = !1),
            (this.headerEnum = C.b),
            (this.accountTypeEnum = i.a),
            (this.operationEnum = v.a),
            (this.noSubjectOperation = v.d),
            (this.popupNoRecipientGreyedOut =
              s.Ob.POPUP_MSG_POPUP_NO_RECIPIENT_AVAILABLE),
            (this.MessagingRoute = M.a),
            (this.destroy$$ = new c.a(1)),
            (this.logger = E.getLogger("messaging.EditMessageViewComponent")),
            (this.location$ = this.locationService.location$),
            (this.recipients$ = this.location$.pipe(
              Object(p.a)((e) =>
                e && e.account
                  ? this.operationService.getRecipients(e.account)
                  : [],
              ),
            )),
            (this.textReplacements$ = Object(r.a)(
              Object(l.b)(
                this.templatesService.formattedLastDestination$.pipe(
                  Object(m.a)(2),
                ),
                this.templatesService.lastDestinationEta$.pipe(Object(m.a)(2)),
                this.templatesService.formattedCurrentLocation$.pipe(
                  Object(m.a)(2),
                ),
              ).pipe(
                Object(p.a)(([e, t, n]) => ({
                  destination: e,
                  eta: t,
                  position: n,
                })),
              ),
              u.a,
            ).pipe(
              Object(s.pd)(this.logger, "textReplacements$"),
              Object(s.Kd)(),
            )),
            (this.text$ = this.locationService.location$.pipe(
              Object(b.a)((e) => {
                if (
                  (this.logger.info("text$: mapping location ", e),
                  !e || !e.account)
                )
                  return Object(h.a)("");
                const t = e.operation === v.a.REPLY,
                  n = e.operation === v.a.FORWARD,
                  o = e.account.accountType
                    ? Object(h.a)(e.account.accountType)
                    : this.resourceService
                        .account$(e.account.id)
                        .pipe(Object(p.a)((e) => e.accountType));
                return (
                  (this.baseContent$ = Object(h.a)(null)),
                  (t || n) &&
                    (e.content && e.content.body
                      ? (this.baseContent$ = Object(h.a)(e.content))
                      : e.content &&
                        (this.baseContent$ = this.resourceService.content$(
                          e.content.id,
                        ))),
                  (this.baseContent$ = this.baseContent$.pipe(Object(s.Kd)())),
                  Object(l.b)(
                    o,
                    this.baseContent$,
                    this.textReplacements$.pipe(Object(f.a)({})),
                  ).pipe(
                    Object(p.a)(([o, a, s]) => {
                      const c = o === i.a.MAIL,
                        r = this.getTemplateText(e, s);
                      return ((t && c) || n) && a && a.body
                        ? r + "\n\n********\n\n" + a.body
                        : r;
                    }),
                  )
                );
              }),
            )),
            (this.subject$ = this.locationService.location$.pipe(
              Object(b.a)((e) =>
                e && e.content
                  ? Object(s.wd)(e.content.subject)
                    ? Object(h.a)(e.content.subject)
                    : this.resourceService.content$(e.content.id).pipe(
                        Object(O.a)((e) =>
                          this.logger.info(
                            "Received message subject update:",
                            e,
                          ),
                        ),
                        Object(p.a)((e) => e.subject || ""),
                      )
                  : Object(h.a)(""),
              ),
            )),
            (this.isReading$ = this.readoutService.session$.pipe(
              Object(p.a)((e) => !!e && e.status !== a.e.IDLE),
            )),
            (this.activeCall$ = this.phoneService.callActive$));
          const j = y
            .getProperty({ type: s.Eb.SCREEN, category: s.Ab.LONG_TEXT })
            .pipe(Object(b.a)((e) => e.lock$));
          this.disclaimerSubscription =
            this.disclaimerService.registerDisclaimer({
              priority: s.D.LockingLongText,
              reason$: Object(h.a)(s.B.LOCKING_LONG_TEXT),
              allowOperationPanel: !0,
              enabled$: j,
            });
        }
        ngOnDestroy() {
          (this.disclaimerService.unregisterDisclaimer(
            this.disclaimerSubscription,
          ),
            this.destroy$$.next(),
            this.destroy$$.complete());
        }
        getNoSubjectId(e) {
          switch (e) {
            case v.a.REPLY:
              return v.d.NO_SUBJECT_REPLY;
            case v.a.FORWARD:
              return v.d.NO_SUBJECT_FORWARD;
            case v.a.SEND:
            default:
              return v.d.NO_SUBJECT_SEND;
          }
        }
        getRecipientNames(e) {
          return e
            ? (this.logger.info("Returning names for recipients ", e),
              e
                .map((e) =>
                  e.contact && e.contact.name
                    ? e.contact.name
                    : e.name
                      ? e.name
                      : e.address,
                )
                .filter((e) => !!e && e.length > 0)
                .join("; ") || " ")
            : "";
        }
        readoutButtonTapped(e, t) {
          (this.forSds
            ? this.actionsService.requestAction(o.a.STOP)
            : Promise.resolve()
          ).then(
            () => this.readoutService.readoutText(e, t),
            (e) => this.logger.error("readoutButtonTapped: failed:", e),
          );
        }
        stopReadoutButtonTapped() {
          this.readoutService.abortReadout();
        }
        sendMessageTapped(e, t, n) {
          e && e.account && e.template && t && this.sendMessage(e, t, n);
        }
        addRecipientTapped() {
          (this.forSds
            ? this.actionsService.requestAction(o.a.STOP)
            : Promise.resolve()
          ).then(
            () => this.routingService.goTo(M.a.children.MessageAddressbook),
            (e) => this.logger.error("addRecipientTapped: failed:", e),
          );
        }
        deleteRecipientTapped() {
          (this.forSds
            ? this.actionsService.requestAction(o.a.STOP)
            : Promise.resolve()
          ).then(
            () => this.routingService.goTo(M.a.children.DeleteRecipient),
            (e) => this.logger.error("deleteRecipientTapped: failed:", e),
          );
        }
        sendMessage(e, t, n) {
          const a =
            e.account && e.account.accountType === i.a.MAIL
              ? i.g.MAIL
              : i.g.SMS;
          let c = null;
          switch (e.operation) {
            case v.a.REPLY:
              c = "MessagingSubjectPrefixReply";
              break;
            case v.a.FORWARD:
              c = "MessagingSubjectPrefixForward";
          }
          const r = c ? this.i18nService.getConstantTranslation(c) + n : n,
            u = e.account;
          Object(l.b)([this.baseContent$, this.textReplacements$])
            .pipe(
              Object(m.a)(1),
              Object(s.pd)(
                this.logger,
                "sendMessage: baseContent and textReplacements:",
              ),
              Object(b.a)((e) =>
                this.forSds
                  ? Object(d.a)(
                      this.actionsService.requestAction(o.a.STOP),
                    ).pipe(
                      Object(p.a)(
                        (t) => (
                          this.logger.info(
                            "sendMessage: requestAction response:",
                            t,
                          ),
                          e
                        ),
                      ),
                    )
                  : Object(h.a)(e),
              ),
              Object(_.a)(this.destroy$$),
            )
            .subscribe(
              ([n, i]) => {
                const o = this.getTemplateText(e, i);
                this.goToSendingScreen(n, a, u, o, r, t, e);
              },
              (e) => this.logger.error("sendMessage: failed:", e),
            );
        }
        getTemplateText(e, t) {
          if (e && e.template) {
            if (e.template.type === x.d.USER) return e.template.text;
            if (e.template.type === x.d.STATIC)
              return this.i18nService.getConstantTranslation(
                `MessagingStaticTemplate#${e.template.id}`,
              );
            if (e.template.type === x.d.DYNAMIC) {
              let n = this.i18nService.getConstantTranslation(
                `MessagingDynamicTemplate#${e.template.id}`,
              );
              return (
                t &&
                  Object.keys(t).forEach((e) => {
                    n = n.replace("{{" + e + "}}", t[e]);
                  }),
                n
              );
            }
          }
          return "";
        }
        goToSendingScreen(e, t, n, i, o, a, s) {
          const c = this.determineBackRoute(),
            r = this.routingService.resolveRoutingService(
              this.routingService.activeAppContextSnapshot,
            );
          Promise.all([
            this.routingService
              .goTo(M.a.children.MessageSending)
              .then(
                () => (
                  this.logger.info(
                    "goToSendingScreen: navigation to sending screen done.",
                  ),
                  this.operationService.sendMessage(
                    (e && e.type) || t,
                    n,
                    i,
                    o,
                    a,
                    s.operation,
                    e || void 0,
                  )
                ),
              ),
            Object(g.a)(3e3).pipe(Object(m.a)(1)).toPromise(),
          ])
            .then(
              () => (
                this.logger.info(
                  "goToSendingScreen: Sending success and minimal screen time passed, navigating back to origin.",
                ),
                this.goBackRoute(c, r)
              ),
            )
            .catch(
              (e) => (
                this.logger.warn("goToSendingScreen failed: ", e),
                this.goBackRoute(c, r)
              ),
            );
        }
        goBackRoute(e, t) {
          return e
            ? t
              ? this.goBackHelper(e, t)
              : (this.routingService.enterAppContext(
                  this.routingService.activeAppContextSnapshot,
                ),
                Promise.reject(
                  new Error(
                    "Failed to resolve correct routing service for goBack!",
                  ),
                ))
            : (this.routingService.enterAppContext(
                this.routingService.activeAppContextSnapshot,
              ),
              Promise.reject(new Error("Failed to resolve back route!")));
        }
        determineBackRoute() {
          const e = this.routingService.activeAppContextSnapshot;
          return e === S.t
            ? [y.a.SourceSelection.children.Account]
            : e === S.w
              ? [
                  T.b.Main.children.Callstack,
                  T.b.Main.children.Addressbook.children.Contact,
                  T.b.Main.children.Addressbook,
                ]
              : e === S.u
                ? [
                    P.b.DestinationMode.children.Addressbook.children.Contact,
                    P.b.DestinationMode.children.Addressbook,
                  ]
                : void 0;
        }
        goBackHelper(e, t) {
          const n = e.find((e) => t.isRouteInHistory(e));
          return n
            ? t.goBack(n)
            : (this.logger.warn(
                "goBack: failed to determine backroute, falling back to main screen.",
              ),
              t.enterContext());
        }
      }
    },
    HdDr: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var i = n("kZht"),
        o = n("Yi6/"),
        a = n("wgY5"),
        s = n("wYfD"),
        c = (function (e) {
          return (
            (e[(e.Unknown = 0)] = "Unknown"),
            (e[(e.Today = 1)] = "Today"),
            (e[(e.Normal = 2)] = "Normal"),
            e
          );
        })({});
      class r {
        constructor() {
          ((this.dateFormat = "DD.MM.YYYY"),
            (this.timeFormat = "HH:mm"),
            (this.showDate = !0),
            (this.showTime = !0),
            (this.readoutActive = !1),
            (this.readoutDisabled = !1),
            (this.showReadoutButton = !0),
            (this.ttsTapped = new i.n()),
            (this.entryTapped = new i.n()),
            (this.longPress = new i.n()),
            (this.DateEnum = c),
            (this.IconCategory = o.Z),
            (this.uiStateType = o.uc.ListHorizontal),
            (this.readoutDisabledReason = {
              type: o.A.SHOW_POPUP,
              popup: o.Ob.POPUP_MSG_POPUP_READING_NOT_POSSIBLE,
            }));
        }
        set message(e) {
          ((this._message = e),
            (this.dateEnum = this.createDateEnum()),
            (this.dateValue = this.createDateValue()),
            (this.timeValue = this.createTimeValue()),
            (this.contact = this.createContact()),
            (this.content = this.createContent()),
            (this.envelopeIcon = this.createEnvelopeIcon()));
        }
        set currentDate(e) {
          ((this._currentDate = e), (this.dateEnum = this.createDateEnum()));
        }
        createDateEnum() {
          return this._message && this._message.dateTime
            ? a(this._message.dateTime).isSame(this._currentDate, "day")
              ? c.Today
              : c.Normal
            : c.Unknown;
        }
        createDateValue() {
          return this._message && this._message.dateTime
            ? a(this._message.dateTime).format(this.dateFormat)
            : "";
        }
        createTimeValue() {
          return this._message && this._message.dateTime
            ? a.utc(this._message.dateTime)
            : null;
        }
        createContact() {
          return this._message && this._message.sender
            ? this._message.sender.name
              ? this._message.sender.name
              : this._message.sender.address
                ? this._message.sender.address
                : ""
            : "";
        }
        createContent() {
          return this._message && this._message.subject
            ? this._message.subject
            : "";
        }
        createEnvelopeIcon() {
          if (!this._message) return "E837_office_msg_info.webp";
          switch (this._message.status) {
            case s.h.UNREAD:
              return this.isMailAndHighPrio()
                ? "E2B6_messaging_high_priority.webp"
                : this._message.attachments
                  ? "E838_office_msg_attachment.webp"
                  : "E834_office_msg_closed.webp";
            case s.h.READ:
            case s.h.UNKNOWN:
              return "E835_office_msg_open.webp";
            case s.h.SENT:
              return "E839_office_msg_sent.webp";
            case s.h.UNSENT:
              return "E83B_office_msg_problem.webp";
            case s.h.DRAFT:
              return "E83A_office_msg_draft.webp";
            default:
              return "E837_office_msg_info.webp";
          }
        }
        isMailAndHighPrio() {
          return (
            this._message.type === s.i.MAIL &&
            this._message.priority === s.f.HIGH
          );
        }
      }
    },
    ihOk: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return p;
      }),
        n.d(t, "b", function () {
          return O;
        }));
      var i = n("kZht"),
        o = n("An66"),
        a = n("fu7d"),
        s = n("bou3"),
        c = n("yNay"),
        r = n("8TlW"),
        l = n("Xo58"),
        u = n("m3Ja"),
        h = n("r+e+"),
        d = n("ijxY"),
        g = n("bmFL"),
        p =
          (n("ZMtB"),
          n("fzcM"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{height:100%;width:100%;max-height:100%;max-width:100%;min-height:0;display:flex;justify-content:center;flex-direction:column}.disclaimer-description[_ngcontent-%COMP%]{width:100%;font-size:40px;text-align:center}',
              ],
            ],
            data: {},
          }));
      function m(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              16777216,
              null,
              null,
              1,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            i.xb(
              1,
              540672,
              null,
              0,
              o.r,
              [i.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (e()(), i.hb(0, null, null, 0)),
          ],
          function (e, t) {
            e(t, 1, 0, t.component.contentTemplate);
          },
          null,
        );
      }
      function b(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
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
            i.Mb(null, 0),
            (e()(), i.hb(16777216, null, null, 1, null, m)),
            i.xb(
              3,
              16384,
              null,
              0,
              o.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), i.hb(0, null, null, 0)),
          ],
          function (e, t) {
            e(t, 3, 0, t.component.hasContentTemplate);
          },
          null,
        );
      }
      function f(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              4,
              "span",
              [["id", "Disclaimer"]],
              null,
              null,
              null,
              null,
              null,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [i.l, i.D, s.a, c.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (e()(),
            i.yb(
              2,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "disclaimer-description"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              r.b,
              r.a,
            )),
            i.xb(
              3,
              212992,
              null,
              0,
              a.a,
              [i.l, i.D, s.a, c.a, [3, a.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              4,
              245760,
              null,
              0,
              l.a,
              [[6, a.a], u.a, i.h, i.l, i.D, [2, h.a], [2, d.a], [2, g.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, "Disclaimer"),
              e(
                t,
                3,
                0,
                n.restrictionReason && n.disabledTextEnum[n.restrictionReason]
                  ? n.restrictionReason
                  : n.disabledReasonEnum.ERROR,
                n.disabledTextEnum,
              ),
              e(
                t,
                4,
                0,
                n.disabledTextEnum[n.restrictionReason] ||
                  n.disabledTextEnum.ERROR,
                n.restrictionReason && n.disabledTextEnum[n.restrictionReason]
                  ? n.restrictionReason
                  : n.disabledReasonEnum.ERROR,
                6,
                n.nonI18nDisabledText,
              ));
          },
          function (e, t) {
            e(
              t,
              2,
              0,
              i.Nb(t, 4).backgroundColor,
              i.Nb(t, 4).fixedNumberOfLines,
              i.Nb(t, 4).mayContainLatinCharsForArabic,
              i.Nb(t, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function O(e) {
        return i.ac(
          2,
          [
            (e()(), i.hb(16777216, null, null, 1, null, b)),
            i.xb(
              1,
              16384,
              null,
              0,
              o.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(), i.hb(0, [["disclaimerText", 2]], null, 0, null, f)),
          ],
          function (e, t) {
            e(t, 1, 0, !t.component.active, i.Nb(t, 2));
          },
          null,
        );
      }
    },
    oWpa: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return b;
      }),
        n.d(t, "b", function () {
          return O;
        }));
      var i = n("kZht"),
        o = n("HVUF"),
        a = n("B3Zb"),
        s = n("yNay"),
        c = n("8TlW"),
        r = n("fu7d"),
        l = n("bou3"),
        u = n("bmFL"),
        h = n("Xo58"),
        d = n("m3Ja"),
        g = n("r+e+"),
        p = n("ijxY"),
        m = n("An66"),
        b =
          (n("yegR"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;display:block}.container[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.container--column[_ngcontent-%COMP%]{flex-direction:column;align-items:center;justify-content:center}.lines[_ngcontent-%COMP%]{flex:1 1 0;line-height:65px;max-width:100%}.fpk-stage-big[_nghost-%COMP%]   .lines[_ngcontent-%COMP%], .fpk-stage-big   [_nghost-%COMP%]   .lines[_ngcontent-%COMP%], .fpk-stage-small[_nghost-%COMP%]   .lines[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .lines[_ngcontent-%COMP%]{line-height:59px}.lines--column[_ngcontent-%COMP%]{flex:0 1 auto}.icon[_ngcontent-%COMP%]{margin-left:30px}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{flex-direction:row}.component-layout-latin[_nghost-%COMP%]   .line[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .line[_ngcontent-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{margin-left:30px;margin-right:0}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{flex-direction:row-reverse}.component-layout-arabic[_nghost-%COMP%]   .line[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .line[_ngcontent-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{margin-left:0;margin-right:30px}",
              ],
            ],
            data: {},
          }));
      function f(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "icon"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              o.b,
              o.a,
            )),
            i.xb(
              1,
              4243456,
              null,
              0,
              a.b,
              [s.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            e(t, 1, 0, n.iconFilename, n.iconCategory);
          },
          function (e, t) {
            e(t, 0, 0, i.Nb(t, 1).iconComponentHidden);
          },
        );
      }
      function O(e) {
        return i.ac(
          2,
          [
            i.Tb(402653184, 1, { container: 0 }),
            (e()(),
            i.yb(
              1,
              0,
              [
                [1, 0],
                ["container", 1],
              ],
              null,
              6,
              "div",
              [["class", "container"]],
              [[2, "container--column", null]],
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              2,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "lines"],
                ["id", "StatustextLines"],
              ],
              [
                [2, "lines--column", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              c.b,
              c.a,
            )),
            i.xb(
              3,
              212992,
              null,
              0,
              r.a,
              [i.l, i.D, l.a, s.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              4,
              16384,
              null,
              0,
              u.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            i.xb(
              5,
              245760,
              null,
              0,
              h.a,
              [[6, r.a], d.a, i.h, i.l, i.D, [2, g.a], [2, p.a], [2, u.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            (e()(), i.hb(16777216, null, null, 1, null, f)),
            i.xb(
              7,
              16384,
              null,
              0,
              m.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 3, 0, "StatustextLines"),
              e(t, 4, 0, n.ttInterpolateParams),
              e(
                t,
                5,
                0,
                n.developerText,
                "StatustextLines",
                n.maxNumberOfLines,
                n.nonI18nText,
              ),
              e(t, 7, 0, n.iconFilename && n.iconCategory));
          },
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, n.iconBelowText),
              e(
                t,
                2,
                0,
                n.iconBelowText,
                i.Nb(t, 5).backgroundColor,
                i.Nb(t, 5).fixedNumberOfLines,
                i.Nb(t, 5).mayContainLatinCharsForArabic,
                i.Nb(t, 5).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
    },
    yUFt: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      class i {}
    },
    ygUF: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return i;
      }),
        n("4UH/"),
        n("HdDr"));
      class i {}
    },
  },
]);
