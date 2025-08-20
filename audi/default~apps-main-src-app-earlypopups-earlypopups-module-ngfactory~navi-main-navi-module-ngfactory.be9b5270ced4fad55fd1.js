(window.webpackJsonp = window.webpackJsonp || []).push([
  [36],
  {
    "9ZNO": function (n, t, e) {
      "use strict";
      (e.d(t, "a", function () {
        return s;
      }),
        e.d(t, "b", function () {
          return f;
        }));
      var l = e("1+5f"),
        i = e("Yi6/"),
        a = e("eoEw"),
        r = e("vYwo"),
        o = e("kGpN"),
        c = e("CRZS"),
        u = e("XKT5"),
        s = (function (n) {
          return (
            (n.BIDIRECTIONAL = "E9DB_navigation_arrow_bidirection.webp"),
            (n.DIRECTION_FROM = "E930_navigation_arrow_rrd_0x0C.webp"),
            (n.DIRECTION_TO = "E930_navigation_arrow_rrd_0x04.webp"),
            (n.NONE = ""),
            n
          );
        })({});
      class f {
        constructor(n, t) {
          ((this.trafficService = n),
            (this.systemConfigService = t),
            (this.iconBlocksRouting = !0),
            (this.trafficMessageTypeEnum = u.b),
            (this.IconCategory = i.Z),
            (this.DirectionArrow = s),
            (this.DELAY_ICON = "E175_map_delay.webp"),
            (this.iconCategoryList = i.Z.List),
            (this.roadIconScaleMode = i.ab.None),
            (this.smallIconsScaleMode = i.ab.None),
            (this.Alignment = a.a),
            (this.distanceUnit = i.vc.METERS),
            (this.DistanceFormattingRules = o.a.DistanceToDestination),
            (this.directionType = l.m.AIR),
            (this.timeUnit = i.vc.MILLISECONDS),
            (this.timeFormattingRule = o.a.DelayOnRoute),
            (this.prefixContextEnum = a.c),
            (this.ROADICON = r.c),
            (this.ROADICONNAR = r.d),
            (this.INLINEROADICON = r.b),
            (this.displayTrafficDelayThreshold = c.a),
            (this.uiStateType = i.uc.ListHorizontal));
        }
        set trafficItem(n) {
          ((this._trafficItem = n),
            Object(i.wd)(n) &&
              (this.trafficMessageType = u.a.getTrafficMessageType(n, !1)));
        }
        get trafficItem() {
          return this._trafficItem;
        }
        isTrafficItemOnRoute(n) {
          return u.a.isTrafficElementOnRoute(n);
        }
      }
    },
    PyrH: function (n, t, e) {
      "use strict";
      (e.d(t, "a", function () {
        return wn;
      }),
        e.d(t, "b", function () {
          return ft;
        }));
      var l = e("kZht"),
        i = e("8TlW"),
        a = e("fu7d"),
        r = e("bou3"),
        o = e("yNay"),
        c = e("bmFL"),
        u = e("Xo58"),
        s = e("m3Ja"),
        f = e("r+e+"),
        b = e("ijxY"),
        p = e("VKfg"),
        d = e("EkEa"),
        m = e("oPv+"),
        g = e("ZRMe"),
        _ = e("0Z+c"),
        h = e("HVUF"),
        x = e("B3Zb"),
        C = e("An66"),
        y = e("3EdB"),
        P = e("eoEw"),
        O = e("SOvQ"),
        M = e("Yi6/"),
        I = e("1+5f"),
        L = e("kGpN"),
        v = e("XKT5");
      class w {
        constructor() {
          ((this.numberPlateRestrictionIcon =
            "E37D_navigation_number_plate_regulation_cn.webp"),
            (this.iconCategoryNPR = M.Z.List),
            (this.distanceUnit = M.vc.METERS),
            (this.timeUnit = M.vc.MILLISECONDS),
            (this.DistanceFormattingRules = L.a.DistanceToDestination),
            (this.timeFormattingRule = L.a.DelayOnRoute),
            (this.prefixContextEnum = P.c),
            (this.directionType = I.m.AIR),
            (this.Alignment = P.a));
        }
        isCurrentTrafficItemOnRoute() {
          return v.a.isTrafficElementOnRoute(this.restrictionItem);
        }
      }
      var T = l.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;display:block}.main-content__first-line[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;flex-direction:row;margin-bottom:17px}.first-line__npr-icon-area[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-shrink:0;height:49px;width:77px;margin:1px 40px 0 41px}.first-line__restriction-text[_ngcontent-%COMP%]{max-height:196px;white-space:unset}.main-content__restriction-texts-wrapper[_ngcontent-%COMP%]{display:block;margin-left:158px}.main-content__restriction-text[_ngcontent-%COMP%]{margin-bottom:17px;max-height:245px;white-space:unset}.main-content__time-period[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;margin-top:-17px;margin-bottom:17px;height:49px}.time-period__dash[_ngcontent-%COMP%]{margin:-4px 10px 0}.distance-and-arrow-wrapper[_ngcontent-%COMP%]{display:flex}.direction-arrow[_ngcontent-%COMP%]{margin-top:5px;margin-right:30px;width:40px}",
          ],
        ],
        data: {},
      });
      function N(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["class", "main-content__restriction-text"],
                ["id", "RestrictedNumerPlate"],
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
            l.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
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
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            l.Qb(3, { plate: 0 }),
            l.xb(
              4,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            n(t, 1, 0, "RestrictedNumerPlate");
            var l = n(
              t,
              3,
              0,
              null == e.restrictionItem ||
                null == e.restrictionItem.numberPlateRestrictionAttributes
                ? null
                : e.restrictionItem.numberPlateRestrictionAttributes
                    .restrictedNumberPlate,
            );
            (n(t, 2, 0, l),
              n(
                t,
                4,
                0,
                "Restricted Number Plate: {{plate}}",
                "RestrictedNumerPlate",
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 4).backgroundColor,
              l.Nb(t, 4).fixedNumberOfLines,
              l.Nb(t, 4).mayContainLatinCharsForArabic,
              l.Nb(t, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function A(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["class", "main-content__restriction-text"],
                ["id", "RestrictedArea"],
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
            l.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
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
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            l.Qb(3, { area: 0 }),
            l.xb(
              4,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            n(t, 1, 0, "RestrictedArea");
            var l = n(
              t,
              3,
              0,
              null == e.restrictionItem ||
                null == e.restrictionItem.numberPlateRestrictionAttributes
                ? null
                : e.restrictionItem.numberPlateRestrictionAttributes
                    .affectedArea,
            );
            (n(t, 2, 0, l),
              n(t, 4, 0, "Restricted Area: {{area}}", "RestrictedArea"));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 4).backgroundColor,
              l.Nb(t, 4).fixedNumberOfLines,
              l.Nb(t, 4).mayContainLatinCharsForArabic,
              l.Nb(t, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function R(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "main-content__restriction-text"],
                ["id", "RestrictedTimePeriod"],
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
            l.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "RestrictedTimePeriod"),
              n(t, 2, 0, "Restricted Time Period:", "RestrictedTimePeriod"));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function D(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              7,
              "div",
              [["class", "main-content__time-period"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              1,
              "au3-time-display",
              [],
              null,
              null,
              null,
              p.b,
              p.a,
            )),
            l.xb(
              2,
              49152,
              null,
              0,
              d.a,
              [m.a],
              {
                time: [0, "time"],
                primaryTimeHeight: [1, "primaryTimeHeight"],
                useDynamicWidth: [2, "useDynamicWidth"],
              },
              null,
            ),
            (n()(),
            l.yb(
              3,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "time-period__dash"],
                ["id", "TimePeriodDash"],
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
            l.xb(
              4,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              5,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
            (n()(),
            l.yb(
              6,
              0,
              null,
              null,
              1,
              "au3-time-display",
              [],
              null,
              null,
              null,
              p.b,
              p.a,
            )),
            l.xb(
              7,
              49152,
              null,
              0,
              d.a,
              [m.a],
              {
                time: [0, "time"],
                primaryTimeHeight: [1, "primaryTimeHeight"],
                useDynamicWidth: [2, "useDynamicWidth"],
              },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(
              t,
              2,
              0,
              null == e.restrictionItem ||
                null == e.restrictionItem.numberPlateRestrictionAttributes ||
                null ==
                  e.restrictionItem.numberPlateRestrictionAttributes.timePeriod
                ? null
                : e.restrictionItem.numberPlateRestrictionAttributes.timePeriod
                    .startTime,
              !0,
              !0,
            ),
              n(t, 4, 0, "TimePeriodDash"),
              n(t, 5, 0, "-", "TimePeriodDash"),
              n(
                t,
                7,
                0,
                null == e.restrictionItem ||
                  null == e.restrictionItem.numberPlateRestrictionAttributes ||
                  null ==
                    e.restrictionItem.numberPlateRestrictionAttributes
                      .timePeriod
                  ? null
                  : e.restrictionItem.numberPlateRestrictionAttributes
                      .timePeriod.endTime,
                !0,
                !0,
              ));
          },
          function (n, t) {
            n(
              t,
              3,
              0,
              l.Nb(t, 5).backgroundColor,
              l.Nb(t, 5).fixedNumberOfLines,
              l.Nb(t, 5).mayContainLatinCharsForArabic,
              l.Nb(t, 5).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function k(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["class", "main-content__restriction-text"],
                ["id", "RestrictionReason"],
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
            l.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
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
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            l.Qb(3, { reason: 0 }),
            l.xb(
              4,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            n(t, 1, 0, "RestrictionReason");
            var l = n(
              t,
              3,
              0,
              null == e.restrictionItem ||
                null == e.restrictionItem.numberPlateRestrictionAttributes
                ? null
                : e.restrictionItem.numberPlateRestrictionAttributes.reason,
            );
            (n(t, 2, 0, l),
              n(
                t,
                4,
                0,
                "Restriction Reason: {{reason}}",
                "RestrictionReason",
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 4).backgroundColor,
              l.Nb(t, 4).fixedNumberOfLines,
              l.Nb(t, 4).mayContainLatinCharsForArabic,
              l.Nb(t, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function E(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["class", "main-content__restriction-text"],
                ["id", "Penalty"],
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
            l.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
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
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            l.Qb(3, { penalty: 0 }),
            l.xb(
              4,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            n(t, 1, 0, "Penalty");
            var l = n(
              t,
              3,
              0,
              null == e.restrictionItem ||
                null == e.restrictionItem.numberPlateRestrictionAttributes
                ? null
                : e.restrictionItem.numberPlateRestrictionAttributes.penalty,
            );
            (n(t, 2, 0, l), n(t, 4, 0, "Penalty: {{penalty}}", "Penalty"));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 4).backgroundColor,
              l.Nb(t, 4).fixedNumberOfLines,
              l.Nb(t, 4).mayContainLatinCharsForArabic,
              l.Nb(t, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function F(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-direction-arrow",
              [["class", "direction-arrow"]],
              null,
              null,
              null,
              g.b,
              g.a,
            )),
            l.xb(
              1,
              49152,
              null,
              0,
              _.a,
              [],
              { displayableArrow: [0, "displayableArrow"] },
              null,
            ),
            l.Qb(2, { distanceType: 0, rotationAngle: 1 }),
          ],
          function (n, t) {
            var e = t.component,
              l = n(
                t,
                2,
                0,
                e.directionType,
                null == e.restrictionItem ? null : e.restrictionItem.direction,
              );
            n(t, 1, 0, l);
          },
          null,
        );
      }
      function S(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              9,
              "div",
              [["class", "main-content__first-line"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              3,
              "div",
              [["class", "first-line__npr-icon-area"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              2,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "first-line__npr-icon"],
                ["id", "FirstLineRoadIcon"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              h.b,
              h.a,
            )),
            l.xb(
              3,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              4,
              4243456,
              null,
              0,
              x.b,
              [o.a, l.z],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                blocksRouting: [2, "blocksRouting"],
              },
              null,
            ),
            (n()(),
            l.yb(
              5,
              0,
              null,
              null,
              4,
              "div",
              [["class", "first-line"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              6,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "first-line__restriction-text"],
                ["id", "RestrictionType"],
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
            l.xb(
              7,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(8, 16384, null, 0, b.a, [], null, null),
            l.xb(
              9,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            (n()(),
            l.yb(
              10,
              0,
              null,
              null,
              18,
              "div",
              [["class", "main-content__restriction-texts-wrapper"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), l.hb(16777216, null, null, 1, null, N)),
            l.xb(
              12,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, A)),
            l.xb(
              14,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, R)),
            l.xb(
              16,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, D)),
            l.xb(
              18,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, k)),
            l.xb(
              20,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, E)),
            l.xb(
              22,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            l.yb(
              23,
              0,
              null,
              null,
              5,
              "div",
              [["class", "distance-and-arrow-wrapper"]],
              [[2, "distance-and-delay__distance--hidden", null]],
              null,
              null,
              null,
              null,
            )),
            (n()(), l.hb(16777216, null, null, 1, null, F)),
            l.xb(
              25,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            l.yb(
              26,
              0,
              null,
              null,
              2,
              "au3-formatted-unit-renderer",
              [
                ["class", "distance-and-delay__distance"],
                ["id", "TrafficDetailsDistance"],
              ],
              [[2, "invisible", null]],
              null,
              null,
              y.b,
              y.a,
            )),
            l.xb(
              27,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              28,
              180224,
              null,
              0,
              P.b,
              [s.a, O.a, l.h],
              {
                smallerFontForUnit: [0, "smallerFontForUnit"],
                horizontalAlignment: [1, "horizontalAlignment"],
                hasPrefix: [2, "hasPrefix"],
                prefixContext: [3, "prefixContext"],
                rawValue: [4, "rawValue"],
                rawValueUnit: [5, "rawValueUnit"],
                rawValueFormattingRule: [6, "rawValueFormattingRule"],
              },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, "FirstLineRoadIcon"),
              n(t, 4, 0, e.numberPlateRestrictionIcon, e.iconCategoryNPR, !1),
              n(t, 7, 0, "RestrictionType"),
              n(
                t,
                9,
                0,
                "RestrictionType",
                null == e.restrictionItem ||
                  null == e.restrictionItem.numberPlateRestrictionAttributes
                  ? null
                  : e.restrictionItem.numberPlateRestrictionAttributes
                      .restrictionType,
              ),
              n(
                t,
                12,
                0,
                null == e.restrictionItem ||
                  null == e.restrictionItem.numberPlateRestrictionAttributes
                  ? null
                  : e.restrictionItem.numberPlateRestrictionAttributes
                      .restrictedNumberPlate,
              ),
              n(
                t,
                14,
                0,
                null == e.restrictionItem ||
                  null == e.restrictionItem.numberPlateRestrictionAttributes
                  ? null
                  : e.restrictionItem.numberPlateRestrictionAttributes
                      .affectedArea,
              ),
              n(
                t,
                16,
                0,
                !(
                  null == e.restrictionItem ||
                  null == e.restrictionItem.numberPlateRestrictionAttributes ||
                  null ==
                    e.restrictionItem.numberPlateRestrictionAttributes
                      .timePeriod ||
                  !e.restrictionItem.numberPlateRestrictionAttributes.timePeriod
                    .startTime ||
                  null == e.restrictionItem ||
                  null == e.restrictionItem.numberPlateRestrictionAttributes ||
                  null ==
                    e.restrictionItem.numberPlateRestrictionAttributes
                      .timePeriod ||
                  !e.restrictionItem.numberPlateRestrictionAttributes.timePeriod
                    .endTime
                ),
              ),
              n(
                t,
                18,
                0,
                !(
                  null == e.restrictionItem ||
                  null == e.restrictionItem.numberPlateRestrictionAttributes ||
                  null ==
                    e.restrictionItem.numberPlateRestrictionAttributes
                      .timePeriod ||
                  !e.restrictionItem.numberPlateRestrictionAttributes.timePeriod
                    .startTime ||
                  null == e.restrictionItem ||
                  null == e.restrictionItem.numberPlateRestrictionAttributes ||
                  null ==
                    e.restrictionItem.numberPlateRestrictionAttributes
                      .timePeriod ||
                  !e.restrictionItem.numberPlateRestrictionAttributes.timePeriod
                    .endTime
                ),
              ),
              n(
                t,
                20,
                0,
                null == e.restrictionItem ||
                  null == e.restrictionItem.numberPlateRestrictionAttributes
                  ? null
                  : e.restrictionItem.numberPlateRestrictionAttributes.reason,
              ),
              n(
                t,
                22,
                0,
                null == e.restrictionItem ||
                  null == e.restrictionItem.numberPlateRestrictionAttributes
                  ? null
                  : e.restrictionItem.numberPlateRestrictionAttributes.penalty,
              ),
              n(t, 25, 0, !e.isCurrentTrafficItemOnRoute()),
              n(t, 27, 0, "TrafficDetailsDistance"),
              n(
                t,
                28,
                0,
                !1,
                e.Alignment.LEFT,
                e.isCurrentTrafficItemOnRoute(),
                e.prefixContextEnum.Distance,
                null == e.restrictionItem ? null : e.restrictionItem.distance,
                e.distanceUnit,
                e.DistanceFormattingRules,
              ));
          },
          function (n, t) {
            var e = t.component;
            (n(t, 2, 0, l.Nb(t, 4).iconComponentHidden),
              n(
                t,
                6,
                0,
                l.Nb(t, 9).backgroundColor,
                l.Nb(t, 9).fixedNumberOfLines,
                l.Nb(t, 9).mayContainLatinCharsForArabic,
                l.Nb(t, 9).shortenWithEllipsisForArabic,
              ),
              n(
                t,
                23,
                0,
                !(null != e.restrictionItem && e.restrictionItem.distance),
              ),
              n(t, 26, 0, l.Nb(t, 28).isInvisible));
          },
        );
      }
      var V = e("SkTl"),
        H = e("iPhK"),
        $ = e("0qMr"),
        W = e("N2Hj"),
        U = e("UbWD"),
        z = e("2rvh"),
        j = e("odRV"),
        B = e("Udyh"),
        Y = e("I3ve"),
        X = e("qiAR"),
        Z = e("007S"),
        K = e("VcEz"),
        q = e("oeT7"),
        Q = e("oxWk"),
        G = e("Tr//"),
        J = e("FQEI"),
        nn = e("3bpu"),
        tn = e("qHCr"),
        en = e("bMuc"),
        ln = e("ZIdM"),
        an = e("OtM5"),
        rn = e("9ZFG"),
        on = e("6zvu"),
        cn = e("y9xZ"),
        un = e("+sw+"),
        sn = e("BMrr"),
        fn = e("IEns"),
        bn = e("z6QT"),
        pn = e("flsk"),
        dn = e("O82V"),
        mn = e("Eln4"),
        gn = e("evAh"),
        _n = e("QlDL"),
        hn = e("I5OF"),
        xn = e("E7cc"),
        Cn = e("DElP"),
        yn = e("CpzC"),
        Pn = e("0Bsn"),
        On = e("5GjX"),
        Mn = e("mYyF"),
        In = e("v98a"),
        Ln = e("aOG8"),
        vn = e("Krzs"),
        wn =
          (e("rFja"),
          e("dxLW"),
          e("tYr6"),
          e("6ifu"),
          l.wb({
            encapsulation: 0,
            styles: [
              [
                '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@keyframes map-fade-in{0%{opacity:0}50%{opacity:0}to{opacity:1}}[_nghost-%COMP%]{position:relative;display:flex}.traffic-details[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;font-size:40px}.traffic-details__main-content[_ngcontent-%COMP%]{padding-top:26px;height:480px}.traffic-details__main-content[_ngcontent-%COMP%]     .dynamic-list-item__line-number{height:auto}.traffic-details__map[_ngcontent-%COMP%]{margin-left:60px;margin-top:25px;width:360px;height:300px;animation:map-fade-in 2s linear}.first-line__ramp-traffic-location-from[_ngcontent-%COMP%], .first-line__ramp-traffic-location-to[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;flex:0 1 auto;min-width:100px}.event-items__event-text[_ngcontent-%COMP%], .first-line__traffic-location-from[_ngcontent-%COMP%], .first-line__traffic-location-to[_ngcontent-%COMP%], .main-content__second-line[_ngcontent-%COMP%], .main-content__second-line--chinese[_ngcontent-%COMP%], .main-content__third-line[_ngcontent-%COMP%], .main-content__third-line--chinese[_ngcontent-%COMP%]{text-align:left}.first-line__traffic-location-from--hidden[_ngcontent-%COMP%]{visibility:hidden}.main-content__first-line[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;flex-direction:row}.first-line__road-icon-area[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:49px;min-width:96px;margin:1px 31px 0 32px}.first-line__road-icon-area--hidden[_ngcontent-%COMP%]{visibility:hidden}.first-line__road-icon[_ngcontent-%COMP%]{height:43px}.first-lines__ramp[_ngcontent-%COMP%]{width:730px;display:block}.first-line__ramp[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:row}.first-line__ramp-text[_ngcontent-%COMP%]{max-width:660px}.ramp-line__road-icon[_ngcontent-%COMP%]{flex-shrink:0;align-items:flex-end;max-width:96px;height:43px;margin-right:16px}.first-line__ramp-location-wrapper[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;margin-top:20px;max-width:730px;display:flex;align-items:center;flex-direction:row}.first-line__location-and-car2x-wrapper[_ngcontent-%COMP%]{width:730px;display:flex;flex-wrap:nowrap;flex-direction:row;justify-content:flex-start}.first-line__single-label-and-car2x-wrapper[_ngcontent-%COMP%]{width:730px;display:flex;flex-wrap:nowrap;flex-direction:row;justify-content:space-between}.first-line__traffic-location[_ngcontent-%COMP%]{padding-left:9px;display:flex;flex-wrap:nowrap}.first-line__traffic-location-from[_ngcontent-%COMP%], .first-line__traffic-location-to[_ngcontent-%COMP%]{max-width:730px;flex:0 1 auto;min-width:100px}.first-line__spacer[_ngcontent-%COMP%]{flex:1 1 auto}.first-line__arrow-icon[_ngcontent-%COMP%]{flex:0 0 auto;height:40px;width:40px;margin:4px 19px 0;transform:scaleX(1)}.first-line__to-text[_ngcontent-%COMP%]{max-width:45px;flex:0 0 auto;margin:0 19px}.main-content__distance-and-delay[_ngcontent-%COMP%], .main-content__second-line[_ngcontent-%COMP%], .main-content__second-line--chinese[_ngcontent-%COMP%], .main-content__third-line[_ngcontent-%COMP%], .main-content__third-line--chinese[_ngcontent-%COMP%]{margin-top:17px;margin-left:159px;display:flex}.main-content__second-line[_ngcontent-%COMP%], .main-content__second-line--chinese[_ngcontent-%COMP%], .main-content__third-line[_ngcontent-%COMP%], .main-content__third-line--chinese[_ngcontent-%COMP%]{max-height:98px}.second-line__traffic-location-between-value[_ngcontent-%COMP%], .third-line__traffic-location-and-value[_ngcontent-%COMP%]{white-space:unset}.second-line__traffic-location-chinese-between-value[_ngcontent-%COMP%], .third-line__traffic-location-chinese-and-value[_ngcontent-%COMP%]{margin-right:20px;white-space:unset}.main-content__second-line--hidden[_ngcontent-%COMP%], .main-content__third-line--hidden[_ngcontent-%COMP%]{visibility:hidden}.main-content__second-line--chinese[_ngcontent-%COMP%], .main-content__third-line--chinese[_ngcontent-%COMP%]{flex-direction:row}.second-line__traffic-location-between[_ngcontent-%COMP%], .third-line__traffic-location-and[_ngcontent-%COMP%]{max-width:300px;margin-right:20px;flex-shrink:0}.second-line__traffic-location-chinese-and[_ngcontent-%COMP%], .third-line__traffic-location-chinese-between[_ngcontent-%COMP%]{max-width:300px;flex-shrink:0}.main-content__event-items[_ngcontent-%COMP%]{margin-top:17px;margin-left:159px;display:flex;flex-wrap:nowrap;flex-direction:row;line-height:49px}.delay__delay-icon[_ngcontent-%COMP%], .event-items__event-icon[_ngcontent-%COMP%], .first-line__car2x-icon[_ngcontent-%COMP%]{height:40px;width:40px}.delay__delay-icon[_ngcontent-%COMP%]{margin-top:5px}.first-line__car2x-icon[_ngcontent-%COMP%]{margin-left:30px}.delay__delay-icon[_ngcontent-%COMP%], .event-items__event-icon[_ngcontent-%COMP%]{margin-right:30px}.event-items__event-icon[_ngcontent-%COMP%], .first-line__car2x-icon[_ngcontent-%COMP%]{margin-top:4px}.event-items__event-text[_ngcontent-%COMP%]{white-space:unset}.event-items__event-text-wrapper[_ngcontent-%COMP%]{display:block}.main-content__distance-and-delay[_ngcontent-%COMP%]{height:49px;padding-left:70px;justify-content:space-between}.distance-and-delay__delay[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;flex-direction:row;text-align:right}.distance-and-arrow-wrapper[_ngcontent-%COMP%]{display:flex}.direction-arrow[_ngcontent-%COMP%]{margin-top:5px;margin-right:30px}.distance-and-delay__distance--hidden[_ngcontent-%COMP%]{visibility:hidden}.lane-restrictions[_ngcontent-%COMP%]{margin-top:17px}.component-layout-arabic[_nghost-%COMP%]   .main-content__first-line[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .main-content__first-line[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .traffic-details__main-content[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .traffic-details__main-content[_ngcontent-%COMP%]{flex-direction:row-reverse}.component-layout-arabic[_nghost-%COMP%]   .event-items__event-text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .event-items__event-text[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .first-line__traffic-location-from[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .first-line__traffic-location-from[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .first-line__traffic-location-to[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .first-line__traffic-location-to[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .main-content__second-line[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .main-content__second-line[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .main-content__third-line[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .main-content__third-line[_ngcontent-%COMP%]{text-align:right}.component-layout-arabic[_nghost-%COMP%]   .second-line__traffic-location-between[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .second-line__traffic-location-between[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .third-line__traffic-location-and[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .third-line__traffic-location-and[_ngcontent-%COMP%]{margin-left:20px;margin-right:0}.component-layout-arabic[_nghost-%COMP%]   .distance-and-delay__delay[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .distance-and-delay__delay[_ngcontent-%COMP%]{flex-direction:row-reverse;text-align:left}.component-layout-arabic[_nghost-%COMP%]   .first-line__road-icon-area[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .first-line__road-icon-area[_ngcontent-%COMP%]{margin:1px 32px 0 31px}.component-layout-arabic[_nghost-%COMP%]   .ramp-line__road-icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ramp-line__road-icon[_ngcontent-%COMP%]{margin-right:0;margin-left:16px}.component-layout-arabic[_nghost-%COMP%]   .first-line__ramp[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .first-line__ramp[_ngcontent-%COMP%]{flex-direction:row-reverse}.component-layout-arabic[_nghost-%COMP%]   .first-line__arrow-icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .first-line__arrow-icon[_ngcontent-%COMP%]{margin:4px 19px 0;transform:scaleX(-1)}.component-layout-arabic[_nghost-%COMP%]   .first-line__location-and-car2x-wrapper[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .first-line__location-and-car2x-wrapper[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .first-line__ramp-location-wrapper[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .first-line__ramp-location-wrapper[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .first-line__single-label-and-car2x-wrapper[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .first-line__single-label-and-car2x-wrapper[_ngcontent-%COMP%]{flex-direction:row-reverse}.component-layout-arabic[_nghost-%COMP%]   .first-line__traffic-location[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .first-line__traffic-location[_ngcontent-%COMP%]{padding-right:9px;flex-direction:row-reverse}.component-layout-arabic[_nghost-%COMP%]   .main-content__distance-and-delay[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .main-content__distance-and-delay[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .main-content__event-items[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .main-content__event-items[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .main-content__second-line[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .main-content__second-line[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .main-content__third-line[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .main-content__third-line[_ngcontent-%COMP%]{margin-right:159px;margin-left:0;flex-direction:row-reverse}.component-layout-arabic[_nghost-%COMP%]   .first-line__car2x-icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .first-line__car2x-icon[_ngcontent-%COMP%]{margin-right:30px;margin-left:0}.component-layout-arabic[_nghost-%COMP%]   .delay__delay-icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .delay__delay-icon[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .event-items__event-icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .event-items__event-icon[_ngcontent-%COMP%]{margin-left:30px;margin-right:0}.component-layout-arabic[_nghost-%COMP%]   .main-content__distance-and-delay[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .main-content__distance-and-delay[_ngcontent-%COMP%]{padding-right:70px;padding-left:0}.component-layout-arabic[_nghost-%COMP%]   .distance-and-arrow-wrapper[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .distance-and-arrow-wrapper[_ngcontent-%COMP%]{flex-direction:row-reverse}.component-layout-arabic[_nghost-%COMP%]   .direction-arrow[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .direction-arrow[_ngcontent-%COMP%]{margin-left:30px}.component-layout-arabic[_nghost-%COMP%]   .distance-and-delay__distance[_ngcontent-%COMP%]     .distance__space--align-left, .component-layout-arabic   [_nghost-%COMP%]   .distance-and-delay__distance[_ngcontent-%COMP%]     .distance__space--align-left{justify-content:flex-start}.component-layout-latin[_nghost-%COMP%]   .traffic-details[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .traffic-details[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .traffic-details__main-content[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .traffic-details__main-content[_ngcontent-%COMP%]{flex-direction:row}.component-layout-latin[_nghost-%COMP%]   .traffic-details__map[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .traffic-details__map[_ngcontent-%COMP%]{margin-left:60px;margin-right:0}.component-layout-latin[_nghost-%COMP%]   .main-content__first-line[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .main-content__first-line[_ngcontent-%COMP%]{flex-direction:row}.component-layout-latin[_nghost-%COMP%]   .event-items__event-text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .event-items__event-text[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .first-line__traffic-location-from[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .first-line__traffic-location-from[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .first-line__traffic-location-to[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .first-line__traffic-location-to[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .main-content__second-line[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .main-content__second-line[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .main-content__third-line[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .main-content__third-line[_ngcontent-%COMP%]{text-align:left}.component-layout-latin[_nghost-%COMP%]   .second-line__traffic-location-between[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .second-line__traffic-location-between[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .third-line__traffic-location-and[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .third-line__traffic-location-and[_ngcontent-%COMP%]{margin-right:20px;margin-left:0}.component-layout-latin[_nghost-%COMP%]   .distance-and-delay__delay[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .distance-and-delay__delay[_ngcontent-%COMP%]{flex-direction:row;text-align:right}.component-layout-latin[_nghost-%COMP%]   .first-line__road-icon-area[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .first-line__road-icon-area[_ngcontent-%COMP%]{margin:1px 31px 0 32px}.component-layout-latin[_nghost-%COMP%]   .ramp-line__road-icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ramp-line__road-icon[_ngcontent-%COMP%]{margin-left:0;margin-right:16px}.component-layout-latin[_nghost-%COMP%]   .first-line__ramp[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .first-line__ramp[_ngcontent-%COMP%]{flex-direction:row}.component-layout-latin[_nghost-%COMP%]   .first-line__arrow-icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .first-line__arrow-icon[_ngcontent-%COMP%]{margin:4px 19px 0;transform:scaleX(1)}.component-layout-latin[_nghost-%COMP%]   .first-line__location-and-car2x-wrapper[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .first-line__location-and-car2x-wrapper[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .first-line__ramp-location-wrapper[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .first-line__ramp-location-wrapper[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .first-line__single-label-and-car2x-wrapper[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .first-line__single-label-and-car2x-wrapper[_ngcontent-%COMP%]{flex-direction:row}.component-layout-latin[_nghost-%COMP%]   .first-line__traffic-location[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .first-line__traffic-location[_ngcontent-%COMP%]{padding-left:9px;flex-direction:row}.component-layout-latin[_nghost-%COMP%]   .main-content__distance-and-delay[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .main-content__distance-and-delay[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .main-content__event-items[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .main-content__event-items[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .main-content__second-line[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .main-content__second-line[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .main-content__third-line[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .main-content__third-line[_ngcontent-%COMP%]{margin-left:159px;margin-right:0;flex-direction:row}.component-layout-latin[_nghost-%COMP%]   .first-line__car2x-icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .first-line__car2x-icon[_ngcontent-%COMP%]{margin-left:30px;margin-right:0}.component-layout-latin[_nghost-%COMP%]   .delay__delay-icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .delay__delay-icon[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .event-items__event-icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .event-items__event-icon[_ngcontent-%COMP%]{margin-right:30px;margin-left:0}.component-layout-latin[_nghost-%COMP%]   .main-content__distance-and-delay[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .main-content__distance-and-delay[_ngcontent-%COMP%]{padding-left:70px;padding-right:0}.component-layout-latin[_nghost-%COMP%]   .distance-and-arrow-wrapper[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .distance-and-arrow-wrapper[_ngcontent-%COMP%]{flex-direction:row}.component-layout-latin[_nghost-%COMP%]   .direction-arrow[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .direction-arrow[_ngcontent-%COMP%]{margin-right:30px}.component-layout-latin[_nghost-%COMP%]   .distance-and-delay__distance[_ngcontent-%COMP%]     .distance__space--align-left, .component-layout-latin   [_nghost-%COMP%]   .distance-and-delay__distance[_ngcontent-%COMP%]     .distance__space--align-left{justify-content:flex-start}',
              ],
            ],
            data: {},
          }));
      function Tn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-number-plate-restriction",
              [],
              null,
              null,
              null,
              S,
              T,
            )),
            l.xb(
              1,
              49152,
              null,
              0,
              w,
              [],
              { restrictionItem: [0, "restrictionItem"] },
              null,
            ),
          ],
          function (n, t) {
            n(t, 1, 0, t.parent.parent.context.mib3Let);
          },
          null,
        );
      }
      function Nn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "first-line__car2x-icon"],
                ["id", "TrafficCar2XIconRamp"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              h.b,
              h.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              4243456,
              null,
              0,
              x.b,
              [o.a, l.z],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                scaleMode: [2, "scaleMode"],
                blocksRouting: [3, "blocksRouting"],
              },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "TrafficCar2XIconRamp"),
              n(
                t,
                2,
                0,
                e.laneInfoIcon,
                e.iconCategoryList,
                e.smallIconsScaleMode,
                !1,
              ));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).iconComponentHidden);
          },
        );
      }
      function An(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "ramp-line__road-icon"],
                ["id", "RampFirstRoadIcon"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              h.b,
              h.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              4243456,
              null,
              0,
              x.b,
              [o.a, l.z],
              {
                fileName: [0, "fileName"],
                blocksRouting: [1, "blocksRouting"],
                queryIconWidth: [2, "queryIconWidth"],
                queryIconHeight: [3, "queryIconHeight"],
              },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "RampFirstRoadIcon"),
              n(
                t,
                2,
                0,
                null == t.parent.parent.parent.parent.parent.context.mib3Let ||
                  null ==
                    t.parent.parent.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes
                  ? null
                  : t.parent.parent.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes.roadIcon,
                !1,
                e.INLINEROADICON.width,
                e.INLINEROADICON.height,
              ));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).iconComponentHidden);
          },
        );
      }
      function Rn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "first-line__arrow-icon"],
                ["id", "RampDirectionArrowIcon"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              h.b,
              h.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              4243456,
              null,
              0,
              x.b,
              [o.a, l.z],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                scaleMode: [2, "scaleMode"],
                blocksRouting: [3, "blocksRouting"],
              },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "RampDirectionArrowIcon"),
              n(
                t,
                2,
                0,
                e.DirectionArrow[
                  null ==
                    t.parent.parent.parent.parent.parent.parent.context
                      .mib3Let ||
                  null ==
                    t.parent.parent.parent.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes
                    ? null
                    : t.parent.parent.parent.parent.parent.parent.context
                        .mib3Let.trafficMessageAttributes.eventDirection
                ],
                e.iconCategoryList,
                e.smallIconsScaleMode,
                !1,
              ));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).iconComponentHidden);
          },
        );
      }
      function Dn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "first-line__to-text"],
                ["id", "FirstLineRampDirectionNar"],
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
            l.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "FirstLineRampDirectionNar"),
              n(t, 2, 0, "to", "FirstLineRampDirectionNar", 1));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function kn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(0, 0, null, null, 3, "div", [], null, null, null, null, null)),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, Rn)),
            l.xb(
              2,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(),
            l.hb(
              0,
              [
                [1, 2],
                ["rampNar", 2],
              ],
              null,
              0,
              null,
              Dn,
            )),
          ],
          function (n, t) {
            n(
              t,
              2,
              0,
              !t.component.systemConfigService.isNorthAmericaRegion(),
              l.Nb(t, 3),
            );
          },
          null,
        );
      }
      function En(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "ramp-line__road-icon"],
                ["id", "RampSecondRoadIcon"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              h.b,
              h.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              4243456,
              null,
              0,
              x.b,
              [o.a, l.z],
              {
                fileName: [0, "fileName"],
                blocksRouting: [1, "blocksRouting"],
                queryIconWidth: [2, "queryIconWidth"],
                queryIconHeight: [3, "queryIconHeight"],
              },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "RampSecondRoadIcon"),
              n(
                t,
                2,
                0,
                null == t.parent.parent.parent.parent.parent.context.mib3Let ||
                  null ==
                    t.parent.parent.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes
                  ? null
                  : t.parent.parent.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes.roadIconTwo,
                !1,
                e.INLINEROADICON.width,
                e.INLINEROADICON.height,
              ));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).iconComponentHidden);
          },
        );
      }
      function Fn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "first-line__ramp-traffic-location-to"],
                ["id", "RampTrafficLocationTo"],
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
            l.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 16384, null, 0, b.a, [], null, null),
            l.xb(
              3,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "RampTrafficLocationTo"),
              n(
                t,
                3,
                0,
                "RampTrafficLocationTo",
                null == t.parent.parent.parent.parent.parent.context.mib3Let ||
                  null ==
                    t.parent.parent.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes
                  ? null
                  : t.parent.parent.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes.directionTo,
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 3).backgroundColor,
              l.Nb(t, 3).fixedNumberOfLines,
              l.Nb(t, 3).mayContainLatinCharsForArabic,
              l.Nb(t, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Sn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              12,
              "div",
              [["class", "first-line__ramp-location-wrapper"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, An)),
            l.xb(
              2,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            l.yb(
              3,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "first-line__ramp-traffic-location-from"],
                ["id", "RampTrafficLocationFrom"],
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
            l.xb(
              4,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(5, 16384, null, 0, b.a, [], null, null),
            l.xb(
              6,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, kn)),
            l.xb(
              8,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, En)),
            l.xb(
              10,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, Fn)),
            l.xb(
              12,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, t) {
            (n(
              t,
              2,
              0,
              null == t.parent.parent.parent.parent.context.mib3Let ||
                null ==
                  t.parent.parent.parent.parent.context.mib3Let
                    .trafficMessageAttributes
                ? null
                : t.parent.parent.parent.parent.context.mib3Let
                    .trafficMessageAttributes.roadIcon,
            ),
              n(t, 4, 0, "RampTrafficLocationFrom"),
              n(
                t,
                6,
                0,
                "RampTrafficLocationFrom",
                null == t.parent.parent.parent.parent.context.mib3Let ||
                  null ==
                    t.parent.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes
                  ? null
                  : t.parent.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes.directionFrom,
              ),
              n(
                t,
                8,
                0,
                null == t.parent.parent.parent.parent.context.mib3Let ||
                  null ==
                    t.parent.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes
                  ? null
                  : t.parent.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes.directionTo,
              ),
              n(
                t,
                10,
                0,
                null == t.parent.parent.parent.parent.context.mib3Let ||
                  null ==
                    t.parent.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes
                  ? null
                  : t.parent.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes.roadIconTwo,
              ),
              n(
                t,
                12,
                0,
                null == t.parent.parent.parent.parent.context.mib3Let ||
                  null ==
                    t.parent.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes
                  ? null
                  : t.parent.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes.directionTo,
              ));
          },
          function (n, t) {
            n(
              t,
              3,
              0,
              l.Nb(t, 6).backgroundColor,
              l.Nb(t, 6).fixedNumberOfLines,
              l.Nb(t, 6).mayContainLatinCharsForArabic,
              l.Nb(t, 6).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Vn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "first-line__ramp-location-wrapper"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "first-line__ramp-text"],
                ["developerText", "Unnamed Road"],
                ["id", "FirstLineTrafficIsRampUnknownRoad"],
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
            l.xb(
              2,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              3,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 2, 0, "FirstLineTrafficIsRampUnknownRoad"),
              n(
                t,
                3,
                0,
                "Unnamed Road",
                "FirstLineTrafficIsRampUnknownRoad",
                1,
              ));
          },
          function (n, t) {
            n(
              t,
              1,
              0,
              l.Nb(t, 3).backgroundColor,
              l.Nb(t, 3).fixedNumberOfLines,
              l.Nb(t, 3).mayContainLatinCharsForArabic,
              l.Nb(t, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Hn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              9,
              "div",
              [["class", "first-lines__ramp"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              5,
              "div",
              [["class", "first-line__ramp"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              2,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "first-line__ramp-text"],
                ["developerText", "Ramp:"],
                ["id", "FirstLineTrafficIsRamp"],
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
            l.xb(
              3,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              4,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, Nn)),
            l.xb(
              6,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, Sn)),
            l.xb(
              8,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(),
            l.hb(
              0,
              [
                [1, 2],
                ["rampUnnamedRoad", 2],
              ],
              null,
              0,
              null,
              Vn,
            )),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, "FirstLineTrafficIsRamp"),
              n(t, 4, 0, "Ramp:", "FirstLineTrafficIsRamp", 1),
              n(t, 6, 0, e.laneInfoIcon),
              n(
                t,
                8,
                0,
                null == t.parent.parent.parent.context.mib3Let ||
                  null ==
                    t.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes
                  ? null
                  : t.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes.directionFrom,
                l.Nb(t, 9),
              ));
          },
          function (n, t) {
            n(
              t,
              2,
              0,
              l.Nb(t, 4).backgroundColor,
              l.Nb(t, 4).fixedNumberOfLines,
              l.Nb(t, 4).mayContainLatinCharsForArabic,
              l.Nb(t, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function $n(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "first-line__car2x-icon"],
                ["id", "TrafficCar2XIconVics"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              h.b,
              h.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              4243456,
              null,
              0,
              x.b,
              [o.a, l.z],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                scaleMode: [2, "scaleMode"],
                blocksRouting: [3, "blocksRouting"],
              },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "TrafficCar2XIconVics"),
              n(
                t,
                2,
                0,
                e.laneInfoIcon,
                e.iconCategoryList,
                e.smallIconsScaleMode,
                !1,
              ));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).iconComponentHidden);
          },
        );
      }
      function Wn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              7,
              "div",
              [["class", "first-line__single-label-and-car2x-wrapper"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["class", "first-line__traffic-location-from"],
                ["id", "FirstLineTrafficVicsArea"],
              ],
              [
                [2, "first-line__traffic-location-from--hidden", null],
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
            l.xb(
              2,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              3,
              16384,
              null,
              0,
              c.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            l.Qb(4, { area: 0 }),
            l.xb(
              5,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, $n)),
            l.xb(
              7,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            n(t, 2, 0, "FirstLineTrafficVicsArea");
            var l = n(
              t,
              4,
              0,
              null == t.parent.parent.parent.context.mib3Let ||
                null ==
                  t.parent.parent.parent.context.mib3Let
                    .trafficMessageAttributes
                ? null
                : t.parent.parent.parent.context.mib3Let
                    .trafficMessageAttributes.area,
            );
            (n(t, 3, 0, l),
              n(t, 5, 0, "in: {{area}}", "FirstLineTrafficVicsArea", 1),
              n(t, 7, 0, e.laneInfoIcon));
          },
          function (n, t) {
            n(
              t,
              1,
              0,
              !(
                null != t.parent.parent.parent.context.mib3Let &&
                null !=
                  t.parent.parent.parent.context.mib3Let
                    .trafficMessageAttributes &&
                t.parent.parent.parent.context.mib3Let.trafficMessageAttributes
                  .area
              ),
              l.Nb(t, 5).backgroundColor,
              l.Nb(t, 5).fixedNumberOfLines,
              l.Nb(t, 5).mayContainLatinCharsForArabic,
              l.Nb(t, 5).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Un(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "first-line__car2x-icon"],
                ["id", "TrafficCar2XIconUnnamedRoad"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              h.b,
              h.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              4243456,
              null,
              0,
              x.b,
              [o.a, l.z],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                scaleMode: [2, "scaleMode"],
                blocksRouting: [3, "blocksRouting"],
              },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "TrafficCar2XIconUnnamedRoad"),
              n(
                t,
                2,
                0,
                e.laneInfoIcon,
                e.iconCategoryList,
                e.smallIconsScaleMode,
                !1,
              ));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).iconComponentHidden);
          },
        );
      }
      function zn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              5,
              "div",
              [["class", "first-line__single-label-and-car2x-wrapper"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "first-line__traffic-location-from"],
                ["developerText", "Unnamed Road"],
                ["id", "FirstLineTrafficLocationEmpty"],
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
            l.xb(
              2,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              3,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, Un)),
            l.xb(
              5,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 2, 0, "FirstLineTrafficLocationEmpty"),
              n(t, 3, 0, "Unnamed Road", "FirstLineTrafficLocationEmpty", 1),
              n(t, 5, 0, e.laneInfoIcon));
          },
          function (n, t) {
            n(
              t,
              1,
              0,
              l.Nb(t, 3).backgroundColor,
              l.Nb(t, 3).fixedNumberOfLines,
              l.Nb(t, 3).mayContainLatinCharsForArabic,
              l.Nb(t, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function jn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "first-line__arrow-icon"],
                ["id", "FirstLineDirectionArrowIcon"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              h.b,
              h.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              4243456,
              null,
              0,
              x.b,
              [o.a, l.z],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                scaleMode: [2, "scaleMode"],
                blocksRouting: [3, "blocksRouting"],
              },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "FirstLineDirectionArrowIcon"),
              n(
                t,
                2,
                0,
                e.DirectionArrow[
                  null == t.parent.parent.parent.parent.context.mib3Let ||
                  null ==
                    t.parent.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes
                    ? null
                    : t.parent.parent.parent.parent.context.mib3Let
                        .trafficMessageAttributes.eventDirection
                ],
                e.iconCategoryList,
                e.smallIconsScaleMode,
                !1,
              ));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).iconComponentHidden);
          },
        );
      }
      function Bn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "first-line__traffic-location-to"],
                ["id", "FirstLineTrafficLocationTo"],
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
            l.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 16384, null, 0, b.a, [], null, null),
            l.xb(
              3,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "FirstLineTrafficLocationTo"),
              n(
                t,
                3,
                0,
                "FirstLineTrafficLocationTo",
                null == t.parent.parent.parent.parent.context.mib3Let ||
                  null ==
                    t.parent.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes
                  ? null
                  : t.parent.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes.directionTo,
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 3).backgroundColor,
              l.Nb(t, 3).fixedNumberOfLines,
              l.Nb(t, 3).mayContainLatinCharsForArabic,
              l.Nb(t, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Yn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "first-line__car2x-icon"],
                ["id", "TrafficCar2XIcon"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              h.b,
              h.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              4243456,
              null,
              0,
              x.b,
              [o.a, l.z],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                scaleMode: [2, "scaleMode"],
                blocksRouting: [3, "blocksRouting"],
              },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "TrafficCar2XIcon"),
              n(
                t,
                2,
                0,
                e.laneInfoIcon,
                e.iconCategoryList,
                e.smallIconsScaleMode,
                !1,
              ));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).iconComponentHidden);
          },
        );
      }
      function Xn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              11,
              "div",
              [["class", "first-line__location-and-car2x-wrapper"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "first-line__traffic-location-from"],
                ["id", "FirstLineTrafficLocationFrom"],
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
            l.xb(
              2,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(3, 16384, null, 0, b.a, [], null, null),
            l.xb(
              4,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, jn)),
            l.xb(
              6,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, Bn)),
            l.xb(
              8,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            l.yb(
              9,
              0,
              null,
              null,
              0,
              "div",
              [["class", "first-line__spacer"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, Yn)),
            l.xb(
              11,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 2, 0, "FirstLineTrafficLocationFrom"),
              n(
                t,
                4,
                0,
                "FirstLineTrafficLocationFrom",
                null == t.parent.parent.parent.context.mib3Let ||
                  null ==
                    t.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes
                  ? null
                  : t.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes.directionFrom,
              ),
              n(
                t,
                6,
                0,
                null == t.parent.parent.parent.context.mib3Let ||
                  null ==
                    t.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes
                  ? null
                  : t.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes.directionTo,
              ),
              n(
                t,
                8,
                0,
                null == t.parent.parent.parent.context.mib3Let ||
                  null ==
                    t.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes
                  ? null
                  : t.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes.directionTo,
              ),
              n(t, 11, 0, e.laneInfoIcon));
          },
          function (n, t) {
            n(
              t,
              1,
              0,
              l.Nb(t, 4).backgroundColor,
              l.Nb(t, 4).fixedNumberOfLines,
              l.Nb(t, 4).mayContainLatinCharsForArabic,
              l.Nb(t, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Zn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              7,
              "div",
              [["class", "main-content__second-line"]],
              [[2, "main-content__second-line--hidden", null]],
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "second-line__traffic-location-between"],
                ["developerText", "zwischen"],
                ["id", "TrafficDetailsBetween"],
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
            l.xb(
              2,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              3,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            l.yb(
              4,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "second-line__traffic-location-between-value"],
                ["id", "SecondLineTrafficLocationBetween"],
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
            l.xb(
              5,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(6, 16384, null, 0, b.a, [], null, null),
            l.xb(
              7,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 2, 0, "TrafficDetailsBetween"),
              n(t, 3, 0, "zwischen", "TrafficDetailsBetween", 1),
              n(t, 5, 0, "SecondLineTrafficLocationBetween"),
              n(
                t,
                7,
                0,
                "SecondLineTrafficLocationBetween",
                null == t.parent.parent.parent.context.mib3Let ||
                  null ==
                    t.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes
                  ? null
                  : t.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes.startLocation,
              ));
          },
          function (n, t) {
            (n(
              t,
              0,
              0,
              !(
                null != t.parent.parent.parent.context.mib3Let &&
                null !=
                  t.parent.parent.parent.context.mib3Let
                    .trafficMessageAttributes &&
                t.parent.parent.parent.context.mib3Let.trafficMessageAttributes
                  .startLocation
              ),
            ),
              n(
                t,
                1,
                0,
                l.Nb(t, 3).backgroundColor,
                l.Nb(t, 3).fixedNumberOfLines,
                l.Nb(t, 3).mayContainLatinCharsForArabic,
                l.Nb(t, 3).shortenWithEllipsisForArabic,
              ),
              n(
                t,
                4,
                0,
                l.Nb(t, 7).backgroundColor,
                l.Nb(t, 7).fixedNumberOfLines,
                l.Nb(t, 7).mayContainLatinCharsForArabic,
                l.Nb(t, 7).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function Kn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              7,
              "div",
              [["class", "main-content__second-line--chinese"]],
              [[2, "main-content__second-line--hidden", null]],
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                [
                  "class",
                  "second-line__traffic-location-chinese-between-value",
                ],
                ["id", "SecondLineTrafficLocationBetweenChina"],
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
            l.xb(
              2,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(3, 16384, null, 0, b.a, [], null, null),
            l.xb(
              4,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            (n()(),
            l.yb(
              5,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "second-line__traffic-location-chinese-and"],
                ["developerText", "und"],
                ["id", "TrafficDetailsChineseAnd"],
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
            l.xb(
              6,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              7,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 2, 0, "SecondLineTrafficLocationBetweenChina"),
              n(
                t,
                4,
                0,
                "SecondLineTrafficLocationBetweenChina",
                null == t.parent.parent.parent.context.mib3Let ||
                  null ==
                    t.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes
                  ? null
                  : t.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes.startLocation,
              ),
              n(t, 6, 0, "TrafficDetailsChineseAnd"),
              n(t, 7, 0, "und", "TrafficDetailsChineseAnd", 1));
          },
          function (n, t) {
            (n(
              t,
              0,
              0,
              !(
                null != t.parent.parent.parent.context.mib3Let &&
                null !=
                  t.parent.parent.parent.context.mib3Let
                    .trafficMessageAttributes &&
                t.parent.parent.parent.context.mib3Let.trafficMessageAttributes
                  .startLocation
              ),
            ),
              n(
                t,
                1,
                0,
                l.Nb(t, 4).backgroundColor,
                l.Nb(t, 4).fixedNumberOfLines,
                l.Nb(t, 4).mayContainLatinCharsForArabic,
                l.Nb(t, 4).shortenWithEllipsisForArabic,
              ),
              n(
                t,
                5,
                0,
                l.Nb(t, 7).backgroundColor,
                l.Nb(t, 7).fixedNumberOfLines,
                l.Nb(t, 7).mayContainLatinCharsForArabic,
                l.Nb(t, 7).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function qn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              7,
              "div",
              [["class", "main-content__third-line"]],
              [[2, "main-content__third-line--hidden", null]],
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "third-line__traffic-location-and"],
                ["developerText", "und"],
                ["id", "TrafficDetailsAnd"],
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
            l.xb(
              2,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              3,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            l.yb(
              4,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "third-line__traffic-location-and-value"],
                ["id", "ThirdLineTrafficLocationAnd"],
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
            l.xb(
              5,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(6, 16384, null, 0, b.a, [], null, null),
            l.xb(
              7,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 2, 0, "TrafficDetailsAnd"),
              n(t, 3, 0, "und", "TrafficDetailsAnd", 1),
              n(t, 5, 0, "ThirdLineTrafficLocationAnd"),
              n(
                t,
                7,
                0,
                "ThirdLineTrafficLocationAnd",
                null == t.parent.parent.parent.context.mib3Let ||
                  null ==
                    t.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes
                  ? null
                  : t.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes.endLocation,
              ));
          },
          function (n, t) {
            (n(
              t,
              0,
              0,
              !(
                null != t.parent.parent.parent.context.mib3Let &&
                null !=
                  t.parent.parent.parent.context.mib3Let
                    .trafficMessageAttributes &&
                t.parent.parent.parent.context.mib3Let.trafficMessageAttributes
                  .endLocation
              ),
            ),
              n(
                t,
                1,
                0,
                l.Nb(t, 3).backgroundColor,
                l.Nb(t, 3).fixedNumberOfLines,
                l.Nb(t, 3).mayContainLatinCharsForArabic,
                l.Nb(t, 3).shortenWithEllipsisForArabic,
              ),
              n(
                t,
                4,
                0,
                l.Nb(t, 7).backgroundColor,
                l.Nb(t, 7).fixedNumberOfLines,
                l.Nb(t, 7).mayContainLatinCharsForArabic,
                l.Nb(t, 7).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function Qn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              7,
              "div",
              [["class", "main-content__third-line--chinese"]],
              [[2, "main-content__third-line--hidden", null]],
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "third-line__traffic-location-chinese-and-value"],
                ["id", "ThirdLineTrafficLocationAndChina"],
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
            l.xb(
              2,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(3, 16384, null, 0, b.a, [], null, null),
            l.xb(
              4,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            (n()(),
            l.yb(
              5,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "third-line__traffic-location-chinese-between"],
                ["developerText", "zwischen"],
                ["id", "TrafficDetailsChineseBetween"],
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
            l.xb(
              6,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              7,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 2, 0, "ThirdLineTrafficLocationAndChina"),
              n(
                t,
                4,
                0,
                "ThirdLineTrafficLocationAndChina",
                null == t.parent.parent.parent.context.mib3Let ||
                  null ==
                    t.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes
                  ? null
                  : t.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes.endLocation,
              ),
              n(t, 6, 0, "TrafficDetailsChineseBetween"),
              n(t, 7, 0, "zwischen", "TrafficDetailsChineseBetween", 1));
          },
          function (n, t) {
            (n(
              t,
              0,
              0,
              !(
                null != t.parent.parent.parent.context.mib3Let &&
                null !=
                  t.parent.parent.parent.context.mib3Let
                    .trafficMessageAttributes &&
                t.parent.parent.parent.context.mib3Let.trafficMessageAttributes
                  .endLocation
              ),
            ),
              n(
                t,
                1,
                0,
                l.Nb(t, 4).backgroundColor,
                l.Nb(t, 4).fixedNumberOfLines,
                l.Nb(t, 4).mayContainLatinCharsForArabic,
                l.Nb(t, 4).shortenWithEllipsisForArabic,
              ),
              n(
                t,
                5,
                0,
                l.Nb(t, 7).backgroundColor,
                l.Nb(t, 7).fixedNumberOfLines,
                l.Nb(t, 7).mayContainLatinCharsForArabic,
                l.Nb(t, 7).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function Gn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "event-items__event-icon"],
                ["id", "vicsAreaShortenedDescriptionIcon"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              h.b,
              h.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              4243456,
              null,
              0,
              x.b,
              [o.a, l.z],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                scaleMode: [2, "scaleMode"],
                blocksRouting: [3, "blocksRouting"],
              },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "vicsAreaShortenedDescriptionIcon"),
              n(
                t,
                2,
                0,
                e.firstEventIcon,
                e.iconCategoryList,
                e.smallIconsScaleMode,
                !1,
              ));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).iconComponentHidden);
          },
        );
      }
      function Jn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              8,
              "div",
              [
                ["class", "main-content__event-items"],
                ["id", "vicsAreaShortenedDescription"],
              ],
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
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, Gn)),
            l.xb(
              3,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            l.yb(
              4,
              0,
              null,
              null,
              4,
              "div",
              [["class", "event-items__event-text-wrapper"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              5,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "event-items__event-text"],
                ["id", "vicsAreaShortenedDescriptionText"],
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
            l.xb(
              6,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(7, 16384, null, 0, b.a, [], null, null),
            l.xb(
              8,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "vicsAreaShortenedDescription"),
              n(t, 3, 0, e.firstEventIcon),
              n(t, 6, 0, "vicsAreaShortenedDescriptionText"),
              n(
                t,
                8,
                0,
                "vicsAreaShortenedDescriptionText",
                null == t.parent.parent.parent.context.mib3Let ||
                  null ==
                    t.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes ||
                  null ==
                    t.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes.shortenedEventDescription
                  ? null
                  : t.parent.parent.parent.context.mib3Let
                      .trafficMessageAttributes.shortenedEventDescription.text,
              ));
          },
          function (n, t) {
            n(
              t,
              5,
              0,
              l.Nb(t, 8).backgroundColor,
              l.Nb(t, 8).fixedNumberOfLines,
              l.Nb(t, 8).mayContainLatinCharsForArabic,
              l.Nb(t, 8).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function nt(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "event-items__event-icon"],
                ["id", "EventItemsEventIcon"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              h.b,
              h.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              4243456,
              null,
              0,
              x.b,
              [o.a, l.z],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                scaleMode: [2, "scaleMode"],
                blocksRouting: [3, "blocksRouting"],
              },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "EventItemsEventIcon"),
              n(
                t,
                2,
                0,
                e.firstEventIcon,
                e.iconCategoryList,
                e.smallIconsScaleMode,
                !1,
              ));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).iconComponentHidden);
          },
        );
      }
      function tt(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(0, 0, null, null, 4, "div", [], null, null, null, null, null)),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "event-items__event-text"],
                ["id", "EventItemsEventText"],
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
            l.xb(
              2,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(3, 16384, null, 0, b.a, [], null, null),
            l.xb(
              4,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, l.h, l.l, l.D, [2, f.a], [2, b.a], [2, c.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 2, 0, "EventItemsEventText"),
              n(
                t,
                4,
                0,
                "EventItemsEventText",
                e.trafficService.addAffectedRoadLength(
                  0 === t.context.index,
                  null == t.parent.parent.parent.parent.context.mib3Let
                    ? null
                    : t.parent.parent.parent.parent.context.mib3Let
                        .affectedRoadLength,
                  null == t.context.$implicit ? null : t.context.$implicit.text,
                ) +
                  e.addCommaForEventText(
                    t.context.index < t.parent.context.mib3Let.length - 1 &&
                      ((null == t.parent.parent.parent.parent.context.mib3Let
                        ? null
                        : t.parent.parent.parent.parent.context.mib3Let
                            .affectedRoadLength) ||
                        (null == t.context.$implicit
                          ? null
                          : t.context.$implicit.text)),
                  ),
              ));
          },
          function (n, t) {
            n(
              t,
              1,
              0,
              l.Nb(t, 4).backgroundColor,
              l.Nb(t, 4).fixedNumberOfLines,
              l.Nb(t, 4).mayContainLatinCharsForArabic,
              l.Nb(t, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function et(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
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
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, tt)),
            l.xb(
              2,
              278528,
              null,
              0,
              C.j,
              [l.P, l.L, l.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
            (n()(), l.hb(0, null, null, 0)),
          ],
          function (n, t) {
            n(t, 2, 0, t.context.mib3Let);
          },
          null,
        );
      }
      function lt(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-direction-arrow",
              [["class", "direction-arrow"]],
              null,
              null,
              null,
              g.b,
              g.a,
            )),
            l.xb(
              1,
              49152,
              null,
              0,
              _.a,
              [],
              { displayableArrow: [0, "displayableArrow"] },
              null,
            ),
            l.Qb(2, { distanceType: 0, rotationAngle: 1 }),
          ],
          function (n, t) {
            var e = n(
              t,
              2,
              0,
              t.component.directionType,
              null == t.parent.parent.parent.parent.context.mib3Let ||
                null == t.parent.parent.parent.parent.context.mib3Let.direction
                ? null
                : t.parent.parent.parent.parent.context.mib3Let.direction
                    .rotationAngle,
            );
            n(t, 1, 0, e);
          },
          null,
        );
      }
      function it(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              6,
              "div",
              [["class", "distance-and-delay__delay"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "delay__delay-icon"],
                ["id", "TrafficDelayIcon"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              h.b,
              h.a,
            )),
            l.xb(
              2,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              3,
              4243456,
              null,
              0,
              x.b,
              [o.a, l.z],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                scaleMode: [2, "scaleMode"],
                blocksRouting: [3, "blocksRouting"],
              },
              null,
            ),
            (n()(),
            l.yb(
              4,
              0,
              null,
              null,
              2,
              "au3-formatted-unit-renderer",
              [
                ["class", "delay__delay-text"],
                ["id", "TrafficDetailsDelay"],
              ],
              [[2, "invisible", null]],
              null,
              null,
              y.b,
              y.a,
            )),
            l.xb(
              5,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              6,
              180224,
              null,
              0,
              P.b,
              [s.a, O.a, l.h],
              {
                smallerFontForUnit: [0, "smallerFontForUnit"],
                horizontalAlignment: [1, "horizontalAlignment"],
                rawValue: [2, "rawValue"],
                rawValueUnit: [3, "rawValueUnit"],
                rawValueFormattingRule: [4, "rawValueFormattingRule"],
              },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 2, 0, "TrafficDelayIcon"),
              n(
                t,
                3,
                0,
                e.DELAY_ICON,
                e.iconCategoryList,
                e.smallIconsScaleMode,
                !1,
              ),
              n(t, 5, 0, "TrafficDetailsDelay"),
              n(
                t,
                6,
                0,
                !1,
                e.Alignment.RIGHT,
                null == t.parent.parent.parent.parent.context.mib3Let
                  ? null
                  : t.parent.parent.parent.parent.context.mib3Let.delay,
                e.timeUnit,
                e.timeFormattingRule,
              ));
          },
          function (n, t) {
            (n(t, 1, 0, l.Nb(t, 3).iconComponentHidden),
              n(t, 4, 0, l.Nb(t, 6).isInvisible));
          },
        );
      }
      function at(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              8,
              "div",
              [["class", "main-content__distance-and-delay"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              5,
              "div",
              [["class", "distance-and-arrow-wrapper"]],
              [[2, "distance-and-delay__distance--hidden", null]],
              null,
              null,
              null,
              null,
            )),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, lt)),
            l.xb(
              3,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            l.yb(
              4,
              0,
              null,
              null,
              2,
              "au3-formatted-unit-renderer",
              [
                ["class", "distance-and-delay__distance"],
                ["id", "TrafficDetailsDistance"],
              ],
              [[2, "invisible", null]],
              null,
              null,
              y.b,
              y.a,
            )),
            l.xb(
              5,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              6,
              180224,
              null,
              0,
              P.b,
              [s.a, O.a, l.h],
              {
                smallerFontForUnit: [0, "smallerFontForUnit"],
                horizontalAlignment: [1, "horizontalAlignment"],
                hasPrefix: [2, "hasPrefix"],
                prefixContext: [3, "prefixContext"],
                rawValue: [4, "rawValue"],
                rawValueUnit: [5, "rawValueUnit"],
                rawValueFormattingRule: [6, "rawValueFormattingRule"],
              },
              null,
            ),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, it)),
            l.xb(
              8,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, !e.isCurrentTrafficItemOnRoute()),
              n(t, 5, 0, "TrafficDetailsDistance"),
              n(
                t,
                6,
                0,
                !1,
                e.Alignment.LEFT,
                e.isCurrentTrafficItemOnRoute(),
                e.prefixContextEnum.Distance,
                null == t.parent.parent.parent.context.mib3Let
                  ? null
                  : t.parent.parent.parent.context.mib3Let.distance,
                e.distanceUnit,
                e.DistanceFormattingRules,
              ),
              n(
                t,
                8,
                0,
                (null == t.parent.parent.parent.context.mib3Let
                  ? null
                  : t.parent.parent.parent.context.mib3Let.delay) &&
                  (null == t.parent.parent.parent.context.mib3Let
                    ? null
                    : t.parent.parent.parent.context.mib3Let.delay) >
                    e.displayTrafficDelayThreshold,
              ));
          },
          function (n, t) {
            (n(
              t,
              1,
              0,
              !(
                null != t.parent.parent.parent.context.mib3Let &&
                t.parent.parent.parent.context.mib3Let.distance
              ),
            ),
              n(t, 4, 0, l.Nb(t, 6).isInvisible));
          },
        );
      }
      function rt(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-traffic-lane-restriction",
              [["class", "lane-restrictions"]],
              [[2, "invisible", null]],
              null,
              null,
              V.b,
              V.a,
            )),
            l.xb(
              1,
              49152,
              null,
              0,
              H.a,
              [r.a, o.a],
              { laneRestrictions: [0, "laneRestrictions"] },
              null,
            ),
          ],
          function (n, t) {
            n(
              t,
              1,
              0,
              null == t.parent.parent.parent.context.mib3Let ||
                null ==
                  t.parent.parent.parent.context.mib3Let
                    .trafficMessageAttributes
                ? null
                : t.parent.parent.parent.context.mib3Let
                    .trafficMessageAttributes.laneRestrictions,
            );
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 1).hasNoIconsToShow);
          },
        );
      }
      function ot(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              14,
              "div",
              [["class", "main-content__first-line"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              3,
              "div",
              [["class", "first-line__road-icon-area"]],
              [[2, "first-line__road-icon-area--hidden", null]],
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              2,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "first-line__road-icon"],
                ["id", "FirstLineRoadIcon"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              h.b,
              h.a,
            )),
            l.xb(
              3,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              4,
              4243456,
              null,
              0,
              x.b,
              [o.a, l.z],
              {
                fileName: [0, "fileName"],
                blocksRouting: [1, "blocksRouting"],
                queryIconWidth: [2, "queryIconWidth"],
                queryIconHeight: [3, "queryIconHeight"],
              },
              null,
            ),
            (n()(),
            l.yb(5, 0, null, null, 9, "div", [], null, null, null, null, null)),
            l.xb(
              6,
              16384,
              null,
              0,
              C.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, Hn)),
            l.xb(
              8,
              278528,
              null,
              0,
              C.p,
              [l.P, l.L, C.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, Wn)),
            l.xb(
              10,
              278528,
              null,
              0,
              C.p,
              [l.P, l.L, C.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, zn)),
            l.xb(
              12,
              278528,
              null,
              0,
              C.p,
              [l.P, l.L, C.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, Xn)),
            l.xb(
              14,
              278528,
              null,
              0,
              C.p,
              [l.P, l.L, C.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, Zn)),
            l.xb(
              16,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(),
            l.hb(
              0,
              [
                [1, 2],
                ["secondLineChina", 2],
              ],
              null,
              0,
              null,
              Kn,
            )),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, qn)),
            l.xb(
              19,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(),
            l.hb(
              0,
              [
                [1, 2],
                ["thirdLineChina", 2],
              ],
              null,
              0,
              null,
              Qn,
            )),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, Jn)),
            l.xb(
              22,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            l.yb(
              23,
              0,
              null,
              null,
              5,
              "div",
              [["class", "main-content__event-items"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, nt)),
            l.xb(
              25,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            l.yb(
              26,
              0,
              null,
              null,
              2,
              "div",
              [["class", "event-items__event-text-wrapper"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, et)),
            l.xb(
              28,
              16384,
              null,
              0,
              $.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, at)),
            l.xb(
              30,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, [[1, 2]], null, 1, null, rt)),
            l.xb(
              32,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(0, null, null, 0)),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, "FirstLineRoadIcon"),
              n(
                t,
                4,
                0,
                null == t.parent.parent.context.mib3Let ||
                  null ==
                    t.parent.parent.context.mib3Let.trafficMessageAttributes
                  ? null
                  : t.parent.parent.context.mib3Let.trafficMessageAttributes
                      .roadIcon,
                !1,
                e.systemConfigService.isNorthAmericaRegion()
                  ? e.ROADICONNAR.width
                  : e.ROADICON.width,
                e.systemConfigService.isNorthAmericaRegion()
                  ? e.ROADICONNAR.height
                  : e.ROADICON.height,
              ),
              n(t, 6, 0, e.trafficMessageType),
              n(t, 8, 0, e.TrafficMessageTypes.Ramp),
              n(t, 10, 0, e.TrafficMessageTypes.VicsArea),
              n(t, 12, 0, e.TrafficMessageTypes.UnnamedRoad),
              n(t, 14, 0, e.TrafficMessageTypes.Default),
              n(t, 16, 0, !t.parent.context.mib3Let, l.Nb(t, 17)),
              n(t, 19, 0, !t.parent.context.mib3Let, l.Nb(t, 20)),
              n(
                t,
                22,
                0,
                null == t.parent.parent.context.mib3Let
                  ? null
                  : t.parent.parent.context.mib3Let.isAreaEmergency,
              ),
              n(
                t,
                25,
                0,
                e.firstEventIcon &&
                  !(
                    null != t.parent.parent.context.mib3Let &&
                    t.parent.parent.context.mib3Let.isAreaEmergency
                  ),
              ),
              n(
                t,
                28,
                0,
                null == t.parent.parent.context.mib3Let ||
                  null ==
                    t.parent.parent.context.mib3Let.trafficMessageAttributes
                  ? null
                  : t.parent.parent.context.mib3Let.trafficMessageAttributes
                      .detailedEventDescription,
              ),
              n(
                t,
                30,
                0,
                !(
                  null != t.parent.parent.context.mib3Let &&
                  t.parent.parent.context.mib3Let.isAreaEmergency
                ),
              ),
              n(
                t,
                32,
                0,
                !e.systemConfigService.isAsiaRegion() &&
                  (null == t.parent.parent.context.mib3Let ||
                  null ==
                    t.parent.parent.context.mib3Let.trafficMessageAttributes
                    ? null
                    : t.parent.parent.context.mib3Let.trafficMessageAttributes
                        .laneRestrictions),
              ));
          },
          function (n, t) {
            (n(
              t,
              1,
              0,
              !(
                null != t.parent.parent.context.mib3Let &&
                null !=
                  t.parent.parent.context.mib3Let.trafficMessageAttributes &&
                t.parent.parent.context.mib3Let.trafficMessageAttributes
                  .roadIcon
              ) ||
                (null == t.parent.parent.context.mib3Let ||
                null == t.parent.parent.context.mib3Let.trafficMessageAttributes
                  ? null
                  : t.parent.parent.context.mib3Let.trafficMessageAttributes
                      .isRamp),
            ),
              n(t, 2, 0, l.Nb(t, 4).iconComponentHidden));
          },
        );
      }
      function ct(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              8,
              "au3-list",
              [
                ["class", "traffic-details__main-content"],
                ["id", ""],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              W.b,
              W.a,
            )),
            l.Sb(6144, null, U.a, null, [z.a]),
            l.xb(
              2,
              212992,
              null,
              0,
              a.a,
              [l.l, l.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(3, 16384, null, 0, j.a, [l.l], null, null),
            l.xb(
              4,
              12828672,
              null,
              1,
              z.a,
              [
                [2, B.a],
                [2, Y.a],
                [8, null],
                [2, a.a],
                [2, X.a],
                [2, Z.a],
                [2, K.b],
                q.i,
                l.z,
                l.h,
                o.a,
                Q.a,
                G.a,
                [2, J.a],
                nn.a,
                [2, q.a],
              ],
              { showSeparators: [0, "showSeparators"] },
              null,
            ),
            l.Tb(603979776, 1, { template: 0 }),
            (n()(), l.hb(16777216, [[1, 2]], 0, 1, null, Tn)),
            l.xb(
              7,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(),
            l.hb(
              0,
              [
                [1, 2],
                ["trafficDetails", 2],
              ],
              0,
              0,
              null,
              ot,
            )),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 2, 0, ""),
              n(t, 4, 0, !1),
              n(
                t,
                7,
                0,
                e.trafficMessageType ===
                  e.TrafficMessageTypes.NumberPlateRestriction,
                l.Nb(t, 8),
              ));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 4).showLineNumbers);
          },
        );
      }
      function ut(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-shared-texture",
              [
                ["au3ImageLockingCategory", ""],
                ["class", "traffic-details__map"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "lock-state-hidden", null],
                [2, "lock-state-faded", null],
              ],
              [[null, "mib3Tap"]],
              function (n, t, e) {
                var l = !0;
                return (
                  "mib3Tap" === t &&
                    (l = !1 !== n.component.previewMapClicked.emit() && l),
                  l
                );
              },
              tn.b,
              tn.a,
            )),
            l.xb(1, 147456, null, 0, en.a, [l.l, l.z], null, null),
            l.xb(
              2,
              147456,
              null,
              0,
              ln.a,
              [en.a, [2, nn.a], [2, a.a], o.a],
              null,
              null,
            ),
            l.xb(
              3,
              147456,
              null,
              0,
              an.a,
              [rn.a, l.h, o.a, [3, an.a]],
              null,
              null,
            ),
            l.xb(
              4,
              212992,
              null,
              0,
              on.a,
              [
                o.a,
                K.b,
                ln.a,
                [2, nn.a],
                [2, a.a],
                [2, an.a],
                [2, cn.a],
                [2, un.a],
                l.z,
                sn.a,
                l.l,
                [2, fn.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, bn.a, bn.a, [[3, bn.a]]),
            l.xb(
              6,
              4407296,
              null,
              0,
              pn.a,
              [
                l.l,
                J.a,
                l.h,
                bn.a,
                [2, dn.a],
                [2, nn.b],
                [2, nn.a],
                [2, mn.a],
                [2, gn.a],
              ],
              { disabled: [0, "disabled"] },
              null,
            ),
            l.xb(
              7,
              114688,
              null,
              0,
              _n.a,
              [hn.a, un.a, o.a],
              {
                framerate: [0, "framerate"],
                displayableName: [1, "displayableName"],
                textureOffset: [2, "textureOffset"],
              },
              null,
            ),
            l.xb(
              8,
              671744,
              null,
              0,
              xn.a,
              [an.a, q.i, [2, q.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            l.xb(9, 212992, null, 0, Cn.a, [q.i, [2, q.a], l.h], null, null),
            l.xb(
              10,
              147456,
              null,
              0,
              yn.a,
              [
                [2, on.a],
                [2, an.a],
                [2, Pn.a],
                [2, pn.a],
                [2, On.b],
                l.l,
                Mn.a,
                In.b,
              ],
              null,
              null,
            ),
            l.xb(
              11,
              147456,
              null,
              0,
              Ln.a,
              [[2, pn.a], [2, on.a], [2, K.b], vn.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 4, 0),
              n(t, 6, 0, e.disablePreviewMapHaptic),
              n(t, 7, 0, 15, e.displayableName, e.mapTextureOffset),
              n(t, 8, 0, e.blockingMap),
              n(t, 9, 0));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 3).combinedDisabled,
              l.Nb(t, 3).useBrighterIcon,
              l.Nb(t, 6).markerClassEnabled,
              l.Nb(t, 9).hide,
              l.Nb(t, 9).fade,
            );
          },
        );
      }
      function st(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              5,
              "div",
              [
                ["class", "traffic-details"],
                ["noneFocusContainer", ""],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), l.hb(16777216, null, null, 2, null, ct)),
            l.xb(
              2,
              16384,
              null,
              0,
              $.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, C.b, [l.h]),
            (n()(), l.hb(16777216, null, null, 1, null, ut)),
            l.xb(
              5,
              16384,
              null,
              0,
              C.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(
              t,
              2,
              0,
              l.Yb(t, 2, 0, l.Nb(t, 3).transform(e.useAlternativeFormatting$)),
            ),
              n(t, 5, 0, e.showPreviewMap));
          },
          null,
        );
      }
      function ft(n) {
        return l.ac(
          0,
          [
            (n()(), l.hb(16777216, null, null, 2, null, st)),
            l.xb(
              1,
              16384,
              null,
              0,
              $.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, C.b, [l.h]),
          ],
          function (n, t) {
            var e = t.component;
            n(
              t,
              1,
              0,
              l.Yb(t, 1, 0, l.Nb(t, 2).transform(e.currentTrafficItem$)),
            );
          },
          null,
        );
      }
    },
    SkTl: function (n, t, e) {
      "use strict";
      (e.d(t, "a", function () {
        return c;
      }),
        e.d(t, "b", function () {
          return s;
        }));
      var l = e("kZht"),
        i = e("HVUF"),
        a = e("An66"),
        r = e("B3Zb"),
        o = e("yNay"),
        c =
          (e("iPhK"),
          e("bou3"),
          l.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;justify-content:flex-end}.invisible[_nghost-%COMP%]{display:none}[_nghost-%COMP%]   .component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{justify-content:flex-start}[_nghost-%COMP%]   .component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{justify-content:flex-end}.item[_ngcontent-%COMP%]{border-left:1px dashed #fff}.item--left[_ngcontent-%COMP%]{border-left:4px solid #fff}.item--right[_ngcontent-%COMP%]{border-right:4px solid #fff}",
              ],
            ],
            data: {},
          }));
      function u(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-icon",
              [["class", "item"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              i.b,
              i.a,
            )),
            l.xb(
              1,
              278528,
              null,
              0,
              a.i,
              [l.s, l.t, l.l, l.D],
              { klass: [0, "klass"], ngClass: [1, "ngClass"] },
              null,
            ),
            l.Qb(2, { "item--left": 0, "item--right": 1 }),
            l.xb(
              3,
              4243456,
              null,
              0,
              r.b,
              [o.a, l.z],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                blocksRouting: [2, "blocksRouting"],
              },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component,
              l = n(t, 2, 0, t.context.first, t.context.last);
            (n(t, 1, 0, "item", l),
              n(t, 3, 0, t.context.$implicit, e.iconCategoryList, !1));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 3).iconComponentHidden);
          },
        );
      }
      function s(n) {
        return l.ac(
          2,
          [
            (n()(), l.hb(16777216, null, null, 1, null, u)),
            l.xb(
              1,
              278528,
              null,
              0,
              a.j,
              [l.P, l.L, l.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
          ],
          function (n, t) {
            n(t, 1, 0, t.component.iconsToShow);
          },
          null,
        );
      }
    },
    iPhK: function (n, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return a;
      });
      var l = e("Yi6/"),
        i = e("uWIZ");
      class a {
        constructor(n, t) {
          ((this.configService = n),
            (this.iconCategoryList = l.Z.List),
            (this.openStraightLaneIcon =
              "E3BC_turn_lane_straight_not_restricted.webp"),
            (this.closeStraightLaneIcon =
              "E3BB_turn_lane_straight_restricted.webp"),
            (this.pointsIcon = "E9BF_options_more.webp"),
            (this.maxIconsToShow = 6),
            (this.prepareICons = this.maxIconsToShow - 1),
            (this.iconsToShow = []),
            (this.logger = t.getLogger(
              "navi.TrafficLaneRestrictionComponent",
            )));
        }
        set laneRestrictions(n) {
          (this.logger.info("laneRestrictions:", n),
            (this.iconsToShow = n ? this.prepareSubArrayToShow(n) : []));
        }
        get hasNoIconsToShow() {
          return 0 === this.iconsToShow.length;
        }
        prepareSubArrayToShow(n) {
          const t = n.slice(0, this.prepareICons),
            e = n.slice(-this.prepareICons),
            l = t.filter((n) => n === i.e.CLOSED).length,
            a = e.filter((n) => n === i.e.CLOSED).length;
          return this.isAllOpen(n)
            ? []
            : n.length <= this.maxIconsToShow
              ? this.transformLaneRestrictionsToIconsToShow(n)
              : l > a
                ? [
                    ...this.transformLaneRestrictionsToIconsToShow(t),
                    this.pointsIcon,
                  ]
                : l < a || this.configService.isLeftHandDrive()
                  ? [
                      this.pointsIcon,
                      ...this.transformLaneRestrictionsToIconsToShow(e),
                    ]
                  : [
                      ...this.transformLaneRestrictionsToIconsToShow(t),
                      this.pointsIcon,
                    ];
        }
        isAllOpen(n) {
          const t = [...new Set(n)];
          return 1 === t.length && t[0] === i.e.OPEN;
        }
        transformLaneRestrictionsToIconsToShow(n) {
          return n.map((n) =>
            n === i.e.CLOSED
              ? this.closeStraightLaneIcon
              : this.openStraightLaneIcon,
          );
        }
      }
    },
    rFja: function (n, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return O;
      });
      var l = e("kZht"),
        i = e("C05f"),
        a = e("ZTXN"),
        r = e("QQZH"),
        o = e("TLy2"),
        c = e("kuMc"),
        u = e("YtkY"),
        s = e("jIqt"),
        f = e("xVbo"),
        b = e("Ohay"),
        p = e("Yi6/"),
        d = e("1Eyf"),
        m = e("1+5f"),
        g = e("eoEw"),
        _ = e("vYwo"),
        h = e("kGpN"),
        x = e("Vna1"),
        C = (e("tYr6"), e("dxLW"), e("9ZNO")),
        y = e("CRZS"),
        P = e("XKT5");
      e("AEBN");
      let O = (() => {
        class n {
          constructor(t, e, f, b, d, O, M, I) {
            ((this.renderersService = t),
              (this.elementsService = e),
              (this.displayService = f),
              (this.lockingService = b),
              (this.trafficService = d),
              (this.systemConfigService = O),
              (this.languageService = M),
              (this.previewMapClicked = new l.n()),
              (this.currentTrafficItem$$ = new i.a(void 0)),
              (this.currentTrafficItem$ =
                this.currentTrafficItem$$.asObservable()),
              (this.newTrafficItemKeyReceived$$ = new a.a()),
              (this._showPreviewMap = !1),
              (this.TrafficMessageTypes = P.b),
              (this.directionType = m.m.AIR),
              (this.DirectionArrow = C.a),
              (this.DELAY_ICON = "E175_map_delay.webp"),
              (this.iconCategoryList = p.Z.List),
              (this.smallIconsScaleMode = p.ab.None),
              (this.Alignment = g.a),
              (this.timeFormattingRule = h.a.DelayOnRoute),
              (this.distanceUnit = p.vc.METERS),
              (this.timeUnit = p.vc.MILLISECONDS),
              (this.DistanceFormattingRules = h.a.DistanceToDestination),
              (this.prefixContextEnum = g.c),
              (this.ROADICON = _.c),
              (this.ROADICONNAR = _.d),
              (this.INLINEROADICON = _.b),
              (this.displayTrafficDelayThreshold = y.a),
              (this.disablePreviewMapHaptic = !1),
              (this.displayableName = p.J.MAP),
              (this.blockingMap = {
                lockingKey: {
                  type: p.Eb.IMAGE,
                  category: p.wb.DECORATIVE,
                  action: p.ub.FADE_IMAGE,
                },
              }),
              (this.destroy$$ = new r.a(1)),
              (this.logger = I.getLogger("navi.TrafficDetailsViewComponent")),
              (this.mapTextureOffset = {
                left: (this.displayService.displayWidth - x.f - x.q) / 2,
                top: (this.displayService.displayHeight - x.h - x.p) / 2,
              }),
              b
                .getProperty(n.hideImageKey)
                .pipe(
                  Object(o.a)((n) => n.lock$),
                  Object(c.a)(this.destroy$$),
                )
                .subscribe((n) => (this.disablePreviewMapHaptic = n)),
              (this.useAlternativeFormatting$ =
                this.languageService.currentLanguage$.pipe(
                  Object(u.a)((n) =>
                    [p.kb.Cantonese, p.kb.Chinese, p.kb.Korean].includes(n),
                  ),
                  Object(s.a)(!1),
                  Object(c.a)(this.destroy$$),
                )));
          }
          set currentTrafficItem(n) {
            (this.logger.info(
              `setCurrentTrafficItem: received new traffic item with ID ${n ? n.id : void 0} -> newTrafficItemReceived$$.next -> cancel mapFocusHandling`,
            ),
              this.currentTrafficItem$$.next(n),
              n &&
                n.trafficMessageAttributes &&
                n.trafficMessageAttributes.shortenedEventDescription &&
                (this.firstEventIcon = n.trafficMessageAttributes
                  .shortenedEventDescription.icon
                  ? n.trafficMessageAttributes.shortenedEventDescription.icon
                  : ""),
              Object(p.wd)(n) &&
                ((this.trafficMessageType = P.a.getTrafficMessageType(n, !1)),
                (this.laneInfoIcon = P.a.chooseIcon(n, this.logger))));
          }
          get showPreviewMap() {
            return this._showPreviewMap;
          }
          set showPreviewMap(n) {
            this._showPreviewMap = !!this.displayService.isHighResolution && n;
          }
          ngOnInit() {
            if (this.showPreviewMap) {
              const n = JSON.parse(JSON.stringify(x.t));
              ((n.coordX = n.coordX
                ? n.coordX + this.mapTextureOffset.left
                : this.mapTextureOffset.left),
                (n.coordY = n.coordY
                  ? n.coordY + this.mapTextureOffset.top
                  : this.mapTextureOffset.top),
                this.logger.info("ngOnInit: activate map instance"),
                this.renderersService
                  .activateMapInstance(d.f.PREVIEW)
                  .then(() => {
                    (this.logger.info("ngOnInit: preview map activated"),
                      Promise.all([
                        this.renderersService.setVisibility(!0),
                        this.renderersService.setZoomArea(n),
                        this.renderersService.setCopyrightTextAndIcon(
                          d.d.TOPCENTER,
                          {
                            coordX: this.mapTextureOffset.left + x.a.coordX,
                            coordY: this.mapTextureOffset.top + x.a.coordY,
                            diffX: x.a.diffX,
                            diffY: x.a.diffY,
                          },
                          {
                            coordX: this.mapTextureOffset.left + x.k.coordX,
                            coordY: this.mapTextureOffset.top + x.k.coordY,
                          },
                        ),
                      ]).then(() => {
                        (this.logger.info(
                          "ngOnInit: Promise.all -> onFulfilled...",
                        ),
                          this.currentTrafficItem$$
                            .pipe(
                              Object(f.a)(p.wd),
                              Object(u.a)((n) =>
                                n.isNumberPlateRestriction &&
                                n.numberPlateRestrictionAttributes
                                  ? (this.logger.info(
                                      "ngOnInit: trafficMessage is NPR",
                                    ),
                                    n.numberPlateRestrictionAttributes.key)
                                  : n.trafficMessageAttributes
                                    ? (this.logger.info(
                                        "ngOnInit: trafficMessage received!",
                                      ),
                                      n.trafficMessageAttributes.key)
                                    : void this.logger.warn(
                                        `ngOnInit: currentTrafficMessage is ${n.trafficMessageAttributes} and currentNPRMessage is ${n.numberPlateRestrictionAttributes}!`,
                                      ),
                              ),
                              Object(b.a)(),
                              Object(c.a)(this.destroy$$),
                            )
                            .subscribe((n) => {
                              (this.logger.info("ngOnInit: new key received!"),
                                this.newTrafficItemKeyReceived$$.next(),
                                n
                                  ? this.createTrafficElement(n)
                                  : this.logger.warn(
                                      `ngOnInit: currentTrafficID is ${n}!`,
                                    ));
                            }));
                      }));
                  })
                  .catch((n) => {
                    this.logger.warn(
                      "ngOnInit: error activating preview map",
                      n,
                    );
                  }));
            }
          }
          createTrafficElement(n) {
            (this.logger.info(
              "createTrafficElement: try to create TrafficElement for",
              n,
            ),
              this.elementsService
                .createTrafficElement(n)
                .pipe(
                  Object(c.a)(this.destroy$$),
                  Object(c.a)(this.newTrafficItemKeyReceived$$),
                )
                .subscribe(
                  (n) => {
                    (this.logger.info(
                      "createTrafficElement: TrafficElement created with Uri:",
                      n,
                    ),
                      this.renderersService
                        .updateElements({
                          focused: [n],
                          visible: [n],
                          marked: [n],
                        })
                        .then(() => {
                          this.logger.info(
                            "createTrafficElement: MapElement focused:",
                            n,
                          );
                        })
                        .catch((n) =>
                          this.logger.warn(
                            "createTrafficElement: Error focusing TrafficElement in preview map",
                            n,
                          ),
                        ));
                  },
                  (t) => {
                    this.logger.error(
                      `createTrafficElement: Error retrieving TrafficElementUri for ${n}`,
                      t,
                    );
                  },
                ));
          }
          addCommaForEventText(n) {
            return n ? "," : "";
          }
          isCurrentTrafficItemOnRoute() {
            return P.a.isTrafficElementOnRoute(
              this.currentTrafficItem$$.getValue(),
            );
          }
          ngOnDestroy() {
            (this.showPreviewMap &&
              this.renderersService.activeMapInstance === d.f.PREVIEW &&
              (this.renderersService.setVisibility(!1),
              this.elementsService.flushElements()),
              this.destroy$$.next());
          }
        }
        return (
          (n.hideImageKey = {
            type: p.Eb.IMAGE,
            category: p.wb.DECORATIVE,
            action: p.ub.HIDE_IMAGE,
          }),
          n
        );
      })();
    },
  },
]);
