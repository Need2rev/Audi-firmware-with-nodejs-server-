(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    HR1b: function (n, l, e) {
      "use strict";
      e.d(l, "a", function () {
        return b;
      });
      var a = e("Yi6/"),
        i = e("l7Jc"),
        t = (e("dr0G"), e("3Sae"), e("2gyy")),
        r = (e("MzQn"), e("H4ln")),
        u = e("YtkY"),
        o = e("PZqU"),
        s = (e("g+js"), e("AfGm"));
      class b {
        constructor(n, l, e, b, c, d, p, h) {
          ((this.routingService = n),
            (this.privacyService = l),
            (this.disclaimerService = e),
            (this.userService = c),
            (this.popupManagement = d),
            (this.licenseService = p),
            (this.ListItemType = a.rb),
            (this.ICON_CATEGORY_STATUSLINE = a.Z.StatusLine),
            (this.PrivacySettingEnum = r.c),
            (this.InfoTextEnum = r.b),
            (this.userDisabledReason = t.a.NOUSER.toString()),
            (this.fullPrivacyActive =
              a.Ob.POPUP_TOAST_SETUP_DATA_MGT_PRIVACY_STAGED_PRIVACYMODE_NOT_AVAILABLE),
            (this.privacyChanging = a.Ob.POPUP_SETTINGS_PRIVACY_WAITING),
            (this.privacyInfoRoute = i.a.children.Info),
            (this.isLogBookActive$ = this.licenseService
              .serviceLicenseState$(s.a.ONLINELOGBOOK)
              .pipe(Object(u.a)((n) => n === o.a.Activated))),
            (this.logBookPrivacyGroups$ = this.licenseService
              .service$(s.a.ONLINELOGBOOK)
              .pipe(
                Object(u.a)((n) =>
                  n && n.privacyGroups ? n.privacyGroups : [],
                ),
              )),
            (this.enablePrivacyMode = this.decorateLogBookPrivacyToast(
              (n) => this.privacyService.setPrivacyModeEnabled(n),
              !0,
            )),
            (this.setPersonalDataEnabled = this.decorateLogBookPrivacyToast(
              (n) => this.privacyService.setPersonalDataEnabled(n),
              !1,
              o.c.PersonalData,
            )),
            (this.setGpsDataEnabled = this.decorateLogBookPrivacyToast(
              (n) => this.privacyService.setGpsDataEnabled(n),
              !1,
              o.c.LocationData,
            )),
            (this.setTrackingDataEnabled = this.decorateLogBookPrivacyToast(
              (n) => this.privacyService.setTrackingDataEnabled(n),
              !1,
              o.c.TrackingData,
            )),
            (this.setConsentEnabled = this.decorateLogBookPrivacyToast(
              (n) => this.privacyService.setConsentEnabled(n),
              !1,
              o.c.ConsentData,
            )),
            (this.setBalancedInterestDataEnabled =
              this.decorateLogBookPrivacyToast(
                (n) => this.privacyService.setBalancedInterestDataEnabled(n),
                !1,
                o.c.BalancedInterestData,
              )),
            (this.setAnonymousDataEnabled = this.decorateLogBookPrivacyToast(
              (n) => this.privacyService.setAnonymousDataEnabled(n),
              !1,
              o.c.AnonymousData,
            )),
            (this.onlineServicesOpen = !1),
            (this.dataCollectionOpen = !1),
            (this.userEnabled$ = this.privacyService.userEnabledConstent$));
          const g = this.privacyService.privacyDisabledReason$.pipe(
              Object(u.a)((n) => (n && n.name.toString()) || ""),
            ),
            f = g.pipe(Object(u.a)((n) => !!n));
          ((this.disclaimerSubscription = e.registerDisclaimer({
            enabled$: f,
            reason$: g,
            priority: a.D.Car,
          })),
            (this.onlineServicesOpen =
              !!b.snapshot.queryParams &&
              "true" === b.snapshot.queryParams.onlineServicesOpen),
            (this.dataCollectionOpen =
              !!b.snapshot.queryParams &&
              "true" === b.snapshot.queryParams.dataCollectionOpen));
        }
        ngOnDestroy() {
          this.disclaimerService.unregisterDisclaimer(
            this.disclaimerSubscription,
          );
        }
        getFoldingIcon(n) {
          return n ? "E02D_listarrow_down.webp" : "E02E_listarrow_right.webp";
        }
        decorateLogBookPrivacyToast(n, l, e) {
          return (i, t, r) => {
            (n(i),
              i !== l ||
                !t ||
                (e && !this.groupAffectsLogbook(e, r)) ||
                this.popupManagement.request(
                  a.Ob.POPUP_LOGBOOK_PRIVACY_ON_WARNING,
                ));
          };
        }
        groupAffectsLogbook(n, l) {
          let e;
          switch (n) {
            case o.c.PersonalData:
              e = [o.c.PersonalData, o.c.LocationData, o.c.TrackingData];
              break;
            case o.c.LocationData:
              e = [o.c.LocationData, o.c.TrackingData];
              break;
            default:
              e = [n];
          }
          return l.some((n) => e.includes(n));
        }
        getRoutingExtras(n) {
          return {
            navigationExtras: {
              queryParams: {
                infoText: n,
                onlineServicesOpen: this.onlineServicesOpen,
                dataCollectionOpen: this.dataCollectionOpen,
              },
            },
          };
        }
      }
    },
    OXFN: function (n, l, e) {
      "use strict";
      (e.d(l, "a", function () {
        return a;
      }),
        e("HR1b"),
        e("l7Jc"),
        e("nybo"));
      class a {}
    },
    abzT: function (n, l, e) {
      "use strict";
      e.d(l, "a", function () {
        return Wn;
      });
      var a = e("kZht"),
        i = e("GAHT"),
        t = e("fu7d"),
        r = e("bou3"),
        u = e("yNay"),
        o = e("AH9k"),
        s = e("An66"),
        b = e("4XZL"),
        c = e("bMuc"),
        d = e("ZIdM"),
        p = e("3bpu"),
        h = e("6zvu"),
        g = e("VcEz"),
        f = e("OtM5"),
        x = e("y9xZ"),
        m = e("+sw+"),
        v = e("BMrr"),
        N = e("IEns"),
        y = e("z6QT"),
        L = e("flsk"),
        D = e("FQEI"),
        C = e("O82V"),
        O = e("Eln4"),
        T = e("evAh"),
        P = e("URLa"),
        A = e("CpzC"),
        _ = e("0Bsn"),
        E = e("5GjX"),
        I = e("mYyF"),
        k = e("v98a"),
        w = e("aOG8"),
        S = e("Krzs"),
        z = e("0qMr"),
        F = e("N2Hj"),
        M = e("UbWD"),
        R = e("2rvh"),
        G = e("odRV"),
        B = e("Udyh"),
        W = e("I3ve"),
        V = e("qiAR"),
        Y = e("007S"),
        H = e("oeT7"),
        $ = e("oxWk"),
        U = e("Tr//"),
        j = e("ihOk"),
        Z = e("ZMtB"),
        q = e("fzcM"),
        K = e("Z2XD"),
        Q = e("VUTu"),
        X = e("nK9R"),
        J = e("qzuC"),
        nn = e("8yWk"),
        ln = e("8WOv"),
        en = e("1pak"),
        an = e("P+G5"),
        tn = e("zPMi"),
        rn = e("9ZFG"),
        un = e("6480"),
        on = e("FfND"),
        sn = e("t7cT"),
        bn = e("HR1b"),
        cn = e("dr0G"),
        dn = e("1VvW"),
        pn = e("3Sae"),
        hn = e("sg2e"),
        gn = e("g+js"),
        fn = e("MzQn"),
        xn = a.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%}au3-disclaimer[_ngcontent-%COMP%]{min-height:0}.list[_ngcontent-%COMP%]{flex:1 1 0}.list__item[_ngcontent-%COMP%]{font-size:40px;height:100px}",
            ],
          ],
          data: {},
        });
      function mn(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-list-route-switch-item",
              [
                ["class", "list__item"],
                ["id", "FullPrivacyModeActive"],
                ["titleDeveloperText", "Privatsph\xe4remodus aktivieren"],
              ],
              null,
              [[null, "valueChange"]],
              function (n, l, e) {
                var a = !0;
                return (
                  "valueChange" === l &&
                    (a =
                      !1 !==
                        n.component.enablePrivacyMode(
                          e,
                          null == n.parent.parent.context.mib3Let
                            ? null
                            : n.parent.parent.context.mib3Let.isLogBookActive,
                          null == n.parent.parent.context.mib3Let
                            ? null
                            : n.parent.parent.context.mib3Let
                                .logBookPrivacyGroups,
                        ) && a),
                  a
                );
              },
              i.b,
              i.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              114688,
              null,
              0,
              o.a,
              [],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                subtitleHasText: [1, "subtitleHasText"],
                value: [2, "value"],
                switchDisabled: [3, "switchDisabled"],
                switchDisabledReason: [4, "switchDisabledReason"],
                type: [5, "type"],
                route: [6, "route"],
                routingExtras: [7, "routingExtras"],
              },
              { valueChange: "valueChange" },
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "FullPrivacyModeActive"),
              n(
                l,
                2,
                0,
                "Privatsph\xe4remodus aktivieren",
                !1,
                !!l.parent.parent.parent.context.mib3Let,
                l.parent.context.mib3Let,
                e.privacyChanging,
                e.ListItemType.ITEM_TYPE_SWITCH_INFO,
                e.privacyInfoRoute,
                e.getRoutingExtras(e.InfoTextEnum.PRIVACY_INFO),
              ));
          },
          null,
        );
      }
      function vn(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
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
            (n()(), a.hb(16777216, [[1, 2]], null, 1, null, mn)),
            a.xb(
              2,
              16384,
              null,
              0,
              s.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), a.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(l, 2, 0, void 0 !== l.parent.parent.context.mib3Let);
          },
          null,
        );
      }
      function Nn(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["id", "OnlineServices"],
                ["titleDeveloperText", "Onlinedienste"],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (n, l, e) {
                var a = !0,
                  i = n.component;
                return (
                  "mib3Tap" === l &&
                    (a =
                      0 != (i.onlineServicesOpen = !i.onlineServicesOpen) && a),
                  a
                );
              },
              b.b,
              b.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 147456, null, 0, c.a, [a.l, a.z], null, null),
            a.xb(
              3,
              147456,
              null,
              0,
              d.a,
              [c.a, [2, p.a], [2, t.a], u.a],
              null,
              null,
            ),
            a.xb(
              4,
              212992,
              null,
              0,
              h.a,
              [
                u.a,
                g.b,
                d.a,
                [2, p.a],
                [2, t.a],
                [2, f.a],
                [2, x.a],
                [2, m.a],
                a.z,
                v.a,
                a.l,
                [2, N.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.Sb(131584, null, y.a, y.a, [[3, y.a]]),
            a.xb(
              6,
              4407296,
              null,
              0,
              L.a,
              [
                a.l,
                D.a,
                a.h,
                y.a,
                [2, C.a],
                [2, p.b],
                [2, p.a],
                [2, O.a],
                [2, T.a],
              ],
              null,
              null,
            ),
            a.xb(
              7,
              114688,
              null,
              0,
              P.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                type: [2, "type"],
              },
              null,
            ),
            a.xb(
              8,
              147456,
              null,
              0,
              A.a,
              [[2, h.a], [2, f.a], [2, _.a], [2, L.a], [2, E.b], a.l, I.a, k.b],
              null,
              null,
            ),
            a.xb(
              9,
              147456,
              null,
              0,
              w.a,
              [[2, L.a], [2, h.a], [2, g.b], S.a],
              null,
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "OnlineServices"),
              n(l, 4, 0),
              n(l, 6, 0),
              n(
                l,
                7,
                0,
                e.getFoldingIcon(e.onlineServicesOpen),
                "Onlinedienste",
                e.ListItemType.ITEM_TYPE_NO_END_ICON,
              ));
          },
          function (n, l) {
            n(l, 0, 0, a.Nb(l, 6).markerClassEnabled);
          },
        );
      }
      function yn(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-list-route-switch-item",
              [
                ["class", "list__item"],
                ["id", "PersonalDataAllowed"],
                ["titleDeveloperText", "Personenbezogene Daten erlauben"],
              ],
              null,
              [[null, "valueChange"]],
              function (n, l, e) {
                var a = !0;
                return (
                  "valueChange" === l &&
                    (a =
                      !1 !==
                        n.component.setPersonalDataEnabled(
                          e,
                          null == n.parent.parent.parent.context.mib3Let
                            ? null
                            : n.parent.parent.parent.context.mib3Let
                                .isLogBookActive,
                          null == n.parent.parent.parent.context.mib3Let
                            ? null
                            : n.parent.parent.parent.context.mib3Let
                                .logBookPrivacyGroups,
                        ) && a),
                  a
                );
              },
              i.b,
              i.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              114688,
              null,
              0,
              o.a,
              [],
              {
                offsetFolding: [0, "offsetFolding"],
                titleDeveloperText: [1, "titleDeveloperText"],
                subtitleHasText: [2, "subtitleHasText"],
                value: [3, "value"],
                switchDisabled: [4, "switchDisabled"],
                switchDisabledReason: [5, "switchDisabledReason"],
                type: [6, "type"],
                route: [7, "route"],
                routingExtras: [8, "routingExtras"],
              },
              { valueChange: "valueChange" },
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "PersonalDataAllowed"),
              n(
                l,
                2,
                0,
                !0,
                "Personenbezogene Daten erlauben",
                !1,
                l.parent.context.mib3Let,
                l.parent.parent.parent.parent.context.mib3Let ||
                  l.parent.parent.parent.parent.parent.context.mib3Let,
                l.parent.parent.parent.parent.parent.context.mib3Let
                  ? e.privacyChanging
                  : e.fullPrivacyActive,
                e.ListItemType.ITEM_TYPE_SWITCH_INFO,
                e.privacyInfoRoute,
                e.getRoutingExtras(e.InfoTextEnum.PERSONAL_INFO),
              ));
          },
          null,
        );
      }
      function Ln(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
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
            (n()(), a.hb(16777216, [[1, 2]], null, 1, null, yn)),
            a.xb(
              2,
              16384,
              null,
              0,
              s.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), a.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(l, 2, 0, void 0 !== l.context.mib3Let);
          },
          null,
        );
      }
      function Dn(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-list-route-switch-item",
              [
                ["class", "list__item"],
                ["id", "LocationDataAllowed"],
                [
                  "titleDeveloperText",
                  "Verwendung der GPS-Position (ohne Anzeige) erlauben",
                ],
              ],
              null,
              [[null, "valueChange"]],
              function (n, l, e) {
                var a = !0;
                return (
                  "valueChange" === l &&
                    (a =
                      !1 !==
                        n.component.setGpsDataEnabled(
                          e,
                          null == n.parent.parent.parent.context.mib3Let
                            ? null
                            : n.parent.parent.parent.context.mib3Let
                                .isLogBookActive,
                          null == n.parent.parent.parent.context.mib3Let
                            ? null
                            : n.parent.parent.parent.context.mib3Let
                                .logBookPrivacyGroups,
                        ) && a),
                  a
                );
              },
              i.b,
              i.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              114688,
              null,
              0,
              o.a,
              [],
              {
                offsetFolding: [0, "offsetFolding"],
                titleDeveloperText: [1, "titleDeveloperText"],
                subtitleHasText: [2, "subtitleHasText"],
                value: [3, "value"],
                switchDisabled: [4, "switchDisabled"],
                switchDisabledReason: [5, "switchDisabledReason"],
                type: [6, "type"],
                route: [7, "route"],
                routingExtras: [8, "routingExtras"],
              },
              { valueChange: "valueChange" },
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "LocationDataAllowed"),
              n(
                l,
                2,
                0,
                !0,
                "Verwendung der GPS-Position (ohne Anzeige) erlauben",
                !1,
                l.parent.context.mib3Let,
                l.parent.parent.parent.parent.context.mib3Let ||
                  l.parent.parent.parent.parent.parent.context.mib3Let,
                l.parent.parent.parent.parent.parent.context.mib3Let
                  ? e.privacyChanging
                  : e.fullPrivacyActive,
                e.ListItemType.ITEM_TYPE_SWITCH_INFO,
                e.privacyInfoRoute,
                e.getRoutingExtras(e.InfoTextEnum.GPS_INFO),
              ));
          },
          null,
        );
      }
      function Cn(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
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
            (n()(), a.hb(16777216, [[1, 2]], null, 1, null, Dn)),
            a.xb(
              2,
              16384,
              null,
              0,
              s.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), a.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(l, 2, 0, void 0 !== l.context.mib3Let);
          },
          null,
        );
      }
      function On(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-list-route-switch-item",
              [
                ["class", "list__item"],
                ["id", "TrackingDataAllowed"],
                [
                  "titleDeveloperText",
                  "Anzeigen der Live GPS-Position erlauben",
                ],
              ],
              null,
              [[null, "valueChange"]],
              function (n, l, e) {
                var a = !0;
                return (
                  "valueChange" === l &&
                    (a =
                      !1 !==
                        n.component.setTrackingDataEnabled(
                          e,
                          null == n.parent.parent.parent.context.mib3Let
                            ? null
                            : n.parent.parent.parent.context.mib3Let
                                .isLogBookActive,
                          null == n.parent.parent.parent.context.mib3Let
                            ? null
                            : n.parent.parent.parent.context.mib3Let
                                .logBookPrivacyGroups,
                        ) && a),
                  a
                );
              },
              i.b,
              i.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              114688,
              null,
              0,
              o.a,
              [],
              {
                offsetFolding: [0, "offsetFolding"],
                titleDeveloperText: [1, "titleDeveloperText"],
                subtitleHasText: [2, "subtitleHasText"],
                value: [3, "value"],
                switchDisabled: [4, "switchDisabled"],
                switchDisabledReason: [5, "switchDisabledReason"],
                type: [6, "type"],
                route: [7, "route"],
                routingExtras: [8, "routingExtras"],
              },
              { valueChange: "valueChange" },
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "TrackingDataAllowed"),
              n(
                l,
                2,
                0,
                !0,
                "Anzeigen der Live GPS-Position erlauben",
                !1,
                l.parent.context.mib3Let,
                l.parent.parent.parent.parent.context.mib3Let ||
                  l.parent.parent.parent.parent.parent.context.mib3Let,
                l.parent.parent.parent.parent.parent.context.mib3Let
                  ? e.privacyChanging
                  : e.fullPrivacyActive,
                e.ListItemType.ITEM_TYPE_SWITCH_INFO,
                e.privacyInfoRoute,
                e.getRoutingExtras(e.InfoTextEnum.TRACKING_INFO),
              ));
          },
          null,
        );
      }
      function Tn(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
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
            (n()(), a.hb(16777216, [[1, 2]], null, 1, null, On)),
            a.xb(
              2,
              16384,
              null,
              0,
              s.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), a.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(l, 2, 0, void 0 !== l.context.mib3Let);
          },
          null,
        );
      }
      function Pn(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              9,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), a.hb(16777216, [[1, 2]], null, 2, null, Ln)),
            a.xb(
              2,
              16384,
              null,
              0,
              z.a,
              [a.L, a.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            a.Pb(131072, s.b, [a.h]),
            (n()(), a.hb(16777216, [[1, 2]], null, 2, null, Cn)),
            a.xb(
              5,
              16384,
              null,
              0,
              z.a,
              [a.L, a.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            a.Pb(131072, s.b, [a.h]),
            (n()(), a.hb(16777216, [[1, 2]], null, 2, null, Tn)),
            a.xb(
              8,
              16384,
              null,
              0,
              z.a,
              [a.L, a.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            a.Pb(131072, s.b, [a.h]),
            (n()(), a.hb(0, null, null, 0)),
          ],
          function (n, l) {
            var e = l.component;
            (n(
              l,
              2,
              0,
              a.Yb(
                l,
                2,
                0,
                a.Nb(l, 3).transform(e.privacyService.personalDataEnabled$),
              ),
            ),
              n(
                l,
                5,
                0,
                a.Yb(
                  l,
                  5,
                  0,
                  a.Nb(l, 6).transform(e.privacyService.gpsDataEnabled$),
                ),
              ),
              n(
                l,
                8,
                0,
                a.Yb(
                  l,
                  8,
                  0,
                  a.Nb(l, 9).transform(e.privacyService.trackingDataEnabled$),
                ),
              ));
          },
          null,
        );
      }
      function An(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-list-route-switch-item",
              [
                ["class", "list__item"],
                ["id", "UseMyAudiPrivacyData"],
                [
                  "titleDeveloperText",
                  "Einstell. der personenbezg. Datenerhebung aus myAudi \xfcbernehmen",
                ],
              ],
              null,
              [[null, "valueChange"]],
              function (n, l, e) {
                var a = !0;
                return (
                  "valueChange" === l &&
                    (a =
                      !1 !==
                        n.component.setConsentEnabled(
                          e,
                          null == n.parent.parent.parent.parent.context.mib3Let
                            ? null
                            : n.parent.parent.parent.parent.context.mib3Let
                                .isLogBookActive,
                          null == n.parent.parent.parent.parent.context.mib3Let
                            ? null
                            : n.parent.parent.parent.parent.context.mib3Let
                                .logBookPrivacyGroups,
                        ) && a),
                  a
                );
              },
              i.b,
              i.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              114688,
              null,
              0,
              o.a,
              [],
              {
                offsetFolding: [0, "offsetFolding"],
                titleDeveloperText: [1, "titleDeveloperText"],
                subtitleHasText: [2, "subtitleHasText"],
                value: [3, "value"],
                switchDisabled: [4, "switchDisabled"],
                switchDisabledReason: [5, "switchDisabledReason"],
                type: [6, "type"],
                route: [7, "route"],
                routingExtras: [8, "routingExtras"],
              },
              { valueChange: "valueChange" },
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "UseMyAudiPrivacyData"),
              n(
                l,
                2,
                0,
                !0,
                "Einstell. der personenbezg. Datenerhebung aus myAudi \xfcbernehmen",
                !1,
                !(
                  null == l.parent.context.mib3Let ||
                  !l.parent.context.mib3Let.user
                ) &&
                  (null == l.parent.context.mib3Let
                    ? null
                    : l.parent.context.mib3Let.value),
                !(
                  null != l.parent.context.mib3Let &&
                  l.parent.context.mib3Let.user
                ) ||
                  l.parent.parent.parent.parent.parent.context.mib3Let ||
                  l.parent.parent.parent.parent.parent.parent.context.mib3Let,
                l.parent.parent.parent.parent.parent.parent.context.mib3Let
                  ? e.privacyChanging
                  : (!(
                      null != l.parent.context.mib3Let &&
                      l.parent.context.mib3Let.user
                    ) &&
                      e.userDisabledReason) ||
                      e.fullPrivacyActive,
                e.ListItemType.ITEM_TYPE_SWITCH_INFO,
                e.privacyInfoRoute,
                e.getRoutingExtras(e.InfoTextEnum.DATA_COLLECTION_PERSONAL),
              ));
          },
          null,
        );
      }
      function _n(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
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
            (n()(), a.hb(16777216, [[1, 2]], null, 1, null, An)),
            a.xb(
              2,
              16384,
              null,
              0,
              s.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), a.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(
              l,
              2,
              0,
              void 0 !==
                (null == l.context.mib3Let ? null : l.context.mib3Let.value),
            );
          },
          null,
        );
      }
      function En(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-list-route-switch-item",
              [
                ["class", "list__item"],
                ["id", "ProductImprovementDataAllowed"],
                [
                  "titleDeveloperText",
                  "Datenerhebung zur Produktverbesserung erlauben",
                ],
              ],
              null,
              [[null, "valueChange"]],
              function (n, l, e) {
                var a = !0;
                return (
                  "valueChange" === l &&
                    (a =
                      !1 !==
                        n.component.setBalancedInterestDataEnabled(
                          e,
                          null == n.parent.parent.parent.parent.context.mib3Let
                            ? null
                            : n.parent.parent.parent.parent.context.mib3Let
                                .isLogBookActive,
                          null == n.parent.parent.parent.parent.context.mib3Let
                            ? null
                            : n.parent.parent.parent.parent.context.mib3Let
                                .logBookPrivacyGroups,
                        ) && a),
                  a
                );
              },
              i.b,
              i.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              114688,
              null,
              0,
              o.a,
              [],
              {
                offsetFolding: [0, "offsetFolding"],
                titleDeveloperText: [1, "titleDeveloperText"],
                subtitleHasText: [2, "subtitleHasText"],
                value: [3, "value"],
                switchDisabled: [4, "switchDisabled"],
                switchDisabledReason: [5, "switchDisabledReason"],
                type: [6, "type"],
                route: [7, "route"],
                routingExtras: [8, "routingExtras"],
              },
              { valueChange: "valueChange" },
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "ProductImprovementDataAllowed"),
              n(
                l,
                2,
                0,
                !0,
                "Datenerhebung zur Produktverbesserung erlauben",
                !1,
                l.parent.context.mib3Let,
                l.parent.parent.parent.parent.parent.context.mib3Let ||
                  l.parent.parent.parent.parent.parent.parent.context.mib3Let,
                l.parent.parent.parent.parent.parent.parent.context.mib3Let
                  ? e.privacyChanging
                  : e.fullPrivacyActive,
                e.ListItemType.ITEM_TYPE_SWITCH_INFO,
                e.privacyInfoRoute,
                e.getRoutingExtras(e.InfoTextEnum.DATA_COLLECTION_STATISTICAL),
              ));
          },
          null,
        );
      }
      function In(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
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
            (n()(), a.hb(16777216, [[1, 2]], null, 1, null, En)),
            a.xb(
              2,
              16384,
              null,
              0,
              s.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), a.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(l, 2, 0, void 0 !== l.context.mib3Let);
          },
          null,
        );
      }
      function kn(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-list-route-switch-item",
              [
                ["class", "list__item"],
                ["id", "AnonymousDataAllowed"],
                [
                  "titleDeveloperText",
                  "Anonyme Erhebung von Statistikdaten erlauben",
                ],
              ],
              null,
              [[null, "valueChange"]],
              function (n, l, e) {
                var a = !0;
                return (
                  "valueChange" === l &&
                    (a =
                      !1 !==
                        n.component.setAnonymousDataEnabled(
                          e,
                          null == n.parent.parent.parent.parent.context.mib3Let
                            ? null
                            : n.parent.parent.parent.parent.context.mib3Let
                                .isLogBookActive,
                          null == n.parent.parent.parent.parent.context.mib3Let
                            ? null
                            : n.parent.parent.parent.parent.context.mib3Let
                                .logBookPrivacyGroups,
                        ) && a),
                  a
                );
              },
              i.b,
              i.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              114688,
              null,
              0,
              o.a,
              [],
              {
                offsetFolding: [0, "offsetFolding"],
                titleDeveloperText: [1, "titleDeveloperText"],
                subtitleHasText: [2, "subtitleHasText"],
                value: [3, "value"],
                switchDisabled: [4, "switchDisabled"],
                switchDisabledReason: [5, "switchDisabledReason"],
                type: [6, "type"],
                route: [7, "route"],
                routingExtras: [8, "routingExtras"],
              },
              { valueChange: "valueChange" },
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "AnonymousDataAllowed"),
              n(
                l,
                2,
                0,
                !0,
                "Anonyme Erhebung von Statistikdaten erlauben",
                !1,
                l.parent.context.mib3Let,
                l.parent.parent.parent.parent.parent.context.mib3Let ||
                  l.parent.parent.parent.parent.parent.parent.context.mib3Let,
                l.parent.parent.parent.parent.parent.parent.context.mib3Let
                  ? e.privacyChanging
                  : e.fullPrivacyActive,
                e.ListItemType.ITEM_TYPE_SWITCH_INFO,
                e.privacyInfoRoute,
                e.getRoutingExtras(e.InfoTextEnum.DATA_COLLECTION_ANONYM),
              ));
          },
          null,
        );
      }
      function wn(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
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
            (n()(), a.hb(16777216, [[1, 2]], null, 1, null, kn)),
            a.xb(
              2,
              16384,
              null,
              0,
              s.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), a.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(l, 2, 0, void 0 !== l.context.mib3Let);
          },
          null,
        );
      }
      function Sn(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              11,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), a.hb(16777216, [[1, 2]], null, 4, null, _n)),
            a.xb(
              2,
              16384,
              null,
              0,
              z.a,
              [a.L, a.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            a.Pb(131072, s.b, [a.h]),
            a.Pb(131072, s.b, [a.h]),
            a.Qb(5, { value: 0, user: 1 }),
            (n()(), a.hb(16777216, [[1, 2]], null, 2, null, In)),
            a.xb(
              7,
              16384,
              null,
              0,
              z.a,
              [a.L, a.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            a.Pb(131072, s.b, [a.h]),
            (n()(), a.hb(16777216, [[1, 2]], null, 2, null, wn)),
            a.xb(
              10,
              16384,
              null,
              0,
              z.a,
              [a.L, a.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            a.Pb(131072, s.b, [a.h]),
            (n()(), a.hb(0, null, null, 0)),
          ],
          function (n, l) {
            var e = l.component,
              i = n(
                l,
                5,
                0,
                a.Yb(
                  l,
                  2,
                  0,
                  a.Nb(l, 3).transform(e.privacyService.consentDataEnabled$),
                ),
                a.Yb(l, 2, 0, a.Nb(l, 4).transform(e.userEnabled$)),
              );
            (n(l, 2, 0, i),
              n(
                l,
                7,
                0,
                a.Yb(
                  l,
                  7,
                  0,
                  a
                    .Nb(l, 8)
                    .transform(e.privacyService.balancedInterestDataEnabled$),
                ),
              ),
              n(
                l,
                10,
                0,
                a.Yb(
                  l,
                  10,
                  0,
                  a.Nb(l, 11).transform(e.privacyService.anonymousDataEnabled$),
                ),
              ));
          },
          null,
        );
      }
      function zn(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              12,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            a.yb(
              1,
              0,
              null,
              null,
              9,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["id", "DataCollection"],
                ["titleDeveloperText", "Datenerhebung"],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (n, l, e) {
                var a = !0,
                  i = n.component;
                return (
                  "mib3Tap" === l &&
                    (a =
                      0 != (i.dataCollectionOpen = !i.dataCollectionOpen) && a),
                  a
                );
              },
              b.b,
              b.a,
            )),
            a.xb(
              2,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(3, 147456, null, 0, c.a, [a.l, a.z], null, null),
            a.xb(
              4,
              147456,
              null,
              0,
              d.a,
              [c.a, [2, p.a], [2, t.a], u.a],
              null,
              null,
            ),
            a.xb(
              5,
              212992,
              null,
              0,
              h.a,
              [
                u.a,
                g.b,
                d.a,
                [2, p.a],
                [2, t.a],
                [2, f.a],
                [2, x.a],
                [2, m.a],
                a.z,
                v.a,
                a.l,
                [2, N.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.Sb(131584, null, y.a, y.a, [[3, y.a]]),
            a.xb(
              7,
              4407296,
              null,
              0,
              L.a,
              [
                a.l,
                D.a,
                a.h,
                y.a,
                [2, C.a],
                [2, p.b],
                [2, p.a],
                [2, O.a],
                [2, T.a],
              ],
              null,
              null,
            ),
            a.xb(
              8,
              114688,
              null,
              0,
              P.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                type: [2, "type"],
              },
              null,
            ),
            a.xb(
              9,
              147456,
              null,
              0,
              A.a,
              [[2, h.a], [2, f.a], [2, _.a], [2, L.a], [2, E.b], a.l, I.a, k.b],
              null,
              null,
            ),
            a.xb(
              10,
              147456,
              null,
              0,
              w.a,
              [[2, L.a], [2, h.a], [2, g.b], S.a],
              null,
              null,
            ),
            (n()(), a.hb(16777216, [[1, 2]], null, 1, null, Sn)),
            a.xb(
              12,
              16384,
              null,
              0,
              s.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), a.hb(0, null, null, 0)),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 2, 0, "DataCollection"),
              n(l, 5, 0),
              n(l, 7, 0),
              n(
                l,
                8,
                0,
                e.getFoldingIcon(e.dataCollectionOpen),
                "Datenerhebung",
                e.ListItemType.ITEM_TYPE_NO_END_ICON,
              ),
              n(l, 12, 0, e.dataCollectionOpen));
          },
          function (n, l) {
            n(l, 1, 0, a.Nb(l, 7).markerClassEnabled);
          },
        );
      }
      function Fn(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              16,
              "au3-list",
              [
                ["class", "list"],
                ["id", "PrivacySettingsList"],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              F.b,
              F.a,
            )),
            a.Sb(6144, null, M.a, null, [R.a]),
            a.xb(
              2,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(3, 16384, null, 0, G.a, [a.l], null, null),
            a.xb(
              4,
              12828672,
              null,
              1,
              R.a,
              [
                [2, B.a],
                [2, W.a],
                [8, null],
                [2, t.a],
                [2, V.a],
                [2, Y.a],
                [2, g.b],
                H.i,
                a.z,
                a.h,
                u.a,
                $.a,
                U.a,
                [2, D.a],
                p.a,
                [2, H.a],
              ],
              null,
              null,
            ),
            a.Tb(603979776, 1, { template: 0 }),
            (n()(), a.hb(16777216, [[1, 2]], 0, 2, null, vn)),
            a.xb(
              7,
              16384,
              null,
              0,
              z.a,
              [a.L, a.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            a.Pb(131072, s.b, [a.h]),
            (n()(), a.hb(16777216, [[1, 2]], 0, 2, null, Nn)),
            a.xb(
              10,
              16384,
              null,
              0,
              s.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            a.Pb(131072, s.b, [a.h]),
            (n()(), a.hb(16777216, [[1, 2]], 0, 1, null, Pn)),
            a.xb(
              13,
              16384,
              null,
              0,
              s.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), a.hb(16777216, [[1, 2]], 0, 2, null, zn)),
            a.xb(
              15,
              16384,
              null,
              0,
              s.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            a.Pb(131072, s.b, [a.h]),
          ],
          function (n, l) {
            var e,
              i = l.component;
            (n(l, 2, 0, "PrivacySettingsList"),
              n(l, 4, 0),
              n(
                l,
                7,
                0,
                !(
                  null ==
                    (e = a.Yb(
                      l,
                      7,
                      0,
                      a.Nb(l, 8).transform(i.privacyService.privacyMode$),
                    )) || !e.restrictionReason
                ),
              ),
              n(
                l,
                10,
                0,
                a.Yb(
                  l,
                  10,
                  0,
                  a
                    .Nb(l, 11)
                    .transform(i.privacyService.onlineServicesAvailable$),
                ),
              ),
              n(l, 13, 0, i.onlineServicesOpen),
              n(
                l,
                15,
                0,
                a.Yb(
                  l,
                  15,
                  0,
                  a
                    .Nb(l, 16)
                    .transform(i.privacyService.dataCollectionAvailable$),
                ),
              ));
          },
          function (n, l) {
            n(l, 0, 0, a.Nb(l, 4).showLineNumbers);
          },
        );
      }
      function Mn(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              6,
              "au3-disclaimer",
              [],
              null,
              null,
              null,
              j.b,
              j.a,
            )),
            a.xb(
              1,
              4440064,
              null,
              0,
              Z.a,
              [q.a, [2, t.a], a.h, u.a],
              null,
              null,
            ),
            (n()(), a.hb(16777216, null, 0, 4, null, Fn)),
            a.xb(
              3,
              16384,
              null,
              0,
              z.a,
              [a.L, a.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            a.Pb(131072, s.b, [a.h]),
            a.Pb(131072, s.b, [a.h]),
            a.Qb(6, { isLogBookActive: 0, logBookPrivacyGroups: 1 }),
          ],
          function (n, l) {
            var e = l.component;
            n(l, 1, 0);
            var i = n(
              l,
              6,
              0,
              a.Yb(l, 3, 0, a.Nb(l, 4).transform(e.isLogBookActive$)),
              a.Yb(l, 3, 0, a.Nb(l, 5).transform(e.logBookPrivacyGroups$)),
            );
            n(l, 3, 0, i);
          },
          null,
        );
      }
      function Rn(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              31,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:SETUP_DATA_MGT_PRIVACY_STAGED_PRIVACYMODE_MAIN"],
              ],
              null,
              null,
              null,
              K.b,
              K.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 4440064, null, 0, x.a, [u.a], { id: [0, "id"] }, null),
            (n()(),
            a.yb(
              3,
              0,
              null,
              0,
              25,
              "au3-title-line",
              [
                ["class", "title"],
                ["id", "TitleLine"],
              ],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Q.b,
              Q.a,
            )),
            a.xb(
              4,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              5,
              49152,
              null,
              0,
              X.a,
              [J.a, nn.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (n()(),
            a.yb(
              6,
              0,
              null,
              0,
              10,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", "BackButton"],
                ["left", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (n, l, e) {
                var a = !0;
                return (
                  "mib3Tap" === l &&
                    (a = !1 !== n.component.routingService.goUp() && a),
                  a
                );
              },
              ln.b,
              ln.a,
            )),
            a.xb(7, 147456, null, 0, c.a, [a.l, a.z], null, null),
            a.xb(
              8,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              9,
              147456,
              null,
              0,
              d.a,
              [c.a, [2, p.a], [2, t.a], u.a],
              null,
              null,
            ),
            a.xb(
              10,
              212992,
              null,
              0,
              h.a,
              [
                u.a,
                g.b,
                d.a,
                [2, p.a],
                [2, t.a],
                [2, f.a],
                [2, x.a],
                [2, m.a],
                a.z,
                v.a,
                a.l,
                [2, N.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.xb(
              11,
              147456,
              null,
              0,
              en.a,
              [u.a, an.a, a.l, [2, h.a], [2, f.a]],
              null,
              null,
            ),
            a.Sb(131584, null, y.a, y.a, [[3, y.a]]),
            a.xb(
              13,
              4407296,
              null,
              0,
              L.a,
              [
                a.l,
                D.a,
                a.h,
                y.a,
                [2, C.a],
                [2, p.b],
                [2, p.a],
                [2, O.a],
                [2, T.a],
              ],
              null,
              null,
            ),
            a.xb(
              14,
              49152,
              null,
              0,
              tn.a,
              [[2, f.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            a.xb(
              15,
              147456,
              null,
              0,
              A.a,
              [[2, h.a], [2, f.a], [2, _.a], [2, L.a], [2, E.b], a.l, I.a, k.b],
              null,
              null,
            ),
            a.xb(
              16,
              147456,
              null,
              0,
              w.a,
              [[2, L.a], [2, h.a], [2, g.b], S.a],
              null,
              null,
            ),
            (n()(),
            a.yb(
              17,
              0,
              null,
              2,
              11,
              "au3-title-line-item",
              [
                ["icon", "E9C1_phone_vcard_info.webp"],
                ["id", "GoToInfo"],
                ["right", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              ln.b,
              ln.a,
            )),
            a.xb(
              18,
              147456,
              null,
              0,
              f.a,
              [rn.a, a.h, u.a, [3, f.a]],
              null,
              null,
            ),
            a.xb(19, 147456, null, 0, c.a, [a.l, a.z], null, null),
            a.xb(
              20,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              21,
              147456,
              null,
              0,
              d.a,
              [c.a, [2, p.a], [2, t.a], u.a],
              null,
              null,
            ),
            a.xb(
              22,
              212992,
              null,
              0,
              h.a,
              [
                u.a,
                g.b,
                d.a,
                [2, p.a],
                [2, t.a],
                [2, f.a],
                [2, x.a],
                [2, m.a],
                a.z,
                v.a,
                a.l,
                [2, N.a],
              ],
              null,
              null,
            ),
            a.xb(
              23,
              671744,
              null,
              0,
              un.a,
              [on.a, H.i, f.a, h.a, un.b, sn.a],
              {
                routeInfo: [0, "routeInfo"],
                routingExtras: [1, "routingExtras"],
                infoButton: [2, "infoButton"],
              },
              null,
            ),
            a.Sb(131584, null, y.a, y.a, [[3, y.a]]),
            a.xb(
              25,
              4407296,
              null,
              0,
              L.a,
              [
                a.l,
                D.a,
                a.h,
                y.a,
                [2, C.a],
                [2, p.b],
                [2, p.a],
                [2, O.a],
                [2, T.a],
              ],
              null,
              null,
            ),
            a.xb(
              26,
              49152,
              null,
              0,
              tn.a,
              [[2, f.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            a.xb(
              27,
              147456,
              null,
              0,
              A.a,
              [[2, h.a], [2, f.a], [2, _.a], [2, L.a], [2, E.b], a.l, I.a, k.b],
              null,
              null,
            ),
            a.xb(
              28,
              147456,
              null,
              0,
              w.a,
              [[2, L.a], [2, h.a], [2, g.b], S.a],
              null,
              null,
            ),
            (n()(), a.hb(16777216, null, 0, 2, null, Mn)),
            a.xb(
              30,
              16384,
              null,
              0,
              z.a,
              [a.L, a.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            a.Pb(131072, s.b, [a.h]),
          ],
          function (n, l) {
            var e = l.component;
            (n(
              l,
              1,
              0,
              "Screen:SETUP_DATA_MGT_PRIVACY_STAGED_PRIVACYMODE_MAIN",
            ),
              n(
                l,
                2,
                0,
                "Screen:SETUP_DATA_MGT_PRIVACY_STAGED_PRIVACYMODE_MAIN",
              ),
              n(l, 4, 0, "TitleLine"),
              n(l, 5, 0, "Einstellungen", "Privatsph\xe4re"),
              n(l, 8, 0, "BackButton"),
              n(l, 10, 0),
              n(l, 13, 0),
              n(l, 14, 0, !1, "E163_Backbutton.webp"),
              n(l, 20, 0, "GoToInfo"),
              n(l, 22, 0),
              n(
                l,
                23,
                0,
                e.privacyInfoRoute,
                e.getRoutingExtras(e.InfoTextEnum.GENERAL_INFO),
                !0,
              ),
              n(l, 25, 0),
              n(l, 26, 0, !1, "E9C1_phone_vcard_info.webp"),
              n(
                l,
                30,
                0,
                a.Yb(
                  l,
                  30,
                  0,
                  a.Nb(l, 31).transform(e.privacyService.privacyModeEnabled$),
                ),
              ));
          },
          function (n, l) {
            (n(
              l,
              3,
              0,
              a.Nb(l, 5).hideLeftBorder,
              a.Nb(l, 5).hideDividingBorders,
            ),
              n(
                l,
                6,
                0,
                a.Nb(l, 13).markerClassEnabled,
                a.Nb(l, 14).useItemPlaceholder,
              ),
              n(
                l,
                17,
                0,
                a.Nb(l, 18).combinedDisabled,
                a.Nb(l, 18).useBrighterIcon,
                a.Nb(l, 25).markerClassEnabled,
                a.Nb(l, 26).useItemPlaceholder,
              ));
          },
        );
      }
      function Gn(n) {
        return a.ac(
          2,
          [
            (n()(), a.hb(16777216, null, null, 2, null, Rn)),
            a.xb(
              1,
              16384,
              null,
              0,
              z.a,
              [a.L, a.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            a.Pb(131072, s.b, [a.h]),
          ],
          function (n, l) {
            var e,
              i = l.component;
            n(
              l,
              1,
              0,
              !(
                null ==
                  (e = a.Yb(
                    l,
                    1,
                    0,
                    a.Nb(l, 2).transform(i.privacyService.privacyGroup$),
                  )) || !e.restrictionReason
              ),
            );
          },
          null,
        );
      }
      function Bn(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-privacy-settings",
              [],
              null,
              null,
              null,
              Gn,
              xn,
            )),
            a.xb(
              1,
              180224,
              null,
              0,
              bn.a,
              [on.a, cn.a, q.a, dn.a, pn.a, hn.a, gn.a, fn.a],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var Wn = a.ub("au3-privacy-settings", bn.a, Bn, {}, {}, []);
    },
    dY2g: function (n, l, e) {
      "use strict";
      e.d(l, "a", function () {
        return ml;
      });
      var a = e("kZht"),
        i = e("8TlW"),
        t = e("fu7d"),
        r = e("bou3"),
        u = e("yNay"),
        o = e("Xo58"),
        s = e("m3Ja"),
        b = e("r+e+"),
        c = e("ijxY"),
        d = e("bmFL"),
        p = e("HVUF"),
        h = e("B3Zb"),
        g = e("dr0G"),
        f = e("Yi6/");
      class x {
        constructor(n) {
          ((this.privacyService = n),
            (this.ICON_CATEGORY_STATUSLINE = f.Z.StatusLine),
            (this.para1 =
              "Bei der Nutzung der Onlinedienste oder Zustimmung zu\nDatenerhebungsauftr\xe4gen werden Daten aus dem Fahrzeug an die Audi AG\n\xfcbertragen. Sie haben hier die M\xf6glichkeit, das Senden bestimmter\nDatentypen zu aktivieren oder zu deaktivieren um Ihre Privatsph\xe4re\nentsprechend zu sch\xfctzen. Bei der Deaktivierung von ausgew\xe4hlten\nDatentypen wird eine Teilmenge der verf\xfcgbaren Onlinedienste daktiviert."),
            (this.para2 =
              "Ein Icon in der Statusleiste des MMI zeigt die aktuell gew\xe4hlten Privatsph\xe4reeinstellungen an:"),
            (this.para3 =
              "Bitte beachten Sie, dass sich \xc4nderungen der Privatsph\xe4reeinstellungen nur\nauf die Daten\xfcbertragung \xfcber die fahzreuginterne SIM-Karte auswirken.\nDavon nicht betroffen sind unter anderem Bluetooth, Wireless LAN und Audi\nSmartphone Interface. Weitere Informationen finden Sie im Bordbuch."));
        }
      }
      var m = a.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;overflow:hidden}.paragraph[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{font-size:40px}.paragraph[_ngcontent-%COMP%]{display:block;margin:25px 0}.legend[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.legend__icon[_ngcontent-%COMP%]{width:40px;height:40px;margin:0 20px}.legend__explanation[_ngcontent-%COMP%]{flex:1 1 0}.line[_ngcontent-%COMP%]{display:block}",
          ],
        ],
        data: {},
      });
      function v(n) {
        return a.ac(
          2,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "title paragraph"],
                ["developerText", "Privatsph\xe4reeinstellungen"],
                ["id", "title"],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            a.yb(
              3,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "paragraph"],
                ["id", "p1"],
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
            a.xb(
              4,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              5,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            a.yb(
              6,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "paragraph"],
                ["id", "p2"],
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
            a.xb(
              7,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              8,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            a.yb(
              9,
              0,
              null,
              null,
              5,
              "div",
              [["class", "legend"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            a.yb(
              10,
              0,
              null,
              null,
              1,
              "au3-icon",
              [
                ["class", "legend__icon"],
                ["fileName", "E473_privacy_very_high.webp"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              p.b,
              p.a,
            )),
            a.xb(
              11,
              4243456,
              null,
              0,
              h.b,
              [u.a, a.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (n()(),
            a.yb(
              12,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "legend__explanation"],
                ["developerText", "Maximale Privatsph\xe4re"],
                ["id", "ExplanationIcon1"],
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
            a.xb(
              13,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              14,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            a.yb(
              15,
              0,
              null,
              null,
              5,
              "div",
              [["class", "legend"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            a.yb(
              16,
              0,
              null,
              null,
              1,
              "au3-icon",
              [
                ["class", "legend__icon"],
                ["fileName", "E472_privacy_high.webp"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              p.b,
              p.a,
            )),
            a.xb(
              17,
              4243456,
              null,
              0,
              h.b,
              [u.a, a.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (n()(),
            a.yb(
              18,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "legend__explanation"],
                ["developerText", "Verwendung Personenbezogener Daten"],
                ["id", "ExplanationIcon2"],
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
            a.xb(
              19,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              20,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            a.yb(
              21,
              0,
              null,
              null,
              5,
              "div",
              [["class", "legend"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            a.yb(
              22,
              0,
              null,
              null,
              1,
              "au3-icon",
              [
                ["class", "legend__icon"],
                ["fileName", "E471_privacy_med.webp"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              p.b,
              p.a,
            )),
            a.xb(
              23,
              4243456,
              null,
              0,
              h.b,
              [u.a, a.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (n()(),
            a.yb(
              24,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "legend__explanation"],
                ["developerText", "Verwendung der Fahrzeugposition"],
                ["id", "ExplanationIcon3"],
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
            a.xb(
              25,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              26,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            a.yb(
              27,
              0,
              null,
              null,
              5,
              "div",
              [["class", "legend"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            a.yb(
              28,
              0,
              null,
              null,
              1,
              "au3-icon",
              [
                ["class", "legend__icon"],
                ["fileName", "E470_privacy_low.webp"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              p.b,
              p.a,
            )),
            a.xb(
              29,
              4243456,
              null,
              0,
              h.b,
              [u.a, a.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (n()(),
            a.yb(
              30,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "legend__explanation"],
                ["developerText", "Teilen der Fahrzeugposition"],
                ["id", "ExplanationIcon4"],
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
            a.xb(
              31,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              32,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            a.yb(
              33,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "paragraph"],
                ["id", "p3"],
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
            a.xb(
              34,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              35,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "title"),
              n(l, 2, 0, "Privatsph\xe4reeinstellungen", "title", 1),
              n(l, 4, 0, "p1"),
              n(l, 5, 0, e.para1, "p1", 99),
              n(l, 7, 0, "p2"),
              n(l, 8, 0, e.para2, "p2", 99),
              n(
                l,
                11,
                0,
                "E473_privacy_very_high.webp",
                e.ICON_CATEGORY_STATUSLINE,
              ),
              n(l, 13, 0, "ExplanationIcon1"),
              n(l, 14, 0, "Maximale Privatsph\xe4re", "ExplanationIcon1", 1),
              n(l, 17, 0, "E472_privacy_high.webp", e.ICON_CATEGORY_STATUSLINE),
              n(l, 19, 0, "ExplanationIcon2"),
              n(
                l,
                20,
                0,
                "Verwendung Personenbezogener Daten",
                "ExplanationIcon2",
                1,
              ),
              n(l, 23, 0, "E471_privacy_med.webp", e.ICON_CATEGORY_STATUSLINE),
              n(l, 25, 0, "ExplanationIcon3"),
              n(
                l,
                26,
                0,
                "Verwendung der Fahrzeugposition",
                "ExplanationIcon3",
                1,
              ),
              n(l, 29, 0, "E470_privacy_low.webp", e.ICON_CATEGORY_STATUSLINE),
              n(l, 31, 0, "ExplanationIcon4"),
              n(l, 32, 0, "Teilen der Fahrzeugposition", "ExplanationIcon4", 1),
              n(l, 34, 0, "p3"),
              n(l, 35, 0, e.para3, "p3", 99));
          },
          function (n, l) {
            (n(
              l,
              0,
              0,
              a.Nb(l, 2).backgroundColor,
              a.Nb(l, 2).fixedNumberOfLines,
              a.Nb(l, 2).mayContainLatinCharsForArabic,
              a.Nb(l, 2).shortenWithEllipsisForArabic,
            ),
              n(
                l,
                3,
                0,
                a.Nb(l, 5).backgroundColor,
                a.Nb(l, 5).fixedNumberOfLines,
                a.Nb(l, 5).mayContainLatinCharsForArabic,
                a.Nb(l, 5).shortenWithEllipsisForArabic,
              ),
              n(
                l,
                6,
                0,
                a.Nb(l, 8).backgroundColor,
                a.Nb(l, 8).fixedNumberOfLines,
                a.Nb(l, 8).mayContainLatinCharsForArabic,
                a.Nb(l, 8).shortenWithEllipsisForArabic,
              ),
              n(l, 10, 0, a.Nb(l, 11).iconComponentHidden),
              n(
                l,
                12,
                0,
                a.Nb(l, 14).backgroundColor,
                a.Nb(l, 14).fixedNumberOfLines,
                a.Nb(l, 14).mayContainLatinCharsForArabic,
                a.Nb(l, 14).shortenWithEllipsisForArabic,
              ),
              n(l, 16, 0, a.Nb(l, 17).iconComponentHidden),
              n(
                l,
                18,
                0,
                a.Nb(l, 20).backgroundColor,
                a.Nb(l, 20).fixedNumberOfLines,
                a.Nb(l, 20).mayContainLatinCharsForArabic,
                a.Nb(l, 20).shortenWithEllipsisForArabic,
              ),
              n(l, 22, 0, a.Nb(l, 23).iconComponentHidden),
              n(
                l,
                24,
                0,
                a.Nb(l, 26).backgroundColor,
                a.Nb(l, 26).fixedNumberOfLines,
                a.Nb(l, 26).mayContainLatinCharsForArabic,
                a.Nb(l, 26).shortenWithEllipsisForArabic,
              ),
              n(l, 28, 0, a.Nb(l, 29).iconComponentHidden),
              n(
                l,
                30,
                0,
                a.Nb(l, 32).backgroundColor,
                a.Nb(l, 32).fixedNumberOfLines,
                a.Nb(l, 32).mayContainLatinCharsForArabic,
                a.Nb(l, 32).shortenWithEllipsisForArabic,
              ),
              n(
                l,
                33,
                0,
                a.Nb(l, 35).backgroundColor,
                a.Nb(l, 35).fixedNumberOfLines,
                a.Nb(l, 35).mayContainLatinCharsForArabic,
                a.Nb(l, 35).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      var N = e("OtM5"),
        y = e("9ZFG"),
        L = e("An66"),
        D = e("0qMr"),
        C = e("H4ln"),
        O = e("YtkY");
      class T {
        constructor(n, l) {
          ((this.privacyService = n),
            (this.i18nService = l),
            (this.para1 =
              "Durch das Verwenden der Fahrzeug-Position stehen Ihnen ortsbezogene\nOnlinedienste zur Verf\xfcgung. Dabei werden Ihre Fahrzeug-Position sowie\npersonenbezogene Daten zur Erbringung der Dienste an Server der Audi AG\n\xfcbertragen und dort elektronisch verarbeitet. Die Fahrzeug-Position wird\njedoch keinen Dritten wie beispielsweise von Ihnen autorisierte myAudi Nutzer\nund Customer Care Center, zug\xe4nglich gemacht. Dadurch stehen Ihnen\nfolgende Onlinedienste zur Verf\xfcgung:"),
            (this.para3 =
              "Ausgegraute Dienste wurden in myAudi durch den Hauptnutzer\ndeaktiviert und k\xf6nnen dort von ihm jederzeit wieder aktiviert werden."));
        }
        ngOnInit() {
          this.gpsServices$ = this.privacyService.gpsServices$.pipe(
            Object(O.a)(Object(C.j)(this.i18nService)),
          );
        }
      }
      var P = a.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;overflow:hidden}.paragraph[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{font-size:40px}.paragraph[_ngcontent-%COMP%]{margin:25px 0}.line[_ngcontent-%COMP%], .paragraph[_ngcontent-%COMP%]{display:block}",
          ],
        ],
        data: {},
      });
      function A(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "line"],
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
              i.b,
              i.a,
            )),
            a.xb(1, 16384, null, 0, c.a, [], null, null),
            a.xb(
              2,
              245760,
              null,
              0,
              o.a,
              [[8, null], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                fixedNumberOfLines: [0, "fixedNumberOfLines"],
                nonI18nValue: [1, "nonI18nValue"],
              },
              null,
            ),
            a.xb(
              3,
              147456,
              null,
              0,
              N.a,
              [y.a, a.h, u.a, [3, N.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
          ],
          function (n, l) {
            (n(l, 2, 0, 1, l.context.$implicit.translation),
              n(l, 3, 0, l.context.$implicit.disabled));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              a.Nb(l, 2).backgroundColor,
              a.Nb(l, 2).fixedNumberOfLines,
              a.Nb(l, 2).mayContainLatinCharsForArabic,
              a.Nb(l, 2).shortenWithEllipsisForArabic,
              a.Nb(l, 3).combinedDisabled,
              a.Nb(l, 3).useBrighterIcon,
            );
          },
        );
      }
      function _(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
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
            (n()(),
            a.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "paragraph"],
                ["id", "p1"],
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
            a.xb(
              2,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              3,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(), a.hb(16777216, null, null, 1, null, A)),
            a.xb(
              5,
              278528,
              null,
              0,
              L.j,
              [a.P, a.L, a.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
            (n()(),
            a.yb(
              6,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "paragraph"],
                ["id", "p3"],
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
            a.xb(
              7,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              8,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 2, 0, "p1"),
              n(l, 3, 0, e.para1, "p1", 99),
              n(l, 5, 0, l.parent.context.mib3Let),
              n(l, 7, 0, "p3"),
              n(l, 8, 0, e.para3, "p3", 99));
          },
          function (n, l) {
            (n(
              l,
              1,
              0,
              a.Nb(l, 3).backgroundColor,
              a.Nb(l, 3).fixedNumberOfLines,
              a.Nb(l, 3).mayContainLatinCharsForArabic,
              a.Nb(l, 3).shortenWithEllipsisForArabic,
            ),
              n(
                l,
                6,
                0,
                a.Nb(l, 8).backgroundColor,
                a.Nb(l, 8).fixedNumberOfLines,
                a.Nb(l, 8).mayContainLatinCharsForArabic,
                a.Nb(l, 8).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function E(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
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
            (n()(), a.hb(16777216, null, null, 1, null, _)),
            a.xb(
              2,
              16384,
              null,
              0,
              L.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), a.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(l, 2, 0, l.context.mib3Let.length > 0, a.Nb(l.parent, 6));
          },
          null,
        );
      }
      function I(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "paragraph"],
                ["id", "p1NoServices"],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            a.yb(
              3,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "line"]],
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
            a.xb(
              4,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              5,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, l) {
            (n(l, 1, 0, "p1NoServices"),
              n(
                l,
                2,
                0,
                "Durch das Verwenden der Fahrzeug-Position stehen Ihnen ortsbezogene Onlinedienste zur Verf\xfcgung. Dabei werden Ihre Fahrzeug-Position sowie personenbezogene Daten zur Erbringung der Dienste an Server der Audi AG \xfcbertragen und dort elektronisch verarbeitet. Die Fahrzeug-Position wird jedoch keinen Dritten wie beispielsweise von Ihnen autorisierte myAudi Nutzer und Customer Care Center, zug\xe4nglich gemacht.",
                "p1NoServices",
                99,
              ),
              n(l, 4, 0, "NoServices"),
              n(
                l,
                5,
                0,
                "Aktuell sind keine Dienste in ihrem Fahrzeug aktiv, die die Fahrzeug-Position verwenden.",
                "NoServices",
                3,
              ));
          },
          function (n, l) {
            (n(
              l,
              0,
              0,
              a.Nb(l, 2).backgroundColor,
              a.Nb(l, 2).fixedNumberOfLines,
              a.Nb(l, 2).mayContainLatinCharsForArabic,
              a.Nb(l, 2).shortenWithEllipsisForArabic,
            ),
              n(
                l,
                3,
                0,
                a.Nb(l, 5).backgroundColor,
                a.Nb(l, 5).fixedNumberOfLines,
                a.Nb(l, 5).mayContainLatinCharsForArabic,
                a.Nb(l, 5).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function k(n) {
        return a.ac(
          2,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "title paragraph"],
                ["developerText", "Verwendung der Fahrzeug-Position"],
                ["id", "title"],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(), a.hb(16777216, null, null, 2, null, E)),
            a.xb(
              4,
              16384,
              null,
              0,
              D.a,
              [a.L, a.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            a.Pb(131072, L.b, [a.h]),
            (n()(), a.hb(0, [["noServices", 2]], null, 0, null, I)),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "title"),
              n(l, 2, 0, "Verwendung der Fahrzeug-Position", "title", 1),
              n(
                l,
                4,
                0,
                a.Yb(l, 4, 0, a.Nb(l, 5).transform(e.gpsServices$)) || a.Z,
              ));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              a.Nb(l, 2).backgroundColor,
              a.Nb(l, 2).fixedNumberOfLines,
              a.Nb(l, 2).mayContainLatinCharsForArabic,
              a.Nb(l, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      class w {
        constructor(n, l) {
          ((this.privacyService = n),
            (this.i18nService = l),
            (this.para1 =
              "Durch das Teilen der Fahrzeug-Position wird ihr Standort sowie weitere\npersonenbezogene Daten im Rahmen der Erbringung der Onlinedienste\n\xfcbertragen und ausgew\xe4hlten Personen, wie beispielsweise von Ihnen\nautorisierten myAudi Nutzern und Customer Care Centern, sichtbar gemacht.\n\nDadurch stehen Ihnen folgende Onlinedienste zur Verf\xfcgung:"),
            (this.para1NoServices =
              "Durch das Teilen der Fahrzeug-Position wird ihr Standort sowie weitere\npersonenbezogene Daten im Rahmen der Erbringung der Onlinedienste\n\xfcbertragen und ausgew\xe4hlten Personen, wie beispielsweise von Ihnen\nautorisierten myAudi Nutzern und Customer Care Centern, sichtbar gemacht."),
            (this.para3 =
              "Ausgegraute Dienste wurden \xfcber das Webportal deaktiviert und k\xf6nnen nur dort reaktiviert\nwerden. Sicherheitsrelevante Dienste, die im Privatsph\xe4remodus weiterhin Daten\naustauschen, sind gekennzeichnet."));
        }
        ngOnInit() {
          this.trackingServices$ = this.privacyService.trackingServices$.pipe(
            Object(O.a)(Object(C.j)(this.i18nService)),
          );
        }
      }
      var S = a.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;overflow:hidden}.paragraph[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{font-size:40px}.paragraph[_ngcontent-%COMP%]{margin:25px 0}.line[_ngcontent-%COMP%], .paragraph[_ngcontent-%COMP%]{display:block}",
          ],
        ],
        data: {},
      });
      function z(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "line"],
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
              i.b,
              i.a,
            )),
            a.xb(1, 16384, null, 0, c.a, [], null, null),
            a.xb(
              2,
              245760,
              null,
              0,
              o.a,
              [[8, null], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                fixedNumberOfLines: [0, "fixedNumberOfLines"],
                nonI18nValue: [1, "nonI18nValue"],
              },
              null,
            ),
            a.xb(
              3,
              147456,
              null,
              0,
              N.a,
              [y.a, a.h, u.a, [3, N.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
          ],
          function (n, l) {
            (n(l, 2, 0, 1, l.context.$implicit.translation),
              n(l, 3, 0, l.context.$implicit.disabled));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              a.Nb(l, 2).backgroundColor,
              a.Nb(l, 2).fixedNumberOfLines,
              a.Nb(l, 2).mayContainLatinCharsForArabic,
              a.Nb(l, 2).shortenWithEllipsisForArabic,
              a.Nb(l, 3).combinedDisabled,
              a.Nb(l, 3).useBrighterIcon,
            );
          },
        );
      }
      function F(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
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
            (n()(),
            a.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "paragraph"],
                ["id", "p1"],
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
            a.xb(
              2,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              3,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(), a.hb(16777216, null, null, 1, null, z)),
            a.xb(
              5,
              278528,
              null,
              0,
              L.j,
              [a.P, a.L, a.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
            (n()(),
            a.yb(
              6,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "paragraph"],
                ["id", "p3"],
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
            a.xb(
              7,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              8,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 2, 0, "p1"),
              n(l, 3, 0, e.para1, "p1", 99),
              n(l, 5, 0, l.parent.context.mib3Let),
              n(l, 7, 0, "p3"),
              n(l, 8, 0, e.para3, "p3", 99));
          },
          function (n, l) {
            (n(
              l,
              1,
              0,
              a.Nb(l, 3).backgroundColor,
              a.Nb(l, 3).fixedNumberOfLines,
              a.Nb(l, 3).mayContainLatinCharsForArabic,
              a.Nb(l, 3).shortenWithEllipsisForArabic,
            ),
              n(
                l,
                6,
                0,
                a.Nb(l, 8).backgroundColor,
                a.Nb(l, 8).fixedNumberOfLines,
                a.Nb(l, 8).mayContainLatinCharsForArabic,
                a.Nb(l, 8).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function M(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
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
            (n()(), a.hb(16777216, null, null, 1, null, F)),
            a.xb(
              2,
              16384,
              null,
              0,
              L.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), a.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(l, 2, 0, l.context.mib3Let.length > 0, a.Nb(l.parent, 6));
          },
          null,
        );
      }
      function R(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "paragraph"],
                ["id", "p1NoServices"],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            a.yb(
              3,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "line"]],
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
            a.xb(
              4,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              5,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "p1NoServices"),
              n(l, 2, 0, e.para1NoServices, "p1NoServices", 99),
              n(l, 4, 0, "NoServices"),
              n(
                l,
                5,
                0,
                "Aktuell sind keine Dienste in ihrem Fahrzeug aktiv, die die Fahrzeug-Position verwenden.",
                "NoServices",
                3,
              ));
          },
          function (n, l) {
            (n(
              l,
              0,
              0,
              a.Nb(l, 2).backgroundColor,
              a.Nb(l, 2).fixedNumberOfLines,
              a.Nb(l, 2).mayContainLatinCharsForArabic,
              a.Nb(l, 2).shortenWithEllipsisForArabic,
            ),
              n(
                l,
                3,
                0,
                a.Nb(l, 5).backgroundColor,
                a.Nb(l, 5).fixedNumberOfLines,
                a.Nb(l, 5).mayContainLatinCharsForArabic,
                a.Nb(l, 5).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function G(n) {
        return a.ac(
          2,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "title paragraph"],
                ["developerText", "Teilen der Fahrzeug-Position"],
                ["id", "title"],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(), a.hb(16777216, null, null, 2, null, M)),
            a.xb(
              4,
              16384,
              null,
              0,
              D.a,
              [a.L, a.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            a.Pb(131072, L.b, [a.h]),
            (n()(), a.hb(0, [["noServices", 2]], null, 0, null, R)),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "title"),
              n(l, 2, 0, "Teilen der Fahrzeug-Position", "title", 1),
              n(
                l,
                4,
                0,
                a.Yb(l, 4, 0, a.Nb(l, 5).transform(e.trackingServices$)) || a.Z,
              ));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              a.Nb(l, 2).backgroundColor,
              a.Nb(l, 2).fixedNumberOfLines,
              a.Nb(l, 2).mayContainLatinCharsForArabic,
              a.Nb(l, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      class B {
        constructor(n, l) {
          ((this.privacyService = n),
            (this.i18nService = l),
            (this.para1 =
              "Durch das Verwenden von personenbezogenen Daten tauscht Ihr Fahrzeug\ndiese mit Servern der Audi AG aus. Dabei k\xf6nnen personenbezogene Daten\nDritten, wie beispielsweise von Ihnen autorisierten myAudi Nutzer und\nCustomer Care Center, zug\xe4nglich gemacht werden. Es werden keine\nortsbezogenen Daten \xfcbertragen. Dadurch stehen Ihnen folgende\nOnlinedienste zur Verf\xfcgung:"),
            (this.para3 =
              "Ausgegraute Onlinedienste wurden in myAudi durch den Hauptnutzer\ndeaktiviertun und k\xf6nnen dort von ihm jederzeit wieder aktiviert werden."));
        }
        ngOnInit() {
          this.personalServices$ = this.privacyService.personalServices$.pipe(
            Object(O.a)(Object(C.j)(this.i18nService)),
          );
        }
      }
      var W = a.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;overflow:hidden}.paragraph[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{font-size:40px}.paragraph[_ngcontent-%COMP%]{margin:25px 0}.line[_ngcontent-%COMP%], .paragraph[_ngcontent-%COMP%]{display:block}",
          ],
        ],
        data: {},
      });
      function V(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "line"],
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
              i.b,
              i.a,
            )),
            a.xb(1, 16384, null, 0, c.a, [], null, null),
            a.xb(
              2,
              245760,
              null,
              0,
              o.a,
              [[8, null], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                fixedNumberOfLines: [0, "fixedNumberOfLines"],
                nonI18nValue: [1, "nonI18nValue"],
              },
              null,
            ),
            a.xb(
              3,
              147456,
              null,
              0,
              N.a,
              [y.a, a.h, u.a, [3, N.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
          ],
          function (n, l) {
            (n(l, 2, 0, 1, l.context.$implicit.translation),
              n(l, 3, 0, l.context.$implicit.disabled));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              a.Nb(l, 2).backgroundColor,
              a.Nb(l, 2).fixedNumberOfLines,
              a.Nb(l, 2).mayContainLatinCharsForArabic,
              a.Nb(l, 2).shortenWithEllipsisForArabic,
              a.Nb(l, 3).combinedDisabled,
              a.Nb(l, 3).useBrighterIcon,
            );
          },
        );
      }
      function Y(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
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
            (n()(),
            a.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "paragraph"],
                ["id", "p1"],
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
            a.xb(
              2,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              3,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(), a.hb(16777216, null, null, 1, null, V)),
            a.xb(
              5,
              278528,
              null,
              0,
              L.j,
              [a.P, a.L, a.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
            (n()(),
            a.yb(
              6,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "paragraph"],
                ["id", "p3"],
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
            a.xb(
              7,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              8,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 2, 0, "p1"),
              n(l, 3, 0, e.para1, "p1", 99),
              n(l, 5, 0, l.parent.context.mib3Let),
              n(l, 7, 0, "p3"),
              n(l, 8, 0, e.para3, "p3", 99));
          },
          function (n, l) {
            (n(
              l,
              1,
              0,
              a.Nb(l, 3).backgroundColor,
              a.Nb(l, 3).fixedNumberOfLines,
              a.Nb(l, 3).mayContainLatinCharsForArabic,
              a.Nb(l, 3).shortenWithEllipsisForArabic,
            ),
              n(
                l,
                6,
                0,
                a.Nb(l, 8).backgroundColor,
                a.Nb(l, 8).fixedNumberOfLines,
                a.Nb(l, 8).mayContainLatinCharsForArabic,
                a.Nb(l, 8).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function H(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
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
            (n()(), a.hb(16777216, null, null, 1, null, Y)),
            a.xb(
              2,
              16384,
              null,
              0,
              L.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), a.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(l, 2, 0, l.context.mib3Let.length > 0, a.Nb(l.parent, 6));
          },
          null,
        );
      }
      function $(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "paragraph"],
                ["id", "p1NoServices"],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            a.yb(
              3,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "line"]],
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
            a.xb(
              4,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              5,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, l) {
            (n(l, 1, 0, "p1NoServices"),
              n(
                l,
                2,
                0,
                "Durch das Verwenden von personenbezogenen Daten tauscht Ihr Fahrzeug diese mit Servern der Audi AG aus. Dabei k\xf6nnen personenbezogene Daten Dritten, wie beispielsweise von Ihnen autorisierte myAudi Nutzer und Customer Care Center, zug\xe4nglich gemacht werden. Es werden keine ortsbezogenen Daten \xfcbertragen.",
                "p1NoServices",
                99,
              ),
              n(l, 4, 0, "NoServices"),
              n(
                l,
                5,
                0,
                "Aktuell sind keine Dienste in ihrem Fahrzeug aktiv, die die personenbezogenen Daten verwenden.",
                "NoServices",
                3,
              ));
          },
          function (n, l) {
            (n(
              l,
              0,
              0,
              a.Nb(l, 2).backgroundColor,
              a.Nb(l, 2).fixedNumberOfLines,
              a.Nb(l, 2).mayContainLatinCharsForArabic,
              a.Nb(l, 2).shortenWithEllipsisForArabic,
            ),
              n(
                l,
                3,
                0,
                a.Nb(l, 5).backgroundColor,
                a.Nb(l, 5).fixedNumberOfLines,
                a.Nb(l, 5).mayContainLatinCharsForArabic,
                a.Nb(l, 5).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function U(n) {
        return a.ac(
          2,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "title paragraph"],
                ["developerText", "Verwendung personenbezogener Daten"],
                ["id", "title"],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(), a.hb(16777216, null, null, 2, null, H)),
            a.xb(
              4,
              16384,
              null,
              0,
              D.a,
              [a.L, a.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            a.Pb(131072, L.b, [a.h]),
            (n()(), a.hb(0, [["noServices", 2]], null, 0, null, $)),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "title"),
              n(l, 2, 0, "Verwendung personenbezogener Daten", "title", 1),
              n(
                l,
                4,
                0,
                a.Yb(l, 4, 0, a.Nb(l, 5).transform(e.personalServices$)) || a.Z,
              ));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              a.Nb(l, 2).backgroundColor,
              a.Nb(l, 2).fixedNumberOfLines,
              a.Nb(l, 2).mayContainLatinCharsForArabic,
              a.Nb(l, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      class j {
        constructor() {
          this.para1 =
            "Durch die \xdcbernahme der Einstellungen zur Datenerhebung aus myAudi\nsendet Ihr Fahrzeug Daten aus den Steuerger\xe4ten an die Audi AG\nentsprechend den Datenerhebungsauftr\xe4gen, denen Sie in myAudi zuvor\nzugestimmt haben. Ihre Datenerhebungsauftr\xe4ge werden nur dann aktiv,\nwenn Sie im Fahrzeug mit ihrem myAudi-Profil angemeldet sind. Weitere\nInformationen zu den Datenerhebungsauftr\xe4gen finden Sie in myAudi.";
        }
      }
      var Z = a.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;overflow:hidden}.paragraph[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{font-size:40px}.paragraph[_ngcontent-%COMP%]{display:block;margin:25px 0}",
          ],
        ],
        data: {},
      });
      function q(n) {
        return a.ac(
          2,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "title paragraph"],
                ["developerText", "Datenerhebungsauftr\xe4ge aus myAudi"],
                ["id", "title"],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            a.yb(
              3,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "paragraph"],
                ["id", "p1"],
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
            a.xb(
              4,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              5,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "title"),
              n(l, 2, 0, "Datenerhebungsauftr\xe4ge aus myAudi", "title", 1),
              n(l, 4, 0, "p1"),
              n(l, 5, 0, e.para1, "p1", 99));
          },
          function (n, l) {
            (n(
              l,
              0,
              0,
              a.Nb(l, 2).backgroundColor,
              a.Nb(l, 2).fixedNumberOfLines,
              a.Nb(l, 2).mayContainLatinCharsForArabic,
              a.Nb(l, 2).shortenWithEllipsisForArabic,
            ),
              n(
                l,
                3,
                0,
                a.Nb(l, 5).backgroundColor,
                a.Nb(l, 5).fixedNumberOfLines,
                a.Nb(l, 5).mayContainLatinCharsForArabic,
                a.Nb(l, 5).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      class K {
        constructor() {
          this.para1 =
            "Ihr Fahrzeug sendet pseudonyme Daten aus den Steuerger\xe4ten an die Audi\nAG. Ihre Daten werden dabei f\xfcr die Neuentwicklung, Weiterentwicklung oder\nOptimierung innovativer Angebote und Produkte verwendet. Zus\xe4tzlich wird\ndie Audi AG weitestgehend darauf verzichten, Ihre Daten so zu verarbeiten,\ndass ein R\xfcckschluss auf Ihre Person oder Ihr Fahrzeug getroffen werden\nkann. Hierzu werden Ihre Daten mit einem Pseudonym versehen, sodass diese\nDaten ohne Hinzuziehung zus\xe4tzlicher Informationen Ihnen nicht mehr\nzugeordnet werden k\xf6nnen. Die Audi AG hat Ma\xdfnahmen etabliert, die\nsicherstellen, dass ein Personenbezug nur in begr\xfcndeten Ausnahmef\xe4llen\nhergestellt werden kann, z.B. um R\xfcckrufaktionen durchf\xfchren zu k\xf6nnen\noder falls sicherheits- oder produkthaftungsrelevante Fehler festgestell\nwerden.\n\nHierbei k\xf6nnen auch Positions-Daten erhoben werden. Dies geschieht nur\ndann, wenn Sie zus\xe4tzlich das Teilen der Fahrzeug-Position in den\nPrivatsph\xe4reeinstellungen aktivieren.\n\nEs werden keine Daten verwendet, welche eine Profilbildung oder einen\nR\xfcckschluss auf ein Verhalten oder Verhaltensmuster von Ihnen erlauben.";
        }
      }
      var Q = a.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;overflow:hidden}.paragraph[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{font-size:40px}.paragraph[_ngcontent-%COMP%]{display:block;margin:25px 0}",
          ],
        ],
        data: {},
      });
      function X(n) {
        return a.ac(
          2,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "title paragraph"],
                ["developerText", "Pseudonyme Daten"],
                ["id", "title"],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            a.yb(
              3,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "paragraph"],
                ["id", "p1"],
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
            a.xb(
              4,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              5,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "title"),
              n(l, 2, 0, "Pseudonyme Daten", "title", 1),
              n(l, 4, 0, "p1"),
              n(l, 5, 0, e.para1, "p1", 99));
          },
          function (n, l) {
            (n(
              l,
              0,
              0,
              a.Nb(l, 2).backgroundColor,
              a.Nb(l, 2).fixedNumberOfLines,
              a.Nb(l, 2).mayContainLatinCharsForArabic,
              a.Nb(l, 2).shortenWithEllipsisForArabic,
            ),
              n(
                l,
                3,
                0,
                a.Nb(l, 5).backgroundColor,
                a.Nb(l, 5).fixedNumberOfLines,
                a.Nb(l, 5).mayContainLatinCharsForArabic,
                a.Nb(l, 5).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      class J {
        constructor() {
          this.para1 =
            "Ihr Fahrzeug sendet anonyme Daten aus den Steuerger\xe4ten an die Audi AG.\nIhre Daten werden dabei f\xfcr die Neuentwicklung, Weiterentwicklung oder\nOptimierung innovativer Angebote und Produkte verwendet. Die Audi AG hat\nMa\xdfnahmen etabliert, welche sicherstellen, dass kein Personenbezug\nhergestellt werden kann. Hierzu werden Ihre Daten anonymisiert, sodass\ndiese Daten Ihnen auch nachtr\xe4glich nicht zugeordnet werden k\xf6nnen.\n\nHierbei k\xf6nnen auch anonymisierte Positions-Daten erhoben werden. Dies\ngeschieht nur dann, wenn Sie zus\xe4tzlich das Teilen der Fahrzeug-Position in\nden Privatsph\xe4reeinstellungen aktivieren.\n\nEs werden keine Daten verwendet, welche eine Profilbildung oder einen\nR\xfcckschluss auf ein Verhalten oder Verhaltensmuster von Ihnen erlauben.";
        }
      }
      var nn = a.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;overflow:hidden}.paragraph[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{font-size:40px}.paragraph[_ngcontent-%COMP%]{display:block;margin:25px 0}",
          ],
        ],
        data: {},
      });
      function ln(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "title paragraph"],
                ["developerText", "Anonyme Daten"],
                ["id", "title"],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            a.yb(
              3,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "paragraph"],
                ["id", "AnonymData"],
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
            a.xb(
              4,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              5,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "title"),
              n(l, 2, 0, "Anonyme Daten", "title", 1),
              n(l, 4, 0, "AnonymData"),
              n(l, 5, 0, e.para1, "AnonymData", 99));
          },
          function (n, l) {
            (n(
              l,
              0,
              0,
              a.Nb(l, 2).backgroundColor,
              a.Nb(l, 2).fixedNumberOfLines,
              a.Nb(l, 2).mayContainLatinCharsForArabic,
              a.Nb(l, 2).shortenWithEllipsisForArabic,
            ),
              n(
                l,
                3,
                0,
                a.Nb(l, 5).backgroundColor,
                a.Nb(l, 5).fixedNumberOfLines,
                a.Nb(l, 5).mayContainLatinCharsForArabic,
                a.Nb(l, 5).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      var en = (function (n) {
        return (
          (n.Ecall =
            "Durch die Aktivierung der Privatsph\xe4re wird\ndie Datenverbindung abgetrennt.\nIhre Onlinedienste stehen Ihnen nicht mehr zur Verf\xfcgung.\nBei einem Unfall wird die Verbindung zur\nDurchf\xfchrung des Notrufs hergestellt."),
          (n.EuEcall =
            "Durch die Aktivierung der Privatsph\xe4re wird\ndie Datenverbindung abgetrennt.\nIhre Onlinedienste stehen Ihnen nicht mehr zur Verf\xfcgung.\nBei einem Unfall wird die Verbindung zur\nDurchf\xfchrung des EU Notrufs hergestellt."),
          n
        );
      })({});
      class an {
        constructor(n, l) {
          ((this.privacyService = n),
            (this.i18nService = l),
            (this.ecallEnum = en),
            (this.para1 =
              "Durch die Aktivierung der Privatsoh\xe4re wird die Datenverbindung abgetrennt bzw.\neingeschr\xe4nkt. Aus Sicherheits-, gesetzlichen oder vertraglichen Gr\xfcnden k\xf6nnen folgende\nDienste in Ihrem Fahrzeug nicht deaktiviert werden:"));
        }
        ngOnInit() {
          this.nonDeactivatableServices$ =
            this.privacyService.nonDeactivatableServices$.pipe(
              Object(O.a)(Object(C.j)(this.i18nService)),
            );
        }
        ecallService(n) {
          const l = [
            "ecall_v1",
            "euecall_v1",
            "ecall_v1_RESTRICTED",
            "euecall_v1_RESTRICTED",
          ];
          if (!n.every((n) => !!n && void 0 !== n.name && l.includes(n.name)))
            return;
          const e = n.find(
            (n) => !!n && void 0 !== n.name && l.includes(n.name),
          );
          if (e)
            switch (e.name) {
              case "euecall_v1":
              case "euecall_v1_RESTRICTED":
                return en.EuEcall;
              default:
                return en.Ecall;
            }
        }
      }
      var tn = a.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;overflow:hidden}.paragraph[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{font-size:40px}.paragraph[_ngcontent-%COMP%]{margin:25px 0}.line[_ngcontent-%COMP%], .paragraph[_ngcontent-%COMP%]{display:block}",
          ],
        ],
        data: {},
      });
      function rn(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
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
            (n()(),
            a.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["id", "NoProtectedServices"]],
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
            a.xb(
              2,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              3,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, l) {
            (n(l, 2, 0, "NoProtectedServices"),
              n(
                l,
                3,
                0,
                "Durch die Aktivierung der Privatsph\xe4re\nwird die Datenverbindung abgetrennt.\nIhre Onlinedienste stehen Ihnen nicht mehr zur Verf\xfcgung.",
                "NoProtectedServices",
                99,
              ));
          },
          function (n, l) {
            n(
              l,
              1,
              0,
              a.Nb(l, 3).backgroundColor,
              a.Nb(l, 3).fixedNumberOfLines,
              a.Nb(l, 3).mayContainLatinCharsForArabic,
              a.Nb(l, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function un(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "paragraph"]],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, l) {
            (n(l, 1, 0, l.context.ngIf, l.component.ecallEnum),
              n(l, 2, 0, l.context.ngIf, l.context.ngIf, 99));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              a.Nb(l, 2).backgroundColor,
              a.Nb(l, 2).fixedNumberOfLines,
              a.Nb(l, 2).mayContainLatinCharsForArabic,
              a.Nb(l, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function on(n) {
        return a.ac(
          0,
          [
            (n()(), a.hb(16777216, null, null, 1, null, un)),
            a.xb(
              1,
              16384,
              null,
              0,
              L.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), a.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(
              l,
              1,
              0,
              l.component.ecallService(l.parent.context.mib3Let),
              a.Nb(l.parent, 4),
            );
          },
          null,
        );
      }
      function sn(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "line"],
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
              i.b,
              i.a,
            )),
            a.xb(1, 16384, null, 0, c.a, [], null, null),
            a.xb(
              2,
              245760,
              null,
              0,
              o.a,
              [[8, null], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                fixedNumberOfLines: [0, "fixedNumberOfLines"],
                nonI18nValue: [1, "nonI18nValue"],
              },
              null,
            ),
            a.xb(
              3,
              147456,
              null,
              0,
              N.a,
              [y.a, a.h, u.a, [3, N.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
          ],
          function (n, l) {
            (n(l, 2, 0, 1, l.context.$implicit.translation),
              n(l, 3, 0, l.context.$implicit.disabled));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              a.Nb(l, 2).backgroundColor,
              a.Nb(l, 2).fixedNumberOfLines,
              a.Nb(l, 2).mayContainLatinCharsForArabic,
              a.Nb(l, 2).shortenWithEllipsisForArabic,
              a.Nb(l, 3).combinedDisabled,
              a.Nb(l, 3).useBrighterIcon,
            );
          },
        );
      }
      function bn(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "paragraph"],
                ["id", "p1"],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(), a.hb(16777216, null, null, 1, null, sn)),
            a.xb(
              4,
              278528,
              null,
              0,
              L.j,
              [a.P, a.L, a.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
            (n()(), a.hb(0, null, null, 0)),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "p1"),
              n(l, 2, 0, e.para1, "p1", 99),
              n(l, 4, 0, l.parent.context.mib3Let || a.Z));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              a.Nb(l, 2).backgroundColor,
              a.Nb(l, 2).fixedNumberOfLines,
              a.Nb(l, 2).mayContainLatinCharsForArabic,
              a.Nb(l, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function cn(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
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
            (n()(), a.hb(16777216, null, null, 1, null, rn)),
            a.xb(
              2,
              16384,
              null,
              0,
              L.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(),
            a.hb(0, [["protectedServicesAvailable", 2]], null, 0, null, on)),
            (n()(), a.hb(0, [["protectedServiceList", 2]], null, 0, null, bn)),
          ],
          function (n, l) {
            n(
              l,
              2,
              0,
              !l.context.mib3Let || l.context.mib3Let.length < 1,
              a.Nb(l, 3),
            );
          },
          null,
        );
      }
      function dn(n) {
        return a.ac(
          2,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "title paragraph"],
                ["developerText", "Privatsph\xe4re aktivieren"],
                ["id", "title"],
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
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              245760,
              null,
              0,
              o.a,
              [[6, t.a], s.a, a.h, a.l, a.D, [2, b.a], [2, c.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(), a.hb(16777216, null, null, 2, null, cn)),
            a.xb(
              4,
              16384,
              null,
              0,
              D.a,
              [a.L, a.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            a.Pb(131072, L.b, [a.h]),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "title"),
              n(l, 2, 0, "Privatsph\xe4re aktivieren", "title", 1),
              n(
                l,
                4,
                0,
                a.Yb(
                  l,
                  4,
                  0,
                  a.Nb(l, 5).transform(e.nonDeactivatableServices$),
                ) || a.Z,
              ));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              a.Nb(l, 2).backgroundColor,
              a.Nb(l, 2).fixedNumberOfLines,
              a.Nb(l, 2).mayContainLatinCharsForArabic,
              a.Nb(l, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      var pn = e("Z2XD"),
        hn = e("y9xZ"),
        gn = e("VUTu"),
        fn = e("nK9R"),
        xn = e("qzuC"),
        mn = e("8yWk"),
        vn = e("8WOv"),
        Nn = e("bMuc"),
        yn = e("ZIdM"),
        Ln = e("3bpu"),
        Dn = e("6zvu"),
        Cn = e("VcEz"),
        On = e("+sw+"),
        Tn = e("BMrr"),
        Pn = e("IEns"),
        An = e("1pak"),
        _n = e("P+G5"),
        En = e("z6QT"),
        In = e("flsk"),
        kn = e("FQEI"),
        wn = e("O82V"),
        Sn = e("Eln4"),
        zn = e("evAh"),
        Fn = e("zPMi"),
        Mn = e("CpzC"),
        Rn = e("0Bsn"),
        Gn = e("5GjX"),
        Bn = e("mYyF"),
        Wn = e("v98a"),
        Vn = e("aOG8"),
        Yn = e("Krzs"),
        Hn = e("ihOk"),
        $n = e("ZMtB"),
        Un = e("fzcM"),
        jn = e("N2Hj"),
        Zn = e("UbWD"),
        qn = e("2rvh"),
        Kn = e("odRV"),
        Qn = e("Udyh"),
        Xn = e("I3ve"),
        Jn = e("qiAR"),
        nl = e("007S"),
        ll = e("oeT7"),
        el = e("oxWk"),
        al = e("Tr//"),
        il = e("nybo"),
        tl = e("FfND"),
        rl = e("1VvW"),
        ul = a.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%}.list[_ngcontent-%COMP%]{flex:1 1 0}.list__item[_ngcontent-%COMP%]{font-size:40px}.component-layout-arabic[_nghost-%COMP%]   .list__item[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list__item[_ngcontent-%COMP%]{direction:rtl}.component-layout-latin[_nghost-%COMP%]   .list__item[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list__item[_ngcontent-%COMP%]{direction:ltr}",
            ],
          ],
          data: {},
        });
      function ol(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-privacy-info-general",
              [["id", "general"]],
              null,
              null,
              null,
              v,
              m,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 49152, null, 0, x, [g.a], null, null),
          ],
          function (n, l) {
            n(l, 1, 0, "general");
          },
          null,
        );
      }
      function sl(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-privacy-info-gps",
              [["id", "gps"]],
              null,
              null,
              null,
              k,
              P,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 114688, null, 0, T, [g.a, s.a], null, null),
          ],
          function (n, l) {
            (n(l, 1, 0, "gps"), n(l, 2, 0));
          },
          null,
        );
      }
      function bl(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-privacy-info-tracking",
              [["id", "tracking"]],
              null,
              null,
              null,
              G,
              S,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 114688, null, 0, w, [g.a, s.a], null, null),
          ],
          function (n, l) {
            (n(l, 1, 0, "tracking"), n(l, 2, 0));
          },
          null,
        );
      }
      function cl(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-privacy-info-personal",
              [["id", "personal"]],
              null,
              null,
              null,
              U,
              W,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 114688, null, 0, B, [g.a, s.a], null, null),
          ],
          function (n, l) {
            (n(l, 1, 0, "personal"), n(l, 2, 0));
          },
          null,
        );
      }
      function dl(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-privacy-info-data-collection-personal",
              [["id", "collection-personal"]],
              null,
              null,
              null,
              q,
              Z,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 49152, null, 0, j, [], null, null),
          ],
          function (n, l) {
            n(l, 1, 0, "collection-personal");
          },
          null,
        );
      }
      function pl(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-privacy-info-data-collection-statistical",
              [["id", "collection-statistical"]],
              null,
              null,
              null,
              X,
              Q,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 49152, null, 0, K, [], null, null),
          ],
          function (n, l) {
            n(l, 1, 0, "collection-statistical");
          },
          null,
        );
      }
      function hl(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-privacy-info-data-collection-anonym",
              [["id", "collection-anonymous"]],
              null,
              null,
              null,
              ln,
              nn,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 49152, null, 0, J, [], null, null),
          ],
          function (n, l) {
            n(l, 1, 0, "collection-anonymous");
          },
          null,
        );
      }
      function gl(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-privacy-info-default",
              [["id", "default"]],
              null,
              null,
              null,
              dn,
              tn,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 114688, null, 0, an, [g.a, s.a], null, null),
          ],
          function (n, l) {
            (n(l, 1, 0, "default"), n(l, 2, 0));
          },
          null,
        );
      }
      function fl(n) {
        return a.ac(
          2,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              44,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:SETUP_DATA_MGT_PRIVACY_STAGED_INFO"],
              ],
              null,
              null,
              null,
              pn.b,
              pn.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 4440064, null, 0, hn.a, [u.a], { id: [0, "id"] }, null),
            (n()(),
            a.yb(
              3,
              0,
              null,
              0,
              14,
              "au3-title-line",
              [
                ["class", "title"],
                ["id", ""],
              ],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              gn.b,
              gn.a,
            )),
            a.xb(
              4,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              5,
              49152,
              null,
              0,
              fn.a,
              [xn.a, mn.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (n()(),
            a.yb(
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
              function (n, l, e) {
                var a = !0,
                  i = n.component;
                return (
                  "mib3Tap" === l &&
                    (a =
                      !1 !==
                        i.routingService.goUp(
                          void 0,
                          void 0,
                          i.routingExtras,
                        ) && a),
                  a
                );
              },
              vn.b,
              vn.a,
            )),
            a.xb(7, 147456, null, 0, Nn.a, [a.l, a.z], null, null),
            a.xb(
              8,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              9,
              147456,
              null,
              0,
              yn.a,
              [Nn.a, [2, Ln.a], [2, t.a], u.a],
              null,
              null,
            ),
            a.xb(
              10,
              212992,
              null,
              0,
              Dn.a,
              [
                u.a,
                Cn.b,
                yn.a,
                [2, Ln.a],
                [2, t.a],
                [2, N.a],
                [2, hn.a],
                [2, On.a],
                a.z,
                Tn.a,
                a.l,
                [2, Pn.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.xb(
              11,
              147456,
              null,
              0,
              An.a,
              [u.a, _n.a, a.l, [2, Dn.a], [2, N.a]],
              null,
              null,
            ),
            a.xb(12, 16384, null, 0, c.a, [], null, null),
            a.Sb(131584, null, En.a, En.a, [[3, En.a]]),
            a.xb(
              14,
              4407296,
              null,
              0,
              In.a,
              [
                a.l,
                kn.a,
                a.h,
                En.a,
                [2, wn.a],
                [2, Ln.b],
                [2, Ln.a],
                [2, Sn.a],
                [2, zn.a],
              ],
              null,
              null,
            ),
            a.xb(
              15,
              49152,
              null,
              0,
              Fn.a,
              [[2, N.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            a.xb(
              16,
              147456,
              null,
              0,
              Mn.a,
              [
                [2, Dn.a],
                [2, N.a],
                [2, Rn.a],
                [2, In.a],
                [2, Gn.b],
                a.l,
                Bn.a,
                Wn.b,
              ],
              null,
              null,
            ),
            a.xb(
              17,
              147456,
              null,
              0,
              Vn.a,
              [[2, In.a], [2, Dn.a], [2, Cn.b], Yn.a],
              null,
              null,
            ),
            (n()(),
            a.yb(
              18,
              0,
              null,
              0,
              26,
              "au3-disclaimer",
              [],
              null,
              null,
              null,
              Hn.b,
              Hn.a,
            )),
            a.xb(
              19,
              4440064,
              null,
              0,
              $n.a,
              [Un.a, [2, t.a], a.h, u.a],
              null,
              null,
            ),
            (n()(),
            a.yb(
              20,
              0,
              null,
              0,
              24,
              "au3-list",
              [
                ["class", "list"],
                ["id", "PrivacySettingsList"],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              jn.b,
              jn.a,
            )),
            a.Sb(6144, null, Zn.a, null, [qn.a]),
            a.xb(
              22,
              212992,
              null,
              0,
              t.a,
              [a.l, a.D, r.a, u.a, [3, t.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(23, 16384, null, 0, Kn.a, [a.l], null, null),
            a.xb(
              24,
              12828672,
              null,
              1,
              qn.a,
              [
                [2, Qn.a],
                [2, Xn.a],
                [8, null],
                [2, t.a],
                [2, Jn.a],
                [2, nl.a],
                [2, Cn.b],
                ll.i,
                a.z,
                a.h,
                u.a,
                el.a,
                al.a,
                [2, kn.a],
                Ln.a,
                [2, ll.a],
              ],
              null,
              null,
            ),
            a.Tb(603979776, 1, { template: 0 }),
            (n()(),
            a.yb(
              26,
              0,
              null,
              0,
              18,
              "div",
              [["class", "list__item"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            a.yb(
              27,
              0,
              null,
              null,
              17,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            a.xb(
              28,
              16384,
              null,
              0,
              L.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (n()(), a.hb(16777216, [[1, 2]], null, 1, null, ol)),
            a.xb(
              30,
              278528,
              null,
              0,
              L.p,
              [a.P, a.L, L.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), a.hb(16777216, [[1, 2]], null, 1, null, sl)),
            a.xb(
              32,
              278528,
              null,
              0,
              L.p,
              [a.P, a.L, L.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), a.hb(16777216, [[1, 2]], null, 1, null, bl)),
            a.xb(
              34,
              278528,
              null,
              0,
              L.p,
              [a.P, a.L, L.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), a.hb(16777216, [[1, 2]], null, 1, null, cl)),
            a.xb(
              36,
              278528,
              null,
              0,
              L.p,
              [a.P, a.L, L.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), a.hb(16777216, [[1, 2]], null, 1, null, dl)),
            a.xb(
              38,
              278528,
              null,
              0,
              L.p,
              [a.P, a.L, L.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), a.hb(16777216, [[1, 2]], null, 1, null, pl)),
            a.xb(
              40,
              278528,
              null,
              0,
              L.p,
              [a.P, a.L, L.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), a.hb(16777216, [[1, 2]], null, 1, null, hl)),
            a.xb(
              42,
              278528,
              null,
              0,
              L.p,
              [a.P, a.L, L.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), a.hb(16777216, [[1, 2]], null, 1, null, gl)),
            a.xb(44, 16384, null, 0, L.q, [a.P, a.L, L.o], null, null),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "Screen:SETUP_DATA_MGT_PRIVACY_STAGED_INFO"),
              n(l, 2, 0, "Screen:SETUP_DATA_MGT_PRIVACY_STAGED_INFO"),
              n(l, 4, 0, ""),
              n(l, 5, 0, "Einstellungen", "Privatsph\xe4re"),
              n(l, 8, 0, ""),
              n(l, 10, 0),
              n(l, 14, 0),
              n(l, 15, 0, !1, "E163_Backbutton.webp"),
              n(l, 19, 0),
              n(l, 22, 0, "PrivacySettingsList"),
              n(l, 24, 0),
              n(l, 28, 0, e.infoText),
              n(l, 30, 0, e.infoTextEnum.GENERAL_INFO),
              n(l, 32, 0, e.infoTextEnum.GPS_INFO),
              n(l, 34, 0, e.infoTextEnum.TRACKING_INFO),
              n(l, 36, 0, e.infoTextEnum.PERSONAL_INFO),
              n(l, 38, 0, e.infoTextEnum.DATA_COLLECTION_PERSONAL),
              n(l, 40, 0, e.infoTextEnum.DATA_COLLECTION_STATISTICAL),
              n(l, 42, 0, e.infoTextEnum.DATA_COLLECTION_ANONYM));
          },
          function (n, l) {
            (n(
              l,
              3,
              0,
              a.Nb(l, 5).hideLeftBorder,
              a.Nb(l, 5).hideDividingBorders,
            ),
              n(
                l,
                6,
                0,
                a.Nb(l, 14).markerClassEnabled,
                a.Nb(l, 15).useItemPlaceholder,
              ),
              n(l, 20, 0, a.Nb(l, 24).showLineNumbers));
          },
        );
      }
      function xl(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-privacy-info",
              [],
              null,
              null,
              null,
              fl,
              ul,
            )),
            a.xb(1, 49152, null, 0, il.a, [tl.a, rl.a], null, null),
          ],
          null,
          null,
        );
      }
      var ml = a.ub("au3-privacy-info", il.a, xl, {}, {}, []);
    },
    nybo: function (n, l, e) {
      "use strict";
      (e.d(l, "a", function () {
        return i;
      }),
        e("Yi6/"));
      var a = e("H4ln");
      class i {
        constructor(n, l) {
          ((this.routingService = n),
            (this.infoTextEnum = a.b),
            (this.onlineServicesOpen =
              l.snapshot.queryParams &&
              "true" === l.snapshot.queryParams.onlineServicesOpen),
            (this.dataCollectionOpen =
              l.snapshot.queryParams &&
              "true" === l.snapshot.queryParams.dataCollectionOpen),
            (this.infoText =
              l.snapshot.queryParams && l.snapshot.queryParams.infoText));
        }
        get routingExtras() {
          return {
            navigationExtras: {
              queryParams: {
                onlineServicesOpen: this.onlineServicesOpen,
                dataCollectionOpen: this.dataCollectionOpen,
              },
            },
          };
        }
      }
    },
  },
]);
