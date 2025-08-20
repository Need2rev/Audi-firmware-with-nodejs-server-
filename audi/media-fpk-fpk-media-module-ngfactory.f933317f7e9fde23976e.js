(window.webpackJsonp = window.webpackJsonp || []).push([
  [86],
  {
    "7hGl": function (n, e, l) {
      "use strict";
      (l.d(e, "a", function () {
        return a;
      }),
        l("Yi6/"));
      var t = l("Ngpk"),
        i = l("aMy3");
      let a = (() => {
        class n {
          constructor(n) {
            this.logger = n.getLogger("media.MediaSourceTitlelineTextPipe");
          }
          transform(e, l) {
            if (!e)
              return (
                this.logger.warn("transform: Source is not defined"),
                null
              );
            const t = n.mediaSourceTexts.find((n) => n.sourceType === e.type);
            return t
              ? this.hasValidDeviceIndex(t, e)
                ? t.deviceNames[e.deviceIndex]
                : t.defaultName
              : (this.logger.warn(
                  `transform: Unknown sourceType '${e.type}' in entertainment source: ${e}`,
                ),
                null);
          }
          hasValidDeviceIndex(n, e) {
            return (
              !!n.deviceNames &&
              !(!e.deviceIndex && 0 !== e.deviceIndex) &&
              e.deviceIndex >= 0 &&
              e.deviceIndex < n.deviceNames.length
            );
          }
        }
        return (
          (n.mediaSourceTexts = [
            {
              sourceType: t.g.USB,
              defaultName: i.c.USB_DEFAULT,
              deviceNames: [i.c.USB_1, i.c.USB_2, i.c.USB_3, i.c.USB_4],
            },
            { sourceType: t.g.DVDDRIVE, defaultName: i.c.DVD },
            { sourceType: t.g.BLUETOOTH, defaultName: i.c.BLUETOOTH },
            { sourceType: t.g.ONLINEMEDIA, defaultName: i.c.ONLINEMEDIA },
            { sourceType: t.g.ALEXA, defaultName: i.c.ALEXA },
          ]),
          n
        );
      })();
    },
    Vx7N: function (n, e, l) {
      "use strict";
      (l.r(e),
        l.d(e, "FpkMediaModuleNgFactory", function () {
          return Yi;
        }));
      var t = l("kZht");
      class i {}
      var a = l("C9Ky"),
        u = l("89Z2"),
        o = l("kqft"),
        r = l("+sw+"),
        s = l("FfND"),
        c = l("bou3"),
        b = l("yNay"),
        d = l("1VvW"),
        m = l("CDcS"),
        p = l("Ngpk"),
        h = l("X4XO"),
        x = l("Yi6/"),
        g = l("QQZH"),
        f = l("HM3f"),
        v = l("xVbo"),
        y = l("J+dc"),
        L = l("YtkY"),
        O = l("kuMc"),
        S = l("Ohay"),
        T = l("Y0IF"),
        _ = (l("YIOi"), l("74Ku")),
        N = l("G7MO");
      class P {
        constructor(n, e, l, t, i) {
          ((this.routingService = n),
            (this.mediaService = e),
            (this.entertainmentService = l),
            (this.tvService = t),
            (this.context = x.s.Media),
            (this.destroyed$$ = new g.a(1)),
            (this.sourceSelectionVisible = !1),
            (this.logger = i.getLogger("FpkMediaComponent")));
        }
        ngOnInit() {
          (this.entertainmentService.activeGroup$
            .pipe(
              Object(v.a)(x.wd),
              Object(y.a)(1),
              Object(L.a)((n) => n.type),
              Object(O.a)(this.destroyed$$),
            )
            .subscribe((n) => {
              n === p.c.MEDIA && this.routingService.lastActiveGroupWasTv()
                ? (this.logger.info("activateMedia() onInit"),
                  this.mediaService.activateMedia())
                : (n === p.c.TV &&
                      !this.routingService.lastActiveGroupWasTv()) ||
                    this.routingService.lastActiveGroupWasTv()
                  ? (this.logger.info("activateTV() onInit"),
                    this.tvService.activateTV())
                  : (this.logger.info("activateMedia() onInit"),
                    this.mediaService.activateMedia());
            }),
            this.routingService.currentRoute$
              .pipe(
                Object(L.a)((n) => !!n && n.path === N.a.SourceSelection.path),
                Object(S.a)(),
                Object(O.a)(this.destroyed$$),
              )
              .subscribe((n) => {
                this.sourceSelectionVisible = n;
              }),
            this.reactOnRsiTvTuner());
        }
        ngOnDestroy() {
          (this.destroyed$$.next(), this.destroyed$$.complete());
        }
        menuKeyDown() {
          this.sourceSelectionVisible
            ? this.routingService.closeSourceSelection()
            : this.routingService.goTo(N.a.SourceSelection);
        }
        reactOnRsiTvTuner() {
          Object(f.b)(
            this.tvService.activeRsiTvTuner$,
            this.routingService.currentRoute$,
          )
            .pipe(Object(O.a)(this.destroyed$$))
            .subscribe(([n, e]) => {
              this.isTvTunerInactiveAndIsRoutePartOfTv(n, e) &&
                this.routingService.goToTvInit();
            });
        }
        isTvTunerInactiveAndIsRoutePartOfTv(n, e) {
          return (
            !!n &&
            n.state === h.q.INACTIVE &&
            !!e &&
            !!e.parent &&
            e.parent.path === N.a.Tv.path
          );
        }
      }
      var C = l("igZ1"),
        E = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{position:absolute;display:block;height:100%;width:100%;color:#fff}",
            ],
          ],
          data: {},
        });
      function I(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              5,
              "au3-app-outlet",
              [],
              [
                [40, "@screenChange", 0],
                [2, "context", null],
              ],
              [
                ["component", "@screenChange.start"],
                ["component", "@screenChange.done"],
              ],
              function (n, e, l) {
                var i = !0;
                return (
                  "component:@screenChange.start" === e &&
                    (i = !1 !== t.Nb(n, 1).animationStarted(l) && i),
                  "component:@screenChange.done" === e &&
                    (i = !1 !== t.Nb(n, 1).animationDone(l) && i),
                  i
                );
              },
              u.b,
              u.a,
            )),
            t.xb(
              1,
              245760,
              null,
              1,
              o.a,
              [[2, r.a], s.a, t.h, c.a, b.a],
              null,
              null,
            ),
            t.Tb(335544320, 1, { arod: 0 }),
            (n()(),
            t.yb(
              3,
              16777216,
              null,
              0,
              2,
              "router-outlet",
              [],
              [[2, "mib3-router-outlet--hide-adjacent-sibling", null]],
              null,
              null,
              null,
              null,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              d.o,
              [d.b, t.P, t.j, [8, null], t.h],
              null,
              null,
            ),
            t.xb(5, 212992, [[1, 4]], 0, m.a, [d.o, t.h, t.z, b.a], null, null),
          ],
          function (n, e) {
            (n(e, 1, 0), n(e, 4, 0), n(e, 5, 0));
          },
          function (n, e) {
            (n(e, 0, 0, t.Nb(e, 1).screenState, !0),
              n(e, 3, 0, t.Nb(e, 5).hideAdjacentSibling));
          },
        );
      }
      function w(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-media",
              [],
              [[8, "className", 0]],
              [["screen", "keydown.KeyM"]],
              function (n, e, l) {
                var i = !0;
                return (
                  "screen:keydown.KeyM" === e &&
                    (i = !1 !== t.Nb(n, 1).menuKeyDown() && i),
                  i
                );
              },
              I,
              E,
            )),
            t.xb(1, 245760, null, 0, P, [N.b, C.a, T.a, _.a, b.a], null, null),
          ],
          function (n, e) {
            n(e, 1, 0);
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 1).context);
          },
        );
      }
      var D = t.ub("au3-fpk-media", P, w, {}, {}, []),
        A = l("4XZL"),
        k = l("bMuc"),
        M = l("ZIdM"),
        $ = l("3bpu"),
        R = l("fu7d"),
        V = l("OtM5"),
        F = l("9ZFG"),
        z = l("6zvu"),
        B = l("VcEz"),
        U = l("y9xZ"),
        j = l("BMrr"),
        Y = l("IEns"),
        H = l("z6QT"),
        K = l("flsk"),
        G = l("FQEI"),
        W = l("O82V"),
        Q = l("Eln4"),
        X = l("evAh"),
        Z = l("URLa"),
        q = l("9N/+"),
        J = l("CpzC"),
        nn = l("0Bsn"),
        en = l("5GjX"),
        ln = l("mYyF"),
        tn = l("v98a"),
        an = l("aOG8"),
        un = l("Krzs"),
        on = l("9tRs"),
        rn = l("sH6Y"),
        sn = l("Ftf+"),
        cn = l("I3ve"),
        bn = l("Lfy4"),
        dn = l("+OYd"),
        mn = l("N2Hj"),
        pn = l("UbWD"),
        hn = l("2rvh"),
        xn = l("odRV"),
        gn = l("Udyh"),
        fn = l("qiAR"),
        vn = l("007S"),
        yn = l("oeT7"),
        Ln = l("oxWk"),
        On = l("Tr//"),
        Sn = l("An66"),
        Tn = l("BwBJ"),
        _n = l("sqIm"),
        Nn = l("aMy3"),
        Pn = l("FdP4"),
        Cn = l("Mhh4");
      class En {
        constructor(n, e, l, t, i, a, u) {
          ((this.radioRoutingService = n),
            (this.mediaRoutingService = e),
            (this.entertainmentService = l),
            (this.mediaService = t),
            (this.tvService = i),
            (this.onlineMediaProvidersService = a),
            (this.mediaSourceI18NEnum = Nn.c),
            (this.itemTypeNoEndIcon = x.rb.ITEM_TYPE_NO_END_ICON),
            (this.usbSource = new Pn.b(p.g.USB, Nn.c.USB_DEFAULT, [
              Nn.c.USB_1,
              Nn.c.USB_2,
              Nn.c.USB_3,
              Nn.c.USB_4,
            ])),
            (this.bluetoothSource = new Pn.b(p.g.BLUETOOTH, Nn.c.BLUETOOTH, [
              Nn.c.BLUETOOTH,
            ])),
            (this.ipodSource = new Pn.b(
              p.g.USB,
              Nn.c.IPOD,
              [Nn.c.IPOD],
              p.d.IPOD,
            )),
            (this.ipodBluetoothSource = new Pn.b(
              p.g.BLUETOOTH,
              Nn.c.IPOD,
              [Nn.c.IPOD],
              p.d.IPOD,
            )),
            (this.carPlayBluetoothSource = new Pn.b(
              p.g.BLUETOOTH,
              Nn.c.CARPLAY,
              [Nn.c.CARPLAY],
              p.d.APPLECARPLAY,
            )),
            (this.carPlayUsbSource = new Pn.b(
              p.g.USB,
              Nn.c.CARPLAY,
              [Nn.c.CARPLAY],
              p.d.APPLECARPLAY,
            )),
            (this.dvdSource = new Pn.b(p.g.DVDDRIVE, Nn.c.DVD, [Nn.c.DVD])),
            (this.tvSource = new Pn.b(p.g.TV, Nn.c.TV, [Nn.c.TV])),
            (this.tvFavoritesSource = new Pn.b(p.g.TVFAVORITES, Nn.c.TV, [
              Nn.c.TV,
            ])),
            (this.tvRecentsSource = new Pn.b(p.g.TVRECENTS, Nn.c.TV, [
              Nn.c.TV,
            ])),
            (this.alexaSource = new Pn.b(p.g.ALEXA, Nn.c.ALEXA, [Nn.c.ALEXA])),
            (this.destroy$$ = new g.a(1)),
            (this.logger = u.getLogger(
              "main.FpkMediaSourceSelectionComponent",
            )),
            (this.sourceTypeDisplayInfos = [
              this.usbSource,
              this.ipodSource,
              this.ipodBluetoothSource,
              this.carPlayBluetoothSource,
              this.carPlayUsbSource,
              this.bluetoothSource,
              this.dvdSource,
              this.bluetoothSource,
              this.tvSource,
              this.alexaSource,
              this.tvFavoritesSource,
              this.tvRecentsSource,
            ]));
        }
        ngOnInit() {
          ((this.visibleSourceItems$ = Object(f.b)(
            this.mediaService.sourceSelectionItems$,
            this.mediaService.activeSource$,
          ).pipe(
            Object(v.a)(([n, e]) => n.length > 0),
            Object(L.a)(([n, e]) => {
              let l = n.filter(
                (n) =>
                  n.sourceState !== p.f.EMPTY ||
                  n.activationState === p.a.ACTIVE,
              );
              return (
                l.length > 1 &&
                  (l = l.filter((n) => n.sourceState !== p.f.EMPTY)),
                l.map((n) => Pn.a.createItem(n, e, this.sourceTypeDisplayInfos))
              );
            }),
          )),
            this.visibleSourceItems$
              .pipe(
                Object(y.a)(1),
                Object(Tn.a)(1),
                Object(O.a)(this.destroy$$),
              )
              .subscribe((n) => {
                const e = n.findIndex((n) => n.highlighted);
                if (e >= 0) {
                  const n =
                    this.listComponent.convertListIndexToAbsoluteIndex(e);
                  this.listComponent.selectIndex(n);
                }
              }));
        }
        ngOnDestroy() {
          (this.destroy$$.next(), this.destroy$$.complete());
        }
        switchToSource(n) {
          n.source
            ? n.source && n.source.type === p.g.TV
              ? this.tvService
                  .activateTV()
                  .then(() => this.mediaRoutingService.goTvPlayer())
              : (n.source.type === p.g.ONLINEMEDIA &&
                  n.source.onlinemediaProvider &&
                  this.onlineMediaProvidersService.resetProviderSpecificError(
                    n.source.onlinemediaProvider,
                  ),
                this.entertainmentService
                  .activateEntertainmentSource(n.source)
                  .pipe(Object(O.a)(this.destroy$$))
                  .subscribe((n) => {
                    n && this.mediaRoutingService.closeSourceSelection();
                  }))
            : this.logger.error(
                `switchToSource: Could not switch to invalid source "${n.sourceId}"`,
              );
        }
        switchToRadio() {
          this.radioRoutingService.enterContext();
        }
        onBackKeyDown() {
          this.mediaRoutingService.goBack();
        }
      }
      var In = t.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.list[_ngcontent-%COMP%]{width:100%}.list__item[_ngcontent-%COMP%]{height:52px;margin:3px 0 4px;font-size:38px;padding:0 15px}",
          ],
        ],
        data: {},
      });
      function wn(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-list-route-item",
              [
                ["au3C2Cursor", ""],
                ["class", "list__item"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "c2-cursor", null],
                [2, "state-active", null],
              ],
              [
                [null, "mib3Tap"],
                [null, "mib3DisabledTap"],
              ],
              function (n, e, l) {
                var t = !0,
                  i = n.component;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== i.switchToSource(n.context.$implicit) && t),
                  "mib3DisabledTap" === e &&
                    (t = !1 !== i.switchToSource(n.context.$implicit) && t),
                  t
                );
              },
              A.b,
              A.a,
            )),
            t.xb(1, 147456, null, 0, k.a, [t.l, t.z], null, null),
            t.xb(
              2,
              147456,
              null,
              0,
              M.a,
              [k.a, [2, $.a], [2, R.a], b.a],
              null,
              null,
            ),
            t.xb(
              3,
              147456,
              null,
              0,
              V.a,
              [F.a, t.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"] },
              { tap: "mib3DisabledTap" },
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              z.a,
              [
                b.a,
                B.b,
                M.a,
                [2, $.a],
                [2, R.a],
                [2, V.a],
                [2, U.a],
                [2, r.a],
                t.z,
                j.a,
                t.l,
                [2, Y.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, H.a, H.a, [[3, H.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              K.a,
              [
                t.l,
                G.a,
                t.h,
                H.a,
                [2, W.a],
                [2, $.b],
                [2, $.a],
                [2, Q.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              114688,
              null,
              0,
              Z.a,
              [],
              {
                icon: [0, "icon"],
                titleTextId: [1, "titleTextId"],
                titleTextIdEnum: [2, "titleTextIdEnum"],
                titleDeveloperText: [3, "titleDeveloperText"],
                titleNonI18nText: [4, "titleNonI18nText"],
                type: [5, "type"],
              },
              null,
            ),
            t.xb(
              8,
              16384,
              null,
              0,
              q.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              J.a,
              [
                [2, z.a],
                [2, V.a],
                [2, nn.a],
                [2, K.a],
                [2, en.b],
                t.l,
                ln.a,
                tn.b,
              ],
              null,
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              an.a,
              [[2, K.a], [2, z.a], [2, B.b], un.a],
              null,
              null,
            ),
            t.xb(
              11,
              16384,
              null,
              0,
              on.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(
              e,
              3,
              0,
              null == e.context.$implicit ? null : e.context.$implicit.disabled,
            ),
              n(e, 4, 0),
              n(e, 6, 0),
              n(
                e,
                7,
                0,
                (null == e.context.$implicit
                  ? null
                  : e.context.$implicit.dynamicIcon) ||
                  (null == e.context.$implicit
                    ? null
                    : e.context.$implicit.icon),
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.textI18n,
                l.mediaSourceI18NEnum,
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.textI18n,
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.textDynamic,
                l.itemTypeNoEndIcon,
              ),
              n(
                e,
                8,
                0,
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.highlighted,
              ),
              n(
                e,
                11,
                0,
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.highlighted,
              ));
          },
          function (n, e) {
            n(
              e,
              0,
              0,
              t.Nb(e, 3).combinedDisabled,
              t.Nb(e, 3).useBrighterIcon,
              t.Nb(e, 6).markerClassEnabled,
              t.Nb(e, 8).mib3Active,
              t.Nb(e, 11).mib3Active,
            );
          },
        );
      }
      function Dn(n) {
        return t.ac(
          2,
          [
            t.Tb(402653184, 1, { listComponent: 0 }),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              24,
              "au3-fpk-screen",
              [["id", "Screen:MEDIA_FPK_MENU"]],
              null,
              null,
              null,
              rn.b,
              rn.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 114688, null, 0, sn.a, [], null, null),
            t.Sb(256, null, cn.a, sn.b, []),
            (n()(),
            t.yb(
              5,
              0,
              null,
              0,
              20,
              "au3-combi-menu",
              [["id", "Source"]],
              null,
              null,
              null,
              bn.b,
              bn.a,
            )),
            t.xb(
              6,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              7,
              49152,
              null,
              0,
              dn.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
            (n()(),
            t.yb(
              8,
              0,
              null,
              0,
              17,
              "au3-list",
              [
                ["class", "list"],
                ["id", ""],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              mn.b,
              mn.a,
            )),
            t.Sb(6144, null, pn.a, null, [hn.a]),
            t.xb(
              10,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(11, 16384, null, 0, xn.a, [t.l], null, null),
            t.xb(
              12,
              12828672,
              [[1, 4]],
              1,
              hn.a,
              [
                [2, gn.a],
                [2, cn.a],
                [8, null],
                [2, R.a],
                [2, fn.a],
                [2, vn.a],
                [2, B.b],
                yn.i,
                t.z,
                t.h,
                b.a,
                Ln.a,
                On.a,
                [2, G.a],
                $.a,
                [2, yn.a],
              ],
              {
                showCursor: [0, "showCursor"],
                showSeparators: [1, "showSeparators"],
                items: [2, "items"],
              },
              null,
            ),
            t.Tb(603979776, 2, { template: 0 }),
            t.Pb(131072, Sn.b, [t.h]),
            (n()(),
            t.yb(
              15,
              0,
              null,
              0,
              9,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["id", "SwitchToRadio"],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (n, e, l) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== n.component.switchToRadio() && t),
                  t
                );
              },
              A.b,
              A.a,
            )),
            t.xb(
              16,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(17, 147456, null, 0, k.a, [t.l, t.z], null, null),
            t.xb(
              18,
              147456,
              null,
              0,
              M.a,
              [k.a, [2, $.a], [2, R.a], b.a],
              null,
              null,
            ),
            t.xb(
              19,
              212992,
              null,
              0,
              z.a,
              [
                b.a,
                B.b,
                M.a,
                [2, $.a],
                [2, R.a],
                [2, V.a],
                [2, U.a],
                [2, r.a],
                t.z,
                j.a,
                t.l,
                [2, Y.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, H.a, H.a, [[3, H.a]]),
            t.xb(
              21,
              4407296,
              null,
              0,
              K.a,
              [
                t.l,
                G.a,
                t.h,
                H.a,
                [2, W.a],
                [2, $.b],
                [2, $.a],
                [2, Q.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            t.xb(
              22,
              114688,
              null,
              0,
              Z.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                type: [2, "type"],
              },
              null,
            ),
            t.xb(
              23,
              147456,
              null,
              0,
              J.a,
              [
                [2, z.a],
                [2, V.a],
                [2, nn.a],
                [2, K.a],
                [2, en.b],
                t.l,
                ln.a,
                tn.b,
              ],
              null,
              null,
            ),
            t.xb(
              24,
              147456,
              null,
              0,
              an.a,
              [[2, K.a], [2, z.a], [2, B.b], un.a],
              null,
              null,
            ),
            (n()(), t.hb(0, [[2, 2]], 0, 0, null, wn)),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 2, 0, "Screen:MEDIA_FPK_MENU"),
              n(e, 3, 0),
              n(e, 6, 0, "Source"),
              n(e, 7, 0, "Source"),
              n(e, 10, 0, ""),
              n(
                e,
                12,
                0,
                !0,
                !1,
                t.Yb(e, 12, 2, t.Nb(e, 14).transform(l.visibleSourceItems$)),
              ),
              n(e, 16, 0, "SwitchToRadio"),
              n(e, 19, 0),
              n(e, 21, 0),
              n(
                e,
                22,
                0,
                "E969_media_zuRadioUmschalten.webp",
                "Switch to Radio",
                l.itemTypeNoEndIcon,
              ));
          },
          function (n, e) {
            (n(e, 8, 0, t.Nb(e, 12).showLineNumbers),
              n(e, 15, 0, t.Nb(e, 21).markerClassEnabled));
          },
        );
      }
      function An(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-media-source-selection",
              [],
              null,
              [["screen", "keydown.Backspace"]],
              function (n, e, l) {
                var i = !0;
                return (
                  "screen:keydown.Backspace" === e &&
                    (i = !1 !== t.Nb(n, 1).onBackKeyDown() && i),
                  i
                );
              },
              Dn,
              In,
            )),
            t.xb(
              1,
              245760,
              null,
              0,
              En,
              [_n.b, N.b, T.a, C.a, _.a, Cn.b, b.a],
              null,
              null,
            ),
          ],
          function (n, e) {
            n(e, 1, 0);
          },
          null,
        );
      }
      var kn = t.ub("au3-fpk-media-source-selection", En, An, {}, {}, []),
        Mn = l("LELx"),
        $n = l("o/5+"),
        Rn = l("ZXHi"),
        Vn = l("IRNg"),
        Fn = l("8TlW"),
        zn = l("Xo58"),
        Bn = l("m3Ja"),
        Un = l("r+e+"),
        jn = l("ijxY"),
        Yn = l("bmFL");
      class Hn {}
      var Kn = t.wb({
        encapsulation: 0,
        styles: [
          ["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}"],
        ],
        data: {},
      });
      function Gn(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-fpk-screen",
              [["id", "Screen:MEDIA_FPK_INIT"]],
              null,
              null,
              null,
              rn.b,
              rn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 114688, null, 0, sn.a, [], null, null),
            t.Sb(256, null, cn.a, sn.b, []),
            (n()(),
            t.yb(
              4,
              0,
              null,
              0,
              2,
              "au3-fpk-title-line",
              [["id", ""]],
              [[2, "priority-shrink", null]],
              null,
              null,
              Mn.b,
              Mn.a,
            )),
            t.xb(
              5,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              6,
              49152,
              null,
              0,
              $n.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
                showLeftDrawerIcon: [2, "showLeftDrawerIcon"],
              },
              null,
            ),
            (n()(),
            t.yb(
              7,
              0,
              null,
              0,
              4,
              "au3-init-view",
              [],
              null,
              null,
              null,
              Rn.b,
              Rn.a,
            )),
            t.xb(8, 49152, null, 0, Vn.a, [], null, null),
            (n()(),
            t.yb(
              9,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [["id", "MediaInitialisiiert"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Fn.b,
              Fn.a,
            )),
            t.xb(
              10,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              11,
              245760,
              null,
              0,
              zn.a,
              [[6, R.a], Bn.a, t.h, t.l, t.D, [2, Un.a], [2, jn.a], [2, Yn.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "Screen:MEDIA_FPK_INIT"),
              n(e, 2, 0),
              n(e, 5, 0, ""),
              n(e, 6, 0, "Media", "Hinweis", !1),
              n(e, 10, 0, "MediaInitialisiiert"),
              n(
                e,
                11,
                0,
                "Media wird initialisiert.\nBitte warten...",
                "MediaInitialisiiert",
                3,
              ));
          },
          function (n, e) {
            (n(e, 4, 0, t.Nb(e, 6).isPriorityShrink),
              n(
                e,
                9,
                0,
                t.Nb(e, 11).backgroundColor,
                t.Nb(e, 11).fixedNumberOfLines,
                t.Nb(e, 11).mayContainLatinCharsForArabic,
                t.Nb(e, 11).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function Wn(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-media-initialization",
              [],
              null,
              null,
              null,
              Gn,
              Kn,
            )),
            t.xb(1, 49152, null, 0, Hn, [], null, null),
          ],
          null,
          null,
        );
      }
      var Qn = t.ub("au3-fpk-media-initialization", Hn, Wn, {}, {}, []),
        Xn = l("7hGl"),
        Zn = l("0qMr");
      class qn {
        constructor(n) {
          ((this.mediaService = n), (this.mediaSourceI18NEnum = Nn.c));
        }
      }
      var Jn = t.wb({
        encapsulation: 0,
        styles: [
          ["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}"],
        ],
        data: {},
      });
      function ne(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-fpk-title-line",
              [["secondaryDeveloperText", "Hinweis"]],
              [[2, "priority-shrink", null]],
              null,
              null,
              Mn.b,
              Mn.a,
            )),
            t.xb(
              1,
              49152,
              null,
              0,
              $n.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryNonI18nText: [1, "primaryNonI18nText"],
                primaryIdEnumType: [2, "primaryIdEnumType"],
                primaryId: [3, "primaryId"],
                secondaryDeveloperText: [4, "secondaryDeveloperText"],
              },
              null,
            ),
            t.Rb(2, 1),
            t.Rb(3, 1),
          ],
          function (n, e) {
            var l = e.component,
              i = t.Yb(
                e,
                1,
                0,
                n(e, 2, 0, t.Nb(e.parent, 0), e.context.mib3Let),
              ),
              a =
                (null == e.context.mib3Let
                  ? null
                  : e.context.mib3Let.deviceName) || void 0,
              u = l.mediaSourceI18NEnum,
              o = t.Yb(
                e,
                1,
                3,
                n(e, 3, 0, t.Nb(e.parent, 0), e.context.mib3Let),
              );
            n(e, 1, 0, i, a, u, o, "Hinweis");
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 1).isPriorityShrink);
          },
        );
      }
      function ee(n) {
        return t.ac(
          2,
          [
            t.Pb(0, Xn.a, [b.a]),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              11,
              "au3-fpk-screen",
              [["id", "Screen:MEDIA_FPK_ERROR_NOTE"]],
              null,
              null,
              null,
              rn.b,
              rn.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 114688, null, 0, sn.a, [], null, null),
            t.Sb(256, null, cn.a, sn.b, []),
            (n()(), t.hb(16777216, null, 0, 2, null, ne)),
            t.xb(
              6,
              16384,
              null,
              0,
              Zn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, Sn.b, [t.h]),
            (n()(),
            t.yb(
              8,
              0,
              null,
              0,
              4,
              "au3-init-view",
              [],
              null,
              null,
              null,
              Rn.b,
              Rn.a,
            )),
            t.xb(9, 49152, null, 0, Vn.a, [], null, null),
            (n()(),
            t.yb(
              10,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [["id", "QuelleWirdGeladen"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Fn.b,
              Fn.a,
            )),
            t.xb(
              11,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              12,
              245760,
              null,
              0,
              zn.a,
              [[6, R.a], Bn.a, t.h, t.l, t.D, [2, Un.a], [2, jn.a], [2, Yn.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 2, 0, "Screen:MEDIA_FPK_ERROR_NOTE"),
              n(e, 3, 0),
              n(
                e,
                6,
                0,
                t.Yb(
                  e,
                  6,
                  0,
                  t.Nb(e, 7).transform(l.mediaService.activeSource$),
                ),
              ),
              n(e, 11, 0, "QuelleWirdGeladen"),
              n(
                e,
                12,
                0,
                "Die Quelle wird geladen.\nBitte warten...",
                "QuelleWirdGeladen",
                5,
              ));
          },
          function (n, e) {
            n(
              e,
              10,
              0,
              t.Nb(e, 12).backgroundColor,
              t.Nb(e, 12).fixedNumberOfLines,
              t.Nb(e, 12).mayContainLatinCharsForArabic,
              t.Nb(e, 12).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function le(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-media-loading",
              [],
              null,
              null,
              null,
              ee,
              Jn,
            )),
            t.xb(1, 49152, null, 0, qn, [C.a], null, null),
          ],
          null,
          null,
        );
      }
      var te = t.ub("au3-fpk-media-loading", qn, le, {}, {}, []),
        ie = l("oWpa"),
        ae = l("yegR"),
        ue = l("eZMD"),
        oe = l("HD2x"),
        re = l("8j5Y"),
        se = l("Hg0e"),
        ce = l("88uq"),
        be = l("hNdd"),
        de = l("ocs5");
      class me {
        constructor(n, e, l, t) {
          ((this.mediaService = n),
            (this.mediaPlayerService = e),
            (this.regionCodeService = l),
            (this.mediaErrorTypeEnum = se.a),
            (this.pmlTempRestrictedLevelEnum = Nn.e),
            (this.pmlLevelToI18nHintText = Nn.d),
            (this.mediaSourceI18NEnum = Nn.c),
            (this.logger = t.getLogger("FpkMediaErrorComponent")),
            (this.currentErrorType$ = Object(f.b)(
              this.mediaService.activeSource$.pipe(Object(ce.filter)(x.wd)),
              this.mediaPlayerService.player$,
            ).pipe(
              Object(ce.filter)(
                ([n, e]) =>
                  n.hasErrorOrIsEmpty ||
                  be.b.hasPlaybackError(e, n.onlinemediaProvider),
              ),
              Object(ce.map)(([n, e]) =>
                n.hasErrorOrIsEmpty
                  ? n.errorType
                  : be.b.getPlaybackError(e, n.onlinemediaProvider),
              ),
              Object(S.a)(),
              Object(re.a)((n) =>
                this.logger.info(
                  `currentErrorType$: Show error text for "${n}"`,
                ),
              ),
            )),
            (this.provider$ = this.mediaService.activeSource$.pipe(
              Object(ce.filter)((n) => !!n && n.isOnlineMediaSource),
              Object(ce.map)((n) =>
                n && n.onlinemediaProvider ? n.onlinemediaProvider : void 0,
              ),
              Object(ce.filter)(x.wd),
              Object(S.a)(),
            )));
        }
        ngOnDestroy() {}
      }
      var pe = l("I7iC"),
        he = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{flex-direction:column}.media-error[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;height:100%}.media-error[_ngcontent-%COMP%]{width:100%;justify-content:center;align-items:center;text-align:center}.status-text-message[_ngcontent-%COMP%]{font-size:40px}",
            ],
          ],
          data: {},
        });
      function xe(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-fpk-title-line",
              [["secondaryDeveloperText", "Hinweis"]],
              [[2, "priority-shrink", null]],
              null,
              null,
              Mn.b,
              Mn.a,
            )),
            t.xb(
              1,
              49152,
              null,
              0,
              $n.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryNonI18nText: [1, "primaryNonI18nText"],
                primaryIdEnumType: [2, "primaryIdEnumType"],
                primaryId: [3, "primaryId"],
                secondaryDeveloperText: [4, "secondaryDeveloperText"],
              },
              null,
            ),
            t.Rb(2, 1),
            t.Rb(3, 1),
          ],
          function (n, e) {
            var l = e.component,
              i = t.Yb(
                e,
                1,
                0,
                n(e, 2, 0, t.Nb(e.parent, 0), e.context.mib3Let),
              ),
              a =
                (null == e.context.mib3Let
                  ? null
                  : e.context.mib3Let.deviceName) || void 0,
              u = l.mediaSourceI18NEnum,
              o = t.Yb(
                e,
                1,
                3,
                n(e, 3, 0, t.Nb(e.parent, 0), e.context.mib3Let),
              );
            n(e, 1, 0, i, a, u, o, "Hinweis");
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 1).isPriorityShrink);
          },
        );
      }
      function ge(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "Empty"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "Empty"),
              n(e, 2, 0, "6", "Es ist kein Medium eingelegt."));
          },
          null,
        );
      }
      function fe(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "NoPlayableFiles"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "NoPlayableFiles"),
              n(e, 2, 0, "6", "Quelle enth\xe4lt keine spielbaren Dateien."));
          },
          null,
        );
      }
      function ve(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "PlaybackStopped"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "PlaybackStopped"),
              n(
                e,
                2,
                0,
                "6",
                "Bitte w\xe4hlen Sie einen neuen Titel\naus der Mediathek.",
              ));
          },
          null,
        );
      }
      function ye(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "Unreadable"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "Unreadable"),
              n(e, 2, 0, "6", "Quelle ist nicht lesbar."));
          },
          null,
        );
      }
      function Le(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "NotSupported"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "NotSupported"),
              n(e, 2, 0, "6", "Ger\xe4t wird nicht untersch\xfctzt."));
          },
          null,
        );
      }
      function Oe(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "NotSupportedUsbHub"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "NotSupportedUsbHub"),
              n(
                e,
                2,
                0,
                "6",
                "Der angeschlossene USB Hub wird nicht\nunterst\xfctzt.",
              ));
          },
          null,
        );
      }
      function Se(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "DeviceNotAvailable"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "DeviceNotAvailable"),
              n(e, 2, 0, "6", "Die Quelle ist zurzeit nicht verf\xfcgbar."));
          },
          null,
        );
      }
      function Te(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "BluetoothDeactivated"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "BluetoothDeactivated"),
              n(e, 2, 0, "6", "Bluetooth Audioplayer deaktiviert."));
          },
          null,
        );
      }
      function _e(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "BluetoothDeactivatedClampOff"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "BluetoothDeactivatedClampOff"),
              n(
                e,
                2,
                0,
                "6",
                "Die Quelle ist nicht verf\xfcgbar, weil die Z\xfcndung aus ist.",
              ));
          },
          null,
        );
      }
      function Ne(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "BluetoothReconnect"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "BluetoothReconnect"),
              n(e, 2, 0, "6", "Bluetooth Audioplayer wartet auf reconnect."));
          },
          null,
        );
      }
      function Pe(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "NoBluetoothDevice"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "NoBluetoothDevice"),
              n(e, 2, 0, "6", "Es ist kein Ger\xe4t verbunden."));
          },
          null,
        );
      }
      function Ce(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "Overcurrent"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "Overcurrent"),
              n(
                e,
                2,
                0,
                "6",
                "Das externe Ger\xe4t weist ein Stromversorgungsproblem auf\nund wird nicht unterst\xfctzt.",
              ));
          },
          null,
        );
      }
      function Ee(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "Overtemp"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "Overtemp"),
              n(
                e,
                2,
                0,
                "6",
                "Die Temperatur des Laufwerks ist zu hoch.\nEs ist deshalb nicht verf\xfcgbar.",
              ));
          },
          null,
        );
      }
      function Ie(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              5,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "WrongRegionCodeChange"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              Yn.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(3, { changes: 0 }),
            t.xb(
              4,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
                ttInterpolateParams: [2, "ttInterpolateParams"],
              },
              null,
            ),
            t.Qb(5, { changes: 0 }),
          ],
          function (n, e) {
            n(e, 1, 0, "WrongRegionCodeChange");
            var l = n(
              e,
              3,
              0,
              e.parent.parent.context.mib3Let.regionCodeRemainingChanges,
            );
            n(e, 2, 0, l);
            var t = n(
              e,
              5,
              0,
              e.parent.parent.context.mib3Let.regionCodeRemainingChanges,
            );
            n(
              e,
              4,
              0,
              "6",
              "Das Abspielen der DVD ist nicht m\xf6glich,\nweil deren Regionalcode nicht mit der Systemeinstellung\n\xfcbereinstimmt. Die Einstellung kann noch\n {{changes}}-mal durch Ihren Audi-H\xe4ndler ge\xe4ndert werden",
              t,
            );
          },
          null,
        );
      }
      function we(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "WrongRegionCodeNoChange"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "WrongRegionCodeNoChange"),
              n(
                e,
                2,
                0,
                "6",
                "Das Abspielen der DVD ist nicht m\xf6glich,\nweil deren Regionalcode nicht mit der Systemeinstellung\n\xfcbereinstimmt. Die Einstellung kann\nnicht mehr ge\xe4ndert werden.",
              ));
          },
          null,
        );
      }
      function De(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "media-error"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), t.hb(16777216, null, null, 1, null, Ie)),
            t.xb(
              2,
              16384,
              null,
              0,
              Sn.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(),
            t.hb(0, [["regionCodeNoRemainingChanges", 2]], null, 0, null, we)),
          ],
          function (n, e) {
            n(
              e,
              2,
              0,
              e.parent.context.mib3Let.regionCodeRemainingChanges > 0,
              t.Nb(e, 3),
            );
          },
          null,
        );
      }
      function Ae(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-instruction-text",
              [
                ["class", "status-text-message"],
                ["id", "PmlRestricted"],
              ],
              null,
              null,
              null,
              ue.b,
              ue.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              oe.a,
              [],
              {
                primaryTextId: [0, "primaryTextId"],
                primaryTextIdEnum: [1, "primaryTextIdEnum"],
                primaryDeveloperText: [2, "primaryDeveloperText"],
                primaryFixedNumberOfLines: [3, "primaryFixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, "PmlRestricted"),
              n(
                e,
                2,
                0,
                l.pmlLevelToI18nHintText[
                  e.parent.context.mib3Let.tempPmlBlockingLevel
                ],
                l.pmlTempRestrictedLevelEnum,
                l.pmlLevelToI18nHintText[
                  e.parent.context.mib3Let.tempPmlBlockingLevel
                ],
                6,
              ));
          },
          null,
        );
      }
      function ke(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "PmlBlocked"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "PmlBlocked"),
              n(
                e,
                2,
                0,
                "6",
                "Die Kindersicherung verhindert das Abspielen dieser DVD.\n\xc4ndern Sie die Sicherheitsstufe zum Abspielen.",
              ));
          },
          null,
        );
      }
      function Me(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "AndroidAutoActive"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "AndroidAutoActive"),
              n(
                e,
                2,
                0,
                "6",
                "AndroidAuto ist aktiv. M\xf6chten Sie zu AndroidAuto wechseln\noder die Funktion deaktivieren, um die Medienwiedergabe im\nMMI zu nutzen?",
              ));
          },
          null,
        );
      }
      function $e(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "NoLicence"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "NoLicence"),
              n(
                e,
                2,
                0,
                "6",
                "Die Funktion ist zur Zeit nicht verf\xfcgbar.\nEs gibt keine Lizenz f\xfcr Onlinemedien oder\nIhre Lizenz f\xfcr Onlinemedien ist abgelaufen.",
              ));
          },
          null,
        );
      }
      function Re(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "BlockedByPrivacy"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "BlockedByPrivacy"),
              n(
                e,
                2,
                0,
                "6",
                "Aufgrund ihrer Privatsph\xe4reeinstellung stehen Ihnen\n Onlinemedien nicht zur Verf\xfcgung.\nErlauben Sie die Datenkategorie Basisdaten,\num die Funktion nutzen zu k\xf6nnen.",
              ));
          },
          null,
        );
      }
      function Ve(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "BlockedByDeactivation"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "BlockedByDeactivation"),
              n(
                e,
                2,
                0,
                "6",
                "Dienst Onlinemedien wurde bei myAudi deaktiviert.\n Aktivieren Sie diesen Dienst bei myAudi um ihn im Fahrzeug zu nutzen.",
              ));
          },
          null,
        );
      }
      function Fe(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "Offline"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "Offline"),
              n(e, 2, 0, "6", "Es ist keine Datenverbindung verf\xfcgbar."));
          },
          null,
        );
      }
      function ze(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "NoDataOutOfRegion"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "NoDataOutOfRegion"),
              n(
                e,
                2,
                0,
                "6",
                "In diesem Netzwerk oder in diesem Land sind keine Datenpakete verf\xfcgbar.",
              ));
          },
          null,
        );
      }
      function Be(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "NoDataFallback"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "NoDataFallback"),
              n(
                e,
                2,
                0,
                "6",
                "In Ihrem aktuellen Netzwerk\n sind Ihre Datenpakete nicht nutzbar.",
              ));
          },
          null,
        );
      }
      function Ue(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "EndOfData"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "EndOfData"),
              n(
                e,
                2,
                0,
                "6",
                "Sie haben kein verf\xfcgbares Datenpaket.\nUm Onlinemedien nutzen zu k\xf6nnen, kaufen Sie ein neues\n Datenpaket.\n ",
              ));
          },
          null,
        );
      }
      function je(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "EndOfDataNoPlan"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "EndOfDataNoPlan"),
              n(
                e,
                2,
                0,
                "6",
                "Sie haben kein verf\xfcgbares Datenpaket.\nUm Onlinemedien nutzen zu k\xf6nnen, kaufen Sie \nein neues Datenpaket \xfcber [App/Portal].\n Um Online Radio nutzen zu k\xf6nnen,\n kaufen Sie bitte Datenpakete f\xfcr die eSIM.",
              ));
          },
          null,
        );
      }
      function Ye(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "ProviderUnreachable"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "ProviderUnreachable"),
              n(
                e,
                2,
                0,
                "6",
                "Der Onlinemedien Provider ist im Moment nicht erreichbar.",
              ));
          },
          null,
        );
      }
      function He(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "NoData"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "NoData"),
              n(
                e,
                2,
                0,
                "6",
                "Um Onlinemedien nutzen zu k\xf6nnen,\n stellen Sie bitte eine Datenverbindung her.\nBitte stecken Sie eine SIM Karte.\nAlle Audi connect Dienst nutzen dann\n die Datenverbindung dieser SIM Karte.",
              ));
          },
          null,
        );
      }
      function Ke(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "LoginAccountInvalid"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "LoginAccountInvalid"),
              n(
                e,
                2,
                0,
                "6",
                "Ihre Anmeldedaten sind falsch. Bitte versuchen Sie es\nerneut.",
              ));
          },
          null,
        );
      }
      function Ge(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "LoginQrExpired"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "LoginQrExpired"),
              n(
                e,
                2,
                0,
                "6",
                "Ihr QR Code ist nicht mehr g\xfcltig.\nBitte versuchen Sie es erneut.",
              ));
          },
          null,
        );
      }
      function We(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              5,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "LoginAccountInactive"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              Yn.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(3, { providerName: 0 }),
            t.xb(
              4,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
                ttInterpolateParams: [2, "ttInterpolateParams"],
              },
              null,
            ),
            t.Qb(5, { providerName: 0 }),
          ],
          function (n, e) {
            n(e, 1, 0, "LoginAccountInactive");
            var l = n(
              e,
              3,
              0,
              null == e.parent.context.mib3Let ||
                null == e.parent.context.mib3Let.provider
                ? null
                : e.parent.context.mib3Let.provider.name,
            );
            n(e, 2, 0, l);
            var t = n(
              e,
              5,
              0,
              null == e.parent.context.mib3Let ||
                null == e.parent.context.mib3Let.provider
                ? null
                : e.parent.context.mib3Let.provider.name,
            );
            n(
              e,
              4,
              0,
              "6",
              "Ihr {{providerName}} Account ist inaktiv.\nBitte \xfcberpr\xfcfen Sie Ihren Account.",
              t,
            );
          },
          null,
        );
      }
      function Qe(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "LoginGeneral"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "LoginGeneral"),
              n(
                e,
                2,
                0,
                "6",
                "W\xe4hrend der Anmeldung ist ein Fehler aufgetreten.\nBitte versuchen Sie es erneut.",
              ));
          },
          null,
        );
      }
      function Xe(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              5,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "LoginPremiumRequiered"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              Yn.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(3, { providerName: 0 }),
            t.xb(
              4,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
                ttInterpolateParams: [2, "ttInterpolateParams"],
              },
              null,
            ),
            t.Qb(5, { providerName: 0 }),
          ],
          function (n, e) {
            n(e, 1, 0, "LoginPremiumRequiered");
            var l = n(
              e,
              3,
              0,
              null == e.parent.context.mib3Let ||
                null == e.parent.context.mib3Let.provider
                ? null
                : e.parent.context.mib3Let.provider.name,
            );
            n(e, 2, 0, l);
            var t = n(
              e,
              5,
              0,
              null == e.parent.context.mib3Let ||
                null == e.parent.context.mib3Let.provider
                ? null
                : e.parent.context.mib3Let.provider.name,
            );
            n(
              e,
              4,
              0,
              "6",
              "Ihr {{providerName}} Account ben\xf6tigt ein Upgrade.",
              t,
            );
          },
          null,
        );
      }
      function Ze(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              5,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "AccountInvalid"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              Yn.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(3, { providerName: 0 }),
            t.xb(
              4,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
                ttInterpolateParams: [2, "ttInterpolateParams"],
              },
              null,
            ),
            t.Qb(5, { providerName: 0 }),
          ],
          function (n, e) {
            n(e, 1, 0, "AccountInvalid");
            var l = n(
              e,
              3,
              0,
              null == e.parent.context.mib3Let ||
                null == e.parent.context.mib3Let.provider
                ? null
                : e.parent.context.mib3Let.provider.name,
            );
            n(e, 2, 0, l);
            var t = n(
              e,
              5,
              0,
              null == e.parent.context.mib3Let ||
                null == e.parent.context.mib3Let.provider
                ? null
                : e.parent.context.mib3Let.provider.name,
            );
            n(
              e,
              4,
              0,
              "6",
              "Ihr {{providerName}} Account ist nicht mehr g\xfcltig.",
              t,
            );
          },
          null,
        );
      }
      function qe(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "ProviderSpecific"],
                ["maxNumberOfLines", "6"],
                ["ttIgnore", ""],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 16384, null, 0, jn.a, [], null, null),
            t.xb(
              3,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                nonI18nText: [1, "nonI18nText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "ProviderSpecific"),
              n(
                e,
                3,
                0,
                "6",
                null == e.parent.context.mib3Let ||
                  null == e.parent.context.mib3Let.provider ||
                  null ==
                    e.parent.context.mib3Let.provider.providerSpecificError
                  ? null
                  : e.parent.context.mib3Let.provider.providerSpecificError
                      .errorText,
              ));
          },
          null,
        );
      }
      function Je(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "LoggedOut"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "LoggedOut"),
              n(
                e,
                2,
                0,
                "6",
                "Sie sind ausgeloggt.\nBitte loggen Sie sich wieder in Ihren Provider ein.",
              ));
          },
          null,
        );
      }
      function nl(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "OmErrorGeneric"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "OmErrorGeneric"),
              n(e, 2, 0, "6", "Es ist ein Fehler aufgetreten."));
          },
          null,
        );
      }
      function el(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "AlexaLoggedOut"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "AlexaLoggedOut"),
              n(
                e,
                2,
                0,
                "6",
                "Sie sind ausgeloggt.\nBitte loggen Sie sich wieder in Amazon Alexa ein.",
              ));
          },
          null,
        );
      }
      function ll(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "AlexaOnlyViaSds"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "AlexaOnlyViaSds"),
              n(e, 2, 0, "6", "Alexa ist nur per Sprache bedienbar"));
          },
          null,
        );
      }
      function tl(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "AlexaLoginRunning"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "AlexaLoginRunning"),
              n(e, 2, 0, "6", "Alexa wird gerade eingeloggt..."));
          },
          null,
        );
      }
      function il(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "AlexaNoConnection"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "AlexaNoConnection"),
              n(
                e,
                2,
                0,
                "6",
                "Die Verbindung zu Alexa is unterbrochen.\nBitte versuchen Sie es sp\xe4ter erneut.",
              ));
          },
          null,
        );
      }
      function al(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "AlexaEsimNoData"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "AlexaEsimNoData"),
              n(
                e,
                2,
                0,
                "6",
                "Das Datenvolumen der eSIM ist leer.\nStellen Sie eine Datenverbindung her,\num Alexa nutzen zu k\xf6nnen.",
              ));
          },
          null,
        );
      }
      function ul(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "status-text-message"],
                ["id", "UnknownError"],
                ["maxNumberOfLines", "6"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "UnknownError"),
              n(e, 2, 0, "6", "Unbekannter Fehler."));
          },
          null,
        );
      }
      function ol(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              86,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            t.xb(
              1,
              16384,
              null,
              0,
              Sn.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            t.Pb(131072, Sn.b, [t.h]),
            (n()(), t.hb(16777216, null, null, 1, null, ge)),
            t.xb(
              4,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, fe)),
            t.xb(
              6,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, ve)),
            t.xb(
              8,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, ye)),
            t.xb(
              10,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Le)),
            t.xb(
              12,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Oe)),
            t.xb(
              14,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Se)),
            t.xb(
              16,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Te)),
            t.xb(
              18,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, _e)),
            t.xb(
              20,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Ne)),
            t.xb(
              22,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Pe)),
            t.xb(
              24,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Ce)),
            t.xb(
              26,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Ee)),
            t.xb(
              28,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, De)),
            t.xb(
              30,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Ae)),
            t.xb(
              32,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, ke)),
            t.xb(
              34,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Me)),
            t.xb(
              36,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, $e)),
            t.xb(
              38,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Re)),
            t.xb(
              40,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Ve)),
            t.xb(
              42,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Fe)),
            t.xb(
              44,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, ze)),
            t.xb(
              46,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Be)),
            t.xb(
              48,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Ue)),
            t.xb(
              50,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, je)),
            t.xb(
              52,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Ye)),
            t.xb(
              54,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, He)),
            t.xb(
              56,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Ke)),
            t.xb(
              58,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Ge)),
            t.xb(
              60,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, We)),
            t.xb(
              62,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Qe)),
            t.xb(
              64,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Xe)),
            t.xb(
              66,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Ze)),
            t.xb(
              68,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, qe)),
            t.xb(
              70,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Je)),
            t.xb(
              72,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, nl)),
            t.xb(
              74,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, el)),
            t.xb(
              76,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, ll)),
            t.xb(
              78,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, tl)),
            t.xb(
              80,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, il)),
            t.xb(
              82,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, al)),
            t.xb(
              84,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, ul)),
            t.xb(86, 16384, null, 0, Sn.q, [t.P, t.L, Sn.o], null, null),
            (n()(), t.hb(0, null, null, 0)),
          ],
          function (n, e) {
            var l = e.component;
            (n(
              e,
              1,
              0,
              t.Yb(e, 1, 0, t.Nb(e, 2).transform(l.currentErrorType$)),
            ),
              n(e, 4, 0, l.mediaErrorTypeEnum.EMPTY_SOURCE),
              n(e, 6, 0, l.mediaErrorTypeEnum.NO_PLAYABLE_FILES),
              n(e, 8, 0, l.mediaErrorTypeEnum.PLAYBACK_STOPPED),
              n(e, 10, 0, l.mediaErrorTypeEnum.UNREADABLE),
              n(e, 12, 0, l.mediaErrorTypeEnum.NOT_SUPPORTED),
              n(e, 14, 0, l.mediaErrorTypeEnum.NOT_SUPPORTED_USB_HUB),
              n(e, 16, 0, l.mediaErrorTypeEnum.DEVICE_NOT_AVAILABLE),
              n(e, 18, 0, l.mediaErrorTypeEnum.BLUETOOTH_DEACTIVATED),
              n(e, 20, 0, l.mediaErrorTypeEnum.BLUETOOTH_DEACTIVATED_CLAMPSOFF),
              n(e, 22, 0, l.mediaErrorTypeEnum.BLUETOOTH_RECONNECTING),
              n(e, 24, 0, l.mediaErrorTypeEnum.NO_BLUETOOTH_DEVICE),
              n(e, 26, 0, l.mediaErrorTypeEnum.OVERCURRENT),
              n(e, 28, 0, l.mediaErrorTypeEnum.OVERTEMP),
              n(e, 30, 0, l.mediaErrorTypeEnum.INVALID_REGIONCODE),
              n(e, 32, 0, l.mediaErrorTypeEnum.PML_RESTRICTED),
              n(e, 34, 0, l.mediaErrorTypeEnum.PML_BLOCKED),
              n(e, 36, 0, l.mediaErrorTypeEnum.SPI_ANDROID_AUTO_ACTIVE),
              n(e, 38, 0, l.mediaErrorTypeEnum.NO_LICENCE),
              n(e, 40, 0, l.mediaErrorTypeEnum.BLOCKED_BY_PRIVACY),
              n(e, 42, 0, l.mediaErrorTypeEnum.BLOCKED_BY_DEACTIVATION),
              n(e, 44, 0, l.mediaErrorTypeEnum.OFFLINE),
              n(e, 46, 0, l.mediaErrorTypeEnum.NO_DATA_OUT_OF_REGION),
              n(e, 48, 0, l.mediaErrorTypeEnum.NO_DATA_FALLBACK),
              n(e, 50, 0, l.mediaErrorTypeEnum.END_OF_DATA),
              n(e, 52, 0, l.mediaErrorTypeEnum.END_OF_DATA_NO_PLAN),
              n(e, 54, 0, l.mediaErrorTypeEnum.PROVIDER_UNREACHABLE),
              n(e, 56, 0, l.mediaErrorTypeEnum.NO_DATA),
              n(e, 58, 0, l.mediaErrorTypeEnum.OM_LOGIN_ERROR_ACCOUNT_INVALID),
              n(e, 60, 0, l.mediaErrorTypeEnum.OM_LOGIN_ERROR_QR_CODE_EXPIRED),
              n(e, 62, 0, l.mediaErrorTypeEnum.OM_LOGIN_ERROR_ACCOUNT_INACTIVE),
              n(e, 64, 0, l.mediaErrorTypeEnum.OM_LOGIN_ERROR_GENERAL),
              n(e, 66, 0, l.mediaErrorTypeEnum.OM_LOGIN_ERROR_PREMIUM_REQUIRED),
              n(e, 68, 0, l.mediaErrorTypeEnum.OM_ERROR_ACCOUNT_INVALID),
              n(e, 70, 0, l.mediaErrorTypeEnum.OM_ERROR_PROVIDER_SPECIFIC),
              n(e, 72, 0, l.mediaErrorTypeEnum.OM_ERROR_LOGGED_OUT),
              n(e, 74, 0, l.mediaErrorTypeEnum.OM_ERROR_GENERIC),
              n(e, 76, 0, l.mediaErrorTypeEnum.ALEXA_LOGGED_OUT),
              n(e, 78, 0, l.mediaErrorTypeEnum.ALEXA_ONLY_VIA_SDS),
              n(e, 80, 0, l.mediaErrorTypeEnum.ALEXA_LOGIN_RUNNING),
              n(e, 82, 0, l.mediaErrorTypeEnum.ALEXA_NO_CONNECTION),
              n(e, 84, 0, l.mediaErrorTypeEnum.ALEXA_ESIM_NO_DATA));
          },
          null,
        );
      }
      function rl(n) {
        return t.ac(
          2,
          [
            t.Pb(0, Xn.a, [b.a]),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              13,
              "au3-fpk-screen",
              [["id", "Screen:MEDIA_FPK_ERROR"]],
              null,
              null,
              null,
              rn.b,
              rn.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 114688, null, 0, sn.a, [], null, null),
            t.Sb(256, null, cn.a, sn.b, []),
            (n()(), t.hb(16777216, null, 0, 2, null, xe)),
            t.xb(
              6,
              16384,
              null,
              0,
              Zn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, Sn.b, [t.h]),
            (n()(),
            t.yb(
              8,
              0,
              null,
              0,
              6,
              "div",
              [["class", "media-error"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), t.hb(16777216, null, null, 5, null, ol)),
            t.xb(
              10,
              16384,
              null,
              0,
              Zn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, Sn.b, [t.h]),
            t.Pb(131072, Sn.b, [t.h]),
            t.Pb(131072, Sn.b, [t.h]),
            t.Qb(14, {
              tempPmlBlockingLevel: 0,
              regionCodeRemainingChanges: 1,
              provider: 2,
            }),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 2, 0, "Screen:MEDIA_FPK_ERROR"),
              n(e, 3, 0),
              n(
                e,
                6,
                0,
                t.Yb(
                  e,
                  6,
                  0,
                  t.Nb(e, 7).transform(l.mediaService.activeSource$),
                ),
              ));
            var i = n(
              e,
              14,
              0,
              t.Yb(
                e,
                10,
                0,
                t
                  .Nb(e, 11)
                  .transform(l.mediaPlayerService.tempPmlBlockingLevel$),
              ),
              t.Yb(
                e,
                10,
                0,
                t
                  .Nb(e, 12)
                  .transform(
                    l.regionCodeService.regionCodeChangesRemainingDvd$,
                  ),
              ),
              t.Yb(e, 10, 0, t.Nb(e, 13).transform(l.provider$)),
            );
            n(e, 10, 0, i);
          },
          null,
        );
      }
      function sl(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-media-error",
              [],
              null,
              null,
              null,
              rl,
              he,
            )),
            t.xb(1, 180224, null, 0, me, [C.a, pe.a, de.a, b.a], null, null),
          ],
          null,
          null,
        );
      }
      var cl = t.ub("au3-fpk-media-error", me, sl, {}, {}, []),
        bl = l("HVUF"),
        dl = l("B3Zb"),
        ml = l("EOxa"),
        pl = l("Kds7"),
        hl = l("DElP"),
        xl = (l("E10J"), l("RJia")),
        gl = l("VlZA"),
        fl = l("QL04");
      class vl extends fl.a {
        constructor() {
          (super(...arguments),
            (this.iconCategoryEnum = x.Z),
            (this.titleI18nEnum = gl.c),
            (this.artistI18nEnum = xl.b),
            (this.albumI18nEnum = xl.a),
            (this.notPlayableReasonEnum = xl.l),
            (this.active = !1),
            (this.isOneLineLayout = !1));
        }
        set entry(n) {
          (this.itemUpdated(n), (this.item = n));
        }
        get isTwoLineLayout() {
          return !this.isOneLineLayout;
        }
        hasCoverChanged(n) {
          return !this.item || !n || this.item.image !== n.image;
        }
      }
      var yl = t.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;flex-direction:row;margin:3px 0}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.oneline[_nghost-%COMP%], .twoline[_nghost-%COMP%]{height:93px}.cover[_ngcontent-%COMP%]{flex-shrink:0}.title-info__content-area[_ngcontent-%COMP%]{padding:3px 15px 5px}.fpk-stage-big[_nghost-%COMP%]   .cover[_ngcontent-%COMP%], .fpk-stage-big   [_nghost-%COMP%]   .cover[_ngcontent-%COMP%]{display:block;margin-left:20px;margin-right:15px;margin-top:8px}.fpk-stage-big[_nghost-%COMP%]   .title-info[_ngcontent-%COMP%], .fpk-stage-big   [_nghost-%COMP%]   .title-info[_ngcontent-%COMP%]{padding-left:15px}.fpk-stage-small[_nghost-%COMP%]   .cover[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .cover[_ngcontent-%COMP%]{display:none}.fpk-stage-small[_nghost-%COMP%]   .title-info[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .title-info[_ngcontent-%COMP%]{padding-left:15px}.component-layout-arabic   .fpk-stage-big   [_nghost-%COMP%]   .title-info[_ngcontent-%COMP%]{padding-left:0;padding-right:15px}.component-layout-arabic   .fpk-stage-big   [_nghost-%COMP%]   .cover[_ngcontent-%COMP%]{margin-left:15px;margin-right:20px;margin-top:8px}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{flex-direction:row}.component-layout-latin[_nghost-%COMP%]   .title-info[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .title-info[_ngcontent-%COMP%]{padding-left:15px;padding-right:0}.component-layout-latin[_nghost-%COMP%]   .title-info__top[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .title-info__top[_ngcontent-%COMP%]{flex-direction:row}.component-layout-latin[_nghost-%COMP%]   .title-info__bottom[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .title-info__bottom[_ngcontent-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .title-info__main-text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .title-info__main-text[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .title-info__sub-text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .title-info__sub-text[_ngcontent-%COMP%]{text-align:start}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{flex-direction:row-reverse}.component-layout-arabic[_nghost-%COMP%]   .title-info[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .title-info[_ngcontent-%COMP%]{padding-right:15px;padding-left:0}.component-layout-arabic[_nghost-%COMP%]   .title-info__top[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .title-info__top[_ngcontent-%COMP%]{flex-direction:row-reverse}.component-layout-arabic[_nghost-%COMP%]   .title-info__bottom[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .title-info__bottom[_ngcontent-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .title-info__main-text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .title-info__main-text[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .title-info__sub-text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .title-info__sub-text[_ngcontent-%COMP%]{text-align:end}.title-info[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;flex:1 1 auto;min-width:0}.title-info__top[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.title-info__icon[_ngcontent-%COMP%]{width:40px;height:40px}.title-info__top--oneline[_ngcontent-%COMP%]{padding-top:21px}.title-info__top--twoline[_ngcontent-%COMP%]{padding-bottom:4px}.title-info__bottom[_ngcontent-%COMP%]{font-size:28px;line-height:35px}.title-info__bottom[_ngcontent-%COMP%], .title-info__main-text[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.title-info__main-text[_ngcontent-%COMP%]{font-size:38px;height:47px}.title-info__sub-text[_ngcontent-%COMP%]{display:inline-block;max-width:100%}",
          ],
        ],
        data: {},
      });
      function Ll(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "title-info__icon"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
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
              bl.b,
              bl.a,
            )),
            t.xb(
              2,
              4243456,
              null,
              0,
              dl.b,
              [b.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            n(
              e,
              2,
              0,
              null == l.item ? null : l.item.statusIconFileName,
              l.iconCategoryEnum.List,
            );
          },
          function (n, e) {
            n(e, 1, 0, t.Nb(e, 2).iconComponentHidden);
          },
        );
      }
      function Ol(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "title-info__sub-text title-info__artist"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Fn.b,
              Fn.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              3,
              245760,
              null,
              0,
              zn.a,
              [[6, R.a], Bn.a, t.h, t.l, t.D, [2, Un.a], [2, jn.a], [2, Yn.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            (n()(),
            t.yb(
              4,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                [
                  "class",
                  "title-info__sub-text title-info__separator-artist-album",
                ],
                ["id", "ArtistAlbumSeparator"],
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
              Fn.b,
              Fn.a,
            )),
            t.xb(
              5,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(6, 16384, null, 0, jn.a, [], null, null),
            t.xb(
              7,
              245760,
              null,
              0,
              zn.a,
              [[6, R.a], Bn.a, t.h, t.l, t.D, [2, Un.a], [2, jn.a], [2, Yn.a]],
              {
                id: [0, "id"],
                fixedNumberOfLines: [1, "fixedNumberOfLines"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
            (n()(),
            t.yb(
              8,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "title-info__sub-text title-info__album"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Fn.b,
              Fn.a,
            )),
            t.xb(
              9,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              10,
              245760,
              null,
              0,
              zn.a,
              [[6, R.a], Bn.a, t.h, t.l, t.D, [2, Un.a], [2, jn.a], [2, Yn.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(
              e,
              2,
              0,
              null == l.item ? null : l.item.artistInternationalKey,
              l.artistI18nEnum,
            ),
              n(
                e,
                3,
                0,
                "Unknown Artist",
                null == l.item ? null : l.item.artistInternationalKey,
                1,
                null == l.item ? null : l.item.artistOriginalText,
              ),
              n(e, 5, 0, "ArtistAlbumSeparator"),
              n(e, 7, 0, "ArtistAlbumSeparator", 1, " - "),
              n(
                e,
                9,
                0,
                null == l.item ? null : l.item.albumInternationalKey,
                l.albumI18nEnum,
              ),
              n(
                e,
                10,
                0,
                "Unknown Album",
                null == l.item ? null : l.item.albumInternationalKey,
                1,
                null == l.item ? null : l.item.albumOriginalText,
              ));
          },
          function (n, e) {
            (n(
              e,
              1,
              0,
              t.Nb(e, 3).backgroundColor,
              t.Nb(e, 3).fixedNumberOfLines,
              t.Nb(e, 3).mayContainLatinCharsForArabic,
              t.Nb(e, 3).shortenWithEllipsisForArabic,
            ),
              n(
                e,
                4,
                0,
                t.Nb(e, 7).backgroundColor,
                t.Nb(e, 7).fixedNumberOfLines,
                t.Nb(e, 7).mayContainLatinCharsForArabic,
                t.Nb(e, 7).shortenWithEllipsisForArabic,
              ),
              n(
                e,
                8,
                0,
                t.Nb(e, 10).backgroundColor,
                t.Nb(e, 10).fixedNumberOfLines,
                t.Nb(e, 10).mayContainLatinCharsForArabic,
                t.Nb(e, 10).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function Sl(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "title-info__sub-text"],
                ["id", "NotPlayable"],
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
              Fn.b,
              Fn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 16384, null, 0, jn.a, [], null, null),
            t.xb(
              3,
              245760,
              null,
              0,
              zn.a,
              [[6, R.a], Bn.a, t.h, t.l, t.D, [2, Un.a], [2, jn.a], [2, Yn.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, "NotPlayable"),
              n(
                e,
                3,
                0,
                "NotPlayable",
                null == l.item ? null : l.item.notPlayableText,
              ));
          },
          function (n, e) {
            n(
              e,
              0,
              0,
              t.Nb(e, 3).backgroundColor,
              t.Nb(e, 3).fixedNumberOfLines,
              t.Nb(e, 3).mayContainLatinCharsForArabic,
              t.Nb(e, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Tl(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "title-info__sub-text"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Fn.b,
              Fn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              zn.a,
              [[6, R.a], Bn.a, t.h, t.l, t.D, [2, Un.a], [2, jn.a], [2, Yn.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(
              e,
              1,
              0,
              null == l.item ? null : l.item.error,
              l.notPlayableReasonEnum,
            ),
              n(
                e,
                2,
                0,
                null == l.item ? null : l.item.error,
                null == l.item ? null : l.item.error,
                1,
              ));
          },
          function (n, e) {
            n(
              e,
              0,
              0,
              t.Nb(e, 2).backgroundColor,
              t.Nb(e, 2).fixedNumberOfLines,
              t.Nb(e, 2).mayContainLatinCharsForArabic,
              t.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function _l(n) {
        return t.ac(
          0,
          [
            (n()(), t.hb(16777216, null, null, 1, null, Sl)),
            t.xb(
              1,
              16384,
              null,
              0,
              Sn.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), t.hb(0, [["errorText", 2]], null, 0, null, Tl)),
          ],
          function (n, e) {
            var l = e.component;
            n(
              e,
              1,
              0,
              null == l.item ? null : l.item.hasNotPlayableText,
              t.Nb(e, 2),
            );
          },
          null,
        );
      }
      function Nl(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "title-info__bottom"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), t.hb(16777216, null, null, 1, null, Ol)),
            t.xb(
              2,
              16384,
              null,
              0,
              Sn.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), t.hb(0, [["secondLineError", 2]], null, 0, null, _l)),
          ],
          function (n, e) {
            var l = e.component;
            n(e, 2, 0, !(null != l.item && l.item.hasError), t.Nb(e, 3));
          },
          null,
        );
      }
      function Pl(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon-with-fallback",
              [
                ["au3ImageLockingCategory", ""],
                ["class", "cover"],
              ],
              [
                [2, "cover--twoline", null],
                [2, "icon-component--hidden", null],
                [2, "lock-state-hidden", null],
                [2, "lock-state-faded", null],
              ],
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(
              1,
              4964352,
              null,
              0,
              pl.a,
              [t.h, t.z, b.a],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                fallbackFileName: [2, "fallbackFileName"],
              },
              null,
            ),
            t.xb(2, 212992, null, 0, hl.a, [yn.i, [2, yn.a], t.h], null, null),
            (n()(),
            t.yb(
              3,
              0,
              null,
              null,
              13,
              "div",
              [
                ["au3C2Cursor", ""],
                ["class", "title-info"],
              ],
              [
                [2, "c2-cursor", null],
                [2, "state-active", null],
              ],
              null,
              null,
              null,
              null,
            )),
            t.xb(
              4,
              16384,
              null,
              0,
              q.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
            t.xb(
              5,
              16384,
              null,
              0,
              on.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
            (n()(),
            t.yb(
              6,
              0,
              null,
              null,
              10,
              "div",
              [["class", "title-info__content-area"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              7,
              0,
              null,
              null,
              7,
              "div",
              [["class", "title-info__top"]],
              [
                [2, "title-info__top--oneline", null],
                [2, "title-info__top--twoline", null],
              ],
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              8,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [["class", "title-info__main-text title-info__title-name"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Fn.b,
              Fn.a,
            )),
            t.xb(
              9,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              10,
              16384,
              null,
              0,
              Yn.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(11, { number: 0 }),
            t.xb(
              12,
              245760,
              null,
              0,
              zn.a,
              [[6, R.a], Bn.a, t.h, t.l, t.D, [2, Un.a], [2, jn.a], [2, Yn.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Ll)),
            t.xb(
              14,
              16384,
              null,
              0,
              Sn.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Nl)),
            t.xb(
              16,
              16384,
              null,
              0,
              Sn.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(
              e,
              1,
              0,
              l.showCover || !l.delayCoverLoading
                ? null == l.item
                  ? null
                  : l.item.coverUrl
                : "/icons/listicons/E064_media_alben.webp",
              l.iconCategoryEnum.FpkList,
              l.delayCoverLoading
                ? "/icons/listicons/E064_media_alben.webp"
                : "",
            ),
              n(e, 2, 0),
              n(e, 4, 0, l.active),
              n(e, 5, 0, l.active),
              n(
                e,
                9,
                0,
                null == l.item ? null : l.item.titleInternationalTextIdKey,
                l.titleI18nEnum,
              ));
            var t = n(
              e,
              11,
              0,
              null != l.item && l.item.titleAdditionalText
                ? null == l.item
                  ? null
                  : l.item.titleAdditionalText
                : "",
            );
            (n(e, 10, 0, t),
              n(
                e,
                12,
                0,
                null == l.item ? null : l.item.titleInternationalTextIdKey,
                null == l.item ? null : l.item.titleInternationalTextIdKey,
                (null == l.item ? null : l.item.titleOriginalText) || void 0,
              ),
              n(
                e,
                14,
                0,
                (null == l.item ? null : l.item.isOnlineTitle) ||
                  (null == l.item ? null : l.item.hasError),
              ),
              n(e, 16, 0, !l.isOneLineLayout));
          },
          function (n, e) {
            var l = e.component;
            (n(
              e,
              0,
              0,
              !l.isOneLineLayout,
              t.Nb(e, 1).iconComponentHidden,
              t.Nb(e, 2).hide,
              t.Nb(e, 2).fade,
            ),
              n(e, 3, 0, t.Nb(e, 4).mib3Active, t.Nb(e, 5).mib3Active),
              n(e, 7, 0, l.isOneLineLayout, !l.isOneLineLayout),
              n(
                e,
                8,
                0,
                t.Nb(e, 12).backgroundColor,
                t.Nb(e, 12).fixedNumberOfLines,
                t.Nb(e, 12).mayContainLatinCharsForArabic,
                t.Nb(e, 12).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      var Cl = l("ROBh"),
        El = l("0Woy"),
        Il = l("mWib"),
        wl = l("TLy2");
      class Dl {
        constructor(n, e, l, i) {
          ((this.mediaPlayerService = n),
            (this.mediaService = e),
            (this.timeService = l),
            (this.showNPS = new t.n()),
            (this.listCursorSizeEnum = x.pb),
            (this.listData$$ = new g.a(1)),
            (this.isSingleLineLayout = !1),
            (this.freezeStart = 0),
            (this.maxFreezeDuration = 500),
            (this.destroyed$$ = new g.a(1)),
            (this.delayCoverLoading = !1),
            (this.logger = i.getLogger("media.FpkPlayviewList")));
        }
        ngOnInit() {
          (this.mediaPlayerService.player$
            .pipe(
              Object(L.a)(
                (n) =>
                  !(!n || !n.selectionType) &&
                  n.selectionType === xl.x.SINGLEALBUM,
              ),
              Object(S.a)(),
              Object(O.a)(this.destroyed$$),
            )
            .subscribe((n) => (this.isSingleLineLayout = n)),
            this.mediaService.activeSource$
              .pipe(Object(O.a)(this.destroyed$$))
              .subscribe((n) => {
                this.delayCoverLoading = n.type === p.g.ONLINEMEDIA;
              }));
        }
        ngAfterViewInit() {
          const n = this.mediaPlayerService.activeTitleIndex$.pipe(
            Object(v.a)(() => !!this.listView),
            Object(v.a)((n) => n >= 0),
            Object(O.a)(this.destroyed$$),
          );
          (n
            .pipe(Object(y.a)(1))
            .subscribe((n) => this.listView.selectIndex(n)),
            n
              .pipe(Object(El.a)())
              .subscribe(([n, e]) => this.listView.keepSelectionFocused(n, e)),
            this.mediaPlayerService
              .createPlayviewList$(this.listView.requestedDynamicListCombined$)
              .pipe(Object(O.a)(this.destroyed$$))
              .subscribe((n) => this.listData$$.next(n)),
            (this.listIsScrolling$ = this.listView.scrolling$.pipe(
              Object(Il.a)(500),
            )));
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        selectItem(n) {
          const e = this.timeService.now();
          this.isFrozen(e)
            ? this.logger.warn(
                `selectItem: ignore selection of item ${n.id}, because list is frozen (freeze start: ${this.freezeStart}, now: ${e})`,
              )
            : (this.logger.debug("selectItem: Select item ", n),
              this.freeze(),
              this.mediaPlayerService.player$
                .pipe(
                  Object(y.a)(1),
                  Object(wl.a)((e) =>
                    e && e.currentPlayviewListEntryId === n.id
                      ? (this.logger.info(
                          "selectItem: track is already playing just go to nps",
                          n,
                        ),
                        Object(Cl.a)(!0))
                      : this.mediaPlayerService.selectTitle(n),
                  ),
                )
                .subscribe(() => this.goToNps()));
        }
        goToNps() {
          this.showNPS.emit();
        }
        freeze() {
          this.freezeStart = this.timeService.now();
        }
        isFrozen(n) {
          return (
            !!this.freezeStart && n - this.freezeStart < this.maxFreezeDuration
          );
        }
      }
      var Al = l("U7rg"),
        kl = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".list[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:center;height:354px}",
            ],
          ],
          data: {},
        });
      function Ml(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-fpk-media-playview-list-item",
              [["id", ""]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "oneline", null],
                [2, "twoline", null],
              ],
              [[null, "mib3Tap"]],
              function (n, e, l) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t =
                      !1 !== n.component.selectItem(n.context.$implicit) && t),
                  t
                );
              },
              Pl,
              yl,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, k.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              M.a,
              [k.a, [2, $.a], [2, R.a], b.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              V.a,
              [F.a, t.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              z.a,
              [
                b.a,
                B.b,
                M.a,
                [2, $.a],
                [2, R.a],
                [2, V.a],
                [2, U.a],
                [2, r.a],
                t.z,
                j.a,
                t.l,
                [2, Y.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, H.a, H.a, [[3, H.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              K.a,
              [
                t.l,
                G.a,
                t.h,
                H.a,
                [2, W.a],
                [2, $.b],
                [2, $.a],
                [2, Q.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              J.a,
              [
                [2, z.a],
                [2, V.a],
                [2, nn.a],
                [2, K.a],
                [2, en.b],
                t.l,
                ln.a,
                tn.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              an.a,
              [[2, K.a], [2, z.a], [2, B.b], un.a],
              null,
              null,
            ),
            t.xb(
              10,
              49152,
              null,
              0,
              vl,
              [],
              {
                isListScrolling: [0, "isListScrolling"],
                entry: [1, "entry"],
                active: [2, "active"],
                isOneLineLayout: [3, "isOneLineLayout"],
                delayCoverLoading: [4, "delayCoverLoading"],
              },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, ""),
              n(
                e,
                4,
                0,
                (null == e.context.$implicit
                  ? null
                  : e.context.$implicit.hasError) ||
                  !(
                    null == e.context.$implicit ||
                    !e.context.$implicit.notPlayableText
                  ),
              ),
              n(e, 5, 0),
              n(e, 7, 0),
              n(
                e,
                10,
                0,
                e.parent.context.mib3Let.isScrolling,
                e.context.$implicit,
                e.context.index === e.parent.context.mib3Let.selectedIndex,
                l.isSingleLineLayout &&
                  !(
                    null != e.context.$implicit && e.context.$implicit.hasError
                  ) &&
                  !(
                    null != e.context.$implicit &&
                    e.context.$implicit.hasNotPlayableText
                  ),
                l.delayCoverLoading,
              ));
          },
          function (n, e) {
            n(
              e,
              0,
              0,
              t.Nb(e, 4).combinedDisabled,
              t.Nb(e, 4).useBrighterIcon,
              t.Nb(e, 7).markerClassEnabled,
              t.Nb(e, 10).isOneLineLayout,
              t.Nb(e, 10).isTwoLineLayout,
            );
          },
        );
      }
      function $l(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-list",
              [
                ["au3ListDomPaging", ""],
                ["class", "list"],
                ["id", ""],
              ],
              [[2, "list--with-line-numbers", null]],
              [[null, "mib3IdleTimer"]],
              function (n, e, l) {
                var t = !0;
                return (
                  "mib3IdleTimer" === e &&
                    (t = !1 !== n.component.goToNps() && t),
                  t
                );
              },
              mn.b,
              mn.a,
            )),
            t.Sb(6144, null, pn.a, null, [hn.a]),
            t.xb(
              2,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 16384, null, 0, xn.a, [t.l], null, null),
            t.xb(
              4,
              16384,
              null,
              0,
              gn.a,
              [b.a],
              { itemHeightGuess: [0, "itemHeightGuess"] },
              null,
            ),
            t.xb(
              5,
              12828672,
              [[1, 4]],
              1,
              hn.a,
              [
                [2, gn.a],
                [2, cn.a],
                [8, null],
                [2, R.a],
                [2, fn.a],
                [2, vn.a],
                [2, B.b],
                yn.i,
                t.z,
                t.h,
                b.a,
                Ln.a,
                On.a,
                [2, G.a],
                $.a,
                [2, yn.a],
              ],
              {
                showCursor: [0, "showCursor"],
                cursorSize: [1, "cursorSize"],
                itemHeightGuess: [2, "itemHeightGuess"],
                showSeparators: [3, "showSeparators"],
                items: [4, "items"],
              },
              null,
            ),
            t.Tb(603979776, 2, { template: 0 }),
            t.Pb(131072, Sn.b, [t.h]),
            t.xb(
              8,
              4407296,
              null,
              0,
              en.c,
              [[2, R.a], [2, en.a], [2, en.b], un.a, t.z, b.a],
              null,
              { idleTimer: "mib3IdleTimer" },
            ),
            (n()(), t.hb(0, [[2, 2]], 0, 0, null, Ml)),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 2, 0, ""),
              n(e, 4, 0, 99),
              n(
                e,
                5,
                0,
                !0,
                l.listCursorSizeEnum.COVER_THUMBNAIL,
                99,
                !1,
                t.Yb(e, 5, 4, t.Nb(e, 7).transform(l.listData$$)),
              ),
              n(e, 8, 0));
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 5).showLineNumbers);
          },
        );
      }
      function Rl(n) {
        return t.ac(
          2,
          [
            t.Tb(671088640, 1, { listView: 0 }),
            (n()(), t.hb(16777216, null, null, 4, null, $l)),
            t.xb(
              2,
              16384,
              null,
              0,
              Zn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, Sn.b, [t.h]),
            t.Pb(131072, Sn.b, [t.h]),
            t.Qb(5, { selectedIndex: 0, isScrolling: 1 }),
          ],
          function (n, e) {
            var l = e.component,
              i = n(
                e,
                5,
                0,
                t.Yb(
                  e,
                  2,
                  0,
                  t.Nb(e, 3).transform(l.mediaPlayerService.activeTitleIndex$),
                ),
                t.Yb(e, 2, 0, t.Nb(e, 4).transform(l.listIsScrolling$)),
              );
            n(e, 2, 0, i);
          },
          null,
        );
      }
      var Vl = l("HlX9"),
        Fl = l("G/4o"),
        zl = l("skXE"),
        Bl = l("w4OF"),
        Ul = l("EyLa"),
        jl = l("4nnk"),
        Yl = l("2EJU"),
        Hl = l("2A1T");
      class Kl {
        constructor(n, e, l, i) {
          ((this.mediaPlayerService = n),
            (this.mediaNpsService = e),
            (this.mediaService = l),
            (this.showPlayview = new t.n()),
            (this.coverLoadingFallbackTimeout = 500),
            (this.integerMaxValue = Number.MAX_SAFE_INTEGER),
            (this.playviewAvailable = !1),
            (this.destroyed$$ = new g.a(1)),
            (this.logger = i.getLogger("media.FpkMediaNPSComponent")));
        }
        ngOnInit() {
          ((this.hasDetailInfos$ = this.mediaPlayerService.hasCapability$(
            Hl.a.DETAILINFOS,
          )),
            this.mediaPlayerService.player$
              .pipe(Object(O.a)(this.destroyed$$))
              .subscribe((n) => {
                this.playviewAvailable =
                  !(!n || !n.numberOfPlayviewListEntries) &&
                  n.hasCapability(Hl.a.PLAYVIEW) &&
                  n.numberOfPlayviewListEntries > 0;
              }));
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        onKeyDown(n) {
          (n.key !== x.eb.MFW_ROLLER_DOWN &&
            n.key !== x.eb.MFW_ROLLER_UP &&
            n.key !== x.eb.HK_BACK) ||
            (this.playviewAvailable
              ? (this.logger.info(
                  `onKeyDown: go to playview list because of keypress '${n.key}'`,
                ),
                this.showPlayview.emit())
              : this.logger.info(
                  `onKeyDown: no playview list available: prevent playview list on fpk (keypress '${n.key}')`,
                ));
        }
      }
      var Gl = t.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.fpk-stage-small[_nghost-%COMP%]   .media-activeplayer__cover[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .media-activeplayer__cover[_ngcontent-%COMP%]{opacity:0;flex:0 1 auto;width:0}.fpk-stage-big[_nghost-%COMP%]   .media-activeplayer__cover[_ngcontent-%COMP%], .fpk-stage-big   [_nghost-%COMP%]   .media-activeplayer__cover[_ngcontent-%COMP%]{opacity:1;flex:1 0 auto;width:270px;transition:opacity .5s ease-in .5s,width 0s ease-out .5s}.component-layout-arabic[_nghost-%COMP%]   .media-activeplayer__text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .media-activeplayer__text[_ngcontent-%COMP%]{direction:rtl}.component-layout-latin[_nghost-%COMP%]   .media-activeplayer__text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .media-activeplayer__text[_ngcontent-%COMP%]{direction:ltr}[_nghost-%COMP%]{height:100%}.media-activeplayer[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;flex-direction:column}.media-activeplayer[_ngcontent-%COMP%]{position:relative;flex-grow:1}.media-activeplayer__metadata[_ngcontent-%COMP%]{display:flex;flex-direction:row}.media-activeplayer__text[_ngcontent-%COMP%]{height:238px;width:432px;margin-top:20px}.media-activeplayer__cover[_ngcontent-%COMP%]{display:block;flex:1 0 auto;opacity:1;margin:12px 0 12px auto;width:270px;max-width:270px;height:270px;transform:perspective(1500px) rotate3d(0,-1,0,15deg);transform-style:preserve-3d}.media-activeplayer__time[_ngcontent-%COMP%]{font-size:28px;text-align:center;margin-left:auto}.media-activeplayer__timebar[_ngcontent-%COMP%]{width:100%;margin:15px 0}.statustext[_ngcontent-%COMP%]{text-align:center;flex-grow:1;font-size:38px}",
          ],
        ],
        data: {
          animation: [
            {
              type: 7,
              name: "playerNps",
              definitions: [
                {
                  type: 1,
                  expr: ":enter",
                  animation: [
                    {
                      type: 3,
                      steps: [
                        {
                          type: 11,
                          selector: "@playerNpsContent",
                          animation: { type: 9, options: null },
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: "@playerNpsControls",
                          animation: { type: 9, options: null },
                          options: { optional: !0 },
                        },
                      ],
                      options: null,
                    },
                  ],
                  options: null,
                },
                {
                  type: 1,
                  expr: ":leave",
                  animation: [
                    {
                      type: 3,
                      steps: [
                        {
                          type: 11,
                          selector: "@playerNpsContent",
                          animation: { type: 9, options: null },
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: "@playerNpsControls",
                          animation: { type: 9, options: null },
                          options: { optional: !0 },
                        },
                      ],
                      options: null,
                    },
                  ],
                  options: null,
                },
              ],
              options: {},
            },
            {
              type: 7,
              name: "playerNpsContent",
              definitions: [
                {
                  type: 1,
                  expr: ":enter",
                  animation: [
                    {
                      type: 6,
                      styles: { opacity: 0, transform: "scale(0.9)" },
                      offset: null,
                    },
                    {
                      type: 4,
                      styles: null,
                      timings: "300ms cubic-bezier(.4,.65,.6,.83)",
                    },
                  ],
                  options: null,
                },
                {
                  type: 1,
                  expr: ":leave",
                  animation: [
                    {
                      type: 4,
                      styles: {
                        type: 6,
                        styles: { opacity: 0, transform: "scale(0.9)" },
                        offset: null,
                      },
                      timings: "300ms cubic-bezier(.4,.17,.6,.35)",
                    },
                  ],
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function Wl(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              6,
              "div",
              [["class", "media-activeplayer__metadata"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-media-nps-title-info",
              [
                ["class", "media-activeplayer__text"],
                ["id", ""],
              ],
              null,
              null,
              null,
              Vl.b,
              Vl.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 49152, null, 0, Fl.a, [pe.a], null, null),
            (n()(),
            t.yb(
              4,
              0,
              null,
              null,
              2,
              "au3-icon-with-fallback",
              [
                ["au3ImageLockingCategory", ""],
                ["class", "media-activeplayer__cover"],
              ],
              [
                [2, "icon-component--hidden", null],
                [2, "lock-state-hidden", null],
                [2, "lock-state-faded", null],
              ],
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(
              5,
              4964352,
              null,
              0,
              pl.a,
              [t.h, t.z, b.a],
              {
                fileName: [0, "fileName"],
                blocksRouting: [1, "blocksRouting"],
                fallbackFileName: [2, "fallbackFileName"],
                loadingFallbackTimeout: [3, "loadingFallbackTimeout"],
              },
              null,
            ),
            t.xb(6, 212992, null, 0, hl.a, [yn.i, [2, yn.a], t.h], null, null),
          ],
          function (n, e) {
            var l = e.component;
            n(e, 2, 0, "");
            var t =
                null == e.context.mib3Let ||
                null == e.context.mib3Let.detailInfo
                  ? null
                  : e.context.mib3Let.detailInfo.coverUrl,
              i =
                null == e.context.mib3Let ||
                null == e.context.mib3Let.detailInfo
                  ? null
                  : e.context.mib3Let.detailInfo.getDefaultCoverUrl();
            (n(
              e,
              5,
              0,
              t,
              !1,
              i,
              null != e.context.mib3Let &&
                null != e.context.mib3Let.activeSource &&
                e.context.mib3Let.activeSource.isOnlineMediaSource
                ? l.coverLoadingFallbackTimeout
                : l.integerMaxValue,
            ),
              n(e, 6, 0));
          },
          function (n, e) {
            n(
              e,
              4,
              0,
              t.Nb(e, 5).iconComponentHidden,
              t.Nb(e, 6).hide,
              t.Nb(e, 6).fade,
            );
          },
        );
      }
      function Ql(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-entertainment-playtime",
              [
                [
                  "class",
                  "media-activeplayer__time entertainment-playtime--not-fixed",
                ],
                ["id", ""],
              ],
              null,
              null,
              null,
              zl.b,
              zl.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              Bl.a,
              [],
              { currentTime: [0, "currentTime"], totalTime: [1, "totalTime"] },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, ""),
              n(
                e,
                2,
                0,
                null == e.parent.context.mib3Let
                  ? null
                  : e.parent.context.mib3Let.currentPlaytime,
                null == e.parent.context.mib3Let
                  ? null
                  : e.parent.context.mib3Let.totalPlaytime,
              ));
          },
          null,
        );
      }
      function Xl(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-progressbar",
              [
                ["class", "media-activeplayer__timebar"],
                ["id", ""],
              ],
              [
                [2, "sxm--rotate", null],
                [2, "progressbar--infinite", null],
              ],
              null,
              null,
              Ul.b,
              Ul.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              jl.a,
              [t.l, t.h],
              { min: [0, "min"], max: [1, "max"], current: [2, "current"] },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, ""),
              n(
                e,
                2,
                0,
                0,
                (null == e.parent.context.mib3Let
                  ? null
                  : e.parent.context.mib3Let.totalPlaytime) > 0
                  ? null == e.parent.context.mib3Let
                    ? null
                    : e.parent.context.mib3Let.totalPlaytime
                  : 1,
                null == e.parent.context.mib3Let
                  ? null
                  : e.parent.context.mib3Let.currentPlaytime,
              ));
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 2).shouldRotateForSxm, t.Nb(e, 2).infinite);
          },
        );
      }
      function Zl(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              11,
              "div",
              [["class", "media-activeplayer"]],
              [[24, "@playerNpsContent", 0]],
              null,
              null,
              null,
              null,
            )),
            (n()(), t.hb(16777216, null, null, 4, null, Wl)),
            t.xb(
              2,
              16384,
              null,
              0,
              Zn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, Sn.b, [t.h]),
            t.Pb(131072, Sn.b, [t.h]),
            t.Qb(5, { detailInfo: 0, activeSource: 1 }),
            (n()(), t.hb(16777216, null, null, 2, null, Ql)),
            t.xb(
              7,
              16384,
              null,
              0,
              Sn.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Pb(131072, Sn.b, [t.h]),
            (n()(), t.hb(16777216, null, null, 2, null, Xl)),
            t.xb(
              10,
              16384,
              null,
              0,
              Sn.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Pb(131072, Sn.b, [t.h]),
          ],
          function (n, e) {
            var l = e.component,
              i = n(
                e,
                5,
                0,
                t.Yb(
                  e,
                  2,
                  0,
                  t.Nb(e, 3).transform(l.mediaPlayerService.detailInfo$),
                ),
                t.Yb(
                  e,
                  2,
                  0,
                  t.Nb(e, 4).transform(l.mediaService.activeSource$),
                ),
              );
            (n(e, 2, 0, i),
              n(
                e,
                7,
                0,
                t.Yb(
                  e,
                  7,
                  0,
                  t.Nb(e, 8).transform(l.mediaNpsService.playtimeAvailable$),
                ),
              ),
              n(
                e,
                10,
                0,
                t.Yb(
                  e,
                  10,
                  0,
                  t.Nb(e, 11).transform(l.mediaNpsService.playtimeAvailable$),
                ),
              ));
          },
          function (n, e) {
            n(e, 0, 0, !0);
          },
        );
      }
      function ql(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "media-activeplayer"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), t.hb(16777216, null, null, 2, null, Zl)),
            t.xb(
              2,
              16384,
              null,
              0,
              Zn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, Sn.b, [t.h]),
          ],
          function (n, e) {
            var l = e.component;
            n(
              e,
              2,
              0,
              t.Yb(
                e,
                2,
                0,
                t.Nb(e, 3).transform(l.mediaPlayerService.playtime$),
              ),
            );
          },
          null,
        );
      }
      function Jl(n) {
        return t.ac(
          0,
          [
            (n()(),
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
            (n()(), t.hb(16777216, null, null, 2, null, ql)),
            t.xb(
              2,
              16384,
              null,
              0,
              Sn.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            t.Pb(131072, Sn.b, [t.h]),
            (n()(), t.hb(0, null, null, 0)),
          ],
          function (n, e) {
            var l = e.component;
            n(
              e,
              2,
              0,
              !t.Yb(
                e,
                2,
                0,
                t.Nb(e, 3).transform(l.mediaPlayerService.isPlaybackStopped$),
              ),
              t.Nb(e.parent, 4),
            );
          },
          null,
        );
      }
      function nt(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "statustext"],
                ["id", "BluetoothNoDetailInfos"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "BluetoothNoDetailInfos"),
              n(
                e,
                2,
                0,
                6,
                "Der Bluetooth-Audioplayer ist ausgew\xe4hlt.\n \nEine Darstellung vom gerade spielenden Titel\nwird von Ihren Ger\xe4t nicht unterst\xfctzt.",
              ));
          },
          null,
        );
      }
      function et(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "statustext"],
                ["id", "PlaybackStopped"],
              ],
              null,
              null,
              null,
              ie.b,
              ie.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              ae.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "PlaybackStopped"),
              n(
                e,
                2,
                0,
                6,
                "Bitte w\xe4hlen Sie einen neuen Titel\naus der Mediathek.",
              ));
          },
          null,
        );
      }
      function lt(n) {
        return t.ac(
          2,
          [
            (n()(), t.hb(16777216, null, null, 2, null, Jl)),
            t.xb(
              1,
              16384,
              null,
              0,
              Sn.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            t.Pb(131072, Sn.b, [t.h]),
            (n()(), t.hb(0, [["noDetailInfosTemplate", 2]], null, 0, null, nt)),
            (n()(), t.hb(0, [["playbackStopped", 2]], null, 0, null, et)),
          ],
          function (n, e) {
            var l = e.component;
            n(
              e,
              1,
              0,
              t.Yb(e, 1, 0, t.Nb(e, 2).transform(l.hasDetailInfos$)),
              t.Nb(e, 3),
            );
          },
          null,
        );
      }
      var tt = l("C05f"),
        it = l("vcDZ"),
        at = (function (n) {
          return ((n.PLAYVIEW = "PLAYVIEW"), (n.NPS = "NPS"), n);
        })({});
      class ut {
        constructor(n, e, l, t) {
          ((this.mediaStateService = n),
            (this.mediaService = e),
            (this.widgetHistoryService = l),
            (this.shouldShowNPS$$ = new tt.a(!1)),
            (this.playerScreenTypeEnum = at),
            (this.mediaSourceI18NEnum = Nn.c),
            (this.destroyed$$ = new g.a(1)),
            (this.logger = t.getLogger("media.FpkMediaPlayerComponent")),
            this.mediaService.shouldWaitForPlayviewIndex$$.next(!1),
            (this.currentPlayerScreenType$ = Object(f.b)(
              this.mediaStateService.loadingState$,
              this.shouldShowNPS$$,
              this.mediaStateService.hasPlayviewCapability$$,
              this.mediaStateService.hasNpsCapability$$,
            ).pipe(
              Object(L.a)(([n, e, l, t]) => {
                switch (n) {
                  case be.a.READY_PLAYVIEWORNPS:
                    return e && t
                      ? at.NPS
                      : l
                        ? at.PLAYVIEW
                        : t
                          ? (this.showNPS(), at.NPS)
                          : null;
                  default:
                    return null;
                }
              }),
              Object(S.a)(),
              Object(re.a)((n) =>
                this.logger.info("current player screen: ", n),
              ),
              Object(O.a)(this.destroyed$$),
            )),
            (this.playerState$ = this.currentPlayerScreenType$.pipe(
              Object(L.a)((n) => {
                switch (n) {
                  case at.NPS:
                    return x.Bd;
                  case at.PLAYVIEW:
                    return x.Cd;
                  default:
                    return "";
                }
              }),
            )));
        }
        ngOnDestroy() {
          (this.mediaService.shouldWaitForPlayviewIndex$$.next(!0),
            this.destroyed$$.next());
        }
        showPlayview() {
          (this.logger.info("switch to playview"),
            this.widgetHistoryService.resetCurrentWidgetHistory(),
            this.shouldShowNPS$$.next(!1));
        }
        showNPS() {
          (this.logger.info("switch to nps"), this.shouldShowNPS$$.next(!0));
        }
      }
      var ot = t.wb({
        encapsulation: 0,
        styles: [
          [
            ".player[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;position:relative;flex-direction:column;height:100%}",
          ],
        ],
        data: {
          animation: [
            {
              type: 7,
              name: "playerState",
              definitions: [
                {
                  type: 1,
                  expr: "play-view => nps",
                  animation: [
                    {
                      type: 11,
                      selector: ":leave",
                      animation: {
                        type: 6,
                        styles: {
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                        },
                        offset: null,
                      },
                      options: { optional: !0 },
                    },
                    {
                      type: 2,
                      steps: [
                        {
                          type: 11,
                          selector: ":leave",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { transform: "translateY(150%)" },
                                offset: null,
                              },
                              timings: "300ms cubic-bezier(.4,.17,.6,.35)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: ":enter",
                          animation: { type: 9, options: null },
                          options: { optional: !0 },
                        },
                      ],
                      options: null,
                    },
                  ],
                  options: null,
                },
                {
                  type: 1,
                  expr: "nps => play-view",
                  animation: [
                    {
                      type: 11,
                      selector: ":enter",
                      animation: {
                        type: 6,
                        styles: {
                          opacity: 0,
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                        },
                        offset: null,
                      },
                      options: { optional: !0 },
                    },
                    {
                      type: 2,
                      steps: [
                        {
                          type: 11,
                          selector: ":leave",
                          animation: { type: 9, options: null },
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: ":enter",
                          animation: [
                            {
                              type: 6,
                              styles: { transform: "translateY(150%)" },
                              offset: null,
                            },
                            {
                              type: 4,
                              styles: null,
                              timings: "300ms cubic-bezier(.4,.65,.6,.83)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                      ],
                      options: null,
                    },
                  ],
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function rt(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-fpk-title-line",
              [["secondaryDeveloperText", "Wiedergabe"]],
              [[2, "priority-shrink", null]],
              null,
              null,
              Mn.b,
              Mn.a,
            )),
            t.xb(
              1,
              49152,
              null,
              0,
              $n.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryNonI18nText: [1, "primaryNonI18nText"],
                primaryIdEnumType: [2, "primaryIdEnumType"],
                primaryId: [3, "primaryId"],
                secondaryDeveloperText: [4, "secondaryDeveloperText"],
              },
              null,
            ),
            t.Rb(2, 1),
            t.Rb(3, 1),
          ],
          function (n, e) {
            var l = e.component,
              i = t.Yb(
                e,
                1,
                0,
                n(e, 2, 0, t.Nb(e.parent.parent, 0), e.context.mib3Let),
              ),
              a =
                (null == e.context.mib3Let
                  ? null
                  : e.context.mib3Let.deviceName) || void 0,
              u = l.mediaSourceI18NEnum,
              o = t.Yb(
                e,
                1,
                3,
                n(e, 3, 0, t.Nb(e.parent.parent, 0), e.context.mib3Let),
              );
            n(e, 1, 0, i, a, u, o, "Wiedergabe");
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 1).isPriorityShrink);
          },
        );
      }
      function st(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-fpk-media-playview-list",
              [["id", "PlayviewList"]],
              null,
              [[null, "showNPS"]],
              function (n, e, l) {
                var t = !0;
                return (
                  "showNPS" === e && (t = !1 !== n.component.showNPS() && t),
                  t
                );
              },
              Rl,
              kl,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, Dl, [pe.a, C.a, Al.b, b.a], null, {
              showNPS: "showNPS",
            }),
          ],
          function (n, e) {
            (n(e, 1, 0, "PlayviewList"), n(e, 2, 0));
          },
          null,
        );
      }
      function ct(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-fpk-media-nps",
              [["id", "NowPlayingScreen"]],
              [[40, "@playerNps", 0]],
              [
                [null, "showPlayview"],
                ["screen", "keydown"],
              ],
              function (n, e, l) {
                var i = !0,
                  a = n.component;
                return (
                  "screen:keydown" === e &&
                    (i = !1 !== t.Nb(n, 2).onKeyDown(l) && i),
                  "showPlayview" === e && (i = !1 !== a.showPlayview() && i),
                  i
                );
              },
              lt,
              Gl,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 245760, null, 0, Kl, [pe.a, Yl.a, C.a, b.a], null, {
              showPlayview: "showPlayview",
            }),
          ],
          function (n, e) {
            (n(e, 1, 0, "NowPlayingScreen"), n(e, 2, 0));
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 2).nps);
          },
        );
      }
      function bt(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              13,
              "au3-fpk-screen",
              [["id", "Screen:MEDIA_FPK_PLAYER_*"]],
              null,
              null,
              null,
              rn.b,
              rn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 114688, null, 0, sn.a, [], null, null),
            t.Sb(256, null, cn.a, sn.b, []),
            (n()(), t.hb(16777216, null, 0, 2, null, rt)),
            t.xb(
              5,
              16384,
              null,
              0,
              Zn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, Sn.b, [t.h]),
            (n()(),
            t.yb(
              7,
              0,
              null,
              0,
              6,
              "div",
              [["class", "player"]],
              [[24, "@playerState", 0]],
              null,
              null,
              null,
              null,
            )),
            t.xb(
              8,
              16384,
              null,
              0,
              Sn.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            t.Pb(131072, Sn.b, [t.h]),
            (n()(), t.hb(16777216, null, null, 1, null, st)),
            t.xb(
              11,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, ct)),
            t.xb(
              13,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, "Screen:MEDIA_FPK_PLAYER_*"),
              n(e, 2, 0),
              n(
                e,
                5,
                0,
                t.Yb(
                  e,
                  5,
                  0,
                  t.Nb(e, 6).transform(l.mediaService.activeSource$),
                ),
              ),
              n(e, 8, 0, e.context.mib3Let),
              n(e, 11, 0, l.playerScreenTypeEnum.PLAYVIEW),
              n(e, 13, 0, l.playerScreenTypeEnum.NPS));
          },
          function (n, e) {
            var l = e.component;
            n(e, 7, 0, t.Yb(e, 7, 0, t.Nb(e, 9).transform(l.playerState$)));
          },
        );
      }
      function dt(n) {
        return t.ac(
          2,
          [
            t.Pb(0, Xn.a, [b.a]),
            (n()(), t.hb(16777216, null, null, 2, null, bt)),
            t.xb(
              2,
              16384,
              null,
              0,
              Zn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, Sn.b, [t.h]),
          ],
          function (n, e) {
            var l = e.component;
            n(
              e,
              2,
              0,
              t.Yb(e, 2, 0, t.Nb(e, 3).transform(l.currentPlayerScreenType$)),
            );
          },
          null,
        );
      }
      function mt(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-media-player",
              [],
              null,
              null,
              null,
              dt,
              ot,
            )),
            t.xb(1, 180224, null, 0, ut, [it.a, C.a, On.a, b.a], null, null),
          ],
          null,
          null,
        );
      }
      var pt = t.ub("au3-fpk-media-player", ut, mt, {}, {}, []),
        ht = l("8lHc");
      class xt {
        constructor(n, e, l, t) {
          ((this.tvService = n),
            (this.fpkMediaRoutingService = e),
            (this.dataDictionaryService = l),
            (this.destroyed$$ = new g.a(1)),
            (this.logger = t.getLogger("tv.FpkTvInitComponent")));
        }
        ngAfterViewInit() {
          Object(f.b)(
            Object(ht.a)(this.dataDictionaryService.t_show_init_screen),
            this.tvService.tvAvailable$,
          )
            .pipe(
              Object(O.a)(this.destroyed$$),
              Object(v.a)(([n, e]) => e),
            )
            .subscribe(() => {
              (this.logger.info("ngAfterViewInit: TV available, routing to TV"),
                this.fpkMediaRoutingService.goTvPlayer());
            });
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
      }
      var gt = l("M+lD"),
        ft = t.wb({ encapsulation: 2, styles: [], data: {} });
      function vt(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-fpk-screen",
              [["id", "Screen:TV_FPK_INIT"]],
              null,
              null,
              null,
              rn.b,
              rn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 114688, null, 0, sn.a, [], null, null),
            t.Sb(256, null, cn.a, sn.b, []),
            (n()(),
            t.yb(
              4,
              0,
              null,
              0,
              2,
              "au3-fpk-title-line",
              [["id", ""]],
              [[2, "priority-shrink", null]],
              null,
              null,
              Mn.b,
              Mn.a,
            )),
            t.xb(
              5,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              6,
              49152,
              null,
              0,
              $n.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryId: [1, "primaryId"],
                secondaryDeveloperText: [2, "secondaryDeveloperText"],
                secondaryId: [3, "secondaryId"],
              },
              null,
            ),
            (n()(),
            t.yb(
              7,
              0,
              null,
              0,
              4,
              "au3-init-view",
              [],
              null,
              null,
              null,
              Rn.b,
              Rn.a,
            )),
            t.xb(8, 49152, null, 0, Vn.a, [], null, null),
            (n()(),
            t.yb(
              9,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [["id", "InitTvText"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Fn.b,
              Fn.a,
            )),
            t.xb(
              10,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              11,
              245760,
              null,
              0,
              zn.a,
              [[6, R.a], Bn.a, t.h, t.l, t.D, [2, Un.a], [2, jn.a], [2, Yn.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "Screen:TV_FPK_INIT"),
              n(e, 2, 0),
              n(e, 5, 0, ""),
              n(
                e,
                6,
                0,
                "TV",
                "TvInitTitleLine",
                "Hinweis",
                "TvInitTitleLineHint",
              ),
              n(e, 10, 0, "InitTvText"),
              n(
                e,
                11,
                0,
                "TV wird initialisiert.\nBitte warten...",
                "InitTvText",
                3,
              ));
          },
          function (n, e) {
            (n(e, 4, 0, t.Nb(e, 6).isPriorityShrink),
              n(
                e,
                9,
                0,
                t.Nb(e, 11).backgroundColor,
                t.Nb(e, 11).fixedNumberOfLines,
                t.Nb(e, 11).mayContainLatinCharsForArabic,
                t.Nb(e, 11).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function yt(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-tv-init",
              [],
              null,
              null,
              null,
              vt,
              ft,
            )),
            t.xb(1, 4374528, null, 0, xt, [_.a, N.b, gt.a, b.a], null, null),
          ],
          null,
          null,
        );
      }
      var Lt = t.ub("au3-fpk-tv-init", xt, yt, {}, {}, []);
      class Ot {
        constructor(n, e, l, t) {
          ((this.tvService = n),
            (this.fpkMediaRoutingService = e),
            (this.dataDictionaryService = l),
            (this.destroyed$$ = new g.a(1)),
            (this.logger = t.getLogger("tv.FpkTvEsmComponent")));
        }
        ngAfterViewInit() {
          Object(f.b)(
            Object(ht.a)(this.dataDictionaryService.t_show_init_screen),
            this.tvService.activeRsiTvTuner$,
          )
            .pipe(
              Object(v.a)(([n, e]) => !this.tvService.isEsmState(e)),
              Object(O.a)(this.destroyed$$),
            )
            .subscribe(() => {
              (this.logger.info(
                "ngOnInit: State of active RSI tv tuner is NOT ESM anymore. Routing to station list.",
              ),
                this.fpkMediaRoutingService.goTvPlayer());
            });
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
      }
      var St = t.wb({ encapsulation: 2, styles: [], data: {} });
      function Tt(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-fpk-screen",
              [["id", "SCREEN:TV_FPK_ESM"]],
              null,
              null,
              null,
              rn.b,
              rn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 114688, null, 0, sn.a, [], null, null),
            t.Sb(256, null, cn.a, sn.b, []),
            (n()(),
            t.yb(
              4,
              0,
              null,
              0,
              2,
              "au3-fpk-title-line",
              [["id", ""]],
              [[2, "priority-shrink", null]],
              null,
              null,
              Mn.b,
              Mn.a,
            )),
            t.xb(
              5,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              6,
              49152,
              null,
              0,
              $n.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryId: [1, "primaryId"],
                secondaryDeveloperText: [2, "secondaryDeveloperText"],
                secondaryId: [3, "secondaryId"],
              },
              null,
            ),
            (n()(),
            t.yb(
              7,
              0,
              null,
              0,
              4,
              "au3-init-view",
              [],
              null,
              null,
              null,
              Rn.b,
              Rn.a,
            )),
            t.xb(8, 49152, null, 0, Vn.a, [], null, null),
            (n()(),
            t.yb(
              9,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [["id", "FpkTvEsmText"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Fn.b,
              Fn.a,
            )),
            t.xb(
              10,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              11,
              245760,
              null,
              0,
              zn.a,
              [[6, R.a], Bn.a, t.h, t.l, t.D, [2, Un.a], [2, jn.a], [2, Yn.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "SCREEN:TV_FPK_ESM"),
              n(e, 2, 0),
              n(e, 5, 0, ""),
              n(
                e,
                6,
                0,
                "TV",
                "FpkTvEsmTitleLine",
                "Hinweis",
                "FpkTvEsmTitleLineHint",
              ),
              n(e, 10, 0, "FpkTvEsmText"),
              n(
                e,
                11,
                0,
                "Der TV-Tuner befand sich im Energiesparmodus.\nDie Bedienung ist in K\xfcrze wieder m\xf6glich.\nBitte warten ...",
                "FpkTvEsmText",
                3,
              ));
          },
          function (n, e) {
            (n(e, 4, 0, t.Nb(e, 6).isPriorityShrink),
              n(
                e,
                9,
                0,
                t.Nb(e, 11).backgroundColor,
                t.Nb(e, 11).fixedNumberOfLines,
                t.Nb(e, 11).mayContainLatinCharsForArabic,
                t.Nb(e, 11).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function _t(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-tv-esm",
              [],
              null,
              null,
              null,
              Tt,
              St,
            )),
            t.xb(1, 4374528, null, 0, Ot, [_.a, N.b, gt.a, b.a], null, null),
          ],
          null,
          null,
        );
      }
      var Nt = t.ub("au3-fpk-tv-esm", Ot, _t, {}, {}, []),
        Pt = l("tTyz"),
        Ct = l("fZ+u"),
        Et = l("1hWf"),
        It = l("AuHH"),
        wt = l("Su7d"),
        Dt = (l("vY32"), l("wcHP"));
      class At {
        constructor(n) {
          ((this.tvAudioStateService = n),
            (this.isActive = !1),
            (this.IconCategory = x.Z),
            (this.audioStateIcon$$ = new tt.a("")));
        }
        set station(n) {
          null != n &&
            ((this.tvStation = n),
            this.audioStateIcon$$.next(
              this.tvAudioStateService.getAudioStateIconForMainListAndFpkList(
                this.tvStation,
              ),
            ));
        }
      }
      var kt = t.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;height:93px;margin:3px 0;width:100%}.station[_ngcontent-%COMP%]{display:flex;flex-direction:row}.station__icon[_ngcontent-%COMP%]{margin:8px 15px 0 20px}.station__text[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:665px;padding:3px 0 6px 15px}.text-first-line[_ngcontent-%COMP%]{display:flex;flex-direction:row;font-size:38px}.text-first-line__container[_ngcontent-%COMP%]{width:590px;display:flex;flex-direction:row}.text-first-line__container--name[_ngcontent-%COMP%]{margin-top:2px;width:430px}.text-first-line__container--content-group[_ngcontent-%COMP%]{margin-left:30px;margin-top:2px;width:168px}.text-first-line__signal-status[_ngcontent-%COMP%]{margin-left:20px;margin-top:8px;width:40px}.fpk-stage-small[_nghost-%COMP%]   .station__icon[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .station__icon[_ngcontent-%COMP%]{display:none}.fpk-stage-small[_nghost-%COMP%]   .station__text[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .station__text[_ngcontent-%COMP%]{width:420px}.fpk-stage-small[_nghost-%COMP%]   .text-first-line__container[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .text-first-line__container[_ngcontent-%COMP%]{width:340px}.fpk-stage-small[_nghost-%COMP%]   .text-first-line__container--content-group[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .text-first-line__container--content-group[_ngcontent-%COMP%]{display:none}",
          ],
        ],
        data: {},
      });
      function Mt(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
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
              bl.b,
              bl.a,
            )),
            t.xb(
              1,
              4243456,
              null,
              0,
              dl.b,
              [b.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (n, e) {
            n(e, 1, 0, e.context.ngIf, e.component.IconCategory.List);
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 1).iconComponentHidden);
          },
        );
      }
      function $t(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              23,
              "div",
              [["class", "station"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              3,
              "div",
              [["class", "station__icon"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              2,
              0,
              null,
              null,
              2,
              "au3-icon-with-fallback",
              [
                ["au3ImageLockingCategory", ""],
                ["fallbackFileName", "E07F_media_tv.webp"],
              ],
              [
                [2, "icon-component--hidden", null],
                [2, "lock-state-hidden", null],
                [2, "lock-state-faded", null],
              ],
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(
              3,
              4964352,
              null,
              0,
              pl.a,
              [t.h, t.z, b.a],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                blocksRouting: [2, "blocksRouting"],
                fallbackFileName: [3, "fallbackFileName"],
              },
              null,
            ),
            t.xb(4, 212992, null, 0, hl.a, [yn.i, [2, yn.a], t.h], null, null),
            (n()(),
            t.yb(
              5,
              0,
              null,
              null,
              18,
              "div",
              [
                ["au3C2Cursor", ""],
                ["class", "station__text"],
              ],
              [
                [2, "c2-cursor", null],
                [2, "state-active", null],
              ],
              null,
              null,
              null,
              null,
            )),
            t.xb(
              6,
              16384,
              null,
              0,
              q.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
            t.xb(
              7,
              16384,
              null,
              0,
              on.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
            (n()(),
            t.yb(
              8,
              0,
              null,
              null,
              13,
              "div",
              [["class", "text-first-line"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              9,
              0,
              null,
              null,
              8,
              "div",
              [["class", "text-first-line__container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              10,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "text-first-line__container--name"],
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
              Fn.b,
              Fn.a,
            )),
            t.xb(
              11,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(12, 16384, null, 0, jn.a, [], null, null),
            t.xb(
              13,
              245760,
              null,
              0,
              zn.a,
              [[6, R.a], Bn.a, t.h, t.l, t.D, [2, Un.a], [2, jn.a], [2, Yn.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            (n()(),
            t.yb(
              14,
              0,
              null,
              null,
              3,
              "div",
              [["class", "text-first-line__container--content-group"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              15,
              0,
              null,
              null,
              2,
              "au3-tv-content-or-classification-group",
              [["id", ""]],
              null,
              null,
              null,
              Pt.b,
              Pt.a,
            )),
            t.xb(
              16,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              17,
              49152,
              null,
              0,
              Ct.a,
              [Et.a, _.a],
              { tvStation: [0, "tvStation"] },
              null,
            ),
            (n()(),
            t.yb(
              18,
              0,
              null,
              null,
              3,
              "div",
              [["class", "text-first-line__signal-quality-icon"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), t.hb(16777216, null, null, 2, null, Mt)),
            t.xb(
              20,
              16384,
              null,
              0,
              Sn.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Pb(131072, Sn.b, [t.h]),
            (n()(),
            t.yb(
              22,
              0,
              null,
              null,
              1,
              "au3-tv-program-info",
              [],
              null,
              null,
              null,
              It.b,
              It.a,
            )),
            t.xb(
              23,
              49152,
              null,
              0,
              wt.a,
              [],
              { tvStation: [0, "tvStation"], isFpk: [1, "isFpk"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(
              e,
              3,
              0,
              null == l.tvStation ? null : l.tvStation.logo,
              l.IconCategory.FpkList,
              !1,
              "E07F_media_tv.webp",
            ),
              n(e, 4, 0),
              n(e, 6, 0, l.isActive),
              n(e, 7, 0, l.isActive),
              n(e, 11, 0, "TvStationName"),
              n(
                e,
                13,
                0,
                "TvStationName",
                null == l.tvStation ? null : l.tvStation.name,
              ),
              n(e, 16, 0, ""),
              n(e, 17, 0, l.tvStation),
              n(
                e,
                20,
                0,
                t.Yb(e, 20, 0, t.Nb(e, 21).transform(l.audioStateIcon$$)),
              ),
              n(e, 23, 0, l.tvStation, !0));
          },
          function (n, e) {
            (n(
              e,
              2,
              0,
              t.Nb(e, 3).iconComponentHidden,
              t.Nb(e, 4).hide,
              t.Nb(e, 4).fade,
            ),
              n(e, 5, 0, t.Nb(e, 6).mib3Active, t.Nb(e, 7).mib3Active),
              n(
                e,
                10,
                0,
                t.Nb(e, 13).backgroundColor,
                t.Nb(e, 13).fixedNumberOfLines,
                t.Nb(e, 13).mayContainLatinCharsForArabic,
                t.Nb(e, 13).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      var Rt = l("soYi");
      class Vt {
        constructor(n, e, l, i) {
          ((this.tvService = n),
            (this.tvSettingsService = e),
            (this.cdr = l),
            (this.showNps = new t.n()),
            (this.tvListDisplay$$ = new tt.a(Rt.a.TV_LIST_STATIONS)),
            (this.listCursorSizeEnum = x.pb),
            (this.TvListDisplayEnum = Rt.a),
            (this.privacyHint = !1),
            (this.destroyed$$ = new g.a(1)),
            (this.isTvListEmpty = !1),
            (this.logger = i.getLogger("tv.FpkTvStationListComponent")));
        }
        ngOnInit() {
          Object(f.b)(
            this.tvService.tvStationList$,
            this.tvSettingsService.tvSettings$,
          )
            .pipe(
              Object(L.a)(([n, e]) => [n, e.privacy]),
              Object(O.a)(this.destroyed$$),
              Object(x.pd)(this.logger, "ngOnInit: tvStationList:"),
            )
            .subscribe(([n, e]) => {
              ((this.tvStations = n),
                (this.isTvListEmpty = 0 === n.stations.paging.total),
                this.setStateOfStationList(),
                (this.privacyHint = h.s.RECENTS === n.tunerType && e),
                this.cdr.markForCheck());
            });
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        ngAfterViewInit() {
          (Object(f.b)(
            this.stationElement.changes,
            this.tvService.activeRsiTvTuner$,
          )
            .pipe(Object(O.a)(this.destroyed$$), Object(y.a)(1))
            .subscribe(([, n]) => {
              void 0 !== n.selectedStationIndex &&
                this.scrollToActiveStation(n.selectedStationIndex);
            }),
            Object(f.b)(
              this.stationElement.changes,
              this.tvService.activeRsiTvTuner$,
            )
              .pipe(
                Object(L.a)(([, n]) => n.selectedStationIndex),
                Object(S.a)(),
                Object(El.a)(),
                Object(O.a)(this.destroyed$$),
              )
              .subscribe(([n, e]) => {
                this.stationElement.first.keepSelectionFocused(n, e);
              }));
        }
        tvStationClicked(n) {
          (this.logger.info("tvStationClicked: station name:", n.name),
            this.tvService.updateSelectedTvStation(n).subscribe((n) => {
              (this.logger.info("tvStationClicked: response:", n),
                this.tvService.activeRsiTvTuner$
                  .pipe(Object(O.a)(this.destroyed$$), Object(y.a)(1))
                  .subscribe((n) => {
                    this.tvService.isCasState(n)
                      ? this.logger.info(
                          "tvStationClicked: Do not redirect to Fpk Tv OSD after click on station because state is CAS",
                        )
                      : (this.logger.info(
                          "tvStationClicked: Redirect to Fpk Tv OSD after click on station",
                        ),
                        this.showNps.emit());
                  }));
            }));
        }
        onIdleTimer() {
          this.showNps.emit();
        }
        scrollToActiveStation(n) {
          this.stationElement.first.selectIndex(n);
        }
        setStateOfStationList() {
          (this.isTvListEmpty ||
            this.tvListDisplay$$.next(Rt.a.TV_LIST_STATIONS),
            h.s.RECENTS === this.tvStations.tunerType &&
              this.isTvListEmpty &&
              this.tvListDisplay$$.next(Rt.a.TV_LIST_HISTORY_EMPTY),
            h.s.FAVORITES === this.tvStations.tunerType &&
              this.isTvListEmpty &&
              this.tvListDisplay$$.next(Rt.a.TV_LIST_FAV_EMPTY));
        }
      }
      var Ft = t.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.content-container[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:center;height:354px;min-height:0}.main-area__content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.privacy-hint[_ngcontent-%COMP%]{text-align:center;font-size:40px;height:120px;padding:10px 3px 0 128px}.component-layout-arabic[_nghost-%COMP%]   .privacy-hint[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .privacy-hint[_ngcontent-%COMP%]{direction:rtl}.component-layout-latin[_nghost-%COMP%]   .privacy-hint[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .privacy-hint[_ngcontent-%COMP%]{direction:ltr}",
          ],
        ],
        data: {},
      });
      function zt(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "privacy-hint"],
                ["id", "TvPrivacyHint"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Fn.b,
              Fn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              245760,
              null,
              0,
              zn.a,
              [[6, R.a], Bn.a, t.h, t.l, t.D, [2, Un.a], [2, jn.a], [2, Yn.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "TvPrivacyHint"),
              n(
                e,
                2,
                0,
                "Die letzten Sender werden aufgrund ihrer\nPrivatsph\xe4reeinstellungen nicht gespeichert oder angezeigt.",
                "TvPrivacyHint",
                2,
              ));
          },
          function (n, e) {
            n(
              e,
              0,
              0,
              t.Nb(e, 2).backgroundColor,
              t.Nb(e, 2).fixedNumberOfLines,
              t.Nb(e, 2).mayContainLatinCharsForArabic,
              t.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Bt(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              8,
              "au3-fpk-tv-station-list-item",
              [],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (n, e, l) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t =
                      !1 !==
                        n.component.tvStationClicked(n.context.$implicit) && t),
                  t
                );
              },
              $t,
              kt,
            )),
            t.xb(1, 147456, null, 0, k.a, [t.l, t.z], null, null),
            t.xb(
              2,
              147456,
              null,
              0,
              M.a,
              [k.a, [2, $.a], [2, R.a], b.a],
              null,
              null,
            ),
            t.xb(
              3,
              212992,
              null,
              0,
              z.a,
              [
                b.a,
                B.b,
                M.a,
                [2, $.a],
                [2, R.a],
                [2, V.a],
                [2, U.a],
                [2, r.a],
                t.z,
                j.a,
                t.l,
                [2, Y.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, H.a, H.a, [[3, H.a]]),
            t.xb(
              5,
              4407296,
              null,
              0,
              K.a,
              [
                t.l,
                G.a,
                t.h,
                H.a,
                [2, W.a],
                [2, $.b],
                [2, $.a],
                [2, Q.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              147456,
              null,
              0,
              J.a,
              [
                [2, z.a],
                [2, V.a],
                [2, nn.a],
                [2, K.a],
                [2, en.b],
                t.l,
                ln.a,
                tn.b,
              ],
              null,
              null,
            ),
            t.xb(
              7,
              147456,
              null,
              0,
              an.a,
              [[2, K.a], [2, z.a], [2, B.b], un.a],
              null,
              null,
            ),
            t.xb(
              8,
              49152,
              null,
              0,
              At,
              [Dt.a],
              { isActive: [0, "isActive"], station: [1, "station"] },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 3, 0),
              n(e, 5, 0),
              n(
                e,
                8,
                0,
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.hasSelectedStation,
                e.context.$implicit,
              ));
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 5).markerClassEnabled);
          },
        );
      }
      function Ut(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-list",
              [
                ["au3ListDomPaging", ""],
                ["class", "main-area__content"],
                ["id", ""],
              ],
              [[2, "list--with-line-numbers", null]],
              [[null, "mib3IdleTimer"]],
              function (n, e, l) {
                var t = !0;
                return (
                  "mib3IdleTimer" === e &&
                    (t = !1 !== n.component.onIdleTimer() && t),
                  t
                );
              },
              mn.b,
              mn.a,
            )),
            t.Sb(6144, null, pn.a, null, [hn.a]),
            t.xb(
              2,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 16384, null, 0, xn.a, [t.l], null, null),
            t.xb(
              4,
              16384,
              null,
              0,
              gn.a,
              [b.a],
              { itemHeightGuess: [0, "itemHeightGuess"] },
              null,
            ),
            t.xb(
              5,
              12828672,
              [[2, 4]],
              1,
              hn.a,
              [
                [2, gn.a],
                [2, cn.a],
                [8, null],
                [2, R.a],
                [2, fn.a],
                [2, vn.a],
                [2, B.b],
                yn.i,
                t.z,
                t.h,
                b.a,
                Ln.a,
                On.a,
                [2, G.a],
                $.a,
                [2, yn.a],
              ],
              {
                showCursor: [0, "showCursor"],
                cursorSize: [1, "cursorSize"],
                itemHeightGuess: [2, "itemHeightGuess"],
                defaultTemplate: [3, "defaultTemplate"],
                items: [4, "items"],
                stabilized: [5, "stabilized"],
              },
              null,
            ),
            t.Tb(603979776, 3, { template: 0 }),
            t.xb(
              7,
              4407296,
              [[1, 4]],
              0,
              en.c,
              [[2, R.a], [2, en.a], [2, en.b], un.a, t.z, b.a],
              { idleTimeout: [0, "idleTimeout"] },
              { idleTimer: "mib3IdleTimer" },
            ),
            (n()(), t.hb(16777216, [[3, 2]], 0, 1, null, zt)),
            t.xb(
              9,
              16384,
              null,
              0,
              Sn.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            t.hb(
              0,
              [
                [3, 2],
                ["stationListItem", 2],
              ],
              0,
              0,
              null,
              Bt,
            )),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 2, 0, ""),
              n(e, 4, 0, 99),
              n(
                e,
                5,
                0,
                !0,
                l.listCursorSizeEnum.COVER_THUMBNAIL,
                99,
                t.Nb(e, 10),
                null == l.tvStations ? null : l.tvStations.stations.data,
                !0,
              ),
              n(e, 7, 0, 1e4),
              n(e, 9, 0, l.privacyHint));
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 5).showLineNumbers);
          },
        );
      }
      function jt(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "tv-list-error"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-instruction-text",
              [["id", "TvListFavoritesEmpty"]],
              null,
              null,
              null,
              ue.b,
              ue.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              3,
              49152,
              null,
              0,
              oe.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryFixedNumberOfLines: [1, "primaryFixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 2, 0, "TvListFavoritesEmpty"),
              n(
                e,
                3,
                0,
                "Currently no favorites stored.\nAdd your favorite TV stations via options.",
                5,
              ));
          },
          null,
        );
      }
      function Yt(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "tv-list-error"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-instruction-text",
              [["id", "TvListHistoryEmpty"]],
              null,
              null,
              null,
              ue.b,
              ue.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              3,
              49152,
              null,
              0,
              oe.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryFixedNumberOfLines: [1, "primaryFixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 2, 0, "TvListHistoryEmpty"),
              n(e, 3, 0, "Currently no Last stations available.", 5));
          },
          null,
        );
      }
      function Ht(n) {
        return t.ac(
          2,
          [
            t.Tb(671088640, 1, { timer: 0 }),
            t.Tb(671088640, 2, { stationElement: 1 }),
            (n()(),
            t.yb(
              2,
              0,
              null,
              null,
              8,
              "div",
              [["class", "content-container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            t.xb(
              3,
              16384,
              null,
              0,
              Sn.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            t.Pb(131072, Sn.b, [t.h]),
            (n()(), t.hb(16777216, null, null, 1, null, Ut)),
            t.xb(
              6,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, jt)),
            t.xb(
              8,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Yt)),
            t.xb(
              10,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 3, 0, t.Yb(e, 3, 0, t.Nb(e, 4).transform(l.tvListDisplay$$))),
              n(e, 6, 0, l.TvListDisplayEnum.TV_LIST_STATIONS),
              n(e, 8, 0, l.TvListDisplayEnum.TV_LIST_FAV_EMPTY),
              n(e, 10, 0, l.TvListDisplayEnum.TV_LIST_HISTORY_EMPTY));
          },
          null,
        );
      }
      var Kt = l("Woni"),
        Gt = l("pDjz"),
        Wt = l("dxd1"),
        Qt = l("sYA+"),
        Xt = l("6LP9"),
        Zt = l("L8Px"),
        qt = l("oPv+");
      class Jt {
        constructor(n, e, l) {
          ((this.tvService = n),
            (this.tvAudioStateService = e),
            (this.showList = new t.n()),
            (this.IconCategory = x.Z),
            (this.logger = l.getLogger("tv.FpkTvNpsComponent")),
            (this.signalQualityIcon$ =
              this.tvAudioStateService.getAudioStateIconForFpkNps$()));
        }
        onKeyDown(n) {
          (n.key !== x.eb.MFW_ROLLER_DOWN &&
            n.key !== x.eb.MFW_ROLLER_UP &&
            n.key !== x.eb.HK_BACK) ||
            (this.logger.info(
              "onKeyDown: MFL triggered, routing to tv station list.",
            ),
            this.showList.emit());
        }
      }
      var ni = t.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.fpk-stage-small[_nghost-%COMP%]   .station__info[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .station__info[_ngcontent-%COMP%]{width:340px}.fpk-stage-small[_nghost-%COMP%]   .station__logo[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .station__logo[_ngcontent-%COMP%]{display:none}.component-layout-arabic[_nghost-%COMP%]   .station__info[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .station__info[_ngcontent-%COMP%]{direction:rtl}[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}.station[_ngcontent-%COMP%]{display:flex;flex-direction:row}.station__info[_ngcontent-%COMP%]{flex-grow:3;display:flex;flex-direction:column;font-size:38px;margin-top:20px;max-width:498px}.station__program-info[_ngcontent-%COMP%]{font-size:28px}.station__program-info--margin[_ngcontent-%COMP%]{margin-top:100px}.station__signal-quality-icon[_ngcontent-%COMP%]{margin:24px 2px 0;width:40px}.station__logo[_ngcontent-%COMP%]{margin:12px 0;min-width:250px;max-width:250px;height:250px;transform:perspective(1500px) rotate3d(0,-1,0,15deg);transform-style:preserve-3d}",
          ],
        ],
        data: {
          animation: [
            {
              type: 7,
              name: "playerNps",
              definitions: [
                {
                  type: 1,
                  expr: ":enter",
                  animation: [
                    {
                      type: 3,
                      steps: [
                        {
                          type: 11,
                          selector: "@playerNpsContent",
                          animation: { type: 9, options: null },
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: "@playerNpsControls",
                          animation: { type: 9, options: null },
                          options: { optional: !0 },
                        },
                      ],
                      options: null,
                    },
                  ],
                  options: null,
                },
                {
                  type: 1,
                  expr: ":leave",
                  animation: [
                    {
                      type: 3,
                      steps: [
                        {
                          type: 11,
                          selector: "@playerNpsContent",
                          animation: { type: 9, options: null },
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: "@playerNpsControls",
                          animation: { type: 9, options: null },
                          options: { optional: !0 },
                        },
                      ],
                      options: null,
                    },
                  ],
                  options: null,
                },
              ],
              options: {},
            },
            {
              type: 7,
              name: "playerNpsContent",
              definitions: [
                {
                  type: 1,
                  expr: ":enter",
                  animation: [
                    {
                      type: 6,
                      styles: { opacity: 0, transform: "scale(0.9)" },
                      offset: null,
                    },
                    {
                      type: 4,
                      styles: null,
                      timings: "300ms cubic-bezier(.4,.65,.6,.83)",
                    },
                  ],
                  options: null,
                },
                {
                  type: 1,
                  expr: ":leave",
                  animation: [
                    {
                      type: 4,
                      styles: {
                        type: 6,
                        styles: { opacity: 0, transform: "scale(0.9)" },
                        offset: null,
                      },
                      timings: "300ms cubic-bezier(.4,.17,.6,.35)",
                    },
                  ],
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function ei(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              24,
              "div",
              [["class", "station"]],
              [[24, "@playerNpsContent", 0]],
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              16,
              "div",
              [["class", "station__info"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              2,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["id", "TvStationName"],
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
              Fn.b,
              Fn.a,
            )),
            t.xb(
              3,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(4, 16384, null, 0, jn.a, [], null, null),
            t.xb(
              5,
              245760,
              null,
              0,
              zn.a,
              [[6, R.a], Bn.a, t.h, t.l, t.D, [2, Un.a], [2, jn.a], [2, Yn.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            (n()(),
            t.yb(
              6,
              0,
              null,
              null,
              2,
              "au3-tv-classification-group",
              [["id", ""]],
              null,
              null,
              null,
              Kt.b,
              Kt.a,
            )),
            t.xb(
              7,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(8, 49152, null, 0, Gt.a, [Et.a, _.a], null, null),
            (n()(),
            t.yb(
              9,
              0,
              null,
              null,
              8,
              "div",
              [["class", "station__program-info"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              10,
              0,
              null,
              null,
              4,
              "div",
              [["class", "station__program-info--margin"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              11,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["id", "ProgramInfo"],
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
              Fn.b,
              Fn.a,
            )),
            t.xb(
              12,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(13, 16384, null, 0, jn.a, [], null, null),
            t.xb(
              14,
              245760,
              null,
              0,
              zn.a,
              [[6, R.a], Bn.a, t.h, t.l, t.D, [2, Un.a], [2, jn.a], [2, Yn.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            (n()(),
            t.yb(
              15,
              0,
              null,
              null,
              2,
              "au3-tv-content-group",
              [["id", ""]],
              null,
              null,
              null,
              Wt.b,
              Wt.a,
            )),
            t.xb(
              16,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(17, 49152, null, 0, Qt.a, [_.a], null, null),
            (n()(),
            t.yb(
              18,
              0,
              null,
              null,
              3,
              "div",
              [["class", "station__signal-quality-icon"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              19,
              0,
              null,
              null,
              2,
              "au3-icon",
              [],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              bl.b,
              bl.a,
            )),
            t.xb(
              20,
              4243456,
              null,
              0,
              dl.b,
              [b.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            t.Pb(131072, Sn.b, [t.h]),
            (n()(),
            t.yb(
              22,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["au3ImageLockingCategory", ""],
                ["class", "station__logo"],
              ],
              [
                [2, "icon-component--hidden", null],
                [2, "lock-state-hidden", null],
                [2, "lock-state-faded", null],
              ],
              null,
              null,
              bl.b,
              bl.a,
            )),
            t.xb(
              23,
              4243456,
              null,
              0,
              dl.b,
              [b.a, t.z],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                blocksRouting: [2, "blocksRouting"],
                ignoreCategorySize: [3, "ignoreCategorySize"],
              },
              null,
            ),
            t.xb(24, 212992, null, 0, hl.a, [yn.i, [2, yn.a], t.h], null, null),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 3, 0, "TvStationName"),
              n(
                e,
                5,
                0,
                "TvStationName",
                (null == e.context.mib3Let ? null : e.context.mib3Let.name) ||
                  "",
              ),
              n(e, 7, 0, ""),
              n(e, 12, 0, "ProgramInfo"),
              n(
                e,
                14,
                0,
                "ProgramInfo",
                (null == e.context.mib3Let ||
                null == e.context.mib3Let.selectedStation
                  ? null
                  : e.context.mib3Let.selectedStation.nowProgramInfo) || "",
              ),
              n(e, 16, 0, ""),
              n(
                e,
                20,
                0,
                t.Yb(e, 20, 0, t.Nb(e, 21).transform(l.signalQualityIcon$)),
                l.IconCategory.List,
              ),
              n(
                e,
                23,
                0,
                null == e.context.mib3Let ? null : e.context.mib3Let.logo,
                l.IconCategory.Cover,
                !1,
                !0,
              ),
              n(e, 24, 0));
          },
          function (n, e) {
            (n(e, 0, 0, !0),
              n(
                e,
                2,
                0,
                t.Nb(e, 5).backgroundColor,
                t.Nb(e, 5).fixedNumberOfLines,
                t.Nb(e, 5).mayContainLatinCharsForArabic,
                t.Nb(e, 5).shortenWithEllipsisForArabic,
              ),
              n(
                e,
                11,
                0,
                t.Nb(e, 14).backgroundColor,
                t.Nb(e, 14).fixedNumberOfLines,
                t.Nb(e, 14).mayContainLatinCharsForArabic,
                t.Nb(e, 14).shortenWithEllipsisForArabic,
              ),
              n(e, 19, 0, t.Nb(e, 20).iconComponentHidden),
              n(
                e,
                22,
                0,
                t.Nb(e, 23).iconComponentHidden,
                t.Nb(e, 24).hide,
                t.Nb(e, 24).fade,
              ));
          },
        );
      }
      function li(n) {
        return t.ac(
          2,
          [
            (n()(), t.hb(16777216, null, null, 2, null, ei)),
            t.xb(
              1,
              16384,
              null,
              0,
              Zn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, Sn.b, [t.h]),
            (n()(),
            t.yb(
              3,
              0,
              null,
              null,
              2,
              "div",
              [["class", "progressbar__container"]],
              [[24, "@playerNpsContent", 0]],
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              4,
              0,
              null,
              null,
              1,
              "au3-tv-progressbar",
              [],
              null,
              null,
              null,
              Xt.b,
              Xt.a,
            )),
            t.xb(
              5,
              245760,
              null,
              0,
              Zt.a,
              [qt.a, _.a, b.a],
              { isTimeVisible: [0, "isTimeVisible"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(
              e,
              1,
              0,
              t.Yb(e, 1, 0, t.Nb(e, 2).transform(l.tvService.selectedStation$)),
            ),
              n(e, 5, 0, !0));
          },
          function (n, e) {
            n(e, 3, 0, !0);
          },
        );
      }
      var ti = l("kmon"),
        ii = l("zgYn");
      class ai {
        constructor(n, e, l) {
          ((this.tvService = n),
            (this.fpkMediaRoutingService = e),
            (this.TvTitleLineSecondaryDeveloperTextEnum = ii.a),
            (this.TvPlayerModeEnum = ti.a),
            (this.tvPlayerComponentState$$ = new tt.a(new ti.b())),
            (this.destroyed$$ = new g.a(1)),
            (this.tvTunerType$ = new tt.a(h.s.TV)),
            (this.logger = l.getLogger("tv.FpkTvPlayerComponent")));
        }
        ngOnInit() {
          (this.subscribeOnRsiTvTunerType(), this.subscribeOnTvTunerType());
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        setToNps() {
          const n = new ti.b();
          ((n.playerMode = ti.a.OSD),
            (n.secondLineText = ii.a.NPS),
            (n.animationState = x.Bd),
            this.tvPlayerComponentState$$.next(n));
        }
        setToList() {
          const n = new ti.b();
          ((n.playerMode = ti.a.LIST),
            (n.animationState = x.Cd),
            (n.tunerType = this.tvTunerType$.value));
          const e = ti.c.get(this.tvTunerType$.value);
          (e && (n.secondLineText = e), this.tvPlayerComponentState$$.next(n));
        }
        subscribeOnRsiTvTunerType() {
          this.tvService.activeRsiTvTuner$
            .pipe(Object(O.a)(this.destroyed$$))
            .subscribe((n) => {
              (this.logger.info(
                `reactOnRsiTvTuner: RsiTvTuner state: ${n.state}, type: ${n.type}`,
              ),
                n.type && this.tvTunerType$.next(n.type),
                this.tvService.isEsmState(n) &&
                  this.fpkMediaRoutingService.goToTvEsm());
            });
        }
        subscribeOnTvTunerType() {
          this.tvTunerType$
            .pipe(
              Object(O.a)(this.destroyed$$),
              Object(S.a)(),
              Object(v.a)(x.wd),
            )
            .subscribe((n) => {
              const e = this.tvPlayerComponentState$$.value;
              if (((e.tunerType = n), e.playerMode === ti.a.LIST)) {
                const l = ti.c.get(n);
                l && (e.secondLineText = l);
              }
              this.tvPlayerComponentState$$.next(e);
            });
        }
      }
      var ui = t.wb({
        encapsulation: 0,
        styles: [
          [
            ".player[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;position:relative;flex-direction:column;height:100%}",
          ],
        ],
        data: {
          animation: [
            {
              type: 7,
              name: "playerState",
              definitions: [
                {
                  type: 1,
                  expr: "play-view => nps",
                  animation: [
                    {
                      type: 11,
                      selector: ":leave",
                      animation: {
                        type: 6,
                        styles: {
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                        },
                        offset: null,
                      },
                      options: { optional: !0 },
                    },
                    {
                      type: 2,
                      steps: [
                        {
                          type: 11,
                          selector: ":leave",
                          animation: [
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { transform: "translateY(150%)" },
                                offset: null,
                              },
                              timings: "300ms cubic-bezier(.4,.17,.6,.35)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: ":enter",
                          animation: { type: 9, options: null },
                          options: { optional: !0 },
                        },
                      ],
                      options: null,
                    },
                  ],
                  options: null,
                },
                {
                  type: 1,
                  expr: "nps => play-view",
                  animation: [
                    {
                      type: 11,
                      selector: ":enter",
                      animation: {
                        type: 6,
                        styles: {
                          opacity: 0,
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                        },
                        offset: null,
                      },
                      options: { optional: !0 },
                    },
                    {
                      type: 2,
                      steps: [
                        {
                          type: 11,
                          selector: ":leave",
                          animation: { type: 9, options: null },
                          options: { optional: !0 },
                        },
                        {
                          type: 11,
                          selector: ":enter",
                          animation: [
                            {
                              type: 6,
                              styles: { transform: "translateY(150%)" },
                              offset: null,
                            },
                            {
                              type: 4,
                              styles: null,
                              timings: "300ms cubic-bezier(.4,.65,.6,.83)",
                            },
                          ],
                          options: { optional: !0 },
                        },
                      ],
                      options: null,
                    },
                  ],
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function oi(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-fpk-tv-station-list",
              [["id", "TvFpkList"]],
              null,
              [[null, "showNps"]],
              function (n, e, l) {
                var t = !0;
                return (
                  "showNps" === e && (t = !1 !== n.component.setToNps() && t),
                  t
                );
              },
              Ht,
              Ft,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, Vt, [_.a, Et.a, t.h, b.a], null, {
              showNps: "showNps",
            }),
          ],
          function (n, e) {
            (n(e, 1, 0, "TvFpkList"), n(e, 2, 0));
          },
          null,
        );
      }
      function ri(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-fpk-tv-nps",
              [["id", "TvFpkNps"]],
              [[40, "@playerNps", 0]],
              [
                [null, "showList"],
                ["screen", "keydown"],
              ],
              function (n, e, l) {
                var i = !0,
                  a = n.component;
                return (
                  "screen:keydown" === e &&
                    (i = !1 !== t.Nb(n, 2).onKeyDown(l) && i),
                  "showList" === e && (i = !1 !== a.setToList() && i),
                  i
                );
              },
              li,
              ni,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 49152, null, 0, Jt, [_.a, Dt.a, b.a], null, {
              showList: "showList",
            }),
          ],
          function (n, e) {
            n(e, 1, 0, "TvFpkNps");
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 2).nps);
          },
        );
      }
      function si(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-fpk-screen",
              [["id", "Screen:TV_FPK_PLAYER_*"]],
              null,
              null,
              null,
              rn.b,
              rn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              R.a,
              [t.l, t.D, c.a, b.a, [3, R.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 114688, null, 0, sn.a, [], null, null),
            t.Sb(256, null, cn.a, sn.b, []),
            (n()(),
            t.yb(
              4,
              0,
              null,
              0,
              1,
              "au3-fpk-title-line",
              [],
              [[2, "priority-shrink", null]],
              null,
              null,
              Mn.b,
              Mn.a,
            )),
            t.xb(
              5,
              49152,
              null,
              0,
              $n.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryId: [1, "primaryId"],
                secondaryDeveloperText: [2, "secondaryDeveloperText"],
                secondaryIdEnumType: [3, "secondaryIdEnumType"],
                secondaryId: [4, "secondaryId"],
              },
              null,
            ),
            (n()(),
            t.yb(
              6,
              0,
              null,
              0,
              5,
              "div",
              [["class", "player"]],
              [[24, "@playerState", 0]],
              null,
              null,
              null,
              null,
            )),
            t.xb(
              7,
              16384,
              null,
              0,
              Sn.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, oi)),
            t.xb(
              9,
              278528,
              null,
              0,
              Sn.p,
              [t.P, t.L, Sn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, ri)),
            t.xb(11, 16384, null, 0, Sn.q, [t.P, t.L, Sn.o], null, null),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, "Screen:TV_FPK_PLAYER_*"),
              n(e, 2, 0),
              n(
                e,
                5,
                0,
                "TV",
                "TvFpkTitleLinePrimary",
                e.context.mib3Let.secondLineText,
                l.TvTitleLineSecondaryDeveloperTextEnum,
                e.context.mib3Let.secondLineText,
              ),
              n(e, 7, 0, e.context.mib3Let.playerMode),
              n(e, 9, 0, l.TvPlayerModeEnum.LIST));
          },
          function (n, e) {
            (n(e, 4, 0, t.Nb(e, 5).isPriorityShrink),
              n(e, 6, 0, e.context.mib3Let.animationState));
          },
        );
      }
      function ci(n) {
        return t.ac(
          2,
          [
            (n()(), t.hb(16777216, null, null, 2, null, si)),
            t.xb(
              1,
              16384,
              null,
              0,
              Zn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, Sn.b, [t.h]),
          ],
          function (n, e) {
            var l = e.component;
            n(
              e,
              1,
              0,
              t.Yb(e, 1, 0, t.Nb(e, 2).transform(l.tvPlayerComponentState$$)),
            );
          },
          null,
        );
      }
      function bi(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-fpk-tv-player",
              [],
              null,
              null,
              null,
              ci,
              ui,
            )),
            t.xb(1, 245760, null, 0, ai, [_.a, N.b, b.a], null, null),
          ],
          function (n, e) {
            n(e, 1, 0);
          },
          null,
        );
      }
      var di = t.ub("au3-fpk-tv-player", ai, bi, {}, {}, []),
        mi = l("aDqW"),
        pi = l("/W5r"),
        hi = l("+Qv1"),
        xi = l("XtoR"),
        gi = l("jTHl"),
        fi = l("zL3T"),
        vi = l("S3zX"),
        yi = l("qsYA"),
        Li = l("zRUB"),
        Oi = l("B0zL"),
        Si = l("ZiU+"),
        Ti = l("zKYc");
      class _i extends x.cc {
        constructor(n, e) {
          (super(e.getLogger("media.FpkMediaPlayerGuard")),
            (this.mediaStateService = n));
        }
        checkActivation(n, e) {
          return this.mediaStateService.loadingState$.pipe(
            Object(y.a)(1),
            Object(L.a)((e) =>
              x.i.matchIntendedRoute(n, N.a.Error)
                ? e === be.a.ERROR
                : x.i.matchIntendedRoute(n, N.a.LoadingSource)
                  ? e === be.a.LOADING_SOURCE
                  : x.i.matchIntendedRoute(n, N.a.Player)
                    ? e === be.a.READY_PLAYVIEWORNPS
                    : !!x.i.matchIntendedRoute(n, N.a.Init) && e === be.a.INIT,
            ),
          );
        }
      }
      var Ni = l("+epw"),
        Pi = l("zMPs"),
        Ci = l("6Yk8"),
        Ei = l("u6+O"),
        Ii = l("CIQC"),
        wi = l("REmV"),
        Di = l("Y3N+"),
        Ai = l("MJxn"),
        ki = l("eIOF"),
        Mi = l("t+4g"),
        $i = l("myjn"),
        Ri = l("fOZ7");
      class Vi {}
      var Fi = l("TBks"),
        zi = l("QDrj"),
        Bi = l("YCQm"),
        Ui = l("mAkA"),
        ji = l("yNl6"),
        Yi = t.vb(i, [], function (n) {
          return t.Kb([
            t.Lb(512, t.j, t.X, [
              [8, [a.a, D, kn, Qn, te, cl, pt, Lt, Nt, di]],
              [3, t.j],
              t.x,
            ]),
            t.Lb(4608, Sn.m, Sn.l, [t.u]),
            t.Lb(4608, mi.h, mi.g, []),
            t.Lb(4608, mi.d, mi.f, []),
            t.Lb(4608, mi.j, mi.e, []),
            t.Lb(4608, mi.c, mi.b, []),
            t.Lb(4608, mi.k, mi.k, [
              mi.l,
              mi.h,
              mi.d,
              mi.j,
              mi.c,
              mi.m,
              mi.o,
              mi.n,
              mi.a,
            ]),
            t.Lb(4608, pi.b, pi.b, [hi.e, [2, pi.a]]),
            t.Lb(4608, xi.b, xi.b, [hi.e, [2, xi.a]]),
            t.Lb(4608, gi.b, gi.b, [hi.e, [2, gi.a]]),
            t.Lb(4608, fi.b, fi.b, [hi.e, [2, fi.a]]),
            t.Lb(4608, vi.a, vi.a, [it.a, b.a]),
            t.Lb(4608, yi.a, yi.a, [Li.b, b.a]),
            t.Lb(4608, Oi.a, Oi.a, [Si.a, b.a]),
            t.Lb(4608, Ti.a, Ti.a, [_.a, b.a]),
            t.Lb(4608, _i, _i, [it.a, b.a]),
            t.Lb(1073742336, Sn.c, Sn.c, []),
            t.Lb(1073742336, mi.i, mi.i, []),
            t.Lb(1073742336, Ni.a, Ni.a, []),
            t.Lb(1073742336, Pi.a, Pi.a, []),
            t.Lb(1073742336, Ci.a, Ci.a, []),
            t.Lb(1073742336, Ei.a, Ei.a, []),
            t.Lb(1073742336, Ii.a, Ii.a, []),
            t.Lb(1073742336, wi.a, wi.a, []),
            t.Lb(1073742336, Di.a, Di.a, []),
            t.Lb(1073742336, Ai.a, Ai.a, []),
            t.Lb(1073742336, ki.a, ki.a, []),
            t.Lb(1073742336, Mi.a, Mi.a, []),
            t.Lb(1073742336, $i.a, $i.a, []),
            t.Lb(1073742336, Ri.a, Ri.a, []),
            t.Lb(1073742336, d.n, d.n, [
              [2, d.s],
              [2, d.m],
            ]),
            t.Lb(1073742336, Vi, Vi, []),
            t.Lb(1073742336, Fi.a, Fi.a, []),
            t.Lb(1073742336, zi.a, zi.a, []),
            t.Lb(1073742336, Bi.a, Bi.a, []),
            t.Lb(1073742336, Ui.a, Ui.a, []),
            t.Lb(1073742336, ji.a, ji.a, []),
            t.Lb(1073742336, i, i, []),
            t.Lb(256, mi.o, void 0, []),
            t.Lb(256, mi.m, void 0, []),
            t.Lb(256, mi.n, void 0, []),
            t.Lb(256, mi.a, void 0, []),
            t.Lb(
              1024,
              d.k,
              function () {
                return [
                  [
                    {
                      path: "",
                      component: P,
                      children: [
                        { path: "source-selection", component: En },
                        { path: "init", component: Hn },
                        {
                          path: "loading-source",
                          component: qn,
                          canActivate: [_i],
                        },
                        { path: "error", component: me, canActivate: [_i] },
                        { path: "player", component: ut, canActivate: [_i] },
                        {
                          path: "tv",
                          children: [
                            { path: "init", component: xt },
                            {
                              path: "",
                              canActivateChild: [Ti.a],
                              children: [
                                { path: "esm", component: Ot },
                                { path: "player", component: ai },
                              ],
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
    aMy3: function (n, e, l) {
      "use strict";
      (l.d(e, "c", function () {
        return i;
      }),
        l.d(e, "b", function () {
          return a;
        }),
        l.d(e, "a", function () {
          return u;
        }),
        l.d(e, "e", function () {
          return o;
        }),
        l.d(e, "d", function () {
          return r;
        }));
      var t = l("RJia"),
        i = (function (n) {
          return (
            (n.USB_DEFAULT = "USB-Ger\xe4t"),
            (n.USB_1 = "USB-Ger\xe4t 1"),
            (n.USB_2 = "USB-Ger\xe4t 2"),
            (n.USB_3 = "USB-Ger\xe4t 3"),
            (n.USB_4 = "USB-Ger\xe4t 4"),
            (n.IPOD = "Externes Ger\xe4t"),
            (n.CARPLAY = "Apple CarPlay"),
            (n.DVD = "DVD"),
            (n.DVD_CHANGER = "DVD-Wechsler"),
            (n.TV = "TV"),
            (n.BLUETOOTH = "BLUETOOTH"),
            (n.ONLINEMEDIA = "Onlinemedien"),
            (n.ALEXA = "Amazon Alexa"),
            n
          );
        })({}),
        a = (function (n) {
          return (
            (n.LAST_PLAYED_SONG = "Last played song"),
            (n.SEARCH = "Search"),
            (n.ALBUMS = "Albums"),
            (n.ARTISTS = "Artists"),
            (n.GENRES = "Genres"),
            (n.VIDEOS = "Videos"),
            (n.TITLES = "Titles"),
            (n.FOLDERS = "Folders"),
            (n.PLAYLISTS = "Playlists"),
            (n.COMPOSERS = "Composers"),
            (n.AUDIOBOOKS = "Audiobooks"),
            (n.PODCASTS = "Podcasts"),
            (n.COMPILATIONS = "Compilations"),
            (n.ITUNESRADIO = "ITunesRadio"),
            n
          );
        })({}),
        u = (function (n) {
          return (
            (n.AUTO = "auto"),
            (n.DISP_4_to_3 = "4:3"),
            (n.DISP_16_to_9 = "16:9"),
            (n.ZOOM = "zoom"),
            (n.CINEMA = "cinemascope"),
            (n.ORIGINAL = "original"),
            n
          );
        })({}),
        o = (function (n) {
          return (
            (n.INACTIVE =
              "Das Abspielen dieser DVD wird durch die Kindersicherung\nverhindert. Es darf keine Sicherheitsstufe gesetzt sein."),
            (n.LEVEL1 =
              "Das Abspielen dieser DVD wird durch die Kindersicherung\nverhindert. Es muss die Sicherheitsstufe LEVEL1 gesetzt sein."),
            (n.LEVEL2 =
              "Das Abspielen dieser DVD wird durch die Kindersicherung\nverhindert. Es muss die Sicherheitsstufe LEVEL2 gesetzt sein."),
            (n.LEVEL3 =
              "Das Abspielen dieser DVD wird durch die Kindersicherung\nverhindert. Es muss die Sicherheitsstufe LEVEL3 gesetzt sein."),
            (n.LEVEL4 =
              "Das Abspielen dieser DVD wird durch die Kindersicherung\nverhindert. Es muss die Sicherheitsstufe LEVEL4 gesetzt sein."),
            (n.LEVEL5 =
              "Das Abspielen dieser DVD wird durch die Kindersicherung\nverhindert. Es muss die Sicherheitsstufe LEVEL5 gesetzt sein."),
            (n.LEVEL6 =
              "Das Abspielen dieser DVD wird durch die Kindersicherung\nverhindert. Es muss die Sicherheitsstufe LEVEL6 gesetzt sein."),
            (n.LEVEL7 =
              "Das Abspielen dieser DVD wird durch die Kindersicherung\nverhindert. Es muss die Sicherheitsstufe LEVEL7 gesetzt sein."),
            (n.LEVEL8 =
              "Das Abspielen dieser DVD wird durch die Kindersicherung\nverhindert. Es muss die Sicherheitsstufe LEVEL8 gesetzt sein."),
            n
          );
        })({});
      const r = {
        [t.o.INACTIVE]: o.INACTIVE,
        [t.o.LEVEL1]: o.LEVEL1,
        [t.o.LEVEL2]: o.LEVEL2,
        [t.o.LEVEL3]: o.LEVEL3,
        [t.o.LEVEL4]: o.LEVEL4,
        [t.o.LEVEL5]: o.LEVEL5,
        [t.o.LEVEL6]: o.LEVEL6,
        [t.o.LEVEL7]: o.LEVEL7,
        [t.o.LEVEL8]: o.LEVEL8,
      };
    },
    xS3h: function (n, e, l) {
      "use strict";
      (l.d(e, "a", function () {
        return s;
      }),
        l.d(e, "b", function () {
          return c;
        }));
      var t = l("Hnhs"),
        i = l("Yi6/"),
        a = l("kZht"),
        u = l("bou3"),
        o = l("sg2e"),
        r = l("yNay"),
        s = (function (n) {
          return (
            (n.saveShortcut = "Shortcut\nspeichern"),
            (n.SaveFavorite = "Favorit\nspeichern"),
            n
          );
        })({});
      let c = (() => {
        class n {
          constructor(n, e, l, t) {
            ((this.globalShortcutsService = n),
              (this.systemConfigService = e),
              (this.popupService = l),
              (this.initialSaveShortcutOption = {
                icon: "E3F0_save_shortcut_preset.webp",
                developerText: "Shortcut\nspeichern",
                visible: !1,
                enabled: !0,
                textId: s.saveShortcut,
              }),
              (this.logger = t.getLogger("main.ShortcutsOptionsService")));
          }
          saveShortcut(n) {
            return this.globalShortcutsService
              .addShortcut(n)
              .then((e) => {
                e === t.c.Saved
                  ? (this.logger.info(
                      `saveShortcut: Saved shortcut "${n.name}"`,
                    ),
                    this.popupService
                      .request(i.Ob.POPUP_TOAST_PRESET_SAVED)
                      .then((n) =>
                        this.logger.debug(
                          "saveShortcut: Show toast for successful saving of shortcut",
                          n,
                        ),
                      ))
                  : this.logger.warn(
                      `saveShortcut: Could not save shortcut "${n.name}"`,
                      e,
                    );
              })
              .catch((e) =>
                this.logger.error(
                  `saveShortcut: Could not save shortcut "${n.name}"`,
                  e,
                ),
              );
          }
          saveShortcutOption(n) {
            const e = this.globalShortcutsService.checkDuplicateShortcut(n);
            let l = void 0;
            return (
              this.globalShortcutsService.checkMaximumSavedShortcuts(n)
                ? (l = i.Ob.POPUP_TOAST_PRESET_MAXIMUM_PRESETS_SAVED)
                : e && (l = i.Ob.POPUP_TOAST_PRESET_ALREADY_SAVED),
              Object.assign(
                {},
                this.initialSaveShortcutOption,
                { disabledReason: l },
                { enabled: null == l },
                { visible: this.shortcutsAvailable },
              )
            );
          }
          get shortcutsAvailable() {
            return this.systemConfigService.isDualDisplay();
          }
        }
        return (
          (n.ɵprov = a.bc({
            factory: function () {
              return new n(a.cc(t.a), a.cc(u.a), a.cc(o.a), a.cc(r.a));
            },
            token: n,
            providedIn: "root",
          })),
          n
        );
      })();
    },
  },
]);
