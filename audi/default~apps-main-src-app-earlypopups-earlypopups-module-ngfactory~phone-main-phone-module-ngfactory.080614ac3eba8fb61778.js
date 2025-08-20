(window.webpackJsonp = window.webpackJsonp || []).push([
  [37],
  {
    "7r1m": function (l, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return r;
      });
      var a = e("Yi6/"),
        i = e("FkRV"),
        t = e("Zbi+"),
        o = e("YzIb"),
        u =
          (e("948h"),
          (function (l) {
            return (
              (l.SOS = "SOS"),
              (l.CONFERENCE = "CONFERENCE"),
              (l.MAILBOX = "MAILBOX"),
              (l.NAME = "NAME"),
              (l.NUMBER = "NUMBER"),
              (l.UNKNOWN = "UNKNOWN"),
              (l.CONCIERGE = "CONCIERGE"),
              (l.CONFIDENTIAL = "CONFIDENTIAL"),
              l
            );
          })({}));
      class r {
        constructor(l, n) {
          ((this.sosCallKoreaChinaService = l),
            (this.callTextEnum = o.c),
            (this.iconCategoryEnum = a.Z),
            (this.callStateEnum = t.d),
            (this.sosCallNameEnum = o.e),
            (this.scaleMode = a.ab.Contain),
            (this.uiCallStateEnum = i.b),
            (this.phoneNumberTypeEnum = t.k),
            (this.callInfoType = u),
            (this.lockingContext = a.Bb.PHONE),
            (this.confidentialModeReplacement = o.d),
            (this.logger = n.getLogger("phone.CallInfoComponent")));
        }
        get call() {
          return this._call;
        }
        set call(l) {
          (this.logger.info("call: updated to:", l),
            (this._call = l),
            (this.currentType = this.isConfidential
              ? u.CONFIDENTIAL
              : this.isSos
                ? u.SOS
                : this.isConference
                  ? u.CONFERENCE
                  : this.isMailbox
                    ? u.MAILBOX
                    : this.isConcierge
                      ? u.CONCIERGE
                      : this.callerName
                        ? u.NAME
                        : this.callerNumber
                          ? u.NUMBER
                          : u.UNKNOWN));
        }
        get isSos() {
          return this.call && this.call.isSOS;
        }
        get isConference() {
          return this.call && this.call.isConference;
        }
        get callerName() {
          return (this.call && this.call.callerName) || "";
        }
        get callerNumber() {
          return (this.call && this.call.number) || "";
        }
        get isUnknown() {
          return this.currentType === u.UNKNOWN;
        }
        get sosCallerText() {
          return this.sosCallKoreaChinaService.sosCallNumberToName(
            this.call && this.call.number ? this.call.number : "",
          );
        }
        get sosCallName() {
          return this.sosCallKoreaChinaService.getEmergencyNumberName(
            this.call && this.call.number,
          );
        }
        get isMailbox() {
          return (
            !(!this.call || this.call.callType !== t.b.MAILBOX) ||
            !(
              !this.call ||
              !this.call.phoneDevice ||
              this.call.number !== this.call.phoneDevice.mailboxNumber
            )
          );
        }
        get isConcierge() {
          return this.call && this.call.callType === t.b.CONCIERGE;
        }
        get isConfidential() {
          return !!this.call && this.call.isConfidential;
        }
      }
    },
    XOjC: function (l, n, e) {
      "use strict";
      (e.d(n, "a", function () {
        return N;
      }),
        e.d(n, "b", function () {
          return R;
        }));
      var a = e("kZht"),
        i = e("8TlW"),
        t = e("fu7d"),
        o = e("bou3"),
        u = e("yNay"),
        r = e("bmFL"),
        c = e("Xo58"),
        s = e("m3Ja"),
        b = e("r+e+"),
        f = e("ijxY"),
        d = e("XK+j"),
        C = e("An66"),
        h = e("HVUF"),
        g = e("B3Zb"),
        p = e("xaqU"),
        m = e("DElP"),
        x = e("oeT7"),
        N =
          (e("7r1m"),
          e("948h"),
          a.wb({
            encapsulation: 0,
            styles: [
              [
                '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{flex-direction:row}.info[_ngcontent-%COMP%], [_nghost-%COMP%]{position:relative;display:flex}.info[_ngcontent-%COMP%]{flex:1;font-size:30px;margin-top:50px;height:250px;justify-content:space-between;flex-direction:column;overflow:hidden}.component-layout-latin[_nghost-%COMP%]   .info[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .info[_ngcontent-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .info__duration[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .info__duration[_ngcontent-%COMP%]{text-align:right}.component-layout-latin[_nghost-%COMP%]   .info__hd-voice[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .info__hd-voice[_ngcontent-%COMP%]{right:0}.component-layout-arabic[_nghost-%COMP%]   .info[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .info[_ngcontent-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .info__caller-number[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .info__caller-number[_ngcontent-%COMP%]{direction:ltr;text-align:right}.component-layout-arabic[_nghost-%COMP%]   .info__duration[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .info__duration[_ngcontent-%COMP%]{text-align:left}.component-layout-arabic[_nghost-%COMP%]   .info__hd-voice[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .info__hd-voice[_ngcontent-%COMP%]{left:0}.info__main[_ngcontent-%COMP%]{display:flex;align-items:baseline;justify-content:space-between}.info__main-text[_ngcontent-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:40px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;min-width:0}.info__duration[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:30px;flex:0 0 132px;text-align:right;min-width:0}.info__type[_ngcontent-%COMP%]{margin-top:30px;font-size:23px}.info__sub[_ngcontent-%COMP%]{margin-top:6px;margin-bottom:auto}.info__state[_ngcontent-%COMP%], .info__sub[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular)}.info__hd-voice[_ngcontent-%COMP%]{position:absolute;bottom:0}.info__hd-voice--small-screen[_ngcontent-%COMP%], .picture[_ngcontent-%COMP%]{position:relative}.picture[_ngcontent-%COMP%]{width:275px;margin-top:25px;margin-left:30px;pointer-events:none;transform:perspective(1500px) rotate3d(0,-1,0,15deg);transform-style:preserve-3d;transform-origin:right}.picture__icon[_ngcontent-%COMP%]{position:absolute;top:0;width:275px;height:275px}',
              ],
            ],
            data: {},
          }));
      function _(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              4,
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
              i.b,
              i.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, o.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            a.xb(
              2,
              16384,
              null,
              0,
              r.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            a.Qb(3, { name: 0 }),
            a.xb(
              4,
              245760,
              null,
              0,
              c.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, f.a], [2, r.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            l(n, 1, 0, e.sosCallerText, e.sosCallNameEnum);
            var a = l(n, 3, 0, e.sosCallName);
            (l(n, 2, 0, a), l(n, 4, 0, e.sosCallerText, e.sosCallerText, 1));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 4).backgroundColor,
              a.Nb(n, 4).fixedNumberOfLines,
              a.Nb(n, 4).mayContainLatinCharsForArabic,
              a.Nb(n, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function O(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "Conference"]],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, o.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              c.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, f.a], [2, r.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "Conference"),
              l(n, 2, 0, e.callTextEnum.ConferenceCall, "Conference", 1));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 2).backgroundColor,
              a.Nb(n, 2).fixedNumberOfLines,
              a.Nb(n, 2).mayContainLatinCharsForArabic,
              a.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function y(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "CallerMailbox"]],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, o.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              c.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, f.a], [2, r.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "CallerMailbox"),
              l(n, 2, 0, e.callInfoType.MAILBOX, "CallerMailbox", 1));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 2).backgroundColor,
              a.Nb(n, 2).fixedNumberOfLines,
              a.Nb(n, 2).mayContainLatinCharsForArabic,
              a.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function P(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["id", "CallerText"],
                ["testId", "CallerText"],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, o.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 16384, null, 0, f.a, [], null, null),
            a.xb(
              3,
              245760,
              null,
              0,
              c.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, f.a], [2, r.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            a.xb(
              4,
              16384,
              null,
              0,
              d.a,
              [a.l, a.D],
              { testId: [0, "testId"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "CallerText"),
              l(n, 3, 0, "CallerText", e.callerName),
              l(n, 4, 0, "CallerText"));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 3).backgroundColor,
              a.Nb(n, 3).fixedNumberOfLines,
              a.Nb(n, 3).mayContainLatinCharsForArabic,
              a.Nb(n, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function E(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["class", "info__caller-number"],
                ["id", "CallerText2"],
                ["testId", "CallerText"],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, o.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 16384, null, 0, f.a, [], null, null),
            a.xb(
              3,
              245760,
              null,
              0,
              c.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, f.a], [2, r.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            a.xb(
              4,
              16384,
              null,
              0,
              d.a,
              [a.l, a.D],
              { testId: [0, "testId"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "CallerText2"),
              l(n, 3, 0, "CallerText2", e.callerNumber),
              l(n, 4, 0, "CallerText"));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 3).backgroundColor,
              a.Nb(n, 3).fixedNumberOfLines,
              a.Nb(n, 3).mayContainLatinCharsForArabic,
              a.Nb(n, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function I(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "Concierge"]],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, o.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              c.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, f.a], [2, r.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "Concierge"),
              l(n, 2, 0, e.callTextEnum.ConciergeCall, "Concierge", 1));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 2).backgroundColor,
              a.Nb(n, 2).fixedNumberOfLines,
              a.Nb(n, 2).mayContainLatinCharsForArabic,
              a.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function M(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "CallerConfidential"]],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, o.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              c.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, f.a], [2, r.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "CallerConfidential"),
              l(
                n,
                2,
                0,
                e.confidentialModeReplacement,
                "CallerConfidential",
                1,
              ));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 2).backgroundColor,
              a.Nb(n, 2).fixedNumberOfLines,
              a.Nb(n, 2).mayContainLatinCharsForArabic,
              a.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function T(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "CallerUnknown"]],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, o.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              c.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, f.a], [2, r.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "CallerUnknown"),
              l(n, 2, 0, e.callTextEnum.CallerUnknown, "CallerUnknown", 1));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 2).backgroundColor,
              a.Nb(n, 2).fixedNumberOfLines,
              a.Nb(n, 2).mayContainLatinCharsForArabic,
              a.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function L(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["id", "DurationInfo"],
                ["testId", "PHONE_ACTIVECALL_DURATION"],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, o.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 16384, null, 0, f.a, [], null, null),
            a.xb(
              3,
              245760,
              null,
              0,
              c.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, f.a], [2, r.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            a.xb(
              4,
              16384,
              null,
              0,
              d.a,
              [a.l, a.D],
              { testId: [0, "testId"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "DurationInfo"),
              l(
                n,
                3,
                0,
                "DurationInfo",
                null == e.call ? null : e.call.durationString,
              ),
              l(n, 4, 0, "PHONE_ACTIVECALL_DURATION"));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 3).backgroundColor,
              a.Nb(n, 3).fixedNumberOfLines,
              a.Nb(n, 3).mayContainLatinCharsForArabic,
              a.Nb(n, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function A(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [["testId", "PHONE_ACTIVECALL_TYPE"]],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, o.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              c.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, f.a], [2, r.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            a.Rb(3, 1),
            a.xb(
              4,
              16384,
              null,
              0,
              d.a,
              [a.l, a.D],
              { testId: [0, "testId"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            l(
              n,
              1,
              0,
              null == e.call ? null : e.call.numberType,
              e.phoneNumberTypeEnum,
            );
            var i = a.Yb(
              n,
              2,
              0,
              l(
                n,
                3,
                0,
                a.Nb(n.parent, 0),
                null == e.call ? null : e.call.numberType,
              ),
            );
            (l(n, 2, 0, i, null == e.call ? null : e.call.numberType, 1),
              l(n, 4, 0, "PHONE_ACTIVECALL_TYPE"));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 2).backgroundColor,
              a.Nb(n, 2).fixedNumberOfLines,
              a.Nb(n, 2).mayContainLatinCharsForArabic,
              a.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function v(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["class", "info__caller-number"],
                ["id", "PHONE_ACTIVECALL_NUMBER"],
                ["testId", "PHONE_ACTIVECALL_NUMBER"],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, o.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 16384, null, 0, f.a, [], null, null),
            a.xb(
              3,
              245760,
              null,
              0,
              c.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, f.a], [2, r.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            a.xb(
              4,
              16384,
              null,
              0,
              d.a,
              [a.l, a.D],
              { testId: [0, "testId"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "PHONE_ACTIVECALL_NUMBER"),
              l(n, 3, 0, "PHONE_ACTIVECALL_NUMBER", e.callerNumber),
              l(n, 4, 0, "PHONE_ACTIVECALL_NUMBER"));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 3).backgroundColor,
              a.Nb(n, 3).fixedNumberOfLines,
              a.Nb(n, 3).mayContainLatinCharsForArabic,
              a.Nb(n, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function S(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "info__caller-number"],
                ["id", "PHONE_ACTIVECALL_NUMBER_CONFIDENTIAL"],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, o.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 16384, null, 0, f.a, [], null, null),
            a.xb(
              3,
              245760,
              null,
              0,
              c.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, f.a], [2, r.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "PHONE_ACTIVECALL_NUMBER_CONFIDENTIAL"),
              l(
                n,
                3,
                0,
                e.confidentialModeReplacement,
                "PHONE_ACTIVECALL_NUMBER_CONFIDENTIAL",
              ));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 3).backgroundColor,
              a.Nb(n, 3).fixedNumberOfLines,
              a.Nb(n, 3).mayContainLatinCharsForArabic,
              a.Nb(n, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function D(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
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
            (l()(), a.hb(16777216, null, null, 1, null, v)),
            a.xb(
              2,
              16384,
              null,
              0,
              C.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (l()(), a.hb(0, [["numberConfidential", 2]], null, 0, null, S)),
          ],
          function (l, n) {
            var e = n.component;
            l(
              n,
              2,
              0,
              e.currentType !== e.callInfoType.CONFIDENTIAL,
              a.Nb(n, 3),
            );
          },
          null,
        );
      }
      function k(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
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
              i.b,
              i.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, o.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              c.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, f.a], [2, r.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(
              n,
              1,
              0,
              null == e.call ? null : e.call.uiCallState,
              e.uiCallStateEnum,
            ),
              l(
                n,
                2,
                0,
                null == e.call ? null : e.call.uiCallState,
                null == e.call ? null : e.call.uiCallState,
                1,
              ));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n, 2).backgroundColor,
              a.Nb(n, 2).fixedNumberOfLines,
              a.Nb(n, 2).mayContainLatinCharsForArabic,
              a.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function w(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "info__hd-voice"],
                ["fileName", "E95A_phone_hd_voice.webp"],
                ["id", "HDVoice"],
              ],
              [
                [2, "info__hd-voice--small-screen", null],
                [2, "icon-component--hidden", null],
              ],
              null,
              null,
              h.b,
              h.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, o.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              4243456,
              null,
              0,
              g.b,
              [u.a, a.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "HDVoice"),
              l(n, 2, 0, "E95A_phone_hd_voice.webp", e.iconCategoryEnum.List));
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              a.Nb(n.parent, 31).offsetWidth <= 450,
              a.Nb(n, 2).iconComponentHidden,
            );
          },
        );
      }
      function R(l) {
        return a.ac(
          2,
          [
            a.Pb(0, p.a, []),
            (l()(),
            a.yb(
              1,
              0,
              null,
              null,
              34,
              "div",
              [["class", "info"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            a.yb(
              2,
              0,
              null,
              null,
              22,
              "div",
              [["class", "info__main"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            a.yb(
              3,
              0,
              null,
              null,
              18,
              "div",
              [["class", "info__main-text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            a.yb(
              4,
              0,
              null,
              null,
              17,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            a.xb(
              5,
              16384,
              null,
              0,
              C.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (l()(), a.hb(16777216, null, null, 1, null, _)),
            a.xb(
              7,
              278528,
              null,
              0,
              C.p,
              [a.P, a.L, C.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), a.hb(16777216, null, null, 1, null, O)),
            a.xb(
              9,
              278528,
              null,
              0,
              C.p,
              [a.P, a.L, C.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), a.hb(16777216, null, null, 1, null, y)),
            a.xb(
              11,
              278528,
              null,
              0,
              C.p,
              [a.P, a.L, C.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), a.hb(16777216, null, null, 1, null, P)),
            a.xb(
              13,
              278528,
              null,
              0,
              C.p,
              [a.P, a.L, C.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), a.hb(16777216, null, null, 1, null, E)),
            a.xb(
              15,
              278528,
              null,
              0,
              C.p,
              [a.P, a.L, C.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), a.hb(16777216, null, null, 1, null, I)),
            a.xb(
              17,
              278528,
              null,
              0,
              C.p,
              [a.P, a.L, C.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), a.hb(16777216, null, null, 1, null, M)),
            a.xb(
              19,
              278528,
              null,
              0,
              C.p,
              [a.P, a.L, C.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), a.hb(16777216, null, null, 1, null, T)),
            a.xb(21, 16384, null, 0, C.q, [a.P, a.L, C.o], null, null),
            (l()(),
            a.yb(
              22,
              0,
              null,
              null,
              2,
              "div",
              [["class", "info__duration"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(), a.hb(16777216, null, null, 1, null, L)),
            a.xb(
              24,
              16384,
              null,
              0,
              C.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(),
            a.yb(
              25,
              0,
              null,
              null,
              2,
              "div",
              [["class", "info__type"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(), a.hb(16777216, null, null, 1, null, A)),
            a.xb(
              27,
              16384,
              null,
              0,
              C.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(),
            a.yb(
              28,
              0,
              null,
              null,
              2,
              "div",
              [["class", "info__sub"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(), a.hb(16777216, null, null, 1, null, D)),
            a.xb(
              30,
              16384,
              null,
              0,
              C.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(),
            a.yb(
              31,
              0,
              [["infoStateContainer", 1]],
              null,
              2,
              "div",
              [["class", "info__state"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(), a.hb(16777216, null, null, 1, null, k)),
            a.xb(
              33,
              16384,
              null,
              0,
              C.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), a.hb(16777216, null, null, 1, null, w)),
            a.xb(
              35,
              16384,
              null,
              0,
              C.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(),
            a.yb(
              36,
              0,
              null,
              null,
              5,
              "div",
              [["class", "picture"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            a.yb(
              37,
              0,
              null,
              null,
              4,
              "au3-icon",
              [
                ["au3ImageLockingCategory", ""],
                ["class", "picture__icon"],
                ["id", "PHONE_ACTIVECALL_PICTURE"],
                ["testId", "PHONE_ACTIVECALL_PICTURE"],
              ],
              [
                [2, "icon-component--hidden", null],
                [2, "lock-state-hidden", null],
                [2, "lock-state-faded", null],
              ],
              null,
              null,
              h.b,
              h.a,
            )),
            a.xb(
              38,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, o.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              39,
              16384,
              null,
              0,
              d.a,
              [a.l, a.D],
              { testId: [0, "testId"] },
              null,
            ),
            a.xb(
              40,
              4243456,
              null,
              0,
              g.b,
              [u.a, a.z],
              { fileName: [0, "fileName"], scaleMode: [1, "scaleMode"] },
              null,
            ),
            a.xb(
              41,
              212992,
              null,
              0,
              m.a,
              [x.i, [2, x.a], a.h],
              { context: [0, "context"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 5, 0, e.currentType),
              l(n, 7, 0, e.callInfoType.SOS),
              l(n, 9, 0, e.callInfoType.CONFERENCE),
              l(n, 11, 0, e.callInfoType.MAILBOX),
              l(n, 13, 0, e.callInfoType.NAME),
              l(n, 15, 0, e.callInfoType.NUMBER),
              l(n, 17, 0, e.callInfoType.CONCIERGE),
              l(n, 19, 0, e.callInfoType.CONFIDENTIAL),
              l(
                n,
                24,
                0,
                !(
                  (null != e.call && e.call.isSOS) ||
                  ((null == e.call ? null : e.call.callState) !==
                    e.callStateEnum.ACTIVE &&
                    (null == e.call ? null : e.call.callState) !==
                      e.callStateEnum.HOLD)
                ),
              ),
              l(
                n,
                27,
                0,
                (null == e.call ? null : e.call.hasName) &&
                  !e.isSos &&
                  !e.isConference,
              ),
              l(
                n,
                30,
                0,
                e.currentType !==
                  (null == e.callInfoType ? null : e.callInfoType.NUMBER) &&
                  !e.isUnknown &&
                  !e.isConference,
              ),
              l(
                n,
                33,
                0,
                (null == e.call ? null : e.call.callState) !==
                  e.callStateEnum.RINGINGINCOMING,
              ),
              l(n, 35, 0, null == e.call ? null : e.call.isHdVoice),
              l(n, 38, 0, "PHONE_ACTIVECALL_PICTURE"),
              l(n, 39, 0, "PHONE_ACTIVECALL_PICTURE"),
              l(
                n,
                40,
                0,
                null == e.call ? null : e.call.pictureUri,
                e.scaleMode,
              ),
              l(n, 41, 0, e.lockingContext));
          },
          function (l, n) {
            l(
              n,
              37,
              0,
              a.Nb(n, 40).iconComponentHidden,
              a.Nb(n, 41).hide,
              a.Nb(n, 41).fade,
            );
          },
        );
      }
    },
    oWpa: function (l, n, e) {
      "use strict";
      (e.d(n, "a", function () {
        return g;
      }),
        e.d(n, "b", function () {
          return m;
        }));
      var a = e("kZht"),
        i = e("HVUF"),
        t = e("B3Zb"),
        o = e("yNay"),
        u = e("8TlW"),
        r = e("fu7d"),
        c = e("bou3"),
        s = e("bmFL"),
        b = e("Xo58"),
        f = e("m3Ja"),
        d = e("r+e+"),
        C = e("ijxY"),
        h = e("An66"),
        g =
          (e("yegR"),
          a.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;display:block}.container[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.container--column[_ngcontent-%COMP%]{flex-direction:column;align-items:center;justify-content:center}.lines[_ngcontent-%COMP%]{flex:1 1 0;line-height:65px;max-width:100%}.fpk-stage-big[_nghost-%COMP%]   .lines[_ngcontent-%COMP%], .fpk-stage-big   [_nghost-%COMP%]   .lines[_ngcontent-%COMP%], .fpk-stage-small[_nghost-%COMP%]   .lines[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .lines[_ngcontent-%COMP%]{line-height:59px}.lines--column[_ngcontent-%COMP%]{flex:0 1 auto}.icon[_ngcontent-%COMP%]{margin-left:30px}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{flex-direction:row}.component-layout-latin[_nghost-%COMP%]   .line[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .line[_ngcontent-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{margin-left:30px;margin-right:0}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{flex-direction:row-reverse}.component-layout-arabic[_nghost-%COMP%]   .line[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .line[_ngcontent-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{margin-left:0;margin-right:30px}",
              ],
            ],
            data: {},
          }));
      function p(l) {
        return a.ac(
          0,
          [
            (l()(),
            a.yb(
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
              i.b,
              i.a,
            )),
            a.xb(
              1,
              4243456,
              null,
              0,
              t.b,
              [o.a, a.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            l(n, 1, 0, e.iconFilename, e.iconCategory);
          },
          function (l, n) {
            l(n, 0, 0, a.Nb(n, 1).iconComponentHidden);
          },
        );
      }
      function m(l) {
        return a.ac(
          2,
          [
            a.Tb(402653184, 1, { container: 0 }),
            (l()(),
            a.yb(
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
            (l()(),
            a.yb(
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
            a.xb(
              3,
              212992,
              null,
              0,
              r.a,
              [a.l, a.D, c.a, o.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              4,
              16384,
              null,
              0,
              s.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            a.xb(
              5,
              245760,
              null,
              0,
              b.a,
              [[6, r.a], f.a, a.h, a.l, a.D, [2, d.a], [2, C.a], [2, s.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            (l()(), a.hb(16777216, null, null, 1, null, p)),
            a.xb(
              7,
              16384,
              null,
              0,
              h.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 3, 0, "StatustextLines"),
              l(n, 4, 0, e.ttInterpolateParams),
              l(
                n,
                5,
                0,
                e.developerText,
                "StatustextLines",
                e.maxNumberOfLines,
                e.nonI18nText,
              ),
              l(n, 7, 0, e.iconFilename && e.iconCategory));
          },
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, e.iconBelowText),
              l(
                n,
                2,
                0,
                e.iconBelowText,
                a.Nb(n, 5).backgroundColor,
                a.Nb(n, 5).fixedNumberOfLines,
                a.Nb(n, 5).mayContainLatinCharsForArabic,
                a.Nb(n, 5).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
    },
  },
]);
