(window.webpackJsonp = window.webpackJsonp || []).push([
  [61],
  {
    SueR: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return i;
      });
      var a = t("XY/Y"),
        l = t("zcBZ");
      class i {
        transform(n) {
          switch (n) {
            case a.c.MOBILE:
            case l.a.MOBILE:
              return "Mobil";
            case a.c.LANDLINE:
            case l.a.LANDLINE:
              return "Festnetz";
            case a.c.PRIVATE:
            case l.a.PRIVATE:
              return "Privat";
            case a.c.BUSINESS:
            case l.a.BUSINESS:
              return "Gesch\xe4ftlich";
            case a.c.FAX:
            case l.a.FAX:
              return "Fax";
            case a.c.UNKNOWN:
            case l.a.UNKNOWN:
            default:
              return "";
          }
        }
      }
    },
    oWpa: function (n, e, t) {
      "use strict";
      (t.d(e, "a", function () {
        return m;
      }),
        t.d(e, "b", function () {
          return x;
        }));
      var a = t("kZht"),
        l = t("HVUF"),
        i = t("B3Zb"),
        o = t("yNay"),
        c = t("8TlW"),
        r = t("fu7d"),
        s = t("bou3"),
        u = t("bmFL"),
        b = t("Xo58"),
        d = t("m3Ja"),
        p = t("r+e+"),
        h = t("ijxY"),
        g = t("An66"),
        m =
          (t("yegR"),
          a.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;display:block}.container[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.container--column[_ngcontent-%COMP%]{flex-direction:column;align-items:center;justify-content:center}.lines[_ngcontent-%COMP%]{flex:1 1 0;line-height:65px;max-width:100%}.fpk-stage-big[_nghost-%COMP%]   .lines[_ngcontent-%COMP%], .fpk-stage-big   [_nghost-%COMP%]   .lines[_ngcontent-%COMP%], .fpk-stage-small[_nghost-%COMP%]   .lines[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .lines[_ngcontent-%COMP%]{line-height:59px}.lines--column[_ngcontent-%COMP%]{flex:0 1 auto}.icon[_ngcontent-%COMP%]{margin-left:30px}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{flex-direction:row}.component-layout-latin[_nghost-%COMP%]   .line[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .line[_ngcontent-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{margin-left:30px;margin-right:0}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{flex-direction:row-reverse}.component-layout-arabic[_nghost-%COMP%]   .line[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .line[_ngcontent-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{margin-left:0;margin-right:30px}",
              ],
            ],
            data: {},
          }));
      function f(n) {
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
              "au3-icon",
              [["class", "icon"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              l.b,
              l.a,
            )),
            a.xb(
              1,
              4243456,
              null,
              0,
              i.b,
              [o.a, a.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (n, e) {
            var t = e.component;
            n(e, 1, 0, t.iconFilename, t.iconCategory);
          },
          function (n, e) {
            n(e, 0, 0, a.Nb(e, 1).iconComponentHidden);
          },
        );
      }
      function x(n) {
        return a.ac(
          2,
          [
            a.Tb(402653184, 1, { container: 0 }),
            (n()(),
            a.yb(
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
            a.yb(
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
              c.b,
              c.a,
            )),
            a.xb(
              3,
              212992,
              null,
              0,
              r.a,
              [a.l, a.D, s.a, o.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              4,
              16384,
              null,
              0,
              u.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            a.xb(
              5,
              245760,
              null,
              0,
              b.a,
              [[6, r.a], d.a, a.h, a.l, a.D, [2, p.a], [2, h.a], [2, u.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            (n()(), a.hb(16777216, null, null, 1, null, f)),
            a.xb(
              7,
              16384,
              null,
              0,
              g.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, e) {
            var t = e.component;
            (n(e, 3, 0, "StatustextLines"),
              n(e, 4, 0, t.ttInterpolateParams),
              n(
                e,
                5,
                0,
                t.developerText,
                "StatustextLines",
                t.maxNumberOfLines,
                t.nonI18nText,
              ),
              n(e, 7, 0, t.iconFilename && t.iconCategory));
          },
          function (n, e) {
            var t = e.component;
            (n(e, 1, 0, t.iconBelowText),
              n(
                e,
                2,
                0,
                t.iconBelowText,
                a.Nb(e, 5).backgroundColor,
                a.Nb(e, 5).fixedNumberOfLines,
                a.Nb(e, 5).mayContainLatinCharsForArabic,
                a.Nb(e, 5).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
    },
    "qqN+": function (n, e, t) {
      "use strict";
      (t.r(e),
        t.d(e, "AddressbookModuleNgFactory", function () {
          return Pe;
        }));
      var a = t("kZht"),
        l = t("DqhV"),
        i = t("Yi6/"),
        o = t("sK8D"),
        c = t("14+n"),
        r = t("6xFL"),
        s = t("YEFf"),
        u = t("YtkY"),
        b = t("kuMc"),
        d = t("TLy2"),
        p = t("8j5Y"),
        h = t("xVbo"),
        g = t("jIqt"),
        m = t("J+dc"),
        f = t("QQZH"),
        x = t("ZTXN"),
        v = t("HM3f"),
        y = t("4ZeQ"),
        S = t("GZoL"),
        C = t("IXiK"),
        O = t("d3LF"),
        M = t("I/e0"),
        P = t("ndMh"),
        _ = t("oJGs"),
        T = t("P1io"),
        N = t("AGsL");
      class I {
        constructor(n, e, t, a, l, o, c, r, s, b, d, p, h, g, m) {
          ((this.routingService = n),
            (this.addressbookOptionsService = e),
            (this.addressbookService = t),
            (this.phoneService = a),
            (this.activatedRoute = l),
            (this.messagingContextService = o),
            (this.messageInfoService = c),
            (this.messageResourceService = r),
            (this.popupManager = s),
            (this.configService = b),
            (this.naviAppstateService = d),
            (this.naviContactSearchService = p),
            (this.optionMenuService = h),
            (this.iconCategoryEnum = i.Z),
            (this.phoneName = ""),
            (this.showPhoneticName = !1),
            (this.naviAvailable$ = this.naviAppstateService.state$.pipe(
              Object(u.a)(
                (n) =>
                  n === P.a.Initialized &&
                  this.naviContactSearchService.isNavigateToContactFeatureEnabled(),
              ),
            )),
            (this.optionTypeEnum = _.a),
            (this.listItemType = i.rb),
            (this.destroyed$$ = new f.a(1)),
            (this.onContactTrufflesSearchTap$$ = new x.a()),
            (this.logger = m.getLogger("main.contact-card")));
        }
        ngOnInit() {
          (this.phoneService.phones$
            .pipe(
              Object(u.a)((n) => n.focusDevice),
              Object(b.a)(this.destroyed$$),
            )
            .subscribe((n) => {
              this.phoneName = (n && n.name) || "";
            }),
            (this.isIPhone$ = Object(v.b)(
              this.messageInfoService.isSendingPossibleForFocusDevice(C.a.MAIL),
              this.messageInfoService.isSendingPossibleForFocusDevice(C.a.SMS),
            ).pipe(Object(u.a)(([n, e]) => !n && !e))));
          const n = this.activatedRoute.params.pipe(
            Object(d.a)((n) => this.addressbookService.contact$(n.id)),
            Object(i.Kd)(),
          );
          ((this.contact$ = n.pipe(
            Object(p.a)((n) =>
              null != n
                ? this.logger.info("got contact: ", n)
                : this.logger.error(
                    "could not resolve contact from routing params",
                  ),
            ),
            Object(h.a)(i.wd),
          )),
            (this.optionsAvailable$ = n.pipe(
              Object(h.a)(i.wd),
              Object(d.a)((n) =>
                this.addressbookOptionsService.canShowOptionsForContact(n),
              ),
            )),
            (this.showFavoriteStar$ = Object(v.b)([
              n,
              this.addressbookService.favorites$,
            ]).pipe(
              Object(u.a)(
                ([n, e]) =>
                  null != n &&
                  0 !== e.length &&
                  this.routingService.activeAppContextSnapshot === T.w &&
                  this.isContactInFavorites(n, e),
              ),
              Object(g.a)(!1),
            )),
            (this.isHongKongOrMacao =
              this.configService.isHongKongSaleCountry() ||
              this.configService.isMacaoSaleCountry()),
            (this.showPhoneticName = this.configService.isJapanRegion()));
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        callContact(n, e) {
          this.phoneService.callContact(n, e).catch((t) => {
            this.logger.error(`Failed to call contact (${n.name}, ${e}):`, t);
          });
        }
        toggleNumberIsFavorite(n, e) {
          n.phoneNumberList
            ? n.phoneNumberList[e].isFavorite
              ? this.addressbookService.removeContactNumberAsFavorite(n, e, !0)
              : this.addressbookService.addContactNumberAsFavorite(n, e, !0)
            : this.logger.error(
                `Could not toggle number: Contact "${n.id}" has no phone number list`,
              );
        }
        openOptionsMenu(n) {
          if (n) {
            const e = n;
            this.addressbookOptionsService
              .canShowOptionsForContact(e)
              .pipe(Object(b.a)(this.destroyed$$))
              .subscribe((n) => {
                n
                  ? this.optionMenuService.showOptionMenu(e)
                  : this.logger.info(
                      "openOptionsMenu: unable to open menu, no editable options available for contact",
                      e,
                    );
              });
          }
        }
        startContactTrufflesSearch(n, e) {
          (this.onContactTrufflesSearchTap$$.next(),
            this.naviAppstateService.state === P.a.Initialized
              ? this.naviContactSearchService.isNavigateToContactFeatureEnabled()
                ? (this.logger.info(
                    `startContactTrufflesSearch: try to go to navi contact search for contactId ${n.id}`,
                  ),
                  this.activatedRoute.queryParams
                    .pipe(
                      Object(b.a)(this.onContactTrufflesSearchTap$$),
                      Object(b.a)(this.destroyed$$),
                    )
                    .subscribe((t) => {
                      this.logger.info(
                        "startContactTrufflesSearch: use queryParams:",
                        t,
                      );
                      const a = Object.assign({}, t);
                      (this.naviContactSearchService.startSearchingForContactAddress(
                        n,
                        e,
                      ),
                        this.routingService.goTo(o.b.ContactSearch, a));
                    }))
                : this.logger.warn(
                    "startContactTrufflesSearch: Not searching for address: NavigateToContact feature is not enabled for this region",
                  )
              : this.logger.warn(
                  "startContactTrufflesSearch: Not searching for address: navi not initialized",
                ));
        }
        sendSms(n) {
          ((n && n.phoneNumber && n.phoneNumber.number) ||
            this.logger.warn("Not sending SMS: number is missing!"),
            this.messageResourceService.accounts$
              .pipe(
                Object(u.a)((n) => n.filter((n) => n.accountType === C.a.SMS)),
                Object(u.a)((n) => {
                  const e = this.phoneService.phones.focusDevice,
                    t = e && e.device && e.device.id;
                  return n.find((n) => (n && n.device && n.device.id) === t);
                }),
                Object(m.a)(1),
                Object(b.a)(this.destroyed$$),
              )
              .subscribe((e) => {
                (e ||
                  this.logger.warn(
                    "sendSms: Could not find a sms account for focus device",
                  ),
                  this.messagingContextService.enterMessagingSMS(
                    {
                      contact: n.contactElement,
                      selectedNumber: n.phoneNumber.number,
                    },
                    e,
                  ));
              }));
        }
        sendEmail(n) {
          ((n && n.address && n.address.address) ||
            this.logger.warn("Not sending Mail: address is missing!"),
            this.messagingContextService
              .enterMessagingMail({
                contact: n.contactElement,
                selectedAddress: n.address.address,
              })
              .catch((n) => {
                n &&
                  n.message &&
                  n.message === S.a.NO_MATCHING_ACCOUNT &&
                  this.popupManager.request(
                    i.Ob.POPUP_ADB_DETAIL_NO_MAIL_ACCOUNT_AVAILABLE,
                  );
              }));
        }
        isContactInFavorites(n, e) {
          return e.some((e) => null != e.contact && e.contact.id === n.id);
        }
      }
      var A = t("nmT2");
      class L {
        constructor(n, e, t, a) {
          ((this.phoneService = n),
            (this.routingService = e),
            (this.adbService = t),
            (this.AddressBookRoute = A.a),
            (this.destroy$$ = new f.a(1)),
            (this.logger = a.getLogger("addressbook.AdbPrivacyComponent")),
            this.subscribeToConfidentialMode());
        }
        ngOnDestroy() {
          (this.destroy$$.next(), this.destroy$$.complete());
        }
        subscribeToConfidentialMode() {
          this.adbService.profileConfidentialModeActive$
            .pipe(Object(b.a)(this.destroy$$))
            .subscribe((n) => {
              !1 === n &&
                (this.logger.info(
                  "subscribeToConfidentialMode: turned off, navigate back",
                ),
                this.routingService.goBack());
            });
        }
      }
      const w = () =>
          Promise.all([t.e(2), t.e(3), t.e(4), t.e(8), t.e(57), t.e(97)])
            .then(t.bind(null, "mPYu"))
            .then((n) => n.PhoneSearchModuleNgFactory),
        k = () =>
          Promise.all([t.e(47), t.e(102)])
            .then(t.bind(null, "99XO"))
            .then((n) => n.AddressbookSettingsModuleNgFactory);
      class $ {}
      var F = t("C9Ky"),
        D = t("MuFt"),
        E = t("4XZL"),
        B = t("fu7d"),
        j = t("bou3"),
        H = t("yNay"),
        R = t("ijxY"),
        z = t("URLa"),
        Y = t("Z2XD"),
        Z = t("y9xZ"),
        K = t("VUTu"),
        V = t("nK9R"),
        G = t("qzuC"),
        J = t("8yWk"),
        X = t("8WOv"),
        W = t("bMuc"),
        U = t("ZIdM"),
        q = t("3bpu"),
        Q = t("6zvu"),
        nn = t("VcEz"),
        en = t("OtM5"),
        tn = t("+sw+"),
        an = t("BMrr"),
        ln = t("IEns"),
        on = t("1pak"),
        cn = t("P+G5"),
        rn = t("z6QT"),
        sn = t("flsk"),
        un = t("FQEI"),
        bn = t("O82V"),
        dn = t("Eln4"),
        pn = t("evAh"),
        hn = t("zPMi"),
        gn = t("CpzC"),
        mn = t("0Bsn"),
        fn = t("5GjX"),
        xn = t("mYyF"),
        vn = t("v98a"),
        yn = t("aOG8"),
        Sn = t("Krzs"),
        Cn = t("ihOk"),
        On = t("ZMtB"),
        Mn = t("fzcM"),
        Pn = t("ovwC"),
        _n = t("Qkjl"),
        Tn = t("J7Kz"),
        Nn = t("An66"),
        In = t("iAsw"),
        An = t("Pqed"),
        Ln = t("BS+8"),
        wn = t("VYaS"),
        kn = t("HygI"),
        $n = t("SFb6"),
        Fn = t("xS3h"),
        Dn = t("3Sae"),
        En = t("ONRh"),
        Bn = t("sg2e"),
        jn = t("FfND"),
        Hn = t("1VvW"),
        Rn = a.wb({
          encapsulation: 0,
          styles: [
            [
              '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{display:block}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.screen[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}.contact-data[_ngcontent-%COMP%], .screen[_ngcontent-%COMP%]{position:relative;display:flex}.contact-data[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);flex-direction:row;align-items:center;min-height:120px}.contact-data__information[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;padding:12px 30px 16px;flex-grow:1}.contact-data__profile-picture[_ngcontent-%COMP%]{min-width:100px;min-height:100px;width:100px;height:100px}.contact-data__text--primary[_ngcontent-%COMP%]{font-size:40px}.contact-data__text--secondary[_ngcontent-%COMP%]{font-size:30px}.contact-data__icons[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.contact-data__icon[_ngcontent-%COMP%]{min-width:119px;min-height:119px}.strip[_ngcontent-%COMP%]{position:relative;width:100%;height:3px;background-image:linear-gradient(90deg,var(--current-context-alpha),var(--current-context) 20%,var(--current-context) 50%,var(--current-context-alpha))}.contact-information__item[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.item__information[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;padding:16px 30px 16px 125px;flex-grow:1}.item__text--primary[_ngcontent-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:40px}.item__text--secondary[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:30px}.item__icons[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse;align-items:center;min-width:238px}.item__icon[_ngcontent-%COMP%]{min-width:119px;min-height:119px}.options-menu-item[_ngcontent-%COMP%]{font-size:40px}',
            ],
          ],
          data: {},
        });
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
              3,
              "au3-list-route-item",
              [
                ["class", "options-menu-item"],
                ["id", "OptionMenuSelectedItem"],
                ["ttIgnore", ""],
              ],
              null,
              null,
              null,
              E.b,
              E.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              B.a,
              [a.l, a.D, j.a, H.a, [3, B.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 16384, null, 0, R.a, [], null, null),
            a.xb(
              3,
              114688,
              null,
              0,
              z.a,
              [],
              {
                titleNonI18nText: [0, "titleNonI18nText"],
                subtitleNonI18nText: [1, "subtitleNonI18nText"],
                hasSubtitle: [2, "hasSubtitle"],
                type: [3, "type"],
              },
              null,
            ),
          ],
          function (n, e) {
            var t = e.component;
            (n(e, 1, 0, "OptionMenuSelectedItem"),
              n(
                e,
                3,
                0,
                null == e.context.$implicit ? null : e.context.$implicit.name,
                null == e.context.$implicit ||
                  null == e.context.$implicit.contactObject
                  ? null
                  : e.context.$implicit.contactObject.company,
                !(
                  null == e.context.$implicit ||
                  null == e.context.$implicit.contactObject ||
                  !e.context.$implicit.contactObject.company
                ),
                t.listItemType.ITEM_TYPE_NO_END_ICON,
              ));
          },
          null,
        );
      }
      function Yn(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              30,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:ADB_DETAIL"],
              ],
              null,
              null,
              null,
              Y.b,
              Y.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              B.a,
              [a.l, a.D, j.a, H.a, [3, B.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 4440064, null, 0, Z.a, [H.a], { id: [0, "id"] }, null),
            (n()(),
            a.yb(
              3,
              0,
              null,
              0,
              12,
              "au3-title-line",
              [["class", "title"]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              K.b,
              K.a,
            )),
            a.xb(
              4,
              49152,
              null,
              0,
              V.a,
              [G.a, J.a],
              {
                primaryId: [0, "primaryId"],
                primaryNonI18nText: [1, "primaryNonI18nText"],
                secondaryDeveloperText: [2, "secondaryDeveloperText"],
              },
              null,
            ),
            (n()(),
            a.yb(
              5,
              0,
              null,
              0,
              10,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (n, e, t) {
                var a = !0;
                return (
                  "mib3Tap" === e &&
                    (a = !1 !== n.component.routingService.goBack() && a),
                  a
                );
              },
              X.b,
              X.a,
            )),
            a.xb(6, 147456, null, 0, W.a, [a.l, a.z], null, null),
            a.xb(
              7,
              147456,
              null,
              0,
              U.a,
              [W.a, [2, q.a], [2, B.a], H.a],
              null,
              null,
            ),
            a.xb(
              8,
              212992,
              null,
              0,
              Q.a,
              [
                H.a,
                nn.b,
                U.a,
                [2, q.a],
                [2, B.a],
                [2, en.a],
                [2, Z.a],
                [2, tn.a],
                a.z,
                an.a,
                a.l,
                [2, ln.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.xb(
              9,
              147456,
              null,
              0,
              on.a,
              [H.a, cn.a, a.l, [2, Q.a], [2, en.a]],
              null,
              null,
            ),
            a.xb(10, 16384, null, 0, R.a, [], null, null),
            a.Sb(131584, null, rn.a, rn.a, [[3, rn.a]]),
            a.xb(
              12,
              4407296,
              null,
              0,
              sn.a,
              [
                a.l,
                un.a,
                a.h,
                rn.a,
                [2, bn.a],
                [2, q.b],
                [2, q.a],
                [2, dn.a],
                [2, pn.a],
              ],
              null,
              null,
            ),
            a.xb(
              13,
              49152,
              null,
              0,
              hn.a,
              [[2, en.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            a.xb(
              14,
              147456,
              null,
              0,
              gn.a,
              [
                [2, Q.a],
                [2, en.a],
                [2, mn.a],
                [2, sn.a],
                [2, fn.b],
                a.l,
                xn.a,
                vn.b,
              ],
              null,
              null,
            ),
            a.xb(
              15,
              147456,
              null,
              0,
              yn.a,
              [[2, sn.a], [2, Q.a], [2, nn.b], Sn.a],
              null,
              null,
            ),
            (n()(),
            a.yb(
              16,
              0,
              null,
              0,
              8,
              "au3-disclaimer",
              [],
              null,
              null,
              null,
              Cn.b,
              Cn.a,
            )),
            a.xb(
              17,
              4440064,
              null,
              0,
              On.a,
              [Mn.a, [2, B.a], a.h, H.a],
              null,
              null,
            ),
            (n()(),
            a.yb(
              18,
              0,
              null,
              0,
              6,
              "au3-contact-card-view",
              [],
              null,
              [
                [null, "phoneNumberTapped"],
                [null, "addressTapped"],
                [null, "favoriteStateChange"],
                [null, "smsTapped"],
                [null, "mailTapped"],
                [null, "moreMenuTapped"],
              ],
              function (n, e, t) {
                var a = !0,
                  l = n.component;
                return (
                  "phoneNumberTapped" === e &&
                    (a =
                      !1 !==
                        l.callContact(t.contactElement, t.phoneNumber.index) &&
                      a),
                  "addressTapped" === e &&
                    (a =
                      !1 !==
                        l.startContactTrufflesSearch(
                          t.contactElement,
                          t.address,
                        ) && a),
                  "favoriteStateChange" === e &&
                    (a =
                      !1 !==
                        l.toggleNumberIsFavorite(
                          t.contactElement,
                          t.phoneNumber.index,
                        ) && a),
                  "smsTapped" === e && (a = !1 !== l.sendSms(t) && a),
                  "mailTapped" === e && (a = !1 !== l.sendEmail(t) && a),
                  "moreMenuTapped" === e &&
                    (a = !1 !== l.openOptionsMenu(t) && a),
                  a
                );
              },
              Pn.b,
              Pn.a,
            )),
            a.xb(
              19,
              114688,
              null,
              0,
              _n.a,
              [r.a, j.a, Tn.a, H.a],
              {
                contactElement: [0, "contactElement"],
                hasOptionsForMoreMenu: [1, "hasOptionsForMoreMenu"],
                isHongKongOrMacao: [2, "isHongKongOrMacao"],
                showPhoneticName: [3, "showPhoneticName"],
                showFavoriteStar: [4, "showFavoriteStar"],
                isIPhone: [5, "isIPhone"],
                isNaviAvailable: [6, "isNaviAvailable"],
              },
              {
                phoneNumberTapped: "phoneNumberTapped",
                smsTapped: "smsTapped",
                mailTapped: "mailTapped",
                addressTapped: "addressTapped",
                favoriteStateChange: "favoriteStateChange",
                moreMenuTapped: "moreMenuTapped",
              },
            ),
            a.Pb(131072, Nn.b, [a.h]),
            a.Pb(131072, Nn.b, [a.h]),
            a.Pb(131072, Nn.b, [a.h]),
            a.Pb(131072, Nn.b, [a.h]),
            a.Pb(131072, Nn.b, [a.h]),
            (n()(),
            a.yb(
              25,
              0,
              null,
              0,
              5,
              "au3-option-menu-wrapper",
              [],
              null,
              null,
              null,
              In.b,
              In.a,
            )),
            a.Sb(6144, null, An.b, null, [Ln.a]),
            a.Sb(512, null, pn.a, pn.a, [[3, pn.a]]),
            a.xb(
              28,
              245760,
              null,
              1,
              Ln.a,
              [wn.a, kn.a, a.h, pn.a],
              { ttEnumType: [0, "ttEnumType"] },
              null,
            ),
            a.Tb(603979776, 1, { template: 0 }),
            (n()(), a.hb(0, [[1, 2]], null, 0, null, zn)),
          ],
          function (n, e) {
            var t = e.component;
            (n(e, 1, 0, "Screen:ADB_DETAIL"),
              n(e, 2, 0, "Screen:ADB_DETAIL"),
              n(e, 4, 0, "PhoneName", t.phoneName, "Visitenkarte"),
              n(e, 8, 0),
              n(e, 12, 0),
              n(e, 13, 0, !1, "E163_Backbutton.webp"),
              n(e, 17, 0),
              n(
                e,
                19,
                0,
                a.Yb(e, 19, 0, a.Nb(e, 20).transform(t.contact$)),
                a.Yb(e, 19, 1, a.Nb(e, 21).transform(t.optionsAvailable$)),
                t.isHongKongOrMacao,
                t.showPhoneticName,
                a.Yb(e, 19, 4, a.Nb(e, 22).transform(t.showFavoriteStar$)),
                a.Yb(e, 19, 5, a.Nb(e, 23).transform(t.isIPhone$)),
                a.Yb(e, 19, 6, a.Nb(e, 24).transform(t.naviAvailable$)),
              ),
              n(e, 28, 0, t.optionTypeEnum));
          },
          function (n, e) {
            (n(
              e,
              3,
              0,
              a.Nb(e, 4).hideLeftBorder,
              a.Nb(e, 4).hideDividingBorders,
            ),
              n(
                e,
                5,
                0,
                a.Nb(e, 12).markerClassEnabled,
                a.Nb(e, 13).useItemPlaceholder,
              ));
          },
        );
      }
      function Zn(n) {
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
              "au3-contact-card",
              [],
              null,
              null,
              null,
              Yn,
              Rn,
            )),
            a.Sb(6144, null, wn.a, null, [_.b]),
            a.Sb(131584, null, _.b, _.b, [
              kn.a,
              S.b,
              O.a,
              r.a,
              o.c,
              $n.a,
              Fn.b,
              Dn.a,
              En.a,
              Bn.a,
              H.a,
            ]),
            a.xb(
              3,
              245760,
              null,
              0,
              I,
              [
                jn.a,
                _.b,
                r.a,
                s.c,
                Hn.a,
                S.b,
                O.a,
                N.a,
                Bn.a,
                j.a,
                M.a,
                c.a,
                kn.a,
                [2, y.a],
                H.a,
              ],
              null,
              null,
            ),
          ],
          function (n, e) {
            n(e, 3, 0);
          },
          null,
        );
      }
      var Kn = a.ub("au3-contact-card", I, Zn, {}, {}, []),
        Vn = t("9ZFG"),
        Gn = t("6480"),
        Jn = t("oeT7"),
        Xn = t("t7cT"),
        Wn = t("8TlW"),
        Un = t("Xo58"),
        qn = t("m3Ja"),
        Qn = t("r+e+"),
        ne = t("bmFL"),
        ee = a.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:100%}.privacy-label[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;justify-content:center;font-size:40px;text-align:center}",
            ],
          ],
          data: {},
        });
      function te(n) {
        return a.ac(
          0,
          [
            (n()(),
            a.yb(
              0,
              0,
              null,
              null,
              34,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:ADB_MAIN_PRIVACY"],
              ],
              null,
              null,
              null,
              Y.b,
              Y.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              B.a,
              [a.l, a.D, j.a, H.a, [3, B.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 4440064, null, 0, Z.a, [H.a], { id: [0, "id"] }, null),
            (n()(),
            a.yb(
              3,
              0,
              null,
              0,
              28,
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
              K.b,
              K.a,
            )),
            a.xb(
              4,
              212992,
              null,
              0,
              B.a,
              [a.l, a.D, j.a, H.a, [3, B.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              5,
              49152,
              null,
              0,
              V.a,
              [G.a, J.a],
              {
                primaryId: [0, "primaryId"],
                primaryNonI18nText: [1, "primaryNonI18nText"],
                secondaryDeveloperText: [2, "secondaryDeveloperText"],
              },
              null,
            ),
            a.Pb(131072, Nn.b, [a.h]),
            (n()(),
            a.yb(
              7,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["icon", "E163_Backbutton.webp"],
                ["id", "BackButton"],
                ["left", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (n, e, t) {
                var a = !0;
                return (
                  "mib3Tap" === e &&
                    (a =
                      !1 !== n.component.routingService.leaveIncludeState() &&
                      a),
                  a
                );
              },
              X.b,
              X.a,
            )),
            a.xb(8, 147456, null, 0, W.a, [a.l, a.z], null, null),
            a.xb(
              9,
              212992,
              null,
              0,
              B.a,
              [a.l, a.D, j.a, H.a, [3, B.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              10,
              147456,
              null,
              0,
              U.a,
              [W.a, [2, q.a], [2, B.a], H.a],
              null,
              null,
            ),
            a.xb(
              11,
              212992,
              null,
              0,
              Q.a,
              [
                H.a,
                nn.b,
                U.a,
                [2, q.a],
                [2, B.a],
                [2, en.a],
                [2, Z.a],
                [2, tn.a],
                a.z,
                an.a,
                a.l,
                [2, ln.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.xb(
              12,
              147456,
              null,
              0,
              on.a,
              [H.a, cn.a, a.l, [2, Q.a], [2, en.a]],
              null,
              null,
            ),
            a.xb(13, 16384, null, 0, R.a, [], null, null),
            a.Sb(131584, null, rn.a, rn.a, [[3, rn.a]]),
            a.xb(
              15,
              4407296,
              null,
              0,
              sn.a,
              [
                a.l,
                un.a,
                a.h,
                rn.a,
                [2, bn.a],
                [2, q.b],
                [2, q.a],
                [2, dn.a],
                [2, pn.a],
              ],
              null,
              null,
            ),
            a.xb(
              16,
              49152,
              null,
              0,
              hn.a,
              [[2, en.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            a.xb(
              17,
              147456,
              null,
              0,
              gn.a,
              [
                [2, Q.a],
                [2, en.a],
                [2, mn.a],
                [2, sn.a],
                [2, fn.b],
                a.l,
                xn.a,
                vn.b,
              ],
              null,
              null,
            ),
            a.xb(
              18,
              147456,
              null,
              0,
              yn.a,
              [[2, sn.a], [2, Q.a], [2, nn.b], Sn.a],
              null,
              null,
            ),
            (n()(),
            a.yb(
              19,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "SettingsButton"],
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
              X.b,
              X.a,
            )),
            a.xb(
              20,
              147456,
              null,
              0,
              en.a,
              [Vn.a, a.h, H.a, [3, en.a]],
              null,
              null,
            ),
            a.xb(21, 147456, null, 0, W.a, [a.l, a.z], null, null),
            a.xb(
              22,
              212992,
              null,
              0,
              B.a,
              [a.l, a.D, j.a, H.a, [3, B.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              23,
              147456,
              null,
              0,
              U.a,
              [W.a, [2, q.a], [2, B.a], H.a],
              null,
              null,
            ),
            a.xb(
              24,
              212992,
              null,
              0,
              Q.a,
              [
                H.a,
                nn.b,
                U.a,
                [2, q.a],
                [2, B.a],
                [2, en.a],
                [2, Z.a],
                [2, tn.a],
                a.z,
                an.a,
                a.l,
                [2, ln.a],
              ],
              null,
              null,
            ),
            a.xb(
              25,
              671744,
              null,
              0,
              Gn.a,
              [jn.a, Jn.i, en.a, Q.a, Gn.b, Xn.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            a.xb(26, 16384, null, 0, R.a, [], null, null),
            a.Sb(131584, null, rn.a, rn.a, [[3, rn.a]]),
            a.xb(
              28,
              4407296,
              null,
              0,
              sn.a,
              [
                a.l,
                un.a,
                a.h,
                rn.a,
                [2, bn.a],
                [2, q.b],
                [2, q.a],
                [2, dn.a],
                [2, pn.a],
              ],
              null,
              null,
            ),
            a.xb(
              29,
              49152,
              null,
              0,
              hn.a,
              [[2, en.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            a.xb(
              30,
              147456,
              null,
              0,
              gn.a,
              [
                [2, Q.a],
                [2, en.a],
                [2, mn.a],
                [2, sn.a],
                [2, fn.b],
                a.l,
                xn.a,
                vn.b,
              ],
              null,
              null,
            ),
            a.xb(
              31,
              147456,
              null,
              0,
              yn.a,
              [[2, sn.a], [2, Q.a], [2, nn.b], Sn.a],
              null,
              null,
            ),
            (n()(),
            a.yb(
              32,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [
                ["class", "privacy-label"],
                ["id", "PrivacyModeActive"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Wn.b,
              Wn.a,
            )),
            a.xb(
              33,
              212992,
              null,
              0,
              B.a,
              [a.l, a.D, j.a, H.a, [3, B.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              34,
              245760,
              null,
              0,
              Un.a,
              [[6, B.a], qn.a, a.h, a.l, a.D, [2, Qn.a], [2, R.a], [2, ne.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (n, e) {
            var t = e.component;
            (n(e, 1, 0, "Screen:ADB_MAIN_PRIVACY"),
              n(e, 2, 0, "Screen:ADB_MAIN_PRIVACY"),
              n(e, 4, 0, ""),
              n(
                e,
                5,
                0,
                "PhoneName",
                a.Yb(e, 5, 1, a.Nb(e, 6).transform(t.phoneService.deviceName$)),
                "Hinweis",
              ),
              n(e, 9, 0, "BackButton"),
              n(e, 11, 0),
              n(e, 15, 0),
              n(e, 16, 0, !1, "E163_Backbutton.webp"),
              n(e, 22, 0, "SettingsButton"),
              n(e, 24, 0),
              n(e, 25, 0, t.AddressBookRoute.children.Settings, !0),
              n(e, 28, 0),
              n(e, 29, 0, !1, "E186_settings.webp"),
              n(e, 33, 0, "PrivacyModeActive"),
              n(
                e,
                34,
                0,
                "Das verbundene Mobiltelefon befindet sich im Privatmodus.\nDer Zugriff auf das Addressbuch ist gesperrt.",
                "PrivacyModeActive",
              ));
          },
          function (n, e) {
            (n(
              e,
              3,
              0,
              a.Nb(e, 5).hideLeftBorder,
              a.Nb(e, 5).hideDividingBorders,
            ),
              n(
                e,
                7,
                0,
                a.Nb(e, 15).markerClassEnabled,
                a.Nb(e, 16).useItemPlaceholder,
              ),
              n(
                e,
                19,
                0,
                a.Nb(e, 20).combinedDisabled,
                a.Nb(e, 20).useBrighterIcon,
                a.Nb(e, 28).markerClassEnabled,
                a.Nb(e, 29).useItemPlaceholder,
              ),
              n(
                e,
                32,
                0,
                a.Nb(e, 34).backgroundColor,
                a.Nb(e, 34).fixedNumberOfLines,
                a.Nb(e, 34).mayContainLatinCharsForArabic,
                a.Nb(e, 34).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function ae(n) {
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
              "au3-adb-privacy",
              [],
              null,
              null,
              null,
              te,
              ee,
            )),
            a.xb(1, 180224, null, 0, L, [s.c, jn.a, r.a, H.a], null, null),
          ],
          null,
          null,
        );
      }
      var le = a.ub("au3-adb-privacy", L, ae, {}, {}, []),
        ie = t("aDqW"),
        oe = t("/W5r"),
        ce = t("+Qv1"),
        re = t("XtoR"),
        se = t("jTHl"),
        ue = t("zL3T"),
        be = t("+epw"),
        de = t("zMPs"),
        pe = t("6Yk8"),
        he = t("u6+O"),
        ge = t("CIQC"),
        me = t("REmV"),
        fe = t("Y3N+"),
        xe = t("MJxn"),
        ve = t("eIOF"),
        ye = t("t+4g"),
        Se = t("myjn"),
        Ce = t("fOZ7"),
        Oe = t("TBks"),
        Me = t("yUFt"),
        Pe = a.vb($, [], function (n) {
          return a.Kb([
            a.Lb(512, a.j, a.X, [[8, [F.a, D.a, Kn, le]], [3, a.j], a.x]),
            a.Lb(4608, Nn.m, Nn.l, [a.u]),
            a.Lb(4608, ie.h, ie.g, []),
            a.Lb(4608, ie.d, ie.f, []),
            a.Lb(4608, ie.j, ie.e, []),
            a.Lb(4608, ie.c, ie.b, []),
            a.Lb(4608, ie.k, ie.k, [
              ie.l,
              ie.h,
              ie.d,
              ie.j,
              ie.c,
              ie.m,
              ie.o,
              ie.n,
              ie.a,
            ]),
            a.Lb(4608, oe.b, oe.b, [ce.e, [2, oe.a]]),
            a.Lb(4608, re.b, re.b, [ce.e, [2, re.a]]),
            a.Lb(4608, se.b, se.b, [ce.e, [2, se.a]]),
            a.Lb(4608, ue.b, ue.b, [ce.e, [2, ue.a]]),
            a.Lb(1073742336, Nn.c, Nn.c, []),
            a.Lb(1073742336, ie.i, ie.i, []),
            a.Lb(1073742336, be.a, be.a, []),
            a.Lb(1073742336, de.a, de.a, []),
            a.Lb(1073742336, pe.a, pe.a, []),
            a.Lb(1073742336, he.a, he.a, []),
            a.Lb(1073742336, ge.a, ge.a, []),
            a.Lb(1073742336, me.a, me.a, []),
            a.Lb(1073742336, fe.a, fe.a, []),
            a.Lb(1073742336, xe.a, xe.a, []),
            a.Lb(1073742336, ve.a, ve.a, []),
            a.Lb(1073742336, ye.a, ye.a, []),
            a.Lb(1073742336, Se.a, Se.a, []),
            a.Lb(1073742336, Ce.a, Ce.a, []),
            a.Lb(1073742336, Oe.a, Oe.a, []),
            a.Lb(1073742336, Me.a, Me.a, []),
            a.Lb(1073742336, Hn.n, Hn.n, [
              [2, Hn.s],
              [2, Hn.m],
            ]),
            a.Lb(1073742336, $, $, []),
            a.Lb(256, ie.o, void 0, []),
            a.Lb(256, ie.m, void 0, []),
            a.Lb(256, ie.n, void 0, []),
            a.Lb(256, ie.a, void 0, []),
            a.Lb(
              1024,
              Hn.k,
              function () {
                return [
                  [
                    {
                      path: "",
                      children: [
                        { path: "", pathMatch: "full", component: l.a },
                        { path: "contact/:id", component: I },
                        { path: "search", loadChildren: w },
                        { path: "addressbook-settings", loadChildren: k },
                        { path: "privacy", component: L },
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
