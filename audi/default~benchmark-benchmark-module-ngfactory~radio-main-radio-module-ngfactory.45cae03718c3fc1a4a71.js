(window.webpackJsonp = window.webpackJsonp || []).push([
  [46],
  {
    "+w9M": function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return c;
      }),
        i("VVzb"));
      var s = i("YtkY"),
        n = i("kuMc"),
        a = i("D6Ca"),
        o = i("QQZH"),
        r = i("Yi6/");
      i("YEwm");
      class c {
        constructor(t, e, i) {
          ((this.podcastFavService = t),
            (this.radioRouter = e),
            (this.popupManager = i),
            (this.podcastListType = a.p.ONLINE),
            (this.destroy$$ = new o.a(1)));
        }
        ngOnInit() {
          this.stations$ = this.podcastFavService.podcastFavorites$.pipe(
            Object(s.a)((t) => (t && t.data ? t.data : [])),
            Object(s.a)((t) =>
              t.map((t) => ({
                id: t.id,
                topLine: t.fullDisplayName,
                topIconUrl: "",
                bottomIconUrl: "",
              })),
            ),
            Object(n.a)(this.destroy$$),
          );
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        itemMoved(t) {
          this.podcastFavService
            .moveFavoriteStation(t.entryId, t.destinationIndex)
            .subscribe();
        }
        delete(t) {
          this.podcastFavService.deleteFavorites(t).subscribe(() => {
            this.popupManager.request(r.Ob.POPUP_RADIO_OPT_POPUP_DEL_POD_FAV);
          });
        }
        deleteAll(t) {
          this.podcastFavService.deleteFavorites(t).subscribe(() => {
            (this.back(),
              this.popupManager.request(
                r.Ob.POPUP_RADIO_OPT_POPUP_DEL_POD_FAV,
              ));
          });
        }
        back() {
          this.radioRouter.goBack();
        }
      }
    },
    "04GT": function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return a;
      }),
        i("VVzb"),
        i("YAYS"));
      var s = i("YEwm"),
        n = i("D6Ca");
      class a {
        constructor(t, e, i) {
          ((this.podcastFavService = t),
            (this.browserService = e),
            (this.radioRouting = i),
            (this.listTypeEnum = n.p));
        }
        browseTo(t) {
          this.browserService.browseInto(t).then(() => {
            this.radioRouting.goToOnlineBrowser(!1);
          });
        }
        editClicked() {
          this.radioRouting.goTo(
            s.b.OnlineBrowser.children.PodcastFavoritesEditList,
          );
        }
        backClicked() {
          this.radioRouting.goBack();
        }
      }
    },
    "14s4": function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return s;
      }),
        i("YEwm"),
        i("FNcX"));
      class s {
        constructor(t, e) {
          ((this.routingService = t), (this.tunerService = e));
        }
      }
    },
    "16cj": function (t, e, i) {
      "use strict";
      (i.d(e, "b", function () {
        return s;
      }),
        i.d(e, "a", function () {
          return n;
        }));
      var s = (function (t) {
          return (
            (t.UNIFIED = "UNIFIED"),
            (t.FM = "FM"),
            (t.AM = "AM"),
            (t.SDARS = "SiriusXM"),
            (t.FAVORITES = "FAVORITES"),
            (t.LAST_STATIONS = "LAST_STATIONS"),
            (t.ONLINE = "ONLINE"),
            (t.SEARCH = "SEARCH"),
            (t.TI = "TI"),
            t
          );
        })({}),
        n = (function (t) {
          return (
            (t.SEARCH = "SEARCH"),
            (t.LAST_PLAYED = "LAST_PLAYED"),
            (t.COUNTRIES = "COUNTRIES"),
            (t.GENRES = "GENRES"),
            (t.LANGUAGES = "LANGUAGES"),
            (t.PODCASTS = "PODCASTS"),
            (t.TOP_STATIONS = "TOP_STATIONS"),
            (t.THEME = "THEME"),
            (t.STATIONSBYAREA = "STATIONS_BY_AREA"),
            t
          );
        })({});
    },
    "2TRt": function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return h;
      });
      var s = i("kZht"),
        n = i("Yi6/"),
        a = i("QQZH"),
        o = i("YtkY"),
        r = i("jIqt"),
        c = i("kuMc"),
        l = (i("VVzb"), i("YEwm"));
      class h {
        constructor(t, e, i, l, h) {
          ((this.podcastFavService = t),
            (this.popupService = e),
            (this.cdRef = i),
            (this.radioRouting = l),
            (this.tileClicked = new s.n()),
            (this.iconCategoryEnum = n.Z),
            (this.indicatorModeEnum = n.cb),
            (this.leftButtonDisabled = !0),
            (this.rightButtonDisabled = !0),
            (this.radioOnlineEntries = new Array()),
            (this.destroy$$ = new a.a(1)),
            (this.timer = null),
            (this.logger = h.getLogger(
              "radio.OnlinePodcastFavoritesComponent",
            )),
            this.podcastFavService.podcastFavorites$
              .pipe(
                Object(o.a)((t) => (t && t.data ? t.data : [])),
                Object(r.a)([]),
                Object(n.Kd)(),
                Object(c.a)(this.destroy$$),
              )
              .subscribe((t) => {
                ((this.radioOnlineEntries = Array.from(t)),
                  this.cdRef.markForCheck());
              }));
        }
        ngAfterViewInit() {
          this.timer ||
            (this.timer = setTimeout(() => {
              this.checkButtonStates();
            }, 300));
        }
        ngOnDestroy() {
          (this.timer && (clearTimeout(this.timer), (this.timer = null)),
            this.destroy$$.next());
        }
        leftClicked() {
          (this.logger.info("leftClicked"),
            this.tileGridComponent.previousPage());
        }
        rightClicked() {
          (this.logger.info("rightClicked"), this.tileGridComponent.nextPage());
        }
        checkButtonStates() {
          this.tileGridComponent &&
            ((this.radioOnlineEntries = Array.from(this.radioOnlineEntries)),
            (this.rightButtonDisabled =
              this.tileGridComponent.pages.length - 1 ===
              this.tileGridComponent.activePage),
            (this.leftButtonDisabled = 0 === this.tileGridComponent.activePage),
            this.logger.info("checkButtonStates: ", {
              leftButtonState: this.leftButtonDisabled,
              rightButtonState: this.rightButtonDisabled,
            }),
            this.cdRef.detectChanges());
        }
        podcastTitleLineClicked() {
          (this.logger.info("podcastTitleLineClicked"),
            this.radioOnlineEntries && 0 !== this.radioOnlineEntries.length
              ? this.radioRouting.goTo(
                  l.b.OnlineBrowser.children.PodcastFavoritesList,
                )
              : (this.logger.info("podcastTitleLineClicked show empty popup"),
                this.popupService.request(
                  n.Ob.POPUP_RADIO_POPUP_ONL_POD_FAV_EMPTY,
                )));
        }
      }
    },
    "2rQW": function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return a;
      }),
        i("IvGl"));
      var s = i("Yi6/"),
        n = i("D6Ca");
      class a {
        constructor() {
          ((this.IconCategoryList = s.Z.List),
            (this.LiveGameTypeGameStateEnum = n.q));
        }
      }
    },
    "4cnM": function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return l;
      }),
        i("cCDc"));
      var s = i("D6Ca"),
        n = i("YEwm"),
        a = i("Yi6/"),
        o = i("YtkY"),
        r = i("kuMc"),
        c = i("QQZH");
      class l {
        constructor(t, e, i, n) {
          ((this.favoritesService = t),
            (this.radioRouter = e),
            (this.globalRoutingService = i),
            (this.popupManager = n),
            (this.favoriteListType = s.p.FAVORITES),
            (this.destroy$$ = new c.a(1)),
            (this.stations$ = this.favoritesService.favoritesStationList$.pipe(
              Object(o.a)((t) => (t && t.data ? t.data : [])),
              Object(r.a)(this.destroy$$),
            )));
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        itemMoved(t) {
          this.favoritesService
            .moveFavoriteStation(t.entryId, t.destinationIndex)
            .pipe(Object(r.a)(this.destroy$$))
            .subscribe();
        }
        delete(t) {
          this.favoritesService.deleteFavoriteStations(t).subscribe(() => {
            this.popupManager.request(
              a.Ob.POPUP_RADIO_OPT_POPUP_DEL_STATION_FAV,
            );
          });
        }
        deleteAll(t) {
          this.favoritesService.deleteFavoriteStations(t).subscribe(() => {
            (this.globalRoutingService.currentAppRouteSnapshot &&
              this.globalRoutingService.currentAppRouteSnapshot.path ===
                n.b.FavoritesEditList.path &&
              this.radioRouter.goBack(),
              this.popupManager.request(
                a.Ob.POPUP_RADIO_OPT_POPUP_DEL_STATION_FAV,
              ));
          });
        }
      }
    },
    "5FY1": function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return r;
      });
      var s = i("D6Ca"),
        n = i("Yi6/"),
        a = i("YtkY"),
        o =
          (i("oPv+"),
          (function (t) {
            return (
              (t.CHANNEL = "channelLayout"),
              (t.LIVE_SPORTS = "sportLayout"),
              (t.SHOW = "showLayout"),
              (t.EPISODE = "episodeLayout"),
              t
            );
          })({}));
      class r {
        constructor(t) {
          ((this.generalSettingsService = t),
            (this.listRowLayout = o),
            (this.imageScaleMode = n.ab.Contain),
            (this.teamIconScaleMode = n.ab.ScaleDown),
            (this.iconCategoryCover = n.Z.ListTwoline),
            (this.iconCategoryBand = n.Z.List),
            (this.sourceUnit = n.vc.SECONDS));
        }
        ngOnInit() {
          this.dateFormat$ = this.generalSettingsService.dateFormat$.pipe(
            Object(a.a)((t) => "ddd, ".concat(t.activeDateFormatDisplayable)),
          );
        }
        get itemLayout() {
          switch (!!this.sxmEntry && this.sxmEntry.type) {
            case s.s.STATION:
              return o.CHANNEL;
            case s.s.SHOW:
              return o.SHOW;
            case s.s.EPISODE:
              return o.EPISODE;
            case s.s.LIVEGAME:
              return o.LIVE_SPORTS;
            default:
              return o.CHANNEL;
          }
        }
      }
    },
    "69MW": function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return c;
      });
      var s = i("kZht"),
        n = i("YEwm"),
        a = i("D6Ca"),
        o = i("Yi6/"),
        r = i("TBvk");
      class c {
        constructor(t) {
          ((this.radioRoutingService = t),
            (this.RadioRoute = n.b),
            (this.LinkToShopEntrypointTags = r.b),
            (this.isSourceSelection = !1),
            (this.listType = null),
            (this.seconderyTitleIdEnumType = null),
            (this.secondaryNonI18nTitle = void 0),
            (this.secondaryDeveloperTitle = ""),
            (this.hasSecondaryTitle = !1),
            (this.hasBackButton = !1),
            (this.hasBrowserButton = !1),
            (this.hasSourceButton = !1),
            (this.hasSettingsButton = !1),
            (this.hasNpsShortcutButton = !1),
            (this.hasEditButton = !1),
            (this.hasFilterButton = !1),
            (this.isEditButtonDisabled = !1),
            (this.backClickedEvent = new s.n()),
            (this.editClickedEvent = new s.n()),
            (this.filterClickedEvent = new s.n()),
            (this.npsClickedEvent = new s.n()),
            (this.popupIdEditEmpty = o.Ob.POPUP_RADIO_POPUP_LIST_EMPTY),
            (this.environment = o.gd),
            (this.editButtonLockingParam = {
              lockingKey: { type: o.Eb.EDIT_MODE },
            }));
        }
        selectBrowser() {
          this.listType === a.p.ONLINE
            ? this.radioRoutingService.goToOnlineBrowser()
            : this.listType === a.p.SDARS &&
              this.radioRoutingService.goToSiriusBrowser();
        }
        selectBack() {
          this.backClickedEvent.emit(!0);
        }
        selectFilter() {
          this.filterClickedEvent.emit();
        }
        switchToPlayer() {
          this.npsClickedEvent.emit();
        }
      }
    },
    "6FcF": function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return n;
      });
      var s = i("C05f");
      class n {
        constructor() {
          ((this.totalPlaytime$$ = new s.a(null)),
            (this.currentPlaytime$$ = new s.a(null)),
            (this.totalPlaytime$ = this.totalPlaytime$$),
            (this.currentPlaytime$ = this.currentPlaytime$$));
        }
        setTotalTime(t) {
          this.totalPlaytime$$.next(t);
        }
        setCurrentPlaytime(t) {
          this.currentPlaytime$$.next(t);
        }
      }
    },
    "9Vzf": function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return s;
      });
      class s {}
    },
    Ah1p: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return s;
      });
      var s = (function (t) {
        return (
          (t.FIRST_TIME_USE =
            "Der Shop bietet Ihnen die M\xf6glichkeit mit Hilfe\nIhres myAudi Accounts eine Vielzahl an\nFahrzeugfunktionen on Demand zu erwerben."),
          (t.SERVICING =
            "Der Shop wird zur Zeit gewartet.\nVersuchen Sie es zu einem sp\xe4teren Zeitpunkt erneut.\nWir bitten um Ihr Verst\xe4ndnis.\n"),
          (t.NOT_AVAILABLE =
            "Der Dienst konnte nicht geladen werden.\nBitte versuchen Sie es zu einem sp\xe4teren Zeitpunkt\nerneut.\n"),
          (t.OFFLINE =
            "Um Den Shop nutzen zu k\xf6nnen, ben\xf6tigen Sie eine Online-Verbindung.\nSie k\xf6nnen sich auch ohne Internetverbindung die bereits gekauften\nFunktionen anzeigen lassen."),
          (t.NO_LOGIN =
            "Um den Shop nutzen zu k\xf6nnen, melden Sie sich bitte bei myAudi an. Sie\nk\xf6nnen sich auch ohne Anmeldung die bereits gekauften Funktonen\nansehen."),
          (t.BOUGHT_FUNCTIONS = ""),
          t
        );
      })({});
    },
    KiJg: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return b;
      });
      var s = i("YAYS"),
        n = i("QQZH"),
        a = i("HM3f"),
        o = i("D6Ca"),
        r = i("Yi6/"),
        c = i("YEwm"),
        l = i("lyut"),
        h = i("YtkY"),
        u = i("Ohay"),
        d = i("kuMc"),
        p = i("xVbo"),
        S = i("TLy2");
      class b {
        constructor(t, e, i, c) {
          ((this.browserService = t),
            (this.radioRoutingService = e),
            (this.optionMenuService = i),
            (this.optionTypeEnum = l.b),
            (this.uiStateType = r.uc.ListHorizontal),
            (this.BrowseEntryTypeEnum = o.g),
            (this.onlineRadioEntries$$ = new n.a(1)),
            (this.destroyed$$ = new n.a(1)),
            (this.environment = r.gd),
            (this.logger = c.getLogger("radio.OnlineBrowserListComponent")),
            (this.browserCategoryText$ = this.browserService.browserStack$.pipe(
              Object(h.a)(
                (t) =>
                  (t &&
                    t.length > 0 &&
                    (t[t.length - 1].displayName || t[t.length - 1].type)) ||
                  "",
              ),
              Object(u.a)(),
              Object(d.a)(this.destroyed$$),
            )),
            (this.enumTitleLine$ = this.browserCategoryText$.pipe(
              Object(h.a)((t) => {
                for (const e of Object.keys(o.g))
                  if (t === e || t === o.g[e]) return !0;
                return !1;
              }),
              Object(u.a)(),
            )),
            (this.isTwoColumnLayout$ = Object(a.b)(
              this.browserService.topOfBrowserStack$,
              this.browserService.isFolderWithTwoColumnLayout$(),
            ).pipe(
              Object(h.a)(([t, e]) => s.b.checkForTwoColumnLayoutTypes(t) || e),
              Object(u.a)(),
              Object(d.a)(this.destroyed$$),
            )),
            (this.isPodcastFolder$ =
              this.browserService.topOfBrowserStack$.pipe(
                Object(h.a)(
                  (t) =>
                    !(
                      !t ||
                      !t.type ||
                      (t.type !== o.g.FOLDERPODCASTS &&
                        t.type !== o.g.FOLDERCNPODCASTS)
                    ),
                ),
                Object(u.a)(),
                Object(d.a)(this.destroyed$$),
              )),
            (this.isStationsByArea$ =
              this.browserService.topOfBrowserStack$.pipe(
                Object(h.a)(
                  (t) =>
                    !(!t || !t.type) && t.type === o.g.FOLDERSTATIONSBYAREA,
                ),
                Object(u.a)(),
                Object(d.a)(this.destroyed$$),
              )),
            (this.cnStaticNationalItem$ = this.isStationsByArea$.pipe(
              Object(p.a)((t) => t),
              Object(S.a)(() =>
                this.browserService.findStaticOnlineEntry$(
                  o.g.FOLDERCNNATIONAL,
                ),
              ),
            )),
            (this.cnStaticInternetItem$ = this.isStationsByArea$.pipe(
              Object(p.a)((t) => t),
              Object(S.a)(() =>
                this.browserService.findStaticOnlineEntry$(
                  o.g.FOLDERCNINTERNET,
                ),
              ),
            )),
            (this.hasFilterButton$ =
              this.browserService.topOfBrowserStack$.pipe(
                Object(h.a)((t) => !!t && !!t.filteringSupported),
                Object(u.a)(),
                Object(d.a)(this.destroyed$$),
              )));
        }
        back() {
          (this.browserService.browseUp(), this.radioRoutingService.goBack());
        }
        filter() {
          this.radioRoutingService.goTo(c.b.OnlineBrowser.children.Filter);
        }
        openOptionsMenu(t) {
          !t ||
            (t.type !== o.g.STATION &&
              t.type !== o.g.PODCAST &&
              t.type !== o.g.EPISODE) ||
            this.optionMenuService.showOptionMenu({
              radioOnlineEntry: t,
              context: l.a.LIST,
            });
        }
        ngAfterViewInit() {
          setTimeout(() => {
            this.browserService
              .createFormattedBrowserList(
                this.stationList.requestedDynamicListPages$,
              )
              .pipe(Object(d.a)(this.destroyed$$))
              .subscribe(this.onlineRadioEntries$$);
          }, 0);
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        playOrBrowseItem(t) {
          (this.logger.info("playOrBrowseItem", t),
            t.type === o.g.STATION || t.type === o.g.EPISODE
              ? this.browserService
                  .tuneToOnlineStation(t)
                  .pipe(Object(d.a)(this.destroyed$$))
                  .subscribe((t) => {
                    (this.logger.info("playOrBrowseItem finished with:", t),
                      this.radioRoutingService.goToNps());
                  })
              : this.browserService.browseInto(t).then(() => {
                  this.radioRoutingService.goTo(
                    this.radioRoutingService.currentRouteSnapshot ===
                      c.b.OnlineBrowser.children.List
                      ? c.b.OnlineBrowser.children.List2
                      : c.b.OnlineBrowser.children.List,
                  );
                }));
        }
      }
    },
    L5Zv: function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return d;
      }),
        i("FMaY"));
      var s = i("YtkY"),
        n = i("Ohay"),
        a = i("kuMc"),
        o = i("J+dc"),
        r = i("xVbo"),
        c = (i("YEwm"), i("QQZH")),
        l = i("Yi6/"),
        h = i("YibQ"),
        u = i("I/e0");
      i("YEFf");
      class d {
        constructor(t, e, i, o, r, d, p) {
          ((this.radiotextHistoryService = t),
            (this.radioRouting = e),
            (this.popupManager = i),
            (this.naviAppstatesService = o),
            (this.phoneService = r),
            (this.cdr = d),
            (this.contextEnum = l.s),
            (this.linkType = h.b),
            (this.destroyed$$ = new c.a(1)),
            (this.navIsReady = !1),
            (this.logger = p.getLogger("radio.RadioTextHistoryComponent")),
            this.naviAppstatesService.state$
              .pipe(
                Object(s.a)((t) => u.a.stateType(t)),
                Object(n.a)(),
                Object(a.a)(this.destroyed$$),
              )
              .subscribe((t) => {
                ((this.navIsReady = t === u.b.Initialized),
                  this.logger.info("Navigation is ready:  ", this.navIsReady),
                  this.cdr.markForCheck());
              }),
            this.phoneService.initialized$
              .pipe(Object(a.a)(this.destroyed$$))
              .subscribe((t) => {
                ((this.phoneIsReady = t),
                  this.logger.debug(
                    `PhoneState: initialized: ${this.phoneIsReady}`,
                  ),
                  this.cdr.markForCheck());
              }));
        }
        ngAfterViewInit() {
          (this.radiotextHistoryService.radiotextHistoryList$
            .pipe(
              Object(o.a)(1),
              Object(s.a)((t) => (t && t.paging ? t.paging.total : 0)),
              Object(a.a)(this.destroyed$$),
            )
            .subscribe((t) => {
              (this.radiotextList.selectIndex(t - 1), this.cdr.markForCheck());
            }),
            this.radiotextHistoryService.hasListItems$
              .pipe(
                Object(r.a)((t) => !t),
                Object(a.a)(this.destroyed$$),
              )
              .subscribe(() => {
                (this.goBackToNps(), this.cdr.markForCheck());
              }));
        }
        ngOnDestroy() {
          (this.destroyed$$.next(), this.destroyed$$.complete());
        }
        goBackToNps() {
          this.radioRouting.goToNps();
        }
        highlighting(t) {
          return (t.linkType === h.b.NAVLINK && !this.navIsReady) ||
            (t.linkType === h.b.PHONELINK && !this.phoneIsReady)
            ? []
            : t.highlightArray;
        }
        callNumber(t) {
          if (this.phoneIsReady && t.text && t.voiceCallNumber) {
            const e = t.text.slice(
              t.voiceCallNumber.startIndex,
              t.voiceCallNumber.endIndex,
            );
            (this.logger.debug("callNumber: ", e),
              this.phoneService.phones.focusDevice
                ? (this.logger.debug(
                    "Phone attached and no pairing active, show POPUP_RADIO_OPT_POPUP_RT_TEL",
                  ),
                  this.popupManager.request(l.Ob.POPUP_RADIO_OPT_POPUP_RT_TEL, {
                    data: e,
                  }))
                : (this.logger.debug(
                    "No phone attached, show  POPUP_RADIO_POPUP_NOPHONE_CALL",
                  ),
                  this.popupManager.request(
                    l.Ob.POPUP_RADIO_POPUP_NOPHONE_CALL,
                    { data: e },
                  )));
          }
        }
        goToNavSearch(t) {
          if (this.navIsReady && t.text && t.navLocation) {
            const e = t.text.slice(
              t.navLocation.startIndex,
              t.navLocation.endIndex,
            );
            (this.logger.debug(
              "Show popup to switch to navigation trueffle search: ",
              e,
            ),
              this.popupManager.request(l.Ob.POPUP_RADIO_OPT_POPUP_RT_NAV, {
                data: e,
              }));
          }
        }
      }
    },
    SPaH: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return d;
      });
      var s = i("QQZH"),
        n = i("HM3f"),
        a = i("D6Ca"),
        o = i("Yi6/"),
        r = (i("zbI8"), i("YEwm")),
        c = (i("T07r"), i("YAYS")),
        l = i("kuMc"),
        h = i("YtkY"),
        u = i("Ohay");
      class d {
        constructor(t, e, i, a, r) {
          ((this.controller = t),
            (this.onlineBrowserService = e),
            (this.radioRoutingService = i),
            (this.searchTriggerService = a),
            (this.onDestroy$$ = new s.a(1)),
            (this.environment = o.gd),
            (this.logger = r.getLogger("radio.OnlineBrowserFilterComponent")),
            this.controller.inputField$
              .pipe(Object(l.a)(this.onDestroy$$))
              .subscribe((t) => (this.inputField = t)),
            (this.isTwoColumnLayout$ = Object(n.b)(
              this.onlineBrowserService.topOfBrowserStack$,
              this.onlineBrowserService.isFolderWithTwoColumnLayout$(),
            ).pipe(
              Object(h.a)(([t, e]) => c.b.checkForTwoColumnLayoutTypes(t) || e),
              Object(u.a)(),
              Object(l.a)(this.onDestroy$$),
            )));
        }
        ngAfterViewInit() {
          this.searchTriggerService.triggerInitialSearchWhenReady(
            this.controller,
            this.onDestroy$$,
          );
        }
        ngOnDestroy() {
          this.onDestroy$$.next();
        }
        playOrBrowseItem(t) {
          (this.logger.info("playOrBrowseItem", t),
            t.type === a.g.STATION || t.type === a.g.EPISODE
              ? this.onlineBrowserService
                  .tuneToOnlineStation(t)
                  .pipe(Object(l.a)(this.onDestroy$$))
                  .subscribe((t) => {
                    (this.logger.info("playOrBrowseItem finished with:", t),
                      this.radioRoutingService.goToNps());
                  })
              : this.onlineBrowserService.browseInto(t).then(() => {
                  this.radioRoutingService.goTo(
                    this.radioRoutingService.currentRouteSnapshot ===
                      r.b.OnlineBrowser.children.List
                      ? r.b.OnlineBrowser.children.List2
                      : r.b.OnlineBrowser.children.List,
                  );
                }));
        }
      }
    },
    TBvk: function (t, e, i) {
      "use strict";
      (i.d(e, "b", function () {
        return O;
      }),
        i.d(e, "a", function () {
          return v;
        }));
      var s = i("C05f"),
        n = i("QQZH"),
        a = i("ROBh"),
        o = i("8j5Y"),
        r = i("kuMc"),
        c = i("Yi6/"),
        l = i("H+9d"),
        h = i("8lto"),
        u = i("3Sae"),
        d = i("Q/h1"),
        p = i("Ah1p"),
        S = i("kZht"),
        b = i("FfND"),
        g = i("yNay"),
        O = (function (t) {
          return (
            (t.CarLightSight = "CAR_LICHT-SICHT_LINKT_TO_SHOP"),
            (t.CarFASSetting = "CAR_FAS_SETTINGS_LINK_TO_SHOP"),
            (t.CarFASProfile = "CAR_FAS_PROFILE_LINKT_TO_SHOP"),
            (t.CarParking = "CAR_EINPARKHILFE_LINK_TO_SHOP"),
            (t.RadioSourcesMain = "RADIO_SOURCES_MAIN_LINK_TO_SHOP"),
            t
          );
        })({});
      let v = (() => {
        class t {
          constructor(t, e, i, a, o) {
            ((this.webappRoutingService = t),
              (this.entrypointService = e),
              (this.userManagementService = i),
              (this.globalRoutingService = a),
              (this.carLightSightLinkToShop$$ = new s.a(void 0)),
              (this.carFASSettingsLinkToShop$$ = new s.a(void 0)),
              (this.carFASProfileLinkToShop$$ = new s.a(void 0)),
              (this.carParkingLinkToShop$$ = new s.a(void 0)),
              (this.radioSourcesMainLinkToShop$$ = new s.a(void 0)),
              (this.carLightSightLinkToShop$ = this.carLightSightLinkToShop$$),
              (this.carFASSettingsLinkToShop$ =
                this.carFASSettingsLinkToShop$$),
              (this.carFASProfileLinkToShop$ = this.carFASProfileLinkToShop$$),
              (this.carParkingLinkToShop$ = this.carParkingLinkToShop$$),
              (this.radioSourcesMainLinkToShop$ =
                this.radioSourcesMainLinkToShop$$),
              (this.destroy$$ = new n.a(1)),
              (this.logger = o.getLogger("online.FodLinkToShopService")),
              this.init());
          }
          ngOnDestroy() {
            this.destroy$$.next();
          }
          enterShop(t) {
            this.logger.info("enterShop: enter shop via link: ", t);
            const e = !this.userManagementService.isGuestAccountActive();
            (this.logger.info("enterShop: hasLogin: ", e),
              e
                ? this.webappRoutingService.goToIncludeStateWebApp(
                    this.globalRoutingService.activeAppContextSnapshot,
                    t.id,
                  )
                : this.webappRoutingService.goTo(d.a.ShopInfo, p.a.NO_LOGIN));
          }
          init() {
            const t = Object.keys(O).map((t) => O[t]);
            (this.logger.info("init: retrieving entrypoints for tags=", t),
              this.entrypointService
                .entryPointsForTag$(...t)
                .pipe(
                  Object(c.Lc)(
                    this.logger,
                    "init: failed to retrieve entrypoints=",
                    Object(a.a)([]),
                  ),
                  Object(o.a)((t) =>
                    this.logger.info("init: retrieved fod entrypoints=", t),
                  ),
                  Object(r.a)(this.destroy$$),
                )
                .subscribe((t) => {
                  (this.carLightSightLinkToShop$$.next(
                    t.find(
                      (t) => !!t && t.sourceEntrypoint.tag === O.CarLightSight,
                    ),
                  ),
                    this.carFASSettingsLinkToShop$$.next(
                      t.find(
                        (t) =>
                          !!t && t.sourceEntrypoint.tag === O.CarFASSetting,
                      ),
                    ),
                    this.carFASProfileLinkToShop$$.next(
                      t.find(
                        (t) =>
                          !!t && t.sourceEntrypoint.tag === O.CarFASProfile,
                      ),
                    ),
                    this.carParkingLinkToShop$$.next(
                      t.find(
                        (t) => !!t && t.sourceEntrypoint.tag === O.CarParking,
                      ),
                    ),
                    this.radioSourcesMainLinkToShop$$.next(
                      t.find(
                        (t) =>
                          !!t && t.sourceEntrypoint.tag === O.RadioSourcesMain,
                      ),
                    ));
                }));
          }
        }
        return (
          (t.ɵprov = S.bc({
            factory: function () {
              return new t(
                S.cc(h.a),
                S.cc(l.a),
                S.cc(u.a),
                S.cc(b.a),
                S.cc(g.a),
              );
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    VRxv: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return s;
      });
      class s {
        constructor() {}
      }
    },
    YSX5: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return m;
      });
      var s = i("YEwm"),
        n = i("YtkY"),
        a = i("xVbo"),
        o = i("Ohay"),
        r = i("8j5Y"),
        c = i("J+dc"),
        l = i("kuMc"),
        h = i("QQZH"),
        u = i("ROBh"),
        d = (i("Y0IF"), i("Hg0e")),
        p = i("l7Jc"),
        S = (i("H+fK"), i("dr0G"), i("H4ln")),
        b = i("Ngpk"),
        g = i("Yi6/"),
        O = (i("8lto"), i("2DZl"), i("AfGm")),
        v = i("H+9d"),
        T = i("P1io");
      class m {
        constructor(t, e, i, c, l, u, p) {
          ((this.radioRoutingService = t),
            (this.entertainmentService = e),
            (this.privacyService = i),
            (this.routingSettingsService = c),
            (this.onlineRoutingService = l),
            (this.connectivityService = u),
            (this.radioBrowserScreenType = d.a),
            (this.destroyed$$ = new h.a(1)),
            (this.logger = p.getLogger("OnlineStatusMessageComponent")),
            (this.hasBackButton$ = this.radioRoutingService.currentRoute$.pipe(
              Object(n.a)((t) =>
                this.radioRoutingService.isSubRoute(s.b.OnlineBrowser, t),
              ),
            )),
            (this.unavailableReason$ = this.entertainmentService
              .sourceForType$(b.g.ONLINERADIO)
              .pipe(
                Object(a.a)(g.wd),
                Object(n.a)((t) => t.errorType),
                Object(o.a)(),
                Object(r.a)((t) =>
                  this.logger.info(
                    `unavailableReason$: Show error text for "${t}"`,
                  ),
                ),
              )));
        }
        ngOnDestroy() {
          (this.destroyed$$.next(), this.destroyed$$.complete());
        }
        goToBuyDataVolume() {
          this.connectivityService.dataConnection$
            .pipe(Object(n.a)((t) => !t || !t.dataAvailable))
            .pipe(
              Object(g.pd)(this.logger, "goToBuyDataVolume#noLogin$ offline$"),
              Object(c.a)(1),
              Object(l.a)(this.destroyed$$),
            )
            .subscribe((t) => {
              t
                ? (this.logger.info(
                    "goToBuyDataVolume#no online connection - switch to webapp DATAPLANS_TOP-UP_SUPPORT",
                  ),
                  this.onlineRoutingService.goToIncludeStateWebApp(
                    T.x,
                    `${O.a.DATAPLAN}@@${v.b.DATAPLANS_TOP_UP_SUPPORT}`,
                  ))
                : this.onlineRoutingService
                    .goToIncludeStateWebApp(
                      T.x,
                      `${O.a.DATAPLAN}@@${v.b.DATAPLANS_DASHBOARD_MAIN}`,
                    )
                    .then((t) => {
                      t ||
                        (this.logger.info(
                          "goToBuyDataVolume#service not available, because server is not reachable",
                        ),
                        this.onlineRoutingService.goToIncludeStateWebApp(
                          T.x,
                          `${O.a.DATAPLAN}@@${v.b.DATAPLANS_DASHBOARD_NOT_AVAILABLE}`,
                        ));
                    });
            });
        }
        back() {
          this.radioRoutingService.goBack();
        }
        goToSentPrivacyData() {
          const t = this.unavailableReason$.pipe(
            Object(n.a)((t) => t !== d.a.BLOCKED_BY_PRIVACY),
          );
          this.privacyService.allowSetting(S.c.PersonalData, {
            continue$: t,
            routingService: this.radioRoutingService,
            waitingRoute: s.b.OnlineBrowser.children.PrivacyWaiting,
            forwardRoute$: Object(u.a)(s.b.OnlineBrowser.children.Status),
            primaryTitleId: S.e.Radio,
            secondaryTitleId: S.f.Notice,
          });
        }
        goToPrivacySettings() {
          this.routingSettingsService.goTo(p.a);
        }
      }
    },
    YYoY: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return L;
      });
      var s = i("kZht"),
        n = i("Yi6/"),
        a = i("D6Ca"),
        o = i("QQZH"),
        r = i("HM3f"),
        c = i("ROBh"),
        l = i("rYDR"),
        h = i("YtkY"),
        u = i("Ohay"),
        d = i("8j5Y"),
        p = i("kuMc"),
        S = i("xVbo"),
        b = i("w0kG"),
        g = i("TLy2"),
        O = i("J+dc"),
        v = (i("dQg2"), i("YEwm")),
        T = (i("cCDc"), i("+NlX"), i("LZ0O"), i("6FY4")),
        m = i("lyut"),
        y = (i("6FcF"), i("IvGl")),
        E = (i("VVzb"), i("nWgY")),
        P = i("w4OF"),
        f = i("r5cX"),
        A = i("7dsG"),
        R = i("dhDN"),
        I = i("MvmT"),
        $ = i("1N6N"),
        _ = i("lweI");
      class L {
        constructor(t, e, i, r, c, l, h, u, d, p, S, b, g, O, P, R) {
          ((this.tunerService = t),
            (this.radiotextService = e),
            (this.npsPlaytimeService = i),
            (this.radioOptionsService = r),
            (this.siriusService = c),
            (this.dynamicFunctionService = l),
            (this.radioPlayerService = h),
            (this.favoritesService = u),
            (this.podcastFavService = d),
            (this.resizeDetectionService = p),
            (this.optionMenuService = S),
            (this.widgetHistoryService = b),
            (this.configService = g),
            (this.radioRoutingService = O),
            (this.popupManagementService = P),
            (this.optionTypeEnum = m.b),
            (this.instantReplayPositions = E.a),
            (this.BandTypes = a.e),
            (this.RadioRoute = v.b),
            (this.iconCategoryEnum = n.Z),
            (this.imageScaleMode = n.ab.Contain),
            (this.radiotextTypeEnum = T.a),
            (this.ConnectionErrorType = E.c),
            (this.ContextualButtonTextEnum = A.a),
            (this.radioIconTypeEnum = y.a),
            (this.uiStateType = n.uc),
            (this.sxmVariantEnum = _.b),
            (this.showStationList = new s.n()),
            (this.hasEntries = new s.n()),
            (this.AudioChannel = a.d),
            (this.getItemLayout = I.b.getItemLayout),
            (this.dragAndFlingDirection = n.K.Horizontal),
            (this.moreLockingParam = { lockingKey: { type: n.Eb.MORE_MENU } }),
            (this.destroyed$$ = new o.a(1)),
            (this.isFavoriteInsertionActive = !1),
            (this.isPodcastFavoriteInsertionActive = !1),
            (this.currentlySelectedTeamTypeForAudioChannel = f.c.NEUTRAL),
            (this.logger = R.getLogger("radio.NowPlayingScreen")));
        }
        ngOnInit() {
          ((this.isMixedList$ = this.tunerService.listType$.pipe(
            Object(h.a)(
              (t) =>
                t === a.p.RECENTS || t === a.p.FAVORITES || t === a.p.UNIFIED,
            ),
            Object(u.a)(),
          )),
            (this.isMediumPanel$ = this.resizeDetectionService.resize$.pipe(
              Object(h.a)((t) => t.width <= 1280),
              Object(u.a)(),
            )),
            (this.playtimeAvailable$ = this.tunerService.activeTuner$.pipe(
              Object(h.a)(
                (t) =>
                  !(!t || !t.playtimeData || !t.playtimeData.durationSeconds),
              ),
              Object(u.a)(),
            )),
            (this.sxmPlaytimeAvailable$ = Object(r.b)(
              this.tunerService.activeTuner$,
              this.tunerService.activeStation$,
            ).pipe(
              Object(h.a)(
                ([t, e]) =>
                  (!!e &&
                    e.isSdarsPodcast() &&
                    !!e.sdarsData &&
                    !!e.sdarsData.durationSeconds) ||
                  (!!t &&
                    !!t.instantReplayData &&
                    !!t.instantReplayData.playTimeSeconds),
              ),
              Object(u.a)(),
            )),
            (this.sxmEpisodeDuration$ = this.tunerService.activeStation$.pipe(
              Object(h.a)((t) =>
                t && t.sdarsData && Object(n.wd)(t.sdarsData.durationSeconds)
                  ? t.sdarsData.durationSeconds
                  : 0,
              ),
              Object(u.a)(),
            )),
            (this.sxmPlaytimeSeconds$ = this.siriusService.playTimeSeconds$()),
            (this.currentPlayTimeVariant$ =
              this.tunerService.activeStation$.pipe(
                Object(h.a)((t) =>
                  t && t.isSDARS()
                    ? t.isSdarsPodcast()
                      ? P.b.SxmHHMMSS
                      : P.b.SxmBufferTime
                    : P.b.Default,
                ),
                Object(u.a)(),
              )),
            (this.instantReplayDataAvailable$ =
              this.tunerService.activeTuner$.pipe(
                Object(d.a)((t) =>
                  t && t.instantReplayData
                    ? this.logger.info("instantReplayData", t.instantReplayData)
                    : "",
                ),
                Object(h.a)((t) => !!t && !!t.instantReplayData),
                Object(u.a)(),
              )),
            this.tunerService.activeStation$
              .pipe(Object(p.a)(this.destroyed$$))
              .subscribe((t) =>
                this.optionMenuService.setMoreMenuItem({
                  station: t,
                  context: m.a.MORE_NPS,
                }),
              ),
            (this.currentBookmarkIndex$ =
              this.siriusService.currentBookmarkIndex$()),
            (this.currentBookmarkState$ =
              this.siriusService.currentBookmarkCount$()),
            (this.sxmSportsAudioButtonSelected$ = this.siriusService
              .currentPlayingAudioChannel$()
              .pipe(
                Object(S.a)(n.wd),
                Object(h.a)((t) => {
                  switch (
                    (this.logger.info("sxmSportsAudioButtonSelected$() ", t), t)
                  ) {
                    case a.d.AWAYBIASEDCOMMENTARY:
                      return {
                        teamType: f.c.AWAY,
                        buttonType: f.b.SPEAKER_BUTTON,
                      };
                    case a.d.HOMEBIASEDCOMMENTARY:
                      return {
                        teamType: f.c.HOME,
                        buttonType: f.b.SPEAKER_BUTTON,
                      };
                    default:
                      return { teamType: f.c.NEUTRAL, buttonType: f.b.NONE };
                  }
                }),
              )),
            this.sxmSportsAudioButtonSelected$
              .pipe(
                Object(p.a)(this.destroyed$$),
                Object(h.a)((t) => t.teamType),
              )
              .subscribe((t) => {
                this.currentlySelectedTeamTypeForAudioChannel = t;
              }),
            (this.availableAudioChannels$ =
              this.siriusService.availableAudioChannels$()),
            (this.contextualButtonAvailable$ =
              this.tunerService.activeTuner$.pipe(
                Object(h.a)((t) => !!t && !!t.contextualDynamicFunction),
                Object(u.a)(),
              )),
            (this.contextualButton$ =
              this.dynamicFunctionService.contextualDynamicFunctionRef$.pipe(
                Object(S.a)(n.wd),
                Object(h.a)((t) => new A.b(t)),
              )),
            (this.sxmConnectionErrors$ = Object(r.b)([
              this.siriusService.connectionErrors$(),
              this.siriusService.currentBookmarkIndex$(),
            ]).pipe(
              Object(h.a)(([t, e]) => ({
                hasError:
                  (t === E.c.SAT_CONNECTION_LOST && e === E.a.LIVE_INDEX) ||
                  t === E.c.IP_CONNECTION_LOST,
                errorType: t,
              })),
              Object(n.pd)(this.logger, "sxmConnectionErrors$"),
            )),
            this.tunerService.activeStation$
              .pipe(
                Object(S.a)(n.wd),
                Object(S.a)((t) => t.band === a.e.SDARS),
                Object(h.a)((t) => t.isDisabledBySdarsGeoBlocking()),
                Object(u.a)(),
                Object(p.a)(this.destroyed$$),
              )
              .subscribe((t) => {
                t
                  ? this.popupManagementService.request(
                      n.Ob.POPUP_RADIO_SXM_POPUP_GEO_RESTRICTION,
                    )
                  : this.popupManagementService.unrequest(
                      n.Ob.POPUP_RADIO_SXM_POPUP_GEO_RESTRICTION,
                    );
              }),
            this.tunerService.activeStation$
              .pipe(
                Object(S.a)((t) => !t),
                Object(p.a)(this.destroyed$$),
              )
              .subscribe(() => this.radioRoutingService.goToStationList()),
            this.tunerService.activeTuner$
              .pipe(
                Object(n.fd)("selectedStationIndex"),
                Object(d.a)((t) =>
                  this.logger.info(
                    `tunerService.activeTuner$: selected station index: ${t.selectedStationIndex} from tuner lists ${t.list}`,
                  ),
                ),
                Object(p.a)(this.destroyed$$),
              )
              .subscribe((t) => {
                t.list === a.p.RECENTS &&
                  void 0 === t.selectedStationIndex &&
                  this.showStationList.emit(!0);
              }));
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        skipBackward() {
          this.tunerService.skip(T.b.BACKWARD);
        }
        skipForward() {
          this.tunerService.skip(T.b.FORWARD);
        }
        goToStationList() {
          (this.widgetHistoryService.resetCurrentWidgetHistory(),
            this.showStationList.emit(!0));
        }
        toggleFavorite(t) {
          t.isOnlinePodcast()
            ? this.isPodcastFavoriteInsertionActive ||
              ((this.isPodcastFavoriteInsertionActive = !0),
              this.podcastFavService
                .toggleFavorizedStatus(t)
                .subscribe(() => (this.isPodcastFavoriteInsertionActive = !1)))
            : this.isFavoriteInsertionActive ||
              ((this.isFavoriteInsertionActive = !0),
              this.favoritesService
                .toggleStationFavorizedStatus(t)
                .pipe(
                  Object(b.a)(this.tunerService.activeTuner$),
                  Object(g.a)(([t, e]) =>
                    e.list === a.p.FAVORITES
                      ? t
                        ? this.favoritesService.favoriteStationsListEmpty$
                        : Object(c.a)(void 0)
                      : ((this.isFavoriteInsertionActive = !1), l.a),
                  ),
                )
                .subscribe((t) => {
                  ((this.isFavoriteInsertionActive = !1),
                    t && (this.hasEntries.emit(!1), this.goToStationList()));
                }));
        }
        onFling(t) {
          (t.direction === n.P.RIGHT && this.skipBackward(),
            t.direction === n.P.LEFT && this.skipForward());
        }
        openOptionsMenu() {
          this.optionMenuService.showOptionMenu(void 0, n.Lb.MoreMenu);
        }
        nextBookmark() {
          this.siriusService
            .skipToBookmark$(T.b.FORWARD)
            .pipe(Object(p.a)(this.destroyed$$))
            .subscribe(() => {
              this.logger.info("nextBookmark() ");
            });
        }
        previousBookmark() {
          this.siriusService
            .skipToBookmark$(T.b.BACKWARD)
            .pipe(Object(p.a)(this.destroyed$$))
            .subscribe(() => {
              this.logger.info("previousBookmark() ");
            });
        }
        skipToLive() {
          (this.logger.info("skipToLive() "),
            this.siriusService
              .skipToInstantReplayPosition$(E.a.LIVE_INDEX)
              .pipe(Object(p.a)(this.destroyed$$))
              .subscribe());
        }
        skipToBufferStart() {
          (this.logger.info("skipToBufferStart() "),
            this.siriusService
              .skipToInstantReplayPosition$(E.a.BUFFER_START_INDEX)
              .pipe(Object(p.a)(this.destroyed$$))
              .subscribe());
        }
        contextualButtonClicked() {
          Object(r.b)(
            this.tunerService.activeStation$,
            this.dynamicFunctionService.contextualDynamicFunctionRef$,
          )
            .pipe(Object(O.a)(1), Object(p.a)(this.destroyed$$))
            .subscribe(([t, e]) => {
              if (e)
                switch (
                  (this.logger.info(
                    "contextualButtonClicked$ dynamicFunc#purpose",
                    e.purpose,
                  ),
                  e.purpose)
                ) {
                  case a.o.SWITCHTOIP:
                  case a.o.SWITCHTOSAT:
                  case a.o.STARTOVER:
                    this.dynamicFunctionService
                      .updateDynamicFunctionObject$(e.id, a.m.RUNNING)
                      .subscribe();
                    break;
                  case a.o.SUBSCRIBE:
                    this.radioRoutingService.goTo(
                      v.b.RadioSettings.children.SiriusSubscriptionStatus,
                    );
                    break;
                  case a.o.RELATED:
                    if (
                      (this.logger.info("contextualButtonClicked$ RELATED", e),
                      e.nature === a.n.SDARSBROWSERPATH)
                    ) {
                      const i = new $.a({
                        id: "",
                        name: "",
                        uri: "",
                        type:
                          t && t.isSdarsPodcast()
                            ? a.s.OTHEREPISODES
                            : a.s.SHOWSFORCHANNEL,
                        path: e.browserPath,
                      });
                      (this.siriusService.setCurrentSelection(
                        R.b.RELATED,
                        i,
                        R.a.SXM_RELATED,
                      ),
                        this.radioRoutingService.tryGoTo(
                          v.b.Sirius.children.Stations,
                        ));
                    }
                }
            });
        }
        optionMenuVisible(t) {
          return (
            !!t &&
            (this.configService.isDualDisplay() ||
              (t.band !== a.e.AM &&
                t.band !== a.e.TI &&
                !this.tunerService.isJapan()))
          );
        }
        sxmTeamButtonSelected(t) {
          (this.logger.info("sxmTeamButtonSelected: item: ", t),
            t.buttonType === f.b.TEAM_COVER_BUTTON ||
            t.buttonType === f.b.SPEAKER_BUTTON
              ? this.siriusService.switchAudioChannel(
                  t.teamType === this.currentlySelectedTeamTypeForAudioChannel
                    ? a.d.UNBIASEDCOMMENTARY
                    : t.teamType === f.c.AWAY
                      ? a.d.AWAYBIASEDCOMMENTARY
                      : t.teamType === f.c.HOME
                        ? a.d.HOMEBIASEDCOMMENTARY
                        : a.d.UNBIASEDCOMMENTARY,
                )
              : t.buttonType === f.b.FAVORITE_BUTTON &&
                t.correspondingStation &&
                this.favoritesService
                  .toggleStationFavorizedStatus(
                    t.correspondingStation,
                    t.correspondingFavoriteId,
                  )
                  .subscribe());
        }
      }
    },
    aXcG: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return b;
      });
      var s = i("YEwm"),
        n = (i("Y0IF"), i("bwdy")),
        a = i("HM3f"),
        o = i("YtkY"),
        r = i("Ohay"),
        c = i("xVbo"),
        l = i("J+dc"),
        h = i("16cj"),
        u = i("Ngpk"),
        d = i("D6Ca"),
        p = i("xJAH"),
        S = i("Yi6/");
      (i("AEBN"), i("lHtn"), i("FNcX"));
      class b {
        constructor(t, e, i, s, a, o, r) {
          ((this.radioRoutingService = t),
            (this.entertainmentService = e),
            (this.textInputService = i),
            (this.radioSearchService = s),
            (this.tunerService = a),
            (this.cdr = o),
            (this.radioSourceI18NEnum = h.b),
            (this.searchTile = {
              id: "Search",
              title: h.b.SEARCH,
              iconUrl: "/icons/tiles/E811_settings_search.webp",
              available: !0,
              disabled: !0,
            }),
            (this.lastStationsTile = {
              id: "LastStations",
              title: h.b.LAST_STATIONS,
              iconUrl: "/icons/tiles/E036_radio_historylist.webp",
              available: !0,
              disabled: !0,
              emptyList: !0,
              sourceType: u.g.TUNERRECENTS,
            }),
            (this.favoritesTile = {
              id: "Favorites",
              title: h.b.FAVORITES,
              iconUrl: "/icons/tiles/E0FC_favoriten.webp",
              available: !0,
              disabled: !0,
              sourceType: u.g.TUNERFAVORITES,
            }),
            (this.unifiedTile = {
              id: "DabFm",
              title: h.b.UNIFIED,
              iconUrl: "/icons/tiles/E037_radio_commonlist.webp",
              available: !1,
              disabled: !0,
              sourceType: u.g.UNIFIED,
            }),
            (this.amTile = {
              id: "Am",
              title: h.b.AM,
              iconUrl: "/icons/tiles/E032_radio_am.webp",
              available: !1,
              disabled: !0,
              sourceType: u.g.AM,
            }),
            (this.fmTile = {
              id: "Fm",
              title: h.b.FM,
              iconUrl: "/icons/tiles/E031_radio_fm.webp",
              available: !1,
              disabled: !0,
              sourceType: u.g.FM,
            }),
            (this.sdarsTile = {
              id: "SiriusXM",
              title: h.b.SDARS,
              iconUrl: "/icons/tiles/E3B1_sirius_xm.webp",
              available: !1,
              disabled: !0,
              sourceType: u.g.SDARS,
            }),
            (this.onlineTile = {
              id: "Online",
              title: h.b.ONLINE,
              iconUrl: "/icons/tiles/E03E_radio_internet.webp",
              available: !1,
              disabled: !0,
              sourceType: u.g.ONLINERADIO,
            }),
            (this.tiTile = {
              id: "Ti",
              title: h.b.TI,
              iconUrl: "/icons/tiles/E03A_radio_am_ti.webp",
              available: !1,
              disabled: !0,
              sourceType: u.g.TI,
            }),
            (this.defaultTiles = [
              this.searchTile,
              this.lastStationsTile,
              this.favoritesTile,
              this.unifiedTile,
              this.fmTile,
              this.amTile,
              this.sdarsTile,
              this.onlineTile,
              this.tiTile,
            ]),
            (this.sourcesForTypes = new Map()),
            (this.subscriptions = new n.a()),
            (this.logger = r.getLogger("radio.BandSelectionComponent")));
        }
        ngOnInit() {
          this.subscriptions.closed ||
            (this.registerTile(u.g.UNIFIED, this.unifiedTile),
            this.registerTile(u.g.AM, this.amTile),
            this.registerTile(u.g.FM, this.fmTile),
            this.registerTile(u.g.SDARS, this.sdarsTile),
            this.registerTile(u.g.TUNERFAVORITES, this.favoritesTile),
            this.registerTile(u.g.TUNERRECENTS, this.lastStationsTile),
            this.registerTile(u.g.ONLINERADIO, this.onlineTile),
            this.registerTile(u.g.TI, this.tiTile),
            (this.activeTunerSource$ =
              this.entertainmentService.activeSourceForGroup$(u.c.TUNER)),
            this.subscriptions.add(
              Object(a.b)(
                this.radioSearchService.searchInstance$,
                this.textInputService.initialized$,
              )
                .pipe(
                  Object(o.a)(([t, e]) => !t || !e),
                  Object(r.a)(),
                )
                .subscribe((t) => {
                  ((this.searchTile.disabled = t), this.cdr.detectChanges());
                }),
            ));
        }
        get tiles() {
          return this.defaultTiles.filter((t) => t.available);
        }
        registerTile(t, e) {
          this.subscriptions.add(
            this.sourceForType$(t).subscribe((i) => {
              (i
                ? (this.sourcesForTypes.set(t, i),
                  (e.available = !0),
                  (e.disabled =
                    i.sourceState !== u.f.READYFORACTIVATION &&
                    i.sourceState !== u.f.ACTIVE &&
                    i.sourceState !== u.f.EMPTY),
                  e.sourceType === u.g.TUNERRECENTS &&
                    (e.emptyList = i.sourceState === u.f.EMPTY),
                  (e.welcomeScreen =
                    !!i.errorStates &&
                    i.errorStates.includes(u.e.BLOCKEDBYWELCOMESCREEN)),
                  e.sourceType === u.g.SDARS &&
                    i.sourceState === u.f.LOADING &&
                    e.welcomeScreen &&
                    (e.disabled = !1))
                : (e.available = !1),
                this.cdr.detectChanges());
            }),
          );
        }
        ngOnDestroy() {
          this.subscriptions.unsubscribe();
        }
        tileClicked(t) {
          const e = new s.a();
          switch (t) {
            case this.searchTile:
              this.radioRoutingService.goTo(s.b.GlobalSearch);
              break;
            case this.unifiedTile:
              this.switchToSource(u.g.UNIFIED);
              break;
            case this.amTile:
              this.switchToSource(u.g.AM);
              break;
            case this.fmTile:
              this.switchToSource(u.g.FM);
              break;
            case this.sdarsTile:
              this.sdarsTile.welcomeScreen
                ? this.radioRoutingService.goTo(s.b.Sirius.children.Welcome)
                : this.switchToSource(u.g.SDARS);
              break;
            case this.favoritesTile:
              this.subscriptions.add(
                this.radioRoutingService.goToFavorites().subscribe(),
              );
              break;
            case this.lastStationsTile:
              this.lastStationsTile.emptyList
                ? ((e.listType = d.p.RECENTS),
                  (e.initialScreen = p.a.STATION_LIST),
                  this.radioRoutingService.goToStationList(e))
                : this.switchToSource(u.g.TUNERRECENTS);
              break;
            case this.onlineTile:
              this.radioRoutingService.goToOnlineBrowser();
              break;
            case this.tiTile:
              this.switchToSource(u.g.TI);
          }
        }
        disabledTileClicked(t) {
          (this.logger.info("disabledTileClicked:", t),
            t === this.onlineTile &&
              this.radioRoutingService.goToOnlineBrowser());
        }
        sourceForType$(t) {
          return this.entertainmentService
            .sourcesForGroup$(u.c.TUNER)
            .pipe(Object(o.a)((e) => e.find((e) => e.type === t)));
        }
        switchToSource(t) {
          const e = this.sourcesForTypes.get(t);
          e
            ? this.subscriptions.add(
                Object(a.b)(
                  this.entertainmentService.activateEntertainmentSource(e),
                  this.entertainmentService
                    .activeSourceForGroup$(u.c.TUNER)
                    .pipe(
                      Object(c.a)(S.wd),
                      Object(c.a)((e) => e.type === t),
                    ),
                  this.tunerService.activeTuner$,
                )
                  .pipe(
                    Object(c.a)(
                      ([t, e, i]) => !!e.player && e.player.id === i.id,
                    ),
                    Object(l.a)(1),
                  )
                  .subscribe(() => {
                    (this.logger.info(`Switch to source "${t}" finished`),
                      this.radioRoutingService.goToStationList());
                  }),
              )
            : this.logger.error(
                `Could not switch to source, because source could not be resolved from type "${t}"`,
              );
        }
      }
    },
    awjW: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return u;
      });
      var s = i("D6Ca"),
        n = i("QQZH"),
        a = i("J+dc"),
        o = i("xVbo"),
        r = i("kuMc"),
        c = (i("Yi6/"), i("FNcX"), i("YEwm")),
        l = (i("nWgY"), i("1N6N")),
        h = i("dhDN");
      class u {
        constructor(t, e, i, a) {
          ((this.tunerService = t),
            (this.routingService = e),
            (this.siriusService = i),
            (this.listTypeEnum = s.p),
            (this.destroyed$$ = new n.a(1)),
            (this.logger = a.getLogger("radio.SxmIpLossComponent")));
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        selectNewChannel() {
          this.tunerService.activeStation$
            .pipe(
              Object(a.a)(1),
              Object(o.a)((t) => !!t && t.band === s.e.SDARS && !!t.sdarsData),
              Object(r.a)(this.destroyed$$),
            )
            .subscribe((t) => {
              const e = t.sdarsData ? t.sdarsData.fallbackPath : void 0,
                i = t.list,
                n = {
                  browserEntry: new l.a({ id: "", name: "", uri: "", path: e }),
                  type: h.b.SELECTION,
                  supercategoryName: "",
                  categoryName: "",
                  titleLineType: h.a.SXM_BASE,
                };
              (this.siriusService.selectEntry(n),
                this.logger.info(
                  `selectNewChannel# with fallbackPath= ${e} list: ${i}`,
                ),
                this.routingService.tryGoTo(
                  i === s.p.FAVORITES || i === s.p.RECENTS
                    ? c.b.Main
                    : c.b.Sirius.children.Stations,
                ));
            });
        }
      }
    },
    bIKE: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return f;
      });
      var s = i("kZht"),
        n = i("QQZH"),
        a = i("C05f"),
        o = i("HM3f"),
        r = i("ROBh"),
        c = i("Yi6/"),
        l = i("D6Ca"),
        h = i("YtkY"),
        u = i("Ohay"),
        d = i("fnmL"),
        p = i("Lrfq"),
        S = i("i7Dj"),
        b = i("xVbo"),
        g = i("kuMc"),
        O = i("J+dc"),
        v = i("jIqt"),
        T = i("8j5Y"),
        m = i("TLy2"),
        y = (i("dQg2"), i("lyut")),
        E = i("MvmT"),
        P = i("OK7x");
      i("NxZW");
      class f {
        constructor(t, e, i, o, r, d, p) {
          ((this.tunerService = t),
            (this.activatedRoute = i),
            (this.optionMenuService = o),
            (this.popupManager = r),
            (this.radioOptionsService = d),
            (this.s2rService = p),
            (this.optionTypeEnum = y.b),
            (this.uiStateType = c.uc.ListHorizontal),
            (this.showNPS = new s.n()),
            (this.hasEntries = new s.n()),
            (this.listTypeEnum = l.p),
            (this.stations$$ = new n.a(1)),
            (this.getItemLayout = E.b.getItemLayout),
            (this.disabledReasonHandler = P.a),
            (this.optionsMenuOptionsAvailable$$ = new a.a(!1)),
            (this.stationListCreated$$ = new n.a(1)),
            (this.destroy$$ = new n.a(1)),
            (this.logger = e.getLogger("radio.StationList")),
            (this.mergeLogger = e.getMergelogLogger()),
            (this.stationListEmpty$ = this.stations$$.pipe(
              Object(h.a)((t) => !t || !t.paging || 0 === t.paging.total),
              Object(u.a)(),
            )));
        }
        ngOnInit() {
          ((this.activeList$ = this.activatedRoute.queryParams.pipe(
            Object(d.a)(this.tunerService.listType$.pipe(Object(u.a)())),
            Object(h.a)(([t, e]) => (t && t.listType ? t.listType : e)),
            Object(p.a)(1),
            Object(S.a)(),
          )),
            (this.isMixedList$ = this.activeList$.pipe(
              Object(h.a)(
                (t) =>
                  t === l.p.RECENTS ||
                  t === l.p.FAVORITES ||
                  t === l.p.UNIFIED ||
                  t === l.p.FM,
              ),
            )),
            (this.activeListWithCurrentStationList$ = Object(o.b)(
              this.activeList$,
              this.stationListCreated$$,
            ).pipe(
              Object(b.a)(([, t]) => t),
              Object(h.a)(([t, e]) => t),
            )),
            this.radioOptionsService.optionsMenuDisabled$
              .pipe(Object(g.a)(this.destroy$$))
              .subscribe((t) => {
                this.optionsMenuOptionsAvailable$$.next(!t);
              }));
        }
        ngAfterViewInit() {
          setTimeout(() => {
            ((this.selectedIndex$ = Object(o.b)(
              this.stationQueryList.changes,
              this.tunerService.activeStationIndex$,
              this.stations$$,
              this.activeList$,
              this.tunerService.listType$,
            ).pipe(
              Object(b.a)(
                ([, , t]) =>
                  !!this.stationQueryList.first &&
                  t &&
                  t.data &&
                  t.data.length > 0,
              ),
              Object(h.a)(([, t, e, i, s]) => (i === s ? t : 0)),
              Object(u.a)(),
              Object(c.Kd)(),
            )),
              this.selectedIndex$
                .pipe(
                  Object(b.a)(c.wd),
                  Object(O.a)(1),
                  Object(g.a)(this.destroy$$),
                )
                .subscribe((t) => this.stationQueryList.first.selectIndex(t)),
              this.activeList$
                .pipe(
                  Object(d.a)(
                    this.stationQueryList.changes.pipe(
                      Object(v.a)(void 0),
                      Object(h.a)(() =>
                        this.stationQueryList.length > 0
                          ? this.stationQueryList.first
                          : void 0,
                      ),
                      Object(u.a)(),
                    ),
                  ),
                  Object(T.a)(() => this.stationListCreated$$.next(!1)),
                  Object(m.a)(([t, e]) =>
                    this.tunerService.createStationList$(
                      this.stationQueryList.first
                        ? this.stationQueryList.first
                            .requestedDynamicListCombined$
                        : Object(r.a)({ limit: 20, offset: 0 }),
                      t,
                    ),
                  ),
                  Object(g.a)(this.destroy$$),
                )
                .subscribe((t) => {
                  (this.stations$$.next(t), this.stationListCreated$$.next(!0));
                }));
          }, 0);
          const t = this.stations$$.pipe(
            Object(h.a)((t) => 0 !== t.paging.total),
            Object(u.a)(),
            Object(g.a)(this.destroy$$),
          );
          (t.subscribe((t) => {
            this.hasEntries.emit(t);
          }),
            Object(o.b)(t, this.s2rService.resume$.pipe(Object(v.a)(void 0)))
              .pipe(Object(g.a)(this.destroy$$))
              .subscribe(() => {
                this.mergeLogger.log(c.hc.STATION_LIST_RENDERED);
              }));
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        stationClicked(t) {
          (this.logger.debug("Tune to station", t),
            t &&
              (t.isSdarsPseudoChannel
                ? this.popupManager.request(c.Ob.POPUP_RADIO_POPUP_SIRIUS_ESN)
                : this.tunerService.tuneToStation(t).then((t) => {
                    t
                      ? this.goToNps()
                      : this.logger.info("Tune to station failed");
                  })));
        }
        goToNps() {
          this.showNPS.emit(!0);
        }
        openOptionsMenu(t) {
          t &&
            !t.isSdarsPseudoChannel &&
            (t.list === l.p.FAVORITES
              ? (this.optionMenuService.setMoreMenuItem({
                  station: t,
                  context: y.a.LIST,
                }),
                this.optionsMenuOptionsAvailable$$.value &&
                  this.optionMenuService.showOptionMenu({
                    station: t,
                    context: y.a.LIST,
                  }))
              : this.optionMenuService.showOptionMenu({
                  station: t,
                  context: y.a.LIST,
                }));
        }
        get isOptionMenuOpened$() {
          return this.optionMenuService.isOptionMenuVisible$;
        }
      }
    },
    eCVx: function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return c;
      }),
        i("T07r"));
      var s = i("Yi6/"),
        n = (i("zbI8"), i("YEwm"), i("FNcX"), i("YAYS"), i("D6Ca")),
        a = i("kuMc"),
        o = i("QQZH"),
        r = i("MvmT");
      class c {
        constructor(t, e, i, n, a, c, l) {
          ((this.controller = t),
            (this.radioRoutingService = e),
            (this.browserService = i),
            (this.popupManager = n),
            (this.tunerService = a),
            (this.searchTriggerService = c),
            (this.uiStateType = s.uc.ListHorizontal),
            (this.getItemLayout = r.b.getItemLayout),
            (this.logger = l.getLogger("radio.RadioGlobalSearchComponent")),
            (this.destroy$$ = new o.a(1)));
        }
        ngAfterViewInit() {
          this.searchTriggerService.triggerInitialSearchWhenReady(
            this.controller,
            this.destroy$$,
          );
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        searchResultTap(t) {
          (this.logger.info("searchResultTap", t),
            this.controller.addToUserDictionary(t),
            t.isSdarsPseudoChannel
              ? this.popupManager.request(s.Ob.POPUP_RADIO_POPUP_SIRIUS_ESN)
              : t.band === n.e.ONLINE && t.searchResultType === n.u.PODCAST
                ? this.browserService
                    .resetBrowserStack()
                    .then(() =>
                      this.browserService
                        .browseInto(t)
                        .then(() =>
                          this.radioRoutingService.goToOnlineBrowser(!1),
                        ),
                    )
                : this.tunerService
                    .activateAndTuneToStation(
                      t.correspondingStation
                        ? t.correspondingStation.uri
                        : void 0,
                      t.parentPath,
                      t.list,
                    )
                    .pipe(Object(a.a)(this.destroy$$))
                    .subscribe(() => {
                      (this.logger.info(
                        "Activation and tune to station finished",
                      ),
                        this.radioRoutingService.goToNps());
                    }));
        }
      }
    },
    fHOU: function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return it;
      }),
        i.d(e, "b", function () {
          return dt;
        }));
      var s = i("kZht"),
        n = i("bAzG"),
        a = i("fu7d"),
        o = i("bou3"),
        r = i("yNay"),
        c = i("bMuc"),
        l = i("ZIdM"),
        h = i("3bpu"),
        u = i("OtM5"),
        d = i("9ZFG"),
        p = i("6zvu"),
        S = i("VcEz"),
        b = i("y9xZ"),
        g = i("+sw+"),
        O = i("BMrr"),
        v = i("IEns"),
        T = i("vwU6"),
        m = i("z6QT"),
        y = i("flsk"),
        E = i("FQEI"),
        P = i("O82V"),
        f = i("Eln4"),
        A = i("evAh"),
        R = i("Ps6X"),
        I = i("YcCK"),
        $ = i("mYyF"),
        _ = i("v98a"),
        L = i("CpzC"),
        D = i("0Bsn"),
        w = i("5GjX"),
        M = i("aOG8"),
        C = i("Krzs"),
        N = i("a7NO"),
        x = i("An66"),
        j = i("N2Hj"),
        F = i("UbWD"),
        k = i("2rvh"),
        B = i("odRV"),
        U = i("Udyh"),
        Y = i("I3ve"),
        H = i("qiAR"),
        G = i("007S"),
        V = i("oeT7"),
        X = i("oxWk"),
        z = i("Tr//"),
        W = i("iAsw"),
        Q = i("Pqed"),
        Z = i("BS+8"),
        q = i("VYaS"),
        K = i("HygI"),
        J = i("oWpa"),
        tt = i("yegR"),
        et = i("0qMr"),
        it =
          (i("lyut"),
          i("YEwm"),
          i("xwjs"),
          i("cCDc"),
          i("dQg2"),
          i("FMaY"),
          i("VVzb"),
          i("xS3h"),
          i("+NlX"),
          i("nWgY"),
          i("rWDF"),
          i("Hnhs"),
          i("bIKE"),
          i("1VvW"),
          i("sg2e"),
          i("NxZW"),
          s.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}.statustext[_ngcontent-%COMP%]{text-align:center;flex-grow:1;font-size:40px}.list[_ngcontent-%COMP%]{height:100%}.state-disabled[_ngcontent-%COMP%]{filter:grayscale(100%) brightness(.4)}',
              ],
            ],
            data: {},
          }));
      function st(t) {
        return s.ac(
          0,
          [
            (t()(),
            s.yb(0, 0, null, null, 0, "div", [], null, null, null, null, null)),
          ],
          null,
          null,
        );
      }
      function nt(t) {
        return s.ac(
          0,
          [
            (t()(),
            s.yb(
              0,
              0,
              null,
              null,
              13,
              "au3-radio-station-list-item",
              [["id", ""]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
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
                [2, "small__list-item", null],
              ],
              [
                [null, "mib3Tap"],
                [null, "mib3Longpress"],
              ],
              function (t, e, i) {
                var s = !0,
                  n = t.component;
                return (
                  "mib3Tap" === e &&
                    (s = !1 !== n.stationClicked(t.context.$implicit) && s),
                  "mib3Longpress" === e &&
                    (s = !1 !== n.openOptionsMenu(t.context.$implicit) && s),
                  s
                );
              },
              n.b,
              n.a,
            )),
            s.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [s.l, s.D, o.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            s.xb(2, 147456, null, 0, c.a, [s.l, s.z], null, null),
            s.xb(
              3,
              147456,
              null,
              0,
              l.a,
              [c.a, [2, h.a], [2, a.a], r.a],
              null,
              null,
            ),
            s.xb(
              4,
              147456,
              null,
              0,
              u.a,
              [d.a, s.h, r.a, [3, u.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            s.xb(
              5,
              212992,
              null,
              0,
              p.a,
              [
                r.a,
                S.b,
                l.a,
                [2, h.a],
                [2, a.a],
                [2, u.a],
                [2, b.a],
                [2, g.a],
                s.z,
                O.a,
                s.l,
                [2, v.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            s.xb(
              6,
              212992,
              null,
              0,
              T.a,
              [
                r.a,
                s.z,
                s.l,
                S.b,
                O.a,
                l.a,
                [2, h.a],
                [2, a.a],
                [2, u.a],
                [2, b.a],
                [2, g.a],
                [2, v.a],
              ],
              null,
              { longpress: "mib3Longpress" },
            ),
            s.Sb(131584, null, m.a, m.a, [[3, m.a]]),
            s.xb(
              8,
              4407296,
              null,
              0,
              y.a,
              [
                s.l,
                E.a,
                s.h,
                m.a,
                [2, P.a],
                [2, h.b],
                [2, h.a],
                [2, f.a],
                [2, A.a],
              ],
              null,
              null,
            ),
            s.xb(
              9,
              212992,
              null,
              0,
              R.a,
              [[2, p.a], [8, null], [3, R.a], s.l, s.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            s.xb(
              10,
              147456,
              null,
              0,
              I.a,
              [[2, T.a], s.l, $.a, _.b],
              null,
              null,
            ),
            s.xb(
              11,
              147456,
              null,
              0,
              L.a,
              [[2, p.a], [2, u.a], [2, D.a], [2, y.a], [2, w.b], s.l, $.a, _.b],
              null,
              null,
            ),
            s.xb(
              12,
              147456,
              null,
              0,
              M.a,
              [[2, y.a], [2, p.a], [2, S.b], C.a],
              null,
              null,
            ),
            s.xb(
              13,
              114688,
              null,
              0,
              N.a,
              [],
              {
                station: [0, "station"],
                active: [1, "active"],
                showBandIcon: [2, "showBandIcon"],
                itemLayout: [3, "itemLayout"],
              },
              null,
            ),
          ],
          function (t, e) {
            var i = e.component;
            (t(e, 1, 0, ""),
              t(
                e,
                4,
                0,
                i.disabledReasonHandler.isDisabled(e.context.$implicit),
                i.disabledReasonHandler.getDisabledReason(e.context.$implicit),
              ),
              t(e, 5, 0),
              t(e, 6, 0),
              t(e, 8, 0),
              t(e, 9, 0, i.uiStateType),
              t(
                e,
                13,
                0,
                e.context.$implicit,
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.isSelected,
                e.parent.parent.context.mib3Let.isMixedList,
                i.getItemLayout(
                  e.context.$implicit,
                  e.parent.parent.context.mib3Let.layoutHints,
                ),
              ));
          },
          function (t, e) {
            t(e, 0, 1, [
              s.Nb(e, 4).combinedDisabled,
              s.Nb(e, 4).useBrighterIcon,
              s.Nb(e, 8).markerClassEnabled,
              s.Nb(e, 9).uiStateListHorizontal,
              s.Nb(e, 9).uiStateListVertical,
              s.Nb(e, 9).uiStateCoverLeft,
              s.Nb(e, 9).uiStateCoverRight,
              s.Nb(e, 9).uiStateCoverBottom,
              s.Nb(e, 9).uiStateButton,
              s.Nb(e, 9).uiStateByDabLeft,
              s.Nb(e, 9).uiStateByDabRight,
              s.Nb(e, 9).uiStateLbDabLeft,
              s.Nb(e, 9).uiStateLbDabRight,
              s.Nb(e, 13).showAsSmallListItem,
            ]);
          },
        );
      }
      function at(t) {
        return s.ac(
          0,
          [
            (t()(),
            s.yb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              function (t, e, i) {
                var s = !0;
                return (
                  "mib3IdleTimer" === e &&
                    (s = !1 !== t.component.goToNps() && s),
                  s
                );
              },
              null,
              null,
            )),
            s.xb(
              1,
              4407296,
              null,
              0,
              w.c,
              [[2, a.a], [2, w.a], [2, w.b], C.a, s.z, r.a],
              { idlePauseTimer: [0, "idlePauseTimer"] },
              { idleTimer: "mib3IdleTimer" },
            ),
            s.Pb(131072, x.b, [s.h]),
          ],
          function (t, e) {
            var i = e.component;
            t(
              e,
              1,
              0,
              s.Yb(e, 1, 0, s.Nb(e, 2).transform(i.isOptionMenuOpened$)),
            );
          },
          null,
        );
      }
      function ot(t) {
        return s.ac(
          0,
          [
            (t()(),
            s.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-radio-station-list-item",
              [["id", ""]],
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
                [2, "small__list-item", null],
              ],
              null,
              null,
              n.b,
              n.a,
            )),
            s.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [s.l, s.D, o.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            s.xb(
              2,
              212992,
              null,
              0,
              R.a,
              [[2, p.a], [8, null], [3, R.a], s.l, s.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            s.xb(
              3,
              114688,
              null,
              0,
              N.a,
              [],
              {
                station: [0, "station"],
                active: [1, "active"],
                showBandIcon: [2, "showBandIcon"],
                itemLayout: [3, "itemLayout"],
              },
              null,
            ),
          ],
          function (t, e) {
            var i = e.component;
            (t(e, 1, 0, ""),
              t(e, 2, 0, i.uiStateType),
              t(
                e,
                3,
                0,
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.station,
                !1,
                e.parent.parent.context.mib3Let.isMixedList,
                i.getItemLayout(
                  null == e.context.$implicit
                    ? null
                    : e.context.$implicit.station,
                  e.parent.parent.context.mib3Let.layoutHints,
                ),
              ));
          },
          function (t, e) {
            t(e, 0, 1, [
              s.Nb(e, 2).uiStateListHorizontal,
              s.Nb(e, 2).uiStateListVertical,
              s.Nb(e, 2).uiStateCoverLeft,
              s.Nb(e, 2).uiStateCoverRight,
              s.Nb(e, 2).uiStateCoverBottom,
              s.Nb(e, 2).uiStateButton,
              s.Nb(e, 2).uiStateByDabLeft,
              s.Nb(e, 2).uiStateByDabRight,
              s.Nb(e, 2).uiStateLbDabLeft,
              s.Nb(e, 2).uiStateLbDabRight,
              s.Nb(e, 3).showAsSmallListItem,
            ]);
          },
        );
      }
      function rt(t) {
        return s.ac(
          0,
          [
            (t()(),
            s.yb(
              0,
              0,
              null,
              null,
              7,
              "au3-list",
              [
                ["au3ListDomPaging", ""],
                ["class", "list"],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              j.b,
              j.a,
            )),
            s.Sb(6144, null, F.a, null, [k.a]),
            s.xb(2, 16384, null, 0, B.a, [s.l], null, null),
            s.xb(
              3,
              16384,
              null,
              0,
              U.a,
              [r.a],
              {
                pagingAdditionalDomNodes: [0, "pagingAdditionalDomNodes"],
                itemHeightGuess: [1, "itemHeightGuess"],
              },
              null,
            ),
            s.xb(
              4,
              12828672,
              [
                [1, 4],
                ["stationList", 4],
              ],
              1,
              k.a,
              [
                [2, U.a],
                [2, Y.a],
                [8, null],
                [2, a.a],
                [2, H.a],
                [2, G.a],
                [2, S.b],
                V.i,
                s.z,
                s.h,
                r.a,
                X.a,
                z.a,
                [2, E.a],
                h.a,
                [2, V.a],
              ],
              {
                itemHeightGuess: [0, "itemHeightGuess"],
                defaultTemplate: [1, "defaultTemplate"],
                items: [2, "items"],
                stabilized: [3, "stabilized"],
                activeItem: [4, "activeItem"],
              },
              null,
            ),
            s.Tb(603979776, 2, { template: 0 }),
            s.Pb(131072, x.b, [s.h]),
            (t()(),
            s.hb(
              0,
              [
                [2, 2],
                ["stationListItemTemplate", 2],
              ],
              0,
              0,
              null,
              nt,
            )),
            (t()(), s.hb(16777216, null, null, 1, null, at)),
            s.xb(
              9,
              16384,
              null,
              0,
              x.k,
              [s.P, s.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(),
            s.yb(
              10,
              0,
              null,
              null,
              5,
              "au3-option-menu-wrapper",
              [],
              null,
              null,
              null,
              W.b,
              W.a,
            )),
            s.Sb(6144, null, Q.b, null, [Z.a]),
            s.Sb(512, null, A.a, A.a, [[3, A.a]]),
            s.xb(
              13,
              245760,
              null,
              1,
              Z.a,
              [q.a, K.a, s.h, A.a],
              { ttEnumType: [0, "ttEnumType"] },
              null,
            ),
            s.Tb(603979776, 3, { template: 0 }),
            (t()(), s.hb(0, [[3, 2]], null, 0, null, ot)),
          ],
          function (t, e) {
            var i = e.component;
            (t(e, 3, 0, 2, 120),
              t(
                e,
                4,
                0,
                120,
                s.Nb(e, 7),
                s.Yb(e, 4, 2, s.Nb(e, 6).transform(i.stations$$)),
                !0,
                e.parent.context.mib3Let.selectedIndex,
              ),
              t(
                e,
                9,
                0,
                !e.parent.context.mib3Let.stationListEmpty &&
                  void 0 !== e.parent.context.mib3Let.selectedIndex &&
                  !i.disabledReasonHandler.isDisabled(
                    e.parent.context.mib3Let.selectedStation,
                  ),
              ),
              t(e, 13, 0, i.optionTypeEnum));
          },
          function (t, e) {
            t(e, 0, 0, s.Nb(e, 4).showLineNumbers);
          },
        );
      }
      function ct(t) {
        return s.ac(
          0,
          [
            (t()(),
            s.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "statustext"],
                ["id", "EmptyFavoritesList"],
              ],
              null,
              null,
              null,
              J.b,
              J.a,
            )),
            s.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [s.l, s.D, o.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            s.xb(
              2,
              49152,
              null,
              0,
              tt.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "EmptyFavoritesList"),
              t(
                e,
                2,
                0,
                5,
                "No favourites are stored at the moment. You can use the\noptions to add your favourite stations",
              ));
          },
          null,
        );
      }
      function lt(t) {
        return s.ac(
          0,
          [
            (t()(),
            s.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "statustext"],
                ["id", "EmptyRecentsList"],
              ],
              null,
              null,
              null,
              J.b,
              J.a,
            )),
            s.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [s.l, s.D, o.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            s.xb(
              2,
              49152,
              null,
              0,
              tt.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "EmptyRecentsList"),
              t(e, 2, 0, 5, "Currently no Last stations available."));
          },
          null,
        );
      }
      function ht(t) {
        return s.ac(
          0,
          [
            (t()(),
            s.yb(
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
            s.xb(
              1,
              16384,
              null,
              0,
              x.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            s.Pb(131072, x.b, [s.h]),
            (t()(), s.hb(16777216, null, null, 1, null, ct)),
            s.xb(
              4,
              278528,
              null,
              0,
              x.p,
              [s.P, s.L, x.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), s.hb(16777216, null, null, 1, null, lt)),
            s.xb(6, 16384, null, 0, x.q, [s.P, s.L, x.o], null, null),
            (t()(), s.hb(0, null, null, 0)),
          ],
          function (t, e) {
            var i = e.component;
            (t(
              e,
              1,
              0,
              s.Yb(
                e,
                1,
                0,
                s.Nb(e, 2).transform(i.activeListWithCurrentStationList$),
              ),
            ),
              t(e, 4, 0, i.listTypeEnum.FAVORITES));
          },
          null,
        );
      }
      function ut(t) {
        return s.ac(
          0,
          [
            (t()(),
            s.yb(
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
            (t()(), s.hb(16777216, null, null, 1, null, st)),
            s.xb(
              2,
              16384,
              null,
              0,
              x.k,
              [s.P, s.L],
              {
                ngIf: [0, "ngIf"],
                ngIfThen: [1, "ngIfThen"],
                ngIfElse: [2, "ngIfElse"],
              },
              null,
            ),
            (t()(), s.hb(0, [["stationListTemplate", 2]], null, 0, null, rt)),
            (t()(), s.hb(0, [["emptyListTemplate", 2]], null, 0, null, ht)),
          ],
          function (t, e) {
            t(
              e,
              2,
              0,
              e.context.mib3Let.stationListEmpty,
              s.Nb(e, 4),
              s.Nb(e, 3),
            );
          },
          null,
        );
      }
      function dt(t) {
        return s.ac(
          2,
          [
            s.Tb(671088640, 1, { stationQueryList: 1 }),
            (t()(), s.hb(16777216, null, null, 7, null, ut)),
            s.xb(
              2,
              16384,
              null,
              0,
              et.a,
              [s.L, s.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            s.Pb(131072, x.b, [s.h]),
            s.Pb(131072, x.b, [s.h]),
            s.Pb(131072, x.b, [s.h]),
            s.Pb(131072, x.b, [s.h]),
            s.Pb(131072, x.b, [s.h]),
            s.Qb(8, {
              layoutHints: 0,
              isMixedList: 1,
              stationListEmpty: 2,
              selectedIndex: 3,
              selectedStation: 4,
            }),
          ],
          function (t, e) {
            var i = e.component,
              n = t(
                e,
                8,
                0,
                s.Yb(
                  e,
                  2,
                  0,
                  s.Nb(e, 3).transform(i.tunerService.layoutHints$),
                ),
                s.Yb(e, 2, 0, s.Nb(e, 4).transform(i.isMixedList$)),
                s.Yb(e, 2, 0, s.Nb(e, 5).transform(i.stationListEmpty$)),
                s.Yb(
                  e,
                  2,
                  0,
                  s.Nb(e, 6).transform(i.tunerService.activeStationIndex$),
                ),
                s.Yb(
                  e,
                  2,
                  0,
                  s.Nb(e, 7).transform(i.tunerService.activeStation$),
                ),
              );
            t(e, 2, 0, n);
          },
          null,
        );
      }
    },
    fw8E: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return S;
      });
      var s = i("YEwm"),
        n = (i("OPvi"), i("QQZH")),
        a = i("HM3f"),
        o = i("8lHc"),
        r = i("Ngpk"),
        c = i("YtkY"),
        l = i("Ohay"),
        h = i("xVbo"),
        u = i("TLy2"),
        d = i("J+dc"),
        p = i("kuMc");
      i("Yi6/");
      class S {
        constructor(t, e, i) {
          ((this.radioService = t),
            (this.routingService = e),
            (this.destroyed$$ = new n.a(1)),
            (this.logger = i.getLogger("radio.InitializationComponent")),
            (this.showSourceButton$ =
              this.radioService.activeSourceUnsafe$.pipe(
                Object(c.a)((t) => {
                  if (!t) return !1;
                  switch (t.type) {
                    case r.g.ONLINERADIO:
                    case r.g.SDARS:
                      return !0;
                    default:
                      return !1;
                  }
                }),
                Object(l.a)(),
              )));
        }
        ngAfterViewInit() {
          const t = this.radioService.radioAvailable$.pipe(
            Object(h.a)((t) => t),
          );
          Object(a.b)(Object(o.a)(3e3), t)
            .pipe(
              Object(u.a)(() => this.radioService.activeSourceUnsafe$),
              Object(d.a)(1),
              Object(p.a)(this.destroyed$$),
            )
            .subscribe((t) => {
              t && t.sourceState === r.f.ERROR
                ? (this.logger.info(
                    "ngAfterViewInit: go to OnlineStatus screen. activeSource: ",
                    t,
                  ),
                  this.routingService.goTo(s.b.OnlineStatus))
                : (this.logger.info(
                    "ngAfterViewInit: go to List screen. activeSource: ",
                    t,
                  ),
                  this.routingService.goToStationList());
            });
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
      }
    },
    g4hz: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return c;
      });
      var s = i("Yi6/"),
        n = (i("nWgY"), i("8j5Y")),
        a = i("YEwm"),
        o = i("D6Ca"),
        r = i("dhDN");
      class c {
        constructor(t, e, i) {
          ((this.siriusService = t),
            (this.radioRoutingService = e),
            (this.lockingParam = {
              lockingKey: { type: s.Eb.SCREEN, category: s.Ab.SIRIUS },
            }),
            (this.contentType = o.s),
            (this.logger = i.getLogger("SxmBrowserTiles")));
        }
        ngOnInit() {
          this.browserTiles$ = this.siriusService.rootEntries$.pipe(
            Object(n.a)((t) =>
              this.logger.info("initRootElements: tiles: ", t.length),
            ),
          );
        }
        tileClicked(t) {
          switch ((this.logger.info("Selected superCategory ", t), t.type)) {
            case o.s.SUPERCATEGORY:
              (this.updateSelection(t, r.a.SXM_SUPERCATEGORY),
                this.siriusService.fetchCurrentCategoryEntries(t.path),
                this.radioRoutingService.goTo(a.b.Sirius.children.Categories));
              break;
            case o.s.SUPERMEGACATEGORY:
              (this.updateSelection(t, r.a.SXM_SUPERCATEGORY_ALLSTATIONS),
                this.radioRoutingService.goTo(a.b.Sirius.children.Stations));
              break;
            case o.s.FORYOUCATEGORY:
              (this.updateSelection(t, r.a.SXM_FOR_YOU, r.b.SXM_FOR_YOU),
                this.radioRoutingService.goTo(a.b.Sirius.children.Stations));
              break;
            default:
              this.logger.warn("SuperCategory type not handled: ", t.type);
          }
        }
        updateSelection(t, e, i = r.b.SELECTION) {
          (this.siriusService.selectEntry({
            type: i,
            browserEntry: t,
            supercategoryName: e === r.a.SXM_SUPERCATEGORY ? t.name : "",
            categoryName: "",
            titleLineType: e,
          }),
            this.siriusService.selectedSuperCategoryName$$.next(
              e === r.a.SXM_SUPERCATEGORY ? t.name : "",
            ));
        }
      }
    },
    "kUi+": function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return g;
      }),
        i("YEwm"));
      var s = i("Yi6/"),
        n = (i("dQg2"), i("QQZH")),
        a = i("ROBh"),
        o = (i("rWDF"), i("D6Ca")),
        r = i("TLy2"),
        c = i("fnmL"),
        l = i("YtkY"),
        h = i("Lrfq"),
        u = i("i7Dj"),
        d = i("w0kG"),
        p = i("kuMc"),
        S = i("J+dc"),
        b = (function (t) {
          return (
            (t.COVER_ART = "COVER_ART"),
            (t.STATION_LOGO = "STATION_LOGO"),
            (t.SLIDESHOW_IMAGE = "SLIDESHOW_IMAGE"),
            t
          );
        })({});
      class g {
        constructor(t, e, i, a, o, r, c) {
          ((this.radioRoutingService = t),
            (this.radioSettingsService = e),
            (this.tunerService = i),
            (this.dataDictionary = a),
            (this.lockingService = r),
            (this.disclaimerService = c),
            (this.destroyed$$ = new n.a(1)),
            (this.labelShowDuration = this.dataDictionary.t_confirm),
            (this.slideshowPageNamesEnum = b),
            (this.indicatorMode = s.cb.Auto),
            (this.imageScaleMode = s.ab.Contain),
            (this.iconCategoryCover = s.Z.Cover),
            (this.settingSaved = !1),
            (this.trackPages = (t, e) => e.name),
            (this.logger = o.getLogger("radio.RadioSlideshowComponent")));
        }
        ngOnInit() {
          const t = {
            enabled$: this.lockingService
              .getProperty({
                type: s.Eb.IMAGE,
                category: s.wb.DECORATIVE,
                action: s.ub.HIDE_IMAGE,
              })
              .pipe(Object(r.a)((t) => t.lock$)),
            reason$: Object(a.a)(s.Db.DEFAULT_LOCKING_DISCLAIMER),
            priority: s.D.LockingSlideshow,
          };
          ((this.disclaimerSubscription =
            this.disclaimerService.registerDisclaimer(t)),
            (this.pagesWithSelection$ = this.tunerService.activeStation$.pipe(
              Object(c.a)(this.radioSettingsService.preferredImageSettings$),
              Object(l.a)(([t, e]) => {
                const i = this.createPages(e, t),
                  s = e ? i.findIndex((t) => t.value === e.discreteValue) : -1;
                return { pages: i, activePage: s };
              }),
              Object(h.a)(1),
              Object(u.a)(),
            )),
            (this.pages$ = this.pagesWithSelection$.pipe(
              Object(l.a)((t) => t.pages),
            )),
            this.showLabel());
        }
        ngAfterViewInit() {
          (this.viewPager.pageChange
            .pipe(Object(d.a)(this.pages$), Object(p.a)(this.destroyed$$))
            .subscribe(([t, e]) => {
              ((this.currentPage = e[t]), this.showLabel());
            }),
            setTimeout(() => {
              this.pagesWithSelection$
                .pipe(Object(S.a)(1), Object(p.a)(this.destroyed$$))
                .subscribe((t) => {
                  (this.viewPager.moveToPage(t.activePage, !1),
                    (this.currentPage = t.pages[t.activePage]));
                });
            }, 0));
        }
        ngOnDestroy() {
          (this.disclaimerSubscription &&
            this.disclaimerService.unregisterDisclaimer(
              this.disclaimerSubscription,
            ),
            this.settingSaved ||
              this.storeSetting().catch((t) =>
                this.logger.error("storeSetting() failed", t),
              ),
            this.stopLabelHideTimer(),
            this.destroyed$$.next());
        }
        back() {
          this.storeSetting()
            .catch((t) => this.logger.error("storeSetting() failed", t))
            .then(() => {
              ((this.settingSaved = !0), this.radioRoutingService.goToNps());
            });
        }
        createPages(t, e) {
          return t && e
            ? [
                this.createPage(t, e, b.STATION_LOGO, o.j.IMAGETYPESTATIONLOGO),
                this.createPage(t, e, b.COVER_ART, o.j.IMAGETYPECOVERART),
                this.createPage(
                  t,
                  e,
                  b.SLIDESHOW_IMAGE,
                  o.j.IMAGETYPESLIDESHOW,
                ),
              ].filter(s.wd)
            : [];
        }
        createPage(t, e, i, s) {
          return t.possibleDiscreteValues &&
            t.possibleDiscreteValues.includes(s)
            ? {
                name: i,
                image: e ? e.getImageUrl(s, !1) : "",
                fallback: e.getDefaultImageUrlForBand(),
                value: s,
              }
            : null;
        }
        storeSetting() {
          return this.currentPage && this.currentPage.value
            ? this.radioSettingsService.setPreferredImage(
                this.currentPage.value,
              )
            : Promise.reject(
                new Error(
                  "Can not store preferred image, because no page selected",
                ),
              );
        }
        get labelVisibility() {
          return this.labelVisible ? "inherit" : "hidden";
        }
        toggleLabelVisibility() {
          this.labelVisible
            ? (this.stopLabelHideTimer(), (this.labelVisible = !1))
            : this.showLabel();
        }
        showLabel() {
          (this.stopLabelHideTimer(),
            (this.labelVisible = !0),
            (this.labelHideTimer = setTimeout(() => {
              ((this.labelHideTimer = void 0), (this.labelVisible = !1));
            }, this.labelShowDuration)));
        }
        stopLabelHideTimer() {
          (clearTimeout(this.labelHideTimer), (this.labelHideTimer = void 0));
        }
      }
    },
    lweI: function (t, e, i) {
      "use strict";
      (i.d(e, "b", function () {
        return l;
      }),
        i.d(e, "a", function () {
          return h;
        }));
      var s = i("QQZH"),
        n = i("HM3f"),
        a = i("xVbo"),
        o = i("kuMc"),
        r = i("YtkY"),
        c = (i("dQg2"), i("6FcF"), i("Yi6/")),
        l = (function (t) {
          return (
            (t[(t.Default = 0)] = "Default"),
            (t[(t.SxmBufferRight = 1)] = "SxmBufferRight"),
            (t[(t.SxmEpisode = 2)] = "SxmEpisode"),
            t
          );
        })({});
      class h {
        constructor(t, e, i) {
          ((this.tunerService = t),
            (this.npsPlaytimeService = e),
            (this.sxmVariant = l.Default),
            (this.currentVariant = c.Tb.Default),
            (this.coloredBuffer = !1),
            (this.userInteraction = !0),
            (this.destroyed$$ = new s.a(1)),
            (this.lockPlayTime = !1),
            (this.logger = i.getLogger("radio.RadioProgressbarComponent")));
        }
        ngOnInit() {
          this.sxmVariant === l.Default
            ? ((this.coloredBuffer = !1),
              this.tunerService.activeTuner$
                .pipe(
                  Object(a.a)(() => !this.lockPlayTime),
                  Object(o.a)(this.destroyed$$),
                )
                .subscribe((t) => {
                  t.playtimeData
                    ? ((this.tunerId = t.id),
                      (this.totalPlaytime =
                        t.playtimeData.durationSeconds || null),
                      this.npsPlaytimeService.setTotalTime(this.totalPlaytime),
                      (this.currentPlayTime =
                        t.playtimeData.playtimeSeconds || null),
                      (this.currentBuffertimeSeconds =
                        (this.currentPlayTime || 0) +
                        (t.playtimeData.bufferedSeconds || 0)))
                    : (this.npsPlaytimeService.setCurrentPlaytime(null),
                      this.npsPlaytimeService.setTotalTime(null),
                      (this.totalPlaytime = null));
                }))
            : this.sxmVariant === l.SxmBufferRight
              ? ((this.coloredBuffer = !0),
                (this.currentVariant = c.Tb.BufferRight),
                (this.userInteraction = !1),
                this.tunerService.activeTuner$
                  .pipe(
                    Object(a.a)(() => !this.lockPlayTime),
                    Object(o.a)(this.destroyed$$),
                  )
                  .subscribe((t) => {
                    t.instantReplayData
                      ? ((this.tunerId = t.id),
                        (this.totalPlaytime = Object(c.wd)(
                          t.instantReplayData.maxBufferSeconds,
                        )
                          ? t.instantReplayData.maxBufferSeconds
                          : null),
                        (this.currentPlayTime = Object(c.wd)(
                          t.instantReplayData.playTimeSeconds,
                        )
                          ? t.instantReplayData.playTimeSeconds
                          : null),
                        (this.currentBuffertimeSeconds = this.currentPlayTime))
                      : ((this.currentPlayTime = 0),
                        (this.totalPlaytime = 1),
                        (this.currentBuffertimeSeconds = null));
                  }))
              : this.sxmVariant === l.SxmEpisode &&
                ((this.coloredBuffer = !1),
                (this.userInteraction = !1),
                Object(n.b)(
                  this.tunerService.activeTuner$.pipe(
                    Object(a.a)(() => !this.lockPlayTime),
                    Object(o.a)(this.destroyed$$),
                  ),
                  this.tunerService.activeStation$.pipe(
                    Object(a.a)(c.wd),
                    Object(r.a)((t) =>
                      t.sdarsData ? t.sdarsData.durationSeconds : 0,
                    ),
                    Object(a.a)(c.wd),
                    Object(o.a)(this.destroyed$$),
                  ),
                ).subscribe(([t, e]) => {
                  t.instantReplayData
                    ? ((this.tunerId = t.id),
                      (this.totalPlaytime = e),
                      (this.currentPlayTime = Object(c.wd)(
                        t.instantReplayData.playTimeSeconds,
                      )
                        ? t.instantReplayData.playTimeSeconds
                        : null))
                    : (this.npsPlaytimeService.setCurrentPlaytime(null),
                      this.npsPlaytimeService.setTotalTime(null),
                      (this.totalPlaytime = null));
                }));
        }
        startDraggingPlayTime() {
          this.lockPlayTime = !0;
        }
        stopDraggingPlayTime() {
          this.updatePlayTime();
        }
        tapPlayTime() {
          ((this.lockPlayTime = !0), this.updatePlayTime());
        }
        updatePlayTime() {
          this.sxmVariant
            ? (this.logger.info(
                `updatePlayTime: for tuner ${this.tunerId} (SXM) with playtime: ${this.playtime}`,
              ),
              this.tunerService
                .updateTuner(this.tunerId, {
                  instantReplayData: {
                    playTimeSeconds: Math.round(this.playtime || 0),
                  },
                })
                .subscribe(() => {
                  this.lockPlayTime = !1;
                }))
            : (this.logger.info(
                `updatePlayTime: for tuner ${this.tunerId} with playtime: ${this.playtime}`,
              ),
              this.tunerService
                .updateTuner(this.tunerId, {
                  playtimeData: {
                    playtimeSeconds: Math.round(this.playtime || 0),
                    bufferedSeconds: 0,
                    durationSeconds: 0,
                  },
                })
                .subscribe(() => {
                  this.lockPlayTime = !1;
                }));
        }
        set currentPlayTime(t) {
          (this.npsPlaytimeService.setCurrentPlaytime(t), (this.playtime = t));
        }
        get currentPlayTime() {
          return this.playtime;
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
      }
    },
    lyut: function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return f;
      }),
        i.d(e, "b", function () {
          return A;
        }),
        i.d(e, "c", function () {
          return R;
        }));
      var s = i("Yi6/"),
        n = i("ZTXN"),
        a = i("QQZH"),
        o = i("HM3f"),
        r = i("ROBh"),
        c = i("cCDc"),
        l = i("5vJn"),
        h = (i("VVzb"), i("FMaY"), i("YtkY")),
        u = i("Ohay"),
        d = i("jIqt"),
        p = i("xVbo"),
        S = i("kuMc"),
        b = i("J+dc"),
        g = i("8j5Y"),
        O = i("7SLS"),
        v = i("YEwm"),
        T = i("1N6N"),
        m = (i("+NlX"), i("xS3h"), i("HNv/")),
        y = (i("nWgY"), i("dhDN")),
        E = (i("dQg2"), i("rWDF"), i("Hnhs"), i("+3WC")),
        P = (i("xwjs"), i("46jr")),
        f = (function (t) {
          return (
            (t[(t.LIST = 0)] = "LIST"),
            (t[(t.MORE_NPS = 1)] = "MORE_NPS"),
            t
          );
        })({}),
        A = (function (t) {
          return (
            (t.setAsFavorite = "Als Favorit\nspeichern"),
            (t.savePodcast = "Podcast\nmerken"),
            (t.saveAsPreset = "als Shortcut\nspeichern"),
            (t.radioText = "Radiotext"),
            (t.createStation = "Create Station for tuner"),
            (t.epg = "Programmf\xfchrer"),
            (t.similarStations = "\xc4hnliche\nSender"),
            (t.assocStations = "Zugeh\xf6rige Sender"),
            (t.assocPodcasts = "Zugeh\xf6rige Podcasts"),
            (t.scan = "Scan"),
            (t.scanFavorites = "Scan Smart\nFavorites"),
            (t.setArtistSxm = "Set Artist as SMX\nMusic Alert"),
            (t.setTitleSxm = "Set Title as SMX\nMusic Alert"),
            (t.setTeam1Sxm = "Set Team1 as\nSMX Game Alert"),
            (t.setTeam2Sxm = "Set Team2 as\nSMX Game Alert"),
            (t.setOtherEpisodes = "Other\n episodes"),
            (t.relatedContentSxm = "Related"),
            t
          );
        })({});
      class R {
        constructor(t, e, i, r, c, l, b, g, O, T, m, y, f, R) {
          ((this.optionMenuService = t),
            (this.radioRouting = e),
            (this.onlineMediaProviderActionService = i),
            (this.favoritesService = r),
            (this.tunerService = c),
            (this.radiotextHistoryService = l),
            (this.podcastFavService = b),
            (this.shortcutsOptionsService = g),
            (this.systemConfigService = O),
            (this.radioDynamicFunctionService = T),
            (this.radioSiriusService = m),
            (this.radioSettingsService = y),
            (this.globalShortcutsService = f),
            (this.setAsFavOption = {
              icon: "E0FC_radio_Favorit.webp",
              developerText: "Als Favorit\nspeichern",
              visible: !0,
              enabled: !1,
              optionList: !0,
              moreMenuNPS: !1,
              disabledReason: s.Ob.POPUP_RADIO_OPT_POPUP_STATION_ALREADY_FAV,
              textId: A.setAsFavorite,
            }),
            (this.savePodcastOption = {
              icon: "E0FC_radio_Favorit.webp",
              developerText: "Podcast\nmerken",
              visible: !0,
              enabled: !1,
              optionList: !0,
              moreMenuNPS: !1,
              disabledReason: s.Ob.POPUP_RADIO_OPT_POPUP_POD_ALREADY_FAV,
              textId: A.savePodcast,
            }),
            (this.saveAsPresetOption = {
              icon: "E3F0_save_shortcut_preset.webp",
              developerText: "als Shortcut\nspeichern",
              visible: !1,
              enabled: !1,
              optionList: !0,
              moreMenuNPS: !0,
              textId: A.saveAsPreset,
            }),
            (this.radioTextOption = {
              icon: "E84A_radio_radiotext.webp",
              developerText: "Radiotext",
              visible: !0,
              enabled: !1,
              optionList: !1,
              moreMenuNPS: !0,
              routeTo: v.b.RadiotextHistory,
              disabledReason: s.Ob.POPUP_RADIO_OPT_POPUP_UNAVAILABLE,
              textId: A.radioText,
            }),
            (this.createStationOption = {
              icon: "E098_radio.webp",
              developerText: "Create Station for tuner",
              visible: !1,
              enabled: !1,
              optionList: !1,
              moreMenuNPS: !0,
              textId: A.createStation,
            }),
            (this.epgOption = {
              icon: "E862_radio_epg.webp",
              developerText: "Programmf\xfchrer",
              visible: !1,
              enabled: !1,
              optionList: !1,
              moreMenuNPS: !0,
              textId: A.epg,
            }),
            (this.similarStationsOption = {
              icon: "E561_radio_similar_channels.webp",
              developerText: "\xc4hnliche\nSender",
              visible: !1,
              enabled: !1,
              optionList: !1,
              moreMenuNPS: !0,
              textId: A.similarStations,
            }),
            (this.assocStationsOption = {
              icon: "E564_radio_affiliated_channels.webp",
              developerText: "Zugeh\xf6rige Sender",
              visible: !1,
              enabled: !1,
              optionList: !1,
              moreMenuNPS: !0,
              textId: A.assocStations,
            }),
            (this.assocPodcastsOption = {
              icon: "E044_media_podcasts.webp",
              developerText: "Zugeh\xf6rige Podcasts",
              visible: !1,
              enabled: !1,
              optionList: !1,
              moreMenuNPS: !0,
              textId: A.assocPodcasts,
            }),
            (this.scanFavoritesOption = {
              icon: "E563_radio_scan_smart_favorite.webp",
              developerText: "Scan Smart\nFavorites",
              visible: !1,
              enabled: !1,
              optionList: !1,
              moreMenuNPS: !0,
              textId: A.scanFavorites,
            }),
            (this.setArtistSXMOption = {
              icon: "EA40_media_sxm_seek_interpret.webp",
              developerText: "Set Artist as SMX\nMusic Alert",
              visible: !1,
              enabled: !1,
              optionList: !1,
              moreMenuNPS: !0,
              textId: A.setArtistSxm,
            }),
            (this.setTitleSXMOption = {
              icon: "EA41_media_sxm_seek_title.webp",
              developerText: "Set Title as SMX\nMusic Alert",
              visible: !1,
              enabled: !1,
              optionList: !1,
              moreMenuNPS: !0,
              textId: A.setTitleSxm,
            }),
            (this.setTeam1SXMOption = {
              icon: "E84B_audio_tuner_team.webp",
              developerText: "Set Team1 as\nSMX Game Alert",
              visible: !1,
              enabled: !1,
              optionList: !1,
              moreMenuNPS: !0,
              textId: A.setTeam1Sxm,
            }),
            (this.setTeam2SXMOption = {
              icon: "E84B_audio_tuner_team.webp",
              developerText: "Set Team2 as\nSMX Game Alert",
              visible: !1,
              enabled: !1,
              optionList: !1,
              moreMenuNPS: !0,
              textId: A.setTeam2Sxm,
            }),
            (this.setOtherEpisodesSXMOption = {
              icon: "E3AF_sirius_on_demand.webp",
              developerText: "Other episodes",
              visible: !1,
              enabled: !1,
              optionList: !1,
              moreMenuNPS: !0,
              textId: A.setOtherEpisodes,
            }),
            (this.setRelatedSXMOption = {
              icon: "E564_radio_affiliated_channels.webp",
              developerText: "Related",
              visible: !1,
              enabled: !1,
              optionList: !1,
              moreMenuNPS: !0,
              textId: A.relatedContentSxm,
            }),
            (this.options = [
              this.setAsFavOption,
              this.savePodcastOption,
              this.saveAsPresetOption,
              this.radioTextOption,
              this.createStationOption,
              this.epgOption,
              this.similarStationsOption,
              this.assocStationsOption,
              this.assocPodcastsOption,
              this.setOtherEpisodesSXMOption,
              this.scanFavoritesOption,
              this.setArtistSXMOption,
              this.setTitleSXMOption,
              this.setTeam1SXMOption,
              this.setTeam2SXMOption,
              this.setRelatedSXMOption,
            ]),
            (this.updateOptions$$ = new n.a()),
            (this.destroyed$$ = new a.a(1)),
            (this.providerActionObjectStateEnum = P.f),
            (this.logger = R.getLogger("RadioOptionsService")),
            (this.otherEpisodesObj$ = this.radioDynamicFunctionService
              .sxmOptions$()
              .pipe(
                Object(h.a)((t) => t.otherEpisodes),
                Object(u.a)(),
              )),
            (this.relatedContent$ = this.radioDynamicFunctionService
              .sxmOptions$()
              .pipe(
                Object(h.a)((t) => t.related),
                Object(u.a)(),
              )),
            (this.options$ = Object(o.b)([
              this.optionMenuService.item$,
              this.radiotextHistoryService.hasListItems$,
              c.layoutHints$,
              this.radioDynamicFunctionService.sxmOptions$(),
              this.radioSettingsService.siriusAlertManagingAvailable$,
              this.updateOptions$$.pipe(Object(d.a)(void 0)),
              this.onlineMediaProviderActionService.availableProviderActions$,
            ]).pipe(
              Object(h.a)(
                ([t, e, i, s, n, , a]) => (
                  t && t.radioOnlineEntry
                    ? this.setOnlineEntryOptions(t.radioOnlineEntry)
                    : t && t.station
                      ? this.setRadioStationOptions(t.station, i, s, n, a)
                      : t &&
                        t.sxmStation &&
                        this.setSdarsStationOptions(t.sxmStation),
                  (this.radioTextOption.enabled = e),
                  this.changeRelevantOptions(t)
                ),
              ),
            )),
            (this.moreMenuDisabled$ = this.options$.pipe(
              Object(h.a)((t) => t.every((t) => !t.visible || !t.enabled)),
              Object(d.a)(!0),
            )),
            (this.optionsMenuDisabled$ = this.options$.pipe(
              Object(h.a)((t) => t.every((t) => !t.visible), Object(d.a)(!0)),
            )),
            this.globalShortcutsService.shortcutRemoved$
              .pipe(
                Object(p.a)((t) => t.type === E.a.Radio),
                Object(S.a)(this.destroyed$$),
              )
              .subscribe(() => {
                this.updateOptions$$.next();
              }),
            (this.isChina = this.systemConfigService.isChinaRegion()));
        }
        ngOnDestroy() {
          (this.destroyed$$.next(), this.destroyed$$.complete());
        }
        setOnlineEntryOptions(t) {
          (t.type === l.c.PODCAST || t.type === l.c.EPISODE
            ? ((this.setAsFavOption.visible = !1),
              (this.saveAsPresetOption.visible = !1),
              (this.savePodcastOption.visible = !0),
              (this.savePodcastOption.icon = t.isFavorite
                ? "E29E_radio_Favorit.webp"
                : "E0FC_radio_Favorit.webp"),
              (this.savePodcastOption.enabled = !t.isFavorite))
            : ((this.savePodcastOption.visible = !1),
              (this.setAsFavOption.visible = !0),
              (this.setAsFavOption.icon = t.isFavorite
                ? "E29E_radio_Favorit.webp"
                : "E0FC_radio_Favorit.webp"),
              (this.setAsFavOption.enabled = !t.isFavorite),
              this.setSaveAsPresetOptions(m.a.fromOnlineRadioEntry(t))),
            (this.radioTextOption.visible = !1),
            (this.createStationOption.visible = !1),
            (this.similarStationsOption.visible = !this.isChina),
            (this.assocStationsOption.visible = !this.isChina),
            (this.assocPodcastsOption.visible = !this.isChina));
        }
        setRadioStationOptions(t, e, i, s, n) {
          var a;
          (t.isOnlinePodcast()
            ? ((this.setAsFavOption.visible = !1),
              (this.saveAsPresetOption.visible = !1),
              (this.savePodcastOption.visible = !0),
              (this.savePodcastOption.icon = t.isFavorite
                ? "E29E_radio_Favorit.webp"
                : "E0FC_radio_Favorit.webp"),
              (this.savePodcastOption.enabled = !t.favoritePosition))
            : ((this.savePodcastOption.visible = !1),
              (this.setAsFavOption.visible = t.list !== l.f.FAVORITES),
              (this.setAsFavOption.icon = t.favoritePosition
                ? "E29E_radio_Favorit.webp"
                : "E0FC_radio_Favorit.webp"),
              (this.setAsFavOption.enabled = !t.favoritePosition),
              this.setSaveAsPresetOptions(m.a.fromRadioStation(t, e))),
            (this.epgOption.visible = !1),
            (this.radioTextOption.visible =
              this.radioTextOption.visible &&
              !this.tunerService.isJapan() &&
              t.band !== l.b.TI &&
              t.band !== l.b.AM &&
              t.band !== l.b.ONLINE),
            this.setTeamOptions(t, s),
            (this.setOtherEpisodesSXMOption.enabled = !!i.otherEpisodes),
            (this.setOtherEpisodesSXMOption.visible = !!i.otherEpisodes),
            (this.setRelatedSXMOption.enabled = !!i.related),
            (this.setRelatedSXMOption.visible = !!i.related));
          const o = n.find((t) => t.type === P.g.CREATERADIOSTATION);
          (o &&
            ((this.createStationOption.visible = !0),
            (this.createStationOption.enabled =
              (null === (a = o.providerAction) || void 0 === a
                ? void 0
                : a.state) !== this.providerActionObjectStateEnum.DISABLED),
            (this.createStationOption.providerActionItem = o)),
            this.setCommonSdarsStationOptions(t.isSDARS()));
        }
        setCommonSdarsStationOptions(t) {
          ((this.scanFavoritesOption.visible = !1),
            (this.setArtistSXMOption.visible = !1),
            (this.setTitleSXMOption.visible = !1),
            (this.radioTextOption.visible = !t),
            t && (this.createStationOption.visible = !1));
        }
        setSdarsStationOptions(t) {
          ((this.savePodcastOption.visible = !1),
            (this.setTeam1SXMOption.visible = !1),
            (this.setTeam2SXMOption.visible = !1),
            (this.setAsFavOption.visible = !0),
            (this.setAsFavOption.icon = t.isFavorite
              ? "E29E_radio_Favorit.webp"
              : "E0FC_radio_Favorit.webp"),
            (this.setAsFavOption.enabled = !t.isFavorite),
            this.setSaveAsPresetOptions(m.a.fromSiriusRadioStation(t)),
            this.setCommonSdarsStationOptions(!0));
        }
        setSaveAsPresetOptions(t) {
          const e = this.shortcutsOptionsService.saveShortcutOption(t);
          ((this.saveAsPresetOption.visible = e.visible),
            (this.saveAsPresetOption.enabled = e.enabled),
            (this.saveAsPresetOption.disabledReason = e.disabledReason));
        }
        setTeamOptions(t, e) {
          const i =
              t.liveGameData && t.liveGameData.awayTeam
                ? t.liveGameData.awayTeam
                : void 0,
            n =
              t.liveGameData && t.liveGameData.homeTeam
                ? t.liveGameData.homeTeam
                : void 0,
            a = !!i && !!i.alertUuidReference,
            o = !!n && !!n.alertUuidReference;
          ((this.setTeam1SXMOption.enabled =
            t.isLiveGame() &&
            !!i &&
            !!i.disableReasons &&
            0 === i.disableReasons.length &&
            !i.alertUuidReference),
            (this.setTeam1SXMOption.visible = t.isLiveGame() && e),
            (this.setTeam1SXMOption.disabledReason =
              t.isDisabledBySdarsMemoryFull()
                ? s.Ob.POPUP_RADIO_OPT_POPUP_ALERT_MEMORY_FULL
                : a
                  ? {
                      popup: s.Ob.POPUP_RADIO_OPT_POPUP_ALERT_ALREADY_TAGGED,
                      requestedPopupData: {
                        data: i && i.nickName ? i.nickName : "",
                      },
                      type: s.A.SHOW_POPUP,
                    }
                  : void 0),
            (this.setTeam2SXMOption.enabled =
              t.isLiveGame() &&
              !!n &&
              !!n.disableReasons &&
              0 === n.disableReasons.length &&
              !n.alertUuidReference),
            (this.setTeam2SXMOption.visible = t.isLiveGame() && e),
            (this.setTeam2SXMOption.disabledReason =
              t.isDisabledBySdarsMemoryFull()
                ? s.Ob.POPUP_RADIO_OPT_POPUP_ALERT_MEMORY_FULL
                : o
                  ? {
                      popup: s.Ob.POPUP_RADIO_OPT_POPUP_ALERT_ALREADY_TAGGED,
                      requestedPopupData: {
                        data: n && n.nickName ? n.nickName : "",
                      },
                      type: s.A.SHOW_POPUP,
                    }
                  : void 0));
        }
        changeRelevantOptions(t) {
          if (!t) return [];
          let e;
          switch (t.context) {
            case f.LIST:
              e = this.options.filter((t) => t.optionList);
              break;
            case f.MORE_NPS:
              e = this.options.filter((t) => t.moreMenuNPS);
              break;
            default:
              e = [];
          }
          return e;
        }
        onOptionTap(t) {
          const e = t.item;
          (this.logger.info("onOptionTap", t),
            e && e.radioOnlineEntry
              ? this.onlineEntryTapped(t, e)
              : e && e.station
                ? this.stationTapped(t, e)
                : e && e.sxmStation && this.sxmStationTapped(t, e));
        }
        onlineEntryTapped(t, e) {
          if (e && e.radioOnlineEntry)
            switch (t.option) {
              case this.setAsFavOption:
                e.radioOnlineEntry.correspondingStation &&
                  this.favoritesService
                    .toggleStationFavorizedStatus(
                      e.radioOnlineEntry.correspondingStation,
                    )
                    .subscribe();
                break;
              case this.saveAsPresetOption:
                const t = m.a.fromOnlineRadioEntry(e.radioOnlineEntry);
                this.saveShortcut(t, e.radioOnlineEntry.correspondingStation);
                break;
              case this.savePodcastOption:
                this.podcastFavService
                  .toggleFavorizedStatus(e.radioOnlineEntry)
                  .subscribe();
                break;
              default:
                this.logger.error(
                  "Received option tap event with unexpected type: ",
                  event,
                );
            }
        }
        stationTapped(t, e) {
          if (e && e.station)
            switch (t.option) {
              case this.setAsFavOption:
                this.favoritesService
                  .toggleStationFavorizedStatus(e.station)
                  .subscribe();
                break;
              case this.saveAsPresetOption:
                this.tunerService.layoutHints$
                  .pipe(Object(b.a)(1))
                  .subscribe((t) => {
                    const i = m.a.fromRadioStation(e.station, t);
                    this.saveShortcut(i, e.station);
                  });
                break;
              case this.savePodcastOption:
                this.podcastFavService
                  .toggleFavorizedStatus(e.station)
                  .subscribe();
                break;
              case this.radioTextOption:
                this.radioRouting.goTo(v.b.RadiotextHistory);
                break;
              case this.createStationOption:
                this.onlineMediaProviderActionService.triggerProviderAction(
                  t.option.providerActionItem,
                );
                break;
              case this.setOtherEpisodesSXMOption:
                this.otherEpisodesObj$
                  .pipe(Object(u.a)(), Object(b.a)(1))
                  .subscribe((t) => {
                    if (t && t.nature === l.d.SDARSBROWSERPATH) {
                      const e = new T.a({
                        id: "",
                        name: "",
                        uri: "",
                        type: l.k.OTHEREPISODES,
                        path: t.browserPath,
                      });
                      (this.radioSiriusService.setCurrentSelection(
                        y.b.OTHER_EPISODES,
                        e,
                        y.a.SXM_OTHER_EPISODES,
                        "Other episodes",
                      ),
                        this.logger.info(
                          "onOptionTap: OtherEpisodes, fetch path:  ",
                          t.browserPath,
                        ),
                        this.radioRouting.tryGoTo(
                          v.b.Sirius.children.Stations,
                        ));
                    }
                  });
                break;
              case this.setRelatedSXMOption:
                this.relatedContent$
                  .pipe(Object(u.a)(), Object(b.a)(1))
                  .subscribe((t) => {
                    if (t && t.nature === l.d.SDARSBROWSERPATH) {
                      const i = new T.a({
                        id: "",
                        name: "",
                        uri: "",
                        type:
                          e.station && e.station.isSdarsPodcast()
                            ? l.k.OTHEREPISODES
                            : l.k.SHOWSFORCHANNEL,
                        path: t.browserPath,
                      });
                      (this.radioSiriusService.setCurrentSelection(
                        y.b.RELATED,
                        i,
                        y.a.SXM_RELATED,
                      ),
                        this.logger.info(
                          "onOptionTap: setRelatedSXMOption, fetch path:  ",
                          t.browserPath,
                        ),
                        this.radioRouting.tryGoTo(
                          v.b.Sirius.children.Stations,
                        ));
                    }
                  });
                break;
              case this.setTeam1SXMOption:
                if (e.station.liveGameData && e.station.liveGameData.awayTeam) {
                  const t = e.station.liveGameData.awayTeam.teamUuidReference,
                    i = !!e.station.liveGameData.awayTeam.alertUuidReference,
                    s = e.station.liveGameData.awayTeam.nickName;
                  t && !i && this.radioSettingsService.addNewAlert(t, s);
                }
                break;
              case this.setTeam2SXMOption:
                if (e.station.liveGameData && e.station.liveGameData.homeTeam) {
                  const t = e.station.liveGameData.homeTeam.teamUuidReference,
                    i = !!e.station.liveGameData.homeTeam.alertUuidReference,
                    s = e.station.liveGameData.homeTeam.nickName;
                  t && !i && this.radioSettingsService.addNewAlert(t, s);
                }
                break;
              default:
                this.logger.error(
                  "Received option tap event with unexpected type: ",
                  event,
                );
            }
        }
        sxmStationTapped(t, e) {
          if (e && e.sxmStation)
            switch (t.option) {
              case this.setAsFavOption:
                e.sxmStation.stationReference &&
                  this.favoritesService
                    .toggleStationFavorizedStatus(e.sxmStation.stationReference)
                    .subscribe();
                break;
              case this.saveAsPresetOption:
                const t = m.a.fromSiriusRadioStation(e.sxmStation);
                this.saveShortcut(t, e.sxmStation.stationReference);
                break;
              case this.scanFavoritesOption:
              case this.setArtistSXMOption:
              case this.setTitleSXMOption:
              case this.setTeam1SXMOption:
              case this.setTeam2SXMOption:
                this.logger.error("Not implemented: ", event);
                break;
              default:
                this.logger.error(
                  "Received option tap event with unexpected type: ",
                  event,
                );
            }
        }
        saveShortcut(t, e) {
          this.prepareForSaveShortcut(t, e).subscribe(() => {
            const i = {
              shortcutName: t.name,
              stationName: e && e.name,
              stationId: e && e.id,
            };
            t.payload
              ? (this.logger.info("saveShortcut: save radio shortcut:", i),
                this.shortcutsOptionsService
                  .saveShortcut(t)
                  .then(() => this.updateOptions$$.next()))
              : this.logger.info(
                  "saveShortcut: can not store as shortcut, because save as favorite failed",
                  i,
                );
          });
        }
        prepareForSaveShortcut(t, e) {
          if (t.payload) return Object(r.a)(null);
          if (e) {
            const i = e.favoritePosition;
            return null != i && i >= 0
              ? this.favoritesService.getFavoriteByPosition(i).pipe(
                  Object(b.a)(1),
                  Object(g.a)((s) => {
                    s
                      ? t.setFavoriteId(s.id)
                      : this.logger.error(
                          `prepareForSaveShortcut: could not load favorite with position ${i} for station ${e.id}.`,
                        );
                  }),
                  Object(O.a)(null),
                )
              : this.favoritesService.addStationToFavorites(e).pipe(
                  Object(g.a)((i) => {
                    if (i.type === c.a.ADDED && i.uri) {
                      const e = Object(s.Wc)(i.uri);
                      t.setFavoriteId(e);
                    } else
                      this.logger.error(
                        `prepareForSaveShortcut: could not store favorite for station ${e.id}. Response: `,
                        i,
                      );
                  }),
                  Object(O.a)(null),
                );
          }
          return (
            this.logger.error(
              "prepareForSaveShortcut: no station specified, can not store as favorite",
            ),
            Object(r.a)(null)
          );
        }
      }
    },
    mfaT: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return n;
      });
      var s = i("kZht");
      i("KiJg");
      class n {
        constructor() {
          this.clickedRadioOnlineEntry = new s.n();
        }
        ngOnInit() {}
        onColumnClick(t) {
          this.clickedRadioOnlineEntry.emit(t);
        }
      }
    },
    nQ8c: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return g;
      });
      var s = i("kZht"),
        n = i("Yi6/"),
        a = i("D6Ca"),
        o = i("TLy2"),
        r = i("Ohay"),
        c = i("xVbo"),
        l = i("kuMc"),
        h = i("J+dc"),
        u = i("YtkY"),
        d = i("QQZH"),
        p = i("C05f"),
        S = i("ROBh"),
        b = (i("FNcX"), i("MvmT"));
      (i("cCDc"), i("RCRa"));
      class g {
        constructor(t, e, i, o, r) {
          ((this.tunerService = t),
            (this.favoritesService = e),
            (this.recentsService = i),
            (this.lockingService = o),
            (this.disclaimerService = r),
            (this.stationsToDelete = []),
            (this.listTypeEnum = a.p),
            (this.uiStateTypeEnum = n.uc),
            (this.stations = []),
            (this.moveEnabled = !1),
            (this.moveFinished = new s.n()),
            (this.deleted = new s.n()),
            (this.deletedAll = new s.n()),
            (this.back = new s.n()),
            (this.destroyed$$ = new d.a(1)),
            (this.activeStation$$ = new p.a(void 0)),
            (this.borderStyle = n.gd.isBentley ? n.m.NONE : n.m.THICK),
            (this.getItemLayout = b.b.getItemLayout));
        }
        ngOnInit() {
          ((this.selectAllDisabledEntry = {
            key: "radioEditModeDisclaimer",
            params: [
              {
                disabled$: this.disclaimerService.active$,
                reason: n.Db.DEFAULT_LOCKING_TOAST,
              },
            ],
          }),
            this.lockingService
              .getProperty({ type: n.Eb.EDIT_MODE })
              .pipe(
                Object(o.a)((t) => t.lock$),
                Object(r.a)(),
                Object(c.a)((t) => t),
                Object(l.a)(this.destroyed$$),
              )
              .subscribe(() => this.back.emit()),
            this.tunerService.activeStation$
              .pipe(Object(r.a)(), Object(l.a)(this.destroyed$$))
              .subscribe(this.activeStation$$));
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        get isStationMarked() {
          return this.stationsToDelete.length > 0;
        }
        get allStationsMarked() {
          return (
            this.stations &&
            this.stations.length === this.stationsToDelete.length
          );
        }
        moveModeFinished(t) {
          if (void 0 === t.destinationIndex) return;
          const e =
              this.stations[t.sourceIndex].favoriteId ||
              this.stations[t.sourceIndex].recentId ||
              this.stations[t.sourceIndex].id ||
              "",
            i = [...this.stations],
            s = i.splice(t.sourceIndex, 1);
          (i.splice(t.destinationIndex, 0, s[0]),
            (this.stations = [...i]),
            this.moveFinished.emit({
              entryId: e,
              destinationIndex: t.destinationIndex,
            }));
        }
        setDeleteState(t) {
          const e = this.stationsToDelete.indexOf(t);
          -1 === e
            ? this.stationsToDelete.push(t)
            : this.stationsToDelete.splice(e, 1);
        }
        delete() {
          this.activeStation$$
            .pipe(
              Object(h.a)(1),
              Object(o.a)((t) =>
                t
                  ? t.list === a.p.FAVORITES
                    ? this.favoritesService.getFavoriteIdByStationId(t.id)
                    : t.list === a.p.RECENTS
                      ? this.recentsService.getRecentIdByStationId(t.id)
                      : Object(S.a)({ id: t.id, uri: "" })
                  : Object(S.a)(void 0),
              ),
              Object(h.a)(1),
              Object(u.a)((t) => (t ? t.id : void 0)),
            )
            .subscribe((t) => {
              if (t) {
                const e = this.stationsToDelete.findIndex((e) => e === t);
                -1 !== e &&
                  this.stationsToDelete.push(
                    this.stationsToDelete.splice(e, 1)[0],
                  );
              }
              (this.allStationsMarked
                ? this.deletedAll.emit(this.stationsToDelete)
                : this.deleted.emit(this.stationsToDelete),
                (this.stationsToDelete = []));
            });
        }
        deselectAll() {
          this.stationsToDelete = [];
        }
        selectAll() {
          this.stationsToDelete = this.stations.map(
            (t) => t.favoriteId || t.recentId || t.id || "",
          );
        }
      }
    },
    paDr: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return S;
      });
      var s = i("C05f"),
        n = i("QQZH"),
        a = i("HM3f"),
        o = i("Yi6/"),
        r = i("YEwm"),
        c = i("Ohay"),
        l = i("YtkY"),
        h = i("8j5Y"),
        u = i("kuMc"),
        d = (i("dQg2"), i("D6Ca")),
        p = i("xJAH");
      class S {
        constructor(t, e, i, r) {
          ((this.tunerService = t),
            (this.radioRoutingService = e),
            (this.radioPlayerScreenTypeEnum = p.a),
            (this.listTypeEnum = d.p),
            (this.shouldShowNPS$$ = new s.a(!1)),
            (this.isEmpty = !1),
            (this.hasNpsShortcutButton = !1),
            (this.destroyed$$ = new n.a(1)),
            (this.logger = r.getLogger("radio.RadioPlayerComponent")),
            this.logger.info("routing query params:", i.snapshot.queryParams));
          const S =
            !!i.snapshot.queryParams &&
            i.snapshot.queryParams.initialScreen === p.a.NPS;
          (this.logger.info(
            "initial player screen is: ",
            S ? "NPS" : "StationList",
          ),
            this.shouldShowNPS$$.next(S),
            (this.activeList$ = Object(a.b)(
              i.queryParams,
              this.tunerService.listType$.pipe(Object(c.a)()),
            ).pipe(
              Object(l.a)(([t, e]) => (t && t.listType ? t.listType : e)),
              Object(c.a)(),
              Object(o.pd)(this.logger, "activeListType"),
              Object(o.Kd)(),
            )),
            (this.currentPlayerScreenType$ = this.shouldShowNPS$$.pipe(
              Object(l.a)((t) => (t ? p.a.NPS : p.a.STATION_LIST)),
              Object(c.a)(),
              Object(h.a)((t) =>
                this.logger.info("current radio player screen: ", t),
              ),
            )),
            (this.playerStateForAnimation$ = this.currentPlayerScreenType$.pipe(
              Object(l.a)((t) => {
                switch (t) {
                  case p.a.NPS:
                    return ((this.hasNpsShortcutButton = !1), o.Bd);
                  case p.a.STATION_LIST:
                    return (
                      o.gd.isBentley && (this.hasNpsShortcutButton = !0),
                      o.Cd
                    );
                  default:
                    return "";
                }
              }),
              Object(c.a)(),
            )),
            this.radioRoutingService.showStationList$$
              .pipe(Object(u.a)(this.destroyed$$))
              .subscribe(() => {
                this.showStationList();
              }));
        }
        ngOnDestroy() {
          (this.destroyed$$.next(),
            this.destroyed$$.complete(),
            this.shouldShowNPS$$.complete());
        }
        showStationList() {
          (this.logger.info("switch to playview"),
            this.shouldShowNPS$$.next(!1));
        }
        showNPS() {
          (this.logger.info("switch to nps"), this.shouldShowNPS$$.next(!0));
        }
        listHasEntries(t) {
          this.isEmpty = !t;
        }
        hasEditMode(t) {
          return t === d.p.FAVORITES || t === d.p.RECENTS;
        }
        editList(t) {
          switch ((this.logger.info("editList", t), t)) {
            case d.p.RECENTS:
              this.radioRoutingService.goTo(r.b.RecentsEditList);
              break;
            case d.p.FAVORITES:
              this.radioRoutingService.goTo(r.b.FavoritesEditList);
              break;
            default:
              this.logger.error("editList called with invalid ListType");
          }
        }
      }
    },
    "q+H2": function (t, e, i) {
      "use strict";
      function s(t) {
        return !(t && t.length > 0 && "" !== t[0]);
      }
      i.d(e, "a", function () {
        return s;
      });
    },
    r5cX: function (t, e, i) {
      "use strict";
      (i.d(e, "c", function () {
        return u;
      }),
        i.d(e, "b", function () {
          return d;
        }),
        i.d(e, "a", function () {
          return p;
        }));
      var s = i("kZht"),
        n = i("IvGl"),
        a = i("Yi6/"),
        o = i("QQZH"),
        r = i("YtkY"),
        c = i("Ohay"),
        l = i("jIqt"),
        h = i("kuMc"),
        u = (function (t) {
          return (
            (t[(t.HOME = 0)] = "HOME"),
            (t[(t.AWAY = 1)] = "AWAY"),
            (t[(t.NEUTRAL = 2)] = "NEUTRAL"),
            t
          );
        })({}),
        d = (function (t) {
          return (
            (t[(t.FAVORITE_BUTTON = 0)] = "FAVORITE_BUTTON"),
            (t[(t.SPEAKER_BUTTON = 1)] = "SPEAKER_BUTTON"),
            (t[(t.TEAM_COVER_BUTTON = 2)] = "TEAM_COVER_BUTTON"),
            (t[(t.NONE = 3)] = "NONE"),
            t
          );
        })({});
      class p {
        constructor(t) {
          ((this.windowResizeDetectionService = t),
            (this.rightSide = !1),
            (this.buttonSelected = new s.n()),
            (this.imageScaleMode = a.ab.ScaleDown),
            (this.TeamButtonType = d),
            (this.TeamType = u),
            (this.destroyed$$ = new o.a(1)),
            (this.isMediumWidth =
              this.windowResizeDetectionService.resize$.pipe(
                Object(r.a)((t) => t.width === a.I.EightInches),
                Object(c.a)(),
                Object(l.a)(!1),
                Object(h.a)(this.destroyed$$),
              )));
        }
        set selectedAudioButtonInput(t) {
          this.selected = t;
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        tapFavorite() {
          this.favoriteButtonDisabled ||
            this.buttonSelected.emit({
              teamType: this.rightSide ? u.HOME : u.AWAY,
              buttonType: d.FAVORITE_BUTTON,
              correspondingStation: this.correspondingStation,
              correspondingFavoriteId: this.correspondingFavoriteId,
            });
        }
        tapAudio() {
          this.audioButtonDisabled ||
            this.buttonSelected.emit({
              teamType: this.rightSide ? u.HOME : u.AWAY,
              buttonType: d.SPEAKER_BUTTON,
            });
        }
        tapCover() {
          this.buttonSelected.emit({
            teamType: this.rightSide ? u.HOME : u.AWAY,
            buttonType: d.TEAM_COVER_BUTTON,
          });
        }
        get correspondingStation() {
          if (
            this.station.liveGameData &&
            this.station.liveGameData.homeTeam &&
            this.station.liveGameData.awayTeam
          ) {
            const t = this.rightSide
              ? this.station.liveGameData.homeTeam
              : this.station.liveGameData.awayTeam;
            return (
              t.correspondingStation &&
                (t.correspondingStation.contextPath = this.station.path),
              new n.c(t.correspondingStation)
            );
          }
        }
        get correspondingFavoriteId() {
          if (
            this.station.liveGameData &&
            this.station.liveGameData.homeTeam &&
            this.station.liveGameData.awayTeam
          )
            return (
              this.rightSide
                ? this.station.liveGameData.homeTeam
                : this.station.liveGameData.awayTeam
            ).favoriteUuid;
        }
      }
    },
    roUG: function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return s;
      }),
        i.d(e, "b", function () {
          return n;
        }),
        i("bIKE"),
        i("YYoY"),
        i("fw8E"),
        i("aXcG"),
        i("kUi+"),
        i("yD5m"),
        i("KiJg"),
        i("YSX5"),
        i("yKnW"),
        i("4cnM"),
        i("sEuU"),
        i("paDr"),
        i("mfaT"),
        i("lweI"),
        i("2TRt"),
        i("04GT"),
        i("+w9M"),
        i("L5Zv"),
        i("eCVx"),
        i("VRxv"),
        i("nQ8c"),
        i("69MW"),
        i("SPaH"),
        i("g4hz"),
        i("yZtP"),
        i("s1cg"),
        i("5FY1"),
        i("r5cX"),
        i("2rQW"),
        i("awjW"),
        i("14s4"),
        i("9Vzf"));
      class s {}
      class n {}
    },
    s1cg: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return $;
      });
      var s = i("IdLP"),
        n = i("QQZH"),
        a = i("HM3f"),
        o = i("C05f"),
        r = i("Yi6/"),
        c = (i("FNcX"), i("nWgY"), i("YEwm"), i("D6Ca")),
        l = i("YtkY"),
        h = i("jIqt"),
        u = i("xVbo"),
        d = i("kuMc"),
        p = i("Ohay"),
        S = i("F/Dh"),
        b = i("J+dc"),
        g = i("8j5Y"),
        O = i("HaSC"),
        v = i("TLy2"),
        T = i("lyut"),
        m = i("H4ln"),
        y = i("dhDN"),
        E = i("OK7x"),
        P = (function (t) {
          return (
            (t.TitleSXM = "SiriusXM"),
            (t.TitleSXMSuperCat = "SiriusXM -  {{titleSuperCat}}"),
            (t.TitleSXMSuperCatAndCat =
              "SiriusXM -  {{titleSuperCat}} - {{titleCat}}"),
            (t.TitleSXMAllStations = "SiriusXM - All Channels"),
            (t.TitleSXMRelated = "SiriusXM - Related"),
            (t.TitleSXMOtherEpisodes = "SiriusXM - Other episodes"),
            (t.TitleSXMLiveSports = "SiriusXM - Livesports"),
            (t.TitleSXMForYou = "SiriusXM - For You"),
            t
          );
        })({});
      const f = new Map([
        [y.a.SXM_BASE, P.TitleSXM],
        [y.a.SXM_SUPERCATEGORY, P.TitleSXMSuperCat],
        [y.a.SXM_SUPERCAT_CATEGORY, P.TitleSXMSuperCatAndCat],
        [y.a.SXM_SUPERCATEGORY_ALLSTATIONS, P.TitleSXMAllStations],
        [y.a.SXM_RELATED, P.TitleSXMRelated],
        [y.a.SXM_OTHER_EPISODES, P.TitleSXMOtherEpisodes],
        [y.a.SXM_LIVE_SPORTS, P.TitleSXMLiveSports],
        [y.a.SXM_FOR_YOU, P.TitleSXMForYou],
      ]);
      var A = (function (t) {
          return (
            (t.Channels = "Channels"),
            (t.OnDemand = "On Demand"),
            (t.AvailableShows = "Available Shows"),
            (t.RelatedContent = "Related Content"),
            (t.OtherEpisodes = "Other episodes"),
            t
          );
        })({}),
        R = (function (t) {
          return (
            (t[(t.LEFT_BUTTON = 0)] = "LEFT_BUTTON"),
            (t[(t.RIGHT_BUTTON = 1)] = "RIGHT_BUTTON"),
            t
          );
        })({}),
        I = (function (t) {
          return (
            (t[(t.Init = 0)] = "Init"),
            (t[(t.Loading = 1)] = "Loading"),
            (t[(t.Error = 2)] = "Error"),
            (t[(t.Ready = 3)] = "Ready"),
            t
          );
        })({});
      class $ {
        constructor(t, e, i, a, o, c) {
          ((this.tunerService = t),
            (this.siriusService = e),
            (this.radioRoutingService = i),
            (this.popupManager = a),
            (this.optionMenuService = o),
            (this.optionTypeEnum = T.b),
            (this.uiStateType = r.gd.isBentley
              ? r.uc.ListHorizontal
              : r.uc.ListVertical),
            (this.titleTextEnum = P),
            (this.toggleButtonType = r.oc.FullHeightWithoutTitle),
            (this.disabledReasonHandler = E.a),
            (this.listStateType = I),
            (this.INITIAL_WAIT_TIME_MS = 200),
            (this.WAIT_TIME_MS = 3e3),
            (this.environment = r.gd),
            (this.toggleButtonGroupDataItems = [
              {
                itemId: R.LEFT_BUTTON,
                labelId: A.Channels,
                developerText: A.Channels,
                disabled: !1,
              },
              {
                itemId: R.RIGHT_BUTTON,
                labelId: A.OnDemand,
                developerText: A.OnDemand,
                disabled: !1,
              },
            ]),
            (this.toggleButtonData = {
              labelIdEnumType: A,
              items: this.toggleButtonGroupDataItems,
            }),
            (this.state$ = new s.a()),
            (this.destroyed$$ = new n.a(1)),
            (this.logger = c.getLogger("radio.SxmBrowser")));
        }
        ngAfterViewInit() {
          setTimeout(() => {
            (this.updateListEntries(
              this.siriusService.listEntries$(
                this.listComponent.requestedDynamicListCombined$,
              ),
            ),
              this.initToggleButton());
          }, 0);
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        itemSelected(t) {
          switch ((this.logger.info("itemSelected#type:", t.type), t.type)) {
            case c.s.STATION:
            case c.s.EPISODE:
            case c.s.LIVEGAME:
              this.tuneStationOrEpisode(t);
              break;
            case c.s.SHOW:
              this.handleSelectionOfShow(t);
              break;
            default:
              this.logger.warn(
                `itemSelected# type ${t.type} could not be matched: `,
                t,
              );
          }
        }
        titleLineText(t) {
          return f.get(t) || "";
        }
        initToggleButton() {
          ((this.toggleButtonAvailable$ = this.siriusService.toggleButton$.pipe(
            Object(l.a)((t) => !!t),
            Object(h.a)(!1),
          )),
            Object(a.b)(
              this.siriusService.toggleButton$.pipe(Object(u.a)(r.wd)),
              this.siriusService.selectedEntry$.pipe(Object(u.a)(r.wd)),
            )
              .pipe(
                Object(l.a)(([t, e]) => {
                  this.logger.info(
                    "initToggleButton#set button properties depending on current selection:",
                    e,
                  );
                  const i = {
                    labelIdEnumType: A,
                    items: this.toggleButtonGroupDataItems,
                  };
                  if (
                    (e && e.type === y.b.RELATED
                      ? ((i.items[R.LEFT_BUTTON].labelId = A.RelatedContent),
                        (i.items[R.LEFT_BUTTON].developerText =
                          A.RelatedContent))
                      : ((i.items[R.LEFT_BUTTON].labelId = A.Channels),
                        (i.items[R.LEFT_BUTTON].developerText = A.Channels)),
                    e &&
                    e.browserEntry &&
                    e.browserEntry.type === c.s.OTHEREPISODES
                      ? ((i.items[R.RIGHT_BUTTON].labelId = A.OtherEpisodes),
                        (i.items[R.RIGHT_BUTTON].developerText =
                          A.OtherEpisodes))
                      : e &&
                          e.browserEntry &&
                          e.browserEntry.type === c.s.SHOWSFORCHANNEL
                        ? ((i.items[R.RIGHT_BUTTON].labelId = A.AvailableShows),
                          (i.items[R.RIGHT_BUTTON].developerText =
                            A.AvailableShows))
                        : ((i.items[R.RIGHT_BUTTON].labelId = A.OnDemand),
                          (i.items[R.RIGHT_BUTTON].developerText = A.OnDemand)),
                    (this.toggleButtonGroupDataItems[R.RIGHT_BUTTON].disabled =
                      !t ||
                      !t.contentOnDemandAvailable ||
                      E.a.isDisabledBySdarsPrivacySxm(t)),
                    t && t.contentOnDemandAvailable)
                  )
                    if (E.a.isDisabledBySdarsPrivacySxm(t))
                      this.toggleButtonGroupDataItems[
                        R.RIGHT_BUTTON
                      ].disabledReason = {
                        popup:
                          r.Ob
                            .POPUP_SETUP_DATA_MGT_PRIVACY_STAGED_BLOCKED_FUNCTION_POPUP,
                        requestedPopupData: {
                          data: { setting: m.c.PersonalData },
                        },
                        type: r.A.SHOW_PRIVACY_POPUP,
                      };
                    else {
                      const e =
                          !!t.inaccessibleReasons &&
                          t.inaccessibleReasons.length > 0,
                        i = E.a.getSxmDisabledReason(t);
                      ((this.toggleButtonGroupDataItems[
                        R.RIGHT_BUTTON
                      ].disabled = e),
                        (this.toggleButtonGroupDataItems[
                          R.RIGHT_BUTTON
                        ].disabledReason = e ? i : void 0));
                    }
                  return i;
                }),
                Object(d.a)(this.destroyed$$),
              )
              .subscribe((t) => {
                this.toggleButtonData = t;
              }),
            (this.selectedToggleButton =
              this.toggleButtonData.items[R.LEFT_BUTTON]));
        }
        handleSelectionOfShow(t) {
          const e = this.siriusService.getSelectedEntry();
          (this.logger.info(
            `handleSelectionOfShow: currently selected entry is ${t.type} currentSelection: ...`,
            e,
          ),
            this.siriusService.selectEntry(
              Object.assign(e, { browserEntry: t }),
            ),
            this.updateListEntries(
              this.siriusService.listEntries$(
                this.listComponent.requestedDynamicListCombined$,
              ),
            ));
        }
        tuneStationOrEpisode(t) {
          (this.logger.info("tuneStationOrEpisode# ", t),
            t.stationData && 0 === t.stationData.stationNumber
              ? this.popupManager.request(r.Ob.POPUP_RADIO_POPUP_SIRIUS_ESN)
              : t.stationReference &&
                (this.logger.info(
                  "tuneStationOrEpisode# call activateAndTuneToStation with context: ",
                  t.stationReference.parentPath,
                ),
                this.tunerService
                  .activateAndTuneToStation(
                    t.stationReference.uri,
                    t.tuneContextPath,
                    c.p.SDARS,
                  )
                  .subscribe((t) => {
                    (this.logger.info(
                      "tuneStationOrEpisode# activateAndTuneToStation finished with: ",
                      t,
                    ),
                      this.radioRoutingService.goToNps());
                  })));
        }
        initState$(t) {
          const e = t.pipe(
            Object(l.a)((t) => (t ? t.paging.total : -1)),
            Object(h.a)(-1),
            Object(p.a)(),
            Object(r.pd)(this.logger, "initState$#numListItems$"),
            Object(r.Kd)(),
          );
          let i = !1;
          const s = new o.a(!0);
          return (
            e
              .pipe(Object(S.a)(this.INITIAL_WAIT_TIME_MS), Object(b.a)(1))
              .subscribe((t) => {
                t < 0 &&
                  ((i = !0),
                  s.next(!1),
                  setTimeout(() => s.next(!0), this.WAIT_TIME_MS));
              }),
            Object(a.b)(
              e,
              s.pipe(
                Object(r.pd)(this.logger, "initState$#shouldUpdateState$$"),
              ),
            ).pipe(
              Object(u.a)(([t, e]) => -1 === t || e),
              Object(l.a)(([t, e]) =>
                t >= 0 ? (t > 0 ? I.Ready : I.Error) : i ? I.Loading : I.Init,
              ),
              Object(p.a)(),
              Object(r.pd)(this.logger, "initState$: updating state to"),
              Object(r.Kd)(),
            )
          );
        }
        selectToggleButton(t) {
          this.selectedToggleButton = t;
          const e = this.siriusService.getSelectedEntry();
          if (t.itemId === R.LEFT_BUTTON)
            (this.logger.info(
              "selectToggleButton#Left toggle button selected - list request started .. => Current selection: ",
              e,
            ),
              this.updateListEntries(
                this.siriusService.listEntries$(
                  this.listComponent.requestedDynamicListCombined$,
                ),
              ));
          else {
            this.logger.info(
              "selectToggleButton#Right toggle button selected - list request started ... => Current selection: ",
              e,
            );
            const t = this.siriusService.toggleButton$.pipe(
              Object(l.a)((t) => (t && t.path ? t.path : void 0)),
              Object(u.a)(r.wd),
              Object(g.a)((t) => this.logger.info("path of toggleButton: ", t)),
            );
            this.updateListEntries(
              this.siriusService.listEntriesFromPath$(
                this.listComponent.requestedDynamicListCombined$,
                t,
                !1,
              ),
            );
          }
        }
        updateListEntries(t) {
          const e = t.pipe(Object(r.Kd)());
          ((this.state$ = this.initState$(e)),
            (this.sxmList$ = this.state$.pipe(
              Object(O.a)((t) => t !== I.Ready),
              Object(v.a)(() => e),
            )));
        }
        openOptionsMenu(t) {
          t &&
            !t.isPseudoChannel &&
            this.optionMenuService.showOptionMenu({
              sxmStation: t,
              context: T.a.LIST,
            });
        }
      }
    },
    sEuU: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return l;
      });
      var s = i("Yi6/"),
        n = i("YEwm"),
        a = i("YtkY"),
        o = i("kuMc"),
        r = i("QQZH"),
        c = (i("RCRa"), i("D6Ca"));
      class l {
        constructor(t, e, i, s) {
          ((this.recentsService = t),
            (this.radioRouter = e),
            (this.globalRoutingService = i),
            (this.popupManager = s),
            (this.recentsListType = c.p.RECENTS),
            (this.destroy$$ = new r.a(1)));
        }
        ngOnInit() {
          this.stations$ = this.recentsService.recentsStationList$.pipe(
            Object(a.a)((t) => (t && t.data ? t.data : [])),
            Object(o.a)(this.destroy$$),
          );
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        delete(t) {
          this.recentsService.deleteRecentStations(t).subscribe(() => {
            this.popupManager.request(
              s.Ob.POPUP_RADIO_OPT_POPUP_DEL_STATION_FAV,
            );
          });
        }
        deleteAll(t) {
          this.recentsService.deleteRecentStations(t).subscribe(() => {
            (this.globalRoutingService.currentAppRouteSnapshot &&
              this.globalRoutingService.currentAppRouteSnapshot.path ===
                n.b.RecentsEditList.path &&
              this.back(),
              this.popupManager.request(
                s.Ob.POPUP_RADIO_OPT_POPUP_DEL_STATION_FAV,
              ));
          });
        }
        back() {
          this.radioRouter.goBack();
        }
      }
    },
    w4OF: function (t, e, i) {
      "use strict";
      (i.d(e, "b", function () {
        return o;
      }),
        i.d(e, "a", function () {
          return r;
        }));
      var s = i("Yi6/"),
        n = i("kGpN"),
        a = i("eoEw"),
        o = (function (t) {
          return (
            (t[(t.Default = 0)] = "Default"),
            (t[(t.SxmHHMMSS = 1)] = "SxmHHMMSS"),
            (t[(t.SxmBufferTime = 2)] = "SxmBufferTime"),
            t
          );
        })({});
      class r {
        constructor() {
          ((this.variant = o.Default),
            (this.wideSeparator = !1),
            (this.alignRemainingPlaytimeRight = !1),
            (this.sourceUnit = s.vc.SECONDS),
            (this.formattingRule = n.a.DurationInMMSS),
            (this.formattingRuleHHMMSSwithOptionalHours =
              n.a.DurationInHHMMSSwithOptionalHours),
            (this.type = o),
            (this.alignment = a.a));
        }
        get timeRemaining() {
          return this.totalTime - this.currentTime;
        }
      }
    },
    xwjs: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return T;
      });
      var s = i("46jr"),
        n = i("HM3f"),
        a = i("yDJU"),
        o = i("YtkY"),
        r = i("jIqt"),
        c = i("8j5Y"),
        l = i("TLy2"),
        h = i("xVbo"),
        u = i("J+dc"),
        d = i("iT4G"),
        p = i("igZ1"),
        S = i("Yi6/"),
        b = i("kZht"),
        g = i("sg2e"),
        O = i("yNay");
      const v = [
        {
          type: s.g.ADDTOLIBRARY,
          successPopup: S.Ob.POPUP_APPLE_MUSIC_OPT_POPUP_SAVE,
          failurePopup: S.Ob.POPUP_APPLE_MUSIC_OPT_POPUP_NOT_SAVED,
        },
        {
          type: s.g.CREATERADIOSTATION,
          failurePopup: S.Ob.POPUP_APPLE_MUSIC_OPT_TOAST_CREATE_STATION_ERROR,
        },
      ];
      let T = (() => {
        class t {
          constructor(t, e, i, s) {
            ((this.rudiOnlinemediaService = t),
              (this.popupManagementService = e),
              (this.mediaService = i),
              (this.TRIGGERED_PROVIDER_ACTION_RESPONSE_TIMEOUT = 3e4),
              (this.logger = s.getLogger(
                "media.MediaOnlineProviderActionService",
              )),
              t.start(),
              (this.availableProviderActionsForActiveSource$ = Object(n.b)(
                this.rudiOnlinemediaService.provideractions
                  .retrieveProvideractionObjects({ autosubscribe: !0 })
                  .pipe(
                    Object(o.a)((t) => t.data || []),
                    Object(r.a)([]),
                    Object(c.a)((t) =>
                      this.logger.in.info(
                        "availableProviderActionsForActiveSource$",
                        t,
                      ),
                    ),
                  ),
                this.mediaService.activeSource$,
              ).pipe(
                Object(o.a)(([t, e]) =>
                  t.filter(
                    (t) =>
                      t.provider &&
                      e.onlinemediaProvider &&
                      t.provider.id === e.onlinemediaProvider.id,
                  ),
                ),
                Object(o.a)((t) =>
                  t
                    .map((t) => this.mapProviderActionToActionItem(t))
                    .filter(S.wd),
                ),
                Object(c.a)((t) =>
                  this.logger.in.info("mappedProviderActions", t),
                ),
                Object(S.Qd)(this),
              )),
              (this.availableProviderActions$ =
                this.rudiOnlinemediaService.provideractions
                  .retrieveProvideractionObjects({ autosubscribe: !0 })
                  .pipe(
                    Object(o.a)((t) => t.data || []),
                    Object(r.a)([]),
                    Object(c.a)((t) =>
                      this.logger.in.info("retrieveProvideractionObjects", t),
                    ),
                    Object(o.a)((t) =>
                      t
                        .map((t) => this.mapProviderActionToActionItem(t))
                        .filter(S.wd),
                    ),
                    Object(c.a)((t) =>
                      this.logger.in.info("ProvideractionObjects", t),
                    ),
                    Object(S.Qd)(this),
                  )));
          }
          triggerProviderAction(t) {
            (this.logger.info("triggerProviderAction", t),
              t && t.providerAction
                ? this.rudiOnlinemediaService.triggeredprovideractions
                    .insertTriggeredprovideractionObject({
                      providerAction: t.providerAction.id,
                    })
                    .pipe(
                      Object(S.Vc)(),
                      Object(l.a)((t) =>
                        this.retrieveTriggeredprovideractionObject(t),
                      ),
                      Object(h.a)((t) => t && t.state !== s.h.RUNNING),
                      Object(l.a)((t) =>
                        this.rudiOnlinemediaService.triggeredprovideractions
                          .deleteTriggeredprovideractionObject(t.id)
                          .pipe(Object(o.a)(() => t)),
                      ),
                      Object(o.a)((t) => t.state === s.h.DONE),
                      Object(u.a)(1),
                      Object(d.a)(
                        this.TRIGGERED_PROVIDER_ACTION_RESPONSE_TIMEOUT,
                      ),
                      Object(S.Qd)(this),
                    )
                    .subscribe((e) => {
                      e && t.successPopup
                        ? (this.logger.info(
                            `triggerProviderAction: successful: requesting ${t.successPopup}`,
                          ),
                          this.popupManagementService.request(t.successPopup))
                        : !e && t.failurePopup
                          ? (this.logger.info(
                              `triggerProviderAction: failed: requesting ${t.failurePopup}`,
                            ),
                            this.popupManagementService.request(t.failurePopup))
                          : this.logger.info(
                              `triggerProviderAction: no popup requested: success of triggeredProvideraction ${e}, popup id ${e ? t.successPopup : t.failurePopup}`,
                            );
                    })
                : this.logger.error(
                    "triggerProviderAction did not get a valid ProviderActionItem",
                  ));
          }
          retrieveTriggeredprovideractionObject(t) {
            return this.rudiOnlinemediaService.triggeredprovideractions
              .retrieveTriggeredprovideractionObjects({
                autosubscribe: !0,
                search: { id: t },
              })
              .pipe(
                Object(S.pd)(
                  this.logger,
                  "retrieveTriggeredprovideractionObject: retrieveTriggeredprovideractionObjects ",
                ),
                Object(o.a)((t) => {
                  if (t && t.data && 1 === t.data.length) return t.data[0];
                  this.logger.error(
                    "retrieveTriggeredprovideractionObject: Can not find requested provider action in ",
                    t,
                  );
                }),
                Object(h.a)(S.wd),
              );
          }
          mapProviderActionToActionItem(t) {
            const e = v.find((e) => e.type === t.type);
            return (e && (e.providerAction = t), e);
          }
          ngOnDestroy() {}
        }
        return (
          (t.ɵprov = b.bc({
            factory: function () {
              return new t(b.cc(a.g), b.cc(g.a), b.cc(p.a), b.cc(O.a));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    yD5m: function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return S;
      }),
        i("YAYS"));
      var s = i("16cj"),
        n = i("D6Ca"),
        a = i("Ngpk"),
        o = i("QQZH"),
        r = i("ROBh"),
        c = (i("YEwm"), i("Y0IF"), i("YtkY")),
        l = i("J+dc"),
        h = i("TLy2"),
        u = i("kuMc"),
        d = i("Yi6/"),
        p = i("H4ln");
      class S {
        constructor(t, e, i, a) {
          ((this.browserService = t),
            (this.entertainmentService = e),
            (this.radioRoutingService = i),
            (this.i18nBrowserCategoriesEnum = s.a),
            (this.browseEntryTypeEnum = n.g),
            (this.staticLastPlayedTile = {
              disabled: !1,
              textI18n: s.a.LAST_PLAYED,
              iconUrl: "E283_media_last_replay.webp",
            }),
            (this.countriesTile = {
              disabled: !1,
              textI18n: s.a.COUNTRIES,
              iconUrl: "EAB3_connect_webradio_countries.webp",
              type: n.g.FOLDERCOUNTRIES,
            }),
            (this.genresTile = {
              disabled: !1,
              textI18n: s.a.GENRES,
              iconUrl: "E828_media_genre.webp",
              type: n.g.FOLDERGENRES,
            }),
            (this.languagesTile = {
              disabled: !1,
              textI18n: s.a.LANGUAGES,
              iconUrl: "E80C_setup_sprache.webp",
              type: n.g.FOLDERLANGUAGES,
            }),
            (this.podcastsTile = {
              disabled: !1,
              textI18n: s.a.PODCASTS,
              iconUrl: "E044_media_podcasts.webp",
              type: n.g.FOLDERPODCASTS,
            }),
            (this.podcastsChinaTile = {
              disabled: !1,
              textI18n: s.a.PODCASTS,
              iconUrl: "E044_media_podcasts.webp",
              type: n.g.FOLDERCNPODCASTS,
            }),
            (this.top100Tile = {
              disabled: !1,
              textI18n: s.a.TOP_STATIONS,
              iconUrl: "E098_radio.webp",
              type: n.g.FOLDERTOP100,
            }),
            (this.themeTile = {
              disabled: !1,
              textI18n: s.a.THEME,
              iconUrl: "E034_audio_folder_music.webp",
              type: n.g.FOLDERTHEMES,
            }),
            (this.stationsByAreaTile = {
              disabled: !1,
              textI18n: s.a.STATIONSBYAREA,
              iconUrl: "E3AA_online_radio_by_region_cn.webp",
              type: n.g.FOLDERSTATIONSBYAREA,
            }),
            (this.categoryTypeToTileMap = new Map()),
            (this.destroyed$$ = new o.a(1)),
            (this.logger = a.getLogger("radio.OnlineBrowserTilesComponent")),
            this.categoryTypeToTileMap.set(
              n.g.FOLDERCOUNTRIES,
              this.countriesTile,
            ),
            this.categoryTypeToTileMap.set(n.g.FOLDERGENRES, this.genresTile),
            this.categoryTypeToTileMap.set(
              n.g.FOLDERLANGUAGES,
              this.languagesTile,
            ),
            this.categoryTypeToTileMap.set(
              n.g.FOLDERPODCASTS,
              this.podcastsTile,
            ),
            this.categoryTypeToTileMap.set(
              n.g.FOLDERCNPODCASTS,
              this.podcastsChinaTile,
            ),
            this.categoryTypeToTileMap.set(n.g.FOLDERTOP100, this.top100Tile),
            this.categoryTypeToTileMap.set(n.g.FOLDERTHEMES, this.themeTile),
            this.categoryTypeToTileMap.set(
              n.g.FOLDERSTATIONSBYAREA,
              this.stationsByAreaTile,
            ));
        }
        ngOnInit() {
          this.browserTiles$ = this.browserService.rootEntries$.pipe(
            Object(c.a)((t) =>
              t
                .map((t) => {
                  switch (t.type) {
                    case void 0:
                    case null:
                      return;
                    case n.g.FOLDER:
                      return {
                        disabled:
                          !!t.inaccessibleReasons &&
                          t.inaccessibleReasons.length > 0,
                        disabledReason: {
                          popup:
                            d.Ob
                              .POPUP_SETUP_DATA_MGT_PRIVACY_STAGED_BLOCKED_FUNCTION_POPUP,
                          requestedPopupData: {
                            data: { setting: p.c.GpsData },
                          },
                          type: d.A.SHOW_PRIVACY_POPUP,
                        },
                        id: t.id,
                        nonI18nText: t.displayName,
                        iconUrl: t.logo,
                        type: n.g.FOLDER,
                      };
                    default:
                      return this.categoryTypeToTileMap.get(t.type);
                  }
                })
                .filter(d.wd),
            ),
            Object(c.a)((t) => [this.staticLastPlayedTile, ...t]),
          );
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        back() {
          this.radioRoutingService.goToStationList();
        }
        tileClicked(t) {
          t === this.staticLastPlayedTile
            ? this.entertainmentService
                .sourcesForGroup$(a.c.TUNER)
                .pipe(
                  Object(l.a)(1),
                  Object(c.a)((t) =>
                    t ? t.find((t) => t.type === a.g.ONLINERADIO) : null,
                  ),
                  Object(h.a)((t) =>
                    t
                      ? this.entertainmentService.activateEntertainmentSource(t)
                      : Object(r.a)(!1),
                  ),
                  Object(u.a)(this.destroyed$$),
                )
                .subscribe((t) => {
                  t
                    ? this.radioRoutingService.goToStationList()
                    : this.logger.error(
                        "Could not activate entertainment source, because source could not be resolved",
                      );
                })
            : t.type &&
              this.browserService.rootEntries$
                .pipe(
                  Object(l.a)(1),
                  Object(c.a)((e) =>
                    e.find(
                      (e) => e.type === t.type && (!t.id || e.id === t.id),
                    ),
                  ),
                  Object(u.a)(this.destroyed$$),
                )
                .subscribe((t) => {
                  this.browserService.browseInto(t);
                });
        }
      }
    },
    yKnW: function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return a;
      }),
        i("DhLo"));
      var s = i("Yi6/"),
        n = i("kGpN");
      class a {
        constructor() {
          ((this.iconCategoryEnum = s.Z),
            (this.imageScaleMode = s.ab.Contain),
            (this.listItemType = s.rb.ITEM_TYPE_NO_END_ICON),
            (this.sourceUnit = s.vc.SECONDS),
            (this.formattingRule = n.a.DurationInHHMMSS),
            (this.active = !1));
        }
      }
    },
    yZtP: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return h;
      });
      var s = i("Yi6/"),
        n = i("YtkY"),
        a = i("8j5Y"),
        o = (i("nWgY"), i("ROBh")),
        r = i("YEwm"),
        c = i("D6Ca"),
        l = i("dhDN");
      class h {
        constructor(t, e, i) {
          ((this.siriusService = t),
            (this.radioRoutingService = e),
            (this.uiStateType = s.gd.isBentley
              ? s.uc.ListHorizontal
              : s.uc.ListVertical),
            (this.iconCategoryCover = s.Z.ListTwoline),
            (this.imageScaleMode = s.ab.Contain),
            (this.sdarsBrowserEntryTypeEnum = c.s),
            (this.logger = i.getLogger("SxmCategory")));
        }
        ngOnInit() {
          (this.logger.info("ngOnInit"),
            (this.categoryList$ = this.siriusService.categoryEntries$
              ? this.siriusService.categoryEntries$.pipe(
                  Object(n.a)((t) =>
                    t.filter(
                      (t) =>
                        !!t.type &&
                        (t.type === c.s.CATEGORY ||
                          t.type === c.s.LIVESPORTCATEGORY),
                    ),
                  ),
                  Object(a.a)((t) =>
                    this.logger.info("ngOnInit#categories:", t.length),
                  ),
                )
              : Object(o.a)([])));
        }
        categorySelected(t) {
          (this.logger.info("categorySelected#Selected: ", t),
            this.siriusService.selectEntry({
              type: l.b.SELECTION,
              browserEntry: t,
              supercategoryName:
                this.siriusService.selectedSuperCategoryName$$.value,
              categoryName: t.name,
              titleLineType: l.a.SXM_SUPERCAT_CATEGORY,
            }),
            this.radioRoutingService.goTo(r.b.Sirius.children.Stations));
        }
      }
    },
  },
]);
