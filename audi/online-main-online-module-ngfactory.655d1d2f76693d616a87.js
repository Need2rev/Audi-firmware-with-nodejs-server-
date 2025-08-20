(window.webpackJsonp = window.webpackJsonp || []).push([
  [92, 94, 108],
  {
    "89Z2": function (n, l, t) {
      "use strict";
      (t.d(l, "a", function () {
        return i;
      }),
        t.d(l, "b", function () {
          return o;
        }));
      var e = t("kZht"),
        i =
          (t("kqft"),
          t("+sw+"),
          t("FfND"),
          t("bou3"),
          t("yNay"),
          e.wb({
            encapsulation: 0,
            styles: [
              [
                "[_nghost-%COMP%]{display:block;position:relative;height:100%;width:100%}",
              ],
            ],
            data: {
              animation: [
                {
                  type: 7,
                  name: "screenChange",
                  definitions: [
                    {
                      type: 0,
                      name: "*",
                      styles: { type: 6, styles: { opacity: 0 }, offset: null },
                      options: void 0,
                    },
                    {
                      type: 0,
                      name: "visible",
                      styles: { type: 6, styles: { opacity: 1 }, offset: null },
                      options: void 0,
                    },
                    {
                      type: 1,
                      expr: "void => visible",
                      animation: [],
                      options: null,
                    },
                    {
                      type: 1,
                      expr: "visible => upwards",
                      animation: [
                        {
                          type: 11,
                          selector: ":leave",
                          animation: {
                            type: 6,
                            styles: {
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                            },
                            offset: null,
                          },
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: ":enter",
                          animation: {
                            type: 6,
                            styles: {
                              opacity: 0,
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                            },
                            offset: null,
                          },
                          options: { optional: !0 },
                        },
                        {
                          type: 2,
                          steps: [
                            {
                              type: 11,
                              selector: ":leave",
                              animation: [
                                {
                                  type: 4,
                                  styles: {
                                    type: 6,
                                    styles: {
                                      opacity: 0,
                                      transform: "scale(0.9)",
                                    },
                                    offset: null,
                                  },
                                  timings:
                                    "125ms cubic-bezier(.22,.43,.57,.85)",
                                },
                              ],
                              options: { optional: !0 },
                            },
                          ],
                          options: null,
                        },
                      ],
                      options: null,
                    },
                    {
                      type: 1,
                      expr: "visible => downwards",
                      animation: [
                        {
                          type: 11,
                          selector: ":leave",
                          animation: {
                            type: 6,
                            styles: {
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                            },
                            offset: null,
                          },
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: ":enter",
                          animation: {
                            type: 6,
                            styles: {
                              opacity: 0,
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                            },
                            offset: null,
                          },
                          options: { optional: !0 },
                        },
                        {
                          type: 2,
                          steps: [
                            {
                              type: 11,
                              selector: ":leave",
                              animation: [
                                {
                                  type: 4,
                                  styles: {
                                    type: 6,
                                    styles: {
                                      opacity: 0,
                                      transform: "scale(1.1)",
                                    },
                                    offset: null,
                                  },
                                  timings:
                                    "125ms cubic-bezier(.22,.43,.57,.85)",
                                },
                              ],
                              options: { optional: !0 },
                            },
                          ],
                          options: null,
                        },
                      ],
                      options: null,
                    },
                    {
                      type: 1,
                      expr: "upwards => visible",
                      animation: [
                        {
                          type: 6,
                          styles: { opacity: 0, transform: "scale(1.1" },
                          offset: null,
                        },
                        {
                          type: 4,
                          styles: null,
                          timings: "125ms cubic-bezier(.22,.43,.57,.85)",
                        },
                      ],
                      options: null,
                    },
                    {
                      type: 1,
                      expr: "downwards => visible",
                      animation: [
                        {
                          type: 6,
                          styles: { opacity: 0, transform: "scale(0.9)" },
                          offset: null,
                        },
                        {
                          type: 4,
                          styles: null,
                          timings: "125ms cubic-bezier(.22,.43,.57,.85)",
                        },
                      ],
                      options: null,
                    },
                  ],
                  options: {},
                },
              ],
            },
          }));
      function o(n) {
        return e.ac(2, [e.Mb(null, 0)], null, null);
      }
    },
    Ah1p: function (n, l, t) {
      "use strict";
      t.d(l, "a", function () {
        return e;
      });
      var e = (function (n) {
        return (
          (n.FIRST_TIME_USE =
            "Der Shop bietet Ihnen die M\xf6glichkeit mit Hilfe\nIhres myAudi Accounts eine Vielzahl an\nFahrzeugfunktionen on Demand zu erwerben."),
          (n.SERVICING =
            "Der Shop wird zur Zeit gewartet.\nVersuchen Sie es zu einem sp\xe4teren Zeitpunkt erneut.\nWir bitten um Ihr Verst\xe4ndnis.\n"),
          (n.NOT_AVAILABLE =
            "Der Dienst konnte nicht geladen werden.\nBitte versuchen Sie es zu einem sp\xe4teren Zeitpunkt\nerneut.\n"),
          (n.OFFLINE =
            "Um Den Shop nutzen zu k\xf6nnen, ben\xf6tigen Sie eine Online-Verbindung.\nSie k\xf6nnen sich auch ohne Internetverbindung die bereits gekauften\nFunktionen anzeigen lassen."),
          (n.NO_LOGIN =
            "Um den Shop nutzen zu k\xf6nnen, melden Sie sich bitte bei myAudi an. Sie\nk\xf6nnen sich auch ohne Anmeldung die bereits gekauften Funktonen\nansehen."),
          (n.BOUGHT_FUNCTIONS = ""),
          n
        );
      })({});
    },
    VUTu: function (n, l, t) {
      "use strict";
      (t.d(l, "a", function () {
        return y;
      }),
        t.d(l, "b", function () {
          return L;
        }));
      var e = t("kZht"),
        i = t("HVUF"),
        o = t("B3Zb"),
        a = t("yNay"),
        u = t("8TlW"),
        r = t("fu7d"),
        c = t("bou3"),
        s = t("ijxY"),
        b = t("Xo58"),
        p = t("m3Ja"),
        d = t("r+e+"),
        m = t("bmFL"),
        h = t("T8E5"),
        x = t("An66"),
        f = t("gKAS"),
        g = t("Brsi"),
        y =
          (t("nK9R"),
          t("qzuC"),
          t("8yWk"),
          e.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);position:relative;display:flex;flex-direction:row;flex:0 0 auto;color:#fff;height:119px;border-style:solid;border-width:0 0 2px;border-image:linear-gradient(90deg,hsla(0,0%,87.1%,.7) 0,hsla(0,0%,87.1%,.9) 36%,hsla(0,0%,87.1%,.4)) 1 1;z-index:10;transform:translateZ(0)}[_nghost-%COMP%]   .fpk-stage-big[_nghost-%COMP%], .fpk-stage-big   [_nghost-%COMP%], [_nghost-%COMP%]   .fpk-stage-small[_nghost-%COMP%], .fpk-stage-small   [_nghost-%COMP%]{border:none}[_nghost-%COMP%]     au3-button .button__text{font-size:30px}[_nghost-%COMP%]:after{content:"";position:absolute;bottom:-7px;left:0;width:100%;height:5px;background:linear-gradient(180deg,#000,transparent)}.tl--text-only[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{border-left:0}.tl--no-dividing-border[_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%], .tl--no-dividing-border[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{border-image:none;border-style:none}.title-line__content--left[_ngcontent-%COMP%]{display:inline-flex;flex-direction:row;align-self:center;margin-right:auto}.title-line__breadcrumbs[_ngcontent-%COMP%]{position:absolute;align-self:center;margin-right:2px}.title-line__content-wrapper--center[_ngcontent-%COMP%]{position:relative;flex:1 0 0;align-self:center;font-size:40px;height:119px;border-style:solid;border-image:linear-gradient(0deg,hsla(0,0%,100%,.7),transparent 80%) 1 2%;display:flex;flex-direction:row}.title-line__content-wrapper--center[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-1px;width:2px;height:2px;background:#000}.title-line__content--center[_ngcontent-%COMP%]{position:relative;flex:1 0 0}.title-line__loader[_ngcontent-%COMP%]{padding-top:12px;display:block;opacity:0;overflow:hidden}.title-line__loader--visible[_ngcontent-%COMP%]{opacity:1}.title-line__loader--display-none[_ngcontent-%COMP%]{display:none}.steering-wheel-left[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{margin-right:2px;border-width:0 0 0 1px}.steering-wheel-left[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after, .steering-wheel-left   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after{left:auto;right:-2px}.steering-wheel-left[_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%]{padding:0 0 0 30px}.steering-wheel-right[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{margin-left:2px;border-width:0 1px 0 0}.steering-wheel-right[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after, .steering-wheel-right   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after{left:-2px;right:auto}.steering-wheel-right[_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%]{padding:0 30px 0 0}.title-line__content--right[_ngcontent-%COMP%]{display:inline-flex;flex-direction:row;align-self:center;text-align:end}.content__title[_ngcontent-%COMP%]{position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:100%;height:100%;padding:12px 20px 0}.content__title--loader[_ngcontent-%COMP%]{padding-left:20px}.content__title--primary[_ngcontent-%COMP%]{color:var(--current-context);font-size:30px;width:100%}.content__title--primary[_ngcontent-%COMP%], .content__title--secondary[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.component-layout-arabic[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{direction:rtl}.component-layout-latin[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{direction:ltr}.secondary-title__wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;flex:1 1 0;overflow:hidden;max-width:100%;width:100%}.content__title--icon[_ngcontent-%COMP%]{margin:0 30px 0 10px}.content__title--separator[_ngcontent-%COMP%]{padding:0 22px;color:var(--current-context)}@media (max-width:1280px){.content__title[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.content__title--loader[_ngcontent-%COMP%]{padding-left:20px}.content__title--primary[_ngcontent-%COMP%]{font-size:30px;width:100%}.content__title--separator[_ngcontent-%COMP%]{display:none}}.title-line__content--text-input[_ngcontent-%COMP%]{position:relative;flex:1;display:flex;align-items:flex-end;min-width:0;direction:ltr;font-size:40px;height:calc(100% + 2px);padding:0 30px;border-style:solid;border-image:linear-gradient(0deg,hsla(0,0%,100%,.7),transparent 80%) 1 2%}.title-line__content--text-input[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;bottom:0;height:2px;width:100%;background-color:#000}.title-line__content--hidden[_ngcontent-%COMP%]{display:none}.steering-wheel-left[_nghost-%COMP%], .steering-wheel-left   [_nghost-%COMP%]{direction:ltr}.steering-wheel-left[_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%]{border-width:0 0 0 1px}.steering-wheel-right[_nghost-%COMP%], .steering-wheel-right   [_nghost-%COMP%]{direction:rtl}.steering-wheel-right[_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%]{border-width:0 1px 0 0}',
              ],
            ],
            data: {},
          }));
      function _(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [
                ["class", "title-line__breadcrumbs"],
                ["fileName", "E163_breadcrump_back.webp"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              i.b,
              i.a,
            )),
            e.xb(
              1,
              4243456,
              null,
              0,
              o.b,
              [a.a, e.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (n, l) {
            n(
              l,
              1,
              0,
              "E163_breadcrump_back.webp",
              l.component.iconCategoryBreadcrumb,
            );
          },
          function (n, l) {
            n(l, 0, 0, e.Nb(l, 1).iconComponentHidden);
          },
        );
      }
      function T(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
      function O(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              1,
              "div",
              [["class", "title-line__content--text-input"]],
              [[2, "title-line__content--text-input-no-right-padding", null]],
              null,
              null,
              null,
              null,
            )),
            e.Mb(null, 1),
          ],
          null,
          function (n, l) {
            n(l, 0, 0, l.component.hideRightPadding);
          },
        );
      }
      function I(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "content__title--primary"],
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
            e.xb(
              1,
              212992,
              null,
              0,
              r.a,
              [e.l, e.D, c.a, a.a, [3, r.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            e.xb(
              2,
              16384,
              null,
              0,
              s.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            e.xb(
              3,
              245760,
              null,
              0,
              b.a,
              [[6, r.a], p.a, e.h, e.l, e.D, [2, d.a], [2, s.a], [2, m.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (n, l) {
            var t = l.component;
            (n(l, 1, 0, t.primaryId, t.primaryIdEnumType),
              n(
                l,
                2,
                0,
                !t.hasPrimaryText ||
                  !(t.primaryIdEnumType || t.primaryDeveloperText),
              ),
              n(
                l,
                3,
                0,
                t.primaryDeveloperText,
                t.primaryId,
                t.primaryNonI18nText,
              ));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              e.Nb(l, 3).backgroundColor,
              e.Nb(l, 3).fixedNumberOfLines,
              e.Nb(l, 3).mayContainLatinCharsForArabic,
              e.Nb(l, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function C(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "content__title--icon"],
                ["ttDoNotToggle", ""],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              i.b,
              i.a,
            )),
            e.xb(
              1,
              16384,
              null,
              0,
              h.a,
              [],
              { ttDoNotToggleDynamicValue: [0, "ttDoNotToggleDynamicValue"] },
              null,
            ),
            e.xb(
              2,
              4243456,
              null,
              0,
              o.b,
              [a.a, e.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (n, l) {
            var t = l.component;
            (n(l, 1, 0, !t.possibleIcon),
              n(l, 2, 0, t.icon, t.iconCategoryBreadcrumb));
          },
          function (n, l) {
            n(l, 0, 0, e.Nb(l, 2).iconComponentHidden);
          },
        );
      }
      function P(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              7,
              "div",
              [
                ["class", "secondary-title__wrapper"],
                ["id", "SecondaryText"],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              r.a,
              [e.l, e.D, c.a, a.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (n()(),
            e.yb(
              2,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "content__title--secondary"],
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
            e.xb(
              3,
              212992,
              null,
              0,
              r.a,
              [e.l, e.D, c.a, a.a, [3, r.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            e.xb(
              4,
              16384,
              null,
              0,
              s.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            e.xb(
              5,
              245760,
              null,
              0,
              b.a,
              [[6, r.a], p.a, e.h, e.l, e.D, [2, d.a], [2, s.a], [2, m.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
            (n()(), e.hb(16777216, null, null, 1, null, C)),
            e.xb(
              7,
              16384,
              null,
              0,
              x.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, l) {
            var t = l.component;
            (n(l, 1, 0, "SecondaryText"),
              n(l, 3, 0, t.secondaryId, t.secondaryIdEnumType),
              n(
                l,
                4,
                0,
                !t.hasSecondaryText ||
                  !(t.secondaryIdEnumType || t.secondaryDeveloperText),
              ),
              n(
                l,
                5,
                0,
                t.secondaryDeveloperText,
                t.secondaryId,
                t.secondaryNonI18nText,
              ),
              n(l, 7, 0, !!t.icon));
          },
          function (n, l) {
            n(
              l,
              2,
              0,
              e.Nb(l, 5).backgroundColor,
              e.Nb(l, 5).fixedNumberOfLines,
              e.Nb(l, 5).mayContainLatinCharsForArabic,
              e.Nb(l, 5).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function N(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-title-line-loader-item",
              [["class", "title-line__loader"]],
              [
                [2, "title-line__loader--display-none", null],
                [2, "title-line__loader--visible", null],
              ],
              null,
              null,
              f.b,
              f.a,
            )),
            e.xb(
              1,
              49152,
              null,
              0,
              g.a,
              [],
              { animated: [0, "animated"] },
              null,
            ),
          ],
          function (n, l) {
            n(l, 1, 0, l.component.loaderActive);
          },
          function (n, l) {
            var t = l.component;
            n(l, 0, 0, !t.textToolHasLoader, t.loaderActive);
          },
        );
      }
      function M(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              8,
              "div",
              [["class", "title-line__content-wrapper--center"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            e.yb(
              1,
              0,
              null,
              null,
              5,
              "div",
              [["class", "title-line__content--center"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            e.yb(
              2,
              0,
              null,
              null,
              4,
              "div",
              [["class", "content__title"]],
              [[2, "content__title--loader", null]],
              null,
              null,
              null,
              null,
            )),
            (n()(), e.hb(16777216, null, null, 1, null, I)),
            e.xb(
              4,
              16384,
              null,
              0,
              x.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), e.hb(16777216, null, null, 1, null, P)),
            e.xb(
              6,
              16384,
              null,
              0,
              x.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), e.hb(16777216, null, null, 1, null, N)),
            e.xb(
              8,
              16384,
              null,
              0,
              x.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, l) {
            var t = l.component;
            (n(l, 4, 0, t.hasPrimaryText),
              n(l, 6, 0, t.hasSecondaryText),
              n(l, 8, 0, t.hasLoader));
          },
          function (n, l) {
            n(l, 2, 0, l.component.hasLoader);
          },
        );
      }
      function v(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
      function D(n) {
        return e.ac(
          0,
          [e.Mb(null, 3), (n()(), e.hb(0, null, null, 0))],
          null,
          null,
        );
      }
      function S(n) {
        return e.ac(
          0,
          [e.Mb(null, 4), (n()(), e.hb(0, null, null, 0))],
          null,
          null,
        );
      }
      function L(n) {
        return e.ac(
          2,
          [
            (n()(), e.hb(16777216, null, null, 1, null, _)),
            e.xb(
              1,
              16384,
              null,
              0,
              x.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            e.yb(
              2,
              0,
              null,
              null,
              4,
              "div",
              [["class", "title-line__content--left"]],
              null,
              null,
              null,
              null,
              null,
            )),
            e.Mb(null, 0),
            (n()(), e.hb(16777216, null, null, 2, null, T)),
            e.xb(
              5,
              540672,
              null,
              0,
              x.r,
              [e.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            e.Pb(131072, x.b, [e.h]),
            (n()(), e.hb(16777216, null, null, 1, null, O)),
            e.xb(
              8,
              16384,
              null,
              0,
              x.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), e.hb(0, [["center", 2]], null, 0, null, M)),
            (n()(),
            e.yb(
              10,
              0,
              null,
              null,
              4,
              "div",
              [["class", "title-line__content--right"]],
              null,
              null,
              null,
              null,
              null,
            )),
            e.Mb(null, 2),
            (n()(), e.hb(16777216, null, null, 2, null, v)),
            e.xb(
              13,
              540672,
              null,
              0,
              x.r,
              [e.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            e.Pb(131072, x.b, [e.h]),
            (n()(), e.hb(0, [["done", 2]], null, 0, null, D)),
            (n()(), e.hb(0, [["edit", 2]], null, 0, null, S)),
          ],
          function (n, l) {
            var t = l.component;
            (n(l, 1, 0, t.showBreadcrumbsIcon),
              n(
                l,
                5,
                0,
                e.Yb(l, 5, 0, e.Nb(l, 6).transform(t.editButtonLeft$))
                  ? e.Nb(l, 16)
                  : e.Nb(l, 15),
              ),
              n(l, 8, 0, t.hasTextInput, e.Nb(l, 9)),
              n(
                l,
                13,
                0,
                e.Yb(l, 13, 0, e.Nb(l, 14).transform(t.editButtonLeft$))
                  ? e.Nb(l, 15)
                  : e.Nb(l, 16),
              ));
          },
          null,
        );
      }
    },
    Z2XD: function (n, l, t) {
      "use strict";
      (t.d(l, "a", function () {
        return i;
      }),
        t.d(l, "b", function () {
          return o;
        }));
      var e = t("kZht"),
        i =
          (t("y9xZ"),
          t("yNay"),
          e.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;padding:16px 48px 25px}.steering-wheel-left[_nghost-%COMP%], .steering-wheel-left   [_nghost-%COMP%]{padding-right:56px}.steering-wheel-right[_nghost-%COMP%], .steering-wheel-right   [_nghost-%COMP%]{padding-left:56px}",
              ],
            ],
            data: {},
          }));
      function o(n) {
        return e.ac(0, [e.Mb(null, 0)], null, null);
      }
    },
    eZMD: function (n, l, t) {
      "use strict";
      (t.d(l, "a", function () {
        return m;
      }),
        t.d(l, "b", function () {
          return f;
        }));
      var e = t("kZht"),
        i = t("8TlW"),
        o = t("fu7d"),
        a = t("bou3"),
        u = t("yNay"),
        r = t("ijxY"),
        c = t("Xo58"),
        s = t("m3Ja"),
        b = t("r+e+"),
        p = t("bmFL"),
        d = t("An66"),
        m =
          (t("HD2x"),
          e.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;max-height:100%;max-width:100%;overflow:hidden}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;text-align:center;flex:1 1 0;font-size:40px;min-height:0}.secondary-text[_ngcontent-%COMP%]{padding-top:40px;font-size:30px}[_nghost-%COMP%]     [instruction-text-operational-panel], [_nghost-%COMP%]     au3-operation-panel{padding-top:9px;padding-bottom:8px}.component-layout-arabic[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .content[_ngcontent-%COMP%]{direction:rtl}.component-layout-latin[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .content[_ngcontent-%COMP%]{direction:ltr}.steering-wheel-left[_nghost-%COMP%]   .action-area[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .action-area[_ngcontent-%COMP%]{flex-direction:row}.steering-wheel-right[_nghost-%COMP%]   .action-area[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .action-area[_ngcontent-%COMP%]{flex-direction:row-reverse}",
              ],
            ],
            data: {},
          }));
      function h(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "primary-text"],
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
            e.xb(
              1,
              212992,
              null,
              0,
              o.a,
              [e.l, e.D, a.a, u.a, [3, o.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            e.xb(
              2,
              16384,
              null,
              0,
              r.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            e.xb(
              3,
              245760,
              null,
              0,
              c.a,
              [[6, o.a], s.a, e.h, e.l, e.D, [2, b.a], [2, r.a], [2, p.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (n, l) {
            var t = l.component;
            (n(
              l,
              1,
              0,
              t.primaryTextId ? t.primaryTextId : "PrimaryText",
              t.primaryTextIdEnum,
            ),
              n(l, 2, 0, !t.hasPrimaryText),
              n(
                l,
                3,
                0,
                t.primaryDeveloperText,
                t.primaryTextId ? t.primaryTextId : "PrimaryText",
                t.primaryFixedNumberOfLines,
                t.primaryNonI18nText,
              ));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              e.Nb(l, 3).backgroundColor,
              e.Nb(l, 3).fixedNumberOfLines,
              e.Nb(l, 3).mayContainLatinCharsForArabic,
              e.Nb(l, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function x(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "secondary-text"],
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
            e.xb(
              1,
              212992,
              null,
              0,
              o.a,
              [e.l, e.D, a.a, u.a, [3, o.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            e.xb(
              2,
              16384,
              null,
              0,
              r.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            e.xb(
              3,
              245760,
              null,
              0,
              c.a,
              [[6, o.a], s.a, e.h, e.l, e.D, [2, b.a], [2, r.a], [2, p.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (n, l) {
            var t = l.component;
            (n(
              l,
              1,
              0,
              t.secondaryTextId ? t.secondaryTextId : "SecondaryText",
              t.secondaryTextIdEnum,
            ),
              n(
                l,
                2,
                0,
                !t.hasSecondaryText ||
                  (!t.secondaryDeveloperText && !t.secondaryTextIdEnum),
              ),
              n(
                l,
                3,
                0,
                t.secondaryDeveloperText,
                t.secondaryTextId ? t.secondaryTextId : "SecondaryText",
                t.secondaryFixedNumberOfLines,
                t.secondaryNonI18nText,
              ));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              e.Nb(l, 3).backgroundColor,
              e.Nb(l, 3).fixedNumberOfLines,
              e.Nb(l, 3).mayContainLatinCharsForArabic,
              e.Nb(l, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function f(n) {
        return e.ac(
          2,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              5,
              "div",
              [["class", "content"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), e.hb(16777216, null, null, 1, null, h)),
            e.xb(
              2,
              16384,
              null,
              0,
              d.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), e.hb(16777216, null, null, 1, null, x)),
            e.xb(
              4,
              16384,
              null,
              0,
              d.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            e.Mb(null, 0),
            e.Mb(null, 1),
          ],
          function (n, l) {
            var t = l.component;
            (n(l, 2, 0, t.hasPrimaryText), n(l, 4, 0, t.hasSecondaryText));
          },
          null,
        );
      }
    },
    ihOk: function (n, l, t) {
      "use strict";
      (t.d(l, "a", function () {
        return m;
      }),
        t.d(l, "b", function () {
          return g;
        }));
      var e = t("kZht"),
        i = t("An66"),
        o = t("fu7d"),
        a = t("bou3"),
        u = t("yNay"),
        r = t("8TlW"),
        c = t("Xo58"),
        s = t("m3Ja"),
        b = t("r+e+"),
        p = t("ijxY"),
        d = t("bmFL"),
        m =
          (t("ZMtB"),
          t("fzcM"),
          e.wb({
            encapsulation: 0,
            styles: [
              [
                '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{height:100%;width:100%;max-height:100%;max-width:100%;min-height:0;display:flex;justify-content:center;flex-direction:column}.disclaimer-description[_ngcontent-%COMP%]{width:100%;font-size:40px;text-align:center}',
              ],
            ],
            data: {},
          }));
      function h(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
            e.xb(
              1,
              540672,
              null,
              0,
              i.r,
              [e.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (n()(), e.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(l, 1, 0, l.component.contentTemplate);
          },
          null,
        );
      }
      function x(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
            e.Mb(null, 0),
            (n()(), e.hb(16777216, null, null, 1, null, h)),
            e.xb(
              3,
              16384,
              null,
              0,
              i.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), e.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(l, 3, 0, l.component.hasContentTemplate);
          },
          null,
        );
      }
      function f(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
            e.xb(
              1,
              212992,
              null,
              0,
              o.a,
              [e.l, e.D, a.a, u.a, [3, o.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (n()(),
            e.yb(
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
              r.b,
              r.a,
            )),
            e.xb(
              3,
              212992,
              null,
              0,
              o.a,
              [e.l, e.D, a.a, u.a, [3, o.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            e.xb(
              4,
              245760,
              null,
              0,
              c.a,
              [[6, o.a], s.a, e.h, e.l, e.D, [2, b.a], [2, p.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (n, l) {
            var t = l.component;
            (n(l, 1, 0, "Disclaimer"),
              n(
                l,
                3,
                0,
                t.restrictionReason && t.disabledTextEnum[t.restrictionReason]
                  ? t.restrictionReason
                  : t.disabledReasonEnum.ERROR,
                t.disabledTextEnum,
              ),
              n(
                l,
                4,
                0,
                t.disabledTextEnum[t.restrictionReason] ||
                  t.disabledTextEnum.ERROR,
                t.restrictionReason && t.disabledTextEnum[t.restrictionReason]
                  ? t.restrictionReason
                  : t.disabledReasonEnum.ERROR,
                6,
                t.nonI18nDisabledText,
              ));
          },
          function (n, l) {
            n(
              l,
              2,
              0,
              e.Nb(l, 4).backgroundColor,
              e.Nb(l, 4).fixedNumberOfLines,
              e.Nb(l, 4).mayContainLatinCharsForArabic,
              e.Nb(l, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function g(n) {
        return e.ac(
          2,
          [
            (n()(), e.hb(16777216, null, null, 1, null, x)),
            e.xb(
              1,
              16384,
              null,
              0,
              i.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), e.hb(0, [["disclaimerText", 2]], null, 0, null, f)),
          ],
          function (n, l) {
            n(l, 1, 0, !l.component.active, e.Nb(l, 2));
          },
          null,
        );
      }
    },
    xM6u: function (n, l, t) {
      "use strict";
      (t.r(l),
        t.d(l, "OnlineModuleNgFactory", function () {
          return Ql;
        }));
      var e = t("kZht");
      class i {}
      var o = t("C9Ky"),
        a = t("89Z2"),
        u = t("kqft"),
        r = t("+sw+"),
        c = t("FfND"),
        s = t("bou3"),
        b = t("yNay"),
        p = t("1VvW"),
        d = t("CDcS"),
        m = t("Yi6/");
      class h {
        constructor() {
          this.context = m.s.Navi;
        }
      }
      var x = e.wb({
        encapsulation: 0,
        styles: [
          ["[_nghost-%COMP%]{display:block;height:100%;width:100%;color:#fff}"],
        ],
        data: {},
      });
      function f(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
              function (n, l, t) {
                var i = !0;
                return (
                  "component:@screenChange.start" === l &&
                    (i = !1 !== e.Nb(n, 1).animationStarted(t) && i),
                  "component:@screenChange.done" === l &&
                    (i = !1 !== e.Nb(n, 1).animationDone(t) && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            e.xb(
              1,
              245760,
              null,
              1,
              u.a,
              [[2, r.a], c.a, e.h, s.a, b.a],
              null,
              null,
            ),
            e.Tb(335544320, 1, { arod: 0 }),
            (n()(),
            e.yb(
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
            e.xb(
              4,
              212992,
              null,
              0,
              p.o,
              [p.b, e.P, e.j, [8, null], e.h],
              null,
              null,
            ),
            e.xb(5, 212992, [[1, 4]], 0, d.a, [p.o, e.h, e.z, b.a], null, null),
          ],
          function (n, l) {
            (n(l, 1, 0), n(l, 4, 0), n(l, 5, 0));
          },
          function (n, l) {
            (n(l, 0, 0, e.Nb(l, 1).screenState, !0),
              n(l, 3, 0, e.Nb(l, 5).hideAdjacentSibling));
          },
        );
      }
      function g(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-online",
              [],
              [[8, "className", 0]],
              null,
              null,
              f,
              x,
            )),
            e.xb(1, 49152, null, 0, h, [], null, null),
          ],
          null,
          function (n, l) {
            n(l, 0, 0, e.Nb(l, 1).context);
          },
        );
      }
      var y = e.ub("au3-online", h, g, {}, {}, []),
        _ = t("eZMD"),
        T = t("fu7d"),
        O = t("HD2x"),
        I = t("8TlW"),
        C = t("Xo58"),
        P = t("m3Ja"),
        N = t("r+e+"),
        M = t("ijxY"),
        v = t("bmFL"),
        D = t("HVUF"),
        S = t("OtM5"),
        L = t("9ZFG"),
        F = t("bMuc"),
        E = t("ZIdM"),
        w = t("3bpu"),
        k = t("6zvu"),
        $ = t("VcEz"),
        A = t("y9xZ"),
        z = t("BMrr"),
        R = t("IEns"),
        H = t("6480"),
        U = t("oeT7"),
        B = t("t7cT"),
        j = t("z6QT"),
        V = t("flsk"),
        Z = t("FQEI"),
        W = t("O82V"),
        G = t("Eln4"),
        Y = t("evAh"),
        K = t("B3Zb"),
        X = t("CpzC"),
        Q = t("0Bsn"),
        q = t("5GjX"),
        J = t("mYyF"),
        nn = t("v98a"),
        ln = t("aOG8"),
        tn = t("Krzs"),
        en = t("An66");
      class on {
        constructor() {
          ((this.IconCategory = m.Z),
            (this.hasSubtitle = !1),
            (this.icon = ""),
            (this.titleDeveloperText = ""),
            (this.subtitleDeveloperText = ""),
            (this.endIconDisabled = !1),
            (this.endIconAvailable = !0),
            (this.endIconTapped = new e.n()),
            (this.endIconDisabledTapped = new e.n()));
        }
      }
      var an = e.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;position:relative;height:120px;padding:0 20px}.function__text[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0}.text__title[_ngcontent-%COMP%]{font-size:40px}.text__subtitle[_ngcontent-%COMP%]{font-size:30px}.text__subtitle--placeholder[_ngcontent-%COMP%]{height:30px}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .function__icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .function__icon[_ngcontent-%COMP%]{margin-right:30px}.component-layout-latin[_nghost-%COMP%]   .function__go-to-icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .function__go-to-icon[_ngcontent-%COMP%]{margin-left:30px;transform:scaleX(1)}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .function__icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .function__icon[_ngcontent-%COMP%]{margin-left:30px}.component-layout-arabic[_nghost-%COMP%]   .function__go-to-icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .function__go-to-icon[_ngcontent-%COMP%]{margin-right:30px;transform:scaleX(-1)}.icon--disabled[_ngcontent-%COMP%]{filter:grayscale(100%) brightness(.4)}",
          ],
        ],
        data: {},
      });
      function un(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "text__subtitle"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              I.b,
              I.a,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              T.a,
              [e.l, e.D, s.a, b.a, [3, T.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            e.xb(
              2,
              245760,
              null,
              0,
              C.a,
              [[6, T.a], P.a, e.h, e.l, e.D, [2, N.a], [2, M.a], [2, v.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (n, l) {
            var t = l.component;
            (n(l, 1, 0, t.subtitleId, t.subtitleIdEnumType),
              n(l, 2, 0, t.subtitleDeveloperText, t.subtitleId));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              e.Nb(l, 2).backgroundColor,
              e.Nb(l, 2).fixedNumberOfLines,
              e.Nb(l, 2).mayContainLatinCharsForArabic,
              e.Nb(l, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function rn(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              0,
              "div",
              [["class", "text__subtitle--placeholder"]],
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
      function cn(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
            (n()(),
            e.yb(
              1,
              0,
              null,
              null,
              10,
              "au3-icon",
              [
                ["class", "function__go-to-icon"],
                ["fileName", "E2CF_shop_go_to_function.webp"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "icon-component--hidden", null],
              ],
              [
                [null, "mib3DisabledTap"],
                [null, "mib3Tap"],
              ],
              function (n, l, t) {
                var e = !0,
                  i = n.component;
                return (
                  "mib3DisabledTap" === l &&
                    (e = !1 !== i.endIconDisabledTapped.emit() && e),
                  "mib3Tap" === l && (e = !1 !== i.endIconTapped.emit() && e),
                  e
                );
              },
              D.b,
              D.a,
            )),
            e.xb(
              2,
              147456,
              null,
              0,
              S.a,
              [L.a, e.h, b.a, [3, S.a]],
              { disabled: [0, "disabled"], showReason: [1, "showReason"] },
              { tap: "mib3DisabledTap" },
            ),
            e.xb(3, 147456, null, 0, F.a, [e.l, e.z], null, null),
            e.xb(
              4,
              147456,
              null,
              0,
              E.a,
              [F.a, [2, w.a], [2, T.a], b.a],
              null,
              null,
            ),
            e.xb(
              5,
              212992,
              null,
              0,
              k.a,
              [
                b.a,
                $.b,
                E.a,
                [2, w.a],
                [2, T.a],
                [2, S.a],
                [2, A.a],
                [2, r.a],
                e.z,
                z.a,
                e.l,
                [2, R.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            e.xb(
              6,
              671744,
              null,
              0,
              H.a,
              [c.a, U.i, S.a, k.a, H.b, B.a],
              {
                routeInfo: [0, "routeInfo"],
                preventGoToRoute: [1, "preventGoToRoute"],
              },
              null,
            ),
            e.Sb(131584, null, j.a, j.a, [[3, j.a]]),
            e.xb(
              8,
              4407296,
              null,
              0,
              V.a,
              [
                e.l,
                Z.a,
                e.h,
                j.a,
                [2, W.a],
                [2, w.b],
                [2, w.a],
                [2, G.a],
                [2, Y.a],
              ],
              null,
              null,
            ),
            e.xb(
              9,
              4243456,
              null,
              0,
              K.b,
              [b.a, e.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            e.xb(
              10,
              147456,
              null,
              0,
              X.a,
              [
                [2, k.a],
                [2, S.a],
                [2, Q.a],
                [2, V.a],
                [2, q.b],
                e.l,
                J.a,
                nn.b,
              ],
              null,
              null,
            ),
            e.xb(
              11,
              147456,
              null,
              0,
              ln.a,
              [[2, V.a], [2, k.a], [2, $.b], tn.a],
              null,
              null,
            ),
          ],
          function (n, l) {
            var t = l.component;
            (n(l, 2, 0, t.endIconDisabled, !1),
              n(l, 5, 0),
              n(l, 6, 0, t.linkToMenu, !0),
              n(l, 8, 0),
              n(
                l,
                9,
                0,
                "E2CF_shop_go_to_function.webp",
                t.IconCategory.ListTwoline,
              ));
          },
          function (n, l) {
            n(
              l,
              1,
              0,
              e.Nb(l, 2).combinedDisabled,
              e.Nb(l, 2).useBrighterIcon,
              e.Nb(l, 8).markerClassEnabled,
              e.Nb(l, 9).iconComponentHidden,
            );
          },
        );
      }
      function sn(n) {
        return e.ac(
          2,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "function__icon"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              D.b,
              D.a,
            )),
            e.xb(
              1,
              4243456,
              null,
              0,
              K.b,
              [b.a, e.z],
              { fileName: [0, "fileName"] },
              null,
            ),
            (n()(),
            e.yb(
              2,
              0,
              null,
              null,
              7,
              "div",
              [
                ["class", "function__text"],
                ["id", "FunctionDescription"],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            e.xb(
              3,
              212992,
              null,
              0,
              T.a,
              [e.l, e.D, s.a, b.a, [3, T.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (n()(),
            e.yb(
              4,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "text__title"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              I.b,
              I.a,
            )),
            e.xb(
              5,
              212992,
              null,
              0,
              T.a,
              [e.l, e.D, s.a, b.a, [3, T.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            e.xb(
              6,
              245760,
              null,
              0,
              C.a,
              [[6, T.a], P.a, e.h, e.l, e.D, [2, N.a], [2, M.a], [2, v.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
            (n()(), e.hb(16777216, null, null, 1, null, un)),
            e.xb(
              8,
              16384,
              null,
              0,
              en.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), e.hb(0, [["noSubtitle", 2]], null, 0, null, rn)),
            (n()(), e.hb(16777216, null, null, 1, null, cn)),
            e.xb(
              11,
              16384,
              null,
              0,
              en.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, l) {
            var t = l.component;
            (n(l, 1, 0, t.icon),
              n(l, 3, 0, "FunctionDescription"),
              n(l, 5, 0, t.titleId, t.titleIdEnumType),
              n(l, 6, 0, t.titleDeveloperText, t.titleId),
              n(l, 8, 0, t.hasSubtitle, e.Nb(l, 9)),
              n(l, 11, 0, t.endIconAvailable));
          },
          function (n, l) {
            (n(l, 0, 0, e.Nb(l, 1).iconComponentHidden),
              n(
                l,
                4,
                0,
                e.Nb(l, 6).backgroundColor,
                e.Nb(l, 6).fixedNumberOfLines,
                e.Nb(l, 6).mayContainLatinCharsForArabic,
                e.Nb(l, 6).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      var bn = t("N2Hj"),
        pn = t("UbWD"),
        dn = t("2rvh"),
        mn = t("odRV"),
        hn = t("Udyh"),
        xn = t("I3ve"),
        fn = t("qiAR"),
        gn = t("007S"),
        yn = t("oxWk"),
        _n = t("Tr//"),
        Tn = t("0qMr"),
        On = t("Z2XD"),
        In = t("VUTu"),
        Cn = t("nK9R"),
        Pn = t("qzuC"),
        Nn = t("8yWk"),
        Mn = t("ihOk"),
        vn = t("ZMtB"),
        Dn = t("fzcM"),
        Sn = t("QQZH"),
        Ln = t("2gyy"),
        Fn = t("4E9E"),
        En = t("YtkY"),
        wn = t("jIqt"),
        kn = t("kuMc"),
        $n = t("J+dc"),
        An = t("MzQn"),
        zn = t("2DZl"),
        Rn = t("M7T0"),
        Hn = (function (n) {
          return ((n.ASC = "asc"), (n.DESC = "desc"), n);
        })({});
      class Un {
        constructor(n, l, t, e, i) {
          ((this.disclaimerService = n),
            (this.popupManager = l),
            (this.fodService = e),
            (this.ListItemType = m.rb),
            (this.FunctionStateEnum = Fn.d),
            (this.FodFunction = Rn.a),
            (this.destroy$$ = new Sn.a(1)),
            this.initEmptyListBehavior(e),
            this.initCategories(e),
            this.initDisclaimer(i),
            this.initOfflineBehavior(t));
        }
        ngOnDestroy() {
          (this.disclaimerService.unregisterDisclaimer(
            this.disclaimerSubscription,
          ),
            this.destroy$$.next());
        }
        getEndIconDisabled(n) {
          return (
            !n ||
            !n.linkToMenu ||
            n.category === Fn.c.IN_INSTALLATION ||
            n.state === Fn.d.ONLINE_LICENSE_CHECK_ERROR ||
            n.state === Fn.d.FUNCTION_ERROR
          );
        }
        goToFunction(n, l = !1) {
          n &&
            n.linkToMenu &&
            (n.category !== Fn.c.IN_INSTALLATION
              ? n.state !== Fn.d.ONLINE_LICENSE_CHECK_ERROR
                ? n.state !== Fn.d.FUNCTION_ERROR
                  ? l
                    ? this.popupManager.request(m.Ob.POPUP_TOAST_LOCK_DEFAULT)
                    : this.fodService.goToMenuFunction(n.functionId)
                  : this.popupManager.request(
                      m.Ob.POPUP_SHOP_BOUGHT_FUNCTIONS_DEFECTIVE_TOAST,
                    )
                : this.popupManager.request(
                    m.Ob.POPUP_SHOP_BOUGHT_FUNCTIONS_N_A_TOAST,
                  )
              : this.popupManager.request(
                  m.Ob.POPUP_SHOP_BOUGHT_FUNCTIONS_INSTALLING_TOAST,
                ));
        }
        initCategories(n) {
          ((this.inInstallationFunctions$ = n.functions$.pipe(
            Object(En.a)((n) =>
              n.filter((n) => !!n && n.category === Fn.c.IN_INSTALLATION),
            ),
          )),
            (this.expiredFunctions$ = n.functions$.pipe(
              Object(En.a)((n) =>
                n
                  .filter((n) => !!n && n.category === Fn.c.EXPIRED)
                  .sort((n, l) =>
                    this.sortFunctions(n, l, "expiryDate", Hn.ASC),
                  ),
              ),
            )),
            (this.fixedDurationFunctions$ = n.functions$.pipe(
              Object(En.a)((n) =>
                n
                  .filter((n) => !!n && n.category === Fn.c.FIXED_DURATION)
                  .sort((n, l) =>
                    this.sortFunctions(n, l, "expiryDate", Hn.ASC),
                  ),
              ),
            )),
            (this.subscriptionFunctions$ = n.functions$.pipe(
              Object(En.a)((n) =>
                n
                  .filter((n) => !!n && n.category === Fn.c.SUBSCRIPTION)
                  .sort((n, l) =>
                    this.sortFunctions(n, l, "startDate", Hn.DESC),
                  ),
              ),
            )),
            (this.lifetimeFunctions$ = n.functions$.pipe(
              Object(En.a)((n) =>
                n
                  .filter((n) => !!n && n.category === Fn.c.LIFETIME_DURATION)
                  .sort((n, l) =>
                    this.sortFunctions(n, l, "startDate", Hn.DESC),
                  ),
              ),
            )));
        }
        initDisclaimer(n) {
          const l = n.clamp15StateOn$.pipe(
              Object(wn.a)(!0),
              Object(En.a)((n) => !n),
            ),
            t = n.clamp15StateOn$.pipe(
              Object(wn.a)(!0),
              Object(En.a)((n) => (!n && Ln.a.KL15.toString()) || ""),
            );
          this.disclaimerSubscription =
            this.disclaimerService.registerDisclaimer({
              enabled$: l,
              reason$: t,
              priority: m.D.Car,
            });
        }
        initOfflineBehavior(n) {
          ((this.isOffline$ = n.dataConnection$.pipe(
            Object(En.a)((n) => !n || !n.dataAvailable),
            Object(m.Kd)(),
          )),
            this.isOffline$
              .pipe(Object(kn.a)(this.destroy$$), Object($n.a)(1))
              .subscribe((n) => {
                n &&
                  this.popupManager.request(
                    m.Ob.POPUP_SHOP_BOUGHT_FUNCTIONS_HINT_TOAST,
                  );
              }));
        }
        initEmptyListBehavior(n) {
          this.noFunctions$ = n.functions$.pipe(
            Object(En.a)(
              (n) =>
                !n || n.length < 1 || n.every((n) => n.category === Fn.c.NONE),
            ),
          );
        }
        sortFunctions(n, l, t, e = Hn.ASC) {
          if (void 0 === n[t] || void 0 === l[t])
            return n.name.localeCompare(l.name);
          const i = e === Hn.ASC ? n[t] - l[t] : l[t] - n[t];
          return 0 === i ? n.name.localeCompare(l.name) : i;
        }
      }
      var Bn = t("sg2e"),
        jn = e.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%}.category__title[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:40px;height:100px}",
            ],
          ],
          data: {},
        });
      function Vn(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-instruction-text",
              [["id", "NoFunctionsBoughtHint"]],
              null,
              null,
              null,
              _.b,
              _.a,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              T.a,
              [e.l, e.D, s.a, b.a, [3, T.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              2,
              49152,
              null,
              0,
              O.a,
              [],
              { primaryDeveloperText: [0, "primaryDeveloperText"] },
              null,
            ),
          ],
          function (n, l) {
            (n(l, 1, 0, "NoFunctionsBoughtHint"),
              n(
                l,
                2,
                0,
                "Sie haben noch keine Lizenzen f\xfcr diese Funktionen\ngekauft.",
              ));
          },
          null,
        );
      }
      function Zn(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-function-item",
              [["id", "FoDFunctionInInstallation"]],
              null,
              [
                [null, "endIconDisabledTapped"],
                [null, "endIconTapped"],
              ],
              function (n, l, t) {
                var e = !0,
                  i = n.component;
                return (
                  "endIconDisabledTapped" === l &&
                    (e = !1 !== i.goToFunction(n.context.$implicit, !0) && e),
                  "endIconTapped" === l &&
                    (e = !1 !== i.goToFunction(n.context.$implicit) && e),
                  e
                );
              },
              sn,
              an,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              T.a,
              [e.l, e.D, s.a, b.a, [3, T.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              2,
              16384,
              null,
              0,
              v.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            e.Qb(3, { expiryDate: 0, daysToExpiration: 1 }),
            e.xb(
              4,
              49152,
              null,
              0,
              on,
              [],
              {
                titleId: [0, "titleId"],
                titleIdEnumType: [1, "titleIdEnumType"],
                hasSubtitle: [2, "hasSubtitle"],
                subtitleId: [3, "subtitleId"],
                subtitleIdEnumType: [4, "subtitleIdEnumType"],
                icon: [5, "icon"],
                titleDeveloperText: [6, "titleDeveloperText"],
                subtitleDeveloperText: [7, "subtitleDeveloperText"],
                endIconDisabled: [8, "endIconDisabled"],
                linkToMenu: [9, "linkToMenu"],
                endIconAvailable: [10, "endIconAvailable"],
              },
              {
                endIconTapped: "endIconTapped",
                endIconDisabledTapped: "endIconDisabledTapped",
              },
            ),
          ],
          function (n, l) {
            var t = l.component;
            n(l, 1, 0, "FoDFunctionInInstallation");
            var e = n(
              l,
              3,
              0,
              null == l.context.$implicit ||
                null == l.context.$implicit.ttParams
                ? null
                : l.context.$implicit.ttParams.expiryDate,
              null == l.context.$implicit ||
                null == l.context.$implicit.ttParams
                ? null
                : l.context.$implicit.ttParams.daysToExpiration,
            );
            (n(l, 2, 0, e),
              n(l, 4, 1, [
                l.context.$implicit.name,
                t.FodFunction,
                (null == l.context.$implicit
                  ? null
                  : l.context.$implicit.state) !== t.FunctionStateEnum.NONE &&
                  (null == l.context.$implicit
                    ? null
                    : l.context.$implicit.state) !==
                    t.FunctionStateEnum.UNKNOWN,
                l.context.$implicit.state,
                t.FunctionStateEnum,
                l.context.$implicit.icon,
                l.context.$implicit.name,
                l.context.$implicit.state,
                t.getEndIconDisabled(l.context.$implicit),
                null == l.context.$implicit
                  ? null
                  : l.context.$implicit.linkToMenu,
                !!l.context.$implicit.linkToMenu,
              ]));
          },
          null,
        );
      }
      function Wn(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
            e.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "category__title"],
                ["developerText", "Installation l\xe4uft"],
                ["id", "CategoryFunctionsInInstallation"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              I.b,
              I.a,
            )),
            e.xb(
              2,
              212992,
              null,
              0,
              T.a,
              [e.l, e.D, s.a, b.a, [3, T.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              3,
              245760,
              null,
              0,
              C.a,
              [[6, T.a], P.a, e.h, e.l, e.D, [2, N.a], [2, M.a], [2, v.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
            (n()(), e.hb(16777216, [[1, 2]], null, 1, null, Zn)),
            e.xb(
              5,
              278528,
              null,
              0,
              en.j,
              [e.P, e.L, e.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
            (n()(), e.hb(0, null, null, 0)),
          ],
          function (n, l) {
            (n(l, 2, 0, "CategoryFunctionsInInstallation"),
              n(
                l,
                3,
                0,
                "Installation l\xe4uft",
                "CategoryFunctionsInInstallation",
              ),
              n(l, 5, 0, l.parent.context.mib3Let));
          },
          function (n, l) {
            n(
              l,
              1,
              0,
              e.Nb(l, 3).backgroundColor,
              e.Nb(l, 3).fixedNumberOfLines,
              e.Nb(l, 3).mayContainLatinCharsForArabic,
              e.Nb(l, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Gn(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
            (n()(), e.hb(16777216, [[1, 2]], null, 1, null, Wn)),
            e.xb(
              2,
              16384,
              null,
              0,
              en.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), e.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(l, 2, 0, !!l.context.mib3Let && l.context.mib3Let.length > 0);
          },
          null,
        );
      }
      function Yn(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-function-item",
              [["id", "FoDFunctionSubscription"]],
              null,
              [
                [null, "endIconDisabledTapped"],
                [null, "endIconTapped"],
              ],
              function (n, l, t) {
                var e = !0,
                  i = n.component;
                return (
                  "endIconDisabledTapped" === l &&
                    (e = !1 !== i.goToFunction(n.context.$implicit, !0) && e),
                  "endIconTapped" === l &&
                    (e = !1 !== i.goToFunction(n.context.$implicit) && e),
                  e
                );
              },
              sn,
              an,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              T.a,
              [e.l, e.D, s.a, b.a, [3, T.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              2,
              16384,
              null,
              0,
              v.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            e.Qb(3, { expiryDate: 0, daysToExpiration: 1 }),
            e.xb(
              4,
              49152,
              null,
              0,
              on,
              [],
              {
                titleId: [0, "titleId"],
                titleIdEnumType: [1, "titleIdEnumType"],
                hasSubtitle: [2, "hasSubtitle"],
                subtitleId: [3, "subtitleId"],
                subtitleIdEnumType: [4, "subtitleIdEnumType"],
                icon: [5, "icon"],
                titleDeveloperText: [6, "titleDeveloperText"],
                subtitleDeveloperText: [7, "subtitleDeveloperText"],
                endIconDisabled: [8, "endIconDisabled"],
                linkToMenu: [9, "linkToMenu"],
                endIconAvailable: [10, "endIconAvailable"],
              },
              {
                endIconTapped: "endIconTapped",
                endIconDisabledTapped: "endIconDisabledTapped",
              },
            ),
          ],
          function (n, l) {
            var t = l.component;
            n(l, 1, 0, "FoDFunctionSubscription");
            var e = n(
              l,
              3,
              0,
              null == l.context.$implicit ||
                null == l.context.$implicit.ttParams
                ? null
                : l.context.$implicit.ttParams.expiryDate,
              null == l.context.$implicit ||
                null == l.context.$implicit.ttParams
                ? null
                : l.context.$implicit.ttParams.daysToExpiration,
            );
            (n(l, 2, 0, e),
              n(l, 4, 1, [
                l.context.$implicit.name,
                t.FodFunction,
                (null == l.context.$implicit
                  ? null
                  : l.context.$implicit.state) !== t.FunctionStateEnum.NONE &&
                  (null == l.context.$implicit
                    ? null
                    : l.context.$implicit.state) !==
                    t.FunctionStateEnum.UNKNOWN,
                l.context.$implicit.state,
                t.FunctionStateEnum,
                l.context.$implicit.icon,
                l.context.$implicit.name,
                l.context.$implicit.state,
                t.getEndIconDisabled(l.context.$implicit),
                null == l.context.$implicit
                  ? null
                  : l.context.$implicit.linkToMenu,
                !!l.context.$implicit.linkToMenu,
              ]));
          },
          null,
        );
      }
      function Kn(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
            e.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "category__title"],
                ["developerText", "Abonnements"],
                ["id", "CategoryFunctionsSubscription"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              I.b,
              I.a,
            )),
            e.xb(
              2,
              212992,
              null,
              0,
              T.a,
              [e.l, e.D, s.a, b.a, [3, T.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              3,
              245760,
              null,
              0,
              C.a,
              [[6, T.a], P.a, e.h, e.l, e.D, [2, N.a], [2, M.a], [2, v.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
            (n()(), e.hb(16777216, [[1, 2]], null, 1, null, Yn)),
            e.xb(
              5,
              278528,
              null,
              0,
              en.j,
              [e.P, e.L, e.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
            (n()(), e.hb(0, null, null, 0)),
          ],
          function (n, l) {
            (n(l, 2, 0, "CategoryFunctionsSubscription"),
              n(l, 3, 0, "Abonnements", "CategoryFunctionsSubscription"),
              n(l, 5, 0, l.parent.context.mib3Let));
          },
          function (n, l) {
            n(
              l,
              1,
              0,
              e.Nb(l, 3).backgroundColor,
              e.Nb(l, 3).fixedNumberOfLines,
              e.Nb(l, 3).mayContainLatinCharsForArabic,
              e.Nb(l, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Xn(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
            (n()(), e.hb(16777216, [[1, 2]], null, 1, null, Kn)),
            e.xb(
              2,
              16384,
              null,
              0,
              en.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), e.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(l, 2, 0, !!l.context.mib3Let && l.context.mib3Let.length > 0);
          },
          null,
        );
      }
      function Qn(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-function-item",
              [["id", "FoDFunctionFixedDuration"]],
              null,
              [
                [null, "endIconDisabledTapped"],
                [null, "endIconTapped"],
              ],
              function (n, l, t) {
                var e = !0,
                  i = n.component;
                return (
                  "endIconDisabledTapped" === l &&
                    (e = !1 !== i.goToFunction(n.context.$implicit, !0) && e),
                  "endIconTapped" === l &&
                    (e = !1 !== i.goToFunction(n.context.$implicit) && e),
                  e
                );
              },
              sn,
              an,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              T.a,
              [e.l, e.D, s.a, b.a, [3, T.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              2,
              16384,
              null,
              0,
              v.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            e.Qb(3, { expiryDate: 0, daysToExpiration: 1 }),
            e.xb(
              4,
              49152,
              null,
              0,
              on,
              [],
              {
                titleId: [0, "titleId"],
                titleIdEnumType: [1, "titleIdEnumType"],
                hasSubtitle: [2, "hasSubtitle"],
                subtitleId: [3, "subtitleId"],
                subtitleIdEnumType: [4, "subtitleIdEnumType"],
                icon: [5, "icon"],
                titleDeveloperText: [6, "titleDeveloperText"],
                subtitleDeveloperText: [7, "subtitleDeveloperText"],
                endIconDisabled: [8, "endIconDisabled"],
                linkToMenu: [9, "linkToMenu"],
                endIconAvailable: [10, "endIconAvailable"],
              },
              {
                endIconTapped: "endIconTapped",
                endIconDisabledTapped: "endIconDisabledTapped",
              },
            ),
          ],
          function (n, l) {
            var t = l.component;
            n(l, 1, 0, "FoDFunctionFixedDuration");
            var e = n(
              l,
              3,
              0,
              null == l.context.$implicit ||
                null == l.context.$implicit.ttParams
                ? null
                : l.context.$implicit.ttParams.expiryDate,
              null == l.context.$implicit ||
                null == l.context.$implicit.ttParams
                ? null
                : l.context.$implicit.ttParams.daysToExpiration,
            );
            (n(l, 2, 0, e),
              n(l, 4, 1, [
                l.context.$implicit.name,
                t.FodFunction,
                (null == l.context.$implicit
                  ? null
                  : l.context.$implicit.state) !== t.FunctionStateEnum.NONE &&
                  (null == l.context.$implicit
                    ? null
                    : l.context.$implicit.state) !==
                    t.FunctionStateEnum.UNKNOWN,
                l.context.$implicit.state,
                t.FunctionStateEnum,
                l.context.$implicit.icon,
                l.context.$implicit.name,
                l.context.$implicit.state,
                t.getEndIconDisabled(l.context.$implicit),
                null == l.context.$implicit
                  ? null
                  : l.context.$implicit.linkToMenu,
                !!l.context.$implicit.linkToMenu,
              ]));
          },
          null,
        );
      }
      function qn(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
            e.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "category__title"],
                ["developerText", "Begrenzte Laufzeit"],
                ["id", "CategoryFunctionsFixedDuration"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              I.b,
              I.a,
            )),
            e.xb(
              2,
              212992,
              null,
              0,
              T.a,
              [e.l, e.D, s.a, b.a, [3, T.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              3,
              245760,
              null,
              0,
              C.a,
              [[6, T.a], P.a, e.h, e.l, e.D, [2, N.a], [2, M.a], [2, v.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
            (n()(), e.hb(16777216, [[1, 2]], null, 1, null, Qn)),
            e.xb(
              5,
              278528,
              null,
              0,
              en.j,
              [e.P, e.L, e.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
            (n()(), e.hb(0, null, null, 0)),
          ],
          function (n, l) {
            (n(l, 2, 0, "CategoryFunctionsFixedDuration"),
              n(
                l,
                3,
                0,
                "Begrenzte Laufzeit",
                "CategoryFunctionsFixedDuration",
              ),
              n(l, 5, 0, l.parent.context.mib3Let));
          },
          function (n, l) {
            n(
              l,
              1,
              0,
              e.Nb(l, 3).backgroundColor,
              e.Nb(l, 3).fixedNumberOfLines,
              e.Nb(l, 3).mayContainLatinCharsForArabic,
              e.Nb(l, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Jn(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
            (n()(), e.hb(16777216, [[1, 2]], null, 1, null, qn)),
            e.xb(
              2,
              16384,
              null,
              0,
              en.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), e.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(l, 2, 0, !!l.context.mib3Let && l.context.mib3Let.length > 0);
          },
          null,
        );
      }
      function nl(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-function-item",
              [["id", "FoDFunctionLifetime"]],
              null,
              [
                [null, "endIconDisabledTapped"],
                [null, "endIconTapped"],
              ],
              function (n, l, t) {
                var e = !0,
                  i = n.component;
                return (
                  "endIconDisabledTapped" === l &&
                    (e = !1 !== i.goToFunction(n.context.$implicit, !0) && e),
                  "endIconTapped" === l &&
                    (e = !1 !== i.goToFunction(n.context.$implicit) && e),
                  e
                );
              },
              sn,
              an,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              T.a,
              [e.l, e.D, s.a, b.a, [3, T.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              2,
              16384,
              null,
              0,
              v.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            e.Qb(3, { expiryDate: 0, daysToExpiration: 1 }),
            e.xb(
              4,
              49152,
              null,
              0,
              on,
              [],
              {
                titleId: [0, "titleId"],
                titleIdEnumType: [1, "titleIdEnumType"],
                hasSubtitle: [2, "hasSubtitle"],
                subtitleId: [3, "subtitleId"],
                subtitleIdEnumType: [4, "subtitleIdEnumType"],
                icon: [5, "icon"],
                titleDeveloperText: [6, "titleDeveloperText"],
                subtitleDeveloperText: [7, "subtitleDeveloperText"],
                endIconDisabled: [8, "endIconDisabled"],
                linkToMenu: [9, "linkToMenu"],
                endIconAvailable: [10, "endIconAvailable"],
              },
              {
                endIconTapped: "endIconTapped",
                endIconDisabledTapped: "endIconDisabledTapped",
              },
            ),
          ],
          function (n, l) {
            var t = l.component;
            n(l, 1, 0, "FoDFunctionLifetime");
            var e = n(
              l,
              3,
              0,
              null == l.context.$implicit ||
                null == l.context.$implicit.ttParams
                ? null
                : l.context.$implicit.ttParams.expiryDate,
              null == l.context.$implicit ||
                null == l.context.$implicit.ttParams
                ? null
                : l.context.$implicit.ttParams.daysToExpiration,
            );
            (n(l, 2, 0, e),
              n(l, 4, 1, [
                l.context.$implicit.name,
                t.FodFunction,
                (null == l.context.$implicit
                  ? null
                  : l.context.$implicit.state) !== t.FunctionStateEnum.NONE &&
                  (null == l.context.$implicit
                    ? null
                    : l.context.$implicit.state) !==
                    t.FunctionStateEnum.UNKNOWN,
                l.context.$implicit.state,
                t.FunctionStateEnum,
                l.context.$implicit.icon,
                l.context.$implicit.name,
                l.context.$implicit.state,
                t.getEndIconDisabled(l.context.$implicit),
                null == l.context.$implicit
                  ? null
                  : l.context.$implicit.linkToMenu,
                !!l.context.$implicit.linkToMenu,
              ]));
          },
          null,
        );
      }
      function ll(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
            e.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "category__title"],
                ["developerText", "Unbegrenzte Laufzeit"],
                ["id", "CategoryFunctionsLifetime"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              I.b,
              I.a,
            )),
            e.xb(
              2,
              212992,
              null,
              0,
              T.a,
              [e.l, e.D, s.a, b.a, [3, T.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              3,
              245760,
              null,
              0,
              C.a,
              [[6, T.a], P.a, e.h, e.l, e.D, [2, N.a], [2, M.a], [2, v.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
            (n()(), e.hb(16777216, [[1, 2]], null, 1, null, nl)),
            e.xb(
              5,
              278528,
              null,
              0,
              en.j,
              [e.P, e.L, e.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
            (n()(), e.hb(0, null, null, 0)),
          ],
          function (n, l) {
            (n(l, 2, 0, "CategoryFunctionsLifetime"),
              n(l, 3, 0, "Unbegrenzte Laufzeit", "CategoryFunctionsLifetime"),
              n(l, 5, 0, l.parent.context.mib3Let));
          },
          function (n, l) {
            n(
              l,
              1,
              0,
              e.Nb(l, 3).backgroundColor,
              e.Nb(l, 3).fixedNumberOfLines,
              e.Nb(l, 3).mayContainLatinCharsForArabic,
              e.Nb(l, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function tl(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
            (n()(), e.hb(16777216, [[1, 2]], null, 1, null, ll)),
            e.xb(
              2,
              16384,
              null,
              0,
              en.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), e.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(l, 2, 0, !!l.context.mib3Let && l.context.mib3Let.length > 0);
          },
          null,
        );
      }
      function el(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-function-item",
              [["id", "FoDFunctionRecentlyExpired"]],
              null,
              null,
              null,
              sn,
              an,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              T.a,
              [e.l, e.D, s.a, b.a, [3, T.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              2,
              16384,
              null,
              0,
              v.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            e.Qb(3, { expiryDate: 0, daysToExpiration: 1 }),
            e.xb(
              4,
              49152,
              null,
              0,
              on,
              [],
              {
                titleId: [0, "titleId"],
                titleIdEnumType: [1, "titleIdEnumType"],
                icon: [2, "icon"],
                titleDeveloperText: [3, "titleDeveloperText"],
                linkToMenu: [4, "linkToMenu"],
                endIconAvailable: [5, "endIconAvailable"],
              },
              null,
            ),
          ],
          function (n, l) {
            var t = l.component;
            n(l, 1, 0, "FoDFunctionRecentlyExpired");
            var e = n(
              l,
              3,
              0,
              null == l.context.$implicit ||
                null == l.context.$implicit.ttParams
                ? null
                : l.context.$implicit.ttParams.expiryDate,
              null == l.context.$implicit ||
                null == l.context.$implicit.ttParams
                ? null
                : l.context.$implicit.ttParams.daysToExpiration,
            );
            (n(l, 2, 0, e),
              n(
                l,
                4,
                0,
                l.context.$implicit.name,
                t.FodFunction,
                l.context.$implicit.icon,
                l.context.$implicit.name,
                null == l.context.$implicit
                  ? null
                  : l.context.$implicit.linkToMenu,
                !1,
              ));
          },
          null,
        );
      }
      function il(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
            e.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "category__title"],
                ["developerText", "K\xfcrzlich abgelaufene Lizenzen"],
                ["id", "CategoryFunctionsExpired"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              I.b,
              I.a,
            )),
            e.xb(
              2,
              212992,
              null,
              0,
              T.a,
              [e.l, e.D, s.a, b.a, [3, T.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              3,
              245760,
              null,
              0,
              C.a,
              [[6, T.a], P.a, e.h, e.l, e.D, [2, N.a], [2, M.a], [2, v.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
            (n()(), e.hb(16777216, [[1, 2]], null, 1, null, el)),
            e.xb(
              5,
              278528,
              null,
              0,
              en.j,
              [e.P, e.L, e.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
            (n()(), e.hb(0, null, null, 0)),
          ],
          function (n, l) {
            (n(l, 2, 0, "CategoryFunctionsExpired"),
              n(
                l,
                3,
                0,
                "K\xfcrzlich abgelaufene Lizenzen",
                "CategoryFunctionsExpired",
              ),
              n(l, 5, 0, l.parent.context.mib3Let));
          },
          function (n, l) {
            n(
              l,
              1,
              0,
              e.Nb(l, 3).backgroundColor,
              e.Nb(l, 3).fixedNumberOfLines,
              e.Nb(l, 3).mayContainLatinCharsForArabic,
              e.Nb(l, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function ol(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
            (n()(), e.hb(16777216, [[1, 2]], null, 1, null, il)),
            e.xb(
              2,
              16384,
              null,
              0,
              en.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), e.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(l, 2, 0, !!l.context.mib3Let && l.context.mib3Let.length > 0);
          },
          null,
        );
      }
      function al(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              19,
              "au3-list",
              [],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              bn.b,
              bn.a,
            )),
            e.Sb(6144, null, pn.a, null, [dn.a]),
            e.xb(2, 16384, null, 0, mn.a, [e.l], null, null),
            e.xb(
              3,
              12828672,
              null,
              1,
              dn.a,
              [
                [2, hn.a],
                [2, xn.a],
                [8, null],
                [2, T.a],
                [2, fn.a],
                [2, gn.a],
                [2, $.b],
                U.i,
                e.z,
                e.h,
                b.a,
                yn.a,
                _n.a,
                [2, Z.a],
                w.a,
                [2, U.a],
              ],
              null,
              null,
            ),
            e.Tb(603979776, 1, { template: 0 }),
            (n()(), e.hb(16777216, [[1, 2]], 0, 2, null, Gn)),
            e.xb(
              6,
              16384,
              null,
              0,
              Tn.a,
              [e.L, e.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            e.Pb(131072, en.b, [e.h]),
            (n()(), e.hb(16777216, [[1, 2]], 0, 2, null, Xn)),
            e.xb(
              9,
              16384,
              null,
              0,
              Tn.a,
              [e.L, e.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            e.Pb(131072, en.b, [e.h]),
            (n()(), e.hb(16777216, [[1, 2]], 0, 2, null, Jn)),
            e.xb(
              12,
              16384,
              null,
              0,
              Tn.a,
              [e.L, e.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            e.Pb(131072, en.b, [e.h]),
            (n()(), e.hb(16777216, [[1, 2]], 0, 2, null, tl)),
            e.xb(
              15,
              16384,
              null,
              0,
              Tn.a,
              [e.L, e.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            e.Pb(131072, en.b, [e.h]),
            (n()(), e.hb(16777216, [[1, 2]], 0, 2, null, ol)),
            e.xb(
              18,
              16384,
              null,
              0,
              Tn.a,
              [e.L, e.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            e.Pb(131072, en.b, [e.h]),
          ],
          function (n, l) {
            var t = l.component;
            (n(l, 3, 0),
              n(
                l,
                6,
                0,
                e.Yb(l, 6, 0, e.Nb(l, 7).transform(t.inInstallationFunctions$)),
              ),
              n(
                l,
                9,
                0,
                e.Yb(l, 9, 0, e.Nb(l, 10).transform(t.subscriptionFunctions$)),
              ),
              n(
                l,
                12,
                0,
                e.Yb(
                  l,
                  12,
                  0,
                  e.Nb(l, 13).transform(t.fixedDurationFunctions$),
                ),
              ),
              n(
                l,
                15,
                0,
                e.Yb(l, 15, 0, e.Nb(l, 16).transform(t.lifetimeFunctions$)),
              ),
              n(
                l,
                18,
                0,
                e.Yb(l, 18, 0, e.Nb(l, 19).transform(t.expiredFunctions$)),
              ));
          },
          function (n, l) {
            n(l, 0, 0, e.Nb(l, 3).showLineNumbers);
          },
        );
      }
      function ul(n) {
        return e.ac(
          2,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:SHOP_BOUGHT_FUNCTIONS"],
              ],
              null,
              null,
              null,
              On.b,
              On.a,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              T.a,
              [e.l, e.D, s.a, b.a, [3, T.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(2, 4440064, null, 0, A.a, [b.a], { id: [0, "id"] }, null),
            (n()(),
            e.yb(
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
              In.b,
              In.a,
            )),
            e.xb(
              4,
              212992,
              null,
              0,
              T.a,
              [e.l, e.D, s.a, b.a, [3, T.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              5,
              49152,
              null,
              0,
              Cn.a,
              [Pn.a, Nn.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (n()(),
            e.yb(
              6,
              0,
              null,
              0,
              5,
              "au3-disclaimer",
              [],
              null,
              null,
              null,
              Mn.b,
              Mn.a,
            )),
            e.xb(
              7,
              4440064,
              null,
              0,
              vn.a,
              [Dn.a, [2, T.a], e.h, b.a],
              null,
              null,
            ),
            (n()(), e.hb(16777216, null, 0, 2, null, Vn)),
            e.xb(
              9,
              16384,
              null,
              0,
              en.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            e.Pb(131072, en.b, [e.h]),
            (n()(), e.hb(0, [["fodList", 2]], 0, 0, null, al)),
          ],
          function (n, l) {
            var t = l.component;
            (n(l, 1, 0, "Screen:SHOP_BOUGHT_FUNCTIONS"),
              n(l, 2, 0, "Screen:SHOP_BOUGHT_FUNCTIONS"),
              n(l, 4, 0, ""),
              n(l, 5, 0, "Shop", "Funktions\xfcbersicht"),
              n(l, 7, 0),
              n(
                l,
                9,
                0,
                e.Yb(l, 9, 0, e.Nb(l, 10).transform(t.noFunctions$)),
                e.Nb(l, 11),
              ));
          },
          function (n, l) {
            n(
              l,
              3,
              0,
              e.Nb(l, 5).hideLeftBorder,
              e.Nb(l, 5).hideDividingBorders,
            );
          },
        );
      }
      function rl(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-bought-functions",
              [],
              null,
              null,
              null,
              ul,
              jn,
            )),
            e.xb(
              1,
              180224,
              null,
              0,
              Un,
              [Dn.a, Bn.a, zn.a, Fn.b, An.a],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var cl = e.ub("au3-bought-functions", Un, rl, {}, {}, []),
        sl = t("erFY"),
        bl = t("5wO1"),
        pl = t("M706"),
        dl = t("aMc6"),
        ml = t("Q/h1"),
        hl = t("Ah1p"),
        xl = t("xVbo"),
        fl = t("1e4c");
      class gl {
        constructor(n) {
          ((this.UsersRoutes = fl.b),
            (this.OnlineRoute = ml.a),
            (this.FodShopState = hl.a),
            (this.destroy$$ = new Sn.a(1)),
            (this.offlineText =
              "Um Den Shop nutzen zu k\xf6nnen, ben\xf6tigen Sie eine Online-Verbindung.\nSie k\xf6nnen sich auch ohne Internetverbindung die bereits gekauften\nFunktionen anzeigen lassen."),
            (this.noLoginText =
              "Um den Shop nutzen zu k\xf6nnen, melden Sie sich bitte bei myAudi an. Sie\nk\xf6nnen sich auch ohne Anmeldung die bereits gekauften Funktonen\nansehen."),
            (this.notAvailableText =
              "Der Dienst konnte nicht geladen werden.\nBitte versuchen Sie es zu einem sp\xe4teren Zeitpunkt\nerneut.\nSie k\xf6nnen sich weiterhin die bereits gekauften Funktionen ansehen."),
            (this.servicingText =
              "Der Shop wird zur Zeit gewartet.\nVersuchen Sie es zu einem sp\xe4teren Zeitpunkt erneut.\nWir bitten um Ihr Verst\xe4ndnis.\nSie k\xf6nnen sich weiterhin die bereits gekauften Funktionen ansehen."),
            (this.firstTimeUseText =
              "Der Shop bietet Ihnen die M\xf6glichkeit mit Hilfe\nIhres myAudi Accounts eine Vielzahl an\nFahrzeugfunktionen on Demand zu erwerben."),
            n.params
              .pipe(
                Object(kn.a)(this.destroy$$),
                Object(xl.a)(m.wd),
                Object(En.a)((n) => {
                  if (n.fodState) return n.fodState;
                }),
              )
              .subscribe((n) => {
                this.shopState = n;
              }));
        }
        get infoText() {
          switch (this.shopState) {
            case hl.a.OFFLINE:
              return this.offlineText;
            case hl.a.NO_LOGIN:
              return this.noLoginText;
            case hl.a.NOT_AVAILABLE:
              return this.notAvailableText;
            case hl.a.SERVICING:
              return this.servicingText;
            case hl.a.FIRST_TIME_USE:
              return this.firstTimeUseText;
            default:
              return "";
          }
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
      }
      var yl = e.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{display:block;position:relative;overflow:hidden}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column}",
          ],
        ],
        data: {},
      });
      function _l(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-operation-panel-item",
              [["id", "ContinueToLogin"]],
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
              null,
              null,
              sl.b,
              sl.a,
            )),
            e.xb(
              1,
              147456,
              null,
              0,
              S.a,
              [L.a, e.h, b.a, [3, S.a]],
              null,
              null,
            ),
            e.xb(2, 147456, null, 0, F.a, [e.l, e.z], null, null),
            e.xb(
              3,
              212992,
              null,
              0,
              T.a,
              [e.l, e.D, s.a, b.a, [3, T.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              4,
              147456,
              null,
              0,
              E.a,
              [F.a, [2, w.a], [2, T.a], b.a],
              null,
              null,
            ),
            e.xb(
              5,
              212992,
              null,
              0,
              k.a,
              [
                b.a,
                $.b,
                E.a,
                [2, w.a],
                [2, T.a],
                [2, S.a],
                [2, A.a],
                [2, r.a],
                e.z,
                z.a,
                e.l,
                [2, R.a],
              ],
              null,
              null,
            ),
            e.xb(
              6,
              671744,
              null,
              0,
              H.a,
              [c.a, U.i, S.a, k.a, H.b, B.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            e.Sb(131584, null, j.a, j.a, [[3, j.a]]),
            e.xb(
              8,
              4407296,
              null,
              0,
              V.a,
              [
                e.l,
                Z.a,
                e.h,
                j.a,
                [2, W.a],
                [2, w.b],
                [2, w.a],
                [2, G.a],
                [2, Y.a],
              ],
              null,
              null,
            ),
            e.xb(
              9,
              49152,
              null,
              0,
              bl.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            e.xb(
              10,
              147456,
              null,
              0,
              X.a,
              [
                [2, k.a],
                [2, S.a],
                [2, Q.a],
                [2, V.a],
                [2, q.b],
                e.l,
                J.a,
                nn.b,
              ],
              null,
              null,
            ),
            e.xb(
              11,
              147456,
              null,
              0,
              ln.a,
              [[2, V.a], [2, k.a], [2, $.b], tn.a],
              null,
              null,
            ),
          ],
          function (n, l) {
            var t = l.component;
            (n(l, 3, 0, "ContinueToLogin"),
              n(l, 5, 0),
              n(l, 6, 0, t.UsersRoutes.UserAccountList),
              n(l, 8, 0),
              n(l, 9, 0, "Zum myAudi Login", !0));
          },
          function (n, l) {
            n(l, 0, 1, [
              e.Nb(l, 1).combinedDisabled,
              e.Nb(l, 1).useBrighterIcon,
              e.Nb(l, 8).markerClassEnabled,
              e.Nb(l, 9).showSeparatorLeft,
              e.Nb(l, 9).showSeparatorRight,
              e.Nb(l, 9).prio1Main,
              e.Nb(l, 9).prio1SmallScale,
              e.Nb(l, 9).prio2SmallScale,
              e.Nb(l, 9).prio1,
              e.Nb(l, 9).prio2,
              e.Nb(l, 9).prio1IconText,
              e.Nb(l, 9).prio1IconOnly,
              e.Nb(l, 9).prio1TextOnly,
              e.Nb(l, 9).prio2IconText,
              e.Nb(l, 9).prio2IconOnly,
              e.Nb(l, 9).prio2TextOnly,
              e.Nb(l, 9).useDefaultMaxWidth,
              e.Nb(l, 9).isDummy,
            ]);
          },
        );
      }
      function Tl(n) {
        return e.ac(
          2,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              24,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:SHOP_INFO_TEXT"],
              ],
              null,
              null,
              null,
              On.b,
              On.a,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              T.a,
              [e.l, e.D, s.a, b.a, [3, T.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(2, 4440064, null, 0, A.a, [b.a], { id: [0, "id"] }, null),
            (n()(),
            e.yb(
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
              In.b,
              In.a,
            )),
            e.xb(
              4,
              212992,
              null,
              0,
              T.a,
              [e.l, e.D, s.a, b.a, [3, T.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              5,
              49152,
              null,
              0,
              Cn.a,
              [Pn.a, Nn.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                hasSecondaryText: [1, "hasSecondaryText"],
              },
              null,
            ),
            (n()(),
            e.yb(
              6,
              0,
              null,
              0,
              18,
              "au3-instruction-text",
              [["id", ""]],
              null,
              null,
              null,
              _.b,
              _.a,
            )),
            e.xb(
              7,
              212992,
              null,
              0,
              T.a,
              [e.l, e.D, s.a, b.a, [3, T.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              8,
              49152,
              null,
              0,
              O.a,
              [],
              {
                primaryTextId: [0, "primaryTextId"],
                primaryTextIdEnum: [1, "primaryTextIdEnum"],
                primaryDeveloperText: [2, "primaryDeveloperText"],
              },
              null,
            ),
            (n()(),
            e.yb(
              9,
              0,
              null,
              1,
              15,
              "au3-operation-panel",
              [],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              pl.b,
              pl.a,
            )),
            e.xb(
              10,
              49152,
              null,
              0,
              dl.a,
              [Dn.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (n()(), e.hb(16777216, null, 1, 1, null, _l)),
            e.xb(
              12,
              16384,
              null,
              0,
              en.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            e.yb(
              13,
              0,
              null,
              1,
              11,
              "au3-operation-panel-item",
              [["id", "ContinueToShop"]],
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
              null,
              null,
              sl.b,
              sl.a,
            )),
            e.xb(
              14,
              147456,
              null,
              0,
              S.a,
              [L.a, e.h, b.a, [3, S.a]],
              null,
              null,
            ),
            e.xb(15, 147456, null, 0, F.a, [e.l, e.z], null, null),
            e.xb(
              16,
              212992,
              null,
              0,
              T.a,
              [e.l, e.D, s.a, b.a, [3, T.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              17,
              147456,
              null,
              0,
              E.a,
              [F.a, [2, w.a], [2, T.a], b.a],
              null,
              null,
            ),
            e.xb(
              18,
              212992,
              null,
              0,
              k.a,
              [
                b.a,
                $.b,
                E.a,
                [2, w.a],
                [2, T.a],
                [2, S.a],
                [2, A.a],
                [2, r.a],
                e.z,
                z.a,
                e.l,
                [2, R.a],
              ],
              null,
              null,
            ),
            e.xb(
              19,
              671744,
              null,
              0,
              H.a,
              [c.a, U.i, S.a, k.a, H.b, B.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            e.Sb(131584, null, j.a, j.a, [[3, j.a]]),
            e.xb(
              21,
              4407296,
              null,
              0,
              V.a,
              [
                e.l,
                Z.a,
                e.h,
                j.a,
                [2, W.a],
                [2, w.b],
                [2, w.a],
                [2, G.a],
                [2, Y.a],
              ],
              null,
              null,
            ),
            e.xb(
              22,
              49152,
              null,
              0,
              bl.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            e.xb(
              23,
              147456,
              null,
              0,
              X.a,
              [
                [2, k.a],
                [2, S.a],
                [2, Q.a],
                [2, V.a],
                [2, q.b],
                e.l,
                J.a,
                nn.b,
              ],
              null,
              null,
            ),
            e.xb(
              24,
              147456,
              null,
              0,
              ln.a,
              [[2, V.a], [2, k.a], [2, $.b], tn.a],
              null,
              null,
            ),
          ],
          function (n, l) {
            var t = l.component;
            (n(l, 1, 0, "Screen:SHOP_INFO_TEXT"),
              n(l, 2, 0, "Screen:SHOP_INFO_TEXT"),
              n(l, 4, 0, ""),
              n(l, 5, 0, "Shop", !1),
              n(l, 7, 0, ""),
              n(l, 8, 0, t.shopState, t.FodShopState, t.infoText),
              n(l, 10, 0, !0),
              n(l, 12, 0, t.shopState === t.FodShopState.NO_LOGIN),
              n(l, 16, 0, "ContinueToShop"),
              n(l, 18, 0),
              n(l, 19, 0, t.OnlineRoute.BoughtFunctions),
              n(l, 21, 0),
              n(l, 22, 0, "Gekaufte Funktionen", !0));
          },
          function (n, l) {
            (n(
              l,
              3,
              0,
              e.Nb(l, 5).hideLeftBorder,
              e.Nb(l, 5).hideDividingBorders,
            ),
              n(l, 9, 0, e.Nb(l, 10).alignInside, e.Nb(l, 10).alignOutside),
              n(l, 13, 1, [
                e.Nb(l, 14).combinedDisabled,
                e.Nb(l, 14).useBrighterIcon,
                e.Nb(l, 21).markerClassEnabled,
                e.Nb(l, 22).showSeparatorLeft,
                e.Nb(l, 22).showSeparatorRight,
                e.Nb(l, 22).prio1Main,
                e.Nb(l, 22).prio1SmallScale,
                e.Nb(l, 22).prio2SmallScale,
                e.Nb(l, 22).prio1,
                e.Nb(l, 22).prio2,
                e.Nb(l, 22).prio1IconText,
                e.Nb(l, 22).prio1IconOnly,
                e.Nb(l, 22).prio1TextOnly,
                e.Nb(l, 22).prio2IconText,
                e.Nb(l, 22).prio2IconOnly,
                e.Nb(l, 22).prio2TextOnly,
                e.Nb(l, 22).useDefaultMaxWidth,
                e.Nb(l, 22).isDummy,
              ]));
          },
        );
      }
      function Ol(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-shop-info-text",
              [],
              null,
              null,
              null,
              Tl,
              yl,
            )),
            e.xb(1, 180224, null, 0, gl, [p.a], null, null),
          ],
          null,
          null,
        );
      }
      var Il = e.ub("au3-shop-info-text", gl, Ol, {}, {}, []),
        Cl = t("aDqW"),
        Pl = t("/W5r"),
        Nl = t("+Qv1"),
        Ml = t("XtoR"),
        vl = t("jTHl"),
        Dl = t("zL3T"),
        Sl = t("SFb6"),
        Ll = t("3LDm"),
        Fl = t("aujg"),
        El = t("+epw"),
        wl = t("zMPs"),
        kl = t("6Yk8"),
        $l = t("u6+O"),
        Al = t("CIQC"),
        zl = t("REmV"),
        Rl = t("Y3N+"),
        Hl = t("MJxn"),
        Ul = t("eIOF"),
        Bl = t("t+4g"),
        jl = t("myjn"),
        Vl = t("fOZ7");
      const Zl = () =>
          Promise.all([
            t.e(1),
            t.e(2),
            t.e(3),
            t.e(4),
            t.e(8),
            t.e(7),
            t.e(10),
            t.e(14),
            t.e(26),
            t.e(56),
            t.e(116),
          ])
            .then(t.bind(null, "g+oZ"))
            .then((n) => n.WebappsModuleNgFactory),
        Wl = () =>
          Promise.all([t.e(6), t.e(5), t.e(27), t.e(48), t.e(0), t.e(103)])
            .then(t.bind(null, "zuly"))
            .then((n) => n.ConnectedDevicesModuleNgFactory);
      class Gl {}
      var Yl = t("QDrj"),
        Kl = t("YCQm"),
        Xl = t("dezT"),
        Ql = e.vb(i, [], function (n) {
          return e.Kb([
            e.Lb(512, e.j, e.X, [[8, [o.a, y, cl, Il]], [3, e.j], e.x]),
            e.Lb(4608, en.m, en.l, [e.u]),
            e.Lb(4608, Cl.h, Cl.g, []),
            e.Lb(4608, Cl.d, Cl.f, []),
            e.Lb(4608, Cl.j, Cl.e, []),
            e.Lb(4608, Cl.c, Cl.b, []),
            e.Lb(4608, Cl.k, Cl.k, [
              Cl.l,
              Cl.h,
              Cl.d,
              Cl.j,
              Cl.c,
              Cl.m,
              Cl.o,
              Cl.n,
              Cl.a,
            ]),
            e.Lb(4608, Pl.b, Pl.b, [Nl.e, [2, Pl.a]]),
            e.Lb(4608, Ml.b, Ml.b, [Nl.e, [2, Ml.a]]),
            e.Lb(4608, vl.b, vl.b, [Nl.e, [2, vl.a]]),
            e.Lb(4608, Dl.b, Dl.b, [Nl.e, [2, Dl.a]]),
            e.Lb(4608, Sl.a, Ll.a, [P.a, Fl.a, b.a]),
            e.Lb(1073742336, en.c, en.c, []),
            e.Lb(1073742336, Cl.i, Cl.i, []),
            e.Lb(1073742336, El.a, El.a, []),
            e.Lb(1073742336, wl.a, wl.a, []),
            e.Lb(1073742336, kl.a, kl.a, []),
            e.Lb(1073742336, $l.a, $l.a, []),
            e.Lb(1073742336, Al.a, Al.a, []),
            e.Lb(1073742336, zl.a, zl.a, []),
            e.Lb(1073742336, Rl.a, Rl.a, []),
            e.Lb(1073742336, Hl.a, Hl.a, []),
            e.Lb(1073742336, Ul.a, Ul.a, []),
            e.Lb(1073742336, Bl.a, Bl.a, []),
            e.Lb(1073742336, jl.a, jl.a, []),
            e.Lb(1073742336, Vl.a, Vl.a, []),
            e.Lb(1073742336, p.n, p.n, [
              [2, p.s],
              [2, p.m],
            ]),
            e.Lb(1073742336, Gl, Gl, []),
            e.Lb(1073742336, Yl.a, Yl.a, []),
            e.Lb(1073742336, Kl.a, Kl.a, []),
            e.Lb(1073742336, Xl.a, Xl.a, []),
            e.Lb(1073742336, i, i, []),
            e.Lb(256, Cl.o, void 0, []),
            e.Lb(256, Cl.m, void 0, []),
            e.Lb(256, Cl.n, void 0, []),
            e.Lb(256, Cl.a, void 0, []),
            e.Lb(
              1024,
              p.k,
              function () {
                return [
                  [
                    {
                      path: "",
                      component: h,
                      children: [
                        { path: "webapp", loadChildren: Zl },
                        { path: "shop-bought-functions", component: Un },
                        { path: "shop-info/:fodState", component: gl },
                        { path: "connected-devices", loadChildren: Wl },
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
  },
]);
