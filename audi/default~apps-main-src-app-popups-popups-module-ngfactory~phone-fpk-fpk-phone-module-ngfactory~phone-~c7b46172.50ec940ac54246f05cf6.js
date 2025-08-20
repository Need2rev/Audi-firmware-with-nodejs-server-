(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    "6mtq": function (n, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return i;
      });
      var l = e("kZht"),
        a = (e("XY/Y"), e("Zbi+")),
        o = e("Yi6/");
      class i {
        constructor(n) {
          ((this.changeDetector = n),
            (this.showInfoIcon = !0),
            (this.selected = !1),
            (this.itemTapped = new l.n()),
            (this.itemLongpressed = new l.n()),
            (this.infoIconTapped = new l.n()),
            (this.selectionChanged = new l.n()),
            (this.phoneNumberTypeEnum = a.k),
            (this.iconCategory = o.Z),
            (this.uiStateType = o.uc.ListHorizontal));
        }
        checkboxTapped() {
          ((this.selected = !this.selected),
            this.changeDetector.markForCheck(),
            this.selectionChanged.emit(this.selected));
        }
      }
    },
    IlA8: function (n, t, e) {
      "use strict";
      (e.d(t, "a", function () {
        return J;
      }),
        e.d(t, "b", function () {
          return ln;
        }));
      var l = e("kZht"),
        a = e("8TlW"),
        o = e("fu7d"),
        i = e("bou3"),
        r = e("yNay"),
        u = e("ijxY"),
        s = e("Xo58"),
        b = e("m3Ja"),
        c = e("r+e+"),
        d = e("bmFL"),
        h = e("U6SP"),
        m = e("OtM5"),
        f = e("9ZFG"),
        g = e("bMuc"),
        p = e("ZIdM"),
        _ = e("3bpu"),
        C = e("6zvu"),
        x = e("VcEz"),
        P = e("y9xZ"),
        v = e("+sw+"),
        O = e("BMrr"),
        M = e("IEns"),
        y = e("6480"),
        N = e("FfND"),
        I = e("oeT7"),
        z = e("t7cT"),
        k = e("vwU6"),
        L = e("z6QT"),
        T = e("flsk"),
        w = e("FQEI"),
        S = e("O82V"),
        E = e("Eln4"),
        F = e("evAh"),
        D = e("1ZTq"),
        A = e("YcCK"),
        B = e("mYyF"),
        V = e("v98a"),
        Y = e("CpzC"),
        R = e("0Bsn"),
        U = e("5GjX"),
        X = e("aOG8"),
        Z = e("Krzs"),
        j = e("nQV3"),
        G = e("3+OJ"),
        W = e("SueR"),
        K = e("Ps6X"),
        q = e("An66"),
        J =
          (e("6mtq"),
          l.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:flex;flex-direction:row;height:120px;padding:0 20px;align-items:center}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.item__name-area[_ngcontent-%COMP%]{flex-grow:1;justify-self:stretch;display:grid;grid-template-areas:"name name" "numbertype number";grid-template-columns:auto 1fr;grid-column-gap:30px;height:100px}.item__move-icon[_ngcontent-%COMP%]{justify-self:flex-start}.item__button-area[_ngcontent-%COMP%]{width:170px;justify-self:flex-end;display:flex;justify-content:center;align-items:center}.item__info-button[_ngcontent-%COMP%]{width:100%;height:100%}.item__info-button--checkbox[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100px}.name-area__contact-name[_ngcontent-%COMP%]{grid-area:name;font-size:40px}.name-area__number-type[_ngcontent-%COMP%]{grid-area:numbertype;font-size:30px}.name-area__phone-number[_ngcontent-%COMP%]{grid-area:number;font-size:30px}',
              ],
            ],
            data: {},
          }));
      function Q(n) {
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
                ["class", "name-area__contact-name"],
                ["id", "ContactName"],
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
            l.xb(
              1,
              212992,
              null,
              0,
              o.a,
              [l.l, l.D, i.a, r.a, [3, o.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 16384, null, 0, u.a, [], null, null),
            l.xb(
              3,
              245760,
              null,
              0,
              s.a,
              [[6, o.a], b.a, l.h, l.l, l.D, [2, c.a], [2, u.a], [2, d.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "ContactName"),
              n(
                t,
                3,
                0,
                "ContactName",
                null == e.contact ? null : e.contact.name,
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
      function H(n) {
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
                ["class", "name-area__contact-name"],
                ["id", "FavNumber"],
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
            l.xb(
              1,
              212992,
              null,
              0,
              o.a,
              [l.l, l.D, i.a, r.a, [3, o.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 16384, null, 0, u.a, [], null, null),
            l.xb(
              3,
              245760,
              null,
              0,
              s.a,
              [[6, o.a], b.a, l.h, l.l, l.D, [2, c.a], [2, u.a], [2, d.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "FavNumber"), n(t, 3, 0, "FavNumber", e.onlyNumber));
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
      function $(n) {
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
              [["class", "name-area__number-type"]],
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
            l.xb(
              1,
              212992,
              null,
              0,
              o.a,
              [l.l, l.D, i.a, r.a, [3, o.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              s.a,
              [[6, o.a], b.a, l.h, l.l, l.D, [2, c.a], [2, u.a], [2, d.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
            l.Rb(3, 1),
          ],
          function (n, t) {
            var e = t.component;
            n(
              t,
              1,
              0,
              null == e.number ? null : e.number.type,
              e.phoneNumberTypeEnum,
            );
            var a = l.Yb(
              t,
              2,
              0,
              n(
                t,
                3,
                0,
                l.Nb(t.parent, 0),
                null == e.number ? null : e.number.type,
              ),
            );
            n(t, 2, 0, a, null == e.number ? null : e.number.type);
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
      function nn(n) {
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
                ["class", "name-area__phone-number"],
                ["id", "PhoneNumber"],
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
            l.xb(
              1,
              212992,
              null,
              0,
              o.a,
              [l.l, l.D, i.a, r.a, [3, o.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 16384, null, 0, u.a, [], null, null),
            l.xb(
              3,
              245760,
              null,
              0,
              s.a,
              [[6, o.a], b.a, l.h, l.l, l.D, [2, c.a], [2, u.a], [2, d.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "PhoneNumber"),
              n(
                t,
                3,
                0,
                "PhoneNumber",
                null == e.number ? null : e.number.number,
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
      function tn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              13,
              "au3-button",
              [
                ["class", "item__info-button"],
                ["id", "InfoIcon"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "button--activated", null],
                [2, "button--horizontal", null],
                [2, "button--with-border", null],
                [2, "button--with-thick-border", null],
              ],
              [
                [null, "mib3Tap"],
                [null, "mib3Longpress"],
              ],
              function (n, t, e) {
                var l = !0,
                  a = n.component;
                return (
                  "mib3Tap" === t && (l = !1 !== a.infoIconTapped.emit() && l),
                  "mib3Longpress" === t &&
                    (l = !1 !== a.itemLongpressed.emit() && l),
                  l
                );
              },
              h.b,
              h.a,
            )),
            l.xb(
              1,
              147456,
              null,
              0,
              m.a,
              [f.a, l.h, r.a, [3, m.a]],
              null,
              null,
            ),
            l.xb(2, 147456, null, 0, g.a, [l.l, l.z], null, null),
            l.xb(
              3,
              212992,
              null,
              0,
              o.a,
              [l.l, l.D, i.a, r.a, [3, o.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              4,
              147456,
              null,
              0,
              p.a,
              [g.a, [2, _.a], [2, o.a], r.a],
              null,
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              C.a,
              [
                r.a,
                x.b,
                p.a,
                [2, _.a],
                [2, o.a],
                [2, m.a],
                [2, P.a],
                [2, v.a],
                l.z,
                O.a,
                l.l,
                [2, M.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.xb(
              6,
              671744,
              null,
              0,
              y.a,
              [N.a, I.i, m.a, C.a, y.b, z.a],
              {
                routeInfo: [0, "routeInfo"],
                preventGoToRoute: [1, "preventGoToRoute"],
                infoButton: [2, "infoButton"],
              },
              null,
            ),
            l.xb(
              7,
              212992,
              null,
              0,
              k.a,
              [
                r.a,
                l.z,
                l.l,
                x.b,
                O.a,
                p.a,
                [2, _.a],
                [2, o.a],
                [2, m.a],
                [2, P.a],
                [2, v.a],
                [2, M.a],
              ],
              null,
              { longpress: "mib3Longpress" },
            ),
            l.Sb(131584, null, L.a, L.a, [[3, L.a]]),
            l.xb(
              9,
              4407296,
              null,
              0,
              T.a,
              [
                l.l,
                w.a,
                l.h,
                L.a,
                [2, S.a],
                [2, _.b],
                [2, _.a],
                [2, E.a],
                [2, F.a],
              ],
              null,
              null,
            ),
            l.xb(
              10,
              49152,
              null,
              0,
              D.b,
              [],
              {
                hasText: [0, "hasText"],
                icon: [1, "icon"],
                iconCategory: [2, "iconCategory"],
              },
              null,
            ),
            l.xb(
              11,
              147456,
              null,
              0,
              A.a,
              [[2, k.a], l.l, B.a, V.b],
              null,
              null,
            ),
            l.xb(
              12,
              147456,
              null,
              0,
              Y.a,
              [[2, C.a], [2, m.a], [2, R.a], [2, T.a], [2, U.b], l.l, B.a, V.b],
              null,
              null,
            ),
            l.xb(
              13,
              147456,
              null,
              0,
              X.a,
              [[2, T.a], [2, C.a], [2, x.b], Z.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, "InfoIcon"),
              n(t, 5, 0),
              n(t, 6, 0, e.infoRoute, !0, !0),
              n(t, 7, 0),
              n(t, 9, 0),
              n(t, 10, 0, !1, "E9C1_Information.webp", e.iconCategory.Touch));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 1).combinedDisabled,
              l.Nb(t, 1).useBrighterIcon,
              l.Nb(t, 9).markerClassEnabled,
              l.Nb(t, 10).activated,
              l.Nb(t, 10).layoutHorizontal,
              l.Nb(t, 10).thinBorder,
              l.Nb(t, 10).thickBorder,
            );
          },
        );
      }
      function en(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-checkbox",
              [["class", "item__info-button--checkbox"]],
              [[2, "mib3-haptic", null]],
              [
                [null, "mib3Tap"],
                [null, "mib3Longpress"],
              ],
              function (n, t, e) {
                var l = !0,
                  a = n.component;
                return (
                  "mib3Tap" === t && (l = !1 !== a.checkboxTapped() && l),
                  "mib3Longpress" === t &&
                    (l = !1 !== a.itemLongpressed.emit() && l),
                  l
                );
              },
              j.b,
              j.a,
            )),
            l.xb(1, 147456, null, 0, g.a, [l.l, l.z], null, null),
            l.xb(
              2,
              147456,
              null,
              0,
              p.a,
              [g.a, [2, _.a], [2, o.a], r.a],
              null,
              null,
            ),
            l.xb(
              3,
              212992,
              null,
              0,
              C.a,
              [
                r.a,
                x.b,
                p.a,
                [2, _.a],
                [2, o.a],
                [2, m.a],
                [2, P.a],
                [2, v.a],
                l.z,
                O.a,
                l.l,
                [2, M.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.xb(
              4,
              212992,
              null,
              0,
              k.a,
              [
                r.a,
                l.z,
                l.l,
                x.b,
                O.a,
                p.a,
                [2, _.a],
                [2, o.a],
                [2, m.a],
                [2, P.a],
                [2, v.a],
                [2, M.a],
              ],
              null,
              { longpress: "mib3Longpress" },
            ),
            l.Sb(131584, null, L.a, L.a, [[3, L.a]]),
            l.xb(
              6,
              4407296,
              null,
              0,
              T.a,
              [
                l.l,
                w.a,
                l.h,
                L.a,
                [2, S.a],
                [2, _.b],
                [2, _.a],
                [2, E.a],
                [2, F.a],
              ],
              null,
              null,
            ),
            l.xb(7, 49152, null, 0, G.a, [], { checked: [0, "checked"] }, null),
            l.xb(
              8,
              147456,
              null,
              0,
              A.a,
              [[2, k.a], l.l, B.a, V.b],
              null,
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              Y.a,
              [[2, C.a], [2, m.a], [2, R.a], [2, T.a], [2, U.b], l.l, B.a, V.b],
              null,
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              X.a,
              [[2, T.a], [2, C.a], [2, x.b], Z.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0), n(t, 4, 0), n(t, 6, 0), n(t, 7, 0, e.selected));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 6).markerClassEnabled);
          },
        );
      }
      function ln(n) {
        return l.ac(
          2,
          [
            l.Pb(0, W.a, []),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              18,
              "div",
              [["class", "item__name-area"]],
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
              [
                [null, "mib3Tap"],
                [null, "mib3Longpress"],
              ],
              function (n, t, e) {
                var l = !0,
                  a = n.component;
                return (
                  "mib3Tap" === t &&
                    (l =
                      !1 !==
                        (a.editMode
                          ? a.checkboxTapped()
                          : a.itemTapped.emit()) && l),
                  "mib3Longpress" === t &&
                    (l = !1 !== a.itemLongpressed.emit() && l),
                  l
                );
              },
              null,
              null,
            )),
            l.xb(2, 147456, null, 0, g.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              p.a,
              [g.a, [2, _.a], [2, o.a], r.a],
              null,
              null,
            ),
            l.xb(
              4,
              212992,
              null,
              0,
              C.a,
              [
                r.a,
                x.b,
                p.a,
                [2, _.a],
                [2, o.a],
                [2, m.a],
                [2, P.a],
                [2, v.a],
                l.z,
                O.a,
                l.l,
                [2, M.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              k.a,
              [
                r.a,
                l.z,
                l.l,
                x.b,
                O.a,
                p.a,
                [2, _.a],
                [2, o.a],
                [2, m.a],
                [2, P.a],
                [2, v.a],
                [2, M.a],
              ],
              null,
              { longpress: "mib3Longpress" },
            ),
            l.Sb(131584, null, L.a, L.a, [[3, L.a]]),
            l.xb(
              7,
              4407296,
              null,
              0,
              T.a,
              [
                l.l,
                w.a,
                l.h,
                L.a,
                [2, S.a],
                [2, _.b],
                [2, _.a],
                [2, E.a],
                [2, F.a],
              ],
              null,
              null,
            ),
            l.xb(
              8,
              212992,
              null,
              0,
              K.a,
              [[2, C.a], [8, null], [3, K.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              A.a,
              [[2, k.a], l.l, B.a, V.b],
              null,
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              Y.a,
              [[2, C.a], [2, m.a], [2, R.a], [2, T.a], [2, U.b], l.l, B.a, V.b],
              null,
              null,
            ),
            l.xb(
              11,
              147456,
              null,
              0,
              X.a,
              [[2, T.a], [2, C.a], [2, x.b], Z.a],
              null,
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Q)),
            l.xb(
              13,
              16384,
              null,
              0,
              q.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, H)),
            l.xb(
              15,
              16384,
              null,
              0,
              q.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, $)),
            l.xb(
              17,
              16384,
              null,
              0,
              q.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, nn)),
            l.xb(
              19,
              16384,
              null,
              0,
              q.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            l.yb(
              20,
              0,
              null,
              null,
              4,
              "div",
              [["class", "item__button-area"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), l.hb(16777216, null, null, 1, null, tn)),
            l.xb(
              22,
              16384,
              null,
              0,
              q.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, en)),
            l.xb(
              24,
              16384,
              null,
              0,
              q.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 4, 0),
              n(t, 5, 0),
              n(t, 7, 0),
              n(t, 8, 0, e.uiStateType),
              n(
                t,
                13,
                0,
                e.contact && (null == e.contact ? null : e.contact.name),
              ),
              n(t, 15, 0, !e.contact && e.onlyNumber),
              n(
                t,
                17,
                0,
                !!e.number && (null == e.number ? null : e.number.type),
              ),
              n(t, 19, 0, !!e.number),
              n(t, 22, 0, !e.editMode && e.showInfoIcon),
              n(t, 24, 0, e.editMode));
          },
          function (n, t) {
            n(t, 1, 1, [
              l.Nb(t, 7).markerClassEnabled,
              l.Nb(t, 8).uiStateListHorizontal,
              l.Nb(t, 8).uiStateListVertical,
              l.Nb(t, 8).uiStateCoverLeft,
              l.Nb(t, 8).uiStateCoverRight,
              l.Nb(t, 8).uiStateCoverBottom,
              l.Nb(t, 8).uiStateButton,
              l.Nb(t, 8).uiStateByDabLeft,
              l.Nb(t, 8).uiStateByDabRight,
              l.Nb(t, 8).uiStateLbDabLeft,
              l.Nb(t, 8).uiStateLbDabRight,
            ]);
          },
        );
      }
    },
    JCQ5: function (n, t, e) {
      "use strict";
      var l = e("GVcY");
      (e.d(t, "a", function () {
        return l.a;
      }),
        e.d(t, "b", function () {
          return l.b;
        }),
        e.d(t, "c", function () {
          return l.d;
        }),
        e.d(t, "d", function () {
          return l.e;
        }),
        e.d(t, "e", function () {
          return l.g;
        }),
        e("8u35"),
        e("qciS"),
        e("K9Bs"),
        e("KyqV"));
    },
    SueR: function (n, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return o;
      });
      var l = e("XY/Y"),
        a = e("zcBZ");
      class o {
        transform(n) {
          switch (n) {
            case l.c.MOBILE:
            case a.a.MOBILE:
              return "Mobil";
            case l.c.LANDLINE:
            case a.a.LANDLINE:
              return "Festnetz";
            case l.c.PRIVATE:
            case a.a.PRIVATE:
              return "Privat";
            case l.c.BUSINESS:
            case a.a.BUSINESS:
              return "Gesch\xe4ftlich";
            case l.c.FAX:
            case a.a.FAX:
              return "Fax";
            case l.c.UNKNOWN:
            case a.a.UNKNOWN:
            default:
              return "";
          }
        }
      }
    },
  },
]);
