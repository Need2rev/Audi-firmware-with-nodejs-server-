(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    "4ZeQ": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return b;
      });
      var i = n("RGxT"),
        l = (n("AEBN"), n("Yi6/")),
        a = n("QQZH"),
        s = n("C05f"),
        o = n("xVbo"),
        r = n("YtkY"),
        c = n("Ohay"),
        u = n("kuMc");
      (n("HMkY"), n("tZxQ"), n("zSEC"));
      class b {
        constructor(t, e, n, i, c) {
          ((this.speechService = t),
            (this.dialogService = e),
            (this.actionService = n),
            (this.engineeringMenusService = i),
            (this.statusbarHeight = 80),
            (this.PopupIdsAudi = l.Ob),
            (this.popupType = l.Rb),
            (this.iconCategory = l.Z),
            (this.targetRectCalculationCallbacks = l.nc),
            (this.pauseButtonDisabled = !1),
            (this.paused = !1),
            (this.destroy$$ = new a.a(1)),
            (this.requestedScreenRoute$$ = new s.a(void 0)),
            (this.logger = c.getLogger("speech.SdsPopupComponent")),
            (this.isBackButtonVisible$ =
              this.speechService.activeFullscreenPopupId$.pipe(
                Object(o.a)(l.wd),
                Object(r.a)(
                  (t) =>
                    ![
                      l.Ob.POPUP_SDS_BIG_COMMAND_DISPLAY_WELCOME_SCREEN,
                      l.Ob.POPUP_SDS_ALEXA_MAIN,
                    ].includes(t),
                ),
              )),
            (this.activeFullscreenPopupId$ = t.activeFullscreenPopupId$.pipe(
              Object(o.a)(l.wd),
            )));
        }
        handleHkBackEvent() {
          l.gd.isBentley && this.stopDialog();
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
              .requestAction(i.a.STOP)
              .catch((t) =>
                this.logger.error("Error requesting dialog stop: ", t),
              ));
        }
        pauseClicked() {
          this.pauseButtonDisabled ||
            (this.logger.info(`${this.paused ? "Pause" : "Resume"} tapped`),
            this.actionService
              .requestAction(this.paused ? i.a.RESUME : i.a.PAUSE)
              .catch((t) =>
                this.logger.error("Error requesting dialog pause/resume: ", t),
              ));
        }
        backTapped() {
          this.actionService
            .requestAction(i.a.CORRECTION)
            .catch((t) =>
              this.logger.error(
                "Error requesting dialog correction (back): ",
                t,
              ),
            );
        }
        setRequestedScreenRoute(t) {
          (this.logger.info("setRequestedScreenRoute:", t),
            this.requestedScreenRoute$$.next(t));
        }
        subscribeToDialog() {
          this.dialogService.dialog$
            .pipe(
              Object(r.a)((t) => t.dialogState),
              Object(o.a)(l.wd),
              Object(c.a)(),
              Object(u.a)(this.destroy$$),
            )
            .subscribe((t) => {
              this.paused = t === i.f.PAUSED;
            });
        }
      }
    },
    CtSi: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return P;
      });
      var i = n("kZht"),
        l = n("Yi6/"),
        a = n("XY/Y"),
        s = n("6xFL"),
        o = n("qMQG"),
        r = n("prE9"),
        c = n("Ohay"),
        u = n("kuMc"),
        b = n("jIqt"),
        d = n("YtkY"),
        h = n("TLy2"),
        g = n("C05f"),
        p = n("QQZH"),
        m = n("ROBh"),
        f =
          (n("pqkN"),
          (function (t) {
            return (
              (t.INITIAL = "INITIAL"),
              (t.LOADING = "LOADING"),
              (t.NO_CONTACTS_AVAILABLE = "NO_CONTACTS_AVAILABLE"),
              (t.READY = "READY"),
              t
            );
          })({}));
      class P {
        constructor(t, e) {
          ((this.contactValidationService = t),
            (this.forSds = !1),
            (this.showIcons = !1),
            (this.editMode = !1),
            (this.contactTapped = new i.n()),
            (this.contactLongpressed = new i.n()),
            (this.checkboxTapped = new i.n()),
            (this.requestedDynamicListPages = new i.n()),
            (this.itemsWithLineNumbers = new i.n()),
            (this.iconCategoryEnum = l.Z),
            (this.sdsListReferenceType = o.d.CONTACT),
            (this.uiStateType = l.uc.ListHorizontal),
            (this.addressbookViewStateEnum = f),
            (this.addressbookViewState$$ = new g.a(f.INITIAL)),
            (this.listItemHeightGuess = l.gd.isBentley ? 120 : 100),
            (this.destroy$$ = new p.a(1)),
            (this.logger = e.getLogger("addressbook.AdressbookViewComponent")),
            (this.addressbookViewState$ = this.addressbookViewState$$.pipe(
              Object(l.pd)(this.logger, "constructor: enqueing state"),
              Object(r.a)(750),
              Object(c.a)(),
              Object(l.pd)(this.logger, "constructor: updating state"),
              Object(u.a)(this.destroy$$),
            )));
        }
        ngOnDestroy() {
          (this.destroy$$.next(), this.destroy$$.complete());
        }
        ngAfterViewInit() {
          const t = this.listComponent.changes.pipe(
            Object(b.a)(void 0),
            Object(d.a)(() =>
              this.listComponent.length > 0 ? this.listComponent.first : void 0,
            ),
            Object(c.a)(),
          );
          (t
            .pipe(
              Object(h.a)((t) =>
                t ? t.requestedDynamicListPages$ : Object(m.a)(),
              ),
              Object(u.a)(this.destroy$$),
            )
            .subscribe(this.requestedDynamicListPages),
            t
              .pipe(
                Object(h.a)((t) =>
                  t ? t.itemsWithLineNumbers$ : Object(m.a)(),
                ),
                Object(u.a)(this.destroy$$),
              )
              .subscribe(this.itemsWithLineNumbers));
        }
        ngOnChanges(t) {
          if (t.state || t.contacts) {
            const t = this.getViewState();
            this.addressbookViewState$$.next(t);
          }
        }
        getNumberOfContacts() {
          return Array.isArray(this.contacts)
            ? this.contacts.length
            : this.contacts && this.contacts.paging
              ? this.contacts.paging.total
              : -1;
        }
        getViewState() {
          return this.state
            ? this.state === s.b.Loading
              ? f.LOADING
              : this.state === s.b.Empty
                ? f.NO_CONTACTS_AVAILABLE
                : this.state === s.b.HasContacts
                  ? this.getNumberOfContacts() > 0
                    ? f.READY
                    : this.contacts
                      ? f.NO_CONTACTS_AVAILABLE
                      : f.LOADING
                  : f.NO_CONTACTS_AVAILABLE
            : f.INITIAL;
        }
        isValidContact(t) {
          return t
            ? !t.contactObject ||
                this.contactValidationService.isContactValid(
                  t.contactObject,
                  this.viewContext,
                )
            : (this.logger.debug("isValidContact: contact not valid", t), !1);
        }
        toggleDeleteState(t) {
          this.checkboxTapped.emit(t);
        }
        getCheckedState(t) {
          return (
            !!this.operationMode &&
            (this.operationMode.mode === a.d.ALL ||
              (this.operationMode.mode === a.d.WHITELIST
                ? this.operationMode.contacts.has(t)
                : !this.operationMode.contacts.has(t)))
          );
        }
        isListVisibleForState(t) {
          return t === f.INITIAL || t === f.READY;
        }
      }
    },
    JDb9: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var i = n("RGxT"),
        l = (n("Yi6/"), n("QQZH")),
        a = n("xVbo"),
        s = n("kuMc"),
        o = n("hHAo");
      (n("4ZeQ"), n("tZxQ"));
      class r {
        constructor(t, e, n, i, a) {
          ((this.list = t),
            (this.sdsPopup = e),
            (this.actionsService = n),
            (this.mainPerceivableContextService = i),
            (this.isNextPageActionPending = !1),
            (this.isPreviousPageActionPending = !1),
            (this.isFirstPageActionPending = !1),
            (this._sdsPaging = !1),
            (this.destroy$$ = new l.a(1)),
            (this.logger = a.getLogger("speech.SdsPagingDirective")));
        }
        set sdsPaging(t) {
          ((this._sdsPaging = t), this.list && (this.list.sdsPaging = t));
        }
        set lineNumbers(t) {
          this.sdsPaging = t;
        }
        ngOnInit() {
          (this.actionsService.clientActions$
            .pipe(
              Object(a.a)(
                (t) =>
                  t.state === i.b.REQUESTED &&
                  [i.a.NEXTPAGE, i.a.FIRSTPAGE, i.a.PREVIOUSPAGE].includes(
                    t.action,
                  ),
              ),
              Object(a.a)(({ action: t }) => {
                switch (t) {
                  case i.a.NEXTPAGE:
                    return !this.isNextPageActionPending;
                  case i.a.PREVIOUSPAGE:
                    return !this.isPreviousPageActionPending;
                  case i.a.FIRSTPAGE:
                    return !this.isFirstPageActionPending;
                  default:
                    return (
                      this.logger.error("Unexpected paging action: ", t),
                      !1
                    );
                }
              }),
              Object(s.a)(this.destroy$$),
            )
            .subscribe((t) => {
              (this.logger.info("Received paging action request: ", t.action),
                this.performPagingAction(t));
            }),
            this.logger.info(
              `ngOnInit: set list.sdsPaging to ${this._sdsPaging}`,
            ),
            (this.list.sdsPaging = this._sdsPaging),
            this.list.currentListPage$
              .pipe(Object(s.a)(this.destroy$$))
              .subscribe((t) => {
                (this.logger.debug(
                  "Updating current list page in perceivablecontext: ",
                  t.page,
                ),
                  this.mainPerceivableContextService
                    .updateCurrentPage(
                      t.page,
                      this._sdsPaging ? o.a.Popup : o.a.Screen,
                    )
                    .catch((t) => {
                      this.logger.error(
                        "Could not update current list page in perceivablecontext: ",
                        t,
                      );
                    }));
              }));
        }
        ngOnDestroy() {
          ((this.list.sdsPaging = !1),
            this.destroy$$.next(),
            this.destroy$$.complete(),
            this.mainPerceivableContextService.clearContext(
              this.sdsPopup ? o.a.Popup : o.a.Screen,
            ));
        }
        performPagingAction(t) {
          switch (
            (this.logger.info("Performing paging action: ", t.action), t.action)
          ) {
            case i.a.FIRSTPAGE:
              ((this.isFirstPageActionPending = !0), this.list.firstPage());
              break;
            case i.a.NEXTPAGE:
              ((this.isNextPageActionPending = !0), this.list.nextPage());
              break;
            case i.a.PREVIOUSPAGE:
              ((this.isPreviousPageActionPending = !0),
                this.list.previousPage());
              break;
            default:
              throw (
                this.logger.error("Unexpected paging action: ", t),
                new Error("Unexpected paging action!")
              );
          }
          this.actionsService
            .acceptAction(t.action)
            .then(() => {
              (this.logger.info(`Accepted action ${t.action}`),
                this.resetPendingActionFlag(t.action));
            })
            .catch((e) => {
              (this.logger.error("Error accepting paging action: ", e),
                this.resetPendingActionFlag(t.action));
            });
        }
        resetPendingActionFlag(t) {
          switch (t) {
            case i.a.FIRSTPAGE:
              this.isFirstPageActionPending = !1;
              break;
            case i.a.NEXTPAGE:
              this.isNextPageActionPending = !1;
              break;
            case i.a.PREVIOUSPAGE:
              this.isPreviousPageActionPending = !1;
              break;
            default:
              this.logger.error(
                "resetPendingActionFlag called for invalid paging action: ",
                t,
              );
          }
        }
      }
    },
    Pfb3: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return pt;
      }),
        n.d(e, "b", function () {
          return At;
        }));
      var i = n("kZht"),
        l = n("ZXHi"),
        a = n("IRNg"),
        s = n("8TlW"),
        o = n("fu7d"),
        r = n("bou3"),
        c = n("yNay"),
        u = n("Xo58"),
        b = n("m3Ja"),
        d = n("r+e+"),
        h = n("ijxY"),
        g = n("bmFL"),
        p = n("oWpa"),
        m = n("yegR"),
        f = n("HVUF"),
        P = n("B3Zb"),
        O = n("An66"),
        x = n("nQV3"),
        C = n("bMuc"),
        v = n("ZIdM"),
        _ = n("3bpu"),
        y = n("6zvu"),
        A = n("VcEz"),
        M = n("OtM5"),
        S = n("y9xZ"),
        N = n("+sw+"),
        I = n("BMrr"),
        L = n("IEns"),
        E = n("z6QT"),
        k = n("flsk"),
        T = n("FQEI"),
        w = n("O82V"),
        $ = n("Eln4"),
        D = n("evAh"),
        R = n("3+OJ"),
        V = n("CpzC"),
        j = n("0Bsn"),
        z = n("5GjX"),
        G = n("mYyF"),
        H = n("v98a"),
        B = n("aOG8"),
        F = n("Krzs"),
        Y = n("9ZFG"),
        q = n("vwU6"),
        U = n("9N/+"),
        Z = n("Ps6X"),
        Q = n("YcCK"),
        W = n("9tRs"),
        X = n("N2Hj"),
        J = n("UbWD"),
        K = n("2rvh"),
        tt = n("odRV"),
        et = n("Udyh"),
        nt = n("I3ve"),
        it = n("qiAR"),
        lt = n("007S"),
        at = n("oeT7"),
        st = n("oxWk"),
        ot = n("Tr//"),
        rt = n("JDb9"),
        ct = n("4ZeQ"),
        ut = n("tZxQ"),
        bt = n("hHAo"),
        dt = n("VWff"),
        ht = n("1qmX"),
        gt = n("0qMr"),
        pt =
          (n("CtSi"),
          n("pqkN"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;align-items:stretch}.contacts-list[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.contacts-list[_ngcontent-%COMP%]{position:absolute;top:0;left:0}.state-disabled[_ngcontent-%COMP%]{filter:grayscale(100%) brightness(.4)}.statustext[_ngcontent-%COMP%]{text-align:center;font-size:40px}.list-item[_ngcontent-%COMP%]{display:flex;align-items:center;height:100px;font-size:40px;padding:0 20px;width:100%;min-width:0}.list-item__text[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;flex:1 1 0;min-width:0}.list-item__icon[_ngcontent-%COMP%]{min-width:40px}.list-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.list-item__gap[_ngcontent-%COMP%]{width:15px}.component-layout-latin[_nghost-%COMP%]   .list-item[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list-item[_ngcontent-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .list-item__checkbox[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list-item__checkbox[_ngcontent-%COMP%]{margin-right:45px}.component-layout-arabic[_nghost-%COMP%]   .list-item[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list-item[_ngcontent-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .list-container[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list-container[_ngcontent-%COMP%]{flex-direction:row-reverse}.component-layout-arabic[_nghost-%COMP%]   .list-item__checkbox[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list-item__checkbox[_ngcontent-%COMP%]{margin-left:45px}',
              ],
            ],
            data: {},
          }));
      function mt(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-init-view",
              [],
              null,
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(1, 49152, null, 0, a.a, [], null, null),
            (t()(),
            i.yb(
              2,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [["id", "AddressbookLoading"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              s.b,
              s.a,
            )),
            i.xb(
              3,
              212992,
              null,
              0,
              o.a,
              [i.l, i.D, r.a, c.a, [3, o.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              4,
              245760,
              null,
              0,
              u.a,
              [[6, o.a], b.a, i.h, i.l, i.D, [2, d.a], [2, h.a], [2, g.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 3, 0, "AddressbookLoading"),
              t(
                e,
                4,
                0,
                "Adressbuch wird geladen.\nBitte warten...",
                "AddressbookLoading",
                5,
              ));
          },
          function (t, e) {
            t(
              e,
              2,
              0,
              i.Nb(e, 4).backgroundColor,
              i.Nb(e, 4).fixedNumberOfLines,
              i.Nb(e, 4).mayContainLatinCharsForArabic,
              i.Nb(e, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function ft(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "statustext"],
                ["id", "AddressbookEmpty"],
              ],
              null,
              null,
              null,
              p.b,
              p.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              o.a,
              [i.l, i.D, r.a, c.a, [3, o.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              49152,
              null,
              0,
              m.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "AddressbookEmpty"),
              t(e, 2, 0, 5, "Es sind keine Kontakte vorhanden."));
          },
          null,
        );
      }
      function Pt(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              4,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "list-item__icon"],
                ["id", "Icon"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              f.b,
              f.a,
            )),
            i.xb(
              2,
              212992,
              null,
              0,
              o.a,
              [i.l, i.D, r.a, c.a, [3, o.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              3,
              4243456,
              null,
              0,
              P.b,
              [c.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (t()(),
            i.yb(
              4,
              0,
              null,
              null,
              0,
              "div",
              [["class", "list-item__gap"]],
              null,
              null,
              null,
              null,
              null,
            )),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 2, 0, "Icon"),
              t(
                e,
                3,
                0,
                null != e.parent.context.$implicit &&
                  e.parent.context.$implicit.isMailbox
                  ? "E02B_phone_mailbox.webp"
                  : "E05A_phone_adressbuch.webp",
                n.iconCategoryEnum.List,
              ));
          },
          function (t, e) {
            t(e, 1, 0, i.Nb(e, 3).iconComponentHidden);
          },
        );
      }
      function Ot(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["id", "ContactName"],
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
              s.b,
              s.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              o.a,
              [i.l, i.D, r.a, c.a, [3, o.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(2, 16384, null, 0, h.a, [], null, null),
            i.xb(
              3,
              245760,
              null,
              0,
              u.a,
              [[6, o.a], b.a, i.h, i.l, i.D, [2, d.a], [2, h.a], [2, g.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "ContactName"),
              t(
                e,
                3,
                0,
                "ContactName",
                null == e.parent.parent.context.$implicit
                  ? null
                  : e.parent.parent.context.$implicit.name,
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              i.Nb(e, 3).backgroundColor,
              i.Nb(e, 3).fixedNumberOfLines,
              i.Nb(e, 3).mayContainLatinCharsForArabic,
              i.Nb(e, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function xt(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
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
            (t()(), i.hb(16777216, [[2, 2]], null, 1, null, Ot)),
            i.xb(
              2,
              16384,
              null,
              0,
              O.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(0, null, null, 0)),
          ],
          function (t, e) {
            t(
              e,
              2,
              0,
              null == e.parent.context.$implicit
                ? null
                : e.parent.context.$implicit.name,
            );
          },
          null,
        );
      }
      function Ct(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "MailboxName"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              s.b,
              s.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              o.a,
              [i.l, i.D, r.a, c.a, [3, o.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              245760,
              null,
              0,
              u.a,
              [[6, o.a], b.a, i.h, i.l, i.D, [2, d.a], [2, h.a], [2, g.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "MailboxName"),
              t(e, 2, 0, "Mailbox", "MailboxName", 1));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              i.Nb(e, 2).backgroundColor,
              i.Nb(e, 2).fixedNumberOfLines,
              i.Nb(e, 2).mayContainLatinCharsForArabic,
              i.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function vt(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-checkbox",
              [
                ["class", "list-item__checkbox"],
                ["id", "CheckBoxEditMode"],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "mib3Tap" === e &&
                    (i =
                      !1 !==
                        t.component.toggleDeleteState(
                          t.parent.context.$implicit.contactObject,
                        ) && i),
                  i
                );
              },
              x.b,
              x.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              o.a,
              [i.l, i.D, r.a, c.a, [3, o.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(2, 147456, null, 0, C.a, [i.l, i.z], null, null),
            i.xb(
              3,
              147456,
              null,
              0,
              v.a,
              [C.a, [2, _.a], [2, o.a], c.a],
              null,
              null,
            ),
            i.xb(
              4,
              212992,
              null,
              0,
              y.a,
              [
                c.a,
                A.b,
                v.a,
                [2, _.a],
                [2, o.a],
                [2, M.a],
                [2, S.a],
                [2, N.a],
                i.z,
                I.a,
                i.l,
                [2, L.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.Sb(131584, null, E.a, E.a, [[3, E.a]]),
            i.xb(
              6,
              4407296,
              null,
              0,
              k.a,
              [
                i.l,
                T.a,
                i.h,
                E.a,
                [2, w.a],
                [2, _.b],
                [2, _.a],
                [2, $.a],
                [2, D.a],
              ],
              null,
              null,
            ),
            i.xb(
              7,
              49152,
              null,
              0,
              R.a,
              [],
              { id: [0, "id"], checked: [1, "checked"] },
              null,
            ),
            i.xb(
              8,
              147456,
              null,
              0,
              V.a,
              [[2, y.a], [2, M.a], [2, j.a], [2, k.a], [2, z.b], i.l, G.a, H.b],
              null,
              null,
            ),
            i.xb(
              9,
              147456,
              null,
              0,
              B.a,
              [[2, k.a], [2, y.a], [2, A.b], F.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "CheckBoxEditMode"),
              t(e, 4, 0),
              t(e, 6, 0),
              t(
                e,
                7,
                0,
                "CheckBoxEditMode",
                n.getCheckedState(
                  null == e.parent.context.$implicit ||
                    null == e.parent.context.$implicit.contactObject
                    ? null
                    : e.parent.context.$implicit.contactObject.id,
                ),
              ));
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 6).markerClassEnabled);
          },
        );
      }
      function _t(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              22,
              "div",
              [["class", "list-container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              1,
              0,
              null,
              null,
              19,
              "div",
              [
                ["au3C2Cursor", ""],
                ["class", "list-item"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "c2-cursor", null],
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
                [2, "state-active", null],
              ],
              [
                [null, "mib3Tap"],
                [null, "mib3DisabledTap"],
                [null, "mib3Longpress"],
              ],
              function (t, e, n) {
                var i = !0,
                  l = t.component;
                return (
                  "mib3Tap" === e &&
                    (i = !1 !== l.contactTapped.emit(t.context.$implicit) && i),
                  "mib3DisabledTap" === e &&
                    (i = !1 !== l.contactTapped.emit(t.context.$implicit) && i),
                  "mib3Longpress" === e &&
                    (i =
                      !1 !== l.contactLongpressed.emit(t.context.$implicit) &&
                      i),
                  i
                );
              },
              null,
              null,
            )),
            i.xb(2, 147456, null, 0, C.a, [i.l, i.z], null, null),
            i.xb(
              3,
              147456,
              null,
              0,
              v.a,
              [C.a, [2, _.a], [2, o.a], c.a],
              null,
              null,
            ),
            i.xb(
              4,
              147456,
              null,
              0,
              M.a,
              [Y.a, i.h, c.a, [3, M.a]],
              { disabled: [0, "disabled"], showReason: [1, "showReason"] },
              { tap: "mib3DisabledTap" },
            ),
            i.xb(
              5,
              212992,
              null,
              0,
              y.a,
              [
                c.a,
                A.b,
                v.a,
                [2, _.a],
                [2, o.a],
                [2, M.a],
                [2, S.a],
                [2, N.a],
                i.z,
                I.a,
                i.l,
                [2, L.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.xb(
              6,
              212992,
              null,
              0,
              q.a,
              [
                c.a,
                i.z,
                i.l,
                A.b,
                I.a,
                v.a,
                [2, _.a],
                [2, o.a],
                [2, M.a],
                [2, S.a],
                [2, N.a],
                [2, L.a],
              ],
              null,
              { longpress: "mib3Longpress" },
            ),
            i.Sb(131584, null, E.a, E.a, [[3, E.a]]),
            i.xb(
              8,
              4407296,
              null,
              0,
              k.a,
              [
                i.l,
                T.a,
                i.h,
                E.a,
                [2, w.a],
                [2, _.b],
                [2, _.a],
                [2, $.a],
                [2, D.a],
              ],
              null,
              null,
            ),
            i.xb(
              9,
              16384,
              null,
              0,
              U.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
            i.xb(
              10,
              212992,
              null,
              0,
              Z.a,
              [[2, y.a], [8, null], [3, Z.a], i.l, i.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            i.xb(
              11,
              147456,
              null,
              0,
              Q.a,
              [[2, q.a], i.l, G.a, H.b],
              null,
              null,
            ),
            i.xb(
              12,
              147456,
              null,
              0,
              V.a,
              [[2, y.a], [2, M.a], [2, j.a], [2, k.a], [2, z.b], i.l, G.a, H.b],
              null,
              null,
            ),
            i.xb(
              13,
              147456,
              null,
              0,
              B.a,
              [[2, k.a], [2, y.a], [2, A.b], F.a],
              null,
              null,
            ),
            i.xb(
              14,
              16384,
              null,
              0,
              W.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
            (t()(), i.hb(16777216, [[2, 2]], null, 1, null, Pt)),
            i.xb(
              16,
              16384,
              null,
              0,
              O.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(),
            i.yb(
              17,
              0,
              null,
              null,
              3,
              "div",
              [["class", "list-item__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), i.hb(16777216, [[2, 2]], null, 1, null, xt)),
            i.xb(
              19,
              16384,
              null,
              0,
              O.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(),
            i.hb(
              0,
              [
                [2, 2],
                ["mailbox", 2],
              ],
              null,
              0,
              null,
              Ct,
            )),
            (t()(), i.hb(16777216, [[2, 2]], null, 1, null, vt)),
            i.xb(
              22,
              16384,
              null,
              0,
              O.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 4, 0, !n.isValidContact(e.context.$implicit), !1),
              t(e, 5, 0),
              t(e, 6, 0),
              t(e, 8, 0),
              t(
                e,
                9,
                0,
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.isRecommended,
              ),
              t(e, 10, 0, n.uiStateType),
              t(
                e,
                14,
                0,
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.isRecommended,
              ),
              t(e, 16, 0, n.showIcons),
              t(
                e,
                19,
                0,
                !(null != e.context.$implicit && e.context.$implicit.isMailbox),
                i.Nb(e, 20),
              ),
              t(
                e,
                22,
                0,
                n.editMode &&
                  (null == e.context.$implicit ||
                  null == e.context.$implicit.contactObject
                    ? null
                    : e.context.$implicit.contactObject.isDeletable),
              ));
          },
          function (t, e) {
            t(e, 1, 1, [
              i.Nb(e, 4).combinedDisabled,
              i.Nb(e, 4).useBrighterIcon,
              i.Nb(e, 8).markerClassEnabled,
              i.Nb(e, 9).mib3Active,
              i.Nb(e, 10).uiStateListHorizontal,
              i.Nb(e, 10).uiStateListVertical,
              i.Nb(e, 10).uiStateCoverLeft,
              i.Nb(e, 10).uiStateCoverRight,
              i.Nb(e, 10).uiStateCoverBottom,
              i.Nb(e, 10).uiStateButton,
              i.Nb(e, 10).uiStateByDabLeft,
              i.Nb(e, 10).uiStateByDabRight,
              i.Nb(e, 10).uiStateLbDabLeft,
              i.Nb(e, 10).uiStateLbDabRight,
              i.Nb(e, 14).mib3Active,
            ]);
          },
        );
      }
      function yt(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              17,
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
              16384,
              null,
              0,
              O.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, mt)),
            i.xb(
              3,
              278528,
              null,
              0,
              O.p,
              [i.P, i.L, O.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, ft)),
            i.xb(
              5,
              278528,
              null,
              0,
              O.p,
              [i.P, i.L, O.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(),
            i.yb(
              6,
              0,
              null,
              null,
              11,
              "au3-list",
              [
                ["au3ListDomPaging", ""],
                ["class", "contacts-list"],
                ["id", ""],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              X.b,
              X.a,
            )),
            i.Sb(6144, null, J.a, null, [K.a]),
            i.xb(
              8,
              278528,
              null,
              0,
              O.n,
              [i.l, i.t, i.D],
              { ngStyle: [0, "ngStyle"] },
              null,
            ),
            i.Qb(9, { opacity: 0 }),
            i.xb(
              10,
              212992,
              null,
              0,
              o.a,
              [i.l, i.D, r.a, c.a, [3, o.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(11, 16384, null, 0, tt.a, [i.l], null, null),
            i.xb(
              12,
              16384,
              null,
              0,
              et.a,
              [c.a],
              { itemHeightGuess: [0, "itemHeightGuess"] },
              null,
            ),
            i.xb(
              13,
              12828672,
              [[1, 4]],
              1,
              K.a,
              [
                [2, et.a],
                [2, nt.a],
                [8, null],
                [2, o.a],
                [2, it.a],
                [2, lt.a],
                [2, A.b],
                at.i,
                i.z,
                i.h,
                c.a,
                st.a,
                ot.a,
                [2, T.a],
                _.a,
                [2, at.a],
              ],
              {
                itemHeightGuess: [0, "itemHeightGuess"],
                defaultTemplate: [1, "defaultTemplate"],
                lineNumbers: [2, "lineNumbers"],
                items: [3, "items"],
              },
              null,
            ),
            i.Tb(603979776, 2, { template: 0 }),
            i.xb(
              15,
              212992,
              null,
              0,
              rt.a,
              [[4, K.a], [2, ct.a], ut.a, bt.b, c.a],
              { lineNumbers: [0, "lineNumbers"] },
              null,
            ),
            i.xb(
              16,
              4341760,
              null,
              0,
              dt.a,
              [bt.b, [4, K.a], c.a, [2, ht.b]],
              {
                defaultDisplayElementReferenceType: [
                  0,
                  "defaultDisplayElementReferenceType",
                ],
                lineNumbers: [1, "lineNumbers"],
              },
              null,
            ),
            (t()(),
            i.hb(
              0,
              [
                [2, 2],
                ["wuseldusel", 2],
              ],
              0,
              0,
              null,
              _t,
            )),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, e.context.mib3Let),
              t(e, 3, 0, n.addressbookViewStateEnum.LOADING),
              t(e, 5, 0, n.addressbookViewStateEnum.NO_CONTACTS_AVAILABLE));
            var l = t(
              e,
              9,
              0,
              n.isListVisibleForState(e.context.mib3Let) ? 1 : 0,
            );
            (t(e, 8, 0, l),
              t(e, 10, 0, ""),
              t(e, 12, 0, n.listItemHeightGuess),
              t(
                e,
                13,
                0,
                n.listItemHeightGuess,
                i.Nb(e, 17),
                n.forSds,
                n.contacts,
              ),
              t(e, 15, 0, n.forSds),
              t(e, 16, 0, n.sdsListReferenceType, n.forSds));
          },
          function (t, e) {
            t(e, 6, 0, i.Nb(e, 13).showLineNumbers);
          },
        );
      }
      function At(t) {
        return i.ac(
          0,
          [
            i.Tb(671088640, 1, { listComponent: 1 }),
            (t()(), i.hb(16777216, null, null, 2, null, yt)),
            i.xb(
              2,
              16384,
              null,
              0,
              gt.a,
              [i.L, i.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            i.Pb(131072, O.b, [i.h]),
          ],
          function (t, e) {
            var n = e.component;
            t(
              e,
              2,
              0,
              i.Yb(e, 2, 0, i.Nb(e, 3).transform(n.addressbookViewState$)),
            );
          },
          null,
        );
      }
    },
    VWff: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return d;
      });
      var i = n("Yi6/"),
        l = n("kuMc"),
        a = n("xVbo"),
        s = n("YtkY"),
        o = n("jIqt"),
        r = n("0Woy"),
        c = n("qMQG"),
        u = n("hHAo"),
        b = n("QQZH");
      class d {
        constructor(t, e, n, l) {
          ((this.mainPerceivableContextService = t),
            (this.list = e),
            (this.popupComponent = l),
            (this.updateDisplayElements = !1),
            (this.lineNumbers = !1),
            (this.staticItems = []),
            (this.items = []),
            (this.destroy$$ = new b.a(1)),
            (this.logger = n.getLogger("speech.DisplayElementsDirective")),
            (this.context = Object(i.wd)(l) ? u.a.Popup : u.a.Screen));
        }
        set staticDisplayElements(t) {
          ((this.staticItems = t || []),
            this.updateVisibleItems(t, this.items));
        }
        ngAfterViewInit() {
          (this.updateDisplayElements || this.lineNumbers) &&
            (this.list.scrolling$
              .pipe(Object(l.a)(this.destroy$$))
              .subscribe((t) => {
                (this.mainPerceivableContextService.updateMainDisplay({
                  scrollingActive: t,
                }),
                  t &&
                    this.mainPerceivableContextService.updateDisplayElements(
                      [],
                      this.context,
                    ));
              }),
            this.list.itemsWithLineNumbers$
              .pipe(
                Object(a.a)((t) => t.length > 0),
                Object(s.a)((t) =>
                  t.map((t) => this.prepareListItemReferenceData(t)),
                ),
                Object(o.a)([]),
                Object(r.a)(),
                Object(a.a)(
                  ([t, e]) =>
                    t.length !== e.length ||
                    t.some(
                      (t, n) =>
                        t.item.referenceId !== e[n].item.referenceId ||
                        t.item.id !== e[n].item.id,
                    ),
                ),
                Object(s.a)(([t, e]) => e),
                Object(l.a)(this.destroy$$),
              )
              .subscribe((t) => {
                ((this.items = t),
                  this.updateVisibleItems(this.staticItems, t));
              }));
        }
        ngOnDestroy() {
          (this.destroy$$.next(),
            this.mainPerceivableContextService.clearContext(this.context));
        }
        prepareListItemReferenceData(t) {
          if (!t.item)
            return (
              this.logger.error(
                "prepareListItemReferenceData: Invalid visibleItem! visibleItem.item is null: ",
                t,
              ),
              t
            );
          const e = Object.assign({}, t);
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
        updateVisibleItems(t, e) {
          (this.logger.info("updateVisibleItems: staticItems: ", t),
            this.logger.info("updateVisibleItems: items: ", e));
          const n = [...t.map((t) => ({ item: t, index: -1 })), ...e];
          this.mainPerceivableContextService.updateVisibleItems(
            n,
            this.context,
          );
        }
      }
    },
    pqkN: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      var i = n("XY/Y"),
        l = (n("Yi6/"), n("kZht")),
        a = n("yNay");
      let s = (() => {
        class t {
          constructor(t) {
            this.logger = t.getLogger("addressbook.ContactValidationService");
          }
          isContactValid(t, e) {
            if (!t)
              return (
                this.logger.warn(
                  "isContactValid: contactObject is not valid",
                  t,
                ),
                !1
              );
            switch (e) {
              case i.b.PHONE:
                return !!t.phoneNumberList && t.phoneNumberList.length > 0;
              case i.b.EMAIL:
                return !!t.emailList && t.emailList.length > 0;
              case i.b.NAVIGATION:
                let e = !1;
                return (
                  t.addressList &&
                    t.addressList.length > 0 &&
                    (e =
                      t.addressList.filter(
                        (t) => t.street || t.zipCode || t.city,
                      ).length > 0),
                  e
                );
              default:
                return !0;
            }
          }
        }
        return (
          (t.ɵprov = l.bc({
            factory: function () {
              return new t(l.cc(a.a));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
  },
]);
