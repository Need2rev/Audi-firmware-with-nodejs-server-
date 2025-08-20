(window.webpackJsonp = window.webpackJsonp || []).push([
  [93],
  {
    P8z4: function (l, n, e) {
      "use strict";
      (e.r(n),
        e.d(n, "OnlineMediaModuleNgFactory", function () {
          return he;
        }));
      var i = e("kZht"),
        a = e("QQZH"),
        t = e("ROBh"),
        o = e("HM3f"),
        r = e("6Oco"),
        u = e("YtkY"),
        s = e("8j5Y"),
        c = e("TLy2"),
        b = e("jIqt"),
        d = e("Ohay"),
        p = e("xVbo"),
        m = e("kuMc"),
        h = e("J+dc"),
        g = e("Yi6/"),
        x = e("AEBN"),
        N = e("46jr"),
        I = e("Ngpk"),
        O = e("Mhh4"),
        f = e("E2zj"),
        v = e("m6IO"),
        T = e("P1io"),
        S = (function (l) {
          return (
            (l.LOGIN_NAME = "ONLINE_MEDIA_LOGIN_NAME"),
            (l.PASSWORD = "ONLINE_MEDIA_PWD"),
            l
          );
        })({}),
        L = e("Y0IF"),
        y = e("u/tF"),
        E = e("ZiU+");
      class D {
        constructor(l, n, e, i, o, r, b, d, p, m, h) {
          ((this.configService = l),
            (this.textInputService = n),
            (this.routingService = e),
            (this.onlineMediaProvidersService = i),
            (this.entertainmentService = o),
            (this.contextDataService = r),
            (this.mediaOnlineBrowserService = b),
            (this.mediaRoutingService = d),
            (this.loginStates = N.e),
            (this.errorStates = N.a),
            (this.authorizationTypes = N.d),
            (this.OnlineMediaRoute = v.a),
            (this.ttMode = g.gd.textToolMode),
            (this.authorizationUrl = void 0),
            (this.authorizationPinCode = void 0),
            (this.destroyed$$ = new a.a(1)),
            (this.credentialsLoginAttempted = !1),
            (this.logger = h.getLogger(
              "online-media.OnlineServiceLoginComponent",
            )));
          const f =
              !m.snapshot.queryParams ||
              "true" !== m.snapshot.queryParams.doNotClearInputs,
            T = m.snapshot.params ? m.snapshot.params.provider : void 0;
          ((this.filteredOnlineMediaProvider$ = this.entertainmentService
            .sourcesForGroup$(I.c.MEDIA)
            .pipe(
              Object(u.a)((l) =>
                T
                  ? l.find(
                      (l) =>
                        !!l.onlinemediaProvider &&
                        l.onlinemediaProvider.id === T,
                    )
                  : void 0,
              ),
            )),
            (this.onlineMediaProvider$ = this.filteredOnlineMediaProvider$.pipe(
              Object(u.a)((l) => (l ? O.b.extendProviderObject(l) : void 0)),
              Object(s.a)((l) => {
                l && l.authorizationUrl && l.authorizationPinCode
                  ? ((this.authorizationUrl = l.authorizationUrl),
                    (this.authorizationPinCode = l.authorizationPinCode),
                    p.markForCheck())
                  : l ||
                    this.logger.error(
                      "onlineMediaProvider$: Could not retrieve referenced online media provider from entertainment source!",
                      T,
                    );
              }),
            )),
            (this.userNameInputField$ = this.onlineMediaProvider$.pipe(
              Object(c.a)((l) =>
                l &&
                l.authorizationType &&
                l.authorizationType.includes(N.d.AUTHMETHODCREDENTIALSFLOW)
                  ? this.textInputService.getInputField(
                      S.LOGIN_NAME,
                      x.e.TIF_ID_28_ONLINE_MEDIA_LOGIN_USERNAME,
                      f ? "" : void 0,
                    )
                  : Object(t.a)(void 0),
              ),
            )),
            (this.passwordInputField$ = this.onlineMediaProvider$.pipe(
              Object(c.a)((l) =>
                l &&
                l.authorizationType &&
                l.authorizationType.includes(N.d.AUTHMETHODCREDENTIALSFLOW)
                  ? this.textInputService.getInputField(
                      S.PASSWORD,
                      x.e.TIF_ID_29_ONLINE_MEDIA_PASSWORD,
                      f ? "" : void 0,
                    )
                  : Object(t.a)(void 0),
              ),
            )));
        }
        ngOnInit() {
          ((this.allowLogin$ = Object(o.b)([
            this.userNameInputField$,
            this.passwordInputField$,
          ]).pipe(
            Object(u.a)(
              ([l, n]) =>
                !!l &&
                Object(y.b)(
                  l,
                  this.contextDataService.getContextData(l.contextId),
                ) &&
                !!n &&
                Object(y.b)(
                  n,
                  this.contextDataService.getContextData(n.contextId),
                ),
            ),
            Object(b.a)(!1),
            Object(d.a)(),
          )),
            this.onlineMediaProvider$
              .pipe(
                Object(p.a)(
                  (l) =>
                    !!l &&
                    (l.loginState === N.e.LOGGEDIN ||
                      l.loginState === N.e.INITIALIZING ||
                      l.loginState === N.e.LOGINERROR),
                ),
                Object(m.a)(this.destroyed$$),
              )
              .subscribe((l) => {
                l.loginState === N.e.LOGGEDIN
                  ? (this.logger.info(
                      `ngOnInit() => ${l.name} is now logged in. Forwarding according context: ${this.routingService.activeAppContextSnapshot}`,
                    ),
                    this.routingService.activeAppContextSnapshot === T.s
                      ? this.goToMediaOnlineBrowser()
                      : this.routingService.goBack())
                  : l.loginState === N.e.LOGINERROR
                    ? this.credentialsLoginAttempted ||
                      (l.authorizationType &&
                        !l.authorizationType.includes(
                          N.d.AUTHMETHODCREDENTIALSFLOW,
                        ))
                      ? (this.logger.warn(
                          `ngOnInit() =>  ${l.name} login failed. Will redirect to error screen ....`,
                        ),
                        this.routingService.goTo(
                          v.a.children.LoginToProvider.children.LoginFailed,
                          {
                            provider: l.id,
                            failureReason: l.providerError
                              ? l.providerError
                              : O.a.OMLOGINERRORGENERAL,
                          },
                        ))
                      : !l.authorizationType ||
                          l.authorizationType.includes(
                            N.d.AUTHMETHODCREDENTIALSFLOW,
                          ) ||
                          this.credentialsLoginAttempted
                        ? this.logger.info(
                            `ngOnInit() => service$: received new login state ${l.loginState} for ${l.name}....`,
                          )
                        : this.logger.info(
                            `ngOnInit() => provider ${l.name} enters with login error. Will ignore this until new login is processed ....`,
                          )
                    : (this.logger.warn(
                        `ngOnInit() => provider ${l.name} unexpectedly reached state ${l.loginState}. Will cancel login and go back ....`,
                      ),
                      this.back());
              }));
        }
        ngOnDestroy() {
          (this.destroyed$$.next(),
            this.destroyed$$.complete(),
            this.onlineMediaProvider$.pipe(Object(h.a)(1)).subscribe((l) => {
              l.loginState === N.e.LOGINRUNNING &&
                (this.logger.info(
                  "ngOnDestroy(): Screen is left while login is still running. Will request login cancellation for service ...",
                ),
                this.onlineMediaProvidersService.abortLoginForService(l));
            }));
        }
        startLoginProcess(l) {
          this.userNameInputField$ && this.passwordInputField$ && l
            ? Object(o.b)([this.userNameInputField$, this.passwordInputField$])
                .pipe(
                  Object(h.a)(1),
                  Object(c.a)(([n, e]) =>
                    n && e && n.text && e.text
                      ? ((this.credentialsLoginAttempted = !0),
                        this.onlineMediaProvidersService.loginUserForService(
                          n.text.trim(),
                          e.text.trim(),
                          l,
                        ))
                      : (this.logger.error(
                          `startLoginProcess: Could not start ${l.name} login due to invalid name or password input`,
                        ),
                        r.a),
                  ),
                  Object(h.a)(1),
                  Object(m.a)(this.destroyed$$),
                )
                .subscribe()
            : this.logger.error(
                `startLoginProcess: Could not start ${l.name} login due to missing name or password input field`,
              );
        }
        back() {
          this.routingService.activeAppContextSnapshot === T.s
            ? this.routingService.goBack(f.a.SourceSelection)
            : this.routingService.goBack();
        }
        goToMediaOnlineBrowser() {
          this.filteredOnlineMediaProvider$
            .pipe(
              Object(h.a)(1),
              Object(c.a)((l) => this.activateSourceWithSourceInfo$(l)),
              Object(m.a)(this.destroyed$$),
            )
            .subscribe(([l, n]) => {
              ((l && n) ||
                this.logger.error(
                  `Source could not be activated. success: ${l}, source: ${n}`,
                ),
                n &&
                  !this.mediaOnlineBrowserService.activateOnlineBrowser(n) &&
                  this.logger.error(
                    `Online browser activation failed. success: ${l}, source: ${n}`,
                  ),
                this.mediaRoutingService.goToOnlineBrowserTiles());
            });
        }
        activateSourceWithSourceInfo$(l) {
          return this.entertainmentService
            .activateEntertainmentSource(l)
            .pipe(Object(u.a)((n) => [n, l]));
        }
      }
      class M {
        constructor(l) {
          ((this.contextId = x.e.TIF_ID_28_ONLINE_MEDIA_LOGIN_USERNAME),
            (this.inputField$ = l.getInputField(S.LOGIN_NAME, this.contextId)));
        }
      }
      class C {
        constructor(l) {
          ((this.contextId = x.e.TIF_ID_29_ONLINE_MEDIA_PASSWORD),
            (this.inputField$ = l.getInputField(S.PASSWORD, this.contextId)));
        }
      }
      class R {
        constructor(l, n, e, i) {
          ((this.routingService = l),
            (this.onlineMediaService = n),
            (this.cdr = e),
            (this.blockLogout = !1),
            (this.service = i.snapshot.params));
        }
        continue() {
          ((this.blockLogout = !0),
            this.cdr.markForCheck(),
            this.onlineMediaService
              .logoutUserForService(this.service)
              .catch(() => this.routingService.goBack())
              .then(() => this.routingService.goBack()));
        }
      }
      var _ = e("Wm/T"),
        P = e("4u8H"),
        A = (function (l) {
          return (
            (l.LoginFailedWrongDataHint =
              "Die eingegebenen Anmeldedaten sind falsch.\nWollen Sie es erneut versuchen?"),
            (l.LoginFailedQrCodeInvalidHint =
              "Ihr QR Code ist nicht mehr g\xfcltig.\nBitte versuchen Sie es erneut."),
            (l.LoginFailedAccountNeedsUpgradeHint =
              "Ihr Account ben\xf6tigt ein Upgrade."),
            (l.LoginFailedAccountInactiveHint =
              "Ihr {{serviceName}} Account ist inaktiv.\nBitte \xfcberpr\xfcfen Sie Ihren Account."),
            (l.LoginFailedGenericErrorHint =
              "W\xe4hrend der Anmeldung ist ein Fehler aufgetreten.\nBitte versuchen Sie es erneut."),
            (l.LoginFailedEsimEndOfData =
              "Ihr Datenvolumen der eSIM ist aufgebraucht.\nUm Online Medien zu nutzen,\nkaufen Sie Datenpakete f\xfcr Ihre eSIM."),
            (l.LoginFailedEsimOutOfRegion =
              "Online Medien sind aufgrund der Datenverf\xfcgbarkeit in\ndiesem Land nicht verf\xfcgbar."),
            (l.LoginFailedEsimNoDataFallback =
              "In Ihrem aktuellen Netzwerk\n sind Ihre Datenpakete nicht nutzbar."),
            l
          );
        })({});
      class F {
        constructor(l, n, e, i, t) {
          switch (
            ((this.routingService = l),
            (this.onlinemediaService = n),
            (this.entertainmentService = e),
            (this.errorStates = O.a),
            (this.LoginErrorTextEnum = A),
            (this.destroyed$$ = new a.a(1)),
            (this.logger = t.getLogger(
              "online-media.OnlineServiceLoginFailureComponent",
            )),
            (this.providerId = i.snapshot.params
              ? i.snapshot.params.provider
              : void 0),
            (this.loginError = i.snapshot.params
              ? i.snapshot.params.failureReason
              : void 0),
            this.loginError)
          ) {
            case O.a.CONNECTIVITYRESTRICTIONNODATAVOLUME:
            case O.a.CONNECTIVITYRESTRICTIONESIMNOLIABLEUSER:
            case O.a.CONNECTIVITYRESTRICTIONESIMNOTCONFIGURED:
            case O.a.CONNECTIVITYRESTRICTIONESIMLICENSENOTVALID:
            case O.a.CONNECTIVITYRESTRICTIONESIMLICENSEEXPIRED:
              this.loginErrorTextId = A.LoginFailedEsimEndOfData;
              break;
            case O.a.CONNECTIVITYRESTRICTIONROAMING:
            case O.a.CONNECTIVITYRESTRICTIONESIMOUTOFREGION:
              this.loginErrorTextId = A.LoginFailedEsimOutOfRegion;
              break;
            case O.a.CONNECTIVITYRESTRICTIONESIMOUTOFPRIMARYNETWORK:
              this.loginErrorTextId = A.LoginFailedEsimNoDataFallback;
              break;
            case O.a.OMLOGINERRORQRCODEEXPIRED:
              this.loginErrorTextId = A.LoginFailedQrCodeInvalidHint;
              break;
            case O.a.OMLOGINERRORACCOUNTINVALID:
              this.loginErrorTextId = A.LoginFailedWrongDataHint;
              break;
            case O.a.OMLOGINERRORPREMIUMREQUIRED:
              this.loginErrorTextId = A.LoginFailedAccountNeedsUpgradeHint;
              break;
            case O.a.OMLOGINERRORACCOUNTINACTIVE:
              this.loginErrorTextId = A.LoginFailedAccountInactiveHint;
              break;
            default:
              this.loginErrorTextId = A.LoginFailedGenericErrorHint;
          }
        }
        ngOnInit() {
          ((this.service$ = this.entertainmentService
            .sourcesForGroup$(I.c.MEDIA)
            .pipe(
              Object(u.a)((l) =>
                this.providerId
                  ? l.find(
                      (l) =>
                        !!l &&
                        !!l.onlinemediaProvider &&
                        l.onlinemediaProvider.id === this.providerId,
                    )
                  : void 0,
              ),
              Object(u.a)((l) => O.b.extendProviderObject(l)),
            )),
            (this.loginRunning$ = this.service$.pipe(
              Object(u.a)((l) => !!l && l.loginState === N.e.LOGINRUNNING),
              Object(m.a)(this.destroyed$$),
            )),
            this.service$
              .pipe(
                Object(p.a)(
                  (l) =>
                    !!l &&
                    l.loginState === N.e.LOGINRUNNING &&
                    !!l.authorizationUrl &&
                    !!l.authorizationPinCode,
                ),
                Object(m.a)(this.destroyed$$),
              )
              .subscribe(() => {
                this.routingService.goBack(void 0, {
                  provider: this.providerId,
                });
              }));
        }
        getHasUserOptionsForErrorState(l) {
          return (
            void 0 === l ||
            l === O.a.OMLOGINERRORACCOUNTINACTIVE ||
            l === O.a.OMLOGINERRORACCOUNTINVALID ||
            l === O.a.OMLOGINERRORQRCODEEXPIRED ||
            l === O.a.OMLOGINERRORGENERAL
          );
        }
        ngOnDestroy() {
          (this.destroyed$$.next(), this.destroyed$$.complete());
        }
        resetLogin(l) {
          l && l.authorizationType
            ? l.authorizationType.includes(N.d.AUTHMETHODCREDENTIALSFLOW)
              ? (this.logger.info(
                  "resetLogin(): will route back to allow re-entering the login credentials for online media provider " +
                    l.name,
                ),
                this.routingService.goBack(void 0, {
                  provider: this.providerId,
                }))
              : l.authorizationType.includes(N.d.AUTHMETHODDEVICEFLOW) &&
                (this.logger.info(
                  "resetLogin(): will request and await new QR code for login to online media provider " +
                    l.name,
                ),
                this.onlinemediaService.requestLoginQrCodeForService(l))
            : this.logger.error(
                "resetLogin(): Could not determine the login method for the referred online media provider ",
                l,
              );
        }
        back() {
          this.routingService.goBack(
            this.routingService.activeAppContextSnapshot === T.s
              ? f.a.SourceSelection
              : P.a,
          );
        }
      }
      class w {}
      var k = e("C9Ky"),
        z = e("TBuG"),
        B = e("/Efp"),
        $ = e("u0hB"),
        G = e("KczA"),
        U = e("oeT7"),
        H = e("Mev3"),
        j = e("bou3"),
        W = e("3OpO"),
        Y = e("yNay"),
        q = e("dLds"),
        Q = e("fu7d"),
        V = e("OtM5"),
        Z = e("9ZFG"),
        K = e("An66"),
        X = e("EM0g"),
        J = e("tZxQ"),
        ll = e("FfND"),
        nl = e("1qmX"),
        el = e("ZUXc"),
        il = e("6ifu"),
        al = e("iEqp"),
        tl = e("mYyF"),
        ol = e("Oguw"),
        rl = e("fzcM"),
        ul = e("KSZN"),
        sl = e("0qMr"),
        cl = e("M706"),
        bl = e("aMc6"),
        dl = e("erFY"),
        pl = e("bMuc"),
        ml = e("ZIdM"),
        hl = e("3bpu"),
        gl = e("6zvu"),
        xl = e("VcEz"),
        Nl = e("y9xZ"),
        Il = e("+sw+"),
        Ol = e("BMrr"),
        fl = e("IEns"),
        vl = e("z6QT"),
        Tl = e("flsk"),
        Sl = e("FQEI"),
        Ll = e("O82V"),
        yl = e("Eln4"),
        El = e("evAh"),
        Dl = e("5wO1"),
        Ml = e("CpzC"),
        Cl = e("0Bsn"),
        Rl = e("5GjX"),
        _l = e("v98a"),
        Pl = e("aOG8"),
        Al = e("Krzs"),
        Fl = e("ywFE"),
        wl = e("yn/i"),
        kl = e("8TlW"),
        zl = e("bmFL"),
        Bl = e("Xo58"),
        $l = e("m3Ja"),
        Gl = e("r+e+"),
        Ul = e("ijxY"),
        Hl = e("ZXHi"),
        jl = e("IRNg"),
        Wl = e("Z2XD"),
        Yl = e("VUTu"),
        ql = e("nK9R"),
        Ql = e("qzuC"),
        Vl = e("8yWk"),
        Zl = e("8WOv"),
        Kl = e("1pak"),
        Xl = e("P+G5"),
        Jl = e("zPMi"),
        ln = e("ihOk"),
        nn = e("ZMtB"),
        en = e("1VvW"),
        an = i.wb({
          encapsulation: 0,
          styles: [
            [
              '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{align-items:stretch}.screen__disclaimer[_ngcontent-%COMP%]{flex-grow:1}.content-area[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;flex-grow:1;padding-left:120px;padding-right:120px}@media (max-width:1280px){.content-area[_ngcontent-%COMP%]{padding-left:0;padding-right:0}}.input-fields[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;align-items:stretch}.loading-view[_ngcontent-%COMP%]{flex-grow:1}.content-area__qr-diclaimer[_ngcontent-%COMP%]{display:flex;align-items:center}.qr-diclaimer__qr-code[_ngcontent-%COMP%]{border:10px solid #fff;width:265px;min-width:265px}.qr-diclaimer__text-area[_ngcontent-%COMP%]{flex-grow:1;padding:30px 30px 30px 20px;min-width:0}.qr-diclaimer__text[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:30px;display:block}.qr-diclaimer__pin[_ngcontent-%COMP%]{display:block;font-size:40px;margin-top:35px;margin-bottom:40px}',
            ],
          ],
          data: {},
        });
      function tn(l) {
        return i.ac(
          0,
          [
            (l()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-word-proposals-host",
              [],
              [[40, "@proposals", 0]],
              null,
              null,
              z.b,
              z.a,
            )),
            i.xb(
              1,
              704512,
              null,
              0,
              B.a,
              [$.c, G.a, U.i, H.a, i.h, j.a, W.a, Y.a],
              { inputField: [0, "inputField"] },
              null,
            ),
          ],
          function (l, n) {
            l(n, 1, 0, n.parent.context.mib3Let);
          },
          function (l, n) {
            l(n, 0, 0, i.Nb(n, 1).wordProposalAnimationState);
          },
        );
      }
      function on(l) {
        return i.ac(
          0,
          [
            (l()(),
            i.yb(0, 0, null, null, 7, "div", [], null, null, null, null, null)),
            (l()(),
            i.yb(
              1,
              0,
              null,
              null,
              4,
              "au3-input-field-host",
              [
                ["class", "content-area__input-field"],
                ["id", "PlaceholderUsername"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "readonlyFieldTapped"]],
              function (l, n, e) {
                var i = !0,
                  a = l.component;
                return (
                  "readonlyFieldTapped" === n &&
                    (i =
                      !1 !==
                        a.routingService.goTo(
                          a.OnlineMediaRoute.children.LoginToProvider.children
                            .Username,
                        ) && i),
                  i
                );
              },
              q.b,
              q.a,
            )),
            i.xb(
              2,
              212992,
              null,
              0,
              Q.a,
              [i.l, i.D, j.a, Y.a, [3, Q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              3,
              147456,
              null,
              0,
              V.a,
              [Z.a, i.h, Y.a, [3, V.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            i.Pb(131072, K.b, [i.h]),
            i.xb(
              5,
              4374528,
              null,
              0,
              X.a,
              [
                $.c,
                G.a,
                J.a,
                ll.a,
                W.a,
                j.a,
                i.h,
                U.i,
                [2, nl.b],
                [2, V.a],
                el.a,
                Y.a,
                il.a,
                al.a,
                i.l,
                tl.a,
                ol.a,
                rl.a,
              ],
              {
                readonly: [0, "readonly"],
                placeholderDeveloperText: [1, "placeholderDeveloperText"],
                inputField: [2, "inputField"],
              },
              { readonlyFieldTapped: "readonlyFieldTapped" },
            ),
            (l()(), i.hb(16777216, null, null, 1, null, tn)),
            i.xb(
              7,
              147456,
              null,
              0,
              ul.a,
              [i.P, i.L, j.a],
              { mib3DualDisplay: [0, "mib3DualDisplay"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 2, 0, "PlaceholderUsername"),
              l(
                n,
                3,
                0,
                !i.Yb(
                  n,
                  3,
                  0,
                  i.Nb(n, 4).transform(e.textInputService.initialized$),
                ),
              ),
              l(
                n,
                5,
                0,
                e.configService.isSingleDisplay(),
                "Benutzername",
                n.context.mib3Let,
              ),
              l(n, 7, 0, null));
          },
          function (l, n) {
            l(n, 1, 0, i.Nb(n, 3).combinedDisabled, i.Nb(n, 3).useBrighterIcon);
          },
        );
      }
      function rn(l) {
        return i.ac(
          0,
          [
            (l()(),
            i.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-input-field-host",
              [["id", "PlaceholderUserpassword"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "readonlyFieldTapped"]],
              function (l, n, e) {
                var i = !0,
                  a = l.component;
                return (
                  "readonlyFieldTapped" === n &&
                    (i =
                      !1 !==
                        a.routingService.goTo(
                          a.OnlineMediaRoute.children.LoginToProvider.children
                            .Password,
                        ) && i),
                  i
                );
              },
              q.b,
              q.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              Q.a,
              [i.l, i.D, j.a, Y.a, [3, Q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              147456,
              null,
              0,
              V.a,
              [Z.a, i.h, Y.a, [3, V.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            i.Pb(131072, K.b, [i.h]),
            i.xb(
              4,
              4374528,
              null,
              0,
              X.a,
              [
                $.c,
                G.a,
                J.a,
                ll.a,
                W.a,
                j.a,
                i.h,
                U.i,
                [2, nl.b],
                [2, V.a],
                el.a,
                Y.a,
                il.a,
                al.a,
                i.l,
                tl.a,
                ol.a,
                rl.a,
              ],
              {
                readonly: [0, "readonly"],
                placeholderDeveloperText: [1, "placeholderDeveloperText"],
                activateField: [2, "activateField"],
                inputField: [3, "inputField"],
              },
              { readonlyFieldTapped: "readonlyFieldTapped" },
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "PlaceholderUserpassword"),
              l(
                n,
                2,
                0,
                !i.Yb(
                  n,
                  2,
                  0,
                  i.Nb(n, 3).transform(e.textInputService.initialized$),
                ),
              ),
              l(
                n,
                4,
                0,
                e.configService.isSingleDisplay(),
                "Passwort",
                !1,
                n.context.mib3Let,
              ));
          },
          function (l, n) {
            l(n, 0, 0, i.Nb(n, 2).combinedDisabled, i.Nb(n, 2).useBrighterIcon);
          },
        );
      }
      function un(l) {
        return i.ac(
          0,
          [
            (l()(),
            i.yb(
              0,
              0,
              null,
              null,
              21,
              "div",
              [["class", "content-area"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            i.yb(
              1,
              0,
              null,
              null,
              6,
              "div",
              [["class", "input-fields"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(), i.hb(16777216, null, null, 2, null, on)),
            i.xb(
              3,
              16384,
              null,
              0,
              sl.a,
              [i.L, i.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            i.Pb(131072, K.b, [i.h]),
            (l()(), i.hb(16777216, null, null, 2, null, rn)),
            i.xb(
              6,
              16384,
              null,
              0,
              sl.a,
              [i.L, i.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            i.Pb(131072, K.b, [i.h]),
            (l()(),
            i.yb(
              8,
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
              cl.b,
              cl.a,
            )),
            i.xb(
              9,
              49152,
              null,
              0,
              bl.a,
              [rl.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (l()(),
            i.yb(
              10,
              0,
              null,
              1,
              11,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "LoginButton"],
              ],
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
              [[null, "mib3Tap"]],
              function (l, n, e) {
                var i = !0;
                return (
                  "mib3Tap" === n &&
                    (i =
                      !1 !==
                        l.component.startLoginProcess(
                          l.parent.context.mib3Let,
                        ) && i),
                  i
                );
              },
              dl.b,
              dl.a,
            )),
            i.xb(
              11,
              212992,
              null,
              0,
              Q.a,
              [i.l, i.D, j.a, Y.a, [3, Q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(12, 147456, null, 0, pl.a, [i.l, i.z], null, null),
            i.xb(
              13,
              147456,
              null,
              0,
              ml.a,
              [pl.a, [2, hl.a], [2, Q.a], Y.a],
              null,
              null,
            ),
            i.xb(
              14,
              147456,
              null,
              0,
              V.a,
              [Z.a, i.h, Y.a, [3, V.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            i.Pb(131072, K.b, [i.h]),
            i.xb(
              16,
              212992,
              null,
              0,
              gl.a,
              [
                Y.a,
                xl.b,
                ml.a,
                [2, hl.a],
                [2, Q.a],
                [2, V.a],
                [2, Nl.a],
                [2, Il.a],
                i.z,
                Ol.a,
                i.l,
                [2, fl.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.Sb(131584, null, vl.a, vl.a, [[3, vl.a]]),
            i.xb(
              18,
              4407296,
              null,
              0,
              Tl.a,
              [
                i.l,
                Sl.a,
                i.h,
                vl.a,
                [2, Ll.a],
                [2, hl.b],
                [2, hl.a],
                [2, yl.a],
                [2, El.a],
              ],
              null,
              null,
            ),
            i.xb(
              19,
              49152,
              null,
              0,
              Dl.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            i.xb(
              20,
              147456,
              null,
              0,
              Ml.a,
              [
                [2, gl.a],
                [2, V.a],
                [2, Cl.a],
                [2, Tl.a],
                [2, Rl.b],
                i.l,
                tl.a,
                _l.b,
              ],
              null,
              null,
            ),
            i.xb(
              21,
              147456,
              null,
              0,
              Pl.a,
              [[2, Tl.a], [2, gl.a], [2, xl.b], Al.a],
              null,
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(
              n,
              3,
              0,
              i.Yb(n, 3, 0, i.Nb(n, 4).transform(e.userNameInputField$)),
            ),
              l(
                n,
                6,
                0,
                i.Yb(n, 6, 0, i.Nb(n, 7).transform(e.passwordInputField$)),
              ),
              l(n, 9, 0, !0),
              l(n, 11, 0, "LoginButton"),
              l(
                n,
                14,
                0,
                !i.Yb(n, 14, 0, i.Nb(n, 15).transform(e.allowLogin$)),
              ),
              l(n, 16, 0),
              l(n, 18, 0),
              l(n, 19, 0, "Anmelden", !0));
          },
          function (l, n) {
            (l(n, 8, 0, i.Nb(n, 9).alignInside, i.Nb(n, 9).alignOutside),
              l(n, 10, 1, [
                i.Nb(n, 14).combinedDisabled,
                i.Nb(n, 14).useBrighterIcon,
                i.Nb(n, 18).markerClassEnabled,
                i.Nb(n, 19).showSeparatorLeft,
                i.Nb(n, 19).showSeparatorRight,
                i.Nb(n, 19).prio1Main,
                i.Nb(n, 19).prio1SmallScale,
                i.Nb(n, 19).prio2SmallScale,
                i.Nb(n, 19).prio1,
                i.Nb(n, 19).prio2,
                i.Nb(n, 19).prio1IconText,
                i.Nb(n, 19).prio1IconOnly,
                i.Nb(n, 19).prio1TextOnly,
                i.Nb(n, 19).prio2IconText,
                i.Nb(n, 19).prio2IconOnly,
                i.Nb(n, 19).prio2TextOnly,
                i.Nb(n, 19).useDefaultMaxWidth,
                i.Nb(n, 19).isDummy,
              ]));
          },
        );
      }
      function sn(l) {
        return i.ac(
          0,
          [
            (l()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "qrcode",
              [["class", "qr-diclaimer__qr-code"]],
              null,
              null,
              null,
              Fl.b,
              Fl.a,
            )),
            i.xb(
              1,
              638976,
              null,
              0,
              wl.a,
              [i.l],
              { qrdata: [0, "qrdata"], size: [1, "size"] },
              null,
            ),
          ],
          function (l, n) {
            l(n, 1, 0, n.component.authorizationUrl, 245);
          },
          null,
        );
      }
      function cn(l) {
        return i.ac(
          0,
          [
            (l()(),
            i.yb(
              0,
              0,
              null,
              null,
              15,
              "div",
              [["class", "content-area__qr-diclaimer"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            i.yb(
              1,
              0,
              null,
              null,
              12,
              "div",
              [["class", "qr-diclaimer__text-area"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            i.yb(
              2,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["class", "qr-diclaimer__text"],
                ["id", "QrCodeGoToUrlInstructionText"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              kl.b,
              kl.a,
            )),
            i.xb(
              3,
              212992,
              null,
              0,
              Q.a,
              [i.l, i.D, j.a, Y.a, [3, Q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              4,
              16384,
              null,
              0,
              zl.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            i.Qb(5, { url: 0 }),
            i.xb(
              6,
              245760,
              null,
              0,
              Bl.a,
              [[6, Q.a], $l.a, i.h, i.l, i.D, [2, Gl.a], [2, Ul.a], [2, zl.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (l()(),
            i.yb(
              7,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "qr-diclaimer__pin"],
                ["id", "QrCode"],
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
              kl.b,
              kl.a,
            )),
            i.xb(
              8,
              212992,
              null,
              0,
              Q.a,
              [i.l, i.D, j.a, Y.a, [3, Q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(9, 16384, null, 0, Ul.a, [], null, null),
            i.xb(
              10,
              245760,
              null,
              0,
              Bl.a,
              [[6, Q.a], $l.a, i.h, i.l, i.D, [2, Gl.a], [2, Ul.a], [2, zl.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            (l()(),
            i.yb(
              11,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "qr-diclaimer__text"],
                ["id", "QrCodeDontLeaveInstructionText"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              kl.b,
              kl.a,
            )),
            i.xb(
              12,
              212992,
              null,
              0,
              Q.a,
              [i.l, i.D, j.a, Y.a, [3, Q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              13,
              245760,
              null,
              0,
              Bl.a,
              [[6, Q.a], $l.a, i.h, i.l, i.D, [2, Gl.a], [2, Ul.a], [2, zl.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (l()(), i.hb(16777216, null, null, 1, null, sn)),
            i.xb(
              15,
              16384,
              null,
              0,
              K.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            l(n, 3, 0, "QrCodeGoToUrlInstructionText");
            var i = l(n, 5, 0, e.authorizationUrl);
            (l(n, 4, 0, i),
              l(
                n,
                6,
                0,
                "Besuchen Sie {{url}} mit Ihrem mobilen Ger\xe4t\nund f\xfcgen Sie diesen Code ein",
                "QrCodeGoToUrlInstructionText",
                4,
              ),
              l(n, 8, 0, "QrCode"),
              l(n, 10, 0, "QrCode", e.authorizationPinCode),
              l(n, 12, 0, "QrCodeDontLeaveInstructionText"),
              l(
                n,
                13,
                0,
                "Verlassen Sie diese Seite nicht, da sonst der\nVerkn\xfcpfungsvorgang abgebrochen wird.\nBei erfolgreicher Verkn\xfcpfung werden Sie\nautomatisch weitergeleitet.",
                "QrCodeDontLeaveInstructionText",
                5,
              ),
              l(n, 15, 0, !!e.authorizationUrl || e.ttMode));
          },
          function (l, n) {
            (l(
              n,
              2,
              0,
              i.Nb(n, 6).backgroundColor,
              i.Nb(n, 6).fixedNumberOfLines,
              i.Nb(n, 6).mayContainLatinCharsForArabic,
              i.Nb(n, 6).shortenWithEllipsisForArabic,
            ),
              l(
                n,
                7,
                0,
                i.Nb(n, 10).backgroundColor,
                i.Nb(n, 10).fixedNumberOfLines,
                i.Nb(n, 10).mayContainLatinCharsForArabic,
                i.Nb(n, 10).shortenWithEllipsisForArabic,
              ),
              l(
                n,
                11,
                0,
                i.Nb(n, 13).backgroundColor,
                i.Nb(n, 13).fixedNumberOfLines,
                i.Nb(n, 13).mayContainLatinCharsForArabic,
                i.Nb(n, 13).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function bn(l) {
        return i.ac(
          0,
          [
            (l()(),
            i.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-init-view",
              [["class", "loading-view"]],
              null,
              null,
              null,
              Hl.b,
              Hl.a,
            )),
            i.xb(1, 49152, null, 0, jl.a, [], null, null),
            (l()(),
            i.yb(
              2,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [["id", "LoginOngoingHint"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              kl.b,
              kl.a,
            )),
            i.xb(
              3,
              212992,
              null,
              0,
              Q.a,
              [i.l, i.D, j.a, Y.a, [3, Q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              4,
              245760,
              null,
              0,
              Bl.a,
              [[6, Q.a], $l.a, i.h, i.l, i.D, [2, Gl.a], [2, Ul.a], [2, zl.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (l, n) {
            (l(n, 3, 0, "LoginOngoingHint"),
              l(
                n,
                4,
                0,
                "Anmeldeprozess l\xe4uft.\nBitte warten...",
                "LoginOngoingHint",
                2,
              ));
          },
          function (l, n) {
            l(
              n,
              2,
              0,
              i.Nb(n, 4).backgroundColor,
              i.Nb(n, 4).fixedNumberOfLines,
              i.Nb(n, 4).mayContainLatinCharsForArabic,
              i.Nb(n, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function dn(l) {
        return i.ac(
          0,
          [
            (l()(), i.hb(16777216, null, null, 1, null, cn)),
            i.xb(
              1,
              16384,
              null,
              0,
              K.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (l()(),
            i.hb(0, [["waitingIndicatorTemplate", 2]], null, 0, null, bn)),
          ],
          function (l, n) {
            var e =
              (null == n.parent.context.mib3Let
                ? null
                : n.parent.context.mib3Let.authorizationType) &&
              (null == n.parent.context.mib3Let ||
              null == n.parent.context.mib3Let.authorizationType
                ? null
                : n.parent.context.mib3Let.authorizationType.includes(
                    n.component.authorizationTypes.AUTHMETHODDEVICEFLOW,
                  ));
            l(n, 1, 0, e, i.Nb(n, 2));
          },
          null,
        );
      }
      function pn(l) {
        return i.ac(
          0,
          [
            (l()(),
            i.yb(
              0,
              0,
              null,
              null,
              21,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:OM_LOGIN_*"],
              ],
              null,
              null,
              null,
              Wl.b,
              Wl.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              Q.a,
              [i.l, i.D, j.a, Y.a, [3, Q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(2, 4440064, null, 0, Nl.a, [Y.a], { id: [0, "id"] }, null),
            (l()(),
            i.yb(
              3,
              0,
              null,
              0,
              13,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Yl.b,
              Yl.a,
            )),
            i.xb(
              4,
              212992,
              null,
              0,
              Q.a,
              [i.l, i.D, j.a, Y.a, [3, Q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              5,
              49152,
              null,
              0,
              ql.a,
              [Ql.a, Vl.a],
              {
                primaryNonI18nText: [0, "primaryNonI18nText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (l()(),
            i.yb(
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
              function (l, n, e) {
                var i = !0;
                return (
                  "mib3Tap" === n && (i = !1 !== l.component.back() && i),
                  i
                );
              },
              Zl.b,
              Zl.a,
            )),
            i.xb(7, 147456, null, 0, pl.a, [i.l, i.z], null, null),
            i.xb(
              8,
              212992,
              null,
              0,
              Q.a,
              [i.l, i.D, j.a, Y.a, [3, Q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              9,
              147456,
              null,
              0,
              ml.a,
              [pl.a, [2, hl.a], [2, Q.a], Y.a],
              null,
              null,
            ),
            i.xb(
              10,
              212992,
              null,
              0,
              gl.a,
              [
                Y.a,
                xl.b,
                ml.a,
                [2, hl.a],
                [2, Q.a],
                [2, V.a],
                [2, Nl.a],
                [2, Il.a],
                i.z,
                Ol.a,
                i.l,
                [2, fl.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.xb(
              11,
              147456,
              null,
              0,
              Kl.a,
              [Y.a, Xl.a, i.l, [2, gl.a], [2, V.a]],
              null,
              null,
            ),
            i.Sb(131584, null, vl.a, vl.a, [[3, vl.a]]),
            i.xb(
              13,
              4407296,
              null,
              0,
              Tl.a,
              [
                i.l,
                Sl.a,
                i.h,
                vl.a,
                [2, Ll.a],
                [2, hl.b],
                [2, hl.a],
                [2, yl.a],
                [2, El.a],
              ],
              null,
              null,
            ),
            i.xb(
              14,
              49152,
              null,
              0,
              Jl.a,
              [[2, V.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            i.xb(
              15,
              147456,
              null,
              0,
              Ml.a,
              [
                [2, gl.a],
                [2, V.a],
                [2, Cl.a],
                [2, Tl.a],
                [2, Rl.b],
                i.l,
                tl.a,
                _l.b,
              ],
              null,
              null,
            ),
            i.xb(
              16,
              147456,
              null,
              0,
              Pl.a,
              [[2, Tl.a], [2, gl.a], [2, xl.b], Al.a],
              null,
              null,
            ),
            (l()(),
            i.yb(
              17,
              0,
              null,
              0,
              4,
              "au3-disclaimer",
              [["class", "screen__disclaimer"]],
              null,
              null,
              null,
              ln.b,
              ln.a,
            )),
            i.xb(
              18,
              4440064,
              null,
              0,
              nn.a,
              [rl.a, [2, Q.a], i.h, Y.a],
              null,
              null,
            ),
            (l()(), i.hb(16777216, null, 0, 1, null, un)),
            i.xb(
              20,
              16384,
              null,
              0,
              K.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (l()(), i.hb(0, [["loginOngoingTemplate", 2]], 0, 0, null, dn)),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "Screen:OM_LOGIN_*"),
              l(n, 2, 0, "Screen:OM_LOGIN_*"),
              l(n, 4, 0, ""),
              l(
                n,
                5,
                0,
                null == n.context.mib3Let ? null : n.context.mib3Let.name,
                "Anmeldung",
              ),
              l(n, 8, 0, "BackButton"),
              l(n, 10, 0),
              l(n, 13, 0),
              l(n, 14, 0, !1, "E163_Backbutton.webp"),
              l(n, 18, 0));
            var a =
              (null == n.context.mib3Let
                ? null
                : n.context.mib3Let.loginState) !==
                e.loginStates.LOGINRUNNING &&
              (null == n.context.mib3Let ||
              null == n.context.mib3Let.authorizationType
                ? null
                : n.context.mib3Let.authorizationType.includes(
                    e.authorizationTypes.AUTHMETHODCREDENTIALSFLOW,
                  ));
            l(n, 20, 0, a, i.Nb(n, 21));
          },
          function (l, n) {
            (l(
              n,
              3,
              0,
              i.Nb(n, 5).hideLeftBorder,
              i.Nb(n, 5).hideDividingBorders,
            ),
              l(
                n,
                6,
                0,
                i.Nb(n, 13).markerClassEnabled,
                i.Nb(n, 14).useItemPlaceholder,
              ));
          },
        );
      }
      function mn(l) {
        return i.ac(
          2,
          [
            (l()(), i.hb(16777216, null, null, 2, null, pn)),
            i.xb(
              1,
              16384,
              null,
              0,
              sl.a,
              [i.L, i.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            i.Pb(131072, K.b, [i.h]),
          ],
          function (l, n) {
            var e = n.component;
            l(
              n,
              1,
              0,
              i.Yb(n, 1, 0, i.Nb(n, 2).transform(e.onlineMediaProvider$)),
            );
          },
          null,
        );
      }
      function hn(l) {
        return i.ac(
          0,
          [
            (l()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-online-service-login",
              [],
              null,
              null,
              null,
              mn,
              an,
            )),
            i.xb(
              1,
              245760,
              null,
              0,
              D,
              [j.a, $.c, ll.a, O.b, L.a, G.a, E.a, f.b, i.h, en.a, Y.a],
              null,
              null,
            ),
          ],
          function (l, n) {
            l(n, 1, 0);
          },
          null,
        );
      }
      var gn = i.ub("au3-online-service-login", D, hn, {}, {}, []),
        xn = e("pNLL"),
        Nn = e("dtma"),
        In = e("sg2e"),
        On = i.wb({
          encapsulation: 0,
          styles: [["[_nghost-%COMP%]{display:block;height:100%}"]],
          data: {},
        });
      function fn(l) {
        return i.ac(
          0,
          [
            (l()(),
            i.yb(
              0,
              0,
              null,
              null,
              5,
              "au3-screen",
              [["id", "Screen:OM_LOGIN_USERNAME_SD"]],
              null,
              null,
              null,
              Wl.b,
              Wl.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              Q.a,
              [i.l, i.D, j.a, Y.a, [3, Q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(2, 4440064, null, 0, Nl.a, [Y.a], { id: [0, "id"] }, null),
            (l()(),
            i.yb(
              3,
              0,
              null,
              0,
              2,
              "au3-enter-name-or-code",
              [],
              null,
              null,
              null,
              xn.b,
              xn.a,
            )),
            i.xb(
              4,
              704512,
              null,
              0,
              Nn.a,
              [$.c, G.a, ll.a, In.a, en.a],
              {
                placeholderDeveloperText: [0, "placeholderDeveloperText"],
                descriptionText: [1, "descriptionText"],
                inputField: [2, "inputField"],
                contextId: [3, "contextId"],
              },
              null,
            ),
            i.Pb(131072, K.b, [i.h]),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "Screen:OM_LOGIN_USERNAME_SD"),
              l(n, 2, 0, "Screen:OM_LOGIN_USERNAME_SD"),
              l(
                n,
                4,
                0,
                "Benutzername",
                "Bitte geben Sie\nIhren \nBenutzernamen\nein.",
                i.Yb(n, 4, 2, i.Nb(n, 5).transform(e.inputField$)),
                e.contextId,
              ));
          },
          null,
        );
      }
      function vn(l) {
        return i.ac(
          2,
          [
            (l()(), i.hb(16777216, null, null, 1, null, fn)),
            i.xb(
              1,
              147456,
              null,
              0,
              ul.a,
              [i.P, i.L, j.a],
              { mib3SingleDisplay: [0, "mib3SingleDisplay"] },
              null,
            ),
          ],
          function (l, n) {
            l(n, 1, 0, null);
          },
          null,
        );
      }
      function Tn(l) {
        return i.ac(
          0,
          [
            (l()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-enter-online-service-username-sd",
              [],
              null,
              null,
              null,
              vn,
              On,
            )),
            i.xb(1, 49152, null, 0, M, [$.c], null, null),
          ],
          null,
          null,
        );
      }
      var Sn = i.ub("au3-enter-online-service-username-sd", M, Tn, {}, {}, []),
        Ln = i.wb({
          encapsulation: 0,
          styles: [["[_nghost-%COMP%]{display:block;height:100%}"]],
          data: {},
        });
      function yn(l) {
        return i.ac(
          0,
          [
            (l()(),
            i.yb(
              0,
              0,
              null,
              null,
              5,
              "au3-screen",
              [["id", "Screen:OM_LOGIN_PASSWORD_SD"]],
              null,
              null,
              null,
              Wl.b,
              Wl.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              Q.a,
              [i.l, i.D, j.a, Y.a, [3, Q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(2, 4440064, null, 0, Nl.a, [Y.a], { id: [0, "id"] }, null),
            (l()(),
            i.yb(
              3,
              0,
              null,
              0,
              2,
              "au3-enter-name-or-code",
              [],
              null,
              null,
              null,
              xn.b,
              xn.a,
            )),
            i.xb(
              4,
              704512,
              null,
              0,
              Nn.a,
              [$.c, G.a, ll.a, In.a, en.a],
              {
                hasProposals: [0, "hasProposals"],
                placeholderDeveloperText: [1, "placeholderDeveloperText"],
                descriptionText: [2, "descriptionText"],
                inputField: [3, "inputField"],
                contextId: [4, "contextId"],
              },
              null,
            ),
            i.Pb(131072, K.b, [i.h]),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "Screen:OM_LOGIN_PASSWORD_SD"),
              l(n, 2, 0, "Screen:OM_LOGIN_PASSWORD_SD"),
              l(
                n,
                4,
                0,
                !1,
                "Passwort",
                "Bitte geben Sie\ndas \nPasswort\nein.",
                i.Yb(n, 4, 3, i.Nb(n, 5).transform(e.inputField$)),
                e.contextId,
              ));
          },
          null,
        );
      }
      function En(l) {
        return i.ac(
          2,
          [
            (l()(), i.hb(16777216, null, null, 1, null, yn)),
            i.xb(
              1,
              147456,
              null,
              0,
              ul.a,
              [i.P, i.L, j.a],
              { mib3SingleDisplay: [0, "mib3SingleDisplay"] },
              null,
            ),
          ],
          function (l, n) {
            l(n, 1, 0, null);
          },
          null,
        );
      }
      function Dn(l) {
        return i.ac(
          0,
          [
            (l()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-enter-online-service-pwd-sd",
              [],
              null,
              null,
              null,
              En,
              Ln,
            )),
            i.xb(1, 49152, null, 0, C, [$.c], null, null),
          ],
          null,
          null,
        );
      }
      var Mn = i.ub("au3-enter-online-service-pwd-sd", C, Dn, {}, {}, []),
        Cn = e("eZMD"),
        Rn = e("HD2x"),
        _n = i.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{align-items:stretch}.screen__disclaimer-area[_ngcontent-%COMP%]{flex-grow:1;overflow:hidden}",
            ],
          ],
          data: {},
        });
      function Pn(l) {
        return i.ac(
          0,
          [
            (l()(),
            i.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "OkButton"],
              ],
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
              function (l, n, e) {
                var i = !0;
                return (
                  "mib3Tap" === n && (i = !1 !== l.component.back() && i),
                  i
                );
              },
              dl.b,
              dl.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              Q.a,
              [i.l, i.D, j.a, Y.a, [3, Q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(2, 147456, null, 0, pl.a, [i.l, i.z], null, null),
            i.xb(
              3,
              147456,
              null,
              0,
              ml.a,
              [pl.a, [2, hl.a], [2, Q.a], Y.a],
              null,
              null,
            ),
            i.xb(
              4,
              212992,
              null,
              0,
              gl.a,
              [
                Y.a,
                xl.b,
                ml.a,
                [2, hl.a],
                [2, Q.a],
                [2, V.a],
                [2, Nl.a],
                [2, Il.a],
                i.z,
                Ol.a,
                i.l,
                [2, fl.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.Sb(131584, null, vl.a, vl.a, [[3, vl.a]]),
            i.xb(
              6,
              4407296,
              null,
              0,
              Tl.a,
              [
                i.l,
                Sl.a,
                i.h,
                vl.a,
                [2, Ll.a],
                [2, hl.b],
                [2, hl.a],
                [2, yl.a],
                [2, El.a],
              ],
              null,
              null,
            ),
            i.xb(
              7,
              49152,
              null,
              0,
              Dl.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            i.xb(
              8,
              147456,
              null,
              0,
              Ml.a,
              [
                [2, gl.a],
                [2, V.a],
                [2, Cl.a],
                [2, Tl.a],
                [2, Rl.b],
                i.l,
                tl.a,
                _l.b,
              ],
              null,
              null,
            ),
            i.xb(
              9,
              147456,
              null,
              0,
              Pl.a,
              [[2, Tl.a], [2, gl.a], [2, xl.b], Al.a],
              null,
              null,
            ),
          ],
          function (l, n) {
            (l(n, 1, 0, "OkButton"),
              l(n, 4, 0),
              l(n, 6, 0),
              l(n, 7, 0, "Ok", !0));
          },
          function (l, n) {
            l(n, 0, 1, [
              i.Nb(n, 6).markerClassEnabled,
              i.Nb(n, 7).showSeparatorLeft,
              i.Nb(n, 7).showSeparatorRight,
              i.Nb(n, 7).prio1Main,
              i.Nb(n, 7).prio1SmallScale,
              i.Nb(n, 7).prio2SmallScale,
              i.Nb(n, 7).prio1,
              i.Nb(n, 7).prio2,
              i.Nb(n, 7).prio1IconText,
              i.Nb(n, 7).prio1IconOnly,
              i.Nb(n, 7).prio1TextOnly,
              i.Nb(n, 7).prio2IconText,
              i.Nb(n, 7).prio2IconOnly,
              i.Nb(n, 7).prio2TextOnly,
              i.Nb(n, 7).useDefaultMaxWidth,
              i.Nb(n, 7).isDummy,
            ]);
          },
        );
      }
      function An(l) {
        return i.ac(
          0,
          [
            (l()(),
            i.yb(
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
              cl.b,
              cl.a,
            )),
            i.xb(
              1,
              49152,
              null,
              0,
              bl.a,
              [rl.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (l()(), i.hb(16777216, null, 1, 1, null, Pn)),
            i.xb(
              3,
              16384,
              null,
              0,
              K.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, !0),
              l(
                n,
                3,
                0,
                e.loginError === e.errorStates.OMLOGINERRORACCOUNTINACTIVE,
                i.Nb(n.parent, 23),
              ));
          },
          function (l, n) {
            l(n, 0, 0, i.Nb(n, 1).alignInside, i.Nb(n, 1).alignOutside);
          },
        );
      }
      function Fn(l) {
        return i.ac(
          0,
          [
            (l()(),
            i.yb(
              0,
              0,
              null,
              null,
              23,
              "au3-operation-panel",
              [],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              cl.b,
              cl.a,
            )),
            i.xb(
              1,
              49152,
              null,
              0,
              bl.a,
              [rl.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (l()(),
            i.yb(
              2,
              0,
              null,
              1,
              11,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "TryLoginAgainButton"],
              ],
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
              [[null, "mib3Tap"]],
              function (l, n, e) {
                var i = !0;
                return (
                  "mib3Tap" === n &&
                    (i =
                      !1 !== l.component.resetLogin(l.parent.context.mib3Let) &&
                      i),
                  i
                );
              },
              dl.b,
              dl.a,
            )),
            i.xb(
              3,
              212992,
              null,
              0,
              Q.a,
              [i.l, i.D, j.a, Y.a, [3, Q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(4, 147456, null, 0, pl.a, [i.l, i.z], null, null),
            i.xb(
              5,
              147456,
              null,
              0,
              ml.a,
              [pl.a, [2, hl.a], [2, Q.a], Y.a],
              null,
              null,
            ),
            i.xb(
              6,
              147456,
              null,
              0,
              V.a,
              [Z.a, i.h, Y.a, [3, V.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            i.Pb(131072, K.b, [i.h]),
            i.xb(
              8,
              212992,
              null,
              0,
              gl.a,
              [
                Y.a,
                xl.b,
                ml.a,
                [2, hl.a],
                [2, Q.a],
                [2, V.a],
                [2, Nl.a],
                [2, Il.a],
                i.z,
                Ol.a,
                i.l,
                [2, fl.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.Sb(131584, null, vl.a, vl.a, [[3, vl.a]]),
            i.xb(
              10,
              4407296,
              null,
              0,
              Tl.a,
              [
                i.l,
                Sl.a,
                i.h,
                vl.a,
                [2, Ll.a],
                [2, hl.b],
                [2, hl.a],
                [2, yl.a],
                [2, El.a],
              ],
              null,
              null,
            ),
            i.xb(
              11,
              49152,
              null,
              0,
              Dl.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            i.xb(
              12,
              147456,
              null,
              0,
              Ml.a,
              [
                [2, gl.a],
                [2, V.a],
                [2, Cl.a],
                [2, Tl.a],
                [2, Rl.b],
                i.l,
                tl.a,
                _l.b,
              ],
              null,
              null,
            ),
            i.xb(
              13,
              147456,
              null,
              0,
              Pl.a,
              [[2, Tl.a], [2, gl.a], [2, xl.b], Al.a],
              null,
              null,
            ),
            (l()(),
            i.yb(
              14,
              0,
              null,
              1,
              9,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "ChancelLoginButton"],
              ],
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
              function (l, n, e) {
                var i = !0;
                return (
                  "mib3Tap" === n && (i = !1 !== l.component.back() && i),
                  i
                );
              },
              dl.b,
              dl.a,
            )),
            i.xb(
              15,
              212992,
              null,
              0,
              Q.a,
              [i.l, i.D, j.a, Y.a, [3, Q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(16, 147456, null, 0, pl.a, [i.l, i.z], null, null),
            i.xb(
              17,
              147456,
              null,
              0,
              ml.a,
              [pl.a, [2, hl.a], [2, Q.a], Y.a],
              null,
              null,
            ),
            i.xb(
              18,
              212992,
              null,
              0,
              gl.a,
              [
                Y.a,
                xl.b,
                ml.a,
                [2, hl.a],
                [2, Q.a],
                [2, V.a],
                [2, Nl.a],
                [2, Il.a],
                i.z,
                Ol.a,
                i.l,
                [2, fl.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.Sb(131584, null, vl.a, vl.a, [[3, vl.a]]),
            i.xb(
              20,
              4407296,
              null,
              0,
              Tl.a,
              [
                i.l,
                Sl.a,
                i.h,
                vl.a,
                [2, Ll.a],
                [2, hl.b],
                [2, hl.a],
                [2, yl.a],
                [2, El.a],
              ],
              null,
              null,
            ),
            i.xb(
              21,
              49152,
              null,
              0,
              Dl.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            i.xb(
              22,
              147456,
              null,
              0,
              Ml.a,
              [
                [2, gl.a],
                [2, V.a],
                [2, Cl.a],
                [2, Tl.a],
                [2, Rl.b],
                i.l,
                tl.a,
                _l.b,
              ],
              null,
              null,
            ),
            i.xb(
              23,
              147456,
              null,
              0,
              Pl.a,
              [[2, Tl.a], [2, gl.a], [2, xl.b], Al.a],
              null,
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, !0),
              l(n, 3, 0, "TryLoginAgainButton"),
              l(n, 6, 0, i.Yb(n, 6, 0, i.Nb(n, 7).transform(e.loginRunning$))),
              l(n, 8, 0),
              l(n, 10, 0),
              l(n, 11, 0, "Erneut eingeben", !0),
              l(n, 15, 0, "ChancelLoginButton"),
              l(n, 18, 0),
              l(n, 20, 0),
              l(n, 21, 0, "Abbrechen", !0));
          },
          function (l, n) {
            (l(n, 0, 0, i.Nb(n, 1).alignInside, i.Nb(n, 1).alignOutside),
              l(n, 2, 1, [
                i.Nb(n, 6).combinedDisabled,
                i.Nb(n, 6).useBrighterIcon,
                i.Nb(n, 10).markerClassEnabled,
                i.Nb(n, 11).showSeparatorLeft,
                i.Nb(n, 11).showSeparatorRight,
                i.Nb(n, 11).prio1Main,
                i.Nb(n, 11).prio1SmallScale,
                i.Nb(n, 11).prio2SmallScale,
                i.Nb(n, 11).prio1,
                i.Nb(n, 11).prio2,
                i.Nb(n, 11).prio1IconText,
                i.Nb(n, 11).prio1IconOnly,
                i.Nb(n, 11).prio1TextOnly,
                i.Nb(n, 11).prio2IconText,
                i.Nb(n, 11).prio2IconOnly,
                i.Nb(n, 11).prio2TextOnly,
                i.Nb(n, 11).useDefaultMaxWidth,
                i.Nb(n, 11).isDummy,
              ]),
              l(n, 14, 1, [
                i.Nb(n, 20).markerClassEnabled,
                i.Nb(n, 21).showSeparatorLeft,
                i.Nb(n, 21).showSeparatorRight,
                i.Nb(n, 21).prio1Main,
                i.Nb(n, 21).prio1SmallScale,
                i.Nb(n, 21).prio2SmallScale,
                i.Nb(n, 21).prio1,
                i.Nb(n, 21).prio2,
                i.Nb(n, 21).prio1IconText,
                i.Nb(n, 21).prio1IconOnly,
                i.Nb(n, 21).prio1TextOnly,
                i.Nb(n, 21).prio2IconText,
                i.Nb(n, 21).prio2IconOnly,
                i.Nb(n, 21).prio2TextOnly,
                i.Nb(n, 21).useDefaultMaxWidth,
                i.Nb(n, 21).isDummy,
              ]));
          },
        );
      }
      function wn(l) {
        return i.ac(
          0,
          [
            (l()(),
            i.yb(
              0,
              0,
              null,
              null,
              23,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:OM_LOGIN_ERROR_*"],
              ],
              null,
              null,
              null,
              Wl.b,
              Wl.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              Q.a,
              [i.l, i.D, j.a, Y.a, [3, Q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(2, 4440064, null, 0, Nl.a, [Y.a], { id: [0, "id"] }, null),
            (l()(),
            i.yb(
              3,
              0,
              null,
              0,
              13,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Yl.b,
              Yl.a,
            )),
            i.xb(
              4,
              212992,
              null,
              0,
              Q.a,
              [i.l, i.D, j.a, Y.a, [3, Q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              5,
              49152,
              null,
              0,
              ql.a,
              [Ql.a, Vl.a],
              {
                primaryNonI18nText: [0, "primaryNonI18nText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (l()(),
            i.yb(
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
              function (l, n, e) {
                var i = !0;
                return (
                  "mib3Tap" === n && (i = !1 !== l.component.back() && i),
                  i
                );
              },
              Zl.b,
              Zl.a,
            )),
            i.xb(7, 147456, null, 0, pl.a, [i.l, i.z], null, null),
            i.xb(
              8,
              212992,
              null,
              0,
              Q.a,
              [i.l, i.D, j.a, Y.a, [3, Q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              9,
              147456,
              null,
              0,
              ml.a,
              [pl.a, [2, hl.a], [2, Q.a], Y.a],
              null,
              null,
            ),
            i.xb(
              10,
              212992,
              null,
              0,
              gl.a,
              [
                Y.a,
                xl.b,
                ml.a,
                [2, hl.a],
                [2, Q.a],
                [2, V.a],
                [2, Nl.a],
                [2, Il.a],
                i.z,
                Ol.a,
                i.l,
                [2, fl.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.xb(
              11,
              147456,
              null,
              0,
              Kl.a,
              [Y.a, Xl.a, i.l, [2, gl.a], [2, V.a]],
              null,
              null,
            ),
            i.Sb(131584, null, vl.a, vl.a, [[3, vl.a]]),
            i.xb(
              13,
              4407296,
              null,
              0,
              Tl.a,
              [
                i.l,
                Sl.a,
                i.h,
                vl.a,
                [2, Ll.a],
                [2, hl.b],
                [2, hl.a],
                [2, yl.a],
                [2, El.a],
              ],
              null,
              null,
            ),
            i.xb(
              14,
              49152,
              null,
              0,
              Jl.a,
              [[2, V.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            i.xb(
              15,
              147456,
              null,
              0,
              Ml.a,
              [
                [2, gl.a],
                [2, V.a],
                [2, Cl.a],
                [2, Tl.a],
                [2, Rl.b],
                i.l,
                tl.a,
                _l.b,
              ],
              null,
              null,
            ),
            i.xb(
              16,
              147456,
              null,
              0,
              Pl.a,
              [[2, Tl.a], [2, gl.a], [2, xl.b], Al.a],
              null,
              null,
            ),
            (l()(),
            i.yb(
              17,
              0,
              null,
              0,
              5,
              "au3-instruction-text",
              [["class", "screen__disclaimer-area"]],
              null,
              null,
              null,
              Cn.b,
              Cn.a,
            )),
            i.xb(
              18,
              16384,
              null,
              0,
              zl.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            i.Qb(19, { serviceName: 0 }),
            i.xb(
              20,
              49152,
              null,
              0,
              Rn.a,
              [],
              {
                primaryTextId: [0, "primaryTextId"],
                primaryTextIdEnum: [1, "primaryTextIdEnum"],
                primaryDeveloperText: [2, "primaryDeveloperText"],
              },
              null,
            ),
            (l()(), i.hb(16777216, null, 1, 1, null, An)),
            i.xb(
              22,
              16384,
              null,
              0,
              K.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), i.hb(0, [["tryAgainButtonsTemplate", 2]], 0, 0, null, Fn)),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "Screen:OM_LOGIN_ERROR_*"),
              l(n, 2, 0, "Screen:OM_LOGIN_ERROR_*"),
              l(n, 4, 0, ""),
              l(
                n,
                5,
                0,
                null == n.context.mib3Let ? null : n.context.mib3Let.name,
                "Hinweis",
              ),
              l(n, 8, 0, "BackButton"),
              l(n, 10, 0),
              l(n, 13, 0),
              l(n, 14, 0, !1, "E163_Backbutton.webp"));
            var i = l(
              n,
              19,
              0,
              null == n.context.mib3Let ? null : n.context.mib3Let.name,
            );
            (l(n, 18, 0, i),
              l(
                n,
                20,
                0,
                e.loginErrorTextId,
                e.LoginErrorTextEnum,
                e.loginErrorTextId,
              ),
              l(n, 22, 0, e.getHasUserOptionsForErrorState(e.loginError)));
          },
          function (l, n) {
            (l(
              n,
              3,
              0,
              i.Nb(n, 5).hideLeftBorder,
              i.Nb(n, 5).hideDividingBorders,
            ),
              l(
                n,
                6,
                0,
                i.Nb(n, 13).markerClassEnabled,
                i.Nb(n, 14).useItemPlaceholder,
              ));
          },
        );
      }
      function kn(l) {
        return i.ac(
          2,
          [
            (l()(), i.hb(16777216, null, null, 2, null, wn)),
            i.xb(
              1,
              16384,
              null,
              0,
              sl.a,
              [i.L, i.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            i.Pb(131072, K.b, [i.h]),
          ],
          function (l, n) {
            var e = n.component;
            l(n, 1, 0, i.Yb(n, 1, 0, i.Nb(n, 2).transform(e.service$)));
          },
          null,
        );
      }
      function zn(l) {
        return i.ac(
          0,
          [
            (l()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-online-service-login-failure",
              [],
              null,
              null,
              null,
              kn,
              _n,
            )),
            i.xb(
              1,
              245760,
              null,
              0,
              F,
              [ll.a, O.b, L.a, en.a, Y.a],
              null,
              null,
            ),
          ],
          function (l, n) {
            l(n, 1, 0);
          },
          null,
        );
      }
      var Bn = i.ub("au3-online-service-login-failure", F, zn, {}, {}, []),
        $n = i.wb({
          encapsulation: 0,
          styles: [["[_nghost-%COMP%]{display:block;height:100%}"]],
          data: {},
        });
      function Gn(l) {
        return i.ac(
          2,
          [
            (l()(),
            i.yb(
              0,
              0,
              null,
              null,
              33,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:OM_LOGOUT_CONFIRM"],
              ],
              null,
              null,
              null,
              Wl.b,
              Wl.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              Q.a,
              [i.l, i.D, j.a, Y.a, [3, Q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(2, 4440064, null, 0, Nl.a, [Y.a], { id: [0, "id"] }, null),
            (l()(),
            i.yb(
              3,
              0,
              null,
              0,
              2,
              "au3-title-line",
              [["id", "TitleLine"]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Yl.b,
              Yl.a,
            )),
            i.xb(
              4,
              212992,
              null,
              0,
              Q.a,
              [i.l, i.D, j.a, Y.a, [3, Q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              5,
              49152,
              null,
              0,
              ql.a,
              [Ql.a, Vl.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (l()(),
            i.yb(
              6,
              0,
              null,
              0,
              27,
              "au3-instruction-text",
              [["id", "DoYouWantToLogoutHint"]],
              null,
              null,
              null,
              Cn.b,
              Cn.a,
            )),
            i.xb(
              7,
              212992,
              null,
              0,
              Q.a,
              [i.l, i.D, j.a, Y.a, [3, Q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              8,
              16384,
              null,
              0,
              zl.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            i.Qb(9, { serviceName: 0 }),
            i.xb(
              10,
              49152,
              null,
              0,
              Rn.a,
              [],
              { primaryDeveloperText: [0, "primaryDeveloperText"] },
              null,
            ),
            (l()(),
            i.yb(
              11,
              0,
              null,
              1,
              22,
              "au3-operation-panel",
              [],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              cl.b,
              cl.a,
            )),
            i.xb(
              12,
              49152,
              null,
              0,
              bl.a,
              [rl.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (l()(),
            i.yb(
              13,
              0,
              null,
              1,
              10,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "YesButton"],
              ],
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
              [[null, "mib3Tap"]],
              function (l, n, e) {
                var i = !0;
                return (
                  "mib3Tap" === n && (i = !1 !== l.component.continue() && i),
                  i
                );
              },
              dl.b,
              dl.a,
            )),
            i.xb(
              14,
              212992,
              null,
              0,
              Q.a,
              [i.l, i.D, j.a, Y.a, [3, Q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(15, 147456, null, 0, pl.a, [i.l, i.z], null, null),
            i.xb(
              16,
              147456,
              null,
              0,
              ml.a,
              [pl.a, [2, hl.a], [2, Q.a], Y.a],
              null,
              null,
            ),
            i.xb(
              17,
              147456,
              null,
              0,
              V.a,
              [Z.a, i.h, Y.a, [3, V.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            i.xb(
              18,
              212992,
              null,
              0,
              gl.a,
              [
                Y.a,
                xl.b,
                ml.a,
                [2, hl.a],
                [2, Q.a],
                [2, V.a],
                [2, Nl.a],
                [2, Il.a],
                i.z,
                Ol.a,
                i.l,
                [2, fl.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.Sb(131584, null, vl.a, vl.a, [[3, vl.a]]),
            i.xb(
              20,
              4407296,
              null,
              0,
              Tl.a,
              [
                i.l,
                Sl.a,
                i.h,
                vl.a,
                [2, Ll.a],
                [2, hl.b],
                [2, hl.a],
                [2, yl.a],
                [2, El.a],
              ],
              null,
              null,
            ),
            i.xb(
              21,
              49152,
              null,
              0,
              Dl.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            i.xb(
              22,
              147456,
              null,
              0,
              Ml.a,
              [
                [2, gl.a],
                [2, V.a],
                [2, Cl.a],
                [2, Tl.a],
                [2, Rl.b],
                i.l,
                tl.a,
                _l.b,
              ],
              null,
              null,
            ),
            i.xb(
              23,
              147456,
              null,
              0,
              Pl.a,
              [[2, Tl.a], [2, gl.a], [2, xl.b], Al.a],
              null,
              null,
            ),
            (l()(),
            i.yb(
              24,
              0,
              null,
              1,
              9,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "NoButton"],
              ],
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
              function (l, n, e) {
                var i = !0;
                return (
                  "mib3Tap" === n &&
                    (i = !1 !== l.component.routingService.goBack() && i),
                  i
                );
              },
              dl.b,
              dl.a,
            )),
            i.xb(
              25,
              212992,
              null,
              0,
              Q.a,
              [i.l, i.D, j.a, Y.a, [3, Q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(26, 147456, null, 0, pl.a, [i.l, i.z], null, null),
            i.xb(
              27,
              147456,
              null,
              0,
              ml.a,
              [pl.a, [2, hl.a], [2, Q.a], Y.a],
              null,
              null,
            ),
            i.xb(
              28,
              212992,
              null,
              0,
              gl.a,
              [
                Y.a,
                xl.b,
                ml.a,
                [2, hl.a],
                [2, Q.a],
                [2, V.a],
                [2, Nl.a],
                [2, Il.a],
                i.z,
                Ol.a,
                i.l,
                [2, fl.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            i.Sb(131584, null, vl.a, vl.a, [[3, vl.a]]),
            i.xb(
              30,
              4407296,
              null,
              0,
              Tl.a,
              [
                i.l,
                Sl.a,
                i.h,
                vl.a,
                [2, Ll.a],
                [2, hl.b],
                [2, hl.a],
                [2, yl.a],
                [2, El.a],
              ],
              null,
              null,
            ),
            i.xb(
              31,
              49152,
              null,
              0,
              Dl.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            i.xb(
              32,
              147456,
              null,
              0,
              Ml.a,
              [
                [2, gl.a],
                [2, V.a],
                [2, Cl.a],
                [2, Tl.a],
                [2, Rl.b],
                i.l,
                tl.a,
                _l.b,
              ],
              null,
              null,
            ),
            i.xb(
              33,
              147456,
              null,
              0,
              Pl.a,
              [[2, Tl.a], [2, gl.a], [2, xl.b], Al.a],
              null,
              null,
            ),
          ],
          function (l, n) {
            var e = n.component;
            (l(n, 1, 0, "Screen:OM_LOGOUT_CONFIRM"),
              l(n, 2, 0, "Screen:OM_LOGOUT_CONFIRM"),
              l(n, 4, 0, "TitleLine"),
              l(n, 5, 0, "Nutzer", "Online Profil"),
              l(n, 7, 0, "DoYouWantToLogoutHint"));
            var i = l(n, 9, 0, e.service.name);
            (l(n, 8, 0, i),
              l(
                n,
                10,
                0,
                "M\xf6chten Sie Ihren {{serviceName}}\nAccount abmelden?",
              ),
              l(n, 12, 0, !0),
              l(n, 14, 0, "YesButton"),
              l(n, 17, 0, e.blockLogout),
              l(n, 18, 0),
              l(n, 20, 0),
              l(n, 21, 0, "Ja", !0),
              l(n, 25, 0, "NoButton"),
              l(n, 28, 0),
              l(n, 30, 0),
              l(n, 31, 0, "Nein", !0));
          },
          function (l, n) {
            (l(
              n,
              3,
              0,
              i.Nb(n, 5).hideLeftBorder,
              i.Nb(n, 5).hideDividingBorders,
            ),
              l(n, 11, 0, i.Nb(n, 12).alignInside, i.Nb(n, 12).alignOutside),
              l(n, 13, 1, [
                i.Nb(n, 17).combinedDisabled,
                i.Nb(n, 17).useBrighterIcon,
                i.Nb(n, 20).markerClassEnabled,
                i.Nb(n, 21).showSeparatorLeft,
                i.Nb(n, 21).showSeparatorRight,
                i.Nb(n, 21).prio1Main,
                i.Nb(n, 21).prio1SmallScale,
                i.Nb(n, 21).prio2SmallScale,
                i.Nb(n, 21).prio1,
                i.Nb(n, 21).prio2,
                i.Nb(n, 21).prio1IconText,
                i.Nb(n, 21).prio1IconOnly,
                i.Nb(n, 21).prio1TextOnly,
                i.Nb(n, 21).prio2IconText,
                i.Nb(n, 21).prio2IconOnly,
                i.Nb(n, 21).prio2TextOnly,
                i.Nb(n, 21).useDefaultMaxWidth,
                i.Nb(n, 21).isDummy,
              ]),
              l(n, 24, 1, [
                i.Nb(n, 30).markerClassEnabled,
                i.Nb(n, 31).showSeparatorLeft,
                i.Nb(n, 31).showSeparatorRight,
                i.Nb(n, 31).prio1Main,
                i.Nb(n, 31).prio1SmallScale,
                i.Nb(n, 31).prio2SmallScale,
                i.Nb(n, 31).prio1,
                i.Nb(n, 31).prio2,
                i.Nb(n, 31).prio1IconText,
                i.Nb(n, 31).prio1IconOnly,
                i.Nb(n, 31).prio1TextOnly,
                i.Nb(n, 31).prio2IconText,
                i.Nb(n, 31).prio2IconOnly,
                i.Nb(n, 31).prio2TextOnly,
                i.Nb(n, 31).useDefaultMaxWidth,
                i.Nb(n, 31).isDummy,
              ]));
          },
        );
      }
      function Un(l) {
        return i.ac(
          0,
          [
            (l()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-confirm-logout-request",
              [],
              null,
              null,
              null,
              Gn,
              $n,
            )),
            i.xb(1, 49152, null, 0, R, [ll.a, O.b, i.h, en.a], null, null),
          ],
          null,
          null,
        );
      }
      var Hn = i.ub("au3-confirm-logout-request", R, Un, {}, {}, []),
        jn = e("aDqW"),
        Wn = e("/W5r"),
        Yn = e("+Qv1"),
        qn = e("XtoR"),
        Qn = e("jTHl"),
        Vn = e("zL3T"),
        Zn = e("JPnh"),
        Kn = e("3Sae"),
        Xn = e("50DD"),
        Jn = e("S1OC"),
        le = e("+epw"),
        ne = e("zMPs"),
        ee = e("6Yk8"),
        ie = e("u6+O"),
        ae = e("CIQC"),
        te = e("REmV"),
        oe = e("Y3N+"),
        re = e("MJxn"),
        ue = e("eIOF"),
        se = e("t+4g"),
        ce = e("myjn"),
        be = e("fOZ7"),
        de = e("QDrj"),
        pe = e("jKfI"),
        me = e("bx0v"),
        he = i.vb(w, [], function (l) {
          return i.Kb([
            i.Lb(512, i.j, i.X, [
              [8, [k.a, gn, Sn, Mn, Bn, Hn]],
              [3, i.j],
              i.x,
            ]),
            i.Lb(4608, K.m, K.l, [i.u]),
            i.Lb(4608, jn.h, jn.g, []),
            i.Lb(4608, jn.d, jn.f, []),
            i.Lb(4608, jn.j, jn.e, []),
            i.Lb(4608, jn.c, jn.b, []),
            i.Lb(4608, jn.k, jn.k, [
              jn.l,
              jn.h,
              jn.d,
              jn.j,
              jn.c,
              jn.m,
              jn.o,
              jn.n,
              jn.a,
            ]),
            i.Lb(4608, Wn.b, Wn.b, [Yn.e, [2, Wn.a]]),
            i.Lb(4608, qn.b, qn.b, [Yn.e, [2, qn.a]]),
            i.Lb(4608, Qn.b, Qn.b, [Yn.e, [2, Qn.a]]),
            i.Lb(4608, Vn.b, Vn.b, [Yn.e, [2, Vn.a]]),
            i.Lb(4608, Zn.a, Zn.a, [Kn.a, Y.a]),
            i.Lb(4608, Xn.a, Xn.a, [Jn.a, Y.a]),
            i.Lb(1073742336, K.c, K.c, []),
            i.Lb(1073742336, jn.i, jn.i, []),
            i.Lb(1073742336, le.a, le.a, []),
            i.Lb(1073742336, ne.a, ne.a, []),
            i.Lb(1073742336, ee.a, ee.a, []),
            i.Lb(1073742336, ie.a, ie.a, []),
            i.Lb(1073742336, ae.a, ae.a, []),
            i.Lb(1073742336, te.a, te.a, []),
            i.Lb(1073742336, oe.a, oe.a, []),
            i.Lb(1073742336, re.a, re.a, []),
            i.Lb(1073742336, ue.a, ue.a, []),
            i.Lb(1073742336, se.a, se.a, []),
            i.Lb(1073742336, ce.a, ce.a, []),
            i.Lb(1073742336, be.a, be.a, []),
            i.Lb(1073742336, en.n, en.n, [
              [2, en.s],
              [2, en.m],
            ]),
            i.Lb(1073742336, de.a, de.a, []),
            i.Lb(1073742336, pe.a, pe.a, []),
            i.Lb(1073742336, me.a, me.a, []),
            i.Lb(1073742336, w, w, []),
            i.Lb(256, jn.o, void 0, []),
            i.Lb(256, jn.m, void 0, []),
            i.Lb(256, jn.n, void 0, []),
            i.Lb(256, jn.a, void 0, []),
            i.Lb(
              1024,
              en.k,
              function () {
                return [
                  [
                    {
                      path: "",
                      children: [
                        {
                          path: "",
                          children: [
                            {
                              path: "login",
                              children: [
                                { path: "", component: D },
                                {
                                  canActivate: [_.a],
                                  path: "username",
                                  component: M,
                                },
                                {
                                  canActivate: [_.a],
                                  path: "password",
                                  component: C,
                                },
                                { path: "login-failed", component: F },
                              ],
                            },
                            { path: "logout", component: R },
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
  },
]);
