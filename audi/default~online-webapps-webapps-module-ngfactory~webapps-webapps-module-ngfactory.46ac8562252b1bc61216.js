(window.webpackJsonp = window.webpackJsonp || []).push([
  [56],
  {
    "1fVR": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return h;
      });
      var l = n("xVbo"),
        i = n("TLy2"),
        a = n("YtkY"),
        o = n("kuMc"),
        r = n("jOdJ"),
        u = n("QQZH"),
        s = n("ROBh"),
        c = n("8lHc"),
        b = n("HM3f"),
        p = n("H4ln"),
        d = n("Yi6/");
      n("dr0G");
      class h {
        constructor(e, t) {
          ((this.privacyService = e),
            (this.routingService = t),
            (this.privacyWaitingSecondaryTitle = p.f),
            (this.privacyWaitingPrimaryTitle = p.e),
            (this.textToolMode = d.gd.textToolMode),
            (this.destroy$$ = new u.a(1)),
            (this.queryParams$ = this.privacyService.waitingScreenData$.pipe(
              Object(l.a)(d.wd),
            )));
        }
        ngOnInit() {
          this.initContinue();
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        initContinue() {
          const e = this.queryParams$.pipe(
              Object(i.a)((e) =>
                e
                  ? e.continue$
                    ? e.continue$
                    : this.privacyService.privacyChanging$.pipe(
                        Object(a.a)((e) => !e),
                      )
                  : Object(s.a)(!1),
              ),
              Object(l.a)((e) => e),
              Object(o.a)(this.destroy$$),
            ),
            t = this.queryParams$.pipe(
              Object(i.a)((e) =>
                e
                  ? !e.continueForwardToTargetScreen$ && e.onlineServiceName$
                    ? e.onlineServiceName$.pipe(
                        Object(i.a)((e) =>
                          this.privacyService.getOnlineServiceDisabled$(e),
                        ),
                      )
                    : e.continueForwardToTargetScreen$
                      ? e.continueForwardToTargetScreen$
                      : Object(s.a)(!0)
                  : Object(s.a)(!0),
              ),
              Object(o.a)(this.destroy$$),
            );
          Object(c.a)(5e3)
            .pipe(
              Object(i.a)(() => e),
              Object(i.a)(() => Object(b.b)(this.queryParams$, t)),
              Object(r.a)(),
              Object(o.a)(this.destroy$$),
            )
            .subscribe(([e, t]) => {
              t && e.backRoute ? this.gotToContinueRoute(e) : this.back();
            });
        }
        gotToContinueRoute(e) {
          e.forwardRoute$
            .pipe(Object(r.a)(), Object(o.a)(this.destroy$$))
            .subscribe((t) => {
              e.routingService
                ? e.routingService.goTo(t)
                : this.routingService.goTo(t);
            });
        }
        back() {
          this.queryParams$
            .pipe(Object(r.a)(), Object(o.a)(this.destroy$$))
            .subscribe((e) => {
              e.routingService
                ? e.routingService.goTo(e.backRoute)
                : this.routingService.goTo(e.backRoute);
            });
        }
      }
    },
    "4XZL": function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return y;
      }),
        n.d(t, "b", function () {
          return C;
        }));
      var l = n("kZht"),
        i = n("Xl9s"),
        a = n("fu7d"),
        o = n("bou3"),
        r = n("yNay"),
        u = n("IPO3"),
        s = n("An66"),
        c = n("8TlW"),
        b = n("ijxY"),
        p = n("Xo58"),
        d = n("m3Ja"),
        h = n("r+e+"),
        m = n("bmFL"),
        g = n("HVUF"),
        x = n("B3Zb"),
        f = n("Ps6X"),
        v = n("6zvu"),
        O = n("OJ7R"),
        y =
          (n("URLa"),
          l.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:flex;position:relative;padding:0 20px}.list-route-item-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%}.list-item__text-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%]{margin-right:30px}.component-layout-latin[_nghost-%COMP%]   .list-item__icon--end[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list-item__icon--end[_ngcontent-%COMP%]{margin-left:30px;transform:scaleX(1)}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%]{margin-left:30px}.component-layout-arabic[_nghost-%COMP%]   .list-item__icon--end[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list-item__icon--end[_ngcontent-%COMP%]{margin-right:30px;transform:scaleX(-1)}.fpk-stage-small[_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%]{display:none}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.list-item__text[_ngcontent-%COMP%]{flex:1 1 auto}.list-item__text--small[_ngcontent-%COMP%]{flex:1 1 auto;font-size:30px}',
              ],
            ],
            data: {},
          }));
      function S(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon-with-overlay",
              [
                ["class", "list-item__icon--begin"],
                ["id", "list-item__icon--begin"],
              ],
              null,
              null,
              null,
              i.b,
              i.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, o.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              u.a,
              [],
              {
                overlayFileName: [0, "overlayFileName"],
                fallbackFileName: [1, "fallbackFileName"],
                fileName: [2, "fileName"],
                category: [3, "category"],
                iconContext: [4, "iconContext"],
              },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, "list-item__icon--begin"),
              e(
                t,
                2,
                0,
                n.iconOverlay,
                n.iconFallback,
                n.icon,
                n.listBeginIconCategory,
                n.iconContext,
              ));
          },
          null,
        );
      }
      function T(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
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
            (e()(), l.hb(16777216, null, null, 1, null, S)),
            l.xb(
              2,
              16384,
              null,
              0,
              s.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), l.hb(0, null, null, 0)),
          ],
          function (e, t) {
            var n = t.component;
            e(t, 2, 0, n.icon || n.iconFallback);
          },
          null,
        );
      }
      function I(e) {
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
              "au3-i18n-label",
              [
                ["class", "list-item__text--small"],
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
              c.b,
              c.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, o.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            l.xb(
              2,
              16384,
              null,
              0,
              b.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            l.xb(
              3,
              245760,
              null,
              0,
              p.a,
              [[6, a.a], d.a, l.h, l.l, l.D, [2, h.a], [2, b.a], [2, m.a]],
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
            (e(
              t,
              1,
              0,
              n.subtitleTextId
                ? n.subtitleTextId
                : "ListRouteItemSecondaryText",
              n.subtitleTextIdEnum,
            ),
              e(
                t,
                2,
                0,
                !n.hasSubtitle ||
                  !(n.subtitleDeveloperText || n.subtitleTextIdEnum),
              ),
              e(
                t,
                3,
                0,
                n.subtitleDeveloperText,
                n.subtitleTextId
                  ? n.subtitleTextId
                  : "ListRouteItemSecondaryText",
                1,
                n.subtitleNonI18nText,
              ));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              l.Nb(t, 3).backgroundColor,
              l.Nb(t, 3).fixedNumberOfLines,
              l.Nb(t, 3).mayContainLatinCharsForArabic,
              l.Nb(t, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function N(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon",
              [],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              g.b,
              g.a,
            )),
            l.xb(
              1,
              278528,
              null,
              0,
              s.i,
              [l.s, l.t, l.l, l.D],
              { ngClass: [0, "ngClass"] },
              null,
            ),
            l.xb(
              2,
              4243456,
              null,
              0,
              x.b,
              [r.a, l.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(
              t,
              1,
              0,
              n.doNotInvertIconInArabic
                ? "list-item__icon--end-not-inverted"
                : "list-item__icon--end",
            ),
              e(t, 2, 0, n.endIconFileName, n.listEndIconCategory));
          },
          function (e, t) {
            e(t, 0, 0, l.Nb(t, 2).iconComponentHidden);
          },
        );
      }
      function C(e) {
        return l.ac(
          2,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              12,
              "div",
              [["class", "list-route-item-container"]],
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
              f.a,
              [[2, v.a], [8, null], [3, f.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (e()(), l.hb(16777216, null, null, 1, null, T)),
            l.xb(
              3,
              540672,
              null,
              0,
              O.a,
              [r.a, l.P, l.L],
              { ttStaticIf: [0, "ttStaticIf"] },
              null,
            ),
            (e()(),
            l.yb(
              4,
              0,
              null,
              null,
              6,
              "div",
              [["class", "list-item__text-container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            l.yb(
              5,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "list-item__text"],
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
              c.b,
              c.a,
            )),
            l.xb(
              6,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, o.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            l.xb(
              7,
              16384,
              null,
              0,
              b.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            l.xb(
              8,
              245760,
              null,
              0,
              p.a,
              [[6, a.a], d.a, l.h, l.l, l.D, [2, h.a], [2, b.a], [2, m.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            (e()(), l.hb(16777216, null, null, 1, null, I)),
            l.xb(
              10,
              16384,
              null,
              0,
              s.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), l.hb(16777216, null, null, 1, null, N)),
            l.xb(
              12,
              540672,
              null,
              0,
              O.a,
              [r.a, l.P, l.L],
              { ttStaticIf: [0, "ttStaticIf"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, n.uiStateType),
              e(t, 3, 0, !n.iconStatic || n.icon || n.iconFallback),
              e(
                t,
                6,
                0,
                n.titleTextId ? n.titleTextId : "ListRouteItemText",
                n.titleTextIdEnum,
              ),
              e(t, 7, 0, !(n.titleDeveloperText || n.titleTextIdEnum)),
              e(
                t,
                8,
                0,
                n.titleDeveloperText,
                n.titleTextId ? n.titleTextId : "ListRouteItemText",
                1,
                n.titleNonI18nText,
              ),
              e(t, 10, 0, n.hasSubtitle),
              e(t, 12, 0, n.hasEndIcon));
          },
          function (e, t) {
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
                5,
                0,
                l.Nb(t, 8).backgroundColor,
                l.Nb(t, 8).fixedNumberOfLines,
                l.Nb(t, 8).mayContainLatinCharsForArabic,
                l.Nb(t, 8).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
    },
    Xl9s: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return c;
      }),
        n.d(t, "b", function () {
          return p;
        }));
      var l = n("kZht"),
        i = n("HVUF"),
        a = n("B3Zb"),
        o = n("yNay"),
        r = n("EOxa"),
        u = n("Kds7"),
        s = n("An66"),
        c =
          (n("IPO3"),
          l.wb({
            encapsulation: 0,
            styles: [
              [
                ".icon__content[_ngcontent-%COMP%], [_nghost-%COMP%]{position:relative}.icon__overlay-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0}",
              ],
            ],
            data: {},
          }));
      function b(e) {
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
              "au3-icon",
              [["class", "icon__overlay-content"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              i.b,
              i.a,
            )),
            l.xb(
              1,
              4243456,
              null,
              0,
              a.b,
              [o.a, l.z],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                scaleMode: [2, "scaleMode"],
                blocksRouting: [3, "blocksRouting"],
                ignoreCategorySize: [4, "ignoreCategorySize"],
              },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            e(
              t,
              1,
              0,
              n.overlayFileName,
              n.category,
              n.scaleMode,
              n.blocksRouting,
              n.ignoreCategorySize,
            );
          },
          function (e, t) {
            e(t, 0, 0, l.Nb(t, 1).iconComponentHidden);
          },
        );
      }
      function p(e) {
        return l.ac(
          2,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon-with-fallback",
              [["class", "icon__content"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              r.b,
              r.a,
            )),
            l.xb(
              1,
              4964352,
              null,
              0,
              u.a,
              [l.h, l.z, o.a],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                scaleMode: [2, "scaleMode"],
                blocksRouting: [3, "blocksRouting"],
                iconContext: [4, "iconContext"],
                ignoreCategorySize: [5, "ignoreCategorySize"],
                queryIconWidth: [6, "queryIconWidth"],
                queryIconHeight: [7, "queryIconHeight"],
                fallbackFileName: [8, "fallbackFileName"],
              },
              null,
            ),
            (e()(), l.hb(16777216, null, null, 1, null, b)),
            l.xb(
              3,
              16384,
              null,
              0,
              s.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(
              t,
              1,
              0,
              n.fileName,
              n.category,
              n.scaleMode,
              n.blocksRouting,
              n.iconContext,
              n.ignoreCategorySize,
              n.queryIconWidth,
              n.queryIconHeight,
              n.fallbackFileName,
            ),
              e(t, 3, 0, !!n.overlayFileName));
          },
          function (e, t) {
            e(t, 0, 0, l.Nb(t, 1).iconComponentHidden);
          },
        );
      }
    },
    "g+oZ": function (e, t, n) {
      "use strict";
      (n.r(t),
        n.d(t, "WebappsModuleNgFactory", function () {
          return Jl;
        }));
      var l = n("kZht"),
        i = n("D57K"),
        a = n("QQZH"),
        o = n("C05f"),
        r = n("ZTXN"),
        u = n("HM3f"),
        s = n("ROBh"),
        c = n("rYDR"),
        b = n("8lHc"),
        p = n("YtkY"),
        d = n("mWib"),
        h = n("jIqt"),
        m = n("kuMc"),
        g = n("TLy2"),
        x = n("xVbo"),
        f = n("Ohay"),
        v = n("8j5Y"),
        O = n("w0kG"),
        y = n("J+dc"),
        S = n("BwBJ"),
        T = n("Yi6/"),
        I = n("nApC"),
        N = n("PZqU"),
        C = n("ZoWL"),
        L = n("DVQt"),
        P = n("pAv0"),
        _ = n("KjH8"),
        E = n("l5vA"),
        $ = n("ybXq"),
        M = n("P1io"),
        R = n("Q/h1"),
        k = n("8lto"),
        D = n("H+9d"),
        w = n("MzQn"),
        j = n("g+js"),
        A = n("AfGm"),
        B = (function (e) {
          return (
            (e.TimerStarted = "TimerStarted"),
            (e.MinTimeExpired = "MinTimeExpired"),
            (e.MaxTimeExpired = "MaxTimeExpired"),
            e
          );
        })({});
      let W = (() => {
        class e {
          constructor(e, t, n, l, i, s, c, b, h, m, g, x, f, v, O) {
            ((this.onlineRoutingService = e),
              (this.globalRoutingService = t),
              (this.webappService = n),
              (this.iframeService = l),
              (this.locationService = i),
              (this.notificationService = s),
              (this.documentPointerService = c),
              (this.entrypointService = b),
              (this.inputRegionsService = h),
              (this.displayService = m),
              (this.postMessageService = g),
              (this.activatedRoute = x),
              (this.clampService = f),
              (this.licenseService = v),
              (this.minTimeToShowLoadingScreenMS = 3e3),
              (this.maxTimeToShowLoadingScreenMS = 42e3),
              (this.destroy$$ = new a.a(1)),
              (this.activeIframe$$ = new o.a(null)),
              (this.showLoadingScreen$$ = new o.a(!0)),
              (this.loadingScreenTimerStatus$$ = new o.a(B.TimerStarted)),
              (this.activeIframe$ = this.activeIframe$$.pipe(Object(T.Kd)())),
              (this.showLoadingScreen$ = this.showLoadingScreen$$.pipe(
                Object(T.Kd)(),
              )),
              (this.loadingScreenTimerStatus$ =
                this.loadingScreenTimerStatus$$.pipe(Object(T.Kd)())),
              (this.activeUsages = new Map()),
              (this.entrypointChanged$$ = new r.a()),
              (this.isLoading$ = Object(u.b)(
                this.showLoadingScreen$,
                this.loadingScreenTimerStatus$,
              ).pipe(Object(p.a)(([e, t]) => !!e || t === B.TimerStarted))),
              (this.logger = O.getLogger("online.WebAppComponent")),
              (this.overrideContext$ = this.getOverrideContext$()),
              (this.activeLocation$ = this.getActiveLocation$()),
              (this.activeEntrypoint$ = this.getActiveEntrypoint$()),
              (this.activeWebapp$ = this.getActiveWebapp$()),
              (this.webappName$ = this.activeEntrypoint$.pipe(
                Object(p.a)((e) => (!!e && e.sourceEntrypoint.name) || ""),
                Object(d.a)(50),
              )),
              (this.enteredAsIncludeWebapp = !e.isContextActive));
          }
          ngAfterViewInit() {
            (this.onlineRoutingService.setWebappScreenActive(!0),
              this.setInitialLocationFromAppContext(),
              this.showDisclaimerNotification(),
              this.subscribeOnRoutingLocation(),
              this.subscribeOnEntrypointDisableReasons(),
              this.susbcribeOnActiveEntrypointChanged(),
              this.subscribeOnWebappState(),
              this.subscribeOnIframeState(),
              this.subscribeOnLoadingBehaviorTimers(),
              this.subscribeOnLoadingScreenRemoval(),
              this.subscribeOnIframeSubcomponentId(),
              this.subscribeOnHapticOriginRequest(),
              this.subscribeOnLogbookState());
          }
          ngOnDestroy() {
            (this.logger.info("ngOnDestroy"),
              this.cleanupApp(),
              this.notificationService.notificationExists(
                E.a.CONNECT_DISCLAIMER,
              ) &&
                this.notificationService.removeNotification(
                  E.a.CONNECT_DISCLAIMER,
                ),
              this.subComponentId
                ? (this.logger.info(
                    "ngOnDestroy: cleanup iFrame for subComponentId",
                    this.subComponentId,
                  ),
                  this.clearInputAndHapticRegionsForSubcomponent(
                    this.subComponentId,
                  ))
                : (this.logger.info(
                    "ngOnDestroy: no subComponentId available for iframe",
                  ),
                  this.clearSubcomponentHapticRegionsForHMI()),
              this.documentPointerService.initLastFingerReleased(),
              this.onlineRoutingService.setWebappScreenActive(!1),
              this.callDestroyUrl()
                .then(() => {
                  (this.destroy$$.next(), this.destroy$$.complete());
                })
                .catch(() => {
                  (this.destroy$$.next(), this.destroy$$.complete());
                }));
          }
          setInitialLocationFromAppContext() {
            const e = this.locationService.getAppContextLocation();
            e && this.locationService.setLocation(e);
          }
          showDisclaimerNotification() {
            T.gd.textToolMode ||
              this.notificationService.requestNotification(
                {
                  type: E.a.CONNECT_DISCLAIMER,
                  id: E.a.CONNECT_DISCLAIMER,
                  sticky: !0,
                  smallIcon: "E848_connect_notify_discplaimer.webp",
                },
                !1,
              );
          }
          getOverrideContext$() {
            return this.activatedRoute.queryParams.pipe(
              Object(p.a)((e) => (!!e && e.overrideContext) || null),
              Object(h.a)(null),
              Object(T.Kd)(),
              Object(m.a)(this.destroy$$),
            );
          }
          getActiveLocation$() {
            return this.locationService.location$.pipe(
              Object(h.a)(null),
              Object(T.Kd)(),
              Object(m.a)(this.destroy$$),
            );
          }
          getActiveEntrypoint$() {
            return this.activeLocation$.pipe(
              Object(p.a)((e) => e && e.activeEntrypoint),
              Object(g.a)((e) => {
                if (
                  (this.logger.info(
                    "getActiveEntrypoint$: received entrypoint from location: ",
                    e,
                  ),
                  !e || !e.tag)
                )
                  return Object(s.a)(null);
                const t = Object.values(D.b).find((t) => t === e.tag);
                return t
                  ? this.entrypointService
                      .entryPointsForTag$(t)
                      .pipe(
                        Object(p.a)(
                          (t) =>
                            t.find(
                              (t) => t && t.sourceEntrypoint.id === e.id,
                            ) || null,
                        ),
                      )
                  : Object(s.a)(null);
              }),
              Object(h.a)(null),
              Object(T.Kd)(),
              Object(m.a)(this.destroy$$),
            );
          }
          subscribeOnEntrypointDisableReasons() {
            const e = this.activeWebapp$.pipe(
              Object(T.fd)("serviceId"),
              Object(g.a)((e) =>
                e && e.serviceId
                  ? this.licenseService.service$(e.serviceId)
                  : c.a,
              ),
              Object(h.a)(null),
            );
            Object(u.b)(
              this.activeEntrypoint$,
              e,
              this.loadingScreenTimerStatus$,
            )
              .pipe(Object(m.a)(this.destroy$$))
              .subscribe(([e, t, n]) => {
                if (
                  (this.logger.info(
                    "subscribeOnEntrypointDisableReasons: received app data: ",
                    { appEntrypoint: e, appService: t, loadingScreenState: n },
                  ),
                  n !== B.TimerStarted)
                )
                  if (
                    Object(T.wd)(t) &&
                    Object(T.wd)(t.disableReasons) &&
                    t.disableReasons.includes(N.b.NoActiveLicense)
                  ) {
                    this.logger.info(
                      "subscribeOnEntrypointDisableReasons: app has no active license.",
                    );
                    const n = (Object(T.wd)(e) && e.title) || t.name,
                      l = {
                        navigationExtras: {
                          queryParams: {
                            [$.a.ServiceName]: n,
                            [$.a.ServiceId]: t.name,
                          },
                        },
                      };
                    this.globalRoutingService.goTo(
                      this.getLicenseRoute(),
                      void 0,
                      l,
                    );
                  } else
                    Object(T.wd)(e) &&
                      Object(T.wd)(e.disableReason) &&
                      (this.logger.warn(
                        "subscribeOnEntrypointDisableReasons: trying to enter a webapp without valid AppEntrypoint: ",
                        {
                          ep: e,
                          targetRoute:
                            this.globalRoutingService.activeAppContextSnapshot +
                            ", " +
                            this.getErrorRoute().path,
                        },
                      ),
                      this.globalRoutingService.goTo(this.getErrorRoute()));
                else
                  this.logger.info(
                    "subscribeOnEntrypointDisableReasons: loading timer still during minimum time... ignoring service state.",
                  );
              });
          }
          getActiveWebapp$() {
            return this.activeEntrypoint$.pipe(
              Object(x.a)(T.wd),
              Object(f.a)((e, t) => (!!e && e.id) === (!!t && t.id)),
              Object(g.a)((e) =>
                e && e.sourceEntrypoint && e.sourceEntrypoint.app
                  ? this.webappService.webApp$(e.sourceEntrypoint.app.id)
                  : Object(s.a)(null),
              ),
              Object(T.pd)(
                this.logger,
                "getActiveWebapp$: received update for active webapp = ",
              ),
              Object(h.a)(null),
              Object(T.Kd)(),
              Object(m.a)(this.destroy$$),
            );
          }
          susbcribeOnActiveEntrypointChanged() {
            this.activeEntrypoint$
              .pipe(
                Object(f.a)((e, t) => (!!e && e.id) === (!!t && t.id)),
                Object(x.a)(
                  (e) =>
                    !!e && !!e.sourceEntrypoint && !!e.sourceEntrypoint.app,
                ),
                Object(m.a)(this.destroy$$),
              )
              .subscribe((e) => {
                (this.logger.info(
                  "susbcribeOnActiveEntrypointChanged: active entrypoint changed.",
                ),
                  this.showLoadingScreen$$.next(!1),
                  this.showLoadingScreen$$.next(!0),
                  this.entrypointChanged$$.next(),
                  this.cleanupApp(),
                  this.startWebapp(e.sourceEntrypoint.app));
              });
          }
          subscribeOnWebappState() {
            this.activeWebapp$
              .pipe(Object(x.a)(T.wd), Object(m.a)(this.destroy$$))
              .subscribe((e) => {
                if (!e.state)
                  return (
                    this.logger.error(
                      "subscribeOnWebappState: active webapp has no state.",
                    ),
                    void this.globalRoutingService.goTo(this.getErrorRoute())
                  );
                switch (e.state) {
                  case I.b.RUNNING:
                    (this.logger.info(
                      "subscribeOnWebappState: active webapp is in state RUNNING.",
                    ),
                      this.activeIframe$$.getValue() ||
                        (this.logger.info(
                          "subscribeOnWebappState: loading iframe.",
                        ),
                        this.loadWebappIframe()));
                    break;
                  case I.b.ERROR:
                    (this.logger.error(
                      "subscribeOnWebappState: active webapp is in state error.",
                    ),
                      this.globalRoutingService.goTo(this.getErrorRoute()));
                    break;
                  default:
                    (this.logger.info(
                      "subscribeOnWebappState: active webapp is not RUNNING, show loading screen.",
                    ),
                      this.showLoadingScreen$$.next(!0));
                    const e = this.activeIframe$$.getValue();
                    (e &&
                      e.frame &&
                      (e.frame.remove(), this.activeIframe$$.next(null)),
                      this.subComponentId &&
                        (this.clearInputAndHapticRegionsForSubcomponent(
                          this.subComponentId,
                        ),
                        this.callDestroyUrl()));
                }
              });
          }
          subscribeOnIframeState() {
            this.activeIframe$
              .pipe(Object(x.a)(T.wd), Object(m.a)(this.destroy$$))
              .subscribe((e) => {
                (this.logger.info(
                  "subscribeOnIframeState: received iframe update =",
                  JSON.stringify(e, Object(T.ld)()),
                ),
                  e.state === L.a.READY &&
                    (this.logger.info(
                      "subscribeOnIframeState: iframe ready. Showing webapp content.",
                    ),
                    this.showLoadingScreen$$.next(!1)),
                  e.state === L.a.URL_VALIDATION_FAILED &&
                    (this.logger.info(
                      "subscribeOnIframeState: failed to verify URL of iframe.",
                    ),
                    this.globalRoutingService.goTo(this.getErrorRoute())),
                  e.state === L.a.ERROR &&
                    (this.logger.info(
                      "subscribeOnIframeState: iframe failed to load.",
                    ),
                    this.globalRoutingService.goTo(this.getErrorRoute())));
              });
          }
          subscribeOnLoadingBehaviorTimers() {
            const e = this.showLoadingScreen$.pipe(
                Object(f.a)(),
                Object(x.a)((e) => e),
                Object(v.a)(() => {
                  (this.logger.info(
                    "subscribeOnLoadingBehaviorTimers: loading screen requested, starting minimum timer",
                  ),
                    this.loadingScreenTimerStatus$$.next(B.TimerStarted));
                }),
                Object(g.a)(() =>
                  Object(b.a)(this.minTimeToShowLoadingScreenMS),
                ),
                Object(T.Kd)(),
              ),
              t = e.pipe(
                Object(g.a)(() => this.activeIframe$),
                Object(x.a)((e) => e && e.state === L.a.READY),
                Object(T.pd)(
                  this.logger,
                  "subscribeOnLoadingBehaviorTimers: iframe loading successful, stop maximum loading timer.",
                  !1,
                ),
                Object(T.Kd)(),
              );
            t.pipe(Object(m.a)(this.destroy$$)).subscribe(() => {
              (this.iframeService.triggerGCImmediately(),
                setTimeout(() => {
                  this.iframeService.triggerGCImmediately();
                }, 2e3));
            });
            const n = e.pipe(
              Object(g.a)(
                () => (
                  this.logger.info(
                    "subscribeOnLoadingBehaviorTimers: minimum timer expired, starting timer for maximum loading time.",
                  ),
                  Object(b.a)(
                    this.maxTimeToShowLoadingScreenMS -
                      this.minTimeToShowLoadingScreenMS,
                  ).pipe(Object(m.a)(t))
                ),
              ),
              Object(T.Kd)(),
            );
            (e.pipe(Object(m.a)(this.destroy$$)).subscribe(() => {
              (this.logger.info(
                "subscribeOnLoadingBehaviorTimers: minimum time expired, allowing loading screen removal",
              ),
                this.loadingScreenTimerStatus$$.next(B.MinTimeExpired));
            }),
              n.pipe(Object(m.a)(this.destroy$$)).subscribe(() => {
                (this.logger.info(
                  "subscribeOnLoadingBehaviorTimers: max loading time expired.",
                ),
                  this.loadingScreenTimerStatus$$.next(B.MaxTimeExpired),
                  this.globalRoutingService.goTo(this.getErrorRoute()));
              }));
          }
          subscribeOnLoadingScreenRemoval() {
            Object(u.b)(this.isLoading$, this.activeIframe$)
              .pipe(Object(m.a)(this.destroy$$))
              .subscribe(([e, t]) => {
                if (!e && t && t.frame && t.state === L.a.READY) {
                  const e = t.frame;
                  ((e.style.position = "relative"),
                    (e.style.visibility = "visible"));
                }
              });
          }
          subscribeOnHapticOriginRequest() {
            const e = new o.a(!1);
            (this.postMessageService.postMessage$
              .pipe(
                Object(x.a)((e) => e.json && e.json.requestOrigin),
                Object(p.a)((e) => !!e.json && !!e.json.requestOrigin),
                Object(m.a)(this.destroy$$),
              )
              .subscribe(e),
              Object(u.b)(
                this.postMessageService.postMessage$,
                this.activeIframe$$,
                e,
              )
                .pipe(
                  Object(x.a)(
                    ([e, t, n]) =>
                      !!t &&
                      !!t.frame &&
                      !!e &&
                      !!e.event &&
                      !!e.event.source &&
                      e.event.source === t.frame.contentWindow &&
                      n,
                  ),
                  Object(m.a)(this.destroy$$),
                )
                .subscribe(([t, n, l]) => {
                  (this.logger.info(
                    "subscribeOnHapticOriginRequest: Got request for haptic origin from subComponent with subComponentId",
                    t.json.subComponentId,
                  ),
                    requestAnimationFrame(() => {
                      if (!n || !n.frame) return;
                      const t = n.frame;
                      if (t && t.contentWindow) {
                        const n = t.getBoundingClientRect(),
                          l = JSON.stringify({
                            originX: n.left,
                            originY: n.top,
                          });
                        (this.logger.info(
                          "subscribeOnHapticOriginRequest: posting origin",
                          l,
                        ),
                          t.contentWindow.postMessage(l, "*"),
                          e.next(!1));
                      }
                    }));
                }));
          }
          subscribeOnIframeSubcomponentId() {
            this.activeIframe$
              .pipe(
                Object(x.a)(T.wd),
                Object(g.a)((e) =>
                  e && e.subComponentId$ ? e.subComponentId$ : c.a,
                ),
                Object(f.a)(),
                Object(m.a)(this.destroy$$),
              )
              .subscribe((e) => {
                (this.logger.info(
                  `subscribeOnIframeSubcomponentId subComponentId changed from ${this.subComponentId} to ${e}`,
                ),
                  this.subComponentId &&
                    this.subComponentId !== e &&
                    this.clearInputAndHapticRegionsForSubcomponent(
                      this.subComponentId,
                    ),
                  (this.subComponentId = e));
              });
          }
          subscribeOnRoutingLocation() {
            this.activeLocation$
              .pipe(
                Object(m.a)(this.onlineRoutingService.webappContextChanged$$),
                Object(m.a)(this.destroy$$),
              )
              .subscribe((e) => {
                this.locationService.setAppContextLocation(void 0, e);
              });
          }
          subscribeOnLogbookState() {
            Object(u.b)(
              this.clampService.clampSStateOn$,
              this.clampService.clamp15StateOn$,
            )
              .pipe(
                Object(p.a)(([e, t]) => !e || t),
                Object(f.a)(),
                Object(x.a)((e) => !!e),
                Object(O.a)(this.activeEntrypoint$),
                Object(m.a)(this.destroy$$),
              )
              .subscribe(([e, t]) => {
                (this.logger.info("subscribeOnLogbookState: state changed = ", {
                  clampSOffOr15On: e,
                  activeTag: (!!t && t.sourceEntrypoint.tag) || "unknown",
                }),
                  e &&
                    t &&
                    t.sourceEntrypoint.tag === D.b.LOGBOOK_GOODBYE &&
                    (this.logger.info(
                      "subscribeOnLogbookState: clampS switched off or clamp15 switched on while Logbook Goodbye is active. Leaving logbook app.",
                    ),
                    this.onlineRoutingService.leaveWebapp(A.a.ONLINELOGBOOK)));
              });
          }
          startWebapp(e) {
            this.activeWebapp$
              .pipe(
                Object(x.a)(T.wd),
                Object(x.a)((t) => t.id === e.id),
                Object(y.a)(1),
                Object(g.a)(
                  (e) => (
                    this.logger.info("startWebapp: starting app = ", e),
                    this.webappService.startWebapp(e)
                  ),
                ),
                Object(y.a)(1),
                Object(m.a)(this.destroy$$),
              )
              .subscribe((e) => {
                (this.logger.info(
                  "startWebapp: created new usage, updating active usages with = ",
                  e,
                ),
                  this.activeUsages.set(e.webapp.id, e));
              });
          }
          loadWebappIframe() {
            return Object(i.a)(this, void 0, void 0, function* () {
              const t = this.screenElement.nativeElement;
              if (!t)
                return void this.logger.error(
                  "loadWebappIframe: failed, anchorElement is not created.",
                );
              const n = yield this.activeEntrypoint$
                .pipe(Object(y.a)(1))
                .toPromise();
              if (!n || !n.sourceEntrypoint.url)
                return void this.logger.error(
                  "loadWebappIframe: failed, backing entrypoint is not defined or has no url",
                  n,
                );
              const l = n.sourceEntrypoint.delayLoadingScreen || !1;
              let i = n.sourceEntrypoint.url || "";
              const a = yield this.activeLocation$
                .pipe(Object(y.a)(1))
                .toPromise();
              (a &&
                a.inputParameter &&
                (i = this.addQueryParams(i, a.inputParameter)),
                this.activeIframe$$.next({ state: L.a.LOADING }));
              const o = this.iframeService.createIframe({
                  anchorElement: t,
                  srcUrl: i,
                  delayLoadingScreen: l,
                  checkUrlBeforeLoad: !0,
                  hideInitially: !0,
                }),
                r = n.id + "-" + e.iframeIdCounter++;
              (this.scheduleIframeForCleanup(o, r),
                o
                  .pipe(Object(m.a)(this.destroy$$))
                  .subscribe((e) => this.activeIframe$$.next(e)));
            });
          }
          scheduleIframeForCleanup(e, t) {
            this.logger.info(
              `scheduleIframeForCleanup(${t}): iframe cleanup scheduled.`,
            );
            const n = Object(u.b)(
                e,
                this.entrypointChanged$$.pipe(Object(y.a)(1)),
              ).pipe(Object(p.a)(([e]) => e)),
              l = new r.a();
            n.pipe(
              Object(x.a)((e) => !!e && !!e.frame),
              Object(y.a)(1),
              Object(m.a)(this.destroy$$),
            ).subscribe(
              (e) => {
                (e.frame.remove(),
                  this.logger.info(
                    `scheduleIframeForCleanup(${t}): iframe removed from DOM.`,
                  ));
              },
              (e) => {
                this.logger.warn(
                  `scheduleIframeForCleanup(${t}): failed to remove iframe from DOM. Will be removed when webapp is left.`,
                  e,
                );
              },
              () => {
                (this.logger.info(
                  `scheduleIframeForCleanup(${t}): iframe remove from DOM: Subscription completed, Iframe removed.`,
                ),
                  l.next());
              },
            );
            let i = !1;
            n.pipe(
              Object(x.a)((e) => !!e && !!e.subComponentId$),
              Object(g.a)((e) => e.subComponentId$.pipe(Object(x.a)(T.wd))),
              Object(y.a)(1),
              Object(m.a)(l.pipe(Object(S.a)(100))),
            ).subscribe(
              (e) => {
                (this.logger.info(
                  `scheduleIframeForCleanup(${t}): iframe subcomponentId received = (${e}). Clearing haptic regions.`,
                ),
                  this.clearInputAndHapticRegionsForSubcomponent(e),
                  (i = !0));
              },
              (e) => {
                (this.logger.warn(
                  `scheduleIframeForCleanup(${t}): failed to clear haptic for iframe. Removing haptic regions for all subcomponents. Error = `,
                  e,
                ),
                  this.clearSubcomponentHapticRegionsForHMI(),
                  (i = !0));
              },
              () => {
                i ||
                  (this.logger.warn(
                    `scheduleIframeForCleanup(${t}): subcomponentId unknown. Clearing haptic regions of all subcomponents.`,
                  ),
                  this.clearSubcomponentHapticRegionsForHMI());
              },
            );
          }
          cleanupApp() {
            const e = this.activeIframe$$.getValue();
            (e && e.frame && e.frame.remove(), this.activeIframe$$.next(null));
            for (const t of this.activeUsages.values())
              this.webappService.stopWebapp(t);
            this.subComponentId &&
              (this.clearInputAndHapticRegionsForSubcomponent(
                this.subComponentId,
              ),
              this.callDestroyUrl());
          }
          clearInputAndHapticRegionsForSubcomponent(e) {
            const t = this.displayService.displayName,
              n = this.displayService.hmiName.toString();
            this.inputRegionsService.clearInputAndHapticRegionsForSubcomponent(
              t,
              n,
              e,
            );
          }
          clearSubcomponentHapticRegionsForHMI() {
            const e = this.displayService.displayName,
              t = this.displayService.hmiName.toString();
            this.inputRegionsService.clearSubcomponentHapticRegionsForHMI(e, t);
          }
          addQueryParams(e, t) {
            e.endsWith("?") || (e += "?");
            for (const n of t.keys()) e += `${n}=${t.get(n)}&`;
            return e.substring(0, e.length - 1);
          }
          callDestroyUrl() {
            return Object(i.a)(this, void 0, void 0, function* () {
              const e = yield this.activeEntrypoint$
                .pipe(Object(y.a)(1))
                .toPromise();
              if (!e || !e.sourceEntrypoint.onDestroyUrl)
                return Promise.resolve();
              const t = new XMLHttpRequest();
              return (
                (t.onreadystatechange = () => {
                  t.readyState === XMLHttpRequest.DONE &&
                    this.logger.info(
                      `callDestroyUrl: calling onDestroyUrl, result: ${t.status} ${t.statusText}`,
                    );
                }),
                t.open("POST", e.sourceEntrypoint.onDestroyUrl, !0),
                t.send(JSON.stringify({ iframeId: this.subComponentId })),
                Promise.resolve()
              );
            });
          }
          getErrorRoute() {
            return this.globalRoutingService.activeAppContextSnapshot === M.v
              ? R.a.WebApp.children.WebAppError
              : $.b.children.WebAppError;
          }
          getLicenseRoute() {
            return this.globalRoutingService.activeAppContextSnapshot === M.v
              ? R.a.WebApp.children.LicenseExpired
              : $.b.children.LicenseExpired;
          }
        }
        return ((e.iframeIdCounter = 0), e);
      })();
      var F = n("x5N5");
      class z {
        constructor(e, t) {
          ((this.globalRoutingService = e), (this.routingService = t));
        }
        goToHome() {
          const e = this.globalRoutingService.activeAppContextSnapshot;
          e === M.v
            ? this.routingService.enterContext()
            : this.globalRoutingService.enterAppContext(e);
        }
      }
      class G {
        constructor(e, t) {
          this.globalRoutingService = e;
          const n = t.snapshot.queryParams;
          ((this.serviceName = Object(T.md)(n, $.a.ServiceName, "")),
            (this.serviceId = Object(T.md)(n, $.a.ServiceId, "")));
        }
        goBack() {
          this.globalRoutingService.enterAppContext(M.r);
        }
      }
      var U = n("dUCL"),
        Y = n("uwzl");
      class H {
        constructor(e, t) {
          ((this.eventService = e), (this.routingService = t));
        }
        ngOnInit() {
          this.result$$ = this.eventService.provide(Y.a.ACTION_NAME);
        }
        ngOnDestroy() {
          (this.result$$.next(this.location),
            this.eventService.unprovide(Y.a.ACTION_NAME));
        }
        destinationSelected(e) {
          ((this.location = e), this.goBack());
        }
        goBack() {
          this.routingService.goBack();
        }
      }
      var V = n("Wm/T"),
        X = n("47ST"),
        q = n("6NOe"),
        Z = n("AEBN");
      class K {
        constructor(e, t, n, l, i) {
          ((this.eventService = e),
            (this.globalRoutingService = t),
            (this.activatedRoute = n),
            (this.textinputService = l),
            (this.logger = i.getLogger("online.TextinputActionComponent")));
        }
        ngOnInit() {
          ((this.result$$ = this.eventService.provide(q.a.ACTION_NAME)),
            (this.params$ = this.activatedRoute.params.pipe(
              Object(p.a)((e) => {
                if (!e.input) return void this.goBack();
                const t = decodeURI(e.input);
                try {
                  return JSON.parse(t);
                } catch (n) {
                  return (
                    this.logger.warn(
                      "ngOnInit: Failed to parse input parameters.",
                    ),
                    void this.goBack()
                  );
                }
              }),
            )),
            (this.inputField$ = this.params$.pipe(
              Object(x.a)(T.wd),
              Object(g.a)((e) =>
                e.tif
                  ? this.textinputService.getInputField(
                      "webapp-textinput",
                      e.tif,
                      e.initText,
                    )
                  : (this.goBack(),
                    Object(X.a)("Invalid Parameters: missing parameter 'tif'")),
              ),
            )));
        }
        ngOnDestroy() {
          (this.result$$.next(this.result),
            this.eventService.unprovide(q.a.ACTION_NAME));
        }
        onSave(e) {
          ((this.result = e), this.goBack());
        }
        goBack() {
          this.globalRoutingService
            .goBack()
            .then((e) => {
              e ||
                (this.logger.warn(
                  "goBack: failed, falling back to home context.",
                ),
                this.globalRoutingService.enterAppContext(M.r));
            })
            .catch((e) => {
              (this.logger.warn(
                "goBack: failed, falling back to home context. Reason: ",
                e,
              ),
                this.globalRoutingService.enterAppContext(M.r));
            });
        }
      }
      var Q = n("jOdJ"),
        J = n("5q1k"),
        ee = n("ZfjY");
      class te {
        constructor(e, t, n, l, i, o) {
          ((this.logbookManualEntryService = e),
            (this.logbookService = t),
            (this.cdr = n),
            (this.httpClient = l),
            (this.globalRoutingService = i),
            (this.confirmDataDisabledReason = {
              type: T.A.SHOW_POPUP,
              popup:
                T.Ob
                  .POPUP_LOGBOOK_GOODBYE_CATEGORIZE_MANUAL_ENTRY_NOT_COMPLETED_TOAST,
            }),
            (this.destroy$$ = new a.a(1)),
            (this.resultWasSent = !1),
            (this.logger = o.getLogger("online.LogbookManualEntryComponent")));
        }
        ngOnDestroy() {
          (this.destroy$$.next(),
            this.resultWasSent ||
              this.logbookManualEntryService.manualEntryResult$$.next({
                content: [],
              }));
        }
        backTapped() {
          (this.logbookManualEntryService.manualEntryResult$$.next({
            content: [],
          }),
            (this.resultWasSent = !0),
            this.goBack());
        }
        confirmData() {
          const e = [];
          for (const t of this.logbookManualEntryService.textInputResultMap.values())
            e.push(t);
          for (const t of this.logbookManualEntryService.toggleButtonResultMap.values())
            e.push(t);
          (this.logbookManualEntryService.manualEntryResult$$.next({
            content: e,
          }),
            (this.resultWasSent = !0),
            this.goBack());
        }
        goBack() {
          this.logbookManualEntryService.shouldGoBackToLogbookApp
            ? this.logbookService.enterApp()
            : this.globalRoutingService.enterAppContext(M.r);
        }
        isConfirmDataDisabled(e) {
          return (
            !e ||
            e.listElements.some((e) => {
              const t = e.toggleButtonId ? e : void 0,
                n = e.textInputId ? e : void 0;
              return t
                ? !this.isValidToggleButtonResult(t.toggleButtonId)
                : !!n && !this.isValidTextinputResult(n.textInputId);
            })
          );
        }
        isValidToggleButtonResult(e) {
          const t = this.logbookManualEntryService.toggleButtonResultMap.get(e);
          return Object(T.wd)(t) && Object(T.wd)(t.selectedItemId);
        }
        isValidTextinputResult(e) {
          const t = this.logbookManualEntryService.textInputResultMap.get(e);
          return (
            Object(T.wd)(t) && Object(T.wd)(t.result) && t.result.length > 0
          );
        }
        selectTextinput(e) {
          e &&
            ((this.resultWasSent = !0),
            this.logbookManualEntryService.currentTextinputData$$.next(e),
            this.globalRoutingService.goTo(
              $.b.children.Actions.children.LogbookManualEntryTextinput,
            ));
        }
        getSelectedToggleItem(e) {
          if (!e || null == e.selectedItemId || !e.toggleButtonGroupOptions)
            return;
          const t = e.toggleButtonGroupOptions.items.find(
            (t) => t.itemId === e.selectedItemId,
          );
          return (
            this.logbookManualEntryService.toggleButtonResultMap.set(
              e.toggleButtonId,
              {
                toggleButtonId: e.toggleButtonId,
                selectedItemId: t && t.itemId,
              },
            ),
            t
          );
        }
        setSelectedToggleItem(e, t) {
          e &&
            t &&
            ((e.selectedItemId = t.itemId),
            e.callbackURL &&
              this.httpClient
                .post(e.callbackURL, {
                  toggleButtonId: e.toggleButtonId,
                  selectedItemId: e.selectedItemId,
                })
                .pipe(Object(Q.a)())
                .toPromise()
                .then(() => {
                  this.logger.info(
                    "setSelectedToggleItem POST for " +
                      e.callbackURL +
                      ": success",
                  );
                })
                .catch((t) => {
                  this.logger.error(
                    "setSelectedToggleItem POST for " +
                      e.callbackURL +
                      ": failed: ",
                    t,
                  );
                }),
            this.cdr.markForCheck());
        }
        executeButton(e) {
          e &&
            this.httpClient
              .post(e.url, e.payload)
              .pipe(Object(Q.a)())
              .toPromise()
              .then(() => {
                this.logger.info(
                  "executeButton POST for " + e.url + ": success",
                );
              })
              .catch((t) => {
                this.logger.error(
                  "executeButton POST for " + e.url + ": failed: ",
                  t,
                );
              });
        }
      }
      class ne {
        constructor(e, t) {
          ((this.logbookManualEntryService = e),
            (this.globalRoutingService = t),
            (this.destroy$$ = new a.a(1)),
            (this.resultWasSent = !1));
        }
        ngOnDestroy() {
          (this.destroy$$.next(),
            this.resultWasSent ||
              this.logbookManualEntryService.manualEntryResult$$.next({
                content: [],
              }));
        }
        backTapped() {
          (this.logbookManualEntryService.currentTextinputData$$.next(void 0),
            (this.resultWasSent = !0),
            this.globalRoutingService.goToWithRoutingMethod(
              $.b.children.Actions.children.LogbookManualEntry,
              T.Yb.Backward,
            ));
        }
        onSave(e, t) {
          e &&
            e.textInputId &&
            (this.logbookManualEntryService.textInputResultMap.set(
              e.textInputId,
              { tif: e.tif, textInputId: e.textInputId, result: t || "" },
            ),
            this.backTapped());
        }
      }
      var le = n("1fVR");
      const ie = () =>
        Promise.all([n.e(1), n.e(29), n.e(0), n.e(109)])
          .then(n.bind(null, "o06B"))
          .then((e) => e.UserAccountsSettingsModuleNgFactory);
      class ae {}
      var oe = n("C9Ky"),
        re = n("abzT"),
        ue = n("dY2g"),
        se = n("8WOv"),
        ce = n("bMuc"),
        be = n("fu7d"),
        pe = n("bou3"),
        de = n("yNay"),
        he = n("ZIdM"),
        me = n("3bpu"),
        ge = n("6zvu"),
        xe = n("VcEz"),
        fe = n("OtM5"),
        ve = n("y9xZ"),
        Oe = n("+sw+"),
        ye = n("BMrr"),
        Se = n("IEns"),
        Te = n("1pak"),
        Ie = n("P+G5"),
        Ne = n("z6QT"),
        Ce = n("flsk"),
        Le = n("FQEI"),
        Pe = n("O82V"),
        _e = n("Eln4"),
        Ee = n("evAh"),
        $e = n("zPMi"),
        Me = n("CpzC"),
        Re = n("0Bsn"),
        ke = n("5GjX"),
        De = n("mYyF"),
        we = n("v98a"),
        je = n("aOG8"),
        Ae = n("Krzs"),
        Be = n("VUTu"),
        We = n("nK9R"),
        Fe = n("qzuC"),
        ze = n("8yWk"),
        Ge = n("An66"),
        Ue = n("0qMr"),
        Ye = n("ZXHi"),
        He = n("IRNg"),
        Ve = n("8TlW"),
        Xe = n("Xo58"),
        qe = n("m3Ja"),
        Ze = n("r+e+"),
        Ke = n("ijxY"),
        Qe = n("bmFL"),
        Je = n("Z2XD"),
        et = n("FfND"),
        tt = n("8BwU"),
        nt = n("1VvW"),
        lt = l.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{width:100%;overflow:hidden}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}.screen[_ngcontent-%COMP%]{position:relative}",
            ],
          ],
          data: {},
        });
      function it(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
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
              function (e, t, n) {
                var l = !0;
                return (
                  "mib3Tap" === t &&
                    (l =
                      !1 !==
                        e.component.onlineRoutingService.leaveWebapp(
                          e.parent.context.mib3Let,
                        ) && l),
                  l
                );
              },
              se.b,
              se.a,
            )),
            l.xb(1, 147456, null, 0, ce.a, [l.l, l.z], null, null),
            l.xb(
              2,
              212992,
              null,
              0,
              be.a,
              [l.l, l.D, pe.a, de.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              3,
              147456,
              null,
              0,
              he.a,
              [ce.a, [2, me.a], [2, be.a], de.a],
              null,
              null,
            ),
            l.xb(
              4,
              212992,
              null,
              0,
              ge.a,
              [
                de.a,
                xe.b,
                he.a,
                [2, me.a],
                [2, be.a],
                [2, fe.a],
                [2, ve.a],
                [2, Oe.a],
                l.z,
                ye.a,
                l.l,
                [2, Se.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.xb(
              5,
              147456,
              null,
              0,
              Te.a,
              [de.a, Ie.a, l.l, [2, ge.a], [2, fe.a]],
              null,
              null,
            ),
            l.Sb(131584, null, Ne.a, Ne.a, [[3, Ne.a]]),
            l.xb(
              7,
              4407296,
              null,
              0,
              Ce.a,
              [
                l.l,
                Le.a,
                l.h,
                Ne.a,
                [2, Pe.a],
                [2, me.b],
                [2, me.a],
                [2, _e.a],
                [2, Ee.a],
              ],
              null,
              null,
            ),
            l.xb(
              8,
              49152,
              null,
              0,
              $e.a,
              [[2, fe.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              Me.a,
              [
                [2, ge.a],
                [2, fe.a],
                [2, Re.a],
                [2, Ce.a],
                [2, ke.b],
                l.l,
                De.a,
                we.b,
              ],
              null,
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              je.a,
              [[2, Ce.a], [2, ge.a], [2, xe.b], Ae.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            (e(t, 2, 0, "BackButton"),
              e(t, 4, 0),
              e(t, 7, 0),
              e(t, 8, 0, !1, "E163_Backbutton.webp"));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              l.Nb(t, 7).markerClassEnabled,
              l.Nb(t, 8).useItemPlaceholder,
            );
          },
        );
      }
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
              4,
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
              1,
              212992,
              null,
              0,
              be.a,
              [l.l, l.D, pe.a, de.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              We.a,
              [Fe.a, ze.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                hasSecondaryText: [1, "hasSecondaryText"],
                secondaryNonI18nText: [2, "secondaryNonI18nText"],
              },
              null,
            ),
            (e()(), l.hb(16777216, null, 0, 1, null, it)),
            l.xb(
              4,
              16384,
              null,
              0,
              Ge.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, ""),
              e(t, 2, 0, "Online", !!t.context.mib3Let, t.context.mib3Let),
              e(t, 4, 0, n.enteredAsIncludeWebapp));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              l.Nb(t, 2).hideLeftBorder,
              l.Nb(t, 2).hideDividingBorders,
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
              8,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), l.hb(16777216, null, null, 2, null, at)),
            l.xb(
              2,
              16384,
              null,
              0,
              Ue.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, Ge.b, [l.h]),
            (e()(),
            l.yb(
              4,
              0,
              null,
              null,
              4,
              "au3-init-view",
              [],
              null,
              null,
              null,
              Ye.b,
              Ye.a,
            )),
            l.xb(5, 49152, null, 0, He.a, [], null, null),
            (e()(),
            l.yb(
              6,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [["id", "WebAppIsLoading"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Ve.b,
              Ve.a,
            )),
            l.xb(
              7,
              212992,
              null,
              0,
              be.a,
              [l.l, l.D, pe.a, de.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              8,
              245760,
              null,
              0,
              Xe.a,
              [[6, be.a], qe.a, l.h, l.l, l.D, [2, Ze.a], [2, Ke.a], [2, Qe.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 2, 0, l.Yb(t, 2, 0, l.Nb(t, 3).transform(n.webappName$))),
              e(t, 7, 0, "WebAppIsLoading"),
              e(
                t,
                8,
                0,
                "Die App wird geladen. Bitte warten...",
                "WebAppIsLoading",
                4,
              ));
          },
          function (e, t) {
            e(
              t,
              6,
              0,
              l.Nb(t, 8).backgroundColor,
              l.Nb(t, 8).fixedNumberOfLines,
              l.Nb(t, 8).mayContainLatinCharsForArabic,
              l.Nb(t, 8).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function rt(e) {
        return l.ac(
          2,
          [
            l.Tb(402653184, 1, { screenElement: 0 }),
            (e()(),
            l.yb(
              1,
              0,
              [[1, 0]],
              null,
              6,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:ONLINE_WEBAPP_COMPONENT"],
              ],
              [[8, "className", 0]],
              null,
              null,
              Je.b,
              Je.a,
            )),
            l.xb(
              2,
              212992,
              null,
              0,
              be.a,
              [l.l, l.D, pe.a, de.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              3,
              4440064,
              [["screenElement", 4]],
              0,
              ve.a,
              [de.a],
              { id: [0, "id"] },
              null,
            ),
            l.Pb(131072, Ge.b, [l.h]),
            (e()(), l.hb(16777216, null, 0, 2, null, ot)),
            l.xb(
              6,
              16384,
              null,
              0,
              Ge.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            l.Pb(131072, Ge.b, [l.h]),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 2, 0, "Screen:ONLINE_WEBAPP_COMPONENT"),
              e(t, 3, 0, "Screen:ONLINE_WEBAPP_COMPONENT"),
              e(
                t,
                6,
                0,
                !0 === l.Yb(t, 6, 0, l.Nb(t, 7).transform(n.isLoading$)),
              ));
          },
          function (e, t) {
            var n = t.component;
            e(t, 1, 0, l.Yb(t, 1, 0, l.Nb(t, 4).transform(n.overrideContext$)));
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
              1,
              "au3-web-app",
              [],
              null,
              null,
              null,
              rt,
              lt,
            )),
            l.xb(
              1,
              4374528,
              null,
              0,
              W,
              [
                k.a,
                et.a,
                C.a,
                L.b,
                P.a,
                _.a,
                Ae.a,
                D.a,
                De.a,
                we.b,
                tt.a,
                nt.a,
                w.a,
                j.a,
                de.a,
              ],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var st = l.ub("au3-web-app", W, ut, {}, {}, []),
        ct = n("eZMD"),
        bt = n("HD2x"),
        pt = n("M706"),
        dt = n("aMc6"),
        ht = n("fzcM"),
        mt = n("erFY"),
        gt = n("5wO1"),
        xt = l.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{width:100%}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{height:100%;display:flex;flex-direction:column}.screen[_ngcontent-%COMP%]{position:relative}",
            ],
          ],
          data: {},
        });
      function ft(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              20,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:ONLINE_WEBAPP_ERROR"],
              ],
              null,
              null,
              null,
              Je.b,
              Je.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [l.l, l.D, pe.a, de.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 4440064, null, 0, ve.a, [de.a], { id: [0, "id"] }, null),
            (e()(),
            l.yb(
              3,
              0,
              null,
              0,
              2,
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
              be.a,
              [l.l, l.D, pe.a, de.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              5,
              49152,
              null,
              0,
              We.a,
              [Fe.a, ze.a],
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
              14,
              "au3-instruction-text",
              [
                ["id", "WebappCouldNotBeStarted"],
                [
                  "primaryDeveloperText",
                  "Die App konnte nicht gestartet werden.",
                ],
              ],
              null,
              null,
              null,
              ct.b,
              ct.a,
            )),
            l.xb(
              7,
              212992,
              null,
              0,
              be.a,
              [l.l, l.D, pe.a, de.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              8,
              49152,
              null,
              0,
              bt.a,
              [],
              { primaryDeveloperText: [0, "primaryDeveloperText"] },
              null,
            ),
            (e()(),
            l.yb(
              9,
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
              pt.b,
              pt.a,
            )),
            l.xb(
              10,
              49152,
              null,
              0,
              dt.a,
              [ht.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (e()(),
            l.yb(
              11,
              0,
              null,
              1,
              9,
              "au3-operation-panel-item",
              [["id", "GoToHomeScreen"]],
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
              function (e, t, n) {
                var l = !0;
                return (
                  "mib3Tap" === t && (l = !1 !== e.component.goToHome() && l),
                  l
                );
              },
              mt.b,
              mt.a,
            )),
            l.xb(
              12,
              212992,
              null,
              0,
              be.a,
              [l.l, l.D, pe.a, de.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(13, 147456, null, 0, ce.a, [l.l, l.z], null, null),
            l.xb(
              14,
              147456,
              null,
              0,
              he.a,
              [ce.a, [2, me.a], [2, be.a], de.a],
              null,
              null,
            ),
            l.xb(
              15,
              212992,
              null,
              0,
              ge.a,
              [
                de.a,
                xe.b,
                he.a,
                [2, me.a],
                [2, be.a],
                [2, fe.a],
                [2, ve.a],
                [2, Oe.a],
                l.z,
                ye.a,
                l.l,
                [2, Se.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, Ne.a, Ne.a, [[3, Ne.a]]),
            l.xb(
              17,
              4407296,
              null,
              0,
              Ce.a,
              [
                l.l,
                Le.a,
                l.h,
                Ne.a,
                [2, Pe.a],
                [2, me.b],
                [2, me.a],
                [2, _e.a],
                [2, Ee.a],
              ],
              null,
              null,
            ),
            l.xb(
              18,
              49152,
              null,
              0,
              gt.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            l.xb(
              19,
              147456,
              null,
              0,
              Me.a,
              [
                [2, ge.a],
                [2, fe.a],
                [2, Re.a],
                [2, Ce.a],
                [2, ke.b],
                l.l,
                De.a,
                we.b,
              ],
              null,
              null,
            ),
            l.xb(
              20,
              147456,
              null,
              0,
              je.a,
              [[2, Ce.a], [2, ge.a], [2, xe.b], Ae.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            (e(t, 1, 0, "Screen:ONLINE_WEBAPP_ERROR"),
              e(t, 2, 0, "Screen:ONLINE_WEBAPP_ERROR"),
              e(t, 4, 0, ""),
              e(t, 5, 0, "Online", "Fehler"),
              e(t, 7, 0, "WebappCouldNotBeStarted"),
              e(t, 8, 0, "Die App konnte nicht gestartet werden."),
              e(t, 10, 0, !0),
              e(t, 12, 0, "GoToHomeScreen"),
              e(t, 15, 0),
              e(t, 17, 0),
              e(t, 18, 0, "OK", !0));
          },
          function (e, t) {
            (e(
              t,
              3,
              0,
              l.Nb(t, 5).hideLeftBorder,
              l.Nb(t, 5).hideDividingBorders,
            ),
              e(t, 9, 0, l.Nb(t, 10).alignInside, l.Nb(t, 10).alignOutside),
              e(t, 11, 1, [
                l.Nb(t, 17).markerClassEnabled,
                l.Nb(t, 18).showSeparatorLeft,
                l.Nb(t, 18).showSeparatorRight,
                l.Nb(t, 18).prio1Main,
                l.Nb(t, 18).prio1SmallScale,
                l.Nb(t, 18).prio2SmallScale,
                l.Nb(t, 18).prio1,
                l.Nb(t, 18).prio2,
                l.Nb(t, 18).prio1IconText,
                l.Nb(t, 18).prio1IconOnly,
                l.Nb(t, 18).prio1TextOnly,
                l.Nb(t, 18).prio2IconText,
                l.Nb(t, 18).prio2IconOnly,
                l.Nb(t, 18).prio2TextOnly,
                l.Nb(t, 18).useDefaultMaxWidth,
                l.Nb(t, 18).isDummy,
              ]));
          },
        );
      }
      function vt(e) {
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
              "au3-webapp-error",
              [],
              null,
              null,
              null,
              ft,
              xt,
            )),
            l.xb(1, 49152, null, 0, z, [et.a, F.a], null, null),
          ],
          null,
          null,
        );
      }
      var Ot = l.ub("au3-webapp-error", z, vt, {}, {}, []),
        yt = l.wb({
          encapsulation: 0,
          styles: [
            [
              ".screen[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column}",
            ],
          ],
          data: {},
        });
      function St(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              21,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:LICENCE_LICENCE_EXPIRED"],
              ],
              null,
              null,
              null,
              Je.b,
              Je.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [l.l, l.D, pe.a, de.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 4440064, null, 0, ve.a, [de.a], { id: [0, "id"] }, null),
            (e()(),
            l.yb(
              3,
              0,
              null,
              0,
              13,
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
              be.a,
              [l.l, l.D, pe.a, de.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              5,
              49152,
              null,
              0,
              We.a,
              [Fe.a, ze.a],
              {
                primaryNonI18nText: [0, "primaryNonI18nText"],
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
              function (e, t, n) {
                var l = !0;
                return (
                  "mib3Tap" === t && (l = !1 !== e.component.goBack() && l),
                  l
                );
              },
              se.b,
              se.a,
            )),
            l.xb(7, 147456, null, 0, ce.a, [l.l, l.z], null, null),
            l.xb(
              8,
              212992,
              null,
              0,
              be.a,
              [l.l, l.D, pe.a, de.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              he.a,
              [ce.a, [2, me.a], [2, be.a], de.a],
              null,
              null,
            ),
            l.xb(
              10,
              212992,
              null,
              0,
              ge.a,
              [
                de.a,
                xe.b,
                he.a,
                [2, me.a],
                [2, be.a],
                [2, fe.a],
                [2, ve.a],
                [2, Oe.a],
                l.z,
                ye.a,
                l.l,
                [2, Se.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.xb(
              11,
              147456,
              null,
              0,
              Te.a,
              [de.a, Ie.a, l.l, [2, ge.a], [2, fe.a]],
              null,
              null,
            ),
            l.Sb(131584, null, Ne.a, Ne.a, [[3, Ne.a]]),
            l.xb(
              13,
              4407296,
              null,
              0,
              Ce.a,
              [
                l.l,
                Le.a,
                l.h,
                Ne.a,
                [2, Pe.a],
                [2, me.b],
                [2, me.a],
                [2, _e.a],
                [2, Ee.a],
              ],
              null,
              null,
            ),
            l.xb(
              14,
              49152,
              null,
              0,
              $e.a,
              [[2, fe.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            l.xb(
              15,
              147456,
              null,
              0,
              Me.a,
              [
                [2, ge.a],
                [2, fe.a],
                [2, Re.a],
                [2, Ce.a],
                [2, ke.b],
                l.l,
                De.a,
                we.b,
              ],
              null,
              null,
            ),
            l.xb(
              16,
              147456,
              null,
              0,
              je.a,
              [[2, Ce.a], [2, ge.a], [2, xe.b], Ae.a],
              null,
              null,
            ),
            (e()(),
            l.yb(
              17,
              0,
              null,
              0,
              4,
              "au3-instruction-text",
              [["id", "LicenseExpiredText"]],
              null,
              null,
              null,
              ct.b,
              ct.a,
            )),
            l.xb(
              18,
              212992,
              null,
              0,
              be.a,
              [l.l, l.D, pe.a, de.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              19,
              16384,
              null,
              0,
              Qe.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            l.Qb(20, { serviceName: 0 }),
            l.xb(
              21,
              49152,
              null,
              0,
              bt.a,
              [],
              { primaryDeveloperText: [0, "primaryDeveloperText"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, "Screen:LICENCE_LICENCE_EXPIRED"),
              e(t, 2, 0, "Screen:LICENCE_LICENCE_EXPIRED"),
              e(t, 4, 0, ""),
              e(t, 5, 0, n.serviceName, "Hinweis"),
              e(t, 8, 0, "BackButton"),
              e(t, 10, 0),
              e(t, 13, 0),
              e(t, 14, 0, !1, "E163_Backbutton.webp"),
              e(t, 18, 0, "LicenseExpiredText"));
            var l = e(t, 20, 0, n.serviceName);
            (e(t, 19, 0, l),
              e(
                t,
                21,
                0,
                "Die Lizenz f\xfcr {{serviceName}} ist abgelaufen.\n\nInformationen zu Verl\xe4ngerungsm\xf6glichkeiten erhalten Sie\nbei Ihrem Audi Partner oder auf der Audi Website.",
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
                l.Nb(t, 13).markerClassEnabled,
                l.Nb(t, 14).useItemPlaceholder,
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
              "au3-license-expired",
              [],
              null,
              null,
              null,
              St,
              yt,
            )),
            l.xb(1, 49152, null, 0, G, [et.a, nt.a], null, null),
          ],
          null,
          null,
        );
      }
      var It = l.ub("au3-license-expired", G, Tt, {}, {}, []),
        Nt = n("k1ug"),
        Ct = n("UaS1"),
        Lt = n("5FWm"),
        Pt = n("+R8K"),
        _t = n("S4t0"),
        Et = n("dzs+"),
        $t = n("tZuO"),
        Mt = n("3OpO"),
        Rt = n("b040"),
        kt = n("XXsT"),
        Dt = n("jNzc"),
        wt = n("TKG5"),
        jt = n("CMj9"),
        At = n("Fb8o"),
        Bt = n("mWuZ"),
        Wt = n("70uC"),
        Ft = n("dxLW"),
        zt = n("Tvbo"),
        Gt = n("tYr6"),
        Ut = n("3LDm"),
        Yt = n("aujg"),
        Ht = n("Oh6n"),
        Vt = n("9ehv"),
        Xt = n("SFb6"),
        qt = n("yRMx");
      class Zt {
        constructor() {}
        onBackButtonTap() {}
        onMoreCategoriesTap() {
          return Promise.resolve(!0);
        }
        onGoogleButton() {
          return Promise.resolve(!0);
        }
        goToDestinationDetail(e, t) {
          return Promise.resolve(!0);
        }
        goToContactCard(e) {
          return Promise.resolve(!0);
        }
        goToTourDetail(e) {
          return Promise.resolve(!0);
        }
        goToAddressSearch(e, t = !1) {
          return Promise.resolve(!0);
        }
        goToOnStreetParkingMap(e) {
          return Promise.resolve(!0);
        }
      }
      var Kt = n("khSu");
      class Qt extends Kt.a {
        constructor(e, t, n) {
          super(
            e,
            t,
            "weather-city-search",
            Z.e.TIF_ID_61_CITY_ENTRY_FOR_WEATHER,
            n.getLogger("navi.truffle.CityInputModelProviderService"),
          );
        }
        addToDictionary(e) {
          this.textInputService.addWordsFromTruffleResultToDictionary(
            e.staticObject.navAddress.source,
          );
        }
      }
      var Jt = n("u0hB"),
        en = n("Mev3"),
        tn = n("lVa+"),
        nn = n("n06X"),
        ln = n("Xe+h"),
        an = n("AuMu"),
        on = n("1+5f"),
        rn = n("Td1N");
      let un = (() => {
        class e extends rn.a {
          constructor() {
            super(e.CITY_SEARCH_MODE);
          }
        }
        return ((e.CITY_SEARCH_MODE = on.d.CITY), e);
      })();
      var sn = n("y1DD"),
        cn = n("M0th"),
        bn = n("j6V8"),
        pn = n("OmET"),
        dn = n("MUOu"),
        hn = n("Tr//"),
        mn = n("wfP6"),
        gn = n("Ro/G"),
        xn = n("VfyL"),
        fn = n("IwEh"),
        vn = n("+i6S"),
        On = n("IHgh"),
        yn = n("sK8D"),
        Sn = n("6dmc"),
        Tn = n("T07r");
      n("/L1O");
      let In = (() => {
        class e extends Tn.b {
          constructor(e, t, n, l, i, a, o, u, s, c) {
            (super(e, t, n, l, i, a, s, c),
              (this.searchLocationProvider = o),
              (this.naviRouting = u),
              (this.resultSelected$$ = new r.a()),
              (this.resultSelected$ = this.resultSelected$$),
              (this.onItemTap$$ = new r.a()),
              (this.cityNaviTfsCtrlLogger = c.getLogger(
                "navi.truffle.CityTruffleSearchControllerService",
                [Sn.a.NAVSEARCH],
              )));
          }
          ngOnDestroy() {
            super.ngOnDestroy();
          }
          onTruffleSearchResultTap(e) {
            (this.onItemTap$$.next(), this.addSelectedItemToDictionary(e));
            const t = e.staticObject;
            this.getSearchResultLocation(e)
              .pipe(Object(m.a)(this.destroy$$), Object(m.a)(this.onItemTap$$))
              .subscribe((e) => {
                const n = this.getLocationIdFromSearchResultLocation(e);
                n
                  ? this.selectResult(n)
                  : this.cityNaviTfsCtrlLogger.error(
                      `onTruffleSearchResultTap: no valid location id for address.id ${t.id}`,
                    );
              });
          }
          onSuggestionTap(t) {
            e.MORE_CATEGORIES_WORD_PROPOSAL === t &&
              this.naviRouting
                .onMoreCategoriesTap()
                .catch((e) =>
                  this.logger.error(
                    "onSuggestionTap: Could not go to more categories:",
                    e,
                  ),
                );
          }
          restoreSearchState() {
            (this.cityNaviTfsCtrlLogger.info(
              "restoreSearchState: do not restore - initialize as regular search",
            ),
              this.skipRestoreSearch());
          }
          selectResult(e) {
            (this.cityNaviTfsCtrlLogger.info(`selectResult: locationId ${e}`),
              this.resultSelected$$.next(e));
          }
          getSearchResultLocation(e) {
            return (
              this.cityNaviTfsCtrlLogger.out.debug(
                "getSearchResultLocation: retrieving searchResultLocation for item:",
                e,
              ),
              this.searchLocationProvider.getSearchResultLocation(e).pipe(
                Object(v.a)((e) => {
                  this.cityNaviTfsCtrlLogger.in.debug(
                    "getSearchResultLocation: received searchResultLocation",
                    e,
                  );
                }),
                Object(Q.a)(),
                Object(m.a)(this.destroy$$),
                Object(m.a)(this.onItemTap$$),
              )
            );
          }
          getLocationIdFromSearchResultLocation(e) {
            const t = e.location && e.location.id ? e.location.id : void 0;
            return (
              this.logger.in.info(
                "getLocationIdFromSearchResultLocation: received locationId ",
                t,
              ),
              (e.location && e.location.id) ||
                this.cityNaviTfsCtrlLogger.in.error(
                  "getLocationIdFromSearchResultLocation: received no valid locationId",
                ),
              t
            );
          }
          addSelectedItemToDictionary(e) {
            this.inputModelProvider.addToDictionary(e);
          }
        }
        return (
          (e.MORE_CATEGORIES_WORD_PROPOSAL = {
            text: "...",
            type: T.Ac.EMITTER,
          }),
          e
        );
      })();
      var Nn = n("zbI8"),
        Cn = n("DexO"),
        Ln = n("R1li");
      class Pn extends Ln.a {
        constructor(e, t, n, l, i) {
          super(e, t, n, l, i, "navi.TruffleSearchWidgetComponent");
        }
      }
      var _n = l.wb({ encapsulation: 0, styles: [Lt.a], data: {} });
      function En(e) {
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
              "au3-navsearch-help-text-item",
              [],
              null,
              null,
              null,
              Pt.b,
              Pt.a,
            )),
            l.xb(1, 49152, null, 0, _t.a, [], null, null),
          ],
          null,
          null,
        );
      }
      function $n(e) {
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
              "au3-navsearch-help-text-item",
              [],
              null,
              null,
              null,
              Pt.b,
              Pt.a,
            )),
            l.xb(1, 49152, null, 0, _t.a, [], null, null),
          ],
          null,
          null,
        );
      }
      function Mn(e) {
        return l.ac(
          0,
          [
            (e()(), l.hb(16777216, null, null, 1, null, $n)),
            l.xb(
              1,
              16384,
              null,
              0,
              Ge.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(), l.hb(0, null, null, 0)),
          ],
          function (e, t) {
            e(
              t,
              1,
              0,
              t.parent.context.mib3Let.isEmptySearch,
              l.Nb(t.parent, 16),
            );
          },
          null,
        );
      }
      function Rn(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-truffle-search-note",
              [["id", "NoResults"]],
              null,
              null,
              null,
              Et.b,
              Et.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [l.l, l.D, pe.a, de.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, $t.a, [Mt.a, pe.a, we.b], null, null),
          ],
          function (e, t) {
            e(t, 1, 0, "NoResults");
          },
          null,
        );
      }
      function kn(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
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
            (e()(),
            l.yb(
              1,
              0,
              null,
              null,
              8,
              "au3-city-result-list-item",
              [],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (e, t, n) {
                var l = !0;
                return (
                  "mib3Tap" === t &&
                    (l =
                      !1 !==
                        e.component.controller.onTruffleSearchResultTap(
                          e.parent.context.$implicit,
                        ) && l),
                  l
                );
              },
              Rt.b,
              Rt.a,
            )),
            l.xb(2, 147456, null, 0, ce.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              he.a,
              [ce.a, [2, me.a], [2, be.a], de.a],
              null,
              null,
            ),
            l.xb(
              4,
              212992,
              null,
              0,
              ge.a,
              [
                de.a,
                xe.b,
                he.a,
                [2, me.a],
                [2, be.a],
                [2, fe.a],
                [2, ve.a],
                [2, Oe.a],
                l.z,
                ye.a,
                l.l,
                [2, Se.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, Ne.a, Ne.a, [[3, Ne.a]]),
            l.xb(
              6,
              4407296,
              null,
              0,
              Ce.a,
              [
                l.l,
                Le.a,
                l.h,
                Ne.a,
                [2, Pe.a],
                [2, me.b],
                [2, me.a],
                [2, _e.a],
                [2, Ee.a],
              ],
              null,
              null,
            ),
            l.xb(
              7,
              147456,
              null,
              0,
              Me.a,
              [
                [2, ge.a],
                [2, fe.a],
                [2, Re.a],
                [2, Ce.a],
                [2, ke.b],
                l.l,
                De.a,
                we.b,
              ],
              null,
              null,
            ),
            l.xb(
              8,
              147456,
              null,
              0,
              je.a,
              [[2, Ce.a], [2, ge.a], [2, xe.b], Ae.a],
              null,
              null,
            ),
            l.xb(
              9,
              49152,
              null,
              0,
              kt.a,
              [],
              { address: [0, "address"], dopiData: [1, "dopiData"] },
              null,
            ),
          ],
          function (e, t) {
            (e(t, 4, 0),
              e(t, 6, 0),
              e(
                t,
                9,
                0,
                t.context.mib3Let,
                null == t.parent.context.$implicit.dynamicObject ||
                  null == t.parent.context.$implicit.dynamicObject.dopiLayout
                  ? null
                  : t.parent.context.$implicit.dynamicObject.dopiLayout.content,
              ));
          },
          function (e, t) {
            e(t, 1, 0, l.Nb(t, 6).markerClassEnabled);
          },
        );
      }
      function Dn(e) {
        return l.ac(
          0,
          [
            (e()(), l.hb(16777216, null, null, 1, null, kn)),
            l.xb(
              1,
              16384,
              null,
              0,
              Ue.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            (e()(), l.hb(0, null, null, 0)),
          ],
          function (e, t) {
            e(
              t,
              1,
              0,
              null == t.context.$implicit
                ? null
                : t.context.$implicit.staticObject,
            );
          },
          null,
        );
      }
      function wn(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
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
            (e()(),
            l.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-truffle-search-title",
              [],
              null,
              [
                [null, "backButtonTap"],
                [null, "startTextModification"],
              ],
              function (e, t, n) {
                var l = !0,
                  i = e.component;
                return (
                  "backButtonTap" === t && (l = !1 !== i.goBack() && l),
                  "startTextModification" === t &&
                    (l = !1 !== i.controller.onStartWriting() && l),
                  l
                );
              },
              Dt.b,
              Dt.a,
            )),
            l.xb(
              2,
              49152,
              null,
              0,
              wt.a,
              [],
              {
                inputField: [0, "inputField"],
                inputFieldPlaceholderDeveloperText: [
                  1,
                  "inputFieldPlaceholderDeveloperText",
                ],
                hitCount: [2, "hitCount"],
                hasLoader: [3, "hasLoader"],
                loaderActive: [4, "loaderActive"],
                hideRightPadding: [5, "hideRightPadding"],
                disableSDS: [6, "disableSDS"],
              },
              {
                backButtonTap: "backButtonTap",
                startTextModification: "startTextModification",
              },
            ),
            l.Pb(131072, Ge.b, [l.h]),
            (e()(),
            l.yb(
              4,
              0,
              null,
              null,
              4,
              "au3-truffle-search-suggestions",
              [["id", ""]],
              null,
              [[null, "suggestionTap"]],
              function (e, t, n) {
                var l = !0;
                return (
                  "suggestionTap" === t &&
                    (l = !1 !== e.component.controller.onSuggestionTap(n) && l),
                  l
                );
              },
              jt.b,
              jt.a,
            )),
            l.xb(
              5,
              212992,
              null,
              0,
              be.a,
              [l.l, l.D, pe.a, de.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              6,
              180224,
              null,
              0,
              At.a,
              [],
              {
                initialSuggestions: [0, "initialSuggestions"],
                dynamicSuggestions: [1, "dynamicSuggestions"],
                inputField: [2, "inputField"],
              },
              { suggestionTap: "suggestionTap" },
            ),
            l.Pb(131072, Ge.b, [l.h]),
            l.Pb(131072, Ge.b, [l.h]),
            (e()(),
            l.yb(
              9,
              0,
              null,
              null,
              8,
              "au3-truffle-search-keyboard-list",
              [
                ["class", "keyboard"],
                ["id", ""],
              ],
              null,
              [[null, "startWriting"]],
              function (e, t, n) {
                var l = !0;
                return (
                  "startWriting" === t &&
                    (l = !1 !== e.component.controller.onStartWriting() && l),
                  l
                );
              },
              Bt.b,
              Bt.a,
            )),
            l.xb(
              10,
              212992,
              null,
              0,
              be.a,
              [l.l, l.D, pe.a, de.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              11,
              4898816,
              [["searchResultList", 4]],
              0,
              Wt.a,
              [ze.a, Mt.a, pe.a, we.b, Ft.a, zt.a, Gt.a, de.a],
              {
                items: [0, "items"],
                waitingForInput: [1, "waitingForInput"],
                searchInProgress: [2, "searchInProgress"],
                searchCompleted: [3, "searchCompleted"],
                listItemHeight: [4, "listItemHeight"],
                itemTemplate: [5, "itemTemplate"],
                helpTextTemplate: [6, "helpTextTemplate"],
                noResultsTemplate: [7, "noResultsTemplate"],
                inputField: [8, "inputField"],
                contextId: [9, "contextId"],
              },
              { startWriting: "startWriting" },
            ),
            l.Pb(131072, Ge.b, [l.h]),
            l.Pb(131072, Ge.b, [l.h]),
            (e()(), l.hb(0, [["helpTextTemplate", 2]], null, 0, null, En)),
            (e()(), l.hb(0, [["noResultTemplate", 2]], null, 0, null, Mn)),
            (e()(),
            l.hb(0, [["noResultsFilledSearchTemplate", 2]], null, 0, null, Rn)),
            (e()(), l.hb(0, [["itemTemplate", 2]], null, 0, null, Dn)),
          ],
          function (e, t) {
            var n = t.component;
            (e(
              t,
              2,
              0,
              n.inputField,
              "Welches Ziel?",
              l.Yb(
                t,
                2,
                2,
                l.Nb(t, 3).transform(n.controller.searchResultCount$),
              ),
              !0,
              t.context.mib3Let.searchInProgress,
              !0,
              n.disableSDS,
            ),
              e(t, 5, 0, ""),
              e(
                t,
                6,
                0,
                l.Yb(
                  t,
                  6,
                  0,
                  l.Nb(t, 7).transform(n.controller.initialSuggestions$),
                ),
                l.Yb(
                  t,
                  6,
                  1,
                  l.Nb(t, 8).transform(n.controller.dynamicSuggestions$),
                ),
                n.inputField,
              ),
              e(t, 10, 0, ""),
              e(
                t,
                11,
                0,
                l.Yb(
                  t,
                  11,
                  0,
                  l.Nb(t, 12).transform(n.controller.searchResults$),
                ),
                l.Yb(
                  t,
                  11,
                  1,
                  l.Nb(t, 13).transform(n.controller.searchWaitingForInput$),
                ),
                t.context.mib3Let.searchInProgress,
                t.context.mib3Let.searchCompleted,
                120,
                l.Nb(t, 17),
                l.Nb(t, 14),
                l.Nb(t, 15),
                n.inputField,
                n.controller.getContextId(),
              ));
          },
          null,
        );
      }
      function jn(e) {
        return l.ac(
          0,
          [
            (e()(), l.hb(16777216, null, null, 5, null, wn)),
            l.xb(
              1,
              16384,
              null,
              0,
              Ue.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, Ge.b, [l.h]),
            l.Pb(131072, Ge.b, [l.h]),
            l.Pb(131072, Ge.b, [l.h]),
            l.Qb(5, {
              isEmptySearch: 0,
              searchInProgress: 1,
              searchCompleted: 2,
            }),
          ],
          function (e, t) {
            var n = t.component,
              i = e(
                t,
                5,
                0,
                l.Yb(
                  t,
                  1,
                  0,
                  l.Nb(t, 2).transform(n.controller.isEmptySearch$),
                ),
                l.Yb(
                  t,
                  1,
                  0,
                  l.Nb(t, 3).transform(n.controller.searchInProgress$),
                ),
                l.Yb(
                  t,
                  1,
                  0,
                  l.Nb(t, 4).transform(n.controller.searchCompleted$),
                ),
              );
            e(t, 1, 0, i);
          },
          null,
        );
      }
      var An = n("CMu/"),
        Bn = n("6ifu"),
        Wn = l.wb({ encapsulation: 2, styles: [], data: {} });
      function Fn(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              28,
              "au3-screen",
              [
                ["id", "Screen:WEBAPP_TRUFFLE_SEARCH_SCREEN"],
                ["ttDisplayVariant", ""],
              ],
              null,
              null,
              null,
              Je.b,
              Je.a,
            )),
            l.xb(1, 16384, null, 0, Ct.a, [], null, null),
            l.xb(
              2,
              212992,
              null,
              0,
              be.a,
              [l.l, l.D, pe.a, de.a, [3, be.a], [6, Ct.a]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(3, 4440064, null, 0, ve.a, [de.a], { id: [0, "id"] }, null),
            (e()(),
            l.yb(
              4,
              0,
              null,
              0,
              24,
              "au3-truffle-search-widget",
              [],
              null,
              [
                [null, "destinationSelected"],
                [null, "goBackSelected"],
              ],
              function (e, t, n) {
                var l = !0,
                  i = e.component;
                return (
                  "destinationSelected" === t &&
                    (l = !1 !== i.destinationSelected(n) && l),
                  "goBackSelected" === t && (l = !1 !== i.goBack() && l),
                  l
                );
              },
              jn,
              _n,
            )),
            l.Sb(135680, null, Ut.a, Ut.a, [qe.a, Yt.a, de.a]),
            l.Sb(135680, null, Ht.a, Ht.a, [Vt.a, de.a]),
            l.Sb(6144, null, Xt.a, null, [Ut.a]),
            l.Sb(6144, null, qt.a.NAVI_ROUTING, null, [Zt]),
            l.Sb(131584, null, Qt, Qt, [Jt.c, en.a, de.a]),
            l.Sb(2048, null, qt.a.INPUT_MODEL, null, [Qt]),
            l.Sb(512, null, tn.a, tn.a, [nn.b]),
            l.Sb(2048, null, qt.a.INITIAL_INPUT, null, [tn.a]),
            l.Sb(512, null, Zt, Zt, []),
            l.Sb(2048, null, qt.a.ROUTING, null, [Zt]),
            l.Sb(131584, null, ln.a, ln.a, [de.a]),
            l.Sb(2048, null, an.a, null, [ln.a]),
            l.Sb(512, null, un, un, []),
            l.Sb(2048, null, rn.a, null, [un]),
            l.Sb(131584, null, sn.a, sn.a, [
              cn.a,
              bn.a,
              an.a,
              rn.a,
              pn.a,
              dn.a,
              hn.a,
              mn.b,
              de.a,
            ]),
            l.Sb(2048, null, qt.a.SEARCH, null, [sn.a]),
            l.Sb(131584, null, gn.a, gn.a, []),
            l.Sb(2048, null, qt.a.INITIAL_SUGGESTION, null, [gn.a]),
            l.Sb(512, null, xn.a, xn.a, [fn.a, en.a]),
            l.Sb(2048, null, qt.a.DYNAMIC_SUGGESTION, null, [xn.a]),
            l.Sb(2048, null, qt.a.LOCATION, null, [vn.a]),
            l.Sb(512, null, On.a, On.a, [yn.c]),
            l.Sb(131584, null, In, In, [
              qt.a.INPUT_MODEL,
              qt.a.INITIAL_INPUT,
              qt.a.ROUTING,
              qt.a.SEARCH,
              qt.a.INITIAL_SUGGESTION,
              qt.a.DYNAMIC_SUGGESTION,
              qt.a.LOCATION,
              On.a,
              hn.a,
              de.a,
            ]),
            l.xb(28, 4440064, null, 0, Pn, [In, Cn.a, Nn.a, l.h, de.a], null, {
              destinationSelected: "destinationSelected",
              goBackSelected: "goBackSelected",
            }),
          ],
          function (e, t) {
            (e(t, 2, 0, "Screen:WEBAPP_TRUFFLE_SEARCH_SCREEN"),
              e(t, 3, 0, "Screen:WEBAPP_TRUFFLE_SEARCH_SCREEN"),
              e(t, 28, 0));
          },
          null,
        );
      }
      function zn(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              5,
              "au3-truffle-search-action",
              [],
              null,
              null,
              null,
              Fn,
              Wn,
            )),
            l.Sb(135680, null, An.a, An.a, [pe.a, Bn.a]),
            l.Sb(6144, null, Yt.a, null, [An.a]),
            l.Sb(135680, null, Ut.a, Ut.a, [qe.a, Yt.a, de.a]),
            l.Sb(6144, null, Xt.a, null, [Ut.a]),
            l.xb(5, 245760, null, 0, H, [U.a, et.a], null, null),
          ],
          function (e, t) {
            e(t, 5, 0);
          },
          null,
        );
      }
      var Gn = l.ub("au3-truffle-search-action", H, zn, {}, {}, []),
        Un = n("pNLL"),
        Yn = n("dtma"),
        Hn = n("KczA"),
        Vn = n("sg2e"),
        Xn = l.wb({ encapsulation: 2, styles: [], data: {} });
      function qn(e) {
        return l.ac(
          0,
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
                ["id", "Screen:WEBAPP_TEXTINPUT_SCREEN"],
                ["ttDisplayVariant", ""],
              ],
              null,
              null,
              null,
              Je.b,
              Je.a,
            )),
            l.xb(1, 16384, null, 0, Ct.a, [], null, null),
            l.xb(
              2,
              212992,
              null,
              0,
              be.a,
              [l.l, l.D, pe.a, de.a, [3, be.a], [6, Ct.a]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(3, 4440064, null, 0, ve.a, [de.a], { id: [0, "id"] }, null),
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
              [
                [null, "selectedProposal"],
                [null, "onSave"],
              ],
              function (e, t, n) {
                var l = !0,
                  i = e.component;
                return (
                  "selectedProposal" === t &&
                    (l =
                      !1 !==
                        i.onSave((null == n ? null : n.text) || "invalid") &&
                      l),
                  "onSave" === t && (l = !1 !== i.onSave(n) && l),
                  l
                );
              },
              Un.b,
              Un.a,
            )),
            l.xb(
              5,
              704512,
              null,
              0,
              Yn.a,
              [Jt.c, Hn.a, et.a, Vn.a, nt.a],
              {
                hasProposals: [0, "hasProposals"],
                placeholderNonI18nText: [1, "placeholderNonI18nText"],
                descriptionNonI18nText: [2, "descriptionNonI18nText"],
                inputField: [3, "inputField"],
                routeBackOnOk: [4, "routeBackOnOk"],
                inputInvalidWarningMessage: [5, "inputInvalidWarningMessage"],
                overrideProposals: [6, "overrideProposals"],
                staticProposals: [7, "staticProposals"],
                primaryNonI18nTitle: [8, "primaryNonI18nTitle"],
                secondaryNonI18nTitle: [9, "secondaryNonI18nTitle"],
              },
              { onSave: "onSave", selectedProposal: "selectedProposal" },
            ),
            l.Pb(131072, Ge.b, [l.h]),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 2, 0, "Screen:WEBAPP_TEXTINPUT_SCREEN"),
              e(t, 3, 0, "Screen:WEBAPP_TEXTINPUT_SCREEN"),
              e(
                t,
                5,
                0,
                !0,
                null == t.context.mib3Let
                  ? null
                  : t.context.mib3Let.placeholder,
                null == t.context.mib3Let
                  ? null
                  : t.context.mib3Let.description,
                l.Yb(t, 5, 3, l.Nb(t, 6).transform(n.inputField$)),
                !1,
                null == t.context.mib3Let
                  ? null
                  : t.context.mib3Let.invalidWarningPopupId,
                null == t.context.mib3Let
                  ? null
                  : t.context.mib3Let.overrideProposals,
                null == t.context.mib3Let
                  ? null
                  : t.context.mib3Let.staticProposals,
                null == t.context.mib3Let
                  ? null
                  : t.context.mib3Let.primaryTitle,
                null == t.context.mib3Let
                  ? null
                  : t.context.mib3Let.secondaryTitle,
              ));
          },
          null,
        );
      }
      function Zn(e) {
        return l.ac(
          2,
          [
            (e()(), l.hb(16777216, null, null, 2, null, qn)),
            l.xb(
              1,
              16384,
              null,
              0,
              Ue.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, Ge.b, [l.h]),
          ],
          function (e, t) {
            var n = t.component;
            e(t, 1, 0, l.Yb(t, 1, 0, l.Nb(t, 2).transform(n.params$)));
          },
          null,
        );
      }
      function Kn(e) {
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
              "au3-textinput-action",
              [],
              null,
              null,
              null,
              Zn,
              Xn,
            )),
            l.xb(
              1,
              245760,
              null,
              0,
              K,
              [U.a, et.a, nt.a, Jt.c, de.a],
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
      var Qn = l.ub("au3-textinput-action", K, Kn, {}, {}, []),
        Jn = n("ixDV"),
        el = n("cdBV"),
        tl = n("yVoU"),
        nl = n("9ZFG"),
        ll = n("Fn96"),
        il = n("N2Hj"),
        al = n("UbWD"),
        ol = n("2rvh"),
        rl = n("odRV"),
        ul = n("Udyh"),
        sl = n("I3ve"),
        cl = n("qiAR"),
        bl = n("007S"),
        pl = n("oeT7"),
        dl = n("oxWk"),
        hl = n("6uGs"),
        ml = l.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;max-width:100%;max-height:100%;overflow:hidden}.list[_ngcontent-%COMP%]{display:block;margin:20px 70px 0;flex:1 1 0}.list-item[_ngcontent-%COMP%]{height:100px}.control-buttons[_ngcontent-%COMP%]{display:block;align-self:center;margin-bottom:29px;margin-top:10px;height:120px}",
            ],
          ],
          data: {},
        });
      function gl(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
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
            (e()(),
            l.yb(
              1,
              0,
              null,
              null,
              1,
              "au3-toggle-button-group",
              [["class", "toggle-buttons"]],
              null,
              [[null, "selectedChange"]],
              function (e, t, n) {
                var l = !0;
                return (
                  "selectedChange" === t &&
                    (l =
                      !1 !==
                        e.component.setSelectedToggleItem(
                          e.parent.context.$implicit,
                          n,
                        ) && l),
                  l
                );
              },
              Jn.b,
              Jn.a,
            )),
            l.xb(
              2,
              4374528,
              null,
              0,
              el.a,
              [[2, fe.a], l.h],
              {
                titleNonI18nText: [0, "titleNonI18nText"],
                data: [1, "data"],
                selected: [2, "selected"],
              },
              { selectedChange: "selectedChange" },
            ),
          ],
          function (e, t) {
            e(
              t,
              2,
              0,
              null == t.parent.context.$implicit
                ? null
                : t.parent.context.$implicit.toggleButtonGroupTitle,
              null == t.parent.context.$implicit
                ? null
                : t.parent.context.$implicit.toggleButtonGroupOptions,
              t.component.getSelectedToggleItem(t.parent.context.$implicit),
            );
          },
          null,
        );
      }
      function xl(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-list-form-field-item",
              [["class", "list-item"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (e, t, n) {
                var l = !0;
                return (
                  "mib3Tap" === t &&
                    (l =
                      !1 !==
                        e.component.selectTextinput(
                          e.parent.context.$implicit,
                        ) && l),
                  l
                );
              },
              tl.b,
              tl.a,
            )),
            l.xb(1, 147456, null, 0, ce.a, [l.l, l.z], null, null),
            l.xb(
              2,
              147456,
              null,
              0,
              he.a,
              [ce.a, [2, me.a], [2, be.a], de.a],
              null,
              null,
            ),
            l.xb(
              3,
              147456,
              null,
              0,
              fe.a,
              [nl.a, l.h, de.a, [3, fe.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            l.xb(
              4,
              212992,
              null,
              0,
              ge.a,
              [
                de.a,
                xe.b,
                he.a,
                [2, me.a],
                [2, be.a],
                [2, fe.a],
                [2, ve.a],
                [2, Oe.a],
                l.z,
                ye.a,
                l.l,
                [2, Se.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, Ne.a, Ne.a, [[3, Ne.a]]),
            l.xb(
              6,
              4407296,
              null,
              0,
              Ce.a,
              [
                l.l,
                Le.a,
                l.h,
                Ne.a,
                [2, Pe.a],
                [2, me.b],
                [2, me.a],
                [2, _e.a],
                [2, Ee.a],
              ],
              null,
              null,
            ),
            l.xb(
              7,
              49152,
              null,
              0,
              ll.a,
              [],
              {
                nonI18nText: [0, "nonI18nText"],
                content: [1, "content"],
                placeholderNonI18nText: [2, "placeholderNonI18nText"],
              },
              null,
            ),
            l.xb(
              8,
              147456,
              null,
              0,
              Me.a,
              [
                [2, ge.a],
                [2, fe.a],
                [2, Re.a],
                [2, Ce.a],
                [2, ke.b],
                l.l,
                De.a,
                we.b,
              ],
              null,
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              je.a,
              [[2, Ce.a], [2, ge.a], [2, xe.b], Ae.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(
              t,
              3,
              0,
              null == t.parent.context.$implicit
                ? null
                : t.parent.context.$implicit.disabled,
            ),
              e(t, 4, 0),
              e(t, 6, 0),
              e(
                t,
                7,
                0,
                null == t.parent.context.$implicit
                  ? null
                  : t.parent.context.$implicit.labelText,
                n.logbookManualEntryService.getInputFieldText(
                  t.parent.context.$implicit,
                ),
                null == t.parent.context.$implicit
                  ? null
                  : t.parent.context.$implicit.placeholder,
              ));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              l.Nb(t, 3).combinedDisabled,
              l.Nb(t, 3).useBrighterIcon,
              l.Nb(t, 6).markerClassEnabled,
            );
          },
        );
      }
      function fl(e) {
        return l.ac(
          0,
          [
            (e()(), l.hb(16777216, [[1, 2]], null, 1, null, gl)),
            l.xb(
              1,
              16384,
              null,
              0,
              Ge.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(),
            l.hb(
              0,
              [
                [1, 2],
                ["textInputItem", 2],
              ],
              null,
              0,
              null,
              xl,
            )),
          ],
          function (e, t) {
            e(
              t,
              1,
              0,
              null !=
                (null == t.context.$implicit
                  ? null
                  : t.context.$implicit.toggleButtonId),
              l.Nb(t, 2),
            );
          },
          null,
        );
      }
      function vl(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              10,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            l.yb(
              1,
              0,
              null,
              null,
              9,
              "au3-operation-panel-item",
              [],
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
              function (e, t, n) {
                var l = !0;
                return (
                  "mib3Tap" === t &&
                    (l =
                      !1 !== e.component.executeButton(e.context.$implicit) &&
                      l),
                  l
                );
              },
              mt.b,
              mt.a,
            )),
            l.xb(2, 147456, null, 0, ce.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              he.a,
              [ce.a, [2, me.a], [2, be.a], de.a],
              null,
              null,
            ),
            l.xb(
              4,
              147456,
              null,
              0,
              fe.a,
              [nl.a, l.h, de.a, [3, fe.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              ge.a,
              [
                de.a,
                xe.b,
                he.a,
                [2, me.a],
                [2, be.a],
                [2, fe.a],
                [2, ve.a],
                [2, Oe.a],
                l.z,
                ye.a,
                l.l,
                [2, Se.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, Ne.a, Ne.a, [[3, Ne.a]]),
            l.xb(
              7,
              4407296,
              null,
              0,
              Ce.a,
              [
                l.l,
                Le.a,
                l.h,
                Ne.a,
                [2, Pe.a],
                [2, me.b],
                [2, me.a],
                [2, _e.a],
                [2, Ee.a],
              ],
              null,
              null,
            ),
            l.xb(
              8,
              49152,
              null,
              0,
              gt.a,
              [],
              {
                hasText: [0, "hasText"],
                nonI18nText: [1, "nonI18nText"],
                icon: [2, "icon"],
                prio1Item: [3, "prio1Item"],
              },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              Me.a,
              [
                [2, ge.a],
                [2, fe.a],
                [2, Re.a],
                [2, Ce.a],
                [2, ke.b],
                l.l,
                De.a,
                we.b,
              ],
              null,
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              je.a,
              [[2, Ce.a], [2, ge.a], [2, xe.b], Ae.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            (e(
              t,
              4,
              0,
              null == t.context.$implicit ? null : t.context.$implicit.disabled,
              null == t.context.$implicit
                ? null
                : t.context.$implicit.disabledReason,
            ),
              e(t, 5, 0),
              e(t, 7, 0),
              e(
                t,
                8,
                0,
                !0,
                null == t.context.$implicit ? null : t.context.$implicit.text,
                null == t.context.$implicit ? null : t.context.$implicit.icon,
                !0,
              ));
          },
          function (e, t) {
            e(t, 1, 1, [
              l.Nb(t, 4).combinedDisabled,
              l.Nb(t, 4).useBrighterIcon,
              l.Nb(t, 7).markerClassEnabled,
              l.Nb(t, 8).showSeparatorLeft,
              l.Nb(t, 8).showSeparatorRight,
              l.Nb(t, 8).prio1Main,
              l.Nb(t, 8).prio1SmallScale,
              l.Nb(t, 8).prio2SmallScale,
              l.Nb(t, 8).prio1,
              l.Nb(t, 8).prio2,
              l.Nb(t, 8).prio1IconText,
              l.Nb(t, 8).prio1IconOnly,
              l.Nb(t, 8).prio1TextOnly,
              l.Nb(t, 8).prio2IconText,
              l.Nb(t, 8).prio2IconOnly,
              l.Nb(t, 8).prio2TextOnly,
              l.Nb(t, 8).useDefaultMaxWidth,
              l.Nb(t, 8).isDummy,
            ]);
          },
        );
      }
      function Ol(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
              0,
              0,
              null,
              null,
              38,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:LOGBOOK_GOODBYE_CATEGORIZE_MANUAL_ENTRY"],
              ],
              null,
              null,
              null,
              Je.b,
              Je.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [l.l, l.D, pe.a, de.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 4440064, null, 0, ve.a, [de.a], { id: [0, "id"] }, null),
            (e()(),
            l.yb(
              3,
              0,
              null,
              0,
              35,
              "div",
              [["class", "screen content"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            l.yb(
              4,
              0,
              null,
              null,
              14,
              "au3-title-line",
              [
                ["class", "title"],
                ["id", "title"],
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
              5,
              212992,
              null,
              0,
              be.a,
              [l.l, l.D, pe.a, de.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              6,
              49152,
              null,
              0,
              We.a,
              [Fe.a, ze.a],
              {
                primaryNonI18nText: [0, "primaryNonI18nText"],
                hasSecondaryText: [1, "hasSecondaryText"],
                secondaryNonI18nText: [2, "secondaryNonI18nText"],
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
              function (e, t, n) {
                var l = !0;
                return (
                  "mib3Tap" === t && (l = !1 !== e.component.backTapped() && l),
                  l
                );
              },
              se.b,
              se.a,
            )),
            l.xb(8, 147456, null, 0, ce.a, [l.l, l.z], null, null),
            l.xb(
              9,
              212992,
              null,
              0,
              be.a,
              [l.l, l.D, pe.a, de.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              he.a,
              [ce.a, [2, me.a], [2, be.a], de.a],
              null,
              null,
            ),
            l.xb(
              11,
              212992,
              null,
              0,
              ge.a,
              [
                de.a,
                xe.b,
                he.a,
                [2, me.a],
                [2, be.a],
                [2, fe.a],
                [2, ve.a],
                [2, Oe.a],
                l.z,
                ye.a,
                l.l,
                [2, Se.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.xb(
              12,
              147456,
              null,
              0,
              Te.a,
              [de.a, Ie.a, l.l, [2, ge.a], [2, fe.a]],
              null,
              null,
            ),
            l.xb(13, 16384, null, 0, Ke.a, [], null, null),
            l.Sb(131584, null, Ne.a, Ne.a, [[3, Ne.a]]),
            l.xb(
              15,
              4407296,
              null,
              0,
              Ce.a,
              [
                l.l,
                Le.a,
                l.h,
                Ne.a,
                [2, Pe.a],
                [2, me.b],
                [2, me.a],
                [2, _e.a],
                [2, Ee.a],
              ],
              null,
              null,
            ),
            l.xb(
              16,
              49152,
              null,
              0,
              $e.a,
              [[2, fe.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            l.xb(
              17,
              147456,
              null,
              0,
              Me.a,
              [
                [2, ge.a],
                [2, fe.a],
                [2, Re.a],
                [2, Ce.a],
                [2, ke.b],
                l.l,
                De.a,
                we.b,
              ],
              null,
              null,
            ),
            l.xb(
              18,
              147456,
              null,
              0,
              je.a,
              [[2, Ce.a], [2, ge.a], [2, xe.b], Ae.a],
              null,
              null,
            ),
            (e()(),
            l.yb(
              19,
              0,
              null,
              null,
              5,
              "au3-list",
              [["class", "list"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              il.b,
              il.a,
            )),
            l.Sb(6144, null, al.a, null, [ol.a]),
            l.xb(21, 16384, null, 0, rl.a, [l.l], null, null),
            l.xb(
              22,
              12828672,
              null,
              1,
              ol.a,
              [
                [2, ul.a],
                [2, sl.a],
                [8, null],
                [2, be.a],
                [2, cl.a],
                [2, bl.a],
                [2, xe.b],
                pl.i,
                l.z,
                l.h,
                de.a,
                dl.a,
                hn.a,
                [2, Le.a],
                me.a,
                [2, pl.a],
              ],
              { defaultTemplate: [0, "defaultTemplate"], items: [1, "items"] },
              null,
            ),
            l.Tb(603979776, 1, { template: 0 }),
            (e()(),
            l.hb(
              0,
              [
                [1, 2],
                ["listTemplate", 2],
              ],
              0,
              0,
              null,
              fl,
            )),
            (e()(),
            l.yb(
              25,
              0,
              null,
              null,
              13,
              "au3-operation-panel",
              [["class", "control-buttons"]],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              pt.b,
              pt.a,
            )),
            l.xb(26, 49152, null, 0, dt.a, [ht.a], null, null),
            (e()(), l.hb(16777216, null, 1, 1, null, vl)),
            l.xb(
              28,
              278528,
              null,
              0,
              Ge.j,
              [l.P, l.L, l.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
            (e()(),
            l.yb(
              29,
              0,
              null,
              1,
              9,
              "au3-operation-panel-item",
              [["id", "LogbookManualEntryButtonConfirmData"]],
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
              function (e, t, n) {
                var l = !0;
                return (
                  "mib3Tap" === t &&
                    (l = !1 !== e.component.confirmData() && l),
                  l
                );
              },
              mt.b,
              mt.a,
            )),
            l.xb(
              30,
              212992,
              null,
              0,
              be.a,
              [l.l, l.D, pe.a, de.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(31, 147456, null, 0, ce.a, [l.l, l.z], null, null),
            l.xb(
              32,
              147456,
              null,
              0,
              he.a,
              [ce.a, [2, me.a], [2, be.a], de.a],
              null,
              null,
            ),
            l.xb(
              33,
              212992,
              null,
              0,
              ge.a,
              [
                de.a,
                xe.b,
                he.a,
                [2, me.a],
                [2, be.a],
                [2, fe.a],
                [2, ve.a],
                [2, Oe.a],
                l.z,
                ye.a,
                l.l,
                [2, Se.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, Ne.a, Ne.a, [[3, Ne.a]]),
            l.xb(
              35,
              4407296,
              null,
              0,
              Ce.a,
              [
                l.l,
                Le.a,
                l.h,
                Ne.a,
                [2, Pe.a],
                [2, me.b],
                [2, me.a],
                [2, _e.a],
                [2, Ee.a],
              ],
              null,
              null,
            ),
            l.xb(
              36,
              49152,
              null,
              0,
              gt.a,
              [],
              {
                hasText: [0, "hasText"],
                developerText: [1, "developerText"],
                prio1Item: [2, "prio1Item"],
              },
              null,
            ),
            l.xb(
              37,
              147456,
              null,
              0,
              Me.a,
              [
                [2, ge.a],
                [2, fe.a],
                [2, Re.a],
                [2, Ce.a],
                [2, ke.b],
                l.l,
                De.a,
                we.b,
              ],
              null,
              null,
            ),
            l.xb(
              38,
              147456,
              null,
              0,
              je.a,
              [[2, Ce.a], [2, ge.a], [2, xe.b], Ae.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            (e(t, 1, 0, "Screen:LOGBOOK_GOODBYE_CATEGORIZE_MANUAL_ENTRY"),
              e(t, 2, 0, "Screen:LOGBOOK_GOODBYE_CATEGORIZE_MANUAL_ENTRY"),
              e(t, 5, 0, "title"),
              e(
                t,
                6,
                0,
                null == t.context.mib3Let
                  ? null
                  : t.context.mib3Let.summaryScreenPrimaryTitle,
                !0,
                null == t.context.mib3Let
                  ? null
                  : t.context.mib3Let.summaryScreenSecondaryTitle,
              ),
              e(t, 9, 0, "BackButton"),
              e(t, 11, 0),
              e(t, 15, 0),
              e(t, 16, 0, !1, "E163_Backbutton.webp"),
              e(
                t,
                22,
                0,
                l.Nb(t, 24),
                null == t.context.mib3Let
                  ? null
                  : t.context.mib3Let.listElements,
              ),
              e(
                t,
                28,
                0,
                null == t.context.mib3Let
                  ? null
                  : t.context.mib3Let.additionalButtons,
              ),
              e(t, 30, 0, "LogbookManualEntryButtonConfirmData"),
              e(t, 33, 0),
              e(t, 35, 0),
              e(t, 36, 0, !0, "Eintragen", !0));
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
              e(t, 19, 0, l.Nb(t, 22).showLineNumbers),
              e(t, 25, 0, l.Nb(t, 26).alignInside, l.Nb(t, 26).alignOutside),
              e(t, 29, 1, [
                l.Nb(t, 35).markerClassEnabled,
                l.Nb(t, 36).showSeparatorLeft,
                l.Nb(t, 36).showSeparatorRight,
                l.Nb(t, 36).prio1Main,
                l.Nb(t, 36).prio1SmallScale,
                l.Nb(t, 36).prio2SmallScale,
                l.Nb(t, 36).prio1,
                l.Nb(t, 36).prio2,
                l.Nb(t, 36).prio1IconText,
                l.Nb(t, 36).prio1IconOnly,
                l.Nb(t, 36).prio1TextOnly,
                l.Nb(t, 36).prio2IconText,
                l.Nb(t, 36).prio2IconOnly,
                l.Nb(t, 36).prio2TextOnly,
                l.Nb(t, 36).useDefaultMaxWidth,
                l.Nb(t, 36).isDummy,
              ]));
          },
        );
      }
      function yl(e) {
        return l.ac(
          2,
          [
            (e()(), l.hb(16777216, null, null, 2, null, Ol)),
            l.xb(
              1,
              16384,
              null,
              0,
              Ue.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, Ge.b, [l.h]),
          ],
          function (e, t) {
            var n = t.component;
            e(
              t,
              1,
              0,
              l.Yb(
                t,
                1,
                0,
                l.Nb(t, 2).transform(n.logbookManualEntryService.inputData$),
              ),
            );
          },
          null,
        );
      }
      function Sl(e) {
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
              "au3-logbook-manual-entry",
              [],
              null,
              null,
              null,
              yl,
              ml,
            )),
            l.xb(
              1,
              180224,
              null,
              0,
              te,
              [ee.a, J.e, l.h, hl.c, et.a, de.a],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var Tl = l.ub("au3-logbook-manual-entry", te, Sl, {}, {}, []),
        Il = l.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;max-width:100%;max-height:100%;overflow:hidden}.list[_ngcontent-%COMP%]{display:block;margin:20px 70px 0;flex:1 1 0}.list-item[_ngcontent-%COMP%]{height:100px}.control-buttons[_ngcontent-%COMP%]{display:block;align-self:center;margin-bottom:29px;margin-top:10px;height:120px}",
            ],
          ],
          data: {},
        });
      function Nl(e) {
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
            (e()(),
            l.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-enter-name-or-code",
              [],
              null,
              [
                [null, "selectedProposal"],
                [null, "onSave"],
                [null, "onBack"],
              ],
              function (e, t, n) {
                var l = !0,
                  i = e.component;
                return (
                  "selectedProposal" === t &&
                    (l =
                      !1 !==
                        i.onSave(
                          e.context.mib3Let,
                          (null == n ? null : n.text) || "",
                        ) && l),
                  "onSave" === t &&
                    (l = !1 !== i.onSave(e.context.mib3Let, n) && l),
                  "onBack" === t && (l = !1 !== i.backTapped() && l),
                  l
                );
              },
              Un.b,
              Un.a,
            )),
            l.xb(
              2,
              704512,
              null,
              0,
              Yn.a,
              [Jt.c, Hn.a, et.a, Vn.a, nt.a],
              {
                hasProposals: [0, "hasProposals"],
                placeholderNonI18nText: [1, "placeholderNonI18nText"],
                descriptionNonI18nText: [2, "descriptionNonI18nText"],
                inputField: [3, "inputField"],
                routeBackOnOk: [4, "routeBackOnOk"],
                overrideProposals: [5, "overrideProposals"],
                staticProposals: [6, "staticProposals"],
                emitBackEventInsteadOfRouting: [
                  7,
                  "emitBackEventInsteadOfRouting",
                ],
                primaryNonI18nTitle: [8, "primaryNonI18nTitle"],
                secondaryNonI18nTitle: [9, "secondaryNonI18nTitle"],
              },
              {
                onSave: "onSave",
                selectedProposal: "selectedProposal",
                onBack: "onBack",
              },
            ),
            l.Pb(131072, Ge.b, [l.h]),
          ],
          function (e, t) {
            var n = t.component;
            e(
              t,
              2,
              0,
              null == t.context.mib3Let ? null : t.context.mib3Let.hasProposals,
              null == t.context.mib3Let ? null : t.context.mib3Let.placeholder,
              null == t.context.mib3Let ? null : t.context.mib3Let.description,
              l.Yb(
                t,
                2,
                3,
                l.Nb(t, 3).transform(n.logbookManualEntryService.inputField$),
              ),
              !1,
              null == t.context.mib3Let
                ? null
                : t.context.mib3Let.overrideProposals,
              null == t.context.mib3Let
                ? null
                : t.context.mib3Let.staticProposals,
              !0,
              null == t.context.mib3Let ? null : t.context.mib3Let.primaryTitle,
              null == t.context.mib3Let
                ? null
                : t.context.mib3Let.secondaryTitle,
            );
          },
          null,
        );
      }
      function Cl(e) {
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
                ["class", "screen"],
                [
                  "id",
                  "Screen:LOGBOOK_GOODBYE_CATEGORIZE_MANUAL_ENTRY_TEXTINPUT",
                ],
              ],
              null,
              null,
              null,
              Je.b,
              Je.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              be.a,
              [l.l, l.D, pe.a, de.a, [3, be.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 4440064, null, 0, ve.a, [de.a], { id: [0, "id"] }, null),
            (e()(),
            l.yb(
              3,
              0,
              null,
              0,
              3,
              "div",
              [["class", "screen content"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), l.hb(16777216, null, null, 2, null, Nl)),
            l.xb(
              5,
              16384,
              null,
              0,
              Ue.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, Ge.b, [l.h]),
          ],
          function (e, t) {
            var n = t.component;
            (e(
              t,
              1,
              0,
              "Screen:LOGBOOK_GOODBYE_CATEGORIZE_MANUAL_ENTRY_TEXTINPUT",
            ),
              e(
                t,
                2,
                0,
                "Screen:LOGBOOK_GOODBYE_CATEGORIZE_MANUAL_ENTRY_TEXTINPUT",
              ),
              e(
                t,
                5,
                0,
                l.Yb(
                  t,
                  5,
                  0,
                  l
                    .Nb(t, 6)
                    .transform(
                      n.logbookManualEntryService.currentTextinputData$$,
                    ),
                ),
              ));
          },
          null,
        );
      }
      function Ll(e) {
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
              "au3-logbook-manual-entry-textinput",
              [],
              null,
              null,
              null,
              Cl,
              Il,
            )),
            l.xb(1, 180224, null, 0, ne, [ee.a, et.a], null, null),
          ],
          null,
          null,
        );
      }
      var Pl = l.ub("au3-logbook-manual-entry-textinput", ne, Ll, {}, {}, []),
        _l = n("aDqW"),
        El = n("/W5r"),
        $l = n("+Qv1"),
        Ml = n("XtoR"),
        Rl = n("jTHl"),
        kl = n("zL3T"),
        Dl = n("+epw"),
        wl = n("zMPs"),
        jl = n("6Yk8"),
        Al = n("u6+O"),
        Bl = n("CIQC"),
        Wl = n("REmV"),
        Fl = n("Y3N+"),
        zl = n("MJxn"),
        Gl = n("eIOF"),
        Ul = n("t+4g"),
        Yl = n("myjn"),
        Hl = n("fOZ7"),
        Vl = n("QDrj"),
        Xl = n("YCQm"),
        ql = n("dezT"),
        Zl = n("OXFN"),
        Kl = n("HR1b"),
        Ql = n("nybo"),
        Jl = l.vb(ae, [], function (e) {
          return l.Kb([
            l.Lb(512, l.j, l.X, [
              [8, [oe.a, re.a, ue.a, st, Ot, It, Nt.a, Gn, Qn, Tl, Pl]],
              [3, l.j],
              l.x,
            ]),
            l.Lb(4608, Ge.m, Ge.l, [l.u]),
            l.Lb(4608, _l.h, _l.g, []),
            l.Lb(4608, _l.d, _l.f, []),
            l.Lb(4608, _l.j, _l.e, []),
            l.Lb(4608, _l.c, _l.b, []),
            l.Lb(4608, _l.k, _l.k, [
              _l.l,
              _l.h,
              _l.d,
              _l.j,
              _l.c,
              _l.m,
              _l.o,
              _l.n,
              _l.a,
            ]),
            l.Lb(4608, El.b, El.b, [$l.e, [2, El.a]]),
            l.Lb(4608, Ml.b, Ml.b, [$l.e, [2, Ml.a]]),
            l.Lb(4608, Rl.b, Rl.b, [$l.e, [2, Rl.a]]),
            l.Lb(4608, kl.b, kl.b, [$l.e, [2, kl.a]]),
            l.Lb(4608, Xt.a, Ut.a, [qe.a, Yt.a, de.a]),
            l.Lb(1073742336, Ge.c, Ge.c, []),
            l.Lb(1073742336, _l.i, _l.i, []),
            l.Lb(1073742336, Dl.a, Dl.a, []),
            l.Lb(1073742336, wl.a, wl.a, []),
            l.Lb(1073742336, jl.a, jl.a, []),
            l.Lb(1073742336, Al.a, Al.a, []),
            l.Lb(1073742336, Bl.a, Bl.a, []),
            l.Lb(1073742336, Wl.a, Wl.a, []),
            l.Lb(1073742336, Fl.a, Fl.a, []),
            l.Lb(1073742336, zl.a, zl.a, []),
            l.Lb(1073742336, Gl.a, Gl.a, []),
            l.Lb(1073742336, Ul.a, Ul.a, []),
            l.Lb(1073742336, Yl.a, Yl.a, []),
            l.Lb(1073742336, Hl.a, Hl.a, []),
            l.Lb(1073742336, Vl.a, Vl.a, []),
            l.Lb(1073742336, Xl.a, Xl.a, []),
            l.Lb(1073742336, ql.a, ql.a, []),
            l.Lb(1073742336, nt.n, nt.n, [
              [2, nt.s],
              [2, nt.m],
            ]),
            l.Lb(1073742336, Zl.a, Zl.a, []),
            l.Lb(1073742336, ae, ae, []),
            l.Lb(256, _l.o, void 0, []),
            l.Lb(256, _l.m, void 0, []),
            l.Lb(256, _l.n, void 0, []),
            l.Lb(256, _l.a, void 0, []),
            l.Lb(
              1024,
              nt.k,
              function () {
                return [
                  [
                    {
                      path: "",
                      children: [
                        { path: "", component: Kl.a },
                        { path: "info", component: Ql.a },
                      ],
                    },
                  ],
                  [
                    { path: "webapp", component: W },
                    { path: "error", component: z },
                    { path: "license-expired", component: G },
                    { path: "privacy-changing", component: le.a },
                    { path: "primary-user", loadChildren: ie },
                    {
                      path: "actions",
                      children: [
                        { path: "truffles", component: H, canActivate: [V.a] },
                        {
                          path: "textinput/:input",
                          component: K,
                          canActivate: [V.a],
                        },
                        { path: "logbook-manual-entry", component: te },
                        {
                          path: "logbook-manual-entry-textinput",
                          component: ne,
                          canActivate: [V.a],
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
    j7uj: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var l = (function (e) {
        return (
          (e[(e.WaitingForInput = 0)] = "WaitingForInput"),
          (e[(e.Searching = 1)] = "Searching"),
          (e[(e.SearchCompleted = 2)] = "SearchCompleted"),
          e
        );
      })({});
    },
    k1ug: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return ne;
      });
      var l = n("kZht"),
        i = n("VUTu"),
        a = n("fu7d"),
        o = n("bou3"),
        r = n("yNay"),
        u = n("nK9R"),
        s = n("qzuC"),
        c = n("8yWk"),
        b = n("8WOv"),
        p = n("bMuc"),
        d = n("ZIdM"),
        h = n("3bpu"),
        m = n("6zvu"),
        g = n("VcEz"),
        x = n("OtM5"),
        f = n("y9xZ"),
        v = n("+sw+"),
        O = n("BMrr"),
        y = n("IEns"),
        S = n("1pak"),
        T = n("P+G5"),
        I = n("z6QT"),
        N = n("flsk"),
        C = n("FQEI"),
        L = n("O82V"),
        P = n("Eln4"),
        _ = n("evAh"),
        E = n("zPMi"),
        $ = n("CpzC"),
        M = n("0Bsn"),
        R = n("5GjX"),
        k = n("mYyF"),
        D = n("v98a"),
        w = n("aOG8"),
        j = n("Krzs"),
        A = n("Z2XD"),
        B = n("0qMr"),
        W = n("An66"),
        F = n("ZXHi"),
        z = n("IRNg"),
        G = n("8TlW"),
        U = n("Xo58"),
        Y = n("m3Ja"),
        H = n("r+e+"),
        V = n("ijxY"),
        X = n("bmFL"),
        q = n("1fVR"),
        Z = n("dr0G"),
        K = n("FfND"),
        Q = l.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{height:100%;width:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column}",
            ],
          ],
          data: {},
        });
      function J(e) {
        return l.ac(
          0,
          [
            (e()(),
            l.yb(
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
              i.b,
              i.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, o.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              u.a,
              [s.a, c.a],
              {
                hasPrimaryText: [0, "hasPrimaryText"],
                primaryDeveloperText: [1, "primaryDeveloperText"],
                primaryId: [2, "primaryId"],
                primaryIdEnumType: [3, "primaryIdEnumType"],
                primaryNonI18nText: [4, "primaryNonI18nText"],
                hasSecondaryText: [5, "hasSecondaryText"],
                secondaryDeveloperText: [6, "secondaryDeveloperText"],
                secondaryId: [7, "secondaryId"],
                secondaryIdEnumType: [8, "secondaryIdEnumType"],
                secondaryNonI18nText: [9, "secondaryNonI18nText"],
              },
              null,
            ),
            (e()(),
            l.yb(
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
              function (e, t, n) {
                var l = !0;
                return (
                  "mib3Tap" === t && (l = !1 !== e.component.back() && l),
                  l
                );
              },
              b.b,
              b.a,
            )),
            l.xb(4, 147456, null, 0, p.a, [l.l, l.z], null, null),
            l.xb(
              5,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, o.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              6,
              147456,
              null,
              0,
              d.a,
              [p.a, [2, h.a], [2, a.a], r.a],
              null,
              null,
            ),
            l.xb(
              7,
              212992,
              null,
              0,
              m.a,
              [
                r.a,
                g.b,
                d.a,
                [2, h.a],
                [2, a.a],
                [2, x.a],
                [2, f.a],
                [2, v.a],
                l.z,
                O.a,
                l.l,
                [2, y.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.xb(
              8,
              147456,
              null,
              0,
              S.a,
              [r.a, T.a, l.l, [2, m.a], [2, x.a]],
              null,
              null,
            ),
            l.Sb(131584, null, I.a, I.a, [[3, I.a]]),
            l.xb(
              10,
              4407296,
              null,
              0,
              N.a,
              [
                l.l,
                C.a,
                l.h,
                I.a,
                [2, L.a],
                [2, h.b],
                [2, h.a],
                [2, P.a],
                [2, _.a],
              ],
              null,
              null,
            ),
            l.xb(
              11,
              49152,
              null,
              0,
              E.a,
              [[2, x.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            l.xb(
              12,
              147456,
              null,
              0,
              $.a,
              [[2, m.a], [2, x.a], [2, M.a], [2, N.a], [2, R.b], l.l, k.a, D.b],
              null,
              null,
            ),
            l.xb(
              13,
              147456,
              null,
              0,
              w.a,
              [[2, N.a], [2, m.a], [2, g.b], j.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, "TitleLine"),
              e(
                t,
                2,
                0,
                !!n.textToolMode ||
                  (null == t.context.mib3Let
                    ? null
                    : t.context.mib3Let.primaryTitleId) ||
                  (null == t.context.mib3Let
                    ? null
                    : t.context.mib3Let.primaryNonI18nTitle),
                null == t.context.mib3Let
                  ? null
                  : t.context.mib3Let.primaryTitleId,
                null == t.context.mib3Let
                  ? null
                  : t.context.mib3Let.primaryTitleId,
                n.privacyWaitingPrimaryTitle,
                null == t.context.mib3Let
                  ? null
                  : t.context.mib3Let.primaryNonI18nTitle,
                !!n.textToolMode ||
                  (null == t.context.mib3Let
                    ? null
                    : t.context.mib3Let.secondaryTitleId) ||
                  (null == t.context.mib3Let
                    ? null
                    : t.context.mib3Let.secondaryNonI18nTitle),
                null == t.context.mib3Let
                  ? null
                  : t.context.mib3Let.secondaryTitleId,
                (null == t.context.mib3Let
                  ? null
                  : t.context.mib3Let.secondaryTitleId) ||
                  n.privacyWaitingSecondaryTitle.Notice,
                n.privacyWaitingSecondaryTitle,
                null == t.context.mib3Let
                  ? null
                  : t.context.mib3Let.secondaryNonI18nTitle,
              ),
              e(t, 5, 0, "BackButton"),
              e(t, 7, 0),
              e(t, 10, 0),
              e(t, 11, 0, !1, "E163_Backbutton.webp"));
          },
          function (e, t) {
            (e(
              t,
              0,
              0,
              l.Nb(t, 2).hideLeftBorder,
              l.Nb(t, 2).hideDividingBorders,
            ),
              e(
                t,
                3,
                0,
                l.Nb(t, 10).markerClassEnabled,
                l.Nb(t, 11).useItemPlaceholder,
              ));
          },
        );
      }
      function ee(e) {
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
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:SETUP_DATA_MGT_PRIVACY_STAGED_WAITING"],
              ],
              null,
              null,
              null,
              A.b,
              A.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, o.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 4440064, null, 0, f.a, [r.a], { id: [0, "id"] }, null),
            (e()(), l.hb(16777216, null, 0, 2, null, J)),
            l.xb(
              4,
              16384,
              null,
              0,
              B.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, W.b, [l.h]),
            (e()(),
            l.yb(
              6,
              0,
              null,
              0,
              5,
              "au3-init-view",
              [["id", "WaitingView"]],
              null,
              null,
              null,
              F.b,
              F.a,
            )),
            l.xb(
              7,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, o.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(8, 49152, null, 0, z.a, [], null, null),
            (e()(),
            l.yb(
              9,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [["id", "WaitingViewLabel"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              G.b,
              G.a,
            )),
            l.xb(
              10,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, o.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              11,
              245760,
              null,
              0,
              U.a,
              [[6, a.a], Y.a, l.h, l.l, l.D, [2, H.a], [2, V.a], [2, X.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, "Screen:SETUP_DATA_MGT_PRIVACY_STAGED_WAITING"),
              e(t, 2, 0, "Screen:SETUP_DATA_MGT_PRIVACY_STAGED_WAITING"),
              e(t, 4, 0, l.Yb(t, 4, 0, l.Nb(t, 5).transform(n.queryParams$))),
              e(t, 7, 0, "WaitingView"),
              e(t, 10, 0, "WaitingViewLabel"),
              e(
                t,
                11,
                0,
                "Privatsph\xe4reeinstellungen werden angepasst.\nBitte warten ...",
                "WaitingViewLabel",
                4,
              ));
          },
          function (e, t) {
            e(
              t,
              9,
              0,
              l.Nb(t, 11).backgroundColor,
              l.Nb(t, 11).fixedNumberOfLines,
              l.Nb(t, 11).mayContainLatinCharsForArabic,
              l.Nb(t, 11).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function te(e) {
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
              "au3-privacy-waiting",
              [],
              null,
              null,
              null,
              ee,
              Q,
            )),
            l.xb(1, 245760, null, 0, q.a, [Z.a, K.a], null, null),
          ],
          function (e, t) {
            e(t, 1, 0);
          },
          null,
        );
      }
      var ne = l.ub("au3-privacy-waiting", q.a, te, {}, {}, []);
    },
  },
]);
