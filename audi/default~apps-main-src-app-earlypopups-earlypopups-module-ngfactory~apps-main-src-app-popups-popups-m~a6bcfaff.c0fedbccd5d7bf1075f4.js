(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    "0Z+c": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      var i = n("1+5f"),
        o = n("Yi6/");
      let a = (() => {
        class t {
          constructor() {
            this.iconCategory = o.Z.List;
          }
          set displayableArrow(e) {
            this.arrowFilename = t.getArrowFileName(e);
          }
          static getArrowFileName(e) {
            return e
              ? t.getDistanceTypePrefixForFileName(e.distanceType) +
                  t.getDirectionSuffixForFileName(e.rotationAngle) +
                  ".webp"
              : "";
          }
        }
        return (
          (t.getDirectionSuffixForFileName = function (t) {
            return isNaN(t)
              ? "0x00"
              : "0x0" +
                  ((2 * Math.round(t / 45)) % 16).toString(16).toUpperCase();
          }),
          (t.getDistanceTypePrefixForFileName = function (t) {
            return t === i.m.ROAD
              ? "E930_navigation_arrow_rrd_"
              : "E931_navigation_arrow_luftlinie_";
          }),
          t
        );
      })();
    },
    "3EdB": function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return p;
      }),
        n.d(e, "b", function () {
          return O;
        }));
      var i = n("kZht"),
        o = n("8TlW"),
        a = n("fu7d"),
        l = n("bou3"),
        r = n("yNay"),
        s = n("ijxY"),
        c = n("Xo58"),
        u = n("m3Ja"),
        h = n("r+e+"),
        g = n("bmFL"),
        d = n("An66"),
        b = n("0qMr"),
        p =
          (n("eoEw"),
          n("SOvQ"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;white-space:nowrap}.invisible[_nghost-%COMP%]{display:none}.content[_ngcontent-%COMP%]{width:100%;display:flex;align-items:flex-end}.content--align-center[_ngcontent-%COMP%]{justify-content:center}.content__item[_ngcontent-%COMP%]{height:1em}.value-and-unit-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:flex-end;direction:ltr}.unit-first[_ngcontent-%COMP%]{flex-direction:row-reverse}.content__item--smaller-font[_ngcontent-%COMP%]{font-size:75%}.content__item--prefix[_ngcontent-%COMP%]{min-width:auto;max-width:106px;flex-shrink:0;overflow:unset}.content__item--unit[_ngcontent-%COMP%]{min-width:auto;max-width:100px;flex-shrink:0;padding:0 0 0 7px;overflow:unset}.unit-first[_ngcontent-%COMP%]   .content__item--unit[_ngcontent-%COMP%]{padding:0 7px 0 0}.component-layout-latin[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .content[_ngcontent-%COMP%]{flex-direction:row}.component-layout-latin[_nghost-%COMP%]   .content--align-left[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .content--align-left[_ngcontent-%COMP%]{justify-content:flex-start}.component-layout-latin[_nghost-%COMP%]   .content--align-right[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .content--align-right[_ngcontent-%COMP%]{justify-content:flex-end}.component-layout-latin[_nghost-%COMP%]   .content__item--prefix-seperator[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .content__item--prefix-seperator[_ngcontent-%COMP%]{padding:0 7px 0 0}.component-layout-arabic[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .content[_ngcontent-%COMP%]{flex-direction:row-reverse}.component-layout-arabic[_nghost-%COMP%]   .content--align-left[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .content--align-left[_ngcontent-%COMP%]{justify-content:flex-end}.component-layout-arabic[_nghost-%COMP%]   .content--align-right[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .content--align-right[_ngcontent-%COMP%]{justify-content:flex-start}.component-layout-arabic[_nghost-%COMP%]   .content__item--prefix-seperator[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .content__item--prefix-seperator[_ngcontent-%COMP%]{padding:0 0 0 7px}",
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
              3,
              "au3-i18n-label",
              [
                ["class", "content__item content__item--prefix"],
                ["id", "prefix"],
                ["ttIgnore", ""],
              ],
              [
                [2, "content__item--prefix-seperator", null],
                [2, "content__item--smaller-font", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              o.b,
              o.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [i.l, i.D, l.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(2, 16384, null, 0, s.a, [], null, null),
            i.xb(
              3,
              245760,
              null,
              0,
              c.a,
              [[6, a.a], u.a, i.h, i.l, i.D, [2, h.a], [2, s.a], [2, g.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "prefix"), t(e, 3, 0, "prefix", n.prefixText));
          },
          function (t, e) {
            var n = e.component;
            t(
              e,
              0,
              0,
              n.separatePrefixAndValue,
              n.smallerFontForUnit,
              i.Nb(e, 3).backgroundColor,
              i.Nb(e, 3).fixedNumberOfLines,
              i.Nb(e, 3).mayContainLatinCharsForArabic,
              i.Nb(e, 3).shortenWithEllipsisForArabic,
            );
          },
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
              13,
              "div",
              [["class", "content"]],
              null,
              null,
              null,
              null,
              null,
            )),
            i.xb(
              1,
              278528,
              null,
              0,
              d.i,
              [i.s, i.t, i.l, i.D],
              { klass: [0, "klass"], ngClass: [1, "ngClass"] },
              null,
            ),
            i.Qb(2, {
              "content--align-left": 0,
              "content--align-center": 1,
              "content--align-right": 2,
            }),
            (t()(), i.hb(16777216, null, null, 1, null, f)),
            i.xb(
              4,
              16384,
              null,
              0,
              d.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(),
            i.yb(
              5,
              0,
              null,
              null,
              8,
              "div",
              [["class", "value-and-unit-container"]],
              [[2, "unit-first", null]],
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
              3,
              "au3-i18n-label",
              [
                ["class", "content__item content__item--value"],
                ["id", "spaceValue"],
                ["ttIgnore", ""],
              ],
              [
                [4, "max-width", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              o.b,
              o.a,
            )),
            i.xb(
              7,
              212992,
              null,
              0,
              a.a,
              [i.l, i.D, l.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(8, 16384, null, 0, s.a, [], null, null),
            i.xb(
              9,
              245760,
              null,
              0,
              c.a,
              [[6, a.a], u.a, i.h, i.l, i.D, [2, h.a], [2, s.a], [2, g.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            (t()(),
            i.yb(
              10,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "content__item content__item--unit"],
                ["id", "Unit"],
                ["ttIgnore", ""],
              ],
              [
                [2, "content__item--smaller-font", null],
                [4, "transform", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              o.b,
              o.a,
            )),
            i.xb(
              11,
              212992,
              null,
              0,
              a.a,
              [i.l, i.D, l.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(12, 16384, null, 0, s.a, [], null, null),
            i.xb(
              13,
              245760,
              null,
              0,
              c.a,
              [[6, a.a], u.a, i.h, i.l, i.D, [2, h.a], [2, s.a], [2, g.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component,
              i = t(
                e,
                2,
                0,
                n.horizontalAlignment === n.Alignment.LEFT,
                n.horizontalAlignment === n.Alignment.CENTER,
                n.horizontalAlignment === n.Alignment.RIGHT,
              );
            (t(e, 1, 0, "content", i),
              t(e, 4, 0, n.hasPrefix),
              t(e, 7, 0, "spaceValue"),
              t(
                e,
                9,
                0,
                "spaceValue",
                null == e.context.mib3Let ? null : e.context.mib3Let.value,
              ),
              t(e, 11, 0, "Unit"),
              t(
                e,
                13,
                0,
                "Unit",
                null == e.context.mib3Let ? null : e.context.mib3Let.unit,
              ));
          },
          function (t, e) {
            var n = e.component;
            (t(
              e,
              5,
              0,
              null == e.context.mib3Let ? null : e.context.mib3Let.isCurrency,
            ),
              t(
                e,
                6,
                0,
                n.maxWidthForValue,
                i.Nb(e, 9).backgroundColor,
                i.Nb(e, 9).fixedNumberOfLines,
                i.Nb(e, 9).mayContainLatinCharsForArabic,
                i.Nb(e, 9).shortenWithEllipsisForArabic,
              ),
              t(
                e,
                10,
                0,
                n.smallerFontForUnit,
                null == e.context.mib3Let
                  ? null
                  : e.context.mib3Let.positionFix,
                i.Nb(e, 13).backgroundColor,
                i.Nb(e, 13).fixedNumberOfLines,
                i.Nb(e, 13).mayContainLatinCharsForArabic,
                i.Nb(e, 13).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function O(t) {
        return i.ac(
          2,
          [
            (t()(), i.hb(16777216, null, null, 2, null, m)),
            i.xb(
              1,
              16384,
              null,
              0,
              b.a,
              [i.L, i.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            i.Pb(131072, d.b, [i.h]),
          ],
          function (t, e) {
            var n = e.component;
            t(
              e,
              1,
              0,
              i.Yb(e, 1, 0, i.Nb(e, 2).transform(n.formattedI18nUnit$)),
            );
          },
          null,
        );
      }
    },
    "7hGl": function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n("Yi6/"));
      var i = n("Ngpk"),
        o = n("aMy3");
      let a = (() => {
        class t {
          constructor(t) {
            this.logger = t.getLogger("media.MediaSourceTitlelineTextPipe");
          }
          transform(e, n) {
            if (!e)
              return (
                this.logger.warn("transform: Source is not defined"),
                null
              );
            const i = t.mediaSourceTexts.find((t) => t.sourceType === e.type);
            return i
              ? this.hasValidDeviceIndex(i, e)
                ? i.deviceNames[e.deviceIndex]
                : i.defaultName
              : (this.logger.warn(
                  `transform: Unknown sourceType '${e.type}' in entertainment source: ${e}`,
                ),
                null);
          }
          hasValidDeviceIndex(t, e) {
            return (
              !!t.deviceNames &&
              !(!e.deviceIndex && 0 !== e.deviceIndex) &&
              e.deviceIndex >= 0 &&
              e.deviceIndex < t.deviceNames.length
            );
          }
        }
        return (
          (t.mediaSourceTexts = [
            {
              sourceType: i.g.USB,
              defaultName: o.c.USB_DEFAULT,
              deviceNames: [o.c.USB_1, o.c.USB_2, o.c.USB_3, o.c.USB_4],
            },
            { sourceType: i.g.DVDDRIVE, defaultName: o.c.DVD },
            { sourceType: i.g.BLUETOOTH, defaultName: o.c.BLUETOOTH },
            { sourceType: i.g.ONLINEMEDIA, defaultName: o.c.ONLINEMEDIA },
            { sourceType: i.g.ALEXA, defaultName: o.c.ALEXA },
          ]),
          t
        );
      })();
    },
    EyLa: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return N;
      }),
        n.d(e, "b", function () {
          return R;
        }));
      var i = n("kZht"),
        o = n("bMuc"),
        a = n("ZIdM"),
        l = n("3bpu"),
        r = n("fu7d"),
        s = n("yNay"),
        c = n("6zvu"),
        u = n("VcEz"),
        h = n("OtM5"),
        g = n("y9xZ"),
        d = n("+sw+"),
        b = n("BMrr"),
        p = n("IEns"),
        f = n("Nd8J"),
        m = n("rZwJ"),
        O = n("z6QT"),
        v = n("flsk"),
        _ = n("FQEI"),
        C = n("O82V"),
        P = n("Eln4"),
        x = n("evAh"),
        M = n("CpzC"),
        y = n("0Bsn"),
        S = n("5GjX"),
        w = n("mYyF"),
        T = n("v98a"),
        D = n("aOG8"),
        A = n("Krzs"),
        L = n("An66"),
        N =
          (n("4nnk"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                "[_nghost-%COMP%]{position:relative;display:block;height:3px;background-color:#8a8989}.progressbar--infinite[_nghost-%COMP%]{overflow:hidden;background-color:var(--current-context-bg)}.touch-area[_ngcontent-%COMP%]{position:absolute;height:60px;width:100%;transform:translateY(-50%);z-index:1}.progress[_ngcontent-%COMP%]{position:relative;height:100%;background-image:linear-gradient(90deg,var(--current-context),var(--current-context))}.buffer[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;background-color:#fff;will-change:transform;transform-origin:0 0}.colored--buffer[_ngcontent-%COMP%]{background-color:var(--current-context)}.progress__handle[_ngcontent-%COMP%]{position:absolute;width:17px;height:17px;transform:translateY(calc(-50% + 1.5px)) translateX(50%);right:0;background-color:#000;border-radius:50%;border:2px solid #fff;pointer-events:none;z-index:2}.progress__handle--scaled[_ngcontent-%COMP%]{transform:translateY(calc(-50% + 1.5px)) translateX(50%) scale(1.5);transform-origin:center center}.progress--infinite[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,transparent 20%,var(--current-context) 50%,transparent 0);animation:knightrider 4s ease-in-out infinite}.sxm--rotate[_nghost-%COMP%]{transform:rotateY(180deg)}@keyframes knightrider{0%{opacity:1;transform:translate3d(var(--negative-half-progressbar-width),0,0) scaleX(1)}40%{opacity:1;transform:translate3d(var(--half-progressbar-width),0,0) scaleX(1)}49.9999%{opacity:0;transform:translate3d(var(--half-progressbar-width),0,0) scaleX(1)}50%{opacity:1;transform:translate3d(var(--half-progressbar-width),0,0) scaleX(-1)}90%{opacity:1;transform:translate3d(var(--negative-half-progressbar-width),0,0) scaleX(-1)}to{opacity:0;transform:translate3d(var(--negative-half-progressbar-width),0,0) scaleX(-1)}}",
              ],
            ],
            data: {},
          }));
      function E(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              [
                [2, 0],
                ["progressHandle", 1],
              ],
              null,
              0,
              "span",
              [["class", "progress__handle"]],
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
      function I(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              [
                [3, 0],
                ["buffer", 1],
              ],
              null,
              0,
              "div",
              [["class", "buffer"]],
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
      function R(t) {
        return i.ac(
          2,
          [
            i.Tb(402653184, 1, { progressElementRef: 0 }),
            i.Tb(671088640, 2, { progressHandleElementRef: 0 }),
            i.Tb(671088640, 3, { bufferElementRef: 0 }),
            (t()(),
            i.yb(
              3,
              0,
              null,
              null,
              8,
              "div",
              [["class", "touch-area"]],
              [[2, "mib3-haptic", null]],
              [
                [null, "mib3TapPointer"],
                [null, "mib3DragStart"],
                [null, "mib3Drag"],
                [null, "mib3DragEnd"],
              ],
              function (t, e, n) {
                var i = !0,
                  o = t.component;
                return (
                  "mib3TapPointer" === e && (i = !1 !== o.tap(n) && i),
                  "mib3DragStart" === e && (i = !1 !== o.dragStart(n) && i),
                  "mib3Drag" === e && (i = !1 !== o.drag(n) && i),
                  "mib3DragEnd" === e && (i = !1 !== o.dragEnd(n) && i),
                  i
                );
              },
              null,
              null,
            )),
            i.xb(4, 147456, null, 0, o.a, [i.l, i.z], null, null),
            i.xb(
              5,
              147456,
              null,
              0,
              a.a,
              [o.a, [2, l.a], [2, r.a], s.a],
              null,
              null,
            ),
            i.xb(
              6,
              212992,
              null,
              0,
              c.a,
              [
                s.a,
                u.b,
                a.a,
                [2, l.a],
                [2, r.a],
                [2, h.a],
                [2, g.a],
                [2, d.a],
                i.z,
                b.a,
                i.l,
                [2, p.a],
              ],
              null,
              { tapPointer: "mib3TapPointer" },
            ),
            i.xb(
              7,
              212992,
              null,
              0,
              f.b,
              [i.l, i.z, u.b, b.a, s.a, o.a, [2, h.a], [2, m.a], [2, r.a]],
              null,
              {
                mib3Drag: "mib3Drag",
                mib3DragStart: "mib3DragStart",
                mib3DragEnd: "mib3DragEnd",
              },
            ),
            i.Sb(131584, null, O.a, O.a, [[3, O.a]]),
            i.xb(
              9,
              4407296,
              null,
              0,
              v.a,
              [
                i.l,
                _.a,
                i.h,
                O.a,
                [2, C.a],
                [2, l.b],
                [2, l.a],
                [2, P.a],
                [2, x.a],
              ],
              { disabled: [0, "disabled"] },
              null,
            ),
            i.xb(
              10,
              147456,
              null,
              0,
              M.a,
              [[2, c.a], [2, h.a], [2, y.a], [2, v.a], [2, S.b], i.l, w.a, T.b],
              null,
              null,
            ),
            i.xb(
              11,
              147456,
              null,
              0,
              D.a,
              [[2, v.a], [2, c.a], [2, u.b], A.a],
              null,
              null,
            ),
            (t()(),
            i.yb(
              12,
              0,
              [
                [1, 0],
                ["progress", 1],
              ],
              null,
              2,
              "div",
              [["class", "progress"]],
              [[2, "progress--infinite", null]],
              null,
              null,
              null,
              null,
            )),
            (t()(), i.hb(16777216, null, null, 1, null, E)),
            i.xb(
              14,
              16384,
              null,
              0,
              L.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, I)),
            i.xb(
              16,
              16384,
              null,
              0,
              L.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 6, 0),
              t(e, 7, 0),
              t(e, 9, 0, !n.userInteraction || n.infinite),
              t(e, 14, 0, n.userInteraction && !n.infinite),
              t(e, 16, 0, n.useBuffer));
          },
          function (t, e) {
            var n = e.component;
            (t(e, 3, 0, i.Nb(e, 9).markerClassEnabled),
              t(e, 12, 0, n.infinite && !n.resetInfiniteAnimation));
          },
        );
      }
    },
    JcTI: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return k;
      }),
        n.d(e, "b", function () {
          return j;
        }));
      var i = n("Yi6/"),
        o = n("P1io"),
        a = n("qMQG"),
        l = n("o1hM"),
        r = n("t8AR"),
        s = n("J+dc"),
        c = n("YtkY"),
        u = n("Ohay"),
        h = n("kuMc"),
        g = n("0Woy"),
        d = n("xVbo"),
        b = n("8j5Y"),
        p = n("TLy2"),
        f = n("jIqt"),
        m = n("mWib"),
        O = n("w0kG"),
        v = n("QQZH"),
        _ = n("C05f"),
        C = n("HM3f"),
        P = n("q5gU"),
        x = n("kNkr"),
        M = n("H+9d"),
        y = n("Q/h1"),
        S = n("8lto"),
        w = n("Y0IF"),
        T = n("Ngpk"),
        D = n("zixb"),
        A = n("z+Ui"),
        L = n("R0ft"),
        N = n("kZht"),
        E = n("FfND"),
        I = n("yNay"),
        R = n("1VvW");
      const k = {
        Init: { path: "init", skipHistory: !0 },
        VideoStream: { path: "video-stream", mainScreen: !0 },
        Information: { path: "information" },
        CheckDevice: { path: "check-device", skipHistory: !0 },
        ConnectedDevices: P.a,
      };
      let j = (() => {
        class t extends i.i {
          constructor(t, e, n, l, r, s, c, u, h) {
            (super(
              h,
              u.getLogger("asi.AsiRoutingService"),
              o.a,
              k,
              a.a.SMARTPHONEINTEGRATION,
              i.Bb.MISC,
            ),
              (this.asiService = t),
              (this.globalRouter = e),
              (this.entrypointService = n),
              (this.onlineRoutingService = l),
              (this.entertainmentService = r),
              (this.wifiService = s),
              (this.asterixSyncService = c),
              (this.activeAppContext$$ = new v.a(1)),
              (this.contextChangeDetectionRunning$$ = new _.a(!1)),
              this.subscribeToSmartphoneState(),
              this.subscribeToHandleScreenOwnerOfDevice(),
              this.subscribeToHandleScreenLastMode(),
              this.subscribeToDeviceDisconnection(),
              this.subscribeToFailedPairing(),
              this.globalRouter.activeAppContext$.subscribe(
                this.activeAppContext$$,
              ),
              this.contextChangeDetectionRunning$$.subscribe((t) =>
                this.logger.info("contextChangeDetectionRunning$$", t),
              ));
          }
          enterShop() {
            return this.entrypointService
              .entryPointsForTag$(M.b.SHOP)
              .pipe(Object(s.a)(1))
              .toPromise()
              .then((t) =>
                t.length < 1
                  ? this.onlineRoutingService.goTo(y.a.BoughtFunctions)
                  : this.onlineRoutingService.goToIncludeStateWebApp(
                      o.a,
                      t[0].id,
                    ),
              );
          }
          isRedirectionSuitable() {
            return !1;
          }
          subscribeToSmartphoneState() {
            Object(C.b)(
              this.asiService.currentActiveDevice$.pipe(
                Object(c.a)((t) => !!t),
                Object(u.a)(),
              ),
              this.asiService.shouldShowCheckDeviceScreen$,
              this.asiService.initialized$,
              this.asiService.licenceStates$,
            )
              .pipe(Object(h.a)(this.destroy$$))
              .subscribe(([t, e, n, i]) => {
                this.logger.info(
                  `subscribeToSmartphoneState: trigger routing within ASI context for deviceActive ${t}, shouldShowCheckDevice ${e}`,
                );
                const o = i.some(
                  (t) =>
                    !!t &&
                    !0 === t.swap &&
                    !!t.connectionType &&
                    t.connectionType.length > 0,
                );
                this.tryGoTo(
                  n && o
                    ? t
                      ? e
                        ? k.CheckDevice
                        : k.VideoStream
                      : k.Information
                    : k.Init,
                );
              });
          }
          subscribeToDeviceDisconnection() {
            this.asiService.currentActiveDevice$
              .pipe(
                Object(u.a)(),
                Object(g.a)(),
                Object(d.a)(() => this.isContextActive),
                Object(d.a)(([t, e]) => Object(i.wd)(t) && !Object(i.wd)(e)),
                Object(d.a)(([t]) => t.activeTechnology === l.a.CarPlay),
                Object(b.a)(() =>
                  this.contextChangeDetectionRunning$$.next(!0),
                ),
                Object(p.a)(() =>
                  this.asterixSyncService.asterixIsFunctional$.pipe(
                    Object(f.a)(!1),
                  ),
                ),
                Object(c.a)(
                  (t) => (
                    this.logger.info(
                      `subscribeToDeviceDisconnection: asterixFunctional ${t}`,
                    ),
                    t
                      ? this.globalRouter.goTo(k.Information)
                      : this.globalRouter.enterAppContext(o.r)
                  ),
                ),
                Object(p.a)(() =>
                  this.activeAppContext$$.pipe(
                    Object(d.a)((t) => t !== o.r && t !== o.a),
                    Object(s.a)(1),
                    Object(h.a)(
                      this.asiService.currentActiveDevice$.pipe(
                        Object(d.a)(i.wd),
                      ),
                    ),
                    Object(b.a)(
                      () => this.contextChangeDetectionRunning$$.next(!1),
                      () => this.contextChangeDetectionRunning$$.next(!1),
                      () => this.contextChangeDetectionRunning$$.next(!1),
                    ),
                  ),
                ),
              )
              .subscribe(() => this.asiService.setScreenLastModeTo(!1));
          }
          subscribeToHandleScreenOwnerOfDevice() {
            (this.globalRouter.activeAppContext$
              .pipe(
                Object(f.a)(null),
                Object(g.a)(),
                Object(d.a)(([t, e]) => t === o.a && e !== o.a),
                Object(p.a)(() =>
                  this.asiService.changeOwnerOfScreen(l.k.Mainunit),
                ),
                Object(h.a)(this.destroy$$),
              )
              .subscribe(),
              Object(C.b)(
                this.asiService.isDeviceOwnerOfScreen$,
                this.asiService.shouldShowCheckDeviceScreen$,
              )
                .pipe(
                  Object(d.a)(([t, e]) => !this.isContextActive && (t || e)),
                  Object(h.a)(this.destroy$$),
                )
                .subscribe(() => {
                  (this.logger.info(
                    "subscribeToHandleScreenOwnerOfDevice: is not in asi context, screen owner changed to DEVICE or notification owner changed to MAINUNIT, route to asi context",
                  ),
                    this.globalRouter.enterAppContext(o.a));
                }),
              this.asiService.isDeviceOwnerOfScreen$
                .pipe(
                  Object(d.a)((t) => this.isContextActive && t),
                  Object(h.a)(this.destroy$$),
                )
                .subscribe(() => {
                  (this.logger.info(
                    "subscribeToHandleScreenOwnerOfDevice: is in asi context, screen owner changed to DEVICE, app is already in asi context, route to video stream",
                  ),
                    this.tryGoTo(k.VideoStream));
                }),
              Object(C.b)(
                this.asiService.isDeviceOwnerOfScreen$,
                this.asiService.borrowReason$,
              )
                .pipe(
                  Object(m.a)(70),
                  Object(O.a)(this.currentRoute$),
                  Object(d.a)(
                    ([[,], t]) =>
                      t &&
                      (t.path === k.VideoStream.path ||
                        t.path === k.CheckDevice.path),
                  ),
                  Object(b.a)(([[t, e]]) =>
                    this.logger.info(
                      `subscribeToHandleScreenOwnerOfDevice: calculating routing action: isDeviceOwnerOfScreen: ${t}, borrowReason: ${e}`,
                    ),
                  ),
                  Object(c.a)(([[t, e]]) => !t && e === x.e.None),
                  Object(u.a)(),
                  Object(O.a)(
                    this.globalRouter.activeAppContext$.pipe(
                      Object(f.a)(null),
                      Object(g.a)(),
                    ),
                    this.entertainmentService.activeGroup$,
                    this.asterixSyncService.asterixIsFunctional$.pipe(
                      Object(f.a)(!1),
                    ),
                  ),
                  Object(d.a)(([t, [e, n], ,]) => t && e !== o.a && n === o.a),
                  Object(h.a)(this.destroy$$),
                )
                .subscribe(([, [t], e, n]) => {
                  t && this.shouldEnterPrevContext(t, e)
                    ? (this.logger.info(
                        "subscribeToHandleScreenOwnerOfDevice: screen owner changed to MAINUNIT, route back to last app context",
                        t,
                      ),
                      this.globalRouter.enterAppContext(t))
                    : n
                      ? (this.logger.info(
                          "subscribeToHandleScreenOwnerOfDevice: screen owner changed to MAINUNIT, route to asi information because previous context not known as asterix is functional",
                        ),
                        this.globalRouter.goTo(k.Information))
                      : (this.logger.info(
                          "subscribeToHandleScreenOwnerOfDevice: screen owner changed to MAINUNIT, route back to home because previous context not known",
                        ),
                        this.globalRouter.goTo(D.a.HomeScreen));
                }));
          }
          shouldEnterPrevContext(t, e) {
            return (
              (t !== o.x && t !== o.s) ||
              (!!e && e.type !== T.c.SMARTPHONEINTEGRATION)
            );
          }
          subscribeToHandleScreenLastMode() {
            this.globalRouter.activeAppContext$
              .pipe(Object(g.a)(), Object(h.a)(this.destroy$$))
              .subscribe(([t, e]) => {
                t !== o.a ||
                e === o.a ||
                this.contextChangeDetectionRunning$$.value
                  ? t !== o.a &&
                    e === o.a &&
                    this.asiService.setLastModeForActiveDeviceTo(!0)
                  : this.asiService.setScreenLastModeTo(!1);
              });
          }
          subscribeToFailedPairing() {
            const t = this.asiService.bluetoothPairingsFailed$.pipe(
              Object(g.a)(),
            );
            Object(C.b)([t, this.wifiService.mainAP$])
              .pipe(Object(h.a)(this.destroy$$))
              .subscribe(([[t, e], n]) => {
                for (const i of e)
                  if (!(t.find((t) => t.id === i.id) || (n && n.isEnabled))) {
                    (this.logger.info(
                      "subscribeToFailedPairing: failed paring and wifi is not enabled, tryGoTo Information",
                    ),
                      this.tryGoTo(k.Information));
                    break;
                  }
              });
          }
        }
        return (
          (t.ɵprov = N.bc({
            factory: function () {
              return new t(
                N.cc(r.a),
                N.cc(E.a),
                N.cc(M.a),
                N.cc(S.a),
                N.cc(w.a),
                N.cc(A.a),
                N.cc(L.a),
                N.cc(I.a),
                N.cc(R.m),
              );
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    M706: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return l;
      }),
        n.d(e, "b", function () {
          return h;
        }));
      var i = n("kZht"),
        o = n("An66"),
        a = n("0qMr"),
        l =
          (n("aMc6"),
          n("fzcM"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                "[_nghost-%COMP%]{display:flex;justify-content:center;overflow:hidden;max-width:100%}.op--align-items-inside[_nghost-%COMP%]   .content--left[_ngcontent-%COMP%]{justify-content:flex-end}.op--align-items-inside[_nghost-%COMP%]   .content--right[_ngcontent-%COMP%], .op--align-items-outside[_nghost-%COMP%]   .content--left[_ngcontent-%COMP%]{justify-content:flex-start}.op--align-items-outside[_nghost-%COMP%]   .content--right[_ngcontent-%COMP%]{justify-content:flex-end}.content--left[_ngcontent-%COMP%]{flex:0 1 50%;display:flex;flex-direction:row;justify-content:center;max-width:100%}.content--center[_ngcontent-%COMP%]{position:relative;min-width:0;flex:1 0 auto;display:flex;flex-direction:row;max-width:100%}.content--right[_ngcontent-%COMP%]{flex:0 1 50%;display:flex;flex-direction:row;justify-content:center;max-width:100%}.stretch-center[_ngcontent-%COMP%]{flex:0 1 auto}.same-size-buttons[_ngcontent-%COMP%]{display:grid;grid-template-rows:auto;grid-auto-columns:1fr}.same-size-buttons[_ngcontent-%COMP%]    >*{grid-row:1}",
              ],
            ],
            data: {},
          }));
      function r(t) {
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
              "div",
              [["class", "content--left"]],
              [[2, "stretch-center", null]],
              null,
              null,
              null,
              null,
            )),
            i.Mb(null, 0),
          ],
          null,
          function (t, e) {
            t(e, 0, 0, e.component.stretchCenter);
          },
        );
      }
      function s(t) {
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
              "div",
              [["class", "content--center"]],
              [[2, "same-size-buttons", null]],
              null,
              null,
              null,
              null,
            )),
            i.Mb(null, 1),
          ],
          null,
          function (t, e) {
            t(e, 0, 0, e.component.sameSizeButtons);
          },
        );
      }
      function c(t) {
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
              "div",
              [["class", "content--right"]],
              [[2, "stretch-center", null]],
              null,
              null,
              null,
              null,
            )),
            i.Mb(null, 2),
          ],
          null,
          function (t, e) {
            t(e, 0, 0, e.component.stretchCenter);
          },
        );
      }
      function u(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
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
            (t()(), i.hb(16777216, null, null, 1, null, r)),
            i.xb(
              2,
              16384,
              null,
              0,
              o.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, s)),
            i.xb(
              4,
              16384,
              null,
              0,
              o.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, c)),
            i.xb(
              6,
              16384,
              null,
              0,
              o.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(0, null, null, 0)),
          ],
          function (t, e) {
            (t(e, 2, 0, e.context.mib3Let),
              t(e, 4, 0, e.context.mib3Let),
              t(e, 6, 0, e.context.mib3Let));
          },
          null,
        );
      }
      function h(t) {
        return i.ac(
          2,
          [
            (t()(), i.hb(16777216, null, null, 2, null, u)),
            i.xb(
              1,
              16384,
              null,
              0,
              a.a,
              [i.L, i.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            i.Pb(131072, o.b, [i.h]),
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
                i.Nb(e, 2).transform(n.disclaimerService.allowOperationPanel$),
              ) || n.ignoreLocking,
            );
          },
          null,
        );
      }
    },
    MvmT: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return v;
      }),
        n.d(e, "b", function () {
          return C;
        }));
      var i = n("rWDF"),
        o = n("69kq"),
        a = n("HM3f"),
        l = n("ROBh"),
        r = n("YtkY"),
        s = n("it7j"),
        c = n("BwBJ"),
        u = n("Ohay"),
        h = n("J+dc"),
        g = n("TLy2"),
        d = (n("FNcX"), n("Yi6/")),
        b = n("D6Ca"),
        p = n("IvGl"),
        f = n("kZht"),
        m = n("dQg2"),
        O = n("yNay"),
        v = (function (t) {
          return (
            (t.UNIFIED = "unifieNpsLayout"),
            (t.SDARS = "sdarsNpsLayout"),
            (t.ONLINE = "onlineNpsLayout"),
            (t.FM_AM_NAR = "fmAmNarNpsLayout"),
            (t.FM_AM_TI_ASIA = "fmAmTiAsiaItemLayout"),
            t
          );
        })({});
      const _ = { stationId: void 0, type: p.b.slideShow, url: "" };
      let C = (() => {
        class t {
          constructor(t, e, n, i) {
            ((this.tunerService = t),
              (this.radioSettingsService = e),
              (this.activeVolumesService = n),
              (this.logger = i.getLogger("radio.RadioPlayerService")),
              (this.muted$ = this.activeVolumesService.entertainmentUserMuted$),
              this.setupStationImage());
          }
          static getItemLayout(t, e) {
            const n = t && t.band;
            return n === b.e.SDARS
              ? v.SDARS
              : n === b.e.ONLINE
                ? v.ONLINE
                : e && e.displayPreference === b.k.FAVORFREQUENCYWITHOUTNAME
                  ? v.FM_AM_NAR
                  : e && e.displayPreference === b.k.FAVORFREQUENCY
                    ? v.FM_AM_TI_ASIA
                    : v.UNIFIED;
          }
          setupStationImage() {
            this.stationImage$ = Object(a.b)(
              this.tunerService.activeStation$,
              this.radioSettingsService.preferredImageSettings$,
            ).pipe(
              Object(r.a)(([t, e]) =>
                t
                  ? Object.assign(
                      { stationId: t.id },
                      t.getImageUrlAndType(e ? e.discreteValue : void 0, !0),
                    )
                  : _,
              ),
              Object(s.b)(),
              Object(d.Pd)(
                (t, e) => {
                  const n = e.timestamp - t.timestamp;
                  return n >= 3e3 ||
                    e.value.stationId !== t.value.stationId ||
                    e.value.type <= t.value.type
                    ? Object(l.a)(e)
                    : Object(l.a)(e.value).pipe(
                        Object(c.a)(3e3 - n),
                        Object(s.b)(),
                      );
                },
                new s.a(_, 0),
              ),
              Object(r.a)((t) => t.value.url),
              Object(u.a)(),
            );
          }
          toggleUserMuted() {
            this.muted$
              .pipe(
                Object(h.a)(1),
                Object(g.a)((t) =>
                  t
                    ? this.activeVolumesService.unmuteEntertainment()
                    : this.activeVolumesService.muteEntertainment(),
                ),
              )
              .subscribe((t) => this.logger.info("toggleUserMuted: ", t));
          }
        }
        return (
          (t.ɵprov = f.bc({
            factory: function () {
              return new t(f.cc(m.a), f.cc(i.b), f.cc(o.a), f.cc(O.a));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    U6SP: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return v;
      }),
        n.d(e, "b", function () {
          return P;
        }));
      var i = n("kZht"),
        o = n("HVUF"),
        a = n("B3Zb"),
        l = n("yNay"),
        r = n("8TlW"),
        s = n("fu7d"),
        c = n("bou3"),
        u = n("Xo58"),
        h = n("m3Ja"),
        g = n("r+e+"),
        d = n("ijxY"),
        b = n("bmFL"),
        p = n("l9Gk"),
        f = n("Ps6X"),
        m = n("6zvu"),
        O = n("An66"),
        v =
          (n("1ZTq"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}.state-disabled[_nghost-%COMP%]   .button__icon[_ngcontent-%COMP%], .state-disabled[_nghost-%COMP%]   .button__text[_ngcontent-%COMP%]{filter:grayscale(100%) brightness(.4)}[_nghost-%COMP%]{position:relative;display:block;overflow:hidden;max-width:100%}.button-container[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:center;width:100%;height:100%;font-size:40px}.button--activated[_nghost-%COMP%]{filter:brightness(120%)}.button--horizontal[_nghost-%COMP%]   .button-container[_ngcontent-%COMP%]{flex-direction:row}.button--horizontal[_nghost-%COMP%]   .button__icon[_ngcontent-%COMP%]{margin-bottom:0}.button--horizontal[_nghost-%COMP%]   .button__text[_ngcontent-%COMP%]{align-self:center}.button--horizontal[_nghost-%COMP%]   .button__text--with-icon[_ngcontent-%COMP%]{margin:0 17px 0 -17px}.button--with-border[_nghost-%COMP%]{border-left:1px solid silver;border-bottom:1px solid silver;border-right:1px solid silver}.button--with-thick-border[_nghost-%COMP%]{padding:0 2px 3px}.button--with-thick-border[_nghost-%COMP%]:before{border-width:0 0 3px 2px;background-image:linear-gradient(0deg,hsla(0,0%,100%,.1),transparent 55%);padding-left:2px;margin-right:2px;right:2px}.button--with-thick-border[_nghost-%COMP%]:after, .button--with-thick-border[_nghost-%COMP%]:before{border-style:solid;border-image:linear-gradient(0deg,hsla(0,0%,100%,.7),transparent 81%) 3 2;position:absolute;display:block;content:"";left:0;top:0;bottom:0}.button--with-thick-border[_nghost-%COMP%]:after{border-width:0 2px 0 0;right:0}.button__text[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;position:relative;text-align:center;color:#fff}.button__text--no-icon[_ngcontent-%COMP%]{margin:30px 20px}.button__text--with-icon[_ngcontent-%COMP%]{margin:0 11px 11px}.button__icon[_ngcontent-%COMP%]{align-self:center}.button__icon--with-text[_ngcontent-%COMP%]{margin-bottom:-47px}',
              ],
            ],
            data: {},
          }));
      function _(t) {
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
              [["class", "button__icon"]],
              [
                [2, "button__icon--with-text", null],
                [2, "icon-component--hidden", null],
              ],
              null,
              null,
              o.b,
              o.a,
            )),
            i.xb(
              1,
              4243456,
              null,
              0,
              a.b,
              [l.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, n.icon, n.iconCategory);
          },
          function (t, e) {
            t(e, 0, 0, e.component.hasText, i.Nb(e, 1).iconComponentHidden);
          },
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
              "au3-i18n-label",
              [
                ["class", "button__text"],
                ["id", "ButtonLabel"],
              ],
              [
                [2, "button__text--no-icon", null],
                [2, "button__text--with-icon", null],
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
              1,
              212992,
              null,
              0,
              s.a,
              [i.l, i.D, c.a, l.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              245760,
              null,
              0,
              u.a,
              [[6, s.a], h.a, i.h, i.l, i.D, [2, g.a], [2, d.a], [2, b.a]],
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
            (t(e, 1, 0, "ButtonLabel"),
              t(e, 2, 0, n.developerText, "ButtonLabel", 1, n.nonI18nText));
          },
          function (t, e) {
            var n = e.component;
            t(
              e,
              0,
              0,
              !n.icon && !n.flatButton,
              n.icon,
              i.Nb(e, 2).backgroundColor,
              i.Nb(e, 2).fixedNumberOfLines,
              i.Nb(e, 2).mayContainLatinCharsForArabic,
              i.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
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
              [
                ["class", "button-container"],
                ["ttDoNotToggleChildren", ""],
                ["ttIgnore", ""],
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
            i.xb(
              1,
              16384,
              null,
              0,
              d.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            i.xb(
              2,
              16384,
              null,
              0,
              p.a,
              [],
              { ttDoNotToggleDynamicValue: [0, "ttDoNotToggleDynamicValue"] },
              null,
            ),
            i.xb(
              3,
              212992,
              null,
              0,
              f.a,
              [[2, m.a], [8, null], [3, f.a], i.l, i.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, _)),
            i.xb(
              5,
              16384,
              null,
              0,
              O.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, C)),
            i.xb(
              7,
              16384,
              null,
              0,
              O.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, !n.hasText),
              t(e, 2, 0, !n.hasText || n.hasOnlyText),
              t(e, 3, 0, n.uiStateType),
              t(e, 5, 0, n.icon),
              t(e, 7, 0, n.hasText));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              i.Nb(e, 3).uiStateListHorizontal,
              i.Nb(e, 3).uiStateListVertical,
              i.Nb(e, 3).uiStateCoverLeft,
              i.Nb(e, 3).uiStateCoverRight,
              i.Nb(e, 3).uiStateCoverBottom,
              i.Nb(e, 3).uiStateButton,
              i.Nb(e, 3).uiStateByDabLeft,
              i.Nb(e, 3).uiStateByDabRight,
              i.Nb(e, 3).uiStateLbDabLeft,
              i.Nb(e, 3).uiStateLbDabRight,
            );
          },
        );
      }
    },
    VKfg: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return f;
      }),
        n.d(e, "b", function () {
          return x;
        }));
      var i = n("kZht"),
        o = n("8TlW"),
        a = n("fu7d"),
        l = n("bou3"),
        r = n("yNay"),
        s = n("Xo58"),
        c = n("m3Ja"),
        u = n("r+e+"),
        h = n("ijxY"),
        g = n("bmFL"),
        d = n("An66"),
        b = n("0qMr"),
        p = n("YI95"),
        f =
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
              o.b,
              o.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [i.l, i.D, l.a, r.a, [3, a.a], [8, null]],
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
              s.a,
              [[6, a.a], c.a, i.h, i.l, i.D, [2, u.a], [2, h.a], [2, g.a]],
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
              a.a,
              [i.l, i.D, l.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (t()(), i.Xb(2, null, [" ", " "])),
            i.Rb(3, 2),
            (t()(), i.hb(16777216, null, null, 1, null, m)),
            i.xb(
              5,
              16384,
              null,
              0,
              d.k,
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
            var o = i.Yb(
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
            t(e, 2, 0, o);
          },
        );
      }
      function v(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(0, 0, null, null, 3, "div", [], null, null, null, null, null)),
            (t()(), i.hb(16777216, null, null, 2, null, O)),
            i.xb(
              2,
              16384,
              null,
              0,
              b.a,
              [i.L, i.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            i.Pb(131072, d.b, [i.h]),
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
      function _(t) {
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
            i.Pb(131072, d.b, [i.h]),
            i.Rb(3, 2),
          ],
          null,
          function (t, e) {
            var n = e.component;
            t(e, 0, 0, n.primaryDateHeight);
            var o,
              a = i.Yb(
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
                    (o = i.Yb(
                      e,
                      1,
                      0,
                      i
                        .Nb(e, 2)
                        .transform(n.generalSettingsService.dateFormat$),
                    ))
                    ? null
                    : o.activeDateFormatForMoment,
                ),
              );
            t(e, 1, 0, a);
          },
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
              4,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), i.hb(16777216, null, null, 1, null, v)),
            i.xb(
              2,
              16384,
              null,
              0,
              d.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, _)),
            i.xb(
              4,
              16384,
              null,
              0,
              d.k,
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
      function x(t) {
        return i.ac(
          2,
          [
            i.Pb(0, p.a, []),
            i.Tb(671088640, 1, { amPmLabel: 0 }),
            (t()(), i.hb(16777216, null, null, 1, null, C)),
            i.xb(
              3,
              16384,
              null,
              0,
              d.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, P)),
            i.xb(
              5,
              16384,
              null,
              0,
              d.k,
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
    Vc2n: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return D;
      });
      var i = n("1VvW"),
        o = n("YEFf"),
        a = n("Yi6/"),
        l = n("C05f"),
        r = n("ROBh"),
        s = n("HM3f"),
        c = n("6qsK"),
        u = n("qMQG"),
        h = n("P1io"),
        g = n("uHmZ"),
        d = n("Ohay"),
        b = n("kuMc"),
        p = n("xVbo"),
        f = n("w0kG"),
        m = n("J+dc"),
        O = n("TLy2"),
        v = n("jIqt"),
        _ = n("YtkY"),
        C = n("0Woy"),
        P = n("t8AR"),
        x = n("2Uk/"),
        M = n("JcTI"),
        y = n("kZht"),
        S = n("yNay"),
        w = n("sg2e"),
        T = n("FfND");
      let D = (() => {
        class t extends a.i {
          constructor(t, e, n, o, r, s, g, m) {
            (super(
              e,
              t.getLogger("phone.PhoneRoutingService"),
              h.w,
              c.b,
              u.a.PHONE,
              a.Bb.PHONE,
            ),
              (this.phoneService = o),
              (this.popupManager = r),
              (this.eCallOPRService = s),
              (this.asiRoutingService = g),
              (this.globalRoutingService = m),
              (this.disableAutomaticRoutingToMain = !1),
              (this.applyCarPlayActive = !1),
              (this.androidAutoActive = !1),
              (this.incomingCallPopupActive$$ = new l.a({
                active: !1,
                phone: void 0,
              })),
              n.appleCarplayActive$
                .pipe(Object(d.a)(), Object(b.a)(this.destroy$$))
                .subscribe((t) => {
                  ((this.applyCarPlayActive = t),
                    this.isContextActive &&
                      (t ? this.goTo(c.b.InitCarplay) : this.goToPhoneMain()));
                }),
              n.androidAutoActive$
                .pipe(Object(d.a)(), Object(b.a)(this.destroy$$))
                .subscribe((t) => {
                  this.androidAutoActive = t;
                }),
              e.events
                .pipe(
                  Object(p.a)((t) => t instanceof i.e),
                  Object(f.a)(this.globalRoutingService.activeAppContext$),
                  Object(b.a)(this.destroy$$),
                )
                .subscribe(([, t]) => {
                  ((this.activeContextBeforeNavigation = t),
                    this.logger.debug(
                      "activeContextBeforeNavigation:",
                      this.activeContextBeforeNavigation,
                    ));
                }),
              this.subscribeToPhoneAndEcallState(),
              this.subscribeToCalls(),
              this.subscribeToECallOPRState(),
              this.initPrivacyRouting());
          }
          goToPreviousContextOrBack() {
            return (
              this.logger.info(
                "goToPreviousContextOrBack() previousContext:",
                this.activeContextBeforeNavigation,
              ),
              this.activeContextBeforeNavigation === this.appContext
                ? this.goBack()
                : this.globalRoutingService.enterAppContext(
                    this.activeContextBeforeNavigation,
                  )
            );
          }
          enterContext() {
            return this.eCallOPRRoute
              ? (this.logger.info(
                  "enterContext: Navigating to ecall/opr route",
                ),
                this.goTo(this.eCallOPRRoute))
              : (!this.phoneService.calls.incomingCall ||
                  this.applyCarPlayActive ||
                  this.androidAutoInForeground() ||
                  (this.logger.info(
                    "enterContext: Requesting incoming call popup because phone context was accessed during an incoming call",
                  ),
                  this.requestIncomingCallPopup(
                    this.phoneService.calls.incomingCall.phoneDevice,
                  )),
                this.phoneService.calls.focusCall
                  ? (this.logger.info(
                      "enterContext: Navigating to active call",
                    ),
                    this.goToActiveCall())
                  : this.isContextActive
                    ? (this.logger.info(
                        "enterContext: Navigating to phone main because context is already active",
                      ),
                      this.goToPhoneMain())
                    : this.isSubRoute(
                          c.b.InitCarplay,
                          this.currentRouteSnapshot,
                        ) && !this.applyCarPlayActive
                      ? (this.logger.info(
                          "enterContext: Navigating to phone main because carplay is no longer active",
                        ),
                        this.goToPhoneMain())
                      : (this.logger.info(
                          "enterContext: Restoring last phone screen",
                        ),
                        super.enterContext()));
          }
          handleGoToFailure(t) {
            if (this.eCallOPRRoute)
              return t.path === this.eCallOPRRoute.path
                ? (this.logger.warn(
                    `handleGoToFailure: Requested redirection to same route as intended ${Object(a.kd)(t)} - resolve to "false" to prevent an infinite loop`,
                  ),
                  Object(r.a)(!1).toPromise())
                : (this.logger.info(
                    `handleGoToFailure: Denied access to '${Object(a.kd)(t)}', redirecting to 'ecall/opr'`,
                  ),
                  this.goTo(this.eCallOPRRoute));
            if (this.applyCarPlayActive)
              return t.path === c.b.InitCarplay.path
                ? (this.logger.warn(
                    "handleGoToFailure: Requested redirection to same route as intended ('init-carplay') - resolve to \"false\" to prevent an infinite loop",
                  ),
                  Object(r.a)(!1).toPromise())
                : (this.logger.info(
                    `handleGoToFailure: Denied access to '${Object(a.kd)(t)}', redirecting to 'init-carplay'`,
                  ),
                  this.goTo(c.b.InitCarplay));
            switch (t) {
              case c.b.Init:
                return (
                  this.logger.info(
                    'handleGoToFailure: Denied access to "init" redirect to "main"',
                  ),
                  this.goToPhoneMain()
                );
              case c.b.ActiveCall:
              case c.b.ConferenceMembers:
                return (
                  this.logger.info(
                    `handleGoToFailure: Denied access to "${Object(a.kd)(t)}", redirecting to "main"`,
                  ),
                  this.goToPhoneMain()
                );
              case c.b.NotConnected:
                return (
                  this.logger.info(
                    'handleGoToFailure: Denied access to "not-connected", checking wether phone is initialized',
                  ),
                  this.phoneService.initialized$
                    .pipe(Object(m.a)(1))
                    .toPromise()
                    .then((t) =>
                      t
                        ? this.phoneService.hasConnectedPhones
                          ? (this.logger.info(
                              'handleGoToFailure: Denied access to "not-connected", redirecting to "main" because phone is initialized and a phone is connected',
                            ),
                            this.goTo(c.b.Main))
                          : (this.logger.warn(
                              'handleGoToFailure: Requested redirection to same route as intended - resolve to "false" to prevent an infinite loop',
                            ),
                            Object(r.a)(!1).toPromise())
                        : (this.logger.info(
                            'handleGoToFailure: Denied access to "not-connected", redirecting to "init" because phone is not initialized',
                          ),
                          this.goTo(c.b.Init)),
                    )
                );
              case c.b.Main:
              case c.b.Main.children.DialNumber:
              case c.b.Main.children.Callstack:
              case c.b.Main.children.Addressbook:
              case c.b.Main.children.Addressbook.children.Contact:
                return (
                  this.logger.info(
                    'Denied access to "main", redirecting to "not-connected"',
                  ),
                  this.phoneService.hasConnectedPhones
                    ? (this.logger.warn(
                        'handleGoToFailure: Requested redirection to same route as intended - resolve to "false" to prevent an infinite loop',
                      ),
                      Object(r.a)(!1).toPromise())
                    : this.goTo(c.b.NotConnected)
                );
              case c.b.Bluetooth.children.TrustedDevices:
                return (
                  this.logger.info(
                    'Denied access to "trusted-devices", redirecting to "discovered-devices"',
                  ),
                  this.goToBTDevicesFound(g.a.PHONE1)
                );
            }
            return super.handleGoToFailure(t);
          }
          goToForDevice(t, e, n, i) {
            return (
              (this.disableAutomaticRoutingToMain = !0),
              this.phoneService.togglePhones({ targetDeviceId: t }),
              Promise.resolve().then(
                () => (
                  (this.disableAutomaticRoutingToMain = !1),
                  this.goTo(e, n, i)
                ),
              )
            );
          }
          goToPhoneMain() {
            return this.goTo(c.b.Main);
          }
          goToFavoritesOrMain() {
            return this.phoneService.hasFocusDevice$
              .pipe(
                Object(m.a)(1),
                Object(a.pd)(this.logger, "goToFavoritesOrMain: hasDevice:"),
                Object(O.a)((t) =>
                  this.goTo(t ? c.b.Main.children.Favorites : c.b.Main),
                ),
              )
              .toPromise();
          }
          goToActiveCall() {
            return this.goTo(c.b.ActiveCall);
          }
          goToTrustedDevices(t, e) {
            return this.goTo(
              c.b.Bluetooth.children.TrustedDevices,
              t,
              e
                ? {
                    navigationExtras: {
                      queryParams: { disconnectExisting: e },
                    },
                  }
                : void 0,
            );
          }
          goToBTDevicesFound(t, e) {
            return this.goTo(
              c.b.Bluetooth.children.DiscoveredDevices,
              t,
              e
                ? {
                    navigationExtras: {
                      queryParams: { disconnectExisting: e },
                    },
                  }
                : void 0,
            );
          }
          goToEditNumber(t) {
            return this.goTo(c.b.Main.children.DialNumber, null, {
              navigationExtras: { queryParams: { number: t } },
            });
          }
          goToECallOPRRoute() {
            this.eCallOPRRoute &&
              (this.logger.info(
                `Navigating to eCall or OPR route: "${Object(a.kd)(this.eCallOPRRoute)}"`,
              ),
              this.goTo(this.eCallOPRRoute));
          }
          subscribeToPhoneAndEcallState() {
            const t = this.eCallOPRService.eCallOPRRoute$.pipe(
                Object(v.a)(null),
                Object(_.a)((t) => !!t),
                Object(d.a)(),
              ),
              e = this.phoneService.initialized$.pipe(Object(d.a)()),
              n = this.phoneService.phones$.pipe(
                Object(_.a)((t) => t.focusDevice && t.focusDevice.id),
                Object(d.a)(),
                Object(v.a)(null),
                Object(C.a)(),
              ),
              i = this.phoneService.callsWithoutEmergencies$.pipe(
                Object(_.a)((t) => !!t.focusCall),
                Object(d.a)(),
              );
            Object(s.b)(t, e, n)
              .pipe(
                Object(f.a)(i),
                Object(_.a)(([[t, e, [n, i]], o]) => [t, e, n, i, o]),
                Object(b.a)(this.destroy$$),
              )
              .subscribe(([t, e, n, i, o]) => {
                if (
                  (this.logger.info(
                    `currentRouteSnapshot: ${Object(a.kd)(this.currentRouteSnapshot)}, eCallOprActive: ${t}, ` +
                      `phoneInitialized: ${e}, previousFocusDevice: ${n}, focusDevice: ${i}, focusCall: ${o}`,
                  ),
                  !t)
                )
                  return e
                    ? void (o
                        ? this.logger.info(
                            "subscribeToPhoneAndEcallState: ignoring update of focus device because an active phone call exists.",
                          )
                        : i
                          ? this.disableAutomaticRoutingToMain
                            ? this.logger.info(
                                "Phone attached, but automatic navigation to Main route disabled",
                              )
                            : (this.currentRouteSnapshot === c.b.NotConnected ||
                                (null == n &&
                                  this.currentRouteSnapshot !==
                                    c.b.Main.children.Settings) ||
                                this.isSubRoute(
                                  c.b.ECallOPR,
                                  this.currentRouteSnapshot,
                                )) &&
                              (this.logger.info(
                                "Phone attached, navigating to Main route",
                              ),
                              this.tryGoTo(c.b.Main))
                          : (this.logger.info(
                              "No phone attached, navigating to NotConnected route",
                            ),
                            this.tryGoTo(c.b.NotConnected)))
                    : (this.logger.info(
                        "Phone not initialized, navigating to Init route",
                      ),
                      void this.tryGoTo(c.b.Init));
                this.logger.info(
                  "ECall/OPR is active - no other routes in phone context are allowed",
                );
              });
          }
          subscribeToCalls() {
            this.subscribeToIncomingCallPopup();
            let t = [],
              e = void 0;
            Object(s.b)(
              this.phoneService.callsWithoutEmergencies$,
              this.incomingCallPopupActive$$,
            )
              .pipe(Object(b.a)(this.destroy$$))
              .subscribe(([n, i]) => {
                let o = !1,
                  a = !1;
                for (const e of n.filter((t) => t.userApproved)) {
                  const n = t.find((t) => t.id === e.id);
                  (n && n.userApproved) || (o = !0);
                }
                const l = n.incomingCall;
                if (l) {
                  this.logger.info("calls$: Incoming call", l);
                  const n =
                      this.phoneService.phones.focusDevice &&
                      this.phoneService.phones.focusDevice.id,
                    o = t.find((t) => t.id === l.id);
                  if (o && o.isIncoming && l.id === e)
                    this.logger.info(
                      "calls$: Suppressing incoming call popup because a call with this id was already handled",
                    );
                  else if (1 === this.phoneService.phones.length)
                    (this.logger.info(
                      "show popup because there is only one phone connected",
                    ),
                      (a = !0));
                  else if (this.phoneService.phones.length > 1)
                    if (l.phoneDevice.id === n)
                      (this.logger.info(
                        "show popup because incoming call is on the focus device",
                      ),
                        (a = !0));
                    else {
                      const t = i.phone && i.phone.id;
                      l.phoneDevice.id !== n &&
                        (i.active && t === n
                          ? ((a = !1),
                            this.logger.info(
                              "dont show popup because incoming call is on the focus device",
                            ))
                          : (this.logger.info(
                              " show popup because the incoming call is on the second device and there is no incoming call popup on the focus device",
                            ),
                            (a = !0)));
                    }
                }
                ((t = n),
                  (e = l ? l.id : void 0),
                  this.isContextActive &&
                    o &&
                    n.focusCall &&
                    (this.logger.info(
                      `calls$: Navigating to "active-call" due to new active call ${n.focusCall.id}`,
                    ),
                    this.goToActiveCall()),
                  a &&
                    l &&
                    !this.applyCarPlayActive &&
                    !this.androidAutoInForeground() &&
                    (this.logger.info(
                      `calls$: Requesting popup due to new incoming call ${l.id}`,
                    ),
                    this.requestIncomingCallPopup(l.phoneDevice)));
              });
          }
          subscribeToECallOPRState() {
            (this.eCallOPRService.eCallOPRPopup$
              .pipe(
                Object(v.a)(null),
                Object(C.a)(),
                Object(b.a)(this.destroy$$),
              )
              .subscribe(([t, e]) => {
                (e &&
                  (this.logger.info(`Requesting eCall or OPR popup: "${e}"`),
                  this.popupManager.request(e)),
                  t && this.popupManager.unrequest(t));
              }),
              this.eCallOPRService.eCallOPRRoute$
                .pipe(Object(b.a)(this.destroy$$))
                .subscribe((t) => {
                  ((this.eCallOPRRoute = t), this.goToECallOPRRoute());
                }));
          }
          requestIncomingCallPopup(t) {
            this.popupManager
              .request(a.Ob.POPUP_PHONE_CALL_INCOMING, { data: t })
              .then(() => {
                (this.logger.info("request incoming call popup"),
                  this.incomingCallPopupActive$$.next({
                    active: !0,
                    phone: t,
                  }));
              });
          }
          subscribeToIncomingCallPopup() {
            this.popupManager
              .isActive(a.Ob.POPUP_PHONE_CALL_INCOMING)
              .subscribe((t) => {
                t ||
                  (this.logger.info(
                    "incoming call popup is not active anymore",
                  ),
                  this.incomingCallPopupActive$$.next({
                    active: !1,
                    phone: void 0,
                  }));
              });
          }
          androidAutoInForeground() {
            return (
              this.androidAutoActive &&
              this.asiRoutingService.isContextActive &&
              this.asiRoutingService.isSubRoute(
                M.a.VideoStream,
                this.asiRoutingService.currentRouteSnapshot,
              )
            );
          }
          initPrivacyRouting() {
            Object(s.b)(
              this.phoneService.focusPhoneConfidentialModeActive$,
              this.currentRoute$,
            )
              .pipe(Object(b.a)(this.destroy$$))
              .subscribe(([t, e]) => {
                t &&
                  e !== c.b.Main &&
                  e !== c.b.Main.children.DialNumber &&
                  e !== c.b.Main.children.Settings &&
                  this.isSubRoute(c.b.Main, e) &&
                  (this.logger.info(
                    "initPrivacyRouting: privacy is active and current route is a child of main, route:",
                    e,
                  ),
                  this.tryGoTo(c.b.MainPrivacy));
              });
          }
        }
        return (
          (t.ɵprov = y.bc({
            factory: function () {
              return new t(
                y.cc(S.a),
                y.cc(i.m),
                y.cc(P.a),
                y.cc(o.c),
                y.cc(w.a),
                y.cc(x.a),
                y.cc(M.b),
                y.cc(T.a),
              );
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    XgBi: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return L;
      }),
        n.d(e, "b", function () {
          return N;
        }));
      var i = n("kZht"),
        o = n("bMuc"),
        a = n("ZIdM"),
        l = n("3bpu"),
        r = n("fu7d"),
        s = n("yNay"),
        c = n("6zvu"),
        u = n("VcEz"),
        h = n("OtM5"),
        g = n("y9xZ"),
        d = n("+sw+"),
        b = n("BMrr"),
        p = n("IEns"),
        f = n("z6QT"),
        m = n("flsk"),
        O = n("FQEI"),
        v = n("O82V"),
        _ = n("Eln4"),
        C = n("evAh"),
        P = n("CpzC"),
        x = n("0Bsn"),
        M = n("5GjX"),
        y = n("mYyF"),
        S = n("v98a"),
        w = n("aOG8"),
        T = n("Krzs"),
        D = n("Nd8J"),
        A = n("rZwJ"),
        L =
          (n("sJfC"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;position:relative;min-width:66px;width:66px;min-height:33px;height:33px}.checked[_nghost-%COMP%]   .switch-button__main-area[_ngcontent-%COMP%]{background-color:#999}.checked[_nghost-%COMP%]   .switch-button__handle[_ngcontent-%COMP%]{transform:translateX(33px);background-color:#292929}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.switch-button__main-area[_ngcontent-%COMP%]{position:relative;height:100%;width:100%;border-radius:20px;border:1px solid #fff;background-color:#0a0a0a;transition:background-color .4s}.switch-button__handle[_ngcontent-%COMP%]{position:absolute;display:inline-block;top:-1px;left:-1px;width:33px;height:33px;border-radius:100%;border:1px solid #fff;background-color:#161616}",
              ],
            ],
            data: {},
          }));
      function N(t) {
        return i.ac(
          2,
          [
            i.Tb(402653184, 1, { handle: 0 }),
            (t()(),
            i.yb(
              1,
              0,
              null,
              null,
              10,
              "div",
              [["class", "switch-button__main-area"]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "mib3Tap" === e && (i = !1 !== t.component.onTap() && i),
                  i
                );
              },
              null,
              null,
            )),
            i.xb(2, 147456, null, 0, o.a, [i.l, i.z], null, null),
            i.xb(
              3,
              147456,
              null,
              0,
              a.a,
              [o.a, [2, l.a], [2, r.a], s.a],
              null,
              null,
            ),
            i.xb(
              4,
              212992,
              null,
              0,
              c.a,
              [
                s.a,
                u.b,
                a.a,
                [2, l.a],
                [2, r.a],
                [2, h.a],
                [2, g.a],
                [2, d.a],
                i.z,
                b.a,
                i.l,
                [2, p.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.Sb(131584, null, f.a, f.a, [[3, f.a]]),
            i.xb(
              6,
              4407296,
              null,
              0,
              m.a,
              [
                i.l,
                O.a,
                i.h,
                f.a,
                [2, v.a],
                [2, l.b],
                [2, l.a],
                [2, _.a],
                [2, C.a],
              ],
              null,
              null,
            ),
            i.xb(
              7,
              147456,
              null,
              0,
              P.a,
              [[2, c.a], [2, h.a], [2, x.a], [2, m.a], [2, M.b], i.l, y.a, S.b],
              null,
              null,
            ),
            i.xb(
              8,
              147456,
              null,
              0,
              w.a,
              [[2, m.a], [2, c.a], [2, u.b], T.a],
              null,
              null,
            ),
            (t()(),
            i.yb(
              9,
              0,
              [
                [1, 0],
                ["handle", 1],
              ],
              null,
              2,
              "span",
              [["class", "switch-button__handle"]],
              null,
              [
                [null, "mib3Drag"],
                [null, "mib3DragStart"],
                [null, "mib3DragEnd"],
              ],
              function (t, e, n) {
                var i = !0,
                  o = t.component;
                return (
                  "mib3Drag" === e && (i = !1 !== o.handleDrag(n) && i),
                  "mib3DragStart" === e &&
                    (i = !1 !== o.handleDragStart() && i),
                  "mib3DragEnd" === e && (i = !1 !== o.handleDragEnd() && i),
                  i
                );
              },
              null,
              null,
            )),
            i.xb(10, 147456, null, 0, o.a, [i.l, i.z], null, null),
            i.xb(
              11,
              212992,
              null,
              0,
              D.b,
              [i.l, i.z, u.b, b.a, s.a, o.a, [2, h.a], [2, A.a], [2, r.a]],
              {
                mib3DragStartThreshold: [0, "mib3DragStartThreshold"],
                mib3DragExclusiveThreshold: [1, "mib3DragExclusiveThreshold"],
                mib3DragAndFlingDirection: [2, "mib3DragAndFlingDirection"],
              },
              {
                mib3Drag: "mib3Drag",
                mib3DragStart: "mib3DragStart",
                mib3DragEnd: "mib3DragEnd",
              },
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 4, 0),
              t(e, 6, 0),
              t(e, 11, 0, n.DRAG_THRESHOLD, n.DRAG_THRESHOLD, n.dragDirection));
          },
          function (t, e) {
            t(e, 1, 0, i.Nb(e, 6).markerClassEnabled);
          },
        );
      }
    },
    ZRMe: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return s;
        }));
      var i = n("kZht"),
        o = n("HVUF"),
        a = n("B3Zb"),
        l = n("yNay"),
        r =
          (n("0Z+c"),
          i.wb({
            encapsulation: 0,
            styles: [
              ["[_nghost-%COMP%]{display:block;width:100%;height:100%}"],
            ],
            data: {},
          }));
      function s(t) {
        return i.ac(
          2,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "arrow"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              o.b,
              o.a,
            )),
            i.xb(
              1,
              4243456,
              null,
              0,
              a.b,
              [l.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, n.arrowFilename, n.iconCategory);
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 1).iconComponentHidden);
          },
        );
      }
    },
    aMy3: function (t, e, n) {
      "use strict";
      (n.d(e, "c", function () {
        return o;
      }),
        n.d(e, "b", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return l;
        }),
        n.d(e, "e", function () {
          return r;
        }),
        n.d(e, "d", function () {
          return s;
        }));
      var i = n("RJia"),
        o = (function (t) {
          return (
            (t.USB_DEFAULT = "USB-Ger\xe4t"),
            (t.USB_1 = "USB-Ger\xe4t 1"),
            (t.USB_2 = "USB-Ger\xe4t 2"),
            (t.USB_3 = "USB-Ger\xe4t 3"),
            (t.USB_4 = "USB-Ger\xe4t 4"),
            (t.IPOD = "Externes Ger\xe4t"),
            (t.CARPLAY = "Apple CarPlay"),
            (t.DVD = "DVD"),
            (t.DVD_CHANGER = "DVD-Wechsler"),
            (t.TV = "TV"),
            (t.BLUETOOTH = "BLUETOOTH"),
            (t.ONLINEMEDIA = "Onlinemedien"),
            (t.ALEXA = "Amazon Alexa"),
            t
          );
        })({}),
        a = (function (t) {
          return (
            (t.LAST_PLAYED_SONG = "Last played song"),
            (t.SEARCH = "Search"),
            (t.ALBUMS = "Albums"),
            (t.ARTISTS = "Artists"),
            (t.GENRES = "Genres"),
            (t.VIDEOS = "Videos"),
            (t.TITLES = "Titles"),
            (t.FOLDERS = "Folders"),
            (t.PLAYLISTS = "Playlists"),
            (t.COMPOSERS = "Composers"),
            (t.AUDIOBOOKS = "Audiobooks"),
            (t.PODCASTS = "Podcasts"),
            (t.COMPILATIONS = "Compilations"),
            (t.ITUNESRADIO = "ITunesRadio"),
            t
          );
        })({}),
        l = (function (t) {
          return (
            (t.AUTO = "auto"),
            (t.DISP_4_to_3 = "4:3"),
            (t.DISP_16_to_9 = "16:9"),
            (t.ZOOM = "zoom"),
            (t.CINEMA = "cinemascope"),
            (t.ORIGINAL = "original"),
            t
          );
        })({}),
        r = (function (t) {
          return (
            (t.INACTIVE =
              "Das Abspielen dieser DVD wird durch die Kindersicherung\nverhindert. Es darf keine Sicherheitsstufe gesetzt sein."),
            (t.LEVEL1 =
              "Das Abspielen dieser DVD wird durch die Kindersicherung\nverhindert. Es muss die Sicherheitsstufe LEVEL1 gesetzt sein."),
            (t.LEVEL2 =
              "Das Abspielen dieser DVD wird durch die Kindersicherung\nverhindert. Es muss die Sicherheitsstufe LEVEL2 gesetzt sein."),
            (t.LEVEL3 =
              "Das Abspielen dieser DVD wird durch die Kindersicherung\nverhindert. Es muss die Sicherheitsstufe LEVEL3 gesetzt sein."),
            (t.LEVEL4 =
              "Das Abspielen dieser DVD wird durch die Kindersicherung\nverhindert. Es muss die Sicherheitsstufe LEVEL4 gesetzt sein."),
            (t.LEVEL5 =
              "Das Abspielen dieser DVD wird durch die Kindersicherung\nverhindert. Es muss die Sicherheitsstufe LEVEL5 gesetzt sein."),
            (t.LEVEL6 =
              "Das Abspielen dieser DVD wird durch die Kindersicherung\nverhindert. Es muss die Sicherheitsstufe LEVEL6 gesetzt sein."),
            (t.LEVEL7 =
              "Das Abspielen dieser DVD wird durch die Kindersicherung\nverhindert. Es muss die Sicherheitsstufe LEVEL7 gesetzt sein."),
            (t.LEVEL8 =
              "Das Abspielen dieser DVD wird durch die Kindersicherung\nverhindert. Es muss die Sicherheitsstufe LEVEL8 gesetzt sein."),
            t
          );
        })({});
      const s = {
        [i.o.INACTIVE]: r.INACTIVE,
        [i.o.LEVEL1]: r.LEVEL1,
        [i.o.LEVEL2]: r.LEVEL2,
        [i.o.LEVEL3]: r.LEVEL3,
        [i.o.LEVEL4]: r.LEVEL4,
        [i.o.LEVEL5]: r.LEVEL5,
        [i.o.LEVEL6]: r.LEVEL6,
        [i.o.LEVEL7]: r.LEVEL7,
        [i.o.LEVEL8]: r.LEVEL8,
      };
    },
    erFY: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return v;
      }),
        n.d(e, "b", function () {
          return P;
        }));
      var i = n("kZht"),
        o = n("HVUF"),
        a = n("T8E5"),
        l = n("B3Zb"),
        r = n("yNay"),
        s = n("8TlW"),
        c = n("fu7d"),
        u = n("bou3"),
        h = n("Xo58"),
        g = n("m3Ja"),
        d = n("r+e+"),
        b = n("ijxY"),
        p = n("bmFL"),
        f = n("Ps6X"),
        m = n("6zvu"),
        O = n("An66"),
        v =
          (n("5wO1"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}.state-disabled[_nghost-%COMP%]   .operation-panel-item__icon[_ngcontent-%COMP%], .state-disabled[_nghost-%COMP%]   .operation-panel-item__text[_ngcontent-%COMP%]{filter:grayscale(100%) brightness(.4)}[_nghost-%COMP%]{position:relative;display:block;max-width:100%;flex-grow:1;flex-shrink:1}.item-container[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;align-items:center;min-width:0;height:100%}.op-item--prio1[_nghost-%COMP%]{height:102px}.op-item--prio1[_nghost-%COMP%]:last-of-type{margin-right:2px}.op-item--prio1[_nghost-%COMP%]:last-of-type:after{border-width:0 2px 0 0;content:"";position:absolute;right:-2px;top:0;bottom:0}.op-item--prio1[_nghost-%COMP%]   .item-container[_ngcontent-%COMP%], .op-item--prio1[_nghost-%COMP%]:last-of-type:after{border-style:solid;border-image:linear-gradient(0deg,hsla(0,0%,100%,.7),transparent 81%) 3 2}.op-item--prio1[_nghost-%COMP%]   .item-container[_ngcontent-%COMP%]{border-width:0 0 3px 2px;background-image:linear-gradient(0deg,hsla(0,0%,100%,.1),transparent 55%);padding:0;margin:0}.op-item--prio1[_nghost-%COMP%]   .item-container[_ngcontent-%COMP%]   .operation-panel-item__text[_ngcontent-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);padding:0 30px;font-size:40px}.op-item--prio1[_nghost-%COMP%]   .item-container[_ngcontent-%COMP%]   .operation-panel-item__text--with-icon[_ngcontent-%COMP%]{padding:0 30px 0 0}.op-item--prio1-icon-only[_nghost-%COMP%]{min-width:143px;width:143px}.op-item--prio1-icon-only.op-item--prio1-main[_nghost-%COMP%]{width:202px}.op-item--prio1-icon-text[_nghost-%COMP%], .op-item--prio1-text-only[_nghost-%COMP%]{min-width:350px}.op-item--prio2[_nghost-%COMP%]{min-width:200px}.op-item--prio2[_nghost-%COMP%]   .operation-panel-item__text[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:30px}.op-item--prio2-icon-only[_nghost-%COMP%], .op-item--prio2-icon-text[_nghost-%COMP%]{height:118px}.op-item--prio2-icon-only.op-item--default-max-width[_nghost-%COMP%], .op-item--prio2-icon-text.op-item--default-max-width[_nghost-%COMP%]{max-width:285px}.op-item--prio2-icon-only[_nghost-%COMP%]   .item-container[_ngcontent-%COMP%], .op-item--prio2-icon-text[_nghost-%COMP%]   .item-container[_ngcontent-%COMP%]{padding-bottom:19px}.op-item--prio2-icon-only[_nghost-%COMP%]   .operation-panel-item__text[_ngcontent-%COMP%], .op-item--prio2-icon-text[_nghost-%COMP%]   .operation-panel-item__text[_ngcontent-%COMP%]{position:absolute;bottom:9px;max-width:calc(100% - 30px)}.op-item--prio2-text-only[_nghost-%COMP%]{height:102px;min-width:403px}.op-item--prio2-text-only[_nghost-%COMP%]   .operation-panel-item__text[_ngcontent-%COMP%]{position:relative;bottom:-2px;max-width:calc(100% - 48px)}.op-item--separator-right[_nghost-%COMP%]{margin-right:2px}.op-item--separator-right[_nghost-%COMP%]:after{border-width:0 2px 0 0;border-style:solid;border-image:linear-gradient(0deg,hsla(0,0%,100%,.7),transparent 81%) 3 2;content:"";position:absolute;right:-2px;top:0;bottom:16px}.op-item--placeholder.op-item--prio2[_nghost-%COMP%]{height:118px;min-width:200px;width:200px;padding-bottom:19px}.op-item--separator-left[_nghost-%COMP%]{margin-left:2px}.op-item--separator-left[_nghost-%COMP%]:before{border-width:0 0 0 2px;border-style:solid;border-image:linear-gradient(0deg,hsla(0,0%,100%,.7),transparent 81%) 3 2;content:"";position:absolute;left:-2px;top:0;bottom:16px}.operation-panel-item__text[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;position:relative;max-width:100%;color:#fff;text-align:center}@media (max-width:1280px){.op-item--prio2-icon-only.op-item--default-max-width[_nghost-%COMP%], .op-item--prio2-icon-text.op-item--default-max-width[_nghost-%COMP%]{max-width:200px}.op-item--prio1-small-scale[_nghost-%COMP%]{min-width:314px}.op-item--prio2-small-scale[_nghost-%COMP%]{min-width:173px}.op-item--prio2-text-only[_nghost-%COMP%]{min-width:340px}}',
              ],
            ],
            data: {},
          }));
      function _(t) {
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
              "au3-icon",
              [
                ["class", "operation-panel-item__icon"],
                ["ttDoNotToggle", ""],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              o.b,
              o.a,
            )),
            i.xb(1, 16384, null, 0, a.a, [], null, null),
            i.xb(
              2,
              4243456,
              null,
              0,
              l.b,
              [r.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 2, 0, n.icon, n.iconCategory);
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 2).iconComponentHidden);
          },
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
              "au3-i18n-label",
              [
                ["class", "operation-panel-item__text"],
                ["id", ""],
              ],
              [
                [2, "operation-panel-item__text--with-icon", null],
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
              1,
              212992,
              null,
              0,
              c.a,
              [i.l, i.D, u.a, r.a, [3, c.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              245760,
              null,
              0,
              h.a,
              [[6, c.a], g.a, i.h, i.l, i.D, [2, d.a], [2, b.a], [2, p.a]],
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
            (t(e, 1, 0, ""), t(e, 2, 0, n.developerText, "", 1, n.nonI18nText));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              e.component.icon,
              i.Nb(e, 2).backgroundColor,
              i.Nb(e, 2).fixedNumberOfLines,
              i.Nb(e, 2).mayContainLatinCharsForArabic,
              i.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
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
              6,
              "div",
              [
                ["class", "button-container item-container"],
                ["id", "oerationPanelItem"],
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
            i.xb(
              1,
              212992,
              null,
              0,
              c.a,
              [i.l, i.D, u.a, r.a, [3, c.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              212992,
              null,
              0,
              f.a,
              [[2, m.a], [8, null], [3, f.a], i.l, i.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, _)),
            i.xb(
              4,
              16384,
              null,
              0,
              O.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, C)),
            i.xb(
              6,
              16384,
              null,
              0,
              O.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "oerationPanelItem"),
              t(e, 2, 0, n.uiStateType),
              t(e, 4, 0, n.icon),
              t(e, 6, 0, n.hasText));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              i.Nb(e, 2).uiStateListHorizontal,
              i.Nb(e, 2).uiStateListVertical,
              i.Nb(e, 2).uiStateCoverLeft,
              i.Nb(e, 2).uiStateCoverRight,
              i.Nb(e, 2).uiStateCoverBottom,
              i.Nb(e, 2).uiStateButton,
              i.Nb(e, 2).uiStateByDabLeft,
              i.Nb(e, 2).uiStateByDabRight,
              i.Nb(e, 2).uiStateLbDabLeft,
              i.Nb(e, 2).uiStateLbDabRight,
            );
          },
        );
      }
    },
  },
]);
