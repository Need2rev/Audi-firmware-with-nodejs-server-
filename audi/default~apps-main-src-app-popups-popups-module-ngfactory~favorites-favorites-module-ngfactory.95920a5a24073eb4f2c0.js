(window.webpackJsonp = window.webpackJsonp || []).push([
  [39, 116],
  {
    "6Hch": function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return U;
      }),
        n.d(e, "b", function () {
          return K;
        }));
      var i = n("kZht"),
        a = n("8TlW"),
        o = n("fu7d"),
        l = n("bou3"),
        r = n("yNay"),
        s = n("ijxY"),
        u = n("bmFL"),
        c = n("Xo58"),
        d = n("m3Ja"),
        b = n("r+e+"),
        g = n("OJ7R"),
        h = n("OtM5"),
        p = n("9ZFG"),
        f = n("bMuc"),
        m = n("ZIdM"),
        v = n("3bpu"),
        _ = n("6zvu"),
        C = n("VcEz"),
        x = n("y9xZ"),
        P = n("+sw+"),
        O = n("BMrr"),
        M = n("IEns"),
        y = n("6480"),
        T = n("FfND"),
        S = n("oeT7"),
        N = n("t7cT"),
        I = n("z6QT"),
        w = n("flsk"),
        z = n("FQEI"),
        A = n("O82V"),
        k = n("Eln4"),
        D = n("evAh"),
        $ = n("Ps6X"),
        F = n("CpzC"),
        L = n("0Bsn"),
        E = n("5GjX"),
        R = n("mYyF"),
        H = n("v98a"),
        B = n("aOG8"),
        j = n("Krzs"),
        V = n("HVUF"),
        Y = n("B3Zb"),
        G = n("An66"),
        U =
          (n("xWRT"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{position:relative;display:block;flex:0 0;background-image:linear-gradient(180deg,rgba(32,37,38,.65),transparent)}[_nghost-%COMP%]:after{content:"";position:absolute;bottom:-2px;width:calc(100% + 2px);height:2px;margin-left:-1px;background-color:#000}.title[_ngcontent-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);position:relative;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0 15px;font-size:30px}.primary-title[_ngcontent-%COMP%]{height:70px;border-width:0 0 1px;border-style:solid;border-image:linear-gradient(90deg,hsla(0,0%,100%,0),#323232,hsla(0,0%,100%,0)) 1}.secondary-title[_ngcontent-%COMP%]{height:50px}au3-dashboard-edit-mode[_nghost-%COMP%]   .title[_ngcontent-%COMP%], au3-dashboard-edit-mode   [_nghost-%COMP%]   .title[_ngcontent-%COMP%]{font-size:15px}.component-layout-latin[_nghost-%COMP%]   .primary-title[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .primary-title[_ngcontent-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .primary-title__icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .primary-title__icon[_ngcontent-%COMP%]{padding-right:15px}.component-layout-arabic[_nghost-%COMP%]   .primary-title[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .primary-title[_ngcontent-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .primary-title__icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .primary-title__icon[_ngcontent-%COMP%]{padding-left:15px}',
              ],
            ],
            data: {},
          }));
      function W(t) {
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
            i.xb(
              1,
              212992,
              null,
              0,
              o.a,
              [i.l, i.D, l.a, r.a, [3, o.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              2,
              16384,
              null,
              0,
              s.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            i.xb(
              3,
              16384,
              null,
              0,
              u.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            i.xb(
              4,
              245760,
              null,
              0,
              c.a,
              [[6, o.a], d.a, i.h, i.l, i.D, [2, b.a], [2, s.a], [2, u.a]],
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
              i.Nb(e, 4).backgroundColor,
              i.Nb(e, 4).fixedNumberOfLines,
              i.Nb(e, 4).mayContainLatinCharsForArabic,
              i.Nb(e, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Z(t) {
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
              [["class", "title secondary-title"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), i.hb(16777216, null, null, 1, null, W)),
            i.xb(
              2,
              540672,
              null,
              0,
              g.a,
              [r.a, i.P, i.L],
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
      function K(t) {
        return i.ac(
          2,
          [
            (t()(),
            i.yb(
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
                var i = !0;
                return (
                  "mib3Tap" === e &&
                    (i = !1 !== t.component.primaryTitleTapped.emit() && i),
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
              h.a,
              [p.a, i.h, r.a, [3, h.a]],
              null,
              null,
            ),
            i.xb(2, 147456, null, 0, f.a, [i.l, i.z], null, null),
            i.xb(
              3,
              147456,
              null,
              0,
              m.a,
              [f.a, [2, v.a], [2, o.a], r.a],
              null,
              null,
            ),
            i.xb(
              4,
              212992,
              null,
              0,
              _.a,
              [
                r.a,
                C.b,
                m.a,
                [2, v.a],
                [2, o.a],
                [2, h.a],
                [2, x.a],
                [2, P.a],
                i.z,
                O.a,
                i.l,
                [2, M.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.xb(
              5,
              671744,
              null,
              0,
              y.a,
              [T.a, S.i, h.a, _.a, y.b, N.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            i.Sb(131584, null, I.a, I.a, [[3, I.a]]),
            i.xb(
              7,
              4407296,
              null,
              0,
              w.a,
              [
                i.l,
                z.a,
                i.h,
                I.a,
                [2, A.a],
                [2, v.b],
                [2, v.a],
                [2, k.a],
                [2, D.a],
              ],
              null,
              null,
            ),
            i.xb(
              8,
              212992,
              null,
              0,
              $.a,
              [[2, _.a], [8, null], [3, $.a], i.l, i.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            i.xb(
              9,
              147456,
              null,
              0,
              F.a,
              [[2, _.a], [2, h.a], [2, L.a], [2, w.a], [2, E.b], i.l, R.a, H.b],
              null,
              null,
            ),
            i.xb(
              10,
              147456,
              null,
              0,
              B.a,
              [[2, w.a], [2, _.a], [2, C.b], j.a],
              null,
              null,
            ),
            (t()(),
            i.yb(
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
              V.b,
              V.a,
            )),
            i.xb(
              12,
              4243456,
              null,
              0,
              Y.b,
              [r.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (t()(),
            i.yb(
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
            i.xb(
              14,
              212992,
              null,
              0,
              o.a,
              [i.l, i.D, l.a, r.a, [3, o.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              15,
              16384,
              null,
              0,
              s.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            i.xb(
              16,
              16384,
              null,
              0,
              u.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            i.xb(
              17,
              245760,
              null,
              0,
              c.a,
              [[6, o.a], d.a, i.h, i.l, i.D, [2, b.a], [2, s.a], [2, u.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, Z)),
            i.xb(
              19,
              16384,
              null,
              0,
              G.k,
              [i.P, i.L],
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
              i.Nb(e, 1).combinedDisabled,
              i.Nb(e, 1).useBrighterIcon,
              i.Nb(e, 7).markerClassEnabled,
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
            ]),
              t(e, 11, 0, i.Nb(e, 12).iconComponentHidden),
              t(
                e,
                13,
                0,
                i.Nb(e, 17).backgroundColor,
                i.Nb(e, 17).fixedNumberOfLines,
                i.Nb(e, 17).mayContainLatinCharsForArabic,
                i.Nb(e, 17).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
    },
    "8WOv": function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return g;
      }),
        n.d(e, "b", function () {
          return h;
        }));
      var i = n("kZht"),
        a = n("U6SP"),
        o = n("fu7d"),
        l = n("bou3"),
        r = n("yNay"),
        s = n("ijxY"),
        u = n("OtM5"),
        c = n("9ZFG"),
        d = n("An66"),
        b = n("1ZTq"),
        g =
          (n("zPMi"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;position:relative;direction:ltr;height:119px;border:solid #fff;border-image:linear-gradient(0deg,hsla(0,0%,100%,.7),transparent 80%) 1 1}[_nghost-%COMP%]:after{content:"";position:absolute;bottom:-1px;width:2px;height:2px;background:#000}[_nghost-%COMP%]   .steering-wheel-left[_nghost-%COMP%], .steering-wheel-left   [_nghost-%COMP%]{border-width:0 0 0 1px;margin-right:2px}[_nghost-%COMP%]   .steering-wheel-left[_nghost-%COMP%]:after, .steering-wheel-left   [_nghost-%COMP%]:after{left:auto;right:-2px}[_nghost-%COMP%]   .steering-wheel-right[_nghost-%COMP%], .steering-wheel-right   [_nghost-%COMP%]{border-width:0 1px 0 0;margin-left:2px}[_nghost-%COMP%]   .steering-wheel-right[_nghost-%COMP%]:after, .steering-wheel-right   [_nghost-%COMP%]:after{left:-2px;right:auto}.tl-item--background-gradient[_nghost-%COMP%]{background-image:linear-gradient(0deg,hsla(0,0%,100%,.19),transparent 61%)}[_nghost-%COMP%]     .button__icon, [_nghost-%COMP%]     .button__text{top:12px}.title-line-item__button[_ngcontent-%COMP%]{height:119px}.tl-item--placeholder[_nghost-%COMP%]{border-width:0;width:120px}.tl-button--centered[_ngcontent-%COMP%]{justify-content:center}.tl-icon--rotation[_ngcontent-%COMP%]     .button__icon{animation:spin 1.4s linear infinite;transform-origin:59px 59px}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',
              ],
            ],
            data: {},
          }));
      function h(t) {
        return i.ac(
          2,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              5,
              "au3-button",
              [
                ["class", "title-line-item__button"],
                ["id", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "tl-button--centered", null],
                [2, "tl-icon--rotation", null],
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "button--activated", null],
                [2, "button--horizontal", null],
                [2, "button--with-border", null],
                [2, "button--with-thick-border", null],
              ],
              null,
              null,
              a.b,
              a.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              o.a,
              [i.l, i.D, l.a, r.a, [3, o.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              16384,
              null,
              0,
              s.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            i.xb(
              3,
              147456,
              null,
              0,
              u.a,
              [c.a, i.h, r.a, [3, u.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            i.Pb(131072, d.b, [i.h]),
            i.xb(
              5,
              49152,
              null,
              0,
              b.b,
              [],
              {
                hasText: [0, "hasText"],
                developerText: [1, "developerText"],
                nonI18nText: [2, "nonI18nText"],
                icon: [3, "icon"],
                iconCategory: [4, "iconCategory"],
                hasOnlyText: [5, "hasOnlyText"],
                layoutHorizontal: [6, "layoutHorizontal"],
              },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, ""),
              t(e, 2, 0, !n.hasText),
              t(
                e,
                3,
                0,
                i.Yb(
                  e,
                  3,
                  0,
                  i
                    .Nb(e, 4)
                    .transform(
                      null == n.disabledDirective
                        ? null
                        : n.disabledDirective.disabled$,
                    ),
                ),
              ),
              t(
                e,
                5,
                0,
                n.hasText,
                n.text,
                n.nonI18nText,
                n.icon,
                n.iconCategory,
                n.hasOnlyText,
                !0,
              ));
          },
          function (t, e) {
            var n = e.component;
            t(
              e,
              0,
              0,
              n.centered,
              n.iconRotation,
              i.Nb(e, 3).combinedDisabled,
              i.Nb(e, 3).useBrighterIcon,
              i.Nb(e, 5).activated,
              i.Nb(e, 5).layoutHorizontal,
              i.Nb(e, 5).thinBorder,
              i.Nb(e, 5).thickBorder,
            );
          },
        );
      }
    },
    EOxa: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return u;
      }),
        n.d(e, "b", function () {
          return d;
        }));
      var i = n("erIP"),
        a = n("kZht"),
        o = n("An66"),
        l = n("l9Gk"),
        r = n("8Wo1"),
        s = n("CDcS"),
        u =
          (n("Kds7"),
          n("yNay"),
          a.wb({
            encapsulation: 0,
            styles: [
              i.a,
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.icon__fallback-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;image-rendering:-webkit-optimize-contrast}.icon-element--hidden[_ngcontent-%COMP%], .lock-state-hidden[_nghost-%COMP%]{visibility:hidden}.lock-state-faded[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}",
              ],
            ],
            data: {},
          }));
      function c(t) {
        return a.ac(
          0,
          [
            (t()(),
            a.yb(
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
            a.xb(
              1,
              278528,
              null,
              0,
              o.i,
              [a.s, a.t, a.l, a.D],
              { klass: [0, "klass"], ngClass: [1, "ngClass"] },
              null,
            ),
            a.xb(2, 16384, null, 0, l.a, [], null, null),
            a.xb(
              3,
              212992,
              null,
              0,
              r.a,
              [[3, s.a], a.l, a.z],
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
      function d(t) {
        return a.ac(
          2,
          [
            a.Tb(402653184, 1, { iconElement: 0 }),
            (t()(),
            a.yb(
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
            a.xb(
              2,
              278528,
              null,
              0,
              o.i,
              [a.s, a.t, a.l, a.D],
              { klass: [0, "klass"], ngClass: [1, "ngClass"] },
              null,
            ),
            a.xb(
              3,
              212992,
              null,
              0,
              r.a,
              [[3, s.a], a.l, a.z],
              { blocksRouting: [0, "blocksRouting"] },
              null,
            ),
            (t()(), a.hb(16777216, null, null, 1, null, c)),
            a.xb(
              5,
              16384,
              null,
              0,
              o.k,
              [a.P, a.L],
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
    EWkU: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return u;
      });
      var i = n("kZht"),
        a = n("Yi6/"),
        o = n("r04Z"),
        l = n("QQZH"),
        r = n("g6G6"),
        s = n("kuMc");
      n("llYL");
      class u {
        constructor(t, e, n, r, s, u, c) {
          ((this.inputRegionsService = t),
            (this.dragDropService = e),
            (this.dataDictionary = n),
            (this.appVisibilityService = r),
            (this.cdr = s),
            (this.componentLayoutService = u),
            (this.configurationModeActive = !1),
            (this.configurationModeActiveChange = new i.n()),
            (this.isArabic = !1),
            (this.pageSwitchTimer = 0),
            (this.draggedAbovePreviousPageEdge = !1),
            (this.draggedAboveNextPageEdge = !1),
            (this.editingFavoritesOrder = !1),
            (this.dragDropOverFeedback = a.qc.MOVE1),
            (this.favoriteListTypeEnum = o.a),
            (this.destroy$$ = new l.a(1)),
            (this.logger = c.getLogger("favorites.FavoritesComponent")));
        }
        ngOnInit() {
          (Object(r.a)(
            this.dragDropService.dragEnd$,
            this.dragDropService.dragCancel$,
          )
            .pipe(Object(s.a)(this.destroy$$))
            .subscribe(() => {
              (this.finishEditStep(), this.cdr.markForCheck());
            }),
            this.appVisibilityService.configurationModeLocked$
              .pipe(Object(s.a)(this.destroy$$))
              .subscribe((t) => (this.dragDropService.disabled = t)),
            this.componentLayoutService.currentComponentLayout$
              .pipe(Object(s.a)(this.destroy$$))
              .subscribe((t) => {
                this.isArabic = a.q.Arabic === t;
              }));
        }
        ngOnDestroy() {
          (this.destroy$$.next(),
            this.destroy$$.complete(),
            (this.dragDropService.disabled = !1));
        }
        ngAfterViewInit() {
          this.favoriteListTiles.changes.subscribe((t) =>
            this.updateDropTargetDirectives(t),
          );
        }
        trackTiles(t, e) {
          return e ? e.type : e;
        }
        tileLongpressed() {
          ((this.configurationModeActive = !0),
            this.configurationModeActiveChange.emit(!0),
            (this.editingFavoritesOrder = !0),
            this.cdr.detectChanges(),
            this.logger.info("tileLongpressed: Started configuration mode"),
            requestAnimationFrame(() =>
              this.tileGrid.moveToPage(this.tileGrid.activePage, !1),
            ));
        }
        tileDragged(t) {
          if (!this.nextPageEdge || !this.previousPageEdge)
            return void this.logger.warn(
              "tileDragged: FavoriteList page edge elements are not defined! No pages will be switched when dragging over the edges.",
            );
          if (!this.configurationModeActive || !this.editingFavoritesOrder)
            return;
          let e = !1,
            n = !1;
          if (this.previousPageEdge.nativeElement) {
            const n =
              this.previousPageEdge.nativeElement.getBoundingClientRect();
            e = this.isArabic
              ? t.x >= n.left && t.y >= n.top && t.y <= n.bottom
              : t.x <= n.right && t.y >= n.top && t.y <= n.bottom;
          }
          if (this.nextPageEdge.nativeElement) {
            const e = this.nextPageEdge.nativeElement.getBoundingClientRect();
            n = this.isArabic
              ? t.x <= e.right && t.y >= e.top && t.y <= e.bottom
              : t.x >= e.left && t.y >= e.top && t.y <= e.bottom;
          }
          (n || e
            ? !this.draggedAboveNextPageEdge && n
              ? (this.startPageSwitchTimer(!1), this.setTileOverEdgeClass(!0))
              : !this.draggedAbovePreviousPageEdge &&
                e &&
                (this.startPageSwitchTimer(!0), this.setTileOverEdgeClass(!0))
            : (this.cancelPageSwitchTimer(), this.setTileOverEdgeClass(!1)),
            (this.draggedAboveNextPageEdge = n),
            (this.draggedAbovePreviousPageEdge = e));
        }
        dropItem(t) {
          if ((this.cancelPageSwitchTimer(), t.fromSelf)) {
            const e = this.favoriteLists[t.startIndex];
            (t.dropIndex >= 0 &&
              ((this.favoriteLists[t.startIndex] =
                this.favoriteLists[t.dropIndex]),
              (this.favoriteLists[t.dropIndex] = e)),
              this.logger.info(
                `dropItem: Moved favorite list from ${t.startIndex} to ${t.dropIndex}`,
              ),
              this.updateDropTargetDirectives(this.favoriteListTiles));
          }
        }
        finishConfigMode() {
          ((this.configurationModeActive = !1),
            this.configurationModeActiveChange.emit(!1),
            (this.editingFavoritesOrder = !1),
            this.cdr.markForCheck(),
            requestAnimationFrame(() =>
              this.tileGrid.moveToPage(this.tileGrid.activePage, !1),
            ));
        }
        startPageSwitchTimer(t) {
          this.tileGrid
            ? (this.pageSwitchTimer = window.setTimeout(() => {
                t && this.tileGrid.activePage > 0
                  ? (this.logger.info(
                      "startPageSwitchTimer: switching to previous page",
                    ),
                    this.inputRegionsService.triggerHapticFeedback(
                      a.G.DRIVER,
                      a.qc.MOVE2,
                    ),
                    this.tileGrid.previousPage())
                  : !t &&
                    this.tileGrid.activePage < this.tileGrid.pages.length - 1 &&
                    (this.logger.info(
                      "startPageSwitchTimer: switching to next page",
                    ),
                    this.inputRegionsService.triggerHapticFeedback(
                      a.G.DRIVER,
                      a.qc.MOVE2,
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
          this.favoriteListTiles
            ? this.favoriteListTiles.forEach((e) => {
                e.element.nativeElement.classList.toggle(
                  "favorite-list--editing-over-edge",
                  t,
                );
              })
            : this.logger.warn(
                "setTileOverEdgeClass: FavoriteList tiles are not defined! No pages will be switched when dragging over the edges.",
              );
        }
        finishEditStep() {
          ((this.editingFavoritesOrder = !1),
            this.setTileOverEdgeClass(!1),
            this.logger.debug("finishEditStep: Finished editing step"));
        }
        updateDropTargetDirectives(t) {
          if (!t || !t.length) return;
          const e = new Array(this.favoriteListTiles.length);
          (t.forEach((t) => {
            const n = this.favoriteLists.findIndex(
              (e) => e.type === t.dragDropData,
            );
            if (n >= 0 && n < e.length) {
              const i = new a.L(t.element);
              ((i.dragDropData = this.favoriteLists[n].type), (e[n] = i));
            } else
              this.logger.warn(
                `updateDropTargetDirectives: Could not create DropTarget directive for favorite list index "${n}" and favorite list tile`,
                t,
              );
          }),
            this.dragDropArea.dropTargetDirectives.reset(e),
            this.dragDropArea.dropTargetDirectives.notifyOnChanges());
        }
      }
    },
    McXt: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return _;
      });
      var i = n("HM3f"),
        a = n("ROBh"),
        o = n("r04Z"),
        l = n("YtkY"),
        r = n("8j5Y"),
        s = n("xVbo"),
        u = n("TLy2"),
        c = n("J+dc"),
        d = n("Yi6/"),
        b = n("AEBN"),
        g = n("B0wk"),
        h = n("kZht"),
        p = n("snOA"),
        f = n("IIJH"),
        m = n("yNay");
      const v = [o.a.Navi, o.a.Phone, o.a.Radio, o.a.Car, o.a.TV];
      let _ = (() => {
        class t {
          constructor(t, e, n) {
            ((this.persistenceService = t),
              (this.systemComponentService = e),
              (this.logger = n.getLogger("favorites.FavoritesTileService")),
              (this.favoritesTileOrder$ = this.persistenceService
                .getEntry$(b.q.General, "favorites-tile-order", v, {
                  exportId: b.r.FavoriteTiles,
                })
                .pipe(
                  Object(l.a)((t) => t.valueContainer),
                  Object(r.a)((t) => {
                    t
                      ? this.logger.info(
                          "favoritesTileOrder$: Received new favorites tile order from persistence",
                          t,
                        )
                      : this.logger.error(
                          "favoritesTileOrder$: Received invalid favorites tile order",
                          t,
                        );
                  }),
                  Object(s.a)(d.wd),
                  Object(u.a)((t) => this.filterNotAvailableFavoriteTiles(t)),
                )));
          }
          persistFavoritesTileOrder(t) {
            (this.logger.info(
              "persistFavoritesTileOrder: Persisting new favorites tile order",
              t,
            ),
              this.persistenceService
                .setEntry(b.q.General, "favorites-tile-order", t, {
                  exportId: b.r.FavoriteTiles,
                })
                .then(() =>
                  this.logger.info(
                    "persistFavoritesTileOrder: Persisted favorites tile order successful",
                  ),
                )
                .catch((t) =>
                  this.logger.error(
                    "persistFavoritesTileOrder: Could not persist favorites tile order",
                    t,
                  ),
                ));
          }
          filterNotAvailableFavoriteTiles(t) {
            const e = t.map((t) =>
              this.isFavoriteTileAvailable$(t).pipe(
                Object(l.a)((e) => (e ? t : void 0)),
              ),
            );
            return Object(i.b)(e).pipe(
              Object(l.a)((t) => t.filter(d.wd)),
              Object(c.a)(1),
            );
          }
          isFavoriteTileAvailable$(t) {
            return t === o.a.Navi
              ? this.isSystemComponentAvailableForTile$(t, g.a.Navi)
              : t === o.a.TV
                ? this.isSystemComponentAvailableForTile$(t, g.a.Tv)
                : Object(a.a)(!0);
          }
          isSystemComponentAvailableForTile$(t, e) {
            return this.systemComponentService.isComponentAvailable$(e).pipe(
              Object(c.a)(1),
              Object(r.a)((n) => {
                n ||
                  this.logger.info(
                    `isSystemComponentAvailableForTile$: Favorite tile "${t}" is not available due to not available system component "${e}".`,
                  );
              }),
            );
          }
        }
        return (
          (t.ɵprov = h.bc({
            factory: function () {
              return new t(h.cc(p.a), h.cc(f.a), h.cc(m.a));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    Xast: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return h;
      }),
        n.d(e, "b", function () {
          return T;
        }));
      var i = n("kZht"),
        a = n("An66"),
        o = n("qT1L"),
        l = n("Aebk"),
        r = n("OJ7R"),
        s = n("yNay"),
        u = n("Zxd5"),
        c = n("iVEM"),
        d = n("qzuC"),
        b = n("Tr//"),
        g = n("oxWk"),
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
              a.k,
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
              o.b,
              o.a,
            )),
            i.xb(1, 49152, [[2, 4]], 0, l.a, [], null, null),
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
      function v(t) {
        return i.ac(0, [(t()(), i.hb(0, null, null, 0))], null, null);
      }
      function _(t) {
        return i.ac(
          0,
          [
            (t()(), i.hb(16777216, null, null, 2, null, v)),
            i.xb(
              1,
              540672,
              null,
              0,
              a.r,
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
            (t()(), i.hb(16777216, null, null, 1, null, _)),
            i.xb(
              2,
              16384,
              null,
              0,
              a.k,
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
              a.n,
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
              a.j,
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
              o.b,
              o.a,
            )),
            i.xb(1, 49152, [[2, 4]], 0, l.a, [], null, null),
            (t()(), i.hb(16777216, null, 0, 1, null, x)),
            i.xb(
              3,
              16384,
              null,
              0,
              a.k,
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
              a.k,
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
              "au3-view-pager-item",
              [],
              null,
              null,
              null,
              o.b,
              o.a,
            )),
            i.xb(1, 49152, [[2, 4]], 0, l.a, [], null, null),
            (t()(), i.hb(16777216, null, 0, 1, null, M)),
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
      function T(t) {
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
                  a = t.component;
                return (
                  "pageChange" === e && (i = !1 !== a.onPageChange(n) && i),
                  "pageCountChange" === e &&
                    (i = !1 !== a.pageCountChange.emit(n) && i),
                  "visiblePagesChange" === e &&
                    (i = !1 !== a.visiblePagesChanged() && i),
                  i
                );
              },
              u.b,
              u.a,
            )),
            i.xb(
              2,
              4440064,
              [[1, 4]],
              1,
              c.b,
              [i.h, i.z, d.a, b.a, g.a, s.a],
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
              a.j,
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
              a.j,
              [i.P, i.L, i.s],
              { ngForOf: [0, "ngForOf"], ngForTrackBy: [1, "ngForTrackBy"] },
              null,
            ),
            (t()(), i.hb(16777216, null, 0, 1, null, y)),
            i.xb(
              9,
              278528,
              null,
              0,
              a.j,
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
    Zxd5: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return g;
      }),
        n.d(e, "b", function () {
          return p;
        }));
      var i = n("kZht"),
        a = n("bMuc"),
        o = n("Nd8J"),
        l = n("VcEz"),
        r = n("BMrr"),
        s = n("yNay"),
        u = n("OtM5"),
        c = n("rZwJ"),
        d = n("fu7d"),
        b = n("An66"),
        g =
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
                  a = t.component;
                return (
                  "mib3Drag" === e && (i = !1 !== a.drag(n) && i),
                  "mib3DragStart" === e && (i = !1 !== a.dragStart(n) && i),
                  "mib3DragEnd" === e && (i = !1 !== a.dragEnd() && i),
                  "mib3Fling" === e && (i = !1 !== a.fling(n) && i),
                  "pointerdown" === e && (i = !1 !== a.pointerDown() && i),
                  "transitionend" === e &&
                    (i = !1 !== a.animationFinished() && i),
                  i
                );
              },
              null,
              null,
            )),
            i.xb(2, 147456, null, 0, a.a, [i.l, i.z], null, null),
            i.xb(
              3,
              212992,
              null,
              0,
              o.b,
              [i.l, i.z, l.b, r.a, s.a, a.a, [2, u.a], [2, c.a], [2, d.a]],
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
              b.j,
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
        return a;
      }),
        n.d(e, "b", function () {
          return o;
        }));
      var i = n("kZht"),
        a =
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
      function o(t) {
        return i.ac(2, [i.Mb(null, 0)], null, null);
      }
    },
    r04Z: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var i = (function (t) {
        return (
          (t.Navi = "navi"),
          (t.Phone = "phone"),
          (t.Radio = "radio"),
          (t.Car = "car"),
          (t.TV = "tv"),
          t
        );
      })({});
    },
    rZIU: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return o;
        }));
      var i = n("kZht"),
        a =
          (n("zWW2"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;flex:0 0 auto;display:flex;flex-direction:column;justify-content:space-between;height:600px;width:390px;border-width:1px 1px 0;border-style:solid;border-image:linear-gradient(0deg,#8c8c8c,hsla(0,0%,58.8%,0)) 1;background-image:linear-gradient(0deg,hsla(0,0%,51%,.6) 0,rgba(32,37,38,.45) 10%,transparent)}.bottom-border[_ngcontent-%COMP%]{position:absolute;bottom:-3px;height:3px;left:-1px;right:-1px;background-color:var(--current-context)}.bottom-border[_ngcontent-%COMP%]:before{top:0;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.4) 50%,hsla(0,0%,100%,0))}.bottom-border[_ngcontent-%COMP%]:after, .bottom-border[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;height:1px}.bottom-border[_ngcontent-%COMP%]:after{bottom:0;background-color:rgba(0,0,0,.5)}.mib3-dragged[_nghost-%COMP%], .mib3-dragged   [_nghost-%COMP%]{height:100%;width:100%;background-image:linear-gradient(0deg,rgba(70,70,70,.8),rgba(46,46,46,.75),hsla(0,0%,60.8%,.4))}',
              ],
            ],
            data: {},
          }));
      function o(t) {
        return i.ac(
          2,
          [
            i.Mb(null, 0),
            (t()(),
            i.yb(
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
    u0Qd: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return sn;
      }),
        n.d(e, "b", function () {
          return pn;
        }));
      var i = n("kZht"),
        a = n("Ps6X"),
        o = n("6zvu"),
        l = n("8TlW"),
        r = n("fu7d"),
        s = n("bou3"),
        u = n("yNay"),
        c = n("Xo58"),
        d = n("m3Ja"),
        b = n("r+e+"),
        g = n("ijxY"),
        h = n("bmFL"),
        p = n("Yi6/"),
        f = n("4C60"),
        m = n("nqvY"),
        v = (function (t) {
          return (
            (t.Home = "Heimatadresse"),
            (t.Business = "Gesch\xe4ftsadresse"),
            t
          );
        })({});
      class _ {
        constructor(t) {
          ((this.addressFormattingService = t),
            (this.firstLineTextEnum = v),
            (this.uiStateType = p.uc.ListHorizontal),
            (this.nonI18nTextLine1 = void 0),
            (this.nonI18nTextLine2 = void 0));
        }
        set destination(t) {
          if (t)
            switch (((this.itemType = t.type), t.type)) {
              case m.a.HOME:
                ((this.firstLineTextId = v.Home),
                  (this.firstLineDevText = v.Home),
                  this.formatHomeBusinessAddress(t.destination));
                break;
              case m.a.BUSINESS:
                ((this.firstLineTextId = v.Business),
                  (this.firstLineDevText = v.Business),
                  this.formatHomeBusinessAddress(t.destination));
                break;
              default:
                ((this.firstLineTextId = "Favorite"),
                  (this.firstLineDevText = void 0),
                  this.formatFavoriteAddress(t.destination));
            }
        }
        formatHomeBusinessAddress(t) {
          ((this.nonI18nTextLine1 = void 0),
            (this.nonI18nTextLine2 =
              t && t.location
                ? this.addressFormattingService.getLines(
                    1,
                    Object(f.a)(t.location),
                  )[0]
                : void 0));
        }
        formatFavoriteAddress(t) {
          if (t && t.location) {
            const e = this.addressFormattingService.getLines(
              2,
              Object(f.a)(t.location),
            );
            ((this.nonI18nTextLine1 = e[0]), (this.nonI18nTextLine2 = e[1]));
          } else ((this.nonI18nTextLine1 = ""), (this.nonI18nTextLine2 = ""));
        }
      }
      var C = n("SFb6"),
        x = i.wb({
          encapsulation: 0,
          styles: [
            [
              '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:block;height:100%}.favorite[_ngcontent-%COMP%]{height:120px;padding:20px 20px 0;align-items:center}.favorite__first-line[_ngcontent-%COMP%]{font-size:40px}.favorite__second-line[_ngcontent-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:30px}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}',
            ],
          ],
          data: {},
        });
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
              [["class", "favorite"]],
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
              a.a,
              [[2, o.a], [8, null], [3, a.a], i.l, i.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (t()(),
            i.yb(
              2,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "favorite__first-line"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(
              3,
              212992,
              null,
              0,
              r.a,
              [i.l, i.D, s.a, u.a, [3, r.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              4,
              245760,
              null,
              0,
              c.a,
              [[6, r.a], d.a, i.h, i.l, i.D, [2, b.a], [2, g.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            (t()(),
            i.yb(
              5,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "favorite__second-line"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(
              6,
              212992,
              null,
              0,
              r.a,
              [i.l, i.D, s.a, u.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              7,
              245760,
              null,
              0,
              c.a,
              [[6, r.a], d.a, i.h, i.l, i.D, [2, b.a], [2, g.a], [2, h.a]],
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
            (t(e, 1, 0, n.uiStateType),
              t(e, 3, 0, n.firstLineTextId, n.firstLineTextEnum),
              t(
                e,
                4,
                0,
                n.firstLineDevText,
                n.firstLineTextId,
                1,
                n.nonI18nTextLine1,
              ),
              t(e, 6, 0, "NoAddress"),
              t(
                e,
                7,
                0,
                "Keine Adresse hinterlegt",
                "NoAddress",
                1,
                n.nonI18nTextLine2,
              ));
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
                2,
                0,
                i.Nb(e, 4).backgroundColor,
                i.Nb(e, 4).fixedNumberOfLines,
                i.Nb(e, 4).mayContainLatinCharsForArabic,
                i.Nb(e, 4).shortenWithEllipsisForArabic,
              ),
              t(
                e,
                5,
                0,
                i.Nb(e, 7).backgroundColor,
                i.Nb(e, 7).fixedNumberOfLines,
                i.Nb(e, 7).mayContainLatinCharsForArabic,
                i.Nb(e, 7).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      var O = n("bMuc"),
        M = n("ZIdM"),
        y = n("3bpu"),
        T = n("VcEz"),
        S = n("OtM5"),
        N = n("y9xZ"),
        I = n("+sw+"),
        w = n("BMrr"),
        z = n("IEns"),
        A = n("z6QT"),
        k = n("flsk"),
        D = n("FQEI"),
        $ = n("O82V"),
        F = n("Eln4"),
        L = n("evAh"),
        E = n("CpzC"),
        R = n("0Bsn"),
        H = n("5GjX"),
        B = n("mYyF"),
        j = n("v98a"),
        V = n("aOG8"),
        Y = n("Krzs"),
        G = n("An66"),
        U = n("HVUF"),
        W = n("B3Zb"),
        Z = n("oWpa"),
        K = n("yegR"),
        X = n("EyLa"),
        J = n("4nnk"),
        q = n("N2Hj"),
        Q = n("UbWD"),
        tt = n("2rvh"),
        et = n("odRV"),
        nt = n("Udyh"),
        it = n("I3ve"),
        at = n("qiAR"),
        ot = n("007S"),
        lt = n("oeT7"),
        rt = n("oxWk"),
        st = n("Tr//"),
        ut = n("rZIU"),
        ct = n("zWW2"),
        dt = n("6Hch"),
        bt = n("xWRT");
      class gt {
        constructor() {
          ((this.contextColor = p.s.Home),
            (this.favoriteItems = []),
            (this.initialized = !1),
            (this.showNoFavoritesReason = !1),
            (this.noFavoritesReason = null),
            (this.noFavoritesReasonEnum = null),
            (this.configurationModeActive = !1),
            (this.headerTapped = new i.n()));
        }
        get hasFavorites() {
          return !!this.favoriteItems && this.favoriteItems.length > 0;
        }
      }
      var ht = i.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;height:100%;position:relative}.tile-container[_ngcontent-%COMP%]{height:465px;width:425px;margin:0 auto}.favorite-tile--configuration-mode[_nghost-%COMP%]{height:370px;width:340px;margin:0 auto}.favorite-tile--configuration-mode[_nghost-%COMP%]   .tile-container[_ngcontent-%COMP%]{height:100%;width:100%}.decorator[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);width:100%}.mib3-dragged[_nghost-%COMP%], .mib3-dragged   [_nghost-%COMP%]{height:100%;width:100%}.mib3-dragged[_nghost-%COMP%]   .title[_ngcontent-%COMP%], .mib3-dragged   [_nghost-%COMP%]   .title[_ngcontent-%COMP%]{display:none}.no-favorites[_ngcontent-%COMP%]{text-align:center}.initializing[_ngcontent-%COMP%], .no-favorites[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;padding:15px}.initializing[_ngcontent-%COMP%]{flex-direction:column}.initializing__text[_ngcontent-%COMP%]{height:unset;width:100%;text-align:center}.initializing__indicator[_ngcontent-%COMP%]{width:90%;margin-top:25px}",
          ],
        ],
        data: {},
      });
      function pt(t) {
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
              [["class", "decorator"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              U.b,
              U.a,
            )),
            i.xb(
              1,
              4243456,
              null,
              0,
              W.b,
              [u.a, i.z],
              { fileName: [0, "fileName"] },
              null,
            ),
          ],
          function (t, e) {
            t(e, 1, 0, e.component.decoratorIconName);
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 1).iconComponentHidden);
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
              3,
              "au3-statustext",
              [
                ["class", "no-favorites"],
                ["ttIgnore", ""],
              ],
              null,
              null,
              null,
              Z.b,
              Z.a,
            )),
            i.xb(
              2,
              212992,
              null,
              0,
              r.a,
              [i.l, i.D, s.a, u.a, [3, r.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              3,
              16384,
              null,
              0,
              g.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            i.xb(
              4,
              49152,
              null,
              0,
              K.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
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
              n.noFavoritesReasonEnum
                ? n.noFavoritesReason
                : "NoFavoritesReason",
              n.noFavoritesReasonEnum,
            ),
              t(
                e,
                3,
                0,
                null == n.noFavoritesReason && null == n.noFavoritesReasonEnum,
              ),
              t(e, 4, 0, 4, n.noFavoritesReason));
          },
          null,
        );
      }
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
              5,
              "div",
              [["class", "initializing"]],
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
              "au3-statustext",
              [["class", "initializing__text"]],
              null,
              null,
              null,
              Z.b,
              Z.a,
            )),
            i.xb(
              2,
              212992,
              null,
              0,
              r.a,
              [i.l, i.D, s.a, u.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              3,
              49152,
              null,
              0,
              K.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
            (t()(),
            i.yb(
              4,
              0,
              null,
              null,
              1,
              "au3-progressbar",
              [["class", "initializing__indicator"]],
              [
                [2, "sxm--rotate", null],
                [2, "progressbar--infinite", null],
              ],
              null,
              null,
              X.b,
              X.a,
            )),
            i.xb(
              5,
              49152,
              null,
              0,
              J.a,
              [i.l, i.h],
              { current: [0, "current"] },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 2, 0, "NotInitialized"),
              t(e, 3, 0, 4, "Favoriten werden\ninitialisiert."),
              t(e, 5, 0, void 0));
          },
          function (t, e) {
            t(e, 4, 0, i.Nb(e, 5).shouldRotateForSxm, i.Nb(e, 5).infinite);
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
              5,
              "au3-list",
              [
                ["class", "favorites"],
                ["id", "FavoritesList"],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              q.b,
              q.a,
            )),
            i.Sb(6144, null, Q.a, null, [tt.a]),
            i.xb(
              2,
              212992,
              null,
              0,
              r.a,
              [i.l, i.D, s.a, u.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(3, 16384, null, 0, et.a, [i.l], null, null),
            i.xb(
              4,
              12828672,
              null,
              1,
              tt.a,
              [
                [2, nt.a],
                [2, it.a],
                [8, null],
                [2, r.a],
                [2, at.a],
                [2, ot.a],
                [2, T.b],
                lt.i,
                i.z,
                i.h,
                u.a,
                rt.a,
                st.a,
                [2, D.a],
                y.a,
                [2, lt.a],
              ],
              { defaultTemplate: [0, "defaultTemplate"], items: [1, "items"] },
              null,
            ),
            i.Tb(603979776, 1, { template: 0 }),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 2, 0, "FavoritesList"),
              t(e, 4, 0, n.itemTemplate, n.favoriteItems));
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 4).showLineNumbers);
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
              2,
              "au3-statustext",
              [["class", "no-favorites"]],
              null,
              null,
              null,
              Z.b,
              Z.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              r.a,
              [i.l, i.D, s.a, u.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              49152,
              null,
              0,
              K.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "NoFavoritesSaved"),
              t(e, 2, 0, 4, "Keine Favoriten\ngespeichert."));
          },
          null,
        );
      }
      function Ct(t) {
        return i.ac(
          0,
          [
            (t()(), i.hb(16777216, null, null, 1, null, vt)),
            i.xb(
              1,
              16384,
              null,
              0,
              G.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), i.hb(0, [["noFavorites", 2]], null, 0, null, _t)),
          ],
          function (t, e) {
            t(e, 1, 0, e.component.hasFavorites, i.Nb(e, 2));
          },
          null,
        );
      }
      function xt(t) {
        return i.ac(
          0,
          [
            (t()(), i.hb(16777216, null, null, 1, null, mt)),
            i.xb(
              1,
              16384,
              null,
              0,
              G.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), i.hb(0, [["list", 2]], null, 0, null, Ct)),
          ],
          function (t, e) {
            t(e, 1, 0, !e.component.initialized, i.Nb(e, 2));
          },
          null,
        );
      }
      function Pt(t) {
        return i.ac(
          0,
          [
            (t()(), i.hb(16777216, null, null, 1, null, ft)),
            i.xb(
              1,
              16384,
              null,
              0,
              G.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), i.hb(0, [["Favorites", 2]], null, 0, null, xt)),
          ],
          function (t, e) {
            t(e, 1, 0, e.component.showNoFavoritesReason, i.Nb(e, 2));
          },
          null,
        );
      }
      function Ot(t) {
        return i.ac(
          2,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              8,
              "au3-dashboard-tile-base",
              [],
              null,
              null,
              null,
              ut.b,
              ut.a,
            )),
            i.xb(
              1,
              278528,
              null,
              0,
              G.i,
              [i.s, i.t, i.l, i.D],
              { ngClass: [0, "ngClass"] },
              null,
            ),
            i.Ob(2, 2),
            i.xb(3, 49152, null, 0, ct.a, [], null, null),
            (t()(),
            i.yb(
              4,
              0,
              null,
              0,
              1,
              "au3-dashboard-title",
              [["class", "title"]],
              null,
              [[null, "primaryTitleTapped"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "primaryTitleTapped" === e &&
                    (i = !1 !== t.component.headerTapped.emit() && i),
                  i
                );
              },
              dt.b,
              dt.a,
            )),
            i.xb(
              5,
              49152,
              null,
              0,
              bt.a,
              [],
              {
                primaryTitleId: [0, "primaryTitleId"],
                primaryTitleDeveloperText: [1, "primaryTitleDeveloperText"],
                showSecondaryTitle: [2, "showSecondaryTitle"],
                iconName: [3, "iconName"],
              },
              { primaryTitleTapped: "primaryTitleTapped" },
            ),
            (t()(), i.hb(16777216, null, 0, 1, null, pt)),
            i.xb(
              7,
              16384,
              null,
              0,
              G.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), i.hb(0, [["content", 2]], 0, 0, null, Pt)),
          ],
          function (t, e) {
            var n = e.component,
              a = t(e, 2, 0, "tile-container", n.contextColor);
            (t(e, 1, 0, a),
              t(e, 5, 0, n.listTitleId, n.listTitle, !1, n.titleIconName),
              t(e, 7, 0, n.configurationModeActive, i.Nb(e, 8)));
          },
          null,
        );
      }
      var Mt = n("0qMr"),
        yt = n("D57K"),
        Tt = n("C05f"),
        St = n("QQZH"),
        Nt = n("ROBh"),
        It = n("HM3f"),
        wt = n("TLy2"),
        zt = n("YtkY"),
        At = n("J+dc"),
        kt = n("Ohay"),
        Dt = n("sK8D"),
        $t = n("ndMh"),
        Ft = n("I/e0"),
        Lt = n("4h+N");
      let Et = (() => {
        class t {
          constructor(t, e, n, i, a, o, l) {
            ((this.naviRoutingService = t),
              (this.favoriteDestinationsService = e),
              (this.homeBusinessService = n),
              (this.guidancePopupWorkflowService = i),
              (this.popupManager = a),
              (this.naviAppStatesService = o),
              (this.logService = l),
              (this.configurationModeActive = !1),
              (this.contextColor = p.s.Navi),
              (this.uiStateType = p.uc.ListHorizontal),
              (this.isDataLoaded$$ = new Tt.a(!1)),
              (this.hasUserAddedFavorites$$ = new St.a(1)),
              (this.hasUserAddedFavorites$ =
                this.hasUserAddedFavorites$$.asObservable()),
              (this.favoritePopupAppStateTextEnum = $t.d),
              (this.defaultFavoriteDestinationForTexttool$ = Object(Nt.a)([
                { type: m.a.HOME },
                { type: m.a.BUSINESS },
              ])),
              (this.destroy$$ = new St.a(1)),
              (this.logger = this.logService.getLogger(
                "favorites.NaviFavoritesComponent",
              )),
              (this.appStateTextEnumCurrent$ =
                this.createAppStateTextEnumCurrent$()));
          }
          ngOnInit() {
            this.favorites$ = p.gd.textToolMode
              ? this.defaultFavoriteDestinationForTexttool$
              : this.isNaviInitialized$().pipe(
                  Object(wt.a)((t) =>
                    t
                      ? this.loadFavoriteDestination$()
                      : (this.logger.info(
                          "ngOnInit: appState is not initialized",
                        ),
                        this.isDataLoaded$$.next(!1),
                        Object(Nt.a)([{ type: m.a.FAVORITE }])),
                  ),
                  Object(zt.a)((t) => {
                    const e = t.some((t) => t.type === m.a.FAVORITE);
                    return (
                      this.hasUserAddedFavorites$$.next(e),
                      e || t.push({ type: m.a.FAVORITE }),
                      t
                    );
                  }),
                );
          }
          loadFavoriteDestination$() {
            return Object(It.b)(
              this.favoriteDestinationsService.favorites$,
              this.homeBusinessService.homeLocation$,
              this.homeBusinessService.businessLocation$,
            ).pipe(
              Object(zt.a)(
                ([e, n, i]) => (
                  this.isDataLoaded$$.next(!0),
                  this.logger.info(
                    "loadFavoriteDestination$: locations received:",
                    () => ({
                      homeLocation: !!n,
                      businessLocation: !!i,
                      favoritesCount: e.length,
                    }),
                  ),
                  [
                    {
                      type: m.a.HOME,
                      destination: n,
                      lockingParam:
                        !n || (n && !n.location)
                          ? t.lockingHomeBusinessParam
                          : void 0,
                    },
                    {
                      type: m.a.BUSINESS,
                      destination: i,
                      lockingParam:
                        !i || (i && !i.location)
                          ? t.lockingHomeBusinessParam
                          : void 0,
                    },
                    ...e.map((t) => ({ type: m.a.FAVORITE, destination: t })),
                  ]
                ),
              ),
            );
          }
          ngOnDestroy() {
            (this.destroy$$.next(), this.destroy$$.complete());
          }
          goToFavorites() {
            return this.naviRoutingService.goTo(
              Dt.b.DestinationMode.children.Favorites,
            );
          }
          startRouteGuidance(e) {
            return (
              this.logger.info(
                "startRouteGuidance: the user pressed the favorite button:",
                e,
              ),
              this.popupManager
                .unrequest(t.shortCutPopupId)
                .then(() => this.handleButtonClick(e))
                .then((t) =>
                  t ? this.naviRoutingService.goToMap() : Promise.resolve(!1),
                )
            );
          }
          handleButtonClick(t) {
            switch (t.type) {
              case m.a.BUSINESS:
                return this.handleHomeBusiness(Lt.b.BUSINESS);
              case m.a.HOME:
                return this.handleHomeBusiness(Lt.b.HOME);
              default:
                return this.handleFavorite(t);
            }
          }
          handleHomeBusiness(t) {
            return this.homeBusinessService
              .locationId$(t)
              .pipe(Object(At.a)(1))
              .toPromise()
              .then((e) =>
                e
                  ? (this.logger.info(
                      `handleHomeBusiness: execute tile favorite: using ${t} address id:`,
                      e,
                    ),
                    this.guidancePopupWorkflowService.requestNewGuidance(e))
                  : this.homeBusinessService
                      .askUserToSetAddress(t)
                      .then(() => !1),
              );
          }
          handleFavorite(t) {
            return t && t.destination && t.destination.location
              ? (this.logger.info("handleFavorite: using favorite:", t),
                this.guidancePopupWorkflowService.requestNewGuidance(
                  t.destination.location.id,
                ))
              : (this.logger.warn(
                  "handleFavorite: could not find favorite for:",
                  t,
                ),
                Promise.reject("handleFavorite: could not find favorite"));
          }
          isNaviInitialized$() {
            return this.naviAppStatesService.state$.pipe(
              Object(p.pd)(this.logger, "isNaviInitialized$: input:"),
              Object(zt.a)((t) => Ft.a.stateType(t) === Ft.b.Initialized),
              Object(kt.a)(),
            );
          }
          createAppStateTextEnumCurrent$() {
            return this.naviAppStatesService.state$.pipe(
              Object(zt.a)((t) => {
                switch (t) {
                  case $t.a.NotActivated:
                    return $t.d.NotActivated;
                  case $t.a.DbDamaged:
                    return $t.d.DbDamaged;
                  case $t.a.DbNotCompatible:
                    return $t.d.DbNotCompatible;
                  case $t.a.DbWrongMarket:
                    return $t.d.DbWrongMarket;
                  case $t.a.FunctionOnDemand:
                  case $t.a.Ready4Nav:
                    return $t.d.NotBought;
                  case $t.a.DbNotAvailable:
                    return $t.d.DbNotAvailable;
                }
              }),
            );
          }
        }
        return (
          (t.shortCutPopupId = p.Ob.POPUP_PRESET_POPUP),
          (t.lockingHomeBusinessParam = {
            lockingKey: { type: p.Eb.SCREEN, category: p.Ab.COMPLEX },
          }),
          Object(yt.b)(
            [
              Object(p.bb)("logger"),
              Object(yt.c)("design:type", Function),
              Object(yt.c)("design:paramtypes", [Object]),
              Object(yt.c)("design:returntype", Promise),
            ],
            t.prototype,
            "startRouteGuidance",
            null,
          ),
          t
        );
      })();
      var Rt = n("dkCa"),
        Ht = n("BiTe"),
        Bt = n("sg2e"),
        jt = i.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;height:100%}.label__no-favorites[_ngcontent-%COMP%]{padding:20px 20px 0}.favorite__error-message[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;line-height:65px;height:364px;padding:15px;text-align:center}",
            ],
          ],
          data: {},
        });
      function Vt(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              8,
              "au3-nav-tile-list-item",
              [["favoriteItemIndex", "index"]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "mib3Tap" === e &&
                    (i =
                      !1 !==
                        t.component.startRouteGuidance(
                          t.parent.context.$implicit,
                        ) && i),
                  i
                );
              },
              P,
              x,
            )),
            i.xb(1, 147456, null, 0, O.a, [i.l, i.z], null, null),
            i.xb(
              2,
              147456,
              null,
              0,
              M.a,
              [O.a, [2, y.a], [2, r.a], u.a],
              null,
              null,
            ),
            i.xb(
              3,
              212992,
              null,
              0,
              o.a,
              [
                u.a,
                T.b,
                M.a,
                [2, y.a],
                [2, r.a],
                [2, S.a],
                [2, N.a],
                [2, I.a],
                i.z,
                w.a,
                i.l,
                [2, z.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.Sb(131584, null, A.a, A.a, [[3, A.a]]),
            i.xb(
              5,
              4407296,
              null,
              0,
              k.a,
              [
                i.l,
                D.a,
                i.h,
                A.a,
                [2, $.a],
                [2, y.b],
                [2, y.a],
                [2, F.a],
                [2, L.a],
              ],
              null,
              null,
            ),
            i.xb(
              6,
              147456,
              null,
              0,
              E.a,
              [[2, o.a], [2, S.a], [2, R.a], [2, k.a], [2, H.b], i.l, B.a, j.b],
              null,
              null,
            ),
            i.xb(
              7,
              147456,
              null,
              0,
              V.a,
              [[2, k.a], [2, o.a], [2, T.b], Y.a],
              null,
              null,
            ),
            i.xb(
              8,
              49152,
              null,
              0,
              _,
              [C.a],
              {
                destination: [0, "destination"],
                favoriteItemIndex: [1, "favoriteItemIndex"],
              },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 3, 0),
              t(e, 5, 0),
              t(e, 8, 0, e.parent.context.$implicit, "index"));
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 5).markerClassEnabled);
          },
        );
      }
      function Yt(t) {
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
                ["class", "label__no-favorites"],
                ["id", "NoFavoritesSaved"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              r.a,
              [i.l, i.D, s.a, u.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              245760,
              null,
              0,
              c.a,
              [[6, r.a], d.a, i.h, i.l, i.D, [2, b.a], [2, g.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "NoFavoritesSaved"),
              t(e, 2, 0, "Keine Favoriten\nangelegt", "NoFavoritesSaved", 2));
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
      function Gt(t) {
        return i.ac(
          0,
          [
            (t()(), i.hb(16777216, null, null, 2, null, Vt)),
            i.xb(
              1,
              16384,
              null,
              0,
              G.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            i.Pb(131072, G.b, [i.h]),
            (t()(), i.hb(0, [["noFavorites", 2]], null, 0, null, Yt)),
          ],
          function (t, e) {
            var n = e.component;
            t(
              e,
              1,
              0,
              i.Yb(e, 1, 0, i.Nb(e, 2).transform(n.hasUserAddedFavorites$)) ||
                2 !== e.context.index,
              i.Nb(e, 3),
            );
          },
          null,
        );
      }
      function Ut(t) {
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
              "au3-favorite-tile",
              [],
              [[2, "favorite-tile--configuration-mode", null]],
              [[null, "headerTapped"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "headerTapped" === e &&
                    (i = !1 !== t.component.goToFavorites() && i),
                  i
                );
              },
              Ot,
              ht,
            )),
            i.xb(
              1,
              49152,
              null,
              0,
              gt,
              [],
              {
                contextColor: [0, "contextColor"],
                listTitleId: [1, "listTitleId"],
                listTitle: [2, "listTitle"],
                titleIconName: [3, "titleIconName"],
                decoratorIconName: [4, "decoratorIconName"],
                favoriteItems: [5, "favoriteItems"],
                itemTemplate: [6, "itemTemplate"],
                initialized: [7, "initialized"],
                showNoFavoritesReason: [8, "showNoFavoritesReason"],
                noFavoritesReason: [9, "noFavoritesReason"],
                noFavoritesReasonEnum: [10, "noFavoritesReasonEnum"],
                configurationModeActive: [11, "configurationModeActive"],
              },
              { headerTapped: "headerTapped" },
            ),
            i.Pb(131072, G.b, [i.h]),
            i.Pb(131072, G.b, [i.h]),
            (t()(),
            i.hb(0, [["navFavListItemTemplate", 2]], null, 0, null, Gt)),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 1, [
              n.contextColor,
              "NaviFavorites",
              "Navigation",
              "E0B1_map.webp",
              "/decorators/W523_Homescreen/navi.webp",
              i.Yb(e, 1, 5, i.Nb(e, 2).transform(n.favorites$)),
              i.Nb(e, 4),
              i.Yb(e, 1, 7, i.Nb(e, 3).transform(n.isDataLoaded$$)),
              void 0 !== e.context.mib3Let,
              e.context.mib3Let,
              n.favoritePopupAppStateTextEnum,
              n.configurationModeActive,
            ]);
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 1).configurationModeActive);
          },
        );
      }
      function Wt(t) {
        return i.ac(
          2,
          [
            (t()(), i.hb(16777216, null, null, 2, null, Ut)),
            i.xb(
              1,
              16384,
              null,
              0,
              Mt.a,
              [i.L, i.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            i.Pb(131072, G.b, [i.h]),
          ],
          function (t, e) {
            var n = e.component;
            t(
              e,
              1,
              0,
              i.Yb(e, 1, 0, i.Nb(e, 2).transform(n.appStateTextEnumCurrent$)),
            );
          },
          null,
        );
      }
      var Zt = n("6xFL"),
        Kt = n("Vc2n"),
        Xt = n("YEFf"),
        Jt = n("Zbi+"),
        qt = n("t8AR"),
        Qt = (function (t) {
          return (
            (t.NoPhoneConnected = "Kein Telefon\nverbunden."),
            (t.FavoritesNotYetAvailable =
              "Favoriten sind\nnoch nicht verf\xfcgbar."),
            (t.CarPlayActive =
              "iPhone befindet sich im Apple CarPlay Modus. Telefonieren nur \xfcber Apple CarPlay m\xf6glich"),
            (t.ConfidentialModeActive = "Privatmodus aktiv"),
            t
          );
        })({});
      class te {
        constructor(t, e, n, i, a) {
          ((this.adbService = t),
            (this.phoneRoutingService = e),
            (this.phoneService = n),
            (this.asiService = i),
            (this.configurationModeActive = !1),
            (this.uiStateType = p.uc.ListHorizontal),
            (this.noFavoritesReasonsEnum = Qt),
            (this.contextColor = p.s.Phone),
            (this.logger = a.getLogger(
              "favorites.PhoneFavoritesTileComponent",
            )),
            (this.isInitialized$ = this.phoneService.initialized$),
            (this.favoritesAvailable$ =
              this.adbService.focusDeviceProfileWithReload$.pipe(
                Object(zt.a)((t) => !!t),
                Object(kt.a)(),
              )),
            (this.hasConnectedPhones$ = this.phoneService.phones$.pipe(
              Object(zt.a)((t) =>
                t.some((t) => t.connectionState !== Jt.e.EMBEDDED),
              ),
            )));
          const o = this.phoneService.phones$.pipe(
            Object(zt.a)((t) => t.focusDevice),
          );
          ((this.noFavoritesReason$ = Object(It.b)(
            this.hasConnectedPhones$,
            this.favoritesAvailable$,
            this.asiService.appleCarplayActive$,
            o,
          ).pipe(
            Object(zt.a)(([t, e, n, i]) =>
              n
                ? Qt.CarPlayActive
                : t
                  ? i && i.isConfidentialModeActive
                    ? Qt.ConfidentialModeActive
                    : e
                      ? null
                      : Qt.FavoritesNotYetAvailable
                  : Qt.NoPhoneConnected,
            ),
          )),
            (this.favorites$ =
              this.adbService.focusDeviceProfileWithReload$.pipe(
                Object(wt.a)((e) => (e ? t.favorites$ : Object(Nt.a)(null))),
              )));
        }
        goToContext() {
          this.phoneRoutingService.goToFavoritesOrMain();
        }
        favoriteName(t) {
          return t.contact && t.contact.name
            ? t.contact.name
            : t.number
              ? t.number
              : (this.logger.warn(
                  "favoriteName: could not determine name of favorite",
                  t,
                ),
                "");
        }
        favoriteNumber(t) {
          const e = this.adbService.findPreferredFavoriteNumber(t);
          return e && e.number ? e.number : "";
        }
        callFavorite(t) {
          return this.adbService
            .callFavorite(t)
            .then(() => this.phoneRoutingService.enterContext());
        }
      }
      var ee = i.wb({
        encapsulation: 0,
        styles: [
          [
            '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:block;height:100%}.favorite[_ngcontent-%COMP%]{height:120px;padding:20px 20px 0;align-items:center}.favorite__name[_ngcontent-%COMP%]{font-size:40px}.favorite__number[_ngcontent-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:30px}',
          ],
        ],
        data: {},
      });
      function ne(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              14,
              "div",
              [["class", "favorite"]],
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
                var i = !0;
                return (
                  "mib3Tap" === e &&
                    (i =
                      !1 !== t.component.callFavorite(t.context.$implicit) &&
                      i),
                  i
                );
              },
              null,
              null,
            )),
            i.xb(1, 147456, null, 0, O.a, [i.l, i.z], null, null),
            i.xb(
              2,
              147456,
              null,
              0,
              M.a,
              [O.a, [2, y.a], [2, r.a], u.a],
              null,
              null,
            ),
            i.xb(
              3,
              212992,
              null,
              0,
              o.a,
              [
                u.a,
                T.b,
                M.a,
                [2, y.a],
                [2, r.a],
                [2, S.a],
                [2, N.a],
                [2, I.a],
                i.z,
                w.a,
                i.l,
                [2, z.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.Sb(131584, null, A.a, A.a, [[3, A.a]]),
            i.xb(
              5,
              4407296,
              null,
              0,
              k.a,
              [
                i.l,
                D.a,
                i.h,
                A.a,
                [2, $.a],
                [2, y.b],
                [2, y.a],
                [2, F.a],
                [2, L.a],
              ],
              null,
              null,
            ),
            i.xb(
              6,
              212992,
              null,
              0,
              a.a,
              [[2, o.a], [8, null], [3, a.a], i.l, i.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            i.xb(
              7,
              147456,
              null,
              0,
              E.a,
              [[2, o.a], [2, S.a], [2, R.a], [2, k.a], [2, H.b], i.l, B.a, j.b],
              null,
              null,
            ),
            i.xb(
              8,
              147456,
              null,
              0,
              V.a,
              [[2, k.a], [2, o.a], [2, T.b], Y.a],
              null,
              null,
            ),
            (t()(),
            i.yb(
              9,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "favorite__name"],
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
              l.b,
              l.a,
            )),
            i.xb(10, 16384, null, 0, g.a, [], null, null),
            i.xb(
              11,
              245760,
              null,
              0,
              c.a,
              [[8, null], d.a, i.h, i.l, i.D, [2, b.a], [2, g.a], [2, h.a]],
              { nonI18nValue: [0, "nonI18nValue"] },
              null,
            ),
            (t()(),
            i.yb(
              12,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "favorite__number"],
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
              l.b,
              l.a,
            )),
            i.xb(13, 16384, null, 0, g.a, [], null, null),
            i.xb(
              14,
              245760,
              null,
              0,
              c.a,
              [[8, null], d.a, i.h, i.l, i.D, [2, b.a], [2, g.a], [2, h.a]],
              { nonI18nValue: [0, "nonI18nValue"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 3, 0),
              t(e, 5, 0),
              t(e, 6, 0, n.uiStateType),
              t(e, 11, 0, n.favoriteName(e.context.$implicit)),
              t(e, 14, 0, n.favoriteNumber(e.context.$implicit)));
          },
          function (t, e) {
            (t(e, 0, 1, [
              i.Nb(e, 5).markerClassEnabled,
              i.Nb(e, 6).uiStateListHorizontal,
              i.Nb(e, 6).uiStateListVertical,
              i.Nb(e, 6).uiStateCoverLeft,
              i.Nb(e, 6).uiStateCoverRight,
              i.Nb(e, 6).uiStateCoverBottom,
              i.Nb(e, 6).uiStateButton,
              i.Nb(e, 6).uiStateByDabLeft,
              i.Nb(e, 6).uiStateByDabRight,
              i.Nb(e, 6).uiStateLbDabLeft,
              i.Nb(e, 6).uiStateLbDabRight,
            ]),
              t(
                e,
                9,
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
                i.Nb(e, 14).backgroundColor,
                i.Nb(e, 14).fixedNumberOfLines,
                i.Nb(e, 14).mayContainLatinCharsForArabic,
                i.Nb(e, 14).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function ie(t) {
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
              "au3-favorite-tile",
              [],
              [[2, "favorite-tile--configuration-mode", null]],
              [[null, "headerTapped"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "headerTapped" === e &&
                    (i = !1 !== t.component.goToContext() && i),
                  i
                );
              },
              Ot,
              ht,
            )),
            i.xb(
              1,
              49152,
              null,
              0,
              gt,
              [],
              {
                contextColor: [0, "contextColor"],
                listTitleId: [1, "listTitleId"],
                listTitle: [2, "listTitle"],
                titleIconName: [3, "titleIconName"],
                decoratorIconName: [4, "decoratorIconName"],
                favoriteItems: [5, "favoriteItems"],
                itemTemplate: [6, "itemTemplate"],
                initialized: [7, "initialized"],
                showNoFavoritesReason: [8, "showNoFavoritesReason"],
                noFavoritesReason: [9, "noFavoritesReason"],
                noFavoritesReasonEnum: [10, "noFavoritesReasonEnum"],
                configurationModeActive: [11, "configurationModeActive"],
              },
              { headerTapped: "headerTapped" },
            ),
            i.Pb(131072, G.b, [i.h]),
            i.Pb(131072, G.b, [i.h]),
            i.Pb(131072, G.b, [i.h]),
            (t()(),
            i.hb(0, [["phoneFavoritesTemplate", 2]], null, 0, null, ne)),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 1, [
              n.contextColor,
              "PhoneFavorites",
              "Phone",
              i.Yb(e, 1, 3, i.Nb(e, 2).transform(n.hasConnectedPhones$))
                ? "E1A0_phone_phone1.webp"
                : "E027_phone_mobile.webp",
              "/decorators/W523_Homescreen/phone.webp",
              i.Yb(e, 1, 5, i.Nb(e, 3).transform(n.favorites$)),
              i.Nb(e, 5),
              i.Yb(e, 1, 7, i.Nb(e, 4).transform(n.isInitialized$)),
              !!e.context.mib3Let,
              e.context.mib3Let,
              n.noFavoritesReasonsEnum,
              n.configurationModeActive,
            ]);
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 1).configurationModeActive);
          },
        );
      }
      function ae(t) {
        return i.ac(
          2,
          [
            (t()(), i.hb(16777216, null, null, 2, null, ie)),
            i.xb(
              1,
              16384,
              null,
              0,
              Mt.a,
              [i.L, i.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            i.Pb(131072, G.b, [i.h]),
          ],
          function (t, e) {
            var n = e.component;
            t(
              e,
              1,
              0,
              i.Yb(e, 1, 0, i.Nb(e, 2).transform(n.noFavoritesReason$)),
            );
          },
          null,
        );
      }
      var oe = n("bAzG"),
        le = n("9ZFG"),
        re = n("a7NO"),
        se = n("D6Ca"),
        ue = n("kuMc"),
        ce = n("cCDc"),
        de = n("YEwm"),
        be = n("OK7x"),
        ge = n("MvmT"),
        he = n("Y0IF"),
        pe = n("Ngpk");
      n("FNcX");
      class fe {
        constructor(t, e, n, i, a) {
          ((this.favoritesService = t),
            (this.tunerService = e),
            (this.entertainmentService = n),
            (this.radioRoutingService = i),
            (this.configurationModeActive = !1),
            (this.uiStateType = p.uc.ListHorizontal),
            (this.contextColor = p.s.Media),
            (this.disabledReasonHandler = be.a),
            (this.getItemLayout = ge.b.getItemLayout),
            (this.destroyed$$ = new St.a(1)),
            (this.logger = a.getLogger("favorites.RadioFavoritesComponent")),
            (this.favorites$ = this.favoritesService.favoritesStationList$.pipe(
              Object(zt.a)((t) => t.data),
            )),
            (this.areRadioFavoritesAvailable$ = Object(It.b)(
              this.entertainmentService
                .sourcesForGroup$(pe.c.TUNER)
                .pipe(
                  Object(zt.a)(
                    (t) =>
                      !!t.find(
                        (t) =>
                          t.type === pe.g.TUNERFAVORITES &&
                          (t.sourceState === pe.f.READYFORACTIVATION ||
                            t.sourceState === pe.f.ACTIVE ||
                            t.sourceState === pe.f.EMPTY),
                      ),
                  ),
                ),
              this.tunerService.tunerObjectsArray$.pipe(
                Object(zt.a)((t) => t.find((t) => t.list === se.p.FAVORITES)),
                Object(zt.a)((t) => !!t),
                Object(kt.a)(),
              ),
            ).pipe(
              Object(zt.a)(([t, e]) => t && e),
              Object(kt.a)(),
            )),
            (this.activeStation$ = this.tunerService.activeStation$));
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        goToFavorites() {
          this.radioRoutingService
            .goToFavorites()
            .pipe(Object(ue.a)(this.destroyed$$))
            .subscribe();
        }
        stationClicked(t) {
          (this.logger.info("Tune to station", t),
            this.tunerService
              .activateAndTuneToStation(t.uri, t.path, se.p.FAVORITES)
              .pipe(Object(At.a)(1), Object(ue.a)(this.destroyed$$))
              .subscribe());
        }
      }
      var me = n("dQg2"),
        ve = i.wb({
          encapsulation: 0,
          styles: [
            [
              '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:block;height:100%}.state-disabled[_ngcontent-%COMP%]{filter:grayscale(100%) brightness(.4)}',
            ],
          ],
          data: {},
        });
      function _e(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-radio-station-list-item",
              [["id", ""]],
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
                [2, "small__list-item", null],
              ],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "mib3Tap" === e &&
                    (i =
                      !1 !== t.component.stationClicked(t.context.$implicit) &&
                      i),
                  i
                );
              },
              oe.b,
              oe.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              r.a,
              [i.l, i.D, s.a, u.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(2, 147456, null, 0, O.a, [i.l, i.z], null, null),
            i.xb(
              3,
              147456,
              null,
              0,
              M.a,
              [O.a, [2, y.a], [2, r.a], u.a],
              null,
              null,
            ),
            i.xb(
              4,
              147456,
              null,
              0,
              S.a,
              [le.a, i.h, u.a, [3, S.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            i.xb(
              5,
              212992,
              null,
              0,
              o.a,
              [
                u.a,
                T.b,
                M.a,
                [2, y.a],
                [2, r.a],
                [2, S.a],
                [2, N.a],
                [2, I.a],
                i.z,
                w.a,
                i.l,
                [2, z.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.Sb(131584, null, A.a, A.a, [[3, A.a]]),
            i.xb(
              7,
              4407296,
              null,
              0,
              k.a,
              [
                i.l,
                D.a,
                i.h,
                A.a,
                [2, $.a],
                [2, y.b],
                [2, y.a],
                [2, F.a],
                [2, L.a],
              ],
              null,
              null,
            ),
            i.xb(
              8,
              212992,
              null,
              0,
              a.a,
              [[2, o.a], [8, null], [3, a.a], i.l, i.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            i.xb(
              9,
              147456,
              null,
              0,
              E.a,
              [[2, o.a], [2, S.a], [2, R.a], [2, k.a], [2, H.b], i.l, B.a, j.b],
              null,
              null,
            ),
            i.xb(
              10,
              147456,
              null,
              0,
              V.a,
              [[2, k.a], [2, o.a], [2, T.b], Y.a],
              null,
              null,
            ),
            i.xb(
              11,
              114688,
              null,
              0,
              re.a,
              [],
              {
                station: [0, "station"],
                active: [1, "active"],
                itemLayout: [2, "itemLayout"],
                showAsSmallListItem: [3, "showAsSmallListItem"],
              },
              null,
            ),
            i.Pb(131072, G.b, [i.h]),
          ],
          function (t, e) {
            var n,
              a = e.component;
            (t(e, 1, 0, ""),
              t(
                e,
                4,
                0,
                a.disabledReasonHandler.isDisabled(e.context.$implicit),
                a.disabledReasonHandler.getDisabledReason(e.context.$implicit),
              ),
              t(e, 5, 0),
              t(e, 7, 0),
              t(e, 8, 0, a.uiStateType),
              t(
                e,
                11,
                0,
                e.context.$implicit,
                (null ==
                (n = i.Yb(e, 11, 1, i.Nb(e, 12).transform(a.activeStation$)))
                  ? null
                  : n.id) === e.context.$implicit.id,
                a.getItemLayout(e.context.$implicit, e.parent.context.mib3Let),
                !0,
              ));
          },
          function (t, e) {
            t(e, 0, 1, [
              i.Nb(e, 4).combinedDisabled,
              i.Nb(e, 4).useBrighterIcon,
              i.Nb(e, 7).markerClassEnabled,
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
              i.Nb(e, 11).showAsSmallListItem,
            ]);
          },
        );
      }
      function Ce(t) {
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
              "au3-favorite-tile",
              [],
              [[2, "favorite-tile--configuration-mode", null]],
              [[null, "headerTapped"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "headerTapped" === e &&
                    (i = !1 !== t.component.goToFavorites() && i),
                  i
                );
              },
              Ot,
              ht,
            )),
            i.xb(
              1,
              49152,
              null,
              0,
              gt,
              [],
              {
                contextColor: [0, "contextColor"],
                listTitleId: [1, "listTitleId"],
                listTitle: [2, "listTitle"],
                titleIconName: [3, "titleIconName"],
                decoratorIconName: [4, "decoratorIconName"],
                favoriteItems: [5, "favoriteItems"],
                itemTemplate: [6, "itemTemplate"],
                initialized: [7, "initialized"],
                configurationModeActive: [8, "configurationModeActive"],
              },
              { headerTapped: "headerTapped" },
            ),
            i.Pb(131072, G.b, [i.h]),
            i.Pb(131072, G.b, [i.h]),
            (t()(),
            i.hb(0, [["stationListItemTemplate", 2]], null, 0, null, _e)),
          ],
          function (t, e) {
            var n = e.component;
            t(
              e,
              1,
              0,
              n.contextColor,
              "RadioFavorites",
              "Radio",
              "E098_radio.webp",
              "/decorators/W523_Homescreen/radio.webp",
              i.Yb(e, 1, 5, i.Nb(e, 2).transform(n.favorites$)),
              i.Nb(e, 4),
              i.Yb(
                e,
                1,
                7,
                i.Nb(e, 3).transform(n.areRadioFavoritesAvailable$),
              ),
              n.configurationModeActive,
            );
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 1).configurationModeActive);
          },
        );
      }
      function xe(t) {
        return i.ac(
          2,
          [
            (t()(), i.hb(16777216, null, null, 2, null, Ce)),
            i.xb(
              1,
              16384,
              null,
              0,
              Mt.a,
              [i.L, i.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            i.Pb(131072, G.b, [i.h]),
          ],
          function (t, e) {
            var n = e.component;
            t(
              e,
              1,
              0,
              i.Yb(e, 1, 0, i.Nb(e, 2).transform(n.tunerService.layoutHints$)),
            );
          },
          null,
        );
      }
      var Pe = n("QSdq"),
        Oe = n("D0GA"),
        Me = n("6480"),
        ye = n("FfND"),
        Te = n("t7cT"),
        Se = n("bx3e"),
        Ne = n("+3WC"),
        Ie = n("maAS"),
        we = n("DmXr"),
        ze = n("cDFm"),
        Ae = n("wOl2");
      class ke {
        constructor(t, e, n) {
          ((this.carFavoritesService = t),
            (this.routingService = e),
            (this.vehicleMonitorService = n),
            (this.configurationModeActive = !1),
            (this.contextColor = p.s.Car),
            (this.uiStateType = p.uc.ListHorizontal),
            (this.carShortcutPrimaryRouteName = ze.a),
            (this.carShortcutPrimaryToggleName = ze.b),
            (this.carShortcutSecondaryRouteName = ze.c),
            (this.carShortcutSecondaryToggleName = ze.d),
            (this.carShortCutPrimaryMap = ze.e),
            (this.carShortCutSecondaryMap = ze.f),
            (this.favoriteTileInitialized$ =
              this.carFavoritesService.initialized$),
            (this.displayAsRs$ = this.vehicleMonitorService.displayAsRs$),
            (this.items$ = this.carFavoritesService.carFavorites$.pipe(
              Object(zt.a)((t) =>
                t.filter((t) => t.type === Ne.a.Car && t.name !== Ie.a.INVALID),
              ),
            )));
        }
        goToContext() {
          this.routingService.goTo(Se.a.Main.children.Favorites);
        }
        getText(t, e) {
          return e
            ? this.carShortCutSecondaryMap.get(t)
            : this.carShortCutPrimaryMap.get(t);
        }
      }
      var De = i.wb({
        encapsulation: 0,
        styles: [
          [
            '.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{display:block;height:100%}.state-disabled[_ngcontent-%COMP%]{filter:grayscale(100%) brightness(.4)}.favorite[_ngcontent-%COMP%]{height:120px;padding:0 15px}.favorite--submenu[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:start;font-size:40px}.primary-text[_ngcontent-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:40px;max-width:100%}.secondary-text[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:30px;max-width:100%}',
          ],
        ],
        data: {},
      });
      function $e(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              8,
              "au3-list-switch-item",
              [
                ["class", "favorite"],
                ["id", "CarFavoriteToggle"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [
                [null, "valueChange"],
                [null, "mib3DisabledTap"],
              ],
              function (t, e, n) {
                var i = !0,
                  a = t.component;
                return (
                  "valueChange" === e &&
                    (i =
                      !1 !==
                        a.carFavoritesService.executeFavorite(
                          t.parent.context.$implicit,
                        ) && i),
                  "mib3DisabledTap" === e &&
                    (i =
                      !1 !==
                        (null != t.parent.context.$implicit &&
                        t.parent.context.$implicit.executeDisabledReason
                          ? a.carFavoritesService.executeFavorite(
                              t.parent.context.$implicit,
                            )
                          : void 0) && i),
                  i
                );
              },
              Pe.b,
              Pe.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              r.a,
              [i.l, i.D, s.a, u.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              147456,
              null,
              0,
              S.a,
              [le.a, i.h, u.a, [3, S.a]],
              {
                disabled: [0, "disabled"],
                reason: [1, "reason"],
                showReason: [2, "showReason"],
              },
              { tap: "mib3DisabledTap" },
            ),
            i.Pb(131072, G.b, [i.h]),
            i.Pb(131072, G.b, [i.h]),
            i.xb(
              5,
              49152,
              null,
              0,
              Oe.a,
              [[2, S.a]],
              {
                textId: [0, "textId"],
                textIdEnum: [1, "textIdEnum"],
                developerText: [2, "developerText"],
                nonI18nText: [3, "nonI18nText"],
                hasSubtitle: [4, "hasSubtitle"],
                subtitleId: [5, "subtitleId"],
                subtitleIdEnum: [6, "subtitleIdEnum"],
                developerTextSubtitle: [7, "developerTextSubtitle"],
                nonI18nTextSubtitle: [8, "nonI18nTextSubtitle"],
                value: [9, "value"],
                lightSubtitle: [10, "lightSubtitle"],
              },
              { valueChange: "valueChange" },
            ),
            i.Pb(131072, G.b, [i.h]),
            i.Pb(131072, G.b, [i.h]),
            i.Pb(131072, G.b, [i.h]),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "CarFavoriteToggle"),
              t(
                e,
                2,
                0,
                !i.Yb(
                  e,
                  2,
                  0,
                  i
                    .Nb(e, 3)
                    .transform(
                      null == e.parent.context.$implicit
                        ? null
                        : e.parent.context.$implicit.executable$,
                    ),
                ),
                i.Yb(
                  e,
                  2,
                  1,
                  i
                    .Nb(e, 4)
                    .transform(
                      null == e.parent.context.$implicit
                        ? null
                        : e.parent.context.$implicit.disabledReason$,
                    ),
                ),
                !(
                  null != e.parent.context.$implicit &&
                  e.parent.context.$implicit.executeDisabledReason
                ),
              ),
              t(e, 5, 1, [
                n.getText(
                  null == e.parent.context.$implicit
                    ? null
                    : e.parent.context.$implicit.name,
                  !1,
                ),
                n.carShortcutPrimaryToggleName,
                n.getText(
                  null == e.parent.context.$implicit
                    ? null
                    : e.parent.context.$implicit.name,
                  !1,
                ),
                null != e.parent.context.$implicit &&
                e.parent.context.$implicit.favNonI18NPrimaryText$
                  ? i.Yb(
                      e,
                      5,
                      3,
                      i
                        .Nb(e, 6)
                        .transform(
                          null == e.parent.context.$implicit
                            ? null
                            : e.parent.context.$implicit.favNonI18NPrimaryText$,
                        ),
                    )
                  : void 0,
                !0,
                n.getText(
                  null == e.parent.context.$implicit
                    ? null
                    : e.parent.context.$implicit.name,
                  !0,
                ),
                n.carShortcutSecondaryToggleName,
                n.getText(
                  null == e.parent.context.$implicit
                    ? null
                    : e.parent.context.$implicit.name,
                  !0,
                ),
                null != e.parent.context.$implicit &&
                e.parent.context.$implicit.favNonI18NSecondaryText$
                  ? i.Yb(
                      e,
                      5,
                      8,
                      i
                        .Nb(e, 7)
                        .transform(
                          null == e.parent.context.$implicit
                            ? null
                            : e.parent.context.$implicit
                                .favNonI18NSecondaryText$,
                        ),
                    )
                  : void 0,
                i.Yb(
                  e,
                  5,
                  9,
                  i
                    .Nb(e, 8)
                    .transform(
                      null == e.parent.context.$implicit
                        ? null
                        : e.parent.context.$implicit.activated$,
                    ),
                ),
                !0,
              ]));
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 2).combinedDisabled, i.Nb(e, 2).useBrighterIcon);
          },
        );
      }
      function Fe(t) {
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
              [["class", "secondary-text"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              r.a,
              [i.l, i.D, s.a, u.a, [3, r.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              2,
              245760,
              null,
              0,
              c.a,
              [[6, r.a], d.a, i.h, i.l, i.D, [2, b.a], [2, g.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            i.Pb(131072, G.b, [i.h]),
          ],
          function (t, e) {
            var n = e.component;
            (t(
              e,
              1,
              0,
              n.getText(
                null == e.parent.parent.context.$implicit
                  ? null
                  : e.parent.parent.context.$implicit.name,
                !0,
              ),
              n.carShortcutSecondaryRouteName,
            ),
              t(
                e,
                2,
                0,
                n.getText(
                  null == e.parent.parent.context.$implicit
                    ? null
                    : e.parent.parent.context.$implicit.name,
                  !0,
                ),
                n.getText(
                  null == e.parent.parent.context.$implicit
                    ? null
                    : e.parent.parent.context.$implicit.name,
                  !0,
                ),
                1,
                null != e.parent.parent.context.$implicit &&
                  e.parent.parent.context.$implicit.favNonI18NSecondaryText$
                  ? i.Yb(
                      e,
                      2,
                      3,
                      i
                        .Nb(e, 3)
                        .transform(
                          null == e.parent.parent.context.$implicit
                            ? null
                            : e.parent.parent.context.$implicit
                                .favNonI18NSecondaryText$,
                        ),
                    )
                  : void 0,
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
      function Le(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              19,
              "div",
              [
                ["class", "favorite favorite--submenu"],
                ["id", "CarFavoriteSubmenu"],
                ["mib3Haptic", ""],
              ],
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
                var i = !0;
                return (
                  "mib3Tap" === e &&
                    (i =
                      !1 !==
                        t.component.carFavoritesService.executeFavorite(
                          t.parent.context.$implicit,
                        ) && i),
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
              S.a,
              [le.a, i.h, u.a, [3, S.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            i.Pb(131072, G.b, [i.h]),
            i.Pb(131072, G.b, [i.h]),
            i.xb(4, 147456, null, 0, O.a, [i.l, i.z], null, null),
            i.xb(
              5,
              212992,
              null,
              0,
              r.a,
              [i.l, i.D, s.a, u.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              6,
              147456,
              null,
              0,
              M.a,
              [O.a, [2, y.a], [2, r.a], u.a],
              null,
              null,
            ),
            i.xb(
              7,
              212992,
              null,
              0,
              o.a,
              [
                u.a,
                T.b,
                M.a,
                [2, y.a],
                [2, r.a],
                [2, S.a],
                [2, N.a],
                [2, I.a],
                i.z,
                w.a,
                i.l,
                [2, z.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.xb(
              8,
              671744,
              null,
              0,
              Me.a,
              [ye.a, lt.i, S.a, o.a, Me.b, Te.a],
              {
                routeInfo: [0, "routeInfo"],
                preventGoToRoute: [1, "preventGoToRoute"],
              },
              null,
            ),
            i.Sb(131584, null, A.a, A.a, [[3, A.a]]),
            i.xb(
              10,
              4407296,
              null,
              0,
              k.a,
              [
                i.l,
                D.a,
                i.h,
                A.a,
                [2, $.a],
                [2, y.b],
                [2, y.a],
                [2, F.a],
                [2, L.a],
              ],
              { settings: [0, "settings"] },
              null,
            ),
            i.xb(
              11,
              212992,
              null,
              0,
              a.a,
              [[2, o.a], [8, null], [3, a.a], i.l, i.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            i.xb(
              12,
              147456,
              null,
              0,
              E.a,
              [[2, o.a], [2, S.a], [2, R.a], [2, k.a], [2, H.b], i.l, B.a, j.b],
              null,
              null,
            ),
            i.xb(
              13,
              147456,
              null,
              0,
              V.a,
              [[2, k.a], [2, o.a], [2, T.b], Y.a],
              null,
              null,
            ),
            (t()(),
            i.yb(
              14,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [["class", "primary-text"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(
              15,
              212992,
              null,
              0,
              r.a,
              [i.l, i.D, s.a, u.a, [3, r.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              16,
              245760,
              null,
              0,
              c.a,
              [[6, r.a], d.a, i.h, i.l, i.D, [2, b.a], [2, g.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            i.Pb(131072, G.b, [i.h]),
            (t()(), i.hb(16777216, null, null, 1, null, Fe)),
            i.xb(
              19,
              16384,
              null,
              0,
              G.k,
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
              !i.Yb(
                e,
                1,
                0,
                i
                  .Nb(e, 2)
                  .transform(
                    null == e.parent.context.$implicit
                      ? null
                      : e.parent.context.$implicit.executable$,
                  ),
              ),
              i.Yb(
                e,
                1,
                1,
                i
                  .Nb(e, 3)
                  .transform(
                    null == e.parent.context.$implicit
                      ? null
                      : e.parent.context.$implicit.disabledReason$,
                  ),
              ),
            ),
              t(e, 5, 0, "CarFavoriteSubmenu"),
              t(e, 7, 0),
              t(
                e,
                8,
                0,
                null == e.parent.context.$implicit
                  ? null
                  : e.parent.context.$implicit.route,
                !0,
              ),
              t(e, 10, 0, ""),
              t(e, 11, 0, n.uiStateType),
              t(
                e,
                15,
                0,
                n.getText(
                  null == e.parent.context.$implicit
                    ? null
                    : e.parent.context.$implicit.name,
                  !1,
                ),
                n.carShortcutPrimaryRouteName,
              ),
              t(
                e,
                16,
                0,
                n.getText(
                  null == e.parent.context.$implicit
                    ? null
                    : e.parent.context.$implicit.name,
                  !1,
                ),
                n.getText(
                  null == e.parent.context.$implicit
                    ? null
                    : e.parent.context.$implicit.name,
                  !1,
                ),
                1,
                null != e.parent.context.$implicit &&
                  e.parent.context.$implicit.favNonI18NPrimaryText$
                  ? i.Yb(
                      e,
                      16,
                      3,
                      i
                        .Nb(e, 17)
                        .transform(
                          null == e.parent.context.$implicit
                            ? null
                            : e.parent.context.$implicit.favNonI18NPrimaryText$,
                        ),
                    )
                  : void 0,
              ),
              t(
                e,
                19,
                0,
                n.getText(
                  null == e.parent.context.$implicit
                    ? null
                    : e.parent.context.$implicit.name,
                  !0,
                ),
              ));
          },
          function (t, e) {
            (t(e, 0, 1, [
              i.Nb(e, 1).combinedDisabled,
              i.Nb(e, 1).useBrighterIcon,
              i.Nb(e, 10).markerClassEnabled,
              i.Nb(e, 11).uiStateListHorizontal,
              i.Nb(e, 11).uiStateListVertical,
              i.Nb(e, 11).uiStateCoverLeft,
              i.Nb(e, 11).uiStateCoverRight,
              i.Nb(e, 11).uiStateCoverBottom,
              i.Nb(e, 11).uiStateButton,
              i.Nb(e, 11).uiStateByDabLeft,
              i.Nb(e, 11).uiStateByDabRight,
              i.Nb(e, 11).uiStateLbDabLeft,
              i.Nb(e, 11).uiStateLbDabRight,
            ]),
              t(
                e,
                14,
                0,
                i.Nb(e, 16).backgroundColor,
                i.Nb(e, 16).fixedNumberOfLines,
                i.Nb(e, 16).mayContainLatinCharsForArabic,
                i.Nb(e, 16).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function Ee(t) {
        return i.ac(
          0,
          [
            (t()(), i.hb(16777216, null, null, 1, null, $e)),
            i.xb(
              1,
              16384,
              null,
              0,
              G.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), i.hb(0, [["submenu", 2]], null, 0, null, Le)),
          ],
          function (t, e) {
            t(
              e,
              1,
              0,
              !(null != e.context.$implicit && e.context.$implicit.isSubmenu),
              i.Nb(e, 2),
            );
          },
          null,
        );
      }
      function Re(t) {
        return i.ac(
          2,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              5,
              "au3-favorite-tile",
              [],
              [[2, "favorite-tile--configuration-mode", null]],
              [[null, "headerTapped"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "headerTapped" === e &&
                    (i = !1 !== t.component.goToContext() && i),
                  i
                );
              },
              Ot,
              ht,
            )),
            i.xb(
              1,
              49152,
              null,
              0,
              gt,
              [],
              {
                contextColor: [0, "contextColor"],
                listTitleId: [1, "listTitleId"],
                listTitle: [2, "listTitle"],
                titleIconName: [3, "titleIconName"],
                decoratorIconName: [4, "decoratorIconName"],
                favoriteItems: [5, "favoriteItems"],
                itemTemplate: [6, "itemTemplate"],
                initialized: [7, "initialized"],
                configurationModeActive: [8, "configurationModeActive"],
              },
              { headerTapped: "headerTapped" },
            ),
            i.Pb(131072, G.b, [i.h]),
            i.Pb(131072, G.b, [i.h]),
            i.Pb(131072, G.b, [i.h]),
            (t()(), i.hb(0, [["template", 2]], null, 0, null, Ee)),
          ],
          function (t, e) {
            var n = e.component;
            t(
              e,
              1,
              0,
              n.contextColor,
              "CarFavorites",
              "Fahrzeug",
              "E12D_car.webp",
              i.Yb(e, 1, 4, i.Nb(e, 2).transform(n.displayAsRs$))
                ? "/decorators/W523_Homescreen/car_rs.webp"
                : "/decorators/W523_Homescreen/car.webp",
              i.Yb(e, 1, 5, i.Nb(e, 3).transform(n.items$)),
              i.Nb(e, 5),
              i.Yb(e, 1, 7, i.Nb(e, 4).transform(n.favoriteTileInitialized$)),
              n.configurationModeActive,
            );
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 1).configurationModeActive);
          },
        );
      }
      var He = n("9N/+"),
        Be = n("9tRs");
      n("vY32");
      class je {
        constructor() {
          ((this.isActive = !1), (this.IconCategory = p.Z));
        }
      }
      var Ve = i.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block}.station[_ngcontent-%COMP%]{display:flex;height:120px;padding:0 20px}.station__name[_ngcontent-%COMP%]{padding-top:13px;width:100%}",
          ],
        ],
        data: {},
      });
      function Ye(t) {
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
                ["au3C2Cursor", ""],
                ["class", "station"],
              ],
              [
                [2, "c2-cursor", null],
                [2, "state-active", null],
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
              He.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
            i.xb(
              2,
              16384,
              null,
              0,
              Be.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
            (t()(),
            i.yb(
              3,
              0,
              null,
              null,
              4,
              "div",
              [["class", "station__name"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              4,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [["ttIgnore", ""]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(
              5,
              212992,
              null,
              0,
              r.a,
              [i.l, i.D, s.a, u.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(6, 16384, null, 0, g.a, [], null, null),
            i.xb(
              7,
              245760,
              null,
              0,
              c.a,
              [[6, r.a], d.a, i.h, i.l, i.D, [2, b.a], [2, g.a], [2, h.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, n.isActive),
              t(e, 2, 0, n.isActive),
              t(e, 5, 0, "TvStationName"),
              t(
                e,
                7,
                0,
                "TvStationName",
                null == n.tvStation ? null : n.tvStation.name,
              ));
          },
          function (t, e) {
            (t(e, 0, 0, i.Nb(e, 1).mib3Active, i.Nb(e, 2).mib3Active),
              t(
                e,
                4,
                0,
                i.Nb(e, 7).backgroundColor,
                i.Nb(e, 7).fixedNumberOfLines,
                i.Nb(e, 7).mayContainLatinCharsForArabic,
                i.Nb(e, 7).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      var Ge = n("X4XO"),
        Ue = n("jOdJ"),
        We = n("E2zj"),
        Ze = n("1hWf"),
        Ke = n("74Ku");
      class Xe {
        constructor(t, e, n, i) {
          ((this.tvService = t),
            (this.tvSettingsService = e),
            (this.mediaRoutingService = n),
            (this.configurationModeActive = !1),
            (this.contextColor = p.s.Media),
            (this.uiStateType = p.uc.ListHorizontal),
            (this.isInitialized$$ = new Tt.a(!1)),
            (this.favoriteSourceType = pe.g.TVFAVORITES),
            (this.destroy$$ = new St.a(1)),
            (this.logger = i.getLogger("tv.TvFavoritesComponent")),
            this.setIsInitialized());
        }
        ngOnDestroy() {
          (this.destroy$$.next(), this.destroy$$.complete());
        }
        tvStationClicked(t) {
          (this.logger.debug("tvStationClicked: tvStation:", t),
            this.tvService
              .activateEntertainmentSourceBySourceType$(this.favoriteSourceType)
              .pipe(
                Object(Ue.a)(),
                Object(ue.a)(this.destroy$$),
                Object(wt.a)(() =>
                  this.tvService
                    .findAndTuneTvFavoriteStationById$(t.id)
                    .pipe(Object(Ue.a)(), Object(ue.a)(this.destroy$$)),
                ),
              )
              .subscribe((t) => {
                (this.logger.info(
                  "tvStationClicked: Updated station, response:",
                  t,
                ),
                  this.mediaRoutingService.goToTvOsd());
              }));
        }
        goToContext() {
          this.tvService
            .activateEntertainmentSourceBySourceType$(this.favoriteSourceType)
            .pipe(Object(Ue.a)())
            .subscribe(() => {
              this.mediaRoutingService.goToTvRouteAccordingTunerState();
            });
        }
        setIsInitialized() {
          Object(It.b)(
            this.tvSettingsService.isTvTunerAvailable$,
            this.tvService.tvTuners$.pipe(
              Object(zt.a)((t) => !!t.find((t) => t.type === Ge.s.FAVORITES)),
            ),
          )
            .pipe(
              Object(p.pd)(this.logger, "setIsInitialized:"),
              Object(zt.a)(([t, e]) => t && e),
              Object(ue.a)(this.destroy$$),
            )
            .subscribe((t) => this.isInitialized$$.next(t));
        }
      }
      var Je = i.wb({
        encapsulation: 0,
        styles: [
          [
            '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:block;height:100%}',
          ],
        ],
        data: {},
      });
      function qe(t) {
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
              "au3-tv-favorites-item",
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
              ],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "mib3Tap" === e &&
                    (i =
                      !1 !==
                        t.component.tvStationClicked(t.context.$implicit) && i),
                  i
                );
              },
              Ye,
              Ve,
            )),
            i.xb(1, 147456, null, 0, O.a, [i.l, i.z], null, null),
            i.xb(
              2,
              147456,
              null,
              0,
              M.a,
              [O.a, [2, y.a], [2, r.a], u.a],
              null,
              null,
            ),
            i.xb(
              3,
              212992,
              null,
              0,
              o.a,
              [
                u.a,
                T.b,
                M.a,
                [2, y.a],
                [2, r.a],
                [2, S.a],
                [2, N.a],
                [2, I.a],
                i.z,
                w.a,
                i.l,
                [2, z.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.Sb(131584, null, A.a, A.a, [[3, A.a]]),
            i.xb(
              5,
              4407296,
              null,
              0,
              k.a,
              [
                i.l,
                D.a,
                i.h,
                A.a,
                [2, $.a],
                [2, y.b],
                [2, y.a],
                [2, F.a],
                [2, L.a],
              ],
              null,
              null,
            ),
            i.xb(
              6,
              212992,
              null,
              0,
              a.a,
              [[2, o.a], [8, null], [3, a.a], i.l, i.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            i.xb(
              7,
              147456,
              null,
              0,
              E.a,
              [[2, o.a], [2, S.a], [2, R.a], [2, k.a], [2, H.b], i.l, B.a, j.b],
              null,
              null,
            ),
            i.xb(
              8,
              147456,
              null,
              0,
              V.a,
              [[2, k.a], [2, o.a], [2, T.b], Y.a],
              null,
              null,
            ),
            i.xb(
              9,
              49152,
              null,
              0,
              je,
              [],
              { isActive: [0, "isActive"], tvStation: [1, "tvStation"] },
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
                9,
                0,
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.hasSelectedStation,
                e.context.$implicit,
              ));
          },
          function (t, e) {
            t(e, 0, 1, [
              i.Nb(e, 5).markerClassEnabled,
              i.Nb(e, 6).uiStateListHorizontal,
              i.Nb(e, 6).uiStateListVertical,
              i.Nb(e, 6).uiStateCoverLeft,
              i.Nb(e, 6).uiStateCoverRight,
              i.Nb(e, 6).uiStateCoverBottom,
              i.Nb(e, 6).uiStateButton,
              i.Nb(e, 6).uiStateByDabLeft,
              i.Nb(e, 6).uiStateByDabRight,
              i.Nb(e, 6).uiStateLbDabLeft,
              i.Nb(e, 6).uiStateLbDabRight,
            ]);
          },
        );
      }
      function Qe(t) {
        return i.ac(
          2,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-favorite-tile",
              [],
              [[2, "favorite-tile--configuration-mode", null]],
              [[null, "headerTapped"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "headerTapped" === e &&
                    (i = !1 !== t.component.goToContext() && i),
                  i
                );
              },
              Ot,
              ht,
            )),
            i.xb(
              1,
              49152,
              null,
              0,
              gt,
              [],
              {
                contextColor: [0, "contextColor"],
                listTitleId: [1, "listTitleId"],
                listTitle: [2, "listTitle"],
                titleIconName: [3, "titleIconName"],
                decoratorIconName: [4, "decoratorIconName"],
                favoriteItems: [5, "favoriteItems"],
                itemTemplate: [6, "itemTemplate"],
                initialized: [7, "initialized"],
                configurationModeActive: [8, "configurationModeActive"],
              },
              { headerTapped: "headerTapped" },
            ),
            i.Pb(131072, G.b, [i.h]),
            i.Pb(131072, G.b, [i.h]),
            (t()(),
            i.hb(0, [["tvStationListItemTemplate", 2]], null, 0, null, qe)),
          ],
          function (t, e) {
            var n = e.component;
            t(
              e,
              1,
              0,
              n.contextColor,
              "TVFavorites",
              "TV",
              "E07F_media_tv.webp",
              "/decorators/W523_Homescreen/tv.webp",
              i.Yb(
                e,
                1,
                5,
                i.Nb(e, 2).transform(n.tvService.favoriteStations$),
              ),
              i.Nb(e, 4),
              i.Yb(e, 1, 7, i.Nb(e, 3).transform(n.isInitialized$$)),
              n.configurationModeActive,
            );
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 1).configurationModeActive);
          },
        );
      }
      var tn = n("vwU6"),
        en = n("HLQW"),
        nn = n("YcCK"),
        an = n("Xast"),
        on = n("iQ+n"),
        ln = n("jgeG"),
        rn = n("nSAP"),
        sn =
          (n("EWkU"),
          n("M+lD"),
          n("llYL"),
          n("qzuC"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;position:relative;height:100%;width:100%}.favorites[_ngcontent-%COMP%]{padding-top:10px}.favorites__list[_ngcontent-%COMP%]{height:100%}.favorites__list.mib3-drag-start[_ngcontent-%COMP%]{visibility:hidden}.favorites__list.favorites__list--editing[_ngcontent-%COMP%]{opacity:.5}.favorites__list.mib3-drag-over[_ngcontent-%COMP%]{opacity:1}.favorites__list.favorite-list--editing-over-edge[_ngcontent-%COMP%]{opacity:.5}.favorites__list.mib3-dragged[_ngcontent-%COMP%]{opacity:1}.favorites--configuration-mode[_nghost-%COMP%]   .favorites[_ngcontent-%COMP%]{padding:64px 122px 0}.favorites__edge[_ngcontent-%COMP%]{visibility:hidden;position:absolute;top:0;height:100%}.favorites__edge--previous-page[_ngcontent-%COMP%]{left:-30px;width:160px;background-image:linear-gradient(90deg,#000 0,transparent)}.component-layout-arabic[_nghost-%COMP%]   .favorites__edge--previous-page[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .favorites__edge--previous-page[_ngcontent-%COMP%]{left:unset;right:-30px;background-image:linear-gradient(270deg,#000 0,transparent)}.favorites__edge--next-page[_ngcontent-%COMP%]{right:-30px;width:160px;background-image:linear-gradient(270deg,#000 0,transparent)}.component-layout-arabic[_nghost-%COMP%]   .favorites__edge--next-page[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .favorites__edge--next-page[_ngcontent-%COMP%]{left:-30px;right:unset;background-image:linear-gradient(90deg,#000 0,transparent)}",
              ],
            ],
            data: {},
          }));
      function un(t) {
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
              "au3-navi-favorites",
              [["id", "NaviFavorites"]],
              null,
              null,
              null,
              Wt,
              jt,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              r.a,
              [i.l, i.D, s.a, u.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              245760,
              null,
              0,
              Et,
              [Dt.c, Rt.a, Lt.a, Ht.a, Bt.a, Ft.a, u.a],
              { configurationModeActive: [0, "configurationModeActive"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "NaviFavorites"),
              t(e, 2, 0, n.configurationModeActive));
          },
          null,
        );
      }
      function cn(t) {
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
              "au3-phone-favorites",
              [["id", "PhoneFavorites"]],
              null,
              null,
              null,
              ae,
              ee,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              r.a,
              [i.l, i.D, s.a, u.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              49152,
              null,
              0,
              te,
              [Zt.a, Kt.a, Xt.c, qt.a, u.a],
              { configurationModeActive: [0, "configurationModeActive"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "PhoneFavorites"),
              t(e, 2, 0, n.configurationModeActive));
          },
          null,
        );
      }
      function dn(t) {
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
              "au3-radio-favorites",
              [["id", "RadioFavorites"]],
              null,
              null,
              null,
              xe,
              ve,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              r.a,
              [i.l, i.D, s.a, u.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              180224,
              null,
              0,
              fe,
              [ce.b, me.a, he.a, de.c, u.a],
              { configurationModeActive: [0, "configurationModeActive"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "RadioFavorites"),
              t(e, 2, 0, n.configurationModeActive));
          },
          null,
        );
      }
      function bn(t) {
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
              "au3-car-favorites",
              [["id", "CarFavorites"]],
              null,
              null,
              null,
              Re,
              De,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              r.a,
              [i.l, i.D, s.a, u.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              49152,
              null,
              0,
              ke,
              [we.a, ye.a, Ae.a],
              { configurationModeActive: [0, "configurationModeActive"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "CarFavorites"), t(e, 2, 0, n.configurationModeActive));
          },
          null,
        );
      }
      function gn(t) {
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
              "au3-tv-favorites",
              [["id", "TvFavorites"]],
              null,
              null,
              null,
              Qe,
              Je,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              r.a,
              [i.l, i.D, s.a, u.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              180224,
              null,
              0,
              Xe,
              [Ke.a, Ze.a, We.b, u.a],
              { configurationModeActive: [0, "configurationModeActive"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "TvFavorites"), t(e, 2, 0, n.configurationModeActive));
          },
          null,
        );
      }
      function hn(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              16,
              "div",
              [
                ["class", "favorites__list"],
                ["mib3DropTarget", ""],
              ],
              [[2, "favorites__list--editing", null]],
              [[null, "mib3Longpress"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "mib3Longpress" === e &&
                    (i = !1 !== t.component.tileLongpressed() && i),
                  i
                );
              },
              null,
              null,
            )),
            i.xb(
              1,
              16384,
              null,
              0,
              G.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            i.xb(2, 147456, null, 0, O.a, [i.l, i.z], null, null),
            i.xb(
              3,
              147456,
              null,
              0,
              M.a,
              [O.a, [2, y.a], [2, r.a], u.a],
              { forceTouch: [0, "forceTouch"] },
              null,
            ),
            i.xb(
              4,
              212992,
              [[7, 4]],
              0,
              tn.a,
              [
                u.a,
                i.z,
                i.l,
                T.b,
                w.a,
                M.a,
                [2, y.a],
                [2, r.a],
                [2, S.a],
                [2, N.a],
                [2, I.a],
                [2, z.a],
              ],
              { forceTouchOverride: [0, "forceTouchOverride"] },
              { longpress: "mib3Longpress" },
            ),
            i.xb(
              5,
              16384,
              [
                [6, 4],
                [4, 4],
              ],
              0,
              en.a,
              [i.l],
              { dragDropData: [0, "dragDropData"] },
              null,
            ),
            i.xb(
              6,
              147456,
              null,
              0,
              nn.a,
              [[2, tn.a], i.l, B.a, j.b],
              null,
              null,
            ),
            (t()(), i.hb(16777216, [[8, 2]], null, 1, null, un)),
            i.xb(
              8,
              278528,
              null,
              0,
              G.p,
              [i.P, i.L, G.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), i.hb(16777216, [[8, 2]], null, 1, null, cn)),
            i.xb(
              10,
              278528,
              null,
              0,
              G.p,
              [i.P, i.L, G.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), i.hb(16777216, [[8, 2]], null, 1, null, dn)),
            i.xb(
              12,
              278528,
              null,
              0,
              G.p,
              [i.P, i.L, G.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), i.hb(16777216, [[8, 2]], null, 1, null, bn)),
            i.xb(
              14,
              278528,
              null,
              0,
              G.p,
              [i.P, i.L, G.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), i.hb(16777216, [[8, 2]], null, 1, null, gn)),
            i.xb(
              16,
              278528,
              null,
              0,
              G.p,
              [i.P, i.L, G.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(
              e,
              1,
              0,
              null == e.context.$implicit ? null : e.context.$implicit.type,
            ),
              t(e, 3, 0, !n.configurationModeActive && void 0),
              t(e, 4, 0, !n.configurationModeActive && void 0),
              t(
                e,
                5,
                0,
                null == e.context.$implicit ? null : e.context.$implicit.type,
              ),
              t(e, 8, 0, n.favoriteListTypeEnum.Navi),
              t(e, 10, 0, n.favoriteListTypeEnum.Phone),
              t(e, 12, 0, n.favoriteListTypeEnum.Radio),
              t(e, 14, 0, n.favoriteListTypeEnum.Car),
              t(e, 16, 0, n.favoriteListTypeEnum.TV));
          },
          function (t, e) {
            t(e, 0, 0, e.component.editingFavoritesOrder);
          },
        );
      }
      function pn(t) {
        return i.ac(
          2,
          [
            i.Tb(402653184, 1, { tileGrid: 0 }),
            i.Tb(402653184, 2, { previousPageEdge: 0 }),
            i.Tb(402653184, 3, { nextPageEdge: 0 }),
            i.Tb(671088640, 4, { favoriteListTiles: 1 }),
            i.Tb(402653184, 5, { dragDropArea: 0 }),
            (t()(),
            i.yb(
              5,
              0,
              null,
              null,
              10,
              "au3-tile-grid",
              [
                ["class", "favorites"],
                ["id", ""],
                ["mib3DragDrop", "favorites-overview"],
              ],
              null,
              [
                [null, "mib3Drop"],
                [null, "mib3DragDropPosition"],
              ],
              function (t, e, n) {
                var i = !0,
                  a = t.component;
                return (
                  "mib3Drop" === e && (i = !1 !== a.dropItem(n) && i),
                  "mib3DragDropPosition" === e &&
                    (i = !1 !== a.tileDragged(n) && i),
                  i
                );
              },
              an.b,
              an.a,
            )),
            i.xb(
              6,
              212992,
              null,
              0,
              r.a,
              [i.l, i.D, s.a, u.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              7,
              4407296,
              [[5, 4]],
              2,
              on.a,
              [i.l, i.z, ot.a, T.b, et.a, [2, B.a], u.a, j.b],
              {
                areaName: [0, "areaName"],
                dragOptions: [1, "dragOptions"],
                mib3DragDropOverFeedback: [2, "mib3DragDropOverFeedback"],
              },
              {
                mib3Drop: "mib3Drop",
                mib3DragDropPosition: "mib3DragDropPosition",
              },
            ),
            i.Tb(603979776, 6, { dropTargetDirectives: 1 }),
            i.Tb(603979776, 7, { longpressDirectives: 1 }),
            i.Qb(10, { dragImageWidth: 0, dragImageHeight: 1 }),
            i.Sb(131584, null, A.a, A.a, [[3, A.a]]),
            i.Sb(512, null, R.a, R.a, [y.a]),
            i.xb(
              13,
              1032192,
              [[1, 4]],
              1,
              ln.a,
              [i.s, i.h, rn.a, A.a, R.a, y.a, u.a],
              {
                paddingGridToIndicator: [0, "paddingGridToIndicator"],
                columns: [1, "columns"],
                rows: [2, "rows"],
                responsiveColumnSize: [3, "responsiveColumnSize"],
                trackTile: [4, "trackTile"],
                trackPageIndex: [5, "trackPageIndex"],
                tiles: [6, "tiles"],
              },
              null,
            ),
            i.Tb(603979776, 8, { template: 0 }),
            (t()(), i.hb(0, [[8, 2]], null, 0, null, hn)),
            (t()(),
            i.yb(
              16,
              0,
              [
                [2, 0],
                ["previousPageEdge", 1],
              ],
              null,
              0,
              "div",
              [["class", "favorites__edge favorites__edge--previous-page"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              17,
              0,
              [
                [3, 0],
                ["nextPageEdge", 1],
              ],
              null,
              0,
              "div",
              [["class", "favorites__edge favorites__edge--next-page"]],
              null,
              null,
              null,
              null,
              null,
            )),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 6, 0, "");
            var i = t(e, 10, 0, 205, 225);
            (t(e, 7, 0, "favorites-overview", i, n.dragDropOverFeedback),
              t(e, 13, 0, 15, 3, 1, !0, n.trackTiles, !0, n.favoriteLists));
          },
          null,
        );
      }
    },
    uz0P: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return a;
        }));
      class i {}
      class a {}
    },
  },
]);
