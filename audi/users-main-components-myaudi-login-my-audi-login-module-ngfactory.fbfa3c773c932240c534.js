(window.webpackJsonp = window.webpackJsonp || []).push([
  [113],
  {
    SxDb: function (i, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var e = n("C05f"),
        a = n("QQZH"),
        r = n("HM3f"),
        s = n("Ohay"),
        l = n("YtkY"),
        o = n("kuMc"),
        c = n("csfA");
      class u {
        constructor() {
          ((this.delayTime = 800),
            (this.doNotResetIndicator = !0),
            (this.waitingIndicatorTimer = void 0),
            (this.showWaitingIndicator$$ = new e.a(!1)),
            (this.destroyed$$ = new a.a(1)));
        }
        ngOnInit() {
          this.activityOngoing$ = Object(r.b)(
            this.showWaitingIndicator$$.pipe(Object(s.a)()),
            this.activity$.pipe(
              Object(l.a)(c.b.activityIsActive),
              Object(s.a)(),
            ),
          ).pipe(
            Object(l.a)(([i, t]) => {
              if (t && i && !this.doNotResetIndicator)
                this.waitingIndicatorTimer = setTimeout(() => {
                  ((this.waitingIndicatorTimer = void 0),
                    this.showWaitingIndicator$$.next(!1));
                }, 1500);
              else if (t || i) {
                if (t && !i)
                  this.waitingIndicatorTimer = setTimeout(() => {
                    ((this.waitingIndicatorTimer = void 0),
                      this.showWaitingIndicator$$.next(!0));
                  }, this.delayTime);
                else if (!t && i && this.doNotResetIndicator) return !0;
              } else
                (clearTimeout(this.waitingIndicatorTimer),
                  (this.waitingIndicatorTimer = void 0));
              return t && (i || void 0 === this.waitingIndicatorTimer);
            }),
            Object(o.a)(this.destroyed$$),
          );
        }
        ngOnDestroy() {
          (this.destroyed$$.next(),
            this.showWaitingIndicator$$.complete(),
            clearTimeout(this.waitingIndicatorTimer),
            (this.waitingIndicatorTimer = void 0));
        }
      }
    },
    eWIV: function (i, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var e = n("YtkY"),
        a = n("Yi6/"),
        r = (n("3Sae"), n("2gyy"));
      class s {
        constructor(i, t) {
          ((this.usermanagementService = i), (this.disclaimerService = t));
        }
        ngOnInit() {
          this.disclaimerSubscription =
            this.disclaimerService.registerDisclaimer({
              enabled$:
                this.usermanagementService.userListRestrictionReason$.pipe(
                  Object(e.a)((i) => !!i && i.restriction === r.a.KL15),
                ),
              reason$:
                this.usermanagementService.userListRestrictionReason$.pipe(
                  Object(e.a)((i) =>
                    i && i.restriction === r.a.KL15
                      ? r.a.KL15.toString()
                      : void 0,
                  ),
                ),
              priority: a.D.Car,
            });
        }
        ngOnDestroy() {
          this.disclaimerService.unregisterDisclaimer(
            this.disclaimerSubscription,
          );
        }
      }
    },
    pTuf: function (i, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return f;
      }),
        n.d(t, "b", function () {
          return p;
        }));
      var e = n("kZht"),
        a = n("ZXHi"),
        r = n("IRNg"),
        s = n("8TlW"),
        l = n("fu7d"),
        o = n("bou3"),
        c = n("yNay"),
        u = n("Xo58"),
        d = n("m3Ja"),
        b = n("r+e+"),
        h = n("ijxY"),
        g = n("bmFL"),
        m = n("An66"),
        f = (n("SxDb"), e.wb({ encapsulation: 2, styles: [], data: {} }));
      function I(i) {
        return e.ac(
          0,
          [e.Mb(null, 0), (i()(), e.hb(0, null, null, 0))],
          null,
          null,
        );
      }
      function v(i) {
        return e.ac(
          0,
          [
            (i()(),
            e.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-init-view",
              [],
              null,
              null,
              null,
              a.b,
              a.a,
            )),
            e.xb(1, 49152, null, 0, r.a, [], null, null),
            (i()(),
            e.yb(
              2,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [["id", "ActivityInProcessPleaseWait"]],
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
            e.xb(
              3,
              212992,
              null,
              0,
              l.a,
              [e.l, e.D, o.a, c.a, [3, l.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              4,
              245760,
              null,
              0,
              u.a,
              [[6, l.a], d.a, e.h, e.l, e.D, [2, b.a], [2, h.a], [2, g.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (i, t) {
            var n = t.component;
            (i(t, 3, 0, "ActivityInProcessPleaseWait"),
              i(
                t,
                4,
                0,
                n.waitingIndicatorText,
                "ActivityInProcessPleaseWait",
                4,
              ));
          },
          function (i, t) {
            i(
              t,
              2,
              0,
              e.Nb(t, 4).backgroundColor,
              e.Nb(t, 4).fixedNumberOfLines,
              e.Nb(t, 4).mayContainLatinCharsForArabic,
              e.Nb(t, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function p(i) {
        return e.ac(
          2,
          [
            (i()(), e.hb(16777216, null, null, 2, null, I)),
            e.xb(
              1,
              16384,
              null,
              0,
              m.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            e.Pb(131072, m.b, [e.h]),
            (i()(),
            e.hb(0, [["activityRunningTemplate", 2]], null, 0, null, v)),
          ],
          function (i, t) {
            var n = t.component;
            i(
              t,
              1,
              0,
              !e.Yb(t, 1, 0, e.Nb(t, 2).transform(n.activityOngoing$)),
              e.Nb(t, 3),
            );
          },
          null,
        );
      }
    },
  },
]);
