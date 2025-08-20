(window.webpackJsonp = window.webpackJsonp || []).push([
  [63],
  {
    "0Jwx": function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "LowerDisplayModuleNgFactory", function () {
          return Re;
        }));
      var i = n("kZht");
      class o {}
      var l = n("C9Ky"),
        a = n("KoKl"),
        r = n("An66"),
        s = n("z6QT"),
        c = n("flsk"),
        u = n("FQEI"),
        g = n("O82V"),
        d = n("3bpu"),
        b = n("Eln4"),
        h = n("evAh"),
        p = n("aOG8"),
        f = n("6zvu"),
        m = n("VcEz"),
        _ = n("Krzs"),
        v = n("bh6+"),
        C = n("u0hB"),
        x = n("KczA"),
        P = n("RiFk"),
        O = n("oeT7"),
        y = n("bou3"),
        M = n("MJw2"),
        S = n("sg2e"),
        w = n("m3Ja"),
        T = n("llYL"),
        k = n("iEqp"),
        D = n("mYyF"),
        I = n("v98a"),
        L = n("bbXE"),
        N = n("yNay"),
        z = n("yNGK"),
        $ = i.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:660px;overflow:hidden;will-change:transform}.keyboard-host[_ngcontent-%COMP%]{background-color:#000;height:100%;width:100%}",
            ],
          ],
          data: {
            animation: [
              {
                type: 7,
                name: "keyboard",
                definitions: [
                  {
                    type: 1,
                    expr: ":enter",
                    animation: [
                      {
                        type: 6,
                        styles: { transform: "translateY(-100%)" },
                        offset: null,
                      },
                      {
                        type: 4,
                        styles: {
                          type: 6,
                          styles: { transform: "translateY(0%)" },
                          offset: null,
                        },
                        timings: 600,
                      },
                    ],
                    options: null,
                  },
                  {
                    type: 1,
                    expr: ":leave",
                    animation: [
                      {
                        type: 4,
                        styles: {
                          type: 6,
                          styles: { transform: "translateY(-100%)" },
                          offset: null,
                        },
                        timings: 600,
                      },
                    ],
                    options: null,
                  },
                ],
                options: {},
              },
            ],
          },
        });
      function A(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              6,
              "au3-keyboard-host",
              [["class", "wrapper"]],
              [
                [24, "@keyboard", 0],
                [2, "mib3-haptic", null],
              ],
              [
                [null, "@keyboard.start"],
                [null, "@keyboard.done"],
              ],
              function (t, e, n) {
                var i = !0,
                  o = t.component;
                return (
                  "@keyboard.start" === e &&
                    (i = !1 !== o.animationDone$$.next(!1) && i),
                  "@keyboard.done" === e &&
                    (i = !1 !== o.animationDone$$.next(!0) && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            i.xb(
              1,
              278528,
              null,
              0,
              r.i,
              [i.s, i.t, i.l, i.D],
              { klass: [0, "klass"], ngClass: [1, "ngClass"] },
              null,
            ),
            i.Ob(2, 2),
            i.Sb(131584, null, s.a, s.a, [[3, s.a]]),
            i.xb(
              4,
              4407296,
              null,
              0,
              c.a,
              [
                i.l,
                u.a,
                i.h,
                s.a,
                [2, g.a],
                [2, d.b],
                [2, d.a],
                [2, b.a],
                [2, h.a],
              ],
              { settings: [0, "settings"] },
              null,
            ),
            i.xb(
              5,
              147456,
              null,
              0,
              p.a,
              [[2, c.a], [2, f.a], [2, m.b], _.a],
              null,
              null,
            ),
            i.xb(
              6,
              770048,
              null,
              0,
              v.a,
              [
                C.c,
                x.a,
                P.a,
                O.i,
                i.h,
                y.a,
                M.a,
                S.a,
                w.a,
                T.a,
                k.a,
                D.a,
                I.b,
                L.a,
                N.a,
              ],
              { inputField: [0, "inputField"], contextId: [1, "contextId"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component,
              i = t(e, 2, 0, "keyboard-host", n.inputFieldAndContext.context);
            (t(e, 1, 0, "wrapper", i),
              t(e, 4, 0, n.noHapticBackground),
              t(
                e,
                6,
                0,
                n.inputFieldAndContext.inputField,
                n.inputFieldAndContext.inputField.contextId,
              ));
          },
          function (t, e) {
            t(e, 0, 0, void 0, i.Nb(e, 4).markerClassEnabled);
          },
        );
      }
      function E(t) {
        return i.ac(
          2,
          [
            (t()(), i.hb(16777216, null, null, 1, null, A)),
            i.xb(
              1,
              16384,
              null,
              0,
              r.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            t(e, 1, 0, e.component.inputFieldAndContext);
          },
          null,
        );
      }
      var F = n("HVUF"),
        R = n("B3Zb"),
        j = n("fu7d"),
        H = n("bMuc"),
        V = n("ZIdM"),
        B = n("OtM5"),
        G = n("y9xZ"),
        U = n("+sw+"),
        Y = n("BMrr"),
        Z = n("IEns"),
        W = n("Ps6X"),
        q = n("CpzC"),
        X = n("0Bsn"),
        K = n("5GjX"),
        J = n("9ZFG"),
        Q = n("6480"),
        tt = n("FfND"),
        et = n("t7cT"),
        nt = n("8TlW"),
        it = n("Xo58"),
        ot = n("r+e+"),
        lt = n("ijxY"),
        at = n("bmFL"),
        rt = n("EOxa"),
        st = n("Kds7"),
        ct = n("Yi6/");
      class ut {
        constructor() {
          ((this.iconCategory = ct.Z.Presets),
            (this.uiStateType = ct.uc.ListHorizontal),
            (this.editingShortcuts = !1),
            (this.draggingShortcut = !1),
            (this.shortcutTapped = new i.n()),
            (this.deleteShortcut = new i.n()),
            (this.disabledTap = new i.n()));
        }
        onDelete(t) {
          (t.stopPropagation(), this.deleteShortcut.emit());
        }
      }
      var gt = i.wb({
        encapsulation: 0,
        styles: [
          [
            '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:block;position:relative;height:177px;width:200px;margin:17px auto}.mib3-drag-start[_nghost-%COMP%]{visibility:hidden}.shortcut--dragged[_nghost-%COMP%]{opacity:.5}.mib3-drag-over[_nghost-%COMP%]{opacity:1}.mib3-dragged[_nghost-%COMP%]{opacity:1;will-change:transform}.mib3-dragged[_nghost-%COMP%]   .shortcut__delete[_ngcontent-%COMP%], .mib3-dragged[_nghost-%COMP%]   .shortcut__main-info[_ngcontent-%COMP%], .mib3-dragged[_nghost-%COMP%]   .shortcut__switch[_ngcontent-%COMP%]{display:none}.shortcut--editing-over-edge[_nghost-%COMP%]{opacity:.5}.state-disabled[_ngcontent-%COMP%], .state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.shortcut__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.shortcut__icon[_ngcontent-%COMP%]{position:relative;margin-top:8px}.shortcut__main-info[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:28px;max-width:200px;height:38px}.shortcut__delete[_ngcontent-%COMP%]{position:absolute;overflow:hidden;width:70px;height:70px;display:flex;justify-content:center;align-items:center;right:0;top:25px;z-index:1}.shortcut__switch[_ngcontent-%COMP%]{position:absolute;display:block;flex-direction:row;height:4px;top:4px;left:6px;right:6px;background-color:#5e5e5e;border-top-color:#313131;border-left-color:rgba(49,49,49,.75);box-shadow:inset -1px -1px hsla(0,0%,100%,.5)}.shortcut__switch--on[_ngcontent-%COMP%]{background-color:red}.shortcut__sub-icon[_ngcontent-%COMP%]{position:absolute;pointer-events:none;top:0;left:0}',
          ],
        ],
        data: {},
      });
      function dt(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "shortcut__sub-icon"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              F.b,
              F.a,
            )),
            i.xb(
              1,
              4243456,
              null,
              0,
              R.b,
              [N.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, n.subIconUrl, n.iconCategory);
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 1).iconComponentHidden);
          },
        );
      }
      function bt(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "div",
              [
                ["class", "shortcut__switch"],
                ["id", "SwitchOnOff"],
              ],
              [[2, "shortcut__switch--on", null]],
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
              j.a,
              [i.l, i.D, y.a, N.a, [3, j.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
          ],
          function (t, e) {
            t(e, 1, 0, "SwitchOnOff");
          },
          function (t, e) {
            t(e, 0, 0, e.component.activated);
          },
        );
      }
      function ht(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-icon",
              [
                ["class", "shortcut__delete"],
                ["id", "ShortcutDelete"],
              ],
              [
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
              [[null, "mib3TapPointer"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "mib3TapPointer" === e &&
                    (i = !1 !== t.component.onDelete(n) && i),
                  i
                );
              },
              F.b,
              F.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              j.a,
              [i.l, i.D, y.a, N.a, [3, j.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(2, 147456, null, 0, H.a, [i.l, i.z], null, null),
            i.xb(
              3,
              147456,
              null,
              0,
              V.a,
              [H.a, [2, d.a], [2, j.a], N.a],
              null,
              null,
            ),
            i.xb(
              4,
              212992,
              null,
              0,
              f.a,
              [
                N.a,
                m.b,
                V.a,
                [2, d.a],
                [2, j.a],
                [2, B.a],
                [2, G.a],
                [2, U.a],
                i.z,
                Y.a,
                i.l,
                [2, Z.a],
              ],
              null,
              { tapPointer: "mib3TapPointer" },
            ),
            i.Sb(131584, null, s.a, s.a, [[3, s.a]]),
            i.xb(
              6,
              4407296,
              null,
              0,
              c.a,
              [
                i.l,
                u.a,
                i.h,
                s.a,
                [2, g.a],
                [2, d.b],
                [2, d.a],
                [2, b.a],
                [2, h.a],
              ],
              null,
              null,
            ),
            i.xb(
              7,
              4243456,
              null,
              0,
              R.b,
              [N.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            i.xb(
              8,
              212992,
              null,
              0,
              W.a,
              [[2, f.a], [8, null], [3, W.a], i.l, i.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            i.xb(
              9,
              147456,
              null,
              0,
              q.a,
              [[2, f.a], [2, B.a], [2, X.a], [2, c.a], [2, K.b], i.l, D.a, I.b],
              null,
              null,
            ),
            i.xb(
              10,
              147456,
              null,
              0,
              p.a,
              [[2, c.a], [2, f.a], [2, m.b], _.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "ShortcutDelete"),
              t(e, 4, 0),
              t(e, 6, 0),
              t(e, 7, 0, "EA10_icon_delete.webp", n.iconCategory),
              t(e, 8, 0, n.uiStateType));
          },
          function (t, e) {
            t(e, 0, 1, [
              i.Nb(e, 6).markerClassEnabled,
              i.Nb(e, 7).iconComponentHidden,
              i.Nb(e, 8).uiStateListHorizontal,
              i.Nb(e, 8).uiStateListVertical,
              i.Nb(e, 8).uiStateCoverLeft,
              i.Nb(e, 8).uiStateCoverRight,
              i.Nb(e, 8).uiStateCoverBottom,
              i.Nb(e, 8).uiStateButton,
              i.Nb(e, 8).uiStateByDabLeft,
              i.Nb(e, 8).uiStateByDabRight,
              i.Nb(e, 8).uiStateLbDabLeft,
              i.Nb(e, 8).uiStateLbDabRight,
            ]);
          },
        );
      }
      function pt(t) {
        return i.ac(
          2,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              19,
              "div",
              [["class", "shortcut__content"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [
                [null, "mib3Tap"],
                [null, "mib3DisabledTap"],
              ],
              function (t, e, n) {
                var i = !0,
                  o = t.component;
                return (
                  "mib3Tap" === e && (i = !1 !== o.shortcutTapped.emit() && i),
                  "mib3DisabledTap" === e &&
                    (i = !1 !== o.disabledTap.emit() && i),
                  i
                );
              },
              null,
              null,
            )),
            i.xb(
              1,
              147456,
              null,
              0,
              B.a,
              [J.a, i.h, N.a, [3, B.a]],
              {
                disabled: [0, "disabled"],
                reason: [1, "reason"],
                showReason: [2, "showReason"],
              },
              { tap: "mib3DisabledTap" },
            ),
            i.xb(2, 147456, null, 0, H.a, [i.l, i.z], null, null),
            i.xb(
              3,
              147456,
              null,
              0,
              V.a,
              [H.a, [2, d.a], [2, j.a], N.a],
              null,
              null,
            ),
            i.xb(
              4,
              212992,
              null,
              0,
              f.a,
              [
                N.a,
                m.b,
                V.a,
                [2, d.a],
                [2, j.a],
                [2, B.a],
                [2, G.a],
                [2, U.a],
                i.z,
                Y.a,
                i.l,
                [2, Z.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.xb(
              5,
              671744,
              null,
              0,
              Q.a,
              [tt.a, O.i, B.a, f.a, Q.b, et.a],
              {
                routeInfo: [0, "routeInfo"],
                preventGoToRoute: [1, "preventGoToRoute"],
              },
              null,
            ),
            i.Sb(131584, null, s.a, s.a, [[3, s.a]]),
            i.xb(
              7,
              4407296,
              null,
              0,
              c.a,
              [
                i.l,
                u.a,
                i.h,
                s.a,
                [2, g.a],
                [2, d.b],
                [2, d.a],
                [2, b.a],
                [2, h.a],
              ],
              null,
              null,
            ),
            i.xb(
              8,
              147456,
              null,
              0,
              q.a,
              [[2, f.a], [2, B.a], [2, X.a], [2, c.a], [2, K.b], i.l, D.a, I.b],
              null,
              null,
            ),
            i.xb(
              9,
              147456,
              null,
              0,
              p.a,
              [[2, c.a], [2, f.a], [2, m.b], _.a],
              null,
              null,
            ),
            (t()(),
            i.yb(
              10,
              0,
              null,
              null,
              1,
              "au3-i18n-label",
              [["class", "shortcut__main-info"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              nt.b,
              nt.a,
            )),
            i.xb(
              11,
              245760,
              null,
              0,
              it.a,
              [[8, null], w.a, i.h, i.l, i.D, [2, ot.a], [2, lt.a], [2, at.a]],
              { nonI18nValue: [0, "nonI18nValue"] },
              null,
            ),
            (t()(),
            i.yb(
              12,
              0,
              null,
              null,
              7,
              "div",
              [["class", "shortcut__icon"]],
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
            i.xb(
              13,
              212992,
              null,
              0,
              W.a,
              [[2, f.a], [8, null], [3, W.a], i.l, i.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (t()(),
            i.yb(
              14,
              0,
              null,
              null,
              1,
              "au3-icon-with-fallback",
              [],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              rt.b,
              rt.a,
            )),
            i.xb(
              15,
              4964352,
              null,
              0,
              st.a,
              [i.h, i.z, N.a],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                fallbackFileName: [2, "fallbackFileName"],
                showFallbackWhileLoading: [3, "showFallbackWhileLoading"],
              },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, dt)),
            i.xb(
              17,
              16384,
              null,
              0,
              r.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, bt)),
            i.xb(
              19,
              16384,
              null,
              0,
              r.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, ht)),
            i.xb(
              21,
              16384,
              null,
              0,
              r.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, !n.executable, n.disabledReason, n.showDisabledReason),
              t(e, 4, 0),
              t(e, 5, 0, n.shortcutsRoute, !0),
              t(e, 7, 0),
              t(e, 11, 0, n.mainInfoText),
              t(e, 13, 0, n.uiStateType),
              t(e, 15, 0, n.iconUrl, n.iconCategory, n.fallbackIconUrl, !0),
              t(e, 17, 0, n.subIconUrl),
              t(e, 19, 0, null != n.activated),
              t(e, 21, 0, n.editingShortcuts));
          },
          function (t, e) {
            (t(
              e,
              0,
              0,
              i.Nb(e, 1).combinedDisabled,
              i.Nb(e, 1).useBrighterIcon,
              i.Nb(e, 7).markerClassEnabled,
            ),
              t(
                e,
                10,
                0,
                i.Nb(e, 11).backgroundColor,
                i.Nb(e, 11).fixedNumberOfLines,
                i.Nb(e, 11).mayContainLatinCharsForArabic,
                i.Nb(e, 11).shortenWithEllipsisForArabic,
              ),
              t(
                e,
                12,
                0,
                i.Nb(e, 13).uiStateListHorizontal,
                i.Nb(e, 13).uiStateListVertical,
                i.Nb(e, 13).uiStateCoverLeft,
                i.Nb(e, 13).uiStateCoverRight,
                i.Nb(e, 13).uiStateCoverBottom,
                i.Nb(e, 13).uiStateButton,
                i.Nb(e, 13).uiStateByDabLeft,
                i.Nb(e, 13).uiStateByDabRight,
                i.Nb(e, 13).uiStateLbDabLeft,
                i.Nb(e, 13).uiStateLbDabRight,
              ),
              t(e, 14, 0, i.Nb(e, 15).iconComponentHidden));
          },
        );
      }
      var ft = n("vwU6"),
        mt = n("HLQW"),
        _t = n("YcCK"),
        vt = n("Xast"),
        Ct = n("iQ+n"),
        xt = n("007S"),
        Pt = n("odRV"),
        Ot = n("jgeG"),
        yt = n("nSAP"),
        Mt = n("Hnhs"),
        St = n("QQZH"),
        wt = n("g6G6"),
        Tt = n("ROBh"),
        kt = n("HM3f"),
        Dt = n("kuMc"),
        It = n("xVbo"),
        Lt = n("jIqt"),
        Nt = n("0Woy"),
        zt = n("TLy2"),
        $t = n("YtkY"),
        At = n("CYdq"),
        Et = n("Dfkb"),
        Ft = n("+0mq"),
        Rt = n("g1Ro"),
        jt = n("8j5Y"),
        Ht = n("J+dc");
      let Vt = (() => {
        class t {
          constructor(t, e) {
            ((this.hmiSyncService = t),
              (this.logger = e.getLogger("lower.ShortcutsSyncService")),
              (this.shortcutsSyncState$ = this.hmiSyncService.shortcuts
                .retrieveShortcutObjects({ autosubscribe: !0 })
                .pipe(
                  Object($t.a)((t) => {
                    const e = { id: "", state: Rt.f.CLOSED, initialized: !1 };
                    if (t.data.length > 0) {
                      this.logger.info(
                        "shortcutsSyncState: received rsi update with new state: ",
                        t.data[0],
                      );
                      const { id: n, state: i, initialized: o } = t.data[0];
                      ((e.id = n),
                        (e.state = i || e.state),
                        (e.initialized = o || e.initialized));
                    } else
                      this.logger.info(
                        "shortcutsSyncState: received rsi update without state: ",
                        t,
                      );
                    return e;
                  }),
                  Object(jt.a)(({ id: t }) => (this.shortcutsSyncId = t)),
                  Object($t.a)(({ initialized: t, state: e }) => ({
                    initialized: t,
                    state: e,
                  })),
                  Object(ct.Kd)(),
                )));
          }
          initSubscriptions(t) {
            t === ct.T.BrowserFpk &&
              this.shortcutsSyncState$
                .pipe(
                  Object(It.a)(
                    () =>
                      Object(ct.wd)(this.shortcutsSyncId) &&
                      this.shortcutsSyncId.length > 0,
                  ),
                  Object(Ht.a)(1),
                )
                .subscribe(() => {
                  (Object(ct.wd)(this.initialInitializedValue) &&
                    (this.setShortcutsInitialized(this.initialInitializedValue),
                    (this.initialInitializedValue = void 0)),
                    Object(ct.wd)(this.initialStateValue) &&
                      (this.setShortcutsState(this.initialStateValue),
                      (this.initialStateValue = void 0)));
                });
          }
          setShortcutsInitialized(t) {
            if (
              Object(ct.rd)(this.shortcutsSyncId) ||
              0 === this.shortcutsSyncId.length
            )
              return (
                this.logger.info(
                  `setShortcutsInitialized: no shortcuts sync object received from RSI. Queueing update to ${t}`,
                ),
                void (this.initialInitializedValue = t)
              );
            (this.logger.info(
              `setShortcutsInitialized: updating initialized to ${t}`,
            ),
              this.hmiSyncService.shortcuts
                .updateShortcutObject(this.shortcutsSyncId, { initialized: t })
                .toPromise()
                .catch((e) =>
                  this.logger.error(
                    `setShortcutsInitialized: error trying to set initialized to ${t}: `,
                    e,
                  ),
                ));
          }
          setShortcutsState(t) {
            if (Object(ct.rd)(this.shortcutsSyncId))
              return (
                this.logger.info(
                  `setShortcutsState: no shortcuts sync object received from RSI. Queueing update to ${t}`,
                ),
                void (this.initialStateValue = t)
              );
            (this.logger.info(`setShortcutsState: updating state to ${t}`),
              this.hmiSyncService.shortcuts
                .updateShortcutObject(this.shortcutsSyncId, { state: t })
                .toPromise()
                .catch((e) =>
                  this.logger.error(
                    `setShortcutsState: error trying to set state to ${t}: `,
                    e,
                  ),
                ));
          }
        }
        return (
          (t.ɵprov = i.bc({
            factory: function () {
              return new t(i.cc(Rt.e), i.cc(N.a));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
      var Bt = n("qyUW"),
        Gt = (n("MkGR"), n("yPy1"), n("fb20"), n("GVLJ"), n("+MyF"));
      class Ut {
        constructor(t, e, n, o, l, a, r, s, c, u, g, d) {
          ((this.cdr = e),
            (this.inputRegionsService = n),
            (this.dragDropService = o),
            (this.dataDictionary = l),
            (this.appVisibilityService = a),
            (this.shortcutsService = r),
            (this.shortcutsSyncService = s),
            (this.i18nService = g),
            (this.usermanagementActivitiesService = d),
            (this.configurationModeActive = !1),
            (this.configurationModeActiveChange = new i.n()),
            (this.shortcuts = []),
            (this.mainInfoTextMap = new WeakMap()),
            (this.pageSwitchTimer = 0),
            (this.draggedAbovePreviousPageEdge = !1),
            (this.draggedAboveNextPageEdge = !1),
            (this.editingShortcutsOrder = !1),
            (this.dragDropOverFeedback = ct.qc.MOVE1),
            (this.destroy$$ = new St.a(1)),
            (this.logger = t.getLogger("ShortcutsOverviewComponent")),
            (c.translation = {
              x: Ft.c.target.x - Ft.c.source.x,
              y: Ft.c.target.y - Ft.c.source.y,
            }),
            (u.displayLayer = Ft.c.layerName),
            (this.noShortcutsSavedTextConstant$ = g.getConstantTranslation$(
              Gt.a.LowerDisplayNoShortcutsSaved,
            )));
        }
        ngOnInit() {
          (this.shortcutsService.shortcuts$
            .pipe(Object(Dt.a)(this.destroy$$))
            .subscribe((t) => {
              ((this.shortcuts = t), this.cdr.markForCheck());
            }),
            Object(wt.a)(
              this.dragDropService.dragEnd$,
              this.dragDropService.dragCancel$,
            )
              .pipe(Object(Dt.a)(this.destroy$$))
              .subscribe(() => {
                (this.finishEditStep(), this.cdr.markForCheck());
              }),
            this.appVisibilityService.configurationModeLocked$
              .pipe(Object(Dt.a)(this.destroy$$))
              .subscribe((t) => (this.dragDropService.disabled = t)),
            this.usermanagementActivitiesService.changeUserActivity$
              .pipe(
                Object(It.a)(ct.wd),
                Object(It.a)((t) => t.process === Et.b.Request),
                Object(Dt.a)(this.destroy$$),
              )
              .subscribe(() => this.finishConfigMode()),
            this.shortcutsSyncService.shortcutsSyncState$
              .pipe(
                Object(Lt.a)({ initialized: !1, state: Bt.b.CLOSED }),
                Object(Nt.a)(),
              )
              .subscribe(([t, e]) => {
                t.state === Bt.b.EDIT &&
                  e.state !== Bt.b.EDIT &&
                  this.configurationModeActive &&
                  (this.logger.info(
                    `shortcutsSyncState$: RSI update. State ${Bt.b.EDIT} -> ${e.state}. Leave configuration mode.`,
                  ),
                  this.editingShortcutsOrder &&
                    (this.logger.info(
                      "shortcutsSyncState$: currently editing shortcuts order. Cancel active drag & drop.",
                    ),
                    this.dragDropService.abortDragAndDrop(),
                    this.finishEditStep()),
                  this.finishConfigMode());
              }));
        }
        ngAfterViewInit() {
          (this.shortcutTiles.changes.subscribe((t) =>
            this.updateDropTargetDirectives(t),
          ),
            this.shortcutsSyncService.setShortcutsInitialized(!0));
        }
        ngOnDestroy() {
          (this.destroy$$.next(),
            this.destroy$$.complete(),
            (this.dragDropService.disabled = !1));
        }
        executeShortcut(t) {
          this.configurationModeActive
            ? this.logger.warn(
                `Prevent execution of shortcut "${t.name}" since edit-mode is active.`,
              )
            : this.shortcutsService
                .executeShortcut(t)
                .then((e) => {
                  e
                    ? this.logger.info(
                        `Execution of shortcut "${t.name}" successful`,
                        t,
                      )
                    : this.logger.error(
                        `Execution of shortcut "${t.name}" not successful`,
                      );
                })
                .catch((e) =>
                  this.logger.error(
                    `Could not execute shortcut "${t.name}":`,
                    e,
                  ),
                );
        }
        deleteShortcut(t) {
          this.configurationModeActive
            ? (this.logger.info(
                `deleteShortcut: Deleting shortcut "${t.name}"`,
                t,
              ),
              this.shortcutsService.removeShortcut(t))
            : this.logger.warn(
                `deleteShortcut: Prevent deleting shortcut "${t.name}" since edit-mode is not active.`,
              );
        }
        trackTiles(t, e) {
          return e ? e.name : e;
        }
        tileLongpressed() {
          (this.logger.info("tileLongpressed: Start editing saved shortcuts."),
            (this.configurationModeActive = !0),
            this.configurationModeActiveChange.emit(!0),
            this.shortcutsSyncService.setShortcutsState(Bt.b.EDIT),
            (this.editingShortcutsOrder = !0),
            this.cdr.detectChanges(),
            this.logger.info("tileLongpressed: Started configuration mode"),
            requestAnimationFrame(() =>
              this.tileGrid.moveToPage(this.tileGrid.activePage, !1),
            ));
        }
        tileDragged(t) {
          if (!this.nextPageEdge || !this.previousPageEdge)
            return void this.logger.warn(
              "tileDragged: Shortcuts page edge elements are not defined! No pages will be switched when dragging over the edges.",
            );
          if (!this.configurationModeActive || !this.editingShortcutsOrder)
            return;
          const e = Object(ct.sd)(t.x, t.y, this.nextPageEdge.nativeElement),
            n = Object(ct.sd)(t.x, t.y, this.previousPageEdge.nativeElement);
          (e || n
            ? !this.draggedAboveNextPageEdge && e
              ? (this.startPageSwitchTimer(!1), this.setTileOverEdgeClass(!0))
              : !this.draggedAbovePreviousPageEdge &&
                n &&
                (this.startPageSwitchTimer(!0), this.setTileOverEdgeClass(!0))
            : (this.cancelPageSwitchTimer(), this.setTileOverEdgeClass(!1)),
            (this.draggedAboveNextPageEdge = e),
            (this.draggedAbovePreviousPageEdge = n));
        }
        dropItem(t) {
          if (!this.configurationModeActive)
            return void this.logger.warn(
              `dropItem: Prevent dropping of shortcut from index "${t.startIndex}" since edit-mode is not active.`,
            );
          (this.logger.info(
            `dropItem: Dropped shortcut from index "${t.startIndex}" at index "${t.dropIndex}"`,
          ),
            (this.editingShortcutsOrder = !1));
          const e = this.shortcuts[t.startIndex];
          e
            ? (this.shortcutsService.moveShortcut(e, t.dropIndex),
              this.updateDropTargetDirectives(this.shortcutTiles))
            : this.logger.warn(
                `dropItem: Could not resolve shortcut at index "${t.dropIndex}". Shortcut will not be moved`,
              );
        }
        dropCancel(t) {
          this.configurationModeActive
            ? (this.logger.error(
                `dropCancel: Could not drop shortcut from index ${t.startIndex}`,
              ),
              (this.editingShortcutsOrder = !1))
            : this.logger.warn(
                `dropCancel: Prevent cancel event of dragged shortcut from index "${t.startIndex}" since edit-mode is not active.`,
              );
        }
        finishConfigMode() {
          ((this.configurationModeActive = !1),
            this.configurationModeActiveChange.emit(!1),
            (this.editingShortcutsOrder = !1),
            this.cdr.markForCheck(),
            requestAnimationFrame(() => {
              this.tileGrid &&
                this.tileGrid.moveToPage(this.tileGrid.activePage, !1);
            }));
        }
        startPageSwitchTimer(t) {
          this.tileGrid
            ? (this.pageSwitchTimer = window.setTimeout(() => {
                t && this.tileGrid.activePage > 0
                  ? (this.logger.info(
                      "startPageSwitchTimer: switching to previous page",
                    ),
                    this.inputRegionsService.triggerHapticFeedback(
                      ct.G.LOWER,
                      ct.qc.MOVE2,
                    ),
                    this.tileGrid.previousPage())
                  : !t &&
                    this.tileGrid.activePage < this.tileGrid.pages.length - 1 &&
                    (this.logger.info(
                      "startPageSwitchTimer: switching to next page",
                    ),
                    this.inputRegionsService.triggerHapticFeedback(
                      ct.G.LOWER,
                      ct.qc.MOVE2,
                    ),
                    this.tileGrid.nextPage());
              }, this.dataDictionary.t_tile_page_scrolls))
            : this.logger.warn(
                "startPageSwitchTimer: FavoriteList tile grid is not defined! No pages will be switched on drag.",
              );
        }
        cancelPageSwitchTimer() {
          this.pageSwitchTimer &&
            (this.logger.info(
              "cancelPageSwitchTimer: cancel timer to switch to next/previous page",
            ),
            window.clearTimeout(this.pageSwitchTimer),
            (this.pageSwitchTimer = 0));
        }
        setTileOverEdgeClass(t) {
          this.shortcutTiles
            ? this.shortcutTiles.forEach((e) => {
                e.element.nativeElement.classList.toggle(
                  "shortcut--editing-over-edge",
                  t,
                );
              })
            : this.logger.warn(
                "setTileOverEdgeClass: Shortcut tiles are not defined! No pages will be switched when dragging over the edges.",
              );
        }
        finishEditStep() {
          ((this.editingShortcutsOrder = !1),
            this.setTileOverEdgeClass(!1),
            this.logger.debug("finishEditStep: Finished editing step"));
        }
        updateDropTargetDirectives(t) {
          if (!t || !t.length || !this.dragDropArea.first) return;
          const e = new Array(this.shortcutTiles.length);
          (t.forEach((t) => {
            const n = this.shortcuts.findIndex(
              (e) => e.name === t.dragDropData,
            );
            if (n >= 0 && n < e.length) {
              const i = new ct.L(t.element);
              ((i.dragDropData = this.shortcuts[n].name), (e[n] = i));
            } else
              this.logger.warn(
                `updateDropTargetDirectives: Could not create DropTarget directive for shortcut index "${n}" and shortcut tile`,
                t,
              );
          }),
            this.dragDropArea.first.dropTargetDirectives.reset(e),
            this.dragDropArea.first.dropTargetDirectives.notifyOnChanges());
        }
        getMainInfoText(t) {
          if (!t) return Object(Tt.a)(void 0);
          const e = this.mainInfoTextMap.get(t);
          if (e) return e;
          const n = this.resolveDisplayText(t);
          return (this.mainInfoTextMap.set(t, n), n);
        }
        resolveDisplayText(t) {
          if (null == t.mainInfoConstantToken || null == t.mainInfoEnum)
            return Object(Tt.a)(t.mainInfo);
          const e = Object.entries(t.mainInfoEnum).find(
              ([e, n]) => n === t.mainInfo,
            ),
            n = `${t.mainInfoConstantToken}#${e ? e[0] : t.mainInfo}`,
            i = t.interpolateParams$
              ? t.interpolateParams$
              : Object(Tt.a)(void 0);
          return Object(kt.b)([Object(Tt.a)(n), i]).pipe(
            Object(zt.a)(([t, e]) =>
              this.i18nService.getConstantTranslation$(t, e),
            ),
            Object($t.a)((e) => (e === `TC_${n}` ? t.mainInfo : e)),
          );
        }
        get isOnFirstPage() {
          return !this.tileGrid || 0 === this.tileGrid.activePage;
        }
        get isOnLastPage() {
          return (
            !this.tileGrid ||
            this.tileGrid.activePage === this.tileGrid.pageCount - 1
          );
        }
      }
      var Yt = n("M+lD"),
        Zt = i.wb({
          encapsulation: 0,
          styles: [
            [
              '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;position:relative;overflow:hidden;height:100%;width:100%}.shortcuts__tilegrid[_ngcontent-%COMP%]{padding:0 180px 24px}.shortcuts__no-shortcuts-saved[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:30px;color:#fff;text-align:center;height:100%;max-width:1176px;margin:0 auto;padding:41px 0}.shortcuts__edge[_ngcontent-%COMP%]{visibility:hidden;position:absolute;top:63px;height:129px;border-width:1px;border-style:solid}.shortcuts__edge--visible[_ngcontent-%COMP%]{visibility:visible}.shortcuts__edge--previous-page[_ngcontent-%COMP%]{left:0;width:160px;border-image:linear-gradient(270deg,hsla(0,0%,70.6%,.29) 90px,transparent 110px) 1 1;background-image:linear-gradient(270deg,rgba(35,35,35,.29),transparent)}.component-layout-arabic[_nghost-%COMP%]   .shortcuts__edge--previous-page[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .shortcuts__edge--previous-page[_ngcontent-%COMP%]{left:unset}.shortcuts__edge--next-page[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .shortcuts__edge--previous-page[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .shortcuts__edge--previous-page[_ngcontent-%COMP%]{right:0;border-image:linear-gradient(90deg,hsla(0,0%,70.6%,.29) 90px,transparent 110px) 1 1;background-image:linear-gradient(90deg,rgba(35,35,35,.29),transparent)}.shortcuts__edge--next-page[_ngcontent-%COMP%]{width:160px}.component-layout-arabic[_nghost-%COMP%]   .shortcuts__edge--next-page[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .shortcuts__edge--next-page[_ngcontent-%COMP%]{left:0;right:unset;border-image:linear-gradient(270deg,hsla(0,0%,70.6%,.29) 90px,transparent 110px) 1 1;background-image:linear-gradient(270deg,rgba(35,35,35,.29),transparent)}',
            ],
          ],
          data: {},
        });
      function Wt(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-shortcuts-tile",
              [["mib3DropTarget", ""]],
              [[2, "shortcut--dragged", null]],
              [
                [null, "shortcutTapped"],
                [null, "disabledTap"],
                [null, "deleteShortcut"],
                [null, "mib3Longpress"],
              ],
              function (t, e, n) {
                var i = !0,
                  o = t.component;
                return (
                  "shortcutTapped" === e &&
                    (i = !1 !== o.executeShortcut(t.context.$implicit) && i),
                  "disabledTap" === e &&
                    (i =
                      !1 !==
                        (null != t.context.$implicit &&
                        t.context.$implicit.executeDisabledReason
                          ? o.executeShortcut(t.context.$implicit)
                          : void 0) && i),
                  "deleteShortcut" === e &&
                    (i = !1 !== o.deleteShortcut(t.context.$implicit) && i),
                  "mib3Longpress" === e &&
                    (i = !1 !== o.tileLongpressed() && i),
                  i
                );
              },
              pt,
              gt,
            )),
            i.xb(1, 147456, null, 0, H.a, [i.l, i.z], null, null),
            i.xb(
              2,
              147456,
              null,
              0,
              V.a,
              [H.a, [2, d.a], [2, j.a], N.a],
              { forceTouch: [0, "forceTouch"] },
              null,
            ),
            i.xb(
              3,
              212992,
              [[7, 4]],
              0,
              ft.a,
              [
                N.a,
                i.z,
                i.l,
                m.b,
                Y.a,
                V.a,
                [2, d.a],
                [2, j.a],
                [2, B.a],
                [2, G.a],
                [2, U.a],
                [2, Z.a],
              ],
              { forceTouchOverride: [0, "forceTouchOverride"] },
              { longpress: "mib3Longpress" },
            ),
            i.xb(
              4,
              16384,
              [
                [6, 4],
                [4, 4],
              ],
              0,
              mt.a,
              [i.l],
              { dragDropData: [0, "dragDropData"] },
              null,
            ),
            i.xb(
              5,
              147456,
              null,
              0,
              _t.a,
              [[2, ft.a], i.l, D.a, I.b],
              null,
              null,
            ),
            i.xb(
              6,
              49152,
              null,
              0,
              ut,
              [],
              {
                editingShortcuts: [0, "editingShortcuts"],
                executable: [1, "executable"],
                disabledReason: [2, "disabledReason"],
                shortcutsRoute: [3, "shortcutsRoute"],
                mainInfoText: [4, "mainInfoText"],
                iconUrl: [5, "iconUrl"],
                fallbackIconUrl: [6, "fallbackIconUrl"],
                subIconUrl: [7, "subIconUrl"],
                activated: [8, "activated"],
                showDisabledReason: [9, "showDisabledReason"],
                draggingShortcut: [10, "draggingShortcut"],
              },
              {
                shortcutTapped: "shortcutTapped",
                deleteShortcut: "deleteShortcut",
                disabledTap: "disabledTap",
              },
            ),
            i.Pb(131072, r.b, [i.h]),
            i.Pb(131072, r.b, [i.h]),
            i.Pb(131072, r.b, [i.h]),
            i.Pb(131072, r.b, [i.h]),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 2, 0, !n.configurationModeActive && void 0),
              t(e, 3, 0, !n.configurationModeActive && void 0),
              t(
                e,
                4,
                0,
                null == e.context.$implicit ? null : e.context.$implicit.name,
              ),
              t(e, 6, 1, [
                n.configurationModeActive,
                i.Yb(
                  e,
                  6,
                  1,
                  i
                    .Nb(e, 7)
                    .transform(
                      null == e.context.$implicit
                        ? null
                        : e.context.$implicit.executable$,
                    ),
                ),
                i.Yb(
                  e,
                  6,
                  2,
                  i
                    .Nb(e, 8)
                    .transform(
                      null == e.context.$implicit
                        ? null
                        : e.context.$implicit.disabledReason$,
                    ),
                ),
                null == e.context.$implicit ? null : e.context.$implicit.route,
                i.Yb(
                  e,
                  6,
                  4,
                  i.Nb(e, 9).transform(n.getMainInfoText(e.context.$implicit)),
                ),
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.iconUrl,
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.fallbackIconUrl,
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.subIconUrl,
                i.Yb(
                  e,
                  6,
                  8,
                  i
                    .Nb(e, 10)
                    .transform(
                      null == e.context.$implicit
                        ? null
                        : e.context.$implicit.activated$,
                    ),
                ),
                !(
                  null != e.context.$implicit &&
                  e.context.$implicit.executeDisabledReason
                ),
                n.editingShortcutsOrder,
              ]));
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 6).draggingShortcut);
          },
        );
      }
      function qt(t) {
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
              "au3-tile-grid",
              [
                ["class", "shortcuts__tilegrid"],
                ["id", "Shortcuts"],
                ["mib3DragDrop", "shortcuts"],
              ],
              null,
              [
                [null, "mib3Drop"],
                [null, "mib3DragDropCancel"],
                [null, "mib3DragDropPosition"],
              ],
              function (t, e, n) {
                var i = !0,
                  o = t.component;
                return (
                  "mib3Drop" === e && (i = !1 !== o.dropItem(n) && i),
                  "mib3DragDropCancel" === e &&
                    (i = !1 !== o.dropCancel(n) && i),
                  "mib3DragDropPosition" === e &&
                    (i = !1 !== o.tileDragged(n) && i),
                  i
                );
              },
              vt.b,
              vt.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              j.a,
              [i.l, i.D, y.a, N.a, [3, j.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              4407296,
              [[5, 4]],
              2,
              Ct.a,
              [i.l, i.z, xt.a, m.b, Pt.a, [2, D.a], N.a, I.b],
              {
                areaName: [0, "areaName"],
                mib3DragDropOverFeedback: [1, "mib3DragDropOverFeedback"],
              },
              {
                mib3Drop: "mib3Drop",
                mib3DragDropCancel: "mib3DragDropCancel",
                mib3DragDropPosition: "mib3DragDropPosition",
              },
            ),
            i.Tb(603979776, 6, { dropTargetDirectives: 1 }),
            i.Tb(603979776, 7, { longpressDirectives: 1 }),
            i.Sb(131584, null, s.a, s.a, [[3, s.a]]),
            i.Sb(512, null, X.a, X.a, [d.a]),
            i.xb(
              7,
              1032192,
              [[1, 4]],
              1,
              Ot.a,
              [i.s, i.h, yt.a, s.a, X.a, d.a, N.a],
              {
                paddingGridToIndicator: [0, "paddingGridToIndicator"],
                columns: [1, "columns"],
                rows: [2, "rows"],
                responsiveColumnSize: [3, "responsiveColumnSize"],
                trackTile: [4, "trackTile"],
                trackPageIndex: [5, "trackPageIndex"],
                lazyTileLoading: [6, "lazyTileLoading"],
                tiles: [7, "tiles"],
              },
              null,
            ),
            i.Tb(603979776, 8, { template: 0 }),
            (t()(), i.hb(0, [[8, 2]], null, 0, null, Wt)),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "Shortcuts"),
              t(e, 2, 0, "shortcuts", n.dragDropOverFeedback),
              t(e, 7, 0, 0, 4, 1, !0, n.trackTiles, !0, !1, n.shortcuts));
          },
          null,
        );
      }
      function Xt(t) {
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
                ["class", "shortcuts__no-shortcuts-saved"],
                ["id", "NoShortcutsSaved"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              nt.b,
              nt.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              j.a,
              [i.l, i.D, y.a, N.a, [3, j.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              245760,
              null,
              0,
              it.a,
              [[6, j.a], w.a, i.h, i.l, i.D, [2, ot.a], [2, lt.a], [2, at.a]],
              {
                id: [0, "id"],
                fixedNumberOfLines: [1, "fixedNumberOfLines"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
            i.Pb(131072, r.b, [i.h]),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "NoShortcutsSaved"),
              t(
                e,
                2,
                0,
                "NoShortcutsSaved",
                4,
                i.Yb(
                  e,
                  2,
                  2,
                  i.Nb(e, 3).transform(n.noShortcutsSavedTextConstant$),
                ),
              ));
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
      function Kt(t) {
        return i.ac(
          2,
          [
            i.Tb(671088640, 1, { tileGrid: 0 }),
            i.Tb(402653184, 2, { previousPageEdge: 0 }),
            i.Tb(402653184, 3, { nextPageEdge: 0 }),
            i.Tb(671088640, 4, { shortcutTiles: 1 }),
            i.Tb(671088640, 5, { dragDropArea: 1 }),
            (t()(), i.hb(16777216, null, null, 1, null, qt)),
            i.xb(
              6,
              16384,
              null,
              0,
              r.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(),
            i.yb(
              7,
              0,
              [
                [2, 0],
                ["previousPageEdge", 1],
              ],
              null,
              0,
              "div",
              [["class", "shortcuts__edge shortcuts__edge--previous-page"]],
              [[2, "shortcuts__edge--visible", null]],
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              8,
              0,
              [
                [3, 0],
                ["nextPageEdge", 1],
              ],
              null,
              0,
              "div",
              [["class", "shortcuts__edge shortcuts__edge--next-page"]],
              [[2, "shortcuts__edge--visible", null]],
              null,
              null,
              null,
              null,
            )),
            (t()(), i.hb(0, [["noShortcuts", 2]], null, 0, null, Xt)),
          ],
          function (t, e) {
            t(e, 6, 0, e.component.shortcuts.length, i.Nb(e, 9));
          },
          function (t, e) {
            var n = e.component;
            (t(e, 7, 0, n.configurationModeActive && !n.isOnFirstPage),
              t(e, 8, 0, n.configurationModeActive && !n.isOnLastPage));
          },
        );
      }
      var Jt = n("Y/5s"),
        Qt = n("l9Gk"),
        te = n("UQn4"),
        ee = n("I5OF"),
        ne = n("n6NA"),
        ie = i.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;display:block;width:1280px;height:898px}.presets[_ngcontent-%COMP%]{width:100%;height:238px;background-color:#000}mib3-haptic-debug[_ngcontent-%COMP%]{z-index:1010}",
            ],
          ],
          data: {},
        });
      function oe(t) {
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
              "au3-lower-display-keyboard",
              [],
              null,
              null,
              null,
              E,
              $,
            )),
            i.Sb(512, null, g.a, g.a, []),
            i.Sb(131584, null, b.a, b.a, []),
            i.xb(
              3,
              4440064,
              null,
              0,
              z.a,
              [i.h, C.c, D.a, I.b, k.a, g.a, b.a],
              null,
              null,
            ),
            (t()(),
            i.yb(
              4,
              0,
              null,
              null,
              5,
              "au3-shortcuts-overview",
              [
                ["class", "presets"],
                ["id", "presets"],
                ["mib3DragDropParent", ""],
              ],
              null,
              null,
              null,
              Kt,
              Zt,
            )),
            i.xb(
              5,
              212992,
              null,
              0,
              j.a,
              [i.l, i.D, y.a, N.a, [3, j.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(6, 16384, null, 0, Pt.a, [i.l], null, null),
            i.Sb(131584, null, b.a, b.a, []),
            i.Sb(512, null, g.a, g.a, []),
            i.xb(
              9,
              4440064,
              null,
              0,
              Ut,
              [N.a, i.h, D.a, xt.a, Yt.a, T.a, Mt.a, Vt, b.a, g.a, w.a, At.b],
              null,
              null,
            ),
            (t()(),
            i.yb(
              10,
              0,
              null,
              null,
              3,
              "mib3-haptic-debug",
              [
                ["ttDoNotToggleChildren", ""],
                ["ttIgnore", ""],
              ],
              null,
              [["document", "keydown.control.alt.KeyH"]],
              function (t, e, n) {
                var o = !0;
                return (
                  "document:keydown.control.alt.KeyH" === e &&
                    (o = !1 !== i.Nb(t, 13).toggleVisibility() && o),
                  o
                );
              },
              Jt.b,
              Jt.a,
            )),
            i.xb(11, 16384, null, 0, lt.a, [], null, null),
            i.xb(12, 16384, null, 0, Qt.a, [], null, null),
            i.xb(13, 114688, null, 0, te.a, [u.a, i.h], null, null),
          ],
          function (t, e) {
            (t(e, 3, 0), t(e, 5, 0, "presets"), t(e, 9, 0), t(e, 13, 0));
          },
          null,
        );
      }
      function le(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              5,
              "au3-lower-display",
              [],
              [[8, "className", 0]],
              null,
              null,
              oe,
              ie,
            )),
            i.Sb(135680, null, m.b, m.b, [_.a, N.a]),
            i.Sb(4608, null, u.a, u.a, [
              r.d,
              i.z,
              N.a,
              D.a,
              [2, U.a],
              [2, _.a],
            ]),
            i.Sb(256, null, K.b, !0, []),
            i.Sb(512, null, I.b, I.b, [yt.a, N.a, [2, K.b]]),
            i.xb(
              5,
              114688,
              null,
              0,
              Ft.a,
              [ee.a, D.a, I.b, i.r, ne.a, N.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            t(e, 5, 0);
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 5).class);
          },
        );
      }
      var ae = i.ub("au3-lower-display", Ft.a, le, {}, {}, []),
        re = n("aDqW"),
        se = n("/W5r"),
        ce = n("+Qv1"),
        ue = n("XtoR"),
        ge = n("jTHl"),
        de = n("zL3T"),
        be = n("vhbz"),
        he = n("/mWE"),
        pe = n("GiYO"),
        fe = n("I/e0"),
        me = n("Ohay");
      let _e = (() => {
        class t {
          constructor(t, e, n, i) {
            ((this.lockingService = t),
              (this.shortcutsSyncService = e),
              (this.popupManagementService = n),
              (this.logService = i),
              (this.destroy$$ = new St.a(1)),
              (this.logger = i.getLogger("lower.ShortcutsLockingService")));
          }
          ngOnDestroy() {
            (this.destroy$$.next(), this.destroy$$.complete());
          }
          initSubscriptions(t) {
            if (t === ct.T.BrowserFpk) {
              const t = this.lockingService
                  .getProperty({
                    context: ct.Bb.DEFAULT_CONTEXT,
                    type: ct.Eb.EDIT_MODE,
                  })
                  .pipe(
                    Object(zt.a)((t) => t.lock$),
                    Object(me.a)(),
                  ),
                e = this.shortcutsSyncService.shortcutsSyncState$.pipe(
                  Object($t.a)((t) => t.state),
                  Object(me.a)(),
                );
              Object(kt.b)(e, t)
                .pipe(Object(Dt.a)(this.destroy$$))
                .subscribe(([t, e]) => {
                  t === Bt.b.EDIT &&
                    e &&
                    (this.logger.info(
                      "initSubscriptions: edit mode locked, switching to state OPEN",
                    ),
                    this.shortcutsSyncService.setShortcutsState(Bt.b.OPEN),
                    this.popupManagementService.request(
                      ct.Db.DEFAULT_LOCKING_TOAST,
                    ));
                });
            }
          }
        }
        return (
          (t.ɵprov = i.bc({
            factory: function () {
              return new t(i.cc(O.i), i.cc(Vt), i.cc(S.a), i.cc(N.a));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
      var ve = n("Spuu"),
        Ce = n("7Zjo"),
        xe = n("y1q2"),
        Pe = n("1VvW"),
        Oe = n("+epw"),
        ye = n("zMPs"),
        Me = n("6Yk8"),
        Se = n("u6+O"),
        we = n("CIQC"),
        Te = n("REmV"),
        ke = n("Y3N+"),
        De = n("MJxn"),
        Ie = n("eIOF"),
        Le = n("t+4g"),
        Ne = n("myjn"),
        ze = n("fOZ7"),
        $e = n("8sI7");
      class Ae {}
      var Ee = n("QDrj");
      class Fe {
        static forRoot() {
          return { ngModule: Fe, providers: [Rt.e] };
        }
      }
      var Re = i.vb(o, [], function (t) {
        return i.Kb([
          i.Lb(512, i.j, i.X, [[8, [l.a, ae]], [3, i.j], i.x]),
          i.Lb(4608, r.m, r.l, [i.u]),
          i.Lb(4608, re.h, re.g, []),
          i.Lb(4608, re.d, re.f, []),
          i.Lb(4608, re.j, re.e, []),
          i.Lb(4608, re.c, re.b, []),
          i.Lb(4608, re.k, re.k, [
            re.l,
            re.h,
            re.d,
            re.j,
            re.c,
            re.m,
            re.o,
            re.n,
            re.a,
          ]),
          i.Lb(4608, se.b, se.b, [ce.e, [2, se.a]]),
          i.Lb(4608, ue.b, ue.b, [ce.e, [2, ue.a]]),
          i.Lb(4608, ge.b, ge.b, [ce.e, [2, ge.a]]),
          i.Lb(4608, de.b, de.b, [ce.e, [2, de.a]]),
          i.Lb(
            5120,
            be.a,
            function (t, e, n, i, o, l) {
              return [t, e, n, i, o, l];
            },
            [he.a, Mt.a, pe.a, fe.a, Vt, _e],
          ),
          i.Lb(4608, Rt.e, Rt.e, [
            ce.e,
            [2, Rt.d],
            [2, Rt.b],
            [2, Rt.c],
            [2, ce.b],
          ]),
          i.Lb(4608, ve.a, ve.a, [be.a, N.a]),
          i.Lb(4608, J.a, Ce.a, [i.r, S.a, y.a, O.i, xe.a, N.a]),
          i.Lb(1073742336, r.c, r.c, []),
          i.Lb(1073742336, Pe.n, Pe.n, [
            [2, Pe.s],
            [2, Pe.m],
          ]),
          i.Lb(1073742336, re.i, re.i, []),
          i.Lb(1073742336, Oe.a, Oe.a, []),
          i.Lb(1073742336, ye.a, ye.a, []),
          i.Lb(1073742336, Me.a, Me.a, []),
          i.Lb(1073742336, Se.a, Se.a, []),
          i.Lb(1073742336, we.a, we.a, []),
          i.Lb(1073742336, Te.a, Te.a, []),
          i.Lb(1073742336, ke.a, ke.a, []),
          i.Lb(1073742336, De.a, De.a, []),
          i.Lb(1073742336, Ie.a, Ie.a, []),
          i.Lb(1073742336, Le.a, Le.a, []),
          i.Lb(1073742336, Ne.a, Ne.a, []),
          i.Lb(1073742336, ze.a, ze.a, []),
          i.Lb(1073742336, $e.a, $e.a, []),
          i.Lb(1073742336, Ae, Ae, []),
          i.Lb(1073742336, Ee.a, Ee.a, []),
          i.Lb(1073742336, Fe, Fe, []),
          i.Lb(1073742336, o, o, []),
          i.Lb(256, re.o, void 0, []),
          i.Lb(256, re.m, void 0, []),
          i.Lb(256, re.n, void 0, []),
          i.Lb(256, re.a, void 0, []),
          i.Lb(
            1024,
            Pe.k,
            function () {
              return [[{ path: "", component: Ft.a }]];
            },
            [],
          ),
        ]);
      });
    },
    "4XZL": function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return x;
      }),
        n.d(e, "b", function () {
          return S;
        }));
      var i = n("kZht"),
        o = n("Xl9s"),
        l = n("fu7d"),
        a = n("bou3"),
        r = n("yNay"),
        s = n("IPO3"),
        c = n("An66"),
        u = n("8TlW"),
        g = n("ijxY"),
        d = n("Xo58"),
        b = n("m3Ja"),
        h = n("r+e+"),
        p = n("bmFL"),
        f = n("HVUF"),
        m = n("B3Zb"),
        _ = n("Ps6X"),
        v = n("6zvu"),
        C = n("OJ7R"),
        x =
          (n("URLa"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:flex;position:relative;padding:0 20px}.list-route-item-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%}.list-item__text-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%]{margin-right:30px}.component-layout-latin[_nghost-%COMP%]   .list-item__icon--end[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list-item__icon--end[_ngcontent-%COMP%]{margin-left:30px;transform:scaleX(1)}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%]{margin-left:30px}.component-layout-arabic[_nghost-%COMP%]   .list-item__icon--end[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list-item__icon--end[_ngcontent-%COMP%]{margin-right:30px;transform:scaleX(-1)}.fpk-stage-small[_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%]{display:none}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.list-item__text[_ngcontent-%COMP%]{flex:1 1 auto}.list-item__text--small[_ngcontent-%COMP%]{flex:1 1 auto;font-size:30px}',
              ],
            ],
            data: {},
          }));
      function P(t) {
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
              "au3-icon-with-overlay",
              [
                ["class", "list-item__icon--begin"],
                ["id", "list-item__icon--begin"],
              ],
              null,
              null,
              null,
              o.b,
              o.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              l.a,
              [i.l, i.D, a.a, r.a, [3, l.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              49152,
              null,
              0,
              s.a,
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
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "list-item__icon--begin"),
              t(
                e,
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
      function O(t) {
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
            (t()(), i.hb(16777216, null, null, 1, null, P)),
            i.xb(
              2,
              16384,
              null,
              0,
              c.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(0, null, null, 0)),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 2, 0, n.icon || n.iconFallback);
          },
          null,
        );
      }
      function y(t) {
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
              u.b,
              u.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              l.a,
              [i.l, i.D, a.a, r.a, [3, l.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              2,
              16384,
              null,
              0,
              g.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            i.xb(
              3,
              245760,
              null,
              0,
              d.a,
              [[6, l.a], b.a, i.h, i.l, i.D, [2, h.a], [2, g.a], [2, p.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(
              e,
              1,
              0,
              n.subtitleTextId
                ? n.subtitleTextId
                : "ListRouteItemSecondaryText",
              n.subtitleTextIdEnum,
            ),
              t(
                e,
                2,
                0,
                !n.hasSubtitle ||
                  !(n.subtitleDeveloperText || n.subtitleTextIdEnum),
              ),
              t(
                e,
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
      function M(t) {
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
              "au3-icon",
              [],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              f.b,
              f.a,
            )),
            i.xb(
              1,
              278528,
              null,
              0,
              c.i,
              [i.s, i.t, i.l, i.D],
              { ngClass: [0, "ngClass"] },
              null,
            ),
            i.xb(
              2,
              4243456,
              null,
              0,
              m.b,
              [r.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(
              e,
              1,
              0,
              n.doNotInvertIconInArabic
                ? "list-item__icon--end-not-inverted"
                : "list-item__icon--end",
            ),
              t(e, 2, 0, n.endIconFileName, n.listEndIconCategory));
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 2).iconComponentHidden);
          },
        );
      }
      function S(t) {
        return i.ac(
          2,
          [
            (t()(),
            i.yb(
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
            i.xb(
              1,
              212992,
              null,
              0,
              _.a,
              [[2, v.a], [8, null], [3, _.a], i.l, i.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, O)),
            i.xb(
              3,
              540672,
              null,
              0,
              C.a,
              [r.a, i.P, i.L],
              { ttStaticIf: [0, "ttStaticIf"] },
              null,
            ),
            (t()(),
            i.yb(
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
            (t()(),
            i.yb(
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
              u.b,
              u.a,
            )),
            i.xb(
              6,
              212992,
              null,
              0,
              l.a,
              [i.l, i.D, a.a, r.a, [3, l.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              7,
              16384,
              null,
              0,
              g.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            i.xb(
              8,
              245760,
              null,
              0,
              d.a,
              [[6, l.a], b.a, i.h, i.l, i.D, [2, h.a], [2, g.a], [2, p.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, y)),
            i.xb(
              10,
              16384,
              null,
              0,
              c.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, M)),
            i.xb(
              12,
              540672,
              null,
              0,
              C.a,
              [r.a, i.P, i.L],
              { ttStaticIf: [0, "ttStaticIf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, n.uiStateType),
              t(e, 3, 0, !n.iconStatic || n.icon || n.iconFallback),
              t(
                e,
                6,
                0,
                n.titleTextId ? n.titleTextId : "ListRouteItemText",
                n.titleTextIdEnum,
              ),
              t(e, 7, 0, !(n.titleDeveloperText || n.titleTextIdEnum)),
              t(
                e,
                8,
                0,
                n.titleDeveloperText,
                n.titleTextId ? n.titleTextId : "ListRouteItemText",
                1,
                n.titleNonI18nText,
              ),
              t(e, 10, 0, n.hasSubtitle),
              t(e, 12, 0, n.hasEndIcon));
          },
          function (t, e) {
            (t(
              e,
              0,
              0,
              i.Nb(e, 1).uiStateListHorizontal,
              i.Nb(e, 1).uiStateListVertical,
              i.Nb(e, 1).uiStateCoverLeft,
              i.Nb(e, 1).uiStateCoverRight,
              i.Nb(e, 1).uiStateCoverBottom,
              i.Nb(e, 1).uiStateButton,
              i.Nb(e, 1).uiStateByDabLeft,
              i.Nb(e, 1).uiStateByDabRight,
              i.Nb(e, 1).uiStateLbDabLeft,
              i.Nb(e, 1).uiStateLbDabRight,
            ),
              t(
                e,
                5,
                0,
                i.Nb(e, 8).backgroundColor,
                i.Nb(e, 8).fixedNumberOfLines,
                i.Nb(e, 8).mayContainLatinCharsForArabic,
                i.Nb(e, 8).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
    },
    EOxa: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return c;
      }),
        n.d(e, "b", function () {
          return g;
        }));
      var i = n("erIP"),
        o = n("kZht"),
        l = n("An66"),
        a = n("l9Gk"),
        r = n("8Wo1"),
        s = n("CDcS"),
        c =
          (n("Kds7"),
          n("yNay"),
          o.wb({
            encapsulation: 0,
            styles: [
              i.a,
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.icon__fallback-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;image-rendering:-webkit-optimize-contrast}.icon-element--hidden[_ngcontent-%COMP%], .lock-state-hidden[_nghost-%COMP%]{visibility:hidden}.lock-state-faded[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}",
              ],
            ],
            data: {},
          }));
      function u(t) {
        return o.ac(
          0,
          [
            (t()(),
            o.yb(
              0,
              0,
              null,
              null,
              3,
              "img",
              [
                ["class", "icon__content icon__fallback-content"],
                ["draggable", "false"],
                ["ttDoNotToggleChildren", ""],
              ],
              [
                [8, "src", 4],
                [4, "object-fit", null],
              ],
              null,
              null,
              null,
              null,
            )),
            o.xb(
              1,
              278528,
              null,
              0,
              l.i,
              [o.s, o.t, o.l, o.D],
              { klass: [0, "klass"], ngClass: [1, "ngClass"] },
              null,
            ),
            o.xb(2, 16384, null, 0, a.a, [], null, null),
            o.xb(
              3,
              212992,
              null,
              0,
              r.a,
              [[3, s.a], o.l, o.z],
              { blocksRouting: [0, "blocksRouting"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "icon__content icon__fallback-content", n.iconClass),
              t(e, 3, 0, n.blocksRouting));
          },
          function (t, e) {
            var n = e.component;
            t(e, 0, 0, n.fallbackIconUrl, n.scaleMode);
          },
        );
      }
      function g(t) {
        return o.ac(
          2,
          [
            o.Tb(402653184, 1, { iconElement: 0 }),
            (t()(),
            o.yb(
              1,
              0,
              [
                [1, 0],
                ["icon", 1],
              ],
              null,
              2,
              "img",
              [
                ["class", "icon__content"],
                ["draggable", "false"],
              ],
              [
                [2, "icon-element--hidden", null],
                [8, "src", 4],
                [4, "object-fit", null],
              ],
              null,
              null,
              null,
              null,
            )),
            o.xb(
              2,
              278528,
              null,
              0,
              l.i,
              [o.s, o.t, o.l, o.D],
              { klass: [0, "klass"], ngClass: [1, "ngClass"] },
              null,
            ),
            o.xb(
              3,
              212992,
              null,
              0,
              r.a,
              [[3, s.a], o.l, o.z],
              { blocksRouting: [0, "blocksRouting"] },
              null,
            ),
            (t()(), o.hb(16777216, null, null, 1, null, u)),
            o.xb(
              5,
              16384,
              null,
              0,
              l.k,
              [o.P, o.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 2, 0, "icon__content", n.iconClass),
              t(e, 3, 0, n.blocksRouting),
              t(e, 5, 0, n.showFallbackIcon));
          },
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, n.iconElementHidden, n.iconUrl, n.scaleMode);
          },
        );
      }
    },
    U6SP: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return v;
      }),
        n.d(e, "b", function () {
          return P;
        }));
      var i = n("kZht"),
        o = n("HVUF"),
        l = n("B3Zb"),
        a = n("yNay"),
        r = n("8TlW"),
        s = n("fu7d"),
        c = n("bou3"),
        u = n("Xo58"),
        g = n("m3Ja"),
        d = n("r+e+"),
        b = n("ijxY"),
        h = n("bmFL"),
        p = n("l9Gk"),
        f = n("Ps6X"),
        m = n("6zvu"),
        _ = n("An66"),
        v =
          (n("1ZTq"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}.state-disabled[_nghost-%COMP%]   .button__icon[_ngcontent-%COMP%], .state-disabled[_nghost-%COMP%]   .button__text[_ngcontent-%COMP%]{filter:grayscale(100%) brightness(.4)}[_nghost-%COMP%]{position:relative;display:block;overflow:hidden;max-width:100%}.button-container[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:center;width:100%;height:100%;font-size:40px}.button--activated[_nghost-%COMP%]{filter:brightness(120%)}.button--horizontal[_nghost-%COMP%]   .button-container[_ngcontent-%COMP%]{flex-direction:row}.button--horizontal[_nghost-%COMP%]   .button__icon[_ngcontent-%COMP%]{margin-bottom:0}.button--horizontal[_nghost-%COMP%]   .button__text[_ngcontent-%COMP%]{align-self:center}.button--horizontal[_nghost-%COMP%]   .button__text--with-icon[_ngcontent-%COMP%]{margin:0 17px 0 -17px}.button--with-border[_nghost-%COMP%]{border-left:1px solid silver;border-bottom:1px solid silver;border-right:1px solid silver}.button--with-thick-border[_nghost-%COMP%]{padding:0 2px 3px}.button--with-thick-border[_nghost-%COMP%]:before{border-width:0 0 3px 2px;background-image:linear-gradient(0deg,hsla(0,0%,100%,.1),transparent 55%);padding-left:2px;margin-right:2px;right:2px}.button--with-thick-border[_nghost-%COMP%]:after, .button--with-thick-border[_nghost-%COMP%]:before{border-style:solid;border-image:linear-gradient(0deg,hsla(0,0%,100%,.7),transparent 81%) 3 2;position:absolute;display:block;content:"";left:0;top:0;bottom:0}.button--with-thick-border[_nghost-%COMP%]:after{border-width:0 2px 0 0;right:0}.button__text[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;position:relative;text-align:center;color:#fff}.button__text--no-icon[_ngcontent-%COMP%]{margin:30px 20px}.button__text--with-icon[_ngcontent-%COMP%]{margin:0 11px 11px}.button__icon[_ngcontent-%COMP%]{align-self:center}.button__icon--with-text[_ngcontent-%COMP%]{margin-bottom:-47px}',
              ],
            ],
            data: {},
          }));
      function C(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
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
              o.b,
              o.a,
            )),
            i.xb(
              1,
              4243456,
              null,
              0,
              l.b,
              [a.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, n.icon, n.iconCategory);
          },
          function (t, e) {
            t(e, 0, 0, e.component.hasText, i.Nb(e, 1).iconComponentHidden);
          },
        );
      }
      function x(t) {
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
              r.b,
              r.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [i.l, i.D, c.a, a.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              245760,
              null,
              0,
              u.a,
              [[6, s.a], g.a, i.h, i.l, i.D, [2, d.a], [2, b.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "ButtonLabel"),
              t(e, 2, 0, n.developerText, "ButtonLabel", 1, n.nonI18nText));
          },
          function (t, e) {
            var n = e.component;
            t(
              e,
              0,
              0,
              !n.icon && !n.flatButton,
              n.icon,
              i.Nb(e, 2).backgroundColor,
              i.Nb(e, 2).fixedNumberOfLines,
              i.Nb(e, 2).mayContainLatinCharsForArabic,
              i.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function P(t) {
        return i.ac(
          2,
          [
            (t()(),
            i.yb(
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
            i.xb(
              1,
              16384,
              null,
              0,
              b.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            i.xb(
              2,
              16384,
              null,
              0,
              p.a,
              [],
              { ttDoNotToggleDynamicValue: [0, "ttDoNotToggleDynamicValue"] },
              null,
            ),
            i.xb(
              3,
              212992,
              null,
              0,
              f.a,
              [[2, m.a], [8, null], [3, f.a], i.l, i.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, C)),
            i.xb(
              5,
              16384,
              null,
              0,
              _.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, x)),
            i.xb(
              7,
              16384,
              null,
              0,
              _.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, !n.hasText),
              t(e, 2, 0, !n.hasText || n.hasOnlyText),
              t(e, 3, 0, n.uiStateType),
              t(e, 5, 0, n.icon),
              t(e, 7, 0, n.hasText));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              i.Nb(e, 3).uiStateListHorizontal,
              i.Nb(e, 3).uiStateListVertical,
              i.Nb(e, 3).uiStateCoverLeft,
              i.Nb(e, 3).uiStateCoverRight,
              i.Nb(e, 3).uiStateCoverBottom,
              i.Nb(e, 3).uiStateButton,
              i.Nb(e, 3).uiStateByDabLeft,
              i.Nb(e, 3).uiStateByDabRight,
              i.Nb(e, 3).uiStateLbDabLeft,
              i.Nb(e, 3).uiStateLbDabRight,
            );
          },
        );
      }
    },
    Xast: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return h;
      }),
        n.d(e, "b", function () {
          return S;
        }));
      var i = n("kZht"),
        o = n("An66"),
        l = n("qT1L"),
        a = n("Aebk"),
        r = n("OJ7R"),
        s = n("yNay"),
        c = n("Zxd5"),
        u = n("iVEM"),
        g = n("qzuC"),
        d = n("Tr//"),
        b = n("oxWk"),
        h =
          (n("z6QT"),
          n("0Bsn"),
          n("3bpu"),
          n("jgeG"),
          n("nSAP"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{padding-top:48px;display:block;flex:1;position:relative}.tile-grid__pager[_ngcontent-%COMP%], [_nghost-%COMP%]{height:100%}.tile-grid__pager-allow-touch-actions[_ngcontent-%COMP%]{touch-action:auto}.tile-grid__pager--fixed-size[_ngcontent-%COMP%]{max-height:448px}.tile-grid__pager--no-mask-image[_ngcontent-%COMP%]{-webkit-mask-image:none;mask-image:none}.tile-grid__container[_ngcontent-%COMP%]{display:grid;justify-content:center;align-content:center;height:100%}.component-layout-latin[_nghost-%COMP%]   .tile-grid__page[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .tile-grid__page[_ngcontent-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%]   .tile-grid__page[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .tile-grid__page[_ngcontent-%COMP%]{direction:rtl}",
              ],
            ],
            data: {},
          }));
      function p(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
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
      function f(t) {
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
            (t()(), i.hb(16777216, null, null, 1, null, p)),
            i.xb(
              2,
              16384,
              null,
              0,
              o.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfThen: [1, "ngIfThen"] },
              null,
            ),
            (t()(), i.hb(0, null, null, 0)),
          ],
          function (t, e) {
            t(
              e,
              2,
              0,
              e.component.isBeforeTemplateVisible(e.parent.context.index),
              e.parent.context.$implicit,
            );
          },
          null,
        );
      }
      function m(t) {
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
              "au3-view-pager-item",
              [],
              null,
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(1, 49152, [[2, 4]], 0, a.a, [], null, null),
            (t()(), i.hb(16777216, null, 0, 1, null, f)),
            i.xb(
              3,
              540672,
              null,
              0,
              r.a,
              [s.a, i.P, i.L],
              { ttStaticIf: [0, "ttStaticIf"] },
              null,
            ),
          ],
          function (t, e) {
            t(e, 3, 0, null != e.context.$implicit.createEmbeddedView);
          },
          null,
        );
      }
      function _(t) {
        return i.ac(0, [(t()(), i.hb(0, null, null, 0))], null, null);
      }
      function v(t) {
        return i.ac(
          0,
          [
            (t()(), i.hb(16777216, null, null, 2, null, _)),
            i.xb(
              1,
              540672,
              null,
              0,
              o.r,
              [i.P],
              {
                ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
                ngTemplateOutlet: [1, "ngTemplateOutlet"],
              },
              null,
            ),
            i.Qb(2, { $implicit: 0, pageIndex: 1, tileIndex: 2 }),
            (t()(), i.hb(0, null, null, 0)),
          ],
          function (t, e) {
            var n = e.component,
              i = t(
                e,
                2,
                0,
                e.parent.context.$implicit,
                e.parent.parent.parent.context.index,
                e.parent.context.index,
              );
            t(e, 1, 0, i, n.template);
          },
          null,
        );
      }
      function C(t) {
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
              "div",
              [["class", "tile-grid__tile"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), i.hb(16777216, null, null, 1, null, v)),
            i.xb(
              2,
              16384,
              null,
              0,
              o.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            t(e, 2, 0, void 0 !== e.context.$implicit);
          },
          null,
        );
      }
      function x(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
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
            (t()(),
            i.yb(
              1,
              0,
              null,
              null,
              4,
              "div",
              [["class", "tile-grid__container"]],
              [[4, "paddingBottom", "px"]],
              null,
              null,
              null,
              null,
            )),
            i.xb(
              2,
              278528,
              null,
              0,
              o.n,
              [i.l, i.t, i.D],
              { ngStyle: [0, "ngStyle"] },
              null,
            ),
            i.Qb(3, { "grid-template-columns": 0, "grid-template-rows": 1 }),
            (t()(), i.hb(16777216, null, null, 1, null, C)),
            i.xb(
              5,
              278528,
              null,
              0,
              o.j,
              [i.P, i.L, i.s],
              { ngForOf: [0, "ngForOf"], ngForTrackBy: [1, "ngForTrackBy"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component,
              i = t(e, 3, 0, n.templateColumnsStyle, n.templateRowsStyle);
            (t(e, 2, 0, i),
              t(e, 5, 0, e.parent.context.$implicit, n.trackByFunction));
          },
          function (t, e) {
            t(e, 1, 0, e.component.paddingGridToIndicator);
          },
        );
      }
      function P(t) {
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
              "au3-view-pager-item",
              [["class", "tile-grid__page"]],
              null,
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(1, 49152, [[2, 4]], 0, a.a, [], null, null),
            (t()(), i.hb(16777216, null, 0, 1, null, x)),
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
          ],
          function (t, e) {
            t(e, 3, 0, e.component.isPageVisible(e.context.index));
          },
          null,
        );
      }
      function O(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
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
      function y(t) {
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
            (t()(), i.hb(16777216, null, null, 1, null, O)),
            i.xb(
              2,
              16384,
              null,
              0,
              o.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfThen: [1, "ngIfThen"] },
              null,
            ),
            (t()(), i.hb(0, null, null, 0)),
          ],
          function (t, e) {
            t(
              e,
              2,
              0,
              e.component.isAfterTemplateVisible(e.parent.context.index),
              e.parent.context.$implicit,
            );
          },
          null,
        );
      }
      function M(t) {
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
              "au3-view-pager-item",
              [],
              null,
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(1, 49152, [[2, 4]], 0, a.a, [], null, null),
            (t()(), i.hb(16777216, null, 0, 1, null, y)),
            i.xb(
              3,
              540672,
              null,
              0,
              r.a,
              [s.a, i.P, i.L],
              { ttStaticIf: [0, "ttStaticIf"] },
              null,
            ),
          ],
          function (t, e) {
            t(e, 3, 0, null != e.context.$implicit.createEmbeddedView);
          },
          null,
        );
      }
      function S(t) {
        return i.ac(
          2,
          [
            i.Tb(402653184, 1, { viewPager: 0 }),
            (t()(),
            i.yb(
              1,
              0,
              null,
              null,
              8,
              "au3-view-pager",
              [["class", "tile-grid__pager"]],
              [
                [2, "tile-grid__pager--fixed-size", null],
                [2, "tile-grid__pager--no-mask-image", null],
                [2, "tile-grid__pager-allow-touch-actions", null],
              ],
              [
                [null, "pageChange"],
                [null, "pageCountChange"],
                [null, "visiblePagesChange"],
              ],
              function (t, e, n) {
                var i = !0,
                  o = t.component;
                return (
                  "pageChange" === e && (i = !1 !== o.onPageChange(n) && i),
                  "pageCountChange" === e &&
                    (i = !1 !== o.pageCountChange.emit(n) && i),
                  "visiblePagesChange" === e &&
                    (i = !1 !== o.visiblePagesChanged() && i),
                  i
                );
              },
              c.b,
              c.a,
            )),
            i.xb(
              2,
              4440064,
              [[1, 4]],
              1,
              u.b,
              [i.h, i.z, g.a, d.a, b.a, s.a],
              {
                indicatorMode: [0, "indicatorMode"],
                captureDragPointer: [1, "captureDragPointer"],
                rubberband: [2, "rubberband"],
                useWidgetHistory: [3, "useWidgetHistory"],
                disabledDragAndFing: [4, "disabledDragAndFing"],
              },
              {
                pageChange: "pageChange",
                pageCountChange: "pageCountChange",
                visiblePagesChange: "visiblePagesChange",
              },
            ),
            i.Tb(603979776, 2, { pages: 1 }),
            (t()(), i.hb(16777216, null, 0, 1, null, m)),
            i.xb(
              5,
              278528,
              null,
              0,
              o.j,
              [i.P, i.L, i.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, 0, 1, null, P)),
            i.xb(
              7,
              278528,
              null,
              0,
              o.j,
              [i.P, i.L, i.s],
              { ngForOf: [0, "ngForOf"], ngForTrackBy: [1, "ngForTrackBy"] },
              null,
            ),
            (t()(), i.hb(16777216, null, 0, 1, null, M)),
            i.xb(
              9,
              278528,
              null,
              0,
              o.j,
              [i.P, i.L, i.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(
              e,
              2,
              0,
              n.indicatorMode,
              n.captureDragPointer,
              n.rubberband,
              n.useWidgetHistory,
              n.disabledDragAndFing,
            ),
              t(e, 5, 0, n.beforeTemplates),
              t(e, 7, 0, n.pages, n.trackPages),
              t(e, 9, 0, n.afterTemplates));
          },
          function (t, e) {
            var n = e.component;
            t(
              e,
              1,
              0,
              !n.responsiveColumnSize,
              n.disableMaskImage,
              n.allowTouchActions,
            );
          },
        );
      }
    },
    Xl9s: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return u;
      }),
        n.d(e, "b", function () {
          return d;
        }));
      var i = n("kZht"),
        o = n("HVUF"),
        l = n("B3Zb"),
        a = n("yNay"),
        r = n("EOxa"),
        s = n("Kds7"),
        c = n("An66"),
        u =
          (n("IPO3"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                ".icon__content[_ngcontent-%COMP%], [_nghost-%COMP%]{position:relative}.icon__overlay-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0}",
              ],
            ],
            data: {},
          }));
      function g(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
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
              o.b,
              o.a,
            )),
            i.xb(
              1,
              4243456,
              null,
              0,
              l.b,
              [a.a, i.z],
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
          function (t, e) {
            var n = e.component;
            t(
              e,
              1,
              0,
              n.overlayFileName,
              n.category,
              n.scaleMode,
              n.blocksRouting,
              n.ignoreCategorySize,
            );
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 1).iconComponentHidden);
          },
        );
      }
      function d(t) {
        return i.ac(
          2,
          [
            (t()(),
            i.yb(
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
            i.xb(
              1,
              4964352,
              null,
              0,
              s.a,
              [i.h, i.z, a.a],
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
            (t()(), i.hb(16777216, null, null, 1, null, g)),
            i.xb(
              3,
              16384,
              null,
              0,
              c.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(
              e,
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
              t(e, 3, 0, !!n.overlayFileName));
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 1).iconComponentHidden);
          },
        );
      }
    },
    Zxd5: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return b;
      }),
        n.d(e, "b", function () {
          return p;
        }));
      var i = n("kZht"),
        o = n("bMuc"),
        l = n("Nd8J"),
        a = n("VcEz"),
        r = n("BMrr"),
        s = n("yNay"),
        c = n("OtM5"),
        u = n("rZwJ"),
        g = n("fu7d"),
        d = n("An66"),
        b =
          (n("iVEM"),
          n("qzuC"),
          n("Tr//"),
          n("oxWk"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden;color:#fff;touch-action:none;-webkit-mask-image:linear-gradient(270deg,transparent,#000 10px,#000 calc(100% - 10px),transparent);mask-image:linear-gradient(270deg,transparent,#000 10px,#000 calc(100% - 10px),transparent)}.view-pager__pages[_ngcontent-%COMP%]{display:flex;height:calc(100% - 4px);flex:1;will-change:transform}.view-pager__pages--snap[_ngcontent-%COMP%]{transition:transform .35s ease-out}.view-pager__indicators[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:flex-end;height:4px}.component-layout-latin[_nghost-%COMP%]   .view-pager__indicators[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .view-pager__indicators[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .view-pager__pages[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .view-pager__pages[_ngcontent-%COMP%]{flex-direction:row}.component-layout-arabic[_nghost-%COMP%]   .view-pager__indicators[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .view-pager__indicators[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .view-pager__pages[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .view-pager__pages[_ngcontent-%COMP%]{flex-direction:row-reverse}.view-pager__indicator[_ngcontent-%COMP%]{width:17px;height:100%;margin:0 6px;background-color:grey;transition:background-color .5s}.view-pager__indicator--active[_ngcontent-%COMP%]{background-color:#fff}",
              ],
            ],
            data: {},
          }));
      function h(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              0,
              "span",
              [["class", "view-pager__indicator"]],
              [[2, "view-pager__indicator--active", null]],
              null,
              null,
              null,
              null,
            )),
          ],
          null,
          function (t, e) {
            t(e, 0, 0, e.context.index === e.component.activePage);
          },
        );
      }
      function p(t) {
        return i.ac(
          2,
          [
            i.Tb(402653184, 1, { container: 0 }),
            (t()(),
            i.yb(
              1,
              0,
              [
                [1, 0],
                ["container", 1],
              ],
              null,
              3,
              "div",
              [["class", "view-pager__pages"]],
              null,
              [
                [null, "mib3Drag"],
                [null, "mib3DragStart"],
                [null, "mib3DragEnd"],
                [null, "mib3Fling"],
                [null, "pointerdown"],
                [null, "transitionend"],
              ],
              function (t, e, n) {
                var i = !0,
                  o = t.component;
                return (
                  "mib3Drag" === e && (i = !1 !== o.drag(n) && i),
                  "mib3DragStart" === e && (i = !1 !== o.dragStart(n) && i),
                  "mib3DragEnd" === e && (i = !1 !== o.dragEnd() && i),
                  "mib3Fling" === e && (i = !1 !== o.fling(n) && i),
                  "pointerdown" === e && (i = !1 !== o.pointerDown() && i),
                  "transitionend" === e &&
                    (i = !1 !== o.animationFinished() && i),
                  i
                );
              },
              null,
              null,
            )),
            i.xb(2, 147456, null, 0, o.a, [i.l, i.z], null, null),
            i.xb(
              3,
              212992,
              null,
              0,
              l.b,
              [i.l, i.z, a.b, r.a, s.a, o.a, [2, c.a], [2, u.a], [2, g.a]],
              {
                mib3DragCapturePointer: [0, "mib3DragCapturePointer"],
                mib3DragStartThreshold: [1, "mib3DragStartThreshold"],
                mib3DragExclusiveThreshold: [2, "mib3DragExclusiveThreshold"],
                mib3DragAndFlingDirection: [3, "mib3DragAndFlingDirection"],
                mib3DragAndFlingDisabled: [4, "mib3DragAndFlingDisabled"],
              },
              {
                mib3Drag: "mib3Drag",
                mib3DragStart: "mib3DragStart",
                mib3DragEnd: "mib3DragEnd",
                mib3Fling: "mib3Fling",
              },
            ),
            i.Mb(null, 0),
            (t()(),
            i.yb(
              5,
              0,
              null,
              null,
              2,
              "div",
              [["class", "view-pager__indicators"]],
              [[4, "visibility", null]],
              null,
              null,
              null,
              null,
            )),
            (t()(), i.hb(16777216, null, null, 1, null, h)),
            i.xb(
              7,
              278528,
              null,
              0,
              d.j,
              [i.P, i.L, i.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(
              e,
              3,
              0,
              n.captureDragPointer,
              n.dragStartThreshold,
              n.dragExclusiveThreshold,
              n.dragAndFlingDirection,
              n.disabledDragAndFing,
            ),
              t(e, 7, 0, n.pages));
          },
          function (t, e) {
            t(e, 5, 0, e.component.indicatorVisibility);
          },
        );
      }
    },
    qT1L: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return o;
      }),
        n.d(e, "b", function () {
          return l;
        }));
      var i = n("kZht"),
        o =
          (n("Aebk"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                "[_nghost-%COMP%]{flex:0 0 100%;overflow:hidden;transform:translateZ(0)}",
              ],
            ],
            data: {},
          }));
      function l(t) {
        return i.ac(2, [i.Mb(null, 0)], null, null);
      }
    },
  },
]);
