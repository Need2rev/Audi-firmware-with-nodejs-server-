(window.webpackJsonp = window.webpackJsonp || []).push([
  [51],
  {
    EYwt: function (e, l, n) {
      "use strict";
      (n.r(l),
        n.d(l, "NaviSettingsModuleNgFactory", function () {
          return Ja;
        }));
      var t = n("kZht"),
        a = n("Yi6/");
      class i {
        constructor(e) {
          ((this.globalRoutingService = e),
            (this.informationText =
              "Please be noted that your number plate info will be sent to online server in order to use this service. The \u201ctraffic regulation\u201d service include the below sub-features: Notify or reminder you the restriction of a day when your car is limited to drive into certain road and area. The restriction will be presented in map for a while before route guidance started during the time period of the restriction. You could go to traffic list to check the number plate restriction of a day any time. The routing will automatically avoid the restricted road/area. When the unavoidable restricted area the routing will offer you the optional solution to reach your destination. In order to get the above services please input your license plate correctly. If some special characters not available in keyboard please input"));
        }
      }
      var o = n("QQZH"),
        u = n("J+dc"),
        s = n("kuMc"),
        r = n("AEBN"),
        c = n("ek5r"),
        b = n("1XOC");
      class d {
        constructor(e, l, n) {
          ((this.globalRoutingService = e),
            (this.activeRoute = l),
            (this.destroy$$ = new o.a(1)),
            (this.uiStateType = a.uc.CoverBottom),
            (this.chineseProvinceSymboleEnum = b.a),
            (this.tiles = [
              b.a.Beijing,
              b.a.Tianjin,
              b.a.Hebei,
              b.a.Shanxi,
              b.a.InnerMongolia,
              b.a.Liaoning,
              b.a.Jilin,
              b.a.Harbin,
              b.a.Shanghai,
              b.a.Jiangsu,
              b.a.Zhejiang,
              b.a.Anhui,
              b.a.Fujian,
              b.a.Jiangxi,
              b.a.Shandong,
              b.a.Henan,
              b.a.Hubei,
              b.a.Hunan,
              b.a.Guangdong,
              b.a.Guangxi,
              b.a.Hainan,
              b.a.Chongqing,
              b.a.Sichuan,
              b.a.Guizhou,
              b.a.Yunnan,
              b.a.Tibet,
              b.a.Shaanxi,
              b.a.Gansu,
              b.a.Qinghai,
              b.a.Ningxia,
              b.a.Xinjiang,
            ]),
            (this.logger = n.getLogger("navi.NprProvinceSelectionComponent")));
          const t = this.activeRoute.snapshot.params.selectedProvince;
          ((this.selectedProvinceIndex = Object(a.wd)(t)
            ? this.tiles.indexOf(t)
            : -1),
            -1 === this.selectedProvinceIndex &&
              (this.logger.error("Constructor: No match for previous province"),
              (this.selectedProvinceIndex = 0)));
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        tileTapped(e) {
          this.selectedProvinceIndex = e;
          const l = {};
          ((l.selectedProvince = this.tiles[e]),
            this.globalRoutingService.goBack(
              c.a.children.NprSetting.children.NprInput,
              l,
            ));
        }
      }
      class g {
        constructor(e, l, n, t, i, u) {
          ((this.trafficEventsSettingsService = e),
            (this.textInputService = l),
            (this.activeRoute = n),
            (this.globalRoutingService = t),
            (this.popupManager = i),
            (this.destroy$$ = new o.a(1)),
            (this.contextId = r.e.TIF_ID_158_NAVI_CAR_LICENSE_ASIA),
            (this.popupIdEnum = a.Ob),
            (this.logger = u.getLogger("navi.NprInputScreenComponent")),
            (this.inputField$ = this.textInputService.getInputField(
              "NPR_INPUT_FIELD",
              this.contextId,
            )));
        }
        ngOnInit() {
          this.activeRoute.snapshot.params.selectedProvince
            ? ((this.selectedProvince =
                this.activeRoute.snapshot.params.selectedProvince),
              this.logger.info(
                "ngOnInit: selectedProvince from params:",
                this.selectedProvince,
              ))
            : this.trafficEventsSettingsService.licensePlateCode$
                .pipe(Object(u.a)(1), Object(s.a)(this.destroy$$))
                .subscribe((e) => {
                  ((this.selectedProvince = e.province || b.a.Beijing),
                    this.logger.info(
                      "ngOnInit: selectedProvince from subject:",
                      this.selectedProvince,
                    ));
                });
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        goToProvinceSelection() {
          const e = {};
          ((e.selectedProvince = this.selectedProvince),
            this.globalRoutingService.goTo(
              c.a.children.NprSetting.children.NprInput.children.NprProvinces,
              e,
            ));
        }
        ok(e) {
          (this.trafficEventsSettingsService.avoidanceTurnOn &&
            ((this.trafficEventsSettingsService.avoidanceTurnOn = !1),
            Object(a.wd)(e) && "" !== e) &&
            this.trafficEventsSettingsService.updateRsiSetting({
              nprAvoidance: !0,
            }),
            Object(a.wd)(e) && this.firstSymbolIsLetter(e)
              ? (this.trafficEventsSettingsService.updateLicensePlateCode(
                  this.selectedProvince,
                  e,
                ),
                this.globalRoutingService.goBack(
                  void 0,
                  null,
                  this.routingExtras,
                ))
              : this.popupManager.request(
                  a.Ob.POPUP_NAV_ASIA_CN_NPR_LICENSE_INVALID,
                ));
        }
        firstSymbolIsLetter(e) {
          const l = e.charAt(0);
          return Object(a.wd)(l.match(/[a-z]/i));
        }
      }
      var h = n("kOff"),
        p = n("mzeX"),
        m = n("bkj4"),
        v = n("6dmc"),
        x = (function (e) {
          return (
            (e.OFF = "off"),
            (e.TRAFFIC = "traffic"),
            (e.COMPACT = "compact"),
            (e.COMPLETE = "complete"),
            e
          );
        })({}),
        f = (function (e) {
          return (
            (e.OFF = "off"),
            (e.LOW = "low"),
            (e.MID = "medium"),
            (e.HIGH = "high"),
            e
          );
        })({});
      const _ = {
          labelIdEnumType: m.b,
          items: [
            {
              itemId: 0,
              labelId: m.b.OFF.toString(),
              developerText: x.OFF.toString(),
            },
            {
              itemId: 1,
              labelId: m.b.TRAFFIC.toString(),
              developerText: x.TRAFFIC.toString(),
            },
            {
              itemId: 2,
              labelId: m.b.COMPACT.toString(),
              developerText: x.COMPACT.toString(),
            },
            {
              itemId: 3,
              labelId: m.b.COMPLETE.toString(),
              developerText: x.COMPLETE.toString(),
            },
          ],
        },
        C = {
          labelIdEnumType: p.d,
          items: [
            {
              itemId: 0,
              labelId: p.d.OFF.toString(),
              developerText: f.OFF.toString(),
            },
            {
              itemId: 1,
              labelId: p.d.LOW.toString(),
              developerText: f.LOW.toString(),
            },
            {
              itemId: 2,
              labelId: p.d.MID.toString(),
              developerText: f.MID.toString(),
            },
            {
              itemId: 3,
              labelId: p.d.HIGH.toString(),
              developerText: f.HIGH.toString(),
            },
          ],
        };
      var P = n("Eboi"),
        y = n("v5YV"),
        T = n("FCWj"),
        S = n("YEFf");
      class O {
        constructor(e, l, n, t, i, u, s) {
          ((this.routingService = e),
            (this.soundSettingsService = l),
            (this.audiosettingsService = n),
            (this.tourAnnouncementsService = t),
            (this.systemConfigService = i),
            (this.phoneService = u),
            (this.logService = s),
            (this.popupIdsEnum = a.Ob),
            (this.announcementModeEnum = m.b),
            (this.soundSettingPurposeEnum = p.g),
            (this.PopupIdsAudi = a.Ob),
            (this.environment = a.gd),
            (this.destroy$$ = new o.a(1)),
            (this.naviAnnouncementOptions = _),
            (this.selectedNaviAnnounceMode = _.items[0]),
            (this.attenuationNaviOptions = C),
            (this.selectedAttenuationNavi = C.items[0]),
            (this.naviAudioSettingsInitialized = !1),
            (this.defaultDisabledReason = { type: a.A.SHOW_POPUP }),
            (this.logger = this.logService.getLogger(
              "navi.AudioSettingComponent",
              [v.a.NAVAUDIO],
            )));
        }
        ngOnInit() {
          (this.audiosettingsService.initialized$
            .pipe(Object(s.a)(this.destroy$$))
            .subscribe((e) => (this.naviAudioSettingsInitialized = e)),
            this.audiosettingsService.setVolumeMenuMode(!0),
            (this.selectedNaviAnnounceMode =
              this.naviAnnouncementOptions.items[0]),
            this.audiosettingsService.announcementMode$
              .pipe(Object(s.a)(this.destroy$$))
              .subscribe((e) => {
                this.selectedNaviAnnounceMode =
                  this.naviAnnouncementOptions.items.find(
                    (l) => l.labelId === e,
                  );
              }),
            this.soundSettingsService.attenuationNavi$
              .pipe(Object(s.a)(this.destroy$$))
              .subscribe((e) => {
                (this.logger.info("ngOnInit:", e),
                  (this.attenuationNaviSetting = e),
                  (this.selectedAttenuationNavi = e
                    ? this.attenuationNaviOptions.items.find(
                        (l) => l.labelId === e.currentVal,
                      )
                    : void 0),
                  this.logger.info(
                    "ngOnInit: selectedAttenuationNavi:",
                    this.selectedAttenuationNavi,
                  ));
              }));
        }
        ngOnDestroy() {
          (this.audiosettingsService.setVolumeMenuMode(!1),
            this.destroy$$.next(),
            this.destroy$$.complete());
        }
        getAttenuationDisabledReason() {
          return (
            this.selectedNaviAnnounceMode && this.attenuationNaviSetting
              ? this.logger.debug(
                  `getDisabledReason: navi audiosettings initialized: ${this.naviAudioSettingsInitialized},\n                          selectedNaviAnnounceMode: ${this.selectedNaviAnnounceMode.labelId},\n                          attenuationNaviSetting: ${this.attenuationNaviSetting.restrictionReason}`,
                )
              : this.logger.debug(
                  `getDisabledReason: navi audiosettings initialized: ${this.naviAudioSettingsInitialized},\n                         attenuationNaviSetting:`,
                  this.attenuationNaviSetting,
                ),
            !this.naviAudioSettingsInitialized ||
            (this.attenuationNaviSetting &&
              this.attenuationNaviSetting.hasRestriction())
              ? a.Ob.POPUP_TONE_POPUP_UNAVAILABLE
              : a.Ob.POPUP_TONE_POPUP_NAV_ANNOUNCEMENTS_OFF
          );
        }
      }
      var I = n("pylq"),
        N = n("/SfN");
      const A = {
          labelIdEnumType: m.m,
          items: [
            {
              itemId: 0,
              labelId: m.m.AUTOMATIC.toString(),
              developerText: m.m.AUTOMATIC.toString(),
            },
            {
              itemId: 1,
              labelId: m.m.ALLOW.toString(),
              developerText: m.m.ALLOW.toString(),
            },
            {
              itemId: 2,
              labelId: m.m.AVOID.toString(),
              developerText: m.m.AVOID.toString(),
            },
          ],
        },
        M = {
          labelIdEnumType: m.k,
          items: [
            {
              itemId: 0,
              labelId: m.k.ALLOW.toString(),
              developerText: m.k.ALLOW.toString(),
            },
            {
              itemId: 1,
              labelId: m.k.AVOID.toString(),
              developerText: m.k.AVOID.toString(),
            },
          ],
        },
        D = {
          labelIdEnumType: m.l,
          items: [
            {
              itemId: 0,
              labelId: m.l.AUTOMATIC.toString(),
              developerText: m.l.AUTOMATIC.toString(),
            },
            {
              itemId: 1,
              labelId: m.l.MANUAL.toString(),
              developerText: m.l.MANUAL.toString(),
            },
          ],
        };
      class k {
        constructor(e, l, n, t, a) {
          ((this.routingService = e),
            (this.configService = l),
            (this.globalRouteOptionsService = n),
            (this.tourAnnouncementsService = t),
            (this.guidanceService = a),
            (this.congestionAvoidanceOptions = D),
            (this.generalAvoidOptions = M),
            (this.generalAvoidOptionsWithAutomatic = A),
            (this.hasBeenChanged = !1),
            (this.destroy$$ = new o.a(1)));
        }
        ngOnInit() {
          this.globalRouteOptionsService.globalRouteOptions$
            .pipe(Object(s.a)(this.destroy$$))
            .subscribe((e) => {
              e &&
                ((this.globalRouteOptions = e),
                (this.ferriesUsageItem = this.findAvoidOption(e.ferriesUsage)),
                (this.motorrailUsageItem = this.findAvoidOption(
                  e.motorrailUsage,
                )),
                (this.motorwayUsageItem = this.findAvoidOption(
                  e.motorwayUsage,
                )),
                (this.tollRoadsUsageItem = this.findAvoidOption(
                  e.tollRoadsUsage,
                )),
                (this.vignetteUsageItem = this.findAvoidOption(
                  e.vignetteUsage,
                )),
                (this.hovLanesUsageItem = this.findAvoidOption(
                  e.hovLanesUsage,
                )),
                (this.seasonalRestrictedRoadsUsageItem =
                  this.findAvoidOptionWithAutomatic(
                    e.seasonalRestrictedRoadsUsage,
                  )),
                (this.congestionAvoidanceItem =
                  this.congestionAvoidanceOptions.items.find(
                    (l) => l.labelId === e.congestionAvoidance,
                  )));
            });
        }
        ngOnDestroy() {
          (this.hasBeenChanged &&
            this.checkActualChanges() &&
            ((this.globalRouteOptions.congestionAvoidance =
              this.congestionAvoidanceItem &&
              this.congestionAvoidanceItem.labelId),
            (this.globalRouteOptions.ferriesUsage =
              this.ferriesUsageItem && this.ferriesUsageItem.labelId),
            (this.globalRouteOptions.motorrailUsage =
              this.motorrailUsageItem && this.motorrailUsageItem.labelId),
            (this.globalRouteOptions.motorwayUsage =
              this.motorwayUsageItem && this.motorwayUsageItem.labelId),
            (this.globalRouteOptions.seasonalRestrictedRoadsUsage =
              this.seasonalRestrictedRoadsUsageItem &&
              this.seasonalRestrictedRoadsUsageItem.labelId),
            (this.globalRouteOptions.tollRoadsUsage =
              this.tollRoadsUsageItem && this.tollRoadsUsageItem.labelId),
            (this.globalRouteOptions.vignetteUsage =
              this.vignetteUsageItem && this.vignetteUsageItem.labelId),
            (this.globalRouteOptions.hovLanesUsage =
              this.hovLanesUsageItem && this.hovLanesUsageItem.labelId),
            this.globalRouteOptionsService.resetGlobalRouteOptions(
              this.globalRouteOptions,
            ),
            this.guidanceService.guidanceState === N.c.Active &&
              this.tourAnnouncementsService.triggerRouteIsBeingCalculated()),
            this.destroy$$.next());
        }
        checkActualChanges() {
          return (
            (!!this.ferriesUsageItem &&
              this.ferriesUsageItem.labelId !==
                this.globalRouteOptions.ferriesUsage) ||
            (!!this.motorrailUsageItem &&
              this.motorrailUsageItem.labelId !==
                this.globalRouteOptions.motorrailUsage) ||
            (!!this.motorwayUsageItem &&
              this.motorwayUsageItem.labelId !==
                this.globalRouteOptions.motorwayUsage) ||
            (!!this.tollRoadsUsageItem &&
              this.tollRoadsUsageItem.labelId !==
                this.globalRouteOptions.tollRoadsUsage) ||
            (!!this.vignetteUsageItem &&
              this.vignetteUsageItem.labelId !==
                this.globalRouteOptions.vignetteUsage) ||
            (!!this.hovLanesUsageItem &&
              this.hovLanesUsageItem.labelId !==
                this.globalRouteOptions.hovLanesUsage) ||
            (!!this.seasonalRestrictedRoadsUsageItem &&
              this.seasonalRestrictedRoadsUsageItem.labelId !==
                this.globalRouteOptions.seasonalRestrictedRoadsUsage) ||
            (!!this.congestionAvoidanceItem &&
              this.congestionAvoidanceItem.labelId !==
                this.globalRouteOptions.congestionAvoidance)
          );
        }
        goBack() {
          this.routingService.goBack();
        }
        findAvoidOption(e) {
          if (e)
            for (const l of this.generalAvoidOptions.items)
              if (l.labelId === e) return l;
        }
        findAvoidOptionWithAutomatic(e) {
          if (e)
            for (const l of this.generalAvoidOptionsWithAutomatic.items)
              if (l.labelId === e) return l;
        }
        setFerriesUsage(e) {
          ((this.hasBeenChanged = !0), (this.ferriesUsageItem = e));
        }
        setMotorrailUsage(e) {
          ((this.hasBeenChanged = !0), (this.motorrailUsageItem = e));
        }
        setMotorwayUsage(e) {
          ((this.hasBeenChanged = !0), (this.motorwayUsageItem = e));
        }
        setTollRoadsUsage(e) {
          ((this.hasBeenChanged = !0), (this.tollRoadsUsageItem = e));
        }
        setVignetteUsage(e) {
          ((this.hasBeenChanged = !0), (this.vignetteUsageItem = e));
        }
        setCongestionAvoidance(e) {
          ((this.hasBeenChanged = !0), (this.congestionAvoidanceItem = e));
        }
        setSeasonalRestrictedUsage(e) {
          ((this.hasBeenChanged = !0),
            (this.seasonalRestrictedRoadsUsageItem = e));
        }
        setHovLaneUsage(e) {
          ((this.hasBeenChanged = !0), (this.hovLanesUsageItem = e));
        }
      }
      class L extends k {
        constructor(e, l, n, t, a) {
          (super(e, l, n, t, a),
            (this.routingService = e),
            (this.configService = l),
            (this.globalRouteOptionsService = n),
            (this.tourAnnouncementsService = t),
            (this.guidanceService = a));
        }
      }
      var E = n("tZUG"),
        R = n("1Eyf"),
        w = n("MddD"),
        z = n("O1dD"),
        U = n("fEDJ"),
        B = n("vsTE");
      class F {
        constructor(e, l, n, t) {
          ((this.routingService = e),
            (this.preferenceService = l),
            (this.functionAvailabilityService = n),
            (this.cdr = t),
            (this.NaviSettingsRoute = c.a),
            (this.popupIdsEnum = a.Ob),
            (this.preferenceObjectViewTypeEnum = R.k),
            (this.preferenceObjectStyleEnum = R.j),
            (this.mapViewItems = z.f),
            (this.mapColorItems = z.e),
            (this.autozoomItems = z.c),
            (this.satelliteBlocking = {
              lockingKey: { type: a.Eb.MAP_ADAPTION },
            }),
            (this.destroyed$$ = new o.a(1)));
        }
        ngOnInit() {
          (this.preferenceService.mapMode$
            .pipe(Object(s.a)(this.destroyed$$))
            .subscribe((e) => {
              ((this.selectedMapViewItem = this.mapViewItems.items.find(
                (l) => l.labelId === e,
              )),
                this.cdr.markForCheck());
            }),
            this.preferenceService.mapColor$
              .pipe(Object(s.a)(this.destroyed$$))
              .subscribe((e) => {
                ((this.selectedMapColorItem = this.mapColorItems.items.find(
                  (l) => l.labelId === e,
                )),
                  this.cdr.markForCheck());
              }),
            this.preferenceService.autoZoom$
              .pipe(Object(s.a)(this.destroyed$$))
              .subscribe((e) => {
                ((this.selectedAutozoomItem = this.autozoomItems.items.find(
                  (l) => Object(z.d)(l.labelId) === e,
                )),
                  this.cdr.markForCheck());
              }));
        }
        ngOnDestroy() {
          (this.destroyed$$.next(), this.destroyed$$.complete());
        }
        isDisabledForMoreThanNoConnectivityOnly(e) {
          return !(
            !e ||
            !e.existenceAndPopupAction.disabledReason ||
            (e.disabledReasons &&
              1 === e.disabledReasons.length &&
              e.disabledReasons.includes(w.e.NOCONNECTIVITY))
          );
        }
        setAutozoom(e) {
          this.preferenceService.setAutoZoom(Object(z.d)(e.labelId));
        }
      }
      var $ = n("jIqt"),
        V = n("YtkY"),
        j = n("Ohay"),
        H = n("sK8D"),
        Y = n("YBZc"),
        W = n("v3iu"),
        G = n("IOIz"),
        Z = n("rMdD"),
        K = n("2Uk/"),
        J = n("woiT"),
        X = n("H+fK"),
        Q = n("P1io"),
        q = n("fLNI"),
        ee = (function (e) {
          return ((e.Navigation = "Navigation"), (e.Settings = "Settings"), e);
        })({});
      class le {
        constructor(e, l, n, t, i, u, r, b, d, g, h, p, m, v) {
          ((this.settingsRoutingService = e),
            (this.routingService = l),
            (this.cdr = n),
            (this.routeInformationService = t),
            (this.etcService = i),
            (this.systemConfigService = u),
            (this.trafficMinimapSettingsService = r),
            (this.globalRouteOptionsService = b),
            (this.etronSettingsService = d),
            (this.etronRoutePlannerService = g),
            (this.titleTextEnum = ee),
            (this.NaviRoutes = H.b),
            (this.NaviSettingsRoute = c.a),
            (this.blockingKey = {
              lockingKey: { type: a.Eb.PRESENTATION_MODE },
            }),
            (this.isPNavServiceExisting = !1),
            (this.pNavDisabledReason = void 0),
            (this.trafficMiniMapExisting = !1),
            (this.trafficMiniMapDisabledReason = void 0),
            (this.nprExisting = !1),
            (this.nprDisabledReason = void 0),
            (this.eCallOprActive = !1),
            (this.destroy$$ = new o.a(1)),
            (this.logger = h.getLogger("navi.NaviSettingsComponent")),
            v.predictiveNavigationAvailability$
              .pipe(Object(s.a)(this.destroy$$))
              .subscribe((e) => {
                ((this.isPNavServiceExisting =
                  e.existenceAndPopupAction.existence),
                  (this.pNavDisabledReason =
                    e.existenceAndPopupAction.disabledReason),
                  this.cdr.markForCheck());
              }),
            v.trafficMiniMapAvailability$
              .pipe(Object(s.a)(this.destroy$$))
              .subscribe((e) => {
                ((this.trafficMiniMapExisting =
                  e.existenceAndPopupAction.existence),
                  (this.trafficMiniMapDisabledReason =
                    e.existenceAndPopupAction.disabledReason),
                  this.cdr.markForCheck());
              }),
            v.numberPlateRestrictionAvailability$
              .pipe(Object(s.a)(this.destroy$$))
              .subscribe((e) => {
                ((this.nprExisting = e.existenceAndPopupAction.existence),
                  (this.nprDisabledReason =
                    e.existenceAndPopupAction.disabledReason),
                  this.cdr.markForCheck());
              }),
            p.eCallOPRType$
              .pipe(
                Object($.a)(null),
                Object(V.a)((e) => !!e),
                Object(j.a)(),
                Object(s.a)(this.destroy$$),
              )
              .subscribe((e) => {
                (this.logger.info("constructor: eCallOprActive", e),
                  e && m.demoMode && m.setDemoMode(!1),
                  (this.eCallOprActive = e));
              }));
        }
        ngOnDestroy() {
          (this.destroy$$.next(),
            this.routeInformationService.saveToPersistence());
        }
        toggleEtronRoutePlanner(e) {
          (this.etronSettingsService.updateChargingStopsPlanning(e),
            this.etronRoutePlannerService.removeEtronNotifications(!0));
        }
        toggleTrafficBoardPopup(e) {
          (this.logger.info("toggleTrafficBoardPopup:", e),
            this.trafficMinimapSettingsService.setEnabled(e));
        }
        toggleHiPassDeviceAvailability(e) {
          this.globalRouteOptionsService.updateGlobalRouteOptions({
            etcOnlyRoadsUsage: e ? m.k.ALLOW : m.k.AVOID,
          });
        }
        goBack() {
          this.routingService.goBack();
        }
        routeInformationVisibilityChanged(e) {
          this.routeInformationService.setRouteInformationVisibility(e);
        }
        goToRouteInformation() {
          this.routingService.goTo(c.a.children.RouteInformation);
        }
        get isSettingsContext() {
          return this.routingService.activeAppContextSnapshot === Q.z;
        }
      }
      var ne = n("D57K"),
        te = n("HPQH");
      class ae {
        constructor(e, l, n, t, i) {
          ((this.routingService = e),
            (this.popupManager = l),
            (this.pnavSettingService = n),
            (this.functionAvailabilityService = t),
            (this.listItemType = a.rb.ITEM_TYPE_SWITCH_INFO),
            (this.popupIdPnavDeleteAll =
              a.Ob.POPUP_NAV_SETTINGS_PNAV_DELETE_ALL),
            (this.toastIdPnavDeleteAll =
              a.Ob.POPUP_NAV_SETTINGS_PNAV_DELETE_ALL_OK),
            (this.toastIdPnavDelete24h =
              a.Ob.POPUP_NAV_SETTINGS_PNAV_DELETE_24H),
            (this.uiStateType = a.uc.ListHorizontal),
            (this.NaviSettingsRoutes = c.a),
            (this.logger = i.getLogger(
              "navi.PersonalRouteAssistantComponent",
            )));
        }
        onRouteAssistanceEnabledChange(e) {
          e
            ? this.pnavSettingService.enablePnav()
            : this.pnavSettingService.disablePnav();
        }
        onAllRecordsDeleteTap() {
          this.handleDeleteAllPopup()
            .then((e) => {
              (this.logger.info(
                "onAllRecordsDeleteTap: delete all pnav entries?",
                e,
              ),
                e &&
                  (this.pnavSettingService.deleteAll(),
                  this.popupManager.request(this.toastIdPnavDeleteAll)));
            })
            .catch((e) => {
              this.logger.error(
                "onAllRecordsDeleteTap: error in handling popup",
                e,
              );
            });
        }
        onLast24hRecordsDeleteTap() {
          (this.pnavSettingService.deleteLast24Hours(),
            this.popupManager.request(this.toastIdPnavDelete24h));
        }
        handleDeleteAllPopup() {
          return Object(ne.a)(this, void 0, void 0, function* () {
            const e = yield this.activateDeleteAllPopup();
            return e
              ? e.action === a.Nb.YES
                ? (yield e.hidden, Promise.resolve(!0))
                : Promise.resolve(!1)
              : Promise.reject(
                  "handleDeleteAllPopup: invalid return message received",
                );
          });
        }
        activateDeleteAllPopup() {
          return Object(ne.a)(this, void 0, void 0, function* () {
            return (
              this.logger.info(
                "activateDeleteAllPopup: Delete all? -> waiting for user interaction",
              ),
              this.popupManager.request(this.popupIdPnavDeleteAll)
            );
          });
        }
      }
      var ie = n("ROBh"),
        oe = n("TLy2");
      class ue {
        constructor(e, l, n, t, a) {
          ((this.routingService = e),
            (this.disclaimerService = l),
            (this.lockingService = n),
            (this.demoModeSettingsService = t),
            (this.textInputService = a),
            (this.NaviRoutes = H.b),
            (this.destroy$$ = new o.a(1)),
            this.initialSubscriptions());
        }
        initialSubscriptions() {
          const e = this.lockingService
            .getProperty({ type: a.Eb.PRESENTATION_MODE })
            .pipe(
              Object(oe.a)((e) => e.lock$),
              Object(s.a)(this.destroy$$),
            );
          this.disclaimerSubscription =
            this.disclaimerService.registerDisclaimer({
              priority: a.D.LockingPresentationMode,
              reason$: Object(ie.a)(a.B.LOCKING),
              enabled$: e,
            });
        }
        ngOnDestroy() {
          (this.destroy$$.next(),
            this.disclaimerSubscription &&
              this.disclaimerService.unregisterDisclaimer(
                this.disclaimerSubscription,
              ));
        }
      }
      class se {
        constructor(e, l) {
          ((this.routingService = e), (this.routeInformationService = l));
        }
        ngOnDestroy() {
          this.routeInformationService.saveToPersistence();
        }
      }
      class re {
        constructor(e, l, n, t) {
          ((this.routingService = e),
            (this.systemConfigService = l),
            (this.preferenceService = n),
            (this.functionAvailabilityService = t));
        }
        ngOnInit() {
          ((this.trafficSettings$ = this.preferenceService.trafficSettings$),
            (this.functionAvailable$ =
              this.functionAvailabilityService.trafficAvailability$.pipe(
                Object(V.a)(
                  (e) =>
                    !e.existenceAndPopupAction ||
                    (e.existenceAndPopupAction.existence &&
                      !e.existenceAndPopupAction.disabledReason),
                ),
                Object(j.a)(),
              )));
        }
        onSettingChanged(e, l, n) {
          this.preferenceService.setTrafficSettings({
            speedFlowFreeFlow: !!l && e,
            speedFlowCongestions: l,
            tmc: n,
          });
        }
      }
      var ce = n("3YUg");
      const be = [
        { itemId: 0, labelId: ce.a.Five, developerText: ce.a.Five },
        { itemId: 1, labelId: ce.a.Ten, developerText: ce.a.Ten },
        { itemId: 2, labelId: ce.a.Fifteen, developerText: ce.a.Fifteen },
      ];
      class de {
        constructor(e, l, n, t, a) {
          ((this.etcService = e),
            (this.itsService = l),
            (this.routingService = n),
            (this.popupManager = t),
            (this.logService = a),
            (this.itsPopupDurations = { labelIdEnumType: ce.a, items: be }),
            (this.destroy$$ = new o.a(1)),
            (this.logger = this.logService.getLogger(
              "navi.ItsSpotSettingComponent",
              [v.a.NAVVICS],
            )));
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        toggleUploadFunction(e) {
          e
            ? this.etcService
                .toggleUploadFunction()
                .pipe(Object(s.a)(this.destroy$$))
                .subscribe((e) => this.logger.info("toggleUploadFunction:", e))
            : this.popupManager
                .request(a.Ob.POPUP_ETC_DISABLE_DATA_UPLOAD)
                .then((e) => {
                  (this.logger.info(
                    "toggleUploadFunction: Etc disable upload popup return message:",
                    e,
                  ),
                    e &&
                      null !== e.action &&
                      e.action === a.Nb.OK &&
                      this.etcService
                        .toggleUploadFunction()
                        .pipe(Object(s.a)(this.destroy$$))
                        .subscribe((e) =>
                          this.logger.info("toggleUploadFunction:", e),
                        ));
                });
        }
      }
      class ge extends k {
        constructor(e, l, n, t, a) {
          (super(e, l, n, t, a),
            (this.routingService = e),
            (this.configService = l),
            (this.globalRouteOptionsService = n),
            (this.tourAnnouncementsService = t),
            (this.guidanceService = a));
        }
      }
      class he {
        constructor(e, l, n) {
          ((this.trafficeventSettingService = e),
            (this.globalRoutingService = l),
            (this.NaviRoutes = H.b),
            (this.NaviSettingsRoute = c.a),
            (this.destroy$$ = new o.a(1)),
            (this.logger = n.getLogger("navi.NprSettingComponent")));
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        toggleNprAvoidance(e, l) {
          e && this.isPlateCodeInvalid(l)
            ? (this.logger.info(
                "toggleNprAvoidance: invalid license plate code. Will redirect to NaviSettingsRoute.children.NprSetting.children.NprInput...",
              ),
              (this.trafficeventSettingService.avoidanceTurnOn = !0),
              this.globalRoutingService.goTo(
                c.a.children.NprSetting.children.NprInput,
              ))
            : (this.logger.info(
                "toggleNprAvoidance: attempt to update setting to new value: ",
                e,
              ),
              this.trafficeventSettingService.updateRsiSetting({
                nprAvoidance: e,
              }));
        }
        isPlateCodeInvalid(e) {
          return (
            Object(a.rd)(e) ||
            Object(a.rd)(e.code) ||
            "" === e.code ||
            Object(a.rd)(e.province) ||
            "" === e.province
          );
        }
        getLicensePlateString(e) {
          return Object(a.wd)(e) &&
            Object(a.wd)(e.province) &&
            "" !== e.province &&
            Object(a.wd)(e.code) &&
            "" !== e.code
            ? e.province + e.code
            : "";
        }
      }
      class pe {
        constructor(e, l) {
          ((this.etronSettingsService = e),
            (this.routingService = l),
            (this.listItemType = a.rb),
            (this.NaviSettingsRoute = c.a));
        }
        toggleEtronChargingServiceStationsPreferred(e) {
          this.etronSettingsService.updateEtronChargingServiceStationsPreferred(
            e,
          );
        }
      }
      class me {
        constructor(e) {
          ((this.globalRoutingService = e),
            (this.informationText =
              "Bei Aktivierung werden Ladestationen des e-tron\nCharging Service in der Routenberechnung pr\xe4feriert.\nFalls keine entsprechenden Lades\xe4ulen verf\xfcgbar\nsind, werden auch andere Ladestationen pr\xe4feriert."));
        }
      }
      class ve {
        constructor(e) {
          ((this.globalRoutingService = e),
            (this.informationText =
              "F\xfcr die Ladestoppplanung und routenbasierte\nReichweitenberechnung wird als maximaler\nVerbrauch der auf limitierten Autobahnen\nangenommen."));
        }
      }
      class xe {
        constructor(e) {
          ((this.globalRoutingService = e),
            (this.informationText =
              "Bei aktiver pers\xf6nlicher Routenassistenz werden Ihre\nFahrten aufgezeichnet.Ihnen werden Ziele\nvorgeschlagen und die Verkehrslage wird f\xfcr Ihre\nRoute \xfcberwacht"));
        }
      }
      class fe {}
      var _e = n("C9Ky"),
        Ce = n("4XZL"),
        Pe = n("OtM5"),
        ye = n("9ZFG"),
        Te = n("yNay"),
        Se = n("bMuc"),
        Oe = n("fu7d"),
        Ie = n("bou3"),
        Ne = n("ZIdM"),
        Ae = n("3bpu"),
        Me = n("6zvu"),
        De = n("VcEz"),
        ke = n("y9xZ"),
        Le = n("+sw+"),
        Ee = n("BMrr"),
        Re = n("IEns"),
        we = n("6480"),
        ze = n("FfND"),
        Ue = n("oeT7"),
        Be = n("t7cT"),
        Fe = n("z6QT"),
        $e = n("flsk"),
        Ve = n("FQEI"),
        je = n("O82V"),
        He = n("Eln4"),
        Ye = n("evAh"),
        We = n("URLa"),
        Ge = n("CpzC"),
        Ze = n("0Bsn"),
        Ke = n("5GjX"),
        Je = n("mYyF"),
        Xe = n("v98a"),
        Qe = n("aOG8"),
        qe = n("Krzs"),
        el = n("QSdq"),
        ll = n("D0GA"),
        nl = n("GAHT"),
        tl = n("AH9k"),
        al = n("An66"),
        il = n("N2Hj"),
        ol = n("UbWD"),
        ul = n("2rvh"),
        sl = n("odRV"),
        rl = n("Udyh"),
        cl = n("I3ve"),
        bl = n("qiAR"),
        dl = n("007S"),
        gl = n("oxWk"),
        hl = n("Tr//"),
        pl = n("E7cc"),
        ml = n("Z2XD"),
        vl = n("VUTu"),
        xl = n("nK9R"),
        fl = n("qzuC"),
        _l = n("8yWk"),
        Cl = n("8WOv"),
        Pl = n("1pak"),
        yl = n("P+G5"),
        Tl = n("ijxY"),
        Sl = n("zPMi"),
        Ol = n("0qMr"),
        Il = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;display:block;height:100%;width:100%}.screen[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;font-size:40px}.settings-list__toggle-item[_ngcontent-%COMP%]{padding:0 20px}.settings-list__item[_ngcontent-%COMP%]{height:100px}",
            ],
          ],
          data: {},
        });
      function Nl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-list-route-item",
              [
                ["class", "settings-list__item"],
                ["id", "TrafficRegulationAssistant"],
                ["titleDeveloperText", "Number Plate Restriction"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              Ce.b,
              Ce.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(2, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              we.a,
              [ze.a, Ue.i, Pe.a, Me.a, we.b, Be.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              114688,
              null,
              0,
              We.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, void 0 !== n.nprDisabledReason, n.nprDisabledReason),
              e(l, 3, 0, "TrafficRegulationAssistant"),
              e(l, 5, 0),
              e(l, 6, 0, n.NaviSettingsRoute.children.NprSetting),
              e(l, 8, 0),
              e(l, 9, 0, "Number Plate Restriction"));
          },
          function (e, l) {
            e(
              l,
              0,
              0,
              t.Nb(l, 1).combinedDisabled,
              t.Nb(l, 1).useBrighterIcon,
              t.Nb(l, 8).markerClassEnabled,
            );
          },
        );
      }
      function Al(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-list-switch-item",
              [
                ["class", "settings-list__item"],
                ["developerText", "e-tron Routenplaner"],
                ["id", "EtronRouteplannerAsia"],
              ],
              null,
              [[null, "valueChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "valueChange" === l &&
                    (t = !1 !== e.component.toggleEtronRoutePlanner(n) && t),
                  t
                );
              },
              el.b,
              el.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ll.a,
              [[2, Pe.a]],
              { developerText: [0, "developerText"], value: [1, "value"] },
              { valueChange: "valueChange" },
            ),
          ],
          function (e, l) {
            (e(l, 1, 0, "EtronRouteplannerAsia"),
              e(
                l,
                2,
                0,
                "e-tron Routenplaner",
                l.parent.parent.context.mib3Let.etronRoutePlannerEnabled,
              ));
          },
          null,
        );
      }
      function Ml(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-list-route-switch-item",
              [
                ["class", "settings-list__item"],
                ["id", "EtronRouteplanner"],
                ["titleDeveloperText", "e-tron Routenplaner"],
              ],
              null,
              [[null, "valueChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "valueChange" === l &&
                    (t = !1 !== e.component.toggleEtronRoutePlanner(n) && t),
                  t
                );
              },
              nl.b,
              nl.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              114688,
              null,
              0,
              tl.a,
              [],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                subtitleHasText: [1, "subtitleHasText"],
                value: [2, "value"],
                routeDisabled: [3, "routeDisabled"],
                route: [4, "route"],
              },
              { valueChange: "valueChange" },
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "EtronRouteplanner"),
              e(
                l,
                2,
                0,
                "e-tron Routenplaner",
                !1,
                l.parent.parent.context.mib3Let.etronRoutePlannerEnabled,
                !l.parent.parent.context.mib3Let.etronRoutePlannerEnabled,
                n.NaviSettingsRoute.children.EtronRoutePlannerSettings,
              ));
          },
          null,
        );
      }
      function Dl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, Al)),
            t.xb(
              2,
              16384,
              null,
              0,
              al.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(),
            t.hb(
              0,
              [
                [1, 2],
                ["notAsia", 2],
              ],
              null,
              0,
              null,
              Ml,
            )),
          ],
          function (e, l) {
            e(l, 2, 0, l.parent.context.mib3Let.isAsia, t.Nb(l, 3));
          },
          null,
        );
      }
      function kl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-list-route-item",
              [
                ["class", "settings-list__item"],
                ["id", "PersonalRouteAssistant"],
                ["titleDeveloperText", "Pers\xf6nliche Routenassistenz"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              Ce.b,
              Ce.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(2, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              we.a,
              [ze.a, Ue.i, Pe.a, Me.a, we.b, Be.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              114688,
              null,
              0,
              We.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, void 0 !== n.pNavDisabledReason, n.pNavDisabledReason),
              e(l, 3, 0, "PersonalRouteAssistant"),
              e(l, 5, 0),
              e(l, 6, 0, n.NaviSettingsRoute.children.PersonalRouteAssistant),
              e(l, 8, 0),
              e(l, 9, 0, "Pers\xf6nliche Routenassistenz"));
          },
          function (e, l) {
            e(
              l,
              0,
              0,
              t.Nb(l, 1).combinedDisabled,
              t.Nb(l, 1).useBrighterIcon,
              t.Nb(l, 8).markerClassEnabled,
            );
          },
        );
      }
      function Ll(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-list-route-item",
              [
                ["class", "settings-list__item"],
                ["id", "ItsSpotSetting"],
                ["titleDeveloperText", "ITS spot Setting"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              Ce.b,
              Ce.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              null,
              null,
            ),
            t.xb(2, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              we.a,
              [ze.a, Ue.i, Pe.a, Me.a, we.b, Be.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              114688,
              null,
              0,
              We.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 3, 0, "ItsSpotSetting"),
              e(l, 5, 0),
              e(l, 6, 0, n.NaviSettingsRoute.children.ItsSpotSetting),
              e(l, 8, 0),
              e(l, 9, 0, "ITS spot Setting"));
          },
          function (e, l) {
            e(
              l,
              0,
              0,
              t.Nb(l, 1).combinedDisabled,
              t.Nb(l, 1).useBrighterIcon,
              t.Nb(l, 8).markerClassEnabled,
            );
          },
        );
      }
      function El(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-list-switch-item",
              [
                ["class", "settings-list__item"],
                ["developerText", "Traffic Board Popup"],
                ["id", "TrafficBoardPopup"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "valueChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "valueChange" === l &&
                    (t = !1 !== e.component.toggleTrafficBoardPopup(n) && t),
                  t
                );
              },
              el.b,
              el.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(
              3,
              49152,
              null,
              0,
              ll.a,
              [[2, Pe.a]],
              { developerText: [0, "developerText"], value: [1, "value"] },
              { valueChange: "valueChange" },
            ),
            t.Pb(131072, al.b, [t.h]),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "TrafficBoardPopup"),
              e(
                l,
                2,
                0,
                void 0 !== n.trafficMiniMapDisabledReason,
                n.trafficMiniMapDisabledReason,
              ),
              e(
                l,
                3,
                0,
                "Traffic Board Popup",
                t.Yb(
                  l,
                  3,
                  1,
                  t
                    .Nb(l, 4)
                    .transform(n.trafficMinimapSettingsService.enabled$),
                ),
              ));
          },
          function (e, l) {
            e(l, 0, 0, t.Nb(l, 2).combinedDisabled, t.Nb(l, 2).useBrighterIcon);
          },
        );
      }
      function Rl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-list-switch-item",
              [
                ["class", "settings-list__item"],
                ["developerText", "HiPass Device Availability"],
                ["id", "HiPassDeviceAvailability"],
              ],
              null,
              [[null, "valueChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "valueChange" === l &&
                    (t =
                      !1 !== e.component.toggleHiPassDeviceAvailability(n) &&
                      t),
                  t
                );
              },
              el.b,
              el.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ll.a,
              [[2, Pe.a]],
              { developerText: [0, "developerText"], value: [1, "value"] },
              { valueChange: "valueChange" },
            ),
            t.Pb(131072, al.b, [t.h]),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "HiPassDeviceAvailability"),
              e(
                l,
                2,
                0,
                "HiPass Device Availability",
                t.Yb(
                  l,
                  2,
                  1,
                  t
                    .Nb(l, 3)
                    .transform(n.globalRouteOptionsService.hiPassSetting$),
                ),
              ));
          },
          null,
        );
      }
      function wl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              69,
              "au3-list",
              [["class", "settings-list"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              il.b,
              il.a,
            )),
            t.Sb(6144, null, ol.a, null, [ul.a]),
            t.xb(2, 16384, null, 0, sl.a, [t.l], null, null),
            t.xb(
              3,
              12828672,
              null,
              1,
              ul.a,
              [
                [2, rl.a],
                [2, cl.a],
                [8, null],
                [2, Oe.a],
                [2, bl.a],
                [2, dl.a],
                [2, De.b],
                Ue.i,
                t.z,
                t.h,
                Te.a,
                gl.a,
                hl.a,
                [2, Ve.a],
                Ae.a,
                [2, Ue.a],
              ],
              null,
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (e()(), t.hb(16777216, [[1, 2]], 0, 1, null, Nl)),
            t.xb(
              6,
              16384,
              null,
              0,
              al.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            t.yb(
              7,
              0,
              null,
              0,
              11,
              "au3-list-route-item",
              [
                ["class", "settings-list__item"],
                ["id", "MapSettings"],
                ["titleDeveloperText", "Map Settings"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              Ce.b,
              Ce.a,
            )),
            t.xb(
              8,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              null,
              null,
            ),
            t.xb(9, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              10,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              12,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              null,
            ),
            t.xb(
              13,
              671744,
              null,
              0,
              we.a,
              [ze.a, Ue.i, Pe.a, Me.a, we.b, Be.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              15,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              16,
              114688,
              null,
              0,
              We.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              18,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              19,
              0,
              null,
              0,
              11,
              "au3-list-route-item",
              [
                ["class", "settings-list__item"],
                ["id", "AnnouncementSettings"],
                ["titleDeveloperText", "Announcement Settings"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              Ce.b,
              Ce.a,
            )),
            t.xb(
              20,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              null,
              null,
            ),
            t.xb(21, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              22,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              23,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              24,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              null,
            ),
            t.xb(
              25,
              671744,
              null,
              0,
              we.a,
              [ze.a, Ue.i, Pe.a, Me.a, we.b, Be.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              27,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              28,
              114688,
              null,
              0,
              We.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
            t.xb(
              29,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              30,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              31,
              0,
              null,
              0,
              11,
              "au3-list-route-item",
              [
                ["class", "settings-list__item"],
                ["id", "RouteCriteria"],
                ["titleDeveloperText", "Routenkriterien"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              Ce.b,
              Ce.a,
            )),
            t.xb(
              32,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              null,
              null,
            ),
            t.xb(33, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              34,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              35,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              36,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              null,
            ),
            t.xb(
              37,
              671744,
              null,
              0,
              we.a,
              [ze.a, Ue.i, Pe.a, Me.a, we.b, Be.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              39,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              40,
              114688,
              null,
              0,
              We.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
            t.xb(
              41,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              42,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], 0, 2, null, Dl)),
            t.xb(
              44,
              16384,
              null,
              0,
              al.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Pb(131072, al.b, [t.h]),
            (e()(),
            t.yb(
              46,
              0,
              null,
              0,
              2,
              "au3-list-route-switch-item",
              [
                ["class", "settings-list__item"],
                ["id", "RoutInformation"],
                ["titleDeveloperText", "Routeninformation"],
              ],
              null,
              [[null, "valueChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "valueChange" === l &&
                    (t =
                      !1 !== e.component.routeInformationVisibilityChanged(n) &&
                      t),
                  t
                );
              },
              nl.b,
              nl.a,
            )),
            t.xb(
              47,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              48,
              114688,
              null,
              0,
              tl.a,
              [],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                subtitleHasText: [1, "subtitleHasText"],
                value: [2, "value"],
                routeDisabled: [3, "routeDisabled"],
                route: [4, "route"],
              },
              { valueChange: "valueChange" },
            ),
            (e()(), t.hb(16777216, [[1, 2]], 0, 1, null, kl)),
            t.xb(
              50,
              16384,
              null,
              0,
              al.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], 0, 1, null, Ll)),
            t.xb(
              52,
              16384,
              null,
              0,
              al.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], 0, 1, null, El)),
            t.xb(
              54,
              16384,
              null,
              0,
              al.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], 0, 1, null, Rl)),
            t.xb(
              56,
              16384,
              null,
              0,
              al.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            t.yb(
              57,
              0,
              null,
              0,
              12,
              "au3-list-route-item",
              [
                ["class", "settings-list__item"],
                ["id", "PresentationMode"],
                ["titleDeveloperText", "Presentation mode"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              Ce.b,
              Ce.a,
            )),
            t.xb(
              58,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(59, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              60,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              61,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              62,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              null,
            ),
            t.xb(
              63,
              671744,
              null,
              0,
              we.a,
              [ze.a, Ue.i, Pe.a, Me.a, we.b, Be.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              65,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              66,
              114688,
              null,
              0,
              We.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
            t.xb(
              67,
              671744,
              null,
              0,
              pl.a,
              [Pe.a, Ue.i, [2, Ue.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            t.xb(
              68,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              69,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 3, 0),
              e(l, 6, 0, n.nprExisting),
              e(l, 10, 0, "MapSettings"),
              e(l, 12, 0),
              e(l, 13, 0, n.NaviSettingsRoute.children.MapSettings),
              e(l, 15, 0),
              e(l, 16, 0, "Map Settings"),
              e(l, 22, 0, "AnnouncementSettings"),
              e(l, 24, 0),
              e(l, 25, 0, n.NaviSettingsRoute.children.AudioSettings),
              e(l, 27, 0),
              e(l, 28, 0, "Announcement Settings"),
              e(l, 34, 0, "RouteCriteria"),
              e(l, 36, 0),
              e(l, 37, 0, n.settingsRoutingService.getGlobalRouteOptionsPath()),
              e(l, 39, 0),
              e(l, 40, 0, "Routenkriterien"),
              e(
                l,
                44,
                0,
                t.Yb(
                  l,
                  44,
                  0,
                  t
                    .Nb(l, 45)
                    .transform(n.etronRoutePlannerService.isEtronAvailable$),
                ),
              ),
              e(l, 47, 0, "RoutInformation"),
              e(
                l,
                48,
                0,
                "Routeninformation",
                !1,
                l.context.mib3Let.routeInformationVisible,
                !l.context.mib3Let.routeInformationVisible,
                n.NaviSettingsRoute.children.RouteInformation,
              ),
              e(l, 50, 0, n.isPNavServiceExisting),
              e(l, 52, 0, n.systemConfigService.isJapanRegion()),
              e(l, 54, 0, n.trafficMiniMapExisting),
              e(l, 56, 0, n.systemConfigService.isKoreaRegion()),
              e(l, 58, 0, n.eCallOprActive),
              e(l, 60, 0, "PresentationMode"),
              e(l, 62, 0),
              e(l, 63, 0, n.NaviSettingsRoute.children.PresentationMode),
              e(l, 65, 0),
              e(l, 66, 0, "Presentation mode"),
              e(l, 67, 0, n.blockingKey));
          },
          function (e, l) {
            (e(l, 0, 0, t.Nb(l, 3).showLineNumbers),
              e(
                l,
                7,
                0,
                t.Nb(l, 8).combinedDisabled,
                t.Nb(l, 8).useBrighterIcon,
                t.Nb(l, 15).markerClassEnabled,
              ),
              e(
                l,
                19,
                0,
                t.Nb(l, 20).combinedDisabled,
                t.Nb(l, 20).useBrighterIcon,
                t.Nb(l, 27).markerClassEnabled,
              ),
              e(
                l,
                31,
                0,
                t.Nb(l, 32).combinedDisabled,
                t.Nb(l, 32).useBrighterIcon,
                t.Nb(l, 39).markerClassEnabled,
              ),
              e(
                l,
                57,
                0,
                t.Nb(l, 58).combinedDisabled,
                t.Nb(l, 58).useBrighterIcon,
                t.Nb(l, 65).markerClassEnabled,
              ));
          },
        );
      }
      function zl(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              22,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:NAV_SETUP_MAIN"],
              ],
              null,
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ke.a, [Te.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              14,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              vl.b,
              vl.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              xl.a,
              [fl.a, _l.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryId: [1, "primaryId"],
                primaryIdEnumType: [2, "primaryIdEnumType"],
                secondaryDeveloperText: [3, "secondaryDeveloperText"],
                secondaryId: [4, "secondaryId"],
                secondaryIdEnumType: [5, "secondaryIdEnumType"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", ""],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l && (t = !1 !== e.component.goBack() && t),
                  t
                );
              },
              Cl.b,
              Cl.a,
            )),
            t.xb(7, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Pl.a,
              [Te.a, yl.a, t.l, [2, Me.a], [2, Pe.a]],
              null,
              null,
            ),
            t.xb(12, 16384, null, 0, Tl.a, [], null, null),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              14,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              15,
              49152,
              null,
              0,
              Sl.a,
              [[2, Pe.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
            (e()(), t.hb(16777216, null, 0, 4, null, wl)),
            t.xb(
              19,
              16384,
              null,
              0,
              Ol.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, al.b, [t.h]),
            t.Pb(131072, al.b, [t.h]),
            t.Qb(22, {
              routeInformationVisible: 0,
              etronRoutePlannerEnabled: 1,
              isAsia: 2,
            }),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "Screen:NAV_SETUP_MAIN"),
              e(l, 2, 0, "Screen:NAV_SETUP_MAIN"),
              e(l, 4, 0, ""),
              e(
                l,
                5,
                0,
                n.isSettingsContext
                  ? n.titleTextEnum.Settings
                  : n.titleTextEnum.Navigation,
                n.isSettingsContext
                  ? n.titleTextEnum.Settings
                  : n.titleTextEnum.Navigation,
                n.titleTextEnum,
                n.isSettingsContext
                  ? n.titleTextEnum.Navigation
                  : n.titleTextEnum.Settings,
                n.isSettingsContext
                  ? n.titleTextEnum.Navigation
                  : n.titleTextEnum.Settings,
                n.titleTextEnum,
              ),
              e(l, 8, 0, ""),
              e(l, 10, 0),
              e(l, 14, 0),
              e(l, 15, 0, !1, "E163_Backbutton.webp"));
            var a = e(
              l,
              22,
              0,
              t.Yb(
                l,
                19,
                0,
                t
                  .Nb(l, 20)
                  .transform(
                    n.routeInformationService.routeInformationVisibility$,
                  ),
              ),
              t.Yb(
                l,
                19,
                0,
                t
                  .Nb(l, 21)
                  .transform(n.etronSettingsService.chargingStopsPlanning$),
              ),
              n.systemConfigService.isAsiaRegion(),
            );
            e(l, 19, 0, a);
          },
          function (e, l) {
            (e(
              l,
              3,
              0,
              t.Nb(l, 5).hideLeftBorder,
              t.Nb(l, 5).hideDividingBorders,
            ),
              e(
                l,
                6,
                0,
                t.Nb(l, 14).markerClassEnabled,
                t.Nb(l, 15).useItemPlaceholder,
              ));
          },
        );
      }
      function Ul(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-navi-settings",
              [],
              null,
              null,
              null,
              zl,
              Il,
            )),
            t.xb(
              1,
              180224,
              null,
              0,
              le,
              [
                X.b,
                ze.a,
                t.h,
                Y.a,
                W.a,
                Ie.a,
                G.a,
                I.a,
                q.a,
                Z.a,
                Te.a,
                K.a,
                J.a,
                B.a,
              ],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var Bl = t.ub("au3-navi-settings", le, Ul, {}, {}, []),
        Fl = n("ixDV"),
        $l = n("cdBV"),
        Vl = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;display:block;height:100%;width:100%}.screen[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;font-size:40px}.settings-list__toggle-item[_ngcontent-%COMP%]{padding:0 20px}.settings-list__item[_ngcontent-%COMP%]{height:100px}",
            ],
          ],
          data: {},
        });
      function jl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              5,
              "au3-list-switch-item",
              [
                ["class", "settings-list__item"],
                ["developerText", "Satellite map"],
                ["id", "satellite"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "valueChange"]],
              function (e, l, n) {
                var t = !0,
                  a = e.component;
                return (
                  "valueChange" === l &&
                    (t =
                      !1 !==
                        a.preferenceService.setMapStyle(
                          n
                            ? a.preferenceObjectStyleEnum.SATELLITEMAP
                            : a.preferenceObjectStyleEnum.STANDARDMAP,
                        ) && t),
                  t
                );
              },
              el.b,
              el.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(
              3,
              49152,
              null,
              0,
              ll.a,
              [[2, Pe.a]],
              { developerText: [0, "developerText"], value: [1, "value"] },
              { valueChange: "valueChange" },
            ),
            t.Pb(131072, al.b, [t.h]),
            t.xb(
              5,
              671744,
              null,
              0,
              pl.a,
              [Pe.a, Ue.i, [2, Ue.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "satellite"),
              e(
                l,
                2,
                0,
                n.isDisabledForMoreThanNoConnectivityOnly(
                  l.parent.context.mib3Let,
                ),
                null == l.parent.context.mib3Let ||
                  null == l.parent.context.mib3Let.existenceAndPopupAction
                  ? null
                  : l.parent.context.mib3Let.existenceAndPopupAction
                      .disabledReason,
              ),
              e(
                l,
                3,
                0,
                "Satellite map",
                t.Yb(
                  l,
                  3,
                  1,
                  t.Nb(l, 4).transform(n.preferenceService.mapStyle$),
                ) === n.preferenceObjectStyleEnum.SATELLITEMAP,
              ),
              e(l, 5, 0, n.satelliteBlocking));
          },
          function (e, l) {
            e(l, 0, 0, t.Nb(l, 2).combinedDisabled, t.Nb(l, 2).useBrighterIcon);
          },
        );
      }
      function Hl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, jl)),
            t.xb(
              2,
              16384,
              null,
              0,
              al.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), t.hb(0, null, null, 0)),
          ],
          function (e, l) {
            e(
              l,
              2,
              0,
              null == l.context.mib3Let ||
                null == l.context.mib3Let.existenceAndPopupAction
                ? null
                : l.context.mib3Let.existenceAndPopupAction.existence,
            );
          },
          null,
        );
      }
      function Yl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-list-switch-item",
              [
                ["class", "settings-list__item"],
                ["developerText", "Range map"],
                ["id", "rangeMap"],
              ],
              null,
              [[null, "valueChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "valueChange" === l &&
                    (t =
                      !1 !== e.component.preferenceService.setRangeMap(n) && t),
                  t
                );
              },
              el.b,
              el.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ll.a,
              [[2, Pe.a]],
              { developerText: [0, "developerText"], value: [1, "value"] },
              { valueChange: "valueChange" },
            ),
            t.Pb(131072, al.b, [t.h]),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "rangeMap"),
              e(
                l,
                2,
                0,
                "Range map",
                t.Yb(
                  l,
                  2,
                  1,
                  t.Nb(l, 3).transform(n.preferenceService.rangeMap$),
                ),
              ));
          },
          null,
        );
      }
      function Wl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-list-route-item",
              [
                ["class", "settings-list__item"],
                ["id", "traffic"],
                ["titleDeveloperText", "Verkehr"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              Ce.b,
              Ce.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(2, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              we.a,
              [ze.a, Ue.i, Pe.a, Me.a, we.b, Be.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              114688,
              null,
              0,
              We.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(
              l,
              1,
              0,
              void 0 !==
                (null == l.parent.context.mib3Let ||
                null == l.parent.context.mib3Let.existenceAndPopupAction
                  ? null
                  : l.parent.context.mib3Let.existenceAndPopupAction
                      .disabledReason),
              null == l.parent.context.mib3Let ||
                null == l.parent.context.mib3Let.existenceAndPopupAction
                ? null
                : l.parent.context.mib3Let.existenceAndPopupAction
                    .disabledReason,
            ),
              e(l, 3, 0, "traffic"),
              e(l, 5, 0),
              e(
                l,
                6,
                0,
                n.NaviSettingsRoute.children.MapSettings.children.Traffic,
              ),
              e(l, 8, 0),
              e(l, 9, 0, "Verkehr"));
          },
          function (e, l) {
            e(
              l,
              0,
              0,
              t.Nb(l, 1).combinedDisabled,
              t.Nb(l, 1).useBrighterIcon,
              t.Nb(l, 8).markerClassEnabled,
            );
          },
        );
      }
      function Gl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, Wl)),
            t.xb(
              2,
              16384,
              null,
              0,
              al.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), t.hb(0, null, null, 0)),
          ],
          function (e, l) {
            e(
              l,
              2,
              0,
              null == l.context.mib3Let ||
                null == l.context.mib3Let.existenceAndPopupAction
                ? null
                : l.context.mib3Let.existenceAndPopupAction.existence,
            );
          },
          null,
        );
      }
      function Zl(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              54,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:NAV_SETUP_MAP"],
              ],
              null,
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ke.a, [Te.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              14,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              vl.b,
              vl.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              xl.a,
              [fl.a, _l.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", ""],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== e.component.routingService.goBack() && t),
                  t
                );
              },
              Cl.b,
              Cl.a,
            )),
            t.xb(7, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Pl.a,
              [Te.a, yl.a, t.l, [2, Me.a], [2, Pe.a]],
              null,
              null,
            ),
            t.xb(12, 16384, null, 0, Tl.a, [], null, null),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              14,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              15,
              49152,
              null,
              0,
              Sl.a,
              [[2, Pe.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              18,
              0,
              null,
              0,
              36,
              "au3-list",
              [["class", "settings-list"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              il.b,
              il.a,
            )),
            t.Sb(6144, null, ol.a, null, [ul.a]),
            t.xb(20, 16384, null, 0, sl.a, [t.l], null, null),
            t.xb(
              21,
              12828672,
              null,
              1,
              ul.a,
              [
                [2, rl.a],
                [2, cl.a],
                [8, null],
                [2, Oe.a],
                [2, bl.a],
                [2, dl.a],
                [2, De.b],
                Ue.i,
                t.z,
                t.h,
                Te.a,
                gl.a,
                hl.a,
                [2, Ve.a],
                Ae.a,
                [2, Ue.a],
              ],
              null,
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (e()(), t.hb(16777216, [[1, 2]], 0, 2, null, Hl)),
            t.xb(
              24,
              16384,
              null,
              0,
              Ol.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, al.b, [t.h]),
            (e()(), t.hb(16777216, [[1, 2]], 0, 2, null, Yl)),
            t.xb(
              27,
              16384,
              null,
              0,
              al.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Pb(131072, al.b, [t.h]),
            (e()(), t.hb(16777216, [[1, 2]], 0, 2, null, Gl)),
            t.xb(
              30,
              16384,
              null,
              0,
              Ol.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, al.b, [t.h]),
            (e()(),
            t.yb(
              32,
              0,
              null,
              0,
              2,
              "au3-toggle-button-group",
              [
                ["class", "settings-list__toggle-item"],
                ["id", "mapColorItems"],
                ["titleDeveloperText", "Map colors"],
              ],
              null,
              [[null, "selectedChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "selectedChange" === l &&
                    (t =
                      !1 !==
                        e.component.preferenceService.setMapColor(
                          null == n ? null : n.labelId,
                        ) && t),
                  t
                );
              },
              Fl.b,
              Fl.a,
            )),
            t.xb(
              33,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              34,
              4374528,
              null,
              0,
              $l.a,
              [[2, Pe.a], t.h],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                data: [1, "data"],
                selected: [2, "selected"],
              },
              { selectedChange: "selectedChange" },
            ),
            (e()(),
            t.yb(
              35,
              0,
              null,
              0,
              2,
              "au3-toggle-button-group",
              [
                ["class", "settings-list__toggle-item"],
                ["id", "mapViewItems"],
                ["titleDeveloperText", "Map orientation"],
              ],
              null,
              [[null, "selectedChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "selectedChange" === l &&
                    (t =
                      !1 !==
                        e.component.preferenceService.setMapMode(
                          null == n ? null : n.labelId,
                        ) && t),
                  t
                );
              },
              Fl.b,
              Fl.a,
            )),
            t.xb(
              36,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              37,
              4374528,
              null,
              0,
              $l.a,
              [[2, Pe.a], t.h],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                data: [1, "data"],
                selected: [2, "selected"],
              },
              { selectedChange: "selectedChange" },
            ),
            (e()(),
            t.yb(
              38,
              0,
              null,
              0,
              4,
              "au3-toggle-button-group",
              [
                ["class", "settings-list__toggle-item"],
                ["id", "mapAutozoomItems"],
                ["titleDeveloperText", "Automatischer Zoom"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "selectedChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "selectedChange" === l &&
                    (t = !1 !== e.component.setAutozoom(n) && t),
                  t
                );
              },
              Fl.b,
              Fl.a,
            )),
            t.xb(
              39,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              40,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.Pb(131072, al.b, [t.h]),
            t.xb(
              42,
              4374528,
              null,
              0,
              $l.a,
              [[2, Pe.a], t.h],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                data: [1, "data"],
                selected: [2, "selected"],
              },
              { selectedChange: "selectedChange" },
            ),
            (e()(),
            t.yb(
              43,
              0,
              null,
              0,
              11,
              "au3-list-route-item",
              [
                ["class", "settings-list__item"],
                ["id", "MMIMapContent"],
                ["titleDeveloperText", "MMI map content"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              Ce.b,
              Ce.a,
            )),
            t.xb(
              44,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              null,
              null,
            ),
            t.xb(45, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              46,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              47,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              48,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              null,
            ),
            t.xb(
              49,
              671744,
              null,
              0,
              we.a,
              [ze.a, Ue.i, Pe.a, Me.a, we.b, Be.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              51,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              52,
              114688,
              null,
              0,
              We.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
            t.xb(
              53,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              54,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
          ],
          function (e, l) {
            var n,
              a = l.component;
            (e(l, 1, 0, "Screen:NAV_SETUP_MAP"),
              e(l, 2, 0, "Screen:NAV_SETUP_MAP"),
              e(l, 4, 0, ""),
              e(l, 5, 0, "Navigation", "Settings"),
              e(l, 8, 0, ""),
              e(l, 10, 0),
              e(l, 14, 0),
              e(l, 15, 0, !1, "E163_Backbutton.webp"),
              e(l, 21, 0),
              e(
                l,
                24,
                0,
                t.Yb(
                  l,
                  24,
                  0,
                  t
                    .Nb(l, 25)
                    .transform(
                      a.functionAvailabilityService.satelliteMapAvailability$,
                    ),
                ),
              ),
              e(
                l,
                27,
                0,
                null ==
                  (n = t.Yb(
                    l,
                    27,
                    0,
                    t
                      .Nb(l, 28)
                      .transform(
                        a.functionAvailabilityService.rangeOnMapAvailability$,
                      ),
                  ))
                  ? null
                  : n.availability,
              ),
              e(
                l,
                30,
                0,
                t.Yb(
                  l,
                  30,
                  0,
                  t
                    .Nb(l, 31)
                    .transform(
                      a.functionAvailabilityService.trafficAvailability$,
                    ),
                ),
              ),
              e(l, 33, 0, "mapColorItems"),
              e(
                l,
                34,
                0,
                "Map colors",
                a.mapColorItems,
                a.selectedMapColorItem,
              ),
              e(l, 36, 0, "mapViewItems"),
              e(
                l,
                37,
                0,
                "Map orientation",
                a.mapViewItems,
                a.selectedMapViewItem,
              ),
              e(l, 39, 0, "mapAutozoomItems"),
              e(
                l,
                40,
                0,
                t.Yb(
                  l,
                  40,
                  0,
                  t.Nb(l, 41).transform(a.preferenceService.mapMode$),
                ) === a.preferenceObjectViewTypeEnum.OVERVIEWTONEXTSTOPOVER,
                a.popupIdsEnum.POPUP_MAP_SETTINGS_AUTOZOOM_UNAVAILABLE,
              ),
              e(
                l,
                42,
                0,
                "Automatischer Zoom",
                a.autozoomItems,
                a.selectedAutozoomItem,
              ),
              e(l, 46, 0, "MMIMapContent"),
              e(l, 48, 0),
              e(l, 49, 0, a.NaviSettingsRoute.children.MapContent),
              e(l, 51, 0),
              e(l, 52, 0, "MMI map content"));
          },
          function (e, l) {
            (e(
              l,
              3,
              0,
              t.Nb(l, 5).hideLeftBorder,
              t.Nb(l, 5).hideDividingBorders,
            ),
              e(
                l,
                6,
                0,
                t.Nb(l, 14).markerClassEnabled,
                t.Nb(l, 15).useItemPlaceholder,
              ),
              e(l, 18, 0, t.Nb(l, 21).showLineNumbers),
              e(
                l,
                38,
                0,
                t.Nb(l, 40).combinedDisabled,
                t.Nb(l, 40).useBrighterIcon,
              ),
              e(
                l,
                43,
                0,
                t.Nb(l, 44).combinedDisabled,
                t.Nb(l, 44).useBrighterIcon,
                t.Nb(l, 51).markerClassEnabled,
              ));
          },
        );
      }
      function Kl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-map-settings",
              [],
              null,
              null,
              null,
              Zl,
              Vl,
            )),
            t.xb(1, 245760, null, 0, F, [ze.a, U.a, B.a, t.h], null, null),
          ],
          function (e, l) {
            e(l, 1, 0);
          },
          null,
        );
      }
      var Jl = t.ub("au3-map-settings", F, Kl, {}, {}, []),
        Xl = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;display:block;height:100%;width:100%}.screen[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;font-size:40px}.settings-list__toggle-item[_ngcontent-%COMP%]{padding:0 20px}.settings-list__item[_ngcontent-%COMP%]{height:100px}",
            ],
          ],
          data: {},
        });
      function Ql(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-list-switch-item",
              [
                ["class", "settings-list__item"],
                ["developerText", "Freier Verkehrsfluss"],
                ["id", "speedFlowFreeFlow"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "valueChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "valueChange" === l &&
                    (t =
                      !1 !==
                        e.component.onSettingChanged(
                          n,
                          null == e.parent.context.mib3Let.value
                            ? null
                            : e.parent.context.mib3Let.value
                                .speedFlowCongestions,
                          null == e.parent.context.mib3Let.value
                            ? null
                            : e.parent.context.mib3Let.value.tmc,
                        ) && t),
                  t
                );
              },
              el.b,
              el.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              3,
              49152,
              null,
              0,
              ll.a,
              [[2, Pe.a]],
              {
                icon: [0, "icon"],
                developerText: [1, "developerText"],
                value: [2, "value"],
              },
              { valueChange: "valueChange" },
            ),
          ],
          function (e, l) {
            (e(l, 1, 0, "speedFlowFreeFlow"),
              e(
                l,
                2,
                0,
                !(
                  null != l.parent.context.mib3Let.value &&
                  l.parent.context.mib3Let.value.speedFlowCongestions &&
                  l.parent.context.mib3Let.available
                ),
              ),
              e(
                l,
                3,
                0,
                "E935_navigation_traffic_frei.webp",
                "Freier Verkehrsfluss",
                null == l.parent.context.mib3Let.value
                  ? null
                  : l.parent.context.mib3Let.value.speedFlowFreeFlow,
              ));
          },
          function (e, l) {
            e(l, 0, 0, t.Nb(l, 2).combinedDisabled, t.Nb(l, 2).useBrighterIcon);
          },
        );
      }
      function ql(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              14,
              "au3-list",
              [["class", "settings-list"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              il.b,
              il.a,
            )),
            t.Sb(6144, null, ol.a, null, [ul.a]),
            t.xb(2, 16384, null, 0, sl.a, [t.l], null, null),
            t.xb(
              3,
              12828672,
              null,
              1,
              ul.a,
              [
                [2, rl.a],
                [2, cl.a],
                [8, null],
                [2, Oe.a],
                [2, bl.a],
                [2, dl.a],
                [2, De.b],
                Ue.i,
                t.z,
                t.h,
                Te.a,
                gl.a,
                hl.a,
                [2, Ve.a],
                Ae.a,
                [2, Ue.a],
              ],
              null,
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (e()(), t.hb(16777216, [[1, 2]], 0, 1, null, Ql)),
            t.xb(
              6,
              16384,
              null,
              0,
              al.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            t.yb(
              7,
              0,
              null,
              0,
              3,
              "au3-list-switch-item",
              [
                ["class", "settings-list__item"],
                ["developerText", "Verkehrsbehinderung"],
                ["id", "speedFlowCongestions"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "valueChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "valueChange" === l &&
                    (t =
                      !1 !==
                        e.component.onSettingChanged(
                          null == e.context.mib3Let.value
                            ? null
                            : e.context.mib3Let.value.speedFlowFreeFlow,
                          n,
                          null == e.context.mib3Let.value
                            ? null
                            : e.context.mib3Let.value.tmc,
                        ) && t),
                  t
                );
              },
              el.b,
              el.a,
            )),
            t.xb(
              8,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              10,
              49152,
              null,
              0,
              ll.a,
              [[2, Pe.a]],
              {
                icon: [0, "icon"],
                developerText: [1, "developerText"],
                value: [2, "value"],
              },
              { valueChange: "valueChange" },
            ),
            (e()(),
            t.yb(
              11,
              0,
              null,
              0,
              3,
              "au3-list-switch-item",
              [
                ["class", "settings-list__item"],
                ["developerText", "Verkehrsinformation"],
                ["id", "tmc"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "valueChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "valueChange" === l &&
                    (t =
                      !1 !==
                        e.component.onSettingChanged(
                          null == e.context.mib3Let.value
                            ? null
                            : e.context.mib3Let.value.speedFlowFreeFlow,
                          null == e.context.mib3Let.value
                            ? null
                            : e.context.mib3Let.value.speedFlowCongestions,
                          n,
                        ) && t),
                  t
                );
              },
              el.b,
              el.a,
            )),
            t.xb(
              12,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              14,
              49152,
              null,
              0,
              ll.a,
              [[2, Pe.a]],
              {
                icon: [0, "icon"],
                developerText: [1, "developerText"],
                value: [2, "value"],
              },
              { valueChange: "valueChange" },
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 3, 0),
              e(l, 6, 0, !n.systemConfigService.isAsiaRegion()),
              e(l, 8, 0, "speedFlowCongestions"),
              e(l, 9, 0, !l.context.mib3Let.available),
              e(
                l,
                10,
                0,
                "E936_navigation_traffic_stockend.webp",
                "Verkehrsbehinderung",
                null == l.context.mib3Let.value
                  ? null
                  : l.context.mib3Let.value.speedFlowCongestions,
              ),
              e(l, 12, 0, "tmc"),
              e(l, 13, 0, !l.context.mib3Let.available),
              e(
                l,
                14,
                0,
                "E941_navigation_attention.webp",
                "Verkehrsinformation",
                null == l.context.mib3Let.value
                  ? null
                  : l.context.mib3Let.value.tmc,
              ));
          },
          function (e, l) {
            (e(l, 0, 0, t.Nb(l, 3).showLineNumbers),
              e(
                l,
                7,
                0,
                t.Nb(l, 9).combinedDisabled,
                t.Nb(l, 9).useBrighterIcon,
              ),
              e(
                l,
                11,
                0,
                t.Nb(l, 13).combinedDisabled,
                t.Nb(l, 13).useBrighterIcon,
              ));
          },
        );
      }
      function en(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              22,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:NAV_SETUP_MAP_TRAFFIC"],
              ],
              null,
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ke.a, [Te.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              14,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              vl.b,
              vl.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              xl.a,
              [fl.a, _l.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", ""],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== e.component.routingService.goBack() && t),
                  t
                );
              },
              Cl.b,
              Cl.a,
            )),
            t.xb(7, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Pl.a,
              [Te.a, yl.a, t.l, [2, Me.a], [2, Pe.a]],
              null,
              null,
            ),
            t.xb(12, 16384, null, 0, Tl.a, [], null, null),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              14,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              15,
              49152,
              null,
              0,
              Sl.a,
              [[2, Pe.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
            (e()(), t.hb(16777216, null, 0, 4, null, ql)),
            t.xb(
              19,
              16384,
              null,
              0,
              Ol.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, al.b, [t.h]),
            t.Pb(131072, al.b, [t.h]),
            t.Qb(22, { available: 0, value: 1 }),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "Screen:NAV_SETUP_MAP_TRAFFIC"),
              e(l, 2, 0, "Screen:NAV_SETUP_MAP_TRAFFIC"),
              e(l, 4, 0, ""),
              e(l, 5, 0, "Navigation", "Verkehr"),
              e(l, 8, 0, ""),
              e(l, 10, 0),
              e(l, 14, 0),
              e(l, 15, 0, !1, "E163_Backbutton.webp"));
            var a = e(
              l,
              22,
              0,
              t.Yb(l, 19, 0, t.Nb(l, 20).transform(n.functionAvailable$)),
              t.Yb(l, 19, 0, t.Nb(l, 21).transform(n.trafficSettings$)),
            );
            e(l, 19, 0, a);
          },
          function (e, l) {
            (e(
              l,
              3,
              0,
              t.Nb(l, 5).hideLeftBorder,
              t.Nb(l, 5).hideDividingBorders,
            ),
              e(
                l,
                6,
                0,
                t.Nb(l, 14).markerClassEnabled,
                t.Nb(l, 15).useItemPlaceholder,
              ));
          },
        );
      }
      function ln(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-traffic",
              [],
              null,
              null,
              null,
              en,
              Xl,
            )),
            t.xb(1, 114688, null, 0, re, [ze.a, Ie.a, U.a, B.a], null, null),
          ],
          function (e, l) {
            e(l, 1, 0);
          },
          null,
        );
      }
      var nn = t.ub("au3-traffic", re, ln, {}, {}, []),
        tn = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;display:block;height:100%;width:100%}.screen[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;font-size:40px}.settings-list__toggle-item[_ngcontent-%COMP%]{padding:0 20px}.settings-list__item[_ngcontent-%COMP%]{height:100px}",
            ],
          ],
          data: {},
        });
      function an(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-list-switch-item",
              [
                ["class", "settings-list__item"],
                ["developerText", "Acoustic warning for speed cameras"],
                ["id", "navAnnouncementsSpeedCameraWarning"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "valueChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "valueChange" === l &&
                    (t =
                      !1 !==
                        e.component.audiosettingsService.toggleSpeedCameraWarningSettings(
                          n,
                        ) && t),
                  t
                );
              },
              el.b,
              el.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(
              3,
              49152,
              null,
              0,
              ll.a,
              [[2, Pe.a]],
              { developerText: [0, "developerText"], value: [1, "value"] },
              { valueChange: "valueChange" },
            ),
            t.Pb(131072, al.b, [t.h]),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "navAnnouncementsSpeedCameraWarning"),
              e(
                l,
                2,
                0,
                !n.naviAudioSettingsInitialized,
                l.parent.context.mib3Let && n.environment.isBentley
                  ? n.PopupIdsAudi.POPUP_TONE_POPUP_UNAVAILABLE
                  : "",
              ),
              e(
                l,
                3,
                0,
                "Acoustic warning for speed cameras",
                t.Yb(
                  l,
                  3,
                  1,
                  t
                    .Nb(l, 4)
                    .transform(
                      n.audiosettingsService.speedCameraWarningSettings$,
                    ),
                ),
              ));
          },
          function (e, l) {
            e(l, 0, 0, t.Nb(l, 2).combinedDisabled, t.Nb(l, 2).useBrighterIcon);
          },
        );
      }
      function on(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-list-switch-item",
              [
                ["class", "settings-list__item"],
                ["developerText", "Acoustic warning for railway crossing"],
                ["id", "navAnnouncementsRailwayCrossing"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "valueChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "valueChange" === l &&
                    (t =
                      !1 !==
                        e.component.audiosettingsService.toggleRailwayCrossingWarningSettings(
                          n,
                        ) && t),
                  t
                );
              },
              el.b,
              el.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(
              3,
              49152,
              null,
              0,
              ll.a,
              [[2, Pe.a]],
              { developerText: [0, "developerText"], value: [1, "value"] },
              { valueChange: "valueChange" },
            ),
            t.Pb(131072, al.b, [t.h]),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "navAnnouncementsRailwayCrossing"),
              e(
                l,
                2,
                0,
                !n.naviAudioSettingsInitialized,
                l.parent.context.mib3Let && n.environment.isBentley
                  ? n.PopupIdsAudi.POPUP_TONE_POPUP_UNAVAILABLE
                  : "",
              ),
              e(
                l,
                3,
                0,
                "Acoustic warning for railway crossing",
                t.Yb(
                  l,
                  3,
                  1,
                  t
                    .Nb(l, 4)
                    .transform(
                      n.audiosettingsService.railwayCrossingWarningSettings$,
                    ),
                ),
              ));
          },
          function (e, l) {
            e(l, 0, 0, t.Nb(l, 2).combinedDisabled, t.Nb(l, 2).useBrighterIcon);
          },
        );
      }
      function un(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-list-switch-item",
              [
                ["class", "settings-list__item"],
                ["developerText", "Acoustic warning for merging traffic"],
                ["id", "navAnnouncementsMergingTraffic"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "valueChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "valueChange" === l &&
                    (t =
                      !1 !==
                        e.component.audiosettingsService.toggleTrafficWarningSettings(
                          n,
                        ) && t),
                  t
                );
              },
              el.b,
              el.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(
              3,
              49152,
              null,
              0,
              ll.a,
              [[2, Pe.a]],
              { developerText: [0, "developerText"], value: [1, "value"] },
              { valueChange: "valueChange" },
            ),
            t.Pb(131072, al.b, [t.h]),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "navAnnouncementsMergingTraffic"),
              e(
                l,
                2,
                0,
                !n.naviAudioSettingsInitialized,
                l.parent.context.mib3Let && n.environment.isBentley
                  ? n.PopupIdsAudi.POPUP_TONE_POPUP_UNAVAILABLE
                  : "",
              ),
              e(
                l,
                3,
                0,
                "Acoustic warning for merging traffic",
                t.Yb(
                  l,
                  3,
                  1,
                  t
                    .Nb(l, 4)
                    .transform(
                      n.audiosettingsService.mergingTrafficWarningSettings$,
                    ),
                ),
              ));
          },
          function (e, l) {
            e(l, 0, 0, t.Nb(l, 2).combinedDisabled, t.Nb(l, 2).useBrighterIcon);
          },
        );
      }
      function sn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              23,
              "au3-list",
              [["class", "settings-list"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              il.b,
              il.a,
            )),
            t.Sb(6144, null, ol.a, null, [ul.a]),
            t.xb(2, 16384, null, 0, sl.a, [t.l], null, null),
            t.xb(
              3,
              12828672,
              null,
              1,
              ul.a,
              [
                [2, rl.a],
                [2, cl.a],
                [8, null],
                [2, Oe.a],
                [2, bl.a],
                [2, dl.a],
                [2, De.b],
                Ue.i,
                t.z,
                t.h,
                Te.a,
                gl.a,
                hl.a,
                [2, Ve.a],
                Ae.a,
                [2, Ue.a],
              ],
              null,
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (e()(),
            t.yb(
              5,
              0,
              null,
              0,
              3,
              "au3-toggle-button-group",
              [
                ["class", "settings-list__toggle-item"],
                ["id", "navAnnouncementsGeneral"],
                ["titleDeveloperText", "Navigation Announcements"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "selectedChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "selectedChange" === l &&
                    (t =
                      !1 !==
                        e.component.audiosettingsService.setAnnouncementMode(
                          null == n ? null : n.labelId,
                        ) && t),
                  t
                );
              },
              Fl.b,
              Fl.a,
            )),
            t.xb(
              6,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              7,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(
              8,
              4374528,
              null,
              0,
              $l.a,
              [[2, Pe.a], t.h],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                data: [1, "data"],
                selected: [2, "selected"],
              },
              { selectedChange: "selectedChange" },
            ),
            (e()(), t.hb(16777216, [[1, 2]], 0, 1, null, an)),
            t.xb(
              10,
              16384,
              null,
              0,
              al.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], 0, 1, null, on)),
            t.xb(
              12,
              16384,
              null,
              0,
              al.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], 0, 1, null, un)),
            t.xb(
              14,
              16384,
              null,
              0,
              al.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            t.yb(
              15,
              0,
              null,
              0,
              4,
              "au3-list-switch-item",
              [
                ["class", "settings-list__item"],
                ["developerText", "Announcement Settings during calls"],
                ["id", "navAnnouncementsActiveCall"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "valueChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "valueChange" === l &&
                    (t =
                      !1 !==
                        e.component.audiosettingsService.setAnnounceOnActiveCallEnabled(
                          n,
                        ) && t),
                  t
                );
              },
              el.b,
              el.a,
            )),
            t.xb(
              16,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(
              18,
              49152,
              null,
              0,
              ll.a,
              [[2, Pe.a]],
              { developerText: [0, "developerText"], value: [1, "value"] },
              { valueChange: "valueChange" },
            ),
            t.Pb(131072, al.b, [t.h]),
            (e()(),
            t.yb(
              20,
              0,
              null,
              0,
              3,
              "au3-toggle-button-group",
              [
                ["class", "settings-list__toggle-item"],
                ["id", "navEntertainmentSilencing"],
                [
                  "titleDeveloperText",
                  "Entertainment fader for navigation systems",
                ],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [
                [null, "itemTapped"],
                [null, "selectedChange"],
              ],
              function (e, l, n) {
                var t = !0,
                  a = e.component;
                return (
                  "itemTapped" === l &&
                    (t =
                      !1 !==
                        a.tourAnnouncementsService.triggerCurrentManeuver() &&
                      t),
                  "selectedChange" === l &&
                    (t =
                      !1 !==
                        a.soundSettingsService.updateSoundSettingToggleValue(
                          a.soundSettingPurposeEnum
                            .ENTERTAINMENTATTENUATIONNAVIGATION,
                          null == n ? null : n.labelId,
                        ) && t),
                  t
                );
              },
              Fl.b,
              Fl.a,
            )),
            t.xb(
              21,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              22,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(
              23,
              4374528,
              null,
              0,
              $l.a,
              [[2, Pe.a], t.h],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                data: [1, "data"],
                selected: [2, "selected"],
              },
              { selectedChange: "selectedChange", itemTapped: "itemTapped" },
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 3, 0),
              e(l, 6, 0, "navAnnouncementsGeneral"),
              e(
                l,
                7,
                0,
                !n.naviAudioSettingsInitialized ||
                  (l.context.mib3Let && n.environment.isBentley),
                l.context.mib3Let && n.environment.isBentley
                  ? n.PopupIdsAudi.POPUP_TONE_POPUP_UNAVAILABLE
                  : "",
              ),
              e(
                l,
                8,
                0,
                "Navigation Announcements",
                n.naviAnnouncementOptions,
                n.selectedNaviAnnounceMode,
              ),
              e(
                l,
                10,
                0,
                n.systemConfigService.isAsiaRegion() &&
                  !n.systemConfigService.isJapanRegion(),
              ),
              e(l, 12, 0, n.systemConfigService.isAsiaRegion()),
              e(l, 14, 0, n.systemConfigService.isAsiaRegion()),
              e(l, 16, 0, "navAnnouncementsActiveCall"),
              e(
                l,
                17,
                0,
                !n.naviAudioSettingsInitialized ||
                  (null == n.selectedNaviAnnounceMode
                    ? null
                    : n.selectedNaviAnnounceMode.labelId) ===
                    n.announcementModeEnum.OFF,
                n.naviAudioSettingsInitialized
                  ? n.popupIdsEnum.POPUP_TONE_POPUP_NAV_ANNOUNCEMENTS_OFF
                  : n.defaultDisabledReason,
              ),
              e(
                l,
                18,
                0,
                "Announcement Settings during calls",
                t.Yb(
                  l,
                  18,
                  1,
                  t
                    .Nb(l, 19)
                    .transform(n.audiosettingsService.activeWhileCalling$),
                ),
              ),
              e(l, 21, 0, "navEntertainmentSilencing"),
              e(
                l,
                22,
                0,
                !n.naviAudioSettingsInitialized ||
                  (null == n.selectedNaviAnnounceMode
                    ? null
                    : n.selectedNaviAnnounceMode.labelId) ===
                    n.announcementModeEnum.OFF ||
                  !n.attenuationNaviSetting ||
                  n.attenuationNaviSetting.hasRestriction(),
                n.getAttenuationDisabledReason(),
              ),
              e(
                l,
                23,
                0,
                "Entertainment fader for navigation systems",
                n.attenuationNaviOptions,
                n.selectedAttenuationNavi,
              ));
          },
          function (e, l) {
            (e(l, 0, 0, t.Nb(l, 3).showLineNumbers),
              e(
                l,
                5,
                0,
                t.Nb(l, 7).combinedDisabled,
                t.Nb(l, 7).useBrighterIcon,
              ),
              e(
                l,
                15,
                0,
                t.Nb(l, 17).combinedDisabled,
                t.Nb(l, 17).useBrighterIcon,
              ),
              e(
                l,
                20,
                0,
                t.Nb(l, 22).combinedDisabled,
                t.Nb(l, 22).useBrighterIcon,
              ));
          },
        );
      }
      function rn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              20,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:NAV_SETUP_AUDIO"],
              ],
              null,
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ke.a, [Te.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              14,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              vl.b,
              vl.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              xl.a,
              [fl.a, _l.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", ""],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== e.component.routingService.goBack() && t),
                  t
                );
              },
              Cl.b,
              Cl.a,
            )),
            t.xb(7, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Pl.a,
              [Te.a, yl.a, t.l, [2, Me.a], [2, Pe.a]],
              null,
              null,
            ),
            t.xb(12, 16384, null, 0, Tl.a, [], null, null),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              14,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              15,
              49152,
              null,
              0,
              Sl.a,
              [[2, Pe.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
            (e()(), t.hb(16777216, null, 0, 2, null, sn)),
            t.xb(
              19,
              16384,
              null,
              0,
              Ol.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, al.b, [t.h]),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "Screen:NAV_SETUP_AUDIO"),
              e(l, 2, 0, "Screen:NAV_SETUP_AUDIO"),
              e(l, 4, 0, ""),
              e(l, 5, 0, "Navigation", "Announcement Settings"),
              e(l, 8, 0, ""),
              e(l, 10, 0),
              e(l, 14, 0),
              e(l, 15, 0, !1, "E163_Backbutton.webp"),
              e(
                l,
                19,
                0,
                t.Yb(
                  l,
                  19,
                  0,
                  t.Nb(l, 20).transform(n.phoneService.callActive$),
                ),
              ));
          },
          function (e, l) {
            (e(
              l,
              3,
              0,
              t.Nb(l, 5).hideLeftBorder,
              t.Nb(l, 5).hideDividingBorders,
            ),
              e(
                l,
                6,
                0,
                t.Nb(l, 14).markerClassEnabled,
                t.Nb(l, 15).useItemPlaceholder,
              ));
          },
        );
      }
      function cn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-announcement-settings",
              [],
              null,
              null,
              null,
              rn,
              tn,
            )),
            t.xb(
              1,
              245760,
              null,
              0,
              O,
              [ze.a, y.d, T.a, P.a, Ie.a, S.c, Te.a],
              null,
              null,
            ),
          ],
          function (e, l) {
            e(l, 1, 0);
          },
          null,
        );
      }
      var bn = t.ub("au3-announcement-settings", O, cn, {}, {}, []),
        dn = n("ihOk"),
        gn = n("ZMtB"),
        hn = n("fzcM"),
        pn = n("u0hB"),
        mn = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{position:relative;display:block;height:100%;width:100%}.screen[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;font-size:40px}.settings-list[_ngcontent-%COMP%]:hover::-webkit-scrollbar{display:none}.settings-list__item[_ngcontent-%COMP%]{padding:0 20px;height:98px}",
            ],
          ],
          data: {},
        });
      function vn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              21,
              "au3-list",
              [
                ["class", "settings-list"],
                ["id", ""],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              il.b,
              il.a,
            )),
            t.Sb(6144, null, ol.a, null, [ul.a]),
            t.xb(
              2,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 16384, null, 0, sl.a, [t.l], null, null),
            t.xb(
              4,
              12828672,
              null,
              1,
              ul.a,
              [
                [2, rl.a],
                [2, cl.a],
                [8, null],
                [2, Oe.a],
                [2, bl.a],
                [2, dl.a],
                [2, De.b],
                Ue.i,
                t.z,
                t.h,
                Te.a,
                gl.a,
                hl.a,
                [2, Ve.a],
                Ae.a,
                [2, Ue.a],
              ],
              null,
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              2,
              "au3-list-switch-item",
              [
                ["class", "settings-list__item"],
                ["developerText", "Presentation mode"],
                ["id", "PresentationMode"],
              ],
              null,
              [[null, "valueChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "valueChange" === l &&
                    (t =
                      !1 !==
                        e.component.demoModeSettingsService.setDemoMode(n) &&
                      t),
                  t
                );
              },
              el.b,
              el.a,
            )),
            t.xb(
              7,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              8,
              49152,
              null,
              0,
              ll.a,
              [[2, Pe.a]],
              { developerText: [0, "developerText"], value: [1, "value"] },
              { valueChange: "valueChange" },
            ),
            (e()(),
            t.yb(
              9,
              0,
              null,
              0,
              12,
              "au3-list-route-item",
              [
                ["class", "settings-list__item"],
                ["id", "StartLocation"],
                ["titleDeveloperText", "Set start location"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              Ce.b,
              Ce.a,
            )),
            t.xb(
              10,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.Pb(131072, al.b, [t.h]),
            t.xb(12, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              13,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              14,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              15,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              null,
            ),
            t.xb(
              16,
              671744,
              null,
              0,
              we.a,
              [ze.a, Ue.i, Pe.a, Me.a, we.b, Be.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              18,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              19,
              114688,
              null,
              0,
              We.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
            t.xb(
              20,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              21,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 2, 0, ""),
              e(l, 4, 0),
              e(l, 7, 0, "PresentationMode"),
              e(l, 8, 0, "Presentation mode", l.context.mib3Let),
              e(
                l,
                10,
                0,
                !l.context.mib3Let ||
                  !t.Yb(
                    l,
                    10,
                    0,
                    t.Nb(l, 11).transform(n.textInputService.initialized$),
                  ),
              ),
              e(l, 13, 0, "StartLocation"),
              e(l, 15, 0),
              e(l, 16, 0, n.NaviRoutes.TrufflesSelectLocation),
              e(l, 18, 0),
              e(l, 19, 0, "Set start location"));
          },
          function (e, l) {
            (e(l, 0, 0, t.Nb(l, 4).showLineNumbers),
              e(
                l,
                9,
                0,
                t.Nb(l, 10).combinedDisabled,
                t.Nb(l, 10).useBrighterIcon,
                t.Nb(l, 18).markerClassEnabled,
              ));
          },
        );
      }
      function xn(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              22,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:NAV_SETUP_DEMO"],
              ],
              null,
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ke.a, [Te.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              14,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              vl.b,
              vl.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              xl.a,
              [fl.a, _l.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", ""],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== e.component.routingService.goBack() && t),
                  t
                );
              },
              Cl.b,
              Cl.a,
            )),
            t.xb(7, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Pl.a,
              [Te.a, yl.a, t.l, [2, Me.a], [2, Pe.a]],
              null,
              null,
            ),
            t.xb(12, 16384, null, 0, Tl.a, [], null, null),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              14,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              15,
              49152,
              null,
              0,
              Sl.a,
              [[2, Pe.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              18,
              0,
              null,
              0,
              4,
              "au3-disclaimer",
              [],
              null,
              null,
              null,
              dn.b,
              dn.a,
            )),
            t.xb(
              19,
              4440064,
              null,
              0,
              gn.a,
              [hn.a, [2, Oe.a], t.h, Te.a],
              null,
              null,
            ),
            (e()(), t.hb(16777216, null, 0, 2, null, vn)),
            t.xb(
              21,
              16384,
              null,
              0,
              Ol.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, al.b, [t.h]),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "Screen:NAV_SETUP_DEMO"),
              e(l, 2, 0, "Screen:NAV_SETUP_DEMO"),
              e(l, 4, 0, ""),
              e(l, 5, 0, "Navigation", "Presentation mode"),
              e(l, 8, 0, ""),
              e(l, 10, 0),
              e(l, 14, 0),
              e(l, 15, 0, !1, "E163_Backbutton.webp"),
              e(l, 19, 0),
              e(
                l,
                21,
                0,
                t.Yb(
                  l,
                  21,
                  0,
                  t.Nb(l, 22).transform(n.demoModeSettingsService.demoMode$),
                ),
              ));
          },
          function (e, l) {
            (e(
              l,
              3,
              0,
              t.Nb(l, 5).hideLeftBorder,
              t.Nb(l, 5).hideDividingBorders,
            ),
              e(
                l,
                6,
                0,
                t.Nb(l, 14).markerClassEnabled,
                t.Nb(l, 15).useItemPlaceholder,
              ));
          },
        );
      }
      function fn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-presentation-mode",
              [],
              null,
              null,
              null,
              xn,
              mn,
            )),
            t.xb(
              1,
              180224,
              null,
              0,
              ue,
              [ze.a, hn.a, Ue.i, J.a, pn.c],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var _n = t.ub("au3-presentation-mode", ue, fn, {}, {}, []),
        Cn = n("apBa"),
        Pn = n("xMt+"),
        yn = n("uBIV"),
        Tn = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;display:block;height:100%;width:100%}.screen[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;font-size:40px}.map-content-list__checkbox-item[_ngcontent-%COMP%]{height:100px;padding:0 20px}",
            ],
          ],
          data: {},
        });
      function Sn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-list-checkbox-item",
              [["class", "map-content-list__checkbox-item"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "valueChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "valueChange" === l &&
                    (t =
                      !1 !==
                        e.component.toggleCheckmark(
                          e.context.$implicit.id,
                          n,
                        ) && t),
                  t
                );
              },
              Cn.b,
              Cn.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              Pn.a,
              [],
              {
                icon: [0, "icon"],
                titleTextId: [1, "titleTextId"],
                titleIdEnumType: [2, "titleIdEnumType"],
                titleDeveloperText: [3, "titleDeveloperText"],
                checked: [4, "checked"],
              },
              { valueChange: "valueChange" },
            ),
            t.xb(
              3,
              671744,
              null,
              0,
              pl.a,
              [Pe.a, Ue.i, [2, Ue.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(
              l,
              1,
              0,
              l.context.$implicit.disabled,
              n.popupIdsEnum.POPUP_MAP_CONTENT_SETTINGS_3D_CITY_MODEL,
            ),
              e(
                l,
                2,
                0,
                l.context.$implicit.icon,
                l.context.$implicit.id,
                n.staticCheckBoxesEnum,
                l.context.$implicit.developerText,
                l.context.$implicit.checked,
              ),
              e(
                l,
                3,
                0,
                null == l.context.$implicit
                  ? null
                  : l.context.$implicit.blocking,
              ));
          },
          function (e, l) {
            e(l, 0, 0, t.Nb(l, 1).combinedDisabled, t.Nb(l, 1).useBrighterIcon);
          },
        );
      }
      function On(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              24,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:NAV_SETUP_CONTENT_MMI"],
              ],
              null,
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ke.a, [Te.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              14,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              vl.b,
              vl.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              xl.a,
              [fl.a, _l.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", ""],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l && (t = !1 !== e.component.goBack() && t),
                  t
                );
              },
              Cl.b,
              Cl.a,
            )),
            t.xb(7, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Pl.a,
              [Te.a, yl.a, t.l, [2, Me.a], [2, Pe.a]],
              null,
              null,
            ),
            t.xb(12, 16384, null, 0, Tl.a, [], null, null),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              14,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              15,
              49152,
              null,
              0,
              Sl.a,
              [[2, Pe.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              18,
              0,
              null,
              0,
              6,
              "au3-list",
              [["class", "map-content-list"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              il.b,
              il.a,
            )),
            t.Sb(6144, null, ol.a, null, [ul.a]),
            t.xb(20, 16384, null, 0, sl.a, [t.l], null, null),
            t.xb(
              21,
              12828672,
              null,
              1,
              ul.a,
              [
                [2, rl.a],
                [2, cl.a],
                [8, null],
                [2, Oe.a],
                [2, bl.a],
                [2, dl.a],
                [2, De.b],
                Ue.i,
                t.z,
                t.h,
                Te.a,
                gl.a,
                hl.a,
                [2, Ve.a],
                Ae.a,
                [2, Ue.a],
              ],
              null,
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (e()(), t.hb(16777216, [[1, 2]], 0, 1, null, Sn)),
            t.xb(
              24,
              278528,
              null,
              0,
              al.j,
              [t.P, t.L, t.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "Screen:NAV_SETUP_CONTENT_MMI"),
              e(l, 2, 0, "Screen:NAV_SETUP_CONTENT_MMI"),
              e(l, 4, 0, ""),
              e(l, 5, 0, "Navigation", "Karteninhalt"),
              e(l, 8, 0, ""),
              e(l, 10, 0),
              e(l, 14, 0),
              e(l, 15, 0, !1, "E163_Backbutton.webp"),
              e(l, 21, 0),
              e(l, 24, 0, n.items));
          },
          function (e, l) {
            (e(
              l,
              3,
              0,
              t.Nb(l, 5).hideLeftBorder,
              t.Nb(l, 5).hideDividingBorders,
            ),
              e(
                l,
                6,
                0,
                t.Nb(l, 14).markerClassEnabled,
                t.Nb(l, 15).useItemPlaceholder,
              ),
              e(l, 18, 0, t.Nb(l, 21).showLineNumbers));
          },
        );
      }
      function In(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-map-content",
              [],
              null,
              null,
              null,
              On,
              Tn,
            )),
            t.xb(
              1,
              245760,
              null,
              0,
              E.a,
              [ze.a, yn.b, Ue.i, Ie.a, U.a, B.a],
              null,
              null,
            ),
          ],
          function (e, l) {
            e(l, 1, 0);
          },
          null,
        );
      }
      var Nn = t.ub("au3-map-content", E.a, In, {}, {}, []),
        An = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;display:block;height:100%;width:100%}.screen[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;font-size:40px}.settings-list__toggle-item[_ngcontent-%COMP%]{padding:0 20px}.settings-list__item[_ngcontent-%COMP%]{height:100px}",
            ],
          ],
          data: {},
        });
      function Mn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-toggle-button-group",
              [
                ["class", "settings-list__toggle-item"],
                ["id", "routeCongestionAvoidance"],
                ["titleDeveloperText", "Congestion Avoidance"],
              ],
              null,
              [[null, "selectedChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "selectedChange" === l &&
                    (t = !1 !== e.component.setCongestionAvoidance(n) && t),
                  t
                );
              },
              Fl.b,
              Fl.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              4374528,
              null,
              0,
              $l.a,
              [[2, Pe.a], t.h],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                data: [1, "data"],
                selected: [2, "selected"],
              },
              { selectedChange: "selectedChange" },
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "routeCongestionAvoidance"),
              e(
                l,
                2,
                0,
                "Congestion Avoidance",
                n.congestionAvoidanceOptions,
                n.congestionAvoidanceItem,
              ));
          },
          null,
        );
      }
      function Dn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-toggle-button-group",
              [
                ["class", "settings-list__toggle-item"],
                ["id", "routeAvoidHighways"],
                ["titleDeveloperText", "Highways"],
              ],
              null,
              [[null, "selectedChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "selectedChange" === l &&
                    (t = !1 !== e.component.setMotorwayUsage(n) && t),
                  t
                );
              },
              Fl.b,
              Fl.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              4374528,
              null,
              0,
              $l.a,
              [[2, Pe.a], t.h],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                data: [1, "data"],
                selected: [2, "selected"],
              },
              { selectedChange: "selectedChange" },
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "routeAvoidHighways"),
              e(
                l,
                2,
                0,
                "Highways",
                n.generalAvoidOptions,
                n.motorwayUsageItem,
              ));
          },
          null,
        );
      }
      function kn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-toggle-button-group",
              [
                ["class", "settings-list__toggle-item"],
                ["id", "routeAvoidVignette"],
                ["titleDeveloperText", "Vignette"],
              ],
              null,
              [[null, "selectedChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "selectedChange" === l &&
                    (t = !1 !== e.component.setVignetteUsage(n) && t),
                  t
                );
              },
              Fl.b,
              Fl.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              4374528,
              null,
              0,
              $l.a,
              [[2, Pe.a], t.h],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                data: [1, "data"],
                selected: [2, "selected"],
              },
              { selectedChange: "selectedChange" },
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "routeAvoidVignette"),
              e(
                l,
                2,
                0,
                "Vignette",
                n.generalAvoidOptions,
                n.vignetteUsageItem,
              ));
          },
          null,
        );
      }
      function Ln(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-toggle-button-group",
              [
                ["class", "settings-list__toggle-item"],
                ["id", "routeAvoidTollRoads"],
                ["titleDeveloperText", "Toll Roads"],
              ],
              null,
              [[null, "selectedChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "selectedChange" === l &&
                    (t = !1 !== e.component.setTollRoadsUsage(n) && t),
                  t
                );
              },
              Fl.b,
              Fl.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              4374528,
              null,
              0,
              $l.a,
              [[2, Pe.a], t.h],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                data: [1, "data"],
                selected: [2, "selected"],
              },
              { selectedChange: "selectedChange" },
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "routeAvoidTollRoads"),
              e(
                l,
                2,
                0,
                "Toll Roads",
                n.generalAvoidOptions,
                n.tollRoadsUsageItem,
              ));
          },
          null,
        );
      }
      function En(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-toggle-button-group",
              [
                ["class", "settings-list__toggle-item"],
                ["id", "routeAvoidFerries"],
                ["titleDeveloperText", "Ferries"],
              ],
              null,
              [[null, "selectedChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "selectedChange" === l &&
                    (t = !1 !== e.component.setFerriesUsage(n) && t),
                  t
                );
              },
              Fl.b,
              Fl.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              4374528,
              null,
              0,
              $l.a,
              [[2, Pe.a], t.h],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                data: [1, "data"],
                selected: [2, "selected"],
              },
              { selectedChange: "selectedChange" },
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "routeAvoidFerries"),
              e(l, 2, 0, "Ferries", n.generalAvoidOptions, n.ferriesUsageItem));
          },
          null,
        );
      }
      function Rn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-toggle-button-group",
              [
                ["class", "settings-list__toggle-item"],
                ["id", "routeCarTrain"],
                ["titleDeveloperText", "CarTrain"],
              ],
              null,
              [[null, "selectedChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "selectedChange" === l &&
                    (t = !1 !== e.component.setMotorrailUsage(n) && t),
                  t
                );
              },
              Fl.b,
              Fl.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              4374528,
              null,
              0,
              $l.a,
              [[2, Pe.a], t.h],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                data: [1, "data"],
                selected: [2, "selected"],
              },
              { selectedChange: "selectedChange" },
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "routeCarTrain"),
              e(
                l,
                2,
                0,
                "CarTrain",
                n.generalAvoidOptions,
                n.motorrailUsageItem,
              ));
          },
          null,
        );
      }
      function wn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-toggle-button-group",
              [
                ["class", "settings-list__toggle-item"],
                ["id", "routeAvoidSeasonalRestricted"],
                ["titleDeveloperText", "Seasonal Restricted Roads"],
              ],
              null,
              [[null, "selectedChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "selectedChange" === l &&
                    (t = !1 !== e.component.setSeasonalRestrictedUsage(n) && t),
                  t
                );
              },
              Fl.b,
              Fl.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              4374528,
              null,
              0,
              $l.a,
              [[2, Pe.a], t.h],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                data: [1, "data"],
                selected: [2, "selected"],
              },
              { selectedChange: "selectedChange" },
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "routeAvoidSeasonalRestricted"),
              e(
                l,
                2,
                0,
                "Seasonal Restricted Roads",
                n.generalAvoidOptionsWithAutomatic,
                n.seasonalRestrictedRoadsUsageItem,
              ));
          },
          null,
        );
      }
      function zn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-toggle-button-group",
              [
                ["class", "settings-list__toggle-item"],
                ["id", "routeAvoidHovLanes"],
                ["titleDeveloperText", "HOV lanes"],
              ],
              null,
              [[null, "selectedChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "selectedChange" === l &&
                    (t = !1 !== e.component.setHovLaneUsage(n) && t),
                  t
                );
              },
              Fl.b,
              Fl.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              4374528,
              null,
              0,
              $l.a,
              [[2, Pe.a], t.h],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                data: [1, "data"],
                selected: [2, "selected"],
              },
              { selectedChange: "selectedChange" },
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "routeAvoidHovLanes"),
              e(
                l,
                2,
                0,
                "HOV lanes",
                n.generalAvoidOptions,
                n.hovLanesUsageItem,
              ));
          },
          null,
        );
      }
      function Un(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
      function Bn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
      function Fn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
      function $n(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
      function Vn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
      function jn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
      function Hn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
      function Yn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              14,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, Un)),
            t.xb(
              2,
              540672,
              null,
              0,
              al.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, Bn)),
            t.xb(
              4,
              540672,
              null,
              0,
              al.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, Fn)),
            t.xb(
              6,
              540672,
              null,
              0,
              al.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, $n)),
            t.xb(
              8,
              540672,
              null,
              0,
              al.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, Vn)),
            t.xb(
              10,
              540672,
              null,
              0,
              al.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, jn)),
            t.xb(
              12,
              540672,
              null,
              0,
              al.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, Hn)),
            t.xb(
              14,
              540672,
              null,
              0,
              al.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (e()(), t.hb(0, null, null, 0)),
          ],
          function (e, l) {
            (e(l, 2, 0, t.Nb(l.parent, 23)),
              e(l, 4, 0, t.Nb(l.parent, 24)),
              e(l, 6, 0, t.Nb(l.parent, 25)),
              e(l, 8, 0, t.Nb(l.parent, 26)),
              e(l, 10, 0, t.Nb(l.parent, 27)),
              e(l, 12, 0, t.Nb(l.parent, 28)),
              e(l, 14, 0, t.Nb(l.parent, 29)));
          },
          null,
        );
      }
      function Wn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
      function Gn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
      function Zn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
      function Kn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
      function Jn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, Wn)),
            t.xb(
              2,
              540672,
              null,
              0,
              al.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, Gn)),
            t.xb(
              4,
              540672,
              null,
              0,
              al.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, Zn)),
            t.xb(
              6,
              540672,
              null,
              0,
              al.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, Kn)),
            t.xb(
              8,
              540672,
              null,
              0,
              al.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (e()(), t.hb(0, null, null, 0)),
          ],
          function (e, l) {
            (e(l, 2, 0, t.Nb(l.parent, 30)),
              e(l, 4, 0, t.Nb(l.parent, 24)),
              e(l, 6, 0, t.Nb(l.parent, 26)),
              e(l, 8, 0, t.Nb(l.parent, 27)));
          },
          null,
        );
      }
      function Xn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
      function Qn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
      function qn(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
      function et(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
      function lt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
      function nt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
      function tt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
      function at(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              14,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, Xn)),
            t.xb(
              2,
              540672,
              null,
              0,
              al.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, Qn)),
            t.xb(
              4,
              540672,
              null,
              0,
              al.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, qn)),
            t.xb(
              6,
              540672,
              null,
              0,
              al.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, et)),
            t.xb(
              8,
              540672,
              null,
              0,
              al.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, lt)),
            t.xb(
              10,
              540672,
              null,
              0,
              al.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, nt)),
            t.xb(
              12,
              540672,
              null,
              0,
              al.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, tt)),
            t.xb(
              14,
              540672,
              null,
              0,
              al.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (e()(), t.hb(0, null, null, 0)),
          ],
          function (e, l) {
            (e(l, 2, 0, t.Nb(l.parent, 23)),
              e(l, 4, 0, t.Nb(l.parent, 24)),
              e(l, 6, 0, t.Nb(l.parent, 25)),
              e(l, 8, 0, t.Nb(l.parent, 26)),
              e(l, 10, 0, t.Nb(l.parent, 27)),
              e(l, 12, 0, t.Nb(l.parent, 28)),
              e(l, 14, 0, t.Nb(l.parent, 29)));
          },
          null,
        );
      }
      function it(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              36,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:NAV_SETUP_CRITERIA"],
              ],
              null,
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ke.a, [Te.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              14,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              vl.b,
              vl.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              xl.a,
              [fl.a, _l.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", ""],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l && (t = !1 !== e.component.goBack() && t),
                  t
                );
              },
              Cl.b,
              Cl.a,
            )),
            t.xb(7, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Pl.a,
              [Te.a, yl.a, t.l, [2, Me.a], [2, Pe.a]],
              null,
              null,
            ),
            t.xb(12, 16384, null, 0, Tl.a, [], null, null),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              14,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              15,
              49152,
              null,
              0,
              Sl.a,
              [[2, Pe.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              18,
              0,
              null,
              0,
              18,
              "au3-list",
              [["class", "settings-list"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              il.b,
              il.a,
            )),
            t.Sb(6144, null, ol.a, null, [ul.a]),
            t.xb(20, 16384, null, 0, sl.a, [t.l], null, null),
            t.xb(
              21,
              12828672,
              null,
              1,
              ul.a,
              [
                [2, rl.a],
                [2, cl.a],
                [8, null],
                [2, Oe.a],
                [2, bl.a],
                [2, dl.a],
                [2, De.b],
                Ue.i,
                t.z,
                t.h,
                Te.a,
                gl.a,
                hl.a,
                [2, Ve.a],
                Ae.a,
                [2, Ue.a],
              ],
              null,
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (e()(),
            t.hb(
              0,
              [
                [1, 2],
                ["routeCongestionAvoidance", 2],
              ],
              0,
              0,
              null,
              Mn,
            )),
            (e()(),
            t.hb(
              0,
              [
                [1, 2],
                ["routeAvoidHighways", 2],
              ],
              0,
              0,
              null,
              Dn,
            )),
            (e()(),
            t.hb(
              0,
              [
                [1, 2],
                ["routeAvoidVignette", 2],
              ],
              0,
              0,
              null,
              kn,
            )),
            (e()(),
            t.hb(
              0,
              [
                [1, 2],
                ["routeAvoidTollRoads", 2],
              ],
              0,
              0,
              null,
              Ln,
            )),
            (e()(),
            t.hb(
              0,
              [
                [1, 2],
                ["routeAvoidFerries", 2],
              ],
              0,
              0,
              null,
              En,
            )),
            (e()(),
            t.hb(
              0,
              [
                [1, 2],
                ["routeCarTrain", 2],
              ],
              0,
              0,
              null,
              Rn,
            )),
            (e()(),
            t.hb(
              0,
              [
                [1, 2],
                ["routeAvoidSeasonalRestricted", 2],
              ],
              0,
              0,
              null,
              wn,
            )),
            (e()(),
            t.hb(
              0,
              [
                [1, 2],
                ["routeAvoidHovLanes", 2],
              ],
              0,
              0,
              null,
              zn,
            )),
            (e()(), t.hb(16777216, [[1, 2]], 0, 1, null, Yn)),
            t.xb(
              32,
              16384,
              null,
              0,
              al.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], 0, 1, null, Jn)),
            t.xb(
              34,
              16384,
              null,
              0,
              al.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], 0, 1, null, at)),
            t.xb(
              36,
              16384,
              null,
              0,
              al.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "Screen:NAV_SETUP_CRITERIA"),
              e(l, 2, 0, "Screen:NAV_SETUP_CRITERIA"),
              e(l, 4, 0, ""),
              e(l, 5, 0, "Navigation", "Routenkriterien"),
              e(l, 8, 0, ""),
              e(l, 10, 0),
              e(l, 14, 0),
              e(l, 15, 0, !1, "E163_Backbutton.webp"),
              e(l, 21, 0),
              e(l, 32, 0, n.configService.isEURegion()),
              e(l, 34, 0, n.configService.isNorthAmericaRegion()),
              e(l, 36, 0, n.configService.isRestOfTheWorldRegion()));
          },
          function (e, l) {
            (e(
              l,
              3,
              0,
              t.Nb(l, 5).hideLeftBorder,
              t.Nb(l, 5).hideDividingBorders,
            ),
              e(
                l,
                6,
                0,
                t.Nb(l, 14).markerClassEnabled,
                t.Nb(l, 15).useItemPlaceholder,
              ),
              e(l, 18, 0, t.Nb(l, 21).showLineNumbers));
          },
        );
      }
      function ot(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-global-route-options-eu-nar-row",
              [],
              null,
              null,
              null,
              it,
              An,
            )),
            t.xb(
              1,
              245760,
              null,
              0,
              L,
              [ze.a, Ie.a, I.a, P.a, N.b],
              null,
              null,
            ),
          ],
          function (e, l) {
            e(l, 1, 0);
          },
          null,
        );
      }
      var ut = t.ub("au3-global-route-options-eu-nar-row", L, ot, {}, {}, []),
        st = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;display:block;height:100%;width:100%}.screen[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;font-size:40px}.settings-list__toggle-item[_ngcontent-%COMP%]{padding:0 20px}.settings-list__item[_ngcontent-%COMP%]{height:100px}",
            ],
          ],
          data: {},
        });
      function rt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-toggle-button-group",
              [
                ["class", "settings-list__toggle-item"],
                ["id", "routeAvoidSeasonalRestricted"],
                ["titleDeveloperText", "Seasonal Restricted Roads"],
              ],
              null,
              [[null, "selectedChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "selectedChange" === l &&
                    (t = !1 !== e.component.setSeasonalRestrictedUsage(n) && t),
                  t
                );
              },
              Fl.b,
              Fl.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              4374528,
              null,
              0,
              $l.a,
              [[2, Pe.a], t.h],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                data: [1, "data"],
                selected: [2, "selected"],
              },
              { selectedChange: "selectedChange" },
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "routeAvoidSeasonalRestricted"),
              e(
                l,
                2,
                0,
                "Seasonal Restricted Roads",
                n.generalAvoidOptionsWithAutomatic,
                n.seasonalRestrictedRoadsUsageItem,
              ));
          },
          null,
        );
      }
      function ct(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              38,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:NAV_SETUP_CRITERIA_ASIA"],
              ],
              null,
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ke.a, [Te.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              14,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              vl.b,
              vl.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              xl.a,
              [fl.a, _l.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", ""],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l && (t = !1 !== e.component.goBack() && t),
                  t
                );
              },
              Cl.b,
              Cl.a,
            )),
            t.xb(7, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Pl.a,
              [Te.a, yl.a, t.l, [2, Me.a], [2, Pe.a]],
              null,
              null,
            ),
            t.xb(12, 16384, null, 0, Tl.a, [], null, null),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              14,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              15,
              49152,
              null,
              0,
              Sl.a,
              [[2, Pe.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              18,
              0,
              null,
              0,
              20,
              "au3-disclaimer",
              [],
              null,
              null,
              null,
              dn.b,
              dn.a,
            )),
            t.xb(
              19,
              4440064,
              null,
              0,
              gn.a,
              [hn.a, [2, Oe.a], t.h, Te.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              20,
              0,
              null,
              0,
              18,
              "au3-list",
              [["class", "settings-list"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              il.b,
              il.a,
            )),
            t.Sb(6144, null, ol.a, null, [ul.a]),
            t.xb(22, 16384, null, 0, sl.a, [t.l], null, null),
            t.xb(
              23,
              12828672,
              null,
              1,
              ul.a,
              [
                [2, rl.a],
                [2, cl.a],
                [8, null],
                [2, Oe.a],
                [2, bl.a],
                [2, dl.a],
                [2, De.b],
                Ue.i,
                t.z,
                t.h,
                Te.a,
                gl.a,
                hl.a,
                [2, Ve.a],
                Ae.a,
                [2, Ue.a],
              ],
              null,
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (e()(),
            t.yb(
              25,
              0,
              null,
              0,
              2,
              "au3-toggle-button-group",
              [
                ["class", "settings-list__toggle-item"],
                ["id", "routeCongestionAvoidance"],
                ["titleDeveloperText", "Congestion Avoidance"],
              ],
              null,
              [[null, "selectedChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "selectedChange" === l &&
                    (t = !1 !== e.component.setCongestionAvoidance(n) && t),
                  t
                );
              },
              Fl.b,
              Fl.a,
            )),
            t.xb(
              26,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              27,
              4374528,
              null,
              0,
              $l.a,
              [[2, Pe.a], t.h],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                data: [1, "data"],
                selected: [2, "selected"],
              },
              { selectedChange: "selectedChange" },
            ),
            (e()(),
            t.yb(
              28,
              0,
              null,
              0,
              2,
              "au3-toggle-button-group",
              [
                ["class", "settings-list__toggle-item"],
                ["id", "routeAvoidTollRoads"],
                ["titleDeveloperText", "Toll Roads"],
              ],
              null,
              [[null, "selectedChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "selectedChange" === l &&
                    (t = !1 !== e.component.setTollRoadsUsage(n) && t),
                  t
                );
              },
              Fl.b,
              Fl.a,
            )),
            t.xb(
              29,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              30,
              4374528,
              null,
              0,
              $l.a,
              [[2, Pe.a], t.h],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                data: [1, "data"],
                selected: [2, "selected"],
              },
              { selectedChange: "selectedChange" },
            ),
            (e()(),
            t.yb(
              31,
              0,
              null,
              0,
              2,
              "au3-toggle-button-group",
              [
                ["class", "settings-list__toggle-item"],
                ["id", "routeAvoidHighways"],
                ["titleDeveloperText", "Highways"],
              ],
              null,
              [[null, "selectedChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "selectedChange" === l &&
                    (t = !1 !== e.component.setMotorwayUsage(n) && t),
                  t
                );
              },
              Fl.b,
              Fl.a,
            )),
            t.xb(
              32,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              33,
              4374528,
              null,
              0,
              $l.a,
              [[2, Pe.a], t.h],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                data: [1, "data"],
                selected: [2, "selected"],
              },
              { selectedChange: "selectedChange" },
            ),
            (e()(),
            t.yb(
              34,
              0,
              null,
              0,
              2,
              "au3-toggle-button-group",
              [
                ["class", "settings-list__toggle-item"],
                ["id", "routeAvoidFerries"],
                ["titleDeveloperText", "Ferries"],
              ],
              null,
              [[null, "selectedChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "selectedChange" === l &&
                    (t = !1 !== e.component.setFerriesUsage(n) && t),
                  t
                );
              },
              Fl.b,
              Fl.a,
            )),
            t.xb(
              35,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              36,
              4374528,
              null,
              0,
              $l.a,
              [[2, Pe.a], t.h],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                data: [1, "data"],
                selected: [2, "selected"],
              },
              { selectedChange: "selectedChange" },
            ),
            (e()(), t.hb(16777216, [[1, 2]], 0, 1, null, rt)),
            t.xb(
              38,
              16384,
              null,
              0,
              al.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "Screen:NAV_SETUP_CRITERIA_ASIA"),
              e(l, 2, 0, "Screen:NAV_SETUP_CRITERIA_ASIA"),
              e(l, 4, 0, ""),
              e(l, 5, 0, "Navigation", "Routenkriterien"),
              e(l, 8, 0, ""),
              e(l, 10, 0),
              e(l, 14, 0),
              e(l, 15, 0, !1, "E163_Backbutton.webp"),
              e(l, 19, 0),
              e(l, 23, 0),
              e(l, 26, 0, "routeCongestionAvoidance"),
              e(
                l,
                27,
                0,
                "Congestion Avoidance",
                n.congestionAvoidanceOptions,
                n.congestionAvoidanceItem,
              ),
              e(l, 29, 0, "routeAvoidTollRoads"),
              e(
                l,
                30,
                0,
                "Toll Roads",
                n.generalAvoidOptions,
                n.tollRoadsUsageItem,
              ),
              e(l, 32, 0, "routeAvoidHighways"),
              e(
                l,
                33,
                0,
                "Highways",
                n.generalAvoidOptions,
                n.motorwayUsageItem,
              ),
              e(l, 35, 0, "routeAvoidFerries"),
              e(l, 36, 0, "Ferries", n.generalAvoidOptions, n.ferriesUsageItem),
              e(l, 38, 0, n.configService.isJapanRegion()));
          },
          function (e, l) {
            (e(
              l,
              3,
              0,
              t.Nb(l, 5).hideLeftBorder,
              t.Nb(l, 5).hideDividingBorders,
            ),
              e(
                l,
                6,
                0,
                t.Nb(l, 14).markerClassEnabled,
                t.Nb(l, 15).useItemPlaceholder,
              ),
              e(l, 20, 0, t.Nb(l, 23).showLineNumbers));
          },
        );
      }
      function bt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-global-route-options-asia",
              [],
              null,
              null,
              null,
              ct,
              st,
            )),
            t.xb(
              1,
              245760,
              null,
              0,
              ge,
              [ze.a, Ie.a, I.a, P.a, N.b],
              null,
              null,
            ),
          ],
          function (e, l) {
            e(l, 1, 0);
          },
          null,
        );
      }
      var dt = t.ub("au3-global-route-options-asia", ge, bt, {}, {}, []),
        gt = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;display:block;height:100%;width:100%}.screen[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;font-size:40px}.settings-list__toggle-item[_ngcontent-%COMP%]{padding:0 20px}.settings-list__item[_ngcontent-%COMP%]{height:100px}",
            ],
          ],
          data: {},
        });
      function ht(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              31,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:NAV_SETUP_ROUTEINFO"],
              ],
              null,
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ke.a, [Te.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              14,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              vl.b,
              vl.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              xl.a,
              [fl.a, _l.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", ""],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== e.component.routingService.goBack() && t),
                  t
                );
              },
              Cl.b,
              Cl.a,
            )),
            t.xb(7, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Pl.a,
              [Te.a, yl.a, t.l, [2, Me.a], [2, Pe.a]],
              null,
              null,
            ),
            t.xb(12, 16384, null, 0, Tl.a, [], null, null),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              14,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              15,
              49152,
              null,
              0,
              Sl.a,
              [[2, Pe.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              18,
              0,
              null,
              0,
              13,
              "au3-list",
              [
                ["class", "settings-list"],
                ["id", ""],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              il.b,
              il.a,
            )),
            t.Sb(6144, null, ol.a, null, [ul.a]),
            t.xb(
              20,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(21, 16384, null, 0, sl.a, [t.l], null, null),
            t.xb(
              22,
              12828672,
              null,
              1,
              ul.a,
              [
                [2, rl.a],
                [2, cl.a],
                [8, null],
                [2, Oe.a],
                [2, bl.a],
                [2, dl.a],
                [2, De.b],
                Ue.i,
                t.z,
                t.h,
                Te.a,
                gl.a,
                hl.a,
                [2, Ve.a],
                Ae.a,
                [2, Ue.a],
              ],
              null,
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (e()(),
            t.yb(
              24,
              0,
              null,
              0,
              3,
              "au3-list-switch-item",
              [
                ["class", "settings-list__item"],
                ["developerText", "Zeige Sonderziele"],
                ["id", "ShowPoiEvents"],
              ],
              null,
              [[null, "valueChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "valueChange" === l &&
                    (t =
                      !1 !==
                        e.component.routeInformationService.setShowPoiEvents(
                          n,
                        ) && t),
                  t
                );
              },
              el.b,
              el.a,
            )),
            t.xb(
              25,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              26,
              49152,
              null,
              0,
              ll.a,
              [[2, Pe.a]],
              { developerText: [0, "developerText"], value: [1, "value"] },
              { valueChange: "valueChange" },
            ),
            t.Pb(131072, al.b, [t.h]),
            (e()(),
            t.yb(
              28,
              0,
              null,
              0,
              3,
              "au3-list-switch-item",
              [
                ["class", "settings-list__item"],
                ["developerText", "Zeige Verkehrsmeldungen"],
                ["id", "ShowTrafficEvents"],
              ],
              null,
              [[null, "valueChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "valueChange" === l &&
                    (t =
                      !1 !==
                        e.component.routeInformationService.setShowTrafficEvents(
                          n,
                        ) && t),
                  t
                );
              },
              el.b,
              el.a,
            )),
            t.xb(
              29,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              30,
              49152,
              null,
              0,
              ll.a,
              [[2, Pe.a]],
              { developerText: [0, "developerText"], value: [1, "value"] },
              { valueChange: "valueChange" },
            ),
            t.Pb(131072, al.b, [t.h]),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "Screen:NAV_SETUP_ROUTEINFO"),
              e(l, 2, 0, "Screen:NAV_SETUP_ROUTEINFO"),
              e(l, 4, 0, ""),
              e(l, 5, 0, "Navigation", "Routeninformation"),
              e(l, 8, 0, ""),
              e(l, 10, 0),
              e(l, 14, 0),
              e(l, 15, 0, !1, "E163_Backbutton.webp"),
              e(l, 20, 0, ""),
              e(l, 22, 0),
              e(l, 25, 0, "ShowPoiEvents"),
              e(
                l,
                26,
                0,
                "Zeige Sonderziele",
                t.Yb(
                  l,
                  26,
                  1,
                  t
                    .Nb(l, 27)
                    .transform(n.routeInformationService.showPoiEvents$),
                ),
              ),
              e(l, 29, 0, "ShowTrafficEvents"),
              e(
                l,
                30,
                0,
                "Zeige Verkehrsmeldungen",
                t.Yb(
                  l,
                  30,
                  1,
                  t
                    .Nb(l, 31)
                    .transform(n.routeInformationService.showTrafficEvents$),
                ),
              ));
          },
          function (e, l) {
            (e(
              l,
              3,
              0,
              t.Nb(l, 5).hideLeftBorder,
              t.Nb(l, 5).hideDividingBorders,
            ),
              e(
                l,
                6,
                0,
                t.Nb(l, 14).markerClassEnabled,
                t.Nb(l, 15).useItemPlaceholder,
              ),
              e(l, 18, 0, t.Nb(l, 22).showLineNumbers));
          },
        );
      }
      function pt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-route-information",
              [],
              null,
              null,
              null,
              ht,
              gt,
            )),
            t.xb(1, 180224, null, 0, se, [ze.a, Y.a], null, null),
          ],
          null,
          null,
        );
      }
      var mt = t.ub("au3-route-information", se, pt, {}, {}, []),
        vt = n("Ps6X"),
        xt = n("8TlW"),
        ft = n("Xo58"),
        _t = n("m3Ja"),
        Ct = n("r+e+"),
        Pt = n("bmFL"),
        yt = n("sg2e"),
        Tt = t.wb({
          encapsulation: 0,
          styles: [
            [
              '[_nghost-%COMP%]{position:relative;display:block;height:100%;width:100%}.screen[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;font-size:40px}.settings-list__toggle-item[_ngcontent-%COMP%]{padding:0 20px}.settings-list__item[_ngcontent-%COMP%]{height:100px}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}.settings-list__item.state-disabled[_ngcontent-%COMP%]{filter:grayscale(100%) brightness(.4)}.settings-list__item--static[_ngcontent-%COMP%]{display:flex;position:relative;align-items:center;padding:0 20px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}',
            ],
          ],
          data: {},
        });
      function St(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              35,
              "au3-list",
              [["class", "settings-list"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              il.b,
              il.a,
            )),
            t.Sb(6144, null, ol.a, null, [ul.a]),
            t.xb(2, 16384, null, 0, sl.a, [t.l], null, null),
            t.xb(
              3,
              12828672,
              null,
              1,
              ul.a,
              [
                [2, rl.a],
                [2, cl.a],
                [8, null],
                [2, Oe.a],
                [2, bl.a],
                [2, dl.a],
                [2, De.b],
                Ue.i,
                t.z,
                t.h,
                Te.a,
                gl.a,
                hl.a,
                [2, Ve.a],
                Ae.a,
                [2, Ue.a],
              ],
              null,
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (e()(),
            t.yb(
              5,
              0,
              null,
              0,
              4,
              "au3-list-route-switch-item",
              [
                ["class", "settings-list__item"],
                ["id", "PersonalRouteAssistantToggle"],
                [
                  "titleDeveloperText",
                  "Pers\xf6nliche Routenassistenz einschalten",
                ],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "valueChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "valueChange" === l &&
                    (t =
                      !1 !== e.component.onRouteAssistanceEnabledChange(n) &&
                      t),
                  t
                );
              },
              nl.b,
              nl.a,
            )),
            t.xb(
              6,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              7,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              8,
              114688,
              null,
              0,
              tl.a,
              [],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                subtitleHasText: [1, "subtitleHasText"],
                value: [2, "value"],
                type: [3, "type"],
                route: [4, "route"],
              },
              { valueChange: "valueChange" },
            ),
            t.Pb(131072, al.b, [t.h]),
            (e()(),
            t.yb(
              10,
              0,
              null,
              0,
              12,
              "div",
              [["class", "settings-list__item settings-list__item--static"]],
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
              ],
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== e.component.onAllRecordsDeleteTap() && t),
                  t
                );
              },
              null,
              null,
            )),
            t.xb(11, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              12,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              14,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              16,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              17,
              212992,
              null,
              0,
              vt.a,
              [[2, Me.a], [8, null], [3, vt.a], t.l, t.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            t.xb(
              18,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              19,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              20,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                [
                  "developerText",
                  "Alle pers\xf6nlichen Routen und Ziele l\xf6schen",
                ],
                ["id", "AllRecordsDelete"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              xt.b,
              xt.a,
            )),
            t.xb(
              21,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              22,
              245760,
              null,
              0,
              ft.a,
              [[6, Oe.a], _t.a, t.h, t.l, t.D, [2, Ct.a], [2, Tl.a], [2, Pt.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (e()(),
            t.yb(
              23,
              0,
              null,
              0,
              12,
              "div",
              [["class", "settings-list__item settings-list__item--static"]],
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
              ],
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== e.component.onLast24hRecordsDeleteTap() && t),
                  t
                );
              },
              null,
              null,
            )),
            t.xb(24, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              25,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              26,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              27,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              29,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              30,
              212992,
              null,
              0,
              vt.a,
              [[2, Me.a], [8, null], [3, vt.a], t.l, t.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            t.xb(
              31,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              32,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              33,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                [
                  "developerText",
                  "Aufzeichnungen der letzten 24 Stunden l\xf6schen",
                ],
                ["id", "Last24hRecordsDelete"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              xt.b,
              xt.a,
            )),
            t.xb(
              34,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              35,
              245760,
              null,
              0,
              ft.a,
              [[6, Oe.a], _t.a, t.h, t.l, t.D, [2, Ct.a], [2, Tl.a], [2, Pt.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 3, 0),
              e(l, 6, 0, "PersonalRouteAssistantToggle"),
              e(
                l,
                7,
                0,
                !(null != l.context.mib3Let && l.context.mib3Let.existence) ||
                  (null == l.context.mib3Let
                    ? null
                    : l.context.mib3Let.disabledReason),
              ),
              e(
                l,
                8,
                0,
                "Pers\xf6nliche Routenassistenz einschalten",
                !1,
                t.Yb(
                  l,
                  8,
                  2,
                  t.Nb(l, 9).transform(n.pnavSettingService.isPnavEnabled$),
                ),
                n.listItemType,
                n.NaviSettingsRoutes.children.PersonalRouteAssistant.children
                  .PnavSettingsInfo,
              ),
              e(
                l,
                13,
                0,
                !(null != l.context.mib3Let && l.context.mib3Let.existence) ||
                  (null == l.context.mib3Let
                    ? null
                    : l.context.mib3Let.disabledReason),
              ),
              e(l, 14, 0),
              e(l, 16, 0),
              e(l, 17, 0, n.uiStateType),
              e(l, 21, 0, "AllRecordsDelete"),
              e(
                l,
                22,
                0,
                "Alle pers\xf6nlichen Routen und Ziele l\xf6schen",
                "AllRecordsDelete",
                1,
              ),
              e(
                l,
                26,
                0,
                !(null != l.context.mib3Let && l.context.mib3Let.existence) ||
                  (null == l.context.mib3Let
                    ? null
                    : l.context.mib3Let.disabledReason),
              ),
              e(l, 27, 0),
              e(l, 29, 0),
              e(l, 30, 0, n.uiStateType),
              e(l, 34, 0, "Last24hRecordsDelete"),
              e(
                l,
                35,
                0,
                "Aufzeichnungen der letzten 24 Stunden l\xf6schen",
                "Last24hRecordsDelete",
                1,
              ));
          },
          function (e, l) {
            (e(l, 0, 0, t.Nb(l, 3).showLineNumbers),
              e(
                l,
                5,
                0,
                t.Nb(l, 7).combinedDisabled,
                t.Nb(l, 7).useBrighterIcon,
              ),
              e(l, 10, 1, [
                t.Nb(l, 13).combinedDisabled,
                t.Nb(l, 13).useBrighterIcon,
                t.Nb(l, 16).markerClassEnabled,
                t.Nb(l, 17).uiStateListHorizontal,
                t.Nb(l, 17).uiStateListVertical,
                t.Nb(l, 17).uiStateCoverLeft,
                t.Nb(l, 17).uiStateCoverRight,
                t.Nb(l, 17).uiStateCoverBottom,
                t.Nb(l, 17).uiStateButton,
                t.Nb(l, 17).uiStateByDabLeft,
                t.Nb(l, 17).uiStateByDabRight,
                t.Nb(l, 17).uiStateLbDabLeft,
                t.Nb(l, 17).uiStateLbDabRight,
              ]),
              e(
                l,
                20,
                0,
                t.Nb(l, 22).backgroundColor,
                t.Nb(l, 22).fixedNumberOfLines,
                t.Nb(l, 22).mayContainLatinCharsForArabic,
                t.Nb(l, 22).shortenWithEllipsisForArabic,
              ),
              e(l, 23, 1, [
                t.Nb(l, 26).combinedDisabled,
                t.Nb(l, 26).useBrighterIcon,
                t.Nb(l, 29).markerClassEnabled,
                t.Nb(l, 30).uiStateListHorizontal,
                t.Nb(l, 30).uiStateListVertical,
                t.Nb(l, 30).uiStateCoverLeft,
                t.Nb(l, 30).uiStateCoverRight,
                t.Nb(l, 30).uiStateCoverBottom,
                t.Nb(l, 30).uiStateButton,
                t.Nb(l, 30).uiStateByDabLeft,
                t.Nb(l, 30).uiStateByDabRight,
                t.Nb(l, 30).uiStateLbDabLeft,
                t.Nb(l, 30).uiStateLbDabRight,
              ]),
              e(
                l,
                33,
                0,
                t.Nb(l, 35).backgroundColor,
                t.Nb(l, 35).fixedNumberOfLines,
                t.Nb(l, 35).mayContainLatinCharsForArabic,
                t.Nb(l, 35).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function Ot(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              20,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:NAV_SETUP_PNAV"],
              ],
              null,
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ke.a, [Te.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              14,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              vl.b,
              vl.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              xl.a,
              [fl.a, _l.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", ""],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== e.component.routingService.goBack() && t),
                  t
                );
              },
              Cl.b,
              Cl.a,
            )),
            t.xb(7, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Pl.a,
              [Te.a, yl.a, t.l, [2, Me.a], [2, Pe.a]],
              null,
              null,
            ),
            t.xb(12, 16384, null, 0, Tl.a, [], null, null),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              14,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              15,
              49152,
              null,
              0,
              Sl.a,
              [[2, Pe.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
            (e()(), t.hb(16777216, null, 0, 2, null, St)),
            t.xb(
              19,
              16384,
              null,
              0,
              Ol.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, al.b, [t.h]),
          ],
          function (e, l) {
            var n,
              a = l.component;
            (e(l, 1, 0, "Screen:NAV_SETUP_PNAV"),
              e(l, 2, 0, "Screen:NAV_SETUP_PNAV"),
              e(l, 4, 0, ""),
              e(l, 5, 0, "Navigation", "Pers\xf6nliche Routenassistenz"),
              e(l, 8, 0, ""),
              e(l, 10, 0),
              e(l, 14, 0),
              e(l, 15, 0, !1, "E163_Backbutton.webp"),
              e(
                l,
                19,
                0,
                null ==
                  (n = t.Yb(
                    l,
                    19,
                    0,
                    t
                      .Nb(l, 20)
                      .transform(
                        a.functionAvailabilityService
                          .predictiveNavigationAvailability$,
                      ),
                  ))
                  ? null
                  : n.existenceAndPopupAction,
              ));
          },
          function (e, l) {
            (e(
              l,
              3,
              0,
              t.Nb(l, 5).hideLeftBorder,
              t.Nb(l, 5).hideDividingBorders,
            ),
              e(
                l,
                6,
                0,
                t.Nb(l, 14).markerClassEnabled,
                t.Nb(l, 15).useItemPlaceholder,
              ));
          },
        );
      }
      function It(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-personal-route-assistant",
              [],
              null,
              null,
              null,
              Ot,
              Tt,
            )),
            t.xb(
              1,
              49152,
              null,
              0,
              ae,
              [ze.a, yt.a, te.a, B.a, Te.a],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var Nt = t.ub("au3-personal-route-assistant", ae, It, {}, {}, []),
        At = n("4QvG"),
        Mt = n("Dayo"),
        Dt = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{position:relative;display:block;width:100%;height:100%}",
            ],
          ],
          data: {},
        });
      function kt(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:Personal_Navigation_Information"],
              ],
              null,
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ke.a, [Te.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              1,
              "au3-info-screen-view",
              [],
              null,
              null,
              null,
              At.b,
              At.a,
            )),
            t.xb(
              4,
              49152,
              null,
              0,
              Mt.a,
              [ze.a],
              {
                secondaryDevText: [0, "secondaryDevText"],
                informationText: [1, "informationText"],
              },
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "Screen:Personal_Navigation_Information"),
              e(l, 2, 0, "Screen:Personal_Navigation_Information"),
              e(l, 4, 0, "Pers\xf6nliche Routenassistenz", n.informationText));
          },
          null,
        );
      }
      function Lt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-pnav-settings-info",
              [],
              null,
              null,
              null,
              kt,
              Dt,
            )),
            t.xb(1, 49152, null, 0, xe, [ze.a], null, null),
          ],
          null,
          null,
        );
      }
      var Et = t.ub("au3-pnav-settings-info", xe, Lt, {}, {}, []),
        Rt = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;display:block;height:100%;width:100%}.screen[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;font-size:40px}.settings-list__toggle-item[_ngcontent-%COMP%]{padding:0 20px}.settings-list__item[_ngcontent-%COMP%]{height:100px}",
            ],
          ],
          data: {},
        });
      function wt(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              36,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:NAV_ITS_SPOT_SETTING--CL32--"],
              ],
              null,
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ke.a, [Te.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              14,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              vl.b,
              vl.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              xl.a,
              [fl.a, _l.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", ""],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== e.component.routingService.goBack() && t),
                  t
                );
              },
              Cl.b,
              Cl.a,
            )),
            t.xb(7, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Pl.a,
              [Te.a, yl.a, t.l, [2, Me.a], [2, Pe.a]],
              null,
              null,
            ),
            t.xb(12, 16384, null, 0, Tl.a, [], null, null),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              14,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              15,
              49152,
              null,
              0,
              Sl.a,
              [[2, Pe.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              18,
              0,
              null,
              0,
              18,
              "au3-disclaimer",
              [],
              null,
              null,
              null,
              dn.b,
              dn.a,
            )),
            t.xb(
              19,
              4440064,
              null,
              0,
              gn.a,
              [hn.a, [2, Oe.a], t.h, Te.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              20,
              0,
              null,
              0,
              16,
              "au3-list",
              [["class", "settings-list"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              il.b,
              il.a,
            )),
            t.Sb(6144, null, ol.a, null, [ul.a]),
            t.xb(22, 16384, null, 0, sl.a, [t.l], null, null),
            t.xb(
              23,
              12828672,
              null,
              1,
              ul.a,
              [
                [2, rl.a],
                [2, cl.a],
                [8, null],
                [2, Oe.a],
                [2, bl.a],
                [2, dl.a],
                [2, De.b],
                Ue.i,
                t.z,
                t.h,
                Te.a,
                gl.a,
                hl.a,
                [2, Ve.a],
                Ae.a,
                [2, Ue.a],
              ],
              null,
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (e()(),
            t.yb(
              25,
              0,
              null,
              0,
              3,
              "au3-toggle-button-group",
              [
                ["class", "settings-list__toggle-item"],
                ["id", "ItsPopupDuration"],
                ["titleDeveloperText", "Popup Duration"],
              ],
              null,
              [[null, "selectedChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "selectedChange" === l &&
                    (t =
                      !1 !== (e.component.itsService.itsPopupDuration = n) &&
                      t),
                  t
                );
              },
              Fl.b,
              Fl.a,
            )),
            t.xb(
              26,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              27,
              4374528,
              null,
              0,
              $l.a,
              [[2, Pe.a], t.h],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                data: [1, "data"],
                selected: [2, "selected"],
              },
              { selectedChange: "selectedChange" },
            ),
            t.Pb(131072, al.b, [t.h]),
            (e()(),
            t.yb(
              29,
              0,
              null,
              0,
              3,
              "au3-list-switch-item",
              [
                ["class", "settings-list__item"],
                ["developerText", "ETC traffic info popup"],
                ["id", "EtcTrafficInfoPopup"],
              ],
              null,
              [[null, "valueChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "valueChange" === l &&
                    (t =
                      !1 !== (e.component.itsService.itsAllowInfoPopup = n) &&
                      t),
                  t
                );
              },
              el.b,
              el.a,
            )),
            t.xb(
              30,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              31,
              49152,
              null,
              0,
              ll.a,
              [[2, Pe.a]],
              { developerText: [0, "developerText"], value: [1, "value"] },
              { valueChange: "valueChange" },
            ),
            t.Pb(131072, al.b, [t.h]),
            (e()(),
            t.yb(
              33,
              0,
              null,
              0,
              3,
              "au3-list-switch-item",
              [
                ["class", "settings-list__item"],
                ["developerText", "send probe data to backend"],
                ["id", "uploadFunction"],
              ],
              null,
              [[null, "valueChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "valueChange" === l &&
                    (t = !1 !== e.component.toggleUploadFunction(n) && t),
                  t
                );
              },
              el.b,
              el.a,
            )),
            t.xb(
              34,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              35,
              49152,
              null,
              0,
              ll.a,
              [[2, Pe.a]],
              {
                developerText: [0, "developerText"],
                value: [1, "value"],
                resetDelay: [2, "resetDelay"],
              },
              { valueChange: "valueChange" },
            ),
            t.Pb(131072, al.b, [t.h]),
          ],
          function (e, l) {
            var n,
              a = l.component;
            (e(l, 1, 0, "Screen:NAV_ITS_SPOT_SETTING--CL32--"),
              e(l, 2, 0, "Screen:NAV_ITS_SPOT_SETTING--CL32--"),
              e(l, 4, 0, ""),
              e(l, 5, 0, "Navigation", "ITS Spot Setting"),
              e(l, 8, 0, ""),
              e(l, 10, 0),
              e(l, 14, 0),
              e(l, 15, 0, !1, "E163_Backbutton.webp"),
              e(l, 19, 0),
              e(l, 23, 0),
              e(l, 26, 0, "ItsPopupDuration"),
              e(
                l,
                27,
                0,
                "Popup Duration",
                a.itsPopupDurations,
                t.Yb(
                  l,
                  27,
                  2,
                  t.Nb(l, 28).transform(a.itsService.itsPopupDuration$),
                ),
              ),
              e(l, 30, 0, "EtcTrafficInfoPopup"),
              e(
                l,
                31,
                0,
                "ETC traffic info popup",
                t.Yb(
                  l,
                  31,
                  1,
                  t.Nb(l, 32).transform(a.itsService.itsAllowInfoPopup$),
                ),
              ),
              e(l, 34, 0, "uploadFunction"),
              e(
                l,
                35,
                0,
                "send probe data to backend",
                null ==
                  (n = t.Yb(
                    l,
                    35,
                    1,
                    t.Nb(l, 36).transform(a.etcService.etcSettings$),
                  ))
                  ? null
                  : n.allowSendCarData,
                0,
              ));
          },
          function (e, l) {
            (e(
              l,
              3,
              0,
              t.Nb(l, 5).hideLeftBorder,
              t.Nb(l, 5).hideDividingBorders,
            ),
              e(
                l,
                6,
                0,
                t.Nb(l, 14).markerClassEnabled,
                t.Nb(l, 15).useItemPlaceholder,
              ),
              e(l, 20, 0, t.Nb(l, 23).showLineNumbers));
          },
        );
      }
      function zt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-its-spot-setting",
              [],
              null,
              null,
              null,
              wt,
              Rt,
            )),
            t.xb(
              1,
              180224,
              null,
              0,
              de,
              [W.a, ce.b, ze.a, yt.a, Te.a],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var Ut = t.ub("au3-its-spot-setting", de, zt, {}, {}, []),
        Bt = n("VwjD"),
        Ft = n("/AMN"),
        $t = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;display:block;height:100%;width:100%}.screen[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;font-size:40px}.settings-list__toggle-item[_ngcontent-%COMP%]{padding:0 20px}.settings-list__item[_ngcontent-%COMP%]{height:100px}",
            ],
          ],
          data: {},
        });
      function Vt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              20,
              "au3-list",
              [["class", "settings-list"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              il.b,
              il.a,
            )),
            t.Sb(6144, null, ol.a, null, [ul.a]),
            t.xb(2, 16384, null, 0, sl.a, [t.l], null, null),
            t.xb(
              3,
              12828672,
              null,
              1,
              ul.a,
              [
                [2, rl.a],
                [2, cl.a],
                [8, null],
                [2, Oe.a],
                [2, bl.a],
                [2, dl.a],
                [2, De.b],
                Ue.i,
                t.z,
                t.h,
                Te.a,
                gl.a,
                hl.a,
                [2, Ve.a],
                Ae.a,
                [2, Ue.a],
              ],
              null,
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (e()(),
            t.yb(
              5,
              0,
              null,
              0,
              3,
              "au3-list-switch-item",
              [
                ["class", "settings-list__item"],
                ["developerText", "Use traffic regulation assistant"],
                ["id", "NumberPlateRestriction"],
              ],
              null,
              [[null, "valueChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "valueChange" === l &&
                    (t =
                      !1 !==
                        e.component.toggleNprAvoidance(n, e.context.mib3Let) &&
                      t),
                  t
                );
              },
              el.b,
              el.a,
            )),
            t.xb(
              6,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              7,
              49152,
              null,
              0,
              ll.a,
              [[2, Pe.a]],
              { developerText: [0, "developerText"], value: [1, "value"] },
              { valueChange: "valueChange" },
            ),
            t.Pb(131072, al.b, [t.h]),
            (e()(),
            t.yb(
              9,
              0,
              null,
              0,
              11,
              "au3-list-preview-item",
              [
                ["class", "settings-list__item"],
                ["id", "ModifyPlateNumber"],
                ["titleDeveloperText", "Modify plate number"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              Bt.b,
              Bt.a,
            )),
            t.xb(
              10,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              null,
              null,
            ),
            t.xb(11, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              12,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              14,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              null,
            ),
            t.xb(
              15,
              671744,
              null,
              0,
              we.a,
              [ze.a, Ue.i, Pe.a, Me.a, we.b, Be.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              17,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              18,
              49152,
              null,
              0,
              Ft.a,
              [],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                previewNonI18nText: [1, "previewNonI18nText"],
              },
              null,
            ),
            t.xb(
              19,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              20,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 3, 0),
              e(l, 6, 0, "NumberPlateRestriction"),
              e(
                l,
                7,
                0,
                "Use traffic regulation assistant",
                t.Yb(
                  l,
                  7,
                  1,
                  t
                    .Nb(l, 8)
                    .transform(n.trafficeventSettingService.nprAvoidance$),
                ),
              ),
              e(l, 12, 0, "ModifyPlateNumber"),
              e(l, 14, 0),
              e(
                l,
                15,
                0,
                n.NaviSettingsRoute.children.NprSetting.children.NprInput,
              ),
              e(l, 17, 0),
              e(
                l,
                18,
                0,
                "Modify plate number",
                n.getLicensePlateString(l.context.mib3Let),
              ));
          },
          function (e, l) {
            (e(l, 0, 0, t.Nb(l, 3).showLineNumbers),
              e(
                l,
                9,
                0,
                t.Nb(l, 10).combinedDisabled,
                t.Nb(l, 10).useBrighterIcon,
                t.Nb(l, 17).markerClassEnabled,
              ));
          },
        );
      }
      function jt(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              33,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:NPR_SETUP--CLU33--"],
              ],
              null,
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ke.a, [Te.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              27,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              vl.b,
              vl.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              xl.a,
              [fl.a, _l.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", "NprSettingsBackbutton"],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== e.component.globalRoutingService.goBack() && t),
                  t
                );
              },
              Cl.b,
              Cl.a,
            )),
            t.xb(7, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Pl.a,
              [Te.a, yl.a, t.l, [2, Me.a], [2, Pe.a]],
              null,
              null,
            ),
            t.xb(12, 16384, null, 0, Tl.a, [], null, null),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              14,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              15,
              49152,
              null,
              0,
              Sl.a,
              [[2, Pe.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              18,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E952_map_routeninfo.webp"],
                ["id", "NprSettingsInformationButton"],
                ["right", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              Cl.b,
              Cl.a,
            )),
            t.xb(
              19,
              147456,
              null,
              0,
              Pe.a,
              [ye.a, t.h, Te.a, [3, Pe.a]],
              null,
              null,
            ),
            t.xb(20, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              21,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              22,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              23,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              null,
            ),
            t.xb(
              24,
              671744,
              null,
              0,
              we.a,
              [ze.a, Ue.i, Pe.a, Me.a, we.b, Be.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.xb(25, 16384, null, 0, Tl.a, [], null, null),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              27,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              28,
              49152,
              null,
              0,
              Sl.a,
              [[2, Pe.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              29,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              30,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
            (e()(), t.hb(16777216, null, 0, 2, null, Vt)),
            t.xb(
              32,
              16384,
              null,
              0,
              Ol.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, al.b, [t.h]),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "Screen:NPR_SETUP--CLU33--"),
              e(l, 2, 0, "Screen:NPR_SETUP--CLU33--"),
              e(l, 4, 0, ""),
              e(l, 5, 0, "Navigation", "Traffic regulation assistant"),
              e(l, 8, 0, "NprSettingsBackbutton"),
              e(l, 10, 0),
              e(l, 14, 0),
              e(l, 15, 0, !1, "E163_Backbutton.webp"),
              e(l, 21, 0, "NprSettingsInformationButton"),
              e(l, 23, 0),
              e(
                l,
                24,
                0,
                n.NaviSettingsRoute.children.NprSetting.children.NprInfo,
              ),
              e(l, 27, 0),
              e(l, 28, 0, !1, "E952_map_routeninfo.webp"),
              e(
                l,
                32,
                0,
                t.Yb(
                  l,
                  32,
                  0,
                  t
                    .Nb(l, 33)
                    .transform(n.trafficeventSettingService.licensePlateCode$),
                ),
              ));
          },
          function (e, l) {
            (e(
              l,
              3,
              0,
              t.Nb(l, 5).hideLeftBorder,
              t.Nb(l, 5).hideDividingBorders,
            ),
              e(
                l,
                6,
                0,
                t.Nb(l, 14).markerClassEnabled,
                t.Nb(l, 15).useItemPlaceholder,
              ),
              e(
                l,
                18,
                0,
                t.Nb(l, 19).combinedDisabled,
                t.Nb(l, 19).useBrighterIcon,
                t.Nb(l, 27).markerClassEnabled,
                t.Nb(l, 28).useItemPlaceholder,
              ));
          },
        );
      }
      function Ht(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-npr-setting",
              [],
              null,
              null,
              null,
              jt,
              $t,
            )),
            t.xb(1, 180224, null, 0, he, [b.b, ze.a, Te.a], null, null),
          ],
          null,
          null,
        );
      }
      var Yt = t.ub("au3-npr-setting", he, Ht, {}, {}, []),
        Wt = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;display:block}.npr-info-text[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.npr-info-text[_ngcontent-%COMP%]{text-align:left;font-size:40px;color:#fff;overflow-y:auto;padding:25px 10px}.npr-info-text[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}",
            ],
          ],
          data: {},
        });
      function Gt(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              22,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:NPR_Information--CLU33--"],
              ],
              null,
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ke.a, [Te.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              14,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              vl.b,
              vl.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              xl.a,
              [fl.a, _l.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", ""],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== e.component.globalRoutingService.goBack() && t),
                  t
                );
              },
              Cl.b,
              Cl.a,
            )),
            t.xb(7, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Pl.a,
              [Te.a, yl.a, t.l, [2, Me.a], [2, Pe.a]],
              null,
              null,
            ),
            t.xb(12, 16384, null, 0, Tl.a, [], null, null),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              14,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              15,
              49152,
              null,
              0,
              Sl.a,
              [[2, Pe.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              18,
              0,
              null,
              0,
              4,
              "au3-disclaimer",
              [],
              null,
              null,
              null,
              dn.b,
              dn.a,
            )),
            t.xb(
              19,
              4440064,
              null,
              0,
              gn.a,
              [hn.a, [2, Oe.a], t.h, Te.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              20,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [
                ["class", "npr-info-text"],
                ["id", "NppInformationText"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              xt.b,
              xt.a,
            )),
            t.xb(
              21,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              22,
              245760,
              null,
              0,
              ft.a,
              [[6, Oe.a], _t.a, t.h, t.l, t.D, [2, Ct.a], [2, Tl.a], [2, Pt.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "Screen:NPR_Information--CLU33--"),
              e(l, 2, 0, "Screen:NPR_Information--CLU33--"),
              e(l, 4, 0, ""),
              e(l, 5, 0, "Navigation", "Number Plate Restriction"),
              e(l, 8, 0, ""),
              e(l, 10, 0),
              e(l, 14, 0),
              e(l, 15, 0, !1, "E163_Backbutton.webp"),
              e(l, 19, 0),
              e(l, 21, 0, "NppInformationText"),
              e(l, 22, 0, n.informationText, "NppInformationText", 99));
          },
          function (e, l) {
            (e(
              l,
              3,
              0,
              t.Nb(l, 5).hideLeftBorder,
              t.Nb(l, 5).hideDividingBorders,
            ),
              e(
                l,
                6,
                0,
                t.Nb(l, 14).markerClassEnabled,
                t.Nb(l, 15).useItemPlaceholder,
              ),
              e(
                l,
                20,
                0,
                t.Nb(l, 22).backgroundColor,
                t.Nb(l, 22).fixedNumberOfLines,
                t.Nb(l, 22).mayContainLatinCharsForArabic,
                t.Nb(l, 22).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function Zt(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-npr-information",
              [],
              null,
              null,
              null,
              Gt,
              Wt,
            )),
            t.xb(1, 49152, null, 0, i, [ze.a], null, null),
          ],
          null,
          null,
        );
      }
      var Kt = t.ub("au3-npr-information", i, Zt, {}, {}, []),
        Jt = n("UaS1"),
        Xt = n("pNLL"),
        Qt = n("dtma"),
        qt = n("KczA"),
        ea = n("1VvW"),
        la = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{width:100%;height:100%;display:block;overflow:hidden}.province__button[_ngcontent-%COMP%]{font-size:40px;width:119px}",
            ],
          ],
          data: {},
        });
      function na(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              16,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:NAV_NprInputScreen_chinaOnly--CL33--"],
                ["ttDisplayVariant", ""],
              ],
              null,
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(1, 16384, null, 0, Jt.a, [], null, null),
            t.xb(
              2,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [6, Jt.a]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 4440064, null, 0, ke.a, [Te.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              4,
              0,
              null,
              0,
              12,
              "au3-enter-name-or-code",
              [
                ["primaryTitleId", "NprInputPrimaryTitle"],
                ["secondaryTitleId", "NprInputSecondaryTitle"],
              ],
              null,
              [[null, "onSave"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "onSave" === l && (t = !1 !== e.component.ok(n) && t),
                  t
                );
              },
              Xt.b,
              Xt.a,
            )),
            t.xb(
              5,
              704512,
              null,
              0,
              Qt.a,
              [pn.c, qt.a, ze.a, yt.a, ea.a],
              {
                hasProposals: [0, "hasProposals"],
                placeholderDeveloperText: [1, "placeholderDeveloperText"],
                descriptionText: [2, "descriptionText"],
                inputField: [3, "inputField"],
                routeBackOnOk: [4, "routeBackOnOk"],
                inputInvalidWarningMessage: [5, "inputInvalidWarningMessage"],
                confirmButtonText: [6, "confirmButtonText"],
                hasPrimaryTitle: [7, "hasPrimaryTitle"],
                primaryDeveloperTitle: [8, "primaryDeveloperTitle"],
                primaryTitleId: [9, "primaryTitleId"],
                hasSecondaryTitle: [10, "hasSecondaryTitle"],
                secondaryDeveloperTitle: [11, "secondaryDeveloperTitle"],
                secondaryTitleId: [12, "secondaryTitleId"],
                showProposalsLine: [13, "showProposalsLine"],
                contextId: [14, "contextId"],
              },
              { onSave: "onSave" },
            ),
            t.Pb(131072, al.b, [t.h]),
            (e()(),
            t.yb(
              7,
              0,
              null,
              0,
              9,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient province__button"],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== e.component.goToProvinceSelection() && t),
                  t
                );
              },
              Cl.b,
              Cl.a,
            )),
            t.xb(8, 16384, null, 0, Tl.a, [], null, null),
            t.xb(9, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              10,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              11,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              13,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              14,
              49152,
              null,
              0,
              Sl.a,
              [[2, Pe.a]],
              {
                nonI18nText: [0, "nonI18nText"],
                hasOnlyText: [1, "hasOnlyText"],
              },
              null,
            ),
            t.xb(
              15,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 2, 0, "Screen:NAV_NprInputScreen_chinaOnly--CL33--"),
              e(l, 3, 0, "Screen:NAV_NprInputScreen_chinaOnly--CL33--"),
              e(l, 5, 1, [
                !1,
                "Please enter your number plate.",
                "Please enter a plate number and press APPLY.",
                t.Yb(l, 5, 3, t.Nb(l, 6).transform(n.inputField$)),
                !1,
                n.popupIdEnum.POPUP_NPR_INVALID_INPUT_TOAST,
                "APPLY",
                !0,
                "Navigation",
                "NprInputPrimaryTitle",
                !0,
                "Traffic regulation assistant",
                "NprInputSecondaryTitle",
                !1,
                n.contextId,
              ]),
              e(l, 11, 0),
              e(l, 13, 0),
              e(l, 14, 0, n.selectedProvince, !0));
          },
          function (e, l) {
            e(
              l,
              7,
              0,
              t.Nb(l, 13).markerClassEnabled,
              t.Nb(l, 14).useItemPlaceholder,
            );
          },
        );
      }
      function ta(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-npr-input-screen",
              [],
              null,
              null,
              null,
              na,
              la,
            )),
            t.xb(
              1,
              245760,
              null,
              0,
              g,
              [b.b, pn.c, ea.a, ze.a, yt.a, Te.a],
              null,
              null,
            ),
          ],
          function (e, l) {
            e(l, 1, 0);
          },
          null,
        );
      }
      var aa = t.ub("au3-npr-input-screen", g, ta, {}, {}, []),
        ia = n("Xast"),
        oa = n("jgeG"),
        ua = n("nSAP"),
        sa = t.wb({
          encapsulation: 0,
          styles: [
            [
              '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--cover-left[_ngcontent-%COMP%]:before, .ui-state--cover-left[_nghost-%COMP%]:before{position:absolute;display:block;width:100%;height:100%;content:" ";z-index:1;backface-visibility:hidden;opacity:0;transition:opacity .25s;will-change:opacity;filter:var(--current-context-hue);max-width:96px;top:0;background-image:url(/decorators/UIStates/uistate_cover_glow_left.webp);background-size:96px 100%;background-repeat:no-repeat;background-position:0 0;left:0}.state-pressed.ui-state--cover-left[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--cover-left[_ngcontent-%COMP%]:before, .state-pressed.ui-state--cover-left[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--cover-left[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--cover-left[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--cover-left[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--cover-left[_nghost-%COMP%]:before{opacity:1;transition:opacity .4s}.ui-state--cover-left[_ngcontent-%COMP%]:after, .ui-state--cover-left[_nghost-%COMP%]:after{position:absolute;display:block;content:" ";width:100%;height:100%;z-index:1;backface-visibility:hidden;opacity:0;transition:opacity .25s;will-change:opacity;filter:var(--current-context-hue);top:0;background-image:url(/decorators/UIStates/uistate_cover_glow_left.webp);background-size:21px 100%;background-repeat:no-repeat;background-position:0 0;left:0;border-left:3px solid #fff}.state-hovered.ui-state--cover-left[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--cover-left[_ngcontent-%COMP%]:after, .state-hovered.ui-state--cover-left[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--cover-left[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--cover-left[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--cover-left[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--cover-left[_nghost-%COMP%]:after{opacity:1;transition:opacity .4s}.ui-state--cover-bottom[_ngcontent-%COMP%]:before, .ui-state--cover-bottom[_nghost-%COMP%]:before{position:absolute;display:block;width:100%;height:100%;content:" ";z-index:1;backface-visibility:hidden;opacity:0;transition:opacity .25s;will-change:opacity;filter:var(--current-context-hue);background-image:url(/decorators/UIStates/uistate_cover_glow_bottom.webp);background-size:100% 96px;background-repeat:no-repeat;background-position:0 100%;max-height:96px;bottom:0;left:0}.state-pressed.ui-state--cover-bottom[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--cover-bottom[_ngcontent-%COMP%]:before, .state-pressed.ui-state--cover-bottom[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--cover-bottom[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--cover-bottom[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--cover-bottom[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--cover-bottom[_nghost-%COMP%]:before{opacity:1;transition:opacity .4s}.ui-state--cover-bottom[_ngcontent-%COMP%]:after, .ui-state--cover-bottom[_nghost-%COMP%]:after{position:absolute;display:block;content:" ";width:100%;height:100%;z-index:1;backface-visibility:hidden;opacity:0;transition:opacity .25s;will-change:opacity;filter:var(--current-context-hue);background-image:url(/decorators/UIStates/uistate_cover_glow_bottom.webp);background-size:100% 21px;background-repeat:no-repeat;background-position:0 100%;max-height:21px;bottom:0;left:0;border-bottom:3px solid #fff}.state-hovered.ui-state--cover-bottom[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--cover-bottom[_ngcontent-%COMP%]:after, .state-hovered.ui-state--cover-bottom[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--cover-bottom[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--cover-bottom[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--cover-bottom[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--cover-bottom[_nghost-%COMP%]:after{opacity:1;transition:opacity .4s}.ui-state--cover-right[_ngcontent-%COMP%]:before, .ui-state--cover-right[_nghost-%COMP%]:before{position:absolute;display:block;width:100%;height:100%;content:" ";z-index:1;backface-visibility:hidden;opacity:0;transition:opacity .25s;will-change:opacity;filter:var(--current-context-hue);max-width:96px;top:0;background-image:url(/decorators/UIStates/uistate_cover_glow_right.webp);background-size:96px 100%;background-repeat:no-repeat;background-position:100% 0;right:0}.state-pressed.ui-state--cover-right[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--cover-right[_ngcontent-%COMP%]:before, .state-pressed.ui-state--cover-right[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--cover-right[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--cover-right[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--cover-right[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--cover-right[_nghost-%COMP%]:before{opacity:1;transition:opacity .4s}.ui-state--cover-right[_ngcontent-%COMP%]:after, .ui-state--cover-right[_nghost-%COMP%]:after{position:absolute;display:block;content:" ";width:100%;height:100%;z-index:1;backface-visibility:hidden;opacity:0;transition:opacity .25s;will-change:opacity;filter:var(--current-context-hue);top:0;background-image:url(/decorators/UIStates/uistate_cover_glow_right.webp);background-size:21px 100%;background-repeat:no-repeat;background-position:100% 0;right:0;border-right:3px solid #fff}.state-hovered.ui-state--cover-right[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--cover-right[_ngcontent-%COMP%]:after, .state-hovered.ui-state--cover-right[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--cover-right[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--cover-right[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--cover-right[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--cover-right[_nghost-%COMP%]:after{opacity:1;transition:opacity .4s}.tile-grid-container[_ngcontent-%COMP%]{width:100%;height:calc(100% - 119px)}.tile-container[_ngcontent-%COMP%]{width:100%;height:100%;margin:0;position:relative;display:flex;align-items:center;justify-content:center}.border[_ngcontent-%COMP%]{position:absolute;top:0;right:0;bottom:0;left:0;border-width:0 1px 3px;border-style:solid;border-image:linear-gradient(0deg,#798182,transparent) 1;background-image:linear-gradient(0deg,rgba(32,37,38,.45),transparent 50%)}.province-symbole[_ngcontent-%COMP%]{font-size:40px;display:flex;align-items:center;justify-content:center;width:90%;height:90%;max-width:145px}.border--selected[_ngcontent-%COMP%]{border-bottom:3px solid var(--current-context)}',
            ],
          ],
          data: {},
        });
      function ra(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              14,
              "div",
              [
                ["class", "tile-container"],
                ["id", ""],
              ],
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
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t =
                      !1 !== e.component.tileTapped(e.context.tileIndex) && t),
                  t
                );
              },
              null,
              null,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              212992,
              null,
              0,
              vt.a,
              [[2, Me.a], [8, null], [3, vt.a], t.l, t.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              10,
              0,
              null,
              null,
              0,
              "div",
              [["class", "border"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            t.yb(
              11,
              0,
              null,
              null,
              3,
              "div",
              [["class", "province-symbole"]],
              [[2, "border--selected", null]],
              null,
              null,
              null,
              null,
            )),
            (e()(),
            t.yb(
              12,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["id", ""],
                ["ttIngnore", ""],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              xt.b,
              xt.a,
            )),
            t.xb(
              13,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              14,
              245760,
              null,
              0,
              ft.a,
              [[6, Oe.a], _t.a, t.h, t.l, t.D, [2, Ct.a], [2, Tl.a], [2, Pt.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, ""),
              e(l, 4, 0),
              e(l, 6, 0),
              e(l, 7, 0, n.uiStateType),
              e(l, 13, 0, "", n.chineseProvinceSymboleEnum),
              e(l, 14, 0, l.context.$implicit, "", 1));
          },
          function (e, l) {
            var n = l.component;
            (e(l, 0, 1, [
              t.Nb(l, 6).markerClassEnabled,
              t.Nb(l, 7).uiStateListHorizontal,
              t.Nb(l, 7).uiStateListVertical,
              t.Nb(l, 7).uiStateCoverLeft,
              t.Nb(l, 7).uiStateCoverRight,
              t.Nb(l, 7).uiStateCoverBottom,
              t.Nb(l, 7).uiStateButton,
              t.Nb(l, 7).uiStateByDabLeft,
              t.Nb(l, 7).uiStateByDabRight,
              t.Nb(l, 7).uiStateLbDabLeft,
              t.Nb(l, 7).uiStateLbDabRight,
            ]),
              e(l, 11, 0, l.context.tileIndex === n.selectedProvinceIndex),
              e(
                l,
                12,
                0,
                t.Nb(l, 14).backgroundColor,
                t.Nb(l, 14).fixedNumberOfLines,
                t.Nb(l, 14).mayContainLatinCharsForArabic,
                t.Nb(l, 14).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function ca(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              26,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:NAV_NprProvinceSelection_chinaOnly--CL33--"],
              ],
              null,
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ke.a, [Te.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              14,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              vl.b,
              vl.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              xl.a,
              [fl.a, _l.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
                hideLeftBorder: [2, "hideLeftBorder"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", "Back"],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== e.component.globalRoutingService.goBack() && t),
                  t
                );
              },
              Cl.b,
              Cl.a,
            )),
            t.xb(7, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Pl.a,
              [Te.a, yl.a, t.l, [2, Me.a], [2, Pe.a]],
              null,
              null,
            ),
            t.xb(12, 16384, null, 0, Tl.a, [], null, null),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              14,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              15,
              49152,
              null,
              0,
              Sl.a,
              [[2, Pe.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              18,
              0,
              null,
              0,
              8,
              "div",
              [
                ["class", "tile-grid-container"],
                ["id", ""],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            t.xb(
              19,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (e()(),
            t.yb(
              20,
              0,
              null,
              null,
              6,
              "au3-tile-grid",
              [["id", ""]],
              null,
              null,
              null,
              ia.b,
              ia.a,
            )),
            t.xb(
              21,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.Sb(512, null, Ze.a, Ze.a, [Ae.a]),
            t.xb(
              24,
              1032192,
              null,
              1,
              oa.a,
              [t.s, t.h, ua.a, Fe.a, Ze.a, Ae.a, Te.a],
              {
                disableMaskImage: [0, "disableMaskImage"],
                columns: [1, "columns"],
                rows: [2, "rows"],
                responsiveColumnSize: [3, "responsiveColumnSize"],
                rubberband: [4, "rubberband"],
                tiles: [5, "tiles"],
              },
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (e()(), t.hb(0, [[1, 2]], null, 0, null, ra)),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "Screen:NAV_NprProvinceSelection_chinaOnly--CL33--"),
              e(l, 2, 0, "Screen:NAV_NprProvinceSelection_chinaOnly--CL33--"),
              e(l, 4, 0, ""),
              e(l, 5, 0, "Navigation", "Province selection", !0),
              e(l, 8, 0, "Back"),
              e(l, 10, 0),
              e(l, 14, 0),
              e(l, 15, 0, !1, "E163_Backbutton.webp"),
              e(l, 19, 0, ""),
              e(l, 21, 0, ""),
              e(l, 24, 0, !0, 9, 4, !0, !1, n.tiles));
          },
          function (e, l) {
            (e(
              l,
              3,
              0,
              t.Nb(l, 5).hideLeftBorder,
              t.Nb(l, 5).hideDividingBorders,
            ),
              e(
                l,
                6,
                0,
                t.Nb(l, 14).markerClassEnabled,
                t.Nb(l, 15).useItemPlaceholder,
              ));
          },
        );
      }
      function ba(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-npr-province-selection",
              [],
              null,
              null,
              null,
              ca,
              sa,
            )),
            t.xb(1, 180224, null, 0, d, [ze.a, ea.a, Te.a], null, null),
          ],
          null,
          null,
        );
      }
      var da = t.ub("au3-npr-province-selection", d, ba, {}, {}, []),
        ga = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;display:block;height:100%;width:100%}.screen[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;font-size:40px}.settings-list__toggle-item[_ngcontent-%COMP%]{padding:0 20px}.settings-list__item[_ngcontent-%COMP%]{height:100px}",
            ],
          ],
          data: {},
        });
      function ha(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              26,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:NAV_SETUP_ETRON_ROUTE_PLANNER--CL33--"],
              ],
              null,
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ke.a, [Te.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              14,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              vl.b,
              vl.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              xl.a,
              [fl.a, _l.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              6,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", ""],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== e.component.routingService.goBack() && t),
                  t
                );
              },
              Cl.b,
              Cl.a,
            )),
            t.xb(7, 147456, null, 0, Se.a, [t.l, t.z], null, null),
            t.xb(
              8,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Ne.a,
              [Se.a, [2, Ae.a], [2, Oe.a], Te.a],
              null,
              null,
            ),
            t.xb(
              10,
              212992,
              null,
              0,
              Me.a,
              [
                Te.a,
                De.b,
                Ne.a,
                [2, Ae.a],
                [2, Oe.a],
                [2, Pe.a],
                [2, ke.a],
                [2, Le.a],
                t.z,
                Ee.a,
                t.l,
                [2, Re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Pl.a,
              [Te.a, yl.a, t.l, [2, Me.a], [2, Pe.a]],
              null,
              null,
            ),
            t.xb(12, 16384, null, 0, Tl.a, [], null, null),
            t.Sb(131584, null, Fe.a, Fe.a, [[3, Fe.a]]),
            t.xb(
              14,
              4407296,
              null,
              0,
              $e.a,
              [
                t.l,
                Ve.a,
                t.h,
                Fe.a,
                [2, je.a],
                [2, Ae.b],
                [2, Ae.a],
                [2, He.a],
                [2, Ye.a],
              ],
              null,
              null,
            ),
            t.xb(
              15,
              49152,
              null,
              0,
              Sl.a,
              [[2, Pe.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              Ge.a,
              [
                [2, Me.a],
                [2, Pe.a],
                [2, Ze.a],
                [2, $e.a],
                [2, Ke.b],
                t.l,
                Je.a,
                Xe.b,
              ],
              null,
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              Qe.a,
              [[2, $e.a], [2, Me.a], [2, De.b], qe.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              18,
              0,
              null,
              0,
              8,
              "au3-list",
              [
                ["class", "settings-list"],
                ["id", ""],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              il.b,
              il.a,
            )),
            t.Sb(6144, null, ol.a, null, [ul.a]),
            t.xb(
              20,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(21, 16384, null, 0, sl.a, [t.l], null, null),
            t.xb(
              22,
              12828672,
              null,
              1,
              ul.a,
              [
                [2, rl.a],
                [2, cl.a],
                [8, null],
                [2, Oe.a],
                [2, bl.a],
                [2, dl.a],
                [2, De.b],
                Ue.i,
                t.z,
                t.h,
                Te.a,
                gl.a,
                hl.a,
                [2, Ve.a],
                Ae.a,
                [2, Ue.a],
              ],
              null,
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (e()(),
            t.yb(
              24,
              0,
              null,
              0,
              2,
              "au3-list-route-switch-item",
              [
                ["class", "settings-list__item"],
                [
                  "titleDeveloperText",
                  "Etron Charging Service Ladestationen bevorzugen",
                ],
              ],
              null,
              [[null, "valueChange"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "valueChange" === l &&
                    (t =
                      !1 !==
                        e.component.toggleEtronChargingServiceStationsPreferred(
                          n,
                        ) && t),
                  t
                );
              },
              nl.b,
              nl.a,
            )),
            t.xb(
              25,
              114688,
              null,
              0,
              tl.a,
              [],
              {
                titleTextId: [0, "titleTextId"],
                titleDeveloperText: [1, "titleDeveloperText"],
                subtitleHasText: [2, "subtitleHasText"],
                value: [3, "value"],
                type: [4, "type"],
                route: [5, "route"],
              },
              { valueChange: "valueChange" },
            ),
            t.Pb(131072, al.b, [t.h]),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "Screen:NAV_SETUP_ETRON_ROUTE_PLANNER--CL33--"),
              e(l, 2, 0, "Screen:NAV_SETUP_ETRON_ROUTE_PLANNER--CL33--"),
              e(l, 4, 0, ""),
              e(l, 5, 0, "Navigation", "e-tron Routenplaner"),
              e(l, 8, 0, ""),
              e(l, 10, 0),
              e(l, 14, 0),
              e(l, 15, 0, !1, "E163_Backbutton.webp"),
              e(l, 20, 0, ""),
              e(l, 22, 0),
              e(
                l,
                25,
                0,
                "PreferECSStations",
                "Etron Charging Service Ladestationen bevorzugen",
                !1,
                t.Yb(
                  l,
                  25,
                  3,
                  t
                    .Nb(l, 26)
                    .transform(
                      n.etronSettingsService
                        .etronChargingServiceStationsPreferred$,
                    ),
                ),
                n.listItemType.ITEM_TYPE_SWITCH_INFO,
                n.NaviSettingsRoute.children.EtronRoutePlannerSettings.children
                  .EtronChargingServiceInfo,
              ));
          },
          function (e, l) {
            (e(
              l,
              3,
              0,
              t.Nb(l, 5).hideLeftBorder,
              t.Nb(l, 5).hideDividingBorders,
            ),
              e(
                l,
                6,
                0,
                t.Nb(l, 14).markerClassEnabled,
                t.Nb(l, 15).useItemPlaceholder,
              ),
              e(l, 18, 0, t.Nb(l, 22).showLineNumbers));
          },
        );
      }
      function pa(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-etron-route-planner-settings",
              [],
              null,
              null,
              null,
              ha,
              ga,
            )),
            t.xb(1, 49152, null, 0, pe, [q.a, ze.a], null, null),
          ],
          null,
          null,
        );
      }
      var ma = t.ub("au3-etron-route-planner-settings", pe, pa, {}, {}, []),
        va = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{position:relative;display:block;width:100%;height:100%}",
            ],
          ],
          data: {},
        });
      function xa(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:Charging_Service_Information"],
              ],
              null,
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ke.a, [Te.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              1,
              "au3-info-screen-view",
              [],
              null,
              null,
              null,
              At.b,
              At.a,
            )),
            t.xb(
              4,
              49152,
              null,
              0,
              Mt.a,
              [ze.a],
              {
                secondaryDevText: [0, "secondaryDevText"],
                informationText: [1, "informationText"],
              },
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "Screen:Charging_Service_Information"),
              e(l, 2, 0, "Screen:Charging_Service_Information"),
              e(l, 4, 0, "eTron Charging Service", n.informationText));
          },
          null,
        );
      }
      function fa(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-etron-charging-service-info",
              [],
              null,
              null,
              null,
              xa,
              va,
            )),
            t.xb(1, 49152, null, 0, me, [ze.a], null, null),
          ],
          null,
          null,
        );
      }
      var _a = t.ub("au3-etron-charging-service-info", me, fa, {}, {}, []),
        Ca = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{position:relative;display:block;width:100%;height:100%}",
            ],
          ],
          data: {},
        });
      function Pa(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:Long_Distance_Mode_Information"],
              ],
              null,
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              Oe.a,
              [t.l, t.D, Ie.a, Te.a, [3, Oe.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, ke.a, [Te.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              1,
              "au3-info-screen-view",
              [],
              null,
              null,
              null,
              At.b,
              At.a,
            )),
            t.xb(
              4,
              49152,
              null,
              0,
              Mt.a,
              [ze.a],
              {
                secondaryDevText: [0, "secondaryDevText"],
                informationText: [1, "informationText"],
              },
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "Screen:Long_Distance_Mode_Information"),
              e(l, 2, 0, "Screen:Long_Distance_Mode_Information"),
              e(l, 4, 0, "Long distance mode", n.informationText));
          },
          null,
        );
      }
      function ya(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-etron-long-distance-mode-info",
              [],
              null,
              null,
              null,
              Pa,
              Ca,
            )),
            t.xb(1, 49152, null, 0, ve, [ze.a], null, null),
          ],
          null,
          null,
        );
      }
      var Ta = t.ub("au3-etron-long-distance-mode-info", ve, ya, {}, {}, []),
        Sa = n("aDqW"),
        Oa = n("/W5r"),
        Ia = n("+Qv1"),
        Na = n("XtoR"),
        Aa = n("jTHl"),
        Ma = n("zL3T"),
        Da = n("SFb6"),
        ka = n("3LDm"),
        La = n("aujg"),
        Ea = n("I/e0"),
        Ra = n("+epw"),
        wa = n("zMPs"),
        za = n("6Yk8"),
        Ua = n("u6+O"),
        Ba = n("CIQC"),
        Fa = n("REmV"),
        $a = n("Y3N+"),
        Va = n("MJxn"),
        ja = n("eIOF"),
        Ha = n("t+4g"),
        Ya = n("myjn"),
        Wa = n("fOZ7"),
        Ga = n("QDrj"),
        Za = n("YCQm"),
        Ka = n("dezT"),
        Ja = t.vb(fe, [], function (e) {
          return t.Kb([
            t.Lb(512, t.j, t.X, [
              [
                8,
                [
                  _e.a,
                  Bl,
                  Jl,
                  nn,
                  bn,
                  _n,
                  Nn,
                  ut,
                  dt,
                  mt,
                  Nt,
                  Et,
                  Ut,
                  Yt,
                  Kt,
                  aa,
                  da,
                  ma,
                  _a,
                  Ta,
                ],
              ],
              [3, t.j],
              t.x,
            ]),
            t.Lb(4608, al.m, al.l, [t.u]),
            t.Lb(4608, Sa.h, Sa.g, []),
            t.Lb(4608, Sa.d, Sa.f, []),
            t.Lb(4608, Sa.j, Sa.e, []),
            t.Lb(4608, Sa.c, Sa.b, []),
            t.Lb(4608, Sa.k, Sa.k, [
              Sa.l,
              Sa.h,
              Sa.d,
              Sa.j,
              Sa.c,
              Sa.m,
              Sa.o,
              Sa.n,
              Sa.a,
            ]),
            t.Lb(4608, Oa.b, Oa.b, [Ia.e, [2, Oa.a]]),
            t.Lb(4608, Na.b, Na.b, [Ia.e, [2, Na.a]]),
            t.Lb(4608, Aa.b, Aa.b, [Ia.e, [2, Aa.a]]),
            t.Lb(4608, Ma.b, Ma.b, [Ia.e, [2, Ma.a]]),
            t.Lb(4608, Da.a, ka.a, [_t.a, La.a, Te.a]),
            t.Lb(4608, h.a, h.a, [Ea.a, H.c, Te.a]),
            t.Lb(1073742336, al.c, al.c, []),
            t.Lb(1073742336, Sa.i, Sa.i, []),
            t.Lb(1073742336, Ra.a, Ra.a, []),
            t.Lb(1073742336, wa.a, wa.a, []),
            t.Lb(1073742336, za.a, za.a, []),
            t.Lb(1073742336, Ua.a, Ua.a, []),
            t.Lb(1073742336, Ba.a, Ba.a, []),
            t.Lb(1073742336, Fa.a, Fa.a, []),
            t.Lb(1073742336, $a.a, $a.a, []),
            t.Lb(1073742336, Va.a, Va.a, []),
            t.Lb(1073742336, ja.a, ja.a, []),
            t.Lb(1073742336, Ha.a, Ha.a, []),
            t.Lb(1073742336, Ya.a, Ya.a, []),
            t.Lb(1073742336, Wa.a, Wa.a, []),
            t.Lb(1073742336, Ga.a, Ga.a, []),
            t.Lb(1073742336, ea.n, ea.n, [
              [2, ea.s],
              [2, ea.m],
            ]),
            t.Lb(1073742336, Za.a, Za.a, []),
            t.Lb(1073742336, Ka.a, Ka.a, []),
            t.Lb(1073742336, fe, fe, []),
            t.Lb(256, Sa.o, void 0, []),
            t.Lb(256, Sa.m, void 0, []),
            t.Lb(256, Sa.n, void 0, []),
            t.Lb(256, Sa.a, void 0, []),
            t.Lb(
              1024,
              ea.k,
              function () {
                return [
                  [
                    {
                      path: "",
                      children: [
                        { path: "", component: le },
                        {
                          path: "map-settings",
                          children: [
                            { path: "", component: F },
                            { path: "traffic", component: re },
                          ],
                        },
                        { path: "audiosettings", component: O },
                        { path: "presentation-mode", component: ue },
                        {
                          path: "map-content",
                          children: [{ path: "", component: E.a }],
                        },
                        {
                          path: "global-route-options-eu-nar-row",
                          component: L,
                        },
                        { path: "global-route-options-asia", component: ge },
                        { path: "route-information", component: se },
                        {
                          path: "route-assistant",
                          children: [
                            { path: "", component: ae },
                            { path: "pnav-settings-info", component: xe },
                          ],
                        },
                        { path: "its-spot-setting", component: de },
                        {
                          path: "npr-setting",
                          children: [
                            { path: "", component: he },
                            { path: "npr-info", component: i },
                            {
                              path: "npr-input",
                              children: [
                                {
                                  path: "",
                                  pathMatch: "full",
                                  component: g,
                                  canActivate: [h.a],
                                },
                                {
                                  path: "provinces",
                                  component: d,
                                  canActivate: [h.a],
                                },
                              ],
                              canActivate: [h.a],
                            },
                          ],
                        },
                        {
                          path: "etron-route-planner-settings",
                          children: [
                            { path: "", component: pe },
                            {
                              path: "etron-charging-service-info",
                              component: me,
                            },
                            {
                              path: "etron-long-distance-mode-info",
                              component: ve,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                ];
              },
              [],
            ),
          ]);
        });
    },
    apBa: function (e, l, n) {
      "use strict";
      (n.d(l, "a", function () {
        return j;
      }),
        n.d(l, "b", function () {
          return W;
        }));
      var t = n("kZht"),
        a = n("Xl9s"),
        i = n("fu7d"),
        o = n("bou3"),
        u = n("yNay"),
        s = n("IPO3"),
        r = n("8TlW"),
        c = n("ijxY"),
        b = n("Xo58"),
        d = n("m3Ja"),
        g = n("r+e+"),
        h = n("bmFL"),
        p = n("OtM5"),
        m = n("9ZFG"),
        v = n("bMuc"),
        x = n("ZIdM"),
        f = n("3bpu"),
        _ = n("6zvu"),
        C = n("VcEz"),
        P = n("y9xZ"),
        y = n("+sw+"),
        T = n("BMrr"),
        S = n("IEns"),
        O = n("z6QT"),
        I = n("flsk"),
        N = n("FQEI"),
        A = n("O82V"),
        M = n("Eln4"),
        D = n("evAh"),
        k = n("Ps6X"),
        L = n("CpzC"),
        E = n("0Bsn"),
        R = n("5GjX"),
        w = n("mYyF"),
        z = n("v98a"),
        U = n("aOG8"),
        B = n("Krzs"),
        F = n("An66"),
        $ = n("nQV3"),
        V = n("3+OJ"),
        j =
          (n("xMt+"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.list-item__click-area[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.list-item__click-area[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;flex-grow:1;min-width:0;padding:0 20px}.list-item__text-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0}.list-item__checkbox[_ngcontent-%COMP%]{pointer-events:none}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%]{margin-right:30px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%]{margin-left:30px}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.list-item__text[_ngcontent-%COMP%]{flex:1 1 auto}.list-item__text--small[_ngcontent-%COMP%]{flex:1 1 auto;font-size:30px}.list-item__text--small--light[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular)}',
              ],
            ],
            data: {},
          }));
      function H(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon-with-overlay",
              [
                ["class", "list-item__icon--begin"],
                ["id", "list-item__icon--begin"],
              ],
              null,
              null,
              null,
              a.b,
              a.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              i.a,
              [t.l, t.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              s.a,
              [],
              {
                overlayFileName: [0, "overlayFileName"],
                fallbackFileName: [1, "fallbackFileName"],
                fileName: [2, "fileName"],
                category: [3, "category"],
              },
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "list-item__icon--begin"),
              e(
                l,
                2,
                0,
                n.iconOverlay,
                n.iconFallback,
                n.icon,
                n.listIconCategory,
              ));
          },
          null,
        );
      }
      function Y(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              4,
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
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              null,
              null,
              r.b,
              r.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              i.a,
              [t.l, t.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              c.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            t.xb(
              3,
              245760,
              null,
              0,
              b.a,
              [[6, i.a], d.a, t.h, t.l, t.D, [2, g.a], [2, c.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              p.a,
              [m.a, t.h, u.a, [3, p.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(
              l,
              1,
              0,
              n.subtitleTextId
                ? n.subtitleTextId
                : "ListRouteItemSecondaryText",
              n.subtitleIdEnumType,
            ),
              e(l, 2, 0, !n.hasSubtitle),
              e(
                l,
                3,
                0,
                n.subtitleDeveloperText,
                n.subtitleTextId
                  ? n.subtitleTextId
                  : "ListRouteItemSecondaryText",
                1,
                n.subtitleNonI18nText,
              ),
              e(l, 4, 0, n.labelDisabled));
          },
          function (e, l) {
            e(
              l,
              0,
              0,
              l.component.lightSubtitle,
              t.Nb(l, 3).backgroundColor,
              t.Nb(l, 3).fixedNumberOfLines,
              t.Nb(l, 3).mayContainLatinCharsForArabic,
              t.Nb(l, 3).shortenWithEllipsisForArabic,
              t.Nb(l, 4).combinedDisabled,
              t.Nb(l, 4).useBrighterIcon,
            );
          },
        );
      }
      function W(e) {
        return t.ac(
          2,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              20,
              "div",
              [["class", "list-item__click-area"]],
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
                [null, "mib3FocusPress"],
              ],
              function (e, l, n) {
                var t = !0,
                  a = e.component;
                return (
                  "mib3Tap" === l && (t = !1 !== a.itemTapped() && t),
                  "mib3FocusPress" === l && (t = !1 !== a.focusPressed() && t),
                  t
                );
              },
              null,
              null,
            )),
            t.xb(1, 147456, null, 0, v.a, [t.l, t.z], null, null),
            t.xb(
              2,
              147456,
              null,
              0,
              x.a,
              [v.a, [2, f.a], [2, i.a], u.a],
              null,
              null,
            ),
            t.xb(
              3,
              212992,
              null,
              0,
              _.a,
              [
                u.a,
                C.b,
                x.a,
                [2, f.a],
                [2, i.a],
                [2, p.a],
                [2, P.a],
                [2, y.a],
                t.z,
                T.a,
                t.l,
                [2, S.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, O.a, O.a, [[3, O.a]]),
            t.xb(
              5,
              4407296,
              null,
              0,
              I.a,
              [
                t.l,
                N.a,
                t.h,
                O.a,
                [2, A.a],
                [2, f.b],
                [2, f.a],
                [2, M.a],
                [2, D.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              212992,
              null,
              0,
              k.a,
              [[2, _.a], [8, null], [3, k.a], t.l, t.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            t.xb(
              7,
              147456,
              null,
              0,
              L.a,
              [[2, _.a], [2, p.a], [2, E.a], [2, I.a], [2, R.b], t.l, w.a, z.b],
              null,
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              U.a,
              [[2, I.a], [2, _.a], [2, C.b], B.a],
              null,
              null,
            ),
            (e()(), t.hb(16777216, null, null, 1, null, H)),
            t.xb(
              10,
              16384,
              null,
              0,
              F.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            t.yb(
              11,
              0,
              null,
              null,
              7,
              "div",
              [["class", "list-item__text-container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            t.yb(
              12,
              0,
              null,
              null,
              4,
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
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              null,
              null,
              r.b,
              r.a,
            )),
            t.xb(
              13,
              212992,
              null,
              0,
              i.a,
              [t.l, t.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              14,
              16384,
              null,
              0,
              c.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            t.xb(
              15,
              245760,
              null,
              0,
              b.a,
              [[6, i.a], d.a, t.h, t.l, t.D, [2, g.a], [2, c.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              p.a,
              [m.a, t.h, u.a, [3, p.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            (e()(), t.hb(16777216, null, null, 1, null, Y)),
            t.xb(
              18,
              16384,
              null,
              0,
              F.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            t.yb(
              19,
              0,
              null,
              null,
              1,
              "au3-checkbox",
              [["class", "list-item__checkbox"]],
              null,
              null,
              null,
              $.b,
              $.a,
            )),
            t.xb(
              20,
              49152,
              null,
              0,
              V.a,
              [],
              { checked: [0, "checked"] },
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 3, 0),
              e(l, 5, 0),
              e(l, 6, 0, n.uiStateType),
              e(l, 10, 0, n.icon || n.iconFallback),
              e(
                l,
                13,
                0,
                n.titleTextId ? n.titleTextId : "ListRouteItemText",
                n.titleIdEnumType,
              ),
              e(l, 14, 0, !n.titleDeveloperText && !n.titleIdEnumType),
              e(
                l,
                15,
                0,
                n.titleDeveloperText,
                n.titleTextId ? n.titleTextId : "ListRouteItemText",
                1,
                n.titleNonI18nText,
              ),
              e(l, 16, 0, n.labelDisabled),
              e(l, 18, 0, n.hasSubtitle),
              e(l, 20, 0, n.checked));
          },
          function (e, l) {
            (e(l, 0, 1, [
              t.Nb(l, 5).markerClassEnabled,
              t.Nb(l, 6).uiStateListHorizontal,
              t.Nb(l, 6).uiStateListVertical,
              t.Nb(l, 6).uiStateCoverLeft,
              t.Nb(l, 6).uiStateCoverRight,
              t.Nb(l, 6).uiStateCoverBottom,
              t.Nb(l, 6).uiStateButton,
              t.Nb(l, 6).uiStateByDabLeft,
              t.Nb(l, 6).uiStateByDabRight,
              t.Nb(l, 6).uiStateLbDabLeft,
              t.Nb(l, 6).uiStateLbDabRight,
            ]),
              e(
                l,
                12,
                0,
                t.Nb(l, 15).backgroundColor,
                t.Nb(l, 15).fixedNumberOfLines,
                t.Nb(l, 15).mayContainLatinCharsForArabic,
                t.Nb(l, 15).shortenWithEllipsisForArabic,
                t.Nb(l, 16).combinedDisabled,
                t.Nb(l, 16).useBrighterIcon,
              ));
          },
        );
      }
    },
    tZUG: function (e, l, n) {
      "use strict";
      (n.d(l, "b", function () {
        return d;
      }),
        n.d(l, "a", function () {
          return g;
        }));
      var t = n("QQZH"),
        a = n("C05f"),
        i = n("HM3f"),
        o = n("kuMc"),
        u = n("xVbo"),
        s = n("YtkY"),
        r = n("TLy2"),
        c = n("1Eyf"),
        b = n("Yi6/"),
        d =
          (n("uBIV"),
          n("fEDJ"),
          n("vsTE"),
          (function (e) {
            return (
              (e.ShowAll = "Show all"),
              (e.Landmarks3d = "3D landmarks"),
              (e.CityModel3d = "3D city model"),
              (e.Favorites = "Favorites"),
              (e.SpecialDestinations = "Sonderziele"),
              e
            );
          })({}));
      class g {
        constructor(e, l, n, i, o, u) {
          ((this.routingService = e),
            (this.poicategoriesService = l),
            (this.lockingService = n),
            (this.systemConfigService = i),
            (this.preferenceService = o),
            (this.functionAvailabilityService = u),
            (this.popupIdsEnum = b.Ob),
            (this.staticCheckBoxesEnum = d),
            (this.showAllItem = {
              id: d.ShowAll,
              developerText: d.ShowAll,
              checked: !1,
              disabled: !1,
            }),
            (this.landmarks3DItem = {
              id: d.Landmarks3d,
              developerText: d.Landmarks3d,
              icon: "E9F9_navigation_3D_sehenswuerdigkeiten.webp",
              checked: !1,
              disabled: !1,
              blocking: { lockingKey: { type: b.Eb.MAP_ADAPTION } },
            }),
            (this.cityModel3DItem = {
              id: d.CityModel3d,
              developerText: d.CityModel3d,
              icon: "E9FA_navigation_3D_citymodelle.webp",
              checked: !1,
              disabled: !1,
              blocking: { lockingKey: { type: b.Eb.MAP_ADAPTION } },
            }),
            (this.favoritesItem = {
              id: d.Favorites,
              developerText: d.Favorites,
              icon: "E0FC_favoriten.webp",
              checked: !1,
              disabled: !1,
            }),
            (this.specialDestinationsItem = {
              id: d.SpecialDestinations,
              developerText: d.SpecialDestinations,
              icon: "E217_map_poi_generic.webp",
              checked: !1,
              disabled: !1,
            }),
            (this.items = [
              this.showAllItem,
              this.landmarks3DItem,
              this.cityModel3DItem,
              this.favoritesItem,
              this.specialDestinationsItem,
            ]),
            (this.destroy$$ = new t.a(1)),
            (this.mapAdaptionLocking = new a.a(!1)));
        }
        ngOnInit() {
          (this.preferenceService.staticCategories$
            .pipe(Object(o.a)(this.destroy$$))
            .subscribe((e) => {
              ((this.landmarks3DItem.checked = e.landmarks),
                (this.cityModel3DItem.checked = e.buildings),
                (this.favoritesItem.checked = e.favorites),
                this.setShowAllCheckbox());
            }),
            Object(i.b)(
              this.preferenceService.visibleDynamicCategories$.pipe(
                Object(u.a)((e) => !!e),
              ),
              this.poicategoriesService.mapPoiCategories$,
            )
              .pipe(Object(o.a)(this.destroy$$))
              .subscribe(([e, l]) => {
                this.dynamicCategories = l;
                let n = !0;
                for (const t of l)
                  if (!e.some((e) => e.id === t.id)) {
                    n = !1;
                    break;
                  }
                ((this.specialDestinationsItem.checked = n),
                  this.setShowAllCheckbox());
              }),
            Object(i.b)([
              this.preferenceService.mapStyle$,
              this.functionAvailabilityService.satelliteMapAvailability$,
            ])
              .pipe(
                Object(s.a)(
                  ([e, l]) => l.availability && e === c.j.SATELLITEMAP,
                ),
                Object(o.a)(this.destroy$$),
              )
              .subscribe((e) => {
                ((this.landmarks3DItem.disabled =
                  !this.systemConfigService.isAsiaRegion() && e),
                  (this.cityModel3DItem.disabled = e));
              }),
            this.lockingService
              .getProperty({ type: b.Eb.MAP_ADAPTION })
              .pipe(
                Object(r.a)((e) => e.lock$),
                Object(o.a)(this.destroy$$),
              )
              .subscribe((e) => {
                (this.mapAdaptionLocking.next(e),
                  (this.showAllItem.checked =
                    this.isEveryEnabledItemChecked()));
              }));
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        toggleCheckmark(e, l) {
          let n;
          switch (e) {
            case d.ShowAll:
              ((n = l ? this.dynamicCategories : []),
                this.preferenceService.setCategories(
                  {
                    landmarks:
                      this.mapAdaptionLocking.getValue() ||
                      this.landmarks3DItem.disabled
                        ? this.landmarks3DItem.checked
                        : l,
                    buildings:
                      this.mapAdaptionLocking.getValue() ||
                      this.cityModel3DItem.disabled
                        ? this.cityModel3DItem.checked
                        : l,
                    favorites: l,
                  },
                  n,
                ));
              break;
            case d.Landmarks3d:
              this.preferenceService.setCategories({
                landmarks: l,
                buildings: this.cityModel3DItem.checked,
                favorites: this.favoritesItem.checked,
              });
              break;
            case d.CityModel3d:
              this.preferenceService.setCategories({
                landmarks: this.landmarks3DItem.checked,
                buildings: l,
                favorites: this.favoritesItem.checked,
              });
              break;
            case d.Favorites:
              this.preferenceService.setCategories({
                landmarks: this.landmarks3DItem.checked,
                buildings: this.cityModel3DItem.checked,
                favorites: l,
              });
              break;
            case d.SpecialDestinations:
              ((n = l ? this.dynamicCategories : []),
                this.preferenceService.setCategories(
                  {
                    landmarks: this.landmarks3DItem.checked,
                    buildings: this.cityModel3DItem.checked,
                    favorites: this.favoritesItem.checked,
                  },
                  n,
                ));
          }
        }
        goBack() {
          this.routingService.goBack();
        }
        setShowAllCheckbox() {
          this.showAllItem.checked = this.isEveryEnabledItemChecked();
        }
        isEveryEnabledItemChecked() {
          for (let e = 1; e < this.items.length; e++)
            if (
              !this.items[e].disabled &&
              !(
                (Object(b.wd)(this.items[e].blocking) &&
                  this.mapAdaptionLocking.getValue()) ||
                this.items[e].checked
              )
            )
              return !1;
          return !0;
        }
      }
    },
  },
]);
