(window.webpackJsonp = window.webpackJsonp || []).push([
  [43],
  {
    "2FrX": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return y;
      });
      var i = n("QQZH"),
        o = n("HM3f"),
        a = n("ROBh"),
        l = n("8j5Y"),
        s = n("xVbo"),
        r = n("TLy2"),
        c = n("YtkY"),
        u = n("kuMc"),
        d = n("jIqt"),
        h = n("ruxD"),
        g = n("Ohay"),
        b = n("J+dc"),
        p = n("Yi6/"),
        f = n("nApC"),
        _ = n("wCb4"),
        O = n("AfGm"),
        m = n("kZht"),
        v = n("bou3"),
        C = n("yNay");
      let y = (() => {
        class e {
          constructor(e, t, n, o) {
            ((this.weatherService = e),
              (this.systemConfigService = t),
              (this.destroy$$ = new i.a(1)),
              (this.runningRequests = 0),
              (this.logger = o.getLogger("navi.WeatherService")),
              (this.rudiWebappService = n.rudiService),
              this.weatherService.start());
          }
          ngOnDestroy() {
            (this.destroy$$.next(), this.weatherService.stop());
          }
          getWeather(e) {
            return (
              this.runningRequests++,
              this.logger.info(
                `getWeather: prepare observable. runningRequests: ${this.runningRequests}, new request: `,
                e,
              ),
              this.ensureService()
                .pipe(
                  Object(l.a)((e) =>
                    this.logger.info(
                      "received weather service update, service is running: ",
                      e,
                    ),
                  ),
                  Object(s.a)((e) => !!e),
                  Object(r.a)(() =>
                    this.weatherService.locations.insertLocationObject({
                      geoposition: `${e.latitudeDegree};${e.longitudeDegree};${e.altitudeInMeters}`,
                    }),
                  ),
                  Object(p.Vc)(),
                  Object(r.a)(
                    (e) => (
                      this.logger.info(
                        "getWeather: created location object, received id=",
                        e,
                      ),
                      Object(o.b)(
                        this.retrieveWeatherContent(e),
                        this.retrieveAirQualityContent(e),
                      )
                    ),
                  ),
                  Object(c.a)(
                    ([e, t]) => (
                      this.logger.info(
                        "getWeather: received update on weather data: ",
                        [e, t],
                      ),
                      { airQuality: t, weatherContent: e }
                    ),
                  ),
                  Object(u.a)(this.destroy$$),
                )
                .pipe(
                  Object(d.a)({}),
                  Object(h.a)(() => {
                    (this.runningRequests--,
                      this.logger.info(
                        `getWeather: subscription terminated. runningRequests: ${this.runningRequests}, this request: `,
                        e,
                      ),
                      this.runningRequests < 1 && this.stopService());
                  }),
                  Object(p.Kd)(),
                  Object(u.a)(this.destroy$$),
                )
            );
          }
          retrieveWeatherContent(e) {
            return this.weatherService.weatherContents
              .retrieveWeatherContentObjects()
              .pipe(
                Object(c.a)((e) => (e && e.data) || []),
                Object(c.a)((t) =>
                  t.filter((t) => t && t.location && t.location.id === e),
                ),
                Object(c.a)((t) =>
                  t.length < 1
                    ? null
                    : (t.length > 1 &&
                        this.logger.warn(
                          "retrieveWeatherContent: received more than one weather content for location " +
                            e,
                        ),
                      t[0]),
                ),
                Object(d.a)(null),
                Object(g.a)(),
                Object(u.a)(this.destroy$$),
              );
          }
          retrieveAirQualityContent(e) {
            return this.systemConfigService.isChinaRegion()
              ? this.weatherService.airQualities
                  .retrieveAirQualityObjects()
                  .pipe(
                    Object(c.a)((e) => (e && e.data) || []),
                    Object(c.a)((t) =>
                      t.filter((t) => t && t.location && t.location.id === e),
                    ),
                    Object(c.a)((t) =>
                      t.length < 1
                        ? null
                        : (t.length > 1 &&
                            this.logger.warn(
                              "retrieveAirQualityContent: received more than one air quality object for location " +
                                e,
                            ),
                          t[0]),
                    ),
                    Object(d.a)(null),
                    Object(g.a)(),
                    Object(u.a)(this.destroy$$),
                  )
              : Object(a.a)(null);
          }
          ensureService() {
            return this.retrieveWeatherService().pipe(
              Object(r.a)((e) => this.startWeatherApp(e)),
              Object(c.a)((e) => !!e && e.state === f.b.RUNNING),
              Object(l.a)((e) =>
                this.logger.info(
                  "ensureService: weather app update received: ",
                  e,
                ),
              ),
              Object(d.a)(!1),
              Object(p.Kd)(),
              Object(u.a)(this.destroy$$),
            );
          }
          stopService() {
            (this.logger.info("stopService: stopping weather service..."),
              this.retrieveWeatherService()
                .pipe(
                  Object(b.a)(1),
                  Object(r.a)((e) => this.stopWeatherApp()),
                  Object(u.a)(this.destroy$$),
                  Object(b.a)(1),
                )
                .subscribe(() => {
                  this.logger.info("stopService: stopped weather service");
                }));
          }
          stopWeatherApp() {
            return this.rudiWebappService.usages
              .retrieveUsageObjects({
                search: { client: "audi.main.weatherservice" },
              })
              .pipe(
                Object(b.a)(1),
                Object(c.a)((e) => (!!e && e.data) || []),
                Object(r.a)(
                  (e) => (
                    this.logger.info(
                      `stopWeatherApp: delete ${e.length} usages`,
                    ),
                    Object(o.b)([
                      Object(a.a)(null),
                      ...e.map((e) =>
                        this.rudiWebappService.usages.deleteUsageObject(e.id),
                      ),
                    ])
                  ),
                ),
                Object(c.a)(() => !0),
                Object(u.a)(this.destroy$$),
              );
          }
          retrieveWeatherService() {
            return this.rudiWebappService.services
              .retrieveServiceObjects({ search: { name: "weather" } })
              .pipe(
                Object(c.a)((e) => (!!e && e.data) || []),
                Object(c.a)((e) =>
                  !e || e.length < 1
                    ? null
                    : (e.length > 1 &&
                        this.logger.warn(
                          'ensureService: found more than one service for name "weather".',
                        ),
                      e[0]),
                ),
                Object(c.a)((e) => (e ? e.id : null)),
                Object(g.a)(),
                Object(r.a)((e) =>
                  e
                    ? this.rudiWebappService.services.retrieveServiceObject(e)
                    : Object(a.a)(null),
                ),
                Object(u.a)(this.destroy$$),
              );
          }
          startWeatherApp(e) {
            return e && e.app
              ? this.rudiWebappService.usages
                  .insertUsageObject({
                    app: e.app.uri,
                    client: "audi.main.weatherservice",
                  })
                  .pipe(
                    Object(r.a)(() =>
                      e && e.app
                        ? this.rudiWebappService.apps.retrieveAppObject(
                            e.app.id,
                          )
                        : Object(a.a)(null),
                    ),
                    Object(u.a)(this.destroy$$),
                  )
              : Object(a.a)(null);
          }
        }
        return (
          (e.ɵprov = m.bc({
            factory: function () {
              return new e(m.cc(_.a), m.cc(v.a), m.cc(O.b), m.cc(C.a));
            },
            token: e,
            providedIn: "root",
          })),
          e
        );
      })();
    },
    "4Y+C": function (e, t, n) {
      "use strict";
      (n.d(t, "b", function () {
        return v;
      }),
        n.d(t, "a", function () {
          return C;
        }));
      var i = n("ROBh"),
        o = n("HM3f"),
        a = n("TLy2"),
        l = n("YtkY"),
        s = n("SrNW"),
        r = n("jIqt"),
        c = n("8j5Y"),
        u = n("1+5f"),
        d = n("Yi6/"),
        h = n("pWIT"),
        g = n("jzYI"),
        b = n("q89F"),
        p = n("CAY6"),
        f = n("5axL"),
        _ = n("rjSa"),
        O = n("kZht"),
        m = n("yNay");
      function v(e) {
        return e.searchResult;
      }
      let C = (() => {
        class e {
          constructor(e, t, n) {
            ((this.searchResultDistancesService = e),
              (this.distancesService = t),
              (this.logger = n.getLogger(
                "navi.core.SearchResultDistanceAugmentationService",
              )));
          }
          augmentWithDistancesForList(e, t) {
            const n = e.pipe(
                Object(a.a)((e) =>
                  t.pipe(
                    Object(d.Xc)(
                      this.logger,
                      "augmentWithDistancesForList: list range changed ",
                    ),
                    Object(l.a)((t) => {
                      const n = e.slice(
                        t.startIndex,
                        t.startIndex + t.itemsCount,
                      );
                      return {
                        searchResults: n.filter(this.isRegularSearchResult),
                        homeBusinessResults: n.filter(
                          this.isHomeBusinessResult,
                        ),
                      };
                    }),
                  ),
                ),
                Object(d.Kd)(),
              ),
              u = n.pipe(
                Object(a.a)((e) => {
                  this.logger.info(
                    "augmentWithDistancesForList: augment regular search results",
                    e.searchResults,
                  );
                  const t = this.getSearchIdFromResultList(e.searchResults);
                  return null !== t
                    ? this.searchResultDistancesService.getDistances(
                        t,
                        this.mapTruffleSearchResultsToSearchResultIds(
                          e.searchResults,
                        ),
                      )
                    : Object(i.a)([]);
                }),
              ),
              g = n.pipe(
                Object(l.a)(
                  (e) => (
                    this.logger.info(
                      "augmentWithDistancesForList: augment home/business results",
                      e.homeBusinessResults,
                    ),
                    e.homeBusinessResults
                      .map((e) => Object(h.b)(e))
                      .filter(d.wd)
                      .filter(b.c)
                  ),
                ),
                Object(_.a)(
                  (e) => this.distancesService.retrieveDistance(e, !0),
                  b.b,
                ),
              ),
              p = e.pipe(
                Object(s.a)((e, t) => {
                  const n = this.createTruffleSearchResultWithDistance(t);
                  return (this.copyDistances(e, n), n);
                }, []),
              );
            return Object(o.b)(
              p,
              u.pipe(Object(r.a)([])),
              g.pipe(Object(r.a)([])),
            ).pipe(
              Object(c.a)(([e, t, n]) => {
                this.storeDistancesInSearchResult(e, t, n);
              }),
              Object(l.a)(([e, t, n]) => e),
            );
          }
          getSearchIdFromResultList(e) {
            let t = null;
            return (
              e.forEach((e, n) => {
                const i = e.staticObject.navAddress;
                if (i && i.source.naviSearch) {
                  const e = i.source;
                  if (e.naviSearch) return void (t = e.naviSearch.id);
                }
              }),
              t
            );
          }
          mapTruffleSearchResultsToSearchResultIds(e) {
            return e
              .map((e) => {
                const t = e.staticObject.navAddress;
                return t && t.source ? t.source.id : null;
              })
              .filter(d.wd);
          }
          isRegularSearchResult(e) {
            const t = e.staticObject.navAddress;
            return (
              void 0 !== t && void 0 !== t.latitude && void 0 !== t.longitude
            );
          }
          isHomeBusinessResult(e) {
            const t = e.staticObject.type;
            return t && (t === g.b.HOME_ADDRESS || t === g.b.BUSINESS_ADDRESS);
          }
          createTruffleSearchResultWithDistance(e) {
            return e.map((e) => ({ searchResult: e }));
          }
          copyDistances(e, t) {
            for (let n = 0; n < Math.min(e.length, t.length); n++) {
              const i = e[n],
                o = t[n];
              i.distance && !o.distance && (o.distance = i.distance);
            }
          }
          storeDistancesInSearchResult(e, t, n) {
            e.forEach((e) => {
              let i;
              const o = e.searchResult.staticObject.navAddress;
              if (o) {
                const e = t.find(
                  (e) =>
                    void 0 !== o.source.id &&
                    void 0 !== e.searchResult &&
                    o.source.id === e.searchResult.id,
                );
                e && void 0 !== e.distance && (i = this.convertDistance(e));
              } else {
                const t = Object(h.b)(e.searchResult);
                i = n.find((e) => Object(b.b)(t, e.geocoordinates));
              }
              this.storeDistanceInSingleSearchResult(e, i);
            });
          }
          storeDistanceInSingleSearchResult(e, t) {
            t
              ? this.shouldSetDistance(e, t)
                ? ((e.distance = t),
                  this.logger.debug(
                    "storeDistanceInSingleSearchResult: received distance for result: ",
                    e,
                  ))
                : this.logger.debug(
                    "storeDistanceInSingleSearchResult: ignore AirDistance for result with RRD: ",
                    e,
                  )
              : this.logger.debug(
                  "storeDistanceInSingleSearchResult: no distance found for location: ",
                  e,
                );
          }
          convertDistance(e) {
            const t = {};
            switch (((t.direction = e.direction), e.distanceType)) {
              case u.m.ROAD:
                ((t.roaddistance = e.distance), (t.withRoadDistance = !0));
                break;
              case u.m.AIR:
                ((t.airdistance = e.distance), (t.withRoadDistance = !1));
            }
            return t;
          }
          shouldSetDistance(e, t) {
            return (
              !e.distance ||
              !!this.isAirDistance(e.distance) ||
              !this.isAirDistance(t)
            );
          }
          isAirDistance(e) {
            return null == e.roaddistance;
          }
        }
        return (
          (e.ɵprov = O.bc({
            factory: function () {
              return new e(O.cc(f.a), O.cc(p.a), O.cc(m.a));
            },
            token: e,
            providedIn: "root",
          })),
          e
        );
      })();
    },
    "5MwF": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return S;
      });
      var i = n("QQZH"),
        o = n("rYDR"),
        a = n("C05f"),
        l = n("ZTXN"),
        s = n("ROBh"),
        r = n("HM3f"),
        c = n("kuMc"),
        u = n("J+dc"),
        d = n("YtkY"),
        h = n("xVbo"),
        g = n("TLy2"),
        b = n("Ohay"),
        p = n("8j5Y"),
        f = n("Yi6/"),
        _ = n("bkj4"),
        O = n("MddD"),
        m = n("qTQ5"),
        v = n("9ehv"),
        C = n("H+9d"),
        y = n("VtUd"),
        M = n("Zbi+"),
        P = n("P1io");
      class S {
        constructor(e, t, n, s, r, c, u, d, h) {
          ((this.logger = e),
            (this.entrypointService = t),
            (this.onlineRoutingService = n),
            (this.dopiHelperService = s),
            (this.routesService = r),
            (this.weatherService = c),
            (this.functionAvailabilityService = u),
            (this.phoneService = d),
            (this.locationTypeService = h),
            (this.location$$ = new i.a(1)),
            (this.route$ = o.a),
            (this.hasValidRoute = !1),
            (this.realRoadDistance = 0),
            (this.routeCalculationError = !1),
            (this.hasRoadBlock = !1),
            (this.routeId = ""),
            (this.isPoiLocation = !1),
            (this.isDopiDetailsAvailable = !1),
            (this.dopiContent = ""),
            (this.dopiWeatherContent = ""),
            (this.destroy$$ = new i.a(1)),
            (this.deleteRouteOnScreenLeave$$ = new a.a(!0)),
            (this.onWeatherTap$$ = new l.a()),
            (this.onLocationDetailsTap$$ = new l.a()),
            (this.isPhoneAvailable = !1),
            (this.locationPhoneNumber = ""),
            (this.isLocationWithParking = !1),
            (this.lockingOperationPanelItemsParam = {
              lockingKey: {
                type: f.Eb.SCREEN,
                category: f.Ab.COMPLEX,
                context: f.Bb.NAV,
              },
            }),
            (this.lockingOperationPanelDefaultItemsParam = {
              lockingKey: {
                type: f.Eb.SCREEN,
                category: f.Ab.COMPLEX,
                context: f.Bb.DEFAULT_CONTEXT,
              },
            }));
        }
        ngOnInit() {
          (this.initLocationPhoneNumberSubscription(),
            this.initWebAppsExistence(),
            this.initDopiSubscription(),
            this.initRouteCalculationSubscription(),
            this.initWeather(),
            this.initEvaluateLocationWithParkingSubscription());
        }
        ngOnDestroy() {
          (this.destroy$$.next(), this.destroy$$.complete());
        }
        initLocationSubscription(e) {
          (this.logger.info(
            "initLocationSubscription: initializing location subscription",
          ),
            e.pipe(Object(c.a)(this.destroy$$)).subscribe((e) => {
              (this.logger.info("initLocationSubscription: location update", e),
                this.location$$.next(e));
            }));
        }
        goToWeather() {
          (this.onWeatherTap$$.next(),
            this.logger.info("goToWeather: called."),
            this.location$$
              .pipe(
                Object(u.a)(1),
                Object(c.a)(this.onLocationDetailsTap$$),
                Object(c.a)(this.destroy$$),
              )
              .subscribe((e) => {
                e
                  ? this.findEntryPointServiceAndGoToWebApp(
                      e,
                      C.b.NAVI_WEATHER,
                      this.onWeatherTap$$,
                    )
                  : this.logger.warn("goToWeather: location is not resolved!");
              }));
        }
        goToLocationDetails() {
          (this.logger.info("goToLocationDetails: try to go to details"),
            this.onLocationDetailsTap$$.next(),
            this.location$$
              .pipe(
                Object(u.a)(1),
                Object(c.a)(this.onLocationDetailsTap$$),
                Object(c.a)(this.destroy$$),
              )
              .subscribe((e) => {
                if (e) {
                  const t = this.getEntryPointTagForLocation(e);
                  t
                    ? this.findEntryPointServiceAndGoToWebApp(
                        e,
                        t,
                        this.onLocationDetailsTap$$,
                      )
                    : this.logger.warn(
                        "goToLocationDetails: no entry point tag found for current location!",
                        e,
                      );
                } else
                  this.logger.warn(
                    "goToLocationDetails: location is not resolved!",
                  );
              }));
        }
        initEvaluateLocationWithParkingSubscription() {
          this.location$$.pipe(Object(c.a)(this.destroy$$)).subscribe((e) => {
            this.isLocationWithParking =
              null != e &&
              (this.locationTypeService.isParkingLocation(e) ||
                this.locationTypeService.isPetrolStationLocation(e) ||
                this.locationTypeService.isChargingStationLocation(e));
          });
        }
        findEntryPointServiceAndGoToWebApp(e, t, n) {
          this.entrypointService
            .entryPointsForTag$(t)
            .pipe(
              Object(d.a)((e) => (e && e.find((e) => !!e)) || void 0),
              Object(h.a)(f.wd),
              Object(u.a)(1),
              Object(c.a)(this.destroy$$),
              Object(c.a)(n),
            )
            .subscribe((n) => {
              (this.logger.debug(
                "findEntryPointServiceAndGoToWebApp: received:",
                { entryPointTag: t, ep: n },
              ),
                n && e && e.coordinates
                  ? this.goToWebApp(n, this.buildLocationMap(e))
                  : this.logger.warn(
                      "findEntryPointServiceAndGoToWebApp: unable to perform action, either location or ep invalid:",
                      { ep: n, location: e },
                    ));
            });
        }
        getEntryPointTagForLocation(e) {
          if (e && e.provider)
            switch (e.provider) {
              case O.j.GOOGLE:
                return C.b.NAVI_DETAILS_GOOGLE;
              case O.j.OSP:
                return C.b.NAVI_DETAILS_OSP;
              default:
                return C.b.NAVI_DETAILS;
            }
        }
        buildLocationMap(e) {
          const t = new Map();
          return (
            e && e.coordinates
              ? (t.set("latitude", `${e.coordinates.latitudeDegree}`),
                t.set("longitude", `${e.coordinates.longitudeDegree}`),
                t.set("city", `${e.city}`),
                t.set("locationId", `${e.id}`),
                t.set("poiId", `${e.poiId}`),
                t.set("providerId", `${e.providerId}`))
              : this.logger.warn(
                  "buildLocationMap: current location is not vaild!",
                  e,
                ),
            t
          );
        }
        initWeather() {
          this.location$$
            .pipe(
              Object(u.a)(1),
              Object(g.a)((e) =>
                e &&
                e.coordinates &&
                null != e.coordinates.longitudeDegree &&
                null != e.coordinates.latitudeDegree
                  ? this.weatherService.getWeather({
                      longitudeDegree: e.coordinates.longitudeDegree,
                      latitudeDegree: e.coordinates.latitudeDegree,
                      altitudeInMeters: 0,
                    })
                  : Object(s.a)({}),
              ),
              Object(b.a)(),
              Object(c.a)(this.destroy$$),
            )
            .subscribe((e) => {
              (this.logger.info("initWeather: received weather data: ", e),
                (this.dopiWeatherContent =
                  (e && e.weatherContent && e.weatherContent.content) || ""),
                Object(f.wd)(e) &&
                  Object(f.wd)(e.airQuality) &&
                  Object(f.wd)(e.airQuality.airQualityIndex) &&
                  (this.dopiAirQualityIndex = e.airQuality.airQualityIndex));
            });
        }
        initLocationPhoneNumberSubscription() {
          this.locationPhoneNumber$ = this.location$$.pipe(
            Object(d.a)((e) =>
              null != e && e.phoneNumber && e.phoneNumber.length > 2
                ? e.phoneNumber
                : "",
            ),
          );
          const e = this.phoneService.phones$.pipe(
            Object(d.a)(
              (e) =>
                !!e.length &&
                !!e.focusDevice &&
                e.focusDevice.connectionState === M.e.ATTACHED,
            ),
          );
          Object(r.b)(this.locationPhoneNumber$, e)
            .pipe(
              Object(f.pd)(this.logger, "initLocationPhoneNumberSubscription:"),
              Object(c.a)(this.destroy$$),
            )
            .subscribe(([e, t]) => {
              ((this.isPhoneAvailable = t), (this.locationPhoneNumber = e));
            });
        }
        getWebAppExistenceForLocation(e) {
          let t;
          if (e.provider) {
            switch (e.provider) {
              case O.j.GOOGLE:
                (this.logger.info(
                  "getWebAppExistenceForLocation: check for google app availability",
                ),
                  (t =
                    this.functionAvailabilityService
                      .googleSearchAvailability$));
                break;
              case O.j.OSP:
                (this.logger.info(
                  "getWebAppExistenceForLocation: check for onstreet parking app availability",
                ),
                  (t =
                    this.functionAvailabilityService
                      .onStreetParkingAvailability$));
                break;
              default:
                (this.logger.info(
                  "getWebAppExistenceForLocation: check for dopi app availability",
                ),
                  (t = this.functionAvailabilityService.dopiAvailability$));
            }
            return t.pipe(
              Object(d.a)((e) => e.existenceAndPopupAction.existence),
            );
          }
          return (
            this.logger.warn(
              "getWebAppExistenceForLocation: location has no provider:",
              e,
            ),
            Object(s.a)(!1)
          );
        }
        initWebAppsExistence() {
          ((this.isDopiDetailsExisting$ = this.location$$.pipe(
            Object(p.a)((e) => (this.isPoiLocation = !!e && !!e.poiId)),
            Object(h.a)(f.wd),
            Object(g.a)((e) =>
              this.getWebAppExistenceForLocation(e).pipe(
                Object(d.a)((t) => t && !!e && !!e.poiId),
              ),
            ),
            Object(p.a)((e) =>
              this.logger.info(
                "initWebAppsExistence: isDopiDetailsAppExisting:",
                e,
              ),
            ),
            Object(c.a)(this.destroy$$),
          )),
            (this.isWeatherDetailsExisting$ =
              this.functionAvailabilityService.weatherAvailability$.pipe(
                Object(d.a)((e) => e.existenceAndPopupAction.existence),
                Object(p.a)((e) =>
                  this.logger.info(
                    "initWebAppsExistence: isWeatherDetailsExisting:",
                    e,
                  ),
                ),
                Object(c.a)(this.destroy$$),
              )));
        }
        initDopiSubscription() {
          (this.location$$
            .pipe(
              Object(p.a)(() => (this.dopiContent = "")),
              Object(g.a)((e) =>
                e && e.poiId
                  ? this.dopiHelperService.layouts$(m.d.FOLLOWUP, [e], (e) => ({
                      provider: e.provider,
                      request: v.a.mapLocationToDopiRequest(e),
                    }))
                  : Object(s.a)([]),
              ),
              Object(h.a)((e) => e && e.length > 0),
              Object(u.a)(1),
              Object(c.a)(this.destroy$$),
            )
            .subscribe((e) => {
              this.dopiContent = (e && e[0] && e[0].content) || "";
            }),
            this.location$$
              .pipe(
                Object(p.a)(() => (this.isDopiDetailsAvailable = !1)),
                Object(g.a)((e) =>
                  e && e.poiId
                    ? this.dopiHelperService.datasets$(
                        m.d.DETAILS,
                        [e],
                        (e) => ({
                          provider: e.provider,
                          request: v.a.mapLocationToDopiRequest(e),
                        }),
                      )
                    : Object(s.a)([]),
                ),
              )
              .pipe(
                Object(h.a)((e) => e && e.length > 0),
                Object(u.a)(1),
                Object(c.a)(this.destroy$$),
              )
              .subscribe((e) => {
                this.logger.info(
                  "initDopiSubscription: isDopiDetailsAvailable reveiced datasets: ",
                  e,
                );
                const t = e.find((e) => e && e.type === m.a.DETAILSAVAILABLE);
                this.isDopiDetailsAvailable =
                  !!t &&
                  t.valueType === m.b.BOOLEAN &&
                  !!t.value &&
                  "true" === t.value.toLowerCase();
              }),
            (this.weatherState$ = this.entrypointService
              .entryPointsForTag$(C.b.NAVI_WEATHER)
              .pipe(
                Object(c.a)(this.destroy$$),
                Object(d.a)((e) => ({
                  available: e.length > 0 && !e[0].disableReason,
                  disabledReason: e.length > 0 && e[0].disableReason,
                })),
                Object(f.pd)(
                  this.logger,
                  "initDopiSubscription: weatherState:",
                ),
                Object(f.Kd)(),
              )),
            this.location$$
              .pipe(
                Object(h.a)((e) => !!e && !!e.provider),
                Object(g.a)((e) => {
                  switch (e.provider) {
                    case O.j.GOOGLE:
                      return this.entrypointService.entryPointsForTag$(
                        C.b.NAVI_DETAILS_GOOGLE,
                      );
                    default:
                      return this.entrypointService.entryPointsForTag$(
                        C.b.NAVI_DETAILS,
                      );
                  }
                }),
              )
              .pipe(Object(c.a)(this.destroy$$))
              .subscribe((e) => {
                if (!e || e.length < 1)
                  return void (this.detailsDisableReason = {
                    type: f.A.SHOW_POPUP,
                  });
                const t = e.find((e) => !!e && !!e.disableReason);
                this.detailsDisableReason = t && t.disableReason;
              }));
        }
        initRouteCalculationSubscription() {
          ((this.route$ = this.location$$.pipe(
            Object(g.a)(
              (e) => (
                (this.routeCalculationError = !1),
                e
                  ? (this.logger.info(
                      `initRouteCalculationSubscription: received valid location ${e.id}, create route`,
                    ),
                    this.routesService.createRoute(
                      [
                        {
                          location: e,
                          isAutoaddedChargingStation: !1,
                          isNext: !0,
                        },
                      ],
                      y.a.PREVIEW,
                    ))
                  : (this.logger.info(
                      "initRouteCalculationSubscription: received no valid location, cannot create route",
                    ),
                    o.a)
              ),
            ),
            Object(f.Kd)(),
          )),
            this.route$.pipe(Object(c.a)(this.destroy$$)).subscribe((e) => {
              if (
                ((this.hasValidRoute = y.b.isRouteValid(e)),
                this.logger.info(
                  `initRouteCalculationSubscription: ${this.hasValidRoute ? "" : "in"}valid route:`,
                  e,
                ),
                this.hasValidRoute &&
                  e.destinations &&
                  e.destinations.length > 0)
              ) {
                const t = e.destinations[0];
                ((this.routeId = e.id),
                  (this.realRoadDistance = t.roadDistance || 0),
                  (this.eta = t.eta || 0),
                  (this.delay = t.trafficDelayPredictive
                    ? t.trafficDelayPredictive
                    : null),
                  (this.hasRoadBlock = !!e.hasRoadblock),
                  (this.tollAmount = e.tollFee || null));
              } else
                ((this.routeId = ""),
                  (this.realRoadDistance = 0),
                  (this.eta = null),
                  (this.delay = null),
                  (this.hasRoadBlock = !1),
                  (this.tollAmount = null));
              this.routeCalculationError =
                e.state === _.q.ERROR || e.state === _.q.CANCELLED;
            }),
            Object(r.b)(
              this.route$,
              this.deleteRouteOnScreenLeave$$,
              this.destroy$$,
            )
              .pipe(
                Object(d.a)(([e, t]) => !!e && t),
                Object(u.a)(1),
              )
              .subscribe(
                (e) => {
                  e &&
                    (this.logger.info(
                      "initRouteCalculationSubscription: screen was destroyed, remove route from preview context",
                    ),
                    this.routesService.removeRouteForContext(y.a.PREVIEW));
                },
                (e) => {
                  this.logger.error(
                    "initRouteCalculationSubscription: route could not be created",
                    e,
                  );
                },
                () => {
                  this.logger.info(
                    "initRouteCalculationSubscription: subscription completed",
                  );
                },
              ));
        }
        goToWebApp(e, t) {
          return (
            this.logger.info("goToWebApp: ", e),
            this.onlineRoutingService.goToIncludeStateWebApp(P.u, e.id, t)
          );
        }
        callNumber() {
          this.phoneService.dialNumber(this.locationPhoneNumber).then(
            () => {
              this.logger.info(
                `callNumber: Calling ${this.locationPhoneNumber} from Navi Detail Screen`,
              );
            },
            (e) => {
              this.logger.error(
                `callNumber: Error calling ${this.locationPhoneNumber} from Navi Detail Screen`,
                e,
              );
            },
          );
        }
      }
    },
    "7f94": function (e, t, n) {
      "use strict";
      function i(e) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
            return `E93A_navigation_map_preview_pin${e}.webp`;
          default:
            return;
        }
      }
      function o(e) {
        return (
          (!!e && e.withRoadDistance && !!e.roaddistance) ||
          (!!e && !!e.airdistance)
        );
      }
      function a(e) {
        return e && e.withRoadDistance && null != e.roaddistance
          ? e.roaddistance
          : e && null != e.airdistance
            ? e.airdistance
            : NaN;
      }
      (n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "a", function () {
          return a;
        }));
    },
    "967Q": function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return S;
      }),
        n.d(t, "b", function () {
          return I;
        }));
      var i = n("kZht"),
        o = n("HVUF"),
        a = n("B3Zb"),
        l = n("yNay"),
        s = n("3EdB"),
        r = n("eoEw"),
        c = n("m3Ja"),
        u = n("SOvQ"),
        d = n("cOck"),
        h = n("2ozK"),
        g = n("ulbR"),
        b = n("BOsO"),
        p = n("Ps6X"),
        f = n("6zvu"),
        _ = n("An66"),
        O = n("/51X"),
        m = n("fu7d"),
        v = n("bou3"),
        C = n("th8l"),
        y = n("qzuC"),
        M = n("Dyvp"),
        P = n("yDGg"),
        S =
          (n("igiz"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:block;position:relative;width:1376px;height:120px}.use-container-width[_nghost-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{width:100%;height:100%}.first-line[_ngcontent-%COMP%]{width:100%;padding-top:13px;font-size:40px;display:grid;grid-template-columns:70px calc(100% - 321px) 251px;grid-template-rows:calc(1em + 14px);grid-template-areas:"icon first_line_cell_3 first_line_cell_4"}.first-line--numbered[_ngcontent-%COMP%]{grid-template-columns:70px 55px calc(100% - 321px) 196px;grid-template-areas:"icon number first_line_cell_3 first_line_cell_4"}.first-line__icon[_ngcontent-%COMP%], .second-line__icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;grid-area:icon;padding:0 15px}.first-line__number[_ngcontent-%COMP%], .second-line__number[_ngcontent-%COMP%]{grid-area:number;padding:7px 15px 7px 0}.first-line__text[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;padding-right:0;padding-left:15px;grid-area:first_line_cell_3}.first-line__additional-info[_ngcontent-%COMP%]{display:flex;align-items:normal;justify-content:flex-end;grid-area:first_line_cell_4;width:251px}.first-line__additional-info--numbered[_ngcontent-%COMP%]{width:196px}.second-line[_ngcontent-%COMP%]{width:100%;padding-top:5px;font-size:30px;display:grid;grid-template-columns:70px calc(100% - 70px);grid-template-rows:calc(1em + 6px);grid-template-areas:"icon rest"}.second-line--numbered[_ngcontent-%COMP%]{grid-template-columns:70px 55px calc(100% - 125px);grid-template-areas:"icon number rest"}.second-line__rest[_ngcontent-%COMP%]{grid-area:rest;display:flex;flex-direction:row;justify-content:space-between}.rest__text[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;flex:1 1 0}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .first-line__text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .first-line__text[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .second-line__rest[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .second-line__rest[_ngcontent-%COMP%]{padding-right:0;padding-left:15px}.component-layout-latin[_nghost-%COMP%]   .first-line__additional-info[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .first-line__additional-info[_ngcontent-%COMP%]{padding:0 15px 0 30px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .first-line__number[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .first-line__number[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .second-line__number[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .second-line__number[_ngcontent-%COMP%]{grid-area:number;padding:7px 0 7px 15px}.component-layout-arabic[_nghost-%COMP%]   .first-line__address[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .first-line__address[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .second-line__rest[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .second-line__rest[_ngcontent-%COMP%]{padding-right:15px;padding-left:0}@media (max-width:1280px){[_nghost-%COMP%]{width:1130px}.use-container-width[_nghost-%COMP%]{width:100%}}',
              ],
            ],
            data: {},
          }));
      function x(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "first-line__number"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              1,
              0,
              null,
              null,
              1,
              "au3-icon",
              [],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              o.b,
              o.a,
            )),
            i.xb(
              2,
              4243456,
              null,
              0,
              a.b,
              [l.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            e(t, 2, 0, n.getLineNumberIcon(n.lineNumber), n.iconCategory);
          },
          function (e, t) {
            e(t, 1, 0, i.Nb(t, 2).iconComponentHidden);
          },
        );
      }
      function w(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-formatted-unit-renderer",
              [],
              [[2, "invisible", null]],
              null,
              null,
              s.b,
              s.a,
            )),
            i.xb(
              1,
              180224,
              null,
              0,
              r.b,
              [c.a, u.a, i.h],
              {
                smallerFontForUnit: [0, "smallerFontForUnit"],
                rawValue: [1, "rawValue"],
                rawValueUnit: [2, "rawValueUnit"],
                rawValueFormattingRule: [3, "rawValueFormattingRule"],
              },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            e(
              t,
              1,
              0,
              !0,
              n.getDistanceValue(n.directionAndDistance),
              n.sourceUnit,
              n.distanceFormattingRule,
            );
          },
          function (e, t) {
            e(t, 0, 0, i.Nb(t, 1).isInvisible);
          },
        );
      }
      function L(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-direction-distance",
              [],
              null,
              null,
              null,
              d.b,
              d.a,
            )),
            i.xb(
              1,
              49152,
              null,
              0,
              h.a,
              [],
              { distance: [0, "distance"] },
              null,
            ),
          ],
          function (e, t) {
            e(t, 1, 0, t.component.directionAndDistance);
          },
          null,
        );
      }
      function $(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              0,
              "div",
              [["class", "second-line__number"]],
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
      function I(e) {
        return i.ac(
          2,
          [
            i.Pb(0, g.a, []),
            i.Pb(0, b.a, []),
            (e()(),
            i.yb(
              2,
              0,
              null,
              null,
              30,
              "div",
              [["class", "container"]],
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
              3,
              212992,
              null,
              0,
              p.a,
              [[2, f.a], [8, null], [3, p.a], i.l, i.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (e()(),
            i.yb(
              4,
              0,
              null,
              null,
              15,
              "div",
              [["class", "first-line"]],
              [[2, "first-line--numbered", null]],
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              5,
              0,
              null,
              null,
              2,
              "div",
              [["class", "first-line__icon"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              6,
              0,
              null,
              null,
              1,
              "au3-icon",
              [],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              o.b,
              o.a,
            )),
            i.xb(
              7,
              4243456,
              null,
              0,
              a.b,
              [l.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (e()(), i.hb(16777216, null, null, 1, null, x)),
            i.xb(
              9,
              16384,
              null,
              0,
              _.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            i.yb(
              10,
              0,
              null,
              null,
              5,
              "div",
              [["class", "first-line__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              11,
              0,
              null,
              null,
              4,
              "au3-highlighting-label",
              [["id", "AddressLine_1"]],
              [[2, "abbreviate-at-beginning", null]],
              null,
              null,
              O.b,
              O.a,
            )),
            i.xb(
              12,
              212992,
              null,
              0,
              m.a,
              [i.l, i.D, v.a, l.a, [3, m.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              13,
              704512,
              null,
              0,
              C.b,
              [y.a],
              { text: [0, "text"], highlightAreas: [1, "highlightAreas"] },
              null,
            ),
            i.Rb(14, 1),
            i.Rb(15, 1),
            (e()(),
            i.yb(
              16,
              0,
              null,
              null,
              3,
              "div",
              [["class", "first-line__additional-info"]],
              [[2, "first-line__additional-info--numbered", null]],
              null,
              null,
              null,
              null,
            )),
            (e()(), i.hb(16777216, null, null, 1, null, w)),
            i.xb(
              18,
              16384,
              null,
              0,
              _.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(), i.hb(0, [["distanceNoLineNumbers", 2]], null, 0, null, L)),
            (e()(),
            i.yb(
              20,
              0,
              null,
              null,
              12,
              "div",
              [["class", "second-line"]],
              [[2, "second-line--numbered", null]],
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              21,
              0,
              null,
              null,
              0,
              "div",
              [["class", "second-line__icon"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.hb(16777216, null, null, 1, null, $)),
            i.xb(
              23,
              16384,
              null,
              0,
              _.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            i.yb(
              24,
              0,
              null,
              null,
              8,
              "div",
              [["class", "second-line__rest"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              25,
              0,
              null,
              null,
              5,
              "div",
              [["class", "rest__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              26,
              0,
              null,
              null,
              4,
              "au3-highlighting-label",
              [["id", "AddressLine_2"]],
              [[2, "abbreviate-at-beginning", null]],
              null,
              null,
              O.b,
              O.a,
            )),
            i.xb(
              27,
              212992,
              null,
              0,
              m.a,
              [i.l, i.D, v.a, l.a, [3, m.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              28,
              704512,
              null,
              0,
              C.b,
              [y.a],
              { text: [0, "text"], highlightAreas: [1, "highlightAreas"] },
              null,
            ),
            i.Rb(29, 1),
            i.Rb(30, 1),
            (e()(),
            i.yb(
              31,
              0,
              null,
              null,
              1,
              "au3-list-item-additional-info",
              [],
              null,
              null,
              null,
              M.b,
              M.a,
            )),
            i.xb(
              32,
              49152,
              null,
              0,
              P.a,
              [],
              {
                dopiData: [0, "dopiData"],
                isGoogleLocation: [1, "isGoogleLocation"],
                entryFlagList: [2, "entryFlagList"],
              },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 3, 0, n.uiStateType),
              e(
                t,
                7,
                0,
                null == n.address ? null : n.address.icon,
                n.iconCategory,
              ),
              e(t, 9, 0, n.showLineNumber && n.lineNumber),
              e(t, 12, 0, "AddressLine_1"));
            var o = i.Yb(
                t,
                13,
                0,
                e(
                  t,
                  14,
                  0,
                  i.Nb(t, 0),
                  n.address && n.address.lines
                    ? null == n.address
                      ? null
                      : n.address.lines[0]
                    : "",
                ),
              ),
              a = i.Yb(
                t,
                13,
                1,
                e(
                  t,
                  15,
                  0,
                  i.Nb(t, 1),
                  n.useHighlighting && n.address && n.address.lines
                    ? null == n.address
                      ? null
                      : n.address.lines[0]
                    : "",
                ),
              );
            (e(t, 13, 0, o, a),
              e(t, 18, 0, n.showLineNumber, i.Nb(t, 19)),
              e(t, 23, 0, n.showLineNumber && n.lineNumber),
              e(t, 27, 0, "AddressLine_2"));
            var l = i.Yb(
                t,
                28,
                0,
                e(
                  t,
                  29,
                  0,
                  i.Nb(t, 0),
                  n.address && n.address.lines
                    ? null == n.address
                      ? null
                      : n.address.lines[1]
                    : "",
                ),
              ),
              s = i.Yb(
                t,
                28,
                1,
                e(
                  t,
                  30,
                  0,
                  i.Nb(t, 1),
                  n.useHighlighting && n.address && n.address.lines
                    ? null == n.address
                      ? null
                      : n.address.lines[1]
                    : "",
                ),
              );
            (e(t, 28, 0, l, s),
              e(
                t,
                32,
                0,
                n.dopiData,
                n.isGoogleLocation,
                n.getPoiEntryFlags(),
              ));
          },
          function (e, t) {
            var n = t.component;
            (e(
              t,
              2,
              0,
              i.Nb(t, 3).uiStateListHorizontal,
              i.Nb(t, 3).uiStateListVertical,
              i.Nb(t, 3).uiStateCoverLeft,
              i.Nb(t, 3).uiStateCoverRight,
              i.Nb(t, 3).uiStateCoverBottom,
              i.Nb(t, 3).uiStateButton,
              i.Nb(t, 3).uiStateByDabLeft,
              i.Nb(t, 3).uiStateByDabRight,
              i.Nb(t, 3).uiStateLbDabLeft,
              i.Nb(t, 3).uiStateLbDabRight,
            ),
              e(t, 4, 0, n.showLineNumber),
              e(t, 6, 0, i.Nb(t, 7).iconComponentHidden),
              e(t, 11, 0, i.Nb(t, 13).abbreviateBeginningOfText),
              e(t, 16, 0, n.showLineNumber),
              e(t, 20, 0, n.showLineNumber),
              e(t, 26, 0, i.Nb(t, 28).abbreviateBeginningOfText));
          },
        );
      }
    },
    Dyvp: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return O;
      }),
        n.d(t, "b", function () {
          return M;
        }));
      var i = n("kZht"),
        o = n("HVUF"),
        a = n("B3Zb"),
        l = n("yNay"),
        s = n("An66"),
        r = n("0qMr"),
        c = n("Yi6/"),
        u = n("nTAn");
      class d {
        constructor(e) {
          ((this.iconScaleMode = c.ab.None),
            (this.iconCategory = c.Z.StatusLine),
            (this.providerIcon$ = e.listItemIcon$));
        }
      }
      var h = i.wb({
        encapsulation: 0,
        styles: [["[_nghost-%COMP%]{display:inline-block}"]],
        data: {},
      });
      function g(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [],
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
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                scaleMode: [2, "scaleMode"],
                ignoreCategorySize: [3, "ignoreCategorySize"],
              },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            e(
              t,
              1,
              0,
              t.parent.context.mib3Let,
              n.iconCategory,
              n.iconScaleMode,
              !0,
            );
          },
          function (e, t) {
            e(t, 0, 0, i.Nb(t, 1).iconComponentHidden);
          },
        );
      }
      function b(e) {
        return i.ac(
          0,
          [
            (e()(),
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
            (e()(), i.hb(16777216, null, null, 1, null, g)),
            i.xb(
              2,
              16384,
              null,
              0,
              s.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), i.hb(0, null, null, 0)),
          ],
          function (e, t) {
            e(t, 2, 0, t.context.mib3Let);
          },
          null,
        );
      }
      function p(e) {
        return i.ac(
          2,
          [
            (e()(), i.hb(16777216, null, null, 2, null, b)),
            i.xb(
              1,
              16384,
              null,
              0,
              r.a,
              [i.L, i.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            i.Pb(131072, s.b, [i.h]),
          ],
          function (e, t) {
            var n = t.component;
            e(t, 1, 0, i.Yb(t, 1, 0, i.Nb(t, 2).transform(n.providerIcon$)));
          },
          null,
        );
      }
      var f = n("AKlD"),
        _ = n("u0MH"),
        O =
          (n("yDGg"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;position:relative}.entry-flags[_ngcontent-%COMP%]{flex:0 0 content;padding:0 0 0 30px}.dopi[_ngcontent-%COMP%]{overflow:hidden;display:flex;justify-content:flex-end;max-width:541px;height:40px}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .entry-flags[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .entry-flags[_ngcontent-%COMP%]{padding:0 0 0 30px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .entry-flags[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .entry-flags[_ngcontent-%COMP%]{padding:0 30px 0 0}",
              ],
            ],
            data: {},
          }));
      function m(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              0,
              "div",
              [["class", "dopi"]],
              [[8, "innerHTML", 1]],
              null,
              null,
              null,
              null,
            )),
          ],
          null,
          function (e, t) {
            e(t, 0, 0, t.component.dopiData);
          },
        );
      }
      function v(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-external-search-provider-icon",
              [["class", "dopi"]],
              null,
              null,
              null,
              p,
              h,
            )),
            i.xb(1, 49152, null, 0, d, [u.a], null, null),
          ],
          null,
          null,
        );
      }
      function C(e) {
        return i.ac(
          0,
          [
            (e()(), i.hb(16777216, null, null, 1, null, v)),
            i.xb(
              1,
              16384,
              null,
              0,
              s.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(), i.hb(0, null, null, 0)),
          ],
          function (e, t) {
            e(t, 1, 0, t.component.isGoogleLocation, i.Nb(t.parent, 3));
          },
          null,
        );
      }
      function y(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-entry-flags",
              [["class", "entry-flags"]],
              null,
              null,
              null,
              f.b,
              f.a,
            )),
            i.xb(
              1,
              49152,
              null,
              0,
              _.a,
              [],
              { entryFlagList: [0, "entryFlagList"] },
              null,
            ),
          ],
          function (e, t) {
            e(t, 1, 0, t.component.entryFlagList);
          },
          null,
        );
      }
      function M(e) {
        return i.ac(
          2,
          [
            (e()(), i.hb(16777216, null, null, 1, null, m)),
            i.xb(
              1,
              16384,
              null,
              0,
              s.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(), i.hb(0, [["googleIcon", 2]], null, 0, null, C)),
            (e()(), i.hb(0, [["entryFlags", 2]], null, 0, null, y)),
          ],
          function (e, t) {
            e(t, 1, 0, t.component.dopiData, i.Nb(t, 2));
          },
          null,
        );
      }
    },
    KeLT: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var i = n("1+5f"),
        o = (n("Yi6/"), n("jzYI"));
      class a {
        constructor(e) {
          this.logger = e.getLogger("navi.TruffleSearchResultTypePipe");
        }
        transform(e) {
          const t =
              e && e.navAddress && e.navAddress.resultType
                ? e.navAddress.resultType
                : void 0,
            n = e && e.type ? e.type : void 0;
          if (n) return n;
          if (!t)
            return (
              this.logger.warn(
                "transform: defaulting to LOCATION because of no staticType or resultType of result:",
                e,
              ),
              o.b.LOCATION
            );
          switch (t) {
            case i.k.LOCATION:
              return o.b.LOCATION;
            case i.k.CONTACTWITHSINGLEADDRESS:
            case i.k.CONTACTWITHMULTIPLEADDRESSES:
              return o.b.CONTACT;
            case i.k.PRESSTOUR:
              return o.b.PRESSTOUR;
            case i.k.TOUR:
              return o.b.TOUR;
            default:
              return (
                this.logger.warn(
                  "transform: defaulting to LOCATION because of unknown resultType:",
                  t,
                ),
                o.b.LOCATION
              );
          }
        }
      }
    },
    QVXB: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return A;
      }),
        n.d(t, "b", function () {
          return G;
        }));
      var i = n("kZht"),
        o = n("OZIZ"),
        a = n("Hc5o"),
        l = n("2rvh"),
        s = n("iQ+n"),
        r = n("yNay"),
        c = n("HVUF"),
        u = n("B3Zb"),
        d = n("8TlW"),
        h = n("fu7d"),
        g = n("bou3"),
        b = n("ijxY"),
        p = n("Xo58"),
        f = n("m3Ja"),
        _ = n("r+e+"),
        O = n("bmFL"),
        m = n("3EdB"),
        v = n("eoEw"),
        C = n("SOvQ"),
        y = n("An66"),
        M = n("cOck"),
        P = n("2ozK"),
        S = n("nQV3"),
        x = n("3+OJ"),
        w = n("Dyvp"),
        L = n("yDGg"),
        $ = n("Ps6X"),
        I = n("6zvu"),
        N = n("0qMr"),
        A =
          (n("nqvY"),
          n("SFb6"),
          n("v98a"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:block;position:relative;width:100%;height:120px}.container[_ngcontent-%COMP%]{width:100%;height:100%}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.both-lines[_ngcontent-%COMP%]{width:100%;padding-top:16px;font-size:40px;display:grid;grid-template-columns:70px calc(100% - 336px) 251px;grid-template-rows:49px 37px;grid-template-areas:"first_line_cell_1 first_line_cell_3 first_line_cell_4" "second_line_cell_1 second_line_cell_3 second_line_cell_4";grid-row-gap:5px}.both-lines--numbered[_ngcontent-%COMP%]{grid-template-columns:70px 55px calc(100% - 336px) 196px;grid-template-areas:"first_line_cell_1 first_line_cell_2 first_line_cell_3 first_line_cell_4" "second_line_cell_1 second_line_cell_2 second_line_cell_3 second_line_cell_4"}.first-line__icon[_ngcontent-%COMP%]{grid-area:first_line_cell_1;padding:4px 15px}.first-line__number[_ngcontent-%COMP%]{grid-area:first_line_cell_2;padding:4px 15px 4px 0}.first-line__address[_ngcontent-%COMP%]{padding-right:0;padding-left:15px;grid-area:first_line_cell_3}.first-line__address--wide[_ngcontent-%COMP%]{grid-column-end:first_line_cell_4}.first-line__additional-info[_ngcontent-%COMP%]{display:flex;align-items:baseline;justify-content:flex-end;grid-area:first_line_cell_4;width:251px}.first-line__additional-info--numbered[_ngcontent-%COMP%]{width:196px}.second-line__rest[_ngcontent-%COMP%]{grid-area:second_line_cell_3;grid-column-end:second_line_cell_4;padding-right:0}.second-line-edit-mode__rest[_ngcontent-%COMP%], .second-line__rest[_ngcontent-%COMP%]{font-size:30px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding-left:15px}.second-line-edit-mode__rest[_ngcontent-%COMP%]{grid-area:second_line_cell_3}.rest__text[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;flex:1 1 0}.both-lines__handle-move-mode[_ngcontent-%COMP%]{grid-area:first_line_cell_1;grid-row-end:second_line_cell_1;align-self:center}au3-list-move-mode-handle[_ngcontent-%COMP%]{display:block;width:70px;height:91px}.both-lines__checkbox[_ngcontent-%COMP%]{grid-area:first_line_cell_4;grid-row-end:second_line_cell_4;justify-self:center;align-self:center;pointer-events:none}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .first-line__additional-info[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .first-line__additional-info[_ngcontent-%COMP%]{padding:0 15px 0 30px}.component-layout-latin[_nghost-%COMP%]   .first-line__number[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .first-line__number[_ngcontent-%COMP%]{padding:4px 15px 4px 0}.component-layout-latin[_nghost-%COMP%]   .first-line__address[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .first-line__address[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .second-line__rest[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .second-line__rest[_ngcontent-%COMP%]{padding-right:0;padding-left:15px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .first-line__additional-info[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .first-line__additional-info[_ngcontent-%COMP%]{padding:0 30px 0 15px}.component-layout-arabic[_nghost-%COMP%]   .first-line__number[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .first-line__number[_ngcontent-%COMP%]{padding:4px 0 4px 15px}.component-layout-arabic[_nghost-%COMP%]   .first-line__address[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .first-line__address[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .second-line__rest[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .second-line__rest[_ngcontent-%COMP%]{padding-right:15px;padding-left:0}',
              ],
            ],
            data: {},
          }));
      function T(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "both-lines__handle-move-mode"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              1,
              0,
              null,
              null,
              1,
              "au3-list-move-mode-handle",
              [],
              null,
              [
                [null, "pointerdown"],
                [null, "touchstart"],
              ],
              function (e, t, n) {
                var o = !0;
                return (
                  "pointerdown" === t &&
                    (o = !1 !== i.Nb(e, 2).pointerdown(n) && o),
                  "touchstart" === t &&
                    (o = !1 !== i.Nb(e, 2).touchstart(n) && o),
                  o
                );
              },
              o.b,
              o.a,
            )),
            i.xb(
              2,
              245760,
              null,
              0,
              a.a,
              [[2, l.a], [2, s.a], r.a],
              { index: [0, "index"] },
              null,
            ),
          ],
          function (e, t) {
            e(t, 2, 0, t.component.favoriteItemIndex);
          },
          null,
        );
      }
      function j(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "first-line__icon"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              1,
              0,
              null,
              null,
              1,
              "au3-icon",
              [],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              c.b,
              c.a,
            )),
            i.xb(
              2,
              4243456,
              null,
              0,
              u.b,
              [r.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            e(t, 2, 0, n.iconFileName, n.ICON_CATEGORY_LIST);
          },
          function (e, t) {
            e(t, 1, 0, i.Nb(t, 2).iconComponentHidden);
          },
        );
      }
      function E(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "first-line__number"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              1,
              0,
              null,
              null,
              1,
              "au3-icon",
              [],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              c.b,
              c.a,
            )),
            i.xb(
              2,
              4243456,
              null,
              0,
              u.b,
              [r.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            e(t, 2, 0, n.getLineNumberIcon(n.lineNumber), n.ICON_CATEGORY_LIST);
          },
          function (e, t) {
            e(t, 1, 0, i.Nb(t, 2).iconComponentHidden);
          },
        );
      }
      function D(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "first-line__address"],
                ["id", "FirstLineAddressFavorite"],
                ["ttIgnore", ""],
              ],
              [
                [2, "first-line__address--wide", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              d.b,
              d.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              h.a,
              [i.l, i.D, g.a, r.a, [3, h.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(2, 16384, null, 0, b.a, [], null, null),
            i.xb(
              3,
              245760,
              null,
              0,
              p.a,
              [[6, h.a], f.a, i.h, i.l, i.D, [2, _.a], [2, b.a], [2, O.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, "FirstLineAddressFavorite"),
              e(t, 3, 0, "FirstLineAddressFavorite", n.nonI18nTextLine1));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              !t.parent.context.mib3Let,
              i.Nb(t, 3).backgroundColor,
              i.Nb(t, 3).fixedNumberOfLines,
              i.Nb(t, 3).mayContainLatinCharsForArabic,
              i.Nb(t, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function R(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "first-line__address"],
                ["id", "FirstLineAddressHome"],
              ],
              [
                [2, "first-line__address--wide", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              d.b,
              d.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              h.a,
              [i.l, i.D, g.a, r.a, [3, h.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              245760,
              null,
              0,
              p.a,
              [[6, h.a], f.a, i.h, i.l, i.D, [2, _.a], [2, b.a], [2, O.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (e, t) {
            (e(t, 1, 0, "FirstLineAddressHome"),
              e(t, 2, 0, "Heimatadresse", "FirstLineAddressHome"));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              !t.parent.context.mib3Let,
              i.Nb(t, 2).backgroundColor,
              i.Nb(t, 2).fixedNumberOfLines,
              i.Nb(t, 2).mayContainLatinCharsForArabic,
              i.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function k(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "first-line__address"],
                ["id", "FirstLineAddressBusiness"],
              ],
              [
                [2, "first-line__address--wide", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              d.b,
              d.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              h.a,
              [i.l, i.D, g.a, r.a, [3, h.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              245760,
              null,
              0,
              p.a,
              [[6, h.a], f.a, i.h, i.l, i.D, [2, _.a], [2, b.a], [2, O.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (e, t) {
            (e(t, 1, 0, "FirstLineAddressBusiness"),
              e(t, 2, 0, "Gesch\xe4ftadresse", "FirstLineAddressBusiness"));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              !t.parent.context.mib3Let,
              i.Nb(t, 2).backgroundColor,
              i.Nb(t, 2).fixedNumberOfLines,
              i.Nb(t, 2).mayContainLatinCharsForArabic,
              i.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function F(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-formatted-unit-renderer",
              [],
              [[2, "invisible", null]],
              null,
              null,
              m.b,
              m.a,
            )),
            i.xb(
              1,
              180224,
              null,
              0,
              v.b,
              [f.a, C.a, i.h],
              {
                smallerFontForUnit: [0, "smallerFontForUnit"],
                rawValue: [1, "rawValue"],
                rawValueUnit: [2, "rawValueUnit"],
                rawValueFormattingRule: [3, "rawValueFormattingRule"],
              },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            e(
              t,
              1,
              0,
              !0,
              n.getDistanceValue(n.distance),
              n.sourceUnit,
              n.distanceFormattingRule,
            );
          },
          function (e, t) {
            e(t, 0, 0, i.Nb(t, 1).isInvisible);
          },
        );
      }
      function z(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(0, 0, null, null, 2, "div", [], null, null, null, null, null)),
            (e()(), i.hb(16777216, null, null, 1, null, F)),
            i.xb(
              2,
              16384,
              null,
              0,
              y.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (e, t) {
            e(t, 2, 0, t.component.distance);
          },
          null,
        );
      }
      function B(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-direction-distance",
              [],
              null,
              null,
              null,
              M.b,
              M.a,
            )),
            i.xb(
              1,
              49152,
              null,
              0,
              P.a,
              [],
              { distance: [0, "distance"] },
              null,
            ),
          ],
          function (e, t) {
            e(t, 1, 0, t.component.distance);
          },
          null,
        );
      }
      function H(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "first-line__additional-info"]],
              [[2, "first-line__additional-info--numbered", null]],
              null,
              null,
              null,
              null,
            )),
            (e()(), i.hb(16777216, null, null, 1, null, z)),
            i.xb(
              2,
              16384,
              null,
              0,
              y.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(), i.hb(0, [["distanceNoLineNumbers", 2]], null, 0, null, B)),
          ],
          function (e, t) {
            e(t, 2, 0, t.component.showLineNumber, i.Nb(t, 3));
          },
          function (e, t) {
            e(t, 0, 0, t.component.showLineNumber);
          },
        );
      }
      function V(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-checkbox",
              [
                ["class", "both-lines__checkbox"],
                ["id", "BothLinesCheckbox"],
              ],
              null,
              null,
              null,
              S.b,
              S.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              h.a,
              [i.l, i.D, g.a, r.a, [3, h.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              49152,
              null,
              0,
              x.a,
              [],
              { id: [0, "id"], checked: [1, "checked"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, "BothLinesCheckbox"),
              e(t, 2, 0, "BothLinesCheckbox", n.checked));
          },
          null,
        );
      }
      function W(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-list-item-additional-info",
              [],
              null,
              null,
              null,
              w.b,
              w.a,
            )),
            i.xb(
              1,
              49152,
              null,
              0,
              L.a,
              [],
              {
                dopiData: [0, "dopiData"],
                isGoogleLocation: [1, "isGoogleLocation"],
                entryFlagList: [2, "entryFlagList"],
              },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            e(t, 1, 0, n.dopiData, n.isGoogleLocation, n.entryFlagList);
          },
          null,
        );
      }
      function Y(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              25,
              "div",
              [["class", "both-lines"]],
              [[2, "both-lines--numbered", null]],
              null,
              null,
              null,
              null,
            )),
            (e()(), i.hb(16777216, null, null, 1, null, T)),
            i.xb(
              2,
              16384,
              null,
              0,
              y.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), i.hb(16777216, null, null, 1, null, j)),
            i.xb(
              4,
              16384,
              null,
              0,
              y.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), i.hb(16777216, null, null, 1, null, E)),
            i.xb(
              6,
              16384,
              null,
              0,
              y.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            i.yb(
              7,
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
              8,
              16384,
              null,
              0,
              y.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (e()(), i.hb(16777216, null, null, 1, null, D)),
            i.xb(
              10,
              278528,
              null,
              0,
              y.p,
              [i.P, i.L, y.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), i.hb(16777216, null, null, 1, null, R)),
            i.xb(
              12,
              278528,
              null,
              0,
              y.p,
              [i.P, i.L, y.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), i.hb(16777216, null, null, 1, null, k)),
            i.xb(
              14,
              278528,
              null,
              0,
              y.p,
              [i.P, i.L, y.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), i.hb(16777216, null, null, 1, null, H)),
            i.xb(
              16,
              16384,
              null,
              0,
              y.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), i.hb(16777216, null, null, 1, null, V)),
            i.xb(
              18,
              16384,
              null,
              0,
              y.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            i.yb(
              19,
              0,
              null,
              null,
              6,
              "div",
              [],
              [
                [2, "second-line__rest", null],
                [2, "second-line-edit-mode__rest", null],
              ],
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              20,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "rest__text"],
                ["id", "SecondLineNoAddress"],
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
              d.b,
              d.a,
            )),
            i.xb(
              21,
              212992,
              null,
              0,
              h.a,
              [i.l, i.D, g.a, r.a, [3, h.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              22,
              16384,
              null,
              0,
              b.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            i.xb(
              23,
              245760,
              null,
              0,
              p.a,
              [[6, h.a], f.a, i.h, i.l, i.D, [2, _.a], [2, b.a], [2, O.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
            (e()(), i.hb(16777216, null, null, 1, null, W)),
            i.xb(
              25,
              16384,
              null,
              0,
              y.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 2, 0, n.hasEditModeMoveHandle && n.isEditModeActive),
              e(t, 4, 0, !(n.hasEditModeMoveHandle && n.isEditModeActive)),
              e(t, 6, 0, n.showLineNumber && n.lineNumber),
              e(t, 8, 0, n.itemType),
              e(t, 10, 0, n.favoriteTypeEnum.FAVORITE),
              e(t, 12, 0, n.favoriteTypeEnum.HOME),
              e(t, 14, 0, n.favoriteTypeEnum.BUSINESS),
              e(t, 16, 0, !n.isEditModeActive && t.context.mib3Let),
              e(t, 18, 0, n.isEditModeActive && void 0 !== n.nonI18nTextLine2),
              e(t, 21, 0, "SecondLineNoAddress"),
              e(t, 22, 0, null == n.developerTextLine2),
              e(
                t,
                23,
                0,
                n.developerTextLine2,
                "SecondLineNoAddress",
                n.nonI18nTextLine2,
              ),
              e(t, 25, 0, !n.isEditModeActive));
          },
          function (e, t) {
            var n = t.component;
            (e(t, 0, 0, n.showLineNumber),
              e(t, 19, 0, !n.isEditModeActive, n.isEditModeActive),
              e(
                t,
                20,
                0,
                i.Nb(t, 23).backgroundColor,
                i.Nb(t, 23).fixedNumberOfLines,
                i.Nb(t, 23).mayContainLatinCharsForArabic,
                i.Nb(t, 23).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function G(e) {
        return i.ac(
          2,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "container"]],
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
              $.a,
              [[2, I.a], [8, null], [3, $.a], i.l, i.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (e()(), i.hb(16777216, null, null, 1, null, Y)),
            i.xb(
              3,
              16384,
              null,
              0,
              N.a,
              [i.L, i.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, n.uiStateType),
              e(t, 3, 0, n.hasDistanceValue(n.distance)));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              i.Nb(t, 1).uiStateListHorizontal,
              i.Nb(t, 1).uiStateListVertical,
              i.Nb(t, 1).uiStateCoverLeft,
              i.Nb(t, 1).uiStateCoverRight,
              i.Nb(t, 1).uiStateCoverBottom,
              i.Nb(t, 1).uiStateButton,
              i.Nb(t, 1).uiStateByDabLeft,
              i.Nb(t, 1).uiStateByDabRight,
              i.Nb(t, 1).uiStateLbDabLeft,
              i.Nb(t, 1).uiStateLbDabRight,
            );
          },
        );
      }
    },
    VjYQ: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return f;
      }),
        n.d(t, "b", function () {
          return _;
        }));
      var i = n("kZht"),
        o = n("ulbR"),
        a = n("BOsO"),
        l = n("Ps6X"),
        s = n("6zvu"),
        r = n("HVUF"),
        c = n("B3Zb"),
        u = n("yNay"),
        d = n("/51X"),
        h = n("fu7d"),
        g = n("bou3"),
        b = n("th8l"),
        p = n("qzuC"),
        f =
          (n("YdGm"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:flex;position:relative;width:1376px;height:120px}.use-container-width[_nghost-%COMP%]{width:100%}.container[_ngcontent-%COMP%], .list-item-container[_ngcontent-%COMP%]{width:100%;height:100%}.list-item-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.list-item__icon-container[_ngcontent-%COMP%]{width:85px;padding:0 30px 0 15px}.list-item__text-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;font-size:40px}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .list-item__icon-container[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list-item__icon-container[_ngcontent-%COMP%]{padding:0 30px 0 15px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .list-item__icon-container[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list-item__icon-container[_ngcontent-%COMP%]{padding:0 15px 0 30px}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.list-item__text[_ngcontent-%COMP%]{flex:1 1 auto}@media (max-width:1280px){[_nghost-%COMP%]{width:1130px}.use-container-width[_nghost-%COMP%]{width:100%}}',
              ],
            ],
            data: {},
          }));
      function _(e) {
        return i.ac(
          2,
          [
            i.Pb(0, o.a, []),
            i.Pb(0, a.a, []),
            (e()(),
            i.yb(
              2,
              0,
              null,
              null,
              11,
              "div",
              [["class", "container"]],
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
              3,
              212992,
              null,
              0,
              l.a,
              [[2, s.a], [8, null], [3, l.a], i.l, i.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (e()(),
            i.yb(
              4,
              0,
              null,
              null,
              9,
              "div",
              [["class", "list-item-container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              5,
              0,
              null,
              null,
              2,
              "div",
              [["class", "list-item__icon-container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              6,
              0,
              null,
              null,
              1,
              "au3-icon",
              [],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              r.b,
              r.a,
            )),
            i.xb(
              7,
              4243456,
              null,
              0,
              c.b,
              [u.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (e()(),
            i.yb(
              8,
              0,
              null,
              null,
              5,
              "div",
              [["class", "list-item__text-container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              9,
              0,
              null,
              null,
              4,
              "au3-highlighting-label",
              [["id", "ContactLine_1"]],
              [[2, "abbreviate-at-beginning", null]],
              null,
              null,
              d.b,
              d.a,
            )),
            i.xb(
              10,
              212992,
              null,
              0,
              h.a,
              [i.l, i.D, g.a, u.a, [3, h.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              11,
              704512,
              null,
              0,
              b.b,
              [p.a],
              { text: [0, "text"], highlightAreas: [1, "highlightAreas"] },
              null,
            ),
            i.Rb(12, 1),
            i.Rb(13, 1),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 3, 0, n.uiStateType),
              e(t, 7, 0, n.iconFileName, n.iconCategory),
              e(t, 10, 0, "ContactLine_1"));
            var o = i.Yb(t, 11, 0, e(t, 12, 0, i.Nb(t, 0), n.contactName)),
              a = i.Yb(t, 11, 1, e(t, 13, 0, i.Nb(t, 1), n.contactName));
            e(t, 11, 0, o, a);
          },
          function (e, t) {
            (e(
              t,
              2,
              0,
              i.Nb(t, 3).uiStateListHorizontal,
              i.Nb(t, 3).uiStateListVertical,
              i.Nb(t, 3).uiStateCoverLeft,
              i.Nb(t, 3).uiStateCoverRight,
              i.Nb(t, 3).uiStateCoverBottom,
              i.Nb(t, 3).uiStateButton,
              i.Nb(t, 3).uiStateByDabLeft,
              i.Nb(t, 3).uiStateByDabRight,
              i.Nb(t, 3).uiStateLbDabLeft,
              i.Nb(t, 3).uiStateLbDabRight,
            ),
              e(t, 6, 0, i.Nb(t, 7).iconComponentHidden),
              e(t, 9, 0, i.Nb(t, 11).abbreviateBeginningOfText));
          },
        );
      }
    },
    WXnf: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var i = n("QQZH"),
        o = n("Ohay"),
        a = n("kuMc"),
        l = n("J+dc"),
        s = n("1+5f"),
        r = (n("Yi6/"), n("e3Rv")),
        c = n("kZht"),
        u = n("yNay");
      let d = (() => {
        class e {
          constructor(e, t) {
            ((this.statusBarInfoTypeService = e),
              (this.destroy$$ = new i.a(1)),
              (this.logger = t.getLogger("navi.SearchModeMonitoringService")));
          }
          ngOnDestroy() {
            this.destroy$$.next();
          }
          startMonitoringSearchMode(e, t) {
            (this.logger.info("startMonitoringSearchMode: called"),
              e
                .pipe(
                  Object(o.a)(),
                  Object(a.a)(t),
                  Object(a.a)(this.destroy$$),
                )
                .subscribe((e) => {
                  switch (
                    (this.logger.info(
                      `startMonitoringSearchMode: searchMode changed to ${e}, determine statusBarInfoType`,
                    ),
                    e)
                  ) {
                    case s.d.GOOGLE:
                      this.statusBarInfoTypeService.setStatusbarInfoType(
                        r.a.GOOGLE,
                      );
                      break;
                    default:
                      this.statusBarInfoTypeService.resetStatusBarInfoType();
                  }
                }),
              t
                .pipe(Object(l.a)(1), Object(a.a)(this.destroy$$))
                .subscribe(() => {
                  (this.logger.info(
                    "startMonitoringSearchMode: cancel$ emitted, reset statusBarInfoType",
                  ),
                    this.statusBarInfoTypeService.resetStatusBarInfoType());
                }));
          }
        }
        return (
          (e.ɵprov = c.bc({
            factory: function () {
              return new e(c.cc(r.b), c.cc(u.a));
            },
            token: e,
            providedIn: "root",
          })),
          e
        );
      })();
    },
    WuVC: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return y;
      }),
        n.d(t, "b", function () {
          return M;
        }));
      var i = n("YtkY"),
        o = n("kuMc"),
        a = n("J+dc"),
        l = n("Ohay"),
        s = n("8j5Y"),
        r = n("BwBJ"),
        c = n("jIqt"),
        u = n("TLy2"),
        d = n("ruxD"),
        h = n("QQZH"),
        g = n("HM3f"),
        b = n("ROBh"),
        p = n("1+5f"),
        f = n("Yi6/"),
        _ = (n("zbI8"), n("XkLY"), n("hh+9"), n("WXnf"), n("/SfN")),
        O = n("4Y+C"),
        m =
          (n("L9HF"),
          n("BiTe"),
          n("AuMu"),
          n("lgS8"),
          n("Td1N"),
          n("o/Wa"),
          n("Oh6n"),
          n("70uC"),
          n("pWIT")),
        v = n("jzYI"),
        C = (n("sK8D"), n("gvVq")),
        y = (function (e) {
          return (
            (e.Default = "Welches Ziel?"),
            (e.Google = "Welches Google-Ziel?"),
            e
          );
        })({});
      class M {
        constructor(e, t, n, a, l, s, r, c, u, d, g, b, m, M, P, S, x) {
          ((this.controller = e),
            (this.naviTrufflesOptionsHelperService = t),
            (this.displayService = n),
            (this.searchAreaProviderService = a),
            (this.googleSearch = l),
            (this.distanceAugmentationService = s),
            (this.guidancePopupWorkflowService = r),
            (this.routingService = c),
            (this.memoryStatesService = u),
            (this.changeDetectorRef = d),
            (this.dopiProviderService = g),
            (this.searchTriggerService = b),
            (this.searchModeProviderService = m),
            (this.searchModeMonitoringService = M),
            (this.searchAutoSwitchService = P),
            (this.placeholderIdEnum = y),
            (this.extractSearchResultFromItemFunction = O.b),
            (this.searchResultType = v.b),
            (this.searchAreaEnum = p.f),
            (this.showNoConnectivityHint = !1),
            (this.getStringWithBakedHighlighting = f.nd),
            (this.visibleListItems = []),
            (this.selectFromVisibleListItems = C.b),
            (this.findPinIndex = C.a),
            (this.online = !1),
            (this.destroy$$ = new h.a(1)),
            (this.logger = x.getLogger("navi.NaviSearchComponent")),
            (this.isGuidanceActive$ = S.guidanceState$.pipe(
              Object(i.a)((e) => e === _.c.Active),
              Object(o.a)(this.destroy$$),
            )));
        }
        ngOnInit() {
          (this.memoryStatesService.triggerCloudSync(),
            this.searchModeMonitoringService.startMonitoringSearchMode(
              this.searchModeProviderService.searchMode$,
              this.destroy$$,
            ),
            this.controller.restoreComplete$
              .pipe(Object(a.a)(1), Object(o.a)(this.destroy$$))
              .subscribe(() => {
                this.searchAutoSwitchService.enableAutoSwitchToGoogleSearch();
              }),
            this.controller.inputField$
              .pipe(Object(o.a)(this.destroy$$))
              .subscribe((e) => {
                ((this.inputField = e), this.changeDetectorRef.markForCheck());
              }),
            (this.searchArea$ = this.searchAreaProviderService.searchArea$),
            (this.searchAreaFileName$ =
              this.searchAreaProviderService.searchAreaFileName$),
            (this.googleSearchFileName$ =
              this.googleSearch.externalSearchFileName$),
            (this.googleSearchAvailable$ = Object(g.b)(
              this.googleSearch.available$,
              this.googleSearch.serviceDisabled$,
            ).pipe(
              Object(i.a)(([e, t]) => e && !t),
              Object(l.a)(),
              Object(o.a)(this.destroy$$),
              Object(s.a)((e) =>
                this.logger.info("ngOnInit: googleSearchAvailable$:", e),
              ),
            )),
            (this.googleSearchEnabled$ = this.googleSearch.enabled$.pipe(
              Object(r.a)(50),
              Object(o.a)(this.destroy$$),
            )),
            (this.inputFieldPlaceholderDeveloperText$ =
              this.googleSearch.enabled$.pipe(
                Object(i.a)((e) => (e ? y.Google : y.Default)),
                Object(c.a)(y.Default),
                Object(l.a)(),
                Object(o.a)(this.destroy$$),
              )),
            this.controller.noConnectivity$
              .pipe(Object(o.a)(this.destroy$$))
              .subscribe((e) => {
                ((this.online = !e),
                  e &&
                    ((this.showNoConnectivityHint = !0),
                    this.changeDetectorRef.markForCheck(),
                    this.logger.debug(
                      "ngOnInit: showNoConnectivityHint",
                      this.showNoConnectivityHint,
                    )));
              }));
        }
        ngAfterViewInit() {
          (setTimeout(() => {
            if (f.gd.textToolMode)
              this.searchResults$ = Object(b.a)([
                { searchResult: new m.a({}) },
              ]);
            else {
              const e = this.truffleList.listComponent$.pipe(
                  Object(u.a)((e) =>
                    e
                      ? e.visibleListRangeNotScrolling$
                      : Object(b.a)(f.sb.EMPTY),
                  ),
                ),
                t = this.dopiProviderService
                  .augmentTruffleResults(
                    this.controller.searchResultsWithSuggestions$,
                    e,
                  )
                  .pipe(
                    Object(s.a)((e) => {
                      this.logger.debug(
                        "ngAfterViewInit: searchResults+dopi fired: ",
                        e,
                      );
                    }),
                    Object(d.a)(() =>
                      this.logger.info(
                        "ngAfterViewInit: augmentedWithDopis$ completed",
                      ),
                    ),
                  );
              this.searchResults$ = this.distanceAugmentationService
                .augmentWithDistancesForList(t, e)
                .pipe(
                  Object(s.a)((e) => {
                    this.logger.debug(
                      "ngAfterViewInit: searchResults+distances fired: ",
                      e,
                    );
                  }),
                  Object(d.a)(() =>
                    this.logger.info(
                      "ngAfterViewInit: augmentWithDistancesForList completed",
                    ),
                  ),
                );
            }
          }, 0),
            this.searchTriggerService.triggerInitialSearchWhenReady(
              this.controller,
              this.destroy$$,
            ));
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        get placeholderIdKey$() {
          return this.inputFieldPlaceholderDeveloperText$.pipe(
            Object(i.a)((e) => Object.keys(y).find((t) => y[t] === e)),
            Object(o.a)(this.destroy$$),
          );
        }
        onRetryButtonTap() {
          this.online &&
            ((this.showNoConnectivityHint = !1),
            this.changeDetectorRef.markForCheck(),
            this.controller.retrySearch(this.inputField),
            this.logger.debug(
              "onRetryButtonTap: showNoConnectivityHint: ",
              this.showNoConnectivityHint,
            ));
        }
        onFavoriteTap(e) {
          e.destination &&
            e.destination.location &&
            this.routingService.goToDestinationDetails(
              e.destination.location.id,
            );
        }
        startPressTour(e) {
          const t = e.staticObject.navAddress.source;
          (this.logger.info(
            "startPressTour: starting press tour guidance for searchResult:",
            t,
          ),
            this.guidancePopupWorkflowService
              .requestNewGuidanceForPressTour(t)
              .then((e) => {
                e &&
                  (this.logger.info(
                    "startPressTour: guidance started, switch to map",
                  ),
                  this.routingService.goToMap());
              }));
        }
        changeSearchAreaToCCP() {
          this.searchAreaProviderService.setSearchArea(p.f.CCP);
        }
        changeGoogleSearchMode() {
          (this.searchAutoSwitchService.disableAutoSwitchToGoogleSearch(),
            this.controller.changeGoogleSearchMode());
        }
      }
    },
    XkLY: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var i = n("Yi6/"),
        o = n("QQZH"),
        a = n("ZTXN"),
        l = n("jOdJ"),
        s = n("TLy2"),
        r = n("kuMc"),
        c = n("nqvY"),
        u = n("a2As");
      class d {
        constructor(e, t, n) {
          ((this.naviOptionsService = e),
            (this.searchLocationProvider = t),
            (this.destroy$$ = new o.a(1)),
            (this.cancelPreviousMenu$$ = new a.a()),
            (this.logger = n.getLogger(
              "navi.NaviTrufflesOptionsHelperService",
            )));
        }
        static mapFavoriteTypeToNaviEntryType(e) {
          switch (e) {
            case c.a.HOME:
              return u.a.HomeAddress;
            case c.a.BUSINESS:
              return u.a.BusinessAddress;
            default:
              return u.a.Favorite;
          }
        }
        ngOnDestroy() {
          (this.destroy$$.next(), this.destroy$$.complete());
        }
        openOptionsMenuForSearchResult(e) {
          return (
            this.logger.info("openOptionsMenuForSearchResult:", e),
            this.cancelPreviousMenu$$.next(),
            this.searchLocationProvider
              .getSearchResultLocation(e)
              .pipe(
                Object(l.a)(),
                Object(i.pd)(
                  this.logger,
                  "openOptionsMenuForSearchResult: got result:",
                ),
                Object(s.a)((e) =>
                  e.location
                    ? this.showOptionMenu(e.location, u.a.Destination)
                    : (this.logger.error(
                        "openOptionsMenuForSearchResult: no location:",
                        e,
                      ),
                      Promise.reject(
                        "openOptionsMenuForSearchResult: no location",
                      )),
                ),
                Object(r.a)(this.cancelPreviousMenu$$),
                Object(r.a)(this.destroy$$),
              )
              .toPromise()
          );
        }
        openOptionsMenuForFavoriteDestination(e) {
          return (
            this.logger.info("openOptionsMenuForFavoriteDestination:", e),
            this.cancelPreviousMenu$$.next(),
            e.destination && e.destination.location
              ? this.showOptionMenu(
                  e.destination.location,
                  d.mapFavoriteTypeToNaviEntryType(e.type),
                )
              : (this.logger.error(
                  "openOptionsMenuForFavoriteDestination: invalid item:",
                  e,
                ),
                Promise.reject(
                  "openOptionsMenuForFavoriteDestination: invalid item",
                ))
          );
        }
        showOptionMenu(e, t) {
          return this.naviOptionsService.showOptionMenu({
            location: e,
            type: t,
          });
        }
      }
    },
    YdGm: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var i = n("Yi6/");
      class o {
        constructor() {
          ((this.iconCategory = i.Z.List),
            (this.iconFileName = "E0AB_phone_generic_contactimage.webp"),
            (this.uiStateType = i.uc.ListHorizontal));
        }
      }
    },
    a2As: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return f;
      }),
        n.d(t, "c", function () {
          return _;
        }),
        n.d(t, "b", function () {
          return O;
        }));
      var i = n("MddD"),
        o = n("Yi6/"),
        a = n("QQZH"),
        l = n("ZTXN"),
        s = n("C05f"),
        r = n("HM3f"),
        c = n("ROBh"),
        u = n("Ohay"),
        d = n("YtkY"),
        h = n("kuMc"),
        g = n("J+dc"),
        b = n("BuQs"),
        p = (n("adgy"), n("xS3h"), n("dkCa"), n("qZZF"), n("jN33"), n("4h+N")),
        f = (function (e) {
          return (
            (e.HomeAddress = "HomeAddress"),
            (e.BusinessAddress = "BusinessAddress"),
            (e.Favorite = "Favorite"),
            (e.LastDestination = "LastDestination"),
            (e.Destination = "Destination"),
            e
          );
        })({}),
        _ = (function (e) {
          return (
            (e.saveShortcut = "Shortcut\nspeichern"),
            (e.weather = "Wetter"),
            (e.favorite = "Als Favorit\nspeichern"),
            (e.homeBusinessCreate = "Adresse\nanlegen"),
            (e.homeBusinessEdit = "Adresse\nbearbeiten"),
            e
          );
        })({});
      let O = (() => {
        class e {
          constructor(e, t, n, i, o, r, c, u, d) {
            ((this.optionMenuService = e),
              (this.shortcutsOptionsService = t),
              (this.memoryDestinationsService = n),
              (this.favoriteDestinationsService = i),
              (this.memoryCapacityService = o),
              (this.naviShortcutsService = r),
              (this.popupService = c),
              (this.homeBusinessService = u),
              (this.destroy$$ = new a.a(1)),
              (this.weatherOptionTemplate = {
                icon: "E8CF_connect_app_wetter.webp",
                developerText: _.weather,
                visible: !1,
                enabled: !0,
                textId: _.weather,
              }),
              (this.favoriteOptionTemplate = {
                icon: "E16E_addressbook_save_as_favorite.webp",
                developerText: _.favorite,
                visible: !0,
                enabled: !0,
                textId: _.favorite,
              }),
              (this.homeBusinessOptionTemplate = {
                icon: "E806_addressbook_navaddress_edit.webp",
                developerText: _.favorite,
                visible: !0,
                enabled: !0,
                textId: _.favorite,
              }),
              (this.cancelPreviousOptions$ = new l.a()),
              (this.weatherOption$$ = new s.a(null)),
              (this.currentOptions$$ = new a.a(1)),
              (this.options$ = this.currentOptions$$.asObservable()),
              (this.destinationDetailsMode = !1),
              (this.logger = d.getLogger("navi.naviOptionsService")));
          }
          ngOnDestroy() {
            (this.destroy$$.next(), this.destroy$$.complete());
          }
          getFavroiteReference(e) {
            return e.location
              ? this.memoryDestinationsService.getFavoriteReference(e.location)
              : Promise.resolve(null);
          }
          prepareOptionMenu(e) {
            return (
              this.logger.info("prepareOptionMenu:", e),
              this.cancelPreviousOptions$.next(),
              (this.preparedItem = e),
              this.getFavroiteReference(e).then((t) => {
                const n =
                    !!t ||
                    e.type === f.HomeAddress ||
                    e.type === f.BusinessAddress,
                  i =
                    this.memoryCapacityService.slotsFavoriteDestinations$.pipe(
                      Object(u.a)(),
                      Object(o.pd)(
                        this.logger,
                        "prepareOptionMenu: free favorite slots:",
                      ),
                      Object(d.a)((e) => (Object(o.wd)(e) && e > 0) || n),
                      Object(u.a)(),
                      Object(o.Kd)(),
                    ),
                  a = Object(r.b)(
                    this.weatherOption$$,
                    this.favoriteOption$(e, n, i),
                    this.presetShortcutOption$(e, t, i),
                  ).pipe(
                    Object(d.a)((e) => e.filter(o.wd)),
                    Object(h.a)(this.cancelPreviousOptions$),
                    Object(h.a)(this.destroy$$),
                  );
                return (
                  a.subscribe((e) => this.currentOptions$$.next(e)),
                  a.pipe(Object(g.a)(1)).toPromise()
                );
              })
            );
          }
          showPreparedOptionMenu() {
            return (
              this.logger.info("showPreparedOptionMenu:", this.preparedItem),
              this.options$
                .pipe(Object(g.a)(1), Object(h.a)(this.destroy$$))
                .toPromise()
                .then((e) => {
                  e.find((e) => e.visible)
                    ? this.optionMenuService.showOptionMenu(this.preparedItem)
                    : this.logger.info(
                        "showOptionMenu: no option available/visible, options were:",
                        e,
                      );
                })
            );
          }
          showOptionMenu(e) {
            return (
              this.logger.info("showOptionMenu:", e),
              this.prepareOptionMenu(e).then(() =>
                this.showPreparedOptionMenu(),
              )
            );
          }
          onOptionTap(e) {
            e.option.onOptionTap
              ? (this.logger.info("onOptionTap: calling for option:", e.option),
                e.option.onOptionTap())
              : this.logger.error(
                  "onOptionTap: unknown option or no callback defined:",
                  e,
                );
          }
          createShortcut(t, n) {
            const i = (function (e) {
              switch (e) {
                case f.BusinessAddress:
                  return b.c.BusinessAddress;
                case f.HomeAddress:
                  return b.c.HomeAddress;
                case f.Destination:
                  return b.c.Destination;
                case f.Favorite:
                  return b.c.Favorite;
                case f.LastDestination:
                default:
                  return b.c.Destination;
              }
            })(t.type);
            return this.naviShortcutsService.createShortcutForLocation(
              n || e.DEFAULT_ID,
              t.location,
              i,
            );
          }
          saveShortcut(e) {
            if (
              (this.logger.info("saveShortcut:", e),
              e.location &&
                ![f.HomeAddress, f.BusinessAddress].includes(e.type))
            )
              this.saveAsFavorite(e.location)
                .then((t) =>
                  t.presetId
                    ? Promise.resolve(this.getPresetId(e.type, t))
                    : this.favoriteDestinationsService
                        .updatePresetId(t.id, t.id)
                        .catch(
                          (e) => (
                            this.logger.error(
                              "saveShortcut: updatePresetId failed with:",
                              e,
                            ),
                            Promise.resolve(t.id)
                          ),
                        ),
                )
                .then(
                  (t) => {
                    const n = this.createShortcut(e, t);
                    (this.logger.info("saveShortcut: saving:", n),
                      this.shortcutsOptionsService.saveShortcut(n));
                  },
                  (e) => this.logger.error("saveShortcut: failed with", e),
                );
            else {
              const t = this.createShortcut(e, e.type);
              this.shortcutsOptionsService.saveShortcut(t);
            }
          }
          getPresetId(e, t) {
            switch (e) {
              case f.BusinessAddress:
              case f.HomeAddress:
                return e;
              default:
                return t && (t.presetId || t.id);
            }
          }
          presetShortcutOption$(e, t, n) {
            const a = this.getPresetId(e.type, t),
              l = this.createShortcut(e, a),
              s = this.shortcutsOptionsService.saveShortcutOption(l);
            return (
              (s.textId = _.saveShortcut),
              (s.developerText = _.saveShortcut),
              n.pipe(
                Object(d.a)((t) => {
                  const n = Object.assign({}, s, {
                    onOptionTap: () => this.saveShortcut(e),
                  });
                  return (
                    e.location && e.location.provider === i.j.EXTERNAL
                      ? (this.logger.info(
                          "presetShortcutOption$: location is external -> disable option",
                        ),
                        (n.enabled = !1))
                      : t ||
                        ((n.enabled = !1),
                        (n.disabledReason = o.Ob.POPUP_NAV_FAVORITES_FULL)),
                    n
                  );
                }),
                Object(o.pd)(this.logger, "presetShortcutOption:"),
              )
            );
          }
          favoriteOption$(e, t, n) {
            const i = e.location;
            return n.pipe(
              Object(d.a)((n) => {
                let a;
                switch (e.type) {
                  case f.HomeAddress:
                  case f.BusinessAddress:
                    ((a = Object.assign({}, this.homeBusinessOptionTemplate)),
                      i
                        ? ((a.textId = _.homeBusinessEdit),
                          (a.developerText = _.homeBusinessEdit))
                        : ((a.textId = _.homeBusinessCreate),
                          (a.developerText = _.homeBusinessCreate)),
                      this.destinationDetailsMode
                        ? (a.visible = !1)
                        : (a.onOptionTap = () => {
                            e.type === f.HomeAddress
                              ? (this.homeBusinessService.letUserSetAddress(
                                  p.b.HOME,
                                ),
                                this.popupService.request(
                                  o.Ob.POPUP_LONGPRESS_EDIT_HOME_ADDRESS_TOAST,
                                ))
                              : (this.homeBusinessService.letUserSetAddress(
                                  p.b.BUSINESS,
                                ),
                                this.popupService.request(
                                  o.Ob
                                    .POPUP_LONGPRESS_EDIT_BUSINESS_ADDRESS_TOAST,
                                ));
                          }));
                    break;
                  default:
                    ((a = Object.assign({}, this.favoriteOptionTemplate)),
                      i && !this.destinationDetailsMode
                        ? (a.onOptionTap = () => {
                            this.saveAsFavorite(i).then(() =>
                              this.popupService.request(
                                o.Ob.POPUP_NAV_LOCATION_FAVORITE_SAVED,
                              ),
                            );
                          })
                        : (a.visible = !1),
                      t
                        ? ((a.enabled = !1),
                          (a.disabledReason =
                            o.Ob.POPUP_NAV_FAVORITE_ALREADY_STORED),
                          (a.icon =
                            "E16E_addressbook_save_as_favorite_enabled.webp"))
                        : n ||
                          ((a.enabled = !1),
                          (a.disabledReason = o.Ob.POPUP_NAV_FAVORITES_FULL),
                          (a.icon = "E16E_addressbook_save_as_favorite.webp")));
                }
                return a;
              }),
            );
          }
          saveAsFavorite(e) {
            return (
              this.logger.info("saveAsFavorite:", e),
              this.memoryDestinationsService
                .getFavoriteReference(e)
                .then((t) =>
                  (t
                    ? Object(c.a)(t)
                    : this.favoriteDestinationsService
                        .createFavoriteDestination(e)
                        .pipe(Object(g.a)(1))
                  ).toPromise(),
                )
            );
          }
          initForDestinationDetails(e) {
            (this.logger.info("initForDestinationDetails"),
              (this.destinationDetailsMode = !0),
              e
                .pipe(
                  Object(d.a)((e) =>
                    Object.assign({}, this.weatherOptionTemplate, {
                      visible: e.visible,
                      disabledLockingParams: e.lockingParams,
                      enabled: e.available,
                      disabledReason: e.disabledReason,
                      onOptionTap: e.onTap,
                    }),
                  ),
                  Object(o.pd)(
                    this.logger,
                    "initForDestinationDetails: update weatherOption:",
                  ),
                  Object(h.a)(this.destroy$$),
                )
                .subscribe((e) => this.weatherOption$$.next(e)));
          }
        }
        return ((e.DEFAULT_ID = "NO_PRESET_ID_AVAILABLE"), e);
      })();
    },
    bDeJ: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      });
      var i = n("6dmc"),
        o = n("MddD"),
        a = n("1+5f"),
        l = n("Yi6/"),
        s = n("QQZH"),
        r = n("HM3f"),
        c = n("xVbo"),
        u = n("J+dc"),
        d = n("YtkY"),
        h = n("kuMc"),
        g = n("qL44"),
        b = n("uBIV"),
        p = n("vsTE"),
        f = n("M0th"),
        _ = n("kZht"),
        O = n("yNay");
      let m = (() => {
        class e {
          constructor(e, t, n, o) {
            ((this.searchService = e),
              (this.poiCategoriesService = t),
              (this.functionAvailabilityService = n),
              (this.destroy$$ = new s.a(1)),
              (this.logger = o.getLogger("navi.truffle.ParkingMapService", [
                i.a.NAVSEARCH,
              ])));
          }
          ngOnDestroy() {
            this.destroy$$.next();
          }
          isOnStreetParkingAvailableForSearch(e) {
            return (
              this.logger.info(
                `isOnStreetParkingAvailableForSearch: check if available for search ${e}`,
              ),
              Object(r.b)(
                this.searchService
                  .getExistingSearch(e)
                  .pipe(Object(c.a)(l.wd), Object(u.a)(1)),
                this.poiCategoriesService
                  .getPoiCategory(o.n.POICATEGORYSEARCHPARKANDREST)
                  .pipe(
                    Object(c.a)(l.wd),
                    Object(d.a)((e) => e.description || ""),
                    Object(d.a)((e) => Object(g.d)(e)),
                  ),
                this.functionAvailabilityService.onStreetParkingAvailability$.pipe(
                  Object(d.a)((e) => !!e.availability),
                ),
              ).pipe(
                Object(d.a)(([e, t, n]) => {
                  const i =
                      e.searchNeedles && e.searchNeedles.length > 0
                        ? e.searchNeedles[0]
                        : "",
                    o =
                      !!e.modifiers &&
                      e.modifiers.includes(a.e.POICATEGORYFULLMATCH);
                  return i === t && o && n;
                }),
                Object(l.pd)(
                  this.logger,
                  `isOnStreetParkingAvailableForSearch: available for search ${e}:`,
                ),
                Object(h.a)(this.destroy$$),
              )
            );
          }
          getSearchCoordinates(e) {
            return (
              this.logger.info(
                `getSearchCoordinates: get coordinates of search ${e}`,
              ),
              this.searchService.getExistingSearch(e).pipe(
                Object(l.Xc)(
                  this.logger,
                  "getSearchCoordinates: existing search:",
                ),
                Object(c.a)(l.wd),
                Object(u.a)(1),
                Object(d.a)((e) =>
                  e.currentSearchLocation ? e.currentSearchLocation : null,
                ),
                Object(l.pd)(
                  this.logger,
                  `getSearchCoordinates: received coordinates of search ${e}:`,
                ),
                Object(h.a)(this.destroy$$),
              )
            );
          }
        }
        return (
          (e.ɵprov = _.bc({
            factory: function () {
              return new e(_.cc(f.a), _.cc(b.b), _.cc(p.a), _.cc(O.a));
            },
            token: e,
            providedIn: "root",
          })),
          e
        );
      })();
    },
    bbRi: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var i = n("Yi6/");
      class o {
        constructor() {
          ((this.iconCategory = i.Z.List),
            (this.iconFileName = "E35E_connect_news_audi_cn.webp"),
            (this.uiStateType = i.uc.ListHorizontal));
        }
      }
    },
    elHj: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return h;
      });
      var i = n("QQZH"),
        o = n("HM3f"),
        a = n("YtkY"),
        l = (n("Yi6/"), n("pWIT")),
        s = n("nqvY"),
        r = n("4h+N"),
        c = n("jzYI"),
        u = n("kZht"),
        d = n("yNay");
      let h = (() => {
        class e {
          constructor(e, t) {
            ((this.homeBusinessService = e),
              (this.destroy$$ = new i.a(1)),
              (this.logger = t.getLogger(
                "navi.truffle.HomeBusinessProviderService",
              )),
              this.initializeHomeBusinessLocation());
          }
          ngOnDestroy() {
            this.destroy$$.next();
          }
          initializeHomeBusinessLocation() {
            this.homeBusinessLocations$ = Object(o.b)(
              this.homeBusinessService.homeLocation$,
              this.homeBusinessService.businessLocation$,
            ).pipe(
              Object(a.a)(([e, t]) => {
                this.logger.info(
                  "initializeHomeBusinessLocation: locations received:",
                  () => `home location: ${!!e}, business location: ${!!t}`,
                );
                const n = [];
                return (
                  e &&
                    n.push(
                      new l.a({
                        id: e.id,
                        source: { type: s.a.HOME, destination: e },
                        type: c.b.HOME_ADDRESS,
                      }),
                    ),
                  t &&
                    n.push(
                      new l.a({
                        id: t.id,
                        source: { type: s.a.BUSINESS, destination: t },
                        type: c.b.BUSINESS_ADDRESS,
                      }),
                    ),
                  n
                );
              }),
            );
          }
        }
        return (
          (e.ɵprov = u.bc({
            factory: function () {
              return new e(u.cc(r.a), u.cc(d.a));
            },
            token: e,
            providedIn: "root",
          })),
          e
        );
      })();
    },
    erKY: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return w;
      }),
        n.d(t, "b", function () {
          return E;
        }));
      var i = n("kZht"),
        o = n("HVUF"),
        a = n("B3Zb"),
        l = n("yNay"),
        s = n("3EdB"),
        r = n("eoEw"),
        c = n("m3Ja"),
        u = n("SOvQ"),
        d = n("cOck"),
        h = n("2ozK"),
        g = n("An66"),
        b = n("nQV3"),
        p = n("fu7d"),
        f = n("bou3"),
        _ = n("3+OJ"),
        O = n("Dyvp"),
        m = n("yDGg"),
        v = n("Ps6X"),
        C = n("6zvu"),
        y = n("8TlW"),
        M = n("ijxY"),
        P = n("Xo58"),
        S = n("r+e+"),
        x = n("bmFL"),
        w =
          (n("qlxH"),
          n("SFb6"),
          n("v98a"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:block;position:relative;width:100%;height:120px}.container[_ngcontent-%COMP%]{width:100%;height:100%}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.first-line[_ngcontent-%COMP%]{width:100%;padding-top:13px;font-size:40px;display:grid;grid-template-columns:70px calc(100% - 336px) 251px;grid-template-rows:calc(1em + 14px);grid-template-areas:"icon first_line_cell_3 first_line_cell_4"}.first-line--numbered[_ngcontent-%COMP%]{grid-template-columns:70px 55px calc(100% - 336px) 196px;grid-template-areas:"icon number first_line_cell_3 first_line_cell_4"}.second-line[_ngcontent-%COMP%]{width:100%;padding-top:5px;font-size:30px;display:grid;grid-template-columns:70px calc(100% - 70px);grid-template-rows:calc(1em + 6px);grid-template-areas:"icon rest"}.second-line--numbered[_ngcontent-%COMP%]{grid-template-columns:70px 55px calc(100% - 125px);grid-template-areas:"icon number rest"}.first-line__icon[_ngcontent-%COMP%], .second-line__icon[_ngcontent-%COMP%]{grid-area:icon;padding:7px 15px}.first-line__number[_ngcontent-%COMP%], .second-line__number[_ngcontent-%COMP%]{grid-area:number;padding:7px 15px 7px 0}.first-line__address[_ngcontent-%COMP%]{padding-right:0;padding-left:15px;grid-area:first_line_cell_3}.first-line__additional-info[_ngcontent-%COMP%]{display:flex;align-items:normal;justify-content:flex-end;grid-area:first_line_cell_4;width:251px}.first-line__additional-info--numbered[_ngcontent-%COMP%]{width:196px}.second-line__rest[_ngcontent-%COMP%]{grid-area:rest;display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding-right:0;padding-left:15px}.rest__text[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;flex:1 1 0}.first-line__handle-move-mode[_ngcontent-%COMP%]{grid-area:icon;align-self:center;padding:0 30px 0 15px}.first-line__checkbox[_ngcontent-%COMP%]{grid-area:first_line_cell_4;justify-self:center;pointer-events:none}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .first-line__additional-info[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .first-line__additional-info[_ngcontent-%COMP%]{padding:0 15px 0 30px}.component-layout-latin[_nghost-%COMP%]   .first-line__address[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .first-line__address[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .second-line__rest[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .second-line__rest[_ngcontent-%COMP%]{padding-right:0;padding-left:15px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .first-line__additional-info[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .first-line__additional-info[_ngcontent-%COMP%]{padding:0 30px 0 15px}.component-layout-arabic[_nghost-%COMP%]   .first-line__number[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .first-line__number[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .second-line__number[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .second-line__number[_ngcontent-%COMP%]{grid-area:number;padding:7px 0 7px 15px}.component-layout-arabic[_nghost-%COMP%]   .first-line__address[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .first-line__address[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .second-line__rest[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .second-line__rest[_ngcontent-%COMP%]{padding-right:15px;padding-left:0}',
              ],
            ],
            data: {},
          }));
      function L(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "first-line__number"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              1,
              0,
              null,
              null,
              1,
              "au3-icon",
              [],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              o.b,
              o.a,
            )),
            i.xb(
              2,
              4243456,
              null,
              0,
              a.b,
              [l.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            e(t, 2, 0, n.getLineNumberIcon(n.lineNumber), n.ICON_CATEGORY_LIST);
          },
          function (e, t) {
            e(t, 1, 0, i.Nb(t, 2).iconComponentHidden);
          },
        );
      }
      function $(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-formatted-unit-renderer",
              [],
              [[2, "invisible", null]],
              null,
              null,
              s.b,
              s.a,
            )),
            i.xb(
              1,
              180224,
              null,
              0,
              r.b,
              [c.a, u.a, i.h],
              {
                smallerFontForUnit: [0, "smallerFontForUnit"],
                rawValue: [1, "rawValue"],
                rawValueUnit: [2, "rawValueUnit"],
                rawValueFormattingRule: [3, "rawValueFormattingRule"],
              },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            e(
              t,
              1,
              0,
              !0,
              n.getDistanceValue(n.distance),
              n.sourceUnit,
              n.distanceFormattingRule,
            );
          },
          function (e, t) {
            e(t, 0, 0, i.Nb(t, 1).isInvisible);
          },
        );
      }
      function I(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-direction-distance",
              [],
              null,
              null,
              null,
              d.b,
              d.a,
            )),
            i.xb(
              1,
              49152,
              null,
              0,
              h.a,
              [],
              { distance: [0, "distance"] },
              null,
            ),
          ],
          function (e, t) {
            e(t, 1, 0, t.component.distance);
          },
          null,
        );
      }
      function N(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "first-line__additional-info"]],
              [[2, "first-line__additional-info--numbered", null]],
              null,
              null,
              null,
              null,
            )),
            (e()(), i.hb(16777216, null, null, 1, null, $)),
            i.xb(
              2,
              16384,
              null,
              0,
              g.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(), i.hb(0, [["distanceNoLineNumbers", 2]], null, 0, null, I)),
          ],
          function (e, t) {
            e(t, 2, 0, t.component.showLineNumber, i.Nb(t, 3));
          },
          function (e, t) {
            e(t, 0, 0, t.component.showLineNumber);
          },
        );
      }
      function A(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-checkbox",
              [
                ["class", "first-line__checkbox"],
                ["id", "FirstLineCheckbox"],
              ],
              null,
              null,
              null,
              b.b,
              b.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              p.a,
              [i.l, i.D, f.a, l.a, [3, p.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              49152,
              null,
              0,
              _.a,
              [],
              { id: [0, "id"], checked: [1, "checked"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, "FirstLineCheckbox"),
              e(t, 2, 0, "FirstLineCheckbox", n.checked));
          },
          null,
        );
      }
      function T(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              0,
              "div",
              [["class", "second-line__number"]],
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
      function j(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-list-item-additional-info",
              [],
              null,
              null,
              null,
              O.b,
              O.a,
            )),
            i.xb(
              1,
              49152,
              null,
              0,
              m.a,
              [],
              {
                dopiData: [0, "dopiData"],
                isGoogleLocation: [1, "isGoogleLocation"],
                entryFlagList: [2, "entryFlagList"],
              },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            e(t, 1, 0, n.dopiData, n.isGoogleLocation, n.entryFlagList);
          },
          null,
        );
      }
      function E(e) {
        return i.ac(
          2,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              26,
              "div",
              [["class", "container"]],
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
              v.a,
              [[2, C.a], [8, null], [3, v.a], i.l, i.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (e()(),
            i.yb(
              2,
              0,
              null,
              null,
              13,
              "div",
              [["class", "first-line"]],
              [[2, "first-line--numbered", null]],
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              3,
              0,
              null,
              null,
              2,
              "div",
              [["class", "first-line__icon"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              4,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["fileName", "E0C3_navigation_letzteziele.webp"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              o.b,
              o.a,
            )),
            i.xb(
              5,
              4243456,
              null,
              0,
              a.b,
              [l.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (e()(), i.hb(16777216, null, null, 1, null, L)),
            i.xb(
              7,
              16384,
              null,
              0,
              g.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            i.yb(
              8,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "first-line__address"],
                ["id", "FirstLineAddress"],
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
              y.b,
              y.a,
            )),
            i.xb(
              9,
              212992,
              null,
              0,
              p.a,
              [i.l, i.D, f.a, l.a, [3, p.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(10, 16384, null, 0, M.a, [], null, null),
            i.xb(
              11,
              245760,
              null,
              0,
              P.a,
              [[6, p.a], c.a, i.h, i.l, i.D, [2, S.a], [2, M.a], [2, x.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            (e()(), i.hb(16777216, null, null, 1, null, N)),
            i.xb(
              13,
              16384,
              null,
              0,
              g.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), i.hb(16777216, null, null, 1, null, A)),
            i.xb(
              15,
              16384,
              null,
              0,
              g.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            i.yb(
              16,
              0,
              null,
              null,
              10,
              "div",
              [["class", "second-line"]],
              [[2, "second-line--numbered", null]],
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              17,
              0,
              null,
              null,
              0,
              "div",
              [["class", "second-line__icon"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.hb(16777216, null, null, 1, null, T)),
            i.xb(
              19,
              16384,
              null,
              0,
              g.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            i.yb(
              20,
              0,
              null,
              null,
              6,
              "div",
              [["class", "second-line__rest"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              21,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "rest__text"],
                ["id", "SecondLineAddress"],
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
              y.b,
              y.a,
            )),
            i.xb(
              22,
              212992,
              null,
              0,
              p.a,
              [i.l, i.D, f.a, l.a, [3, p.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(23, 16384, null, 0, M.a, [], null, null),
            i.xb(
              24,
              245760,
              null,
              0,
              P.a,
              [[6, p.a], c.a, i.h, i.l, i.D, [2, S.a], [2, M.a], [2, x.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            (e()(), i.hb(16777216, null, null, 1, null, j)),
            i.xb(
              26,
              16384,
              null,
              0,
              g.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, n.uiStateType),
              e(
                t,
                5,
                0,
                "E0C3_navigation_letzteziele.webp",
                n.ICON_CATEGORY_LIST,
              ),
              e(t, 7, 0, n.showLineNumber && n.lineNumber),
              e(t, 9, 0, "FirstLineAddress"),
              e(t, 11, 0, "FirstLineAddress", n.addressLines[0]),
              e(t, 13, 0, !n.isEditModeActive),
              e(t, 15, 0, n.isEditModeActive),
              e(t, 19, 0, n.showLineNumber && n.lineNumber),
              e(t, 22, 0, "SecondLineAddress"),
              e(t, 24, 0, "SecondLineAddress", n.addressLines[1]),
              e(t, 26, 0, !n.isEditModeActive));
          },
          function (e, t) {
            var n = t.component;
            (e(
              t,
              0,
              0,
              i.Nb(t, 1).uiStateListHorizontal,
              i.Nb(t, 1).uiStateListVertical,
              i.Nb(t, 1).uiStateCoverLeft,
              i.Nb(t, 1).uiStateCoverRight,
              i.Nb(t, 1).uiStateCoverBottom,
              i.Nb(t, 1).uiStateButton,
              i.Nb(t, 1).uiStateByDabLeft,
              i.Nb(t, 1).uiStateByDabRight,
              i.Nb(t, 1).uiStateLbDabLeft,
              i.Nb(t, 1).uiStateLbDabRight,
            ),
              e(t, 2, 0, n.showLineNumber),
              e(t, 4, 0, i.Nb(t, 5).iconComponentHidden),
              e(
                t,
                8,
                0,
                i.Nb(t, 11).backgroundColor,
                i.Nb(t, 11).fixedNumberOfLines,
                i.Nb(t, 11).mayContainLatinCharsForArabic,
                i.Nb(t, 11).shortenWithEllipsisForArabic,
              ),
              e(t, 16, 0, n.showLineNumber),
              e(
                t,
                21,
                0,
                i.Nb(t, 24).backgroundColor,
                i.Nb(t, 24).fixedNumberOfLines,
                i.Nb(t, 24).mayContainLatinCharsForArabic,
                i.Nb(t, 24).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
    },
    gvVq: function (e, t, n) {
      "use strict";
      (n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "a", function () {
          return a;
        }));
      var i = n("jzYI");
      function o(e, t, n, i) {
        if (
          (i.info("selectFromVisibleListItems: Selection", e),
          e.referenceToSelectedMapElement)
        ) {
          const o = e.referenceToSelectedMapElement;
          if (o.searchResultReference && o.searchResultReference.id) {
            const a = o.searchResultReference.id;
            i.info(
              "selectFromVisibleListItems: looking for searchResultId in visibleListItems",
              { searchResultId: a, visibleListItems: t },
            );
            const l = t.find((e) => {
              const t = e.item.location ? e.item.location : e.item.searchResult;
              return t && t.staticObject && t.staticObject.id
                ? t.staticObject.id === a
                : (i.warn(
                    "selectFromVisibleListItems: invalid VisibleListItem",
                    t,
                  ),
                  !1);
            });
            if (!l)
              return void i.warn(
                "selectFromVisibleListItems: could not find associated list item for selection",
                e,
              );
            i.info("selectFromVisibleListItems: searchResultItem found", l);
            const s = l.item.searchResult || l.item.location;
            s
              ? s.staticObject && s.staticObject.navAddress
                ? (i.info(
                    "selectFromVisibleListItems: triggering onTruffleSearchResultTap from controller with truffleSearchResult",
                    s,
                  ),
                  n.onTruffleSearchResultTap(s))
                : i.warn(
                    "selectFromVisibleListItems: invalid truffleSearchResult",
                    s,
                  )
              : i.warn(
                  "selectFromVisibleListItems: invalid searchResultItem",
                  l,
                );
          } else
            i.warn(
              "selectFromVisibleListItems: could not find searchResultReference in selection",
              e,
            );
        } else
          i.warn(
            "selectFromVisibleListItems: could not find valid referenceToSelectedMapElement",
            e,
          );
      }
      function a(e, t) {
        if (t)
          return e.type === i.b.HOME_ADDRESS || e.type === i.b.BUSINESS_ADDRESS
            ? t.get(e.type)
            : e.id
              ? t.get(e.id)
              : void 0;
      }
    },
    "hh+9": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return p;
      });
      var i = n("QQZH"),
        o = n("C05f"),
        a = n("HM3f"),
        l = n("8lHc"),
        s = n("ROBh"),
        r = n("Ohay"),
        c = n("TLy2"),
        u = n("YtkY"),
        d = n("kuMc"),
        h = n("xVbo"),
        g = n("6dmc"),
        b = n("1+5f");
      (n("Yi6/"), n("o/Wa"), n("lgS8"), n("AuMu"));
      let p = (() => {
        class e {
          constructor(e, t, n, a) {
            ((this.searchAreaService = e),
              (this.googleSearchService = t),
              (this.searchController = n),
              (this.destroy$$ = new i.a(1)),
              (this.autoSwitchEnabled$$ = new o.a(!1)),
              (this.autoSwitchEnabled$ = this.autoSwitchEnabled$$
                .asObservable()
                .pipe(Object(r.a)())),
              (this.logger = a.getLogger(
                "navi.navsearch.SearchAutoSwitchService",
                [g.a.NAVSEARCH],
              )),
              this.initializeAutoSwitchToGoogleSearch());
          }
          ngOnDestroy() {
            (this.logger.info(
              "ngOnDestroy: deactivate switch to google search",
            ),
              this.destroy$$.next());
          }
          enableAutoSwitchToGoogleSearch() {
            this.autoSwitchEnabled$$.next(!0);
          }
          disableAutoSwitchToGoogleSearch() {
            this.autoSwitchEnabled$$.next(!1);
          }
          initializeAutoSwitchToGoogleSearch() {
            const t = this.searchController.searchCompleted$.pipe(
              Object(c.a)((t) =>
                t
                  ? (this.logger.info(
                      "initializeAutoSwitchToGoogleSearch: search completed, get search results count",
                    ),
                    Object(a.b)(
                      this.searchController.searchResultCount$.pipe(
                        Object(u.a)((e) => 0 === e),
                      ),
                      Object(l.a)(e.RESULT_DELAY),
                    ).pipe(
                      Object(u.a)(
                        ([e, t]) => (
                          this.logger.info(
                            "initializeAutoSwitchToGoogleSearch: timer passed, noResults?",
                            e,
                          ),
                          e
                        ),
                      ),
                      Object(d.a)(
                        this.searchController.searchInProgress$.pipe(
                          Object(h.a)((e) => !!e),
                        ),
                      ),
                    ))
                  : (this.logger.info(
                      "initializeAutoSwitchToGoogleSearch: search not completed",
                    ),
                    Object(s.a)(!1)),
              ),
              Object(r.a)(),
            );
            Object(a.b)(
              this.autoSwitchEnabled$$,
              t,
              this.searchController.hasExternalSearchService$.pipe(
                Object(r.a)(),
              ),
              this.searchAreaService.searchArea$.pipe(Object(r.a)()),
              this.searchController.isEmptySearch$.pipe(Object(r.a)()),
            )
              .pipe(Object(d.a)(this.destroy$$))
              .subscribe(([e, t, n, i, o]) => {
                const a =
                  n &&
                  this.googleSearchService.isAvailable() &&
                  !this.googleSearchService.isEnabled();
                (this.logger.info(
                  "initializeAutoSwitchToGoogleSearch: decide to switch to google search based on:",
                  {
                    autoSwitchEnabled: e,
                    completedWithNoResults: t,
                    searchArea: i,
                    isEmptySearch: o,
                    canSwitchToGoogle: a,
                  },
                ),
                  e &&
                    t &&
                    i !== b.f.ALONGROUTE &&
                    !o &&
                    a &&
                    (this.logger.info(
                      "initializeAutoSwitchToGoogleSearch: switch to google search",
                    ),
                    this.googleSearchService.toggleEnabled()));
              });
          }
        }
        return ((e.RESULT_DELAY = 1e3), e);
      })();
    },
    igiz: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var i = n("1+5f"),
        o = n("Yi6/"),
        a = n("kGpN"),
        l = n("RoxU"),
        s = n("7f94");
      class r {
        constructor() {
          ((this.distanceFormattingRule = a.a.DistanceToDestination),
            (this.sourceUnit = o.vc.METERS),
            (this.iconCategory = o.Z.List),
            (this.uiStateType = o.uc.ListHorizontal),
            (this.getDistanceValue = s.a),
            (this.getLineNumberIcon = s.b),
            (this.useHighlighting = !0),
            (this.dopiData = void 0),
            (this.showLineNumber = !1),
            (this.isGoogleLocation = !1),
            (this.address = { icon: "", lines: [], navAddress: { id: "" } }));
        }
        set address(e) {
          ((this._address = e),
            (this.isGoogleLocation =
              this.address &&
              this.address.navAddress &&
              this.address.navAddress.provider === i.j.GOOGLE));
        }
        get address() {
          return this._address;
        }
        getPoiEntryFlags() {
          if (!this.address || !this.address.navAddress) return [];
          const e = this.address.navAddress.poiInfos;
          return !e || e.length < 1
            ? []
            : e
                .filter((e) => l.a.entryIsAllowed(e))
                .sort((e, t) => l.a.compareEntryFlags(e, t));
        }
      }
    },
    lgS8: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return w;
      });
      var i = n("D57K"),
        o = n("ZTXN"),
        a = n("C05f"),
        l = n("HM3f"),
        s = n("ROBh"),
        r = n("kuMc"),
        c = n("xVbo"),
        u = n("TLy2"),
        d = n("YtkY"),
        h = n("jIqt"),
        g = n("Ohay"),
        b = n("3mST"),
        p = n("8j5Y"),
        f = n("J+dc"),
        _ = n("6dmc"),
        O = n("1+5f"),
        m = n("Yi6/"),
        v = (n("wtRy"), n("Al+L")),
        C = n("pWIT"),
        y = (n("3OpO"), n("sK8D")),
        M = n("4C60"),
        P = (n("DexO"), n("n06X"), n("qL44")),
        S = (n("MUOu"), n("yvGo"), n("OmET"), n("elHj"), n("yRMx")),
        x = (n("bDeJ"), n("/L1O"), n("AuMu"), n("Td1N"), n("wfP6"), n("jzYI"));
      class w extends S.b {
        constructor(
          e,
          t,
          n,
          i,
          l,
          s,
          r,
          c,
          u,
          d,
          h,
          g,
          b,
          p,
          f,
          O,
          m,
          v,
          C,
          y,
          M,
          P,
          S,
          x,
          w,
        ) {
          (super(e, t, n, i, l, s, u, d, r, c, g, h, P, S, x, w),
            (this.searchModeService = b),
            (this.addressComplementService = p),
            (this.homeBusinessService = f),
            (this.externalSearchProvider = O),
            (this.inputStateService = m),
            (this.sdsDialogStatusService = v),
            (this.activatedRoute = C),
            (this.parkingMapService = y),
            (this.systemConfigService = M),
            (this.parkingMapTap$$ = new o.a()),
            (this.hybridNaviTfsCtrlLogger = w.getLogger(
              "navi.truffle.HybridTruffleSearchControllerService",
              [_.b.TRUFFLESSEARCH, _.a.NAVSEARCH],
            )),
            (this.searchModeReset$$ = new o.a()),
            (this.suggestionSearchActive$$ = new a.a(!1)),
            this.initializeActivatedRoute(),
            this.initializeSearchAreaSwitch(),
            this.initializeSdsDialogStatus(),
            this.initializeInitialSearchState(),
            this.checkInitialSearchMode(),
            this.initializeExternalSearch(),
            this.initializeCombinedSearchResults());
        }
        onTruffleSearchResultTap(e) {
          this.addSelectedItemToDictionary(e);
          const t = e.staticObject,
            n = t.navAddress;
          (this.hybridNaviTfsCtrlLogger.info(
            "onTruffleSearchResultTap: tapped on result item",
            n.source.id,
          ),
            this.getSearchResultLocation(e)
              .pipe(Object(r.a)(this.destroy$$))
              .subscribe((e) => {
                (this.hybridNaviTfsCtrlLogger.info(
                  "onTruffleSearchResultTap: received searchResultLocation:",
                  e,
                ),
                  this.continueInput(n).then(
                    (i) => {
                      if (i) {
                        this.hybridNaviTfsCtrlLogger.info(
                          "onTruffleSearchResultTap: continuing input",
                        );
                        const e = Object(P.c)(n);
                        (this.inputModelProvider.replaceInput(e),
                          this.inputStateService.requestInput());
                      } else if (
                        e.locationWithIgnoredHousenumber ||
                        e.locationWithSuggestedHousenumber ||
                        (e.roadSpecificLocations &&
                          e.roadSpecificLocations.length > 1)
                      )
                        this.startDisambiguationWorkflow(e);
                      else {
                        const n = this.searchModeService.getSearchMode(),
                          i = this.getLocationIdFromSearchResultLocation(e);
                        (this.hybridNaviTfsCtrlLogger.debug(
                          "onTruffleSearchResultTap: locationId",
                          i,
                        ),
                          i
                            ? this.goToDestinationScreen(i, n)
                            : this.hybridNaviTfsCtrlLogger.error(
                                `onTruffleSearchResultTap: no valid location id for address.id ${t.id}`,
                              ));
                      }
                    },
                    (e) => {
                      this.hybridNaviTfsCtrlLogger.info(
                        "onTruffleSearchResultTap: ",
                        e,
                      );
                    },
                  ));
              }));
        }
        onExternalSuggestionTap(e) {
          (this.hybridNaviTfsCtrlLogger.debug(
            "onExternalSuggestionTap: set suggestionSearchActive$$ to true",
          ),
            this.suggestionSearchActive$$.next(!0),
            this.searchText$
              .pipe(
                Object(c.a)((t) => t === e),
                Object(u.a)(() =>
                  this.searchText$.pipe(Object(d.a)((t) => t !== e)),
                ),
                Object(h.a)(!1),
              )
              .pipe(
                Object(c.a)((e) => e),
                Object(r.a)(this.destroy$$),
                Object(r.a)(
                  this.suggestionSearchActive$$.pipe(Object(c.a)((e) => !e)),
                ),
              )
              .subscribe(() => {
                (this.hybridNaviTfsCtrlLogger.debug(
                  "onExternalSuggestionTap: reset suggestionSearchActive$$ to false",
                ),
                  this.suggestionSearchActive$$.next(!1));
              }),
            this.inputModelProvider.replaceInput(e));
        }
        onParkingMapTap() {
          (this.hybridNaviTfsCtrlLogger.info(
            "onParkingMapTap: tapped on parking map",
          ),
            this.parkingMapTap$$.next(),
            this.searchId$
              .pipe(
                Object(c.a)(m.wd),
                Object(u.a)((e) =>
                  this.parkingMapService.getSearchCoordinates(e),
                ),
                Object(r.a)(this.parkingMapTap$$),
                Object(r.a)(this.destroy$$),
              )
              .subscribe((e) => {
                (this.hybridNaviTfsCtrlLogger.info(
                  "onParkingMapTap: received search coordinates:",
                  e,
                ),
                  e
                    ? this.goToParkingMap(e)
                    : this.hybridNaviTfsCtrlLogger.error(
                        "onParkingMapTap: no valid location to go to parking map",
                      ));
              }));
        }
        changeGoogleSearchMode() {
          this.externalSearchProvider.toggleEnabled();
        }
        restoreSearchParameters(e, t) {
          return (
            e.mode &&
              (this.hybridNaviTfsCtrlLogger.info(
                "restoreSearchParameters: restore searchMode",
                e.mode,
              ),
              e.mode === O.d.GOOGLE
                ? this.externalSearchProvider &&
                  !this.externalSearchProvider.isEnabled() &&
                  this.changeGoogleSearchMode()
                : this.searchModeService.setSearchMode(e.mode)),
            super.restoreSearchParameters(e, t)
          );
        }
        detectChangesAfterSearchStateRestore(e) {
          super.detectChangesAfterSearchStateRestore(e);
          const t = this.searchModeService.searchMode$.pipe(
            Object(g.a)(),
            Object(c.a)((t) => t === e.mode),
            Object(u.a)(() =>
              this.searchModeService.searchMode$.pipe(
                Object(d.a)((t) => t !== e.mode),
              ),
            ),
            Object(h.a)(!1),
          );
          this.addToMonitoredUserChanges(t);
        }
        recreateSearchFromSearchState(e) {
          (e.mode &&
            (this.hybridNaviTfsCtrlLogger.info(
              "recreateSearchFromSearchState: recreate search with searchMode:",
              e.mode,
            ),
            this.searchModeService.setSearchMode(e.mode)),
            super.recreateSearchFromSearchState(e));
        }
        startDisambiguationWorkflow(e) {
          (this.hybridNaviTfsCtrlLogger.info(
            `startDisambiguationWorkflow: searchResultLocation id: ${e.id}`,
          ),
            this.addressComplementService.startLocationDisambiguation(e).then(
              (t) => {
                if (t) {
                  const e = this.searchModeService.getSearchMode();
                  this.goToDestinationScreen(t, e);
                } else
                  this.hybridNaviTfsCtrlLogger.error(
                    `startDisambiguationWorkflow: no valid location id for searchResultLocation.id ${e.id}`,
                  );
              },
              (e) => {
                this.hybridNaviTfsCtrlLogger.error(
                  "startDisambiguationWorkflow: house number disambiguation failed",
                  e,
                );
              },
            ));
        }
        continueInput(e) {
          return Object(i.a)(this, void 0, void 0, function* () {
            return this.searchModeService.getSearchMode() !==
              O.d.INTELLIHYBRID ||
              Object(M.k)(e) ||
              Object(M.h)(e) ||
              Object(M.m)(e) ||
              Object(M.l)(e) ||
              Object(M.g)(e) ||
              !this.systemConfigService.isEURegion()
              ? Promise.resolve(!1)
              : this.addressComplementService.continueInput(e);
          });
        }
        checkInitialSearchMode() {
          (this.searchModeReset$$
            .pipe(Object(r.a)(this.destroy$$))
            .subscribe(() => {
              (this.hybridNaviTfsCtrlLogger.debug(
                "checkInitialSearchMode: resetting searchMode to SearchObjectModeEnum.INTELLIHYBRID",
              ),
                this.searchModeService.setSearchMode(O.d.INTELLIHYBRID));
            }),
            this.searchProvider.searchId$
              .pipe(
                Object(r.a)(this.searchModeReset$$),
                Object(r.a)(this.destroy$$),
                Object(c.a)((e) => null !== e && "-1" !== e),
                Object(b.a)(1),
              )
              .subscribe((e) => {
                this.searchModeReset$$.next();
              }),
            this.setDefaultSearchMode(),
            this.initializeSearchMode());
        }
        initializeSearchMode() {
          this.isRegularSearch$
            .pipe(
              Object(u.a)(() =>
                this.searchModeService.searchMode$.pipe(
                  Object(g.a)(),
                  Object(b.a)(1),
                ),
              ),
              Object(r.a)(this.destroy$$),
            )
            .subscribe((e) => {
              (this.hybridNaviTfsCtrlLogger.info(
                `initializeSearchMode: new searchMode ${e}`,
              ),
                this.retryCurrentSearch());
            });
        }
        initializeSearchAreaSwitch() {
          this.hasSearchAreaSwitch$ = this.searchAreaProvider.searchArea$.pipe(
            Object(g.a)(),
            Object(d.a)((e) => e !== O.f.CUSTOMLOCATION),
            Object(r.a)(this.destroy$$),
          );
        }
        initializeSdsDialogStatus() {
          const e = this.restoreComplete$.pipe(
              Object(u.a)(() => this.sdsDialogStatusService.sdsDialogVisible$),
              Object(c.a)((e) => e),
            ),
            t = e.pipe(
              Object(u.a)(() =>
                this.sdsDialogStatusService.sdsDialogVisible$.pipe(
                  Object(c.a)((e) => e),
                ),
              ),
            );
          (e.pipe(Object(r.a)(this.destroy$$)).subscribe(() => {
            (this.logger.info(
              "initializeSdsDialogStatus: sds became active - cancel search",
            ),
              this.searchProvider.stopSearch());
          }),
            t.pipe(Object(r.a)(this.destroy$$)).subscribe(() => {
              (this.logger.info(
                "initializeSdsDialogStatus: sds became inactive again - restart search",
              ),
                this.retryCurrentSearch());
            }));
        }
        initializeInitialSearchState() {
          this.remoteSearchService.searchState$
            .pipe(Object(r.a)(this.destroy$$))
            .subscribe((e) => {
              this.handleInitialSearchState(e);
            });
        }
        handleInitialSearchState(e) {
          if (e) {
            this.hybridNaviTfsCtrlLogger.info(
              "handleInitialSearchState: searchState",
              e,
            );
            const t = e.getCoordinates();
            (this.hybridNaviTfsCtrlLogger.info(
              "handleInitialSearchState: coordinates",
              t,
            ),
              (this.searchAreaProvider.customSearchLocation = t));
            const n = e.getMaxSearchDistance();
            n &&
              (this.hybridNaviTfsCtrlLogger.info(
                "handleInitialSearchState: setting max search distance to:",
                n,
              ),
              (this.searchAreaProvider.maxDistance = n));
            const i = e.getSearchArea();
            i &&
              (this.hybridNaviTfsCtrlLogger.info(
                "handleInitialSearchState: updating searchArea to:",
                i,
              ),
              this.searchAreaProvider.setSearchArea(i, !1));
            const o = e.getSearchResultId(),
              a = e.getSearchText();
            (this.hybridNaviTfsCtrlLogger.info(
              `handleInitialSearchState: sds invalid housenumber with searchResultId: ${o} and searchText: '${a}'`,
            ),
              o &&
                null !== a &&
                (this.inputModelProvider.replaceInput(a),
                this.searchLocationProvider
                  .getSearchResultLocationBySearchResultId(o)
                  .pipe(Object(r.a)(this.destroy$$))
                  .subscribe((e) => {
                    (this.hybridNaviTfsCtrlLogger.info(
                      "handleInitialSearchState: searchResultLocation",
                      e,
                    ),
                      this.remoteSearchService.informRemoteSearchDone(),
                      this.startDisambiguationWorkflow(e));
                  })));
          }
        }
        setDefaultSearchMode() {
          this.remoteSearchService.searchState &&
          this.remoteSearchService.searchState.isFuelSearch
            ? (this.hybridNaviTfsCtrlLogger.info(
                "setDefaultSearchMode: petrol station search detected, switching searchMode to SearchObjectModeEnum.FUELPRIMARY",
              ),
              this.searchModeService.setSearchMode(O.d.FUELPRIMARY))
            : this.searchModeReset$$.next();
        }
        initializeExternalSearch() {
          this.externalSearchProvider &&
            ((this.noConnectivity$ = this.externalSearchProvider.blocked$),
            Object(l.b)(
              this.externalSearchProvider.enabled$.pipe(Object(g.a)()),
              this.noConnectivity$.pipe(Object(g.a)()),
            )
              .pipe(Object(r.a)(this.destroy$$))
              .subscribe(([e, t]) => {
                t ||
                  (e
                    ? (this.hybridNaviTfsCtrlLogger.info(
                        "initializeExternalSearch: googleSearch became active",
                      ),
                      this.searchModeService.setSearchMode(O.d.GOOGLE),
                      this.suggestionSearchActive$$.next(!1))
                    : (this.hybridNaviTfsCtrlLogger.info(
                        "initializeExternalSearch: googleSearch became inactive",
                      ),
                      this.setDefaultSearchMode()));
              }),
            (this.initialSuggestions$ = Object(l.b)(
              this.initialSuggestions$,
              this.externalSearchProvider.enabled$,
            ).pipe(
              Object(d.a)(([e, t]) => (t ? [] : e)),
              Object(r.a)(this.destroy$$),
            )));
        }
        initializeHomeBusinessLocations() {
          return (
            this.hybridNaviTfsCtrlLogger.info(
              "initializeHomeBusinessLocations: start initializing",
            ),
            Object(l.b)(
              this.isEmptySearch$,
              this.searchAreaProvider.searchArea$.pipe(
                Object(d.a)((e) => e === O.f.CCP),
              ),
            ).pipe(
              Object(d.a)(([e, t]) => e && t),
              Object(g.a)(),
              Object(u.a)((e) =>
                e
                  ? (this.hybridNaviTfsCtrlLogger.info(
                      "initializeHomeBusinessLocations: empty search at CCP, request homeBusinessLocations",
                    ),
                    this.homeBusinessService.homeBusinessLocations$)
                  : (this.hybridNaviTfsCtrlLogger.info(
                      "initializeHomeBusinessLocations: non-empty search and/or not at CCP, use empty list",
                    ),
                    Object(s.a)([])),
              ),
              Object(p.a)((e) => {
                this.hybridNaviTfsCtrlLogger.info(
                  "initializeHomeBusinessLocations: homeBusinessLocations to include in search results: ",
                  e,
                );
              }),
              Object(r.a)(this.destroy$$),
            )
          );
        }
        initializeParkingMapLocations() {
          return (
            this.hybridNaviTfsCtrlLogger.info(
              "initializeParkingMapLocations: searchModeId:",
              this.searchModeId,
            ),
            this.searchModeId === y.r.ParkingNoLinkToParkingMap
              ? (this.hybridNaviTfsCtrlLogger.info(
                  "initializeParkingMapLocations: entered from onStreetParking - show no parkingMapLocation",
                ),
                Object(s.a)([]))
              : this.searchId$.pipe(
                  Object(c.a)(m.wd),
                  Object(u.a)((e) =>
                    this.parkingMapService.isOnStreetParkingAvailableForSearch(
                      e,
                    ),
                  ),
                  Object(d.a)((e) => {
                    const t = [];
                    return (
                      e && t.push(new C.a({ type: x.b.PARKING_MAP })),
                      this.hybridNaviTfsCtrlLogger.info(
                        "initializeParkingMapLocations: parkingMapLocations to include in search results:",
                        t,
                      ),
                      t
                    );
                  }),
                  Object(h.a)([]),
                  Object(r.a)(this.destroy$$),
                )
          );
        }
        initializeCombinedSearchResults() {
          this.searchResultsWithSuggestions$$ = new a.a([]);
          const e = this.conflictModeService.conflictSuggestions$,
            t = this.initializeHomeBusinessLocations(),
            n = this.initializeParkingMapLocations();
          (this.searchId$
            .pipe(
              Object(u.a)(() =>
                Object(l.b)(
                  n.pipe(
                    Object(m.pd)(
                      this.hybridNaviTfsCtrlLogger,
                      "initializeCombinedSearchResults: parkingMapLocations$ fired",
                      !1,
                    ),
                  ),
                  t.pipe(
                    Object(m.pd)(
                      this.hybridNaviTfsCtrlLogger,
                      "initializeCombinedSearchResults: homeBusinessLocations$ fired",
                      !1,
                    ),
                  ),
                  this.searchResults$.pipe(
                    Object(m.pd)(
                      this.hybridNaviTfsCtrlLogger,
                      "initializeCombinedSearchResults: searchResults$ fired",
                      !1,
                    ),
                  ),
                  e.pipe(
                    Object(m.pd)(
                      this.hybridNaviTfsCtrlLogger,
                      "initializeCombinedSearchResults: conflictSuggestions$ fired",
                      !1,
                    ),
                  ),
                  this.noConnectivity$.pipe(
                    Object(m.pd)(
                      this.hybridNaviTfsCtrlLogger,
                      "initializeCombinedSearchResults: noConnectivity$ fired",
                      !1,
                    ),
                  ),
                  this.externalSearchProvider.enabled$.pipe(
                    Object(m.pd)(
                      this.hybridNaviTfsCtrlLogger,
                      "initializeCombinedSearchResults: externalSearchProvider.enabled$ fired",
                      !1,
                    ),
                  ),
                ),
              ),
              Object(d.a)(
                ([e, t, n, i, o, a]) => (
                  this.hybridNaviTfsCtrlLogger.info(
                    "initializeCombinedSearchResults: all contributors fired, combining results",
                  ),
                  (t = a ? [] : t),
                  this.hybridNaviTfsCtrlLogger.info(
                    `initializeCombinedSearchResults: noConnectivity: ${o}`,
                  ),
                  this.hybridNaviTfsCtrlLogger.info(
                    `initializeCombinedSearchResults: externalSearchEnabled: ${a}`,
                  ),
                  o && a ? [] : [...e, ...t, ...i, ...n]
                ),
              ),
              Object(r.a)(this.destroy$$),
            )
            .subscribe((e) => {
              (this.hybridNaviTfsCtrlLogger.debug(
                "initializeCombinedSearchResults: combined results",
                e,
              ),
                this.hybridNaviTfsCtrlLogger.info(
                  `initializeCombinedSearchResults: emitting ${e.length} combined results`,
                ),
                this.searchResultsWithSuggestions$$.next(e));
            }),
            (this.searchResultsWithSuggestions$ =
              this.searchResultsWithSuggestions$$.asObservable()),
            (this.hasExternalSearchService$ =
              this.externalSearchProvider.serviceDisabled$.pipe(
                Object(d.a)((e) => !e),
                Object(r.a)(this.destroy$$),
                Object(p.a)((e) =>
                  this.hybridNaviTfsCtrlLogger.debug(
                    "initializeCombinedSearchResults: hasExternalSearchService",
                    e,
                  ),
                ),
              )));
        }
        retryCurrentSearch() {
          (this.hybridNaviTfsCtrlLogger.info("retryCurrentSearch"),
            this.inputField$
              .pipe(Object(f.a)(1), Object(r.a)(this.destroy$$))
              .subscribe((e) => {
                (this.hybridNaviTfsCtrlLogger.info(
                  "retryCurrentSearch: retry search with current input",
                  e,
                ),
                  this.retrySearch(e));
              }));
        }
        initializeActivatedRoute() {
          const e = this.activatedRoute.snapshot.params;
          (this.hybridNaviTfsCtrlLogger.info(
            "initializeActivatedRoute: snapShotParams:",
            e,
          ),
            (this.searchModeId = e[y.l]),
            Object(l.b)(this.activatedRoute.queryParams, this.searchType$$)
              .pipe(Object(r.a)(this.destroy$$))
              .subscribe(([e, t]) => {
                (this.hybridNaviTfsCtrlLogger.info(
                  `initializeActivatedRoute: searchType=${t} query params:`,
                  e,
                ),
                  Object(m.wd)(e.reInit) &&
                    e.reInit &&
                    t === v.b.REGULAR &&
                    this.reApplyInitialSearchState());
              }));
        }
        reApplyInitialSearchState() {
          const e = this.remoteSearchService.searchState;
          if (e) {
            this.hybridNaviTfsCtrlLogger.info(
              "reApplyInitialSearchState: searchState:",
              e,
            );
            const t = e.getSearchText();
            t &&
              (this.hybridNaviTfsCtrlLogger.info(
                "reApplyInitialSearchState: searchNeedle:",
                t,
              ),
              this.setDefaultSearchMode(),
              this.inputModelProvider.replaceInput(Object(P.d)(t)),
              this.retryCurrentSearch(),
              this.remoteSearchService.informRemoteSearchDone());
          } else
            this.hybridNaviTfsCtrlLogger.warn(
              "reApplyInitialSearchState: no initial searchState found",
            );
        }
      }
    },
    nqvY: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return c;
      }),
        n.d(t, "b", function () {
          return u;
        }));
      var i = n("MddD"),
        o = n("Yi6/"),
        a = n("4C60"),
        l = n("RoxU"),
        s = n("kGpN"),
        r = n("7f94"),
        c = (function (e) {
          return (
            (e.FAVORITE = "FAVORITE"),
            (e.HOME = "HOME"),
            (e.BUSINESS = "BUSINESS"),
            e
          );
        })({});
      let u = (() => {
        class e {
          constructor(e, t) {
            ((this.addressFormattingService = e),
              (this.displayService = t),
              (this.distanceFormattingRule = s.a.DistanceToDestination),
              (this.sourceUnit = o.vc.METERS),
              (this.ICON_CATEGORY_LIST = o.Z.List),
              (this.uiStateType = o.uc.ListHorizontal),
              (this.noAddressTextLine2 = "Keine Adresse hinterlegt"),
              (this.entryFlagList = []),
              (this.isGoogleLocation = !1),
              (this.dopiData = void 0),
              (this.hasEditModeMoveHandle = !0),
              (this.isEditModeActive = !1),
              (this.lineNumber = void 0),
              (this._showLineNumber = !1),
              (this.favoriteTypeEnum = c),
              (this.developerTextLine1 = o.gd.textToolMode
                ? "HomeBusinessAddress"
                : void 0),
              (this.developerTextLine2 = o.gd.textToolMode
                ? this.noAddressTextLine2
                : void 0),
              (this.hasDistanceValue = r.c),
              (this.getDistanceValue = r.a),
              (this.getLineNumberIcon = r.b));
          }
          set destination(t) {
            if ((this.initDestinationInfos(t), t))
              switch (((this.itemType = t.type), t.type)) {
                case c.HOME:
                  ((this.developerTextLine1 = e.LINE1_HOME),
                    this.formatHomeBusinessAddress(t.destination),
                    (this.iconFileName = e.ICON_HOME));
                  break;
                case c.BUSINESS:
                  ((this.developerTextLine1 = e.LINE1_BUSINESS),
                    this.formatHomeBusinessAddress(t.destination),
                    (this.iconFileName = e.ICON_BUSINESS));
                  break;
                default:
                  ((this.developerTextLine1 = void 0),
                    (this.developerTextLine2 = void 0),
                    this.formatFavoriteAddress(t.destination),
                    (this.iconFileName = e.ICON_FAVORITE));
              }
          }
          set showLineNumber(e) {
            this._showLineNumber = e && this.displayService.isHighResolution;
          }
          get showLineNumber() {
            return this._showLineNumber;
          }
          initDestinationInfos(e) {
            if (e && e.destination) {
              const t = e.destination.location;
              if (
                ((this.isGoogleLocation = t.provider === i.j.GOOGLE),
                t.poiInfos && t.poiInfos.length > 0)
              ) {
                const e = t.poiInfos.map((e) =>
                  l.a.locationObjectPoiInfosToSearchresultObjectPoiInfos(e),
                );
                this.entryFlagList = e
                  .filter((e) => l.a.entryIsAllowed(e))
                  .sort((e, t) => l.a.compareEntryFlags(e, t));
              } else this.entryFlagList = [];
            } else ((this.isGoogleLocation = !1), (this.entryFlagList = []));
          }
          formatHomeBusinessAddress(e) {
            e && e.location
              ? ((this.developerTextLine2 = void 0),
                (this.nonI18nTextLine2 = this.addressFormattingService.getLines(
                  1,
                  Object(a.a)(e.location),
                )[0]))
              : ((this.developerTextLine2 = this.noAddressTextLine2),
                (this.nonI18nTextLine2 = void 0));
          }
          formatFavoriteAddress(e) {
            if (e && e.location) {
              const t = this.addressFormattingService.getLines(
                2,
                Object(a.a)(e.location),
              );
              ((this.nonI18nTextLine1 = t[0]), (this.nonI18nTextLine2 = t[1]));
            } else ((this.nonI18nTextLine1 = ""), (this.nonI18nTextLine2 = ""));
          }
        }
        return (
          (e.ICON_FAVORITE = "E0FC_favoriten.webp"),
          (e.ICON_BUSINESS = "E800_destination_business.webp"),
          (e.ICON_HOME = "EA1A_navigation_home.webp"),
          (e.LINE1_HOME = "Heimatadresse"),
          (e.LINE1_BUSINESS = "Gesch\xe4ftadresse"),
          e
        );
      })();
    },
    "o/Wa": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return _;
      });
      var i = n("QQZH"),
        o = n("ZTXN"),
        a = n("C05f"),
        l = n("HM3f"),
        s = n("ROBh"),
        r = n("YtkY"),
        c = n("Ohay"),
        u = n("kuMc"),
        d = n("8j5Y"),
        h = n("TLy2"),
        g = n("MddD"),
        b = n("Yi6/"),
        p = (n("dr0G"), n("nTAn"), n("vsTE"), n("tt3c")),
        f = (function (e) {
          return (
            (e.DISABLED = "DISABLED"),
            (e.ENABLED = "ENABLED"),
            (e.AVAILABLE = "AVAILABLE"),
            e
          );
        })({});
      class _ {
        constructor(e, t, n, l, s) {
          ((this.functionsAvailabilityService = e),
            (this.popupManager = t),
            (this.privacyService = n),
            (this.externalSearchService = l),
            (this.destroy$$ = new i.a(1)),
            (this.toggleEnabled$$ = new o.a()),
            (this.enabled$$ = new a.a(!1)),
            (this.serviceDisabled$$ = new a.a(!1)),
            (this.disabledReasons$$ = new a.a([])),
            (this.searchMode$$ = new a.a(f.DISABLED)),
            (this.available$ = this.searchMode$$.pipe(
              Object(r.a)((e) => e !== f.DISABLED),
              Object(c.a)(),
            )),
            (this.serviceDisabled$ = this.serviceDisabled$$.pipe(
              Object(c.a)(),
            )),
            (this.disabledReasons$ = this.disabledReasons$$.pipe(
              Object(c.a)(),
            )),
            (this.logger = s.getLogger(
              "navi.truffle.GoogleSearchProviderService",
            )),
            this.initializeAvailability());
        }
        ngOnDestroy() {
          (this.externalSearchService.stopExternalSearchWebApp(),
            this.enabled$$.complete(),
            this.destroy$$.next());
        }
        toggleEnabled() {
          if (this.isAvailable()) {
            const e = this.enabled$$.getValue();
            (this.toggleEnabled$$.next(),
              e
                ? this.enabled$$.next(
                    !e && this.searchMode$$.getValue() !== f.DISABLED,
                  )
                : this.externalSearchService
                    .startExternalSearchWebApp()
                    .pipe(
                      Object(u.a)(this.toggleEnabled$$),
                      Object(u.a)(this.destroy$$),
                    )
                    .subscribe((t) => {
                      t
                        ? (this.logger.info(
                            "toggleEnabled: google app is running",
                          ),
                          this.enabled$$.next(
                            !e && this.searchMode$$.getValue() !== f.DISABLED,
                          ))
                        : this.logger.warn(
                            "toggleEnabled: google app is not running",
                          );
                    }));
          } else {
            const e = this.disabledReasons$$.getValue();
            (this.logger.debug("toggleEnabled: disabled reasons" + e),
              e.includes(g.e.SERVICEDISABLED)
                ? (this.logger.info(
                    "toggleEnabled: service disabled, showing toast " +
                      b.Ob.POPUP_TOAST_HINTS_DISABLED_FUNCTION,
                  ),
                  this.popupManager.request(
                    b.Ob.POPUP_TOAST_HINTS_DISABLED_FUNCTION,
                  ))
                : e.includes(g.e.NOLICENSE)
                  ? (this.logger.info(
                      "toggleEnabled: no valid google license, showing toast " +
                        b.Ob.POPUP_NAV_GOOGLE_LICENSE_INVALID,
                    ),
                    this.popupManager.request(
                      b.Ob.POPUP_NAV_GOOGLE_LICENSE_INVALID,
                    ))
                  : e.includes(g.e.PRIVACYMODE) &&
                    (this.serviceId
                      ? (this.logger.info(
                          `toggleEnabled: privacy mode active, showing privacy popup for serviceId "${this.serviceId}"`,
                        ),
                        this.privacyService.triggerPrivacyStagedFunctionPopupByName(
                          this.serviceId,
                        ))
                      : this.logger.error(
                          "toggleEnabled: cannot trigger privacy popup because received no valid serviceId",
                        )));
          }
        }
        isEnabled() {
          return (
            this.enabled$$.getValue() &&
            this.searchMode$$.getValue() !== f.DISABLED
          );
        }
        isAvailable() {
          return this.searchMode$$.getValue() !== f.DISABLED;
        }
        initializeAvailability() {
          this.logger.out.info(
            "initializeAvailability: retrieve functionAvailabilities",
          );
          const e =
            this.functionsAvailabilityService.googleSearchAvailability$.pipe(
              Object(u.a)(this.destroy$$),
              Object(d.a)((e) =>
                this.logger.in.info(
                  "initializeAvailability: received google availability",
                  e,
                ),
              ),
              Object(d.a)((e) => {
                (e &&
                  e.disabledReasons &&
                  (this.disabledReasons$$.next(e.disabledReasons),
                  this.serviceDisabled$$.next(
                    e.disabledReasons.includes(g.e.NOSERVICE),
                  )),
                  (this.serviceId = e.serviceId));
              }),
              Object(r.a)(
                (e) =>
                  (!!e && !!e.availability) ||
                  (!!e &&
                    !!e.disabledReasons &&
                    !e.disabledReasons.includes(g.e.NOLICENSE) &&
                    !e.disabledReasons.includes(g.e.PRIVACYMODE) &&
                    !e.disabledReasons.includes(g.e.SERVICEDISABLED)),
              ),
            );
          (Object(l.b)(this.enabled$$, e)
            .pipe(
              Object(r.a)(([e, t]) => {
                let n = f.DISABLED;
                return (t && (n = e ? f.ENABLED : f.AVAILABLE), n);
              }),
              Object(d.a)((e) =>
                this.logger.debug("initializeAvailability: searchMode", e),
              ),
              Object(u.a)(this.destroy$$),
            )
            .subscribe((e) => {
              this.searchMode$$.next(e);
            }),
            (this.enabled$ = this.searchMode$$.pipe(
              Object(r.a)((e) => e === f.ENABLED),
            )),
            (this.blocked$ = Object(l.b)(
              this.enabled$,
              this.disabledReasons$,
            ).pipe(
              Object(h.a)(([e, t]) => {
                const n = e && t.includes(g.e.NOCONNECTIVITY);
                return (
                  this.logger.debug("initializeAvailability: blocked:", n),
                  Object(s.a)(n)
                );
              }),
            )),
            (this.externalSearchFileName$ = this.searchMode$$.pipe(
              Object(h.a)((e) =>
                b.gd.textToolMode
                  ? Object(s.a)(p.a.defaultIconFileNames.disabled)
                  : this.getFileNameForSearchMode(e),
              ),
              Object(u.a)(this.destroy$$),
            )));
        }
        getFileNameForSearchMode(e) {
          switch (e) {
            case f.ENABLED:
              return this.externalSearchService.providerIconEnabled$;
            case f.AVAILABLE:
              return this.externalSearchService.providerIconAvailable$;
            case f.DISABLED:
            default:
              return this.externalSearchService.providerIconDisabled$;
          }
        }
      }
    },
    oDzz: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return _;
      });
      var i = n("kZht"),
        o = n("ZTXN"),
        a = n("QQZH"),
        l = n("HM3f"),
        s = n("TLy2"),
        r = n("kuMc"),
        c = n("J+dc"),
        u = n("Yi6/"),
        d = n("1Eyf"),
        h = (n("nTAn"), n("tYr6"), n("dxLW"), n("Vna1")),
        g = n("kGpN"),
        b = n("4C60"),
        p = n("CRZS"),
        f = n("rFV6");
      let _ = (() => {
        class e {
          constructor(t, n, l, c, d, b, _, O) {
            ((this.renderersService = t),
              (this.elementsService = n),
              (this.changeDetectorRef = l),
              (this.lockingService = c),
              (this.systemConficService = d),
              (this.ICON_CATEGORY_STATUSLINE = u.Z.StatusLine),
              (this.ICON_CATEGORY_LIST = u.Z.List),
              (this.isPOI = !1),
              (this.isLocationFavorite = !1),
              (this.showRouteDetails = !1),
              (this.realRoadDistance = 0),
              (this.dopiContent = ""),
              (this.dopiWeatherContent = ""),
              (this.trafficDelay = 0),
              (this.hasRoadBlock = !1),
              (this.tollAmount = null),
              (this.hasFavoriteStar = !0),
              (this.hasProviderLogo = !1),
              (this.toggleFavorite = new i.n()),
              (this.previewMapClicked = new i.n()),
              (this.distanceEtaIconCategory = u.Z.List),
              (this.distanceEtaIconFilename = "E0BE_zwischenzielflagge.webp"),
              (this.trafficDelayIconCategory = u.Z.List),
              (this.trafficDelayIconFilename =
                "E0BA_map_verkehrsmeldungen.webp"),
              (this.tollAmountIconCategory = u.Z.List),
              (this.tollAmountIconFilename =
                "E2B9_navigation_toll_road_asia.webp"),
              (this.timeUnit = u.vc.MILLISECONDS),
              (this.timeFormattingRule = g.a.DelayOnRoute),
              (this.favIconCategory = u.Z.Touch),
              (this.distanceEtaSeparator = "/"),
              (this.distanceFormattingRule = g.a.DistanceToDestination),
              (this.sourceUnit = u.vc.METERS),
              (this.displayTrafficDelayThreshold = p.a),
              (this.etaDefaultText = f.a),
              (this.address = null),
              (this.displayableName = u.J.MAP),
              (this.newRoute$$ = new o.a()),
              (this.mapInitialized$$ = new o.a()),
              (this.location$$ = new o.a()),
              (this.focusMapOnRoute$$ = new o.a()),
              (this.destroy$$ = new a.a(1)),
              (this.blockingMap = {
                lockingKey: {
                  type: u.Eb.IMAGE,
                  category: u.wb.DECORATIVE,
                  action: u.ub.FADE_IMAGE,
                },
              }),
              (this.disablePreviewMapHaptic = !1),
              (this.logger = O.getLogger(
                "navi.DestinationDetailsViewComponent",
              )),
              (this.showPreviewMap = b.isHighResolution),
              this.showPreviewMap &&
                ((this.mapTextureOffset = {
                  left: (b.displayWidth - h.f - h.q) / 2,
                  top: (b.displayHeight - h.h - h.p) / 2,
                }),
                c
                  .getProperty(e.hideImageKey)
                  .pipe(
                    Object(s.a)((e) => e.lock$),
                    Object(r.a)(this.destroy$$),
                  )
                  .subscribe((e) => (this.disablePreviewMapHaptic = e)),
                (this.providerFileName$ = _.providerIcon$),
                this.initPreviewMap()));
          }
          set location(e) {
            ((this.hasLocation = !!e),
              (this.isPOI = !(!e || !e.poiId)),
              (this.address = e ? Object(b.a)(e) : null),
              this.location$$.next(e));
          }
          set route$(e) {
            (this.newRoute$$.next(),
              e &&
                Object(l.b)(
                  e.pipe(Object(c.a)(1), Object(r.a)(this.newRoute$$)),
                  this.mapInitialized$$,
                )
                  .pipe(Object(r.a)(this.destroy$$))
                  .subscribe(([e]) => {
                    (this.focusMapOnRoute$$.next(), this.focusMapOnRoute(e));
                  }));
          }
          get airQualityIcon() {
            return Object(u.rd)(this.dopiAirQualityIndex)
              ? ""
              : this.dopiAirQualityIndex < 150
                ? "EA0F_navigation_asia_airpollution_level_1.webp"
                : this.dopiAirQualityIndex < 200
                  ? "EA12_navigation_asia_airpollution_level_2.webp"
                  : "EA13_navigation_asia_airpollution_level_3.webp";
          }
          ngOnDestroy() {
            (this.elementsService.flushElements(),
              this.showPreviewMap &&
                this.renderersService.activeMapInstance === d.f.PREVIEW &&
                this.renderersService.setVisibility(!1),
              this.destroy$$.next());
          }
          initPreviewMap() {
            (this.renderersService.activateMapInstance(d.f.PREVIEW).then(() => {
              const e = JSON.parse(JSON.stringify(h.t));
              ((e.coordX = e.coordX
                ? e.coordX + this.mapTextureOffset.left
                : this.mapTextureOffset.left),
                (e.coordY = e.coordY
                  ? e.coordY + this.mapTextureOffset.top
                  : this.mapTextureOffset.top),
                Promise.all([
                  this.renderersService.setVisibility(!0),
                  this.renderersService.setZoomArea(e),
                  this.renderersService.setCopyrightTextAndIcon(
                    d.d.TOPCENTER,
                    {
                      coordX: this.mapTextureOffset.left + h.a.coordX,
                      coordY: this.mapTextureOffset.top + h.a.coordY,
                      diffX: h.a.diffX,
                      diffY: h.a.diffY,
                    },
                    {
                      coordX: this.mapTextureOffset.left + h.k.coordX,
                      coordY: this.mapTextureOffset.top + h.k.coordY,
                    },
                  ),
                ])
                  .then(() => {
                    (this.logger.info(
                      "initPreviewMap: Initialization of Preview map done",
                    ),
                      this.mapInitialized$$.next());
                  })
                  .catch((e) =>
                    this.logger.warn(
                      "initPreviewMap: Error during initialization of preview map",
                      e,
                    ),
                  ));
            }),
              Object(l.b)(this.location$$, this.mapInitialized$$)
                .pipe(
                  Object(r.a)(this.focusMapOnRoute$$),
                  Object(r.a)(this.destroy$$),
                )
                .subscribe(([e]) => {
                  e
                    ? this.focusMapOnLocation(e)
                    : this.logger.info(
                        "initPreviewMap: No location to focus on available yet",
                      );
                }));
          }
          focusMapOnLocation(e) {
            (this.changeDetectorRef.markForCheck(),
              this.logger.info("focusMapOnLocation: with location", e),
              e.coordinates
                ? this.elementsService
                    .createSimplePinElement(e.coordinates)
                    .pipe(Object(r.a)(this.destroy$$))
                    .subscribe((e) => {
                      (this.logger.debug(
                        "focusMapOnLocation: MapElement received with Uri: ",
                        e,
                      ),
                        this.renderersService.updateElements({
                          visible: [],
                          focused: [e],
                          marked: [],
                        }));
                    })
                : this.logger.error(
                    "focusMapOnLocation: Location does not have geo coordinates",
                    e,
                  ));
          }
          focusMapOnRoute(e) {
            (this.changeDetectorRef.markForCheck(),
              this.logger.info("focusMapOnRoute: with route", e),
              this.elementsService
                .findMapElement(e.id, d.b.ROUTE)
                .pipe(Object(r.a)(this.destroy$$))
                .subscribe((e) => {
                  (this.logger.debug(
                    "focusMapOnRoute: MapElement received with Uri: ",
                    e,
                  ),
                    this.renderersService.updateElements({
                      visible: [],
                      focused: [e],
                      marked: [],
                    }));
                }));
          }
        }
        return (
          (e.hideImageKey = {
            type: u.Eb.IMAGE,
            category: u.wb.DECORATIVE,
            action: u.ub.HIDE_IMAGE,
          }),
          e
        );
      })();
    },
    oTf4: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return _;
      }),
        n.d(t, "b", function () {
          return O;
        }));
      var i = n("kZht"),
        o = n("Ps6X"),
        a = n("6zvu"),
        l = n("HVUF"),
        s = n("B3Zb"),
        r = n("yNay"),
        c = n("8TlW"),
        u = n("fu7d"),
        d = n("bou3"),
        h = n("Xo58"),
        g = n("m3Ja"),
        b = n("r+e+"),
        p = n("ijxY"),
        f = n("bmFL"),
        _ =
          (n("bbRi"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:block;position:relative;width:1390px;height:120px}.container[_ngcontent-%COMP%]{width:100%;height:100%}.first-line[_ngcontent-%COMP%]{width:100%;padding-top:13px;font-size:40px;display:grid;grid-template-columns:85px calc(100% - 85px);grid-template-rows:calc(1em + 14px);grid-template-areas:"icon text"}.first-line__icon[_ngcontent-%COMP%], .second-line__icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;grid-area:icon;padding:0 30px 0 15px}.first-line__text[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;grid-area:text}.second-line[_ngcontent-%COMP%]{width:100%;padding-top:5px;font-size:30px;display:grid;grid-template-columns:85px calc(100% - 85px);grid-template-rows:calc(1em + 6px);grid-template-areas:"icon rest"}.second-line__rest[_ngcontent-%COMP%]{grid-area:rest;display:flex;flex-direction:row;justify-content:space-between}.rest__text[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;flex:1 1 0}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .first-line__icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .first-line__icon[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .second-line__icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .second-line__icon[_ngcontent-%COMP%]{padding:0 30px 0 15px}.component-layout-latin[_nghost-%COMP%]   .first-line__additional-info[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .first-line__additional-info[_ngcontent-%COMP%]{padding:0 15px 0 30px}.component-layout-latin[_nghost-%COMP%]   .rest__entry-flags[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .rest__entry-flags[_ngcontent-%COMP%]{padding:0 0 0 30px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .first-line__icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .first-line__icon[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .second-line__icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .second-line__icon[_ngcontent-%COMP%]{padding:0 15px 0 30px}.component-layout-arabic[_nghost-%COMP%]   .first-line__additional-info[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .first-line__additional-info[_ngcontent-%COMP%]{padding:0 30px 0 15px}.component-layout-arabic[_nghost-%COMP%]   .rest__entry-flags[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .rest__entry-flags[_ngcontent-%COMP%]{padding:0 30px 0 0}',
              ],
            ],
            data: {},
          }));
      function O(e) {
        return i.ac(
          2,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              16,
              "div",
              [["class", "container"]],
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
              o.a,
              [[2, a.a], [8, null], [3, o.a], i.l, i.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (e()(),
            i.yb(
              2,
              0,
              null,
              null,
              7,
              "div",
              [["class", "first-line"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              3,
              0,
              null,
              null,
              2,
              "div",
              [["class", "first-line__icon"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
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
              l.b,
              l.a,
            )),
            i.xb(
              5,
              4243456,
              null,
              0,
              s.b,
              [r.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (e()(),
            i.yb(
              6,
              0,
              null,
              null,
              3,
              "div",
              [["class", "first-line__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              7,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "AudiCallCenter"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              c.b,
              c.a,
            )),
            i.xb(
              8,
              212992,
              null,
              0,
              u.a,
              [i.l, i.D, d.a, r.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              9,
              245760,
              null,
              0,
              h.a,
              [[6, u.a], g.a, i.h, i.l, i.D, [2, b.a], [2, p.a], [2, f.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (e()(),
            i.yb(
              10,
              0,
              null,
              null,
              6,
              "div",
              [["class", "second-line"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              11,
              0,
              null,
              null,
              0,
              "div",
              [["class", "second-line__icon"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              12,
              0,
              null,
              null,
              4,
              "div",
              [["class", "second-line__rest"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              13,
              0,
              null,
              null,
              3,
              "div",
              [["class", "rest__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              14,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "PoiSearchingService"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              c.b,
              c.a,
            )),
            i.xb(
              15,
              212992,
              null,
              0,
              u.a,
              [i.l, i.D, d.a, r.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              16,
              245760,
              null,
              0,
              h.a,
              [[6, u.a], g.a, i.h, i.l, i.D, [2, b.a], [2, p.a], [2, f.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, n.uiStateType),
              e(t, 5, 0, n.iconFileName, n.iconCategory),
              e(t, 8, 0, "AudiCallCenter"),
              e(t, 9, 0, "Connect to Audi call center", "AudiCallCenter", 1),
              e(t, 15, 0, "PoiSearchingService"),
              e(t, 16, 0, "POI searching service", "PoiSearchingService", 1));
          },
          function (e, t) {
            (e(
              t,
              0,
              0,
              i.Nb(t, 1).uiStateListHorizontal,
              i.Nb(t, 1).uiStateListVertical,
              i.Nb(t, 1).uiStateCoverLeft,
              i.Nb(t, 1).uiStateCoverRight,
              i.Nb(t, 1).uiStateCoverBottom,
              i.Nb(t, 1).uiStateButton,
              i.Nb(t, 1).uiStateByDabLeft,
              i.Nb(t, 1).uiStateByDabRight,
              i.Nb(t, 1).uiStateLbDabLeft,
              i.Nb(t, 1).uiStateLbDabRight,
            ),
              e(t, 4, 0, i.Nb(t, 5).iconComponentHidden),
              e(
                t,
                7,
                0,
                i.Nb(t, 9).backgroundColor,
                i.Nb(t, 9).fixedNumberOfLines,
                i.Nb(t, 9).mayContainLatinCharsForArabic,
                i.Nb(t, 9).shortenWithEllipsisForArabic,
              ),
              e(
                t,
                14,
                0,
                i.Nb(t, 16).backgroundColor,
                i.Nb(t, 16).fixedNumberOfLines,
                i.Nb(t, 16).mayContainLatinCharsForArabic,
                i.Nb(t, 16).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
    },
    qlxH: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var i = n("MddD"),
        o = n("Yi6/"),
        a = n("kGpN"),
        l = n("4C60"),
        s = n("RoxU"),
        r = n("7f94");
      class c {
        constructor(e, t) {
          ((this.addressFormattingService = e),
            (this.displayService = t),
            (this.distanceFormattingRule = a.a.DistanceToDestination),
            (this.sourceUnit = o.vc.METERS),
            (this.ICON_CATEGORY_LIST = o.Z.List),
            (this.uiStateType = o.uc.ListHorizontal),
            (this.entryFlagList = []),
            (this.isGoogleLocation = !1),
            (this.getDistanceValue = r.a),
            (this.getLineNumberIcon = r.b),
            (this.dopiData = void 0),
            (this.lineNumber = void 0),
            (this.isEditModeActive = !1),
            (this._showLineNumber = !1),
            (this.addressLines = []));
        }
        set lastDestination(e) {
          const t = e.location;
          if (
            ((this.addressLines = this.addressFormattingService.getLines(
              2,
              Object(l.a)(t),
            )),
            (this.isGoogleLocation = t.provider === i.j.GOOGLE),
            t.poiInfos && t.poiInfos.length > 0)
          ) {
            const e = t.poiInfos.map((e) =>
              s.a.locationObjectPoiInfosToSearchresultObjectPoiInfos(e),
            );
            this.entryFlagList = e
              .filter((e) => s.a.entryIsAllowed(e))
              .sort((e, t) => s.a.compareEntryFlags(e, t));
          } else this.entryFlagList = [];
        }
        set showLineNumber(e) {
          this._showLineNumber = e && this.displayService.isHighResolution;
        }
        get showLineNumber() {
          return this._showLineNumber;
        }
      }
    },
    yDGg: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      class i {
        constructor() {
          ((this.dopiData = void 0),
            (this.isGoogleLocation = !1),
            (this.entryFlagList = []));
        }
      }
    },
    z9H7: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return ne;
      }),
        n.d(t, "b", function () {
          return pe;
        }));
      var i = n("kZht"),
        o = n("HVUF"),
        a = n("B3Zb"),
        l = n("yNay"),
        s = n("An66"),
        r = n("0qMr"),
        c = n("8TlW"),
        u = n("fu7d"),
        d = n("bou3"),
        h = n("ijxY"),
        g = n("Xo58"),
        b = n("m3Ja"),
        p = n("r+e+"),
        f = n("bmFL"),
        _ = n("bMuc"),
        O = n("ZIdM"),
        m = n("3bpu"),
        v = n("OtM5"),
        C = n("9ZFG"),
        y = n("6zvu"),
        M = n("VcEz"),
        P = n("y9xZ"),
        S = n("+sw+"),
        x = n("BMrr"),
        w = n("IEns"),
        L = n("z6QT"),
        $ = n("flsk"),
        I = n("FQEI"),
        N = n("O82V"),
        A = n("Eln4"),
        T = n("evAh"),
        j = n("CpzC"),
        E = n("0Bsn"),
        D = n("5GjX"),
        R = n("mYyF"),
        k = n("v98a"),
        F = n("aOG8"),
        z = n("Krzs"),
        B = n("3EdB"),
        H = n("eoEw"),
        V = n("SOvQ"),
        W = n("VKfg"),
        Y = n("EkEa"),
        G = n("oPv+"),
        U = n("qHCr"),
        Z = n("QlDL"),
        q = n("I5OF"),
        Q = n("E7cc"),
        X = n("oeT7"),
        K = n("DElP"),
        J = n("l2s7"),
        ee = n("SFb6"),
        te = n("Tyvc"),
        ne =
          (n("oDzz"),
          n("dxLW"),
          n("tYr6"),
          n("nTAn"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@keyframes map-fade-in{0%{opacity:0}50%{opacity:0}to{opacity:1}}[_nghost-%COMP%]{position:relative;display:flex}.notification[_ngcontent-%COMP%]{text-align:center;margin:auto;max-width:100%}.details-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;height:100%}.provider-logo[_ngcontent-%COMP%]{position:absolute;top:-6px;left:0;display:block;height:40px;max-height:40px}.details-wrapper__location[_ngcontent-%COMP%]{margin-top:24px;flex:1 1 0;display:flex;flex-direction:column;justify-content:space-between;margin-right:auto;overflow:hidden}.details-wrapper__favorite-button[_ngcontent-%COMP%]{width:119px;height:143px}.details-wrapper__map[_ngcontent-%COMP%]{margin-top:24px;width:360px;height:300px;animation:map-fade-in 2s linear}.details-wrapper__location-upper[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%}.details-wrapper__address-container[_ngcontent-%COMP%]{width:calc(100% - 119px);display:flex;justify-content:space-between;flex-grow:1;min-height:170px;align-items:flex-start}.details-wrapper__address[_ngcontent-%COMP%]{max-width:100%}.details-wrapper__address-line[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:100%}.details-wrapper__address-line--prio1[_ngcontent-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:40px}.details-wrapper__address-line--auto-wrap[_ngcontent-%COMP%]{overflow-wrap:break-word;white-space:pre-wrap;line-height:49.2px;max-height:98.4px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.details-wrapper__address-line--prio2[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:30px;margin-top:5px}.details-wrapper__location-lower[_ngcontent-%COMP%]{display:flex;height:50px;margin-right:119px;min-height:50px}.details-wrapper__eta[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;justify-content:flex-start}.details-wrapper__eta-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:0 15px 0 0}.details-wrapper__eta-text[_ngcontent-%COMP%]{font-size:30px;display:flex;justify-content:flex-start;align-items:baseline}.details-wrapper__delay[_ngcontent-%COMP%], .details-wrapper__toll-amount[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;justify-content:flex-start}.details-wrapper__delay-icon[_ngcontent-%COMP%], .details-wrapper__toll-amount-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:0 15px 0 0}.details-wrapper__delay-text[_ngcontent-%COMP%], .details-wrapper__toll-amount-text[_ngcontent-%COMP%]{font-size:30px;display:flex;justify-content:flex-start;align-items:baseline}.details-wrapper__delay-text[_ngcontent-%COMP%]     .content__item{height:unset}.details-wrapper__eta-separator[_ngcontent-%COMP%]{padding:0 15px}.weather-content[_ngcontent-%COMP%]{display:block;min-height:40px;height:100%;overflow:hidden;flex:1 1 0}.dopi-wrapper[_ngcontent-%COMP%]{display:block;min-height:80px;height:80px;margin-right:30px}.dopi-content[_ngcontent-%COMP%]{display:block}.air-quality__wrapper[_ngcontent-%COMP%], .dopi-content[_ngcontent-%COMP%]{height:100%;overflow:hidden;flex:1 1 0}.air-quality__wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:30px;margin:0 30px}.air-quality__icon[_ngcontent-%COMP%]{padding:0 15px 0 0}.component-layout-arabic[_nghost-%COMP%]   .details-wrapper__location[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .details-wrapper__location[_ngcontent-%COMP%]{margin-left:auto;margin-right:0}.component-layout-arabic[_nghost-%COMP%]   .details-wrapper__delay-icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .details-wrapper__delay-icon[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .details-wrapper__eta-icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .details-wrapper__eta-icon[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .details-wrapper__toll-amount-icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .details-wrapper__toll-amount-icon[_ngcontent-%COMP%]{padding:0 0 0 15px}.component-layout-arabic[_nghost-%COMP%]   .details-wrapper__address-container[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .details-wrapper__address-container[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .details-wrapper__delay[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .details-wrapper__delay[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .details-wrapper__delay-text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .details-wrapper__delay-text[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .details-wrapper__eta[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .details-wrapper__eta[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .details-wrapper__eta-text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .details-wrapper__eta-text[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .details-wrapper__location-lower[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .details-wrapper__location-lower[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .details-wrapper__toll-amount[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .details-wrapper__toll-amount[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .details-wrapper__toll-amount-text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .details-wrapper__toll-amount-text[_ngcontent-%COMP%]{flex-direction:row-reverse}.component-layout-arabic[_nghost-%COMP%]   .details-wrapper__delay[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .details-wrapper__delay[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .details-wrapper__toll-amount[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .details-wrapper__toll-amount[_ngcontent-%COMP%]{margin-right:30px}.component-layout-arabic[_nghost-%COMP%]   .details-wrapper__address[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .details-wrapper__address[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .details-wrapper__delay-text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .details-wrapper__delay-text[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .details-wrapper__eta-text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .details-wrapper__eta-text[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .details-wrapper__toll-amount-text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .details-wrapper__toll-amount-text[_ngcontent-%COMP%]{text-align:right}.component-layout-arabic[_nghost-%COMP%]   .details-wrapper__map[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .details-wrapper__map[_ngcontent-%COMP%]{margin-left:0}.component-layout-latin[_nghost-%COMP%]   .details-wrapper__location[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .details-wrapper__location[_ngcontent-%COMP%]{margin-right:auto;margin-left:0}.component-layout-latin[_nghost-%COMP%]   .details-wrapper__delay-icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .details-wrapper__delay-icon[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .details-wrapper__eta-icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .details-wrapper__eta-icon[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .details-wrapper__toll-amount-icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .details-wrapper__toll-amount-icon[_ngcontent-%COMP%]{padding:0 15px 0 0}.component-layout-latin[_nghost-%COMP%]   .details-wrapper[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .details-wrapper[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .details-wrapper__address-container[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .details-wrapper__address-container[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .details-wrapper__delay[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .details-wrapper__delay[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .details-wrapper__delay-text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .details-wrapper__delay-text[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .details-wrapper__eta[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .details-wrapper__eta[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .details-wrapper__eta-text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .details-wrapper__eta-text[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .details-wrapper__location-lower[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .details-wrapper__location-lower[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .details-wrapper__toll-amount[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .details-wrapper__toll-amount[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .details-wrapper__toll-amount-text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .details-wrapper__toll-amount-text[_ngcontent-%COMP%]{flex-direction:row}.component-layout-latin[_nghost-%COMP%]   .details-wrapper__delay[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .details-wrapper__delay[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .details-wrapper__toll-amount[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .details-wrapper__toll-amount[_ngcontent-%COMP%]{margin-left:30px}.component-layout-latin[_nghost-%COMP%]   .details-wrapper__address[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .details-wrapper__address[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .details-wrapper__delay-text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .details-wrapper__delay-text[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .details-wrapper__eta-text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .details-wrapper__eta-text[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .details-wrapper__toll-amount-text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .details-wrapper__toll-amount-text[_ngcontent-%COMP%]{text-align:left}.component-layout-latin[_nghost-%COMP%]   .details-wrapper__map[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .details-wrapper__map[_ngcontent-%COMP%]{margin-right:0}',
              ],
            ],
            data: {},
          }));
      function ie(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [],
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
          function (e, t) {
            e(
              t,
              1,
              0,
              t.parent.context.mib3Let,
              t.component.ICON_CATEGORY_STATUSLINE,
            );
          },
          function (e, t) {
            e(t, 0, 0, i.Nb(t, 1).iconComponentHidden);
          },
        );
      }
      function oe(e) {
        return i.ac(
          0,
          [
            (e()(),
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
            (e()(), i.hb(16777216, null, null, 1, null, ie)),
            i.xb(
              2,
              16384,
              null,
              0,
              s.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), i.hb(0, null, null, 0)),
          ],
          function (e, t) {
            e(t, 2, 0, !!t.context.mib3Let);
          },
          null,
        );
      }
      function ae(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "provider-logo"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.hb(16777216, null, null, 2, null, oe)),
            i.xb(
              2,
              16384,
              null,
              0,
              r.a,
              [i.L, i.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            i.Pb(131072, s.b, [i.h]),
          ],
          function (e, t) {
            var n = t.component;
            e(
              t,
              2,
              0,
              i.Yb(t, 2, 0, i.Nb(t, 3).transform(n.providerFileName$)),
            );
          },
          null,
        );
      }
      function le(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "details-wrapper__address-line"],
                ["ttIgnore", ""],
              ],
              [
                [2, "details-wrapper__address-line--prio1", null],
                [2, "details-wrapper__address-line--auto-wrap", null],
                [2, "details-wrapper__address-line--prio2", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              c.b,
              c.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [i.l, i.D, d.a, l.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(2, 16384, null, 0, h.a, [], null, null),
            i.xb(
              3,
              245760,
              null,
              0,
              g.a,
              [[6, u.a], b.a, i.h, i.l, i.D, [2, p.a], [2, h.a], [2, f.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (e, t) {
            (e(t, 1, 0, "AddressLine_" + (1 + t.context.index)),
              e(
                t,
                3,
                0,
                "AddressLine_" + (1 + t.context.index),
                t.context.$implicit,
              ));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              0 == t.context.index,
              0 == t.context.index && t.component.isPOI,
              t.context.index > 0,
              i.Nb(t, 3).backgroundColor,
              i.Nb(t, 3).fixedNumberOfLines,
              i.Nb(t, 3).mayContainLatinCharsForArabic,
              i.Nb(t, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function se(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-icon",
              [["class", "details-wrapper__favorite-button"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "icon-component--hidden", null],
              ],
              [[null, "mib3Tap"]],
              function (e, t, n) {
                var i = !0;
                return (
                  "mib3Tap" === t &&
                    (i = !1 !== e.component.toggleFavorite.emit() && i),
                  i
                );
              },
              o.b,
              o.a,
            )),
            i.xb(1, 147456, null, 0, _.a, [i.l, i.z], null, null),
            i.xb(
              2,
              147456,
              null,
              0,
              O.a,
              [_.a, [2, m.a], [2, u.a], l.a],
              null,
              null,
            ),
            i.xb(
              3,
              147456,
              null,
              0,
              v.a,
              [C.a, i.h, l.a, [3, v.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            i.xb(
              4,
              212992,
              null,
              0,
              y.a,
              [
                l.a,
                M.b,
                O.a,
                [2, m.a],
                [2, u.a],
                [2, v.a],
                [2, P.a],
                [2, S.a],
                i.z,
                x.a,
                i.l,
                [2, w.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.Sb(131584, null, L.a, L.a, [[3, L.a]]),
            i.xb(
              6,
              4407296,
              null,
              0,
              $.a,
              [
                i.l,
                I.a,
                i.h,
                L.a,
                [2, N.a],
                [2, m.b],
                [2, m.a],
                [2, A.a],
                [2, T.a],
              ],
              null,
              null,
            ),
            i.xb(
              7,
              4243456,
              null,
              0,
              a.b,
              [l.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            i.xb(
              8,
              147456,
              null,
              0,
              j.a,
              [[2, y.a], [2, v.a], [2, E.a], [2, $.a], [2, D.b], i.l, R.a, k.b],
              null,
              null,
            ),
            i.xb(
              9,
              147456,
              null,
              0,
              F.a,
              [[2, $.a], [2, y.a], [2, M.b], z.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 3, 0, !n.hasLocation),
              e(t, 4, 0),
              e(t, 6, 0),
              e(
                t,
                7,
                0,
                n.isLocationFavorite
                  ? "E29E_radio_Favorit.webp"
                  : "E0FC_radio_Favorit.webp",
                n.favIconCategory,
              ));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              i.Nb(t, 3).combinedDisabled,
              i.Nb(t, 3).useBrighterIcon,
              i.Nb(t, 6).markerClassEnabled,
              i.Nb(t, 7).iconComponentHidden,
            );
          },
        );
      }
      function re(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              0,
              "div",
              [["class", "dopi-content"]],
              [[8, "innerHTML", 1]],
              null,
              null,
              null,
              null,
            )),
          ],
          null,
          function (e, t) {
            e(t, 0, 0, t.component.dopiContent);
          },
        );
      }
      function ce(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              12,
              "div",
              [["class", "details-wrapper__eta"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              1,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "details-wrapper__eta-icon"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              o.b,
              o.a,
            )),
            i.xb(
              2,
              4243456,
              null,
              0,
              a.b,
              [l.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (e()(),
            i.yb(
              3,
              0,
              null,
              null,
              9,
              "div",
              [["class", "details-wrapper__eta-text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              4,
              0,
              null,
              null,
              2,
              "div",
              [["class", "details-wrapper__eta-distance"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              5,
              0,
              null,
              null,
              1,
              "au3-formatted-unit-renderer",
              [],
              [[2, "invisible", null]],
              null,
              null,
              B.b,
              B.a,
            )),
            i.xb(
              6,
              180224,
              null,
              0,
              H.b,
              [b.a, V.a, i.h],
              {
                rawValue: [0, "rawValue"],
                rawValueUnit: [1, "rawValueUnit"],
                rawValueFormattingRule: [2, "rawValueFormattingRule"],
              },
              null,
            ),
            (e()(),
            i.yb(
              7,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "details-wrapper__eta-separator"],
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
              c.b,
              c.a,
            )),
            i.xb(
              8,
              212992,
              null,
              0,
              u.a,
              [i.l, i.D, d.a, l.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(9, 16384, null, 0, h.a, [], null, null),
            i.xb(
              10,
              245760,
              null,
              0,
              g.a,
              [[6, u.a], b.a, i.h, i.l, i.D, [2, p.a], [2, h.a], [2, f.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            (e()(),
            i.yb(
              11,
              0,
              null,
              null,
              1,
              "au3-time-display",
              [["class", "details-wrapper__eta-time"]],
              null,
              null,
              null,
              W.b,
              W.a,
            )),
            i.xb(
              12,
              49152,
              null,
              0,
              Y.a,
              [G.a],
              { time: [0, "time"], defaultText: [1, "defaultText"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 2, 0, n.distanceEtaIconFilename, n.distanceEtaIconCategory),
              e(
                t,
                6,
                0,
                n.realRoadDistance,
                n.sourceUnit,
                n.distanceFormattingRule,
              ),
              e(t, 8, 0, "EtaSeparator"),
              e(t, 10, 0, "EtaSeparator", n.distanceEtaSeparator),
              e(
                t,
                12,
                0,
                n.eta && !n.hasRoadBlock ? n.eta : void 0,
                n.etaDefaultText,
              ));
          },
          function (e, t) {
            (e(t, 1, 0, i.Nb(t, 2).iconComponentHidden),
              e(t, 5, 0, i.Nb(t, 6).isInvisible),
              e(
                t,
                7,
                0,
                i.Nb(t, 10).backgroundColor,
                i.Nb(t, 10).fixedNumberOfLines,
                i.Nb(t, 10).mayContainLatinCharsForArabic,
                i.Nb(t, 10).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function ue(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              5,
              "div",
              [["class", "details-wrapper__delay"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              1,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "details-wrapper__delay-icon"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              o.b,
              o.a,
            )),
            i.xb(
              2,
              4243456,
              null,
              0,
              a.b,
              [l.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (e()(),
            i.yb(
              3,
              0,
              null,
              null,
              2,
              "div",
              [["class", "details-wrapper__delay-text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              4,
              0,
              null,
              null,
              1,
              "au3-formatted-unit-renderer",
              [],
              [[2, "invisible", null]],
              null,
              null,
              B.b,
              B.a,
            )),
            i.xb(
              5,
              180224,
              null,
              0,
              H.b,
              [b.a, V.a, i.h],
              {
                rawValue: [0, "rawValue"],
                rawValueUnit: [1, "rawValueUnit"],
                rawValueFormattingRule: [2, "rawValueFormattingRule"],
              },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 2, 0, n.trafficDelayIconFilename, n.trafficDelayIconCategory),
              e(t, 5, 0, n.trafficDelay, n.timeUnit, n.timeFormattingRule));
          },
          function (e, t) {
            (e(t, 1, 0, i.Nb(t, 2).iconComponentHidden),
              e(t, 4, 0, i.Nb(t, 5).isInvisible));
          },
        );
      }
      function de(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              8,
              "div",
              [["class", "details-wrapper__toll-amount"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              1,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "details-wrapper__toll-amount-icon"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              o.b,
              o.a,
            )),
            i.xb(
              2,
              4243456,
              null,
              0,
              a.b,
              [l.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (e()(),
            i.yb(
              3,
              0,
              null,
              null,
              5,
              "div",
              [["class", "details-wrapper__toll-amount-text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              4,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [["ttIgnore", ""]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              c.b,
              c.a,
            )),
            i.xb(
              5,
              212992,
              null,
              0,
              u.a,
              [i.l, i.D, d.a, l.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(6, 16384, null, 0, h.a, [], null, null),
            i.xb(
              7,
              245760,
              null,
              0,
              g.a,
              [[6, u.a], b.a, i.h, i.l, i.D, [2, p.a], [2, h.a], [2, f.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            i.Rb(8, 1),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 2, 0, n.tollAmountIconFilename, n.tollAmountIconCategory),
              e(t, 5, 0, "TollAmount"));
            var o = i.Yb(t, 7, 1, e(t, 8, 0, i.Nb(t.parent, 1), n.tollAmount));
            e(t, 7, 0, "TollAmount", o);
          },
          function (e, t) {
            (e(t, 1, 0, i.Nb(t, 2).iconComponentHidden),
              e(
                t,
                4,
                0,
                i.Nb(t, 7).backgroundColor,
                i.Nb(t, 7).fixedNumberOfLines,
                i.Nb(t, 7).mayContainLatinCharsForArabic,
                i.Nb(t, 7).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function he(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              0,
              "div",
              [["class", "weather-content"]],
              [[8, "innerHTML", 1]],
              null,
              null,
              null,
              null,
            )),
          ],
          null,
          function (e, t) {
            e(t, 0, 0, t.component.dopiWeatherContent);
          },
        );
      }
      function ge(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              5,
              "div",
              [["class", "air-quality__wrapper"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              1,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "air-quality__icon"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              o.b,
              o.a,
            )),
            i.xb(
              2,
              4243456,
              null,
              0,
              a.b,
              [l.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (e()(),
            i.yb(
              3,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["ttIgnore", ""]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              c.b,
              c.a,
            )),
            i.xb(4, 16384, null, 0, h.a, [], null, null),
            i.xb(
              5,
              245760,
              null,
              0,
              g.a,
              [[8, null], b.a, i.h, i.l, i.D, [2, p.a], [2, h.a], [2, f.a]],
              { nonI18nValue: [0, "nonI18nValue"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 2, 0, n.airQualityIcon, n.ICON_CATEGORY_LIST),
              e(t, 5, 0, "" + n.dopiAirQualityIndex));
          },
          function (e, t) {
            (e(t, 1, 0, i.Nb(t, 2).iconComponentHidden),
              e(
                t,
                3,
                0,
                i.Nb(t, 5).backgroundColor,
                i.Nb(t, 5).fixedNumberOfLines,
                i.Nb(t, 5).mayContainLatinCharsForArabic,
                i.Nb(t, 5).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function be(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-shared-texture",
              [
                ["au3ImageLockingCategory", ""],
                ["class", "details-wrapper__map"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "lock-state-hidden", null],
                [2, "lock-state-faded", null],
              ],
              [[null, "mib3Tap"]],
              function (e, t, n) {
                var i = !0;
                return (
                  "mib3Tap" === t &&
                    (i = !1 !== e.component.previewMapClicked.emit() && i),
                  i
                );
              },
              U.b,
              U.a,
            )),
            i.xb(1, 147456, null, 0, _.a, [i.l, i.z], null, null),
            i.xb(
              2,
              147456,
              null,
              0,
              O.a,
              [_.a, [2, m.a], [2, u.a], l.a],
              null,
              null,
            ),
            i.xb(
              3,
              147456,
              null,
              0,
              v.a,
              [C.a, i.h, l.a, [3, v.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            i.xb(
              4,
              212992,
              null,
              0,
              y.a,
              [
                l.a,
                M.b,
                O.a,
                [2, m.a],
                [2, u.a],
                [2, v.a],
                [2, P.a],
                [2, S.a],
                i.z,
                x.a,
                i.l,
                [2, w.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.Sb(131584, null, L.a, L.a, [[3, L.a]]),
            i.xb(
              6,
              4407296,
              null,
              0,
              $.a,
              [
                i.l,
                I.a,
                i.h,
                L.a,
                [2, N.a],
                [2, m.b],
                [2, m.a],
                [2, A.a],
                [2, T.a],
              ],
              { disabled: [0, "disabled"] },
              null,
            ),
            i.xb(
              7,
              114688,
              null,
              0,
              Z.a,
              [q.a, S.a, l.a],
              {
                framerate: [0, "framerate"],
                displayableName: [1, "displayableName"],
                textureOffset: [2, "textureOffset"],
              },
              null,
            ),
            i.xb(
              8,
              671744,
              null,
              0,
              Q.a,
              [v.a, X.i, [2, X.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            i.xb(9, 212992, null, 0, K.a, [X.i, [2, X.a], i.h], null, null),
            i.xb(
              10,
              147456,
              null,
              0,
              j.a,
              [[2, y.a], [2, v.a], [2, E.a], [2, $.a], [2, D.b], i.l, R.a, k.b],
              null,
              null,
            ),
            i.xb(
              11,
              147456,
              null,
              0,
              F.a,
              [[2, $.a], [2, y.a], [2, M.b], z.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 3, 0, !n.hasLocation),
              e(t, 4, 0),
              e(t, 6, 0, n.disablePreviewMapHaptic),
              e(t, 7, 0, 15, n.displayableName, n.mapTextureOffset),
              e(t, 8, 0, n.blockingMap),
              e(t, 9, 0));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              i.Nb(t, 3).combinedDisabled,
              i.Nb(t, 3).useBrighterIcon,
              i.Nb(t, 6).markerClassEnabled,
              i.Nb(t, 9).hide,
              i.Nb(t, 9).fade,
            );
          },
        );
      }
      function pe(e) {
        return i.ac(
          2,
          [
            i.Pb(0, J.a, [ee.a]),
            i.Pb(0, te.a, [l.a]),
            (e()(),
            i.yb(
              2,
              0,
              null,
              null,
              27,
              "div",
              [["class", "details-wrapper"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              3,
              0,
              null,
              null,
              24,
              "div",
              [["class", "details-wrapper__location"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.hb(16777216, null, null, 1, null, ae)),
            i.xb(
              5,
              16384,
              null,
              0,
              s.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            i.yb(
              6,
              0,
              null,
              null,
              7,
              "div",
              [["class", "details-wrapper__location-upper"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              7,
              0,
              null,
              null,
              4,
              "div",
              [["class", "details-wrapper__address-container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              8,
              0,
              null,
              null,
              3,
              "div",
              [["class", "details-wrapper__address"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.hb(16777216, null, null, 2, null, le)),
            i.xb(
              10,
              278528,
              null,
              0,
              s.j,
              [i.P, i.L, i.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
            i.Rb(11, 2),
            (e()(), i.hb(16777216, null, null, 1, null, se)),
            i.xb(
              13,
              16384,
              null,
              0,
              s.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            i.yb(
              14,
              0,
              null,
              null,
              2,
              "div",
              [["class", "dopi-wrapper"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.hb(16777216, null, null, 1, null, re)),
            i.xb(
              16,
              16384,
              null,
              0,
              s.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            i.yb(
              17,
              0,
              null,
              null,
              10,
              "div",
              [["class", "details-wrapper__location-lower"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.hb(16777216, null, null, 1, null, ce)),
            i.xb(
              19,
              16384,
              null,
              0,
              s.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), i.hb(16777216, null, null, 1, null, ue)),
            i.xb(
              21,
              16384,
              null,
              0,
              s.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), i.hb(16777216, null, null, 1, null, de)),
            i.xb(
              23,
              16384,
              null,
              0,
              s.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), i.hb(16777216, null, null, 1, null, he)),
            i.xb(
              25,
              16384,
              null,
              0,
              s.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), i.hb(16777216, null, null, 1, null, ge)),
            i.xb(
              27,
              16384,
              null,
              0,
              s.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), i.hb(16777216, null, null, 1, null, be)),
            i.xb(
              29,
              16384,
              null,
              0,
              s.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            e(t, 5, 0, n.hasProviderLogo);
            var o = i.Yb(t, 10, 0, e(t, 11, 0, i.Nb(t, 0), n.address, 3));
            (e(t, 10, 0, o),
              e(t, 13, 0, n.hasFavoriteStar),
              e(t, 16, 0, !!n.dopiContent),
              e(t, 19, 0, n.showRouteDetails),
              e(
                t,
                21,
                0,
                !!n.trafficDelay &&
                  n.trafficDelay > n.displayTrafficDelayThreshold &&
                  !n.hasRoadBlock,
              ),
              e(
                t,
                23,
                0,
                !!n.tollAmount && n.systemConficService.isAsiaRegion(),
              ),
              e(t, 25, 0, !!n.dopiWeatherContent),
              e(
                t,
                27,
                0,
                null != n.dopiAirQualityIndex &&
                  n.systemConficService.isChinaRegion() &&
                  !n.systemConficService.isHongKongSaleCountry() &&
                  !n.systemConficService.isMacaoSaleCountry(),
              ),
              e(t, 29, 0, n.showPreviewMap));
          },
          null,
        );
      }
    },
  },
]);
