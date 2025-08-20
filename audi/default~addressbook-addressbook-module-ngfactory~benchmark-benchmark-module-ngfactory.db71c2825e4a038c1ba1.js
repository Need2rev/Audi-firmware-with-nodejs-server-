(window.webpackJsonp = window.webpackJsonp || []).push([
  [32, 108],
  {
    DqhV: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return S;
      });
      var a = n("QQZH"),
        i = n("ROBh"),
        l = n("kuMc"),
        s = n("TLy2"),
        o = n("Ohay"),
        r = n("YtkY"),
        u = n("8j5Y"),
        c = n("J+dc"),
        d = n("xVbo"),
        b = n("Yi6/"),
        h = n("XY/Y"),
        p = n("6xFL"),
        m = (n("8hxR"), n("oJGs")),
        g = n("nmT2"),
        v = n("e+pb");
      n("YEFf");
      class S {
        constructor(e, t, n, i, l, s, o, r, u, c) {
          ((this.routingService = e),
            (this.addressbookService = t),
            (this.adressbookContactsService = n),
            (this.optionMenuService = i),
            (this.phoneService = l),
            (this.popupManager = s),
            (this.adressbookOptionsService = o),
            (this.lockingService = r),
            (this.popupService = u),
            (this.popupIdsAudi = b.Ob),
            (this.destroyed$$ = new a.a(1)),
            (this.addressbookStateEnum = p.b),
            (this.listItemType = b.rb),
            (this.optionTypeEnum = m.a),
            (this.range$$ = new a.a(1)),
            (this.editMode = !1),
            (this.editModeAvailable = !1),
            (this.blockEditButton = { lockingKey: { type: b.Eb.EDIT_MODE } }),
            (this.popupAdbMainEditDelGreyedOut =
              b.Ob.POPUP_ADB_MAIN_EDIT_DELETE_GREYED_OUT),
            (this.currentOperationMode = new p.c(h.d.WHITELIST, new Set())),
            (this.AddressBookRoute = g.a),
            (this.SearchTypeEnum = v.b),
            (this.logger = c.getLogger("addressbook.AdressbookComponent")));
        }
        ngOnInit() {
          (this.addressbookService
            .numberOfDeletableContacts(
              this.adressbookContactsService.viewContext,
            )
            .pipe(Object(l.a)(this.destroyed$$))
            .subscribe((e) => (this.numberOfDeletableContacts = e)),
            (this.viewContext = this.adressbookContactsService.viewContext),
            this.adressbookContactsService.addressbookStateInCurrentView$
              .pipe(Object(l.a)(this.destroyed$$))
              .subscribe((e) => (this.state = e)),
            this.subscribeForContacts());
        }
        ngAfterViewInit() {
          this.lockingService
            .getProperty({ type: b.Eb.EDIT_MODE })
            .pipe(
              Object(s.a)((e) => e.lock$),
              Object(l.a)(this.destroyed$$),
              Object(o.a)(),
            )
            .subscribe((e) => {
              e &&
                this.editMode &&
                (this.logger.info(
                  "ngAfterViewInit: leave edit mode because of blocking function",
                ),
                this.toggleEditMode(),
                this.popupService.request(b.Db.DEFAULT_LOCKING_TOAST));
            });
        }
        goToContactCard(e) {
          this.editMode || this.routingService.goTo(g.a.children.Contact, e);
        }
        subscribeForContacts() {
          this.adressbookContactsService
            .contactsInCurrentView$(this.range$$)
            .pipe(
              Object(r.a)((e) => ({
                data: e.data.map((e) => ({
                  isMailbox: !1,
                  isRecommended: !1,
                  name: e.name,
                  contactObject: e,
                })),
                paging: e.paging,
                containsDeletableContacts: e.containsDeletableContacts,
              })),
              Object(l.a)(this.destroyed$$),
              Object(u.a)((e) =>
                this.logger.info(
                  "subscribeForContacts: received contacts count:",
                  e.data.length,
                ),
              ),
            )
            .subscribe((e) => {
              ((this.contacts = e),
                (this.editMode = this.editMode && e.containsDeletableContacts),
                (this.editModeAvailable = e.containsDeletableContacts));
            });
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        openOptionsMenu(e) {
          e &&
            e.contactObject &&
            this.addressbookService
              .contact$(e.contactObject.id)
              .pipe(
                Object(c.a)(1),
                Object(d.a)(b.wd),
                Object(s.a)((e) => {
                  const t = e;
                  return this.adressbookOptionsService
                    .canShowOptionsForContact(t)
                    .pipe(Object(r.a)((e) => [e, t]));
                }),
                Object(l.a)(this.destroyed$$),
              )
              .subscribe(([e, t]) => {
                e
                  ? this.optionMenuService.showOptionMenu(t)
                  : this.logger.info(
                      "openOptionsMenu: unable to open menu, no editable options available for contact",
                      t,
                    );
              });
        }
        toggleEditMode() {
          !0 !== this.editMode
            ? this.editModeAvailable
              ? ((this.editMode = !this.editMode),
                (this.currentOperationMode = new p.c(h.d.WHITELIST, new Set())))
              : this.popupManager.request(b.Ob.POPUP_MIB3_ADB_MAIN_NO_EDIT)
            : (this.editMode = !1);
        }
        isDeleteButtonEnabled(e) {
          return this.currentOperationMode.mode === h.d.BLACKLIST
            ? this.currentOperationMode.contacts.size < e
            : this.currentOperationMode.contacts.size > 0;
        }
        toggleAll() {
          this.currentOperationMode = this.areAllItemsSelected()
            ? new p.c(h.d.WHITELIST, new Set())
            : new p.c(h.d.BLACKLIST, new Set());
        }
        toggleDelete(e) {
          this.currentOperationMode.contacts.delete(e.id) ||
            this.currentOperationMode.addContact(e.id);
        }
        areAllItemsSelected() {
          return this.currentOperationMode.mode === h.d.BLACKLIST
            ? 0 === this.currentOperationMode.contacts.size
            : this.currentOperationMode.mode === h.d.WHITELIST &&
                this.currentOperationMode.contacts.size ===
                  this.numberOfDeletableContacts;
        }
        buildDeleteObject(e) {
          const t = h.e.DELETE;
          let n;
          return (
            (n =
              this.currentOperationMode.mode === h.d.BLACKLIST &&
              this.currentOperationMode.contacts.size < 1
                ? { mode: h.d.ALL, opType: t, viewType: e }
                : {
                    mode: this.currentOperationMode.mode,
                    opType: t,
                    viewType: e,
                    contacts: this.contacts.data
                      .filter((e) =>
                        this.currentOperationMode.contacts.has(
                          e.contactObject.id,
                        ),
                      )
                      .map((e) => e.contactObject),
                  }),
            this.logger.info("created deleteObject: ", n),
            n
          );
        }
        deleteContacts() {
          this.addressbookService.hideInvalidContacts$
            .pipe(
              Object(c.a)(1),
              Object(r.a)((e) => (e ? this.viewContext : void 0)),
              Object(s.a)((e) => {
                const t = this.buildDeleteObject(e);
                return this.addressbookService.runOperation$(t).pipe(
                  Object(c.a)(1),
                  Object(s.a)((e) => {
                    const t = e.split("/").pop();
                    return null != t
                      ? this.addressbookService.operations$.pipe(
                          Object(r.a)((e) => e.find((e) => e.id === t)),
                        )
                      : (this.logger.debug("no operation found for id", t),
                        Object(i.a)(void 0));
                  }),
                  Object(l.a)(this.destroyed$$),
                );
              }),
              Object(l.a)(this.destroyed$$),
            )
            .subscribe((e) => {
              (e
                ? e.state === h.f.DONE &&
                  ((e.result && e.result.errorReason !== h.i.GENERALERROR) ||
                    !e.result)
                  ? this.popupManager.request(b.Ob.POPUP_ADB_MAIN_EDIT_DELETE)
                  : e &&
                    e.state === h.f.DONE &&
                    e.result &&
                    e.result.errorReason === h.i.GENERALERROR &&
                    this.popupManager.request(
                      b.Ob.POPUP_ADB_MAIN_EDIT_DELETE_ERR,
                    )
                : this.logger.error("No operation found"),
                this.currentOperationMode.contacts.clear());
            });
        }
      }
    },
    MuFt: function (e, t, n) {
      "use strict";
      (n.d(t, "b", function () {
        return xe;
      }),
        n.d(t, "c", function () {
          return Pe;
        }),
        n.d(t, "a", function () {
          return Me;
        }));
      var a = n("kZht"),
        i = n("8WOv"),
        l = n("OtM5"),
        s = n("9ZFG"),
        o = n("yNay"),
        r = n("bMuc"),
        u = n("fu7d"),
        c = n("bou3"),
        d = n("ZIdM"),
        b = n("3bpu"),
        h = n("6zvu"),
        p = n("VcEz"),
        m = n("y9xZ"),
        g = n("+sw+"),
        v = n("BMrr"),
        S = n("IEns"),
        O = n("6480"),
        f = n("FfND"),
        x = n("oeT7"),
        T = n("t7cT"),
        y = n("z6QT"),
        A = n("flsk"),
        I = n("FQEI"),
        E = n("O82V"),
        $ = n("Eln4"),
        N = n("evAh"),
        C = n("zPMi"),
        P = n("CpzC"),
        _ = n("0Bsn"),
        M = n("5GjX"),
        L = n("mYyF"),
        D = n("v98a"),
        w = n("aOG8"),
        k = n("Krzs"),
        j = n("E7cc"),
        F = n("VUTu"),
        R = n("nK9R"),
        B = n("qzuC"),
        H = n("8yWk"),
        z = n("An66"),
        Y = n("1pak"),
        V = n("P+G5"),
        K = n("ijxY"),
        U = n("M706"),
        G = n("aMc6"),
        Z = n("fzcM"),
        W = n("erFY"),
        q = n("5wO1"),
        J = n("4XZL"),
        X = n("URLa"),
        Q = n("Z2XD"),
        ee = n("Pfb3"),
        te = n("CtSi"),
        ne = n("pqkN"),
        ae = n("iAsw"),
        ie = n("Pqed"),
        le = n("BS+8"),
        se = n("VYaS"),
        oe = n("HygI"),
        re = n("oJGs"),
        ue = n("GZoL"),
        ce = n("d3LF"),
        de = n("6xFL"),
        be = n("sK8D"),
        he = n("SFb6"),
        pe = n("xS3h"),
        me = n("3Sae"),
        ge = n("ONRh"),
        ve = n("sg2e"),
        Se = n("DqhV"),
        Oe = n("8hxR"),
        fe = n("YEFf"),
        xe = a.wb({
          encapsulation: 0,
          styles: [
            [
              '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.screen[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;align-items:stretch}.addressbook-view[_ngcontent-%COMP%]{flex:1}.statustext[_ngcontent-%COMP%]{text-align:center}.options-menu-item[_ngcontent-%COMP%], .statustext[_ngcontent-%COMP%]{font-size:40px}.delete-button[_ngcontent-%COMP%]{display:flex;align-items:center}.done-button[_ngcontent-%COMP%], .tl-button[_ngcontent-%COMP%]{width:231px}',
            ],
          ],
          data: {},
        });
      function Te(e) {
        return a.ac(
          0,
          [
            (e()(),
            a.yb(
              0,
              0,
              null,
              null,
              11,
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
              i.b,
              i.a,
            )),
            a.xb(
              1,
              147456,
              null,
              0,
              l.a,
              [s.a, a.h, o.a, [3, l.a]],
              null,
              null,
            ),
            a.xb(2, 147456, null, 0, r.a, [a.l, a.z], null, null),
            a.xb(
              3,
              212992,
              null,
              0,
              u.a,
              [a.l, a.D, c.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              4,
              147456,
              null,
              0,
              d.a,
              [r.a, [2, b.a], [2, u.a], o.a],
              null,
              null,
            ),
            a.xb(
              5,
              212992,
              null,
              0,
              h.a,
              [
                o.a,
                p.b,
                d.a,
                [2, b.a],
                [2, u.a],
                [2, l.a],
                [2, m.a],
                [2, g.a],
                a.z,
                v.a,
                a.l,
                [2, S.a],
              ],
              null,
              null,
            ),
            a.xb(
              6,
              671744,
              null,
              0,
              O.a,
              [f.a, x.i, l.a, h.a, O.b, T.a],
              {
                routeInfo: [0, "routeInfo"],
                routerParams: [1, "routerParams"],
              },
              null,
            ),
            a.Sb(131584, null, y.a, y.a, [[3, y.a]]),
            a.xb(
              8,
              4407296,
              null,
              0,
              A.a,
              [
                a.l,
                I.a,
                a.h,
                y.a,
                [2, E.a],
                [2, b.b],
                [2, b.a],
                [2, $.a],
                [2, N.a],
              ],
              null,
              null,
            ),
            a.xb(
              9,
              49152,
              null,
              0,
              C.a,
              [[2, l.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            a.xb(
              10,
              147456,
              null,
              0,
              P.a,
              [[2, h.a], [2, l.a], [2, _.a], [2, A.a], [2, M.b], a.l, L.a, D.b],
              null,
              null,
            ),
            a.xb(
              11,
              147456,
              null,
              0,
              w.a,
              [[2, A.a], [2, h.a], [2, p.b], k.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 3, 0, "SearchButton"),
              e(t, 5, 0),
              e(
                t,
                6,
                0,
                n.AddressBookRoute.children.Search,
                n.SearchTypeEnum.Addressbook,
              ),
              e(t, 8, 0),
              e(t, 9, 0, !1, "E811_SearchButton.webp"));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              a.Nb(t, 1).combinedDisabled,
              a.Nb(t, 1).useBrighterIcon,
              a.Nb(t, 8).markerClassEnabled,
              a.Nb(t, 9).useItemPlaceholder,
            );
          },
        );
      }
      function ye(e) {
        return a.ac(
          0,
          [
            (e()(),
            a.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-title-line-item",
              [
                ["id", "EditButton"],
                ["right", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, t, n) {
                var a = !0;
                return (
                  "mib3Tap" === t &&
                    (a = !1 !== e.component.toggleEditMode() && a),
                  a
                );
              },
              i.b,
              i.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [a.l, a.D, c.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 147456, null, 0, r.a, [a.l, a.z], null, null),
            a.xb(
              3,
              147456,
              null,
              0,
              d.a,
              [r.a, [2, b.a], [2, u.a], o.a],
              null,
              null,
            ),
            a.xb(
              4,
              147456,
              null,
              0,
              l.a,
              [s.a, a.h, o.a, [3, l.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            a.xb(
              5,
              212992,
              null,
              0,
              h.a,
              [
                o.a,
                p.b,
                d.a,
                [2, b.a],
                [2, u.a],
                [2, l.a],
                [2, m.a],
                [2, g.a],
                a.z,
                v.a,
                a.l,
                [2, S.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.Sb(131584, null, y.a, y.a, [[3, y.a]]),
            a.xb(
              7,
              4407296,
              null,
              0,
              A.a,
              [
                a.l,
                I.a,
                a.h,
                y.a,
                [2, E.a],
                [2, b.b],
                [2, b.a],
                [2, $.a],
                [2, N.a],
              ],
              null,
              null,
            ),
            a.xb(
              8,
              49152,
              null,
              0,
              C.a,
              [[2, l.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            a.xb(
              9,
              671744,
              null,
              0,
              j.a,
              [l.a, x.i, [2, x.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            a.xb(
              10,
              147456,
              null,
              0,
              P.a,
              [[2, h.a], [2, l.a], [2, _.a], [2, A.a], [2, M.b], a.l, L.a, D.b],
              null,
              null,
            ),
            a.xb(
              11,
              147456,
              null,
              0,
              w.a,
              [[2, A.a], [2, h.a], [2, p.b], k.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, "EditButton"),
              e(
                t,
                4,
                0,
                !n.editModeAvailable,
                n.popupIdsAudi.POPUP_MIB3_ADB_MAIN_NO_EDIT,
              ),
              e(t, 5, 0),
              e(t, 7, 0),
              e(t, 8, 0, !1, "E3EC_edit_mode.webp"),
              e(t, 9, 0, n.blockEditButton));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              a.Nb(t, 4).combinedDisabled,
              a.Nb(t, 4).useBrighterIcon,
              a.Nb(t, 7).markerClassEnabled,
              a.Nb(t, 8).useItemPlaceholder,
            );
          },
        );
      }
      function Ae(e) {
        return a.ac(
          0,
          [
            (e()(),
            a.yb(
              0,
              0,
              null,
              null,
              33,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            a.yb(
              1,
              0,
              null,
              null,
              32,
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
              F.b,
              F.a,
            )),
            a.xb(
              2,
              212992,
              null,
              0,
              u.a,
              [a.l, a.D, c.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              3,
              49152,
              null,
              0,
              R.a,
              [B.a, H.a],
              {
                primaryId: [0, "primaryId"],
                primaryNonI18nText: [1, "primaryNonI18nText"],
                secondaryDeveloperText: [2, "secondaryDeveloperText"],
                loaderActive: [3, "loaderActive"],
                hasLoader: [4, "hasLoader"],
              },
              null,
            ),
            a.Pb(131072, z.b, [a.h]),
            (e()(),
            a.yb(
              5,
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
              function (e, t, n) {
                var a = !0;
                return (
                  "mib3Tap" === t &&
                    (a = !1 !== e.component.routingService.goBack() && a),
                  a
                );
              },
              i.b,
              i.a,
            )),
            a.xb(6, 147456, null, 0, r.a, [a.l, a.z], null, null),
            a.xb(
              7,
              212992,
              null,
              0,
              u.a,
              [a.l, a.D, c.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              8,
              147456,
              null,
              0,
              d.a,
              [r.a, [2, b.a], [2, u.a], o.a],
              null,
              null,
            ),
            a.xb(
              9,
              212992,
              null,
              0,
              h.a,
              [
                o.a,
                p.b,
                d.a,
                [2, b.a],
                [2, u.a],
                [2, l.a],
                [2, m.a],
                [2, g.a],
                a.z,
                v.a,
                a.l,
                [2, S.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.xb(
              10,
              147456,
              null,
              0,
              Y.a,
              [o.a, V.a, a.l, [2, h.a], [2, l.a]],
              null,
              null,
            ),
            a.xb(11, 16384, null, 0, K.a, [], null, null),
            a.Sb(131584, null, y.a, y.a, [[3, y.a]]),
            a.xb(
              13,
              4407296,
              null,
              0,
              A.a,
              [
                a.l,
                I.a,
                a.h,
                y.a,
                [2, E.a],
                [2, b.b],
                [2, b.a],
                [2, $.a],
                [2, N.a],
              ],
              null,
              null,
            ),
            a.xb(
              14,
              49152,
              null,
              0,
              C.a,
              [[2, l.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            a.xb(
              15,
              147456,
              null,
              0,
              P.a,
              [[2, h.a], [2, l.a], [2, _.a], [2, A.a], [2, M.b], a.l, L.a, D.b],
              null,
              null,
            ),
            a.xb(
              16,
              147456,
              null,
              0,
              w.a,
              [[2, A.a], [2, h.a], [2, p.b], k.a],
              null,
              null,
            ),
            (e()(), a.hb(16777216, null, 0, 1, null, Te)),
            a.xb(
              18,
              16384,
              null,
              0,
              z.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), a.hb(16777216, null, 2, 1, null, ye)),
            a.xb(
              20,
              16384,
              null,
              0,
              z.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            a.yb(
              21,
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
              i.b,
              i.a,
            )),
            a.xb(
              22,
              147456,
              null,
              0,
              l.a,
              [s.a, a.h, o.a, [3, l.a]],
              null,
              null,
            ),
            a.xb(23, 147456, null, 0, r.a, [a.l, a.z], null, null),
            a.xb(
              24,
              212992,
              null,
              0,
              u.a,
              [a.l, a.D, c.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              25,
              147456,
              null,
              0,
              d.a,
              [r.a, [2, b.a], [2, u.a], o.a],
              null,
              null,
            ),
            a.xb(
              26,
              212992,
              null,
              0,
              h.a,
              [
                o.a,
                p.b,
                d.a,
                [2, b.a],
                [2, u.a],
                [2, l.a],
                [2, m.a],
                [2, g.a],
                a.z,
                v.a,
                a.l,
                [2, S.a],
              ],
              null,
              null,
            ),
            a.xb(
              27,
              671744,
              null,
              0,
              O.a,
              [f.a, x.i, l.a, h.a, O.b, T.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
              },
              null,
            ),
            a.xb(28, 16384, null, 0, K.a, [], null, null),
            a.Sb(131584, null, y.a, y.a, [[3, y.a]]),
            a.xb(
              30,
              4407296,
              null,
              0,
              A.a,
              [
                a.l,
                I.a,
                a.h,
                y.a,
                [2, E.a],
                [2, b.b],
                [2, b.a],
                [2, $.a],
                [2, N.a],
              ],
              null,
              null,
            ),
            a.xb(
              31,
              49152,
              null,
              0,
              C.a,
              [[2, l.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            a.xb(
              32,
              147456,
              null,
              0,
              P.a,
              [[2, h.a], [2, l.a], [2, _.a], [2, A.a], [2, M.b], a.l, L.a, D.b],
              null,
              null,
            ),
            a.xb(
              33,
              147456,
              null,
              0,
              w.a,
              [[2, A.a], [2, h.a], [2, p.b], k.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 2, 0, ""),
              e(
                t,
                3,
                0,
                "PhoneName",
                a.Yb(t, 3, 1, a.Nb(t, 4).transform(n.phoneService.deviceName$)),
                "Kontakte",
                n.state ===
                  (null == n.addressbookStateEnum
                    ? null
                    : n.addressbookStateEnum.Loading),
                !0,
              ),
              e(t, 7, 0, "BackButton"),
              e(t, 9, 0),
              e(t, 13, 0),
              e(t, 14, 0, !1, "E163_Backbutton.webp"),
              e(
                t,
                18,
                0,
                n.state ===
                  (null == n.addressbookStateEnum
                    ? null
                    : n.addressbookStateEnum.HasContacts),
              ),
              e(
                t,
                20,
                0,
                n.state !==
                  (null == n.addressbookStateEnum
                    ? null
                    : n.addressbookStateEnum.Loading),
              ),
              e(t, 24, 0, "SettingsButton"),
              e(t, 26, 0),
              e(t, 27, 0, n.AddressBookRoute.children.Settings, !0),
              e(t, 30, 0),
              e(t, 31, 0, !1, "E186_settings.webp"));
          },
          function (e, t) {
            (e(
              t,
              1,
              0,
              a.Nb(t, 3).hideLeftBorder,
              a.Nb(t, 3).hideDividingBorders,
            ),
              e(
                t,
                5,
                0,
                a.Nb(t, 13).markerClassEnabled,
                a.Nb(t, 14).useItemPlaceholder,
              ),
              e(
                t,
                21,
                0,
                a.Nb(t, 22).combinedDisabled,
                a.Nb(t, 22).useBrighterIcon,
                a.Nb(t, 30).markerClassEnabled,
                a.Nb(t, 31).useItemPlaceholder,
              ));
          },
        );
      }
      function Ie(e) {
        return a.ac(
          0,
          [
            (e()(),
            a.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-title-line-item",
              [
                ["class", "tl-button"],
                ["edit", ""],
                ["id", "DeselectAllButton"],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, t, n) {
                var a = !0;
                return (
                  "mib3Tap" === t && (a = !1 !== e.component.toggleAll() && a),
                  a
                );
              },
              i.b,
              i.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [a.l, a.D, c.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 147456, null, 0, r.a, [a.l, a.z], null, null),
            a.xb(
              3,
              147456,
              null,
              0,
              d.a,
              [r.a, [2, b.a], [2, u.a], o.a],
              null,
              null,
            ),
            a.xb(
              4,
              212992,
              null,
              0,
              h.a,
              [
                o.a,
                p.b,
                d.a,
                [2, b.a],
                [2, u.a],
                [2, l.a],
                [2, m.a],
                [2, g.a],
                a.z,
                v.a,
                a.l,
                [2, S.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.Sb(131584, null, y.a, y.a, [[3, y.a]]),
            a.xb(
              6,
              4407296,
              null,
              0,
              A.a,
              [
                a.l,
                I.a,
                a.h,
                y.a,
                [2, E.a],
                [2, b.b],
                [2, b.a],
                [2, $.a],
                [2, N.a],
              ],
              null,
              null,
            ),
            a.xb(
              7,
              49152,
              null,
              0,
              C.a,
              [[2, l.a]],
              {
                text: [0, "text"],
                centered: [1, "centered"],
                hasOnlyText: [2, "hasOnlyText"],
              },
              null,
            ),
            a.xb(
              8,
              147456,
              null,
              0,
              P.a,
              [[2, h.a], [2, l.a], [2, _.a], [2, A.a], [2, M.b], a.l, L.a, D.b],
              null,
              null,
            ),
            a.xb(
              9,
              147456,
              null,
              0,
              w.a,
              [[2, A.a], [2, h.a], [2, p.b], k.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            (e(t, 1, 0, "DeselectAllButton"),
              e(t, 4, 0),
              e(t, 6, 0),
              e(t, 7, 0, "Alle abw\xe4hlen", !0, !0));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              a.Nb(t, 6).markerClassEnabled,
              a.Nb(t, 7).useItemPlaceholder,
            );
          },
        );
      }
      function Ee(e) {
        return a.ac(
          0,
          [
            (e()(),
            a.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-title-line-item",
              [
                ["class", "tl-button"],
                ["edit", ""],
                ["id", "SelectAllButton"],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, t, n) {
                var a = !0;
                return (
                  "mib3Tap" === t && (a = !1 !== e.component.toggleAll() && a),
                  a
                );
              },
              i.b,
              i.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [a.l, a.D, c.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 147456, null, 0, r.a, [a.l, a.z], null, null),
            a.xb(
              3,
              147456,
              null,
              0,
              d.a,
              [r.a, [2, b.a], [2, u.a], o.a],
              null,
              null,
            ),
            a.xb(
              4,
              212992,
              null,
              0,
              h.a,
              [
                o.a,
                p.b,
                d.a,
                [2, b.a],
                [2, u.a],
                [2, l.a],
                [2, m.a],
                [2, g.a],
                a.z,
                v.a,
                a.l,
                [2, S.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.Sb(131584, null, y.a, y.a, [[3, y.a]]),
            a.xb(
              6,
              4407296,
              null,
              0,
              A.a,
              [
                a.l,
                I.a,
                a.h,
                y.a,
                [2, E.a],
                [2, b.b],
                [2, b.a],
                [2, $.a],
                [2, N.a],
              ],
              null,
              null,
            ),
            a.xb(
              7,
              49152,
              null,
              0,
              C.a,
              [[2, l.a]],
              {
                text: [0, "text"],
                centered: [1, "centered"],
                hasOnlyText: [2, "hasOnlyText"],
              },
              null,
            ),
            a.xb(
              8,
              147456,
              null,
              0,
              P.a,
              [[2, h.a], [2, l.a], [2, _.a], [2, A.a], [2, M.b], a.l, L.a, D.b],
              null,
              null,
            ),
            a.xb(
              9,
              147456,
              null,
              0,
              w.a,
              [[2, A.a], [2, h.a], [2, p.b], k.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            (e(t, 1, 0, "SelectAllButton"),
              e(t, 4, 0),
              e(t, 6, 0),
              e(t, 7, 0, "Alle ausw\xe4hlen", !0, !0));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              a.Nb(t, 6).markerClassEnabled,
              a.Nb(t, 7).useItemPlaceholder,
            );
          },
        );
      }
      function $e(e) {
        return a.ac(
          0,
          [
            (e()(),
            a.yb(
              0,
              0,
              null,
              null,
              16,
              "au3-title-line",
              [
                ["class", "title"],
                ["id", "editTitle"],
              ],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              F.b,
              F.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [a.l, a.D, c.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(
              2,
              49152,
              null,
              0,
              R.a,
              [B.a, H.a],
              {
                primaryId: [0, "primaryId"],
                primaryNonI18nText: [1, "primaryNonI18nText"],
                secondaryDeveloperText: [2, "secondaryDeveloperText"],
                loaderActive: [3, "loaderActive"],
                hasLoader: [4, "hasLoader"],
              },
              null,
            ),
            a.Pb(131072, z.b, [a.h]),
            (e()(),
            a.yb(
              4,
              0,
              null,
              3,
              9,
              "au3-title-line-item",
              [
                ["class", "done-button"],
                ["done", ""],
                ["id", "DoneButton"],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (e, t, n) {
                var a = !0;
                return (
                  "mib3Tap" === t &&
                    (a = !1 !== e.component.toggleEditMode() && a),
                  a
                );
              },
              i.b,
              i.a,
            )),
            a.xb(
              5,
              212992,
              null,
              0,
              u.a,
              [a.l, a.D, c.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(6, 147456, null, 0, r.a, [a.l, a.z], null, null),
            a.xb(
              7,
              147456,
              null,
              0,
              d.a,
              [r.a, [2, b.a], [2, u.a], o.a],
              null,
              null,
            ),
            a.xb(
              8,
              212992,
              null,
              0,
              h.a,
              [
                o.a,
                p.b,
                d.a,
                [2, b.a],
                [2, u.a],
                [2, l.a],
                [2, m.a],
                [2, g.a],
                a.z,
                v.a,
                a.l,
                [2, S.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.Sb(131584, null, y.a, y.a, [[3, y.a]]),
            a.xb(
              10,
              4407296,
              null,
              0,
              A.a,
              [
                a.l,
                I.a,
                a.h,
                y.a,
                [2, E.a],
                [2, b.b],
                [2, b.a],
                [2, $.a],
                [2, N.a],
              ],
              null,
              null,
            ),
            a.xb(
              11,
              49152,
              null,
              0,
              C.a,
              [[2, l.a]],
              { text: [0, "text"], hasOnlyText: [1, "hasOnlyText"] },
              null,
            ),
            a.xb(
              12,
              147456,
              null,
              0,
              P.a,
              [[2, h.a], [2, l.a], [2, _.a], [2, A.a], [2, M.b], a.l, L.a, D.b],
              null,
              null,
            ),
            a.xb(
              13,
              147456,
              null,
              0,
              w.a,
              [[2, A.a], [2, h.a], [2, p.b], k.a],
              null,
              null,
            ),
            (e()(), a.hb(16777216, null, 4, 1, null, Ie)),
            a.xb(
              15,
              16384,
              null,
              0,
              z.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(), a.hb(0, [["SelectAll", 2]], null, 0, null, Ee)),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, "editTitle"),
              e(
                t,
                2,
                0,
                "PhoneName",
                a.Yb(t, 2, 1, a.Nb(t, 3).transform(n.phoneService.deviceName$)),
                "Kontakte",
                n.state ===
                  (null == n.addressbookStateEnum
                    ? null
                    : n.addressbookStateEnum.Loading),
                !0,
              ),
              e(t, 5, 0, "DoneButton"),
              e(t, 8, 0),
              e(t, 10, 0),
              e(t, 11, 0, "DONE", !0),
              e(t, 15, 0, n.areAllItemsSelected(), a.Nb(t, 16)));
          },
          function (e, t) {
            (e(
              t,
              0,
              0,
              a.Nb(t, 2).hideLeftBorder,
              a.Nb(t, 2).hideDividingBorders,
            ),
              e(
                t,
                4,
                0,
                a.Nb(t, 10).markerClassEnabled,
                a.Nb(t, 11).useItemPlaceholder,
              ));
          },
        );
      }
      function Ne(e) {
        return a.ac(
          0,
          [
            (e()(),
            a.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-operation-panel",
              [],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              U.b,
              U.a,
            )),
            a.xb(1, 49152, null, 0, G.a, [Z.a], null, null),
            (e()(),
            a.yb(
              2,
              0,
              null,
              1,
              10,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "DeleteButton"],
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
              [
                [null, "mib3Tap"],
                [null, "mib3DisabledTap"],
              ],
              function (e, t, n) {
                var a = !0,
                  i = e.component;
                return (
                  "mib3Tap" === t && (a = !1 !== i.deleteContacts() && a),
                  "mib3DisabledTap" === t &&
                    (a =
                      !1 !==
                        i.popupManager.request(
                          i.popupAdbMainEditDelGreyedOut,
                        ) && a),
                  a
                );
              },
              W.b,
              W.a,
            )),
            a.xb(
              3,
              212992,
              null,
              0,
              u.a,
              [a.l, a.D, c.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(4, 147456, null, 0, r.a, [a.l, a.z], null, null),
            a.xb(
              5,
              147456,
              null,
              0,
              d.a,
              [r.a, [2, b.a], [2, u.a], o.a],
              null,
              null,
            ),
            a.xb(
              6,
              147456,
              null,
              0,
              l.a,
              [s.a, a.h, o.a, [3, l.a]],
              { disabled: [0, "disabled"], showReason: [1, "showReason"] },
              { tap: "mib3DisabledTap" },
            ),
            a.xb(
              7,
              212992,
              null,
              0,
              h.a,
              [
                o.a,
                p.b,
                d.a,
                [2, b.a],
                [2, u.a],
                [2, l.a],
                [2, m.a],
                [2, g.a],
                a.z,
                v.a,
                a.l,
                [2, S.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            a.Sb(131584, null, y.a, y.a, [[3, y.a]]),
            a.xb(
              9,
              4407296,
              null,
              0,
              A.a,
              [
                a.l,
                I.a,
                a.h,
                y.a,
                [2, E.a],
                [2, b.b],
                [2, b.a],
                [2, $.a],
                [2, N.a],
              ],
              null,
              null,
            ),
            a.xb(
              10,
              49152,
              null,
              0,
              q.a,
              [],
              {
                hasText: [0, "hasText"],
                developerText: [1, "developerText"],
                prio1Item: [2, "prio1Item"],
              },
              null,
            ),
            a.xb(
              11,
              147456,
              null,
              0,
              P.a,
              [[2, h.a], [2, l.a], [2, _.a], [2, A.a], [2, M.b], a.l, L.a, D.b],
              null,
              null,
            ),
            a.xb(
              12,
              147456,
              null,
              0,
              w.a,
              [[2, A.a], [2, h.a], [2, p.b], k.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 3, 0, "DeleteButton"),
              e(
                t,
                6,
                0,
                !n.isDeleteButtonEnabled(n.numberOfDeletableContacts),
                !1,
              ),
              e(t, 7, 0),
              e(t, 9, 0),
              e(t, 10, 0, !0, "DELETE", !0));
          },
          function (e, t) {
            (e(t, 0, 0, a.Nb(t, 1).alignInside, a.Nb(t, 1).alignOutside),
              e(t, 2, 1, [
                a.Nb(t, 6).combinedDisabled,
                a.Nb(t, 6).useBrighterIcon,
                a.Nb(t, 9).markerClassEnabled,
                a.Nb(t, 10).showSeparatorLeft,
                a.Nb(t, 10).showSeparatorRight,
                a.Nb(t, 10).prio1Main,
                a.Nb(t, 10).prio1SmallScale,
                a.Nb(t, 10).prio2SmallScale,
                a.Nb(t, 10).prio1,
                a.Nb(t, 10).prio2,
                a.Nb(t, 10).prio1IconText,
                a.Nb(t, 10).prio1IconOnly,
                a.Nb(t, 10).prio1TextOnly,
                a.Nb(t, 10).prio2IconText,
                a.Nb(t, 10).prio2IconOnly,
                a.Nb(t, 10).prio2TextOnly,
                a.Nb(t, 10).useDefaultMaxWidth,
                a.Nb(t, 10).isDummy,
              ]));
          },
        );
      }
      function Ce(e) {
        return a.ac(
          0,
          [
            (e()(),
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
              J.b,
              J.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [a.l, a.D, c.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 16384, null, 0, K.a, [], null, null),
            a.xb(
              3,
              114688,
              null,
              0,
              X.a,
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
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, "OptionMenuSelectedItem"),
              e(
                t,
                3,
                0,
                null == t.context.$implicit ? null : t.context.$implicit.name,
                null == t.context.$implicit ||
                  null == t.context.$implicit.contactObject
                  ? null
                  : t.context.$implicit.contactObject.company,
                !(
                  null == t.context.$implicit ||
                  null == t.context.$implicit.contactObject ||
                  !t.context.$implicit.contactObject.company
                ),
                n.listItemType.ITEM_TYPE_NO_END_ICON,
              ));
          },
          null,
        );
      }
      function Pe(e) {
        return a.ac(
          0,
          [
            (e()(),
            a.yb(
              0,
              0,
              null,
              null,
              15,
              "au3-screen",
              [
                ["class", "screen"],
                ["id", "Screen:ADB_MAIN"],
              ],
              null,
              null,
              null,
              Q.b,
              Q.a,
            )),
            a.xb(
              1,
              212992,
              null,
              0,
              u.a,
              [a.l, a.D, c.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            a.xb(2, 4440064, null, 0, m.a, [o.a], { id: [0, "id"] }, null),
            (e()(), a.hb(16777216, null, 0, 1, null, Ae)),
            a.xb(
              4,
              16384,
              null,
              0,
              z.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(), a.hb(0, [["editModeTitle", 2]], 0, 0, null, $e)),
            (e()(),
            a.yb(
              6,
              0,
              null,
              0,
              1,
              "au3-addressbook-view",
              [["class", "addressbook-view"]],
              null,
              [
                [null, "contactTapped"],
                [null, "contactLongpressed"],
                [null, "checkboxTapped"],
                [null, "requestedDynamicListPages"],
              ],
              function (e, t, n) {
                var a = !0,
                  i = e.component;
                return (
                  "contactTapped" === t &&
                    (a =
                      !1 !==
                        i.goToContactCard(
                          null == n.contactObject ? null : n.contactObject.id,
                        ) && a),
                  "contactLongpressed" === t &&
                    (a = !1 !== i.openOptionsMenu(n) && a),
                  "checkboxTapped" === t && (a = !1 !== i.toggleDelete(n) && a),
                  "requestedDynamicListPages" === t &&
                    (a = !1 !== i.range$$.next(n) && a),
                  a
                );
              },
              ee.b,
              ee.a,
            )),
            a.xb(
              7,
              4898816,
              null,
              0,
              te.a,
              [ne.a, o.a],
              {
                state: [0, "state"],
                contacts: [1, "contacts"],
                viewContext: [2, "viewContext"],
                editMode: [3, "editMode"],
                operationMode: [4, "operationMode"],
              },
              {
                contactTapped: "contactTapped",
                contactLongpressed: "contactLongpressed",
                checkboxTapped: "checkboxTapped",
                requestedDynamicListPages: "requestedDynamicListPages",
              },
            ),
            (e()(), a.hb(16777216, null, 0, 1, null, Ne)),
            a.xb(
              9,
              16384,
              null,
              0,
              z.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            a.yb(
              10,
              0,
              null,
              0,
              5,
              "au3-option-menu-wrapper",
              [],
              null,
              null,
              null,
              ae.b,
              ae.a,
            )),
            a.Sb(6144, null, ie.b, null, [le.a]),
            a.Sb(512, null, N.a, N.a, [[3, N.a]]),
            a.xb(
              13,
              245760,
              null,
              1,
              le.a,
              [se.a, oe.a, a.h, N.a],
              { ttEnumType: [0, "ttEnumType"] },
              null,
            ),
            a.Tb(603979776, 1, { template: 0 }),
            (e()(), a.hb(0, [[1, 2]], null, 0, null, Ce)),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, "Screen:ADB_MAIN"),
              e(t, 2, 0, "Screen:ADB_MAIN"),
              e(t, 4, 0, !n.editMode, a.Nb(t, 5)),
              e(
                t,
                7,
                0,
                n.state,
                n.contacts,
                n.viewContext,
                n.editMode,
                n.currentOperationMode,
              ),
              e(t, 9, 0, n.editMode),
              e(t, 13, 0, n.optionTypeEnum));
          },
          null,
        );
      }
      function _e(e) {
        return a.ac(
          0,
          [
            (e()(),
            a.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-addressbook",
              [],
              null,
              null,
              null,
              Pe,
              xe,
            )),
            a.Sb(6144, null, se.a, null, [re.b]),
            a.Sb(131584, null, re.b, re.b, [
              oe.a,
              ue.b,
              ce.a,
              de.a,
              be.c,
              he.a,
              pe.b,
              me.a,
              ge.a,
              ve.a,
              o.a,
            ]),
            a.xb(
              3,
              4440064,
              null,
              0,
              Se.a,
              [f.a, de.a, Oe.a, oe.a, fe.c, ve.a, re.b, x.i, ve.a, o.a],
              null,
              null,
            ),
          ],
          function (e, t) {
            e(t, 3, 0);
          },
          null,
        );
      }
      var Me = a.ub("au3-addressbook", Se.a, _e, {}, {}, []);
    },
    "e+pb": function (e, t, n) {
      "use strict";
      (n.d(t, "b", function () {
        return E;
      }),
        n.d(t, "a", function () {
          return $;
        }));
      var a = n("QQZH"),
        i = n("C05f"),
        l = n("HM3f"),
        s = n("ROBh"),
        o = n("6Oco"),
        r = n("IdLP"),
        u = n("YtkY"),
        c = n("xVbo"),
        d = n("Ohay"),
        b = n("kuMc"),
        h = n("fnmL"),
        p = n("TLy2"),
        m = n("BwBJ"),
        g = n("8j5Y"),
        v = n("J+dc"),
        S = n("AEBN"),
        O = n("Yi6/"),
        f = n("Zbi+"),
        x = n("zcBZ"),
        T = n("q+H2"),
        y = (n("VDgF"), n("YEFf"), n("j7uj")),
        A = n("pWIT"),
        I = (n("6xFL"), n("P1io")),
        E = (function (e) {
          return (
            (e.Global = "global"),
            (e.Addressbook = "addressbook"),
            (e.MessagingAddressbook = "messaging-addressbook"),
            (e.CallHistory = "call-history"),
            (e.Favorites = "favorites"),
            e
          );
        })({});
      class $ {
        constructor(e, t, n, s, o, r, m) {
          ((this.routingService = e),
            (this.textInputService = t),
            (this.phoneService = n),
            (this.searchService = s),
            (this.proposalValidationService = o),
            (this.addressbookService = r),
            (this.initialSuggestions$$ = new a.a(1)),
            (this.searchResults$$ = new a.a(1)),
            (this.searchStatus$$ = new i.a(y.a.WaitingForInput)),
            (this.searchId$$ = new i.a("")),
            (this.searchType$$ = new a.a(1)),
            (this.searchDeviceId$$ = new a.a(1)),
            (this.needles$$ = new i.a([])),
            (this.destroyed$$ = new a.a(1)),
            (this.logger = m.getLogger("phone.PhoneSearchProviderService")),
            (this.deviceToSearch$ = Object(l.b)(
              this.phoneService.phones$,
              this.searchDeviceId$$,
            ).pipe(
              Object(u.a)(([e, t]) =>
                t
                  ? e.find((e) => !!e.device && e.device.id === t)
                  : e.focusDevice,
              ),
              Object(c.a)(O.wd),
              Object(d.a)((e, t) => e.id === t.id),
              Object(O.pd)(this.logger, "constructor: deviceToSearch$:"),
              Object(O.Kd)(),
            )));
          const g = this.searchType$$.pipe(
              Object(d.a)(),
              Object(u.a)((e) => {
                switch (e) {
                  case E.CallHistory:
                    return [x.d.CALLSTACK];
                  case E.MessagingAddressbook:
                  case E.Addressbook:
                    return [x.d.CONTACTS];
                  case E.Favorites:
                    return [x.d.FAVORITES];
                  default:
                    return [x.d.CALLSTACK, x.d.FAVORITES, x.d.CONTACTS];
                }
              }),
            ),
            v = this.needles$$.pipe(Object(d.a)(O.Xd));
          ((this.isEmptySearch$ = v.pipe(
            Object(u.a)((e) => Object(T.a)(e)),
            Object(b.a)(this.destroyed$$),
          )),
            this.deviceToSearch$
              .pipe(
                Object(h.a)(g, v),
                Object(p.a)(([e, t, n]) => this.createSearchForDevice(e, t, n)),
                Object(b.a)(this.destroyed$$),
              )
              .subscribe((e) => {
                this.searchId$$.next(e || "");
              }),
            (this.searchId$ = this.searchId$$.pipe(Object(d.a)())),
            (this.searchResults$ = this.searchResults$$.pipe(
              Object(u.a)((e) => e.map((e) => new A.a(e))),
            )),
            (this.searchStatus$ = this.searchStatus$$),
            (this.initialSuggestions$ = this.initialSuggestions$$.pipe(
              Object(u.a)((e) => e.map((e) => ({ text: e }))),
            )),
            this.subscribeToSearchService());
        }
        convert(e) {
          if (e) return x.b[f.l[e]];
        }
        subscribeToSearchService() {
          const e = this.searchId$.pipe(
              Object(p.a)((e) =>
                e
                  ? this.searchService
                      .searchResults$(e, Object(s.a)({ offset: 0, limit: 100 }))
                      .pipe(Object(u.a)((e) => e.data || []))
                  : Object(s.a)([]),
              ),
              Object(O.Kd)(),
            ),
            t = Object(l.b)(
              this.addressbookService.hideInvalidContacts$,
              this.addressbookService
                .contacts$(Object(s.a)({ offset: 0, limit: 100 }))
                .pipe(Object(u.a)((e) => e.data || [])),
            ).pipe(
              Object(u.a)(([e, t]) =>
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
            n = this.phoneService.groupedRecentCalls$.pipe(
              Object(u.a)((e) =>
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
            a = this.addressbookService.favorites$.pipe(
              Object(p.a)((e) => {
                const t = e.map((e) => this.mapFavoriteToSearchResult(e));
                return t.length < 1 ? Object(s.a)([]) : Object(l.b)(...t);
              }),
            ),
            i = this.searchType$$.pipe(
              Object(p.a)((e) => {
                switch (e) {
                  case E.Addressbook:
                    return t;
                  case E.CallHistory:
                    return n;
                  case E.Favorites:
                    return a;
                  default:
                    return Object(s.a)([]);
                }
              }),
            );
          (e
            .pipe(
              Object(h.a)(i, this.searchStatus$),
              Object(b.a)(this.destroyed$$),
            )
            .subscribe(([e, t, n]) => {
              this.searchResults$$.next(
                (n === y.a.WaitingForInput ? t : e).map((e) => {
                  let t;
                  return (
                    (t = e.searchAdbEntry
                      ? e.searchAdbEntry.isFavorite
                        ? x.d.FAVORITES
                        : x.d.CONTACTS
                      : x.d.CALLSTACK),
                    { source: t, value: e }
                  );
                }),
              );
            }),
            this.searchId$
              .pipe(
                Object(d.a)(),
                Object(p.a)((e) =>
                  e ? this.searchService.searchState$(e) : Object(s.a)(void 0),
                ),
                Object(h.a)(this.needles$$, e),
                Object(p.a)(([e, t, n]) => {
                  const a = !!e && e.state === x.e.DONE;
                  return t && t[0]
                    ? a
                      ? a && 0 === n.length
                        ? (this.logger.debug("delay SearchCompleted status"),
                          Object(s.a)(y.a.SearchCompleted).pipe(
                            Object(m.a)(3e3),
                          ))
                        : Object(s.a)(y.a.SearchCompleted)
                      : Object(s.a)(y.a.Searching)
                    : Object(s.a)(y.a.WaitingForInput);
                }),
                Object(g.a)((e) =>
                  this.logger.debug(
                    "set searchStatus$ to ",
                    this.mapSearchStatusToString(e),
                  ),
                ),
                Object(b.a)(this.destroyed$$),
              )
              .subscribe((e) => {
                this.searchStatus$$.next(e);
              }),
            this.deviceToSearch$
              .pipe(
                Object(p.a)((e) =>
                  e && e.id
                    ? this.searchService.proposals$(e)
                    : Object(s.a)([]),
                ),
                Object(b.a)(this.destroyed$$),
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
                  Object(u.a)((t) => {
                    const n = this.getFavoriteNumberFromContact(t, e.index);
                    return {
                      id: "",
                      uri: "",
                      name: t ? t.name : "",
                      combinedName: t ? { text: t.name } : void 0,
                      numbers: [
                        {
                          number: n ? { text: n.number } : void 0,
                          numberType: n ? n.type : void 0,
                        },
                      ],
                      numberType: n ? n.type : void 0,
                      searchAdbEntry: { contact: t, isFavorite: !0 },
                    };
                  }),
                )
            : e.number
              ? Object(s.a)({
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
        getFavoriteNumberFromContact(e, t) {
          if (e && e.phoneNumberList && 0 !== e.phoneNumberList.length)
            return t && e.phoneNumberList.length > t
              ? e.phoneNumberList[t]
              : e.phoneNumberList.find((e) => !!e.isFavorite);
        }
        mapSearchStatusToString(e) {
          switch (e) {
            case y.a.WaitingForInput:
              return "WaitingForInput";
            case y.a.Searching:
              return "Searching";
            case y.a.SearchCompleted:
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
          return S.e.TIF_ID_05_SEARCH_FIELD_PHONE_LISTS;
        }
        createSearch(e) {
          ((this.needles = e),
            this.logger.info("search needles changed:", e),
            this.needles$$.next(e));
        }
        restoreSearch(e) {
          return e
            ? new Promise((t, n) => {
                (this.stopSearch(),
                  this.searchService
                    .getExistingSearch(e)
                    .pipe(Object(b.a)(this.destroyed$$), Object(v.a)(1))
                    .subscribe(
                      (e) => {
                        (this.logger.info(
                          "restoreSearch: received previous search: ",
                          e,
                        ),
                          e.state === x.e.DONE
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
          const n = this.searchService.suggestions$(e).pipe(
              Object(u.a)((e) =>
                e.map((e) => ({
                  fullSuggestion: e.fullSuggestion,
                  suggestion: e.suggestion || "",
                  needleIndex: e.inputTextIndex,
                  type: e.suggestionType === x.f.FAST ? S.u.FAST : S.u.SLOW,
                })),
              ),
              Object(b.a)(this.destroyed$$),
              Object(O.Kd)(),
            ),
            a = n.pipe(
              Object(u.a)((e) => e.filter((e) => e.type === S.u.FAST)),
            ),
            i = n.pipe(
              Object(u.a)((e) => e.filter((e) => e.type !== S.u.FAST)),
            );
          return this.proposalValidationService.validateProposals(t, a, i);
        }
        saveInputAsProposal() {
          const e = this.phoneService.phones.focusDevice,
            t = this.needles && this.needles[0];
          e && t && this.searchService.addProposal(e, t);
        }
        isContactValidForContext(e) {
          return this.routingService.activeAppContextSnapshot === I.w
            ? !!e.phoneNumberList && e.phoneNumberList.length > 0
            : this.routingService.activeAppContextSnapshot === I.u
              ? !!e.addressList && e.addressList.length > 0
              : this.routingService.activeAppContextSnapshot !== I.t ||
                (!!e.emailList && e.emailList.length > 0);
        }
        createSearchForDevice(e, t, n) {
          return n && n[0]
            ? new r.a((a) => {
                const l = new i.a(!1);
                return (
                  this.logger.info(
                    "attempting to create a new search object:",
                    { device: e, sources: t, needles: n },
                  ),
                  this.searchService
                    .createSearch(e, t, n)
                    .pipe(Object(h.a)(l))
                    .subscribe(([n, i]) => {
                      (this.logger.info("handling update for search object:", {
                        deviceId: e.id,
                        sources: t,
                        searchId: n,
                        unsubscribed: i,
                      }),
                        n
                          ? i
                            ? (a.complete(), this.searchService.deleteSearch(n))
                            : a.next(n)
                          : i ||
                            this.logger.error(
                              "creating a search object failed, no searchId received",
                            ));
                    }),
                  () => l.next(!0)
                );
              })
            : Object(s.a)(void 0);
        }
      }
    },
    ihOk: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return p;
      }),
        n.d(t, "b", function () {
          return S;
        }));
      var a = n("kZht"),
        i = n("An66"),
        l = n("fu7d"),
        s = n("bou3"),
        o = n("yNay"),
        r = n("8TlW"),
        u = n("Xo58"),
        c = n("m3Ja"),
        d = n("r+e+"),
        b = n("ijxY"),
        h = n("bmFL"),
        p =
          (n("ZMtB"),
          n("fzcM"),
          a.wb({
            encapsulation: 0,
            styles: [
              [
                '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{height:100%;width:100%;max-height:100%;max-width:100%;min-height:0;display:flex;justify-content:center;flex-direction:column}.disclaimer-description[_ngcontent-%COMP%]{width:100%;font-size:40px;text-align:center}',
              ],
            ],
            data: {},
          }));
      function m(e) {
        return a.ac(
          0,
          [
            (e()(),
            a.yb(
              0,
              16777216,
              null,
              null,
              1,
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
              540672,
              null,
              0,
              i.r,
              [a.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (e()(), a.hb(0, null, null, 0)),
          ],
          function (e, t) {
            e(t, 1, 0, t.component.contentTemplate);
          },
          null,
        );
      }
      function g(e) {
        return a.ac(
          0,
          [
            (e()(),
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
            a.Mb(null, 0),
            (e()(), a.hb(16777216, null, null, 1, null, m)),
            a.xb(
              3,
              16384,
              null,
              0,
              i.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), a.hb(0, null, null, 0)),
          ],
          function (e, t) {
            e(t, 3, 0, t.component.hasContentTemplate);
          },
          null,
        );
      }
      function v(e) {
        return a.ac(
          0,
          [
            (e()(),
            a.yb(
              0,
              0,
              null,
              null,
              4,
              "span",
              [["id", "Disclaimer"]],
              null,
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
              l.a,
              [a.l, a.D, s.a, o.a, [3, l.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (e()(),
            a.yb(
              2,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "disclaimer-description"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              r.b,
              r.a,
            )),
            a.xb(
              3,
              212992,
              null,
              0,
              l.a,
              [a.l, a.D, s.a, o.a, [3, l.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            a.xb(
              4,
              245760,
              null,
              0,
              u.a,
              [[6, l.a], c.a, a.h, a.l, a.D, [2, d.a], [2, b.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, "Disclaimer"),
              e(
                t,
                3,
                0,
                n.restrictionReason && n.disabledTextEnum[n.restrictionReason]
                  ? n.restrictionReason
                  : n.disabledReasonEnum.ERROR,
                n.disabledTextEnum,
              ),
              e(
                t,
                4,
                0,
                n.disabledTextEnum[n.restrictionReason] ||
                  n.disabledTextEnum.ERROR,
                n.restrictionReason && n.disabledTextEnum[n.restrictionReason]
                  ? n.restrictionReason
                  : n.disabledReasonEnum.ERROR,
                6,
                n.nonI18nDisabledText,
              ));
          },
          function (e, t) {
            e(
              t,
              2,
              0,
              a.Nb(t, 4).backgroundColor,
              a.Nb(t, 4).fixedNumberOfLines,
              a.Nb(t, 4).mayContainLatinCharsForArabic,
              a.Nb(t, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function S(e) {
        return a.ac(
          2,
          [
            (e()(), a.hb(16777216, null, null, 1, null, g)),
            a.xb(
              1,
              16384,
              null,
              0,
              i.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (e()(), a.hb(0, [["disclaimerText", 2]], null, 0, null, v)),
          ],
          function (e, t) {
            e(t, 1, 0, !t.component.active, a.Nb(t, 2));
          },
          null,
        );
      }
    },
    oJGs: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return d;
      }),
        n.d(t, "b", function () {
          return b;
        }));
      var a = n("QQZH"),
        i = n("HM3f"),
        l = n("TLy2"),
        s = n("kuMc"),
        o = n("YtkY"),
        r = n("Yi6/"),
        u = (n("sK8D"), n("6xFL"), n("GZoL"), n("d3LF"), n("IXiK")),
        c = n("XY/Y"),
        d =
          (n("xS3h"),
          n("ONRh"),
          n("3Sae"),
          (function (e) {
            return (
              (e.AddAsFavorite = "Als Favorit\nspeichern"),
              (e.SendContact = "Kontakt\nversenden"),
              (e.NewSms = "SMS\nsenden"),
              (e.NewEmail = "Email\nsenden"),
              (e.SaveAs = "als Shortcut\nspeichern"),
              e
            );
          })({}));
      class b {
        constructor(e, t, n, i, o, c, b, h, p, m, g) {
          ((this.optionMenuService = e),
            (this.messagingContextService = t),
            (this.messagingInfoService = n),
            (this.addressbookService = i),
            (this.naviRoutingService = o),
            (this.addressFormattingservice = c),
            (this.shortcutsOptionsService = b),
            (this.usermanagementService = h),
            (this.shortCutFactoryService = p),
            (this.popupManager = m),
            (this.destroy$$ = new a.a(1)),
            (this.options$$ = new a.a(1)),
            (this.addAsFavoriteOption = {
              icon: "E16E_addressbook_save_as_favorite.webp",
              developerText: "Als Favorit\nspeichern",
              visible: !0,
              enabled: !0,
              disabledReason: r.Ob.POPUP_PHONE_POPUP_FAVOURITE_FULL,
              textId: d.AddAsFavorite,
            }),
            (this.sendContact = {
              icon: "E844_addressbook_send_contactcard.webp",
              developerText: "Kontakt\nversenden",
              visible: !1,
              enabled: !0,
              textId: d.SendContact,
            }),
            (this.newSmsOption = {
              icon: "E2A7_messaging_write_new_sms.webp",
              developerText: "SMS\nsenden",
              visible: !0,
              enabled: !0,
              textId: d.NewSms,
            }),
            (this.newEmailOption = {
              icon: "E2A8_messaging_write_new_email.webp",
              developerText: "Email\nsenden",
              visible: !0,
              enabled: !0,
              textId: d.NewEmail,
            }),
            (this.saveAsPresetOption = {
              icon: "E3F0_save_shortcut_preset.webp",
              developerText: "als Shortcut\nspeichern",
              visible: !1,
              enabled: !1,
              textId: d.SaveAs,
            }),
            (this.options = [
              this.addAsFavoriteOption,
              this.sendContact,
              this.newSmsOption,
              this.newEmailOption,
              this.saveAsPresetOption,
            ]),
            (this.options$ = this.options$$.asObservable()),
            (this.logger = g.getLogger(
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
                Object(l.a)((e) => this.initOptionsForContact(e)),
                Object(s.a)(this.destroy$$),
              )
              .subscribe((e) => {
                this.options$$.next(e);
              }));
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        onOptionTap(e) {
          switch (e.option) {
            case this.addAsFavoriteOption:
              this.addressbookService.addContactAsFavorite(e.item);
              break;
            case this.sendContact:
              const t = this.contactToString(e.item);
              this.messagingContextService.enterMessagingFromOutside({
                messageText: t,
              });
              break;
            case this.newSmsOption:
              this.newSmsMessageTo(e.item);
              break;
            case this.newEmailOption:
              this.newEmailTo(e.item);
              break;
            case this.saveAsPresetOption:
              this.saveAsPreset(e.item);
              break;
            default:
              this.logger.error(
                "Received option tap event with unexpected type: ",
                event,
              );
          }
        }
        canShowOptionsForContact(e) {
          return this.initOptionsForContact(e).pipe(
            Object(s.a)(this.destroy$$),
            Object(o.a)((e) => e.length > 0 && e.some((e) => e.visible)),
          );
        }
        initOptionsForContact(e) {
          return Object(i.b)(this.canSendSMS$, this.canSendMail$).pipe(
            Object(s.a)(this.destroy$$),
            Object(o.a)(([t, n]) => {
              if (e) {
                const a =
                  this.addressbookService.getCurrentFocusDeviceProfile();
                if (
                  (this.updateAddAsFavoriteOption(a, e),
                  (this.newEmailOption.visible = n && !!e.emailList),
                  (this.newEmailOption.enabled =
                    !!e.emailList && e.emailList.length > 0),
                  e.emailList &&
                    0 === e.emailList.length &&
                    (this.newEmailOption.disabledReason =
                      r.Ob.POPUP_ADB_DETAIL_NO_MAIL_ACCOUNT_AVAILABLE),
                  (this.newSmsOption.visible = t && !!e.phoneNumberList),
                  (this.newSmsOption.enabled =
                    !!e.phoneNumberList && e.phoneNumberList.length > 0),
                  (this.sendContact.visible = n || t),
                  this.naviRoutingService.isContextActive &&
                    e.addressList &&
                    e.addressList.length > 0)
                ) {
                  const t = this.shortcutsOptionsService.saveShortcutOption(
                    this.shortCutFactoryService.createAddressShortcutFromContact(
                      e,
                      void 0,
                      !0,
                    ),
                  );
                  ((this.saveAsPresetOption.visible = t.visible),
                    (this.saveAsPresetOption.enabled = t.enabled),
                    (this.saveAsPresetOption.disabledReason =
                      t.disabledReason));
                } else if (e.phoneNumberList && e.phoneNumberList.length > 0) {
                  const t = this.shortcutsOptionsService.saveShortcutOption(
                    this.shortCutFactoryService.createShortcutFromContact(e),
                  );
                  ((this.saveAsPresetOption.visible = t.visible),
                    this.usermanagementService.isGuestAccountActive() ||
                    this.usermanagementService.isOfflineAccountActive()
                      ? ((this.saveAsPresetOption.enabled = !1),
                        (this.saveAsPresetOption.disabledReason =
                          r.Ob.POPUP_PRESET_TEL_GUEST))
                      : ((this.saveAsPresetOption.enabled = t.enabled),
                        (this.saveAsPresetOption.disabledReason =
                          t.disabledReason)));
                } else
                  ((this.saveAsPresetOption.visible = !1),
                    (this.saveAsPresetOption.enabled = !1));
                return this.options;
              }
              return (
                this.logger.warn(
                  "initOptionsForContact: attempted to resolve options for invalid item: ",
                  e,
                ),
                []
              );
            }),
          );
        }
        updateAddAsFavoriteOption(e, t) {
          const n = !!e && !!e.maxFavorites,
            a = n && !!e.favorites && e.favorites.length >= e.maxFavorites;
          this.addAsFavoriteOption.visible =
            !this.naviRoutingService.isContextActive &&
            !!t &&
            !!t.phoneNumberList &&
            t.phoneNumberList.length > 0;
          const i =
            t &&
            t.phoneNumberList &&
            t.phoneNumberList.every((e) => !!e && !!e.isFavorite);
          ((this.addAsFavoriteOption.enabled = n && !a && !i),
            (this.addAsFavoriteOption.icon = i
              ? "E16E_addressbook_save_as_favorite_enabled.webp"
              : "E16E_addressbook_save_as_favorite.webp"),
            this.logger.info(
              "initOptionsForContact: favorites option enabled?",
              this.addAsFavoriteOption.enabled,
            ),
            i
              ? (this.addAsFavoriteOption.disabledReason =
                  r.Ob.POPUP_ADB_DETAIL_OPTION_STORE_FAVORITE_ALREADY_EXISTING)
              : a &&
                (this.addAsFavoriteOption.disabledReason =
                  r.Ob.POPUP_PHONE_POPUP_FAVOURITE_FULL));
        }
        newSmsMessageTo(e) {
          this.messagingContextService
            .enterMessagingSMS({ contact: e })
            .then((e) => {
              this.logger.info("Enter send sms from adb: " + e);
            })
            .catch((e) => {
              this.logger.error(
                "Failed to create new SMS message for caller.\nReason: " + e,
              );
            });
        }
        newEmailTo(e) {
          this.messagingContextService
            .enterMessagingMail({ contact: e })
            .then((e) => {
              this.logger.info("Enter send sms from adb: " + e);
            })
            .catch((e) => {
              this.logger.error(
                "Failed to create new Email message for caller.\nReason: " + e,
              );
            });
        }
        saveAsPreset(e) {
          if (this.naviRoutingService.isContextActive) {
            if (!e || !e.addressList)
              return void this.logger.error(
                "saveAsPreset: can't  store a contact without an address",
                e,
              );
            e.addressList.length > 1
              ? this.popupManager.request(
                  r.Ob.POPUP_ADB_MAIN_OPTION_FAV_DISAMBIGUATION,
                  { data: { contact: e, forPresets: !0, navigation: !0 } },
                )
              : this.shortcutsOptionsService.saveShortcut(
                  this.shortCutFactoryService.createAddressShortcutFromContact(
                    e,
                    void 0,
                    !0,
                  ),
                );
          } else {
            if (!e || !e.phoneNumberList)
              return void this.logger.error(
                "saveAsPreset: can't  store a contact without a number",
                e,
              );
            e.phoneNumberList.length > 1
              ? this.popupManager.request(
                  r.Ob.POPUP_ADB_MAIN_OPTION_FAV_DISAMBIGUATION,
                  { data: { contact: e, forPresets: !0 } },
                )
              : this.shortcutsOptionsService.saveShortcut(
                  this.shortCutFactoryService.createShortcutFromContact(e),
                );
          }
        }
        contactToString(e) {
          const t = this.addressbookService.getSortOrder(),
            n = [];
          switch (t) {
            case c.g.FIRSTNAMELASTNAME:
              (n.push(e.firstName || void 0), n.push(e.lastName || void 0));
              break;
            default:
              (n.push(e.lastName || void 0), n.push(e.firstName || void 0));
          }
          const a = e.addressList || [],
            i = e.emailList || [];
          return (
            (e.phoneNumberList || []).forEach((e) => {
              n.push((e && e.number) || void 0);
            }),
            a.forEach((e) => {
              n.push((e && this.formatAddress(e)) || void 0);
            }),
            i.forEach((e) => {
              n.push((e && e.address) || void 0);
            }),
            n.filter((e) => !!e).join("\n")
          );
        }
        formatAddress(e) {
          const t = this.addressFormattingservice.getLinesWithoutFallback(
            1,
            this.mapAdbAddressToNavAddress(e),
          );
          return t && t.length > 0 ? t[0] : void 0;
        }
        mapAdbAddressToNavAddress(e) {
          return {
            city: e.city,
            country: e.country,
            state: e.state,
            street: e.street,
            zipCode: e.zipCode,
            latitude: e.geoLatitude,
            longitude: e.geoLongitude,
          };
        }
      }
    },
    yUFt: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      class a {}
    },
  },
]);
