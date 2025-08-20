(window.webpackJsonp = window.webpackJsonp || []).push([
  [31],
  {
    Qkjl: function (t, l, n) {
      "use strict";
      n.d(l, "a", function () {
        return d;
      });
      var a = n("kZht"),
        e = n("XY/Y"),
        i = n("Yi6/"),
        o = n("qMQG"),
        u = (n("6xFL"), n("YzIb")),
        r = n("Ruoq"),
        s = (n("J7Kz"), n("8j5Y")),
        c = n("YtkY"),
        b = (function (t) {
          return (
            (t[(t.Number = 0)] = "Number"),
            (t[(t.FullAddress = 1)] = "FullAddress"),
            (t[(t.GeoAddress = 2)] = "GeoAddress"),
            (t[(t.Email = 3)] = "Email"),
            t
          );
        })({});
      class d {
        constructor(t, l, n, r) {
          ((this.addressbookService = t),
            (this.systemConfigService = l),
            (this.bluetoothService = n),
            (this.environment = i.gd),
            (this.PopupIdsAudi = i.Ob),
            (this.iconCategoryEnum = i.Z),
            (this.sdsListReferenceType = o.d.DIALOGSTEPELEMENT),
            (this.phoneNumberTypeEnum = e.c),
            (this.addressTypeEnum = u.b),
            (this.contactDataTypeEnum = b),
            (this.moreLockingParam = {
              lockingKey: { type: i.Eb.MORE_MENU, context: i.Bb.PHONE },
            }),
            (this.uiStateType = i.uc.ListHorizontal),
            (this.hasOptionsForMoreMenu = !0),
            (this.showPhoneticName = !1),
            (this.forSds = !1),
            (this.showFavoriteStar = !1),
            (this.isIPhone = !1),
            (this.isNaviAvailable = !1),
            (this.phoneNumberTapped = new a.n()),
            (this.smsTapped = new a.n()),
            (this.mailTapped = new a.n()),
            (this.addressTapped = new a.n()),
            (this.favoriteStateChange = new a.n()),
            (this.moreMenuTapped = new a.n()),
            (this.contactName = ""),
            (this.contactListData = []),
            (this.logger = r.getLogger(
              "addressbook.ContactCardViewComponent",
            )));
        }
        set contactElement(t) {
          (null != t &&
            ((this._contactElement = t),
            (this.contactDisplayElement = {
              name: t.name,
              referenceId: t.id,
              referenceType: o.d.CONTACT,
            })),
            this.updateContactName(),
            this.buildContactListData());
        }
        get contactElement() {
          return this._contactElement;
        }
        ngOnInit() {
          this.emailMessagingNotAllowed$ =
            this.bluetoothService.emailMessagingCoded$.pipe(
              Object(s.a)((t) =>
                this.logger.in.info(`init: emailMessagingCoded$ = ${t}`),
              ),
              Object(c.a)((t) => !t),
              Object(s.a)((t) =>
                this.logger.in.info(`init: emailMessagingNotAllowed$ = ${t}`),
              ),
            );
        }
        get contactPictureAvailable() {
          return (
            !!this.contactElement &&
            !!this.contactElement.contactPicture &&
            !this.isHongKongOrMacao
          );
        }
        moreThanStreetInfo(t) {
          return !(!t.street || (!t.zipCode && !t.city));
        }
        moreThanCityInfo(t) {
          return !(!t.city || (!t.street && !t.zipCode));
        }
        addressPartBuilder(t, l) {
          return l ? t + ", " : t;
        }
        contactAddress(t) {
          let l = "",
            n = "",
            a = "";
          return this.systemConfigService.isChinaRegion()
            ? ((a = t.city
                ? this.addressPartBuilder(t.city, this.moreThanCityInfo(t))
                : ""),
              (l = t.street ? t.street + " " : ""),
              (n = t.zipCode ? t.zipCode + " " : ""),
              a + l + n)
            : this.systemConfigService.isJapanRegion() ||
                this.systemConfigService.isKoreaRegion() ||
                this.systemConfigService.isTaiwanRegion()
              ? (t &&
                  t.street &&
                  (l = this.moreThanStreetInfo(t) ? ", " + t.street : t.street),
                (n = t.zipCode ? t.zipCode + " " : ""),
                (a = t.city ? t.city : ""),
                n + a + l)
              : ((l = t.street
                  ? this.addressPartBuilder(
                      t.street,
                      this.moreThanStreetInfo(t),
                    )
                  : ""),
                (n = t.zipCode ? t.zipCode + " " : ""),
                (a = t.city ? t.city + " " : ""),
                this.systemConfigService.isNorthAmericaRegion()
                  ? ((a = t.city ? t.city + ", " : ""),
                    l + a + (t.state ? t.state + " " : "") + n)
                  : l + n + a);
        }
        contactAddressType(t) {
          switch (t) {
            case e.a.BUSINESS:
              return u.b.BUSINESS;
            case e.a.PRIVATE:
              return u.b.PRIVATE;
            default:
            case e.a.UNKNOWN:
              return u.b.UNKNOWN;
          }
        }
        updateContactName() {
          if (this.contactElement)
            if (
              this.showPhoneticName &&
              (this.contactElement.phoneticFirstName ||
                this.contactElement.phoneticLastName)
            ) {
              const t =
                  this.contactElement.sortOrder ||
                  this.addressbookService.getSortOrder(),
                l = t === e.g.LASTNAMECOMMAFIRSTNAME ? ", " : " ";
              this.contactName =
                this.contactElement.name +
                " " +
                (t === e.g.FIRSTNAMELASTNAME
                  ? [
                      this.contactElement.phoneticFirstName,
                      this.contactElement.phoneticLastName,
                    ]
                  : [
                      this.contactElement.phoneticLastName,
                      this.contactElement.phoneticFirstName,
                    ]
                )
                  .filter(i.wd)
                  .join(l);
            } else this.contactName = this.contactElement.name;
          else this.contactName = "";
        }
        buildContactListData() {
          this.contactListData =
            null == this.contactElement
              ? []
              : [
                  ...(this.contactElement.phoneNumberList || []).map((t, l) =>
                    Object.assign(Object.assign({}, t), {
                      kind: b.Number,
                      index: l,
                    }),
                  ),
                  ...(this.contactElement.addressList || [])
                    .filter((t) => t.street || t.zipCode || t.city)
                    .map((t, l) =>
                      Object.assign(Object.assign({}, t), {
                        index: l,
                        kind: b.FullAddress,
                      }),
                    ),
                  ...(this.contactElement.addressList || [])
                    .filter((t) => !t.street && !t.zipCode && !t.city && t.geo)
                    .map((t, l) =>
                      Object.assign(Object.assign({}, t), {
                        index: l,
                        kind: b.GeoAddress,
                      }),
                    ),
                  ...(this.contactElement.emailList || []).map((t, l) =>
                    Object.assign(Object.assign({}, t), {
                      index: l,
                      kind: b.Email,
                    }),
                  ),
                ];
        }
        selectNumber(t) {
          this.phoneNumberTapped.emit({
            contactElement: this.contactElement,
            phoneNumber: t,
          });
        }
        selectAddress(t) {
          this.addressTapped.emit({
            contactElement: this.contactElement,
            address: t,
          });
        }
        selectEmailAddress(t) {
          this.mailTapped.emit({
            contactElement: this.contactElement,
            address: t,
          });
        }
        selectNumberForSms(t) {
          this.smsTapped.emit({
            contactElement: this.contactElement,
            phoneNumber: t,
          });
        }
        favoriteIconTapped(t) {
          this.favoriteStateChange.emit({
            contactElement: this.contactElement,
            phoneNumber: t,
          });
        }
        formatGeoAddress(t) {
          if (t.geoLatitude && t.geoLongitude) {
            const l = {
                latitudeDegree: t.geoLatitude,
                longitudeDegree: t.geoLongitude,
              },
              n = Object(r.b)(l);
            return n.latitudeDMS + " " + n.longitudeDMS;
          }
          return t.geo ? t.geo : "";
        }
      }
    },
    ovwC: function (t, l, n) {
      "use strict";
      (n.d(l, "a", function () {
        return dt;
      }),
        n.d(l, "b", function () {
          return Tt;
        }));
      var a = n("kZht"),
        e = n("HVUF"),
        i = n("fu7d"),
        o = n("bou3"),
        u = n("yNay"),
        r = n("B3Zb"),
        s = n("DElP"),
        c = n("oeT7"),
        b = n("8TlW"),
        d = n("ijxY"),
        m = n("Xo58"),
        h = n("m3Ja"),
        p = n("r+e+"),
        f = n("bmFL"),
        g = n("U6SP"),
        y = n("bMuc"),
        x = n("ZIdM"),
        _ = n("3bpu"),
        C = n("OtM5"),
        N = n("9ZFG"),
        v = n("6zvu"),
        S = n("VcEz"),
        P = n("y9xZ"),
        O = n("+sw+"),
        E = n("BMrr"),
        M = n("IEns"),
        L = n("z6QT"),
        T = n("flsk"),
        A = n("FQEI"),
        D = n("O82V"),
        I = n("Eln4"),
        z = n("evAh"),
        w = n("1ZTq"),
        k = n("E7cc"),
        B = n("CpzC"),
        R = n("0Bsn"),
        F = n("5GjX"),
        H = n("mYyF"),
        V = n("v98a"),
        $ = n("aOG8"),
        U = n("Krzs"),
        G = n("An66"),
        j = n("Ps6X"),
        Y = n("XK+j"),
        K = n("0qMr"),
        Z = n("4IFD"),
        W = n("SueR"),
        J = n("N2Hj"),
        X = n("UbWD"),
        Q = n("2rvh"),
        q = n("odRV"),
        tt = n("Udyh"),
        lt = n("I3ve"),
        nt = n("qiAR"),
        at = n("007S"),
        et = n("oxWk"),
        it = n("Tr//"),
        ot = n("JDb9"),
        ut = n("4ZeQ"),
        rt = n("tZxQ"),
        st = n("hHAo"),
        ct = n("VWff"),
        bt = n("1qmX"),
        dt =
          (n("Qkjl"),
          n("6xFL"),
          n("J7Kz"),
          a.wb({
            encapsulation: 0,
            styles: [
              [
                '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{width:100%;height:100%;flex-direction:column;align-items:stretch}.contact-data[_ngcontent-%COMP%], [_nghost-%COMP%]{position:relative;display:flex}.contact-data[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);flex-direction:row;align-items:center;min-height:120px}.contact-data__information[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;padding:12px 30px 16px;flex:1;min-width:0}.contact-data__profile-picture[_ngcontent-%COMP%]{min-width:100px;min-height:100px;width:100px;height:100px}.contact-data__text--primary[_ngcontent-%COMP%]{font-size:40px}.contact-data__text--secondary[_ngcontent-%COMP%]{font-size:30px}.contact-data__icons[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.contact-data__icon[_ngcontent-%COMP%]{min-width:119px;min-height:119px}.strip[_ngcontent-%COMP%]{position:relative;width:100%;height:3px;background-image:linear-gradient(90deg,var(--current-context-alpha),var(--current-context) 20%,var(--current-context) 50%,var(--current-context-alpha))}.contact-information__item[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;position:relative}.item__information[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;padding:16px 30px 16px 125px;flex:1;min-width:0}.item__text--primary[_ngcontent-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:40px}.item__text--secondary[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:30px}.item__icons[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse;align-items:center;min-width:238px}.item__icon[_ngcontent-%COMP%]{min-width:119px;min-height:119px}.component-layout-arabic[_nghost-%COMP%]   .contact-data[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .contact-data[_ngcontent-%COMP%]{flex-direction:row-reverse}.component-layout-arabic[_nghost-%COMP%]   .contact-data__information[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .contact-data__information[_ngcontent-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .contact-information__item[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .contact-information__item[_ngcontent-%COMP%]{flex-direction:row-reverse}.component-layout-arabic[_nghost-%COMP%]   .item__information[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .item__information[_ngcontent-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .item__icons[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .item__icons[_ngcontent-%COMP%]{flex-direction:row}',
              ],
            ],
            data: {},
          }));
      function mt(t) {
        return a.ac(
          0,
          [
            (t()(),
            a.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-icon",
              [
                ["au3ImageLockingCategory", ""],
                ["class", "contact-data__profile-picture"],
                ["id", "ContactImage"],
              ],
              [
                [2, "icon-component--hidden", null],
                [2, "lock-state-hidden", null],
                [2, "lock-state-faded", null],
              ],
              null,
              null,
              e.b,
              e.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              i.a,
              [a.l, a.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              4243456,
              null,
              0,
              r.b,
              [u.a, a.z],
              { fileName: [0, "fileName"] },
              null,
            ),
            a.Rb(3, 1),
            a.xb(4, 212992, null, 0, s.a, [c.i, [2, c.a], a.h], null, null),
          ],
          function (t, l) {
            var n = l.component;
            t(l, 1, 0, "ContactImage");
            var e = a.Yb(
              l,
              2,
              0,
              t(
                l,
                3,
                0,
                a.Nb(l.parent.parent, 0),
                null == n.contactElement
                  ? null
                  : n.contactElement.contactPicture,
              ),
            );
            (t(l, 2, 0, e), t(l, 4, 0));
          },
          function (t, l) {
            t(
              l,
              0,
              0,
              a.Nb(l, 2).iconComponentHidden,
              a.Nb(l, 4).hide,
              a.Nb(l, 4).fade,
            );
          },
        );
      }
      function ht(t) {
        return a.ac(
          0,
          [
            (t()(),
            a.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-icon",
              [
                ["au3ImageLockingCategory", ""],
                ["class", "contact-data__profile-picture"],
                ["fileName", "E0AB_phone_generic_contactimage.webp"],
                ["id", "GenericContactImage"],
              ],
              [
                [2, "icon-component--hidden", null],
                [2, "lock-state-hidden", null],
                [2, "lock-state-faded", null],
              ],
              null,
              null,
              e.b,
              e.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              i.a,
              [a.l, a.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              4243456,
              null,
              0,
              r.b,
              [u.a, a.z],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                iconContext: [2, "iconContext"],
              },
              null,
            ),
            a.xb(3, 212992, null, 0, s.a, [c.i, [2, c.a], a.h], null, null),
          ],
          function (t, l) {
            var n = l.component;
            (t(l, 1, 0, "GenericContactImage"),
              t(
                l,
                2,
                0,
                "E0AB_phone_generic_contactimage.webp",
                n.iconCategoryEnum.ListTwoline,
                !n.environment.isLamborghini,
              ),
              t(l, 3, 0));
          },
          function (t, l) {
            t(
              l,
              0,
              0,
              a.Nb(l, 2).iconComponentHidden,
              a.Nb(l, 3).hide,
              a.Nb(l, 3).fade,
            );
          },
        );
      }
      function pt(t) {
        return a.ac(
          0,
          [
            (t()(),
            a.yb(
              0,
              0,
              null,
              null,
              4,
              "div",
              [["class", "contact-data__text contact-data__text--secondary"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            a.yb(
              1,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["id", "ContactCompany"],
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
              b.b,
              b.a,
            )),
            a.xb(
              2,
              212992,
              null,
              0,
              i.a,
              [a.l, a.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(3, 16384, null, 0, d.a, [], null, null),
            a.xb(
              4,
              245760,
              null,
              0,
              m.a,
              [[6, i.a], h.a, a.h, a.l, a.D, [2, p.a], [2, d.a], [2, f.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (t, l) {
            var n = l.component;
            (t(l, 2, 0, "ContactCompany"),
              t(
                l,
                4,
                0,
                "ContactCompany",
                null == n.contactElement ? null : n.contactElement.company,
              ));
          },
          function (t, l) {
            t(
              l,
              1,
              0,
              a.Nb(l, 4).backgroundColor,
              a.Nb(l, 4).fixedNumberOfLines,
              a.Nb(l, 4).mayContainLatinCharsForArabic,
              a.Nb(l, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function ft(t) {
        return a.ac(
          0,
          [
            (t()(),
            a.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-button",
              [
                ["class", "contact-data__icons"],
                ["id", "MoreButton"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "button--activated", null],
                [2, "button--horizontal", null],
                [2, "button--with-border", null],
                [2, "button--with-thick-border", null],
              ],
              [[null, "mib3Tap"]],
              function (t, l, n) {
                var a = !0,
                  e = t.component;
                return (
                  "mib3Tap" === l &&
                    (a = !1 !== e.moreMenuTapped.emit(e.contactElement) && a),
                  a
                );
              },
              g.b,
              g.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              i.a,
              [a.l, a.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 147456, null, 0, y.a, [a.l, a.z], null, null),
            a.xb(
              3,
              147456,
              null,
              0,
              x.a,
              [y.a, [2, _.a], [2, i.a], u.a],
              null,
              null,
            ),
            a.xb(
              4,
              147456,
              null,
              0,
              C.a,
              [N.a, a.h, u.a, [3, C.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            a.xb(
              5,
              212992,
              null,
              0,
              v.a,
              [
                u.a,
                S.b,
                x.a,
                [2, _.a],
                [2, i.a],
                [2, C.a],
                [2, P.a],
                [2, O.a],
                a.z,
                E.a,
                a.l,
                [2, M.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.Sb(131584, null, L.a, L.a, [[3, L.a]]),
            a.xb(
              7,
              4407296,
              null,
              0,
              T.a,
              [
                a.l,
                A.a,
                a.h,
                L.a,
                [2, D.a],
                [2, _.b],
                [2, _.a],
                [2, I.a],
                [2, z.a],
              ],
              null,
              null,
            ),
            a.xb(
              8,
              49152,
              null,
              0,
              w.b,
              [],
              {
                hasText: [0, "hasText"],
                icon: [1, "icon"],
                iconCategory: [2, "iconCategory"],
              },
              null,
            ),
            a.xb(
              9,
              671744,
              null,
              0,
              k.a,
              [C.a, c.i, [2, c.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            a.xb(
              10,
              147456,
              null,
              0,
              B.a,
              [[2, v.a], [2, C.a], [2, R.a], [2, T.a], [2, F.b], a.l, H.a, V.b],
              null,
              null,
            ),
            a.xb(
              11,
              147456,
              null,
              0,
              $.a,
              [[2, T.a], [2, v.a], [2, S.b], U.a],
              null,
              null,
            ),
          ],
          function (t, l) {
            var n = l.component;
            (t(l, 1, 0, "MoreButton"),
              t(l, 4, 0, !n.hasOptionsForMoreMenu),
              t(l, 5, 0),
              t(l, 7, 0),
              t(
                l,
                8,
                0,
                !1,
                "E9BF_options_more.webp",
                n.iconCategoryEnum.Touch,
              ),
              t(l, 9, 0, n.moreLockingParam));
          },
          function (t, l) {
            t(
              l,
              0,
              0,
              a.Nb(l, 4).combinedDisabled,
              a.Nb(l, 4).useBrighterIcon,
              a.Nb(l, 7).markerClassEnabled,
              a.Nb(l, 8).activated,
              a.Nb(l, 8).layoutHorizontal,
              a.Nb(l, 8).thinBorder,
              a.Nb(l, 8).thickBorder,
            );
          },
        );
      }
      function gt(t) {
        return a.ac(
          0,
          [
            (t()(),
            a.yb(
              0,
              0,
              null,
              null,
              13,
              "div",
              [["class", "contact-data"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), a.hb(16777216, null, null, 1, null, mt)),
            a.xb(
              2,
              16384,
              null,
              0,
              G.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), a.hb(0, [["noPicture", 2]], null, 0, null, ht)),
            (t()(),
            a.yb(
              4,
              0,
              null,
              null,
              7,
              "div",
              [["class", "contact-data__information"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            a.yb(
              5,
              0,
              null,
              null,
              4,
              "div",
              [["class", "contact-data__text contact-data__text--primary"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            a.yb(
              6,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["id", "ContactName"],
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
              b.b,
              b.a,
            )),
            a.xb(
              7,
              212992,
              null,
              0,
              i.a,
              [a.l, a.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(8, 16384, null, 0, d.a, [], null, null),
            a.xb(
              9,
              245760,
              null,
              0,
              m.a,
              [[6, i.a], h.a, a.h, a.l, a.D, [2, p.a], [2, d.a], [2, f.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            (t()(), a.hb(16777216, null, null, 1, null, pt)),
            a.xb(
              11,
              16384,
              null,
              0,
              G.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), a.hb(16777216, null, null, 1, null, ft)),
            a.xb(
              13,
              16384,
              null,
              0,
              G.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, l) {
            var n = l.component;
            (t(l, 2, 0, n.contactPictureAvailable, a.Nb(l, 3)),
              t(l, 7, 0, "ContactName"),
              t(l, 9, 0, "ContactName", n.contactName),
              t(
                l,
                11,
                0,
                null == n.contactElement ? null : n.contactElement.company,
              ),
              t(l, 13, 0, !n.forSds));
          },
          function (t, l) {
            t(
              l,
              6,
              0,
              a.Nb(l, 9).backgroundColor,
              a.Nb(l, 9).fixedNumberOfLines,
              a.Nb(l, 9).mayContainLatinCharsForArabic,
              a.Nb(l, 9).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function yt(t) {
        return a.ac(
          0,
          [
            (t()(),
            a.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-icon",
              [
                ["class", "item__icon"],
                ["fileName", "E2A7_messaging_write_new_sms.webp"],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "icon-component--hidden", null],
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
              function (t, l, n) {
                var a = !0;
                return (
                  "mib3Tap" === l &&
                    (a =
                      !1 !==
                        t.component.selectNumberForSms(
                          t.parent.parent.parent.context.$implicit,
                        ) && a),
                  a
                );
              },
              e.b,
              e.a,
            )),
            a.xb(1, 147456, null, 0, y.a, [a.l, a.z], null, null),
            a.xb(
              2,
              147456,
              null,
              0,
              x.a,
              [y.a, [2, _.a], [2, i.a], u.a],
              null,
              null,
            ),
            a.xb(
              3,
              212992,
              null,
              0,
              v.a,
              [
                u.a,
                S.b,
                x.a,
                [2, _.a],
                [2, i.a],
                [2, C.a],
                [2, P.a],
                [2, O.a],
                a.z,
                E.a,
                a.l,
                [2, M.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.Sb(131584, null, L.a, L.a, [[3, L.a]]),
            a.xb(
              5,
              4407296,
              null,
              0,
              T.a,
              [
                a.l,
                A.a,
                a.h,
                L.a,
                [2, D.a],
                [2, _.b],
                [2, _.a],
                [2, I.a],
                [2, z.a],
              ],
              null,
              null,
            ),
            a.xb(
              6,
              4243456,
              null,
              0,
              r.b,
              [u.a, a.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            a.xb(
              7,
              212992,
              null,
              0,
              j.a,
              [[2, v.a], [8, null], [3, j.a], a.l, a.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            a.xb(
              8,
              147456,
              null,
              0,
              B.a,
              [[2, v.a], [2, C.a], [2, R.a], [2, T.a], [2, F.b], a.l, H.a, V.b],
              null,
              null,
            ),
            a.xb(
              9,
              147456,
              null,
              0,
              $.a,
              [[2, T.a], [2, v.a], [2, S.b], U.a],
              null,
              null,
            ),
          ],
          function (t, l) {
            var n = l.component;
            (t(l, 3, 0),
              t(l, 5, 0),
              t(
                l,
                6,
                0,
                "E2A7_messaging_write_new_sms.webp",
                n.iconCategoryEnum.Touch,
              ),
              t(l, 7, 0, n.uiStateType));
          },
          function (t, l) {
            t(l, 0, 1, [
              a.Nb(l, 5).markerClassEnabled,
              a.Nb(l, 6).iconComponentHidden,
              a.Nb(l, 7).uiStateListHorizontal,
              a.Nb(l, 7).uiStateListVertical,
              a.Nb(l, 7).uiStateCoverLeft,
              a.Nb(l, 7).uiStateCoverRight,
              a.Nb(l, 7).uiStateCoverBottom,
              a.Nb(l, 7).uiStateButton,
              a.Nb(l, 7).uiStateByDabLeft,
              a.Nb(l, 7).uiStateByDabRight,
              a.Nb(l, 7).uiStateLbDabLeft,
              a.Nb(l, 7).uiStateLbDabRight,
            ]);
          },
        );
      }
      function xt(t) {
        return a.ac(
          0,
          [
            (t()(),
            a.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-icon",
              [["class", "item__icon"]],
              [
                [2, "mib3-haptic", null],
                [2, "icon-component--hidden", null],
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
              function (t, l, n) {
                var a = !0;
                return (
                  "mib3Tap" === l &&
                    (a =
                      !1 !==
                        t.component.favoriteIconTapped(
                          t.parent.parent.parent.context.$implicit,
                        ) && a),
                  a
                );
              },
              e.b,
              e.a,
            )),
            a.xb(1, 147456, null, 0, y.a, [a.l, a.z], null, null),
            a.xb(
              2,
              147456,
              null,
              0,
              x.a,
              [y.a, [2, _.a], [2, i.a], u.a],
              null,
              null,
            ),
            a.xb(
              3,
              212992,
              null,
              0,
              v.a,
              [
                u.a,
                S.b,
                x.a,
                [2, _.a],
                [2, i.a],
                [2, C.a],
                [2, P.a],
                [2, O.a],
                a.z,
                E.a,
                a.l,
                [2, M.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.Sb(131584, null, L.a, L.a, [[3, L.a]]),
            a.xb(
              5,
              4407296,
              null,
              0,
              T.a,
              [
                a.l,
                A.a,
                a.h,
                L.a,
                [2, D.a],
                [2, _.b],
                [2, _.a],
                [2, I.a],
                [2, z.a],
              ],
              null,
              null,
            ),
            a.xb(
              6,
              4243456,
              null,
              0,
              r.b,
              [u.a, a.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            a.xb(
              7,
              212992,
              null,
              0,
              j.a,
              [[2, v.a], [8, null], [3, j.a], a.l, a.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            a.xb(
              8,
              147456,
              null,
              0,
              B.a,
              [[2, v.a], [2, C.a], [2, R.a], [2, T.a], [2, F.b], a.l, H.a, V.b],
              null,
              null,
            ),
            a.xb(
              9,
              147456,
              null,
              0,
              $.a,
              [[2, T.a], [2, v.a], [2, S.b], U.a],
              null,
              null,
            ),
          ],
          function (t, l) {
            var n = l.component;
            (t(l, 3, 0),
              t(l, 5, 0),
              t(
                l,
                6,
                0,
                l.parent.parent.parent.context.$implicit.isFavorite
                  ? "E16E_addressbook_save_as_favorite_enabled.webp"
                  : "E16E_addressbook_save_as_favorite.webp",
                n.iconCategoryEnum.Touch,
              ),
              t(l, 7, 0, n.uiStateType));
          },
          function (t, l) {
            t(l, 0, 1, [
              a.Nb(l, 5).markerClassEnabled,
              a.Nb(l, 6).iconComponentHidden,
              a.Nb(l, 7).uiStateListHorizontal,
              a.Nb(l, 7).uiStateListVertical,
              a.Nb(l, 7).uiStateCoverLeft,
              a.Nb(l, 7).uiStateCoverRight,
              a.Nb(l, 7).uiStateCoverBottom,
              a.Nb(l, 7).uiStateButton,
              a.Nb(l, 7).uiStateByDabLeft,
              a.Nb(l, 7).uiStateByDabRight,
              a.Nb(l, 7).uiStateLbDabLeft,
              a.Nb(l, 7).uiStateLbDabRight,
            ]);
          },
        );
      }
      function _t(t) {
        return a.ac(
          0,
          [
            (t()(),
            a.yb(
              0,
              0,
              null,
              null,
              4,
              "div",
              [["class", "item__icons"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), a.hb(16777216, [[2, 2]], null, 1, null, yt)),
            a.xb(
              2,
              16384,
              null,
              0,
              G.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), a.hb(16777216, [[2, 2]], null, 1, null, xt)),
            a.xb(
              4,
              16384,
              null,
              0,
              G.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, l) {
            var n = l.component;
            (t(l, 2, 0, !n.isIPhone), t(l, 4, 0, n.showFavoriteStar));
          },
          null,
        );
      }
      function Ct(t) {
        return a.ac(
          0,
          [
            (t()(),
            a.yb(
              0,
              0,
              null,
              null,
              22,
              "div",
              [["class", "contact-information__item"]],
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
              [[null, "mib3FocusPress"]],
              function (t, l, n) {
                var a = !0;
                return (
                  "mib3FocusPress" === l &&
                    (a =
                      !1 !==
                        t.component.selectNumber(t.parent.context.$implicit) &&
                      a),
                  a
                );
              },
              null,
              null,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              j.a,
              [[2, v.a], [8, null], [3, j.a], a.l, a.h],
              {
                au3UiState: [0, "au3UiState"],
                focusCursorUiStateOnly: [1, "focusCursorUiStateOnly"],
              },
              null,
            ),
            (t()(),
            a.yb(
              2,
              0,
              null,
              null,
              18,
              "div",
              [["class", "item__information"]],
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
              function (t, l, n) {
                var a = !0;
                return (
                  "mib3Tap" === l &&
                    (a =
                      !1 !==
                        t.component.selectNumber(t.parent.context.$implicit) &&
                      a),
                  a
                );
              },
              null,
              null,
            )),
            a.xb(3, 147456, null, 0, y.a, [a.l, a.z], null, null),
            a.xb(
              4,
              147456,
              null,
              0,
              x.a,
              [y.a, [2, _.a], [2, i.a], u.a],
              null,
              null,
            ),
            a.xb(
              5,
              212992,
              null,
              0,
              v.a,
              [
                u.a,
                S.b,
                x.a,
                [2, _.a],
                [2, i.a],
                [2, C.a],
                [2, P.a],
                [2, O.a],
                a.z,
                E.a,
                a.l,
                [2, M.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.Sb(131584, null, L.a, L.a, [[3, L.a]]),
            a.xb(
              7,
              4407296,
              null,
              0,
              T.a,
              [
                a.l,
                A.a,
                a.h,
                L.a,
                [2, D.a],
                [2, _.b],
                [2, _.a],
                [2, I.a],
                [2, z.a],
              ],
              null,
              null,
            ),
            a.xb(
              8,
              212992,
              null,
              0,
              j.a,
              [[2, v.a], [8, null], [3, j.a], a.l, a.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            a.xb(
              9,
              147456,
              null,
              0,
              B.a,
              [[2, v.a], [2, C.a], [2, R.a], [2, T.a], [2, F.b], a.l, H.a, V.b],
              null,
              null,
            ),
            a.xb(
              10,
              147456,
              null,
              0,
              $.a,
              [[2, T.a], [2, v.a], [2, S.b], U.a],
              null,
              null,
            ),
            (t()(),
            a.yb(
              11,
              0,
              null,
              null,
              4,
              "div",
              [["class", "item__text item__text--secondary"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            a.yb(
              12,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              b.b,
              b.a,
            )),
            a.xb(
              13,
              212992,
              null,
              0,
              i.a,
              [a.l, a.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            a.xb(
              14,
              245760,
              null,
              0,
              m.a,
              [[6, i.a], h.a, a.h, a.l, a.D, [2, p.a], [2, d.a], [2, f.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            a.Rb(15, 1),
            (t()(),
            a.yb(
              16,
              0,
              null,
              null,
              4,
              "div",
              [["class", "item__text item__text--primary"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            a.yb(
              17,
              0,
              null,
              null,
              3,
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
              b.b,
              b.a,
            )),
            a.xb(18, 16384, null, 0, d.a, [], null, null),
            a.xb(
              19,
              245760,
              null,
              0,
              m.a,
              [[8, null], h.a, a.h, a.l, a.D, [2, p.a], [2, d.a], [2, f.a]],
              { nonI18nValue: [0, "nonI18nValue"] },
              null,
            ),
            a.xb(
              20,
              16384,
              null,
              0,
              Y.a,
              [a.l, a.D],
              { testId: [0, "testId"] },
              null,
            ),
            (t()(), a.hb(16777216, [[2, 2]], null, 1, null, _t)),
            a.xb(
              22,
              16384,
              null,
              0,
              G.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, l) {
            var n = l.component;
            (t(l, 1, 0, n.uiStateType, !0),
              t(l, 5, 0),
              t(l, 7, 0),
              t(l, 8, 0, n.uiStateType),
              t(
                l,
                13,
                0,
                l.parent.context.$implicit.type,
                n.phoneNumberTypeEnum,
              ));
            var e = a.Yb(
              l,
              14,
              0,
              t(
                l,
                15,
                0,
                a.Nb(l.parent.parent, 1),
                l.parent.context.$implicit.type,
              ),
            );
            (t(l, 14, 0, e, l.parent.context.$implicit.type, 1),
              t(l, 19, 0, l.parent.context.$implicit.number),
              t(l, 20, 0, l.parent.context.$implicit.type),
              t(l, 22, 0, !n.forSds));
          },
          function (t, l) {
            (t(
              l,
              0,
              0,
              a.Nb(l, 1).uiStateListHorizontal,
              a.Nb(l, 1).uiStateListVertical,
              a.Nb(l, 1).uiStateCoverLeft,
              a.Nb(l, 1).uiStateCoverRight,
              a.Nb(l, 1).uiStateCoverBottom,
              a.Nb(l, 1).uiStateButton,
              a.Nb(l, 1).uiStateByDabLeft,
              a.Nb(l, 1).uiStateByDabRight,
              a.Nb(l, 1).uiStateLbDabLeft,
              a.Nb(l, 1).uiStateLbDabRight,
            ),
              t(l, 2, 1, [
                a.Nb(l, 7).markerClassEnabled,
                a.Nb(l, 8).uiStateListHorizontal,
                a.Nb(l, 8).uiStateListVertical,
                a.Nb(l, 8).uiStateCoverLeft,
                a.Nb(l, 8).uiStateCoverRight,
                a.Nb(l, 8).uiStateCoverBottom,
                a.Nb(l, 8).uiStateButton,
                a.Nb(l, 8).uiStateByDabLeft,
                a.Nb(l, 8).uiStateByDabRight,
                a.Nb(l, 8).uiStateLbDabLeft,
                a.Nb(l, 8).uiStateLbDabRight,
              ]),
              t(
                l,
                12,
                0,
                a.Nb(l, 14).backgroundColor,
                a.Nb(l, 14).fixedNumberOfLines,
                a.Nb(l, 14).mayContainLatinCharsForArabic,
                a.Nb(l, 14).shortenWithEllipsisForArabic,
              ),
              t(
                l,
                17,
                0,
                a.Nb(l, 19).backgroundColor,
                a.Nb(l, 19).fixedNumberOfLines,
                a.Nb(l, 19).mayContainLatinCharsForArabic,
                a.Nb(l, 19).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function Nt(t) {
        return a.ac(
          0,
          [
            (t()(),
            a.yb(
              0,
              0,
              null,
              null,
              20,
              "div",
              [
                ["class", "contact-information__item"],
                ["id", "contactInfo"],
              ],
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
              function (t, l, n) {
                var a = !0;
                return (
                  "mib3Tap" === l &&
                    (a =
                      !1 !==
                        t.component.selectAddress(t.parent.context.$implicit) &&
                      a),
                  a
                );
              },
              null,
              null,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              i.a,
              [a.l, a.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 147456, null, 0, y.a, [a.l, a.z], null, null),
            a.xb(
              3,
              147456,
              null,
              0,
              x.a,
              [y.a, [2, _.a], [2, i.a], u.a],
              null,
              null,
            ),
            a.xb(
              4,
              147456,
              null,
              0,
              C.a,
              [N.a, a.h, u.a, [3, C.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            a.xb(
              5,
              212992,
              null,
              0,
              v.a,
              [
                u.a,
                S.b,
                x.a,
                [2, _.a],
                [2, i.a],
                [2, C.a],
                [2, P.a],
                [2, O.a],
                a.z,
                E.a,
                a.l,
                [2, M.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.Sb(131584, null, L.a, L.a, [[3, L.a]]),
            a.xb(
              7,
              4407296,
              null,
              0,
              T.a,
              [
                a.l,
                A.a,
                a.h,
                L.a,
                [2, D.a],
                [2, _.b],
                [2, _.a],
                [2, I.a],
                [2, z.a],
              ],
              null,
              null,
            ),
            a.xb(
              8,
              212992,
              null,
              0,
              j.a,
              [[2, v.a], [8, null], [3, j.a], a.l, a.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            a.xb(
              9,
              147456,
              null,
              0,
              B.a,
              [[2, v.a], [2, C.a], [2, R.a], [2, T.a], [2, F.b], a.l, H.a, V.b],
              null,
              null,
            ),
            a.xb(
              10,
              147456,
              null,
              0,
              $.a,
              [[2, T.a], [2, v.a], [2, S.b], U.a],
              null,
              null,
            ),
            (t()(),
            a.yb(
              11,
              0,
              null,
              null,
              9,
              "div",
              [["class", "item__information"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            a.yb(
              12,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [["class", "item__text item__text--secondary"]],
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
              b.b,
              b.a,
            )),
            a.xb(
              13,
              212992,
              null,
              0,
              i.a,
              [a.l, a.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            a.xb(
              14,
              245760,
              null,
              0,
              m.a,
              [[6, i.a], h.a, a.h, a.l, a.D, [2, p.a], [2, d.a], [2, f.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            a.xb(
              15,
              147456,
              null,
              0,
              C.a,
              [N.a, a.h, u.a, [3, C.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            (t()(),
            a.yb(
              16,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["class", "item__text item__text--primary"],
                ["id", "AddressCity"],
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
              b.b,
              b.a,
            )),
            a.xb(
              17,
              212992,
              null,
              0,
              i.a,
              [a.l, a.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(18, 16384, null, 0, d.a, [], null, null),
            a.xb(
              19,
              245760,
              null,
              0,
              m.a,
              [[6, i.a], h.a, a.h, a.l, a.D, [2, p.a], [2, d.a], [2, f.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            a.xb(
              20,
              147456,
              null,
              0,
              C.a,
              [N.a, a.h, u.a, [3, C.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
          ],
          function (t, l) {
            var n = l.component;
            (t(l, 1, 0, "contactInfo"),
              t(l, 4, 0, !n.isNaviAvailable),
              t(l, 5, 0),
              t(l, 7, 0),
              t(l, 8, 0, n.uiStateType),
              t(
                l,
                13,
                0,
                null == l.parent.context.$implicit
                  ? null
                  : l.parent.context.$implicit.type,
                n.addressTypeEnum,
              ),
              t(
                l,
                14,
                0,
                n.contactAddressType(l.parent.context.$implicit.type),
                null == l.parent.context.$implicit
                  ? null
                  : l.parent.context.$implicit.type,
                1,
              ),
              t(l, 15, 0, !n.isNaviAvailable),
              t(l, 17, 0, "AddressCity"),
              t(
                l,
                19,
                0,
                "AddressCity",
                n.contactAddress(l.parent.context.$implicit),
              ),
              t(l, 20, 0, !n.isNaviAvailable));
          },
          function (t, l) {
            (t(l, 0, 1, [
              a.Nb(l, 4).combinedDisabled,
              a.Nb(l, 4).useBrighterIcon,
              a.Nb(l, 7).markerClassEnabled,
              a.Nb(l, 8).uiStateListHorizontal,
              a.Nb(l, 8).uiStateListVertical,
              a.Nb(l, 8).uiStateCoverLeft,
              a.Nb(l, 8).uiStateCoverRight,
              a.Nb(l, 8).uiStateCoverBottom,
              a.Nb(l, 8).uiStateButton,
              a.Nb(l, 8).uiStateByDabLeft,
              a.Nb(l, 8).uiStateByDabRight,
              a.Nb(l, 8).uiStateLbDabLeft,
              a.Nb(l, 8).uiStateLbDabRight,
            ]),
              t(
                l,
                12,
                0,
                a.Nb(l, 14).backgroundColor,
                a.Nb(l, 14).fixedNumberOfLines,
                a.Nb(l, 14).mayContainLatinCharsForArabic,
                a.Nb(l, 14).shortenWithEllipsisForArabic,
                a.Nb(l, 15).combinedDisabled,
                a.Nb(l, 15).useBrighterIcon,
              ),
              t(
                l,
                16,
                0,
                a.Nb(l, 19).backgroundColor,
                a.Nb(l, 19).fixedNumberOfLines,
                a.Nb(l, 19).mayContainLatinCharsForArabic,
                a.Nb(l, 19).shortenWithEllipsisForArabic,
                a.Nb(l, 20).combinedDisabled,
                a.Nb(l, 20).useBrighterIcon,
              ));
          },
        );
      }
      function vt(t) {
        return a.ac(
          0,
          [
            (t()(),
            a.yb(
              0,
              0,
              null,
              null,
              6,
              "div",
              [["class", "contact-information__item"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            a.yb(
              1,
              0,
              null,
              null,
              5,
              "div",
              [["class", "item__information"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            a.yb(
              2,
              0,
              null,
              null,
              4,
              "div",
              [["class", "item__text item__text--primary"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            a.yb(
              3,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["id", "AddressGeo"],
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
              b.b,
              b.a,
            )),
            a.xb(
              4,
              212992,
              null,
              0,
              i.a,
              [a.l, a.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(5, 16384, null, 0, d.a, [], null, null),
            a.xb(
              6,
              245760,
              null,
              0,
              m.a,
              [[6, i.a], h.a, a.h, a.l, a.D, [2, p.a], [2, d.a], [2, f.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (t, l) {
            var n = l.component;
            (t(l, 4, 0, "AddressGeo"),
              t(
                l,
                6,
                0,
                "AddressGeo",
                n.formatGeoAddress(l.parent.context.$implicit),
              ));
          },
          function (t, l) {
            t(
              l,
              3,
              0,
              a.Nb(l, 6).backgroundColor,
              a.Nb(l, 6).fixedNumberOfLines,
              a.Nb(l, 6).mayContainLatinCharsForArabic,
              a.Nb(l, 6).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function St(t) {
        return a.ac(
          0,
          [
            (t()(),
            a.yb(
              0,
              0,
              null,
              null,
              8,
              "div",
              [["class", "contact-information__item"]],
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
            a.xb(
              1,
              212992,
              null,
              0,
              j.a,
              [[2, v.a], [8, null], [3, j.a], a.l, a.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (t()(),
            a.yb(
              2,
              0,
              null,
              null,
              6,
              "div",
              [["class", "item__information"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            a.yb(
              3,
              0,
              null,
              null,
              5,
              "div",
              [["class", "item__text item__text--primary"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            a.yb(
              4,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["id", "EmailAddressNoMail"],
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
              b.b,
              b.a,
            )),
            a.xb(
              5,
              212992,
              null,
              0,
              i.a,
              [a.l, a.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(6, 16384, null, 0, d.a, [], null, null),
            a.xb(
              7,
              245760,
              null,
              0,
              m.a,
              [[6, i.a], h.a, a.h, a.l, a.D, [2, p.a], [2, d.a], [2, f.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            a.xb(
              8,
              147456,
              null,
              0,
              C.a,
              [N.a, a.h, u.a, [3, C.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
          ],
          function (t, l) {
            (t(l, 1, 0, l.component.uiStateType),
              t(l, 5, 0, "EmailAddressNoMail"),
              t(
                l,
                7,
                0,
                "EmailAddressNoMail",
                l.parent.parent.parent.context.$implicit.address,
              ),
              t(l, 8, 0, l.parent.parent.context.mib3Let, void 0));
          },
          function (t, l) {
            (t(
              l,
              0,
              0,
              a.Nb(l, 1).uiStateListHorizontal,
              a.Nb(l, 1).uiStateListVertical,
              a.Nb(l, 1).uiStateCoverLeft,
              a.Nb(l, 1).uiStateCoverRight,
              a.Nb(l, 1).uiStateCoverBottom,
              a.Nb(l, 1).uiStateButton,
              a.Nb(l, 1).uiStateByDabLeft,
              a.Nb(l, 1).uiStateByDabRight,
              a.Nb(l, 1).uiStateLbDabLeft,
              a.Nb(l, 1).uiStateLbDabRight,
            ),
              t(
                l,
                4,
                0,
                a.Nb(l, 7).backgroundColor,
                a.Nb(l, 7).fixedNumberOfLines,
                a.Nb(l, 7).mayContainLatinCharsForArabic,
                a.Nb(l, 7).shortenWithEllipsisForArabic,
                a.Nb(l, 8).combinedDisabled,
                a.Nb(l, 8).useBrighterIcon,
              ));
          },
        );
      }
      function Pt(t) {
        return a.ac(
          0,
          [
            (t()(),
            a.yb(0, 0, null, null, 2, "div", [], null, null, null, null, null)),
            (t()(), a.hb(16777216, [[2, 2]], null, 1, null, St)),
            a.xb(
              2,
              278528,
              null,
              0,
              G.p,
              [a.P, a.L, G.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
          ],
          function (t, l) {
            t(l, 2, 0, l.component.contactDataTypeEnum.Email);
          },
          null,
        );
      }
      function Ot(t) {
        return a.ac(
          0,
          [
            (t()(),
            a.yb(
              0,
              0,
              null,
              null,
              14,
              "div",
              [["class", "contact-information__item"]],
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
              function (t, l, n) {
                var a = !0;
                return (
                  "mib3Tap" === l &&
                    (a =
                      !1 !==
                        t.component.selectEmailAddress(
                          t.parent.parent.parent.context.$implicit,
                        ) && a),
                  a
                );
              },
              null,
              null,
            )),
            a.xb(1, 147456, null, 0, y.a, [a.l, a.z], null, null),
            a.xb(
              2,
              147456,
              null,
              0,
              x.a,
              [y.a, [2, _.a], [2, i.a], u.a],
              null,
              null,
            ),
            a.xb(
              3,
              212992,
              null,
              0,
              v.a,
              [
                u.a,
                S.b,
                x.a,
                [2, _.a],
                [2, i.a],
                [2, C.a],
                [2, P.a],
                [2, O.a],
                a.z,
                E.a,
                a.l,
                [2, M.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.Sb(131584, null, L.a, L.a, [[3, L.a]]),
            a.xb(
              5,
              4407296,
              null,
              0,
              T.a,
              [
                a.l,
                A.a,
                a.h,
                L.a,
                [2, D.a],
                [2, _.b],
                [2, _.a],
                [2, I.a],
                [2, z.a],
              ],
              null,
              null,
            ),
            a.xb(
              6,
              212992,
              null,
              0,
              j.a,
              [[2, v.a], [8, null], [3, j.a], a.l, a.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            a.xb(
              7,
              147456,
              null,
              0,
              B.a,
              [[2, v.a], [2, C.a], [2, R.a], [2, T.a], [2, F.b], a.l, H.a, V.b],
              null,
              null,
            ),
            a.xb(
              8,
              147456,
              null,
              0,
              $.a,
              [[2, T.a], [2, v.a], [2, S.b], U.a],
              null,
              null,
            ),
            (t()(),
            a.yb(
              9,
              0,
              null,
              null,
              5,
              "div",
              [["class", "item__information"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            a.yb(
              10,
              0,
              null,
              null,
              4,
              "div",
              [["class", "item__text item__text--primary"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            a.yb(
              11,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["id", "EmailAddress"],
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
              b.b,
              b.a,
            )),
            a.xb(
              12,
              212992,
              null,
              0,
              i.a,
              [a.l, a.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(13, 16384, null, 0, d.a, [], null, null),
            a.xb(
              14,
              245760,
              null,
              0,
              m.a,
              [[6, i.a], h.a, a.h, a.l, a.D, [2, p.a], [2, d.a], [2, f.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (t, l) {
            var n = l.component;
            (t(l, 3, 0),
              t(l, 5, 0),
              t(l, 6, 0, n.uiStateType),
              t(l, 12, 0, "EmailAddress"),
              t(
                l,
                14,
                0,
                "EmailAddress",
                l.parent.parent.parent.context.$implicit.address,
              ));
          },
          function (t, l) {
            (t(l, 0, 1, [
              a.Nb(l, 5).markerClassEnabled,
              a.Nb(l, 6).uiStateListHorizontal,
              a.Nb(l, 6).uiStateListVertical,
              a.Nb(l, 6).uiStateCoverLeft,
              a.Nb(l, 6).uiStateCoverRight,
              a.Nb(l, 6).uiStateCoverBottom,
              a.Nb(l, 6).uiStateButton,
              a.Nb(l, 6).uiStateByDabLeft,
              a.Nb(l, 6).uiStateByDabRight,
              a.Nb(l, 6).uiStateLbDabLeft,
              a.Nb(l, 6).uiStateLbDabRight,
            ]),
              t(
                l,
                11,
                0,
                a.Nb(l, 14).backgroundColor,
                a.Nb(l, 14).fixedNumberOfLines,
                a.Nb(l, 14).mayContainLatinCharsForArabic,
                a.Nb(l, 14).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function Et(t) {
        return a.ac(
          0,
          [
            (t()(), a.hb(16777216, [[2, 2]], null, 1, null, Ot)),
            a.xb(
              1,
              278528,
              null,
              0,
              G.p,
              [a.P, a.L, G.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), a.hb(0, null, null, 0)),
          ],
          function (t, l) {
            t(l, 1, 0, l.component.contactDataTypeEnum.Email);
          },
          null,
        );
      }
      function Mt(t) {
        return a.ac(
          0,
          [
            (t()(),
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
            (t()(), a.hb(16777216, [[2, 2]], null, 1, null, Pt)),
            a.xb(
              2,
              16384,
              null,
              0,
              G.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(),
            a.hb(
              0,
              [
                [2, 2],
                ["mailingAllowed", 2],
              ],
              null,
              0,
              null,
              Et,
            )),
          ],
          function (t, l) {
            t(l, 2, 0, l.context.mib3Let, a.Nb(l, 3));
          },
          null,
        );
      }
      function Lt(t) {
        return a.ac(
          0,
          [
            (t()(),
            a.yb(
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
            a.xb(
              1,
              16384,
              null,
              0,
              G.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (t()(), a.hb(16777216, [[2, 2]], null, 1, null, Ct)),
            a.xb(
              3,
              278528,
              null,
              0,
              G.p,
              [a.P, a.L, G.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), a.hb(16777216, [[2, 2]], null, 1, null, Nt)),
            a.xb(
              5,
              278528,
              null,
              0,
              G.p,
              [a.P, a.L, G.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), a.hb(16777216, [[2, 2]], null, 1, null, vt)),
            a.xb(
              7,
              278528,
              null,
              0,
              G.p,
              [a.P, a.L, G.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), a.hb(16777216, [[2, 2]], null, 2, null, Mt)),
            a.xb(
              9,
              16384,
              null,
              0,
              K.a,
              [a.L, a.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            a.Pb(131072, G.b, [a.h]),
            (t()(), a.hb(0, null, null, 0)),
          ],
          function (t, l) {
            var n = l.component;
            (t(l, 1, 0, l.context.$implicit.kind),
              t(l, 3, 0, n.contactDataTypeEnum.Number),
              t(l, 5, 0, n.contactDataTypeEnum.FullAddress),
              t(l, 7, 0, n.contactDataTypeEnum.GeoAddress),
              t(
                l,
                9,
                0,
                a.Yb(
                  l,
                  9,
                  0,
                  a.Nb(l, 10).transform(n.emailMessagingNotAllowed$),
                ),
              ));
          },
          null,
        );
      }
      function Tt(t) {
        return a.ac(
          0,
          [
            a.Pb(0, Z.a, []),
            a.Pb(0, W.a, []),
            a.Tb(402653184, 1, { listComponent: 0 }),
            (t()(), a.hb(16777216, null, null, 1, null, gt)),
            a.xb(
              4,
              16384,
              null,
              0,
              G.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(),
            a.yb(
              5,
              0,
              null,
              null,
              0,
              "div",
              [["class", "strip"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            a.yb(
              6,
              0,
              null,
              null,
              9,
              "au3-list",
              [
                ["class", "contact-information"],
                ["id", "contactList"],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              J.b,
              J.a,
            )),
            a.Sb(6144, null, X.a, null, [Q.a]),
            a.xb(
              8,
              212992,
              null,
              0,
              i.a,
              [a.l, a.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(9, 16384, null, 0, q.a, [a.l], null, null),
            a.xb(
              10,
              12828672,
              [[1, 4]],
              1,
              Q.a,
              [
                [2, tt.a],
                [2, lt.a],
                [8, null],
                [2, i.a],
                [2, nt.a],
                [2, at.a],
                [2, S.b],
                c.i,
                a.z,
                a.h,
                u.a,
                et.a,
                it.a,
                [2, A.a],
                _.a,
                [2, c.a],
              ],
              { lineNumbers: [0, "lineNumbers"], items: [1, "items"] },
              null,
            ),
            a.Tb(603979776, 2, { template: 0 }),
            a.xb(
              12,
              212992,
              null,
              0,
              ot.a,
              [[4, Q.a], [2, ut.a], rt.a, st.b, u.a],
              { lineNumbers: [0, "lineNumbers"] },
              null,
            ),
            a.xb(
              13,
              4341760,
              null,
              0,
              ct.a,
              [st.b, [4, Q.a], u.a, [2, bt.b]],
              {
                staticDisplayElements: [0, "staticDisplayElements"],
                defaultDisplayElementReferenceType: [
                  1,
                  "defaultDisplayElementReferenceType",
                ],
                updateDisplayElements: [2, "updateDisplayElements"],
                lineNumbers: [3, "lineNumbers"],
              },
              null,
            ),
            a.Ob(14, 1),
            (t()(), a.hb(0, [[2, 2]], 0, 0, null, Lt)),
          ],
          function (t, l) {
            var n = l.component;
            (t(l, 4, 0, n.contactElement),
              t(l, 8, 0, "contactList"),
              t(l, 10, 0, n.forSds, n.contactListData),
              t(l, 12, 0, n.forSds));
            var e =
              null != n.contactDisplayElement
                ? t(l, 14, 0, n.contactDisplayElement)
                : a.Z;
            t(l, 13, 0, e, n.sdsListReferenceType, !0, n.forSds);
          },
          function (t, l) {
            t(l, 6, 0, a.Nb(l, 10).showLineNumbers);
          },
        );
      }
    },
  },
]);
