(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    "16VP": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return i;
      });
      let i = (() => {
        class e {}
        return (
          (e.queryParamName = "playerMode"),
          (e.queryParamValue = "OSD"),
          e
        );
      })();
    },
    E2zj: function (e, t, r) {
      "use strict";
      (r.d(t, "c", function () {
        return k;
      }),
        r.d(t, "a", function () {
          return W;
        }),
        r.d(t, "b", function () {
          return q;
        }));
      var i = r("Ngpk"),
        o = r("qMQG"),
        n = r("AEBN"),
        a = r("Yi6/"),
        s = r("ROBh"),
        c = r("HM3f"),
        l = r("J+dc"),
        u = r("vAPC"),
        h = r("TLy2"),
        d = r("w0kG"),
        T = r("YtkY"),
        g = r("kuMc"),
        v = r("8j5Y"),
        S = r("Ohay"),
        b = r("xVbo"),
        p = r("jIqt"),
        O = r("0Woy"),
        m = r("P1io"),
        w = r("Y0IF"),
        R = r("9AQt"),
        y = r("n95y"),
        P = r("q5gU"),
        B = r("BKhx"),
        E = r("J7Kz"),
        A = r("4u8H"),
        C = r("hNdd"),
        j = r("gENa"),
        f = r("16VP"),
        L = (r("YIOi"), r("zRUB")),
        x = r("ZiU+"),
        I = r("2EJU"),
        $ = r("vcDZ"),
        N = r("74Ku"),
        F = r("kmon"),
        V = r("kZht"),
        M = r("igZ1"),
        G = r("1VvW"),
        D = r("yNay");
      const k = "tvStationId",
        W = {
          SourceSelection: { path: "source-selection" },
          GlobalSearch: {
            path: "global-search",
            textInputScreen: !0,
            directAccessVisibility: R.a.Hidden,
            statusbarSize: y.a.Minimized,
          },
          Player: {
            path: "player",
            children: {
              PlayviewOrNps: { path: "playview-nps", mainScreen: !0 },
              Loading: { path: "loading" },
              Error: { path: "error" },
              Options: {
                path: "options",
                children: {
                  Subtitle: { path: "subtitle", complexScreen: !0 },
                  AudioChannel: { path: "audiochannel", complexScreen: !0 },
                },
              },
            },
          },
          Init: { path: "init" },
          Browser: {
            path: "browser",
            children: {
              Tiles: { path: "tiles" },
              Error: { path: "error" },
              Loading: { path: "loading", skipHistory: !0 },
              List: { path: "list" },
              List2: { path: "list2" },
            },
          },
          Online: {
            path: "online",
            children: {
              Loading: { path: "loading" },
              Tiles: { path: "tiles" },
              List: { path: "list" },
              List2: { path: "list2" },
              Error: { path: "error" },
            },
          },
          Tv: {
            path: "tv",
            children: {
              TvInit: { path: "init" },
              TvEsm: { path: "esm" },
              Player: { path: "player" },
              TvTerminal: {
                path: "tv-terminal",
                complexScreen: !0,
                skipHistory: !0,
                textInputContexts: n.e.TIF_ID_26_TV_TERMINAL_MODES,
              },
              TvCasDisclaimer: { path: "tv-cas-disclaimer" },
              TvAudioSourceSelection: {
                path: "tv-audio-source-selection",
                complexScreen: !0,
              },
              TvEditList: { path: "edit-list", complexScreen: !0 },
              TvParentalHint: { path: "parental-hint" },
              TvStationClassification: {
                path: "station-classification",
                paramsNames: [k],
              },
              TvBrowser: { path: "browser" },
              TvSconHint: { path: "scon" },
            },
          },
          SconCallActiveWarning: { path: "media-scon-call-active-warning" },
          MyAudi: A.a,
          ExternalPlayer: P.a,
          MediaSettings: B.a,
        };
      let q = (() => {
        class e extends a.i {
          constructor(e, t, r, i, n, s, c, l, u, h) {
            (super(
              u,
              h.getLogger("media.MediaRoutingService"),
              m.s,
              W,
              o.a.MEDIA,
              a.Bb.MEDIA,
            ),
              (this.mediaService = e),
              (this.mediaStateService = t),
              (this.mediaBrowserService = r),
              (this.mediaOnlineBrowserService = i),
              (this.mediaNpsService = n),
              (this.entertainmentService = s),
              (this.bluetoothService = c),
              (this.tvService = l),
              this.subscribeToLoadingState(),
              this.subscribeToBrowserState(),
              this.subscribeToOnlineBrowserState(),
              this.subscribeToBluetoothState(),
              this.automaticSourceActivationTriggerSubscription(),
              setTimeout(() => {
                this.subscribeToSconCallInterruption();
              }, 3e3));
          }
          enterContext() {
            return this.lastActiveGroupWasTv()
              ? this.isContextActive
                ? this.enterContextInsideActiveTvContext()
                : this.enterContextOutsideActiveTvContext()
              : this.isContextActive &&
                  this.currentRouteSnapshot &&
                  this.currentRouteSnapshot === W.Player.children.PlayviewOrNps
                ? (this.logger.info(
                    "enterContext: Context already active - trigger PlayviewList",
                  ),
                  this.mediaNpsService.shouldShowNPS$$.next(!1),
                  Object(s.a)(!0).toPromise())
                : super.enterContext();
          }
          handleGoToFailure(e, t, r) {
            if (
              this.isSubRoute(
                W.MediaSettings.children.ChildLockSettingsMedia,
                e,
              )
            )
              return (
                this.logger.info(
                  `handleGoToFailure: ChildLock is not Logged In => Denied access to ${e.path}`,
                ),
                this.goTo(
                  W.MediaSettings.children.ChildLockSettingsMedia.children
                    .LogOn,
                  null,
                  r,
                )
              );
            switch (e) {
              case W.Tv.children.Player:
              case W.Tv.children.TvCasDisclaimer:
              case W.Tv.children.TvTerminal:
                return this.goToTvInit();
              case W.Player.children.Error:
              case W.Player.children.Loading:
              case W.Player.children.PlayviewOrNps:
                return (
                  this.logger.info(
                    "handleGoToFailure: calculate new route from player state. Failed route path : ",
                    e.path,
                  ),
                  this.mediaStateService.loadingState$
                    .pipe(
                      Object(l.a)(1),
                      Object(u.a)(1e3, Object(s.a)(C.a.INIT)),
                      Object(h.a)((t) => {
                        const r = this.playerRouteFromState(t);
                        return this.goToRedirectionRoute(r, e);
                      }),
                    )
                    .toPromise()
                );
              case W.Browser.children.Error:
              case W.Browser.children.Loading:
              case W.Browser.children.List:
              case W.Browser.children.List2:
              case W.Browser.children.Tiles:
                return (
                  this.logger.info(
                    "handleGoToFailure: calculate new route from browser state. Failed route path : ",
                    e.path,
                  ),
                  Object(c.b)(
                    this.mediaBrowserService.browserState$,
                    this.mediaBrowserService.browserPath$,
                  )
                    .pipe(
                      Object(l.a)(1),
                      Object(h.a)(([t, r]) => {
                        const i = this.browserRouteFromState(t, r);
                        return this.goToRedirectionRoute(i, e);
                      }),
                    )
                    .toPromise()
                );
              case W.Online.children.Error:
              case W.Online.children.Loading:
              case W.Online.children.List:
              case W.Online.children.List2:
              case W.Online.children.Tiles:
                return (
                  this.logger.info(
                    "handleGoToFailure: calculate new route from online browser state. Failed route path : ",
                    e.path,
                  ),
                  Object(c.b)(
                    this.mediaOnlineBrowserService.initialized$,
                    this.mediaOnlineBrowserService.hasBrowserError$,
                  )
                    .pipe(
                      Object(d.a)(this.mediaOnlineBrowserService.browserPath$),
                      Object(h.a)(([[t, r], i]) => {
                        const o = this.onlineBrowserRouteFromState(t, r, i);
                        return this.goToRedirectionRoute(o, e);
                      }),
                    )
                    .toPromise()
                );
              default:
                return super.handleGoToFailure(e);
            }
          }
          goToTvOsd() {
            const e = { navigationExtras: { queryParams: {} } };
            ((e.navigationExtras.queryParams[f.a.queryParamName] = F.a.OSD),
              this.goToTvRouteAccordingTunerState(void 0, e));
          }
          goToRedirectionRoute(e, t) {
            return e
              ? e === t
                ? (this.logger.warn(
                    'goToRedirectionRoute: Requested redirection to same route as intended - resolve to "false" to prevent an infinite loop',
                    Object(a.kd)(e),
                  ),
                  Object(s.a)(!1).toPromise())
                : (this.logger.info(
                    "goToRedirectionRoute: redirect to route",
                    Object(a.kd)(e),
                  ),
                  this.goTo(e))
              : (this.logger.error(
                  "goToRedirectionRoute: Could not match any browser route from state",
                ),
                Object(s.a)(!1).toPromise());
          }
          get currentScreenContext() {
            return this.isSubRoute(W.Browser, this.currentRouteSnapshot)
              ? j.a.NATIVE_BROWSER
              : this.isSubRoute(W.Online, this.currentRouteSnapshot)
                ? j.a.ONLINE_BROWSER
                : j.a.PLAYER;
          }
          goToNps() {
            return (
              this.mediaNpsService.shouldShowNPS$$.next(!0),
              this.mediaService.shouldWaitForPlayviewIndex$$.next(!1),
              this.tryGoTo(W.Player.children.PlayviewOrNps)
            );
          }
          goToPlayer(e = !1) {
            this.mediaStateService.loadingState$
              .pipe(
                Object(l.a)(1),
                Object(T.a)((e) => this.playerRouteFromState(e)),
                Object(g.a)(this.destroy$$),
              )
              .subscribe((t) => {
                if (this.isContextActive) {
                  const r = e ? a.Yb.Backward : a.Yb.Forward;
                  (this.logger.info(
                    `goToPlayer: Navigation to player using routing method "${r}"`,
                  ),
                    this.goToWithRoutingMethod(t, r)
                      .then((e) =>
                        this.logger.info(
                          `goToPlayer: Navigation to player route "${t.path}" successful`,
                          e,
                        ),
                      )
                      .catch((e) =>
                        this.logger.info("goToPlayer: Navigation failed", e),
                      ));
                } else
                  (this.logger.info(
                    'goToPlayer: media context is not active --\x3e navigation to player within context"',
                  ),
                    this.tryGoTo(t));
              });
          }
          goToBrowser() {
            Object(c.b)(
              this.mediaBrowserService.browserState$,
              this.mediaBrowserService.browserPath$,
            )
              .pipe(
                Object(T.a)(([e, t]) => this.browserRouteFromState(e, t)),
                Object(l.a)(1),
                Object(g.a)(this.destroy$$),
              )
              .subscribe((e) => {
                e
                  ? this.tryGoTo(e)
                  : this.logger.error(
                      "goToBrowser: Could not match any browser route from state",
                    );
              });
          }
          goToRootBrowser() {
            this.mediaService.activeSource$
              .pipe(
                Object(h.a)((e) =>
                  e
                    ? this.mediaBrowserService.activateBrowser(e.uri)
                    : (this.logger.error(
                        "goToRootBrowser: Cannot go to root browser due to invalid active source",
                      ),
                      Object(s.a)(!1)),
                ),
                Object(l.a)(1),
              )
              .subscribe((e) => {
                e
                  ? this.goToBrowser()
                  : this.logger.error(
                      "goToRootBrowser: Could not activate browser",
                    );
              });
          }
          lastActiveGroupWasTv() {
            return (
              this.entertainmentService.getLastActiveMediaTvGroup() === i.c.TV
            );
          }
          goToTvRouteAccordingTunerState(e, t) {
            return this.tvService.activeRsiTvTuner$
              .pipe(
                Object(u.a)(
                  1e3,
                  Object(s.a)(void 0).pipe(
                    Object(v.a)(() =>
                      this.logger.warn(
                        "goToTvRouteAccordingTunerState: Timeout occurred while requesting activeRsiTvTuner.",
                      ),
                    ),
                  ),
                ),
                Object(l.a)(1),
                Object(h.a)(
                  (r) => (
                    this.logger.info(
                      "goToTvRouteAccordingTunerState: rsiTvTuner:",
                      r,
                    ),
                    r
                      ? (this.logger.debug(
                          "goToTvRouteAccordingTunerState: RsiTvTuner state:",
                          r.state,
                        ),
                        this.tvService.isEsmState(r)
                          ? (this.logger.debug(
                              "goToTvRouteAccordingTunerState: Routing to ESM Component.",
                            ),
                            this.goToTvEsm())
                          : this.tvService.isCasState(r)
                            ? (this.logger.debug(
                                "goToTvRouteAccordingTunerState: Routing to CAS Component.",
                              ),
                              this.goToTvCasDisclaimer())
                            : (this.logger.debug(
                                "goToTvRouteAccordingTunerState: Routing to Player Component.",
                              ),
                              this.goTo(W.Tv.children.Player, e, t)))
                      : (this.logger.info(
                          "goToTvRouteAccordingTunerState: TV is not activated yet, go to init screen and activate.",
                        ),
                        this.goToTvInit())
                  ),
                ),
              )
              .toPromise();
          }
          goToTvBrowser() {
            return this.goTo(W.Tv.children.TvBrowser);
          }
          goToTvInit() {
            return this.goTo(W.Tv.children.TvInit);
          }
          goToTvTerminal() {
            return this.goTo(W.Tv.children.TvTerminal);
          }
          goToTvCasDisclaimer() {
            return this.goTo(W.Tv.children.TvCasDisclaimer);
          }
          goToTvEsm() {
            return this.goTo(W.Tv.children.TvEsm);
          }
          goToTvAudioSourceSelection() {
            return this.goTo(W.Tv.children.TvAudioSourceSelection);
          }
          goToTvParentalHint() {
            return this.goTo(W.Tv.children.TvParentalHint);
          }
          goToTvPlayerList() {
            const e = { navigationExtras: { queryParams: {} } };
            return (
              (e.navigationExtras.queryParams[f.a.queryParamName] = F.a.LIST),
              this.goToTvRouteAccordingTunerState(null, e)
            );
          }
          goToTvStationClassification(e) {
            return this.goTo(W.Tv.children.TvStationClassification, e);
          }
          goToTvSconHint() {
            return this.goTo(W.Tv.children.TvSconHint);
          }
          goToOnlineRootBrowser() {
            this.mediaService.activeSource$
              .pipe(
                Object(T.a)((e) =>
                  e
                    ? this.mediaOnlineBrowserService.activateOnlineBrowser(e)
                    : (this.logger.error(
                        "goToOnlineRootBrowser: Cannot go to online media root browser due to invalid active source",
                      ),
                      Object(s.a)(!1)),
                ),
                Object(l.a)(1),
              )
              .subscribe((e) => {
                e
                  ? this.goToOnlineBrowser(W.Online.children.Tiles)
                  : this.logger.error(
                      "goToOnlineRootBrowser: Could not activate online media browser",
                    );
              });
          }
          goToOnlineBrowserTiles() {
            this.goToOnlineBrowser(W.Online.children.Tiles);
          }
          goToOnlineBrowserList() {
            this.goToOnlineBrowser(
              super.currentRouteSnapshot === W.Online.children.List
                ? W.Online.children.List2
                : W.Online.children.List,
            );
          }
          enterContextInsideActiveTvContext() {
            return a.gd.isBentley &&
              this.currentRouteSnapshot === W.Tv.children.TvBrowser
              ? (this.logger.info(
                  "enterContextInsideActiveTvContext: routing to TV browser",
                ),
                this.goToTvBrowser())
              : this.currentRouteSnapshot === W.Tv.children.Player
                ? (this.logger.info(
                    "enterContextInsideActiveTvContext: current route is TV player switch to list",
                  ),
                  this.goToTvPlayerList())
                : (this.logger.info(
                    "enterContextInsideActiveTvContext: routing to TV according tuner state",
                  ),
                  this.goToTvRouteAccordingTunerState());
          }
          enterContextOutsideActiveTvContext() {
            const e = this.currentRoutingHistory;
            return e && this.isRoutingHistoryUrlParamPlayerModeOsd(e)
              ? (this.logger.info(
                  "enterContextOutsideActiveTvContext: osd router param is present in history -> redirect",
                ),
                this.goToTvRouteAccordingTunerState())
              : e && !this.isMainGroupTimerExpired()
                ? (this.logger.info(
                    "enterContextOutsideActiveTvContext: restore routing from history",
                  ),
                  this.goTo(e.routeInfo, e.routerParams, e.routingExtras))
                : (this.logger.info(
                    "enterContextOutsideActiveTvContext: routing to TV according tuner state",
                  ),
                  this.goToTvRouteAccordingTunerState());
          }
          isRoutingHistoryUrlParamPlayerModeOsd(e) {
            var t, r;
            return (
              !!(null ===
                (r =
                  null === (t = null == e ? void 0 : e.routingExtras) ||
                  void 0 === t
                    ? void 0
                    : t.navigationExtras) || void 0 === r
                ? void 0
                : r.queryParams) &&
              e.routingExtras.navigationExtras.queryParams[
                f.a.queryParamName
              ] === f.a.queryParamValue
            );
          }
          goToOnlineBrowser(e) {
            Object(c.b)(
              this.mediaOnlineBrowserService.initialized$,
              this.mediaOnlineBrowserService.hasBrowserError$,
            )
              .pipe(Object(l.a)(1), Object(g.a)(this.destroy$$))
              .subscribe(([t, r]) => {
                this.tryGoTo(
                  r
                    ? W.Online.children.Error
                    : t
                      ? e
                      : W.Online.children.Loading,
                );
              });
          }
          subscribeToBluetoothState() {
            this.bluetoothService.classicNodes$
              .pipe(
                Object(h.a)((e) => {
                  const t = e && e.length > 0 ? e[0] : void 0;
                  return t && t.isActive ? Object(s.a)(!0) : Object(s.a)(!1);
                }),
                Object(S.a)(),
                Object(d.a)(this.currentRoute$),
                Object(T.a)(
                  ([e, t]) => !e && this.isSubRoute(W.ExternalPlayer, t),
                ),
                Object(b.a)((e) => e),
              )
              .subscribe(() => {
                this.previousRouteSnapshot &&
                  this.tryGoTo(this.previousRouteSnapshot);
              });
          }
          subscribeToLoadingState() {
            this.mediaStateService.loadingState$
              .pipe(
                Object(d.a)(
                  this.currentRoute$.pipe(Object(p.a)({ path: "invalid" })),
                ),
                Object(b.a)(
                  ([, e]) =>
                    !e ||
                    e.path === W.Init.path ||
                    this.isSubRoute(W.Player, e) ||
                    this.isSubRoute(W.Tv, e),
                ),
                Object(T.a)(([e]) => this.playerRouteFromState(e)),
                Object(g.a)(this.destroy$$),
              )
              .subscribe((e) => this.tryGoTo(e));
          }
          automaticSourceActivationTriggerSubscription() {
            this.mediaService.activeSource$
              .pipe(
                Object(T.a)((e) => ({
                  activationState: e.activationState,
                  sourceState: e.sourceState,
                })),
                Object(O.a)(),
                Object(b.a)(
                  ([e, t]) =>
                    e.activationState === i.a.ACTIVATIONRUNNING &&
                    t.activationState === i.a.ACTIVE &&
                    t.sourceState === i.f.ACTIVE,
                ),
                Object(b.a)(
                  () =>
                    !!this.currentRouteSnapshot &&
                    this.currentRouteSnapshot.path === W.SourceSelection.path,
                ),
              )
              .subscribe(() => {
                (this.logger.info(
                  "automaticSourceActivationTriggerSubscription: triggered --\x3e goToPlayer",
                ),
                  this.goToPlayer(!0));
              });
          }
          playerRouteFromState(e) {
            switch (e) {
              case C.a.INIT:
                return W.Init;
              case C.a.ERROR:
                return W.Player.children.Error;
              case C.a.LOADING_SOURCE:
                return W.Player.children.Loading;
              case C.a.READY_PLAYVIEWORNPS:
                return W.Player.children.PlayviewOrNps;
              case C.a.TV_STATION_LIST:
                return W.Tv.children.Player;
              default:
                return W.Player.children.Loading;
            }
          }
          subscribeToBrowserState() {
            Object(c.b)(
              this.currentRoute$,
              this.mediaBrowserService.browserState$,
              this.mediaBrowserService.browserPath$,
              this.mediaBrowserService.browserSelectionActive$,
            )
              .pipe(
                Object(b.a)(([e, t, , r]) => this.filterValidRoutes(e, t, r)),
                Object(v.a)(([, e, , t]) => {
                  t &&
                    e === L.a.ERROR &&
                    this.mediaBrowserService.browserSelectionActive$$.next(!1);
                }),
                Object(T.a)(([, e, t]) => this.browserRouteFromState(e, t)),
                Object(S.a)(),
                Object(v.a)((e) =>
                  this.logger.info(
                    "browserRouteFromState: current browserScreenType",
                    e,
                  ),
                ),
                Object(g.a)(this.destroy$$),
              )
              .subscribe((e) => {
                e
                  ? this.tryGoTo(e)
                  : this.logger.error(
                      "browserRouteFromState: Could not match any browser route from state",
                    );
              });
          }
          filterValidRoutes(e, t, r) {
            const i = this.isSubRoute(W.Browser, e),
              o = i && (t === L.a.ERROR || !r);
            return (
              this.logger.info(
                `filterValidRoutes: isSubRoute=${i} [${e}], browserState=${t}, userSelectionActive=${r} => isValid=${o}`,
              ),
              o
            );
          }
          browserRouteFromState(e, t) {
            switch (e) {
              case L.a.ERROR:
                return W.Browser.children.Error;
              case L.a.READY:
                return t && t.length > 0
                  ? W.Browser.children.List
                  : W.Browser.children.Tiles;
              case L.a.LOADING:
                return W.Browser.children.Loading;
              case L.a.UNSUPPORTED:
                return (
                  this.logger.info(
                    "browserRouteFromState: browse not supported for the current source. Navigating to player.",
                  ),
                  this.goToPlayer(),
                  null
                );
              default:
                return (
                  this.logger.error(
                    "browserRouteFromState: invalid browser state. browser state: " +
                      e,
                  ),
                  null
                );
            }
          }
          subscribeToOnlineBrowserState() {
            Object(c.b)(
              this.mediaOnlineBrowserService.initialized$,
              this.mediaOnlineBrowserService.hasBrowserError$,
            )
              .pipe(
                Object(d.a)(this.currentRoute$),
                Object(b.a)(([[,], e]) => !e || this.isSubRoute(W.Online, e)),
                Object(d.a)(this.mediaOnlineBrowserService.browserPath$),
                Object(T.a)(([[[e, t]], r]) =>
                  this.onlineBrowserRouteFromState(e, t, r),
                ),
                Object(S.a)(),
                Object(g.a)(this.destroy$$),
              )
              .subscribe((e) => this.tryGoTo(e));
          }
          onlineBrowserRouteFromState(e, t, r) {
            return e
              ? t
                ? W.Online.children.Error
                : r && r.length > 0
                  ? W.Online.children.List
                  : W.Online.children.Tiles
              : W.Online.children.Loading;
          }
          subscribeToSconCallInterruption() {
            this.mediaService.sconCallActive$().subscribe((e) => {
              e
                ? this.tryGoTo(W.SconCallActiveWarning)
                : this.currentRouteSnapshot &&
                  this.currentRouteSnapshot.path ===
                    W.SconCallActiveWarning.path &&
                  this.goBack();
            });
          }
        }
        return (
          (e.ɵprov = V.bc({
            factory: function () {
              return new e(
                V.cc(M.a),
                V.cc($.a),
                V.cc(L.b),
                V.cc(x.a),
                V.cc(I.a),
                V.cc(w.a),
                V.cc(E.a),
                V.cc(N.a),
                V.cc(G.m),
                V.cc(D.a),
              );
            },
            token: e,
            providedIn: "root",
          })),
          e
        );
      })();
    },
    gENa: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return i;
      });
      var i = (function (e) {
        return (
          (e.NATIVE_BROWSER = "NATIVE_BROWSER"),
          (e.ONLINE_BROWSER = "ONLINE_BROWSER"),
          (e.PLAYER = "PLAYER"),
          e
        );
      })({});
    },
    kmon: function (e, t, r) {
      "use strict";
      (r.d(t, "b", function () {
        return a;
      }),
        r.d(t, "c", function () {
          return s;
        }),
        r.d(t, "a", function () {
          return c;
        }));
      var i = r("X4XO"),
        o = r("Yi6/"),
        n = r("zgYn");
      class a {
        constructor() {
          ((this.secondLineText = n.a.LIST),
            (this.playerMode = c.LIST),
            (this.animationState = o.Cd),
            (this.hasAudioState = !1));
        }
        static createTvPlayerStateWithOsdMode() {
          const e = new a();
          return (
            (e.secondLineText = n.a.NPS),
            (e.playerMode = c.OSD),
            (e.animationState = o.Bd),
            e
          );
        }
        static createTvPlayerStateWithListMode() {
          const e = new a();
          return (
            (e.secondLineText = n.a.LIST),
            (e.playerMode = c.LIST),
            (e.animationState = o.Cd),
            e
          );
        }
      }
      const s = new Map();
      (s.set(i.s.TV, n.a.LIST),
        s.set(i.s.FAVORITES, n.a.FAVORITES),
        s.set(i.s.RECENTS, n.a.RECENTS));
      var c = (function (e) {
        return (
          (e.LIST = "LIST"),
          (e.OSD = "OSD"),
          (e.FULLSCREEN = "FULLSCREEN"),
          e
        );
      })({});
    },
    zgYn: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return i;
      });
      var i = (function (e) {
        return (
          (e.LIST = "Senderliste"),
          (e.NPS = "Wiedergabe"),
          (e.RECENTS = "Letzte Sender"),
          (e.FAVORITES = "Favoriten"),
          e
        );
      })({});
    },
  },
]);
