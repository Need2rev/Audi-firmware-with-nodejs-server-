(window.webpackJsonp = window.webpackJsonp || []).push([
  [82],
  {
    "89Z2": function (n, l, e) {
      "use strict";
      (e.d(l, "a", function () {
        return i;
      }),
        e.d(l, "b", function () {
          return a;
        }));
      var t = e("kZht"),
        i =
          (e("kqft"),
          e("+sw+"),
          e("FfND"),
          e("bou3"),
          e("yNay"),
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
      function a(n) {
        return t.ac(2, [t.Mb(null, 0)], null, null);
      }
    },
    VUTu: function (n, l, e) {
      "use strict";
      (e.d(l, "a", function () {
        return _;
      }),
        e.d(l, "b", function () {
          return I;
        }));
      var t = e("kZht"),
        i = e("HVUF"),
        a = e("B3Zb"),
        o = e("yNay"),
        u = e("8TlW"),
        r = e("fu7d"),
        c = e("bou3"),
        s = e("ijxY"),
        b = e("Xo58"),
        p = e("m3Ja"),
        d = e("r+e+"),
        g = e("bmFL"),
        h = e("T8E5"),
        x = e("An66"),
        f = e("gKAS"),
        m = e("Brsi"),
        _ =
          (e("nK9R"),
          e("qzuC"),
          e("8yWk"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);position:relative;display:flex;flex-direction:row;flex:0 0 auto;color:#fff;height:119px;border-style:solid;border-width:0 0 2px;border-image:linear-gradient(90deg,hsla(0,0%,87.1%,.7) 0,hsla(0,0%,87.1%,.9) 36%,hsla(0,0%,87.1%,.4)) 1 1;z-index:10;transform:translateZ(0)}[_nghost-%COMP%]   .fpk-stage-big[_nghost-%COMP%], .fpk-stage-big   [_nghost-%COMP%], [_nghost-%COMP%]   .fpk-stage-small[_nghost-%COMP%], .fpk-stage-small   [_nghost-%COMP%]{border:none}[_nghost-%COMP%]     au3-button .button__text{font-size:30px}[_nghost-%COMP%]:after{content:"";position:absolute;bottom:-7px;left:0;width:100%;height:5px;background:linear-gradient(180deg,#000,transparent)}.tl--text-only[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{border-left:0}.tl--no-dividing-border[_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%], .tl--no-dividing-border[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{border-image:none;border-style:none}.title-line__content--left[_ngcontent-%COMP%]{display:inline-flex;flex-direction:row;align-self:center;margin-right:auto}.title-line__breadcrumbs[_ngcontent-%COMP%]{position:absolute;align-self:center;margin-right:2px}.title-line__content-wrapper--center[_ngcontent-%COMP%]{position:relative;flex:1 0 0;align-self:center;font-size:40px;height:119px;border-style:solid;border-image:linear-gradient(0deg,hsla(0,0%,100%,.7),transparent 80%) 1 2%;display:flex;flex-direction:row}.title-line__content-wrapper--center[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-1px;width:2px;height:2px;background:#000}.title-line__content--center[_ngcontent-%COMP%]{position:relative;flex:1 0 0}.title-line__loader[_ngcontent-%COMP%]{padding-top:12px;display:block;opacity:0;overflow:hidden}.title-line__loader--visible[_ngcontent-%COMP%]{opacity:1}.title-line__loader--display-none[_ngcontent-%COMP%]{display:none}.steering-wheel-left[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{margin-right:2px;border-width:0 0 0 1px}.steering-wheel-left[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after, .steering-wheel-left   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after{left:auto;right:-2px}.steering-wheel-left[_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%]{padding:0 0 0 30px}.steering-wheel-right[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{margin-left:2px;border-width:0 1px 0 0}.steering-wheel-right[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after, .steering-wheel-right   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after{left:-2px;right:auto}.steering-wheel-right[_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%]{padding:0 30px 0 0}.title-line__content--right[_ngcontent-%COMP%]{display:inline-flex;flex-direction:row;align-self:center;text-align:end}.content__title[_ngcontent-%COMP%]{position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:100%;height:100%;padding:12px 20px 0}.content__title--loader[_ngcontent-%COMP%]{padding-left:20px}.content__title--primary[_ngcontent-%COMP%]{color:var(--current-context);font-size:30px;width:100%}.content__title--primary[_ngcontent-%COMP%], .content__title--secondary[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.component-layout-arabic[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{direction:rtl}.component-layout-latin[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{direction:ltr}.secondary-title__wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;flex:1 1 0;overflow:hidden;max-width:100%;width:100%}.content__title--icon[_ngcontent-%COMP%]{margin:0 30px 0 10px}.content__title--separator[_ngcontent-%COMP%]{padding:0 22px;color:var(--current-context)}@media (max-width:1280px){.content__title[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.content__title--loader[_ngcontent-%COMP%]{padding-left:20px}.content__title--primary[_ngcontent-%COMP%]{font-size:30px;width:100%}.content__title--separator[_ngcontent-%COMP%]{display:none}}.title-line__content--text-input[_ngcontent-%COMP%]{position:relative;flex:1;display:flex;align-items:flex-end;min-width:0;direction:ltr;font-size:40px;height:calc(100% + 2px);padding:0 30px;border-style:solid;border-image:linear-gradient(0deg,hsla(0,0%,100%,.7),transparent 80%) 1 2%}.title-line__content--text-input[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;bottom:0;height:2px;width:100%;background-color:#000}.title-line__content--hidden[_ngcontent-%COMP%]{display:none}.steering-wheel-left[_nghost-%COMP%], .steering-wheel-left   [_nghost-%COMP%]{direction:ltr}.steering-wheel-left[_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%]{border-width:0 0 0 1px}.steering-wheel-right[_nghost-%COMP%], .steering-wheel-right   [_nghost-%COMP%]{direction:rtl}.steering-wheel-right[_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%]{border-width:0 1px 0 0}',
              ],
            ],
            data: {},
          }));
      function y(n) {
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
            n(l, 0, 0, t.Nb(l, 1).iconComponentHidden);
          },
        );
      }
      function P(n) {
        return t.ac(
          0,
          [
            (n()(),
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
      function C(n) {
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
          function (n, l) {
            n(l, 0, 0, l.component.hideRightPadding);
          },
        );
      }
      function T(n) {
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
              [[6, r.a], p.a, t.h, t.l, t.D, [2, d.a], [2, s.a], [2, g.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, e.primaryId, e.primaryIdEnumType),
              n(
                l,
                2,
                0,
                !e.hasPrimaryText ||
                  !(e.primaryIdEnumType || e.primaryDeveloperText),
              ),
              n(
                l,
                3,
                0,
                e.primaryDeveloperText,
                e.primaryId,
                e.primaryNonI18nText,
              ));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              t.Nb(l, 3).backgroundColor,
              t.Nb(l, 3).fixedNumberOfLines,
              t.Nb(l, 3).mayContainLatinCharsForArabic,
              t.Nb(l, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function M(n) {
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
                ["class", "content__title--icon"],
                ["ttDoNotToggle", ""],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              i.b,
              i.a,
            )),
            t.xb(
              1,
              16384,
              null,
              0,
              h.a,
              [],
              { ttDoNotToggleDynamicValue: [0, "ttDoNotToggleDynamicValue"] },
              null,
            ),
            t.xb(
              2,
              4243456,
              null,
              0,
              a.b,
              [o.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, !e.possibleIcon),
              n(l, 2, 0, e.icon, e.iconCategoryBreadcrumb));
          },
          function (n, l) {
            n(l, 0, 0, t.Nb(l, 2).iconComponentHidden);
          },
        );
      }
      function O(n) {
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
            (n()(),
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
              [[6, r.a], p.a, t.h, t.l, t.D, [2, d.a], [2, s.a], [2, g.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, M)),
            t.xb(
              7,
              16384,
              null,
              0,
              x.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "SecondaryText"),
              n(l, 3, 0, e.secondaryId, e.secondaryIdEnumType),
              n(
                l,
                4,
                0,
                !e.hasSecondaryText ||
                  !(e.secondaryIdEnumType || e.secondaryDeveloperText),
              ),
              n(
                l,
                5,
                0,
                e.secondaryDeveloperText,
                e.secondaryId,
                e.secondaryNonI18nText,
              ),
              n(l, 7, 0, !!e.icon));
          },
          function (n, l) {
            n(
              l,
              2,
              0,
              t.Nb(l, 5).backgroundColor,
              t.Nb(l, 5).fixedNumberOfLines,
              t.Nb(l, 5).mayContainLatinCharsForArabic,
              t.Nb(l, 5).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function w(n) {
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
            t.xb(
              1,
              49152,
              null,
              0,
              m.a,
              [],
              { animated: [0, "animated"] },
              null,
            ),
          ],
          function (n, l) {
            n(l, 1, 0, l.component.loaderActive);
          },
          function (n, l) {
            var e = l.component;
            n(l, 0, 0, !e.textToolHasLoader, e.loaderActive);
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
            (n()(),
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
            (n()(), t.hb(16777216, null, null, 1, null, T)),
            t.xb(
              4,
              16384,
              null,
              0,
              x.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, O)),
            t.xb(
              6,
              16384,
              null,
              0,
              x.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, w)),
            t.xb(
              8,
              16384,
              null,
              0,
              x.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 4, 0, e.hasPrimaryText),
              n(l, 6, 0, e.hasSecondaryText),
              n(l, 8, 0, e.hasLoader));
          },
          function (n, l) {
            n(l, 2, 0, l.component.hasLoader);
          },
        );
      }
      function N(n) {
        return t.ac(
          0,
          [
            (n()(),
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
      function S(n) {
        return t.ac(
          0,
          [t.Mb(null, 3), (n()(), t.hb(0, null, null, 0))],
          null,
          null,
        );
      }
      function L(n) {
        return t.ac(
          0,
          [t.Mb(null, 4), (n()(), t.hb(0, null, null, 0))],
          null,
          null,
        );
      }
      function I(n) {
        return t.ac(
          2,
          [
            (n()(), t.hb(16777216, null, null, 1, null, y)),
            t.xb(
              1,
              16384,
              null,
              0,
              x.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
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
            (n()(), t.hb(16777216, null, null, 2, null, P)),
            t.xb(
              5,
              540672,
              null,
              0,
              x.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            t.Pb(131072, x.b, [t.h]),
            (n()(), t.hb(16777216, null, null, 1, null, C)),
            t.xb(
              8,
              16384,
              null,
              0,
              x.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), t.hb(0, [["center", 2]], null, 0, null, v)),
            (n()(),
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
            (n()(), t.hb(16777216, null, null, 2, null, N)),
            t.xb(
              13,
              540672,
              null,
              0,
              x.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            t.Pb(131072, x.b, [t.h]),
            (n()(), t.hb(0, [["done", 2]], null, 0, null, S)),
            (n()(), t.hb(0, [["edit", 2]], null, 0, null, L)),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, e.showBreadcrumbsIcon),
              n(
                l,
                5,
                0,
                t.Yb(l, 5, 0, t.Nb(l, 6).transform(e.editButtonLeft$))
                  ? t.Nb(l, 16)
                  : t.Nb(l, 15),
              ),
              n(l, 8, 0, e.hasTextInput, t.Nb(l, 9)),
              n(
                l,
                13,
                0,
                t.Yb(l, 13, 0, t.Nb(l, 14).transform(e.editButtonLeft$))
                  ? t.Nb(l, 15)
                  : t.Nb(l, 16),
              ));
          },
          null,
        );
      }
    },
    Z2XD: function (n, l, e) {
      "use strict";
      (e.d(l, "a", function () {
        return i;
      }),
        e.d(l, "b", function () {
          return a;
        }));
      var t = e("kZht"),
        i =
          (e("y9xZ"),
          e("yNay"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;padding:16px 48px 25px}.steering-wheel-left[_nghost-%COMP%], .steering-wheel-left   [_nghost-%COMP%]{padding-right:56px}.steering-wheel-right[_nghost-%COMP%], .steering-wheel-right   [_nghost-%COMP%]{padding-left:56px}",
              ],
            ],
            data: {},
          }));
      function a(n) {
        return t.ac(0, [t.Mb(null, 0)], null, null);
      }
    },
    ZXHi: function (n, l, e) {
      "use strict";
      (e.d(l, "a", function () {
        return o;
      }),
        e.d(l, "b", function () {
          return u;
        }));
      var t = e("kZht"),
        i = e("EyLa"),
        a = e("4nnk"),
        o =
          (e("IRNg"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%}.init-view__message[_ngcontent-%COMP%]{height:230px;max-width:100%;font-size:40px;line-height:66px;color:#fff;text-align:center}.init-view__progress[_ngcontent-%COMP%]{width:500px;max-width:60%;height:20px;margin:0 auto}",
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
            (n()(),
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
            (n()(),
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
              i.b,
              i.a,
            )),
            t.xb(
              4,
              49152,
              null,
              0,
              a.a,
              [t.l, t.h],
              { current: [0, "current"] },
              null,
            ),
          ],
          function (n, l) {
            n(l, 4, 0, l.component.current);
          },
          function (n, l) {
            n(l, 3, 0, t.Nb(l, 4).shouldRotateForSxm, t.Nb(l, 4).infinite);
          },
        );
      }
    },
    lQOV: function (n, l, e) {
      "use strict";
      (e.r(l),
        e.d(l, "HelpModuleNgFactory", function () {
          return Ml;
        }));
      var t = e("kZht"),
        i = e("Yi6/");
      class a {
        constructor() {
          this.context = i.s.Home;
        }
      }
      var o = e("QQZH"),
        u = e("kuMc"),
        r = e("/mCV"),
        c = e("OhEM"),
        s = e("H+9d"),
        b = e("8lto"),
        p = e("P1io"),
        d = (function (n) {
          return (
            (n.BordBook = "BordBook"),
            (n.FirstTimeWizard = "FirstTimeWizard"),
            (n.ScreenLayerShow = "ScreenLayerShow"),
            (n.CustomerSupport = "CustomerSupport"),
            n
          );
        })({});
      class g {
        constructor(n, l, e, t) {
          ((this.routingService = n),
            (this.entrypointService = l),
            (this.onlineRoutingService = e),
            (this.popupManager = t),
            (this.defaultTilesAll = [
              {
                id: d.FirstTimeWizard,
                icon: "E28D_ftu_wizard.webp",
                title: "Einrichtungs-\nassistent",
                route: null,
                disabled: !1,
              },
              {
                id: d.ScreenLayerShow,
                icon: "E688_tool_tip.webp",
                title: "Bedientipps",
                route: c.a.Main.children.ScreenLayerShow,
                disabled: !1,
              },
            ]),
            (this.defaultTilesLambo = this.defaultTilesAll.filter(
              (n) => n.id !== d.ScreenLayerShow,
            )),
            (this.defaultTiles = i.gd.isLamborghini
              ? this.defaultTilesLambo
              : this.defaultTilesAll),
            (this.tiles = this.defaultTiles.slice()),
            (this.tileNameTextEnum = d),
            (this.ftwLockingParam = [
              { lockingKey: { type: i.Eb.POPUP, category: i.zb.FTW } },
              { lockingKey: { type: i.Eb.SCREEN, category: i.Ab.COMPLEX } },
            ]),
            (this.destroyed$$ = new o.a(1)));
        }
        ngOnInit() {
          this.entrypointService
            .entryPointsForTag$(s.b.SUPPORT, s.b.BOARDBOOK)
            .pipe(Object(u.a)(this.destroyed$$))
            .subscribe((n) => {
              this.tiles = this.defaultTiles
                .slice()
                .concat(
                  n.map((n) => ({
                    id: n.id,
                    icon: n.bigIcon,
                    title: n.title,
                    route: null,
                    disabled: !!n.disableReason,
                    disableReason: n.disableReason,
                  })),
                );
            });
        }
        ngOnDestroy() {
          (this.destroyed$$.next(), this.destroyed$$.complete());
        }
        tileClick(n) {
          switch (n.id) {
            case d.BordBook:
              break;
            case d.FirstTimeWizard:
              this.popupManager.request(i.Ob.POPUP_FTW);
              break;
            case d.ScreenLayerShow:
              this.routingService.goTo(c.a.Main.children.ScreenLayerShow);
              break;
            case d.CustomerSupport:
              break;
            default:
              this.onlineRoutingService.goToIncludeStateWebApp(p.q, n.id);
          }
        }
      }
      var h = e("Wd0v");
      class x {}
      class f {}
      var m = e("C9Ky"),
        _ = e("89Z2"),
        y = e("kqft"),
        P = e("+sw+"),
        C = e("FfND"),
        T = e("bou3"),
        M = e("yNay"),
        O = e("1VvW"),
        w = e("CDcS"),
        v = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:100%;width:100%;color:#fff}",
            ],
          ],
          data: {},
        });
      function N(n) {
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
              function (n, l, e) {
                var i = !0;
                return (
                  "component:@screenChange.start" === l &&
                    (i = !1 !== t.Nb(n, 1).animationStarted(e) && i),
                  "component:@screenChange.done" === l &&
                    (i = !1 !== t.Nb(n, 1).animationDone(e) && i),
                  i
                );
              },
              _.b,
              _.a,
            )),
            t.xb(
              1,
              245760,
              null,
              1,
              y.a,
              [[2, P.a], C.a, t.h, T.a, M.a],
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
              O.o,
              [O.b, t.P, t.j, [8, null], t.h],
              null,
              null,
            ),
            t.xb(5, 212992, [[1, 4]], 0, w.a, [O.o, t.h, t.z, M.a], null, null),
          ],
          function (n, l) {
            (n(l, 1, 0), n(l, 4, 0), n(l, 5, 0));
          },
          function (n, l) {
            (n(l, 0, 0, t.Nb(l, 1).screenState, !0),
              n(l, 3, 0, t.Nb(l, 5).hideAdjacentSibling));
          },
        );
      }
      function S(n) {
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
              "au3-help",
              [],
              [[8, "className", 0]],
              null,
              null,
              N,
              v,
            )),
            t.xb(1, 49152, null, 0, a, [], null, null),
          ],
          null,
          function (n, l) {
            n(l, 0, 0, t.Nb(l, 1).context);
          },
        );
      }
      var L = t.ub("au3-help", a, S, {}, {}, []),
        I = e("Obt0"),
        k = e("fu7d"),
        E = e("bMuc"),
        D = e("ZIdM"),
        z = e("3bpu"),
        B = e("OtM5"),
        A = e("9ZFG"),
        F = e("6zvu"),
        R = e("VcEz"),
        $ = e("y9xZ"),
        H = e("BMrr"),
        W = e("IEns"),
        Z = e("z6QT"),
        V = e("flsk"),
        K = e("FQEI"),
        U = e("O82V"),
        j = e("Eln4"),
        G = e("evAh"),
        Y = e("3qdr"),
        X = e("E7cc"),
        q = e("oeT7"),
        J = e("CpzC"),
        Q = e("0Bsn"),
        nn = e("5GjX"),
        ln = e("mYyF"),
        en = e("v98a"),
        tn = e("aOG8"),
        an = e("Krzs"),
        on = e("6480"),
        un = e("t7cT"),
        rn = e("An66"),
        cn = e("Z2XD"),
        sn = e("VUTu"),
        bn = e("nK9R"),
        pn = e("qzuC"),
        dn = e("8yWk"),
        gn = e("Xast"),
        hn = e("jgeG"),
        xn = e("nSAP"),
        fn = e("sg2e"),
        mn = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}",
            ],
          ],
          data: {},
        });
      function _n(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-tile",
              [],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (n, l, e) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t =
                      !1 !==
                        n.component.tileClick(n.parent.context.$implicit) && t),
                  t
                );
              },
              I.b,
              I.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              k.a,
              [t.l, t.D, T.a, M.a, [3, k.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(2, 147456, null, 0, E.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              D.a,
              [E.a, [2, z.a], [2, k.a], M.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              B.a,
              [A.a, t.h, M.a, [3, B.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              F.a,
              [
                M.a,
                R.b,
                D.a,
                [2, z.a],
                [2, k.a],
                [2, B.a],
                [2, $.a],
                [2, P.a],
                t.z,
                H.a,
                t.l,
                [2, W.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Z.a, Z.a, [[3, Z.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              V.a,
              [
                t.l,
                K.a,
                t.h,
                Z.a,
                [2, U.a],
                [2, z.b],
                [2, z.a],
                [2, j.a],
                [2, G.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              49152,
              null,
              0,
              Y.a,
              [],
              { developerText: [0, "developerText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              9,
              671744,
              null,
              0,
              X.a,
              [B.a, q.i, [2, q.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              J.a,
              [
                [2, F.a],
                [2, B.a],
                [2, Q.a],
                [2, V.a],
                [2, nn.b],
                t.l,
                ln.a,
                en.b,
              ],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              tn.a,
              [[2, V.a], [2, F.a], [2, R.b], an.a],
              null,
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(
              l,
              1,
              0,
              null == l.parent.context.$implicit
                ? null
                : l.parent.context.$implicit.id,
              e.tileNameTextEnum,
            ),
              n(
                l,
                4,
                0,
                null == l.parent.context.$implicit
                  ? null
                  : l.parent.context.$implicit.disabled,
                null == l.parent.context.$implicit
                  ? null
                  : l.parent.context.$implicit.disableReason,
              ),
              n(l, 5, 0),
              n(l, 7, 0),
              n(
                l,
                8,
                0,
                null == l.parent.context.$implicit
                  ? null
                  : l.parent.context.$implicit.title,
                null == l.parent.context.$implicit
                  ? null
                  : l.parent.context.$implicit.icon,
              ),
              n(l, 9, 0, e.ftwLockingParam));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              t.Nb(l, 4).combinedDisabled,
              t.Nb(l, 4).useBrighterIcon,
              t.Nb(l, 7).markerClassEnabled,
            );
          },
        );
      }
      function yn(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-tile",
              [],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (n, l, e) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t =
                      !1 !==
                        n.component.tileClick(n.parent.context.$implicit) && t),
                  t
                );
              },
              I.b,
              I.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              B.a,
              [A.a, t.h, M.a, [3, B.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(2, 147456, null, 0, E.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              k.a,
              [t.l, t.D, T.a, M.a, [3, k.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              D.a,
              [E.a, [2, z.a], [2, k.a], M.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              F.a,
              [
                M.a,
                R.b,
                D.a,
                [2, z.a],
                [2, k.a],
                [2, B.a],
                [2, $.a],
                [2, P.a],
                t.z,
                H.a,
                t.l,
                [2, W.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              on.a,
              [C.a, q.i, B.a, F.a, on.b, un.a],
              {
                routeInfo: [0, "routeInfo"],
                preventGoToRoute: [1, "preventGoToRoute"],
              },
              null,
            ),
            t.Sb(131584, null, Z.a, Z.a, [[3, Z.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              V.a,
              [
                t.l,
                K.a,
                t.h,
                Z.a,
                [2, U.a],
                [2, z.b],
                [2, z.a],
                [2, j.a],
                [2, G.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              49152,
              null,
              0,
              Y.a,
              [],
              { developerText: [0, "developerText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              J.a,
              [
                [2, F.a],
                [2, B.a],
                [2, Q.a],
                [2, V.a],
                [2, nn.b],
                t.l,
                ln.a,
                en.b,
              ],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              tn.a,
              [[2, V.a], [2, F.a], [2, R.b], an.a],
              null,
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(
              l,
              1,
              0,
              null == l.parent.context.$implicit
                ? null
                : l.parent.context.$implicit.disabled,
              null == l.parent.context.$implicit
                ? null
                : l.parent.context.$implicit.disableReason,
            ),
              n(
                l,
                3,
                0,
                null == l.parent.context.$implicit
                  ? null
                  : l.parent.context.$implicit.id,
                e.tileNameTextEnum,
              ),
              n(l, 5, 0),
              n(
                l,
                6,
                0,
                null == l.parent.context.$implicit
                  ? null
                  : l.parent.context.$implicit.route,
                !0,
              ),
              n(l, 8, 0),
              n(
                l,
                9,
                0,
                null == l.parent.context.$implicit
                  ? null
                  : l.parent.context.$implicit.title,
                null == l.parent.context.$implicit
                  ? null
                  : l.parent.context.$implicit.icon,
              ));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              t.Nb(l, 1).combinedDisabled,
              t.Nb(l, 1).useBrighterIcon,
              t.Nb(l, 8).markerClassEnabled,
            );
          },
        );
      }
      function Pn(n) {
        return t.ac(
          0,
          [
            (n()(), t.hb(16777216, [[1, 2]], null, 1, null, _n)),
            t.xb(
              1,
              16384,
              null,
              0,
              rn.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(),
            t.hb(
              0,
              [
                [1, 2],
                ["NonFtwTile", 2],
              ],
              null,
              0,
              null,
              yn,
            )),
          ],
          function (n, l) {
            n(
              l,
              1,
              0,
              l.context.$implicit &&
                l.context.$implicit.id ===
                  l.component.tileNameTextEnum.FirstTimeWizard,
              t.Nb(l, 2),
            );
          },
          null,
        );
      }
      function Cn(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:FTU_HELP_MENU_2"],
              ],
              null,
              null,
              null,
              cn.b,
              cn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              k.a,
              [t.l, t.D, T.a, M.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, $.a, [M.a], { id: [0, "id"] }, null),
            (n()(),
            t.yb(
              3,
              0,
              null,
              0,
              2,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              sn.b,
              sn.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              k.a,
              [t.l, t.D, T.a, M.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              bn.a,
              [pn.a, dn.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                hasSecondaryText: [1, "hasSecondaryText"],
              },
              null,
            ),
            (n()(),
            t.yb(
              6,
              0,
              null,
              0,
              6,
              "au3-tile-grid",
              [["id", ""]],
              null,
              null,
              null,
              gn.b,
              gn.a,
            )),
            t.xb(
              7,
              212992,
              null,
              0,
              k.a,
              [t.l, t.D, T.a, M.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.Sb(131584, null, Z.a, Z.a, [[3, Z.a]]),
            t.Sb(512, null, Q.a, Q.a, [z.a]),
            t.xb(
              10,
              1032192,
              null,
              1,
              hn.a,
              [t.s, t.h, xn.a, Z.a, Q.a, z.a, M.a],
              { columns: [0, "columns"], tiles: [1, "tiles"] },
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (n()(), t.hb(0, [[1, 2]], null, 0, null, Pn)),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "Screen:FTU_HELP_MENU_2"),
              n(l, 2, 0, "Screen:FTU_HELP_MENU_2"),
              n(l, 4, 0, ""),
              n(l, 5, 0, "Hilfe", !1),
              n(l, 7, 0, ""),
              n(l, 10, 0, 4, e.tiles));
          },
          function (n, l) {
            n(
              l,
              3,
              0,
              t.Nb(l, 5).hideLeftBorder,
              t.Nb(l, 5).hideDividingBorders,
            );
          },
        );
      }
      function Tn(n) {
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
              "au3-help-main",
              [],
              null,
              null,
              null,
              Cn,
              mn,
            )),
            t.xb(1, 245760, null, 0, g, [r.a, s.a, b.a, fn.a], null, null),
          ],
          function (n, l) {
            n(l, 1, 0);
          },
          null,
        );
      }
      var Mn = t.ub("au3-help-main", g, Tn, {}, {}, []),
        On = e("8WOv"),
        wn = e("1pak"),
        vn = e("P+G5"),
        Nn = e("ijxY"),
        Sn = e("zPMi"),
        Ln = e("N2Hj"),
        In = e("UbWD"),
        kn = e("2rvh"),
        En = e("odRV"),
        Dn = e("Udyh"),
        zn = e("I3ve"),
        Bn = e("qiAR"),
        An = e("007S"),
        Fn = e("oxWk"),
        Rn = e("Tr//"),
        $n = e("4XZL"),
        Hn = e("URLa"),
        Wn = e("snOA"),
        Zn = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;align-items:stretch}.list__item[_ngcontent-%COMP%]{font-size:40px;height:120px;padding:0 20px}",
            ],
          ],
          data: {},
        });
      function Vn(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              47,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:FTU_SHOW_GET_STARTED_MAIN"],
              ],
              null,
              null,
              null,
              cn.b,
              cn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              k.a,
              [t.l, t.D, T.a, M.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, $.a, [M.a], { id: [0, "id"] }, null),
            (n()(),
            t.yb(
              3,
              0,
              null,
              0,
              14,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              sn.b,
              sn.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              k.a,
              [t.l, t.D, T.a, M.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              bn.a,
              [pn.a, dn.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (n()(),
            t.yb(
              6,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
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
              function (n, l, e) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== n.component.helpRoutingService.goBack() && t),
                  t
                );
              },
              On.b,
              On.a,
            )),
            t.xb(7, 147456, null, 0, E.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              k.a,
              [t.l, t.D, T.a, M.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              D.a,
              [E.a, [2, z.a], [2, k.a], M.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              F.a,
              [
                M.a,
                R.b,
                D.a,
                [2, z.a],
                [2, k.a],
                [2, B.a],
                [2, $.a],
                [2, P.a],
                t.z,
                H.a,
                t.l,
                [2, W.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              wn.a,
              [M.a, vn.a, t.l, [2, F.a], [2, B.a]],
              null,
              null,
            ),
            t.xb(12, 16384, null, 0, Nn.a, [], null, null),
            t.Sb(131584, null, Z.a, Z.a, [[3, Z.a]]),
            t.xb(
              14,
              4407296,
              null,
              0,
              V.a,
              [
                t.l,
                K.a,
                t.h,
                Z.a,
                [2, U.a],
                [2, z.b],
                [2, z.a],
                [2, j.a],
                [2, G.a],
              ],
              null,
              null,
            ),
            t.xb(
              15,
              49152,
              null,
              0,
              Sn.a,
              [[2, B.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              J.a,
              [
                [2, F.a],
                [2, B.a],
                [2, Q.a],
                [2, V.a],
                [2, nn.b],
                t.l,
                ln.a,
                en.b,
              ],
              null,
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              tn.a,
              [[2, V.a], [2, F.a], [2, R.b], an.a],
              null,
              null,
            ),
            (n()(),
            t.yb(
              18,
              0,
              null,
              0,
              29,
              "au3-list",
              [["id", ""]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Ln.b,
              Ln.a,
            )),
            t.Sb(6144, null, In.a, null, [kn.a]),
            t.xb(
              20,
              212992,
              null,
              0,
              k.a,
              [t.l, t.D, T.a, M.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(21, 16384, null, 0, En.a, [t.l], null, null),
            t.xb(
              22,
              12828672,
              null,
              1,
              kn.a,
              [
                [2, Dn.a],
                [2, zn.a],
                [8, null],
                [2, k.a],
                [2, Bn.a],
                [2, An.a],
                [2, R.b],
                q.i,
                t.z,
                t.h,
                M.a,
                Fn.a,
                Rn.a,
                [2, K.a],
                z.a,
                [2, q.a],
              ],
              { showCursor: [0, "showCursor"] },
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (n()(),
            t.yb(
              24,
              0,
              null,
              0,
              11,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["hasSubtitle", "true"],
                ["icon", "E3F9_ftu_beginner.webp"],
                ["id", "RouteToBasicScreenLayerShowMenuItem"],
                ["subtitleDeveloperText", "Erste Schritte"],
                ["titleDeveloperText", "Basisinformationen"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (n, l, e) {
                var t = !0;
                return (
                  "mib3Tap" === l && (t = !1 !== n.component.goToBasic() && t),
                  t
                );
              },
              $n.b,
              $n.a,
            )),
            t.xb(
              25,
              212992,
              null,
              0,
              k.a,
              [t.l, t.D, T.a, M.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(26, 147456, null, 0, E.a, [t.l, t.z], null, null),
            t.xb(
              27,
              147456,
              null,
              0,
              D.a,
              [E.a, [2, z.a], [2, k.a], M.a],
              null,
              null,
            ),
            t.xb(
              28,
              147456,
              null,
              0,
              B.a,
              [A.a, t.h, M.a, [3, B.a]],
              null,
              null,
            ),
            t.xb(
              29,
              212992,
              null,
              0,
              F.a,
              [
                M.a,
                R.b,
                D.a,
                [2, z.a],
                [2, k.a],
                [2, B.a],
                [2, $.a],
                [2, P.a],
                t.z,
                H.a,
                t.l,
                [2, W.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Z.a, Z.a, [[3, Z.a]]),
            t.xb(
              31,
              4407296,
              null,
              0,
              V.a,
              [
                t.l,
                K.a,
                t.h,
                Z.a,
                [2, U.a],
                [2, z.b],
                [2, z.a],
                [2, j.a],
                [2, G.a],
              ],
              null,
              null,
            ),
            t.xb(
              32,
              114688,
              null,
              0,
              Hn.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                subtitleDeveloperText: [2, "subtitleDeveloperText"],
                hasSubtitle: [3, "hasSubtitle"],
                type: [4, "type"],
              },
              null,
            ),
            t.xb(
              33,
              671744,
              null,
              0,
              X.a,
              [B.a, q.i, [2, q.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            t.xb(
              34,
              147456,
              null,
              0,
              J.a,
              [
                [2, F.a],
                [2, B.a],
                [2, Q.a],
                [2, V.a],
                [2, nn.b],
                t.l,
                ln.a,
                en.b,
              ],
              null,
              null,
            ),
            t.xb(
              35,
              147456,
              null,
              0,
              tn.a,
              [[2, V.a], [2, F.a], [2, R.b], an.a],
              null,
              null,
            ),
            (n()(),
            t.yb(
              36,
              0,
              null,
              0,
              11,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["hasSubtitle", "true"],
                ["icon", "E3F8_ftu_expert.webp"],
                ["id", "RouteToExpertScreenLayerShowMenuItem"],
                ["subtitleDeveloperText", "Besondere Funktionen"],
                ["titleDeveloperText", "Experteninformationen"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (n, l, e) {
                var t = !0;
                return (
                  "mib3Tap" === l && (t = !1 !== n.component.goToExpert() && t),
                  t
                );
              },
              $n.b,
              $n.a,
            )),
            t.xb(
              37,
              212992,
              null,
              0,
              k.a,
              [t.l, t.D, T.a, M.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(38, 147456, null, 0, E.a, [t.l, t.z], null, null),
            t.xb(
              39,
              147456,
              null,
              0,
              D.a,
              [E.a, [2, z.a], [2, k.a], M.a],
              null,
              null,
            ),
            t.xb(
              40,
              147456,
              null,
              0,
              B.a,
              [A.a, t.h, M.a, [3, B.a]],
              null,
              null,
            ),
            t.xb(
              41,
              212992,
              null,
              0,
              F.a,
              [
                M.a,
                R.b,
                D.a,
                [2, z.a],
                [2, k.a],
                [2, B.a],
                [2, $.a],
                [2, P.a],
                t.z,
                H.a,
                t.l,
                [2, W.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Z.a, Z.a, [[3, Z.a]]),
            t.xb(
              43,
              4407296,
              null,
              0,
              V.a,
              [
                t.l,
                K.a,
                t.h,
                Z.a,
                [2, U.a],
                [2, z.b],
                [2, z.a],
                [2, j.a],
                [2, G.a],
              ],
              null,
              null,
            ),
            t.xb(
              44,
              114688,
              null,
              0,
              Hn.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                subtitleDeveloperText: [2, "subtitleDeveloperText"],
                hasSubtitle: [3, "hasSubtitle"],
                type: [4, "type"],
              },
              null,
            ),
            t.xb(
              45,
              671744,
              null,
              0,
              X.a,
              [B.a, q.i, [2, q.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            t.xb(
              46,
              147456,
              null,
              0,
              J.a,
              [
                [2, F.a],
                [2, B.a],
                [2, Q.a],
                [2, V.a],
                [2, nn.b],
                t.l,
                ln.a,
                en.b,
              ],
              null,
              null,
            ),
            t.xb(
              47,
              147456,
              null,
              0,
              tn.a,
              [[2, V.a], [2, F.a], [2, R.b], an.a],
              null,
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "Screen:FTU_SHOW_GET_STARTED_MAIN"),
              n(l, 2, 0, "Screen:FTU_SHOW_GET_STARTED_MAIN"),
              n(l, 4, 0, ""),
              n(l, 5, 0, "Bedientipps", "Kategorien"),
              n(l, 8, 0, "BackButton"),
              n(l, 10, 0),
              n(l, 14, 0),
              n(l, 15, 0, !1, "E163_Backbutton.webp"),
              n(l, 20, 0, ""),
              n(l, 22, 0, !1),
              n(l, 25, 0, "RouteToBasicScreenLayerShowMenuItem"),
              n(l, 29, 0),
              n(l, 31, 0),
              n(
                l,
                32,
                0,
                "E3F9_ftu_beginner.webp",
                "Basisinformationen",
                "Erste Schritte",
                "true",
                e.ListItemType.ITEM_TYPE_NO_END_ICON,
              ),
              n(l, 33, 0, e.screenLayerShowLockingParam),
              n(l, 37, 0, "RouteToExpertScreenLayerShowMenuItem"),
              n(l, 41, 0),
              n(l, 43, 0),
              n(
                l,
                44,
                0,
                "E3F8_ftu_expert.webp",
                "Experteninformationen",
                "Besondere Funktionen",
                "true",
                e.ListItemType.ITEM_TYPE_NO_END_ICON,
              ),
              n(l, 45, 0, e.screenLayerShowLockingParam));
          },
          function (n, l) {
            (n(
              l,
              3,
              0,
              t.Nb(l, 5).hideLeftBorder,
              t.Nb(l, 5).hideDividingBorders,
            ),
              n(
                l,
                6,
                0,
                t.Nb(l, 14).markerClassEnabled,
                t.Nb(l, 15).useItemPlaceholder,
              ),
              n(l, 18, 0, t.Nb(l, 22).showLineNumbers),
              n(
                l,
                24,
                0,
                t.Nb(l, 28).combinedDisabled,
                t.Nb(l, 28).useBrighterIcon,
                t.Nb(l, 31).markerClassEnabled,
              ),
              n(
                l,
                36,
                0,
                t.Nb(l, 40).combinedDisabled,
                t.Nb(l, 40).useBrighterIcon,
                t.Nb(l, 43).markerClassEnabled,
              ));
          },
        );
      }
      function Kn(n) {
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
              "au3-screen-layer-show",
              [],
              null,
              null,
              null,
              Vn,
              Zn,
            )),
            t.xb(1, 49152, null, 0, h.e, [r.a, fn.a, Wn.a, M.a], null, null),
          ],
          null,
          null,
        );
      }
      var Un = t.ub("au3-screen-layer-show", h.e, Kn, {}, {}, []),
        jn = e("ZXHi"),
        Gn = e("IRNg"),
        Yn = e("8TlW"),
        Xn = e("Xo58"),
        qn = e("m3Ja"),
        Jn = e("r+e+"),
        Qn = e("bmFL"),
        nl = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}",
            ],
          ],
          data: {},
        });
      function ll(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              7,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:HELP_INIT_MAIN"],
              ],
              null,
              null,
              null,
              cn.b,
              cn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              k.a,
              [t.l, t.D, T.a, M.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, $.a, [M.a], { id: [0, "id"] }, null),
            (n()(),
            t.yb(
              3,
              0,
              null,
              0,
              4,
              "au3-init-view",
              [],
              null,
              null,
              null,
              jn.b,
              jn.a,
            )),
            t.xb(4, 49152, null, 0, Gn.a, [], null, null),
            (n()(),
            t.yb(
              5,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [["id", "InitializeText"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Yn.b,
              Yn.a,
            )),
            t.xb(
              6,
              212992,
              null,
              0,
              k.a,
              [t.l, t.D, T.a, M.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              7,
              245760,
              null,
              0,
              Xn.a,
              [[6, k.a], qn.a, t.h, t.l, t.D, [2, Jn.a], [2, Nn.a], [2, Qn.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, l) {
            (n(l, 1, 0, "Screen:HELP_INIT_MAIN"),
              n(l, 2, 0, "Screen:HELP_INIT_MAIN"),
              n(l, 6, 0, "InitializeText"),
              n(l, 7, 0, "Wird initialisiert", "InitializeText", 4));
          },
          function (n, l) {
            n(
              l,
              5,
              0,
              t.Nb(l, 7).backgroundColor,
              t.Nb(l, 7).fixedNumberOfLines,
              t.Nb(l, 7).mayContainLatinCharsForArabic,
              t.Nb(l, 7).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function el(n) {
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
              "au3-help-init",
              [],
              null,
              null,
              null,
              ll,
              nl,
            )),
            t.xb(1, 49152, null, 0, x, [], null, null),
          ],
          null,
          null,
        );
      }
      var tl = t.ub("au3-help-init", x, el, {}, {}, []),
        il = e("aDqW"),
        al = e("/W5r"),
        ol = e("+Qv1"),
        ul = e("XtoR"),
        rl = e("jTHl"),
        cl = e("zL3T"),
        sl = e("+epw"),
        bl = e("zMPs"),
        pl = e("6Yk8"),
        dl = e("u6+O"),
        gl = e("CIQC"),
        hl = e("REmV"),
        xl = e("Y3N+"),
        fl = e("MJxn"),
        ml = e("eIOF"),
        _l = e("t+4g"),
        yl = e("myjn"),
        Pl = e("fOZ7");
      const Cl = () =>
        Promise.all([
          e.e(1),
          e.e(2),
          e.e(3),
          e.e(4),
          e.e(8),
          e.e(7),
          e.e(10),
          e.e(14),
          e.e(26),
          e.e(56),
          e.e(94),
        ])
          .then(e.bind(null, "g+oZ"))
          .then((n) => n.WebappsModuleNgFactory);
      class Tl {}
      var Ml = t.vb(f, [], function (n) {
        return t.Kb([
          t.Lb(512, t.j, t.X, [[8, [m.a, L, Mn, Un, tl]], [3, t.j], t.x]),
          t.Lb(4608, rn.m, rn.l, [t.u]),
          t.Lb(4608, il.h, il.g, []),
          t.Lb(4608, il.d, il.f, []),
          t.Lb(4608, il.j, il.e, []),
          t.Lb(4608, il.c, il.b, []),
          t.Lb(4608, il.k, il.k, [
            il.l,
            il.h,
            il.d,
            il.j,
            il.c,
            il.m,
            il.o,
            il.n,
            il.a,
          ]),
          t.Lb(4608, al.b, al.b, [ol.e, [2, al.a]]),
          t.Lb(4608, ul.b, ul.b, [ol.e, [2, ul.a]]),
          t.Lb(4608, rl.b, rl.b, [ol.e, [2, rl.a]]),
          t.Lb(4608, cl.b, cl.b, [ol.e, [2, cl.a]]),
          t.Lb(1073742336, rn.c, rn.c, []),
          t.Lb(1073742336, il.i, il.i, []),
          t.Lb(1073742336, sl.a, sl.a, []),
          t.Lb(1073742336, bl.a, bl.a, []),
          t.Lb(1073742336, pl.a, pl.a, []),
          t.Lb(1073742336, dl.a, dl.a, []),
          t.Lb(1073742336, gl.a, gl.a, []),
          t.Lb(1073742336, hl.a, hl.a, []),
          t.Lb(1073742336, xl.a, xl.a, []),
          t.Lb(1073742336, fl.a, fl.a, []),
          t.Lb(1073742336, ml.a, ml.a, []),
          t.Lb(1073742336, _l.a, _l.a, []),
          t.Lb(1073742336, yl.a, yl.a, []),
          t.Lb(1073742336, Pl.a, Pl.a, []),
          t.Lb(1073742336, O.n, O.n, [
            [2, O.s],
            [2, O.m],
          ]),
          t.Lb(1073742336, Tl, Tl, []),
          t.Lb(1073742336, f, f, []),
          t.Lb(256, il.o, void 0, []),
          t.Lb(256, il.m, void 0, []),
          t.Lb(256, il.n, void 0, []),
          t.Lb(256, il.a, void 0, []),
          t.Lb(
            1024,
            O.k,
            function () {
              return [
                [
                  {
                    path: "",
                    component: a,
                    children: [
                      {
                        path: "main",
                        children: [
                          { path: "", component: g, pathMatch: "full" },
                          { path: "screen-layer-show", component: h.e },
                        ],
                      },
                      { path: "init", component: x },
                      { path: "webapp", loadChildren: Cl },
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
