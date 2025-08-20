(window.webpackJsonp = window.webpackJsonp || []).push([
  [47],
  {
    "99XO": function (l, t, e) {
      "use strict";
      (e.r(t),
        e.d(t, "AddressbookSettingsModuleNgFactory", function () {
          return Re;
        }));
      var n = e("kZht"),
        a = e("Yi6/"),
        i = e("bwdy"),
        o = e("8lHc"),
        u = e("6xFL"),
        r = e("XY/Y"),
        s = e("YEFf"),
        c = e("GZHS"),
        b = e("YtkY"),
        d = e("xVbo"),
        p = e("J+dc"),
        h = e("P1io"),
        m = (function (l) {
          return (
            (l.LASTNAME_COMMA_FIRSTNAME = "Name, Vorname"),
            (l.FIRSTNAME_LASTNAME = "Vorname Name"),
            l
          );
        })({}),
        x = (function (l) {
          return (
            (l.AUTO = "Auto"),
            (l.LASTNAME_COMMA_FIRSTNAME = "Name, Vorname"),
            (l.FIRSTNAME_LASTNAME = "Vorname Name"),
            l
          );
        })({}),
        g = (function (l) {
          return ((l.Contacts = "Kontakte"), (l.Settings = "Einstellungen"), l);
        })({});
      class f {
        constructor(l, t, e, n, o, u, s) {
          ((this.routingService = l),
            (this.addressbookService = t),
            (this.phoneService = e),
            (this.popupManager = n),
            (this.cdr = o),
            (this.ListItemTypes = a.rb),
            (this.titleTextEnum = g),
            (this.AddressbookSettingsRoute = c.a),
            (this.noFocusDeviceProfileAvailable = !0),
            (this.adbDownloadTriggered = !1),
            (this.noPublicContactsAvailable = !0),
            (this.selectedContactOrderItem = null),
            (this.contactSortOrderDataNonAsia = {
              labelIdEnumType: m,
              items: [
                {
                  itemId: 0,
                  labelId: m.LASTNAME_COMMA_FIRSTNAME,
                  developerText: m.LASTNAME_COMMA_FIRSTNAME,
                },
                {
                  itemId: 1,
                  labelId: m.FIRSTNAME_LASTNAME,
                  developerText: m.FIRSTNAME_LASTNAME,
                },
              ],
            }),
            (this.contactSortOrderDataAsia = {
              labelIdEnumType: x,
              items: [
                {
                  itemId: 0,
                  labelId: x.LASTNAME_COMMA_FIRSTNAME,
                  developerText: x.LASTNAME_COMMA_FIRSTNAME,
                },
                {
                  itemId: 1,
                  labelId: x.FIRSTNAME_LASTNAME,
                  developerText: x.FIRSTNAME_LASTNAME,
                },
                { itemId: 2, labelId: x.AUTO, developerText: x.AUTO },
              ],
            }),
            (this.subscriptions = new i.a()),
            (this.sortOrderResetTimer = i.a.EMPTY),
            (this.logger = s.getLogger(
              "settings.AddressbookSettingsComponent",
            )),
            (this.asia = u.isAsiaRegion()),
            (this.noProfilesAvailable$ = this.addressbookService.profiles$.pipe(
              Object(b.a)(
                (l) =>
                  !l ||
                  0 === l.length ||
                  l.every((l) => l.state === r.h.NOCONTACTS),
              ),
            )));
        }
        ngOnInit() {
          ((this.inSettingsContext =
            this.routingService.activeAppContextSnapshot === h.z),
            (this.secondPhone$ = this.phoneService.phone2$),
            this.subscriptions.add(
              this.addressbookService.publicProfile$.subscribe((l) => {
                (l &&
                  ((this.noPublicContactsAvailable = 0 === l.usedContacts),
                  l.sortOrder &&
                    (this.selectedContactOrderItem = this.getItemForSortOrder(
                      l.sortOrder,
                    ))),
                  this.cdr.markForCheck());
              }),
            ),
            this.subscriptions.add(
              this.addressbookService.focusDeviceProfileWithReload$.subscribe(
                (l) => {
                  ((this.noFocusDeviceProfileAvailable = !l),
                    l &&
                      l.sortOrder &&
                      (this.selectedContactOrderItem = this.getItemForSortOrder(
                        l.sortOrder,
                      )),
                    this.cdr.markForCheck());
                },
              ),
            ),
            this.subscriptions.add(
              this.addressbookService.operations$
                .pipe(
                  Object(b.a)((l) =>
                    l ? l.filter((l) => l.state !== r.f.DONE) : [],
                  ),
                )
                .subscribe((l) => {
                  ((this.importInProgress = l.find(
                    (l) => l.opType === r.e.IMPORT,
                  )),
                    (this.exportInProgress = l.find(
                      (l) => l.opType === r.e.EXPORT,
                    )),
                    this.cdr.markForCheck());
                }),
            ));
        }
        ngOnDestroy() {
          this.subscriptions.unsubscribe();
        }
        goToAdbDownload() {
          this.phoneService.hasConnectedPhones
            ? ((this.adbDownloadTriggered = !0),
              this.cdr.markForCheck(),
              this.addressbookService
                .reload(this.routingService.activeAppContextSnapshot === h.w)
                .catch((l) => {
                  this.logger.error(
                    `goToAdbDownload: Failed to reload addressbook profile: ${l}`,
                  );
                }),
              this.subscriptions.add(
                this.addressbookService.focusDeviceProfileWithReload$
                  .pipe(
                    Object(d.a)((l) => !!l && l.state === r.h.LOADING),
                    Object(p.a)(1),
                  )
                  .subscribe(() => {
                    this.routingService.goTo(c.a.children.ManualDownload);
                  }),
              ))
            : this.popupManager.request(
                a.Ob.POPUP_ADB_POPUP_SETUP_DWLD_NO_PHONE,
              );
        }
        updateSortOrder(l) {
          switch (l.itemId) {
            case 0:
              this.addressbookService.setSortOrderOfCurrentAndPublicProfile(
                r.g.LASTNAMECOMMAFIRSTNAME,
              );
              break;
            case 1:
              this.addressbookService.setSortOrderOfCurrentAndPublicProfile(
                r.g.FIRSTNAMELASTNAME,
              );
              break;
            case 2:
              this.addressbookService.setSortOrderOfCurrentAndPublicProfile(
                r.g.DYNAMIC,
              );
              break;
            default:
              this.logger.error("invalid sort order", l.itemId);
          }
          const t = this.selectedContactOrderItem;
          ((this.selectedContactOrderItem = l),
            this.sortOrderResetTimer.closed ||
              this.sortOrderResetTimer.unsubscribe(),
            (this.sortOrderResetTimer = Object(o.a)(1e3).subscribe(() => {
              this.selectedContactOrderItem = t;
            })),
            this.cdr.markForCheck());
        }
        updateHideInvalidContacts(l) {
          this.addressbookService
            .setHideInvalidContacts(l)
            .catch((l) => {
              this.logger.error(l);
            })
            .then((l) => {
              this.logger.info("AddressbookSettings - Update - " + l);
            });
        }
        getItemForSortOrder(l) {
          this.sortOrderResetTimer.closed ||
            this.sortOrderResetTimer.unsubscribe();
          const t = [
            r.g.LASTNAMECOMMAFIRSTNAME,
            r.g.FIRSTNAMELASTNAME,
            r.g.DYNAMIC,
          ].indexOf(l);
          return (
            (this.asia
              ? this.contactSortOrderDataAsia
              : this.contactSortOrderDataNonAsia
            ).items.find((l) => l.itemId === t) || null
          );
        }
        togglePhones() {
          this.phoneService.togglePhones();
        }
        goToImport() {
          this.importInProgress
            ? this.routingService.goTo(
                c.a.children.ImportInProgress,
                this.importInProgress.id,
              )
            : this.popupManager
                .request(a.Ob.POPUP_ADB_SETUP_IMPORT_MAIN)
                .then((l) => {
                  l &&
                    l.action === a.Nb.CONTINUE &&
                    this.routingService.goTo(c.a.children.Sources);
                });
        }
        goToExport() {
          this.exportInProgress
            ? this.routingService.goTo(
                c.a.children.ExportInProgress,
                this.exportInProgress.id,
              )
            : this.popupManager
                .request(a.Ob.POPUP_ADB_SETUP_EXPORT_MAIN)
                .then((l) => {
                  l &&
                    l.action === a.Nb.CONTINUE &&
                    this.routingService.goTo(c.a.children.ExportSource);
                });
        }
        get restrictionPopup() {
          return a.Ob.POPUP_ADB_POPUP_SETUP_NO_EXPORT;
        }
      }
      var T = e("Ohay"),
        I = e("JP3K");
      class v {
        constructor(l, t, e) {
          ((this.addressbookService = l),
            (this.routingService = t),
            (this.ListItemType = a.rb),
            (this.subscriptions = new i.a()),
            (this.logger = e.getLogger("main.adressbook-download")));
        }
        ngOnInit() {
          ((this.loading$ =
            this.addressbookService.focusDeviceProfileWithReload$.pipe(
              Object(b.a)(
                (l) => Object(a.xd)(l, "state") && l.state === r.h.LOADING,
              ),
              Object(T.a)(),
              Object(I.startWith)(!1),
            )),
            (this.numPrivateContacts$ =
              this.addressbookService.focusDeviceProfileWithReload$.pipe(
                Object(b.a)((l) =>
                  l && l.syncStatus && l.syncStatus.downloadProgressSim
                    ? l.syncStatus.downloadProgressSim
                    : 0,
                ),
                Object(T.a)(),
                Object(I.startWith)(0),
              )),
            (this.numPublicContacts$ =
              this.addressbookService.focusDeviceProfileWithReload$.pipe(
                Object(b.a)((l) =>
                  l && l.syncStatus && l.syncStatus.downloadProgressMe
                    ? l.syncStatus.downloadProgressMe
                    : 0,
                ),
                Object(T.a)(),
                Object(I.startWith)(0),
              )));
          const l = this.addressbookService.getCurrentFocusDeviceProfile();
          l
            ? this.subscriptions.add(
                this.addressbookService.focusDeviceProfileWithReload$
                  .pipe(
                    Object(d.a)(
                      (t) =>
                        !!t &&
                        t.profileId === l.profileId &&
                        t.state !== r.h.LOADING,
                    ),
                    Object(p.a)(1),
                  )
                  .subscribe(() => {
                    (this.logger.info(
                      "ngOnInit: profile is no longer LOADING, return to previous screen.",
                    ),
                      this.routingService.goBack());
                  }),
              )
            : this.routingService.goBack();
        }
        ngOnDestroy() {
          this.subscriptions.unsubscribe();
        }
      }
      var y = e("cPp1"),
        O = e("P6Ek"),
        S = e("kuMc"),
        N = e("QQZH");
      class C {
        constructor(l, t, e, n) {
          ((this.filebrowserService = l),
            (this.routingService = e),
            (this.cdr = n),
            (this.usbDrives = []),
            (this.listItemType = a.rb),
            (this.destroyed$$ = new N.a(1)),
            (this.logger = t.getLogger("addressbook.ImportSourceComponent")));
        }
        selectSource(l) {
          l
            ? this.routingService.goTo(c.a.children.Import, l.id)
            : this.logger.error("Could not select drive");
        }
        ngOnInit() {
          this.filebrowserService.drives$
            .pipe(
              Object(S.a)(this.destroyed$$),
              Object(b.a)((l) => l.filter((l) => l.type === O.a.USB)),
            )
            .subscribe((l) => {
              ((this.usbDrives = l), this.cdr.markForCheck());
            });
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
      }
      var _ = e("C05f"),
        P = e("ROBh"),
        M = e("HM3f"),
        E = e("TLy2"),
        D = e("jIqt"),
        k = e("8j5Y"),
        L = (function (l) {
          return (
            (l[(l.WHITELIST = 0)] = "WHITELIST"),
            (l[(l.BLACKLIST = 1)] = "BLACKLIST"),
            l
          );
        })({});
      class A {
        constructor() {
          ((this.currentMode = L.WHITELIST),
            (this.currentMarkedItems = new Set()),
            (this.numberOfItems = -1));
        }
        setNumberOfItems(l) {
          this.numberOfItems = l;
        }
        toggleItem(l) {
          this.currentMarkedItems.delete(l) || this.currentMarkedItems.add(l);
        }
        toggleAll() {
          (
            this.currentMode === L.WHITELIST
              ? this.currentMarkedItems.size === this.numberOfItems
              : 0 === this.currentMarkedItems.size
          )
            ? this.currentMode === L.WHITELIST
              ? this.currentMarkedItems.clear()
              : (this.currentMode = L.WHITELIST)
            : ((this.currentMode = L.BLACKLIST),
              this.currentMarkedItems.clear());
        }
        isSelected(l) {
          switch (this.currentMode) {
            case L.WHITELIST:
              return this.currentMarkedItems.has(l);
            case L.BLACKLIST:
              return !this.currentMarkedItems.has(l);
            default:
              return !1;
          }
        }
        hasSelectedItems() {
          if (this.numberOfItems <= 0) return !1;
          switch (this.currentMode) {
            case L.WHITELIST:
              return this.currentMarkedItems.size > 0;
            case L.BLACKLIST:
              return this.currentMarkedItems.size < this.numberOfItems;
            default:
              return !1;
          }
        }
        allItemsSelected() {
          if (this.numberOfItems <= 0) return !1;
          switch (this.currentMode) {
            case L.WHITELIST:
              return this.currentMarkedItems.size === this.numberOfItems;
            case L.BLACKLIST:
              return 0 === this.currentMarkedItems.size;
            default:
              return !1;
          }
        }
        reset() {
          ((this.currentMode = L.WHITELIST), this.currentMarkedItems.clear());
        }
        get markedItems() {
          return this.currentMarkedItems;
        }
        get mode() {
          return this.currentMode;
        }
      }
      class w {
        constructor(l, t, e, n, i, o) {
          ((this.fileBrowserService = l),
            (this.activatedRoute = t),
            (this.addressBookService = e),
            (this.routingService = n),
            (this.cdr = i),
            (this.ItemObjectItemTypeEnum = O.c),
            (this.ListItemType = a.rb),
            (this.iconCategory = a.Z.TitleLine),
            (this.listComponent$$ = new _.a(null)),
            (this.currentPath$$ = new N.a(1)),
            (this.pathHistory = ["/"]),
            (this.destroyed$$ = new N.a(1)),
            (this.sourceId = this.activatedRoute.snapshot.params.id),
            (this.logger = o.getLogger(
              "addressbook.SelectImportedContactsComponent",
            )),
            (this.selectionManager = new A()),
            this.updateCurrentPath());
        }
        set listComponent(l) {
          this.listComponent$$.next(l || null);
        }
        ngOnInit() {
          ((this.source$ = this.fileBrowserService.getDrive$(this.sourceId)),
            (this.numItems$ = this.createNumItems$(this.sourceId)),
            (this.numListEntries$ = this.createNumListEntries$(this.sourceId)),
            (this.importContacts$ = this.createItems$(this.sourceId)),
            this.source$.pipe(Object(S.a)(this.destroyed$$)).subscribe(
              (l) => {
                l ||
                  (this.logger.info(
                    "Source drive disappeared, returning to previous screen",
                  ),
                  this.routingService.goBack());
              },
              (l) => {
                (this.logger.warn("Error getting source drive: ", l),
                  this.routingService.goBack());
              },
            ),
            this.numItems$
              .pipe(Object(S.a)(this.destroyed$$))
              .subscribe((l) => {
                (this.selectionManager.setNumberOfItems(l),
                  this.cdr.markForCheck());
              }));
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        isChecked(l) {
          return this.selectionManager.isSelected(l);
        }
        toggleSelected(l) {
          this.selectionManager.toggleItem(l.name);
        }
        toggleAll(l) {
          this.selectionManager.toggleAll();
        }
        startImport(l, t) {
          l
            ? this.startImportList(
                l,
                t,
                this.selectionManager.mode === L.BLACKLIST
                  ? r.d.BLACKLIST
                  : r.d.WHITELIST,
              )
            : this.logger.warn("startImport: source is not defined!");
        }
        isImportAllowed(l) {
          return this.selectionManager.hasSelectedItems();
        }
        createItems$(l) {
          const t = this.listComponent$$.pipe(
            Object(T.a)(),
            Object(E.a)((l) =>
              l ? l.requestedDynamicListPages$ : Object(P.a)(new a.tb(0, 20)),
            ),
            Object(D.a)(new a.tb(0, 20)),
            Object(T.a)(
              (l, t) =>
                !!l && !!t && l.offset === t.offset && l.limit === t.limit,
            ),
          );
          return Object(M.b)(t, this.currentPath$$).pipe(
            Object(E.a)(([t, e]) =>
              this.fileBrowserService.items$(l, t, e, O.b.VCARD),
            ),
            Object(b.a)((l) => ({
              data: (l && l.data) || [],
              paging: {
                startIndex: (l && l.offset) || 0,
                total: (l && l.total) || 0,
              },
            })),
            Object(k.a)((l) =>
              this.logger.info("createItems$: updated page, paging:", l.paging),
            ),
          );
        }
        createNumItems$(l) {
          return this.createFileBrowserResultCount$(
            l,
            "createNumItems$",
            O.c.FILE,
          );
        }
        createNumListEntries$(l) {
          return this.createFileBrowserResultCount$(l, "createNumListEntries$");
        }
        createFileBrowserResultCount$(l, t, e) {
          return this.currentPath$$.pipe(
            Object(E.a)((t) =>
              this.fileBrowserService.items$(
                l,
                { offset: 0, limit: 0 },
                t,
                O.b.VCARD,
                e,
                !1,
              ),
            ),
            Object(b.a)((l) => (l && l.total) || 0),
            Object(T.a)(),
            Object(a.pd)(this.logger, t + ": new total:"),
            Object(a.Kd)(),
          );
        }
        startImportList(l, t, e) {
          if (!this.selectionManager.hasSelectedItems())
            return void this.logger.warn(
              "startImportList: there are no selected contacts",
            );
          const n = {
            drive: l.uri,
            filenames: Array.from(this.selectionManager.markedItems),
            folder: this.pathHistory[this.pathHistory.length - 1],
            mode: e,
            opType: r.e.IMPORT,
          };
          (this.logger.info("startImportList: request import with ", n),
            this.addressBookService
              .runOperation$(n)
              .pipe(
                Object(p.a)(1),
                Object(S.a)(this.destroyed$$),
                Object(a.pd)(
                  this.logger,
                  "startImportList: received response:",
                ),
              )
              .subscribe((l) => {
                const t = l.split("/").pop();
                null != t &&
                  this.routingService.goTo(c.a.children.ImportInProgress, t);
              }));
        }
        selectFolder(l) {
          (this.logger.info("selectFolder:", l),
            this.pathHistory.push(l.path),
            this.updateCurrentPath());
        }
        goUpOrBack() {
          this.pathHistory.length <= 1
            ? this.routingService.goBack()
            : (this.pathHistory.pop(), this.updateCurrentPath());
        }
        updateCurrentPath() {
          (this.logger.info("updateCurrentPath: history:", this.pathHistory),
            this.currentPath$$.next(
              this.pathHistory[this.pathHistory.length - 1],
            ),
            this.selectionManager.reset());
        }
      }
      class B {
        constructor(l, t, e, n, a) {
          ((this.routingService = l),
            (this.activatedRoute = t),
            (this.addressbookService = e),
            (this.filebrowserService = n),
            (this.destroyed$$ = new N.a(1)),
            (this.logger = a.getLogger("addressbook.ImportWaitComponent")));
        }
        ngOnInit() {
          ((this.source$ = this.filebrowserService.drive$),
            this.activatedRoute.params
              .pipe(
                Object(E.a)((l) =>
                  this.addressbookService.operations$.pipe(
                    Object(b.a)((t) =>
                      t
                        ? (this.logger.debug("received operations update ", t),
                          t.find((t) => t.id === l.id))
                        : (this.logger.info("operationsList: ", t),
                          void this.routingService.goTo(c.a.children.Import)),
                    ),
                  ),
                ),
                Object(d.a)(a.wd),
                Object(S.a)(this.destroyed$$),
              )
              .subscribe((l) => {
                (this.logger.info("subscribe to operation with id:", l.id),
                  this.logger.debug("received operation update ", l),
                  l.state === r.f.DONE &&
                    this.routingService.goTo(c.a.children.ImportEnd, l.id));
              }));
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
      }
      var R = (function (l) {
        return (
          (l.DUPLICATECONTACTS = "Die Kontakte sind bereits vorhanden"),
          (l.GENERALERROR = "Es ist ein Fehler aufgetreten"),
          (l.MEDIUMNOTAVAILABLE = "Kein Datentr\xe4ger vorhanden."),
          (l.MEMORYFULL = "Der Speicher ist voll."),
          (l.WRONGFORMAT = "Die Kontakte haben nicht das richtige Format"),
          (l.NOERROR = "Die Kontakte wurden erfolgreich importiert."),
          l
        );
      })({});
      class $ {
        constructor(l, t, e, n, a) {
          ((this.routingService = l),
            (this.activatedRoute = t),
            (this.addressbookService = e),
            (this.filebrowserService = n),
            (this.cdr = a),
            (this.ImportErrorReasonTexts = R),
            (this.destroyed$$ = new N.a(1)));
        }
        ngOnInit() {
          (this.activatedRoute.params
            .pipe(
              Object(E.a)((l) =>
                this.addressbookService.operations$.pipe(
                  Object(b.a)((t) => t.find((t) => t.id === l.id)),
                ),
              ),
              Object(d.a)(a.wd),
              Object(S.a)(this.destroyed$$),
            )
            .subscribe((l) => {
              ((this.operationData = l), this.cdr.markForCheck());
            }),
            (this.source$ = this.filebrowserService.drive$));
        }
        goBack() {
          this.routingService
            .goBack()
            .then((l) => {
              l || this.routingService.goBack(c.a.children.Sources);
            })
            .catch(() => {
              this.routingService.goBack(c.a.children.Sources);
            });
        }
        get resultText() {
          if (this.operationData && this.operationData.result)
            switch (this.operationData.result.errorReason) {
              case r.i.MEMORYFULL:
                return R.MEMORYFULL;
              case r.i.MEDIUMNOTAVAILABLE:
                return R.MEDIUMNOTAVAILABLE;
              case r.i.WRONGFORMAT:
                return R.WRONGFORMAT;
              case r.i.DUPLICATECONTACTS:
                return R.DUPLICATECONTACTS;
              case r.i.GENERALERROR:
                return R.GENERALERROR;
              case void 0:
                return R.NOERROR;
            }
        }
        get resultId() {
          if (!this.operationData || !this.operationData.result)
            return R.GENERALERROR;
          switch (this.operationData.result.errorReason) {
            case r.i.MEMORYFULL:
              return R.MEMORYFULL;
            case r.i.MEDIUMNOTAVAILABLE:
              return R.MEDIUMNOTAVAILABLE;
            case r.i.WRONGFORMAT:
              return R.WRONGFORMAT;
            case r.i.DUPLICATECONTACTS:
              return R.DUPLICATECONTACTS;
            case r.i.GENERALERROR:
              return R.GENERALERROR;
            case void 0:
            default:
              return R.NOERROR;
          }
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
      }
      var z = (function (l) {
        return (
          (l.GENERALERROR = "Es ist ein Fehler beim Exportieren aufgetreten"),
          (l.NOERROR = "Die Kontakte wurden erfolgreich exportiert."),
          l
        );
      })({});
      class j {
        constructor(l, t, e, n, a) {
          ((this.routingService = l),
            (this.activatedRoute = t),
            (this.addressbookService = e),
            (this.filebrowserService = n),
            (this.cdr = a),
            (this.ExportErrorReasonTexts = z),
            (this.destroyed$$ = new N.a(1)));
        }
        ngOnInit() {
          ((this.source$ = this.filebrowserService.drive$),
            this.activatedRoute.params
              .pipe(
                Object(E.a)((l) =>
                  this.addressbookService.operations$.pipe(
                    Object(b.a)((t) => t.find((t) => t.id === l.id)),
                  ),
                ),
                Object(d.a)(a.wd),
                Object(S.a)(this.destroyed$$),
              )
              .subscribe((l) => {
                ((this.operationData = l), this.cdr.markForCheck());
              }));
        }
        goBack() {
          this.routingService
            .goBack()
            .then((l) => {
              l || this.routingService.goBack(c.a.children.ExportSource);
            })
            .catch(() => {
              this.routingService.goBack(c.a.children.ExportSource);
            });
        }
        get resultText() {
          if (this.operationData && this.operationData.result)
            switch (this.operationData.result.errorReason) {
              case r.i.GENERALERROR:
                return z.GENERALERROR;
              case void 0:
                return z.NOERROR;
              default:
                return z.GENERALERROR;
            }
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
      }
      class F {
        constructor(l, t, e, n) {
          ((this.routingService = l),
            (this.activatedRoute = t),
            (this.addressbookService = e),
            (this.filebrowserService = n),
            (this.destroyed$$ = new N.a(1)));
        }
        ngOnInit() {
          ((this.source$ = this.filebrowserService.drive$),
            this.activatedRoute.params
              .pipe(
                Object(E.a)((l) =>
                  this.addressbookService.operations$.pipe(
                    Object(b.a)((t) => t.find((t) => t.id === l.id)),
                  ),
                ),
                Object(d.a)(a.wd),
                Object(S.a)(this.destroyed$$),
              )
              .subscribe((l) => {
                l.state === r.f.DONE &&
                  this.routingService.goTo(c.a.children.ExportEnd, l.id);
              }));
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
      }
      class W {
        constructor(l, t, e, n, i, o) {
          ((this.routingService = l),
            (this.addressbookService = t),
            (this.activatedRoute = e),
            (this.filebrowserService = n),
            (this.cdr = i),
            (this.toBeExportedContacts = new Set()),
            (this.exportContacts = a.qb.createListData([])),
            (this.iconCategory = a.Z.TitleLine),
            (this.destroyed$$ = new N.a(1)),
            (this.selectionMode = r.d.WHITELIST),
            (this.numItems = -1),
            (this.sourceId = this.activatedRoute.snapshot.params.id),
            (this.logger = o.getLogger(
              "addressbook.SetupExportListComponent",
            )));
        }
        get allItemsSelected() {
          return (
            (this.toBeExportedContacts.size === this.numItems &&
              this.selectionMode === r.d.WHITELIST) ||
            (0 === this.toBeExportedContacts.size &&
              this.selectionMode === r.d.BLACKLIST)
          );
        }
        get exportDisabled() {
          return this.selectionMode === r.d.WHITELIST
            ? this.toBeExportedContacts.size < 1
            : this.selectionMode === r.d.BLACKLIST &&
                this.toBeExportedContacts.size >= this.numItems;
        }
        ngOnInit() {
          (this.sourceId ||
            (this.logger.warn(
              "onInit: no target drive id provided. Routing back.",
            ),
            this.routingService.goBack()),
            this.filebrowserService
              .getDrive$(this.sourceId)
              .pipe(Object(S.a)(this.destroyed$$))
              .subscribe(
                (l) => {
                  ((l && l.id === this.sourceId) ||
                    (this.logger.info(
                      "onInit: target drive removed / changed. Routing back to target selection.",
                    ),
                    this.routingService.goBack()),
                    (this.source = l));
                },
                (l) => {
                  (this.logger.warn(
                    "onInit: target drive threw error, routing back to target selection: ",
                    l,
                  ),
                    this.routingService.goBack());
                },
              ));
        }
        ngAfterViewInit() {
          const l = this.viewComponent.requestedDynamicListPages$;
          this.addressbookService
            .getPublicProfile$()
            .pipe(
              Object(E.a)((t) =>
                t
                  ? this.addressbookService.getExportContacts$(l, t.id)
                  : Object(P.a)(a.qb.createListData([])),
              ),
              Object(S.a)(this.destroyed$$),
            )
            .subscribe((l) => {
              ((this.exportContacts = l),
                (this.numItems =
                  (!!this.exportContacts && this.exportContacts.paging.total) ||
                  -1),
                this.cdr.markForCheck());
            });
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        startExport() {
          this.selectionMode === r.d.BLACKLIST
            ? this.startExportBlacklist()
            : this.startExportWhitelist();
        }
        startExportWhitelist() {
          if (this.toBeExportedContacts.size > 0) {
            const l = {
              drive: this.source.uri,
              mode: r.d.WHITELIST,
              opType: r.e.EXPORT,
              contacts: Array.from(this.toBeExportedContacts),
            };
            (this.logger.debug(
              "startExport: assemble InsertOperationObject",
              l,
            ),
              this.addressbookService
                .runOperation$(l)
                .pipe(Object(p.a)(1), Object(S.a)(this.destroyed$$))
                .subscribe((l) => {
                  const t = l.split("/").pop();
                  null != t &&
                    this.routingService.goTo(c.a.children.ExportInProgress, t);
                }));
          } else this.logger.warn("There are no selected contacts");
        }
        startExportBlacklist() {
          const l = {
            drive: this.source.uri,
            mode: this.toBeExportedContacts.size > 0 ? r.d.BLACKLIST : r.d.ALL,
            opType: r.e.EXPORT,
            contacts: Array.from(this.toBeExportedContacts),
          };
          (this.logger.debug("startExport: assemble InsertOperationObject", l),
            this.addressbookService
              .runOperation$(l)
              .pipe(Object(p.a)(1), Object(S.a)(this.destroyed$$))
              .subscribe((l) => {
                const t = l.split("/").pop();
                null != t &&
                  this.routingService.goTo(c.a.children.ExportInProgress, t);
              }));
        }
        toggleSelected(l) {
          this.toBeExportedContacts.delete(l) ||
            this.toBeExportedContacts.add(l);
        }
        toggleAll() {
          ((
            this.selectionMode === r.d.WHITELIST
              ? this.toBeExportedContacts.size === this.numItems
              : 0 === this.toBeExportedContacts.size
          )
            ? this.selectionMode === r.d.WHITELIST
              ? this.toBeExportedContacts.clear()
              : (this.selectionMode = r.d.WHITELIST)
            : ((this.selectionMode = r.d.BLACKLIST),
              this.toBeExportedContacts.clear()),
            this.cdr.markForCheck());
        }
        getItemChecked(l) {
          return this.selectionMode === r.d.WHITELIST
            ? this.toBeExportedContacts.has(l)
            : !this.toBeExportedContacts.has(l);
        }
      }
      class K {
        constructor(l, t, e, n) {
          ((this.filebrowserService = l),
            (this.routingService = e),
            (this.cdr = n),
            (this.usbDrives = []),
            (this.listItemType = a.rb),
            (this.destroyed$$ = new N.a(1)),
            (this.logger = t.getLogger("addressbook.ExportSourceComponent")));
        }
        selectSource(l) {
          l
            ? this.routingService.goTo(c.a.children.Export, l.id)
            : this.logger.error("Could not select drive");
        }
        ngOnInit() {
          this.filebrowserService.drives$
            .pipe(
              Object(S.a)(this.destroyed$$),
              Object(b.a)((l) => l.filter((l) => l.type === O.a.USB)),
            )
            .subscribe((l) => {
              ((this.usbDrives = l), this.cdr.markForCheck());
            });
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
      }
      class H extends a.cc {
        constructor(l, t) {
          (super(t.getLogger("settings.UsbDriveValidGuard")),
            (this.filebrowserService = l));
        }
        checkActivation(l, t) {
          this.logger.info("canActivate: called with ", { next: l, state: t });
          const e = (l && l.params && l.params.id) || void 0;
          return e
            ? this.filebrowserService
                .getDrive$(e)
                .pipe(
                  Object(b.a)(
                    (l) => (
                      this.logger.info(
                        "canActivate: received drive update: ",
                        l,
                      ),
                      !!l ||
                        (this.logger.info(
                          "canActivate: deny access, no usb drive found for id " +
                            e,
                        ),
                        !1)
                    ),
                  ),
                  Object(p.a)(1),
                )
                .toPromise()
            : (this.logger.info(
                "canActivate: deny access, no usb drive id set.",
              ),
              !1);
        }
      }
      class U {}
      var Y = e("C9Ky"),
        G = e("4XZL"),
        V = e("fu7d"),
        Z = e("bou3"),
        Q = e("yNay"),
        X = e("bmFL"),
        q = e("bMuc"),
        J = e("ZIdM"),
        ll = e("3bpu"),
        tl = e("6zvu"),
        el = e("VcEz"),
        nl = e("OtM5"),
        al = e("y9xZ"),
        il = e("+sw+"),
        ol = e("BMrr"),
        ul = e("IEns"),
        rl = e("z6QT"),
        sl = e("flsk"),
        cl = e("FQEI"),
        bl = e("O82V"),
        dl = e("Eln4"),
        pl = e("evAh"),
        hl = e("URLa"),
        ml = e("CpzC"),
        xl = e("0Bsn"),
        gl = e("5GjX"),
        fl = e("mYyF"),
        Tl = e("v98a"),
        Il = e("aOG8"),
        vl = e("Krzs"),
        yl = e("ixDV"),
        Ol = e("9ZFG"),
        Sl = e("cdBV"),
        Nl = e("An66"),
        Cl = e("QSdq"),
        _l = e("D0GA"),
        Pl = e("6480"),
        Ml = e("FfND"),
        El = e("oeT7"),
        Dl = e("t7cT"),
        kl = e("Z2XD"),
        Ll = e("VUTu"),
        Al = e("nK9R"),
        wl = e("qzuC"),
        Bl = e("8yWk"),
        Rl = e("8WOv"),
        $l = e("1pak"),
        zl = e("P+G5"),
        jl = e("ijxY"),
        Fl = e("zPMi"),
        Wl = e("N2Hj"),
        Kl = e("UbWD"),
        Hl = e("2rvh"),
        Ul = e("odRV"),
        Yl = e("Udyh"),
        Gl = e("I3ve"),
        Vl = e("qiAR"),
        Zl = e("007S"),
        Ql = e("oxWk"),
        Xl = e("Tr//"),
        ql = e("0qMr"),
        Jl = e("sg2e"),
        lt = n.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;flex-direction:column;font-size:40px}.settings-list__item[_ngcontent-%COMP%]{height:100px;padding:0 20px}.settings-list__toggle-item[_ngcontent-%COMP%]{height:207px;padding:0 20px}.component-layout-latin[_nghost-%COMP%]   .settings-list__item[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .settings-list__item[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .settings-list__toggle-item[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .settings-list__toggle-item[_ngcontent-%COMP%]{text-align:left}.component-layout-arabic[_nghost-%COMP%]   .settings-list__item[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .settings-list__item[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .settings-list__toggle-item[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .settings-list__toggle-item[_ngcontent-%COMP%]{text-align:right}[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}",
            ],
          ],
          data: {},
        });
      function tt(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-list-route-item",
              [
                ["class", "settings-list__item"],
                ["id", "TogglePhones"],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t &&
                    (n = !1 !== l.component.togglePhones() && n),
                  n
                );
              },
              G.b,
              G.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              2,
              16384,
              null,
              0,
              X.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            n.Qb(3, { secondPhoneName: 0 }),
            n.xb(4, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              5,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              6,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              8,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              9,
              114688,
              null,
              0,
              hl.a,
              [],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                type: [1, "type"],
              },
              null,
            ),
            n.xb(
              10,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              11,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
          ],
          function (l, t) {
            var e = t.component;
            l(t, 1, 0, "TogglePhones");
            var n = l(
              t,
              3,
              0,
              null == t.context.ngIf ? null : t.context.ngIf.name,
            );
            (l(t, 2, 0, n),
              l(t, 6, 0),
              l(t, 8, 0),
              l(
                t,
                9,
                0,
                "Telefone tauschen: {{secondPhoneName}} in der Anzeige",
                e.ListItemTypes.ITEM_TYPE_NO_END_ICON,
              ));
          },
          function (l, t) {
            l(t, 0, 0, n.Nb(t, 8).markerClassEnabled);
          },
        );
      }
      function et(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-toggle-button-group",
              [
                ["class", "settings-list__toggle-item"],
                ["id", "SortOrderAsia"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "selectedChange"]],
              function (l, t, e) {
                var n = !0;
                return (
                  "selectedChange" === t &&
                    (n = !1 !== l.component.updateSortOrder(e) && n),
                  n
                );
              },
              yl.b,
              yl.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              2,
              147456,
              null,
              0,
              nl.a,
              [Ol.a, n.h, Q.a, [3, nl.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            n.xb(
              3,
              4374528,
              null,
              0,
              Sl.a,
              [[2, nl.a], n.h],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                data: [1, "data"],
                selected: [2, "selected"],
              },
              { selectedChange: "selectedChange" },
            ),
          ],
          function (l, t) {
            var e = t.component;
            (l(t, 1, 0, "SortOrderAsia"),
              l(t, 2, 0, t.parent.context.mib3Let),
              l(
                t,
                3,
                0,
                "Sortierreihenfolge",
                e.contactSortOrderDataAsia,
                e.selectedContactOrderItem,
              ));
          },
          function (l, t) {
            l(t, 0, 0, n.Nb(t, 2).combinedDisabled, n.Nb(t, 2).useBrighterIcon);
          },
        );
      }
      function nt(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-toggle-button-group",
              [
                ["class", "settings-list__toggle-item"],
                ["id", "SortOrderNonAsia"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "selectedChange"]],
              function (l, t, e) {
                var n = !0;
                return (
                  "selectedChange" === t &&
                    (n = !1 !== l.component.updateSortOrder(e) && n),
                  n
                );
              },
              yl.b,
              yl.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              2,
              147456,
              null,
              0,
              nl.a,
              [Ol.a, n.h, Q.a, [3, nl.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            n.xb(
              3,
              4374528,
              null,
              0,
              Sl.a,
              [[2, nl.a], n.h],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                data: [1, "data"],
                selected: [2, "selected"],
              },
              { selectedChange: "selectedChange" },
            ),
          ],
          function (l, t) {
            var e = t.component;
            (l(t, 1, 0, "SortOrderNonAsia"),
              l(t, 2, 0, t.parent.context.mib3Let || e.adbDownloadTriggered),
              l(
                t,
                3,
                0,
                "Sortierreihenfolge",
                e.contactSortOrderDataNonAsia,
                e.selectedContactOrderItem,
              ));
          },
          function (l, t) {
            l(t, 0, 0, n.Nb(t, 2).combinedDisabled, n.Nb(t, 2).useBrighterIcon);
          },
        );
      }
      function at(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              46,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(), n.hb(16777216, [[1, 2]], null, 2, null, tt)),
            n.xb(
              2,
              16384,
              null,
              0,
              Nl.k,
              [n.P, n.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            n.Pb(131072, Nl.b, [n.h]),
            (l()(),
            n.yb(
              4,
              0,
              null,
              null,
              4,
              "au3-list-switch-item",
              [
                ["class", "settings-list__item"],
                ["developerText", "Ausgegraute Kontakte ausblenden"],
                ["id", "HideInvalidContactsSwitch"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "valueChange"]],
              function (l, t, e) {
                var n = !0;
                return (
                  "valueChange" === t &&
                    (n = !1 !== l.component.updateHideInvalidContacts(e) && n),
                  n
                );
              },
              Cl.b,
              Cl.a,
            )),
            n.xb(
              5,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              6,
              147456,
              null,
              0,
              nl.a,
              [Ol.a, n.h, Q.a, [3, nl.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            n.xb(
              7,
              49152,
              null,
              0,
              _l.a,
              [[2, nl.a]],
              { developerText: [0, "developerText"], value: [1, "value"] },
              { valueChange: "valueChange" },
            ),
            n.Pb(131072, Nl.b, [n.h]),
            (l()(), n.hb(16777216, [[1, 2]], null, 1, null, et)),
            n.xb(
              10,
              16384,
              null,
              0,
              Nl.k,
              [n.P, n.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (l()(),
            n.hb(
              0,
              [
                [1, 2],
                ["sortOrderNonAsia", 2],
              ],
              null,
              0,
              null,
              nt,
            )),
            (l()(),
            n.yb(
              12,
              0,
              null,
              null,
              10,
              "au3-list-route-item",
              [
                ["class", "settings-list__item"],
                ["id", "DownloadContacts"],
                ["titleDeveloperText", "Kontakte herunterladen"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t &&
                    (n = !1 !== l.component.goToAdbDownload() && n),
                  n
                );
              },
              G.b,
              G.a,
            )),
            n.xb(
              13,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(14, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              15,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              16,
              147456,
              null,
              0,
              nl.a,
              [Ol.a, n.h, Q.a, [3, nl.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            n.xb(
              17,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              19,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              20,
              114688,
              null,
              0,
              hl.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
            n.xb(
              21,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              22,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
            (l()(),
            n.yb(
              23,
              0,
              null,
              null,
              11,
              "au3-list-route-item",
              [
                ["class", "settings-list__item"],
                ["id", "ImportContacts"],
                ["titleDeveloperText", "Kontakte importieren"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t && (n = !1 !== l.component.goToImport() && n),
                  n
                );
              },
              G.b,
              G.a,
            )),
            n.xb(
              24,
              147456,
              null,
              0,
              nl.a,
              [Ol.a, n.h, Q.a, [3, nl.a]],
              null,
              null,
            ),
            n.xb(25, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              26,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              27,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              28,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.xb(
              29,
              671744,
              null,
              0,
              Pl.a,
              [Ml.a, El.i, nl.a, tl.a, Pl.b, Dl.a],
              {
                routeInfo: [0, "routeInfo"],
                preventGoToRoute: [1, "preventGoToRoute"],
              },
              null,
            ),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              31,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              32,
              114688,
              null,
              0,
              hl.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
            n.xb(
              33,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              34,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
            (l()(),
            n.yb(
              35,
              0,
              null,
              null,
              11,
              "au3-list-route-item",
              [
                ["class", "settings-list__item"],
                ["id", "ExportContacts"],
                ["titleDeveloperText", "Kontakte exportieren"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t && (n = !1 !== l.component.goToExport() && n),
                  n
                );
              },
              G.b,
              G.a,
            )),
            n.xb(
              36,
              147456,
              null,
              0,
              nl.a,
              [Ol.a, n.h, Q.a, [3, nl.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            n.xb(37, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              38,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              39,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              40,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.xb(
              41,
              671744,
              null,
              0,
              Pl.a,
              [Ml.a, El.i, nl.a, tl.a, Pl.b, Dl.a],
              {
                routeInfo: [0, "routeInfo"],
                preventGoToRoute: [1, "preventGoToRoute"],
              },
              null,
            ),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              43,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              44,
              114688,
              null,
              0,
              hl.a,
              [],
              { titleDeveloperText: [0, "titleDeveloperText"] },
              null,
            ),
            n.xb(
              45,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              46,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
          ],
          function (l, t) {
            var e = t.component;
            (l(
              t,
              2,
              0,
              e.phoneService.twoPhonesSupported &&
                n.Yb(t, 2, 0, n.Nb(t, 3).transform(e.secondPhone$)),
            ),
              l(t, 5, 0, "HideInvalidContactsSwitch"),
              l(t, 6, 0, t.context.mib3Let),
              l(
                t,
                7,
                0,
                "Ausgegraute Kontakte ausblenden",
                n.Yb(
                  t,
                  7,
                  1,
                  n
                    .Nb(t, 8)
                    .transform(e.addressbookService.hideInvalidContacts$),
                ),
              ),
              l(t, 10, 0, e.asia, n.Nb(t, 11)),
              l(t, 13, 0, "DownloadContacts"),
              l(t, 16, 0, e.noFocusDeviceProfileAvailable),
              l(t, 17, 0),
              l(t, 19, 0),
              l(t, 20, 0, "Kontakte herunterladen"),
              l(t, 26, 0, "ImportContacts"),
              l(t, 28, 0),
              l(
                t,
                29,
                0,
                e.importInProgress
                  ? e.AddressbookSettingsRoute.children.ImportInProgress
                  : e.AddressbookSettingsRoute.children.Sources,
                !0,
              ),
              l(t, 31, 0),
              l(t, 32, 0, "Kontakte importieren"),
              l(t, 36, 0, e.noPublicContactsAvailable, e.restrictionPopup),
              l(t, 38, 0, "ExportContacts"),
              l(t, 40, 0),
              l(
                t,
                41,
                0,
                e.exportInProgress
                  ? e.AddressbookSettingsRoute.children.ExportInProgress
                  : e.AddressbookSettingsRoute.children.ExportSource,
                !0,
              ),
              l(t, 43, 0),
              l(t, 44, 0, "Kontakte exportieren"));
          },
          function (l, t) {
            (l(
              t,
              4,
              0,
              n.Nb(t, 6).combinedDisabled,
              n.Nb(t, 6).useBrighterIcon,
            ),
              l(
                t,
                12,
                0,
                n.Nb(t, 16).combinedDisabled,
                n.Nb(t, 16).useBrighterIcon,
                n.Nb(t, 19).markerClassEnabled,
              ),
              l(
                t,
                23,
                0,
                n.Nb(t, 24).combinedDisabled,
                n.Nb(t, 24).useBrighterIcon,
                n.Nb(t, 31).markerClassEnabled,
              ),
              l(
                t,
                35,
                0,
                n.Nb(t, 36).combinedDisabled,
                n.Nb(t, 36).useBrighterIcon,
                n.Nb(t, 43).markerClassEnabled,
              ));
          },
        );
      }
      function it(l) {
        return n.ac(
          2,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              26,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:ADB_SETUP_MAIN"],
              ],
              null,
              null,
              null,
              kl.b,
              kl.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(2, 4440064, null, 0, al.a, [Q.a], { id: [0, "id"] }, null),
            (l()(),
            n.yb(
              3,
              0,
              null,
              0,
              14,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Ll.b,
              Ll.a,
            )),
            n.xb(
              4,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              5,
              49152,
              null,
              0,
              Al.a,
              [wl.a, Bl.a],
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
            n.yb(
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
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t &&
                    (n = !1 !== l.component.routingService.goBack() && n),
                  n
                );
              },
              Rl.b,
              Rl.a,
            )),
            n.xb(7, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              8,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              9,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              10,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.xb(
              11,
              147456,
              null,
              0,
              $l.a,
              [Q.a, zl.a, n.l, [2, tl.a], [2, nl.a]],
              null,
              null,
            ),
            n.xb(12, 16384, null, 0, jl.a, [], null, null),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              14,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              15,
              49152,
              null,
              0,
              Fl.a,
              [[2, nl.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            n.xb(
              16,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              17,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
            (l()(),
            n.yb(
              18,
              0,
              null,
              0,
              8,
              "au3-list",
              [
                ["class", "settings-list"],
                ["id", ""],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Wl.b,
              Wl.a,
            )),
            n.Sb(6144, null, Kl.a, null, [Hl.a]),
            n.xb(
              20,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(21, 16384, null, 0, Ul.a, [n.l], null, null),
            n.xb(
              22,
              12828672,
              null,
              1,
              Hl.a,
              [
                [2, Yl.a],
                [2, Gl.a],
                [8, null],
                [2, V.a],
                [2, Vl.a],
                [2, Zl.a],
                [2, el.b],
                El.i,
                n.z,
                n.h,
                Q.a,
                Ql.a,
                Xl.a,
                [2, cl.a],
                ll.a,
                [2, El.a],
              ],
              null,
              null,
            ),
            n.Tb(603979776, 1, { template: 0 }),
            (l()(), n.hb(16777216, [[1, 2]], 0, 2, null, at)),
            n.xb(
              25,
              16384,
              null,
              0,
              ql.a,
              [n.L, n.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            n.Pb(131072, Nl.b, [n.h]),
          ],
          function (l, t) {
            var e = t.component;
            (l(t, 1, 0, "Screen:ADB_SETUP_MAIN"),
              l(t, 2, 0, "Screen:ADB_SETUP_MAIN"),
              l(t, 4, 0, ""),
              l(
                t,
                5,
                0,
                e.inSettingsContext
                  ? e.titleTextEnum.Settings
                  : e.titleTextEnum.Contacts,
                e.inSettingsContext
                  ? e.titleTextEnum.Settings
                  : e.titleTextEnum.Contacts,
                e.titleTextEnum,
                e.inSettingsContext
                  ? e.titleTextEnum.Contacts
                  : e.titleTextEnum.Settings,
                e.inSettingsContext
                  ? e.titleTextEnum.Contacts
                  : e.titleTextEnum.Settings,
                e.titleTextEnum,
              ),
              l(t, 8, 0, ""),
              l(t, 10, 0),
              l(t, 14, 0),
              l(t, 15, 0, !1, "E163_Backbutton.webp"),
              l(t, 20, 0, ""),
              l(t, 22, 0),
              l(
                t,
                25,
                0,
                n.Yb(t, 25, 0, n.Nb(t, 26).transform(e.noProfilesAvailable$)),
              ));
          },
          function (l, t) {
            (l(
              t,
              3,
              0,
              n.Nb(t, 5).hideLeftBorder,
              n.Nb(t, 5).hideDividingBorders,
            ),
              l(
                t,
                6,
                0,
                n.Nb(t, 14).markerClassEnabled,
                n.Nb(t, 15).useItemPlaceholder,
              ),
              l(t, 18, 0, n.Nb(t, 22).showLineNumbers));
          },
        );
      }
      function ot(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-addressbook-settings",
              [],
              null,
              null,
              null,
              it,
              lt,
            )),
            n.xb(
              1,
              245760,
              null,
              0,
              f,
              [Ml.a, u.a, s.c, Jl.a, n.h, Z.a, Q.a],
              null,
              null,
            ),
          ],
          function (l, t) {
            l(t, 1, 0);
          },
          null,
        );
      }
      var ut = n.ub("au3-addressbook-settings", f, ot, {}, {}, []),
        rt = n.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;position:relative}.list__item[_ngcontent-%COMP%]{padding:0 20px;font-size:40px;height:100px}.list__item--header[_ngcontent-%COMP%]{margin:15px 0}.component-layout-latin[_nghost-%COMP%]   .list__item[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list__item[_ngcontent-%COMP%]{text-align:left}.component-layout-latin[_nghost-%COMP%]   .bluetooth-name[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .bluetooth-name[_ngcontent-%COMP%]{flex-direction:row}.component-layout-arabic[_nghost-%COMP%]   .list__item[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list__item[_ngcontent-%COMP%]{text-align:right}.component-layout-arabic[_nghost-%COMP%]   .bluetooth-name[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .bluetooth-name[_ngcontent-%COMP%]{flex-direction:row-reverse}",
            ],
          ],
          data: {},
        });
      function st(l) {
        return n.ac(
          2,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              33,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:ADB_SETUP_DWLD_MAIN"],
              ],
              null,
              null,
              null,
              kl.b,
              kl.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(2, 4440064, null, 0, al.a, [Q.a], { id: [0, "id"] }, null),
            (l()(),
            n.yb(
              3,
              0,
              null,
              0,
              15,
              "au3-title-line",
              [["id", ""]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              Ll.b,
              Ll.a,
            )),
            n.xb(
              4,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              5,
              49152,
              null,
              0,
              Al.a,
              [wl.a, Bl.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
                loaderActive: [2, "loaderActive"],
                hasLoader: [3, "hasLoader"],
              },
              null,
            ),
            n.Pb(131072, Nl.b, [n.h]),
            (l()(),
            n.yb(
              7,
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
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t &&
                    (n = !1 !== l.component.routingService.goUp() && n),
                  n
                );
              },
              Rl.b,
              Rl.a,
            )),
            n.xb(8, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              9,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              10,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              11,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.xb(
              12,
              147456,
              null,
              0,
              $l.a,
              [Q.a, zl.a, n.l, [2, tl.a], [2, nl.a]],
              null,
              null,
            ),
            n.xb(13, 16384, null, 0, jl.a, [], null, null),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              15,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              16,
              49152,
              null,
              0,
              Fl.a,
              [[2, nl.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            n.xb(
              17,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              18,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
            (l()(),
            n.yb(
              19,
              0,
              null,
              0,
              2,
              "au3-list-route-item",
              [
                ["class", "list__item list__item--header"],
                ["id", "ContactsAreBeingLoaded"],
                ["titleDeveloperText", "Kontakte werden geladen"],
              ],
              null,
              null,
              null,
              G.b,
              G.a,
            )),
            n.xb(
              20,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              21,
              114688,
              null,
              0,
              hl.a,
              [],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                type: [1, "type"],
              },
              null,
            ),
            (l()(),
            n.yb(
              22,
              0,
              null,
              0,
              5,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["id", "NumberOfPrivateContacts"],
              ],
              null,
              null,
              null,
              G.b,
              G.a,
            )),
            n.xb(
              23,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              24,
              16384,
              null,
              0,
              X.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            n.Pb(131072, Nl.b, [n.h]),
            n.Qb(26, { numPrivateContacts: 0 }),
            n.xb(
              27,
              114688,
              null,
              0,
              hl.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                type: [2, "type"],
              },
              null,
            ),
            (l()(),
            n.yb(
              28,
              0,
              null,
              0,
              5,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["id", "NumberOfPublicContacts"],
              ],
              null,
              null,
              null,
              G.b,
              G.a,
            )),
            n.xb(
              29,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              30,
              16384,
              null,
              0,
              X.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            n.Pb(131072, Nl.b, [n.h]),
            n.Qb(32, { numPublicContacts: 0 }),
            n.xb(
              33,
              114688,
              null,
              0,
              hl.a,
              [],
              {
                icon: [0, "icon"],
                titleDeveloperText: [1, "titleDeveloperText"],
                type: [2, "type"],
              },
              null,
            ),
          ],
          function (l, t) {
            var e = t.component;
            (l(t, 1, 0, "Screen:ADB_SETUP_DWLD_MAIN"),
              l(t, 2, 0, "Screen:ADB_SETUP_DWLD_MAIN"),
              l(t, 4, 0, ""),
              l(
                t,
                5,
                0,
                "Kontakte",
                "Kontakte herunterladen",
                n.Yb(t, 5, 2, n.Nb(t, 6).transform(e.loading$)),
                !0,
              ),
              l(t, 9, 0, ""),
              l(t, 11, 0),
              l(t, 15, 0),
              l(t, 16, 0, !1, "E163_Backbutton.webp"),
              l(t, 20, 0, "ContactsAreBeingLoaded"),
              l(
                t,
                21,
                0,
                "Kontakte werden geladen",
                e.ListItemType.ITEM_TYPE_NO_END_ICON,
              ),
              l(t, 23, 0, "NumberOfPrivateContacts"));
            var a = l(
              t,
              26,
              0,
              n.Yb(t, 24, 0, n.Nb(t, 25).transform(e.numPrivateContacts$)),
            );
            (l(t, 24, 0, a),
              l(
                t,
                27,
                0,
                "E056_contact_sim_privat.webp",
                "Kontakte: {{numPrivateContacts}}",
                e.ListItemType.ITEM_TYPE_NO_END_ICON,
              ),
              l(t, 29, 0, "NumberOfPublicContacts"));
            var i = l(
              t,
              32,
              0,
              n.Yb(t, 30, 0, n.Nb(t, 31).transform(e.numPublicContacts$)),
            );
            (l(t, 30, 0, i),
              l(
                t,
                33,
                0,
                "E057_contact_public.webp",
                "Kontakte: {{numPublicContacts}}",
                e.ListItemType.ITEM_TYPE_NO_END_ICON,
              ));
          },
          function (l, t) {
            (l(
              t,
              3,
              0,
              n.Nb(t, 5).hideLeftBorder,
              n.Nb(t, 5).hideDividingBorders,
            ),
              l(
                t,
                7,
                0,
                n.Nb(t, 15).markerClassEnabled,
                n.Nb(t, 16).useItemPlaceholder,
              ));
          },
        );
      }
      function ct(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-addressbook-download",
              [],
              null,
              null,
              null,
              st,
              rt,
            )),
            n.xb(1, 245760, null, 0, v, [u.a, Ml.a, Q.a], null, null),
          ],
          function (l, t) {
            l(t, 1, 0);
          },
          null,
        );
      }
      var bt = n.ub("au3-addressbook-download", v, ct, {}, {}, []),
        dt = e("eZMD"),
        pt = e("HD2x"),
        ht = n.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;height:100%;width:100%}.list__item[_ngcontent-%COMP%]{padding:0 20px;height:100px}.list__item[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]{font-size:40px}",
            ],
          ],
          data: {},
        });
      function mt(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-instruction-text",
              [
                ["class", "text"],
                ["id", "NoDrives"],
              ],
              null,
              null,
              null,
              dt.b,
              dt.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              2,
              49152,
              null,
              0,
              pt.a,
              [],
              { primaryDeveloperText: [0, "primaryDeveloperText"] },
              null,
            ),
          ],
          function (l, t) {
            (l(t, 1, 0, "NoDrives"), l(t, 2, 0, "Keine Quellen verf\xfcgbar."));
          },
          null,
        );
      }
      function xt(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              5,
              "au3-list",
              [["id", "SourceList"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Wl.b,
              Wl.a,
            )),
            n.Sb(6144, null, Kl.a, null, [Hl.a]),
            n.xb(
              2,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(3, 16384, null, 0, Ul.a, [n.l], null, null),
            n.xb(
              4,
              12828672,
              null,
              1,
              Hl.a,
              [
                [2, Yl.a],
                [2, Gl.a],
                [8, null],
                [2, V.a],
                [2, Vl.a],
                [2, Zl.a],
                [2, el.b],
                El.i,
                n.z,
                n.h,
                Q.a,
                Ql.a,
                Xl.a,
                [2, cl.a],
                ll.a,
                [2, El.a],
              ],
              { defaultTemplate: [0, "defaultTemplate"], items: [1, "items"] },
              null,
            ),
            n.Tb(603979776, 1, { template: 0 }),
          ],
          function (l, t) {
            var e = t.component;
            (l(t, 2, 0, "SourceList"),
              l(t, 4, 0, n.Nb(t.parent, 20), e.usbDrives));
          },
          function (l, t) {
            l(t, 0, 0, n.Nb(t, 4).showLineNumbers);
          },
        );
      }
      function gt(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["ttIgnore", ""],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t &&
                    (n =
                      !1 !== l.component.selectSource(l.context.$implicit) &&
                      n),
                  n
                );
              },
              G.b,
              G.a,
            )),
            n.xb(1, 16384, null, 0, jl.a, [], null, null),
            n.xb(2, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              3,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              4,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              6,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              7,
              114688,
              null,
              0,
              hl.a,
              [],
              {
                icon: [0, "icon"],
                titleNonI18nText: [1, "titleNonI18nText"],
                hasSubtitle: [2, "hasSubtitle"],
                type: [3, "type"],
              },
              null,
            ),
            n.xb(
              8,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              9,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
          ],
          function (l, t) {
            var e = t.component;
            (l(t, 4, 0),
              l(t, 6, 0),
              l(
                t,
                7,
                0,
                "E07C_media_ami_usb.webp",
                t.context.$implicit.name,
                !1,
                e.listItemType.ITEM_TYPE_NO_END_ICON,
              ));
          },
          function (l, t) {
            l(t, 0, 0, n.Nb(t, 6).markerClassEnabled);
          },
        );
      }
      function ft(l) {
        return n.ac(
          2,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              19,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:ImportSource"],
              ],
              null,
              null,
              null,
              kl.b,
              kl.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(2, 4440064, null, 0, al.a, [Q.a], { id: [0, "id"] }, null),
            (l()(),
            n.yb(
              3,
              0,
              null,
              0,
              13,
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
              Ll.b,
              Ll.a,
            )),
            n.xb(
              4,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              5,
              49152,
              null,
              0,
              Al.a,
              [wl.a, Bl.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (l()(),
            n.yb(
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
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t &&
                    (n = !1 !== l.component.routingService.goBack() && n),
                  n
                );
              },
              Rl.b,
              Rl.a,
            )),
            n.xb(7, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              8,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              9,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              10,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.xb(
              11,
              147456,
              null,
              0,
              $l.a,
              [Q.a, zl.a, n.l, [2, tl.a], [2, nl.a]],
              null,
              null,
            ),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              13,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              14,
              49152,
              null,
              0,
              Fl.a,
              [[2, nl.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            n.xb(
              15,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              16,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
            (l()(), n.hb(16777216, null, 0, 1, null, mt)),
            n.xb(
              18,
              16384,
              null,
              0,
              Nl.k,
              [n.P, n.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (l()(), n.hb(0, [["sourceList", 2]], 0, 0, null, xt)),
            (l()(), n.hb(0, [["defaultTemplate", 2]], null, 0, null, gt)),
          ],
          function (l, t) {
            var e = t.component;
            (l(t, 1, 0, "Screen:ImportSource"),
              l(t, 2, 0, "Screen:ImportSource"),
              l(t, 4, 0, ""),
              l(t, 5, 0, "Phone", "Kontakte importieren"),
              l(t, 8, 0, "BackButton"),
              l(t, 10, 0),
              l(t, 13, 0),
              l(t, 14, 0, !1, "E163_Backbutton.webp"),
              l(t, 18, 0, e.usbDrives.length < 1, n.Nb(t, 19)));
          },
          function (l, t) {
            (l(
              t,
              3,
              0,
              n.Nb(t, 5).hideLeftBorder,
              n.Nb(t, 5).hideDividingBorders,
            ),
              l(
                t,
                6,
                0,
                n.Nb(t, 13).markerClassEnabled,
                n.Nb(t, 14).useItemPlaceholder,
              ));
          },
        );
      }
      function Tt(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-import-source",
              [],
              null,
              null,
              null,
              ft,
              ht,
            )),
            n.xb(1, 245760, null, 0, C, [y.a, Q.a, Ml.a, n.h], null, null),
          ],
          function (l, t) {
            l(t, 1, 0);
          },
          null,
        );
      }
      var It = n.ub("au3-import-source", C, Tt, {}, {}, []),
        vt = e("erFY"),
        yt = e("5wO1"),
        Ot = e("M706"),
        St = e("aMc6"),
        Nt = e("fzcM"),
        Ct = e("apBa"),
        _t = e("xMt+"),
        Pt = e("1VvW"),
        Mt = n.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;height:100%;width:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.text[_ngcontent-%COMP%]{font-size:40px;height:63%}.list__check-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;font-size:40px;height:100px}",
            ],
          ],
          data: {},
        });
      function Et(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-instruction-text",
              [
                ["class", "text"],
                ["id", "NoContacts"],
              ],
              null,
              null,
              null,
              dt.b,
              dt.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              2,
              49152,
              null,
              0,
              pt.a,
              [],
              { primaryDeveloperText: [0, "primaryDeveloperText"] },
              null,
            ),
          ],
          function (l, t) {
            (l(t, 1, 0, "NoContacts"), l(t, 2, 0, "Keine Kontakte vorhanden."));
          },
          null,
        );
      }
      function Dt(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "DeSelectAllButton"],
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
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t &&
                    (n =
                      !1 !==
                        l.component.toggleAll(
                          null == l.parent.parent.context.mib3Let
                            ? null
                            : l.parent.parent.context.mib3Let.numItems,
                        ) && n),
                  n
                );
              },
              vt.b,
              vt.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(2, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              3,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              4,
              147456,
              null,
              0,
              nl.a,
              [Ol.a, n.h, Q.a, [3, nl.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            n.xb(
              5,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              7,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              8,
              49152,
              null,
              0,
              yt.a,
              [],
              {
                developerText: [0, "developerText"],
                icon: [1, "icon"],
                iconCategory: [2, "iconCategory"],
                useCustomMaxWidth: [3, "useCustomMaxWidth"],
                prio1Item: [4, "prio1Item"],
              },
              null,
            ),
            n.xb(
              9,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              10,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
          ],
          function (l, t) {
            var e = t.component;
            (l(t, 1, 0, "DeSelectAllButton"),
              l(
                t,
                4,
                0,
                (null == t.parent.parent.context.mib3Let
                  ? null
                  : t.parent.parent.context.mib3Let.numItems) < 1,
              ),
              l(t, 5, 0),
              l(t, 7, 0),
              l(
                t,
                8,
                0,
                "Alle Kontakte abw\xe4hlen",
                "E160_checkbox_selected.webp",
                e.iconCategory,
                !0,
                !0,
              ));
          },
          function (l, t) {
            l(t, 0, 1, [
              n.Nb(t, 4).combinedDisabled,
              n.Nb(t, 4).useBrighterIcon,
              n.Nb(t, 7).markerClassEnabled,
              n.Nb(t, 8).showSeparatorLeft,
              n.Nb(t, 8).showSeparatorRight,
              n.Nb(t, 8).prio1Main,
              n.Nb(t, 8).prio1SmallScale,
              n.Nb(t, 8).prio2SmallScale,
              n.Nb(t, 8).prio1,
              n.Nb(t, 8).prio2,
              n.Nb(t, 8).prio1IconText,
              n.Nb(t, 8).prio1IconOnly,
              n.Nb(t, 8).prio1TextOnly,
              n.Nb(t, 8).prio2IconText,
              n.Nb(t, 8).prio2IconOnly,
              n.Nb(t, 8).prio2TextOnly,
              n.Nb(t, 8).useDefaultMaxWidth,
              n.Nb(t, 8).isDummy,
            ]);
          },
        );
      }
      function kt(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "SelectAllButton"],
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
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t &&
                    (n =
                      !1 !==
                        l.component.toggleAll(
                          null == l.parent.parent.context.mib3Let
                            ? null
                            : l.parent.parent.context.mib3Let.numItems,
                        ) && n),
                  n
                );
              },
              vt.b,
              vt.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(2, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              3,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              4,
              147456,
              null,
              0,
              nl.a,
              [Ol.a, n.h, Q.a, [3, nl.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            n.xb(
              5,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              7,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              8,
              49152,
              null,
              0,
              yt.a,
              [],
              {
                developerText: [0, "developerText"],
                icon: [1, "icon"],
                iconCategory: [2, "iconCategory"],
                useCustomMaxWidth: [3, "useCustomMaxWidth"],
                prio1Item: [4, "prio1Item"],
              },
              null,
            ),
            n.xb(
              9,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              10,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
          ],
          function (l, t) {
            var e = t.component;
            (l(t, 1, 0, "SelectAllButton"),
              l(
                t,
                4,
                0,
                (null == t.parent.parent.context.mib3Let
                  ? null
                  : t.parent.parent.context.mib3Let.numItems) < 1,
              ),
              l(t, 5, 0),
              l(t, 7, 0),
              l(
                t,
                8,
                0,
                "Alle Kontakte ausw\xe4hlen",
                "E161_checkbox.webp",
                e.iconCategory,
                !0,
                !0,
              ));
          },
          function (l, t) {
            l(t, 0, 1, [
              n.Nb(t, 4).combinedDisabled,
              n.Nb(t, 4).useBrighterIcon,
              n.Nb(t, 7).markerClassEnabled,
              n.Nb(t, 8).showSeparatorLeft,
              n.Nb(t, 8).showSeparatorRight,
              n.Nb(t, 8).prio1Main,
              n.Nb(t, 8).prio1SmallScale,
              n.Nb(t, 8).prio2SmallScale,
              n.Nb(t, 8).prio1,
              n.Nb(t, 8).prio2,
              n.Nb(t, 8).prio1IconText,
              n.Nb(t, 8).prio1IconOnly,
              n.Nb(t, 8).prio1TextOnly,
              n.Nb(t, 8).prio2IconText,
              n.Nb(t, 8).prio2IconOnly,
              n.Nb(t, 8).prio2TextOnly,
              n.Nb(t, 8).useDefaultMaxWidth,
              n.Nb(t, 8).isDummy,
            ]);
          },
        );
      }
      function Lt(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              7,
              "au3-list",
              [
                ["au3ListDomPaging", ""],
                ["id", "ImportList"],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Wl.b,
              Wl.a,
            )),
            n.Sb(6144, null, Kl.a, null, [Hl.a]),
            n.xb(
              2,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(3, 16384, null, 0, Ul.a, [n.l], null, null),
            n.xb(
              4,
              16384,
              null,
              0,
              Yl.a,
              [Q.a],
              { itemHeightGuess: [0, "itemHeightGuess"] },
              null,
            ),
            n.xb(
              5,
              12828672,
              [[1, 4]],
              1,
              Hl.a,
              [
                [2, Yl.a],
                [2, Gl.a],
                [8, null],
                [2, V.a],
                [2, Vl.a],
                [2, Zl.a],
                [2, el.b],
                El.i,
                n.z,
                n.h,
                Q.a,
                Ql.a,
                Xl.a,
                [2, cl.a],
                ll.a,
                [2, El.a],
              ],
              {
                itemHeightGuess: [0, "itemHeightGuess"],
                defaultTemplate: [1, "defaultTemplate"],
                items: [2, "items"],
              },
              null,
            ),
            n.Tb(603979776, 2, { template: 0 }),
            n.Pb(131072, Nl.b, [n.h]),
            (l()(),
            n.yb(
              8,
              0,
              null,
              null,
              15,
              "au3-operation-panel",
              [["class", "button-container"]],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              Ot.b,
              Ot.a,
            )),
            n.xb(
              9,
              49152,
              null,
              0,
              St.a,
              [Nt.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (l()(),
            n.yb(
              10,
              0,
              null,
              1,
              10,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "StartImportButton"],
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
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t &&
                    (n =
                      !1 !==
                        l.component.startImport(
                          null == l.parent.context.mib3Let
                            ? null
                            : l.parent.context.mib3Let.source,
                          null == l.parent.context.mib3Let
                            ? null
                            : l.parent.context.mib3Let.numItems,
                        ) && n),
                  n
                );
              },
              vt.b,
              vt.a,
            )),
            n.xb(
              11,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(12, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              13,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              14,
              147456,
              null,
              0,
              nl.a,
              [Ol.a, n.h, Q.a, [3, nl.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            n.xb(
              15,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              17,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              18,
              49152,
              null,
              0,
              yt.a,
              [],
              {
                developerText: [0, "developerText"],
                useCustomMaxWidth: [1, "useCustomMaxWidth"],
                prio1Item: [2, "prio1Item"],
              },
              null,
            ),
            n.xb(
              19,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              20,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
            (l()(), n.hb(16777216, null, 1, 1, null, Dt)),
            n.xb(
              22,
              16384,
              null,
              0,
              Nl.k,
              [n.P, n.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (l()(), n.hb(0, [["showSelectAllButton", 2]], 1, 0, null, kt)),
          ],
          function (l, t) {
            var e = t.component;
            (l(t, 2, 0, "ImportList"),
              l(t, 4, 0, 100),
              l(
                t,
                5,
                0,
                100,
                n.Nb(t.parent.parent, 7),
                n.Yb(t, 5, 2, n.Nb(t, 7).transform(e.importContacts$)),
              ),
              l(t, 9, 0, !1),
              l(t, 11, 0, "StartImportButton"),
              l(
                t,
                14,
                0,
                !e.isImportAllowed(
                  null == t.parent.context.mib3Let
                    ? null
                    : t.parent.context.mib3Let.numItems,
                ),
              ),
              l(t, 15, 0),
              l(t, 17, 0),
              l(t, 18, 0, "Import starten", !0, !0),
              l(t, 22, 0, e.selectionManager.allItemsSelected(), n.Nb(t, 23)));
          },
          function (l, t) {
            (l(t, 0, 0, n.Nb(t, 5).showLineNumbers),
              l(t, 8, 0, n.Nb(t, 9).alignInside, n.Nb(t, 9).alignOutside),
              l(t, 10, 1, [
                n.Nb(t, 14).combinedDisabled,
                n.Nb(t, 14).useBrighterIcon,
                n.Nb(t, 17).markerClassEnabled,
                n.Nb(t, 18).showSeparatorLeft,
                n.Nb(t, 18).showSeparatorRight,
                n.Nb(t, 18).prio1Main,
                n.Nb(t, 18).prio1SmallScale,
                n.Nb(t, 18).prio2SmallScale,
                n.Nb(t, 18).prio1,
                n.Nb(t, 18).prio2,
                n.Nb(t, 18).prio1IconText,
                n.Nb(t, 18).prio1IconOnly,
                n.Nb(t, 18).prio1TextOnly,
                n.Nb(t, 18).prio2IconText,
                n.Nb(t, 18).prio2IconOnly,
                n.Nb(t, 18).prio2TextOnly,
                n.Nb(t, 18).useDefaultMaxWidth,
                n.Nb(t, 18).isDummy,
              ]));
          },
        );
      }
      function At(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              20,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:SelectImport"],
              ],
              null,
              null,
              null,
              kl.b,
              kl.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(2, 4440064, null, 0, al.a, [Q.a], { id: [0, "id"] }, null),
            (l()(),
            n.yb(
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
              Ll.b,
              Ll.a,
            )),
            n.xb(
              4,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              5,
              49152,
              null,
              0,
              Al.a,
              [wl.a, Bl.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryNonI18nText: [1, "secondaryNonI18nText"],
                hasLoader: [2, "hasLoader"],
              },
              null,
            ),
            (l()(),
            n.yb(
              6,
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
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t && (n = !1 !== l.component.goUpOrBack() && n),
                  n
                );
              },
              Rl.b,
              Rl.a,
            )),
            n.xb(7, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              8,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              9,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              10,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.xb(
              11,
              147456,
              null,
              0,
              $l.a,
              [Q.a, zl.a, n.l, [2, tl.a], [2, nl.a]],
              null,
              null,
            ),
            n.xb(12, 16384, null, 0, jl.a, [], null, null),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              14,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              15,
              49152,
              null,
              0,
              Fl.a,
              [[2, nl.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            n.xb(
              16,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              17,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
            (l()(), n.hb(16777216, null, 0, 1, null, Et)),
            n.xb(
              19,
              16384,
              null,
              0,
              Nl.k,
              [n.P, n.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (l()(), n.hb(0, [["contactList", 2]], 0, 0, null, Lt)),
          ],
          function (l, t) {
            (l(t, 1, 0, "Screen:SelectImport"),
              l(t, 2, 0, "Screen:SelectImport"),
              l(t, 4, 0, ""),
              l(
                t,
                5,
                0,
                "Phone",
                null == t.context.mib3Let || null == t.context.mib3Let.source
                  ? null
                  : t.context.mib3Let.source.name,
                !0,
              ),
              l(t, 8, 0, "BackButton"),
              l(t, 10, 0),
              l(t, 14, 0),
              l(t, 15, 0, !1, "E163_Backbutton.webp"),
              l(
                t,
                19,
                0,
                (null == t.context.mib3Let
                  ? null
                  : t.context.mib3Let.numListEntries) < 1,
                n.Nb(t, 20),
              ));
          },
          function (l, t) {
            (l(
              t,
              3,
              0,
              n.Nb(t, 5).hideLeftBorder,
              n.Nb(t, 5).hideDividingBorders,
            ),
              l(
                t,
                6,
                0,
                n.Nb(t, 14).markerClassEnabled,
                n.Nb(t, 15).useItemPlaceholder,
              ));
          },
        );
      }
      function wt(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-list-checkbox-item",
              [
                ["class", "list__check-item"],
                ["ttIgnore", ""],
              ],
              null,
              [[null, "valueChange"]],
              function (l, t, e) {
                var n = !0;
                return (
                  "valueChange" === t &&
                    (n =
                      !1 !==
                        l.component.toggleSelected(
                          l.parent.context.$implicit,
                        ) && n),
                  n
                );
              },
              Ct.b,
              Ct.a,
            )),
            n.xb(1, 16384, null, 0, jl.a, [], null, null),
            n.xb(
              2,
              49152,
              null,
              0,
              _t.a,
              [],
              {
                titleNonI18nText: [0, "titleNonI18nText"],
                hasSubtitle: [1, "hasSubtitle"],
                checked: [2, "checked"],
              },
              { valueChange: "valueChange" },
            ),
          ],
          function (l, t) {
            l(
              t,
              2,
              0,
              null == t.parent.context.$implicit
                ? null
                : t.parent.context.$implicit.name,
              !1,
              t.component.isChecked(
                null == t.parent.context.$implicit
                  ? null
                  : t.parent.context.$implicit.name,
              ),
            );
          },
          null,
        );
      }
      function Bt(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-list-route-item",
              [
                ["class", "list__check-item"],
                ["ttIgnore", ""],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t &&
                    (n =
                      !1 !==
                        l.component.selectFolder(l.parent.context.$implicit) &&
                      n),
                  n
                );
              },
              G.b,
              G.a,
            )),
            n.xb(1, 16384, null, 0, jl.a, [], null, null),
            n.xb(2, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              3,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              4,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              6,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              7,
              114688,
              null,
              0,
              hl.a,
              [],
              {
                icon: [0, "icon"],
                titleNonI18nText: [1, "titleNonI18nText"],
                hasSubtitle: [2, "hasSubtitle"],
                type: [3, "type"],
              },
              null,
            ),
            n.xb(
              8,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              9,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
          ],
          function (l, t) {
            var e = t.component;
            (l(t, 4, 0),
              l(t, 6, 0),
              l(
                t,
                7,
                0,
                "E02F_verzeichnisse.webp",
                null == t.parent.context.$implicit
                  ? null
                  : t.parent.context.$implicit.name,
                !1,
                e.ListItemType.ITEM_TYPE_NO_END_ICON,
              ));
          },
          function (l, t) {
            l(t, 0, 0, n.Nb(t, 6).markerClassEnabled);
          },
        );
      }
      function Rt(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
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
            n.xb(
              1,
              16384,
              null,
              0,
              Nl.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (l()(), n.hb(16777216, null, null, 1, null, wt)),
            n.xb(
              3,
              278528,
              null,
              0,
              Nl.p,
              [n.P, n.L, Nl.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (l()(), n.hb(16777216, null, null, 1, null, Bt)),
            n.xb(5, 16384, null, 0, Nl.q, [n.P, n.L, Nl.o], null, null),
            (l()(), n.hb(0, null, null, 0)),
          ],
          function (l, t) {
            var e = t.component;
            (l(
              t,
              1,
              0,
              null == t.context.$implicit ? null : t.context.$implicit.itemType,
            ),
              l(t, 3, 0, e.ItemObjectItemTypeEnum.FILE));
          },
          null,
        );
      }
      function $t(l) {
        return n.ac(
          2,
          [
            n.Tb(671088640, 1, { listComponent: 0 }),
            (l()(), n.hb(16777216, null, null, 5, null, At)),
            n.xb(
              2,
              16384,
              null,
              0,
              ql.a,
              [n.L, n.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            n.Pb(131072, Nl.b, [n.h]),
            n.Pb(131072, Nl.b, [n.h]),
            n.Pb(131072, Nl.b, [n.h]),
            n.Qb(6, { source: 0, numItems: 1, numListEntries: 2 }),
            (l()(), n.hb(0, [["defaultTemplate", 2]], null, 0, null, Rt)),
          ],
          function (l, t) {
            var e = t.component,
              a = l(
                t,
                6,
                0,
                n.Yb(t, 2, 0, n.Nb(t, 3).transform(e.source$)),
                n.Yb(t, 2, 0, n.Nb(t, 4).transform(e.numItems$)),
                n.Yb(t, 2, 0, n.Nb(t, 5).transform(e.numListEntries$)),
              );
            l(t, 2, 0, a);
          },
          null,
        );
      }
      function zt(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-select-imported-contacts",
              [],
              null,
              null,
              null,
              $t,
              Mt,
            )),
            n.xb(
              1,
              245760,
              null,
              0,
              w,
              [y.a, Pt.a, u.a, Ml.a, n.h, Q.a],
              null,
              null,
            ),
          ],
          function (l, t) {
            l(t, 1, 0);
          },
          null,
        );
      }
      var jt = n.ub("au3-select-imported-contacts", w, zt, {}, {}, []),
        Ft = n.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:100%;width:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.text[_ngcontent-%COMP%]{font-size:40px}",
            ],
          ],
          data: {},
        });
      function Wt(l) {
        return n.ac(
          2,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              21,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:ImportWait"],
              ],
              null,
              null,
              null,
              kl.b,
              kl.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(2, 4440064, null, 0, al.a, [Q.a], { id: [0, "id"] }, null),
            (l()(),
            n.yb(
              3,
              0,
              null,
              0,
              15,
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
              Ll.b,
              Ll.a,
            )),
            n.xb(
              4,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              5,
              49152,
              null,
              0,
              Al.a,
              [wl.a, Bl.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryNonI18nText: [1, "secondaryNonI18nText"],
                hasLoader: [2, "hasLoader"],
              },
              null,
            ),
            n.Pb(131072, Nl.b, [n.h]),
            (l()(),
            n.yb(
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
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t &&
                    (n = !1 !== l.component.routingService.goBack() && n),
                  n
                );
              },
              Rl.b,
              Rl.a,
            )),
            n.xb(8, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              9,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              10,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              11,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.xb(
              12,
              147456,
              null,
              0,
              $l.a,
              [Q.a, zl.a, n.l, [2, tl.a], [2, nl.a]],
              null,
              null,
            ),
            n.xb(13, 16384, null, 0, jl.a, [], null, null),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              15,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              16,
              49152,
              null,
              0,
              Fl.a,
              [[2, nl.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            n.xb(
              17,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              18,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
            (l()(),
            n.yb(
              19,
              0,
              null,
              0,
              2,
              "au3-instruction-text",
              [
                ["class", "text"],
                ["id", "ImportInProgress"],
              ],
              null,
              null,
              null,
              dt.b,
              dt.a,
            )),
            n.xb(
              20,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              21,
              49152,
              null,
              0,
              pt.a,
              [],
              { primaryDeveloperText: [0, "primaryDeveloperText"] },
              null,
            ),
          ],
          function (l, t) {
            var e,
              a = t.component;
            (l(t, 1, 0, "Screen:ImportWait"),
              l(t, 2, 0, "Screen:ImportWait"),
              l(t, 4, 0, ""),
              l(
                t,
                5,
                0,
                "Phone",
                null == (e = n.Yb(t, 5, 1, n.Nb(t, 6).transform(a.source$)))
                  ? null
                  : e.name,
                !0,
              ),
              l(t, 9, 0, "BackButton"),
              l(t, 11, 0),
              l(t, 15, 0),
              l(t, 16, 0, !1, "E163_Backbutton.webp"),
              l(t, 20, 0, "ImportInProgress"),
              l(t, 21, 0, "Die Kontakte werden importiert.\nBitte warten..."));
          },
          function (l, t) {
            (l(
              t,
              3,
              0,
              n.Nb(t, 5).hideLeftBorder,
              n.Nb(t, 5).hideDividingBorders,
            ),
              l(
                t,
                7,
                0,
                n.Nb(t, 15).markerClassEnabled,
                n.Nb(t, 16).useItemPlaceholder,
              ));
          },
        );
      }
      function Kt(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-import-wait",
              [],
              null,
              null,
              null,
              Wt,
              Ft,
            )),
            n.xb(
              1,
              245760,
              null,
              0,
              B,
              [Ml.a, Pt.a, u.a, y.a, Q.a],
              null,
              null,
            ),
          ],
          function (l, t) {
            l(t, 1, 0);
          },
          null,
        );
      }
      var Ht = n.ub("au3-import-wait", B, Kt, {}, {}, []),
        Ut = n.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:100%;width:100%}.button[_ngcontent-%COMP%]{width:350px;height:112px}",
            ],
          ],
          data: {},
        });
      function Yt(l) {
        return n.ac(
          2,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              35,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:ImportEnd"],
              ],
              null,
              null,
              null,
              kl.b,
              kl.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(2, 4440064, null, 0, al.a, [Q.a], { id: [0, "id"] }, null),
            (l()(),
            n.yb(
              3,
              0,
              null,
              0,
              15,
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
              Ll.b,
              Ll.a,
            )),
            n.xb(
              4,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              5,
              49152,
              null,
              0,
              Al.a,
              [wl.a, Bl.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryNonI18nText: [1, "secondaryNonI18nText"],
                hasLoader: [2, "hasLoader"],
              },
              null,
            ),
            n.Pb(131072, Nl.b, [n.h]),
            (l()(),
            n.yb(
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
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t && (n = !1 !== l.component.goBack() && n),
                  n
                );
              },
              Rl.b,
              Rl.a,
            )),
            n.xb(8, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              9,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              10,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              11,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.xb(
              12,
              147456,
              null,
              0,
              $l.a,
              [Q.a, zl.a, n.l, [2, tl.a], [2, nl.a]],
              null,
              null,
            ),
            n.xb(13, 16384, null, 0, jl.a, [], null, null),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              15,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              16,
              49152,
              null,
              0,
              Fl.a,
              [[2, nl.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            n.xb(
              17,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              18,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
            (l()(),
            n.yb(
              19,
              0,
              null,
              0,
              16,
              "au3-instruction-text",
              [
                ["class", "text"],
                ["id", ""],
              ],
              null,
              null,
              null,
              dt.b,
              dt.a,
            )),
            n.xb(
              20,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              21,
              16384,
              null,
              0,
              X.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            n.Qb(22, { success: 0, failure: 1 }),
            n.xb(
              23,
              49152,
              null,
              0,
              pt.a,
              [],
              {
                primaryTextId: [0, "primaryTextId"],
                primaryTextIdEnum: [1, "primaryTextIdEnum"],
                primaryDeveloperText: [2, "primaryDeveloperText"],
                secondaryDeveloperText: [3, "secondaryDeveloperText"],
                hasSecondaryText: [4, "hasSecondaryText"],
              },
              null,
            ),
            (l()(),
            n.yb(
              24,
              0,
              null,
              1,
              11,
              "au3-operation-panel",
              [],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              Ot.b,
              Ot.a,
            )),
            n.xb(
              25,
              49152,
              null,
              0,
              St.a,
              [Nt.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (l()(),
            n.yb(
              26,
              0,
              null,
              1,
              9,
              "au3-operation-panel-item",
              [
                ["class", "button"],
                ["id", "OKButton"],
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
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t &&
                    (n = !1 !== l.component.routingService.goUp() && n),
                  n
                );
              },
              vt.b,
              vt.a,
            )),
            n.xb(
              27,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(28, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              29,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              30,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              32,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              33,
              49152,
              null,
              0,
              yt.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            n.xb(
              34,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              35,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
          ],
          function (l, t) {
            var e,
              a = t.component;
            (l(t, 1, 0, "Screen:ImportEnd"),
              l(t, 2, 0, "Screen:ImportEnd"),
              l(t, 4, 0, ""),
              l(
                t,
                5,
                0,
                "Phone",
                null == (e = n.Yb(t, 5, 1, n.Nb(t, 6).transform(a.source$)))
                  ? null
                  : e.name,
                !0,
              ),
              l(t, 9, 0, "BackButton"),
              l(t, 11, 0),
              l(t, 15, 0),
              l(t, 16, 0, !1, "E163_Backbutton.webp"),
              l(t, 20, 0, ""));
            var i = l(
              t,
              22,
              0,
              null == a.operationData || null == a.operationData.result
                ? null
                : a.operationData.result.successCount,
              null == a.operationData || null == a.operationData.result
                ? null
                : a.operationData.result.failureCount,
            );
            (l(t, 21, 0, i),
              l(
                t,
                23,
                0,
                a.resultId,
                a.ImportErrorReasonTexts,
                a.resultText,
                "Importierte Kontakte: {{success}} \nNicht importierte Kontakte: {{failure}}",
                !0,
              ),
              l(t, 25, 0, !0),
              l(t, 27, 0, "OKButton"),
              l(t, 30, 0),
              l(t, 32, 0),
              l(t, 33, 0, "OK", !0));
          },
          function (l, t) {
            (l(
              t,
              3,
              0,
              n.Nb(t, 5).hideLeftBorder,
              n.Nb(t, 5).hideDividingBorders,
            ),
              l(
                t,
                7,
                0,
                n.Nb(t, 15).markerClassEnabled,
                n.Nb(t, 16).useItemPlaceholder,
              ),
              l(t, 24, 0, n.Nb(t, 25).alignInside, n.Nb(t, 25).alignOutside),
              l(t, 26, 1, [
                n.Nb(t, 32).markerClassEnabled,
                n.Nb(t, 33).showSeparatorLeft,
                n.Nb(t, 33).showSeparatorRight,
                n.Nb(t, 33).prio1Main,
                n.Nb(t, 33).prio1SmallScale,
                n.Nb(t, 33).prio2SmallScale,
                n.Nb(t, 33).prio1,
                n.Nb(t, 33).prio2,
                n.Nb(t, 33).prio1IconText,
                n.Nb(t, 33).prio1IconOnly,
                n.Nb(t, 33).prio1TextOnly,
                n.Nb(t, 33).prio2IconText,
                n.Nb(t, 33).prio2IconOnly,
                n.Nb(t, 33).prio2TextOnly,
                n.Nb(t, 33).useDefaultMaxWidth,
                n.Nb(t, 33).isDummy,
              ]));
          },
        );
      }
      function Gt(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-import-end",
              [],
              null,
              null,
              null,
              Yt,
              Ut,
            )),
            n.xb(
              1,
              245760,
              null,
              0,
              $,
              [Ml.a, Pt.a, u.a, y.a, n.h],
              null,
              null,
            ),
          ],
          function (l, t) {
            l(t, 1, 0);
          },
          null,
        );
      }
      var Vt = n.ub("au3-import-end", $, Gt, {}, {}, []),
        Zt = n.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;height:100%;width:100%}.list__item[_ngcontent-%COMP%]{padding:0 20px;height:100px}.list__item[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]{font-size:40px}",
            ],
          ],
          data: {},
        });
      function Qt(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-instruction-text",
              [
                ["class", "text"],
                ["id", "NoDrives"],
              ],
              null,
              null,
              null,
              dt.b,
              dt.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              2,
              49152,
              null,
              0,
              pt.a,
              [],
              { primaryDeveloperText: [0, "primaryDeveloperText"] },
              null,
            ),
          ],
          function (l, t) {
            (l(t, 1, 0, "NoDrives"), l(t, 2, 0, "Keine Quellen verf\xfcgbar."));
          },
          null,
        );
      }
      function Xt(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              5,
              "au3-list",
              [["id", "SourceList"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Wl.b,
              Wl.a,
            )),
            n.Sb(6144, null, Kl.a, null, [Hl.a]),
            n.xb(
              2,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(3, 16384, null, 0, Ul.a, [n.l], null, null),
            n.xb(
              4,
              12828672,
              null,
              1,
              Hl.a,
              [
                [2, Yl.a],
                [2, Gl.a],
                [8, null],
                [2, V.a],
                [2, Vl.a],
                [2, Zl.a],
                [2, el.b],
                El.i,
                n.z,
                n.h,
                Q.a,
                Ql.a,
                Xl.a,
                [2, cl.a],
                ll.a,
                [2, El.a],
              ],
              { defaultTemplate: [0, "defaultTemplate"], items: [1, "items"] },
              null,
            ),
            n.Tb(603979776, 1, { template: 0 }),
          ],
          function (l, t) {
            var e = t.component;
            (l(t, 2, 0, "SourceList"),
              l(t, 4, 0, n.Nb(t.parent, 20), e.usbDrives));
          },
          function (l, t) {
            l(t, 0, 0, n.Nb(t, 4).showLineNumbers);
          },
        );
      }
      function qt(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-list-route-item",
              [
                ["class", "list__item"],
                ["ttIgnore", ""],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t &&
                    (n =
                      !1 !== l.component.selectSource(l.context.$implicit) &&
                      n),
                  n
                );
              },
              G.b,
              G.a,
            )),
            n.xb(1, 16384, null, 0, jl.a, [], null, null),
            n.xb(2, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              3,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              4,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              6,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              7,
              114688,
              null,
              0,
              hl.a,
              [],
              {
                icon: [0, "icon"],
                titleNonI18nText: [1, "titleNonI18nText"],
                hasSubtitle: [2, "hasSubtitle"],
                type: [3, "type"],
              },
              null,
            ),
            n.xb(
              8,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              9,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
          ],
          function (l, t) {
            var e = t.component;
            (l(t, 4, 0),
              l(t, 6, 0),
              l(
                t,
                7,
                0,
                "E07C_media_ami_usb.webp",
                t.context.$implicit.name,
                !1,
                e.listItemType.ITEM_TYPE_NO_END_ICON,
              ));
          },
          function (l, t) {
            l(t, 0, 0, n.Nb(t, 6).markerClassEnabled);
          },
        );
      }
      function Jt(l) {
        return n.ac(
          2,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              19,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:ExportSource"],
              ],
              null,
              null,
              null,
              kl.b,
              kl.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(2, 4440064, null, 0, al.a, [Q.a], { id: [0, "id"] }, null),
            (l()(),
            n.yb(
              3,
              0,
              null,
              0,
              13,
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
              Ll.b,
              Ll.a,
            )),
            n.xb(
              4,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              5,
              49152,
              null,
              0,
              Al.a,
              [wl.a, Bl.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (l()(),
            n.yb(
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
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t &&
                    (n = !1 !== l.component.routingService.goBack() && n),
                  n
                );
              },
              Rl.b,
              Rl.a,
            )),
            n.xb(7, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              8,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              9,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              10,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.xb(
              11,
              147456,
              null,
              0,
              $l.a,
              [Q.a, zl.a, n.l, [2, tl.a], [2, nl.a]],
              null,
              null,
            ),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              13,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              14,
              49152,
              null,
              0,
              Fl.a,
              [[2, nl.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            n.xb(
              15,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              16,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
            (l()(), n.hb(16777216, null, 0, 1, null, Qt)),
            n.xb(
              18,
              16384,
              null,
              0,
              Nl.k,
              [n.P, n.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (l()(), n.hb(0, [["sourceList", 2]], 0, 0, null, Xt)),
            (l()(), n.hb(0, [["defaultTemplate", 2]], null, 0, null, qt)),
          ],
          function (l, t) {
            var e = t.component;
            (l(t, 1, 0, "Screen:ExportSource"),
              l(t, 2, 0, "Screen:ExportSource"),
              l(t, 4, 0, ""),
              l(t, 5, 0, "Phone", "Kontakte exportieren"),
              l(t, 8, 0, "BackButton"),
              l(t, 10, 0),
              l(t, 13, 0),
              l(t, 14, 0, !1, "E163_Backbutton.webp"),
              l(t, 18, 0, e.usbDrives.length < 1, n.Nb(t, 19)));
          },
          function (l, t) {
            (l(
              t,
              3,
              0,
              n.Nb(t, 5).hideLeftBorder,
              n.Nb(t, 5).hideDividingBorders,
            ),
              l(
                t,
                6,
                0,
                n.Nb(t, 13).markerClassEnabled,
                n.Nb(t, 14).useItemPlaceholder,
              ));
          },
        );
      }
      function le(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-export-source",
              [],
              null,
              null,
              null,
              Jt,
              Zt,
            )),
            n.xb(1, 245760, null, 0, K, [y.a, Q.a, Ml.a, n.h], null, null),
          ],
          function (l, t) {
            l(t, 1, 0);
          },
          null,
        );
      }
      var te = n.ub("au3-export-source", K, le, {}, {}, []),
        ee = n.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:100%;width:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.text[_ngcontent-%COMP%]{font-size:40px;position:absolute;height:100%}.list__check-item[_ngcontent-%COMP%]{padding:30px 0;display:flex;justify-content:space-between;align-items:center;font-size:40px}.button-container[_ngcontent-%COMP%]{height:102px}.list__content-container[_ngcontent-%COMP%]{position:relative;flex-grow:1}.list__export-contacts[_ngcontent-%COMP%], .list__no-contacts[_ngcontent-%COMP%]{visibility:hidden}.list[_ngcontent-%COMP%]{height:100%;width:100%;position:absolute}",
            ],
          ],
          data: {},
        });
      function ne(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-instruction-text",
              [
                ["class", "text"],
                ["id", "NoContacts"],
              ],
              null,
              null,
              null,
              dt.b,
              dt.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              2,
              49152,
              null,
              0,
              pt.a,
              [],
              { primaryDeveloperText: [0, "primaryDeveloperText"] },
              null,
            ),
          ],
          function (l, t) {
            (l(t, 1, 0, "NoContacts"),
              l(t, 2, 0, "Keine \xf6ffentlichen Kontakte vorhanden."));
          },
          null,
        );
      }
      function ae(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "DeSelectAllButton"],
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
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t && (n = !1 !== l.component.toggleAll() && n),
                  n
                );
              },
              vt.b,
              vt.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(2, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              3,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              4,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              6,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              7,
              49152,
              null,
              0,
              yt.a,
              [],
              {
                developerText: [0, "developerText"],
                icon: [1, "icon"],
                iconCategory: [2, "iconCategory"],
                useCustomMaxWidth: [3, "useCustomMaxWidth"],
                prio1Item: [4, "prio1Item"],
              },
              null,
            ),
            n.xb(
              8,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              9,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
          ],
          function (l, t) {
            var e = t.component;
            (l(t, 1, 0, "DeSelectAllButton"),
              l(t, 4, 0),
              l(t, 6, 0),
              l(
                t,
                7,
                0,
                "Alle Kontakte abw\xe4hlen",
                "E160_checkbox_selected.webp",
                e.iconCategory,
                !0,
                !0,
              ));
          },
          function (l, t) {
            l(t, 0, 1, [
              n.Nb(t, 6).markerClassEnabled,
              n.Nb(t, 7).showSeparatorLeft,
              n.Nb(t, 7).showSeparatorRight,
              n.Nb(t, 7).prio1Main,
              n.Nb(t, 7).prio1SmallScale,
              n.Nb(t, 7).prio2SmallScale,
              n.Nb(t, 7).prio1,
              n.Nb(t, 7).prio2,
              n.Nb(t, 7).prio1IconText,
              n.Nb(t, 7).prio1IconOnly,
              n.Nb(t, 7).prio1TextOnly,
              n.Nb(t, 7).prio2IconText,
              n.Nb(t, 7).prio2IconOnly,
              n.Nb(t, 7).prio2TextOnly,
              n.Nb(t, 7).useDefaultMaxWidth,
              n.Nb(t, 7).isDummy,
            ]);
          },
        );
      }
      function ie(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "SelectAllButton"],
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
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t && (n = !1 !== l.component.toggleAll() && n),
                  n
                );
              },
              vt.b,
              vt.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(2, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              3,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              4,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              6,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              7,
              49152,
              null,
              0,
              yt.a,
              [],
              {
                developerText: [0, "developerText"],
                icon: [1, "icon"],
                iconCategory: [2, "iconCategory"],
                useCustomMaxWidth: [3, "useCustomMaxWidth"],
                prio1Item: [4, "prio1Item"],
              },
              null,
            ),
            n.xb(
              8,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              9,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
          ],
          function (l, t) {
            var e = t.component;
            (l(t, 1, 0, "SelectAllButton"),
              l(t, 4, 0),
              l(t, 6, 0),
              l(
                t,
                7,
                0,
                "Alle Kontakte ausw\xe4hlen",
                "E161_checkbox.webp",
                e.iconCategory,
                !0,
                !0,
              ));
          },
          function (l, t) {
            l(t, 0, 1, [
              n.Nb(t, 6).markerClassEnabled,
              n.Nb(t, 7).showSeparatorLeft,
              n.Nb(t, 7).showSeparatorRight,
              n.Nb(t, 7).prio1Main,
              n.Nb(t, 7).prio1SmallScale,
              n.Nb(t, 7).prio2SmallScale,
              n.Nb(t, 7).prio1,
              n.Nb(t, 7).prio2,
              n.Nb(t, 7).prio1IconText,
              n.Nb(t, 7).prio1IconOnly,
              n.Nb(t, 7).prio1TextOnly,
              n.Nb(t, 7).prio2IconText,
              n.Nb(t, 7).prio2IconOnly,
              n.Nb(t, 7).prio2TextOnly,
              n.Nb(t, 7).useDefaultMaxWidth,
              n.Nb(t, 7).isDummy,
            ]);
          },
        );
      }
      function oe(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              15,
              "au3-operation-panel",
              [["class", "button-container"]],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              Ot.b,
              Ot.a,
            )),
            n.xb(1, 49152, null, 0, St.a, [Nt.a], null, null),
            (l()(),
            n.yb(
              2,
              0,
              null,
              1,
              10,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "StartExportButton"],
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
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t &&
                    (n = !1 !== l.component.startExport() && n),
                  n
                );
              },
              vt.b,
              vt.a,
            )),
            n.xb(
              3,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(4, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              5,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              6,
              147456,
              null,
              0,
              nl.a,
              [Ol.a, n.h, Q.a, [3, nl.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            n.xb(
              7,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              9,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              10,
              49152,
              null,
              0,
              yt.a,
              [],
              {
                developerText: [0, "developerText"],
                useCustomMaxWidth: [1, "useCustomMaxWidth"],
                prio1Item: [2, "prio1Item"],
              },
              null,
            ),
            n.xb(
              11,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              12,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
            (l()(), n.hb(16777216, null, 1, 1, null, ae)),
            n.xb(
              14,
              16384,
              null,
              0,
              Nl.k,
              [n.P, n.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (l()(), n.hb(0, [["showSelectAllButton", 2]], 1, 0, null, ie)),
          ],
          function (l, t) {
            var e = t.component;
            (l(t, 3, 0, "StartExportButton"),
              l(t, 6, 0, e.exportDisabled),
              l(t, 7, 0),
              l(t, 9, 0),
              l(t, 10, 0, "Export starten", !0, !0),
              l(t, 14, 0, e.allItemsSelected, n.Nb(t, 15)));
          },
          function (l, t) {
            (l(t, 0, 0, n.Nb(t, 1).alignInside, n.Nb(t, 1).alignOutside),
              l(t, 2, 1, [
                n.Nb(t, 6).combinedDisabled,
                n.Nb(t, 6).useBrighterIcon,
                n.Nb(t, 9).markerClassEnabled,
                n.Nb(t, 10).showSeparatorLeft,
                n.Nb(t, 10).showSeparatorRight,
                n.Nb(t, 10).prio1Main,
                n.Nb(t, 10).prio1SmallScale,
                n.Nb(t, 10).prio2SmallScale,
                n.Nb(t, 10).prio1,
                n.Nb(t, 10).prio2,
                n.Nb(t, 10).prio1IconText,
                n.Nb(t, 10).prio1IconOnly,
                n.Nb(t, 10).prio1TextOnly,
                n.Nb(t, 10).prio2IconText,
                n.Nb(t, 10).prio2IconOnly,
                n.Nb(t, 10).prio2TextOnly,
                n.Nb(t, 10).useDefaultMaxWidth,
                n.Nb(t, 10).isDummy,
              ]));
          },
        );
      }
      function ue(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-list-checkbox-item",
              [
                ["class", "list__check-item"],
                ["ttIgnore", ""],
              ],
              null,
              [[null, "valueChange"]],
              function (l, t, e) {
                var n = !0;
                return (
                  "valueChange" === t &&
                    (n =
                      !1 !== l.component.toggleSelected(l.context.$implicit) &&
                      n),
                  n
                );
              },
              Ct.b,
              Ct.a,
            )),
            n.xb(1, 16384, null, 0, jl.a, [], null, null),
            n.xb(
              2,
              49152,
              null,
              0,
              _t.a,
              [],
              {
                titleNonI18nText: [0, "titleNonI18nText"],
                hasSubtitle: [1, "hasSubtitle"],
                checked: [2, "checked"],
              },
              { valueChange: "valueChange" },
            ),
          ],
          function (l, t) {
            l(
              t,
              2,
              0,
              null == t.context.$implicit ? null : t.context.$implicit.name,
              !1,
              t.component.getItemChecked(t.context.$implicit),
            );
          },
          null,
        );
      }
      function re(l) {
        return n.ac(
          0,
          [
            n.Tb(402653184, 1, { viewComponent: 0 }),
            (l()(),
            n.yb(
              1,
              0,
              null,
              null,
              29,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:SelectExport"],
              ],
              null,
              null,
              null,
              kl.b,
              kl.a,
            )),
            n.xb(
              2,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(3, 4440064, null, 0, al.a, [Q.a], { id: [0, "id"] }, null),
            (l()(),
            n.yb(
              4,
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
              Ll.b,
              Ll.a,
            )),
            n.xb(
              5,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              6,
              49152,
              null,
              0,
              Al.a,
              [wl.a, Bl.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryNonI18nText: [1, "secondaryNonI18nText"],
                hasLoader: [2, "hasLoader"],
              },
              null,
            ),
            (l()(),
            n.yb(
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
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t &&
                    (n = !1 !== l.component.routingService.goBack() && n),
                  n
                );
              },
              Rl.b,
              Rl.a,
            )),
            n.xb(8, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              9,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              10,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              11,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.xb(
              12,
              147456,
              null,
              0,
              $l.a,
              [Q.a, zl.a, n.l, [2, tl.a], [2, nl.a]],
              null,
              null,
            ),
            n.xb(13, 16384, null, 0, jl.a, [], null, null),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              15,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              16,
              49152,
              null,
              0,
              Fl.a,
              [[2, nl.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            n.xb(
              17,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              18,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
            (l()(),
            n.yb(
              19,
              0,
              null,
              0,
              9,
              "div",
              [["class", "list__content-container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(), n.hb(16777216, null, null, 1, null, ne)),
            n.xb(
              21,
              16384,
              null,
              0,
              Nl.k,
              [n.P, n.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(),
            n.yb(
              22,
              0,
              null,
              null,
              6,
              "au3-list",
              [
                ["au3ListDomPaging", ""],
                ["class", "list"],
                ["id", "ExportList"],
              ],
              [
                [2, "list__no-contacts", null],
                [2, "list--with-line-numbers", null],
              ],
              null,
              null,
              Wl.b,
              Wl.a,
            )),
            n.Sb(6144, null, Kl.a, null, [Hl.a]),
            n.xb(
              24,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(25, 16384, null, 0, Ul.a, [n.l], null, null),
            n.xb(
              26,
              16384,
              null,
              0,
              Yl.a,
              [Q.a],
              { itemHeightGuess: [0, "itemHeightGuess"] },
              null,
            ),
            n.xb(
              27,
              12828672,
              [
                [1, 4],
                ["ContactList", 4],
              ],
              1,
              Hl.a,
              [
                [2, Yl.a],
                [2, Gl.a],
                [8, null],
                [2, V.a],
                [2, Vl.a],
                [2, Zl.a],
                [2, el.b],
                El.i,
                n.z,
                n.h,
                Q.a,
                Ql.a,
                Xl.a,
                [2, cl.a],
                ll.a,
                [2, El.a],
              ],
              {
                itemHeightGuess: [0, "itemHeightGuess"],
                defaultTemplate: [1, "defaultTemplate"],
                items: [2, "items"],
              },
              null,
            ),
            n.Tb(603979776, 2, { template: 0 }),
            (l()(), n.hb(16777216, null, 0, 1, null, oe)),
            n.xb(
              30,
              16384,
              null,
              0,
              Nl.k,
              [n.P, n.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(), n.hb(0, [["defaultTemplate", 2]], null, 0, null, ue)),
          ],
          function (l, t) {
            var e = t.component;
            (l(t, 2, 0, "Screen:SelectExport"),
              l(t, 3, 0, "Screen:SelectExport"),
              l(t, 5, 0, ""),
              l(t, 6, 0, "Phone", null == e.source ? null : e.source.name, !0),
              l(t, 9, 0, "BackButton"),
              l(t, 11, 0),
              l(t, 15, 0),
              l(t, 16, 0, !1, "E163_Backbutton.webp"),
              l(t, 21, 0, e.numItems <= 0),
              l(t, 24, 0, "ExportList"),
              l(t, 26, 0, 100),
              l(t, 27, 0, 100, n.Nb(t, 31), e.exportContacts),
              l(t, 30, 0, e.numItems > 0));
          },
          function (l, t) {
            var e = t.component;
            (l(
              t,
              4,
              0,
              n.Nb(t, 6).hideLeftBorder,
              n.Nb(t, 6).hideDividingBorders,
            ),
              l(
                t,
                7,
                0,
                n.Nb(t, 15).markerClassEnabled,
                n.Nb(t, 16).useItemPlaceholder,
              ),
              l(t, 22, 0, e.numItems <= 0, n.Nb(t, 27).showLineNumbers));
          },
        );
      }
      function se(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-setup-export-list",
              [],
              null,
              null,
              null,
              re,
              ee,
            )),
            n.xb(
              1,
              4440064,
              null,
              0,
              W,
              [Ml.a, u.a, Pt.a, y.a, n.h, Q.a],
              null,
              null,
            ),
          ],
          function (l, t) {
            l(t, 1, 0);
          },
          null,
        );
      }
      var ce = n.ub("au3-setup-export-list", W, se, {}, {}, []),
        be = n.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:100%;width:100%}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.text[_ngcontent-%COMP%]{font-size:40px}",
            ],
          ],
          data: {},
        });
      function de(l) {
        return n.ac(
          2,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              21,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:ExportWait"],
              ],
              null,
              null,
              null,
              kl.b,
              kl.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(2, 4440064, null, 0, al.a, [Q.a], { id: [0, "id"] }, null),
            (l()(),
            n.yb(
              3,
              0,
              null,
              0,
              15,
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
              Ll.b,
              Ll.a,
            )),
            n.xb(
              4,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              5,
              49152,
              null,
              0,
              Al.a,
              [wl.a, Bl.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryNonI18nText: [1, "secondaryNonI18nText"],
                hasLoader: [2, "hasLoader"],
              },
              null,
            ),
            n.Pb(131072, Nl.b, [n.h]),
            (l()(),
            n.yb(
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
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t &&
                    (n = !1 !== l.component.routingService.goBack() && n),
                  n
                );
              },
              Rl.b,
              Rl.a,
            )),
            n.xb(8, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              9,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              10,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              11,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.xb(
              12,
              147456,
              null,
              0,
              $l.a,
              [Q.a, zl.a, n.l, [2, tl.a], [2, nl.a]],
              null,
              null,
            ),
            n.xb(13, 16384, null, 0, jl.a, [], null, null),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              15,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              16,
              49152,
              null,
              0,
              Fl.a,
              [[2, nl.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            n.xb(
              17,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              18,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
            (l()(),
            n.yb(
              19,
              0,
              null,
              0,
              2,
              "au3-instruction-text",
              [
                ["class", "text"],
                ["id", "ExportInProgress"],
              ],
              null,
              null,
              null,
              dt.b,
              dt.a,
            )),
            n.xb(
              20,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              21,
              49152,
              null,
              0,
              pt.a,
              [],
              { primaryDeveloperText: [0, "primaryDeveloperText"] },
              null,
            ),
          ],
          function (l, t) {
            var e,
              a = t.component;
            (l(t, 1, 0, "Screen:ExportWait"),
              l(t, 2, 0, "Screen:ExportWait"),
              l(t, 4, 0, ""),
              l(
                t,
                5,
                0,
                "Phone",
                null == (e = n.Yb(t, 5, 1, n.Nb(t, 6).transform(a.source$)))
                  ? null
                  : e.name,
                !0,
              ),
              l(t, 9, 0, "BackButton"),
              l(t, 11, 0),
              l(t, 15, 0),
              l(t, 16, 0, !1, "E163_Backbutton.webp"),
              l(t, 20, 0, "ExportInProgress"),
              l(t, 21, 0, "Die Kontakte werden exportiert.\nBitte warten..."));
          },
          function (l, t) {
            (l(
              t,
              3,
              0,
              n.Nb(t, 5).hideLeftBorder,
              n.Nb(t, 5).hideDividingBorders,
            ),
              l(
                t,
                7,
                0,
                n.Nb(t, 15).markerClassEnabled,
                n.Nb(t, 16).useItemPlaceholder,
              ));
          },
        );
      }
      function pe(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-export-wait",
              [],
              null,
              null,
              null,
              de,
              be,
            )),
            n.xb(1, 245760, null, 0, F, [Ml.a, Pt.a, u.a, y.a], null, null),
          ],
          function (l, t) {
            l(t, 1, 0);
          },
          null,
        );
      }
      var he = n.ub("au3-export-wait", F, pe, {}, {}, []),
        me = n.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block;height:100%;width:100%}.button[_ngcontent-%COMP%]{width:350px;height:112px}",
            ],
          ],
          data: {},
        });
      function xe(l) {
        return n.ac(
          2,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              35,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:ExportEnd"],
              ],
              null,
              null,
              null,
              kl.b,
              kl.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(2, 4440064, null, 0, al.a, [Q.a], { id: [0, "id"] }, null),
            (l()(),
            n.yb(
              3,
              0,
              null,
              0,
              15,
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
              Ll.b,
              Ll.a,
            )),
            n.xb(
              4,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              5,
              49152,
              null,
              0,
              Al.a,
              [wl.a, Bl.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryNonI18nText: [1, "secondaryNonI18nText"],
                hasLoader: [2, "hasLoader"],
              },
              null,
            ),
            n.Pb(131072, Nl.b, [n.h]),
            (l()(),
            n.yb(
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
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t && (n = !1 !== l.component.goBack() && n),
                  n
                );
              },
              Rl.b,
              Rl.a,
            )),
            n.xb(8, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              9,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              10,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              11,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.xb(
              12,
              147456,
              null,
              0,
              $l.a,
              [Q.a, zl.a, n.l, [2, tl.a], [2, nl.a]],
              null,
              null,
            ),
            n.xb(13, 16384, null, 0, jl.a, [], null, null),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              15,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              16,
              49152,
              null,
              0,
              Fl.a,
              [[2, nl.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            n.xb(
              17,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              18,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
            (l()(),
            n.yb(
              19,
              0,
              null,
              0,
              16,
              "au3-instruction-text",
              [
                ["class", "text"],
                ["id", ""],
              ],
              null,
              null,
              null,
              dt.b,
              dt.a,
            )),
            n.xb(
              20,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              21,
              16384,
              null,
              0,
              X.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            n.Qb(22, { success: 0, failure: 1 }),
            n.xb(
              23,
              49152,
              null,
              0,
              pt.a,
              [],
              {
                primaryTextId: [0, "primaryTextId"],
                primaryTextIdEnum: [1, "primaryTextIdEnum"],
                primaryDeveloperText: [2, "primaryDeveloperText"],
                secondaryDeveloperText: [3, "secondaryDeveloperText"],
                hasSecondaryText: [4, "hasSecondaryText"],
              },
              null,
            ),
            (l()(),
            n.yb(
              24,
              0,
              null,
              1,
              11,
              "au3-operation-panel",
              [],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              Ot.b,
              Ot.a,
            )),
            n.xb(
              25,
              49152,
              null,
              0,
              St.a,
              [Nt.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (l()(),
            n.yb(
              26,
              0,
              null,
              1,
              9,
              "au3-operation-panel-item",
              [
                ["class", "button"],
                ["id", "OKButton"],
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
              function (l, t, e) {
                var n = !0;
                return (
                  "mib3Tap" === t &&
                    (n = !1 !== l.component.routingService.goUp() && n),
                  n
                );
              },
              vt.b,
              vt.a,
            )),
            n.xb(
              27,
              212992,
              null,
              0,
              V.a,
              [n.l, n.D, Z.a, Q.a, [3, V.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(28, 147456, null, 0, q.a, [n.l, n.z], null, null),
            n.xb(
              29,
              147456,
              null,
              0,
              J.a,
              [q.a, [2, ll.a], [2, V.a], Q.a],
              null,
              null,
            ),
            n.xb(
              30,
              212992,
              null,
              0,
              tl.a,
              [
                Q.a,
                el.b,
                J.a,
                [2, ll.a],
                [2, V.a],
                [2, nl.a],
                [2, al.a],
                [2, il.a],
                n.z,
                ol.a,
                n.l,
                [2, ul.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.Sb(131584, null, rl.a, rl.a, [[3, rl.a]]),
            n.xb(
              32,
              4407296,
              null,
              0,
              sl.a,
              [
                n.l,
                cl.a,
                n.h,
                rl.a,
                [2, bl.a],
                [2, ll.b],
                [2, ll.a],
                [2, dl.a],
                [2, pl.a],
              ],
              null,
              null,
            ),
            n.xb(
              33,
              49152,
              null,
              0,
              yt.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            n.xb(
              34,
              147456,
              null,
              0,
              ml.a,
              [
                [2, tl.a],
                [2, nl.a],
                [2, xl.a],
                [2, sl.a],
                [2, gl.b],
                n.l,
                fl.a,
                Tl.b,
              ],
              null,
              null,
            ),
            n.xb(
              35,
              147456,
              null,
              0,
              Il.a,
              [[2, sl.a], [2, tl.a], [2, el.b], vl.a],
              null,
              null,
            ),
          ],
          function (l, t) {
            var e,
              a = t.component;
            (l(t, 1, 0, "Screen:ExportEnd"),
              l(t, 2, 0, "Screen:ExportEnd"),
              l(t, 4, 0, ""),
              l(
                t,
                5,
                0,
                "Phone",
                null == (e = n.Yb(t, 5, 1, n.Nb(t, 6).transform(a.source$)))
                  ? null
                  : e.name,
                !0,
              ),
              l(t, 9, 0, "BackButton"),
              l(t, 11, 0),
              l(t, 15, 0),
              l(t, 16, 0, !1, "E163_Backbutton.webp"),
              l(t, 20, 0, ""));
            var i = l(
              t,
              22,
              0,
              null == a.operationData || null == a.operationData.result
                ? null
                : a.operationData.result.successCount,
              null == a.operationData || null == a.operationData.result
                ? null
                : a.operationData.result.failureCount,
            );
            (l(t, 21, 0, i),
              l(
                t,
                23,
                0,
                a.resultText,
                a.ExportErrorReasonTexts,
                a.resultText,
                "Exportierte Kontakte: {{success}} \nNicht exportierte Kontakte: {{failure}}",
                !0,
              ),
              l(t, 25, 0, !0),
              l(t, 27, 0, "OKButton"),
              l(t, 30, 0),
              l(t, 32, 0),
              l(t, 33, 0, "OK", !0));
          },
          function (l, t) {
            (l(
              t,
              3,
              0,
              n.Nb(t, 5).hideLeftBorder,
              n.Nb(t, 5).hideDividingBorders,
            ),
              l(
                t,
                7,
                0,
                n.Nb(t, 15).markerClassEnabled,
                n.Nb(t, 16).useItemPlaceholder,
              ),
              l(t, 24, 0, n.Nb(t, 25).alignInside, n.Nb(t, 25).alignOutside),
              l(t, 26, 1, [
                n.Nb(t, 32).markerClassEnabled,
                n.Nb(t, 33).showSeparatorLeft,
                n.Nb(t, 33).showSeparatorRight,
                n.Nb(t, 33).prio1Main,
                n.Nb(t, 33).prio1SmallScale,
                n.Nb(t, 33).prio2SmallScale,
                n.Nb(t, 33).prio1,
                n.Nb(t, 33).prio2,
                n.Nb(t, 33).prio1IconText,
                n.Nb(t, 33).prio1IconOnly,
                n.Nb(t, 33).prio1TextOnly,
                n.Nb(t, 33).prio2IconText,
                n.Nb(t, 33).prio2IconOnly,
                n.Nb(t, 33).prio2TextOnly,
                n.Nb(t, 33).useDefaultMaxWidth,
                n.Nb(t, 33).isDummy,
              ]));
          },
        );
      }
      function ge(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-export-finished",
              [],
              null,
              null,
              null,
              xe,
              me,
            )),
            n.xb(
              1,
              245760,
              null,
              0,
              j,
              [Ml.a, Pt.a, u.a, y.a, n.h],
              null,
              null,
            ),
          ],
          function (l, t) {
            l(t, 1, 0);
          },
          null,
        );
      }
      var fe = n.ub("au3-export-finished", j, ge, {}, {}, []),
        Te = e("aDqW"),
        Ie = e("/W5r"),
        ve = e("+Qv1"),
        ye = e("XtoR"),
        Oe = e("jTHl"),
        Se = e("zL3T"),
        Ne = e("+epw"),
        Ce = e("zMPs"),
        _e = e("6Yk8"),
        Pe = e("u6+O"),
        Me = e("CIQC"),
        Ee = e("REmV"),
        De = e("Y3N+"),
        ke = e("MJxn"),
        Le = e("eIOF"),
        Ae = e("t+4g"),
        we = e("myjn"),
        Be = e("fOZ7"),
        Re = n.vb(U, [], function (l) {
          return n.Kb([
            n.Lb(512, n.j, n.X, [
              [8, [Y.a, ut, bt, It, jt, Ht, Vt, te, ce, he, fe]],
              [3, n.j],
              n.x,
            ]),
            n.Lb(4608, Nl.m, Nl.l, [n.u]),
            n.Lb(4608, Te.h, Te.g, []),
            n.Lb(4608, Te.d, Te.f, []),
            n.Lb(4608, Te.j, Te.e, []),
            n.Lb(4608, Te.c, Te.b, []),
            n.Lb(4608, Te.k, Te.k, [
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
            n.Lb(4608, Ie.b, Ie.b, [ve.e, [2, Ie.a]]),
            n.Lb(4608, ye.b, ye.b, [ve.e, [2, ye.a]]),
            n.Lb(4608, Oe.b, Oe.b, [ve.e, [2, Oe.a]]),
            n.Lb(4608, Se.b, Se.b, [ve.e, [2, Se.a]]),
            n.Lb(4608, H, H, [y.a, Q.a]),
            n.Lb(1073742336, Nl.c, Nl.c, []),
            n.Lb(1073742336, Te.i, Te.i, []),
            n.Lb(1073742336, Ne.a, Ne.a, []),
            n.Lb(1073742336, Ce.a, Ce.a, []),
            n.Lb(1073742336, _e.a, _e.a, []),
            n.Lb(1073742336, Pe.a, Pe.a, []),
            n.Lb(1073742336, Me.a, Me.a, []),
            n.Lb(1073742336, Ee.a, Ee.a, []),
            n.Lb(1073742336, De.a, De.a, []),
            n.Lb(1073742336, ke.a, ke.a, []),
            n.Lb(1073742336, Le.a, Le.a, []),
            n.Lb(1073742336, Ae.a, Ae.a, []),
            n.Lb(1073742336, we.a, we.a, []),
            n.Lb(1073742336, Be.a, Be.a, []),
            n.Lb(1073742336, Pt.n, Pt.n, [
              [2, Pt.s],
              [2, Pt.m],
            ]),
            n.Lb(1073742336, U, U, []),
            n.Lb(256, Te.o, void 0, []),
            n.Lb(256, Te.m, void 0, []),
            n.Lb(256, Te.n, void 0, []),
            n.Lb(256, Te.a, void 0, []),
            n.Lb(
              1024,
              Pt.k,
              function () {
                return [
                  [
                    {
                      path: "",
                      children: [
                        { path: "", component: f, pathMatch: "full" },
                        { path: "download", component: v },
                        { path: "sources", component: C },
                        { path: "import/:id", component: w, canActivate: [H] },
                        { path: "import-in-progress/:id", component: B },
                        { path: "import-end/:id", component: $ },
                        { path: "exportsources", component: K },
                        { path: "export/:id", component: W, canActivate: [H] },
                        { path: "export-in-progress/:id", component: F },
                        { path: "export-end/:id", component: j },
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
    apBa: function (l, t, e) {
      "use strict";
      (e.d(t, "a", function () {
        return K;
      }),
        e.d(t, "b", function () {
          return Y;
        }));
      var n = e("kZht"),
        a = e("Xl9s"),
        i = e("fu7d"),
        o = e("bou3"),
        u = e("yNay"),
        r = e("IPO3"),
        s = e("8TlW"),
        c = e("ijxY"),
        b = e("Xo58"),
        d = e("m3Ja"),
        p = e("r+e+"),
        h = e("bmFL"),
        m = e("OtM5"),
        x = e("9ZFG"),
        g = e("bMuc"),
        f = e("ZIdM"),
        T = e("3bpu"),
        I = e("6zvu"),
        v = e("VcEz"),
        y = e("y9xZ"),
        O = e("+sw+"),
        S = e("BMrr"),
        N = e("IEns"),
        C = e("z6QT"),
        _ = e("flsk"),
        P = e("FQEI"),
        M = e("O82V"),
        E = e("Eln4"),
        D = e("evAh"),
        k = e("Ps6X"),
        L = e("CpzC"),
        A = e("0Bsn"),
        w = e("5GjX"),
        B = e("mYyF"),
        R = e("v98a"),
        $ = e("aOG8"),
        z = e("Krzs"),
        j = e("An66"),
        F = e("nQV3"),
        W = e("3+OJ"),
        K =
          (e("xMt+"),
          n.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.list-item__click-area[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.list-item__click-area[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;flex-grow:1;min-width:0;padding:0 20px}.list-item__text-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0}.list-item__checkbox[_ngcontent-%COMP%]{pointer-events:none}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%]{margin-right:30px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%]{margin-left:30px}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.list-item__text[_ngcontent-%COMP%]{flex:1 1 auto}.list-item__text--small[_ngcontent-%COMP%]{flex:1 1 auto;font-size:30px}.list-item__text--small--light[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular)}',
              ],
            ],
            data: {},
          }));
      function H(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon-with-overlay",
              [
                ["class", "list-item__icon--begin"],
                ["id", "list-item__icon--begin"],
              ],
              null,
              null,
              null,
              a.b,
              a.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              i.a,
              [n.l, n.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            n.xb(
              2,
              49152,
              null,
              0,
              r.a,
              [],
              {
                overlayFileName: [0, "overlayFileName"],
                fallbackFileName: [1, "fallbackFileName"],
                fileName: [2, "fileName"],
                category: [3, "category"],
              },
              null,
            ),
          ],
          function (l, t) {
            var e = t.component;
            (l(t, 1, 0, "list-item__icon--begin"),
              l(
                t,
                2,
                0,
                e.iconOverlay,
                e.iconFallback,
                e.icon,
                e.listIconCategory,
              ));
          },
          null,
        );
      }
      function U(l) {
        return n.ac(
          0,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["class", "list-item__text--small"],
                ["ttIgnore", ""],
              ],
              [
                [2, "list-item__text--small--light", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              null,
              null,
              s.b,
              s.a,
            )),
            n.xb(
              1,
              212992,
              null,
              0,
              i.a,
              [n.l, n.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            n.xb(
              2,
              16384,
              null,
              0,
              c.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            n.xb(
              3,
              245760,
              null,
              0,
              b.a,
              [[6, i.a], d.a, n.h, n.l, n.D, [2, p.a], [2, c.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            n.xb(
              4,
              147456,
              null,
              0,
              m.a,
              [x.a, n.h, u.a, [3, m.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
          ],
          function (l, t) {
            var e = t.component;
            (l(
              t,
              1,
              0,
              e.subtitleTextId
                ? e.subtitleTextId
                : "ListRouteItemSecondaryText",
              e.subtitleIdEnumType,
            ),
              l(t, 2, 0, !e.hasSubtitle),
              l(
                t,
                3,
                0,
                e.subtitleDeveloperText,
                e.subtitleTextId
                  ? e.subtitleTextId
                  : "ListRouteItemSecondaryText",
                1,
                e.subtitleNonI18nText,
              ),
              l(t, 4, 0, e.labelDisabled));
          },
          function (l, t) {
            l(
              t,
              0,
              0,
              t.component.lightSubtitle,
              n.Nb(t, 3).backgroundColor,
              n.Nb(t, 3).fixedNumberOfLines,
              n.Nb(t, 3).mayContainLatinCharsForArabic,
              n.Nb(t, 3).shortenWithEllipsisForArabic,
              n.Nb(t, 4).combinedDisabled,
              n.Nb(t, 4).useBrighterIcon,
            );
          },
        );
      }
      function Y(l) {
        return n.ac(
          2,
          [
            (l()(),
            n.yb(
              0,
              0,
              null,
              null,
              20,
              "div",
              [["class", "list-item__click-area"]],
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
              [
                [null, "mib3Tap"],
                [null, "mib3FocusPress"],
              ],
              function (l, t, e) {
                var n = !0,
                  a = l.component;
                return (
                  "mib3Tap" === t && (n = !1 !== a.itemTapped() && n),
                  "mib3FocusPress" === t && (n = !1 !== a.focusPressed() && n),
                  n
                );
              },
              null,
              null,
            )),
            n.xb(1, 147456, null, 0, g.a, [n.l, n.z], null, null),
            n.xb(
              2,
              147456,
              null,
              0,
              f.a,
              [g.a, [2, T.a], [2, i.a], u.a],
              null,
              null,
            ),
            n.xb(
              3,
              212992,
              null,
              0,
              I.a,
              [
                u.a,
                v.b,
                f.a,
                [2, T.a],
                [2, i.a],
                [2, m.a],
                [2, y.a],
                [2, O.a],
                n.z,
                S.a,
                n.l,
                [2, N.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            n.Sb(131584, null, C.a, C.a, [[3, C.a]]),
            n.xb(
              5,
              4407296,
              null,
              0,
              _.a,
              [
                n.l,
                P.a,
                n.h,
                C.a,
                [2, M.a],
                [2, T.b],
                [2, T.a],
                [2, E.a],
                [2, D.a],
              ],
              null,
              null,
            ),
            n.xb(
              6,
              212992,
              null,
              0,
              k.a,
              [[2, I.a], [8, null], [3, k.a], n.l, n.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            n.xb(
              7,
              147456,
              null,
              0,
              L.a,
              [[2, I.a], [2, m.a], [2, A.a], [2, _.a], [2, w.b], n.l, B.a, R.b],
              null,
              null,
            ),
            n.xb(
              8,
              147456,
              null,
              0,
              $.a,
              [[2, _.a], [2, I.a], [2, v.b], z.a],
              null,
              null,
            ),
            (l()(), n.hb(16777216, null, null, 1, null, H)),
            n.xb(
              10,
              16384,
              null,
              0,
              j.k,
              [n.P, n.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(),
            n.yb(
              11,
              0,
              null,
              null,
              7,
              "div",
              [["class", "list-item__text-container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (l()(),
            n.yb(
              12,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["class", "list-item__text"],
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
              s.b,
              s.a,
            )),
            n.xb(
              13,
              212992,
              null,
              0,
              i.a,
              [n.l, n.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            n.xb(
              14,
              16384,
              null,
              0,
              c.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            n.xb(
              15,
              245760,
              null,
              0,
              b.a,
              [[6, i.a], d.a, n.h, n.l, n.D, [2, p.a], [2, c.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            n.xb(
              16,
              147456,
              null,
              0,
              m.a,
              [x.a, n.h, u.a, [3, m.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            (l()(), n.hb(16777216, null, null, 1, null, U)),
            n.xb(
              18,
              16384,
              null,
              0,
              j.k,
              [n.P, n.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (l()(),
            n.yb(
              19,
              0,
              null,
              null,
              1,
              "au3-checkbox",
              [["class", "list-item__checkbox"]],
              null,
              null,
              null,
              F.b,
              F.a,
            )),
            n.xb(
              20,
              49152,
              null,
              0,
              W.a,
              [],
              { checked: [0, "checked"] },
              null,
            ),
          ],
          function (l, t) {
            var e = t.component;
            (l(t, 3, 0),
              l(t, 5, 0),
              l(t, 6, 0, e.uiStateType),
              l(t, 10, 0, e.icon || e.iconFallback),
              l(
                t,
                13,
                0,
                e.titleTextId ? e.titleTextId : "ListRouteItemText",
                e.titleIdEnumType,
              ),
              l(t, 14, 0, !e.titleDeveloperText && !e.titleIdEnumType),
              l(
                t,
                15,
                0,
                e.titleDeveloperText,
                e.titleTextId ? e.titleTextId : "ListRouteItemText",
                1,
                e.titleNonI18nText,
              ),
              l(t, 16, 0, e.labelDisabled),
              l(t, 18, 0, e.hasSubtitle),
              l(t, 20, 0, e.checked));
          },
          function (l, t) {
            (l(t, 0, 1, [
              n.Nb(t, 5).markerClassEnabled,
              n.Nb(t, 6).uiStateListHorizontal,
              n.Nb(t, 6).uiStateListVertical,
              n.Nb(t, 6).uiStateCoverLeft,
              n.Nb(t, 6).uiStateCoverRight,
              n.Nb(t, 6).uiStateCoverBottom,
              n.Nb(t, 6).uiStateButton,
              n.Nb(t, 6).uiStateByDabLeft,
              n.Nb(t, 6).uiStateByDabRight,
              n.Nb(t, 6).uiStateLbDabLeft,
              n.Nb(t, 6).uiStateLbDabRight,
            ]),
              l(
                t,
                12,
                0,
                n.Nb(t, 15).backgroundColor,
                n.Nb(t, 15).fixedNumberOfLines,
                n.Nb(t, 15).mayContainLatinCharsForArabic,
                n.Nb(t, 15).shortenWithEllipsisForArabic,
                n.Nb(t, 16).combinedDisabled,
                n.Nb(t, 16).useBrighterIcon,
              ));
          },
        );
      }
    },
  },
]);
