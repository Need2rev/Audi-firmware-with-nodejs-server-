(window.webpackJsonp = window.webpackJsonp || []).push([
  [66],
  {
    "89Z2": function (n, e, l) {
      "use strict";
      (l.d(e, "a", function () {
        return i;
      }),
        l.d(e, "b", function () {
          return a;
        }));
      var t = l("kZht"),
        i =
          (l("kqft"),
          l("+sw+"),
          l("FfND"),
          l("bou3"),
          l("yNay"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                "[_nghost-%COMP%]{display:block;position:relative;height:100%;width:100%}",
              ],
            ],
            data: {
              animation: [
                {
                  type: 7,
                  name: "screenChange",
                  definitions: [
                    {
                      type: 0,
                      name: "*",
                      styles: { type: 6, styles: { opacity: 0 }, offset: null },
                      options: void 0,
                    },
                    {
                      type: 0,
                      name: "visible",
                      styles: { type: 6, styles: { opacity: 1 }, offset: null },
                      options: void 0,
                    },
                    {
                      type: 1,
                      expr: "void => visible",
                      animation: [],
                      options: null,
                    },
                    {
                      type: 1,
                      expr: "visible => upwards",
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
                              animation: [
                                {
                                  type: 4,
                                  styles: {
                                    type: 6,
                                    styles: {
                                      opacity: 0,
                                      transform: "scale(0.9)",
                                    },
                                    offset: null,
                                  },
                                  timings:
                                    "125ms cubic-bezier(.22,.43,.57,.85)",
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
                    {
                      type: 1,
                      expr: "visible => downwards",
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
                              animation: [
                                {
                                  type: 4,
                                  styles: {
                                    type: 6,
                                    styles: {
                                      opacity: 0,
                                      transform: "scale(1.1)",
                                    },
                                    offset: null,
                                  },
                                  timings:
                                    "125ms cubic-bezier(.22,.43,.57,.85)",
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
                    {
                      type: 1,
                      expr: "upwards => visible",
                      animation: [
                        {
                          type: 6,
                          styles: { opacity: 0, transform: "scale(1.1" },
                          offset: null,
                        },
                        {
                          type: 4,
                          styles: null,
                          timings: "125ms cubic-bezier(.22,.43,.57,.85)",
                        },
                      ],
                      options: null,
                    },
                    {
                      type: 1,
                      expr: "downwards => visible",
                      animation: [
                        {
                          type: 6,
                          styles: { opacity: 0, transform: "scale(0.9)" },
                          offset: null,
                        },
                        {
                          type: 4,
                          styles: null,
                          timings: "125ms cubic-bezier(.22,.43,.57,.85)",
                        },
                      ],
                      options: null,
                    },
                  ],
                  options: {},
                },
              ],
            },
          }));
      function a(n) {
        return t.ac(2, [t.Mb(null, 0)], null, null);
      }
    },
    Bab5: function (n, e, l) {
      "use strict";
      (l.r(e),
        l.d(e, "AsiModuleNgFactory", function () {
          return qe;
        }));
      var t = l("kZht"),
        i = l("Laid"),
        a = l("Yi6/"),
        o = l("bwdy"),
        u = l("t8AR"),
        r = l("o1hM"),
        c = l("J+dc"),
        s = l("llYL"),
        b = l("n95y"),
        p = l("Bubw"),
        d = l("682V");
      const h = {
          displayName: "",
          displayableName: a.J.EXTERNAL_SMARTHPHONE,
          layerName: "Layer_Media_Base",
          source: { x: 0, y: 0, w: p.f.width, h: p.f.height },
          target: {
            x: p.f.offsetX,
            y: p.f.offsetY,
            w: p.f.width,
            h: p.f.height,
          },
        },
        g = {
          bounds: {
            pointMin: { x: h.target.x, y: h.target.y },
            width: h.target.w,
            height: h.target.h,
          },
          translateInput: !0,
          translateX: -h.target.x,
          translateY: -h.target.y,
        };
      class f {
        constructor(n, e, l, t, i, a, u, c, s) {
          ((this.steeringWheelService = n),
            (this.displayManager = e),
            (this.inputRegionsService = l),
            (this.bgVisibilityService = t),
            (this.appVisibilityService = i),
            (this.spiService = a),
            (this.asiDisplayConfigurationService = u),
            (this.subscriptions = new o.a()),
            (this.regionName = "SMARTPHONE"),
            (this.hmiName = "HMI_ID_SMARTPHONE"),
            (this.logger = s.getLogger("asi.SpiVideoComponent")),
            (h.displayName = c.displayName),
            this.spiService
              .changeOwnerOfScreen(r.k.Device)
              .subscribe((n) =>
                this.logger.info("change onwer to device response: ", n),
              ));
        }
        ngOnInit() {
          (this.displayManager.activateLayer(h),
            this.bgVisibilityService.setBackgroundVisibility(
              a.k.Transparent,
              !1,
            ),
            a.gd.isBentley &&
              this.appVisibilityService.setStatusbarSize(b.a.Minimized),
            this.subscriptions.add(
              this.asiDisplayConfigurationService
                .getCurrentDeviceLayout$()
                .pipe(Object(c.a)(1))
                .subscribe((n) => {
                  (this.updateInputAndLayerRegion(n),
                    this.logger.info(
                      "add input region and update layer region:",
                      { deviceLayout: n, spiLayer: h, spiInputRegion: g },
                    ),
                    this.displayManager.updateLayerRegions(
                      h.layerName,
                      h.source,
                      h.target,
                    ),
                    this.inputRegionsService.addInputRegion(
                      h.displayName,
                      this.hmiName,
                      h.layerName,
                      this.regionName,
                      g,
                    ));
                }),
            ),
            this.subscriptions.add(
              this.spiService.currentActiveDevice$.subscribe((n) =>
                this.logger.info("current active smartphone device: ", n),
              ),
            ),
            this.spiService.displayableActive(!0));
        }
        ngOnDestroy() {
          (this.inputRegionsService.removeInputRegion(
            h.displayName,
            this.hmiName,
            h.layerName,
            this.regionName,
          ),
            this.displayManager.deactivateLayer(h.layerName),
            this.bgVisibilityService.setBackgroundVisibility(a.k.Opaque, !1),
            a.gd.isBentley &&
              this.appVisibilityService.setStatusbarSize(b.a.Normal),
            this.subscriptions.unsubscribe(),
            this.spiService.displayableActive(!1));
        }
        updateInputAndLayerRegion(n) {
          const e =
            this.steeringWheelService.currentSteeringWheelPosition ===
            a.jc.Right;
          ((h.source.w = n.width),
            (h.source.h = n.height),
            (h.target.w = n.width),
            (h.target.h = n.height),
            (h.target.x = e ? n.rightHandOffsetX : n.offsetX),
            (h.target.y = n.offsetY),
            (g.bounds.width = n.width),
            (g.bounds.height = n.height),
            (g.bounds.pointMin.x = e ? n.rightHandOffsetX : n.offsetX),
            (g.bounds.pointMin.y = n.offsetY),
            (g.translateX = e ? -n.rightHandOffsetX : -n.offsetX),
            (g.translateY = -n.offsetY));
        }
      }
      class m {
        constructor() {
          this.context = a.s.Phone;
        }
      }
      var y = l("JcTI"),
        x = l("QQZH"),
        _ = l("HM3f"),
        v = l("rYDR"),
        O = l("YtkY"),
        C = l("TLy2"),
        P = l("kuMc"),
        M = l("z+Ui"),
        N = l("J7Kz"),
        T = (function (n) {
          return (
            (n.CAR_PLAY = "carplay"),
            (n.ANDROID_AUTO = "androidauto"),
            (n.BOTH = "both"),
            (n.NONE = "none"),
            n
          );
        })({});
      class w {
        constructor(n, e, l) {
          ((this.asiService = n),
            (this.wifiService = e),
            (this.bluetoothService = l),
            (this.asiRoutes = y.a),
            (this.activeWirelessTechnologies = T),
            (this.destroyed$$ = new x.a(1)),
            (this.canActivateCarPlay$ = Object(_.b)(
              this.wifiService.wifiState$,
              this.bluetoothService.bluetoothAvailable$,
            ).pipe(
              Object(O.a)(([n, e]) => n && n.enabled && n.available && e),
            )),
            (this.bluetoothNodeName$ = this.bluetoothService.classicNodes$.pipe(
              Object(O.a)((n) => (n && n.length > 0 ? n[0].name : null)),
            )),
            (this.wirelessTechnology = this.asiService.licenceStates$.pipe(
              Object(O.a)((n) => {
                const e = n.some(
                    (n) =>
                      !!n.type &&
                      n.type === r.l.AndroidAuto &&
                      !!n.connectionType &&
                      n.connectionType.includes(r.e.Wireless) &&
                      !!n.fiveGhzStatus &&
                      n.fiveGhzStatus === r.h.STATUSALLOWED,
                  ),
                  l = n.some(
                    (n) =>
                      !!n.type &&
                      n.type === r.l.CarPlay &&
                      !!n.connectionType &&
                      n.connectionType.includes(r.e.Wireless) &&
                      !!n.fiveGhzStatus &&
                      n.fiveGhzStatus === r.h.STATUSALLOWED,
                  );
                return e && l
                  ? T.BOTH
                  : e
                    ? T.ANDROID_AUTO
                    : l
                      ? T.CAR_PLAY
                      : T.NONE;
              }),
            )),
            (this.asiWirelessAvailable$ = this.asiService.licenceStates$.pipe(
              Object(O.a)((n) =>
                n.some(
                  (n) =>
                    !!n.type &&
                    n.type === r.l.CarPlay &&
                    !!n.connectionType &&
                    n.connectionType.includes(r.e.Wireless) &&
                    !!n.fiveGhzStatus &&
                    n.fiveGhzStatus === r.h.STATUSALLOWED,
                ),
              ),
            )));
        }
        activateBtAndWifi() {
          (this.wifiService.wifiState$
            .pipe(
              Object(c.a)(1),
              Object(C.a)((n) =>
                n && n.enabled && n.available
                  ? v.a
                  : this.wifiService.setWifiActivated(!0),
              ),
              Object(P.a)(this.destroyed$$),
            )
            .subscribe(),
            this.bluetoothService.bluetoothAvailable$
              .pipe(
                Object(c.a)(1),
                Object(C.a)((n) =>
                  n ? v.a : this.bluetoothService.setVisibility(!0, !0),
                ),
                Object(P.a)(this.destroyed$$),
              )
              .subscribe());
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
      }
      class S {}
      class I {}
      class D {}
      var A = l("C9Ky"),
        L = l("89Z2"),
        k = l("kqft"),
        E = l("+sw+"),
        B = l("FfND"),
        W = l("bou3"),
        R = l("yNay"),
        H = l("1VvW"),
        V = l("CDcS"),
        z = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:100%;width:100%;color:#fff}",
            ],
          ],
          data: {},
        });
      function F(n) {
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
              L.b,
              L.a,
            )),
            t.xb(
              1,
              245760,
              null,
              1,
              k.a,
              [[2, E.a], B.a, t.h, W.a, R.a],
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
              H.o,
              [H.b, t.P, t.j, [8, null], t.h],
              null,
              null,
            ),
            t.xb(5, 212992, [[1, 4]], 0, V.a, [H.o, t.h, t.z, R.a], null, null),
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
      function G(n) {
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
              "au3-asi",
              [],
              [[8, "className", 0]],
              null,
              null,
              F,
              z,
            )),
            t.xb(1, 49152, null, 0, m, [], null, null),
          ],
          null,
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 1).context);
          },
        );
      }
      var j = t.ub("au3-asi", m, G, {}, {}, []),
        Y = l("Z2XD"),
        $ = l("fu7d"),
        Z = l("y9xZ"),
        U = l("VUTu"),
        X = l("nK9R"),
        J = l("qzuC"),
        K = l("8yWk"),
        q = l("ZXHi"),
        Q = l("IRNg"),
        nn = l("8TlW"),
        en = l("Xo58"),
        ln = l("m3Ja"),
        tn = l("r+e+"),
        an = l("ijxY"),
        on = l("bmFL"),
        un = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:flex;height:100%;flex-direction:column}",
            ],
          ],
          data: {},
        });
      function rn(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-screen",
              [["id", "Screen:ASI_INIT_PHONE_APPS"]],
              null,
              null,
              null,
              Y.b,
              Y.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              $.a,
              [t.l, t.D, W.a, R.a, [3, $.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, Z.a, [R.a], { id: [0, "id"] }, null),
            (n()(),
            t.yb(
              3,
              0,
              null,
              0,
              2,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              U.b,
              U.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              $.a,
              [t.l, t.D, W.a, R.a, [3, $.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              X.a,
              [J.a, K.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
                hideLeftBorder: [2, "hideLeftBorder"],
              },
              null,
            ),
            (n()(),
            t.yb(
              6,
              0,
              null,
              0,
              4,
              "au3-init-view",
              [],
              null,
              null,
              null,
              q.b,
              q.a,
            )),
            t.xb(7, 49152, null, 0, Q.a, [], null, null),
            (n()(),
            t.yb(
              8,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [["id", "AsiInitialisiert"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              nn.b,
              nn.a,
            )),
            t.xb(
              9,
              212992,
              null,
              0,
              $.a,
              [t.l, t.D, W.a, R.a, [3, $.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              10,
              245760,
              null,
              0,
              en.a,
              [[6, $.a], ln.a, t.h, t.l, t.D, [2, tn.a], [2, an.a], [2, on.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "Screen:ASI_INIT_PHONE_APPS"),
              n(e, 2, 0, "Screen:ASI_INIT_PHONE_APPS"),
              n(e, 4, 0, ""),
              n(e, 5, 0, "Audi Smartphone Interface", "Hinweis", !0),
              n(e, 9, 0, "AsiInitialisiert"),
              n(
                e,
                10,
                0,
                "Audi Smartphone Interface wird initialisiert.\nBitte warten...",
                "AsiInitialisiert",
                3,
              ));
          },
          function (n, e) {
            (n(
              e,
              3,
              0,
              t.Nb(e, 5).hideLeftBorder,
              t.Nb(e, 5).hideDividingBorders,
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
      function cn(n) {
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
              "au3-asi-init",
              [],
              null,
              null,
              null,
              rn,
              un,
            )),
            t.xb(1, 49152, null, 0, I, [], null, null),
          ],
          null,
          null,
        );
      }
      var sn = t.ub("au3-asi-init", I, cn, {}, {}, []),
        bn = l("I5OF"),
        pn = l("mYyF"),
        dn = l("v98a"),
        hn = t.wb({
          encapsulation: 0,
          styles: [["[_nghost-%COMP%]{display:block;height:100%;width:100%}"]],
          data: {},
        });
      function gn(n) {
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
              "au3-screen",
              [["id", "Screen:TERMINAL_MODE_*"]],
              null,
              null,
              null,
              Y.b,
              Y.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              $.a,
              [t.l, t.D, W.a, R.a, [3, $.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, Z.a, [R.a], { id: [0, "id"] }, null),
          ],
          function (n, e) {
            (n(e, 1, 0, "Screen:TERMINAL_MODE_*"),
              n(e, 2, 0, "Screen:TERMINAL_MODE_*"));
          },
          null,
        );
      }
      function fn(n) {
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
              "au3-spi-video",
              [],
              null,
              null,
              null,
              gn,
              hn,
            )),
            t.xb(
              1,
              245760,
              null,
              0,
              f,
              [K.a, bn.a, pn.a, i.a, s.a, u.a, d.a, dn.b, R.a],
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
      var mn = t.ub("au3-spi-video", f, fn, {}, {}, []),
        yn = l("eZMD"),
        xn = l("HD2x"),
        _n = l("An66"),
        vn = l("M706"),
        On = l("aMc6"),
        Cn = l("fzcM"),
        Pn = l("erFY"),
        Mn = l("bMuc"),
        Nn = l("ZIdM"),
        Tn = l("3bpu"),
        wn = l("6zvu"),
        Sn = l("VcEz"),
        In = l("OtM5"),
        Dn = l("BMrr"),
        An = l("IEns"),
        Ln = l("z6QT"),
        kn = l("flsk"),
        En = l("FQEI"),
        Bn = l("O82V"),
        Wn = l("Eln4"),
        Rn = l("evAh"),
        Hn = l("5wO1"),
        Vn = l("CpzC"),
        zn = l("0Bsn"),
        Fn = l("5GjX"),
        Gn = l("aOG8"),
        jn = l("Krzs"),
        Yn = l("9ZFG"),
        $n = l("6480"),
        Zn = l("oeT7"),
        Un = l("t7cT"),
        Xn = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:flex;height:100%;flex-direction:column}",
            ],
          ],
          data: {},
        });
      function Jn(n) {
        return t.ac(
          0,
          [
            (n()(),
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
      function Kn(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-instruction-text",
              [["id", "KeinGer\xe4tVerbunden"]],
              null,
              null,
              null,
              yn.b,
              yn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              $.a,
              [t.l, t.D, W.a, R.a, [3, $.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              xn.a,
              [],
              { primaryDeveloperText: [0, "primaryDeveloperText"] },
              null,
            ),
            (n()(), t.hb(16777216, null, 0, 1, null, Jn)),
            t.xb(
              4,
              540672,
              null,
              0,
              _n.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "KeinGer\xe4tVerbunden"),
              n(
                e,
                2,
                0,
                "Es ist kein Ger\xe4t verbunden, das das Audi smartphone interface\nunterst\xfctzt. Bitte verbinden Sie ein geeignetes Smartphone\noder aktivieren Sie ein Ger\xe4t aus der Ger\xe4teliste",
              ),
              n(e, 4, 0, t.Nb(e.parent, 10)));
          },
          null,
        );
      }
      function qn(n) {
        return t.ac(
          0,
          [
            (n()(),
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
      function Qn(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              7,
              "au3-instruction-text",
              [["id", "ConnectToCarPlayWirelessHint"]],
              null,
              null,
              null,
              yn.b,
              yn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              $.a,
              [t.l, t.D, W.a, R.a, [3, $.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              on.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Pb(131072, _n.b, [t.h]),
            t.Qb(4, { btName: 0 }),
            t.xb(
              5,
              49152,
              null,
              0,
              xn.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryFixedNumberOfLines: [1, "primaryFixedNumberOfLines"],
              },
              null,
            ),
            (n()(), t.hb(16777216, null, 0, 1, null, qn)),
            t.xb(
              7,
              540672,
              null,
              0,
              _n.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            n(e, 1, 0, "ConnectToCarPlayWirelessHint");
            var i = n(
              e,
              4,
              0,
              t.Yb(e, 2, 0, t.Nb(e, 3).transform(l.bluetoothNodeName$)),
            );
            (n(e, 2, 0, i),
              n(
                e,
                5,
                0,
                "Verbinden Sie ein neues Apple CarPlay kompatibles Ger\xe4t\ndrahtlos per Bluetooth: {{btName}}\nAlternativ k\xf6nnen Sie ein Ger\xe4t per USB verbinden oder ein\nbekanntes Ger\xe4t aus den Verbundenen Ger\xe4ten aktivieren.",
                5,
              ),
              n(e, 7, 0, t.Nb(e.parent.parent.parent, 10)));
          },
          null,
        );
      }
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
      function ee(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              7,
              "au3-instruction-text",
              [["id", "ConnectToAndroidAutoWirelessHint"]],
              null,
              null,
              null,
              yn.b,
              yn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              $.a,
              [t.l, t.D, W.a, R.a, [3, $.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              on.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Pb(131072, _n.b, [t.h]),
            t.Qb(4, { btName: 0 }),
            t.xb(
              5,
              49152,
              null,
              0,
              xn.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryFixedNumberOfLines: [1, "primaryFixedNumberOfLines"],
              },
              null,
            ),
            (n()(), t.hb(16777216, null, 0, 1, null, ne)),
            t.xb(
              7,
              540672,
              null,
              0,
              _n.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            n(e, 1, 0, "ConnectToAndroidAutoWirelessHint");
            var i = n(
              e,
              4,
              0,
              t.Yb(e, 2, 0, t.Nb(e, 3).transform(l.bluetoothNodeName$)),
            );
            (n(e, 2, 0, i),
              n(
                e,
                5,
                0,
                "Verbinden Sie ein neues Android Auto kompatibles Ger\xe4t\ndrahtlos per Bluetooth: {{btName}}\nAlternativ k\xf6nnen Sie ein Ger\xe4t per USB verbinden oder ein\nbekanntes Ger\xe4t aus den Verbundenen Ger\xe4ten aktivieren.",
                5,
              ),
              n(e, 7, 0, t.Nb(e.parent.parent.parent, 10)));
          },
          null,
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
      function te(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              7,
              "au3-instruction-text",
              [["id", "ConnectToBothWirelessHint"]],
              null,
              null,
              null,
              yn.b,
              yn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              $.a,
              [t.l, t.D, W.a, R.a, [3, $.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              on.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Pb(131072, _n.b, [t.h]),
            t.Qb(4, { btName: 0 }),
            t.xb(
              5,
              49152,
              null,
              0,
              xn.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryFixedNumberOfLines: [1, "primaryFixedNumberOfLines"],
              },
              null,
            ),
            (n()(), t.hb(16777216, null, 0, 1, null, le)),
            t.xb(
              7,
              540672,
              null,
              0,
              _n.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            n(e, 1, 0, "ConnectToBothWirelessHint");
            var i = n(
              e,
              4,
              0,
              t.Yb(e, 2, 0, t.Nb(e, 3).transform(l.bluetoothNodeName$)),
            );
            (n(e, 2, 0, i),
              n(
                e,
                5,
                0,
                "Verbinden Sie ein neues Apple CarPlay oder Android Auto\n kompatibles Ger\xe4t drahtlos per\nBluetooth: {{btName}}\nAlternativ k\xf6nnen Sie ein Ger\xe4t per USB verbinden oder ein\nbekanntes Ger\xe4t aus den Verbundenen Ger\xe4ten aktivieren.",
                5,
              ),
              n(e, 7, 0, t.Nb(e.parent.parent.parent, 10)));
          },
          null,
        );
      }
      function ie(n) {
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
              8,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            t.xb(
              2,
              16384,
              null,
              0,
              _n.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            t.Pb(131072, _n.b, [t.h]),
            (n()(), t.hb(16777216, null, null, 1, null, Qn)),
            t.xb(
              5,
              278528,
              null,
              0,
              _n.p,
              [t.P, t.L, _n.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, ee)),
            t.xb(
              7,
              278528,
              null,
              0,
              _n.p,
              [t.P, t.L, _n.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, te)),
            t.xb(9, 16384, null, 0, _n.q, [t.P, t.L, _n.o], null, null),
            (n()(), t.hb(0, null, null, 0)),
          ],
          function (n, e) {
            var l = e.component;
            (n(
              e,
              2,
              0,
              t.Yb(e, 2, 0, t.Nb(e, 3).transform(l.wirelessTechnology)),
            ),
              n(e, 5, 0, l.activeWirelessTechnologies.CAR_PLAY),
              n(e, 7, 0, l.activeWirelessTechnologies.ANDROID_AUTO));
          },
          null,
        );
      }
      function ae(n) {
        return t.ac(
          0,
          [
            (n()(),
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
      function oe(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-instruction-text",
              [["id", "ActivateWifiToEnableCarPlayWirelessHint"]],
              null,
              null,
              null,
              yn.b,
              yn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              $.a,
              [t.l, t.D, W.a, R.a, [3, $.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              xn.a,
              [],
              { primaryDeveloperText: [0, "primaryDeveloperText"] },
              null,
            ),
            (n()(), t.hb(16777216, null, 0, 1, null, ae)),
            t.xb(
              4,
              540672,
              null,
              0,
              _n.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "ActivateWifiToEnableCarPlayWirelessHint"),
              n(
                e,
                2,
                0,
                "Um Apple CarPlay drahtlos verbinden zu k\xf6nnen, aktivieren\nSie bitte Bluetooth und WLAN Sichtbarkeit.\nSie k\xf6nnen ein neues Ger\xe4t auch per USB verbinden oder\n\xfcber die verbundenen Ger\xe4te ausw\xe4hlen",
              ),
              n(e, 4, 0, t.Nb(e.parent.parent.parent, 11)));
          },
          null,
        );
      }
      function ue(n) {
        return t.ac(
          0,
          [
            (n()(),
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
      function re(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-instruction-text",
              [["id", "ActivateWifiToEnableAndroidAutoWirelessHint"]],
              null,
              null,
              null,
              yn.b,
              yn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              $.a,
              [t.l, t.D, W.a, R.a, [3, $.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              xn.a,
              [],
              { primaryDeveloperText: [0, "primaryDeveloperText"] },
              null,
            ),
            (n()(), t.hb(16777216, null, 0, 1, null, ue)),
            t.xb(
              4,
              540672,
              null,
              0,
              _n.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "ActivateWifiToEnableAndroidAutoWirelessHint"),
              n(
                e,
                2,
                0,
                "Um Android Auto drahtlos verbinden zu k\xf6nnen, aktivieren\nSie bitte Bluetooth und WLAN Sichtbarkeit.\nSie k\xf6nnen ein neues Ger\xe4t auch per USB verbinden oder\n\xfcber die verbundenen Ger\xe4te ausw\xe4hlen",
              ),
              n(e, 4, 0, t.Nb(e.parent.parent.parent, 11)));
          },
          null,
        );
      }
      function ce(n) {
        return t.ac(
          0,
          [
            (n()(),
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
      function se(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-instruction-text",
              [["id", "ActivateWifiToEnableBothWirelessHint"]],
              null,
              null,
              null,
              yn.b,
              yn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              $.a,
              [t.l, t.D, W.a, R.a, [3, $.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              xn.a,
              [],
              { primaryDeveloperText: [0, "primaryDeveloperText"] },
              null,
            ),
            (n()(), t.hb(16777216, null, 0, 1, null, ce)),
            t.xb(
              4,
              540672,
              null,
              0,
              _n.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "ActivateWifiToEnableBothWirelessHint"),
              n(
                e,
                2,
                0,
                "Um AppleCarplay oder Android Auto drahtlos verbinden zu k\xf6nnen, aktivieren\nSie bitte Bluetooth und WLAN Sichtbarkeit.\nSie k\xf6nnen ein neues Ger\xe4t auch per USB verbinden oder\n\xfcber die verbundenen Ger\xe4te ausw\xe4hlen",
              ),
              n(e, 4, 0, t.Nb(e.parent.parent.parent, 11)));
          },
          null,
        );
      }
      function be(n) {
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
              _n.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            t.Pb(131072, _n.b, [t.h]),
            (n()(), t.hb(16777216, null, null, 1, null, oe)),
            t.xb(
              4,
              278528,
              null,
              0,
              _n.p,
              [t.P, t.L, _n.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, re)),
            t.xb(
              6,
              278528,
              null,
              0,
              _n.p,
              [t.P, t.L, _n.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, se)),
            t.xb(8, 16384, null, 0, _n.q, [t.P, t.L, _n.o], null, null),
            (n()(), t.hb(0, null, null, 0)),
          ],
          function (n, e) {
            var l = e.component;
            (n(
              e,
              1,
              0,
              t.Yb(e, 1, 0, t.Nb(e, 2).transform(l.wirelessTechnology)),
            ),
              n(e, 4, 0, l.activeWirelessTechnologies.CAR_PLAY),
              n(e, 6, 0, l.activeWirelessTechnologies.ANDROID_AUTO));
          },
          null,
        );
      }
      function pe(n) {
        return t.ac(
          0,
          [
            (n()(), t.hb(16777216, null, null, 2, null, ie)),
            t.xb(
              1,
              16384,
              null,
              0,
              _n.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            t.Pb(131072, _n.b, [t.h]),
            (n()(), t.hb(0, [["NoBtOrWifiTemplate", 2]], null, 0, null, be)),
          ],
          function (n, e) {
            var l = e.component;
            n(
              e,
              1,
              0,
              t.Yb(e, 1, 0, t.Nb(e, 2).transform(l.canActivateCarPlay$)),
              t.Nb(e, 3),
            );
          },
          null,
        );
      }
      function de(n) {
        return t.ac(
          0,
          [
            (n()(),
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
      function he(n) {
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
              "au3-operation-panel",
              [],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              vn.b,
              vn.a,
            )),
            t.xb(
              1,
              49152,
              null,
              0,
              On.a,
              [Cn.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (n()(), t.hb(16777216, null, 1, 1, null, de)),
            t.xb(
              3,
              540672,
              null,
              0,
              _n.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, !0), n(e, 3, 0, t.Nb(e.parent, 12)));
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 1).alignInside, t.Nb(e, 1).alignOutside);
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
              13,
              "au3-operation-panel",
              [],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              vn.b,
              vn.a,
            )),
            t.xb(
              1,
              49152,
              null,
              0,
              On.a,
              [Cn.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (n()(),
            t.yb(
              2,
              0,
              null,
              1,
              9,
              "au3-operation-panel-item",
              [["id", "ActivateBtAndWifi"]],
              [
                [2, "mib3-haptic", null],
                [2, "op-item--separator-left", null],
                [2, "op-item--separator-right", null],
                [2, "op-item--prio1-main", null],
                [2, "op-item--prio1-small-scale", null],
                [2, "op-item--prio2-small-scale", null],
                [2, "op-item--prio1", null],
                [2, "op-item--prio2", null],
                [2, "op-item--prio1-icon-text", null],
                [2, "op-item--prio1-icon-only", null],
                [2, "op-item--prio1-text-only", null],
                [2, "op-item--prio2-icon-text", null],
                [2, "op-item--prio2-icon-only", null],
                [2, "op-item--prio2-text-only", null],
                [2, "op-item--default-max-width", null],
                [2, "op-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (n, e, l) {
                var t = !0;
                return (
                  "mib3Tap" === e &&
                    (t = !1 !== n.component.activateBtAndWifi() && t),
                  t
                );
              },
              Pn.b,
              Pn.a,
            )),
            t.xb(
              3,
              212992,
              null,
              0,
              $.a,
              [t.l, t.D, W.a, R.a, [3, $.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(4, 147456, null, 0, Mn.a, [t.l, t.z], null, null),
            t.xb(
              5,
              147456,
              null,
              0,
              Nn.a,
              [Mn.a, [2, Tn.a], [2, $.a], R.a],
              null,
              null,
            ),
            t.xb(
              6,
              212992,
              null,
              0,
              wn.a,
              [
                R.a,
                Sn.b,
                Nn.a,
                [2, Tn.a],
                [2, $.a],
                [2, In.a],
                [2, Z.a],
                [2, E.a],
                t.z,
                Dn.a,
                t.l,
                [2, An.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, Ln.a, Ln.a, [[3, Ln.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              kn.a,
              [
                t.l,
                En.a,
                t.h,
                Ln.a,
                [2, Bn.a],
                [2, Tn.b],
                [2, Tn.a],
                [2, Wn.a],
                [2, Rn.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              49152,
              null,
              0,
              Hn.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              Vn.a,
              [
                [2, wn.a],
                [2, In.a],
                [2, zn.a],
                [2, kn.a],
                [2, Fn.b],
                t.l,
                pn.a,
                dn.b,
              ],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Gn.a,
              [[2, kn.a], [2, wn.a], [2, Sn.b], jn.a],
              null,
              null,
            ),
            (n()(), t.hb(16777216, null, 1, 1, null, ge)),
            t.xb(
              13,
              540672,
              null,
              0,
              _n.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, !0),
              n(e, 3, 0, "ActivateBtAndWifi"),
              n(e, 6, 0),
              n(e, 8, 0),
              n(e, 9, 0, "Bluetooth & WLAN an", !0),
              n(e, 13, 0, t.Nb(e.parent, 12)));
          },
          function (n, e) {
            (n(e, 0, 0, t.Nb(e, 1).alignInside, t.Nb(e, 1).alignOutside),
              n(e, 2, 1, [
                t.Nb(e, 8).markerClassEnabled,
                t.Nb(e, 9).showSeparatorLeft,
                t.Nb(e, 9).showSeparatorRight,
                t.Nb(e, 9).prio1Main,
                t.Nb(e, 9).prio1SmallScale,
                t.Nb(e, 9).prio2SmallScale,
                t.Nb(e, 9).prio1,
                t.Nb(e, 9).prio2,
                t.Nb(e, 9).prio1IconText,
                t.Nb(e, 9).prio1IconOnly,
                t.Nb(e, 9).prio1TextOnly,
                t.Nb(e, 9).prio2IconText,
                t.Nb(e, 9).prio2IconOnly,
                t.Nb(e, 9).prio2TextOnly,
                t.Nb(e, 9).useDefaultMaxWidth,
                t.Nb(e, 9).isDummy,
              ]));
          },
        );
      }
      function me(n) {
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
              "au3-operation-panel-item",
              [["id", "GoToConnectedAsiDevices"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "op-item--separator-left", null],
                [2, "op-item--separator-right", null],
                [2, "op-item--prio1-main", null],
                [2, "op-item--prio1-small-scale", null],
                [2, "op-item--prio2-small-scale", null],
                [2, "op-item--prio1", null],
                [2, "op-item--prio2", null],
                [2, "op-item--prio1-icon-text", null],
                [2, "op-item--prio1-icon-only", null],
                [2, "op-item--prio1-text-only", null],
                [2, "op-item--prio2-icon-text", null],
                [2, "op-item--prio2-icon-only", null],
                [2, "op-item--prio2-text-only", null],
                [2, "op-item--default-max-width", null],
                [2, "op-item--placeholder", null],
              ],
              null,
              null,
              Pn.b,
              Pn.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              In.a,
              [Yn.a, t.h, R.a, [3, In.a]],
              null,
              null,
            ),
            t.xb(2, 147456, null, 0, Mn.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              $.a,
              [t.l, t.D, W.a, R.a, [3, $.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              Nn.a,
              [Mn.a, [2, Tn.a], [2, $.a], R.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              wn.a,
              [
                R.a,
                Sn.b,
                Nn.a,
                [2, Tn.a],
                [2, $.a],
                [2, In.a],
                [2, Z.a],
                [2, E.a],
                t.z,
                Dn.a,
                t.l,
                [2, An.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              $n.a,
              [B.a, Zn.i, In.a, wn.a, $n.b, Un.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.Sb(131584, null, Ln.a, Ln.a, [[3, Ln.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              kn.a,
              [
                t.l,
                En.a,
                t.h,
                Ln.a,
                [2, Bn.a],
                [2, Tn.b],
                [2, Tn.a],
                [2, Wn.a],
                [2, Rn.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              49152,
              null,
              0,
              Hn.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              Vn.a,
              [
                [2, wn.a],
                [2, In.a],
                [2, zn.a],
                [2, kn.a],
                [2, Fn.b],
                t.l,
                pn.a,
                dn.b,
              ],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Gn.a,
              [[2, kn.a], [2, wn.a], [2, Sn.b], jn.a],
              null,
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 3, 0, "GoToConnectedAsiDevices"),
              n(e, 5, 0),
              n(
                e,
                6,
                0,
                l.asiRoutes.ConnectedDevices.children.TrustedAsiDevices,
              ),
              n(e, 8, 0),
              n(e, 9, 0, "Zu den verbundenen Ger\xe4ten", !0));
          },
          function (n, e) {
            n(e, 0, 1, [
              t.Nb(e, 1).combinedDisabled,
              t.Nb(e, 1).useBrighterIcon,
              t.Nb(e, 8).markerClassEnabled,
              t.Nb(e, 9).showSeparatorLeft,
              t.Nb(e, 9).showSeparatorRight,
              t.Nb(e, 9).prio1Main,
              t.Nb(e, 9).prio1SmallScale,
              t.Nb(e, 9).prio2SmallScale,
              t.Nb(e, 9).prio1,
              t.Nb(e, 9).prio2,
              t.Nb(e, 9).prio1IconText,
              t.Nb(e, 9).prio1IconOnly,
              t.Nb(e, 9).prio1TextOnly,
              t.Nb(e, 9).prio2IconText,
              t.Nb(e, 9).prio2IconOnly,
              t.Nb(e, 9).prio2TextOnly,
              t.Nb(e, 9).useDefaultMaxWidth,
              t.Nb(e, 9).isDummy,
            ]);
          },
        );
      }
      function ye(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-screen",
              [["id", "Screen:TERMINAL_MODE_NO_DEVICE"]],
              null,
              null,
              null,
              Y.b,
              Y.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              $.a,
              [t.l, t.D, W.a, R.a, [3, $.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, Z.a, [R.a], { id: [0, "id"] }, null),
            (n()(),
            t.yb(
              3,
              0,
              null,
              0,
              2,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              U.b,
              U.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              $.a,
              [t.l, t.D, W.a, R.a, [3, $.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              X.a,
              [J.a, K.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
                hideLeftBorder: [2, "hideLeftBorder"],
              },
              null,
            ),
            (n()(), t.hb(16777216, null, 0, 2, null, Kn)),
            t.xb(
              7,
              16384,
              null,
              0,
              _n.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            t.Pb(131072, _n.b, [t.h]),
            (n()(), t.hb(0, [["AsiWireless", 2]], 0, 0, null, pe)),
            (n()(), t.hb(0, [["SingleButtonTemplate", 2]], 0, 0, null, he)),
            (n()(), t.hb(0, [["DoubleButtonTemplate", 2]], 0, 0, null, fe)),
            (n()(),
            t.hb(0, [["GoToConnectedDevicesTemplate", 2]], 0, 0, null, me)),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, "Screen:TERMINAL_MODE_NO_DEVICE"),
              n(e, 2, 0, "Screen:TERMINAL_MODE_NO_DEVICE"),
              n(e, 4, 0, ""),
              n(e, 5, 0, "Audi smartphone", "Hinweis", !0),
              n(
                e,
                7,
                0,
                !t.Yb(e, 7, 0, t.Nb(e, 8).transform(l.asiWirelessAvailable$)),
                t.Nb(e, 9),
              ));
          },
          function (n, e) {
            n(
              e,
              3,
              0,
              t.Nb(e, 5).hideLeftBorder,
              t.Nb(e, 5).hideDividingBorders,
            );
          },
        );
      }
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
              1,
              "au3-asi-information",
              [],
              null,
              null,
              null,
              ye,
              Xn,
            )),
            t.xb(1, 180224, null, 0, w, [u.a, M.a, N.a], null, null),
          ],
          null,
          null,
        );
      }
      var _e = t.ub("au3-asi-information", w, xe, {}, {}, []),
        ve = l("oWpa"),
        Oe = l("yegR"),
        Ce = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:flex;height:100%;flex-direction:column}.statustext[_ngcontent-%COMP%]{font-size:40px;text-align:center;display:flex}",
            ],
          ],
          data: {},
        });
      function Pe(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              8,
              "au3-screen",
              [["id", "Screen:TERMINAL_MODE_CHECK_DEVICE"]],
              null,
              null,
              null,
              Y.b,
              Y.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              $.a,
              [t.l, t.D, W.a, R.a, [3, $.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, Z.a, [R.a], { id: [0, "id"] }, null),
            (n()(),
            t.yb(
              3,
              0,
              null,
              0,
              2,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              U.b,
              U.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              $.a,
              [t.l, t.D, W.a, R.a, [3, $.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              X.a,
              [J.a, K.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
                hideLeftBorder: [2, "hideLeftBorder"],
              },
              null,
            ),
            (n()(),
            t.yb(
              6,
              0,
              null,
              0,
              2,
              "au3-statustext",
              [
                ["class", "statustext"],
                ["id", "CheckDevice"],
              ],
              null,
              null,
              null,
              ve.b,
              ve.a,
            )),
            t.xb(
              7,
              212992,
              null,
              0,
              $.a,
              [t.l, t.D, W.a, R.a, [3, $.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              8,
              49152,
              null,
              0,
              Oe.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, e) {
            (n(e, 1, 0, "Screen:TERMINAL_MODE_CHECK_DEVICE"),
              n(e, 2, 0, "Screen:TERMINAL_MODE_CHECK_DEVICE"),
              n(e, 4, 0, ""),
              n(e, 5, 0, "Audi smartphone", "Hinweis", !0),
              n(e, 7, 0, "CheckDevice"),
              n(
                e,
                8,
                0,
                6,
                "Bitte beachten Sie den Hinweis auf Ihrem Mobiltelefon",
              ));
          },
          function (n, e) {
            n(
              e,
              3,
              0,
              t.Nb(e, 5).hideLeftBorder,
              t.Nb(e, 5).hideDividingBorders,
            );
          },
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
              1,
              "au3-asi-check-device",
              [],
              null,
              null,
              null,
              Pe,
              Ce,
            )),
            t.xb(1, 49152, null, 0, S, [], null, null),
          ],
          null,
          null,
        );
      }
      var Ne = t.ub("au3-asi-check-device", S, Me, {}, {}, []),
        Te = l("aDqW"),
        we = l("/W5r"),
        Se = l("+Qv1"),
        Ie = l("XtoR"),
        De = l("jTHl"),
        Ae = l("zL3T"),
        Le = l("jIqt"),
        ke = l("Ohay"),
        Ee = l("jOdJ"),
        Be = l("R0ft");
      class We extends a.cc {
        constructor(n, e, l, t) {
          (super(t.getLogger("asi.DeviceActiveGuard")),
            (this.asiService = n),
            (this.routingService = e),
            (this.asterixSyncService = l));
        }
        checkActivation(n, e) {
          return Object(_.b)(
            this.asiService.currentActiveDevice$.pipe(Object(O.a)((n) => !!n)),
            this.asiService.shouldShowCheckDeviceScreen$,
            this.asiService.initialized$,
            this.asterixSyncService.asterixIsFunctional$.pipe(Object(Le.a)(!1)),
          ).pipe(
            Object(ke.a)(),
            Object(O.a)(
              ([e, l, t, i]) => (
                this.logger.info(
                  `checkActivation: activeDevice ${e}, shouldShowCheckDevice ${l}, ` +
                    `initialized ${t}, asterixFunctional ${i}`,
                ),
                t
                  ? e
                    ? l
                      ? !!this.matchIntendedRoute(n, y.a.CheckDevice) ||
                        (this.routingService.goTo(y.a.CheckDevice), !1)
                      : !!this.matchIntendedRoute(n, y.a.VideoStream) ||
                        (this.routingService.goTo(y.a.VideoStream), !1)
                    : !!this.matchIntendedRoute(n, y.a.Information) ||
                      !!i ||
                      (this.routingService.goTo(y.a.Information), !1)
                  : !!this.matchIntendedRoute(n, y.a.Init) ||
                    (this.routingService.goTo(y.a.Init), !1)
              ),
            ),
            Object(Ee.a)(),
          );
        }
        matchIntendedRoute(n, e) {
          return n.url[n.url.length - 1].path === e.path;
        }
      }
      var Re = l("+epw"),
        He = l("zMPs"),
        Ve = l("6Yk8"),
        ze = l("u6+O"),
        Fe = l("CIQC"),
        Ge = l("REmV"),
        je = l("Y3N+"),
        Ye = l("MJxn"),
        $e = l("eIOF"),
        Ze = l("t+4g"),
        Ue = l("myjn"),
        Xe = l("fOZ7");
      const Je = () =>
        Promise.all([l.e(6), l.e(5), l.e(27), l.e(48), l.e(0), l.e(103)])
          .then(l.bind(null, "zuly"))
          .then((n) => n.ConnectedDevicesModuleNgFactory);
      class Ke {}
      var qe = t.vb(D, [], function (n) {
        return t.Kb([
          t.Lb(512, t.j, t.X, [[8, [A.a, j, sn, mn, _e, Ne]], [3, t.j], t.x]),
          t.Lb(4608, _n.m, _n.l, [t.u]),
          t.Lb(4608, Te.h, Te.g, []),
          t.Lb(4608, Te.d, Te.f, []),
          t.Lb(4608, Te.j, Te.e, []),
          t.Lb(4608, Te.c, Te.b, []),
          t.Lb(4608, Te.k, Te.k, [
            Te.l,
            Te.h,
            Te.d,
            Te.j,
            Te.c,
            Te.m,
            Te.o,
            Te.n,
            Te.a,
          ]),
          t.Lb(4608, we.b, we.b, [Se.e, [2, we.a]]),
          t.Lb(4608, Ie.b, Ie.b, [Se.e, [2, Ie.a]]),
          t.Lb(4608, De.b, De.b, [Se.e, [2, De.a]]),
          t.Lb(4608, Ae.b, Ae.b, [Se.e, [2, Ae.a]]),
          t.Lb(4608, We, We, [u.a, y.b, Be.a, R.a]),
          t.Lb(1073742336, _n.c, _n.c, []),
          t.Lb(1073742336, Te.i, Te.i, []),
          t.Lb(1073742336, Re.a, Re.a, []),
          t.Lb(1073742336, He.a, He.a, []),
          t.Lb(1073742336, Ve.a, Ve.a, []),
          t.Lb(1073742336, ze.a, ze.a, []),
          t.Lb(1073742336, Fe.a, Fe.a, []),
          t.Lb(1073742336, Ge.a, Ge.a, []),
          t.Lb(1073742336, je.a, je.a, []),
          t.Lb(1073742336, Ye.a, Ye.a, []),
          t.Lb(1073742336, $e.a, $e.a, []),
          t.Lb(1073742336, Ze.a, Ze.a, []),
          t.Lb(1073742336, Ue.a, Ue.a, []),
          t.Lb(1073742336, Xe.a, Xe.a, []),
          t.Lb(1073742336, H.n, H.n, [
            [2, H.s],
            [2, H.m],
          ]),
          t.Lb(1073742336, Ke, Ke, []),
          t.Lb(1073742336, D, D, []),
          t.Lb(256, Te.o, void 0, []),
          t.Lb(256, Te.m, void 0, []),
          t.Lb(256, Te.n, void 0, []),
          t.Lb(256, Te.a, void 0, []),
          t.Lb(
            1024,
            H.k,
            function () {
              return [
                [
                  {
                    path: "",
                    component: m,
                    children: [
                      { path: "init", component: I, canActivate: [We] },
                      { path: "video-stream", component: f, canActivate: [We] },
                      { path: "information", component: w, canActivate: [We] },
                      { path: "check-device", component: S, canActivate: [We] },
                      { path: "connected-devices", loadChildren: Je },
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
    VUTu: function (n, e, l) {
      "use strict";
      (l.d(e, "a", function () {
        return x;
      }),
        l.d(e, "b", function () {
          return D;
        }));
      var t = l("kZht"),
        i = l("HVUF"),
        a = l("B3Zb"),
        o = l("yNay"),
        u = l("8TlW"),
        r = l("fu7d"),
        c = l("bou3"),
        s = l("ijxY"),
        b = l("Xo58"),
        p = l("m3Ja"),
        d = l("r+e+"),
        h = l("bmFL"),
        g = l("T8E5"),
        f = l("An66"),
        m = l("gKAS"),
        y = l("Brsi"),
        x =
          (l("nK9R"),
          l("qzuC"),
          l("8yWk"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);position:relative;display:flex;flex-direction:row;flex:0 0 auto;color:#fff;height:119px;border-style:solid;border-width:0 0 2px;border-image:linear-gradient(90deg,hsla(0,0%,87.1%,.7) 0,hsla(0,0%,87.1%,.9) 36%,hsla(0,0%,87.1%,.4)) 1 1;z-index:10;transform:translateZ(0)}[_nghost-%COMP%]   .fpk-stage-big[_nghost-%COMP%], .fpk-stage-big   [_nghost-%COMP%], [_nghost-%COMP%]   .fpk-stage-small[_nghost-%COMP%], .fpk-stage-small   [_nghost-%COMP%]{border:none}[_nghost-%COMP%]     au3-button .button__text{font-size:30px}[_nghost-%COMP%]:after{content:"";position:absolute;bottom:-7px;left:0;width:100%;height:5px;background:linear-gradient(180deg,#000,transparent)}.tl--text-only[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{border-left:0}.tl--no-dividing-border[_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%], .tl--no-dividing-border[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{border-image:none;border-style:none}.title-line__content--left[_ngcontent-%COMP%]{display:inline-flex;flex-direction:row;align-self:center;margin-right:auto}.title-line__breadcrumbs[_ngcontent-%COMP%]{position:absolute;align-self:center;margin-right:2px}.title-line__content-wrapper--center[_ngcontent-%COMP%]{position:relative;flex:1 0 0;align-self:center;font-size:40px;height:119px;border-style:solid;border-image:linear-gradient(0deg,hsla(0,0%,100%,.7),transparent 80%) 1 2%;display:flex;flex-direction:row}.title-line__content-wrapper--center[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-1px;width:2px;height:2px;background:#000}.title-line__content--center[_ngcontent-%COMP%]{position:relative;flex:1 0 0}.title-line__loader[_ngcontent-%COMP%]{padding-top:12px;display:block;opacity:0;overflow:hidden}.title-line__loader--visible[_ngcontent-%COMP%]{opacity:1}.title-line__loader--display-none[_ngcontent-%COMP%]{display:none}.steering-wheel-left[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{margin-right:2px;border-width:0 0 0 1px}.steering-wheel-left[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after, .steering-wheel-left   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after{left:auto;right:-2px}.steering-wheel-left[_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%]{padding:0 0 0 30px}.steering-wheel-right[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{margin-left:2px;border-width:0 1px 0 0}.steering-wheel-right[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after, .steering-wheel-right   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]:after{left:-2px;right:auto}.steering-wheel-right[_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .title-line__content--text-input-no-right-padding[_ngcontent-%COMP%]{padding:0 30px 0 0}.title-line__content--right[_ngcontent-%COMP%]{display:inline-flex;flex-direction:row;align-self:center;text-align:end}.content__title[_ngcontent-%COMP%]{position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:100%;height:100%;padding:12px 20px 0}.content__title--loader[_ngcontent-%COMP%]{padding-left:20px}.content__title--primary[_ngcontent-%COMP%]{color:var(--current-context);font-size:30px;width:100%}.content__title--primary[_ngcontent-%COMP%], .content__title--secondary[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.component-layout-arabic[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{direction:rtl}.component-layout-latin[_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .title-line__content-wrapper--center[_ngcontent-%COMP%]{direction:ltr}.secondary-title__wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;flex:1 1 0;overflow:hidden;max-width:100%;width:100%}.content__title--icon[_ngcontent-%COMP%]{margin:0 30px 0 10px}.content__title--separator[_ngcontent-%COMP%]{padding:0 22px;color:var(--current-context)}@media (max-width:1280px){.content__title[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.content__title--loader[_ngcontent-%COMP%]{padding-left:20px}.content__title--primary[_ngcontent-%COMP%]{font-size:30px;width:100%}.content__title--separator[_ngcontent-%COMP%]{display:none}}.title-line__content--text-input[_ngcontent-%COMP%]{position:relative;flex:1;display:flex;align-items:flex-end;min-width:0;direction:ltr;font-size:40px;height:calc(100% + 2px);padding:0 30px;border-style:solid;border-image:linear-gradient(0deg,hsla(0,0%,100%,.7),transparent 80%) 1 2%}.title-line__content--text-input[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;bottom:0;height:2px;width:100%;background-color:#000}.title-line__content--hidden[_ngcontent-%COMP%]{display:none}.steering-wheel-left[_nghost-%COMP%], .steering-wheel-left   [_nghost-%COMP%]{direction:ltr}.steering-wheel-left[_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%]{border-width:0 0 0 1px}.steering-wheel-right[_nghost-%COMP%], .steering-wheel-right   [_nghost-%COMP%]{direction:rtl}.steering-wheel-right[_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .title-line__content--text-input[_ngcontent-%COMP%]{border-width:0 1px 0 0}',
              ],
            ],
            data: {},
          }));
      function _(n) {
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
              [
                ["class", "title-line__breadcrumbs"],
                ["fileName", "E163_breadcrump_back.webp"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              i.b,
              i.a,
            )),
            t.xb(
              1,
              4243456,
              null,
              0,
              a.b,
              [o.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (n, e) {
            n(
              e,
              1,
              0,
              "E163_breadcrump_back.webp",
              e.component.iconCategoryBreadcrumb,
            );
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 1).iconComponentHidden);
          },
        );
      }
      function v(n) {
        return t.ac(
          0,
          [
            (n()(),
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
      function O(n) {
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
              "div",
              [["class", "title-line__content--text-input"]],
              [[2, "title-line__content--text-input-no-right-padding", null]],
              null,
              null,
              null,
              null,
            )),
            t.Mb(null, 1),
          ],
          null,
          function (n, e) {
            n(e, 0, 0, e.component.hideRightPadding);
          },
        );
      }
      function C(n) {
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
              u.b,
              u.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              r.a,
              [t.l, t.D, c.a, o.a, [3, r.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              s.a,
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
              [[6, r.a], p.a, t.h, t.l, t.D, [2, d.a], [2, s.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, l.primaryId, l.primaryIdEnumType),
              n(
                e,
                2,
                0,
                !l.hasPrimaryText ||
                  !(l.primaryIdEnumType || l.primaryDeveloperText),
              ),
              n(
                e,
                3,
                0,
                l.primaryDeveloperText,
                l.primaryId,
                l.primaryNonI18nText,
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
      function P(n) {
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
              "au3-icon",
              [
                ["class", "content__title--icon"],
                ["ttDoNotToggle", ""],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              i.b,
              i.a,
            )),
            t.xb(
              1,
              16384,
              null,
              0,
              g.a,
              [],
              { ttDoNotToggleDynamicValue: [0, "ttDoNotToggleDynamicValue"] },
              null,
            ),
            t.xb(
              2,
              4243456,
              null,
              0,
              a.b,
              [o.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, !l.possibleIcon),
              n(e, 2, 0, l.icon, l.iconCategoryBreadcrumb));
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 2).iconComponentHidden);
          },
        );
      }
      function M(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
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
            t.xb(
              1,
              212992,
              null,
              0,
              r.a,
              [t.l, t.D, c.a, o.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (n()(),
            t.yb(
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
              u.b,
              u.a,
            )),
            t.xb(
              3,
              212992,
              null,
              0,
              r.a,
              [t.l, t.D, c.a, o.a, [3, r.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              4,
              16384,
              null,
              0,
              s.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            t.xb(
              5,
              245760,
              null,
              0,
              b.a,
              [[6, r.a], p.a, t.h, t.l, t.D, [2, d.a], [2, s.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, P)),
            t.xb(
              7,
              16384,
              null,
              0,
              f.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, "SecondaryText"),
              n(e, 3, 0, l.secondaryId, l.secondaryIdEnumType),
              n(
                e,
                4,
                0,
                !l.hasSecondaryText ||
                  !(l.secondaryIdEnumType || l.secondaryDeveloperText),
              ),
              n(
                e,
                5,
                0,
                l.secondaryDeveloperText,
                l.secondaryId,
                l.secondaryNonI18nText,
              ),
              n(e, 7, 0, !!l.icon));
          },
          function (n, e) {
            n(
              e,
              2,
              0,
              t.Nb(e, 5).backgroundColor,
              t.Nb(e, 5).fixedNumberOfLines,
              t.Nb(e, 5).mayContainLatinCharsForArabic,
              t.Nb(e, 5).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function N(n) {
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
              "au3-title-line-loader-item",
              [["class", "title-line__loader"]],
              [
                [2, "title-line__loader--display-none", null],
                [2, "title-line__loader--visible", null],
              ],
              null,
              null,
              m.b,
              m.a,
            )),
            t.xb(
              1,
              49152,
              null,
              0,
              y.a,
              [],
              { animated: [0, "animated"] },
              null,
            ),
          ],
          function (n, e) {
            n(e, 1, 0, e.component.loaderActive);
          },
          function (n, e) {
            var l = e.component;
            n(e, 0, 0, !l.textToolHasLoader, l.loaderActive);
          },
        );
      }
      function T(n) {
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
              "div",
              [["class", "title-line__content-wrapper--center"]],
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
              5,
              "div",
              [["class", "title-line__content--center"]],
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
              4,
              "div",
              [["class", "content__title"]],
              [[2, "content__title--loader", null]],
              null,
              null,
              null,
              null,
            )),
            (n()(), t.hb(16777216, null, null, 1, null, C)),
            t.xb(
              4,
              16384,
              null,
              0,
              f.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, M)),
            t.xb(
              6,
              16384,
              null,
              0,
              f.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, N)),
            t.xb(
              8,
              16384,
              null,
              0,
              f.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 4, 0, l.hasPrimaryText),
              n(e, 6, 0, l.hasSecondaryText),
              n(e, 8, 0, l.hasLoader));
          },
          function (n, e) {
            n(e, 2, 0, e.component.hasLoader);
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
      function S(n) {
        return t.ac(
          0,
          [t.Mb(null, 3), (n()(), t.hb(0, null, null, 0))],
          null,
          null,
        );
      }
      function I(n) {
        return t.ac(
          0,
          [t.Mb(null, 4), (n()(), t.hb(0, null, null, 0))],
          null,
          null,
        );
      }
      function D(n) {
        return t.ac(
          2,
          [
            (n()(), t.hb(16777216, null, null, 1, null, _)),
            t.xb(
              1,
              16384,
              null,
              0,
              f.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            t.yb(
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
            t.Mb(null, 0),
            (n()(), t.hb(16777216, null, null, 2, null, v)),
            t.xb(
              5,
              540672,
              null,
              0,
              f.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            t.Pb(131072, f.b, [t.h]),
            (n()(), t.hb(16777216, null, null, 1, null, O)),
            t.xb(
              8,
              16384,
              null,
              0,
              f.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), t.hb(0, [["center", 2]], null, 0, null, T)),
            (n()(),
            t.yb(
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
            t.Mb(null, 2),
            (n()(), t.hb(16777216, null, null, 2, null, w)),
            t.xb(
              13,
              540672,
              null,
              0,
              f.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            t.Pb(131072, f.b, [t.h]),
            (n()(), t.hb(0, [["done", 2]], null, 0, null, S)),
            (n()(), t.hb(0, [["edit", 2]], null, 0, null, I)),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, l.showBreadcrumbsIcon),
              n(
                e,
                5,
                0,
                t.Yb(e, 5, 0, t.Nb(e, 6).transform(l.editButtonLeft$))
                  ? t.Nb(e, 16)
                  : t.Nb(e, 15),
              ),
              n(e, 8, 0, l.hasTextInput, t.Nb(e, 9)),
              n(
                e,
                13,
                0,
                t.Yb(e, 13, 0, t.Nb(e, 14).transform(l.editButtonLeft$))
                  ? t.Nb(e, 15)
                  : t.Nb(e, 16),
              ));
          },
          null,
        );
      }
    },
    Z2XD: function (n, e, l) {
      "use strict";
      (l.d(e, "a", function () {
        return i;
      }),
        l.d(e, "b", function () {
          return a;
        }));
      var t = l("kZht"),
        i =
          (l("y9xZ"),
          l("yNay"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;padding:16px 48px 25px}.steering-wheel-left[_nghost-%COMP%], .steering-wheel-left   [_nghost-%COMP%]{padding-right:56px}.steering-wheel-right[_nghost-%COMP%], .steering-wheel-right   [_nghost-%COMP%]{padding-left:56px}",
              ],
            ],
            data: {},
          }));
      function a(n) {
        return t.ac(0, [t.Mb(null, 0)], null, null);
      }
    },
    ZXHi: function (n, e, l) {
      "use strict";
      (l.d(e, "a", function () {
        return o;
      }),
        l.d(e, "b", function () {
          return u;
        }));
      var t = l("kZht"),
        i = l("EyLa"),
        a = l("4nnk"),
        o =
          (l("IRNg"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%}.init-view__message[_ngcontent-%COMP%]{height:230px;max-width:100%;font-size:40px;line-height:66px;color:#fff;text-align:center}.init-view__progress[_ngcontent-%COMP%]{width:500px;max-width:60%;height:20px;margin:0 auto}",
              ],
            ],
            data: {},
          }));
      function u(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              1,
              "div",
              [["class", "init-view__message"]],
              null,
              null,
              null,
              null,
              null,
            )),
            t.Mb(null, 0),
            (n()(),
            t.yb(
              2,
              0,
              null,
              null,
              2,
              "div",
              [["class", "init-view__progress"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              3,
              0,
              null,
              null,
              1,
              "au3-progressbar",
              [],
              [
                [2, "sxm--rotate", null],
                [2, "progressbar--infinite", null],
              ],
              null,
              null,
              i.b,
              i.a,
            )),
            t.xb(
              4,
              49152,
              null,
              0,
              a.a,
              [t.l, t.h],
              { current: [0, "current"] },
              null,
            ),
          ],
          function (n, e) {
            n(e, 4, 0, e.component.current);
          },
          function (n, e) {
            n(e, 3, 0, t.Nb(e, 4).shouldRotateForSxm, t.Nb(e, 4).infinite);
          },
        );
      }
    },
    eZMD: function (n, e, l) {
      "use strict";
      (l.d(e, "a", function () {
        return h;
      }),
        l.d(e, "b", function () {
          return m;
        }));
      var t = l("kZht"),
        i = l("8TlW"),
        a = l("fu7d"),
        o = l("bou3"),
        u = l("yNay"),
        r = l("ijxY"),
        c = l("Xo58"),
        s = l("m3Ja"),
        b = l("r+e+"),
        p = l("bmFL"),
        d = l("An66"),
        h =
          (l("HD2x"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;max-height:100%;max-width:100%;overflow:hidden}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;text-align:center;flex:1 1 0;font-size:40px;min-height:0}.secondary-text[_ngcontent-%COMP%]{padding-top:40px;font-size:30px}[_nghost-%COMP%]     [instruction-text-operational-panel], [_nghost-%COMP%]     au3-operation-panel{padding-top:9px;padding-bottom:8px}.component-layout-arabic[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .content[_ngcontent-%COMP%]{direction:rtl}.component-layout-latin[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .content[_ngcontent-%COMP%]{direction:ltr}.steering-wheel-left[_nghost-%COMP%]   .action-area[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .action-area[_ngcontent-%COMP%]{flex-direction:row}.steering-wheel-right[_nghost-%COMP%]   .action-area[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .action-area[_ngcontent-%COMP%]{flex-direction:row-reverse}",
              ],
            ],
            data: {},
          }));
      function g(n) {
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
                ["class", "primary-text"],
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
              i.b,
              i.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [t.l, t.D, o.a, u.a, [3, a.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              r.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            t.xb(
              3,
              245760,
              null,
              0,
              c.a,
              [[6, a.a], s.a, t.h, t.l, t.D, [2, b.a], [2, r.a], [2, p.a]],
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
              1,
              0,
              l.primaryTextId ? l.primaryTextId : "PrimaryText",
              l.primaryTextIdEnum,
            ),
              n(e, 2, 0, !l.hasPrimaryText),
              n(
                e,
                3,
                0,
                l.primaryDeveloperText,
                l.primaryTextId ? l.primaryTextId : "PrimaryText",
                l.primaryFixedNumberOfLines,
                l.primaryNonI18nText,
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
      function f(n) {
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
                ["class", "secondary-text"],
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
              i.b,
              i.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [t.l, t.D, o.a, u.a, [3, a.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              r.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            t.xb(
              3,
              245760,
              null,
              0,
              c.a,
              [[6, a.a], s.a, t.h, t.l, t.D, [2, b.a], [2, r.a], [2, p.a]],
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
              1,
              0,
              l.secondaryTextId ? l.secondaryTextId : "SecondaryText",
              l.secondaryTextIdEnum,
            ),
              n(
                e,
                2,
                0,
                !l.hasSecondaryText ||
                  (!l.secondaryDeveloperText && !l.secondaryTextIdEnum),
              ),
              n(
                e,
                3,
                0,
                l.secondaryDeveloperText,
                l.secondaryTextId ? l.secondaryTextId : "SecondaryText",
                l.secondaryFixedNumberOfLines,
                l.secondaryNonI18nText,
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
      function m(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              5,
              "div",
              [["class", "content"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), t.hb(16777216, null, null, 1, null, g)),
            t.xb(
              2,
              16384,
              null,
              0,
              d.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, f)),
            t.xb(
              4,
              16384,
              null,
              0,
              d.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Mb(null, 0),
            t.Mb(null, 1),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 2, 0, l.hasPrimaryText), n(e, 4, 0, l.hasSecondaryText));
          },
          null,
        );
      }
    },
    oWpa: function (n, e, l) {
      "use strict";
      (l.d(e, "a", function () {
        return f;
      }),
        l.d(e, "b", function () {
          return y;
        }));
      var t = l("kZht"),
        i = l("HVUF"),
        a = l("B3Zb"),
        o = l("yNay"),
        u = l("8TlW"),
        r = l("fu7d"),
        c = l("bou3"),
        s = l("bmFL"),
        b = l("Xo58"),
        p = l("m3Ja"),
        d = l("r+e+"),
        h = l("ijxY"),
        g = l("An66"),
        f =
          (l("yegR"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;display:block}.container[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.container--column[_ngcontent-%COMP%]{flex-direction:column;align-items:center;justify-content:center}.lines[_ngcontent-%COMP%]{flex:1 1 0;line-height:65px;max-width:100%}.fpk-stage-big[_nghost-%COMP%]   .lines[_ngcontent-%COMP%], .fpk-stage-big   [_nghost-%COMP%]   .lines[_ngcontent-%COMP%], .fpk-stage-small[_nghost-%COMP%]   .lines[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .lines[_ngcontent-%COMP%]{line-height:59px}.lines--column[_ngcontent-%COMP%]{flex:0 1 auto}.icon[_ngcontent-%COMP%]{margin-left:30px}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{flex-direction:row}.component-layout-latin[_nghost-%COMP%]   .line[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .line[_ngcontent-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{margin-left:30px;margin-right:0}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{flex-direction:row-reverse}.component-layout-arabic[_nghost-%COMP%]   .line[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .line[_ngcontent-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{margin-left:0;margin-right:30px}",
              ],
            ],
            data: {},
          }));
      function m(n) {
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
              [["class", "icon"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              i.b,
              i.a,
            )),
            t.xb(
              1,
              4243456,
              null,
              0,
              a.b,
              [o.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            n(e, 1, 0, l.iconFilename, l.iconCategory);
          },
          function (n, e) {
            n(e, 0, 0, t.Nb(e, 1).iconComponentHidden);
          },
        );
      }
      function y(n) {
        return t.ac(
          2,
          [
            t.Tb(402653184, 1, { container: 0 }),
            (n()(),
            t.yb(
              1,
              0,
              [
                [1, 0],
                ["container", 1],
              ],
              null,
              6,
              "div",
              [["class", "container"]],
              [[2, "container--column", null]],
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
                ["class", "lines"],
                ["id", "StatustextLines"],
              ],
              [
                [2, "lines--column", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              u.b,
              u.a,
            )),
            t.xb(
              3,
              212992,
              null,
              0,
              r.a,
              [t.l, t.D, c.a, o.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              16384,
              null,
              0,
              s.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.xb(
              5,
              245760,
              null,
              0,
              b.a,
              [[6, r.a], p.a, t.h, t.l, t.D, [2, d.a], [2, h.a], [2, s.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, m)),
            t.xb(
              7,
              16384,
              null,
              0,
              g.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, e) {
            var l = e.component;
            (n(e, 3, 0, "StatustextLines"),
              n(e, 4, 0, l.ttInterpolateParams),
              n(
                e,
                5,
                0,
                l.developerText,
                "StatustextLines",
                l.maxNumberOfLines,
                l.nonI18nText,
              ),
              n(e, 7, 0, l.iconFilename && l.iconCategory));
          },
          function (n, e) {
            var l = e.component;
            (n(e, 1, 0, l.iconBelowText),
              n(
                e,
                2,
                0,
                l.iconBelowText,
                t.Nb(e, 5).backgroundColor,
                t.Nb(e, 5).fixedNumberOfLines,
                t.Nb(e, 5).mayContainLatinCharsForArabic,
                t.Nb(e, 5).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
    },
  },
]);
