(window.webpackJsonp = window.webpackJsonp || []).push([
  [81],
  {
    A66t: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var i = n("QQZH"),
        a = n("J+dc"),
        l = n("kuMc");
      (n("Yi6/"), n("YEFf"), n("Fok3"));
      class o {
        constructor(t, e, n) {
          ((this.phoneService = t),
            (this.fpkPhoneService = e),
            (this.selectedIndex = 0),
            (this.destroyed$$ = new i.a(1)),
            (this.logger = n.getLogger("fpk.FpkCallstackViewComponent")));
        }
        keyDown() {
          this.phoneService.calls.incomingCall ||
            this.phoneService.calls.focusCall ||
            this.phoneService.groupedRecentCalls$
              .pipe(Object(a.a)(1), Object(l.a)(this.destroyed$$))
              .subscribe((t) => {
                this.dial(t[this.selectedIndex]);
              });
        }
        dial(t) {
          t.phoneNumber && t.phoneDevice
            ? (this.logger.debug("Dialing...", t),
              this.fpkPhoneService
                .dialNumber(t.phoneNumber, t.phoneDevice.uri)
                .then(() => this.fpkPhoneService.trySwitchingToPhoneContext()))
            : this.logger.error(
                "Could not dial due to invalid phone number or phone device of call object",
              );
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
      }
    },
    AOb9: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return f;
      }),
        n.d(e, "b", function () {
          return y;
        }));
      var i = n("Yi6/"),
        a = n("P1io"),
        l = n("daJa"),
        o = n("t3cO"),
        s = n("8j5Y"),
        r = n("J+dc"),
        u = n("vAPC"),
        c = n("TLy2"),
        p = n("Ohay"),
        b = n("YtkY"),
        h = n("ROBh"),
        d = n("kZht"),
        g = n("1VvW"),
        m = n("yNay");
      const f = {
        Nps: { path: "nps", mainScreen: !0 },
        Loading: { path: "loading" },
        Error: { path: "error" },
      };
      let y = (() => {
        class t extends i.i {
          constructor(t, e, n) {
            (super(
              e,
              n.getLogger("asterix-media.AsterixMediaRoutingService"),
              a.j,
              f,
            ),
              (this.asterixMediaState = t),
              this.subscribeToLoadingState());
          }
          handleGoToFailure(t) {
            const e = Object(h.a)(l.a.Loading).pipe(
              Object(s.a)((t) =>
                this.logger.warn(
                  "handleGoToFailure: asterixMediaState$ did not emit after 1s - fallback to state",
                  t,
                ),
              ),
            );
            return this.asterixMediaState.asterixMediaState$
              .pipe(
                Object(r.a)(1),
                Object(u.a)(1e3, e),
                Object(c.a)((e) => {
                  const n = this.routeFromState(e);
                  return n === t
                    ? (this.logger.warn(
                        'handleGoToFailure: Requested redirection to same route as intended - resolve to "false" to prevent an infinite loop',
                        Object(i.kd)(n),
                      ),
                      Object(h.a)(!1))
                    : (this.logger.info(
                        "handleGoToFailure: redirect to route",
                        Object(i.kd)(n),
                      ),
                      this.goTo(n));
                }),
              )
              .toPromise();
          }
          subscribeToLoadingState() {
            this.asterixMediaState.asterixMediaState$
              .pipe(
                Object(p.a)(),
                Object(b.a)((t) => this.routeFromState(t)),
              )
              .subscribe((t) => {
                (this.logger.info(
                  `subscribeToLoadingState: go to route "${Object(i.kd)(t)}" due to updated media state`,
                ),
                  this.tryGoTo(t));
              });
          }
          routeFromState(t) {
            switch (t) {
              case l.a.Player:
                return f.Nps;
              case l.a.Error:
                return f.Error;
              case l.a.Loading:
              default:
                return f.Loading;
            }
          }
        }
        return (
          (t.ɵprov = d.bc({
            factory: function () {
              return new t(d.cc(o.a), d.cc(g.m), d.cc(m.a));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    Es8C: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return mt;
      }),
        n.d(e, "b", function () {
          return xt;
        }));
      var i = n("kZht"),
        a = n("8TlW"),
        l = n("fu7d"),
        o = n("bou3"),
        s = n("yNay"),
        r = n("Xo58"),
        u = n("m3Ja"),
        c = n("r+e+"),
        p = n("ijxY"),
        b = n("bmFL"),
        h = n("YI95"),
        d = n("xaqU"),
        g = n("HVUF"),
        m = n("B3Zb"),
        f = n("An66"),
        y = n("VKfg"),
        S = n("EkEa"),
        v = n("oPv+"),
        x = n("Yi6/"),
        O = n("Zbi+"),
        C = n("YtkY"),
        P = n("wgY5"),
        _ = (function (t) {
          return (
            (t.MAILBOX = "Mailbox"),
            (t.UNKNOWN = "Unknown"),
            (t.CALLER = "Caller"),
            t
          );
        })({});
      class k {
        constructor(t) {
          ((this.generalSettingsService = t),
            (this.numberOfCalls = 1),
            (this.i18nPhoneNumberIDType = O.k),
            (this.iconCategory = x.Z.List),
            (this.callstackItemTypeEnum = _),
            (this.icons = {
              [O.l.DIALED]: "E050_phone_dialed_number.webp",
              [O.l.MISSED]: "E051_phone_missed_call.webp",
              [O.l.RECEIVED]: "E052_phone_received_call.webp",
            }));
        }
        get callType() {
          return this.isMailboxNumber
            ? _.MAILBOX
            : this.mainText
              ? _.CALLER
              : _.UNKNOWN;
        }
        get mainText() {
          let t;
          return (
            (t =
              this.call && this.call.name
                ? this.call.name +
                  (this.numberOfCalls > 1 ? ` (${this.numberOfCalls})` : "")
                : this.call && this.call.phoneNumber
                  ? this.call.phoneNumber +
                    (this.numberOfCalls > 1 ? ` (${this.numberOfCalls})` : "")
                  : ""),
            t
          );
        }
        get isMailboxNumber() {
          return (
            !!(
              this.call &&
              this.call.phoneDevice &&
              this.call.phoneDevice.mailboxNumber
            ) && this.call.phoneNumber === this.call.phoneDevice.mailboxNumber
          );
        }
        get subText() {
          return this.call &&
            this.call.name &&
            this.call.phoneNumber &&
            !this.isMailboxNumber
            ? this.call.phoneNumber
            : "";
        }
        get icon() {
          const t =
            this.call &&
            this.call.entries &&
            this.call.entries[0] &&
            this.call.entries[0].type;
          return t ? this.icons[t] : "";
        }
        get timestamp() {
          return this.call &&
            this.call.entries &&
            this.call.entries[0] &&
            this.call.entries[0].timestamp
            ? P.utc(this.call.entries[0].timestamp)
            : null;
        }
        ngOnInit() {
          this.dateFormat$ = this.generalSettingsService.dateFormat$.pipe(
            Object(C.a)((t) => t.activeDateFormatForMoment),
          );
        }
      }
      var A = i.wb({
        encapsulation: 0,
        styles: [
          [
            '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;padding:3px 15px 5px;margin:3px 0;height:93px}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .date[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .date[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .time[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .time[_ngcontent-%COMP%]{margin-left:22px}.component-layout-latin[_nghost-%COMP%]   .icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{margin-right:15px}.component-layout-latin[_nghost-%COMP%]   .second-row[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .second-row[_ngcontent-%COMP%]{padding-left:55px}.component-layout-latin[_nghost-%COMP%]   .calltype[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .calltype[_ngcontent-%COMP%]{margin-right:15px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .date[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .date[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .time[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .time[_ngcontent-%COMP%]{direction:ltr;margin-right:22px}.component-layout-arabic[_nghost-%COMP%]   .icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{margin-left:15px;transform:scaleX(-1)}.component-layout-arabic[_nghost-%COMP%]   .second-row[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .second-row[_ngcontent-%COMP%]{padding-right:55px}.component-layout-arabic[_nghost-%COMP%]   .calltype[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .calltype[_ngcontent-%COMP%]{margin-left:15px}.fpk-stage-small[_nghost-%COMP%]   .date[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .date[_ngcontent-%COMP%], .fpk-stage-small[_nghost-%COMP%]   .time[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .time[_ngcontent-%COMP%]{display:none}.fpk-stage-small[_nghost-%COMP%]   .main[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .main[_ngcontent-%COMP%]{max-width:377px}.fpk-stage-big[_nghost-%COMP%]   .date[_ngcontent-%COMP%], .fpk-stage-big   [_nghost-%COMP%]   .date[_ngcontent-%COMP%]{display:block;max-width:185px}.fpk-stage-big[_nghost-%COMP%]   .time[_ngcontent-%COMP%], .fpk-stage-big   [_nghost-%COMP%]   .time[_ngcontent-%COMP%]{display:block}.fpk-stage-big[_nghost-%COMP%]   .main[_ngcontent-%COMP%], .fpk-stage-big   [_nghost-%COMP%]   .main[_ngcontent-%COMP%]{width:500px}.first-row[_ngcontent-%COMP%]{height:47px;margin-bottom:4px}.first-row[_ngcontent-%COMP%], .second-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:baseline}.second-row[_ngcontent-%COMP%]{font-size:28px;height:34px}.icon[_ngcontent-%COMP%]{align-self:center}.main[_ngcontent-%COMP%]{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:38px}.date[_ngcontent-%COMP%]{font-size:28px}.calltype[_ngcontent-%COMP%], .sub[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular)}.sub[_ngcontent-%COMP%]{flex:1;white-space:nowrap}.time[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular)}',
          ],
        ],
        data: {},
      });
      function N(t) {
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
                ["class", "main"],
                ["id", "CallerMailbox"],
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
              l.a,
              [i.l, i.D, o.a, s.a, [3, l.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              245760,
              null,
              0,
              r.a,
              [[6, l.a], u.a, i.h, i.l, i.D, [2, c.a], [2, p.a], [2, b.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "CallerMailbox"),
              t(e, 2, 0, "Mailbox", "CallerMailbox", 1));
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
      function T(t) {
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
                ["class", "main"],
                ["id", "Caller"],
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
              l.a,
              [i.l, i.D, o.a, s.a, [3, l.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(2, 16384, null, 0, p.a, [], null, null),
            i.xb(
              3,
              245760,
              null,
              0,
              r.a,
              [[6, l.a], u.a, i.h, i.l, i.D, [2, c.a], [2, p.a], [2, b.a]],
              {
                id: [0, "id"],
                fixedNumberOfLines: [1, "fixedNumberOfLines"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "Caller"), t(e, 3, 0, "Caller", 1, n.mainText));
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
              "au3-i18n-label",
              [
                ["class", "main"],
                ["id", "CallerUnknown"],
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
              l.a,
              [i.l, i.D, o.a, s.a, [3, l.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              245760,
              null,
              0,
              r.a,
              [[6, l.a], u.a, i.h, i.l, i.D, [2, c.a], [2, p.a], [2, b.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "CallerUnknown"),
              t(e, 2, 0, "Unbekannt", "CallerUnknown", 1));
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
      function D(t) {
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
              [["class", "calltype"]],
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
              l.a,
              [i.l, i.D, o.a, s.a, [3, l.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              2,
              245760,
              null,
              0,
              r.a,
              [[6, l.a], u.a, i.h, i.l, i.D, [2, c.a], [2, p.a], [2, b.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            i.Rb(3, 1),
          ],
          function (t, e) {
            var n = e.component;
            t(
              e,
              1,
              0,
              null == n.call ? null : n.call.phoneNumberType,
              n.i18nPhoneNumberIDType,
            );
            var a = i.Yb(
              e,
              2,
              0,
              t(
                e,
                3,
                0,
                i.Nb(e.parent, 1),
                null == n.call ? null : n.call.phoneNumberType,
              ),
            );
            t(e, 2, 0, a, null == n.call ? null : n.call.phoneNumberType, 1);
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
      function $(t) {
        return i.ac(
          2,
          [
            i.Pb(0, h.a, []),
            i.Pb(0, d.a, []),
            (t()(),
            i.yb(
              2,
              0,
              null,
              null,
              17,
              "div",
              [["class", "first-row"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              3,
              0,
              null,
              null,
              2,
              "span",
              [["class", "icon"]],
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
              1,
              "au3-icon",
              [],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              g.b,
              g.a,
            )),
            i.xb(
              5,
              4243456,
              null,
              0,
              m.b,
              [s.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (t()(),
            i.yb(
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
            i.xb(
              7,
              16384,
              null,
              0,
              f.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, N)),
            i.xb(
              9,
              278528,
              null,
              0,
              f.p,
              [i.P, i.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, T)),
            i.xb(
              11,
              278528,
              null,
              0,
              f.p,
              [i.P, i.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, M)),
            i.xb(
              13,
              278528,
              null,
              0,
              f.p,
              [i.P, i.L, f.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(),
            i.yb(
              14,
              0,
              null,
              null,
              5,
              "au3-i18n-label",
              [
                ["class", "date"],
                ["id", "date"],
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
              15,
              212992,
              null,
              0,
              l.a,
              [i.l, i.D, o.a, s.a, [3, l.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(16, 16384, null, 0, p.a, [], null, null),
            i.xb(
              17,
              245760,
              null,
              0,
              r.a,
              [[6, l.a], u.a, i.h, i.l, i.D, [2, c.a], [2, p.a], [2, b.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            i.Pb(131072, f.b, [i.h]),
            i.Rb(19, 2),
            (t()(),
            i.yb(
              20,
              0,
              null,
              null,
              7,
              "div",
              [["class", "second-row"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), i.hb(16777216, null, null, 1, null, D)),
            i.xb(
              22,
              16384,
              null,
              0,
              f.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(),
            i.yb(
              23,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "sub"],
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
            i.xb(24, 16384, null, 0, p.a, [], null, null),
            i.xb(
              25,
              245760,
              null,
              0,
              r.a,
              [[8, null], u.a, i.h, i.l, i.D, [2, c.a], [2, p.a], [2, b.a]],
              { nonI18nValue: [0, "nonI18nValue"] },
              null,
            ),
            (t()(),
            i.yb(
              26,
              0,
              null,
              null,
              1,
              "au3-time-display",
              [["class", "time"]],
              null,
              null,
              null,
              y.b,
              y.a,
            )),
            i.xb(
              27,
              49152,
              null,
              0,
              S.a,
              [v.a],
              {
                timeAsMoment: [0, "timeAsMoment"],
                timeRightAligned: [1, "timeRightAligned"],
                swapAlignmentForArabic: [2, "swapAlignmentForArabic"],
              },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 5, 0, n.icon, n.iconCategory),
              t(e, 7, 0, n.callType),
              t(e, 9, 0, n.callstackItemTypeEnum.MAILBOX),
              t(e, 11, 0, n.callstackItemTypeEnum.CALLER),
              t(e, 13, 0, n.callstackItemTypeEnum.UNKNOWN),
              t(e, 15, 0, "date"));
            var a =
              i.Yb(
                e,
                17,
                1,
                t(
                  e,
                  19,
                  0,
                  i.Nb(e, 0),
                  n.timestamp,
                  i.Yb(e, 17, 1, i.Nb(e, 18).transform(n.dateFormat$)),
                ),
              ) || "";
            (t(e, 17, 0, "date", a),
              t(
                e,
                22,
                0,
                (null == n.call ? null : n.call.contact) &&
                  (null == n.call ? null : n.call.phoneNumberType) &&
                  !n.isMailboxNumber,
              ),
              t(e, 25, 0, n.subText),
              t(e, 27, 0, n.timestamp, !0, !0));
          },
          function (t, e) {
            (t(e, 4, 0, i.Nb(e, 5).iconComponentHidden),
              t(
                e,
                14,
                0,
                i.Nb(e, 17).backgroundColor,
                i.Nb(e, 17).fixedNumberOfLines,
                i.Nb(e, 17).mayContainLatinCharsForArabic,
                i.Nb(e, 17).shortenWithEllipsisForArabic,
              ),
              t(
                e,
                23,
                0,
                i.Nb(e, 25).backgroundColor,
                i.Nb(e, 25).fixedNumberOfLines,
                i.Nb(e, 25).mayContainLatinCharsForArabic,
                i.Nb(e, 25).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      var w = n("bMuc"),
        L = n("ZIdM"),
        F = n("3bpu"),
        R = n("6zvu"),
        I = n("VcEz"),
        E = n("OtM5"),
        j = n("y9xZ"),
        B = n("+sw+"),
        V = n("BMrr"),
        K = n("IEns"),
        H = n("z6QT"),
        U = n("flsk"),
        z = n("FQEI"),
        G = n("O82V"),
        Y = n("Eln4"),
        q = n("evAh"),
        Z = n("CpzC"),
        W = n("0Bsn"),
        X = n("5GjX"),
        J = n("mYyF"),
        Q = n("v98a"),
        tt = n("aOG8"),
        et = n("Krzs"),
        nt = n("N2Hj"),
        it = n("UbWD"),
        at = n("2rvh"),
        lt = n("odRV"),
        ot = n("Udyh"),
        st = n("I3ve"),
        rt = n("qiAR"),
        ut = n("007S"),
        ct = n("oeT7"),
        pt = n("oxWk"),
        bt = n("Tr//"),
        ht = n("LELx"),
        dt = n("o/5+"),
        gt = n("0qMr"),
        mt =
          (n("A66t"),
          n("YEFf"),
          n("Fok3"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{height:100%}.content-container[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;flex-direction:column}.content-container[_ngcontent-%COMP%]{justify-content:center;height:354px;margin-top:11px;min-height:0}.not-available__message[_ngcontent-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:40px;width:100%;text-align:center}.component-layout-arabic[_nghost-%COMP%]   .not-available__message[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .not-available__message[_ngcontent-%COMP%]{direction:rtl}.component-layout-latin[_nghost-%COMP%]   .not-available__message[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .not-available__message[_ngcontent-%COMP%]{direction:ltr}',
              ],
            ],
            data: {},
          }));
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
              9,
              "au3-fpk-callstack-item",
              [["id", ""]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "mib3Tap" === e &&
                    (i = !1 !== t.component.dial(t.context.$implicit) && i),
                  i
                );
              },
              $,
              A,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              l.a,
              [i.l, i.D, o.a, s.a, [3, l.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(2, 147456, null, 0, w.a, [i.l, i.z], null, null),
            i.xb(
              3,
              147456,
              null,
              0,
              L.a,
              [w.a, [2, F.a], [2, l.a], s.a],
              null,
              null,
            ),
            i.xb(
              4,
              212992,
              null,
              0,
              R.a,
              [
                s.a,
                I.b,
                L.a,
                [2, F.a],
                [2, l.a],
                [2, E.a],
                [2, j.a],
                [2, B.a],
                i.z,
                V.a,
                i.l,
                [2, K.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.Sb(131584, null, H.a, H.a, [[3, H.a]]),
            i.xb(
              6,
              4407296,
              null,
              0,
              U.a,
              [
                i.l,
                z.a,
                i.h,
                H.a,
                [2, G.a],
                [2, F.b],
                [2, F.a],
                [2, Y.a],
                [2, q.a],
              ],
              null,
              null,
            ),
            i.xb(
              7,
              147456,
              null,
              0,
              Z.a,
              [[2, R.a], [2, E.a], [2, W.a], [2, U.a], [2, X.b], i.l, J.a, Q.b],
              null,
              null,
            ),
            i.xb(
              8,
              147456,
              null,
              0,
              tt.a,
              [[2, U.a], [2, R.a], [2, I.b], et.a],
              null,
              null,
            ),
            i.xb(
              9,
              114688,
              null,
              0,
              k,
              [v.a],
              { call: [0, "call"], numberOfCalls: [1, "numberOfCalls"] },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, ""),
              t(e, 4, 0),
              t(e, 6, 0),
              t(
                e,
                9,
                0,
                e.context.$implicit,
                null == e.context.$implicit ||
                  null == e.context.$implicit.entries
                  ? null
                  : e.context.$implicit.entries.length,
              ));
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 6).markerClassEnabled);
          },
        );
      }
      function yt(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              7,
              "au3-list",
              [
                ["au3ListDomPaging", ""],
                ["id", ""],
              ],
              [[2, "list--with-line-numbers", null]],
              [[null, "selectedIndexChange"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "selectedIndexChange" === e &&
                    (i = !1 !== (t.component.selectedIndex = n) && i),
                  i
                );
              },
              nt.b,
              nt.a,
            )),
            i.Sb(6144, null, it.a, null, [at.a]),
            i.xb(
              2,
              212992,
              null,
              0,
              l.a,
              [i.l, i.D, o.a, s.a, [3, l.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(3, 16384, null, 0, lt.a, [i.l], null, null),
            i.xb(
              4,
              16384,
              null,
              0,
              ot.a,
              [s.a],
              { itemHeightGuess: [0, "itemHeightGuess"] },
              null,
            ),
            i.xb(
              5,
              12828672,
              null,
              1,
              at.a,
              [
                [2, ot.a],
                [2, st.a],
                [8, null],
                [2, l.a],
                [2, rt.a],
                [2, ut.a],
                [2, I.b],
                ct.i,
                i.z,
                i.h,
                s.a,
                pt.a,
                bt.a,
                [2, z.a],
                F.a,
                [2, ct.a],
              ],
              {
                showCursor: [0, "showCursor"],
                itemHeightGuess: [1, "itemHeightGuess"],
                showSeparators: [2, "showSeparators"],
                items: [3, "items"],
              },
              { selectedIndexChange: "selectedIndexChange" },
            ),
            i.Tb(603979776, 1, { template: 0 }),
            (t()(), i.hb(0, [[1, 2]], 0, 0, null, ft)),
          ],
          function (t, e) {
            (t(e, 2, 0, ""),
              t(e, 4, 0, 99),
              t(e, 5, 0, !0, 99, !1, e.parent.context.mib3Let));
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 5).showLineNumbers);
          },
        );
      }
      function St(t) {
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
              "div",
              [["class", "not-available__message"]],
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
              "au3-i18n-label",
              [["id", "NoCallstackText"]],
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
              2,
              212992,
              null,
              0,
              l.a,
              [i.l, i.D, o.a, s.a, [3, l.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              3,
              245760,
              null,
              0,
              r.a,
              [[6, l.a], u.a, i.h, i.l, i.D, [2, c.a], [2, p.a], [2, b.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 2, 0, "NoCallstackText"),
              t(
                e,
                3,
                0,
                "Keine Anrufliste verf\xfcgbar.",
                "NoCallstackText",
                6,
              ));
          },
          function (t, e) {
            t(
              e,
              1,
              0,
              i.Nb(e, 3).backgroundColor,
              i.Nb(e, 3).fixedNumberOfLines,
              i.Nb(e, 3).mayContainLatinCharsForArabic,
              i.Nb(e, 3).shortenWithEllipsisForArabic,
            );
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
              2,
              "div",
              [["class", "content-container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), i.hb(16777216, null, null, 1, null, yt)),
            i.xb(
              3,
              16384,
              null,
              0,
              f.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), i.hb(0, [["callListEmpty", 2]], null, 0, null, St)),
          ],
          function (t, e) {
            t(
              e,
              3,
              0,
              (null == e.context.mib3Let ? null : e.context.mib3Let.length) > 0,
              i.Nb(e, 4),
            );
          },
          null,
        );
      }
      function xt(t) {
        return i.ac(
          2,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-fpk-title-line",
              [
                ["id", ""],
                ["secondaryDeveloperText", "Anrufliste"],
              ],
              [[2, "priority-shrink", null]],
              null,
              null,
              ht.b,
              ht.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              l.a,
              [i.l, i.D, o.a, s.a, [3, l.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              49152,
              null,
              0,
              dt.a,
              [],
              {
                primaryNonI18nText: [0, "primaryNonI18nText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            i.Pb(131072, f.b, [i.h]),
            (t()(), i.hb(16777216, null, null, 2, null, vt)),
            i.xb(
              5,
              16384,
              null,
              0,
              gt.a,
              [i.L, i.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            i.Pb(131072, f.b, [i.h]),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, ""),
              t(
                e,
                2,
                0,
                i.Yb(e, 2, 0, i.Nb(e, 3).transform(n.phoneService.deviceName$)),
                "Anrufliste",
              ),
              t(
                e,
                5,
                0,
                i.Yb(
                  e,
                  5,
                  0,
                  i.Nb(e, 6).transform(n.phoneService.groupedRecentCalls$),
                ),
              ));
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 2).isPriorityShrink);
          },
        );
      }
    },
    Fok3: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return _;
      });
      var i = n("YEFf"),
        a = n("Yi6/"),
        l = n("xOC8"),
        o = n("nbmZ"),
        s = n("bwdy"),
        r = n("HM3f"),
        u = n("ROBh"),
        c = n("Ohay"),
        p = n("YtkY"),
        b = n("xVbo"),
        h = n("vAPC"),
        d = n("J+dc"),
        g = n("TLy2"),
        m = n("iT4G"),
        f = n("hBG2"),
        y = n("0Zlr"),
        S = n("axGb"),
        v = n("hN4M"),
        x = n("kZht"),
        O = n("ZUXc"),
        C = n("sg2e"),
        P = n("yNay");
      let _ = (() => {
        class t {
          constructor(t, e, n, i, a, l, o, r, u) {
            ((this.phoneService = t),
              (this.callOperationsService = e),
              (this.fpkContextService = n),
              (this.routingService = i),
              (this.extendedPopupManager = a),
              (this.popupManager = l),
              (this.rudiPhoneService = o),
              (this.phoneAsiService = r),
              (this.activeCallHistoryEnabled = !1),
              (this.subscriptions = new s.a()),
              (this.logger = u.getLogger("phone.FpkPhoneService")));
          }
          initSubscriptions() {
            (this.subscriptions.add(
              this.fpkContextService.currentContext$
                .pipe(Object(c.a)())
                .subscribe((t) => {
                  this.activeCallHistoryEnabled &&
                    t !== o.a.Phone &&
                    (this.logger.info(
                      "context changed, disabling fpk history behavior for active call",
                    ),
                    (this.activeCallHistoryEnabled = !1));
                }),
            ),
              this.subscriptions.add(
                this.phoneService.calls$
                  .pipe(
                    Object(p.a)((t) => !!t.focusCall || !!t.incomingCall),
                    Object(c.a)(),
                  )
                  .subscribe((t) => {
                    !t &&
                      this.activeCallHistoryEnabled &&
                      (this.logger.info(
                        "call finished while fpk history behavior enabled, attempting to go back to previous context",
                      ),
                      Promise.resolve().then(() => {
                        ((this.activeCallHistoryEnabled = !1),
                          this.fpkContextService.triggerHistoryRestoration());
                      }));
                  }),
              ),
              this.trackCallStackPopupActivity());
          }
          triggerHistoryAwareRoutingTo(t) {
            this.fpkContextService.isHistoryRestorationNeededAfter(o.a.Phone)
              ? (this.logger.info(
                  "triggerHistoryAwareRoutingTo: history is restored, denied routing to given routeInfo",
                ),
                this.fpkContextService.triggerHistoryRestoration())
              : (this.logger.info(
                  `triggerHistoryAwareRoutingTo: internal routing to ${Object(a.kd)(t)}`,
                ),
                this.routingService.goTo(t));
          }
          trackCallStackPopupActivity() {
            const t = this.popupManager
                .getPopup(a.Ob.POPUP_FPK_PHONE_CALLSTACK, a.G.CLUSTER)
                .pipe(
                  Object(p.a)((t) => !!t.requested),
                  Object(c.a)(),
                ),
              e = this.phoneService.calls$.pipe(
                Object(p.a)((t) => !!t.focusCall),
                Object(c.a)(),
              );
            this.subscriptions.add(
              Object(r.b)(e, t)
                .pipe(Object(b.a)(([t, e]) => t && e))
                .subscribe(() => {
                  (this.logger.info(
                    "FpkPhonePopup is still requested and FocusCall is active -> removing popup.",
                  ),
                    this.extendedPopupManager.unrequest(
                      a.Ob.POPUP_FPK_PHONE_CALLSTACK,
                    ));
                }),
            );
          }
          ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
          hookKeyPressed() {
            Object(r.b)(
              this.phoneAsiService.appleCarPlayActive$,
              this.phoneAsiService.asiCallExisting$,
            )
              .pipe(Object(h.a)(1e3, Object(u.a)([!1, !1])), Object(d.a)(1))
              .subscribe(([t, e]) => {
                if (t)
                  e
                    ? this.logger.info(
                        "MFL phone button pressed - ASI call exists, doing nothing",
                      )
                    : (this.logger.info(
                        "MFL phone button pressed - show carplay info in phone popup",
                      ),
                      this.triggerPhoneCallstackPopup());
                else {
                  const t = this.phoneService.calls.focusCall,
                    e = this.phoneService.calls.incomingCall;
                  e
                    ? (this.logger.info(
                        `MFL phone button pressed - request Accept or AcceptAndReplace for call ${e}`,
                      ),
                      this.acceptIncomingCall(e.id))
                    : this.isECallActive(t)
                      ? this.logger.info(
                          "MFL phone button pressed and eCall or OPR is active - do nothing",
                        )
                      : t
                        ? (this.logger.info(
                            "MFL phone button pressed - hangup active call",
                          ),
                          this.hangUpCall(t.id))
                        : (this.logger.info(
                            "MFL phone button pressed - switch to phone context",
                          ),
                          this.triggerPhoneCallstackPopup());
                }
              });
          }
          isECallActive(t) {
            return !!(t && t.callType && i.a.has(t.callType));
          }
          dialNumber(t, e) {
            if (!e) {
              const n = this.phoneService.phones.focusDevice;
              if (!n)
                return (
                  this.logger.error(`dialNumber(${t}): no phone available`),
                  Promise.reject(new Error("No phone available"))
                );
              e = n.uri;
            }
            if (!t || t.length < 3)
              return (
                this.logger.warn(
                  `dialNumber(${t}, ${e}): no number given or number too short`,
                ),
                Promise.reject(new Error('Invalid number: "' + t + '"'))
              );
            const n = { phoneDevice: e, number: t };
            return (
              this.logger.out.info(
                `dialNumber(${t}, ${e}): sending rsi insert for participant`,
                n,
              ),
              this.rudiPhoneService.participants
                .insertParticipantObject(n)
                .toPromise()
                .then((t) => {
                  this.logger.in.info("rsi insert for participant", t);
                })
                .catch((t) => {
                  throw (
                    this.logger.inFail.error(
                      "FAIL: rsi insert for participant",
                      t,
                    ),
                    t
                  );
                })
            );
          }
          acceptIncomingCall(t) {
            this.callOperationsService.isPossible(t, f.a.Accept)
              ? this.performCallOperation(t, f.a.Accept)
              : this.callOperationsService.isPossible(t, f.a.AcceptAndReplace)
                ? this.performCallOperation(t, f.a.AcceptAndReplace)
                : this.logger.warn(
                    "Accept and AcceptAndReplace call operations are unavailable",
                  );
          }
          performCallOperation(t, e) {
            this.callOperationsService.perform(t, e).then(() => {
              this.phoneService.calls$
                .pipe(
                  Object(p.a)((t) => !!t.focusCall),
                  Object(g.a)(() => this.fpkContextService.currentContext$),
                  Object(m.a)(3e3),
                  Object(d.a)(1),
                )
                .subscribe(
                  (t) => this.ensurePhoneContextActive(t),
                  () => this.logger.error(`call ${t} did not become active`),
                );
            });
          }
          ensurePhoneContextActive(t) {
            t !== o.a.Phone &&
              (this.logger.info(
                "phone call accepted on fpk, switching to phone context and enabling history behavior",
              ),
              (this.activeCallHistoryEnabled = !0),
              this.requestFpkContext(o.a.Phone));
          }
          hangUpCall(t) {
            (this.logger.info(`hook key pressed, hanging up call ${t}`),
              this.callOperationsService.isPossible(t, f.a.HangUp)
                ? this.callOperationsService.perform(t, f.a.HangUp)
                : this.logger.info("hang up call not possible"));
          }
          triggerPhoneCallstackPopup() {
            (this.logger.info(
              "hook key pressed, trying to trigger phone callstack",
            ),
              this.fpkContextService.currentContext$
                .pipe(
                  Object(g.a)((t) =>
                    t === o.a.Phone ||
                    this.phoneService.calls.incomingCall ||
                    this.phoneService.calls.focusCall
                      ? Object(u.a)(!0)
                      : this.popupManager.isActive(
                          a.Ob.POPUP_FPK_PHONE_CALLSTACK,
                        ),
                  ),
                  Object(d.a)(1),
                )
                .toPromise()
                .then((t) => {
                  (this.logger.info("Callstack popup is forbidden? ", t),
                    t ||
                      this.extendedPopupManager.request(
                        a.Ob.POPUP_FPK_PHONE_CALLSTACK,
                      ));
                }));
          }
          requestFpkContext(t) {
            this.fpkContextService.showFpkContext(t);
          }
          trySwitchingToPhoneContext() {
            (this.logger.info(
              "trySwitchingToPhoneContext: switch to PhoneContext, if not already there",
            ),
              this.requestFpkContext(o.a.Phone));
          }
        }
        return (
          (t.ɵprov = x.bc({
            factory: function () {
              return new t(
                x.cc(i.c),
                x.cc(f.b),
                x.cc(l.a),
                x.cc(v.b),
                x.cc(O.a),
                x.cc(C.a),
                x.cc(y.k),
                x.cc(S.a),
                x.cc(P.a),
              );
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    G7MO: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return P;
      }),
        n.d(e, "b", function () {
          return _;
        }));
      var i = n("Ngpk"),
        a = n("Yi6/"),
        l = n("ROBh"),
        o = n("HM3f"),
        s = n("J+dc"),
        r = n("vAPC"),
        u = n("TLy2"),
        c = n("Ohay"),
        p = n("YtkY"),
        b = n("xVbo"),
        h = n("jIqt"),
        d = n("kuMc"),
        g = n("P1io"),
        m = n("Y0IF"),
        f = n("hNdd"),
        y = n("vcDZ"),
        S = n("nbmZ"),
        v = n("xOC8"),
        x = n("kZht"),
        O = n("1VvW"),
        C = n("yNay");
      const P = {
        Init: { path: "init" },
        LoadingSource: { path: "loading-source" },
        Error: { path: "error" },
        SourceSelection: {
          path: "source-selection",
          skipHistory: !0,
          isLeftDrawer: !0,
        },
        Player: { path: "player", mainScreen: !0 },
        Tv: {
          path: "tv",
          children: {
            TvInit: { path: "init" },
            TvEsm: { path: "esm" },
            TvPlayer: { path: "player" },
          },
        },
      };
      let _ = (() => {
        class t extends a.i {
          constructor(t, e, n, i, l) {
            (super(
              i,
              l.getLogger("media.FpkMediaRoutingService"),
              g.k,
              P,
              null,
              a.Bb.MEDIA,
            ),
              (this.entertainmentService = t),
              (this.mediaStateService = e),
              (this.fpkContextService = n),
              this.subscribeToLoadingState());
          }
          static playerRouteFromState(t) {
            switch (t) {
              case f.a.INIT:
                return P.Init;
              case f.a.ERROR:
                return P.Error;
              case f.a.LOADING_SOURCE:
                return P.LoadingSource;
              case f.a.READY_PLAYVIEWORNPS:
                return P.Player;
              case f.a.TV_STATION_LIST:
                return P.Tv.children.TvPlayer;
              default:
                return P.LoadingSource;
            }
          }
          enterContext() {
            return this.lastActiveGroupWasTv()
              ? this.goTvPlayer()
              : super.enterContext();
          }
          closeSourceSelection() {
            return this.goBack();
          }
          goToTvEsm() {
            return this.goTo(P.Tv.children.TvEsm);
          }
          goToTvInit() {
            return this.goTo(P.Tv.children.TvInit);
          }
          goTvPlayer() {
            return this.goTo(P.Tv.children.TvPlayer);
          }
          lastActiveGroupWasTv() {
            return (
              this.entertainmentService.getLastActiveMediaTvGroup() === i.c.TV
            );
          }
          handleGoToFailure(e) {
            switch (e) {
              case P.Tv.children.TvPlayer:
                return this.goToTvInit();
              case P.Error:
              case P.LoadingSource:
              case P.Init:
              case P.Player:
                return (
                  this.logger.info(
                    "handleGoToFailure: calculate new route from player state. Failed route path : ",
                    e.path,
                  ),
                  this.mediaStateService.loadingState$
                    .pipe(
                      Object(s.a)(1),
                      Object(r.a)(1e3, Object(l.a)(f.a.INIT)),
                      Object(u.a)((n) => {
                        const i = t.playerRouteFromState(n);
                        return i === e
                          ? (this.logger.warn(
                              'handleGoToFailure: Requested redirection to same route as intended - resolve to "false" to prevent an infinite loop',
                              Object(a.kd)(i),
                            ),
                            Object(l.a)(!1))
                          : (this.logger.info(
                              "handleGoToFailure: redirect to route",
                              Object(a.kd)(i),
                            ),
                            this.goTo(i));
                      }),
                    )
                    .toPromise()
                );
              default:
                return super.handleGoToFailure(e);
            }
          }
          subscribeToLoadingState() {
            Object(o.b)(
              this.mediaStateService.loadingState$.pipe(Object(c.a)()),
              this.currentRoute$.pipe(
                Object(p.a)((t) => !!t && t.path === P.Init.path),
                Object(b.a)((t) => t),
                Object(c.a)(),
                Object(h.a)(!1),
              ),
            )
              .pipe(Object(d.a)(this.destroy$$))
              .subscribe(([e]) => {
                const n = t.playerRouteFromState(e);
                this.tryGoTo(n);
              });
          }
          isRedirectionSuitable() {
            return this.fpkContextService.isSynchronizedContext(S.a.Audio);
          }
        }
        return (
          (t.ɵprov = x.bc({
            factory: function () {
              return new t(
                x.cc(m.a),
                x.cc(y.a),
                x.cc(v.a),
                x.cc(O.m),
                x.cc(C.a),
              );
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    GCsn: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return b;
      }),
        n.d(e, "b", function () {
          return h;
        }));
      var i = n("Yi6/"),
        a = n("P1io"),
        l = n("YtkY"),
        o = n("Ohay"),
        s = n("kuMc"),
        r = n("t8AR"),
        u = n("kZht"),
        c = n("1VvW"),
        p = n("yNay");
      const b = {
        Nps: { path: "nps", mainScreen: !0 },
        Information: { path: "information" },
      };
      let h = (() => {
        class t extends i.i {
          constructor(t, e, n) {
            (super(e, n.getLogger("asi.FpkAsiRoutingService"), a.i, b),
              (this.asiService = t),
              this.subscribeToSmartphoneState());
          }
          subscribeToSmartphoneState() {
            this.asiService.currentActiveDevice$
              .pipe(
                Object(l.a)((t) => !!t),
                Object(o.a)(),
                Object(s.a)(this.destroy$$),
              )
              .subscribe((t) => {
                this.tryGoTo(t ? b.Nps : b.Information);
              });
          }
        }
        return (
          (t.ɵprov = u.bc({
            factory: function () {
              return new t(u.cc(r.a), u.cc(c.m), u.cc(p.a));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    LELx: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return f;
      }),
        n.d(e, "b", function () {
          return y;
        }));
      var i = n("kZht"),
        a = n("HVUF"),
        l = n("B3Zb"),
        o = n("yNay"),
        s = n("8TlW"),
        r = n("fu7d"),
        u = n("bou3"),
        c = n("ijxY"),
        p = n("Xo58"),
        b = n("m3Ja"),
        h = n("r+e+"),
        d = n("bmFL"),
        g = n("8Wo1"),
        m = n("CDcS"),
        f =
          (n("o/5+"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);display:block;margin-left:-44px;margin-right:-44px;margin-bottom:7px}.title-line[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:15px;margin-bottom:8px}.icon[_ngcontent-%COMP%]{flex-shrink:0;margin-top:7px;margin-bottom:3px;width:40px;height:40px}.title[_ngcontent-%COMP%]{display:flex;flex-shrink:1;height:50px;min-width:0;margin-right:4px;margin-left:4px;font-size:40px}.title__separator[_ngcontent-%COMP%]{display:none;margin-right:5px;margin-left:5px}.title__bullet[_ngcontent-%COMP%]{width:7px;height:6px;margin:17px 16px 17px 17px;filter:var(--current-context-hue)}.title__primary[_ngcontent-%COMP%]{display:none;min-width:71px;text-align:center;color:var(--current-context)}.priority-shrink[_nghost-%COMP%]   .title__primary[_ngcontent-%COMP%]{flex-shrink:1000000}.title__secondary[_ngcontent-%COMP%]{display:none;min-width:71px;text-align:center}.title-line--with-primary[_ngcontent-%COMP%]   .title__primary[_ngcontent-%COMP%], .title-line--with-secondary[_ngcontent-%COMP%]   .title__secondary[_ngcontent-%COMP%]{display:block}.title-line--with-primary.title-line--with-secondary[_ngcontent-%COMP%]   .title__primary[_ngcontent-%COMP%]{text-align:right}.title-line--with-primary.title-line--with-secondary[_ngcontent-%COMP%]   .title__separator[_ngcontent-%COMP%]{display:block}.title-line--with-primary.title-line--with-secondary[_ngcontent-%COMP%]   .title__secondary[_ngcontent-%COMP%]{text-align:left}.fpk-stage-small[_nghost-%COMP%]   .title-line[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .title-line[_ngcontent-%COMP%]{margin-left:44px;margin-right:44px}.fpk-stage-small[_nghost-%COMP%]   .title-line--no-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .title-line--no-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{flex-basis:0;margin:0}.fpk-stage-small[_nghost-%COMP%]   .title-line--no-icons[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .title-line--no-icons[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:0;margin-left:0}.fpk-stage-small[_nghost-%COMP%]   .title-line--with-primary.title-line--with-secondary[_ngcontent-%COMP%]   .title__primary[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .title-line--with-primary.title-line--with-secondary[_ngcontent-%COMP%]   .title__primary[_ngcontent-%COMP%], .fpk-stage-small[_nghost-%COMP%]   .title-line--with-primary.title-line--with-secondary[_ngcontent-%COMP%]   .title__separator[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .title-line--with-primary.title-line--with-secondary[_ngcontent-%COMP%]   .title__separator[_ngcontent-%COMP%]{display:none}.fpk-stage-small[_nghost-%COMP%]   .title-line--with-primary.title-line--with-secondary[_ngcontent-%COMP%]   .title__secondary[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .title-line--with-primary.title-line--with-secondary[_ngcontent-%COMP%]   .title__secondary[_ngcontent-%COMP%]{text-align:center}.loading-spinner[_ngcontent-%COMP%]{margin:-12px;width:64px;height:64px;animation:spin 1.4s linear infinite}.separator-line[_ngcontent-%COMP%]{height:1px;background-color:hsla(0,0%,100%,.7)}.steering-wheel-left[_nghost-%COMP%]   .title-line[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .title-line[_ngcontent-%COMP%]{flex-direction:row}.steering-wheel-right[_nghost-%COMP%]   .title-line[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .title-line[_ngcontent-%COMP%]{flex-direction:row-reverse}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',
              ],
            ],
            data: {},
          }));
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
              18,
              "div",
              [["class", "title-line"]],
              [
                [2, "title-line--with-primary", null],
                [2, "title-line--with-secondary", null],
                [2, "title-line--no-icons", null],
              ],
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
              "div",
              [["class", "icon"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              2,
              0,
              null,
              null,
              1,
              "au3-icon",
              [],
              [
                [4, "display", null],
                [2, "icon-component--hidden", null],
              ],
              null,
              null,
              a.b,
              a.a,
            )),
            i.xb(
              3,
              4243456,
              null,
              0,
              l.b,
              [o.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (t()(),
            i.yb(
              4,
              0,
              null,
              null,
              11,
              "div",
              [["class", "title"]],
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
                ["class", "title__primary"],
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
            i.xb(
              6,
              212992,
              null,
              0,
              r.a,
              [i.l, i.D, u.a, o.a, [3, r.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              7,
              16384,
              null,
              0,
              c.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            i.xb(
              8,
              245760,
              null,
              0,
              p.a,
              [[6, r.a], b.a, i.h, i.l, i.D, [2, h.a], [2, c.a], [2, d.a]],
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
              9,
              0,
              null,
              null,
              2,
              "div",
              [["class", "icon title__separator"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              10,
              0,
              null,
              null,
              1,
              "img",
              [
                ["class", "title__bullet"],
                [
                  "src",
                  "/decorators/W051_ScreenName/mib2plus_w051_titelline_trennerpunkt.webp",
                ],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            i.xb(11, 212992, null, 0, g.a, [[3, m.a], i.l, i.z], null, null),
            (t()(),
            i.yb(
              12,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "title__secondary"],
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
            i.xb(
              13,
              212992,
              null,
              0,
              r.a,
              [i.l, i.D, u.a, o.a, [3, r.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              14,
              16384,
              null,
              0,
              c.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            i.xb(
              15,
              245760,
              null,
              0,
              p.a,
              [[6, r.a], b.a, i.h, i.l, i.D, [2, h.a], [2, c.a], [2, d.a]],
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
              16,
              0,
              null,
              null,
              2,
              "div",
              [["class", "icon"]],
              [[2, "loading-spinner-icon", null]],
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              17,
              0,
              null,
              null,
              1,
              "img",
              [
                ["class", "loading-spinner"],
                [
                  "src",
                  "/icons/touch/E8E1_connect_pictureviewer_loadingstatus.webp",
                ],
              ],
              [[4, "display", null]],
              null,
              null,
              null,
              null,
            )),
            i.xb(18, 212992, null, 0, g.a, [[3, m.a], i.l, i.z], null, null),
            (t()(),
            i.yb(
              19,
              0,
              null,
              null,
              0,
              "div",
              [["class", "separator-line"]],
              null,
              null,
              null,
              null,
              null,
            )),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 3, 0, "E163_breadcrump_back.webp", n.iconCategoryEnum.List),
              t(e, 6, 0, n.primaryId, n.primaryIdEnumType),
              t(
                e,
                7,
                0,
                !n.primaryHasText ||
                  !(n.primaryIdEnumType || n.primaryDeveloperText),
              ),
              t(
                e,
                8,
                0,
                n.primaryDeveloperText,
                n.primaryId,
                1,
                n.primaryNonI18nText,
              ),
              t(e, 11, 0),
              t(e, 13, 0, n.secondaryId, n.secondaryIdEnumType),
              t(
                e,
                14,
                0,
                !n.secondaryHasText ||
                  !(n.secondaryIdEnumType || n.secondaryDeveloperText),
              ),
              t(
                e,
                15,
                0,
                n.secondaryDeveloperText,
                n.secondaryId,
                1,
                n.secondaryNonI18nText,
              ),
              t(e, 18, 0));
          },
          function (t, e) {
            var n = e.component;
            (t(
              e,
              0,
              0,
              n.primaryHasText,
              n.secondaryHasText,
              !n.showBreadcrumbsIcon && !n.showLoadingSpinner,
            ),
              t(
                e,
                2,
                0,
                n.showBreadcrumbsIcon ? void 0 : "none",
                i.Nb(e, 3).iconComponentHidden,
              ),
              t(
                e,
                5,
                0,
                i.Nb(e, 8).backgroundColor,
                i.Nb(e, 8).fixedNumberOfLines,
                i.Nb(e, 8).mayContainLatinCharsForArabic,
                i.Nb(e, 8).shortenWithEllipsisForArabic,
              ),
              t(
                e,
                12,
                0,
                i.Nb(e, 15).backgroundColor,
                i.Nb(e, 15).fixedNumberOfLines,
                i.Nb(e, 15).mayContainLatinCharsForArabic,
                i.Nb(e, 15).shortenWithEllipsisForArabic,
              ),
              t(
                e,
                16,
                0,
                null == n.environment ? null : n.environment.isBentley,
              ),
              t(e, 17, 0, n.showLoadingSpinner ? void 0 : "none"));
          },
        );
      }
    },
    SAv1: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return f;
      });
      var i = n("C05f"),
        a = n("ZTXN"),
        l = n("QQZH"),
        o = n("nbmZ"),
        s = n("Yi6/"),
        r = n("gb1R"),
        u = n("Ohay"),
        c = n("w0kG"),
        p = n("YtkY"),
        b = n("xVbo"),
        h = n("kuMc"),
        d = n("kZht");
      const g = o.c.Large,
        m = { value: s.yc.Large, params: { xOffset: 0 } };
      let f = (() => {
        class t {
          constructor(e) {
            ((this.currentStage$$ = new i.a(g)),
              (this.currentStage$ = this.currentStage$$),
              (this.nextViewSizeAnimationData$$ = new i.a(m)),
              (this.nextViewSizeAnimationData$ =
                this.nextViewSizeAnimationData$$.pipe(
                  Object(u.a)((e, n) => t.equalViewSizeData(e, n)),
                )),
              (this.finishedAnimationState$$ = new a.a()),
              (this.requestedStage$$ = new a.a()),
              (this.onDestroy$$ = new l.a(1)),
              e.activeClusterSkin$
                .pipe(
                  Object(u.a)(),
                  Object(c.a)(
                    this.requestedStage$$,
                    this.nextViewSizeAnimationData$$,
                  ),
                  Object(p.a)(([e, n, i]) => [
                    i,
                    t.createTargetAnimationState(n, e),
                  ]),
                  Object(b.a)(([t, e]) => t !== e),
                  Object(p.a)(([e, n]) => t.defineNextAnimationState(e, n)),
                )
                .subscribe(this.nextViewSizeAnimationData$$),
              this.finishedAnimationState$$
                .pipe(
                  Object(b.a)((t) => t === s.yc.Transition),
                  Object(c.a)(this.requestedStage$$, e.activeClusterSkin$),
                  Object(p.a)(([e, n, i]) => [
                    t.createTargetAnimationState(n, i),
                    n,
                  ]),
                  Object(h.a)(this.onDestroy$$),
                )
                .subscribe(([t, e]) => {
                  (this.nextViewSizeAnimationData$$.next(t),
                    this.currentStage$$.next(e));
                }),
              this.requestedStage$$
                .pipe(
                  Object(u.a)(),
                  Object(c.a)(
                    this.nextViewSizeAnimationData$$,
                    e.activeClusterSkin$,
                  ),
                  Object(p.a)(([e, n, i]) => [
                    n,
                    t.createTargetAnimationState(e, i),
                  ]),
                  Object(b.a)(([e, n]) => !t.equalViewSizeData(e, n)),
                  Object(p.a)(([e, n]) => t.defineNextAnimationState(e, n)),
                  Object(h.a)(this.onDestroy$$),
                )
                .subscribe(this.nextViewSizeAnimationData$$));
          }
          static equalViewSizeData(t, e) {
            return t.value === e.value && t.params.xOffset === e.params.xOffset;
          }
          static createTargetAnimationState(t, e) {
            const n = t === o.c.Large ? s.yc.Large : s.yc.Small,
              i = { xOffset: t === o.c.Large ? 0 : e.translationX };
            return (
              void 0 !== e.opacity && (i.opacity = e.opacity),
              void 0 !== e.fadeOutDuration &&
                (i.terminalFadeOutDuration = e.fadeOutDuration),
              { value: n, params: i }
            );
          }
          static defineNextAnimationState(t, e) {
            return t.value === s.yc.Transition
              ? e
              : { value: s.yc.Transition, params: e.params };
          }
          ngOnDestroy() {
            this.onDestroy$$.next();
          }
          setFpkStage(t) {
            t !== o.c.NoChange && this.requestedStage$$.next(t);
          }
          animationStateFinished(t) {
            this.finishedAnimationState$$.next(t);
          }
          toggleFpkStage() {
            this.setFpkStage(
              this.currentStage$$.getValue() === o.c.Large
                ? o.c.Small
                : o.c.Large,
            );
          }
        }
        return (
          (t.ɵprov = d.bc({
            factory: function () {
              return new t(d.cc(r.c));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    VKfg: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return m;
      }),
        n.d(e, "b", function () {
          return C;
        }));
      var i = n("kZht"),
        a = n("8TlW"),
        l = n("fu7d"),
        o = n("bou3"),
        s = n("yNay"),
        r = n("Xo58"),
        u = n("m3Ja"),
        c = n("r+e+"),
        p = n("ijxY"),
        b = n("bmFL"),
        h = n("An66"),
        d = n("0qMr"),
        g = n("YI95"),
        m =
          (n("EkEa"),
          n("oPv+"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block}.time[_ngcontent-%COMP%]{font-size:30px;line-height:36px;width:87px;display:flex}.time__right-aligned[_ngcontent-%COMP%]{justify-content:flex-end}.time--12h[_ngcontent-%COMP%]{width:132px}.time--with-date[_ngcontent-%COMP%]{margin-bottom:14px}.steering-wheel-left[_nghost-%COMP%]   .time--with-date[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .time--with-date[_ngcontent-%COMP%]{margin-left:auto}.steering-wheel-right[_nghost-%COMP%]   .time--with-date[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .time--with-date[_ngcontent-%COMP%]{margin-right:auto}.time__period[_ngcontent-%COMP%]{font-size:20px;margin:0 7px;min-width:33px;max-width:33px;line-height:29px;text-align:start}.time-period__right-aligned[_ngcontent-%COMP%]{margin:0 0 0 7px;direction:ltr}.component-layout-arabic[_nghost-%COMP%]   .time-period__right-aligned[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .time-period__right-aligned[_ngcontent-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%]   .time__right-aligned.swap-alignment[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .time__right-aligned.swap-alignment[_ngcontent-%COMP%]{justify-content:flex-start}.component-layout-arabic[_nghost-%COMP%]   .time__left-aligned.swap-alignment[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .time__left-aligned.swap-alignment[_ngcontent-%COMP%]{justify-content:flex-end}.component-layout-latin[_nghost-%COMP%]   .time-period__right-aligned[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .time-period__right-aligned[_ngcontent-%COMP%]{direction:ltr}.time-period--am[_ngcontent-%COMP%]{align-self:flex-start}.time-period--pm[_ngcontent-%COMP%]{align-self:flex-end}.date[_ngcontent-%COMP%]{font-size:23px;line-height:28px}.date--primary-height[_ngcontent-%COMP%]{font-size:30px}.time--primary-height[_ngcontent-%COMP%]{font-size:40px;line-height:44px;width:120px;justify-content:flex-end}.time--primary-height.time--12h[_ngcontent-%COMP%]{width:170px}.time--dynamic-width[_ngcontent-%COMP%]{width:auto}",
              ],
            ],
            data: {},
          }));
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
              "au3-i18n-label",
              [["fixedNumberOfLines", "1"]],
              [
                [8, "className", 0],
                [2, "time-period__right-aligned", null],
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
              l.a,
              [i.l, i.D, o.a, s.a, [3, l.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              2,
              245760,
              [
                [1, 4],
                ["AmPmLabel", 4],
              ],
              0,
              r.a,
              [[6, l.a], u.a, i.h, i.l, i.D, [2, c.a], [2, p.a], [2, b.a]],
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
            (t(e, 1, 0, n.timePeriod(n.timeAsMoment), n.AmPmEnum),
              t(
                e,
                2,
                0,
                n.timePeriod(n.timeAsMoment),
                n.timePeriod(n.timeAsMoment),
                "1",
              ));
          },
          function (t, e) {
            var n = e.component;
            t(
              e,
              0,
              0,
              i.Fb(
                1,
                "time__period time-period--",
                n.timePeriodString(n.timeAsMoment),
                "",
              ),
              n.timeRightAligned,
              i.Nb(e, 2).backgroundColor,
              i.Nb(e, 2).fixedNumberOfLines,
              i.Nb(e, 2).mayContainLatinCharsForArabic,
              i.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
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
              5,
              "div",
              [
                ["class", "time"],
                ["id", "TimeDisplayComponent"],
              ],
              [
                [2, "time__right-aligned", null],
                [2, "time__left-aligned", null],
                [2, "swap-alignment", null],
                [2, "time--12h", null],
                [2, "time--with-date", null],
                [2, "time--primary-height", null],
                [2, "time--dynamic-width", null],
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
              l.a,
              [i.l, i.D, o.a, s.a, [3, l.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (t()(), i.Xb(2, null, [" ", " "])),
            i.Rb(3, 2),
            (t()(), i.hb(16777216, null, null, 1, null, f)),
            i.xb(
              5,
              16384,
              null,
              0,
              h.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "TimeDisplayComponent"),
              t(
                e,
                5,
                0,
                "12h" === e.context.mib3Let.activeTimeFormatDisplayable,
              ));
          },
          function (t, e) {
            var n = e.component;
            t(
              e,
              0,
              0,
              n.timeRightAligned,
              !n.timeRightAligned,
              n.swapAlignmentForArabic,
              "12h" === e.context.mib3Let.activeTimeFormatDisplayable,
              n.showDate,
              n.primaryTimeHeight,
              n.useDynamicWidth,
            );
            var a = i.Yb(
              e,
              2,
              0,
              t(
                e,
                3,
                0,
                i.Nb(e.parent.parent.parent, 0),
                n.timeAsMoment,
                e.context.mib3Let.activeTimeFormatForMoment,
              ),
            );
            t(e, 2, 0, a);
          },
        );
      }
      function S(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(0, 0, null, null, 3, "div", [], null, null, null, null, null)),
            (t()(), i.hb(16777216, null, null, 2, null, y)),
            i.xb(
              2,
              16384,
              null,
              0,
              d.a,
              [i.L, i.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            i.Pb(131072, h.b, [i.h]),
          ],
          function (t, e) {
            var n = e.component;
            t(
              e,
              2,
              0,
              i.Yb(
                e,
                2,
                0,
                i.Nb(e, 3).transform(n.generalSettingsService.timeFormat$),
              ),
            );
          },
          null,
        );
      }
      function v(t) {
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
              "div",
              [["class", "date"]],
              [[2, "date--primary-height", null]],
              null,
              null,
              null,
              null,
            )),
            (t()(), i.Xb(1, null, [" ", " "])),
            i.Pb(131072, h.b, [i.h]),
            i.Rb(3, 2),
          ],
          null,
          function (t, e) {
            var n = e.component;
            t(e, 0, 0, n.primaryDateHeight);
            var a,
              l = i.Yb(
                e,
                1,
                0,
                t(
                  e,
                  3,
                  0,
                  i.Nb(e.parent.parent, 0),
                  n.timeAsMoment,
                  null ==
                    (a = i.Yb(
                      e,
                      1,
                      0,
                      i
                        .Nb(e, 2)
                        .transform(n.generalSettingsService.dateFormat$),
                    ))
                    ? null
                    : a.activeDateFormatForMoment,
                ),
              );
            t(e, 1, 0, l);
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
              4,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), i.hb(16777216, null, null, 1, null, S)),
            i.xb(
              2,
              16384,
              null,
              0,
              h.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, v)),
            i.xb(
              4,
              16384,
              null,
              0,
              h.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(0, null, null, 0)),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 2, 0, n.showTime), t(e, 4, 0, n.showDate));
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
            (t()(),
            i.yb(
              1,
              0,
              null,
              null,
              1,
              "div",
              [["class", "time"]],
              [[2, "time__right-aligned", null]],
              null,
              null,
              null,
              null,
            )),
            (t()(), i.Xb(2, null, ["", ""])),
          ],
          null,
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, n.timeRightAligned), t(e, 2, 0, n.defaultText));
          },
        );
      }
      function C(t) {
        return i.ac(
          2,
          [
            i.Pb(0, g.a, []),
            i.Tb(671088640, 1, { amPmLabel: 0 }),
            (t()(), i.hb(16777216, null, null, 1, null, x)),
            i.xb(
              3,
              16384,
              null,
              0,
              h.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, O)),
            i.xb(
              5,
              16384,
              null,
              0,
              h.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 3, 0, null !== n.timeAsMoment),
              t(e, 5, 0, null === n.timeAsMoment && null !== n.defaultText));
          },
          null,
        );
      }
    },
    WABo: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return d;
      });
      var i = n("bwdy"),
        a = n("ROBh"),
        l = n("TLy2"),
        o = n("Yi6/"),
        s = n("ZVJ/"),
        r = n("kZht"),
        u = n("FfND"),
        c = n("fzcM"),
        p = n("oeT7"),
        b = n("yNay");
      const h = (t, e, n, i, a) =>
        d.createRoutingDisclaimerService(t, e, n, i, a);
      let d = (() => {
        class t {
          constructor(t, e, n, a) {
            ((this.disclaimerService = t),
              (this.lockingService = e),
              (this.textinputLockingService = a),
              (this.routeSubscription = i.a.EMPTY),
              (this.disclaimerSubscriptions = []),
              (this.logger = n.getLogger("locking.RoutingDisclaimerService")));
          }
          static createRoutingDisclaimerService(e, n, i, a, l) {
            const o = new t(n, i, a, l);
            return (o.init(e.currentAppRoute$), o);
          }
          init(t) {
            this.routeSubscription = t.subscribe((t) => this.onRouteChanged(t));
          }
          ngOnDestroy() {
            (this.routeSubscription.unsubscribe(),
              this.disclaimerSubscriptions.forEach((t) =>
                this.disclaimerService.unregisterDisclaimer(t),
              ));
          }
          onRouteChanged(t) {
            (this.disclaimerSubscriptions.forEach((t) =>
              this.disclaimerService.unregisterDisclaimer(t),
            ),
              (this.disclaimerSubscriptions = []));
            const e = t.lockingContext;
            if (e) {
              if (
                (this.logger.debug("Registering disclaimer locks", {
                  complexScreen: t.complexScreen,
                  textInfoContexts: t.textInputContexts,
                  longTextScreen: t.longTextScreen,
                  context: e,
                }),
                t.complexScreen &&
                  this.disclaimerSubscriptions.push(
                    this.registerDisclaimerForLocking(
                      { context: e, type: o.Eb.SCREEN, category: o.Ab.COMPLEX },
                      o.Db.DEFAULT_LOCKING_DISCLAIMER,
                    ),
                  ),
                (t.longTextScreen || t.longTextTextOnlyScreen) &&
                  this.disclaimerSubscriptions.push(
                    this.registerDisclaimerForLocking(
                      {
                        context: e,
                        type: o.Eb.SCREEN,
                        category: o.Ab.LONG_TEXT,
                      },
                      o.B.LOCKING_LONG_TEXT,
                      !0,
                    ),
                  ),
                t.textInputContexts)
              ) {
                const n =
                    this.textinputLockingService.getLockingPropertyForContexts(
                      t.textInputContexts,
                      e,
                    ).lock$,
                  i = Object(a.a)(o.Db.DEFAULT_LOCKING_DISCLAIMER);
                this.disclaimerSubscriptions.push(
                  this.disclaimerService.registerDisclaimer({
                    enabled$: n,
                    reason$: i,
                    priority: o.D.LockingComplex,
                  }),
                );
              }
              this.disclaimerSubscriptions.push(
                this.registerDisclaimerForRouteInfo(t),
              );
            } else
              this.logger.error(
                "Invalid locking context for route info",
                Object(o.kd)(t),
              );
          }
          registerDisclaimerForRouteInfo(t) {
            const e = this.lockingService
                .getPropertyForRouteInfo(t)
                .pipe(Object(l.a)((t) => t.lock$)),
              n = o.D.LockingComplex,
              i = Object(a.a)(o.Db.DEFAULT_LOCKING_DISCLAIMER);
            return this.disclaimerService.registerDisclaimer({
              enabled$: e,
              priority: n,
              reason$: i,
            });
          }
          registerDisclaimerForLocking(t, e, n = !1) {
            const i = this.lockingService
                .getProperty(t)
                .pipe(Object(l.a)((t) => t.lock$)),
              s = o.D.LockingComplex,
              r = Object(a.a)(e);
            return this.disclaimerService.registerDisclaimer({
              enabled$: i,
              priority: s,
              reason$: r,
              allowOperationPanel: n,
            });
          }
        }
        return (
          (t.ɵprov = r.bc({
            factory: function () {
              return h(r.cc(u.a), r.cc(c.a), r.cc(p.i), r.cc(b.a), r.cc(s.a));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    YUff: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return b;
      });
      var i = n("p5kZ"),
        a = (n("Yi6/"), n("HM3f")),
        l = n("YtkY"),
        o = n("8j5Y"),
        s = n("Ohay"),
        r = n("jIqt"),
        u = n("I70t"),
        c = n("kZht"),
        p = n("yNay");
      let b = (() => {
        class t {
          constructor(t, e) {
            ((this.rudiExternalMediaService = t),
              (this.logger = e.getLogger(
                "asterix-media.AsterixMediaMetadataService",
              )),
              this.rudiExternalMediaService.start(),
              (this.metadata$ = this.rudiExternalMediaService.media
                .retrieveMediaObjects({ autosubscribe: !0 })
                .pipe(
                  Object(l.a)((t) => t.data[0]),
                  Object(o.a)((t) =>
                    this.logger.in.debug("retrieveMediaObjects:", t),
                  ),
                  Object(u.a)(this.logger, "metadata$", void 0),
                )),
              (this.player$ = this.rudiExternalMediaService.player
                .retrievePlayerObjects({ autosubscribe: !0 })
                .pipe(
                  Object(l.a)((t) => t.data[0]),
                  Object(o.a)((t) =>
                    this.logger.in.debug("retrievePlayerObjects:", t),
                  ),
                  Object(u.a)(this.logger, "player$", void 0),
                )),
              (this.session$ = this.rudiExternalMediaService.session
                .retrieveSessionObjects({ autosubscribe: !0 })
                .pipe(
                  Object(l.a)((t) => t.data[0]),
                  Object(o.a)((t) =>
                    this.logger.in.debug("retrieveSessionObjects:", t),
                  ),
                  Object(u.a)(this.logger, "session$", void 0),
                )),
              (this.playTimeAvailable$ = Object(a.b)(
                this.metadata$,
                this.player$,
              ).pipe(
                Object(l.a)(([t, e]) => this.playTimeAvailable(t, e)),
                Object(s.a)(),
                Object(r.a)(!1),
              )));
          }
          playTimeAvailable(t, e) {
            if (null == t || null == e) return !1;
            const n = e.trackPosition,
              i = t.trackDuration;
            return null != i && null != n && i > 0 && n >= 0;
          }
        }
        return (
          (t.ɵprov = c.bc({
            factory: function () {
              return new t(c.cc(i.d), c.cc(p.a));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    daJa: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var i = (function (t) {
        return (
          (t.Player = "player"),
          (t.Loading = "loading"),
          (t.Error = "error"),
          t
        );
      })({});
    },
    gb1R: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return g;
      }),
        n.d(e, "b", function () {
          return m;
        }),
        n.d(e, "d", function () {
          return f;
        }),
        n.d(e, "c", function () {
          return A;
        }));
      var i = n("jqpA"),
        a = n("YtkY"),
        l = n("8j5Y"),
        o = n("kuMc"),
        s = n("ZaxF"),
        r = n("C05f"),
        u = n("QQZH"),
        c = n("Yi6/"),
        p = n("pZ7a"),
        b = n("Kq23"),
        h = n("kZht"),
        d = n("yNay"),
        g = (function (t) {
          return (
            (t[(t.Classic = 0)] = "Classic"),
            (t[(t.Stack = 1)] = "Stack"),
            (t[(t.Radius = 2)] = "Radius"),
            (t[(t.Classic_Light = 3)] = "Classic_Light"),
            (t[(t.Classic_RS = 4)] = "Classic_RS"),
            (t[(t.Stack_RS = 5)] = "Stack_RS"),
            (t[(t.AudiSport = 6)] = "AudiSport"),
            t
          );
        })({}),
        m = (function (t) {
          return (
            (t[(t.Classic = 0)] = "Classic"),
            (t[(t.Stack = 1)] = "Stack"),
            (t[(t.Radius = 2)] = "Radius"),
            (t[(t.AudiSport = 3)] = "AudiSport"),
            (t[(t.SportBev = 4)] = "SportBev"),
            t
          );
        })({});
      const f = -580,
        y = {
          id: g.Classic,
          layout: m.Classic,
          hasCentralTube: !1,
          translationX: 0,
        },
        S = {
          id: g.Classic_Light,
          layout: m.Classic,
          hasCentralTube: !1,
          translationX: 0,
        },
        v = {
          id: g.Classic_RS,
          layout: m.Classic,
          hasCentralTube: !1,
          translationX: 0,
        },
        x = {
          id: g.Radius,
          layout: m.Radius,
          hasCentralTube: !1,
          translationX: 0,
        },
        O = {
          id: g.Stack,
          layout: m.Stack,
          hasCentralTube: !0,
          translationX: -596,
          opacity: 0,
          fadeOutDuration: 40,
        },
        C = {
          id: g.Stack_RS,
          layout: m.Stack,
          hasCentralTube: !0,
          translationX: -596,
          opacity: 0,
          fadeOutDuration: 40,
        },
        P = {
          id: g.AudiSport,
          layout: m.AudiSport,
          hasCentralTube: !0,
          translationX: -596,
          opacity: 0,
          fadeOutDuration: 40,
        },
        _ = {
          id: g.Stack,
          layout: m.SportBev,
          hasCentralTube: !0,
          translationX: -596,
          opacity: 0,
          fadeOutDuration: 40,
        },
        k = {
          id: g.Stack_RS,
          layout: m.SportBev,
          hasCentralTube: !0,
          translationX: -596,
          opacity: 0,
          fadeOutDuration: 40,
        };
      let A = (() => {
        class t {
          constructor(t, e, n) {
            ((this.displayService = t),
              (this.carVariantService = e),
              (this.activeClusterSkin$$ = new r.a(c.gd.isLamborghini ? O : y)),
              (this.activeClusterSkin$ = this.activeClusterSkin$$),
              (this.needsTopPadding$ = this.activeClusterSkin$$.pipe(
                Object(a.a)((t) => this.defineTopPadding(t.id)),
              )),
              (this.onDestroy$$ = new u.a(1)),
              (this.logger = n.getLogger("fpk.FpkSkinService")));
          }
          static mapToClusterSkinData(t) {
            if (c.gd.isLamborghini) return O;
            if (!t || c.gd.isBentley) return y;
            switch (t) {
              case s.c.Classic:
                return y;
              case s.c.ClassicS:
              case s.c.ClassicLight:
                return S;
              case s.c.ClassicRs:
              case s.c.ClassicPerformance:
                return v;
              case s.c.StackS:
                return O;
              case s.c.StackRs:
                return C;
              case s.c.SportBev:
                return _;
              case s.c.SportBevPerformance:
                return k;
              case s.c.Radius:
                return x;
              case s.c.AudiSport:
                return P;
              default:
                return y;
            }
          }
          initSubscriptions(e) {
            e === c.T.BrowserFpk &&
              this.displayService.clusterInstrumentsSetting$
                .pipe(
                  Object(l.a)((t) =>
                    this.logger.info(
                      "displayService provided value for ClusterSkin: ",
                      t.value,
                    ),
                  ),
                  Object(a.a)((e) => t.mapToClusterSkinData(e.value)),
                  Object(o.a)(this.onDestroy$$),
                )
                .subscribe(this.activeClusterSkin$$);
          }
          defineTopPadding(t) {
            const e = this.carVariantService.getCurrentVariant();
            if (e) {
              const n = b.i.get(e.id);
              return (
                this.logger.info(
                  `defineTopPadding: for ${e.id} with activeSkin ${t}`,
                ),
                n === b.c.Q3 && t === g.Stack_RS
              );
            }
            return !1;
          }
          ngOnDestroy() {
            this.onDestroy$$.next();
          }
          manipulateSkin(e) {
            const n = t.mapToClusterSkinData(e);
            this.activeClusterSkin$$.next(n);
          }
        }
        return (
          (t.ɵprov = h.bc({
            factory: function () {
              return new t(h.cc(i.a), h.cc(p.a), h.cc(d.a));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    hN4M: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return x;
      }),
        n.d(e, "b", function () {
          return O;
        }));
      var i = n("Yi6/"),
        a = n("YEFf"),
        l = n("xVbo"),
        o = n("kuMc"),
        s = n("YtkY"),
        r = n("jIqt"),
        u = n("Ohay"),
        c = n("w0kG"),
        p = n("P1io"),
        b = n("axGb"),
        h = n("2Uk/"),
        d = n("C05f"),
        g = n("HM3f"),
        m = n("xOC8"),
        f = n("nbmZ"),
        y = n("kZht"),
        S = n("yNay"),
        v = n("1VvW");
      const x = {
        Init: { path: "init", skipHistory: !0 },
        Menu: { path: "menu", skipHistory: !0, isLeftDrawer: !0 },
        NotConnected: { path: "not-connected", skipHistory: !0 },
        Callstack: {
          path: "callstack",
          clearHistory: !0,
          mainScreen: !0,
          skipHistory: !0,
        },
        ActiveCall: { path: "active-call", skipHistory: !0 },
        TogglePhone: { path: "toggle-phone", skipHistory: !0 },
        Favorites: { path: "favorites" },
        AsiActiveCall: { path: "asi-active-call", skipHistory: !0 },
        ECallOPR: { path: "ecall-opr", skipHistory: !0 },
        Privacy: { path: "main-privacy", skipHistory: !0 },
      };
      let O = (() => {
        class t extends i.i {
          constructor(t, e, n, a, l, o) {
            (super(
              e,
              t.getLogger("phone.FpkPhoneRoutingService"),
              p.o,
              x,
              null,
              i.Bb.PHONE,
            ),
              (this.phoneService = n),
              (this.asiService = a),
              (this.fpkContextService = l),
              (this.eCallOPRService = o),
              (this._isCallActive = !1),
              (this.isSpiCallActive = !1),
              (this.isECallOPRActive = !1),
              (this.lastActiveContext = x.Callstack),
              (this.isCallActive$ = new d.a(this.isCallActive)),
              this.subscribeToPhoneInitialized(),
              this.subscribeToPhoneActive(),
              this.subscribeToActiveCall(),
              this.subscribeToAsiActiveCall(),
              this.subscribeToECallOPR(),
              this.initPrivacyRouting());
          }
          get isCallActive() {
            return this._isCallActive;
          }
          set isCallActive(t) {
            ((this._isCallActive = t),
              this.isCallActive$.next(this._isCallActive));
          }
          enterContext() {
            return this.goTo(
              this.isECallOPRActive
                ? x.ECallOPR
                : this.isCallActive || this.isSpiCallActive
                  ? this.isCallActive
                    ? x.ActiveCall
                    : x.AsiActiveCall
                  : this.lastActiveContext
                    ? this.lastActiveContext
                    : x.Callstack,
            );
          }
          handleGoToFailure(t) {
            switch (t) {
              case x.NotConnected:
                return (
                  this.logger.info(
                    'Denied access to "not-connected", redirecting to "init"',
                  ),
                  this.goTo(x.Init)
                );
              case x.Callstack:
                return (
                  this.logger.info(
                    'Denied access to "call-history", redirecting to "not-connected"',
                  ),
                  this.goTo(x.NotConnected)
                );
              case x.Menu:
                return (
                  this.logger.info(
                    'Denied access to "menu", redirecting to "not-connected"',
                  ),
                  this.goTo(x.NotConnected)
                );
              case x.ActiveCall:
                return (
                  this.logger.info(
                    'Denied access to "active-call", redirecting to "call-history"',
                  ),
                  this.goTo(x.Callstack)
                );
              case x.Favorites:
                return (
                  this.logger.info(
                    'Denied access to "favorites", redirecting to "not-connected"',
                  ),
                  this.goTo(x.NotConnected)
                );
              default:
                this.logger.warn(
                  "handleGoToFailure() has no alternative routing for the intend: ",
                  t,
                );
            }
            return super.handleGoToFailure(t);
          }
          subscribeToPhoneInitialized() {
            this.phoneService.initialized$
              .pipe(
                Object(l.a)((t) => !t),
                Object(o.a)(this.destroy$$),
              )
              .subscribe(() => {
                this.isContextActive && this.goTo(x.Init);
              });
          }
          subscribeToPhoneActive() {
            const t = this.events$.pipe(
              Object(s.a)((t) => t instanceof i.Zb),
              Object(r.a)(!1),
              Object(u.a)(),
            );
            this.phoneService.phones$
              .pipe(
                Object(s.a)((t) => !!t.focusDevice),
                Object(u.a)(),
                Object(c.a)(t, this.isCallActive$),
              )
              .pipe(Object(o.a)(this.destroy$$))
              .subscribe(([t, e, n]) => {
                this.isContextActive &&
                  (e
                    ? this.logger.info(
                        "subscribeToPhoneActive: ignoring update of focus device because routing is active",
                        t,
                      )
                    : n
                      ? this.logger.info(
                          "subscribeToPhoneActive: ignoring update of focus device because an active phone call exists.",
                        )
                      : t
                        ? this.enterContext()
                        : this.goTo(x.NotConnected));
              });
          }
          subscribeToActiveCall() {
            let t = [];
            this.phoneService.calls$
              .pipe(Object(o.a)(this.destroy$$))
              .subscribe((e) => {
                let n = !1;
                const i = e.filter((t) => t.userApproved);
                for (const a of i) {
                  const e = t.find((t) => t.id === a.id);
                  (e && e.userApproved) || (n = !0);
                }
                ((t = e),
                  (this.isCallActive = i.length > 0),
                  this.isContextActive &&
                    n &&
                    e.focusCall &&
                    (this.logger.info(
                      `Navigating to "active-call" due to new active call ${e.focusCall.id}`,
                    ),
                    this.goTo(x.ActiveCall)));
              });
          }
          subscribeToAsiActiveCall() {
            this.asiService.asiCallActive$
              .pipe(Object(u.a)(), Object(o.a)(this.destroy$$))
              .subscribe((t) => {
                ((this.isSpiCallActive = t),
                  this.isContextActive && t
                    ? (this.logger.info(
                        'Navigating to "asi-active-call" due to new active ASI call',
                      ),
                      this.goTo(x.AsiActiveCall))
                    : this.logger.info(
                        'Not Navigating to "asi-active-call", because Phone is not active context or no asi phone call active',
                      ));
              });
          }
          subscribeToECallOPR() {
            this.eCallOPRService.eCallOPRType$
              .pipe(
                Object(s.a)((t) => null != t),
                Object(u.a)(),
                Object(o.a)(this.destroy$$),
              )
              .subscribe((t) => {
                ((this.isECallOPRActive = t),
                  this.logger.info(
                    `ECall/OPR is now ${t ? "active" : "inactive"}, contextActive:`,
                    this.isContextActive,
                  ),
                  this.isContextActive && this.enterContext());
              });
          }
          handleMenuKeyDown() {
            const t = this.currentRouteSnapshot;
            return (
              this.logger.info("handleMenuKeyDown() active snapshot", t),
              t === x.Menu ? this.goBack() : this.goTo(x.Menu)
            );
          }
          setActiveContext(t) {
            return (
              this.logger.info(
                "setActiveContext() updating to",
                Object(i.kd)(t),
              ),
              (this.lastActiveContext = t),
              this.goTo(t)
            );
          }
          getLastActiveContext() {
            return this.lastActiveContext;
          }
          initPrivacyRouting() {
            Object(g.b)(
              this.phoneService.focusPhoneConfidentialModeActive$,
              this.currentRoute$,
            )
              .pipe(Object(o.a)(this.destroy$$))
              .subscribe(([t, e]) => {
                t &&
                  ((x.Callstack !== e && x.Favorites !== e) ||
                    (this.logger.info(
                      "initPrivacyRouting: privacy is active and current route is affected, route:",
                      e,
                    ),
                    this.tryGoTo(x.Privacy)));
              });
          }
          isRedirectionSuitable() {
            return this.fpkContextService.isSynchronizedContext(f.a.Phone);
          }
        }
        return (
          (t.ɵprov = y.bc({
            factory: function () {
              return new t(
                y.cc(S.a),
                y.cc(v.m),
                y.cc(a.c),
                y.cc(b.a),
                y.cc(m.a),
                y.cc(h.a),
              );
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    pR0N: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return f;
      }),
        n.d(e, "b", function () {
          return y;
        }));
      var i = n("YtkY"),
        a = n("Ohay"),
        l = n("kuMc"),
        o = n("J+dc"),
        s = n("xVbo"),
        r = n("qMQG"),
        u = n("Yi6/"),
        c = n("P1io"),
        p = n("I/e0"),
        b = n("nbmZ"),
        h = n("xOC8"),
        d = n("kZht"),
        g = n("yNay"),
        m = n("1VvW");
      const f = {
        Init: { path: "init" },
        Error: { path: "error" },
        MapMain: {
          path: "map",
          mainScreen: !0,
          clearHistory: !0,
          speechDomain: r.a.MAP,
          background: u.k.Transparent,
        },
        Favorites: { path: "favorites", clearHistory: !0 },
        LastDestinations: { path: "last-destinations", clearHistory: !0 },
        RightDrawerMenu: { path: "right-drawer", isRightDrawer: !0 },
        MainMenu: {
          path: "main-menu",
          isLeftDrawer: !0,
          children: {
            MapOrientation: { path: "map-orientation" },
            AutoZoom: { path: "auto-zoom" },
            MapContent: { path: "map-content" },
          },
        },
      };
      let y = (() => {
        class t extends u.i {
          constructor(t, e, n, l) {
            (super(
              e,
              t.getLogger("navi.FpkNaviRoutingService"),
              c.m,
              f,
              r.a.NAVI,
              u.Bb.NAV,
            ),
              (this.fpkContextService = l),
              (this.lastActiveContext = f.MapMain),
              (this.naviState$ = n.state$.pipe(
                Object(i.a)((t) => p.a.stateType(t)),
                Object(a.a)(),
              )),
              this.initAnyChangeSubscription(),
              this.initRoutingMethodSubscription());
          }
          enterContext() {
            return new Promise((t, e) => {
              this.naviState$
                .pipe(Object(l.a)(this.destroy$$), Object(o.a)(1))
                .subscribe((n) => {
                  this.enterNaviContext(!1, n)
                    .then((e) => t(e))
                    .catch((t) => e(t));
                });
            });
          }
          updateAndGoToActiveContext(t) {
            return (
              this.logger.info("updateAndGoToActiveContext", Object(u.kd)(t)),
              this.lastActiveContext === t
                ? this.goBack(t)
                : ((this.lastActiveContext = t), this.goToDestination(!0, t))
            );
          }
          getLastActiveContext() {
            return this.lastActiveContext;
          }
          toggleCombiMenu() {
            const t = this.currentRouteSnapshot;
            return t
              ? t === f.MainMenu
                ? this.goBack().then((t) =>
                    !1 === t
                      ? (this.logger.warn(
                          "toggleCombiMenu: could not go back, enterContext instead.",
                        ),
                        this.enterContext())
                      : t,
                  )
                : this.isSubRoute(f.MainMenu, t)
                  ? (this.logger.info(
                      "toggleCombiMenu() menu-button pressed in sub menu, trying to navigate back to context:",
                      this.lastActiveContext,
                    ),
                    this.goBack(this.lastActiveContext))
                  : new Promise((t, e) => {
                      this.naviState$
                        .pipe(Object(l.a)(this.destroy$$), Object(o.a)(1))
                        .subscribe((n) => {
                          n === p.b.Initialized
                            ? this.goTo(f.MainMenu)
                                .then((e) => t(e))
                                .catch((t) => e(t))
                            : t(!1);
                        });
                    })
              : (this.logger.error(
                  "toggleCombiMenu: Could not toggle combi menu due to invalid current route",
                ),
                Promise.resolve(!1));
          }
          initAnyChangeSubscription() {
            this.naviState$.pipe(Object(l.a)(this.destroy$$)).subscribe((t) => {
              this.enterNaviContext(!0, t);
            });
          }
          enterNaviContext(t, e) {
            return this.goToScreenAccordingToStateType(t, e);
          }
          goToScreenAccordingToStateType(t, e) {
            let n;
            switch (e) {
              case p.b.Initialized:
                n = this.lastActiveContext;
                break;
              case p.b.Initializing:
                n = f.Init;
                break;
              case p.b.Error:
                n = f.Error;
            }
            return n
              ? this.goToDestination(t, n)
              : Promise.reject(new Error("wrong state"));
          }
          goToDestination(t, e) {
            return t ? this.tryGoTo(e) : this.goTo(e);
          }
          initRoutingMethodSubscription() {
            this.events$
              .pipe(
                Object(s.a)((t) => t instanceof u.Xb),
                Object(u.Xc)(this.logger, "initRoutingMethodSubscription"),
                Object(l.a)(this.destroy$$),
              )
              .subscribe((t) => (this.lastRoutingMethod = t.method));
          }
          getLastRoutingMethod() {
            return this.lastRoutingMethod;
          }
          isRedirectionSuitable() {
            return this.fpkContextService.isSynchronizedContext(b.a.Navi);
          }
          openRightDrawerMenu() {
            return this.currentRouteSnapshot
              ? new Promise((t, e) => {
                  this.naviState$
                    .pipe(Object(l.a)(this.destroy$$), Object(o.a)(1))
                    .subscribe((n) => {
                      n === p.b.Initialized
                        ? this.goTo(f.RightDrawerMenu)
                            .then((e) => t(e))
                            .catch((t) => e(t))
                        : t(!1);
                    });
                })
              : (this.logger.error(
                  "openRightDrawerMenu: Could not open right drawer menu due to invalid current route",
                ),
                Promise.resolve(!1));
          }
          closeRightDrawerMenu() {
            return this.currentRouteSnapshot === f.RightDrawerMenu
              ? this.goBack().then(
                  (t) =>
                    t ||
                    (this.logger.warn(
                      "closeRightDrawerMenu: could not go back, enterContext instead.",
                    ),
                    this.enterContext()),
                )
              : (this.logger.error(
                  "closeRightDrawerMenu: Could not close right drawer menu due to invalid current route",
                ),
                Promise.resolve(!1));
          }
        }
        return (
          (t.ɵprov = d.bc({
            factory: function () {
              return new t(d.cc(g.a), d.cc(m.m), d.cc(p.a), d.cc(h.a));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    sH6Y: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return l;
        }));
      var i = n("kZht"),
        a =
          (n("Ftf+"),
          n("I3ve"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                "[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}",
              ],
            ],
            data: {},
          }));
      function l(t) {
        return i.ac(0, [i.Mb(null, 0)], null, null);
      }
    },
    sqIm: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return x;
      }),
        n.d(e, "b", function () {
          return O;
        }));
      var i = n("OPvi"),
        a = n("Ngpk"),
        l = n("P1io"),
        o = n("Yi6/"),
        s = n("TLy2"),
        r = n("YtkY"),
        u = n("J+dc"),
        c = n("kuMc"),
        p = n("xVbo"),
        b = n("Ohay"),
        h = n("ROBh"),
        d = n("HM3f"),
        g = n("xOC8"),
        m = n("nbmZ"),
        f = (n("FNcX"), n("kZht")),
        y = n("yNay"),
        S = n("1VvW"),
        v = n("dQg2");
      const x = {
        Init: { path: "init", clearHistory: !0 },
        NPS: { path: "nps" },
        OnlineError: { path: "online-error" },
        List: { path: "list", mainScreen: !0, clearHistory: !0 },
        SourceSelection: {
          path: "source-selection",
          skipHistory: !0,
          isLeftDrawer: !0,
        },
      };
      let O = (() => {
        class t extends o.i {
          constructor(t, e, n, i, a) {
            (super(
              e,
              t.getLogger("radio.FpkRadioRoutingService"),
              l.p,
              x,
              null,
              o.Bb.TUNER,
            ),
              (this.radioService = n),
              (this.fpkContextService = i),
              (this.tunerService = a),
              this.subscribeToRadioAvailable(),
              this.subscribeToOnlineRadioState(),
              this.subscribeToSourceType());
          }
          enterContext() {
            return this.goToList();
          }
          closeSourceSelection() {
            return this.goBack();
          }
          handleGoToFailure(t) {
            switch (t) {
              case x.NPS:
              case x.List:
              case x.OnlineError:
                return this.radioService.radioAvailable$
                  .pipe(
                    Object(s.a)((t) =>
                      this.radioService.activeSource$.pipe(
                        Object(r.a)(
                          (t) =>
                            !!t &&
                            t.type === a.g.ONLINERADIO &&
                            (t.sourceState === a.f.ERROR ||
                              t.sourceState === a.f.LOADING),
                        ),
                        Object(r.a)((e) => [t, e]),
                      ),
                    ),
                    Object(u.a)(1),
                    Object(s.a)(([e, n]) => {
                      let i;
                      return e
                        ? ((i = n ? x.OnlineError : x.List),
                          i === t
                            ? (this.logger.warn(
                                'handleGoToFailure: Requested redirection to same route as intended - resolve to "false" to prevent an infinite loop',
                                Object(o.kd)(i),
                              ),
                              Object(h.a)(!1))
                            : (this.logger.info(
                                `Denied access to "${Object(o.kd)(t)}", redirecting to "${Object(o.kd)(i)}"`,
                              ),
                              this.goTo(i)))
                        : Object(h.a)(!0);
                    }),
                  )
                  .toPromise();
            }
            return super.handleGoToFailure(t);
          }
          goToList() {
            return this.goTo(x.List);
          }
          subscribeToRadioAvailable() {
            this.radioService.radioAvailable$
              .pipe(Object(c.a)(this.destroy$$))
              .subscribe((t) => {
                t
                  ? (this.logger.info(
                      `radioAvailable$: ${t}, go to List screen`,
                    ),
                    this.tryGoTo(x.List))
                  : (this.logger.info(
                      `radioAvailable$: ${t}, go to Init screen`,
                    ),
                    this.tryGoTo(x.Init));
              });
          }
          subscribeToOnlineRadioState() {
            Object(d.b)(
              this.currentRoute$,
              this.radioService.activeSource$.pipe(
                Object(p.a)(o.wd),
                Object(o.fd)("sourceState"),
              ),
            )
              .pipe(
                Object(p.a)(([t, e]) => e.type === a.g.ONLINERADIO),
                Object(r.a)(([t, e]) =>
                  !this.isPlayerContext(t.path) ||
                  (e.sourceState !== a.f.ERROR && e.sourceState !== a.f.LOADING)
                    ? t.path === x.OnlineError.path &&
                      e.sourceState === a.f.ACTIVE
                      ? (this.logger.info(
                          `subscribeToOnlineRadioState: go to List Screen (sourceState: ${e.sourceState}, path: ${t.path})`,
                        ),
                        x.List)
                      : void 0
                    : (this.logger.info(
                        `subscribeToOnlineRadioState: go to Error Screen (sourceState: ${e.sourceState}, path: ${t.path})`,
                      ),
                      x.OnlineError),
                ),
                Object(p.a)(o.wd),
                Object(o.pd)(
                  this.logger,
                  "subscribeToOnlineRadioState route to: ",
                ),
                Object(c.a)(this.destroy$$),
              )
              .subscribe((t) => this.tryGoTo(t));
          }
          isPlayerContext(t) {
            return t === x.List.path || t === x.NPS.path;
          }
          subscribeToSourceType() {
            Object(d.b)(
              this.radioService.activeSource$.pipe(
                Object(p.a)(o.wd),
                Object(p.a)((t) => t.type !== a.g.ONLINERADIO),
              ),
              this.tunerService.activeTuner$.pipe(Object(o.fd)("id")),
            )
              .pipe(
                Object(p.a)(([t, e]) => !!t.player && t.player.id === e.id),
                Object(r.a)(([t]) => t.type),
                Object(b.a)(),
                Object(c.a)(this.destroy$$),
              )
              .subscribe(() => {
                (this.logger.info("subscribeToSourceType route to list"),
                  this.tryGoTo(x.List));
              });
          }
          isRedirectionSuitable() {
            return this.fpkContextService.isSynchronizedContext(m.a.Audio);
          }
        }
        return (
          (t.ɵprov = f.bc({
            factory: function () {
              return new t(
                f.cc(y.a),
                f.cc(S.m),
                f.cc(i.a),
                f.cc(g.a),
                f.cc(v.a),
              );
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    t3cO: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return d;
      });
      var i = n("HM3f"),
        a = n("YtkY"),
        l = n("Ohay"),
        o = n("8j5Y"),
        s = n("jIqt"),
        r = n("XbFn"),
        u = (n("cjBG"), n("vAKm"), n("lhqm"), n("bmi2"), n("Yi6/")),
        c = n("daJa"),
        p = n("YUff"),
        b = n("kZht"),
        h = n("yNay");
      let d = (() => {
        class t {
          constructor(t, e) {
            ((this.asterixMediaMetadataService = t),
              (this.logger = e.getLogger(
                "asterix-media.AsterixMediaStateService",
              )));
            const n = this.asterixMediaMetadataService.session$.pipe(
                Object(a.a)((t) => (t ? t.connectionState : r.b.UNDEFINED)),
                Object(l.a)(),
                Object(o.a)((t) =>
                  this.logger.info(
                    "connectionState$: Received updated connection state",
                    t,
                  ),
                ),
              ),
              p = this.asterixMediaMetadataService.player$.pipe(
                Object(a.a)((t) => (t ? t.playbackState : r.a.STATENONE)),
                Object(l.a)(),
                Object(o.a)((t) =>
                  this.logger.info(
                    "playbackState$: Received updated playback state",
                    t,
                  ),
                ),
              );
            this.asterixMediaState$ = Object(i.b)(n, p).pipe(
              Object(a.a)(([t, e]) =>
                t !== r.b.CONNECTED
                  ? c.a.Loading
                  : e === r.a.STATEERROR
                    ? c.a.Error
                    : c.a.Player,
              ),
              Object(l.a)(),
              Object(o.a)((t) =>
                this.logger.info(
                  "asterixMediaState$: Updated current asterix media state",
                  t,
                ),
              ),
              Object(s.a)(c.a.Loading),
              Object(u.Kd)(),
            );
          }
        }
        return (
          (t.ɵprov = b.bc({
            factory: function () {
              return new t(b.cc(p.a), b.cc(h.a));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    vf09: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "FpkModuleNgFactory", function () {
          return la;
        }));
      var i = n("kZht"),
        a = n("hN4M"),
        l = n("G7MO"),
        o = n("sqIm"),
        s = n("Yi6/"),
        r = n("P1io"),
        u = n("yNay"),
        c = n("1VvW");
      const p = { Main: { path: "", mainScreen: !0, background: s.k.Opaque } };
      let b = (() => {
        class t extends s.i {
          constructor(t, e) {
            super(
              e,
              t.getLogger("fpk.FpkNativeRoutingService"),
              r.l,
              p,
              null,
              s.Bb.DEFAULT_CONTEXT,
            );
          }
        }
        return (
          (t.ɵprov = i.bc({
            factory: function () {
              return new t(i.cc(u.a), i.cc(c.m));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
      var h = n("pR0N"),
        d = n("GCsn"),
        g = n("AOb9");
      const m = { service: b, context: r.l },
        f = { service: a.b, context: r.o },
        y = { service: h.b, context: r.m },
        S = { service: o.b, context: r.p },
        v = { service: l.b, context: r.k },
        x = { service: d.b, context: r.i },
        O = { service: g.b, context: r.j };
      class C {}
      var P = n("C9Ky"),
        _ = n("Es8C"),
        k = n("fu7d"),
        A = n("bou3"),
        N = n("A66t"),
        T = n("YEFf"),
        M = n("Fok3"),
        D = n("LELx"),
        $ = n("o/5+"),
        w = n("8TlW"),
        L = n("Xo58"),
        F = n("m3Ja"),
        R = n("r+e+"),
        I = n("ijxY"),
        E = n("bmFL"),
        j = n("2QJK"),
        B = n("UbWD"),
        V = n("1qmX"),
        K = n("Pqed"),
        H = n("odRV"),
        U = n("O82V"),
        z = n("Eln4"),
        G = n("sg2e"),
        Y = n("ZUXc"),
        q = n("nSAP"),
        Z = n("M+lD"),
        W = n("8yWk"),
        X = n("v98a"),
        J = n("ENSU"),
        Q = n("3bpu"),
        tt = n("An66"),
        et = n("ROBh"),
        nt = n("TLy2"),
        it = n("YtkY"),
        at = n("w0kG"),
        lt = n("jIqt"),
        ot = n("J+dc"),
        st = n("axGb"),
        rt = (function (t) {
          return (
            (t[(t.Connected = 0)] = "Connected"),
            (t[(t.NotAvailable = 1)] = "NotAvailable"),
            (t[(t.CarPlayActive = 2)] = "CarPlayActive"),
            (t[(t.ConfidentialModeActive = 3)] = "ConfidentialModeActive"),
            t
          );
        })({});
      class ut {
        constructor(t, e, n, i) {
          ((this.phoneService = t),
            (this.extendedPopupManager = e),
            (this.phoneAsiService = n),
            (this.popupManager = i),
            (this.context = s.s.Phone),
            (this.popupId = s.Ob.POPUP_FPK_PHONE_CALLSTACK),
            (this.popupType = s.Rb.Unstyled),
            (this.phoneStateEnum = rt));
        }
        ngOnInit() {
          this.phoneState$ = this.phoneService.initialized$.pipe(
            Object(nt.a)((t) =>
              t
                ? this.phoneService.phones$.pipe(
                    Object(it.a)((t) => t.focusDevice),
                  )
                : Object(et.a)(void 0),
            ),
            Object(at.a)(
              this.phoneAsiService.appleCarPlayActive$.pipe(Object(lt.a)(!1)),
            ),
            Object(at.a)(
              this.phoneService.focusPhoneConfidentialModeActive$.pipe(
                Object(lt.a)(!1),
              ),
            ),
            Object(it.a)(([[t, e], n]) =>
              e
                ? rt.CarPlayActive
                : n
                  ? rt.ConfidentialModeActive
                  : t
                    ? rt.Connected
                    : rt.NotAvailable,
            ),
          );
        }
        backKeyDown() {
          this.popupManager
            .isActive(this.popupId)
            .pipe(Object(ot.a)(1))
            .toPromise()
            .then((t) => {
              !0 === t && this.extendedPopupManager.unrequest(this.popupId);
            });
        }
      }
      var ct = i.wb({
        encapsulation: 0,
        styles: [
          [
            '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;justify-content:center;background-color:#000;width:100%}.callstack-content[_ngcontent-%COMP%]{width:calc(100% - 32px);height:431px}.callstack-content[_ngcontent-%COMP%], .not-available[_ngcontent-%COMP%]{display:flex;flex-direction:column}.not-available[_ngcontent-%COMP%]{justify-content:center;height:100%}.not-available__message[_ngcontent-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:40px;text-align:center}.component-layout-arabic[_nghost-%COMP%]   .not-available__message[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .not-available__message[_ngcontent-%COMP%]{direction:rtl}.component-layout-latin[_nghost-%COMP%]   .not-available__message[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .not-available__message[_ngcontent-%COMP%]{direction:ltr}',
          ],
        ],
        data: {
          animation: [
            {
              type: 7,
              name: "childAnim",
              definitions: [
                {
                  type: 1,
                  expr: ":leave",
                  animation: {
                    type: 11,
                    selector: ":leave",
                    animation: { type: 9, options: null },
                    options: null,
                  },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
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
              2,
              "au3-fpk-callstack-view",
              [["id", ""]],
              null,
              [["global", "keydown.KeyH"]],
              function (t, e, n) {
                var a = !0;
                return (
                  "global:keydown.KeyH" === e &&
                    (a = !1 !== i.Nb(t, 2).keyDown() && a),
                  a
                );
              },
              _.b,
              _.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(2, 180224, null, 0, N.a, [T.c, M.a, u.a], null, null),
          ],
          function (t, e) {
            t(e, 1, 0, "");
          },
          null,
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
              8,
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
              2,
              "au3-fpk-title-line",
              [
                ["id", ""],
                ["primaryDeveloperText", "Phone"],
                ["secondaryDeveloperText", "Note"],
              ],
              [[2, "priority-shrink", null]],
              null,
              null,
              D.b,
              D.a,
            )),
            i.xb(
              2,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              3,
              49152,
              null,
              0,
              $.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (t()(),
            i.yb(
              4,
              0,
              null,
              null,
              4,
              "div",
              [["class", "not-available"]],
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
              "div",
              [["class", "not-available__message"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              6,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "FpkCarPlayActive"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              w.b,
              w.a,
            )),
            i.xb(
              7,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              8,
              245760,
              null,
              0,
              L.a,
              [[6, k.a], F.a, i.h, i.l, i.D, [2, R.a], [2, I.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 2, 0, ""),
              t(e, 3, 0, "Phone", "Note"),
              t(e, 7, 0, "FpkCarPlayActive"),
              t(
                e,
                8,
                0,
                "Apple CarPlay ist aktiv.\n Funktion nicht verf\xfcgbar",
                "FpkCarPlayActive",
                5,
              ));
          },
          function (t, e) {
            (t(e, 1, 0, i.Nb(e, 3).isPriorityShrink),
              t(
                e,
                6,
                0,
                i.Nb(e, 8).backgroundColor,
                i.Nb(e, 8).fixedNumberOfLines,
                i.Nb(e, 8).mayContainLatinCharsForArabic,
                i.Nb(e, 8).shortenWithEllipsisForArabic,
              ));
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
              8,
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
              2,
              "au3-fpk-title-line",
              [
                ["id", ""],
                ["primaryDeveloperText", "Phone"],
                ["secondaryDeveloperText", "Note"],
              ],
              [[2, "priority-shrink", null]],
              null,
              null,
              D.b,
              D.a,
            )),
            i.xb(
              2,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              3,
              49152,
              null,
              0,
              $.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (t()(),
            i.yb(
              4,
              0,
              null,
              null,
              4,
              "div",
              [["class", "not-available"]],
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
              "div",
              [["class", "not-available__message"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              6,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "FpkConfidentialModeActive"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              w.b,
              w.a,
            )),
            i.xb(
              7,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              8,
              245760,
              null,
              0,
              L.a,
              [[6, k.a], F.a, i.h, i.l, i.D, [2, R.a], [2, I.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 2, 0, ""),
              t(e, 3, 0, "Phone", "Note"),
              t(e, 7, 0, "FpkConfidentialModeActive"),
              t(
                e,
                8,
                0,
                "Privacy mode active",
                "FpkConfidentialModeActive",
                5,
              ));
          },
          function (t, e) {
            (t(e, 1, 0, i.Nb(e, 3).isPriorityShrink),
              t(
                e,
                6,
                0,
                i.Nb(e, 8).backgroundColor,
                i.Nb(e, 8).fixedNumberOfLines,
                i.Nb(e, 8).mayContainLatinCharsForArabic,
                i.Nb(e, 8).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
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
              8,
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
              2,
              "au3-fpk-title-line",
              [
                ["id", ""],
                ["primaryDeveloperText", "Phone"],
                ["secondaryDeveloperText", "Note"],
              ],
              [[2, "priority-shrink", null]],
              null,
              null,
              D.b,
              D.a,
            )),
            i.xb(
              2,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              3,
              49152,
              null,
              0,
              $.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (t()(),
            i.yb(
              4,
              0,
              null,
              null,
              4,
              "div",
              [["class", "not-available"]],
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
              "div",
              [["class", "not-available__message"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              6,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "NoDeviceConnected"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              w.b,
              w.a,
            )),
            i.xb(
              7,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              8,
              245760,
              null,
              0,
              L.a,
              [[6, k.a], F.a, i.h, i.l, i.D, [2, R.a], [2, I.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 2, 0, ""),
              t(e, 3, 0, "Phone", "Note"),
              t(e, 7, 0, "NoDeviceConnected"),
              t(
                e,
                8,
                0,
                "The phone is not yet ready.",
                "NoDeviceConnected",
                1,
              ));
          },
          function (t, e) {
            (t(e, 1, 0, i.Nb(e, 3).isPriorityShrink),
              t(
                e,
                6,
                0,
                i.Nb(e, 8).backgroundColor,
                i.Nb(e, 8).fixedNumberOfLines,
                i.Nb(e, 8).mayContainLatinCharsForArabic,
                i.Nb(e, 8).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function gt(t) {
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
              "au3-popup",
              [],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (t, e, n) {
                var a = !0;
                return (
                  "component:@a276-popup-animation.start" === e &&
                    (a = !1 !== i.Nb(t, 6).animationStart(n) && a),
                  "component:@a276-popup-animation.done" === e &&
                    (a = !1 !== i.Nb(t, 6).animationFinished(n) && a),
                  "popup:keydown.Backspace" === e &&
                    (a = !1 !== i.Nb(t, 6).handleHkBackEvent() && a),
                  a
                );
              },
              j.b,
              j.a,
            )),
            i.Sb(6144, null, B.a, null, [V.b]),
            i.Sb(6144, null, K.b, null, [V.b]),
            i.xb(3, 16384, null, 0, H.a, [i.l], null, null),
            i.Sb(512, null, U.a, U.a, []),
            i.Sb(131584, null, z.a, z.a, []),
            i.xb(
              6,
              4964352,
              null,
              1,
              V.b,
              [
                G.a,
                Y.a,
                U.a,
                i.l,
                q.a,
                c.m,
                Z.a,
                u.a,
                i.h,
                W.a,
                F.a,
                z.a,
                X.b,
                J.b,
                i.z,
                [2, Q.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                surviveScreenChange: [2, "surviveScreenChange"],
                animated: [3, "animated"],
                darkenBackground: [4, "darkenBackground"],
                dynamicSize: [5, "dynamicSize"],
                backButtonVisible: [6, "backButtonVisible"],
                hasText: [7, "hasText"],
              },
              null,
            ),
            i.Tb(603979776, 1, { dialogButtons: 1 }),
            (t()(),
            i.yb(
              8,
              0,
              null,
              1,
              11,
              "div",
              [["class", "callstack-content"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              9,
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
            i.xb(
              10,
              16384,
              null,
              0,
              tt.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            i.Pb(131072, tt.b, [i.h]),
            (t()(), i.hb(16777216, null, null, 1, null, pt)),
            i.xb(
              13,
              278528,
              null,
              0,
              tt.p,
              [i.P, i.L, tt.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, bt)),
            i.xb(
              15,
              278528,
              null,
              0,
              tt.p,
              [i.P, i.L, tt.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, ht)),
            i.xb(
              17,
              278528,
              null,
              0,
              tt.p,
              [i.P, i.L, tt.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, dt)),
            i.xb(19, 16384, null, 0, tt.q, [i.P, i.L, tt.o], null, null),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 6, 0, n.popupId, n.popupType, !0, !0, !0, !1, !1, !1),
              t(e, 10, 0, i.Yb(e, 10, 0, i.Nb(e, 11).transform(n.phoneState$))),
              t(e, 13, 0, n.phoneStateEnum.Connected),
              t(e, 15, 0, n.phoneStateEnum.CarPlayActive),
              t(e, 17, 0, n.phoneStateEnum.ConfidentialModeActive));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              i.Nb(e, 6).popupAnimBinding,
              i.Nb(e, 6).animated,
              i.Nb(e, 6).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      const mt = s.gb.POPUP;
      class ft {
        constructor(t) {
          ((this.popupManager = t),
            (this.PopupType = s.Rb),
            (this.PopupIds = s.Ob));
        }
      }
      var yt = n("I3ve"),
        St = i.wb({ encapsulation: 2, styles: [], data: {} });
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
              2,
              "au3-fpk-callstack",
              [],
              [
                [40, "@childAnim", 0],
                [8, "className", 0],
              ],
              [["popup", "keydown.Backspace"]],
              function (t, e, n) {
                var a = !0;
                return (
                  "popup:keydown.Backspace" === e &&
                    (a = !1 !== i.Nb(t, 2).backKeyDown() && a),
                  a
                );
              },
              gt,
              ct,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(2, 114688, null, 0, ut, [T.c, Y.a, st.a, G.a], null, null),
          ],
          function (t, e) {
            (t(e, 1, 0, e.component.PopupIds.POPUP_FPK_PHONE_CALLSTACK),
              t(e, 2, 0));
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 2).childAnimBinding, i.Nb(e, 2).context);
          },
        );
      }
      function xt(t) {
        return i.ac(
          2,
          [
            (t()(), i.hb(16777216, null, null, 2, null, vt)),
            i.xb(
              1,
              16384,
              null,
              0,
              tt.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            i.Pb(131072, tt.b, [i.h]),
          ],
          function (t, e) {
            var n = e.component;
            t(
              e,
              1,
              0,
              i.Yb(
                e,
                1,
                0,
                i
                  .Nb(e, 2)
                  .transform(
                    n.popupManager.isActive(
                      n.PopupIds.POPUP_FPK_PHONE_CALLSTACK,
                    ),
                  ),
              ),
            );
          },
          null,
        );
      }
      function Ot(t) {
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
              "au3-popups-fpk",
              [],
              null,
              null,
              null,
              xt,
              St,
            )),
            i.xb(1, 49152, null, 0, ft, [G.a], null, null),
            i.Sb(256, null, yt.a, mt, []),
          ],
          null,
          null,
        );
      }
      var Ct = i.ub("au3-popups-fpk", ft, Ot, {}, {}, []),
        Pt = n("l9Gk"),
        _t = n("6Yfd"),
        kt = n("t/1Q"),
        At = n("XGhq"),
        Nt = n("Ohay"),
        Tt = n("SAv1"),
        Mt = n("nbmZ");
      class Dt {
        constructor(t) {
          this.fpkStageService = t;
        }
        get isSmall() {
          return this.stage === Mt.c.Small;
        }
        get isBig() {
          return this.stage === Mt.c.Large;
        }
        ngOnInit() {
          this.subscription = this.fpkStageService.currentStage$
            .pipe(Object(Nt.a)())
            .subscribe((t) => (this.stage = t));
        }
        ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }
      var $t = n("CDcS"),
        wt = n("N2Hj"),
        Lt = n("2rvh"),
        Ft = n("Udyh"),
        Rt = n("qiAR"),
        It = n("007S"),
        Et = n("VcEz"),
        jt = n("oeT7"),
        Bt = n("oxWk"),
        Vt = n("Tr//"),
        Kt = n("FQEI"),
        Ht = n("bMuc"),
        Ut = n("ZIdM"),
        zt = n("6zvu"),
        Gt = n("OtM5"),
        Yt = n("y9xZ"),
        qt = n("+sw+"),
        Zt = n("BMrr"),
        Wt = n("IEns"),
        Xt = n("z6QT"),
        Jt = n("flsk"),
        Qt = n("evAh"),
        te = n("CpzC"),
        ee = n("0Bsn"),
        ne = n("5GjX"),
        ie = n("mYyF"),
        ae = n("aOG8"),
        le = n("Krzs"),
        oe = n("9ZFG"),
        se = n("xVbo"),
        re = n("kuMc"),
        ue = n("QQZH"),
        ce = n("/SfN");
      class pe {
        constructor(t, e, n) {
          ((this.popupManager = t),
            (this.guidanceService = e),
            (this.popupName =
              s.Ob.POPUP_FPK_NAV_DESTINATION_REPLACE_OR_STOPOVER),
            (this.toastMaxNumberOfStopover =
              s.Ob.POPUP_FPK_NAV_MAX_NUMBER_OF_STOPOVER_REACHED),
            (this.popupType = s.Rb.Unstyled),
            (this.Context = s.s),
            (this.destroy$$ = new ue.a(1)),
            (this.logger = n.getLogger("navi.FpkStopoverDialogComponent")),
            e.guidanceState$
              .pipe(
                Object(se.a)((t) => t === ce.c.Idle),
                Object(re.a)(this.destroy$$),
              )
              .subscribe(() => {
                (this.logger.info(
                  "constructor: Guidance not active anymore. Unrequesting popup",
                ),
                  t.unrequest(this.popupName, { action: s.Nb.CANCEL }));
              }));
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        replaceDestinationSelected() {
          this.popupManager.unrequest(
            s.Ob.POPUP_FPK_NAV_DESTINATION_REPLACE_OR_STOPOVER,
            { action: s.Nb.NO },
          );
        }
        addAsStopoverSelected() {
          this.popupManager.unrequest(
            s.Ob.POPUP_FPK_NAV_DESTINATION_REPLACE_OR_STOPOVER,
            { action: s.Nb.YES },
          );
        }
      }
      var be = i.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;box-sizing:border-box;font-size:37px;border-style:solid;border-image:linear-gradient(180deg,#8c9495,#2b2e2f) 1 2%;border-width:3px 2px 2px;background:linear-gradient(0deg,#0d0f0f,#292e2f)}.fpk-popup[_ngcontent-%COMP%], [_nghost-%COMP%]{display:inline-block}.fpk-popup[_ngcontent-%COMP%]{width:100%}.fpk-popup__content-area[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;justify-content:center;margin:12px 41px 10px}.fpk-popup__content[_ngcontent-%COMP%]{text-align:center;display:inline-block}.fpk-popup__separator[_ngcontent-%COMP%]{height:2px;background-color:#8e9090}.fpk-popup__button-area[_ngcontent-%COMP%]{text-align:left;display:block;margin:7px 41px 15px}.fpk-popup__button[_ngcontent-%COMP%]{padding:3px 16px}.component-layout-arabic[_nghost-%COMP%]   .fpk-popup__button[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .fpk-popup__button[_ngcontent-%COMP%]{text-align:right}.component-layout-latin[_nghost-%COMP%]   .fpk-popup__button[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .fpk-popup__button[_ngcontent-%COMP%]{text-align:left}",
          ],
        ],
        data: {
          animation: [
            {
              type: 7,
              name: "childAnim",
              definitions: [
                {
                  type: 1,
                  expr: ":leave",
                  animation: {
                    type: 11,
                    selector: ":leave",
                    animation: { type: 9, options: null },
                    options: null,
                  },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function he(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              41,
              "au3-popup",
              [["id", "FpkStopoverPopup"]],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (t, e, n) {
                var a = !0;
                return (
                  "component:@a276-popup-animation.start" === e &&
                    (a = !1 !== i.Nb(t, 7).animationStart(n) && a),
                  "component:@a276-popup-animation.done" === e &&
                    (a = !1 !== i.Nb(t, 7).animationFinished(n) && a),
                  "popup:keydown.Backspace" === e &&
                    (a = !1 !== i.Nb(t, 7).handleHkBackEvent() && a),
                  a
                );
              },
              j.b,
              j.a,
            )),
            i.Sb(6144, null, B.a, null, [V.b]),
            i.Sb(6144, null, K.b, null, [V.b]),
            i.xb(
              3,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(4, 16384, null, 0, H.a, [i.l], null, null),
            i.Sb(512, null, U.a, U.a, []),
            i.Sb(131584, null, z.a, z.a, []),
            i.xb(
              7,
              4964352,
              null,
              1,
              V.b,
              [
                G.a,
                Y.a,
                U.a,
                i.l,
                q.a,
                c.m,
                Z.a,
                u.a,
                i.h,
                W.a,
                F.a,
                z.a,
                X.b,
                J.b,
                i.z,
                [2, Q.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                context: [2, "context"],
                darkenBackground: [3, "darkenBackground"],
                backButtonVisible: [4, "backButtonVisible"],
                hasText: [5, "hasText"],
              },
              null,
            ),
            i.Tb(603979776, 1, { dialogButtons: 1 }),
            (t()(),
            i.yb(
              9,
              0,
              null,
              1,
              32,
              "div",
              [["class", "fpk-popup"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              10,
              0,
              null,
              null,
              3,
              "div",
              [["class", "fpk-popup__content-area"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              11,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "fpk-popup__content"],
                ["id", "FpkReplaceDestOrAddStopover"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              w.b,
              w.a,
            )),
            i.xb(
              12,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              13,
              245760,
              null,
              0,
              L.a,
              [[6, k.a], F.a, i.h, i.l, i.D, [2, R.a], [2, I.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (t()(),
            i.yb(
              14,
              0,
              null,
              null,
              0,
              "div",
              [["class", "fpk-popup__separator"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              15,
              0,
              null,
              null,
              26,
              "au3-list",
              [["class", "fpk-popup__button-area"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              wt.b,
              wt.a,
            )),
            i.Sb(6144, null, B.a, null, [Lt.a]),
            i.xb(17, 16384, null, 0, H.a, [i.l], null, null),
            i.xb(
              18,
              12828672,
              null,
              1,
              Lt.a,
              [
                [2, Ft.a],
                [2, yt.a],
                [8, null],
                [2, k.a],
                [2, Rt.a],
                [2, It.a],
                [2, Et.b],
                jt.i,
                i.z,
                i.h,
                u.a,
                Bt.a,
                Vt.a,
                [2, Kt.a],
                Q.a,
                [2, jt.a],
              ],
              {
                showCursor: [0, "showCursor"],
                showSeparators: [1, "showSeparators"],
              },
              null,
            ),
            i.Tb(603979776, 2, { template: 0 }),
            (t()(),
            i.yb(
              20,
              0,
              null,
              0,
              9,
              "au3-i18n-label",
              [
                ["class", "fpk-popup__button"],
                ["id", "FpkReplaceDestination"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "mib3Tap" === e &&
                    (i = !1 !== t.component.replaceDestinationSelected() && i),
                  i
                );
              },
              w.b,
              w.a,
            )),
            i.xb(
              21,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              22,
              245760,
              null,
              0,
              L.a,
              [[6, k.a], F.a, i.h, i.l, i.D, [2, R.a], [2, I.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            i.xb(23, 147456, null, 0, Ht.a, [i.l, i.z], null, null),
            i.xb(
              24,
              147456,
              null,
              0,
              Ut.a,
              [Ht.a, [2, Q.a], [2, k.a], u.a],
              null,
              null,
            ),
            i.xb(
              25,
              212992,
              null,
              0,
              zt.a,
              [
                u.a,
                Et.b,
                Ut.a,
                [2, Q.a],
                [2, k.a],
                [2, Gt.a],
                [2, Yt.a],
                [2, qt.a],
                i.z,
                Zt.a,
                i.l,
                [2, Wt.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.Sb(131584, null, Xt.a, Xt.a, [[3, Xt.a]]),
            i.xb(
              27,
              4407296,
              null,
              0,
              Jt.a,
              [
                i.l,
                Kt.a,
                i.h,
                Xt.a,
                [2, U.a],
                [2, Q.b],
                [2, Q.a],
                [2, z.a],
                [2, Qt.a],
              ],
              null,
              null,
            ),
            i.xb(
              28,
              147456,
              null,
              0,
              te.a,
              [
                [2, zt.a],
                [2, Gt.a],
                [2, ee.a],
                [2, Jt.a],
                [2, ne.b],
                i.l,
                ie.a,
                X.b,
              ],
              null,
              null,
            ),
            i.xb(
              29,
              147456,
              null,
              0,
              ae.a,
              [[2, Jt.a], [2, zt.a], [2, Et.b], le.a],
              null,
              null,
            ),
            (t()(),
            i.yb(
              30,
              0,
              null,
              0,
              11,
              "au3-i18n-label",
              [
                ["class", "fpk-popup__button"],
                ["id", "FpkAsStopover"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "mib3Tap" === e &&
                    (i = !1 !== t.component.addAsStopoverSelected() && i),
                  i
                );
              },
              w.b,
              w.a,
            )),
            i.xb(
              31,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              32,
              245760,
              null,
              0,
              L.a,
              [[6, k.a], F.a, i.h, i.l, i.D, [2, R.a], [2, I.a], [2, E.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            i.xb(33, 147456, null, 0, Ht.a, [i.l, i.z], null, null),
            i.xb(
              34,
              147456,
              null,
              0,
              Ut.a,
              [Ht.a, [2, Q.a], [2, k.a], u.a],
              null,
              null,
            ),
            i.xb(
              35,
              147456,
              null,
              0,
              Gt.a,
              [oe.a, i.h, u.a, [3, Gt.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            i.Pb(131072, tt.b, [i.h]),
            i.xb(
              37,
              212992,
              null,
              0,
              zt.a,
              [
                u.a,
                Et.b,
                Ut.a,
                [2, Q.a],
                [2, k.a],
                [2, Gt.a],
                [2, Yt.a],
                [2, qt.a],
                i.z,
                Zt.a,
                i.l,
                [2, Wt.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.Sb(131584, null, Xt.a, Xt.a, [[3, Xt.a]]),
            i.xb(
              39,
              4407296,
              null,
              0,
              Jt.a,
              [
                i.l,
                Kt.a,
                i.h,
                Xt.a,
                [2, U.a],
                [2, Q.b],
                [2, Q.a],
                [2, z.a],
                [2, Qt.a],
              ],
              null,
              null,
            ),
            i.xb(
              40,
              147456,
              null,
              0,
              te.a,
              [
                [2, zt.a],
                [2, Gt.a],
                [2, ee.a],
                [2, Jt.a],
                [2, ne.b],
                i.l,
                ie.a,
                X.b,
              ],
              null,
              null,
            ),
            i.xb(
              41,
              147456,
              null,
              0,
              ae.a,
              [[2, Jt.a], [2, zt.a], [2, Et.b], le.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n,
              a = e.component;
            (t(e, 3, 0, "FpkStopoverPopup"),
              t(e, 7, 0, a.popupName, a.popupType, a.Context.Navi, !0, !1, !1),
              t(e, 12, 0, "FpkReplaceDestOrAddStopover"),
              t(
                e,
                13,
                0,
                "Aktuelles Ziel ersetzen oder\nals Zwischenziel hinzuf\xfcgen?",
                "FpkReplaceDestOrAddStopover",
                2,
              ),
              t(e, 18, 0, !0, !1),
              t(e, 21, 0, "FpkReplaceDestination"),
              t(e, 22, 0, "Ziel ersetzen", "FpkReplaceDestination", 1),
              t(e, 25, 0),
              t(e, 27, 0),
              t(e, 31, 0, "FpkAsStopover"),
              t(e, 32, 0, "Als Zwischenziel", "FpkAsStopover", 1),
              t(
                e,
                35,
                0,
                !(
                  null !=
                    (n = i.Yb(
                      e,
                      35,
                      0,
                      i
                        .Nb(e, 36)
                        .transform(a.guidanceService.requestedDestinationList$),
                    )) && n.canAddStopover
                ),
                a.toastMaxNumberOfStopover,
              ),
              t(e, 37, 0),
              t(e, 39, 0));
          },
          function (t, e) {
            (t(
              e,
              0,
              0,
              i.Nb(e, 7).popupAnimBinding,
              i.Nb(e, 7).animated,
              i.Nb(e, 7).numberOfButtonsCSSVariable,
            ),
              t(
                e,
                11,
                0,
                i.Nb(e, 13).backgroundColor,
                i.Nb(e, 13).fixedNumberOfLines,
                i.Nb(e, 13).mayContainLatinCharsForArabic,
                i.Nb(e, 13).shortenWithEllipsisForArabic,
              ),
              t(e, 15, 0, i.Nb(e, 18).showLineNumbers),
              t(
                e,
                20,
                0,
                i.Nb(e, 22).backgroundColor,
                i.Nb(e, 22).fixedNumberOfLines,
                i.Nb(e, 22).mayContainLatinCharsForArabic,
                i.Nb(e, 22).shortenWithEllipsisForArabic,
                i.Nb(e, 27).markerClassEnabled,
              ),
              t(
                e,
                30,
                0,
                i.Nb(e, 32).backgroundColor,
                i.Nb(e, 32).fixedNumberOfLines,
                i.Nb(e, 32).mayContainLatinCharsForArabic,
                i.Nb(e, 32).shortenWithEllipsisForArabic,
                i.Nb(e, 35).combinedDisabled,
                i.Nb(e, 35).useBrighterIcon,
                i.Nb(e, 39).markerClassEnabled,
              ));
          },
        );
      }
      const de = s.gb.POPUP;
      class ge {
        constructor(t, e, n, i) {
          ((this.popupManager = t),
            (this.extendedPopupManager = e),
            (this.PopupType = s.Rb),
            (this.PopupIds = s.Ob),
            this.extendedPopupManager.activePopups$.subscribe(() => {
              n.run(() => {
                i.markForCheck();
              });
            }));
        }
        isActive(t) {
          return this.extendedPopupManager.isCurrentlyActive(t);
        }
      }
      var me = i.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{display:block}.fpk-dialog[_ngcontent-%COMP%]{margin-bottom:0}[_ngcontent-%COMP%]:not(.fpk-dialog){margin-bottom:20px}",
          ],
        ],
        data: {},
      });
      function fe(t) {
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
              "au3-popup",
              [],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (t, e, n) {
                var a = !0;
                return (
                  "component:@a276-popup-animation.start" === e &&
                    (a = !1 !== i.Nb(t, 7).animationStart(n) && a),
                  "component:@a276-popup-animation.done" === e &&
                    (a = !1 !== i.Nb(t, 7).animationFinished(n) && a),
                  "popup:keydown.Backspace" === e &&
                    (a = !1 !== i.Nb(t, 7).handleHkBackEvent() && a),
                  a
                );
              },
              j.b,
              j.a,
            )),
            i.Sb(6144, null, B.a, null, [V.b]),
            i.Sb(6144, null, K.b, null, [V.b]),
            i.xb(
              3,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(4, 16384, null, 0, H.a, [i.l], null, null),
            i.Sb(512, null, U.a, U.a, []),
            i.Sb(131584, null, z.a, z.a, []),
            i.xb(
              7,
              4964352,
              null,
              1,
              V.b,
              [
                G.a,
                Y.a,
                U.a,
                i.l,
                q.a,
                c.m,
                Z.a,
                u.a,
                i.h,
                W.a,
                F.a,
                z.a,
                X.b,
                J.b,
                i.z,
                [2, Q.a],
              ],
              { popupName: [0, "popupName"], text: [1, "text"] },
              null,
            ),
            i.Tb(603979776, 1, { dialogButtons: 1 }),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 3, 0, n.PopupIds.POPUP_FPK_TOAST_LOCK_DEFAULT),
              t(
                e,
                7,
                0,
                n.PopupIds.POPUP_FPK_TOAST_LOCK_DEFAULT,
                "Zu Ihrer Sicherheit ist\ndiese Funktion w\xe4hrend\nder Fahrt nicht verf\xfcgbar.",
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              i.Nb(e, 7).popupAnimBinding,
              i.Nb(e, 7).animated,
              i.Nb(e, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      function ye(t) {
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
              "au3-fpk-stopover-dialog",
              [["class", "fpk-dialog"]],
              [[40, "@childAnim", 0]],
              null,
              null,
              he,
              be,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(2, 180224, null, 0, pe, [G.a, ce.b, u.a], null, null),
          ],
          function (t, e) {
            t(
              e,
              1,
              0,
              e.component.PopupIds
                .POPUP_FPK_NAV_DESTINATION_REPLACE_OR_STOPOVER,
            );
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 2).childAnimBinding);
          },
        );
      }
      function Se(t) {
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
              "au3-popup",
              [],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (t, e, n) {
                var a = !0;
                return (
                  "component:@a276-popup-animation.start" === e &&
                    (a = !1 !== i.Nb(t, 7).animationStart(n) && a),
                  "component:@a276-popup-animation.done" === e &&
                    (a = !1 !== i.Nb(t, 7).animationFinished(n) && a),
                  "popup:keydown.Backspace" === e &&
                    (a = !1 !== i.Nb(t, 7).handleHkBackEvent() && a),
                  a
                );
              },
              j.b,
              j.a,
            )),
            i.Sb(6144, null, B.a, null, [V.b]),
            i.Sb(6144, null, K.b, null, [V.b]),
            i.xb(
              3,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(4, 16384, null, 0, H.a, [i.l], null, null),
            i.Sb(512, null, U.a, U.a, []),
            i.Sb(131584, null, z.a, z.a, []),
            i.xb(
              7,
              4964352,
              null,
              1,
              V.b,
              [
                G.a,
                Y.a,
                U.a,
                i.l,
                q.a,
                c.m,
                Z.a,
                u.a,
                i.h,
                W.a,
                F.a,
                z.a,
                X.b,
                J.b,
                i.z,
                [2, Q.a],
              ],
              { popupName: [0, "popupName"], text: [1, "text"] },
              null,
            ),
            i.Tb(603979776, 2, { dialogButtons: 1 }),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 3, 0, n.PopupIds.POPUP_FPK_NAV_NO_HOME),
              t(
                e,
                7,
                0,
                n.PopupIds.POPUP_FPK_NAV_NO_HOME,
                "No home address has been stored yet,\nplease create a home address\nusing the main display",
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              i.Nb(e, 7).popupAnimBinding,
              i.Nb(e, 7).animated,
              i.Nb(e, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      function ve(t) {
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
              "au3-popup",
              [],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (t, e, n) {
                var a = !0;
                return (
                  "component:@a276-popup-animation.start" === e &&
                    (a = !1 !== i.Nb(t, 7).animationStart(n) && a),
                  "component:@a276-popup-animation.done" === e &&
                    (a = !1 !== i.Nb(t, 7).animationFinished(n) && a),
                  "popup:keydown.Backspace" === e &&
                    (a = !1 !== i.Nb(t, 7).handleHkBackEvent() && a),
                  a
                );
              },
              j.b,
              j.a,
            )),
            i.Sb(6144, null, B.a, null, [V.b]),
            i.Sb(6144, null, K.b, null, [V.b]),
            i.xb(
              3,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(4, 16384, null, 0, H.a, [i.l], null, null),
            i.Sb(512, null, U.a, U.a, []),
            i.Sb(131584, null, z.a, z.a, []),
            i.xb(
              7,
              4964352,
              null,
              1,
              V.b,
              [
                G.a,
                Y.a,
                U.a,
                i.l,
                q.a,
                c.m,
                Z.a,
                u.a,
                i.h,
                W.a,
                F.a,
                z.a,
                X.b,
                J.b,
                i.z,
                [2, Q.a],
              ],
              { popupName: [0, "popupName"], text: [1, "text"] },
              null,
            ),
            i.Tb(603979776, 3, { dialogButtons: 1 }),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 3, 0, n.PopupIds.POPUP_FPK_NAV_NO_BUSINESS),
              t(
                e,
                7,
                0,
                n.PopupIds.POPUP_FPK_NAV_NO_BUSINESS,
                "No business address has been stored yet,\nplease create a business address\nusing the main display",
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              i.Nb(e, 7).popupAnimBinding,
              i.Nb(e, 7).animated,
              i.Nb(e, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      function xe(t) {
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
              "au3-popup",
              [],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (t, e, n) {
                var a = !0;
                return (
                  "component:@a276-popup-animation.start" === e &&
                    (a = !1 !== i.Nb(t, 7).animationStart(n) && a),
                  "component:@a276-popup-animation.done" === e &&
                    (a = !1 !== i.Nb(t, 7).animationFinished(n) && a),
                  "popup:keydown.Backspace" === e &&
                    (a = !1 !== i.Nb(t, 7).handleHkBackEvent() && a),
                  a
                );
              },
              j.b,
              j.a,
            )),
            i.Sb(6144, null, B.a, null, [V.b]),
            i.Sb(6144, null, K.b, null, [V.b]),
            i.xb(
              3,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(4, 16384, null, 0, H.a, [i.l], null, null),
            i.Sb(512, null, U.a, U.a, []),
            i.Sb(131584, null, z.a, z.a, []),
            i.xb(
              7,
              4964352,
              null,
              1,
              V.b,
              [
                G.a,
                Y.a,
                U.a,
                i.l,
                q.a,
                c.m,
                Z.a,
                u.a,
                i.h,
                W.a,
                F.a,
                z.a,
                X.b,
                J.b,
                i.z,
                [2, Q.a],
              ],
              { popupName: [0, "popupName"], text: [1, "text"] },
              null,
            ),
            i.Tb(603979776, 4, { dialogButtons: 1 }),
          ],
          function (t, e) {
            var n = e.component;
            (t(
              e,
              3,
              0,
              n.PopupIds.POPUP_FPK_NAV_MAX_NUMBER_OF_STOPOVER_REACHED,
            ),
              t(
                e,
                7,
                0,
                n.PopupIds.POPUP_FPK_NAV_MAX_NUMBER_OF_STOPOVER_REACHED,
                "Sie haben die maximale Anzahl an Zwischenzielen erreicht",
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              i.Nb(e, 7).popupAnimBinding,
              i.Nb(e, 7).animated,
              i.Nb(e, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      function Oe(t) {
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
              "au3-popup",
              [],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (t, e, n) {
                var a = !0;
                return (
                  "component:@a276-popup-animation.start" === e &&
                    (a = !1 !== i.Nb(t, 7).animationStart(n) && a),
                  "component:@a276-popup-animation.done" === e &&
                    (a = !1 !== i.Nb(t, 7).animationFinished(n) && a),
                  "popup:keydown.Backspace" === e &&
                    (a = !1 !== i.Nb(t, 7).handleHkBackEvent() && a),
                  a
                );
              },
              j.b,
              j.a,
            )),
            i.Sb(6144, null, B.a, null, [V.b]),
            i.Sb(6144, null, K.b, null, [V.b]),
            i.xb(
              3,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(4, 16384, null, 0, H.a, [i.l], null, null),
            i.Sb(512, null, U.a, U.a, []),
            i.Sb(131584, null, z.a, z.a, []),
            i.xb(
              7,
              4964352,
              null,
              1,
              V.b,
              [
                G.a,
                Y.a,
                U.a,
                i.l,
                q.a,
                c.m,
                Z.a,
                u.a,
                i.h,
                W.a,
                F.a,
                z.a,
                X.b,
                J.b,
                i.z,
                [2, Q.a],
              ],
              { popupName: [0, "popupName"], text: [1, "text"] },
              null,
            ),
            i.Tb(603979776, 5, { dialogButtons: 1 }),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 3, 0, n.PopupIds.POPUP_FPK_NAV_DISABLE_OVERVIEW_MAP),
              t(
                e,
                7,
                0,
                n.PopupIds.POPUP_FPK_NAV_DISABLE_OVERVIEW_MAP,
                "Die \xdcbersichtskarte wird erst bei \naktiver Zielf\xfchrung aktiviert.",
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              i.Nb(e, 7).popupAnimBinding,
              i.Nb(e, 7).animated,
              i.Nb(e, 7).numberOfButtonsCSSVariable,
            );
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
              8,
              "au3-popup",
              [],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (t, e, n) {
                var a = !0;
                return (
                  "component:@a276-popup-animation.start" === e &&
                    (a = !1 !== i.Nb(t, 7).animationStart(n) && a),
                  "component:@a276-popup-animation.done" === e &&
                    (a = !1 !== i.Nb(t, 7).animationFinished(n) && a),
                  "popup:keydown.Backspace" === e &&
                    (a = !1 !== i.Nb(t, 7).handleHkBackEvent() && a),
                  a
                );
              },
              j.b,
              j.a,
            )),
            i.Sb(6144, null, B.a, null, [V.b]),
            i.Sb(6144, null, K.b, null, [V.b]),
            i.xb(
              3,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(4, 16384, null, 0, H.a, [i.l], null, null),
            i.Sb(512, null, U.a, U.a, []),
            i.Sb(131584, null, z.a, z.a, []),
            i.xb(
              7,
              4964352,
              null,
              1,
              V.b,
              [
                G.a,
                Y.a,
                U.a,
                i.l,
                q.a,
                c.m,
                Z.a,
                u.a,
                i.h,
                W.a,
                F.a,
                z.a,
                X.b,
                J.b,
                i.z,
                [2, Q.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                autoHideTime: [2, "autoHideTime"],
                text: [3, "text"],
              },
              null,
            ),
            i.Tb(603979776, 6, { dialogButtons: 1 }),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 3, 0, n.PopupIds.POPUP_FPK_NAV_DB_UPDATE_IN_PROGRESS),
              t(
                e,
                7,
                0,
                n.PopupIds.POPUP_FPK_NAV_DB_UPDATE_IN_PROGRESS,
                n.PopupType.Toast,
                3e4,
                "Navigation database update in progress...",
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              i.Nb(e, 7).popupAnimBinding,
              i.Nb(e, 7).animated,
              i.Nb(e, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      function Pe(t) {
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
              "au3-popup",
              [],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (t, e, n) {
                var a = !0;
                return (
                  "component:@a276-popup-animation.start" === e &&
                    (a = !1 !== i.Nb(t, 7).animationStart(n) && a),
                  "component:@a276-popup-animation.done" === e &&
                    (a = !1 !== i.Nb(t, 7).animationFinished(n) && a),
                  "popup:keydown.Backspace" === e &&
                    (a = !1 !== i.Nb(t, 7).handleHkBackEvent() && a),
                  a
                );
              },
              j.b,
              j.a,
            )),
            i.Sb(6144, null, B.a, null, [V.b]),
            i.Sb(6144, null, K.b, null, [V.b]),
            i.xb(
              3,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(4, 16384, null, 0, H.a, [i.l], null, null),
            i.Sb(512, null, U.a, U.a, []),
            i.Sb(131584, null, z.a, z.a, []),
            i.xb(
              7,
              4964352,
              null,
              1,
              V.b,
              [
                G.a,
                Y.a,
                U.a,
                i.l,
                q.a,
                c.m,
                Z.a,
                u.a,
                i.h,
                W.a,
                F.a,
                z.a,
                X.b,
                J.b,
                i.z,
                [2, Q.a],
              ],
              { popupName: [0, "popupName"], text: [1, "text"] },
              null,
            ),
            i.Tb(603979776, 7, { dialogButtons: 1 }),
          ],
          function (t, e) {
            var n = e.component;
            (t(
              e,
              3,
              0,
              n.PopupIds.POPUP_FPK_MAP_CONTENT_SETTINGS_3D_CITY_MODEL,
            ),
              t(
                e,
                7,
                0,
                n.PopupIds.POPUP_FPK_MAP_CONTENT_SETTINGS_3D_CITY_MODEL,
                "Die Anzeige steht f\xfcr die \nSatellitenkarte nicht zur Verf\xfcgung.",
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              i.Nb(e, 7).popupAnimBinding,
              i.Nb(e, 7).animated,
              i.Nb(e, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
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
              8,
              "au3-popup",
              [],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (t, e, n) {
                var a = !0;
                return (
                  "component:@a276-popup-animation.start" === e &&
                    (a = !1 !== i.Nb(t, 7).animationStart(n) && a),
                  "component:@a276-popup-animation.done" === e &&
                    (a = !1 !== i.Nb(t, 7).animationFinished(n) && a),
                  "popup:keydown.Backspace" === e &&
                    (a = !1 !== i.Nb(t, 7).handleHkBackEvent() && a),
                  a
                );
              },
              j.b,
              j.a,
            )),
            i.Sb(6144, null, B.a, null, [V.b]),
            i.Sb(6144, null, K.b, null, [V.b]),
            i.xb(
              3,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(4, 16384, null, 0, H.a, [i.l], null, null),
            i.Sb(512, null, U.a, U.a, []),
            i.Sb(131584, null, z.a, z.a, []),
            i.xb(
              7,
              4964352,
              null,
              1,
              V.b,
              [
                G.a,
                Y.a,
                U.a,
                i.l,
                q.a,
                c.m,
                Z.a,
                u.a,
                i.h,
                W.a,
                F.a,
                z.a,
                X.b,
                J.b,
                i.z,
                [2, Q.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                hasText: [2, "hasText"],
                text: [3, "text"],
              },
              null,
            ),
            i.Tb(603979776, 8, { dialogButtons: 1 }),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 3, 0, n.PopupIds.POPUP_FPK_TOAST_SDS_NOT_BUILD_IN_CAR),
              t(
                e,
                7,
                0,
                n.PopupIds.POPUP_FPK_TOAST_SDS_NOT_BUILD_IN_CAR,
                n.PopupType.Toast,
                !0,
                "Sprachdialogsystem:\nDas Sprachdialogsystem\nist nicht verbaut.",
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              i.Nb(e, 7).popupAnimBinding,
              i.Nb(e, 7).animated,
              i.Nb(e, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      function ke(t) {
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
              "au3-popup",
              [],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (t, e, n) {
                var a = !0;
                return (
                  "component:@a276-popup-animation.start" === e &&
                    (a = !1 !== i.Nb(t, 7).animationStart(n) && a),
                  "component:@a276-popup-animation.done" === e &&
                    (a = !1 !== i.Nb(t, 7).animationFinished(n) && a),
                  "popup:keydown.Backspace" === e &&
                    (a = !1 !== i.Nb(t, 7).handleHkBackEvent() && a),
                  a
                );
              },
              j.b,
              j.a,
            )),
            i.Sb(6144, null, B.a, null, [V.b]),
            i.Sb(6144, null, K.b, null, [V.b]),
            i.xb(
              3,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(4, 16384, null, 0, H.a, [i.l], null, null),
            i.Sb(512, null, U.a, U.a, []),
            i.Sb(131584, null, z.a, z.a, []),
            i.xb(
              7,
              4964352,
              null,
              1,
              V.b,
              [
                G.a,
                Y.a,
                U.a,
                i.l,
                q.a,
                c.m,
                Z.a,
                u.a,
                i.h,
                W.a,
                F.a,
                z.a,
                X.b,
                J.b,
                i.z,
                [2, Q.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                hasText: [2, "hasText"],
                text: [3, "text"],
              },
              null,
            ),
            i.Tb(603979776, 9, { dialogButtons: 1 }),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 3, 0, n.PopupIds.POPUP_FPK_TOAST_SDS_UNDEFINED_ERROR),
              t(
                e,
                7,
                0,
                n.PopupIds.POPUP_FPK_TOAST_SDS_UNDEFINED_ERROR,
                n.PopupType.Toast,
                !0,
                "Sprachdialogsystem:\nzurzeit nicht verf\xfcgbar.",
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              i.Nb(e, 7).popupAnimBinding,
              i.Nb(e, 7).animated,
              i.Nb(e, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      function Ae(t) {
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
              "au3-popup",
              [],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (t, e, n) {
                var a = !0;
                return (
                  "component:@a276-popup-animation.start" === e &&
                    (a = !1 !== i.Nb(t, 7).animationStart(n) && a),
                  "component:@a276-popup-animation.done" === e &&
                    (a = !1 !== i.Nb(t, 7).animationFinished(n) && a),
                  "popup:keydown.Backspace" === e &&
                    (a = !1 !== i.Nb(t, 7).handleHkBackEvent() && a),
                  a
                );
              },
              j.b,
              j.a,
            )),
            i.Sb(6144, null, B.a, null, [V.b]),
            i.Sb(6144, null, K.b, null, [V.b]),
            i.xb(
              3,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(4, 16384, null, 0, H.a, [i.l], null, null),
            i.Sb(512, null, U.a, U.a, []),
            i.Sb(131584, null, z.a, z.a, []),
            i.xb(
              7,
              4964352,
              null,
              1,
              V.b,
              [
                G.a,
                Y.a,
                U.a,
                i.l,
                q.a,
                c.m,
                Z.a,
                u.a,
                i.h,
                W.a,
                F.a,
                z.a,
                X.b,
                J.b,
                i.z,
                [2, Q.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                hasText: [2, "hasText"],
                text: [3, "text"],
              },
              null,
            ),
            i.Tb(603979776, 10, { dialogButtons: 1 }),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 3, 0, n.PopupIds.POPUP_FPK_TOAST_SDS_OPS_APS_ACTIVE),
              t(
                e,
                7,
                0,
                n.PopupIds.POPUP_FPK_TOAST_SDS_OPS_APS_ACTIVE,
                n.PopupType.Toast,
                !0,
                "Sprachdialogsystem:\nbei aktiver Einparkhilfe\nnicht verf\xfcgbar.",
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              i.Nb(e, 7).popupAnimBinding,
              i.Nb(e, 7).animated,
              i.Nb(e, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      function Ne(t) {
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
              "au3-popup",
              [],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (t, e, n) {
                var a = !0;
                return (
                  "component:@a276-popup-animation.start" === e &&
                    (a = !1 !== i.Nb(t, 7).animationStart(n) && a),
                  "component:@a276-popup-animation.done" === e &&
                    (a = !1 !== i.Nb(t, 7).animationFinished(n) && a),
                  "popup:keydown.Backspace" === e &&
                    (a = !1 !== i.Nb(t, 7).handleHkBackEvent() && a),
                  a
                );
              },
              j.b,
              j.a,
            )),
            i.Sb(6144, null, B.a, null, [V.b]),
            i.Sb(6144, null, K.b, null, [V.b]),
            i.xb(
              3,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(4, 16384, null, 0, H.a, [i.l], null, null),
            i.Sb(512, null, U.a, U.a, []),
            i.Sb(131584, null, z.a, z.a, []),
            i.xb(
              7,
              4964352,
              null,
              1,
              V.b,
              [
                G.a,
                Y.a,
                U.a,
                i.l,
                q.a,
                c.m,
                Z.a,
                u.a,
                i.h,
                W.a,
                F.a,
                z.a,
                X.b,
                J.b,
                i.z,
                [2, Q.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                hasText: [2, "hasText"],
                text: [3, "text"],
              },
              null,
            ),
            i.Tb(603979776, 11, { dialogButtons: 1 }),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 3, 0, n.PopupIds.POPUP_FPK_TOAST_SDS_LANGUAGE_LOADING),
              t(
                e,
                7,
                0,
                n.PopupIds.POPUP_FPK_TOAST_SDS_LANGUAGE_LOADING,
                n.PopupType.Toast,
                !0,
                "Sprachdialogsystem:\nDie Sprachansagen\nwerden geladen...",
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              i.Nb(e, 7).popupAnimBinding,
              i.Nb(e, 7).animated,
              i.Nb(e, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      function Te(t) {
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
              "au3-popup",
              [],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (t, e, n) {
                var a = !0;
                return (
                  "component:@a276-popup-animation.start" === e &&
                    (a = !1 !== i.Nb(t, 7).animationStart(n) && a),
                  "component:@a276-popup-animation.done" === e &&
                    (a = !1 !== i.Nb(t, 7).animationFinished(n) && a),
                  "popup:keydown.Backspace" === e &&
                    (a = !1 !== i.Nb(t, 7).handleHkBackEvent() && a),
                  a
                );
              },
              j.b,
              j.a,
            )),
            i.Sb(6144, null, B.a, null, [V.b]),
            i.Sb(6144, null, K.b, null, [V.b]),
            i.xb(
              3,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(4, 16384, null, 0, H.a, [i.l], null, null),
            i.Sb(512, null, U.a, U.a, []),
            i.Sb(131584, null, z.a, z.a, []),
            i.xb(
              7,
              4964352,
              null,
              1,
              V.b,
              [
                G.a,
                Y.a,
                U.a,
                i.l,
                q.a,
                c.m,
                Z.a,
                u.a,
                i.h,
                W.a,
                F.a,
                z.a,
                X.b,
                J.b,
                i.z,
                [2, Q.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                hasText: [2, "hasText"],
                text: [3, "text"],
              },
              null,
            ),
            i.Tb(603979776, 12, { dialogButtons: 1 }),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 3, 0, n.PopupIds.POPUP_FPK_TOAST_SDS_LANGUAGE_LOADING_FAILED),
              t(
                e,
                7,
                0,
                n.PopupIds.POPUP_FPK_TOAST_SDS_LANGUAGE_LOADING_FAILED,
                n.PopupType.Toast,
                !0,
                "Sprachdialogsystem:\nDie Sprachansagen\nkonnten nicht geladen\nwerden.",
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              i.Nb(e, 7).popupAnimBinding,
              i.Nb(e, 7).animated,
              i.Nb(e, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      function Me(t) {
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
              "au3-popup",
              [],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (t, e, n) {
                var a = !0;
                return (
                  "component:@a276-popup-animation.start" === e &&
                    (a = !1 !== i.Nb(t, 7).animationStart(n) && a),
                  "component:@a276-popup-animation.done" === e &&
                    (a = !1 !== i.Nb(t, 7).animationFinished(n) && a),
                  "popup:keydown.Backspace" === e &&
                    (a = !1 !== i.Nb(t, 7).handleHkBackEvent() && a),
                  a
                );
              },
              j.b,
              j.a,
            )),
            i.Sb(6144, null, B.a, null, [V.b]),
            i.Sb(6144, null, K.b, null, [V.b]),
            i.xb(
              3,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(4, 16384, null, 0, H.a, [i.l], null, null),
            i.Sb(512, null, U.a, U.a, []),
            i.Sb(131584, null, z.a, z.a, []),
            i.xb(
              7,
              4964352,
              null,
              1,
              V.b,
              [
                G.a,
                Y.a,
                U.a,
                i.l,
                q.a,
                c.m,
                Z.a,
                u.a,
                i.h,
                W.a,
                F.a,
                z.a,
                X.b,
                J.b,
                i.z,
                [2, Q.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                hasText: [2, "hasText"],
                text: [3, "text"],
              },
              null,
            ),
            i.Tb(603979776, 13, { dialogButtons: 1 }),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 3, 0, n.PopupIds.POPUP_FPK_TOAST_SDS_NO_LANGUAGE_SUPPORT),
              t(
                e,
                7,
                0,
                n.PopupIds.POPUP_FPK_TOAST_SDS_NO_LANGUAGE_SUPPORT,
                n.PopupType.Toast,
                !0,
                "Sprachdialogsystem:\nin der eingestellten\nSprache nicht verf\xfcgbar.",
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              i.Nb(e, 7).popupAnimBinding,
              i.Nb(e, 7).animated,
              i.Nb(e, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      function De(t) {
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
              "au3-popup",
              [],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (t, e, n) {
                var a = !0;
                return (
                  "component:@a276-popup-animation.start" === e &&
                    (a = !1 !== i.Nb(t, 7).animationStart(n) && a),
                  "component:@a276-popup-animation.done" === e &&
                    (a = !1 !== i.Nb(t, 7).animationFinished(n) && a),
                  "popup:keydown.Backspace" === e &&
                    (a = !1 !== i.Nb(t, 7).handleHkBackEvent() && a),
                  a
                );
              },
              j.b,
              j.a,
            )),
            i.Sb(6144, null, B.a, null, [V.b]),
            i.Sb(6144, null, K.b, null, [V.b]),
            i.xb(
              3,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(4, 16384, null, 0, H.a, [i.l], null, null),
            i.Sb(512, null, U.a, U.a, []),
            i.Sb(131584, null, z.a, z.a, []),
            i.xb(
              7,
              4964352,
              null,
              1,
              V.b,
              [
                G.a,
                Y.a,
                U.a,
                i.l,
                q.a,
                c.m,
                Z.a,
                u.a,
                i.h,
                W.a,
                F.a,
                z.a,
                X.b,
                J.b,
                i.z,
                [2, Q.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                hasText: [2, "hasText"],
                text: [3, "text"],
              },
              null,
            ),
            i.Tb(603979776, 14, { dialogButtons: 1 }),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 3, 0, n.PopupIds.POPUP_FPK_TOAST_PHONE_CARPLAY_ACTIVE),
              t(
                e,
                7,
                0,
                n.PopupIds.POPUP_FPK_TOAST_PHONE_CARPLAY_ACTIVE,
                n.PopupType.Toast,
                !0,
                "Apple CarPlay ist aktiv.\nFunktion nicht verf\xfcgbar.",
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              i.Nb(e, 7).popupAnimBinding,
              i.Nb(e, 7).animated,
              i.Nb(e, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      function $e(t) {
        return i.ac(
          2,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              31,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), i.hb(16777216, null, null, 1, null, fe)),
            i.xb(
              2,
              16384,
              null,
              0,
              tt.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 2, null, ye)),
            i.xb(
              4,
              16384,
              null,
              0,
              tt.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            i.Pb(131072, tt.b, [i.h]),
            (t()(), i.hb(16777216, null, null, 1, null, Se)),
            i.xb(
              7,
              16384,
              null,
              0,
              tt.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, ve)),
            i.xb(
              9,
              16384,
              null,
              0,
              tt.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, xe)),
            i.xb(
              11,
              16384,
              null,
              0,
              tt.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, Oe)),
            i.xb(
              13,
              16384,
              null,
              0,
              tt.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, Ce)),
            i.xb(
              15,
              16384,
              null,
              0,
              tt.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, Pe)),
            i.xb(
              17,
              16384,
              null,
              0,
              tt.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, _e)),
            i.xb(
              19,
              16384,
              null,
              0,
              tt.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, ke)),
            i.xb(
              21,
              16384,
              null,
              0,
              tt.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, Ae)),
            i.xb(
              23,
              16384,
              null,
              0,
              tt.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, Ne)),
            i.xb(
              25,
              16384,
              null,
              0,
              tt.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, Te)),
            i.xb(
              27,
              16384,
              null,
              0,
              tt.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, Me)),
            i.xb(
              29,
              16384,
              null,
              0,
              tt.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, De)),
            i.xb(
              31,
              16384,
              null,
              0,
              tt.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 2, 0, n.isActive(n.PopupIds.POPUP_FPK_TOAST_LOCK_DEFAULT)),
              t(
                e,
                4,
                0,
                i.Yb(
                  e,
                  4,
                  0,
                  i
                    .Nb(e, 5)
                    .transform(
                      n.popupManager.isActive(
                        n.PopupIds
                          .POPUP_FPK_NAV_DESTINATION_REPLACE_OR_STOPOVER,
                      ),
                    ),
                ),
              ),
              t(e, 7, 0, n.isActive(n.PopupIds.POPUP_FPK_NAV_NO_HOME)),
              t(e, 9, 0, n.isActive(n.PopupIds.POPUP_FPK_NAV_NO_BUSINESS)),
              t(
                e,
                11,
                0,
                n.isActive(
                  n.PopupIds.POPUP_FPK_NAV_MAX_NUMBER_OF_STOPOVER_REACHED,
                ),
              ),
              t(
                e,
                13,
                0,
                n.isActive(n.PopupIds.POPUP_FPK_NAV_DISABLE_OVERVIEW_MAP),
              ),
              t(
                e,
                15,
                0,
                n.isActive(n.PopupIds.POPUP_FPK_NAV_DB_UPDATE_IN_PROGRESS),
              ),
              t(
                e,
                17,
                0,
                n.isActive(
                  n.PopupIds.POPUP_FPK_MAP_CONTENT_SETTINGS_3D_CITY_MODEL,
                ),
              ),
              t(
                e,
                19,
                0,
                n.isActive(n.PopupIds.POPUP_FPK_TOAST_SDS_NOT_BUILD_IN_CAR),
              ),
              t(
                e,
                21,
                0,
                n.isActive(n.PopupIds.POPUP_FPK_TOAST_SDS_UNDEFINED_ERROR),
              ),
              t(
                e,
                23,
                0,
                n.isActive(n.PopupIds.POPUP_FPK_TOAST_SDS_OPS_APS_ACTIVE),
              ),
              t(
                e,
                25,
                0,
                n.isActive(n.PopupIds.POPUP_FPK_TOAST_SDS_LANGUAGE_LOADING),
              ),
              t(
                e,
                27,
                0,
                n.isActive(
                  n.PopupIds.POPUP_FPK_TOAST_SDS_LANGUAGE_LOADING_FAILED,
                ),
              ),
              t(
                e,
                29,
                0,
                n.isActive(n.PopupIds.POPUP_FPK_TOAST_SDS_NO_LANGUAGE_SUPPORT),
              ),
              t(
                e,
                31,
                0,
                n.isActive(n.PopupIds.POPUP_FPK_TOAST_PHONE_CARPLAY_ACTIVE),
              ));
          },
          null,
        );
      }
      var we = n("c/kN"),
        Le = n("FHOd"),
        Fe = n("OJ7R"),
        Re = n("TwgT"),
        Ie = n("D57K"),
        Ee = n("ZTXN"),
        je = n("HM3f"),
        Be = n("GoAz"),
        Ve = n("xOC8"),
        Ke = n("Y0IF"),
        He = n("C05f"),
        Ue = n("Laid"),
        ze = n("gb1R"),
        Ge = n("SrNW"),
        Ye = n("8j5Y"),
        qe = n("7SLS"),
        Ze = n("mWib"),
        We = (function (t) {
          return (
            (t[(t.STARTUP = 1)] = "STARTUP"),
            (t[(t.NORMAL = 3)] = "NORMAL"),
            (t[(t.OFF = 6)] = "OFF"),
            t
          );
        })({}),
        Xe = n("aEtm"),
        Je = n("DPLb"),
        Qe = n("bkj4"),
        tn = n("I5OF");
      const en = {
        displayName: s.G.CLUSTER_SUBFRAME,
        displayableName: s.J.CLUSTER_MAP_ROUTE_GUIDANCE,
        layerName: "Layer_Map_Route_Guidance",
        source: { x: 0, y: 0, w: 858, h: 320 },
        target: { x: 0, y: 0, w: 858, h: 320 },
      };
      let nn = (() => {
        class t {
          constructor(t, e, n, i, a) {
            ((this.displayManager = t),
              (this.kdkViewService = e),
              (this.stageService = n),
              (this.skinService = i),
              (this.onDestroy$$ = new ue.a(1)),
              (this.layerConfig = en),
              (this.expectedKdkVisibility$$ = new He.a(!1)),
              (this.expectedKdkVisibility$ =
                this.expectedKdkVisibility$$.asObservable()),
              (this.kdkVisibilityStatus$$ = new He.a(!1)),
              (this.currentKdkVisibility$ =
                this.kdkVisibilityStatus$$.asObservable()),
              (this.userDefinedKdkVisibility$$ = new He.a(!0)),
              (this.userDefinedKdkVisibility$ =
                this.userDefinedKdkVisibility$$.asObservable()),
              (this.currentKdKStyle$$ = new He.a(Qe.j.CLASSIC)),
              (this.logger = a.getLogger("fpk.KdkService")),
              this.trackActivityChanges(),
              this.trackLayoutChanges(),
              this.trackVisibilityChanges(),
              this.trackFlapPadding());
          }
          updateCurrentVisibilityState(t) {
            this.kdkVisibilityStatus$$.next(t);
          }
          updateUserDefinedKdkVisibility(t) {
            (this.logger.info(
              "updateUserDefinedKdkVisibility: change visibility to: ",
              t,
            ),
              this.userDefinedKdkVisibility$$.next(t));
          }
          ngOnDestroy() {
            this.onDestroy$$.next();
          }
          trackActivityChanges() {
            this.kdkViewService.isActive$
              .pipe(Object(Nt.a)(), Object(re.a)(this.onDestroy$$))
              .subscribe((t) => {
                (this.updateDisplayConfiguration(t),
                  this.expectedKdkVisibility$$.next(t));
              });
          }
          updateDisplayConfiguration(t) {
            (this.logger.info(
              "updateDisplayConfiguration: change configuration for KDK to",
              t,
            ),
              t
                ? this.displayManager.activateLayer(this.layerConfig)
                : this.displayManager.deactivateLayer(
                    this.layerConfig.layerName,
                    this.layerConfig.displayName,
                  ));
          }
          trackLayoutChanges() {
            Object(je.b)(
              this.stageService.currentStage$,
              this.skinService.activeClusterSkin$,
            )
              .pipe(
                Object(Nt.a)((t, e) => t[0] === e[0] && t[1] === e[1]),
                Object(it.a)(([t, e]) => this.selectTargetStyle(t, e)),
                Object(re.a)(this.onDestroy$$),
              )
              .subscribe((t) => {
                (this.logger.info(
                  `trackLayoutChanges: update for active Style to ${t}.`,
                ),
                  this.currentKdKStyle$$.next(t),
                  this.kdkViewService.updateStyle(t));
              });
          }
          selectTargetStyle(t, e) {
            return e.hasCentralTube && t === Mt.c.Small
              ? Qe.j.SPORTBIG
              : Qe.j.CLASSIC;
          }
          trackVisibilityChanges() {
            this.userDefinedKdkVisibility$$
              .pipe(
                Object(se.a)(s.wd),
                Object(Nt.a)(),
                Object(re.a)(this.onDestroy$$),
              )
              .subscribe((t) => this.kdkViewService.updateVisibility(t));
          }
          trackFlapPadding() {
            Object(je.b)(
              this.skinService.needsTopPadding$,
              this.currentKdKStyle$$.pipe(
                Object(it.a)((t) => t === Qe.j.CLASSIC),
                Object(lt.a)(!0),
              ),
            )
              .pipe(
                Object(Nt.a)(),
                Object(at.a)(
                  this.kdkViewService.isActive$.pipe(Object(lt.a)(!1)),
                ),
                Object(re.a)(this.onDestroy$$),
              )
              .subscribe(([[t, e], n]) => {
                const i = t && !e ? 18 : 0;
                (this.logger.info(
                  `trackFlapPadding: update of LayerConfig due to needsPadding=${t} and isClassic=${e} with value=${i}.`,
                ),
                  this.updateLayerConfig(i),
                  n &&
                    (this.logger.info(
                      "trackFlapPadding: flap is active update of LayerConfig needs disable and re-enable of displayable.",
                    ),
                    this.updateDisplayConfiguration(!n),
                    this.updateDisplayConfiguration(n)));
              });
          }
          updateLayerConfig(t) {
            const e = Object.assign({}, en);
            ((e.target.y = t), (this.layerConfig = e));
          }
        }
        return (
          (t.ɵprov = i.bc({
            factory: function () {
              return new t(
                i.cc(tn.a),
                i.cc(Je.a),
                i.cc(Tt.a),
                i.cc(ze.c),
                i.cc(u.a),
              );
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
      var an = n("FdRT"),
        ln = n("9P2B"),
        on = n("KNZ+");
      const sn = {
        context: Mt.a.NO_CHANGE,
        coreData: {
          view: Mt.c.NoChange,
          focus: Mt.b.NoChange,
          leftFlapState: Mt.d.NoChange,
          rightFlapState: Mt.e.NoChange,
        },
      };
      var rn = (function (t) {
          return (
            (t[(t.NONE = 0)] = "NONE"),
            (t[(t.OPEN = 1)] = "OPEN"),
            (t[(t.RESTARTED = 2)] = "RESTARTED"),
            t
          );
        })({}),
        un = (function (t) {
          return (
            (t[(t.Normal = 0)] = "Normal"),
            (t[(t.PowerChange = 1)] = "PowerChange"),
            t
          );
        })({});
      let cn = (() => {
        class t {
          constructor(t, e, n, i, a, l, o, s) {
            ((this.fpkContextService = t),
              (this.fpkStageService = e),
              (this.fpkTransmissionIdService = n),
              (this.fpkKombiSyncRudiService = i),
              (this.fpkKdkService = a),
              (this.fpkSkinService = l),
              (this.fpkStateService = o),
              (this.onDestroy$$ = new ue.a(1)),
              (this.currentDisplayFocus$$ = new He.a(Mt.b.NoChange)),
              (this.currentDisplayFocus$ = this.currentDisplayFocus$$.pipe(
                Object(Nt.a)(),
              )),
              (this.openDisplayRequests$$ = new Ee.a()),
              (this.syncedDisplayState$$ = new He.a(sn)),
              (this.syncedDisplayState$ = this.syncedDisplayState$$.pipe(
                Object(it.a)((t) => Object(Mt.i)(t)),
                Object(Ge.a)((t, e) => Object(Mt.h)(t, e), sn),
                Object(Ye.a)((t) =>
                  this.logger.info(`update for syncedDisplayState: ${t}`),
                ),
              )),
              (this.currentActionAfterLastMode$$ = new He.a(rn.NONE)),
              (this.triggerActionAfterConnectionRestart$ =
                this.currentActionAfterLastMode$$.pipe(
                  Object(se.a)((t) => t === rn.RESTARTED),
                  Object(qe.a)(void 0),
                )),
              (this.logger = s.getLogger("fpk.FpkKombiSyncService")));
          }
          initSubscriptions() {
            (this.listenToLastModeRequests(),
              this.listenToFpkDisplayRequests(),
              this.listenToFpkDisplayResponses(),
              this.initializeHmiUpdateTracker(),
              this.initializeHmiStatusTracker());
          }
          ngOnDestroy() {
            this.onDestroy$$.next();
          }
          listenToLastModeRequests() {
            this.fpkKombiSyncRudiService.lastModeRequests$
              .pipe(
                Object(at.a)(this.syncedDisplayState$),
                Object(re.a)(this.onDestroy$$),
              )
              .subscribe(([t, e]) => {
                (this.logger.info("received LastModeRequest"),
                  this.processDisplayRequest(t),
                  Object(Mt.f)(e, sn) ||
                    (this.logger.info(
                      "received LastModeRequest after update of syncState indicating an FPK only reset",
                    ),
                    this.fpkStateService.receivedLastMode(t)),
                  this.currentActionAfterLastMode$$.next(rn.OPEN));
              });
          }
          listenToFpkDisplayRequests() {
            this.fpkKombiSyncRudiService.kombiDisplayRequests$
              .pipe(
                Object(at.a)(
                  this.fpkStateService.syncedState$.pipe(Object(lt.a)(on.a)),
                  this.currentActionAfterLastMode$$,
                ),
                Object(re.a)(this.onDestroy$$),
              )
              .subscribe(([t, e, n]) => {
                const i = this.createDisplayResponse(t, e);
                (this.fpkKombiSyncRudiService.sendMmiDisplayResponse(i),
                  this.processDisplayRequest(t),
                  n === rn.OPEN &&
                    (this.logger.info(
                      "listenToFpkDisplayRequests: emit RESTARTED because processable request after LastMode is received",
                    ),
                    this.currentActionAfterLastMode$$.next(rn.RESTARTED)),
                  this.fpkStateService.receivedRequest(t),
                  this.syncedDisplayState$$.next(t));
              });
          }
          processDisplayRequest(t) {
            (this.logger.info("processing DisplayRequest: ", t),
              t.context &&
                this.fpkContextService.setFpkContextByRequest(t.context),
              t.coreData &&
                (this.fpkStageService.setFpkStage(t.coreData.view),
                this.updateCurrentFocus(t.coreData.focus),
                this.updateRightFlapVisibilityState(
                  t.coreData.rightFlapState,
                )));
          }
          listenToFpkDisplayResponses() {
            this.fpkKombiSyncRudiService.kombiDisplayResponses$
              .pipe(Object(re.a)(this.onDestroy$$))
              .subscribe((t) => {
                (this.logger.info("Process Kombi_DisplayResponse: ", t),
                  this.fpkTransmissionIdService.isCurrentDisplayResponse(t) ||
                    this.logger.info(
                      "Response.SessionId not matching current Request.SessionId",
                    ),
                  -1 !== t.sessionId
                    ? (t.context &&
                        this.fpkContextService.setFpkContextByResponse(
                          t.context,
                        ),
                      t.coreData &&
                        (this.updateCurrentFocus(t.coreData.focus),
                        this.updateRightFlapVisibilityState(
                          t.coreData.rightFlapState,
                        )),
                      this.fpkStateService.receivedRequest(t),
                      this.syncedDisplayState$$.next(t))
                    : this.logger.warn(
                        "Response.SessionId is invalid, ignoring this response",
                      ));
              });
          }
          initializeHmiUpdateTracker() {
            (this.processHmiContextUpdates(),
              this.processHmiFlapUpdates(),
              this.processHmiPowerUpdates(),
              this.processHmiAfterConnectionRestart(),
              this.openDisplayRequests$$
                .pipe(
                  Object(at.a)(this.syncedDisplayState$),
                  Object(re.a)(this.onDestroy$$),
                )
                .subscribe(([t, e]) => {
                  const n = t.packet,
                    i = !Object(Mt.f)(n, sn),
                    a = !Object(Mt.f)(n, e);
                  i &&
                    a &&
                    (t.reason === un.PowerChange &&
                      (this.logger.info(
                        `request for PowerChange with ${n.context} and synchronized context ${e.context}`,
                      ),
                      (n.context =
                        n.context === Mt.a.Off ? Mt.a.Off : e.context)),
                    this.fpkKombiSyncRudiService.sendMmiDisplayRequest(n));
                }));
          }
          processHmiContextUpdates() {
            this.fpkContextService.requestedContext$
              .pipe(
                Object(se.a)((t) => t !== Mt.a.NO_CHANGE),
                Object(at.a)(this.fpkContextService.currentContext$),
                Object(it.a)(([t, e]) => (t === e ? Mt.a.NO_CHANGE : t)),
                Object(it.a)((t) =>
                  t === Mt.a.History
                    ? this.fpkContextService.previousContext
                    : t,
                ),
                Object(at.a)(
                  this.currentDisplayFocus$,
                  this.fpkStateService.syncedState$,
                ),
                Object(Ye.a)(([t, e, n]) => {
                  t !== Mt.a.NO_CHANGE &&
                    n.isOffState &&
                    this.logger.warn(
                      "should never request a context change while the MMI is off",
                    );
                }),
                Object(it.a)(([t, e, n]) => this.createContextRequest(t, e, n)),
                Object(it.a)((t) => this.createMmiRequest(t, un.Normal)),
                Object(re.a)(this.onDestroy$$),
              )
              .subscribe(this.openDisplayRequests$$);
          }
          createContextRequest(t, e, n) {
            const i = this.defineRequestFocus(t, e, n);
            return this.createDisplayRequest(t, i);
          }
          defineRequestFocus(t, e, n) {
            const i = n.isOffState ? Mt.b.Kombi : this.selectRequestFocus(t);
            return this.normalizeFocus(i, e);
          }
          selectRequestFocus(t) {
            return Object(Mt.g)(t)
              ? Mt.b.MMI
              : Mt.a.Off === t
                ? Mt.b.Kombi
                : Mt.b.NoChange;
          }
          normalizeFocus(t, e) {
            return t === e ? Mt.b.NoChange : t;
          }
          processHmiFlapUpdates() {
            this.fpkKdkService.expectedKdkVisibility$
              .pipe(
                Object(it.a)((t) => (t ? Mt.e.KDK : Mt.e.RemoveFlap)),
                Object(Ge.a)(
                  (t, e) =>
                    t === e || (t !== Mt.e.KDK && e === Mt.e.RemoveFlap)
                      ? Mt.e.NoChange
                      : e,
                  Mt.e.NoChange,
                ),
                Object(Nt.a)(),
                Object(it.a)((t) =>
                  this.createDisplayRequest(Mt.a.NO_CHANGE, Mt.b.NoChange, t),
                ),
                Object(it.a)((t) => this.createMmiRequest(t, un.Normal)),
                Object(re.a)(this.onDestroy$$),
              )
              .subscribe(this.openDisplayRequests$$);
          }
          processHmiPowerUpdates() {
            this.fpkStateService.stateChangeAction$
              .pipe(
                Object(at.a)(this.fpkContextService.currentContext$),
                Object(it.a)(([t, e]) => [
                  t === ln.a.MmiOff ? Mt.a.Off : e,
                  this.defineFocusForPowerRequest(e, t),
                ]),
                Object(it.a)(([t, e]) => this.createDisplayRequest(t, e)),
                Object(it.a)((t) => this.createMmiRequest(t, un.PowerChange)),
                Object(re.a)(this.onDestroy$$),
              )
              .subscribe(this.openDisplayRequests$$);
          }
          defineFocusForPowerRequest(t, e) {
            return e === ln.a.MmiOff ? Mt.b.Kombi : this.selectRequestFocus(t);
          }
          processHmiAfterConnectionRestart() {
            this.triggerActionAfterConnectionRestart$
              .pipe(
                Object(at.a)(this.fpkKdkService.expectedKdkVisibility$),
                Object(se.a)(([, t]) => t),
                Object(qe.a)(Mt.e.KDK),
                Object(it.a)((t) =>
                  this.createDisplayRequest(Mt.a.NO_CHANGE, Mt.b.NoChange, t),
                ),
                Object(it.a)((t) => this.createMmiRequest(t, un.Normal)),
                Object(s.pd)(
                  this.logger,
                  "processHmiAfterConnectionRestart: trigger a re-register for the KDK",
                  !1,
                ),
                Object(re.a)(this.onDestroy$$),
              )
              .subscribe(this.openDisplayRequests$$);
          }
          initializeHmiStatusTracker() {
            Object(je.b)(
              this.fpkContextService.currentContext$.pipe(Object(Nt.a)()),
              this.fpkStageService.currentStage$.pipe(Object(Nt.a)()),
              this.currentDisplayFocus$,
              this.fpkSkinService.activeClusterSkin$.pipe(
                Object(it.a)((t) => t.id),
                Object(Nt.a)(),
              ),
              this.fpkKdkService.expectedKdkVisibility$.pipe(
                Object(Nt.a)(),
                Object(it.a)((t) => (t ? Mt.e.KDK : Mt.e.NoChange)),
              ),
              this.fpkStateService.syncedState$,
            )
              .pipe(
                Object(Ze.a)(50),
                Object(it.a)(([t, e, n, i, a, l]) =>
                  this.createDisplayStatus(t, e, n, i, a, l),
                ),
                Object(re.a)(this.onDestroy$$),
              )
              .subscribe((t) => {
                (this.logger.info("create new display_status:", t),
                  this.fpkKombiSyncRudiService.sendDisplayStatus(t));
              });
          }
          createDisplayStatus(
            t = Mt.a.NO_CHANGE,
            e = Mt.c.NoChange,
            n = Mt.b.NoChange,
            i = ze.a.Classic,
            a = Mt.e.NoChange,
            l,
          ) {
            return {
              state: l.isOffState ? We.OFF : We.NORMAL,
              context: l.isOffState ? Mt.a.Off : t,
              coreData: {
                view: e,
                focus: n,
                leftFlapState: 0,
                rightFlapState: a,
              },
              style: i,
            };
          }
          createMmiRequest(t, e) {
            return { reason: e, packet: t };
          }
          createDisplayRequest(
            t = Mt.a.NO_CHANGE,
            e = Mt.b.NoChange,
            n = Mt.e.NoChange,
          ) {
            return {
              context: t,
              coreData: {
                focus: e,
                view: Mt.c.NoChange,
                leftFlapState: Mt.d.NoChange,
                rightFlapState: n,
              },
            };
          }
          createDisplayResponse(t, e) {
            const n = Object.assign({}, t);
            return (
              t.context && (n.context = e.isOffState ? Mt.a.Off : t.context),
              n
            );
          }
          updateCurrentFocus(t) {
            (this.logger.info(
              "updateCurrentFocus: got an update for DisplayFocus to: ",
              t,
            ),
              t !== Mt.b.NoChange && this.currentDisplayFocus$$.next(t));
          }
          updateRightFlapVisibilityState(t) {
            switch (t) {
              case 15:
                (this.logger.info(
                  "updateRightFlapState: KDK is updated to gone",
                ),
                  this.fpkKdkService.updateCurrentVisibilityState(!1));
                break;
              case 10:
                (this.logger.info(
                  "updateRightFlapState: KDK is updated to visible",
                ),
                  this.fpkKdkService.updateCurrentVisibilityState(!0));
                break;
              default:
                this.logger.debug(
                  "updateRightFlapState: KDK visibility did not change",
                );
            }
          }
        }
        return (
          (t.ɵprov = i.bc({
            factory: function () {
              return new t(
                i.cc(Ve.a),
                i.cc(Tt.a),
                i.cc(Xe.a),
                i.cc(an.a),
                i.cc(nn),
                i.cc(ze.c),
                i.cc(ln.b),
                i.cc(u.a),
              );
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
      var pn = n("CFFw"),
        bn = n("Qs0t"),
        hn = n("AEBN"),
        dn = (function (t) {
          return (
            (t[(t.MAIN_FRAME = 0)] = "MAIN_FRAME"),
            (t[(t.SUBTEXTURE_FRAME = 1)] = "SUBTEXTURE_FRAME"),
            t
          );
        })({}),
        gn = (function (t) {
          return (
            (t[(t.INVISIBLE = 0)] = "INVISIBLE"),
            (t[(t.VISIBLE = 1)] = "VISIBLE"),
            t
          );
        })({});
      class mn {
        constructor() {
          ((this.version = "V2"),
            (this.frameType = dn.MAIN_FRAME),
            (this.timeStamp = 0),
            (this.mainContext = Mt.a.NO_CHANGE),
            (this.visiblePopUpId = 0),
            (this.bgGridVisibility = gn.INVISIBLE),
            (this.lastMainContext = Mt.a.NO_CHANGE),
            (this.lastFocusMainContext = Mt.b.NoChange),
            (this.lastViewSizeMainContext = Mt.c.NoChange),
            (this.lastPopUpId = 0),
            (this.lastFocusPopUpContext = Mt.b.NoChange),
            (this.lastViewSizePopUpContext = Mt.c.NoChange),
            (this.skinInformation = ze.a.Classic));
        }
      }
      let fn = (() => {
        class t {
          constructor(t, e, n, i, a, l, o, s) {
            ((this.fpkContextService = e),
              (this.fpkStageService = n),
              (this.fpkSkinService = i),
              (this.fpkDisplaySyncService = a),
              (this.fpkPopupSyncService = l),
              (this.backgroundService = o),
              (this.frameCounter = 0),
              (this.destroy$$ = new ue.a(1)),
              (this.autopilotRunning = !1),
              (this.annotationsSubject = new He.a(new Uint8ClampedArray(0))),
              (this.annotations$ = this.annotationsSubject.asObservable()),
              (this.logger = t.getLogger("fpk.AnnotationService")),
              (this.annotation = new mn()),
              this.initDependencies(),
              this.updateAnnotations(),
              s.scriptRunning$
                .pipe(Object(re.a)(this.destroy$$))
                .subscribe((t) => {
                  this.autopilotRunning = t;
                }));
          }
          initDependencies() {
            (this.fpkContextService.routedContext$
              .pipe(Object(re.a)(this.destroy$$))
              .subscribe((t) => {
                ((this.annotation.mainContext = t),
                  (this.annotation.lastMainContext = t),
                  this.updateAnnotations());
              }),
              this.fpkStageService.currentStage$
                .pipe(Object(re.a)(this.destroy$$))
                .subscribe((t) => {
                  ((this.annotation.lastViewSizeMainContext = t),
                    this.updateAnnotations());
                }),
              this.fpkDisplaySyncService.currentDisplayFocus$
                .pipe(Object(re.a)(this.destroy$$))
                .subscribe((t) => {
                  ((this.annotation.lastFocusMainContext = t),
                    this.updateAnnotations());
                }),
              this.fpkDisplaySyncService.triggerActionAfterConnectionRestart$
                .pipe(Object(re.a)(this.destroy$$))
                .subscribe(() => {
                  this.updateAnnotations();
                }),
              this.fpkContextService.triggerAnnotationRepaint$
                .pipe(Object(re.a)(this.destroy$$))
                .subscribe(() => {
                  this.updateAnnotations();
                }));
            const t = this.backgroundService.backgroundVisibilityUpdate$.pipe(
              Object(it.a)((t) =>
                s.k.Transparent === t.visibility ? gn.INVISIBLE : gn.VISIBLE,
              ),
            );
            (Object(je.b)(this.fpkPopupSyncService.currentActivePopupId$, t)
              .pipe(Object(re.a)(this.destroy$$))
              .subscribe(([t, e]) => {
                ((this.annotation.bgGridVisibility =
                  t !== bn.d.identifier ? gn.VISIBLE : e),
                  (this.annotation.visiblePopUpId = t),
                  (this.annotation.lastPopUpId = t),
                  this.updateAnnotations());
              }),
              this.fpkSkinService.activeClusterSkin$
                .pipe(Object(re.a)(this.destroy$$))
                .subscribe((t) => {
                  ((this.annotation.skinInformation = t.id),
                    this.updateAnnotations());
                }));
          }
          ngOnDestroy() {
            this.destroy$$.next();
          }
          updateAnnotations() {
            if (this.autopilotRunning)
              return void this.logger.warn(
                "Autopliot is running. Don't update FPK annotations to keep UI visible.",
              );
            this.annotation.timeStamp = new Date().getTime();
            const t = this.serializeAnnotation(this.annotation),
              e = this.encodeHmiString(t);
            (this.annotationsSubject.next(e),
              this.logger.info("Updating FPK annotations: ", t));
          }
          serializeAnnotation(t) {
            return `${`${t.version}-${t.frameType}-${t.timeStamp}`}|${`${t.mainContext}-${t.visiblePopUpId}-${t.bgGridVisibility}-` + `${t.lastMainContext}-${t.lastViewSizeMainContext}-${t.lastFocusMainContext}-` + `${t.lastPopUpId}-${t.lastFocusPopUpContext}-${t.lastViewSizePopUpContext}-${t.skinInformation}`}|`;
          }
          encodeHmiString(t) {
            const e = this.generateHmiPackage(t),
              n = this.generateFrameHeader(e.length, 1),
              i = new Uint8ClampedArray(n.length + e.length);
            return (i.set(n), i.set(e, n.length), i);
          }
          generateHmiPackage(t) {
            const e = t.length,
              n = new Uint8ClampedArray(3 + e);
            return (
              (n[0] = 255 & e),
              (n[1] = (e >> 8) & 255),
              (n[2] = 1),
              t.split("").forEach((t, e) => (n[e + 3] = t.charCodeAt(0))),
              n
            );
          }
          generateFrameHeader(t, e) {
            const n = new Uint8ClampedArray(8);
            return (
              (n[0] = 65),
              (n[1] = 0),
              (n[2] = 2),
              (n[3] = this.frameCounter++),
              (n[4] = 255 & t),
              (n[5] = (t >> 8) & 255),
              (n[6] = e),
              (n[7] = 0),
              n
            );
          }
        }
        return (
          (t.ɵprov = i.bc({
            factory: function () {
              return new t(
                i.cc(u.a),
                i.cc(Ve.a),
                i.cc(Tt.a),
                i.cc(ze.c),
                i.cc(cn),
                i.cc(pn.a),
                i.cc(Ue.a),
                i.cc(At.a),
              );
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
      var yn = n("jOdJ"),
        Sn = n("EPlm");
      let vn = (() => {
        class t {
          constructor(t, e, n) {
            ((this.keyEventService = t),
              (this.onDestroy$$ = new ue.a(1)),
              (this.currentFpkFocus$ = Object(je.b)(
                n.currentPopupFocus$,
                e.currentDisplayFocus$,
              ).pipe(
                Object(it.a)(([t, e]) => (t !== Mt.b.Inactive ? t : e)),
                Object(lt.a)(Mt.b.Kombi),
                Object(Nt.a)(),
              )),
              this.currentFpkFocus$
                .pipe(
                  Object(se.a)((t) => t !== Mt.b.NoChange),
                  Object(it.a)((t) => t === Mt.b.Kombi),
                  Object(re.a)(this.onDestroy$$),
                )
                .subscribe((e) => t.lockMflKeys(e)));
          }
          ngOnDestroy() {
            this.onDestroy$$.next();
          }
          manipulateFocus(t) {
            this.keyEventService.lockMflKeys(t === Mt.b.Kombi);
          }
        }
        return (
          (t.ɵprov = i.bc({
            factory: function () {
              return new t(i.cc(Rt.a), i.cc(cn), i.cc(pn.a));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
      const xn = { Information: { path: "information", mainScreen: !0 } };
      var On = (function (t) {
        return (
          (t[(t.AudiSport = "audiSport")] = "AudiSport"),
          (t[(t.Classic = "classic")] = "Classic"),
          (t[(t.ClassicLight = "classicLight")] = "ClassicLight"),
          (t[(t.Radius = "radius")] = "Radius"),
          (t[(t.SportBev = "sportBev")] = "SportBev"),
          (t[(t.SportBevPerformance = "sportBevPerformance")] =
            "SportBevPerformance"),
          (t[(t.StackRs = "stackRs")] = "StackRs"),
          (t[(t.StackS = "stackS")] = "StackS"),
          t
        );
      })({});
      let Cn = (() => {
        class t {
          constructor(t, e, n, i, a, l, o) {
            ((this.au3DebuggingService = t),
              (this.fpkAnnotations = e),
              (this.fpkContext = n),
              (this.fpkFocus = i),
              (this.fpkSkinService = a),
              (this.fpkKdkService = l),
              (this.fpkStage = o));
          }
          init() {
            (this.au3DebuggingService.init(),
              this.au3DebuggingService.commonDebuggingService.addDebugContext({
                contextName: "fpk",
                debugObject: {
                  FpkFocus: Mt.b,
                  FpkContext: Mt.a,
                  SkinVariants: On,
                  getAnnotations: this.getFpkAnnotations.bind(this),
                  goToContext: this.goToContext.bind(this),
                  requestContextAtFpk: this.requestContextAtFpk.bind(this),
                  manipulateStage: this.manipulateStage.bind(this),
                  manipulateFocus: this.manipulateFocus.bind(this),
                  manipulateSkin: this.manipulateSkin.bind(this),
                  manipulateKdkVisibility:
                    this.manipulateKdkVisibility.bind(this),
                  manipulateUserDefinedKdkVisibility:
                    this.manipulateUserDefinedKdkVisibility.bind(this),
                },
              }),
              this.au3DebuggingService.commonDebuggingService.addDebugContext({
                contextName: "routesFPK",
                debugObject: {
                  fpkRadio: o.a,
                  fpkMedia: l.a,
                  fpkPhone: a.a,
                  fpkNavi: h.a,
                  fpkASI: d.a,
                  fpkAsterix: g.a,
                },
              }),
              s.gd.isBentley &&
                this.au3DebuggingService.commonDebuggingService.addToExistingDebugContext(
                  "routesFPK",
                  { fpkOffroad: xn },
                ));
          }
          getFpkAnnotations() {
            this.fpkAnnotations.annotations$
              .pipe(Object(yn.a)())
              .subscribe((t) => console.log("FPK Annotations: ", t));
          }
          goToContext(t) {
            if (!t)
              return (
                console.log(
                  "debuggingService.fpk.goToContext(context: FpkContext)",
                ),
                console.log(
                  "  FpkContext can be found in debuggingService.fpk.FpkContext enum",
                ),
                void console.log("")
              );
            this.fpkContext.setFpkContextByRequest(t);
          }
          requestContextAtFpk(t) {
            if (!t)
              return (
                console.log(
                  "debuggingService.fpk.requestContextAtFpk(context: FpkContext)",
                ),
                console.log(
                  "  FpkContext can be found in debuggingService.fpk.FpkContext enum",
                ),
                void console.log("")
              );
            this.fpkContext.showFpkContext(t);
          }
          manipulateStage() {
            this.fpkStage.toggleFpkStage();
          }
          manipulateFocus(t) {
            if (void 0 === t)
              return (
                console.log(
                  "debuggingService.fpk.manipulateFocus(focus: FpkFocus)",
                ),
                console.log(
                  "  FpkFocus can be found in debuggingService.fpk.FpkFocus enum",
                ),
                void console.log("")
              );
            this.fpkFocus.manipulateFocus(t);
          }
          manipulateSkin(t) {
            if (void 0 === t)
              return (
                console.log(
                  "debuggingService.fpk.manipulateSkin(skinVariant: SkinVariants)",
                ),
                console.log(
                  "  SkinVariants can be found in debuggingService.fpk.SkinVariants enum",
                ),
                void console.log("")
              );
            this.fpkSkinService.manipulateSkin(t);
          }
          manipulateKdkVisibility(t) {
            if (void 0 === t)
              return (
                console.log(
                  "debuggingService.fpk.manipulateKdkVisibility(state: boolean)",
                ),
                void console.log("")
              );
            this.fpkKdkService.updateCurrentVisibilityState(t);
          }
          manipulateUserDefinedKdkVisibility(t) {
            if (void 0 === t)
              return (
                console.log(
                  "debuggingService.fpk.manipulateUserDefinedKdkVisibility(state: boolean)",
                ),
                void console.log("")
              );
            this.fpkKdkService.updateUserDefinedKdkVisibility(t);
          }
        }
        return (
          (t.ɵprov = i.bc({
            factory: function () {
              return new t(
                i.cc(Sn.a),
                i.cc(fn),
                i.cc(Ve.a),
                i.cc(vn),
                i.cc(ze.c),
                i.cc(nn),
                i.cc(Tt.a),
              );
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
      var Pn = n("Ngpk"),
        _n = n("WABo"),
        kn = n("n6NA"),
        An = n("vAPC"),
        Nn = n("+0mq"),
        Tn = n("vrpT"),
        Mn = (function (t) {
          return ((t.Large = ""), (t.Small = "_KB"), t);
        })({});
      const Dn = {
        displayName: s.G.CLUSTER,
        displayableName: s.J.BROWSER_CLUSTER,
        layerName: "Layer_Browser",
        source: { x: 0, y: 0, w: 1920, h: 722 },
        target: { x: 0, y: 0, w: 1920, h: 722 },
      };
      class $n {
        constructor(
          t,
          e,
          n,
          i,
          a,
          l,
          o,
          r,
          u,
          c,
          p,
          b,
          h,
          d,
          g,
          m,
          f,
          y,
          S,
          v,
          x,
        ) {
          ((this.injector = t),
            (this.loader = e),
            (this.startupService = n),
            (this.entertainmentService = i),
            (this.fpkStageService = a),
            (this.fpkContextService = l),
            (this.globalRoutingService = o),
            (this.displayManager = u),
            (this.fpkAnnotationService = c),
            (this.windowResizeDetectionService = p),
            (this.bgVisibilityService = b),
            (this.fpkPhoneService = h),
            (this.systemConfigService = d),
            (this.popupManagementService = g),
            (this.i18nService = m),
            (this.logService = S),
            (this.autopilotActivationService = v),
            (this.animationService = x),
            (this.destroy$$ = new ue.a(1)),
            (this.pcSim = s.lc.pcSim),
            (this.backgroundVisibilityEnum = s.k),
            (this.debugOverlaysVisible = !1),
            (this.textToolMode = s.gd.textToolMode),
            (this.contextState = s.Uc),
            (this.receivedFinalViewState$$ = new Ee.a()),
            (this.fadeOutComplete$$ = new Ee.a()),
            (this.fpkStageEnum = Mt.c),
            (this.dualDisplay = !1),
            (this.autopilotRunning = !1),
            (this.logger = S.getLogger("fpk.FpkComponent")),
            (this.mergeLogger = S.getMergelogLogger()));
          const O = s.gd.variant[0].toUpperCase() + s.gd.variant.slice(1);
          (f.setTitle(`UI-${O}-FPK`),
            (this.isPhonePopupActive$ = this.popupManagementService.isActive(
              s.Ob.POPUP_FPK_PHONE_CALLSTACK,
            )));
        }
        contextChangeDone(t) {
          (t.fromState !== s.Uc &&
            t.fromState !== s.Tc &&
            t.fromState !== s.Pc) ||
            this.fadeOutComplete$$.next();
        }
        viewSizeChangeDone(t) {
          const e = t.toState;
          (this.fpkStageService.animationStateFinished(e),
            (e !== s.yc.Large && e !== s.yc.Small) ||
              this.receivedFinalViewState$$.next(e));
        }
        get fullscreenPopupActive() {
          return (
            !!this.popups && this.popups.nativeElement.childElementCount > 0
          );
        }
        keyDown(t) {
          (s.lc.pcSim || this.autopilotRunning) && t.code === s.eb.MFW_VIEW
            ? this.fpkStageService.toggleFpkStage()
            : (s.lc.pcSim || this.autopilotRunning) &&
                t.code === s.eb.MFW_KONTEXT_PREV
              ? this.fpkContextService.previousFpkContext()
              : (s.lc.pcSim || this.autopilotRunning) &&
                  t.code === s.eb.MFW_KONTEXT_NEXT
                ? this.fpkContextService.nextFpkContext()
                : t.code === s.eb.MFW_PHONE_HOOK &&
                  (this.systemConfigService.isLvdsKombi()
                    ? this.fpkPhoneService.hookKeyPressed()
                    : this.logger.info(
                        "The LVDS Kombi is not coded - do not react on phone MFL button",
                      ));
        }
        ngOnInit() {
          (this.startupService.startupComplete$
            .pipe(Object(ot.a)(1))
            .subscribe(() => {
              (this.mergeLogger.log(
                "Start initializing routing services of FpkModule ...",
              ),
                this.globalRoutingService.initRoutingServices(),
                this.mergeLogger.log(
                  "Finished initializing routing services of FpkModule",
                ),
                this.mergeLogger.log(
                  "Start initializing background services of FpkModule ...",
                ),
                this.injector.get(hn.t).init(),
                this.mergeLogger.log(
                  "Finished initializing background services of FpkModule",
                ),
                Object(s.od)(() => {
                  (this.injector.get(Cn).init(),
                    (this.debugOverlaysVisible = !0));
                }),
                s.id.canHaveLowerDisplay &&
                  this.systemConfigService.dualDisplay$
                    .pipe(Object(Nt.a)(), Object(re.a)(this.destroy$$))
                    .subscribe((t) => {
                      ((this.dualDisplay = t),
                        t && setTimeout(() => this.loadLowerDisplay(), 5e3));
                    }));
            }),
            this.fpkStageService.currentStage$.subscribe((t) => {
              ((this.activeStage = t),
                this.i18nService.setDynamicIdPostfix(
                  t === Mt.c.Small ? Mn.Small : Mn.Large,
                ));
            }),
            (this.showFpkBottomMask$ =
              this.fpkContextService.currentContext$.pipe(
                Object(it.a)((t) => t === Mt.a.Audio),
              )),
            Object(je.b)(
              this.fpkContextService.currentContext$,
              this.entertainmentService.activeGroup$.pipe(Object(lt.a)(void 0)),
            )
              .pipe(
                Object(it.a)(([t, e]) => this.getDestinationAppContext(t, e)),
                Object(se.a)(s.wd),
                Object(Nt.a)((t, e) => e !== r.o && e === t),
                Object(nt.a)((t) => this.deferToContext(t)),
                Object(re.a)(this.destroy$$),
              )
              .subscribe((t) => {
                this.logger.info(
                  "currentContext$: routing to destination resolved with: ",
                  t,
                );
              }),
            this.displayManager.activateLayer(Dn),
            this.windowResizeDetectionService.resize$
              .pipe(Object(re.a)(this.destroy$$))
              .subscribe((t) => {
                ((Dn.source.w = t.width),
                  (Dn.target.w = t.width),
                  this.displayManager.updateLayerRegions(
                    Dn.layerName,
                    Dn.source,
                    Dn.target,
                  ));
              }));
          const t = this.arod.isHidden$.pipe(Object(it.a)((t) => !t)),
            e = Object(et.a)(!0).pipe(
              Object(Ye.a)(() =>
                this.logger.warn(
                  "fadeOutComplete$$ did not emit after 1s - fade in screen to avoid black screen",
                ),
              ),
            );
          (this.routerOutlet.activateEvents
            .pipe(
              Object(nt.a)(
                () => (
                  (this.contextState = s.Rc),
                  Object(je.b)(
                    t,
                    this.fadeOutComplete$$.pipe(
                      Object(ot.a)(1),
                      Object(An.a)(1e3, e),
                    ),
                  ).pipe(Object(se.a)(([t]) => t))
                ),
              ),
            )
            .subscribe(() => {
              (this.fpkContextService.updateRoutedContext(
                this.routerOutlet.activatedRouteData.context,
              ),
                requestAnimationFrame(() => {
                  ((this.contextState = s.Uc),
                    this.startupService.firstContextEntered());
                }));
            }),
            this.receivedFinalViewState$$
              .pipe(
                Object(Ze.a)(100),
                Object(se.a)(() => !!this.fpkTerminalReference),
                Object(re.a)(this.destroy$$),
              )
              .subscribe(() => {
                const t = this.fpkTerminalReference.nativeElement.style.opacity;
                if (void 0 !== t && "1" !== t) {
                  const e =
                    this.fpkTerminalReference.nativeElement.getAttribute(
                      "style",
                    );
                  (this.logger.warn(
                    `Opacity was invalid with ${t} after ViewSizeAnimation finished`,
                  ),
                    this.fpkTerminalReference.nativeElement.setAttribute(
                      "style",
                      e + "opacity: 1; transition: opacity 100ms;",
                    ));
                }
              }),
            Object(s.Nc)(this.systemConfigService, this.logService),
            this.autopilotActivationService.scriptRunning$
              .pipe(Object(re.a)(this.destroy$$))
              .subscribe((t) => {
                this.autopilotRunning = t;
              }));
        }
        ngAfterViewInit() {
          (this.mergeLogger.log(s.hc.FIRST_SCREEN_INITIALIZED),
            setTimeout(() => {
              (console.timeEnd("[Startup] first screen rendered"),
                this.mergeLogger.log(s.hc.FIRST_SCREEN_RENDERED));
            }, 0),
            this.animationService.startTimeoutForFadeInDone());
        }
        ngOnDestroy() {
          (this.destroy$$.next(), this.destroy$$.complete());
        }
        deferToContext(t) {
          return (
            this.logger.info("currentContext$: enter context: ", t),
            Object(Be.a)(
              this.globalRoutingService
                .enterAppContext(t)
                .catch(
                  (t) => (
                    this.logger.error(
                      "currentContext$: context change failed",
                      t,
                    ),
                    !1
                  ),
                ),
            )
          );
        }
        getDestinationAppContext(t, e) {
          return this.isNavigation(t)
            ? r.m
            : this.isPhone(t)
              ? r.o
              : this.isAudio(t)
                ? this.getAppContextForAudioContext(e)
                : this.isOffroad(t)
                  ? r.n
                  : r.l;
        }
        isNavigation(t) {
          return t === Mt.a.Navi || t === Mt.a.Navi_Map || t === Mt.a.Navi_Dest;
        }
        isPhone(t) {
          return t === Mt.a.Phone;
        }
        isAudio(t) {
          return (
            t === Mt.a.Audio ||
            t === Mt.a.Audio_Tuner ||
            t === Mt.a.Audio_Media ||
            t === Mt.a.Audio_ASI
          );
        }
        isOffroad(t) {
          return t === Mt.a.Offroad && s.gd.isBentley;
        }
        getAppContextForAudioContext(t) {
          if (!t)
            return (
              this.logger.warn(
                "getAppContextForAudioContext: no entertainment group",
              ),
              null
            );
          switch (t.type) {
            case Pn.c.TUNER:
              return r.p;
            case Pn.c.MEDIA:
            case Pn.c.TV:
              return r.k;
            case Pn.c.SMARTPHONEINTEGRATION:
              return r.i;
            case Pn.c.EMBEDDEDDEVICES:
              return r.j;
            default:
              return (
                this.logger.error(
                  `getAppContextForAudioContext: invalid entertainment group: "${t.type}"`,
                ),
                null
              );
          }
        }
        loadLowerDisplay() {
          return Object(Ie.a)(this, void 0, void 0, function* () {
            this.lowerDisplayModuleRef ||
              (this.mergeLogger.log(s.hc.LOAD_LOWER_DISPLAY_MODULE),
              yield this.loader
                .load(
                  "apps/main/src/app/lower-display/lower-display.module#LowerDisplayModule",
                )
                .then((t) => {
                  ((this.lowerDisplayModuleRef = t.create(this.injector)),
                    this.lowerDisplayTerminal.createComponent(
                      this.lowerDisplayModuleRef.componentFactoryResolver.resolveComponentFactory(
                        Nn.a,
                      ),
                    ),
                    this.mergeLogger.log(s.hc.LOADED_LOWER_DISPLAY_MODULE));
                }));
          });
        }
      }
      var wn = n("FfND"),
        Ln = n("Bi8f"),
        Fn = i.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;width:1280px;height:898px}.presets[_ngcontent-%COMP%]{width:100%;height:238px;background-color:#000}mib3-haptic-debug[_ngcontent-%COMP%]{z-index:1010}[_nghost-%COMP%]{display:block;color:#fff;height:784px;width:1920px}.dualdisplay[_nghost-%COMP%]{height:1682px}.fpk-stage-small[_ngcontent-%COMP%]   .app__content[_ngcontent-%COMP%]{width:430px}.fpk-stage-big[_ngcontent-%COMP%]   .app__content[_ngcontent-%COMP%]{width:792px}.context__fpk[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;height:782px;background-color:#000;overflow:hidden}.context__lower-display[_ngcontent-%COMP%]{position:fixed;left:0;top:782px;touch-action:none;height:898px;overflow:hidden}.annotations[_ngcontent-%COMP%]{display:block;height:2px}.screen__overlay[_ngcontent-%COMP%]{width:1920px;height:720px;background-color:#000;position:absolute;top:0;left:0;z-index:-10;opacity:0;will-change:opacity;transition:opacity .3s ease-in}.screen__overlay--active[_ngcontent-%COMP%]{transition:none;opacity:1}.app[_ngcontent-%COMP%]{margin-top:142px;max-height:431px;display:grid;align-items:center;justify-content:center}.app__content[_ngcontent-%COMP%], .context__popups[_ngcontent-%COMP%], .context__popups-partial[_ngcontent-%COMP%]{grid-column:1;grid-row:1;justify-self:center}.app__content[_ngcontent-%COMP%]{position:relative;min-width:0;height:431px;background-color:#000}.context__popups[_ngcontent-%COMP%]{position:relative;touch-action:none;color:#fff;height:100%}.context__popups-partial[_ngcontent-%COMP%]{touch-action:none;color:#fff;height:431px;display:flex;flex-direction:column;justify-content:flex-end;align-items:center}.app__content--hidden[_ngcontent-%COMP%]{visibility:hidden}.app__content--transparent[_ngcontent-%COMP%], .context--transparent[_ngcontent-%COMP%]{background-color:initial}.fpk-tubes[_ngcontent-%COMP%]{height:720px;background-repeat:no-repeat;position:absolute;top:0;left:0;width:100%;transition:background-image .5s ease-in-out}.fpk-tubes--gb[_ngcontent-%COMP%]{background-image:url(/decorators/pcsim_only/fake_tubes_gb.webp)}.fpk-tubes--kb[_ngcontent-%COMP%]{background-image:url(/decorators/pcsim_only/fake_tubes_kb.webp)}.fpk-mask[_ngcontent-%COMP%]{height:96px;background-color:#000;position:absolute;top:624px;left:0;width:100%}.fpk-annotations[_ngcontent-%COMP%]{position:fixed;left:0;top:720px}.displaymanagement-annotations[_ngcontent-%COMP%]{position:fixed;left:0;bottom:0}.native-screen__indicator[_ngcontent-%COMP%]{height:10px;width:10px;border-color:#fff transparent;border-style:solid;border-width:2px;position:fixed;top:10px;right:10px}au3-autopilot-overlay[_ngcontent-%COMP%]{top:170px;right:670px}",
            ],
          ],
          data: {
            animation: [
              {
                type: 7,
                name: "contextChange",
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
                    type: 0,
                    name: "visibleHomeScreen",
                    styles: { type: 6, styles: { opacity: 1 }, offset: null },
                    options: void 0,
                  },
                  {
                    type: 0,
                    name: "visibleASIScreen",
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
                    expr: "void => visibleHomeScreen",
                    animation: [],
                    options: null,
                  },
                  {
                    type: 1,
                    expr: "void => visibleASIScreen",
                    animation: [],
                    options: null,
                  },
                  {
                    type: 1,
                    expr: "void => emptyFpk",
                    animation: [],
                    options: null,
                  },
                  {
                    type: 1,
                    expr: "visibleHomeScreen => asi",
                    animation: [
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
                                timings: "50ms cubic-bezier(.22,.43,.57,.85)",
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
                    expr: "visibleHomeScreen => *",
                    animation: [
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
                                timings: "125ms cubic-bezier(.22,.43,.57,.85)",
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
                    expr: "visible => asi",
                    animation: [
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
                                timings: "50ms cubic-bezier(.22,.43,.57,.85)",
                              },
                            ],
                            options: { optional: !0 },
                          },
                          {
                            type: 11,
                            selector: ".context router-outlet ~ *",
                            animation: [
                              {
                                type: 6,
                                styles: { opacity: 0.99999 },
                                offset: null,
                              },
                              {
                                type: 4,
                                styles: {
                                  type: 6,
                                  styles: { opacity: 1 },
                                  offset: null,
                                },
                                timings: 50,
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
                    expr: "visible => emptyFpk",
                    animation: [
                      { type: 6, styles: { opacity: 0 }, offset: null },
                      {
                        type: 4,
                        styles: null,
                        timings: "10ms cubic-bezier(.22,.43,.57,.85)",
                      },
                    ],
                    options: null,
                  },
                  {
                    type: 1,
                    expr: "visible => *",
                    animation: [
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
                                timings: "125ms cubic-bezier(.22,.43,.57,.85)",
                              },
                            ],
                            options: { optional: !0 },
                          },
                          {
                            type: 11,
                            selector: ".context router-outlet ~ *",
                            animation: [
                              {
                                type: 6,
                                styles: { opacity: 0.99999 },
                                offset: null,
                              },
                              {
                                type: 4,
                                styles: {
                                  type: 6,
                                  styles: { opacity: 1 },
                                  offset: null,
                                },
                                timings: 125,
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
                    expr: "visibleASIScreen => *",
                    animation: [
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
                                timings: "50ms cubic-bezier(.22,.43,.57,.85)",
                              },
                            ],
                            options: { optional: !0 },
                          },
                          {
                            type: 11,
                            selector: ".context router-outlet ~ *",
                            animation: [
                              {
                                type: 6,
                                styles: { opacity: 0.99999 },
                                offset: null,
                              },
                              {
                                type: 4,
                                styles: {
                                  type: 6,
                                  styles: { opacity: 1 },
                                  offset: null,
                                },
                                timings: 50,
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
                    expr: "emptyFpk => visible",
                    animation: [
                      {
                        type: 6,
                        styles: { opacity: 0, transform: "scale(0.9)" },
                        offset: null,
                      },
                      {
                        type: 3,
                        steps: [
                          {
                            type: 4,
                            styles: {
                              type: 6,
                              styles: { transform: "scale(1)" },
                              offset: null,
                            },
                            timings: "125ms linear",
                          },
                          {
                            type: 4,
                            styles: {
                              type: 5,
                              steps: [
                                {
                                  type: 6,
                                  styles: { offset: 0.6, opacity: 0.1 },
                                  offset: null,
                                },
                                {
                                  type: 6,
                                  styles: { offset: 0.65, opacity: 0.59 },
                                  offset: null,
                                },
                                {
                                  type: 6,
                                  styles: { offset: 0.7, opacity: 0.87 },
                                  offset: null,
                                },
                                {
                                  type: 6,
                                  styles: { offset: 0.8, opacity: 0.97 },
                                  offset: null,
                                },
                                {
                                  type: 6,
                                  styles: { offset: 0.9, opacity: 0.99 },
                                  offset: null,
                                },
                                {
                                  type: 6,
                                  styles: { offset: 1, opacity: 1 },
                                  offset: null,
                                },
                              ],
                            },
                            timings: 210,
                          },
                        ],
                        options: null,
                      },
                    ],
                    options: null,
                  },
                  {
                    type: 1,
                    expr: "* => visible",
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
                  {
                    type: 1,
                    expr: "* => visibleHomeScreen",
                    animation: [
                      {
                        type: 6,
                        styles: { opacity: 0, transform: "scale(1.1)" },
                        offset: null,
                      },
                      {
                        type: 3,
                        steps: [
                          {
                            type: 4,
                            styles: {
                              type: 6,
                              styles: { transform: "scale(1)" },
                              offset: null,
                            },
                            timings: "125ms linear",
                          },
                          {
                            type: 4,
                            styles: {
                              type: 5,
                              steps: [
                                {
                                  type: 6,
                                  styles: { offset: 0, opacity: 0 },
                                  offset: null,
                                },
                                {
                                  type: 6,
                                  styles: { offset: 0.1, opacity: 0.59 },
                                  offset: null,
                                },
                                {
                                  type: 6,
                                  styles: { offset: 0.2, opacity: 0.87 },
                                  offset: null,
                                },
                                {
                                  type: 6,
                                  styles: { offset: 0.3, opacity: 0.97 },
                                  offset: null,
                                },
                                {
                                  type: 6,
                                  styles: { offset: 0.4, opacity: 0.99 },
                                  offset: null,
                                },
                                {
                                  type: 6,
                                  styles: { offset: 0.5, opacity: 1 },
                                  offset: null,
                                },
                                {
                                  type: 6,
                                  styles: { offset: 1, opacity: 1 },
                                  offset: null,
                                },
                              ],
                            },
                            timings: 125,
                          },
                        ],
                        options: null,
                      },
                    ],
                    options: null,
                  },
                  {
                    type: 1,
                    expr: "* => visibleASIScreen",
                    animation: [
                      {
                        type: 6,
                        styles: { opacity: 0, transform: "scale(0.9)" },
                        offset: null,
                      },
                      {
                        type: 4,
                        styles: null,
                        timings: "50ms cubic-bezier(.22,.43,.57,.85)",
                      },
                    ],
                    options: null,
                  },
                ],
                options: {},
              },
              {
                type: 7,
                name: "viewSizeChange",
                definitions: [
                  {
                    type: 0,
                    name: "large",
                    styles: {
                      type: 6,
                      styles: {
                        opacity: 1,
                        transform: "translateX({{xOffset}}px)",
                      },
                      offset: null,
                    },
                    options: { params: { xOffset: 0 } },
                  },
                  {
                    type: 0,
                    name: "small",
                    styles: {
                      type: 6,
                      styles: {
                        opacity: 1,
                        transform: "translateX({{xOffset}}px)",
                      },
                      offset: null,
                    },
                    options: { params: { xOffset: 0 } },
                  },
                  {
                    type: 0,
                    name: "transition",
                    styles: {
                      type: 6,
                      styles: { opacity: "{{opacity}}" },
                      offset: null,
                    },
                    options: { params: { opacity: 1 } },
                  },
                  {
                    type: 1,
                    expr: "void => large",
                    animation: [],
                    options: null,
                  },
                  {
                    type: 1,
                    expr: "void => small",
                    animation: [],
                    options: null,
                  },
                  {
                    type: 1,
                    expr: "large => transition",
                    animation: {
                      type: 3,
                      steps: [
                        {
                          type: 11,
                          selector: "au3-popup .background",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: {
                                  width: "518px",
                                  transform: "translateX(180px)",
                                },
                                offset: null,
                              },
                              timings: "200ms cubic-bezier(.14,.47,.92,.68)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: "au3-combi-menu .background",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: {
                                  width: "518px",
                                  transform: "translateX(180px)",
                                },
                                offset: null,
                              },
                              timings: "150ms cubic-bezier(.14,.47,.92,.68)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: "au3-combi-menu .combimenu__content",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { opacity: 0 },
                                offset: null,
                              },
                              timings: "30ms cubic-bezier(.14,.47,.92,.68)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: "au3-fpk-screen > :not(au3-combi-menu)",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { opacity: 0 },
                                offset: null,
                              },
                              timings: "30ms cubic-bezier(.14,.47,.92,.68)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: ".context__popups-partial",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { opacity: 0 },
                                offset: null,
                              },
                              timings: "30ms cubic-bezier(.14,.47,.92,.68)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: "au3-popup",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { opacity: 0 },
                                offset: null,
                              },
                              timings: "30ms cubic-bezier(.14,.47,.92,.68)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: ":self",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: {
                                  opacity: "{{opacity}}",
                                  transform: "translateX({{xOffset}}px)",
                                },
                                offset: null,
                              },
                              timings: "{{terminalFadeOutDuration}}ms",
                            },
                          ],
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: "au3-fpk-status-line",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { left: "calc(-1*{{xOffset}}px)" },
                                offset: null,
                              },
                              timings: "{{terminalFadeOutDuration}}ms",
                            },
                          ],
                          options: { optional: !0 },
                        },
                      ],
                      options: null,
                    },
                    options: {
                      params: {
                        xOffset: 0,
                        opacity: 1,
                        terminalFadeOutDuration: 30,
                      },
                    },
                  },
                  {
                    type: 1,
                    expr: "small => transition",
                    animation: {
                      type: 3,
                      steps: [
                        {
                          type: 11,
                          selector: "au3-popup .background",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { width: "878px" },
                                offset: null,
                              },
                              timings: "100ms cubic-bezier(.14,.47,.92,.68)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: "au3-combi-menu .background",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: {
                                  width: "878px",
                                  transform: "translateX(-180px)",
                                },
                                offset: null,
                              },
                              timings: "150ms cubic-bezier(.14,.47,.92,.68)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: "au3-combi-menu .combimenu__content",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { opacity: 0 },
                                offset: null,
                              },
                              timings: "30ms cubic-bezier(.14,.47,.92,.68)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: "au3-fpk-screen > :not(au3-combi-menu)",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { opacity: 0 },
                                offset: null,
                              },
                              timings: "30ms cubic-bezier(.14,.47,.92,.68)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: ".context__popups-partial",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { opacity: 0 },
                                offset: null,
                              },
                              timings: "30ms cubic-bezier(.14,.47,.92,.68)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: "au3-popup",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { opacity: 0 },
                                offset: null,
                              },
                              timings: "30ms cubic-bezier(.14,.47,.92,.68)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: ":self",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: {
                                  opacity: "{{opacity}}",
                                  transform: "translateX({{xOffset}}px)",
                                },
                                offset: null,
                              },
                              timings: "{{terminalFadeOutDuration}}ms",
                            },
                          ],
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: "au3-fpk-status-line",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { left: "calc(-1*{{xOffset}}px)" },
                                offset: null,
                              },
                              timings: "{{terminalFadeOutDuration}}ms",
                            },
                          ],
                          options: { optional: !0 },
                        },
                      ],
                      options: null,
                    },
                    options: {
                      params: {
                        xOffset: 0,
                        opacity: 1,
                        terminalFadeOutDuration: 30,
                      },
                    },
                  },
                  {
                    type: 1,
                    expr: "transition => large",
                    animation: {
                      type: 3,
                      steps: [
                        {
                          type: 11,
                          selector: "au3-combi-menu .combimenu__content",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { opacity: 1 },
                                offset: null,
                              },
                              timings:
                                "200ms 50ms cubic-bezier(.14,.47,.92,.68)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: "au3-fpk-screen > :not(au3-combi-menu)",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { opacity: 1 },
                                offset: null,
                              },
                              timings:
                                "200ms 50ms cubic-bezier(.14,.47,.92,.68)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: ".context__popups-partial",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { opacity: 1 },
                                offset: null,
                              },
                              timings:
                                "200ms 50ms cubic-bezier(.14,.47,.92,.68)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: "au3-popup",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { opacity: 1 },
                                offset: null,
                              },
                              timings:
                                "200ms 50ms cubic-bezier(.14,.47,.92,.68)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                      ],
                      options: null,
                    },
                    options: null,
                  },
                  {
                    type: 1,
                    expr: "transition => small",
                    animation: {
                      type: 3,
                      steps: [
                        {
                          type: 11,
                          selector: "au3-combi-menu .combimenu__content",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { opacity: 1 },
                                offset: null,
                              },
                              timings:
                                "200ms 50ms cubic-bezier(.14,.47,.92,.68)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: "au3-fpk-screen > :not(au3-combi-menu)",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { opacity: 1 },
                                offset: null,
                              },
                              timings:
                                "200ms 50ms cubic-bezier(.14,.47,.92,.68)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: ".context__popups-partial",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { opacity: 1 },
                                offset: null,
                              },
                              timings:
                                "200ms 50ms cubic-bezier(.14,.47,.92,.68)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: "au3-popup",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { opacity: 1 },
                                offset: null,
                              },
                              timings:
                                "200ms 50ms cubic-bezier(.14,.47,.92,.68)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                      ],
                      options: null,
                    },
                    options: null,
                  },
                ],
                options: {},
              },
            ],
          },
        });
      function Rn(t) {
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
              "div",
              [
                ["class", "context__lower-display"],
                ["id", "Terminal=AUDI_LOWERDISPLAY"],
                ["ttDoNotToggleChildren", ""],
                ["ttIgnore", ""],
              ],
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
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(2, 16384, null, 0, I.a, [], null, null),
            i.xb(3, 16384, null, 0, Pt.a, [], null, null),
            (t()(),
            i.yb(
              4,
              16777216,
              [
                [2, 3],
                ["lowerDisplayTerminal", 1],
              ],
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
          function (t, e) {
            t(e, 1, 0, "Terminal=AUDI_LOWERDISPLAY");
          },
          null,
        );
      }
      function In(t) {
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
              "div",
              [["class", "fpk-tubes"]],
              [
                [2, "fpk-tubes--gb", null],
                [2, "fpk-tubes--kb", null],
              ],
              null,
              null,
              null,
              null,
            )),
          ],
          null,
          function (t, e) {
            var n = e.component;
            t(
              e,
              0,
              0,
              n.activeStage === n.fpkStageEnum.Large,
              n.activeStage === n.fpkStageEnum.Small,
            );
          },
        );
      }
      function En(t) {
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
              "div",
              [["class", "fpk-mask"]],
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
      function jn(t) {
        return i.ac(
          0,
          [
            (t()(), i.hb(16777216, null, null, 2, null, En)),
            i.xb(
              1,
              16384,
              null,
              0,
              tt.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            i.Pb(131072, tt.b, [i.h]),
            (t()(), i.hb(0, null, null, 0)),
          ],
          function (t, e) {
            var n = e.component;
            t(
              e,
              1,
              0,
              i.Yb(e, 1, 0, i.Nb(e, 2).transform(n.showFpkBottomMask$)),
            );
          },
          null,
        );
      }
      function Bn(t) {
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
              "au3-autopilot-overlay",
              [
                ["ttDoNotToggleChildren", ""],
                ["ttIgnore", ""],
              ],
              null,
              null,
              null,
              _t.b,
              _t.a,
            )),
            i.xb(2, 16384, null, 0, I.a, [], null, null),
            i.xb(3, 16384, null, 0, Pt.a, [], null, null),
            i.xb(4, 4440064, null, 0, kt.a, [At.a, i.h], null, null),
          ],
          function (t, e) {
            t(e, 4, 0);
          },
          null,
        );
      }
      function Vn(t) {
        return i.ac(
          0,
          [
            i.Tb(402653184, 1, { fpkTerminalReference: 0 }),
            i.Tb(671088640, 2, { lowerDisplayTerminal: 0 }),
            i.Tb(671088640, 3, { popups: 0 }),
            i.Tb(402653184, 4, { routerOutlet: 0 }),
            i.Tb(402653184, 5, { arod: 0 }),
            (t()(),
            i.yb(
              5,
              0,
              [
                [1, 0],
                ["fpkTerminal", 1],
              ],
              null,
              21,
              "div",
              [
                ["au3FpkStage", ""],
                ["class", "context__fpk"],
                ["id", "Terminal=AUDI_FPK"],
              ],
              [
                [2, "context--transparent", null],
                [24, "@viewSizeChange", 0],
                [2, "fpk-stage-small", null],
                [2, "fpk-stage-big", null],
              ],
              [[null, "@viewSizeChange.done"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "@viewSizeChange.done" === e &&
                    (i = !1 !== t.component.viewSizeChangeDone(n) && i),
                  i
                );
              },
              null,
              null,
            )),
            i.xb(
              6,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(7, 212992, null, 0, Dt, [Tt.a], null, null),
            i.Pb(131072, tt.b, [i.h]),
            i.Pb(131072, tt.b, [i.h]),
            (t()(),
            i.yb(
              10,
              0,
              null,
              null,
              16,
              "div",
              [["class", "app"]],
              [[24, "@contextChange", 0]],
              [[null, "@contextChange.done"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "@contextChange.done" === e &&
                    (i = !1 !== t.component.contextChangeDone(n) && i),
                  i
                );
              },
              null,
              null,
            )),
            (t()(),
            i.yb(
              11,
              0,
              null,
              null,
              5,
              "div",
              [
                ["class", "app__content"],
                ["id", "RouterOutlet"],
              ],
              [
                [2, "app__content--hidden", null],
                [2, "app__content--transparent", null],
              ],
              null,
              null,
              null,
              null,
            )),
            i.xb(
              12,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.Pb(131072, tt.b, [i.h]),
            (t()(),
            i.yb(
              14,
              16777216,
              null,
              null,
              2,
              "router-outlet",
              [],
              [[2, "mib3-router-outlet--hide-adjacent-sibling", null]],
              null,
              null,
              null,
              null,
            )),
            i.xb(
              15,
              212992,
              [[4, 4]],
              0,
              c.o,
              [c.b, i.P, i.j, [8, null], i.h],
              null,
              null,
            ),
            i.xb(
              16,
              212992,
              [[5, 4]],
              0,
              $t.a,
              [c.o, i.h, i.z, u.a],
              null,
              null,
            ),
            (t()(),
            i.yb(
              17,
              0,
              null,
              null,
              4,
              "div",
              [
                ["class", "context__popups"],
                ["id", "Terminal=AUDI_POPUPS_FPK"],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            i.xb(
              18,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (t()(),
            i.yb(
              19,
              0,
              null,
              null,
              2,
              "au3-popups-fpk",
              [],
              null,
              null,
              null,
              xt,
              St,
            )),
            i.xb(20, 49152, null, 0, ft, [G.a], null, null),
            i.Sb(256, null, yt.a, mt, []),
            (t()(),
            i.yb(
              22,
              0,
              null,
              null,
              4,
              "div",
              [
                ["class", "context__popups-partial"],
                ["id", "Terminal=AUDI_PARTIAL_POPUPS_FPK"],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            i.xb(
              23,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (t()(),
            i.yb(
              24,
              0,
              null,
              null,
              2,
              "au3-partial-popups-fpk",
              [],
              null,
              null,
              null,
              $e,
              me,
            )),
            i.xb(25, 49152, null, 0, ge, [G.a, Y.a, i.z, i.h], null, null),
            i.Sb(256, null, yt.a, de, []),
            (t()(),
            i.yb(
              27,
              0,
              null,
              null,
              1,
              "div",
              [["class", "screen__overlay"]],
              [[2, "screen__overlay--active", null]],
              null,
              null,
              null,
              null,
            )),
            i.Pb(131072, tt.b, [i.h]),
            (t()(), i.hb(16777216, null, null, 2, null, Rn)),
            i.xb(
              30,
              16384,
              null,
              0,
              tt.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            i.Pb(131072, tt.b, [i.h]),
            (t()(),
            i.yb(
              32,
              0,
              null,
              null,
              0,
              "div",
              [["class", "native-screen__indicator"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              33,
              0,
              null,
              null,
              1,
              "mib3-annotation-renderer",
              [["class", "fpk-annotations"]],
              null,
              [["window", "resize"]],
              function (t, e, n) {
                var a = !0;
                return (
                  "window:resize" === e &&
                    (a = !1 !== i.Nb(t, 34).onWindowResize() && a),
                  a
                );
              },
              we.b,
              we.a,
            )),
            i.xb(
              34,
              4243456,
              null,
              0,
              Le.a,
              [u.a, i.l, i.D],
              {
                annotationProvider: [0, "annotationProvider"],
                useFaultTolerantAnnotations: [1, "useFaultTolerantAnnotations"],
              },
              null,
            ),
            (t()(),
            i.yb(
              35,
              0,
              null,
              null,
              1,
              "mib3-annotation-renderer",
              [["class", "displaymanagement-annotations"]],
              null,
              [["window", "resize"]],
              function (t, e, n) {
                var a = !0;
                return (
                  "window:resize" === e &&
                    (a = !1 !== i.Nb(t, 36).onWindowResize() && a),
                  a
                );
              },
              we.b,
              we.a,
            )),
            i.xb(
              36,
              4243456,
              null,
              0,
              Le.a,
              [u.a, i.l, i.D],
              {
                annotationProvider: [0, "annotationProvider"],
                useFaultTolerantAnnotations: [1, "useFaultTolerantAnnotations"],
              },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, In)),
            i.xb(
              38,
              16384,
              null,
              0,
              tt.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), i.hb(0, [["fpkMask", 2]], null, 0, null, jn)),
            (t()(), i.hb(16777216, null, null, 1, null, Bn)),
            i.xb(
              41,
              540672,
              null,
              0,
              Fe.a,
              [u.a, i.P, i.L],
              { ttStaticIf: [0, "ttStaticIf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 6, 0, "Terminal=AUDI_FPK"),
              t(e, 7, 0),
              t(e, 12, 0, "RouterOutlet"),
              t(e, 15, 0),
              t(e, 16, 0),
              t(e, 18, 0, "Terminal=AUDI_POPUPS_FPK"),
              t(e, 23, 0, "Terminal=AUDI_PARTIAL_POPUPS_FPK"),
              t(
                e,
                30,
                0,
                i.Yb(
                  e,
                  30,
                  0,
                  i.Nb(e, 31).transform(n.systemConfigService.dualDisplay$),
                ),
              ),
              t(e, 34, 0, n.fpkAnnotationService, !1),
              t(e, 36, 0, n.displayManager, !0),
              t(e, 38, 0, n.pcSim, i.Nb(e, 39)),
              t(e, 41, 0, n.debugOverlaysVisible && !n.textToolMode));
          },
          function (t, e) {
            var n,
              a,
              l = e.component;
            (t(
              e,
              5,
              0,
              (null ==
              (n = i.Yb(
                e,
                5,
                0,
                i
                  .Nb(e, 8)
                  .transform(
                    null == l.bgVisibilityService
                      ? null
                      : l.bgVisibilityService.backgroundVisibilityUpdate$,
                  ),
              ))
                ? null
                : n.visibility) === l.backgroundVisibilityEnum.Transparent,
              i.Yb(
                e,
                5,
                1,
                i
                  .Nb(e, 9)
                  .transform(l.fpkStageService.nextViewSizeAnimationData$),
              ),
              i.Nb(e, 7).isSmall,
              i.Nb(e, 7).isBig,
            ),
              t(e, 10, 0, l.contextState),
              t(
                e,
                11,
                0,
                l.fullscreenPopupActive,
                (null ==
                (a = i.Yb(
                  e,
                  11,
                  1,
                  i
                    .Nb(e, 13)
                    .transform(
                      null == l.bgVisibilityService
                        ? null
                        : l.bgVisibilityService.backgroundVisibilityUpdate$,
                    ),
                ))
                  ? null
                  : a.visibility) === l.backgroundVisibilityEnum.Transparent,
              ),
              t(e, 14, 0, i.Nb(e, 16).hideAdjacentSibling),
              t(
                e,
                27,
                0,
                i.Yb(e, 27, 0, i.Nb(e, 28).transform(l.isPhonePopupActive$)),
              ));
          },
        );
      }
      function Kn(t) {
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
              "au3-fpk",
              [],
              [[2, "dualdisplay", null]],
              [["global", "keydown"]],
              function (t, e, n) {
                var a = !0;
                return (
                  "global:keydown" === e &&
                    (a = !1 !== i.Nb(t, 2).keyDown(n) && a),
                  a
                );
              },
              Vn,
              Fn,
            )),
            i.Sb(4608, null, Kt.a, Re.a, []),
            i.xb(
              2,
              4440064,
              null,
              0,
              $n,
              [
                i.r,
                i.w,
                kn.a,
                Ke.a,
                Tt.a,
                Ve.a,
                wn.a,
                Ln.a,
                tn.a,
                fn,
                q.a,
                Ue.a,
                M.a,
                A.a,
                G.a,
                F.a,
                J.h,
                _n.a,
                u.a,
                At.a,
                Tn.a,
              ],
              null,
              null,
            ),
            i.Sb(256, null, ne.a, !0, []),
          ],
          function (t, e) {
            t(e, 2, 0);
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 2).dualDisplay);
          },
        );
      }
      var Hn = i.ub("au3-fpk", $n, Kn, {}, {}, []),
        Un = n("sH6Y"),
        zn = n("Ftf+");
      class Gn {
        constructor() {
          this.indicatorRef = document.querySelector(
            ".native-screen__indicator",
          );
        }
        ngAfterViewInit() {
          this.indicatorRef.style.visibility = "visible";
        }
        ngOnDestroy() {
          this.indicatorRef.style.visibility = "hidden";
        }
      }
      var Yn = i.wb({
        encapsulation: 0,
        styles: [["[_nghost-%COMP%]{position:absolute;display:block}"]],
        data: {},
      });
      function qn(t) {
        return i.ac(
          2,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-fpk-screen",
              [["id", "Screen: KOMBI_NATIVE"]],
              null,
              null,
              null,
              Un.b,
              Un.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              k.a,
              [i.l, i.D, A.a, u.a, [3, k.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(2, 114688, null, 0, zn.a, [], null, null),
            i.Sb(256, null, yt.a, zn.b, []),
          ],
          function (t, e) {
            (t(e, 1, 0, "Screen: KOMBI_NATIVE"), t(e, 2, 0));
          },
          null,
        );
      }
      function Zn(t) {
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
              "au3-fpk-native",
              [],
              null,
              null,
              null,
              qn,
              Yn,
            )),
            i.xb(1, 4374528, null, 0, Gn, [], null, null),
          ],
          null,
          null,
        );
      }
      var Wn = i.ub("au3-fpk-native", Gn, Zn, {}, {}, []),
        Xn = n("aDqW"),
        Jn = n("/W5r"),
        Qn = n("+Qv1"),
        ti = n("XtoR"),
        ei = n("jTHl"),
        ni = n("zL3T"),
        ii = n("zm/l"),
        ai = n("XOcJ"),
        li = n("doQC"),
        oi = n("nRk7"),
        si = n("K3fK"),
        ri = n("2Uk/"),
        ui = n("SFb6"),
        ci = n("3LDm"),
        pi = n("aujg"),
        bi = n("0sI6"),
        hi = n("nQq1"),
        di = n("vhbz"),
        gi = n("I/e0"),
        mi = n("dxLW"),
        fi = n("d9Bu"),
        yi = n("FU5M"),
        Si = n("OPe/"),
        vi = n("xr9d"),
        xi = n("Spuu"),
        Oi = n("7Zjo"),
        Ci = n("y1q2"),
        Pi = n("+epw"),
        _i = n("zMPs"),
        ki = n("6Yk8"),
        Ai = n("u6+O"),
        Ni = n("CIQC"),
        Ti = n("REmV"),
        Mi = n("Y3N+"),
        Di = n("MJxn"),
        $i = n("eIOF"),
        wi = n("t+4g"),
        Li = n("myjn"),
        Fi = n("fOZ7"),
        Ri = n("vb3I"),
        Ii = n("8sI7"),
        Ei = n("TBks"),
        ji = n("yUFt"),
        Bi = n("QDrj"),
        Vi = n("YCQm"),
        Ki = n("6gUO"),
        Hi = n("dezT");
      class Ui {}
      var zi = n("CVvv");
      const Gi = () =>
          Promise.all([n.e(18), n.e(15), n.e(54), n.e(86)])
            .then(n.bind(null, "Vx7N"))
            .then((t) => t.FpkMediaModuleNgFactory),
        Yi = { context: Mt.a.Audio },
        qi = () =>
          Promise.all([n.e(18), n.e(0), n.e(90)])
            .then(n.bind(null, "bKdS"))
            .then((t) => t.FpkNaviModuleNgFactory),
        Zi = { context: Mt.a.Navi },
        Wi = () =>
          Promise.all([n.e(18), n.e(24), n.e(95)])
            .then(n.bind(null, "V+Ab"))
            .then((t) => t.FpkPhoneModuleNgFactory),
        Xi = { context: Mt.a.Phone },
        Ji = () =>
          Promise.all([n.e(18), n.e(58), n.e(99)])
            .then(n.bind(null, "ckpv"))
            .then((t) => t.FpkRadioModuleNgFactory),
        Qi = { context: Mt.a.Audio },
        ta = () =>
          Promise.all([n.e(15), n.e(65)])
            .then(n.bind(null, "NjPX"))
            .then((t) => t.FpkAsiModuleNgFactory),
        ea = { context: Mt.a.Audio },
        na = () =>
          n
            .e(68)
            .then(n.bind(null, "BPr8"))
            .then((t) => t.FpkAsterixMediaModuleNgFactory),
        ia = { context: Mt.a.Audio },
        aa = { context: Mt.a.BC };
      var la = i.vb(C, [], function (t) {
        return i.Kb([
          i.Lb(512, i.j, i.X, [[8, [P.a, Ct, Hn, Wn]], [3, i.j], i.x]),
          i.Lb(4608, tt.m, tt.l, [i.u]),
          i.Lb(4608, Xn.h, Xn.g, []),
          i.Lb(4608, Xn.d, Xn.f, []),
          i.Lb(4608, Xn.j, Xn.e, []),
          i.Lb(4608, Xn.c, Xn.b, []),
          i.Lb(4608, Xn.k, Xn.k, [
            Xn.l,
            Xn.h,
            Xn.d,
            Xn.j,
            Xn.c,
            Xn.m,
            Xn.o,
            Xn.n,
            Xn.a,
          ]),
          i.Lb(4608, Jn.b, Jn.b, [Qn.e, [2, Jn.a]]),
          i.Lb(4608, ti.b, ti.b, [Qn.e, [2, ti.a]]),
          i.Lb(4608, ei.b, ei.b, [Qn.e, [2, ei.a]]),
          i.Lb(4608, ni.b, ni.b, [Qn.e, [2, ni.a]]),
          i.Lb(4608, ii.a, ii.a, [T.c, u.a]),
          i.Lb(4608, ai.a, ai.a, [T.c, u.a]),
          i.Lb(4608, li.a, li.a, [T.c, u.a]),
          i.Lb(4608, oi.a, oi.a, [T.c, u.a]),
          i.Lb(4608, si.a, si.a, [ri.a, u.a]),
          i.Lb(4608, ui.a, ci.a, [F.a, pi.a, u.a]),
          i.Lb(4608, bi.a, bi.a, [hi.d, u.a]),
          i.Lb(
            5120,
            di.a,
            function (t, e, n, i, a, l, o, s, r, u, c) {
              return [t, e, n, i, a, l, o, s, r, u, c];
            },
            [gi.a, mi.a, Je.a, fi.b, yi.a, cn, M.a, pn.a, Ue.a, ze.c, Si.a],
          ),
          i.Lb(4608, Ln.a, Ln.a, [vi.a, vi.b]),
          i.Lb(4608, xi.a, xi.a, [di.a, u.a]),
          i.Lb(4608, oe.a, Oi.a, [i.r, G.a, A.a, jt.i, Ci.a, u.a]),
          i.Lb(1073742336, tt.c, tt.c, []),
          i.Lb(1073742336, c.n, c.n, [
            [2, c.s],
            [2, c.m],
          ]),
          i.Lb(1073742336, Xn.i, Xn.i, []),
          i.Lb(1073742336, Pi.a, Pi.a, []),
          i.Lb(1073742336, _i.a, _i.a, []),
          i.Lb(1073742336, ki.a, ki.a, []),
          i.Lb(1073742336, Ai.a, Ai.a, []),
          i.Lb(1073742336, Ni.a, Ni.a, []),
          i.Lb(1073742336, Ti.a, Ti.a, []),
          i.Lb(1073742336, Mi.a, Mi.a, []),
          i.Lb(1073742336, Di.a, Di.a, []),
          i.Lb(1073742336, $i.a, $i.a, []),
          i.Lb(1073742336, wi.a, wi.a, []),
          i.Lb(1073742336, Li.a, Li.a, []),
          i.Lb(1073742336, Fi.a, Fi.a, []),
          i.Lb(1073742336, Ri.a, Ri.a, []),
          i.Lb(1073742336, Ii.a, Ii.a, []),
          i.Lb(1073742336, Ei.a, Ei.a, []),
          i.Lb(1073742336, ji.a, ji.a, []),
          i.Lb(1073742336, Bi.a, Bi.a, []),
          i.Lb(1073742336, Vi.a, Vi.a, []),
          i.Lb(1073742336, Ki.a, Ki.a, []),
          i.Lb(1073742336, Hi.a, Hi.a, []),
          i.Lb(1073742336, Ui, Ui, []),
          i.Lb(1073742336, zi.a, zi.a, []),
          i.Lb(1073742336, C, C, []),
          i.Lb(256, Xn.o, void 0, []),
          i.Lb(256, Xn.m, void 0, []),
          i.Lb(256, Xn.n, void 0, []),
          i.Lb(256, Xn.a, void 0, []),
          i.Lb(
            1024,
            c.k,
            function () {
              return [
                [
                  {
                    path: "",
                    component: $n,
                    children: [
                      { path: "", redirectTo: "navi", pathMatch: "full" },
                      { path: "media", loadChildren: Gi, data: Yi },
                      { path: "navi", loadChildren: qi, data: Zi },
                      { path: "phone", loadChildren: Wi, data: Xi },
                      { path: "radio", loadChildren: Ji, data: Qi },
                      { path: "asi", loadChildren: ta, data: ea },
                      { path: "asterix-media", loadChildren: na, data: ia },
                      { path: ":native", component: Gn, data: aa },
                    ],
                  },
                ],
              ];
            },
            [],
          ),
          i.Lb(
            1024,
            vi.a,
            function () {
              return [m, f, y, S, v, x, O];
            },
            [],
          ),
        ]);
      });
    },
    xOC8: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      });
      var i = n("C05f"),
        a = n("ZTXN"),
        l = n("nbmZ"),
        o = n("Yi6/"),
        s = n("kZht"),
        r = n("yNay");
      const u = l.a.BC;
      let c = (() => {
        class t {
          constructor(t) {
            ((this.contexts = [l.a.BC, l.a.Audio, l.a.Phone, l.a.Navi]),
              (this.needContextRestoration = !1),
              (this.historyContext = l.a.NO_CHANGE),
              (this.synchronizedContext$$ = new i.a(u)),
              (this.currentContext$ = this.synchronizedContext$$),
              (this.requestedContext$$ = new i.a(l.a.NO_CHANGE)),
              (this.requestedContext$ = this.requestedContext$$),
              (this.routedContext$$ = new i.a(u)),
              (this.routedContext$ = this.routedContext$$),
              (this.triggerAnnotationRepaint$$ = new a.a()),
              (this.triggerAnnotationRepaint$ =
                this.triggerAnnotationRepaint$$),
              (this.logger = t.getLogger("fpk.FpkContextService")),
              o.gd.isBentley &&
                (this.contexts = [
                  l.a.BC,
                  l.a.Offroad,
                  l.a.Audio,
                  l.a.Phone,
                  l.a.Navi,
                ]));
          }
          get previousContext() {
            return this.historyContext;
          }
          setFpkContextByRequest(t) {
            return this.synchronizedContext$$.getValue() === t
              ? (this.logger.info(
                  "setFpkContextByRequest: received identical context, trigger repaint for Fpk.",
                ),
                this.triggerAnnotationRepaint$$.next(),
                Promise.resolve(!0))
              : (this.logger.info(
                  "setFpkContextByRequest: received context change, reset the contextRestoration",
                ),
                (this.needContextRestoration = !1),
                this.updateSynchronizedContext(t));
          }
          setFpkContextByResponse(t) {
            const e = this.synchronizedContext$$.getValue();
            return (
              (this.needContextRestoration =
                t === l.a.Phone && e !== l.a.Phone),
              this.logger.info(
                `setFpkContextByResponse: context ${t} changed needContextRestoration to ${this.needContextRestoration}`,
              ),
              this.updateSynchronizedContext(t)
            );
          }
          updateSynchronizedContext(t) {
            if (this.isFpkInternalContext(t)) return Promise.resolve(!1);
            const e = this.normalizeContext(t);
            return (
              this.updateHistoryContext(),
              this.synchronizedContext$$.next(e),
              Promise.resolve(!0)
            );
          }
          normalizeContext(t) {
            return t === l.a.Navi || t === l.a.Navi_Dest || t === l.a.Navi_Map
              ? l.a.Navi
              : t === l.a.Audio ||
                  t === l.a.Audio_ASI ||
                  t === l.a.Audio_Media ||
                  t === l.a.Audio_Tuner
                ? l.a.Audio
                : t === l.a.Phone
                  ? l.a.Phone
                  : t >= 240 && t <= 249
                    ? l.a.Warn
                    : o.gd.isBentley && t === l.a.Offroad
                      ? l.a.Offroad
                      : (this.logger.info(
                          `normalizeContext: context ${t} cannot be assigned to specific value, fallback to FpkContext.BC`,
                        ),
                        l.a.BC);
          }
          isHistoryRestorationNeededAfter(t) {
            return l.a.Phone !== t
              ? (this.logger.info(
                  `isHistoryRestorationNeededAfter: denied for context ${t}.`,
                ),
                !0)
              : this.needContextRestoration;
          }
          triggerHistoryRestoration() {
            this.needContextRestoration &&
              ((this.needContextRestoration = !1),
              this.logger.info(
                `triggerHistoryRestoration: restoration to ${this.historyContext} is requested by KombiSync`,
              ),
              this.showFpkContext(this.historyContext));
          }
          isFpkInternalContext(t) {
            return (
              t === l.a.WELCOME ||
              t === l.a.GOODBYE ||
              t === l.a.WELCOME_PROFILE
            );
          }
          updateHistoryContext() {
            const t = this.synchronizedContext$$.getValue();
            this.historyContext = t === l.a.BC ? l.a.History : t;
          }
          showFpkContext(t) {
            return (this.requestedContext$$.next(t), Promise.resolve(!0));
          }
          nextFpkContext() {
            let t = this.contexts.indexOf(
              this.synchronizedContext$$.getValue(),
            );
            (++t >= this.contexts.length && (t = 0),
              (this.needContextRestoration = !1),
              this.synchronizedContext$$.next(this.contexts[t]));
          }
          previousFpkContext() {
            let t = this.contexts.indexOf(
              this.synchronizedContext$$.getValue(),
            );
            (--t < 0 && (t = this.contexts.length - 1),
              (this.needContextRestoration = !1),
              this.synchronizedContext$$.next(this.contexts[t]));
          }
          updateRoutedContext(t) {
            this.routedContext$$.next(t);
          }
          isSynchronizedContext(t) {
            const e = this.synchronizedContext$$.getValue(),
              n = e === t;
            return (
              n ||
                this.logger.info(
                  `isSynchronizedContext found mismatch for given ${t} to synchronized ${e}`,
                ),
              n
            );
          }
        }
        return (
          (t.ɵprov = s.bc({
            factory: function () {
              return new t(s.cc(r.a));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
  },
]);
