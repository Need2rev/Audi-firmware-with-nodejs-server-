(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    "/L1O": function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return o;
      });
      var r = i("sK8D");
      i("n06X");
      class o {
        constructor(e, t, i) {
          ((this.activatedRouteService = e),
            (this.routingService = t),
            (this.initialSearchStateService = i));
        }
        onBackButtonTap() {
          this.routingService.goBack();
        }
        onMoreCategoriesTap() {
          return this.routingService.goToMorePoiCategories();
        }
        onGoogleButton() {
          return Promise.reject(new Error("not yet implemented"));
        }
        goToDestinationDetail(e, t) {
          return this.routingService
            .goToDestinationDetails(
              e,
              this.activatedRouteService.snapshot.params[r.d],
              t,
            )
            .then();
        }
        goToContactCard(e) {
          return this.routingService
            .goToContactCard(e, this.activatedRouteService.snapshot.params[r.d])
            .then();
        }
        goToTourDetail(e) {
          return this.routingService.goToTourDetails(e).then();
        }
        goToAddressSearch(e, t = !1) {
          return (
            this.initialSearchStateService.startSearchingForAddress(e, t),
            this.routingService.goToAddressTruffleSearch(t).then()
          );
        }
        goToOnStreetParkingMap(e) {
          return this.routingService.goToMapParking(e).then();
        }
      }
    },
    AKlD: function (e, t, i) {
      "use strict";
      (i.d(t, "a", function () {
        return c;
      }),
        i.d(t, "b", function () {
          return l;
        }));
      var r = i("kZht"),
        o = i("HVUF"),
        n = i("B3Zb"),
        a = i("yNay"),
        s = i("An66"),
        c =
          (i("u0MH"),
          r.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block}.container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:row}.entry-flag__icon[_ngcontent-%COMP%]{width:55px;padding:0 15px 0 0}entry-flag__icon--last-element[_ngcontent-%COMP%]{width:40px}.component-layout-latin[_nghost-%COMP%]   .container[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .container[_ngcontent-%COMP%]{flex-direction:row}.component-layout-latin[_nghost-%COMP%]   .entry-flag__icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .entry-flag__icon[_ngcontent-%COMP%]{padding:0 15px 0 0}.component-layout-arabic[_nghost-%COMP%]   .container[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .container[_ngcontent-%COMP%]{flex-direction:row-reverse}.component-layout-arabic[_nghost-%COMP%]   .entry-flag__icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .entry-flag__icon[_ngcontent-%COMP%]{padding:0 0 0 15px}",
              ],
            ],
            data: {},
          }));
      function h(e) {
        return r.ac(
          0,
          [
            (e()(),
            r.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "entry-flag__icon"]],
              [
                [2, "entry-flag__icon--last-element", null],
                [2, "icon-component--hidden", null],
              ],
              null,
              null,
              o.b,
              o.a,
            )),
            r.xb(
              1,
              4243456,
              null,
              0,
              n.b,
              [a.a, r.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (e, t) {
            var i = t.component;
            e(t, 1, 0, i.getIconFileName(t.context.$implicit), i.iconCategory);
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              t.context.$implicit === t.context.last,
              r.Nb(t, 1).iconComponentHidden,
            );
          },
        );
      }
      function l(e) {
        return r.ac(
          2,
          [
            (e()(),
            r.yb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), r.hb(16777216, null, null, 1, null, h)),
            r.xb(
              2,
              278528,
              null,
              0,
              s.j,
              [r.P, r.L, r.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
          ],
          function (e, t) {
            e(t, 2, 0, t.component.entryFlagList);
          },
          null,
        );
      }
    },
    AuMu: function (e, t, i) {
      "use strict";
      (i.d(t, "b", function () {
        return l;
      }),
        i.d(t, "a", function () {
          return u;
        }));
      var r = i("QQZH"),
        o = i("C05f"),
        n = i("Ohay"),
        a = i("mWib"),
        s = i("1+5f"),
        c = i("Yi6/"),
        h = i("Al+L"),
        l = (function (e) {
          return (
            (e.ALONG_THE_ROUTE = "E967_map_sonderziele_auf_route.webp"),
            (e.CCP = "E9F8_navigation_fahrzeugposition.webp"),
            (e.NEXT_DESTINATION = "E0BE_1_zwischenzielflagge.webp"),
            (e.NEXT_DESTINATION_2 = "E0BE_2_zwischenzielflagge.webp"),
            (e.NEXT_DESTINATION_3 = "E0BE_3_zwischenzielflagge.webp"),
            (e.NEXT_DESTINATION_4 = "E0BE_4_zwischenzielflagge.webp"),
            (e.NEXT_DESTINATION_5 = "E0BE_5_zwischenzielflagge.webp"),
            (e.NEXT_DESTINATION_6 = "E0BE_6_zwischenzielflagge.webp"),
            (e.NEXT_DESTINATION_7 = "E0BE_7_zwischenzielflagge.webp"),
            (e.NEXT_DESTINATION_8 = "E0BE_8_zwischenzielflagge.webp"),
            (e.NEXT_DESTINATION_9 = "E0BE_9_zwischenzielflagge.webp"),
            (e.LAST_DESTINATION = "E0B0_navigation.webp"),
            e
          );
        })({});
      class u {
        constructor(e, t) {
          ((this.logger = t),
            (this.customSearchLocation = null),
            (this._maxDistance = null),
            (this.destroyed$$ = new r.a(1)),
            (this.triggerToast = !0),
            (this.searchArea$$ = new o.a(e)),
            (this.searchArea$ = this.searchArea$$.pipe(
              Object(n.a)(),
              Object(a.a)(h.c.TIME_BETWEEN_USER_INPUT_AND_START_OF_SEARCH),
              Object(c.pd)(this.logger, "constructor: publishing search area"),
              Object(c.Kd)(),
            )));
        }
        get maxDistance() {
          return this._maxDistance;
        }
        set maxDistance(e) {
          (this.logger.info("maxDistance: updated to", e),
            (this._maxDistance = e));
        }
        static getFileNameForSearchArea(e, t) {
          switch (e) {
            case s.f.CCP:
              return l.CCP;
            case s.f.NEXTDESTINATION:
              switch (t) {
                case 1:
                  return l.NEXT_DESTINATION_2;
                case 2:
                  return l.NEXT_DESTINATION_3;
                case 3:
                  return l.NEXT_DESTINATION_4;
                case 4:
                  return l.NEXT_DESTINATION_5;
                case 5:
                  return l.NEXT_DESTINATION_6;
                case 6:
                  return l.NEXT_DESTINATION_7;
                case 7:
                  return l.NEXT_DESTINATION_8;
                case 8:
                  return l.NEXT_DESTINATION_9;
                default:
                  return l.NEXT_DESTINATION;
              }
            case s.f.LASTDESTINATION:
              return l.LAST_DESTINATION;
            default:
              return l.ALONG_THE_ROUTE;
          }
        }
        static getToastForSearchArea(e) {
          switch (e) {
            case s.f.CCP:
              return c.Ob.POPUP_NAV_SEARCH_AREA_CCP_HINT;
            case s.f.NEXTDESTINATION:
              return c.Ob.POPUP_NAV_SEARCH_AREA_NEXT_DEST_HINT;
            case s.f.LASTDESTINATION:
              return c.Ob.POPUP_NAV_SEARCH_AREA_FINAL_DEST_HINT;
            default:
              return c.Ob.POPUP_NAV_SEARCH_AREA_ALONG_ROUTE_HINT;
          }
        }
        ngOnDestroy() {
          (this.searchArea$$.complete(), this.destroyed$$.next());
        }
        setSearchArea(e, t = !0) {
          (this.logger.info("setSearchArea: updating searchArea to:", e),
            (this.triggerToast = t),
            this.searchArea$$.next(e));
        }
      }
    },
    BOsO: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return o;
      });
      var r = i("Yi6/");
      class o {
        transform(e) {
          return Object(r.hd)(e);
        }
      }
    },
    Oh6n: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return O;
      });
      var r = i("HM3f"),
        o = i("ROBh"),
        n = i("mWib"),
        a = i("8j5Y"),
        s = i("ruxD"),
        c = i("SrNW"),
        h = i("TLy2"),
        l = i("jIqt"),
        u = i("4e/d"),
        g = i("YtkY"),
        d = i("6dmc"),
        f = i("qTQ5"),
        T = i("1+5f"),
        S = (i("9ehv"), i("Yi6/")),
        p = i("5KJK");
      class O {
        constructor(e, t) {
          ((this.dopiService = e),
            (this.dopiHelper = p.b.create(this.dopiService, t, {
              client: "audi.main.navsearch",
            })),
            (this.logger = t.getLogger("navi.truffle.DopiProviderService", [
              d.a.NAVSEARCH,
            ])));
        }
        static transformTruffleSearchResultToRequestType(e) {
          if (e.staticObject.navAddress) {
            const t = e.staticObject.navAddress;
            return Object(S.rd)(t.poiId)
              ? null
              : {
                  requestElement: {
                    elementId: t.id,
                    poiIds: [{ poiId: t.poiId, providerId: t.providerId }],
                  },
                  provider: t.provider,
                };
          }
          if (
            e.staticObject.source &&
            e.staticObject.source.destination &&
            e.staticObject.source.destination.location
          ) {
            const t = e.staticObject.source.destination.location;
            return Object(S.rd)(t.poiId)
              ? null
              : {
                  requestElement: {
                    elementId: t.id,
                    poiIds: [{ poiId: t.poiId, providerId: t.providerId }],
                  },
                  provider: T.j.OFFLINE,
                };
          }
          return null;
        }
        ngOnDestroy() {
          this.dopiHelper.ngOnDestroy();
        }
        augmentTruffleResults(e, t) {
          this.logger.info("augmentTruffleResults: augment resultList");
          const i = t.pipe(Object(n.a)(100));
          return Object(r.b)(
            i.pipe(
              Object(a.a)((e) =>
                this.logger.debug(
                  "augmentTruffleResults: visibleListRange changed = ",
                  e,
                ),
              ),
              Object(s.a)(() =>
                this.logger.info(
                  "augmentTruffleResults: visibleListRange$ completed",
                ),
              ),
            ),
            e.pipe(
              Object(a.a)((e) =>
                this.logger.debug(
                  "augmentTruffleResults: result list changed = ",
                  e,
                ),
              ),
              Object(c.a)((e, t) => this.copyDopis(e, t), []),
              Object(a.a)((e) =>
                this.logger.debug(
                  "augementTruffleResults: result list after scan = ",
                  e,
                ),
              ),
              Object(s.a)(() =>
                this.logger.info(
                  "augmentTruffleResults: resultList$ completed",
                ),
              ),
            ),
          ).pipe(
            Object(h.a)(([e, t]) => {
              const i = t
                .slice(e.startIndex, e.startIndex + e.itemsCount)
                .filter((e) => {
                  const t = e.dynamicObject;
                  return !t || Object(S.rd)(t.dopiLayout);
                });
              return (
                this.logger.debug(
                  "augmentTruffleResults: listRange, resultList and relevantResults",
                  { listRange: e, resultList: t, relevantResults: i },
                ),
                this.requestDopiInformation(i).pipe(
                  Object(l.a)([]),
                  Object(u.a)(
                    (e) => (
                      this.logger.warn(
                        "augmentTruffleResults: requestDopiInformation failed",
                        e,
                      ),
                      Object(o.a)([])
                    ),
                  ),
                  Object(g.a)(
                    (e) => (
                      this.logger.debug(
                        "augmentTruffleResults: augment resultList with layouts:",
                        e,
                      ),
                      t.map((t) => {
                        const i = t.staticObject.navAddress,
                          r = e.find((e) => e && i && e.elementId === i.id);
                        if (r) {
                          const e = t.dynamicObject;
                          e && (e.dopiLayout = r);
                        }
                        return t;
                      })
                    ),
                  ),
                  Object(s.a)(() =>
                    this.logger.info(
                      "augmentTruffleResults: requestDopiInformation completed",
                    ),
                  ),
                )
              );
            }),
            Object(s.a)(() =>
              this.logger.info("augmentTruffleResults: subscription completed"),
            ),
          );
        }
        requestDopiInformation(e) {
          return (
            this.logger.info(
              "requestDopiInformation: called with elements =",
              e,
            ),
            e
              .map(O.transformTruffleSearchResultToRequestType)
              .filter((e) => null != e).length < 1
              ? (this.logger.info(
                  "requestDopiInformation: no elements with poiId found",
                ),
                Object(o.a)([]))
              : this.dopiHelper.layouts$(f.d.LIST, e, (e) => {
                  const t = O.transformTruffleSearchResultToRequestType(e);
                  return t
                    ? { provider: t.provider, request: t.requestElement }
                    : void 0;
                })
          );
        }
        copyDopis(e, t) {
          for (let i = 0; i < Math.min(e.length, t.length); i++) {
            const r = e[i].dynamicObject,
              o = t[i].dynamicObject;
            r &&
              r.dopiLayout &&
              o &&
              !o.dopiLayout &&
              (o.dopiLayout = r.dopiLayout);
          }
          return t;
        }
      }
    },
    RoxU: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return n;
      });
      var r = i("1+5f"),
        o = i("MddD");
      let n = (() => {
        class e {
          static getIconFileNameForEntryFlag(t) {
            switch (t) {
              case r.i.FASTCHARGE:
                return e.FAST_CHARGE_FILE_NAME;
              case r.i.NODIESEL:
                return e.NODIESEL_FILE_NAME;
              case r.i.NOCNG:
                return e.NOCNG_FILE_NAME;
              case r.i.OPEN24H:
                return e.OPEN24H_FILE_NAME;
              default:
                return "";
            }
          }
          static compareEntryFlags(t, i) {
            if (null == t || null == i)
              throw new Error("Cannot sort null or undefined values");
            return (
              e.ENTRY_FLAG_ORDER.indexOf(t) - e.ENTRY_FLAG_ORDER.indexOf(i)
            );
          }
          static entryIsAllowed(t) {
            return e.ENTRY_FLAG_ORDER.indexOf(t) > -1;
          }
          static locationObjectPoiInfosToSearchresultObjectPoiInfos(e) {
            switch (e) {
              case o.i.CREDITCARDPAYMENT:
                return r.i.CREDITCARDPAYMENT;
              case o.i.FASTCHARGE:
                return r.i.FASTCHARGE;
              case o.i.NODIESEL:
                return r.i.NODIESEL;
              case o.i.NOCNG:
                return r.i.NOCNG;
              case o.i.PREMIUM:
                return r.i.PREMIUM;
              default:
                return r.i.OPEN24H;
            }
          }
        }
        return (
          (e.FAST_CHARGE_FILE_NAME = "E621_navigation_fast_charge.webp"),
          (e.NODIESEL_FILE_NAME = "E93C_navigation_fuelstation_no_diesel.webp"),
          (e.NOCNG_FILE_NAME = "E93B_navigation_fuelstation_no_cng.webp"),
          (e.OPEN24H_FILE_NAME = "E61E_navigation_opened_24hours.webp"),
          (e.ENTRY_FLAG_ORDER = [
            r.i.FASTCHARGE,
            r.i.NODIESEL,
            r.i.NOCNG,
            r.i.OPEN24H,
          ]),
          e
        );
      })();
    },
    Td1N: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return o;
      });
      var r = i("C05f");
      class o {
        constructor(e) {
          ((this.searchMode$$ = new r.a(e)),
            (this.searchMode$ = this.searchMode$$));
        }
        getSearchMode() {
          return this.searchMode$$.getValue();
        }
        setSearchMode(e) {
          this.searchMode$$.next(e);
        }
      }
    },
    u0MH: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return n;
      });
      var r = i("Yi6/"),
        o = i("RoxU");
      class n {
        constructor() {
          ((this.iconCategory = r.Z.List), (this.entryFlagList = []));
        }
        getIconFileName(e) {
          return o.a.getIconFileNameForEntryFlag(e);
        }
      }
    },
    ulbR: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return o;
      });
      var r = i("Yi6/");
      class o {
        transform(e) {
          return Object(r.Fd)(e);
        }
      }
    },
    yRMx: function (e, t, i) {
      "use strict";
      (i.d(t, "a", function () {
        return E;
      }),
        i.d(t, "b", function () {
          return v;
        }));
      var r = i("kZht"),
        o = i("ZTXN"),
        n = i("C05f"),
        a = i("Ohay"),
        s = i("xVbo"),
        c = i("TLy2"),
        h = i("YtkY"),
        l = i("jIqt"),
        u = i("kuMc"),
        g = i("J+dc"),
        d = i("8j5Y"),
        f = i("jOdJ"),
        T = i("6dmc"),
        S = i("1+5f"),
        p = i("Yi6/"),
        O = (i("DexO"), i("qL44")),
        _ = (i("OmET"), i("AuMu"), i("n06X"), i("/L1O"), i("T07r"));
      (i("MUOu"), i("wfP6"));
      let E = (() => {
          class e extends _.a {
            constructor() {
              super();
            }
          }
          return (
            (e.NAVI_ROUTING = new r.q("NaviRoutingProvider")),
            (e.LOCATION = new r.q("NaviLocationProvider")),
            (e.EXTERNAL_SUGGESTION = new r.q(
              "NaviExternalSuggestionsProvider",
            )),
            (e.EXTERNAL_SEARCH = new r.q("NaviExternalSearchProvider")),
            (e.ONLINE_SEARCH = new r.q("NaviOnlineSearchProvider")),
            e
          );
        })(),
        v = (() => {
          class e extends _.b {
            constructor(e, t, i, r, a, s, c, h, l, u, g, d, f, p, O, _) {
              (super(e, t, i, r, a, s, p, _),
                (this.searchLocationProvider = c),
                (this.naviRouting = h),
                (this.searchAreaProvider = l),
                (this.searchModifierService = u),
                (this.conflictModeService = g),
                (this.remoteSearchService = d),
                (this.locationsService = f),
                (this.sortingService = O),
                (this.onItemTap$$ = new o.a()),
                (this.usingFullMatchSuggestion$$ = new n.a(!1)),
                (this.conflictTap$$ = new o.a()),
                (this.suggestionTap$$ = new o.a()),
                (this.sortingCriterionTap$$ = new o.a()),
                (this.naviTfsCtrlLogger = _.getLogger(
                  "navi.truffle.NaviTruffleSearchControllerService",
                  [T.b.TRUFFLESSEARCH, T.a.NAVSEARCH],
                )),
                this.initializeSearchArea(),
                this.initializeRemoteSearch(),
                t.getInitialInput()
                  ? this.initializeFullMatchMechanismReset(t.getInitialInput())
                  : this.searchModifierService.removeSearchModifier(
                      S.e.POICATEGORYFULLMATCH,
                    ),
                this.addMoreCategoriesToInitialSuggestions());
            }
            restoreSearchState() {
              if (this.initialInput.length) {
                const e =
                  this.widgetHistoryService.restorePreviousWidgetHistory();
                if (e) {
                  const t = e.searchState;
                  t
                    ? (t.maxDistance &&
                        (this.logger.info(
                          "restoreSearchState: restore max search distance: ",
                          t.maxDistance,
                        ),
                        (this.searchAreaProvider.maxDistance = t.maxDistance)),
                      t.searchArea &&
                        (this.naviTfsCtrlLogger.info(
                          "restoreSearchState: restore searchArea",
                          t.searchArea,
                        ),
                        this.searchAreaProvider.setSearchArea(
                          t.searchArea,
                          !1,
                        )),
                      t.customLocation &&
                        (this.logger.info(
                          "restoreSearchState: restore custom location: ",
                          t.customLocation,
                        ),
                        (this.searchAreaProvider.customSearchLocation =
                          t.customLocation)),
                      t.activeSortingCriterion &&
                        (this.logger.info(
                          "restoreSearchState: restore active sorting criterion: ",
                          t.activeSortingCriterion,
                        ),
                        (this.sortingService.activeSortingCriterion =
                          t.activeSortingCriterion)))
                    : this.logger.warn(
                        "restoreSearchState: no searchState in history preset!",
                        t,
                      );
                }
              }
              super.restoreSearchState();
            }
            restoreSearchParameters(e, t) {
              return (
                e.modifiers &&
                  e.modifiers.length > 0 &&
                  (this.logger.info(
                    "restoreSearchParameters: restore search modifiers: ",
                    e.modifiers,
                  ),
                  e.modifiers.forEach((e) =>
                    this.searchModifierService.addSearchModifier(e),
                  ),
                  this.initializeFullMatchMechanismReset(e.searchText)),
                e.customLocation &&
                  (this.logger.info(
                    "restoreSearchParameters: restore custom search location: ",
                    e.customLocation,
                  ),
                  (this.searchAreaProvider.customSearchLocation =
                    e.customLocation)),
                e.activeSortingCriterion &&
                  (this.logger.info(
                    "restoreSearchParameters: restore active sorting criterion: ",
                    e.activeSortingCriterion,
                  ),
                  (this.sortingService.activeSortingCriterion =
                    e.activeSortingCriterion)),
                super.restoreSearchParameters(e, t)
              );
            }
            detectChangesAfterSearchStateRestore(e) {
              if (
                (super.detectChangesAfterSearchStateRestore(e), e.searchArea)
              ) {
                const t = this.searchAreaProvider.searchArea$.pipe(
                  Object(a.a)(),
                  Object(s.a)((t) => t === e.searchArea),
                  Object(c.a)(() =>
                    this.searchAreaProvider.searchArea$.pipe(
                      Object(h.a)((t) => t !== e.searchArea),
                    ),
                  ),
                  Object(l.a)(!1),
                );
                this.addToMonitoredUserChanges(t);
              }
            }
            recreateSearchFromSearchState(e) {
              (this.naviTfsCtrlLogger.info(
                "recreateSearchFromSearchState: recreate search",
                e,
              ),
                e.maxDistance &&
                  (this.searchAreaProvider.maxDistance = e.maxDistance),
                e.searchArea &&
                  this.searchAreaProvider.setSearchArea(e.searchArea, !1),
                e.modifiers &&
                  e.modifiers.forEach((e) => {
                    (this.naviTfsCtrlLogger.info(
                      "recreateSearchFromSearchState: recreate search with modifier:",
                      e,
                    ),
                      this.searchModifierService.addSearchModifier(e));
                  }),
                e.activeConflictMode &&
                  (this.naviTfsCtrlLogger.info(
                    "recreateSearchFromSearchState: recreate search with conflictMode:",
                    e.activeConflictMode,
                  ),
                  (this.conflictModeService.activeConflictMode =
                    e.activeConflictMode)),
                e.customLocation &&
                  (this.naviTfsCtrlLogger.info(
                    "recreateSearchFromSearchState: recreate search with customLocation:",
                    e.customLocation,
                  ),
                  (this.searchAreaProvider.customSearchLocation =
                    e.customLocation)),
                e.activeSortingCriterion &&
                  (this.naviTfsCtrlLogger.info(
                    "recreateSearchFromSearchState: recreate search with sortingCriterion:",
                    e.activeSortingCriterion,
                  ),
                  (this.sortingService.activeSortingCriterion =
                    e.activeSortingCriterion)),
                super.recreateSearchFromSearchState(e));
            }
            initializeSearchArea() {
              this.searchAreaFileName$ =
                this.searchAreaProvider.searchAreaFileName$;
            }
            initializeRemoteSearch() {
              this.remoteSearchService &&
                this.searchId$
                  .pipe(Object(u.a)(this.destroy$$), Object(g.a)(1))
                  .subscribe(
                    () => this.remoteSearchService.informRemoteSearchDone(),
                    (e) => {
                      (this.naviTfsCtrlLogger.error(
                        "did not receive a new searchID:",
                        e,
                      ),
                        this.remoteSearchService.informRemoteSearchDone());
                    },
                    () => this.remoteSearchService.informRemoteSearchDone(),
                  );
            }
            addMoreCategoriesToInitialSuggestions() {
              this.initialSuggestions$ = this.initialSuggestions$.pipe(
                Object(h.a)(
                  (t) => (
                    t &&
                      t.length > 0 &&
                      t.push(e.MORE_CATEGORIES_WORD_PROPOSAL),
                    t
                  ),
                ),
              );
            }
            onTruffleSearchResultTap(e) {
              (this.onItemTap$$.next(),
                this.addSelectedItemToDictionary(e),
                this.getSearchResultLocation(e)
                  .pipe(
                    Object(u.a)(this.destroy$$),
                    Object(u.a)(this.onItemTap$$),
                  )
                  .subscribe((e) => {
                    const t = this.getLocationIdFromSearchResultLocation(e);
                    t
                      ? this.goToDestinationScreen(t)
                      : this.naviTfsCtrlLogger.error(
                          "onTruffleSearchResultTap: no valid location id",
                        );
                  }));
            }
            onContactResultTap(e) {
              const t = e.resultTypeId;
              t
                ? (this.naviTfsCtrlLogger.info(
                    "onContactResultTap: go to contact card for uuid",
                    t,
                  ),
                  this.goToContactCard(t))
                : this.naviTfsCtrlLogger.error(
                    "onContactResultTap: no valid resultTypeId in result",
                    e,
                  );
            }
            onTourResultTap(e) {
              const t = e.resultTypeId;
              t
                ? (this.naviTfsCtrlLogger.info(
                    "onTourResultTap: go to tour details for uuid",
                    t,
                  ),
                  this.goToTourDetailScreen(t))
                : this.naviTfsCtrlLogger.error(
                    "onTourResultTap: no valid resultTypeId in result",
                    e,
                  );
            }
            retrySearch(e) {
              this.naviTfsCtrlLogger.info(
                "retrySearch: trying new search with input field",
                e,
              );
              const t = this.inputModelProvider.getSearchNeedles(e);
              (this.naviTfsCtrlLogger.info(
                "retrySearch: trying new search needles",
                t,
              ),
                this.searchProvider.createSearch(t));
            }
            getLocationIdFromSearchResultLocation(e) {
              const t = e.location && e.location.id ? e.location.id : void 0;
              return (
                this.naviTfsCtrlLogger.in.info(
                  "getLocationIdFromSearchResultLocation: received locationId ",
                  t,
                ),
                (e.location && e.location.id) ||
                  this.naviTfsCtrlLogger.in.error(
                    "getLocationIdFromSearchResultLocation: received no valid locationId",
                  ),
                t
              );
            }
            addSelectedItemToDictionary(e) {
              this.inputModelProvider.addToDictionary(e);
            }
            getSearchResultLocation(e) {
              return (
                this.naviTfsCtrlLogger.out.info(
                  `getSearchResultLocation: retrieving searchResultLocation for searchResult id: ${e.staticObject.navAddress.source.id}`,
                ),
                this.searchLocationProvider.getSearchResultLocation(e).pipe(
                  Object(d.a)((e) => {
                    this.naviTfsCtrlLogger.in.info(
                      `getSearchResultLocation: received searchResultLocation with id ${e.id}`,
                    );
                  }),
                  Object(f.a)(),
                  Object(u.a)(this.destroy$$),
                  Object(u.a)(this.onItemTap$$),
                )
              );
            }
            goToDestinationScreen(e, t) {
              (this.naviTfsCtrlLogger.info(
                `goToDestinationScreen: route to destinationDetails with locationId ${e}`,
              ),
                this.naviRouting.goToDestinationDetail(e, t));
            }
            goToContactCard(e) {
              this.naviRouting.goToContactCard(e);
            }
            goToTourDetailScreen(e) {
              this.naviRouting.goToTourDetail(e);
            }
            goToParkingMap(e) {
              this.naviRouting.goToOnStreetParkingMap(e);
            }
            changeSearchArea() {
              this.searchAreaProvider.changeSearchArea();
            }
            changeSortingCriterion() {
              (this.sortingCriterionTap$$.next(),
                this.sortingService.changeSortingCriteria(),
                this.inputField$
                  .pipe(
                    Object(g.a)(1),
                    Object(u.a)(this.sortingCriterionTap$$),
                    Object(u.a)(this.destroy$$),
                  )
                  .subscribe((e) => {
                    this.retrySearch(e);
                  }));
            }
            onSuggestionTap(t) {
              if (e.MORE_CATEGORIES_WORD_PROPOSAL === t)
                this.naviRouting
                  .onMoreCategoriesTap()
                  .catch((e) =>
                    this.naviTfsCtrlLogger.error(
                      "Could not go to more categories:",
                      e,
                    ),
                  );
              else {
                (this.suggestionTap$$.next(),
                  this.naviTfsCtrlLogger.debug(
                    "onSuggestionTap: set usingFullMatchSuggestion$$ to true",
                  ),
                  this.searchModifierService.addSearchModifier(
                    S.e.POICATEGORYFULLMATCH,
                  ));
                const e = Object(O.d)(t.replaceText || t.text);
                (this.inputModelProvider.replaceInput(e),
                  this.initializeFullMatchMechanismReset(e));
              }
            }
            onConflictHintTap(e) {
              (this.naviTfsCtrlLogger.debug(
                "onConflictHintTap: tapped on hint",
                e,
              ),
                (this.conflictModeService.activeConflictMode =
                  e.conflictMode || null),
                this.conflictTap$$.next(),
                this.inputField$
                  .pipe(
                    Object(g.a)(1),
                    Object(u.a)(this.conflictTap$$),
                    Object(u.a)(this.destroy$$),
                  )
                  .subscribe((e) => {
                    this.retrySearch(e);
                  }));
            }
            initializeSearchHistory() {}
            initializeFullMatchMechanismReset(e) {
              if (
                this.searchModifierService.activeModifiers.includes(
                  S.e.POICATEGORYFULLMATCH,
                )
              ) {
                (this.naviTfsCtrlLogger.info(
                  "initializeFullMatchMechanismReset: fullMatch is active",
                ),
                  this.usingFullMatchSuggestion$$.next(!0));
                const t = this.inputField$.pipe(
                    Object(h.a)((e) => e.text),
                    Object(a.a)(),
                  ),
                  i = t.pipe(
                    Object(s.a)((t) => t === e),
                    Object(d.a)((e) =>
                      this.naviTfsCtrlLogger.info(
                        `initializeFullMatchMechanismReset: changed to poi category name '${e}'`,
                      ),
                    ),
                  ),
                  r = t.pipe(
                    Object(s.a)((t) => void 0 !== t && t !== e),
                    Object(d.a)((e) =>
                      this.naviTfsCtrlLogger.info(
                        `initializeFullMatchMechanismReset: changed to text '${e}'`,
                      ),
                    ),
                  );
                i.pipe(
                  Object(c.a)(() => r),
                  Object(u.a)(
                    this.usingFullMatchSuggestion$$.pipe(
                      Object(s.a)((e) => !e),
                    ),
                  ),
                  Object(u.a)(this.suggestionTap$$),
                  Object(u.a)(this.destroy$$),
                ).subscribe(() => {
                  (this.naviTfsCtrlLogger.info(
                    "initializeFullMatchMechanismReset: reset usingFullMatchSuggestion$$ to false",
                  ),
                    this.searchModifierService.removeSearchModifier(
                      S.e.POICATEGORYFULLMATCH,
                    ),
                    this.usingFullMatchSuggestion$$.next(!1));
                });
              }
            }
          }
          return (
            (e.MORE_CATEGORIES_WORD_PROPOSAL = {
              text: "...",
              type: p.Ac.EMITTER,
            }),
            e
          );
        })();
    },
  },
]);
