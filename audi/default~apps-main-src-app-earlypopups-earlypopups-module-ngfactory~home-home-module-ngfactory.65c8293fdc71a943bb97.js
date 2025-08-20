(window.webpackJsonp = window.webpackJsonp || []).push([
  [34],
  {
    "/CBQ": function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return ja;
      }),
        n.d(e, "b", function () {
          return qa;
        }));
      var l = n("kZht"),
        a = n("HVUF"),
        i = n("B3Zb"),
        o = n("yNay"),
        r = n("8TlW"),
        u = n("fu7d"),
        s = n("bou3"),
        c = n("ijxY"),
        b = n("Xo58"),
        d = n("m3Ja"),
        p = n("r+e+"),
        h = n("bmFL"),
        m = n("Ps6X"),
        g = n("6zvu"),
        f = n("An66"),
        x = n("7dxq"),
        C = l.wb({
          encapsulation: 0,
          styles: [
            [
              '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}.state-disabled[_nghost-%COMP%]   .dashboard-operation-panel-item__icon[_ngcontent-%COMP%], .state-disabled[_nghost-%COMP%]   .dashboard-operation-panel-item__text[_ngcontent-%COMP%]{filter:grayscale(100%) brightness(.4)}[_nghost-%COMP%]{display:block;position:relative;max-width:100%;flex:1}[_nghost-%COMP%]:not(:first-of-type){margin-left:2px}[_nghost-%COMP%]:not(:first-of-type):before{border-width:0 0 0 2px;border-style:solid;border-image:linear-gradient(0deg,hsla(0,0%,100%,.8),transparent 90%) 2;left:-2px;position:absolute;content:"";top:15px;bottom:14px}.item-container[_ngcontent-%COMP%]{height:100%;display:flex;justify-content:center;align-items:center}.dashboard-operation-panel-item__text[_ngcontent-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:40px;max-width:361px}',
            ],
          ],
          data: {},
        });
      function _(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "dashboard-operation-panel-item__icon"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              a.b,
              a.a,
            )),
            l.xb(
              1,
              4243456,
              null,
              0,
              i.b,
              [o.a, l.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, n.icon, n.iconCategory);
          },
          function (t, e) {
            t(e, 0, 0, l.Nb(e, 1).iconComponentHidden);
          },
        );
      }
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
              3,
              "au3-i18n-label",
              [
                ["class", "dashboard-operation-panel-item__text"],
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
              r.b,
              r.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
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
              [[6, u.a], d.a, l.h, l.l, l.D, [2, p.a], [2, c.a], [2, h.a]],
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
            (t(e, 1, 0, ""),
              t(e, 2, 0, !n.developerText),
              t(e, 3, 0, n.developerText, "", 1, n.nonI18nValue));
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
          2,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              5,
              "div",
              [
                ["class", "item-container"],
                ["id", "dashboardOperationPanelItem"],
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
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              212992,
              null,
              0,
              m.a,
              [[2, g.a], [8, null], [3, m.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, _)),
            l.xb(
              4,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), l.hb(0, [["text", 2]], null, 0, null, v)),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "dashboardOperationPanelItem"),
              t(e, 2, 0, n.uiStateType),
              t(e, 4, 0, n.icon, l.Nb(e, 5)));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              l.Nb(e, 2).uiStateListHorizontal,
              l.Nb(e, 2).uiStateListVertical,
              l.Nb(e, 2).uiStateCoverLeft,
              l.Nb(e, 2).uiStateCoverRight,
              l.Nb(e, 2).uiStateCoverBottom,
              l.Nb(e, 2).uiStateButton,
              l.Nb(e, 2).uiStateByDabLeft,
              l.Nb(e, 2).uiStateByDabRight,
              l.Nb(e, 2).uiStateLbDabLeft,
              l.Nb(e, 2).uiStateLbDabRight,
            );
          },
        );
      }
      var P = n("bMuc"),
        O = n("ZIdM"),
        T = n("3bpu"),
        M = n("OtM5"),
        S = n("9ZFG"),
        N = n("VcEz"),
        L = n("y9xZ"),
        I = n("+sw+"),
        D = n("BMrr"),
        A = n("IEns"),
        E = n("vwU6"),
        w = n("z6QT"),
        k = n("flsk"),
        z = n("FQEI"),
        $ = n("O82V"),
        R = n("Eln4"),
        H = n("evAh"),
        B = n("YcCK"),
        V = n("mYyF"),
        j = n("v98a"),
        Y = n("CpzC"),
        F = n("0Bsn"),
        G = n("5GjX"),
        U = n("aOG8"),
        W = n("Krzs"),
        q = n("bAEk"),
        Q = l.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;width:100%;height:100%}",
            ],
          ],
          data: {},
        });
      function K(t) {
        return l.ac(2, [l.Mb(null, 0)], null, null);
      }
      var Z = n("6Hch"),
        X = n("xWRT"),
        J = n("VpaP"),
        tt = l.wb({
          encapsulation: 0,
          styles: [
            [
              '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;flex:1;overflow:hidden;display:flex;flex-direction:column;justify-content:space-around;align-items:center;font-size:30px;padding:20px}.background[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-mask-image:linear-gradient(180deg,#000,transparent);mask-image:linear-gradient(180deg,#000,transparent);filter:blur(30px);transform:scale(1.25)}.cover[_ngcontent-%COMP%]{position:relative;min-height:0;flex-shrink:1}.cover[_ngcontent-%COMP%]:not(:last-child){margin-bottom:20px}.cover--fill[_ngcontent-%COMP%]{width:100%}.label[_ngcontent-%COMP%]{position:relative;max-width:100%;flex:0 0 auto;text-align:center}.lock-state-hidden[_nghost-%COMP%]{visibility:hidden}.lock-state-faded[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}',
            ],
          ],
          data: {},
        });
      function et(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "background"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              a.b,
              a.a,
            )),
            l.xb(
              1,
              4243456,
              null,
              0,
              i.b,
              [o.a, l.z],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                scaleMode: [2, "scaleMode"],
                ignoreCategorySize: [3, "ignoreCategorySize"],
              },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, n.iconName, n.iconCategory, n.IconScaleMode.Cover, !0);
          },
          function (t, e) {
            t(e, 0, 0, l.Nb(e, 1).iconComponentHidden);
          },
        );
      }
      function nt(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "cover"]],
              [
                [2, "cover--fill", null],
                [2, "icon-component--hidden", null],
              ],
              null,
              null,
              a.b,
              a.a,
            )),
            l.xb(
              1,
              4243456,
              null,
              0,
              i.b,
              [o.a, l.z],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                scaleMode: [2, "scaleMode"],
                ignoreCategorySize: [3, "ignoreCategorySize"],
              },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, n.iconName, n.iconCategory, n.coverScaleMode, !0);
          },
          function (t, e) {
            var n = e.component;
            t(
              e,
              0,
              0,
              n.coverScaleMode === n.IconScaleMode.Fill,
              l.Nb(e, 1).iconComponentHidden,
            );
          },
        );
      }
      function lt(t) {
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
                ["class", "label"],
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
              r.b,
              r.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
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
              [[6, u.a], d.a, l.h, l.l, l.D, [2, p.a], [2, c.a], [2, h.a]],
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
            (t(e, 1, 0, n.labelTextId, n.labelIdEnumType),
              t(e, 2, 0, n.ignoreLabel),
              t(
                e,
                3,
                0,
                n.labelDeveloperText,
                n.labelTextId,
                n.labelFixedNumberOfLines,
                n.labelNonI18nValue,
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
      function at(t) {
        return l.ac(
          2,
          [
            (t()(), l.hb(16777216, null, null, 1, null, et)),
            l.xb(
              1,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, nt)),
            l.xb(
              3,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, lt)),
            l.xb(
              5,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, n.showBackground),
              t(e, 3, 0, n.showCover),
              t(e, 5, 0, n.displayText));
          },
          null,
        );
      }
      var it = n("DElP"),
        ot = n("oeT7"),
        rt = n("ez35"),
        ut = l.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;justify-content:center;flex-direction:row;overflow:hidden;max-width:100%;border-top:1px solid;border-image:linear-gradient(90deg,hsla(0,0%,100%,0),#323232,hsla(0,0%,100%,0)) 1;flex:0 0 120px}.steering-wheel-right[_nghost-%COMP%]   [_nghost-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   [_nghost-%COMP%]{flex-direction:row-reverse}",
            ],
          ],
          data: {},
        });
      function st(t) {
        return l.ac(2, [l.Mb(null, 0)], null, null);
      }
      var ct = n("ZiLy"),
        bt = l.wb({
          encapsulation: 0,
          styles: [
            [
              '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:flex;position:relative;padding:0 20px}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .list-item__icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list-item__icon[_ngcontent-%COMP%]{justify-self:right}.component-layout-arabic[_nghost-%COMP%]   .list-item__icon-mirror-for-arabic[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list-item__icon-mirror-for-arabic[_ngcontent-%COMP%]{transform:scaleX(-1)}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.list-item__wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto;grid-template-rows:auto;width:100%;height:100px;padding:26px 0;align-items:center}.list-item__icon[_ngcontent-%COMP%]{grid-column:1;grid-row:1}.list-item__big-icon[_ngcontent-%COMP%]     .icon__content--list{height:70px;width:70px}.list-item__title[_ngcontent-%COMP%]{grid-row:1}.list-item__subtitle[_ngcontent-%COMP%], .list-item__title[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);grid-column:1;font-size:30px}.list-item__subtitle[_ngcontent-%COMP%]{grid-row:2}.with-subtitle[_nghost-%COMP%]   .list-item__wrapper[_ngcontent-%COMP%]{grid-template-rows:auto auto;height:120px;padding:14px 0}.with-icon[_nghost-%COMP%]   .list-item__wrapper[_ngcontent-%COMP%]{grid-template-columns:70px auto}.with-icon[_nghost-%COMP%]   .list-item__subtitle[_ngcontent-%COMP%], .with-icon[_nghost-%COMP%]   .list-item__title[_ngcontent-%COMP%]{grid-column:2}.only-icon[_nghost-%COMP%]   .list-item__wrapper[_ngcontent-%COMP%]{grid-template-columns:none}',
            ],
          ],
          data: {},
        });
      function dt(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "list-item__icon"]],
              [
                [2, "list-item__icon-mirror-for-arabic", null],
                [2, "list-item__big-icon", null],
                [2, "icon-component--hidden", null],
              ],
              null,
              null,
              a.b,
              a.a,
            )),
            l.xb(
              1,
              4243456,
              null,
              0,
              i.b,
              [o.a, l.z],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                scaleMode: [2, "scaleMode"],
              },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, n.icon, n.listIconCategory, n.scaleMode);
          },
          function (t, e) {
            var n = e.component;
            t(
              e,
              0,
              0,
              n.mirrorIconForArabic,
              n.bigListIcon,
              l.Nb(e, 1).iconComponentHidden,
            );
          },
        );
      }
      function pt(t) {
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
                ["class", "list-item__subtitle"],
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
              r.b,
              r.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
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
              [[6, u.a], d.a, l.h, l.l, l.D, [2, p.a], [2, c.a], [2, h.a]],
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
            (t(e, 1, 0, n.subtitleId, n.subtitleIdEnum),
              t(e, 2, 0, n.ignoreSubtitle),
              t(
                e,
                3,
                0,
                n.subtitleDeveloperText,
                n.subtitleId,
                1,
                n.subtitleNonI18nText,
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
      function ht(t) {
        return l.ac(
          2,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              11,
              "div",
              [["class", "list-item__wrapper"]],
              [
                [2, "list-item__wrapper--with-subtitle", null],
                [2, "list-item__wrapper--with-icon", null],
                [2, "list-item__wrapper--only-icon", null],
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
              278528,
              null,
              0,
              f.n,
              [l.l, l.t, l.D],
              { ngStyle: [0, "ngStyle"] },
              null,
            ),
            l.Qb(2, { "justify-content": 0 }),
            l.xb(
              3,
              212992,
              null,
              0,
              m.a,
              [[2, g.a], [8, null], [3, m.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, dt)),
            l.xb(
              5,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(),
            l.yb(
              6,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "list-item__title"],
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
              r.b,
              r.a,
            )),
            l.xb(
              7,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            l.xb(
              8,
              16384,
              null,
              0,
              c.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            l.xb(
              9,
              245760,
              null,
              0,
              b.a,
              [[6, u.a], d.a, l.h, l.l, l.D, [2, p.a], [2, c.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, pt)),
            l.xb(
              11,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component,
              l = t(
                e,
                2,
                0,
                n.horizontalAlignContent ? "center" : "flex-start",
              );
            (t(e, 1, 0, l),
              t(e, 3, 0, n.uiStateType),
              t(e, 5, 0, n.icon),
              t(e, 7, 0, n.titleId, n.titleIdEnum),
              t(e, 8, 0, n.ignoreTitle),
              t(
                e,
                9,
                0,
                n.titleDeveloperText,
                n.titleId,
                1,
                n.titleNonI18nText,
              ),
              t(e, 11, 0, n.displaySubtitle));
          },
          function (t, e) {
            var n = e.component;
            (t(e, 0, 1, [
              n.displaySubtitle,
              n.icon,
              n.hasOnlyIcon,
              l.Nb(e, 3).uiStateListHorizontal,
              l.Nb(e, 3).uiStateListVertical,
              l.Nb(e, 3).uiStateCoverLeft,
              l.Nb(e, 3).uiStateCoverRight,
              l.Nb(e, 3).uiStateCoverBottom,
              l.Nb(e, 3).uiStateButton,
              l.Nb(e, 3).uiStateByDabLeft,
              l.Nb(e, 3).uiStateByDabRight,
              l.Nb(e, 3).uiStateLbDabLeft,
              l.Nb(e, 3).uiStateLbDabRight,
            ]),
              t(
                e,
                6,
                0,
                l.Nb(e, 9).backgroundColor,
                l.Nb(e, 9).fixedNumberOfLines,
                l.Nb(e, 9).mayContainLatinCharsForArabic,
                l.Nb(e, 9).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      var mt = n("9N/+"),
        gt = n("9tRs"),
        ft = n("N2Hj"),
        xt = n("UbWD"),
        Ct = n("2rvh"),
        _t = n("odRV"),
        vt = n("Udyh"),
        yt = n("I3ve"),
        Pt = n("qiAR"),
        Ot = n("007S"),
        Tt = n("oxWk"),
        Mt = n("Tr//"),
        St = n("EyLa"),
        Nt = n("4nnk"),
        Lt = n("/PLd"),
        It = l.wb({
          encapsulation: 0,
          styles: [
            [
              '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{position:relative;flex:1;display:flex;flex-direction:column}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding:20px;overflow:hidden;flex-grow:1}.content__headline[_ngcontent-%COMP%]{font-size:40px;text-align:center;padding-bottom:11px}.content__text[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:30px;text-align:center;line-height:40px}.content__privacy[_ngcontent-%COMP%]{padding:20px 72px}.progressbar__container[_ngcontent-%COMP%]{margin:19px 13px 0}',
            ],
          ],
          data: {},
        });
      function Dt(t) {
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
                ["class", "content__headline"],
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
              r.b,
              r.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
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
              [[6, u.a], d.a, l.h, l.l, l.D, [2, p.a], [2, c.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, n.titleTextId, n.titleIdEnumType),
              t(e, 2, 0, n.ignoreTitle),
              t(e, 3, 0, n.titleDeveloperText, n.titleTextId, 1));
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
      function At(t) {
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
              [["class", "progressbar__container"]],
              null,
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
              1,
              "au3-progressbar",
              [],
              [
                [2, "sxm--rotate", null],
                [2, "progressbar--infinite", null],
              ],
              null,
              null,
              St.b,
              St.a,
            )),
            l.xb(
              2,
              49152,
              null,
              0,
              Nt.a,
              [l.l, l.h],
              { current: [0, "current"] },
              null,
            ),
          ],
          function (t, e) {
            t(e, 2, 0, "POSITIVE_INFINITY");
          },
          function (t, e) {
            t(e, 1, 0, l.Nb(e, 2).shouldRotateForSxm, l.Nb(e, 2).infinite);
          },
        );
      }
      function Et(t) {
        return l.ac(
          2,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              9,
              "div",
              [["class", "content"]],
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
              f.i,
              [l.s, l.t, l.l, l.D],
              { klass: [0, "klass"], ngClass: [1, "ngClass"] },
              null,
            ),
            l.Qb(2, { content__privacy: 0 }),
            (t()(), l.hb(16777216, null, null, 1, null, Dt)),
            l.xb(
              4,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(),
            l.yb(
              5,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "content__text"]],
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
            l.xb(
              6,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            l.xb(
              7,
              245760,
              null,
              0,
              b.a,
              [[6, u.a], d.a, l.h, l.l, l.D, [2, p.a], [2, c.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, At)),
            l.xb(
              9,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(),
            l.yb(
              10,
              0,
              null,
              null,
              1,
              "au3-dashboard-operation-panel",
              [["class", "operationpanel"]],
              null,
              null,
              null,
              st,
              ut,
            )),
            l.xb(11, 49152, null, 0, rt.a, [], null, null),
          ],
          function (t, e) {
            var n = e.component,
              l = t(
                e,
                2,
                0,
                n.isPrivacyChangeActive && n.environment.isBentley,
              );
            (t(e, 1, 0, "content", l),
              t(e, 4, 0, !!n.titleDeveloperText),
              t(e, 6, 0, n.contentTextId, n.contentIdEnumType),
              t(
                e,
                7,
                0,
                n.contentDeveloperText,
                n.contentTextId,
                n.isPrivacyChangeActive && n.environment.isBentley ? 2 : 6,
              ),
              t(e, 9, 0, n.isPrivacyChangeActive && n.environment.isBentley));
          },
          function (t, e) {
            t(
              e,
              5,
              0,
              l.Nb(e, 7).backgroundColor,
              l.Nb(e, 7).fixedNumberOfLines,
              l.Nb(e, 7).mayContainLatinCharsForArabic,
              l.Nb(e, 7).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      var wt = n("rZIU"),
        kt = n("l9Gk"),
        zt = n("zWW2"),
        $t = n("0qMr"),
        Rt = n("Yi6/"),
        Ht = n("IbSj"),
        Bt = n("lsvA"),
        Vt = n("llYL"),
        jt = n("dr0G");
      class Yt {
        constructor(t, e, n, l) {
          ((this.dashboardTileContainer = t),
            (this.privacyService = e),
            (this.configModeIconCategory = Rt.Z.Touch),
            (this.context = Rt.s.Home),
            (this.needsPrivacy = !1),
            (this.textToolMode = Rt.gd.textToolMode),
            (this.editPopup = null != l),
            (this.configModeActive$ = n.dashboardConfigurationModeActive$));
        }
        editButtonTapped() {
          this.dashboardTileContainer.requestEditMode();
        }
      }
      var Ft = l.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block}.tile--config-mode[_ngcontent-%COMP%]{height:440px;width:288px}.tile--edit-popup[_ngcontent-%COMP%]{height:349px;width:228px}.decorator--config-mode[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:auto}.decorator--edit-popup[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:137px}.static-title[_ngcontent-%COMP%]{pointer-events:none}.static-title--tt[_ngcontent-%COMP%]{max-width:286px}.mib3-dragged[_nghost-%COMP%], .mib3-dragged   [_nghost-%COMP%]{height:100%;width:100%}.mib3-dragged[_nghost-%COMP%]   .operation-panel[_ngcontent-%COMP%], .mib3-dragged   [_nghost-%COMP%]   .operation-panel[_ngcontent-%COMP%], .mib3-dragged[_nghost-%COMP%]   .static-title[_ngcontent-%COMP%], .mib3-dragged   [_nghost-%COMP%]   .static-title[_ngcontent-%COMP%]{display:none}.mib3-dragged[_nghost-%COMP%]   .decorator[_ngcontent-%COMP%], .mib3-dragged   [_nghost-%COMP%]   .decorator[_ngcontent-%COMP%]{margin-top:75px}",
          ],
        ],
        data: {},
      });
      function Gt(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
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
      function Ut(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "decorator"]],
              [
                [2, "decorator--config-mode", null],
                [2, "decorator--edit-popup", null],
                [2, "icon-component--hidden", null],
              ],
              null,
              null,
              a.b,
              a.a,
            )),
            l.xb(
              1,
              4243456,
              null,
              0,
              i.b,
              [o.a, l.z],
              { fileName: [0, "fileName"] },
              null,
            ),
          ],
          function (t, e) {
            t(e, 1, 0, e.component.decoratorIcon);
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              e.parent.parent.context.mib3Let,
              e.component.editPopup,
              l.Nb(e, 1).iconComponentHidden,
            );
          },
        );
      }
      function Wt(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-dashboard-operation-panel",
              [["class", "operation-panel"]],
              null,
              null,
              null,
              st,
              ut,
            )),
            l.xb(1, 49152, null, 0, rt.a, [], null, null),
            (t()(),
            l.yb(
              2,
              0,
              null,
              0,
              8,
              "au3-dashboard-operation-panel-item",
              [],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l = !1 !== t.component.editButtonTapped() && l),
                  l
                );
              },
              y,
              C,
            )),
            l.xb(3, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              4,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              7,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              8,
              49152,
              null,
              0,
              x.a,
              [],
              { icon: [0, "icon"], iconCategory: [1, "iconCategory"] },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 5, 0),
              t(e, 7, 0),
              t(e, 8, 0, "E3EC_edit_mode.webp", n.configModeIconCategory));
          },
          function (t, e) {
            t(e, 2, 0, l.Nb(e, 7).markerClassEnabled);
          },
        );
      }
      function qt(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              6,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), l.hb(16777216, null, null, 1, null, Gt)),
            l.xb(
              2,
              540672,
              null,
              0,
              f.r,
              [l.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Ut)),
            l.xb(
              4,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Wt)),
            l.xb(
              6,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), l.hb(0, null, null, 0)),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 2, 0, l.Nb(e.parent, 6)),
              t(e, 4, 0, n.decoratorIcon),
              t(e, 6, 0, !n.editPopup));
          },
          null,
        );
      }
      function Qt(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
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
      function Kt(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-dashboard-info-text",
              [
                ["id", "PrivacySettingActive"],
                ["mib3Tap", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              Et,
              It,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              4,
              147456,
              null,
              0,
              M.a,
              [S.a, l.h, o.a, [3, M.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              null,
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              7,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              8,
              49152,
              null,
              0,
              Lt.a,
              [],
              { contentDeveloperText: [0, "contentDeveloperText"] },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "PrivacySettingActive"),
              t(e, 4, 0, !0, n.privacyDisabledReason),
              t(e, 5, 0),
              t(e, 7, 0),
              t(e, 8, 0, "Privatssph\xe4re-\neinstellung\naktiv"));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              l.Nb(e, 4).combinedDisabled,
              l.Nb(e, 4).useBrighterIcon,
              l.Nb(e, 7).markerClassEnabled,
            );
          },
        );
      }
      function Zt(t) {
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
              "au3-dashboard-info-text",
              [["id", "PrivacyChangeActive"]],
              null,
              null,
              null,
              Et,
              It,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              Lt.a,
              [],
              {
                contentDeveloperText: [0, "contentDeveloperText"],
                isPrivacyChangeActive: [1, "isPrivacyChangeActive"],
              },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "PrivacyChangeActive"),
              t(
                e,
                2,
                0,
                "Privatsph\xe4re-\neinstellungen\nwerden angepasst.\nBitte warten...",
                !0,
              ));
          },
          null,
        );
      }
      function Xt(t) {
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
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), l.hb(16777216, null, null, 1, null, Qt)),
            l.xb(
              2,
              540672,
              null,
              0,
              f.r,
              [l.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Kt)),
            l.xb(
              4,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), l.hb(0, [["privacyChanging", 2]], null, 0, null, Zt)),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 2, 0, l.Nb(e.parent.parent, 6)),
              t(e, 4, 0, n.privacyDisabledReason, l.Nb(e, 5)));
          },
          null,
        );
      }
      function Jt(t) {
        return l.ac(
          0,
          [
            (t()(), l.hb(16777216, null, null, 2, null, Xt)),
            l.xb(
              1,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
            (t()(), l.hb(0, null, null, 0)),
          ],
          function (t, e) {
            var n = e.component;
            t(
              e,
              1,
              0,
              n.privacyDisabledReason ||
                (n.needsPrivacy &&
                  l.Yb(
                    e,
                    1,
                    0,
                    l.Nb(e, 2).transform(n.privacyService.privacyChanging$),
                  )),
              n.content,
            );
          },
          null,
        );
      }
      function te(t) {
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
              "au3-dashboard-title",
              [
                ["class", "static-title"],
                ["id", "staticTitle"],
              ],
              [[2, "static-title--tt", null]],
              null,
              null,
              Z.b,
              Z.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              X.a,
              [],
              {
                primaryTitleDeveloperText: [0, "primaryTitleDeveloperText"],
                iconName: [1, "iconName"],
              },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "staticTitle"), t(e, 2, 0, n.title, n.iconName));
          },
          function (t, e) {
            t(e, 0, 0, e.component.textToolMode);
          },
        );
      }
      function ee(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              6,
              "au3-dashboard-tile-base",
              [["ttDoNotToggleChildren", ""]],
              [
                [8, "className", 0],
                [2, "tile--config-mode", null],
                [2, "tile--edit-popup", null],
              ],
              null,
              null,
              wt.b,
              wt.a,
            )),
            l.xb(
              1,
              16384,
              null,
              0,
              kt.a,
              [],
              { ttDoNotToggleDynamicValue: [0, "ttDoNotToggleDynamicValue"] },
              null,
            ),
            l.xb(2, 49152, null, 0, zt.a, [], null, null),
            (t()(), l.hb(16777216, null, 0, 1, null, qt)),
            l.xb(
              4,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), l.hb(0, [["contentOrPrivacy", 2]], 0, 0, null, Jt)),
            (t()(), l.hb(0, [["staticTitle", 2]], 0, 0, null, te)),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, n.editPopup),
              t(e, 4, 0, e.context.mib3Let || n.editPopup, l.Nb(e, 5)));
          },
          function (t, e) {
            var n = e.component;
            t(e, 0, 0, n.context, e.context.mib3Let, n.editPopup);
          },
        );
      }
      function ne(t) {
        return l.ac(
          2,
          [
            (t()(), l.hb(16777216, null, null, 2, null, ee)),
            l.xb(
              1,
              16384,
              null,
              0,
              $t.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
          ],
          function (t, e) {
            var n = e.component;
            t(
              e,
              1,
              0,
              l.Yb(e, 1, 0, l.Nb(e, 2).transform(n.configModeActive$)),
            );
          },
          null,
        );
      }
      var le = n("7nSW"),
        ae = n("Ngpk"),
        ie = n("QQZH"),
        oe = n("88uq"),
        re = n("YtkY"),
        ue = n("Ohay"),
        se = n("xVbo"),
        ce = n("TLy2"),
        be = n("kuMc"),
        de = n("0Woy"),
        pe = n("P1io"),
        he = n("OK7x"),
        me = n("YR7A"),
        ge = n("7qcC"),
        fe = n("U6a4"),
        xe = n("t8AR"),
        Ce = n("o1hM"),
        _e = n("H4ln");
      class ve {
        constructor(t, e, n, l, a) {
          ((this.dashboardPlayerService = t),
            (this.privacyService = e),
            (this.globalRoutingService = n),
            (this.smartphoneIntegrationService = l),
            (this.Context = Rt.s),
            (this.IconCategory = Rt.Z),
            (this.StatusTextEnum = ge.g),
            (this.StatusTitleEnum = ge.i),
            (this.StatusSubtitleEnum = ge.h),
            (this.NpsTitleEnum = ge.b),
            (this.NpsSubtitleEnum = ge.a),
            (this.PlaylistTitleEnum = ge.f),
            (this.PlaylistSubtitleEnum = ge.e),
            (this.PlaylistEntryTitleEnum = ge.d),
            (this.PlaylistEntrySubtitleEnum = ge.c),
            (this.Action = me.d),
            (this.listContent$$ = new ie.a(1)),
            (this.LongpressStateEnum = me.c),
            (this.disabledReasonHandler = he.a),
            (this.destroy$$ = new ie.a(1)),
            (this.logger = a.getLogger(
              "home.MultiMediaDashboardTileComponent",
            )),
            (this.lockingContext$ =
              this.dashboardPlayerService.currentActiveGroupType$.pipe(
                Object(re.a)((t) =>
                  t === ae.c.TUNER ? Rt.Bb.TUNER : Rt.Bb.MEDIA,
                ),
              )),
            this.dashboardPlayerService.showNps());
        }
        ngOnInit() {
          const t = {
            popup:
              Rt.Ob.POPUP_SETUP_DATA_MGT_PRIVACY_STAGED_BLOCKED_FUNCTION_POPUP,
            requestedPopupData: { data: { setting: _e.c.PersonalData } },
            type: Rt.A.SHOW_PRIVACY_POPUP,
          };
          this.disabledReason$ = this.dashboardPlayerService.state$.pipe(
            Object(ue.a)(),
            Object(re.a)((e) => (e === me.e.Privacy ? t : void 0)),
          );
        }
        ngAfterViewInit() {
          this.playlistQuery.changes
            .pipe(
              Object(re.a)((t) => t.first),
              Object(se.a)(Rt.wd),
              Object(ue.a)(),
              Object(ce.a)((t) =>
                this.dashboardPlayerService.playListContentForListRange$(
                  t.requestedDynamicListCombined$,
                ),
              ),
              Object(be.a)(this.destroy$$),
            )
            .subscribe((t) => {
              this.listContent$$.next(t);
            });
          const t = this.listContent$$.pipe(
            Object(se.a)(Rt.wd),
            Object(re.a)((t) => t.selectedIndex),
            Object(se.a)((t) => Object(Rt.wd)(t) && t >= 0),
            Object(be.a)(this.destroy$$),
          );
          (this.playlistQuery.changes
            .pipe(
              Object(re.a)((t) => t.first),
              Object(se.a)(Rt.wd),
              Object(be.a)(this.destroy$$),
              Object(ce.a)(() => t.pipe(Object(oe.take)(1))),
            )
            .subscribe((t) => {
              this.playlistQuery.first &&
                setTimeout(() => {
                  this.playlistQuery.first.selectIndex(t);
                }, 0);
            }),
            t.pipe(Object(de.a)()).subscribe(([t, e]) => {
              this.playlistQuery.first &&
                this.playlistQuery.first.selectedIndex !== e &&
                t !== e &&
                this.playlistQuery.first.keepSelectionFocused(t, e);
            }));
        }
        ngOnDestroy() {
          (this.destroy$$.next(), this.destroy$$.complete());
        }
        goToAppContext() {
          this.dashboardPlayerService.currentActiveGroupType$
            .pipe(Object(oe.take)(1), Object(be.a)(this.destroy$$))
            .subscribe((t) => {
              switch (t) {
                case ae.c.TUNER:
                  this.globalRoutingService.enterAppContext(pe.x);
                  break;
                case ae.c.MEDIA:
                case ae.c.TV:
                  this.globalRoutingService.enterAppContext(pe.s);
                  break;
                case ae.c.SMARTPHONEINTEGRATION:
                  this.smartphoneIntegrationService.requestAsiUi(
                    Ce.m.Nowplaying,
                  );
                  break;
                default:
                  this.logger.warn(
                    "goToAppContext: unhandled entertainment group type",
                  );
              }
            });
        }
        trackByFn(t, e) {
          return e ? t.toString() : "";
        }
      }
      var ye = n("FfND"),
        Pe = l.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block}.status-text[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;padding:15px;font-size:30px;text-align:center}.list-infotext[_ngcontent-%COMP%]{font-size:40px;padding:10px 20px}",
            ],
          ],
          data: {},
        });
      function Oe(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-dashboard-operation-panel-item",
              [],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [
                [null, "mib3Tap"],
                [null, "mib3Longpress"],
                [null, "mib3LongpressRelease"],
              ],
              function (t, e, n) {
                var l = !0,
                  a = t.component;
                return (
                  "mib3Tap" === e &&
                    (l =
                      !1 !==
                        a.dashboardPlayerService.performAction(
                          null == t.parent.context.$implicit
                            ? null
                            : t.parent.context.$implicit.action,
                        ) && l),
                  "mib3Longpress" === e &&
                    (l =
                      !1 !==
                        a.dashboardPlayerService.performAction(
                          null == t.parent.context.$implicit
                            ? null
                            : t.parent.context.$implicit.action,
                          a.LongpressStateEnum.PRESSED,
                        ) && l),
                  "mib3LongpressRelease" === e &&
                    (l =
                      !1 !==
                        a.dashboardPlayerService.performAction(
                          null == t.parent.context.$implicit
                            ? null
                            : t.parent.context.$implicit.action,
                          a.LongpressStateEnum.RELEASED,
                        ) && l),
                  l
                );
              },
              y,
              C,
            )),
            l.xb(1, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              2,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              3,
              147456,
              null,
              0,
              M.a,
              [S.a, l.h, o.a, [3, M.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            l.xb(
              4,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              E.a,
              [
                o.a,
                l.z,
                l.l,
                N.b,
                D.a,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                [2, A.a],
              ],
              { longpressHighlight: [0, "longpressHighlight"] },
              {
                longpress: "mib3Longpress",
                longpressRelease: "mib3LongpressRelease",
              },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              7,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              8,
              49152,
              null,
              0,
              x.a,
              [],
              { icon: [0, "icon"], iconCategory: [1, "iconCategory"] },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              B.a,
              [[2, E.a], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              11,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(
              e,
              3,
              0,
              null == e.parent.context.$implicit
                ? null
                : e.parent.context.$implicit.disabled,
            ),
              t(e, 4, 0),
              t(e, 5, 0, !0),
              t(e, 7, 0),
              t(
                e,
                8,
                0,
                null == e.parent.context.$implicit
                  ? null
                  : e.parent.context.$implicit.action,
                n.IconCategory.Touch,
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              l.Nb(e, 3).combinedDisabled,
              l.Nb(e, 3).useBrighterIcon,
              l.Nb(e, 7).markerClassEnabled,
            );
          },
        );
      }
      function Te(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-dashboard-operation-panel-item",
              [],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l =
                      !1 !==
                        t.component.dashboardPlayerService.performAction(
                          null == t.parent.context.$implicit
                            ? null
                            : t.parent.context.$implicit.action,
                        ) && l),
                  l
                );
              },
              y,
              C,
            )),
            l.xb(1, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              2,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              3,
              147456,
              null,
              0,
              M.a,
              [S.a, l.h, o.a, [3, M.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            l.xb(
              4,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              6,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              7,
              49152,
              null,
              0,
              x.a,
              [],
              { icon: [0, "icon"], iconCategory: [1, "iconCategory"] },
              null,
            ),
            l.xb(
              8,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(
              e,
              3,
              0,
              null == e.parent.context.$implicit
                ? null
                : e.parent.context.$implicit.disabled,
            ),
              t(e, 4, 0),
              t(e, 6, 0),
              t(
                e,
                7,
                0,
                null == e.parent.context.$implicit
                  ? null
                  : e.parent.context.$implicit.action,
                n.IconCategory.Touch,
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              l.Nb(e, 3).combinedDisabled,
              l.Nb(e, 3).useBrighterIcon,
              l.Nb(e, 6).markerClassEnabled,
            );
          },
        );
      }
      function Me(t) {
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
            (t()(), l.hb(16777216, null, null, 1, null, Oe)),
            l.xb(
              2,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), l.hb(0, [["withoutLongpress", 2]], null, 0, null, Te)),
          ],
          function (t, e) {
            t(
              e,
              2,
              0,
              null == e.context.$implicit
                ? null
                : e.context.$implicit.supportLongpress,
              l.Nb(e, 3),
            );
          },
          null,
        );
      }
      function Se(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              20,
              "au3-dashboard-screen",
              [["id", "NowPlayingScreen"]],
              null,
              null,
              null,
              K,
              Q,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, q.a, [], null, null),
            (t()(),
            l.yb(
              3,
              0,
              null,
              0,
              2,
              "au3-dashboard-title",
              [],
              null,
              [[null, "primaryTitleTapped"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "primaryTitleTapped" === e &&
                    (l = !1 !== t.component.goToAppContext() && l),
                  l
                );
              },
              Z.b,
              Z.a,
            )),
            l.xb(
              4,
              49152,
              null,
              0,
              X.a,
              [],
              {
                primaryTitleId: [0, "primaryTitleId"],
                primaryTitleIdEnumType: [1, "primaryTitleIdEnumType"],
                primaryTitleDeveloperText: [2, "primaryTitleDeveloperText"],
                primaryTitleNonI18nValue: [3, "primaryTitleNonI18nValue"],
                primaryTitleInterpolateParams: [
                  4,
                  "primaryTitleInterpolateParams",
                ],
                secondaryTitleId: [5, "secondaryTitleId"],
                secondaryTitleIdEnumType: [6, "secondaryTitleIdEnumType"],
                secondaryTitleDeveloperText: [7, "secondaryTitleDeveloperText"],
                secondaryTitleNonI18nValue: [8, "secondaryTitleNonI18nValue"],
                iconName: [9, "iconName"],
              },
              { primaryTitleTapped: "primaryTitleTapped" },
            ),
            l.Qb(5, { number: 0, channelName: 1 }),
            (t()(),
            l.yb(
              6,
              0,
              null,
              0,
              10,
              "au3-dashboard-cover",
              [
                ["au3ImageLockingCategory", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "lock-state-hidden", null],
                [2, "lock-state-faded", null],
              ],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l = !1 !== t.component.goToAppContext() && l),
                  l
                );
              },
              at,
              tt,
            )),
            l.xb(7, 16384, null, 0, c.a, [], null, null),
            l.xb(8, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              9,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              10,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              12,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              13,
              49152,
              null,
              0,
              J.a,
              [],
              { iconName: [0, "iconName"] },
              null,
            ),
            l.xb(14, 212992, null, 0, it.a, [ot.i, [2, ot.a], l.h], null, null),
            l.xb(
              15,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              16,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
            (t()(),
            l.yb(
              17,
              0,
              null,
              0,
              3,
              "au3-dashboard-operation-panel",
              [],
              null,
              null,
              null,
              st,
              ut,
            )),
            l.xb(18, 49152, null, 0, rt.a, [], null, null),
            (t()(), l.hb(16777216, null, 0, 1, null, Me)),
            l.xb(
              20,
              278528,
              null,
              0,
              f.j,
              [l.P, l.L, l.s],
              { ngForOf: [0, "ngForOf"], ngForTrackBy: [1, "ngForTrackBy"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, "NowPlayingScreen");
            var l =
                null == e.parent.parent.parent.context.mib3Let.npsContent
                  ? null
                  : e.parent.parent.parent.context.mib3Let.npsContent.idTitle,
              a = n.NpsTitleEnum,
              i =
                null == e.parent.parent.parent.context.mib3Let.npsContent
                  ? null
                  : e.parent.parent.parent.context.mib3Let.npsContent.idTitle,
              o =
                null == e.parent.parent.parent.context.mib3Let.npsContent
                  ? null
                  : e.parent.parent.parent.context.mib3Let.npsContent
                      .nonI18nTitle,
              r = t(
                e,
                5,
                0,
                null == e.parent.parent.parent.context.mib3Let.npsContent ||
                  null ==
                    e.parent.parent.parent.context.mib3Let.npsContent
                      .interpolateParamsTitle
                  ? null
                  : e.parent.parent.parent.context.mib3Let.npsContent
                      .interpolateParamsTitle.number,
                null == e.parent.parent.parent.context.mib3Let.npsContent ||
                  null ==
                    e.parent.parent.parent.context.mib3Let.npsContent
                      .interpolateParamsTitle
                  ? null
                  : e.parent.parent.parent.context.mib3Let.npsContent
                      .interpolateParamsTitle.channelName,
              );
            (t(
              e,
              4,
              0,
              l,
              a,
              i,
              o,
              r,
              null == e.parent.parent.parent.context.mib3Let.npsContent
                ? null
                : e.parent.parent.parent.context.mib3Let.npsContent.idSubtitle,
              n.NpsSubtitleEnum,
              null == e.parent.parent.parent.context.mib3Let.npsContent
                ? null
                : e.parent.parent.parent.context.mib3Let.npsContent.idSubtitle,
              null == e.parent.parent.parent.context.mib3Let.npsContent
                ? null
                : e.parent.parent.parent.context.mib3Let.npsContent
                    .nonI18nSubtitle,
              null == e.parent.parent.parent.context.mib3Let.source
                ? null
                : e.parent.parent.parent.context.mib3Let.source.icon,
            ),
              t(e, 10, 0),
              t(e, 12, 0),
              t(
                e,
                13,
                0,
                null != e.parent.parent.parent.context.mib3Let.npsContent &&
                  e.parent.parent.parent.context.mib3Let.npsContent.cover
                  ? null == e.parent.parent.parent.context.mib3Let.npsContent
                    ? null
                    : e.parent.parent.parent.context.mib3Let.npsContent.cover
                  : null == e.parent.parent.parent.context.mib3Let.npsContent
                    ? null
                    : e.parent.parent.parent.context.mib3Let.npsContent
                        .defaultCover,
              ),
              t(e, 14, 0),
              t(
                e,
                20,
                0,
                null == e.parent.parent.parent.context.mib3Let.npsContent
                  ? null
                  : e.parent.parent.parent.context.mib3Let.npsContent.buttons,
                n.trackByFn,
              ));
          },
          function (t, e) {
            t(
              e,
              6,
              0,
              l.Nb(e, 12).markerClassEnabled,
              l.Nb(e, 14).hide,
              l.Nb(e, 14).fade,
            );
          },
        );
      }
      function Ne(t) {
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
              "au3-i18n-label",
              [["class", "list-infotext"]],
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
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              b.a,
              [[6, u.a], d.a, l.h, l.l, l.D, [2, p.a], [2, c.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "PrivacySettingActive"),
              t(
                e,
                2,
                0,
                "Privatsph\xe4re-\neinstellung\naktiv",
                "PrivacySettingActive",
                3,
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              l.Nb(e, 2).backgroundColor,
              l.Nb(e, 2).fixedNumberOfLines,
              l.Nb(e, 2).mayContainLatinCharsForArabic,
              l.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Le(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              14,
              "au3-dashboard-list-item",
              [
                ["au3C2Cursor", ""],
                ["id", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "c2-cursor", null],
                [2, "with-icon", null],
                [2, "with-subtitle", null],
                [2, "only-icon", null],
                [2, "state-active", null],
              ],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l =
                      !1 !==
                        t.component.dashboardPlayerService.listItemSelected(
                          t.context.$implicit,
                        ) && l),
                  l
                );
              },
              ht,
              bt,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              16384,
              null,
              0,
              h.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            l.Qb(3, { number: 0, channelName: 1 }),
            l.xb(4, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              5,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              6,
              147456,
              null,
              0,
              M.a,
              [S.a, l.h, o.a, [3, M.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            l.xb(
              7,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              9,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              10,
              16384,
              null,
              0,
              mt.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
            l.xb(
              11,
              49152,
              null,
              0,
              ct.a,
              [],
              {
                titleId: [0, "titleId"],
                titleIdEnum: [1, "titleIdEnum"],
                titleDeveloperText: [2, "titleDeveloperText"],
                titleNonI18nText: [3, "titleNonI18nText"],
                subtitleId: [4, "subtitleId"],
                subtitleIdEnum: [5, "subtitleIdEnum"],
                subtitleDeveloperText: [6, "subtitleDeveloperText"],
                subtitleNonI18nText: [7, "subtitleNonI18nText"],
              },
              null,
            ),
            l.xb(
              12,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              13,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
            l.xb(
              14,
              16384,
              null,
              0,
              gt.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, "");
            var l = t(
              e,
              3,
              0,
              null == e.context.$implicit ||
                null == e.context.$implicit.interpolateParams
                ? null
                : e.context.$implicit.interpolateParams.number,
              null == e.context.$implicit ||
                null == e.context.$implicit.interpolateParams
                ? null
                : e.context.$implicit.interpolateParams.channelName,
            );
            (t(e, 2, 0, l),
              t(
                e,
                6,
                0,
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.disabled,
                n.disabledReasonHandler.getDisabledReason(
                  null == e.context.$implicit
                    ? null
                    : e.context.$implicit.selectionPayload,
                ),
              ),
              t(e, 7, 0),
              t(e, 9, 0),
              t(
                e,
                10,
                0,
                (null ==
                e.parent.parent.parent.parent.context.mib3Let.listContent
                  ? null
                  : e.parent.parent.parent.parent.context.mib3Let.listContent
                      .selectedIndex) === e.context.index,
              ),
              t(
                e,
                11,
                0,
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.idTitle,
                n.PlaylistEntryTitleEnum,
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.idTitle,
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.nonI18nTitle,
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.idSubtitle,
                n.PlaylistEntrySubtitleEnum,
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.idSubtitle,
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.nonI18nSubtitle,
              ),
              t(
                e,
                14,
                0,
                (null ==
                e.parent.parent.parent.parent.context.mib3Let.listContent
                  ? null
                  : e.parent.parent.parent.parent.context.mib3Let.listContent
                      .selectedIndex) === e.context.index,
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              l.Nb(e, 6).combinedDisabled,
              l.Nb(e, 6).useBrighterIcon,
              l.Nb(e, 9).markerClassEnabled,
              l.Nb(e, 10).mib3Active,
              l.Nb(e, 11).icon,
              l.Nb(e, 11).displaySubtitle,
              l.Nb(e, 11).hasOnlyIcon,
              l.Nb(e, 14).mib3Active,
            );
          },
        );
      }
      function Ie(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              26,
              "au3-dashboard-screen",
              [["id", "PlayList"]],
              null,
              null,
              null,
              K,
              Q,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, q.a, [], null, null),
            (t()(),
            l.yb(
              3,
              0,
              null,
              0,
              1,
              "au3-dashboard-title",
              [],
              null,
              [[null, "primaryTitleTapped"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "primaryTitleTapped" === e &&
                    (l = !1 !== t.component.goToAppContext() && l),
                  l
                );
              },
              Z.b,
              Z.a,
            )),
            l.xb(
              4,
              49152,
              null,
              0,
              X.a,
              [],
              {
                primaryTitleId: [0, "primaryTitleId"],
                primaryTitleIdEnumType: [1, "primaryTitleIdEnumType"],
                primaryTitleDeveloperText: [2, "primaryTitleDeveloperText"],
                secondaryTitleId: [3, "secondaryTitleId"],
                secondaryTitleIdEnumType: [4, "secondaryTitleIdEnumType"],
                secondaryTitleDeveloperText: [5, "secondaryTitleDeveloperText"],
                iconName: [6, "iconName"],
              },
              { primaryTitleTapped: "primaryTitleTapped" },
            ),
            (t()(),
            l.yb(
              5,
              0,
              null,
              0,
              10,
              "au3-list",
              [["au3ListDomPaging", ""]],
              [[2, "list--with-line-numbers", null]],
              [[null, "mib3IdleTimer"]],
              function (t, e, n) {
                var l = !0,
                  a = t.component;
                return (
                  "mib3IdleTimer" === e &&
                    (l =
                      !1 !==
                        a.dashboardPlayerService.performAction(
                          a.Action.CloseNpsList,
                        ) && l),
                  l
                );
              },
              ft.b,
              ft.a,
            )),
            l.Sb(6144, null, xt.a, null, [Ct.a]),
            l.xb(7, 16384, null, 0, _t.a, [l.l], null, null),
            l.xb(
              8,
              16384,
              null,
              0,
              vt.a,
              [o.a],
              { itemHeightGuess: [0, "itemHeightGuess"] },
              null,
            ),
            l.xb(
              9,
              12828672,
              [[1, 4]],
              1,
              Ct.a,
              [
                [2, vt.a],
                [2, yt.a],
                [8, null],
                [2, u.a],
                [2, Pt.a],
                [2, Ot.a],
                [2, N.b],
                ot.i,
                l.z,
                l.h,
                o.a,
                Tt.a,
                Mt.a,
                [2, z.a],
                T.a,
                [2, ot.a],
              ],
              {
                itemHeightGuess: [0, "itemHeightGuess"],
                defaultTemplate: [1, "defaultTemplate"],
                items: [2, "items"],
              },
              null,
            ),
            l.Tb(603979776, 2, { template: 0 }),
            l.xb(
              11,
              4407296,
              null,
              0,
              G.c,
              [[2, u.a], [2, G.a], [2, G.b], W.a, l.z, o.a],
              null,
              { idleTimer: "mib3IdleTimer" },
            ),
            (t()(), l.hb(16777216, [[2, 2]], 0, 2, null, Ne)),
            l.xb(
              13,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
            (t()(),
            l.hb(
              0,
              [
                [2, 2],
                ["itemTemplate", 2],
              ],
              0,
              0,
              null,
              Le,
            )),
            (t()(),
            l.yb(
              16,
              0,
              null,
              0,
              10,
              "au3-dashboard-operation-panel",
              [],
              null,
              null,
              null,
              st,
              ut,
            )),
            l.xb(17, 49152, null, 0, rt.a, [], null, null),
            (t()(),
            l.yb(
              18,
              0,
              null,
              0,
              8,
              "au3-dashboard-operation-panel-item",
              [],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0,
                  a = t.component;
                return (
                  "mib3Tap" === e &&
                    (l =
                      !1 !==
                        a.dashboardPlayerService.performAction(
                          a.Action.CloseNpsList,
                        ) && l),
                  l
                );
              },
              y,
              C,
            )),
            l.xb(19, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              20,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              21,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              23,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              24,
              49152,
              null,
              0,
              x.a,
              [],
              { icon: [0, "icon"], iconCategory: [1, "iconCategory"] },
              null,
            ),
            l.xb(
              25,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              26,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "PlayList"),
              t(
                e,
                4,
                0,
                null == e.parent.parent.parent.context.mib3Let.listContent
                  ? null
                  : e.parent.parent.parent.context.mib3Let.listContent
                      .developerTextTitle,
                n.PlaylistTitleEnum,
                null == e.parent.parent.parent.context.mib3Let.listContent
                  ? null
                  : e.parent.parent.parent.context.mib3Let.listContent
                      .developerTextTitle,
                null == e.parent.parent.parent.context.mib3Let.listContent
                  ? null
                  : e.parent.parent.parent.context.mib3Let.listContent
                      .developerTextSubtitle,
                n.PlaylistSubtitleEnum,
                null == e.parent.parent.parent.context.mib3Let.listContent
                  ? null
                  : e.parent.parent.parent.context.mib3Let.listContent
                      .developerTextSubtitle,
                null == e.parent.parent.parent.context.mib3Let.source
                  ? null
                  : e.parent.parent.parent.context.mib3Let.source.icon,
              ),
              t(e, 8, 0, 120),
              t(
                e,
                9,
                0,
                120,
                l.Nb(e, 15),
                null == e.parent.parent.parent.context.mib3Let.listContent
                  ? null
                  : e.parent.parent.parent.context.mib3Let.listContent.listData,
              ),
              t(e, 11, 0),
              t(
                e,
                13,
                0,
                l.Yb(
                  e,
                  13,
                  0,
                  l.Nb(e, 14).transform(n.privacyService.privacyModeEnabled$),
                ),
              ),
              t(e, 21, 0),
              t(e, 23, 0),
              t(e, 24, 0, n.Action.CloseNpsList, n.IconCategory.Touch));
          },
          function (t, e) {
            (t(e, 5, 0, l.Nb(e, 9).showLineNumbers),
              t(e, 18, 0, l.Nb(e, 23).markerClassEnabled));
          },
        );
      }
      function De(t) {
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
            (t()(), l.hb(16777216, null, null, 1, null, Se)),
            l.xb(
              2,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), l.hb(0, [["list", 2]], null, 0, null, Ie)),
          ],
          function (t, e) {
            t(
              e,
              2,
              0,
              e.component.dashboardPlayerService.isPlayerShowingNps(),
              l.Nb(e, 3),
            );
          },
          null,
        );
      }
      function Ae(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              7,
              "au3-dashboard-screen",
              [["id", "Hint"]],
              null,
              null,
              null,
              K,
              Q,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, q.a, [], null, null),
            (t()(),
            l.yb(
              3,
              0,
              null,
              0,
              1,
              "au3-dashboard-title",
              [],
              null,
              [[null, "primaryTitleTapped"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "primaryTitleTapped" === e &&
                    (l = !1 !== t.component.goToAppContext() && l),
                  l
                );
              },
              Z.b,
              Z.a,
            )),
            l.xb(
              4,
              49152,
              null,
              0,
              X.a,
              [],
              {
                primaryTitleId: [0, "primaryTitleId"],
                primaryTitleIdEnumType: [1, "primaryTitleIdEnumType"],
                primaryTitleDeveloperText: [2, "primaryTitleDeveloperText"],
                primaryTitleNonI18nValue: [3, "primaryTitleNonI18nValue"],
                iconName: [4, "iconName"],
              },
              { primaryTitleTapped: "primaryTitleTapped" },
            ),
            (t()(),
            l.yb(
              5,
              0,
              null,
              0,
              2,
              "au3-dashboard-info-text",
              [["id", ""]],
              null,
              null,
              null,
              Et,
              It,
            )),
            l.xb(
              6,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              7,
              49152,
              null,
              0,
              Lt.a,
              [],
              {
                titleTextId: [0, "titleTextId"],
                titleIdEnumType: [1, "titleIdEnumType"],
                titleDeveloperText: [2, "titleDeveloperText"],
                contentTextId: [3, "contentTextId"],
                contentIdEnumType: [4, "contentIdEnumType"],
                contentDeveloperText: [5, "contentDeveloperText"],
              },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "Hint"),
              t(
                e,
                4,
                0,
                null == e.parent.parent.context.mib3Let.source
                  ? null
                  : e.parent.parent.context.mib3Let.source.developerTextTitle,
                n.StatusTitleEnum,
                null == e.parent.parent.context.mib3Let.source
                  ? null
                  : e.parent.parent.context.mib3Let.source.developerTextTitle,
                null == e.parent.parent.context.mib3Let.source
                  ? null
                  : e.parent.parent.context.mib3Let.source.nonI18nTitle,
                null == e.parent.parent.context.mib3Let.source
                  ? null
                  : e.parent.parent.context.mib3Let.source.icon,
              ),
              t(e, 6, 0, ""),
              t(
                e,
                7,
                0,
                n.StatusSubtitleEnum.Hinweis,
                n.StatusSubtitleEnum,
                n.StatusSubtitleEnum.Hinweis,
                null == e.parent.parent.context.mib3Let.source
                  ? null
                  : e.parent.parent.context.mib3Let.source.statusText,
                n.StatusTextEnum,
                null == e.parent.parent.context.mib3Let.source
                  ? null
                  : e.parent.parent.context.mib3Let.source.statusText,
              ));
          },
          null,
        );
      }
      function Ee(t) {
        return l.ac(
          0,
          [
            (t()(), l.hb(16777216, null, null, 1, null, De)),
            l.xb(
              1,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), l.hb(0, [["notActive", 2]], null, 0, null, Ae)),
          ],
          function (t, e) {
            t(
              e,
              1,
              0,
              e.component.dashboardPlayerService.isPlayerActive(),
              l.Nb(e, 2),
            );
          },
          null,
        );
      }
      function we(t) {
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
              "au3-dashboard-tile",
              [["id", "MultiMedia"]],
              null,
              null,
              null,
              ne,
              Ft,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.Sb(1024, null, ot.a, le.b, []),
            l.xb(
              3,
              16384,
              null,
              0,
              le.a,
              [ot.a],
              { context: [0, "context"] },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
            l.xb(
              5,
              49152,
              null,
              0,
              Yt,
              [Bt.a, jt.a, Vt.a, [2, Ht.a]],
              {
                context: [0, "context"],
                title: [1, "title"],
                iconName: [2, "iconName"],
                decoratorIcon: [3, "decoratorIcon"],
                content: [4, "content"],
                privacyDisabledReason: [5, "privacyDisabledReason"],
                needsPrivacy: [6, "needsPrivacy"],
              },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
            l.Pb(131072, f.b, [l.h]),
            (t()(), l.hb(0, [["content", 2]], null, 0, null, Ee)),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "MultiMedia"),
              t(
                e,
                3,
                0,
                l.Yb(e, 3, 0, l.Nb(e, 4).transform(n.lockingContext$)),
              ),
              t(
                e,
                5,
                0,
                n.Context.Media,
                "Media",
                "E099_media.webp",
                "/decorators/W523_Homescreen/media.webp",
                l.Nb(e, 8),
                l.Yb(e, 5, 5, l.Nb(e, 6).transform(n.disabledReason$)),
                l.Yb(
                  e,
                  5,
                  6,
                  l
                    .Nb(e, 7)
                    .transform(
                      n.dashboardPlayerService.sourceDependsOnPrivacy$,
                    ),
                ),
              ));
          },
          null,
        );
      }
      function ke(t) {
        return l.ac(
          2,
          [
            l.Tb(671088640, 1, { playlistQuery: 1 }),
            (t()(), l.hb(16777216, null, null, 5, null, we)),
            l.xb(
              2,
              16384,
              null,
              0,
              $t.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
            l.Pb(131072, f.b, [l.h]),
            l.Pb(131072, f.b, [l.h]),
            l.Qb(6, { source: 0, npsContent: 1, listContent: 2 }),
          ],
          function (t, e) {
            var n = e.component,
              a = t(
                e,
                6,
                0,
                l.Yb(
                  e,
                  2,
                  0,
                  l.Nb(e, 3).transform(n.dashboardPlayerService.sourceInfo$),
                ),
                l.Yb(
                  e,
                  2,
                  0,
                  l.Nb(e, 4).transform(n.dashboardPlayerService.npsContent$),
                ),
                l.Yb(e, 2, 0, l.Nb(e, 5).transform(n.listContent$$)),
              );
            t(e, 2, 0, a);
          },
          null,
        );
      }
      var ze = n("sK8D");
      class $e {
        constructor(t) {
          this.routingService = t;
        }
      }
      var Re = l.wb({
        encapsulation: 0,
        styles: [["[_nghost-%COMP%]{display:block;width:100%;height:100%}"]],
        data: {},
      });
      function He(t) {
        return l.ac(
          2,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              8,
              "au3-dashboard-screen",
              [],
              null,
              null,
              null,
              K,
              Q,
            )),
            l.xb(1, 49152, null, 0, q.a, [], null, null),
            (t()(),
            l.yb(
              2,
              0,
              null,
              0,
              2,
              "au3-dashboard-title",
              [["id", ""]],
              null,
              [[null, "primaryTitleTapped"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "primaryTitleTapped" === e &&
                    (l = !1 !== t.component.routingService.enterContext() && l),
                  l
                );
              },
              Z.b,
              Z.a,
            )),
            l.xb(
              3,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              4,
              49152,
              null,
              0,
              X.a,
              [],
              {
                primaryTitleDeveloperText: [0, "primaryTitleDeveloperText"],
                iconName: [1, "iconName"],
              },
              { primaryTitleTapped: "primaryTitleTapped" },
            ),
            (t()(),
            l.yb(
              5,
              0,
              null,
              0,
              2,
              "au3-dashboard-info-text",
              [["id", ""]],
              null,
              null,
              null,
              Et,
              It,
            )),
            l.xb(
              6,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              7,
              49152,
              null,
              0,
              Lt.a,
              [],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                contentTextId: [1, "contentTextId"],
                contentIdEnumType: [2, "contentIdEnumType"],
                contentDeveloperText: [3, "contentDeveloperText"],
              },
              null,
            ),
            l.Mb(0, 0),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 3, 0, ""),
              t(e, 4, 0, "Navigation", "E0B0_navigation.webp"),
              t(e, 6, 0, ""),
              t(
                e,
                7,
                0,
                "Hinweis",
                n.statusId,
                n.statusIdEnumType,
                n.statusText,
              ));
          },
          null,
        );
      }
      var Be = n("VKfg"),
        Ve = n("EkEa"),
        je = n("oPv+"),
        Ye = n("3EdB"),
        Fe = n("eoEw"),
        Ge = n("SOvQ"),
        Ue = n("qHCr"),
        We = n("QlDL"),
        qe = n("I5OF"),
        Qe = n("P2Ag"),
        Ke = n("TBun"),
        Ze = n("HM3f"),
        Xe = n("ROBh"),
        Je = n("vAPC"),
        tn = n("1Eyf"),
        en = n("Vna1"),
        nn = n("dxLW");
      class ln {
        constructor(t, e, n) {
          ((this.renderersService = t),
            (this.ownElement = e),
            (this.displayableName = Rt.J.MAP),
            (this.uiStateType = Rt.uc.ListHorizontal),
            (this.mapTextureOffset = { left: 0, top: 0 }),
            (this.mapConfigured$$ = new ie.a(1)),
            (this.mapPainted$$ = new ie.a(1)),
            (this.logger = n.getLogger(
              "navi.dashboard.NaviDashboardMapComponent",
            )),
            (this.ready$ = this.createReady$()));
        }
        ngAfterContentChecked() {
          const t = this.ownElement.nativeElement.clientWidth,
            e = this.ownElement.nativeElement.clientHeight;
          if (t && e && (t !== this.lastWidth || e !== this.lastHeight)) {
            ((this.lastWidth = t),
              (this.lastHeight = e),
              this.logger.info(
                "ngAfterContentChecked: updating with new size:",
                { width: t, height: e },
              ));
            const n = {
              coordX: en.r.coordX,
              coordY: en.r.coordY,
              diffX: t - en.r.diffX,
              diffY: e - en.r.diffY,
            };
            this.renderersService
              .activateMapInstance(tn.f.MYSCREEN)
              .then(() =>
                Promise.all([
                  this.renderersService.setZoomArea(n),
                  this.renderersService.setVisibility(!0),
                  this.renderersService.recenter(),
                  this.renderersService.setCopyrightTextAndIcon(
                    tn.d.TOPCENTER,
                    {
                      coordX: 0,
                      coordY: en.a.coordY,
                      diffX: t,
                      diffY: en.a.diffY,
                    },
                    { coordX: t - en.o - en.n, coordY: e - en.m - en.n },
                  ),
                ]),
              )
              .then(() => {
                (this.logger.info(
                  "ngAfterContentChecked: configure of map finished",
                ),
                  this.mapConfigured$$.next(!0));
              })
              .catch((t) =>
                this.logger.error(
                  "ngAfterContentChecked: failed to init renderer:",
                  t,
                ),
              );
          }
        }
        ngOnDestroy() {
          this.renderersService.activeMapInstance === tn.f.MYSCREEN &&
            this.renderersService
              .setVisibility(!1)
              .catch((t) =>
                this.logger.warn("ngOnDestroy: failed to reset visibility:", t),
              );
        }
        firstFramePainted() {
          (this.logger.info("firstFramePainted: map painted"),
            this.mapPainted$$.next(!0));
        }
        createReady$() {
          return Object(Ze.b)(
            this.mapConfigured$$,
            this.mapPainted$$.pipe(
              Object(Je.a)(
                5e3,
                Object(Xe.a)(!0).pipe(
                  Object(Rt.pd)(
                    this.logger,
                    "createReady$: plugin did not report first frame paint within 5s",
                  ),
                ),
              ),
            ),
          ).pipe(
            Object(re.a)((t) => t.every((t) => !!t)),
            Object(ue.a)(),
            Object(Rt.pd)(this.logger, "createReady$: display map"),
          );
        }
      }
      var an = l.wb({
        encapsulation: 0,
        styles: [
          [
            '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:flex;position:relative}.map[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.map[_ngcontent-%COMP%]{transition:opacity 1s}.map-not-ready[_ngcontent-%COMP%]{opacity:0}.compass[_ngcontent-%COMP%]{position:absolute;width:80px;height:80px;right:20px;top:20px;background-color:rgba(23,33,33,.94);border:1px solid hsla(0,0%,78.4%,.65)}',
          ],
        ],
        data: {},
      });
      function on(t) {
        return l.ac(
          2,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-shared-texture",
              [["class", "map"]],
              [[2, "map-not-ready", null]],
              [[null, "firstFramePainted"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "firstFramePainted" === e &&
                    (l = !1 !== t.component.firstFramePainted() && l),
                  l
                );
              },
              Ue.b,
              Ue.a,
            )),
            l.xb(
              1,
              114688,
              null,
              0,
              We.a,
              [qe.a, I.a, o.a],
              {
                framerate: [0, "framerate"],
                displayableName: [1, "displayableName"],
                textureOffset: [2, "textureOffset"],
                considerScreenAnimation: [3, "considerScreenAnimation"],
              },
              { firstFramePainted: "firstFramePainted" },
            ),
            l.Pb(131072, f.b, [l.h]),
            (t()(),
            l.yb(
              3,
              0,
              null,
              null,
              2,
              "au3-compass",
              [["class", "compass"]],
              null,
              null,
              null,
              Qe.b,
              Qe.a,
            )),
            l.xb(
              4,
              4243456,
              null,
              0,
              Ke.a,
              [],
              { rotation: [0, "rotation"] },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
          ],
          function (t, e) {
            var n = e.component;
            (t(
              e,
              1,
              0,
              20,
              n.displayableName,
              n.mapTextureOffset,
              n.sharedTextureConsiderScreenAnimation,
            ),
              t(
                e,
                4,
                0,
                l.Yb(
                  e,
                  4,
                  0,
                  l.Nb(e, 5).transform(n.renderersService.rotation$),
                ),
              ));
          },
          function (t, e) {
            var n = e.component;
            t(e, 0, 0, !l.Yb(e, 0, 0, l.Nb(e, 2).transform(n.ready$)));
          },
        );
      }
      var rn = n("D57K"),
        un = n("B0wk"),
        sn = n("HsO4"),
        cn = n("J+dc"),
        bn = n("kGpN"),
        dn = n("4h+N"),
        pn = n("/SfN"),
        hn = n("4C60"),
        mn = n("bQlD");
      let gn = (() => {
        class t {
          constructor(t, e, n, a, i, o, r, u, s, c, b) {
            ((this.guidanceService = t),
              (this.routingService = e),
              (this.searchAvailabilityService = n),
              (this.homeBusinessService = a),
              (this.guidancePopupWorkflowService = i),
              (this.preferenceService = o),
              (this.addressFormattingService = r),
              (this.poiCallService = u),
              (this.poicallUtilService = s),
              (this.systemConfigService = c),
              (this.iconCategoryEnum = Rt.Z),
              (this.routeInfoMap = ze.b.Map),
              (this.sourceUnit = Rt.vc.METERS),
              (this.distanceFormattingRule = bn.a.DistanceToDestination),
              (this.showLastDestinationsTapped = new l.n()),
              (this.destroy$$ = new ie.a(1)),
              (this.logger = b.getLogger(
                "navi.dashboard.NaviDashboardMapScreenComponent",
              )),
              (this.guidanceActive$ = this.createGuidanceActive$()),
              (this.nextDestinationInfo$ = this.createNextDestinationInfo$()),
              (this.poiCallAvailable$ = this.createPoiCallAvailable$()));
          }
          ngOnDestroy() {
            this.destroy$$.next();
          }
          createGuidanceActive$() {
            return this.guidanceService.guidanceState$.pipe(
              Object(re.a)((t) => t === pn.c.Active),
              Object(ue.a)(),
              Object(Rt.pd)(this.logger, "createGuidanceActive$:"),
            );
          }
          createNextDestinationInfo$() {
            return this.guidanceService.nextDestination$.pipe(
              Object(re.a)((t) =>
                t && t.location
                  ? {
                      formattedTitle: this.addressFormattingService.getLines(
                        1,
                        Object(hn.a)(t.location),
                      )[0],
                      eta: t.eta,
                      distance: t.roadDistance,
                    }
                  : null,
              ),
              Object(Rt.Xc)(
                this.logger,
                "createNextDestinationInfo$: new info:",
              ),
            );
          }
          createPoiCallAvailable$() {
            return Object(Ze.b)(
              this.poicallUtilService.poicallAvailable$,
              this.systemConfigService.region$,
            ).pipe(
              Object(re.a)(([t, e]) => t && e === un.k.JP),
              Object(ue.a)(),
              Object(Rt.pd)(
                this.logger,
                "createPoiCallAvailable$: availability changed to:",
              ),
            );
          }
          stopRouteGuidance() {
            this.guidanceService.stopGuidance();
          }
          startRouteGuidanceToHome() {
            return this.homeBusinessService.homeLocationId$
              .pipe(
                Object(cn.a)(1),
                Object(ce.a)((t) =>
                  t
                    ? (this.logger.info(
                        "startRouteGuidanceToHome: location exist:",
                        t,
                      ),
                      Object(sn.a)(
                        this.guidancePopupWorkflowService.requestNewGuidance(t),
                      ))
                    : (this.logger.info(
                        "startRouteGuidanceToHome: location does not exist -> ask user",
                      ),
                      Object(sn.a)(
                        this.homeBusinessService.askUserToSetAddress(dn.b.HOME),
                      )),
                ),
                Object(be.a)(this.destroy$$),
              )
              .toPromise()
              .then(
                (t) =>
                  this.logger.info(
                    "startRouteGuidanceToHome: finished with:",
                    t,
                  ),
                (t) =>
                  this.logger.warn("startRouteGuidanceToHome: failed with:", t),
              );
          }
          toggleViewMode() {
            Object(Ze.b)(
              this.preferenceService.mapMode$,
              this.guidanceService.guidanceState$,
            )
              .pipe(Object(cn.a)(1), Object(be.a)(this.destroy$$))
              .subscribe(([t, e]) => {
                let n;
                ((n =
                  t === tn.k._2DDRIVE
                    ? tn.k._2DNORTHUP
                    : t === tn.k._2DNORTHUP
                      ? tn.k._3D
                      : t === tn.k._3D && e === pn.c.Active
                        ? tn.k.OVERVIEWTONEXTSTOPOVER
                        : tn.k._2DDRIVE),
                  this.logger.info("toggleViewType:", {
                    currentMode: t,
                    nextMode: n,
                  }),
                  this.preferenceService.setMapMode(n));
              });
          }
          goToPoiCall() {
            return Object(rn.a)(this, void 0, void 0, function* () {
              yield this.poiCallService
                .changeState(mn.j.startCall)
                .then((t) => {
                  t &&
                    t.stateName === mn.q.Connecting &&
                    this.routingService.goTo(
                      ze.b.DestinationMode.children.POICall,
                    );
                })
                .catch((t) =>
                  this.logger.error("goToPoiCall: poiCall failed, error:", t),
                );
            });
          }
        }
        return (
          Object(rn.b)(
            [
              Object(Rt.bb)("logger"),
              Object(rn.c)("design:type", Function),
              Object(rn.c)("design:paramtypes", []),
              Object(rn.c)("design:returntype", Promise),
            ],
            t.prototype,
            "startRouteGuidanceToHome",
            null,
          ),
          Object(rn.b)(
            [
              Object(Rt.bb)("logger"),
              Object(rn.c)("design:type", Function),
              Object(rn.c)("design:paramtypes", []),
              Object(rn.c)("design:returntype", Promise),
            ],
            t.prototype,
            "goToPoiCall",
            null,
          ),
          t
        );
      })();
      var fn = n("YPRw"),
        xn = n("BiTe"),
        Cn = n("fEDJ"),
        _n = n("SFb6"),
        vn = n("Qbg6"),
        yn = n("d9Bu"),
        Pn = l.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;width:100%;height:100%}.map-container[_ngcontent-%COMP%]{flex-grow:1}.map[_ngcontent-%COMP%]{height:359px}.secondary-title-line--container[_ngcontent-%COMP%]{width:100%;height:100%;display:grid;grid-template-rows:auto;grid-template-columns:1fr 1fr;align-content:center}.secondary-title--eta[_ngcontent-%COMP%]{align-self:flex-start;height:100%}.secondary-title--distance[_ngcontent-%COMP%]{align-self:flex-end;height:100%}",
            ],
          ],
          data: {},
        });
      function On(t) {
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
              "au3-dashboard-title",
              [["id", "TitleGuidanceActive"]],
              null,
              null,
              null,
              Z.b,
              Z.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              X.a,
              [],
              {
                primaryTitleNonI18nValue: [0, "primaryTitleNonI18nValue"],
                primaryTitleRouteInfo: [1, "primaryTitleRouteInfo"],
                secondaryTemplate: [2, "secondaryTemplate"],
                iconName: [3, "iconName"],
              },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "TitleGuidanceActive"),
              t(
                e,
                2,
                0,
                null == e.parent.context.mib3Let.nextDestInfo
                  ? null
                  : e.parent.context.mib3Let.nextDestInfo.formattedTitle,
                n.routeInfoMap,
                l.Nb(e.parent, 5),
                "E0B0_navigation.webp",
              ));
          },
          null,
        );
      }
      function Tn(t) {
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
              "div",
              [["class", "secondary-title-line--container"]],
              null,
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
              1,
              "au3-time-display",
              [["class", "secondary-title--eta"]],
              null,
              null,
              null,
              Be.b,
              Be.a,
            )),
            l.xb(2, 49152, null, 0, Ve.a, [je.a], { time: [0, "time"] }, null),
            (t()(),
            l.yb(
              3,
              0,
              null,
              null,
              1,
              "au3-formatted-unit-renderer",
              [["class", "secondary-title--distance"]],
              [[2, "invisible", null]],
              null,
              null,
              Ye.b,
              Ye.a,
            )),
            l.xb(
              4,
              180224,
              null,
              0,
              Fe.b,
              [d.a, Ge.a, l.h],
              {
                rawValue: [0, "rawValue"],
                rawValueUnit: [1, "rawValueUnit"],
                rawValueFormattingRule: [2, "rawValueFormattingRule"],
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
              null == e.parent.context.mib3Let.nextDestInfo
                ? null
                : e.parent.context.mib3Let.nextDestInfo.eta,
            ),
              t(
                e,
                4,
                0,
                null == e.parent.context.mib3Let.nextDestInfo
                  ? null
                  : e.parent.context.mib3Let.nextDestInfo.distance,
                n.sourceUnit,
                n.distanceFormattingRule,
              ));
          },
          function (t, e) {
            t(e, 3, 0, l.Nb(e, 4).isInvisible);
          },
        );
      }
      function Mn(t) {
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
              "au3-dashboard-title",
              [["id", "TitleGuidanceInactive"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "primaryTitleTapped"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "primaryTitleTapped" === e &&
                    (l =
                      !1 !== t.component.routingService.goToTruffleSearch() &&
                      l),
                  l
                );
              },
              Z.b,
              Z.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              147456,
              null,
              0,
              M.a,
              [S.a, l.h, o.a, [3, M.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            l.xb(
              3,
              49152,
              null,
              0,
              X.a,
              [],
              {
                primaryTitleDeveloperText: [0, "primaryTitleDeveloperText"],
                iconName: [1, "iconName"],
              },
              { primaryTitleTapped: "primaryTitleTapped" },
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "TitleGuidanceInactive"),
              t(e, 2, 0, !e.parent.context.mib3Let.searchAvailable),
              t(e, 3, 0, "Suche", "E811_search_button.webp"));
          },
          function (t, e) {
            t(e, 0, 0, l.Nb(e, 2).combinedDisabled, l.Nb(e, 2).useBrighterIcon);
          },
        );
      }
      function Sn(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-dashboard-operation-panel-item",
              [["id", "JpOnlyPoiCallButton"]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l = !1 !== t.component.goToPoiCall() && l),
                  l
                );
              },
              y,
              C,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              4,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              6,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              7,
              49152,
              null,
              0,
              x.a,
              [],
              { icon: [0, "icon"], iconCategory: [1, "iconCategory"] },
              null,
            ),
            l.xb(
              8,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "JpOnlyPoiCallButton"),
              t(e, 4, 0),
              t(e, 6, 0),
              t(e, 7, 0, "EA62_asia_poi_call.webp", n.iconCategoryEnum.List));
          },
          function (t, e) {
            t(e, 0, 0, l.Nb(e, 6).markerClassEnabled);
          },
        );
      }
      function Nn(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-dashboard-operation-panel-item",
              [["id", "StopRouteGuidanceButton"]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l = !1 !== t.component.stopRouteGuidance() && l),
                  l
                );
              },
              y,
              C,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              4,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              6,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              7,
              49152,
              null,
              0,
              x.a,
              [],
              { icon: [0, "icon"], iconCategory: [1, "iconCategory"] },
              null,
            ),
            l.xb(
              8,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "StopRouteGuidanceButton"),
              t(e, 4, 0),
              t(e, 6, 0),
              t(
                e,
                7,
                0,
                "E928_navigation_zielfuehrung_abbrechen.webp",
                n.iconCategoryEnum.Touch,
              ));
          },
          function (t, e) {
            t(e, 0, 0, l.Nb(e, 6).markerClassEnabled);
          },
        );
      }
      function Ln(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-dashboard-operation-panel-item",
              [["id", "StartRouteGuidanceHome"]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l = !1 !== t.component.startRouteGuidanceToHome() && l),
                  l
                );
              },
              y,
              C,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              4,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              6,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              7,
              49152,
              null,
              0,
              x.a,
              [],
              { icon: [0, "icon"], iconCategory: [1, "iconCategory"] },
              null,
            ),
            l.xb(
              8,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "StartRouteGuidanceHome"),
              t(e, 4, 0),
              t(e, 6, 0),
              t(
                e,
                7,
                0,
                "E801_destination_private.webp",
                n.iconCategoryEnum.Touch,
              ));
          },
          function (t, e) {
            t(e, 0, 0, l.Nb(e, 6).markerClassEnabled);
          },
        );
      }
      function In(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              33,
              "au3-dashboard-screen",
              [["id", "NAVI_DASHBOARD_MAP"]],
              null,
              null,
              null,
              K,
              Q,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, q.a, [], null, null),
            (t()(), l.hb(16777216, null, 0, 1, null, On)),
            l.xb(
              4,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(),
            l.hb(0, [["secondaryTitleGuidanceActive", 2]], 0, 0, null, Tn)),
            (t()(), l.hb(0, [["titleNoGuidance", 2]], 0, 0, null, Mn)),
            (t()(),
            l.yb(
              7,
              0,
              null,
              0,
              8,
              "au3-navi-dashboard-map",
              [["class", "map-container"]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l = !1 !== t.component.toggleViewMode() && l),
                  l
                );
              },
              on,
              an,
            )),
            l.xb(8, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              9,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              10,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              12,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              13,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              14,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
            l.xb(
              15,
              2277376,
              null,
              0,
              ln,
              [nn.a, l.l, o.a],
              {
                sharedTextureConsiderScreenAnimation: [
                  0,
                  "sharedTextureConsiderScreenAnimation",
                ],
              },
              null,
            ),
            (t()(),
            l.yb(
              16,
              0,
              null,
              0,
              17,
              "au3-dashboard-operation-panel",
              [],
              null,
              null,
              null,
              st,
              ut,
            )),
            l.xb(17, 49152, null, 0, rt.a, [], null, null),
            (t()(),
            l.yb(
              18,
              0,
              null,
              0,
              9,
              "au3-dashboard-operation-panel-item",
              [["id", "ShowLastDestinationButton"]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l =
                      !1 !== t.component.showLastDestinationsTapped.emit() &&
                      l),
                  l
                );
              },
              y,
              C,
            )),
            l.xb(
              19,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(20, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              21,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              22,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              24,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              25,
              49152,
              null,
              0,
              x.a,
              [],
              { icon: [0, "icon"], iconCategory: [1, "iconCategory"] },
              null,
            ),
            l.xb(
              26,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              27,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
            (t()(), l.hb(16777216, null, 0, 2, null, Sn)),
            l.xb(
              29,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
            (t()(), l.hb(16777216, null, 0, 1, null, Nn)),
            l.xb(
              32,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(),
            l.hb(0, [["startRouteGuidanceHomeButton", 2]], null, 0, null, Ln)),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "NAVI_DASHBOARD_MAP"),
              t(e, 4, 0, e.context.mib3Let.guidanceActive, l.Nb(e, 6)),
              t(e, 10, 0),
              t(e, 12, 0),
              t(e, 15, 0, n.sharedTextureConsiderScreenAnimation),
              t(e, 19, 0, "ShowLastDestinationButton"),
              t(e, 22, 0),
              t(e, 24, 0),
              t(
                e,
                25,
                0,
                "E0C3_navigation_letzteziele.webp",
                n.iconCategoryEnum.Touch,
              ),
              t(
                e,
                29,
                0,
                l.Yb(e, 29, 0, l.Nb(e, 30).transform(n.poiCallAvailable$)),
              ),
              t(e, 32, 0, e.context.mib3Let.guidanceActive, l.Nb(e, 33)));
          },
          function (t, e) {
            (t(e, 7, 0, l.Nb(e, 12).markerClassEnabled),
              t(e, 18, 0, l.Nb(e, 24).markerClassEnabled));
          },
        );
      }
      function Dn(t) {
        return l.ac(
          2,
          [
            (t()(), l.hb(16777216, null, null, 5, null, In)),
            l.xb(
              1,
              16384,
              null,
              0,
              $t.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
            l.Pb(131072, f.b, [l.h]),
            l.Pb(131072, f.b, [l.h]),
            l.Qb(5, { guidanceActive: 0, nextDestInfo: 1, searchAvailable: 2 }),
          ],
          function (t, e) {
            var n = e.component,
              a = t(
                e,
                5,
                0,
                l.Yb(e, 1, 0, l.Nb(e, 2).transform(n.guidanceActive$)),
                l.Yb(e, 1, 0, l.Nb(e, 3).transform(n.nextDestinationInfo$)),
                l.Yb(
                  e,
                  1,
                  0,
                  l
                    .Nb(e, 4)
                    .transform(n.searchAvailabilityService.searchAvailable$),
                ),
              );
            t(e, 1, 0, a);
          },
          null,
        );
      }
      var An = n("8j5Y");
      let En = (() => {
        class t {
          constructor(t, e, n, a, i) {
            ((this.privacyService = t),
              (this.guidancePopupWorkflowService = e),
              (this.iconCategoryEnum = Rt.Z),
              (this.uiStateType = Rt.uc.ListHorizontal),
              (this.routeInfoLastDestinations =
                ze.b.DestinationMode.children.LastDestination),
              (this.closeLastDestinationsTapped = new l.n()),
              (this.receivedLastDestinations = !1),
              (this.logger = i.getLogger(
                "navi.dashboard.NaviDashboardLastDestScreenComponent",
              )),
              (this.lastDestinations$ = n.lastDestinations$.pipe(
                Object(re.a)((t) =>
                  t
                    .filter((t) => !!t.location)
                    .map((t) => {
                      const e = a.getLines(2, Object(hn.a)(t.location));
                      return {
                        primaryText: e[0],
                        secondaryText: e[1],
                        locationId: t.location.id,
                      };
                    }),
                ),
                Object(Rt.Xc)(
                  this.logger,
                  "constructor: lastDestinations$ formatted:",
                ),
                Object(An.a)(() => (this.receivedLastDestinations = !0)),
              )));
          }
          startGuidance(t) {
            return this.guidancePopupWorkflowService
              .requestNewGuidance(t.locationId)
              .then(() => this.closeLastDestinationsTapped.next());
          }
        }
        return (
          Object(rn.b)(
            [
              Object(Rt.bb)("logger"),
              Object(rn.c)("design:type", Function),
              Object(rn.c)("design:paramtypes", [Object]),
              Object(rn.c)("design:returntype", Promise),
            ],
            t.prototype,
            "startGuidance",
            null,
          ),
          t
        );
      })();
      var wn = n("8ICF"),
        kn = l.wb({
          encapsulation: 0,
          styles: [
            [
              '.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;width:100%;height:100%}.list-infotext[_ngcontent-%COMP%]{font-size:40px;padding:10px 20px}',
            ],
          ],
          data: {},
        });
      function zn(t) {
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
              "au3-i18n-label",
              [
                ["before", ""],
                ["class", "list-infotext"],
              ],
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
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              b.a,
              [[6, u.a], d.a, l.h, l.l, l.D, [2, p.a], [2, c.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "PrivacySettingActive"),
              t(
                e,
                2,
                0,
                "Privatsph\xe4re-\neinstellung\naktiv",
                "PrivacySettingActive",
                3,
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              l.Nb(e, 2).backgroundColor,
              l.Nb(e, 2).fixedNumberOfLines,
              l.Nb(e, 2).mayContainLatinCharsForArabic,
              l.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function $n(t) {
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
              "au3-i18n-label",
              [["class", "list-infotext"]],
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
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              b.a,
              [[6, u.a], d.a, l.h, l.l, l.D, [2, p.a], [2, c.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "NoLastDestinations"),
              t(
                e,
                2,
                0,
                "Es sind keine\nletzten Ziele\nvorhanden.",
                "NoLastDestinations",
                3,
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              l.Nb(e, 2).backgroundColor,
              l.Nb(e, 2).fixedNumberOfLines,
              l.Nb(e, 2).mayContainLatinCharsForArabic,
              l.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Rn(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-dashboard-list-item",
              [["ttIgnore", ""]],
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
                [2, "with-icon", null],
                [2, "with-subtitle", null],
                [2, "only-icon", null],
              ],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l =
                      !1 !== t.component.startGuidance(t.context.$implicit) &&
                      l),
                  l
                );
              },
              ht,
              bt,
            )),
            l.xb(1, 16384, null, 0, c.a, [], null, null),
            l.xb(2, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              4,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              6,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              7,
              212992,
              null,
              0,
              m.a,
              [[2, g.a], [8, null], [3, m.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            l.xb(
              8,
              49152,
              null,
              0,
              ct.a,
              [],
              {
                titleNonI18nText: [0, "titleNonI18nText"],
                subtitleNonI18nText: [1, "subtitleNonI18nText"],
              },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 4, 0),
              t(e, 6, 0),
              t(e, 7, 0, n.uiStateType),
              t(
                e,
                8,
                0,
                (null == e.context.$implicit
                  ? null
                  : e.context.$implicit.primaryText) || void 0,
                e.context.$implicit.secondaryText,
              ));
          },
          function (t, e) {
            t(e, 0, 1, [
              l.Nb(e, 6).markerClassEnabled,
              l.Nb(e, 7).uiStateListHorizontal,
              l.Nb(e, 7).uiStateListVertical,
              l.Nb(e, 7).uiStateCoverLeft,
              l.Nb(e, 7).uiStateCoverRight,
              l.Nb(e, 7).uiStateCoverBottom,
              l.Nb(e, 7).uiStateButton,
              l.Nb(e, 7).uiStateByDabLeft,
              l.Nb(e, 7).uiStateByDabRight,
              l.Nb(e, 7).uiStateLbDabLeft,
              l.Nb(e, 7).uiStateLbDabRight,
              l.Nb(e, 8).icon,
              l.Nb(e, 8).displaySubtitle,
              l.Nb(e, 8).hasOnlyIcon,
            ]);
          },
        );
      }
      function Hn(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-list",
              [
                ["au3ListDomPaging", ""],
                ["id", ""],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              ft.b,
              ft.a,
            )),
            l.Sb(6144, null, xt.a, null, [Ct.a]),
            l.xb(
              2,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(3, 16384, null, 0, _t.a, [l.l], null, null),
            l.xb(
              4,
              16384,
              null,
              0,
              vt.a,
              [o.a],
              { itemHeightGuess: [0, "itemHeightGuess"] },
              null,
            ),
            l.xb(
              5,
              12828672,
              null,
              1,
              Ct.a,
              [
                [2, vt.a],
                [2, yt.a],
                [8, null],
                [2, u.a],
                [2, Pt.a],
                [2, Ot.a],
                [2, N.b],
                ot.i,
                l.z,
                l.h,
                o.a,
                Tt.a,
                Mt.a,
                [2, z.a],
                T.a,
                [2, ot.a],
              ],
              {
                itemHeightGuess: [0, "itemHeightGuess"],
                defaultTemplate: [1, "defaultTemplate"],
                items: [2, "items"],
              },
              null,
            ),
            l.Tb(603979776, 1, { template: 0 }),
            (t()(), l.hb(16777216, [[1, 2]], 0, 2, null, zn)),
            l.xb(
              8,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
            (t()(), l.hb(16777216, [[1, 2]], 0, 1, null, $n)),
            l.xb(
              11,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(),
            l.hb(
              0,
              [
                [1, 2],
                ["itemTemplate", 2],
              ],
              0,
              0,
              null,
              Rn,
            )),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 2, 0, ""),
              t(e, 4, 0, 120),
              t(e, 5, 0, 120, l.Nb(e, 12), e.context.mib3Let),
              t(
                e,
                8,
                0,
                l.Yb(
                  e,
                  8,
                  0,
                  l.Nb(e, 9).transform(n.privacyService.privacyModeEnabled$),
                ),
              ),
              t(
                e,
                11,
                0,
                n.receivedLastDestinations &&
                  (!e.context.mib3Let || 0 === e.context.mib3Let.length),
              ));
          },
          function (t, e) {
            t(e, 0, 0, l.Nb(e, 5).showLineNumbers);
          },
        );
      }
      function Bn(t) {
        return l.ac(
          2,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              19,
              "au3-dashboard-screen",
              [["id", "NAVI_DASHBOARD_LAST_DESTINATIONS"]],
              null,
              null,
              null,
              K,
              Q,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, q.a, [], null, null),
            (t()(),
            l.yb(
              3,
              0,
              null,
              0,
              1,
              "au3-dashboard-title",
              [],
              null,
              null,
              null,
              Z.b,
              Z.a,
            )),
            l.xb(
              4,
              49152,
              null,
              0,
              X.a,
              [],
              {
                primaryTitleDeveloperText: [0, "primaryTitleDeveloperText"],
                primaryTitleRouteInfo: [1, "primaryTitleRouteInfo"],
                iconName: [2, "iconName"],
              },
              null,
            ),
            (t()(), l.hb(16777216, null, 0, 2, null, Hn)),
            l.xb(
              6,
              16384,
              null,
              0,
              $t.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
            (t()(),
            l.yb(
              8,
              0,
              null,
              0,
              11,
              "au3-dashboard-operation-panel",
              [],
              null,
              null,
              null,
              st,
              ut,
            )),
            l.xb(9, 49152, null, 0, rt.a, [], null, null),
            (t()(),
            l.yb(
              10,
              0,
              null,
              0,
              9,
              "au3-dashboard-operation-panel-item",
              [["id", "CloseLastDestinationScreenButton"]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l =
                      !1 !== t.component.closeLastDestinationsTapped.emit() &&
                      l),
                  l
                );
              },
              y,
              C,
            )),
            l.xb(
              11,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(12, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              13,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              14,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              16,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              17,
              49152,
              null,
              0,
              x.a,
              [],
              { icon: [0, "icon"], iconCategory: [1, "iconCategory"] },
              null,
            ),
            l.xb(
              18,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              19,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "NAVI_DASHBOARD_LAST_DESTINATIONS"),
              t(
                e,
                4,
                0,
                "Letzte Ziele",
                n.routeInfoLastDestinations,
                "E0C3_navigation_letzteziele.webp",
              ),
              t(
                e,
                6,
                0,
                l.Yb(e, 6, 0, l.Nb(e, 7).transform(n.lastDestinations$)),
              ),
              t(e, 11, 0, "CloseLastDestinationScreenButton"),
              t(e, 14, 0),
              t(e, 16, 0),
              t(e, 17, 0, "E7EC_close_list.webp", n.iconCategoryEnum.Touch));
          },
          function (t, e) {
            t(e, 10, 0, l.Nb(e, 16).markerClassEnabled);
          },
        );
      }
      var Vn = n("C05f"),
        jn = n("I/e0"),
        Yn = n("ndMh"),
        Fn = n("8lto"),
        Gn = (function (t) {
          return (
            (t.INIT = "INIT"),
            (t.ERROR = "ERROR"),
            (t.MAP = "MAP"),
            (t.LAST_DEST = "LAST_DEST"),
            t
          );
        })({});
      class Un {
        constructor(t, e, n) {
          ((this.naviAppStatesService = t),
            (this.onlineRoutingService = e),
            (this.Context = Rt.s),
            (this.IconCategory = Rt.Z),
            (this.naviDashboardScreenEnum = Gn),
            (this.appStateTextEnum = Yn.c),
            (this.textToolMode = Rt.gd.textToolMode),
            (this.sharedTextureConsiderScreenAnimation = !0),
            (this.shouldShowLastDestinations$$ = new Vn.a(!1)),
            (this.destroy$$ = new ie.a(1)),
            (this.logger = n.getLogger(
              "navi.dashboard.NaviDashboardTileComponent",
            )),
            (this.activeScreen$ = this.createActiveScreen$()),
            (this.appStateTextEnumCurrent$ =
              this.createAppStateTextEnumCurrent$()),
            this.activeScreen$
              .pipe(
                Object(se.a)((t) => t !== Gn.MAP),
                Object(cn.a)(1),
                Object(be.a)(this.destroy$$),
              )
              .subscribe(() => {
                this.sharedTextureConsiderScreenAnimation = !1;
              }));
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        createActiveScreen$() {
          return Object(Ze.b)(
            this.naviAppStatesService.state$,
            this.shouldShowLastDestinations$$,
          ).pipe(
            Object(Rt.pd)(this.logger, "createActiveScreen$: input:"),
            Object(re.a)(([t, e]) => {
              const n = jn.a.stateType(t);
              switch (n) {
                case jn.b.Initializing:
                  return Gn.INIT;
                case jn.b.Error:
                  return Gn.ERROR;
                case jn.b.Initialized:
                  return e ? Gn.LAST_DEST : Gn.MAP;
                default:
                  this.logger.error("unknown StateType:", n);
              }
              return Gn.INIT;
            }),
            Object(ue.a)(),
            Object(Rt.pd)(this.logger, "createActiveScreen$: new screen:"),
            Object(Rt.Kd)(),
          );
        }
        createAppStateTextEnumCurrent$() {
          return this.naviAppStatesService.state$.pipe(
            Object(re.a)((t) => {
              switch (t) {
                case Yn.a.NotActivated:
                  return Yn.c.NotActivated;
                case Yn.a.DbDamaged:
                  return Yn.c.DbDamaged;
                case Yn.a.DbNotCompatible:
                  return Yn.c.DbNotCompatible;
                case Yn.a.DbWrongMarket:
                  return Yn.c.DbWrongMarket;
                case Yn.a.FunctionOnDemand:
                case Yn.a.Ready4Nav:
                  return Yn.c.NotBought;
                case Yn.a.DbNotAvailable:
                  return Yn.c.DbNotAvailable;
              }
            }),
          );
        }
        showLastDestinationsScreen() {
          (this.logger.info("showLastDestinationsScreen: open screen"),
            this.shouldShowLastDestinations$$.next(!0));
        }
        hideLastDestinationsScreen() {
          (this.logger.info("hideLastDestinationsScreen: close screen"),
            this.shouldShowLastDestinations$$.next(!1));
        }
      }
      var Wn = l.wb({
        encapsulation: 0,
        styles: [["[_nghost-%COMP%]{display:block;height:100%}"]],
        data: {},
      });
      function qn(t) {
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
              "au3-navi-dashboard-status-screen",
              [["id", "NAVI_DASHBOARD_INIT"]],
              null,
              null,
              null,
              He,
              Re,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              $e,
              [ze.c],
              { statusText: [0, "statusText"] },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "NAVI_DASHBOARD_INIT"),
              t(e, 2, 0, "Navi wird initialisiert.\nBitte warten..."));
          },
          null,
        );
      }
      function Qn(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-navi-dashboard-map-screen",
              [],
              null,
              [[null, "showLastDestinationsTapped"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "showLastDestinationsTapped" === e &&
                    (l = !1 !== t.component.showLastDestinationsScreen() && l),
                  l
                );
              },
              Dn,
              Pn,
            )),
            l.xb(
              1,
              180224,
              null,
              0,
              gn,
              [pn.b, ze.c, fn.a, dn.a, xn.a, Cn.a, _n.a, vn.a, yn.b, s.a, o.a],
              {
                sharedTextureConsiderScreenAnimation: [
                  0,
                  "sharedTextureConsiderScreenAnimation",
                ],
              },
              { showLastDestinationsTapped: "showLastDestinationsTapped" },
            ),
          ],
          function (t, e) {
            t(e, 1, 0, e.component.sharedTextureConsiderScreenAnimation);
          },
          null,
        );
      }
      function Kn(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-navi-dashboard-last-dest-screen",
              [],
              null,
              [[null, "closeLastDestinationsTapped"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "closeLastDestinationsTapped" === e &&
                    (l = !1 !== t.component.hideLastDestinationsScreen() && l),
                  l
                );
              },
              Bn,
              kn,
            )),
            l.xb(1, 49152, null, 0, En, [jt.a, xn.a, wn.a, _n.a, o.a], null, {
              closeLastDestinationsTapped: "closeLastDestinationsTapped",
            }),
          ],
          null,
          null,
        );
      }
      function Zn(t) {
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
              "au3-navi-dashboard-status-screen",
              [["id", "NAVI_DASHBOARD_ERROR"]],
              null,
              null,
              null,
              He,
              Re,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              $e,
              [ze.c],
              {
                statusText: [0, "statusText"],
                statusId: [1, "statusId"],
                statusIdEnumType: [2, "statusIdEnumType"],
              },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
            l.Pb(131072, f.b, [l.h]),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "NAVI_DASHBOARD_ERROR"),
              t(
                e,
                2,
                0,
                l.Yb(e, 2, 0, l.Nb(e, 3).transform(n.appStateTextEnumCurrent$)),
                l.Yb(e, 2, 1, l.Nb(e, 4).transform(n.appStateTextEnumCurrent$)),
                n.appStateTextEnum,
              ));
          },
          null,
        );
      }
      function Xn(t) {
        return l.ac(
          0,
          [
            (t()(),
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
            l.xb(
              1,
              16384,
              null,
              0,
              f.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
            (t()(), l.hb(16777216, null, null, 1, null, qn)),
            l.xb(
              4,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Qn)),
            l.xb(
              6,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Kn)),
            l.xb(
              8,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Zn)),
            l.xb(
              10,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(0, null, null, 0)),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, l.Yb(e, 1, 0, l.Nb(e, 2).transform(n.activeScreen$))),
              t(e, 4, 0, n.naviDashboardScreenEnum.INIT),
              t(e, 6, 0, n.naviDashboardScreenEnum.MAP),
              t(e, 8, 0, n.naviDashboardScreenEnum.LAST_DEST),
              t(e, 10, 0, n.naviDashboardScreenEnum.ERROR));
          },
          null,
        );
      }
      function Jn(t) {
        return l.ac(
          2,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-dashboard-tile",
              [["id", "Navi"]],
              null,
              null,
              null,
              ne,
              Ft,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              Yt,
              [Bt.a, jt.a, Vt.a, [2, Ht.a]],
              {
                context: [0, "context"],
                title: [1, "title"],
                iconName: [2, "iconName"],
                decoratorIcon: [3, "decoratorIcon"],
                content: [4, "content"],
              },
              null,
            ),
            (t()(), l.hb(0, [["content", 2]], null, 0, null, Xn)),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "Navi"),
              t(
                e,
                2,
                0,
                n.Context.Navi,
                "NAVI",
                "E0B1_map.webp",
                "/decorators/W523_Homescreen/navi.webp",
                l.Nb(e, 3),
              ));
          },
          null,
        );
      }
      class tl {
        constructor() {
          ((this.uiStateType = Rt.uc.ListHorizontal),
            (this.iconCategory = Rt.Z.Cover),
            (this.enterContextTitleTapped = new l.n()),
            (this.enterContextCoverTapped = new l.n()));
        }
      }
      var el = l.wb({
        encapsulation: 0,
        styles: [
          [
            '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:block;width:100%;height:100%}.status-text[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;padding:15px;font-size:30px;text-align:center}',
          ],
        ],
        data: {},
      });
      function nl(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-dashboard-cover",
              [["id", ""]],
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
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l =
                      !1 !== t.component.enterContextCoverTapped.emit() && l),
                  l
                );
              },
              at,
              tt,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              4,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              6,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              7,
              212992,
              null,
              0,
              m.a,
              [[2, g.a], [8, null], [3, m.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            l.xb(
              8,
              49152,
              null,
              0,
              J.a,
              [],
              {
                iconName: [0, "iconName"],
                iconCategory: [1, "iconCategory"],
                showCover: [2, "showCover"],
                labelDeveloperText: [3, "labelDeveloperText"],
                labelFixedNumberOfLines: [4, "labelFixedNumberOfLines"],
              },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, ""),
              t(e, 4, 0),
              t(e, 6, 0),
              t(e, 7, 0, n.uiStateType),
              t(
                e,
                8,
                0,
                n.iconUrl,
                n.iconCategory,
                !0,
                n.developerStatusText,
                6,
              ));
          },
          function (t, e) {
            t(e, 0, 1, [
              l.Nb(e, 6).markerClassEnabled,
              l.Nb(e, 7).uiStateListHorizontal,
              l.Nb(e, 7).uiStateListVertical,
              l.Nb(e, 7).uiStateCoverLeft,
              l.Nb(e, 7).uiStateCoverRight,
              l.Nb(e, 7).uiStateCoverBottom,
              l.Nb(e, 7).uiStateButton,
              l.Nb(e, 7).uiStateByDabLeft,
              l.Nb(e, 7).uiStateByDabRight,
              l.Nb(e, 7).uiStateLbDabLeft,
              l.Nb(e, 7).uiStateLbDabRight,
            ]);
          },
        );
      }
      function ll(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-dashboard-info-text",
              [["id", ""]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l =
                      !1 !== t.component.enterContextCoverTapped.emit() && l),
                  l
                );
              },
              Et,
              It,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              4,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              6,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              7,
              49152,
              null,
              0,
              Lt.a,
              [],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                contentDeveloperText: [1, "contentDeveloperText"],
              },
              null,
            ),
            l.xb(
              8,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, ""),
              t(e, 4, 0),
              t(e, 6, 0),
              t(e, 7, 0, "Hinweis", n.developerStatusText));
          },
          function (t, e) {
            t(e, 0, 0, l.Nb(e, 6).markerClassEnabled);
          },
        );
      }
      function al(t) {
        return l.ac(
          2,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              7,
              "au3-dashboard-screen",
              [],
              null,
              null,
              null,
              K,
              Q,
            )),
            l.xb(1, 49152, null, 0, q.a, [], null, null),
            (t()(),
            l.yb(
              2,
              0,
              null,
              0,
              1,
              "au3-dashboard-title",
              [],
              null,
              [[null, "primaryTitleTapped"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "primaryTitleTapped" === e &&
                    (l =
                      !1 !== t.component.enterContextTitleTapped.emit() && l),
                  l
                );
              },
              Z.b,
              Z.a,
            )),
            l.xb(
              3,
              49152,
              null,
              0,
              X.a,
              [],
              {
                primaryTitleDeveloperText: [0, "primaryTitleDeveloperText"],
                secondaryTitleDeveloperText: [1, "secondaryTitleDeveloperText"],
                secondaryTitleNonI18nValue: [2, "secondaryTitleNonI18nValue"],
                secondaryTitleInterpolateParams: [
                  3,
                  "secondaryTitleInterpolateParams",
                ],
                iconName: [4, "iconName"],
              },
              { primaryTitleTapped: "primaryTitleTapped" },
            ),
            (t()(), l.hb(16777216, null, 0, 1, null, nl)),
            l.xb(
              5,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), l.hb(0, [["textOnly", 2]], 0, 0, null, ll)),
            l.Mb(0, 0),
          ],
          function (t, e) {
            var n = e.component;
            (t(
              e,
              3,
              0,
              "Phone",
              n.secondaryTitleDeveloperText,
              n.secondaryTitleNonI18nValue,
              n.secondaryTitleInterpolateParams,
              "E00A_phone.webp",
            ),
              t(e, 5, 0, !!n.iconUrl, l.Nb(e, 6)));
          },
          null,
        );
      }
      var il = n("U6SP"),
        ol = n("1ZTq"),
        rl = n("YEFf"),
        ul = n("6qsK");
      class sl {
        constructor(t) {
          ((this.phoneService = t),
            (this.openCallstackTapped = new l.n()),
            (this.mainButtonTapped = new l.n()),
            (this.iconCategoryEnum = Rt.Z),
            (this.iconScaleModeEnum = Rt.ab),
            (this.phoneRouteMain = ul.b.Main));
        }
      }
      var cl = l.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{display:block}.container[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.container[_ngcontent-%COMP%]{display:flex;position:relative}.main-button[_ngcontent-%COMP%]{flex-grow:1}.toggle-icon[_ngcontent-%COMP%]{position:absolute;width:80px;height:80px;right:20px;top:20px;pointer-events:none;border:1px solid hsla(0,0%,78.4%,.65);background-color:rgba(23,33,33,.94)}",
          ],
        ],
        data: {},
      });
      function bl(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "toggle-icon"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              a.b,
              a.a,
            )),
            l.xb(
              1,
              4243456,
              null,
              0,
              i.b,
              [o.a, l.z],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                scaleMode: [2, "scaleMode"],
                ignoreCategorySize: [3, "ignoreCategorySize"],
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
              "E9C3_phone_toggle_active.webp",
              n.iconCategoryEnum.TitleLine,
              n.iconScaleModeEnum.None,
              !0,
            );
          },
          function (t, e) {
            t(e, 0, 0, l.Nb(e, 1).iconComponentHidden);
          },
        );
      }
      function dl(t) {
        return l.ac(
          2,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              28,
              "au3-dashboard-screen",
              [],
              null,
              null,
              null,
              K,
              Q,
            )),
            l.xb(1, 49152, null, 0, q.a, [], null, null),
            (t()(),
            l.yb(
              2,
              0,
              null,
              0,
              2,
              "au3-dashboard-title",
              [],
              null,
              null,
              null,
              Z.b,
              Z.a,
            )),
            l.xb(
              3,
              49152,
              null,
              0,
              X.a,
              [],
              {
                primaryTitleDeveloperText: [0, "primaryTitleDeveloperText"],
                primaryTitleRouteInfo: [1, "primaryTitleRouteInfo"],
                secondaryTitleNonI18nValue: [2, "secondaryTitleNonI18nValue"],
                iconName: [3, "iconName"],
              },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
            (t()(),
            l.yb(
              5,
              0,
              null,
              0,
              12,
              "div",
              [["class", "container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            l.yb(
              6,
              0,
              null,
              null,
              9,
              "au3-button",
              [
                ["class", "main-button"],
                ["id", "MainButton"],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "button--activated", null],
                [2, "button--horizontal", null],
                [2, "button--with-border", null],
                [2, "button--with-thick-border", null],
              ],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l = !1 !== t.component.mainButtonTapped.emit() && l),
                  l
                );
              },
              il.b,
              il.a,
            )),
            l.xb(
              7,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(8, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              9,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              10,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              12,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              13,
              49152,
              null,
              0,
              ol.b,
              [],
              {
                hasText: [0, "hasText"],
                icon: [1, "icon"],
                iconCategory: [2, "iconCategory"],
              },
              null,
            ),
            l.xb(
              14,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              15,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, bl)),
            l.xb(
              17,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(),
            l.yb(
              18,
              0,
              null,
              0,
              10,
              "au3-dashboard-operation-panel",
              [],
              null,
              null,
              null,
              st,
              ut,
            )),
            l.xb(19, 49152, null, 0, rt.a, [], null, null),
            (t()(),
            l.yb(
              20,
              0,
              null,
              0,
              8,
              "au3-dashboard-operation-panel-item",
              [["icon", "E7ED_open_list.webp"]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l = !1 !== t.component.openCallstackTapped.next() && l),
                  l
                );
              },
              y,
              C,
            )),
            l.xb(21, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              22,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              23,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              25,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              26,
              49152,
              null,
              0,
              x.a,
              [],
              { icon: [0, "icon"], iconCategory: [1, "iconCategory"] },
              null,
            ),
            l.xb(
              27,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              28,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(
              e,
              3,
              0,
              "Phone",
              n.phoneRouteMain,
              l.Yb(e, 3, 2, l.Nb(e, 4).transform(n.phoneService.deviceName$)),
              "E00A_phone.webp",
            ),
              t(e, 7, 0, "MainButton"),
              t(e, 10, 0),
              t(e, 12, 0),
              t(e, 13, 0, !1, "/decorators/W523_Homescreen/phone.webp", ""),
              t(e, 17, 0, n.showToggleButton),
              t(e, 23, 0),
              t(e, 25, 0),
              t(e, 26, 0, "E7ED_open_list.webp", n.iconCategoryEnum.Touch));
          },
          function (t, e) {
            (t(
              e,
              6,
              0,
              l.Nb(e, 12).markerClassEnabled,
              l.Nb(e, 13).activated,
              l.Nb(e, 13).layoutHorizontal,
              l.Nb(e, 13).thinBorder,
              l.Nb(e, 13).thickBorder,
            ),
              t(e, 20, 0, l.Nb(e, 25).markerClassEnabled));
          },
        );
      }
      var pl = n("Zbi+"),
        hl = (function (t) {
          return ((t.MAILBOX = "Mailbox"), (t.UNKNOWN = "Unbekannt"), t);
        })({});
      class ml {
        constructor(t, e, n) {
          ((this.phoneService = t),
            (this.popupService = e),
            (this.closeCallstackTapped = new l.n()),
            (this.iconCategoryEnum = Rt.Z),
            (this.callTypeEnum = hl),
            (this.uiStateType = Rt.uc.ListHorizontal),
            (this.phoneRouteCallstack = ul.b.Main.children.Callstack),
            (this.icons = {
              [pl.l.DIALED]: "E050_phone_dialed_number.webp",
              [pl.l.MISSED]: "E051_phone_missed_call.webp",
              [pl.l.RECEIVED]: "E052_phone_received_call.webp",
            }),
            (this.logger = n.getLogger(
              "phone.dashboard.PhoneDashboardCallstackScreenComponent",
            )),
            (this.recentCalls$ = t.groupedRecentCalls$.pipe(
              Object(Rt.Xc)(this.logger, "constructor: groupedRecentCalls$:"),
              Object(re.a)((t) =>
                t.map((t) => ({
                  icon: this.getIcon(t),
                  primary: this.getPrimaryText(t),
                  secondary: this.getSecondaryText(t),
                  call: t,
                })),
              ),
              Object(Rt.pd)(this.logger, "constructor: recentCalls$:"),
            )));
        }
        getIcon(t) {
          const e = t && t.entries && t.entries[0] && t.entries[0].type;
          return e ? this.icons[e] : "";
        }
        getTitleDevText(t) {
          return t && this.isMailboxNumber(t) ? hl.MAILBOX : hl.UNKNOWN;
        }
        isMailboxNumber(t) {
          return (
            !!(t && t.phoneDevice && t.phoneDevice.mailboxNumber) &&
            t.phoneNumber === t.phoneDevice.mailboxNumber
          );
        }
        getPrimaryText(t) {
          if (!t || this.isMailboxNumber(t)) return null;
          const e = (t.entries && t.entries.length) || 0,
            n = t.name || t.phoneNumber || null;
          return n && e > 1 ? n + ` (${e})` : n;
        }
        getSecondaryText(t) {
          return (t && t.name && t.phoneNumber) || null;
        }
        dial(t) {
          if (t)
            return t.phoneNumber
              ? void (t.phoneDevice
                  ? this.phoneService
                      .dialNumber(t.phoneNumber, t.phoneDevice.uri)
                      .catch((t) => this.logger.info("dial:", t))
                  : this.logger.error("dial: call has no phone device!", t))
              : (this.logger.warn("dial: call has no phone number!", t),
                void this.popupService.request(
                  Rt.Ob.POPUP_PHONE_POPUP_TOAST_NUMBER_NOT_AVAILABLE,
                ));
        }
      }
      var gl = n("sg2e"),
        fl = l.wb({
          encapsulation: 0,
          styles: [
            [
              '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:block;width:100%;height:100%}',
            ],
          ],
          data: {},
        });
      function xl(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-dashboard-list-item",
              [],
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
                [2, "with-icon", null],
                [2, "with-subtitle", null],
                [2, "only-icon", null],
              ],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l =
                      !1 !==
                        t.component.dial(
                          null == t.context.$implicit
                            ? null
                            : t.context.$implicit.call,
                        ) && l),
                  l
                );
              },
              ht,
              bt,
            )),
            l.xb(1, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              2,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              3,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              5,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              6,
              212992,
              null,
              0,
              m.a,
              [[2, g.a], [8, null], [3, m.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            l.xb(
              7,
              49152,
              null,
              0,
              ct.a,
              [],
              {
                icon: [0, "icon"],
                titleId: [1, "titleId"],
                titleIdEnum: [2, "titleIdEnum"],
                titleDeveloperText: [3, "titleDeveloperText"],
                titleNonI18nText: [4, "titleNonI18nText"],
                subtitleNonI18nText: [5, "subtitleNonI18nText"],
                listIconCategory: [6, "listIconCategory"],
                mirrorIconForArabic: [7, "mirrorIconForArabic"],
              },
              null,
            ),
            l.xb(
              8,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 3, 0),
              t(e, 5, 0),
              t(e, 6, 0, n.uiStateType),
              t(
                e,
                7,
                0,
                null == e.context.$implicit ? null : e.context.$implicit.icon,
                n.getTitleDevText(
                  null == e.context.$implicit ? null : e.context.$implicit.call,
                ),
                n.callTypeEnum,
                n.getTitleDevText(
                  null == e.context.$implicit ? null : e.context.$implicit.call,
                ),
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.primary,
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.secondary,
                n.iconCategoryEnum.List,
                !0,
              ));
          },
          function (t, e) {
            t(e, 0, 1, [
              l.Nb(e, 5).markerClassEnabled,
              l.Nb(e, 6).uiStateListHorizontal,
              l.Nb(e, 6).uiStateListVertical,
              l.Nb(e, 6).uiStateCoverLeft,
              l.Nb(e, 6).uiStateCoverRight,
              l.Nb(e, 6).uiStateCoverBottom,
              l.Nb(e, 6).uiStateButton,
              l.Nb(e, 6).uiStateByDabLeft,
              l.Nb(e, 6).uiStateByDabRight,
              l.Nb(e, 6).uiStateLbDabLeft,
              l.Nb(e, 6).uiStateLbDabRight,
              l.Nb(e, 7).icon,
              l.Nb(e, 7).displaySubtitle,
              l.Nb(e, 7).hasOnlyIcon,
            ]);
          },
        );
      }
      function Cl(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              7,
              "au3-list",
              [
                ["au3ListDomPaging", ""],
                ["class", "list"],
                ["id", ""],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              ft.b,
              ft.a,
            )),
            l.Sb(6144, null, xt.a, null, [Ct.a]),
            l.xb(
              2,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(3, 16384, null, 0, _t.a, [l.l], null, null),
            l.xb(
              4,
              16384,
              null,
              0,
              vt.a,
              [o.a],
              { itemHeightGuess: [0, "itemHeightGuess"] },
              null,
            ),
            l.xb(
              5,
              12828672,
              null,
              1,
              Ct.a,
              [
                [2, vt.a],
                [2, yt.a],
                [8, null],
                [2, u.a],
                [2, Pt.a],
                [2, Ot.a],
                [2, N.b],
                ot.i,
                l.z,
                l.h,
                o.a,
                Tt.a,
                Mt.a,
                [2, z.a],
                T.a,
                [2, ot.a],
              ],
              {
                itemHeightGuess: [0, "itemHeightGuess"],
                defaultTemplate: [1, "defaultTemplate"],
                items: [2, "items"],
              },
              null,
            ),
            l.Tb(603979776, 1, { template: 0 }),
            (t()(),
            l.hb(
              0,
              [
                [1, 2],
                ["itemTemplate", 2],
              ],
              0,
              0,
              null,
              xl,
            )),
          ],
          function (t, e) {
            (t(e, 2, 0, ""),
              t(e, 4, 0, 120),
              t(e, 5, 0, 120, l.Nb(e, 7), e.parent.context.mib3Let));
          },
          function (t, e) {
            t(e, 0, 0, l.Nb(e, 5).showLineNumbers);
          },
        );
      }
      function _l(t) {
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
              "au3-dashboard-info-text",
              [],
              null,
              null,
              null,
              Et,
              It,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              Lt.a,
              [],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                contentDeveloperText: [1, "contentDeveloperText"],
              },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "NoCallsInfoText"),
              t(e, 2, 0, "Hinweis", "Es sind keine Anrufe\nverf\xfcgbar."));
          },
          null,
        );
      }
      function vl(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              18,
              "au3-dashboard-screen",
              [],
              null,
              null,
              null,
              K,
              Q,
            )),
            l.xb(1, 49152, null, 0, q.a, [], null, null),
            (t()(),
            l.yb(
              2,
              0,
              null,
              0,
              2,
              "au3-dashboard-title",
              [],
              null,
              null,
              null,
              Z.b,
              Z.a,
            )),
            l.xb(
              3,
              49152,
              null,
              0,
              X.a,
              [],
              {
                primaryTitleDeveloperText: [0, "primaryTitleDeveloperText"],
                primaryTitleRouteInfo: [1, "primaryTitleRouteInfo"],
                secondaryTitleNonI18nValue: [2, "secondaryTitleNonI18nValue"],
                iconName: [3, "iconName"],
              },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
            (t()(), l.hb(16777216, null, 0, 1, null, Cl)),
            l.xb(
              6,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(),
            l.yb(
              7,
              0,
              null,
              0,
              10,
              "au3-dashboard-operation-panel",
              [],
              null,
              null,
              null,
              st,
              ut,
            )),
            l.xb(8, 49152, null, 0, rt.a, [], null, null),
            (t()(),
            l.yb(
              9,
              0,
              null,
              0,
              8,
              "au3-dashboard-operation-panel-item",
              [["icon", "E7EC_close_list.webp"]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l = !1 !== t.component.closeCallstackTapped.next() && l),
                  l
                );
              },
              y,
              C,
            )),
            l.xb(10, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              11,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              12,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              14,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              15,
              49152,
              null,
              0,
              x.a,
              [],
              { icon: [0, "icon"], iconCategory: [1, "iconCategory"] },
              null,
            ),
            l.xb(
              16,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              17,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
            (t()(), l.hb(0, [["noRecentCalls", 2]], 0, 0, null, _l)),
          ],
          function (t, e) {
            var n = e.component;
            (t(
              e,
              3,
              0,
              "Phone",
              n.phoneRouteCallstack,
              l.Yb(e, 3, 2, l.Nb(e, 4).transform(n.phoneService.deviceName$)),
              "E00A_phone.webp",
            ),
              t(
                e,
                6,
                0,
                !e.context.mib3Let ||
                  (null == e.context.mib3Let
                    ? null
                    : e.context.mib3Let.length) > 0,
                l.Nb(e, 18),
              ),
              t(e, 12, 0),
              t(e, 14, 0),
              t(e, 15, 0, "E7EC_close_list.webp", n.iconCategoryEnum.Touch));
          },
          function (t, e) {
            t(e, 9, 0, l.Nb(e, 14).markerClassEnabled);
          },
        );
      }
      function yl(t) {
        return l.ac(
          2,
          [
            (t()(), l.hb(16777216, null, null, 2, null, vl)),
            l.xb(
              1,
              16384,
              null,
              0,
              $t.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, l.Yb(e, 1, 0, l.Nb(e, 2).transform(n.recentCalls$)));
          },
          null,
        );
      }
      var Pl = n("hBG2"),
        Ol = n("Vc2n"),
        Tl = n("YzIb"),
        Ml = (function (t) {
          return (
            (t.CONFERENCE = "CONFERENCE"),
            (t.NAME_OR_NUMBER = "NUMBER"),
            (t.UNKNOWN = "UNKNOWN"),
            (t.CONFIDENTIAL = "CONFIDENTIAL"),
            (t.MAILBOX = "MAILBOX"),
            t
          );
        })({});
      class Sl {
        constructor(t, e, n, l) {
          ((this.phoneService = t),
            (this.callOperationsService = e),
            (this.phoneRoutingService = n),
            (this.iconCategoryEnum = Rt.Z),
            (this.callOperationEnum = Pl.a),
            (this.callStateEnum = pl.d),
            (this.audioEndpointEnum = pl.a),
            (this.uiStateType = Rt.uc.ListHorizontal),
            (this.coverScaleMode = Rt.ab.Fill),
            (this.callType = Ml),
            (this.confidentialModeReplacement = Tl.d),
            (this.logger = l.getLogger(
              "phone.dashboard.PhoneDashboardCallScreenComponent",
            )),
            (this.activeCall$ = t.callsWithoutEmergencies$.pipe(
              Object(re.a)((t) => t.focusCall),
              Object(se.a)(Rt.wd),
              Object(Rt.pd)(this.logger, "constructor: activeCall$:"),
              Object(Rt.Kd)(),
            )),
            (this.activeCallType$ = this.activeCall$.pipe(
              Object(re.a)((t) =>
                t.isConfidential
                  ? Ml.CONFIDENTIAL
                  : t.participants.length > 1
                    ? Ml.CONFERENCE
                    : t.number || t.name
                      ? Ml.NAME_OR_NUMBER
                      : t.callType === pl.b.MAILBOX
                        ? Ml.MAILBOX
                        : Ml.UNKNOWN,
              ),
            )));
        }
        toggleMicrophoneMute(t) {
          (this.logger.info("toggleMicrophoneMute:", t),
            t.isMicrophoneMuted
              ? this.phoneService.unmuteCall(t.id)
              : this.phoneService.muteCall(t.id));
        }
        getIconForCall(t) {
          if (t && t.participants && t.participants.length > 0)
            switch (t.participants[0].phoneNumberType) {
              case pl.k.PRIVATE:
                return "E025_phone_home.webp";
              case pl.k.BUSINESS:
                return "E024_phone_work.webp";
              case pl.k.MOBILE:
                return "E027_phone_mobile.webp";
              case pl.k.LANDLINE:
                return "E026_phone_landline.webp";
              case pl.k.FAX:
                return "E028_phone_fax.webp";
              case pl.k.UNKNOWN:
                return "E25C_phone_unknown_number.webp";
            }
          return (
            this.logger.warn(
              "getIconForCall: could not determine for call:",
              t,
            ),
            "E00A_phone.webp"
          );
        }
      }
      var Nl = l.wb({
        encapsulation: 0,
        styles: [
          [
            '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:block}.fill-space[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}',
          ],
        ],
        data: {},
      });
      function Ll(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-dashboard-title",
              [],
              null,
              [[null, "primaryTitleTapped"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "primaryTitleTapped" === e &&
                    (l =
                      !1 !== t.component.phoneRoutingService.enterContext() &&
                      l),
                  l
                );
              },
              Z.b,
              Z.a,
            )),
            l.xb(
              1,
              49152,
              null,
              0,
              X.a,
              [],
              {
                primaryTitleDeveloperText: [0, "primaryTitleDeveloperText"],
                secondaryTitleNonI18nValue: [1, "secondaryTitleNonI18nValue"],
                iconName: [2, "iconName"],
              },
              { primaryTitleTapped: "primaryTitleTapped" },
            ),
          ],
          function (t, e) {
            t(
              e,
              1,
              0,
              "Phone",
              (null == e.parent.context.mib3Let
                ? null
                : e.parent.context.mib3Let.callerName) ||
                (null == e.parent.context.mib3Let
                  ? null
                  : e.parent.context.mib3Let.number),
              e.component.getIconForCall(e.parent.context.mib3Let),
            );
          },
          null,
        );
      }
      function Il(t) {
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
              "au3-dashboard-title",
              [["id", "Confidential"]],
              null,
              [[null, "primaryTitleTapped"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "primaryTitleTapped" === e &&
                    (l =
                      !1 !== t.component.phoneRoutingService.enterContext() &&
                      l),
                  l
                );
              },
              Z.b,
              Z.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              X.a,
              [],
              {
                primaryTitleDeveloperText: [0, "primaryTitleDeveloperText"],
                secondaryTitleDeveloperText: [1, "secondaryTitleDeveloperText"],
                iconName: [2, "iconName"],
              },
              { primaryTitleTapped: "primaryTitleTapped" },
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "Confidential"),
              t(
                e,
                2,
                0,
                "Phone",
                n.confidentialModeReplacement,
                n.getIconForCall(e.parent.context.mib3Let),
              ));
          },
          null,
        );
      }
      function Dl(t) {
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
              "au3-dashboard-title",
              [["id", "Conference"]],
              null,
              [[null, "primaryTitleTapped"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "primaryTitleTapped" === e &&
                    (l =
                      !1 !== t.component.phoneRoutingService.enterContext() &&
                      l),
                  l
                );
              },
              Z.b,
              Z.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              X.a,
              [],
              {
                primaryTitleDeveloperText: [0, "primaryTitleDeveloperText"],
                secondaryTitleDeveloperText: [1, "secondaryTitleDeveloperText"],
                iconName: [2, "iconName"],
              },
              { primaryTitleTapped: "primaryTitleTapped" },
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "Conference"),
              t(
                e,
                2,
                0,
                "Phone",
                "Konferenz",
                n.getIconForCall(e.parent.context.mib3Let),
              ));
          },
          null,
        );
      }
      function Al(t) {
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
              "au3-dashboard-title",
              [["id", "Mailbox"]],
              null,
              [[null, "primaryTitleTapped"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "primaryTitleTapped" === e &&
                    (l =
                      !1 !== t.component.phoneRoutingService.enterContext() &&
                      l),
                  l
                );
              },
              Z.b,
              Z.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              X.a,
              [],
              {
                primaryTitleDeveloperText: [0, "primaryTitleDeveloperText"],
                secondaryTitleDeveloperText: [1, "secondaryTitleDeveloperText"],
                iconName: [2, "iconName"],
              },
              { primaryTitleTapped: "primaryTitleTapped" },
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "Mailbox"),
              t(
                e,
                2,
                0,
                "Phone",
                "Mailbox",
                n.getIconForCall(e.parent.context.mib3Let),
              ));
          },
          null,
        );
      }
      function El(t) {
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
              "au3-dashboard-title",
              [["id", "CallerUnknown"]],
              null,
              [[null, "primaryTitleTapped"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "primaryTitleTapped" === e &&
                    (l =
                      !1 !== t.component.phoneRoutingService.enterContext() &&
                      l),
                  l
                );
              },
              Z.b,
              Z.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              X.a,
              [],
              {
                primaryTitleDeveloperText: [0, "primaryTitleDeveloperText"],
                secondaryTitleDeveloperText: [1, "secondaryTitleDeveloperText"],
                iconName: [2, "iconName"],
              },
              { primaryTitleTapped: "primaryTitleTapped" },
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "CallerUnknown"),
              t(
                e,
                2,
                0,
                "Phone",
                "Unbekannt",
                n.getIconForCall(e.parent.context.mib3Let),
              ));
          },
          null,
        );
      }
      function wl(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-dashboard-operation-panel-item",
              [["id", "ContinueCallButton"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0,
                  a = t.component;
                return (
                  "mib3Tap" === e &&
                    (l =
                      !1 !==
                        a.callOperationsService.perform(
                          t.parent.context.mib3Let,
                          a.callOperationEnum.Resume,
                        ) && l),
                  l
                );
              },
              y,
              C,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              4,
              147456,
              null,
              0,
              M.a,
              [S.a, l.h, o.a, [3, M.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              7,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              8,
              49152,
              null,
              0,
              x.a,
              [],
              { icon: [0, "icon"], iconCategory: [1, "iconCategory"] },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "ContinueCallButton"),
              t(
                e,
                4,
                0,
                !n.callOperationsService.isPossible(
                  e.parent.context.mib3Let,
                  n.callOperationEnum.Resume,
                ),
              ),
              t(e, 5, 0),
              t(e, 7, 0),
              t(
                e,
                8,
                0,
                "E054_phone_continue_call.webp",
                n.iconCategoryEnum.Touch,
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              l.Nb(e, 4).combinedDisabled,
              l.Nb(e, 4).useBrighterIcon,
              l.Nb(e, 7).markerClassEnabled,
            );
          },
        );
      }
      function kl(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-dashboard-operation-panel-item",
              [["id", "HoldCallButton"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0,
                  a = t.component;
                return (
                  "mib3Tap" === e &&
                    (l =
                      !1 !==
                        a.callOperationsService.perform(
                          t.parent.context.mib3Let,
                          a.callOperationEnum.Hold,
                        ) && l),
                  l
                );
              },
              y,
              C,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              4,
              147456,
              null,
              0,
              M.a,
              [S.a, l.h, o.a, [3, M.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              7,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              8,
              49152,
              null,
              0,
              x.a,
              [],
              { icon: [0, "icon"], iconCategory: [1, "iconCategory"] },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "HoldCallButton"),
              t(
                e,
                4,
                0,
                !n.callOperationsService.isPossible(
                  e.parent.context.mib3Let,
                  n.callOperationEnum.Hold,
                ),
              ),
              t(e, 5, 0),
              t(e, 7, 0),
              t(
                e,
                8,
                0,
                "E055_phone_hold_call.webp",
                n.iconCategoryEnum.Touch,
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              l.Nb(e, 4).combinedDisabled,
              l.Nb(e, 4).useBrighterIcon,
              l.Nb(e, 7).markerClassEnabled,
            );
          },
        );
      }
      function zl(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              54,
              "au3-dashboard-screen",
              [],
              null,
              null,
              null,
              K,
              Q,
            )),
            l.xb(1, 49152, null, 0, q.a, [], null, null),
            (t()(),
            l.yb(2, 0, null, 0, 12, null, null, null, null, null, null, null)),
            l.xb(
              3,
              16384,
              null,
              0,
              f.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
            (t()(), l.hb(16777216, null, null, 1, null, Ll)),
            l.xb(
              6,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Il)),
            l.xb(
              8,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Dl)),
            l.xb(
              10,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Al)),
            l.xb(
              12,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, El)),
            l.xb(14, 16384, null, 0, f.q, [l.P, l.L, f.o], null, null),
            (t()(),
            l.yb(
              15,
              0,
              null,
              0,
              12,
              "au3-dashboard-cover",
              [
                ["au3ImageLockingCategory", ""],
                ["id", "MainAreaCover"],
                ["ttIgnore", ""],
              ],
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
                [2, "lock-state-hidden", null],
                [2, "lock-state-faded", null],
              ],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l =
                      !1 !== t.component.phoneRoutingService.enterContext() &&
                      l),
                  l
                );
              },
              at,
              tt,
            )),
            l.xb(
              16,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(17, 16384, null, 0, c.a, [], null, null),
            l.xb(18, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              19,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              20,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              22,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              23,
              212992,
              null,
              0,
              m.a,
              [[2, g.a], [8, null], [3, m.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            l.xb(
              24,
              49152,
              null,
              0,
              J.a,
              [],
              {
                iconName: [0, "iconName"],
                coverScaleMode: [1, "coverScaleMode"],
              },
              null,
            ),
            l.xb(25, 212992, null, 0, it.a, [ot.i, [2, ot.a], l.h], null, null),
            l.xb(
              26,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              27,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
            (t()(),
            l.yb(
              28,
              0,
              null,
              0,
              26,
              "au3-dashboard-operation-panel",
              [],
              null,
              null,
              null,
              st,
              ut,
            )),
            l.xb(29, 49152, null, 0, rt.a, [], null, null),
            (t()(),
            l.yb(
              30,
              0,
              null,
              0,
              10,
              "au3-dashboard-operation-panel-item",
              [["id", "ToggleMuteButton"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l =
                      !1 !==
                        t.component.toggleMicrophoneMute(t.context.mib3Let) &&
                      l),
                  l
                );
              },
              y,
              C,
            )),
            l.xb(
              31,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(32, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              33,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              34,
              147456,
              null,
              0,
              M.a,
              [S.a, l.h, o.a, [3, M.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            l.xb(
              35,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              37,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              38,
              49152,
              null,
              0,
              x.a,
              [],
              { icon: [0, "icon"], iconCategory: [1, "iconCategory"] },
              null,
            ),
            l.xb(
              39,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              40,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
            (t()(),
            l.yb(
              41,
              0,
              null,
              0,
              10,
              "au3-dashboard-operation-panel-item",
              [
                ["icon", "E04E_phone_no_call.webp"],
                ["id", "HangUpButton"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0,
                  a = t.component;
                return (
                  "mib3Tap" === e &&
                    (l =
                      !1 !==
                        a.callOperationsService.perform(
                          t.context.mib3Let,
                          a.callOperationEnum.HangUp,
                        ) && l),
                  l
                );
              },
              y,
              C,
            )),
            l.xb(
              42,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(43, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              44,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              45,
              147456,
              null,
              0,
              M.a,
              [S.a, l.h, o.a, [3, M.a]],
              {
                mib3DisabledBrighterIcon: [0, "mib3DisabledBrighterIcon"],
                disabled: [1, "disabled"],
              },
              null,
            ),
            l.xb(
              46,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              48,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              49,
              49152,
              null,
              0,
              x.a,
              [],
              { icon: [0, "icon"], iconCategory: [1, "iconCategory"] },
              null,
            ),
            l.xb(
              50,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              51,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
            (t()(), l.hb(16777216, null, 0, 1, null, wl)),
            l.xb(
              53,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), l.hb(0, [["holdCallButton", 2]], null, 0, null, kl)),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 3, 0, l.Yb(e, 3, 0, l.Nb(e, 4).transform(n.activeCallType$))),
              t(e, 6, 0, n.callType.NAME_OR_NUMBER),
              t(e, 8, 0, n.callType.CONFIDENTIAL),
              t(e, 10, 0, n.callType.CONFERENCE),
              t(e, 12, 0, n.callType.MAILBOX),
              t(e, 16, 0, "MainAreaCover"),
              t(e, 20, 0),
              t(e, 22, 0),
              t(e, 23, 0, n.uiStateType),
              t(
                e,
                24,
                0,
                null == e.context.mib3Let ? null : e.context.mib3Let.pictureUri,
                n.coverScaleMode,
              ),
              t(e, 25, 0),
              t(e, 31, 0, "ToggleMuteButton"),
              t(
                e,
                34,
                0,
                (null == e.context.mib3Let
                  ? null
                  : e.context.mib3Let.audioEndpoint) !==
                  n.audioEndpointEnum.SPEAKER ||
                  (null == e.context.mib3Let
                    ? null
                    : e.context.mib3Let.callState) !== n.callStateEnum.ACTIVE ||
                  (null == e.context.mib3Let ? null : e.context.mib3Let.isSOS),
              ),
              t(e, 35, 0),
              t(e, 37, 0),
              t(
                e,
                38,
                0,
                null != e.context.mib3Let && e.context.mib3Let.isMicrophoneMuted
                  ? "E012_phone_mic_on.webp"
                  : "E013_phone_mic_off.webp",
                n.iconCategoryEnum.Touch,
              ),
              t(e, 42, 0, "HangUpButton"),
              t(
                e,
                45,
                0,
                !0,
                !n.callOperationsService.isPossible(
                  e.context.mib3Let,
                  n.callOperationEnum.HangUp,
                ),
              ),
              t(e, 46, 0),
              t(e, 48, 0),
              t(e, 49, 0, "E04E_phone_no_call.webp", n.iconCategoryEnum.Touch),
              t(
                e,
                53,
                0,
                (null == e.context.mib3Let
                  ? null
                  : e.context.mib3Let.callState) === n.callStateEnum.HOLD,
                l.Nb(e, 54),
              ));
          },
          function (t, e) {
            (t(e, 15, 1, [
              l.Nb(e, 22).markerClassEnabled,
              l.Nb(e, 23).uiStateListHorizontal,
              l.Nb(e, 23).uiStateListVertical,
              l.Nb(e, 23).uiStateCoverLeft,
              l.Nb(e, 23).uiStateCoverRight,
              l.Nb(e, 23).uiStateCoverBottom,
              l.Nb(e, 23).uiStateButton,
              l.Nb(e, 23).uiStateByDabLeft,
              l.Nb(e, 23).uiStateByDabRight,
              l.Nb(e, 23).uiStateLbDabLeft,
              l.Nb(e, 23).uiStateLbDabRight,
              l.Nb(e, 25).hide,
              l.Nb(e, 25).fade,
            ]),
              t(
                e,
                30,
                0,
                l.Nb(e, 34).combinedDisabled,
                l.Nb(e, 34).useBrighterIcon,
                l.Nb(e, 37).markerClassEnabled,
              ),
              t(
                e,
                41,
                0,
                l.Nb(e, 45).combinedDisabled,
                l.Nb(e, 45).useBrighterIcon,
                l.Nb(e, 48).markerClassEnabled,
              ));
          },
        );
      }
      function $l(t) {
        return l.ac(
          2,
          [
            (t()(), l.hb(16777216, null, null, 2, null, zl)),
            l.xb(
              1,
              16384,
              null,
              0,
              $t.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, l.Yb(e, 1, 0, l.Nb(e, 2).transform(n.activeCall$)));
          },
          null,
        );
      }
      var Rl = n("prE9"),
        Hl = n("J7Kz"),
        Bl = n("JCQ5"),
        Vl = n("2Uk/"),
        jl = n("4UlK"),
        Yl = n("JcTI"),
        Fl = (function (t) {
          return (
            (t.INIT_WAIT = "INIT_WAIT"),
            (t.INIT_NOT_ATTACHED = "INIT_NOT_ATTACHED"),
            (t.INIT_RECONNECT = "INIT_RECONNECT"),
            (t.ECALL = "ECALL"),
            (t.OPR_USER = "OPR_USER"),
            (t.OPR_AUTO = "OPR_AUTO"),
            (t.SCON_PRIVATE = "SCON_PRIVATE"),
            (t.CARPLAY = "CARPLAY"),
            (t.MAIN = "MAIN"),
            (t.MAIN_TOGGLE = "MAIN_TOGGLE"),
            (t.CALLSTACK = "CALLSTACK"),
            (t.CALL = "CALL"),
            (t.TWO_CALLS_SAME_DEVICE = "TWO_CALLS_SAME_DEVICE"),
            (t.TWO_CALLS_DIFFERENT_DEVICES = "TWO_CALLS_DIFFERENT_DEVICES"),
            t
          );
        })({});
      class Gl {
        constructor(t, e, n, l, a, i, o) {
          ((this.phoneService = t),
            (this.phoneRoutingService = e),
            (this.globalRoutingService = n),
            (this.bluetoothService = l),
            (this.eCallOprService = a),
            (this.smartphoneIntegrationService = i),
            (this.contextEnum = Rt.s),
            (this.iconCategoryEnum = Rt.Z),
            (this.phoneDashboardScreenEnum = Fl),
            (this.asiRoute = Yl.a.Init),
            (this.asiDevice$ =
              this.smartphoneIntegrationService.currentActiveDevice$),
            (this.LockingContext = Rt.Bb),
            (this.destroy$$ = new ie.a(1)),
            (this.callstackOpen$$ = new Vn.a(!1)),
            (this.logger = o.getLogger(
              "phone.dashboard.PhoneDashboardTileComponent",
            )),
            (this.reconnectingPhoneName$ = this.createReconnectingPhoneName$()),
            (this.commonDeviceName$ = this.createCommonDeviceName$()),
            (this.activeScreen$ = this.createActiveScreen$()));
        }
        ngOnDestroy() {
          (this.destroy$$.next(), this.destroy$$.complete());
        }
        ngOnInit() {
          this.subscribeToActiveScreen();
        }
        subscribeToActiveScreen() {
          this.activeScreen$
            .pipe(Object(be.a)(this.destroy$$))
            .subscribe((t) => {
              t !== Fl.CALLSTACK &&
                this.callstackOpen$$.getValue() &&
                (this.logger.info(
                  "subscribeToActiveScreen: resetting callstack state",
                ),
                this.callstackOpen$$.next(!1));
            });
        }
        createActiveScreen$() {
          const t = this.phoneService.phones$.pipe(
              Object(re.a)((t) =>
                t.filter((t) => t.connectionState === pl.e.ATTACHED),
              ),
              Object(re.a)((t) => 2 === t.length),
              Object(ue.a)(),
            ),
            e = this.phoneService.callsWithoutEmergencies$.pipe(
              Object(re.a)((t) => t.map((t) => t.callState)),
              Object(ue.a)(
                (t, e) =>
                  !!t &&
                  !!e &&
                  t.length === e.length &&
                  t.every((t, n) => t === e[n]),
              ),
            ),
            n = this.phoneService.phones$.pipe(
              Object(re.a)((t) => t.focusDevice),
            );
          return Object(Ze.b)(
            this.phoneService.initialized$,
            n,
            this.reconnectingPhoneName$,
            this.eCallOprService.eCallOPRType$,
            this.smartphoneIntegrationService.appleCarplayActive$,
            t,
            e,
            this.commonDeviceName$,
            this.callstackOpen$$,
          ).pipe(
            Object(Rl.a)(50),
            Object(Rt.pd)(this.logger, "createActiveScreen$: input:"),
            Object(re.a)(([t, e, n, l, a, i, o, r, u]) => {
              if (l === jl.a.eCall) return Fl.ECALL;
              if (l === jl.a.oprAuto) return Fl.OPR_AUTO;
              if (l === jl.a.oprUser) return Fl.OPR_USER;
              if (a) return Fl.CARPLAY;
              if (!t) return Fl.INIT_WAIT;
              if (!e) return n ? Fl.INIT_RECONNECT : Fl.INIT_NOT_ATTACHED;
              if (1 === o.length) {
                if (o[0] !== pl.d.RINGINGINCOMING) return Fl.CALL;
              } else if (o.length > 1)
                return null != r
                  ? Fl.TWO_CALLS_SAME_DEVICE
                  : Fl.TWO_CALLS_DIFFERENT_DEVICES;
              return e.isConfidentialModeActive
                ? Fl.SCON_PRIVATE
                : u
                  ? Fl.CALLSTACK
                  : i
                    ? Fl.MAIN_TOGGLE
                    : Fl.MAIN;
            }),
            Object(ue.a)(),
            Object(Rt.pd)(this.logger, "createActiveScreen$"),
            Object(Rt.Kd)(),
            Object(be.a)(this.destroy$$),
          );
        }
        createReconnectingPhoneName$() {
          return this.bluetoothService.reconnects$.pipe(
            Object(re.a)((t) => {
              const e = t.find((t) =>
                t.serviceTypes.includes(Bl.b.TELEPHONYHFP),
              );
              return (e && e.deviceName) || "";
            }),
            Object(ue.a)(),
            Object(Rt.pd)(this.logger, "createReconnectingPhoneName$"),
            Object(Rt.Kd)(),
          );
        }
        createCommonDeviceName$() {
          return this.phoneService.callsWithoutEmergencies$.pipe(
            Object(re.a)((t) =>
              t.length > 0 &&
              t.every((e) => e.phoneDevice.id === t[0].phoneDevice.id)
                ? t[0].phoneDevice.name
                : null,
            ),
          );
        }
        openCallStack() {
          const t = this.callstackOpen$$.getValue();
          (this.logger.info("openCallStack: is already open:", t),
            t || this.callstackOpen$$.next(!0));
        }
        closeCallStack() {
          const t = !this.callstackOpen$$.getValue();
          (this.logger.info("closeCallStack: is already closed:", t),
            t || this.callstackOpen$$.next(!1));
        }
        togglePhones() {
          (this.logger.info("togglePhones:"), this.phoneService.togglePhones());
        }
        enterAsiPhoneContext() {
          (this.logger.info("enterAsiContext"),
            this.smartphoneIntegrationService.requestAsiUi(Ce.m.Phone));
        }
        enterAsiHomeContext() {
          (this.logger.info("enterAsiContext"),
            this.smartphoneIntegrationService.requestAsiUi(Ce.m.Current));
        }
        enterPhoneContext() {
          (this.logger.info("enterPhoneContext"),
            this.globalRoutingService.enterAppContext(pe.w));
        }
      }
      var Ul = l.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{display:block}.toggle-phones-button[_ngcontent-%COMP%]{width:100%;height:100%}",
          ],
        ],
        data: {},
      });
      function Wl(t) {
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
              "au3-phone-dashboard-status-text-screen",
              [["id", "DASHBOARD_PHONE_INIT_WAIT"]],
              null,
              [
                [null, "enterContextTitleTapped"],
                [null, "enterContextCoverTapped"],
              ],
              function (t, e, n) {
                var l = !0,
                  a = t.component;
                return (
                  "enterContextTitleTapped" === e &&
                    (l = !1 !== a.enterPhoneContext() && l),
                  "enterContextCoverTapped" === e &&
                    (l = !1 !== a.enterPhoneContext() && l),
                  l
                );
              },
              al,
              el,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              tl,
              [],
              { developerStatusText: [0, "developerStatusText"] },
              {
                enterContextTitleTapped: "enterContextTitleTapped",
                enterContextCoverTapped: "enterContextCoverTapped",
              },
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "DASHBOARD_PHONE_INIT_WAIT"),
              t(e, 2, 0, "Initialising. Please\nwait..."));
          },
          null,
        );
      }
      function ql(t) {
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
              "au3-phone-dashboard-status-text-screen",
              [["id", "DASHBOARD_PHONE_INIT_NOT_ATTACHED"]],
              null,
              [
                [null, "enterContextTitleTapped"],
                [null, "enterContextCoverTapped"],
              ],
              function (t, e, n) {
                var l = !0,
                  a = t.component;
                return (
                  "enterContextTitleTapped" === e &&
                    (l = !1 !== a.enterPhoneContext() && l),
                  "enterContextCoverTapped" === e &&
                    (l = !1 !== a.enterPhoneContext() && l),
                  l
                );
              },
              al,
              el,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              tl,
              [],
              { developerStatusText: [0, "developerStatusText"] },
              {
                enterContextTitleTapped: "enterContextTitleTapped",
                enterContextCoverTapped: "enterContextCoverTapped",
              },
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "DASHBOARD_PHONE_INIT_NOT_ATTACHED"),
              t(e, 2, 0, "Bitte Mobiltelefon\nmit MMI verbinden"));
          },
          null,
        );
      }
      function Ql(t) {
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
              "au3-phone-dashboard-status-text-screen",
              [["id", "DASHBOARD_PHONE_INIT_RECONNECT"]],
              null,
              [
                [null, "enterContextTitleTapped"],
                [null, "enterContextCoverTapped"],
              ],
              function (t, e, n) {
                var l = !0,
                  a = t.component;
                return (
                  "enterContextTitleTapped" === e &&
                    (l = !1 !== a.enterPhoneContext() && l),
                  "enterContextCoverTapped" === e &&
                    (l = !1 !== a.enterPhoneContext() && l),
                  l
                );
              },
              al,
              el,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              16384,
              null,
              0,
              h.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
            l.Qb(4, { name: 0 }),
            l.xb(
              5,
              49152,
              null,
              0,
              tl,
              [],
              { developerStatusText: [0, "developerStatusText"] },
              {
                enterContextTitleTapped: "enterContextTitleTapped",
                enterContextCoverTapped: "enterContextCoverTapped",
              },
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, "DASHBOARD_PHONE_INIT_RECONNECT");
            var a = t(
              e,
              4,
              0,
              l.Yb(e, 2, 0, l.Nb(e, 3).transform(n.reconnectingPhoneName$)),
            );
            (t(e, 2, 0, a),
              t(e, 5, 0, "Automatischer\nVerbindungsaufbau\nzu\n{{name}}"));
          },
          null,
        );
      }
      function Kl(t) {
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
              "au3-phone-dashboard-status-text-screen",
              [["id", "DASHBOARD_PHONE_ECALL_AKTIV"]],
              null,
              [
                [null, "enterContextTitleTapped"],
                [null, "enterContextCoverTapped"],
              ],
              function (t, e, n) {
                var l = !0,
                  a = t.component;
                return (
                  "enterContextTitleTapped" === e &&
                    (l = !1 !== a.enterPhoneContext() && l),
                  "enterContextCoverTapped" === e &&
                    (l = !1 !== a.enterPhoneContext() && l),
                  l
                );
              },
              al,
              el,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              tl,
              [],
              { developerStatusText: [0, "developerStatusText"] },
              {
                enterContextTitleTapped: "enterContextTitleTapped",
                enterContextCoverTapped: "enterContextCoverTapped",
              },
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "DASHBOARD_PHONE_ECALL_AKTIV"),
              t(e, 2, 0, "Emergency Call aktiv"));
          },
          null,
        );
      }
      function Zl(t) {
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
              "au3-phone-dashboard-status-text-screen",
              [["id", "DASHBOARD_PHONE_OPR_AKTIV"]],
              null,
              [
                [null, "enterContextTitleTapped"],
                [null, "enterContextCoverTapped"],
              ],
              function (t, e, n) {
                var l = !0,
                  a = t.component;
                return (
                  "enterContextTitleTapped" === e &&
                    (l = !1 !== a.enterPhoneContext() && l),
                  "enterContextCoverTapped" === e &&
                    (l = !1 !== a.enterPhoneContext() && l),
                  l
                );
              },
              al,
              el,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              tl,
              [],
              { developerStatusText: [0, "developerStatusText"] },
              {
                enterContextTitleTapped: "enterContextTitleTapped",
                enterContextCoverTapped: "enterContextCoverTapped",
              },
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "DASHBOARD_PHONE_OPR_AKTIV"),
              t(e, 2, 0, "Online Pannenruf aktiv"));
          },
          null,
        );
      }
      function Xl(t) {
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
              "au3-phone-dashboard-status-text-screen",
              [["id", "DASHBOARD_PHONE_USM_AKTIV"]],
              null,
              [
                [null, "enterContextTitleTapped"],
                [null, "enterContextCoverTapped"],
              ],
              function (t, e, n) {
                var l = !0,
                  a = t.component;
                return (
                  "enterContextTitleTapped" === e &&
                    (l = !1 !== a.enterPhoneContext() && l),
                  "enterContextCoverTapped" === e &&
                    (l = !1 !== a.enterPhoneContext() && l),
                  l
                );
              },
              al,
              el,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              tl,
              [],
              { developerStatusText: [0, "developerStatusText"] },
              {
                enterContextTitleTapped: "enterContextTitleTapped",
                enterContextCoverTapped: "enterContextCoverTapped",
              },
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "DASHBOARD_PHONE_USM_AKTIV"),
              t(e, 2, 0, "Audi Schadenservice aktiv"));
          },
          null,
        );
      }
      function Jl(t) {
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
              "au3-phone-dashboard-status-text-screen",
              [["id", "DASHBOARD_PHONE_SCON_PRIVATMODUS"]],
              null,
              [
                [null, "enterContextTitleTapped"],
                [null, "enterContextCoverTapped"],
              ],
              function (t, e, n) {
                var l = !0,
                  a = t.component;
                return (
                  "enterContextTitleTapped" === e &&
                    (l = !1 !== a.enterPhoneContext() && l),
                  "enterContextCoverTapped" === e &&
                    (l = !1 !== a.enterPhoneContext() && l),
                  l
                );
              },
              al,
              el,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              tl,
              [],
              { developerStatusText: [0, "developerStatusText"] },
              {
                enterContextTitleTapped: "enterContextTitleTapped",
                enterContextCoverTapped: "enterContextCoverTapped",
              },
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "DASHBOARD_PHONE_SCON_PRIVATMODUS"),
              t(e, 2, 0, "Privatmodus aktiv"));
          },
          null,
        );
      }
      function ta(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              14,
              "au3-phone-dashboard-status-text-screen",
              [["id", "DASHBOARD_PHONE_CARPLAY"]],
              null,
              [
                [null, "enterContextTitleTapped"],
                [null, "enterContextCoverTapped"],
              ],
              function (t, e, n) {
                var l = !0,
                  a = t.component;
                return (
                  "enterContextTitleTapped" === e &&
                    (l = !1 !== a.enterAsiPhoneContext() && l),
                  "enterContextCoverTapped" === e &&
                    (l = !1 !== a.enterAsiHomeContext() && l),
                  l
                );
              },
              al,
              el,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              tl,
              [],
              {
                secondaryTitleNonI18nValue: [0, "secondaryTitleNonI18nValue"],
                iconUrl: [1, "iconUrl"],
              },
              {
                enterContextTitleTapped: "enterContextTitleTapped",
                enterContextCoverTapped: "enterContextCoverTapped",
              },
            ),
            l.Pb(131072, f.b, [l.h]),
            (t()(),
            l.yb(
              4,
              0,
              null,
              0,
              10,
              "au3-dashboard-operation-panel",
              [],
              null,
              null,
              null,
              st,
              ut,
            )),
            l.xb(5, 49152, null, 0, rt.a, [], null, null),
            (t()(),
            l.yb(
              6,
              0,
              null,
              0,
              8,
              "au3-dashboard-operation-panel-item",
              [["icon", "E00A_phone.webp"]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l = !1 !== t.component.enterAsiPhoneContext() && l),
                  l
                );
              },
              y,
              C,
            )),
            l.xb(7, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              8,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              9,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              11,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              12,
              49152,
              null,
              0,
              x.a,
              [],
              { icon: [0, "icon"], iconCategory: [1, "iconCategory"] },
              null,
            ),
            l.xb(
              13,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              14,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n,
              a = e.component;
            (t(e, 1, 0, "DASHBOARD_PHONE_CARPLAY"),
              t(
                e,
                2,
                0,
                null == (n = l.Yb(e, 2, 0, l.Nb(e, 3).transform(a.asiDevice$)))
                  ? null
                  : n.name,
                "/decorators/W523_Homescreen/apple_carplay.webp",
              ),
              t(e, 9, 0),
              t(e, 11, 0),
              t(e, 12, 0, "E00A_phone.webp", a.iconCategoryEnum.Touch));
          },
          function (t, e) {
            t(e, 6, 0, l.Nb(e, 11).markerClassEnabled);
          },
        );
      }
      function ea(t) {
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
              "au3-phone-dashboard-status-text-screen",
              [["id", "DASHBOARD_PHONE_TWO_CALLS_SAME_DEVICE"]],
              null,
              [
                [null, "enterContextTitleTapped"],
                [null, "enterContextCoverTapped"],
              ],
              function (t, e, n) {
                var l = !0,
                  a = t.component;
                return (
                  "enterContextTitleTapped" === e &&
                    (l = !1 !== a.enterPhoneContext() && l),
                  "enterContextCoverTapped" === e &&
                    (l = !1 !== a.enterPhoneContext() && l),
                  l
                );
              },
              al,
              el,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              tl,
              [],
              {
                developerStatusText: [0, "developerStatusText"],
                secondaryTitleDeveloperText: [1, "secondaryTitleDeveloperText"],
                secondaryTitleInterpolateParams: [
                  2,
                  "secondaryTitleInterpolateParams",
                ],
              },
              {
                enterContextTitleTapped: "enterContextTitleTapped",
                enterContextCoverTapped: "enterContextCoverTapped",
              },
            ),
            l.Pb(131072, f.b, [l.h]),
            l.Qb(4, { device: 0 }),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, "DASHBOARD_PHONE_TWO_CALLS_SAME_DEVICE");
            var a = t(
              e,
              4,
              0,
              l.Yb(e, 2, 2, l.Nb(e, 3).transform(n.commonDeviceName$)),
            );
            t(e, 2, 0, "Zum aktiven\nTelefonat", "Anruf auf {{device}}", a);
          },
          null,
        );
      }
      function na(t) {
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
              "au3-phone-dashboard-status-text-screen",
              [["id", "DASHBOARD_PHONE_TWO_CALLS_DIFFERENT_DEVICES"]],
              null,
              [
                [null, "enterContextTitleTapped"],
                [null, "enterContextCoverTapped"],
              ],
              function (t, e, n) {
                var l = !0,
                  a = t.component;
                return (
                  "enterContextTitleTapped" === e &&
                    (l = !1 !== a.enterPhoneContext() && l),
                  "enterContextCoverTapped" === e &&
                    (l = !1 !== a.enterPhoneContext() && l),
                  l
                );
              },
              al,
              el,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              tl,
              [],
              {
                developerStatusText: [0, "developerStatusText"],
                secondaryTitleDeveloperText: [1, "secondaryTitleDeveloperText"],
              },
              {
                enterContextTitleTapped: "enterContextTitleTapped",
                enterContextCoverTapped: "enterContextCoverTapped",
              },
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "DASHBOARD_PHONE_TWO_CALLS_DIFFERENT_DEVICES"),
              t(
                e,
                2,
                0,
                "Zum aktiven\nTelefonat",
                "Anruf auf beiden Telefonen",
              ));
          },
          null,
        );
      }
      function la(t) {
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
              "au3-phone-dashboard-main-screen",
              [["id", "DASHBOARD_PHONE_MAIN"]],
              null,
              [
                [null, "openCallstackTapped"],
                [null, "mainButtonTapped"],
              ],
              function (t, e, n) {
                var l = !0,
                  a = t.component;
                return (
                  "openCallstackTapped" === e &&
                    (l = !1 !== a.openCallStack() && l),
                  "mainButtonTapped" === e &&
                    (l = !1 !== a.phoneRoutingService.enterContext() && l),
                  l
                );
              },
              dl,
              cl,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              sl,
              [rl.c],
              { showToggleButton: [0, "showToggleButton"] },
              {
                openCallstackTapped: "openCallstackTapped",
                mainButtonTapped: "mainButtonTapped",
              },
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "DASHBOARD_PHONE_MAIN"), t(e, 2, 0, !1));
          },
          null,
        );
      }
      function aa(t) {
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
              "au3-phone-dashboard-main-screen",
              [["id", "DASHBOARD_PHONE_MAIN_TOGGLE"]],
              null,
              [
                [null, "openCallstackTapped"],
                [null, "mainButtonTapped"],
              ],
              function (t, e, n) {
                var l = !0,
                  a = t.component;
                return (
                  "openCallstackTapped" === e &&
                    (l = !1 !== a.openCallStack() && l),
                  "mainButtonTapped" === e &&
                    (l = !1 !== a.togglePhones() && l),
                  l
                );
              },
              dl,
              cl,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              sl,
              [rl.c],
              { showToggleButton: [0, "showToggleButton"] },
              {
                openCallstackTapped: "openCallstackTapped",
                mainButtonTapped: "mainButtonTapped",
              },
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "DASHBOARD_PHONE_MAIN_TOGGLE"), t(e, 2, 0, !0));
          },
          null,
        );
      }
      function ia(t) {
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
              "au3-phone-dashboard-callstack-screen",
              [["id", "DASHBOARD_PHONE_CALLSTACK"]],
              null,
              [[null, "closeCallstackTapped"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "closeCallstackTapped" === e &&
                    (l = !1 !== t.component.closeCallStack() && l),
                  l
                );
              },
              yl,
              fl,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, ml, [rl.c, gl.a, o.a], null, {
              closeCallstackTapped: "closeCallstackTapped",
            }),
          ],
          function (t, e) {
            t(e, 1, 0, "DASHBOARD_PHONE_CALLSTACK");
          },
          null,
        );
      }
      function oa(t) {
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
              "au3-phone-dashboard-call-screen",
              [["id", "DASHBOARD_PHONE_CALL"]],
              null,
              null,
              null,
              $l,
              Nl,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, Sl, [rl.c, Pl.b, Ol.a, o.a], null, null),
          ],
          function (t, e) {
            t(e, 1, 0, "DASHBOARD_PHONE_CALL");
          },
          null,
        );
      }
      function ra(t) {
        return l.ac(
          0,
          [
            (t()(), l.hb(16777216, null, null, 1, null, Wl)),
            l.xb(
              1,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, ql)),
            l.xb(
              3,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Ql)),
            l.xb(
              5,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Kl)),
            l.xb(
              7,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Zl)),
            l.xb(
              9,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Xl)),
            l.xb(
              11,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Jl)),
            l.xb(
              13,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, ta)),
            l.xb(
              15,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, ea)),
            l.xb(
              17,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, na)),
            l.xb(
              19,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, la)),
            l.xb(
              21,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, aa)),
            l.xb(
              23,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, ia)),
            l.xb(
              25,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, oa)),
            l.xb(
              27,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(0, null, null, 0)),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, n.phoneDashboardScreenEnum.INIT_WAIT),
              t(e, 3, 0, n.phoneDashboardScreenEnum.INIT_NOT_ATTACHED),
              t(e, 5, 0, n.phoneDashboardScreenEnum.INIT_RECONNECT),
              t(e, 7, 0, n.phoneDashboardScreenEnum.ECALL),
              t(e, 9, 0, n.phoneDashboardScreenEnum.OPR_USER),
              t(e, 11, 0, n.phoneDashboardScreenEnum.OPR_AUTO),
              t(e, 13, 0, n.phoneDashboardScreenEnum.SCON_PRIVATE),
              t(e, 15, 0, n.phoneDashboardScreenEnum.CARPLAY),
              t(e, 17, 0, n.phoneDashboardScreenEnum.TWO_CALLS_SAME_DEVICE),
              t(
                e,
                19,
                0,
                n.phoneDashboardScreenEnum.TWO_CALLS_DIFFERENT_DEVICES,
              ),
              t(e, 21, 0, n.phoneDashboardScreenEnum.MAIN),
              t(e, 23, 0, n.phoneDashboardScreenEnum.MAIN_TOGGLE),
              t(e, 25, 0, n.phoneDashboardScreenEnum.CALLSTACK),
              t(e, 27, 0, n.phoneDashboardScreenEnum.CALL));
          },
          null,
        );
      }
      function ua(t) {
        return l.ac(
          2,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              7,
              "au3-dashboard-tile",
              [["id", "Phone"]],
              null,
              null,
              null,
              ne,
              Ft,
            )),
            l.xb(
              1,
              16384,
              null,
              0,
              f.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
            l.xb(
              3,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.Sb(1024, null, ot.a, le.b, []),
            l.xb(
              5,
              16384,
              null,
              0,
              le.a,
              [ot.a],
              { context: [0, "context"] },
              null,
            ),
            l.xb(
              6,
              49152,
              null,
              0,
              Yt,
              [Bt.a, jt.a, Vt.a, [2, Ht.a]],
              {
                context: [0, "context"],
                title: [1, "title"],
                iconName: [2, "iconName"],
                decoratorIcon: [3, "decoratorIcon"],
                content: [4, "content"],
              },
              null,
            ),
            (t()(), l.hb(0, [["content", 2]], null, 0, null, ra)),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, l.Yb(e, 1, 0, l.Nb(e, 2).transform(n.activeScreen$))),
              t(e, 3, 0, "Phone"),
              t(e, 5, 0, n.LockingContext.PHONE),
              t(
                e,
                6,
                0,
                n.contextEnum.Phone,
                "PHONE",
                "E00A_phone.webp",
                "/decorators/W523_Homescreen/phone.webp",
                l.Nb(e, 7),
              ));
          },
          null,
        );
      }
      var sa = n("Ebpi"),
        ca = n("jAJf"),
        ba = n("F/DH"),
        da = n("bx3e"),
        pa = n("3ykg"),
        ha = n("Q0Gg"),
        ma = (function (t) {
          return (
            (t.Initialize = "Wird geladen"),
            (t.TemporaryUnavailable = "Tempor\xe4r nicht funktional"),
            (t.NoValue = "Kein Messwert"),
            (t.Exzellent_CHINA_ONLY = "Exzellent"),
            (t.Good_CHINA_ONLY = "Gut"),
            (t.LightPollution_CHINA_ONLY = "Leicht verschmutzt"),
            (t.ModeratePollution_CHINA_ONLY = "Moderat verschmutzt"),
            (t.StrongPollution_CHINA_ONLY = "Stark verschmutzt"),
            (t.VeryStrongPollution_CHINA_ONLY = "Sehr stark verschmutzt"),
            (t.NoAqiValue = "Kein AQI-Wert verf\xfcgbar"),
            t
          );
        })({});
      class ga extends ca.a {
        constructor(t, e, n, l, a, i, o, r, u) {
          (super(t, e, n, l, a, i, o, r),
            (this.routingService = u),
            (this.Context = Rt.s),
            (this.iconCategory = Rt.Z),
            (this.moreMenuButton = sa.a),
            (this.airQualityDashboardOutsideText = ma),
            (this.backgroundIcon =
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_car.webp"),
            (this.insideParticleIcons = [
              "",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_inside_1.webp",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_inside_2.webp",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_inside_3.webp",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_inside_4.webp",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_inside_5.webp",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_inside_6.webp",
            ]),
            (this.insideParticleIconsGen1 = [
              "",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_inside_1.webp",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_inside_1.webp",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_inside_2.webp",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_inside_2.webp",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_inside_3.webp",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_inside_3.webp",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_inside_4.webp",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_inside_4.webp",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_inside_5.webp",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_inside_5.webp",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_inside_6.webp",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_inside_6.webp",
            ]),
            (this.outsideParticleIcons = [
              "",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_outside_1.webp",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_outside_2.webp",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_outside_3.webp",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_outside_4.webp",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_outside_5.webp",
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_aqi_outside_6.webp",
            ]),
            (this.cleanAir$ = this.climaService.cleanAir$.pipe(
              Object(pa.c)(ha.a.Climate_CleanAir),
            )),
            (this.ionisator$ = this.climaService.ionisator$.pipe(
              Object(pa.c)(ha.a.Climate_Ionisator),
            )),
            (this.aromatisation$ = this.climaService.aromatisation$.pipe(
              Object(pa.c)(ha.a.Climate_Aromatisation),
            )),
            (this.insideParticleStyle$ = this.getParticleColor(
              this.aQColorPLQ2Inside$,
            )),
            (this.outsideParticleStyle$ = this.getParticleColor(
              this.aQColorPLQ2Outside$,
            )),
            (this.destroy$$ = new ie.a(1)));
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        getParticleColor(t) {
          return t.pipe(
            Object(re.a)((t) => {
              if (!t) return {};
              const e = Object(ba.f)({
                r: 255 * t[0],
                g: 255 * t[1],
                b: 255 * t[2],
              });
              return ((e.filter = e.filter + " brightness(300%)"), e);
            }),
          );
        }
        getIconfileName(t) {
          switch (t) {
            case sa.a.Ionisator:
              return "E912_ionisierung_on.webp";
            case sa.a.SteeringWheelheater:
              return "E910_lenkradheizung_on.webp";
            case sa.a.Aromatisation:
              return "E901_beduftung_on.webp";
            case sa.a.Rear:
              return "E917_rear_on.webp";
            case sa.a.Sync:
              return "E919_sync_on.webp";
            case sa.a.OnOff:
              return "E948_label_on.webp";
            case sa.a.Max:
              return "E91C_AC_max.webp";
            case sa.a.CleanAir:
              return "E947_air_quality_symbol.webp";
            default:
              return;
          }
        }
        updateAromaSwitchControl(t, e) {
          (this.climaService.updateSwitchControlObject(t, e),
            e &&
              this.climaService.aromaHandler.checkLowUpdate(
                this.destroy$$.asObservable(),
              ));
        }
        goToAqi() {
          this.systemConfigService.isDualDisplay()
            ? this.routingService.goTo(da.a.Main.children.Climate)
            : this.routingService.goTo(
                da.a.Main.children.Climate.children.AirQuality,
              );
        }
      }
      var fa = n("feZC"),
        xa = n("E4U0"),
        Ca = n("8yWk"),
        _a = n("g+js"),
        va = l.wb({
          encapsulation: 0,
          styles: [
            [
              '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.aqi-content[_ngcontent-%COMP%]{position:relative;height:100%;width:100%;max-width:100%}.decorator[_ngcontent-%COMP%]{top:34px;height:calc(100% - 34px)}.decorator[_ngcontent-%COMP%], .decorator__icon[_ngcontent-%COMP%]{position:absolute;left:0;width:100%}.decorator__icon[_ngcontent-%COMP%]{top:0;height:100%}.outside[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:100%;height:40px;display:flex;align-items:center;justify-content:stretch}.outside__icon[_ngcontent-%COMP%]{flex-grow:0;margin:0 0 0 20px}.outside__text[_ngcontent-%COMP%]{flex-grow:1;margin:0 20px;text-align:center}.inside-text[_ngcontent-%COMP%], .outside__text[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:30px}.inside-text[_ngcontent-%COMP%]{position:absolute;left:20px;right:20px;bottom:18px;max-width:100%;text-align:right}.led[_ngcontent-%COMP%]:after{content:"";position:absolute;top:4px;left:5px;right:5px;height:5px;background-color:#5e5e5e;border-color:#313131 #3c3c3c #7e7e7e}.led--active[_ngcontent-%COMP%]:after, .led[_ngcontent-%COMP%]:after{border-style:solid;border-width:1px}.led--active[_ngcontent-%COMP%]:after{background-color:red;border-color:#313131 #652525 #ff8080}',
            ],
          ],
          data: {},
        });
      function ya(t) {
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
              [["class", "decorator__icon"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              a.b,
              a.a,
            )),
            l.xb(
              1,
              278528,
              null,
              0,
              f.n,
              [l.l, l.t, l.D],
              { ngStyle: [0, "ngStyle"] },
              null,
            ),
            l.xb(
              2,
              4243456,
              null,
              0,
              i.b,
              [o.a, l.z],
              { fileName: [0, "fileName"] },
              null,
            ),
          ],
          function (t, e) {
            (t(
              e,
              1,
              0,
              null == e.parent.parent.context.mib3Let
                ? null
                : e.parent.parent.context.mib3Let.insideParticleStyle,
            ),
              t(e, 2, 0, e.context.ngIf));
          },
          function (t, e) {
            t(e, 0, 0, l.Nb(e, 2).iconComponentHidden);
          },
        );
      }
      function Pa(t) {
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
              [["class", "decorator__icon"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              a.b,
              a.a,
            )),
            l.xb(
              1,
              278528,
              null,
              0,
              f.n,
              [l.l, l.t, l.D],
              { ngStyle: [0, "ngStyle"] },
              null,
            ),
            l.xb(
              2,
              4243456,
              null,
              0,
              i.b,
              [o.a, l.z],
              { fileName: [0, "fileName"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(
              e,
              1,
              0,
              null == e.parent.parent.context.mib3Let
                ? null
                : e.parent.parent.context.mib3Let.outsideParticleStyle,
            ),
              t(
                e,
                2,
                0,
                n.outsideParticleIcons[
                  null == e.parent.parent.context.mib3Let
                    ? null
                    : e.parent.parent.context.mib3Let.outsideValue
                ],
              ));
          },
          function (t, e) {
            t(e, 0, 0, l.Nb(e, 2).iconComponentHidden);
          },
        );
      }
      function Oa(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "outside__icon"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              a.b,
              a.a,
            )),
            l.xb(
              1,
              4243456,
              null,
              0,
              i.b,
              [o.a, l.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, n.aqiOnlineIcon, n.iconCategory.List);
          },
          function (t, e) {
            t(e, 0, 0, l.Nb(e, 1).iconComponentHidden);
          },
        );
      }
      function Ta(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              7,
              "div",
              [["class", "outside"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), l.hb(16777216, null, null, 1, null, Oa)),
            l.xb(
              2,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(),
            l.yb(
              3,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [["class", "outside__text"]],
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
            l.xb(
              4,
              278528,
              null,
              0,
              f.n,
              [l.l, l.t, l.D],
              { ngStyle: [0, "ngStyle"] },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
            l.xb(
              6,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            l.xb(
              7,
              245760,
              null,
              0,
              b.a,
              [[6, u.a], d.a, l.h, l.l, l.D, [2, p.a], [2, c.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
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
              null == e.parent.parent.context.mib3Let
                ? null
                : e.parent.parent.context.mib3Let.useOutsideOnlineValue,
            ),
              t(
                e,
                4,
                0,
                l.Yb(e, 4, 0, l.Nb(e, 5).transform(n.styleTextOutside$)),
              ),
              t(
                e,
                6,
                0,
                null == e.parent.parent.context.mib3Let
                  ? null
                  : e.parent.parent.context.mib3Let.outsideText,
                n.airQualityDashboardOutsideText,
              ),
              t(
                e,
                7,
                0,
                null == e.parent.parent.context.mib3Let ||
                  !e.parent.parent.context.mib3Let.useOutsideOnlineValue ||
                  (null != e.parent.parent.context.mib3Let &&
                    e.parent.parent.context.mib3Let.aqiOnlineValue &&
                    (null == e.parent.parent.context.mib3Let
                      ? null
                      : e.parent.parent.context.mib3Let.aqiOnlineValue
                          .dataSourceState) !==
                      n.valueObjectDataSourceStateEnum.NoData)
                  ? null == e.parent.parent.context.mib3Let
                    ? null
                    : e.parent.parent.context.mib3Let.outsideText
                  : n.airQualityDashboardOutsideText.NoAqiValue,
                null == e.parent.parent.context.mib3Let
                  ? null
                  : e.parent.parent.context.mib3Let.outsideText,
                1,
              ));
          },
          function (t, e) {
            t(
              e,
              3,
              0,
              l.Nb(e, 7).backgroundColor,
              l.Nb(e, 7).fixedNumberOfLines,
              l.Nb(e, 7).mayContainLatinCharsForArabic,
              l.Nb(e, 7).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Ma(t) {
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
              "au3-i18n-label",
              [["class", "inside-text"]],
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
            l.xb(
              1,
              278528,
              null,
              0,
              f.n,
              [l.l, l.t, l.D],
              { ngStyle: [0, "ngStyle"] },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
            l.xb(
              3,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            l.xb(
              4,
              245760,
              null,
              0,
              b.a,
              [[6, u.a], d.a, l.h, l.l, l.D, [2, p.a], [2, c.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
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
              l.Yb(e, 1, 0, l.Nb(e, 2).transform(n.styleTextInside$)),
            ),
              t(
                e,
                3,
                0,
                null == e.parent.parent.context.mib3Let
                  ? null
                  : e.parent.parent.context.mib3Let.insideText,
                n.airQualityTextEnum,
              ),
              t(
                e,
                4,
                0,
                null == e.parent.parent.context.mib3Let
                  ? null
                  : e.parent.parent.context.mib3Let.insideText,
                null == e.parent.parent.context.mib3Let
                  ? null
                  : e.parent.parent.context.mib3Let.insideText,
                1,
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              l.Nb(e, 4).backgroundColor,
              l.Nb(e, 4).fixedNumberOfLines,
              l.Nb(e, 4).mayContainLatinCharsForArabic,
              l.Nb(e, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Sa(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-dashboard-operation-panel-item",
              [
                ["class", "button led"],
                ["ttIgnore", ""],
              ],
              [
                [2, "led--active", null],
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l =
                      !1 !==
                        t.component.climaService.updateSwitchControlObject(
                          null == t.parent.context.mib3Let ||
                            null == t.parent.context.mib3Let.cleanAir
                            ? null
                            : t.parent.context.mib3Let.cleanAir
                                .switchControlObject,
                          !(
                            null != t.parent.context.mib3Let &&
                            null != t.parent.context.mib3Let.cleanAir &&
                            t.parent.context.mib3Let.cleanAir.value
                          ),
                        ) && l),
                  l
                );
              },
              y,
              C,
            )),
            l.xb(1, 16384, null, 0, c.a, [], null, null),
            l.xb(2, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              4,
              147456,
              null,
              0,
              M.a,
              [S.a, l.h, o.a, [3, M.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              7,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              8,
              49152,
              null,
              0,
              x.a,
              [],
              { icon: [0, "icon"], iconCategory: [1, "iconCategory"] },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n = e.component,
              l =
                null == e.parent.context.mib3Let ||
                null == e.parent.context.mib3Let.cleanAir
                  ? null
                  : e.parent.context.mib3Let.cleanAir.disabled,
              a =
                null == e.parent.context.mib3Let ||
                null == e.parent.context.mib3Let.cleanAir ||
                null == e.parent.context.mib3Let.cleanAir.restrictionReason ||
                null == e.parent.context.mib3Let.cleanAir.restrictionReason.name
                  ? null
                  : e.parent.context.mib3Let.cleanAir.restrictionReason.name.toString();
            (t(e, 4, 0, l, a),
              t(e, 5, 0),
              t(e, 7, 0),
              t(
                e,
                8,
                0,
                n.getIconfileName(n.moreMenuButton.CleanAir),
                n.iconCategory.ClimateLowerDisplay,
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              null == e.parent.context.mib3Let ||
                null == e.parent.context.mib3Let.cleanAir
                ? null
                : e.parent.context.mib3Let.cleanAir.value,
              l.Nb(e, 4).combinedDisabled,
              l.Nb(e, 4).useBrighterIcon,
              l.Nb(e, 7).markerClassEnabled,
            );
          },
        );
      }
      function Na(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-dashboard-operation-panel-item",
              [
                ["class", "button led"],
                ["ttIgnore", ""],
              ],
              [
                [2, "led--active", null],
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l =
                      !1 !==
                        t.component.climaService.updateSwitchControlObject(
                          null == t.parent.context.mib3Let ||
                            null == t.parent.context.mib3Let.ionisator
                            ? null
                            : t.parent.context.mib3Let.ionisator
                                .switchControlObject,
                          !(
                            null != t.parent.context.mib3Let &&
                            null != t.parent.context.mib3Let.ionisator &&
                            t.parent.context.mib3Let.ionisator.on
                          ),
                        ) && l),
                  l
                );
              },
              y,
              C,
            )),
            l.xb(1, 16384, null, 0, c.a, [], null, null),
            l.xb(2, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              4,
              147456,
              null,
              0,
              M.a,
              [S.a, l.h, o.a, [3, M.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              7,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              8,
              49152,
              null,
              0,
              x.a,
              [],
              { icon: [0, "icon"], iconCategory: [1, "iconCategory"] },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n = e.component,
              l = !(
                null != e.parent.context.mib3Let &&
                null != e.parent.context.mib3Let.ionisator &&
                e.parent.context.mib3Let.ionisator.usable
              ),
              a =
                null == e.parent.context.mib3Let ||
                null == e.parent.context.mib3Let.ionisator ||
                null == e.parent.context.mib3Let.ionisator.restrictionReason ||
                null ==
                  e.parent.context.mib3Let.ionisator.restrictionReason.name
                  ? null
                  : e.parent.context.mib3Let.ionisator.restrictionReason.name.toString();
            (t(e, 4, 0, l, a),
              t(e, 5, 0),
              t(e, 7, 0),
              t(
                e,
                8,
                0,
                n.getIconfileName(n.moreMenuButton.Ionisator),
                n.iconCategory.ClimateLowerDisplay,
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              null == e.parent.context.mib3Let ||
                null == e.parent.context.mib3Let.ionisator
                ? null
                : e.parent.context.mib3Let.ionisator.on,
              l.Nb(e, 4).combinedDisabled,
              l.Nb(e, 4).useBrighterIcon,
              l.Nb(e, 7).markerClassEnabled,
            );
          },
        );
      }
      function La(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-dashboard-operation-panel-item",
              [
                ["class", "button led"],
                ["ttIgnore", ""],
              ],
              [
                [2, "led--active", null],
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l =
                      !1 !==
                        t.component.updateAromaSwitchControl(
                          null == t.parent.context.mib3Let ||
                            null == t.parent.context.mib3Let.aromatisation
                            ? null
                            : t.parent.context.mib3Let.aromatisation
                                .switchControlObject,
                          !(
                            null != t.parent.context.mib3Let &&
                            null != t.parent.context.mib3Let.aromatisation &&
                            t.parent.context.mib3Let.aromatisation.value
                          ),
                        ) && l),
                  l
                );
              },
              y,
              C,
            )),
            l.xb(1, 16384, null, 0, c.a, [], null, null),
            l.xb(2, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              4,
              147456,
              null,
              0,
              M.a,
              [S.a, l.h, o.a, [3, M.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              7,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              8,
              49152,
              null,
              0,
              x.a,
              [],
              { icon: [0, "icon"], iconCategory: [1, "iconCategory"] },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n = e.component,
              l =
                null == e.parent.context.mib3Let ||
                null == e.parent.context.mib3Let.aromatisation
                  ? null
                  : e.parent.context.mib3Let.aromatisation.disabled,
              a =
                null == e.parent.context.mib3Let ||
                null == e.parent.context.mib3Let.aromatisation ||
                null ==
                  e.parent.context.mib3Let.aromatisation.restrictionReason ||
                null ==
                  e.parent.context.mib3Let.aromatisation.restrictionReason.name
                  ? null
                  : e.parent.context.mib3Let.aromatisation.restrictionReason.name.toString();
            (t(e, 4, 0, l, a),
              t(e, 5, 0),
              t(e, 7, 0),
              t(
                e,
                8,
                0,
                n.getIconfileName(n.moreMenuButton.Aromatisation),
                n.iconCategory.ClimateLowerDisplay,
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              null == e.parent.context.mib3Let ||
                null == e.parent.context.mib3Let.aromatisation
                ? null
                : e.parent.context.mib3Let.aromatisation.value,
              l.Nb(e, 4).combinedDisabled,
              l.Nb(e, 4).useBrighterIcon,
              l.Nb(e, 7).markerClassEnabled,
            );
          },
        );
      }
      function Ia(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              7,
              "au3-dashboard-operation-panel",
              [],
              null,
              null,
              null,
              st,
              ut,
            )),
            l.xb(1, 49152, null, 0, rt.a, [], null, null),
            (t()(), l.hb(16777216, null, 0, 1, null, Sa)),
            l.xb(
              3,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), l.hb(16777216, null, 0, 1, null, Na)),
            l.xb(
              5,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), l.hb(16777216, null, 0, 1, null, La)),
            l.xb(
              7,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            (t(
              e,
              3,
              0,
              null == e.context.mib3Let || null == e.context.mib3Let.cleanAir
                ? null
                : e.context.mib3Let.cleanAir.available,
            ),
              t(
                e,
                5,
                0,
                null == e.context.mib3Let || null == e.context.mib3Let.ionisator
                  ? null
                  : e.context.mib3Let.ionisator.available,
              ),
              t(
                e,
                7,
                0,
                !(
                  null != e.context.mib3Let &&
                  null != e.context.mib3Let.cleanAir &&
                  e.context.mib3Let.cleanAir.available &&
                  null != e.context.mib3Let &&
                  null != e.context.mib3Let.ionisator &&
                  e.context.mib3Let.ionisator.available
                ) &&
                  (null == e.context.mib3Let ||
                  null == e.context.mib3Let.aromatisation
                    ? null
                    : e.context.mib3Let.aromatisation.available),
              ));
          },
          null,
        );
      }
      function Da(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-dashboard-title",
              [],
              null,
              [[null, "primaryTitleTapped"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "primaryTitleTapped" === e &&
                    (l = !1 !== t.component.goToAqi() && l),
                  l
                );
              },
              Z.b,
              Z.a,
            )),
            l.xb(
              1,
              49152,
              null,
              0,
              X.a,
              [],
              {
                primaryTitleDeveloperText: [0, "primaryTitleDeveloperText"],
                secondaryTitleNonI18nValue: [1, "secondaryTitleNonI18nValue"],
                iconName: [2, "iconName"],
              },
              { primaryTitleTapped: "primaryTitleTapped" },
            ),
            (t()(),
            l.yb(
              2,
              0,
              null,
              null,
              11,
              "div",
              [["class", "aqi-content"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            l.yb(
              3,
              0,
              null,
              null,
              6,
              "div",
              [["class", "decorator"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            l.yb(
              4,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "decorator__icon"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              a.b,
              a.a,
            )),
            l.xb(
              5,
              4243456,
              null,
              0,
              i.b,
              [o.a, l.z],
              { fileName: [0, "fileName"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, ya)),
            l.xb(
              7,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Pa)),
            l.xb(
              9,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Ta)),
            l.xb(
              11,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Ma)),
            l.xb(
              13,
              16384,
              null,
              0,
              f.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 5, null, Ia)),
            l.xb(
              15,
              16384,
              null,
              0,
              $t.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
            l.Pb(131072, f.b, [l.h]),
            l.Pb(131072, f.b, [l.h]),
            l.Qb(19, { cleanAir: 0, ionisator: 1, aromatisation: 2 }),
            (t()(), l.hb(0, null, null, 0)),
          ],
          function (t, e) {
            var n = e.component;
            (t(
              e,
              1,
              0,
              "Luftqualit\xe4t",
              n.isChina &&
                null != e.parent.context.mib3Let &&
                e.parent.context.mib3Let.useOutsideOnlineValue &&
                null != e.parent.context.mib3Let &&
                e.parent.context.mib3Let.aqiOnlineValue &&
                (null == e.parent.context.mib3Let
                  ? null
                  : e.parent.context.mib3Let.aqiOnlineValue.dataSourceState) !==
                  n.valueObjectDataSourceStateEnum.NoData
                ? null == e.parent.context.mib3Let ||
                  null == e.parent.context.mib3Let.aqiOnlineValue
                  ? null
                  : e.parent.context.mib3Let.aqiOnlineValue.city
                : void 0,
              "E680_airquality_index.webp",
            ),
              t(e, 5, 0, n.backgroundIcon),
              t(
                e,
                7,
                0,
                null != e.parent.context.mib3Let &&
                  e.parent.context.mib3Let.isGen1
                  ? n.insideParticleIconsGen1[
                      null == e.parent.context.mib3Let
                        ? null
                        : e.parent.context.mib3Let.insideValue
                    ]
                  : n.insideParticleIcons[
                      null == e.parent.context.mib3Let
                        ? null
                        : e.parent.context.mib3Let.insideValue
                    ],
              ),
              t(
                e,
                9,
                0,
                n.outsideParticleIcons[
                  null == e.parent.context.mib3Let
                    ? null
                    : e.parent.context.mib3Let.outsideValue
                ],
              ),
              t(
                e,
                11,
                0,
                (null == e.parent.context.mib3Let
                  ? null
                  : e.parent.context.mib3Let.outsideText) &&
                  (n.isChina ||
                    n.isErrorText(
                      null == e.parent.context.mib3Let
                        ? null
                        : e.parent.context.mib3Let.outsideText,
                    )),
              ),
              t(
                e,
                13,
                0,
                !(
                  null != e.parent.context.mib3Let &&
                  e.parent.context.mib3Let.isGen1
                ) &&
                  (null == e.parent.context.mib3Let
                    ? null
                    : e.parent.context.mib3Let.insideText) &&
                  (n.isChina ||
                    n.isErrorText(
                      null == e.parent.context.mib3Let
                        ? null
                        : e.parent.context.mib3Let.insideText,
                    )),
              ));
            var a = t(
              e,
              19,
              0,
              l.Yb(e, 15, 0, l.Nb(e, 16).transform(n.cleanAir$)),
              l.Yb(e, 15, 0, l.Nb(e, 17).transform(n.ionisator$)),
              l.Yb(e, 15, 0, l.Nb(e, 18).transform(n.aromatisation$)),
            );
            t(e, 15, 0, a);
          },
          function (t, e) {
            t(e, 4, 0, l.Nb(e, 5).iconComponentHidden);
          },
        );
      }
      function Aa(t) {
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
              "au3-dashboard-tile",
              [["id", "AirQuality"]],
              null,
              null,
              null,
              ne,
              Ft,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              Yt,
              [Bt.a, jt.a, Vt.a, [2, Ht.a]],
              {
                context: [0, "context"],
                title: [1, "title"],
                iconName: [2, "iconName"],
                decoratorIcon: [3, "decoratorIcon"],
                content: [4, "content"],
              },
              null,
            ),
            (t()(), l.hb(0, [["content", 2]], null, 0, null, Da)),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "AirQuality"),
              t(
                e,
                2,
                0,
                n.Context.Car,
                "Luftqualit\xe4t",
                "E12D_car.webp",
                "/decorators/W523_Homescreen/car.webp",
                l.Nb(e, 3),
              ));
          },
          null,
        );
      }
      function Ea(t) {
        return l.ac(
          0,
          [
            (t()(), l.hb(16777216, null, null, 11, null, Aa)),
            l.xb(
              1,
              16384,
              null,
              0,
              $t.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
            l.Pb(131072, f.b, [l.h]),
            l.Pb(131072, f.b, [l.h]),
            l.Pb(131072, f.b, [l.h]),
            l.Pb(131072, f.b, [l.h]),
            l.Pb(131072, f.b, [l.h]),
            l.Pb(131072, f.b, [l.h]),
            l.Pb(131072, f.b, [l.h]),
            l.Pb(131072, f.b, [l.h]),
            l.Qb(11, {
              outsideValue: 0,
              insideValue: 1,
              outsideText: 2,
              insideText: 3,
              insideParticleStyle: 4,
              outsideParticleStyle: 5,
              useOutsideOnlineValue: 6,
              aqiOnlineValue: 7,
              isGen1: 8,
            }),
          ],
          function (t, e) {
            var n = e.component,
              a = t(
                e,
                11,
                0,
                l.Yb(e, 1, 0, l.Nb(e, 2).transform(n.aQPollutionColorOutside$)),
                l.Yb(e, 1, 0, l.Nb(e, 3).transform(n.aQPollutionColorInside$)),
                l.Yb(e, 1, 0, l.Nb(e, 4).transform(n.outsideText$)),
                l.Yb(e, 1, 0, l.Nb(e, 5).transform(n.insideText$)),
                l.Yb(e, 1, 0, l.Nb(e, 6).transform(n.insideParticleStyle$)),
                l.Yb(e, 1, 0, l.Nb(e, 7).transform(n.outsideParticleStyle$)),
                l.Yb(e, 1, 0, l.Nb(e, 8).transform(n.useOutsideOnlineValue$)),
                l.Yb(
                  e,
                  1,
                  0,
                  l.Nb(e, 9).transform(n.aqiOnlineService.aqiOnlineValue$),
                ),
                l.Yb(e, 1, 0, l.Nb(e, 10).transform(n.isGen1$)),
              );
            t(e, 1, 0, a);
          },
          null,
        );
      }
      var wa = n("6480"),
        ka = n("t7cT"),
        za = n("H+fK");
      class $a {
        constructor(t) {
          ((this.generalSettingsService = t),
            (this.iconScaleMode = Rt.ab),
            (this.dateTimeSettingsRoute =
              za.a.Main.children.General.children.DateTime),
            (this.dateTimeRoute = za.a.Main.children.General.children.DateTime),
            (this.uiStateType = Rt.uc.ListHorizontal),
            (this.time$ = t.currentDateAndTimeSeconds$.pipe(
              Object(re.a)((t) => {
                const e = t.second() / 60,
                  n = (t.minute() + e) / 60;
                return {
                  hour: `rotate(${(t.hour() + n) / 12}turn)`,
                  minute: `rotate(${n}turn)`,
                  second: `rotate(${e}turn)`,
                  moment: t,
                };
              }),
            )));
        }
      }
      var Ra = l.wb({
        encapsulation: 0,
        styles: [
          [
            '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{display:block}au3-time-display[_ngcontent-%COMP%]     .time{font-size:25px;justify-content:center}au3-time-display[_ngcontent-%COMP%]     .time__period{font-size:15px;min-width:25px;max-width:25px}.clock[_ngcontent-%COMP%]{position:relative;margin:44px auto auto;width:201px;height:201px;display:flex;justify-content:center;align-items:center}.background[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%}.digital[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);position:relative;color:#cff1f7;text-shadow:0 0 1.5px #ccf7ff}.hand[_ngcontent-%COMP%]{height:50%;position:absolute;top:0;margin:auto;will-change:transform;transform-origin:bottom}.hand[_ngcontent-%COMP%]:after{content:"";display:block;background-color:rgba(211,246,252,.82)}.hand--hour[_ngcontent-%COMP%]:after{width:5px;height:13px;margin-top:42px}.hand--minute[_ngcontent-%COMP%]:after{width:3px;height:23px;margin-top:12px}.seconds[_ngcontent-%COMP%]{position:absolute;will-change:transform}.fill-space[_ngcontent-%COMP%], .seconds[_ngcontent-%COMP%]{width:100%;height:100%}.fill-space[_ngcontent-%COMP%]{position:relative}.date[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);text-align:center;margin-top:25px}',
          ],
        ],
        data: {},
      });
      function Ha(t) {
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
              [["class", "clock"]],
              null,
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
              1,
              "au3-icon",
              [["class", "background"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              a.b,
              a.a,
            )),
            l.xb(
              2,
              4243456,
              null,
              0,
              i.b,
              [o.a, l.z],
              { fileName: [0, "fileName"], scaleMode: [1, "scaleMode"] },
              null,
            ),
            (t()(),
            l.yb(
              3,
              0,
              null,
              null,
              0,
              "div",
              [["class", "hand hand--hour"]],
              [[4, "transform", null]],
              null,
              null,
              null,
              null,
            )),
            (t()(),
            l.yb(
              4,
              0,
              null,
              null,
              0,
              "div",
              [["class", "hand hand--minute"]],
              [[4, "transform", null]],
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
              1,
              "au3-icon",
              [["class", "seconds"]],
              [
                [4, "transform", null],
                [2, "icon-component--hidden", null],
              ],
              null,
              null,
              a.b,
              a.a,
            )),
            l.xb(
              6,
              4243456,
              null,
              0,
              i.b,
              [o.a, l.z],
              { fileName: [0, "fileName"], scaleMode: [1, "scaleMode"] },
              null,
            ),
            (t()(),
            l.yb(
              7,
              0,
              null,
              null,
              1,
              "au3-time-display",
              [["class", "digital"]],
              null,
              null,
              null,
              Be.b,
              Be.a,
            )),
            l.xb(
              8,
              49152,
              null,
              0,
              Ve.a,
              [je.a],
              {
                timeAsMoment: [0, "timeAsMoment"],
                timeRightAligned: [1, "timeRightAligned"],
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
              "/decorators/W522_Dashboard_Basic_Layout/dashboard_clock.webp",
              n.iconScaleMode.Fill,
            ),
              t(
                e,
                6,
                0,
                "/decorators/W522_Dashboard_Basic_Layout/dashboard_clock_seconds.webp",
                n.iconScaleMode.Fill,
              ),
              t(
                e,
                8,
                0,
                null == e.context.mib3Let ? null : e.context.mib3Let.moment,
                !0,
              ));
          },
          function (t, e) {
            (t(e, 1, 0, l.Nb(e, 2).iconComponentHidden),
              t(
                e,
                3,
                0,
                null == e.context.mib3Let ? null : e.context.mib3Let.hour,
              ),
              t(
                e,
                4,
                0,
                null == e.context.mib3Let ? null : e.context.mib3Let.minute,
              ),
              t(
                e,
                5,
                0,
                null == e.context.mib3Let ? null : e.context.mib3Let.second,
                l.Nb(e, 6).iconComponentHidden,
              ));
          },
        );
      }
      function Ba(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-dashboard-title",
              [],
              null,
              null,
              null,
              Z.b,
              Z.a,
            )),
            l.xb(
              1,
              49152,
              null,
              0,
              X.a,
              [],
              {
                primaryTitleDeveloperText: [0, "primaryTitleDeveloperText"],
                primaryTitleRouteInfo: [1, "primaryTitleRouteInfo"],
                iconName: [2, "iconName"],
              },
              null,
            ),
            (t()(),
            l.yb(
              2,
              0,
              null,
              null,
              17,
              "div",
              [["class", "fill-space"]],
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
              null,
              null,
              null,
              null,
            )),
            l.xb(
              3,
              147456,
              null,
              0,
              M.a,
              [S.a, l.h, o.a, [3, M.a]],
              null,
              null,
            ),
            l.xb(4, 147456, null, 0, P.a, [l.l, l.z], null, null),
            l.xb(
              5,
              147456,
              null,
              0,
              O.a,
              [P.a, [2, T.a], [2, u.a], o.a],
              null,
              null,
            ),
            l.xb(
              6,
              212992,
              null,
              0,
              g.a,
              [
                o.a,
                N.b,
                O.a,
                [2, T.a],
                [2, u.a],
                [2, M.a],
                [2, L.a],
                [2, I.a],
                l.z,
                D.a,
                l.l,
                [2, A.a],
              ],
              null,
              null,
            ),
            l.xb(
              7,
              671744,
              null,
              0,
              wa.a,
              [ye.a, ot.i, M.a, g.a, wa.b, ka.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              9,
              4407296,
              null,
              0,
              k.a,
              [
                l.l,
                z.a,
                l.h,
                w.a,
                [2, $.a],
                [2, T.b],
                [2, T.a],
                [2, R.a],
                [2, H.a],
              ],
              null,
              null,
            ),
            l.xb(
              10,
              212992,
              null,
              0,
              m.a,
              [[2, g.a], [8, null], [3, m.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            l.xb(
              11,
              147456,
              null,
              0,
              Y.a,
              [[2, g.a], [2, M.a], [2, F.a], [2, k.a], [2, G.b], l.l, V.a, j.b],
              null,
              null,
            ),
            l.xb(
              12,
              147456,
              null,
              0,
              U.a,
              [[2, k.a], [2, g.a], [2, N.b], W.a],
              null,
              null,
            ),
            (t()(), l.hb(16777216, null, null, 2, null, Ha)),
            l.xb(
              14,
              16384,
              null,
              0,
              $t.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
            (t()(),
            l.yb(
              16,
              0,
              null,
              null,
              3,
              "au3-time-display",
              [
                ["class", "date"],
                ["id", "date"],
              ],
              null,
              null,
              null,
              Be.b,
              Be.a,
            )),
            l.xb(
              17,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              18,
              49152,
              null,
              0,
              Ve.a,
              [je.a],
              {
                timeAsMoment: [0, "timeAsMoment"],
                showDate: [1, "showDate"],
                showTime: [2, "showTime"],
              },
              null,
            ),
            l.Pb(131072, f.b, [l.h]),
          ],
          function (t, e) {
            var n = e.component;
            (t(
              e,
              1,
              0,
              "Time",
              n.dateTimeSettingsRoute,
              "E80D_setup_uhrzeit_und_datum.webp",
            ),
              t(e, 6, 0),
              t(e, 7, 0, n.dateTimeRoute),
              t(e, 9, 0),
              t(e, 10, 0, n.uiStateType),
              t(e, 14, 0, l.Yb(e, 14, 0, l.Nb(e, 15).transform(n.time$))),
              t(e, 17, 0, "date"),
              t(
                e,
                18,
                0,
                l.Yb(
                  e,
                  18,
                  0,
                  l
                    .Nb(e, 19)
                    .transform(n.generalSettingsService.currentDateAndTime$),
                ),
                !0,
                !1,
              ));
          },
          function (t, e) {
            t(e, 2, 1, [
              l.Nb(e, 3).combinedDisabled,
              l.Nb(e, 3).useBrighterIcon,
              l.Nb(e, 9).markerClassEnabled,
              l.Nb(e, 10).uiStateListHorizontal,
              l.Nb(e, 10).uiStateListVertical,
              l.Nb(e, 10).uiStateCoverLeft,
              l.Nb(e, 10).uiStateCoverRight,
              l.Nb(e, 10).uiStateCoverBottom,
              l.Nb(e, 10).uiStateButton,
              l.Nb(e, 10).uiStateByDabLeft,
              l.Nb(e, 10).uiStateByDabRight,
              l.Nb(e, 10).uiStateLbDabLeft,
              l.Nb(e, 10).uiStateLbDabRight,
            ]);
          },
        );
      }
      function Va(t) {
        return l.ac(
          2,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-dashboard-tile",
              [
                ["context", "Context.Home"],
                ["id", "Clock"],
              ],
              null,
              null,
              null,
              ne,
              Ft,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              Yt,
              [Bt.a, jt.a, Vt.a, [2, Ht.a]],
              {
                context: [0, "context"],
                title: [1, "title"],
                iconName: [2, "iconName"],
                decoratorIcon: [3, "decoratorIcon"],
                content: [4, "content"],
              },
              null,
            ),
            (t()(), l.hb(0, [["content", 2]], null, 0, null, Ba)),
          ],
          function (t, e) {
            (t(e, 1, 0, "Clock"),
              t(
                e,
                2,
                0,
                "Context.Home",
                "Time",
                "E80D_setup_uhrzeit_und_datum.webp",
                "/decorators/W523_Homescreen/setup.webp",
                l.Nb(e, 3),
              ));
          },
          null,
        );
      }
      var ja = l.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{display:block;transform:translateZ(0)}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{height:100%}",
          ],
        ],
        data: {},
      });
      function Ya(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-multi-media-dashboard-tile",
              [],
              null,
              null,
              null,
              ke,
              Pe,
            )),
            l.xb(
              1,
              4440064,
              null,
              0,
              ve,
              [fe.a, jt.a, ye.a, xe.a, o.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          null,
        );
      }
      function Fa(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-navi-dashboard-tile",
              [],
              null,
              null,
              null,
              Jn,
              Wn,
            )),
            l.xb(1, 180224, null, 0, Un, [jn.a, Fn.a, o.a], null, null),
          ],
          null,
          null,
        );
      }
      function Ga(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-phone-dashboard-tile",
              [],
              null,
              null,
              null,
              ua,
              Ul,
            )),
            l.xb(
              1,
              245760,
              null,
              0,
              Gl,
              [rl.c, Ol.a, ye.a, Hl.a, Vl.a, xe.a, o.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          null,
        );
      }
      function Ua(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-air-quality-dashboard-tile",
              [],
              null,
              null,
              null,
              Ea,
              va,
            )),
            l.xb(
              1,
              245760,
              null,
              0,
              ga,
              [fa.e, xa.a, Ca.a, je.a, d.a, s.a, _a.a, o.a, ye.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          null,
        );
      }
      function Wa(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-clock-dashboard-tile",
              [],
              null,
              null,
              null,
              Va,
              Ra,
            )),
            l.xb(1, 49152, null, 0, $a, [je.a], null, null),
          ],
          null,
          null,
        );
      }
      function qa(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
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
            l.xb(
              1,
              16384,
              null,
              0,
              f.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Ya)),
            l.xb(
              3,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Fa)),
            l.xb(
              5,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Ga)),
            l.xb(
              7,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Ua)),
            l.xb(
              9,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Wa)),
            l.xb(
              11,
              278528,
              null,
              0,
              f.p,
              [l.P, l.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, n.tileId),
              t(e, 3, 0, n.DashboardTileId.MultiMedia),
              t(e, 5, 0, n.DashboardTileId.Navi),
              t(e, 7, 0, n.DashboardTileId.Phone),
              t(e, 9, 0, n.DashboardTileId.AirQuality),
              t(e, 11, 0, n.DashboardTileId.Clock));
          },
          null,
        );
      }
    },
    "6Hch": function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return U;
      }),
        n.d(e, "b", function () {
          return Q;
        }));
      var l = n("kZht"),
        a = n("8TlW"),
        i = n("fu7d"),
        o = n("bou3"),
        r = n("yNay"),
        u = n("ijxY"),
        s = n("bmFL"),
        c = n("Xo58"),
        b = n("m3Ja"),
        d = n("r+e+"),
        p = n("OJ7R"),
        h = n("OtM5"),
        m = n("9ZFG"),
        g = n("bMuc"),
        f = n("ZIdM"),
        x = n("3bpu"),
        C = n("6zvu"),
        _ = n("VcEz"),
        v = n("y9xZ"),
        y = n("+sw+"),
        P = n("BMrr"),
        O = n("IEns"),
        T = n("6480"),
        M = n("FfND"),
        S = n("oeT7"),
        N = n("t7cT"),
        L = n("z6QT"),
        I = n("flsk"),
        D = n("FQEI"),
        A = n("O82V"),
        E = n("Eln4"),
        w = n("evAh"),
        k = n("Ps6X"),
        z = n("CpzC"),
        $ = n("0Bsn"),
        R = n("5GjX"),
        H = n("mYyF"),
        B = n("v98a"),
        V = n("aOG8"),
        j = n("Krzs"),
        Y = n("HVUF"),
        F = n("B3Zb"),
        G = n("An66"),
        U =
          (n("xWRT"),
          l.wb({
            encapsulation: 0,
            styles: [
              [
                '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{position:relative;display:block;flex:0 0;background-image:linear-gradient(180deg,rgba(32,37,38,.65),transparent)}[_nghost-%COMP%]:after{content:"";position:absolute;bottom:-2px;width:calc(100% + 2px);height:2px;margin-left:-1px;background-color:#000}.title[_ngcontent-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);position:relative;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0 15px;font-size:30px}.primary-title[_ngcontent-%COMP%]{height:70px;border-width:0 0 1px;border-style:solid;border-image:linear-gradient(90deg,hsla(0,0%,100%,0),#323232,hsla(0,0%,100%,0)) 1}.secondary-title[_ngcontent-%COMP%]{height:50px}au3-dashboard-edit-mode[_nghost-%COMP%]   .title[_ngcontent-%COMP%], au3-dashboard-edit-mode   [_nghost-%COMP%]   .title[_ngcontent-%COMP%]{font-size:15px}.component-layout-latin[_nghost-%COMP%]   .primary-title[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .primary-title[_ngcontent-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .primary-title__icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .primary-title__icon[_ngcontent-%COMP%]{padding-right:15px}.component-layout-arabic[_nghost-%COMP%]   .primary-title[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .primary-title[_ngcontent-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .primary-title__icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .primary-title__icon[_ngcontent-%COMP%]{padding-left:15px}',
              ],
            ],
            data: {},
          }));
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
              4,
              "au3-i18n-label",
              [
                ["class", "secondary-title__text"],
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
            l.xb(
              1,
              212992,
              null,
              0,
              i.a,
              [l.l, l.D, o.a, r.a, [3, i.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            l.xb(
              2,
              16384,
              null,
              0,
              u.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            l.xb(
              3,
              16384,
              null,
              0,
              s.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            l.xb(
              4,
              245760,
              null,
              0,
              c.a,
              [[6, i.a], b.a, l.h, l.l, l.D, [2, d.a], [2, u.a], [2, s.a]],
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
            (t(e, 1, 0, n.secondaryTitleId, n.secondaryTitleIdEnumType),
              t(e, 2, 0, n.ignoreSecondaryTitle),
              t(e, 3, 0, n.secondaryTitleInterpolateParams),
              t(
                e,
                4,
                0,
                n.secondaryTitleDeveloperText,
                n.secondaryTitleId,
                1,
                n.secondaryTitleNonI18nValue,
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              l.Nb(e, 4).backgroundColor,
              l.Nb(e, 4).fixedNumberOfLines,
              l.Nb(e, 4).mayContainLatinCharsForArabic,
              l.Nb(e, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function q(t) {
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
              [["class", "title secondary-title"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), l.hb(16777216, null, null, 1, null, W)),
            l.xb(
              2,
              540672,
              null,
              0,
              p.a,
              [r.a, l.P, l.L],
              {
                ttStaticIf: [0, "ttStaticIf"],
                ttStaticIfElse: [1, "ttStaticIfElse"],
              },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 2, 0, !n.secondaryTemplate, n.secondaryTemplate);
          },
          null,
        );
      }
      function Q(t) {
        return l.ac(
          2,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              17,
              "div",
              [["class", "title primary-title"]],
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
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l = !1 !== t.component.primaryTitleTapped.emit() && l),
                  l
                );
              },
              null,
              null,
            )),
            l.xb(
              1,
              147456,
              null,
              0,
              h.a,
              [m.a, l.h, r.a, [3, h.a]],
              null,
              null,
            ),
            l.xb(2, 147456, null, 0, g.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              f.a,
              [g.a, [2, x.a], [2, i.a], r.a],
              null,
              null,
            ),
            l.xb(
              4,
              212992,
              null,
              0,
              C.a,
              [
                r.a,
                _.b,
                f.a,
                [2, x.a],
                [2, i.a],
                [2, h.a],
                [2, v.a],
                [2, y.a],
                l.z,
                P.a,
                l.l,
                [2, O.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.xb(
              5,
              671744,
              null,
              0,
              T.a,
              [M.a, S.i, h.a, C.a, T.b, N.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            l.Sb(131584, null, L.a, L.a, [[3, L.a]]),
            l.xb(
              7,
              4407296,
              null,
              0,
              I.a,
              [
                l.l,
                D.a,
                l.h,
                L.a,
                [2, A.a],
                [2, x.b],
                [2, x.a],
                [2, E.a],
                [2, w.a],
              ],
              null,
              null,
            ),
            l.xb(
              8,
              212992,
              null,
              0,
              k.a,
              [[2, C.a], [8, null], [3, k.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              z.a,
              [[2, C.a], [2, h.a], [2, $.a], [2, I.a], [2, R.b], l.l, H.a, B.b],
              null,
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              V.a,
              [[2, I.a], [2, C.a], [2, _.b], j.a],
              null,
              null,
            ),
            (t()(),
            l.yb(
              11,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "primary-title__icon"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              Y.b,
              Y.a,
            )),
            l.xb(
              12,
              4243456,
              null,
              0,
              F.b,
              [r.a, l.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (t()(),
            l.yb(
              13,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["class", "primary-title__text"],
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
            l.xb(
              14,
              212992,
              null,
              0,
              i.a,
              [l.l, l.D, o.a, r.a, [3, i.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            l.xb(
              15,
              16384,
              null,
              0,
              u.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            l.xb(
              16,
              16384,
              null,
              0,
              s.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            l.xb(
              17,
              245760,
              null,
              0,
              c.a,
              [[6, i.a], b.a, l.h, l.l, l.D, [2, d.a], [2, u.a], [2, s.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, q)),
            l.xb(
              19,
              16384,
              null,
              0,
              G.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 4, 0),
              t(e, 5, 0, n.primaryTitleRouteInfo),
              t(e, 7, 0),
              t(e, 8, 0, n.uiStateType),
              t(e, 12, 0, n.iconName, n.iconCategory),
              t(e, 14, 0, n.primaryTitleId, n.primaryTitleIdEnumType),
              t(e, 15, 0, n.ignorePrimaryTitle),
              t(e, 16, 0, n.primaryTitleInterpolateParams),
              t(
                e,
                17,
                0,
                n.primaryTitleDeveloperText,
                n.primaryTitleId,
                1,
                n.primaryTitleNonI18nValue,
              ),
              t(e, 19, 0, n.showSecondaryTitle));
          },
          function (t, e) {
            (t(e, 0, 1, [
              l.Nb(e, 1).combinedDisabled,
              l.Nb(e, 1).useBrighterIcon,
              l.Nb(e, 7).markerClassEnabled,
              l.Nb(e, 8).uiStateListHorizontal,
              l.Nb(e, 8).uiStateListVertical,
              l.Nb(e, 8).uiStateCoverLeft,
              l.Nb(e, 8).uiStateCoverRight,
              l.Nb(e, 8).uiStateCoverBottom,
              l.Nb(e, 8).uiStateButton,
              l.Nb(e, 8).uiStateByDabLeft,
              l.Nb(e, 8).uiStateByDabRight,
              l.Nb(e, 8).uiStateLbDabLeft,
              l.Nb(e, 8).uiStateLbDabRight,
            ]),
              t(e, 11, 0, l.Nb(e, 12).iconComponentHidden),
              t(
                e,
                13,
                0,
                l.Nb(e, 17).backgroundColor,
                l.Nb(e, 17).fixedNumberOfLines,
                l.Nb(e, 17).mayContainLatinCharsForArabic,
                l.Nb(e, 17).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
    },
    E4U0: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return c;
      }),
        n("Yi6/"));
      var l = n("drMi"),
        a = n("ZEJ2"),
        i = n("YtkY"),
        o = n("F/DH"),
        r = n("PHk/"),
        u = n("kZht"),
        s = n("yNay");
      let c = (() => {
        class t {
          constructor(t, e) {
            ((this.aqiClient = t),
              (this.logger = e.getLogger("car.AqiOnlineService")),
              this.init());
          }
          init() {
            (this.aqiClient.start(),
              (this.aqiOnlineValue$ = this.aqiClient.values
                .retrieveValueObjects({ autosubscribe: !0 })
                .pipe(
                  Object(i.a)(Object(a.b)()),
                  Object(o.l)(void 0),
                  Object(r.tap)((t) =>
                    this.logger.info("init aqiOnlineValue$", t),
                  ),
                )));
          }
        }
        return (
          (t.ɵprov = u.bc({
            factory: function () {
              return new t(u.cc(l.d), u.cc(s.a));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    IbSj: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return m;
      });
      var l = n("Yi6/"),
        a = n("QQZH"),
        i = n("ROBh"),
        o = n("HM3f"),
        r = n("YtkY"),
        u = n("xVbo"),
        s = n("kuMc"),
        c = n("D+TJ"),
        b = (n("feZC"), n("3ykg")),
        d = n("Q0Gg"),
        p = n("N/qN"),
        h = n("ODY3");
      class m {
        constructor(t, e, n, i, o) {
          ((this.dashboardService = t),
            (this.climateService = e),
            (this.DashboardTileId = h.b),
            (this.PopupType = l.Rb),
            (this.PopupIds = l.Ob),
            (this.PopupAction = l.Nb),
            (this.destroy$$ = new a.a(1)),
            (this.logger = o.getLogger("home.DashboardEditModeComponent")),
            n
              .getRequestData(l.Ob.POPUP_DASHBOARD_CONFIGURATION_MODE_POPUP)
              .pipe(
                Object(r.a)((t) => (null != t ? t.data : null)),
                Object(u.a)((t) =>
                  null != t &&
                  c.a.isDashboardTilePosition(t.tilePosition) &&
                  null != t.tileConfig
                    ? (this.logger.info("dashboardTileData$: new data: ", t),
                      !0)
                    : (this.logger.error(
                        "Invalid popupRequestData. Expected current dashboardTileConfig and position of currently edited tile. Received: ",
                        t,
                      ),
                      !1),
                ),
                Object(s.a)(this.destroy$$),
              )
              .subscribe((t) => {
                ((this.tileData = t),
                  (this.selectedTile = t.tileConfig[t.tilePosition]),
                  i.markForCheck());
              }),
            this.initTileVisibilties());
        }
        initTileVisibilties() {
          ((this.tiles = Object.keys(h.b).map((t) => ({
            tileId: h.b[t],
            visible$: Object(i.a)(!0),
          }))),
            this.initAirQualityVisibility(),
            (this.tiles$ = Object(o.b)(
              this.tiles.map((t) =>
                t.visible$.pipe(Object(r.a)((e) => (e ? t.tileId : void 0))),
              ),
            ).pipe(Object(r.a)((t) => t.filter((t) => !!t)))));
        }
        initAirQualityVisibility() {
          const t = this.tiles.find((t) => t.tileId === h.b.AirQuality);
          t &&
            (t.visible$ =
              this.climateService.airQualityFunctionGroup.carFunction$.pipe(
                Object(b.c)(d.a.Climate_AirQuality),
                Object(r.a)((t) => t.available),
              ));
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        tileSelected(t) {
          (this.logger.info("tileSelected: Tile in list selected: ", t),
            (this.selectedTile = t));
        }
        confirmSelection(t) {
          null != t ||
            this.logger.error(
              "confirmSelection: did not receive currently edited dashboard tile position from popupRequestData. Selection will not be applied after popup closes.",
            );
        }
        isTileAlreadyInDashboard(t) {
          if (null == this.tileData)
            return (
              this.logger.warn(
                "isTileAlreadyInDashboard: Can't tell if dashboard tile already present while TileData hasn't been received from popupRequestData",
              ),
              !1
            );
          const e = this.tileData;
          return p.a
            .filter((t) => t !== e.tilePosition)
            .map((t) => e.tileConfig[t])
            .includes(t);
        }
      }
    },
    JCQ5: function (t, e, n) {
      "use strict";
      var l = n("GVcY");
      (n.d(e, "a", function () {
        return l.a;
      }),
        n.d(e, "b", function () {
          return l.b;
        }),
        n.d(e, "c", function () {
          return l.d;
        }),
        n.d(e, "d", function () {
          return l.e;
        }),
        n.d(e, "e", function () {
          return l.g;
        }),
        n("8u35"),
        n("qciS"),
        n("K9Bs"),
        n("KyqV"));
    },
    MwO4: function (t, e, n) {
      "use strict";
      var l = n("gQr/");
      (n.d(e, "a", function () {
        return l.a;
      }),
        n.d(e, "b", function () {
          return l.b;
        }),
        n("qz4R"),
        n("mesC"),
        n("hCrg"),
        n("sfQI"));
    },
    P2Ag: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return m;
      }),
        n.d(e, "b", function () {
          return g;
        }));
      var l = n("kZht"),
        a = n("HVUF"),
        i = n("B3Zb"),
        o = n("yNay"),
        r = n("8TlW"),
        u = n("fu7d"),
        s = n("bou3"),
        c = n("Xo58"),
        b = n("m3Ja"),
        d = n("r+e+"),
        p = n("ijxY"),
        h = n("bmFL"),
        m =
          (n("TBun"),
          l.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}.compass__graphic[_ngcontent-%COMP%]{position:absolute;left:calc(50% - 38.5px);top:calc(50% - 38.5px);will-change:transform}.compass__symbol[_ngcontent-%COMP%]{width:77px;height:77px;min-width:77px;min-height:77px;margin:0 auto;display:flex;flex-direction:row;align-items:center;justify-content:center}',
              ],
            ],
            data: {},
          }));
      function g(t) {
        return l.ac(
          0,
          [
            l.Tb(402653184, 1, { compass: 0 }),
            (t()(),
            l.yb(
              1,
              0,
              [[1, 0]],
              null,
              1,
              "au3-icon",
              [
                ["class", "compass__graphic"],
                ["fileName", "E0C2_navigation_kompass.webp"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              a.b,
              a.a,
            )),
            l.xb(
              2,
              4243456,
              [["compass", 4]],
              0,
              i.b,
              [o.a, l.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (t()(),
            l.yb(
              3,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "compass__symbol"],
                ["developerText", "N"],
                ["id", "CompassSymbolNorth"],
              ],
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
            l.xb(
              4,
              212992,
              null,
              0,
              u.a,
              [l.l, l.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              5,
              245760,
              null,
              0,
              c.a,
              [[6, u.a], b.a, l.h, l.l, l.D, [2, d.a], [2, p.a], [2, h.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (t, e) {
            (t(
              e,
              2,
              0,
              "E0C2_navigation_kompass.webp",
              e.component.iconCategoryCompass,
            ),
              t(e, 4, 0, "CompassSymbolNorth"),
              t(e, 5, 0, "N", "CompassSymbolNorth"));
          },
          function (t, e) {
            (t(e, 1, 0, l.Nb(e, 2).iconComponentHidden),
              t(
                e,
                3,
                0,
                l.Nb(e, 5).backgroundColor,
                l.Nb(e, 5).fixedNumberOfLines,
                l.Nb(e, 5).mayContainLatinCharsForArabic,
                l.Nb(e, 5).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
    },
    TBun: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      var l = n("Yi6/");
      class a {
        constructor() {
          ((this.iconCategoryCompass = l.Z.Map),
            (this.uiStateType = l.gd.isBentley
              ? l.uc.ButtonBy
              : l.uc.ListHorizontal),
            (this._rotation = 0));
        }
        set rotation(t) {
          this._rotation !== t &&
            ((this._rotation = t), this.updateCompassRotation());
        }
        get rotation() {
          return this._rotation;
        }
        ngAfterViewInit() {
          l.gd.isBentley &&
            this.compass &&
            (this.compassIcon =
              this.compass.nativeElement.querySelector(".button__icon"));
        }
        updateCompassRotation() {
          let t = this.compass && this.compass.nativeElement;
          (l.gd.isBentley && (t = this.compassIcon),
            t && (t.style.transform = `rotateZ(${this.rotation}deg)`));
        }
      }
    },
    TDBs: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return l;
      });
      class l {}
    },
    YPRw: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return m;
      });
      var l = n("QQZH"),
        a = n("HM3f"),
        i = n("YtkY"),
        o = n("jIqt"),
        r = n("Ohay"),
        u = n("kuMc"),
        s = (n("AEBN"), n("Yi6/")),
        c = n("uBIV"),
        b = n("M0th"),
        d = n("kZht"),
        p = n("u0hB"),
        h = n("yNay");
      let m = (() => {
        class t {
          constructor(t, e, n, c) {
            ((this.destroy$$ = new l.a(1)),
              (this.logger = c.getLogger(
                "navi.navsearch.SearchAvailabilityService",
              )),
              (this.searchAvailable$ = Object(a.b)(
                t.initialized$,
                e.initialized$,
                n.initialized$,
              ).pipe(
                Object(i.a)((t) => t.every((t) => !!t)),
                Object(o.a)(!1),
                Object(r.a)(),
                Object(s.pd)(
                  this.logger,
                  "constructor: searchAvailability changed to",
                ),
                Object(u.a)(this.destroy$$),
                Object(s.Kd)(),
              )));
          }
          ngOnDestroy() {
            this.destroy$$.next();
          }
        }
        return (
          (t.ɵprov = d.bc({
            factory: function () {
              return new t(d.cc(b.a), d.cc(c.b), d.cc(p.c), d.cc(h.a));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    jAJf: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return C;
      });
      var l = n("feZC"),
        a = n("HM3f"),
        i = n("+DWZ"),
        o = n("qyUk"),
        r = n("Yi6/"),
        u = n("YtkY"),
        s = n("8j5Y"),
        c = n("F/DH"),
        b = (n("E4U0"), n("MwO4")),
        d = (n("oPv+"), n("wgY5")),
        p = (n("g+js"), n("PZqU")),
        h = (function (t) {
          return (
            (t.Initialize = "Wird geladen"),
            (t.TemporaryUnavailable = "Tempor\xe4r nicht funktional"),
            (t.NoValue = "Kein Messwert"),
            (t.Exzellent_CHINA_ONLY = "Exzellent"),
            (t.Good_CHINA_ONLY = "Gut"),
            (t.LightPollution_CHINA_ONLY = "Leicht verschmutzt"),
            (t.ModeratePollution_CHINA_ONLY = "Moderat verschmutzt"),
            (t.StrongPollution_CHINA_ONLY = "Stark verschmutzt"),
            (t.VeryStrongPollution_CHINA_ONLY = "Sehr stark verschmutzt"),
            t
          );
        })({}),
        m = (function (t) {
          return ((t.PM25AQI = "PM2.5 AQI"), (t.PM25 = "PM2.5"), t);
        })({}),
        g = (function (t) {
          return (
            (t.NoData = "Kein AQI-Aussenwert verf\xfcgbar"),
            (t.PrivacyActive =
              "Privacy ist aktiv. Kein AQI-Aussenwert verf\xfcgbar"),
            (t.ConnectLicense =
              "Die Lizenz f\xfcr Audi Connect ist abgelaufen. Kein AQI-Aussenwert verf\xfcgbar"),
            t
          );
        })({}),
        f = (function (t) {
          return (
            (t.Minute = "1 minute ago"),
            (t.Minutes = "{{minutes}} minutes ago"),
            (t.Hour = "1 hour ago"),
            (t.Hours = "{{hours}} hour ago"),
            (t.LongAgo = ">24h ago"),
            t
          );
        })({});
      const x = [
        void 0,
        h.Exzellent_CHINA_ONLY,
        h.Good_CHINA_ONLY,
        h.LightPollution_CHINA_ONLY,
        h.ModeratePollution_CHINA_ONLY,
        h.StrongPollution_CHINA_ONLY,
        h.VeryStrongPollution_CHINA_ONLY,
      ];
      class C {
        constructor(t, e, n, c, d, x, C, _) {
          ((this.climaService = t),
            (this.aqiOnlineService = e),
            (this.steeringWheel = n),
            (this.generalSettingsService = c),
            (this.i18nService = d),
            (this.systemConfigService = x),
            (this.licenseService = C),
            (this.airQualityTextEnum = h),
            (this.versionTextEnum = m),
            (this.aqiOnlineName = "aqiOnline"),
            (this.aqiOnlineServiceName = "weather_aqi_v1"),
            (this.aqiOnlineIcon = "EA9A_connect_uchoose_connect.webp"),
            (this.iconCategory = r.Z),
            (this.aqiOnlineTextEnum = g),
            (this.valueObjectDataSourceStateEnum = b.a),
            (this.aqiOnlineTimeTextEnum = f),
            (this.borderStyle = r.m),
            (this.isChina =
              this.systemConfigService.isChinaRegion() || !r.gd.production),
            (this.gen1Colors = new Map([
              [h.Exzellent_CHINA_ONLY, { r: 45, g: 217, b: 33 }],
              [h.Good_CHINA_ONLY, { r: 226, g: 229, b: 25 }],
              [h.LightPollution_CHINA_ONLY, { r: 240, g: 140, b: 33 }],
              [h.ModeratePollution_CHINA_ONLY, { r: 235, g: 0, b: 23 }],
              [h.StrongPollution_CHINA_ONLY, { r: 171, g: 26, b: 94 }],
              [h.VeryStrongPollution_CHINA_ONLY, { r: 166, g: 20, b: 51 }],
            ])),
            (this.isGen1$ = this.climaService.aqiVariant$.pipe(
              Object(u.a)((t) => t === i.a.Gen1),
            )),
            (this.onlinePrivacyError$ = this.licenseService
              .service$(this.aqiOnlineServiceName)
              .pipe(
                Object(u.a)(
                  (t) =>
                    !!t &&
                    !!t.disableReasons &&
                    !!t.disableReasons.includes(p.b.PrivacyConflict),
                ),
              )),
            (this.onlineLicenseError$ = this.licenseService
              .serviceLicenseState$(this.aqiOnlineServiceName)
              .pipe(Object(u.a)((t) => t !== p.a.Activated))),
            (this.isMoreMenu = !1),
            (this.aqiAvailable$ = Object(a.b)(
              this.climaService.airQualityPollutionValues$[l.a],
              this.climaService.airQualityPollutionValues$[l.b],
            ).pipe(Object(u.a)((t) => t.some((t) => t.available)))),
            (this.fineParticlesAvailable$ = Object(a.b)(
              this.climaService.airQualityPollutionValues$[l.c],
              this.climaService.airQualityPollutionValues$[l.d],
            ).pipe(Object(u.a)((t) => t.some((t) => t.available)))),
            (this.insideValue$ = Object(a.b)(
              this.climaService.airQualityPollutionValues$[l.a],
              this.climaService.airQualityPollutionValues$[l.c],
            ).pipe(
              Object(u.a)(([t, e]) => (t.available ? t : e)),
              Object(r.Kd)(),
            )),
            (this.outsideValue$ = Object(a.b)(
              this.climaService.airQualityPollutionValues$[l.b],
              this.climaService.airQualityPollutionValues$[l.d],
              this.aqiOnlineService.aqiOnlineValue$,
              this.isGen1$,
            ).pipe(
              Object(u.a)(([t, e, n, l]) => {
                const a = t.available ? t : e;
                return !l && a.available
                  ? a
                  : n && n.dataSourceState !== b.a.NoData
                    ? new o.f({
                        name: this.aqiOnlineName,
                        uri: n.uri,
                        id: n.id,
                        currentValue: l ? n.indexTotal : n.indexPmTwoPointFive,
                        minValue: 0,
                        maxValue: 300,
                      })
                    : o.f.EMPTY;
              }),
              Object(r.Kd)(),
            )),
            (this.useOutsideOnlineValue$ = this.outsideValue$.pipe(
              Object(u.a)((t) => !t.available || t.name === this.aqiOnlineName),
            )),
            (this.aQColorPLQ2Inside$ = this.getPollutionColor(
              this.insideValue$,
              this.climaService.airQualitySpectrum$,
            ).pipe(
              Object(s.a)((t) => this.logger.info("aQColorPLQ2Inside$", t)),
              Object(r.Kd)(),
            )),
            (this.aQColorPLQ2Outside$ = this.getPollutionColor(
              this.outsideValue$,
              this.climaService.airQualitySpectrum$,
            ).pipe(
              Object(s.a)((t) => this.logger.info("aQColorPLQ2Outside$", t)),
              Object(r.Kd)(),
            )),
            (this.styleTextInside$ = this.getTextStyle(
              this.aQColorPLQ2Inside$,
            ).pipe(
              Object(s.a)((t) => this.logger.info("styleTextInside$", t)),
            )),
            (this.styleTextOutside$ = this.getTextStyle(
              this.aQColorPLQ2Outside$,
            ).pipe(
              Object(s.a)((t) => this.logger.info("styleTextOutside$", t)),
            )),
            (this.aQDriverSide$ =
              this.steeringWheel.currentSteeringWheelPosition$.pipe(
                Object(u.a)((t) => (t === r.jc.Left ? 0 : 1)),
                Object(s.a)((t) => this.logger.info("aQDriverSide$", t)),
              )),
            (this.aQPollutionColorInside$ = this.getPollutionParticleCount(
              this.insideValue$,
              this.climaService.airQualitySpectrum$,
              !0,
            ).pipe(
              Object(s.a)((t) =>
                this.logger.info("aQPollutionColorInside$", t),
              ),
            )),
            (this.aQPollutionColorOutside$ = this.getPollutionParticleCount(
              this.outsideValue$,
              this.climaService.airQualitySpectrum$,
            ).pipe(
              Object(s.a)((t) =>
                this.logger.info("aQPollutionColorOutside$", t),
              ),
            )),
            (this.insideText$ = this.getPollutionText(
              this.insideValue$,
              this.aQPollutionColorInside$,
            ).pipe(Object(s.a)((t) => this.logger.info("insideText$", t)))),
            (this.outsideText$ = this.getPollutionText(
              this.outsideValue$,
              this.aQPollutionColorOutside$,
              !0,
            ).pipe(Object(s.a)((t) => this.logger.info("outsideText$", t)))),
            (this.logger = _.getLogger("car.AirqualityContent")));
        }
        static getColor(t, e, n) {
          if (0 === e && n <= (t[0].colorThreshold || 0))
            return C.lerpColor(t[0], t[0], 0);
          const l = t.length - 1;
          if (e === l && n >= (t[l].colorThreshold || 0))
            return C.lerpColor(t[l], t[l], 1);
          const a = t[e - 1].colorThreshold || 0,
            i = t[e].colorThreshold || 0;
          return C.lerpColor(t[e - 1], t[e], i - a > 0 ? (n - a) / (i - a) : 1);
        }
        static lerpColor(t, e, n) {
          return C.toColor(
            0 === n
              ? [t.redValue, t.greenValue, t.blueValue, 255]
              : 1 === n
                ? [e.redValue, e.greenValue, e.blueValue, 255]
                : [
                    Object(c.k)(t.redValue, e.redValue, n),
                    Object(c.k)(t.greenValue, e.greenValue, n),
                    Object(c.k)(t.blueValue, e.blueValue, n),
                    255,
                  ],
          );
        }
        static toColor(t) {
          return t.map((t) => (t ? t / 255 : 0));
        }
        static calculateOnlineTimeTextData(t, e, n, l, a) {
          if (!t || !e) return {};
          const i = d(t),
            o = e.diff(i, "m");
          if (o >= 0 && o <= 1) return { textId: f.Minute };
          if (o >= 0 && o <= 59)
            return { textId: f.Minutes, interpolate: { minutes: o } };
          const r = e.diff(i, "h");
          return r <= 24
            ? r <= 1
              ? { textId: f.Hour }
              : { textId: f.Hours, interpolate: { hours: r } }
            : { textId: f.LongAgo };
        }
        ngOnInit() {
          this.isMoreMenu &&
            (this.customDisclaimerDef = {
              enabled$:
                this.climaService.airQualityFunctionGroup.carFunction$.pipe(
                  Object(u.a)((t) => t.disabled),
                ),
              reason$:
                this.climaService.airQualityFunctionGroup.carFunction$.pipe(
                  Object(u.a)((t) =>
                    t.restrictionReason
                      ? t.restrictionReason.name.toString()
                      : "",
                  ),
                ),
              priority: r.D.Car,
            });
        }
        getPollutionColor(t, e) {
          return Object(a.b)(t, e, this.isGen1$, (t, e, n) => {
            if (n) return [255, 255, 255, 255];
            if (
              t &&
              t.available &&
              void 0 !== t.currentValue &&
              !t.disabled &&
              e.length > 1
            ) {
              const n = t.currentValue || 0;
              for (let t = 0; t < e.length; t++)
                if (n <= (e[t].colorThreshold || 0)) return C.getColor(e, t, n);
              return C.getColor(
                e,
                e.length - 1,
                e[e.length - 1].colorThreshold,
              );
            }
          }).pipe(Object(r.Kd)());
        }
        getPollutionParticleCount(t, e, n = !1) {
          const l = n ? 12 : 6,
            i = [-1, 50, 100, 150, 200, 300],
            o = [-1, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88];
          return Object(a.b)(t, e, this.isGen1$).pipe(
            Object(u.a)(([t, e, a]) => {
              const r = a ? l : 6;
              if (
                t &&
                t.available &&
                void 0 !== t.currentValue &&
                !t.disabled
              ) {
                const l = t.currentValue || 0;
                if (a)
                  return void 0 === t.currentValue
                    ? 0
                    : (n ? o : i).findIndex(
                        (t, e, n) =>
                          e === n.length - 1 || (l > t && l <= n[e + 1]),
                      ) + 1;
                if (e.length > 1) {
                  let t = r;
                  for (let n = 0; n < e.length; n++)
                    if (l <= (e[n].upperThreshold || 0)) {
                      t = n;
                      break;
                    }
                  return Object(c.e)(t, 1, r);
                }
              }
              return 0;
            }),
          );
        }
        getTextStyle(t) {
          return t.pipe(
            Object(u.a)((t) =>
              t
                ? {
                    color: `rgba(${Math.round(255 * t[0])},${Math.round(255 * t[1])}, ${Math.round(255 * t[2])}, 1)`,
                  }
                : {},
            ),
          );
        }
        getPollutionText(t, e, n = !1) {
          return Object(a.b)(
            t,
            e,
            this.aqiOnlineService.aqiOnlineValue$,
            (t, e, l) => {
              if (t && t.available) {
                if (t.disabled) return h.TemporaryUnavailable;
                if (t.specialState === i.g.Initialize) return h.Initialize;
                if (t.specialState === i.g.NotAvailable) return h.NoValue;
              }
              if (n && (!t.available || t.name === this.aqiOnlineName)) {
                if (!l || l.dataSourceState === b.a.NoData) return;
                switch (l && l.statusSummary) {
                  case b.b.Excellent:
                    return h.Exzellent_CHINA_ONLY;
                  case b.b.Good:
                    return h.Good_CHINA_ONLY;
                  case b.b.LightPolution:
                    return h.LightPollution_CHINA_ONLY;
                  case b.b.MediumPolution:
                    return h.ModeratePollution_CHINA_ONLY;
                  case b.b.HeavyPolution:
                    return h.StrongPollution_CHINA_ONLY;
                  case b.b.SeriousPolution:
                    return h.VeryStrongPollution_CHINA_ONLY;
                  default:
                    return h.NoValue;
                }
              }
              return x[e];
            },
          );
        }
        getOnlineErrorText(t, e, n) {
          return t
            ? e
              ? g.PrivacyActive
              : n
                ? g.ConnectLicense
                : t.dataSourceState === b.a.NoData
                  ? g.NoData
                  : void 0
            : g.NoData;
        }
        getOnlineTimeTextData(t, e, n, l) {
          return C.calculateOnlineTimeTextData(t, e, n, l, this.i18nService);
        }
        isErrorText(t) {
          return (
            t === h.Initialize ||
            t === h.TemporaryUnavailable ||
            t === h.NoValue
          );
        }
        getVersionEnumKey(t) {
          return Object.getOwnPropertyNames(m).find((e) => m[e] === t);
        }
        getGen1TextColor(t) {
          if (!t) return;
          const e = this.gen1Colors.get(t);
          return e ? { color: `rgba(${e.r},${e.g}, ${e.b}, 1)` } : void 0;
        }
        updateSwitchControlObject(t, e) {
          this.climaService.updateSwitchControlObject(t, e);
        }
      }
    },
    lsvA: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var l = n("kZht"),
        a = n("Yi6/"),
        i = n("ODY3");
      class o {
        constructor() {
          ((this.DashboardTileId = i.b),
            (this.Context = a.s),
            (this.IconCategory = a.Z),
            (this.environment = a.gd),
            (this.editButtonTapped = new l.n()));
        }
        requestEditMode() {
          this.editButtonTapped.emit();
        }
      }
    },
    qHCr: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return r;
        }));
      var l = n("kZht"),
        a = n("An66"),
        i =
          (n("QlDL"),
          n("I5OF"),
          n("+sw+"),
          n("yNay"),
          l.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.lock-state-hidden[_nghost-%COMP%]{visibility:hidden}.lock-state-faded[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}[_nghost-%COMP%]{position:relative;display:block;height:100%;width:100%;overflow:hidden;border:1px solid #ddd}.main[_ngcontent-%COMP%]{width:100%;min-height:100%;position:absolute;top:50%;transform:translateY(-50%)}",
              ],
            ],
            data: {},
          }));
      function o(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              [
                [1, 0],
                ["sharedTexture", 1],
              ],
              null,
              0,
              "embed",
              [
                ["class", "main"],
                ["type", "application/x-eso-example-gl"],
              ],
              [
                [1, "displayable", 0],
                [1, "framerate", 0],
                [4, "height", "px"],
              ],
              [[null, "message"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "message" === e &&
                    (l = !1 !== t.component.pluginMessageListener(n) && l),
                  l
                );
              },
              null,
              null,
            )),
          ],
          null,
          function (t, e) {
            var n = e.component;
            t(e, 0, 0, n.displayableId, n.framerate, n.textureHeight);
          },
        );
      }
      function r(t) {
        return l.ac(
          2,
          [
            l.Tb(671088640, 1, { sharedTexture: 0 }),
            (t()(), l.hb(16777216, null, null, 2, null, o)),
            l.xb(
              2,
              16384,
              null,
              0,
              a.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            l.Pb(131072, a.b, [l.h]),
          ],
          function (t, e) {
            var n = e.component;
            t(
              e,
              2,
              0,
              l.Yb(e, 2, 0, l.Nb(e, 3).transform(n.loadPlugin$)) &&
                n.displayableId,
            );
          },
          null,
        );
      }
    },
    rZIU: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        }));
      var l = n("kZht"),
        a =
          (n("zWW2"),
          l.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;flex:0 0 auto;display:flex;flex-direction:column;justify-content:space-between;height:600px;width:390px;border-width:1px 1px 0;border-style:solid;border-image:linear-gradient(0deg,#8c8c8c,hsla(0,0%,58.8%,0)) 1;background-image:linear-gradient(0deg,hsla(0,0%,51%,.6) 0,rgba(32,37,38,.45) 10%,transparent)}.bottom-border[_ngcontent-%COMP%]{position:absolute;bottom:-3px;height:3px;left:-1px;right:-1px;background-color:var(--current-context)}.bottom-border[_ngcontent-%COMP%]:before{top:0;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.4) 50%,hsla(0,0%,100%,0))}.bottom-border[_ngcontent-%COMP%]:after, .bottom-border[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;height:1px}.bottom-border[_ngcontent-%COMP%]:after{bottom:0;background-color:rgba(0,0,0,.5)}.mib3-dragged[_nghost-%COMP%], .mib3-dragged   [_nghost-%COMP%]{height:100%;width:100%;background-image:linear-gradient(0deg,rgba(70,70,70,.8),rgba(46,46,46,.75),hsla(0,0%,60.8%,.4))}',
              ],
            ],
            data: {},
          }));
      function i(t) {
        return l.ac(
          2,
          [
            l.Mb(null, 0),
            (t()(),
            l.yb(
              1,
              0,
              null,
              null,
              0,
              "div",
              [["class", "bottom-border"]],
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
    },
  },
]);
