(window.webpackJsonp = window.webpackJsonp || []).push([
  [9, 106],
  {
    QSdq: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return Y;
      }),
        n.d(e, "b", function () {
          return K;
        }));
      var l = n("kZht"),
        i = n("HVUF"),
        o = n("T8E5"),
        a = n("B3Zb"),
        r = n("yNay"),
        s = n("8TlW"),
        u = n("fu7d"),
        c = n("bou3"),
        b = n("ijxY"),
        g = n("Xo58"),
        d = n("m3Ja"),
        h = n("r+e+"),
        p = n("bmFL"),
        f = n("XgBi"),
        m = n("sJfC"),
        _ = n("OtM5"),
        x = n("bMuc"),
        C = n("ZIdM"),
        P = n("3bpu"),
        v = n("6zvu"),
        O = n("VcEz"),
        M = n("y9xZ"),
        y = n("+sw+"),
        w = n("BMrr"),
        I = n("IEns"),
        T = n("Nd8J"),
        N = n("rZwJ"),
        k = n("z6QT"),
        D = n("flsk"),
        S = n("FQEI"),
        z = n("O82V"),
        L = n("Eln4"),
        E = n("evAh"),
        F = n("Ps6X"),
        V = n("CpzC"),
        A = n("0Bsn"),
        B = n("5GjX"),
        H = n("mYyF"),
        W = n("v98a"),
        R = n("aOG8"),
        U = n("Krzs"),
        X = n("An66"),
        Y =
          (n("D0GA"),
          l.wb({
            encapsulation: 0,
            styles: [
              [
                '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:flex;position:relative;padding:0 20px}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%]{margin-right:30px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%]{margin-left:30px}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.list-item__text[_ngcontent-%COMP%]{max-height:100%;flex:1 1 auto}.list-item__wrapper[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;justify-content:space-between}.text-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;max-width:calc(100% - 66px)}.text-wrapper--icon-front[_ngcontent-%COMP%]{max-width:calc(100% - 215px)}.list-item__text--small[_ngcontent-%COMP%]{font-size:30px}.list-item__text--small--light[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular)}',
              ],
            ],
            data: {},
          }));
      function J(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "list-item__icon--begin"],
                ["ttDoNotToggle", ""],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              i.b,
              i.a,
            )),
            l.xb(
              1,
              16384,
              null,
              0,
              o.a,
              [],
              { ttDoNotToggleDynamicValue: [0, "ttDoNotToggleDynamicValue"] },
              null,
            ),
            l.xb(
              2,
              4243456,
              null,
              0,
              a.b,
              [r.a, l.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, !n.possibleIcon),
              t(e, 2, 0, n.icon, n.listIconCategory));
          },
          function (t, e) {
            t(e, 0, 0, l.Nb(e, 2).iconComponentHidden);
          },
        );
      }
      function Z(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              8,
              "div",
              [["class", "text-wrapper"]],
              [[2, "text-wrapper--icon-front", null]],
              null,
              null,
              null,
              null,
            )),
            (t()(),
            l.yb(
              1,
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
              s.b,
              s.a,
            )),
            l.xb(
              2,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, c.a, r.a, [3, u.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            l.xb(
              3,
              16384,
              null,
              0,
              b.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            l.xb(
              4,
              245760,
              null,
              0,
              g.a,
              [[6, u.a], d.a, l.h, l.l, l.D, [2, h.a], [2, b.a], [2, p.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            (t()(),
            l.yb(
              5,
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
                [2, "list-item__text--small--light", null],
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
            l.xb(
              6,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, c.a, r.a, [3, u.a], [8, null]],
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
              g.a,
              [[6, u.a], d.a, l.h, l.l, l.D, [2, h.a], [2, b.a], [2, p.a]],
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
              2,
              0,
              n.textId ? n.textId : "ListSwitchItemText",
              n.textIdEnum,
            ),
              t(e, 3, 0, !n.hasSubtitle),
              t(
                e,
                4,
                0,
                n.developerText,
                n.textId ? n.textId : "ListSwitchItemText",
                1,
                n.nonI18nText,
              ),
              t(
                e,
                6,
                0,
                n.subtitleId ? n.subtitleId : "ListSwitchItemSubtitle",
                n.subtitleIdEnum,
              ),
              t(e, 7, 0, !n.hasSubtitle),
              t(
                e,
                8,
                0,
                n.developerTextSubtitle,
                n.subtitleId ? n.subtitleId : "ListSwitchItemSubtitle",
                1,
                n.nonI18nTextSubtitle,
              ));
          },
          function (t, e) {
            var n = e.component;
            (t(e, 0, 0, !!n.icon),
              t(
                e,
                1,
                0,
                l.Nb(e, 4).backgroundColor,
                l.Nb(e, 4).fixedNumberOfLines,
                l.Nb(e, 4).mayContainLatinCharsForArabic,
                l.Nb(e, 4).shortenWithEllipsisForArabic,
              ),
              t(
                e,
                5,
                0,
                n.lightSubtitle,
                l.Nb(e, 8).backgroundColor,
                l.Nb(e, 8).fixedNumberOfLines,
                l.Nb(e, 8).mayContainLatinCharsForArabic,
                l.Nb(e, 8).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function j(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
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
              s.b,
              s.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, c.a, r.a, [3, u.a], [8, null]],
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
              g.a,
              [[6, u.a], d.a, l.h, l.l, l.D, [2, h.a], [2, b.a], [2, p.a]],
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
              n.textId ? n.textId : "ListSwitchItemText",
              n.textIdEnum,
            ),
              t(e, 2, 0, n.hasSubtitle || !(n.developerText || n.textIdEnum)),
              t(
                e,
                3,
                0,
                n.developerText,
                n.textId ? n.textId : "ListSwitchItemText",
                n.fixedNumberOfLines,
                n.nonI18nText,
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              l.Nb(e, 3).backgroundColor,
              l.Nb(e, 3).fixedNumberOfLines,
              l.Nb(e, 3).mayContainLatinCharsForArabic,
              l.Nb(e, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function G(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              [[1, 0]],
              null,
              2,
              "au3-switch-button",
              [["ttDoNotToggle", ""]],
              [[2, "checked", null]],
              [[null, "checkedChange"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "checkedChange" === e &&
                    (l = !1 !== t.component.valueChange.emit(n) && l),
                  l
                );
              },
              f.b,
              f.a,
            )),
            l.xb(1, 16384, null, 0, o.a, [], null, null),
            l.xb(
              2,
              4374528,
              [
                [2, 4],
                ["switchButton", 4],
              ],
              0,
              m.a,
              [l.h, [2, _.a]],
              { checked: [0, "checked"], resetDelay: [1, "resetDelay"] },
              { checkedChange: "checkedChange" },
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 2, 0, n.value, n.resetDelay);
          },
          function (t, e) {
            t(e, 0, 0, l.Nb(e, 2).checkedInternal);
          },
        );
      }
      function K(t) {
        return l.ac(
          2,
          [
            l.Tb(671088640, 1, { switchButton: 0 }),
            l.Tb(671088640, 2, { switchButtonComponent: 0 }),
            (t()(),
            l.yb(
              2,
              0,
              null,
              null,
              16,
              "div",
              [["class", "list-item__wrapper"]],
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
                [null, "mib3TapPointer"],
                [null, "mib3Fling"],
                [null, "mib3FocusPress"],
              ],
              function (t, e, n) {
                var l = !0,
                  i = t.component;
                return (
                  "mib3TapPointer" === e && (l = !1 !== i.itemTapped(n) && l),
                  "mib3Fling" === e && (l = !1 !== i.onFling(n) && l),
                  "mib3FocusPress" === e && (l = !1 !== i.focusPressed() && l),
                  l
                );
              },
              null,
              null,
            )),
            l.xb(3, 147456, null, 0, x.a, [l.l, l.z], null, null),
            l.xb(
              4,
              147456,
              null,
              0,
              C.a,
              [x.a, [2, P.a], [2, u.a], r.a],
              null,
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              v.a,
              [
                r.a,
                O.b,
                C.a,
                [2, P.a],
                [2, u.a],
                [2, _.a],
                [2, M.a],
                [2, y.a],
                l.z,
                w.a,
                l.l,
                [2, I.a],
              ],
              null,
              { tapPointer: "mib3TapPointer" },
            ),
            l.xb(
              6,
              212992,
              null,
              0,
              T.b,
              [l.l, l.z, O.b, w.a, r.a, x.a, [2, _.a], [2, N.a], [2, u.a]],
              {
                mib3DragAndFlingDirection: [0, "mib3DragAndFlingDirection"],
                mib3DragAndFlingDisabled: [1, "mib3DragAndFlingDisabled"],
              },
              { mib3Fling: "mib3Fling" },
            ),
            l.Sb(131584, null, k.a, k.a, [[3, k.a]]),
            l.xb(
              8,
              4407296,
              null,
              0,
              D.a,
              [
                l.l,
                S.a,
                l.h,
                k.a,
                [2, z.a],
                [2, P.b],
                [2, P.a],
                [2, L.a],
                [2, E.a],
              ],
              null,
              null,
            ),
            l.xb(
              9,
              212992,
              null,
              0,
              F.a,
              [[2, v.a], [8, null], [3, F.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              V.a,
              [[2, v.a], [2, _.a], [2, A.a], [2, D.a], [2, B.b], l.l, H.a, W.b],
              null,
              null,
            ),
            l.xb(
              11,
              147456,
              null,
              0,
              R.a,
              [[2, D.a], [2, v.a], [2, O.b], U.a],
              null,
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, J)),
            l.xb(
              13,
              16384,
              null,
              0,
              X.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Z)),
            l.xb(
              15,
              16384,
              null,
              0,
              X.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), l.hb(0, [["singleLine", 2]], null, 0, null, j)),
            (t()(), l.hb(16777216, null, null, 1, null, G)),
            l.xb(
              18,
              16384,
              null,
              0,
              X.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 5, 0),
              t(e, 6, 0, n.flingDirection, n.flingDisabled),
              t(e, 8, 0),
              t(e, 9, 0, n.uiStateType),
              t(e, 13, 0, n.icon),
              t(e, 15, 0, n.hasSubtitle, l.Nb(e, 16)),
              t(e, 18, 0, n.showRightMenuItems));
          },
          function (t, e) {
            t(e, 2, 1, [
              l.Nb(e, 8).markerClassEnabled,
              l.Nb(e, 9).uiStateListHorizontal,
              l.Nb(e, 9).uiStateListVertical,
              l.Nb(e, 9).uiStateCoverLeft,
              l.Nb(e, 9).uiStateCoverRight,
              l.Nb(e, 9).uiStateCoverBottom,
              l.Nb(e, 9).uiStateButton,
              l.Nb(e, 9).uiStateByDabLeft,
              l.Nb(e, 9).uiStateByDabRight,
              l.Nb(e, 9).uiStateLbDabLeft,
              l.Nb(e, 9).uiStateLbDabRight,
            ]);
          },
        );
      }
    },
    VwjD: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return P;
      }),
        n.d(e, "b", function () {
          return N;
        }));
      var l = n("kZht"),
        i = n("Xl9s"),
        o = n("fu7d"),
        a = n("bou3"),
        r = n("yNay"),
        s = n("IPO3"),
        u = n("8TlW"),
        c = n("ijxY"),
        b = n("Xo58"),
        g = n("m3Ja"),
        d = n("r+e+"),
        h = n("bmFL"),
        p = n("An66"),
        f = n("HVUF"),
        m = n("T8E5"),
        _ = n("B3Zb"),
        x = n("Ps6X"),
        C = n("6zvu"),
        P =
          (n("/AMN"),
          l.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:block;width:100%;position:relative}.container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:0 20px}.main-text[_ngcontent-%COMP%]{flex-grow:1}.main-text[_ngcontent-%COMP%], .main-text--title[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.main-text--title[_ngcontent-%COMP%]{font-size:40px}.main-text--subtitle[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;font-size:30px;flex-grow:1}.preview-text[_ngcontent-%COMP%]{width:495px;min-width:495px;max-width:495px}.preview-text--title[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:end}.previewtime-container[_ngcontent-%COMP%]{position:relative;height:100%;width:100%;top:0;left:0;display:flex;flex-direction:row-reverse;align-items:center}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .icon__begin[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .icon__begin[_ngcontent-%COMP%]{margin-right:30px}.component-layout-latin[_nghost-%COMP%]   .preview-text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .preview-text[_ngcontent-%COMP%]{margin-left:30px}.component-layout-latin[_nghost-%COMP%]   .icon__end[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .icon__end[_ngcontent-%COMP%]{transform:scaleX(1);margin-left:30px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .icon__begin[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .icon__begin[_ngcontent-%COMP%]{margin-left:30px}.component-layout-arabic[_nghost-%COMP%]   .preview-text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .preview-text[_ngcontent-%COMP%]{margin-right:30px}.component-layout-arabic[_nghost-%COMP%]   .icon__end[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .icon__end[_ngcontent-%COMP%]{transform:scaleX(-1);margin-right:30px}.fpk-stage-small[_nghost-%COMP%]   .icon__begin[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .icon__begin[_ngcontent-%COMP%]{display:none}.fpk-stage-small[_nghost-%COMP%]   .preview-text[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .preview-text[_ngcontent-%COMP%]{width:228px;min-width:228px;margin-left:30px}.fpk-stage-small[_nghost-%COMP%]   .icon__end[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .icon__end[_ngcontent-%COMP%]{margin-left:15px}.component-layout-arabic   .fpk-stage-small   [_nghost-%COMP%]   .icon__end[_ngcontent-%COMP%]{margin-right:15px}.component-layout-arabic   .fpk-stage-small   [_nghost-%COMP%]   .preview-text[_ngcontent-%COMP%]{margin-right:30px}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}@media (max-width:1280px){.preview-text[_ngcontent-%COMP%]{width:350px;min-width:350px}}',
              ],
            ],
            data: {},
          }));
      function v(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon-with-overlay",
              [
                ["class", "icon__begin"],
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
              o.a,
              [l.l, l.D, a.a, r.a, [3, o.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
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
                n.iconCategory,
              ));
          },
          null,
        );
      }
      function O(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "main-text--subtitle"],
                ["id", "Subtitle"],
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
            l.xb(
              1,
              212992,
              null,
              0,
              o.a,
              [l.l, l.D, a.a, r.a, [3, o.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              16384,
              null,
              0,
              c.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            l.xb(
              3,
              245760,
              null,
              0,
              b.a,
              [[6, o.a], g.a, l.h, l.l, l.D, [2, d.a], [2, c.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "Subtitle"),
              t(e, 2, 0, !n.subtitleDeveloperText),
              t(
                e,
                3,
                0,
                n.subtitleDeveloperText,
                "Subtitle",
                n.subtitleLineWithEmptyText
                  ? n.noBreakSpaceUnicode
                  : n.subtitleNonI18nText,
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              l.Nb(e, 3).backgroundColor,
              l.Nb(e, 3).fixedNumberOfLines,
              l.Nb(e, 3).mayContainLatinCharsForArabic,
              l.Nb(e, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function M(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "preview-text--title"],
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
            l.xb(
              1,
              212992,
              null,
              0,
              o.a,
              [l.l, l.D, a.a, r.a, [3, o.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            l.xb(
              2,
              16384,
              null,
              0,
              c.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            l.xb(
              3,
              245760,
              null,
              0,
              b.a,
              [[6, o.a], g.a, l.h, l.l, l.D, [2, d.a], [2, c.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
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
              n.previewTextId ? n.previewTextId : "PreviewText",
              n.previewTextEnum,
            ),
              t(e, 2, 0, !n.previewDeveloperText && !n.previewTextEnum),
              t(
                e,
                3,
                0,
                n.previewDeveloperText,
                n.previewTextId ? n.previewTextId : "PreviewText",
                n.previewNonI18nText,
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              l.Nb(e, 3).backgroundColor,
              l.Nb(e, 3).fixedNumberOfLines,
              l.Nb(e, 3).mayContainLatinCharsForArabic,
              l.Nb(e, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function y(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [
                ["class", "previewtime-container"],
                ["ttIgnore", ""],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            l.xb(
              1,
              16384,
              null,
              0,
              c.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            l.Mb(null, 0),
          ],
          function (t, e) {
            t(e, 1, 0, !e.component.usePreviewContent);
          },
          null,
        );
      }
      function w(t) {
        return l.ac(
          0,
          [
            (t()(), l.hb(16777216, null, null, 1, null, y)),
            l.xb(
              1,
              16384,
              null,
              0,
              p.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), l.hb(0, null, null, 0)),
          ],
          function (t, e) {
            t(e, 1, 0, e.component.usePreviewContent);
          },
          null,
        );
      }
      function I(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              5,
              "div",
              [["class", "preview-text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            l.xb(
              1,
              278528,
              null,
              0,
              p.n,
              [l.l, l.t, l.D],
              { ngStyle: [0, "ngStyle"] },
              null,
            ),
            l.Qb(2, { "max-width.px": 0, "min-width.px": 1, width: 2 }),
            (t()(), l.hb(16777216, null, null, 1, null, M)),
            l.xb(
              4,
              16384,
              null,
              0,
              p.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), l.hb(0, [["previewContentTemplate", 2]], null, 0, null, w)),
          ],
          function (t, e) {
            var n = e.component,
              i =
                void 0 !== n.previewWidth
                  ? t(e, 2, 0, n.previewWidth, n.previewWidth, n.previewWidth)
                  : l.ab;
            (t(e, 1, 0, i),
              t(
                e,
                4,
                0,
                n.previewDeveloperText || n.previewNonI18nText,
                l.Nb(e, 5),
              ));
          },
          null,
        );
      }
      function T(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "icon__end"],
                ["ttDoNotToggle", ""],
              ],
              [
                [4, "visibility", null],
                [2, "icon-component--hidden", null],
              ],
              null,
              null,
              f.b,
              f.a,
            )),
            l.xb(
              1,
              16384,
              null,
              0,
              m.a,
              [],
              { ttDoNotToggleDynamicValue: [0, "ttDoNotToggleDynamicValue"] },
              null,
            ),
            l.xb(
              2,
              4243456,
              null,
              0,
              _.b,
              [r.a, l.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, n.doNotToggleIcon),
              t(e, 2, 0, "E020_submenu.webp", n.listIconCategories.List));
          },
          function (t, e) {
            var n = e.component;
            t(
              e,
              0,
              0,
              n.type === n.listItemTypeEnum.ITEM_TYPE_SWITCH_SUBMENU_HIDDEN
                ? "hidden"
                : "inherit",
              l.Nb(e, 2).iconComponentHidden,
            );
          },
        );
      }
      function N(t) {
        return l.ac(
          2,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              13,
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
              x.a,
              [[2, C.a], [8, null], [3, x.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, v)),
            l.xb(
              3,
              16384,
              null,
              0,
              p.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(),
            l.yb(
              4,
              0,
              null,
              null,
              5,
              "div",
              [["class", "main-text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            l.yb(
              5,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "main-text--title"]],
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
            l.xb(
              6,
              212992,
              null,
              0,
              o.a,
              [l.l, l.D, a.a, r.a, [3, o.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            l.xb(
              7,
              245760,
              null,
              0,
              b.a,
              [[6, o.a], g.a, l.h, l.l, l.D, [2, d.a], [2, c.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, O)),
            l.xb(
              9,
              16384,
              null,
              0,
              p.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, I)),
            l.xb(
              11,
              16384,
              null,
              0,
              p.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, T)),
            l.xb(
              13,
              16384,
              null,
              0,
              p.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, n.uiStateType),
              t(e, 3, 0, n.icon || n.iconFallback),
              t(
                e,
                6,
                0,
                n.titleTextId ? n.titleTextId : "ListPreviewItemText",
                n.titleTextIdEnum,
              ),
              t(
                e,
                7,
                0,
                n.titleDeveloperText,
                n.titleTextId ? n.titleTextId : "ListPreviewItemText",
                n.titleNonI18nText,
              ),
              t(
                e,
                9,
                0,
                n.subtitleDeveloperText ||
                  n.subtitleNonI18nText ||
                  n.subtitleLineWithEmptyText,
              ),
              t(
                e,
                11,
                0,
                n.previewDeveloperText ||
                  n.previewNonI18nText ||
                  n.usePreviewContent,
              ),
              t(e, 13, 0, n.showArrow));
          },
          function (t, e) {
            (t(
              e,
              0,
              0,
              l.Nb(e, 1).uiStateListHorizontal,
              l.Nb(e, 1).uiStateListVertical,
              l.Nb(e, 1).uiStateCoverLeft,
              l.Nb(e, 1).uiStateCoverRight,
              l.Nb(e, 1).uiStateCoverBottom,
              l.Nb(e, 1).uiStateButton,
              l.Nb(e, 1).uiStateByDabLeft,
              l.Nb(e, 1).uiStateByDabRight,
              l.Nb(e, 1).uiStateLbDabLeft,
              l.Nb(e, 1).uiStateLbDabRight,
            ),
              t(
                e,
                5,
                0,
                l.Nb(e, 7).backgroundColor,
                l.Nb(e, 7).fixedNumberOfLines,
                l.Nb(e, 7).mayContainLatinCharsForArabic,
                l.Nb(e, 7).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
    },
  },
]);
