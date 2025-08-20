(window.webpackJsonp = window.webpackJsonp || []).push([
  [57],
  {
    mPYu: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "PhoneSearchModuleNgFactory", function () {
          return gn;
        }));
      var l = n("kZht"),
        a = n("QQZH"),
        i = n("HM3f"),
        o = n("zbI8"),
        s = n("e+pb"),
        r = n("xVbo"),
        u = n("kuMc"),
        c = n("8j5Y"),
        b = n("YtkY"),
        h = n("zcBZ"),
        d = n("6qsK"),
        g = n("YEFf"),
        p = n("Yi6/"),
        m = n("T07r"),
        f = n("P1io"),
        v = n("sK8D"),
        O = n("clth"),
        C = n("rJ2r"),
        P = n("vPDv"),
        x = n("IXiK"),
        _ = n("RXfg"),
        y = n("XY/Y"),
        M = n("pqkN");
      let S = (() => {
        class t {
          constructor() {
            ((this.iconCategoryEnum = p.Z),
              (this.icon = "E0AB_phone_generic_contactimage.webp"),
              (this.uiStateType = p.uc.ListHorizontal));
          }
          set searchResult(t) {
            t && (this.name = t.combinedName);
          }
        }
        return ((t.height = p.gd.isBentley ? 120 : 100), t);
      })();
      var N = n("oPv+"),
        L = n("wgY5");
      let T = (() => {
          class t {
            constructor(t, e) {
              ((this.generalSettingsService = t),
                (this.iconCategoryEnum = p.Z),
                (this.numberTypeIdEnum = h.a),
                (this.PhoneRoute = d.b),
                (this.uiStateType = p.uc.ListHorizontal),
                (this.logger = e.getLogger(
                  "phone.PhoneSearchCallstackItemComponent",
                )));
            }
            set searchResult(t) {
              if (null == t || null == t.numbers || t.numbers.length < 1)
                return void this.logger.error(
                  "Received invalid search result: either undefined or it has no number: ",
                  t,
                );
              t.numbers.length > 1 &&
                this.logger.warn(
                  "Search result has more than 1 number. Using first one.",
                  t.numbers,
                );
              const e = t.searchCallstackEntry;
              switch ((e && e.type) || void 0) {
                case h.b.DIALED:
                  this.icon = "E050_phone_dialed_number.webp";
                  break;
                case h.b.MISSED:
                  this.icon = "E051_phone_missed_call.webp";
                  break;
                default:
                  this.icon = "E052_phone_received_call.webp";
              }
              ((this.timestamp =
                e && e.timestamp ? L.utc(e.timestamp) : void 0),
                (this.contactId = (e && e.contact && e.contact.id) || void 0),
                (this.name = t.combinedName),
                (this.numberTypeId = t.numbers[0].numberType),
                (this.number = t.numbers[0].number));
            }
            ngOnInit() {
              ((this.timeFormat$ = this.generalSettingsService.timeFormat$.pipe(
                Object(b.a)((t) => t.activeTimeFormatForMoment),
              )),
                (this.dateFormat$ =
                  this.generalSettingsService.dateFormat$.pipe(
                    Object(b.a)((t) => t.activeDateFormatForMoment),
                  )));
            }
            get primaryText() {
              return this.name && this.name.text
                ? this.name.text
                : this.number && this.number.text
                  ? this.number.text
                  : "";
            }
          }
          return ((t.height = 120), t);
        })(),
        I = (() => {
          class t {
            constructor(t) {
              ((this.showInfoIcon = !1),
                (this.iconCategory = p.Z.List),
                (this.numberTypeIdEnum = h.a),
                (this.uiStateType = p.uc.ListHorizontal),
                (this.favIcon = "E0FC_favoriten.webp"),
                (this.infoIcon = "E9C1_phone_vcard_info.webp"),
                (this.PhoneRoute = d.b),
                (this.logger = t.getLogger(
                  "phone.PhoneSearchFavoriteItemComponent",
                )));
            }
            set searchResult(t) {
              null == t || !t.numbers || t.numbers.length < 1
                ? this.logger.error(
                    "Received invalid search result: either undefined or it has no number: ",
                    t,
                  )
                : (t.numbers.length > 1 &&
                    this.logger.warn(
                      "Search result has more than 1 number. Using first one.",
                      t.numbers,
                    ),
                  (this.name = t.combinedName),
                  (this.numberTypeId = t.numbers[0].numberType),
                  (this.number = t.numbers[0].number),
                  (this.contactId =
                    t &&
                    t.searchAdbEntry &&
                    t.searchAdbEntry.contact &&
                    t.searchAdbEntry.contact.id));
            }
          }
          return ((t.height = 120), t);
        })();
      var A = n("oJGs"),
        w = n("6xFL"),
        k = (function (t) {
          return (
            (t.Global = "Wen m\xf6chten Sie anrufen?"),
            (t.Addressbook = "Welchen Kontakt suchen Sie?"),
            (t.MessageAddressbook = "An wen m\xf6chten Sie schreiben?"),
            t
          );
        })({});
      class E {
        constructor(t, e, n, l, i, o, r, u, c, b, g, m, f, v) {
          ((this.controller = t),
            (this.adbService = e),
            (this.globalRoutingService = n),
            (this.searchProviderService = l),
            (this.activatedRoute = i),
            (this.phoneService = o),
            (this.messagingOperationsService = r),
            (this.messagingLocationService = u),
            (this.locationService = c),
            (this.searchTriggerService = b),
            (this.adressbookOptionsService = g),
            (this.optionMenuService = m),
            (this.contactValidationService = f),
            (this.placeholderIdEnum = k),
            (this.searchTypeEnum = s.b),
            (this.sourceEnum = h.d),
            (this.PhoneRoute = d.b),
            (this.MessagingRoute = O.a),
            (this.optionTypeEnum = A.a),
            (this.listItemType = p.rb),
            (this.searchType = s.b.Global),
            (this.destroyed$$ = new a.a(1)),
            (this.logger = v.getLogger("phone.SearchService")),
            this.initSearchResultItems(),
            (this.listItemHeightFunction =
              this.listItemHeightFunction.bind(this)));
        }
        get placeholderId() {
          switch (this.searchType) {
            case s.b.Addressbook:
              return k.Addressbook;
            case s.b.MessagingAddressbook:
              return k.MessageAddressbook;
            default:
              return k.Global;
          }
        }
        get placeholderIdKey() {
          const t = this.placeholderId;
          return Object.keys(k).find((e) => k[e] === t);
        }
        get itemHeight() {
          switch (this.searchType) {
            case s.b.Addressbook:
            case s.b.MessagingAddressbook:
              return 100;
            default:
              return 120;
          }
        }
        ngOnInit() {
          const t = this.globalRoutingService.activeAppContextSnapshot;
          (t === f.w
            ? (this.viewContext = y.b.PHONE)
            : t === f.u && (this.viewContext = y.b.NAVIGATION),
            Object(i.b)(
              this.activatedRoute.paramMap,
              this.activatedRoute.queryParamMap,
            )
              .pipe(
                Object(r.a)(([t]) => t.has("searchType")),
                Object(u.a)(this.destroyed$$),
              )
              .subscribe(([t, e]) => {
                ((this.searchType = t.get("searchType")),
                  this.searchProviderService.setSearchTypeAndDevice(
                    this.searchType,
                    e.get("searchDevice"),
                  ));
              }),
            this.controller.inputField$
              .pipe(Object(u.a)(this.destroyed$$))
              .subscribe((t) => (this.inputField = t)));
        }
        ngAfterViewInit() {
          this.searchTriggerService.triggerInitialSearchWhenReady(
            this.controller,
            this.destroyed$$,
          );
        }
        ngOnDestroy() {
          (this.searchProviderService.saveInputAsProposal(),
            this.destroyed$$.next());
        }
        get addressbookRoute() {
          return this.globalRoutingService.activeAppContextSnapshot === f.u
            ? v.b.DestinationMode.children.Addressbook.children.Contact
            : d.b.Main.children.Addressbook.children.Contact;
        }
        dialRecentcall(t) {
          if (
            (this.controller.addToUserDictionary(t),
            null == t || !t.numbers || t.numbers.length < 1)
          )
            return void this.logger.error(
              "Received invalid search result: either undefined or it has no number: ",
              t,
            );
          t.numbers.length > 1 &&
            this.logger.warn(
              "Search result has more than 1 number. Using first one.",
              t.numbers,
            );
          const e = t.numbers[0];
          e && e.number && e.number.text
            ? this.phoneService
                .dialNumber(e.number.text)
                .catch((t) => this.logger.info("dialRecentcall:", t))
            : this.logger.error(
                "Could not dial recent call due to invalid phone number",
              );
        }
        dialFavorite(t) {
          if (
            (this.controller.addToUserDictionary(t),
            null == t || !t.numbers || t.numbers.length < 1)
          )
            return void this.logger.error(
              "Received invalid search result: either undefined or it has no number: ",
              t,
            );
          t.numbers.length > 1 &&
            this.logger.warn(
              "Search result has more than 1 number. Using first one.",
              t.numbers,
            );
          const e = t.numbers[0];
          if (!e || !e.number || !e.number.text)
            return void this.logger.error(
              "Could not dial favorite due to invalid phone number",
            );
          const n = t.searchAdbEntry && t.searchAdbEntry.contact;
          if (n && n.phoneNumberList) {
            const t = n.phoneNumberList.findIndex(
              (t) => t.number === e.number.text,
            );
            if (t)
              return void this.phoneService
                .callContact(n, t)
                .catch((t) => this.logger.info("dialFavorite:", t));
            this.logger.info(
              `could not find phone number ${e.number.text} in received contact:`,
              n,
            );
          } else this.logger.info("received favorite result with no contact");
          (this.logger.info("using dialNumber as fallback"),
            this.phoneService
              .dialNumber(e.number.text)
              .catch((t) => this.logger.info("dialFavorite:", t)));
        }
        selectContact(t) {
          this.controller.addToUserDictionary(t);
        }
        openOptionsMenu(t) {
          const e = t.searchAdbEntry && t.searchAdbEntry.contact;
          e &&
            this.adressbookOptionsService
              .canShowOptionsForContact(e)
              .pipe(Object(u.a)(this.destroyed$$))
              .subscribe((t) => {
                t
                  ? this.optionMenuService.showOptionMenu(e)
                  : this.logger.info(
                      "openOptionsMenu: unable to open menu, no editable options available for contact",
                      e,
                    );
              });
        }
        selectMessagingContact(t) {
          if (!t || !t.searchAdbEntry || !t.searchAdbEntry.contact)
            return void this.logger.warn(
              "selectMessagingContact: failed to select contact: not existing on ",
              t || null,
            );
          const e = this.messagingLocationService.location;
          if (!e || !e.account || !e.account.accountType)
            return void this.logger.warn(
              "selectMessagingContact: failed to select contact: could not determine correct account for ",
              e || null,
            );
          const n = e.account;
          this.messagingOperationsService
            .getContactInformationType(
              n.accountType === x.a.SMS ? x.g.SMS : x.g.MAIL,
              t.searchAdbEntry.contact,
            )
            .then((t) => {
              const e = this.messagingOperationsService.getRecipients(n);
              return (
                e.push(t),
                this.messagingOperationsService.setRecipients(n, e),
                this.globalRoutingService.goBack(_.a.children.EditMessage)
              );
            })
            .catch((t) => {
              this.logger.error(
                "selectMessagingContact: failed to select contact: ",
                t,
              );
            });
        }
        initSearchResultItems() {
          this.searchResults$ = Object(i.b)(
            this.controller.searchResults$,
            this.locationService.location$,
          ).pipe(
            Object(c.a)(([t]) =>
              this.logger.info(
                "searchResultItems: SearchResultsLength",
                t.length,
              ),
            ),
            Object(b.a)(([t, e]) =>
              this.searchType === this.searchTypeEnum.MessagingAddressbook &&
              e &&
              e.account &&
              e.account.accountType === x.a.MAIL
                ? t.filter(
                    (t) =>
                      t &&
                      t.staticObject &&
                      t.staticObject.value &&
                      t.staticObject.value.emailAddresses &&
                      t.staticObject.value.emailAddresses.length > 0,
                  )
                : t,
            ),
          );
        }
        listItemHeightFunction(t, e) {
          if (this.searchType === s.b.MessagingAddressbook) return S.height;
          if (t && t.staticObject)
            switch (t.staticObject.source) {
              case h.d.CALLSTACK:
                return T.height;
              case h.d.CONTACTS:
                return S.height;
              case h.d.FAVORITES:
                return I.height;
            }
          return 120;
        }
      }
      class z {}
      var F = n("C9Ky"),
        R = n("dzs+"),
        D = n("fu7d"),
        $ = n("bou3"),
        B = n("yNay"),
        U = n("tZuO"),
        Y = n("3OpO"),
        H = n("v98a");
      class j {
        transform(t) {
          return t
            ? t.map((t) => [t.highlightStart || 0, t.highlightEnd || 0])
            : [];
        }
      }
      var V = n("HVUF"),
        G = n("B3Zb"),
        K = n("/51X"),
        X = n("Ps6X"),
        Z = n("6zvu"),
        W = n("th8l"),
        q = n("qzuC"),
        Q = l.wb({
          encapsulation: 0,
          styles: [
            [
              '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:grid;height:100px;width:1376px;grid-template-columns:auto minmax(0,1fr);align-items:center}.icon[_ngcontent-%COMP%]{width:40px;margin-right:15px}.primary[_ngcontent-%COMP%]{font-size:40px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{margin-right:unset;margin-left:15px}@media (max-width:1280px){[_nghost-%COMP%]{width:1130px}}',
            ],
          ],
          data: {},
        });
      function J(t) {
        return l.ac(
          0,
          [
            l.Pb(0, j, []),
            (t()(),
            l.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "icon"],
                ["id", ""],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              V.b,
              V.a,
            )),
            l.xb(
              2,
              212992,
              null,
              0,
              D.a,
              [l.l, l.D, $.a, B.a, [3, D.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              3,
              4243456,
              null,
              0,
              G.b,
              [B.a, l.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (t()(),
            l.yb(
              4,
              0,
              null,
              null,
              4,
              "au3-highlighting-label",
              [
                ["class", "primary"],
                ["id", "Name"],
              ],
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
                [2, "abbreviate-at-beginning", null],
              ],
              null,
              null,
              K.b,
              K.a,
            )),
            l.xb(
              5,
              212992,
              null,
              0,
              D.a,
              [l.l, l.D, $.a, B.a, [3, D.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              6,
              212992,
              null,
              0,
              X.a,
              [[2, Z.a], [8, null], [3, X.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            l.xb(
              7,
              704512,
              null,
              0,
              W.b,
              [q.a],
              { text: [0, "text"], highlightAreas: [1, "highlightAreas"] },
              null,
            ),
            l.Rb(8, 1),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 2, 0, ""),
              t(e, 3, 0, n.icon, n.iconCategoryEnum.List),
              t(e, 5, 0, "Name"),
              t(e, 6, 0, n.uiStateType));
            var a = null == n.name ? null : n.name.text,
              i = l.Yb(
                e,
                7,
                1,
                t(
                  e,
                  8,
                  0,
                  l.Nb(e, 0),
                  null == n.name ? null : n.name.highlights,
                ),
              );
            t(e, 7, 0, a, i);
          },
          function (t, e) {
            (t(e, 1, 0, l.Nb(e, 3).iconComponentHidden),
              t(e, 4, 1, [
                l.Nb(e, 6).uiStateListHorizontal,
                l.Nb(e, 6).uiStateListVertical,
                l.Nb(e, 6).uiStateCoverLeft,
                l.Nb(e, 6).uiStateCoverRight,
                l.Nb(e, 6).uiStateCoverBottom,
                l.Nb(e, 6).uiStateButton,
                l.Nb(e, 6).uiStateByDabLeft,
                l.Nb(e, 6).uiStateByDabRight,
                l.Nb(e, 6).uiStateLbDabLeft,
                l.Nb(e, 6).uiStateLbDabRight,
                l.Nb(e, 7).abbreviateBeginningOfText,
              ]));
          },
        );
      }
      var tt = n("bMuc"),
        et = n("ZIdM"),
        nt = n("3bpu"),
        lt = n("VcEz"),
        at = n("OtM5"),
        it = n("y9xZ"),
        ot = n("+sw+"),
        st = n("BMrr"),
        rt = n("IEns"),
        ut = n("z6QT"),
        ct = n("flsk"),
        bt = n("FQEI"),
        ht = n("O82V"),
        dt = n("Eln4"),
        gt = n("evAh"),
        pt = n("CpzC"),
        mt = n("0Bsn"),
        ft = n("5GjX"),
        vt = n("mYyF"),
        Ot = n("aOG8"),
        Ct = n("Krzs"),
        Pt = n("8TlW"),
        xt = n("Xo58"),
        _t = n("m3Ja"),
        yt = n("r+e+"),
        Mt = n("ijxY"),
        St = n("bmFL"),
        Nt = n("An66"),
        Lt = n("U6SP"),
        Tt = n("9ZFG"),
        It = n("6480"),
        At = n("FfND"),
        wt = n("oeT7"),
        kt = n("t7cT"),
        Et = n("1ZTq"),
        zt = n("YI95"),
        Ft = n("SueR"),
        Rt = n("VKfg"),
        Dt = n("EkEa"),
        $t = l.wb({
          encapsulation: 0,
          styles: [
            [
              '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}.wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%}.wrapper[_ngcontent-%COMP%]{display:grid;height:120px;grid-template-columns:auto minmax(0,1fr) auto;align-items:center}.icon[_ngcontent-%COMP%]{width:40px;margin-right:15px}.primary[_ngcontent-%COMP%]{font-size:40px}.primary[_ngcontent-%COMP%], .secondary[_ngcontent-%COMP%]{grid-column:2;display:flex;align-items:baseline}.secondary[_ngcontent-%COMP%]{grid-row:2;font-size:30px}.gap[_ngcontent-%COMP%]{width:15px}.number[_ngcontent-%COMP%]{flex:1;min-width:0}.datetime[_ngcontent-%COMP%]{margin-left:auto;font-size:30px}.button-area[_ngcontent-%COMP%]{width:170px;align-self:stretch;display:block;grid-column:3;grid-row-start:1;grid-row-end:3}.button[_ngcontent-%COMP%]{width:100%;height:100%}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .datetime[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .datetime[_ngcontent-%COMP%]{margin-left:unset;margin-right:auto}.component-layout-arabic[_nghost-%COMP%]   .icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{margin-right:unset;margin-left:15px;transform:scaleX(-1)}@media (max-width:1280px){[_nghost-%COMP%]{width:1130px}}',
            ],
          ],
          data: {},
        });
      function Bt(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-highlighting-label",
              [
                ["class", "name"],
                ["id", "NameOrNumber"],
              ],
              [[2, "abbreviate-at-beginning", null]],
              null,
              null,
              K.b,
              K.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              D.a,
              [l.l, l.D, $.a, B.a, [3, D.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              704512,
              null,
              0,
              W.b,
              [q.a],
              { text: [0, "text"], highlightAreas: [1, "highlightAreas"] },
              null,
            ),
            l.Rb(3, 1),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, "NameOrNumber");
            var a = n.primaryText,
              i = l.Yb(
                e,
                2,
                1,
                t(
                  e,
                  3,
                  0,
                  l.Nb(e.parent, 0),
                  null != n.name && n.name.text
                    ? null == n.name
                      ? null
                      : n.name.highlights
                    : null == n.number
                      ? null
                      : n.number.highlights,
                ),
              );
            t(e, 2, 0, a, i);
          },
          function (t, e) {
            t(e, 0, 0, l.Nb(e, 2).abbreviateBeginningOfText);
          },
        );
      }
      function Ut(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "name"],
                ["id", "UnbekanntText"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Pt.b,
              Pt.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              D.a,
              [l.l, l.D, $.a, B.a, [3, D.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              xt.a,
              [[6, D.a], _t.a, l.h, l.l, l.D, [2, yt.a], [2, Mt.a], [2, St.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "UnbekanntText"),
              t(e, 2, 0, "Unbekannt", "UnbekanntText", 1));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              l.Nb(e, 2).backgroundColor,
              l.Nb(e, 2).fixedNumberOfLines,
              l.Nb(e, 2).mayContainLatinCharsForArabic,
              l.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Yt(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [["class", "number-type"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Pt.b,
              Pt.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              D.a,
              [l.l, l.D, $.a, B.a, [3, D.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              xt.a,
              [[6, D.a], _t.a, l.h, l.l, l.D, [2, yt.a], [2, Mt.a], [2, St.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            l.Rb(3, 1),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, n.numberTypeId, n.numberTypeIdEnum);
            var a = l.Yb(
              e,
              2,
              0,
              t(e, 3, 0, l.Nb(e.parent.parent, 2), n.numberTypeId),
            );
            t(e, 2, 0, a, n.numberTypeId, 1);
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              l.Nb(e, 2).backgroundColor,
              l.Nb(e, 2).fixedNumberOfLines,
              l.Nb(e, 2).mayContainLatinCharsForArabic,
              l.Nb(e, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Ht(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
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
            (t()(), l.hb(16777216, null, null, 1, null, Yt)),
            l.xb(
              2,
              16384,
              null,
              0,
              Nt.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(),
            l.yb(
              3,
              0,
              null,
              null,
              0,
              "div",
              [["class", "gap"]],
              null,
              null,
              null,
              null,
              null,
            )),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 2, 0, n.numberTypeId !== n.numberTypeIdEnum.UNKNOWN);
          },
          null,
        );
      }
      function jt(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              5,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            l.yb(
              1,
              0,
              null,
              null,
              3,
              "au3-highlighting-label",
              [
                ["class", "number"],
                ["id", "Number"],
              ],
              [[2, "abbreviate-at-beginning", null]],
              null,
              null,
              K.b,
              K.a,
            )),
            l.xb(
              2,
              212992,
              null,
              0,
              D.a,
              [l.l, l.D, $.a, B.a, [3, D.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              3,
              704512,
              null,
              0,
              W.b,
              [q.a],
              { text: [0, "text"], highlightAreas: [1, "highlightAreas"] },
              null,
            ),
            l.Rb(4, 1),
            (t()(),
            l.yb(
              5,
              0,
              null,
              null,
              0,
              "div",
              [["class", "gap"]],
              null,
              null,
              null,
              null,
              null,
            )),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 2, 0, "Number");
            var a = null == n.number ? null : n.number.text,
              i = l.Yb(
                e,
                3,
                1,
                t(
                  e,
                  4,
                  0,
                  l.Nb(e.parent, 0),
                  null == n.number ? null : n.number.highlights,
                ),
              );
            t(e, 3, 0, a, i);
          },
          function (t, e) {
            t(e, 1, 0, l.Nb(e, 3).abbreviateBeginningOfText);
          },
        );
      }
      function Vt(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-button",
              [
                ["class", "button"],
                ["id", "InfoButton"],
                ["ttIgnore", ""],
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
              null,
              null,
              Lt.b,
              Lt.a,
            )),
            l.xb(
              1,
              147456,
              null,
              0,
              at.a,
              [Tt.a, l.h, B.a, [3, at.a]],
              null,
              null,
            ),
            l.xb(2, 147456, null, 0, tt.a, [l.l, l.z], null, null),
            l.xb(
              3,
              212992,
              null,
              0,
              D.a,
              [l.l, l.D, $.a, B.a, [3, D.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              4,
              147456,
              null,
              0,
              et.a,
              [tt.a, [2, nt.a], [2, D.a], B.a],
              null,
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              Z.a,
              [
                B.a,
                lt.b,
                et.a,
                [2, nt.a],
                [2, D.a],
                [2, at.a],
                [2, it.a],
                [2, ot.a],
                l.z,
                st.a,
                l.l,
                [2, rt.a],
              ],
              null,
              null,
            ),
            l.xb(
              6,
              671744,
              null,
              0,
              It.a,
              [At.a, wt.i, at.a, Z.a, It.b, kt.a],
              {
                routeInfo: [0, "routeInfo"],
                routerParams: [1, "routerParams"],
                infoButton: [2, "infoButton"],
              },
              null,
            ),
            l.xb(7, 16384, null, 0, Mt.a, [], null, null),
            l.Sb(131584, null, ut.a, ut.a, [[3, ut.a]]),
            l.xb(
              9,
              4407296,
              null,
              0,
              ct.a,
              [
                l.l,
                bt.a,
                l.h,
                ut.a,
                [2, ht.a],
                [2, nt.b],
                [2, nt.a],
                [2, dt.a],
                [2, gt.a],
              ],
              null,
              null,
            ),
            l.xb(
              10,
              49152,
              null,
              0,
              Et.b,
              [],
              {
                hasText: [0, "hasText"],
                icon: [1, "icon"],
                iconCategory: [2, "iconCategory"],
              },
              null,
            ),
            l.xb(
              11,
              147456,
              null,
              0,
              pt.a,
              [
                [2, Z.a],
                [2, at.a],
                [2, mt.a],
                [2, ct.a],
                [2, ft.b],
                l.l,
                vt.a,
                H.b,
              ],
              null,
              null,
            ),
            l.xb(
              12,
              147456,
              null,
              0,
              Ot.a,
              [[2, ct.a], [2, Z.a], [2, lt.b], Ct.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 3, 0, "InfoButton"),
              t(e, 5, 0),
              t(
                e,
                6,
                0,
                n.PhoneRoute.Main.children.Addressbook.children.Contact,
                n.contactId,
                !0,
              ),
              t(e, 9, 0),
              t(
                e,
                10,
                0,
                !1,
                "E9C1_phone_vcard_info.webp",
                n.iconCategoryEnum.List,
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              l.Nb(e, 1).combinedDisabled,
              l.Nb(e, 1).useBrighterIcon,
              l.Nb(e, 9).markerClassEnabled,
              l.Nb(e, 10).activated,
              l.Nb(e, 10).layoutHorizontal,
              l.Nb(e, 10).thinBorder,
              l.Nb(e, 10).thickBorder,
            );
          },
        );
      }
      function Gt(t) {
        return l.ac(
          0,
          [
            l.Pb(0, j, []),
            l.Pb(0, zt.a, []),
            l.Pb(0, Ft.a, []),
            (t()(),
            l.yb(
              3,
              0,
              null,
              null,
              26,
              "div",
              [["class", "wrapper"]],
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
            l.xb(
              4,
              212992,
              null,
              0,
              X.a,
              [[2, Z.a], [8, null], [3, X.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (t()(),
            l.yb(
              5,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "icon"],
                ["id", ""],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              V.b,
              V.a,
            )),
            l.xb(
              6,
              212992,
              null,
              0,
              D.a,
              [l.l, l.D, $.a, B.a, [3, D.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              7,
              4243456,
              null,
              0,
              G.b,
              [B.a, l.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (t()(),
            l.yb(
              8,
              0,
              null,
              null,
              10,
              "div",
              [["class", "primary"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), l.hb(16777216, null, null, 1, null, Bt)),
            l.xb(
              10,
              16384,
              null,
              0,
              Nt.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(), l.hb(0, [["unbekanntTemplate", 2]], null, 0, null, Ut)),
            (t()(),
            l.yb(
              12,
              0,
              null,
              null,
              0,
              "div",
              [["class", "gap"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            l.yb(
              13,
              0,
              null,
              null,
              5,
              "au3-i18n-label",
              [
                ["class", "datetime"],
                ["id", "Date"],
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
              Pt.b,
              Pt.a,
            )),
            l.xb(
              14,
              212992,
              null,
              0,
              D.a,
              [l.l, l.D, $.a, B.a, [3, D.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(15, 16384, null, 0, Mt.a, [], null, null),
            l.xb(
              16,
              245760,
              null,
              0,
              xt.a,
              [[6, D.a], _t.a, l.h, l.l, l.D, [2, yt.a], [2, Mt.a], [2, St.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            l.Pb(131072, Nt.b, [l.h]),
            l.Rb(18, 2),
            (t()(),
            l.yb(
              19,
              0,
              null,
              null,
              7,
              "div",
              [["class", "secondary"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), l.hb(16777216, null, null, 1, null, Ht)),
            l.xb(
              21,
              16384,
              null,
              0,
              Nt.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, jt)),
            l.xb(
              23,
              16384,
              null,
              0,
              Nt.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(),
            l.yb(
              24,
              0,
              null,
              null,
              2,
              "au3-time-display",
              [
                ["class", "datetime"],
                ["id", "Time"],
              ],
              null,
              null,
              null,
              Rt.b,
              Rt.a,
            )),
            l.xb(
              25,
              212992,
              null,
              0,
              D.a,
              [l.l, l.D, $.a, B.a, [3, D.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              26,
              49152,
              null,
              0,
              Dt.a,
              [N.a],
              {
                timeAsMoment: [0, "timeAsMoment"],
                timeRightAligned: [1, "timeRightAligned"],
                swapAlignmentForArabic: [2, "swapAlignmentForArabic"],
              },
              null,
            ),
            (t()(),
            l.yb(
              27,
              0,
              null,
              null,
              2,
              "div",
              [["class", "button-area"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), l.hb(16777216, null, null, 1, null, Vt)),
            l.xb(
              29,
              16384,
              null,
              0,
              Nt.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 4, 0, n.uiStateType),
              t(e, 6, 0, ""),
              t(e, 7, 0, n.icon, n.iconCategoryEnum.List),
              t(e, 10, 0, n.primaryText, l.Nb(e, 11)),
              t(e, 14, 0, "Date"));
            var a =
              l.Yb(
                e,
                16,
                1,
                t(
                  e,
                  18,
                  0,
                  l.Nb(e, 1),
                  n.timestamp,
                  l.Yb(e, 16, 1, l.Nb(e, 17).transform(n.dateFormat$)),
                ),
              ) || "";
            (t(e, 16, 0, "Date", a),
              t(e, 21, 0, n.numberTypeId),
              t(e, 23, 0, null == n.name ? null : n.name.text),
              t(e, 25, 0, "Time"),
              t(e, 26, 0, n.timestamp, !0, !0),
              t(e, 29, 0, n.contactId));
          },
          function (t, e) {
            (t(
              e,
              3,
              0,
              l.Nb(e, 4).uiStateListHorizontal,
              l.Nb(e, 4).uiStateListVertical,
              l.Nb(e, 4).uiStateCoverLeft,
              l.Nb(e, 4).uiStateCoverRight,
              l.Nb(e, 4).uiStateCoverBottom,
              l.Nb(e, 4).uiStateButton,
              l.Nb(e, 4).uiStateByDabLeft,
              l.Nb(e, 4).uiStateByDabRight,
              l.Nb(e, 4).uiStateLbDabLeft,
              l.Nb(e, 4).uiStateLbDabRight,
            ),
              t(e, 5, 0, l.Nb(e, 7).iconComponentHidden),
              t(
                e,
                13,
                0,
                l.Nb(e, 16).backgroundColor,
                l.Nb(e, 16).fixedNumberOfLines,
                l.Nb(e, 16).mayContainLatinCharsForArabic,
                l.Nb(e, 16).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      var Kt = n("vwU6"),
        Xt = n("YcCK"),
        Zt = l.wb({
          encapsulation: 0,
          styles: [
            [
              '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}.wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%}.wrapper[_ngcontent-%COMP%]{display:grid;height:120px;grid-template-columns:auto minmax(0,1fr) auto;align-items:center}.icon[_ngcontent-%COMP%]{width:40px;margin-right:15px}.primary[_ngcontent-%COMP%]{display:flex;font-size:40px}.secondary[_ngcontent-%COMP%]{grid-column:2;display:flex;font-size:30px}.gap[_ngcontent-%COMP%]{width:15px}.number[_ngcontent-%COMP%]{flex:1;min-width:0}.button[_ngcontent-%COMP%]{width:100%;height:100%}.button-area[_ngcontent-%COMP%]{width:170px;align-self:stretch;display:block;grid-column:3;grid-row-start:1;grid-row-end:3}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{margin-right:unset;margin-left:15px}@media (max-width:1280px){[_nghost-%COMP%]{width:1130px}}',
            ],
          ],
          data: {},
        });
      function Wt(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              5,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            l.yb(
              1,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [["class", "number-type"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              Pt.b,
              Pt.a,
            )),
            l.xb(
              2,
              212992,
              null,
              0,
              D.a,
              [l.l, l.D, $.a, B.a, [3, D.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            l.xb(
              3,
              245760,
              null,
              0,
              xt.a,
              [[6, D.a], _t.a, l.h, l.l, l.D, [2, yt.a], [2, Mt.a], [2, St.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
            l.Rb(4, 1),
            (t()(),
            l.yb(
              5,
              0,
              null,
              null,
              0,
              "div",
              [["class", "gap"]],
              null,
              null,
              null,
              null,
              null,
            )),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 2, 0, n.numberTypeId, n.numberTypeIdEnum);
            var a = l.Yb(
              e,
              3,
              0,
              t(e, 4, 0, l.Nb(e.parent, 1), n.numberTypeId),
            );
            t(e, 3, 0, a, n.numberTypeId);
          },
          function (t, e) {
            t(
              e,
              1,
              0,
              l.Nb(e, 3).backgroundColor,
              l.Nb(e, 3).fixedNumberOfLines,
              l.Nb(e, 3).mayContainLatinCharsForArabic,
              l.Nb(e, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function qt(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-button",
              [
                ["class", "button"],
                ["id", "InfoButton"],
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
              null,
              null,
              Lt.b,
              Lt.a,
            )),
            l.xb(
              1,
              147456,
              null,
              0,
              at.a,
              [Tt.a, l.h, B.a, [3, at.a]],
              null,
              null,
            ),
            l.xb(2, 147456, null, 0, tt.a, [l.l, l.z], null, null),
            l.xb(
              3,
              212992,
              null,
              0,
              D.a,
              [l.l, l.D, $.a, B.a, [3, D.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              4,
              147456,
              null,
              0,
              et.a,
              [tt.a, [2, nt.a], [2, D.a], B.a],
              null,
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              Z.a,
              [
                B.a,
                lt.b,
                et.a,
                [2, nt.a],
                [2, D.a],
                [2, at.a],
                [2, it.a],
                [2, ot.a],
                l.z,
                st.a,
                l.l,
                [2, rt.a],
              ],
              null,
              null,
            ),
            l.xb(
              6,
              671744,
              null,
              0,
              It.a,
              [At.a, wt.i, at.a, Z.a, It.b, kt.a],
              {
                routeInfo: [0, "routeInfo"],
                routerParams: [1, "routerParams"],
                infoButton: [2, "infoButton"],
              },
              null,
            ),
            l.Sb(131584, null, ut.a, ut.a, [[3, ut.a]]),
            l.xb(
              8,
              4407296,
              null,
              0,
              ct.a,
              [
                l.l,
                bt.a,
                l.h,
                ut.a,
                [2, ht.a],
                [2, nt.b],
                [2, nt.a],
                [2, dt.a],
                [2, gt.a],
              ],
              null,
              null,
            ),
            l.xb(
              9,
              49152,
              null,
              0,
              Et.b,
              [],
              {
                hasText: [0, "hasText"],
                icon: [1, "icon"],
                iconCategory: [2, "iconCategory"],
              },
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              pt.a,
              [
                [2, Z.a],
                [2, at.a],
                [2, mt.a],
                [2, ct.a],
                [2, ft.b],
                l.l,
                vt.a,
                H.b,
              ],
              null,
              null,
            ),
            l.xb(
              11,
              147456,
              null,
              0,
              Ot.a,
              [[2, ct.a], [2, Z.a], [2, lt.b], Ct.a],
              null,
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 3, 0, "InfoButton"),
              t(e, 5, 0),
              t(
                e,
                6,
                0,
                n.PhoneRoute.Main.children.Addressbook.children.Contact,
                n.contactId,
                !0,
              ),
              t(e, 8, 0),
              t(e, 9, 0, !1, n.infoIcon, n.iconCategory));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              l.Nb(e, 1).combinedDisabled,
              l.Nb(e, 1).useBrighterIcon,
              l.Nb(e, 8).markerClassEnabled,
              l.Nb(e, 9).activated,
              l.Nb(e, 9).layoutHorizontal,
              l.Nb(e, 9).thinBorder,
              l.Nb(e, 9).thickBorder,
            );
          },
        );
      }
      function Qt(t) {
        return l.ac(
          0,
          [
            l.Pb(0, j, []),
            l.Pb(0, Ft.a, []),
            (t()(),
            l.yb(
              2,
              0,
              null,
              null,
              20,
              "div",
              [["class", "wrapper"]],
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
            l.xb(
              3,
              212992,
              null,
              0,
              X.a,
              [[2, Z.a], [8, null], [3, X.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (t()(),
            l.yb(
              4,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "icon"],
                ["id", ""],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              V.b,
              V.a,
            )),
            l.xb(
              5,
              212992,
              null,
              0,
              D.a,
              [l.l, l.D, $.a, B.a, [3, D.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              6,
              4243456,
              null,
              0,
              G.b,
              [B.a, l.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (t()(),
            l.yb(
              7,
              0,
              null,
              null,
              4,
              "div",
              [["class", "primary"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            l.yb(
              8,
              0,
              null,
              null,
              3,
              "au3-highlighting-label",
              [["id", "Name"]],
              [[2, "abbreviate-at-beginning", null]],
              null,
              null,
              K.b,
              K.a,
            )),
            l.xb(
              9,
              212992,
              null,
              0,
              D.a,
              [l.l, l.D, $.a, B.a, [3, D.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              10,
              704512,
              null,
              0,
              W.b,
              [q.a],
              { text: [0, "text"], highlightAreas: [1, "highlightAreas"] },
              null,
            ),
            l.Rb(11, 1),
            (t()(),
            l.yb(
              12,
              0,
              null,
              null,
              7,
              "div",
              [["class", "secondary"]],
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
            l.xb(
              13,
              212992,
              null,
              0,
              X.a,
              [[2, Z.a], [8, null], [3, X.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Wt)),
            l.xb(
              15,
              16384,
              null,
              0,
              Nt.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(),
            l.yb(
              16,
              0,
              null,
              null,
              3,
              "au3-highlighting-label",
              [
                ["class", "number"],
                ["id", "Number"],
              ],
              [[2, "abbreviate-at-beginning", null]],
              null,
              null,
              K.b,
              K.a,
            )),
            l.xb(
              17,
              212992,
              null,
              0,
              D.a,
              [l.l, l.D, $.a, B.a, [3, D.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              18,
              704512,
              null,
              0,
              W.b,
              [q.a],
              { text: [0, "text"], highlightAreas: [1, "highlightAreas"] },
              null,
            ),
            l.Rb(19, 1),
            (t()(),
            l.yb(
              20,
              0,
              null,
              null,
              2,
              "div",
              [["class", "button-area"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), l.hb(16777216, null, null, 1, null, qt)),
            l.xb(
              22,
              16384,
              null,
              0,
              Nt.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 3, 0, n.uiStateType),
              t(e, 5, 0, ""),
              t(e, 6, 0, n.favIcon, n.iconCategory),
              t(e, 9, 0, "Name"));
            var a = null == n.name ? null : n.name.text,
              i = l.Yb(
                e,
                10,
                1,
                t(
                  e,
                  11,
                  0,
                  l.Nb(e, 0),
                  null == n.name ? null : n.name.highlights,
                ),
              );
            (t(e, 10, 0, a, i),
              t(e, 13, 0, n.uiStateType),
              t(e, 15, 0, n.numberTypeId),
              t(e, 17, 0, "Number"));
            var o = null == n.number ? null : n.number.text,
              s = l.Yb(
                e,
                18,
                1,
                t(
                  e,
                  19,
                  0,
                  l.Nb(e, 0),
                  null == n.number ? null : n.number.highlights,
                ),
              );
            (t(e, 18, 0, o, s), t(e, 22, 0, n.showInfoIcon));
          },
          function (t, e) {
            (t(
              e,
              2,
              0,
              l.Nb(e, 3).uiStateListHorizontal,
              l.Nb(e, 3).uiStateListVertical,
              l.Nb(e, 3).uiStateCoverLeft,
              l.Nb(e, 3).uiStateCoverRight,
              l.Nb(e, 3).uiStateCoverBottom,
              l.Nb(e, 3).uiStateButton,
              l.Nb(e, 3).uiStateByDabLeft,
              l.Nb(e, 3).uiStateByDabRight,
              l.Nb(e, 3).uiStateLbDabLeft,
              l.Nb(e, 3).uiStateLbDabRight,
            ),
              t(e, 4, 0, l.Nb(e, 6).iconComponentHidden),
              t(e, 8, 0, l.Nb(e, 10).abbreviateBeginningOfText),
              t(
                e,
                12,
                0,
                l.Nb(e, 13).uiStateListHorizontal,
                l.Nb(e, 13).uiStateListVertical,
                l.Nb(e, 13).uiStateCoverLeft,
                l.Nb(e, 13).uiStateCoverRight,
                l.Nb(e, 13).uiStateCoverBottom,
                l.Nb(e, 13).uiStateButton,
                l.Nb(e, 13).uiStateByDabLeft,
                l.Nb(e, 13).uiStateByDabRight,
                l.Nb(e, 13).uiStateLbDabLeft,
                l.Nb(e, 13).uiStateLbDabRight,
              ),
              t(e, 16, 0, l.Nb(e, 18).abbreviateBeginningOfText));
          },
        );
      }
      var Jt = n("0qMr"),
        te = n("4XZL"),
        ee = n("URLa"),
        ne = n("Z2XD"),
        le = n("UaS1"),
        ae = n("jNzc"),
        ie = n("TKG5"),
        oe = n("CMj9"),
        se = n("Fb8o"),
        re = n("mWuZ"),
        ue = n("70uC"),
        ce = n("8yWk"),
        be = n("dxLW"),
        he = n("Tvbo"),
        de = n("tYr6"),
        ge = n("iAsw"),
        pe = n("Pqed"),
        me = n("BS+8"),
        fe = n("VYaS"),
        ve = n("HygI"),
        Oe = n("u0hB"),
        Ce = n("VDgF"),
        Pe = n("Mev3"),
        xe = n("Tr//"),
        _e = n("GZoL"),
        ye = n("d3LF"),
        Me = n("SFb6"),
        Se = n("xS3h"),
        Ne = n("3Sae"),
        Le = n("ONRh"),
        Te = n("sg2e"),
        Ie = n("1VvW"),
        Ae = l.wb({
          encapsulation: 0,
          styles: [
            [
              '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{display:block;height:100%}.keyboard[_ngcontent-%COMP%]{flex:1;min-height:0}.label[_ngcontent-%COMP%]{font-size:40px;margin-top:30px}.disabled[_ngcontent-%COMP%]{filter:grayscale(100%) brightness(.4)}.options-menu-item[_ngcontent-%COMP%]{font-size:40px}',
            ],
          ],
          data: {},
        });
      function we(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-truffle-search-note",
              [["id", "HelpText"]],
              null,
              null,
              null,
              R.b,
              R.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              D.a,
              [l.l, l.D, $.a, B.a, [3, D.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              U.a,
              [Y.a, $.a, H.b],
              { developerText: [0, "developerText"] },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 1, 0, "HelpText"),
              t(
                e,
                2,
                0,
                "Folgende Eingaben\nsind m\xf6glich:\nz.B. Vor-/Nachname\neines Kontaktes\nz.B: Rufnummer aus\nder Anrufliste",
              ));
          },
          null,
        );
      }
      function ke(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-truffle-search-note",
              [["id", "NoResults"]],
              null,
              null,
              null,
              R.b,
              R.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              D.a,
              [l.l, l.D, $.a, B.a, [3, D.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, U.a, [Y.a, $.a, H.b], null, null),
          ],
          function (t, e) {
            t(e, 1, 0, "NoResults");
          },
          null,
        );
      }
      function Ee(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
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
            (t()(),
            l.yb(
              1,
              0,
              null,
              null,
              8,
              "au3-phone-search-contact-item",
              [],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l =
                      !1 !==
                        t.component.selectMessagingContact(
                          null == t.parent.context.$implicit ||
                            null == t.parent.context.$implicit.staticObject
                            ? null
                            : t.parent.context.$implicit.staticObject.value,
                        ) && l),
                  l
                );
              },
              J,
              Q,
            )),
            l.xb(2, 147456, null, 0, tt.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              et.a,
              [tt.a, [2, nt.a], [2, D.a], B.a],
              null,
              null,
            ),
            l.xb(
              4,
              212992,
              null,
              0,
              Z.a,
              [
                B.a,
                lt.b,
                et.a,
                [2, nt.a],
                [2, D.a],
                [2, at.a],
                [2, it.a],
                [2, ot.a],
                l.z,
                st.a,
                l.l,
                [2, rt.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, ut.a, ut.a, [[3, ut.a]]),
            l.xb(
              6,
              4407296,
              null,
              0,
              ct.a,
              [
                l.l,
                bt.a,
                l.h,
                ut.a,
                [2, ht.a],
                [2, nt.b],
                [2, nt.a],
                [2, dt.a],
                [2, gt.a],
              ],
              null,
              null,
            ),
            l.xb(
              7,
              147456,
              null,
              0,
              pt.a,
              [
                [2, Z.a],
                [2, at.a],
                [2, mt.a],
                [2, ct.a],
                [2, ft.b],
                l.l,
                vt.a,
                H.b,
              ],
              null,
              null,
            ),
            l.xb(
              8,
              147456,
              null,
              0,
              Ot.a,
              [[2, ct.a], [2, Z.a], [2, lt.b], Ct.a],
              null,
              null,
            ),
            l.xb(
              9,
              49152,
              null,
              0,
              S,
              [],
              { searchResult: [0, "searchResult"] },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 4, 0),
              t(e, 6, 0),
              t(
                e,
                9,
                0,
                null == e.parent.context.$implicit ||
                  null == e.parent.context.$implicit.staticObject
                  ? null
                  : e.parent.context.$implicit.staticObject.value,
              ));
          },
          function (t, e) {
            t(e, 1, 0, l.Nb(e, 6).markerClassEnabled);
          },
        );
      }
      function ze(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              8,
              "au3-phone-search-callstack-item",
              [],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l =
                      !1 !==
                        t.component.dialRecentcall(
                          null == t.parent.context.mib3Let
                            ? null
                            : t.parent.context.mib3Let.value,
                        ) && l),
                  l
                );
              },
              Gt,
              $t,
            )),
            l.xb(1, 147456, null, 0, tt.a, [l.l, l.z], null, null),
            l.xb(
              2,
              147456,
              null,
              0,
              et.a,
              [tt.a, [2, nt.a], [2, D.a], B.a],
              null,
              null,
            ),
            l.xb(
              3,
              212992,
              null,
              0,
              Z.a,
              [
                B.a,
                lt.b,
                et.a,
                [2, nt.a],
                [2, D.a],
                [2, at.a],
                [2, it.a],
                [2, ot.a],
                l.z,
                st.a,
                l.l,
                [2, rt.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, ut.a, ut.a, [[3, ut.a]]),
            l.xb(
              5,
              4407296,
              null,
              0,
              ct.a,
              [
                l.l,
                bt.a,
                l.h,
                ut.a,
                [2, ht.a],
                [2, nt.b],
                [2, nt.a],
                [2, dt.a],
                [2, gt.a],
              ],
              null,
              null,
            ),
            l.xb(
              6,
              147456,
              null,
              0,
              pt.a,
              [
                [2, Z.a],
                [2, at.a],
                [2, mt.a],
                [2, ct.a],
                [2, ft.b],
                l.l,
                vt.a,
                H.b,
              ],
              null,
              null,
            ),
            l.xb(
              7,
              147456,
              null,
              0,
              Ot.a,
              [[2, ct.a], [2, Z.a], [2, lt.b], Ct.a],
              null,
              null,
            ),
            l.xb(
              8,
              114688,
              null,
              0,
              T,
              [N.a, B.a],
              { searchResult: [0, "searchResult"] },
              null,
            ),
          ],
          function (t, e) {
            (t(e, 3, 0),
              t(e, 5, 0),
              t(
                e,
                8,
                0,
                null == e.parent.context.mib3Let
                  ? null
                  : e.parent.context.mib3Let.value,
              ));
          },
          function (t, e) {
            t(e, 0, 0, l.Nb(e, 5).markerClassEnabled);
          },
        );
      }
      function Fe(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              14,
              "au3-phone-search-contact-item",
              [],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [
                [null, "mib3Tap"],
                [null, "mib3Longpress"],
              ],
              function (t, e, n) {
                var l = !0,
                  a = t.component;
                return (
                  "mib3Tap" === e &&
                    (l =
                      !1 !==
                        a.selectContact(
                          null == t.parent.context.mib3Let
                            ? null
                            : t.parent.context.mib3Let.value,
                        ) && l),
                  "mib3Longpress" === e &&
                    (l =
                      !1 !==
                        a.openOptionsMenu(t.parent.context.mib3Let.value) && l),
                  l
                );
              },
              J,
              Q,
            )),
            l.xb(
              1,
              278528,
              null,
              0,
              Nt.i,
              [l.s, l.t, l.l, l.D],
              { ngClass: [0, "ngClass"] },
              null,
            ),
            l.Qb(2, { disabled: 0 }),
            l.xb(
              3,
              147456,
              null,
              0,
              at.a,
              [Tt.a, l.h, B.a, [3, at.a]],
              null,
              null,
            ),
            l.xb(4, 147456, null, 0, tt.a, [l.l, l.z], null, null),
            l.xb(
              5,
              147456,
              null,
              0,
              et.a,
              [tt.a, [2, nt.a], [2, D.a], B.a],
              null,
              null,
            ),
            l.xb(
              6,
              212992,
              null,
              0,
              Z.a,
              [
                B.a,
                lt.b,
                et.a,
                [2, nt.a],
                [2, D.a],
                [2, at.a],
                [2, it.a],
                [2, ot.a],
                l.z,
                st.a,
                l.l,
                [2, rt.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.xb(
              7,
              671744,
              null,
              0,
              It.a,
              [At.a, wt.i, at.a, Z.a, It.b, kt.a],
              {
                routeInfo: [0, "routeInfo"],
                routerParams: [1, "routerParams"],
              },
              null,
            ),
            l.xb(
              8,
              212992,
              null,
              0,
              Kt.a,
              [
                B.a,
                l.z,
                l.l,
                lt.b,
                st.a,
                et.a,
                [2, nt.a],
                [2, D.a],
                [2, at.a],
                [2, it.a],
                [2, ot.a],
                [2, rt.a],
              ],
              null,
              { longpress: "mib3Longpress" },
            ),
            l.Sb(131584, null, ut.a, ut.a, [[3, ut.a]]),
            l.xb(
              10,
              4407296,
              null,
              0,
              ct.a,
              [
                l.l,
                bt.a,
                l.h,
                ut.a,
                [2, ht.a],
                [2, nt.b],
                [2, nt.a],
                [2, dt.a],
                [2, gt.a],
              ],
              null,
              null,
            ),
            l.xb(
              11,
              147456,
              null,
              0,
              Xt.a,
              [[2, Kt.a], l.l, vt.a, H.b],
              null,
              null,
            ),
            l.xb(
              12,
              147456,
              null,
              0,
              pt.a,
              [
                [2, Z.a],
                [2, at.a],
                [2, mt.a],
                [2, ct.a],
                [2, ft.b],
                l.l,
                vt.a,
                H.b,
              ],
              null,
              null,
            ),
            l.xb(
              13,
              147456,
              null,
              0,
              Ot.a,
              [[2, ct.a], [2, Z.a], [2, lt.b], Ct.a],
              null,
              null,
            ),
            l.xb(
              14,
              49152,
              null,
              0,
              S,
              [],
              { searchResult: [0, "searchResult"] },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component,
              l = t(
                e,
                2,
                0,
                !n.contactValidationService.isContactValid(
                  null == e.parent.context.mib3Let ||
                    null == e.parent.context.mib3Let.value ||
                    null == e.parent.context.mib3Let.value.searchAdbEntry
                    ? null
                    : e.parent.context.mib3Let.value.searchAdbEntry.contact,
                  n.viewContext,
                ),
              );
            (t(e, 1, 0, l),
              t(e, 6, 0),
              t(
                e,
                7,
                0,
                n.addressbookRoute,
                null == e.parent.context.mib3Let ||
                  null == e.parent.context.mib3Let.value ||
                  null == e.parent.context.mib3Let.value.searchAdbEntry ||
                  null == e.parent.context.mib3Let.value.searchAdbEntry.contact
                  ? null
                  : e.parent.context.mib3Let.value.searchAdbEntry.contact.id,
              ),
              t(e, 8, 0),
              t(e, 10, 0),
              t(
                e,
                14,
                0,
                null == e.parent.context.mib3Let
                  ? null
                  : e.parent.context.mib3Let.value,
              ));
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              l.Nb(e, 3).combinedDisabled,
              l.Nb(e, 3).useBrighterIcon,
              l.Nb(e, 10).markerClassEnabled,
            );
          },
        );
      }
      function Re(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              8,
              "au3-phone-search-favorite-item",
              [],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "mib3Tap" === e &&
                    (l =
                      !1 !==
                        t.component.dialFavorite(
                          null == t.parent.context.mib3Let
                            ? null
                            : t.parent.context.mib3Let.value,
                        ) && l),
                  l
                );
              },
              Qt,
              Zt,
            )),
            l.xb(1, 147456, null, 0, tt.a, [l.l, l.z], null, null),
            l.xb(
              2,
              147456,
              null,
              0,
              et.a,
              [tt.a, [2, nt.a], [2, D.a], B.a],
              null,
              null,
            ),
            l.xb(
              3,
              212992,
              null,
              0,
              Z.a,
              [
                B.a,
                lt.b,
                et.a,
                [2, nt.a],
                [2, D.a],
                [2, at.a],
                [2, it.a],
                [2, ot.a],
                l.z,
                st.a,
                l.l,
                [2, rt.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, ut.a, ut.a, [[3, ut.a]]),
            l.xb(
              5,
              4407296,
              null,
              0,
              ct.a,
              [
                l.l,
                bt.a,
                l.h,
                ut.a,
                [2, ht.a],
                [2, nt.b],
                [2, nt.a],
                [2, dt.a],
                [2, gt.a],
              ],
              null,
              null,
            ),
            l.xb(
              6,
              147456,
              null,
              0,
              pt.a,
              [
                [2, Z.a],
                [2, at.a],
                [2, mt.a],
                [2, ct.a],
                [2, ft.b],
                l.l,
                vt.a,
                H.b,
              ],
              null,
              null,
            ),
            l.xb(
              7,
              147456,
              null,
              0,
              Ot.a,
              [[2, ct.a], [2, Z.a], [2, lt.b], Ct.a],
              null,
              null,
            ),
            l.xb(
              8,
              49152,
              null,
              0,
              I,
              [B.a],
              {
                showInfoIcon: [0, "showInfoIcon"],
                searchResult: [1, "searchResult"],
              },
              null,
            ),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 3, 0),
              t(e, 5, 0),
              t(
                e,
                8,
                0,
                null ==
                  n.adbService.onlyFavoriteNumberContact(
                    null == e.parent.context.mib3Let
                      ? null
                      : e.parent.context.mib3Let.value,
                  ),
                null == e.parent.context.mib3Let
                  ? null
                  : e.parent.context.mib3Let.value,
              ));
          },
          function (t, e) {
            t(e, 0, 0, l.Nb(e, 5).markerClassEnabled);
          },
        );
      }
      function De(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              7,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            l.xb(
              1,
              16384,
              null,
              0,
              Nt.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, ze)),
            l.xb(
              3,
              278528,
              null,
              0,
              Nt.p,
              [l.P, l.L, Nt.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Fe)),
            l.xb(
              5,
              278528,
              null,
              0,
              Nt.p,
              [l.P, l.L, Nt.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(16777216, null, null, 1, null, Re)),
            l.xb(
              7,
              278528,
              null,
              0,
              Nt.p,
              [l.P, l.L, Nt.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), l.hb(0, null, null, 0)),
          ],
          function (t, e) {
            var n = e.component;
            (t(
              e,
              1,
              0,
              null == e.context.mib3Let ? null : e.context.mib3Let.source,
            ),
              t(e, 3, 0, n.sourceEnum.CALLSTACK),
              t(e, 5, 0, n.sourceEnum.CONTACTS),
              t(e, 7, 0, n.sourceEnum.FAVORITES));
          },
          null,
        );
      }
      function $e(t) {
        return l.ac(
          0,
          [
            (t()(), l.hb(16777216, null, null, 1, null, De)),
            l.xb(
              1,
              16384,
              null,
              0,
              Jt.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            (t()(), l.hb(0, null, null, 0)),
          ],
          function (t, e) {
            t(
              e,
              1,
              0,
              null == e.parent.context.$implicit
                ? null
                : e.parent.context.$implicit.staticObject,
            );
          },
          null,
        );
      }
      function Be(t) {
        return l.ac(
          0,
          [
            (t()(), l.hb(16777216, null, null, 1, null, Ee)),
            l.xb(
              1,
              16384,
              null,
              0,
              Nt.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (t()(),
            l.hb(0, [["phoneSearchItemTemplate", 2]], null, 0, null, $e)),
          ],
          function (t, e) {
            var n = e.component;
            t(
              e,
              1,
              0,
              n.searchType === n.searchTypeEnum.MessagingAddressbook,
              l.Nb(e, 2),
            );
          },
          null,
        );
      }
      function Ue(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
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
              te.b,
              te.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              D.a,
              [l.l, l.D, $.a, B.a, [3, D.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 16384, null, 0, Mt.a, [], null, null),
            l.xb(
              3,
              114688,
              null,
              0,
              ee.a,
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
          function (t, e) {
            var n = e.component;
            (t(e, 1, 0, "OptionMenuSelectedItem"),
              t(
                e,
                3,
                0,
                null == e.context.$implicit ? null : e.context.$implicit.name,
                null == e.context.$implicit
                  ? null
                  : e.context.$implicit.company,
                !(null == e.context.$implicit || !e.context.$implicit.company),
                n.listItemType.ITEM_TYPE_NO_END_ICON,
              ));
          },
          null,
        );
      }
      function Ye(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              29,
              "au3-screen",
              [
                ["id", "Screen:PHONE_SEARCH"],
                ["ttDisplayVariant", ""],
              ],
              null,
              null,
              null,
              ne.b,
              ne.a,
            )),
            l.xb(1, 16384, null, 0, le.a, [], null, null),
            l.xb(
              2,
              212992,
              null,
              0,
              D.a,
              [l.l, l.D, $.a, B.a, [3, D.a], [6, le.a]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(3, 4440064, null, 0, it.a, [B.a], { id: [0, "id"] }, null),
            (t()(),
            l.yb(
              4,
              0,
              null,
              0,
              4,
              "au3-truffle-search-title",
              [],
              null,
              [[null, "backButtonTap"]],
              function (t, e, n) {
                var l = !0;
                return (
                  "backButtonTap" === e &&
                    (l = !1 !== t.component.controller.onBackButtonTap() && l),
                  l
                );
              },
              ae.b,
              ae.a,
            )),
            l.xb(
              5,
              212992,
              null,
              0,
              D.a,
              [l.l, l.D, $.a, B.a, [3, D.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            l.xb(
              6,
              49152,
              null,
              0,
              ie.a,
              [],
              {
                inputField: [0, "inputField"],
                inputFieldPlaceholderDeveloperText: [
                  1,
                  "inputFieldPlaceholderDeveloperText",
                ],
                hitCount: [2, "hitCount"],
                hasLoader: [3, "hasLoader"],
                loaderActive: [4, "loaderActive"],
                hideRightPadding: [5, "hideRightPadding"],
                disableSDS: [6, "disableSDS"],
              },
              { backButtonTap: "backButtonTap" },
            ),
            l.Pb(131072, Nt.b, [l.h]),
            l.Pb(131072, Nt.b, [l.h]),
            (t()(),
            l.yb(
              9,
              0,
              null,
              0,
              4,
              "au3-truffle-search-suggestions",
              [["id", ""]],
              null,
              null,
              null,
              oe.b,
              oe.a,
            )),
            l.xb(
              10,
              212992,
              null,
              0,
              D.a,
              [l.l, l.D, $.a, B.a, [3, D.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              11,
              180224,
              null,
              0,
              se.a,
              [],
              {
                initialSuggestions: [0, "initialSuggestions"],
                dynamicSuggestions: [1, "dynamicSuggestions"],
                inputField: [2, "inputField"],
              },
              null,
            ),
            l.Pb(131072, Nt.b, [l.h]),
            l.Pb(131072, Nt.b, [l.h]),
            (t()(),
            l.yb(
              14,
              0,
              null,
              0,
              9,
              "au3-truffle-search-keyboard-list",
              [
                ["class", "keyboard"],
                ["id", ""],
              ],
              null,
              null,
              null,
              re.b,
              re.a,
            )),
            l.xb(
              15,
              212992,
              null,
              0,
              D.a,
              [l.l, l.D, $.a, B.a, [3, D.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              16,
              4898816,
              null,
              0,
              ue.a,
              [ce.a, Y.a, $.a, H.b, be.a, he.a, de.a, B.a],
              {
                items: [0, "items"],
                waitingForInput: [1, "waitingForInput"],
                searchInProgress: [2, "searchInProgress"],
                searchCompleted: [3, "searchCompleted"],
                listItemHeight: [4, "listItemHeight"],
                listItemHeightFunction: [5, "listItemHeightFunction"],
                itemTemplate: [6, "itemTemplate"],
                helpTextTemplate: [7, "helpTextTemplate"],
                noResultsTemplate: [8, "noResultsTemplate"],
                inputField: [9, "inputField"],
                contextId: [10, "contextId"],
              },
              null,
            ),
            l.Pb(131072, Nt.b, [l.h]),
            l.Pb(131072, Nt.b, [l.h]),
            l.Pb(131072, Nt.b, [l.h]),
            l.Pb(131072, Nt.b, [l.h]),
            (t()(), l.hb(0, [["helpTextTemplate", 2]], null, 0, null, we)),
            (t()(), l.hb(0, [["noResultTemplate", 2]], null, 0, null, ke)),
            (t()(), l.hb(0, [["itemTemplate", 2]], null, 0, null, Be)),
            (t()(),
            l.yb(
              24,
              0,
              null,
              0,
              5,
              "au3-option-menu-wrapper",
              [],
              null,
              null,
              null,
              ge.b,
              ge.a,
            )),
            l.Sb(6144, null, pe.b, null, [me.a]),
            l.Sb(512, null, gt.a, gt.a, [[3, gt.a]]),
            l.xb(
              27,
              245760,
              null,
              1,
              me.a,
              [fe.a, ve.a, l.h, gt.a],
              { ttEnumType: [0, "ttEnumType"] },
              null,
            ),
            l.Tb(603979776, 1, { template: 0 }),
            (t()(), l.hb(0, [[1, 2]], null, 0, null, Ue)),
          ],
          function (t, e) {
            var n = e.component;
            (t(e, 2, 0, "Screen:PHONE_SEARCH"),
              t(e, 3, 0, "Screen:PHONE_SEARCH"),
              t(e, 5, 0, n.placeholderIdKey, n.placeholderIdEnum),
              t(
                e,
                6,
                0,
                n.inputField,
                n.placeholderId,
                l.Yb(
                  e,
                  6,
                  2,
                  l.Nb(e, 7).transform(n.controller.searchResultCount$),
                ),
                !0,
                l.Yb(
                  e,
                  6,
                  4,
                  l.Nb(e, 8).transform(n.controller.searchInProgress$),
                ),
                !0,
                n.searchType === n.searchTypeEnum.MessagingAddressbook,
              ),
              t(e, 10, 0, ""),
              t(
                e,
                11,
                0,
                l.Yb(
                  e,
                  11,
                  0,
                  l.Nb(e, 12).transform(n.controller.initialSuggestions$),
                ),
                l.Yb(
                  e,
                  11,
                  1,
                  l.Nb(e, 13).transform(n.controller.dynamicSuggestions$),
                ),
                n.inputField,
              ),
              t(e, 15, 0, ""),
              t(e, 16, 1, [
                l.Yb(e, 16, 0, l.Nb(e, 17).transform(n.searchResults$)),
                l.Yb(
                  e,
                  16,
                  1,
                  l.Nb(e, 18).transform(n.controller.searchWaitingForInput$),
                ),
                l.Yb(
                  e,
                  16,
                  2,
                  l.Nb(e, 19).transform(n.controller.searchInProgress$),
                ),
                l.Yb(
                  e,
                  16,
                  3,
                  l.Nb(e, 20).transform(n.controller.searchCompleted$),
                ),
                n.itemHeight,
                n.listItemHeightFunction,
                l.Nb(e, 23),
                l.Nb(e, 21),
                l.Nb(e, 22),
                n.inputField,
                n.controller.getContextId(),
              ]),
              t(e, 27, 0, n.optionTypeEnum));
          },
          null,
        );
      }
      function He(t) {
        return l.ac(
          0,
          [
            (t()(),
            l.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-phone-search",
              [],
              null,
              null,
              null,
              Ye,
              Ae,
            )),
            l.Sb(6144, null, fe.a, null, [A.b]),
            l.Sb(131584, null, s.a, s.a, [
              At.a,
              Oe.c,
              g.c,
              Ce.a,
              Pe.a,
              w.a,
              B.a,
            ]),
            l.Sb(2048, null, m.a.INPUT_MODEL, null, [s.a]),
            l.Sb(2048, null, m.a.ROUTING, null, [s.a]),
            l.Sb(2048, null, m.a.SEARCH, null, [s.a]),
            l.Sb(2048, null, m.a.INITIAL_SUGGESTION, null, [s.a]),
            l.Sb(2048, null, m.a.DYNAMIC_SUGGESTION, null, [s.a]),
            l.Sb(131584, null, m.b, m.b, [
              m.a.INPUT_MODEL,
              [2, m.a.INITIAL_INPUT],
              m.a.ROUTING,
              m.a.SEARCH,
              m.a.INITIAL_SUGGESTION,
              m.a.DYNAMIC_SUGGESTION,
              xe.a,
              B.a,
            ]),
            l.Sb(131584, null, A.b, A.b, [
              ve.a,
              _e.b,
              ye.a,
              w.a,
              v.c,
              Me.a,
              Se.b,
              Ne.a,
              Le.a,
              Te.a,
              B.a,
            ]),
            l.xb(
              10,
              4440064,
              null,
              0,
              E,
              [
                m.b,
                w.a,
                At.a,
                s.a,
                Ie.a,
                g.c,
                C.c,
                P.a,
                P.a,
                o.a,
                A.b,
                ve.a,
                M.a,
                B.a,
              ],
              null,
              null,
            ),
          ],
          function (t, e) {
            t(e, 10, 0);
          },
          null,
        );
      }
      var je = l.ub("au3-phone-search", E, He, {}, {}, []),
        Ve = n("aDqW"),
        Ge = n("/W5r"),
        Ke = n("+Qv1"),
        Xe = n("XtoR"),
        Ze = n("jTHl"),
        We = n("zL3T"),
        qe = n("+epw"),
        Qe = n("zMPs"),
        Je = n("6Yk8"),
        tn = n("u6+O"),
        en = n("CIQC"),
        nn = n("REmV"),
        ln = n("Y3N+"),
        an = n("MJxn"),
        on = n("eIOF"),
        sn = n("t+4g"),
        rn = n("myjn"),
        un = n("fOZ7"),
        cn = n("QDrj"),
        bn = n("YCQm"),
        hn = n("TBks"),
        dn = n("yUFt"),
        gn = l.vb(z, [], function (t) {
          return l.Kb([
            l.Lb(512, l.j, l.X, [[8, [F.a, je]], [3, l.j], l.x]),
            l.Lb(4608, Nt.m, Nt.l, [l.u]),
            l.Lb(4608, Ve.h, Ve.g, []),
            l.Lb(4608, Ve.d, Ve.f, []),
            l.Lb(4608, Ve.j, Ve.e, []),
            l.Lb(4608, Ve.c, Ve.b, []),
            l.Lb(4608, Ve.k, Ve.k, [
              Ve.l,
              Ve.h,
              Ve.d,
              Ve.j,
              Ve.c,
              Ve.m,
              Ve.o,
              Ve.n,
              Ve.a,
            ]),
            l.Lb(4608, Ge.b, Ge.b, [Ke.e, [2, Ge.a]]),
            l.Lb(4608, Xe.b, Xe.b, [Ke.e, [2, Xe.a]]),
            l.Lb(4608, Ze.b, Ze.b, [Ke.e, [2, Ze.a]]),
            l.Lb(4608, We.b, We.b, [Ke.e, [2, We.a]]),
            l.Lb(1073742336, Nt.c, Nt.c, []),
            l.Lb(1073742336, Ve.i, Ve.i, []),
            l.Lb(1073742336, qe.a, qe.a, []),
            l.Lb(1073742336, Qe.a, Qe.a, []),
            l.Lb(1073742336, Je.a, Je.a, []),
            l.Lb(1073742336, tn.a, tn.a, []),
            l.Lb(1073742336, en.a, en.a, []),
            l.Lb(1073742336, nn.a, nn.a, []),
            l.Lb(1073742336, ln.a, ln.a, []),
            l.Lb(1073742336, an.a, an.a, []),
            l.Lb(1073742336, on.a, on.a, []),
            l.Lb(1073742336, sn.a, sn.a, []),
            l.Lb(1073742336, rn.a, rn.a, []),
            l.Lb(1073742336, un.a, un.a, []),
            l.Lb(1073742336, cn.a, cn.a, []),
            l.Lb(1073742336, bn.a, bn.a, []),
            l.Lb(1073742336, hn.a, hn.a, []),
            l.Lb(1073742336, dn.a, dn.a, []),
            l.Lb(1073742336, Ie.n, Ie.n, [
              [2, Ie.s],
              [2, Ie.m],
            ]),
            l.Lb(1073742336, z, z, []),
            l.Lb(256, Ve.o, void 0, []),
            l.Lb(256, Ve.m, void 0, []),
            l.Lb(256, Ve.n, void 0, []),
            l.Lb(256, Ve.a, void 0, []),
            l.Lb(
              1024,
              Ie.k,
              function () {
                return [
                  [
                    {
                      path: "",
                      children: [
                        {
                          path: ":searchType",
                          component: E,
                          pathMatch: "full",
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
    oJGs: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return b;
      }),
        n.d(e, "b", function () {
          return h;
        }));
      var l = n("QQZH"),
        a = n("HM3f"),
        i = n("TLy2"),
        o = n("kuMc"),
        s = n("YtkY"),
        r = n("Yi6/"),
        u = (n("sK8D"), n("6xFL"), n("GZoL"), n("d3LF"), n("IXiK")),
        c = n("XY/Y"),
        b =
          (n("xS3h"),
          n("ONRh"),
          n("3Sae"),
          (function (t) {
            return (
              (t.AddAsFavorite = "Als Favorit\nspeichern"),
              (t.SendContact = "Kontakt\nversenden"),
              (t.NewSms = "SMS\nsenden"),
              (t.NewEmail = "Email\nsenden"),
              (t.SaveAs = "als Shortcut\nspeichern"),
              t
            );
          })({}));
      class h {
        constructor(t, e, n, a, s, c, h, d, g, p, m) {
          ((this.optionMenuService = t),
            (this.messagingContextService = e),
            (this.messagingInfoService = n),
            (this.addressbookService = a),
            (this.naviRoutingService = s),
            (this.addressFormattingservice = c),
            (this.shortcutsOptionsService = h),
            (this.usermanagementService = d),
            (this.shortCutFactoryService = g),
            (this.popupManager = p),
            (this.destroy$$ = new l.a(1)),
            (this.options$$ = new l.a(1)),
            (this.addAsFavoriteOption = {
              icon: "E16E_addressbook_save_as_favorite.webp",
              developerText: "Als Favorit\nspeichern",
              visible: !0,
              enabled: !0,
              disabledReason: r.Ob.POPUP_PHONE_POPUP_FAVOURITE_FULL,
              textId: b.AddAsFavorite,
            }),
            (this.sendContact = {
              icon: "E844_addressbook_send_contactcard.webp",
              developerText: "Kontakt\nversenden",
              visible: !1,
              enabled: !0,
              textId: b.SendContact,
            }),
            (this.newSmsOption = {
              icon: "E2A7_messaging_write_new_sms.webp",
              developerText: "SMS\nsenden",
              visible: !0,
              enabled: !0,
              textId: b.NewSms,
            }),
            (this.newEmailOption = {
              icon: "E2A8_messaging_write_new_email.webp",
              developerText: "Email\nsenden",
              visible: !0,
              enabled: !0,
              textId: b.NewEmail,
            }),
            (this.saveAsPresetOption = {
              icon: "E3F0_save_shortcut_preset.webp",
              developerText: "als Shortcut\nspeichern",
              visible: !1,
              enabled: !1,
              textId: b.SaveAs,
            }),
            (this.options = [
              this.addAsFavoriteOption,
              this.sendContact,
              this.newSmsOption,
              this.newEmailOption,
              this.saveAsPresetOption,
            ]),
            (this.options$ = this.options$$.asObservable()),
            (this.logger = m.getLogger(
              "addressbook.AddressbookOptionsService",
            )),
            (this.canSendSMS$ =
              this.messagingInfoService.isSendingPossibleForFocusDevice(
                u.a.SMS,
              )),
            (this.canSendMail$ =
              this.messagingInfoService.isSendingPossibleForFocusDevice(
                u.a.MAIL,
              )),
            this.optionMenuService.item$
              .pipe(
                Object(i.a)((t) => this.initOptionsForContact(t)),
                Object(o.a)(this.destroy$$),
              )
              .subscribe((t) => {
                this.options$$.next(t);
              }));
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        onOptionTap(t) {
          switch (t.option) {
            case this.addAsFavoriteOption:
              this.addressbookService.addContactAsFavorite(t.item);
              break;
            case this.sendContact:
              const e = this.contactToString(t.item);
              this.messagingContextService.enterMessagingFromOutside({
                messageText: e,
              });
              break;
            case this.newSmsOption:
              this.newSmsMessageTo(t.item);
              break;
            case this.newEmailOption:
              this.newEmailTo(t.item);
              break;
            case this.saveAsPresetOption:
              this.saveAsPreset(t.item);
              break;
            default:
              this.logger.error(
                "Received option tap event with unexpected type: ",
                event,
              );
          }
        }
        canShowOptionsForContact(t) {
          return this.initOptionsForContact(t).pipe(
            Object(o.a)(this.destroy$$),
            Object(s.a)((t) => t.length > 0 && t.some((t) => t.visible)),
          );
        }
        initOptionsForContact(t) {
          return Object(a.b)(this.canSendSMS$, this.canSendMail$).pipe(
            Object(o.a)(this.destroy$$),
            Object(s.a)(([e, n]) => {
              if (t) {
                const l =
                  this.addressbookService.getCurrentFocusDeviceProfile();
                if (
                  (this.updateAddAsFavoriteOption(l, t),
                  (this.newEmailOption.visible = n && !!t.emailList),
                  (this.newEmailOption.enabled =
                    !!t.emailList && t.emailList.length > 0),
                  t.emailList &&
                    0 === t.emailList.length &&
                    (this.newEmailOption.disabledReason =
                      r.Ob.POPUP_ADB_DETAIL_NO_MAIL_ACCOUNT_AVAILABLE),
                  (this.newSmsOption.visible = e && !!t.phoneNumberList),
                  (this.newSmsOption.enabled =
                    !!t.phoneNumberList && t.phoneNumberList.length > 0),
                  (this.sendContact.visible = n || e),
                  this.naviRoutingService.isContextActive &&
                    t.addressList &&
                    t.addressList.length > 0)
                ) {
                  const e = this.shortcutsOptionsService.saveShortcutOption(
                    this.shortCutFactoryService.createAddressShortcutFromContact(
                      t,
                      void 0,
                      !0,
                    ),
                  );
                  ((this.saveAsPresetOption.visible = e.visible),
                    (this.saveAsPresetOption.enabled = e.enabled),
                    (this.saveAsPresetOption.disabledReason =
                      e.disabledReason));
                } else if (t.phoneNumberList && t.phoneNumberList.length > 0) {
                  const e = this.shortcutsOptionsService.saveShortcutOption(
                    this.shortCutFactoryService.createShortcutFromContact(t),
                  );
                  ((this.saveAsPresetOption.visible = e.visible),
                    this.usermanagementService.isGuestAccountActive() ||
                    this.usermanagementService.isOfflineAccountActive()
                      ? ((this.saveAsPresetOption.enabled = !1),
                        (this.saveAsPresetOption.disabledReason =
                          r.Ob.POPUP_PRESET_TEL_GUEST))
                      : ((this.saveAsPresetOption.enabled = e.enabled),
                        (this.saveAsPresetOption.disabledReason =
                          e.disabledReason)));
                } else
                  ((this.saveAsPresetOption.visible = !1),
                    (this.saveAsPresetOption.enabled = !1));
                return this.options;
              }
              return (
                this.logger.warn(
                  "initOptionsForContact: attempted to resolve options for invalid item: ",
                  t,
                ),
                []
              );
            }),
          );
        }
        updateAddAsFavoriteOption(t, e) {
          const n = !!t && !!t.maxFavorites,
            l = n && !!t.favorites && t.favorites.length >= t.maxFavorites;
          this.addAsFavoriteOption.visible =
            !this.naviRoutingService.isContextActive &&
            !!e &&
            !!e.phoneNumberList &&
            e.phoneNumberList.length > 0;
          const a =
            e &&
            e.phoneNumberList &&
            e.phoneNumberList.every((t) => !!t && !!t.isFavorite);
          ((this.addAsFavoriteOption.enabled = n && !l && !a),
            (this.addAsFavoriteOption.icon = a
              ? "E16E_addressbook_save_as_favorite_enabled.webp"
              : "E16E_addressbook_save_as_favorite.webp"),
            this.logger.info(
              "initOptionsForContact: favorites option enabled?",
              this.addAsFavoriteOption.enabled,
            ),
            a
              ? (this.addAsFavoriteOption.disabledReason =
                  r.Ob.POPUP_ADB_DETAIL_OPTION_STORE_FAVORITE_ALREADY_EXISTING)
              : l &&
                (this.addAsFavoriteOption.disabledReason =
                  r.Ob.POPUP_PHONE_POPUP_FAVOURITE_FULL));
        }
        newSmsMessageTo(t) {
          this.messagingContextService
            .enterMessagingSMS({ contact: t })
            .then((t) => {
              this.logger.info("Enter send sms from adb: " + t);
            })
            .catch((t) => {
              this.logger.error(
                "Failed to create new SMS message for caller.\nReason: " + t,
              );
            });
        }
        newEmailTo(t) {
          this.messagingContextService
            .enterMessagingMail({ contact: t })
            .then((t) => {
              this.logger.info("Enter send sms from adb: " + t);
            })
            .catch((t) => {
              this.logger.error(
                "Failed to create new Email message for caller.\nReason: " + t,
              );
            });
        }
        saveAsPreset(t) {
          if (this.naviRoutingService.isContextActive) {
            if (!t || !t.addressList)
              return void this.logger.error(
                "saveAsPreset: can't  store a contact without an address",
                t,
              );
            t.addressList.length > 1
              ? this.popupManager.request(
                  r.Ob.POPUP_ADB_MAIN_OPTION_FAV_DISAMBIGUATION,
                  { data: { contact: t, forPresets: !0, navigation: !0 } },
                )
              : this.shortcutsOptionsService.saveShortcut(
                  this.shortCutFactoryService.createAddressShortcutFromContact(
                    t,
                    void 0,
                    !0,
                  ),
                );
          } else {
            if (!t || !t.phoneNumberList)
              return void this.logger.error(
                "saveAsPreset: can't  store a contact without a number",
                t,
              );
            t.phoneNumberList.length > 1
              ? this.popupManager.request(
                  r.Ob.POPUP_ADB_MAIN_OPTION_FAV_DISAMBIGUATION,
                  { data: { contact: t, forPresets: !0 } },
                )
              : this.shortcutsOptionsService.saveShortcut(
                  this.shortCutFactoryService.createShortcutFromContact(t),
                );
          }
        }
        contactToString(t) {
          const e = this.addressbookService.getSortOrder(),
            n = [];
          switch (e) {
            case c.g.FIRSTNAMELASTNAME:
              (n.push(t.firstName || void 0), n.push(t.lastName || void 0));
              break;
            default:
              (n.push(t.lastName || void 0), n.push(t.firstName || void 0));
          }
          const l = t.addressList || [],
            a = t.emailList || [];
          return (
            (t.phoneNumberList || []).forEach((t) => {
              n.push((t && t.number) || void 0);
            }),
            l.forEach((t) => {
              n.push((t && this.formatAddress(t)) || void 0);
            }),
            a.forEach((t) => {
              n.push((t && t.address) || void 0);
            }),
            n.filter((t) => !!t).join("\n")
          );
        }
        formatAddress(t) {
          const e = this.addressFormattingservice.getLinesWithoutFallback(
            1,
            this.mapAdbAddressToNavAddress(t),
          );
          return e && e.length > 0 ? e[0] : void 0;
        }
        mapAdbAddressToNavAddress(t) {
          return {
            city: t.city,
            country: t.country,
            state: t.state,
            street: t.street,
            zipCode: t.zipCode,
            latitude: t.geoLatitude,
            longitude: t.geoLongitude,
          };
        }
      }
    },
    pqkN: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var l = n("XY/Y"),
        a = (n("Yi6/"), n("kZht")),
        i = n("yNay");
      let o = (() => {
        class t {
          constructor(t) {
            this.logger = t.getLogger("addressbook.ContactValidationService");
          }
          isContactValid(t, e) {
            if (!t)
              return (
                this.logger.warn(
                  "isContactValid: contactObject is not valid",
                  t,
                ),
                !1
              );
            switch (e) {
              case l.b.PHONE:
                return !!t.phoneNumberList && t.phoneNumberList.length > 0;
              case l.b.EMAIL:
                return !!t.emailList && t.emailList.length > 0;
              case l.b.NAVIGATION:
                let e = !1;
                return (
                  t.addressList &&
                    t.addressList.length > 0 &&
                    (e =
                      t.addressList.filter(
                        (t) => t.street || t.zipCode || t.city,
                      ).length > 0),
                  e
                );
              default:
                return !0;
            }
          }
        }
        return (
          (t.ɵprov = a.bc({
            factory: function () {
              return new t(a.cc(i.a));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
  },
]);
