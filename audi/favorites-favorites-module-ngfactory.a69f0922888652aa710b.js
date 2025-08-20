(window.webpackJsonp = window.webpackJsonp || []).push([
  [80, 106],
  {
    "/51X": function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return r;
        }));
      var i = n("kZht"),
        l = n("An66"),
        a =
          (n("th8l"),
          n("qzuC"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:pre}.container-span[_ngcontent-%COMP%]{unicode-bidi:plaintext}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%], .component-layout-latin.abbreviate-at-beginning[_nghost-%COMP%], .component-layout-latin   .abbreviate-at-beginning[_nghost-%COMP%]{direction:rtl;font-kerning:normal}.component-layout-arabic.abbreviate-at-beginning[_nghost-%COMP%], .component-layout-arabic   .abbreviate-at-beginning[_nghost-%COMP%]{direction:ltr}.text-part--highlighted[_ngcontent-%COMP%]{color:var(--current-context)}.text-part--underlined[_ngcontent-%COMP%]{position:relative}.text-part--underlined[_ngcontent-%COMP%]:after{content:"";border-bottom:.06em solid #fff;position:absolute;width:100%;left:0;bottom:.09em}',
              ],
            ],
            data: {},
          }));
      function o(t) {
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
              "span",
              [],
              [
                [2, "text-part--highlighted", null],
                [2, "text-part--underlined", null],
              ],
              null,
              null,
              null,
              null,
            )),
            (t()(), i.Xb(1, null, ["", ""])),
          ],
          null,
          function (t, e) {
            var n = e.component;
            (t(
              e,
              0,
              0,
              e.context.$implicit.highlight &&
                n.highlightType == n.HighlightTypeEnum.ContextColor,
              e.context.$implicit.highlight &&
                n.highlightType == n.HighlightTypeEnum.Underline,
            ),
              t(e, 1, 0, e.context.$implicit.text));
          },
        );
      }
      function r(t) {
        return i.ac(
          2,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              2,
              "span",
              [["class", "container-span"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), i.hb(16777216, null, null, 1, null, o)),
            i.xb(
              2,
              278528,
              null,
              0,
              l.j,
              [i.P, i.L, i.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
          ],
          function (t, e) {
            t(e, 2, 0, e.component.textParts);
          },
          null,
        );
      }
    },
    "7f94": function (t, e, n) {
      "use strict";
      function i(t) {
        switch (t) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
            return `E93A_navigation_map_preview_pin${t}.webp`;
          default:
            return;
        }
      }
      function l(t) {
        return (
          (!!t && t.withRoadDistance && !!t.roaddistance) ||
          (!!t && !!t.airdistance)
        );
      }
      function a(t) {
        return t && t.withRoadDistance && null != t.roaddistance
          ? t.roaddistance
          : t && null != t.airdistance
            ? t.airdistance
            : NaN;
      }
      (n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return l;
        }),
        n.d(e, "a", function () {
          return a;
        }));
    },
    DmXr: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return S;
      });
      var i = n("Hnhs"),
        l = n("YtkY"),
        a = n("Ohay"),
        o = n("kuMc"),
        r = n("mWib"),
        s = n("7SLS"),
        u = n("TLy2"),
        c = n("8j5Y"),
        d = n("/mWE"),
        b = n("T9XR"),
        h = n("C05f"),
        g = n("QQZH"),
        p = n("HM3f"),
        f = n("g6G6"),
        _ = n("maAS"),
        m = n("+3WC"),
        v = n("Yi6/"),
        x = n("AEBN"),
        O = n("xS3h"),
        C = n("kZht"),
        P = n("snOA"),
        y = n("sg2e"),
        M = n("yNay");
      let S = (() => {
        class t {
          constructor(t, e, n, i, o) {
            ((this.shortCutService = t),
              (this.carShortCutService = e),
              (this.persistence = n),
              (this.popupService = i),
              (this.initialSaveFavoriteOption = {
                icon: "E16E_addressbook_save_as_favorite.webp",
                developerText: O.a.SaveFavorite,
                visible: !1,
                enabled: !0,
                textId: O.a.SaveFavorite,
              }),
              (this.carShortCuts$ = this.shortCutService.shortcuts$.pipe(
                Object(l.a)((t) =>
                  t.filter((t) => t.type === m.a.Car && t.name !== _.a.INVALID),
                ),
                Object(a.a)(
                  (t, e) =>
                    t.length === e.length && t.every((t, n) => t === e[n]),
                ),
              )),
              (this.initialized$$ = new h.a(!1)),
              (this.initialized$ = this.initialized$$
                .asObservable()
                .pipe(Object(a.a)())),
              (this.carFavorites$$ = new h.a([])),
              (this.carFavorites$ = this.carFavorites$$.asObservable()),
              (this.destroy$$ = new g.a(1)),
              (this.logger = o.getLogger("car.favorites.service")),
              this.init());
          }
          init() {
            (this.setupFavorites(), this.setupTriggerDelete());
          }
          setupFavorites() {
            const t = this.persistence
              .getEntry$(x.q.Car, b.a.CarFavorites, void 0)
              .pipe(
                Object(l.a)((t) => t.valueContainer || []),
                Object(l.a)((t) =>
                  t
                    .map((t) => this.carShortCutService.carShortcuts.get(t))
                    .filter((t) => !!t),
                ),
              )
              .pipe(Object(o.a)(this.destroy$$));
            (t.subscribe((t) => {
              (this.logger.info("setupFavorites carFavorites$$", () =>
                t.map((t) => t.name),
              ),
                this.carFavorites$$.next(t),
                this.initialized$$.next(!0));
            }),
              Object(p.b)(this.carShortCuts$, t)
                .pipe(Object(r.a)(400), Object(o.a)(this.destroy$$))
                .subscribe(([t, e]) => {
                  const n = t.filter((t) => !e.includes(t));
                  n.length > 0 &&
                    (this.logger.info(
                      "setupFavorites addShortcut to favorites",
                      { carShortCuts: t, carFavorites: e },
                    ),
                    this.addFavorites(
                      n.map((t) => t.name),
                      e,
                    ));
                }));
          }
          setupTriggerDelete() {
            this.carFavorites$$
              .pipe(
                Object(l.a)((t) =>
                  t
                    .map((t) =>
                      t && t.specialData && t.specialData.triggerDelete$
                        ? t.specialData.triggerDelete$.pipe(Object(s.a)(t.name))
                        : void 0,
                    )
                    .filter((t) => !!t),
                ),
                Object(u.a)((t) => Object(f.a)(...t)),
                Object(o.a)(this.destroy$$),
                Object(c.a)((t) => this.logger.info("setupTriggerDelete", t)),
              )
              .subscribe((t) => (t ? this.removeFavorites([t]) : void 0));
          }
          ngOnDestroy() {
            this.destroy$$.next();
          }
          addFavorite(t, e = !1) {
            this.logger.info("addFavorite", t);
            const n = this.carFavorites$$.getValue().map((t) => t.name);
            n.includes(t)
              ? e &&
                this.popupService.request(
                  v.Ob.POPUP_OPTION_STORE_FAVORITE_ALREADY_EXISTING_TOAST,
                )
              : (n.push(t),
                this.updatePersistedFavorites(n),
                e &&
                  this.popupService.request(
                    v.Ob.POPUP_OPTION_STORE_FAVORITE_TOAST,
                  ));
          }
          addFavorites(t, e) {
            this.logger.info("addFavorites", { names: t, favorites: e });
            const n = e.map((t) => t.name),
              i = t.filter((t) => !n.includes(t)),
              l = n.concat(i);
            this.updatePersistedFavorites(l);
          }
          removeFavorites(t) {
            const e = this.carFavorites$$.getValue();
            this.logger.info("removeFavorite", t);
            const n = e.map((t) => t.name).filter((e) => !t.includes(e));
            (this.updatePersistedFavorites(n),
              t.forEach((t) => {
                const n = e.find((e) => e.name === t);
                n && this.shortCutService.removeShortcut(n);
              }));
          }
          reorderFavorites(t, e) {
            this.logger.info("reorderFavorites", [t, e]);
            const n = this.carFavorites$$.getValue();
            if (t >= n.length || e >= n.length) return;
            const i = n.map((t) => t.name);
            (i.splice(t, 1),
              i.splice(e, 0, n[t].name),
              this.updatePersistedFavorites(i));
          }
          executeFavorite(t) {
            (this.logger.info("executeFavorite", t.name),
              this.carShortCutService.executeShortcut(t, !1));
          }
          updatePersistedFavorites(t) {
            (this.logger.debug("updatePersistedFavorites", t),
              this.carFavorites$$.next(
                t.map((t) => this.carShortCutService.carShortcuts.get(t)),
              ),
              this.persistence.setEntry(x.q.Car, b.a.CarFavorites, t));
          }
          saveFavoriteOption(t) {
            const e = !this.carFavorites$$.getValue().includes(t),
              n = e
                ? void 0
                : v.Ob.POPUP_OPTION_STORE_FAVORITE_ALREADY_EXISTING_TOAST.toString();
            return Object.assign(
              {},
              this.initialSaveFavoriteOption,
              { disabledReason: n },
              { enabled: e },
              { visible: !0 },
              {
                icon: e
                  ? "E16E_addressbook_save_as_favorite.webp"
                  : "E16E_addressbook_save_as_favorite_enabled.webp",
              },
            );
          }
        }
        return (
          (t.ɵprov = C.bc({
            factory: function () {
              return new t(
                C.cc(i.a),
                C.cc(d.a),
                C.cc(P.a),
                C.cc(y.a),
                C.cc(M.a),
              );
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    QSdq: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return G;
      }),
        n.d(e, "b", function () {
          return J;
        }));
      var i = n("kZht"),
        l = n("HVUF"),
        a = n("T8E5"),
        o = n("B3Zb"),
        r = n("yNay"),
        s = n("8TlW"),
        u = n("fu7d"),
        c = n("bou3"),
        d = n("ijxY"),
        b = n("Xo58"),
        h = n("m3Ja"),
        g = n("r+e+"),
        p = n("bmFL"),
        f = n("XgBi"),
        _ = n("sJfC"),
        m = n("OtM5"),
        v = n("bMuc"),
        x = n("ZIdM"),
        O = n("3bpu"),
        C = n("6zvu"),
        P = n("VcEz"),
        y = n("y9xZ"),
        M = n("+sw+"),
        S = n("BMrr"),
        L = n("IEns"),
        T = n("Nd8J"),
        I = n("rZwJ"),
        E = n("z6QT"),
        N = n("flsk"),
        w = n("FQEI"),
        A = n("O82V"),
        F = n("Eln4"),
        D = n("evAh"),
        k = n("Ps6X"),
        R = n("CpzC"),
        H = n("0Bsn"),
        z = n("5GjX"),
        V = n("mYyF"),
        $ = n("v98a"),
        j = n("aOG8"),
        B = n("Krzs"),
        Y = n("An66"),
        G =
          (n("D0GA"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:flex;position:relative;padding:0 20px}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%]{margin-right:30px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%]{margin-left:30px}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.list-item__text[_ngcontent-%COMP%]{max-height:100%;flex:1 1 auto}.list-item__wrapper[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;justify-content:space-between}.text-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;max-width:calc(100% - 66px)}.text-wrapper--icon-front[_ngcontent-%COMP%]{max-width:calc(100% - 215px)}.list-item__text--small[_ngcontent-%COMP%]{font-size:30px}.list-item__text--small--light[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular)}',
              ],
            ],
            data: {},
          }));
      function U(t) {
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
                ["class", "list-item__icon--begin"],
                ["ttDoNotToggle", ""],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(
              1,
              16384,
              null,
              0,
              a.a,
              [],
              { ttDoNotToggleDynamicValue: [0, "ttDoNotToggleDynamicValue"] },
              null,
            ),
            i.xb(
              2,
              4243456,
              null,
              0,
              o.b,
              [r.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, !n.possibleIcon),
              t(e, 2, 0, n.icon, n.listIconCategory));
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 2).iconComponentHidden);
          },
        );
      }
      function Z(t) {
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
              "div",
              [["class", "text-wrapper"]],
              [[2, "text-wrapper--icon-front", null]],
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
              "au3-i18n-label",
              [
                ["class", "list-item__text"],
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
              2,
              212992,
              null,
              0,
              u.a,
              [i.l, i.D, c.a, r.a, [3, u.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              3,
              16384,
              null,
              0,
              d.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            i.xb(
              4,
              245760,
              null,
              0,
              b.a,
              [[6, u.a], h.a, i.h, i.l, i.D, [2, g.a], [2, d.a], [2, p.a]],
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
              5,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "list-item__text--small"],
                ["ttIgnore", ""],
              ],
              [
                [2, "list-item__text--small--light", null],
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
              u.a,
              [i.l, i.D, c.a, r.a, [3, u.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              7,
              16384,
              null,
              0,
              d.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            i.xb(
              8,
              245760,
              null,
              0,
              b.a,
              [[6, u.a], h.a, i.h, i.l, i.D, [2, g.a], [2, d.a], [2, p.a]],
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
            (t(
              e,
              2,
              0,
              n.textId ? n.textId : "ListSwitchItemText",
              n.textIdEnum,
            ),
              t(e, 3, 0, !n.hasSubtitle),
              t(
                e,
                4,
                0,
                n.developerText,
                n.textId ? n.textId : "ListSwitchItemText",
                1,
                n.nonI18nText,
              ),
              t(
                e,
                6,
                0,
                n.subtitleId ? n.subtitleId : "ListSwitchItemSubtitle",
                n.subtitleIdEnum,
              ),
              t(e, 7, 0, !n.hasSubtitle),
              t(
                e,
                8,
                0,
                n.developerTextSubtitle,
                n.subtitleId ? n.subtitleId : "ListSwitchItemSubtitle",
                1,
                n.nonI18nTextSubtitle,
              ));
          },
          function (t, e) {
            var n = e.component;
            (t(e, 0, 0, !!n.icon),
              t(
                e,
                1,
                0,
                i.Nb(e, 4).backgroundColor,
                i.Nb(e, 4).fixedNumberOfLines,
                i.Nb(e, 4).mayContainLatinCharsForArabic,
                i.Nb(e, 4).shortenWithEllipsisForArabic,
              ),
              t(
                e,
                5,
                0,
                n.lightSubtitle,
                i.Nb(e, 8).backgroundColor,
                i.Nb(e, 8).fixedNumberOfLines,
                i.Nb(e, 8).mayContainLatinCharsForArabic,
                i.Nb(e, 8).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function X(t) {
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
                ["class", "list-item__text"],
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
              1,
              212992,
              null,
              0,
              u.a,
              [i.l, i.D, c.a, r.a, [3, u.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              2,
              16384,
              null,
              0,
              d.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            i.xb(
              3,
              245760,
              null,
              0,
              b.a,
              [[6, u.a], h.a, i.h, i.l, i.D, [2, g.a], [2, d.a], [2, p.a]],
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
            (t(
              e,
              1,
              0,
              n.textId ? n.textId : "ListSwitchItemText",
              n.textIdEnum,
            ),
              t(e, 2, 0, n.hasSubtitle || !(n.developerText || n.textIdEnum)),
              t(
                e,
                3,
                0,
                n.developerText,
                n.textId ? n.textId : "ListSwitchItemText",
                n.fixedNumberOfLines,
                n.nonI18nText,
              ));
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
      function W(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              [[1, 0]],
              null,
              2,
              "au3-switch-button",
              [["ttDoNotToggle", ""]],
              [[2, "checked", null]],
              [[null, "checkedChange"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "checkedChange" === e &&
                    (i = !1 !== t.component.valueChange.emit(n) && i),
                  i
                );
              },
              f.b,
              f.a,
            )),
            i.xb(1, 16384, null, 0, a.a, [], null, null),
            i.xb(
              2,
              4374528,
              [
                [2, 4],
                ["switchButton", 4],
              ],
              0,
              _.a,
              [i.h, [2, m.a]],
              { checked: [0, "checked"], resetDelay: [1, "resetDelay"] },
              { checkedChange: "checkedChange" },
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 2, 0, n.value, n.resetDelay);
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 2).checkedInternal);
          },
        );
      }
      function J(t) {
        return i.ac(
          2,
          [
            i.Tb(671088640, 1, { switchButton: 0 }),
            i.Tb(671088640, 2, { switchButtonComponent: 0 }),
            (t()(),
            i.yb(
              2,
              0,
              null,
              null,
              16,
              "div",
              [["class", "list-item__wrapper"]],
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
                [null, "mib3TapPointer"],
                [null, "mib3Fling"],
                [null, "mib3FocusPress"],
              ],
              function (t, e, n) {
                var i = !0,
                  l = t.component;
                return (
                  "mib3TapPointer" === e && (i = !1 !== l.itemTapped(n) && i),
                  "mib3Fling" === e && (i = !1 !== l.onFling(n) && i),
                  "mib3FocusPress" === e && (i = !1 !== l.focusPressed() && i),
                  i
                );
              },
              null,
              null,
            )),
            i.xb(3, 147456, null, 0, v.a, [i.l, i.z], null, null),
            i.xb(
              4,
              147456,
              null,
              0,
              x.a,
              [v.a, [2, O.a], [2, u.a], r.a],
              null,
              null,
            ),
            i.xb(
              5,
              212992,
              null,
              0,
              C.a,
              [
                r.a,
                P.b,
                x.a,
                [2, O.a],
                [2, u.a],
                [2, m.a],
                [2, y.a],
                [2, M.a],
                i.z,
                S.a,
                i.l,
                [2, L.a],
              ],
              null,
              { tapPointer: "mib3TapPointer" },
            ),
            i.xb(
              6,
              212992,
              null,
              0,
              T.b,
              [i.l, i.z, P.b, S.a, r.a, v.a, [2, m.a], [2, I.a], [2, u.a]],
              {
                mib3DragAndFlingDirection: [0, "mib3DragAndFlingDirection"],
                mib3DragAndFlingDisabled: [1, "mib3DragAndFlingDisabled"],
              },
              { mib3Fling: "mib3Fling" },
            ),
            i.Sb(131584, null, E.a, E.a, [[3, E.a]]),
            i.xb(
              8,
              4407296,
              null,
              0,
              N.a,
              [
                i.l,
                w.a,
                i.h,
                E.a,
                [2, A.a],
                [2, O.b],
                [2, O.a],
                [2, F.a],
                [2, D.a],
              ],
              null,
              null,
            ),
            i.xb(
              9,
              212992,
              null,
              0,
              k.a,
              [[2, C.a], [8, null], [3, k.a], i.l, i.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            i.xb(
              10,
              147456,
              null,
              0,
              R.a,
              [[2, C.a], [2, m.a], [2, H.a], [2, N.a], [2, z.b], i.l, V.a, $.b],
              null,
              null,
            ),
            i.xb(
              11,
              147456,
              null,
              0,
              j.a,
              [[2, N.a], [2, C.a], [2, P.b], B.a],
              null,
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, U)),
            i.xb(
              13,
              16384,
              null,
              0,
              Y.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, Z)),
            i.xb(
              15,
              16384,
              null,
              0,
              Y.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), i.hb(0, [["singleLine", 2]], null, 0, null, X)),
            (t()(), i.hb(16777216, null, null, 1, null, W)),
            i.xb(
              18,
              16384,
              null,
              0,
              Y.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 5, 0),
              t(e, 6, 0, n.flingDirection, n.flingDisabled),
              t(e, 8, 0),
              t(e, 9, 0, n.uiStateType),
              t(e, 13, 0, n.icon),
              t(e, 15, 0, n.hasSubtitle, i.Nb(e, 16)),
              t(e, 18, 0, n.showRightMenuItems));
          },
          function (t, e) {
            t(e, 2, 1, [
              i.Nb(e, 8).markerClassEnabled,
              i.Nb(e, 9).uiStateListHorizontal,
              i.Nb(e, 9).uiStateListVertical,
              i.Nb(e, 9).uiStateCoverLeft,
              i.Nb(e, 9).uiStateCoverRight,
              i.Nb(e, 9).uiStateCoverBottom,
              i.Nb(e, 9).uiStateButton,
              i.Nb(e, 9).uiStateByDabLeft,
              i.Nb(e, 9).uiStateByDabRight,
              i.Nb(e, 9).uiStateLbDabLeft,
              i.Nb(e, 9).uiStateLbDabRight,
            ]);
          },
        );
      }
    },
    RoxU: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      var i = n("1+5f"),
        l = n("MddD");
      let a = (() => {
        class t {
          static getIconFileNameForEntryFlag(e) {
            switch (e) {
              case i.i.FASTCHARGE:
                return t.FAST_CHARGE_FILE_NAME;
              case i.i.NODIESEL:
                return t.NODIESEL_FILE_NAME;
              case i.i.NOCNG:
                return t.NOCNG_FILE_NAME;
              case i.i.OPEN24H:
                return t.OPEN24H_FILE_NAME;
              default:
                return "";
            }
          }
          static compareEntryFlags(e, n) {
            if (null == e || null == n)
              throw new Error("Cannot sort null or undefined values");
            return (
              t.ENTRY_FLAG_ORDER.indexOf(e) - t.ENTRY_FLAG_ORDER.indexOf(n)
            );
          }
          static entryIsAllowed(e) {
            return t.ENTRY_FLAG_ORDER.indexOf(e) > -1;
          }
          static locationObjectPoiInfosToSearchresultObjectPoiInfos(t) {
            switch (t) {
              case l.i.CREDITCARDPAYMENT:
                return i.i.CREDITCARDPAYMENT;
              case l.i.FASTCHARGE:
                return i.i.FASTCHARGE;
              case l.i.NODIESEL:
                return i.i.NODIESEL;
              case l.i.NOCNG:
                return i.i.NOCNG;
              case l.i.PREMIUM:
                return i.i.PREMIUM;
              default:
                return i.i.OPEN24H;
            }
          }
        }
        return (
          (t.FAST_CHARGE_FILE_NAME = "E621_navigation_fast_charge.webp"),
          (t.NODIESEL_FILE_NAME = "E93C_navigation_fuelstation_no_diesel.webp"),
          (t.NOCNG_FILE_NAME = "E93B_navigation_fuelstation_no_cng.webp"),
          (t.OPEN24H_FILE_NAME = "E61E_navigation_opened_24hours.webp"),
          (t.ENTRY_FLAG_ORDER = [
            i.i.FASTCHARGE,
            i.i.NODIESEL,
            i.i.NOCNG,
            i.i.OPEN24H,
          ]),
          t
        );
      })();
    },
    VUTu: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return v;
      }),
        n.d(e, "b", function () {
          return N;
        }));
      var i = n("kZht"),
        l = n("HVUF"),
        a = n("B3Zb"),
        o = n("yNay"),
        r = n("8TlW"),
        s = n("fu7d"),
        u = n("bou3"),
        c = n("ijxY"),
        d = n("Xo58"),
        b = n("m3Ja"),
        h = n("r+e+"),
        g = n("bmFL"),
        p = n("T8E5"),
        f = n("An66"),
        _ = n("gKAS"),
        m = n("Brsi"),
        v =
          (n("nK9R"),
          n("qzuC"),
          n("8yWk"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);position:relative;display:flex;flex-direction:row;flex:0 0 auto;color:#fff;height:119px;border-style:solid;border-width:0 0 2px;border-image:linear-gradient(90deg,hsla(0,0%,87.1%,.7) 0,hsla(0,0%,87.1%,.9) 36%,hsla(0,0%,87.1%,.4)) 1 1;z-index:10;transform:translateZ(0)}[_nghost-%COMP%]   .fpk-stage-big[_nghost-%COMP%], .fpk-stage-big   [_nghost-%COMP%], [_nghost-%COMP%]   .fpk-stage-small[_nghost-%COMP%], .fpk-stage-small   [_nghost-%COMP%]{border:none}[_nghost-%COMP%]     au3-button .button__text{font-size:30px}[_nghost-%COMP%]:after{content:"";position:absolute;bottom:-7px;left:0;width:100%;height:5px;background:linear-gradient(180deg,#000,transparent)}.tl--text-only[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{border-left:0}.tl--no-dividing-border[_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%], .tl--no-dividing-border[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{border-image:none;border-style:none}.title-line__content--left[_ngcontent-%COMP%]{display:inline-flex;flex-direction:row;align-self:center;margin-right:auto}.title-line__breadcrumbs[_ngcontent-%COMP%]{position:absolute;align-self:center;margin-right:2px}.title-line__content-wrapper--center[_ngcontent-%COMP%]{position:relative;flex:1 0 0;align-self:center;font-size:40px;height:119px;border-style:solid;border-image:linear-gradient(0deg,hsla(0,0%,100%,.7),transparent 80%) 1 2%;display:flex;flex-direction:row}.title-line__content-wrapper--center[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-1px;width:2px;height:2px;background:#000}.title-line__content--center[_ngcontent-%COMP%]{position:relative;flex:1 0 0}.title-line__loader[_ngcontent-%COMP%]{padding-top:12px;display:block;opacity:0;overflow:hidden}.title-line__loader--visible[_ngcontent-%COMP%]{opacity:1}.title-line__loader--display-none[_ngcontent-%COMP%]{display:none}.steering-wheel-left[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{margin-right:2px;border-width:0 0 0 1px}.steering-wheel-left[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after, .steering-wheel-left   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after{left:auto;right:-2px}.steering-wheel-left[_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%]{padding:0 0 0 30px}.steering-wheel-right[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{margin-left:2px;border-width:0 1px 0 0}.steering-wheel-right[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after, .steering-wheel-right   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after{left:-2px;right:auto}.steering-wheel-right[_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%]{padding:0 30px 0 0}.title-line__content--right[_ngcontent-%COMP%]{display:inline-flex;flex-direction:row;align-self:center;text-align:end}.content__title[_ngcontent-%COMP%]{position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:100%;height:100%;padding:12px 20px 0}.content__title--loader[_ngcontent-%COMP%]{padding-left:20px}.content__title--primary[_ngcontent-%COMP%]{color:var(--current-context);font-size:30px;width:100%}.content__title--primary[_ngcontent-%COMP%], .content__title--secondary[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.component-layout-arabic[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{direction:rtl}.component-layout-latin[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{direction:ltr}.secondary-title__wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;flex:1 1 0;overflow:hidden;max-width:100%;width:100%}.content__title--icon[_ngcontent-%COMP%]{margin:0 30px 0 10px}.content__title--separator[_ngcontent-%COMP%]{padding:0 22px;color:var(--current-context)}@media (max-width:1280px){.content__title[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.content__title--loader[_ngcontent-%COMP%]{padding-left:20px}.content__title--primary[_ngcontent-%COMP%]{font-size:30px;width:100%}.content__title--separator[_ngcontent-%COMP%]{display:none}}.title-line__content--text-input[_ngcontent-%COMP%]{position:relative;flex:1;display:flex;align-items:flex-end;min-width:0;direction:ltr;font-size:40px;height:calc(100% + 2px);padding:0 30px;border-style:solid;border-image:linear-gradient(0deg,hsla(0,0%,100%,.7),transparent 80%) 1 2%}.title-line__content--text-input[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;bottom:0;height:2px;width:100%;background-color:#000}.title-line__content--hidden[_ngcontent-%COMP%]{display:none}.steering-wheel-left[_nghost-%COMP%], .steering-wheel-left   [_nghost-%COMP%]{direction:ltr}.steering-wheel-left[_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%]{border-width:0 0 0 1px}.steering-wheel-right[_nghost-%COMP%], .steering-wheel-right   [_nghost-%COMP%]{direction:rtl}.steering-wheel-right[_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%]{border-width:0 1px 0 0}',
              ],
            ],
            data: {},
          }));
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
              1,
              "au3-icon",
              [
                ["class", "title-line__breadcrumbs"],
                ["fileName", "E163_breadcrump_back.webp"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(
              1,
              4243456,
              null,
              0,
              a.b,
              [o.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (t, e) {
            t(
              e,
              1,
              0,
              "E163_breadcrump_back.webp",
              e.component.iconCategoryBreadcrumb,
            );
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 1).iconComponentHidden);
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
              1,
              "div",
              [["class", "title-line__content--text-input"]],
              [[2, "title-line__content--text-input-no-right-padding", null]],
              null,
              null,
              null,
              null,
            )),
            i.Mb(null, 1),
          ],
          null,
          function (t, e) {
            t(e, 0, 0, e.component.hideRightPadding);
          },
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
              r.b,
              r.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [i.l, i.D, u.a, o.a, [3, s.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              2,
              16384,
              null,
              0,
              c.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            i.xb(
              3,
              245760,
              null,
              0,
              d.a,
              [[6, s.a], b.a, i.h, i.l, i.D, [2, h.a], [2, c.a], [2, g.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, n.primaryId, n.primaryIdEnumType),
              t(
                e,
                2,
                0,
                !n.hasPrimaryText ||
                  !(n.primaryIdEnumType || n.primaryDeveloperText),
              ),
              t(
                e,
                3,
                0,
                n.primaryDeveloperText,
                n.primaryId,
                n.primaryNonI18nText,
              ));
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
              2,
              "au3-icon",
              [
                ["class", "content__title--icon"],
                ["ttDoNotToggle", ""],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(
              1,
              16384,
              null,
              0,
              p.a,
              [],
              { ttDoNotToggleDynamicValue: [0, "ttDoNotToggleDynamicValue"] },
              null,
            ),
            i.xb(
              2,
              4243456,
              null,
              0,
              a.b,
              [o.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, !n.possibleIcon),
              t(e, 2, 0, n.icon, n.iconCategoryBreadcrumb));
          },
          function (t, e) {
            t(e, 0, 0, i.Nb(e, 2).iconComponentHidden);
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
            i.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [i.l, i.D, u.a, o.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (t()(),
            i.yb(
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
              r.b,
              r.a,
            )),
            i.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [i.l, i.D, u.a, o.a, [3, s.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              4,
              16384,
              null,
              0,
              c.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            i.xb(
              5,
              245760,
              null,
              0,
              d.a,
              [[6, s.a], b.a, i.h, i.l, i.D, [2, h.a], [2, c.a], [2, g.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, y)),
            i.xb(
              7,
              16384,
              null,
              0,
              f.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "SecondaryText"),
              t(e, 3, 0, n.secondaryId, n.secondaryIdEnumType),
              t(
                e,
                4,
                0,
                !n.hasSecondaryText ||
                  !(n.secondaryIdEnumType || n.secondaryDeveloperText),
              ),
              t(
                e,
                5,
                0,
                n.secondaryDeveloperText,
                n.secondaryId,
                n.secondaryNonI18nText,
              ),
              t(e, 7, 0, !!n.icon));
          },
          function (t, e) {
            t(
              e,
              2,
              0,
              i.Nb(e, 5).backgroundColor,
              i.Nb(e, 5).fixedNumberOfLines,
              i.Nb(e, 5).mayContainLatinCharsForArabic,
              i.Nb(e, 5).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function S(t) {
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
              "au3-title-line-loader-item",
              [["class", "title-line__loader"]],
              [
                [2, "title-line__loader--display-none", null],
                [2, "title-line__loader--visible", null],
              ],
              null,
              null,
              _.b,
              _.a,
            )),
            i.xb(
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
          function (t, e) {
            t(e, 1, 0, e.component.loaderActive);
          },
          function (t, e) {
            var n = e.component;
            t(e, 0, 0, !n.textToolHasLoader, n.loaderActive);
          },
        );
      }
      function L(t) {
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
              "div",
              [["class", "title-line__content-wrapper--center"]],
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
              5,
              "div",
              [["class", "title-line__content--center"]],
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
              4,
              "div",
              [["class", "content__title"]],
              [[2, "content__title--loader", null]],
              null,
              null,
              null,
              null,
            )),
            (t()(), i.hb(16777216, null, null, 1, null, P)),
            i.xb(
              4,
              16384,
              null,
              0,
              f.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, M)),
            i.xb(
              6,
              16384,
              null,
              0,
              f.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, S)),
            i.xb(
              8,
              16384,
              null,
              0,
              f.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 4, 0, n.hasPrimaryText),
              t(e, 6, 0, n.hasSecondaryText),
              t(e, 8, 0, n.hasLoader));
          },
          function (t, e) {
            t(e, 2, 0, e.component.hasLoader);
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
      function I(t) {
        return i.ac(
          0,
          [i.Mb(null, 3), (t()(), i.hb(0, null, null, 0))],
          null,
          null,
        );
      }
      function E(t) {
        return i.ac(
          0,
          [i.Mb(null, 4), (t()(), i.hb(0, null, null, 0))],
          null,
          null,
        );
      }
      function N(t) {
        return i.ac(
          2,
          [
            (t()(), i.hb(16777216, null, null, 1, null, x)),
            i.xb(
              1,
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
            i.Mb(null, 0),
            (t()(), i.hb(16777216, null, null, 2, null, O)),
            i.xb(
              5,
              540672,
              null,
              0,
              f.r,
              [i.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            i.Pb(131072, f.b, [i.h]),
            (t()(), i.hb(16777216, null, null, 1, null, C)),
            i.xb(
              8,
              16384,
              null,
              0,
              f.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), i.hb(0, [["center", 2]], null, 0, null, L)),
            (t()(),
            i.yb(
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
            i.Mb(null, 2),
            (t()(), i.hb(16777216, null, null, 2, null, T)),
            i.xb(
              13,
              540672,
              null,
              0,
              f.r,
              [i.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            i.Pb(131072, f.b, [i.h]),
            (t()(), i.hb(0, [["done", 2]], null, 0, null, I)),
            (t()(), i.hb(0, [["edit", 2]], null, 0, null, E)),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, n.showBreadcrumbsIcon),
              t(
                e,
                5,
                0,
                i.Yb(e, 5, 0, i.Nb(e, 6).transform(n.editButtonLeft$))
                  ? i.Nb(e, 16)
                  : i.Nb(e, 15),
              ),
              t(e, 8, 0, n.hasTextInput, i.Nb(e, 9)),
              t(
                e,
                13,
                0,
                i.Yb(e, 13, 0, i.Nb(e, 14).transform(n.editButtonLeft$))
                  ? i.Nb(e, 15)
                  : i.Nb(e, 16),
              ));
          },
          null,
        );
      }
    },
    Z2XD: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return l;
      }),
        n.d(e, "b", function () {
          return a;
        }));
      var i = n("kZht"),
        l =
          (n("y9xZ"),
          n("yNay"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;padding:16px 48px 25px}.steering-wheel-left[_nghost-%COMP%], .steering-wheel-left   [_nghost-%COMP%]{padding-right:56px}.steering-wheel-right[_nghost-%COMP%], .steering-wheel-right   [_nghost-%COMP%]{padding-left:56px}",
              ],
            ],
            data: {},
          }));
      function a(t) {
        return i.ac(0, [i.Mb(null, 0)], null, null);
      }
    },
    cvJE: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "FavoritesModuleNgFactory", function () {
          return wt;
        }),
        n.d(e, "FavoritesScreenModuleNgFactory", function () {
          return At;
        }));
      var i = n("kZht"),
        l = n("uz0P"),
        a = n("An66"),
        o = n("aDqW"),
        r = n("/W5r"),
        s = n("+Qv1"),
        u = n("XtoR"),
        c = n("jTHl"),
        d = n("zL3T"),
        b = n("cVBI"),
        h = n("rWDF"),
        g = n("yNay"),
        p = n("toYF"),
        f = n("I9JC"),
        _ = n("5hwk"),
        m = n("OPvi"),
        v = n("+epw"),
        x = n("zMPs"),
        O = n("6Yk8"),
        C = n("u6+O"),
        P = n("CIQC"),
        y = n("REmV"),
        M = n("Y3N+"),
        S = n("MJxn"),
        L = n("eIOF"),
        T = n("t+4g"),
        I = n("myjn"),
        E = n("fOZ7"),
        N = n("QDrj"),
        w = n("YCQm"),
        A = n("mAkA"),
        F = n("PCQ1"),
        D = n("C9Ky"),
        k = n("8WOv"),
        R = n("fu7d"),
        H = n("bou3"),
        z = n("bMuc"),
        V = n("ZIdM"),
        $ = n("3bpu"),
        j = n("6zvu"),
        B = n("VcEz"),
        Y = n("OtM5"),
        G = n("y9xZ"),
        U = n("+sw+"),
        Z = n("BMrr"),
        X = n("IEns"),
        W = n("z6QT"),
        J = n("flsk"),
        K = n("FQEI"),
        Q = n("O82V"),
        q = n("Eln4"),
        tt = n("evAh"),
        et = n("zPMi"),
        nt = n("CpzC"),
        it = n("0Bsn"),
        lt = n("5GjX"),
        at = n("mYyF"),
        ot = n("v98a"),
        rt = n("aOG8"),
        st = n("Krzs"),
        ut = n("Z2XD"),
        ct = n("VUTu"),
        dt = n("nK9R"),
        bt = n("qzuC"),
        ht = n("8yWk"),
        gt = n("u0Qd"),
        pt = n("EWkU"),
        ft = n("007S"),
        _t = n("M+lD"),
        mt = n("llYL"),
        vt = n("OJ7R"),
        xt = n("McXt"),
        Ot = n("YtkY"),
        Ct = n("Yi6/");
      class Pt {
        constructor(t, e, n) {
          ((this.favoritesService = t),
            (this.displayService = e),
            (this.IconCategory = Ct.Z),
            (this.ttMode = Ct.gd.textToolMode),
            (this.isConfigurationModeActive = !1),
            (this.favorites$ = this.favoritesService.favoritesTileOrder$.pipe(
              Object(Ot.a)((t) => t.map((t) => ({ type: t }))),
            )),
            (this.logger = n.getLogger("favorites.FavoritesScreenComponent")));
        }
        finishEditing() {
          (this.logger.info("Finish editing saved favorites lists."),
            this.favorites.finishConfigMode());
          const t = this.favorites.favoriteLists.map((t) => t.type);
          this.favoritesService.persistFavoritesTileOrder(t);
        }
      }
      var yt = i.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;width:100%;font-size:40px}.favorites[_ngcontent-%COMP%]{height:calc(100% - 119px)}.favorites-screen__titleline--done-button[_ngcontent-%COMP%]{min-width:141px;max-width:191px}",
          ],
        ],
        data: {},
      });
      function Mt(t) {
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
              "au3-title-line-item",
              [
                ["class", "favorites-screen__titleline--done-button"],
                ["id", "finish-configuration-mode"],
                ["left", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "mib3Tap" === e &&
                    (i = !1 !== t.component.finishEditing() && i),
                  i
                );
              },
              k.b,
              k.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [i.l, i.D, H.a, g.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(2, 147456, null, 0, z.a, [i.l, i.z], null, null),
            i.xb(
              3,
              147456,
              null,
              0,
              V.a,
              [z.a, [2, $.a], [2, R.a], g.a],
              null,
              null,
            ),
            i.xb(
              4,
              212992,
              null,
              0,
              j.a,
              [
                g.a,
                B.b,
                V.a,
                [2, $.a],
                [2, R.a],
                [2, Y.a],
                [2, G.a],
                [2, U.a],
                i.z,
                Z.a,
                i.l,
                [2, X.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.Sb(131584, null, W.a, W.a, [[3, W.a]]),
            i.xb(
              6,
              4407296,
              null,
              0,
              J.a,
              [
                i.l,
                K.a,
                i.h,
                W.a,
                [2, Q.a],
                [2, $.b],
                [2, $.a],
                [2, q.a],
                [2, tt.a],
              ],
              null,
              null,
            ),
            i.xb(
              7,
              49152,
              null,
              0,
              et.a,
              [[2, Y.a]],
              {
                hasText: [0, "hasText"],
                text: [1, "text"],
                hasOnlyText: [2, "hasOnlyText"],
              },
              null,
            ),
            i.xb(
              8,
              147456,
              null,
              0,
              nt.a,
              [
                [2, j.a],
                [2, Y.a],
                [2, it.a],
                [2, J.a],
                [2, lt.b],
                i.l,
                at.a,
                ot.b,
              ],
              null,
              null,
            ),
            i.xb(
              9,
              147456,
              null,
              0,
              rt.a,
              [[2, J.a], [2, j.a], [2, B.b], st.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "finish-configuration-mode"),
              t(e, 4, 0),
              t(e, 6, 0),
              t(e, 7, 0, !0, "Fertig", !0));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              i.Nb(e, 6).markerClassEnabled,
              i.Nb(e, 7).useItemPlaceholder,
            );
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
              10,
              "au3-screen",
              [
                ["class", "favorites-screen"],
                ["id", "Screen:FAVORITES"],
              ],
              null,
              null,
              null,
              ut.b,
              ut.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [i.l, i.D, H.a, g.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(2, 4440064, null, 0, G.a, [g.a], { id: [0, "id"] }, null),
            (t()(),
            i.yb(
              3,
              0,
              null,
              0,
              4,
              "au3-title-line",
              [["id", "FavoritesScreenTitle"]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              ct.b,
              ct.a,
            )),
            i.xb(
              4,
              212992,
              null,
              0,
              R.a,
              [i.l, i.D, H.a, g.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              5,
              49152,
              null,
              0,
              dt.a,
              [bt.a, ht.a],
              {
                hasPrimaryText: [0, "hasPrimaryText"],
                primaryDeveloperText: [1, "primaryDeveloperText"],
                hasSecondaryText: [2, "hasSecondaryText"],
              },
              null,
            ),
            (t()(), i.hb(16777216, null, 0, 1, null, Mt)),
            i.xb(
              7,
              16384,
              null,
              0,
              a.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(),
            i.yb(
              8,
              0,
              null,
              0,
              2,
              "au3-favorites",
              [["class", "favorites"]],
              [[2, "favorites--configuration-mode", null]],
              [[null, "configurationModeActiveChange"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "configurationModeActiveChange" === e &&
                    (i =
                      !1 !== (t.component.isConfigurationModeActive = n) && i),
                  i
                );
              },
              gt.b,
              gt.a,
            )),
            i.xb(
              9,
              4440064,
              [[1, 4]],
              0,
              pt.a,
              [at.a, ft.a, _t.a, mt.a, i.h, bt.a, g.a],
              {
                favoriteLists: [0, "favoriteLists"],
                configurationModeActive: [1, "configurationModeActive"],
              },
              {
                configurationModeActiveChange: "configurationModeActiveChange",
              },
            ),
            i.Pb(131072, a.b, [i.h]),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "Screen:FAVORITES"),
              t(e, 2, 0, "Screen:FAVORITES"),
              t(e, 4, 0, "FavoritesScreenTitle"),
              t(e, 5, 0, !0, "Favoriten", !1),
              t(e, 7, 0, n.isConfigurationModeActive),
              t(
                e,
                9,
                0,
                i.Yb(e, 9, 0, i.Nb(e, 10).transform(n.favorites$)),
                n.isConfigurationModeActive,
              ));
          },
          function (t, e) {
            (t(
              e,
              3,
              0,
              i.Nb(e, 5).hideLeftBorder,
              i.Nb(e, 5).hideDividingBorders,
            ),
              t(e, 8, 0, i.Nb(e, 9).configurationModeActive));
          },
        );
      }
      function Lt(t) {
        return i.ac(
          0,
          [
            i.Tb(671088640, 1, { favorites: 0 }),
            (t()(), i.hb(16777216, null, null, 1, null, St)),
            i.xb(
              2,
              540672,
              null,
              0,
              vt.a,
              [g.a, i.P, i.L],
              { ttStaticIf: [0, "ttStaticIf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 2, 0, !n.ttMode || n.displayService.isHighResolution);
          },
          null,
        );
      }
      function Tt(t) {
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
              "au3-favorites-screen",
              [],
              null,
              null,
              null,
              Lt,
              yt,
            )),
            i.xb(1, 49152, null, 0, Pt, [xt.a, ot.b, g.a], null, null),
          ],
          null,
          null,
        );
      }
      var It = i.ub("au3-favorites-screen", Pt, Tt, {}, {}, []),
        Et = n("1VvW"),
        Nt = n("p9XA"),
        wt = i.vb(l.a, [], function (t) {
          return i.Kb([
            i.Lb(512, i.j, i.X, [[8, []], [3, i.j], i.x]),
            i.Lb(4608, a.m, a.l, [i.u]),
            i.Lb(4608, o.h, o.g, []),
            i.Lb(4608, o.d, o.f, []),
            i.Lb(4608, o.j, o.e, []),
            i.Lb(4608, o.c, o.b, []),
            i.Lb(4608, o.k, o.k, [o.l, o.h, o.d, o.j, o.c, o.m, o.o, o.n, o.a]),
            i.Lb(4608, r.b, r.b, [s.e, [2, r.a]]),
            i.Lb(4608, u.b, u.b, [s.e, [2, u.a]]),
            i.Lb(4608, c.b, c.b, [s.e, [2, c.a]]),
            i.Lb(4608, d.b, d.b, [s.e, [2, d.a]]),
            i.Lb(4608, b.a, b.a, [h.b, g.a]),
            i.Lb(4608, p.a, p.a, [f.a, h.b, g.a]),
            i.Lb(4608, _.a, _.a, [m.a, g.a]),
            i.Lb(1073742336, a.c, a.c, []),
            i.Lb(1073742336, o.i, o.i, []),
            i.Lb(1073742336, v.a, v.a, []),
            i.Lb(1073742336, x.a, x.a, []),
            i.Lb(1073742336, O.a, O.a, []),
            i.Lb(1073742336, C.a, C.a, []),
            i.Lb(1073742336, P.a, P.a, []),
            i.Lb(1073742336, y.a, y.a, []),
            i.Lb(1073742336, M.a, M.a, []),
            i.Lb(1073742336, S.a, S.a, []),
            i.Lb(1073742336, L.a, L.a, []),
            i.Lb(1073742336, T.a, T.a, []),
            i.Lb(1073742336, I.a, I.a, []),
            i.Lb(1073742336, E.a, E.a, []),
            i.Lb(1073742336, N.a, N.a, []),
            i.Lb(1073742336, w.a, w.a, []),
            i.Lb(1073742336, A.a, A.a, []),
            i.Lb(1073742336, F.a, F.a, []),
            i.Lb(1073742336, l.a, l.a, []),
            i.Lb(256, o.o, void 0, []),
            i.Lb(256, o.m, void 0, []),
            i.Lb(256, o.n, void 0, []),
            i.Lb(256, o.a, void 0, []),
          ]);
        }),
        At = i.vb(l.b, [], function (t) {
          return i.Kb([
            i.Lb(512, i.j, i.X, [[8, [D.a, It]], [3, i.j], i.x]),
            i.Lb(4608, a.m, a.l, [i.u]),
            i.Lb(4608, o.h, o.g, []),
            i.Lb(4608, o.d, o.f, []),
            i.Lb(4608, o.j, o.e, []),
            i.Lb(4608, o.c, o.b, []),
            i.Lb(4608, o.k, o.k, [o.l, o.h, o.d, o.j, o.c, o.m, o.o, o.n, o.a]),
            i.Lb(4608, r.b, r.b, [s.e, [2, r.a]]),
            i.Lb(4608, u.b, u.b, [s.e, [2, u.a]]),
            i.Lb(4608, c.b, c.b, [s.e, [2, c.a]]),
            i.Lb(4608, d.b, d.b, [s.e, [2, d.a]]),
            i.Lb(4608, b.a, b.a, [h.b, g.a]),
            i.Lb(4608, p.a, p.a, [f.a, h.b, g.a]),
            i.Lb(4608, _.a, _.a, [m.a, g.a]),
            i.Lb(1073742336, a.c, a.c, []),
            i.Lb(1073742336, o.i, o.i, []),
            i.Lb(1073742336, v.a, v.a, []),
            i.Lb(1073742336, x.a, x.a, []),
            i.Lb(1073742336, O.a, O.a, []),
            i.Lb(1073742336, C.a, C.a, []),
            i.Lb(1073742336, P.a, P.a, []),
            i.Lb(1073742336, y.a, y.a, []),
            i.Lb(1073742336, M.a, M.a, []),
            i.Lb(1073742336, S.a, S.a, []),
            i.Lb(1073742336, L.a, L.a, []),
            i.Lb(1073742336, T.a, T.a, []),
            i.Lb(1073742336, I.a, I.a, []),
            i.Lb(1073742336, E.a, E.a, []),
            i.Lb(1073742336, N.a, N.a, []),
            i.Lb(1073742336, w.a, w.a, []),
            i.Lb(1073742336, A.a, A.a, []),
            i.Lb(1073742336, F.a, F.a, []),
            i.Lb(1073742336, l.a, l.a, []),
            i.Lb(1073742336, Et.n, Et.n, [
              [2, Et.s],
              [2, Et.m],
            ]),
            i.Lb(1073742336, l.b, l.b, []),
            i.Lb(256, o.o, void 0, []),
            i.Lb(256, o.m, void 0, []),
            i.Lb(256, o.n, void 0, []),
            i.Lb(256, o.a, void 0, []),
            i.Lb(
              1024,
              Et.k,
              function () {
                return [[{ path: "", component: Pt, canActivate: [Nt.a] }]];
              },
              [],
            ),
          ]);
        });
    },
    nqvY: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return u;
      }),
        n.d(e, "b", function () {
          return c;
        }));
      var i = n("MddD"),
        l = n("Yi6/"),
        a = n("4C60"),
        o = n("RoxU"),
        r = n("kGpN"),
        s = n("7f94"),
        u = (function (t) {
          return (
            (t.FAVORITE = "FAVORITE"),
            (t.HOME = "HOME"),
            (t.BUSINESS = "BUSINESS"),
            t
          );
        })({});
      let c = (() => {
        class t {
          constructor(t, e) {
            ((this.addressFormattingService = t),
              (this.displayService = e),
              (this.distanceFormattingRule = r.a.DistanceToDestination),
              (this.sourceUnit = l.vc.METERS),
              (this.ICON_CATEGORY_LIST = l.Z.List),
              (this.uiStateType = l.uc.ListHorizontal),
              (this.noAddressTextLine2 = "Keine Adresse hinterlegt"),
              (this.entryFlagList = []),
              (this.isGoogleLocation = !1),
              (this.dopiData = void 0),
              (this.hasEditModeMoveHandle = !0),
              (this.isEditModeActive = !1),
              (this.lineNumber = void 0),
              (this._showLineNumber = !1),
              (this.favoriteTypeEnum = u),
              (this.developerTextLine1 = l.gd.textToolMode
                ? "HomeBusinessAddress"
                : void 0),
              (this.developerTextLine2 = l.gd.textToolMode
                ? this.noAddressTextLine2
                : void 0),
              (this.hasDistanceValue = s.c),
              (this.getDistanceValue = s.a),
              (this.getLineNumberIcon = s.b));
          }
          set destination(e) {
            if ((this.initDestinationInfos(e), e))
              switch (((this.itemType = e.type), e.type)) {
                case u.HOME:
                  ((this.developerTextLine1 = t.LINE1_HOME),
                    this.formatHomeBusinessAddress(e.destination),
                    (this.iconFileName = t.ICON_HOME));
                  break;
                case u.BUSINESS:
                  ((this.developerTextLine1 = t.LINE1_BUSINESS),
                    this.formatHomeBusinessAddress(e.destination),
                    (this.iconFileName = t.ICON_BUSINESS));
                  break;
                default:
                  ((this.developerTextLine1 = void 0),
                    (this.developerTextLine2 = void 0),
                    this.formatFavoriteAddress(e.destination),
                    (this.iconFileName = t.ICON_FAVORITE));
              }
          }
          set showLineNumber(t) {
            this._showLineNumber = t && this.displayService.isHighResolution;
          }
          get showLineNumber() {
            return this._showLineNumber;
          }
          initDestinationInfos(t) {
            if (t && t.destination) {
              const e = t.destination.location;
              if (
                ((this.isGoogleLocation = e.provider === i.j.GOOGLE),
                e.poiInfos && e.poiInfos.length > 0)
              ) {
                const t = e.poiInfos.map((t) =>
                  o.a.locationObjectPoiInfosToSearchresultObjectPoiInfos(t),
                );
                this.entryFlagList = t
                  .filter((t) => o.a.entryIsAllowed(t))
                  .sort((t, e) => o.a.compareEntryFlags(t, e));
              } else this.entryFlagList = [];
            } else ((this.isGoogleLocation = !1), (this.entryFlagList = []));
          }
          formatHomeBusinessAddress(t) {
            t && t.location
              ? ((this.developerTextLine2 = void 0),
                (this.nonI18nTextLine2 = this.addressFormattingService.getLines(
                  1,
                  Object(a.a)(t.location),
                )[0]))
              : ((this.developerTextLine2 = this.noAddressTextLine2),
                (this.nonI18nTextLine2 = void 0));
          }
          formatFavoriteAddress(t) {
            if (t && t.location) {
              const e = this.addressFormattingService.getLines(
                2,
                Object(a.a)(t.location),
              );
              ((this.nonI18nTextLine1 = e[0]), (this.nonI18nTextLine2 = e[1]));
            } else ((this.nonI18nTextLine1 = ""), (this.nonI18nTextLine2 = ""));
          }
        }
        return (
          (t.ICON_FAVORITE = "E0FC_favoriten.webp"),
          (t.ICON_BUSINESS = "E800_destination_business.webp"),
          (t.ICON_HOME = "EA1A_navigation_home.webp"),
          (t.LINE1_HOME = "Heimatadresse"),
          (t.LINE1_BUSINESS = "Gesch\xe4ftadresse"),
          t
        );
      })();
    },
    xS3h: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return u;
      }),
        n.d(e, "b", function () {
          return c;
        }));
      var i = n("Hnhs"),
        l = n("Yi6/"),
        a = n("kZht"),
        o = n("bou3"),
        r = n("sg2e"),
        s = n("yNay"),
        u = (function (t) {
          return (
            (t.saveShortcut = "Shortcut\nspeichern"),
            (t.SaveFavorite = "Favorit\nspeichern"),
            t
          );
        })({});
      let c = (() => {
        class t {
          constructor(t, e, n, i) {
            ((this.globalShortcutsService = t),
              (this.systemConfigService = e),
              (this.popupService = n),
              (this.initialSaveShortcutOption = {
                icon: "E3F0_save_shortcut_preset.webp",
                developerText: "Shortcut\nspeichern",
                visible: !1,
                enabled: !0,
                textId: u.saveShortcut,
              }),
              (this.logger = i.getLogger("main.ShortcutsOptionsService")));
          }
          saveShortcut(t) {
            return this.globalShortcutsService
              .addShortcut(t)
              .then((e) => {
                e === i.c.Saved
                  ? (this.logger.info(
                      `saveShortcut: Saved shortcut "${t.name}"`,
                    ),
                    this.popupService
                      .request(l.Ob.POPUP_TOAST_PRESET_SAVED)
                      .then((t) =>
                        this.logger.debug(
                          "saveShortcut: Show toast for successful saving of shortcut",
                          t,
                        ),
                      ))
                  : this.logger.warn(
                      `saveShortcut: Could not save shortcut "${t.name}"`,
                      e,
                    );
              })
              .catch((e) =>
                this.logger.error(
                  `saveShortcut: Could not save shortcut "${t.name}"`,
                  e,
                ),
              );
          }
          saveShortcutOption(t) {
            const e = this.globalShortcutsService.checkDuplicateShortcut(t);
            let n = void 0;
            return (
              this.globalShortcutsService.checkMaximumSavedShortcuts(t)
                ? (n = l.Ob.POPUP_TOAST_PRESET_MAXIMUM_PRESETS_SAVED)
                : e && (n = l.Ob.POPUP_TOAST_PRESET_ALREADY_SAVED),
              Object.assign(
                {},
                this.initialSaveShortcutOption,
                { disabledReason: n },
                { enabled: null == n },
                { visible: this.shortcutsAvailable },
              )
            );
          }
          get shortcutsAvailable() {
            return this.systemConfigService.isDualDisplay();
          }
        }
        return (
          (t.ɵprov = a.bc({
            factory: function () {
              return new t(a.cc(i.a), a.cc(o.a), a.cc(r.a), a.cc(s.a));
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
