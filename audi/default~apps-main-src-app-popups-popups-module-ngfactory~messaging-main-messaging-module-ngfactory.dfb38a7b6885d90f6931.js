(window.webpackJsonp = window.webpackJsonp || []).push([
  [42],
  {
    "4UH/": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return T;
      });
      var a = n("IXiK"),
        i = n("RGxT"),
        l = n("a4+N"),
        o = n("Yi6/"),
        s = n("QQZH"),
        r = n("g6G6"),
        u = n("HM3f"),
        c = n("rYDR"),
        b = n("ROBh"),
        d = n("GoAz"),
        h = n("8lHc"),
        g = n("YtkY"),
        p = n("J+dc"),
        m = n("TLy2"),
        f = n("jIqt"),
        _ = n("8j5Y"),
        v = n("kuMc"),
        C = n("P1io"),
        O = n("sK8D"),
        x = n("6qsK"),
        P = (n("YEFf"), n("tZxQ"), n("clth")),
        M = n("d3LF"),
        S = (n("vPDv"), n("rJ2r")),
        y = (n("+vJ/"), n("AGsL"), n("kmPl")),
        N = n("RXfg");
      class T {
        constructor(e, t, n, i, d, h, v, C, O, x, P, y, T, w) {
          ((this.infoService = e),
            (this.routingService = t),
            (this.operationService = n),
            (this.locationService = i),
            (this.resourceService = d),
            (this.readoutService = h),
            (this.phoneService = v),
            (this.i18nService = C),
            (this.templatesService = O),
            (this.disclaimerService = x),
            (this.actionsService = y),
            (this.displayService = T),
            (this.forSds = !1),
            (this.headerEnum = M.b),
            (this.accountTypeEnum = a.a),
            (this.operationEnum = S.a),
            (this.noSubjectOperation = S.d),
            (this.popupNoRecipientGreyedOut =
              o.Ob.POPUP_MSG_POPUP_NO_RECIPIENT_AVAILABLE),
            (this.MessagingRoute = N.a),
            (this.destroy$$ = new s.a(1)),
            (this.logger = w.getLogger("messaging.EditMessageViewComponent")),
            (this.location$ = this.locationService.location$),
            (this.recipients$ = this.location$.pipe(
              Object(g.a)((e) =>
                e && e.account
                  ? this.operationService.getRecipients(e.account)
                  : [],
              ),
            )),
            (this.textReplacements$ = Object(r.a)(
              Object(u.b)(
                this.templatesService.formattedLastDestination$.pipe(
                  Object(p.a)(2),
                ),
                this.templatesService.lastDestinationEta$.pipe(Object(p.a)(2)),
                this.templatesService.formattedCurrentLocation$.pipe(
                  Object(p.a)(2),
                ),
              ).pipe(
                Object(g.a)(([e, t, n]) => ({
                  destination: e,
                  eta: t,
                  position: n,
                })),
              ),
              c.a,
            ).pipe(
              Object(o.pd)(this.logger, "textReplacements$"),
              Object(o.Kd)(),
            )),
            (this.text$ = this.locationService.location$.pipe(
              Object(m.a)((e) => {
                if (
                  (this.logger.info("text$: mapping location ", e),
                  !e || !e.account)
                )
                  return Object(b.a)("");
                const t = e.operation === S.a.REPLY,
                  n = e.operation === S.a.FORWARD,
                  i = e.account.accountType
                    ? Object(b.a)(e.account.accountType)
                    : this.resourceService
                        .account$(e.account.id)
                        .pipe(Object(g.a)((e) => e.accountType));
                return (
                  (this.baseContent$ = Object(b.a)(null)),
                  (t || n) &&
                    (e.content && e.content.body
                      ? (this.baseContent$ = Object(b.a)(e.content))
                      : e.content &&
                        (this.baseContent$ = this.resourceService.content$(
                          e.content.id,
                        ))),
                  (this.baseContent$ = this.baseContent$.pipe(Object(o.Kd)())),
                  Object(u.b)(
                    i,
                    this.baseContent$,
                    this.textReplacements$.pipe(Object(f.a)({})),
                  ).pipe(
                    Object(g.a)(([i, l, o]) => {
                      const s = i === a.a.MAIL,
                        r = this.getTemplateText(e, o);
                      return ((t && s) || n) && l && l.body
                        ? r + "\n\n********\n\n" + l.body
                        : r;
                    }),
                  )
                );
              }),
            )),
            (this.subject$ = this.locationService.location$.pipe(
              Object(m.a)((e) =>
                e && e.content
                  ? Object(o.wd)(e.content.subject)
                    ? Object(b.a)(e.content.subject)
                    : this.resourceService.content$(e.content.id).pipe(
                        Object(_.a)((e) =>
                          this.logger.info(
                            "Received message subject update:",
                            e,
                          ),
                        ),
                        Object(g.a)((e) => e.subject || ""),
                      )
                  : Object(b.a)(""),
              ),
            )),
            (this.isReading$ = this.readoutService.session$.pipe(
              Object(g.a)((e) => !!e && e.status !== l.e.IDLE),
            )),
            (this.activeCall$ = this.phoneService.callActive$));
          const L = P.getProperty({
            type: o.Eb.SCREEN,
            category: o.Ab.LONG_TEXT,
          }).pipe(Object(m.a)((e) => e.lock$));
          this.disclaimerSubscription =
            this.disclaimerService.registerDisclaimer({
              priority: o.D.LockingLongText,
              reason$: Object(b.a)(o.B.LOCKING_LONG_TEXT),
              allowOperationPanel: !0,
              enabled$: L,
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
            case S.a.REPLY:
              return S.d.NO_SUBJECT_REPLY;
            case S.a.FORWARD:
              return S.d.NO_SUBJECT_FORWARD;
            case S.a.SEND:
            default:
              return S.d.NO_SUBJECT_SEND;
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
            ? this.actionsService.requestAction(i.a.STOP)
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
            ? this.actionsService.requestAction(i.a.STOP)
            : Promise.resolve()
          ).then(
            () => this.routingService.goTo(N.a.children.MessageAddressbook),
            (e) => this.logger.error("addRecipientTapped: failed:", e),
          );
        }
        deleteRecipientTapped() {
          (this.forSds
            ? this.actionsService.requestAction(i.a.STOP)
            : Promise.resolve()
          ).then(
            () => this.routingService.goTo(N.a.children.DeleteRecipient),
            (e) => this.logger.error("deleteRecipientTapped: failed:", e),
          );
        }
        sendMessage(e, t, n) {
          const l =
            e.account && e.account.accountType === a.a.MAIL
              ? a.g.MAIL
              : a.g.SMS;
          let s = null;
          switch (e.operation) {
            case S.a.REPLY:
              s = "MessagingSubjectPrefixReply";
              break;
            case S.a.FORWARD:
              s = "MessagingSubjectPrefixForward";
          }
          const r = s ? this.i18nService.getConstantTranslation(s) + n : n,
            c = e.account;
          Object(u.b)([this.baseContent$, this.textReplacements$])
            .pipe(
              Object(p.a)(1),
              Object(o.pd)(
                this.logger,
                "sendMessage: baseContent and textReplacements:",
              ),
              Object(m.a)((e) =>
                this.forSds
                  ? Object(d.a)(
                      this.actionsService.requestAction(i.a.STOP),
                    ).pipe(
                      Object(g.a)(
                        (t) => (
                          this.logger.info(
                            "sendMessage: requestAction response:",
                            t,
                          ),
                          e
                        ),
                      ),
                    )
                  : Object(b.a)(e),
              ),
              Object(v.a)(this.destroy$$),
            )
            .subscribe(
              ([n, a]) => {
                const i = this.getTemplateText(e, a);
                this.goToSendingScreen(n, l, c, i, r, t, e);
              },
              (e) => this.logger.error("sendMessage: failed:", e),
            );
        }
        getTemplateText(e, t) {
          if (e && e.template) {
            if (e.template.type === y.d.USER) return e.template.text;
            if (e.template.type === y.d.STATIC)
              return this.i18nService.getConstantTranslation(
                `MessagingStaticTemplate#${e.template.id}`,
              );
            if (e.template.type === y.d.DYNAMIC) {
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
        goToSendingScreen(e, t, n, a, i, l, o) {
          const s = this.determineBackRoute(),
            r = this.routingService.resolveRoutingService(
              this.routingService.activeAppContextSnapshot,
            );
          Promise.all([
            this.routingService
              .goTo(N.a.children.MessageSending)
              .then(
                () => (
                  this.logger.info(
                    "goToSendingScreen: navigation to sending screen done.",
                  ),
                  this.operationService.sendMessage(
                    (e && e.type) || t,
                    n,
                    a,
                    i,
                    l,
                    o.operation,
                    e || void 0,
                  )
                ),
              ),
            Object(h.a)(3e3).pipe(Object(p.a)(1)).toPromise(),
          ])
            .then(
              () => (
                this.logger.info(
                  "goToSendingScreen: Sending success and minimal screen time passed, navigating back to origin.",
                ),
                this.goBackRoute(s, r)
              ),
            )
            .catch(
              (e) => (
                this.logger.warn("goToSendingScreen failed: ", e),
                this.goBackRoute(s, r)
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
          return e === C.t
            ? [P.a.SourceSelection.children.Account]
            : e === C.w
              ? [
                  x.b.Main.children.Callstack,
                  x.b.Main.children.Addressbook.children.Contact,
                  x.b.Main.children.Addressbook,
                ]
              : e === C.u
                ? [
                    O.b.DestinationMode.children.Addressbook.children.Contact,
                    O.b.DestinationMode.children.Addressbook,
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
      var a = n("kZht"),
        i = n("Yi6/"),
        l = n("wgY5"),
        o = n("wYfD"),
        s = (function (e) {
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
            (this.ttsTapped = new a.n()),
            (this.entryTapped = new a.n()),
            (this.longPress = new a.n()),
            (this.DateEnum = s),
            (this.IconCategory = i.Z),
            (this.uiStateType = i.uc.ListHorizontal),
            (this.readoutDisabledReason = {
              type: i.A.SHOW_POPUP,
              popup: i.Ob.POPUP_MSG_POPUP_READING_NOT_POSSIBLE,
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
            ? l(this._message.dateTime).isSame(this._currentDate, "day")
              ? s.Today
              : s.Normal
            : s.Unknown;
        }
        createDateValue() {
          return this._message && this._message.dateTime
            ? l(this._message.dateTime).format(this.dateFormat)
            : "";
        }
        createTimeValue() {
          return this._message && this._message.dateTime
            ? l.utc(this._message.dateTime)
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
            case o.h.UNREAD:
              return this.isMailAndHighPrio()
                ? "E2B6_messaging_high_priority.webp"
                : this._message.attachments
                  ? "E838_office_msg_attachment.webp"
                  : "E834_office_msg_closed.webp";
            case o.h.READ:
            case o.h.UNKNOWN:
              return "E835_office_msg_open.webp";
            case o.h.SENT:
              return "E839_office_msg_sent.webp";
            case o.h.UNSENT:
              return "E83B_office_msg_problem.webp";
            case o.h.DRAFT:
              return "E83A_office_msg_draft.webp";
            default:
              return "E837_office_msg_info.webp";
          }
        }
        isMailAndHighPrio() {
          return (
            this._message.type === o.i.MAIL &&
            this._message.priority === o.f.HIGH
          );
        }
      }
    },
    Kkg5: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return G;
      }),
        n.d(t, "b", function () {
          return le;
        }));
      var a = n("kZht"),
        i = n("8TlW"),
        l = n("fu7d"),
        o = n("bou3"),
        s = n("yNay"),
        r = n("Xo58"),
        u = n("m3Ja"),
        c = n("r+e+"),
        b = n("ijxY"),
        d = n("bmFL"),
        h = n("An66"),
        g = n("VKfg"),
        p = n("EkEa"),
        m = n("oPv+"),
        f = n("HVUF"),
        _ = n("bMuc"),
        v = n("ZIdM"),
        C = n("3bpu"),
        O = n("OtM5"),
        x = n("9ZFG"),
        P = n("6zvu"),
        M = n("VcEz"),
        S = n("y9xZ"),
        y = n("+sw+"),
        N = n("BMrr"),
        T = n("IEns"),
        w = n("z6QT"),
        L = n("flsk"),
        D = n("FQEI"),
        k = n("O82V"),
        E = n("Eln4"),
        A = n("evAh"),
        R = n("B3Zb"),
        j = n("Ps6X"),
        I = n("CpzC"),
        z = n("0Bsn"),
        $ = n("5GjX"),
        U = n("mYyF"),
        B = n("v98a"),
        F = n("aOG8"),
        H = n("Krzs"),
        V = n("vwU6"),
        Y = n("YcCK"),
        G =
          (n("HdDr"),
          a.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}.item[_ngcontent-%COMP%]{position:relative;align-items:center;width:100%;height:120px}.item[_ngcontent-%COMP%], .message[_ngcontent-%COMP%]{display:flex;max-width:100%;overflow:hidden}.message[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;justify-content:center;flex:1 1 0}.text--primary[_ngcontent-%COMP%]{font-size:40px}.text--secondary[_ngcontent-%COMP%]{font-size:28px}.icon[_ngcontent-%COMP%]{min-width:80px;padding:0 20px}.line[_ngcontent-%COMP%]{display:flex;align-items:center}.line__start[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;justify-content:flex-start;flex:1 1 0;min-width:0;margin-right:20px}.line__end[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;max-width:20%;padding-left:1ch}.line__end--date[_ngcontent-%COMP%]{min-width:200px}.readout[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;min-width:160px;height:100%}.steering-wheel-left[_nghost-%COMP%]   .item[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .item[_ngcontent-%COMP%]{flex-direction:row}.steering-wheel-right[_nghost-%COMP%]   .item[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .item[_ngcontent-%COMP%]{flex-direction:row-reverse}.component-layout-latin[_nghost-%COMP%]   .line[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .line[_ngcontent-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%]   .item[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .item[_ngcontent-%COMP%]{flex-direction:row-reverse}.component-layout-arabic[_nghost-%COMP%]   .line[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .line[_ngcontent-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .line__end[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .line__end[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;max-width:20%}',
              ],
            ],
            data: {},
          }));
      function K(e) {
        return a.ac(
          0,
          [
            (e()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "line__start text--primary"],
                ["developerText", "Unbekannt"],
                ["id", "MessageContactUnknown"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              i.b,
              i.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              l.a,
              [a.l, a.D, o.a, s.a, [3, l.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              r.a,
              [[6, l.a], u.a, a.h, a.l, a.D, [2, c.a], [2, b.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, t) {
            (e(t, 1, 0, "MessageContactUnknown"),
              e(t, 2, 0, "Unbekannt", "MessageContactUnknown", 1));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              a.Nb(t, 2).backgroundColor,
              a.Nb(t, 2).fixedNumberOfLines,
              a.Nb(t, 2).mayContainLatinCharsForArabic,
              a.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function W(e) {
        return a.ac(
          0,
          [
            (e()(),
            a.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "line__start text--primary"],
                ["id", "MessageContactName"],
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
              i.b,
              i.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              l.a,
              [a.l, a.D, o.a, s.a, [3, l.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 16384, null, 0, b.a, [], null, null),
            a.xb(
              3,
              245760,
              null,
              0,
              r.a,
              [[6, l.a], u.a, a.h, a.l, a.D, [2, c.a], [2, b.a], [2, d.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, "MessageContactName"),
              e(t, 3, 0, "MessageContactName", n.contact));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              a.Nb(t, 3).backgroundColor,
              a.Nb(t, 3).fixedNumberOfLines,
              a.Nb(t, 3).mayContainLatinCharsForArabic,
              a.Nb(t, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function J(e) {
        return a.ac(
          0,
          [
            (e()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "line__end text--secondary"],
                ["developerText", "Heute"],
                ["id", "MessageDateToday"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              i.b,
              i.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              l.a,
              [a.l, a.D, o.a, s.a, [3, l.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              r.a,
              [[6, l.a], u.a, a.h, a.l, a.D, [2, c.a], [2, b.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, t) {
            (e(t, 1, 0, "MessageDateToday"),
              e(t, 2, 0, "Heute", "MessageDateToday", 1));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              a.Nb(t, 2).backgroundColor,
              a.Nb(t, 2).fixedNumberOfLines,
              a.Nb(t, 2).mayContainLatinCharsForArabic,
              a.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function X(e) {
        return a.ac(
          0,
          [
            (e()(),
            a.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "line__end text--secondary line__end--date"],
                ["id", "MessageDate"],
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
              i.b,
              i.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              l.a,
              [a.l, a.D, o.a, s.a, [3, l.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 16384, null, 0, b.a, [], null, null),
            a.xb(
              3,
              245760,
              null,
              0,
              r.a,
              [[6, l.a], u.a, a.h, a.l, a.D, [2, c.a], [2, b.a], [2, d.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, "MessageDate"), e(t, 3, 0, "MessageDate", n.dateValue));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              a.Nb(t, 3).backgroundColor,
              a.Nb(t, 3).fixedNumberOfLines,
              a.Nb(t, 3).mayContainLatinCharsForArabic,
              a.Nb(t, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Z(e) {
        return a.ac(
          0,
          [
            (e()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "line__end text--secondary"],
                ["developerText", "Kein Datum"],
                ["id", "MessageDateUnknown"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              i.b,
              i.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              l.a,
              [a.l, a.D, o.a, s.a, [3, l.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              r.a,
              [[6, l.a], u.a, a.h, a.l, a.D, [2, c.a], [2, b.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, t) {
            (e(t, 1, 0, "MessageDateUnknown"),
              e(t, 2, 0, "Kein Datum", "MessageDateUnknown", 1));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              a.Nb(t, 2).backgroundColor,
              a.Nb(t, 2).fixedNumberOfLines,
              a.Nb(t, 2).mayContainLatinCharsForArabic,
              a.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function q(e) {
        return a.ac(
          0,
          [
            (e()(),
            a.yb(
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
            a.xb(
              1,
              16384,
              null,
              0,
              h.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (e()(), a.hb(16777216, null, null, 1, null, J)),
            a.xb(
              3,
              278528,
              null,
              0,
              h.p,
              [a.P, a.L, h.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), a.hb(16777216, null, null, 1, null, X)),
            a.xb(
              5,
              278528,
              null,
              0,
              h.p,
              [a.P, a.L, h.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), a.hb(16777216, null, null, 1, null, Z)),
            a.xb(7, 16384, null, 0, h.q, [a.P, a.L, h.o], null, null),
            (e()(), a.hb(0, null, null, 0)),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, n.dateEnum),
              e(t, 3, 0, n.DateEnum.Today),
              e(t, 5, 0, n.DateEnum.Normal));
          },
          null,
        );
      }
      function Q(e) {
        return a.ac(
          0,
          [
            (e()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "line__start text--secondary"],
                ["developerText", "Keine Textvorschau verf\xfcgbar"],
                ["id", "MessageContentPreviewNotAvailable"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              i.b,
              i.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              l.a,
              [a.l, a.D, o.a, s.a, [3, l.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              r.a,
              [[6, l.a], u.a, a.h, a.l, a.D, [2, c.a], [2, b.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, t) {
            (e(t, 1, 0, "MessageContentPreviewNotAvailable"),
              e(
                t,
                2,
                0,
                "Keine Textvorschau verf\xfcgbar",
                "MessageContentPreviewNotAvailable",
                1,
              ));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              a.Nb(t, 2).backgroundColor,
              a.Nb(t, 2).fixedNumberOfLines,
              a.Nb(t, 2).mayContainLatinCharsForArabic,
              a.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function ee(e) {
        return a.ac(
          0,
          [
            (e()(),
            a.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "line__start text--secondary"],
                ["id", "MessageContentPreview"],
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
              i.b,
              i.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              l.a,
              [a.l, a.D, o.a, s.a, [3, l.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 16384, null, 0, b.a, [], null, null),
            a.xb(
              3,
              245760,
              null,
              0,
              r.a,
              [[6, l.a], u.a, a.h, a.l, a.D, [2, c.a], [2, b.a], [2, d.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, "MessageContentPreview"),
              e(t, 3, 0, "MessageContentPreview", n.content));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              a.Nb(t, 3).backgroundColor,
              a.Nb(t, 3).fixedNumberOfLines,
              a.Nb(t, 3).mayContainLatinCharsForArabic,
              a.Nb(t, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function te(e) {
        return a.ac(
          0,
          [
            (e()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "line__end text--secondary"],
                ["developerText", "- : -"],
                ["id", "MessageTimeUnknown"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              i.b,
              i.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              l.a,
              [a.l, a.D, o.a, s.a, [3, l.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              r.a,
              [[6, l.a], u.a, a.h, a.l, a.D, [2, c.a], [2, b.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, t) {
            (e(t, 1, 0, "MessageTimeUnknown"),
              e(t, 2, 0, "- : -", "MessageTimeUnknown", 1));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              a.Nb(t, 2).backgroundColor,
              a.Nb(t, 2).fixedNumberOfLines,
              a.Nb(t, 2).mayContainLatinCharsForArabic,
              a.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function ne(e) {
        return a.ac(
          0,
          [
            (e()(),
            a.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-time-display",
              [],
              null,
              null,
              null,
              g.b,
              g.a,
            )),
            a.xb(
              1,
              49152,
              null,
              0,
              p.a,
              [m.a],
              {
                timeAsMoment: [0, "timeAsMoment"],
                timeRightAligned: [1, "timeRightAligned"],
              },
              null,
            ),
          ],
          function (e, t) {
            e(t, 1, 0, t.component.timeValue, !0);
          },
          null,
        );
      }
      function ae(e) {
        return a.ac(
          0,
          [
            (e()(),
            a.yb(
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
            (e()(), a.hb(16777216, null, null, 1, null, te)),
            a.xb(
              2,
              16384,
              null,
              0,
              h.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(), a.hb(0, [["timeLabel", 2]], null, 0, null, ne)),
          ],
          function (e, t) {
            e(t, 2, 0, !t.component.timeValue, a.Nb(t, 3));
          },
          null,
        );
      }
      function ie(e) {
        return a.ac(
          0,
          [
            (e()(),
            a.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-icon",
              [["class", "readout"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "icon-component--hidden", null],
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
              function (e, t, n) {
                var a = !0;
                return (
                  "mib3Tap" === t &&
                    (a = !1 !== e.component.ttsTapped.emit() && a),
                  a
                );
              },
              f.b,
              f.a,
            )),
            a.xb(1, 147456, null, 0, _.a, [a.l, a.z], null, null),
            a.xb(
              2,
              147456,
              null,
              0,
              v.a,
              [_.a, [2, C.a], [2, l.a], s.a],
              null,
              null,
            ),
            a.xb(
              3,
              147456,
              null,
              0,
              O.a,
              [x.a, a.h, s.a, [3, O.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            a.xb(
              4,
              212992,
              null,
              0,
              P.a,
              [
                s.a,
                M.b,
                v.a,
                [2, C.a],
                [2, l.a],
                [2, O.a],
                [2, S.a],
                [2, y.a],
                a.z,
                N.a,
                a.l,
                [2, T.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            a.xb(
              6,
              4407296,
              null,
              0,
              L.a,
              [
                a.l,
                D.a,
                a.h,
                w.a,
                [2, k.a],
                [2, C.b],
                [2, C.a],
                [2, E.a],
                [2, A.a],
              ],
              null,
              null,
            ),
            a.xb(
              7,
              4243456,
              null,
              0,
              R.b,
              [s.a, a.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            a.xb(
              8,
              212992,
              null,
              0,
              j.a,
              [[2, P.a], [8, null], [3, j.a], a.l, a.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            a.xb(
              9,
              147456,
              null,
              0,
              I.a,
              [[2, P.a], [2, O.a], [2, z.a], [2, L.a], [2, $.b], a.l, U.a, B.b],
              null,
              null,
            ),
            a.xb(
              10,
              147456,
              null,
              0,
              F.a,
              [[2, L.a], [2, P.a], [2, M.b], H.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 3, 0, n.readoutDisabled, n.readoutDisabledReason),
              e(t, 4, 0),
              e(t, 6, 0),
              e(
                t,
                7,
                0,
                n.readoutActive
                  ? "E9C9_messaging_readout_stop.webp"
                  : "E9C0_messaging_readout_start.webp",
                n.IconCategory.List,
              ),
              e(t, 8, 0, n.uiStateType));
          },
          function (e, t) {
            e(t, 0, 1, [
              a.Nb(t, 3).combinedDisabled,
              a.Nb(t, 3).useBrighterIcon,
              a.Nb(t, 6).markerClassEnabled,
              a.Nb(t, 7).iconComponentHidden,
              a.Nb(t, 8).uiStateListHorizontal,
              a.Nb(t, 8).uiStateListVertical,
              a.Nb(t, 8).uiStateCoverLeft,
              a.Nb(t, 8).uiStateCoverRight,
              a.Nb(t, 8).uiStateCoverBottom,
              a.Nb(t, 8).uiStateButton,
              a.Nb(t, 8).uiStateByDabLeft,
              a.Nb(t, 8).uiStateByDabRight,
              a.Nb(t, 8).uiStateLbDabLeft,
              a.Nb(t, 8).uiStateLbDabRight,
            ]);
          },
        );
      }
      function le(e) {
        return a.ac(
          2,
          [
            (e()(),
            a.yb(
              0,
              0,
              null,
              null,
              28,
              "div",
              [["class", "item"]],
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
              [
                [null, "mib3FocusPress"],
                [null, "mib3FocusLongPress"],
              ],
              function (e, t, n) {
                var a = !0,
                  i = e.component;
                return (
                  "mib3FocusPress" === t &&
                    (a = !1 !== i.entryTapped.emit() && a),
                  "mib3FocusLongPress" === t &&
                    (a = !1 !== i.longPress.emit() && a),
                  a
                );
              },
              null,
              null,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              j.a,
              [[2, P.a], [8, null], [3, j.a], a.l, a.h],
              {
                au3UiState: [0, "au3UiState"],
                focusCursorUiStateOnly: [1, "focusCursorUiStateOnly"],
              },
              null,
            ),
            (e()(),
            a.yb(
              2,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "icon"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              f.b,
              f.a,
            )),
            a.xb(
              3,
              4243456,
              null,
              0,
              R.b,
              [s.a, a.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (e()(),
            a.yb(
              4,
              0,
              null,
              null,
              22,
              "div",
              [["class", "message"]],
              [
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
              [
                [null, "mib3Tap"],
                [null, "mib3Longpress"],
              ],
              function (e, t, n) {
                var a = !0,
                  i = e.component;
                return (
                  "mib3Tap" === t && (a = !1 !== i.entryTapped.emit() && a),
                  "mib3Longpress" === t && (a = !1 !== i.longPress.emit() && a),
                  a
                );
              },
              null,
              null,
            )),
            a.xb(5, 147456, null, 0, _.a, [a.l, a.z], null, null),
            a.xb(
              6,
              147456,
              null,
              0,
              v.a,
              [_.a, [2, C.a], [2, l.a], s.a],
              null,
              null,
            ),
            a.xb(
              7,
              212992,
              null,
              0,
              P.a,
              [
                s.a,
                M.b,
                v.a,
                [2, C.a],
                [2, l.a],
                [2, O.a],
                [2, S.a],
                [2, y.a],
                a.z,
                N.a,
                a.l,
                [2, T.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.xb(
              8,
              212992,
              null,
              0,
              V.a,
              [
                s.a,
                a.z,
                a.l,
                M.b,
                N.a,
                v.a,
                [2, C.a],
                [2, l.a],
                [2, O.a],
                [2, S.a],
                [2, y.a],
                [2, T.a],
              ],
              null,
              { longpress: "mib3Longpress" },
            ),
            a.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            a.xb(
              10,
              4407296,
              null,
              0,
              L.a,
              [
                a.l,
                D.a,
                a.h,
                w.a,
                [2, k.a],
                [2, C.b],
                [2, C.a],
                [2, E.a],
                [2, A.a],
              ],
              null,
              null,
            ),
            a.xb(
              11,
              212992,
              null,
              0,
              j.a,
              [[2, P.a], [8, null], [3, j.a], a.l, a.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            a.xb(
              12,
              147456,
              null,
              0,
              Y.a,
              [[2, V.a], a.l, U.a, B.b],
              null,
              null,
            ),
            a.xb(
              13,
              147456,
              null,
              0,
              I.a,
              [[2, P.a], [2, O.a], [2, z.a], [2, L.a], [2, $.b], a.l, U.a, B.b],
              null,
              null,
            ),
            a.xb(
              14,
              147456,
              null,
              0,
              F.a,
              [[2, L.a], [2, P.a], [2, M.b], H.a],
              null,
              null,
            ),
            (e()(),
            a.yb(
              15,
              0,
              null,
              null,
              5,
              "div",
              [["class", "line"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), a.hb(16777216, null, null, 1, null, K)),
            a.xb(
              17,
              16384,
              null,
              0,
              h.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(), a.hb(0, [["contactName", 2]], null, 0, null, W)),
            (e()(), a.hb(16777216, null, null, 1, null, q)),
            a.xb(
              20,
              16384,
              null,
              0,
              h.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            a.yb(
              21,
              0,
              null,
              null,
              5,
              "div",
              [["class", "line"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), a.hb(16777216, null, null, 1, null, Q)),
            a.xb(
              23,
              16384,
              null,
              0,
              h.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(), a.hb(0, [["contentLabel", 2]], null, 0, null, ee)),
            (e()(), a.hb(16777216, null, null, 1, null, ae)),
            a.xb(
              26,
              16384,
              null,
              0,
              h.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), a.hb(16777216, null, null, 1, null, ie)),
            a.xb(
              28,
              16384,
              null,
              0,
              h.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, n.uiStateType, !0),
              e(t, 3, 0, n.envelopeIcon, n.IconCategory.List),
              e(t, 7, 0),
              e(t, 8, 0),
              e(t, 10, 0),
              e(t, 11, 0, n.uiStateType),
              e(t, 17, 0, !n.contact, a.Nb(t, 18)),
              e(t, 20, 0, n.showDate),
              e(t, 23, 0, !n.content, a.Nb(t, 24)),
              e(t, 26, 0, n.showTime),
              e(t, 28, 0, n.showReadoutButton));
          },
          function (e, t) {
            (e(
              t,
              0,
              0,
              a.Nb(t, 1).uiStateListHorizontal,
              a.Nb(t, 1).uiStateListVertical,
              a.Nb(t, 1).uiStateCoverLeft,
              a.Nb(t, 1).uiStateCoverRight,
              a.Nb(t, 1).uiStateCoverBottom,
              a.Nb(t, 1).uiStateButton,
              a.Nb(t, 1).uiStateByDabLeft,
              a.Nb(t, 1).uiStateByDabRight,
              a.Nb(t, 1).uiStateLbDabLeft,
              a.Nb(t, 1).uiStateLbDabRight,
            ),
              e(t, 2, 0, a.Nb(t, 3).iconComponentHidden),
              e(t, 4, 1, [
                a.Nb(t, 10).markerClassEnabled,
                a.Nb(t, 11).uiStateListHorizontal,
                a.Nb(t, 11).uiStateListVertical,
                a.Nb(t, 11).uiStateCoverLeft,
                a.Nb(t, 11).uiStateCoverRight,
                a.Nb(t, 11).uiStateCoverBottom,
                a.Nb(t, 11).uiStateButton,
                a.Nb(t, 11).uiStateByDabLeft,
                a.Nb(t, 11).uiStateByDabRight,
                a.Nb(t, 11).uiStateLbDabLeft,
                a.Nb(t, 11).uiStateLbDabRight,
              ]));
          },
        );
      }
    },
    ygUF: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return a;
      }),
        n("4UH/"),
        n("HdDr"));
      class a {}
    },
  },
]);
