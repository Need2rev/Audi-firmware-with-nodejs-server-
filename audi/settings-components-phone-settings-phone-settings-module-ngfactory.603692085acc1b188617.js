(window.webpackJsonp = window.webpackJsonp || []).push([
  [108],
  {
    ihOk: function (n, l, e) {
      "use strict";
      (e.d(l, "a", function () {
        return m;
      }),
        e.d(l, "b", function () {
          return y;
        }));
      var i = e("kZht"),
        u = e("An66"),
        t = e("fu7d"),
        a = e("bou3"),
        o = e("yNay"),
        r = e("8TlW"),
        s = e("Xo58"),
        c = e("m3Ja"),
        f = e("r+e+"),
        d = e("ijxY"),
        b = e("bmFL"),
        m =
          (e("ZMtB"),
          e("fzcM"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{height:100%;width:100%;max-height:100%;max-width:100%;min-height:0;display:flex;justify-content:center;flex-direction:column}.disclaimer-description[_ngcontent-%COMP%]{width:100%;font-size:40px;text-align:center}',
              ],
            ],
            data: {},
          }));
      function p(n) {
        return i.ac(
          0,
          [
            (n()(),
            i.yb(
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
            i.xb(
              1,
              540672,
              null,
              0,
              u.r,
              [i.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (n()(), i.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(l, 1, 0, l.component.contentTemplate);
          },
          null,
        );
      }
      function h(n) {
        return i.ac(
          0,
          [
            (n()(),
            i.yb(
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
            i.Mb(null, 0),
            (n()(), i.hb(16777216, null, null, 1, null, p)),
            i.xb(
              3,
              16384,
              null,
              0,
              u.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), i.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(l, 3, 0, l.component.hasContentTemplate);
          },
          null,
        );
      }
      function x(n) {
        return i.ac(
          0,
          [
            (n()(),
            i.yb(
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
            i.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [i.l, i.D, a.a, o.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (n()(),
            i.yb(
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
            i.xb(
              3,
              212992,
              null,
              0,
              t.a,
              [i.l, i.D, a.a, o.a, [3, t.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              4,
              245760,
              null,
              0,
              s.a,
              [[6, t.a], c.a, i.h, i.l, i.D, [2, f.a], [2, d.a], [2, b.a]],
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
            var e = l.component;
            (n(l, 1, 0, "Disclaimer"),
              n(
                l,
                3,
                0,
                e.restrictionReason && e.disabledTextEnum[e.restrictionReason]
                  ? e.restrictionReason
                  : e.disabledReasonEnum.ERROR,
                e.disabledTextEnum,
              ),
              n(
                l,
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
          function (n, l) {
            n(
              l,
              2,
              0,
              i.Nb(l, 4).backgroundColor,
              i.Nb(l, 4).fixedNumberOfLines,
              i.Nb(l, 4).mayContainLatinCharsForArabic,
              i.Nb(l, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function y(n) {
        return i.ac(
          2,
          [
            (n()(), i.hb(16777216, null, null, 1, null, h)),
            i.xb(
              1,
              16384,
              null,
              0,
              u.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), i.hb(0, [["disclaimerText", 2]], null, 0, null, x)),
          ],
          function (n, l) {
            n(l, 1, 0, !l.component.active, i.Nb(l, 2));
          },
          null,
        );
      }
    },
  },
]);
