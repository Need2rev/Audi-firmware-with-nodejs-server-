(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    C3G4: function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return s;
      }),
        i.d(e, "b", function () {
          return r;
        }));
      var n = i("Yi6/"),
        l = (i("/mWE"), i("xS3h"), i("xVbo")),
        a = i("YtkY"),
        s =
          (i("DmXr"),
          (function (t) {
            return (
              (t[(t.RouteItem = 0)] = "RouteItem"),
              (t[(t.RouteSwitchItem = 1)] = "RouteSwitchItem"),
              (t[(t.SwitchItem = 2)] = "SwitchItem"),
              t
            );
          })({})),
        o = (function (t) {
          return ((t.ShortCut = "ShortCut"), (t.Favorite = "Favorite"), t);
        })({});
      class r {
        constructor(t, e, i, s, r) {
          ((this.optionMenuService = e),
            (this.shortcutsOptionsService = i),
            (this.carFavoritesService = s),
            (this.carShortcutsService = r),
            (this.logger = t.getLogger("car.CarOptionsService")),
            (this.options$ = this.optionMenuService.item$.pipe(
              Object(l.a)(n.wd),
              Object(a.a)((t) =>
                this.carShortcutsService.carShortcuts.get(t.setting),
              ),
              Object(a.a)((t) => {
                if (!t) return [];
                const e = this.shortcutsOptionsService.saveShortcutOption(t),
                  i = this.carFavoritesService.saveFavoriteOption(t);
                return (
                  (e.carOptionType = o.ShortCut),
                  (i.carOptionType = o.Favorite),
                  [i, e]
                );
              }),
            )));
        }
        onOptionTap(t) {
          const e = t.item,
            i = this.carShortcutsService.carShortcuts.get(e.setting);
          if (i)
            switch (t.option.carOptionType) {
              case o.ShortCut:
                this.shortcutsOptionsService.saveShortcut(i);
                break;
              case o.Favorite:
                this.carFavoritesService.addFavorite(i.name, !0);
            }
          else this.logger.warn(`Could not find car shortcut "${e.setting}"`);
        }
      }
    },
    DmXr: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return O;
      });
      var n = i("Hnhs"),
        l = i("YtkY"),
        a = i("Ohay"),
        s = i("kuMc"),
        o = i("mWib"),
        r = i("7SLS"),
        u = i("TLy2"),
        c = i("8j5Y"),
        h = i("/mWE"),
        g = i("T9XR"),
        b = i("C05f"),
        d = i("QQZH"),
        p = i("HM3f"),
        v = i("g6G6"),
        m = i("maAS"),
        f = i("+3WC"),
        S = i("Yi6/"),
        x = i("AEBN"),
        I = i("xS3h"),
        T = i("kZht"),
        y = i("snOA"),
        _ = i("sg2e"),
        C = i("yNay");
      let O = (() => {
        class t {
          constructor(t, e, i, n, s) {
            ((this.shortCutService = t),
              (this.carShortCutService = e),
              (this.persistence = i),
              (this.popupService = n),
              (this.initialSaveFavoriteOption = {
                icon: "E16E_addressbook_save_as_favorite.webp",
                developerText: I.a.SaveFavorite,
                visible: !1,
                enabled: !0,
                textId: I.a.SaveFavorite,
              }),
              (this.carShortCuts$ = this.shortCutService.shortcuts$.pipe(
                Object(l.a)((t) =>
                  t.filter((t) => t.type === f.a.Car && t.name !== m.a.INVALID),
                ),
                Object(a.a)(
                  (t, e) =>
                    t.length === e.length && t.every((t, i) => t === e[i]),
                ),
              )),
              (this.initialized$$ = new b.a(!1)),
              (this.initialized$ = this.initialized$$
                .asObservable()
                .pipe(Object(a.a)())),
              (this.carFavorites$$ = new b.a([])),
              (this.carFavorites$ = this.carFavorites$$.asObservable()),
              (this.destroy$$ = new d.a(1)),
              (this.logger = s.getLogger("car.favorites.service")),
              this.init());
          }
          init() {
            (this.setupFavorites(), this.setupTriggerDelete());
          }
          setupFavorites() {
            const t = this.persistence
              .getEntry$(x.q.Car, g.a.CarFavorites, void 0)
              .pipe(
                Object(l.a)((t) => t.valueContainer || []),
                Object(l.a)((t) =>
                  t
                    .map((t) => this.carShortCutService.carShortcuts.get(t))
                    .filter((t) => !!t),
                ),
              )
              .pipe(Object(s.a)(this.destroy$$));
            (t.subscribe((t) => {
              (this.logger.info("setupFavorites carFavorites$$", () =>
                t.map((t) => t.name),
              ),
                this.carFavorites$$.next(t),
                this.initialized$$.next(!0));
            }),
              Object(p.b)(this.carShortCuts$, t)
                .pipe(Object(o.a)(400), Object(s.a)(this.destroy$$))
                .subscribe(([t, e]) => {
                  const i = t.filter((t) => !e.includes(t));
                  i.length > 0 &&
                    (this.logger.info(
                      "setupFavorites addShortcut to favorites",
                      { carShortCuts: t, carFavorites: e },
                    ),
                    this.addFavorites(
                      i.map((t) => t.name),
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
                        ? t.specialData.triggerDelete$.pipe(Object(r.a)(t.name))
                        : void 0,
                    )
                    .filter((t) => !!t),
                ),
                Object(u.a)((t) => Object(v.a)(...t)),
                Object(s.a)(this.destroy$$),
                Object(c.a)((t) => this.logger.info("setupTriggerDelete", t)),
              )
              .subscribe((t) => (t ? this.removeFavorites([t]) : void 0));
          }
          ngOnDestroy() {
            this.destroy$$.next();
          }
          addFavorite(t, e = !1) {
            this.logger.info("addFavorite", t);
            const i = this.carFavorites$$.getValue().map((t) => t.name);
            i.includes(t)
              ? e &&
                this.popupService.request(
                  S.Ob.POPUP_OPTION_STORE_FAVORITE_ALREADY_EXISTING_TOAST,
                )
              : (i.push(t),
                this.updatePersistedFavorites(i),
                e &&
                  this.popupService.request(
                    S.Ob.POPUP_OPTION_STORE_FAVORITE_TOAST,
                  ));
          }
          addFavorites(t, e) {
            this.logger.info("addFavorites", { names: t, favorites: e });
            const i = e.map((t) => t.name),
              n = t.filter((t) => !i.includes(t)),
              l = i.concat(n);
            this.updatePersistedFavorites(l);
          }
          removeFavorites(t) {
            const e = this.carFavorites$$.getValue();
            this.logger.info("removeFavorite", t);
            const i = e.map((t) => t.name).filter((e) => !t.includes(e));
            (this.updatePersistedFavorites(i),
              t.forEach((t) => {
                const i = e.find((e) => e.name === t);
                i && this.shortCutService.removeShortcut(i);
              }));
          }
          reorderFavorites(t, e) {
            this.logger.info("reorderFavorites", [t, e]);
            const i = this.carFavorites$$.getValue();
            if (t >= i.length || e >= i.length) return;
            const n = i.map((t) => t.name);
            (n.splice(t, 1),
              n.splice(e, 0, i[t].name),
              this.updatePersistedFavorites(n));
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
              this.persistence.setEntry(x.q.Car, g.a.CarFavorites, t));
          }
          saveFavoriteOption(t) {
            const e = !this.carFavorites$$.getValue().includes(t),
              i = e
                ? void 0
                : S.Ob.POPUP_OPTION_STORE_FAVORITE_ALREADY_EXISTING_TOAST.toString();
            return Object.assign(
              {},
              this.initialSaveFavoriteOption,
              { disabledReason: i },
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
          (t.ɵprov = T.bc({
            factory: function () {
              return new t(
                T.cc(n.a),
                T.cc(h.a),
                T.cc(y.a),
                T.cc(_.a),
                T.cc(C.a),
              );
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    IAcG: function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return o;
      }),
        i("maAS"));
      var n = i("Yi6/"),
        l = (i("/mWE"), i("C3G4")),
        a = i("QQZH"),
        s = i("kuMc");
      class o {
        constructor(t, e, i, n, l, s, o, r) {
          ((this.optionsMenuService = e),
            (this.longpressDirective = i),
            (this.listRouteItem = n),
            (this.listRouteSwitchItem = l),
            (this.listSwitchItem = s),
            (this.carShortcutsService = o),
            (this.popupComponent = r),
            (this.saveRouteOnly = !1),
            (this.destroy$$ = new a.a(1)),
            (this.logger = t.getLogger("car.CarShortcutsDirective")));
        }
        ngAfterViewInit() {
          this.popupComponent
            ? (this.longpressDirective.longpressDisabled = !0)
            : this.toggleSetting && this.listRouteSwitchItem
              ? ((this.longpressDirective.longpressDisabled = !0),
                (this.listRouteSwitchItem.switchLongPress.longpressDisabled =
                  !1),
                (this.listRouteSwitchItem.routeLongPress.longpressDisabled =
                  !1),
                this.listRouteSwitchItem.switchLongPress.longpress
                  .pipe(Object(s.a)(this.destroy$$))
                  .subscribe(() =>
                    this.triggerShortcutSaving(this.toggleSetting),
                  ),
                this.listRouteSwitchItem.routeLongPress.longpress
                  .pipe(Object(s.a)(this.destroy$$))
                  .subscribe(() => this.triggerShortcutSaving(this.setting)))
              : this.setting
                ? this.saveRouteOnly && this.listRouteSwitchItem
                  ? ((this.longpressDirective.longpressDisabled = !0),
                    (this.listRouteSwitchItem.routeLongPress.longpressDisabled =
                      !1),
                    this.listRouteSwitchItem.routeLongPress.longpress
                      .pipe(Object(s.a)(this.destroy$$))
                      .subscribe(() =>
                        this.triggerShortcutSaving(this.setting),
                      ))
                  : this.longpressDirective.longpress
                      .pipe(Object(s.a)(this.destroy$$))
                      .subscribe(() => this.triggerShortcutSaving())
                : (this.longpressDirective.longpressDisabled = !0);
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        triggerShortcutSaving(t = this.setting) {
          let e,
            i = "",
            a = "",
            s = !1,
            o = void 0,
            r = void 0;
          if (!t) return;
          const u = this.carShortcutsService.carShortcuts.get(t);
          if (((i = u ? u.mainInfo : ""), this.itemSettings))
            ((a = this.itemSettings.icon || ""),
              (e = this.itemSettings.type),
              (o = this.itemSettings.listItemType),
              (r = this.itemSettings.interpolateParams),
              (s = this.itemSettings.submenu));
          else if (this.listRouteItem)
            ((a = this.listRouteItem.icon),
              (e = l.a.RouteItem),
              (o = this.listRouteItem.type),
              (s = !0));
          else if (this.listRouteSwitchItem)
            ((a = this.listRouteSwitchItem.icon),
              this.toggleSetting
                ? t === this.toggleSetting
                  ? ((e = l.a.SwitchItem), (o = n.rb.ITEM_TYPE_SWITCH))
                  : ((e = l.a.RouteItem), (o = n.rb.ITEM_TYPE_SUBMENU))
                : ((e = u && u.route ? l.a.RouteItem : l.a.RouteSwitchItem),
                  (o = this.listRouteSwitchItem.type)));
          else {
            if (!this.listSwitchItem)
              return void this.logger.error(
                "Could not resolve a suitable list item to save shortcut for.",
              );
            e = l.a.SwitchItem;
          }
          const c = this.carShortcutsService.carShortcuts.get(t);
          c &&
            this.optionsMenuService.showOptionMenu({
              state$: c.setting$,
              setting: t,
              saveAsSubmenu: s,
              view: {
                icon: a,
                type: e,
                text: i,
                listItemType: o,
                interpolateParams: r,
              },
            });
        }
      }
    },
    WAXS: function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return a;
      }),
        i.d(e, "b", function () {
          return u;
        }));
      var n = i("kZht"),
        l = i("An66"),
        a =
          (i("UbWD"),
          i("E/YG"),
          i("yNay"),
          n.wb({
            encapsulation: 0,
            styles: [
              [
                '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);display:block;position:relative;height:100%;min-height:300px;padding:15px;font-size:40px;touch-action:none}.roller__items-container[_ngcontent-%COMP%]{position:absolute;top:calc(50% - 150px);width:calc(100% - 30px);height:300px;overflow:hidden;-webkit-mask-image:linear-gradient(0deg,transparent,#000,transparent);mask-image:linear-gradient(0deg,transparent,#000,transparent)}.roller__items[_ngcontent-%COMP%]{position:relative;top:calc(50% - 50px)}.roller__items-element[_ngcontent-%COMP%]{position:absolute;width:100%;height:100px;text-align:center;will-change:transform}.roller__selected-container[_ngcontent-%COMP%]{position:absolute;top:calc(50% - 50px);height:100px;border:2px solid var(--current-context);width:calc(100% - 30px)}.roller__selected-container[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;width:100%;height:100%;content:"";background-image:linear-gradient(0deg,var(--current-context),var(--current-context-alpha));opacity:.2}.roller__hit-area[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0}',
              ],
            ],
            data: {},
          }));
      function s(t) {
        return n.ac(0, [(t()(), n.hb(0, null, null, 0))], null, null);
      }
      function o(t) {
        return n.ac(
          0,
          [
            (t()(),
            n.yb(
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
            (t()(), n.hb(16777216, null, null, 2, null, s)),
            n.xb(
              2,
              540672,
              null,
              0,
              l.r,
              [n.P],
              {
                ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
                ngTemplateOutlet: [1, "ngTemplateOutlet"],
              },
              null,
            ),
            n.Qb(3, { $implicit: 0, index: 1 }),
            (t()(), n.hb(0, null, null, 0)),
          ],
          function (t, e) {
            var i = e.component,
              n = t(
                e,
                3,
                0,
                i.getDomElementContent(e.parent.context.$implicit),
                e.parent.context.index,
              );
            t(e, 2, 0, n, i.template);
          },
          null,
        );
      }
      function r(t) {
        return n.ac(
          0,
          [
            (t()(),
            n.yb(
              0,
              0,
              [
                [2, 0],
                ["rollerItem", 1],
              ],
              null,
              2,
              "div",
              [["class", "roller__items-element"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), n.hb(16777216, null, null, 1, null, o)),
            n.xb(
              2,
              16384,
              null,
              0,
              l.k,
              [n.P, n.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            t(e, 2, 0, e.component.getDomElementContent(e.context.$implicit));
          },
          null,
        );
      }
      function u(t) {
        return n.ac(
          2,
          [
            n.Tb(402653184, 1, { hitArea: 0 }),
            n.Tb(671088640, 2, { domNativeElements: 1 }),
            (t()(),
            n.yb(
              2,
              0,
              null,
              null,
              0,
              "div",
              [["class", "roller__selected-container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            n.yb(
              3,
              0,
              null,
              null,
              3,
              "div",
              [["class", "roller__items-container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            n.yb(
              4,
              0,
              null,
              null,
              2,
              "div",
              [["class", "roller__items"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), n.hb(16777216, null, null, 1, null, r)),
            n.xb(
              6,
              278528,
              null,
              0,
              l.j,
              [n.P, n.L, n.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
            (t()(),
            n.yb(
              7,
              0,
              [
                [1, 0],
                ["hitArea", 1],
              ],
              null,
              0,
              "div",
              [["class", "roller__hit-area"]],
              null,
              null,
              null,
              null,
              null,
            )),
          ],
          function (t, e) {
            t(e, 6, 0, e.component.domElements);
          },
          null,
        );
      }
    },
    cd5o: function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return b;
      }),
        i.d(e, "b", function () {
          return d;
        }));
      var n = i("kZht"),
        l = i("8TlW"),
        a = i("fu7d"),
        s = i("bou3"),
        o = i("yNay"),
        r = i("Xo58"),
        u = i("m3Ja"),
        c = i("r+e+"),
        h = i("ijxY"),
        g = i("bmFL"),
        b =
          (i("og1W"),
          n.wb({
            encapsulation: 0,
            styles: [
              [
                '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{height:100%;display:flex;align-items:center}.info-text[_ngcontent-%COMP%], [_nghost-%COMP%]{position:relative}.info-text[_ngcontent-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:40px;text-align:center;width:100%;line-height:66px;top:12px}.reduced-line-height[_ngcontent-%COMP%]{line-height:59px}',
              ],
            ],
            data: {},
          }));
      function d(t) {
        return n.ac(
          0,
          [
            (t()(),
            n.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "info-text"]],
              [
                [2, "reduced-line-height", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              l.b,
              l.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [n.l, n.D, s.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            n.xb(
              2,
              245760,
              null,
              0,
              r.a,
              [[6, a.a], u.a, n.h, n.l, n.D, [2, c.a], [2, h.a], [2, g.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (t, e) {
            var i = e.component;
            (t(e, 1, 0, i.textId, i.textIdEnumType),
              t(e, 2, 0, i.text, i.textId, i.numberOfLines));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              e.component.reducedLineHeight,
              n.Nb(e, 2).backgroundColor,
              n.Nb(e, 2).fixedNumberOfLines,
              n.Nb(e, 2).mayContainLatinCharsForArabic,
              n.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
    },
    og1W: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return n;
      });
      class n {
        constructor() {
          ((this.numberOfLines = 6), (this.reducedLineHeight = !1));
        }
        get text() {
          return this._text;
        }
        set text(t) {
          this._text = t || "";
        }
      }
    },
    pCVb: function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return K;
      }),
        i.d(e, "b", function () {
          return et;
        }));
      var n = i("kZht"),
        l = i("GAHT"),
        a = i("fu7d"),
        s = i("bou3"),
        o = i("yNay"),
        r = i("bMuc"),
        u = i("ZIdM"),
        c = i("3bpu"),
        h = i("vwU6"),
        g = i("VcEz"),
        b = i("BMrr"),
        d = i("OtM5"),
        p = i("y9xZ"),
        v = i("+sw+"),
        m = i("IEns"),
        f = i("AH9k"),
        S = i("YcCK"),
        x = i("mYyF"),
        I = i("v98a"),
        T = i("IAcG"),
        y = i("HygI"),
        _ = i("/mWE"),
        C = i("1qmX"),
        O = i("4XZL"),
        E = i("9ZFG"),
        P = i("6zvu"),
        D = i("6480"),
        R = i("FfND"),
        w = i("oeT7"),
        F = i("t7cT"),
        $ = i("z6QT"),
        A = i("flsk"),
        H = i("FQEI"),
        M = i("O82V"),
        N = i("Eln4"),
        L = i("evAh"),
        k = i("URLa"),
        Y = i("E7cc"),
        j = i("CpzC"),
        G = i("0Bsn"),
        Z = i("5GjX"),
        z = i("aOG8"),
        B = i("Krzs"),
        U = i("An66"),
        W = i("QSdq"),
        V = i("D0GA"),
        K =
          (i("sZ6U"),
          n.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;align-items:stretch;justify-content:stretch}.list__item[_ngcontent-%COMP%]{font-size:40px;flex:1;height:100%;max-width:100%}",
              ],
            ],
            data: {},
          }));
      function X(t) {
        return n.ac(
          0,
          [
            (t()(),
            n.yb(
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
            n.yb(
              1,
              0,
              null,
              null,
              7,
              "au3-list-route-switch-item",
              [
                ["class", "list__item"],
                ["id", ""],
              ],
              null,
              [
                [null, "activateRoute"],
                [null, "valueChange"],
              ],
              function (t, e, i) {
                var n = !0,
                  l = t.component;
                return (
                  "activateRoute" === e &&
                    (n =
                      !1 !==
                        (!l.route || l.preventGoToRoute
                          ? l.activateRoute.emit(i)
                          : "") && n),
                  "valueChange" === e &&
                    (n = !1 !== l.valueChange.emit(i) && n),
                  n
                );
              },
              l.b,
              l.a,
            )),
            n.xb(
              2,
              212992,
              null,
              0,
              a.a,
              [n.l, n.D, s.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(3, 147456, null, 0, r.a, [n.l, n.z], null, null),
            n.xb(
              4,
              147456,
              null,
              0,
              u.a,
              [r.a, [2, c.a], [2, a.a], o.a],
              null,
              null,
            ),
            n.xb(
              5,
              212992,
              null,
              0,
              h.a,
              [
                o.a,
                n.z,
                n.l,
                g.b,
                b.a,
                u.a,
                [2, c.a],
                [2, a.a],
                [2, d.a],
                [2, p.a],
                [2, v.a],
                [2, m.a],
              ],
              null,
              null,
            ),
            n.xb(
              6,
              114688,
              null,
              0,
              f.a,
              [],
              {
                icon: [0, "icon"],
                iconCategory: [1, "iconCategory"],
                titleTextId: [2, "titleTextId"],
                titleTextIdEnum: [3, "titleTextIdEnum"],
                titleDeveloperText: [4, "titleDeveloperText"],
                subtitleTextId: [5, "subtitleTextId"],
                subtitleTextIdEnum: [6, "subtitleTextIdEnum"],
                subtitleDeveloperText: [7, "subtitleDeveloperText"],
                subtitleHasText: [8, "subtitleHasText"],
                value: [9, "value"],
                switchDisabled: [10, "switchDisabled"],
                switchDisabledReason: [11, "switchDisabledReason"],
                routeDisabled: [12, "routeDisabled"],
                routeDisabledReason: [13, "routeDisabledReason"],
                type: [14, "type"],
                endIcon: [15, "endIcon"],
                routeLockingParam: [16, "routeLockingParam"],
                route: [17, "route"],
                routingSettings: [18, "routingSettings"],
                preventGoToRoute: [19, "preventGoToRoute"],
                listIconCategory: [20, "listIconCategory"],
              },
              { valueChange: "valueChange", activateRoute: "activateRoute" },
            ),
            n.xb(
              7,
              147456,
              null,
              0,
              S.a,
              [[2, h.a], n.l, x.a, I.b],
              null,
              null,
            ),
            n.xb(
              8,
              4341760,
              null,
              0,
              T.a,
              [o.a, y.a, h.a, [8, null], [2, f.a], [8, null], _.a, [2, C.b]],
              {
                setting: [0, "setting"],
                toggleSetting: [1, "toggleSetting"],
                saveRouteOnly: [2, "saveRouteOnly"],
              },
              null,
            ),
          ],
          function (t, e) {
            var i = e.component;
            (t(e, 2, 0, ""),
              t(e, 5, 0),
              t(e, 6, 1, [
                i.icon,
                i.iconCategory,
                i.titleTextId ? i.titleTextId : "CarSubSwitchRouteItem",
                i.titleTextIdEnum,
                i.titleDeveloperText,
                i.subtitleTextId,
                i.subtitleTextIdEnum,
                i.subtitleDeveloperText,
                i.hasSubtitle,
                i.value,
                i.switchDisabled,
                i.switchDisabledReason,
                i.routeDisabled,
                i.routeDisabledReason,
                i.type,
                i.endIcon,
                i.routeLockingParam,
                i.route,
                i.routingSettings,
                i.preventGoToRoute,
                i.listEndIconCategory,
              ]),
              t(e, 8, 0, i.shortcut, i.shortcutToggle, i.saveRouteOnly));
          },
          null,
        );
      }
      function J(t) {
        return n.ac(
          0,
          [
            (t()(),
            n.yb(
              0,
              0,
              null,
              null,
              15,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["id", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (t, e, i) {
                var n = !0,
                  l = t.component;
                return (
                  "mib3Tap" === e &&
                    (n =
                      !1 !==
                        (!l.route || l.preventGoToRoute
                          ? l.activateRoute.emit(i)
                          : "") && n),
                  n
                );
              },
              O.b,
              O.a,
            )),
            n.xb(
              1,
              147456,
              null,
              0,
              d.a,
              [E.a, n.h, o.a, [3, d.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            n.xb(2, 147456, null, 0, r.a, [n.l, n.z], null, null),
            n.xb(
              3,
              212992,
              null,
              0,
              a.a,
              [n.l, n.D, s.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              4,
              147456,
              null,
              0,
              u.a,
              [r.a, [2, c.a], [2, a.a], o.a],
              null,
              null,
            ),
            n.xb(
              5,
              212992,
              null,
              0,
              P.a,
              [
                o.a,
                g.b,
                u.a,
                [2, c.a],
                [2, a.a],
                [2, d.a],
                [2, p.a],
                [2, v.a],
                n.z,
                b.a,
                n.l,
                [2, m.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.xb(
              6,
              671744,
              null,
              0,
              D.a,
              [R.a, w.i, d.a, P.a, D.b, F.a],
              {
                routeInfo: [0, "routeInfo"],
                preventGoToRoute: [1, "preventGoToRoute"],
                settingsButton: [2, "settingsButton"],
              },
              null,
            ),
            n.xb(
              7,
              212992,
              null,
              0,
              h.a,
              [
                o.a,
                n.z,
                n.l,
                g.b,
                b.a,
                u.a,
                [2, c.a],
                [2, a.a],
                [2, d.a],
                [2, p.a],
                [2, v.a],
                [2, m.a],
              ],
              null,
              null,
            ),
            n.Sb(131584, null, $.a, $.a, [[3, $.a]]),
            n.xb(
              9,
              4407296,
              null,
              0,
              A.a,
              [
                n.l,
                H.a,
                n.h,
                $.a,
                [2, M.a],
                [2, c.b],
                [2, c.a],
                [2, N.a],
                [2, L.a],
              ],
              null,
              null,
            ),
            n.xb(
              10,
              114688,
              null,
              0,
              k.a,
              [],
              {
                icon: [0, "icon"],
                listIconCategory: [1, "listIconCategory"],
                titleTextId: [2, "titleTextId"],
                titleTextIdEnum: [3, "titleTextIdEnum"],
                titleDeveloperText: [4, "titleDeveloperText"],
                subtitleTextId: [5, "subtitleTextId"],
                subtitleTextIdEnum: [6, "subtitleTextIdEnum"],
                subtitleDeveloperText: [7, "subtitleDeveloperText"],
                hasSubtitle: [8, "hasSubtitle"],
                type: [9, "type"],
                endIcon: [10, "endIcon"],
                listEndIconCategory: [11, "listEndIconCategory"],
              },
              null,
            ),
            n.xb(
              11,
              671744,
              null,
              0,
              Y.a,
              [d.a, w.i, [2, w.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            n.xb(
              12,
              147456,
              null,
              0,
              S.a,
              [[2, h.a], n.l, x.a, I.b],
              null,
              null,
            ),
            n.xb(
              13,
              147456,
              null,
              0,
              j.a,
              [[2, P.a], [2, d.a], [2, G.a], [2, A.a], [2, Z.b], n.l, x.a, I.b],
              null,
              null,
            ),
            n.xb(
              14,
              147456,
              null,
              0,
              z.a,
              [[2, A.a], [2, P.a], [2, g.b], B.a],
              null,
              null,
            ),
            n.xb(
              15,
              4341760,
              null,
              0,
              T.a,
              [o.a, y.a, h.a, [2, k.a], [8, null], [8, null], _.a, [2, C.b]],
              { setting: [0, "setting"] },
              null,
            ),
          ],
          function (t, e) {
            var i = e.component;
            (t(e, 1, 0, i.routeDisabled, i.routeDisabledReason),
              t(e, 3, 0, ""),
              t(e, 5, 0),
              t(e, 6, 0, i.route, i.preventGoToRoute, i.routingSettings),
              t(e, 7, 0),
              t(e, 9, 0),
              t(e, 10, 1, [
                i.icon,
                i.iconCategory,
                i.titleTextId ? i.titleTextId : "CarSubRouteItem",
                i.titleTextIdEnum,
                i.titleDeveloperText,
                i.subtitleTextId,
                i.subtitleTextIdEnum,
                i.subtitleDeveloperText,
                i.hasSubtitle,
                i.routeItemType,
                i.endIcon,
                i.listEndIconCategory,
              ]),
              t(e, 11, 0, i.routeLockingParam),
              t(e, 15, 0, i.shortcut));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              n.Nb(e, 1).combinedDisabled,
              n.Nb(e, 1).useBrighterIcon,
              n.Nb(e, 9).markerClassEnabled,
            );
          },
        );
      }
      function Q(t) {
        return n.ac(
          0,
          [
            (t()(),
            n.yb(
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
            (t()(), n.hb(16777216, null, null, 1, null, X)),
            n.xb(
              2,
              16384,
              null,
              0,
              U.k,
              [n.P, n.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), n.hb(0, [["noswitch", 2]], null, 0, null, J)),
          ],
          function (t, e) {
            t(e, 2, 0, e.component.switchAvailable, n.Nb(e, 3));
          },
          null,
        );
      }
      function q(t) {
        return n.ac(
          0,
          [
            (t()(),
            n.yb(
              0,
              0,
              null,
              null,
              8,
              "au3-list-switch-item",
              [
                ["class", "list__item"],
                ["id", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "valueChange"]],
              function (t, e, i) {
                var n = !0;
                return (
                  "valueChange" === e &&
                    (n = !1 !== t.component.valueChange.emit(i) && n),
                  n
                );
              },
              W.b,
              W.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [n.l, n.D, s.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(2, 147456, null, 0, r.a, [n.l, n.z], null, null),
            n.xb(
              3,
              147456,
              null,
              0,
              u.a,
              [r.a, [2, c.a], [2, a.a], o.a],
              null,
              null,
            ),
            n.xb(
              4,
              147456,
              null,
              0,
              d.a,
              [E.a, n.h, o.a, [3, d.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            n.xb(
              5,
              212992,
              null,
              0,
              h.a,
              [
                o.a,
                n.z,
                n.l,
                g.b,
                b.a,
                u.a,
                [2, c.a],
                [2, a.a],
                [2, d.a],
                [2, p.a],
                [2, v.a],
                [2, m.a],
              ],
              null,
              null,
            ),
            n.xb(
              6,
              49152,
              null,
              0,
              V.a,
              [[2, d.a]],
              {
                icon: [0, "icon"],
                textId: [1, "textId"],
                textIdEnum: [2, "textIdEnum"],
                developerText: [3, "developerText"],
                value: [4, "value"],
                listIconCategory: [5, "listIconCategory"],
              },
              { valueChange: "valueChange" },
            ),
            n.xb(
              7,
              147456,
              null,
              0,
              S.a,
              [[2, h.a], n.l, x.a, I.b],
              null,
              null,
            ),
            n.xb(
              8,
              4341760,
              null,
              0,
              T.a,
              [o.a, y.a, h.a, [8, null], [8, null], [2, V.a], _.a, [2, C.b]],
              { setting: [0, "setting"] },
              null,
            ),
          ],
          function (t, e) {
            var i = e.component;
            (t(e, 1, 0, ""),
              t(e, 4, 0, i.switchDisabled, i.switchDisabledReason),
              t(e, 5, 0),
              t(
                e,
                6,
                0,
                i.icon,
                i.titleTextId ? i.titleTextId : "CarSubSwitchItem",
                i.titleTextIdEnum,
                i.titleDeveloperText,
                i.value,
                i.iconCategory,
              ),
              t(e, 8, 0, i.shortcut));
          },
          function (t, e) {
            t(e, 0, 0, n.Nb(e, 4).combinedDisabled, n.Nb(e, 4).useBrighterIcon);
          },
        );
      }
      function tt(t) {
        return n.ac(
          0,
          [
            (t()(), n.hb(16777216, null, null, 1, null, q)),
            n.xb(
              1,
              16384,
              null,
              0,
              U.k,
              [n.P, n.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), n.hb(0, null, null, 0)),
          ],
          function (t, e) {
            t(e, 1, 0, e.component.switchAvailable);
          },
          null,
        );
      }
      function et(t) {
        return n.ac(
          2,
          [
            (t()(), n.hb(16777216, null, null, 1, null, Q)),
            n.xb(
              1,
              16384,
              null,
              0,
              U.k,
              [n.P, n.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), n.hb(0, [["switchonly", 2]], null, 0, null, tt)),
          ],
          function (t, e) {
            t(e, 1, 0, e.component.routeAvailable, n.Nb(e, 2));
          },
          null,
        );
      }
    },
    sZ6U: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return a;
      });
      var n = i("kZht"),
        l = i("Yi6/");
      class a {
        constructor() {
          ((this.iconCategory = l.Z.List),
            (this.hasSubtitle = !1),
            (this.switchAvailable = !0),
            (this.switchDisabled = !1),
            (this.routeAvailable = !0),
            (this.routeDisabled = !1),
            (this.saveRouteOnly = !1),
            (this.preventGoToRoute = !1),
            (this.valueChange = new n.n()),
            (this.activateRoute = new n.n()),
            (this.type = l.rb.ITEM_TYPE_SWITCH_SUBMENU),
            (this.routeLockingParam = []),
            (this.listEndIconCategory = l.Z.List));
        }
        get routeItemType() {
          switch (this.type) {
            case l.rb.ITEM_TYPE_SWITCH_SUBMENU:
              return l.rb.ITEM_TYPE_SUBMENU;
            case l.rb.ITEM_TYPE_SWITCH_INFO:
              return l.rb.ITEM_TYPE_INFO;
            case l.rb.ITEM_TYPE_SWITCH_SUBMENU_HIDDEN:
              return l.rb.ITEM_TYPE_NO_END_ICON;
            default:
              return this.type;
          }
        }
      }
    },
  },
]);
