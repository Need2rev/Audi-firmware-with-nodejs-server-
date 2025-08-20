(window.webpackJsonp = window.webpackJsonp || []).push([
  [88, 94, 108],
  {
    "6gUO": function (e, n, l) {
      "use strict";
      l.d(n, "a", function () {
        return t;
      });
      class t {}
    },
    "89Z2": function (e, n, l) {
      "use strict";
      (l.d(n, "a", function () {
        return a;
      }),
        l.d(n, "b", function () {
          return i;
        }));
      var t = l("kZht"),
        a =
          (l("kqft"),
          l("+sw+"),
          l("FfND"),
          l("bou3"),
          l("yNay"),
          t.wb({
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
      function i(e) {
        return t.ac(2, [t.Mb(null, 0)], null, null);
      }
    },
    K3fK: function (e, n, l) {
      "use strict";
      (l.d(n, "a", function () {
        return o;
      }),
        l("2Uk/"));
      var t = l("Yi6/"),
        a = l("YtkY"),
        i = l("J+dc");
      class o extends t.cc {
        constructor(e, n) {
          (super(n.getLogger("phone.ECallOPRGuard")),
            (this.eCallOPRService = e));
        }
        checkActivation(e, n) {
          return this.eCallOPRService.eCallOPRRoute$.pipe(
            Object(a.a)(
              (n) =>
                !n ||
                (this.logger.warn(
                  `Routing to ${e} not allowed, ECall/OPR is active`,
                ),
                !1),
            ),
            Object(i.a)(1),
          );
        }
      }
    },
    VUTu: function (e, n, l) {
      "use strict";
      (l.d(n, "a", function () {
        return y;
      }),
        l.d(n, "b", function () {
          return w;
        }));
      var t = l("kZht"),
        a = l("HVUF"),
        i = l("B3Zb"),
        o = l("yNay"),
        u = l("8TlW"),
        r = l("fu7d"),
        c = l("bou3"),
        s = l("ijxY"),
        b = l("Xo58"),
        d = l("m3Ja"),
        p = l("r+e+"),
        m = l("bmFL"),
        g = l("T8E5"),
        h = l("An66"),
        x = l("gKAS"),
        f = l("Brsi"),
        y =
          (l("nK9R"),
          l("qzuC"),
          l("8yWk"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);position:relative;display:flex;flex-direction:row;flex:0 0 auto;color:#fff;height:119px;border-style:solid;border-width:0 0 2px;border-image:linear-gradient(90deg,hsla(0,0%,87.1%,.7) 0,hsla(0,0%,87.1%,.9) 36%,hsla(0,0%,87.1%,.4)) 1 1;z-index:10;transform:translateZ(0)}[_nghost-%COMP%]   .fpk-stage-big[_nghost-%COMP%], .fpk-stage-big   [_nghost-%COMP%], [_nghost-%COMP%]   .fpk-stage-small[_nghost-%COMP%], .fpk-stage-small   [_nghost-%COMP%]{border:none}[_nghost-%COMP%]     au3-button .button__text{font-size:30px}[_nghost-%COMP%]:after{content:"";position:absolute;bottom:-7px;left:0;width:100%;height:5px;background:linear-gradient(180deg,#000,transparent)}.tl--text-only[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{border-left:0}.tl--no-dividing-border[_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%], .tl--no-dividing-border[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{border-image:none;border-style:none}.title-line__content--left[_ngcontent-%COMP%]{display:inline-flex;flex-direction:row;align-self:center;margin-right:auto}.title-line__breadcrumbs[_ngcontent-%COMP%]{position:absolute;align-self:center;margin-right:2px}.title-line__content-wrapper--center[_ngcontent-%COMP%]{position:relative;flex:1 0 0;align-self:center;font-size:40px;height:119px;border-style:solid;border-image:linear-gradient(0deg,hsla(0,0%,100%,.7),transparent 80%) 1 2%;display:flex;flex-direction:row}.title-line__content-wrapper--center[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-1px;width:2px;height:2px;background:#000}.title-line__content--center[_ngcontent-%COMP%]{position:relative;flex:1 0 0}.title-line__loader[_ngcontent-%COMP%]{padding-top:12px;display:block;opacity:0;overflow:hidden}.title-line__loader--visible[_ngcontent-%COMP%]{opacity:1}.title-line__loader--display-none[_ngcontent-%COMP%]{display:none}.steering-wheel-left[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{margin-right:2px;border-width:0 0 0 1px}.steering-wheel-left[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after, .steering-wheel-left   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after{left:auto;right:-2px}.steering-wheel-left[_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%]{padding:0 0 0 30px}.steering-wheel-right[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{margin-left:2px;border-width:0 1px 0 0}.steering-wheel-right[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after, .steering-wheel-right   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after{left:-2px;right:auto}.steering-wheel-right[_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%]{padding:0 30px 0 0}.title-line__content--right[_ngcontent-%COMP%]{display:inline-flex;flex-direction:row;align-self:center;text-align:end}.content__title[_ngcontent-%COMP%]{position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:100%;height:100%;padding:12px 20px 0}.content__title--loader[_ngcontent-%COMP%]{padding-left:20px}.content__title--primary[_ngcontent-%COMP%]{color:var(--current-context);font-size:30px;width:100%}.content__title--primary[_ngcontent-%COMP%], .content__title--secondary[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.component-layout-arabic[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{direction:rtl}.component-layout-latin[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{direction:ltr}.secondary-title__wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;flex:1 1 0;overflow:hidden;max-width:100%;width:100%}.content__title--icon[_ngcontent-%COMP%]{margin:0 30px 0 10px}.content__title--separator[_ngcontent-%COMP%]{padding:0 22px;color:var(--current-context)}@media (max-width:1280px){.content__title[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.content__title--loader[_ngcontent-%COMP%]{padding-left:20px}.content__title--primary[_ngcontent-%COMP%]{font-size:30px;width:100%}.content__title--separator[_ngcontent-%COMP%]{display:none}}.title-line__content--text-input[_ngcontent-%COMP%]{position:relative;flex:1;display:flex;align-items:flex-end;min-width:0;direction:ltr;font-size:40px;height:calc(100% + 2px);padding:0 30px;border-style:solid;border-image:linear-gradient(0deg,hsla(0,0%,100%,.7),transparent 80%) 1 2%}.title-line__content--text-input[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;bottom:0;height:2px;width:100%;background-color:#000}.title-line__content--hidden[_ngcontent-%COMP%]{display:none}.steering-wheel-left[_nghost-%COMP%], .steering-wheel-left   [_nghost-%COMP%]{direction:ltr}.steering-wheel-left[_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%]{border-width:0 0 0 1px}.steering-wheel-right[_nghost-%COMP%], .steering-wheel-right   [_nghost-%COMP%]{direction:rtl}.steering-wheel-right[_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%]{border-width:0 1px 0 0}',
              ],
            ],
            data: {},
          }));
      function v(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
              a.b,
              a.a,
            )),
            t.xb(
              1,
              4243456,
              null,
              0,
              i.b,
              [o.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (e, n) {
            e(
              n,
              1,
              0,
              "E163_breadcrump_back.webp",
              n.component.iconCategoryBreadcrumb,
            );
          },
          function (e, n) {
            e(n, 0, 0, t.Nb(n, 1).iconComponentHidden);
          },
        );
      }
      function O(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
      function S(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
            t.Mb(null, 1),
          ],
          null,
          function (e, n) {
            e(n, 0, 0, n.component.hideRightPadding);
          },
        );
      }
      function _(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
            t.xb(
              1,
              212992,
              null,
              0,
              r.a,
              [t.l, t.D, c.a, o.a, [3, r.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              s.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            t.xb(
              3,
              245760,
              null,
              0,
              b.a,
              [[6, r.a], d.a, t.h, t.l, t.D, [2, p.a], [2, s.a], [2, m.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, l.primaryId, l.primaryIdEnumType),
              e(
                n,
                2,
                0,
                !l.hasPrimaryText ||
                  !(l.primaryIdEnumType || l.primaryDeveloperText),
              ),
              e(
                n,
                3,
                0,
                l.primaryDeveloperText,
                l.primaryId,
                l.primaryNonI18nText,
              ));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 3).backgroundColor,
              t.Nb(n, 3).fixedNumberOfLines,
              t.Nb(n, 3).mayContainLatinCharsForArabic,
              t.Nb(n, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function T(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
              a.b,
              a.a,
            )),
            t.xb(
              1,
              16384,
              null,
              0,
              g.a,
              [],
              { ttDoNotToggleDynamicValue: [0, "ttDoNotToggleDynamicValue"] },
              null,
            ),
            t.xb(
              2,
              4243456,
              null,
              0,
              i.b,
              [o.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, !l.possibleIcon),
              e(n, 2, 0, l.icon, l.iconCategoryBreadcrumb));
          },
          function (e, n) {
            e(n, 0, 0, t.Nb(n, 2).iconComponentHidden);
          },
        );
      }
      function M(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
            t.xb(
              1,
              212992,
              null,
              0,
              r.a,
              [t.l, t.D, c.a, o.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (e()(),
            t.yb(
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
            t.xb(
              3,
              212992,
              null,
              0,
              r.a,
              [t.l, t.D, c.a, o.a, [3, r.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              4,
              16384,
              null,
              0,
              s.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            t.xb(
              5,
              245760,
              null,
              0,
              b.a,
              [[6, r.a], d.a, t.h, t.l, t.D, [2, p.a], [2, s.a], [2, m.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
            (e()(), t.hb(16777216, null, null, 1, null, T)),
            t.xb(
              7,
              16384,
              null,
              0,
              h.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "SecondaryText"),
              e(n, 3, 0, l.secondaryId, l.secondaryIdEnumType),
              e(
                n,
                4,
                0,
                !l.hasSecondaryText ||
                  !(l.secondaryIdEnumType || l.secondaryDeveloperText),
              ),
              e(
                n,
                5,
                0,
                l.secondaryDeveloperText,
                l.secondaryId,
                l.secondaryNonI18nText,
              ),
              e(n, 7, 0, !!l.icon));
          },
          function (e, n) {
            e(
              n,
              2,
              0,
              t.Nb(n, 5).backgroundColor,
              t.Nb(n, 5).fixedNumberOfLines,
              t.Nb(n, 5).mayContainLatinCharsForArabic,
              t.Nb(n, 5).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function C(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
              x.b,
              x.a,
            )),
            t.xb(
              1,
              49152,
              null,
              0,
              f.a,
              [],
              { animated: [0, "animated"] },
              null,
            ),
          ],
          function (e, n) {
            e(n, 1, 0, n.component.loaderActive);
          },
          function (e, n) {
            var l = n.component;
            e(n, 0, 0, !l.textToolHasLoader, l.loaderActive);
          },
        );
      }
      function N(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
            (e()(),
            t.yb(
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
            (e()(),
            t.yb(
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
            (e()(), t.hb(16777216, null, null, 1, null, _)),
            t.xb(
              4,
              16384,
              null,
              0,
              h.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), t.hb(16777216, null, null, 1, null, M)),
            t.xb(
              6,
              16384,
              null,
              0,
              h.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), t.hb(16777216, null, null, 1, null, C)),
            t.xb(
              8,
              16384,
              null,
              0,
              h.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 4, 0, l.hasPrimaryText),
              e(n, 6, 0, l.hasSecondaryText),
              e(n, 8, 0, l.hasLoader));
          },
          function (e, n) {
            e(n, 2, 0, n.component.hasLoader);
          },
        );
      }
      function L(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
      function P(e) {
        return t.ac(
          0,
          [t.Mb(null, 3), (e()(), t.hb(0, null, null, 0))],
          null,
          null,
        );
      }
      function I(e) {
        return t.ac(
          0,
          [t.Mb(null, 4), (e()(), t.hb(0, null, null, 0))],
          null,
          null,
        );
      }
      function w(e) {
        return t.ac(
          2,
          [
            (e()(), t.hb(16777216, null, null, 1, null, v)),
            t.xb(
              1,
              16384,
              null,
              0,
              h.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            t.yb(
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
            t.Mb(null, 0),
            (e()(), t.hb(16777216, null, null, 2, null, O)),
            t.xb(
              5,
              540672,
              null,
              0,
              h.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            t.Pb(131072, h.b, [t.h]),
            (e()(), t.hb(16777216, null, null, 1, null, S)),
            t.xb(
              8,
              16384,
              null,
              0,
              h.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(), t.hb(0, [["center", 2]], null, 0, null, N)),
            (e()(),
            t.yb(
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
            t.Mb(null, 2),
            (e()(), t.hb(16777216, null, null, 2, null, L)),
            t.xb(
              13,
              540672,
              null,
              0,
              h.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            t.Pb(131072, h.b, [t.h]),
            (e()(), t.hb(0, [["done", 2]], null, 0, null, P)),
            (e()(), t.hb(0, [["edit", 2]], null, 0, null, I)),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, l.showBreadcrumbsIcon),
              e(
                n,
                5,
                0,
                t.Yb(n, 5, 0, t.Nb(n, 6).transform(l.editButtonLeft$))
                  ? t.Nb(n, 16)
                  : t.Nb(n, 15),
              ),
              e(n, 8, 0, l.hasTextInput, t.Nb(n, 9)),
              e(
                n,
                13,
                0,
                t.Yb(n, 13, 0, t.Nb(n, 14).transform(l.editButtonLeft$))
                  ? t.Nb(n, 15)
                  : t.Nb(n, 16),
              ));
          },
          null,
        );
      }
    },
    Z2XD: function (e, n, l) {
      "use strict";
      (l.d(n, "a", function () {
        return a;
      }),
        l.d(n, "b", function () {
          return i;
        }));
      var t = l("kZht"),
        a =
          (l("y9xZ"),
          l("yNay"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;padding:16px 48px 25px}.steering-wheel-left[_nghost-%COMP%], .steering-wheel-left   [_nghost-%COMP%]{padding-right:56px}.steering-wheel-right[_nghost-%COMP%], .steering-wheel-right   [_nghost-%COMP%]{padding-left:56px}",
              ],
            ],
            data: {},
          }));
      function i(e) {
        return t.ac(0, [t.Mb(null, 0)], null, null);
      }
    },
    ZXHi: function (e, n, l) {
      "use strict";
      (l.d(n, "a", function () {
        return o;
      }),
        l.d(n, "b", function () {
          return u;
        }));
      var t = l("kZht"),
        a = l("EyLa"),
        i = l("4nnk"),
        o =
          (l("IRNg"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%}.init-view__message[_ngcontent-%COMP%]{height:230px;max-width:100%;font-size:40px;line-height:66px;color:#fff;text-align:center}.init-view__progress[_ngcontent-%COMP%]{width:500px;max-width:60%;height:20px;margin:0 auto}",
              ],
            ],
            data: {},
          }));
      function u(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "div",
              [["class", "init-view__message"]],
              null,
              null,
              null,
              null,
              null,
            )),
            t.Mb(null, 0),
            (e()(),
            t.yb(
              2,
              0,
              null,
              null,
              2,
              "div",
              [["class", "init-view__progress"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            t.yb(
              3,
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
              a.b,
              a.a,
            )),
            t.xb(
              4,
              49152,
              null,
              0,
              i.a,
              [t.l, t.h],
              { current: [0, "current"] },
              null,
            ),
          ],
          function (e, n) {
            e(n, 4, 0, n.component.current);
          },
          function (e, n) {
            e(n, 3, 0, t.Nb(n, 4).shouldRotateForSxm, t.Nb(n, 4).infinite);
          },
        );
      }
    },
    doQC: function (e, n, l) {
      "use strict";
      (l.d(n, "a", function () {
        return i;
      }),
        l("YEFf"));
      var t = l("Yi6/"),
        a = l("Zbi+");
      class i extends t.cc {
        constructor(e, n) {
          (super(n.getLogger("phone.EsimConnectedGuard")),
            (this.phoneService = e));
        }
        checkActivation(e, n) {
          const l = this.phoneService.phones;
          return l && null != l.find((e) => e.connectionState === a.e.EMBEDDED)
            ? (this.logger.info(
                "canActivate: allow activation because eSim is available",
              ),
              !0)
            : (this.logger.error(
                "canActivate: deny activation because eSim is not available",
              ),
              !1);
        }
      }
    },
    eZMD: function (e, n, l) {
      "use strict";
      (l.d(n, "a", function () {
        return m;
      }),
        l.d(n, "b", function () {
          return x;
        }));
      var t = l("kZht"),
        a = l("8TlW"),
        i = l("fu7d"),
        o = l("bou3"),
        u = l("yNay"),
        r = l("ijxY"),
        c = l("Xo58"),
        s = l("m3Ja"),
        b = l("r+e+"),
        d = l("bmFL"),
        p = l("An66"),
        m =
          (l("HD2x"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;max-height:100%;max-width:100%;overflow:hidden}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;text-align:center;flex:1 1 0;font-size:40px;min-height:0}.secondary-text[_ngcontent-%COMP%]{padding-top:40px;font-size:30px}[_nghost-%COMP%]     [instruction-text-operational-panel], [_nghost-%COMP%]     au3-operation-panel{padding-top:9px;padding-bottom:8px}.component-layout-arabic[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .content[_ngcontent-%COMP%]{direction:rtl}.component-layout-latin[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .content[_ngcontent-%COMP%]{direction:ltr}.steering-wheel-left[_nghost-%COMP%]   .action-area[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .action-area[_ngcontent-%COMP%]{flex-direction:row}.steering-wheel-right[_nghost-%COMP%]   .action-area[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .action-area[_ngcontent-%COMP%]{flex-direction:row-reverse}",
              ],
            ],
            data: {},
          }));
      function g(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
              a.b,
              a.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              i.a,
              [t.l, t.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              r.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            t.xb(
              3,
              245760,
              null,
              0,
              c.a,
              [[6, i.a], s.a, t.h, t.l, t.D, [2, b.a], [2, r.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(
              n,
              1,
              0,
              l.primaryTextId ? l.primaryTextId : "PrimaryText",
              l.primaryTextIdEnum,
            ),
              e(n, 2, 0, !l.hasPrimaryText),
              e(
                n,
                3,
                0,
                l.primaryDeveloperText,
                l.primaryTextId ? l.primaryTextId : "PrimaryText",
                l.primaryFixedNumberOfLines,
                l.primaryNonI18nText,
              ));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 3).backgroundColor,
              t.Nb(n, 3).fixedNumberOfLines,
              t.Nb(n, 3).mayContainLatinCharsForArabic,
              t.Nb(n, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function h(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
              a.b,
              a.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              i.a,
              [t.l, t.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              r.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            t.xb(
              3,
              245760,
              null,
              0,
              c.a,
              [[6, i.a], s.a, t.h, t.l, t.D, [2, b.a], [2, r.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(
              n,
              1,
              0,
              l.secondaryTextId ? l.secondaryTextId : "SecondaryText",
              l.secondaryTextIdEnum,
            ),
              e(
                n,
                2,
                0,
                !l.hasSecondaryText ||
                  (!l.secondaryDeveloperText && !l.secondaryTextIdEnum),
              ),
              e(
                n,
                3,
                0,
                l.secondaryDeveloperText,
                l.secondaryTextId ? l.secondaryTextId : "SecondaryText",
                l.secondaryFixedNumberOfLines,
                l.secondaryNonI18nText,
              ));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 3).backgroundColor,
              t.Nb(n, 3).fixedNumberOfLines,
              t.Nb(n, 3).mayContainLatinCharsForArabic,
              t.Nb(n, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function x(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
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
            (e()(), t.hb(16777216, null, null, 1, null, g)),
            t.xb(
              2,
              16384,
              null,
              0,
              p.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), t.hb(16777216, null, null, 1, null, h)),
            t.xb(
              4,
              16384,
              null,
              0,
              p.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Mb(null, 0),
            t.Mb(null, 1),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 2, 0, l.hasPrimaryText), e(n, 4, 0, l.hasSecondaryText));
          },
          null,
        );
      }
    },
    ihOk: function (e, n, l) {
      "use strict";
      (l.d(n, "a", function () {
        return m;
      }),
        l.d(n, "b", function () {
          return f;
        }));
      var t = l("kZht"),
        a = l("An66"),
        i = l("fu7d"),
        o = l("bou3"),
        u = l("yNay"),
        r = l("8TlW"),
        c = l("Xo58"),
        s = l("m3Ja"),
        b = l("r+e+"),
        d = l("ijxY"),
        p = l("bmFL"),
        m =
          (l("ZMtB"),
          l("fzcM"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{height:100%;width:100%;max-height:100%;max-width:100%;min-height:0;display:flex;justify-content:center;flex-direction:column}.disclaimer-description[_ngcontent-%COMP%]{width:100%;font-size:40px;text-align:center}',
              ],
            ],
            data: {},
          }));
      function g(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
            t.xb(
              1,
              540672,
              null,
              0,
              a.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (e()(), t.hb(0, null, null, 0)),
          ],
          function (e, n) {
            e(n, 1, 0, n.component.contentTemplate);
          },
          null,
        );
      }
      function h(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
            t.Mb(null, 0),
            (e()(), t.hb(16777216, null, null, 1, null, g)),
            t.xb(
              3,
              16384,
              null,
              0,
              a.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), t.hb(0, null, null, 0)),
          ],
          function (e, n) {
            e(n, 3, 0, n.component.hasContentTemplate);
          },
          null,
        );
      }
      function x(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
            t.xb(
              1,
              212992,
              null,
              0,
              i.a,
              [t.l, t.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (e()(),
            t.yb(
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
            t.xb(
              3,
              212992,
              null,
              0,
              i.a,
              [t.l, t.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              4,
              245760,
              null,
              0,
              c.a,
              [[6, i.a], s.a, t.h, t.l, t.D, [2, b.a], [2, d.a], [2, p.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "Disclaimer"),
              e(
                n,
                3,
                0,
                l.restrictionReason && l.disabledTextEnum[l.restrictionReason]
                  ? l.restrictionReason
                  : l.disabledReasonEnum.ERROR,
                l.disabledTextEnum,
              ),
              e(
                n,
                4,
                0,
                l.disabledTextEnum[l.restrictionReason] ||
                  l.disabledTextEnum.ERROR,
                l.restrictionReason && l.disabledTextEnum[l.restrictionReason]
                  ? l.restrictionReason
                  : l.disabledReasonEnum.ERROR,
                6,
                l.nonI18nDisabledText,
              ));
          },
          function (e, n) {
            e(
              n,
              2,
              0,
              t.Nb(n, 4).backgroundColor,
              t.Nb(n, 4).fixedNumberOfLines,
              t.Nb(n, 4).mayContainLatinCharsForArabic,
              t.Nb(n, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function f(e) {
        return t.ac(
          2,
          [
            (e()(), t.hb(16777216, null, null, 1, null, h)),
            t.xb(
              1,
              16384,
              null,
              0,
              a.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(), t.hb(0, [["disclaimerText", 2]], null, 0, null, x)),
          ],
          function (e, n) {
            e(n, 1, 0, !n.component.active, t.Nb(n, 2));
          },
          null,
        );
      }
    },
    nRk7: function (e, n, l) {
      "use strict";
      (l.d(n, "a", function () {
        return o;
      }),
        l("YEFf"));
      var t = l("J+dc"),
        a = l("8j5Y"),
        i = l("Yi6/");
      class o extends i.cc {
        constructor(e, n) {
          (super(n.getLogger("phone.PhoneInitializedGuard")),
            (this.phoneService = e));
        }
        checkActivation(e) {
          return this.phoneService.initialized$.pipe(
            Object(t.a)(1),
            Object(a.a)((n) => {
              n ||
                this.logger.warn(
                  `routing to ${e} not allowed. initialized:`,
                  n,
                );
            }),
          );
        }
      }
    },
    oWpa: function (e, n, l) {
      "use strict";
      (l.d(n, "a", function () {
        return h;
      }),
        l.d(n, "b", function () {
          return f;
        }));
      var t = l("kZht"),
        a = l("HVUF"),
        i = l("B3Zb"),
        o = l("yNay"),
        u = l("8TlW"),
        r = l("fu7d"),
        c = l("bou3"),
        s = l("bmFL"),
        b = l("Xo58"),
        d = l("m3Ja"),
        p = l("r+e+"),
        m = l("ijxY"),
        g = l("An66"),
        h =
          (l("yegR"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;display:block}.container[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.container--column[_ngcontent-%COMP%]{flex-direction:column;align-items:center;justify-content:center}.lines[_ngcontent-%COMP%]{flex:1 1 0;line-height:65px;max-width:100%}.fpk-stage-big[_nghost-%COMP%]   .lines[_ngcontent-%COMP%], .fpk-stage-big   [_nghost-%COMP%]   .lines[_ngcontent-%COMP%], .fpk-stage-small[_nghost-%COMP%]   .lines[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .lines[_ngcontent-%COMP%]{line-height:59px}.lines--column[_ngcontent-%COMP%]{flex:0 1 auto}.icon[_ngcontent-%COMP%]{margin-left:30px}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{flex-direction:row}.component-layout-latin[_nghost-%COMP%]   .line[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .line[_ngcontent-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{margin-left:30px;margin-right:0}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{flex-direction:row-reverse}.component-layout-arabic[_nghost-%COMP%]   .line[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .line[_ngcontent-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{margin-left:0;margin-right:30px}",
              ],
            ],
            data: {},
          }));
      function x(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "icon"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              a.b,
              a.a,
            )),
            t.xb(
              1,
              4243456,
              null,
              0,
              i.b,
              [o.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            e(n, 1, 0, l.iconFilename, l.iconCategory);
          },
          function (e, n) {
            e(n, 0, 0, t.Nb(n, 1).iconComponentHidden);
          },
        );
      }
      function f(e) {
        return t.ac(
          2,
          [
            t.Tb(402653184, 1, { container: 0 }),
            (e()(),
            t.yb(
              1,
              0,
              [
                [1, 0],
                ["container", 1],
              ],
              null,
              6,
              "div",
              [["class", "container"]],
              [[2, "container--column", null]],
              null,
              null,
              null,
              null,
            )),
            (e()(),
            t.yb(
              2,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "lines"],
                ["id", "StatustextLines"],
              ],
              [
                [2, "lines--column", null],
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
            t.xb(
              3,
              212992,
              null,
              0,
              r.a,
              [t.l, t.D, c.a, o.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              16384,
              null,
              0,
              s.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.xb(
              5,
              245760,
              null,
              0,
              b.a,
              [[6, r.a], d.a, t.h, t.l, t.D, [2, p.a], [2, m.a], [2, s.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            (e()(), t.hb(16777216, null, null, 1, null, x)),
            t.xb(
              7,
              16384,
              null,
              0,
              g.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 3, 0, "StatustextLines"),
              e(n, 4, 0, l.ttInterpolateParams),
              e(
                n,
                5,
                0,
                l.developerText,
                "StatustextLines",
                l.maxNumberOfLines,
                l.nonI18nText,
              ),
              e(n, 7, 0, l.iconFilename && l.iconCategory));
          },
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, l.iconBelowText),
              e(
                n,
                2,
                0,
                l.iconBelowText,
                t.Nb(n, 5).backgroundColor,
                t.Nb(n, 5).fixedNumberOfLines,
                t.Nb(n, 5).mayContainLatinCharsForArabic,
                t.Nb(n, 5).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
    },
    unKt: function (e, n, l) {
      "use strict";
      (l.r(n),
        l.d(n, "MessagingModuleNgFactory", function () {
          return Ua;
        }));
      var t = l("kZht"),
        a = l("Yi6/"),
        i = l("AGsL");
      class o {
        constructor(e) {
          ((this.resourceService = e), (this.context = a.s.Phone));
        }
        ngOnDestroy() {
          this.resourceService.destroy();
        }
      }
      var u = l("bwdy"),
        r = l("8lHc"),
        c = l("xVbo"),
        s = l("fnmL"),
        b = l("clth");
      class d {
        constructor(e, n, l) {
          ((this.resourceService = e),
            (this.routingService = n),
            (this.subscription = u.a.EMPTY),
            (this.logger = l.getLogger("messaging.InitializationComponent")));
        }
        ngAfterViewInit() {
          const e = this.resourceService.initialized$.pipe(
            Object(c.a)((e) => e),
          );
          this.subscription = Object(r.a)(3e3)
            .pipe(Object(s.a)(e))
            .subscribe(() => {
              (this.logger.debug("Redirection to SourceSelection."),
                this.routingService.goTo(b.a.SourceSelection));
            });
        }
        ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }
      var p = l("HM3f"),
        m = l("YtkY");
      class g {
        constructor(e, n) {
          ((this.resourceService = e),
            (this.routingService = n),
            (this.subscription = u.a.EMPTY));
        }
        ngAfterViewInit() {
          const e = this.resourceService.accounts$.pipe(
            Object(m.a)((e) => e && e.length > 0),
            Object(c.a)((e) => e),
          );
          this.subscription = Object(p.b)(Object(r.a)(3e3), e)
            .pipe()
            .subscribe(() => this.routingService.goTo(b.a.SourceSelection));
        }
        ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }
      var h = l("ROBh"),
        x = l("TLy2"),
        f = l("IXiK"),
        y = l("vPDv"),
        v = l("d3LF"),
        O = (function (e) {
          return (
            (e.Mail = "E-Mail\n{{accountName}}"),
            (e.SMS = "SMS\n{{accountName}}"),
            e
          );
        })({});
      const S = {
          [f.a.MAIL]: "E189_office_email.webp",
          [f.a.SMS]: "E188_phone_sms.webp",
        },
        _ = {
          [f.a.MAIL]: "E2AD_messaging_email_new_message.webp",
          [f.a.SMS]: "E2AC_messaging_sms_new_message.webp",
        };
      class T {
        constructor(e, n, l, t, a) {
          ((this.resourceService = e),
            (this.locationService = n),
            (this.infoService = l),
            (this.messagingRoutingService = t),
            (this.tileEnum = O),
            (this.currentAccount$ = this.locationService.location$.pipe(
              Object(m.a)((e) => (!!e && e.account) || void 0),
            )),
            (this.accountTiles$ = this.resourceService.accounts$.pipe(
              Object(x.a)((e) =>
                Object(p.b)(
                  e.map((e) =>
                    this.iconForAccount(e).pipe(
                      Object(m.a)((n) => ({ account: e, icon: n })),
                    ),
                  ),
                ),
              ),
              Object(m.a)((e) =>
                e.map((e) => ({
                  accountType: this.typeEnumForAccount(e.account),
                  icon: e.icon,
                  account: e.account,
                })),
              ),
            )),
            (this.MessagingRoute = b.a),
            (this.logger = a.getLogger("messaging.SourceSelectionComponent")));
        }
        switchToAccount(e) {
          e.account
            ? this.locationService.setAccount(e.account).then(() => {
                this.messagingRoutingService.goTo(
                  b.a.SourceSelection.children.Account,
                );
              })
            : this.logger.error(
                "Could not switch to account due to invalid account",
              );
        }
        trackMessagingSource(e, n) {
          return n && n.account ? n.account.id : n;
        }
        typeEnumForAccount(e) {
          return e.accountType
            ? e.accountType === f.a.SMS
              ? O.SMS
              : O.Mail
            : "";
        }
        iconForAccount(e) {
          return e.accountType
            ? this.infoService
                .hasNewMessages(e)
                .pipe(
                  Object(m.a)((n) =>
                    e.accountType
                      ? n
                        ? _[e.accountType]
                        : S[e.accountType]
                      : "",
                  ),
                )
            : Object(h.a)("");
        }
      }
      var M = l("QQZH"),
        C = l("J+dc"),
        N = l("kuMc"),
        L = l("wYfD"),
        P = l("rJ2r"),
        I = (function (e) {
          return (
            (e[(e.NewSms = 0)] = "NewSms"),
            (e[(e.NewEmail = 1)] = "NewEmail"),
            (e[(e.Folder = 2)] = "Folder"),
            e
          );
        })({});
      class w {
        constructor(e, n, l, t, i, o, u) {
          ((this.infoService = e),
            (this.messagingRoutingService = n),
            (this.locationService = l),
            (this.resourceService = t),
            (this.operationsService = i),
            (this.cdr = o),
            (this.accountTypeEnum = v.b),
            (this.tiles = []),
            (this.tileTypeEnum = I),
            (this.folderTypeEnum = L.b),
            (this.MessagingRoute = b.a),
            (this.destroy$$ = new M.a(1)),
            (this.logger = u.getLogger("messaging.AccountComponent")),
            (this.account$ = this.locationService.location$.pipe(
              Object(m.a)((e) => e.account),
              Object(a.pd)(this.logger, "constructor: account$ updated:"),
              Object(a.Kd)(),
            )),
            (this.folders$ = this.locationService.location$.pipe(
              Object(x.a)((e) =>
                e.account
                  ? this.resourceService
                      .getFoldersFor$(e.account)
                      .pipe(Object(m.a)((e) => (!!e && e.data) || []))
                  : Object(h.a)([]),
              ),
              Object(m.a)((e) => {
                const n = e.filter((e) => e.folderType === L.b.ROOT);
                return n.length > 0
                  ? e.filter(
                      (e) => !!e.parentFolder && e.parentFolder.id === n[0].id,
                    )
                  : [];
              }),
              Object(a.pd)(this.logger, "constructor: folders$ updated:"),
              Object(a.Kd)(),
            )));
        }
        ngOnInit() {
          (this.account$
            .pipe(Object(C.a)(1), Object(N.a)(this.destroy$$))
            .subscribe((e) => {
              e && this.operationsService.setRecipients(e, []);
            }),
            Object(p.b)(this.account$, this.folders$)
              .pipe(Object(N.a)(this.destroy$$))
              .subscribe(([e, n]) => {
                if (e) {
                  const l = n.map((e) => ({ type: I.Folder, folder: e })),
                    t = this.nonFolderTiles(e, n);
                  (this.logger.info("ngOnInit: updating tiles with:", {
                    folderTiles: l,
                    nonFolderTiles: t,
                  }),
                    (this.tiles = [...t, ...l]),
                    this.cdr.markForCheck());
                } else
                  this.locationService.setLocation({}).then(() => {
                    this.messagingRoutingService.goTo(b.a.SourceSelection);
                  });
              }));
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        goToSourceSelection(e) {
          this.locationService.setLocation({ account: e }).then(() => {
            this.messagingRoutingService.goTo(b.a.SourceSelection);
          });
        }
        tileClick(e) {
          if (e && (e.type === I.NewSms || e.type === I.NewEmail)) {
            const e = this.locationService.location;
            return e.account
              ? ((e.folder = void 0),
                (e.message = void 0),
                (e.content = void 0),
                (e.template = void 0),
                (e.operation = P.a.SEND),
                void this.locationService.setLocation(e).then(() => {
                  (this.operationsService.setRecipients(
                    this.locationService.location.account,
                    [],
                  ),
                    this.messagingRoutingService.goTo(
                      b.a.SendMessage.children.TemplateLoad,
                    ));
                }))
              : void this.logger.error("tileClick: no active account!");
          }
          e &&
            e.folder &&
            e.folder.account &&
            this.locationService.setFolder(e.folder).then(() => {
              this.messagingRoutingService.goTo(
                b.a.SourceSelection.children.Account.children.Folder,
              );
            });
        }
        nonFolderTiles(e, n) {
          if (!n.find((e) => e.folderType === L.b.OUTBOX)) return [];
          switch (e.accountType) {
            case L.a.MAIL:
              return [{ type: I.NewEmail }];
            case L.a.SMS:
              return [{ type: I.NewSms }];
            default:
              return (
                this.logger.error(`unhandled account type: ${e.accountType}`),
                []
              );
          }
        }
      }
      var E = l("C05f"),
        D = l("ZTXN"),
        A = l("g6G6"),
        $ = l("Ohay"),
        j = l("vAPC"),
        R = l("HaSC"),
        k = l("8j5Y"),
        F = l("F/Dh"),
        B = l("prE9"),
        z = l("7SLS"),
        G = l("oPv+"),
        Y = l("jIqt"),
        V = l("4e/d"),
        H = l("574M"),
        U = l("6xFL"),
        K = l("YEFf"),
        W = l("sK8D"),
        Z = l("14+n"),
        q = l("RXfg"),
        X = l("pgjS"),
        J = (function (e) {
          return (
            (e.call = "call"),
            (e.navigate = "navigate"),
            (e.answer = "answer"),
            (e.answerAll = "answerAll"),
            (e.allRecipients = "allRecipients"),
            (e.forward = "forward"),
            (e.resend = "resend"),
            (e.extractNumber = "extractNumber"),
            (e.extractEmail = "extractEmail"),
            e
          );
        })({});
      class Q {
        constructor(e, n, l, t, i, o, r, d, g, h, f, y) {
          ((this.routingService = e),
            (this.locationService = n),
            (this.operationService = l),
            (this.resourceService = t),
            (this.addressbookService = i),
            (this.phoneService = o),
            (this.popupManagementService = r),
            (this.optionsMenuService = d),
            (this.naviContactSearchService = g),
            (this.naviRoutingService = h),
            (this.systemComponentsService = f),
            (this.answerId = 1),
            (this.answerAllId = 2),
            (this.forwardId = 3),
            (this.resendId = 4),
            (this.allRecipientsId = 5),
            (this.callId = 6),
            (this.extractNumberId = 7),
            (this.extractAddressId = 8),
            (this.navigateId = 9),
            (this.subscriptions = new u.a()),
            (this.callOption$ = this.getMessage$().pipe(
              Object(m.a)((e) => {
                const n = this.isCallVisible(e);
                return {
                  id: this.callId,
                  icon: "E053_phone_call.webp",
                  developerText: "Anrufen",
                  visible: n,
                  enabled: n,
                  textId: J.call,
                };
              }),
              Object(Y.a)(void 0),
            )),
            (this.navigateOption$ = Object(p.b)(
              this.getMessage$(),
              this.systemComponentsService.isComponentAvailable$(X.a.Navi),
            ).pipe(
              Object(m.a)(([e, n]) => {
                const l = n && this.isNavigateVisible(e);
                return {
                  id: this.navigateId,
                  icon: "E938_map_start_guidance_instantly.webp",
                  developerText: "Navigieren",
                  visible: l,
                  enabled: l,
                  textId: J.navigate,
                  routeTo: W.b.ContactSearch,
                };
              }),
              Object(Y.a)(void 0),
            )),
            (this.answerOption$ = this.getAccount$().pipe(
              Object(s.a)(this.getFolder$()),
              Object(c.a)(([e, n]) => !!e && !!n),
              Object(m.a)(([e, n]) => {
                const l = this.isAnswerVisible(e, n);
                return {
                  id: this.answerId,
                  icon: "E83C_office_msg_answered.webp",
                  developerText: "Antworten",
                  visible: l,
                  enabled: l,
                  textId: J.answer,
                  routeTo: q.a,
                };
              }),
              Object(Y.a)(void 0),
            )),
            (this.answerAllOption$ = this.getAccount$().pipe(
              Object(s.a)(this.getFolder$()),
              Object(c.a)(([e, n]) => !!e && !!n),
              Object(x.a)(([e, n]) =>
                this.isAnswerAllVisible(e, n).pipe(
                  Object(m.a)((e) => ({
                    id: this.answerAllId,
                    icon: "E222_messaging_reply_all.webp",
                    developerText: "Allen Antworten",
                    visible: e,
                    enabled: e,
                    textId: J.answerAll,
                    routeTo: q.a,
                  })),
                ),
              ),
              Object(Y.a)(void 0),
            )),
            (this.allRecipientsOption$ = this.getAccount$().pipe(
              Object(s.a)(this.getFolder$()),
              Object(c.a)(([e, n]) => !!e && !!n),
              Object(m.a)(([e, n]) => {
                const l = this.isAllRecipientsVisible(e, n);
                return {
                  id: this.allRecipientsId,
                  icon: "E2AE_messaging_show_recipient.webp",
                  developerText: "Empf\xe4nger anzeigen",
                  visible: l,
                  enabled: l,
                  textId: J.allRecipients,
                  routeTo:
                    b.a.SourceSelection.children.Account.children.Folder
                      .children.Message.children.AllRecipients,
                };
              }),
              Object(Y.a)(void 0),
            )),
            (this.forwardOption$ = this.getAccount$().pipe(
              Object(s.a)(this.getFolder$()),
              Object(c.a)(([e, n]) => !!e && !!n),
              Object(m.a)(([e, n]) => {
                const l = this.isForwardVisible(e, n);
                return {
                  id: this.forwardId,
                  icon: "E83D_office_msg_forwarded.webp",
                  developerText: "Weiter-\nleiten",
                  visible: l,
                  enabled: l,
                  textId: J.forward,
                  routeTo: q.a,
                };
              }),
              Object(Y.a)(void 0),
            )),
            (this.resendOption$ = this.getAccount$().pipe(
              Object(s.a)(this.getFolder$()),
              Object(c.a)(([e, n]) => Object(a.wd)(e) && Object(a.wd)(n)),
              Object(m.a)(([e, n]) => {
                const l = this.isResendVisible(e, n),
                  t = this.getResendIcon(e);
                return {
                  id: this.resendId,
                  icon: t,
                  developerText: "Erneut\nsenden",
                  visible: l,
                  enabled: l,
                  textId: J.resend,
                  routeTo: q.a.children.MessageSending,
                };
              }),
              Object(Y.a)(void 0),
            )),
            (this.extractNumber$ = this.getMessage$().pipe(
              Object(c.a)((e) => !!e && !!e.content && !!e.content.id),
              Object(x.a)((e) => this.getContent$(e.content.id)),
              Object(m.a)((e) => {
                const n = this.isExtractNumberVisible(e);
                return {
                  id: this.extractNumberId,
                  icon: "E2AF_messaging_extract_number.webp",
                  developerText: "Nummern\nextrahieren",
                  visible: n,
                  enabled: n,
                  textId: J.extractNumber,
                  routeTo: b.a.ExtractNumber,
                };
              }),
              Object(Y.a)(void 0),
            )),
            (this.extractEMailAddress$ = this.getMessage$().pipe(
              Object(c.a)((e) => !!e && !!e.content && !!e.content.id),
              Object(x.a)((e) =>
                this.getContent$(e.content.id).pipe(
                  Object(m.a)((n) => ({ content: n, message: e })),
                ),
              ),
              Object(c.a)(a.wd),
              Object(m.a)((e) => {
                const n = this.isExtractEMailVisible(e.message, e.content);
                return {
                  id: this.extractAddressId,
                  icon: "E2B0_messaging_extract_mailaddresses.webp",
                  developerText: "Email\nextrahieren",
                  visible: n,
                  enabled: n,
                  textId: J.extractEmail,
                  routeTo: b.a.ExtractAddress,
                };
              }),
              Object(Y.a)(void 0),
            )),
            (this.options$ = Object(p.b)(
              this.callOption$,
              this.navigateOption$,
              this.answerOption$,
              this.answerAllOption$,
              this.forwardOption$,
              this.resendOption$,
              this.allRecipientsOption$,
              this.extractNumber$,
              this.extractEMailAddress$,
            ).pipe(Object(m.a)((e) => e.filter(a.wd)))),
            (this.moreMenuDisabled$ = this.options$.pipe(
              Object(m.a)((e) => e.every((e) => !e.visible || !e.enabled)),
            )),
            (this.logger = y.getLogger("messaging.MessageOptionService")));
        }
        ngOnDestroy() {
          this.subscriptions.unsubscribe();
        }
        onOptionTap(e) {
          (e.option.id === this.callId && this.call(e.item),
            e.option.id === this.navigateId && this.navigate(e.item),
            e.option.id === this.answerId && this.answer(e.item),
            e.option.id === this.answerAllId && this.answerAll(e.item),
            e.option.id === this.forwardId && this.forward(e.item),
            e.option.id === this.resendId && this.resend(e.item),
            e.option.id === this.extractNumberId && this.extractNumbers(e.item),
            e.option.id === this.extractAddressId &&
              this.extractEmailAddresses(e.item),
            e.option.id === this.allRecipientsId &&
              e.item &&
              e.item.element &&
              e.item.element.content &&
              (this.logger.debug(
                "Navigating to all recipients: ",
                e.item.element,
              ),
              Object(p.b)(
                this.resourceService.account$(e.item.element.account.id),
                this.resourceService.folder$(e.item.element.folder.id),
              )
                .pipe(Object(C.a)(1))
                .subscribe(([n, l]) => {
                  this.setLocationFromElement(e.item.element)
                    .then(() => this.locationService.setAccount(n))
                    .then(() => this.locationService.setFolder(l))
                    .then(() => {
                      this.routingService.goTo(
                        b.a.SourceSelection.children.Account.children.Folder
                          .children.Message.children.AllRecipients,
                      );
                    });
                })));
        }
        isMessageDetailScreenActive() {
          return (
            this.routingService.currentRouteSnapshot ===
            b.a.SourceSelection.children.Account.children.Folder.children
              .Message
          );
        }
        getAccount$() {
          return this.locationService.location$.pipe(
            Object(m.a)((e) => e.account),
            Object(c.a)(a.wd),
            Object(x.a)((e) => this.resourceService.account$(e.id)),
            Object(Y.a)(this.locationService.location.account),
            Object(c.a)(a.wd),
            Object(a.Kd)(),
          );
        }
        getFolder$() {
          return this.locationService.location$.pipe(
            Object(m.a)((e) => e.folder),
            Object(c.a)(a.wd),
            Object(x.a)((e) => this.resourceService.folder$(e.id)),
            Object(Y.a)(this.locationService.location.folder),
            Object(c.a)(a.wd),
            Object(a.Kd)(),
          );
        }
        getMessage$() {
          return this.locationService.location$.pipe(
            Object(m.a)((e) => e.message),
            Object(c.a)(a.wd),
            Object(x.a)((e) => this.resourceService.message$(e.id)),
            Object(Y.a)(this.locationService.location.message),
            Object(c.a)(a.wd),
            Object(a.Kd)(),
          );
        }
        getContent$(e) {
          return this.resourceService
            .content$(e)
            .pipe(Object(c.a)(a.wd), Object(a.Kd)());
        }
        isCallVisible(e) {
          return (
            !!(
              e &&
              e.sender &&
              e.sender.hasPhoneNumbers &&
              e.type !== f.g.MMS
            ) &&
            this.isMessageDetailScreenActive() &&
            e.sender.hasPhoneNumbers
          );
        }
        isNavigateVisible(e) {
          return (
            !!(e && e.sender && e.sender.hasNavAddresses) &&
            this.isMessageDetailScreenActive() &&
            e.sender.hasNavAddresses
          );
        }
        isExtractNumberVisible(e) {
          return (
            (this.isMessageDetailScreenActive() &&
              e.extractedItems &&
              e.extractedItems.some((e) => e.type === f.d.NUMBER)) ||
            !1
          );
        }
        isExtractEMailVisible(e, n) {
          return (
            (this.isMessageDetailScreenActive() &&
              e.type === f.g.MAIL &&
              n.extractedItems &&
              n.extractedItems.some((e) => e.type === f.d.EMAIL)) ||
            !1
          );
        }
        isAnswerVisible(e, n) {
          return (
            !this.isMessageDetailScreenActive() &&
            n.folderType === f.e.INBOX &&
            !0 === e.sendSupport
          );
        }
        isAnswerAllVisible(e, n) {
          return this.optionsMenuService.item$.pipe(
            Object(m.a)(
              (l) =>
                !!l &&
                !!l.element &&
                !!l.element.recipients &&
                l.element.recipients.length > 0 &&
                l.element.type === f.g.MAIL &&
                n.folderType === f.e.INBOX &&
                !0 === e.sendSupport,
            ),
          );
        }
        isForwardVisible(e, n) {
          return (
            n.folderType !== f.e.DRAFT &&
            n.folderType !== f.e.DELETED &&
            !0 === e.sendSupport
          );
        }
        isResendVisible(e, n) {
          return (
            (n.folderType === f.e.OUTBOX || n.folderType === f.e.SENT) &&
            !0 === e.sendSupport
          );
        }
        isAllRecipientsVisible(e, n) {
          return n.folderType === f.e.INBOX && e.accountType !== f.a.SMS;
        }
        getResendIcon(e) {
          return e.accountType === f.a.MAIL
            ? "E20F_messaging_resend.webp"
            : "E2B2_messaging_resend_sms.webp";
        }
        getAccountDevice() {
          const e = this.locationService.location.account,
            n = e && e.device;
          if (n)
            return this.phoneService.phones.find(
              (e) => !(!e || !e.device || e.device.uri !== n.uri),
            );
          this.logger.warn(
            "getAccountDevice: Could not find device of messaging account",
          );
        }
        call(e) {
          const n = e.element,
            l = n && n.sender && n.sender.contact && n.sender.contact.id;
          let t = void 0;
          if (n.account) {
            const e = this.getAccountDevice();
            t = e ? e.uri : void 0;
          }
          if (!l)
            return n.sender && n.sender.address
              ? n.type === f.g.MMS
                ? void this.logger.error(
                    "Could not dial number due to message type is MMS",
                  )
                : void this.phoneService
                    .dialNumber(n.sender.address, t)
                    .catch((e) => this.logger.info("dial number:", e))
              : void this.logger.error(
                  "Could not dial number due to invalid message sender address",
                );
          this.addressbookService
            .contact$(l)
            .pipe(
              Object(V.a)(() => Object(h.a)(void 0)),
              Object(H.a)(Object(h.a)(void 0)),
              Object(C.a)(1),
            )
            .subscribe((e) => {
              if ((this.logger.debug("call contact in sub: ", e), !e))
                return void this.logger.error(
                  "call contact: failed to resolve contact for message:",
                  n,
                );
              const l = e.phoneNumberList;
              l && 0 !== l.length
                ? 1 === l.length
                  ? this.phoneService
                      .callContact(e, 0, t)
                      .catch((e) => this.logger.info("call contact:", e))
                  : (this.logger.info(
                      "more than one number. Request disambiguation popup",
                    ),
                    this.popupManagementService.request(
                      a.Ob.POPUP_MSG_OPTION_CALL_NUMBER_DISAMBIGUATION,
                      { data: { contact: e, phoneNumbers: l, phoneUri: t } },
                    ))
                : this.logger.error(
                    "call contact: resolved contact has no phone numbers:",
                    e,
                  );
            });
        }
        navigate(e) {
          const n = e.element,
            l = n && n.sender && n.sender.contact && n.sender.contact.id;
          if (!l)
            return n.sender && n.sender.contact && n.sender.contact.addressList
              ? void this.logger.error(
                  "Could not navigate to address due to invalid contactId",
                )
              : void this.logger.error(
                  "Could not navigate to address due to invalid message sender address",
                );
          this.addressbookService
            .contact$(l)
            .pipe(
              Object(V.a)(() => Object(h.a)(void 0)),
              Object(C.a)(1),
            )
            .subscribe((e) => {
              if (!e)
                return void this.logger.error(
                  "navigate to contact: failed to resolve contact for message:",
                  n,
                );
              const l =
                e.addressList &&
                e.addressList.filter((e) => e.street || e.city);
              l && 0 !== l.length
                ? 1 === l.length
                  ? this.searchForNaviContact(e, l[0])
                  : this.popupManagementService
                      .request(
                        a.Ob.POPUP_MSG_OPTION_NAV_ADDRESS_DISAMBIGUATION,
                        { data: { contact: e, addressList: l } },
                      )
                      .then((e) => {
                        (this.logger.debug(
                          "navigate: received disambiguation result:",
                          e,
                        ),
                          e
                            ? this.searchForNaviContact(
                                e.content.contact,
                                e.content.option,
                              )
                            : this.logger.error(
                                "Failed to disambiguate address",
                              ));
                      })
                : this.logger.error(
                    "navigate to contact: resolved contact has no addresses",
                    e,
                  );
            });
        }
        searchForNaviContact(e, n) {
          (this.naviContactSearchService.startSearchingForContactAddress(e, n),
            this.naviRoutingService.goTo(W.b.ContactSearch, void 0, {
              goBack: () => this.routingService.enterContext(),
              goUp: () => this.routingService.enterContext(),
            }));
        }
        answer(e) {
          if (!e.element || !e.element.content || !e.element.sender)
            return void this.logger.warn(
              "Failed to reply to message: missing fields on ",
              e,
            );
          const n = Object.assign({}, this.locationService.location);
          if (!n.account)
            return void this.logger.error(
              "Failed to reply to message: no account.",
            );
          const l = n.account,
            t = e.element.sender;
          this.setLocationFromElement(e.element)
            .then(
              () => (
                (n.operation = P.a.REPLY),
                this.locationService.setLocation(n)
              ),
            )
            .then(() => {
              const e = Object.assign(Object.assign({}, t), {
                type: f.c.RECIPIENTTO,
              });
              (this.operationService.setRecipients(l, [e]),
                this.routingService.goTo(
                  b.a.SendMessage.children.TemplateLoad,
                ));
            });
        }
        answerAll(e) {
          if (!e.element || !e.element.content || !e.element.sender)
            return void this.logger.warn(
              "Failed to reply all to message: missing fields on ",
              e,
            );
          const n = Object.assign({}, this.locationService.location);
          if (!n.account)
            return void this.logger.error(
              "Failed to reply to message: no account.",
            );
          let l;
          l = e.element.content.contacts
            ? Object(h.a)(e.element.content.contacts)
            : this.resourceService
                .content$(e.element.content.id)
                .pipe(Object(m.a)((e) => (e && e.contacts) || []));
          const t = n.account;
          l.pipe(
            Object(m.a)((e) => {
              const n = new Set();
              return e
                .filter(
                  (e) =>
                    !(
                      !e ||
                      !e.address ||
                      t.name === e.address ||
                      n.has(e.address) ||
                      (n.add(e.address), 0)
                    ),
                )
                .map((e) =>
                  e.type === f.c.SENDER
                    ? Object.assign(Object.assign({}, e), {
                        type: f.c.RECIPIENTTO,
                      })
                    : e,
                );
            }),
            Object(x.a)((l) =>
              this.setLocationFromElement(e.element)
                .then(
                  () => (
                    (n.operation = P.a.REPLY),
                    (n.folder = void 0),
                    (n.template = void 0),
                    this.locationService.setLocation(n)
                  ),
                )
                .then(() => {
                  (this.operationService.setRecipients(t, l),
                    this.routingService.goTo(
                      b.a.SendMessage.children.TemplateLoad,
                    ));
                }),
            ),
            Object(C.a)(1),
          ).toPromise();
        }
        forward(e) {
          if (!e.element || !e.element.content)
            return void this.logger.warn(
              "Failed to forward to message: missing fields on ",
              e,
            );
          const n = e.element.account;
          n
            ? e.element.attachments
              ? this.popupManagementService
                  .request(a.Ob.POPUP_POPUP_MSG_MAIL_DETAIL_FORWARD_ERROR)
                  .then((l) =>
                    l && l.action === a.Nb.CONTINUE
                      ? void this.forwardMail(e, n)
                      : void 0,
                  )
              : this.forwardMail(e, n)
            : this.logger.error("Failed to reply to message: no account.");
        }
        forwardMail(e, n) {
          this.setLocationFromElement(e.element)
            .then(() => {
              const e = Object.assign({}, this.locationService.location);
              return (
                (e.operation = P.a.FORWARD),
                (e.template = void 0),
                this.locationService.setLocation(e)
              );
            })
            .then(() => {
              (this.operationService.setRecipients(n, []),
                this.routingService.goTo(
                  b.a.SendMessage.children.TemplateLoad,
                ));
            });
        }
        resend(e) {
          Promise.all([
            this.routingService
              .goTo(q.a.children.MessageSending)
              .then(
                () => (
                  this.logger.info(
                    "goToSendingScreen: navigation to sending screen done.",
                  ),
                  this.operationService.resendMessage(e.element)
                ),
              ),
            Object(r.a)(3e3).pipe(Object(C.a)(1)).toPromise(),
          ]).then(() => {
            this.routingService.tryGoTo(b.a.SourceSelection.children.Account);
          });
        }
        extractNumbers(e) {
          (e.element.content ||
            this.logger.error(
              "Could not extract numbers due to content not available",
            ),
            this.setLocationFromElement(e.element).then(() => {
              this.routingService.goTo(b.a.ExtractNumber);
            }));
        }
        extractEmailAddresses(e) {
          (e.element.content ||
            this.logger.error(
              "Could not extract email adresses due to content not available",
            ),
            this.setLocationFromElement(e.element).then(() => {
              this.routingService.goTo(b.a.ExtractAddress);
            }));
        }
        setLocationFromElement(e) {
          const n = Object.assign({}, this.locationService.location),
            l = ["account", "folder", "content"];
          for (const t of l)
            e[t] &&
              (n[t] ? n[t].id !== e[t].id && (n[t] = e[t]) : (n[t] = e[t]));
          return (
            (n.message && n.message.id === e.id) || (n.message = e),
            this.locationService.setLocation(n)
          );
        }
      }
      var ee = l("+vJ/"),
        ne = (function (e) {
          return (
            (e[(e.Loading = 0)] = "Loading"),
            (e[(e.Empty = 1)] = "Empty"),
            (e[(e.Ready = 2)] = "Ready"),
            (e[(e.Initializing = 3)] = "Initializing"),
            e
          );
        })({});
      class le {
        constructor(e, n, l, t, a, i, o, u, r, c) {
          ((this.infoService = e),
            (this.locationService = n),
            (this.resourceService = l),
            (this.operationsService = t),
            (this.routingService = a),
            (this.generalSettingsService = i),
            (this.readoutService = o),
            (this.optionMenuService = u),
            (this.optionService = r),
            (this.messagesStateEnum = ne),
            (this.optionTypeEnum = J),
            (this.accountTypeEnum = v.b),
            (this.MessagingRoute = b.a),
            (this.listComponent$$ = new E.a(null)),
            (this.listComponent$ = this.listComponent$$.pipe(Object($.a)())),
            (this.WAIT_TIME_MS = 3e3),
            (this.INITIAL_WAIT_TIME_MS = 500),
            (this.destroy$$ = new M.a(1)),
            (this.forceLoadingState$$ = new D.a()),
            (this.forceListItemsRefresh$$ = new D.a()),
            (this.logger = c.getLogger("messaging.FolderComponent")),
            this.initObservables());
        }
        set listComponent(e) {
          this.listComponent$$.next(e || null);
        }
        isMailInbox(e, n) {
          return (
            !(!e || !n) &&
            e.accountType === f.a.MAIL &&
            n.folderType === f.e.INBOX
          );
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        goBack() {
          const e = this.locationService.location;
          e.folder && e.folder.parentFolder
            ? this.changeToParentFolder(e.folder.parentFolder)
            : this.routingService.goUp();
        }
        goToMessageContent(e, n, l) {
          const t = l.element;
          t && t.content && t.folder && t.account
            ? this.resourceService
                .getContentFor$(t)
                .pipe(
                  Object(C.a)(1),
                  Object(N.a)(this.destroy$$),
                  Object(j.a)(1500, Object(h.a)(null)),
                )
                .subscribe(() => {
                  (this.locationService.setLocation({
                    account: e,
                    folder: n,
                    message: t,
                    content: t.content,
                  }),
                    this.routingService.goTo(
                      b.a.SourceSelection.children.Account.children.Folder
                        .children.Message,
                    ));
                })
            : this.logger.error(
                "Could not go to message content due to invalid message element",
                t,
              );
        }
        goToFolder(e) {
          e
            ? this.locationService.setFolder(e).then(() => {
                this.forceLoadingState$$.next();
              })
            : this.logger.error(
                "Could not go to folder due to invalid folder",
                e,
              );
        }
        refreshInbox() {
          this.locationService.location$
            .pipe(Object(C.a)(1), Object(N.a)(this.destroy$$))
            .subscribe((e) => {
              (this.logger.info(
                "refreshInbox: trigger refresh for location:",
                e,
              ),
                this.forceLoadingState$$.next(),
                this.forceListItemsRefresh$$.next(),
                this.operationsService.refreshInbox(e.account));
            });
        }
        showOptionMenu(e) {
          this.optionService.moreMenuDisabled$
            .pipe(Object(C.a)(1), Object(N.a)(this.destroy$$))
            .subscribe((n) => {
              n || this.optionMenuService.showOptionMenu(e);
            });
        }
        initObservables() {
          ((this.account$ = this.locationService.location$.pipe(
            Object(c.a)((e) => !!e && !!e.account && !!e.folder),
            Object(m.a)((e) => e.account),
            Object($.a)((e, n) => !!e && !!n && e.id === n.id),
          )),
            (this.folder$ = this.locationService.location$.pipe(
              Object(c.a)((e) => !!e && !!e.account && !!e.folder),
              Object(m.a)((e) => e.folder),
              Object($.a)((e, n) => !!e && !!n && e.id === n.id),
            )),
            (this.dateFormat$ = this.generalSettingsService.dateFormat$.pipe(
              Object(m.a)((e) => e.activeDateFormatForMoment),
              Object($.a)(),
            )),
            (this.timeFormat$ = this.generalSettingsService.timeFormat$.pipe(
              Object(m.a)((e) => e.activeTimeFormatForMoment),
              Object($.a)(),
            )),
            (this.currentDate$ =
              this.generalSettingsService.currentDateAndTime$.pipe(
                Object($.a)((e, n) => !!e && !!n && e.isSame(n, "day")),
                Object(a.pd)(this.logger, "currentDate$:"),
              )));
          const e = this.initListPageObservable();
          ((this.state$ = this.initStateObservable(e)),
            (this.listItems$ = this.state$.pipe(
              Object(R.a)((e) => e !== ne.Ready),
              Object(x.a)(() => this.listComponent$),
              Object(C.a)(1),
              Object(x.a)(() => e),
              Object(a.pd)(this.logger, "listItems$:"),
            )),
            (this.ttsMessage$ = this.readoutService.currentMessage$));
        }
        getFolderCount$(e, n) {
          return this.resourceService
            .getFoldersFor$(e, n, { offset: 0, limit: 0 })
            .pipe(
              Object(m.a)((e) => e.total || 0),
              Object($.a)(),
            );
        }
        getMessageCount$(e) {
          return this.resourceService
            .getMessagesFor$(e, { offset: 0, limit: 0 })
            .pipe(
              Object(m.a)((e) => e.total || 0),
              Object($.a)(),
            );
        }
        getFolderForRange$(e, n, l) {
          const t = n.offset < l ? n.offset : -1;
          if (t < 0) return Object(h.a)([]);
          const a = Math.min(l - t, n.limit);
          return this.resourceService
            .getFoldersFor$(e.account, e.folder, { offset: t, limit: a })
            .pipe(Object(m.a)((e) => (!!e && e.data) || []));
        }
        getMessagesForRange$(e, n, l) {
          const t = Math.max(n.offset - l, 0),
            a = n.limit - Math.max(l - n.offset, 0);
          return a <= 0
            ? Object(h.a)([])
            : this.resourceService
                .getMessagesFor$(e.folder, { offset: t, limit: a })
                .pipe(Object(m.a)((e) => (!!e && e.data) || []));
        }
        initListPageObservable() {
          const e = this.listComponent$.pipe(
              Object(x.a)((e) =>
                e ? e.requestedDynamicListPages$ : Object(h.a)(new a.tb(0, 50)),
              ),
              Object($.a)(
                (e, n) =>
                  !!e && !!n && e.offset === n.offset && e.limit === n.limit,
              ),
              Object(k.a)((e) =>
                this.logger.debug(
                  "initListPageObservable: requested page =",
                  e,
                ),
              ),
            ),
            n = this.locationService.location$.pipe(
              Object(c.a)((e) => !!e && !!e.account && !!e.folder),
              Object($.a)(
                (e, n) =>
                  !!e.folder && !!n.folder && e.folder.id === n.folder.id,
              ),
            );
          return Object(A.a)(
            n,
            this.forceListItemsRefresh$$.pipe(Object(x.a)(() => n)),
          ).pipe(
            Object(x.a)((n) =>
              Object(p.b)(
                Object(h.a)(n),
                this.getFolderCount$(n.account, n.folder),
                this.getMessageCount$(n.folder),
                e,
              ),
            ),
            Object(x.a)(([e, n, l, t]) =>
              Object(p.b)(
                this.getFolderForRange$(e, t, n),
                this.getMessagesForRange$(e, t, n),
                Object(h.a)(t),
                Object(h.a)(n + l),
              ),
            ),
            Object(m.a)(([e, n, l, t]) => {
              const a = [];
              return (
                e.forEach((e) => {
                  a.push({ kind: "subfolder", element: e });
                }),
                n.forEach((e) => {
                  a.push({ kind: "message", element: e });
                }),
                {
                  data: a,
                  paging: { startIndex: l.offset, total: t },
                  request: l,
                }
              );
            }),
            Object(k.a)((e) =>
              this.logger.info("initListPageObservable:", e ? e.paging : null),
            ),
            Object(a.Kd)(),
          );
        }
        initStateObservable(e) {
          const n = e.pipe(
            Object(m.a)((e) => (e ? e.paging.total : -1)),
            Object(a.Kd)(),
          );
          return Object(A.a)(
            n.pipe(Object(F.a)(this.INITIAL_WAIT_TIME_MS), Object(C.a)(1)),
            n.pipe(Object(B.a)(this.WAIT_TIME_MS)),
            this.forceLoadingState$$.pipe(Object(z.a)(-1)),
          ).pipe(
            Object(m.a)(
              (e) => (
                this.logger.info(
                  "initStateObservable: received numItems = ",
                  e,
                ),
                e < 0 ? ne.Loading : e > 0 ? ne.Ready : ne.Empty
              ),
            ),
            Object($.a)(),
            Object(a.pd)(this.logger, "initStateObservable: updating state to"),
            Object(a.Kd)(),
          );
        }
        changeToParentFolder(e) {
          Object(h.a)(e)
            .pipe(
              Object(x.a)((n) =>
                n.folderType
                  ? Object(h.a)(n)
                  : this.resourceService.folder$(e.id),
              ),
              Object(C.a)(1),
              Object(N.a)(this.destroy$$),
              Object(a.pd)(this.logger, "changeToParentFolder: navigating to"),
            )
            .subscribe((e) => {
              e.folderType !== f.e.ROOT
                ? this.locationService.setFolder(e).then(() => {
                    this.forceLoadingState$$.next();
                  })
                : this.routingService.goUp();
            });
        }
        startTts(e) {
          e && this.readoutService.readoutMessage(e);
        }
        stopTts() {
          this.readoutService.abortReadout();
        }
      }
      var te = (function (e) {
        return (
          (e.FolderSubtitleNotAvailable = "Keine ungelesenen Nachrichten"),
          (e.FolderSubtitleUnreadElements =
            "Ungelesene Nachrichten: {{numUnreadMessages}}"),
          e
        );
      })({});
      class ae {
        constructor() {
          ((this.ListItemTypes = a.rb), (this.subtitleTexts = te));
        }
        get name() {
          return this.folder ? this.folder.name : "";
        }
      }
      var ie = l("qMQG"),
        oe = l("wgY5"),
        ue = l("hHAo"),
        re = (function (e) {
          return (
            (e[(e.Ready = 0)] = "Ready"),
            (e[(e.Loading = 1)] = "Loading"),
            (e[(e.Unknown = 2)] = "Unknown"),
            e
          );
        })({}),
        ce = (function (e) {
          return (
            (e[(e.Unknown = 0)] = "Unknown"),
            (e[(e.Today = 1)] = "Today"),
            (e[(e.Normal = 2)] = "Normal"),
            e
          );
        })({});
      class se {
        constructor(e, n, l, t, i, o, u, r, c, s, d, p) {
          ((this.infoService = e),
            (this.messageOptionsService = n),
            (this.resourceService = l),
            (this.locationService = t),
            (this.operationService = i),
            (this.routingService = o),
            (this.generalSettingsService = u),
            (this.optionMenuService = r),
            (this.translateService = c),
            (this.readoutService = s),
            (this.mainPerceivableContextService = d),
            (this.moreLockingParam = { lockingKey: { type: a.Eb.MORE_MENU } }),
            (this.accountTypeEnum = v.b),
            (this.stateEnum = re),
            (this.typeEnum = L.i),
            (this.dateEnum = ce),
            (this.iconCategory = a.Z),
            (this.optionTypeEnum = J),
            (this.folderTypeEnum = L.b),
            (this.WAIT_TIME_MS = 3e3),
            (this.MessagingRoute = b.a),
            (this.destroy$$ = new M.a(1)),
            (this.logger = p.getLogger("messaging.MessageComponent")),
            this.initObservables(),
            this.message$
              .pipe(
                Object(m.a)((e) => e.id),
                Object($.a)(),
                Object(a.pd)(
                  this.logger,
                  "constructor: updating messageId for speech to:",
                ),
                Object(N.a)(this.destroy$$),
              )
              .subscribe((e) => {
                d.updateDisplayElements(
                  [{ referenceId: e, referenceType: ie.d.MESSAGINGMESSAGE }],
                  ue.a.Screen,
                );
              }));
        }
        get readoutDisabledReason() {
          return a.gd.isBentley
            ? a.Ob.POPUP_MSG_POPUP_READING_NOT_POSSIBLE
            : void 0;
        }
        initObservables() {
          ((this.account$ = this.locationService.location$.pipe(
            Object(m.a)((e) => e.account),
            Object(c.a)(a.wd),
            Object(a.Kd)(),
          )),
            (this.folder$ = this.locationService.location$.pipe(
              Object(m.a)((e) => e.folder),
              Object(c.a)(a.wd),
              Object(a.Kd)(),
            )),
            (this.message$ = this.locationService.location$.pipe(
              Object(m.a)((e) => e.message),
              Object(c.a)(a.wd),
              Object(a.Kd)(),
            )),
            (this.content$ = this.message$.pipe(
              Object(x.a)((e) => this.resourceService.getContentFor$(e)),
              Object(c.a)(a.wd),
              Object(a.Kd)(),
            )),
            (this.dateFormat$ = this.generalSettingsService.dateFormat$.pipe(
              Object(m.a)((e) => e.activeDateFormatForMoment),
              Object($.a)(),
              Object(a.Kd)(),
            )),
            (this.timeFormat$ = this.generalSettingsService.timeFormat$.pipe(
              Object(m.a)((e) => e.activeTimeFormatForMoment),
              Object($.a)(),
              Object(a.Kd)(),
            )),
            (this.currentDate$ =
              this.generalSettingsService.currentDateAndTime$.pipe(
                Object($.a)((e, n) => !!e && !!n && e.isSame(n, "day")),
                Object(a.Kd)(),
              )),
            (this.dateEnum$ = Object(p.b)(
              this.message$,
              this.currentDate$,
            ).pipe(
              Object(m.a)(([e, n]) => {
                if (!e || !n) return ce.Unknown;
                const l = oe(e.dateTime);
                return l
                  ? l.isSame(n, "day")
                    ? ce.Today
                    : ce.Normal
                  : ce.Unknown;
              }),
              Object($.a)(),
              Object(a.Kd)(),
            )),
            (this.outboxExists$ = this.account$.pipe(
              Object(m.a)((e) => !!e.sendSupport),
              Object($.a)(),
              Object(a.Kd)(),
            )),
            (this.messageIndex$ = Object(p.b)(this.folder$, this.message$).pipe(
              Object(x.a)(([e, n]) => this.infoService.getMessageIndex(e, n)),
              Object(a.Kd)(),
            )));
          const e = this.message$.pipe(
            Object(x.a)((e) => this.infoService.getAdjacentMessages(e)),
          );
          ((this.prevMessage$ = e.pipe(
            Object(m.a)((e) => e.previousMessage),
            this.cacheMessage(),
            Object(a.Kd)(),
          )),
            (this.nextMessage$ = e.pipe(
              Object(m.a)((e) => e.nextMessage),
              this.cacheMessage(),
              Object(a.Kd)(),
            )),
            (this.hasAddressOrContact$ = this.message$.pipe(
              Object(m.a)(
                (e) =>
                  !(
                    !e ||
                    !e.sender ||
                    (!e.sender.contact && !e.sender.address)
                  ),
              ),
            )),
            this.wait(this.content$),
            this.state$
              .pipe(
                Object(c.a)((e) => e === re.Ready),
                Object(x.a)(() => Object(p.b)([this.content$, this.account$])),
                Object(c.a)(([e]) => e.status === L.h.UNREAD),
                Object(x.a)(
                  ([e, n]) => (
                    this.logger.info(
                      "initObservables: update read status of message content with id:",
                      e.id,
                    ),
                    this.operationService.markAsRead(e, n)
                  ),
                ),
                Object(N.a)(this.destroy$$),
              )
              .subscribe(),
            (this.ttsMessage$ = this.readoutService.currentMessage$),
            Object(p.b)(this.message$, this.messageIndex$)
              .pipe(Object(N.a)(this.destroy$$))
              .subscribe(([e, n]) =>
                this.optionMenuService.setMoreMenuItem({
                  element: e,
                  pagingIdx: n,
                }),
              ));
        }
        ngOnDestroy() {
          (this.destroy$$.next(),
            this.mainPerceivableContextService.clearContext(ue.a.Screen));
        }
        getDate(e, n) {
          return e && e.dateTime ? oe(e.dateTime).format(n) : "";
        }
        getSubtitle(e, n) {
          return e
            ? e.type === L.i.MAIL
              ? e.subject ||
                this.translateService.getConstantTranslation(
                  "MessagingSubtitleNoSubject",
                )
              : (!!e.sender && (e.sender.name || e.sender.address)) || ""
            : "";
        }
        getContactText(e) {
          return (e && !!e.sender && (e.sender.name || e.sender.address)) || "";
        }
        goBack() {
          const e = this.locationService.location;
          (this.locationService.setLocation({
            account: e.account,
            folder: e.folder,
          }),
            this.routingService.goUp());
        }
        onFling(e) {
          (e.direction === a.P.LEFT &&
            (this.logger.info("fling left => next message"),
            this.goToNextMessage()),
            e.direction === a.P.RIGHT &&
              (this.logger.info("fling right => previous message"),
              this.goToPrevMessage()));
        }
        goToPrevMessage() {
          this.prevMessage$
            .pipe(
              Object(c.a)(a.wd),
              Object(N.a)(this.destroy$$),
              Object(C.a)(1),
            )
            .toPromise()
            .then((e) => {
              const n = this.locationService.location;
              this.locationService.setLocation({
                account: n.account,
                folder: n.folder,
                message: e,
              });
            });
        }
        goToNextMessage() {
          this.nextMessage$
            .pipe(
              Object(c.a)(a.wd),
              Object(N.a)(this.destroy$$),
              Object(C.a)(1),
            )
            .toPromise()
            .then((e) => {
              const n = this.locationService.location;
              this.locationService.setLocation({
                account: n.account,
                folder: n.folder,
                message: e,
              });
            });
        }
        showOptionMenu(e, n, l) {
          this.optionMenuService.showOptionMenu(
            { element: e, pagingIdx: l },
            a.Lb.MoreMenu,
          );
        }
        answer(e, n) {
          if (!(e && e.type && e.account && n))
            return void this.logger.warn(
              "Failed to answer message: invalid message object ",
              { message: e, content: n },
            );
          const l = (e && e.sender) || void 0,
            t = (l && l.contact) || void 0,
            a = (l && l.address) || void 0;
          (this.logger.trace("Answering message: ", [e, l, t, a]),
            t || a
              ? this.operationService
                  .getContactInformationType(e.type, t || a, a)
                  .then(
                    (n) => (
                      this.operationService.setRecipients(e.account, [n]),
                      this.locationService.setMessage(e)
                    ),
                  )
                  .then(() => this.locationService.setContent(n))
                  .then(() => this.locationService.setOperation(P.a.REPLY))
                  .then(() => {
                    this.routingService.goTo(
                      b.a.SendMessage.children.TemplateLoad,
                    );
                  })
              : this.logger.warn(
                  "Cannot answer to message: sender is unknown.",
                ));
        }
        readoutMessage(e) {
          e && this.readoutService.readoutMessage(e);
        }
        stopReadout() {
          this.readoutService.abortReadout();
        }
        cacheMessage() {
          return (e) =>
            e.pipe(
              Object(x.a)((e) =>
                e && e.content
                  ? Object(p.b)(
                      Object(h.a)(e),
                      this.resourceService.content$(e.content.id),
                    )
                  : Object(p.b)(Object(h.a)(e), Object(h.a)(void 0)),
              ),
              Object(m.a)(([e]) => e),
              Object($.a)((e, n) => !!e && !!n && e.id === n.id),
            );
        }
        wait(e) {
          const n = e.pipe(
              Object(m.a)((e) => (e ? e.body : null)),
              Object(Y.a)(null),
            ),
            l = new D.a(),
            t = l.pipe(
              Object(x.a)(() =>
                Object(r.a)(this.WAIT_TIME_MS).pipe(
                  Object(z.a)(!1),
                  Object(Y.a)(!0),
                ),
              ),
              Object(Y.a)(!1),
              Object($.a)(),
            );
          this.state$ = Object(p.b)(n, t).pipe(
            Object(c.a)(([, e]) => !e),
            Object(m.a)(([e]) =>
              null === e
                ? (window.setTimeout(() => {
                    l.next();
                  }),
                  re.Loading)
                : re.Ready,
            ),
          );
        }
      }
      class be {
        constructor(e, n, l, t, i, o) {
          ((this.infoService = e),
            (this.locationService = n),
            (this.resourceService = l),
            (this.operationService = t),
            (this.routingService = i),
            (this.headerEnum = v.b),
            (this.PrefixEnum = f.c),
            (this.MessagingRoute = b.a),
            (this.location$ = this.locationService.location$),
            (this.logger = o.getLogger("messaging.recipients-component")),
            a.gd.textToolMode && this.setupTexttoolData(),
            (this.recipients$ = this.location$.pipe(
              Object(x.a)((e) =>
                e && e.content
                  ? e.content.contacts
                    ? Object(h.a)(e.content)
                    : this.resourceService.content$(e.content.id)
                  : Object(h.a)(void 0),
              ),
              Object(m.a)((e) =>
                e && e.contacts
                  ? e.contacts.filter((e) => !!e && e.type !== f.c.SENDER)
                  : [],
              ),
            )));
        }
        ngAfterViewInit() {
          a.gd.textToolMode
            ? this.logger.info(
                "ngAfterViewInit: not setting up pagedData in Texttool Mode",
              )
            : (this.pagedData = Object(p.b)(
                this.listView.requestedDynamicListPages$,
                this.recipients$,
              ).pipe(
                Object(m.a)(
                  ([e, n]) => (
                    this.logger.debug("received request: ", e),
                    {
                      data: n.slice(e.offset, e.offset + e.limit),
                      paging: { startIndex: e.offset, total: n.length },
                      request: e,
                    }
                  ),
                ),
              ));
        }
        goBack() {
          this.routingService.goBack();
        }
        sendMessageTo(e, n) {
          if (!n || !e || !e.account)
            return void this.logger.error(
              "Trying to send message to undefined contact or unspecified location!",
              { contact: n, location: e },
            );
          const l = e.account,
            t = (n && n.contact) || void 0;
          let a;
          (n && n.address
            ? (this.operationService.setRecipients(e.account, [n]),
              (a = Promise.resolve()))
            : t
              ? (this.logger.warn(
                  "sendMessageTo: Received a recipient without selected address. This should never happen.",
                ),
                (a = this.operationService
                  .getContactInformationType(
                    l.accountType === f.a.MAIL ? f.g.MAIL : f.g.SMS,
                    t,
                  )
                  .then(
                    (e) => (
                      this.operationService.setRecipients(l, [e]),
                      Promise.resolve()
                    ),
                  )))
              : (a = Promise.reject(
                  new Error(
                    "sendMessageTo: selected recipient has neither address nor contact.",
                  ),
                )),
            a
              .then(() => {
                const e = this.locationService.location;
                return (
                  (e.operation = P.a.SEND),
                  this.locationService.setLocation(e)
                );
              })
              .then(() => {
                this.routingService.goTo(b.a.SendMessage.children.TemplateLoad);
              })
              .catch((e) => {
                this.logger.error("sendMessageTo: ", e);
              }));
        }
        setupTexttoolData() {
          this.pagedData = Object(h.a)({
            paging: { startIndex: 0, total: 1 },
            data: [
              { type: f.c.RECIPIENTTO, name: "texttool-test" },
              { type: f.c.RECIPIENTBCC, name: "texttool-test" },
              { type: f.c.RECIPIENTCC, name: "texttool-test" },
              { type: f.c.RECIPIENT, name: "texttool-test" },
            ],
          });
        }
      }
      var de = l("o1hM"),
        pe = l("t8AR"),
        me = l("P1io");
      class ge {
        constructor(e, n) {
          ((this.infoService = e),
            (this.asiService = n),
            (this.MessagingRoute = b.a));
        }
        goToCarPlay() {
          this.asiService.requestAsiUi(de.m.Current);
        }
        deactivateCarPlay() {
          this.asiService.deactivateCarPlayAndEnterAppContext(me.t);
        }
      }
      class he {
        constructor(e, n, l, t, i, o) {
          ((this.routingService = e),
            (this.infoService = n),
            (this.resourceService = l),
            (this.locationService = t),
            (this.phoneService = i),
            (this.headerEnum = v.b),
            (this.listItemType = a.rb),
            (this.MessagingRoute = b.a),
            (this.location$ = this.locationService.location$),
            (this.extractedNumbers$ = this.locationService.location$.pipe(
              Object(x.a)((e) =>
                e && e.content
                  ? e.content.extractedItems
                    ? Object(h.a)(this.getExtractedItemsFromContent(e.content))
                    : this.resourceService
                        .content$(e.content.id)
                        .pipe(
                          Object(m.a)((e) =>
                            this.getExtractedItemsFromContent(e),
                          ),
                        )
                  : Object(h.a)([]),
              ),
            )),
            (this.logger = o.getLogger("messaging.ExtractNumbersComponent")));
        }
        ngAfterViewInit() {
          this.pagedData$ = Object(p.b)(
            this.listView.requestedDynamicListPages$,
            this.extractedNumbers$,
          ).pipe(
            Object(m.a)(
              ([e, n]) => (
                this.logger.debug("received request: ", e),
                {
                  data: n.slice(e.offset, e.offset + e.limit),
                  paging: { startIndex: e.offset, total: n.length },
                  request: e,
                }
              ),
            ),
          );
        }
        startCall(e, n) {
          if (n.account && n.account.device) {
            const l = n.account.device.id,
              t = this.phoneService.phones.find(
                (e) => !!e.device && e.device.id === l,
              );
            if (t)
              return (
                this.logger.info("startCall: dialing:", {
                  correspondingPhone: t,
                  focusedPhone: this.phoneService.phones.focusDevice,
                }),
                this.phoneService
                  .dialNumber(e, t.uri)
                  .catch((e) => this.logger.info("dial:", e))
              );
            this.logger.warn(
              "startCall: could not find corresponding phone for location!",
              { location: n, phones: this.phoneService.phones },
            );
          } else
            this.logger.warn(
              "startCall: location has no account or device!",
              n,
            );
          return this.phoneService
            .dialNumber(e)
            .catch((e) => this.logger.info("dial:", e));
        }
        getExtractedItemsFromContent(e) {
          if (!e.extractedItems) return [];
          const n =
              !!e.contacts &&
              (e.type === f.g.SMS || e.type === f.g.MMS) &&
              e.contacts.find((e) => !!e && e.type === f.c.SENDER),
            l = (e.extractedItems || [])
              .filter((e) => e && e.type === f.d.NUMBER)
              .map((e) => e.content)
              .filter(a.wd);
          return n && n.address ? [n.address].concat(l) : l;
        }
      }
      class xe {
        constructor(e, n, l, t, i, o) {
          ((this.routingService = e),
            (this.infoService = n),
            (this.resourceService = l),
            (this.locationService = t),
            (this.operationService = i),
            (this.headerEnum = v.b),
            (this.listItemType = a.rb),
            (this.MessagingRoute = b.a),
            (this.location$ = this.locationService.location$),
            (this.extractedMailAddresses$ = this.locationService.location$.pipe(
              Object(x.a)((e) =>
                e && e.content
                  ? e.content.extractedItems
                    ? Object(h.a)(this.getExtractedItemsFromContent(e.content))
                    : this.resourceService
                        .content$(e.content.id)
                        .pipe(
                          Object(m.a)((e) =>
                            this.getExtractedItemsFromContent(e),
                          ),
                        )
                  : Object(h.a)([]),
              ),
              Object(k.a)((e) =>
                this.logger.debug("extractedMailAddresses$:", e),
              ),
            )),
            (this.logger = o.getLogger("messaging.ExtractMailsComponent")));
        }
        ngAfterViewInit() {
          this.pagedData$ = Object(p.b)(
            this.listView.requestedDynamicListPages$,
            this.extractedMailAddresses$,
          ).pipe(
            Object(m.a)(
              ([e, n]) => (
                this.logger.debug("received request: ", e),
                {
                  data: n.slice(e.offset, e.offset + e.limit),
                  paging: { startIndex: e.offset, total: n.length },
                  request: e,
                }
              ),
            ),
          );
        }
        sendMail(e, n) {
          if (!e || !e.account || !n)
            return void this.logger.error(
              "Failed to send mail: location or address undefined.",
              { location: e, address: n },
            );
          const l = e.account;
          this.operationService
            .getContactInformationType(
              l.accountType === f.a.MAIL ? f.g.MAIL : f.g.SMS,
              n,
            )
            .then((e) => {
              this.operationService.setRecipients(l, [e]);
              const n = this.locationService.location;
              return (
                (n.operation = P.a.SEND),
                this.locationService.setLocation(n)
              );
            })
            .then(() => {
              this.routingService.goTo(b.a.SendMessage.children.TemplateLoad);
            });
        }
        getExtractedItemsFromContent(e) {
          if (!e.extractedItems) return [];
          const n =
              !!e.contacts &&
              e.type === f.g.MAIL &&
              e.contacts.find((e) => !!e && e.type === f.c.SENDER),
            l = (e.extractedItems || [])
              .filter((e) => e && e.type === f.d.EMAIL)
              .map((e) => e.content)
              .filter(a.wd);
          return n && n.address ? [n.address].concat(l) : l;
        }
      }
      class fe {}
      var ye = l("C9Ky"),
        ve = l("89Z2"),
        Oe = l("kqft"),
        Se = l("+sw+"),
        _e = l("FfND"),
        Te = l("bou3"),
        Me = l("yNay"),
        Ce = l("1VvW"),
        Ne = l("CDcS"),
        Le = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:100%;width:100%;color:#fff}",
            ],
          ],
          data: {},
        });
      function Pe(e) {
        return t.ac(
          0,
          [
            (e()(),
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
              function (e, n, l) {
                var a = !0;
                return (
                  "component:@screenChange.start" === n &&
                    (a = !1 !== t.Nb(e, 1).animationStarted(l) && a),
                  "component:@screenChange.done" === n &&
                    (a = !1 !== t.Nb(e, 1).animationDone(l) && a),
                  a
                );
              },
              ve.b,
              ve.a,
            )),
            t.xb(
              1,
              245760,
              null,
              1,
              Oe.a,
              [[2, Se.a], _e.a, t.h, Te.a, Me.a],
              null,
              null,
            ),
            t.Tb(335544320, 1, { arod: 0 }),
            (e()(),
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
              Ce.o,
              [Ce.b, t.P, t.j, [8, null], t.h],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              [[1, 4]],
              0,
              Ne.a,
              [Ce.o, t.h, t.z, Me.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0), e(n, 4, 0), e(n, 5, 0));
          },
          function (e, n) {
            (e(n, 0, 0, t.Nb(n, 1).screenState, !0),
              e(n, 3, 0, t.Nb(n, 5).hideAdjacentSibling));
          },
        );
      }
      function Ie(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-messaging",
              [],
              [[8, "className", 0]],
              null,
              null,
              Pe,
              Le,
            )),
            t.xb(1, 180224, null, 0, o, [i.a], null, null),
          ],
          null,
          function (e, n) {
            e(n, 0, 0, t.Nb(n, 1).context);
          },
        );
      }
      var we = t.ub("au3-messaging", o, Ie, {}, {}, []),
        Ee = l("Z2XD"),
        De = l("fu7d"),
        Ae = l("y9xZ"),
        $e = l("VUTu"),
        je = l("nK9R"),
        Re = l("qzuC"),
        ke = l("8yWk"),
        Fe = l("ZXHi"),
        Be = l("IRNg"),
        ze = l("8TlW"),
        Ge = l("Xo58"),
        Ye = l("m3Ja"),
        Ve = l("r+e+"),
        He = l("ijxY"),
        Ue = l("bmFL"),
        Ke = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}",
            ],
          ],
          data: {},
        });
      function We(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:MSG_MAIN_INITIALZING"],
              ],
              null,
              null,
              null,
              Ee.b,
              Ee.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, Ae.a, [Me.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              2,
              "au3-title-line",
              [
                ["class", "title-line"],
                ["id", ""],
              ],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              je.a,
              [Re.a, ke.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
                hideLeftBorder: [2, "hideLeftBorder"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              4,
              "au3-init-view",
              [],
              null,
              null,
              null,
              Fe.b,
              Fe.a,
            )),
            t.xb(7, 49152, null, 0, Be.a, [], null, null),
            (e()(),
            t.yb(
              8,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [["id", "MessagingWirdInitialisiert"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              ze.b,
              ze.a,
            )),
            t.xb(
              9,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              10,
              245760,
              null,
              0,
              Ge.a,
              [[6, De.a], Ye.a, t.h, t.l, t.D, [2, Ve.a], [2, He.a], [2, Ue.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "Screen:MSG_MAIN_INITIALZING"),
              e(n, 2, 0, "Screen:MSG_MAIN_INITIALZING"),
              e(n, 4, 0, ""),
              e(n, 5, 0, "Messaging", "Hinweis", !0),
              e(n, 9, 0, "MessagingWirdInitialisiert"),
              e(
                n,
                10,
                0,
                "Messaging wird initialisiert.\nBitte warten...",
                "MessagingWirdInitialisiert",
                3,
              ));
          },
          function (e, n) {
            (e(
              n,
              3,
              0,
              t.Nb(n, 5).hideLeftBorder,
              t.Nb(n, 5).hideDividingBorders,
            ),
              e(
                n,
                8,
                0,
                t.Nb(n, 10).backgroundColor,
                t.Nb(n, 10).fixedNumberOfLines,
                t.Nb(n, 10).mayContainLatinCharsForArabic,
                t.Nb(n, 10).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function Ze(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
              We,
              Ke,
            )),
            t.xb(1, 4374528, null, 0, d, [i.a, b.b, Me.a], null, null),
          ],
          null,
          null,
        );
      }
      var qe = t.ub("au3-initialization", d, Ze, {}, {}, []),
        Xe = l("8WOv"),
        Je = l("OtM5"),
        Qe = l("9ZFG"),
        en = l("bMuc"),
        nn = l("ZIdM"),
        ln = l("3bpu"),
        tn = l("6zvu"),
        an = l("VcEz"),
        on = l("BMrr"),
        un = l("IEns"),
        rn = l("6480"),
        cn = l("oeT7"),
        sn = l("t7cT"),
        bn = l("z6QT"),
        dn = l("flsk"),
        pn = l("FQEI"),
        mn = l("O82V"),
        gn = l("Eln4"),
        hn = l("evAh"),
        xn = l("zPMi"),
        fn = l("CpzC"),
        yn = l("0Bsn"),
        vn = l("5GjX"),
        On = l("mYyF"),
        Sn = l("v98a"),
        _n = l("aOG8"),
        Tn = l("Krzs"),
        Mn = l("eZMD"),
        Cn = l("HD2x"),
        Nn = l("M706"),
        Ln = l("aMc6"),
        Pn = l("fzcM"),
        In = l("erFY"),
        wn = l("5wO1"),
        En = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}",
            ],
          ],
          data: {},
        });
      function Dn(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              43,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:MSG_INIT_CARPLAY_ACTIVE"],
              ],
              null,
              null,
              null,
              Ee.b,
              Ee.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, Ae.a, [Me.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              15,
              "au3-title-line",
              [
                ["class", "title-line"],
                ["id", ""],
                ["primaryId", "title"],
              ],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              je.a,
              [Re.a, ke.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryId: [1, "primaryId"],
                hasSecondaryText: [2, "hasSecondaryText"],
                secondaryDeveloperText: [3, "secondaryDeveloperText"],
                hideLeftBorder: [4, "hideLeftBorder"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "SettingsButton"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              Xe.b,
              Xe.a,
            )),
            t.xb(
              7,
              147456,
              null,
              0,
              Je.a,
              [Qe.a, t.h, Me.a, [3, Je.a]],
              null,
              null,
            ),
            t.xb(8, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              9,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              11,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              null,
            ),
            t.xb(
              12,
              671744,
              null,
              0,
              rn.a,
              [_e.a, cn.i, Je.a, tn.a, rn.b, sn.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(13, 16384, null, 0, He.a, [], null, null),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              15,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              16,
              49152,
              null,
              0,
              xn.a,
              [[2, Je.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              18,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              19,
              0,
              null,
              0,
              24,
              "au3-instruction-text",
              [["id", "AppleCarPlayActivatedHint"]],
              null,
              null,
              null,
              Mn.b,
              Mn.a,
            )),
            t.xb(
              20,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              21,
              49152,
              null,
              0,
              Cn.a,
              [],
              { primaryDeveloperText: [0, "primaryDeveloperText"] },
              null,
            ),
            (e()(),
            t.yb(
              22,
              0,
              null,
              1,
              21,
              "au3-operation-panel",
              [],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              Nn.b,
              Nn.a,
            )),
            t.xb(
              23,
              49152,
              null,
              0,
              Ln.a,
              [Pn.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (e()(),
            t.yb(
              24,
              0,
              null,
              1,
              9,
              "au3-operation-panel-item",
              [["id", "GoToCarPlayButton"]],
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
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t = !1 !== e.component.goToCarPlay() && t),
                  t
                );
              },
              In.b,
              In.a,
            )),
            t.xb(
              25,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(26, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              27,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              28,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              30,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              31,
              49152,
              null,
              0,
              wn.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            t.xb(
              32,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              33,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              34,
              0,
              null,
              1,
              9,
              "au3-operation-panel-item",
              [["id", "DeactivateCarPlayButton"]],
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
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t = !1 !== e.component.deactivateCarPlay() && t),
                  t
                );
              },
              In.b,
              In.a,
            )),
            t.xb(
              35,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(36, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              37,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              38,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              40,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              41,
              49152,
              null,
              0,
              wn.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            t.xb(
              42,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              43,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "Screen:MSG_INIT_CARPLAY_ACTIVE"),
              e(n, 2, 0, "Screen:MSG_INIT_CARPLAY_ACTIVE"),
              e(n, 4, 0, ""),
              e(n, 5, 0, "Nachrichten", "title", !0, "Hinweis", !0),
              e(n, 9, 0, "SettingsButton"),
              e(n, 11, 0),
              e(n, 12, 0, l.MessagingRoute.Settings, !0),
              e(n, 15, 0),
              e(n, 16, 0, !1, "E186_settings.webp"),
              e(n, 20, 0, "AppleCarPlayActivatedHint"),
              e(
                n,
                21,
                0,
                "Apple CarPlay ist aktiv. M\xf6chten Sie zu\nApple CarPlay wechseln oder die\nFunktion deaktivieren, um die MMI-Nachrichtenfunktion zu nutzen?",
              ),
              e(n, 23, 0, !0),
              e(n, 25, 0, "GoToCarPlayButton"),
              e(n, 28, 0),
              e(n, 30, 0),
              e(n, 31, 0, "Apple CarPlay", !0),
              e(n, 35, 0, "DeactivateCarPlayButton"),
              e(n, 38, 0),
              e(n, 40, 0),
              e(n, 41, 0, "Audi MMI", !0));
          },
          function (e, n) {
            (e(
              n,
              3,
              0,
              t.Nb(n, 5).hideLeftBorder,
              t.Nb(n, 5).hideDividingBorders,
            ),
              e(
                n,
                6,
                0,
                t.Nb(n, 7).combinedDisabled,
                t.Nb(n, 7).useBrighterIcon,
                t.Nb(n, 15).markerClassEnabled,
                t.Nb(n, 16).useItemPlaceholder,
              ),
              e(n, 22, 0, t.Nb(n, 23).alignInside, t.Nb(n, 23).alignOutside),
              e(n, 24, 1, [
                t.Nb(n, 30).markerClassEnabled,
                t.Nb(n, 31).showSeparatorLeft,
                t.Nb(n, 31).showSeparatorRight,
                t.Nb(n, 31).prio1Main,
                t.Nb(n, 31).prio1SmallScale,
                t.Nb(n, 31).prio2SmallScale,
                t.Nb(n, 31).prio1,
                t.Nb(n, 31).prio2,
                t.Nb(n, 31).prio1IconText,
                t.Nb(n, 31).prio1IconOnly,
                t.Nb(n, 31).prio1TextOnly,
                t.Nb(n, 31).prio2IconText,
                t.Nb(n, 31).prio2IconOnly,
                t.Nb(n, 31).prio2TextOnly,
                t.Nb(n, 31).useDefaultMaxWidth,
                t.Nb(n, 31).isDummy,
              ]),
              e(n, 34, 1, [
                t.Nb(n, 40).markerClassEnabled,
                t.Nb(n, 41).showSeparatorLeft,
                t.Nb(n, 41).showSeparatorRight,
                t.Nb(n, 41).prio1Main,
                t.Nb(n, 41).prio1SmallScale,
                t.Nb(n, 41).prio2SmallScale,
                t.Nb(n, 41).prio1,
                t.Nb(n, 41).prio2,
                t.Nb(n, 41).prio1IconText,
                t.Nb(n, 41).prio1IconOnly,
                t.Nb(n, 41).prio1TextOnly,
                t.Nb(n, 41).prio2IconText,
                t.Nb(n, 41).prio2IconOnly,
                t.Nb(n, 41).prio2TextOnly,
                t.Nb(n, 41).useDefaultMaxWidth,
                t.Nb(n, 41).isDummy,
              ]));
          },
        );
      }
      function An(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-messaging-init-car-play",
              [],
              null,
              null,
              null,
              Dn,
              En,
            )),
            t.xb(1, 49152, null, 0, ge, [v.a, pe.a], null, null),
          ],
          null,
          null,
        );
      }
      var $n = t.ub("au3-messaging-init-car-play", ge, An, {}, {}, []),
        jn = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{height:100%;max-width:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;overflow:hidden}.label--centered[_ngcontent-%COMP%], .message[_ngcontent-%COMP%]{text-align:center}.message[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;justify-content:center;font-size:40px;color:#fff}",
            ],
          ],
          data: {},
        });
      function Rn(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:MSG_MAIN_NOT_AVAILABLE"],
              ],
              null,
              null,
              null,
              Ee.b,
              Ee.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, Ae.a, [Me.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              2,
              "au3-title-line",
              [
                ["class", "title-line"],
                ["id", ""],
              ],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              je.a,
              [Re.a, ke.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
                hideLeftBorder: [2, "hideLeftBorder"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              3,
              "div",
              [["class", "message"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            t.yb(
              7,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "label--centered"],
                ["id", "NoAccount"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              ze.b,
              ze.a,
            )),
            t.xb(
              8,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              245760,
              null,
              0,
              Ge.a,
              [[6, De.a], Ye.a, t.h, t.l, t.D, [2, Ve.a], [2, He.a], [2, Ue.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "Screen:MSG_MAIN_NOT_AVAILABLE"),
              e(n, 2, 0, "Screen:MSG_MAIN_NOT_AVAILABLE"),
              e(n, 4, 0, ""),
              e(n, 5, 0, "Messaging", "Hinweis", !0),
              e(n, 8, 0, "NoAccount"),
              e(
                n,
                9,
                0,
                "Es sind keine Nachrichtendienste verf\xfcgbar.",
                "NoAccount",
                4,
              ));
          },
          function (e, n) {
            (e(
              n,
              3,
              0,
              t.Nb(n, 5).hideLeftBorder,
              t.Nb(n, 5).hideDividingBorders,
            ),
              e(
                n,
                7,
                0,
                t.Nb(n, 9).backgroundColor,
                t.Nb(n, 9).fixedNumberOfLines,
                t.Nb(n, 9).mayContainLatinCharsForArabic,
                t.Nb(n, 9).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function kn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-no-account",
              [],
              null,
              null,
              null,
              Rn,
              jn,
            )),
            t.xb(1, 4374528, null, 0, g, [i.a, b.b], null, null),
          ],
          null,
          null,
        );
      }
      var Fn = t.ub("au3-no-account", g, kn, {}, {}, []),
        Bn = l("Obt0"),
        zn = l("3qdr"),
        Gn = l("Xast"),
        Yn = l("jgeG"),
        Vn = l("nSAP"),
        Hn = l("An66"),
        Un = l("0qMr"),
        Kn = t.wb({
          encapsulation: 0,
          styles: [
            [
              '[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.grid[_ngcontent-%COMP%]{position:relative;flex:none;height:466px;margin-top:24px;padding-top:26px;padding-bottom:14px;border:1px solid var(--current-context-bg);border-top:1px solid transparent}.grid[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;top:0;border-image-source:linear-gradient(90deg,var(--current-context-bg),var(--current-context),var(--current-context-bg));border-image-slice:1 0 0 0;border-width:1px 0 0;border-style:solid}',
            ],
          ],
          data: {},
        });
      function Wn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-tile",
              [],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t =
                      !1 !== e.component.switchToAccount(e.context.$implicit) &&
                      t),
                  t
                );
              },
              Bn.b,
              Bn.a,
            )),
            t.xb(
              1,
              16384,
              null,
              0,
              Ue.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(2, { accountName: 0 }),
            t.xb(3, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              4,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              49152,
              null,
              0,
              zn.a,
              [],
              {
                titleId: [0, "titleId"],
                titleIdEnumType: [1, "titleIdEnumType"],
                developerText: [2, "developerText"],
                icon: [3, "icon"],
                highlight: [4, "highlight"],
              },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component,
              t = e(
                n,
                2,
                0,
                null == n.context.$implicit ||
                  null == n.context.$implicit.account
                  ? null
                  : n.context.$implicit.account.name,
              );
            (e(n, 1, 0, t),
              e(n, 5, 0),
              e(n, 7, 0),
              e(
                n,
                8,
                0,
                null == n.context.$implicit
                  ? null
                  : n.context.$implicit.accountType,
                l.tileEnum,
                null == n.context.$implicit
                  ? null
                  : n.context.$implicit.accountType,
                n.context.$implicit.icon,
                (null == n.context.$implicit ||
                null == n.context.$implicit.account
                  ? null
                  : n.context.$implicit.account.id) ===
                  (null == n.parent.context.mib3Let
                    ? null
                    : n.parent.context.mib3Let.id) &&
                  !!n.parent.context.mib3Let,
              ));
          },
          function (e, n) {
            e(n, 0, 0, t.Nb(n, 7).markerClassEnabled);
          },
        );
      }
      function Zn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              26,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:MSG_MAIN_SOURCE_SELECTION"],
              ],
              null,
              null,
              null,
              Ee.b,
              Ee.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, Ae.a, [Me.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              15,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              je.a,
              [Re.a, ke.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["icon", "/icons/titelline/E186_settings.webp"],
                ["id", "SettingsButton"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              Xe.b,
              Xe.a,
            )),
            t.xb(
              7,
              147456,
              null,
              0,
              Je.a,
              [Qe.a, t.h, Me.a, [3, Je.a]],
              null,
              null,
            ),
            t.xb(8, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              9,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              11,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              null,
            ),
            t.xb(
              12,
              671744,
              null,
              0,
              rn.a,
              [_e.a, cn.i, Je.a, tn.a, rn.b, sn.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(13, 16384, null, 0, He.a, [], null, null),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              15,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              16,
              49152,
              null,
              0,
              xn.a,
              [[2, Je.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              18,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              19,
              0,
              null,
              0,
              7,
              "au3-tile-grid",
              [
                ["class", "grid"],
                ["id", ""],
              ],
              null,
              null,
              null,
              Gn.b,
              Gn.a,
            )),
            t.xb(
              20,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.Sb(512, null, yn.a, yn.a, [ln.a]),
            t.xb(
              23,
              1032192,
              null,
              1,
              Yn.a,
              [t.s, t.h, Vn.a, bn.a, yn.a, ln.a, Me.a],
              {
                paddingGridToIndicator: [0, "paddingGridToIndicator"],
                trackTile: [1, "trackTile"],
                trackPageIndex: [2, "trackPageIndex"],
                tiles: [3, "tiles"],
              },
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            t.Pb(131072, Hn.b, [t.h]),
            (e()(), t.hb(0, [[1, 2]], null, 0, null, Wn)),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "Screen:MSG_MAIN_SOURCE_SELECTION"),
              e(n, 2, 0, "Screen:MSG_MAIN_SOURCE_SELECTION"),
              e(n, 4, 0, ""),
              e(n, 5, 0, "Messaging", "Konten"),
              e(n, 9, 0, "SettingsButton"),
              e(n, 11, 0),
              e(n, 12, 0, l.MessagingRoute.Settings, !0),
              e(n, 15, 0),
              e(n, 16, 0, !1, "/icons/titelline/E186_settings.webp"),
              e(n, 20, 0, ""),
              e(
                n,
                23,
                0,
                0,
                l.trackMessagingSource,
                !0,
                t.Yb(n, 23, 3, t.Nb(n, 25).transform(l.accountTiles$)),
              ));
          },
          function (e, n) {
            (e(
              n,
              3,
              0,
              t.Nb(n, 5).hideLeftBorder,
              t.Nb(n, 5).hideDividingBorders,
            ),
              e(
                n,
                6,
                0,
                t.Nb(n, 7).combinedDisabled,
                t.Nb(n, 7).useBrighterIcon,
                t.Nb(n, 15).markerClassEnabled,
                t.Nb(n, 16).useItemPlaceholder,
              ));
          },
        );
      }
      function qn(e) {
        return t.ac(
          2,
          [
            (e()(), t.hb(16777216, null, null, 2, null, Zn)),
            t.xb(
              1,
              16384,
              null,
              0,
              Un.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, Hn.b, [t.h]),
          ],
          function (e, n) {
            var l = n.component;
            e(n, 1, 0, t.Yb(n, 1, 0, t.Nb(n, 2).transform(l.currentAccount$)));
          },
          null,
        );
      }
      function Xn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-source-selection",
              [],
              null,
              null,
              null,
              qn,
              Kn,
            )),
            t.xb(1, 49152, null, 0, T, [i.a, y.a, v.a, b.b, Me.a], null, null),
          ],
          null,
          null,
        );
      }
      var Jn = t.ub("au3-source-selection", T, Xn, {}, {}, []),
        Qn = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{height:100%}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{display:block}",
            ],
          ],
          data: {},
        });
      function el(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-tile",
              [
                ["developerText", "Neue SMS"],
                ["icon", "/icons/tiles/E2A7_messaging_write_new_sms.webp"],
                ["id", "NewSms"],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t =
                      !1 !==
                        e.component.tileClick(e.parent.context.$implicit) && t),
                  t
                );
              },
              Bn.b,
              Bn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              49152,
              null,
              0,
              zn.a,
              [],
              { developerText: [0, "developerText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "NewSms"),
              e(n, 4, 0),
              e(n, 6, 0),
              e(
                n,
                7,
                0,
                "Neue SMS",
                "/icons/tiles/E2A7_messaging_write_new_sms.webp",
              ));
          },
          function (e, n) {
            e(n, 0, 0, t.Nb(n, 6).markerClassEnabled);
          },
        );
      }
      function nl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-tile",
              [
                ["developerText", "Neue Email"],
                ["icon", "/icons/tiles/E2A8_messaging_write_new_email.webp"],
                ["id", "NewEmail"],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t =
                      !1 !==
                        e.component.tileClick(e.parent.context.$implicit) && t),
                  t
                );
              },
              Bn.b,
              Bn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              49152,
              null,
              0,
              zn.a,
              [],
              { developerText: [0, "developerText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "NewEmail"),
              e(n, 4, 0),
              e(n, 6, 0),
              e(
                n,
                7,
                0,
                "Neue Email",
                "/icons/tiles/E2A8_messaging_write_new_email.webp",
              ));
          },
          function (e, n) {
            e(n, 0, 0, t.Nb(n, 6).markerClassEnabled);
          },
        );
      }
      function ll(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-tile",
              [
                ["icon", "/icons/tiles/E831_office_email_sms_eingang.webp"],
                ["id", "InboxFolder"],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t =
                      !1 !==
                        e.component.tileClick(
                          e.parent.parent.context.$implicit,
                        ) && t),
                  t
                );
              },
              Bn.b,
              Bn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              49152,
              null,
              0,
              zn.a,
              [],
              { developerText: [0, "developerText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "InboxFolder"),
              e(n, 4, 0),
              e(n, 6, 0),
              e(
                n,
                7,
                0,
                "Eingang",
                "/icons/tiles/E831_office_email_sms_eingang.webp",
              ));
          },
          function (e, n) {
            e(n, 0, 0, t.Nb(n, 6).markerClassEnabled);
          },
        );
      }
      function tl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-tile",
              [
                ["icon", "/icons/tiles/E839_office_msg_sent.webp"],
                ["id", "SentFolder"],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t =
                      !1 !==
                        e.component.tileClick(
                          e.parent.parent.context.$implicit,
                        ) && t),
                  t
                );
              },
              Bn.b,
              Bn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              49152,
              null,
              0,
              zn.a,
              [],
              { developerText: [0, "developerText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "SentFolder"),
              e(n, 4, 0),
              e(n, 6, 0),
              e(n, 7, 0, "Gesendet", "/icons/tiles/E839_office_msg_sent.webp"));
          },
          function (e, n) {
            e(n, 0, 0, t.Nb(n, 6).markerClassEnabled);
          },
        );
      }
      function al(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-tile",
              [
                ["icon", "/icons/tiles/E832_office_email_sms_gesendet.webp"],
                ["id", "OutboxFolder"],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t =
                      !1 !==
                        e.component.tileClick(
                          e.parent.parent.context.$implicit,
                        ) && t),
                  t
                );
              },
              Bn.b,
              Bn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              49152,
              null,
              0,
              zn.a,
              [],
              { developerText: [0, "developerText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "OutboxFolder"),
              e(n, 4, 0),
              e(n, 6, 0),
              e(
                n,
                7,
                0,
                "Ausgang",
                "/icons/tiles/E832_office_email_sms_gesendet.webp",
              ));
          },
          function (e, n) {
            e(n, 0, 0, t.Nb(n, 6).markerClassEnabled);
          },
        );
      }
      function il(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-tile",
              [
                ["icon", "/icons/tiles/E83A_office_msg_draft.webp"],
                ["id", "DraftFolder"],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t =
                      !1 !==
                        e.component.tileClick(
                          e.parent.parent.context.$implicit,
                        ) && t),
                  t
                );
              },
              Bn.b,
              Bn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              49152,
              null,
              0,
              zn.a,
              [],
              { developerText: [0, "developerText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "DraftFolder"),
              e(n, 4, 0),
              e(n, 6, 0),
              e(
                n,
                7,
                0,
                "Entw\xfcrfe",
                "/icons/tiles/E83A_office_msg_draft.webp",
              ));
          },
          function (e, n) {
            e(n, 0, 0, t.Nb(n, 6).markerClassEnabled);
          },
        );
      }
      function ol(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-tile",
              [
                ["icon", "/icons/tiles/E1A8_office_msg_deleted.webp"],
                ["id", "DeletedFolder"],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t =
                      !1 !==
                        e.component.tileClick(
                          e.parent.parent.context.$implicit,
                        ) && t),
                  t
                );
              },
              Bn.b,
              Bn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              49152,
              null,
              0,
              zn.a,
              [],
              { developerText: [0, "developerText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "DeletedFolder"),
              e(n, 4, 0),
              e(n, 6, 0),
              e(
                n,
                7,
                0,
                "Gel\xf6scht",
                "/icons/tiles/E1A8_office_msg_deleted.webp",
              ));
          },
          function (e, n) {
            e(n, 0, 0, t.Nb(n, 6).markerClassEnabled);
          },
        );
      }
      function ul(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-tile",
              [
                ["icon", "/icons/tiles/E1A9_messaging_userdefined_folder.webp"],
                ["id", ""],
                ["ttIgnore", ""],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t =
                      !1 !==
                        e.component.tileClick(
                          e.parent.parent.context.$implicit,
                        ) && t),
                  t
                );
              },
              Bn.b,
              Bn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 16384, null, 0, He.a, [], null, null),
            t.xb(3, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              4,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              49152,
              null,
              0,
              zn.a,
              [],
              { nonI18nText: [0, "nonI18nText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, ""),
              e(n, 5, 0),
              e(n, 7, 0),
              e(
                n,
                8,
                0,
                null == n.parent.parent.context.$implicit.folder
                  ? null
                  : n.parent.parent.context.$implicit.folder.name,
                "/icons/tiles/E1A9_messaging_userdefined_folder.webp",
              ));
          },
          function (e, n) {
            e(n, 0, 0, t.Nb(n, 7).markerClassEnabled);
          },
        );
      }
      function rl(e) {
        return t.ac(
          0,
          [
            (e()(),
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
            (e()(),
            t.yb(
              1,
              0,
              null,
              null,
              13,
              "div",
              [],
              null,
              null,
              null,
              null,
              null,
            )),
            t.xb(
              2,
              16384,
              null,
              0,
              Hn.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, ll)),
            t.xb(
              4,
              278528,
              null,
              0,
              Hn.p,
              [t.P, t.L, Hn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, tl)),
            t.xb(
              6,
              278528,
              null,
              0,
              Hn.p,
              [t.P, t.L, Hn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, al)),
            t.xb(
              8,
              278528,
              null,
              0,
              Hn.p,
              [t.P, t.L, Hn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, il)),
            t.xb(
              10,
              278528,
              null,
              0,
              Hn.p,
              [t.P, t.L, Hn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, ol)),
            t.xb(
              12,
              278528,
              null,
              0,
              Hn.p,
              [t.P, t.L, Hn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, ul)),
            t.xb(14, 16384, null, 0, Hn.q, [t.P, t.L, Hn.o], null, null),
          ],
          function (e, n) {
            var l = n.component;
            (e(
              n,
              2,
              0,
              null == n.parent.context.$implicit ||
                null == n.parent.context.$implicit.folder
                ? null
                : n.parent.context.$implicit.folder.folderType,
            ),
              e(n, 4, 0, l.folderTypeEnum.INBOX),
              e(n, 6, 0, l.folderTypeEnum.SENT),
              e(n, 8, 0, l.folderTypeEnum.OUTBOX),
              e(n, 10, 0, l.folderTypeEnum.DRAFT),
              e(n, 12, 0, l.folderTypeEnum.DELETED));
          },
          null,
        );
      }
      function cl(e) {
        return t.ac(
          0,
          [
            (e()(),
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
              Hn.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, el)),
            t.xb(
              3,
              278528,
              null,
              0,
              Hn.p,
              [t.P, t.L, Hn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, nl)),
            t.xb(
              5,
              278528,
              null,
              0,
              Hn.p,
              [t.P, t.L, Hn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, rl)),
            t.xb(7, 16384, null, 0, Hn.q, [t.P, t.L, Hn.o], null, null),
            (e()(), t.hb(0, null, null, 0)),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, n.context.$implicit.type),
              e(n, 3, 0, l.tileTypeEnum.NewSms),
              e(n, 5, 0, l.tileTypeEnum.NewEmail));
          },
          null,
        );
      }
      function sl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              38,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:MSG_*_MAIN_FOLDER"],
              ],
              null,
              null,
              null,
              Ee.b,
              Ee.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, Ae.a, [Me.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              28,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              16384,
              null,
              0,
              Ue.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(6, { name: 0 }),
            t.xb(
              7,
              49152,
              null,
              0,
              je.a,
              [Re.a, ke.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryId: [1, "primaryId"],
                primaryIdEnumType: [2, "primaryIdEnumType"],
                secondaryDeveloperText: [3, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              8,
              0,
              null,
              0,
              10,
              "au3-title-line-item",
              [
                ["icon", "E2B3_account_selection.webp"],
                ["id", "SourceSelectionButton"],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t =
                      !1 !==
                        e.component.goToSourceSelection(
                          null == e.context.mib3Let
                            ? null
                            : e.context.mib3Let.account,
                        ) && t),
                  t
                );
              },
              Xe.b,
              Xe.a,
            )),
            t.xb(
              9,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(10, 16384, null, 0, He.a, [], null, null),
            t.xb(11, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              12,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              13,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              15,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              16,
              49152,
              null,
              0,
              xn.a,
              [[2, Je.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              18,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              19,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "SettingsButton"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              Xe.b,
              Xe.a,
            )),
            t.xb(
              20,
              147456,
              null,
              0,
              Je.a,
              [Qe.a, t.h, Me.a, [3, Je.a]],
              null,
              null,
            ),
            t.xb(21, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              22,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              23,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              24,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              null,
            ),
            t.xb(
              25,
              671744,
              null,
              0,
              rn.a,
              [_e.a, cn.i, Je.a, tn.a, rn.b, sn.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(26, 16384, null, 0, He.a, [], null, null),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              28,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              29,
              49152,
              null,
              0,
              xn.a,
              [[2, Je.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              30,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              31,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              32,
              0,
              null,
              0,
              6,
              "au3-tile-grid",
              [["id", ""]],
              null,
              null,
              null,
              Gn.b,
              Gn.a,
            )),
            t.xb(
              33,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.Sb(512, null, yn.a, yn.a, [ln.a]),
            t.xb(
              36,
              1032192,
              null,
              1,
              Yn.a,
              [t.s, t.h, Vn.a, bn.a, yn.a, ln.a, Me.a],
              { tiles: [0, "tiles"] },
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (e()(), t.hb(0, [[1, 2]], null, 0, null, cl)),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "Screen:MSG_*_MAIN_FOLDER"),
              e(n, 2, 0, "Screen:MSG_*_MAIN_FOLDER"),
              e(n, 4, 0, ""));
            var t = e(
              n,
              6,
              0,
              null == n.context.mib3Let || null == n.context.mib3Let.account
                ? null
                : n.context.mib3Let.account.name,
            );
            (e(n, 5, 0, t),
              e(
                n,
                7,
                0,
                l.infoService.getMsgHeader(
                  null == n.context.mib3Let ? null : n.context.mib3Let.account,
                ),
                l.infoService.getMsgHeader(
                  null == n.context.mib3Let ? null : n.context.mib3Let.account,
                ),
                l.accountTypeEnum,
                "Postf\xe4cher",
              ),
              e(n, 9, 0, "SourceSelectionButton"),
              e(n, 13, 0),
              e(n, 15, 0),
              e(n, 16, 0, !1, "E2B3_account_selection.webp"),
              e(n, 22, 0, "SettingsButton"),
              e(n, 24, 0),
              e(n, 25, 0, l.MessagingRoute.Settings, !0),
              e(n, 28, 0),
              e(n, 29, 0, !1, "E186_settings.webp"),
              e(n, 33, 0, ""),
              e(n, 36, 0, l.tiles));
          },
          function (e, n) {
            (e(
              n,
              3,
              0,
              t.Nb(n, 7).hideLeftBorder,
              t.Nb(n, 7).hideDividingBorders,
            ),
              e(
                n,
                8,
                0,
                t.Nb(n, 15).markerClassEnabled,
                t.Nb(n, 16).useItemPlaceholder,
              ),
              e(
                n,
                19,
                0,
                t.Nb(n, 20).combinedDisabled,
                t.Nb(n, 20).useBrighterIcon,
                t.Nb(n, 28).markerClassEnabled,
                t.Nb(n, 29).useItemPlaceholder,
              ));
          },
        );
      }
      function bl(e) {
        return t.ac(
          2,
          [
            (e()(), t.hb(16777216, null, null, 3, null, sl)),
            t.xb(
              1,
              16384,
              null,
              0,
              Un.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, Hn.b, [t.h]),
            t.Qb(3, { account: 0 }),
          ],
          function (e, n) {
            var l = n.component,
              a = e(n, 3, 0, t.Yb(n, 1, 0, t.Nb(n, 2).transform(l.account$)));
            e(n, 1, 0, a);
          },
          null,
        );
      }
      function dl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-account",
              [],
              null,
              null,
              null,
              bl,
              Qn,
            )),
            t.xb(
              1,
              245760,
              null,
              0,
              w,
              [v.a, b.b, y.a, i.a, P.c, t.h, Me.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            e(n, 1, 0);
          },
          null,
        );
      }
      var pl = t.ub("au3-account", w, dl, {}, {}, []),
        ml = l("1pak"),
        gl = l("P+G5"),
        hl = l("oWpa"),
        xl = l("yegR"),
        fl = l("4XZL"),
        yl = l("URLa"),
        vl = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.item[_ngcontent-%COMP%]{display:block;width:100%;min-width:0;height:100px;padding:0 20px}.component-layout-latin[_nghost-%COMP%]   .item[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .item[_ngcontent-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%]   .item[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .item[_ngcontent-%COMP%]{direction:rtl}.steering-wheel-left[_nghost-%COMP%]   .item[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .item[_ngcontent-%COMP%]{flex-direction:row}.steering-wheel-right[_nghost-%COMP%]   .item[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .item[_ngcontent-%COMP%]{flex-direction:row-reverse}",
            ],
          ],
          data: {},
        });
      function Ol(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-list-route-item",
              [
                ["class", "item"],
                ["id", "MessagesFolderItem"],
              ],
              null,
              null,
              null,
              fl.b,
              fl.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              Ue.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(3, { numUnreadMessages: 0 }),
            t.xb(
              4,
              114688,
              null,
              0,
              yl.a,
              [],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                titleNonI18nText: [1, "titleNonI18nText"],
                subtitleTextId: [2, "subtitleTextId"],
                subtitleTextIdEnum: [3, "subtitleTextIdEnum"],
                subtitleDeveloperText: [4, "subtitleDeveloperText"],
                hasSubtitle: [5, "hasSubtitle"],
                type: [6, "type"],
              },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            e(n, 1, 0, "MessagesFolderItem");
            var t = e(n, 3, 0, null == l.folder ? null : l.folder.unreadCount);
            (e(n, 2, 0, t),
              e(
                n,
                4,
                0,
                "Unbekannt",
                l.name,
                n.context.mib3Let
                  ? l.subtitleTexts.FolderSubtitleUnreadElements
                  : l.subtitleTexts.FolderSubtitleNotAvailable,
                l.subtitleTexts,
                n.context.mib3Let
                  ? l.subtitleTexts.FolderSubtitleUnreadElements
                  : l.subtitleTexts.FolderSubtitleNotAvailable,
                !0,
                l.ListItemTypes.ITEM_TYPE_NO_END_ICON,
              ));
          },
          null,
        );
      }
      function Sl(e) {
        return t.ac(
          2,
          [
            (e()(), t.hb(16777216, null, null, 1, null, Ol)),
            t.xb(
              1,
              16384,
              null,
              0,
              Un.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            e(
              n,
              1,
              0,
              !!l.folder && l.folder.unreadCount && l.folder.unreadCount > 0,
            );
          },
          null,
        );
      }
      var _l = l("Kkg5"),
        Tl = l("HdDr"),
        Ml = l("N2Hj"),
        Cl = l("UbWD"),
        Nl = l("2rvh"),
        Ll = l("odRV"),
        Pl = l("Udyh"),
        Il = l("I3ve"),
        wl = l("qiAR"),
        El = l("007S"),
        Dl = l("oxWk"),
        Al = l("Tr//"),
        $l = l("iAsw"),
        jl = l("Pqed"),
        Rl = l("BS+8"),
        kl = l("VYaS"),
        Fl = l("HygI"),
        Bl = l("sg2e"),
        zl = l("IIJH"),
        Gl = t.wb({
          encapsulation: 0,
          styles: [
            [
              '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;height:100%}.main-area[_ngcontent-%COMP%]{flex:1 1 0;position:relative}.main-area__content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.statustext[_ngcontent-%COMP%]{text-align:center;font-size:40px}.list__item[_ngcontent-%COMP%]{display:flex;align-items:center;height:120px;font-size:40px;padding:0 20px}',
            ],
          ],
          data: {},
        });
      function Yl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
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
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n && (t = !1 !== e.component.goBack() && t),
                  t
                );
              },
              Xe.b,
              Xe.a,
            )),
            t.xb(1, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              2,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              3,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              5,
              147456,
              null,
              0,
              ml.a,
              [Me.a, gl.a, t.l, [2, tn.a], [2, Je.a]],
              null,
              null,
            ),
            t.xb(6, 16384, null, 0, He.a, [], null, null),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              49152,
              null,
              0,
              xn.a,
              [[2, Je.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            (e(n, 2, 0, "BackButton"),
              e(n, 4, 0),
              e(n, 8, 0),
              e(n, 9, 0, !1, "E163_Backbutton.webp"));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 8).markerClassEnabled,
              t.Nb(n, 9).useItemPlaceholder,
            );
          },
        );
      }
      function Vl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-title-line-item",
              [
                ["icon", "E092_audio_repeat_medium.webp"],
                ["id", "RefreshButton"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t = !1 !== e.component.refreshInbox() && t),
                  t
                );
              },
              Xe.b,
              Xe.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 16384, null, 0, He.a, [], null, null),
            t.xb(3, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              4,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              49152,
              null,
              0,
              xn.a,
              [[2, Je.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "RefreshButton"),
              e(n, 5, 0),
              e(n, 7, 0),
              e(n, 8, 0, !1, "E092_audio_repeat_medium.webp"));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 7).markerClassEnabled,
              t.Nb(n, 8).useItemPlaceholder,
            );
          },
        );
      }
      function Hl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-init-view",
              [["class", "main-area__content"]],
              null,
              null,
              null,
              Fe.b,
              Fe.a,
            )),
            t.xb(1, 49152, null, 0, Be.a, [], null, null),
            (e()(),
            t.yb(
              2,
              0,
              null,
              0,
              2,
              "au3-statustext",
              [
                ["class", "statustext"],
                ["id", "MessagesLoading"],
              ],
              null,
              null,
              null,
              hl.b,
              hl.a,
            )),
            t.xb(
              3,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              49152,
              null,
              0,
              xl.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (e, n) {
            (e(n, 3, 0, "MessagesLoading"),
              e(
                n,
                4,
                0,
                5,
                "Die Nachrichten werden geladen.\nBitte warten...",
              ));
          },
          null,
        );
      }
      function Ul(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "statustext main-area__content"],
                ["developerText", "Es sind keine Nachrichten enthalten."],
                ["id", "MessagesEmpty"],
              ],
              null,
              null,
              null,
              hl.b,
              hl.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              xl.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "MessagesEmpty"),
              e(n, 2, 0, 5, "Es sind keine Nachrichten enthalten."));
          },
          null,
        );
      }
      function Kl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-folder-item",
              [
                ["class", "list__item"],
                ["id", "SubfolderItem"],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t =
                      !1 !==
                        e.component.goToFolder(
                          null == e.parent.context.$implicit
                            ? null
                            : e.parent.context.$implicit.element,
                        ) && t),
                  t
                );
              },
              Sl,
              vl,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
            t.xb(9, 49152, null, 0, ae, [], { folder: [0, "folder"] }, null),
          ],
          function (e, n) {
            (e(n, 1, 0, "SubfolderItem"),
              e(n, 4, 0),
              e(n, 6, 0),
              e(
                n,
                9,
                0,
                null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.element,
              ));
          },
          function (e, n) {
            e(n, 0, 0, t.Nb(n, 6).markerClassEnabled);
          },
        );
      }
      function Wl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-message-item",
              [
                ["class", "list__item"],
                ["id", "MessageItem"],
              ],
              null,
              [
                [null, "ttsTapped"],
                [null, "entryTapped"],
                [null, "longPress"],
              ],
              function (e, n, l) {
                var t = !0,
                  a = e.component;
                return (
                  "ttsTapped" === n &&
                    (t =
                      !1 !==
                        (e.context.mib3Let
                          ? a.stopTts()
                          : a.startTts(
                              null == e.parent.parent.context.$implicit
                                ? null
                                : e.parent.parent.context.$implicit.element,
                            )) && t),
                  "entryTapped" === n &&
                    (t =
                      !1 !==
                        a.goToMessageContent(
                          null == e.parent.parent.parent.parent.context.mib3Let
                            ? null
                            : e.parent.parent.parent.parent.context.mib3Let
                                .account,
                          null == e.parent.parent.parent.parent.context.mib3Let
                            ? null
                            : e.parent.parent.parent.parent.context.mib3Let
                                .folder,
                          e.parent.parent.context.$implicit,
                        ) && t),
                  "longPress" === n &&
                    (t =
                      !1 !==
                        a.showOptionMenu(e.parent.parent.context.$implicit) &&
                      t),
                  t
                );
              },
              _l.b,
              _l.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              Tl.a,
              [],
              {
                folder: [0, "folder"],
                message: [1, "message"],
                currentDate: [2, "currentDate"],
                dateFormat: [3, "dateFormat"],
                timeFormat: [4, "timeFormat"],
                readoutActive: [5, "readoutActive"],
                readoutDisabled: [6, "readoutDisabled"],
              },
              {
                ttsTapped: "ttsTapped",
                entryTapped: "entryTapped",
                longPress: "longPress",
              },
            ),
            t.Pb(131072, Hn.b, [t.h]),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "MessageItem"),
              e(
                n,
                2,
                0,
                null == n.parent.parent.parent.parent.context.mib3Let
                  ? null
                  : n.parent.parent.parent.parent.context.mib3Let.folder,
                null == n.parent.parent.context.$implicit
                  ? null
                  : n.parent.parent.context.$implicit.element,
                null == n.parent.parent.parent.parent.context.mib3Let
                  ? null
                  : n.parent.parent.parent.parent.context.mib3Let.date,
                null == n.parent.parent.parent.parent.context.mib3Let
                  ? null
                  : n.parent.parent.parent.parent.context.mib3Let.dateFormat,
                null == n.parent.parent.parent.parent.context.mib3Let
                  ? null
                  : n.parent.parent.parent.parent.context.mib3Let.timeFormat,
                n.context.mib3Let,
                !t.Yb(
                  n,
                  2,
                  6,
                  t.Nb(n, 3).transform(l.infoService.isReadoutPossible$),
                ),
              ));
          },
          null,
        );
      }
      function Zl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
            (e()(), t.hb(16777216, [[2, 2]], null, 1, null, Wl)),
            t.xb(
              2,
              16384,
              null,
              0,
              Un.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            (e()(), t.hb(0, null, null, 0)),
          ],
          function (e, n) {
            e(
              n,
              2,
              0,
              (null == n.parent.parent.parent.context.mib3Let ||
              null == n.parent.parent.parent.context.mib3Let.ttsMessage
                ? null
                : n.parent.parent.parent.context.mib3Let.ttsMessage.id) ===
                (null == n.parent.context.$implicit ||
                null == n.parent.context.$implicit.element
                  ? null
                  : n.parent.context.$implicit.element.id),
            );
          },
          null,
        );
      }
      function ql(e) {
        return t.ac(
          0,
          [
            (e()(),
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
            t.xb(
              1,
              16384,
              null,
              0,
              Hn.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (e()(), t.hb(16777216, [[2, 2]], null, 1, null, Kl)),
            t.xb(
              3,
              278528,
              null,
              0,
              Hn.p,
              [t.P, t.L, Hn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), t.hb(16777216, [[2, 2]], null, 1, null, Zl)),
            t.xb(
              5,
              278528,
              null,
              0,
              Hn.p,
              [t.P, t.L, Hn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), t.hb(0, null, null, 0)),
          ],
          function (e, n) {
            (e(
              n,
              1,
              0,
              null == n.context.$implicit ? null : n.context.$implicit.kind,
            ),
              e(n, 3, 0, "subfolder"),
              e(n, 5, 0, "message"));
          },
          null,
        );
      }
      function Xl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              8,
              "au3-list",
              [
                ["au3ListDomPaging", ""],
                ["class", "list main-area__content"],
                ["id", "MessagesList"],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Ml.b,
              Ml.a,
            )),
            t.Sb(6144, null, Cl.a, null, [Nl.a]),
            t.xb(
              2,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 16384, null, 0, Ll.a, [t.l], null, null),
            t.xb(
              4,
              16384,
              null,
              0,
              Pl.a,
              [Me.a],
              { itemHeightGuess: [0, "itemHeightGuess"] },
              null,
            ),
            t.xb(
              5,
              12828672,
              [[1, 4]],
              1,
              Nl.a,
              [
                [2, Pl.a],
                [2, Il.a],
                [8, null],
                [2, De.a],
                [2, wl.a],
                [2, El.a],
                [2, an.b],
                cn.i,
                t.z,
                t.h,
                Me.a,
                Dl.a,
                Al.a,
                [2, pn.a],
                ln.a,
                [2, cn.a],
              ],
              {
                showCursor: [0, "showCursor"],
                itemHeightGuess: [1, "itemHeightGuess"],
                defaultTemplate: [2, "defaultTemplate"],
                items: [3, "items"],
              },
              null,
            ),
            t.Tb(603979776, 2, { template: 0 }),
            t.Pb(131072, Hn.b, [t.h]),
            (e()(),
            t.hb(
              0,
              [
                [2, 2],
                ["defaultTemplate", 2],
              ],
              0,
              0,
              null,
              ql,
            )),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 2, 0, "MessagesList"),
              e(n, 4, 0, 120),
              e(
                n,
                5,
                0,
                !1,
                120,
                t.Nb(n, 8),
                t.Yb(n, 5, 3, t.Nb(n, 7).transform(l.listItems$)),
              ));
          },
          function (e, n) {
            e(n, 0, 0, t.Nb(n, 5).showLineNumbers);
          },
        );
      }
      function Jl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-message-item",
              [
                ["class", "list__item"],
                ["id", "MessageItemOptionsMenu"],
              ],
              null,
              [[null, "ttsTapped"]],
              function (e, n, l) {
                var t = !0,
                  a = e.component;
                return (
                  "ttsTapped" === n &&
                    (t =
                      !1 !==
                        (e.context.mib3Let
                          ? a.stopTts()
                          : a.startTts(
                              null == e.parent.context.$implicit
                                ? null
                                : e.parent.context.$implicit.element,
                            )) && t),
                  t
                );
              },
              _l.b,
              _l.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              Tl.a,
              [],
              {
                folder: [0, "folder"],
                message: [1, "message"],
                showDate: [2, "showDate"],
                showTime: [3, "showTime"],
                readoutActive: [4, "readoutActive"],
                showReadoutButton: [5, "showReadoutButton"],
              },
              { ttsTapped: "ttsTapped" },
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "MessageItemOptionsMenu"),
              e(
                n,
                2,
                0,
                null == n.parent.parent.context.mib3Let
                  ? null
                  : n.parent.parent.context.mib3Let.folder,
                null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.element,
                !1,
                !1,
                n.context.mib3Let,
                !1,
              ));
          },
          null,
        );
      }
      function Ql(e) {
        return t.ac(
          0,
          [
            (e()(), t.hb(16777216, [[3, 2]], null, 1, null, Jl)),
            t.xb(
              1,
              16384,
              null,
              0,
              Un.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            (e()(), t.hb(0, null, null, 0)),
          ],
          function (e, n) {
            e(
              n,
              1,
              0,
              (null == n.parent.context.mib3Let ||
              null == n.parent.context.mib3Let.ttsMessage
                ? null
                : n.parent.context.mib3Let.ttsMessage.id) ===
                (null == n.context.$implicit ||
                null == n.context.$implicit.element
                  ? null
                  : n.context.$implicit.element.id),
            );
          },
          null,
        );
      }
      function et(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              38,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:MSG_*_LIST"],
              ],
              null,
              null,
              null,
              Ee.b,
              Ee.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, Ae.a, [Me.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              21,
              "au3-title-line",
              [["id", "TitleLine"]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              16384,
              null,
              0,
              Ue.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(6, { name: 0 }),
            t.xb(
              7,
              49152,
              null,
              0,
              je.a,
              [Re.a, ke.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryId: [1, "primaryId"],
                primaryIdEnumType: [2, "primaryIdEnumType"],
                secondaryDeveloperText: [3, "secondaryDeveloperText"],
                secondaryId: [4, "secondaryId"],
                secondaryIdEnumType: [5, "secondaryIdEnumType"],
                secondaryNonI18nText: [6, "secondaryNonI18nText"],
              },
              null,
            ),
            (e()(), t.hb(16777216, null, 0, 1, null, Yl)),
            t.xb(
              9,
              16384,
              null,
              0,
              Hn.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), t.hb(16777216, null, 2, 1, null, Vl)),
            t.xb(
              11,
              16384,
              null,
              0,
              Hn.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            t.yb(
              12,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "SettingsButton"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              Xe.b,
              Xe.a,
            )),
            t.xb(
              13,
              147456,
              null,
              0,
              Je.a,
              [Qe.a, t.h, Me.a, [3, Je.a]],
              null,
              null,
            ),
            t.xb(14, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              15,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              17,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              null,
            ),
            t.xb(
              18,
              671744,
              null,
              0,
              rn.a,
              [_e.a, cn.i, Je.a, tn.a, rn.b, sn.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(19, 16384, null, 0, He.a, [], null, null),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              21,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              22,
              49152,
              null,
              0,
              xn.a,
              [[2, Je.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              23,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              24,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              25,
              0,
              null,
              0,
              13,
              "div",
              [["class", "main-area"]],
              null,
              null,
              null,
              null,
              null,
            )),
            t.xb(
              26,
              16384,
              null,
              0,
              Hn.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (e()(), t.hb(16777216, null, null, 1, null, Hl)),
            t.xb(
              28,
              278528,
              null,
              0,
              Hn.p,
              [t.P, t.L, Hn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), t.hb(16777216, null, null, 1, null, Ul)),
            t.xb(
              30,
              278528,
              null,
              0,
              Hn.p,
              [t.P, t.L, Hn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), t.hb(16777216, null, null, 1, null, Xl)),
            t.xb(
              32,
              278528,
              null,
              0,
              Hn.p,
              [t.P, t.L, Hn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(),
            t.yb(
              33,
              0,
              null,
              null,
              5,
              "au3-option-menu-wrapper",
              [],
              null,
              null,
              null,
              $l.b,
              $l.a,
            )),
            t.Sb(6144, null, jl.b, null, [Rl.a]),
            t.Sb(512, null, hn.a, hn.a, [[3, hn.a]]),
            t.xb(
              36,
              245760,
              null,
              1,
              Rl.a,
              [kl.a, Fl.a, t.h, hn.a],
              { ttEnumType: [0, "ttEnumType"] },
              null,
            ),
            t.Tb(603979776, 3, { template: 0 }),
            (e()(), t.hb(0, [[3, 2]], null, 0, null, Ql)),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "Screen:MSG_*_LIST"),
              e(n, 2, 0, "Screen:MSG_*_LIST"),
              e(n, 4, 0, "TitleLine"));
            var t = e(
              n,
              6,
              0,
              null == n.context.mib3Let || null == n.context.mib3Let.account
                ? null
                : n.context.mib3Let.account.name,
            );
            (e(n, 5, 0, t),
              e(
                n,
                7,
                0,
                l.infoService.getMsgHeader(
                  null == n.context.mib3Let ? null : n.context.mib3Let.account,
                ),
                l.infoService.getMsgHeader(
                  null == n.context.mib3Let ? null : n.context.mib3Let.account,
                ),
                null == n.context.mib3Let ? null : n.context.mib3Let.headerEnum,
                null == n.context.mib3Let || null == n.context.mib3Let.folder
                  ? null
                  : n.context.mib3Let.folder.folderType,
                null == n.context.mib3Let || null == n.context.mib3Let.folder
                  ? null
                  : n.context.mib3Let.folder.folderType,
                l.infoService.folderTypeEnum,
                ((null == n.context.mib3Let || null == n.context.mib3Let.folder
                  ? null
                  : n.context.mib3Let.folder.folderType) ===
                  l.infoService.folderTypeEnum.CUSTOM &&
                  (null == n.context.mib3Let || null == n.context.mib3Let.folder
                    ? null
                    : n.context.mib3Let.folder.name)) ||
                  void 0,
              ),
              e(
                n,
                9,
                0,
                (null == n.context.mib3Let ? null : n.context.mib3Let.state) !==
                  l.messagesStateEnum.Loading &&
                  (null == n.context.mib3Let
                    ? null
                    : n.context.mib3Let.state) !==
                    l.messagesStateEnum.Initializing,
              ),
              e(
                n,
                11,
                0,
                l.isMailInbox(
                  null == n.context.mib3Let ? null : n.context.mib3Let.account,
                  null == n.context.mib3Let ? null : n.context.mib3Let.folder,
                ) &&
                  (null == n.context.mib3Let
                    ? null
                    : n.context.mib3Let.state) !==
                    l.messagesStateEnum.Loading &&
                  (null == n.context.mib3Let
                    ? null
                    : n.context.mib3Let.state) !==
                    l.messagesStateEnum.Initializing,
              ),
              e(n, 15, 0, "SettingsButton"),
              e(n, 17, 0),
              e(n, 18, 0, l.MessagingRoute.Settings, !0),
              e(n, 21, 0),
              e(n, 22, 0, !1, "E186_settings.webp"),
              e(
                n,
                26,
                0,
                null == n.context.mib3Let ? null : n.context.mib3Let.state,
              ),
              e(n, 28, 0, l.messagesStateEnum.Loading),
              e(n, 30, 0, l.messagesStateEnum.Empty),
              e(n, 32, 0, l.messagesStateEnum.Ready),
              e(n, 36, 0, l.optionTypeEnum));
          },
          function (e, n) {
            (e(
              n,
              3,
              0,
              t.Nb(n, 7).hideLeftBorder,
              t.Nb(n, 7).hideDividingBorders,
            ),
              e(
                n,
                12,
                0,
                t.Nb(n, 13).combinedDisabled,
                t.Nb(n, 13).useBrighterIcon,
                t.Nb(n, 21).markerClassEnabled,
                t.Nb(n, 22).useItemPlaceholder,
              ));
          },
        );
      }
      function nt(e) {
        return t.ac(
          2,
          [
            t.Tb(671088640, 1, { listComponent: 0 }),
            (e()(), t.hb(16777216, null, null, 9, null, et)),
            t.xb(
              2,
              16384,
              null,
              0,
              Un.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, Hn.b, [t.h]),
            t.Pb(131072, Hn.b, [t.h]),
            t.Pb(131072, Hn.b, [t.h]),
            t.Pb(131072, Hn.b, [t.h]),
            t.Pb(131072, Hn.b, [t.h]),
            t.Pb(131072, Hn.b, [t.h]),
            t.Pb(131072, Hn.b, [t.h]),
            t.Qb(10, {
              account: 0,
              folder: 1,
              date: 2,
              dateFormat: 3,
              timeFormat: 4,
              state: 5,
              ttsMessage: 6,
              headerEnum: 7,
            }),
          ],
          function (e, n) {
            var l = n.component,
              a = e(
                n,
                10,
                0,
                t.Yb(n, 2, 0, t.Nb(n, 3).transform(l.account$)),
                t.Yb(n, 2, 0, t.Nb(n, 4).transform(l.folder$)),
                t.Yb(n, 2, 0, t.Nb(n, 5).transform(l.currentDate$)),
                t.Yb(n, 2, 0, t.Nb(n, 6).transform(l.dateFormat$)),
                t.Yb(n, 2, 0, t.Nb(n, 7).transform(l.timeFormat$)),
                t.Yb(n, 2, 0, t.Nb(n, 8).transform(l.state$)),
                t.Yb(n, 2, 0, t.Nb(n, 9).transform(l.ttsMessage$)),
                l.accountTypeEnum,
              );
            e(n, 2, 0, a);
          },
          null,
        );
      }
      function lt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-folder",
              [],
              null,
              null,
              null,
              nt,
              Gl,
            )),
            t.Sb(6144, null, kl.a, null, [Q]),
            t.Sb(131584, null, Q, Q, [
              b.b,
              y.a,
              P.c,
              i.a,
              U.a,
              K.c,
              Bl.a,
              Fl.a,
              Z.a,
              W.c,
              zl.a,
              Me.a,
            ]),
            t.xb(
              3,
              180224,
              null,
              0,
              le,
              [v.a, y.a, i.a, P.c, b.b, G.a, ee.g, Fl.a, Q, Me.a],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var tt = t.ub("au3-folder", le, lt, {}, {}, []),
        at = l("HVUF"),
        it = l("B3Zb"),
        ot = l("ihOk"),
        ut = l("Nd8J"),
        rt = l("rZwJ"),
        ct = l("ZMtB"),
        st = l("E7cc"),
        bt = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column}.title-line[_ngcontent-%COMP%]{width:100%}.disclaimer[_ngcontent-%COMP%]{flex:1 1 0;display:flex;flex-direction:column}.init-view[_ngcontent-%COMP%]{flex:1 1 0}.mail-detail[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;align-items:center;height:100px;max-width:100%;word-break:normal;white-space:pre-wrap;font-size:40px;padding:20px}.mail-detail__contact[_ngcontent-%COMP%]{flex:1}.mail-detail__timestamp[_ngcontent-%COMP%]{font-size:30px;margin-left:30px}.content[_ngcontent-%COMP%]{width:100%;border-bottom-style:solid;border-bottom-width:1px;border-image:linear-gradient(90deg,hsla(0,0%,100%,.1) 0,hsla(0,0%,100%,.5) 50%,hsla(0,0%,100%,.1)) 1}.text[_ngcontent-%COMP%]{max-width:100%;word-break:break-word;white-space:pre-wrap;padding:20px}.error-text[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]{flex-grow:1;width:100%;font-size:30px}.error-text[_ngcontent-%COMP%]{overflow:hidden;justify-content:center}.error-text[_ngcontent-%COMP%], .list__item[_ngcontent-%COMP%]{display:flex;align-items:center}.list__item[_ngcontent-%COMP%]{height:100px;font-size:40px;padding:0 20px}.component-layout-arabic[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .content[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .mail-detail[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .mail-detail[_ngcontent-%COMP%]{direction:rtl}.component-layout-latin[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .content[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .mail-detail[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .mail-detail[_ngcontent-%COMP%]{direction:ltr}",
            ],
          ],
          data: {},
        });
      function dt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
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
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n && (t = !1 !== e.component.goBack() && t),
                  t
                );
              },
              Xe.b,
              Xe.a,
            )),
            t.xb(1, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              2,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              3,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              5,
              147456,
              null,
              0,
              ml.a,
              [Me.a, gl.a, t.l, [2, tn.a], [2, Je.a]],
              null,
              null,
            ),
            t.xb(6, 16384, null, 0, He.a, [], null, null),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              49152,
              null,
              0,
              xn.a,
              [[2, Je.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            (e(n, 2, 0, "BackButton"),
              e(n, 4, 0),
              e(n, 8, 0),
              e(n, 9, 0, !1, "E163_Backbutton.webp"));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 8).markerClassEnabled,
              t.Nb(n, 9).useItemPlaceholder,
            );
          },
        );
      }
      function pt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-init-view",
              [["class", "init-view"]],
              null,
              null,
              null,
              Fe.b,
              Fe.a,
            )),
            t.xb(1, 49152, null, 0, Be.a, [], null, null),
            (e()(),
            t.yb(
              2,
              0,
              null,
              0,
              2,
              "au3-statustext",
              [["id", "MessageContentLoading"]],
              null,
              null,
              null,
              hl.b,
              hl.a,
            )),
            t.xb(
              3,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              49152,
              null,
              0,
              xl.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (e, n) {
            (e(n, 3, 0, "MessageContentLoading"),
              e(n, 4, 0, 2, "Der Text wird geladen.\nBitte warten..."));
          },
          null,
        );
      }
      function mt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(0, 0, null, null, 2, "div", [], null, null, null, null, null)),
            (e()(),
            t.yb(
              1,
              0,
              null,
              null,
              1,
              "au3-icon",
              [
                ["class", "icon"],
                ["fileName", "E838_office_msg_attachment.webp"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              at.b,
              at.a,
            )),
            t.xb(
              2,
              4243456,
              null,
              0,
              it.b,
              [Me.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (e, n) {
            e(
              n,
              2,
              0,
              "E838_office_msg_attachment.webp",
              n.component.iconCategory.List,
            );
          },
          function (e, n) {
            e(n, 1, 0, t.Nb(n, 2).iconComponentHidden);
          },
        );
      }
      function gt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "mail-detail__timestamp"],
                ["developerText", "Heute"],
                ["id", "MessageDateToday"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              ze.b,
              ze.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[6, De.a], Ye.a, t.h, t.l, t.D, [2, Ve.a], [2, He.a], [2, Ue.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "MessageDateToday"),
              e(n, 2, 0, "Heute", "MessageDateToday", 1));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 2).backgroundColor,
              t.Nb(n, 2).fixedNumberOfLines,
              t.Nb(n, 2).mayContainLatinCharsForArabic,
              t.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function ht(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "mail-detail__timestamp"],
                ["id", "MessageDate"],
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
              ze.b,
              ze.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 16384, null, 0, He.a, [], null, null),
            t.xb(
              3,
              245760,
              null,
              0,
              Ge.a,
              [[6, De.a], Ye.a, t.h, t.l, t.D, [2, Ve.a], [2, He.a], [2, Ue.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "MessageDate"),
              e(
                n,
                3,
                0,
                "MessageDate",
                l.getDate(
                  null == n.parent.parent.parent.context.mib3Let
                    ? null
                    : n.parent.parent.parent.context.mib3Let.message,
                  null == n.parent.parent.parent.context.mib3Let
                    ? null
                    : n.parent.parent.parent.context.mib3Let.dateFormat,
                ),
              ));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 3).backgroundColor,
              t.Nb(n, 3).fixedNumberOfLines,
              t.Nb(n, 3).mayContainLatinCharsForArabic,
              t.Nb(n, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function xt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "mail-detail__timestamp"],
                ["developerText", "Kein Datum"],
                ["id", "MessageDateUnknown"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              ze.b,
              ze.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[6, De.a], Ye.a, t.h, t.l, t.D, [2, Ve.a], [2, He.a], [2, Ue.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "MessageDateUnknown"),
              e(n, 2, 0, "Kein Datum", "MessageDateUnknown", 1));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 2).backgroundColor,
              t.Nb(n, 2).fixedNumberOfLines,
              t.Nb(n, 2).mayContainLatinCharsForArabic,
              t.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function ft(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              13,
              "div",
              [["class", "mail-detail"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            t.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "mail-detail__contact"],
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
              ze.b,
              ze.a,
            )),
            t.xb(2, 16384, null, 0, He.a, [], null, null),
            t.xb(
              3,
              245760,
              null,
              0,
              Ge.a,
              [[8, null], Ye.a, t.h, t.l, t.D, [2, Ve.a], [2, He.a], [2, Ue.a]],
              { nonI18nValue: [0, "nonI18nValue"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, mt)),
            t.xb(
              5,
              16384,
              null,
              0,
              Hn.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            t.yb(
              6,
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
              7,
              16384,
              null,
              0,
              Hn.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, gt)),
            t.xb(
              9,
              278528,
              null,
              0,
              Hn.p,
              [t.P, t.L, Hn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, ht)),
            t.xb(
              11,
              278528,
              null,
              0,
              Hn.p,
              [t.P, t.L, Hn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, xt)),
            t.xb(13, 16384, null, 0, Hn.q, [t.P, t.L, Hn.o], null, null),
          ],
          function (e, n) {
            var l = n.component;
            (e(
              n,
              3,
              0,
              l.getContactText(
                null == n.parent.parent.context.mib3Let
                  ? null
                  : n.parent.parent.context.mib3Let.message,
              ),
            ),
              e(
                n,
                5,
                0,
                null == n.parent.parent.context.mib3Let ||
                  null == n.parent.parent.context.mib3Let.message
                  ? null
                  : n.parent.parent.context.mib3Let.message.attachments,
              ),
              e(
                n,
                7,
                0,
                null == n.parent.parent.context.mib3Let
                  ? null
                  : n.parent.parent.context.mib3Let.dateEnum,
              ),
              e(n, 9, 0, l.dateEnum.Today),
              e(n, 11, 0, l.dateEnum.Normal));
          },
          function (e, n) {
            e(
              n,
              1,
              0,
              t.Nb(n, 3).backgroundColor,
              t.Nb(n, 3).fixedNumberOfLines,
              t.Nb(n, 3).mayContainLatinCharsForArabic,
              t.Nb(n, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function yt(e) {
        return t.ac(
          0,
          [
            (e()(),
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
            (e()(),
            t.yb(
              1,
              0,
              null,
              null,
              13,
              "au3-disclaimer",
              [["class", "disclaimer"]],
              null,
              [[null, "mib3Fling"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Fling" === n && (t = !1 !== e.component.onFling(l) && t),
                  t
                );
              },
              ot.b,
              ot.a,
            )),
            t.xb(2, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              ut.b,
              [
                t.l,
                t.z,
                an.b,
                on.a,
                Me.a,
                en.a,
                [2, Je.a],
                [2, rt.a],
                [2, De.a],
              ],
              null,
              { mib3Fling: "mib3Fling" },
            ),
            t.xb(
              4,
              4440064,
              null,
              0,
              ct.a,
              [Pn.a, [2, De.a], t.h, Me.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              5,
              0,
              null,
              0,
              9,
              "au3-list",
              [["class", "content"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Ml.b,
              Ml.a,
            )),
            t.Sb(6144, null, Cl.a, null, [Nl.a]),
            t.xb(7, 16384, null, 0, Ll.a, [t.l], null, null),
            t.xb(
              8,
              12828672,
              null,
              1,
              Nl.a,
              [
                [2, Pl.a],
                [2, Il.a],
                [8, null],
                [2, De.a],
                [2, wl.a],
                [2, El.a],
                [2, an.b],
                cn.i,
                t.z,
                t.h,
                Me.a,
                Dl.a,
                Al.a,
                [2, pn.a],
                ln.a,
                [2, cn.a],
              ],
              null,
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (e()(), t.hb(16777216, [[1, 2]], 0, 1, null, ft)),
            t.xb(
              11,
              16384,
              null,
              0,
              Hn.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            t.yb(
              12,
              0,
              null,
              1,
              2,
              "au3-i18n-label",
              [
                ["after", ""],
                ["class", "text"],
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
              ze.b,
              ze.a,
            )),
            t.xb(13, 16384, null, 0, He.a, [], null, null),
            t.xb(
              14,
              245760,
              null,
              0,
              Ge.a,
              [[8, null], Ye.a, t.h, t.l, t.D, [2, Ve.a], [2, He.a], [2, Ue.a]],
              { nonI18nValue: [0, "nonI18nValue"] },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 3, 0),
              e(n, 4, 0),
              e(n, 8, 0),
              e(
                n,
                11,
                0,
                (null == n.parent.context.mib3Let ||
                null == n.parent.context.mib3Let.message
                  ? null
                  : n.parent.context.mib3Let.message.type) === l.typeEnum.MAIL,
              ),
              e(
                n,
                14,
                0,
                null == n.parent.context.mib3Let ||
                  null == n.parent.context.mib3Let.content
                  ? null
                  : n.parent.context.mib3Let.content.body,
              ));
          },
          function (e, n) {
            (e(n, 5, 0, t.Nb(n, 8).showLineNumbers),
              e(
                n,
                12,
                0,
                t.Nb(n, 14).backgroundColor,
                t.Nb(n, 14).fixedNumberOfLines,
                t.Nb(n, 14).mayContainLatinCharsForArabic,
                t.Nb(n, 14).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function vt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "error-text"],
                ["developerText", "Diese Nachricht ist nicht darstellbar."],
                ["id", "ContentError"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              ze.b,
              ze.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[6, De.a], Ye.a, t.h, t.l, t.D, [2, Ve.a], [2, He.a], [2, Ue.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "ContentError"),
              e(
                n,
                2,
                0,
                "Diese Nachricht ist nicht darstellbar.",
                "ContentError",
                1,
              ));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 2).backgroundColor,
              t.Nb(n, 2).fixedNumberOfLines,
              t.Nb(n, 2).mayContainLatinCharsForArabic,
              t.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Ot(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
            (e()(),
            t.yb(
              1,
              0,
              null,
              null,
              5,
              "au3-disclaimer",
              [["class", "disclaimer"]],
              null,
              [[null, "mib3Fling"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Fling" === n && (t = !1 !== e.component.onFling(l) && t),
                  t
                );
              },
              ot.b,
              ot.a,
            )),
            t.xb(2, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              ut.b,
              [
                t.l,
                t.z,
                an.b,
                on.a,
                Me.a,
                en.a,
                [2, Je.a],
                [2, rt.a],
                [2, De.a],
              ],
              null,
              { mib3Fling: "mib3Fling" },
            ),
            t.xb(
              4,
              4440064,
              null,
              0,
              ct.a,
              [Pn.a, [2, De.a], t.h, Me.a],
              null,
              null,
            ),
            (e()(), t.hb(16777216, null, 0, 1, null, vt)),
            t.xb(6, 16384, null, 0, Hn.q, [t.P, t.L, Hn.o], null, null),
          ],
          function (e, n) {
            (e(n, 3, 0), e(n, 4, 0));
          },
          null,
        );
      }
      function St(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-operation-panel-item",
              [
                ["id", "Reply"],
                ["left", ""],
              ],
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
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t =
                      !1 !==
                        e.component.answer(
                          null == e.parent.context.mib3Let
                            ? null
                            : e.parent.context.mib3Let.message,
                          null == e.parent.context.mib3Let
                            ? null
                            : e.parent.context.mib3Let.content,
                        ) && t),
                  t
                );
              },
              In.b,
              In.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              Je.a,
              [Qe.a, t.h, Me.a, [3, Je.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.Pb(131072, Hn.b, [t.h]),
            t.xb(
              6,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              49152,
              null,
              0,
              wn.a,
              [],
              {
                hasText: [0, "hasText"],
                developerText: [1, "developerText"],
                icon: [2, "icon"],
              },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "Reply"),
              e(
                n,
                4,
                0,
                !t.Yb(n, 4, 0, t.Nb(n, 5).transform(l.outboxExists$)) ||
                  (null == n.parent.context.mib3Let
                    ? null
                    : n.parent.context.mib3Let.state) !== l.stateEnum.Ready ||
                  !(
                    null != n.parent.context.mib3Let &&
                    n.parent.context.mib3Let.hasAddressOrContact
                  ),
              ),
              e(n, 6, 0),
              e(n, 8, 0),
              e(n, 9, 0, !0, "Antworten", "E83C_office_msg_answered.webp"));
          },
          function (e, n) {
            e(n, 0, 1, [
              t.Nb(n, 4).combinedDisabled,
              t.Nb(n, 4).useBrighterIcon,
              t.Nb(n, 8).markerClassEnabled,
              t.Nb(n, 9).showSeparatorLeft,
              t.Nb(n, 9).showSeparatorRight,
              t.Nb(n, 9).prio1Main,
              t.Nb(n, 9).prio1SmallScale,
              t.Nb(n, 9).prio2SmallScale,
              t.Nb(n, 9).prio1,
              t.Nb(n, 9).prio2,
              t.Nb(n, 9).prio1IconText,
              t.Nb(n, 9).prio1IconOnly,
              t.Nb(n, 9).prio1TextOnly,
              t.Nb(n, 9).prio2IconText,
              t.Nb(n, 9).prio2IconOnly,
              t.Nb(n, 9).prio2TextOnly,
              t.Nb(n, 9).useDefaultMaxWidth,
              t.Nb(n, 9).isDummy,
            ]);
          },
        );
      }
      function _t(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "Stop"],
              ],
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
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t = !1 !== e.component.stopReadout() && t),
                  t
                );
              },
              In.b,
              In.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              49152,
              null,
              0,
              wn.a,
              [],
              {
                hasText: [0, "hasText"],
                developerText: [1, "developerText"],
                icon: [2, "icon"],
                prio1Item: [3, "prio1Item"],
              },
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "Stop"),
              e(n, 4, 0),
              e(n, 6, 0),
              e(n, 7, 0, !0, "Stop", "E6C7_messaging_readout_stop.webp", !0));
          },
          function (e, n) {
            e(n, 0, 1, [
              t.Nb(n, 6).markerClassEnabled,
              t.Nb(n, 7).showSeparatorLeft,
              t.Nb(n, 7).showSeparatorRight,
              t.Nb(n, 7).prio1Main,
              t.Nb(n, 7).prio1SmallScale,
              t.Nb(n, 7).prio2SmallScale,
              t.Nb(n, 7).prio1,
              t.Nb(n, 7).prio2,
              t.Nb(n, 7).prio1IconText,
              t.Nb(n, 7).prio1IconOnly,
              t.Nb(n, 7).prio1TextOnly,
              t.Nb(n, 7).prio2IconText,
              t.Nb(n, 7).prio2IconOnly,
              t.Nb(n, 7).prio2TextOnly,
              t.Nb(n, 7).useDefaultMaxWidth,
              t.Nb(n, 7).isDummy,
            ]);
          },
        );
      }
      function Tt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "ReadOut"],
              ],
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
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t =
                      !1 !==
                        e.component.readoutMessage(
                          null == e.parent.context.mib3Let
                            ? null
                            : e.parent.context.mib3Let.message,
                        ) && t),
                  t
                );
              },
              In.b,
              In.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              Je.a,
              [Qe.a, t.h, Me.a, [3, Je.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.Pb(131072, Hn.b, [t.h]),
            t.xb(
              6,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              49152,
              null,
              0,
              wn.a,
              [],
              {
                hasText: [0, "hasText"],
                developerText: [1, "developerText"],
                icon: [2, "icon"],
                prio1Item: [3, "prio1Item"],
              },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "ReadOut"),
              e(
                n,
                4,
                0,
                (null == n.parent.context.mib3Let
                  ? null
                  : n.parent.context.mib3Let.state) !== l.stateEnum.Ready ||
                  !t.Yb(
                    n,
                    4,
                    0,
                    t.Nb(n, 5).transform(l.infoService.isReadoutPossible$),
                  ),
                l.readoutDisabledReason,
              ),
              e(n, 6, 0),
              e(n, 8, 0),
              e(
                n,
                9,
                0,
                !0,
                "Vorlesen",
                "E6C6_messaging_readout_start.webp",
                !0,
              ));
          },
          function (e, n) {
            e(n, 0, 1, [
              t.Nb(n, 4).combinedDisabled,
              t.Nb(n, 4).useBrighterIcon,
              t.Nb(n, 8).markerClassEnabled,
              t.Nb(n, 9).showSeparatorLeft,
              t.Nb(n, 9).showSeparatorRight,
              t.Nb(n, 9).prio1Main,
              t.Nb(n, 9).prio1SmallScale,
              t.Nb(n, 9).prio2SmallScale,
              t.Nb(n, 9).prio1,
              t.Nb(n, 9).prio2,
              t.Nb(n, 9).prio1IconText,
              t.Nb(n, 9).prio1IconOnly,
              t.Nb(n, 9).prio1TextOnly,
              t.Nb(n, 9).prio2IconText,
              t.Nb(n, 9).prio2IconOnly,
              t.Nb(n, 9).prio2TextOnly,
              t.Nb(n, 9).useDefaultMaxWidth,
              t.Nb(n, 9).isDummy,
            ]);
          },
        );
      }
      function Mt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-message-item",
              [
                ["class", "list__item"],
                ["id", "MessageContent"],
              ],
              null,
              [[null, "ttsTapped"]],
              function (e, n, l) {
                var t = !0,
                  a = e.component;
                return (
                  "ttsTapped" === n &&
                    (t =
                      !1 !==
                        (e.context.mib3Let
                          ? a.stopReadout()
                          : a.readoutMessage(
                              null == e.parent.context.$implicit
                                ? null
                                : e.parent.context.$implicit.element,
                            )) && t),
                  t
                );
              },
              _l.b,
              _l.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              Tl.a,
              [],
              {
                folder: [0, "folder"],
                message: [1, "message"],
                showDate: [2, "showDate"],
                showTime: [3, "showTime"],
                readoutActive: [4, "readoutActive"],
                showReadoutButton: [5, "showReadoutButton"],
              },
              { ttsTapped: "ttsTapped" },
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "MessageContent"),
              e(
                n,
                2,
                0,
                null == n.parent.parent.context.mib3Let
                  ? null
                  : n.parent.parent.context.mib3Let.folder,
                null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.element,
                !1,
                !1,
                n.context.mib3Let,
                !1,
              ));
          },
          null,
        );
      }
      function Ct(e) {
        return t.ac(
          0,
          [
            (e()(), t.hb(16777216, [[2, 2]], null, 1, null, Mt)),
            t.xb(
              1,
              16384,
              null,
              0,
              Un.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            (e()(), t.hb(0, null, null, 0)),
          ],
          function (e, n) {
            e(
              n,
              1,
              0,
              (null == n.parent.context.mib3Let ||
              null == n.parent.context.mib3Let.ttsMessage
                ? null
                : n.parent.context.mib3Let.ttsMessage.id) ===
                (null == n.context.$implicit ||
                null == n.context.$implicit.element
                  ? null
                  : n.context.$implicit.element.id),
            );
          },
          null,
        );
      }
      function Nt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              80,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:MSG_*_DETAIL"],
              ],
              null,
              null,
              null,
              Ee.b,
              Ee.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, Ae.a, [Me.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              19,
              "au3-title-line",
              [
                ["class", "title-line"],
                ["id", ""],
              ],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              16384,
              null,
              0,
              Ue.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(6, { name: 0 }),
            t.xb(
              7,
              49152,
              null,
              0,
              je.a,
              [Re.a, ke.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryId: [1, "primaryId"],
                primaryIdEnumType: [2, "primaryIdEnumType"],
                secondaryNonI18nText: [3, "secondaryNonI18nText"],
              },
              null,
            ),
            (e()(), t.hb(16777216, null, 0, 1, null, dt)),
            t.xb(
              9,
              16384,
              null,
              0,
              Hn.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            t.yb(
              10,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "SettingsButton"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              Xe.b,
              Xe.a,
            )),
            t.xb(
              11,
              147456,
              null,
              0,
              Je.a,
              [Qe.a, t.h, Me.a, [3, Je.a]],
              null,
              null,
            ),
            t.xb(12, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              13,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              14,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              15,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              null,
            ),
            t.xb(
              16,
              671744,
              null,
              0,
              rn.a,
              [_e.a, cn.i, Je.a, tn.a, rn.b, sn.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(17, 16384, null, 0, He.a, [], null, null),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              19,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              20,
              49152,
              null,
              0,
              xn.a,
              [[2, Je.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              21,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              22,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
            (e()(),
            t.yb(23, 0, null, 0, 7, null, null, null, null, null, null, null)),
            t.xb(
              24,
              16384,
              null,
              0,
              Hn.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (e()(), t.hb(16777216, null, null, 1, null, pt)),
            t.xb(
              26,
              278528,
              null,
              0,
              Hn.p,
              [t.P, t.L, Hn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), t.hb(16777216, null, null, 1, null, yt)),
            t.xb(
              28,
              278528,
              null,
              0,
              Hn.p,
              [t.P, t.L, Hn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), t.hb(16777216, null, null, 1, null, Ot)),
            t.xb(30, 16384, null, 0, Hn.q, [t.P, t.L, Hn.o], null, null),
            (e()(),
            t.yb(
              31,
              0,
              null,
              0,
              43,
              "au3-operation-panel",
              [["class", "operation-panel"]],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              Nn.b,
              Nn.a,
            )),
            t.xb(32, 49152, null, 0, Ln.a, [Pn.a], null, null),
            (e()(), t.hb(16777216, null, 0, 1, null, St)),
            t.xb(
              34,
              16384,
              null,
              0,
              Hn.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            t.yb(
              35,
              0,
              null,
              1,
              11,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "Previous"],
                ["ttIgnore", ""],
              ],
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
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t = !1 !== e.component.goToPrevMessage() && t),
                  t
                );
              },
              In.b,
              In.a,
            )),
            t.xb(
              36,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(37, 16384, null, 0, He.a, [], null, null),
            t.xb(38, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              39,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              40,
              147456,
              null,
              0,
              Je.a,
              [Qe.a, t.h, Me.a, [3, Je.a]],
              { disabled: [0, "disabled"], showReason: [1, "showReason"] },
              null,
            ),
            t.xb(
              41,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              43,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              44,
              49152,
              null,
              0,
              wn.a,
              [],
              {
                hasText: [0, "hasText"],
                icon: [1, "icon"],
                prio1Item: [2, "prio1Item"],
              },
              null,
            ),
            t.xb(
              45,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              46,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
            (e()(), t.hb(16777216, null, 1, 1, null, _t)),
            t.xb(
              48,
              16384,
              null,
              0,
              Hn.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(), t.hb(0, [["startReadOut", 2]], 1, 0, null, Tt)),
            (e()(),
            t.yb(
              50,
              0,
              null,
              1,
              11,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "Next"],
                ["ttIgnore", ""],
              ],
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
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t = !1 !== e.component.goToNextMessage() && t),
                  t
                );
              },
              In.b,
              In.a,
            )),
            t.xb(
              51,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(52, 16384, null, 0, He.a, [], null, null),
            t.xb(53, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              54,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              55,
              147456,
              null,
              0,
              Je.a,
              [Qe.a, t.h, Me.a, [3, Je.a]],
              { disabled: [0, "disabled"], showReason: [1, "showReason"] },
              null,
            ),
            t.xb(
              56,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              58,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              59,
              49152,
              null,
              0,
              wn.a,
              [],
              {
                hasText: [0, "hasText"],
                icon: [1, "icon"],
                prio1Item: [2, "prio1Item"],
              },
              null,
            ),
            t.xb(
              60,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              61,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              62,
              0,
              null,
              2,
              12,
              "au3-operation-panel-item",
              [
                ["id", "More"],
                ["right", ""],
              ],
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
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t =
                      !1 !==
                        e.component.showOptionMenu(
                          null == e.context.mib3Let
                            ? null
                            : e.context.mib3Let.message,
                          null == e.context.mib3Let
                            ? null
                            : e.context.mib3Let.content,
                          null == e.context.mib3Let
                            ? null
                            : e.context.mib3Let.idx,
                        ) && t),
                  t
                );
              },
              In.b,
              In.a,
            )),
            t.xb(
              63,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(64, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              65,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              66,
              147456,
              null,
              0,
              Je.a,
              [Qe.a, t.h, Me.a, [3, Je.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.Pb(131072, Hn.b, [t.h]),
            t.xb(
              68,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              70,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              71,
              49152,
              null,
              0,
              wn.a,
              [],
              {
                hasText: [0, "hasText"],
                developerText: [1, "developerText"],
                icon: [2, "icon"],
              },
              null,
            ),
            t.xb(
              72,
              671744,
              null,
              0,
              st.a,
              [Je.a, cn.i, [2, cn.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            t.xb(
              73,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              74,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              75,
              0,
              null,
              0,
              5,
              "au3-option-menu-wrapper",
              [],
              null,
              null,
              null,
              $l.b,
              $l.a,
            )),
            t.Sb(6144, null, jl.b, null, [Rl.a]),
            t.Sb(512, null, hn.a, hn.a, [[3, hn.a]]),
            t.xb(
              78,
              245760,
              null,
              1,
              Rl.a,
              [kl.a, Fl.a, t.h, hn.a],
              { ttEnumType: [0, "ttEnumType"] },
              null,
            ),
            t.Tb(603979776, 2, { template: 0 }),
            (e()(), t.hb(0, [[2, 2]], null, 0, null, Ct)),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "Screen:MSG_*_DETAIL"),
              e(n, 2, 0, "Screen:MSG_*_DETAIL"),
              e(n, 4, 0, ""));
            var a = e(
              n,
              6,
              0,
              null == n.context.mib3Let || null == n.context.mib3Let.account
                ? null
                : n.context.mib3Let.account.name,
            );
            (e(n, 5, 0, a),
              e(
                n,
                7,
                0,
                l.infoService.getMsgHeader(
                  null == n.context.mib3Let ? null : n.context.mib3Let.account,
                ),
                l.infoService.getMsgHeader(
                  null == n.context.mib3Let ? null : n.context.mib3Let.account,
                ),
                l.accountTypeEnum,
                l.getSubtitle(
                  null == n.context.mib3Let ? null : n.context.mib3Let.message,
                  null == n.context.mib3Let ? null : n.context.mib3Let.content,
                ),
              ),
              e(
                n,
                9,
                0,
                (null == n.context.mib3Let ? null : n.context.mib3Let.state) !==
                  l.stateEnum.Loading,
              ),
              e(n, 13, 0, "SettingsButton"),
              e(n, 15, 0),
              e(n, 16, 0, l.MessagingRoute.Settings, !0),
              e(n, 19, 0),
              e(n, 20, 0, !1, "E186_settings.webp"),
              e(
                n,
                24,
                0,
                null == n.context.mib3Let ? null : n.context.mib3Let.state,
              ),
              e(n, 26, 0, l.stateEnum.Loading),
              e(n, 28, 0, l.stateEnum.Ready),
              e(
                n,
                34,
                0,
                (null == n.context.mib3Let || null == n.context.mib3Let.folder
                  ? null
                  : n.context.mib3Let.folder.folderType) ===
                  l.folderTypeEnum.INBOX ||
                  (null == n.context.mib3Let || null == n.context.mib3Let.folder
                    ? null
                    : n.context.mib3Let.folder.folderType) ===
                    l.folderTypeEnum.CUSTOM,
              ),
              e(n, 36, 0, "Previous"),
              e(
                n,
                40,
                0,
                (null == n.context.mib3Let ? null : n.context.mib3Let.state) ===
                  l.stateEnum.Loading ||
                  !(null != n.context.mib3Let && n.context.mib3Let.prevMessage),
                !1,
              ),
              e(n, 41, 0),
              e(n, 43, 0),
              e(n, 44, 0, !1, "E35C_connect_article_last.webp", !0),
              e(
                n,
                48,
                0,
                (null == n.context.mib3Let ||
                null == n.context.mib3Let.ttsMessage
                  ? null
                  : n.context.mib3Let.ttsMessage.id) ===
                  (null == n.context.mib3Let ||
                  null == n.context.mib3Let.message
                    ? null
                    : n.context.mib3Let.message.id),
                t.Nb(n, 49),
              ),
              e(n, 51, 0, "Next"),
              e(
                n,
                55,
                0,
                (null == n.context.mib3Let ? null : n.context.mib3Let.state) ===
                  l.stateEnum.Loading ||
                  !(null != n.context.mib3Let && n.context.mib3Let.nextMessage),
                !1,
              ),
              e(n, 56, 0),
              e(n, 58, 0),
              e(n, 59, 0, !1, "E35D_connect_article_next.webp", !0),
              e(n, 63, 0, "More"),
              e(
                n,
                66,
                0,
                t.Yb(
                  n,
                  66,
                  0,
                  t
                    .Nb(n, 67)
                    .transform(l.messageOptionsService.moreMenuDisabled$),
                ) ||
                  (null == n.context.mib3Let
                    ? null
                    : n.context.mib3Let.state) !== l.stateEnum.Ready,
              ),
              e(n, 68, 0),
              e(n, 70, 0),
              e(n, 71, 0, !0, "Mehr", "E9BF_options_more.webp"),
              e(n, 72, 0, l.moreLockingParam),
              e(n, 78, 0, l.optionTypeEnum));
          },
          function (e, n) {
            (e(
              n,
              3,
              0,
              t.Nb(n, 7).hideLeftBorder,
              t.Nb(n, 7).hideDividingBorders,
            ),
              e(
                n,
                10,
                0,
                t.Nb(n, 11).combinedDisabled,
                t.Nb(n, 11).useBrighterIcon,
                t.Nb(n, 19).markerClassEnabled,
                t.Nb(n, 20).useItemPlaceholder,
              ),
              e(n, 31, 0, t.Nb(n, 32).alignInside, t.Nb(n, 32).alignOutside),
              e(n, 35, 1, [
                t.Nb(n, 40).combinedDisabled,
                t.Nb(n, 40).useBrighterIcon,
                t.Nb(n, 43).markerClassEnabled,
                t.Nb(n, 44).showSeparatorLeft,
                t.Nb(n, 44).showSeparatorRight,
                t.Nb(n, 44).prio1Main,
                t.Nb(n, 44).prio1SmallScale,
                t.Nb(n, 44).prio2SmallScale,
                t.Nb(n, 44).prio1,
                t.Nb(n, 44).prio2,
                t.Nb(n, 44).prio1IconText,
                t.Nb(n, 44).prio1IconOnly,
                t.Nb(n, 44).prio1TextOnly,
                t.Nb(n, 44).prio2IconText,
                t.Nb(n, 44).prio2IconOnly,
                t.Nb(n, 44).prio2TextOnly,
                t.Nb(n, 44).useDefaultMaxWidth,
                t.Nb(n, 44).isDummy,
              ]),
              e(n, 50, 1, [
                t.Nb(n, 55).combinedDisabled,
                t.Nb(n, 55).useBrighterIcon,
                t.Nb(n, 58).markerClassEnabled,
                t.Nb(n, 59).showSeparatorLeft,
                t.Nb(n, 59).showSeparatorRight,
                t.Nb(n, 59).prio1Main,
                t.Nb(n, 59).prio1SmallScale,
                t.Nb(n, 59).prio2SmallScale,
                t.Nb(n, 59).prio1,
                t.Nb(n, 59).prio2,
                t.Nb(n, 59).prio1IconText,
                t.Nb(n, 59).prio1IconOnly,
                t.Nb(n, 59).prio1TextOnly,
                t.Nb(n, 59).prio2IconText,
                t.Nb(n, 59).prio2IconOnly,
                t.Nb(n, 59).prio2TextOnly,
                t.Nb(n, 59).useDefaultMaxWidth,
                t.Nb(n, 59).isDummy,
              ]),
              e(n, 62, 1, [
                t.Nb(n, 66).combinedDisabled,
                t.Nb(n, 66).useBrighterIcon,
                t.Nb(n, 70).markerClassEnabled,
                t.Nb(n, 71).showSeparatorLeft,
                t.Nb(n, 71).showSeparatorRight,
                t.Nb(n, 71).prio1Main,
                t.Nb(n, 71).prio1SmallScale,
                t.Nb(n, 71).prio2SmallScale,
                t.Nb(n, 71).prio1,
                t.Nb(n, 71).prio2,
                t.Nb(n, 71).prio1IconText,
                t.Nb(n, 71).prio1IconOnly,
                t.Nb(n, 71).prio1TextOnly,
                t.Nb(n, 71).prio2IconText,
                t.Nb(n, 71).prio2IconOnly,
                t.Nb(n, 71).prio2TextOnly,
                t.Nb(n, 71).useDefaultMaxWidth,
                t.Nb(n, 71).isDummy,
              ]));
          },
        );
      }
      function Lt(e) {
        return t.ac(
          2,
          [
            (e()(), t.hb(16777216, null, null, 16, null, Nt)),
            t.xb(
              1,
              16384,
              null,
              0,
              Un.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, Hn.b, [t.h]),
            t.Pb(131072, Hn.b, [t.h]),
            t.Pb(131072, Hn.b, [t.h]),
            t.Pb(131072, Hn.b, [t.h]),
            t.Pb(131072, Hn.b, [t.h]),
            t.Pb(131072, Hn.b, [t.h]),
            t.Pb(131072, Hn.b, [t.h]),
            t.Pb(131072, Hn.b, [t.h]),
            t.Pb(131072, Hn.b, [t.h]),
            t.Pb(131072, Hn.b, [t.h]),
            t.Pb(131072, Hn.b, [t.h]),
            t.Pb(131072, Hn.b, [t.h]),
            t.Pb(131072, Hn.b, [t.h]),
            t.Pb(131072, Hn.b, [t.h]),
            t.Qb(16, {
              account: 0,
              folder: 1,
              message: 2,
              content: 3,
              prevMessage: 4,
              nextMessage: 5,
              timeFormat: 6,
              dateFormat: 7,
              date: 8,
              dateEnum: 9,
              state: 10,
              idx: 11,
              ttsMessage: 12,
              hasAddressOrContact: 13,
            }),
          ],
          function (e, n) {
            var l = n.component,
              a = e(n, 16, 1, [
                t.Yb(n, 1, 0, t.Nb(n, 2).transform(l.account$)),
                t.Yb(n, 1, 0, t.Nb(n, 3).transform(l.folder$)),
                t.Yb(n, 1, 0, t.Nb(n, 4).transform(l.message$)),
                t.Yb(n, 1, 0, t.Nb(n, 5).transform(l.content$)),
                t.Yb(n, 1, 0, t.Nb(n, 6).transform(l.prevMessage$)),
                t.Yb(n, 1, 0, t.Nb(n, 7).transform(l.nextMessage$)),
                t.Yb(n, 1, 0, t.Nb(n, 8).transform(l.timeFormat$)),
                t.Yb(n, 1, 0, t.Nb(n, 9).transform(l.dateFormat$)),
                t.Yb(n, 1, 0, t.Nb(n, 10).transform(l.currentDate$)),
                t.Yb(n, 1, 0, t.Nb(n, 11).transform(l.dateEnum$)),
                t.Yb(n, 1, 0, t.Nb(n, 12).transform(l.state$)),
                t.Yb(n, 1, 0, t.Nb(n, 13).transform(l.messageIndex$)),
                t.Yb(n, 1, 0, t.Nb(n, 14).transform(l.ttsMessage$)),
                t.Yb(n, 1, 0, t.Nb(n, 15).transform(l.hasAddressOrContact$)),
              ]);
            e(n, 1, 0, a);
          },
          null,
        );
      }
      function Pt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-message",
              [],
              null,
              null,
              null,
              Lt,
              bt,
            )),
            t.Sb(6144, null, kl.a, null, [Q]),
            t.Sb(131584, null, Q, Q, [
              b.b,
              y.a,
              P.c,
              i.a,
              U.a,
              K.c,
              Bl.a,
              Fl.a,
              Z.a,
              W.c,
              zl.a,
              Me.a,
            ]),
            t.xb(
              3,
              180224,
              null,
              0,
              se,
              [v.a, Q, i.a, y.a, P.c, b.b, G.a, Fl.a, Ye.a, ee.g, ue.b, Me.a],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var It = t.ub("au3-message", se, Pt, {}, {}, []),
        wt = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;width:100%;height:100%}.screen[_ngcontent-%COMP%]{flex-direction:column;height:100%}.recipient[_ngcontent-%COMP%], .screen[_ngcontent-%COMP%]{display:flex;width:100%;overflow:hidden}.recipient[_ngcontent-%COMP%]{max-width:100%;height:100px;font-size:40px;align-items:center}.recipient__prefix[_ngcontent-%COMP%]{width:16%;min-width:16%}.recipient__name[_ngcontent-%COMP%]{flex-grow:1}.component-layout-arabic[_nghost-%COMP%]   .recipient[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .recipient[_ngcontent-%COMP%]{direction:rtl}.component-layout-latin[_nghost-%COMP%]   .recipient[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .recipient[_ngcontent-%COMP%]{direction:ltr}",
            ],
          ],
          data: {},
        });
      function Et(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "recipient__prefix"],
                ["id", "RecipientKindNormal"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              ze.b,
              ze.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[6, De.a], Ye.a, t.h, t.l, t.D, [2, Ve.a], [2, He.a], [2, Ue.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "RecipientKindNormal"),
              e(n, 2, 0, "An: ", "RecipientKindNormal", 1));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 2).backgroundColor,
              t.Nb(n, 2).fixedNumberOfLines,
              t.Nb(n, 2).mayContainLatinCharsForArabic,
              t.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Dt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "recipient__prefix"],
                ["id", "RecipientKindCC"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              ze.b,
              ze.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[6, De.a], Ye.a, t.h, t.l, t.D, [2, Ve.a], [2, He.a], [2, Ue.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "RecipientKindCC"),
              e(n, 2, 0, "CC: ", "RecipientKindCC", 1));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 2).backgroundColor,
              t.Nb(n, 2).fixedNumberOfLines,
              t.Nb(n, 2).mayContainLatinCharsForArabic,
              t.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function At(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "recipient__prefix"],
                ["id", "RecipientKindBCC"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              ze.b,
              ze.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              Ge.a,
              [[6, De.a], Ye.a, t.h, t.l, t.D, [2, Ve.a], [2, He.a], [2, Ue.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, n) {
            (e(n, 1, 0, "RecipientKindBCC"),
              e(n, 2, 0, "BCC: ", "RecipientKindBCC", 1));
          },
          function (e, n) {
            e(
              n,
              0,
              0,
              t.Nb(n, 2).backgroundColor,
              t.Nb(n, 2).fixedNumberOfLines,
              t.Nb(n, 2).mayContainLatinCharsForArabic,
              t.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function $t(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              18,
              "div",
              [["class", "recipient"]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t =
                      !1 !==
                        e.component.sendMessageTo(
                          null == e.parent.context.mib3Let
                            ? null
                            : e.parent.context.mib3Let.location,
                          e.context.$implicit,
                        ) && t),
                  t
                );
              },
              null,
              null,
            )),
            t.xb(1, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              2,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              3,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              5,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              7,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              8,
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
              9,
              16384,
              null,
              0,
              Hn.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (e()(), t.hb(16777216, [[2, 2]], null, 1, null, Et)),
            t.xb(
              11,
              278528,
              null,
              0,
              Hn.p,
              [t.P, t.L, Hn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), t.hb(16777216, [[2, 2]], null, 1, null, Dt)),
            t.xb(
              13,
              278528,
              null,
              0,
              Hn.p,
              [t.P, t.L, Hn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), t.hb(16777216, [[2, 2]], null, 1, null, At)),
            t.xb(
              15,
              278528,
              null,
              0,
              Hn.p,
              [t.P, t.L, Hn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(),
            t.yb(
              16,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "recipient__name"],
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
              ze.b,
              ze.a,
            )),
            t.xb(17, 16384, null, 0, He.a, [], null, null),
            t.xb(
              18,
              245760,
              null,
              0,
              Ge.a,
              [[8, null], Ye.a, t.h, t.l, t.D, [2, Ve.a], [2, He.a], [2, Ue.a]],
              { nonI18nValue: [0, "nonI18nValue"] },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 3, 0),
              e(n, 5, 0),
              e(n, 9, 0, n.context.$implicit.type),
              e(n, 11, 0, l.PrefixEnum.RECIPIENTTO),
              e(n, 13, 0, l.PrefixEnum.RECIPIENTCC),
              e(n, 15, 0, l.PrefixEnum.RECIPIENTBCC),
              e(
                n,
                18,
                0,
                n.context.$implicit.name || n.context.$implicit.address,
              ));
          },
          function (e, n) {
            (e(n, 0, 0, t.Nb(n, 5).markerClassEnabled),
              e(
                n,
                16,
                0,
                t.Nb(n, 18).backgroundColor,
                t.Nb(n, 18).fixedNumberOfLines,
                t.Nb(n, 18).mayContainLatinCharsForArabic,
                t.Nb(n, 18).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function jt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              42,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:MSG_MAIL_MORE_ALL_RECIPIENT"],
              ],
              null,
              null,
              null,
              Ee.b,
              Ee.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, Ae.a, [Me.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              29,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              16384,
              null,
              0,
              Ue.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(6, { name: 0 }),
            t.xb(
              7,
              49152,
              null,
              0,
              je.a,
              [Re.a, ke.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryId: [1, "primaryId"],
                primaryIdEnumType: [2, "primaryIdEnumType"],
                secondaryDeveloperText: [3, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              8,
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
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n && (t = !1 !== e.component.goBack() && t),
                  t
                );
              },
              Xe.b,
              Xe.a,
            )),
            t.xb(9, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              10,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              12,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              ml.a,
              [Me.a, gl.a, t.l, [2, tn.a], [2, Je.a]],
              null,
              null,
            ),
            t.xb(14, 16384, null, 0, He.a, [], null, null),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              16,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              17,
              49152,
              null,
              0,
              xn.a,
              [[2, Je.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              18,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              19,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              20,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "GoToSettings"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              Xe.b,
              Xe.a,
            )),
            t.xb(
              21,
              147456,
              null,
              0,
              Je.a,
              [Qe.a, t.h, Me.a, [3, Je.a]],
              null,
              null,
            ),
            t.xb(22, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              23,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              24,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              25,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              null,
            ),
            t.xb(
              26,
              671744,
              null,
              0,
              rn.a,
              [_e.a, cn.i, Je.a, tn.a, rn.b, sn.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(27, 16384, null, 0, He.a, [], null, null),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              29,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              30,
              49152,
              null,
              0,
              xn.a,
              [[2, Je.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              31,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              32,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              33,
              0,
              null,
              0,
              9,
              "au3-disclaimer",
              [],
              null,
              null,
              null,
              ot.b,
              ot.a,
            )),
            t.xb(
              34,
              4440064,
              null,
              0,
              ct.a,
              [Pn.a, [2, De.a], t.h, Me.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              35,
              0,
              null,
              0,
              7,
              "au3-list",
              [["au3ListDomPaging", ""]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Ml.b,
              Ml.a,
            )),
            t.Sb(6144, null, Cl.a, null, [Nl.a]),
            t.xb(37, 16384, null, 0, Ll.a, [t.l], null, null),
            t.xb(38, 16384, null, 0, Pl.a, [Me.a], null, null),
            t.xb(
              39,
              12828672,
              [[1, 4]],
              1,
              Nl.a,
              [
                [2, Pl.a],
                [2, Il.a],
                [8, null],
                [2, De.a],
                [2, wl.a],
                [2, El.a],
                [2, an.b],
                cn.i,
                t.z,
                t.h,
                Me.a,
                Dl.a,
                Al.a,
                [2, pn.a],
                ln.a,
                [2, cn.a],
              ],
              { showCursor: [0, "showCursor"], items: [1, "items"] },
              null,
            ),
            t.Tb(603979776, 2, { template: 0 }),
            t.Pb(131072, Hn.b, [t.h]),
            (e()(), t.hb(0, [[2, 2]], 0, 0, null, $t)),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "Screen:MSG_MAIL_MORE_ALL_RECIPIENT"),
              e(n, 2, 0, "Screen:MSG_MAIL_MORE_ALL_RECIPIENT"),
              e(n, 4, 0, ""));
            var a = e(
              n,
              6,
              0,
              null == n.context.mib3Let ||
                null == n.context.mib3Let.location ||
                null == n.context.mib3Let.location.account
                ? null
                : n.context.mib3Let.location.account.name,
            );
            (e(n, 5, 0, a),
              e(
                n,
                7,
                0,
                l.infoService.getMsgHeader(
                  null == n.context.mib3Let ||
                    null == n.context.mib3Let.location
                    ? null
                    : n.context.mib3Let.location.account,
                ),
                l.infoService.getMsgHeader(
                  null == n.context.mib3Let ||
                    null == n.context.mib3Let.location
                    ? null
                    : n.context.mib3Let.location.account,
                ),
                l.headerEnum,
                "Alle Empf\xe4nger",
              ),
              e(n, 10, 0, "BackButton"),
              e(n, 12, 0),
              e(n, 16, 0),
              e(n, 17, 0, !1, "E163_Backbutton.webp"),
              e(n, 23, 0, "GoToSettings"),
              e(n, 25, 0),
              e(n, 26, 0, l.MessagingRoute.Settings, !0),
              e(n, 29, 0),
              e(n, 30, 0, !1, "E186_settings.webp"),
              e(n, 34, 0),
              e(
                n,
                39,
                0,
                !1,
                t.Yb(n, 39, 1, t.Nb(n, 41).transform(l.pagedData)),
              ));
          },
          function (e, n) {
            (e(
              n,
              3,
              0,
              t.Nb(n, 7).hideLeftBorder,
              t.Nb(n, 7).hideDividingBorders,
            ),
              e(
                n,
                8,
                0,
                t.Nb(n, 16).markerClassEnabled,
                t.Nb(n, 17).useItemPlaceholder,
              ),
              e(
                n,
                20,
                0,
                t.Nb(n, 21).combinedDisabled,
                t.Nb(n, 21).useBrighterIcon,
                t.Nb(n, 29).markerClassEnabled,
                t.Nb(n, 30).useItemPlaceholder,
              ),
              e(n, 35, 0, t.Nb(n, 39).showLineNumbers));
          },
        );
      }
      function Rt(e) {
        return t.ac(
          2,
          [
            t.Tb(671088640, 1, { listView: 0 }),
            (e()(), t.hb(16777216, null, null, 3, null, jt)),
            t.xb(
              2,
              16384,
              null,
              0,
              Un.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, Hn.b, [t.h]),
            t.Qb(4, { location: 0 }),
          ],
          function (e, n) {
            var l = n.component,
              a = e(n, 4, 0, t.Yb(n, 2, 0, t.Nb(n, 3).transform(l.location$)));
            e(n, 2, 0, a);
          },
          null,
        );
      }
      function kt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-recipients",
              [],
              null,
              null,
              null,
              Rt,
              wt,
            )),
            t.xb(
              1,
              4243456,
              null,
              0,
              be,
              [v.a, y.a, i.a, P.c, b.b, Me.a],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var Ft = t.ub("au3-recipients", be, kt, {}, {}, []),
        Bt = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%}.list__item[_ngcontent-%COMP%]{height:100px;font-size:40px;padding:0 20px}",
            ],
          ],
          data: {},
        });
      function zt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["ttIgnore", ""],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t =
                      !1 !==
                        e.component.startCall(
                          e.context.$implicit,
                          e.parent.context.mib3Let,
                        ) && t),
                  t
                );
              },
              fl.b,
              fl.a,
            )),
            t.xb(1, 16384, null, 0, He.a, [], null, null),
            t.xb(2, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              114688,
              null,
              0,
              yl.a,
              [],
              {
                titleNonI18nText: [0, "titleNonI18nText"],
                hasSubtitle: [1, "hasSubtitle"],
                type: [2, "type"],
              },
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 4, 0),
              e(n, 6, 0),
              e(
                n,
                7,
                0,
                n.context.$implicit,
                !1,
                l.listItemType.ITEM_TYPE_NO_END_ICON,
              ));
          },
          function (e, n) {
            e(n, 0, 0, t.Nb(n, 6).markerClassEnabled);
          },
        );
      }
      function Gt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              43,
              "au3-screen",
              [["id", "Screen:MSG_EXTRACT_NUMBERS"]],
              null,
              null,
              null,
              Ee.b,
              Ee.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, Ae.a, [Me.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              28,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              16384,
              null,
              0,
              Ue.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(6, { name: 0 }),
            t.xb(
              7,
              49152,
              null,
              0,
              je.a,
              [Re.a, ke.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryId: [1, "primaryId"],
                primaryIdEnumType: [2, "primaryIdEnumType"],
                secondaryDeveloperText: [3, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              8,
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
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t = !1 !== e.component.routingService.goBack() && t),
                  t
                );
              },
              Xe.b,
              Xe.a,
            )),
            t.xb(9, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              10,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              12,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              ml.a,
              [Me.a, gl.a, t.l, [2, tn.a], [2, Je.a]],
              null,
              null,
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              15,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              16,
              49152,
              null,
              0,
              xn.a,
              [[2, Je.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              18,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              19,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "GoToSettings"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              Xe.b,
              Xe.a,
            )),
            t.xb(
              20,
              147456,
              null,
              0,
              Je.a,
              [Qe.a, t.h, Me.a, [3, Je.a]],
              null,
              null,
            ),
            t.xb(21, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              22,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              23,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              24,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              null,
            ),
            t.xb(
              25,
              671744,
              null,
              0,
              rn.a,
              [_e.a, cn.i, Je.a, tn.a, rn.b, sn.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(26, 16384, null, 0, He.a, [], null, null),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              28,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              29,
              49152,
              null,
              0,
              xn.a,
              [[2, Je.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              30,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              31,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              32,
              0,
              null,
              0,
              11,
              "au3-disclaimer",
              [["id", "ExtractNumbersDisclaimer"]],
              null,
              null,
              null,
              ot.b,
              ot.a,
            )),
            t.xb(
              33,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              34,
              4440064,
              null,
              0,
              ct.a,
              [Pn.a, [2, De.a], t.h, Me.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              35,
              0,
              null,
              0,
              7,
              "au3-list",
              [
                ["au3ListDomPaging", ""],
                ["id", "ExtractNumbersList"],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Ml.b,
              Ml.a,
            )),
            t.Sb(6144, null, Cl.a, null, [Nl.a]),
            t.xb(
              37,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(38, 16384, null, 0, Ll.a, [t.l], null, null),
            t.xb(39, 16384, null, 0, Pl.a, [Me.a], null, null),
            t.xb(
              40,
              12828672,
              [[1, 4]],
              1,
              Nl.a,
              [
                [2, Pl.a],
                [2, Il.a],
                [8, null],
                [2, De.a],
                [2, wl.a],
                [2, El.a],
                [2, an.b],
                cn.i,
                t.z,
                t.h,
                Me.a,
                Dl.a,
                Al.a,
                [2, pn.a],
                ln.a,
                [2, cn.a],
              ],
              { defaultTemplate: [0, "defaultTemplate"], items: [1, "items"] },
              null,
            ),
            t.Tb(603979776, 2, { template: 0 }),
            t.Pb(131072, Hn.b, [t.h]),
            (e()(), t.hb(0, [["defaultTemplate", 2]], 0, 0, null, zt)),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "Screen:MSG_EXTRACT_NUMBERS"),
              e(n, 2, 0, "Screen:MSG_EXTRACT_NUMBERS"),
              e(n, 4, 0, ""));
            var a = e(
              n,
              6,
              0,
              null == n.context.mib3Let || null == n.context.mib3Let.account
                ? null
                : n.context.mib3Let.account.name,
            );
            (e(n, 5, 0, a),
              e(
                n,
                7,
                0,
                l.infoService.getMsgHeader(
                  null == n.context.mib3Let ? null : n.context.mib3Let.account,
                ),
                l.infoService.getMsgHeader(
                  null == n.context.mib3Let ? null : n.context.mib3Let.account,
                ),
                l.headerEnum,
                "Anrufen bei",
              ),
              e(n, 10, 0, "BackButton"),
              e(n, 12, 0),
              e(n, 15, 0),
              e(n, 16, 0, !1, "E163_Backbutton.webp"),
              e(n, 22, 0, "GoToSettings"),
              e(n, 24, 0),
              e(n, 25, 0, l.MessagingRoute.Settings, !0),
              e(n, 28, 0),
              e(n, 29, 0, !1, "E186_settings.webp"),
              e(n, 33, 0, "ExtractNumbersDisclaimer"),
              e(n, 34, 0),
              e(n, 37, 0, "ExtractNumbersList"),
              e(
                n,
                40,
                0,
                t.Nb(n, 43),
                t.Yb(n, 40, 1, t.Nb(n, 42).transform(l.pagedData$)),
              ));
          },
          function (e, n) {
            (e(
              n,
              3,
              0,
              t.Nb(n, 7).hideLeftBorder,
              t.Nb(n, 7).hideDividingBorders,
            ),
              e(
                n,
                8,
                0,
                t.Nb(n, 15).markerClassEnabled,
                t.Nb(n, 16).useItemPlaceholder,
              ),
              e(
                n,
                19,
                0,
                t.Nb(n, 20).combinedDisabled,
                t.Nb(n, 20).useBrighterIcon,
                t.Nb(n, 28).markerClassEnabled,
                t.Nb(n, 29).useItemPlaceholder,
              ),
              e(n, 35, 0, t.Nb(n, 40).showLineNumbers));
          },
        );
      }
      function Yt(e) {
        return t.ac(
          2,
          [
            t.Tb(671088640, 1, { listView: 0 }),
            (e()(), t.hb(16777216, null, null, 2, null, Gt)),
            t.xb(
              2,
              16384,
              null,
              0,
              Un.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, Hn.b, [t.h]),
          ],
          function (e, n) {
            var l = n.component;
            e(n, 2, 0, t.Yb(n, 2, 0, t.Nb(n, 3).transform(l.location$)));
          },
          null,
        );
      }
      function Vt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-extract-numbers",
              [],
              null,
              null,
              null,
              Yt,
              Bt,
            )),
            t.xb(
              1,
              4243456,
              null,
              0,
              he,
              [b.b, v.a, i.a, y.a, K.c, Me.a],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var Ht = t.ub("au3-extract-numbers", he, Vt, {}, {}, []),
        Ut = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%}.list__item[_ngcontent-%COMP%]{height:100px;font-size:40px;padding:0 20px}",
            ],
          ],
          data: {},
        });
      function Kt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["ttIgnore", ""],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t =
                      !1 !==
                        e.component.sendMail(
                          e.parent.context.mib3Let,
                          e.context.$implicit,
                        ) && t),
                  t
                );
              },
              fl.b,
              fl.a,
            )),
            t.xb(1, 16384, null, 0, He.a, [], null, null),
            t.xb(2, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              114688,
              null,
              0,
              yl.a,
              [],
              {
                titleNonI18nText: [0, "titleNonI18nText"],
                hasSubtitle: [1, "hasSubtitle"],
                type: [2, "type"],
              },
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 4, 0),
              e(n, 6, 0),
              e(
                n,
                7,
                0,
                n.context.$implicit,
                !1,
                l.listItemType.ITEM_TYPE_NO_END_ICON,
              ));
          },
          function (e, n) {
            e(n, 0, 0, t.Nb(n, 6).markerClassEnabled);
          },
        );
      }
      function Wt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              42,
              "au3-screen",
              [["id", "'screen:MESSAGING_EXTRACTED_MAIL_ADDRESSES"]],
              null,
              null,
              null,
              Ee.b,
              Ee.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, Ae.a, [Me.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              28,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              16384,
              null,
              0,
              Ue.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(6, { name: 0 }),
            t.xb(
              7,
              49152,
              null,
              0,
              je.a,
              [Re.a, ke.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryId: [1, "primaryId"],
                primaryIdEnumType: [2, "primaryIdEnumType"],
                hasSecondaryText: [3, "hasSecondaryText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              8,
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
              function (e, n, l) {
                var t = !0;
                return (
                  "mib3Tap" === n &&
                    (t = !1 !== e.component.routingService.goBack() && t),
                  t
                );
              },
              Xe.b,
              Xe.a,
            )),
            t.xb(9, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              10,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              12,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              ml.a,
              [Me.a, gl.a, t.l, [2, tn.a], [2, Je.a]],
              null,
              null,
            ),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              15,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              16,
              49152,
              null,
              0,
              xn.a,
              [[2, Je.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              18,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              19,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "GoToSettings"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              Xe.b,
              Xe.a,
            )),
            t.xb(
              20,
              147456,
              null,
              0,
              Je.a,
              [Qe.a, t.h, Me.a, [3, Je.a]],
              null,
              null,
            ),
            t.xb(21, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              22,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              23,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              24,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              null,
            ),
            t.xb(
              25,
              671744,
              null,
              0,
              rn.a,
              [_e.a, cn.i, Je.a, tn.a, rn.b, sn.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(26, 16384, null, 0, He.a, [], null, null),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              28,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              29,
              49152,
              null,
              0,
              xn.a,
              [[2, Je.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              30,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              31,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              32,
              0,
              null,
              0,
              10,
              "au3-disclaimer",
              [],
              null,
              null,
              null,
              ot.b,
              ot.a,
            )),
            t.xb(
              33,
              4440064,
              null,
              0,
              ct.a,
              [Pn.a, [2, De.a], t.h, Me.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              34,
              0,
              null,
              0,
              7,
              "au3-list",
              [
                ["au3ListDomPaging", ""],
                ["id", "ExtractAddressesList"],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Ml.b,
              Ml.a,
            )),
            t.Sb(6144, null, Cl.a, null, [Nl.a]),
            t.xb(
              36,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(37, 16384, null, 0, Ll.a, [t.l], null, null),
            t.xb(
              38,
              16384,
              null,
              0,
              Pl.a,
              [Me.a],
              { itemHeightGuess: [0, "itemHeightGuess"] },
              null,
            ),
            t.xb(
              39,
              12828672,
              [[1, 4]],
              1,
              Nl.a,
              [
                [2, Pl.a],
                [2, Il.a],
                [8, null],
                [2, De.a],
                [2, wl.a],
                [2, El.a],
                [2, an.b],
                cn.i,
                t.z,
                t.h,
                Me.a,
                Dl.a,
                Al.a,
                [2, pn.a],
                ln.a,
                [2, cn.a],
              ],
              {
                itemHeightGuess: [0, "itemHeightGuess"],
                defaultTemplate: [1, "defaultTemplate"],
                items: [2, "items"],
              },
              null,
            ),
            t.Tb(603979776, 2, { template: 0 }),
            t.Pb(131072, Hn.b, [t.h]),
            (e()(), t.hb(0, [["defaultTemplate", 2]], 0, 0, null, Kt)),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "'screen:MESSAGING_EXTRACTED_MAIL_ADDRESSES"),
              e(n, 2, 0, "'screen:MESSAGING_EXTRACTED_MAIL_ADDRESSES"),
              e(n, 4, 0, ""));
            var a = e(
              n,
              6,
              0,
              null == n.context.mib3Let || null == n.context.mib3Let.account
                ? null
                : n.context.mib3Let.account.name,
            );
            (e(n, 5, 0, a),
              e(
                n,
                7,
                0,
                l.infoService.getMsgHeader(
                  null == n.context.mib3Let ? null : n.context.mib3Let.account,
                ),
                l.infoService.getMsgHeader(
                  null == n.context.mib3Let ? null : n.context.mib3Let.account,
                ),
                l.headerEnum,
                !1,
              ),
              e(n, 10, 0, "BackButton"),
              e(n, 12, 0),
              e(n, 15, 0),
              e(n, 16, 0, !1, "E163_Backbutton.webp"),
              e(n, 22, 0, "GoToSettings"),
              e(n, 24, 0),
              e(n, 25, 0, l.MessagingRoute.Settings, !0),
              e(n, 28, 0),
              e(n, 29, 0, !1, "E186_settings.webp"),
              e(n, 33, 0),
              e(n, 36, 0, "ExtractAddressesList"),
              e(n, 38, 0, 100),
              e(
                n,
                39,
                0,
                100,
                t.Nb(n, 42),
                t.Yb(n, 39, 2, t.Nb(n, 41).transform(l.pagedData$)),
              ));
          },
          function (e, n) {
            (e(
              n,
              3,
              0,
              t.Nb(n, 7).hideLeftBorder,
              t.Nb(n, 7).hideDividingBorders,
            ),
              e(
                n,
                8,
                0,
                t.Nb(n, 15).markerClassEnabled,
                t.Nb(n, 16).useItemPlaceholder,
              ),
              e(
                n,
                19,
                0,
                t.Nb(n, 20).combinedDisabled,
                t.Nb(n, 20).useBrighterIcon,
                t.Nb(n, 28).markerClassEnabled,
                t.Nb(n, 29).useItemPlaceholder,
              ),
              e(n, 34, 0, t.Nb(n, 39).showLineNumbers));
          },
        );
      }
      function Zt(e) {
        return t.ac(
          2,
          [
            t.Tb(671088640, 1, { listView: 0 }),
            (e()(), t.hb(16777216, null, null, 2, null, Wt)),
            t.xb(
              2,
              16384,
              null,
              0,
              Un.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, Hn.b, [t.h]),
          ],
          function (e, n) {
            var l = n.component;
            e(n, 2, 0, t.Yb(n, 2, 0, t.Nb(n, 3).transform(l.location$)));
          },
          null,
        );
      }
      function qt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-extract-mails",
              [],
              null,
              null,
              null,
              Zt,
              Ut,
            )),
            t.xb(
              1,
              4243456,
              null,
              0,
              xe,
              [b.b, v.a, i.a, y.a, P.c, Me.a],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var Xt = t.ub("au3-extract-mails", xe, qt, {}, {}, []),
        Jt = l("rYDR");
      class Qt {
        constructor(e, n, l, t) {
          ((this.phoneService = e),
            (this.messagingRoutingService = n),
            (this.MessagingRoute = b.a),
            (this.destroy$$ = new M.a(1)),
            (this.logger = t.getLogger("messaging.MessagingPrivacyComponent")),
            this.initAccountSubscription(l));
        }
        ngOnDestroy() {
          (this.destroy$$.next(), this.destroy$$.complete());
        }
        initAccountSubscription(e) {
          e.paramMap
            .pipe(
              Object(m.a)((e) => e.get(b.c)),
              Object(x.a)((e) =>
                e
                  ? (this.logger.info(
                      "initAccountSubscription: listening to updates for phone device id:",
                      e,
                    ),
                    this.phoneService.phones$.pipe(
                      Object(m.a)((n) =>
                        n.find((n) => !!n.device && n.device.id === e),
                      ),
                    ))
                  : (this.logger.error(
                      "initAccountSubscription: no deviceId provided!",
                    ),
                    Jt.a),
              ),
              Object(N.a)(this.destroy$$),
            )
            .subscribe((e) => {
              e &&
                !e.isConfidentialModeActive &&
                (this.logger.info(
                  "initAccountSubscription: confidential mode was deactivated for:",
                  e,
                ),
                this.messagingRoutingService.enterContext());
            });
        }
      }
      var ea = t.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{display:block;height:100%}.privacy-label[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;justify-content:center;font-size:40px;text-align:center}",
          ],
        ],
        data: {},
      });
      function na(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              34,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:MSG_MAIN_PRIVACY"],
              ],
              null,
              null,
              null,
              Ee.b,
              Ee.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, Ae.a, [Me.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              28,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              $e.b,
              $e.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              je.a,
              [Re.a, ke.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              12,
              "au3-title-line-item",
              [
                ["icon", "E2B3_account_selection.webp"],
                ["id", "SourceSelectionButton"],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              Xe.b,
              Xe.a,
            )),
            t.xb(
              7,
              147456,
              null,
              0,
              Je.a,
              [Qe.a, t.h, Me.a, [3, Je.a]],
              null,
              null,
            ),
            t.xb(8, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              9,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              11,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              null,
            ),
            t.xb(
              12,
              671744,
              null,
              0,
              rn.a,
              [_e.a, cn.i, Je.a, tn.a, rn.b, sn.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.xb(13, 16384, null, 0, He.a, [], null, null),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              15,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              16,
              49152,
              null,
              0,
              xn.a,
              [[2, Je.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              18,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              19,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["icon", "/icons/titelline/E186_settings.webp"],
                ["id", "SettingsButton"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              Xe.b,
              Xe.a,
            )),
            t.xb(
              20,
              147456,
              null,
              0,
              Je.a,
              [Qe.a, t.h, Me.a, [3, Je.a]],
              null,
              null,
            ),
            t.xb(21, 147456, null, 0, en.a, [t.l, t.z], null, null),
            t.xb(
              22,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              23,
              147456,
              null,
              0,
              nn.a,
              [en.a, [2, ln.a], [2, De.a], Me.a],
              null,
              null,
            ),
            t.xb(
              24,
              212992,
              null,
              0,
              tn.a,
              [
                Me.a,
                an.b,
                nn.a,
                [2, ln.a],
                [2, De.a],
                [2, Je.a],
                [2, Ae.a],
                [2, Se.a],
                t.z,
                on.a,
                t.l,
                [2, un.a],
              ],
              null,
              null,
            ),
            t.xb(
              25,
              671744,
              null,
              0,
              rn.a,
              [_e.a, cn.i, Je.a, tn.a, rn.b, sn.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(26, 16384, null, 0, He.a, [], null, null),
            t.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            t.xb(
              28,
              4407296,
              null,
              0,
              dn.a,
              [
                t.l,
                pn.a,
                t.h,
                bn.a,
                [2, mn.a],
                [2, ln.b],
                [2, ln.a],
                [2, gn.a],
                [2, hn.a],
              ],
              null,
              null,
            ),
            t.xb(
              29,
              49152,
              null,
              0,
              xn.a,
              [[2, Je.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              30,
              147456,
              null,
              0,
              fn.a,
              [
                [2, tn.a],
                [2, Je.a],
                [2, yn.a],
                [2, dn.a],
                [2, vn.b],
                t.l,
                On.a,
                Sn.b,
              ],
              null,
              null,
            ),
            t.xb(
              31,
              147456,
              null,
              0,
              _n.a,
              [[2, dn.a], [2, tn.a], [2, an.b], Tn.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              32,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [
                ["class", "privacy-label"],
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
              ze.b,
              ze.a,
            )),
            t.xb(
              33,
              212992,
              null,
              0,
              De.a,
              [t.l, t.D, Te.a, Me.a, [3, De.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              34,
              245760,
              null,
              0,
              Ge.a,
              [[6, De.a], Ye.a, t.h, t.l, t.D, [2, Ve.a], [2, He.a], [2, Ue.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (e, n) {
            var l = n.component;
            (e(n, 1, 0, "Screen:MSG_MAIN_PRIVACY"),
              e(n, 2, 0, "Screen:MSG_MAIN_PRIVACY"),
              e(n, 4, 0, ""),
              e(n, 5, 0, "Messaging", "Hinweis"),
              e(n, 9, 0, "SourceSelectionButton"),
              e(n, 11, 0),
              e(n, 12, 0, l.MessagingRoute.SourceSelection),
              e(n, 15, 0),
              e(n, 16, 0, !1, "E2B3_account_selection.webp"),
              e(n, 22, 0, "SettingsButton"),
              e(n, 24, 0),
              e(n, 25, 0, l.MessagingRoute.Settings, !0),
              e(n, 28, 0),
              e(n, 29, 0, !1, "/icons/titelline/E186_settings.webp"),
              e(n, 33, 0, "PrivacyModeActive"),
              e(
                n,
                34,
                0,
                "Das verbundene Mobiltelefon befindet sich im Privatmodus.\nDer Zugriff auf die Nachrichtenlisten ist gesperrt.",
                "PrivacyModeActive",
              ));
          },
          function (e, n) {
            (e(
              n,
              3,
              0,
              t.Nb(n, 5).hideLeftBorder,
              t.Nb(n, 5).hideDividingBorders,
            ),
              e(
                n,
                6,
                0,
                t.Nb(n, 7).combinedDisabled,
                t.Nb(n, 7).useBrighterIcon,
                t.Nb(n, 15).markerClassEnabled,
                t.Nb(n, 16).useItemPlaceholder,
              ),
              e(
                n,
                19,
                0,
                t.Nb(n, 20).combinedDisabled,
                t.Nb(n, 20).useBrighterIcon,
                t.Nb(n, 28).markerClassEnabled,
                t.Nb(n, 29).useItemPlaceholder,
              ),
              e(
                n,
                32,
                0,
                t.Nb(n, 34).backgroundColor,
                t.Nb(n, 34).fixedNumberOfLines,
                t.Nb(n, 34).mayContainLatinCharsForArabic,
                t.Nb(n, 34).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function la(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-messaging-privacy",
              [],
              null,
              null,
              null,
              na,
              ea,
            )),
            t.xb(1, 180224, null, 0, Qt, [K.c, b.b, Ce.a, Me.a], null, null),
          ],
          null,
          null,
        );
      }
      var ta = t.ub("au3-messaging-privacy", Qt, la, {}, {}, []),
        aa = l("aDqW"),
        ia = l("/W5r"),
        oa = l("+Qv1"),
        ua = l("XtoR"),
        ra = l("jTHl"),
        ca = l("zL3T"),
        sa = l("zm/l"),
        ba = l("XOcJ"),
        da = l("doQC"),
        pa = l("nRk7"),
        ma = l("K3fK"),
        ga = l("2Uk/"),
        ha = l("P7mx"),
        xa = l("CiY/"),
        fa = l("64dN"),
        ya = l("jOdJ");
      class va extends a.cc {
        constructor(e, n) {
          (super(n.getLogger("messaging.CurrentAccountAvailableGuard")),
            (this.locationService = e));
        }
        checkActivation(e, n) {
          return this.locationService.location$.pipe(
            Object(m.a)((e) => !!e && !!e.account),
            Object(ya.a)(),
          );
        }
      }
      class Oa extends a.cc {
        constructor(e, n) {
          (super(n.getLogger("messaging.CurrentFolderAvailableGuard")),
            (this.locationService = e));
        }
        checkActivation(e, n) {
          return this.locationService.location$.pipe(
            Object(m.a)((e) => !!e && !!e.folder),
            Object(ya.a)(),
          );
        }
      }
      class Sa extends a.cc {
        constructor(e, n) {
          (super(n.getLogger("messaging.CurrentMessageAvailableGuard")),
            (this.locationService = e));
        }
        checkActivation(e, n) {
          return this.locationService.location$.pipe(
            Object(m.a)((e) => !!e && !!e.message),
            Object(ya.a)(),
          );
        }
      }
      var _a = l("+epw"),
        Ta = l("zMPs"),
        Ma = l("6Yk8"),
        Ca = l("u6+O"),
        Na = l("CIQC"),
        La = l("REmV"),
        Pa = l("Y3N+"),
        Ia = l("MJxn"),
        wa = l("eIOF"),
        Ea = l("t+4g"),
        Da = l("myjn"),
        Aa = l("fOZ7"),
        $a = l("Wm/T");
      const ja = () =>
          Promise.all([l.e(50), l.e(106)])
            .then(l.bind(null, "g1YH"))
            .then((e) => e.MessagingSettingsModuleNgFactory),
        Ra = () =>
          Promise.all([l.e(2), l.e(3), l.e(4), l.e(8), l.e(57), l.e(97)])
            .then(l.bind(null, "mPYu"))
            .then((e) => e.PhoneSearchModuleNgFactory),
        ka = () =>
          Promise.all([l.e(11), l.e(23), l.e(55), l.e(101)])
            .then(l.bind(null, "rR4V"))
            .then((e) => e.SendMessageModuleNgFactory);
      class Fa {}
      var Ba = l("TBks"),
        za = l("yUFt"),
        Ga = l("QDrj"),
        Ya = l("YCQm"),
        Va = l("6gUO"),
        Ha = l("ygUF"),
        Ua = t.vb(fe, [], function (e) {
          return t.Kb([
            t.Lb(512, t.j, t.X, [
              [8, [ye.a, we, qe, $n, Fn, Jn, pl, tt, It, Ft, Ht, Xt, ta]],
              [3, t.j],
              t.x,
            ]),
            t.Lb(4608, Hn.m, Hn.l, [t.u]),
            t.Lb(4608, aa.h, aa.g, []),
            t.Lb(4608, aa.d, aa.f, []),
            t.Lb(4608, aa.j, aa.e, []),
            t.Lb(4608, aa.c, aa.b, []),
            t.Lb(4608, aa.k, aa.k, [
              aa.l,
              aa.h,
              aa.d,
              aa.j,
              aa.c,
              aa.m,
              aa.o,
              aa.n,
              aa.a,
            ]),
            t.Lb(4608, ia.b, ia.b, [oa.e, [2, ia.a]]),
            t.Lb(4608, ua.b, ua.b, [oa.e, [2, ua.a]]),
            t.Lb(4608, ra.b, ra.b, [oa.e, [2, ra.a]]),
            t.Lb(4608, ca.b, ca.b, [oa.e, [2, ca.a]]),
            t.Lb(4608, sa.a, sa.a, [K.c, Me.a]),
            t.Lb(4608, ba.a, ba.a, [K.c, Me.a]),
            t.Lb(4608, da.a, da.a, [K.c, Me.a]),
            t.Lb(4608, pa.a, pa.a, [K.c, Me.a]),
            t.Lb(4608, ma.a, ma.a, [ga.a, Me.a]),
            t.Lb(4608, ha.a, ha.a, [i.a, Me.a]),
            t.Lb(4608, xa.a, xa.a, [pe.a, Me.a]),
            t.Lb(4608, fa.a, fa.a, [i.a, Me.a]),
            t.Lb(4608, va, va, [y.a, Me.a]),
            t.Lb(4608, Oa, Oa, [y.a, Me.a]),
            t.Lb(4608, Sa, Sa, [y.a, Me.a]),
            t.Lb(1073742336, Hn.c, Hn.c, []),
            t.Lb(1073742336, aa.i, aa.i, []),
            t.Lb(1073742336, _a.a, _a.a, []),
            t.Lb(1073742336, Ta.a, Ta.a, []),
            t.Lb(1073742336, Ma.a, Ma.a, []),
            t.Lb(1073742336, Ca.a, Ca.a, []),
            t.Lb(1073742336, Na.a, Na.a, []),
            t.Lb(1073742336, La.a, La.a, []),
            t.Lb(1073742336, Pa.a, Pa.a, []),
            t.Lb(1073742336, Ia.a, Ia.a, []),
            t.Lb(1073742336, wa.a, wa.a, []),
            t.Lb(1073742336, Ea.a, Ea.a, []),
            t.Lb(1073742336, Da.a, Da.a, []),
            t.Lb(1073742336, Aa.a, Aa.a, []),
            t.Lb(1073742336, Ce.n, Ce.n, [
              [2, Ce.s],
              [2, Ce.m],
            ]),
            t.Lb(1073742336, Fa, Fa, []),
            t.Lb(1073742336, Ba.a, Ba.a, []),
            t.Lb(1073742336, za.a, za.a, []),
            t.Lb(1073742336, Ga.a, Ga.a, []),
            t.Lb(1073742336, Ya.a, Ya.a, []),
            t.Lb(1073742336, Va.a, Va.a, []),
            t.Lb(1073742336, Ha.a, Ha.a, []),
            t.Lb(1073742336, fe, fe, []),
            t.Lb(256, aa.o, void 0, []),
            t.Lb(256, aa.m, void 0, []),
            t.Lb(256, aa.n, void 0, []),
            t.Lb(256, aa.a, void 0, []),
            t.Lb(
              1024,
              Ce.k,
              function () {
                return [
                  [
                    {
                      path: "",
                      component: o,
                      children: [
                        { path: "init", component: d, canActivate: [xa.a] },
                        { path: "init-carplay", component: ge },
                        { path: "messaging-settings", loadChildren: ja },
                        {
                          path: "search",
                          canActivate: [$a.a],
                          loadChildren: Ra,
                        },
                        {
                          path: "no-account",
                          component: g,
                          canActivate: [ha.a, xa.a],
                        },
                        {
                          path: "source-selection",
                          canActivate: [ha.a, fa.a, xa.a],
                          children: [
                            { path: "", component: T },
                            {
                              path: "account",
                              canActivate: [va],
                              children: [
                                { path: "", component: w },
                                {
                                  path: "folder",
                                  canActivate: [Oa],
                                  children: [
                                    { path: "", component: le },
                                    {
                                      path: "message",
                                      canActivate: [ha.a, fa.a, Sa],
                                      children: [
                                        { path: "", component: se },
                                        {
                                          path: "all-recipients",
                                          component: be,
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          path: "extract-number",
                          component: he,
                          canActivate: [ha.a, fa.a, xa.a],
                        },
                        {
                          path: "extract-address",
                          component: xe,
                          canActivate: [ha.a, fa.a, xa.a],
                        },
                        { path: "send-message", loadChildren: ka },
                        { path: "privacy", component: Qt },
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
    yUFt: function (e, n, l) {
      "use strict";
      l.d(n, "a", function () {
        return t;
      });
      class t {}
    },
    "zm/l": function (e, n, l) {
      "use strict";
      (l.d(n, "a", function () {
        return a;
      }),
        l("YEFf"));
      var t = l("Yi6/");
      class a extends t.cc {
        constructor(e, n) {
          (super(n.getLogger("phone.ActiveCallGuard")),
            (this.phoneService = e));
        }
        get callActive() {
          return void 0 !== this.phoneService.calls.focusCall;
        }
        checkActivation(e) {
          const n = this.callActive;
          return (
            n ||
              this.logger.warn(
                `routing to ${e} not allowed. call state:`,
                this.phoneService.calls,
              ),
            n
          );
        }
      }
    },
  },
]);
