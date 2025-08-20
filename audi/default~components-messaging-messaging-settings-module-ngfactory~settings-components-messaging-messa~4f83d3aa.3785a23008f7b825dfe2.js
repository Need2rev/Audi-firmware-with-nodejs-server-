(window.webpackJsonp = window.webpackJsonp || []).push([
  [50],
  {
    g1YH: function (l, n, t) {
      "use strict";
      (t.r(n),
        t.d(n, "MessagingSettingsModuleNgFactory", function () {
          return Zl;
        }));
      var e = t("kZht"),
        a = t("P1io"),
        i = (t("Yi6/"), t("KjH8")),
        u = t("5aAn"),
        s = (function (l) {
          return (
            (l.Messaging = "Messaging"),
            (l.Settings = "Einstellungen"),
            l
          );
        })({});
      class o {
        constructor(l, n) {
          ((this.routingService = l),
            (this.notificationService = n),
            (this.messageSettingsTextIds = s),
            (this.title =
              this.routingService.activeAppContextSnapshot === a.t
                ? s.Messaging
                : s.Settings),
            (this.subtitle =
              this.routingService.activeAppContextSnapshot === a.t
                ? s.Settings
                : s.Messaging),
            (this.smsNotificationSetting$ =
              this.notificationService.settings.settingForGroup$(
                u.a.NEW_MESSAGE_SMS,
              )),
            (this.emailNotificationSetting$ =
              this.notificationService.settings.settingForGroup$(
                u.a.NEW_MESSAGE_EMAIL,
              )));
        }
        enableMessagingNotification(l, n) {
          this.notificationService.settings.showNotificationsGroup(l, n);
        }
      }
      class b {}
      var r = t("C9Ky"),
        c = t("4XZL"),
        g = t("fu7d"),
        m = t("bou3"),
        d = t("yNay"),
        h = t("URLa"),
        p = t("QSdq"),
        x = t("D0GA"),
        f = t("OtM5"),
        S = t("An66"),
        L = t("Z2XD"),
        v = t("y9xZ"),
        M = t("VUTu"),
        y = t("nK9R"),
        T = t("qzuC"),
        I = t("8yWk"),
        N = t("8WOv"),
        w = t("bMuc"),
        _ = t("ZIdM"),
        D = t("3bpu"),
        E = t("6zvu"),
        k = t("VcEz"),
        C = t("+sw+"),
        P = t("BMrr"),
        z = t("IEns"),
        B = t("1pak"),
        G = t("P+G5"),
        O = t("z6QT"),
        A = t("flsk"),
        j = t("FQEI"),
        F = t("O82V"),
        W = t("Eln4"),
        U = t("evAh"),
        Y = t("zPMi"),
        Z = t("CpzC"),
        K = t("0Bsn"),
        R = t("5GjX"),
        V = t("mYyF"),
        $ = t("v98a"),
        q = t("aOG8"),
        H = t("Krzs"),
        Q = t("ihOk"),
        X = t("ZMtB"),
        J = t("fzcM"),
        ll = t("N2Hj"),
        nl = t("UbWD"),
        tl = t("2rvh"),
        el = t("odRV"),
        al = t("Udyh"),
        il = t("I3ve"),
        ul = t("qiAR"),
        sl = t("007S"),
        ol = t("oeT7"),
        bl = t("oxWk"),
        rl = t("Tr//"),
        cl = t("0qMr"),
        gl = t("FfND"),
        ml = e.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.settings-list__item[_ngcontent-%COMP%]{font-size:40px;padding:0 20px;height:100px}",
            ],
          ],
          data: {},
        });
      function dl(l) {
        return e.ac(
          0,
          [
            (l()(),
            e.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-list-route-item",
              [
                ["class", "settings-list__item"],
                ["id", "EditMessagingTemplatesMenuItem"],
              ],
              null,
              null,
              null,
              c.b,
              c.a,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              g.a,
              [e.l, e.D, m.a, d.a, [3, g.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              2,
              114688,
              null,
              0,
              h.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
          ],
          function (l, n) {
            (l(n, 1, 0, "EditMessagingTemplatesMenuItem"),
              l(n, 2, 0, "Templates bearbeiten"));
          },
          null,
        );
      }
      function hl(l) {
        return e.ac(
          0,
          [
            (l()(),
            e.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-list-switch-item",
              [
                ["class", "settings-list__item"],
                ["id", "NewSmsNotificationSettingsSwitch"],
              ],
              null,
              [[null, "valueChange"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "valueChange" === n &&
                    (e =
                      !1 !==
                        l.component.enableMessagingNotification(
                          null == l.parent.context.mib3Let
                            ? null
                            : l.parent.context.mib3Let.settingGroup,
                          t,
                        ) && e),
                  e
                );
              },
              p.b,
              p.a,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              g.a,
              [e.l, e.D, m.a, d.a, [3, g.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              2,
              49152,
              null,
              0,
              x.a,
              [[2, f.a]],
              { developerText: [0, "developerText"], value: [1, "value"] },
              { valueChange: "valueChange" },
            ),
          ],
          function (l, n) {
            (l(n, 1, 0, "NewSmsNotificationSettingsSwitch"),
              l(
                n,
                2,
                0,
                "Benachrichtigung bei neuer SMS",
                null == n.parent.context.mib3Let
                  ? null
                  : n.parent.context.mib3Let.showNotifications,
              ));
          },
          null,
        );
      }
      function pl(l) {
        return e.ac(
          0,
          [
            (l()(),
            e.yb(
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
            (l()(), e.hb(16777216, [[1, 2]], null, 1, null, hl)),
            e.xb(
              2,
              16384,
              null,
              0,
              S.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), e.hb(0, null, null, 0)),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              null == n.context.mib3Let ? null : n.context.mib3Let.available,
            );
          },
          null,
        );
      }
      function xl(l) {
        return e.ac(
          0,
          [
            (l()(),
            e.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-list-switch-item",
              [
                ["class", "settings-list__item"],
                ["id", "NewEmailNotificationSettingsSwitch"],
              ],
              null,
              [[null, "valueChange"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "valueChange" === n &&
                    (e =
                      !1 !==
                        l.component.enableMessagingNotification(
                          null == l.parent.context.mib3Let
                            ? null
                            : l.parent.context.mib3Let.settingGroup,
                          t,
                        ) && e),
                  e
                );
              },
              p.b,
              p.a,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              g.a,
              [e.l, e.D, m.a, d.a, [3, g.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              2,
              49152,
              null,
              0,
              x.a,
              [[2, f.a]],
              { developerText: [0, "developerText"], value: [1, "value"] },
              { valueChange: "valueChange" },
            ),
          ],
          function (l, n) {
            (l(n, 1, 0, "NewEmailNotificationSettingsSwitch"),
              l(
                n,
                2,
                0,
                "Benachrichtigung bei neuer Email",
                null == n.parent.context.mib3Let
                  ? null
                  : n.parent.context.mib3Let.showNotifications,
              ));
          },
          null,
        );
      }
      function fl(l) {
        return e.ac(
          0,
          [
            (l()(),
            e.yb(
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
            (l()(), e.hb(16777216, [[1, 2]], null, 1, null, xl)),
            e.xb(
              2,
              16384,
              null,
              0,
              S.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), e.hb(0, null, null, 0)),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              null == n.context.mib3Let ? null : n.context.mib3Let.available,
            );
          },
          null,
        );
      }
      function Sl(l) {
        return e.ac(
          0,
          [
            (l()(),
            e.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-list-switch-item",
              [
                ["class", "settings-list__item"],
                ["id", "CopySmsToPhoneAutomaticallySwitch"],
              ],
              null,
              null,
              null,
              p.b,
              p.a,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              g.a,
              [e.l, e.D, m.a, d.a, [3, g.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              2,
              49152,
              null,
              0,
              x.a,
              [[2, f.a]],
              { developerText: [0, "developerText"] },
              null,
            ),
          ],
          function (l, n) {
            (l(n, 1, 0, "CopySmsToPhoneAutomaticallySwitch"),
              l(n, 2, 0, "SMS automat. auf Handy kopieren"));
          },
          null,
        );
      }
      function Ll(l) {
        return e.ac(
          0,
          [
            (l()(),
            e.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-list-route-item",
              [
                ["class", "settings-list__item"],
                ["id", "SmsMessagingCentreMenuItem"],
              ],
              null,
              null,
              null,
              c.b,
              c.a,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              g.a,
              [e.l, e.D, m.a, d.a, [3, g.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              2,
              114688,
              null,
              0,
              h.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
          ],
          function (l, n) {
            (l(n, 1, 0, "SmsMessagingCentreMenuItem"),
              l(n, 2, 0, "SMS Mitteilungszentrale"));
          },
          null,
        );
      }
      function vl(l) {
        return e.ac(
          0,
          [
            (l()(),
            e.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-list-route-item",
              [
                ["class", "settings-list__item"],
                ["id", "DeleteSmsFromSimMenuItem"],
              ],
              null,
              null,
              null,
              c.b,
              c.a,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              g.a,
              [e.l, e.D, m.a, d.a, [3, g.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              2,
              114688,
              null,
              0,
              h.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
          ],
          function (l, n) {
            (l(n, 1, 0, "DeleteSmsFromSimMenuItem"),
              l(n, 2, 0, "SMS von der SIM-Karte l\xf6schen"));
          },
          null,
        );
      }
      function Ml(l) {
        return e.ac(
          2,
          [
            (l()(),
            e.yb(
              0,
              0,
              null,
              null,
              38,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:MSG_SETUP"],
              ],
              null,
              null,
              null,
              L.b,
              L.a,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              g.a,
              [e.l, e.D, m.a, d.a, [3, g.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(2, 4440064, null, 0, v.a, [d.a], { id: [0, "id"] }, null),
            (l()(),
            e.yb(
              3,
              0,
              null,
              0,
              13,
              "au3-title-line",
              [["id", "TitleLine"]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              M.b,
              M.a,
            )),
            e.xb(
              4,
              212992,
              null,
              0,
              g.a,
              [e.l, e.D, m.a, d.a, [3, g.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              5,
              49152,
              null,
              0,
              y.a,
              [T.a, I.a],
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
            (l()(),
            e.yb(
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
              function (l, n, t) {
                var e = !0;
                return (
                  "mib3Tap" === n &&
                    (e = !1 !== l.component.routingService.goBack() && e),
                  e
                );
              },
              N.b,
              N.a,
            )),
            e.xb(7, 147456, null, 0, w.a, [e.l, e.z], null, null),
            e.xb(
              8,
              212992,
              null,
              0,
              g.a,
              [e.l, e.D, m.a, d.a, [3, g.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              9,
              147456,
              null,
              0,
              _.a,
              [w.a, [2, D.a], [2, g.a], d.a],
              null,
              null,
            ),
            e.xb(
              10,
              212992,
              null,
              0,
              E.a,
              [
                d.a,
                k.b,
                _.a,
                [2, D.a],
                [2, g.a],
                [2, f.a],
                [2, v.a],
                [2, C.a],
                e.z,
                P.a,
                e.l,
                [2, z.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            e.xb(
              11,
              147456,
              null,
              0,
              B.a,
              [d.a, G.a, e.l, [2, E.a], [2, f.a]],
              null,
              null,
            ),
            e.Sb(131584, null, O.a, O.a, [[3, O.a]]),
            e.xb(
              13,
              4407296,
              null,
              0,
              A.a,
              [
                e.l,
                j.a,
                e.h,
                O.a,
                [2, F.a],
                [2, D.b],
                [2, D.a],
                [2, W.a],
                [2, U.a],
              ],
              null,
              null,
            ),
            e.xb(
              14,
              49152,
              null,
              0,
              Y.a,
              [[2, f.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            e.xb(
              15,
              147456,
              null,
              0,
              Z.a,
              [[2, E.a], [2, f.a], [2, K.a], [2, A.a], [2, R.b], e.l, V.a, $.b],
              null,
              null,
            ),
            e.xb(
              16,
              147456,
              null,
              0,
              q.a,
              [[2, A.a], [2, E.a], [2, k.b], H.a],
              null,
              null,
            ),
            (l()(),
            e.yb(
              17,
              0,
              null,
              0,
              21,
              "au3-disclaimer",
              [],
              null,
              null,
              null,
              Q.b,
              Q.a,
            )),
            e.xb(
              18,
              4440064,
              null,
              0,
              X.a,
              [J.a, [2, g.a], e.h, d.a],
              null,
              null,
            ),
            (l()(),
            e.yb(
              19,
              0,
              null,
              0,
              19,
              "au3-list",
              [["id", "MessagingSettingsList"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              ll.b,
              ll.a,
            )),
            e.Sb(6144, null, nl.a, null, [tl.a]),
            e.xb(
              21,
              212992,
              null,
              0,
              g.a,
              [e.l, e.D, m.a, d.a, [3, g.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(22, 16384, null, 0, el.a, [e.l], null, null),
            e.xb(
              23,
              12828672,
              null,
              1,
              tl.a,
              [
                [2, al.a],
                [2, il.a],
                [8, null],
                [2, g.a],
                [2, ul.a],
                [2, sl.a],
                [2, k.b],
                ol.i,
                e.z,
                e.h,
                d.a,
                bl.a,
                rl.a,
                [2, j.a],
                D.a,
                [2, ol.a],
              ],
              null,
              null,
            ),
            e.Tb(603979776, 1, { template: 0 }),
            (l()(), e.hb(16777216, [[1, 2]], 0, 1, null, dl)),
            e.xb(
              26,
              16384,
              null,
              0,
              S.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), e.hb(16777216, [[1, 2]], 0, 2, null, pl)),
            e.xb(
              28,
              16384,
              null,
              0,
              cl.a,
              [e.L, e.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            e.Pb(131072, S.b, [e.h]),
            (l()(), e.hb(16777216, [[1, 2]], 0, 2, null, fl)),
            e.xb(
              31,
              16384,
              null,
              0,
              cl.a,
              [e.L, e.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            e.Pb(131072, S.b, [e.h]),
            (l()(), e.hb(16777216, [[1, 2]], 0, 1, null, Sl)),
            e.xb(
              34,
              16384,
              null,
              0,
              S.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), e.hb(16777216, [[1, 2]], 0, 1, null, Ll)),
            e.xb(
              36,
              16384,
              null,
              0,
              S.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), e.hb(16777216, [[1, 2]], 0, 1, null, vl)),
            e.xb(
              38,
              16384,
              null,
              0,
              S.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (l, n) {
            var t = n.component;
            (l(n, 1, 0, "Screen:MSG_SETUP"),
              l(n, 2, 0, "Screen:MSG_SETUP"),
              l(n, 4, 0, "TitleLine"),
              l(
                n,
                5,
                0,
                t.title,
                t.title,
                t.messageSettingsTextIds,
                t.subtitle,
                t.subtitle,
                t.messageSettingsTextIds,
              ),
              l(n, 8, 0, "BackButton"),
              l(n, 10, 0),
              l(n, 13, 0),
              l(n, 14, 0, !1, "E163_Backbutton.webp"),
              l(n, 18, 0),
              l(n, 21, 0, "MessagingSettingsList"),
              l(n, 23, 0),
              l(n, 26, 0, !1),
              l(
                n,
                28,
                0,
                e.Yb(
                  n,
                  28,
                  0,
                  e.Nb(n, 29).transform(t.smsNotificationSetting$),
                ),
              ),
              l(
                n,
                31,
                0,
                e.Yb(
                  n,
                  31,
                  0,
                  e.Nb(n, 32).transform(t.emailNotificationSetting$),
                ),
              ),
              l(n, 34, 0, !1),
              l(n, 36, 0, !1),
              l(n, 38, 0, !1));
          },
          function (l, n) {
            (l(
              n,
              3,
              0,
              e.Nb(n, 5).hideLeftBorder,
              e.Nb(n, 5).hideDividingBorders,
            ),
              l(
                n,
                6,
                0,
                e.Nb(n, 13).markerClassEnabled,
                e.Nb(n, 14).useItemPlaceholder,
              ),
              l(n, 19, 0, e.Nb(n, 23).showLineNumbers));
          },
        );
      }
      function yl(l) {
        return e.ac(
          0,
          [
            (l()(),
            e.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-messaging-settings",
              [],
              null,
              null,
              null,
              Ml,
              ml,
            )),
            e.xb(1, 49152, null, 0, o, [gl.a, i.a], null, null),
          ],
          null,
          null,
        );
      }
      var Tl = e.ub("au3-messaging-settings", o, yl, {}, {}, []),
        Il = t("aDqW"),
        Nl = t("/W5r"),
        wl = t("+Qv1"),
        _l = t("XtoR"),
        Dl = t("jTHl"),
        El = t("zL3T"),
        kl = t("+epw"),
        Cl = t("zMPs"),
        Pl = t("6Yk8"),
        zl = t("u6+O"),
        Bl = t("CIQC"),
        Gl = t("REmV"),
        Ol = t("Y3N+"),
        Al = t("MJxn"),
        jl = t("eIOF"),
        Fl = t("t+4g"),
        Wl = t("myjn"),
        Ul = t("fOZ7"),
        Yl = t("1VvW"),
        Zl = e.vb(b, [], function (l) {
          return e.Kb([
            e.Lb(512, e.j, e.X, [[8, [r.a, Tl]], [3, e.j], e.x]),
            e.Lb(4608, S.m, S.l, [e.u]),
            e.Lb(4608, Il.h, Il.g, []),
            e.Lb(4608, Il.d, Il.f, []),
            e.Lb(4608, Il.j, Il.e, []),
            e.Lb(4608, Il.c, Il.b, []),
            e.Lb(4608, Il.k, Il.k, [
              Il.l,
              Il.h,
              Il.d,
              Il.j,
              Il.c,
              Il.m,
              Il.o,
              Il.n,
              Il.a,
            ]),
            e.Lb(4608, Nl.b, Nl.b, [wl.e, [2, Nl.a]]),
            e.Lb(4608, _l.b, _l.b, [wl.e, [2, _l.a]]),
            e.Lb(4608, Dl.b, Dl.b, [wl.e, [2, Dl.a]]),
            e.Lb(4608, El.b, El.b, [wl.e, [2, El.a]]),
            e.Lb(1073742336, S.c, S.c, []),
            e.Lb(1073742336, Il.i, Il.i, []),
            e.Lb(1073742336, kl.a, kl.a, []),
            e.Lb(1073742336, Cl.a, Cl.a, []),
            e.Lb(1073742336, Pl.a, Pl.a, []),
            e.Lb(1073742336, zl.a, zl.a, []),
            e.Lb(1073742336, Bl.a, Bl.a, []),
            e.Lb(1073742336, Gl.a, Gl.a, []),
            e.Lb(1073742336, Ol.a, Ol.a, []),
            e.Lb(1073742336, Al.a, Al.a, []),
            e.Lb(1073742336, jl.a, jl.a, []),
            e.Lb(1073742336, Fl.a, Fl.a, []),
            e.Lb(1073742336, Wl.a, Wl.a, []),
            e.Lb(1073742336, Ul.a, Ul.a, []),
            e.Lb(1073742336, Yl.n, Yl.n, [
              [2, Yl.s],
              [2, Yl.m],
            ]),
            e.Lb(1073742336, b, b, []),
            e.Lb(256, Il.o, void 0, []),
            e.Lb(256, Il.m, void 0, []),
            e.Lb(256, Il.n, void 0, []),
            e.Lb(256, Il.a, void 0, []),
            e.Lb(
              1024,
              Yl.k,
              function () {
                return [[{ path: "", children: [{ path: "", component: o }] }]];
              },
              [],
            ),
          ]);
        });
    },
  },
]);
