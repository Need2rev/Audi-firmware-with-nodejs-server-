(window.webpackJsonp = window.webpackJsonp || []).push([
  [97],
  {
    SueR: function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return a;
      });
      var r = s("XY/Y"),
        i = s("zcBZ");
      class a {
        transform(e) {
          switch (e) {
            case r.c.MOBILE:
            case i.a.MOBILE:
              return "Mobil";
            case r.c.LANDLINE:
            case i.a.LANDLINE:
              return "Festnetz";
            case r.c.PRIVATE:
            case i.a.PRIVATE:
              return "Privat";
            case r.c.BUSINESS:
            case i.a.BUSINESS:
              return "Gesch\xe4ftlich";
            case r.c.FAX:
            case i.a.FAX:
              return "Fax";
            case r.c.UNKNOWN:
            case i.a.UNKNOWN:
            default:
              return "";
          }
        }
      }
    },
    "e+pb": function (e, t, s) {
      "use strict";
      (s.d(t, "b", function () {
        return A;
      }),
        s.d(t, "a", function () {
          return F;
        }));
      var r = s("QQZH"),
        i = s("C05f"),
        a = s("HM3f"),
        c = s("ROBh"),
        n = s("6Oco"),
        o = s("IdLP"),
        h = s("YtkY"),
        u = s("xVbo"),
        d = s("Ohay"),
        p = s("kuMc"),
        S = s("fnmL"),
        l = s("TLy2"),
        b = s("BwBJ"),
        g = s("8j5Y"),
        v = s("J+dc"),
        $ = s("AEBN"),
        m = s("Yi6/"),
        O = s("Zbi+"),
        j = s("zcBZ"),
        f = s("q+H2"),
        T = (s("VDgF"), s("YEFf"), s("j7uj")),
        I = s("pWIT"),
        y = (s("6xFL"), s("P1io")),
        A = (function (e) {
          return (
            (e.Global = "global"),
            (e.Addressbook = "addressbook"),
            (e.MessagingAddressbook = "messaging-addressbook"),
            (e.CallHistory = "call-history"),
            (e.Favorites = "favorites"),
            e
          );
        })({});
      class F {
        constructor(e, t, s, c, n, o, b) {
          ((this.routingService = e),
            (this.textInputService = t),
            (this.phoneService = s),
            (this.searchService = c),
            (this.proposalValidationService = n),
            (this.addressbookService = o),
            (this.initialSuggestions$$ = new r.a(1)),
            (this.searchResults$$ = new r.a(1)),
            (this.searchStatus$$ = new i.a(T.a.WaitingForInput)),
            (this.searchId$$ = new i.a("")),
            (this.searchType$$ = new r.a(1)),
            (this.searchDeviceId$$ = new r.a(1)),
            (this.needles$$ = new i.a([])),
            (this.destroyed$$ = new r.a(1)),
            (this.logger = b.getLogger("phone.PhoneSearchProviderService")),
            (this.deviceToSearch$ = Object(a.b)(
              this.phoneService.phones$,
              this.searchDeviceId$$,
            ).pipe(
              Object(h.a)(([e, t]) =>
                t
                  ? e.find((e) => !!e.device && e.device.id === t)
                  : e.focusDevice,
              ),
              Object(u.a)(m.wd),
              Object(d.a)((e, t) => e.id === t.id),
              Object(m.pd)(this.logger, "constructor: deviceToSearch$:"),
              Object(m.Kd)(),
            )));
          const g = this.searchType$$.pipe(
              Object(d.a)(),
              Object(h.a)((e) => {
                switch (e) {
                  case A.CallHistory:
                    return [j.d.CALLSTACK];
                  case A.MessagingAddressbook:
                  case A.Addressbook:
                    return [j.d.CONTACTS];
                  case A.Favorites:
                    return [j.d.FAVORITES];
                  default:
                    return [j.d.CALLSTACK, j.d.FAVORITES, j.d.CONTACTS];
                }
              }),
            ),
            v = this.needles$$.pipe(Object(d.a)(m.Xd));
          ((this.isEmptySearch$ = v.pipe(
            Object(h.a)((e) => Object(f.a)(e)),
            Object(p.a)(this.destroyed$$),
          )),
            this.deviceToSearch$
              .pipe(
                Object(S.a)(g, v),
                Object(l.a)(([e, t, s]) => this.createSearchForDevice(e, t, s)),
                Object(p.a)(this.destroyed$$),
              )
              .subscribe((e) => {
                this.searchId$$.next(e || "");
              }),
            (this.searchId$ = this.searchId$$.pipe(Object(d.a)())),
            (this.searchResults$ = this.searchResults$$.pipe(
              Object(h.a)((e) => e.map((e) => new I.a(e))),
            )),
            (this.searchStatus$ = this.searchStatus$$),
            (this.initialSuggestions$ = this.initialSuggestions$$.pipe(
              Object(h.a)((e) => e.map((e) => ({ text: e }))),
            )),
            this.subscribeToSearchService());
        }
        convert(e) {
          if (e) return j.b[O.l[e]];
        }
        subscribeToSearchService() {
          const e = this.searchId$.pipe(
              Object(l.a)((e) =>
                e
                  ? this.searchService
                      .searchResults$(e, Object(c.a)({ offset: 0, limit: 100 }))
                      .pipe(Object(h.a)((e) => e.data || []))
                  : Object(c.a)([]),
              ),
              Object(m.Kd)(),
            ),
            t = Object(a.b)(
              this.addressbookService.hideInvalidContacts$,
              this.addressbookService
                .contacts$(Object(c.a)({ offset: 0, limit: 100 }))
                .pipe(Object(h.a)((e) => e.data || [])),
            ).pipe(
              Object(h.a)(([e, t]) =>
                (e ? t.filter((e) => this.isContactValidForContext(e)) : t).map(
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
            s = this.phoneService.groupedRecentCalls$.pipe(
              Object(h.a)((e) =>
                e.map((e) => {
                  const t = e.entries && e.entries[0];
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
                      timestamp: t && t.timestamp,
                      type: this.convert(t && t.type),
                      contact: e.contact,
                    },
                  };
                }),
              ),
            ),
            r = this.addressbookService.favorites$.pipe(
              Object(l.a)((e) => {
                const t = e.map((e) => this.mapFavoriteToSearchResult(e));
                return t.length < 1 ? Object(c.a)([]) : Object(a.b)(...t);
              }),
            ),
            i = this.searchType$$.pipe(
              Object(l.a)((e) => {
                switch (e) {
                  case A.Addressbook:
                    return t;
                  case A.CallHistory:
                    return s;
                  case A.Favorites:
                    return r;
                  default:
                    return Object(c.a)([]);
                }
              }),
            );
          (e
            .pipe(
              Object(S.a)(i, this.searchStatus$),
              Object(p.a)(this.destroyed$$),
            )
            .subscribe(([e, t, s]) => {
              this.searchResults$$.next(
                (s === T.a.WaitingForInput ? t : e).map((e) => {
                  let t;
                  return (
                    (t = e.searchAdbEntry
                      ? e.searchAdbEntry.isFavorite
                        ? j.d.FAVORITES
                        : j.d.CONTACTS
                      : j.d.CALLSTACK),
                    { source: t, value: e }
                  );
                }),
              );
            }),
            this.searchId$
              .pipe(
                Object(d.a)(),
                Object(l.a)((e) =>
                  e ? this.searchService.searchState$(e) : Object(c.a)(void 0),
                ),
                Object(S.a)(this.needles$$, e),
                Object(l.a)(([e, t, s]) => {
                  const r = !!e && e.state === j.e.DONE;
                  return t && t[0]
                    ? r
                      ? r && 0 === s.length
                        ? (this.logger.debug("delay SearchCompleted status"),
                          Object(c.a)(T.a.SearchCompleted).pipe(
                            Object(b.a)(3e3),
                          ))
                        : Object(c.a)(T.a.SearchCompleted)
                      : Object(c.a)(T.a.Searching)
                    : Object(c.a)(T.a.WaitingForInput);
                }),
                Object(g.a)((e) =>
                  this.logger.debug(
                    "set searchStatus$ to ",
                    this.mapSearchStatusToString(e),
                  ),
                ),
                Object(p.a)(this.destroyed$$),
              )
              .subscribe((e) => {
                this.searchStatus$$.next(e);
              }),
            this.deviceToSearch$
              .pipe(
                Object(l.a)((e) =>
                  e && e.id
                    ? this.searchService.proposals$(e)
                    : Object(c.a)([]),
                ),
                Object(p.a)(this.destroyed$$),
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
                  Object(h.a)((t) => {
                    const s = this.getFavoriteNumberFromContact(t, e.index);
                    return {
                      id: "",
                      uri: "",
                      name: t ? t.name : "",
                      combinedName: t ? { text: t.name } : void 0,
                      numbers: [
                        {
                          number: s ? { text: s.number } : void 0,
                          numberType: s ? s.type : void 0,
                        },
                      ],
                      numberType: s ? s.type : void 0,
                      searchAdbEntry: { contact: t, isFavorite: !0 },
                    };
                  }),
                )
            : e.number
              ? Object(c.a)({
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
                n.a);
        }
        getFavoriteNumberFromContact(e, t) {
          if (e && e.phoneNumberList && 0 !== e.phoneNumberList.length)
            return t && e.phoneNumberList.length > t
              ? e.phoneNumberList[t]
              : e.phoneNumberList.find((e) => !!e.isFavorite);
        }
        mapSearchStatusToString(e) {
          switch (e) {
            case T.a.WaitingForInput:
              return "WaitingForInput";
            case T.a.Searching:
              return "Searching";
            case T.a.SearchCompleted:
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
        setSearchTypeAndDevice(e, t) {
          (this.logger.info("setSearchTypeAndDevice", {
            searchType: e,
            deviceId: t,
          }),
            this.searchType$$.next(e),
            this.searchDeviceId$$.next(t));
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
          return $.e.TIF_ID_05_SEARCH_FIELD_PHONE_LISTS;
        }
        createSearch(e) {
          ((this.needles = e),
            this.logger.info("search needles changed:", e),
            this.needles$$.next(e));
        }
        restoreSearch(e) {
          return e
            ? new Promise((t, s) => {
                (this.stopSearch(),
                  this.searchService
                    .getExistingSearch(e)
                    .pipe(Object(p.a)(this.destroyed$$), Object(v.a)(1))
                    .subscribe(
                      (e) => {
                        (this.logger.info(
                          "restoreSearch: received previous search: ",
                          e,
                        ),
                          e.state === j.e.DONE
                            ? (this.searchId$$.next(e.id), t(!0))
                            : t(!1));
                      },
                      (e) => {
                        (this.logger.error(
                          "restoreSearch: error retrieving previous search: ",
                          e,
                        ),
                          t(!1));
                      },
                      () => {
                        (this.logger.info(
                          "restoreSearch: getExistingSearch completed without getting a previous search",
                        ),
                          t(!1));
                      },
                    ));
              })
            : Promise.resolve(!1);
        }
        replaceInput(e, t) {
          this.textInputService.replace(e, t);
        }
        stopSearch() {
          this.logger.info("stopping search");
        }
        addToDictionary(e) {
          this.textInputService.addWordsFromTruffleResultToDictionary(
            e.staticObject,
          );
        }
        getDynamicSuggestions$(e, t) {
          this.logger.info("getting dynamic suggestions for:", e);
          const s = this.searchService.suggestions$(e).pipe(
              Object(h.a)((e) =>
                e.map((e) => ({
                  fullSuggestion: e.fullSuggestion,
                  suggestion: e.suggestion || "",
                  needleIndex: e.inputTextIndex,
                  type: e.suggestionType === j.f.FAST ? $.u.FAST : $.u.SLOW,
                })),
              ),
              Object(p.a)(this.destroyed$$),
              Object(m.Kd)(),
            ),
            r = s.pipe(
              Object(h.a)((e) => e.filter((e) => e.type === $.u.FAST)),
            ),
            i = s.pipe(
              Object(h.a)((e) => e.filter((e) => e.type !== $.u.FAST)),
            );
          return this.proposalValidationService.validateProposals(t, r, i);
        }
        saveInputAsProposal() {
          const e = this.phoneService.phones.focusDevice,
            t = this.needles && this.needles[0];
          e && t && this.searchService.addProposal(e, t);
        }
        isContactValidForContext(e) {
          return this.routingService.activeAppContextSnapshot === y.w
            ? !!e.phoneNumberList && e.phoneNumberList.length > 0
            : this.routingService.activeAppContextSnapshot === y.u
              ? !!e.addressList && e.addressList.length > 0
              : this.routingService.activeAppContextSnapshot !== y.t ||
                (!!e.emailList && e.emailList.length > 0);
        }
        createSearchForDevice(e, t, s) {
          return s && s[0]
            ? new o.a((r) => {
                const a = new i.a(!1);
                return (
                  this.logger.info(
                    "attempting to create a new search object:",
                    { device: e, sources: t, needles: s },
                  ),
                  this.searchService
                    .createSearch(e, t, s)
                    .pipe(Object(S.a)(a))
                    .subscribe(([s, i]) => {
                      (this.logger.info("handling update for search object:", {
                        deviceId: e.id,
                        sources: t,
                        searchId: s,
                        unsubscribed: i,
                      }),
                        s
                          ? i
                            ? (r.complete(), this.searchService.deleteSearch(s))
                            : r.next(s)
                          : i ||
                            this.logger.error(
                              "creating a search object failed, no searchId received",
                            ));
                    }),
                  () => a.next(!0)
                );
              })
            : Object(c.a)(void 0);
        }
      }
    },
    j7uj: function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return r;
      });
      var r = (function (e) {
        return (
          (e[(e.WaitingForInput = 0)] = "WaitingForInput"),
          (e[(e.Searching = 1)] = "Searching"),
          (e[(e.SearchCompleted = 2)] = "SearchCompleted"),
          e
        );
      })({});
    },
    "q+H2": function (e, t, s) {
      "use strict";
      function r(e) {
        return !(e && e.length > 0 && "" !== e[0]);
      }
      s.d(t, "a", function () {
        return r;
      });
    },
    xS3h: function (e, t, s) {
      "use strict";
      (s.d(t, "a", function () {
        return h;
      }),
        s.d(t, "b", function () {
          return u;
        }));
      var r = s("Hnhs"),
        i = s("Yi6/"),
        a = s("kZht"),
        c = s("bou3"),
        n = s("sg2e"),
        o = s("yNay"),
        h = (function (e) {
          return (
            (e.saveShortcut = "Shortcut\nspeichern"),
            (e.SaveFavorite = "Favorit\nspeichern"),
            e
          );
        })({});
      let u = (() => {
        class e {
          constructor(e, t, s, r) {
            ((this.globalShortcutsService = e),
              (this.systemConfigService = t),
              (this.popupService = s),
              (this.initialSaveShortcutOption = {
                icon: "E3F0_save_shortcut_preset.webp",
                developerText: "Shortcut\nspeichern",
                visible: !1,
                enabled: !0,
                textId: h.saveShortcut,
              }),
              (this.logger = r.getLogger("main.ShortcutsOptionsService")));
          }
          saveShortcut(e) {
            return this.globalShortcutsService
              .addShortcut(e)
              .then((t) => {
                t === r.c.Saved
                  ? (this.logger.info(
                      `saveShortcut: Saved shortcut "${e.name}"`,
                    ),
                    this.popupService
                      .request(i.Ob.POPUP_TOAST_PRESET_SAVED)
                      .then((e) =>
                        this.logger.debug(
                          "saveShortcut: Show toast for successful saving of shortcut",
                          e,
                        ),
                      ))
                  : this.logger.warn(
                      `saveShortcut: Could not save shortcut "${e.name}"`,
                      t,
                    );
              })
              .catch((t) =>
                this.logger.error(
                  `saveShortcut: Could not save shortcut "${e.name}"`,
                  t,
                ),
              );
          }
          saveShortcutOption(e) {
            const t = this.globalShortcutsService.checkDuplicateShortcut(e);
            let s = void 0;
            return (
              this.globalShortcutsService.checkMaximumSavedShortcuts(e)
                ? (s = i.Ob.POPUP_TOAST_PRESET_MAXIMUM_PRESETS_SAVED)
                : t && (s = i.Ob.POPUP_TOAST_PRESET_ALREADY_SAVED),
              Object.assign(
                {},
                this.initialSaveShortcutOption,
                { disabledReason: s },
                { enabled: null == s },
                { visible: this.shortcutsAvailable },
              )
            );
          }
          get shortcutsAvailable() {
            return this.systemConfigService.isDualDisplay();
          }
        }
        return (
          (e.ɵprov = a.bc({
            factory: function () {
              return new e(a.cc(r.a), a.cc(c.a), a.cc(n.a), a.cc(o.a));
            },
            token: e,
            providedIn: "root",
          })),
          e
        );
      })();
    },
  },
]);
