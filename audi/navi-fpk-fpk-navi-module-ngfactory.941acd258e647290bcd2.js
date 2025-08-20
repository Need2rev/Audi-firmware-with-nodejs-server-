(window.webpackJsonp = window.webpackJsonp || []).push([
  [90, 71, 73, 74],
  {
    "0Z+c": function (n, e, l) {
      "use strict";
      l.d(e, "a", function () {
        return a;
      });
      var t = l("1+5f"),
        i = l("Yi6/");
      let a = (() => {
        class n {
          constructor() {
            this.iconCategory = i.Z.List;
          }
          set displayableArrow(e) {
            this.arrowFilename = n.getArrowFileName(e);
          }
          static getArrowFileName(e) {
            return e
              ? n.getDistanceTypePrefixForFileName(e.distanceType) +
                  n.getDirectionSuffixForFileName(e.rotationAngle) +
                  ".webp"
              : "";
          }
        }
        return (
          (n.getDirectionSuffixForFileName = function (n) {
            return isNaN(n)
              ? "0x00"
              : "0x0" +
                  ((2 * Math.round(n / 45)) % 16).toString(16).toUpperCase();
          }),
          (n.getDistanceTypePrefixForFileName = function (n) {
            return n === t.m.ROAD
              ? "E930_navigation_arrow_rrd_"
              : "E931_navigation_arrow_luftlinie_";
          }),
          n
        );
      })();
    },
    "2ozK": function (n, e, l) {
      "use strict";
      l.d(e, "a", function () {
        return o;
      });
      var t = l("1+5f"),
        i = l("Yi6/"),
        a = l("kGpN");
      class o {
        constructor() {
          ((this.distanceFormattingRule = a.a.DistanceToDestination),
            (this.sourceUnit = i.vc.METERS));
        }
        isDirectionAndDistanceValid() {
          const n = this.getDistanceValue();
          return null != n && !isNaN(n);
        }
        getDisplayableArrow() {
          return null == this.distance || null == this.distance.direction
            ? null
            : {
                distanceType:
                  this.distance.withRoadDistance &&
                  Object(i.wd)(this.distance.roaddistance)
                    ? t.m.ROAD
                    : t.m.AIR,
                rotationAngle: this.distance.direction,
              };
        }
        getDistanceValue() {
          return this.distance &&
            this.distance.withRoadDistance &&
            null != this.distance.roaddistance
            ? this.distance.roaddistance
            : this.distance && null != this.distance.airdistance
              ? this.distance.airdistance
              : NaN;
        }
      }
    },
    TJMC: function (n, e, l) {
      "use strict";
      (l.d(e, "a", function () {
        return i;
      }),
        l.d(e, "b", function () {
          return a;
        }));
      var t = l("kZht"),
        i =
          (l("JIjU"),
          l("OtM5"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;width:50px;height:50px}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.radio-button__label[_ngcontent-%COMP%]{display:block;width:28px;height:28px;border:2px solid #fff;border-radius:50%}.radio-button__button[_ngcontent-%COMP%]{display:none}.radio-button__button[_ngcontent-%COMP%]:checked + .radio-button__label[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.radio-button__button[_ngcontent-%COMP%]:checked + .radio-button__label[_ngcontent-%COMP%]:before{content:"";display:block;width:10px;height:10px;border-radius:50%;background-color:#fff}',
              ],
            ],
            data: {},
          }));
      function a(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              0,
              "input",
              [
                ["class", "radio-button__button"],
                ["type", "radio"],
              ],
              [
                [8, "id", 0],
                [8, "name", 0],
                [8, "disabled", 0],
                [8, "checked", 0],
              ],
              [[null, "change"]],
              function (n, e, l) {
                var t = !0,
                  i = n.component;
                return (
                  "change" === e &&
                    (t = !1 !== i.selectionChangeRequested.emit(i.value) && t),
                  t
                );
              },
              null,
              null,
            )),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              0,
              "label",
              [["class", "radio-button__label"]],
              [[8, "htmlFor", 0]],
              null,
              null,
              null,
              null,
            )),
          ],
          null,
          function (n, e) {
            var l = e.component;
            (n(e, 0, 0, l.id, l.group, l.disabled, l.checked),
              n(e, 1, 0, l.id));
          },
        );
      }
    },
    ZRMe: function (n, e, l) {
      "use strict";
      (l.d(e, "a", function () {
        return s;
      }),
        l.d(e, "b", function () {
          return u;
        }));
      var t = l("kZht"),
        i = l("HVUF"),
        a = l("B3Zb"),
        o = l("yNay"),
        s =
          (l("0Z+c"),
          t.wb({
            encapsulation: 0,
            styles: [
              ["[_nghost-%COMP%]{display:block;width:100%;height:100%}"],
            ],
            data: {},
          }));
      function u(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "arrow"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              i.b,
              i.a,
            )),
            t.xb(
              1,
              4243456,
              null,
              0,
              a.b,
              [o.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            n(e, 1, 0, l.arrowFilename, l.iconCategory);
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 1).iconComponentHidden);
          },
        );
      }
    },
    bKdS: function (n, e, l) {
      "use strict";
      (l.r(e),
        l.d(e, "FpkNaviModuleNgFactory", function () {
          return di;
        }));
      var t = l("kZht");
      class i {}
      var a = l("C9Ky"),
        o = l("89Z2"),
        s = l("kqft"),
        u = l("+sw+"),
        r = l("FfND"),
        c = l("bou3"),
        d = l("yNay"),
        b = l("1VvW"),
        p = l("CDcS"),
        h = l("pR0N"),
        m = l("Yi6/");
      class g {
        constructor(n) {
          ((this.routingService = n), (this.context = m.s.Navi));
        }
        menuKeyDown() {
          this.routingService && this.routingService.toggleCombiMenu();
        }
        hkBackDown() {
          this.routingService && this.routingService.goBack();
        }
      }
      var f = t.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{position:absolute;display:block;height:100%;width:100%;color:#fff}",
          ],
        ],
        data: {},
      });
      function x(n) {
        return t.ac(
          0,
          [
            (n()(),
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
              function (n, e, l) {
                var i = !0;
                return (
                  "component:@screenChange.start" === e &&
                    (i = !1 !== t.Nb(n, 1).animationStarted(l) && i),
                  "component:@screenChange.done" === e &&
                    (i = !1 !== t.Nb(n, 1).animationDone(l) && i),
                  i
                );
              },
              o.b,
              o.a,
            )),
            t.xb(
              1,
              245760,
              null,
              1,
              s.a,
              [[2, u.a], r.a, t.h, c.a, d.a],
              null,
              null,
            ),
            t.Tb(335544320, 1, { arod: 0 }),
            (n()(),
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
              b.o,
              [b.b, t.P, t.j, [8, null], t.h],
              null,
              null,
            ),
            t.xb(5, 212992, [[1, 4]], 0, p.a, [b.o, t.h, t.z, d.a], null, null),
          ],
          function (n, e) {
            (n(e, 1, 0), n(e, 4, 0), n(e, 5, 0));
          },
          function (n, e) {
            (n(e, 0, 0, t.Nb(e, 1).screenState, !0),
              n(e, 3, 0, t.Nb(e, 5).hideAdjacentSibling));
          },
        );
      }
      function v(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-navi",
              [],
              [[8, "className", 0]],
              [
                ["screen", "keydown.KeyM"],
                ["screen", "keydown.Backspace"],
              ],
              function (n, e, l) {
                var i = !0;
                return (
                  "screen:keydown.KeyM" === e &&
                    (i = !1 !== t.Nb(n, 1).menuKeyDown() && i),
                  "screen:keydown.Backspace" === e &&
                    (i = !1 !== t.Nb(n, 1).hkBackDown() && i),
                  i
                );
              },
              x,
              f,
            )),
            t.xb(1, 49152, null, 0, g, [h.b], null, null),
          ],
          null,
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 1).context);
          },
        );
      }
      var _ = t.ub("au3-fpk-navi", g, v, {}, {}, []),
        y = l("8TlW"),
        C = l("fu7d"),
        k = l("Xo58"),
        O = l("m3Ja"),
        S = l("r+e+"),
        M = l("ijxY"),
        P = l("bmFL"),
        N = l("Qrkr"),
        T = l("sH6Y"),
        A = l("Ftf+"),
        w = l("I3ve"),
        L = l("LELx"),
        D = l("o/5+"),
        I = l("0qMr"),
        E = l("An66"),
        $ = l("I/e0"),
        F = l("ndMh");
      class z {
        constructor(n) {
          ((this.naviAppstatesService = n), (this.appStateTextEnum = F.b));
        }
      }
      var R = t.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{height:100%;flex-direction:column}.message[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;font-size:40px}.message[_ngcontent-%COMP%]{flex-direction:column;flex:1;justify-content:center;min-height:0;color:#fff;text-align:center}.map-content-list__checkbox-item[_ngcontent-%COMP%]{padding:20px}",
          ],
        ],
        data: {},
      });
      function V(n) {
        return t.ac(
          0,
          [
            (n()(),
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
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              6,
              "div",
              [["class", "message"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              2,
              0,
              null,
              null,
              5,
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
              y.b,
              y.a,
            )),
            t.xb(
              3,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.Rb(4, 1),
            t.xb(
              5,
              245760,
              null,
              0,
              k.a,
              [[6, C.a], O.a, t.h, t.l, t.D, [2, S.a], [2, M.a], [2, P.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
            t.Rb(6, 1),
            t.Rb(7, 1),
          ],
          function (n, e) {
            var l = e.component,
              i = t.Yb(
                e,
                3,
                0,
                n(e, 4, 0, t.Nb(e.parent, 0), e.context.mib3Let),
              );
            n(e, 3, 0, i, l.appStateTextEnum);
            var a = t.Yb(
                e,
                5,
                0,
                n(e, 6, 0, t.Nb(e.parent, 0), e.context.mib3Let),
              ),
              o = t.Yb(
                e,
                5,
                1,
                n(e, 7, 0, t.Nb(e.parent, 0), e.context.mib3Let),
              );
            n(e, 5, 0, a, o);
          },
          function (n, e) {
            n(
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
      function j(n) {
        return t.ac(
          2,
          [
            t.Pb(0, N.a, []),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              9,
              "au3-fpk-screen",
              [["id", "Screen:NAV_FPK_INIT_ERROR"]],
              null,
              null,
              null,
              T.b,
              T.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 114688, null, 0, A.a, [], null, null),
            t.Sb(256, null, w.a, A.b, []),
            (n()(),
            t.yb(
              5,
              0,
              null,
              0,
              2,
              "au3-fpk-title-line",
              [
                ["id", ""],
                ["primaryDeveloperText", "Navi"],
                ["secondaryDeveloperText", "Hinweis"],
              ],
              [[2, "priority-shrink", null]],
              null,
              null,
              L.b,
              L.a,
            )),
            t.xb(
              6,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              7,
              49152,
              null,
              0,
              D.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (n()(), t.hb(16777216, null, 0, 2, null, V)),
            t.xb(
              9,
              16384,
              null,
              0,
              I.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, E.b, [t.h]),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 2, 0, "Screen:NAV_FPK_INIT_ERROR"),
              n(e, 3, 0),
              n(e, 6, 0, ""),
              n(e, 7, 0, "Navi", "Hinweis"),
              n(
                e,
                9,
                0,
                t.Yb(
                  e,
                  9,
                  0,
                  t.Nb(e, 10).transform(l.naviAppstatesService.state$),
                ),
              ));
          },
          function (n, e) {
            n(e, 5, 0, t.Nb(e, 7).isPriorityShrink);
          },
        );
      }
      function B(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-error",
              [],
              null,
              null,
              null,
              j,
              R,
            )),
            t.xb(1, 49152, null, 0, z, [$.a], null, null),
          ],
          null,
          null,
        );
      }
      var Z = t.ub("au3-fpk-error", z, B, {}, {}, []),
        Y = l("ZXHi"),
        U = l("IRNg"),
        H = l("xVbo"),
        K = l("YtkY");
      class G {
        constructor(n) {
          ((this.naviAppstatesService = n),
            (this.progress$ = this.naviAppstatesService.progress$.pipe(
              Object(H.a)((n) => null != n),
              Object(K.a)((n) => (0 === n ? 1 / 0 : n)),
            )));
        }
        isFinite(n) {
          return isFinite(n);
        }
      }
      var W = t.wb({
        encapsulation: 0,
        styles: [
          ["[_nghost-%COMP%]{display:flex;flex-direction:column;height:95%}"],
        ],
        data: {},
      });
      function X(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["id", "InitPercent"],
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
              y.b,
              y.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 16384, null, 0, M.a, [], null, null),
            t.xb(
              3,
              245760,
              null,
              0,
              k.a,
              [[6, C.a], O.a, t.h, t.l, t.D, [2, S.a], [2, M.a], [2, P.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            t.Rb(4, 2),
          ],
          function (n, e) {
            n(e, 1, 0, "InitPercent");
            var l = t.Yb(
              e,
              3,
              1,
              n(
                e,
                4,
                0,
                t.Nb(e.parent.parent, 0),
                e.parent.context.mib3Let,
                "1.0-0",
              ),
            );
            n(e, 3, 0, "InitPercent", l);
          },
          function (n, e) {
            n(
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
      function J(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              8,
              "au3-init-view",
              [["id", ""]],
              null,
              null,
              null,
              Y.b,
              Y.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 49152, null, 0, U.a, [], { current: [0, "current"] }, null),
            (n()(),
            t.yb(
              3,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [["id", "NaviInitializing"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              y.b,
              y.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              245760,
              null,
              0,
              k.a,
              [[6, C.a], O.a, t.h, t.l, t.D, [2, S.a], [2, M.a], [2, P.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            t.yb(6, 0, null, 0, 0, "br", [], null, null, null, null, null)),
            (n()(), t.hb(16777216, null, 0, 1, null, X)),
            t.xb(
              8,
              16384,
              null,
              0,
              E.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, ""),
              n(e, 2, 0, e.context.mib3Let),
              n(e, 4, 0, "NaviInitializing"),
              n(
                e,
                5,
                0,
                "Navi wird initialisiert. Bitte warten...",
                "NaviInitializing",
                1,
              ),
              n(e, 8, 0, l.isFinite(e.context.mib3Let)));
          },
          function (n, e) {
            n(
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
      function Q(n) {
        return t.ac(
          2,
          [
            t.Pb(0, E.u, [t.u]),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              9,
              "au3-fpk-screen",
              [["id", "Screen:NAV_FPK_INIT"]],
              null,
              null,
              null,
              T.b,
              T.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 114688, null, 0, A.a, [], null, null),
            t.Sb(256, null, w.a, A.b, []),
            (n()(),
            t.yb(
              5,
              0,
              null,
              0,
              2,
              "au3-fpk-title-line",
              [
                ["id", ""],
                ["primaryDeveloperText", "Navi"],
                ["secondaryDeveloperText", "Hinweis"],
              ],
              [[2, "priority-shrink", null]],
              null,
              null,
              L.b,
              L.a,
            )),
            t.xb(
              6,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              7,
              49152,
              null,
              0,
              D.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
                showLeftDrawerIcon: [2, "showLeftDrawerIcon"],
              },
              null,
            ),
            (n()(), t.hb(16777216, null, 0, 2, null, J)),
            t.xb(
              9,
              16384,
              null,
              0,
              I.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, E.b, [t.h]),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 2, 0, "Screen:NAV_FPK_INIT"),
              n(e, 3, 0),
              n(e, 6, 0, ""),
              n(e, 7, 0, "Navi", "Hinweis", !1),
              n(e, 9, 0, t.Yb(e, 9, 0, t.Nb(e, 10).transform(l.progress$))));
          },
          function (n, e) {
            n(e, 5, 0, t.Nb(e, 7).isPriorityShrink);
          },
        );
      }
      function q(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-initialization",
              [],
              null,
              null,
              null,
              Q,
              W,
            )),
            t.xb(1, 49152, null, 0, G, [$.a], null, null),
          ],
          null,
          null,
        );
      }
      var nn = t.ub("au3-fpk-initialization", G, q, {}, {}, []),
        en = l("HVUF"),
        ln = l("B3Zb"),
        tn = l("0sI6"),
        an = l("kuMc"),
        on = l("QQZH"),
        sn = l("bkj4");
      class un {
        constructor(n, e) {
          ((this.trafficFlowSegmentsService = n),
            (this.destroy$$ = new on.a(1)),
            (this.logger = e.getLogger("navi.FpkRouteTrafficBarComponent")));
        }
        static getFlowStatusColor(n) {
          switch (n) {
            case sn.t.STATIONARYTRAFFIC:
            case sn.t.QUEUINGTRAFFIC:
            case sn.t.NOFLOW:
              return "#FF0000";
            case sn.t.HEAVYTRAFFIC:
            case sn.t.SLOWTRAFFIC:
              return "#FFF208";
            default:
              return "#01DD01";
          }
        }
        static drawColoredRect(n, e, l, t, i, a) {
          const o = t - e,
            s = i - l;
          ((n.fillStyle = a),
            n.fillRect(e, l, o, s),
            (n.strokeStyle = "#000000"),
            (n.lineWidth = 1),
            n.strokeRect(e + 0.5, l + 0.5, o - 1, s));
        }
        ngAfterViewInit() {
          ((this.canvasContext = this.canvasRef.nativeElement.getContext("2d")),
            this.draw(void 0),
            this.trafficFlowSegmentsService.trafficFlowEvents$
              .pipe(Object(an.a)(this.destroy$$))
              .subscribe((n) => {
                this.draw(n);
              }));
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        setCCPPosition(n) {
          this.ccpRef
            ? (this.ccpRef.nativeElement.style.transform = `translateY(${n}px)`)
            : this.logger.warn(
                "draw: cannot draw CCP because DOM element is undefined",
              );
        }
        draw(n) {
          const e = this.canvasContext;
          if (!e)
            return void this.logger.warn(
              "draw: cannot draw. canvas context is undefined",
            );
          const l = e.canvas.width,
            t = e.canvas.height;
          if (
            (un.drawColoredRect(e, 0, 0, l, t - 1, "#01DD01"),
            !n || !n.segmentLength || !n.carToSegmentEndDistance)
          )
            return (
              this.logger.info("draw: no traffic events available"),
              void this.setCCPPosition(t)
            );
          const i = t / n.segmentLength,
            a = Math.round(n.carToSegmentEndDistance * i);
          (this.setCCPPosition(a),
            n.events &&
              n.events.forEach((t, a) => {
                if (t.length / n.segmentLength < 0.01)
                  return void this.logger.info(
                    `draw: skipping a traffic event ${a} because it's length is < 1%`,
                  );
                if (t.flowStatus === sn.t.UNKNOWN) return;
                const o = Math.round(
                    (t.eventToSegmentEndDistance - t.length) * i,
                  ),
                  s = Math.round(t.eventToSegmentEndDistance * i);
                un.drawColoredRect(
                  e,
                  0,
                  o,
                  l,
                  s,
                  un.getFlowStatusColor(t.flowStatus),
                );
              }),
            un.drawColoredRect(e, 0, a, l, t - 1, "#838383"));
        }
      }
      var rn = t.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{display:block;width:36px}.statusbar__segments[_ngcontent-%COMP%]{position:relative;left:12px;box-shadow:0 0 10px rgba(0,0,0,.5)}.statusbar__ccp[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;top:-16px;will-change:transform}",
          ],
        ],
        data: {},
      });
      function cn(n) {
        return t.ac(
          2,
          [
            t.Tb(402653184, 1, { canvasRef: 0 }),
            t.Tb(402653184, 2, { ccpRef: 0 }),
            (n()(),
            t.yb(
              2,
              0,
              null,
              null,
              4,
              "div",
              [["class", "statusbar"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              3,
              0,
              [
                [1, 0],
                ["canvasRef", 1],
              ],
              null,
              0,
              "canvas",
              [
                ["class", "statusbar__segments"],
                ["height", "352"],
                ["width", "12"],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              4,
              0,
              [
                [2, 0],
                ["ccpRef", 1],
              ],
              null,
              2,
              "div",
              [["class", "statusbar__ccp"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              5,
              0,
              null,
              null,
              1,
              "au3-icon",
              [],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              en.b,
              en.a,
            )),
            t.xb(
              6,
              4243456,
              null,
              0,
              ln.b,
              [d.a, t.z],
              { fileName: [0, "fileName"] },
              null,
            ),
          ],
          function (n, e) {
            n(e, 6, 0, "/decorators/W745_RouteTrafficStatusbar/ccp_icon.webp");
          },
          function (n, e) {
            n(e, 5, 0, t.Nb(e, 6).iconComponentHidden);
          },
        );
      }
      var dn = l("3EdB"),
        bn = l("eoEw"),
        pn = l("SOvQ"),
        hn = l("kGpN");
      class mn {
        constructor() {
          ((this.altitudeTextAlignment = bn.a.LEFT),
            (this.altitudeIconCategory = m.Z.StatusLine),
            (this.altitudeIcon = "E0B7_navigation_hoehenmeter.webp"),
            (this.sourceUnit = m.vc.METERS),
            (this.formattingRule = hn.a.Altitude));
        }
      }
      var gn = t.wb({
        encapsulation: 0,
        styles: [
          [
            '[_nghost-%COMP%]{display:grid;grid-template-columns:40px auto;grid-template-areas:"icon value";grid-column-gap:3px;align-items:start}.altitude__value-text[_ngcontent-%COMP%]{margin-bottom:6px;font-size:28px}',
          ],
        ],
        data: {},
      });
      function fn(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon",
              [["id", "AltitudeIcon"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              en.b,
              en.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              4243456,
              null,
              0,
              ln.b,
              [d.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (n()(),
            t.yb(
              3,
              0,
              null,
              null,
              2,
              "au3-formatted-unit-renderer",
              [
                ["class", "altitude__value-text"],
                ["id", "AltitudeUnitRenderer"],
              ],
              [[2, "invisible", null]],
              null,
              null,
              dn.b,
              dn.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              180224,
              null,
              0,
              bn.b,
              [O.a, pn.a, t.h],
              {
                horizontalAlignment: [0, "horizontalAlignment"],
                rawValue: [1, "rawValue"],
                rawValueUnit: [2, "rawValueUnit"],
                rawValueFormattingRule: [3, "rawValueFormattingRule"],
              },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, "AltitudeIcon"),
              n(e, 2, 0, l.altitudeIcon, l.altitudeIconCategory),
              n(e, 4, 0, "AltitudeUnitRenderer"),
              n(
                e,
                5,
                0,
                l.altitudeTextAlignment,
                l.altitude,
                l.sourceUnit,
                l.formattingRule,
              ));
          },
          function (n, e) {
            (n(e, 0, 0, t.Nb(e, 2).iconComponentHidden),
              n(e, 3, 0, t.Nb(e, 5).isInvisible));
          },
        );
      }
      var xn = l("1Eyf"),
        vn = l("mwYT");
      class _n {
        constructor(n) {
          ((this.autoZoomIcon =
            "/decorators/W009_Statusline_FPK/ES0B9_navigation_autozoom.webp"),
            (this.manualZoomIcon =
              "/decorators/W009_Statusline_FPK/ES0B8_navigation_zoom_manuell.webp"),
            (this.scaleMode = m.ab.Fill),
            (this.alignment = bn.a.CENTER),
            (this.zoomIcon = ""),
            (this.logger = n.getLogger("navi.FpkStatusLineZoomComponent")));
        }
        set zoomMode(n) {
          this.zoomIcon =
            n === xn.g.AUTOMANEUVERZOOM
              ? this.autoZoomIcon
              : this.manualZoomIcon;
        }
        set zoomValue(n) {
          ((this.formattedUnit = Object(vn.c)(n.level, n.unit, this.logger)),
            this.logger.debug(
              "zoom: new formattedUnit",
              () =>
                `level: ${n.level}, unit ${n.unit}, formattedValue: ${this.formattedUnit.value}, formattedUnit ${this.formattedUnit.unit}`,
            ));
        }
      }
      var yn = t.wb({
        encapsulation: 0,
        styles: [
          [
            '[_nghost-%COMP%]{display:block;position:relative}.zoom-container[_ngcontent-%COMP%]{display:grid;grid-template-rows:60px;grid-template-columns:40px 7px 119px;grid-template-areas:"zoomIcon . zoomValue";align-items:center}.zoom-container__icon[_ngcontent-%COMP%]{grid-area:zoomIcon}.zoom-container__value[_ngcontent-%COMP%]{grid-area:zoomValue}.zoom-container__value-text[_ngcontent-%COMP%]{height:1em;white-space:nowrap;display:flex;justify-content:flex-end}.zoom-container__value-scale-icon[_ngcontent-%COMP%]{height:4px;margin-top:6px;border-left:1px solid;border-right:1px solid}.zoom-container__value-scale-line[_ngcontent-%COMP%]{height:1px;position:relative;top:1px;border-bottom:2px solid}',
          ],
        ],
        data: {},
      });
      function Cn(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              9,
              "div",
              [["class", "zoom-container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "zoom-container__icon"],
                ["id", "ZoomIcon"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              en.b,
              en.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              3,
              4243456,
              null,
              0,
              ln.b,
              [d.a, t.z],
              { fileName: [0, "fileName"], scaleMode: [1, "scaleMode"] },
              null,
            ),
            (n()(),
            t.yb(
              4,
              0,
              null,
              null,
              5,
              "div",
              [["class", "zoom-container__value"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              5,
              0,
              null,
              null,
              2,
              "au3-formatted-unit-renderer",
              [
                ["class", "zoom-container__value-text"],
                ["id", "ZoomUnitRenderer"],
              ],
              [[2, "invisible", null]],
              null,
              null,
              dn.b,
              dn.a,
            )),
            t.xb(
              6,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              7,
              180224,
              null,
              0,
              bn.b,
              [O.a, pn.a, t.h],
              {
                formattedUnit: [0, "formattedUnit"],
                horizontalAlignment: [1, "horizontalAlignment"],
              },
              null,
            ),
            (n()(),
            t.yb(
              8,
              0,
              null,
              null,
              1,
              "div",
              [["class", "zoom-container__value-scale-icon"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              9,
              0,
              null,
              null,
              0,
              "div",
              [["class", "zoom-container__value-scale-line"]],
              null,
              null,
              null,
              null,
              null,
            )),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 2, 0, "ZoomIcon"),
              n(e, 3, 0, l.zoomIcon, l.scaleMode),
              n(e, 6, 0, "ZoomUnitRenderer"),
              n(e, 7, 0, l.formattedUnit, l.alignment));
          },
          function (n, e) {
            (n(e, 1, 0, t.Nb(e, 3).iconComponentHidden),
              n(e, 5, 0, t.Nb(e, 7).isInvisible));
          },
        );
      }
      class kn {
        constructor() {
          ((this.iconCategory = m.Z.StatusLine),
            (this.compassIcon = "ES0C2_navigation_kompass.webp"),
            (this._rotation = 0));
        }
        set rotation(n) {
          ((this._rotation = n),
            (this.compass.nativeElement.style.transform = `rotateZ(${this._rotation}deg)`));
        }
      }
      var On = t.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{display:block;position:relative}.fpk-compass__icon[_ngcontent-%COMP%]{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);will-change:transform}.fpk-compass__symbol[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:20px}",
          ],
        ],
        data: {},
      });
      function Sn(n) {
        return t.ac(
          2,
          [
            t.Tb(402653184, 1, { compass: 0 }),
            (n()(),
            t.yb(
              1,
              0,
              [[1, 0]],
              null,
              2,
              "au3-icon",
              [
                ["class", "fpk-compass__icon"],
                ["id", "FpkCompassIcon"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              en.b,
              en.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              3,
              4243456,
              [["compass__icon", 4]],
              0,
              ln.b,
              [d.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (n()(),
            t.yb(
              4,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "fpk-compass__symbol"],
                ["developerText", "N"],
                ["id", "FpkCompassSymbolNorth"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              y.b,
              y.a,
            )),
            t.xb(
              5,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              6,
              245760,
              null,
              0,
              k.a,
              [[6, C.a], O.a, t.h, t.l, t.D, [2, S.a], [2, M.a], [2, P.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 2, 0, "FpkCompassIcon"),
              n(e, 3, 0, l.compassIcon, l.iconCategory),
              n(e, 5, 0, "FpkCompassSymbolNorth"),
              n(e, 6, 0, "N", "FpkCompassSymbolNorth", 1));
          },
          function (n, e) {
            (n(e, 1, 0, t.Nb(e, 3).iconComponentHidden),
              n(
                e,
                4,
                0,
                t.Nb(e, 6).backgroundColor,
                t.Nb(e, 6).fixedNumberOfLines,
                t.Nb(e, 6).mayContainLatinCharsForArabic,
                t.Nb(e, 6).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      class Mn {
        constructor() {
          ((this.zoomMode = xn.g.OFF),
            (this.zoomValue = { level: 0, unit: xn.p.METERS }),
            (this.rotation = 0));
        }
      }
      var Pn = t.wb({
        encapsulation: 0,
        styles: [
          [
            '[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 160px 16px 40px;grid-template-areas:". zoom . compass";align-items:center}.status-line__zoom[_ngcontent-%COMP%]{grid-area:zoom;margin-bottom:6px;font-size:28px}.status-line__compass[_ngcontent-%COMP%]{grid-area:compass;margin-bottom:6px}',
          ],
        ],
        data: {},
      });
      function Nn(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-fpk-status-line-zoom",
              [
                ["class", "status-line__zoom"],
                ["id", "NaviStatusLineZoom"],
              ],
              null,
              null,
              null,
              Cn,
              yn,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              _n,
              [d.a],
              { zoomMode: [0, "zoomMode"], zoomValue: [1, "zoomValue"] },
              null,
            ),
            (n()(),
            t.yb(
              3,
              0,
              null,
              null,
              2,
              "au3-fpk-status-line-compass",
              [
                ["class", "status-line__compass"],
                ["id", "NaviStatusLineCompass"],
              ],
              null,
              null,
              null,
              Sn,
              On,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              kn,
              [],
              { rotation: [0, "rotation"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, "NaviStatusLineZoom"),
              n(e, 2, 0, l.zoomMode, l.zoomValue),
              n(e, 4, 0, "NaviStatusLineCompass"),
              n(e, 5, 0, l.rotation));
          },
          null,
        );
      }
      class Tn {
        constructor() {
          ((this.sourceUnit = m.vc.METERS),
            (this.formattingRule = hn.a.Altitude),
            (this.altitudeVisible = !0),
            (this.hovLane = !1),
            (this.zoomContainerVisible = !0),
            (this.zoomMode = xn.g.OFF),
            (this.zoomValue = { level: 0, unit: xn.p.METERS }),
            (this.rotation = 0));
        }
        getHovSymbol() {
          return "\u25ca";
        }
      }
      var An = t.wb({
        encapsulation: 0,
        styles: [
          [
            '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;display:block}.fpk-navi-status-line--classic-big[_nghost-%COMP%]   .status-line[_ngcontent-%COMP%]{grid-template-columns:247px 448px 246px}.fpk-navi-status-line--classic-big[_nghost-%COMP%]   .status-line__altitude-container[_ngcontent-%COMP%], .fpk-navi-status-line--classic-big[_nghost-%COMP%]   .status-line__zoom-container[_ngcontent-%COMP%]{visibility:visible}.fpk-navi-status-line--classic-small[_nghost-%COMP%]   .status-line[_ngcontent-%COMP%]{grid-template-columns:137px 668px 136px}.fpk-navi-status-line--dynamic-big[_nghost-%COMP%]   .status-line[_ngcontent-%COMP%], .fpk-navi-status-line--dynamic-small[_nghost-%COMP%]   .status-line[_ngcontent-%COMP%], .fpk-navi-status-line--stack-big[_nghost-%COMP%]   .status-line[_ngcontent-%COMP%], .fpk-navi-status-line--stack-small[_nghost-%COMP%]   .status-line[_ngcontent-%COMP%]{grid-template-columns:247px 448px 246px}.status-line[_ngcontent-%COMP%]{position:relative;display:grid;width:941px;overflow:hidden;grid-template-rows:60px;grid-template-areas:"alt-container road zoom-container";align-items:center}.status-line__road[_ngcontent-%COMP%]{grid-area:road;font-size:35px;display:flex;justify-content:center}.hov-symbol[_ngcontent-%COMP%]{margin:0 10px}.status-line__altitude-container[_ngcontent-%COMP%]{grid-area:alt-container;visibility:hidden}.status-line__zoom-container[_ngcontent-%COMP%]{grid-area:zoom-container;visibility:hidden}',
          ],
        ],
        data: {},
      });
      function wn(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-fpk-altitude-container",
              [
                ["class", "status-line__altitude-container"],
                ["id", "AltitudeContainer"],
              ],
              null,
              null,
              null,
              fn,
              gn,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              mn,
              [],
              { altitude: [0, "altitude"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, "AltitudeContainer"), n(e, 2, 0, l.altitude));
          },
          null,
        );
      }
      function Ln(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "hov-symbol"],
                ["id", "HovSymbol"],
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
              y.b,
              y.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 16384, null, 0, M.a, [], null, null),
            t.xb(
              3,
              245760,
              null,
              0,
              k.a,
              [[6, C.a], O.a, t.h, t.l, t.D, [2, S.a], [2, M.a], [2, P.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, "HovSymbol"),
              n(e, 3, 0, "HovSymbol", l.getHovSymbol()));
          },
          function (n, e) {
            n(
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
      function Dn(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-fpk-zoom-container",
              [
                ["class", "status-line__zoom-container"],
                ["id", "ZoomContainer"],
              ],
              null,
              null,
              null,
              Nn,
              Pn,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              Mn,
              [],
              {
                zoomMode: [0, "zoomMode"],
                zoomValue: [1, "zoomValue"],
                rotation: [2, "rotation"],
              },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, "ZoomContainer"),
              n(e, 2, 0, l.zoomMode, l.zoomValue, l.rotation));
          },
          null,
        );
      }
      function In(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              "div",
              [["class", "status-line"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), t.hb(16777216, null, null, 1, null, wn)),
            t.xb(
              2,
              16384,
              null,
              0,
              E.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            t.yb(
              3,
              0,
              null,
              null,
              5,
              "div",
              [["class", "status-line__road"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), t.hb(16777216, null, null, 1, null, Ln)),
            t.xb(
              5,
              16384,
              null,
              0,
              E.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            t.yb(
              6,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "CurrentStreet"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              y.b,
              y.a,
            )),
            t.xb(
              7,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              8,
              245760,
              null,
              0,
              k.a,
              [[6, C.a], O.a, t.h, t.l, t.D, [2, S.a], [2, M.a], [2, P.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Dn)),
            t.xb(
              10,
              16384,
              null,
              0,
              E.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 2, 0, l.altitudeVisible),
              n(e, 5, 0, l.hovLane),
              n(e, 7, 0, "CurrentStreet"),
              n(e, 8, 0, "Offroad", "CurrentStreet", 1, l.currentStreet),
              n(e, 10, 0, l.zoomContainerVisible));
          },
          function (n, e) {
            n(
              e,
              6,
              0,
              t.Nb(e, 8).backgroundColor,
              t.Nb(e, 8).fixedNumberOfLines,
              t.Nb(e, 8).mayContainLatinCharsForArabic,
              t.Nb(e, 8).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      var En = l("D57K"),
        $n = l("ZTXN"),
        Fn = l("C05f"),
        zn = l("HM3f"),
        Rn = l("Ohay"),
        Vn = l("jIqt"),
        jn = l("gb1R"),
        Bn = l("/SfN"),
        Zn = l("nbmZ");
      const Yn = { zoomList: [], zoomLevel: -1 },
        Un = {
          displayName: m.G.CLUSTER,
          displayableName: m.J.CLUSTER_MAP,
          layerName: "Layer_Navigation_Map_Base",
          source: { x: 0, y: 0, w: 1920, h: 600 },
          target: { x: 0, y: 0, w: 1920, h: 600 },
        },
        Hn = {
          displayName: m.G.CLUSTER_SUBFRAME,
          displayableName: m.J.BROWSER_CLUSTER,
          layerName: "Layer_Navi_Statusline",
          source: { x: 0, y: 722, w: 941, h: 60 },
          target: { x: 0, y: 600, w: 941, h: 60 },
          postProcessing: new m.Sb(
            m.M.Alpha,
            { x: 0, y: 600, w: 941, h: 60 },
            !1,
            [0],
          ),
        },
        Kn = { coordX: 136, coordY: 210, diffX: 1650, diffY: 274 },
        Gn = { coordX: 700, coordY: 210, diffX: 394, diffY: 274 },
        Wn = { coordX: 540, coordY: 210, diffX: 840, diffY: 310 },
        Xn = { coordX: 690, coordY: 210, diffX: 394, diffY: 274 },
        Jn = { coordX: 136, coordY: 210, diffX: 1650, diffY: 254 },
        Qn = { coordX: 748, coordY: 210, diffX: 425, diffY: 274 },
        qn = { coordX: 540, coordY: 210, diffX: 840, diffY: 310 },
        ne = { coordX: 742, coordY: 210, diffX: 436, diffY: 310 },
        ee = { coordX: 0, coordY: 160, diffX: 1919, diffY: 439 },
        le = { coordX: 0, coordY: 70, diffX: 1279, diffY: 339 },
        te = { coordX: 0, coordY: 12, diffX: 800, diffY: 233 };
      var ie = (function (n) {
        return (
          (n.Classic = "classic"),
          (n.Dynamic = "dynamic"),
          (n.Stack = "stack"),
          n
        );
      })({});
      let ae = (() => {
        class n {
          constructor(n, e, l, t, i, a, o, s, u, r, c, d, b, p, h, g) {
            ((this.mapUpdateStateMonitoringService = n),
              (this.functionAvailabilityService = e),
              (this.guidanceService = l),
              (this.rendererService = t),
              (this.preferenceService = i),
              (this.systemConfigService = a),
              (this.carPositionService = o),
              (this.displayManager = s),
              (this.stageService = u),
              (this.fpkSkinService = r),
              (this.animationService = c),
              (this.generalSettingService = d),
              (this.viewinfosService = b),
              (this.routingService = p),
              (this.popupManager = h),
              (this.guidanceStateEnum = Bn.c),
              (this.iconCategory = m.Z),
              (this.zoom = Yn),
              (this.destroy$$ = new on.a(1)),
              (this.mapInstanceActivated$$ = new $n.a()),
              (this.altitude$$ = new on.a(1)),
              (this.altitude$ = this.altitude$$.asObservable()),
              (this.mapLayerConfig$$ = new Fn.a(Un)),
              (this.zoomAreaMargins$$ = new Fn.a({
                area: qn,
                layout: jn.b.Classic,
                stage: Zn.c.Large,
              })),
              (this.zoomAreaMargins$ = this.zoomAreaMargins$$),
              (this.isLargeStage = !1),
              (this.logger = g.getLogger("navi.FpkMapMainComponent")),
              (this.mergeLogger = g.getMergelogLogger()),
              (this.validLayoutForTrafficBar$ =
                this.getTrafficBarForSkinAllowed()),
              (this.fullscreenPopupInactive$ = this.popupManager
                .getPopups(m.G.CLUSTER, { active: !0, isFullscreen: !0 })
                .pipe(Object(K.a)((n) => 0 === n.length))),
              this.listenToClusterLayoutChanges(),
              this.listenToLayoutChangesForStatusLine(),
              this.listenToAltitudeAndUnitChanges(),
              this.listenToViewinfosChanges(),
              this.listenToStateChanges());
          }
          static selectLayoutForStatusLine(n) {
            return n === jn.b.Stack ||
              n === jn.b.AudiSport ||
              n === jn.b.SportBev
              ? ie.Stack
              : n === jn.b.Radius
                ? ie.Dynamic
                : ie.Classic;
          }
          mfwRollerUp() {
            this.zoomOut();
          }
          mfwRollerDown() {
            this.zoomIn();
          }
          rightDrawerMenuKeyDown() {
            this.routingService && this.routingService.openRightDrawerMenu();
          }
          ngOnInit() {
            (this.animationService.screenAnimationState$
              .pipe(Object(an.a)(this.destroy$$))
              .subscribe((n) => {
                n === m.fc.FadeInScreenStarted && this.activateMap();
              }),
              this.rendererService
                .activateMapInstance(xn.f.DEFAULT)
                .then(() => {
                  (this.rendererService.setVisibility(!0),
                    this.zoomAreaMargins$$
                      .pipe(Object(an.a)(this.destroy$$))
                      .subscribe((n) => {
                        const e = n.area,
                          l = this.evaluateLargeEtronStackSkin(n);
                        this.rendererService.setZoomArea(e);
                        const t = e.coordX ? e.coordX : 0,
                          i = e.diffX ? e.diffX : 0,
                          a = e.diffY ? e.diffY : 0;
                        let o = t + i - 100 + 40,
                          s = (e.coordY ? e.coordY : 0) + a - 20 + 30;
                        (n.layout === jn.b.AudiSport && n.stage === Zn.c.Small
                          ? ((o = t - 100), (s = 376))
                          : n.layout === jn.b.SportBev &&
                            n.stage === Zn.c.Large &&
                            (o = t + i - 100),
                          l && (o += -320));
                        const u = {
                            coordX: t,
                            coordY: 152,
                            diffX: i,
                            diffY: a,
                          },
                          r = { coordX: o, coordY: s };
                        (this.rendererService.setCopyrightTextAndIcon(
                          xn.d.TOPCENTER,
                          u,
                          r,
                        ),
                          this.logger.info(
                            "ngOnInit: new values for zoomAreaMargin resulting in values",
                            {
                              needsEtronPositionUpdates: l,
                              zoomArea: e,
                              copyRightTextRect: u,
                              copyRightIconAnchor: r,
                            },
                          ));
                      }),
                    Object(zn.b)(
                      this.rendererService.zoomList$,
                      this.rendererService.zoomLevel$,
                    )
                      .pipe(Object(an.a)(this.destroy$$))
                      .subscribe(([n, e]) => {
                        ((this.zoom = { zoomList: n, zoomLevel: e }),
                          this.cachedZoomList !== n &&
                            (this.cachedZoomList = n
                              .slice()
                              .sort((n, e) => e - n)));
                      }),
                    this.mapInstanceActivated$$.next());
                }),
              this.mapUpdateStateMonitoringService.startMonitoring(),
              this.mapInstanceActivated$$
                .pipe(Object(an.a)(this.destroy$$))
                .subscribe(() => {
                  this.setSignPostBoundaryBox();
                }));
          }
          activateMap() {
            (this.displayManager.activateLayer(Un),
              m.gd.isLamborghini || this.displayManager.activateLayer(Hn),
              this.processMapLayerChanges());
          }
          ngAfterViewInit() {
            (this.mergeLogger.log(m.hc.MAPSCREEN_INITIALIZED),
              setTimeout(
                () => this.mergeLogger.log(m.hc.MAPSCREEN_RENDERED),
                0,
              ));
          }
          ngOnDestroy() {
            (this.rendererService.setVisibility(!1),
              this.displayManager.deactivateLayer(Un.layerName, Un.displayName),
              m.gd.isLamborghini ||
                this.displayManager.deactivateLayer(
                  Hn.layerName,
                  Hn.displayName,
                ),
              this.destroy$$.next(),
              this.mapUpdateStateMonitoringService.stopMonitoring());
          }
          zoomIn() {
            if (this.zoom === Yn || !this.cachedZoomList) return;
            const n = Object(vn.b)(this.zoom.zoomLevel, this.cachedZoomList);
            n !== this.zoom.zoomLevel && this.rendererService.setZoomLevel(n);
          }
          zoomOut() {
            if (this.zoom === Yn || !this.cachedZoomList) return;
            const n = Object(vn.a)(this.zoom.zoomLevel, this.cachedZoomList);
            n !== this.zoom.zoomLevel && this.rendererService.setZoomLevel(n);
          }
          listenToClusterLayoutChanges() {
            (this.stageService.nextViewSizeAnimationData$
              .pipe(
                Object(K.a)((n) => n.params.xOffset),
                Object(Rn.a)(),
                Object(K.a)((n) => this.createLayerConfig(n)),
                Object(an.a)(this.destroy$$),
              )
              .subscribe(this.mapLayerConfig$$),
              Object(zn.b)(
                this.stageService.currentStage$,
                this.fpkSkinService.activeClusterSkin$,
              )
                .pipe(
                  Object(K.a)(([n, e]) => this.selectZoomAreaMargin(n, e)),
                  Object(Rn.a)(),
                  Object(an.a)(this.destroy$$),
                )
                .subscribe(this.zoomAreaMargins$$));
          }
          createLayerConfig(n) {
            const e = Object.assign({}, Un);
            return (
              (e.target.x =
                0 === n ? 0 : this.systemConfigService.isEtron() ? jn.d : n),
              e
            );
          }
          selectZoomAreaMargin(n, e) {
            const l = n === Zn.c.Large;
            let t;
            return (
              (t =
                e.layout === jn.b.Stack
                  ? this.systemConfigService.isEtron()
                    ? { area: l ? Wn : Xn, layout: e.layout, stage: n }
                    : { area: l ? Kn : Gn, layout: e.layout, stage: n }
                  : e.layout === jn.b.AudiSport
                    ? { area: l ? Jn : Qn, layout: e.layout, stage: n }
                    : e.layout === jn.b.SportBev
                      ? { area: l ? Wn : Xn, layout: e.layout, stage: n }
                      : { area: l ? qn : ne, layout: jn.b.Classic, stage: n }),
              t
            );
          }
          evaluateLargeEtronStackSkin(n) {
            return (
              Object(m.wd)(n) &&
              this.systemConfigService.isEtron() &&
              n.stage === Zn.c.Large &&
              (n.layout === jn.b.Stack || n.layout === jn.b.SportBev)
            );
          }
          listenToLayoutChangesForStatusLine() {
            const e = this.fpkSkinService.activeClusterSkin$.pipe(
                Object(Rn.a)(),
                Object(K.a)((e) => n.selectLayoutForStatusLine(e.layout)),
              ),
              l = this.stageService.currentStage$.pipe(
                Object(Rn.a)(),
                Object(K.a)((n) => (Zn.c.Large === n ? "big" : "small")),
              );
            Object(zn.b)(l, e)
              .pipe(Object(an.a)(this.destroy$$))
              .subscribe(([n, e]) => {
                this.statusLineCssClass = `fpk-navi-status-line--${e}-${n}`;
              });
          }
          listenToAltitudeAndUnitChanges() {
            Object(zn.b)(
              this.carPositionService.altitude$,
              this.generalSettingService.distanceUnit$,
            )
              .pipe(Object(an.a)(this.destroy$$))
              .subscribe(([n]) => {
                this.altitude$$.next(n);
              });
          }
          listenToViewinfosChanges() {
            this.signPostOrSpeedCameraInfoVisible$ =
              this.viewinfosService.viewStates$.pipe(
                Object(K.a)(
                  (n) =>
                    n.includes(xn.o.SIGNPOST) || n.includes(xn.o.SPEEDCAMERA),
                ),
                Object(Vn.a)(!1),
                Object(m.pd)(
                  this.logger,
                  "listenToViewinfosChanges: signPostOrSpeedCameraInfoVisible",
                ),
                Object(Rn.a)(),
              );
          }
          listenToStateChanges() {
            this.stageService.currentStage$
              .pipe(Object(Rn.a)(), Object(an.a)(this.destroy$$))
              .subscribe((n) => (this.isLargeStage = n === Zn.c.Large));
          }
          processMapLayerChanges() {
            this.mapLayerConfig$$
              .pipe(Object(an.a)(this.destroy$$))
              .subscribe((n) =>
                this.displayManager.updateLayerRegions(
                  n.layerName,
                  n.source,
                  n.target,
                  n.displayName,
                ),
              );
          }
          setSignPostBoundaryBox() {
            this.systemConfigService.isLvdsKombi()
              ? this.rendererService.setSignPostBoundingBox(ee)
              : this.systemConfigService.isTopKombi()
                ? this.rendererService.setSignPostBoundingBox(te)
                : this.systemConfigService.isEntryKombi()
                  ? this.rendererService.setSignPostBoundingBox(le)
                  : (this.logger.warn(
                      "KombiDerviate is not specified by SystemConfigService, using signPost of LVDS",
                    ),
                    this.rendererService.setSignPostBoundingBox(ee));
          }
          getTrafficBarForSkinAllowed() {
            return Object(zn.b)(
              this.fpkSkinService.activeClusterSkin$,
              this.stageService.currentStage$,
            ).pipe(
              Object(K.a)(
                ([n, e]) => e !== Zn.c.Small || n.layout === jn.b.Classic,
              ),
              Object(an.a)(this.destroy$$),
            );
          }
        }
        return (
          Object(En.b)(
            [
              m.l,
              Object(En.c)("design:type", Function),
              Object(En.c)("design:paramtypes", []),
              Object(En.c)("design:returntype", void 0),
            ],
            n.prototype,
            "listenToStateChanges",
            null,
          ),
          n
        );
      })();
      var oe = l("SKFw"),
        se = l("vsTE"),
        ue = l("dxLW"),
        re = l("fEDJ"),
        ce = l("r/p/"),
        de = l("I5OF"),
        be = l("SAv1"),
        pe = l("vrpT"),
        he = l("oPv+"),
        me = l("7XSz"),
        ge = l("sg2e"),
        fe = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:absolute;display:block}.wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%;background-color:initial}.wrapper[_ngcontent-%COMP%]{position:relative}.fpk-navi-status-line[_ngcontent-%COMP%]{position:fixed;top:722px;left:0}.fpk-alternative-navi-status-line[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;position:fixed;width:820px;height:60px;top:520px;left:550px}.status-line__altitude-container--invisible[_ngcontent-%COMP%]{visibility:hidden}.fpk-navi-traffic-bar[_ngcontent-%COMP%]{position:absolute;top:22px;right:-50px}.fpk-navi-status-line--stack-small[_ngcontent-%COMP%]{left:596px}.fpk-stage-big[_nghost-%COMP%]   .fpk-navi-traffic-bar[_ngcontent-%COMP%], .fpk-stage-big   [_nghost-%COMP%]   .fpk-navi-traffic-bar[_ngcontent-%COMP%]{right:-69px}.fpk-stage-big[_nghost-%COMP%]   .fpk-navi-traffic-bar--large-etron-stack[_ngcontent-%COMP%], .fpk-stage-big   [_nghost-%COMP%]   .fpk-navi-traffic-bar--large-etron-stack[_ngcontent-%COMP%]{top:18px;right:-38px}",
            ],
          ],
          data: {},
        });
      function xe(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-route-traffic-bar",
              [["class", "fpk-navi-traffic-bar"]],
              [[2, "fpk-navi-traffic-bar--large-etron-stack", null]],
              null,
              null,
              cn,
              rn,
            )),
            t.xb(1, 4374528, null, 0, un, [tn.a, d.a], null, null),
          ],
          null,
          function (n, e) {
            n(e, 0, 0, e.parent.context.mib3Let.isLargeEtronStackSkin);
          },
        );
      }
      function ve(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              6,
              "div",
              [["class", "fpk-alternative-navi-status-line"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-fpk-altitude-container",
              [
                ["class", "status-line__altitude-container"],
                ["id", "AltitudeContainer"],
              ],
              [[2, "status-line__altitude-container--invisible", null]],
              null,
              null,
              fn,
              gn,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              3,
              49152,
              null,
              0,
              mn,
              [],
              { altitude: [0, "altitude"] },
              null,
            ),
            (n()(),
            t.yb(
              4,
              0,
              null,
              null,
              2,
              "au3-fpk-zoom-container",
              [
                ["class", "status-line__zoom-container"],
                ["id", "ZoomContainer"],
              ],
              null,
              null,
              null,
              Nn,
              Pn,
            )),
            t.xb(
              5,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              6,
              49152,
              null,
              0,
              Mn,
              [],
              {
                zoomMode: [0, "zoomMode"],
                zoomValue: [1, "zoomValue"],
                rotation: [2, "rotation"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 2, 0, "AltitudeContainer"),
              n(e, 3, 0, e.parent.context.mib3Let.altitude),
              n(e, 5, 0, "ZoomContainer"),
              n(
                e,
                6,
                0,
                e.parent.context.mib3Let.zoomMode,
                e.parent.context.mib3Let.zoomValue,
                e.parent.context.mib3Let.rotation,
              ));
          },
          function (n, e) {
            n(e, 1, 0, e.component.systemConfigService.isChinaRegion());
          },
        );
      }
      function _e(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              [["wrapper", 1]],
              null,
              16,
              "div",
              [["class", "wrapper"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              5,
              "au3-fpk-status-line",
              [
                ["class", "fpk-navi-status-line"],
                ["id", "NaviStatusLine"],
              ],
              null,
              null,
              null,
              In,
              An,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              3,
              278528,
              null,
              0,
              E.i,
              [t.s, t.t, t.l, t.D],
              { klass: [0, "klass"], ngClass: [1, "ngClass"] },
              null,
            ),
            t.xb(
              4,
              49152,
              null,
              0,
              Tn,
              [],
              {
                altitudeVisible: [0, "altitudeVisible"],
                altitude: [1, "altitude"],
                currentStreet: [2, "currentStreet"],
                hovLane: [3, "hovLane"],
                zoomContainerVisible: [4, "zoomContainerVisible"],
                zoomMode: [5, "zoomMode"],
                zoomValue: [6, "zoomValue"],
                rotation: [7, "rotation"],
              },
              null,
            ),
            t.Pb(131072, E.b, [t.h]),
            t.Pb(131072, E.b, [t.h]),
            (n()(), t.hb(16777216, null, null, 7, null, xe)),
            t.xb(
              8,
              16384,
              null,
              0,
              E.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Pb(131072, E.b, [t.h]),
            t.Pb(131072, E.b, [t.h]),
            t.Pb(131072, E.b, [t.h]),
            t.Pb(131072, E.b, [t.h]),
            t.Pb(131072, E.b, [t.h]),
            t.Pb(131072, E.b, [t.h]),
            (n()(), t.hb(16777216, null, null, 1, null, ve)),
            t.xb(
              16,
              16384,
              null,
              0,
              E.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 2, 0, "NaviStatusLine"),
              n(e, 3, 0, "fpk-navi-status-line", l.statusLineCssClass),
              n(
                e,
                4,
                0,
                !l.systemConfigService.isChinaRegion() &&
                  !e.context.mib3Let.isLargeEtronStackSkin,
                e.context.mib3Let.altitude,
                t.Yb(
                  e,
                  4,
                  2,
                  t.Nb(e, 5).transform(l.carPositionService.street$),
                ),
                t.Yb(
                  e,
                  4,
                  3,
                  t.Nb(e, 6).transform(l.carPositionService.isHovLane$),
                ),
                !e.context.mib3Let.isLargeEtronStackSkin,
                e.context.mib3Let.zoomMode,
                e.context.mib3Let.zoomValue,
                e.context.mib3Let.rotation,
              ));
            var i = null;
            (n(
              e,
              8,
              0,
              l.systemConfigService.isAsiaRegion() &&
                !t.Yb(
                  e,
                  8,
                  0,
                  t.Nb(e, 9).transform(l.signPostOrSpeedCameraInfoVisible$),
                ) &&
                t.Yb(
                  e,
                  8,
                  0,
                  t
                    .Nb(e, 10)
                    .transform(l.preferenceService.asiaTrafficStatusBar$),
                ) &&
                (null ==
                (i = t.Yb(
                  e,
                  8,
                  0,
                  t
                    .Nb(e, 11)
                    .transform(
                      l.functionAvailabilityService.trafficAvailability$,
                    ),
                ))
                  ? null
                  : i.availability) &&
                t.Yb(
                  e,
                  8,
                  0,
                  t.Nb(e, 12).transform(l.guidanceService.guidanceState$),
                ) === l.guidanceStateEnum.Active &&
                t.Yb(
                  e,
                  8,
                  0,
                  t.Nb(e, 13).transform(l.validLayoutForTrafficBar$),
                ) &&
                t.Yb(
                  e,
                  8,
                  0,
                  t.Nb(e, 14).transform(l.fullscreenPopupInactive$),
                ),
            ),
              n(e, 16, 0, e.context.mib3Let.isLargeEtronStackSkin));
          },
          null,
        );
      }
      function ye(n) {
        return t.ac(
          0,
          [
            (n()(), t.hb(16777216, null, null, 7, null, _e)),
            t.xb(
              1,
              16384,
              null,
              0,
              I.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, E.b, [t.h]),
            t.Pb(131072, E.b, [t.h]),
            t.Pb(131072, E.b, [t.h]),
            t.Pb(131072, E.b, [t.h]),
            t.Pb(131072, E.b, [t.h]),
            t.Qb(7, {
              isLargeEtronStackSkin: 0,
              altitude: 1,
              zoomValue: 2,
              zoomMode: 3,
              rotation: 4,
            }),
          ],
          function (n, e) {
            var l = e.component,
              i = n(
                e,
                7,
                0,
                l.evaluateLargeEtronStackSkin(
                  t.Yb(e, 1, 0, t.Nb(e, 2).transform(l.zoomAreaMargins$)),
                ),
                t.Yb(e, 1, 0, t.Nb(e, 3).transform(l.altitude$)),
                t.Yb(
                  e,
                  1,
                  0,
                  t.Nb(e, 4).transform(l.rendererService.displayableZoomScale$),
                ),
                t.Yb(
                  e,
                  1,
                  0,
                  t.Nb(e, 5).transform(l.preferenceService.autoZoom$),
                ),
                t.Yb(
                  e,
                  1,
                  0,
                  t.Nb(e, 6).transform(l.rendererService.rotation$),
                ),
              );
            n(e, 1, 0, i);
          },
          null,
        );
      }
      function Ce(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-map-main",
              [],
              null,
              [
                ["screen", "keydown.ArrowUp"],
                ["screen", "keydown.ArrowDown"],
                ["screen", "keydown.KeyD"],
              ],
              function (n, e, l) {
                var i = !0;
                return (
                  "screen:keydown.ArrowUp" === e &&
                    (i = !1 !== t.Nb(n, 1).mfwRollerUp() && i),
                  "screen:keydown.ArrowDown" === e &&
                    (i = !1 !== t.Nb(n, 1).mfwRollerDown() && i),
                  "screen:keydown.KeyD" === e &&
                    (i = !1 !== t.Nb(n, 1).rightDrawerMenuKeyDown() && i),
                  i
                );
              },
              ye,
              fe,
            )),
            t.xb(
              1,
              4440064,
              null,
              0,
              ae,
              [
                oe.a,
                se.a,
                Bn.b,
                ue.a,
                re.a,
                c.a,
                ce.a,
                de.a,
                be.a,
                jn.c,
                pe.a,
                he.a,
                me.a,
                h.b,
                ge.a,
                d.a,
              ],
              null,
              null,
            ),
          ],
          function (n, e) {
            n(e, 1, 0);
          },
          null,
        );
      }
      var ke = t.ub("au3-fpk-map-main", ae, Ce, {}, {}, []),
        Oe = [
          '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;width:100%;height:93px;margin:3px 0;padding:0 15px}.first-line[_ngcontent-%COMP%]{display:grid;grid-template-columns:55px 1fr auto;grid-template-rows:47px;grid-template-areas:"first_1 first_2 first_3";justify-content:center;align-items:center;padding-top:3px}.first-line__icon[_ngcontent-%COMP%]{grid-area:first_1;align-self:center}.first-line__address[_ngcontent-%COMP%]{grid-area:first_2;font-size:40px}.first-line__distance[_ngcontent-%COMP%]{grid-area:first_3;justify-self:end;width:223px;font-size:30px}.second-line[_ngcontent-%COMP%]{display:grid;grid-template-columns:55px 1fr;grid-template-rows:34px;grid-template-areas:"second_1 second_2";justify-content:center;align-items:center;padding-top:5px}.second-line__empty[_ngcontent-%COMP%]{grid-area:second_1;align-self:center;padding:0 15px}.second-line__address[_ngcontent-%COMP%]{grid-area:second_2;font-size:30px}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .first-line__icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .first-line__icon[_ngcontent-%COMP%]{padding:0 15px 0 0}.component-layout-latin[_nghost-%COMP%]   .first-line__distance[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .first-line__distance[_ngcontent-%COMP%]{padding:0 0 0 30px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .first-line__icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .first-line__icon[_ngcontent-%COMP%]{padding:0 0 0 15px}.component-layout-arabic[_nghost-%COMP%]   .first-line__distance[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .first-line__distance[_ngcontent-%COMP%]{padding:0 30px 0 0}.fpk-stage-small[_nghost-%COMP%]   .first-line__address[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .first-line__address[_ngcontent-%COMP%]{grid-column:1/3}.fpk-stage-small[_nghost-%COMP%]   .first-line__distance[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .first-line__distance[_ngcontent-%COMP%], .fpk-stage-small[_nghost-%COMP%]   .first-line__icon[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .first-line__icon[_ngcontent-%COMP%]{display:none}.fpk-stage-small[_nghost-%COMP%]   .second-line__address[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .second-line__address[_ngcontent-%COMP%]{grid-column:1/3}.fpk-stage-small[_nghost-%COMP%]   .second-line__empty[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .second-line__empty[_ngcontent-%COMP%]{display:none}',
        ],
        Se = l("cOck"),
        Me = l("2ozK");
      class Pe {
        constructor() {
          this.ICON_CATEGORY_LIST = m.Z.List;
        }
      }
      var Ne = (function (n) {
        return (
          (n[(n.HOME = 0)] = "HOME"),
          (n[(n.BUSINESS = 1)] = "BUSINESS"),
          n
        );
      })({});
      class Te extends Pe {
        constructor() {
          (super(),
            (this.homeAddressIcon = "E801_destination_private.webp"),
            (this.businessAddressIcon = "E800_destination_business.webp"));
        }
        isHomeAddress() {
          return this.staticAddressType === Ne.HOME;
        }
      }
      var Ae = t.wb({ encapsulation: 0, styles: [Oe], data: {} });
      function we(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              en.b,
              en.a,
            )),
            t.xb(
              1,
              4243456,
              null,
              0,
              ln.b,
              [d.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            n(e, 1, 0, l.homeAddressIcon, l.ICON_CATEGORY_LIST);
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 1).iconComponentHidden);
          },
        );
      }
      function Le(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              en.b,
              en.a,
            )),
            t.xb(
              1,
              4243456,
              null,
              0,
              ln.b,
              [d.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            n(e, 1, 0, l.businessAddressIcon, l.ICON_CATEGORY_LIST);
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 1).iconComponentHidden);
          },
        );
      }
      function De(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "first-line__address"],
                ["developerText", "Heimatadresse"],
                ["id", "HomeAddress"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              y.b,
              y.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              k.a,
              [[6, C.a], O.a, t.h, t.l, t.D, [2, S.a], [2, M.a], [2, P.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "HomeAddress"),
              n(e, 2, 0, "Heimatadresse", "HomeAddress", 1));
          },
          function (n, e) {
            n(
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
      function Ie(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "first-line__address"],
                ["developerText", "Gesch\xe4ftsadresse"],
                ["id", "BusinessAddress"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              y.b,
              y.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              k.a,
              [[6, C.a], O.a, t.h, t.l, t.D, [2, S.a], [2, M.a], [2, P.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "BusinessAddress"),
              n(e, 2, 0, "Gesch\xe4ftsadresse", "BusinessAddress", 1));
          },
          function (n, e) {
            n(
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
      function Ee(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "second-line__address"],
                ["id", "SecondLineAddress"],
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
              y.b,
              y.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 16384, null, 0, M.a, [], null, null),
            t.xb(
              3,
              245760,
              null,
              0,
              k.a,
              [[6, C.a], O.a, t.h, t.l, t.D, [2, S.a], [2, M.a], [2, P.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, "SecondLineAddress"),
              n(
                e,
                3,
                0,
                "SecondLineAddress",
                null == l.address ? null : l.address.lines[0],
              ));
          },
          function (n, e) {
            n(
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
      function $e(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "second-line__address"],
                ["developerText", "Es ist keine Adresse hinterlegt."],
                ["id", "NoAddressSaved"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              y.b,
              y.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              k.a,
              [[6, C.a], O.a, t.h, t.l, t.D, [2, S.a], [2, M.a], [2, P.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "NoAddressSaved"),
              n(
                e,
                2,
                0,
                "Es ist keine Adresse hinterlegt.",
                "NoAddressSaved",
                1,
              ));
          },
          function (n, e) {
            n(
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
      function Fe(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              12,
              "div",
              [["class", "first-line"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              4,
              "div",
              [["class", "first-line__icon"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), t.hb(16777216, null, null, 1, null, we)),
            t.xb(
              3,
              16384,
              null,
              0,
              E.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Le)),
            t.xb(
              5,
              16384,
              null,
              0,
              E.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, De)),
            t.xb(
              7,
              16384,
              null,
              0,
              E.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Ie)),
            t.xb(
              9,
              16384,
              null,
              0,
              E.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            t.yb(
              10,
              0,
              null,
              null,
              2,
              "div",
              [["class", "first-line__distance"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              11,
              0,
              null,
              null,
              1,
              "au3-direction-distance",
              [],
              null,
              null,
              null,
              Se.b,
              Se.a,
            )),
            t.xb(
              12,
              49152,
              null,
              0,
              Me.a,
              [],
              { distance: [0, "distance"] },
              null,
            ),
            (n()(),
            t.yb(
              13,
              0,
              null,
              null,
              4,
              "div",
              [["class", "second-line"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              14,
              0,
              null,
              null,
              0,
              "div",
              [["class", "second-line__empty"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), t.hb(16777216, null, null, 1, null, Ee)),
            t.xb(
              16,
              16384,
              null,
              0,
              E.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), t.hb(0, [["noAddress", 2]], null, 0, null, $e)),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 3, 0, l.isHomeAddress()),
              n(e, 5, 0, !l.isHomeAddress()),
              n(e, 7, 0, l.isHomeAddress()),
              n(e, 9, 0, !l.isHomeAddress()),
              n(e, 12, 0, l.distance),
              n(e, 16, 0, l.address, t.Nb(e, 17)));
          },
          null,
        );
      }
      var ze = l("bMuc"),
        Re = l("ZIdM"),
        Ve = l("3bpu"),
        je = l("6zvu"),
        Be = l("VcEz"),
        Ze = l("OtM5"),
        Ye = l("y9xZ"),
        Ue = l("BMrr"),
        He = l("IEns"),
        Ke = l("z6QT"),
        Ge = l("flsk"),
        We = l("FQEI"),
        Xe = l("O82V"),
        Je = l("Eln4"),
        Qe = l("evAh"),
        qe = l("CpzC"),
        nl = l("0Bsn"),
        el = l("5GjX"),
        ll = l("mYyF"),
        tl = l("v98a"),
        il = l("aOG8"),
        al = l("Krzs"),
        ol = t.wb({ encapsulation: 0, styles: [Oe], data: {} });
      function sl(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              "div",
              [["class", "first-line"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              2,
              "div",
              [["class", "first-line__icon"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              2,
              0,
              null,
              null,
              1,
              "au3-icon",
              [],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              en.b,
              en.a,
            )),
            t.xb(
              3,
              4243456,
              null,
              0,
              ln.b,
              [d.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (n()(),
            t.yb(
              4,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "first-line__address"],
                ["id", "FirstLineAddress"],
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
              y.b,
              y.a,
            )),
            t.xb(
              5,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(6, 16384, null, 0, M.a, [], null, null),
            t.xb(
              7,
              245760,
              null,
              0,
              k.a,
              [[6, C.a], O.a, t.h, t.l, t.D, [2, S.a], [2, M.a], [2, P.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            (n()(),
            t.yb(
              8,
              0,
              null,
              null,
              2,
              "div",
              [["class", "first-line__distance"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              9,
              0,
              null,
              null,
              1,
              "au3-direction-distance",
              [],
              null,
              null,
              null,
              Se.b,
              Se.a,
            )),
            t.xb(
              10,
              49152,
              null,
              0,
              Me.a,
              [],
              { distance: [0, "distance"] },
              null,
            ),
            (n()(),
            t.yb(
              11,
              0,
              null,
              null,
              5,
              "div",
              [["class", "second-line"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              12,
              0,
              null,
              null,
              0,
              "div",
              [["class", "second-line__empty"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              13,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "second-line__address"],
                ["id", "SecondLineAddress"],
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
              y.b,
              y.a,
            )),
            t.xb(
              14,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(15, 16384, null, 0, M.a, [], null, null),
            t.xb(
              16,
              245760,
              null,
              0,
              k.a,
              [[6, C.a], O.a, t.h, t.l, t.D, [2, S.a], [2, M.a], [2, P.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(
              e,
              3,
              0,
              null == l.address ? null : l.address.icon,
              l.ICON_CATEGORY_LIST,
            ),
              n(e, 5, 0, "FirstLineAddress"),
              n(
                e,
                7,
                0,
                "FirstLineAddress",
                null == l.address ? null : l.address.lines[0],
              ),
              n(e, 10, 0, l.distance),
              n(e, 14, 0, "SecondLineAddress"),
              n(
                e,
                16,
                0,
                "SecondLineAddress",
                null == l.address ? null : l.address.lines[1],
              ));
          },
          function (n, e) {
            (n(e, 2, 0, t.Nb(e, 3).iconComponentHidden),
              n(
                e,
                4,
                0,
                t.Nb(e, 7).backgroundColor,
                t.Nb(e, 7).fixedNumberOfLines,
                t.Nb(e, 7).mayContainLatinCharsForArabic,
                t.Nb(e, 7).shortenWithEllipsisForArabic,
              ),
              n(
                e,
                13,
                0,
                t.Nb(e, 16).backgroundColor,
                t.Nb(e, 16).fixedNumberOfLines,
                t.Nb(e, 16).mayContainLatinCharsForArabic,
                t.Nb(e, 16).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      var ul = l("4XZL"),
        rl = l("URLa"),
        cl = l("N2Hj"),
        dl = l("UbWD"),
        bl = l("2rvh"),
        pl = l("odRV"),
        hl = l("Udyh"),
        ml = l("qiAR"),
        gl = l("007S"),
        fl = l("oeT7"),
        xl = l("oxWk"),
        vl = l("Tr//"),
        _l = l("mWib"),
        yl = l("q89F"),
        Cl = l("dkCa"),
        kl = l("4h+N"),
        Ol = l("4C60");
      class Sl {
        constructor(n, e, l, t, i) {
          ((this.guidanceService = n),
            (this.addressFormattingService = e),
            (this.naviRoutingService = l),
            (this.popupManager = t),
            (this.logger = i.getLogger(
              "navi.AbstractFpkAddressListComponent",
            )));
        }
        convertLocationToNavAddress(n, e) {
          if (!n) return null;
          const l = Object(Ol.c)(n),
            t = e ? 1 : 2;
          return {
            icon: this.getIconFilename(),
            lines: this.addressFormattingService.getLines(t, l),
            navAddress: l,
          };
        }
        listItemSelected(n) {
          (this.logger.info("listItemSelected:", n),
            this.requestNewGuidance(n.id));
        }
        showNoHomeSetToast() {
          this.popupManager.request(m.Ob.POPUP_FPK_NAV_NO_HOME);
        }
        showNoBusinessSetToast() {
          this.popupManager.request(m.Ob.POPUP_FPK_NAV_NO_BUSINESS);
        }
        requestNewGuidance(n) {
          return Object(En.a)(this, void 0, void 0, function* () {
            let e = !1;
            if (this.guidanceService.guidanceState === Bn.c.Active) {
              const n = yield this.activateFpkGuidancePopup();
              if (!n || !n.action)
                return (
                  this.logger.info(
                    "User input procedure cancelled during Active Guidance Popup.",
                  ),
                  Promise.resolve(!1)
                );
              if (n.action === m.Nb.YES) e = !0;
              else {
                if (n.action !== m.Nb.NO)
                  return (
                    this.logger.info(
                      "User input procedure cancelled during Active Guidance Popup.",
                    ),
                    Promise.resolve(!1)
                  );
                e = !1;
              }
              this.logger.info('User input "add new location as stopover":', e);
            }
            return (
              this.guidanceService.startGuidance(n, e),
              this.naviRoutingService.updateAndGoToActiveContext(h.a.MapMain),
              Promise.resolve(!0)
            );
          });
        }
        activateFpkGuidancePopup() {
          return Object(En.a)(this, void 0, void 0, function* () {
            return (
              this.logger.info(
                "Guidance active -> waiting for user interaction",
              ),
              this.popupManager.request(
                m.Ob.POPUP_FPK_NAV_DESTINATION_REPLACE_OR_STOPOVER,
              )
            );
          });
        }
      }
      class Ml extends Sl {
        constructor(n, e, l, t, i, a, o, s, u) {
          (super(t, a, o, s, u),
            (this.favoritesService = n),
            (this.homebusinessService = e),
            (this.changeDetectorRef = l),
            (this.guidanceService = t),
            (this.distanceAugmentationService = i),
            (this.ITEM_TYPE_NO_END_ICON = m.rb.ITEM_TYPE_NO_END_ICON),
            (this.staticAddressTypeEnum = Ne),
            (this.favoriteIcon = "E0FC_favoriten.webp"),
            (this.hasNoFavorites$ = this.favoritesService.favorites$.pipe(
              Object(K.a)((n) => 0 === n.length),
            )),
            (this.destroyed$$ = new on.a(1)));
        }
        ngAfterViewInit() {
          setTimeout(() => {
            (this.initFavorites(), this.changeDetectorRef.markForCheck());
          }, 0);
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        initFavorites() {
          const n = Object(zn.b)(
            this.homebusinessService.homeLocation$.pipe(
              Object(K.a)((n) => ({ staticAddressType: Ne.HOME, favorite: n })),
            ),
            this.homebusinessService.businessLocation$.pipe(
              Object(K.a)((n) => ({
                staticAddressType: Ne.BUSINESS,
                favorite: n,
              })),
            ),
            this.favoritesService.favorites$.pipe(
              Object(K.a)((n) => n.map((n) => ({ favorite: n }))),
            ),
          ).pipe(
            Object(_l.a)(5),
            Object(K.a)(([n, e, l]) => [n, e, ...l]),
            Object(m.pd)(this.logger, "initFavorites: updated to:"),
          );
          this.favorites$ =
            this.distanceAugmentationService.augmentWithDistancesForList(
              n,
              this.listComponent.visibleListRangeNotScrolling$,
              (n) =>
                n &&
                n.favorite &&
                n.favorite.location &&
                n.favorite.location.coordinates,
            );
        }
        getIconFilename() {
          return this.favoriteIcon;
        }
        homeAddressSelected(n) {
          (this.logger.info("homeAddressSelected:", n),
            n ? this.requestNewGuidance(n.id) : this.showNoHomeSetToast());
        }
        businessAddressSelected(n) {
          (this.logger.info("businessAddressSelected:", n),
            n ? this.requestNewGuidance(n.id) : this.showNoBusinessSetToast());
        }
      }
      var Pl = l("SFb6"),
        Nl = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;height:100%}.list__item--single-line[_ngcontent-%COMP%]{height:52px;margin:3px 0 4px;font-size:38px}",
            ],
          ],
          data: {},
        });
      function Tl(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-fpk-static-address-list-item",
              [["id", "Homeaddress"]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (n, e, l) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t =
                      !1 !==
                        n.component.homeAddressSelected(
                          null == n.parent.context.$implicit ||
                            null == n.parent.context.$implicit.location ||
                            null == n.parent.context.$implicit.location.favorite
                            ? null
                            : n.parent.context.$implicit.location.favorite
                                .location,
                        ) && t),
                  t
                );
              },
              Fe,
              Ae,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, ze.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              Re.a,
              [ze.a, [2, Ve.a], [2, C.a], d.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              je.a,
              [
                d.a,
                Be.b,
                Re.a,
                [2, Ve.a],
                [2, C.a],
                [2, Ze.a],
                [2, Ye.a],
                [2, u.a],
                t.z,
                Ue.a,
                t.l,
                [2, He.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ke.a, Ke.a, [[3, Ke.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              Ge.a,
              [
                t.l,
                We.a,
                t.h,
                Ke.a,
                [2, Xe.a],
                [2, Ve.b],
                [2, Ve.a],
                [2, Je.a],
                [2, Qe.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              147456,
              null,
              0,
              qe.a,
              [
                [2, je.a],
                [2, Ze.a],
                [2, nl.a],
                [2, Ge.a],
                [2, el.b],
                t.l,
                ll.a,
                tl.b,
              ],
              null,
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              il.a,
              [[2, Ge.a], [2, je.a], [2, Be.b], al.a],
              null,
              null,
            ),
            t.xb(
              9,
              49152,
              null,
              0,
              Te,
              [],
              {
                address: [0, "address"],
                distance: [1, "distance"],
                staticAddressType: [2, "staticAddressType"],
              },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, "Homeaddress"),
              n(e, 4, 0),
              n(e, 6, 0),
              n(
                e,
                9,
                0,
                l.convertLocationToNavAddress(
                  null == e.parent.context.$implicit ||
                    null == e.parent.context.$implicit.location ||
                    null == e.parent.context.$implicit.location.favorite
                    ? null
                    : e.parent.context.$implicit.location.favorite.location,
                  !0,
                ),
                e.parent.context.$implicit.distance,
                l.staticAddressTypeEnum.HOME,
              ));
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 6).markerClassEnabled);
          },
        );
      }
      function Al(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-fpk-static-address-list-item",
              [["id", "BusinessAddress"]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (n, e, l) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t =
                      !1 !==
                        n.component.businessAddressSelected(
                          null == n.parent.context.$implicit ||
                            null == n.parent.context.$implicit.location ||
                            null == n.parent.context.$implicit.location.favorite
                            ? null
                            : n.parent.context.$implicit.location.favorite
                                .location,
                        ) && t),
                  t
                );
              },
              Fe,
              Ae,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, ze.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              Re.a,
              [ze.a, [2, Ve.a], [2, C.a], d.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              je.a,
              [
                d.a,
                Be.b,
                Re.a,
                [2, Ve.a],
                [2, C.a],
                [2, Ze.a],
                [2, Ye.a],
                [2, u.a],
                t.z,
                Ue.a,
                t.l,
                [2, He.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ke.a, Ke.a, [[3, Ke.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              Ge.a,
              [
                t.l,
                We.a,
                t.h,
                Ke.a,
                [2, Xe.a],
                [2, Ve.b],
                [2, Ve.a],
                [2, Je.a],
                [2, Qe.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              147456,
              null,
              0,
              qe.a,
              [
                [2, je.a],
                [2, Ze.a],
                [2, nl.a],
                [2, Ge.a],
                [2, el.b],
                t.l,
                ll.a,
                tl.b,
              ],
              null,
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              il.a,
              [[2, Ge.a], [2, je.a], [2, Be.b], al.a],
              null,
              null,
            ),
            t.xb(
              9,
              49152,
              null,
              0,
              Te,
              [],
              {
                address: [0, "address"],
                distance: [1, "distance"],
                staticAddressType: [2, "staticAddressType"],
              },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, "BusinessAddress"),
              n(e, 4, 0),
              n(e, 6, 0),
              n(
                e,
                9,
                0,
                l.convertLocationToNavAddress(
                  null == e.parent.context.$implicit ||
                    null == e.parent.context.$implicit.location ||
                    null == e.parent.context.$implicit.location.favorite
                    ? null
                    : e.parent.context.$implicit.location.favorite.location,
                  !0,
                ),
                e.parent.context.$implicit.distance,
                l.staticAddressTypeEnum.BUSINESS,
              ));
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 6).markerClassEnabled);
          },
        );
      }
      function wl(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-fpk-dynamic-address-list-item",
              [
                ["id", ""],
                ["ttIgnore", ""],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (n, e, l) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t =
                      !1 !==
                        n.component.listItemSelected(
                          null == n.parent.context.$implicit ||
                            null == n.parent.context.$implicit.location ||
                            null == n.parent.context.$implicit.location.favorite
                            ? null
                            : n.parent.context.$implicit.location.favorite
                                .location,
                        ) && t),
                  t
                );
              },
              sl,
              ol,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 16384, null, 0, M.a, [], null, null),
            t.xb(3, 147456, null, 0, ze.a, [t.l, t.z], null, null),
            t.xb(
              4,
              147456,
              null,
              0,
              Re.a,
              [ze.a, [2, Ve.a], [2, C.a], d.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              je.a,
              [
                d.a,
                Be.b,
                Re.a,
                [2, Ve.a],
                [2, C.a],
                [2, Ze.a],
                [2, Ye.a],
                [2, u.a],
                t.z,
                Ue.a,
                t.l,
                [2, He.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ke.a, Ke.a, [[3, Ke.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              Ge.a,
              [
                t.l,
                We.a,
                t.h,
                Ke.a,
                [2, Xe.a],
                [2, Ve.b],
                [2, Ve.a],
                [2, Je.a],
                [2, Qe.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              qe.a,
              [
                [2, je.a],
                [2, Ze.a],
                [2, nl.a],
                [2, Ge.a],
                [2, el.b],
                t.l,
                ll.a,
                tl.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              il.a,
              [[2, Ge.a], [2, je.a], [2, Be.b], al.a],
              null,
              null,
            ),
            t.xb(
              10,
              49152,
              null,
              0,
              Pe,
              [],
              { address: [0, "address"], distance: [1, "distance"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, ""),
              n(e, 5, 0),
              n(e, 7, 0),
              n(
                e,
                10,
                0,
                l.convertLocationToNavAddress(
                  null == e.parent.context.$implicit ||
                    null == e.parent.context.$implicit.location ||
                    null == e.parent.context.$implicit.location.favorite
                    ? null
                    : e.parent.context.$implicit.location.favorite.location,
                ),
                e.parent.context.$implicit.distance,
              ));
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 7).markerClassEnabled);
          },
        );
      }
      function Ll(n) {
        return t.ac(
          0,
          [
            (n()(),
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
            t.xb(
              1,
              16384,
              null,
              0,
              E.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (n()(), t.hb(16777216, [[2, 2]], null, 1, null, Tl)),
            t.xb(
              3,
              278528,
              null,
              0,
              E.p,
              [t.P, t.L, E.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, [[2, 2]], null, 1, null, Al)),
            t.xb(
              5,
              278528,
              null,
              0,
              E.p,
              [t.P, t.L, E.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, [[2, 2]], null, 1, null, wl)),
            t.xb(7, 16384, null, 0, E.q, [t.P, t.L, E.o], null, null),
            (n()(), t.hb(0, null, null, 0)),
          ],
          function (n, e) {
            var l = e.component;
            (n(
              e,
              1,
              0,
              null == e.context.$implicit.location
                ? null
                : e.context.$implicit.location.staticAddressType,
            ),
              n(e, 3, 0, l.staticAddressTypeEnum.HOME),
              n(e, 5, 0, l.staticAddressTypeEnum.BUSINESS));
          },
          null,
        );
      }
      function Dl(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-list-route-item",
              [
                ["after", ""],
                ["class", "list__item list__item--single-line"],
                ["id", "NoFavoritesSaved"],
                ["titleDeveloperText", "Keine Favoriten gespeichert."],
              ],
              null,
              null,
              null,
              ul.b,
              ul.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              114688,
              null,
              0,
              rl.a,
              [],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                type: [1, "type"],
              },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, "NoFavoritesSaved"),
              n(
                e,
                2,
                0,
                "Keine Favoriten gespeichert.",
                l.ITEM_TYPE_NO_END_ICON,
              ));
          },
          null,
        );
      }
      function Il(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
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
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              9,
              "au3-list",
              [["au3ListDomPaging", ""]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              cl.b,
              cl.a,
            )),
            t.Sb(6144, null, dl.a, null, [bl.a]),
            t.xb(3, 16384, null, 0, pl.a, [t.l], null, null),
            t.xb(
              4,
              16384,
              null,
              0,
              hl.a,
              [d.a],
              { itemHeightGuess: [0, "itemHeightGuess"] },
              null,
            ),
            t.xb(
              5,
              12828672,
              [
                [1, 4],
                ["searchResultList", 4],
              ],
              1,
              bl.a,
              [
                [2, hl.a],
                [2, w.a],
                [8, null],
                [2, C.a],
                [2, ml.a],
                [2, gl.a],
                [2, Be.b],
                fl.i,
                t.z,
                t.h,
                d.a,
                xl.a,
                vl.a,
                [2, We.a],
                Ve.a,
                [2, fl.a],
              ],
              {
                showCursor: [0, "showCursor"],
                itemHeightGuess: [1, "itemHeightGuess"],
                showSeparators: [2, "showSeparators"],
                defaultTemplate: [3, "defaultTemplate"],
                items: [4, "items"],
              },
              null,
            ),
            t.Tb(603979776, 2, { template: 0 }),
            (n()(),
            t.hb(
              0,
              [
                [2, 2],
                ["defaultTemplate", 2],
              ],
              0,
              0,
              null,
              Ll,
            )),
            (n()(), t.hb(16777216, [[2, 2]], 1, 2, null, Dl)),
            t.xb(
              9,
              16384,
              null,
              0,
              E.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Pb(131072, E.b, [t.h]),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 4, 0, 99),
              n(e, 5, 0, !0, 99, !1, t.Nb(e, 7), e.context.mib3Let),
              n(
                e,
                9,
                0,
                t.Yb(e, 9, 0, t.Nb(e, 10).transform(l.hasNoFavorites$)),
              ));
          },
          function (n, e) {
            n(e, 1, 0, t.Nb(e, 5).showLineNumbers);
          },
        );
      }
      function El(n) {
        return t.ac(
          2,
          [
            t.Tb(671088640, 1, { listComponent: 0 }),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              9,
              "au3-fpk-screen",
              [["id", "Screen:NAV_FPK_FAVORITES"]],
              null,
              null,
              null,
              T.b,
              T.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 114688, null, 0, A.a, [], null, null),
            t.Sb(256, null, w.a, A.b, []),
            (n()(),
            t.yb(
              5,
              0,
              null,
              0,
              2,
              "au3-fpk-title-line",
              [
                ["id", "FpkFavorites"],
                ["primaryDeveloperText", "Navigation"],
                ["secondaryDeveloperText", "Favoriten"],
              ],
              [[2, "priority-shrink", null]],
              null,
              null,
              L.b,
              L.a,
            )),
            t.xb(
              6,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              7,
              49152,
              null,
              0,
              D.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (n()(), t.hb(16777216, null, 0, 2, null, Il)),
            t.xb(
              9,
              16384,
              null,
              0,
              I.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, E.b, [t.h]),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 2, 0, "Screen:NAV_FPK_FAVORITES"),
              n(e, 3, 0),
              n(e, 6, 0, "FpkFavorites"),
              n(e, 7, 0, "Navigation", "Favoriten"),
              n(e, 9, 0, t.Yb(e, 9, 0, t.Nb(e, 10).transform(l.favorites$))));
          },
          function (n, e) {
            n(e, 5, 0, t.Nb(e, 7).isPriorityShrink);
          },
        );
      }
      function $l(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-favorites",
              [],
              null,
              null,
              null,
              El,
              Nl,
            )),
            t.xb(
              1,
              4374528,
              null,
              0,
              Ml,
              [Cl.a, kl.a, t.h, Bn.b, yl.a, Pl.a, h.b, ge.a, d.a],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var Fl = t.ub("au3-fpk-favorites", Ml, $l, {}, {}, []),
        zl = l("eZMD"),
        Rl = l("HD2x"),
        Vl = l("ROBh"),
        jl = l("TLy2"),
        Bl = l("8ICF");
      class Zl extends Sl {
        constructor(n, e, l, t, i, a, o, s) {
          (super(n, t, i, a, s),
            (this.guidanceService = n),
            (this.lastDestinationsService = e),
            (this.distanceAugmentationService = l),
            (this.cdr = o),
            (this.lastDestinationIcon =
              "EA21_navigation_dest_history_entry.webp"),
            (this.hasNoLastDestinations$ =
              this.lastDestinationsService.lastDestinations$.pipe(
                Object(K.a)((n) => 0 === n.length),
              )));
        }
        ngAfterViewInit() {
          setTimeout(() => {
            const n = this.listComponentsChildren.changes
              .pipe(
                Object(Vn.a)(void 0),
                Object(K.a)(() =>
                  this.listComponentsChildren.length > 0
                    ? this.listComponentsChildren.first
                    : void 0,
                ),
                Object(Rn.a)(),
              )
              .pipe(
                Object(jl.a)((n) =>
                  n
                    ? n.visibleListRangeNotScrolling$
                    : Object(Vl.a)(m.sb.EMPTY),
                ),
              );
            ((this.lastDestinations$ =
              this.distanceAugmentationService.augmentWithDistancesForList(
                this.lastDestinationsService.lastDestinations$.pipe(
                  Object(m.pd)(
                    this.logger,
                    "ngAfterViewInit: update last destinations:",
                  ),
                ),
                n,
                (n) => {
                  const e = n.location;
                  return e.coordinates ? e.coordinates : void 0;
                },
              )),
              this.cdr.markForCheck());
          }, 0);
        }
        getIconFilename() {
          return this.lastDestinationIcon;
        }
      }
      var Yl = t.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;height:100%}.main-area[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;flex-grow:1}.main-area__content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.list__item--single-line[_ngcontent-%COMP%]{height:52px;margin:3px 0 4px;font-size:38px}",
          ],
        ],
        data: {},
      });
      function Ul(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-fpk-dynamic-address-list-item",
              [
                ["id", ""],
                ["ttIgnore", ""],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (n, e, l) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t =
                      !1 !==
                        n.component.listItemSelected(
                          null == n.context.$implicit ||
                            null == n.context.$implicit.location
                            ? null
                            : n.context.$implicit.location.location,
                        ) && t),
                  t
                );
              },
              sl,
              ol,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 16384, null, 0, M.a, [], null, null),
            t.xb(3, 147456, null, 0, ze.a, [t.l, t.z], null, null),
            t.xb(
              4,
              147456,
              null,
              0,
              Re.a,
              [ze.a, [2, Ve.a], [2, C.a], d.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              je.a,
              [
                d.a,
                Be.b,
                Re.a,
                [2, Ve.a],
                [2, C.a],
                [2, Ze.a],
                [2, Ye.a],
                [2, u.a],
                t.z,
                Ue.a,
                t.l,
                [2, He.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ke.a, Ke.a, [[3, Ke.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              Ge.a,
              [
                t.l,
                We.a,
                t.h,
                Ke.a,
                [2, Xe.a],
                [2, Ve.b],
                [2, Ve.a],
                [2, Je.a],
                [2, Qe.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              qe.a,
              [
                [2, je.a],
                [2, Ze.a],
                [2, nl.a],
                [2, Ge.a],
                [2, el.b],
                t.l,
                ll.a,
                tl.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              il.a,
              [[2, Ge.a], [2, je.a], [2, Be.b], al.a],
              null,
              null,
            ),
            t.xb(
              10,
              49152,
              null,
              0,
              Pe,
              [],
              { address: [0, "address"], distance: [1, "distance"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, ""),
              n(e, 5, 0),
              n(e, 7, 0),
              n(
                e,
                10,
                0,
                l.convertLocationToNavAddress(
                  null == e.context.$implicit ||
                    null == e.context.$implicit.location
                    ? null
                    : e.context.$implicit.location.location,
                ),
                e.context.$implicit.distance,
              ));
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 7).markerClassEnabled);
          },
        );
      }
      function Hl(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              6,
              "au3-list",
              [
                ["au3ListDomPaging", ""],
                ["class", "main-area__content"],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              cl.b,
              cl.a,
            )),
            t.Sb(6144, null, dl.a, null, [bl.a]),
            t.xb(2, 16384, null, 0, pl.a, [t.l], null, null),
            t.xb(
              3,
              16384,
              null,
              0,
              hl.a,
              [d.a],
              { itemHeightGuess: [0, "itemHeightGuess"] },
              null,
            ),
            t.xb(
              4,
              12828672,
              [
                [1, 4],
                ["searchResultList", 4],
              ],
              1,
              bl.a,
              [
                [2, hl.a],
                [2, w.a],
                [8, null],
                [2, C.a],
                [2, ml.a],
                [2, gl.a],
                [2, Be.b],
                fl.i,
                t.z,
                t.h,
                d.a,
                xl.a,
                vl.a,
                [2, We.a],
                Ve.a,
                [2, fl.a],
              ],
              {
                showCursor: [0, "showCursor"],
                itemHeightGuess: [1, "itemHeightGuess"],
                showSeparators: [2, "showSeparators"],
                items: [3, "items"],
              },
              null,
            ),
            t.Tb(603979776, 2, { template: 0 }),
            (n()(), t.hb(0, [[2, 2]], 0, 0, null, Ul)),
          ],
          function (n, e) {
            (n(e, 3, 0, 99), n(e, 4, 0, !0, 99, !1, e.parent.context.mib3Let));
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 4).showLineNumbers);
          },
        );
      }
      function Kl(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-instruction-text",
              [
                ["class", "main-area__content"],
                ["id", "noLastDestinationsDisclaimer"],
              ],
              null,
              null,
              null,
              zl.b,
              zl.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              Rl.a,
              [],
              { primaryDeveloperText: [0, "primaryDeveloperText"] },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "noLastDestinationsDisclaimer"),
              n(e, 2, 0, "Keine letzten Ziele gespeichert."));
          },
          null,
        );
      }
      function Gl(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
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
            (n()(), t.hb(16777216, null, null, 1, null, Hl)),
            t.xb(
              2,
              16384,
              null,
              0,
              E.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 2, null, Kl)),
            t.xb(
              4,
              16384,
              null,
              0,
              E.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Pb(131072, E.b, [t.h]),
            (n()(), t.hb(0, null, null, 0)),
          ],
          function (n, e) {
            var l = e.component;
            (n(
              e,
              2,
              0,
              (null == e.context.mib3Let ? null : e.context.mib3Let.length) > 0,
            ),
              n(
                e,
                4,
                0,
                t.Yb(e, 4, 0, t.Nb(e, 5).transform(l.hasNoLastDestinations$)),
              ));
          },
          null,
        );
      }
      function Wl(n) {
        return t.ac(
          2,
          [
            t.Tb(671088640, 1, { listComponentsChildren: 1 }),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              10,
              "au3-fpk-screen",
              [["id", "Screen:NAV_FPK_LAST_DESTINATIONS"]],
              null,
              null,
              null,
              T.b,
              T.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 114688, null, 0, A.a, [], null, null),
            t.Sb(256, null, w.a, A.b, []),
            (n()(),
            t.yb(
              5,
              0,
              null,
              0,
              2,
              "au3-fpk-title-line",
              [
                ["id", "FpkLastDestinations"],
                ["primaryDeveloperText", "Navigation"],
                ["secondaryDeveloperText", "Letzte Ziele"],
              ],
              [[2, "priority-shrink", null]],
              null,
              null,
              L.b,
              L.a,
            )),
            t.xb(
              6,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              7,
              49152,
              null,
              0,
              D.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (n()(),
            t.yb(
              8,
              0,
              null,
              0,
              3,
              "div",
              [["class", "main-area"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), t.hb(16777216, null, null, 2, null, Gl)),
            t.xb(
              10,
              16384,
              null,
              0,
              I.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, E.b, [t.h]),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 2, 0, "Screen:NAV_FPK_LAST_DESTINATIONS"),
              n(e, 3, 0),
              n(e, 6, 0, "FpkLastDestinations"),
              n(e, 7, 0, "Navigation", "Letzte Ziele"),
              n(
                e,
                10,
                0,
                t.Yb(e, 10, 0, t.Nb(e, 11).transform(l.lastDestinations$)),
              ));
          },
          function (n, e) {
            n(e, 5, 0, t.Nb(e, 7).isPriorityShrink);
          },
        );
      }
      function Xl(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-last-destinations",
              [],
              null,
              null,
              null,
              Wl,
              Yl,
            )),
            t.xb(
              1,
              4243456,
              null,
              0,
              Zl,
              [Bn.b, Bl.a, yl.a, Pl.a, h.b, ge.a, t.h, d.a],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var Jl = t.ub("au3-fpk-last-destinations", Zl, Xl, {}, {}, []),
        Ql = l("nQV3"),
        ql = l("3+OJ"),
        nt = l("Lfy4"),
        et = l("+OYd"),
        lt = l("9N/+"),
        tt = l("9tRs"),
        it = l("9ZFG"),
        at = l("MddD");
      class ot {
        constructor(n, e, l, t, i, a, o) {
          ((this.routingService = e),
            (this.guidanceService = l),
            (this.preferenceService = t),
            (this.systemConfigService = i),
            (this.functionAvailabilityService = a),
            (this.cdr = o),
            (this.guidanceActive = Bn.c.Active),
            (this.mapOrientationOverview = xn.k.OVERVIEWTONEXTSTOPOVER),
            (this.fpkNaviRoutes = h.a),
            (this.disabledReasonEnum = at.e),
            (this.itemCategory = m.Z.List),
            (this.listTypeNoEndIcon = m.rb.ITEM_TYPE_NO_END_ICON),
            (this.listTypeSubMenu = m.rb.ITEM_TYPE_SUBMENU),
            (this.destroy$$ = new on.a(1)),
            (this.logger = n.getLogger("navi.FpkMainMenuComponent")),
            t.asiaTrafficStatusBar$
              .pipe(Object(an.a)(this.destroy$$))
              .subscribe((n) => {
                ((this.asiaTrafficBarVisible = n), this.cdr.markForCheck());
              }),
            m.gd.isBentley &&
              h.a.RightDrawerMenu ===
                this.routingService.currentRouteSnapshot &&
              this.routingService.closeRightDrawerMenu());
        }
        rightDrawerMenuKeyDown() {
          m.gd.isBentley &&
            this.routingService &&
            this.routingService.toggleCombiMenu();
        }
        ngAfterViewInit() {
          if (this.routingService.getLastRoutingMethod() === m.Yb.Forward) {
            const n = this.routingService.getLastActiveContext();
            (this.logger.info("ngAfterViewInit: last active context:", n),
              n === h.a.MapMain
                ? this.menuList.selectIndex(0)
                : n === h.a.Favorites
                  ? this.menuList.selectIndex(2)
                  : n === h.a.LastDestinations && this.menuList.selectIndex(1));
          }
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        mapItemTapped() {
          this.routingService.updateAndGoToActiveContext(h.a.MapMain);
        }
        lastDestinationItemTapped() {
          this.routingService.updateAndGoToActiveContext(h.a.LastDestinations);
        }
        favoritesItemTapped() {
          this.routingService.updateAndGoToActiveContext(h.a.Favorites);
        }
        stopGuidanceTapped() {
          this.guidanceService.stopGuidance();
        }
        mapOrientationTapped() {
          this.routingService.goTo(h.a.MainMenu.children.MapOrientation);
        }
        mapAutoZoomTapped() {
          this.routingService.goTo(h.a.MainMenu.children.AutoZoom);
        }
        mapContentTapped() {
          this.routingService.goTo(h.a.MainMenu.children.MapContent);
        }
        asiaTrafficBarTapped() {
          this.preferenceService.setAsiaTrafficStatusBarVisible(
            !this.asiaTrafficBarVisible,
          );
        }
      }
      var st = t.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.list__item[_ngcontent-%COMP%]{height:52px;margin:3px 0 4px;font-size:38px;padding:0 15px}.list__item--separator-below[_ngcontent-%COMP%]:not(:last-of-type){border-bottom:1px solid hsla(0,0%,100%,.25);margin-bottom:60px}.checkbox[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;font-size:38px}.checkbox__icon[_ngcontent-%COMP%]{margin-left:0;margin-right:30px;flex-shrink:0}.fpk-stage-small[_nghost-%COMP%]   .checkbox__icon[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .checkbox__icon[_ngcontent-%COMP%]{display:none}.checkbox__text[_ngcontent-%COMP%]{flex:1 1 auto}.checkbox__checkbox[_ngcontent-%COMP%]{margin-left:25px;margin-right:5px;flex-shrink:0}.component-layout-arabic[_nghost-%COMP%]   .checkbox[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .checkbox[_ngcontent-%COMP%]{flex-direction:row-reverse}.component-layout-arabic[_nghost-%COMP%]   .checkbox__icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .checkbox__icon[_ngcontent-%COMP%]{margin-left:30px;margin-right:0}.component-layout-arabic[_nghost-%COMP%]   .checkbox__checkbox[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .checkbox__checkbox[_ngcontent-%COMP%]{margin-right:25px;margin-left:5px}",
          ],
        ],
        data: {},
      });
      function ut(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["id", "fpk-stop-guidance"],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (n, e, l) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== n.component.stopGuidanceTapped() && t),
                  t
                );
              },
              ul.b,
              ul.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, ze.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              Re.a,
              [ze.a, [2, Ve.a], [2, C.a], d.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              je.a,
              [
                d.a,
                Be.b,
                Re.a,
                [2, Ve.a],
                [2, C.a],
                [2, Ze.a],
                [2, Ye.a],
                [2, u.a],
                t.z,
                Ue.a,
                t.l,
                [2, He.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ke.a, Ke.a, [[3, Ke.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              Ge.a,
              [
                t.l,
                We.a,
                t.h,
                Ke.a,
                [2, Xe.a],
                [2, Ve.b],
                [2, Ve.a],
                [2, Je.a],
                [2, Qe.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              114688,
              null,
              0,
              rl.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                type: [2, "type"],
              },
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              qe.a,
              [
                [2, je.a],
                [2, Ze.a],
                [2, nl.a],
                [2, Ge.a],
                [2, el.b],
                t.l,
                ll.a,
                tl.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              il.a,
              [[2, Ge.a], [2, je.a], [2, Be.b], al.a],
              null,
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, "fpk-stop-guidance"),
              n(e, 4, 0),
              n(e, 6, 0),
              n(
                e,
                7,
                0,
                "E9F7_navigation_cancel_red.webp",
                "Routenf\xfchrung stoppen",
                l.listTypeNoEndIcon,
              ));
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 6).markerClassEnabled);
          },
        );
      }
      function rt(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              17,
              "div",
              [
                ["class", "list__item checkbox"],
                ["id", "fpk-traffic-status-bar"],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (n, e, l) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== n.component.asiaTrafficBarTapped() && t),
                  t
                );
              },
              null,
              null,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, ze.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              Re.a,
              [ze.a, [2, Ve.a], [2, C.a], d.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              je.a,
              [
                d.a,
                Be.b,
                Re.a,
                [2, Ve.a],
                [2, C.a],
                [2, Ze.a],
                [2, Ye.a],
                [2, u.a],
                t.z,
                Ue.a,
                t.l,
                [2, He.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ke.a, Ke.a, [[3, Ke.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              Ge.a,
              [
                t.l,
                We.a,
                t.h,
                Ke.a,
                [2, Xe.a],
                [2, Ve.b],
                [2, Ve.a],
                [2, Je.a],
                [2, Qe.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              147456,
              null,
              0,
              qe.a,
              [
                [2, je.a],
                [2, Ze.a],
                [2, nl.a],
                [2, Ge.a],
                [2, el.b],
                t.l,
                ll.a,
                tl.b,
              ],
              null,
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              il.a,
              [[2, Ge.a], [2, je.a], [2, Be.b], al.a],
              null,
              null,
            ),
            (n()(),
            t.yb(
              9,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "checkbox__icon"],
                ["id", ""],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              en.b,
              en.a,
            )),
            t.xb(
              10,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              11,
              4243456,
              null,
              0,
              ln.b,
              [d.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (n()(),
            t.yb(
              12,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "checkbox__text"],
                ["developerText", "Traffic Status Bar"],
                ["id", ""],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              y.b,
              y.a,
            )),
            t.xb(
              13,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              14,
              245760,
              null,
              0,
              k.a,
              [[6, C.a], O.a, t.h, t.l, t.D, [2, S.a], [2, M.a], [2, P.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            t.yb(
              15,
              0,
              null,
              null,
              2,
              "au3-checkbox",
              [
                ["class", "checkbox__checkbox"],
                ["id", ""],
              ],
              null,
              null,
              null,
              Ql.b,
              Ql.a,
            )),
            t.xb(
              16,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              17,
              49152,
              null,
              0,
              ql.a,
              [],
              { id: [0, "id"], checked: [1, "checked"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, "fpk-traffic-status-bar"),
              n(e, 4, 0),
              n(e, 6, 0),
              n(e, 10, 0, ""),
              n(
                e,
                11,
                0,
                "E2DE_nav_traffic_status_bar_asia.webp",
                l.itemCategory,
              ),
              n(e, 13, 0, ""),
              n(e, 14, 0, "Traffic Status Bar", "", 1),
              n(e, 16, 0, ""),
              n(e, 17, 0, "", l.asiaTrafficBarVisible));
          },
          function (n, e) {
            (n(e, 0, 0, t.Nb(e, 6).markerClassEnabled),
              n(e, 9, 0, t.Nb(e, 11).iconComponentHidden),
              n(
                e,
                12,
                0,
                t.Nb(e, 14).backgroundColor,
                t.Nb(e, 14).fixedNumberOfLines,
                t.Nb(e, 14).mayContainLatinCharsForArabic,
                t.Nb(e, 14).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function ct(n) {
        return t.ac(
          2,
          [
            t.Tb(402653184, 1, { menuList: 0 }),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              84,
              "au3-fpk-screen",
              [["id", "Screen:NAV_FPK_MENU"]],
              null,
              null,
              null,
              T.b,
              T.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 114688, null, 0, A.a, [], null, null),
            t.Sb(256, null, w.a, A.b, []),
            (n()(),
            t.yb(
              5,
              0,
              null,
              0,
              80,
              "au3-combi-menu",
              [["id", ""]],
              null,
              null,
              null,
              nt.b,
              nt.a,
            )),
            t.xb(
              6,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              7,
              49152,
              null,
              0,
              et.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
            (n()(),
            t.yb(
              8,
              0,
              null,
              0,
              77,
              "au3-list",
              [],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              cl.b,
              cl.a,
            )),
            t.Sb(6144, null, dl.a, null, [bl.a]),
            t.xb(10, 16384, null, 0, pl.a, [t.l], null, null),
            t.xb(
              11,
              12828672,
              [
                [1, 4],
                ["MenuList", 4],
              ],
              1,
              bl.a,
              [
                [2, hl.a],
                [2, w.a],
                [8, null],
                [2, C.a],
                [2, ml.a],
                [2, gl.a],
                [2, Be.b],
                fl.i,
                t.z,
                t.h,
                d.a,
                xl.a,
                vl.a,
                [2, We.a],
                Ve.a,
                [2, fl.a],
              ],
              {
                showCursor: [0, "showCursor"],
                showSeparators: [1, "showSeparators"],
              },
              null,
            ),
            t.Tb(603979776, 2, { template: 0 }),
            (n()(),
            t.yb(
              13,
              0,
              null,
              0,
              11,
              "au3-list-route-item",
              [
                ["au3C2Cursor", ""],
                ["class", "list__item"],
                ["id", "fpk-map"],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "c2-cursor", null],
                [2, "state-active", null],
              ],
              [[null, "mib3Tap"]],
              function (n, e, l) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== n.component.mapItemTapped() && t),
                  t
                );
              },
              ul.b,
              ul.a,
            )),
            t.xb(
              14,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(15, 147456, null, 0, ze.a, [t.l, t.z], null, null),
            t.xb(
              16,
              147456,
              null,
              0,
              Re.a,
              [ze.a, [2, Ve.a], [2, C.a], d.a],
              null,
              null,
            ),
            t.xb(
              17,
              212992,
              null,
              0,
              je.a,
              [
                d.a,
                Be.b,
                Re.a,
                [2, Ve.a],
                [2, C.a],
                [2, Ze.a],
                [2, Ye.a],
                [2, u.a],
                t.z,
                Ue.a,
                t.l,
                [2, He.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ke.a, Ke.a, [[3, Ke.a]]),
            t.xb(
              19,
              4407296,
              null,
              0,
              Ge.a,
              [
                t.l,
                We.a,
                t.h,
                Ke.a,
                [2, Xe.a],
                [2, Ve.b],
                [2, Ve.a],
                [2, Je.a],
                [2, Qe.a],
              ],
              null,
              null,
            ),
            t.xb(
              20,
              114688,
              null,
              0,
              rl.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                type: [2, "type"],
              },
              null,
            ),
            t.xb(
              21,
              16384,
              null,
              0,
              lt.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
            t.xb(
              22,
              147456,
              null,
              0,
              qe.a,
              [
                [2, je.a],
                [2, Ze.a],
                [2, nl.a],
                [2, Ge.a],
                [2, el.b],
                t.l,
                ll.a,
                tl.b,
              ],
              null,
              null,
            ),
            t.xb(
              23,
              147456,
              null,
              0,
              il.a,
              [[2, Ge.a], [2, je.a], [2, Be.b], al.a],
              null,
              null,
            ),
            t.xb(
              24,
              16384,
              null,
              0,
              tt.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
            (n()(),
            t.yb(
              25,
              0,
              null,
              0,
              11,
              "au3-list-route-item",
              [
                ["au3C2Cursor", ""],
                ["class", "list__item"],
                ["id", "fpk-last-destination"],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "c2-cursor", null],
                [2, "state-active", null],
              ],
              [[null, "mib3Tap"]],
              function (n, e, l) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== n.component.lastDestinationItemTapped() && t),
                  t
                );
              },
              ul.b,
              ul.a,
            )),
            t.xb(
              26,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(27, 147456, null, 0, ze.a, [t.l, t.z], null, null),
            t.xb(
              28,
              147456,
              null,
              0,
              Re.a,
              [ze.a, [2, Ve.a], [2, C.a], d.a],
              null,
              null,
            ),
            t.xb(
              29,
              212992,
              null,
              0,
              je.a,
              [
                d.a,
                Be.b,
                Re.a,
                [2, Ve.a],
                [2, C.a],
                [2, Ze.a],
                [2, Ye.a],
                [2, u.a],
                t.z,
                Ue.a,
                t.l,
                [2, He.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ke.a, Ke.a, [[3, Ke.a]]),
            t.xb(
              31,
              4407296,
              null,
              0,
              Ge.a,
              [
                t.l,
                We.a,
                t.h,
                Ke.a,
                [2, Xe.a],
                [2, Ve.b],
                [2, Ve.a],
                [2, Je.a],
                [2, Qe.a],
              ],
              null,
              null,
            ),
            t.xb(
              32,
              114688,
              null,
              0,
              rl.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                type: [2, "type"],
              },
              null,
            ),
            t.xb(
              33,
              16384,
              null,
              0,
              lt.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
            t.xb(
              34,
              147456,
              null,
              0,
              qe.a,
              [
                [2, je.a],
                [2, Ze.a],
                [2, nl.a],
                [2, Ge.a],
                [2, el.b],
                t.l,
                ll.a,
                tl.b,
              ],
              null,
              null,
            ),
            t.xb(
              35,
              147456,
              null,
              0,
              il.a,
              [[2, Ge.a], [2, je.a], [2, Be.b], al.a],
              null,
              null,
            ),
            t.xb(
              36,
              16384,
              null,
              0,
              tt.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
            (n()(),
            t.yb(
              37,
              0,
              null,
              0,
              11,
              "au3-list-route-item",
              [
                ["au3C2Cursor", ""],
                ["class", "list__item list__item--separator-below"],
                ["id", "fpk-favorites"],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "c2-cursor", null],
                [2, "state-active", null],
              ],
              [[null, "mib3Tap"]],
              function (n, e, l) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== n.component.favoritesItemTapped() && t),
                  t
                );
              },
              ul.b,
              ul.a,
            )),
            t.xb(
              38,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(39, 147456, null, 0, ze.a, [t.l, t.z], null, null),
            t.xb(
              40,
              147456,
              null,
              0,
              Re.a,
              [ze.a, [2, Ve.a], [2, C.a], d.a],
              null,
              null,
            ),
            t.xb(
              41,
              212992,
              null,
              0,
              je.a,
              [
                d.a,
                Be.b,
                Re.a,
                [2, Ve.a],
                [2, C.a],
                [2, Ze.a],
                [2, Ye.a],
                [2, u.a],
                t.z,
                Ue.a,
                t.l,
                [2, He.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ke.a, Ke.a, [[3, Ke.a]]),
            t.xb(
              43,
              4407296,
              null,
              0,
              Ge.a,
              [
                t.l,
                We.a,
                t.h,
                Ke.a,
                [2, Xe.a],
                [2, Ve.b],
                [2, Ve.a],
                [2, Je.a],
                [2, Qe.a],
              ],
              null,
              null,
            ),
            t.xb(
              44,
              114688,
              null,
              0,
              rl.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                type: [2, "type"],
              },
              null,
            ),
            t.xb(
              45,
              16384,
              null,
              0,
              lt.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
            t.xb(
              46,
              147456,
              null,
              0,
              qe.a,
              [
                [2, je.a],
                [2, Ze.a],
                [2, nl.a],
                [2, Ge.a],
                [2, el.b],
                t.l,
                ll.a,
                tl.b,
              ],
              null,
              null,
            ),
            t.xb(
              47,
              147456,
              null,
              0,
              il.a,
              [[2, Ge.a], [2, je.a], [2, Be.b], al.a],
              null,
              null,
            ),
            t.xb(
              48,
              16384,
              null,
              0,
              tt.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
            (n()(), t.hb(16777216, [[2, 2]], 0, 2, null, ut)),
            t.xb(
              50,
              16384,
              null,
              0,
              E.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Pb(131072, E.b, [t.h]),
            (n()(),
            t.yb(
              52,
              0,
              null,
              0,
              9,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["id", "fpk-map-orientation"],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (n, e, l) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== n.component.mapOrientationTapped() && t),
                  t
                );
              },
              ul.b,
              ul.a,
            )),
            t.xb(
              53,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(54, 147456, null, 0, ze.a, [t.l, t.z], null, null),
            t.xb(
              55,
              147456,
              null,
              0,
              Re.a,
              [ze.a, [2, Ve.a], [2, C.a], d.a],
              null,
              null,
            ),
            t.xb(
              56,
              212992,
              null,
              0,
              je.a,
              [
                d.a,
                Be.b,
                Re.a,
                [2, Ve.a],
                [2, C.a],
                [2, Ze.a],
                [2, Ye.a],
                [2, u.a],
                t.z,
                Ue.a,
                t.l,
                [2, He.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ke.a, Ke.a, [[3, Ke.a]]),
            t.xb(
              58,
              4407296,
              null,
              0,
              Ge.a,
              [
                t.l,
                We.a,
                t.h,
                Ke.a,
                [2, Xe.a],
                [2, Ve.b],
                [2, Ve.a],
                [2, Je.a],
                [2, Qe.a],
              ],
              null,
              null,
            ),
            t.xb(
              59,
              114688,
              null,
              0,
              rl.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                type: [2, "type"],
              },
              null,
            ),
            t.xb(
              60,
              147456,
              null,
              0,
              qe.a,
              [
                [2, je.a],
                [2, Ze.a],
                [2, nl.a],
                [2, Ge.a],
                [2, el.b],
                t.l,
                ll.a,
                tl.b,
              ],
              null,
              null,
            ),
            t.xb(
              61,
              147456,
              null,
              0,
              il.a,
              [[2, Ge.a], [2, je.a], [2, Be.b], al.a],
              null,
              null,
            ),
            (n()(),
            t.yb(
              62,
              0,
              null,
              0,
              11,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["id", "fpk-map-auto-zoom"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (n, e, l) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== n.component.mapAutoZoomTapped() && t),
                  t
                );
              },
              ul.b,
              ul.a,
            )),
            t.xb(
              63,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(64, 147456, null, 0, ze.a, [t.l, t.z], null, null),
            t.xb(
              65,
              147456,
              null,
              0,
              Re.a,
              [ze.a, [2, Ve.a], [2, C.a], d.a],
              null,
              null,
            ),
            t.xb(
              66,
              147456,
              null,
              0,
              Ze.a,
              [it.a, t.h, d.a, [3, Ze.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.Pb(131072, E.b, [t.h]),
            t.xb(
              68,
              212992,
              null,
              0,
              je.a,
              [
                d.a,
                Be.b,
                Re.a,
                [2, Ve.a],
                [2, C.a],
                [2, Ze.a],
                [2, Ye.a],
                [2, u.a],
                t.z,
                Ue.a,
                t.l,
                [2, He.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ke.a, Ke.a, [[3, Ke.a]]),
            t.xb(
              70,
              4407296,
              null,
              0,
              Ge.a,
              [
                t.l,
                We.a,
                t.h,
                Ke.a,
                [2, Xe.a],
                [2, Ve.b],
                [2, Ve.a],
                [2, Je.a],
                [2, Qe.a],
              ],
              null,
              null,
            ),
            t.xb(
              71,
              114688,
              null,
              0,
              rl.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                type: [2, "type"],
              },
              null,
            ),
            t.xb(
              72,
              147456,
              null,
              0,
              qe.a,
              [
                [2, je.a],
                [2, Ze.a],
                [2, nl.a],
                [2, Ge.a],
                [2, el.b],
                t.l,
                ll.a,
                tl.b,
              ],
              null,
              null,
            ),
            t.xb(
              73,
              147456,
              null,
              0,
              il.a,
              [[2, Ge.a], [2, je.a], [2, Be.b], al.a],
              null,
              null,
            ),
            (n()(), t.hb(16777216, [[2, 2]], 0, 1, null, rt)),
            t.xb(
              75,
              16384,
              null,
              0,
              E.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            t.yb(
              76,
              0,
              null,
              0,
              9,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["id", "fpk-map-content"],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (n, e, l) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== n.component.mapContentTapped() && t),
                  t
                );
              },
              ul.b,
              ul.a,
            )),
            t.xb(
              77,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(78, 147456, null, 0, ze.a, [t.l, t.z], null, null),
            t.xb(
              79,
              147456,
              null,
              0,
              Re.a,
              [ze.a, [2, Ve.a], [2, C.a], d.a],
              null,
              null,
            ),
            t.xb(
              80,
              212992,
              null,
              0,
              je.a,
              [
                d.a,
                Be.b,
                Re.a,
                [2, Ve.a],
                [2, C.a],
                [2, Ze.a],
                [2, Ye.a],
                [2, u.a],
                t.z,
                Ue.a,
                t.l,
                [2, He.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ke.a, Ke.a, [[3, Ke.a]]),
            t.xb(
              82,
              4407296,
              null,
              0,
              Ge.a,
              [
                t.l,
                We.a,
                t.h,
                Ke.a,
                [2, Xe.a],
                [2, Ve.b],
                [2, Ve.a],
                [2, Je.a],
                [2, Qe.a],
              ],
              null,
              null,
            ),
            t.xb(
              83,
              114688,
              null,
              0,
              rl.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                type: [2, "type"],
              },
              null,
            ),
            t.xb(
              84,
              147456,
              null,
              0,
              qe.a,
              [
                [2, je.a],
                [2, Ze.a],
                [2, nl.a],
                [2, Ge.a],
                [2, el.b],
                t.l,
                ll.a,
                tl.b,
              ],
              null,
              null,
            ),
            t.xb(
              85,
              147456,
              null,
              0,
              il.a,
              [[2, Ge.a], [2, je.a], [2, Be.b], al.a],
              null,
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 2, 0, "Screen:NAV_FPK_MENU"),
              n(e, 3, 0),
              n(e, 6, 0, ""),
              n(e, 7, 0, "Navigation"),
              n(e, 11, 0, !0, !1),
              n(e, 14, 0, "fpk-map"),
              n(e, 17, 0),
              n(e, 19, 0),
              n(e, 20, 0, "E0BF_map.webp", "Karte", l.listTypeNoEndIcon),
              n(
                e,
                21,
                0,
                l.routingService.getLastActiveContext() ===
                  l.fpkNaviRoutes.MapMain,
              ),
              n(
                e,
                24,
                0,
                l.routingService.getLastActiveContext() ===
                  l.fpkNaviRoutes.MapMain,
              ),
              n(e, 26, 0, "fpk-last-destination"),
              n(e, 29, 0),
              n(e, 31, 0),
              n(
                e,
                32,
                0,
                "E0C3_navigation_letzteziele.webp",
                "Letzte Ziele",
                l.listTypeNoEndIcon,
              ),
              n(
                e,
                33,
                0,
                l.routingService.getLastActiveContext() ===
                  l.fpkNaviRoutes.LastDestinations,
              ),
              n(
                e,
                36,
                0,
                l.routingService.getLastActiveContext() ===
                  l.fpkNaviRoutes.LastDestinations,
              ),
              n(e, 38, 0, "fpk-favorites"),
              n(e, 41, 0),
              n(e, 43, 0),
              n(
                e,
                44,
                0,
                "E0FC_favoriten.webp",
                "Favoriten",
                l.listTypeNoEndIcon,
              ),
              n(
                e,
                45,
                0,
                l.routingService.getLastActiveContext() ===
                  l.fpkNaviRoutes.Favorites,
              ),
              n(
                e,
                48,
                0,
                l.routingService.getLastActiveContext() ===
                  l.fpkNaviRoutes.Favorites,
              ),
              n(
                e,
                50,
                0,
                t.Yb(
                  e,
                  50,
                  0,
                  t.Nb(e, 51).transform(l.guidanceService.guidanceState$),
                ) == l.guidanceActive,
              ),
              n(e, 53, 0, "fpk-map-orientation"),
              n(e, 56, 0),
              n(e, 58, 0),
              n(
                e,
                59,
                0,
                "E0C7_navigation_kompassrose.webp",
                "Kartenausrichtung",
                l.listTypeSubMenu,
              ),
              n(e, 63, 0, "fpk-map-auto-zoom"),
              n(
                e,
                66,
                0,
                t.Yb(
                  e,
                  66,
                  0,
                  t.Nb(e, 67).transform(l.preferenceService.mapMode$),
                ) == l.mapOrientationOverview,
              ),
              n(e, 68, 0),
              n(e, 70, 0),
              n(
                e,
                71,
                0,
                "E0B9_navigation_autozoom.webp",
                "Automatischer Zoom",
                l.listTypeSubMenu,
              ),
              n(e, 75, 0, l.systemConfigService.isAsiaRegion()),
              n(e, 77, 0, "fpk-map-content"),
              n(e, 80, 0),
              n(e, 82, 0),
              n(
                e,
                83,
                0,
                "E223_navigation_map_content.webp",
                "Karteninhalt",
                l.listTypeSubMenu,
              ));
          },
          function (n, e) {
            (n(e, 8, 0, t.Nb(e, 11).showLineNumbers),
              n(
                e,
                13,
                0,
                t.Nb(e, 19).markerClassEnabled,
                t.Nb(e, 21).mib3Active,
                t.Nb(e, 24).mib3Active,
              ),
              n(
                e,
                25,
                0,
                t.Nb(e, 31).markerClassEnabled,
                t.Nb(e, 33).mib3Active,
                t.Nb(e, 36).mib3Active,
              ),
              n(
                e,
                37,
                0,
                t.Nb(e, 43).markerClassEnabled,
                t.Nb(e, 45).mib3Active,
                t.Nb(e, 48).mib3Active,
              ),
              n(e, 52, 0, t.Nb(e, 58).markerClassEnabled),
              n(
                e,
                62,
                0,
                t.Nb(e, 66).combinedDisabled,
                t.Nb(e, 66).useBrighterIcon,
                t.Nb(e, 70).markerClassEnabled,
              ),
              n(e, 76, 0, t.Nb(e, 82).markerClassEnabled));
          },
        );
      }
      function dt(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-main-menu",
              [],
              null,
              [["screen", "keydown.KeyD"]],
              function (n, e, l) {
                var i = !0;
                return (
                  "screen:keydown.KeyD" === e &&
                    (i = !1 !== t.Nb(n, 1).rightDrawerMenuKeyDown() && i),
                  i
                );
              },
              ct,
              st,
            )),
            t.xb(
              1,
              4374528,
              null,
              0,
              ot,
              [d.a, h.b, Bn.b, re.a, c.a, se.a, t.h],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var bt = t.ub("au3-fpk-main-menu", ot, dt, {}, {}, []),
        pt = l("TJMC"),
        ht = l("JIjU"),
        mt = l("J+dc");
      class gt {
        constructor(n, e, l, t, i, a) {
          ((this.routingService = n),
            (this.preferenceService = e),
            (this.guidanceService = l),
            (this.popupManager = t),
            (this.cdr = i),
            (this.mapOrientationData = [
              { value: xn.k._2DDRIVE, text: "2D-Fahrkarte" },
              { value: xn.k._2DNORTHUP, text: "2D-Nordkarte" },
              { value: xn.k._3D, text: "3D-Fahrtkarte" },
              {
                value: xn.k.OVERVIEWTONEXTSTOPOVER,
                text: "\xdcbersicht",
                guidanceCondition: !0,
              },
            ]),
            (this.selectedOrientation = xn.k._2DNORTHUP),
            (this.preferenceObjectViewTypeEnum = xn.k),
            (this.environment = m.gd),
            (this.onDestroy$$ = new on.a(1)),
            (this.logger = a.getLogger("navi.FpkMapOrientationComponent")));
        }
        ngOnInit() {
          (this.preferenceService.mapMode$
            .pipe(Object(an.a)(this.onDestroy$$))
            .subscribe((n) => {
              ((this.selectedOrientation = n), this.cdr.markForCheck());
            }),
            this.preferenceService.mapMode$
              .pipe(Object(an.a)(this.onDestroy$$), Object(mt.a)(1))
              .subscribe((n) => {
                const e = this.mapOrientationData.findIndex(
                  (e) => e.value === n,
                );
                -1 !== e
                  ? this.listComponent.selectIndex(e)
                  : this.logger.warn(
                      `ngOnInit: no item found for value: '${n}'`,
                    );
              }));
        }
        ngOnDestroy() {
          this.onDestroy$$.next();
        }
        selectionChanged(n) {
          ((this.selectedOrientation = n),
            this.preferenceService.setMapMode(this.selectedOrientation),
            this.guidanceService.guidanceState !== Bn.c.Active &&
              n === xn.k.OVERVIEWTONEXTSTOPOVER &&
              this.popupManager.request(
                m.Ob.POPUP_FPK_NAV_DISABLE_OVERVIEW_MAP,
              ),
            this.routingService.goBack());
        }
      }
      var ft = t.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.list-item-map-orientation[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 15px;height:52px;margin:3px 0 4px}.list-item-map-orientation[_ngcontent-%COMP%]   .list-item-map-orientation__text[_ngcontent-%COMP%]{font-size:38px;flex:1 1 auto}.list-item-map-orientation[_ngcontent-%COMP%]   .list-item-map-orientation__radiobutton[_ngcontent-%COMP%]{flex-shrink:0}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}",
          ],
        ],
        data: {},
      });
      function xt(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              14,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              13,
              "div",
              [["class", "list-item-map-orientation"]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (n, e, l) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t =
                      !1 !==
                        n.component.selectionChanged(
                          n.context.$implicit.value,
                        ) && t),
                  t
                );
              },
              null,
              null,
            )),
            t.xb(2, 147456, null, 0, ze.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              Re.a,
              [ze.a, [2, Ve.a], [2, C.a], d.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              je.a,
              [
                d.a,
                Be.b,
                Re.a,
                [2, Ve.a],
                [2, C.a],
                [2, Ze.a],
                [2, Ye.a],
                [2, u.a],
                t.z,
                Ue.a,
                t.l,
                [2, He.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ke.a, Ke.a, [[3, Ke.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              Ge.a,
              [
                t.l,
                We.a,
                t.h,
                Ke.a,
                [2, Xe.a],
                [2, Ve.b],
                [2, Ve.a],
                [2, Je.a],
                [2, Qe.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              147456,
              null,
              0,
              qe.a,
              [
                [2, je.a],
                [2, Ze.a],
                [2, nl.a],
                [2, Ge.a],
                [2, el.b],
                t.l,
                ll.a,
                tl.b,
              ],
              null,
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              il.a,
              [[2, Ge.a], [2, je.a], [2, Be.b], al.a],
              null,
              null,
            ),
            (n()(),
            t.yb(
              9,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "list-item-map-orientation__text"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              y.b,
              y.a,
            )),
            t.xb(
              10,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              11,
              245760,
              null,
              0,
              k.a,
              [[6, C.a], O.a, t.h, t.l, t.D, [2, S.a], [2, M.a], [2, P.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            t.yb(
              12,
              0,
              null,
              null,
              2,
              "au3-radio-button",
              [
                ["class", "list-item-map-orientation__radiobutton"],
                ["id", ""],
              ],
              null,
              null,
              null,
              pt.b,
              pt.a,
            )),
            t.xb(
              13,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              14,
              180224,
              null,
              0,
              ht.a,
              [[2, Ze.a], t.h],
              {
                id: [0, "id"],
                group: [1, "group"],
                value: [2, "value"],
                checked: [3, "checked"],
              },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 4, 0),
              n(e, 6, 0),
              n(
                e,
                10,
                0,
                e.context.$implicit.value,
                l.preferenceObjectViewTypeEnum,
              ),
              n(
                e,
                11,
                0,
                e.context.$implicit.text,
                e.context.$implicit.value,
                1,
              ),
              n(e, 13, 0, ""),
              n(
                e,
                14,
                0,
                "",
                "mapOrientation",
                e.context.$implicit.value,
                e.context.$implicit.value === l.selectedOrientation,
              ));
          },
          function (n, e) {
            (n(e, 1, 0, t.Nb(e, 6).markerClassEnabled),
              n(
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
      function vt(n) {
        return t.ac(
          2,
          [
            t.Tb(402653184, 1, { listComponent: 0 }),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              12,
              "au3-fpk-screen",
              [["id", "Screen:NAV_FPK_SETTINGS_ORIENTATION"]],
              null,
              null,
              null,
              T.b,
              T.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 114688, null, 0, A.a, [], null, null),
            t.Sb(256, null, w.a, A.b, []),
            (n()(),
            t.yb(
              5,
              0,
              null,
              0,
              2,
              "au3-fpk-title-line",
              [],
              [[2, "priority-shrink", null]],
              null,
              null,
              L.b,
              L.a,
            )),
            t.xb(
              6,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              7,
              49152,
              null,
              0,
              D.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
                showBreadcrumbsIcon: [2, "showBreadcrumbsIcon"],
                showLeftDrawerIconWithActivatedBackground: [
                  3,
                  "showLeftDrawerIconWithActivatedBackground",
                ],
              },
              null,
            ),
            (n()(),
            t.yb(
              8,
              0,
              null,
              0,
              5,
              "au3-list",
              [],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              cl.b,
              cl.a,
            )),
            t.Sb(6144, null, dl.a, null, [bl.a]),
            t.xb(10, 16384, null, 0, pl.a, [t.l], null, null),
            t.xb(
              11,
              12828672,
              [[1, 4]],
              1,
              bl.a,
              [
                [2, hl.a],
                [2, w.a],
                [8, null],
                [2, C.a],
                [2, ml.a],
                [2, gl.a],
                [2, Be.b],
                fl.i,
                t.z,
                t.h,
                d.a,
                xl.a,
                vl.a,
                [2, We.a],
                Ve.a,
                [2, fl.a],
              ],
              {
                showCursor: [0, "showCursor"],
                showSeparators: [1, "showSeparators"],
                items: [2, "items"],
              },
              null,
            ),
            t.Tb(603979776, 2, { template: 0 }),
            (n()(), t.hb(0, [[2, 2]], 0, 0, null, xt)),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 2, 0, "Screen:NAV_FPK_SETTINGS_ORIENTATION"),
              n(e, 3, 0),
              n(e, 6, 0, "fpk-map-orientation"),
              n(
                e,
                7,
                0,
                "Navigation",
                "Kartenausrichtung",
                !0,
                l.environment.isBentley,
              ),
              n(e, 11, 0, !0, !1, l.mapOrientationData));
          },
          function (n, e) {
            (n(e, 5, 0, t.Nb(e, 7).isPriorityShrink),
              n(e, 8, 0, t.Nb(e, 11).showLineNumbers));
          },
        );
      }
      function _t(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-map-orientation",
              [],
              null,
              null,
              null,
              vt,
              ft,
            )),
            t.xb(
              1,
              245760,
              null,
              0,
              gt,
              [h.b, re.a, Bn.b, ge.a, t.h, d.a],
              null,
              null,
            ),
          ],
          function (n, e) {
            n(e, 1, 0);
          },
          null,
        );
      }
      var yt = t.ub("au3-fpk-map-orientation", gt, _t, {}, {}, []),
        Ct = l("O1dD");
      class kt {
        constructor(n, e, l, t) {
          ((this.routingService = n),
            (this.preferenceService = e),
            (this.cdr = l),
            (this.autoZoomData = [
              {
                value: xn.g.AUTOMANEUVERZOOM,
                textId: Ct.a.On,
                devText: Ct.a.On,
              },
              {
                value: xn.g.MANEUVERZOOM,
                textId: Ct.a.Kreuzung,
                devText: Ct.a.Kreuzung,
              },
              { value: xn.g.OFF, textId: Ct.a.Off, devText: Ct.a.Off },
            ]),
            (this.selectedAutoZoom = xn.g.OFF),
            (this.autozoomTextsEnum = Ct.a),
            (this.environment = m.gd),
            (this.onDestroy$$ = new on.a(1)),
            (this.logger = t.getLogger("navi.FpkAutoZoomComponent")));
        }
        ngOnInit() {
          (this.preferenceService.autoZoom$
            .pipe(Object(an.a)(this.onDestroy$$))
            .subscribe((n) => {
              ((this.selectedAutoZoom = n), this.cdr.markForCheck());
            }),
            this.preferenceService.autoZoom$
              .pipe(Object(an.a)(this.onDestroy$$), Object(mt.a)(1))
              .subscribe((n) => {
                const e = this.autoZoomData.findIndex((e) => e.value === n);
                -1 !== e
                  ? this.listComponent.selectIndex(e)
                  : this.logger.warn(
                      `ngOnInit: no item found for value: '${n}'`,
                    );
              }));
        }
        ngOnDestroy() {
          this.onDestroy$$.next();
        }
        selectionChanged(n) {
          ((this.selectedAutoZoom = n),
            this.preferenceService.setAutoZoom(this.selectedAutoZoom),
            this.routingService.goBack());
        }
      }
      var Ot = t.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.list-item-auto-zoom[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 15px;height:52px;margin:3px 0 4px}.list-item-auto-zoom[_ngcontent-%COMP%]   .list-item-auto-zoom__text[_ngcontent-%COMP%]{font-size:38px;flex:1 1 auto}.list-item-auto-zoom[_ngcontent-%COMP%]   .list-item-auto-zoom__radiobutton[_ngcontent-%COMP%]{flex-shrink:0}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}",
          ],
        ],
        data: {},
      });
      function St(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              13,
              "div",
              [["class", "list-item-auto-zoom"]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (n, e, l) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t =
                      !1 !==
                        n.component.selectionChanged(
                          n.context.$implicit.value,
                        ) && t),
                  t
                );
              },
              null,
              null,
            )),
            t.xb(1, 147456, null, 0, ze.a, [t.l, t.z], null, null),
            t.xb(
              2,
              147456,
              null,
              0,
              Re.a,
              [ze.a, [2, Ve.a], [2, C.a], d.a],
              null,
              null,
            ),
            t.xb(
              3,
              212992,
              null,
              0,
              je.a,
              [
                d.a,
                Be.b,
                Re.a,
                [2, Ve.a],
                [2, C.a],
                [2, Ze.a],
                [2, Ye.a],
                [2, u.a],
                t.z,
                Ue.a,
                t.l,
                [2, He.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ke.a, Ke.a, [[3, Ke.a]]),
            t.xb(
              5,
              4407296,
              null,
              0,
              Ge.a,
              [
                t.l,
                We.a,
                t.h,
                Ke.a,
                [2, Xe.a],
                [2, Ve.b],
                [2, Ve.a],
                [2, Je.a],
                [2, Qe.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              147456,
              null,
              0,
              qe.a,
              [
                [2, je.a],
                [2, Ze.a],
                [2, nl.a],
                [2, Ge.a],
                [2, el.b],
                t.l,
                ll.a,
                tl.b,
              ],
              null,
              null,
            ),
            t.xb(
              7,
              147456,
              null,
              0,
              il.a,
              [[2, Ge.a], [2, je.a], [2, Be.b], al.a],
              null,
              null,
            ),
            (n()(),
            t.yb(
              8,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "list-item-auto-zoom__text"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              y.b,
              y.a,
            )),
            t.xb(
              9,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              10,
              245760,
              null,
              0,
              k.a,
              [[6, C.a], O.a, t.h, t.l, t.D, [2, S.a], [2, M.a], [2, P.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            t.yb(
              11,
              0,
              null,
              null,
              2,
              "au3-radio-button",
              [
                ["class", "list-item-auto-zoom__radiobutton"],
                ["id", ""],
              ],
              null,
              null,
              null,
              pt.b,
              pt.a,
            )),
            t.xb(
              12,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              13,
              180224,
              null,
              0,
              ht.a,
              [[2, Ze.a], t.h],
              {
                id: [0, "id"],
                group: [1, "group"],
                value: [2, "value"],
                checked: [3, "checked"],
              },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 3, 0),
              n(e, 5, 0),
              n(e, 9, 0, e.context.$implicit.textId, l.autozoomTextsEnum),
              n(
                e,
                10,
                0,
                e.context.$implicit.devText,
                e.context.$implicit.textId,
                1,
              ),
              n(e, 12, 0, ""),
              n(
                e,
                13,
                0,
                "",
                "autoZoom",
                e.context.$implicit.value,
                e.context.$implicit.value === l.selectedAutoZoom,
              ));
          },
          function (n, e) {
            (n(e, 0, 0, t.Nb(e, 5).markerClassEnabled),
              n(
                e,
                8,
                0,
                t.Nb(e, 10).backgroundColor,
                t.Nb(e, 10).fixedNumberOfLines,
                t.Nb(e, 10).mayContainLatinCharsForArabic,
                t.Nb(e, 10).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function Mt(n) {
        return t.ac(
          2,
          [
            t.Tb(402653184, 1, { listComponent: 0 }),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              12,
              "au3-fpk-screen",
              [["id", "Screen:NAV_FPK_SETTINGS_AUTOZOOM"]],
              null,
              null,
              null,
              T.b,
              T.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 114688, null, 0, A.a, [], null, null),
            t.Sb(256, null, w.a, A.b, []),
            (n()(),
            t.yb(
              5,
              0,
              null,
              0,
              2,
              "au3-fpk-title-line",
              [],
              [[2, "priority-shrink", null]],
              null,
              null,
              L.b,
              L.a,
            )),
            t.xb(
              6,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              7,
              49152,
              null,
              0,
              D.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
                showBreadcrumbsIcon: [2, "showBreadcrumbsIcon"],
                showLeftDrawerIconWithActivatedBackground: [
                  3,
                  "showLeftDrawerIconWithActivatedBackground",
                ],
              },
              null,
            ),
            (n()(),
            t.yb(
              8,
              0,
              null,
              0,
              5,
              "au3-list",
              [],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              cl.b,
              cl.a,
            )),
            t.Sb(6144, null, dl.a, null, [bl.a]),
            t.xb(10, 16384, null, 0, pl.a, [t.l], null, null),
            t.xb(
              11,
              12828672,
              [[1, 4]],
              1,
              bl.a,
              [
                [2, hl.a],
                [2, w.a],
                [8, null],
                [2, C.a],
                [2, ml.a],
                [2, gl.a],
                [2, Be.b],
                fl.i,
                t.z,
                t.h,
                d.a,
                xl.a,
                vl.a,
                [2, We.a],
                Ve.a,
                [2, fl.a],
              ],
              {
                showCursor: [0, "showCursor"],
                showSeparators: [1, "showSeparators"],
                items: [2, "items"],
              },
              null,
            ),
            t.Tb(603979776, 2, { template: 0 }),
            (n()(), t.hb(0, [[2, 2]], 0, 0, null, St)),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 2, 0, "Screen:NAV_FPK_SETTINGS_AUTOZOOM"),
              n(e, 3, 0),
              n(e, 6, 0, "fpk-auto-zoom"),
              n(
                e,
                7,
                0,
                "Navigation",
                "Automatischer Zoom",
                !0,
                l.environment.isBentley,
              ),
              n(e, 11, 0, !0, !1, l.autoZoomData));
          },
          function (n, e) {
            (n(e, 5, 0, t.Nb(e, 7).isPriorityShrink),
              n(e, 8, 0, t.Nb(e, 11).showLineNumbers));
          },
        );
      }
      function Pt(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-auto-zoom",
              [],
              null,
              null,
              null,
              Mt,
              Ot,
            )),
            t.xb(1, 245760, null, 0, kt, [h.b, re.a, t.h, d.a], null, null),
          ],
          function (n, e) {
            n(e, 1, 0);
          },
          null,
        );
      }
      var Nt = t.ub("au3-fpk-auto-zoom", kt, Pt, {}, {}, []),
        Tt = l("E7cc"),
        At = l("uBIV"),
        wt = l("tZUG");
      class Lt {
        constructor(n, e, l, t, i) {
          ((this.poicategoriesService = n),
            (this.preferenceService = e),
            (this.functionAvailabilityService = l),
            (this.lockingService = t),
            (this.cdr = i),
            (this.iconCategory = m.Z.List),
            (this.staticCheckBoxesEnum = wt.b),
            (this.popupIdsEnum = m.Ob),
            (this.environment = m.gd),
            (this.mapAdaptionLocking = new Fn.a(!1)),
            (this.showAllItem = {
              id: wt.b.ShowAll,
              developerText: wt.b.ShowAll,
              checked: !1,
              disabled: !1,
            }),
            (this.landmarks3DItem = {
              id: wt.b.Landmarks3d,
              developerText: wt.b.Landmarks3d,
              icon: "E9F9_navigation_3D_sehenswuerdigkeiten.webp",
              checked: !1,
              disabled: !1,
              blocking: {
                lockingKey: { type: m.Eb.MAP_ADAPTION },
                reason: m.Ob.POPUP_FPK_TOAST_LOCK_DEFAULT,
              },
            }),
            (this.cityModel3DItem = {
              id: wt.b.CityModel3d,
              developerText: wt.b.CityModel3d,
              icon: "E9FA_navigation_3D_citymodelle.webp",
              checked: !1,
              disabled: !1,
              blocking: {
                lockingKey: { type: m.Eb.MAP_ADAPTION },
                reason: m.Ob.POPUP_FPK_TOAST_LOCK_DEFAULT,
              },
            }),
            (this.favoritesItem = {
              id: wt.b.Favorites,
              developerText: wt.b.Favorites,
              icon: "E0FC_favoriten.webp",
              checked: !1,
              disabled: !1,
            }),
            (this.specialDestinationsItem = {
              id: wt.b.SpecialDestinations,
              developerText: wt.b.SpecialDestinations,
              icon: "E217_map_poi_generic.webp",
              checked: !1,
              disabled: !1,
            }),
            (this.items = [
              this.showAllItem,
              this.landmarks3DItem,
              this.cityModel3DItem,
              this.favoritesItem,
              this.specialDestinationsItem,
            ]),
            (this.destroy$$ = new on.a(1)));
        }
        ngOnInit() {
          (this.preferenceService.staticCategories$
            .pipe(Object(an.a)(this.destroy$$))
            .subscribe((n) => {
              ((this.landmarks3DItem.checked = n.landmarks),
                (this.cityModel3DItem.checked = n.buildings),
                (this.favoritesItem.checked = n.favorites),
                this.setShowAllCheckbox(),
                this.cdr.markForCheck());
            }),
            Object(zn.b)(
              this.preferenceService.visibleDynamicCategories$.pipe(
                Object(H.a)((n) => !!n),
              ),
              this.poicategoriesService.mapPoiCategories$,
            )
              .pipe(Object(an.a)(this.destroy$$))
              .subscribe(([n, e]) => {
                this.dynamicCategories = e;
                let l = !0;
                for (const t of e)
                  if (!n.some((n) => n.id === t.id)) {
                    l = !1;
                    break;
                  }
                ((this.specialDestinationsItem.checked = l),
                  this.setShowAllCheckbox(),
                  this.cdr.markForCheck());
              }),
            Object(zn.b)([
              this.preferenceService.mapStyle$,
              this.functionAvailabilityService.satelliteMapAvailability$,
            ])
              .pipe(
                Object(K.a)(
                  ([n, e]) => e.availability && n === xn.j.SATELLITEMAP,
                ),
                Object(an.a)(this.destroy$$),
              )
              .subscribe((n) => {
                ((this.landmarks3DItem.disabled = n),
                  (this.cityModel3DItem.disabled = n));
              }),
            this.lockingService
              .getProperty({ type: m.Eb.MAP_ADAPTION })
              .pipe(
                Object(jl.a)((n) => n.lock$),
                Object(an.a)(this.destroy$$),
              )
              .subscribe((n) => {
                (this.mapAdaptionLocking.next(n),
                  (this.showAllItem.checked =
                    this.isEveryEnabledItemChecked()));
              }));
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        toggleCheckmark(n, e) {
          let l;
          switch (n) {
            case wt.b.ShowAll:
              ((l = e ? this.dynamicCategories : []),
                this.preferenceService.setCategories(
                  {
                    landmarks:
                      this.mapAdaptionLocking.getValue() ||
                      this.landmarks3DItem.disabled
                        ? this.landmarks3DItem.checked
                        : e,
                    buildings:
                      this.mapAdaptionLocking.getValue() ||
                      this.cityModel3DItem.disabled
                        ? this.cityModel3DItem.checked
                        : e,
                    favorites: e,
                  },
                  l,
                ));
              break;
            case wt.b.Landmarks3d:
              this.preferenceService.setCategories({
                landmarks: e,
                buildings: this.cityModel3DItem.checked,
                favorites: this.favoritesItem.checked,
              });
              break;
            case wt.b.CityModel3d:
              this.preferenceService.setCategories({
                landmarks: this.landmarks3DItem.checked,
                buildings: e,
                favorites: this.favoritesItem.checked,
              });
              break;
            case wt.b.Favorites:
              this.preferenceService.setCategories({
                landmarks: this.landmarks3DItem.checked,
                buildings: this.cityModel3DItem.checked,
                favorites: e,
              });
              break;
            case wt.b.SpecialDestinations:
              ((l = e ? this.dynamicCategories : []),
                this.preferenceService.setCategories(
                  {
                    landmarks: this.landmarks3DItem.checked,
                    buildings: this.cityModel3DItem.checked,
                    favorites: this.favoritesItem.checked,
                  },
                  l,
                ));
          }
        }
        setShowAllCheckbox() {
          this.showAllItem.checked = this.isEveryEnabledItemChecked();
        }
        isEveryEnabledItemChecked() {
          for (let n = 1; n < this.items.length; n++)
            if (
              !this.items[n].disabled &&
              !(
                (Object(m.wd)(this.items[n].blocking) &&
                  this.mapAdaptionLocking.getValue()) ||
                this.items[n].checked
              )
            )
              return !1;
          return !0;
        }
      }
      var Dt = t.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;height:100%}.list-item-map-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;padding:0 15px;height:52px;margin:3px 0 4px}.list-item-map-content.state-disabled[_ngcontent-%COMP%]{filter:grayscale(100%) brightness(.4)}.list-item-map-content__icon[_ngcontent-%COMP%]{width:40px;height:40px;margin-right:15px;margin-left:0;flex-shrink:0}.list-item-map-content__text[_ngcontent-%COMP%]{font-size:38px;flex:1 1 auto}.list-item-map-content__checkbox[_ngcontent-%COMP%]{font-size:38px;margin-right:0;flex-shrink:0}.component-layout-latin[_nghost-%COMP%]   .list-item-map-content[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list-item-map-content[_ngcontent-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%]   .list-item-map-content[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list-item-map-content[_ngcontent-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .list-item-map-content__icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list-item-map-content__icon[_ngcontent-%COMP%]{margin-left:15px;margin-right:0}.component-layout-arabic[_nghost-%COMP%]   .list-item-map-content__checkbox[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list-item-map-content__checkbox[_ngcontent-%COMP%]{font-size:38px;margin-left:0}",
          ],
        ],
        data: {},
      });
      function It(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "list-item-map-content__icon"],
                ["id", ""],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              en.b,
              en.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              4243456,
              null,
              0,
              ln.b,
              [d.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, ""),
              n(e, 2, 0, e.parent.context.$implicit.icon, l.iconCategory));
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 2).iconComponentHidden);
          },
        );
      }
      function Et(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              18,
              "div",
              [
                ["class", "list-item-map-content"],
                ["id", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (n, e, l) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t =
                      !1 !==
                        n.component.toggleCheckmark(
                          n.context.$implicit.id,
                          !n.context.$implicit.checked,
                        ) && t),
                  t
                );
              },
              null,
              null,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, ze.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              Re.a,
              [ze.a, [2, Ve.a], [2, C.a], d.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              Ze.a,
              [it.a, t.h, d.a, [3, Ze.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              je.a,
              [
                d.a,
                Be.b,
                Re.a,
                [2, Ve.a],
                [2, C.a],
                [2, Ze.a],
                [2, Ye.a],
                [2, u.a],
                t.z,
                Ue.a,
                t.l,
                [2, He.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ke.a, Ke.a, [[3, Ke.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              Ge.a,
              [
                t.l,
                We.a,
                t.h,
                Ke.a,
                [2, Xe.a],
                [2, Ve.b],
                [2, Ve.a],
                [2, Je.a],
                [2, Qe.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              671744,
              null,
              0,
              Tt.a,
              [Ze.a, fl.i, [2, fl.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              qe.a,
              [
                [2, je.a],
                [2, Ze.a],
                [2, nl.a],
                [2, Ge.a],
                [2, el.b],
                t.l,
                ll.a,
                tl.b,
              ],
              null,
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              il.a,
              [[2, Ge.a], [2, je.a], [2, Be.b], al.a],
              null,
              null,
            ),
            (n()(), t.hb(16777216, [[1, 2]], null, 1, null, It)),
            t.xb(
              12,
              16384,
              null,
              0,
              E.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            t.yb(
              13,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "list-item-map-content__text"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              y.b,
              y.a,
            )),
            t.xb(
              14,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              15,
              245760,
              null,
              0,
              k.a,
              [[6, C.a], O.a, t.h, t.l, t.D, [2, S.a], [2, M.a], [2, P.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            t.yb(
              16,
              0,
              null,
              null,
              2,
              "au3-checkbox",
              [
                ["class", "list-item-map-content__checkbox"],
                ["id", ""],
              ],
              null,
              null,
              null,
              Ql.b,
              Ql.a,
            )),
            t.xb(
              17,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              18,
              49152,
              null,
              0,
              ql.a,
              [],
              { id: [0, "id"], checked: [1, "checked"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, ""),
              n(
                e,
                4,
                0,
                e.context.$implicit.disabled,
                l.popupIdsEnum.POPUP_FPK_MAP_CONTENT_SETTINGS_3D_CITY_MODEL,
              ),
              n(e, 5, 0),
              n(e, 7, 0),
              n(
                e,
                8,
                0,
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.blocking,
              ),
              n(e, 12, 0, e.context.$implicit.icon),
              n(e, 14, 0, e.context.$implicit.id, l.staticCheckBoxesEnum),
              n(
                e,
                15,
                0,
                e.context.$implicit.developerText,
                e.context.$implicit.id,
                1,
              ),
              n(e, 17, 0, ""),
              n(e, 18, 0, "", e.context.$implicit.checked));
          },
          function (n, e) {
            (n(
              e,
              0,
              0,
              t.Nb(e, 4).combinedDisabled,
              t.Nb(e, 4).useBrighterIcon,
              t.Nb(e, 7).markerClassEnabled,
            ),
              n(
                e,
                13,
                0,
                t.Nb(e, 15).backgroundColor,
                t.Nb(e, 15).fixedNumberOfLines,
                t.Nb(e, 15).mayContainLatinCharsForArabic,
                t.Nb(e, 15).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function $t(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-fpk-screen",
              [["id", "Screen:NAV_FPK_MAP_CONTENT"]],
              null,
              null,
              null,
              T.b,
              T.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 114688, null, 0, A.a, [], null, null),
            t.Sb(256, null, w.a, A.b, []),
            (n()(),
            t.yb(
              4,
              0,
              null,
              0,
              2,
              "au3-fpk-title-line",
              [
                ["id", "FpkMapContent"],
                ["primaryDeveloperText", "Navigation"],
                ["secondaryDeveloperText", "Karteninhalte"],
              ],
              [[2, "priority-shrink", null]],
              null,
              null,
              L.b,
              L.a,
            )),
            t.xb(
              5,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, d.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              6,
              49152,
              null,
              0,
              D.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
                showBreadcrumbsIcon: [2, "showBreadcrumbsIcon"],
                showLeftDrawerIconWithActivatedBackground: [
                  3,
                  "showLeftDrawerIconWithActivatedBackground",
                ],
              },
              null,
            ),
            (n()(),
            t.yb(
              7,
              0,
              null,
              0,
              5,
              "au3-list",
              [],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              cl.b,
              cl.a,
            )),
            t.Sb(6144, null, dl.a, null, [bl.a]),
            t.xb(9, 16384, null, 0, pl.a, [t.l], null, null),
            t.xb(
              10,
              12828672,
              null,
              1,
              bl.a,
              [
                [2, hl.a],
                [2, w.a],
                [8, null],
                [2, C.a],
                [2, ml.a],
                [2, gl.a],
                [2, Be.b],
                fl.i,
                t.z,
                t.h,
                d.a,
                xl.a,
                vl.a,
                [2, We.a],
                Ve.a,
                [2, fl.a],
              ],
              {
                showCursor: [0, "showCursor"],
                showSeparators: [1, "showSeparators"],
                items: [2, "items"],
              },
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (n()(), t.hb(0, [[1, 2]], 0, 0, null, Et)),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, "Screen:NAV_FPK_MAP_CONTENT"),
              n(e, 2, 0),
              n(e, 5, 0, "FpkMapContent"),
              n(
                e,
                6,
                0,
                "Navigation",
                "Karteninhalte",
                !0,
                l.environment.isBentley,
              ),
              n(e, 10, 0, !0, !1, l.items));
          },
          function (n, e) {
            (n(e, 4, 0, t.Nb(e, 6).isPriorityShrink),
              n(e, 7, 0, t.Nb(e, 10).showLineNumbers));
          },
        );
      }
      function Ft(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-map-content",
              [],
              null,
              null,
              null,
              $t,
              Dt,
            )),
            t.xb(
              1,
              245760,
              null,
              0,
              Lt,
              [At.b, re.a, se.a, fl.i, t.h],
              null,
              null,
            ),
          ],
          function (n, e) {
            n(e, 1, 0);
          },
          null,
        );
      }
      var zt = t.ub("au3-fpk-map-content", Lt, Ft, {}, {}, []),
        Rt = l("aDqW"),
        Vt = l("/W5r"),
        jt = l("+Qv1"),
        Bt = l("XtoR"),
        Zt = l("jTHl"),
        Yt = l("zL3T"),
        Ut = l("3LDm"),
        Ht = l("aujg");
      class Kt extends m.dc {
        constructor(n, e) {
          (super(e.getLogger("navi.FpkNaviErrorGuard")),
            (this.naviAppstatesService = n));
        }
        checkDeactivation(n, e, l, t) {
          return (
            (null != t && !t.url.includes("navi")) ||
            $.a.stateType(this.naviAppstatesService.state) !== $.b.Error
          );
        }
      }
      class Gt extends m.dc {
        constructor(n, e) {
          (super(e.getLogger("navi.FpkNaviInitializedGuard")),
            (this.naviAppstatesService = n));
        }
        checkDeactivation(n, e, l, t) {
          return (
            (null != t && !t.url.includes("navi")) ||
            $.a.stateType(this.naviAppstatesService.state) !== $.b.Initializing
          );
        }
      }
      var Wt = l("+epw"),
        Xt = l("zMPs"),
        Jt = l("6Yk8"),
        Qt = l("u6+O"),
        qt = l("CIQC"),
        ni = l("REmV"),
        ei = l("Y3N+"),
        li = l("MJxn"),
        ti = l("eIOF"),
        ii = l("t+4g"),
        ai = l("myjn"),
        oi = l("fOZ7");
      class si {}
      var ui = l("QDrj"),
        ri = l("YCQm"),
        ci = l("dezT"),
        di = t.vb(i, [], function (n) {
          return t.Kb([
            t.Lb(512, t.j, t.X, [
              [8, [a.a, _, Z, nn, ke, Fl, Jl, bt, yt, Nt, zt]],
              [3, t.j],
              t.x,
            ]),
            t.Lb(4608, E.m, E.l, [t.u]),
            t.Lb(4608, Rt.h, Rt.g, []),
            t.Lb(4608, Rt.d, Rt.f, []),
            t.Lb(4608, Rt.j, Rt.e, []),
            t.Lb(4608, Rt.c, Rt.b, []),
            t.Lb(4608, Rt.k, Rt.k, [
              Rt.l,
              Rt.h,
              Rt.d,
              Rt.j,
              Rt.c,
              Rt.m,
              Rt.o,
              Rt.n,
              Rt.a,
            ]),
            t.Lb(4608, Vt.b, Vt.b, [jt.e, [2, Vt.a]]),
            t.Lb(4608, Bt.b, Bt.b, [jt.e, [2, Bt.a]]),
            t.Lb(4608, Zt.b, Zt.b, [jt.e, [2, Zt.a]]),
            t.Lb(4608, Yt.b, Yt.b, [jt.e, [2, Yt.a]]),
            t.Lb(4608, Pl.a, Ut.a, [O.a, Ht.a, d.a]),
            t.Lb(4608, Kt, Kt, [$.a, d.a]),
            t.Lb(4608, Gt, Gt, [$.a, d.a]),
            t.Lb(1073742336, E.c, E.c, []),
            t.Lb(1073742336, Rt.i, Rt.i, []),
            t.Lb(1073742336, Wt.a, Wt.a, []),
            t.Lb(1073742336, Xt.a, Xt.a, []),
            t.Lb(1073742336, Jt.a, Jt.a, []),
            t.Lb(1073742336, Qt.a, Qt.a, []),
            t.Lb(1073742336, qt.a, qt.a, []),
            t.Lb(1073742336, ni.a, ni.a, []),
            t.Lb(1073742336, ei.a, ei.a, []),
            t.Lb(1073742336, li.a, li.a, []),
            t.Lb(1073742336, ti.a, ti.a, []),
            t.Lb(1073742336, ii.a, ii.a, []),
            t.Lb(1073742336, ai.a, ai.a, []),
            t.Lb(1073742336, oi.a, oi.a, []),
            t.Lb(1073742336, b.n, b.n, [
              [2, b.s],
              [2, b.m],
            ]),
            t.Lb(1073742336, si, si, []),
            t.Lb(1073742336, ui.a, ui.a, []),
            t.Lb(1073742336, ri.a, ri.a, []),
            t.Lb(1073742336, ci.a, ci.a, []),
            t.Lb(1073742336, i, i, []),
            t.Lb(256, Rt.o, void 0, []),
            t.Lb(256, Rt.m, void 0, []),
            t.Lb(256, Rt.n, void 0, []),
            t.Lb(256, Rt.a, void 0, []),
            t.Lb(
              1024,
              b.k,
              function () {
                return [
                  [
                    {
                      path: "",
                      component: g,
                      children: [
                        { path: "", redirectTo: "init", pathMatch: "full" },
                        { path: "error", component: z, canDeactivate: [Kt] },
                        { path: "init", component: G, canDeactivate: [Gt] },
                        { path: "map", component: ae },
                        { path: "favorites", component: Ml },
                        { path: "last-destinations", component: Zl },
                        {
                          path: "main-menu",
                          children: [
                            { path: "", pathMatch: "full", component: ot },
                            { path: "map-orientation", component: gt },
                            { path: "auto-zoom", component: kt },
                            { path: "map-content", component: Lt },
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
    cOck: function (n, e, l) {
      "use strict";
      (l.d(e, "a", function () {
        return d;
      }),
        l.d(e, "b", function () {
          return p;
        }));
      var t = l("kZht"),
        i = l("ZRMe"),
        a = l("0Z+c"),
        o = l("3EdB"),
        s = l("eoEw"),
        u = l("m3Ja"),
        r = l("SOvQ"),
        c = l("An66"),
        d =
          (l("2ozK"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);display:grid;width:100%;grid-template-rows:100%;grid-template-columns:55px calc(100% - 55px);grid-template-areas:"arrow distance"}.direction-distance__icon[_ngcontent-%COMP%]{grid-area:arrow;display:flex;align-items:center;justify-content:center}.direction-distance__distance[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;grid-area:distance;display:flex;align-items:center}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .direction-distance__distance[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .direction-distance__distance[_ngcontent-%COMP%]{justify-content:flex-end}.component-layout-latin[_nghost-%COMP%]   .direction-distance__icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .direction-distance__icon[_ngcontent-%COMP%]{padding:7px 15px 7px 0}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .direction-distance__icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .direction-distance__icon[_ngcontent-%COMP%]{padding:7px 0 7px 15px}.component-layout-arabic[_nghost-%COMP%]   .direction-distance__distance[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .direction-distance__distance[_ngcontent-%COMP%]{justify-content:flex-start}',
              ],
            ],
            data: {},
          }));
      function b(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
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
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              2,
              "div",
              [["class", "direction-distance__icon"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              2,
              0,
              null,
              null,
              1,
              "au3-direction-arrow",
              [],
              null,
              null,
              null,
              i.b,
              i.a,
            )),
            t.xb(
              3,
              49152,
              null,
              0,
              a.a,
              [],
              { displayableArrow: [0, "displayableArrow"] },
              null,
            ),
            (n()(),
            t.yb(
              4,
              0,
              null,
              null,
              1,
              "au3-formatted-unit-renderer",
              [["class", "direction-distance__distance"]],
              [[2, "invisible", null]],
              null,
              null,
              o.b,
              o.a,
            )),
            t.xb(
              5,
              180224,
              null,
              0,
              s.b,
              [u.a, r.a, t.h],
              {
                smallerFontForUnit: [0, "smallerFontForUnit"],
                rawValue: [1, "rawValue"],
                rawValueUnit: [2, "rawValueUnit"],
                rawValueFormattingRule: [3, "rawValueFormattingRule"],
              },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 3, 0, l.getDisplayableArrow()),
              n(
                e,
                5,
                0,
                !0,
                l.getDistanceValue(),
                l.sourceUnit,
                l.distanceFormattingRule,
              ));
          },
          function (n, e) {
            n(e, 4, 0, t.Nb(e, 5).isInvisible);
          },
        );
      }
      function p(n) {
        return t.ac(
          2,
          [
            (n()(), t.hb(16777216, null, null, 1, null, b)),
            t.xb(
              1,
              16384,
              null,
              0,
              c.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, e) {
            n(e, 1, 0, e.component.isDirectionAndDistanceValid());
          },
          null,
        );
      }
    },
    nQV3: function (n, e, l) {
      "use strict";
      (l.d(e, "a", function () {
        return s;
      }),
        l.d(e, "b", function () {
          return u;
        }));
      var t = l("kZht"),
        i = l("fu7d"),
        a = l("bou3"),
        o = l("yNay"),
        s =
          (l("3+OJ"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;width:46px;height:50px}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr;padding-left:20px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:ltr;padding-right:20px}.checkbox[_ngcontent-%COMP%]{width:100%;height:100%}.checkbox__frame[_ngcontent-%COMP%]{display:block;position:absolute;width:24px;height:24px;transform:translateY(50%);border:1px solid #fff}.checkbox__checkmark[_ngcontent-%COMP%]{display:none;width:28px;height:12px;border:solid #fff;border-width:0 0 2px 2px;transform:translate3d(-1%,68%,0) rotate(-55deg) skewX(-20deg);box-shadow:inset 0 -5px #000,5px 4px #000}.checkbox__checkmark--checked[_ngcontent-%COMP%]{display:block}",
              ],
            ],
            data: {},
          }));
      function u(n) {
        return t.ac(
          2,
          [
            (n()(),
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
              i.a,
              [t.l, t.D, a.a, o.a, [3, i.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (n()(),
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
            (n()(),
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
          function (n, e) {
            n(e, 1, 0, e.component.id);
          },
          function (n, e) {
            n(e, 3, 0, e.component.checked);
          },
        );
      }
    },
    tZUG: function (n, e, l) {
      "use strict";
      (l.d(e, "b", function () {
        return b;
      }),
        l.d(e, "a", function () {
          return p;
        }));
      var t = l("QQZH"),
        i = l("C05f"),
        a = l("HM3f"),
        o = l("kuMc"),
        s = l("xVbo"),
        u = l("YtkY"),
        r = l("TLy2"),
        c = l("1Eyf"),
        d = l("Yi6/"),
        b =
          (l("uBIV"),
          l("fEDJ"),
          l("vsTE"),
          (function (n) {
            return (
              (n.ShowAll = "Show all"),
              (n.Landmarks3d = "3D landmarks"),
              (n.CityModel3d = "3D city model"),
              (n.Favorites = "Favorites"),
              (n.SpecialDestinations = "Sonderziele"),
              n
            );
          })({}));
      class p {
        constructor(n, e, l, a, o, s) {
          ((this.routingService = n),
            (this.poicategoriesService = e),
            (this.lockingService = l),
            (this.systemConfigService = a),
            (this.preferenceService = o),
            (this.functionAvailabilityService = s),
            (this.popupIdsEnum = d.Ob),
            (this.staticCheckBoxesEnum = b),
            (this.showAllItem = {
              id: b.ShowAll,
              developerText: b.ShowAll,
              checked: !1,
              disabled: !1,
            }),
            (this.landmarks3DItem = {
              id: b.Landmarks3d,
              developerText: b.Landmarks3d,
              icon: "E9F9_navigation_3D_sehenswuerdigkeiten.webp",
              checked: !1,
              disabled: !1,
              blocking: { lockingKey: { type: d.Eb.MAP_ADAPTION } },
            }),
            (this.cityModel3DItem = {
              id: b.CityModel3d,
              developerText: b.CityModel3d,
              icon: "E9FA_navigation_3D_citymodelle.webp",
              checked: !1,
              disabled: !1,
              blocking: { lockingKey: { type: d.Eb.MAP_ADAPTION } },
            }),
            (this.favoritesItem = {
              id: b.Favorites,
              developerText: b.Favorites,
              icon: "E0FC_favoriten.webp",
              checked: !1,
              disabled: !1,
            }),
            (this.specialDestinationsItem = {
              id: b.SpecialDestinations,
              developerText: b.SpecialDestinations,
              icon: "E217_map_poi_generic.webp",
              checked: !1,
              disabled: !1,
            }),
            (this.items = [
              this.showAllItem,
              this.landmarks3DItem,
              this.cityModel3DItem,
              this.favoritesItem,
              this.specialDestinationsItem,
            ]),
            (this.destroy$$ = new t.a(1)),
            (this.mapAdaptionLocking = new i.a(!1)));
        }
        ngOnInit() {
          (this.preferenceService.staticCategories$
            .pipe(Object(o.a)(this.destroy$$))
            .subscribe((n) => {
              ((this.landmarks3DItem.checked = n.landmarks),
                (this.cityModel3DItem.checked = n.buildings),
                (this.favoritesItem.checked = n.favorites),
                this.setShowAllCheckbox());
            }),
            Object(a.b)(
              this.preferenceService.visibleDynamicCategories$.pipe(
                Object(s.a)((n) => !!n),
              ),
              this.poicategoriesService.mapPoiCategories$,
            )
              .pipe(Object(o.a)(this.destroy$$))
              .subscribe(([n, e]) => {
                this.dynamicCategories = e;
                let l = !0;
                for (const t of e)
                  if (!n.some((n) => n.id === t.id)) {
                    l = !1;
                    break;
                  }
                ((this.specialDestinationsItem.checked = l),
                  this.setShowAllCheckbox());
              }),
            Object(a.b)([
              this.preferenceService.mapStyle$,
              this.functionAvailabilityService.satelliteMapAvailability$,
            ])
              .pipe(
                Object(u.a)(
                  ([n, e]) => e.availability && n === c.j.SATELLITEMAP,
                ),
                Object(o.a)(this.destroy$$),
              )
              .subscribe((n) => {
                ((this.landmarks3DItem.disabled =
                  !this.systemConfigService.isAsiaRegion() && n),
                  (this.cityModel3DItem.disabled = n));
              }),
            this.lockingService
              .getProperty({ type: d.Eb.MAP_ADAPTION })
              .pipe(
                Object(r.a)((n) => n.lock$),
                Object(o.a)(this.destroy$$),
              )
              .subscribe((n) => {
                (this.mapAdaptionLocking.next(n),
                  (this.showAllItem.checked =
                    this.isEveryEnabledItemChecked()));
              }));
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        toggleCheckmark(n, e) {
          let l;
          switch (n) {
            case b.ShowAll:
              ((l = e ? this.dynamicCategories : []),
                this.preferenceService.setCategories(
                  {
                    landmarks:
                      this.mapAdaptionLocking.getValue() ||
                      this.landmarks3DItem.disabled
                        ? this.landmarks3DItem.checked
                        : e,
                    buildings:
                      this.mapAdaptionLocking.getValue() ||
                      this.cityModel3DItem.disabled
                        ? this.cityModel3DItem.checked
                        : e,
                    favorites: e,
                  },
                  l,
                ));
              break;
            case b.Landmarks3d:
              this.preferenceService.setCategories({
                landmarks: e,
                buildings: this.cityModel3DItem.checked,
                favorites: this.favoritesItem.checked,
              });
              break;
            case b.CityModel3d:
              this.preferenceService.setCategories({
                landmarks: this.landmarks3DItem.checked,
                buildings: e,
                favorites: this.favoritesItem.checked,
              });
              break;
            case b.Favorites:
              this.preferenceService.setCategories({
                landmarks: this.landmarks3DItem.checked,
                buildings: this.cityModel3DItem.checked,
                favorites: e,
              });
              break;
            case b.SpecialDestinations:
              ((l = e ? this.dynamicCategories : []),
                this.preferenceService.setCategories(
                  {
                    landmarks: this.landmarks3DItem.checked,
                    buildings: this.cityModel3DItem.checked,
                    favorites: this.favoritesItem.checked,
                  },
                  l,
                ));
          }
        }
        goBack() {
          this.routingService.goBack();
        }
        setShowAllCheckbox() {
          this.showAllItem.checked = this.isEveryEnabledItemChecked();
        }
        isEveryEnabledItemChecked() {
          for (let n = 1; n < this.items.length; n++)
            if (
              !this.items[n].disabled &&
              !(
                (Object(d.wd)(this.items[n].blocking) &&
                  this.mapAdaptionLocking.getValue()) ||
                this.items[n].checked
              )
            )
              return !1;
          return !0;
        }
      }
    },
  },
]);
