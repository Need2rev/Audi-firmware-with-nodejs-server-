(window.webpackJsonp = window.webpackJsonp || []).push([
  [95, 71, 73, 74],
  {
    U6SP: function (l, n, e) {
      "use strict";
      (e.d(n, "a", function () {
        return C;
      }),
        e.d(n, "b", function () {
          return N;
        }));
      var a = e("kZht"),
        t = e("HVUF"),
        i = e("B3Zb"),
        o = e("yNay"),
        u = e("8TlW"),
        r = e("fu7d"),
        c = e("bou3"),
        s = e("Xo58"),
        b = e("m3Ja"),
        d = e("r+e+"),
        h = e("ijxY"),
        f = e("bmFL"),
        p = e("l9Gk"),
        g = e("Ps6X"),
        m = e("6zvu"),
        x = e("An66"),
        C =
          (e("1ZTq"),
          a.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}.state-disabled[_nghost-%COMP%]   .button__icon[_ngcontent-%COMP%], .state-disabled[_nghost-%COMP%]   .button__text[_ngcontent-%COMP%]{filter:grayscale(100%) brightness(.4)}[_nghost-%COMP%]{position:relative;display:block;overflow:hidden;max-width:100%}.button-container[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:center;width:100%;height:100%;font-size:40px}.button--activated[_nghost-%COMP%]{filter:brightness(120%)}.button--horizontal[_nghost-%COMP%]   .button-container[_ngcontent-%COMP%]{flex-direction:row}.button--horizontal[_nghost-%COMP%]   .button__icon[_ngcontent-%COMP%]{margin-bottom:0}.button--horizontal[_nghost-%COMP%]   .button__text[_ngcontent-%COMP%]{align-self:center}.button--horizontal[_nghost-%COMP%]   .button__text--with-icon[_ngcontent-%COMP%]{margin:0 17px 0 -17px}.button--with-border[_nghost-%COMP%]{border-left:1px solid silver;border-bottom:1px solid silver;border-right:1px solid silver}.button--with-thick-border[_nghost-%COMP%]{padding:0 2px 3px}.button--with-thick-border[_nghost-%COMP%]:before{border-width:0 0 3px 2px;background-image:linear-gradient(0deg,hsla(0,0%,100%,.1),transparent 55%);padding-left:2px;margin-right:2px;right:2px}.button--with-thick-border[_nghost-%COMP%]:after, .button--with-thick-border[_nghost-%COMP%]:before{border-style:solid;border-image:linear-gradient(0deg,hsla(0,0%,100%,.7),transparent 81%) 3 2;position:absolute;display:block;content:"";left:0;top:0;bottom:0}.button--with-thick-border[_nghost-%COMP%]:after{border-width:0 2px 0 0;right:0}.button__text[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;position:relative;text-align:center;color:#fff}.button__text--no-icon[_ngcontent-%COMP%]{margin:30px 20px}.button__text--with-icon[_ngcontent-%COMP%]{margin:0 11px 11px}.button__icon[_ngcontent-%COMP%]{align-self:center}.button__icon--with-text[_ngcontent-%COMP%]{margin-bottom:-47px}',
              ],
            ],
            data: {},
          }));
      function y(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "button__icon"]],
              [
                [2, "button__icon--with-text", null],
                [2, "icon-component--hidden", null],
              ],
              null,
              null,
              t.b,
              t.a,
            )),
            a.xb(
              1,
              4243456,
              null,
              0,
              i.b,
              [o.a, a.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            l(n, 1, 0, e.icon, e.iconCategory);
          },
          function (l, n) {
            l(n, 0, 0, n.component.hasText, a.Nb(n, 1).iconComponentHidden);
          },
        );
      }
      function v(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "button__text"],
                ["id", "ButtonLabel"],
              ],
              [
                [2, "button__text--no-icon", null],
                [2, "button__text--with-icon", null],
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
            a.xb(
              1,
              212992,
              null,
              0,
              r.a,
              [a.l, a.D, c.a, o.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              s.a,
              [[6, r.a], b.a, a.h, a.l, a.D, [2, d.a], [2, h.a], [2, f.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "ButtonLabel"),
              l(n, 2, 0, e.developerText, "ButtonLabel", 1, e.nonI18nText));
          },
          function (l, n) {
            var e = n.component;
            l(
              n,
              0,
              0,
              !e.icon && !e.flatButton,
              e.icon,
              a.Nb(n, 2).backgroundColor,
              a.Nb(n, 2).fixedNumberOfLines,
              a.Nb(n, 2).mayContainLatinCharsForArabic,
              a.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function N(l) {
        return a.ac(
          2,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              7,
              "div",
              [
                ["class", "button-container"],
                ["ttDoNotToggleChildren", ""],
                ["ttIgnore", ""],
              ],
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
            a.xb(
              1,
              16384,
              null,
              0,
              h.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            a.xb(
              2,
              16384,
              null,
              0,
              p.a,
              [],
              { ttDoNotToggleDynamicValue: [0, "ttDoNotToggleDynamicValue"] },
              null,
            ),
            a.xb(
              3,
              212992,
              null,
              0,
              g.a,
              [[2, m.a], [8, null], [3, g.a], a.l, a.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (l()(), a.hb(16777216, null, null, 1, null, y)),
            a.xb(
              5,
              16384,
              null,
              0,
              x.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), a.hb(16777216, null, null, 1, null, v)),
            a.xb(
              7,
              16384,
              null,
              0,
              x.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, !e.hasText),
              l(n, 2, 0, !e.hasText || e.hasOnlyText),
              l(n, 3, 0, e.uiStateType),
              l(n, 5, 0, e.icon),
              l(n, 7, 0, e.hasText));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 3).uiStateListHorizontal,
              a.Nb(n, 3).uiStateListVertical,
              a.Nb(n, 3).uiStateCoverLeft,
              a.Nb(n, 3).uiStateCoverRight,
              a.Nb(n, 3).uiStateCoverBottom,
              a.Nb(n, 3).uiStateButton,
              a.Nb(n, 3).uiStateByDabLeft,
              a.Nb(n, 3).uiStateByDabRight,
              a.Nb(n, 3).uiStateLbDabLeft,
              a.Nb(n, 3).uiStateLbDabRight,
            );
          },
        );
      }
    },
    "V+Ab": function (l, n, e) {
      "use strict";
      (e.r(n),
        e.d(n, "FpkPhoneModuleNgFactory", function () {
          return Ia;
        }));
      var a = e("kZht");
      class t {}
      var i = e("C9Ky"),
        o = e("89Z2"),
        u = e("kqft"),
        r = e("+sw+"),
        c = e("FfND"),
        s = e("bou3"),
        b = e("yNay"),
        d = e("1VvW"),
        h = e("CDcS"),
        f = e("hN4M"),
        p = e("Yi6/");
      class g {
        constructor(l) {
          ((this.routingService = l), (this.context = p.s.Phone));
        }
        menuKeyDown() {
          this.routingService.handleMenuKeyDown();
        }
      }
      var m = a.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{position:absolute;display:block;height:100%;width:100%;color:#fff}",
          ],
        ],
        data: {},
      });
      function x(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
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
              function (l, n, e) {
                var t = !0;
                return (
                  "component:@screenChange.start" === n &&
                    (t = !1 !== a.Nb(l, 1).animationStarted(e) && t),
                  "component:@screenChange.done" === n &&
                    (t = !1 !== a.Nb(l, 1).animationDone(e) && t),
                  t
                );
              },
              o.b,
              o.a,
            )),
            a.xb(
              1,
              245760,
              null,
              1,
              u.a,
              [[2, r.a], c.a, a.h, s.a, b.a],
              null,
              null,
            ),
            a.Tb(335544320, 1, { arod: 0 }),
            (l()(),
            a.yb(
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
            a.xb(
              4,
              212992,
              null,
              0,
              d.o,
              [d.b, a.P, a.j, [8, null], a.h],
              null,
              null,
            ),
            a.xb(5, 212992, [[1, 4]], 0, h.a, [d.o, a.h, a.z, b.a], null, null),
          ],
          function (l, n) {
            (l(n, 1, 0), l(n, 4, 0), l(n, 5, 0));
          },
          function (l, n) {
            (l(n, 0, 0, a.Nb(n, 1).screenState, !0),
              l(n, 3, 0, a.Nb(n, 5).hideAdjacentSibling));
          },
        );
      }
      function C(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-phone",
              [],
              [[8, "className", 0]],
              [["screen", "keydown.KeyM"]],
              function (l, n, e) {
                var t = !0;
                return (
                  "screen:keydown.KeyM" === n &&
                    (t = !1 !== a.Nb(l, 1).menuKeyDown() && t),
                  t
                );
              },
              x,
              m,
            )),
            a.xb(1, 49152, null, 0, g, [f.b], null, null),
          ],
          null,
          function (l, n) {
            l(n, 0, 0, a.Nb(n, 1).context);
          },
        );
      }
      var y = a.ub("au3-fpk-phone", g, C, {}, {}, []),
        v = e("sH6Y"),
        N = e("fu7d"),
        _ = e("Ftf+"),
        P = e("I3ve"),
        O = e("LELx"),
        S = e("o/5+"),
        T = e("ZXHi"),
        M = e("IRNg"),
        L = e("8TlW"),
        A = e("Xo58"),
        k = e("m3Ja"),
        w = e("r+e+"),
        D = e("ijxY"),
        E = e("bmFL"),
        I = e("HM3f"),
        H = e("8lHc"),
        F = e("xVbo"),
        R = e("YEFf");
      class B {
        constructor(l, n) {
          ((this.phoneService = l), (this.routingService = n));
        }
        ngAfterViewInit() {
          const l = this.phoneService.initialized$.pipe(Object(F.a)((l) => l));
          this.subscription = Object(I.b)(Object(H.a)(3e3), l).subscribe(() =>
            this.routingService.enterContext(),
          );
        }
        ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }
      var $ = a.wb({
        encapsulation: 0,
        styles: [
          ["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}"],
        ],
        data: {},
      });
      function z(l) {
        return a.ac(
          2,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-fpk-screen",
              [["id", "Screen:KOMBI_PHONE_INIT_WAIT"]],
              null,
              null,
              null,
              v.b,
              v.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 114688, null, 0, _.a, [], null, null),
            a.Sb(256, null, P.a, _.b, []),
            (l()(),
            a.yb(
              4,
              0,
              null,
              0,
              2,
              "au3-fpk-title-line",
              [
                ["id", ""],
                ["primaryDeveloperText", "Phone"],
                ["secondaryDeveloperText", "Hinweis"],
              ],
              [[2, "priority-shrink", null]],
              null,
              null,
              O.b,
              O.a,
            )),
            a.xb(
              5,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              6,
              49152,
              null,
              0,
              S.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
                showLeftDrawerIcon: [2, "showLeftDrawerIcon"],
              },
              null,
            ),
            (l()(),
            a.yb(
              7,
              0,
              null,
              0,
              4,
              "au3-init-view",
              [],
              null,
              null,
              null,
              T.b,
              T.a,
            )),
            a.xb(8, 49152, null, 0, M.a, [], null, null),
            (l()(),
            a.yb(
              9,
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
              L.b,
              L.a,
            )),
            a.xb(
              10,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              11,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            (l(n, 1, 0, "Screen:KOMBI_PHONE_INIT_WAIT"),
              l(n, 2, 0),
              l(n, 5, 0, ""),
              l(n, 6, 0, "Phone", "Hinweis", !1),
              l(n, 10, 0, "PhoneWirdInitialisiert"),
              l(
                n,
                11,
                0,
                "Phone wird initialisiert. Bitte warten...",
                "PhoneWirdInitialisiert",
                3,
              ));
          },
          function (l, n) {
            (l(n, 4, 0, a.Nb(n, 6).isPriorityShrink),
              l(
                n,
                9,
                0,
                a.Nb(n, 11).backgroundColor,
                a.Nb(n, 11).fixedNumberOfLines,
                a.Nb(n, 11).mayContainLatinCharsForArabic,
                a.Nb(n, 11).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function K(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
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
              z,
              $,
            )),
            a.xb(1, 4374528, null, 0, B, [R.c, f.b], null, null),
          ],
          null,
          null,
        );
      }
      var Y = a.ub("au3-initialization", B, K, {}, {}, []),
        U = e("4XZL"),
        j = e("bMuc"),
        G = e("ZIdM"),
        W = e("3bpu"),
        V = e("OtM5"),
        Z = e("9ZFG"),
        J = e("6zvu"),
        X = e("VcEz"),
        Q = e("y9xZ"),
        q = e("BMrr"),
        ll = e("IEns"),
        nl = e("z6QT"),
        el = e("flsk"),
        al = e("FQEI"),
        tl = e("O82V"),
        il = e("Eln4"),
        ol = e("evAh"),
        ul = e("URLa"),
        rl = e("CpzC"),
        cl = e("0Bsn"),
        sl = e("5GjX"),
        bl = e("mYyF"),
        dl = e("v98a"),
        hl = e("aOG8"),
        fl = e("Krzs"),
        pl = e("6480"),
        gl = e("oeT7"),
        ml = e("t7cT"),
        xl = e("N2Hj"),
        Cl = e("UbWD"),
        yl = e("2rvh"),
        vl = e("odRV"),
        Nl = e("Udyh"),
        _l = e("qiAR"),
        Pl = e("007S"),
        Ol = e("oxWk"),
        Sl = e("Tr//"),
        Tl = e("9N/+"),
        Ml = e("9tRs"),
        Ll = e("An66"),
        Al = e("Lfy4"),
        kl = e("+OYd"),
        wl = e("0qMr"),
        Dl = e("Zbi+"),
        El = e("YtkY"),
        Il = e("Ohay");
      class Hl {
        constructor(l, n, e) {
          ((this.routingService = l),
            (this.phoneService = n),
            (this.itemTypeNoEndIcon = p.rb.ITEM_TYPE_NO_END_ICON),
            (this.PhoneRoutes = f.a),
            (this.toggeling = !1),
            (this.logger = e.getLogger("phone.FpkPhoneMenuComponent")),
            (this.severalPhonesConnected$ = this.phoneService.phones$.pipe(
              Object(El.a)(
                (l) =>
                  l.filter((l) => l.connectionState === Dl.e.ATTACHED).length >
                  1,
              ),
              Object(Il.a)(),
            )),
            (this.phoneName$ = this.phoneService.deviceName$.pipe(
              Object(El.a)((l) => (l && l.length > 0 ? l : void 0)),
            )));
        }
        ngAfterViewInit() {
          this.routingService.getLastActiveContext() === f.a.Favorites &&
            (this.logger.info(
              "ngAfterViewInit() last context was favorites, updating cursor position",
            ),
            this.menuList.selectIndex(1));
        }
        togglePhones() {
          ((this.toggeling = !0),
            this.phoneService
              .togglePhones()
              .catch(() => {
                this.toggeling = !1;
              })
              .then(() => {
                ((this.toggeling = !1),
                  this.routingService.goTo(f.a.TogglePhone));
              }));
        }
        onBackKeyDown() {
          this.routingService.goBack();
        }
      }
      var Fl = a.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block}.list[_ngcontent-%COMP%]{width:100%}.list__item[_ngcontent-%COMP%]{height:52px;margin:3px 0 4px;font-size:38px;padding:0 15px}.list__item--separator-below[_ngcontent-%COMP%]:not(:last-of-type){border-bottom:1px solid hsla(0,0%,100%,.25);margin-bottom:60px}",
          ],
        ],
        data: {},
      });
      function Rl(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["id", "TogglePhones"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (l, n, e) {
                var a = !0;
                return (
                  "mib3Tap" === n &&
                    (a = !1 !== l.component.togglePhones() && a),
                  a
                );
              },
              U.b,
              U.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 147456, null, 0, j.a, [a.l, a.z], null, null),
            a.xb(
              3,
              147456,
              null,
              0,
              G.a,
              [j.a, [2, W.a], [2, N.a], b.a],
              null,
              null,
            ),
            a.xb(
              4,
              147456,
              null,
              0,
              V.a,
              [Z.a, a.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            a.xb(
              5,
              212992,
              null,
              0,
              J.a,
              [
                b.a,
                X.b,
                G.a,
                [2, W.a],
                [2, N.a],
                [2, V.a],
                [2, Q.a],
                [2, r.a],
                a.z,
                q.a,
                a.l,
                [2, ll.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.Sb(131584, null, nl.a, nl.a, [[3, nl.a]]),
            a.xb(
              7,
              4407296,
              null,
              0,
              el.a,
              [
                a.l,
                al.a,
                a.h,
                nl.a,
                [2, tl.a],
                [2, W.b],
                [2, W.a],
                [2, il.a],
                [2, ol.a],
              ],
              null,
              null,
            ),
            a.xb(
              8,
              114688,
              null,
              0,
              ul.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                type: [2, "type"],
              },
              null,
            ),
            a.xb(
              9,
              147456,
              null,
              0,
              rl.a,
              [
                [2, J.a],
                [2, V.a],
                [2, cl.a],
                [2, el.a],
                [2, sl.b],
                a.l,
                bl.a,
                dl.b,
              ],
              null,
              null,
            ),
            a.xb(
              10,
              147456,
              null,
              0,
              hl.a,
              [[2, el.a], [2, J.a], [2, X.b], fl.a],
              null,
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "TogglePhones"),
              l(n, 4, 0, n.parent.context.mib3Let),
              l(n, 5, 0),
              l(n, 7, 0),
              l(
                n,
                8,
                0,
                "E9C3_phone_toggle_active.webp",
                "Telefone tauschen",
                e.itemTypeNoEndIcon,
              ));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 4).combinedDisabled,
              a.Nb(n, 4).useBrighterIcon,
              a.Nb(n, 7).markerClassEnabled,
            );
          },
        );
      }
      function Bl(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["id", "GoToActiveCall"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              U.b,
              U.a,
            )),
            a.xb(
              1,
              147456,
              null,
              0,
              V.a,
              [Z.a, a.h, b.a, [3, V.a]],
              null,
              null,
            ),
            a.xb(2, 147456, null, 0, j.a, [a.l, a.z], null, null),
            a.xb(
              3,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              4,
              147456,
              null,
              0,
              G.a,
              [j.a, [2, W.a], [2, N.a], b.a],
              null,
              null,
            ),
            a.xb(
              5,
              212992,
              null,
              0,
              J.a,
              [
                b.a,
                X.b,
                G.a,
                [2, W.a],
                [2, N.a],
                [2, V.a],
                [2, Q.a],
                [2, r.a],
                a.z,
                q.a,
                a.l,
                [2, ll.a],
              ],
              null,
              null,
            ),
            a.xb(
              6,
              671744,
              null,
              0,
              pl.a,
              [c.a, gl.i, V.a, J.a, pl.b, ml.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            a.Sb(131584, null, nl.a, nl.a, [[3, nl.a]]),
            a.xb(
              8,
              4407296,
              null,
              0,
              el.a,
              [
                a.l,
                al.a,
                a.h,
                nl.a,
                [2, tl.a],
                [2, W.b],
                [2, W.a],
                [2, il.a],
                [2, ol.a],
              ],
              null,
              null,
            ),
            a.xb(
              9,
              114688,
              null,
              0,
              ul.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                type: [2, "type"],
              },
              null,
            ),
            a.xb(
              10,
              147456,
              null,
              0,
              rl.a,
              [
                [2, J.a],
                [2, V.a],
                [2, cl.a],
                [2, el.a],
                [2, sl.b],
                a.l,
                bl.a,
                dl.b,
              ],
              null,
              null,
            ),
            a.xb(
              11,
              147456,
              null,
              0,
              hl.a,
              [[2, el.a], [2, J.a], [2, X.b], fl.a],
              null,
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 3, 0, "GoToActiveCall"),
              l(n, 5, 0),
              l(n, 6, 0, e.PhoneRoutes.ActiveCall),
              l(n, 8, 0),
              l(
                n,
                9,
                0,
                "E05F_phone_back_to_activecall.webp",
                "Zur\xfcck zum Anruf",
                e.itemTypeNoEndIcon,
              ));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 1).combinedDisabled,
              a.Nb(n, 1).useBrighterIcon,
              a.Nb(n, 8).markerClassEnabled,
            );
          },
        );
      }
      function $l(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              34,
              "au3-list",
              [
                ["class", "list"],
                ["id", ""],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              xl.b,
              xl.a,
            )),
            a.Sb(6144, null, Cl.a, null, [yl.a]),
            a.xb(
              2,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(3, 16384, null, 0, vl.a, [a.l], null, null),
            a.xb(
              4,
              12828672,
              [
                [1, 4],
                ["MenuList", 4],
              ],
              1,
              yl.a,
              [
                [2, Nl.a],
                [2, P.a],
                [8, null],
                [2, N.a],
                [2, _l.a],
                [2, Pl.a],
                [2, X.b],
                gl.i,
                a.z,
                a.h,
                b.a,
                Ol.a,
                Sl.a,
                [2, al.a],
                W.a,
                [2, gl.a],
              ],
              {
                showCursor: [0, "showCursor"],
                showCursorWaitIcon: [1, "showCursorWaitIcon"],
                showSeparators: [2, "showSeparators"],
              },
              null,
            ),
            a.Tb(603979776, 2, { template: 0 }),
            (l()(),
            a.yb(
              6,
              0,
              null,
              0,
              11,
              "au3-list-route-item",
              [
                ["au3C2Cursor", ""],
                ["class", "list__item"],
                ["id", "GoToCallstack"],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "c2-cursor", null],
                [2, "state-active", null],
              ],
              [[null, "mib3Tap"]],
              function (l, n, e) {
                var a = !0,
                  t = l.component;
                return (
                  "mib3Tap" === n &&
                    (a =
                      !1 !==
                        t.routingService.setActiveContext(
                          t.PhoneRoutes.Callstack,
                        ) && a),
                  a
                );
              },
              U.b,
              U.a,
            )),
            a.xb(
              7,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(8, 147456, null, 0, j.a, [a.l, a.z], null, null),
            a.xb(
              9,
              147456,
              null,
              0,
              G.a,
              [j.a, [2, W.a], [2, N.a], b.a],
              null,
              null,
            ),
            a.xb(
              10,
              212992,
              null,
              0,
              J.a,
              [
                b.a,
                X.b,
                G.a,
                [2, W.a],
                [2, N.a],
                [2, V.a],
                [2, Q.a],
                [2, r.a],
                a.z,
                q.a,
                a.l,
                [2, ll.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.Sb(131584, null, nl.a, nl.a, [[3, nl.a]]),
            a.xb(
              12,
              4407296,
              null,
              0,
              el.a,
              [
                a.l,
                al.a,
                a.h,
                nl.a,
                [2, tl.a],
                [2, W.b],
                [2, W.a],
                [2, il.a],
                [2, ol.a],
              ],
              null,
              null,
            ),
            a.xb(
              13,
              114688,
              null,
              0,
              ul.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                type: [2, "type"],
              },
              null,
            ),
            a.xb(
              14,
              16384,
              null,
              0,
              Tl.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
            a.xb(
              15,
              147456,
              null,
              0,
              rl.a,
              [
                [2, J.a],
                [2, V.a],
                [2, cl.a],
                [2, el.a],
                [2, sl.b],
                a.l,
                bl.a,
                dl.b,
              ],
              null,
              null,
            ),
            a.xb(
              16,
              147456,
              null,
              0,
              hl.a,
              [[2, el.a], [2, J.a], [2, X.b], fl.a],
              null,
              null,
            ),
            a.xb(
              17,
              16384,
              null,
              0,
              Ml.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
            (l()(),
            a.yb(
              18,
              0,
              null,
              0,
              11,
              "au3-list-route-item",
              [
                ["au3C2Cursor", ""],
                ["class", "list__item list__item--separator-below"],
                ["id", "GoToPhoneFavorites"],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "c2-cursor", null],
                [2, "state-active", null],
              ],
              [[null, "mib3Tap"]],
              function (l, n, e) {
                var a = !0,
                  t = l.component;
                return (
                  "mib3Tap" === n &&
                    (a =
                      !1 !==
                        t.routingService.setActiveContext(
                          t.PhoneRoutes.Favorites,
                        ) && a),
                  a
                );
              },
              U.b,
              U.a,
            )),
            a.xb(
              19,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(20, 147456, null, 0, j.a, [a.l, a.z], null, null),
            a.xb(
              21,
              147456,
              null,
              0,
              G.a,
              [j.a, [2, W.a], [2, N.a], b.a],
              null,
              null,
            ),
            a.xb(
              22,
              212992,
              null,
              0,
              J.a,
              [
                b.a,
                X.b,
                G.a,
                [2, W.a],
                [2, N.a],
                [2, V.a],
                [2, Q.a],
                [2, r.a],
                a.z,
                q.a,
                a.l,
                [2, ll.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.Sb(131584, null, nl.a, nl.a, [[3, nl.a]]),
            a.xb(
              24,
              4407296,
              null,
              0,
              el.a,
              [
                a.l,
                al.a,
                a.h,
                nl.a,
                [2, tl.a],
                [2, W.b],
                [2, W.a],
                [2, il.a],
                [2, ol.a],
              ],
              null,
              null,
            ),
            a.xb(
              25,
              114688,
              null,
              0,
              ul.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                type: [2, "type"],
              },
              null,
            ),
            a.xb(
              26,
              16384,
              null,
              0,
              Tl.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
            a.xb(
              27,
              147456,
              null,
              0,
              rl.a,
              [
                [2, J.a],
                [2, V.a],
                [2, cl.a],
                [2, el.a],
                [2, sl.b],
                a.l,
                bl.a,
                dl.b,
              ],
              null,
              null,
            ),
            a.xb(
              28,
              147456,
              null,
              0,
              hl.a,
              [[2, el.a], [2, J.a], [2, X.b], fl.a],
              null,
              null,
            ),
            a.xb(
              29,
              16384,
              null,
              0,
              Ml.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
            (l()(), a.hb(16777216, [[2, 2]], 0, 2, null, Rl)),
            a.xb(
              31,
              16384,
              null,
              0,
              Ll.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            a.Pb(131072, Ll.b, [a.h]),
            (l()(), a.hb(16777216, [[2, 2]], 0, 1, null, Bl)),
            a.xb(
              34,
              16384,
              null,
              0,
              Ll.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 2, 0, ""),
              l(n, 4, 0, !0, e.toggeling, !1),
              l(n, 7, 0, "GoToCallstack"),
              l(n, 10, 0),
              l(n, 12, 0),
              l(
                n,
                13,
                0,
                "E05B_phone_ruflisten.webp",
                "Anrufliste",
                e.itemTypeNoEndIcon,
              ),
              l(
                n,
                14,
                0,
                e.routingService.getLastActiveContext() ===
                  e.PhoneRoutes.Callstack,
              ),
              l(
                n,
                17,
                0,
                e.routingService.getLastActiveContext() ===
                  e.PhoneRoutes.Callstack,
              ),
              l(n, 19, 0, "GoToPhoneFavorites"),
              l(n, 22, 0),
              l(n, 24, 0),
              l(
                n,
                25,
                0,
                "E0FC_favoriten.webp",
                "Favoritenliste",
                e.itemTypeNoEndIcon,
              ),
              l(
                n,
                26,
                0,
                e.routingService.getLastActiveContext() ===
                  e.PhoneRoutes.Favorites,
              ),
              l(
                n,
                29,
                0,
                e.routingService.getLastActiveContext() ===
                  e.PhoneRoutes.Favorites,
              ),
              l(
                n,
                31,
                0,
                a.Yb(
                  n,
                  31,
                  0,
                  a.Nb(n, 32).transform(e.severalPhonesConnected$),
                ),
              ),
              l(n, 34, 0, n.context.mib3Let));
          },
          function (l, n) {
            (l(n, 0, 0, a.Nb(n, 4).showLineNumbers),
              l(
                n,
                6,
                0,
                a.Nb(n, 12).markerClassEnabled,
                a.Nb(n, 14).mib3Active,
                a.Nb(n, 17).mib3Active,
              ),
              l(
                n,
                18,
                0,
                a.Nb(n, 24).markerClassEnabled,
                a.Nb(n, 26).mib3Active,
                a.Nb(n, 29).mib3Active,
              ));
          },
        );
      }
      function zl(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              5,
              "au3-combi-menu",
              [["id", "PhoneMenu"]],
              null,
              null,
              null,
              Al.b,
              Al.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              49152,
              null,
              0,
              kl.a,
              [],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                titleNonI18nText: [1, "titleNonI18nText"],
              },
              null,
            ),
            (l()(), a.hb(16777216, null, 0, 2, null, $l)),
            a.xb(
              4,
              16384,
              null,
              0,
              wl.a,
              [a.L, a.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            a.Pb(131072, Ll.b, [a.h]),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "PhoneMenu"),
              l(n, 2, 0, "Phone", n.context.mib3Let),
              l(
                n,
                4,
                0,
                a.Yb(n, 4, 0, a.Nb(n, 5).transform(e.phoneService.callActive$)),
              ));
          },
          null,
        );
      }
      function Kl(l) {
        return a.ac(
          2,
          [
            a.Tb(671088640, 1, { menuList: 0 }),
            (l()(),
            a.yb(
              1,
              0,
              null,
              null,
              6,
              "au3-fpk-screen",
              [["id", "Screen:KOMBI_PHONE_MENUE"]],
              null,
              null,
              null,
              v.b,
              v.a,
            )),
            a.xb(
              2,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(3, 114688, null, 0, _.a, [], null, null),
            a.Sb(256, null, P.a, _.b, []),
            (l()(), a.hb(16777216, null, 0, 2, null, zl)),
            a.xb(
              6,
              16384,
              null,
              0,
              wl.a,
              [a.L, a.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            a.Pb(131072, Ll.b, [a.h]),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 2, 0, "Screen:KOMBI_PHONE_MENUE"),
              l(n, 3, 0),
              l(n, 6, 0, a.Yb(n, 6, 0, a.Nb(n, 7).transform(e.phoneName$))));
          },
          null,
        );
      }
      function Yl(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-phone-menu",
              [],
              null,
              [["screen", "keydown.Backspace"]],
              function (l, n, e) {
                var t = !0;
                return (
                  "screen:keydown.Backspace" === n &&
                    (t = !1 !== a.Nb(l, 1).onBackKeyDown() && t),
                  t
                );
              },
              Kl,
              Fl,
            )),
            a.xb(1, 4243456, null, 0, Hl, [f.b, R.c, b.a], null, null),
          ],
          null,
          null,
        );
      }
      var Ul = a.ub("au3-phone-menu", Hl, Yl, {}, {}, []),
        jl = e("eZMD"),
        Gl = e("HD2x"),
        Wl = e("J7Kz"),
        Vl = e("JCQ5"),
        Zl = e("axGb");
      class Jl {
        constructor(l, n) {
          ((this.bluetoothService = l), (this.fpkAsiService = n));
        }
        ngOnInit() {
          ((this.activeReconnect$ = this.bluetoothService.reconnects$.pipe(
            Object(El.a)((l) => {
              const n = l.find((l) =>
                l.serviceTypes.includes(Vl.b.TELEPHONYHFP),
              );
              return n && n.deviceName ? n.deviceName : "";
            }),
          )),
            (this.appleCarPlayActive$ =
              this.fpkAsiService.appleCarPlayActive$));
        }
      }
      var Xl = a.wb({
        encapsulation: 0,
        styles: [
          [
            '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;height:100%}.content-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;flex:1;height:354px;margin-top:4px}.not-connected__message[_ngcontent-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:40px;width:100%;text-align:center}.component-layout-arabic[_nghost-%COMP%]   .not-connected__message[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .not-connected__message[_ngcontent-%COMP%]{direction:rtl}.component-layout-latin[_nghost-%COMP%]   .not-connected__message[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .not-connected__message[_ngcontent-%COMP%]{direction:ltr}',
          ],
        ],
        data: {},
      });
      function Ql(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-instruction-text",
              [["id", "CarPlayActiveHint"]],
              null,
              null,
              null,
              jl.b,
              jl.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              49152,
              null,
              0,
              Gl.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryFixedNumberOfLines: [1, "primaryFixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            (l(n, 1, 0, "CarPlayActiveHint"),
              l(
                n,
                2,
                0,
                "CarPlay Modus.\nTelefonieren \xfcber MMI\nnicht m\xf6glich. iPhone\nKabel trennen und \xfcber\nBluetooth verbinden.",
                6,
              ));
          },
          null,
        );
      }
      function ql(l) {
        return a.ac(
          0,
          [
            (l()(),
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
            (l()(),
            a.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "AutomaticReconnectActiveHint"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              L.b,
              L.a,
            )),
            a.xb(
              2,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              3,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            (l(n, 2, 0, "AutomaticReconnectActiveHint"),
              l(
                n,
                3,
                0,
                "Automatischer\nVerbindungsaufbau\nzu Ihrem Mobiltelefon\naktiv.",
                "AutomaticReconnectActiveHint",
                6,
              ));
          },
          function (l, n) {
            l(
              n,
              1,
              0,
              a.Nb(n, 3).backgroundColor,
              a.Nb(n, 3).fixedNumberOfLines,
              a.Nb(n, 3).mayContainLatinCharsForArabic,
              a.Nb(n, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function ln(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "ConnectMobilePhoneHint"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              L.b,
              L.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            (l(n, 1, 0, "ConnectMobilePhoneHint"),
              l(
                n,
                2,
                0,
                "Bitte Mobiltelefon\nverbinden.",
                "ConnectMobilePhoneHint",
                6,
              ));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 2).backgroundColor,
              a.Nb(n, 2).fixedNumberOfLines,
              a.Nb(n, 2).mayContainLatinCharsForArabic,
              a.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function nn(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "NoBluetoothHint"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              L.b,
              L.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            (l(n, 1, 0, "NoBluetoothHint"),
              l(
                n,
                2,
                0,
                "Bluetooth ist\nausgeschaltet.",
                "NoBluetoothHint",
                6,
              ));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 2).backgroundColor,
              a.Nb(n, 2).fixedNumberOfLines,
              a.Nb(n, 2).mayContainLatinCharsForArabic,
              a.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function en(l) {
        return a.ac(
          0,
          [
            (l()(), a.hb(16777216, null, null, 2, null, ln)),
            a.xb(
              1,
              16384,
              null,
              0,
              Ll.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            a.Pb(131072, Ll.b, [a.h]),
            (l()(), a.hb(0, [["btDeactivatedTemplate", 2]], null, 0, null, nn)),
          ],
          function (l, n) {
            var e = n.component;
            l(
              n,
              1,
              0,
              a.Yb(
                n,
                1,
                0,
                a.Nb(n, 2).transform(e.bluetoothService.bluetoothAvailable$),
              ),
              a.Nb(n, 3),
            );
          },
          null,
        );
      }
      function an(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              5,
              "div",
              [["class", "content-container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            a.yb(
              1,
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
            (l()(), a.hb(16777216, null, null, 2, null, ql)),
            a.xb(
              3,
              16384,
              null,
              0,
              Ll.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            a.Pb(131072, Ll.b, [a.h]),
            (l()(), a.hb(0, [["noReconnects", 2]], null, 0, null, en)),
          ],
          function (l, n) {
            var e = n.component;
            l(
              n,
              3,
              0,
              a.Yb(n, 3, 0, a.Nb(n, 4).transform(e.activeReconnect$)),
              a.Nb(n, 5),
            );
          },
          null,
        );
      }
      function tn(l) {
        return a.ac(
          2,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-fpk-screen",
              [["id", "Screen:KOMBI_PHONE_INIT_NAD*"]],
              null,
              null,
              null,
              v.b,
              v.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 114688, null, 0, _.a, [], null, null),
            a.Sb(256, null, P.a, _.b, []),
            (l()(),
            a.yb(
              4,
              0,
              null,
              0,
              2,
              "au3-fpk-title-line",
              [
                ["id", ""],
                ["primaryDeveloperText", "Phone"],
                ["secondaryDeveloperText", "Hinweis"],
              ],
              [[2, "priority-shrink", null]],
              null,
              null,
              O.b,
              O.a,
            )),
            a.xb(
              5,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              6,
              49152,
              null,
              0,
              S.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
                showLeftDrawerIcon: [2, "showLeftDrawerIcon"],
              },
              null,
            ),
            (l()(), a.hb(16777216, null, 0, 2, null, Ql)),
            a.xb(
              8,
              16384,
              null,
              0,
              Ll.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            a.Pb(131072, Ll.b, [a.h]),
            (l()(), a.hb(0, [["carPlayNotActive", 2]], 0, 0, null, an)),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "Screen:KOMBI_PHONE_INIT_NAD*"),
              l(n, 2, 0),
              l(n, 5, 0, ""),
              l(n, 6, 0, "Phone", "Hinweis", !1),
              l(
                n,
                8,
                0,
                a.Yb(n, 8, 0, a.Nb(n, 9).transform(e.appleCarPlayActive$)),
                a.Nb(n, 10),
              ));
          },
          function (l, n) {
            l(n, 4, 0, a.Nb(n, 6).isPriorityShrink);
          },
        );
      }
      function on(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
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
              tn,
              Xl,
            )),
            a.xb(1, 114688, null, 0, Jl, [Wl.a, Zl.a], null, null),
          ],
          function (l, n) {
            l(n, 1, 0);
          },
          null,
        );
      }
      var un = a.ub("au3-not-connected", Jl, on, {}, {}, []),
        rn = e("Es8C"),
        cn = e("A66t"),
        sn = e("Fok3");
      class bn {
        constructor() {}
      }
      var dn = a.wb({
        encapsulation: 0,
        styles: [["[_nghost-%COMP%]{display:block;height:100%}"]],
        data: {},
      });
      function hn(l) {
        return a.ac(
          2,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              5,
              "au3-fpk-screen",
              [["id", "Screen: KOMBI_CALLSTACK"]],
              null,
              null,
              null,
              v.b,
              v.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 114688, null, 0, _.a, [], null, null),
            a.Sb(256, null, P.a, _.b, []),
            (l()(),
            a.yb(
              4,
              0,
              null,
              0,
              1,
              "au3-fpk-callstack-view",
              [],
              null,
              [["global", "keydown.KeyH"]],
              function (l, n, e) {
                var t = !0;
                return (
                  "global:keydown.KeyH" === n &&
                    (t = !1 !== a.Nb(l, 5).keyDown() && t),
                  t
                );
              },
              rn.b,
              rn.a,
            )),
            a.xb(5, 180224, null, 0, cn.a, [R.c, sn.a, b.a], null, null),
          ],
          function (l, n) {
            (l(n, 1, 0, "Screen: KOMBI_CALLSTACK"), l(n, 2, 0));
          },
          null,
        );
      }
      function fn(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-callstack",
              [],
              null,
              null,
              null,
              hn,
              dn,
            )),
            a.xb(1, 49152, null, 0, bn, [], null, null),
          ],
          null,
          null,
        );
      }
      var pn = a.ub("au3-fpk-callstack", bn, fn, {}, {}, []),
        gn = e("HVUF"),
        mn = e("B3Zb"),
        xn = e("DElP"),
        Cn = e("FkRV"),
        yn = e("YzIb"),
        vn = e("948h"),
        Nn = (function (l) {
          return (
            (l[(l.NORMAL = 0)] = "NORMAL"),
            (l[(l.UNKNOWN = 1)] = "UNKNOWN"),
            (l[(l.CONFERENCE = 2)] = "CONFERENCE"),
            (l[(l.CONCIERGE = 3)] = "CONCIERGE"),
            (l[(l.CONFIDENTIAL = 4)] = "CONFIDENTIAL"),
            (l[(l.MAILBOX = 5)] = "MAILBOX"),
            l
          );
        })({});
      class _n {
        constructor(l) {
          ((this.sosCallKoreaChinaService = l),
            (this.callTextEnum = yn.c),
            (this.sosCallNameEnum = yn.e),
            (this.scaleMode = p.ab.Contain),
            (this.uiCallStateEnum = Cn.b),
            (this.callStateEnum = Dl.d),
            (this.lockingContext = p.Bb.PHONE),
            (this.callTypeEnum = Nn),
            (this.confidentialModeReplacement = yn.d),
            (this.showCallData = !1),
            (this.showSeparatorAbove = !1));
        }
        get call() {
          return this._call;
        }
        set call(l) {
          ((this._call = l),
            (this.callType = Nn.UNKNOWN),
            l &&
              (l.isConfidential
                ? (this.callType = Nn.CONFIDENTIAL)
                : l.isConference
                  ? (this.callType = Nn.CONFERENCE)
                  : this.isMailbox()
                    ? (this.callType = Nn.MAILBOX)
                    : l.callType === Dl.b.CONCIERGE
                      ? (this.callType = Nn.CONCIERGE)
                      : (l.callerName || l.number) &&
                        (this.callType = Nn.NORMAL)));
        }
        get isConference() {
          return this.call && this.call.isConference;
        }
        get callerText() {
          return (
            (this.call && (this.call.callerName || this.call.number)) || ""
          );
        }
        get sosCallerText() {
          return this.sosCallKoreaChinaService.sosCallNumberToName(
            this.call && this.call.number,
          );
        }
        get sosCallName() {
          return this.sosCallKoreaChinaService.getEmergencyNumberName(
            this.call && this.call.number,
          );
        }
        isMailbox() {
          return (
            !(!this.call || this.call.callType !== Dl.b.MAILBOX) ||
            !(
              !this.call ||
              !this.call.phoneDevice ||
              this.call.number !== this.call.phoneDevice.mailboxNumber
            )
          );
        }
      }
      var Pn = a.wb({
        encapsulation: 0,
        styles: [
          [
            '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;position:relative;height:52px;margin:3px 0 4px;padding:0 15px}.show-call-data[_nghost-%COMP%]{margin-top:110px}.show-call-data[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{top:-110px;padding-top:8px;grid-template-rows:52px 52px 52px}.show-call-data[_nghost-%COMP%]   .action[_ngcontent-%COMP%]{grid-row:3}[_nghost-%COMP%]:not(.show-call-data)   .container[_ngcontent-%COMP%]{top:0;grid-template-rows:52px}[_nghost-%COMP%]:not(.show-call-data)   .action[_ngcontent-%COMP%]{grid-row:1}.show-separator-above[_nghost-%COMP%]:before{content:"";position:absolute;top:-110px;left:0;right:0;border-top-style:solid;border-top-width:1px;border-image:linear-gradient(90deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.8) 50%,hsla(0,0%,100%,.5)) 1}.container[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;height:100%;display:grid;padding:0 15px;grid-template-columns:400px 1fr 225px;align-items:baseline;will-change:transform}.picture[_ngcontent-%COMP%]{grid-column:3;grid-row-start:1;grid-row-end:4;align-self:start;justify-self:end;width:150px;height:150px;transition:opacity 1s}.caller[_ngcontent-%COMP%]{grid-column:1;grid-row:1;font-size:40px}.duration[_ngcontent-%COMP%]{grid-column:2;grid-row:1;justify-self:end;font-size:30px;transition:opacity 1s}.status[_ngcontent-%COMP%]{grid-row:2;font-size:30px}.action[_ngcontent-%COMP%], .status[_ngcontent-%COMP%]{grid-column:1;grid-column-end:3}.action[_ngcontent-%COMP%]{align-self:end;height:100%}.fpk-stage-small[_nghost-%COMP%]   .picture[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .picture[_ngcontent-%COMP%]{opacity:0}.fpk-stage-small[_nghost-%COMP%]   .duration[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .duration[_ngcontent-%COMP%]{transition:opacity 0s;opacity:0}',
          ],
        ],
        data: {},
      });
      function On(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              6,
              "div",
              [
                ["class", "caller"],
                ["id", "SosCallerText"],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (l()(),
            a.yb(
              2,
              0,
              null,
              null,
              4,
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
              L.b,
              L.a,
            )),
            a.xb(
              3,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            a.xb(
              4,
              16384,
              null,
              0,
              E.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            a.Qb(5, { name: 0 }),
            a.xb(
              6,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "SosCallerText"),
              l(n, 3, 0, e.sosCallerText, e.sosCallNameEnum));
            var a = l(n, 5, 0, e.sosCallName);
            (l(n, 4, 0, a), l(n, 6, 0, e.sosCallerText, e.sosCallerText, 1));
          },
          function (l, n) {
            l(
              n,
              2,
              0,
              a.Nb(n, 6).backgroundColor,
              a.Nb(n, 6).fixedNumberOfLines,
              a.Nb(n, 6).mayContainLatinCharsForArabic,
              a.Nb(n, 6).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Sn(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "caller"],
                ["id", "CallerText"],
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
              L.b,
              L.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 16384, null, 0, D.a, [], null, null),
            a.xb(
              3,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "CallerText"), l(n, 3, 0, "CallerText", e.callerText));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 3).backgroundColor,
              a.Nb(n, 3).fixedNumberOfLines,
              a.Nb(n, 3).mayContainLatinCharsForArabic,
              a.Nb(n, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Tn(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "caller"],
                ["id", "CallerUnknown"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              L.b,
              L.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "CallerUnknown"),
              l(n, 2, 0, e.callTextEnum.CallerUnknown, "CallerUnknown", 1));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 2).backgroundColor,
              a.Nb(n, 2).fixedNumberOfLines,
              a.Nb(n, 2).mayContainLatinCharsForArabic,
              a.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Mn(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "caller"],
                ["id", "CallerMailbox"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              L.b,
              L.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "CallerMailbox"),
              l(n, 2, 0, e.callTextEnum.Mailbox, "CallerMailbox", 1));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 2).backgroundColor,
              a.Nb(n, 2).fixedNumberOfLines,
              a.Nb(n, 2).mayContainLatinCharsForArabic,
              a.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Ln(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "caller"],
                ["id", "ConferenceCall"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              L.b,
              L.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "ConferenceCall"),
              l(n, 2, 0, e.callTextEnum.ConferenceCall, "ConferenceCall", 1));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 2).backgroundColor,
              a.Nb(n, 2).fixedNumberOfLines,
              a.Nb(n, 2).mayContainLatinCharsForArabic,
              a.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function An(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "caller"],
                ["id", "ConciergeCall"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              L.b,
              L.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "ConciergeCall"),
              l(n, 2, 0, e.callTextEnum.ConciergeCall, "ConciergeCall", 1));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 2).backgroundColor,
              a.Nb(n, 2).fixedNumberOfLines,
              a.Nb(n, 2).mayContainLatinCharsForArabic,
              a.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function kn(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "caller"],
                ["id", "Confidential"],
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
              L.b,
              L.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 16384, null, 0, D.a, [], null, null),
            a.xb(
              3,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "Confidential"),
              l(n, 3, 0, e.confidentialModeReplacement, "Confidential"));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 3).backgroundColor,
              a.Nb(n, 3).fixedNumberOfLines,
              a.Nb(n, 3).mayContainLatinCharsForArabic,
              a.Nb(n, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function wn(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "duration"],
                ["id", "CallDuration"],
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
              L.b,
              L.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 16384, null, 0, D.a, [], null, null),
            a.xb(
              3,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "CallDuration"),
              l(
                n,
                3,
                0,
                "CallDuration",
                null == e.call ? null : e.call.durationString,
              ));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 3).backgroundColor,
              a.Nb(n, 3).fixedNumberOfLines,
              a.Nb(n, 3).mayContainLatinCharsForArabic,
              a.Nb(n, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Dn(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              13,
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
              Ll.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (l()(), a.hb(16777216, null, null, 1, null, Sn)),
            a.xb(
              3,
              278528,
              null,
              0,
              Ll.p,
              [a.P, a.L, Ll.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), a.hb(16777216, null, null, 1, null, Tn)),
            a.xb(5, 16384, null, 0, Ll.q, [a.P, a.L, Ll.o], null, null),
            (l()(), a.hb(16777216, null, null, 1, null, Mn)),
            a.xb(
              7,
              278528,
              null,
              0,
              Ll.p,
              [a.P, a.L, Ll.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), a.hb(16777216, null, null, 1, null, Ln)),
            a.xb(
              9,
              278528,
              null,
              0,
              Ll.p,
              [a.P, a.L, Ll.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), a.hb(16777216, null, null, 1, null, An)),
            a.xb(
              11,
              278528,
              null,
              0,
              Ll.p,
              [a.P, a.L, Ll.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), a.hb(16777216, null, null, 1, null, kn)),
            a.xb(
              13,
              278528,
              null,
              0,
              Ll.p,
              [a.P, a.L, Ll.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), a.hb(16777216, null, null, 1, null, wn)),
            a.xb(
              15,
              16384,
              null,
              0,
              Ll.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), a.hb(0, null, null, 0)),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, e.callType),
              l(n, 3, 0, e.callTypeEnum.NORMAL),
              l(n, 7, 0, e.callTypeEnum.MAILBOX),
              l(n, 9, 0, e.callTypeEnum.CONFERENCE),
              l(n, 11, 0, e.callTypeEnum.CONCIERGE),
              l(n, 13, 0, e.callTypeEnum.CONFIDENTIAL),
              l(
                n,
                15,
                0,
                (null == e.call ? null : e.call.callState) ===
                  e.callStateEnum.ACTIVE ||
                  (null == e.call ? null : e.call.callState) ===
                    e.callStateEnum.HOLD,
              ));
          },
          null,
        );
      }
      function En(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
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
            a.yb(
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
              gn.b,
              gn.a,
            )),
            a.xb(
              2,
              4243456,
              null,
              0,
              mn.b,
              [b.a, a.z],
              { fileName: [0, "fileName"], scaleMode: [1, "scaleMode"] },
              null,
            ),
            a.xb(
              3,
              212992,
              null,
              0,
              xn.a,
              [gl.i, [2, gl.a], a.h],
              { context: [0, "context"] },
              null,
            ),
            (l()(), a.hb(16777216, null, null, 1, null, On)),
            a.xb(
              5,
              16384,
              null,
              0,
              Ll.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (l()(), a.hb(0, [["normalCall", 2]], null, 0, null, Dn)),
            (l()(),
            a.yb(
              7,
              0,
              null,
              null,
              4,
              "div",
              [
                ["class", "status"],
                ["id", "CallState"],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            a.xb(
              8,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (l()(),
            a.yb(
              9,
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
              L.b,
              L.a,
            )),
            a.xb(
              10,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            a.xb(
              11,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 2, 0, null == e.call ? null : e.call.pictureUri, e.scaleMode),
              l(n, 3, 0, e.lockingContext),
              l(n, 5, 0, null == e.call ? null : e.call.isSOS, a.Nb(n, 6)),
              l(n, 8, 0, "CallState"),
              l(
                n,
                10,
                0,
                null == e.call ? null : e.call.uiCallState,
                e.uiCallStateEnum,
              ),
              l(
                n,
                11,
                0,
                null == e.call ? null : e.call.uiCallState,
                null == e.call ? null : e.call.uiCallState,
                1,
              ));
          },
          function (l, n) {
            (l(
              n,
              1,
              0,
              a.Nb(n, 2).iconComponentHidden,
              a.Nb(n, 3).hide,
              a.Nb(n, 3).fade,
            ),
              l(
                n,
                9,
                0,
                a.Nb(n, 11).backgroundColor,
                a.Nb(n, 11).fixedNumberOfLines,
                a.Nb(n, 11).mayContainLatinCharsForArabic,
                a.Nb(n, 11).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function In(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              4,
              "div",
              [["class", "container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(), a.hb(16777216, null, null, 1, null, En)),
            a.xb(
              2,
              16384,
              null,
              0,
              Ll.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(),
            a.yb(
              3,
              0,
              null,
              null,
              1,
              "div",
              [["class", "action"]],
              null,
              null,
              null,
              null,
              null,
            )),
            a.Mb(null, 0),
          ],
          function (l, n) {
            l(n, 2, 0, n.component.showCallData);
          },
          null,
        );
      }
      var Hn = e("bwdy"),
        Fn = e("hBG2");
      class Rn {
        constructor(l, n, e, a) {
          ((this.phoneService = l),
            (this.callOperationsService = n),
            (this.fpkPhoneService = e),
            (this.callTextEnum = yn.c),
            (this.ICON_CATEGORY_LIST = p.Z.List),
            (this.listCursorSizeEnum = p.pb),
            (this.callStateEnum = Dl.d),
            (this.callOperationEnum = Fn.a),
            (this.titleIdEnum = yn.a),
            (this.activeCalls = 0),
            (this.twoActiveCalls = !1),
            (this.subscriptions = new Hn.a()),
            (this.logger = a.getLogger("phone.ActiveCallComponent")),
            (this.activeCallDeviceName$ = this.phoneService.calls$.pipe(
              Object(El.a)((l) => {
                const n =
                  l && l.focusCall && l.focusCall.phoneDevice
                    ? l.focusCall.phoneDevice
                    : null;
                if (null == n)
                  return (
                    this.logger.warn(
                      "activeCallDeviceName$ focus call has no phoneDevice",
                    ),
                    ""
                  );
                if (n.name) return n.name;
                {
                  const l = this.phoneService.phones.find((l) => l.id === n.id);
                  return (
                    l ||
                      this.logger.warn(
                        "activeCallDeviceName$ device could not be found",
                        n,
                      ),
                    l ? l.name : ""
                  );
                }
              }),
            )),
            (this.isSOS$ = this.phoneService.calls$.pipe(
              Object(El.a)((l) => !!l.focusCall && l.focusCall.isSOS),
            )),
            (this.isConciergeCall$ = this.phoneService.calls$.pipe(
              Object(El.a)(
                (l) => !!l.focusCall && l.focusCall.callType === Dl.b.CONCIERGE,
              ),
            )),
            (this.callActions$ = this.phoneService.calls$.pipe(
              Object(El.a)((l) => {
                const e = l.map((e) => {
                  if (l.focusCall && e.id === l.focusCall.id) {
                    const a = [];
                    return (
                      a.push({
                        call: e,
                        action: Fn.a.HangUp,
                        disabled: !n.isPossible(e, Fn.a.HangUp),
                      }),
                      n.isPossible(l.focusCall, Fn.a.Hold) &&
                        a.push({
                          call: e,
                          action: Fn.a.Hold,
                          disabled: l.focusCall.isSOS,
                        }),
                      n.isPossible(l.focusCall, Fn.a.Resume) &&
                        a.push({ call: e, action: Fn.a.Resume, disabled: !1 }),
                      l.focusCall.callState === Dl.d.ACTIVE &&
                        (a.push(
                          l.focusCall.isMicrophoneMuted
                            ? {
                                call: e,
                                action: "unmute",
                                disabled:
                                  l.focusCall.audioEndpoint === Dl.a.MOBILE,
                              }
                            : {
                                call: e,
                                action: "mute",
                                disabled:
                                  l.focusCall.audioEndpoint !== Dl.a.SPEAKER ||
                                  l.focusCall.isSOS ||
                                  l.focusCall.isPOI,
                              },
                        ),
                        n.isPossible(l.focusCall, Fn.a.Join) &&
                          a.push({ call: e, action: Fn.a.Join, disabled: !1 })),
                      a
                    );
                  }
                  return [
                    {
                      call: e,
                      action: Fn.a.Swap,
                      disabled: !n.isPossible(l.focusCall, Fn.a.Swap),
                    },
                  ];
                });
                return (
                  e.length > 0 && e[0].length > 0 && (e[0][0].firstCall = !0),
                  e.forEach((l) => {
                    l.length > 0 && (l[0].firstActionForCall = !0);
                  }),
                  [].concat(...e)
                );
              }),
            )),
            this.subscriptions.add(
              this.phoneService.calls$.subscribe((l) => {
                const n = l.focusCall;
                (n && n.id) ||
                  this.fpkPhoneService.triggerHistoryAwareRoutingTo(
                    f.a.Callstack,
                  );
              }),
            ),
            p.gd.isBentley &&
              this.subscriptions.add(
                this.callActions$.subscribe((l) => {
                  for (const n of l) n.firstActionForCall && this.activeCalls++;
                  ((this.twoActiveCalls = this.activeCalls >= 2),
                    (this.activeCalls = 0));
                }),
              ));
        }
        onCallAction(l) {
          l.disabled
            ? this.logger.error("onCallAction: action is disabled: ", l.action)
            : (this.logger.info(
                `onCallAction: perform action ${l.action} on call ${l.call.id}`,
              ),
              "mute" === l.action
                ? this.muteCall(l.call)
                : "unmute" === l.action
                  ? this.unmuteCall(l.call)
                  : (l.call &&
                      l.call.callType &&
                      R.a.has(l.call.callType) &&
                      l.action === Fn.a.HangUp) ||
                    this.callOperationsService.perform(l.call, l.action));
        }
        ngOnDestroy() {
          this.subscriptions.unsubscribe();
        }
        muteCall(l) {
          this.phoneService.muteCall(l.id);
        }
        unmuteCall(l) {
          this.phoneService.unmuteCall(l.id);
        }
      }
      var Bn = a.wb({
        encapsulation: 0,
        styles: [
          [
            '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.content[_ngcontent-%COMP%], [_nghost-%COMP%]{height:100%;display:flex;flex-direction:column}.content[_ngcontent-%COMP%]{overflow:hidden;margin-top:11px}.list[_ngcontent-%COMP%]{width:100%;height:100%}.button[_ngcontent-%COMP%]{display:flex;align-items:center;height:52px}.button__text[_ngcontent-%COMP%]{margin:0 15px;font-size:38px}.swap[_ngcontent-%COMP%]{flex:1 0 auto}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}',
          ],
        ],
        data: {},
      });
      function $n(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
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
            (l()(),
            a.yb(
              1,
              0,
              null,
              null,
              1,
              "au3-fpk-title-line",
              [["secondaryDeveloperText", "Anruf"]],
              [[2, "priority-shrink", null]],
              null,
              null,
              O.b,
              O.a,
            )),
            a.xb(
              2,
              49152,
              null,
              0,
              S.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryId: [1, "primaryId"],
                secondaryDeveloperText: [2, "secondaryDeveloperText"],
              },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            l(
              n,
              2,
              0,
              e.titleIdEnum.SosCallOnEsimKoreaChina,
              e.titleIdEnum.SosCallOnEsimKoreaChina,
              "Anruf",
            );
          },
          function (l, n) {
            l(n, 1, 0, a.Nb(n, 2).isPriorityShrink);
          },
        );
      }
      function zn(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
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
            (l()(),
            a.yb(
              1,
              0,
              null,
              null,
              1,
              "au3-fpk-title-line",
              [["secondaryDeveloperText", "Anruf"]],
              [[2, "priority-shrink", null]],
              null,
              null,
              O.b,
              O.a,
            )),
            a.xb(
              2,
              49152,
              null,
              0,
              S.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryId: [1, "primaryId"],
                secondaryDeveloperText: [2, "secondaryDeveloperText"],
              },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            l(
              n,
              2,
              0,
              e.titleIdEnum.Concierge,
              e.titleIdEnum.Concierge,
              "Anruf",
            );
          },
          function (l, n) {
            l(n, 1, 0, a.Nb(n, 2).isPriorityShrink);
          },
        );
      }
      function Kn(l) {
        return a.ac(
          0,
          [
            (l()(), a.hb(16777216, null, null, 2, null, zn)),
            a.xb(
              1,
              16384,
              null,
              0,
              Ll.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            a.Pb(131072, Ll.b, [a.h]),
            (l()(), a.hb(0, null, null, 0)),
          ],
          function (l, n) {
            var e = n.component;
            l(
              n,
              1,
              0,
              a.Yb(n, 1, 0, a.Nb(n, 2).transform(e.isConciergeCall$)),
              a.Nb(n.parent, 8),
            );
          },
          null,
        );
      }
      function Yn(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-fpk-title-line",
              [
                ["id", "NormalCallTitle"],
                ["secondaryDeveloperText", "Anruf"],
              ],
              [[2, "priority-shrink", null]],
              null,
              null,
              O.b,
              O.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              49152,
              null,
              0,
              S.a,
              [],
              {
                primaryNonI18nText: [0, "primaryNonI18nText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            a.Pb(131072, Ll.b, [a.h]),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "NormalCallTitle"),
              l(
                n,
                2,
                0,
                a.Yb(n, 2, 0, a.Nb(n, 3).transform(e.activeCallDeviceName$)),
                "Anruf",
              ));
          },
          function (l, n) {
            l(n, 0, 0, a.Nb(n, 2).isPriorityShrink);
          },
        );
      }
      function Un(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              9,
              "div",
              [
                ["class", "button"],
                ["id", "HangUpPhoneCallButton"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              null,
              null,
              null,
              null,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              147456,
              null,
              0,
              V.a,
              [Z.a, a.h, b.a, [3, V.a]],
              {
                mib3DisabledBrighterIcon: [0, "mib3DisabledBrighterIcon"],
                disabled: [1, "disabled"],
              },
              null,
            ),
            (l()(),
            a.yb(
              3,
              0,
              null,
              null,
              2,
              "au3-icon",
              [["fileName", "E04E_phone_no_call.webp"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "icon-component--hidden", null],
              ],
              null,
              null,
              gn.b,
              gn.a,
            )),
            a.xb(
              4,
              147456,
              null,
              0,
              V.a,
              [Z.a, a.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            a.xb(
              5,
              4243456,
              null,
              0,
              mn.b,
              [b.a, a.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (l()(),
            a.yb(
              6,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "button__text"],
                ["id", "HangUpPhoneCall"],
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
              L.b,
              L.a,
            )),
            a.xb(
              7,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              8,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            a.xb(
              9,
              147456,
              null,
              0,
              V.a,
              [Z.a, a.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "HangUpPhoneCallButton"),
              l(n, 2, 0, !0, n.parent.context.$implicit.disabled),
              l(n, 4, 0, n.parent.context.$implicit.disabled),
              l(n, 5, 0, "E04E_phone_no_call.webp", e.ICON_CATEGORY_LIST),
              l(n, 7, 0, "HangUpPhoneCall"),
              l(n, 8, 0, e.callTextEnum.HangupCall, "HangUpPhoneCall", 1),
              l(n, 9, 0, n.parent.context.$implicit.disabled));
          },
          function (l, n) {
            (l(
              n,
              0,
              0,
              a.Nb(n, 2).combinedDisabled,
              a.Nb(n, 2).useBrighterIcon,
            ),
              l(
                n,
                3,
                0,
                a.Nb(n, 4).combinedDisabled,
                a.Nb(n, 4).useBrighterIcon,
                a.Nb(n, 5).iconComponentHidden,
              ),
              l(
                n,
                6,
                0,
                a.Nb(n, 8).backgroundColor,
                a.Nb(n, 8).fixedNumberOfLines,
                a.Nb(n, 8).mayContainLatinCharsForArabic,
                a.Nb(n, 8).shortenWithEllipsisForArabic,
                a.Nb(n, 9).combinedDisabled,
                a.Nb(n, 9).useBrighterIcon,
              ));
          },
        );
      }
      function jn(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              9,
              "div",
              [
                ["class", "button button--padding"],
                ["id", "HoldPhoneCallButton"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              null,
              null,
              null,
              null,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              147456,
              null,
              0,
              V.a,
              [Z.a, a.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            (l()(),
            a.yb(
              3,
              0,
              null,
              null,
              2,
              "au3-icon",
              [["fileName", "E055_phone_hold_call.webp"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "icon-component--hidden", null],
              ],
              null,
              null,
              gn.b,
              gn.a,
            )),
            a.xb(
              4,
              147456,
              null,
              0,
              V.a,
              [Z.a, a.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            a.xb(
              5,
              4243456,
              null,
              0,
              mn.b,
              [b.a, a.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (l()(),
            a.yb(
              6,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "button__text"],
                ["id", "HoldPhoneCall"],
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
              L.b,
              L.a,
            )),
            a.xb(
              7,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              8,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            a.xb(
              9,
              147456,
              null,
              0,
              V.a,
              [Z.a, a.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "HoldPhoneCallButton"),
              l(n, 2, 0, n.parent.context.$implicit.disabled),
              l(n, 4, 0, n.parent.context.$implicit.disabled),
              l(n, 5, 0, "E055_phone_hold_call.webp", e.ICON_CATEGORY_LIST),
              l(n, 7, 0, "HoldPhoneCall"),
              l(n, 8, 0, e.callTextEnum.HoldCall, "HoldPhoneCall", 1),
              l(n, 9, 0, n.parent.context.$implicit.disabled));
          },
          function (l, n) {
            (l(
              n,
              0,
              0,
              a.Nb(n, 2).combinedDisabled,
              a.Nb(n, 2).useBrighterIcon,
            ),
              l(
                n,
                3,
                0,
                a.Nb(n, 4).combinedDisabled,
                a.Nb(n, 4).useBrighterIcon,
                a.Nb(n, 5).iconComponentHidden,
              ),
              l(
                n,
                6,
                0,
                a.Nb(n, 8).backgroundColor,
                a.Nb(n, 8).fixedNumberOfLines,
                a.Nb(n, 8).mayContainLatinCharsForArabic,
                a.Nb(n, 8).shortenWithEllipsisForArabic,
                a.Nb(n, 9).combinedDisabled,
                a.Nb(n, 9).useBrighterIcon,
              ));
          },
        );
      }
      function Gn(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              6,
              "div",
              [
                ["class", "button button--padding"],
                ["id", "ResumePhoneCallButton"],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (l()(),
            a.yb(
              2,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["fileName", "E054_phone_continue_call.webp"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              gn.b,
              gn.a,
            )),
            a.xb(
              3,
              4243456,
              null,
              0,
              mn.b,
              [b.a, a.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (l()(),
            a.yb(
              4,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "button__text"],
                ["id", "ResumePhoneCall"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              L.b,
              L.a,
            )),
            a.xb(
              5,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              6,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "ResumePhoneCallButton"),
              l(n, 3, 0, "E054_phone_continue_call.webp", e.ICON_CATEGORY_LIST),
              l(n, 5, 0, "ResumePhoneCall"),
              l(n, 6, 0, e.callTextEnum.ContinueCall, "ResumePhoneCall", 1));
          },
          function (l, n) {
            (l(n, 2, 0, a.Nb(n, 3).iconComponentHidden),
              l(
                n,
                4,
                0,
                a.Nb(n, 6).backgroundColor,
                a.Nb(n, 6).fixedNumberOfLines,
                a.Nb(n, 6).mayContainLatinCharsForArabic,
                a.Nb(n, 6).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function Wn(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              9,
              "div",
              [
                ["class", "button button--padding"],
                ["id", "MuteCallButton"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              null,
              null,
              null,
              null,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              147456,
              null,
              0,
              V.a,
              [Z.a, a.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            (l()(),
            a.yb(
              3,
              0,
              null,
              null,
              2,
              "au3-icon",
              [["fileName", "E013_phone_mic_off.webp"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "icon-component--hidden", null],
              ],
              null,
              null,
              gn.b,
              gn.a,
            )),
            a.xb(
              4,
              147456,
              null,
              0,
              V.a,
              [Z.a, a.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            a.xb(
              5,
              4243456,
              null,
              0,
              mn.b,
              [b.a, a.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (l()(),
            a.yb(
              6,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "button__text"],
                ["id", "MuteCall"],
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
              L.b,
              L.a,
            )),
            a.xb(
              7,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              8,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            a.xb(
              9,
              147456,
              null,
              0,
              V.a,
              [Z.a, a.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "MuteCallButton"),
              l(n, 2, 0, n.parent.context.$implicit.disabled),
              l(n, 4, 0, n.parent.context.$implicit.disabled),
              l(n, 5, 0, "E013_phone_mic_off.webp", e.ICON_CATEGORY_LIST),
              l(n, 7, 0, "MuteCall"),
              l(n, 8, 0, "Stumm schalten", "MuteCall", 1),
              l(n, 9, 0, n.parent.context.$implicit.disabled));
          },
          function (l, n) {
            (l(
              n,
              0,
              0,
              a.Nb(n, 2).combinedDisabled,
              a.Nb(n, 2).useBrighterIcon,
            ),
              l(
                n,
                3,
                0,
                a.Nb(n, 4).combinedDisabled,
                a.Nb(n, 4).useBrighterIcon,
                a.Nb(n, 5).iconComponentHidden,
              ),
              l(
                n,
                6,
                0,
                a.Nb(n, 8).backgroundColor,
                a.Nb(n, 8).fixedNumberOfLines,
                a.Nb(n, 8).mayContainLatinCharsForArabic,
                a.Nb(n, 8).shortenWithEllipsisForArabic,
                a.Nb(n, 9).combinedDisabled,
                a.Nb(n, 9).useBrighterIcon,
              ));
          },
        );
      }
      function Vn(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              9,
              "div",
              [
                ["class", "button button--padding"],
                ["id", "UnmuteCallButton"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              null,
              null,
              null,
              null,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              147456,
              null,
              0,
              V.a,
              [Z.a, a.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            (l()(),
            a.yb(
              3,
              0,
              null,
              null,
              2,
              "au3-icon",
              [["fileName", "E012_phone_mic_on.webp"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "icon-component--hidden", null],
              ],
              null,
              null,
              gn.b,
              gn.a,
            )),
            a.xb(
              4,
              147456,
              null,
              0,
              V.a,
              [Z.a, a.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            a.xb(
              5,
              4243456,
              null,
              0,
              mn.b,
              [b.a, a.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (l()(),
            a.yb(
              6,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "button__text"],
                ["id", "UnmuteCall"],
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
              L.b,
              L.a,
            )),
            a.xb(
              7,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              8,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            a.xb(
              9,
              147456,
              null,
              0,
              V.a,
              [Z.a, a.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "UnmuteCallButton"),
              l(n, 2, 0, n.parent.context.$implicit.disabled),
              l(n, 4, 0, n.parent.context.$implicit.disabled),
              l(n, 5, 0, "E012_phone_mic_on.webp", e.ICON_CATEGORY_LIST),
              l(n, 7, 0, "UnmuteCall"),
              l(n, 8, 0, "H\xf6rbar schalten", "UnmuteCall", 1),
              l(n, 9, 0, n.parent.context.$implicit.disabled));
          },
          function (l, n) {
            (l(
              n,
              0,
              0,
              a.Nb(n, 2).combinedDisabled,
              a.Nb(n, 2).useBrighterIcon,
            ),
              l(
                n,
                3,
                0,
                a.Nb(n, 4).combinedDisabled,
                a.Nb(n, 4).useBrighterIcon,
                a.Nb(n, 5).iconComponentHidden,
              ),
              l(
                n,
                6,
                0,
                a.Nb(n, 8).backgroundColor,
                a.Nb(n, 8).fixedNumberOfLines,
                a.Nb(n, 8).mayContainLatinCharsForArabic,
                a.Nb(n, 8).shortenWithEllipsisForArabic,
                a.Nb(n, 9).combinedDisabled,
                a.Nb(n, 9).useBrighterIcon,
              ));
          },
        );
      }
      function Zn(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              6,
              "div",
              [
                ["class", "button button--padding"],
                ["id", "ConferenceButton"],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (l()(),
            a.yb(
              2,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["fileName", "E263_phone_conference.webp"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              gn.b,
              gn.a,
            )),
            a.xb(
              3,
              4243456,
              null,
              0,
              mn.b,
              [b.a, a.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (l()(),
            a.yb(
              4,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "button__text"],
                ["id", "Conference"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              L.b,
              L.a,
            )),
            a.xb(
              5,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              6,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "ConferenceButton"),
              l(n, 3, 0, "E263_phone_conference.webp", e.ICON_CATEGORY_LIST),
              l(n, 5, 0, "Conference"),
              l(n, 6, 0, e.callTextEnum.ConferenceCall, "Conference", 1));
          },
          function (l, n) {
            (l(n, 2, 0, a.Nb(n, 3).iconComponentHidden),
              l(
                n,
                4,
                0,
                a.Nb(n, 6).backgroundColor,
                a.Nb(n, 6).fixedNumberOfLines,
                a.Nb(n, 6).mayContainLatinCharsForArabic,
                a.Nb(n, 6).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function Jn(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              9,
              "div",
              [
                ["class", "button"],
                ["id", "SwapCallButton"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              null,
              null,
              null,
              null,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              147456,
              null,
              0,
              V.a,
              [Z.a, a.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            (l()(),
            a.yb(
              3,
              0,
              null,
              null,
              2,
              "au3-icon",
              [["fileName", "E054_phone_continue_call.webp"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "icon-component--hidden", null],
              ],
              null,
              null,
              gn.b,
              gn.a,
            )),
            a.xb(
              4,
              147456,
              null,
              0,
              V.a,
              [Z.a, a.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            a.xb(
              5,
              4243456,
              null,
              0,
              mn.b,
              [b.a, a.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (l()(),
            a.yb(
              6,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "button__text"],
                ["id", "SwapCall"],
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
              L.b,
              L.a,
            )),
            a.xb(
              7,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              8,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            a.xb(
              9,
              147456,
              null,
              0,
              V.a,
              [Z.a, a.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "SwapCallButton"),
              l(n, 2, 0, n.parent.context.$implicit.disabled),
              l(n, 4, 0, n.parent.context.$implicit.disabled),
              l(n, 5, 0, "E054_phone_continue_call.webp", e.ICON_CATEGORY_LIST),
              l(n, 7, 0, "SwapCall"),
              l(n, 8, 0, e.callTextEnum.ContinueCall, "SwapCall", 1),
              l(n, 9, 0, n.parent.context.$implicit.disabled));
          },
          function (l, n) {
            (l(
              n,
              0,
              0,
              a.Nb(n, 2).combinedDisabled,
              a.Nb(n, 2).useBrighterIcon,
            ),
              l(
                n,
                3,
                0,
                a.Nb(n, 4).combinedDisabled,
                a.Nb(n, 4).useBrighterIcon,
                a.Nb(n, 5).iconComponentHidden,
              ),
              l(
                n,
                6,
                0,
                a.Nb(n, 8).backgroundColor,
                a.Nb(n, 8).fixedNumberOfLines,
                a.Nb(n, 8).mayContainLatinCharsForArabic,
                a.Nb(n, 8).shortenWithEllipsisForArabic,
                a.Nb(n, 9).combinedDisabled,
                a.Nb(n, 9).useBrighterIcon,
              ));
          },
        );
      }
      function Xn(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              25,
              "au3-call-tile",
              [["id", "callAction"]],
              [
                [2, "mib3-haptic", null],
                [2, "show-call-data", null],
                [2, "show-separator-above", null],
              ],
              [[null, "mib3Tap"]],
              function (l, n, e) {
                var a = !0;
                return (
                  "mib3Tap" === n &&
                    (a =
                      !1 !== l.component.onCallAction(l.context.$implicit) &&
                      a),
                  a
                );
              },
              In,
              Pn,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 147456, null, 0, j.a, [a.l, a.z], null, null),
            a.xb(
              3,
              147456,
              null,
              0,
              G.a,
              [j.a, [2, W.a], [2, N.a], b.a],
              null,
              null,
            ),
            a.xb(
              4,
              212992,
              null,
              0,
              J.a,
              [
                b.a,
                X.b,
                G.a,
                [2, W.a],
                [2, N.a],
                [2, V.a],
                [2, Q.a],
                [2, r.a],
                a.z,
                q.a,
                a.l,
                [2, ll.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.Sb(131584, null, nl.a, nl.a, [[3, nl.a]]),
            a.xb(
              6,
              4407296,
              null,
              0,
              el.a,
              [
                a.l,
                al.a,
                a.h,
                nl.a,
                [2, tl.a],
                [2, W.b],
                [2, W.a],
                [2, il.a],
                [2, ol.a],
              ],
              null,
              null,
            ),
            a.xb(
              7,
              147456,
              null,
              0,
              rl.a,
              [
                [2, J.a],
                [2, V.a],
                [2, cl.a],
                [2, el.a],
                [2, sl.b],
                a.l,
                bl.a,
                dl.b,
              ],
              null,
              null,
            ),
            a.xb(
              8,
              147456,
              null,
              0,
              hl.a,
              [[2, el.a], [2, J.a], [2, X.b], fl.a],
              null,
              null,
            ),
            a.xb(
              9,
              49152,
              null,
              0,
              _n,
              [vn.a],
              {
                call: [0, "call"],
                showCallData: [1, "showCallData"],
                showSeparatorAbove: [2, "showSeparatorAbove"],
              },
              null,
            ),
            (l()(),
            a.yb(10, 0, null, 0, 15, null, null, null, null, null, null, null)),
            a.xb(
              11,
              16384,
              null,
              0,
              Ll.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (l()(), a.hb(16777216, [[1, 2]], null, 1, null, Un)),
            a.xb(
              13,
              278528,
              null,
              0,
              Ll.p,
              [a.P, a.L, Ll.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), a.hb(16777216, [[1, 2]], null, 1, null, jn)),
            a.xb(
              15,
              278528,
              null,
              0,
              Ll.p,
              [a.P, a.L, Ll.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), a.hb(16777216, [[1, 2]], null, 1, null, Gn)),
            a.xb(
              17,
              278528,
              null,
              0,
              Ll.p,
              [a.P, a.L, Ll.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), a.hb(16777216, [[1, 2]], null, 1, null, Wn)),
            a.xb(
              19,
              278528,
              null,
              0,
              Ll.p,
              [a.P, a.L, Ll.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), a.hb(16777216, [[1, 2]], null, 1, null, Vn)),
            a.xb(
              21,
              278528,
              null,
              0,
              Ll.p,
              [a.P, a.L, Ll.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), a.hb(16777216, [[1, 2]], null, 1, null, Zn)),
            a.xb(
              23,
              278528,
              null,
              0,
              Ll.p,
              [a.P, a.L, Ll.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), a.hb(16777216, [[1, 2]], null, 1, null, Jn)),
            a.xb(
              25,
              278528,
              null,
              0,
              Ll.p,
              [a.P, a.L, Ll.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "callAction"),
              l(n, 4, 0),
              l(n, 6, 0),
              l(
                n,
                9,
                0,
                n.context.$implicit.call,
                n.context.$implicit.firstActionForCall,
                n.context.$implicit.firstActionForCall &&
                  !n.context.$implicit.firstCall,
              ),
              l(n, 11, 0, n.context.$implicit.action),
              l(n, 13, 0, e.callOperationEnum.HangUp),
              l(n, 15, 0, e.callOperationEnum.Hold),
              l(n, 17, 0, e.callOperationEnum.Resume),
              l(n, 19, 0, "mute"),
              l(n, 21, 0, "unmute"),
              l(n, 23, 0, e.callOperationEnum.Join),
              l(n, 25, 0, e.callOperationEnum.Swap));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 6).markerClassEnabled,
              a.Nb(n, 9).showCallData,
              a.Nb(n, 9).showSeparatorAbove,
            );
          },
        );
      }
      function Qn(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              17,
              "au3-fpk-screen",
              [["id", "Screen:KOMBI_PHONE_CALL*"]],
              null,
              null,
              null,
              v.b,
              v.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 114688, null, 0, _.a, [], null, null),
            a.Sb(256, null, P.a, _.b, []),
            (l()(), a.hb(16777216, null, 0, 2, null, $n)),
            a.xb(
              5,
              16384,
              null,
              0,
              Ll.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            a.Pb(131072, Ll.b, [a.h]),
            (l()(), a.hb(0, [["conciergeCall", 2]], 0, 0, null, Kn)),
            (l()(), a.hb(0, [["normalCall", 2]], 0, 0, null, Yn)),
            (l()(),
            a.yb(
              9,
              0,
              null,
              0,
              8,
              "div",
              [["class", "content"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            a.yb(
              10,
              0,
              null,
              null,
              7,
              "au3-list",
              [
                ["class", "list"],
                ["id", ""],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              xl.b,
              xl.a,
            )),
            a.Sb(6144, null, Cl.a, null, [yl.a]),
            a.xb(
              12,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(13, 16384, null, 0, vl.a, [a.l], null, null),
            a.xb(
              14,
              12828672,
              null,
              1,
              yl.a,
              [
                [2, Nl.a],
                [2, P.a],
                [8, null],
                [2, N.a],
                [2, _l.a],
                [2, Pl.a],
                [2, X.b],
                gl.i,
                a.z,
                a.h,
                b.a,
                Ol.a,
                Sl.a,
                [2, al.a],
                W.a,
                [2, gl.a],
              ],
              {
                showCursor: [0, "showCursor"],
                cursorSize: [1, "cursorSize"],
                showSeparators: [2, "showSeparators"],
                defaultTemplate: [3, "defaultTemplate"],
                items: [4, "items"],
              },
              null,
            ),
            a.Tb(603979776, 1, { template: 0 }),
            a.Pb(131072, Ll.b, [a.h]),
            (l()(),
            a.hb(
              0,
              [
                [1, 2],
                ["callActionTemplate", 2],
              ],
              0,
              0,
              null,
              Xn,
            )),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "Screen:KOMBI_PHONE_CALL*"),
              l(n, 2, 0),
              l(
                n,
                5,
                0,
                a.Yb(n, 5, 0, a.Nb(n, 6).transform(e.isSOS$)),
                a.Nb(n, 7),
              ),
              l(n, 12, 0, ""),
              l(
                n,
                14,
                0,
                !0,
                e.listCursorSizeEnum.PHONE_CALLER_IMAGE,
                !1,
                a.Nb(n, 17),
                a.Yb(n, 14, 4, a.Nb(n, 16).transform(e.callActions$)),
              ));
          },
          function (l, n) {
            l(n, 10, 0, a.Nb(n, 14).showLineNumbers);
          },
        );
      }
      function qn(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-active-call",
              [],
              null,
              null,
              null,
              Qn,
              Bn,
            )),
            a.xb(1, 180224, null, 0, Rn, [R.c, Fn.b, sn.a, b.a], null, null),
          ],
          null,
          null,
        );
      }
      var le = a.ub("au3-fpk-active-call", Rn, qn, {}, {}, []),
        ne = e("QQZH"),
        ee = e("kuMc"),
        ae = e("SAv1"),
        te = e("nbmZ");
      class ie {
        constructor(l, n, e) {
          ((this.routingService = l),
            (this.phoneService = n),
            (this.stageService = e),
            (this.fpkStageEnum = te.c),
            (this.destroyed$$ = new ne.a(1)));
        }
        ngOnInit() {
          ((this.phoneName$ = this.phoneService.phones$.pipe(
            Object(El.a)((l) => (l.focusDevice && l.focusDevice.name) || ""),
          )),
            (this.stage$ = this.stageService.currentStage$),
            Object(H.a)(3e3)
              .pipe(Object(ee.a)(this.destroyed$$))
              .subscribe(() => this.routingService.enterContext()));
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
      }
      var oe = a.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}.message[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;flex:1;font-size:40px;color:#fff;text-align:center;padding-bottom:1em;min-height:0}",
          ],
        ],
        data: {},
      });
      function ue(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "PhonesToggledBig"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              L.b,
              L.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (l, n) {
            (l(n, 1, 0, "PhonesToggledBig"),
              l(
                n,
                2,
                0,
                "Die Telefone wurden getauscht.\nAktuelles Telefon:",
                "PhonesToggledBig",
              ));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 2).backgroundColor,
              a.Nb(n, 2).fixedNumberOfLines,
              a.Nb(n, 2).mayContainLatinCharsForArabic,
              a.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function re(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "PhonesToggledSmall"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              L.b,
              L.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (l, n) {
            (l(n, 1, 0, "PhonesToggledSmall"),
              l(
                n,
                2,
                0,
                "Die Telefone wurden\ngetauscht.\nAktuelles Telefon:",
                "PhonesToggledSmall",
              ));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 2).backgroundColor,
              a.Nb(n, 2).fixedNumberOfLines,
              a.Nb(n, 2).mayContainLatinCharsForArabic,
              a.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function ce(l) {
        return a.ac(
          2,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              16,
              "au3-fpk-screen",
              [["id", "Screen:KOMBI_PHONE_MENUE_TOGGLE_PHONES"]],
              null,
              null,
              null,
              v.b,
              v.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 114688, null, 0, _.a, [], null, null),
            a.Sb(256, null, P.a, _.b, []),
            (l()(),
            a.yb(
              4,
              0,
              null,
              0,
              2,
              "au3-fpk-title-line",
              [
                ["id", ""],
                ["primaryDeveloperText", "Telefone tauschen"],
              ],
              [[2, "priority-shrink", null]],
              null,
              null,
              O.b,
              O.a,
            )),
            a.xb(
              5,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              6,
              49152,
              null,
              0,
              S.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryHasText: [1, "secondaryHasText"],
              },
              null,
            ),
            (l()(),
            a.yb(
              7,
              0,
              null,
              0,
              9,
              "div",
              [["class", "message"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(), a.hb(16777216, null, null, 2, null, ue)),
            a.xb(
              9,
              16384,
              null,
              0,
              Ll.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            a.Pb(131072, Ll.b, [a.h]),
            (l()(), a.hb(0, [["small", 2]], null, 0, null, re)),
            (l()(),
            a.yb(
              12,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["id", "PhoneName"],
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
              L.b,
              L.a,
            )),
            a.xb(
              13,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(14, 16384, null, 0, D.a, [], null, null),
            a.xb(
              15,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            a.Pb(131072, Ll.b, [a.h]),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "Screen:KOMBI_PHONE_MENUE_TOGGLE_PHONES"),
              l(n, 2, 0),
              l(n, 5, 0, ""),
              l(n, 6, 0, "Telefone tauschen", !1),
              l(
                n,
                9,
                0,
                a.Yb(n, 9, 0, a.Nb(n, 10).transform(e.stage$)) ===
                  e.fpkStageEnum.Large,
                a.Nb(n, 11),
              ),
              l(n, 13, 0, "PhoneName"),
              l(
                n,
                15,
                0,
                "PhoneName",
                a.Yb(n, 15, 1, a.Nb(n, 16).transform(e.phoneName$)),
              ));
          },
          function (l, n) {
            (l(n, 4, 0, a.Nb(n, 6).isPriorityShrink),
              l(
                n,
                12,
                0,
                a.Nb(n, 15).backgroundColor,
                a.Nb(n, 15).fixedNumberOfLines,
                a.Nb(n, 15).mayContainLatinCharsForArabic,
                a.Nb(n, 15).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function se(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-toggle-phone",
              [],
              null,
              null,
              null,
              ce,
              oe,
            )),
            a.xb(1, 245760, null, 0, ie, [f.b, R.c, ae.a], null, null),
          ],
          function (l, n) {
            l(n, 1, 0);
          },
          null,
        );
      }
      var be = a.ub("au3-toggle-phone", ie, se, {}, {}, []),
        de = e("IlA8"),
        he = e("6mtq"),
        fe = e("ROBh"),
        pe = e("vAPC"),
        ge = e("J+dc"),
        me = e("6xFL"),
        xe = (function (l) {
          return (
            (l.KombiNoFavoritesStoredHint =
              "Es sind keine Favoriten hinterlegt."),
            (l.KombiFavoritesNotYetAvailable =
              "Favoriten sind noch nicht verf\xfcgbar."),
            l
          );
        })({});
      class Ce {
        constructor(l, n, e, a) {
          ((this.fpkPhoneService = l),
            (this.phoneService = n),
            (this.adbService = e),
            (this.statusTextEnum = xe),
            (this.selectedIndex = 0),
            (this.subscriptionPhoneHook = Hn.a.EMPTY),
            (this.logger = a.getLogger("phone.FpkPhoneFavoritesComponent")),
            (this.phoneName$ = this.phoneService.deviceName$.pipe(
              Object(El.a)((l) => (l && l.length > 0 ? l : void 0)),
              Object(Il.a)(),
            )),
            (this.favorites$ = e.favorites$),
            (this.favoritesAvailable$ = e.focusDeviceProfileWithReload$.pipe(
              Object(El.a)((l) => !!l),
              Object(Il.a)(),
            )));
        }
        ngOnDestroy() {
          this.subscriptionPhoneHook.unsubscribe();
        }
        tryToStartCall(l) {
          const n = this.adbService.findPreferredFavoriteNumber(l);
          n && n.number
            ? (this.logger.info(
                `tryToStartCall from fpk favorites on ${n.number}; `,
                l,
              ),
              this.fpkPhoneService.dialNumber(n.number))
            : l && l.number
              ? (this.logger.info(
                  `tryToStartCall from main favorites on ${l.number}; `,
                  l,
                ),
                this.phoneService.dialNumber(l.number))
              : this.logger.warn("favorite has no preferred phone number", l);
        }
        keyDown() {
          this.phoneService.calls.incomingCall ||
            this.phoneService.calls.focusCall ||
            (this.subscriptionPhoneHook.unsubscribe(),
            (this.subscriptionPhoneHook = this.favorites$
              .pipe(
                Object(El.a)((l) => l[this.selectedIndex]),
                Object(pe.a)(1e3, Object(fe.a)(null)),
                Object(ge.a)(1),
              )
              .subscribe((l) => {
                l
                  ? this.tryToStartCall(l)
                  : this.logger.info("favorite not available:");
              })));
        }
      }
      var ye = a.wb({
        encapsulation: 0,
        styles: [
          [
            '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{height:100%}.content-container[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;flex-direction:column}.content-container[_ngcontent-%COMP%]{justify-content:center;height:354px;margin-top:11px;min-height:0}.favorite-list-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:start}.not-available__message[_ngcontent-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:40px;width:100%;text-align:center}.component-layout-arabic[_nghost-%COMP%]   .not-available__message[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .not-available__message[_ngcontent-%COMP%]{direction:rtl}.component-layout-latin[_nghost-%COMP%]   .not-available__message[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .not-available__message[_ngcontent-%COMP%]{direction:ltr}',
          ],
        ],
        data: {},
      });
      function ve(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              8,
              "au3-phone-favorite-list-item",
              [["class", "favorite-list-item"]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (l, n, e) {
                var a = !0;
                return (
                  "mib3Tap" === n &&
                    (a =
                      !1 !== l.component.tryToStartCall(l.context.$implicit) &&
                      a),
                  a
                );
              },
              de.b,
              de.a,
            )),
            a.xb(1, 147456, null, 0, j.a, [a.l, a.z], null, null),
            a.xb(
              2,
              147456,
              null,
              0,
              G.a,
              [j.a, [2, W.a], [2, N.a], b.a],
              null,
              null,
            ),
            a.xb(
              3,
              212992,
              null,
              0,
              J.a,
              [
                b.a,
                X.b,
                G.a,
                [2, W.a],
                [2, N.a],
                [2, V.a],
                [2, Q.a],
                [2, r.a],
                a.z,
                q.a,
                a.l,
                [2, ll.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.Sb(131584, null, nl.a, nl.a, [[3, nl.a]]),
            a.xb(
              5,
              4407296,
              null,
              0,
              el.a,
              [
                a.l,
                al.a,
                a.h,
                nl.a,
                [2, tl.a],
                [2, W.b],
                [2, W.a],
                [2, il.a],
                [2, ol.a],
              ],
              null,
              null,
            ),
            a.xb(
              6,
              147456,
              null,
              0,
              rl.a,
              [
                [2, J.a],
                [2, V.a],
                [2, cl.a],
                [2, el.a],
                [2, sl.b],
                a.l,
                bl.a,
                dl.b,
              ],
              null,
              null,
            ),
            a.xb(
              7,
              147456,
              null,
              0,
              hl.a,
              [[2, el.a], [2, J.a], [2, X.b], fl.a],
              null,
              null,
            ),
            a.xb(
              8,
              49152,
              null,
              0,
              he.a,
              [a.h],
              {
                contact: [0, "contact"],
                onlyNumber: [1, "onlyNumber"],
                number: [2, "number"],
                showInfoIcon: [3, "showInfoIcon"],
              },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 3, 0),
              l(n, 5, 0),
              l(
                n,
                8,
                0,
                null == n.context.$implicit
                  ? null
                  : n.context.$implicit.contact,
                e.adbService.onlyFavoriteNumber(n.context.$implicit),
                e.adbService.findPreferredFavoriteNumber(n.context.$implicit),
                !1,
              ));
          },
          function (l, n) {
            l(n, 0, 0, a.Nb(n, 5).markerClassEnabled);
          },
        );
      }
      function Ne(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              5,
              "au3-list",
              [],
              [[2, "list--with-line-numbers", null]],
              [[null, "selectedIndexChange"]],
              function (l, n, e) {
                var a = !0;
                return (
                  "selectedIndexChange" === n &&
                    (a = !1 !== (l.component.selectedIndex = e) && a),
                  a
                );
              },
              xl.b,
              xl.a,
            )),
            a.Sb(6144, null, Cl.a, null, [yl.a]),
            a.xb(2, 16384, null, 0, vl.a, [a.l], null, null),
            a.xb(
              3,
              12828672,
              null,
              1,
              yl.a,
              [
                [2, Nl.a],
                [2, P.a],
                [8, null],
                [2, N.a],
                [2, _l.a],
                [2, Pl.a],
                [2, X.b],
                gl.i,
                a.z,
                a.h,
                b.a,
                Ol.a,
                Sl.a,
                [2, al.a],
                W.a,
                [2, gl.a],
              ],
              {
                showCursor: [0, "showCursor"],
                showSeparators: [1, "showSeparators"],
                defaultTemplate: [2, "defaultTemplate"],
                items: [3, "items"],
              },
              { selectedIndexChange: "selectedIndexChange" },
            ),
            a.Tb(603979776, 1, { template: 0 }),
            (l()(),
            a.hb(
              0,
              [
                [1, 2],
                ["defaultTemplate", 2],
              ],
              0,
              0,
              null,
              ve,
            )),
          ],
          function (l, n) {
            l(n, 3, 0, !0, !1, a.Nb(n, 5), n.parent.context.mib3Let);
          },
          function (l, n) {
            l(n, 0, 0, a.Nb(n, 3).showLineNumbers);
          },
        );
      }
      function _e(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "content-container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(), a.hb(16777216, null, null, 1, null, Ne)),
            a.xb(
              2,
              16384,
              null,
              0,
              Ll.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              !!n.context.mib3Let && n.context.mib3Let.length > 0,
              a.Nb(n.parent, 11),
            );
          },
          null,
        );
      }
      function Pe(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "not-available__message"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              L.b,
              L.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(
              n,
              1,
              0,
              n.context.ngIf
                ? e.statusTextEnum.KombiNoFavoritesStoredHint
                : e.statusTextEnum.KombiFavoritesNotYetAvailable,
              e.statusTextEnum,
            ),
              l(
                n,
                2,
                0,
                n.context.ngIf
                  ? e.statusTextEnum.KombiNoFavoritesStoredHint
                  : e.statusTextEnum.KombiFavoritesNotYetAvailable,
                n.context.ngIf
                  ? e.statusTextEnum.KombiNoFavoritesStoredHint
                  : e.statusTextEnum.KombiFavoritesNotYetAvailable,
                5,
              ));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 2).backgroundColor,
              a.Nb(n, 2).fixedNumberOfLines,
              a.Nb(n, 2).mayContainLatinCharsForArabic,
              a.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Oe(l) {
        return a.ac(
          0,
          [
            (l()(), a.hb(16777216, null, null, 2, null, Pe)),
            a.xb(
              1,
              16384,
              null,
              0,
              Ll.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            a.Pb(131072, Ll.b, [a.h]),
            (l()(), a.hb(0, null, null, 0)),
          ],
          function (l, n) {
            var e = n.component;
            l(
              n,
              1,
              0,
              a.Yb(n, 1, 0, a.Nb(n, 2).transform(e.favoritesAvailable$)),
            );
          },
          null,
        );
      }
      function Se(l) {
        return a.ac(
          2,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-fpk-screen",
              [["id", "Screen: KOMBI_PHONE_FAVORITE*"]],
              null,
              null,
              null,
              v.b,
              v.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 114688, null, 0, _.a, [], null, null),
            a.Sb(256, null, P.a, _.b, []),
            (l()(),
            a.yb(
              4,
              0,
              null,
              0,
              3,
              "au3-fpk-title-line",
              [["id", ""]],
              [[2, "priority-shrink", null]],
              null,
              null,
              O.b,
              O.a,
            )),
            a.xb(
              5,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              6,
              49152,
              null,
              0,
              S.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryNonI18nText: [1, "primaryNonI18nText"],
                secondaryDeveloperText: [2, "secondaryDeveloperText"],
              },
              null,
            ),
            a.Pb(131072, Ll.b, [a.h]),
            (l()(), a.hb(16777216, null, 0, 2, null, _e)),
            a.xb(
              9,
              16384,
              null,
              0,
              wl.a,
              [a.L, a.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            a.Pb(131072, Ll.b, [a.h]),
            (l()(), a.hb(0, [["statustextTemplate", 2]], null, 0, null, Oe)),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "Screen: KOMBI_PHONE_FAVORITE*"),
              l(n, 2, 0),
              l(n, 5, 0, ""),
              l(
                n,
                6,
                0,
                "Phone",
                a.Yb(n, 6, 1, a.Nb(n, 7).transform(e.phoneName$)),
                "Favoriten",
              ),
              l(n, 9, 0, a.Yb(n, 9, 0, a.Nb(n, 10).transform(e.favorites$))));
          },
          function (l, n) {
            l(n, 4, 0, a.Nb(n, 6).isPriorityShrink);
          },
        );
      }
      function Te(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-phone-favorites",
              [],
              null,
              [["global", "keydown.KeyH"]],
              function (l, n, e) {
                var t = !0;
                return (
                  "global:keydown.KeyH" === n &&
                    (t = !1 !== a.Nb(l, 1).keyDown() && t),
                  t
                );
              },
              Se,
              ye,
            )),
            a.xb(1, 180224, null, 0, Ce, [sn.a, R.c, me.a, b.a], null, null),
          ],
          null,
          null,
        );
      }
      var Me = a.ub("au3-fpk-phone-favorites", Ce, Te, {}, {}, []),
        Le = e("3EdB"),
        Ae = e("eoEw"),
        ke = e("SOvQ"),
        we = e("4OpL"),
        De = e("kGpN");
      class Ee {
        constructor() {
          ((this.sourceUnit = p.vc.SECONDS),
            (this.formattingRuleDuration = De.a.DurationInHHMMSS),
            (this.callStateEnum = we.a));
        }
      }
      var Ie = a.wb({
        encapsulation: 0,
        styles: [
          [
            '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;position:relative;height:52px;margin:110px 0 4px;padding:0 15px}.container[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;height:100%;display:grid;grid-template-columns:400px 1fr 225px;align-items:baseline;will-change:transform;top:-110px;padding:8px 15px 0;grid-template-rows:52px 52px 52px}.picture[_ngcontent-%COMP%]{grid-column:3;grid-row-start:1;grid-row-end:4;align-self:start;justify-self:end;width:150px;height:150px;transition:opacity 1s}.caller[_ngcontent-%COMP%]{grid-column:1;grid-row:1;font-size:40px}.duration[_ngcontent-%COMP%]{grid-column:2;grid-row:1;justify-self:end;font-size:30px;transition:opacity 1s;overflow:hidden}.status[_ngcontent-%COMP%]{grid-column:1;grid-row:2;font-size:30px;grid-column-end:3}.content[_ngcontent-%COMP%]{grid-column:1;grid-row:3;align-self:end;grid-column-end:3}.fpk-stage-small[_nghost-%COMP%]   .picture[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .picture[_ngcontent-%COMP%]{opacity:0}.fpk-stage-small[_nghost-%COMP%]   .caller[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .caller[_ngcontent-%COMP%]{margin-right:0}.fpk-stage-small[_nghost-%COMP%]   .duration[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .duration[_ngcontent-%COMP%]{opacity:0}.fpk-stage-big[_nghost-%COMP%]   .caller[_ngcontent-%COMP%], .fpk-stage-big   [_nghost-%COMP%]   .caller[_ngcontent-%COMP%]{margin-right:30px}',
          ],
        ],
        data: {},
      });
      function He(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "caller"],
                ["id", "CallerText"],
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
              L.b,
              L.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 16384, null, 0, D.a, [], null, null),
            a.xb(
              3,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "CallerText"),
              l(
                n,
                3,
                0,
                "CallerText",
                null == e.call ? null : e.call.callerText,
              ));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 3).backgroundColor,
              a.Nb(n, 3).fixedNumberOfLines,
              a.Nb(n, 3).mayContainLatinCharsForArabic,
              a.Nb(n, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Fe(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "caller"],
                ["id", "CallerUnknown"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              L.b,
              L.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            (l(n, 1, 0, "CallerUnknown"),
              l(n, 2, 0, "Unknown", "CallerUnknown", 1));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 2).backgroundColor,
              a.Nb(n, 2).fixedNumberOfLines,
              a.Nb(n, 2).mayContainLatinCharsForArabic,
              a.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Re(l) {
        return a.ac(
          2,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              14,
              "div",
              [["class", "container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            a.yb(
              1,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "picture"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              gn.b,
              gn.a,
            )),
            a.xb(
              2,
              4243456,
              null,
              0,
              mn.b,
              [b.a, a.z],
              { fileName: [0, "fileName"] },
              null,
            ),
            (l()(), a.hb(16777216, null, null, 1, null, He)),
            a.xb(
              4,
              16384,
              null,
              0,
              Ll.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), a.hb(16777216, null, null, 1, null, Fe)),
            a.xb(
              6,
              16384,
              null,
              0,
              Ll.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(),
            a.yb(
              7,
              0,
              null,
              null,
              2,
              "au3-formatted-unit-renderer",
              [
                ["class", "duration"],
                ["id", "CallDuration"],
              ],
              [[2, "invisible", null]],
              null,
              null,
              Le.b,
              Le.a,
            )),
            a.xb(
              8,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              9,
              180224,
              null,
              0,
              Ae.b,
              [k.a, ke.a, a.h],
              {
                rawValue: [0, "rawValue"],
                rawValueUnit: [1, "rawValueUnit"],
                rawValueFormattingRule: [2, "rawValueFormattingRule"],
              },
              null,
            ),
            (l()(),
            a.yb(
              10,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "status"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              L.b,
              L.a,
            )),
            a.xb(
              11,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            a.xb(
              12,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (l()(),
            a.yb(
              13,
              0,
              null,
              null,
              1,
              "div",
              [["class", "content"]],
              null,
              null,
              null,
              null,
              null,
            )),
            a.Mb(null, 0),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 2, 0, "/icons/cover/E0AB_phone_generic_contactimage.webp"),
              l(
                n,
                4,
                0,
                (null == e.call ? null : e.call.callerName) ||
                  (null == e.call ? null : e.call.phoneNumber),
              ),
              l(
                n,
                6,
                0,
                !(
                  (null != e.call && e.call.callerName) ||
                  (null != e.call && e.call.phoneNumber)
                ),
              ),
              l(n, 8, 0, "CallDuration"),
              l(
                n,
                9,
                0,
                null == e.call ? null : e.call.duration,
                e.sourceUnit,
                e.formattingRuleDuration,
              ),
              l(
                n,
                11,
                0,
                null == e.call ? null : e.call.callStatus,
                e.callStateEnum,
              ),
              l(
                n,
                12,
                0,
                null == e.call ? null : e.call.callStatus,
                null == e.call ? null : e.call.callStatus,
                1,
              ));
          },
          function (l, n) {
            (l(n, 1, 0, a.Nb(n, 2).iconComponentHidden),
              l(n, 7, 0, a.Nb(n, 9).isInvisible),
              l(
                n,
                10,
                0,
                a.Nb(n, 12).backgroundColor,
                a.Nb(n, 12).fixedNumberOfLines,
                a.Nb(n, 12).mayContainLatinCharsForArabic,
                a.Nb(n, 12).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      var Be = e("88uq");
      class $e {
        constructor(l, n, e) {
          ((this.asiService = l),
            (this.phoneRoutingService = e),
            (this.listCursorSizeEnum = p.pb),
            (this.iconCategory = p.Z.List),
            (this.selectedIndex = 0),
            (this.subscriptions = new Hn.a()),
            (this.logger = n.getLogger("phone.AsiCurrentCallComponent")),
            this.initSubscriptions());
        }
        ngOnInit() {
          ((this.currentCalls$ = this.asiService.currentAsiCalls$),
            (this.deviceName$ = this.asiService.deviceName$));
        }
        ngOnDestroy() {
          this.subscriptions.unsubscribe();
        }
        hangUp(l) {
          this.asiService.declineOrEndAsiCall(l.id);
        }
        initSubscriptions() {
          this.subscriptions.add(
            this.asiService.asiCallExisting$
              .pipe(
                Object(Be.distinctUntilChanged)(),
                Object(Be.filter)((l) => !l),
                Object(Be.tap)(() => this.logger.info("ASI Phone Call ended")),
              )
              .subscribe(() => this.phoneRoutingService.goTo(f.a.NotConnected)),
          );
        }
      }
      var ze = a.wb({
        encapsulation: 0,
        styles: [
          [
            '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{height:100%;display:flex;flex-direction:column}.content[_ngcontent-%COMP%]{overflow:hidden;height:354px;margin-top:11px}.list[_ngcontent-%COMP%]{width:100%;height:100%}.button[_ngcontent-%COMP%]{display:flex;align-items:center;height:52px;margin:3px 0 4px}.button--padding[_ngcontent-%COMP%]{padding:0 15px}.button__text[_ngcontent-%COMP%]{margin:0 15px;font-size:38px}.state-disabled[_ngcontent-%COMP%]{filter:grayscale(100%) brightness(.4)}',
          ],
        ],
        data: {},
      });
      function Ke(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              16,
              "asi-current-call-tile",
              [["id", ""]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (l, n, e) {
                var a = !0;
                return (
                  "mib3Tap" === n &&
                    (a = !1 !== l.component.hangUp(l.context.$implicit) && a),
                  a
                );
              },
              Re,
              Ie,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 147456, null, 0, j.a, [a.l, a.z], null, null),
            a.xb(
              3,
              147456,
              null,
              0,
              G.a,
              [j.a, [2, W.a], [2, N.a], b.a],
              null,
              null,
            ),
            a.xb(
              4,
              212992,
              null,
              0,
              J.a,
              [
                b.a,
                X.b,
                G.a,
                [2, W.a],
                [2, N.a],
                [2, V.a],
                [2, Q.a],
                [2, r.a],
                a.z,
                q.a,
                a.l,
                [2, ll.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.Sb(131584, null, nl.a, nl.a, [[3, nl.a]]),
            a.xb(
              6,
              4407296,
              null,
              0,
              el.a,
              [
                a.l,
                al.a,
                a.h,
                nl.a,
                [2, tl.a],
                [2, W.b],
                [2, W.a],
                [2, il.a],
                [2, ol.a],
              ],
              null,
              null,
            ),
            a.xb(
              7,
              147456,
              null,
              0,
              rl.a,
              [
                [2, J.a],
                [2, V.a],
                [2, cl.a],
                [2, el.a],
                [2, sl.b],
                a.l,
                bl.a,
                dl.b,
              ],
              null,
              null,
            ),
            a.xb(
              8,
              147456,
              null,
              0,
              hl.a,
              [[2, el.a], [2, J.a], [2, X.b], fl.a],
              null,
              null,
            ),
            a.xb(9, 49152, null, 0, Ee, [], { call: [0, "call"] }, null),
            (l()(),
            a.yb(
              10,
              0,
              null,
              0,
              6,
              "div",
              [
                ["class", "button"],
                ["id", "HangUpSpiCallButton"],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            a.xb(
              11,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (l()(),
            a.yb(
              12,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["fileName", "E04E_phone_no_call.webp"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              gn.b,
              gn.a,
            )),
            a.xb(
              13,
              4243456,
              null,
              0,
              mn.b,
              [b.a, a.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (l()(),
            a.yb(
              14,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "button__text"],
                ["id", "spiHangUpCall"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              L.b,
              L.a,
            )),
            a.xb(
              15,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              16,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, ""),
              l(n, 4, 0),
              l(n, 6, 0),
              l(n, 9, 0, n.context.$implicit),
              l(n, 11, 0, "HangUpSpiCallButton"),
              l(n, 13, 0, "E04E_phone_no_call.webp", e.iconCategory),
              l(n, 15, 0, "spiHangUpCall"),
              l(n, 16, 0, "Auflegen", "spiHangUpCall", 1));
          },
          function (l, n) {
            (l(n, 0, 0, a.Nb(n, 6).markerClassEnabled),
              l(n, 12, 0, a.Nb(n, 13).iconComponentHidden),
              l(
                n,
                14,
                0,
                a.Nb(n, 16).backgroundColor,
                a.Nb(n, 16).fixedNumberOfLines,
                a.Nb(n, 16).mayContainLatinCharsForArabic,
                a.Nb(n, 16).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function Ye(l) {
        return a.ac(
          2,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              16,
              "au3-fpk-screen",
              [["id", "Screen:KOMBI_PHONE_SPI_CALL_*"]],
              null,
              null,
              null,
              v.b,
              v.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 114688, null, 0, _.a, [], null, null),
            a.Sb(256, null, P.a, _.b, []),
            (l()(),
            a.yb(
              4,
              0,
              null,
              0,
              3,
              "au3-fpk-title-line",
              [
                ["id", ""],
                ["secondaryDeveloperText", "Anruf"],
              ],
              [[2, "priority-shrink", null]],
              null,
              null,
              O.b,
              O.a,
            )),
            a.xb(
              5,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              6,
              49152,
              null,
              0,
              S.a,
              [],
              {
                primaryNonI18nText: [0, "primaryNonI18nText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            a.Pb(131072, Ll.b, [a.h]),
            (l()(),
            a.yb(
              8,
              0,
              null,
              0,
              8,
              "div",
              [["class", "content"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            a.yb(
              9,
              0,
              null,
              null,
              7,
              "au3-list",
              [
                ["class", "list"],
                ["id", ""],
              ],
              [[2, "list--with-line-numbers", null]],
              [[null, "selectedIndexChange"]],
              function (l, n, e) {
                var a = !0;
                return (
                  "selectedIndexChange" === n &&
                    (a = !1 !== (l.component.selectedIndex = e) && a),
                  a
                );
              },
              xl.b,
              xl.a,
            )),
            a.Sb(6144, null, Cl.a, null, [yl.a]),
            a.xb(
              11,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(12, 16384, null, 0, vl.a, [a.l], null, null),
            a.xb(
              13,
              12828672,
              null,
              1,
              yl.a,
              [
                [2, Nl.a],
                [2, P.a],
                [8, null],
                [2, N.a],
                [2, _l.a],
                [2, Pl.a],
                [2, X.b],
                gl.i,
                a.z,
                a.h,
                b.a,
                Ol.a,
                Sl.a,
                [2, al.a],
                W.a,
                [2, gl.a],
              ],
              {
                showCursor: [0, "showCursor"],
                cursorSize: [1, "cursorSize"],
                showSeparators: [2, "showSeparators"],
                defaultTemplate: [3, "defaultTemplate"],
                items: [4, "items"],
              },
              { selectedIndexChange: "selectedIndexChange" },
            ),
            a.Tb(603979776, 1, { template: 0 }),
            a.Pb(131072, Ll.b, [a.h]),
            (l()(),
            a.hb(
              0,
              [
                [1, 2],
                ["callTemplate", 2],
              ],
              0,
              0,
              null,
              Ke,
            )),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "Screen:KOMBI_PHONE_SPI_CALL_*"),
              l(n, 2, 0),
              l(n, 5, 0, ""),
              l(
                n,
                6,
                0,
                a.Yb(n, 6, 0, a.Nb(n, 7).transform(e.deviceName$)),
                "Anruf",
              ),
              l(n, 11, 0, ""),
              l(
                n,
                13,
                0,
                !0,
                e.listCursorSizeEnum.PHONE_CALLER_IMAGE,
                !1,
                a.Nb(n, 16),
                a.Yb(n, 13, 4, a.Nb(n, 15).transform(e.currentCalls$)),
              ));
          },
          function (l, n) {
            (l(n, 4, 0, a.Nb(n, 6).isPriorityShrink),
              l(n, 9, 0, a.Nb(n, 13).showLineNumbers));
          },
        );
      }
      function Ue(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              1,
              "asi-current-call",
              [],
              null,
              null,
              null,
              Ye,
              ze,
            )),
            a.xb(1, 245760, null, 0, $e, [Zl.a, b.a, f.b], null, null),
          ],
          function (l, n) {
            l(n, 1, 0);
          },
          null,
        );
      }
      var je = a.ub("asi-current-call", $e, Ue, {}, {}, []);
      class Ge {
        constructor(l, n, e) {
          ((this.phoneService = l),
            (this.fpkPhoneRoutingService = n),
            (this.destroy$$ = new ne.a(1)),
            (this.logger = e.getLogger(
              "phone.fpk.FpkPhoneMainPrivacyComponent",
            )),
            this.subscribeToConfidentialState());
        }
        ngOnDestroy() {
          (this.destroy$$.next(), this.destroy$$.complete());
        }
        subscribeToConfidentialState() {
          this.phoneService.focusPhoneConfidentialModeActive$
            .pipe(Object(ee.a)(this.destroy$$))
            .subscribe((l) => {
              !1 === l &&
                (this.logger.info(
                  "subscribeToConfidentialState: focusPhone lost or confidential mode deactivated -> reenter context",
                ),
                this.fpkPhoneRoutingService.enterContext());
            });
        }
      }
      var We = a.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{height:100%;display:block}.content-container[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;height:354px;margin-top:11px;min-height:0}.privacy-mode-label[_ngcontent-%COMP%]{font-size:40px;width:100%;text-align:center}",
          ],
        ],
        data: {},
      });
      function Ve(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-fpk-screen",
              [["id", "Screen: KOMBI_PHONE_PRIVACY_MODE_ACTIVE*"]],
              null,
              null,
              null,
              v.b,
              v.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 114688, null, 0, _.a, [], null, null),
            a.Sb(256, null, P.a, _.b, []),
            (l()(),
            a.yb(
              4,
              0,
              null,
              0,
              3,
              "au3-fpk-title-line",
              [["id", ""]],
              [[2, "priority-shrink", null]],
              null,
              null,
              O.b,
              O.a,
            )),
            a.xb(
              5,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              6,
              49152,
              null,
              0,
              S.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryNonI18nText: [1, "primaryNonI18nText"],
                secondaryDeveloperText: [2, "secondaryDeveloperText"],
              },
              null,
            ),
            a.Pb(131072, Ll.b, [a.h]),
            (l()(),
            a.yb(
              8,
              0,
              null,
              0,
              3,
              "div",
              [["class", "content-container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            a.yb(
              9,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "privacy-mode-label"],
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
              L.b,
              L.a,
            )),
            a.xb(
              10,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              11,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "Screen: KOMBI_PHONE_PRIVACY_MODE_ACTIVE*"),
              l(n, 2, 0),
              l(n, 5, 0, ""),
              l(
                n,
                6,
                0,
                "Phone",
                a.Yb(n, 6, 1, a.Nb(n, 7).transform(e.phoneService.deviceName$)),
                "HINWEIS",
              ),
              l(n, 10, 0, "PrivacyModeActive"),
              l(n, 11, 0, "Privacy mode active", "PrivacyModeActive", 5));
          },
          function (l, n) {
            (l(n, 4, 0, a.Nb(n, 6).isPriorityShrink),
              l(
                n,
                9,
                0,
                a.Nb(n, 11).backgroundColor,
                a.Nb(n, 11).fixedNumberOfLines,
                a.Nb(n, 11).mayContainLatinCharsForArabic,
                a.Nb(n, 11).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function Ze(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-phone-main-privacy",
              [],
              null,
              null,
              null,
              Ve,
              We,
            )),
            a.xb(1, 180224, null, 0, Ge, [R.c, f.b, b.a], null, null),
          ],
          null,
          null,
        );
      }
      var Je = a.ub("au3-fpk-phone-main-privacy", Ge, Ze, {}, {}, []),
        Xe = e("2Uk/"),
        Qe = e("4UlK"),
        qe = (function (l) {
          return (
            (l.oprAuto = "Audi Schadenservice aktiv."),
            (l.oprUser = "Online Pannenruf aktiv."),
            (l.eCall = "Notruf aktiv."),
            l
          );
        })({});
      class la {
        constructor(l) {
          ((this.callTypeActiveEnum = qe),
            (this.callTypeActive$ = l.eCallOPRType$.pipe(
              Object(F.a)(p.wd),
              Object(El.a)((l) => {
                switch (l) {
                  case Qe.a.oprAuto:
                    return qe.oprAuto;
                  case Qe.a.oprUser:
                    return qe.oprUser;
                  case Qe.a.eCall:
                    return qe.eCall;
                }
              }),
            )));
        }
      }
      var na = a.wb({
        encapsulation: 0,
        styles: [
          [
            '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{display:block;height:100%}.content[_ngcontent-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);flex:1;display:flex;flex-direction:column;justify-content:center;font-size:40px;text-align:center;min-height:0}.label[_ngcontent-%COMP%]{width:100%}',
          ],
        ],
        data: {},
      });
      function ea(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "label"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              L.b,
              L.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              A.a,
              [[6, N.a], k.a, a.h, a.l, a.D, [2, w.a], [2, D.a], [2, E.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (l, n) {
            (l(n, 1, 0, n.context.mib3Let, n.component.callTypeActiveEnum),
              l(n, 2, 0, n.context.mib3Let, n.context.mib3Let));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 2).backgroundColor,
              a.Nb(n, 2).fixedNumberOfLines,
              a.Nb(n, 2).mayContainLatinCharsForArabic,
              a.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function aa(l) {
        return a.ac(
          2,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-fpk-screen",
              [["id", "KOMBI_ECALL_OPR"]],
              null,
              null,
              null,
              v.b,
              v.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 114688, null, 0, _.a, [], null, null),
            a.Sb(256, null, P.a, _.b, []),
            (l()(),
            a.yb(
              4,
              0,
              null,
              0,
              2,
              "au3-fpk-title-line",
              [
                ["id", ""],
                ["primaryDeveloperText", "Hinweis"],
              ],
              [[2, "priority-shrink", null]],
              null,
              null,
              O.b,
              O.a,
            )),
            a.xb(
              5,
              212992,
              null,
              0,
              N.a,
              [a.l, a.D, s.a, b.a, [3, N.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              6,
              49152,
              null,
              0,
              S.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryHasText: [1, "secondaryHasText"],
              },
              null,
            ),
            (l()(),
            a.yb(
              7,
              0,
              null,
              0,
              3,
              "div",
              [["class", "content"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(), a.hb(16777216, null, null, 2, null, ea)),
            a.xb(
              9,
              16384,
              null,
              0,
              wl.a,
              [a.L, a.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            a.Pb(131072, Ll.b, [a.h]),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "KOMBI_ECALL_OPR"),
              l(n, 2, 0),
              l(n, 5, 0, ""),
              l(n, 6, 0, "Hinweis", !1),
              l(
                n,
                9,
                0,
                a.Yb(n, 9, 0, a.Nb(n, 10).transform(e.callTypeActive$)),
              ));
          },
          function (l, n) {
            l(n, 4, 0, a.Nb(n, 6).isPriorityShrink);
          },
        );
      }
      function ta(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
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
              aa,
              na,
            )),
            a.xb(1, 49152, null, 0, la, [Xe.a], null, null),
          ],
          null,
          null,
        );
      }
      var ia = a.ub("au3-ecall-opr", la, ta, {}, {}, []),
        oa = e("aDqW"),
        ua = e("/W5r"),
        ra = e("+Qv1"),
        ca = e("XtoR"),
        sa = e("jTHl"),
        ba = e("zL3T"),
        da = e("zm/l"),
        ha = e("XOcJ"),
        fa = e("doQC"),
        pa = e("nRk7"),
        ga = e("K3fK"),
        ma = e("+epw"),
        xa = e("zMPs"),
        Ca = e("6Yk8"),
        ya = e("u6+O"),
        va = e("CIQC"),
        Na = e("REmV"),
        _a = e("Y3N+"),
        Pa = e("MJxn"),
        Oa = e("eIOF"),
        Sa = e("t+4g"),
        Ta = e("myjn"),
        Ma = e("fOZ7");
      class La {}
      var Aa = e("TBks"),
        ka = e("yUFt"),
        wa = e("QDrj"),
        Da = e("YCQm"),
        Ea = e("6gUO"),
        Ia = a.vb(t, [], function (l) {
          return a.Kb([
            a.Lb(512, a.j, a.X, [
              [8, [i.a, y, Y, Ul, un, pn, le, be, Me, je, Je, ia]],
              [3, a.j],
              a.x,
            ]),
            a.Lb(4608, Ll.m, Ll.l, [a.u]),
            a.Lb(4608, oa.h, oa.g, []),
            a.Lb(4608, oa.d, oa.f, []),
            a.Lb(4608, oa.j, oa.e, []),
            a.Lb(4608, oa.c, oa.b, []),
            a.Lb(4608, oa.k, oa.k, [
              oa.l,
              oa.h,
              oa.d,
              oa.j,
              oa.c,
              oa.m,
              oa.o,
              oa.n,
              oa.a,
            ]),
            a.Lb(4608, ua.b, ua.b, [ra.e, [2, ua.a]]),
            a.Lb(4608, ca.b, ca.b, [ra.e, [2, ca.a]]),
            a.Lb(4608, sa.b, sa.b, [ra.e, [2, sa.a]]),
            a.Lb(4608, ba.b, ba.b, [ra.e, [2, ba.a]]),
            a.Lb(4608, da.a, da.a, [R.c, b.a]),
            a.Lb(4608, ha.a, ha.a, [R.c, b.a]),
            a.Lb(4608, fa.a, fa.a, [R.c, b.a]),
            a.Lb(4608, pa.a, pa.a, [R.c, b.a]),
            a.Lb(4608, ga.a, ga.a, [Xe.a, b.a]),
            a.Lb(1073742336, Ll.c, Ll.c, []),
            a.Lb(1073742336, oa.i, oa.i, []),
            a.Lb(1073742336, ma.a, ma.a, []),
            a.Lb(1073742336, xa.a, xa.a, []),
            a.Lb(1073742336, Ca.a, Ca.a, []),
            a.Lb(1073742336, ya.a, ya.a, []),
            a.Lb(1073742336, va.a, va.a, []),
            a.Lb(1073742336, Na.a, Na.a, []),
            a.Lb(1073742336, _a.a, _a.a, []),
            a.Lb(1073742336, Pa.a, Pa.a, []),
            a.Lb(1073742336, Oa.a, Oa.a, []),
            a.Lb(1073742336, Sa.a, Sa.a, []),
            a.Lb(1073742336, Ta.a, Ta.a, []),
            a.Lb(1073742336, Ma.a, Ma.a, []),
            a.Lb(1073742336, d.n, d.n, [
              [2, d.s],
              [2, d.m],
            ]),
            a.Lb(1073742336, La, La, []),
            a.Lb(1073742336, Aa.a, Aa.a, []),
            a.Lb(1073742336, ka.a, ka.a, []),
            a.Lb(1073742336, wa.a, wa.a, []),
            a.Lb(1073742336, Da.a, Da.a, []),
            a.Lb(1073742336, Ea.a, Ea.a, []),
            a.Lb(1073742336, t, t, []),
            a.Lb(256, oa.o, void 0, []),
            a.Lb(256, oa.m, void 0, []),
            a.Lb(256, oa.n, void 0, []),
            a.Lb(256, oa.a, void 0, []),
            a.Lb(
              1024,
              d.k,
              function () {
                return [
                  [
                    {
                      path: "",
                      component: g,
                      children: [
                        {
                          path: "",
                          canActivate: [ga.a],
                          children: [
                            { path: "init", component: B },
                            {
                              path: "menu",
                              component: Hl,
                              canActivate: [pa.a, ha.a],
                            },
                            {
                              path: "not-connected",
                              component: Jl,
                              canActivate: [pa.a],
                            },
                            {
                              path: "callstack",
                              component: bn,
                              canActivate: [pa.a, ha.a],
                            },
                            {
                              path: "active-call",
                              component: Rn,
                              canActivate: [pa.a, da.a],
                            },
                            {
                              path: "toggle-phone",
                              component: ie,
                              canActivate: [pa.a, ha.a],
                            },
                            {
                              path: "favorites",
                              component: Ce,
                              canActivate: [pa.a, ha.a],
                            },
                            { path: "asi-active-call", component: $e },
                            { path: "main-privacy", component: Ge },
                          ],
                        },
                        { path: "ecall-opr", component: la },
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
    nQV3: function (l, n, e) {
      "use strict";
      (e.d(n, "a", function () {
        return u;
      }),
        e.d(n, "b", function () {
          return r;
        }));
      var a = e("kZht"),
        t = e("fu7d"),
        i = e("bou3"),
        o = e("yNay"),
        u =
          (e("3+OJ"),
          a.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;width:46px;height:50px}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr;padding-left:20px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:ltr;padding-right:20px}.checkbox[_ngcontent-%COMP%]{width:100%;height:100%}.checkbox__frame[_ngcontent-%COMP%]{display:block;position:absolute;width:24px;height:24px;transform:translateY(50%);border:1px solid #fff}.checkbox__checkmark[_ngcontent-%COMP%]{display:none;width:28px;height:12px;border:solid #fff;border-width:0 0 2px 2px;transform:translate3d(-1%,68%,0) rotate(-55deg) skewX(-20deg);box-shadow:inset 0 -5px #000,5px 4px #000}.checkbox__checkmark--checked[_ngcontent-%COMP%]{display:block}",
              ],
            ],
            data: {},
          }));
      function r(l) {
        return a.ac(
          2,
          [
            (l()(),
            a.yb(
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, i.a, o.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (l()(),
            a.yb(
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
            a.yb(
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
          function (l, n) {
            l(n, 1, 0, n.component.id);
          },
          function (l, n) {
            l(n, 3, 0, n.component.checked);
          },
        );
      }
    },
    zcBZ: function (l, n, e) {
      "use strict";
      var a = e("7wm6");
      (e.d(n, "a", function () {
        return a.a;
      }),
        e.d(n, "b", function () {
          return a.b;
        }),
        e.d(n, "c", function () {
          return a.c;
        }),
        e.d(n, "d", function () {
          return a.e;
        }),
        e.d(n, "e", function () {
          return a.f;
        }),
        e.d(n, "f", function () {
          return a.g;
        }),
        e("LYHs"),
        e("RPSR"),
        e("BqeB"),
        e("rrFM"));
    },
  },
]);
