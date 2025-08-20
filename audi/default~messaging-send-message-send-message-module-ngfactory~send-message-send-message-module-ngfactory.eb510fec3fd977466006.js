(window.webpackJsonp = window.webpackJsonp || []).push([
  [55],
  {
    "e+pb": function (e, l, n) {
      "use strict";
      (n.d(l, "b", function () {
        return $;
      }),
        n.d(l, "a", function () {
          return E;
        }));
      var t = n("QQZH"),
        a = n("C05f"),
        i = n("HM3f"),
        u = n("ROBh"),
        o = n("6Oco"),
        s = n("IdLP"),
        c = n("YtkY"),
        r = n("xVbo"),
        b = n("Ohay"),
        d = n("kuMc"),
        p = n("fnmL"),
        h = n("TLy2"),
        m = n("BwBJ"),
        g = n("8j5Y"),
        x = n("J+dc"),
        S = n("AEBN"),
        v = n("Yi6/"),
        y = n("Zbi+"),
        T = n("zcBZ"),
        f = n("q+H2"),
        O = (n("VDgF"), n("YEFf"), n("j7uj")),
        L = n("pWIT"),
        I = (n("6xFL"), n("P1io")),
        $ = (function (e) {
          return (
            (e.Global = "global"),
            (e.Addressbook = "addressbook"),
            (e.MessagingAddressbook = "messaging-addressbook"),
            (e.CallHistory = "call-history"),
            (e.Favorites = "favorites"),
            e
          );
        })({});
      class E {
        constructor(e, l, n, u, o, s, m) {
          ((this.routingService = e),
            (this.textInputService = l),
            (this.phoneService = n),
            (this.searchService = u),
            (this.proposalValidationService = o),
            (this.addressbookService = s),
            (this.initialSuggestions$$ = new t.a(1)),
            (this.searchResults$$ = new t.a(1)),
            (this.searchStatus$$ = new a.a(O.a.WaitingForInput)),
            (this.searchId$$ = new a.a("")),
            (this.searchType$$ = new t.a(1)),
            (this.searchDeviceId$$ = new t.a(1)),
            (this.needles$$ = new a.a([])),
            (this.destroyed$$ = new t.a(1)),
            (this.logger = m.getLogger("phone.PhoneSearchProviderService")),
            (this.deviceToSearch$ = Object(i.b)(
              this.phoneService.phones$,
              this.searchDeviceId$$,
            ).pipe(
              Object(c.a)(([e, l]) =>
                l
                  ? e.find((e) => !!e.device && e.device.id === l)
                  : e.focusDevice,
              ),
              Object(r.a)(v.wd),
              Object(b.a)((e, l) => e.id === l.id),
              Object(v.pd)(this.logger, "constructor: deviceToSearch$:"),
              Object(v.Kd)(),
            )));
          const g = this.searchType$$.pipe(
              Object(b.a)(),
              Object(c.a)((e) => {
                switch (e) {
                  case $.CallHistory:
                    return [T.d.CALLSTACK];
                  case $.MessagingAddressbook:
                  case $.Addressbook:
                    return [T.d.CONTACTS];
                  case $.Favorites:
                    return [T.d.FAVORITES];
                  default:
                    return [T.d.CALLSTACK, T.d.FAVORITES, T.d.CONTACTS];
                }
              }),
            ),
            x = this.needles$$.pipe(Object(b.a)(v.Xd));
          ((this.isEmptySearch$ = x.pipe(
            Object(c.a)((e) => Object(f.a)(e)),
            Object(d.a)(this.destroyed$$),
          )),
            this.deviceToSearch$
              .pipe(
                Object(p.a)(g, x),
                Object(h.a)(([e, l, n]) => this.createSearchForDevice(e, l, n)),
                Object(d.a)(this.destroyed$$),
              )
              .subscribe((e) => {
                this.searchId$$.next(e || "");
              }),
            (this.searchId$ = this.searchId$$.pipe(Object(b.a)())),
            (this.searchResults$ = this.searchResults$$.pipe(
              Object(c.a)((e) => e.map((e) => new L.a(e))),
            )),
            (this.searchStatus$ = this.searchStatus$$),
            (this.initialSuggestions$ = this.initialSuggestions$$.pipe(
              Object(c.a)((e) => e.map((e) => ({ text: e }))),
            )),
            this.subscribeToSearchService());
        }
        convert(e) {
          if (e) return T.b[y.l[e]];
        }
        subscribeToSearchService() {
          const e = this.searchId$.pipe(
              Object(h.a)((e) =>
                e
                  ? this.searchService
                      .searchResults$(e, Object(u.a)({ offset: 0, limit: 100 }))
                      .pipe(Object(c.a)((e) => e.data || []))
                  : Object(u.a)([]),
              ),
              Object(v.Kd)(),
            ),
            l = Object(i.b)(
              this.addressbookService.hideInvalidContacts$,
              this.addressbookService
                .contacts$(Object(u.a)({ offset: 0, limit: 100 }))
                .pipe(Object(c.a)((e) => e.data || [])),
            ).pipe(
              Object(c.a)(([e, l]) =>
                (e ? l.filter((e) => this.isContactValidForContext(e)) : l).map(
                  (e) => ({
                    id: "",
                    uri: "",
                    name: e.name,
                    combinedName: { text: e.name },
                    searchAdbEntry: { contact: e, isFavorite: !1 },
                  }),
                ),
              ),
            ),
            n = this.phoneService.groupedRecentCalls$.pipe(
              Object(c.a)((e) =>
                e.map((e) => {
                  const l = e.entries && e.entries[0];
                  return {
                    id: "",
                    uri: "",
                    name: e.name,
                    combinedName: { text: e.name },
                    numbers: [
                      {
                        number: { text: e.phoneNumber },
                        numberType: e.phoneNumberType,
                      },
                    ],
                    searchCallstackEntry: {
                      timestamp: l && l.timestamp,
                      type: this.convert(l && l.type),
                      contact: e.contact,
                    },
                  };
                }),
              ),
            ),
            t = this.addressbookService.favorites$.pipe(
              Object(h.a)((e) => {
                const l = e.map((e) => this.mapFavoriteToSearchResult(e));
                return l.length < 1 ? Object(u.a)([]) : Object(i.b)(...l);
              }),
            ),
            a = this.searchType$$.pipe(
              Object(h.a)((e) => {
                switch (e) {
                  case $.Addressbook:
                    return l;
                  case $.CallHistory:
                    return n;
                  case $.Favorites:
                    return t;
                  default:
                    return Object(u.a)([]);
                }
              }),
            );
          (e
            .pipe(
              Object(p.a)(a, this.searchStatus$),
              Object(d.a)(this.destroyed$$),
            )
            .subscribe(([e, l, n]) => {
              this.searchResults$$.next(
                (n === O.a.WaitingForInput ? l : e).map((e) => {
                  let l;
                  return (
                    (l = e.searchAdbEntry
                      ? e.searchAdbEntry.isFavorite
                        ? T.d.FAVORITES
                        : T.d.CONTACTS
                      : T.d.CALLSTACK),
                    { source: l, value: e }
                  );
                }),
              );
            }),
            this.searchId$
              .pipe(
                Object(b.a)(),
                Object(h.a)((e) =>
                  e ? this.searchService.searchState$(e) : Object(u.a)(void 0),
                ),
                Object(p.a)(this.needles$$, e),
                Object(h.a)(([e, l, n]) => {
                  const t = !!e && e.state === T.e.DONE;
                  return l && l[0]
                    ? t
                      ? t && 0 === n.length
                        ? (this.logger.debug("delay SearchCompleted status"),
                          Object(u.a)(O.a.SearchCompleted).pipe(
                            Object(m.a)(3e3),
                          ))
                        : Object(u.a)(O.a.SearchCompleted)
                      : Object(u.a)(O.a.Searching)
                    : Object(u.a)(O.a.WaitingForInput);
                }),
                Object(g.a)((e) =>
                  this.logger.debug(
                    "set searchStatus$ to ",
                    this.mapSearchStatusToString(e),
                  ),
                ),
                Object(d.a)(this.destroyed$$),
              )
              .subscribe((e) => {
                this.searchStatus$$.next(e);
              }),
            this.deviceToSearch$
              .pipe(
                Object(h.a)((e) =>
                  e && e.id
                    ? this.searchService.proposals$(e)
                    : Object(u.a)([]),
                ),
                Object(d.a)(this.destroyed$$),
              )
              .subscribe((e) => {
                this.initialSuggestions$$.next(
                  (e.length > 0 && e[0].proposals) || [],
                );
              }));
        }
        mapFavoriteToSearchResult(e) {
          return e.contact
            ? this.addressbookService
                .contact$(e.contact ? e.contact.id : "")
                .pipe(
                  Object(c.a)((l) => {
                    const n = this.getFavoriteNumberFromContact(l, e.index);
                    return {
                      id: "",
                      uri: "",
                      name: l ? l.name : "",
                      combinedName: l ? { text: l.name } : void 0,
                      numbers: [
                        {
                          number: n ? { text: n.number } : void 0,
                          numberType: n ? n.type : void 0,
                        },
                      ],
                      numberType: n ? n.type : void 0,
                      searchAdbEntry: { contact: l, isFavorite: !0 },
                    };
                  }),
                )
            : e.number
              ? Object(u.a)({
                  id: "",
                  uri: "",
                  name: "",
                  combinedName: { text: e.number },
                  numbers: [{ number: { text: e.number } }],
                  searchAdbEntry: {
                    isFavorite: !0,
                    contact: {
                      id: "",
                      uri: "",
                      name: e.number,
                      phoneNumberList: [{ number: e.number }],
                    },
                  },
                })
              : (this.logger.error(
                  "mapFavoriteToSearchResult: unexpected Favorite received, favorite search will return no results!",
                  e,
                ),
                o.a);
        }
        getFavoriteNumberFromContact(e, l) {
          if (e && e.phoneNumberList && 0 !== e.phoneNumberList.length)
            return l && e.phoneNumberList.length > l
              ? e.phoneNumberList[l]
              : e.phoneNumberList.find((e) => !!e.isFavorite);
        }
        mapSearchStatusToString(e) {
          switch (e) {
            case O.a.WaitingForInput:
              return "WaitingForInput";
            case O.a.Searching:
              return "Searching";
            case O.a.SearchCompleted:
              return "SearchCompleted";
          }
          return "" + e;
        }
        ngOnDestroy() {
          (this.destroyed$$.next(),
            this.searchId$$.complete(),
            this.searchResults$$.complete(),
            this.searchStatus$$.complete(),
            this.searchType$$.complete(),
            this.initialSuggestions$$.complete(),
            this.needles$$.complete());
        }
        setSearchTypeAndDevice(e, l) {
          (this.logger.info("setSearchTypeAndDevice", {
            searchType: e,
            deviceId: l,
          }),
            this.searchType$$.next(e),
            this.searchDeviceId$$.next(l));
        }
        onBackButtonTap() {
          this.routingService.goBack();
        }
        getInputModel(e) {
          return this.textInputService.getInputField(
            "phone search input",
            this.getContextId(),
            e,
          );
        }
        getSearchNeedles(e) {
          return this.proposalValidationService.getSearchNeedles(e);
        }
        getContextId() {
          return S.e.TIF_ID_05_SEARCH_FIELD_PHONE_LISTS;
        }
        createSearch(e) {
          ((this.needles = e),
            this.logger.info("search needles changed:", e),
            this.needles$$.next(e));
        }
        restoreSearch(e) {
          return e
            ? new Promise((l, n) => {
                (this.stopSearch(),
                  this.searchService
                    .getExistingSearch(e)
                    .pipe(Object(d.a)(this.destroyed$$), Object(x.a)(1))
                    .subscribe(
                      (e) => {
                        (this.logger.info(
                          "restoreSearch: received previous search: ",
                          e,
                        ),
                          e.state === T.e.DONE
                            ? (this.searchId$$.next(e.id), l(!0))
                            : l(!1));
                      },
                      (e) => {
                        (this.logger.error(
                          "restoreSearch: error retrieving previous search: ",
                          e,
                        ),
                          l(!1));
                      },
                      () => {
                        (this.logger.info(
                          "restoreSearch: getExistingSearch completed without getting a previous search",
                        ),
                          l(!1));
                      },
                    ));
              })
            : Promise.resolve(!1);
        }
        replaceInput(e, l) {
          this.textInputService.replace(e, l);
        }
        stopSearch() {
          this.logger.info("stopping search");
        }
        addToDictionary(e) {
          this.textInputService.addWordsFromTruffleResultToDictionary(
            e.staticObject,
          );
        }
        getDynamicSuggestions$(e, l) {
          this.logger.info("getting dynamic suggestions for:", e);
          const n = this.searchService.suggestions$(e).pipe(
              Object(c.a)((e) =>
                e.map((e) => ({
                  fullSuggestion: e.fullSuggestion,
                  suggestion: e.suggestion || "",
                  needleIndex: e.inputTextIndex,
                  type: e.suggestionType === T.f.FAST ? S.u.FAST : S.u.SLOW,
                })),
              ),
              Object(d.a)(this.destroyed$$),
              Object(v.Kd)(),
            ),
            t = n.pipe(
              Object(c.a)((e) => e.filter((e) => e.type === S.u.FAST)),
            ),
            a = n.pipe(
              Object(c.a)((e) => e.filter((e) => e.type !== S.u.FAST)),
            );
          return this.proposalValidationService.validateProposals(l, t, a);
        }
        saveInputAsProposal() {
          const e = this.phoneService.phones.focusDevice,
            l = this.needles && this.needles[0];
          e && l && this.searchService.addProposal(e, l);
        }
        isContactValidForContext(e) {
          return this.routingService.activeAppContextSnapshot === I.w
            ? !!e.phoneNumberList && e.phoneNumberList.length > 0
            : this.routingService.activeAppContextSnapshot === I.u
              ? !!e.addressList && e.addressList.length > 0
              : this.routingService.activeAppContextSnapshot !== I.t ||
                (!!e.emailList && e.emailList.length > 0);
        }
        createSearchForDevice(e, l, n) {
          return n && n[0]
            ? new s.a((t) => {
                const i = new a.a(!1);
                return (
                  this.logger.info(
                    "attempting to create a new search object:",
                    { device: e, sources: l, needles: n },
                  ),
                  this.searchService
                    .createSearch(e, l, n)
                    .pipe(Object(p.a)(i))
                    .subscribe(([n, a]) => {
                      (this.logger.info("handling update for search object:", {
                        deviceId: e.id,
                        sources: l,
                        searchId: n,
                        unsubscribed: a,
                      }),
                        n
                          ? a
                            ? (t.complete(), this.searchService.deleteSearch(n))
                            : t.next(n)
                          : a ||
                            this.logger.error(
                              "creating a search object failed, no searchId received",
                            ));
                    }),
                  () => i.next(!0)
                );
              })
            : Object(u.a)(void 0);
        }
      }
    },
    rR4V: function (e, l, n) {
      "use strict";
      (n.r(l),
        n.d(l, "SendMessageModuleNgFactory", function () {
          return Bn;
        }));
      var t = n("kZht"),
        a = n("D57K"),
        i = n("IXiK"),
        u = n("RGxT"),
        o = n("Yi6/"),
        s = n("QQZH"),
        c = n("ROBh"),
        r = n("YtkY"),
        b = n("/SfN"),
        d = n("d3LF"),
        p = n("rJ2r"),
        h = n("kmPl"),
        m = n("RXfg");
      let g = (() => {
        class e {
          constructor(e, l, n, t, a, u, c, g, x, S, v, y) {
            ((this.infoService = e),
              (this.templateService = l),
              (this.routingService = n),
              (this.generalSettingsService = t),
              (this.guidanceService = a),
              (this.locationService = u),
              (this.actionsService = c),
              (this.messagingOperationsService = g),
              (this.privacyService = x),
              (this.languageService = S),
              (this.speechSettingsService = v),
              (this.listItemType = o.rb),
              (this.TemplateTypeEnum = h.d),
              (this.TemplateTextEnum = h.c),
              (this.DynamicTemplateTextEnum = h.b),
              (this.MessagingRoutes = m.a),
              (this.GuidanceState = b.c),
              (this.popupNoActiveRouteGuidance =
                o.Ob.POPUP_MSG_POPUP_NEW_MESSAGE_NO_ACTIVE_RG),
              (this.popupPrivacyEnabled = {
                popup:
                  o.Ob
                    .POPUP_SETUP_DATA_MGT_PRIVACY_STAGED_BLOCKED_FUNCTION_POPUP,
                type: o.A.SHOW_PRIVACY_POPUP,
              }),
              (this.accountTypeSms = i.a.SMS),
              (this.destroy$$ = new s.a(1)),
              (this.MessagingOperationTypeEnum = p.b),
              (this.account$ = this.locationService.location$.pipe(
                Object(r.a)((e) => (e ? e.account : void 0)),
              )),
              (this.accountTypeEnum = d.b),
              (this.logger = y.getLogger("messaging.newMessageComponent")),
              (this.templates$ = this.getTemplates$()));
          }
          selectTemplate(e) {
            this.locationService.setTemplate(e).then(() => {
              this.routingService.goTo(m.a.children.EditMessage);
            });
          }
          isRouteGuidanceInfoTemplate(e) {
            return h.b.hasOwnProperty(e) && "POSITION" !== e;
          }
          ngOnDestroy() {
            this.destroy$$.next();
          }
          dictateMessage() {
            return this.actionsService
              .requestAction(u.a.START, {
                dialogStep: u.g.MESSAGINGDICTATESTART,
                state: u.b.REQUESTED,
              })
              .then(
                (e) =>
                  this.logger.info(
                    "dictateMessage: request action succeeded, result:",
                    e,
                  ),
                (e) =>
                  this.logger.info("dictateMessage: request action failed:", e),
              );
          }
          getTemplates$() {
            return o.gd.textToolMode
              ? (this.logger.info(
                  "getTemplates$: texttool mode is active, returning fake templates.",
                ),
                Object(c.a)([
                  {
                    type: h.d.STATIC,
                    id: "texttoolMockStatic",
                    text: "Static template",
                  },
                  {
                    type: h.d.DYNAMIC,
                    id: "texttoolMockDynamic",
                    text: "Dynamic template",
                  },
                ]))
              : this.templateService.templates$;
          }
        }
        return (
          Object(a.b)(
            [
              Object(o.bb)("logger"),
              Object(a.c)("design:type", Function),
              Object(a.c)("design:paramtypes", []),
              Object(a.c)("design:returntype", Promise),
            ],
            e.prototype,
            "dictateMessage",
            null,
          ),
          e
        );
      })();
      var x = n("qMQG"),
        S = n("Ohay"),
        v = n("kuMc"),
        y = n("hHAo"),
        T = n("vPDv");
      class f {
        constructor(e, l, n, t, a, u) {
          ((this.routingService = e),
            (this.infoService = l),
            (this.mainPerceivableContextService = n),
            (this.messagingOperationsService = t),
            (this.headerEnum = d.b),
            (this.accountTypeEnum = i.a),
            (this.MessagingRoute = m.a),
            (this.MessagingOperationTypeEnum = p.b),
            (this.destroy$$ = new s.a(1)),
            (this.logger = u.getLogger("messaging.EditMessageComponent")),
            (this.location$ = a.location$),
            this.location$
              .pipe(
                Object(r.a)((e) => e.message && e.message.id),
                Object(S.a)(),
                Object(o.pd)(
                  this.logger,
                  "constructor: updating with messageId:",
                ),
                Object(v.a)(this.destroy$$),
              )
              .subscribe((e) => {
                e
                  ? this.mainPerceivableContextService.updateDisplayElements(
                      [{ referenceId: e, referenceType: x.d.MESSAGINGMESSAGE }],
                      y.a.Screen,
                    )
                  : this.mainPerceivableContextService.clearContext(y.a.Screen);
              }));
        }
        ngOnInit() {
          this.infoService.setEditMessageContextActive(!0);
        }
        ngOnDestroy() {
          (this.infoService.setEditMessageContextActive(!1),
            this.destroy$$.next(),
            this.destroy$$.complete(),
            this.mainPerceivableContextService.clearContext(y.a.Screen));
        }
      }
      var O = n("ZTXN"),
        L = n("8lHc"),
        I = n("HM3f"),
        $ = n("TLy2"),
        E = n("7SLS"),
        N = n("jIqt"),
        _ = n("xVbo"),
        P = n("XY/Y"),
        C = n("6xFL"),
        M = n("e+pb");
      class D {
        constructor(e, l, n, t, a, i) {
          ((this.infoService = e),
            (this.routingService = l),
            (this.operationService = n),
            (this.locationService = t),
            (this.addressbookService = a),
            (this.SearchTypeEnum = M.b),
            (this.MessagingRoutes = m.a),
            (this.headerEnum = d.b),
            (this.addressbookStateEnum = C.b),
            (this.location$ = this.locationService.location$),
            (this.range$$ = new s.a(1)),
            (this.profileState$$ = new O.a()),
            (this.contactSelected = !1),
            (this.destroy$$ = new s.a(1)),
            (this.logger = i.getLogger(
              "messaging.MessageAddressbookComponent",
            )));
        }
        ngOnInit() {
          this.viewContext$ = this.location$.pipe(
            Object(r.a)((e) => {
              if (!e.account) return P.b.ALL;
              switch (e.account.accountType) {
                case i.a.MAIL:
                  return P.b.EMAIL;
                case i.a.SMS:
                  return P.b.PHONE;
                default:
                  return P.b.ALL;
              }
            }),
            Object(S.a)(),
          );
          const e = new O.a(),
            l = e.pipe(
              Object($.a)(() =>
                Object(L.a)(3e3).pipe(Object(E.a)(!1), Object(N.a)(!0)),
              ),
              Object(N.a)(!1),
              Object(S.a)(),
            );
          ((this.state$ = Object(I.b)(this.profileState$$, l).pipe(
            Object(_.a)(([, e]) => !e),
            Object(v.a)(this.destroy$$),
            Object(r.a)(([l]) =>
              l === C.b.NotAvailable
                ? C.b.Empty
                : (l === C.b.Loading &&
                    window.setTimeout(() => {
                      e.next();
                    }),
                  l),
            ),
          )),
            this.initContacts());
        }
        initContacts() {
          this.contacts$ = this.location$.pipe(
            Object(r.a)((e) => e.account),
            Object(_.a)(o.wd),
            Object($.a)((e) =>
              Object(I.b)(
                this.addressbookService.profileForDevice$(e.device.id),
                Object(c.a)(e),
              ),
            ),
            Object(_.a)(([e, l]) => !!e && !!l),
            Object($.a)(([e, l]) => {
              switch (
                (this.profileState$$.next(this.getProfileState(e)),
                l.accountType)
              ) {
                case i.a.MAIL:
                  return this.addressbookService.contacts$(
                    this.range$$,
                    P.b.EMAIL,
                    e,
                  );
                case i.a.SMS:
                  return this.addressbookService.contacts$(
                    this.range$$,
                    P.b.PHONE,
                    e,
                  );
                default:
                  return this.addressbookService.contacts$(
                    this.range$$,
                    void 0,
                    e,
                  );
              }
            }),
            Object(r.a)((e) =>
              e && e.data
                ? {
                    data: e.data.map((e) => ({
                      isMailbox: !1,
                      isRecommended: !1,
                      name: e.name,
                      contactObject: e,
                    })),
                    paging: e.paging,
                  }
                : { data: [], paging: { startIndex: 0, total: 0 } },
            ),
          );
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        goBack() {
          this.routingService.goBack();
        }
        selectContact(e, l) {
          !this.contactSelected &&
            e &&
            l &&
            ((this.contactSelected = !0),
            this.operationService
              .getContactInformationType(
                e.accountType === i.a.MAIL ? i.g.MAIL : i.g.SMS,
                l,
              )
              .then((l) => {
                if (!l.address) return void (this.contactSelected = !1);
                const n = this.operationService.getRecipients(e);
                (n.push(l),
                  this.operationService.setRecipients(e, n),
                  this.logger.info(
                    "selectContact: added contact, new list: ",
                    this.operationService.getRecipients(e),
                  ),
                  this.goBack());
              })
              .catch((e) => {
                (this.logger.warn("Failed to add recipient: ", e),
                  (this.contactSelected = !1));
              }));
        }
        getProfileState(e) {
          return e
            ? e.state === P.h.NOTAVAILABLE
              ? C.b.NotAvailable
              : e.state === P.h.LOADING && 0 === e.usedContacts
                ? C.b.Loading
                : e.state === P.h.NOCONTACTS
                  ? C.b.Empty
                  : C.b.HasContacts
            : C.b.NotAvailable;
        }
      }
      var j = n("J+dc"),
        w = n("AGsL");
      class A {
        constructor(e, l, n, t, a) {
          ((this.infoService = e),
            (this.locationService = l),
            (this.templateService = n),
            (this.resourceService = t),
            (this.routingService = a),
            (this.SendMessageRoute = m.a),
            (this.accountTypeEnum = d.b),
            (this.account$ = this.locationService.location$.pipe(
              Object(r.a)((e) => e.account),
            )),
            (this.accountsAvailable$ = this.resourceService.accounts$.pipe(
              Object(r.a)((e) => !!e && e.length > 0),
            )),
            (this.destroyed$$ = new s.a(1)));
        }
        ngOnInit() {
          const e = this.locationService.location$.pipe(
            Object(j.a)(1),
            Object($.a)((e) =>
              e && e.content && !e.content.body
                ? this.resourceService.content$(e.content.id).pipe(
                    Object(j.a)(1),
                    Object($.a)((e) =>
                      this.locationService.setContent(e).then(() => !0),
                    ),
                  )
                : Object(c.a)(!0),
            ),
            Object(j.a)(1),
          );
          Object(I.b)(Object(L.a)(3e3), this.templateService.templates$, e)
            .pipe(Object(v.a)(this.destroyed$$))
            .subscribe(() => {
              this.routingService.goTo(m.a.children.NewMessage);
            });
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
      }
      var k = n("clth");
      class B {
        constructor(e, l) {
          ((this.infoService = e),
            (this.locationService = l),
            (this.headerEnum = d.b),
            (this.MessagingRoute = k.a),
            (this.account$ = this.locationService.location$.pipe(
              Object(r.a)((e) => e.account),
            )));
        }
      }
      var R = n("C05f"),
        G = n("BwBJ");
      class F {
        constructor(e, l, n, t, a) {
          ((this.infoService = e),
            (this.locationService = l),
            (this.operationService = n),
            (this.routingService = t),
            (this.headerEnum = d.b),
            (this.ListItemType = o.rb),
            (this.ICON_CATEGORY_LISTEND = o.Z.ListEnd),
            (this.MessagingRoutes = m.a),
            (this.location$ = this.locationService.location$),
            (this.updatedRecipients$$ = new R.a(!0)),
            (this.logger = a.getLogger("messaging.DeleteRecipientComponent")),
            (this.recipients$ = Object(I.b)(
              this.location$,
              this.updatedRecipients$$,
            ).pipe(
              Object(r.a)(([e]) =>
                e.account
                  ? [...this.operationService.getRecipients(e.account)]
                  : [],
              ),
              Object(o.Kd)(),
              Object(o.pd)(this.logger, "constructor: updated recipients"),
            )),
            (this.delayedRecipients$ = this.recipients$.pipe(Object(G.a)(1))));
        }
        goBack() {
          this.routingService.goBack();
        }
        deleteRecipient(e, l) {
          if (
            (this.logger.debug("deleteRecipient: ", {
              account: e,
              recipient: l,
            }),
            !e)
          )
            return;
          const n = this.operationService.getRecipients(e),
            t = n.findIndex((e) => e.address === l.address);
          t >= 0 &&
            (n.splice(t, 1),
            this.operationService.setRecipients(e, n),
            this.updatedRecipients$$.next(!0));
        }
        getItemText(e) {
          return e.name || e.address || "";
        }
      }
      var Y = n("CiY/"),
        z = n("64dN"),
        H = n("P7mx");
      const V = () =>
          Promise.all([n.e(50), n.e(106)])
            .then(n.bind(null, "g1YH"))
            .then((e) => e.MessagingSettingsModuleNgFactory),
        W = () =>
          Promise.all([n.e(47), n.e(102)])
            .then(n.bind(null, "99XO"))
            .then((e) => e.AddressbookSettingsModuleNgFactory),
        Q = () =>
          Promise.all([n.e(2), n.e(3), n.e(4), n.e(8), n.e(57), n.e(97)])
            .then(n.bind(null, "mPYu"))
            .then((e) => e.PhoneSearchModuleNgFactory);
      class U {}
      var K = n("C9Ky"),
        Z = n("4XZL"),
        q = n("fu7d"),
        X = n("bou3"),
        J = n("yNay"),
        ee = n("r+e+"),
        le = n("bMuc"),
        ne = n("ZIdM"),
        te = n("3bpu"),
        ae = n("6zvu"),
        ie = n("VcEz"),
        ue = n("OtM5"),
        oe = n("y9xZ"),
        se = n("+sw+"),
        ce = n("BMrr"),
        re = n("IEns"),
        be = n("z6QT"),
        de = n("flsk"),
        pe = n("FQEI"),
        he = n("O82V"),
        me = n("Eln4"),
        ge = n("evAh"),
        xe = n("URLa"),
        Se = n("CpzC"),
        ve = n("0Bsn"),
        ye = n("5GjX"),
        Te = n("mYyF"),
        fe = n("v98a"),
        Oe = n("aOG8"),
        Le = n("Krzs"),
        Ie = n("9ZFG"),
        $e = n("An66"),
        Ee = n("ijxY"),
        Ne = n("bmFL"),
        _e = n("Z2XD"),
        Pe = n("VUTu"),
        Ce = n("nK9R"),
        Me = n("qzuC"),
        De = n("8yWk"),
        je = n("8WOv"),
        we = n("1pak"),
        Ae = n("P+G5"),
        ke = n("zPMi"),
        Be = n("6480"),
        Re = n("FfND"),
        Ge = n("oeT7"),
        Fe = n("t7cT"),
        Ye = n("N2Hj"),
        ze = n("UbWD"),
        He = n("2rvh"),
        Ve = n("odRV"),
        We = n("Udyh"),
        Qe = n("I3ve"),
        Ue = n("qiAR"),
        Ke = n("007S"),
        Ze = n("oxWk"),
        qe = n("Tr//"),
        Xe = n("0qMr"),
        Je = n("oPv+"),
        el = n("tZxQ"),
        ll = n("dr0G"),
        nl = n("6ifu"),
        tl = n("AL/M"),
        al = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column}.list[_ngcontent-%COMP%]{width:100%;height:100%}.list__item[_ngcontent-%COMP%]{height:100px;font-size:40px}",
            ],
          ],
          data: {},
        });
      function il(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-list-route-item",
              [["class", "list__item"]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t =
                      !1 !==
                        e.component.selectTemplate(
                          e.parent.context.$implicit,
                        ) && t),
                  t
                );
              },
              Z.b,
              Z.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              ee.a,
              [],
              { textConstant: [0, "textConstant"] },
              null,
            ),
            t.xb(3, 147456, null, 0, le.a, [t.l, t.z], null, null),
            t.xb(
              4,
              147456,
              null,
              0,
              ne.a,
              [le.a, [2, te.a], [2, q.a], J.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              ae.a,
              [
                J.a,
                ie.b,
                ne.a,
                [2, te.a],
                [2, q.a],
                [2, ue.a],
                [2, oe.a],
                [2, se.a],
                t.z,
                ce.a,
                t.l,
                [2, re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, be.a, be.a, [[3, be.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              de.a,
              [
                t.l,
                pe.a,
                t.h,
                be.a,
                [2, he.a],
                [2, te.b],
                [2, te.a],
                [2, me.a],
                [2, ge.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              114688,
              null,
              0,
              xe.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                type: [2, "type"],
              },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Se.a,
              [
                [2, ae.a],
                [2, ue.a],
                [2, ve.a],
                [2, de.a],
                [2, ye.b],
                t.l,
                Te.a,
                fe.b,
              ],
              null,
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              Oe.a,
              [[2, de.a], [2, ae.a], [2, ie.b], Le.a],
              null,
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, l.parent.context.$implicit.id, n.TemplateTextEnum),
              e(l, 2, 0, "MessagingStaticTemplate"),
              e(l, 5, 0),
              e(l, 7, 0),
              e(
                l,
                8,
                0,
                "E83F_office_msg_template.webp",
                l.parent.context.$implicit.text,
                n.listItemType.ITEM_TYPE_NO_END_ICON,
              ));
          },
          function (e, l) {
            e(l, 0, 0, t.Nb(l, 7).markerClassEnabled);
          },
        );
      }
      function ul(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-list-route-item",
              [["class", "list__item"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t =
                      !1 !==
                        e.component.selectTemplate(
                          e.parent.context.$implicit,
                        ) && t),
                  t
                );
              },
              Z.b,
              Z.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              ee.a,
              [],
              { textConstant: [0, "textConstant"] },
              null,
            ),
            t.xb(3, 147456, null, 0, le.a, [t.l, t.z], null, null),
            t.xb(
              4,
              147456,
              null,
              0,
              ne.a,
              [le.a, [2, te.a], [2, q.a], J.a],
              null,
              null,
            ),
            t.xb(
              5,
              147456,
              null,
              0,
              ue.a,
              [Ie.a, t.h, J.a, [3, ue.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.Pb(131072, $e.b, [t.h]),
            t.xb(
              7,
              212992,
              null,
              0,
              ae.a,
              [
                J.a,
                ie.b,
                ne.a,
                [2, te.a],
                [2, q.a],
                [2, ue.a],
                [2, oe.a],
                [2, se.a],
                t.z,
                ce.a,
                t.l,
                [2, re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, be.a, be.a, [[3, be.a]]),
            t.xb(
              9,
              4407296,
              null,
              0,
              de.a,
              [
                t.l,
                pe.a,
                t.h,
                be.a,
                [2, he.a],
                [2, te.b],
                [2, te.a],
                [2, me.a],
                [2, ge.a],
              ],
              null,
              null,
            ),
            t.xb(
              10,
              114688,
              null,
              0,
              xe.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                type: [2, "type"],
              },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Se.a,
              [
                [2, ae.a],
                [2, ue.a],
                [2, ve.a],
                [2, de.a],
                [2, ye.b],
                t.l,
                Te.a,
                fe.b,
              ],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              Oe.a,
              [[2, de.a], [2, ae.a], [2, ie.b], Le.a],
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
              l.parent.context.$implicit.id,
              n.DynamicTemplateTextEnum,
            ),
              e(l, 2, 0, "MessagingDynamicTemplate"),
              e(
                l,
                5,
                0,
                t.Yb(
                  l,
                  5,
                  0,
                  t.Nb(l, 6).transform(n.guidanceService.guidanceState$),
                ) === n.GuidanceState.Idle &&
                  n.isRouteGuidanceInfoTemplate(l.parent.context.$implicit.id),
                n.popupNoActiveRouteGuidance,
              ),
              e(l, 7, 0),
              e(l, 9, 0),
              e(
                l,
                10,
                0,
                "E1A6_messaging_dynamic_text_template.webp",
                l.parent.context.$implicit.text,
                n.listItemType.ITEM_TYPE_NO_END_ICON,
              ));
          },
          function (e, l) {
            e(
              l,
              0,
              0,
              t.Nb(l, 5).combinedDisabled,
              t.Nb(l, 5).useBrighterIcon,
              t.Nb(l, 9).markerClassEnabled,
            );
          },
        );
      }
      function ol(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["ttIgnore", ""],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t =
                      !1 !==
                        e.component.selectTemplate(
                          e.parent.context.$implicit,
                        ) && t),
                  t
                );
              },
              Z.b,
              Z.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 16384, null, 0, Ee.a, [], null, null),
            t.xb(3, 147456, null, 0, le.a, [t.l, t.z], null, null),
            t.xb(
              4,
              147456,
              null,
              0,
              ne.a,
              [le.a, [2, te.a], [2, q.a], J.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              ae.a,
              [
                J.a,
                ie.b,
                ne.a,
                [2, te.a],
                [2, q.a],
                [2, ue.a],
                [2, oe.a],
                [2, se.a],
                t.z,
                ce.a,
                t.l,
                [2, re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, be.a, be.a, [[3, be.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              de.a,
              [
                t.l,
                pe.a,
                t.h,
                be.a,
                [2, he.a],
                [2, te.b],
                [2, te.a],
                [2, me.a],
                [2, ge.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              114688,
              null,
              0,
              xe.a,
              [],
              {
                icon: [0, "icon"],
                titleNonI18nText: [1, "titleNonI18nText"],
                type: [2, "type"],
              },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Se.a,
              [
                [2, ae.a],
                [2, ue.a],
                [2, ve.a],
                [2, de.a],
                [2, ye.b],
                t.l,
                Te.a,
                fe.b,
              ],
              null,
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              Oe.a,
              [[2, de.a], [2, ae.a], [2, ie.b], Le.a],
              null,
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, l.parent.context.$implicit.id),
              e(l, 5, 0),
              e(l, 7, 0),
              e(
                l,
                8,
                0,
                "E2A6_messaging_my_template.webp",
                l.parent.context.$implicit.text,
                n.listItemType.ITEM_TYPE_NO_END_ICON,
              ));
          },
          function (e, l) {
            e(l, 0, 0, t.Nb(l, 7).markerClassEnabled);
          },
        );
      }
      function sl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
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
            t.xb(
              1,
              16384,
              null,
              0,
              $e.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              Ne.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Pb(131072, $e.b, [t.h]),
            t.Pb(131072, $e.b, [t.h]),
            t.Pb(131072, $e.b, [t.h]),
            t.Qb(6, { eta: 0, destination: 1, position: 2 }),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, il)),
            t.xb(
              8,
              278528,
              null,
              0,
              $e.p,
              [t.P, t.L, $e.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, ul)),
            t.xb(
              10,
              278528,
              null,
              0,
              $e.p,
              [t.P, t.L, $e.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (e()(), t.hb(16777216, [[1, 2]], null, 1, null, ol)),
            t.xb(12, 16384, null, 0, $e.q, [t.P, t.L, $e.o], null, null),
            (e()(), t.hb(0, null, null, 0)),
          ],
          function (e, l) {
            var n = l.component;
            e(l, 1, 0, l.context.$implicit.type);
            var a = e(
              l,
              6,
              0,
              t.Yb(
                l,
                2,
                0,
                t.Nb(l, 3).transform(n.templateService.lastDestinationEta$),
              ),
              t.Yb(
                l,
                2,
                0,
                t
                  .Nb(l, 4)
                  .transform(n.templateService.formattedLastDestination$),
              ),
              t.Yb(
                l,
                2,
                0,
                t
                  .Nb(l, 5)
                  .transform(n.templateService.formattedCurrentLocation$),
              ),
            );
            (e(l, 2, 0, a),
              e(l, 8, 0, n.TemplateTypeEnum.STATIC),
              e(l, 10, 0, n.TemplateTypeEnum.DYNAMIC));
          },
          null,
        );
      }
      function cl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-list-route-item",
              [
                ["before", ""],
                ["class", "list__item"],
                ["id", "DictateNewMessage"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== e.component.dictateMessage() && t),
                  t
                );
              },
              Z.b,
              Z.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, le.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              ne.a,
              [le.a, [2, te.a], [2, q.a], J.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              ue.a,
              [Ie.a, t.h, J.a, [3, ue.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              ae.a,
              [
                J.a,
                ie.b,
                ne.a,
                [2, te.a],
                [2, q.a],
                [2, ue.a],
                [2, oe.a],
                [2, se.a],
                t.z,
                ce.a,
                t.l,
                [2, re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, be.a, be.a, [[3, be.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              de.a,
              [
                t.l,
                pe.a,
                t.h,
                be.a,
                [2, he.a],
                [2, te.b],
                [2, te.a],
                [2, me.a],
                [2, ge.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              114688,
              null,
              0,
              xe.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                type: [2, "type"],
                twolineBeginIcon: [3, "twolineBeginIcon"],
              },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              Se.a,
              [
                [2, ae.a],
                [2, ue.a],
                [2, ve.a],
                [2, de.a],
                [2, ye.b],
                t.l,
                Te.a,
                fe.b,
              ],
              null,
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              Oe.a,
              [[2, de.a], [2, ae.a], [2, ie.b], Le.a],
              null,
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "DictateNewMessage"),
              e(l, 4, 0, l.parent.context.mib3Let, n.popupPrivacyEnabled),
              e(l, 5, 0),
              e(l, 7, 0),
              e(
                l,
                8,
                0,
                "E1A7_messaging_dictate_message.webp",
                "Neue Nachricht diktieren",
                n.listItemType.ITEM_TYPE_NO_END_ICON,
                !0,
              ));
          },
          function (e, l) {
            e(
              l,
              0,
              0,
              t.Nb(l, 4).combinedDisabled,
              t.Nb(l, 4).useBrighterIcon,
              t.Nb(l, 7).markerClassEnabled,
            );
          },
        );
      }
      function rl(e) {
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
            (e()(), t.hb(16777216, [[1, 2]], null, 2, null, cl)),
            t.xb(
              2,
              16384,
              null,
              0,
              $e.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Pb(131072, $e.b, [t.h]),
            (e()(), t.hb(0, null, null, 0)),
          ],
          function (e, l) {
            var n = l.component;
            e(
              l,
              2,
              0,
              (null == l.parent.context.mib3Let
                ? null
                : l.parent.context.mib3Let.accountType) === n.accountTypeSms &&
                t.Yb(
                  l,
                  2,
                  0,
                  t
                    .Nb(l, 3)
                    .transform(
                      n.speechSettingsService.messageDictationAvailable$,
                    ),
                ),
            );
          },
          null,
        );
      }
      function bl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              46,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:MSG_NEW_MESSAGE"],
              ],
              null,
              null,
              null,
              _e.b,
              _e.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, oe.a, [J.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              31,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Pe.b,
              Pe.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              16384,
              null,
              0,
              Ne.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(6, { name: 0 }),
            t.xb(
              7,
              49152,
              null,
              0,
              Ce.a,
              [Me.a, De.a],
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
            t.Pb(131072, $e.b, [t.h]),
            t.Pb(131072, $e.b, [t.h]),
            (e()(),
            t.yb(
              10,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
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
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== e.component.routingService.goBack() && t),
                  t
                );
              },
              je.b,
              je.a,
            )),
            t.xb(11, 147456, null, 0, le.a, [t.l, t.z], null, null),
            t.xb(
              12,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              ne.a,
              [le.a, [2, te.a], [2, q.a], J.a],
              null,
              null,
            ),
            t.xb(
              14,
              212992,
              null,
              0,
              ae.a,
              [
                J.a,
                ie.b,
                ne.a,
                [2, te.a],
                [2, q.a],
                [2, ue.a],
                [2, oe.a],
                [2, se.a],
                t.z,
                ce.a,
                t.l,
                [2, re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              15,
              147456,
              null,
              0,
              we.a,
              [J.a, Ae.a, t.l, [2, ae.a], [2, ue.a]],
              null,
              null,
            ),
            t.xb(16, 16384, null, 0, Ee.a, [], null, null),
            t.Sb(131584, null, be.a, be.a, [[3, be.a]]),
            t.xb(
              18,
              4407296,
              null,
              0,
              de.a,
              [
                t.l,
                pe.a,
                t.h,
                be.a,
                [2, he.a],
                [2, te.b],
                [2, te.a],
                [2, me.a],
                [2, ge.a],
              ],
              null,
              null,
            ),
            t.xb(
              19,
              49152,
              null,
              0,
              ke.a,
              [[2, ue.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              20,
              147456,
              null,
              0,
              Se.a,
              [
                [2, ae.a],
                [2, ue.a],
                [2, ve.a],
                [2, de.a],
                [2, ye.b],
                t.l,
                Te.a,
                fe.b,
              ],
              null,
              null,
            ),
            t.xb(
              21,
              147456,
              null,
              0,
              Oe.a,
              [[2, de.a], [2, ae.a], [2, ie.b], Le.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              22,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "GoToSettings"],
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
              je.b,
              je.a,
            )),
            t.xb(
              23,
              147456,
              null,
              0,
              ue.a,
              [Ie.a, t.h, J.a, [3, ue.a]],
              null,
              null,
            ),
            t.xb(24, 147456, null, 0, le.a, [t.l, t.z], null, null),
            t.xb(
              25,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              26,
              147456,
              null,
              0,
              ne.a,
              [le.a, [2, te.a], [2, q.a], J.a],
              null,
              null,
            ),
            t.xb(
              27,
              212992,
              null,
              0,
              ae.a,
              [
                J.a,
                ie.b,
                ne.a,
                [2, te.a],
                [2, q.a],
                [2, ue.a],
                [2, oe.a],
                [2, se.a],
                t.z,
                ce.a,
                t.l,
                [2, re.a],
              ],
              null,
              null,
            ),
            t.xb(
              28,
              671744,
              null,
              0,
              Be.a,
              [Re.a, Ge.i, ue.a, ae.a, Be.b, Fe.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(29, 16384, null, 0, Ee.a, [], null, null),
            t.Sb(131584, null, be.a, be.a, [[3, be.a]]),
            t.xb(
              31,
              4407296,
              null,
              0,
              de.a,
              [
                t.l,
                pe.a,
                t.h,
                be.a,
                [2, he.a],
                [2, te.b],
                [2, te.a],
                [2, me.a],
                [2, ge.a],
              ],
              null,
              null,
            ),
            t.xb(
              32,
              49152,
              null,
              0,
              ke.a,
              [[2, ue.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              33,
              147456,
              null,
              0,
              Se.a,
              [
                [2, ae.a],
                [2, ue.a],
                [2, ve.a],
                [2, de.a],
                [2, ye.b],
                t.l,
                Te.a,
                fe.b,
              ],
              null,
              null,
            ),
            t.xb(
              34,
              147456,
              null,
              0,
              Oe.a,
              [[2, de.a], [2, ae.a], [2, ie.b], Le.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              35,
              0,
              null,
              0,
              11,
              "au3-list",
              [
                ["au3ListDomPaging", ""],
                ["class", "list"],
                ["id", "TemplateList"],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Ye.b,
              Ye.a,
            )),
            t.Sb(6144, null, ze.a, null, [He.a]),
            t.xb(
              37,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(38, 16384, null, 0, Ve.a, [t.l], null, null),
            t.xb(
              39,
              16384,
              null,
              0,
              We.a,
              [J.a],
              { itemHeightGuess: [0, "itemHeightGuess"] },
              null,
            ),
            t.xb(
              40,
              12828672,
              null,
              1,
              He.a,
              [
                [2, We.a],
                [2, Qe.a],
                [8, null],
                [2, q.a],
                [2, Ue.a],
                [2, Ke.a],
                [2, ie.b],
                Ge.i,
                t.z,
                t.h,
                J.a,
                Ze.a,
                qe.a,
                [2, pe.a],
                te.a,
                [2, Ge.a],
              ],
              {
                showCursor: [0, "showCursor"],
                itemHeightGuess: [1, "itemHeightGuess"],
                items: [2, "items"],
              },
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            t.Pb(131072, $e.b, [t.h]),
            (e()(), t.hb(0, [[1, 2]], 0, 0, null, sl)),
            (e()(), t.hb(16777216, [[1, 2]], 0, 2, null, rl)),
            t.xb(
              45,
              16384,
              null,
              0,
              Xe.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, $e.b, [t.h]),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "Screen:MSG_NEW_MESSAGE"),
              e(l, 2, 0, "Screen:MSG_NEW_MESSAGE"),
              e(l, 4, 0, ""));
            var a = e(
              l,
              6,
              0,
              null == l.context.mib3Let ? null : l.context.mib3Let.name,
            );
            (e(l, 5, 0, a),
              e(
                l,
                7,
                0,
                n.infoService.getMsgHeader(l.context.mib3Let),
                n.infoService.getMsgHeader(l.context.mib3Let),
                n.accountTypeEnum,
                t.Yb(
                  l,
                  7,
                  3,
                  t
                    .Nb(l, 8)
                    .transform(n.messagingOperationsService.operationType$),
                ),
                t.Yb(
                  l,
                  7,
                  4,
                  t
                    .Nb(l, 9)
                    .transform(n.messagingOperationsService.operationType$),
                ),
                n.MessagingOperationTypeEnum,
              ),
              e(l, 12, 0, "BackButton"),
              e(l, 14, 0),
              e(l, 18, 0),
              e(l, 19, 0, !1, "E163_Backbutton.webp"),
              e(l, 25, 0, "GoToSettings"),
              e(l, 27, 0),
              e(l, 28, 0, n.MessagingRoutes.children.Settings, !0),
              e(l, 31, 0),
              e(l, 32, 0, !1, "E186_settings.webp"),
              e(l, 37, 0, "TemplateList"),
              e(l, 39, 0, 120),
              e(
                l,
                40,
                0,
                !1,
                120,
                t.Yb(l, 40, 2, t.Nb(l, 42).transform(n.templates$)),
              ),
              e(
                l,
                45,
                0,
                t.Yb(
                  l,
                  45,
                  0,
                  t.Nb(l, 46).transform(n.privacyService.privacyModeEnabled$),
                ),
              ));
          },
          function (e, l) {
            (e(
              l,
              3,
              0,
              t.Nb(l, 7).hideLeftBorder,
              t.Nb(l, 7).hideDividingBorders,
            ),
              e(
                l,
                10,
                0,
                t.Nb(l, 18).markerClassEnabled,
                t.Nb(l, 19).useItemPlaceholder,
              ),
              e(
                l,
                22,
                0,
                t.Nb(l, 23).combinedDisabled,
                t.Nb(l, 23).useBrighterIcon,
                t.Nb(l, 31).markerClassEnabled,
                t.Nb(l, 32).useItemPlaceholder,
              ),
              e(l, 35, 0, t.Nb(l, 40).showLineNumbers));
          },
        );
      }
      function dl(e) {
        return t.ac(
          2,
          [
            (e()(), t.hb(16777216, null, null, 2, null, bl)),
            t.xb(
              1,
              16384,
              null,
              0,
              Xe.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, $e.b, [t.h]),
          ],
          function (e, l) {
            var n = l.component;
            e(l, 1, 0, t.Yb(l, 1, 0, t.Nb(l, 2).transform(n.account$)));
          },
          null,
        );
      }
      function pl(e) {
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
              "au3-new-message",
              [],
              null,
              null,
              null,
              dl,
              al,
            )),
            t.xb(
              1,
              180224,
              null,
              0,
              g,
              [
                d.a,
                h.a,
                Re.a,
                Je.a,
                b.b,
                T.a,
                el.a,
                p.c,
                ll.a,
                nl.a,
                tl.a,
                J.a,
              ],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var hl = t.ub("au3-new-message", g, pl, {}, {}, []),
        ml = n("ihOk"),
        gl = n("ZMtB"),
        xl = n("fzcM"),
        Sl = n("Pfb3"),
        vl = n("CtSi"),
        yl = n("pqkN"),
        Tl = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}",
            ],
          ],
          data: {},
        });
      function fl(e) {
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
              "au3-title-line-item",
              [
                ["icon", "E811_SearchButton.webp"],
                ["id", "SearchButton"],
                ["left", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              je.b,
              je.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              ue.a,
              [Ie.a, t.h, J.a, [3, ue.a]],
              null,
              null,
            ),
            t.xb(2, 147456, null, 0, le.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              ne.a,
              [le.a, [2, te.a], [2, q.a], J.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              ae.a,
              [
                J.a,
                ie.b,
                ne.a,
                [2, te.a],
                [2, q.a],
                [2, ue.a],
                [2, oe.a],
                [2, se.a],
                t.z,
                ce.a,
                t.l,
                [2, re.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              Be.a,
              [Re.a, Ge.i, ue.a, ae.a, Be.b, Fe.a],
              {
                routeInfo: [0, "routeInfo"],
                routerParams: [1, "routerParams"],
                routingExtras: [2, "routingExtras"],
              },
              null,
            ),
            t.Qb(7, { searchDevice: 0 }),
            t.Qb(8, { queryParams: 0 }),
            t.Qb(9, { navigationExtras: 0 }),
            t.Sb(131584, null, be.a, be.a, [[3, be.a]]),
            t.xb(
              11,
              4407296,
              null,
              0,
              de.a,
              [
                t.l,
                pe.a,
                t.h,
                be.a,
                [2, he.a],
                [2, te.b],
                [2, te.a],
                [2, me.a],
                [2, ge.a],
              ],
              null,
              null,
            ),
            t.xb(
              12,
              49152,
              null,
              0,
              ke.a,
              [[2, ue.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              Se.a,
              [
                [2, ae.a],
                [2, ue.a],
                [2, ve.a],
                [2, de.a],
                [2, ye.b],
                t.l,
                Te.a,
                fe.b,
              ],
              null,
              null,
            ),
            t.xb(
              14,
              147456,
              null,
              0,
              Oe.a,
              [[2, de.a], [2, ae.a], [2, ie.b], Le.a],
              null,
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 3, 0, "SearchButton"), e(l, 5, 0));
            var t = n.MessagingRoutes.children.Search,
              a = n.SearchTypeEnum.MessagingAddressbook,
              i = e(
                l,
                9,
                0,
                e(
                  l,
                  8,
                  0,
                  e(
                    l,
                    7,
                    0,
                    null == l.parent.context.mib3Let ||
                      null == l.parent.context.mib3Let.location ||
                      null == l.parent.context.mib3Let.location.account ||
                      null == l.parent.context.mib3Let.location.account.device
                      ? null
                      : l.parent.context.mib3Let.location.account.device.id,
                  ),
                ),
              );
            (e(l, 6, 0, t, a, i),
              e(l, 11, 0),
              e(l, 12, 0, !1, "E811_SearchButton.webp"));
          },
          function (e, l) {
            e(
              l,
              0,
              0,
              t.Nb(l, 1).combinedDisabled,
              t.Nb(l, 1).useBrighterIcon,
              t.Nb(l, 11).markerClassEnabled,
              t.Nb(l, 12).useItemPlaceholder,
            );
          },
        );
      }
      function Ol(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              39,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:MSG_ADRESSBOOK"],
              ],
              null,
              null,
              null,
              _e.b,
              _e.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, oe.a, [J.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              31,
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
              Pe.b,
              Pe.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              16384,
              null,
              0,
              Ne.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(6, { name: 0 }),
            t.xb(
              7,
              49152,
              null,
              0,
              Ce.a,
              [Me.a, De.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryId: [1, "primaryId"],
                primaryIdEnumType: [2, "primaryIdEnumType"],
                secondaryDeveloperText: [3, "secondaryDeveloperText"],
                loaderActive: [4, "loaderActive"],
                hasLoader: [5, "hasLoader"],
              },
              null,
            ),
            (e()(),
            t.yb(
              8,
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
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l && (t = !1 !== e.component.goBack() && t),
                  t
                );
              },
              je.b,
              je.a,
            )),
            t.xb(9, 147456, null, 0, le.a, [t.l, t.z], null, null),
            t.xb(
              10,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              ne.a,
              [le.a, [2, te.a], [2, q.a], J.a],
              null,
              null,
            ),
            t.xb(
              12,
              212992,
              null,
              0,
              ae.a,
              [
                J.a,
                ie.b,
                ne.a,
                [2, te.a],
                [2, q.a],
                [2, ue.a],
                [2, oe.a],
                [2, se.a],
                t.z,
                ce.a,
                t.l,
                [2, re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              we.a,
              [J.a, Ae.a, t.l, [2, ae.a], [2, ue.a]],
              null,
              null,
            ),
            t.xb(14, 16384, null, 0, Ee.a, [], null, null),
            t.Sb(131584, null, be.a, be.a, [[3, be.a]]),
            t.xb(
              16,
              4407296,
              null,
              0,
              de.a,
              [
                t.l,
                pe.a,
                t.h,
                be.a,
                [2, he.a],
                [2, te.b],
                [2, te.a],
                [2, me.a],
                [2, ge.a],
              ],
              null,
              null,
            ),
            t.xb(
              17,
              49152,
              null,
              0,
              ke.a,
              [[2, ue.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              18,
              147456,
              null,
              0,
              Se.a,
              [
                [2, ae.a],
                [2, ue.a],
                [2, ve.a],
                [2, de.a],
                [2, ye.b],
                t.l,
                Te.a,
                fe.b,
              ],
              null,
              null,
            ),
            t.xb(
              19,
              147456,
              null,
              0,
              Oe.a,
              [[2, de.a], [2, ae.a], [2, ie.b], Le.a],
              null,
              null,
            ),
            (e()(), t.hb(16777216, null, 0, 1, null, fl)),
            t.xb(
              21,
              16384,
              null,
              0,
              $e.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            t.yb(
              22,
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
              je.b,
              je.a,
            )),
            t.xb(
              23,
              147456,
              null,
              0,
              ue.a,
              [Ie.a, t.h, J.a, [3, ue.a]],
              null,
              null,
            ),
            t.xb(24, 147456, null, 0, le.a, [t.l, t.z], null, null),
            t.xb(
              25,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              26,
              147456,
              null,
              0,
              ne.a,
              [le.a, [2, te.a], [2, q.a], J.a],
              null,
              null,
            ),
            t.xb(
              27,
              212992,
              null,
              0,
              ae.a,
              [
                J.a,
                ie.b,
                ne.a,
                [2, te.a],
                [2, q.a],
                [2, ue.a],
                [2, oe.a],
                [2, se.a],
                t.z,
                ce.a,
                t.l,
                [2, re.a],
              ],
              null,
              null,
            ),
            t.xb(
              28,
              671744,
              null,
              0,
              Be.a,
              [Re.a, Ge.i, ue.a, ae.a, Be.b, Fe.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(29, 16384, null, 0, Ee.a, [], null, null),
            t.Sb(131584, null, be.a, be.a, [[3, be.a]]),
            t.xb(
              31,
              4407296,
              null,
              0,
              de.a,
              [
                t.l,
                pe.a,
                t.h,
                be.a,
                [2, he.a],
                [2, te.b],
                [2, te.a],
                [2, me.a],
                [2, ge.a],
              ],
              null,
              null,
            ),
            t.xb(
              32,
              49152,
              null,
              0,
              ke.a,
              [[2, ue.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              33,
              147456,
              null,
              0,
              Se.a,
              [
                [2, ae.a],
                [2, ue.a],
                [2, ve.a],
                [2, de.a],
                [2, ye.b],
                t.l,
                Te.a,
                fe.b,
              ],
              null,
              null,
            ),
            t.xb(
              34,
              147456,
              null,
              0,
              Oe.a,
              [[2, de.a], [2, ae.a], [2, ie.b], Le.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              35,
              0,
              null,
              0,
              4,
              "au3-disclaimer",
              [],
              null,
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(
              36,
              4440064,
              null,
              0,
              gl.a,
              [xl.a, [2, q.a], t.h, J.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              37,
              0,
              null,
              0,
              2,
              "au3-addressbook-view",
              [["id", "AddressbookView"]],
              null,
              [
                [null, "contactTapped"],
                [null, "requestedDynamicListPages"],
              ],
              function (e, l, n) {
                var t = !0,
                  a = e.component;
                return (
                  "contactTapped" === l &&
                    (t =
                      !1 !==
                        a.selectContact(
                          null == e.context.mib3Let ||
                            null == e.context.mib3Let.location
                            ? null
                            : e.context.mib3Let.location.account,
                          n.contactObject,
                        ) && t),
                  "requestedDynamicListPages" === l &&
                    (t = !1 !== a.range$$.next(n) && t),
                  t
                );
              },
              Sl.b,
              Sl.a,
            )),
            t.xb(
              38,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              39,
              4898816,
              null,
              0,
              vl.a,
              [yl.a, J.a],
              {
                state: [0, "state"],
                contacts: [1, "contacts"],
                viewContext: [2, "viewContext"],
              },
              {
                contactTapped: "contactTapped",
                requestedDynamicListPages: "requestedDynamicListPages",
              },
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "Screen:MSG_ADRESSBOOK"),
              e(l, 2, 0, "Screen:MSG_ADRESSBOOK"),
              e(l, 4, 0, "TitleLine"));
            var t = e(
              l,
              6,
              0,
              null == l.context.mib3Let ||
                null == l.context.mib3Let.location ||
                null == l.context.mib3Let.location.account
                ? null
                : l.context.mib3Let.location.account.name,
            );
            (e(l, 5, 0, t),
              e(
                l,
                7,
                0,
                n.infoService.getMsgHeader(
                  null == l.context.mib3Let ||
                    null == l.context.mib3Let.location
                    ? null
                    : l.context.mib3Let.location.account,
                ),
                n.infoService.getMsgHeader(
                  null == l.context.mib3Let ||
                    null == l.context.mib3Let.location
                    ? null
                    : l.context.mib3Let.location.account,
                ),
                n.headerEnum,
                "Kontakte",
                (null == l.context.mib3Let ? null : l.context.mib3Let.state) ===
                  n.addressbookStateEnum.Loading,
                !0,
              ),
              e(l, 10, 0, "BackButton"),
              e(l, 12, 0),
              e(l, 16, 0),
              e(l, 17, 0, !1, "E163_Backbutton.webp"),
              e(
                l,
                21,
                0,
                (null == l.context.mib3Let ? null : l.context.mib3Let.state) ===
                  n.addressbookStateEnum.HasContacts,
              ),
              e(l, 25, 0, "SettingsButton"),
              e(l, 27, 0),
              e(l, 28, 0, n.MessagingRoutes.children.AddressbookSettings, !0),
              e(l, 31, 0),
              e(l, 32, 0, !1, "E186_settings.webp"),
              e(l, 36, 0),
              e(l, 38, 0, "AddressbookView"),
              e(
                l,
                39,
                0,
                null == l.context.mib3Let ? null : l.context.mib3Let.state,
                null == l.context.mib3Let ? null : l.context.mib3Let.contacts,
                null == l.context.mib3Let
                  ? null
                  : l.context.mib3Let.viewContext,
              ));
          },
          function (e, l) {
            (e(
              l,
              3,
              0,
              t.Nb(l, 7).hideLeftBorder,
              t.Nb(l, 7).hideDividingBorders,
            ),
              e(
                l,
                8,
                0,
                t.Nb(l, 16).markerClassEnabled,
                t.Nb(l, 17).useItemPlaceholder,
              ),
              e(
                l,
                22,
                0,
                t.Nb(l, 23).combinedDisabled,
                t.Nb(l, 23).useBrighterIcon,
                t.Nb(l, 31).markerClassEnabled,
                t.Nb(l, 32).useItemPlaceholder,
              ));
          },
        );
      }
      function Ll(e) {
        return t.ac(
          2,
          [
            (e()(), t.hb(16777216, null, null, 6, null, Ol)),
            t.xb(
              1,
              16384,
              null,
              0,
              Xe.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, $e.b, [t.h]),
            t.Pb(131072, $e.b, [t.h]),
            t.Pb(131072, $e.b, [t.h]),
            t.Pb(131072, $e.b, [t.h]),
            t.Qb(6, { location: 0, contacts: 1, state: 2, viewContext: 3 }),
          ],
          function (e, l) {
            var n = l.component,
              a = e(
                l,
                6,
                0,
                t.Yb(l, 1, 0, t.Nb(l, 2).transform(n.location$)),
                t.Yb(l, 1, 0, t.Nb(l, 3).transform(n.contacts$)),
                t.Yb(l, 1, 0, t.Nb(l, 4).transform(n.state$)),
                t.Yb(l, 1, 0, t.Nb(l, 5).transform(n.viewContext$)),
              );
            e(l, 1, 0, a);
          },
          null,
        );
      }
      function Il(e) {
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
              "au3-message-addressbook",
              [],
              null,
              null,
              null,
              Ll,
              Tl,
            )),
            t.xb(
              1,
              245760,
              null,
              0,
              D,
              [d.a, Re.a, p.c, T.a, C.a, J.a],
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
      var $l = t.ub("au3-message-addressbook", D, Il, {}, {}, []),
        El = n("7vUL"),
        Nl = n("4UH/"),
        _l = n("+vJ/"),
        Pl = n("YEFf"),
        Cl = n("m3Ja"),
        Ml = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.component-layout-arabic[_nghost-%COMP%]   .recipients[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .recipients[_ngcontent-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .recipients__name[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .recipients__name[_ngcontent-%COMP%]{margin-right:30px;margin-left:0}.component-layout-arabic[_nghost-%COMP%]   .subject[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .subject[_ngcontent-%COMP%]{direction:rtl}.component-layout-latin[_nghost-%COMP%]   .recipients[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .recipients[_ngcontent-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .recipients__name[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .recipients__name[_ngcontent-%COMP%]{margin-left:30px;margin-right:0}.component-layout-latin[_nghost-%COMP%]   .subject[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .subject[_ngcontent-%COMP%]{direction:ltr}[_nghost-%COMP%]{display:block;width:100%;height:100%}",
            ],
          ],
          data: {},
        });
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
              36,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:MSG_*_EDIT"],
              ],
              null,
              null,
              null,
              _e.b,
              _e.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, oe.a, [J.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              31,
              "au3-title-line",
              [["id", "TitleLine"]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Pe.b,
              Pe.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              16384,
              null,
              0,
              Ne.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(6, { name: 0 }),
            t.xb(
              7,
              49152,
              null,
              0,
              Ce.a,
              [Me.a, De.a],
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
            t.Pb(131072, $e.b, [t.h]),
            t.Pb(131072, $e.b, [t.h]),
            (e()(),
            t.yb(
              10,
              0,
              null,
              0,
              11,
              "au3-title-line-item",
              [
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
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== e.component.routingService.goBack() && t),
                  t
                );
              },
              je.b,
              je.a,
            )),
            t.xb(11, 147456, null, 0, le.a, [t.l, t.z], null, null),
            t.xb(
              12,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              ne.a,
              [le.a, [2, te.a], [2, q.a], J.a],
              null,
              null,
            ),
            t.xb(
              14,
              212992,
              null,
              0,
              ae.a,
              [
                J.a,
                ie.b,
                ne.a,
                [2, te.a],
                [2, q.a],
                [2, ue.a],
                [2, oe.a],
                [2, se.a],
                t.z,
                ce.a,
                t.l,
                [2, re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              15,
              147456,
              null,
              0,
              we.a,
              [J.a, Ae.a, t.l, [2, ae.a], [2, ue.a]],
              null,
              null,
            ),
            t.xb(16, 16384, null, 0, Ee.a, [], null, null),
            t.Sb(131584, null, be.a, be.a, [[3, be.a]]),
            t.xb(
              18,
              4407296,
              null,
              0,
              de.a,
              [
                t.l,
                pe.a,
                t.h,
                be.a,
                [2, he.a],
                [2, te.b],
                [2, te.a],
                [2, me.a],
                [2, ge.a],
              ],
              null,
              null,
            ),
            t.xb(
              19,
              49152,
              null,
              0,
              ke.a,
              [[2, ue.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              20,
              147456,
              null,
              0,
              Se.a,
              [
                [2, ae.a],
                [2, ue.a],
                [2, ve.a],
                [2, de.a],
                [2, ye.b],
                t.l,
                Te.a,
                fe.b,
              ],
              null,
              null,
            ),
            t.xb(
              21,
              147456,
              null,
              0,
              Oe.a,
              [[2, de.a], [2, ae.a], [2, ie.b], Le.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              22,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "GoToSettings"],
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
              je.b,
              je.a,
            )),
            t.xb(
              23,
              147456,
              null,
              0,
              ue.a,
              [Ie.a, t.h, J.a, [3, ue.a]],
              null,
              null,
            ),
            t.xb(24, 147456, null, 0, le.a, [t.l, t.z], null, null),
            t.xb(
              25,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              26,
              147456,
              null,
              0,
              ne.a,
              [le.a, [2, te.a], [2, q.a], J.a],
              null,
              null,
            ),
            t.xb(
              27,
              212992,
              null,
              0,
              ae.a,
              [
                J.a,
                ie.b,
                ne.a,
                [2, te.a],
                [2, q.a],
                [2, ue.a],
                [2, oe.a],
                [2, se.a],
                t.z,
                ce.a,
                t.l,
                [2, re.a],
              ],
              null,
              null,
            ),
            t.xb(
              28,
              671744,
              null,
              0,
              Be.a,
              [Re.a, Ge.i, ue.a, ae.a, Be.b, Fe.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(29, 16384, null, 0, Ee.a, [], null, null),
            t.Sb(131584, null, be.a, be.a, [[3, be.a]]),
            t.xb(
              31,
              4407296,
              null,
              0,
              de.a,
              [
                t.l,
                pe.a,
                t.h,
                be.a,
                [2, he.a],
                [2, te.b],
                [2, te.a],
                [2, me.a],
                [2, ge.a],
              ],
              null,
              null,
            ),
            t.xb(
              32,
              49152,
              null,
              0,
              ke.a,
              [[2, ue.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              33,
              147456,
              null,
              0,
              Se.a,
              [
                [2, ae.a],
                [2, ue.a],
                [2, ve.a],
                [2, de.a],
                [2, ye.b],
                t.l,
                Te.a,
                fe.b,
              ],
              null,
              null,
            ),
            t.xb(
              34,
              147456,
              null,
              0,
              Oe.a,
              [[2, de.a], [2, ae.a], [2, ie.b], Le.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              35,
              0,
              null,
              0,
              1,
              "au3-edit-message-view",
              [],
              null,
              null,
              null,
              El.b,
              El.a,
            )),
            t.xb(
              36,
              180224,
              null,
              0,
              Nl.a,
              [
                d.a,
                Re.a,
                p.c,
                T.a,
                w.a,
                _l.g,
                Pl.c,
                Cl.a,
                h.a,
                xl.a,
                Ge.i,
                [2, el.a],
                fe.b,
                J.a,
              ],
              null,
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "Screen:MSG_*_EDIT"),
              e(l, 2, 0, "Screen:MSG_*_EDIT"),
              e(l, 4, 0, "TitleLine"));
            var a = e(
              l,
              6,
              0,
              null == l.context.mib3Let || null == l.context.mib3Let.account
                ? null
                : l.context.mib3Let.account.name,
            );
            (e(l, 5, 0, a),
              e(
                l,
                7,
                0,
                n.infoService.getMsgHeader(
                  null == l.context.mib3Let ? null : l.context.mib3Let.account,
                ),
                n.infoService.getMsgHeader(
                  null == l.context.mib3Let ? null : l.context.mib3Let.account,
                ),
                n.headerEnum,
                t.Yb(
                  l,
                  7,
                  3,
                  t
                    .Nb(l, 8)
                    .transform(n.messagingOperationsService.operationType$),
                ),
                t.Yb(
                  l,
                  7,
                  4,
                  t
                    .Nb(l, 9)
                    .transform(n.messagingOperationsService.operationType$),
                ),
                n.MessagingOperationTypeEnum,
              ),
              e(l, 12, 0, "BackButton"),
              e(l, 14, 0),
              e(l, 18, 0),
              e(l, 19, 0, !1, "E163_Backbutton.webp"),
              e(l, 25, 0, "GoToSettings"),
              e(l, 27, 0),
              e(l, 28, 0, n.MessagingRoute.children.Settings, !0),
              e(l, 31, 0),
              e(l, 32, 0, !1, "E186_settings.webp"));
          },
          function (e, l) {
            (e(
              l,
              3,
              0,
              t.Nb(l, 7).hideLeftBorder,
              t.Nb(l, 7).hideDividingBorders,
            ),
              e(
                l,
                10,
                0,
                t.Nb(l, 18).markerClassEnabled,
                t.Nb(l, 19).useItemPlaceholder,
              ),
              e(
                l,
                22,
                0,
                t.Nb(l, 23).combinedDisabled,
                t.Nb(l, 23).useBrighterIcon,
                t.Nb(l, 31).markerClassEnabled,
                t.Nb(l, 32).useItemPlaceholder,
              ));
          },
        );
      }
      function jl(e) {
        return t.ac(
          2,
          [
            (e()(), t.hb(16777216, null, null, 2, null, Dl)),
            t.xb(
              1,
              16384,
              null,
              0,
              Xe.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, $e.b, [t.h]),
          ],
          function (e, l) {
            var n = l.component;
            e(l, 1, 0, t.Yb(l, 1, 0, t.Nb(l, 2).transform(n.location$)));
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
              1,
              "au3-edit-message",
              [],
              null,
              null,
              null,
              jl,
              Ml,
            )),
            t.xb(
              1,
              245760,
              null,
              0,
              f,
              [Re.a, d.a, y.b, p.c, T.a, J.a],
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
      var Al = t.ub("au3-edit-message", f, wl, {}, {}, []),
        kl = n("8TlW"),
        Bl = n("Xo58"),
        Rl = n("HVUF"),
        Gl = n("B3Zb"),
        Fl = n("eZMD"),
        Yl = n("HD2x"),
        zl = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;width:100%;height:100%}.recipient[_ngcontent-%COMP%]{height:100px;display:flex;align-items:center;max-width:100%;overflow:hidden}.recipient__name[_ngcontent-%COMP%]{flex:1 1 0;font-size:40px}.list[_ngcontent-%COMP%]{height:100%;width:100%;top:0;left:0;position:absolute}.disclaimer[_ngcontent-%COMP%]{position:relative;height:100%}",
            ],
          ],
          data: {},
        });
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
              je.b,
              je.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              ue.a,
              [Ie.a, t.h, J.a, [3, ue.a]],
              null,
              null,
            ),
            t.xb(2, 147456, null, 0, le.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              ne.a,
              [le.a, [2, te.a], [2, q.a], J.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              ae.a,
              [
                J.a,
                ie.b,
                ne.a,
                [2, te.a],
                [2, q.a],
                [2, ue.a],
                [2, oe.a],
                [2, se.a],
                t.z,
                ce.a,
                t.l,
                [2, re.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              Be.a,
              [Re.a, Ge.i, ue.a, ae.a, Be.b, Fe.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(7, 16384, null, 0, Ee.a, [], null, null),
            t.Sb(131584, null, be.a, be.a, [[3, be.a]]),
            t.xb(
              9,
              4407296,
              null,
              0,
              de.a,
              [
                t.l,
                pe.a,
                t.h,
                be.a,
                [2, he.a],
                [2, te.b],
                [2, te.a],
                [2, me.a],
                [2, ge.a],
              ],
              null,
              null,
            ),
            t.xb(
              10,
              49152,
              null,
              0,
              ke.a,
              [[2, ue.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              Se.a,
              [
                [2, ae.a],
                [2, ue.a],
                [2, ve.a],
                [2, de.a],
                [2, ye.b],
                t.l,
                Te.a,
                fe.b,
              ],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              Oe.a,
              [[2, de.a], [2, ae.a], [2, ie.b], Le.a],
              null,
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 3, 0, "SettingsButton"),
              e(l, 5, 0),
              e(l, 6, 0, n.MessagingRoutes.children.Settings, !0),
              e(l, 9, 0),
              e(l, 10, 0, !1, "E186_settings.webp"));
          },
          function (e, l) {
            e(
              l,
              0,
              0,
              t.Nb(l, 1).combinedDisabled,
              t.Nb(l, 1).useBrighterIcon,
              t.Nb(l, 9).markerClassEnabled,
              t.Nb(l, 10).useItemPlaceholder,
            );
          },
        );
      }
      function Vl(e) {
        return t.ac(
          0,
          [
            (e()(),
            t.yb(
              0,
              0,
              null,
              null,
              12,
              "div",
              [["class", "recipient"]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (e, l, n) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t =
                      !1 !==
                        e.component.deleteRecipient(
                          null == e.parent.parent.context.mib3Let ||
                            null == e.parent.parent.context.mib3Let.location
                            ? null
                            : e.parent.parent.context.mib3Let.location.account,
                          e.context.$implicit,
                        ) && t),
                  t
                );
              },
              null,
              null,
            )),
            t.xb(1, 147456, null, 0, le.a, [t.l, t.z], null, null),
            t.xb(
              2,
              147456,
              null,
              0,
              ne.a,
              [le.a, [2, te.a], [2, q.a], J.a],
              null,
              null,
            ),
            t.xb(
              3,
              212992,
              null,
              0,
              ae.a,
              [
                J.a,
                ie.b,
                ne.a,
                [2, te.a],
                [2, q.a],
                [2, ue.a],
                [2, oe.a],
                [2, se.a],
                t.z,
                ce.a,
                t.l,
                [2, re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, be.a, be.a, [[3, be.a]]),
            t.xb(
              5,
              4407296,
              null,
              0,
              de.a,
              [
                t.l,
                pe.a,
                t.h,
                be.a,
                [2, he.a],
                [2, te.b],
                [2, te.a],
                [2, me.a],
                [2, ge.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              147456,
              null,
              0,
              Se.a,
              [
                [2, ae.a],
                [2, ue.a],
                [2, ve.a],
                [2, de.a],
                [2, ye.b],
                t.l,
                Te.a,
                fe.b,
              ],
              null,
              null,
            ),
            t.xb(
              7,
              147456,
              null,
              0,
              Oe.a,
              [[2, de.a], [2, ae.a], [2, ie.b], Le.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              8,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "recipient__name"],
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
            t.xb(9, 16384, null, 0, Ee.a, [], null, null),
            t.xb(
              10,
              245760,
              null,
              0,
              Bl.a,
              [[8, null], Cl.a, t.h, t.l, t.D, [2, ee.a], [2, Ee.a], [2, Ne.a]],
              { nonI18nValue: [0, "nonI18nValue"] },
              null,
            ),
            (e()(),
            t.yb(
              11,
              0,
              null,
              null,
              1,
              "au3-icon",
              [
                ["class", "recipient__icon"],
                ["fileName", "EA10_icon_delete.webp"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              Rl.b,
              Rl.a,
            )),
            t.xb(
              12,
              4243456,
              null,
              0,
              Gl.b,
              [J.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 3, 0),
              e(l, 5, 0),
              e(l, 10, 0, n.getItemText(l.context.$implicit)),
              e(l, 12, 0, "EA10_icon_delete.webp", n.ICON_CATEGORY_LISTEND));
          },
          function (e, l) {
            (e(l, 0, 0, t.Nb(l, 5).markerClassEnabled),
              e(
                l,
                8,
                0,
                t.Nb(l, 10).backgroundColor,
                t.Nb(l, 10).fixedNumberOfLines,
                t.Nb(l, 10).mayContainLatinCharsForArabic,
                t.Nb(l, 10).shortenWithEllipsisForArabic,
              ),
              e(l, 11, 0, t.Nb(l, 12).iconComponentHidden));
          },
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
              6,
              "au3-list",
              [
                ["au3ListDomPaging", ""],
                ["class", "list"],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Ye.b,
              Ye.a,
            )),
            t.Sb(6144, null, ze.a, null, [He.a]),
            t.xb(2, 16384, null, 0, Ve.a, [t.l], null, null),
            t.xb(
              3,
              16384,
              null,
              0,
              We.a,
              [J.a],
              { itemHeightGuess: [0, "itemHeightGuess"] },
              null,
            ),
            t.xb(
              4,
              12828672,
              null,
              1,
              He.a,
              [
                [2, We.a],
                [2, Qe.a],
                [8, null],
                [2, q.a],
                [2, Ue.a],
                [2, Ke.a],
                [2, ie.b],
                Ge.i,
                t.z,
                t.h,
                J.a,
                Ze.a,
                qe.a,
                [2, pe.a],
                te.a,
                [2, Ge.a],
              ],
              {
                showCursor: [0, "showCursor"],
                itemHeightGuess: [1, "itemHeightGuess"],
                defaultTemplate: [2, "defaultTemplate"],
                items: [3, "items"],
              },
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (e()(),
            t.hb(
              0,
              [
                [1, 2],
                ["defaultTemplate", 2],
              ],
              0,
              0,
              null,
              Vl,
            )),
          ],
          function (e, l) {
            (e(l, 3, 0, 100),
              e(
                l,
                4,
                0,
                !1,
                100,
                t.Nb(l, 6),
                null == l.parent.context.mib3Let
                  ? null
                  : l.parent.context.mib3Let.delayedRecipients,
              ));
          },
          function (e, l) {
            e(l, 0, 0, t.Nb(l, 4).showLineNumbers);
          },
        );
      }
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
              2,
              "au3-instruction-text",
              [["id", "NoRecipients"]],
              null,
              null,
              null,
              Fl.b,
              Fl.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              Yl.a,
              [],
              { primaryDeveloperText: [0, "primaryDeveloperText"] },
              null,
            ),
          ],
          function (e, l) {
            (e(l, 1, 0, "NoRecipients"),
              e(l, 2, 0, "Es sind keine Empf\xe4nger mehr\nvorhanden."));
          },
          null,
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
              25,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:MSG_EDIT_DELETE_RECIPIENT"],
              ],
              null,
              null,
              null,
              _e.b,
              _e.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, oe.a, [J.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              17,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Pe.b,
              Pe.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              16384,
              null,
              0,
              Ne.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(6, { name: 0 }),
            t.xb(
              7,
              49152,
              null,
              0,
              Ce.a,
              [Me.a, De.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryId: [1, "primaryId"],
                primaryIdEnumType: [2, "primaryIdEnumType"],
                hasSecondaryText: [3, "hasSecondaryText"],
                secondaryDeveloperText: [4, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              8,
              0,
              null,
              0,
              10,
              "au3-title-line-item",
              [
                ["icon", "E163_Backbutton.webp"],
                ["id", "BackButton"],
                ["left", ""],
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
              je.b,
              je.a,
            )),
            t.xb(9, 147456, null, 0, le.a, [t.l, t.z], null, null),
            t.xb(
              10,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              ne.a,
              [le.a, [2, te.a], [2, q.a], J.a],
              null,
              null,
            ),
            t.xb(
              12,
              212992,
              null,
              0,
              ae.a,
              [
                J.a,
                ie.b,
                ne.a,
                [2, te.a],
                [2, q.a],
                [2, ue.a],
                [2, oe.a],
                [2, se.a],
                t.z,
                ce.a,
                t.l,
                [2, re.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              we.a,
              [J.a, Ae.a, t.l, [2, ae.a], [2, ue.a]],
              null,
              null,
            ),
            t.Sb(131584, null, be.a, be.a, [[3, be.a]]),
            t.xb(
              15,
              4407296,
              null,
              0,
              de.a,
              [
                t.l,
                pe.a,
                t.h,
                be.a,
                [2, he.a],
                [2, te.b],
                [2, te.a],
                [2, me.a],
                [2, ge.a],
              ],
              null,
              null,
            ),
            t.xb(
              16,
              49152,
              null,
              0,
              ke.a,
              [[2, ue.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              Se.a,
              [
                [2, ae.a],
                [2, ue.a],
                [2, ve.a],
                [2, de.a],
                [2, ye.b],
                t.l,
                Te.a,
                fe.b,
              ],
              null,
              null,
            ),
            t.xb(
              18,
              147456,
              null,
              0,
              Oe.a,
              [[2, de.a], [2, ae.a], [2, ie.b], Le.a],
              null,
              null,
            ),
            (e()(), t.hb(16777216, null, 2, 1, null, Hl)),
            t.xb(
              20,
              16384,
              null,
              0,
              $e.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            t.yb(
              21,
              0,
              null,
              0,
              4,
              "au3-disclaimer",
              [["class", "disclaimer"]],
              null,
              null,
              null,
              ml.b,
              ml.a,
            )),
            t.xb(
              22,
              4440064,
              null,
              0,
              gl.a,
              [xl.a, [2, q.a], t.h, J.a],
              null,
              null,
            ),
            (e()(), t.hb(16777216, null, 0, 1, null, Wl)),
            t.xb(
              24,
              16384,
              null,
              0,
              $e.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(), t.hb(0, [["noRecipients", 2]], 0, 0, null, Ql)),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "Screen:MSG_EDIT_DELETE_RECIPIENT"),
              e(l, 2, 0, "Screen:MSG_EDIT_DELETE_RECIPIENT"),
              e(l, 4, 0, ""));
            var a = e(
              l,
              6,
              0,
              null == l.context.mib3Let ||
                null == l.context.mib3Let.location ||
                null == l.context.mib3Let.location.account
                ? null
                : l.context.mib3Let.location.account.name,
            );
            (e(l, 5, 0, a),
              e(
                l,
                7,
                0,
                n.infoService.getMsgHeader(
                  null == l.context.mib3Let ||
                    null == l.context.mib3Let.location
                    ? null
                    : l.context.mib3Let.location.account,
                ),
                n.infoService.getMsgHeader(
                  null == l.context.mib3Let ||
                    null == l.context.mib3Let.location
                    ? null
                    : l.context.mib3Let.location.account,
                ),
                n.headerEnum,
                !0,
                "Empf. l\xf6schen",
              ),
              e(l, 10, 0, "BackButton"),
              e(l, 12, 0),
              e(l, 15, 0),
              e(l, 16, 0, !1, "E163_Backbutton.webp"),
              e(
                l,
                20,
                0,
                !(null == l.context.mib3Let || !l.context.mib3Let.recipients) &&
                  (null == l.context.mib3Let
                    ? null
                    : l.context.mib3Let.recipients.length) > 0,
              ),
              e(l, 22, 0),
              e(
                l,
                24,
                0,
                !(null == l.context.mib3Let || !l.context.mib3Let.recipients) &&
                  (null == l.context.mib3Let
                    ? null
                    : l.context.mib3Let.recipients.length) > 0,
                t.Nb(l, 25),
              ));
          },
          function (e, l) {
            (e(
              l,
              3,
              0,
              t.Nb(l, 7).hideLeftBorder,
              t.Nb(l, 7).hideDividingBorders,
            ),
              e(
                l,
                8,
                0,
                t.Nb(l, 15).markerClassEnabled,
                t.Nb(l, 16).useItemPlaceholder,
              ));
          },
        );
      }
      function Kl(e) {
        return t.ac(
          2,
          [
            (e()(), t.hb(16777216, null, null, 5, null, Ul)),
            t.xb(
              1,
              16384,
              null,
              0,
              Xe.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, $e.b, [t.h]),
            t.Pb(131072, $e.b, [t.h]),
            t.Pb(131072, $e.b, [t.h]),
            t.Qb(5, { location: 0, recipients: 1, delayedRecipients: 2 }),
          ],
          function (e, l) {
            var n = l.component,
              a = e(
                l,
                5,
                0,
                t.Yb(l, 1, 0, t.Nb(l, 2).transform(n.location$)),
                t.Yb(l, 1, 0, t.Nb(l, 3).transform(n.recipients$)),
                t.Yb(l, 1, 0, t.Nb(l, 4).transform(n.delayedRecipients$)),
              );
            e(l, 1, 0, a);
          },
          null,
        );
      }
      function Zl(e) {
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
              "au3-delete-recipient",
              [],
              null,
              null,
              null,
              Kl,
              zl,
            )),
            t.xb(1, 49152, null, 0, F, [d.a, T.a, p.c, Re.a, J.a], null, null),
          ],
          null,
          null,
        );
      }
      var ql = t.ub("au3-delete-recipient", F, Zl, {}, {}, []),
        Xl = n("oWpa"),
        Jl = n("yegR"),
        en = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{height:100%;width:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column}.statustext[_ngcontent-%COMP%]{font-size:40px;text-align:center;min-height:0}",
            ],
          ],
          data: {},
        });
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
              23,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:MSG_POPUP_SEND"],
              ],
              null,
              null,
              null,
              _e.b,
              _e.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, oe.a, [J.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              17,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Pe.b,
              Pe.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              16384,
              null,
              0,
              Ne.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(6, { name: 0 }),
            t.xb(
              7,
              49152,
              null,
              0,
              Ce.a,
              [Me.a, De.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryId: [1, "primaryId"],
                primaryIdEnumType: [2, "primaryIdEnumType"],
                secondaryDeveloperText: [3, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              8,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "GoToSettings"],
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
              je.b,
              je.a,
            )),
            t.xb(
              9,
              147456,
              null,
              0,
              ue.a,
              [Ie.a, t.h, J.a, [3, ue.a]],
              null,
              null,
            ),
            t.xb(10, 147456, null, 0, le.a, [t.l, t.z], null, null),
            t.xb(
              11,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              ne.a,
              [le.a, [2, te.a], [2, q.a], J.a],
              null,
              null,
            ),
            t.xb(
              13,
              212992,
              null,
              0,
              ae.a,
              [
                J.a,
                ie.b,
                ne.a,
                [2, te.a],
                [2, q.a],
                [2, ue.a],
                [2, oe.a],
                [2, se.a],
                t.z,
                ce.a,
                t.l,
                [2, re.a],
              ],
              null,
              null,
            ),
            t.xb(
              14,
              671744,
              null,
              0,
              Be.a,
              [Re.a, Ge.i, ue.a, ae.a, Be.b, Fe.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(15, 16384, null, 0, Ee.a, [], null, null),
            t.Sb(131584, null, be.a, be.a, [[3, be.a]]),
            t.xb(
              17,
              4407296,
              null,
              0,
              de.a,
              [
                t.l,
                pe.a,
                t.h,
                be.a,
                [2, he.a],
                [2, te.b],
                [2, te.a],
                [2, me.a],
                [2, ge.a],
              ],
              null,
              null,
            ),
            t.xb(
              18,
              49152,
              null,
              0,
              ke.a,
              [[2, ue.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              19,
              147456,
              null,
              0,
              Se.a,
              [
                [2, ae.a],
                [2, ue.a],
                [2, ve.a],
                [2, de.a],
                [2, ye.b],
                t.l,
                Te.a,
                fe.b,
              ],
              null,
              null,
            ),
            t.xb(
              20,
              147456,
              null,
              0,
              Oe.a,
              [[2, de.a], [2, ae.a], [2, ie.b], Le.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              21,
              0,
              null,
              0,
              2,
              "au3-statustext",
              [
                ["class", "statustext"],
                ["id", ""],
              ],
              null,
              null,
              null,
              Xl.b,
              Xl.a,
            )),
            t.xb(
              22,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              23,
              49152,
              null,
              0,
              Jl.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (e, l) {
            var n = l.component;
            (e(l, 1, 0, "Screen:MSG_POPUP_SEND"),
              e(l, 2, 0, "Screen:MSG_POPUP_SEND"),
              e(l, 4, 0, ""));
            var t = e(
              l,
              6,
              0,
              null == l.context.mib3Let ? null : l.context.mib3Let.name,
            );
            (e(l, 5, 0, t),
              e(
                l,
                7,
                0,
                n.infoService.getMsgHeader(l.context.mib3Let),
                n.infoService.getMsgHeader(l.context.mib3Let),
                n.headerEnum,
                "Hinweis",
              ),
              e(l, 11, 0, "GoToSettings"),
              e(l, 13, 0),
              e(l, 14, 0, n.MessagingRoute.Settings, !0),
              e(l, 17, 0),
              e(l, 18, 0, !1, "E186_settings.webp"),
              e(l, 22, 0, ""),
              e(l, 23, 0, 6, "Nachricht wird gesendet.\nBitte warten..."));
          },
          function (e, l) {
            (e(
              l,
              3,
              0,
              t.Nb(l, 7).hideLeftBorder,
              t.Nb(l, 7).hideDividingBorders,
            ),
              e(
                l,
                8,
                0,
                t.Nb(l, 9).combinedDisabled,
                t.Nb(l, 9).useBrighterIcon,
                t.Nb(l, 17).markerClassEnabled,
                t.Nb(l, 18).useItemPlaceholder,
              ));
          },
        );
      }
      function nn(e) {
        return t.ac(
          2,
          [
            (e()(), t.hb(16777216, null, null, 2, null, ln)),
            t.xb(
              1,
              16384,
              null,
              0,
              Xe.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, $e.b, [t.h]),
          ],
          function (e, l) {
            var n = l.component;
            e(l, 1, 0, t.Yb(l, 1, 0, t.Nb(l, 2).transform(n.account$)));
          },
          null,
        );
      }
      function tn(e) {
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
              "au3-message-sending",
              [],
              null,
              null,
              null,
              nn,
              en,
            )),
            t.xb(1, 49152, null, 0, B, [d.a, T.a], null, null),
          ],
          null,
          null,
        );
      }
      var an = t.ub("au3-message-sending", B, tn, {}, {}, []),
        un = n("ZXHi"),
        on = n("IRNg"),
        sn = t.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}",
            ],
          ],
          data: {},
        });
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
              25,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:MSG_TEMPLATE_WAIT_LOADING"],
              ],
              null,
              null,
              null,
              _e.b,
              _e.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, oe.a, [J.a], { id: [0, "id"] }, null),
            (e()(),
            t.yb(
              3,
              0,
              null,
              0,
              17,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Pe.b,
              Pe.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              16384,
              null,
              0,
              Ne.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(6, { name: 0 }),
            t.xb(
              7,
              49152,
              null,
              0,
              Ce.a,
              [Me.a, De.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryId: [1, "primaryId"],
                primaryIdEnumType: [2, "primaryIdEnumType"],
                secondaryDeveloperText: [3, "secondaryDeveloperText"],
              },
              null,
            ),
            (e()(),
            t.yb(
              8,
              0,
              null,
              2,
              12,
              "au3-title-line-item",
              [
                ["icon", "E186_settings.webp"],
                ["id", "GoToSettings"],
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
              je.b,
              je.a,
            )),
            t.xb(
              9,
              147456,
              null,
              0,
              ue.a,
              [Ie.a, t.h, J.a, [3, ue.a]],
              null,
              null,
            ),
            t.xb(10, 147456, null, 0, le.a, [t.l, t.z], null, null),
            t.xb(
              11,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              ne.a,
              [le.a, [2, te.a], [2, q.a], J.a],
              null,
              null,
            ),
            t.xb(
              13,
              212992,
              null,
              0,
              ae.a,
              [
                J.a,
                ie.b,
                ne.a,
                [2, te.a],
                [2, q.a],
                [2, ue.a],
                [2, oe.a],
                [2, se.a],
                t.z,
                ce.a,
                t.l,
                [2, re.a],
              ],
              null,
              null,
            ),
            t.xb(
              14,
              671744,
              null,
              0,
              Be.a,
              [Re.a, Ge.i, ue.a, ae.a, Be.b, Fe.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            t.xb(15, 16384, null, 0, Ee.a, [], null, null),
            t.Sb(131584, null, be.a, be.a, [[3, be.a]]),
            t.xb(
              17,
              4407296,
              null,
              0,
              de.a,
              [
                t.l,
                pe.a,
                t.h,
                be.a,
                [2, he.a],
                [2, te.b],
                [2, te.a],
                [2, me.a],
                [2, ge.a],
              ],
              null,
              null,
            ),
            t.xb(
              18,
              49152,
              null,
              0,
              ke.a,
              [[2, ue.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              19,
              147456,
              null,
              0,
              Se.a,
              [
                [2, ae.a],
                [2, ue.a],
                [2, ve.a],
                [2, de.a],
                [2, ye.b],
                t.l,
                Te.a,
                fe.b,
              ],
              null,
              null,
            ),
            t.xb(
              20,
              147456,
              null,
              0,
              Oe.a,
              [[2, de.a], [2, ae.a], [2, ie.b], Le.a],
              null,
              null,
            ),
            (e()(),
            t.yb(
              21,
              0,
              null,
              0,
              4,
              "au3-init-view",
              [],
              null,
              null,
              null,
              un.b,
              un.a,
            )),
            t.xb(22, 49152, null, 0, on.a, [], null, null),
            (e()(),
            t.yb(
              23,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [["id", "MessageTemplateLoading"]],
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
            t.xb(
              24,
              212992,
              null,
              0,
              q.a,
              [t.l, t.D, X.a, J.a, [3, q.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              25,
              245760,
              null,
              0,
              Bl.a,
              [[6, q.a], Cl.a, t.h, t.l, t.D, [2, ee.a], [2, Ee.a], [2, Ne.a]],
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
            (e(l, 1, 0, "Screen:MSG_TEMPLATE_WAIT_LOADING"),
              e(l, 2, 0, "Screen:MSG_TEMPLATE_WAIT_LOADING"),
              e(l, 4, 0, ""));
            var t = e(
              l,
              6,
              0,
              null == l.context.mib3Let || null == l.context.mib3Let.account
                ? null
                : l.context.mib3Let.account.name,
            );
            (e(l, 5, 0, t),
              e(
                l,
                7,
                0,
                n.infoService.getMsgHeader(
                  null == l.context.mib3Let ? null : l.context.mib3Let.account,
                ),
                n.infoService.getMsgHeader(
                  null == l.context.mib3Let ? null : l.context.mib3Let.account,
                ),
                n.accountTypeEnum,
                "Hinweis",
              ),
              e(l, 11, 0, "GoToSettings"),
              e(l, 13, 0),
              e(l, 14, 0, n.SendMessageRoute.children.Settings, !0),
              e(l, 17, 0),
              e(l, 18, 0, !1, "E186_settings.webp"),
              e(l, 24, 0, "MessageTemplateLoading"),
              e(
                l,
                25,
                0,
                "Die Nachricht wird geladen.\nBitte warten...",
                "MessageTemplateLoading",
                4,
              ));
          },
          function (e, l) {
            (e(
              l,
              3,
              0,
              t.Nb(l, 7).hideLeftBorder,
              t.Nb(l, 7).hideDividingBorders,
            ),
              e(
                l,
                8,
                0,
                t.Nb(l, 9).combinedDisabled,
                t.Nb(l, 9).useBrighterIcon,
                t.Nb(l, 17).markerClassEnabled,
                t.Nb(l, 18).useItemPlaceholder,
              ),
              e(
                l,
                23,
                0,
                t.Nb(l, 25).backgroundColor,
                t.Nb(l, 25).fixedNumberOfLines,
                t.Nb(l, 25).mayContainLatinCharsForArabic,
                t.Nb(l, 25).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function rn(e) {
        return t.ac(
          2,
          [
            (e()(), t.hb(16777216, null, null, 4, null, cn)),
            t.xb(
              1,
              16384,
              null,
              0,
              Xe.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, $e.b, [t.h]),
            t.Pb(131072, $e.b, [t.h]),
            t.Qb(4, { account: 0, accountsAvailable: 1 }),
          ],
          function (e, l) {
            var n = l.component,
              a = e(
                l,
                4,
                0,
                t.Yb(l, 1, 0, t.Nb(l, 2).transform(n.account$)),
                t.Yb(l, 1, 0, t.Nb(l, 3).transform(n.accountsAvailable$)),
              );
            e(l, 1, 0, a);
          },
          null,
        );
      }
      function bn(e) {
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
              "au3-template-loading",
              [],
              null,
              null,
              null,
              rn,
              sn,
            )),
            t.xb(1, 245760, null, 0, A, [d.a, T.a, h.a, w.a, Re.a], null, null),
          ],
          function (e, l) {
            e(l, 1, 0);
          },
          null,
        );
      }
      var dn = t.ub("au3-template-loading", A, bn, {}, {}, []),
        pn = n("aDqW"),
        hn = n("/W5r"),
        mn = n("+Qv1"),
        gn = n("XtoR"),
        xn = n("jTHl"),
        Sn = n("zL3T"),
        vn = n("t8AR"),
        yn = n("+epw"),
        Tn = n("zMPs"),
        fn = n("6Yk8"),
        On = n("u6+O"),
        Ln = n("CIQC"),
        In = n("REmV"),
        $n = n("Y3N+"),
        En = n("MJxn"),
        Nn = n("eIOF"),
        _n = n("t+4g"),
        Pn = n("myjn"),
        Cn = n("fOZ7"),
        Mn = n("TBks"),
        Dn = n("yUFt"),
        jn = n("QDrj"),
        wn = n("YCQm"),
        An = n("ygUF"),
        kn = n("1VvW"),
        Bn = t.vb(U, [], function (e) {
          return t.Kb([
            t.Lb(512, t.j, t.X, [
              [8, [K.a, hl, $l, Al, ql, an, dn]],
              [3, t.j],
              t.x,
            ]),
            t.Lb(4608, $e.m, $e.l, [t.u]),
            t.Lb(4608, pn.h, pn.g, []),
            t.Lb(4608, pn.d, pn.f, []),
            t.Lb(4608, pn.j, pn.e, []),
            t.Lb(4608, pn.c, pn.b, []),
            t.Lb(4608, pn.k, pn.k, [
              pn.l,
              pn.h,
              pn.d,
              pn.j,
              pn.c,
              pn.m,
              pn.o,
              pn.n,
              pn.a,
            ]),
            t.Lb(4608, hn.b, hn.b, [mn.e, [2, hn.a]]),
            t.Lb(4608, gn.b, gn.b, [mn.e, [2, gn.a]]),
            t.Lb(4608, xn.b, xn.b, [mn.e, [2, xn.a]]),
            t.Lb(4608, Sn.b, Sn.b, [mn.e, [2, Sn.a]]),
            t.Lb(4608, H.a, H.a, [w.a, J.a]),
            t.Lb(4608, Y.a, Y.a, [vn.a, J.a]),
            t.Lb(4608, z.a, z.a, [w.a, J.a]),
            t.Lb(1073742336, $e.c, $e.c, []),
            t.Lb(1073742336, pn.i, pn.i, []),
            t.Lb(1073742336, yn.a, yn.a, []),
            t.Lb(1073742336, Tn.a, Tn.a, []),
            t.Lb(1073742336, fn.a, fn.a, []),
            t.Lb(1073742336, On.a, On.a, []),
            t.Lb(1073742336, Ln.a, Ln.a, []),
            t.Lb(1073742336, In.a, In.a, []),
            t.Lb(1073742336, $n.a, $n.a, []),
            t.Lb(1073742336, En.a, En.a, []),
            t.Lb(1073742336, Nn.a, Nn.a, []),
            t.Lb(1073742336, _n.a, _n.a, []),
            t.Lb(1073742336, Pn.a, Pn.a, []),
            t.Lb(1073742336, Cn.a, Cn.a, []),
            t.Lb(1073742336, Mn.a, Mn.a, []),
            t.Lb(1073742336, Dn.a, Dn.a, []),
            t.Lb(1073742336, jn.a, jn.a, []),
            t.Lb(1073742336, wn.a, wn.a, []),
            t.Lb(1073742336, An.a, An.a, []),
            t.Lb(1073742336, kn.n, kn.n, [
              [2, kn.s],
              [2, kn.m],
            ]),
            t.Lb(1073742336, U, U, []),
            t.Lb(256, pn.o, void 0, []),
            t.Lb(256, pn.m, void 0, []),
            t.Lb(256, pn.n, void 0, []),
            t.Lb(256, pn.a, void 0, []),
            t.Lb(
              1024,
              kn.k,
              function () {
                return [
                  [
                    {
                      path: "new-message",
                      component: g,
                      canActivate: [H.a, z.a, Y.a],
                    },
                    {
                      path: "message-addressbook",
                      component: D,
                      canActivate: [H.a, z.a, Y.a],
                    },
                    {
                      path: "edit-message",
                      component: f,
                      canActivate: [H.a, z.a, Y.a],
                    },
                    {
                      path: "delete-recipient",
                      component: F,
                      canActivate: [H.a, z.a, Y.a],
                    },
                    {
                      path: "message-sending",
                      component: B,
                      canActivate: [H.a, z.a, Y.a],
                    },
                    {
                      path: "messaging-settings",
                      loadChildren: V,
                      canActivate: [H.a, z.a, Y.a],
                    },
                    { path: "addressbook-settings", loadChildren: W },
                    {
                      path: "search",
                      loadChildren: Q,
                      canActivate: [H.a, z.a, Y.a],
                    },
                    {
                      path: "template-loading",
                      component: A,
                      canActivate: [H.a, z.a, Y.a],
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
