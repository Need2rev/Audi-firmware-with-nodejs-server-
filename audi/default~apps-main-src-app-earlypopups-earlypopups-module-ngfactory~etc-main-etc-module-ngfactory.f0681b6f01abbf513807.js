(window.webpackJsonp = window.webpackJsonp || []).push([
  [33, 106, 108],
  {
    Olpa: function (t, n, e) {
      "use strict";
      (e.d(n, "a", function () {
        return a;
      }),
        e("Yi6/"));
      var l = e("Bfm3"),
        i = e("B5qw");
      class a {
        constructor(t) {
          ((this.logService = t),
            (this.logger = this.logService.getLogger("etc.MapCardStatusPipe")));
        }
        transform(t) {
          return this.mapCardStatus(t);
        }
        mapCardStatus(t) {
          if (t)
            switch (t.cardState) {
              case i.b.CardNotInserted:
                return l.b.CARD_NOT_INSERTED;
              case i.b.CardNotInsertedMmi:
                return l.b.CARD_NOT_INSERTED_MMI;
              case i.b.CardNotReadable:
              case i.b.CardDefect:
                return l.b.CARD_NOT_READABLE;
              case i.b.SystemFailure:
                return l.b.HARDWARE_DEFECT;
              case i.b.CommunicationError:
                return l.b.COMMUNICATION_ERROR;
              case i.b.CardExpired:
                return l.b.CARD_EXPIRED;
              case i.b.CardReady:
                return l.b.CARD_READY;
              case i.b.ReaderNotRegistered:
                return l.b.READER_NOT_REGISTERED;
              case i.b.Unknown:
                return l.b.UNKNOWN;
              default:
                return (
                  this.logger.warn(
                    `mapCardStatus: unknown EtcCardStatus ${t.cardState}, ${t.errorCode}`,
                  ),
                  l.b.UNKNOWN
                );
            }
        }
      }
    },
    QSdq: function (t, n, e) {
      "use strict";
      (e.d(n, "a", function () {
        return G;
      }),
        e.d(n, "b", function () {
          return j;
        }));
      var l = e("kZht"),
        i = e("HVUF"),
        a = e("T8E5"),
        o = e("B3Zb"),
        r = e("yNay"),
        s = e("8TlW"),
        u = e("fu7d"),
        c = e("bou3"),
        b = e("ijxY"),
        d = e("Xo58"),
        f = e("m3Ja"),
        g = e("r+e+"),
        m = e("bmFL"),
        h = e("XgBi"),
        p = e("sJfC"),
        _ = e("OtM5"),
        C = e("bMuc"),
        x = e("ZIdM"),
        y = e("3bpu"),
        P = e("6zvu"),
        O = e("VcEz"),
        M = e("y9xZ"),
        v = e("+sw+"),
        S = e("BMrr"),
        T = e("IEns"),
        I = e("Nd8J"),
        N = e("rZwJ"),
        D = e("z6QT"),
        E = e("flsk"),
        R = e("FQEI"),
        A = e("O82V"),
        w = e("Eln4"),
        L = e("evAh"),
        k = e("Ps6X"),
        z = e("CpzC"),
        F = e("0Bsn"),
        H = e("5GjX"),
        B = e("mYyF"),
        V = e("v98a"),
        J = e("aOG8"),
        Y = e("Krzs"),
        Z = e("An66"),
        G =
          (e("D0GA"),
          l.wb({
            encapsulation: 0,
            styles: [
              [
                '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:flex;position:relative;padding:0 20px}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%]{margin-right:30px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%]{margin-left:30px}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.list-item__text[_ngcontent-%COMP%]{max-height:100%;flex:1 1 auto}.list-item__wrapper[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;justify-content:space-between}.text-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;max-width:calc(100% - 66px)}.text-wrapper--icon-front[_ngcontent-%COMP%]{max-width:calc(100% - 215px)}.list-item__text--small[_ngcontent-%COMP%]{font-size:30px}.list-item__text--small--light[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular)}',
              ],
            ],
            data: {},
          }));
      function U(t) {
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
              a.a,
              [],
              { ttDoNotToggleDynamicValue: [0, "ttDoNotToggleDynamicValue"] },
              null,
            ),
            l.xb(
              2,
              4243456,
              null,
              0,
              o.b,
              [r.a, l.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (t, n) {
            var e = n.component;
            (t(n, 1, 0, !e.possibleIcon),
              t(n, 2, 0, e.icon, e.listIconCategory));
          },
          function (t, n) {
            t(n, 0, 0, l.Nb(n, 2).iconComponentHidden);
          },
        );
      }
      function W(t) {
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
              d.a,
              [[6, u.a], f.a, l.h, l.l, l.D, [2, g.a], [2, b.a], [2, m.a]],
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
              d.a,
              [[6, u.a], f.a, l.h, l.l, l.D, [2, g.a], [2, b.a], [2, m.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (t, n) {
            var e = n.component;
            (t(
              n,
              2,
              0,
              e.textId ? e.textId : "ListSwitchItemText",
              e.textIdEnum,
            ),
              t(n, 3, 0, !e.hasSubtitle),
              t(
                n,
                4,
                0,
                e.developerText,
                e.textId ? e.textId : "ListSwitchItemText",
                1,
                e.nonI18nText,
              ),
              t(
                n,
                6,
                0,
                e.subtitleId ? e.subtitleId : "ListSwitchItemSubtitle",
                e.subtitleIdEnum,
              ),
              t(n, 7, 0, !e.hasSubtitle),
              t(
                n,
                8,
                0,
                e.developerTextSubtitle,
                e.subtitleId ? e.subtitleId : "ListSwitchItemSubtitle",
                1,
                e.nonI18nTextSubtitle,
              ));
          },
          function (t, n) {
            var e = n.component;
            (t(n, 0, 0, !!e.icon),
              t(
                n,
                1,
                0,
                l.Nb(n, 4).backgroundColor,
                l.Nb(n, 4).fixedNumberOfLines,
                l.Nb(n, 4).mayContainLatinCharsForArabic,
                l.Nb(n, 4).shortenWithEllipsisForArabic,
              ),
              t(
                n,
                5,
                0,
                e.lightSubtitle,
                l.Nb(n, 8).backgroundColor,
                l.Nb(n, 8).fixedNumberOfLines,
                l.Nb(n, 8).mayContainLatinCharsForArabic,
                l.Nb(n, 8).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function K(t) {
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
              d.a,
              [[6, u.a], f.a, l.h, l.l, l.D, [2, g.a], [2, b.a], [2, m.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (t, n) {
            var e = n.component;
            (t(
              n,
              1,
              0,
              e.textId ? e.textId : "ListSwitchItemText",
              e.textIdEnum,
            ),
              t(n, 2, 0, e.hasSubtitle || !(e.developerText || e.textIdEnum)),
              t(
                n,
                3,
                0,
                e.developerText,
                e.textId ? e.textId : "ListSwitchItemText",
                e.fixedNumberOfLines,
                e.nonI18nText,
              ));
          },
          function (t, n) {
            t(
              n,
              0,
              0,
              l.Nb(n, 3).backgroundColor,
              l.Nb(n, 3).fixedNumberOfLines,
              l.Nb(n, 3).mayContainLatinCharsForArabic,
              l.Nb(n, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function X(t) {
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
              function (t, n, e) {
                var l = !0;
                return (
                  "checkedChange" === n &&
                    (l = !1 !== t.component.valueChange.emit(e) && l),
                  l
                );
              },
              h.b,
              h.a,
            )),
            l.xb(1, 16384, null, 0, a.a, [], null, null),
            l.xb(
              2,
              4374528,
              [
                [2, 4],
                ["switchButton", 4],
              ],
              0,
              p.a,
              [l.h, [2, _.a]],
              { checked: [0, "checked"], resetDelay: [1, "resetDelay"] },
              { checkedChange: "checkedChange" },
            ),
          ],
          function (t, n) {
            var e = n.component;
            t(n, 2, 0, e.value, e.resetDelay);
          },
          function (t, n) {
            t(n, 0, 0, l.Nb(n, 2).checkedInternal);
          },
        );
      }
      function j(t) {
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
              function (t, n, e) {
                var l = !0,
                  i = t.component;
                return (
                  "mib3TapPointer" === n && (l = !1 !== i.itemTapped(e) && l),
                  "mib3Fling" === n && (l = !1 !== i.onFling(e) && l),
                  "mib3FocusPress" === n && (l = !1 !== i.focusPressed() && l),
                  l
                );
              },
              null,
              null,
            )),
            l.xb(3, 147456, null, 0, C.a, [l.l, l.z], null, null),
            l.xb(
              4,
              147456,
              null,
              0,
              x.a,
              [C.a, [2, y.a], [2, u.a], r.a],
              null,
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              P.a,
              [
                r.a,
                O.b,
                x.a,
                [2, y.a],
                [2, u.a],
                [2, _.a],
                [2, M.a],
                [2, v.a],
                l.z,
                S.a,
                l.l,
                [2, T.a],
              ],
              null,
              { tapPointer: "mib3TapPointer" },
            ),
            l.xb(
              6,
              212992,
              null,
              0,
              I.b,
              [l.l, l.z, O.b, S.a, r.a, C.a, [2, _.a], [2, N.a], [2, u.a]],
              {
                mib3DragAndFlingDirection: [0, "mib3DragAndFlingDirection"],
                mib3DragAndFlingDisabled: [1, "mib3DragAndFlingDisabled"],
              },
              { mib3Fling: "mib3Fling" },
            ),
            l.Sb(131584, null, D.a, D.a, [[3, D.a]]),
            l.xb(
              8,
              4407296,
              null,
              0,
              E.a,
              [
                l.l,
                R.a,
                l.h,
                D.a,
                [2, A.a],
                [2, y.b],
                [2, y.a],
                [2, w.a],
                [2, L.a],
              ],
              null,
              null,
            ),
            l.xb(
              9,
              212992,
              null,
              0,
              k.a,
              [[2, P.a], [8, null], [3, k.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              z.a,
              [[2, P.a], [2, _.a], [2, F.a], [2, E.a], [2, H.b], l.l, B.a, V.b],
              null,
              null,
            ),
            l.xb(
              11,
              147456,
              null,
              0,
              J.a,
              [[2, E.a], [2, P.a], [2, O.b], Y.a],
              null,
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, U)),
            l.xb(
              13,
              16384,
              null,
              0,
              Z.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, W)),
            l.xb(
              15,
              16384,
              null,
              0,
              Z.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), l.hb(0, [["singleLine", 2]], null, 0, null, K)),
            (t()(), l.hb(16777216, null, null, 1, null, X)),
            l.xb(
              18,
              16384,
              null,
              0,
              Z.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, n) {
            var e = n.component;
            (t(n, 5, 0),
              t(n, 6, 0, e.flingDirection, e.flingDisabled),
              t(n, 8, 0),
              t(n, 9, 0, e.uiStateType),
              t(n, 13, 0, e.icon),
              t(n, 15, 0, e.hasSubtitle, l.Nb(n, 16)),
              t(n, 18, 0, e.showRightMenuItems));
          },
          function (t, n) {
            t(n, 2, 1, [
              l.Nb(n, 8).markerClassEnabled,
              l.Nb(n, 9).uiStateListHorizontal,
              l.Nb(n, 9).uiStateListVertical,
              l.Nb(n, 9).uiStateCoverLeft,
              l.Nb(n, 9).uiStateCoverRight,
              l.Nb(n, 9).uiStateCoverBottom,
              l.Nb(n, 9).uiStateButton,
              l.Nb(n, 9).uiStateByDabLeft,
              l.Nb(n, 9).uiStateByDabRight,
              l.Nb(n, 9).uiStateLbDabLeft,
              l.Nb(n, 9).uiStateLbDabRight,
            ]);
          },
        );
      }
    },
    ihOk: function (t, n, e) {
      "use strict";
      (e.d(n, "a", function () {
        return g;
      }),
        e.d(n, "b", function () {
          return _;
        }));
      var l = e("kZht"),
        i = e("An66"),
        a = e("fu7d"),
        o = e("bou3"),
        r = e("yNay"),
        s = e("8TlW"),
        u = e("Xo58"),
        c = e("m3Ja"),
        b = e("r+e+"),
        d = e("ijxY"),
        f = e("bmFL"),
        g =
          (e("ZMtB"),
          e("fzcM"),
          l.wb({
            encapsulation: 0,
            styles: [
              [
                '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{height:100%;width:100%;max-height:100%;max-width:100%;min-height:0;display:flex;justify-content:center;flex-direction:column}.disclaimer-description[_ngcontent-%COMP%]{width:100%;font-size:40px;text-align:center}',
              ],
            ],
            data: {},
          }));
      function m(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
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
            l.xb(
              1,
              540672,
              null,
              0,
              i.r,
              [l.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (t()(), l.hb(0, null, null, 0)),
          ],
          function (t, n) {
            t(n, 1, 0, n.component.contentTemplate);
          },
          null,
        );
      }
      function h(t) {
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
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            l.Mb(null, 0),
            (t()(), l.hb(16777216, null, null, 1, null, m)),
            l.xb(
              3,
              16384,
              null,
              0,
              i.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), l.hb(0, null, null, 0)),
          ],
          function (t, n) {
            t(n, 3, 0, n.component.hasContentTemplate);
          },
          null,
        );
      }
      function p(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
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
            (t()(),
            l.yb(
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
              s.b,
              s.a,
            )),
            l.xb(
              3,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, o.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            l.xb(
              4,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], c.a, l.h, l.l, l.D, [2, b.a], [2, d.a], [2, f.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (t, n) {
            var e = n.component;
            (t(n, 1, 0, "Disclaimer"),
              t(
                n,
                3,
                0,
                e.restrictionReason && e.disabledTextEnum[e.restrictionReason]
                  ? e.restrictionReason
                  : e.disabledReasonEnum.ERROR,
                e.disabledTextEnum,
              ),
              t(
                n,
                4,
                0,
                e.disabledTextEnum[e.restrictionReason] ||
                  e.disabledTextEnum.ERROR,
                e.restrictionReason && e.disabledTextEnum[e.restrictionReason]
                  ? e.restrictionReason
                  : e.disabledReasonEnum.ERROR,
                6,
                e.nonI18nDisabledText,
              ));
          },
          function (t, n) {
            t(
              n,
              2,
              0,
              l.Nb(n, 4).backgroundColor,
              l.Nb(n, 4).fixedNumberOfLines,
              l.Nb(n, 4).mayContainLatinCharsForArabic,
              l.Nb(n, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function _(t) {
        return l.ac(
          2,
          [
            (t()(), l.hb(16777216, null, null, 1, null, h)),
            l.xb(
              1,
              16384,
              null,
              0,
              i.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), l.hb(0, [["disclaimerText", 2]], null, 0, null, p)),
          ],
          function (t, n) {
            t(n, 1, 0, !n.component.active, l.Nb(n, 2));
          },
          null,
        );
      }
    },
  },
]);
