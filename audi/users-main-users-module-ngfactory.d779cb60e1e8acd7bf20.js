(window.webpackJsonp = window.webpackJsonp || []).push([
  [114, 71, 73, 74, 94, 108, 116],
  {
    "26sj": function (n, l, e) {
      "use strict";
      (e.r(l),
        e.d(l, "UsersModuleNgFactory", function () {
          return Ua;
        }));
      var t = e("kZht");
      class a {}
      var i = e("C9Ky"),
        o = e("89Z2"),
        u = e("kqft"),
        r = e("+sw+"),
        s = e("FfND"),
        c = e("bou3"),
        b = e("yNay"),
        d = e("1VvW"),
        p = e("CDcS"),
        h = e("Yi6/"),
        m = e("ZiU+"),
        g = e("kuMc"),
        f = e("QQZH");
      class x {
        constructor(n) {
          ((this.onlineMediaBrowserService = n),
            (this.context = h.s.Home),
            (this.destroyed$$ = new f.a(1)));
        }
        ngOnInit() {
          this.onlineMediaBrowserService
            .startGeneralOnlineMediaUsage()
            .pipe(Object(g.a)(this.destroyed$$))
            .subscribe();
        }
        ngOnDestroy() {
          (this.destroyed$$.next(),
            this.destroyed$$.complete(),
            this.onlineMediaBrowserService.stopGeneralOnlineMediaUsage());
        }
      }
      var y = t.wb({
        encapsulation: 0,
        styles: [
          ["[_nghost-%COMP%]{display:block;height:100%;width:100%;color:#fff}"],
        ],
        data: {},
      });
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
              function (n, l, e) {
                var a = !0;
                return (
                  "component:@screenChange.start" === l &&
                    (a = !1 !== t.Nb(n, 1).animationStarted(e) && a),
                  "component:@screenChange.done" === l &&
                    (a = !1 !== t.Nb(n, 1).animationDone(e) && a),
                  a
                );
              },
              o.b,
              o.a,
            )),
            t.xb(
              1,
              245760,
              null,
              1,
              u.a,
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
            t.xb(5, 212992, [[1, 4]], 0, p.a, [d.o, t.h, t.z, b.a], null, null),
          ],
          function (n, l) {
            (n(l, 1, 0), n(l, 4, 0), n(l, 5, 0));
          },
          function (n, l) {
            (n(l, 0, 0, t.Nb(l, 1).screenState, !0),
              n(l, 3, 0, t.Nb(l, 5).hideAdjacentSibling));
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
              1,
              "au3-users",
              [],
              [[8, "className", 0]],
              null,
              null,
              _,
              y,
            )),
            t.xb(1, 245760, null, 0, x, [m.a], null, null),
          ],
          function (n, l) {
            n(l, 1, 0);
          },
          function (n, l) {
            n(l, 0, 0, t.Nb(l, 1).context);
          },
        );
      }
      var O = t.ub("au3-users", x, v, {}, {}, []),
        T = e("Z2XD"),
        C = e("fu7d"),
        N = e("y9xZ"),
        P = e("VUTu"),
        I = e("nK9R"),
        M = e("qzuC"),
        S = e("8yWk"),
        D = e("ZXHi"),
        A = e("IRNg"),
        L = e("8TlW"),
        k = e("Xo58"),
        w = e("m3Ja"),
        E = e("r+e+"),
        U = e("ijxY"),
        R = e("bmFL"),
        F = e("8lHc"),
        B = e("1e4c");
      class z {
        constructor(n) {
          this.routingService = n;
        }
        ngAfterViewInit() {
          this.subscription = Object(F.a)(3e3).subscribe((n) =>
            this.routingService.goTo(
              B.b.UserAccountList.children.OnlineAccount,
            ),
          );
        }
        ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }
      var $ = t.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:hidden}",
          ],
        ],
        data: {},
      });
      function H(n) {
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
              "au3-screen",
              [["id", "Screen:UM_ACCOUNT_LIST_INIT"]],
              null,
              null,
              null,
              T.b,
              T.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, N.a, [b.a], { id: [0, "id"] }, null),
            (n()(),
            t.yb(
              3,
              0,
              null,
              0,
              2,
              "au3-title-line",
              [
                ["class", "title-line"],
                ["id", ""],
              ],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              P.b,
              P.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              I.a,
              [M.a, S.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                hasSecondaryText: [1, "hasSecondaryText"],
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
              D.b,
              D.a,
            )),
            t.xb(7, 49152, null, 0, A.a, [], null, null),
            (n()(),
            t.yb(
              8,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [["id", "WaitUserManagementIsBeingInitializedHint"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              L.b,
              L.a,
            )),
            t.xb(
              9,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              10,
              245760,
              null,
              0,
              k.a,
              [[6, C.a], w.a, t.h, t.l, t.D, [2, E.a], [2, U.a], [2, R.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, l) {
            (n(l, 1, 0, "Screen:UM_ACCOUNT_LIST_INIT"),
              n(l, 2, 0, "Screen:UM_ACCOUNT_LIST_INIT"),
              n(l, 4, 0, ""),
              n(l, 5, 0, "Nutzer", !1, !0),
              n(l, 9, 0, "WaitUserManagementIsBeingInitializedHint"),
              n(
                l,
                10,
                0,
                "Wird initialisiert.\nBitte warten...",
                "WaitUserManagementIsBeingInitializedHint",
                3,
              ));
          },
          function (n, l) {
            (n(
              l,
              3,
              0,
              t.Nb(l, 5).hideLeftBorder,
              t.Nb(l, 5).hideDividingBorders,
            ),
              n(
                l,
                8,
                0,
                t.Nb(l, 10).backgroundColor,
                t.Nb(l, 10).fixedNumberOfLines,
                t.Nb(l, 10).mayContainLatinCharsForArabic,
                t.Nb(l, 10).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function j(n) {
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
              "au3-initialization",
              [],
              null,
              null,
              null,
              H,
              $,
            )),
            t.xb(1, 4374528, null, 0, z, [s.a], null, null),
          ],
          null,
          null,
        );
      }
      var W = t.ub("au3-initialization", z, j, {}, {}, []),
        Y = e("8WOv"),
        V = e("OtM5"),
        Z = e("9ZFG"),
        G = e("bMuc"),
        q = e("ZIdM"),
        K = e("3bpu"),
        X = e("6zvu"),
        J = e("VcEz"),
        Q = e("BMrr"),
        nn = e("IEns"),
        ln = e("6480"),
        en = e("oeT7"),
        tn = e("t7cT"),
        an = e("An66"),
        on = e("z6QT"),
        un = e("flsk"),
        rn = e("FQEI"),
        sn = e("O82V"),
        cn = e("Eln4"),
        bn = e("evAh"),
        dn = e("zPMi"),
        pn = e("CpzC"),
        hn = e("0Bsn"),
        mn = e("5GjX"),
        gn = e("mYyF"),
        fn = e("v98a"),
        xn = e("aOG8"),
        yn = e("Krzs"),
        _n = e("E7cc"),
        vn = e("0qMr"),
        On = e("4XZL"),
        Tn = e("URLa"),
        Cn = e("VwjD"),
        Nn = e("9N/+"),
        Pn = e("/AMN"),
        In = e("9tRs"),
        Mn = e("apBa"),
        Sn = e("xMt+"),
        Dn = e("N2Hj"),
        An = e("UbWD"),
        Ln = e("2rvh"),
        kn = e("odRV"),
        wn = e("Udyh"),
        En = e("I3ve"),
        Un = e("qiAR"),
        Rn = e("007S"),
        Fn = e("oxWk"),
        Bn = e("Tr//"),
        zn = e("M706"),
        $n = e("aMc6"),
        Hn = e("fzcM"),
        jn = e("erFY"),
        Wn = e("5wO1"),
        Yn = e("eZMD"),
        Vn = e("HD2x"),
        Zn = e("eWIV"),
        Gn = e("3Sae"),
        qn = e("ihOk"),
        Kn = e("ZMtB"),
        Xn = e("J3i6"),
        Jn = e("J0Yb"),
        Qn = e("YtkY"),
        nl = e("Ohay"),
        ll = e("8j5Y"),
        el = e("0Woy"),
        tl = e("xVbo"),
        al = e("jIqt"),
        il = e("TLy2"),
        ol = e("J+dc"),
        ul = e("C05f"),
        rl = e("HM3f"),
        sl = e("wgY5"),
        cl = e("a8ry"),
        bl = e("oPv+"),
        dl = e("CYdq"),
        pl = e("4piS"),
        hl = e("csfA"),
        ml = (function (n) {
          return ((n.USERS = "Nutzer"), (n.USER_PROFILES = "Nutzerprofile"), n);
        })({}),
        gl = (function (n) {
          return ((n.DELETE_USERS = "Entfernen"), (n.HINT = "Hinweis"), n);
        })({});
      class fl {
        constructor(n, l, e, t, a, i, o) {
          ((this.usermanagementService = n),
            (this.umActivitiesService = l),
            (this.displayService = e),
            (this.disclaimerService = t),
            (this.generalSettingsService = a),
            (this.popupManager = i),
            (this.changeDetector = o),
            (this.listIconCategory = h.Z.ListTwoline),
            (this.listItemType = h.rb),
            (this.userRoles = cl.e),
            (this.UsersRoutes = B.b),
            (this.datePipe = new h.Gb()),
            (this.userRoleTexts = Xn.b),
            (this.editMenuBlocking = pl.b),
            (this.titleTextEnum = ml),
            (this.subtitleTextEnum = gl),
            (this.destroyed$$ = new f.a(1)),
            (this.deletionRequested$$ = new ul.a(!1)),
            (this.accountSwitchRequested = !1),
            (this.ttMode = h.gd.textToolMode),
            (this.editMode = !1),
            (this.showDeletionFailedHint = !1),
            (this.deletionCandidates = new Map()),
            (this.myAudiAvailable = !1));
        }
        ngOnInit() {
          ((this.blockDeleteAccount$ = Object(rl.b)(
            this.umActivitiesService.deleteUserActivity$,
            this.deletionRequested$$,
            this.disclaimerService.active$,
          ).pipe(
            Object(Qn.a)(
              ([n, l, e]) => (
                this.editMode && e && this.toggleEditMode(),
                hl.b.activityIsDisabled(n) || l || e
              ),
            ),
            Object(nl.a)(),
          )),
            (this.blockDeleteAccountReason$ = Object(rl.b)(
              this.umActivitiesService.deleteUserActivity$,
              this.disclaimerService.active$,
            ).pipe(
              Object(Qn.a)(
                ([n, l]) =>
                  hl.b.getActivityDisabledReason(n) ||
                  (l
                    ? {
                        type: h.A.SHOW_POPUP,
                        popup: h.Db.DEFAULT_LOCKING_TOAST,
                      }
                    : void 0),
              ),
              Object(nl.a)(),
            )),
            (this.blockAddAccount$ = Object(rl.b)(
              this.umActivitiesService.addOnlineUserActivity$,
              this.umActivitiesService.addOfflineUserActivity$,
            ).pipe(
              Object(ll.a)(([n]) => {
                const l = !!n;
                (l !== this.myAudiAvailable &&
                  this.changeDetector.markForCheck(),
                  (this.myAudiAvailable = l));
              }),
              Object(Qn.a)(
                ([n, l]) =>
                  hl.b.activityIsDisabled(l) && hl.b.activityIsDisabled(n),
              ),
              Object(nl.a)(),
            )),
            (this.sortedUserList$ = Object(rl.b)(
              this.usermanagementService.activeUser$,
              this.usermanagementService.usersRegisteredInVehicle$,
            ).pipe(
              Object(Qn.a)(([n, l]) => this.combineSortedUserList(n, l)),
              Object(g.a)(this.destroyed$$),
            )),
            (this.numberOfDeletableUsers$ = Object(rl.b)(
              this.usermanagementService.activeUser$,
              this.sortedUserList$,
            ).pipe(
              Object(Qn.a)(([n, l]) => {
                const e = l ? l.filter((n) => this.canBeDeleted(n)).length : 0;
                return (n && this.canBeDeleted(n) ? 1 : 0) + e;
              }),
              Object(ll.a)((n) => {
                this.editMode && n <= 0 && this.toggleEditMode();
              }),
              Object(nl.a)(),
            )),
            this.umActivitiesService.changeUserActivity$
              .pipe(
                Object(Qn.a)((n) => hl.b.activityIsActive(n)),
                Object(nl.a)(),
                Object(el.a)(),
                Object(g.a)(this.destroyed$$),
              )
              .subscribe(([n, l]) => {
                l && !this.accountSwitchRequested
                  ? ((this.accountSwitchRequested = !0),
                    this.changeDetector.detectChanges())
                  : n &&
                    !l &&
                    ((this.accountSwitchRequested = !1),
                    this.changeDetector.detectChanges());
              }),
            (this.lastSyncDateTimeString$ = Object(rl.b)(
              this.generalSettingsService.dateFormat$,
              this.generalSettingsService.timeFormat$,
              this.generalSettingsService.timeZoneOffset$.pipe(
                Object(tl.a)(h.wd),
                Object(al.a)({
                  id: "initialDefault",
                  uri: "initialDefault",
                  name: "initialDefault",
                  currentValue: 0,
                }),
              ),
              this.usermanagementService.activeUser$,
            ).pipe(
              Object(Qn.a)(([n, l, e, t]) => {
                if (
                  !hl.b.isMyAudiUser(t) ||
                  !t.dateOfLastSync ||
                  "" === t.dateOfLastSync
                )
                  return;
                const a = sl.utc(t.dateOfLastSync).add(e.currentValue, "hours");
                return (
                  this.datePipe.transform(a, n.activeDateFormatForMoment) +
                  ", " +
                  this.datePipe.transform(a, l.activeTimeFormatForMoment)
                );
              }),
            )));
        }
        ngOnDestroy() {
          (this.destroyed$$.next(), this.deletionRequested$$.complete());
        }
        getGoToAccountSettingsRoute(n) {
          if (!this.editMode)
            switch (n.role) {
              case cl.e.AnonymousGuestUser:
                return B.b.UserAccountList.children.GuestAccount;
              case cl.e.OfflineGuestUser:
                return B.b.UserAccountList.children.OfflineAccount;
              default:
                return B.b.UserAccountList.children.OnlineAccount;
            }
          return null;
        }
        combineSortedUserList(n, l) {
          this.activeUser = n;
          const e = n ? n.id : "-",
            t = l
              .filter((n) => n.role !== cl.e.AnonymousGuestUser && n.id !== e)
              .sort((n, l) =>
                sl(l.dateOfLastUsage || 0).diff(sl(n.dateOfLastUsage || 0)),
              ),
            a =
              n && n.role === cl.e.AnonymousGuestUser
                ? void 0
                : l.find((n) => n.role === cl.e.AnonymousGuestUser);
          return (a && t.push(a), t);
        }
        performDeletion() {
          const n = [];
          (this.deletionCandidates.forEach((l) => n.push(l)),
            this.deletionRequested$$.next(!0),
            this.umActivitiesService
              .deleteUsers(n)
              .pipe(
                Object(ll.a)((l) => {
                  ((this.showDeletionFailedHint = l.length < n.length),
                    l.forEach((n) => this.deletionCandidates.delete(n)));
                }),
                Object(il.a)((n) =>
                  this.usermanagementService.usersRegisteredInVehicle$.pipe(
                    Object(tl.a)((l) =>
                      n.every((n) => !l.find((l) => l.id === n)),
                    ),
                  ),
                ),
                Object(ol.a)(1),
                Object(g.a)(this.destroyed$$),
              )
              .subscribe(() => {
                (this.showDeletionFailedHint ||
                  setTimeout(() => {
                    this.popupManager.request(
                      h.Ob.POPUP_UM_ACCOUNT_LIST_DELETE_TOAST,
                    );
                  }, 0),
                  this.deletionRequested$$.next(!1));
              }),
            this.changeDetector.markForCheck());
        }
        canBeDeleted(n) {
          return !!n && n.role !== cl.e.AnonymousGuestUser;
        }
        markUserForDeletion(n) {
          if (n && !this.deletionCandidates.has(n.id) && this.canBeDeleted(n))
            if (this.activeUser && n.id === this.activeUser.id) {
              const l = this.deletionCandidates,
                e = this.changeDetector;
              this.popupManager
                .request(h.Ob.POPUP_UM_EDIT_ACCOUNT_DELETE_DIALOG)
                .then((t) => {
                  t.action === h.Nb.CONTINUE &&
                    (l.set(n.id, n), e.markForCheck());
                });
            } else
              (this.deletionCandidates.set(n.id, n),
                this.changeDetector.markForCheck());
        }
        toggleDeleteSelection(n) {
          n &&
            n.role !== cl.e.AnonymousGuestUser &&
            (this.deletionCandidates.has(n.id)
              ? (this.deletionCandidates.delete(n.id),
                this.changeDetector.markForCheck())
              : this.markUserForDeletion(n));
        }
        toggleDeleteAllSelection() {
          this.sortedUserList$
            .pipe(Object(ol.a)(1), Object(g.a)(this.destroyed$$))
            .subscribe((n) => {
              const l = [this.activeUser, ...n].filter((n) =>
                this.canBeDeleted(n),
              );
              this.deletionCandidates.size === l.length
                ? (this.deletionCandidates.clear(),
                  this.changeDetector.markForCheck())
                : l.forEach((n) => {
                    this.markUserForDeletion(n);
                  });
            });
        }
        attemptUserSwitch(n) {
          this.editMode ||
            this.umActivitiesService
              .trySwitchToAccountAndAwaitProcessOngoing$(n, dl.c.EXPLICIT)
              .pipe(Object(ol.a)(1), Object(g.a)(this.destroyed$$))
              .subscribe(() => {
                ((this.accountSwitchRequested = !1),
                  this.changeDetector.detectChanges());
              });
        }
        toggleEditMode() {
          ((this.editMode = !this.editMode),
            this.deletionCandidates.clear(),
            this.changeDetector.markForCheck());
        }
        isMyAudiUser(n) {
          return hl.b.isMyAudiUser(n);
        }
      }
      var xl = e("sg2e"),
        yl = t.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{height:100%;overflow:hidden}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch}.done-button[_ngcontent-%COMP%]{width:232px;height:120px}.screen__user-list[_ngcontent-%COMP%]{font-size:40px}.list__item--add-account[_ngcontent-%COMP%]{height:100px}.list__item--user[_ngcontent-%COMP%]{height:120px}.tl-button[_ngcontent-%COMP%]{width:230px}",
            ],
          ],
          data: {},
        });
      function _l(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["id", "SettingsButton"],
                ["right", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              Y.b,
              Y.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              V.a,
              [Z.a, t.h, b.a, [3, V.a]],
              null,
              null,
            ),
            t.xb(2, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              ln.a,
              [s.a, en.i, V.a, X.a, ln.b, tn.a],
              {
                routeInfo: [0, "routeInfo"],
                settingsButton: [1, "settingsButton"],
                longTextButton: [2, "longTextButton"],
              },
              null,
            ),
            t.Pb(131072, an.b, [t.h]),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              9,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              10,
              49152,
              null,
              0,
              dn.a,
              [[2, V.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 3, 0, "SettingsButton"),
              n(l, 5, 0),
              n(
                l,
                6,
                0,
                e.UsersRoutes.UserAccountList.children.OnlineAccount.children
                  .PrimaryUserSettings,
                !0,
                !t.Yb(
                  l,
                  6,
                  2,
                  t
                    .Nb(l, 7)
                    .transform(e.umActivitiesService.resetMainUserActivity$),
                ),
              ),
              n(l, 9, 0),
              n(l, 10, 0, !1, "E186_settings.webp"));
          },
          function (n, l) {
            n(
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
      function vl(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              30,
              "au3-title-line",
              [["id", "TitleLine"]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              P.b,
              P.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              I.a,
              [M.a, S.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryId: [1, "primaryId"],
                primaryIdEnumType: [2, "primaryIdEnumType"],
                hasSecondaryText: [3, "hasSecondaryText"],
                loaderActive: [4, "loaderActive"],
                hasLoader: [5, "hasLoader"],
              },
              null,
            ),
            t.Pb(131072, an.b, [t.h]),
            (n()(),
            t.yb(
              4,
              0,
              null,
              2,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
                ["id", "InfoButton"],
                ["right", ""],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              null,
              null,
              Y.b,
              Y.a,
            )),
            t.xb(
              5,
              147456,
              null,
              0,
              V.a,
              [Z.a, t.h, b.a, [3, V.a]],
              null,
              null,
            ),
            t.xb(6, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              7,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              9,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              null,
            ),
            t.xb(
              10,
              671744,
              null,
              0,
              ln.a,
              [s.a, en.i, V.a, X.a, ln.b, tn.a],
              { routeInfo: [0, "routeInfo"], infoButton: [1, "infoButton"] },
              null,
            ),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              12,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              13,
              49152,
              null,
              0,
              dn.a,
              [[2, V.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              14,
              147456,
              null,
              0,
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              15,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
            (n()(),
            t.yb(
              16,
              0,
              null,
              2,
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient"],
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
              function (n, l, e) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== n.component.toggleEditMode() && t),
                  t
                );
              },
              Y.b,
              Y.a,
            )),
            t.xb(
              17,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(18, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              19,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              20,
              147456,
              null,
              0,
              V.a,
              [Z.a, t.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(
              21,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              23,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              24,
              49152,
              null,
              0,
              dn.a,
              [[2, V.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              25,
              671744,
              null,
              0,
              _n.a,
              [V.a, en.i, [2, en.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            t.xb(
              26,
              147456,
              null,
              0,
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              27,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
            (n()(), t.hb(16777216, null, 2, 2, null, _l)),
            t.xb(
              29,
              16384,
              null,
              0,
              an.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Pb(131072, an.b, [t.h]),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "TitleLine"),
              n(
                l,
                2,
                0,
                e.showDeletionFailedHint
                  ? e.titleTextEnum.USER_PROFILES
                  : e.titleTextEnum.USERS,
                e.showDeletionFailedHint
                  ? e.titleTextEnum.USER_PROFILES
                  : e.titleTextEnum.USERS,
                e.titleTextEnum,
                !1,
                t.Yb(l, 2, 4, t.Nb(l, 3).transform(e.deletionRequested$$)),
                !0,
              ),
              n(l, 7, 0, "InfoButton"),
              n(l, 9, 0),
              n(
                l,
                10,
                0,
                e.UsersRoutes.UserAccountList.children.OnlineAccount.children
                  .PsoInfo,
                !0,
              ),
              n(l, 12, 0),
              n(l, 13, 0, !1, "E9C1_phone_vcard_info.webp"),
              n(l, 17, 0, "EditButton"),
              n(
                l,
                20,
                0,
                0 === l.context.mib3Let ||
                  e.accountSwitchRequested ||
                  l.parent.parent.context.mib3Let.deletionBlocked,
                l.parent.parent.context.mib3Let.deletionBlockedReason,
              ),
              n(l, 21, 0),
              n(l, 23, 0),
              n(l, 24, 0, !1, "E3EC_edit_mode.webp"),
              n(l, 25, 0, e.editMenuBlocking),
              n(
                l,
                29,
                0,
                !e.showDeletionFailedHint &&
                  t.Yb(
                    l,
                    29,
                    0,
                    t
                      .Nb(l, 30)
                      .transform(
                        e.usermanagementService.primaryUserSettingsAvailable$,
                      ),
                  ),
              ));
          },
          function (n, l) {
            (n(
              l,
              0,
              0,
              t.Nb(l, 2).hideLeftBorder,
              t.Nb(l, 2).hideDividingBorders,
            ),
              n(
                l,
                4,
                0,
                t.Nb(l, 5).combinedDisabled,
                t.Nb(l, 5).useBrighterIcon,
                t.Nb(l, 12).markerClassEnabled,
                t.Nb(l, 13).useItemPlaceholder,
              ),
              n(
                l,
                16,
                0,
                t.Nb(l, 20).combinedDisabled,
                t.Nb(l, 20).useBrighterIcon,
                t.Nb(l, 23).markerClassEnabled,
                t.Nb(l, 24).useItemPlaceholder,
              ));
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
              3,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), t.hb(16777216, null, null, 2, null, vl)),
            t.xb(
              2,
              16384,
              null,
              0,
              vn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, an.b, [t.h]),
            (n()(), t.hb(0, null, null, 0)),
          ],
          function (n, l) {
            var e = l.component;
            n(
              l,
              2,
              0,
              t.Yb(l, 2, 0, t.Nb(l, 3).transform(e.numberOfDeletableUsers$)),
            );
          },
          null,
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
              9,
              "au3-title-line-item",
              [
                ["class", "done-button tl-item--background-gradient"],
                ["done", ""],
                ["id", "DoneButton"],
              ],
              [
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (n, l, e) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== n.component.toggleEditMode() && t),
                  t
                );
              },
              Y.b,
              Y.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              4,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              6,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              49152,
              null,
              0,
              dn.a,
              [[2, V.a]],
              {
                text: [0, "text"],
                centered: [1, "centered"],
                hasOnlyText: [2, "hasOnlyText"],
              },
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
          ],
          function (n, l) {
            (n(l, 1, 0, "DoneButton"),
              n(l, 4, 0),
              n(l, 6, 0),
              n(l, 7, 0, "Fertig", !0, !0));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              t.Nb(l, 6).markerClassEnabled,
              t.Nb(l, 7).useItemPlaceholder,
            );
          },
        );
      }
      function Cl(n) {
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
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient tl-button"],
                ["edit", ""],
                ["id", "SelectAllButton"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (n, l, e) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== n.component.toggleDeleteAllSelection() && t),
                  t
                );
              },
              Y.b,
              Y.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              V.a,
              [Z.a, t.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              49152,
              null,
              0,
              dn.a,
              [[2, V.a]],
              {
                hasText: [0, "hasText"],
                text: [1, "text"],
                centered: [2, "centered"],
                hasOnlyText: [3, "hasOnlyText"],
              },
              null,
            ),
            t.xb(
              9,
              671744,
              null,
              0,
              _n.a,
              [V.a, en.i, [2, en.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "SelectAllButton"),
              n(
                l,
                4,
                0,
                l.parent.parent.parent.context.mib3Let.deletionBlocked ||
                  0 === l.parent.context.mib3Let,
                l.parent.parent.parent.context.mib3Let.deletionBlockedReason,
              ),
              n(l, 5, 0),
              n(l, 7, 0),
              n(l, 8, 0, !0, "Alle ausw\xe4hlen", !0, !0),
              n(l, 9, 0, e.editMenuBlocking));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              t.Nb(l, 4).combinedDisabled,
              t.Nb(l, 4).useBrighterIcon,
              t.Nb(l, 7).markerClassEnabled,
              t.Nb(l, 8).useItemPlaceholder,
            );
          },
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
              11,
              "au3-title-line-item",
              [
                ["class", "tl-item--background-gradient tl-button"],
                ["edit", ""],
                ["id", "DeselectAllButton"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "tl-item--placeholder", null],
              ],
              [[null, "mib3Tap"]],
              function (n, l, e) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== n.component.toggleDeleteAllSelection() && t),
                  t
                );
              },
              Y.b,
              Y.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              V.a,
              [Z.a, t.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              49152,
              null,
              0,
              dn.a,
              [[2, V.a]],
              {
                hasText: [0, "hasText"],
                text: [1, "text"],
                centered: [2, "centered"],
                hasOnlyText: [3, "hasOnlyText"],
              },
              null,
            ),
            t.xb(
              9,
              671744,
              null,
              0,
              _n.a,
              [V.a, en.i, [2, en.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "DeselectAllButton"),
              n(
                l,
                4,
                0,
                l.parent.parent.parent.parent.context.mib3Let.deletionBlocked ||
                  0 === l.parent.parent.context.mib3Let,
                l.parent.parent.parent.parent.context.mib3Let
                  .deletionBlockedReason,
              ),
              n(l, 5, 0),
              n(l, 7, 0),
              n(l, 8, 0, !0, "Alle abw\xe4hlen", !0, !0),
              n(l, 9, 0, e.editMenuBlocking));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              t.Nb(l, 4).combinedDisabled,
              t.Nb(l, 4).useBrighterIcon,
              t.Nb(l, 7).markerClassEnabled,
              t.Nb(l, 8).useItemPlaceholder,
            );
          },
        );
      }
      function Pl(n) {
        return t.ac(
          0,
          [
            (n()(), t.hb(16777216, null, null, 1, null, Nl)),
            t.xb(
              1,
              16384,
              null,
              0,
              an.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), t.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(l, 1, 0, !l.component.showDeletionFailedHint);
          },
          null,
        );
      }
      function Il(n) {
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
              "au3-title-line",
              [["id", "EditTitleLine"]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              P.b,
              P.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              I.a,
              [M.a, S.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryId: [1, "primaryId"],
                primaryIdEnumType: [2, "primaryIdEnumType"],
                hasSecondaryText: [3, "hasSecondaryText"],
                secondaryDeveloperText: [4, "secondaryDeveloperText"],
                secondaryId: [5, "secondaryId"],
                secondaryIdEnumType: [6, "secondaryIdEnumType"],
                loaderActive: [7, "loaderActive"],
                hasLoader: [8, "hasLoader"],
              },
              null,
            ),
            t.Pb(131072, an.b, [t.h]),
            (n()(), t.hb(16777216, null, 3, 1, null, Tl)),
            t.xb(
              5,
              16384,
              null,
              0,
              an.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), t.hb(16777216, null, 4, 1, null, Cl)),
            t.xb(
              7,
              16384,
              null,
              0,
              an.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), t.hb(0, [["deselectAllButton", 2]], null, 0, null, Pl)),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "EditTitleLine"),
              n(
                l,
                2,
                0,
                e.showDeletionFailedHint
                  ? e.titleTextEnum.USER_PROFILES
                  : e.titleTextEnum.USERS,
                e.showDeletionFailedHint
                  ? e.titleTextEnum.USER_PROFILES
                  : e.titleTextEnum.USERS,
                e.titleTextEnum,
                !0,
                e.showDeletionFailedHint
                  ? e.subtitleTextEnum.HINT
                  : e.subtitleTextEnum.DELETE_USERS,
                e.showDeletionFailedHint
                  ? e.subtitleTextEnum.HINT
                  : e.subtitleTextEnum.DELETE_USERS,
                e.subtitleTextEnum,
                t.Yb(l, 2, 7, t.Nb(l, 3).transform(e.deletionRequested$$)),
                !0,
              ),
              n(l, 5, 0, !e.showDeletionFailedHint),
              n(
                l,
                7,
                0,
                !e.showDeletionFailedHint &&
                  e.deletionCandidates.size < l.context.mib3Let,
                t.Nb(l, 8),
              ));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              t.Nb(l, 2).hideLeftBorder,
              t.Nb(l, 2).hideDividingBorders,
            );
          },
        );
      }
      function Ml(n) {
        return t.ac(
          0,
          [
            (n()(), t.hb(16777216, null, null, 2, null, Il)),
            t.xb(
              1,
              16384,
              null,
              0,
              vn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, an.b, [t.h]),
            (n()(), t.hb(0, null, null, 0)),
          ],
          function (n, l) {
            var e = l.component;
            n(
              l,
              1,
              0,
              t.Yb(l, 1, 0, t.Nb(l, 2).transform(e.numberOfDeletableUsers$)),
            );
          },
          null,
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
              12,
              "au3-list-route-item",
              [
                ["class", "list__item--add-account"],
                ["icon", "E89F_connect_add_device.webp"],
                ["id", "AddUserAccount"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              On.b,
              On.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              V.a,
              [Z.a, t.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.Pb(131072, an.b, [t.h]),
            t.xb(3, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              4,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              6,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              null,
            ),
            t.xb(
              7,
              671744,
              null,
              0,
              ln.a,
              [s.a, en.i, V.a, X.a, ln.b, tn.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              9,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              10,
              114688,
              null,
              0,
              Tn.a,
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
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(
              l,
              1,
              0,
              t.Yb(l, 1, 0, t.Nb(l, 2).transform(e.blockAddAccount$)) ||
                e.accountSwitchRequested,
              e.umActivitiesService.addingUsersIsBlocked
                ? e.umActivitiesService.addingUserBlockedDisabledReason
                : "",
            ),
              n(l, 4, 0, "AddUserAccount"),
              n(l, 6, 0),
              n(
                l,
                7,
                0,
                e.myAudiAvailable
                  ? e.UsersRoutes.AddOnlineVsNew
                  : e.UsersRoutes.AddOfflineAccount,
              ),
              n(l, 9, 0),
              n(
                l,
                10,
                0,
                "E89F_connect_add_device.webp",
                "Nutzer hinzuf\xfcgen",
                e.listItemType.ITEM_TYPE_NO_END_ICON,
              ));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              t.Nb(l, 1).combinedDisabled,
              t.Nb(l, 1).useBrighterIcon,
              t.Nb(l, 9).markerClassEnabled,
            );
          },
        );
      }
      function Dl(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              16,
              "au3-list-preview-item",
              [
                ["au3C2Cursor", ""],
                ["class", "list__item--user"],
                ["id", "ActiveUserAccountGoToDetailsListItem"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
                [2, "c2-cursor", null],
                [2, "state-active", null],
              ],
              null,
              null,
              Cn.b,
              Cn.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              V.a,
              [Z.a, t.h, b.a, [3, V.a]],
              null,
              null,
            ),
            t.xb(2, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              ln.a,
              [s.a, en.i, V.a, X.a, ln.b, tn.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.xb(
              7,
              16384,
              null,
              0,
              R.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(8, { lastSyncDate: 0 }),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              10,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              11,
              16384,
              null,
              0,
              Nn.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
            t.xb(
              12,
              49152,
              null,
              0,
              Pn.a,
              [],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                titleNonI18nText: [1, "titleNonI18nText"],
                subtitleDeveloperText: [2, "subtitleDeveloperText"],
                previewDeveloperText: [3, "previewDeveloperText"],
                previewTextId: [4, "previewTextId"],
                previewTextEnum: [5, "previewTextEnum"],
                subtitleLineWithEmptyText: [6, "subtitleLineWithEmptyText"],
                icon: [7, "icon"],
                iconOverlay: [8, "iconOverlay"],
                iconFallback: [9, "iconFallback"],
                iconCategory: [10, "iconCategory"],
                type: [11, "type"],
                previewWidth: [12, "previewWidth"],
              },
              null,
            ),
            t.Rb(13, 2),
            t.xb(
              14,
              147456,
              null,
              0,
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              15,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
            t.xb(
              16,
              16384,
              null,
              0,
              In.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 3, 0, "ActiveUserAccountGoToDetailsListItem"),
              n(l, 5, 0),
              n(l, 6, 0, e.getGoToAccountSettingsRoute(e.activeUser)));
            var a = n(l, 8, 0, l.parent.context.mib3Let.lastSync);
            (n(l, 7, 0, a), n(l, 10, 0), n(l, 11, 0, !0));
            var i =
                (null == e.activeUser ? null : e.activeUser.role) !==
                e.userRoles.AnonymousGuestUser
                  ? null == e.activeUser
                    ? null
                    : e.activeUser.name
                  : void 0,
              o =
                e.ttMode || l.parent.context.mib3Let.lastSync
                  ? "Aktualisiert am {{lastSyncDate}}"
                  : void 0,
              u = l.parent.context.mib3Let.userRoleText,
              r = l.parent.context.mib3Let.userRoleText,
              s = e.userRoleTexts,
              c =
                e.isMyAudiUser(e.activeUser) &&
                !l.parent.context.mib3Let.lastSync,
              b = null == e.activeUser ? null : e.activeUser.avatarSmall,
              d =
                null != e.activeUser && e.activeUser.isSecurityModeEnabled
                  ? "E091_media_drm_protected.webp"
                  : void 0,
              p = t.Yb(
                l,
                12,
                9,
                n(
                  l,
                  13,
                  0,
                  t.Nb(l.parent.parent.parent.parent, 1),
                  e.activeUser,
                  !0,
                ),
              );
            (n(l, 12, 1, [
              "Gast",
              i,
              o,
              u,
              r,
              s,
              c,
              b,
              d,
              p,
              e.listIconCategory,
              e.editMode
                ? e.listItemType.ITEM_TYPE_NO_END_ICON
                : e.listItemType.ITEM_TYPE_SUBMENU,
              e.displayService.isHighResolution ? 475 : 420,
            ]),
              n(l, 16, 0, !0));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              t.Nb(l, 1).combinedDisabled,
              t.Nb(l, 1).useBrighterIcon,
              t.Nb(l, 10).markerClassEnabled,
              t.Nb(l, 11).mib3Active,
              t.Nb(l, 16).mib3Active,
            );
          },
        );
      }
      function Al(n) {
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
              "au3-list-checkbox-item",
              [
                ["au3C2Cursor", ""],
                ["class", "list__item--user"],
                ["id", "ActiveUserAccountDeleteSelectionListItem"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "c2-cursor", null],
                [2, "state-active", null],
              ],
              [[null, "valueChange"]],
              function (n, l, e) {
                var t = !0,
                  a = n.component;
                return (
                  "valueChange" === l &&
                    (t = !1 !== a.toggleDeleteSelection(a.activeUser) && t),
                  t
                );
              },
              Mn.b,
              Mn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              R.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            t.Qb(3, { lastSyncDate: 0 }),
            t.xb(
              4,
              147456,
              null,
              0,
              V.a,
              [Z.a, t.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(
              5,
              49152,
              null,
              0,
              Sn.a,
              [],
              {
                icon: [0, "icon"],
                iconOverlay: [1, "iconOverlay"],
                iconFallback: [2, "iconFallback"],
                titleNonI18nText: [3, "titleNonI18nText"],
                subtitleDeveloperText: [4, "subtitleDeveloperText"],
                hasSubtitle: [5, "hasSubtitle"],
                checked: [6, "checked"],
                listIconCategory: [7, "listIconCategory"],
              },
              { valueChange: "valueChange" },
            ),
            t.Rb(6, 2),
            t.xb(
              7,
              16384,
              null,
              0,
              Nn.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
            t.xb(
              8,
              16384,
              null,
              0,
              In.a,
              [],
              { mib3Active: [0, "mib3Active"] },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            n(l, 1, 0, "ActiveUserAccountDeleteSelectionListItem");
            var a = n(l, 3, 0, l.parent.parent.context.mib3Let.lastSync);
            (n(l, 2, 0, a),
              n(
                l,
                4,
                0,
                l.parent.parent.parent.parent.context.mib3Let.deletionBlocked,
                l.parent.parent.parent.parent.context.mib3Let
                  .deletionBlockedReason,
              ));
            var i = null == e.activeUser ? null : e.activeUser.avatarSmall,
              o =
                null != e.activeUser && e.activeUser.isSecurityModeEnabled
                  ? "E091_media_drm_protected.webp"
                  : void 0,
              u = t.Yb(
                l,
                5,
                2,
                n(
                  l,
                  6,
                  0,
                  t.Nb(l.parent.parent.parent.parent.parent, 1),
                  e.activeUser,
                  !0,
                ),
              );
            (n(
              l,
              5,
              0,
              i,
              o,
              u,
              null == e.activeUser ? null : e.activeUser.name,
              e.ttMode || l.parent.parent.context.mib3Let.lastSync
                ? "Aktualisiert am {{lastSyncDate}}"
                : void 0,
              e.ttMode || !!l.parent.parent.context.mib3Let.lastSync,
              e.deletionCandidates.has(
                null == e.activeUser ? null : e.activeUser.id,
              ),
              e.listIconCategory,
            ),
              n(l, 7, 0, !0),
              n(l, 8, 0, !0));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              t.Nb(l, 4).combinedDisabled,
              t.Nb(l, 4).useBrighterIcon,
              t.Nb(l, 7).mib3Active,
              t.Nb(l, 8).mib3Active,
            );
          },
        );
      }
      function Ll(n) {
        return t.ac(
          0,
          [
            (n()(), t.hb(16777216, [[1, 2]], null, 1, null, Al)),
            t.xb(
              1,
              16384,
              null,
              0,
              an.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), t.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(l, 1, 0, !!l.component.activeUser);
          },
          null,
        );
      }
      function kl(n) {
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
            (n()(), t.hb(16777216, [[1, 2]], null, 1, null, Dl)),
            t.xb(
              2,
              16384,
              null,
              0,
              an.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(),
            t.hb(
              0,
              [
                [1, 2],
                ["deleteActiveUserTemplate", 2],
              ],
              null,
              0,
              null,
              Ll,
            )),
          ],
          function (n, l) {
            var e = l.component;
            n(
              l,
              2,
              0,
              !(!e.activeUser || (e.editMode && e.canBeDeleted(e.activeUser))),
              t.Nb(l, 3),
            );
          },
          null,
        );
      }
      function wl(n) {
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
              "au3-list-route-item",
              [["class", "list__item--user"]],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (n, l, e) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t =
                      !1 !==
                        n.component.attemptUserSwitch(
                          n.parent.context.$implicit,
                        ) && t),
                  t
                );
              },
              On.b,
              On.a,
            )),
            t.xb(1, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              2,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              3,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              5,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              114688,
              null,
              0,
              Tn.a,
              [],
              {
                icon: [0, "icon"],
                iconOverlay: [1, "iconOverlay"],
                iconFallback: [2, "iconFallback"],
                listIconCategory: [3, "listIconCategory"],
                titleDeveloperText: [4, "titleDeveloperText"],
                titleNonI18nText: [5, "titleNonI18nText"],
                type: [6, "type"],
              },
              null,
            ),
            t.Rb(7, 2),
            t.xb(
              8,
              147456,
              null,
              0,
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 3, 0), n(l, 5, 0));
            var a =
                null == l.parent.context.$implicit
                  ? null
                  : l.parent.context.$implicit.avatarSmall,
              i =
                null != l.parent.context.$implicit &&
                l.parent.context.$implicit.isSecurityModeEnabled
                  ? "E091_media_drm_protected.webp"
                  : void 0,
              o = t.Yb(
                l,
                6,
                2,
                n(
                  l,
                  7,
                  0,
                  t.Nb(l.parent.parent.parent.parent, 1),
                  l.parent.context.$implicit,
                  !0,
                ),
              );
            n(
              l,
              6,
              0,
              a,
              i,
              o,
              e.listIconCategory,
              "Gast",
              (null == l.parent.context.$implicit
                ? null
                : l.parent.context.$implicit.role) !==
                e.userRoles.AnonymousGuestUser
                ? null == l.parent.context.$implicit
                  ? null
                  : l.parent.context.$implicit.name
                : void 0,
              e.listItemType.ITEM_TYPE_NO_END_ICON,
            );
          },
          function (n, l) {
            n(l, 0, 0, t.Nb(l, 5).markerClassEnabled);
          },
        );
      }
      function El(n) {
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
              "au3-list-checkbox-item",
              [["class", "list__item--user"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "valueChange"]],
              function (n, l, e) {
                var t = !0;
                return (
                  "valueChange" === l &&
                    (t =
                      !1 !==
                        n.component.toggleDeleteSelection(
                          n.parent.context.$implicit,
                        ) && t),
                  t
                );
              },
              Mn.b,
              Mn.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              V.a,
              [Z.a, t.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              Sn.a,
              [],
              {
                icon: [0, "icon"],
                iconOverlay: [1, "iconOverlay"],
                iconFallback: [2, "iconFallback"],
                titleNonI18nText: [3, "titleNonI18nText"],
                checked: [4, "checked"],
                listIconCategory: [5, "listIconCategory"],
              },
              { valueChange: "valueChange" },
            ),
            t.Rb(3, 2),
          ],
          function (n, l) {
            var e = l.component;
            n(
              l,
              1,
              0,
              l.parent.parent.parent.context.mib3Let.deletionBlocked,
              l.parent.parent.parent.context.mib3Let.deletionBlockedReason,
            );
            var a =
                null == l.parent.context.$implicit
                  ? null
                  : l.parent.context.$implicit.avatarSmall,
              i =
                null != l.parent.context.$implicit &&
                l.parent.context.$implicit.isSecurityModeEnabled
                  ? "E091_media_drm_protected.webp"
                  : void 0,
              o = t.Yb(
                l,
                2,
                2,
                n(
                  l,
                  3,
                  0,
                  t.Nb(l.parent.parent.parent.parent, 1),
                  l.parent.context.$implicit,
                  !0,
                ),
              );
            n(
              l,
              2,
              0,
              a,
              i,
              o,
              null == l.parent.context.$implicit
                ? null
                : l.parent.context.$implicit.name,
              e.deletionCandidates.has(
                null == l.parent.context.$implicit
                  ? null
                  : l.parent.context.$implicit.id,
              ),
              e.listIconCategory,
            );
          },
          function (n, l) {
            n(l, 0, 0, t.Nb(l, 1).combinedDisabled, t.Nb(l, 1).useBrighterIcon);
          },
        );
      }
      function Ul(n) {
        return t.ac(
          0,
          [
            (n()(), t.hb(16777216, [[1, 2]], null, 1, null, wl)),
            t.xb(
              1,
              16384,
              null,
              0,
              an.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(),
            t.hb(
              0,
              [
                [1, 2],
                ["deletableUserTemplate", 2],
              ],
              null,
              0,
              null,
              El,
            )),
          ],
          function (n, l) {
            var e = l.component;
            n(
              l,
              1,
              0,
              !e.editMode || !e.canBeDeleted(l.context.$implicit),
              t.Nb(l, 2),
            );
          },
          null,
        );
      }
      function Rl(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              14,
              "au3-list",
              [
                ["class", "screen__user-list"],
                ["id", "UserList"],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Dn.b,
              Dn.a,
            )),
            t.Sb(6144, null, An.a, null, [Ln.a]),
            t.xb(
              2,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(3, 16384, null, 0, kn.a, [t.l], null, null),
            t.xb(
              4,
              12828672,
              null,
              1,
              Ln.a,
              [
                [2, wn.a],
                [2, En.a],
                [8, null],
                [2, C.a],
                [2, Un.a],
                [2, Rn.a],
                [2, J.b],
                en.i,
                t.z,
                t.h,
                b.a,
                Fn.a,
                Bn.a,
                [2, rn.a],
                K.a,
                [2, en.a],
              ],
              { defaultTemplate: [0, "defaultTemplate"], items: [1, "items"] },
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            t.Pb(131072, an.b, [t.h]),
            (n()(), t.hb(16777216, [[1, 2]], 0, 1, null, Sl)),
            t.xb(
              8,
              16384,
              null,
              0,
              an.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), t.hb(16777216, [[1, 2]], 0, 4, null, kl)),
            t.xb(
              10,
              16384,
              null,
              0,
              vn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Rb(11, 2),
            t.Pb(131072, an.b, [t.h]),
            t.Qb(13, { userRoleText: 0, lastSync: 1 }),
            (n()(),
            t.hb(
              0,
              [
                [1, 2],
                ["inactiveUsersTemplate", 2],
              ],
              0,
              0,
              null,
              Ul,
            )),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 2, 0, "UserList"),
              n(
                l,
                4,
                0,
                t.Nb(l, 14),
                t.Yb(l, 4, 1, t.Nb(l, 6).transform(e.sortedUserList$)),
              ),
              n(l, 8, 0, !e.editMode));
            var a = n(
              l,
              13,
              0,
              t.Yb(
                l,
                10,
                0,
                n(l, 11, 0, t.Nb(l.parent.parent, 0), e.activeUser, !0),
              ),
              t.Yb(l, 10, 0, t.Nb(l, 12).transform(e.lastSyncDateTimeString$)),
            );
            n(l, 10, 0, a);
          },
          function (n, l) {
            n(l, 0, 0, t.Nb(l, 4).showLineNumbers);
          },
        );
      }
      function Fl(n) {
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
              zn.b,
              zn.a,
            )),
            t.xb(
              1,
              49152,
              null,
              0,
              $n.a,
              [Hn.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (n()(),
            t.yb(
              2,
              0,
              null,
              1,
              11,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "PerformDeletionNowButton"],
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
              function (n, l, e) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== n.component.performDeletion() && t),
                  t
                );
              },
              jn.b,
              jn.a,
            )),
            t.xb(
              3,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(4, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              5,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              6,
              147456,
              null,
              0,
              V.a,
              [Z.a, t.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(
              7,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              9,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              10,
              49152,
              null,
              0,
              Wn.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            t.xb(
              11,
              671744,
              null,
              0,
              _n.a,
              [V.a, en.i, [2, en.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, !0),
              n(l, 3, 0, "PerformDeletionNowButton"),
              n(
                l,
                6,
                0,
                0 === e.deletionCandidates.size ||
                  l.parent.context.mib3Let.deletionBlocked,
                l.parent.context.mib3Let.deletionBlockedReason,
              ),
              n(l, 7, 0),
              n(l, 9, 0),
              n(l, 10, 0, "L\xf6schen", !0),
              n(l, 11, 0, e.editMenuBlocking));
          },
          function (n, l) {
            (n(l, 0, 0, t.Nb(l, 1).alignInside, t.Nb(l, 1).alignOutside),
              n(l, 2, 1, [
                t.Nb(l, 6).combinedDisabled,
                t.Nb(l, 6).useBrighterIcon,
                t.Nb(l, 9).markerClassEnabled,
                t.Nb(l, 10).showSeparatorLeft,
                t.Nb(l, 10).showSeparatorRight,
                t.Nb(l, 10).prio1Main,
                t.Nb(l, 10).prio1SmallScale,
                t.Nb(l, 10).prio2SmallScale,
                t.Nb(l, 10).prio1,
                t.Nb(l, 10).prio2,
                t.Nb(l, 10).prio1IconText,
                t.Nb(l, 10).prio1IconOnly,
                t.Nb(l, 10).prio1TextOnly,
                t.Nb(l, 10).prio2IconText,
                t.Nb(l, 10).prio2IconOnly,
                t.Nb(l, 10).prio2TextOnly,
                t.Nb(l, 10).useDefaultMaxWidth,
                t.Nb(l, 10).isDummy,
              ]));
          },
        );
      }
      function Bl(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              14,
              "au3-instruction-text",
              [["id", "DeletionOfSelectedUsersFailed"]],
              null,
              null,
              null,
              Yn.b,
              Yn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              Vn.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryFixedNumberOfLines: [1, "primaryFixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            t.yb(
              3,
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
              zn.b,
              zn.a,
            )),
            t.xb(
              4,
              49152,
              null,
              0,
              $n.a,
              [Hn.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (n()(),
            t.yb(
              5,
              0,
              null,
              1,
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
              function (n, l, e) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = 0 != (n.component.showDeletionFailedHint = !1) && t),
                  t
                );
              },
              jn.b,
              jn.a,
            )),
            t.xb(
              6,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(7, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              8,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              9,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              11,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              12,
              49152,
              null,
              0,
              Wn.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              14,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
          ],
          function (n, l) {
            (n(l, 1, 0, "DeletionOfSelectedUsersFailed"),
              n(
                l,
                2,
                0,
                "Es ist ein Fehler aufgetreten.\nDer L\xf6schvorgang konnte nicht korrekt durchgef\xfchrt werden.",
                3,
              ),
              n(l, 4, 0, !0),
              n(l, 6, 0, "OkButton"),
              n(l, 9, 0),
              n(l, 11, 0),
              n(l, 12, 0, "OK", !0));
          },
          function (n, l) {
            (n(l, 3, 0, t.Nb(l, 4).alignInside, t.Nb(l, 4).alignOutside),
              n(l, 5, 1, [
                t.Nb(l, 11).markerClassEnabled,
                t.Nb(l, 12).showSeparatorLeft,
                t.Nb(l, 12).showSeparatorRight,
                t.Nb(l, 12).prio1Main,
                t.Nb(l, 12).prio1SmallScale,
                t.Nb(l, 12).prio2SmallScale,
                t.Nb(l, 12).prio1,
                t.Nb(l, 12).prio2,
                t.Nb(l, 12).prio1IconText,
                t.Nb(l, 12).prio1IconOnly,
                t.Nb(l, 12).prio1TextOnly,
                t.Nb(l, 12).prio2IconText,
                t.Nb(l, 12).prio2IconOnly,
                t.Nb(l, 12).prio2TextOnly,
                t.Nb(l, 12).useDefaultMaxWidth,
                t.Nb(l, 12).isDummy,
              ]));
          },
        );
      }
      function zl(n) {
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
              "au3-screen",
              [
                ["au3LockOnPSOClamp15Restriction", ""],
                ["class", "screen"],
                ["id", "Screen:UM_ACCOUNT_LIST"],
              ],
              null,
              null,
              null,
              T.b,
              T.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, N.a, [b.a], { id: [0, "id"] }, null),
            t.xb(3, 212992, null, 0, Zn.a, [Gn.a, Hn.a], null, null),
            (n()(), t.hb(16777216, null, 0, 1, null, Ol)),
            t.xb(
              5,
              16384,
              null,
              0,
              an.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), t.hb(0, [["editTitle", 2]], 0, 0, null, Ml)),
            (n()(),
            t.yb(
              7,
              0,
              null,
              0,
              6,
              "au3-disclaimer",
              [],
              null,
              null,
              null,
              qn.b,
              qn.a,
            )),
            t.xb(
              8,
              4440064,
              null,
              0,
              Kn.a,
              [Hn.a, [2, C.a], t.h, b.a],
              null,
              null,
            ),
            (n()(), t.hb(16777216, null, 0, 1, null, Rl)),
            t.xb(
              10,
              16384,
              null,
              0,
              an.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), t.hb(16777216, null, 0, 1, null, Fl)),
            t.xb(
              12,
              16384,
              null,
              0,
              an.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            t.hb(0, [["userDeletionFailedTemplate", 2]], 0, 0, null, Bl)),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "Screen:UM_ACCOUNT_LIST"),
              n(l, 2, 0, "Screen:UM_ACCOUNT_LIST"),
              n(l, 3, 0),
              n(l, 5, 0, !e.editMode, t.Nb(l, 6)),
              n(l, 8, 0),
              n(l, 10, 0, !e.showDeletionFailedHint, t.Nb(l, 13)),
              n(l, 12, 0, e.editMode && !e.showDeletionFailedHint));
          },
          null,
        );
      }
      function $l(n) {
        return t.ac(
          2,
          [
            t.Pb(0, Xn.a, []),
            t.Pb(0, Jn.a, []),
            (n()(), t.hb(16777216, null, null, 4, null, zl)),
            t.xb(
              3,
              16384,
              null,
              0,
              vn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, an.b, [t.h]),
            t.Pb(131072, an.b, [t.h]),
            t.Qb(6, { deletionBlocked: 0, deletionBlockedReason: 1 }),
          ],
          function (n, l) {
            var e = l.component,
              a = n(
                l,
                6,
                0,
                t.Yb(l, 3, 0, t.Nb(l, 4).transform(e.blockDeleteAccount$)),
                t.Yb(
                  l,
                  3,
                  0,
                  t.Nb(l, 5).transform(e.blockDeleteAccountReason$),
                ),
              );
            n(l, 3, 0, a);
          },
          null,
        );
      }
      function Hl(n) {
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
              "au3-account-list",
              [],
              null,
              null,
              null,
              $l,
              yl,
            )),
            t.xb(
              1,
              245760,
              null,
              0,
              fl,
              [Gn.a, dl.b, fn.b, Hn.a, bl.a, xl.a, t.h],
              null,
              null,
            ),
          ],
          function (n, l) {
            n(l, 1, 0);
          },
          null,
        );
      }
      var jl = t.ub("au3-account-list", fl, Hl, {}, {}, []),
        Wl = e("1pak"),
        Yl = e("P+G5"),
        Vl = e("pTuf"),
        Zl = e("SxDb"),
        Gl = e("2OrI"),
        ql = e("1dZb"),
        Kl = e("4u8H"),
        Xl = e("P1io");
      class Jl {
        constructor(n, l, e) {
          ((this.routingService = n),
            (this.umActivitiesService = l),
            (this.usermanagementService = e),
            (this.UsersRoutes = B.b),
            (this.NoEndIconListType = h.rb.ITEM_TYPE_NO_END_ICON),
            (this.destroyed$$ = new f.a(1)));
        }
        ngOnInit() {
          ((this.offlineUser$ = this.usermanagementService.activeUser$.pipe(
            Object(Qn.a)((n) => (hl.b.isLocalUser(n) ? n : void 0)),
            Object(g.a)(this.destroyed$$),
          )),
            (this.userNameText$ = this.offlineUser$.pipe(
              Object(Qn.a)((n) => (n ? n.name : void 0)),
              Object(nl.a)((n, l) => !l),
              Object(g.a)(this.destroyed$$),
            )));
        }
        ngOnDestroy() {
          (this.destroyed$$.next(),
            this.umActivitiesService.setActivityStateBackToIdle(
              this.umActivitiesService.deleteUserActivity$,
            ));
        }
        deleteUser() {
          this.umActivitiesService
            .deleteActiveUser()
            .then((n) => {
              n
                ? this.routingService.enterAppContext(Xl.A)
                : this.routingService.goTo(Kl.a.children.ErrorGeneric);
            })
            .catch(() => {});
        }
      }
      var Ql = t.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{overflow:hidden}.screen[_ngcontent-%COMP%]{align-items:stretch}.screen__disclaimer[_ngcontent-%COMP%]{flex-grow:1}.disclaimer__content-area[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;height:100%;min-width:0}.content-area__options-list[_ngcontent-%COMP%]{font-size:40px;flex-grow:1;align-self:stretch;min-width:0;display:flex;flex-direction:column;align-items:stretch}.options-list__list-item-default[_ngcontent-%COMP%]{height:100px;padding:0 20px}.options-list__list-item-default   .state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}",
          ],
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
              14,
              "au3-list-route-item",
              [
                ["class", "options-list__list-item-default"],
                ["id", "EditAccountChangeNameLink"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              null,
              null,
              On.b,
              On.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              V.a,
              [Z.a, t.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(2, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              ln.a,
              [s.a, en.i, V.a, X.a, ln.b, tn.a],
              {
                routeInfo: [0, "routeInfo"],
                routingExtras: [1, "routingExtras"],
              },
              null,
            ),
            t.Qb(7, { user: 0 }),
            t.Qb(8, { queryParams: 0 }),
            t.Qb(9, { navigationExtras: 0 }),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              11,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              12,
              114688,
              null,
              0,
              Tn.a,
              [],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                type: [1, "type"],
              },
              null,
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              14,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(
              l,
              1,
              0,
              e.umActivitiesService.getActivityDisabled(l.context.mib3Let),
              e.umActivitiesService.getActivityDisabledReason(
                e.umActivitiesService.getActivityDisabled(l.context.mib3Let)
                  ? l.context.mib3Let
                  : void 0,
              ),
            ),
              n(l, 3, 0, "EditAccountChangeNameLink"),
              n(l, 5, 0));
            var t = e.UsersRoutes.AddOfflineAccount,
              a = n(
                l,
                9,
                0,
                n(
                  l,
                  8,
                  0,
                  n(
                    l,
                    7,
                    0,
                    null == l.parent.context.mib3Let
                      ? null
                      : l.parent.context.mib3Let.id,
                  ),
                ),
              );
            (n(l, 6, 0, t, a),
              n(l, 11, 0),
              n(l, 12, 0, "Name \xe4ndern", e.NoEndIconListType));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              t.Nb(l, 1).combinedDisabled,
              t.Nb(l, 1).useBrighterIcon,
              t.Nb(l, 11).markerClassEnabled,
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
              10,
              "au3-list-route-item",
              [
                ["class", "options-list__list-item-default"],
                ["id", "DeleteOfflineAccount"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (n, l, e) {
                var t = !0;
                return (
                  "mib3Tap" === l && (t = !1 !== n.component.deleteUser() && t),
                  t
                );
              },
              On.b,
              On.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              V.a,
              [Z.a, t.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              114688,
              null,
              0,
              Tn.a,
              [],
              {
                titleDeveloperText: [0, "titleDeveloperText"],
                type: [1, "type"],
              },
              null,
            ),
            t.xb(
              9,
              147456,
              null,
              0,
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "DeleteOfflineAccount"),
              n(
                l,
                4,
                0,
                e.umActivitiesService.getActivityDisabled(l.context.ngIf),
                e.umActivitiesService.getActivityDisabledReason(l.context.ngIf),
              ),
              n(l, 5, 0),
              n(l, 7, 0),
              n(
                l,
                8,
                0,
                "Nutzer aus dem Fahrzeug entfernen",
                e.NoEndIconListType,
              ));
          },
          function (n, l) {
            n(
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
              36,
              "au3-screen",
              [
                ["au3LockOnPSOClamp15Restriction", ""],
                ["class", "screen"],
                ["id", "Screen:UM_EDIT_ACCOUNT_OFFLINE_DETAIL"],
              ],
              null,
              null,
              null,
              T.b,
              T.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, N.a, [b.a], { id: [0, "id"] }, null),
            t.xb(3, 212992, null, 0, Zn.a, [Gn.a, Hn.a], null, null),
            (n()(),
            t.yb(
              4,
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
              P.b,
              P.a,
            )),
            t.xb(
              5,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              6,
              49152,
              null,
              0,
              I.a,
              [M.a, S.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryNonI18nText: [1, "secondaryNonI18nText"],
              },
              null,
            ),
            t.Pb(131072, an.b, [t.h]),
            (n()(),
            t.yb(
              8,
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
              function (n, l, e) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== n.component.routingService.goBack() && t),
                  t
                );
              },
              Y.b,
              Y.a,
            )),
            t.xb(9, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              10,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              12,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              13,
              147456,
              null,
              0,
              Wl.a,
              [b.a, Yl.a, t.l, [2, X.a], [2, V.a]],
              null,
              null,
            ),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              15,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              16,
              49152,
              null,
              0,
              dn.a,
              [[2, V.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              18,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
            (n()(),
            t.yb(
              19,
              0,
              null,
              0,
              17,
              "au3-disclaimer",
              [["class", "screen__disclaimer"]],
              null,
              null,
              null,
              qn.b,
              qn.a,
            )),
            t.xb(
              20,
              4440064,
              null,
              0,
              Kn.a,
              [Hn.a, [2, C.a], t.h, b.a],
              null,
              null,
            ),
            (n()(),
            t.yb(
              21,
              0,
              null,
              0,
              15,
              "au3-pso-activity-in-process-disclaimer",
              [["class", "disclaimer__content-area"]],
              null,
              null,
              null,
              Vl.b,
              Vl.a,
            )),
            t.xb(
              22,
              245760,
              null,
              0,
              Zl.a,
              [],
              {
                activity$: [0, "activity$"],
                waitingIndicatorText: [1, "waitingIndicatorText"],
              },
              null,
            ),
            (n()(),
            t.yb(
              23,
              0,
              null,
              0,
              11,
              "au3-list",
              [
                ["class", "content-area__options-list"],
                ["id", "EditAccountOptionsList"],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Dn.b,
              Dn.a,
            )),
            t.Sb(6144, null, An.a, null, [Ln.a]),
            t.xb(
              25,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(26, 16384, null, 0, kn.a, [t.l], null, null),
            t.xb(
              27,
              12828672,
              null,
              1,
              Ln.a,
              [
                [2, wn.a],
                [2, En.a],
                [8, null],
                [2, C.a],
                [2, Un.a],
                [2, Rn.a],
                [2, J.b],
                en.i,
                t.z,
                t.h,
                b.a,
                Fn.a,
                Bn.a,
                [2, rn.a],
                K.a,
                [2, en.a],
              ],
              null,
              null,
            ),
            t.Tb(603979776, 1, { template: 0 }),
            (n()(), t.hb(16777216, [[1, 2]], 0, 2, null, ne)),
            t.xb(
              30,
              16384,
              null,
              0,
              vn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, an.b, [t.h]),
            (n()(), t.hb(16777216, [[1, 2]], 0, 2, null, le)),
            t.xb(
              33,
              16384,
              null,
              0,
              an.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Pb(131072, an.b, [t.h]),
            (n()(),
            t.yb(
              35,
              0,
              null,
              0,
              1,
              "au3-user-account-info-decorator-view",
              [],
              null,
              null,
              null,
              Gl.b,
              Gl.a,
            )),
            t.xb(36, 49152, null, 0, ql.a, [], { user: [0, "user"] }, null),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "Screen:UM_EDIT_ACCOUNT_OFFLINE_DETAIL"),
              n(l, 2, 0, "Screen:UM_EDIT_ACCOUNT_OFFLINE_DETAIL"),
              n(l, 3, 0),
              n(l, 5, 0, ""),
              n(
                l,
                6,
                0,
                "Nutzer",
                t.Yb(l, 6, 1, t.Nb(l, 7).transform(e.userNameText$)),
              ),
              n(l, 10, 0, "BackButton"),
              n(l, 12, 0),
              n(l, 15, 0),
              n(l, 16, 0, !1, "E163_Backbutton.webp"),
              n(l, 20, 0),
              n(
                l,
                22,
                0,
                e.umActivitiesService.deleteUserActivity$,
                "Der L\xf6schvorgang l\xe4uft.\nBitte warten...",
              ),
              n(l, 25, 0, "EditAccountOptionsList"),
              n(l, 27, 0),
              n(
                l,
                30,
                0,
                t.Yb(
                  l,
                  30,
                  0,
                  t
                    .Nb(l, 31)
                    .transform(e.umActivitiesService.editOfflineUserActivity$),
                ),
              ),
              n(
                l,
                33,
                0,
                t.Yb(
                  l,
                  33,
                  0,
                  t
                    .Nb(l, 34)
                    .transform(e.umActivitiesService.deleteUserActivity$),
                ),
              ),
              n(l, 36, 0, l.context.mib3Let));
          },
          function (n, l) {
            (n(
              l,
              4,
              0,
              t.Nb(l, 6).hideLeftBorder,
              t.Nb(l, 6).hideDividingBorders,
            ),
              n(
                l,
                8,
                0,
                t.Nb(l, 15).markerClassEnabled,
                t.Nb(l, 16).useItemPlaceholder,
              ),
              n(l, 23, 0, t.Nb(l, 27).showLineNumbers));
          },
        );
      }
      function te(n) {
        return t.ac(
          2,
          [
            (n()(), t.hb(16777216, null, null, 2, null, ee)),
            t.xb(
              1,
              16384,
              null,
              0,
              vn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, an.b, [t.h]),
          ],
          function (n, l) {
            var e = l.component;
            n(l, 1, 0, t.Yb(l, 1, 0, t.Nb(l, 2).transform(e.offlineUser$)));
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
              1,
              "au3-offline-account",
              [],
              null,
              null,
              null,
              te,
              Ql,
            )),
            t.xb(1, 245760, null, 0, Jl, [s.a, dl.b, Gn.a], null, null),
          ],
          function (n, l) {
            n(l, 1, 0);
          },
          null,
        );
      }
      var ie = t.ub("au3-offline-account", Jl, ae, {}, {}, []),
        oe = e("HVUF"),
        ue = e("B3Zb"),
        re = e("DElP"),
        se = e("ROBh");
      class ce {
        constructor(n, l, e) {
          ((this.routingService = n),
            (this.popupManager = l),
            (this.userManagementService = e),
            (this.iconCategory = h.Z),
            (this.scaleMode = h.ab),
            (this.guestUser$ = this.userManagementService.anonymousGuestUser$),
            (this.resetOngoing$ = Object(se.a)(!1)));
        }
        resetAccount() {
          this.guestUser$
            .pipe(Object(ol.a)(1), Object(h.Qd)(this))
            .subscribe((n) => {
              this.popupManager
                .request(h.Ob.POPUP_UM_EDIT_ACCOUNT_RESET_DIALOG, { data: n })
                .then((n) => {});
            });
        }
        ngOnDestroy() {}
      }
      var be = t.wb({
        encapsulation: 0,
        styles: [
          [
            '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{display:block}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{height:100%;overflow:hidden}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch}.text-area__label[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:35px;height:100%}.content-area__text-area[_ngcontent-%COMP%]{flex-grow:1;padding-right:30px;align-self:stretch;width:calc(100% - 315px)}.content-area[_ngcontent-%COMP%]{padding:30px 0;display:flex;flex-grow:1;overflow:hidden;width:100%}',
          ],
        ],
        data: {},
      });
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
              9,
              "div",
              [["class", "content-area"]],
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
              4,
              "au3-disclaimer",
              [["class", "content-area__text-area"]],
              null,
              null,
              null,
              qn.b,
              qn.a,
            )),
            t.xb(
              2,
              4440064,
              null,
              0,
              Kn.a,
              [Hn.a, [2, C.a], t.h, b.a],
              null,
              null,
            ),
            (n()(),
            t.yb(
              3,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [
                ["class", "text-area__label"],
                ["id", "GuestAccountInfo"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              L.b,
              L.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              245760,
              null,
              0,
              k.a,
              [[6, C.a], w.a, t.h, t.l, t.D, [2, E.a], [2, U.a], [2, R.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            t.yb(
              6,
              0,
              null,
              null,
              3,
              "au3-icon",
              [
                ["au3ImageLockingCategory", ""],
                ["fileName", "/icons/cover/E3FB_uc_guest.webp"],
                ["id", "GuestAccountProfilePicture"],
              ],
              [
                [2, "icon-component--hidden", null],
                [2, "lock-state-hidden", null],
                [2, "lock-state-faded", null],
              ],
              null,
              null,
              oe.b,
              oe.a,
            )),
            t.xb(
              7,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              8,
              4243456,
              null,
              0,
              ue.b,
              [b.a, t.z],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                scaleMode: [2, "scaleMode"],
              },
              null,
            ),
            t.xb(9, 212992, null, 0, re.a, [en.i, [2, en.a], t.h], null, null),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 2, 0),
              n(l, 4, 0, "GuestAccountInfo"),
              n(
                l,
                5,
                0,
                'Der Gastnutzer kann verwendet werden, um Einstellungen am\nFahrzeug vorzunehmen ohne die anderen Nutzer zu ver\xe4ndern.\nDies bedeutet, dass alle vorgenommenen Einstellungen des\nGastnutzers, auch hier gespeichert werden. Diese Einstellungen\nk\xf6nnen \xfcber "Zur\xfccksetzen" auf den Ursprungswert gesetzt\nwerden.\nDer Gastnutzer l\xe4d immer die verwendeten Einstellungen des\nletzten Nutzers.',
                "GuestAccountInfo",
                7,
              ),
              n(l, 7, 0, "GuestAccountProfilePicture"),
              n(
                l,
                8,
                0,
                "/icons/cover/E3FB_uc_guest.webp",
                e.iconCategory.Cover,
                e.scaleMode.Cover,
              ),
              n(l, 9, 0));
          },
          function (n, l) {
            (n(
              l,
              3,
              0,
              t.Nb(l, 5).backgroundColor,
              t.Nb(l, 5).fixedNumberOfLines,
              t.Nb(l, 5).mayContainLatinCharsForArabic,
              t.Nb(l, 5).shortenWithEllipsisForArabic,
            ),
              n(
                l,
                6,
                0,
                t.Nb(l, 8).iconComponentHidden,
                t.Nb(l, 9).hide,
                t.Nb(l, 9).fade,
              ));
          },
        );
      }
      function pe(n) {
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
              "au3-init-view",
              [["id", "WaitingIndicator"]],
              null,
              null,
              null,
              D.b,
              D.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 49152, null, 0, A.a, [], null, null),
            (n()(),
            t.yb(
              3,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [["id", "WaitForGuestAccountToFinishResetHint"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              L.b,
              L.a,
            )),
            t.xb(
              4,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              5,
              245760,
              null,
              0,
              k.a,
              [[6, C.a], w.a, t.h, t.l, t.D, [2, E.a], [2, U.a], [2, R.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, l) {
            (n(l, 1, 0, "WaitingIndicator"),
              n(l, 4, 0, "WaitForGuestAccountToFinishResetHint"),
              n(
                l,
                5,
                0,
                "Die Bearbeitung l\xe4uft.\nBitte warten...",
                "WaitForGuestAccountToFinishResetHint",
                4,
              ));
          },
          function (n, l) {
            n(
              l,
              3,
              0,
              t.Nb(l, 5).backgroundColor,
              t.Nb(l, 5).fixedNumberOfLines,
              t.Nb(l, 5).mayContainLatinCharsForArabic,
              t.Nb(l, 5).shortenWithEllipsisForArabic,
            );
          },
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
              21,
              "au3-screen",
              [
                ["au3LockOnPSOClamp15Restriction", ""],
                ["class", "screen"],
                ["id", "Screen:UM_EDIT_ACCOUNT_GUEST_DETAIL"],
              ],
              null,
              null,
              null,
              T.b,
              T.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, N.a, [b.a], { id: [0, "id"] }, null),
            t.xb(3, 212992, null, 0, Zn.a, [Gn.a, Hn.a], null, null),
            (n()(),
            t.yb(
              4,
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
              P.b,
              P.a,
            )),
            t.xb(
              5,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              6,
              49152,
              null,
              0,
              I.a,
              [M.a, S.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                secondaryDeveloperText: [1, "secondaryDeveloperText"],
              },
              null,
            ),
            (n()(),
            t.yb(
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
              function (n, l, e) {
                var t = !0;
                return (
                  "mib3Tap" === l &&
                    (t = !1 !== n.component.routingService.goBack() && t),
                  t
                );
              },
              Y.b,
              Y.a,
            )),
            t.xb(8, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              9,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              11,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              Wl.a,
              [b.a, Yl.a, t.l, [2, X.a], [2, V.a]],
              null,
              null,
            ),
            t.xb(13, 16384, null, 0, U.a, [], null, null),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              15,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              16,
              49152,
              null,
              0,
              dn.a,
              [[2, V.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              18,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
            (n()(), t.hb(16777216, null, 0, 1, null, de)),
            t.xb(
              20,
              16384,
              null,
              0,
              an.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), t.hb(0, [["resetOngoingTemplate", 2]], 0, 0, null, pe)),
          ],
          function (n, l) {
            (n(l, 1, 0, "Screen:UM_EDIT_ACCOUNT_GUEST_DETAIL"),
              n(l, 2, 0, "Screen:UM_EDIT_ACCOUNT_GUEST_DETAIL"),
              n(l, 3, 0),
              n(l, 5, 0, ""),
              n(l, 6, 0, "Nutzer", "Gast"),
              n(l, 9, 0, "BackButton"),
              n(l, 11, 0),
              n(l, 15, 0),
              n(l, 16, 0, !1, "E163_Backbutton.webp"),
              n(l, 20, 0, !l.context.mib3Let, t.Nb(l, 21)));
          },
          function (n, l) {
            (n(
              l,
              4,
              0,
              t.Nb(l, 6).hideLeftBorder,
              t.Nb(l, 6).hideDividingBorders,
            ),
              n(
                l,
                7,
                0,
                t.Nb(l, 15).markerClassEnabled,
                t.Nb(l, 16).useItemPlaceholder,
              ));
          },
        );
      }
      function me(n) {
        return t.ac(
          2,
          [
            (n()(), t.hb(16777216, null, null, 2, null, he)),
            t.xb(
              1,
              16384,
              null,
              0,
              vn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, an.b, [t.h]),
          ],
          function (n, l) {
            var e = l.component;
            n(l, 1, 0, t.Yb(l, 1, 0, t.Nb(l, 2).transform(e.resetOngoing$)));
          },
          null,
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
              1,
              "au3-guest-account",
              [],
              null,
              null,
              null,
              me,
              be,
            )),
            t.xb(1, 180224, null, 0, ce, [B.c, xl.a, Gn.a], null, null),
          ],
          null,
          null,
        );
      }
      var fe = t.ub("au3-guest-account", ce, ge, {}, {}, []),
        xe = e("VFXE");
      class ye {
        constructor(n, l, e, t) {
          ((this.routingService = n),
            (this.umActivitiesService = l),
            (this.usermanagementService = e),
            (this.UsersRoutes = B.b),
            (this.ftwBlocking = xe.b),
            (this.destroyed$$ = new f.a(1)),
            (this.actionButtonClicked = !1),
            (this.enteredViaUiTransition =
              !!t.snapshot.queryParams &&
              "true" ===
                t.snapshot.queryParams[hl.a.ROUTED_HERE_VIA_UI_TRANSITION]));
        }
        ngOnInit() {
          hl.b
            .awaitPrivacyDisabledReasonDisappears$(
              this.umActivitiesService.addOnlineUserActivity$,
            )
            .pipe(
              Object(tl.a)(() => this.actionButtonClicked),
              Object(g.a)(this.destroyed$$),
            )
            .subscribe(() => {
              this.routingService.goTo(B.b.MyAudiLogin);
            });
        }
        ngAfterViewInit() {
          this.enteredViaUiTransition &&
            this.usermanagementService.confirmUiTransition(B.b.AddOnlineVsNew);
        }
        startFTW() {
          this.umActivitiesService
            .awaitFtwPopupThen(dl.a.ADD_OFFLINE_ACCOUNT)
            .then(() => this.routingService.goTo(B.b.UserAccountList));
        }
        disabledLoginButtonClicked() {
          this.actionButtonClicked = !0;
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        back() {
          this.enteredViaUiTransition
            ? this.routingService.enterAppContext(Xl.A)
            : this.routingService.goBack();
        }
      }
      var _e = t.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{height:100%;display:block}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{overflow:hidden}.screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch}",
          ],
        ],
        data: {},
      });
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
              [[null, "mib3DisabledTap"]],
              function (n, l, e) {
                var t = !0;
                return (
                  "mib3DisabledTap" === l &&
                    (t = !1 !== n.component.disabledLoginButtonClicked() && t),
                  t
                );
              },
              jn.b,
              jn.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              V.a,
              [Z.a, t.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              { tap: "mib3DisabledTap" },
            ),
            t.xb(2, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              ln.a,
              [s.a, en.i, V.a, X.a, ln.b, tn.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              49152,
              null,
              0,
              Wn.a,
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
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(
              l,
              1,
              0,
              e.umActivitiesService.getActivityDisabled(l.context.mib3Let),
              e.umActivitiesService.getActivityDisabledReason(
                l.context.mib3Let,
              ),
            ),
              n(l, 3, 0, "LoginButton"),
              n(l, 5, 0),
              n(l, 6, 0, e.UsersRoutes.MyAudiLogin),
              n(l, 8, 0),
              n(l, 9, 0, "Sofort anmelden", !0));
          },
          function (n, l) {
            n(l, 0, 1, [
              t.Nb(l, 1).combinedDisabled,
              t.Nb(l, 1).useBrighterIcon,
              t.Nb(l, 8).markerClassEnabled,
              t.Nb(l, 9).showSeparatorLeft,
              t.Nb(l, 9).showSeparatorRight,
              t.Nb(l, 9).prio1Main,
              t.Nb(l, 9).prio1SmallScale,
              t.Nb(l, 9).prio2SmallScale,
              t.Nb(l, 9).prio1,
              t.Nb(l, 9).prio2,
              t.Nb(l, 9).prio1IconText,
              t.Nb(l, 9).prio1IconOnly,
              t.Nb(l, 9).prio1TextOnly,
              t.Nb(l, 9).prio2IconText,
              t.Nb(l, 9).prio2IconOnly,
              t.Nb(l, 9).prio2TextOnly,
              t.Nb(l, 9).useDefaultMaxWidth,
              t.Nb(l, 9).isDummy,
            ]);
          },
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
              9,
              "au3-instruction-text",
              [["id", "WhatDoYouWantToDoHint"]],
              null,
              null,
              null,
              Yn.b,
              Yn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              Vn.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryFixedNumberOfLines: [1, "primaryFixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            t.yb(
              3,
              0,
              null,
              1,
              6,
              "au3-operation-panel",
              [],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              zn.b,
              zn.a,
            )),
            t.xb(
              4,
              49152,
              null,
              0,
              $n.a,
              [Hn.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (n()(), t.hb(16777216, null, 1, 2, null, ve)),
            t.xb(
              6,
              16384,
              null,
              0,
              vn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, an.b, [t.h]),
            (n()(), t.hb(16777216, null, 1, 1, null, Oe)),
            t.xb(
              9,
              540672,
              null,
              0,
              an.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "WhatDoYouWantToDoHint"),
              n(
                l,
                2,
                0,
                "M\xf6chten Sie sich mit Ihrem myAudi Account sofort\nanmelden oder Ihr Fahrzeug vollst\xe4ndig \xfcber den\nEinrichtungsassistenten konfigurieren?",
                4,
              ),
              n(l, 4, 0, !0),
              n(
                l,
                6,
                0,
                t.Yb(
                  l,
                  6,
                  0,
                  t
                    .Nb(l, 7)
                    .transform(e.umActivitiesService.addOnlineUserActivity$),
                ),
              ),
              n(l, 9, 0, t.Nb(l.parent, 24)));
          },
          function (n, l) {
            n(l, 3, 0, t.Nb(l, 4).alignInside, t.Nb(l, 4).alignOutside);
          },
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
              11,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "AddOfflineUserButton"],
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
              null,
              null,
              jn.b,
              jn.a,
            )),
            t.xb(
              1,
              147456,
              null,
              0,
              V.a,
              [Z.a, t.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.xb(2, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              3,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              671744,
              null,
              0,
              ln.a,
              [s.a, en.i, V.a, X.a, ln.b, tn.a],
              { routeInfo: [0, "routeInfo"] },
              null,
            ),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              8,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              9,
              49152,
              null,
              0,
              Wn.a,
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
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(
              l,
              1,
              0,
              e.umActivitiesService.getActivityDisabled(l.context.mib3Let),
              e.umActivitiesService.getActivityDisabledReason(
                l.context.mib3Let,
              ),
            ),
              n(l, 3, 0, "AddOfflineUserButton"),
              n(l, 5, 0),
              n(l, 6, 0, e.UsersRoutes.AddOfflineAccount),
              n(l, 8, 0),
              n(l, 9, 0, "Sofort hinzuf\xfcgen", !0));
          },
          function (n, l) {
            n(l, 0, 1, [
              t.Nb(l, 1).combinedDisabled,
              t.Nb(l, 1).useBrighterIcon,
              t.Nb(l, 8).markerClassEnabled,
              t.Nb(l, 9).showSeparatorLeft,
              t.Nb(l, 9).showSeparatorRight,
              t.Nb(l, 9).prio1Main,
              t.Nb(l, 9).prio1SmallScale,
              t.Nb(l, 9).prio2SmallScale,
              t.Nb(l, 9).prio1,
              t.Nb(l, 9).prio2,
              t.Nb(l, 9).prio1IconText,
              t.Nb(l, 9).prio1IconOnly,
              t.Nb(l, 9).prio1TextOnly,
              t.Nb(l, 9).prio2IconText,
              t.Nb(l, 9).prio2IconOnly,
              t.Nb(l, 9).prio2TextOnly,
              t.Nb(l, 9).useDefaultMaxWidth,
              t.Nb(l, 9).isDummy,
            ]);
          },
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
              9,
              "au3-instruction-text",
              [["id", "WhatDoYouWantToDoOfflineMarketsHint"]],
              null,
              null,
              null,
              Yn.b,
              Yn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              2,
              49152,
              null,
              0,
              Vn.a,
              [],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                primaryFixedNumberOfLines: [1, "primaryFixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            t.yb(
              3,
              0,
              null,
              1,
              6,
              "au3-operation-panel",
              [],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              zn.b,
              zn.a,
            )),
            t.xb(
              4,
              49152,
              null,
              0,
              $n.a,
              [Hn.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (n()(), t.hb(16777216, null, 1, 2, null, Ce)),
            t.xb(
              6,
              16384,
              null,
              0,
              vn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, an.b, [t.h]),
            (n()(), t.hb(16777216, null, 1, 1, null, Ne)),
            t.xb(
              9,
              540672,
              null,
              0,
              an.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "WhatDoYouWantToDoOfflineMarketsHint"),
              n(
                l,
                2,
                0,
                "M\xf6chten Sie sofort einen Nutzer\nhinzuf\xfcgen oder Ihr Fahrzeug vollst\xe4ndig \xfcber den\nEinrichtungsassistenten konfigurieren?",
                4,
              ),
              n(l, 4, 0, !0),
              n(
                l,
                6,
                0,
                t.Yb(
                  l,
                  6,
                  0,
                  t
                    .Nb(l, 7)
                    .transform(e.umActivitiesService.addOfflineUserActivity$),
                ),
              ),
              n(l, 9, 0, t.Nb(l.parent, 24)));
          },
          function (n, l) {
            n(l, 3, 0, t.Nb(l, 4).alignInside, t.Nb(l, 4).alignOutside);
          },
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
              11,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "StartFirstTimeWizardButton"],
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
              function (n, l, e) {
                var t = !0;
                return (
                  "mib3Tap" === l && (t = !1 !== n.component.startFTW() && t),
                  t
                );
              },
              jn.b,
              jn.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              3,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              V.a,
              [Z.a, t.h, b.a, [3, V.a]],
              null,
              null,
            ),
            t.xb(
              5,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              7,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              8,
              49152,
              null,
              0,
              Wn.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            t.xb(
              9,
              671744,
              null,
              0,
              _n.a,
              [V.a, en.i, [2, en.a]],
              { lockingKeys: [0, "lockingKeys"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              11,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "StartFirstTimeWizardButton"),
              n(l, 5, 0),
              n(l, 7, 0),
              n(l, 8, 0, "Einrichtung starten", !0),
              n(l, 9, 0, e.ftwBlocking));
          },
          function (n, l) {
            n(l, 0, 1, [
              t.Nb(l, 4).combinedDisabled,
              t.Nb(l, 4).useBrighterIcon,
              t.Nb(l, 7).markerClassEnabled,
              t.Nb(l, 8).showSeparatorLeft,
              t.Nb(l, 8).showSeparatorRight,
              t.Nb(l, 8).prio1Main,
              t.Nb(l, 8).prio1SmallScale,
              t.Nb(l, 8).prio2SmallScale,
              t.Nb(l, 8).prio1,
              t.Nb(l, 8).prio2,
              t.Nb(l, 8).prio1IconText,
              t.Nb(l, 8).prio1IconOnly,
              t.Nb(l, 8).prio1TextOnly,
              t.Nb(l, 8).prio2IconText,
              t.Nb(l, 8).prio2IconOnly,
              t.Nb(l, 8).prio2TextOnly,
              t.Nb(l, 8).useDefaultMaxWidth,
              t.Nb(l, 8).isDummy,
            ]);
          },
        );
      }
      function Me(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              24,
              "au3-screen",
              [
                ["au3LockOnPSOClamp15Restriction", ""],
                ["class", "screen"],
                ["id", "Screen:UM_ADD_ONLINE_VS_NEW_ACCOUNT"],
              ],
              null,
              null,
              null,
              T.b,
              T.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, N.a, [b.a], { id: [0, "id"] }, null),
            t.xb(3, 212992, null, 0, Zn.a, [Gn.a, Hn.a], null, null),
            (n()(),
            t.yb(
              4,
              0,
              null,
              0,
              13,
              "au3-title-line",
              [["id", "Titleline"]],
              [
                [2, "tl--text-only", null],
                [2, "tl--no-dividing-border", null],
              ],
              null,
              null,
              P.b,
              P.a,
            )),
            t.xb(
              5,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              6,
              49152,
              null,
              0,
              I.a,
              [M.a, S.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                hasSecondaryText: [1, "hasSecondaryText"],
              },
              null,
            ),
            (n()(),
            t.yb(
              7,
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
              function (n, l, e) {
                var t = !0;
                return (
                  "mib3Tap" === l && (t = !1 !== n.component.back() && t),
                  t
                );
              },
              Y.b,
              Y.a,
            )),
            t.xb(8, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              9,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              11,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              Wl.a,
              [b.a, Yl.a, t.l, [2, X.a], [2, V.a]],
              null,
              null,
            ),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              14,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              15,
              49152,
              null,
              0,
              dn.a,
              [[2, V.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
            (n()(),
            t.yb(
              18,
              0,
              null,
              0,
              6,
              "au3-disclaimer",
              [],
              null,
              null,
              null,
              qn.b,
              qn.a,
            )),
            t.xb(
              19,
              4440064,
              null,
              0,
              Kn.a,
              [Hn.a, [2, C.a], t.h, b.a],
              null,
              null,
            ),
            (n()(), t.hb(16777216, null, 0, 2, null, Te)),
            t.xb(
              21,
              16384,
              null,
              0,
              an.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            t.Pb(131072, an.b, [t.h]),
            (n()(), t.hb(0, [["offlineMarketsTemplate", 2]], 0, 0, null, Pe)),
            (n()(), t.hb(0, [["startFtwButtonTemplate", 2]], 0, 0, null, Ie)),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "Screen:UM_ADD_ONLINE_VS_NEW_ACCOUNT"),
              n(l, 2, 0, "Screen:UM_ADD_ONLINE_VS_NEW_ACCOUNT"),
              n(l, 3, 0),
              n(l, 5, 0, "Titleline"),
              n(l, 6, 0, "Nutzereinrichtung", !1),
              n(l, 9, 0, "BackButton"),
              n(l, 11, 0),
              n(l, 14, 0),
              n(l, 15, 0, !1, "E163_Backbutton.webp"),
              n(l, 19, 0),
              n(
                l,
                21,
                0,
                !!t.Yb(
                  l,
                  21,
                  0,
                  t
                    .Nb(l, 22)
                    .transform(e.umActivitiesService.addOnlineUserActivity$),
                ),
                t.Nb(l, 23),
              ));
          },
          function (n, l) {
            (n(
              l,
              4,
              0,
              t.Nb(l, 6).hideLeftBorder,
              t.Nb(l, 6).hideDividingBorders,
            ),
              n(
                l,
                7,
                0,
                t.Nb(l, 14).markerClassEnabled,
                t.Nb(l, 15).useItemPlaceholder,
              ));
          },
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
              1,
              "au3-add-online-vs-new",
              [],
              null,
              null,
              null,
              Me,
              _e,
            )),
            t.xb(1, 4440064, null, 0, ye, [s.a, dl.b, Gn.a, d.a], null, null),
          ],
          function (n, l) {
            n(l, 1, 0);
          },
          null,
        );
      }
      var De = t.ub("au3-add-online-vs-new", ye, Se, {}, {}, []),
        Ae = e("TBuG"),
        Le = e("/Efp"),
        ke = e("u0hB"),
        we = e("KczA"),
        Ee = e("Mev3"),
        Ue = e("3OpO"),
        Re = e("dLds"),
        Fe = e("EM0g"),
        Be = e("tZxQ"),
        ze = e("1qmX"),
        $e = e("ZUXc"),
        He = e("6ifu"),
        je = e("iEqp"),
        We = e("Oguw"),
        Ye = e("KSZN"),
        Ve = e("6Oco"),
        Ze = e("7SLS"),
        Ge = e("AEBN"),
        qe = e("u/tF");
      class Ke {
        constructor(n, l, e, t, a, i, o, u) {
          ((this.routingService = n),
            (this.usermanagementService = l),
            (this.umActivitiesService = e),
            (this.textInputService = t),
            (this.contextDataService = a),
            (this.configService = i),
            (this.changeDetectorRef = o),
            (this.destroyed$$ = new f.a(1)),
            (this.savingProcessOngoing$$ = new ul.a(!1)));
          const r =
            !u.snapshot.queryParams ||
            "true" !==
              u.snapshot.queryParams[
                hl.a.KEEP_INPUT_FIELD_CONTENT_WHEN_ENTERING_SCREEN
              ];
          ((this.accountToRenameId = u.snapshot.queryParams
            ? u.snapshot.queryParams.user
            : null),
            (this.returnToFTW =
              !!u.snapshot.queryParams &&
              "true" ===
                u.snapshot.queryParams[hl.a.RETURN_TO_FIRST_TIME_WIZARD]),
            (this.userNameInputField$ = this.textInputService.getInputField(
              "PERSONALIZATION_EDIT_OFFLINE_NAME",
              Ge.e.TIF_ID_91_INPUT_FIELD_USER_NAME_PROFILE,
              r ? "" : void 0,
            )),
            (this.accountToRename$ = this.accountToRenameId
              ? this.usermanagementService.userForId$(this.accountToRenameId)
              : Object(se.a)(void 0)),
            (this.requestedActivity$ = this.accountToRenameId
              ? this.umActivitiesService.editOfflineUserActivity$
              : this.umActivitiesService.addOfflineUserActivity$),
            (this.transitionFromNativeUi =
              !!u.snapshot.queryParams &&
              "true" ===
                u.snapshot.queryParams[hl.a.ROUTED_HERE_VIA_UI_TRANSITION]));
        }
        ngAfterViewInit() {
          this.transitionFromNativeUi &&
            this.usermanagementService.confirmUiTransition(
              B.b.AddOfflineAccount,
            );
        }
        ngOnInit() {
          ((this.isSavingOrBlocked$ = Object(rl.b)(
            this.requestedActivity$.pipe(
              Object(Qn.a)((n) => hl.b.activityIsDisabled(n)),
              Object(nl.a)(),
            ),
            this.savingProcessOngoing$$,
            this.userNameInputField$.pipe(
              Object(Qn.a)(
                (n) =>
                  !!n &&
                  Object(qe.b)(
                    n,
                    this.contextDataService.getContextData(n.contextId),
                  ),
              ),
              Object(nl.a)(),
            ),
          ).pipe(
            Object(Qn.a)(([n, l, e]) => n || l || !e),
            Object(al.a)(!0),
            Object(nl.a)(),
            Object(g.a)(this.destroyed$$),
          )),
            this.accountToRenameId &&
              Object(rl.b)(
                this.accountToRename$,
                this.userNameInputField$.pipe(Object(tl.a)(h.wd)),
              )
                .pipe(Object(ol.a)(1), Object(g.a)(this.destroyed$$))
                .subscribe(([n, l]) => {
                  n &&
                    l &&
                    !l.text &&
                    this.textInputService.replace(n.name, l.id);
                }));
        }
        editUserNameSingleDisplay() {
          this.routingService.goTo(
            B.b.AddOfflineAccount.children.EditOfflineUserNameSD,
            null,
            {
              navigationExtras: {
                queryParams: {
                  user: this.accountToRenameId,
                  [hl.a.RETURN_TO_FIRST_TIME_WIZARD]: this.returnToFTW,
                },
              },
            },
          );
        }
        save() {
          Object(rl.b)(this.userNameInputField$, this.accountToRename$)
            .pipe(
              Object(ol.a)(1),
              Object(il.a)(([n, l]) => {
                if (n && n.text) {
                  this.savingProcessOngoing$$.next(!0);
                  const e = "" + n.text.trim();
                  if (this.accountToRenameId) {
                    if (e === l.name) return Object(se.a)([e, cl.c.Successful]);
                    this.umActivitiesService.requestRenameOfflineUserActivity(
                      l,
                      e,
                    );
                  } else
                    this.umActivitiesService.requestAddOfflineUserActivity(e);
                  return Object(rl.b)(
                    Object(se.a)(e),
                    this.requestedActivity$.pipe(
                      Object(tl.a)(hl.b.activityHasFinishedExecution),
                      Object(Qn.a)((n) => (n ? n.result : void 0)),
                      Object(ol.a)(1),
                    ),
                  );
                }
                return Ve.a;
              }),
              Object(ol.a)(1),
              Object(il.a)(([n, l]) =>
                l !== cl.c.Successful
                  ? (this.savingProcessOngoing$$.next(!1),
                    this.changeDetectorRef.markForCheck(),
                    Object(se.a)(!1))
                  : this.accountToRenameId
                    ? this.accountToRename$.pipe(
                        Object(tl.a)((l) => !!l && l.name === n),
                        Object(ol.a)(1),
                        Object(Ze.a)(!0),
                      )
                    : this.umActivitiesService.trySwitchToAccountAndAwaitProcessOngoing$(
                        void 0,
                        dl.c.IMPLICIT_ADD_ACCOUNT,
                        n,
                      ),
              ),
              Object(g.a)(this.destroyed$$),
            )
            .subscribe((n) => {
              n || this.savingProcessOngoing$$.getValue()
                ? this.goBack(!n)
                : this.routingService.goTo(
                    B.b.UserAccountList.children.OnlineAccount.children
                      .ErrorGeneric,
                    null,
                    {
                      navigationExtras: {
                        queryParams: {
                          user: this.accountToRenameId,
                          [hl.a.RETURN_TO_FIRST_TIME_WIZARD]: this.returnToFTW,
                          [hl.a.ROUTED_HERE_VIA_UI_TRANSITION]:
                            this.transitionFromNativeUi,
                        },
                      },
                    },
                  );
            });
        }
        ngOnDestroy() {
          (this.umActivitiesService.setActivityStateBackToIdle(
            this.requestedActivity$,
          ),
            this.savingProcessOngoing$$.complete(),
            this.destroyed$$.next());
        }
        goBack(n = !0) {
          this.transitionFromNativeUi
            ? this.routingService.enterAppContext(Xl.A)
            : this.returnToFTW
              ? this.umActivitiesService
                  .awaitFtwPopupThen(
                    n
                      ? dl.a.ABORT_EXTERNAL_CONFIGURATION
                      : dl.a.RETURN_AFTER_ADD_ACCOUNT,
                    n,
                  )
                  .then(() => this.routingService.goTo(B.b.UserAccountList))
              : this.routingService.goBack();
        }
      }
      var Xe = t.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block}.screen[_ngcontent-%COMP%], [_nghost-%COMP%]{height:100%;overflow:hidden}.screen[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:stretch}.screen__disclaimer[_ngcontent-%COMP%]{flex-grow:1}.screen__content-area[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;padding-top:44px;padding-left:120px;padding-right:120px;height:100%}@media (max-width:1280px){.screen__content-area[_ngcontent-%COMP%]{padding-left:0;padding-right:0}}.content-area__instruction-text[_ngcontent-%COMP%]{flex-grow:1}.screen__content-area--wordproposals[_ngcontent-%COMP%]{padding-top:14px}",
          ],
        ],
        data: {},
      });
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
              1,
              "au3-word-proposals-host",
              [],
              [[40, "@proposals", 0]],
              null,
              null,
              Ae.b,
              Ae.a,
            )),
            t.xb(
              1,
              704512,
              null,
              0,
              Le.a,
              [ke.c, we.a, en.i, Ee.a, t.h, c.a, Ue.a, b.a],
              { inputField: [0, "inputField"] },
              null,
            ),
          ],
          function (n, l) {
            n(l, 1, 0, l.parent.context.mib3Let);
          },
          function (n, l) {
            n(l, 0, 0, t.Nb(l, 1).wordProposalAnimationState);
          },
        );
      }
      function Qe(n) {
        return t.ac(
          0,
          [
            (n()(),
            t.yb(0, 0, null, null, 7, "div", [], null, null, null, null, null)),
            (n()(),
            t.yb(
              1,
              0,
              null,
              null,
              4,
              "au3-input-field-host",
              [
                ["class", "user-input"],
                ["id", "PlaceholderUsername"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "readonlyFieldTapped"]],
              function (n, l, e) {
                var t = !0;
                return (
                  "readonlyFieldTapped" === l &&
                    (t = !1 !== n.component.editUserNameSingleDisplay() && t),
                  t
                );
              },
              Re.b,
              Re.a,
            )),
            t.xb(
              2,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              3,
              147456,
              null,
              0,
              V.a,
              [Z.a, t.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.Pb(131072, an.b, [t.h]),
            t.xb(
              5,
              4374528,
              null,
              0,
              Fe.a,
              [
                ke.c,
                we.a,
                Be.a,
                s.a,
                Ue.a,
                c.a,
                t.h,
                en.i,
                [2, ze.b],
                [2, V.a],
                $e.a,
                b.a,
                He.a,
                je.a,
                t.l,
                gn.a,
                We.a,
                Hn.a,
              ],
              {
                readonly: [0, "readonly"],
                placeholderDeveloperText: [1, "placeholderDeveloperText"],
                inputField: [2, "inputField"],
              },
              { readonlyFieldTapped: "readonlyFieldTapped" },
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Je)),
            t.xb(
              7,
              147456,
              null,
              0,
              Ye.a,
              [t.P, t.L, c.a],
              { mib3DualDisplay: [0, "mib3DualDisplay"] },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 2, 0, "PlaceholderUsername"),
              n(
                l,
                3,
                0,
                !t.Yb(
                  l,
                  3,
                  0,
                  t.Nb(l, 4).transform(e.textInputService.initialized$),
                ),
              ),
              n(
                l,
                5,
                0,
                e.configService.isSingleDisplay(),
                "Nutzername",
                l.context.mib3Let,
              ),
              n(l, 7, 0, null));
          },
          function (n, l) {
            n(l, 1, 0, t.Nb(l, 3).combinedDisabled, t.Nb(l, 3).useBrighterIcon);
          },
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
              41,
              "au3-screen",
              [
                ["au3LockOnPSOClamp15Restriction", ""],
                ["class", "screen"],
                ["id", "Screen:UM_EDIT_ACCOUNT_OFFLINE_NAME"],
              ],
              null,
              null,
              null,
              T.b,
              T.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, N.a, [b.a], { id: [0, "id"] }, null),
            t.xb(3, 212992, null, 0, Zn.a, [Gn.a, Hn.a], null, null),
            (n()(),
            t.yb(
              4,
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
              P.b,
              P.a,
            )),
            t.xb(
              5,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              6,
              49152,
              null,
              0,
              I.a,
              [M.a, S.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                hasSecondaryText: [1, "hasSecondaryText"],
                secondaryDeveloperText: [2, "secondaryDeveloperText"],
                secondaryNonI18nText: [3, "secondaryNonI18nText"],
              },
              null,
            ),
            (n()(),
            t.yb(
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
              function (n, l, e) {
                var t = !0;
                return (
                  "mib3Tap" === l && (t = !1 !== n.component.goBack() && t),
                  t
                );
              },
              Y.b,
              Y.a,
            )),
            t.xb(8, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              9,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              11,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              Wl.a,
              [b.a, Yl.a, t.l, [2, X.a], [2, V.a]],
              null,
              null,
            ),
            t.xb(13, 16384, null, 0, U.a, [], null, null),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              15,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              16,
              49152,
              null,
              0,
              dn.a,
              [[2, V.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              18,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
            (n()(),
            t.yb(
              19,
              0,
              null,
              0,
              22,
              "au3-disclaimer",
              [["class", "screen__disclaimer"]],
              null,
              null,
              null,
              qn.b,
              qn.a,
            )),
            t.xb(
              20,
              4440064,
              null,
              0,
              Kn.a,
              [Hn.a, [2, C.a], t.h, b.a],
              null,
              null,
            ),
            (n()(),
            t.yb(
              21,
              0,
              null,
              0,
              20,
              "div",
              [["class", "screen__content-area"]],
              [[2, "screen__content-area--wordproposals", null]],
              null,
              null,
              null,
              null,
            )),
            (n()(), t.hb(16777216, null, null, 2, null, Qe)),
            t.xb(
              23,
              16384,
              null,
              0,
              vn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, an.b, [t.h]),
            (n()(),
            t.yb(
              25,
              0,
              null,
              null,
              16,
              "au3-instruction-text",
              [
                ["class", "content-area__instruction-text"],
                ["id", "EnterAccountNameInstruction"],
              ],
              null,
              null,
              null,
              Yn.b,
              Yn.a,
            )),
            t.xb(
              26,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              27,
              49152,
              null,
              0,
              Vn.a,
              [],
              { primaryDeveloperText: [0, "primaryDeveloperText"] },
              null,
            ),
            (n()(),
            t.yb(
              28,
              0,
              null,
              1,
              13,
              "au3-operation-panel",
              [],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              zn.b,
              zn.a,
            )),
            t.xb(
              29,
              49152,
              null,
              0,
              $n.a,
              [Hn.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (n()(),
            t.yb(
              30,
              0,
              null,
              1,
              11,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "EnterAccountNameOkButton"],
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
              function (n, l, e) {
                var t = !0;
                return (
                  "mib3Tap" === l && (t = !1 !== n.component.save() && t),
                  t
                );
              },
              jn.b,
              jn.a,
            )),
            t.xb(
              31,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(32, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              33,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              34,
              147456,
              null,
              0,
              V.a,
              [Z.a, t.h, b.a, [3, V.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            t.Pb(131072, an.b, [t.h]),
            t.xb(
              36,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              38,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              39,
              49152,
              null,
              0,
              Wn.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            t.xb(
              40,
              147456,
              null,
              0,
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              41,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "Screen:UM_EDIT_ACCOUNT_OFFLINE_NAME"),
              n(l, 2, 0, "Screen:UM_EDIT_ACCOUNT_OFFLINE_NAME"),
              n(l, 3, 0),
              n(l, 5, 0, ""),
              n(
                l,
                6,
                0,
                "Nutzer",
                !0,
                "Name",
                null == l.context.mib3Let ? null : l.context.mib3Let.name,
              ),
              n(l, 9, 0, "BackButton"),
              n(l, 11, 0),
              n(l, 15, 0),
              n(l, 16, 0, !1, "E163_Backbutton.webp"),
              n(l, 20, 0),
              n(
                l,
                23,
                0,
                t.Yb(l, 23, 0, t.Nb(l, 24).transform(e.userNameInputField$)),
              ),
              n(l, 26, 0, "EnterAccountNameInstruction"),
              n(l, 27, 0, "Bitte geben Sie einen Namen f\xfcr den Nutzer ein."),
              n(l, 29, 0, !0),
              n(l, 31, 0, "EnterAccountNameOkButton"),
              n(
                l,
                34,
                0,
                t.Yb(l, 34, 0, t.Nb(l, 35).transform(e.isSavingOrBlocked$)),
                !l.context.mib3Let && e.umActivitiesService.addingUsersIsBlocked
                  ? e.umActivitiesService.addingUserBlockedDisabledReason
                  : "",
              ),
              n(l, 36, 0),
              n(l, 38, 0),
              n(l, 39, 0, "Speichern", !0));
          },
          function (n, l) {
            var e = l.component;
            (n(
              l,
              4,
              0,
              t.Nb(l, 6).hideLeftBorder,
              t.Nb(l, 6).hideDividingBorders,
            ),
              n(
                l,
                7,
                0,
                t.Nb(l, 15).markerClassEnabled,
                t.Nb(l, 16).useItemPlaceholder,
              ),
              n(l, 21, 0, !e.configService.isSingleDisplay()),
              n(l, 28, 0, t.Nb(l, 29).alignInside, t.Nb(l, 29).alignOutside),
              n(l, 30, 1, [
                t.Nb(l, 34).combinedDisabled,
                t.Nb(l, 34).useBrighterIcon,
                t.Nb(l, 38).markerClassEnabled,
                t.Nb(l, 39).showSeparatorLeft,
                t.Nb(l, 39).showSeparatorRight,
                t.Nb(l, 39).prio1Main,
                t.Nb(l, 39).prio1SmallScale,
                t.Nb(l, 39).prio2SmallScale,
                t.Nb(l, 39).prio1,
                t.Nb(l, 39).prio2,
                t.Nb(l, 39).prio1IconText,
                t.Nb(l, 39).prio1IconOnly,
                t.Nb(l, 39).prio1TextOnly,
                t.Nb(l, 39).prio2IconText,
                t.Nb(l, 39).prio2IconOnly,
                t.Nb(l, 39).prio2TextOnly,
                t.Nb(l, 39).useDefaultMaxWidth,
                t.Nb(l, 39).isDummy,
              ]));
          },
        );
      }
      function lt(n) {
        return t.ac(
          2,
          [
            (n()(), t.hb(16777216, null, null, 2, null, nt)),
            t.xb(
              1,
              16384,
              null,
              0,
              vn.a,
              [t.L, t.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            t.Pb(131072, an.b, [t.h]),
          ],
          function (n, l) {
            var e = l.component;
            n(l, 1, 0, t.Yb(l, 1, 0, t.Nb(l, 2).transform(e.accountToRename$)));
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
              1,
              "au3-rename-offline-account",
              [],
              null,
              null,
              null,
              lt,
              Xe,
            )),
            t.xb(
              1,
              4440064,
              null,
              0,
              Ke,
              [s.a, Gn.a, dl.b, ke.c, we.a, c.a, t.h, d.a],
              null,
              null,
            ),
          ],
          function (n, l) {
            n(l, 1, 0);
          },
          null,
        );
      }
      var tt = t.ub("au3-rename-offline-account", Ke, et, {}, {}, []);
      class at {
        constructor(n, l, e) {
          ((this.umActivitiesService = n),
            (this.routingService = l),
            (this.returnToFTW =
              !!e.snapshot.queryParams &&
              "true" ===
                e.snapshot.queryParams[hl.a.RETURN_TO_FIRST_TIME_WIZARD]));
        }
        cancel() {
          this.returnToFTW
            ? this.umActivitiesService
                .awaitFtwPopupThen(dl.a.ABORT_EXTERNAL_CONFIGURATION)
                .then(() => this.routingService.goTo(B.b.UserAccountList))
            : this.routingService.goTo(B.b.UserAccountList);
        }
        back() {
          this.returnToFTW
            ? this.umActivitiesService
                .awaitFtwPopupThen(dl.a.ABORT_EXTERNAL_CONFIGURATION)
                .then(() => this.routingService.goBack())
            : this.routingService.goBack();
        }
        continue() {
          this.routingService.goTo(
            B.b.AddOfflineAccount,
            void 0,
            this.returnToFTW
              ? {
                  navigationExtras: {
                    queryParams: {
                      [hl.a.RETURN_TO_FIRST_TIME_WIZARD]: this.returnToFTW,
                    },
                  },
                }
              : void 0,
          );
        }
      }
      var it = t.wb({
        encapsulation: 0,
        styles: [
          [
            '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{display:block;height:100%}.screen[_ngcontent-%COMP%]{width:100%;align-items:stretch;overflow:hidden}.screen__text-area[_ngcontent-%COMP%]{flex-grow:1}.text-area__info-text[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:35px;padding:30px 20px;display:block;height:100%}',
          ],
        ],
        data: {},
      });
      function ot(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              46,
              "au3-screen",
              [
                ["au3LockOnPSOClamp15Restriction", ""],
                ["class", "screen"],
                ["id", "Screen:UM_ADD_OFFLINE_ACCOUNT_INFO"],
              ],
              null,
              null,
              null,
              T.b,
              T.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, N.a, [b.a], { id: [0, "id"] }, null),
            t.xb(3, 212992, null, 0, Zn.a, [Gn.a, Hn.a], null, null),
            (n()(),
            t.yb(
              4,
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
              P.b,
              P.a,
            )),
            t.xb(
              5,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              6,
              49152,
              null,
              0,
              I.a,
              [M.a, S.a],
              {
                primaryDeveloperText: [0, "primaryDeveloperText"],
                hasSecondaryText: [1, "hasSecondaryText"],
                secondaryDeveloperText: [2, "secondaryDeveloperText"],
              },
              null,
            ),
            (n()(),
            t.yb(
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
              function (n, l, e) {
                var t = !0;
                return (
                  "mib3Tap" === l && (t = !1 !== n.component.back() && t),
                  t
                );
              },
              Y.b,
              Y.a,
            )),
            t.xb(8, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              9,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              10,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              11,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.xb(
              12,
              147456,
              null,
              0,
              Wl.a,
              [b.a, Yl.a, t.l, [2, X.a], [2, V.a]],
              null,
              null,
            ),
            t.xb(13, 16384, null, 0, U.a, [], null, null),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              15,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              16,
              49152,
              null,
              0,
              dn.a,
              [[2, V.a]],
              { hasText: [0, "hasText"], icon: [1, "icon"] },
              null,
            ),
            t.xb(
              17,
              147456,
              null,
              0,
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              18,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
            (n()(),
            t.yb(
              19,
              0,
              null,
              0,
              5,
              "div",
              [["class", "screen__text-area"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              20,
              0,
              null,
              null,
              4,
              "au3-disclaimer",
              [],
              null,
              null,
              null,
              qn.b,
              qn.a,
            )),
            t.xb(
              21,
              4440064,
              null,
              0,
              Kn.a,
              [Hn.a, [2, C.a], t.h, b.a],
              null,
              null,
            ),
            (n()(),
            t.yb(
              22,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [
                ["class", "text-area__info-text"],
                ["id", "AddOfflineAccountInfoText"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              L.b,
              L.a,
            )),
            t.xb(
              23,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
              24,
              245760,
              null,
              0,
              k.a,
              [[6, C.a], w.a, t.h, t.l, t.D, [2, E.a], [2, U.a], [2, R.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            t.yb(
              25,
              0,
              null,
              0,
              21,
              "au3-operation-panel",
              [],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              zn.b,
              zn.a,
            )),
            t.xb(
              26,
              49152,
              null,
              0,
              $n.a,
              [Hn.a],
              { sameSizeButtons: [0, "sameSizeButtons"] },
              null,
            ),
            (n()(),
            t.yb(
              27,
              0,
              null,
              1,
              9,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "ContinueButton"],
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
              function (n, l, e) {
                var t = !0;
                return (
                  "mib3Tap" === l && (t = !1 !== n.component.continue() && t),
                  t
                );
              },
              jn.b,
              jn.a,
            )),
            t.xb(
              28,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(29, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              30,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              31,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              33,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              34,
              49152,
              null,
              0,
              Wn.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            t.xb(
              35,
              147456,
              null,
              0,
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              36,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
            (n()(),
            t.yb(
              37,
              0,
              null,
              1,
              9,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "CancelButton"],
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
              function (n, l, e) {
                var t = !0;
                return (
                  "mib3Tap" === l && (t = !1 !== n.component.cancel() && t),
                  t
                );
              },
              jn.b,
              jn.a,
            )),
            t.xb(
              38,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(39, 147456, null, 0, G.a, [t.l, t.z], null, null),
            t.xb(
              40,
              147456,
              null,
              0,
              q.a,
              [G.a, [2, K.a], [2, C.a], b.a],
              null,
              null,
            ),
            t.xb(
              41,
              212992,
              null,
              0,
              X.a,
              [
                b.a,
                J.b,
                q.a,
                [2, K.a],
                [2, C.a],
                [2, V.a],
                [2, N.a],
                [2, r.a],
                t.z,
                Q.a,
                t.l,
                [2, nn.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, on.a, on.a, [[3, on.a]]),
            t.xb(
              43,
              4407296,
              null,
              0,
              un.a,
              [
                t.l,
                rn.a,
                t.h,
                on.a,
                [2, sn.a],
                [2, K.b],
                [2, K.a],
                [2, cn.a],
                [2, bn.a],
              ],
              null,
              null,
            ),
            t.xb(
              44,
              49152,
              null,
              0,
              Wn.a,
              [],
              {
                developerText: [0, "developerText"],
                prio1Item: [1, "prio1Item"],
              },
              null,
            ),
            t.xb(
              45,
              147456,
              null,
              0,
              pn.a,
              [
                [2, X.a],
                [2, V.a],
                [2, hn.a],
                [2, un.a],
                [2, mn.b],
                t.l,
                gn.a,
                fn.b,
              ],
              null,
              null,
            ),
            t.xb(
              46,
              147456,
              null,
              0,
              xn.a,
              [[2, un.a], [2, X.a], [2, J.b], yn.a],
              null,
              null,
            ),
          ],
          function (n, l) {
            (n(l, 1, 0, "Screen:UM_ADD_OFFLINE_ACCOUNT_INFO"),
              n(l, 2, 0, "Screen:UM_ADD_OFFLINE_ACCOUNT_INFO"),
              n(l, 3, 0),
              n(l, 5, 0, ""),
              n(l, 6, 0, "Nutzer", !0, "Hinweis"),
              n(l, 9, 0, "BackButton"),
              n(l, 11, 0),
              n(l, 15, 0),
              n(l, 16, 0, !1, "E163_Backbutton.webp"),
              n(l, 21, 0),
              n(l, 23, 0, "AddOfflineAccountInfoText"),
              n(
                l,
                24,
                0,
                "Ein Nutzer ohne myAudi-Account wird nicht in die myAudi-App und auch nicht in/mit\nanderen kompatiblen Audi-Fahrzeugen synchronisiert.\nEin nachtr\xe4gliches Erweitern mit einem myAudi-Account ist nicht m\xf6glich. Die Funktion\n''Pers\xf6nliche Routenassistenz'' steht nicht zur Verf\xfcgung. Es muss ggf. ein neues Profil\nmit myAudi-Account angelegt werden. Eine \xdcbernahme der bisher im Profil ohne\nmyAudi-Account erzeugten Daten (Einstellungen, Ziele) ist nicht m\xf6glich.",
                "AddOfflineAccountInfoText",
                8,
              ),
              n(l, 26, 0, !0),
              n(l, 28, 0, "ContinueButton"),
              n(l, 31, 0),
              n(l, 33, 0),
              n(l, 34, 0, "Weiter", !0),
              n(l, 38, 0, "CancelButton"),
              n(l, 41, 0),
              n(l, 43, 0),
              n(l, 44, 0, "Abbrechen", !0));
          },
          function (n, l) {
            (n(
              l,
              4,
              0,
              t.Nb(l, 6).hideLeftBorder,
              t.Nb(l, 6).hideDividingBorders,
            ),
              n(
                l,
                7,
                0,
                t.Nb(l, 15).markerClassEnabled,
                t.Nb(l, 16).useItemPlaceholder,
              ),
              n(
                l,
                22,
                0,
                t.Nb(l, 24).backgroundColor,
                t.Nb(l, 24).fixedNumberOfLines,
                t.Nb(l, 24).mayContainLatinCharsForArabic,
                t.Nb(l, 24).shortenWithEllipsisForArabic,
              ),
              n(l, 25, 0, t.Nb(l, 26).alignInside, t.Nb(l, 26).alignOutside),
              n(l, 27, 1, [
                t.Nb(l, 33).markerClassEnabled,
                t.Nb(l, 34).showSeparatorLeft,
                t.Nb(l, 34).showSeparatorRight,
                t.Nb(l, 34).prio1Main,
                t.Nb(l, 34).prio1SmallScale,
                t.Nb(l, 34).prio2SmallScale,
                t.Nb(l, 34).prio1,
                t.Nb(l, 34).prio2,
                t.Nb(l, 34).prio1IconText,
                t.Nb(l, 34).prio1IconOnly,
                t.Nb(l, 34).prio1TextOnly,
                t.Nb(l, 34).prio2IconText,
                t.Nb(l, 34).prio2IconOnly,
                t.Nb(l, 34).prio2TextOnly,
                t.Nb(l, 34).useDefaultMaxWidth,
                t.Nb(l, 34).isDummy,
              ]),
              n(l, 37, 1, [
                t.Nb(l, 43).markerClassEnabled,
                t.Nb(l, 44).showSeparatorLeft,
                t.Nb(l, 44).showSeparatorRight,
                t.Nb(l, 44).prio1Main,
                t.Nb(l, 44).prio1SmallScale,
                t.Nb(l, 44).prio2SmallScale,
                t.Nb(l, 44).prio1,
                t.Nb(l, 44).prio2,
                t.Nb(l, 44).prio1IconText,
                t.Nb(l, 44).prio1IconOnly,
                t.Nb(l, 44).prio1TextOnly,
                t.Nb(l, 44).prio2IconText,
                t.Nb(l, 44).prio2IconOnly,
                t.Nb(l, 44).prio2TextOnly,
                t.Nb(l, 44).useDefaultMaxWidth,
                t.Nb(l, 44).isDummy,
              ]));
          },
        );
      }
      function ut(n) {
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
              "au3-offline-account-info",
              [],
              null,
              null,
              null,
              ot,
              it,
            )),
            t.xb(1, 49152, null, 0, at, [dl.b, B.c, d.a], null, null),
          ],
          null,
          null,
        );
      }
      var rt = t.ub("au3-offline-account-info", at, ut, {}, {}, []),
        st = e("pNLL"),
        ct = e("dtma");
      class bt {
        constructor(n) {
          ((this.contextId = Ge.e.TIF_ID_91_INPUT_FIELD_USER_NAME_PROFILE),
            (this.inputField$ = n.getInputField(
              "PERSONALIZATION_EDIT_OFFLINE_NAME",
              this.contextId,
            )));
        }
      }
      var dt = t.wb({
        encapsulation: 0,
        styles: [
          ["[_nghost-%COMP%]{height:100%;display:block;overflow:hidden}"],
        ],
        data: {},
      });
      function pt(n) {
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
              "au3-screen",
              [
                ["au3LockOnPSOClamp15Restriction", ""],
                ["id", "Screen:UM_EDIT_ACCOUNT_OFFLINE_NAME_SD*"],
              ],
              null,
              null,
              null,
              T.b,
              T.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              C.a,
              [t.l, t.D, c.a, b.a, [3, C.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(2, 4440064, null, 0, N.a, [b.a], { id: [0, "id"] }, null),
            t.xb(3, 212992, null, 0, Zn.a, [Gn.a, Hn.a], null, null),
            (n()(),
            t.yb(
              4,
              0,
              null,
              0,
              2,
              "au3-enter-name-or-code",
              [],
              null,
              null,
              null,
              st.b,
              st.a,
            )),
            t.xb(
              5,
              704512,
              null,
              0,
              ct.a,
              [ke.c, we.a, s.a, xl.a, d.a],
              {
                hasProposals: [0, "hasProposals"],
                placeholderDeveloperText: [1, "placeholderDeveloperText"],
                descriptionText: [2, "descriptionText"],
                inputField: [3, "inputField"],
                contextId: [4, "contextId"],
              },
              null,
            ),
            t.Pb(131072, an.b, [t.h]),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "Screen:UM_EDIT_ACCOUNT_OFFLINE_NAME_SD*"),
              n(l, 2, 0, "Screen:UM_EDIT_ACCOUNT_OFFLINE_NAME_SD*"),
              n(l, 3, 0),
              n(
                l,
                5,
                0,
                !0,
                "Nutzername",
                "Bitte geben Sie einen\nNamen f\xfcr den\nNutzer an.",
                t.Yb(l, 5, 3, t.Nb(l, 6).transform(e.inputField$)),
                e.contextId,
              ));
          },
          null,
        );
      }
      function ht(n) {
        return t.ac(
          2,
          [
            (n()(), t.hb(16777216, null, null, 1, null, pt)),
            t.xb(
              1,
              147456,
              null,
              0,
              Ye.a,
              [t.P, t.L, c.a],
              { mib3SingleDisplay: [0, "mib3SingleDisplay"] },
              null,
            ),
          ],
          function (n, l) {
            n(l, 1, 0, null);
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
              "au3-edit-offline-account-name-sd",
              [],
              null,
              null,
              null,
              ht,
              dt,
            )),
            t.xb(1, 49152, null, 0, bt, [ke.c], null, null),
          ],
          null,
          null,
        );
      }
      var gt = t.ub("au3-edit-offline-account-name-sd", bt, mt, {}, {}, []),
        ft = e("ORYw"),
        xt = e("zK8b"),
        yt = e("PwXH"),
        _t = e("O+aD"),
        vt = e("E28B"),
        Ot = e("v5fw"),
        Tt = e("2kTK"),
        Ct = e("yBCh"),
        Nt = e("wSGL"),
        Pt = e("zMek"),
        It = e("uFtL"),
        Mt = e("tVse"),
        St = e("1Fz/"),
        Dt = e("BaMS"),
        At = e("NTw6"),
        Lt = e("m+zT"),
        kt = e("fUnG"),
        wt = e("r/1T"),
        Et = e("R6N0"),
        Ut = e("aDqW"),
        Rt = e("/W5r"),
        Ft = e("+Qv1"),
        Bt = e("XtoR"),
        zt = e("jTHl"),
        $t = e("zL3T"),
        Ht = e("JPnh"),
        jt = e("50DD"),
        Wt = e("S1OC"),
        Yt = e("5/4L"),
        Vt = e("H+9d"),
        Zt = e("8lto"),
        Gt = e("+epw"),
        qt = e("zMPs"),
        Kt = e("6Yk8"),
        Xt = e("u6+O"),
        Jt = e("CIQC"),
        Qt = e("REmV"),
        na = e("Y3N+"),
        la = e("MJxn"),
        ea = e("eIOF"),
        ta = e("t+4g"),
        aa = e("myjn"),
        ia = e("fOZ7"),
        oa = e("Wm/T");
      const ua = () =>
          e
            .e(0)
            .then(e.bind(null, "T2jY"))
            .then((n) => n.MyAudiAccountModuleNgFactory),
        ra = () =>
          e
            .e(0)
            .then(e.bind(null, "k8YQ"))
            .then((n) => n.MyAudiLoginModuleNgFactory);
      class sa {}
      class ca {
        static forRoot() {
          return { ngModule: ca, providers: [cl.d] };
        }
      }
      var ba = e("QDrj"),
        da = e("jKfI"),
        pa = e("DFsf"),
        ha = e("TPX7"),
        ma = e("D4nM"),
        ga = e("/8KP"),
        fa = e("OGMA"),
        xa = e("58iv"),
        ya = e("cvc+"),
        _a = e("rQ9f"),
        va = e("5VPe"),
        Oa = e("9UrY"),
        Ta = e("1a+T"),
        Ca = e("IZou"),
        Na = e("kQy8"),
        Pa = e("qw6a"),
        Ia = e("6KON"),
        Ma = e("WAH1"),
        Sa = e("MEwq"),
        Da = e("ofVT"),
        Aa = e("qmc3"),
        La = e("C4TX"),
        ka = e("qwMk"),
        wa = e("oOvw"),
        Ea = e("4oiE"),
        Ua = t.vb(a, [], function (n) {
          return t.Kb([
            t.Lb(512, t.j, t.X, [
              [
                8,
                [
                  i.a,
                  O,
                  W,
                  jl,
                  ie,
                  fe,
                  De,
                  tt,
                  rt,
                  gt,
                  ft.a,
                  xt.a,
                  yt.a,
                  _t.a,
                  vt.a,
                  Ot.a,
                  Tt.a,
                  Ct.a,
                  Nt.a,
                  Pt.a,
                  It.a,
                  Mt.a,
                  St.a,
                  Dt.a,
                  At.a,
                  Lt.a,
                  kt.a,
                  wt.a,
                  Et.a,
                ],
              ],
              [3, t.j],
              t.x,
            ]),
            t.Lb(4608, an.m, an.l, [t.u]),
            t.Lb(4608, Ut.h, Ut.g, []),
            t.Lb(4608, Ut.d, Ut.f, []),
            t.Lb(4608, Ut.j, Ut.e, []),
            t.Lb(4608, Ut.c, Ut.b, []),
            t.Lb(4608, Ut.k, Ut.k, [
              Ut.l,
              Ut.h,
              Ut.d,
              Ut.j,
              Ut.c,
              Ut.m,
              Ut.o,
              Ut.n,
              Ut.a,
            ]),
            t.Lb(4608, Rt.b, Rt.b, [Ft.e, [2, Rt.a]]),
            t.Lb(4608, Bt.b, Bt.b, [Ft.e, [2, Bt.a]]),
            t.Lb(4608, zt.b, zt.b, [Ft.e, [2, zt.a]]),
            t.Lb(4608, $t.b, $t.b, [Ft.e, [2, $t.a]]),
            t.Lb(4608, Ht.a, Ht.a, [Gn.a, b.a]),
            t.Lb(4608, jt.a, jt.a, [Wt.a, b.a]),
            t.Lb(4608, Yt.a, Yt.a, [Vt.a, Zt.a, b.a]),
            t.Lb(1073742336, an.c, an.c, []),
            t.Lb(1073742336, Ut.i, Ut.i, []),
            t.Lb(1073742336, Gt.a, Gt.a, []),
            t.Lb(1073742336, qt.a, qt.a, []),
            t.Lb(1073742336, Kt.a, Kt.a, []),
            t.Lb(1073742336, Xt.a, Xt.a, []),
            t.Lb(1073742336, Jt.a, Jt.a, []),
            t.Lb(1073742336, Qt.a, Qt.a, []),
            t.Lb(1073742336, na.a, na.a, []),
            t.Lb(1073742336, la.a, la.a, []),
            t.Lb(1073742336, ea.a, ea.a, []),
            t.Lb(1073742336, ta.a, ta.a, []),
            t.Lb(1073742336, aa.a, aa.a, []),
            t.Lb(1073742336, ia.a, ia.a, []),
            t.Lb(1073742336, d.n, d.n, [
              [2, d.s],
              [2, d.m],
            ]),
            t.Lb(1073742336, sa, sa, []),
            t.Lb(1073742336, ca, ca, []),
            t.Lb(1073742336, ba.a, ba.a, []),
            t.Lb(1073742336, da.a, da.a, []),
            t.Lb(1073742336, pa.a, pa.a, []),
            t.Lb(1073742336, ha.a, ha.a, []),
            t.Lb(1073742336, ma.a, ma.a, []),
            t.Lb(1073742336, ga.a, ga.a, []),
            t.Lb(1073742336, a, a, []),
            t.Lb(256, Ut.o, void 0, []),
            t.Lb(256, Ut.m, void 0, []),
            t.Lb(256, Ut.n, void 0, []),
            t.Lb(256, Ut.a, void 0, []),
            t.Lb(
              1024,
              d.k,
              function () {
                return [
                  [
                    {
                      path: "",
                      component: x,
                      children: [
                        { path: "init", component: z },
                        {
                          path: "user-account-list",
                          children: [
                            { path: "", component: fl, pathMatch: "full" },
                            { path: "myaudi-account", loadChildren: ua },
                            { path: "offline-account", component: Jl },
                            { path: "guest-account", component: ce },
                          ],
                        },
                        { path: "decide-add-online-or-new", component: ye },
                        {
                          path: "add-offline-account",
                          children: [
                            { path: "", component: Ke },
                            { path: "info", component: at },
                            {
                              path: "edit-user-name-sd",
                              canActivateChild: [oa.a],
                              component: bt,
                            },
                          ],
                        },
                        { path: "myaudi-login", loadChildren: ra },
                      ],
                    },
                  ],
                  [
                    {
                      path: "",
                      canActivate: [jt.a],
                      canActivateChild: [Ht.a],
                      data: ha.b,
                      children: [
                        { path: "", component: fa.a, data: ha.c },
                        {
                          path: "nominate-primary-user",
                          data: ha.g,
                          children: [
                            { path: "", component: xa.a, data: ha.h },
                            {
                              path: "my-audi-username",
                              component: ya.a,
                              canActivate: [oa.a],
                              data: ha.i,
                            },
                            {
                              path: "vehicle-code",
                              component: _a.a,
                              canActivate: [oa.a],
                              data: ha.j,
                            },
                            {
                              path: "pu-nomination-success",
                              component: va.a,
                              data: ha.k,
                            },
                            {
                              path: "pu-nomination-failed",
                              component: Oa.a,
                              data: ha.l,
                            },
                          ],
                        },
                        {
                          path: "reset-pu",
                          data: ha.m,
                          children: [
                            { path: "", component: Ta.a, data: ha.n },
                            {
                              path: "reset-pu-failed/:failureReason",
                              component: Ca.a,
                              data: ha.d,
                            },
                            {
                              path: "reset-pu-succeeded",
                              component: Na.a,
                              data: ha.e,
                            },
                          ],
                        },
                        { path: "info", component: Pa.a, data: ha.f },
                      ],
                    },
                  ],
                  [
                    {
                      path: "",
                      canActivate: [jt.a, Yt.a],
                      canActivateChild: [Yt.a],
                      data: ma.b,
                      children: [
                        { path: "", component: Ia.a, data: ma.c },
                        { path: "myaudi-info", component: Ma.a, data: ma.d },
                        {
                          path: "myaudi-login-failed/:failureReason",
                          component: Sa.a,
                          data: ma.e,
                        },
                        {
                          path: "enter-myaudi-pwd",
                          component: Da.a,
                          data: ma.f,
                          canActivate: [oa.a],
                        },
                        {
                          path: "enter-myaudi-name-sd",
                          component: Aa.a,
                          data: ma.g,
                          canActivate: [oa.a],
                        },
                      ],
                    },
                  ],
                  [
                    {
                      path: "",
                      canActivate: [jt.a],
                      children: [
                        { path: "", component: La.a, data: ga.b },
                        { path: "pso-info", component: ka.a, data: ga.c },
                        {
                          path: "edit-account-error-generic",
                          component: wa.a,
                          data: ga.d,
                        },
                        {
                          path: "myaudi-account-info",
                          component: Ea.a,
                          data: ga.e,
                        },
                        { path: "online-media-providers", loadChildren: ga.f },
                        { path: "primary-user", loadChildren: ga.g },
                        { path: "webapp", loadChildren: ga.h },
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
    "4XZL": function (n, l, e) {
      "use strict";
      (e.d(l, "a", function () {
        return v;
      }),
        e.d(l, "b", function () {
          return P;
        }));
      var t = e("kZht"),
        a = e("Xl9s"),
        i = e("fu7d"),
        o = e("bou3"),
        u = e("yNay"),
        r = e("IPO3"),
        s = e("An66"),
        c = e("8TlW"),
        b = e("ijxY"),
        d = e("Xo58"),
        p = e("m3Ja"),
        h = e("r+e+"),
        m = e("bmFL"),
        g = e("HVUF"),
        f = e("B3Zb"),
        x = e("Ps6X"),
        y = e("6zvu"),
        _ = e("OJ7R"),
        v =
          (e("URLa"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:flex;position:relative;padding:0 20px}.list-route-item-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%}.list-item__text-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%]{margin-right:30px}.component-layout-latin[_nghost-%COMP%]   .list-item__icon--end[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list-item__icon--end[_ngcontent-%COMP%]{margin-left:30px;transform:scaleX(1)}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%]{margin-left:30px}.component-layout-arabic[_nghost-%COMP%]   .list-item__icon--end[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list-item__icon--end[_ngcontent-%COMP%]{margin-right:30px;transform:scaleX(-1)}.fpk-stage-small[_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%]{display:none}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.list-item__text[_ngcontent-%COMP%]{flex:1 1 auto}.list-item__text--small[_ngcontent-%COMP%]{flex:1 1 auto;font-size:30px}',
              ],
            ],
            data: {},
          }));
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
            t.xb(
              1,
              212992,
              null,
              0,
              i.a,
              [t.l, t.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
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
                iconContext: [4, "iconContext"],
              },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "list-item__icon--begin"),
              n(
                l,
                2,
                0,
                e.iconOverlay,
                e.iconFallback,
                e.icon,
                e.listBeginIconCategory,
                e.iconContext,
              ));
          },
          null,
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
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), t.hb(16777216, null, null, 1, null, O)),
            t.xb(
              2,
              16384,
              null,
              0,
              s.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), t.hb(0, null, null, 0)),
          ],
          function (n, l) {
            var e = l.component;
            n(l, 2, 0, e.icon || e.iconFallback);
          },
          null,
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
                ["class", "list-item__text--small"],
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
              c.b,
              c.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              i.a,
              [t.l, t.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              b.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            t.xb(
              3,
              245760,
              null,
              0,
              d.a,
              [[6, i.a], p.a, t.h, t.l, t.D, [2, h.a], [2, b.a], [2, m.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(
              l,
              1,
              0,
              e.subtitleTextId
                ? e.subtitleTextId
                : "ListRouteItemSecondaryText",
              e.subtitleTextIdEnum,
            ),
              n(
                l,
                2,
                0,
                !e.hasSubtitle ||
                  !(e.subtitleDeveloperText || e.subtitleTextIdEnum),
              ),
              n(
                l,
                3,
                0,
                e.subtitleDeveloperText,
                e.subtitleTextId
                  ? e.subtitleTextId
                  : "ListRouteItemSecondaryText",
                1,
                e.subtitleNonI18nText,
              ));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              t.Nb(l, 3).backgroundColor,
              t.Nb(l, 3).fixedNumberOfLines,
              t.Nb(l, 3).mayContainLatinCharsForArabic,
              t.Nb(l, 3).shortenWithEllipsisForArabic,
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
              2,
              "au3-icon",
              [],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              g.b,
              g.a,
            )),
            t.xb(
              1,
              278528,
              null,
              0,
              s.i,
              [t.s, t.t, t.l, t.D],
              { ngClass: [0, "ngClass"] },
              null,
            ),
            t.xb(
              2,
              4243456,
              null,
              0,
              f.b,
              [u.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(
              l,
              1,
              0,
              e.doNotInvertIconInArabic
                ? "list-item__icon--end-not-inverted"
                : "list-item__icon--end",
            ),
              n(l, 2, 0, e.endIconFileName, e.listEndIconCategory));
          },
          function (n, l) {
            n(l, 0, 0, t.Nb(l, 2).iconComponentHidden);
          },
        );
      }
      function P(n) {
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
              "div",
              [["class", "list-route-item-container"]],
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
            t.xb(
              1,
              212992,
              null,
              0,
              x.a,
              [[2, y.a], [8, null], [3, x.a], t.l, t.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, T)),
            t.xb(
              3,
              540672,
              null,
              0,
              _.a,
              [u.a, t.P, t.L],
              { ttStaticIf: [0, "ttStaticIf"] },
              null,
            ),
            (n()(),
            t.yb(
              4,
              0,
              null,
              null,
              6,
              "div",
              [["class", "list-item__text-container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            t.yb(
              5,
              0,
              null,
              null,
              3,
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
              ],
              null,
              null,
              c.b,
              c.a,
            )),
            t.xb(
              6,
              212992,
              null,
              0,
              i.a,
              [t.l, t.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              7,
              16384,
              null,
              0,
              b.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            t.xb(
              8,
              245760,
              null,
              0,
              d.a,
              [[6, i.a], p.a, t.h, t.l, t.D, [2, h.a], [2, b.a], [2, m.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, C)),
            t.xb(
              10,
              16384,
              null,
              0,
              s.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, N)),
            t.xb(
              12,
              540672,
              null,
              0,
              _.a,
              [u.a, t.P, t.L],
              { ttStaticIf: [0, "ttStaticIf"] },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, e.uiStateType),
              n(l, 3, 0, !e.iconStatic || e.icon || e.iconFallback),
              n(
                l,
                6,
                0,
                e.titleTextId ? e.titleTextId : "ListRouteItemText",
                e.titleTextIdEnum,
              ),
              n(l, 7, 0, !(e.titleDeveloperText || e.titleTextIdEnum)),
              n(
                l,
                8,
                0,
                e.titleDeveloperText,
                e.titleTextId ? e.titleTextId : "ListRouteItemText",
                1,
                e.titleNonI18nText,
              ),
              n(l, 10, 0, e.hasSubtitle),
              n(l, 12, 0, e.hasEndIcon));
          },
          function (n, l) {
            (n(
              l,
              0,
              0,
              t.Nb(l, 1).uiStateListHorizontal,
              t.Nb(l, 1).uiStateListVertical,
              t.Nb(l, 1).uiStateCoverLeft,
              t.Nb(l, 1).uiStateCoverRight,
              t.Nb(l, 1).uiStateCoverBottom,
              t.Nb(l, 1).uiStateButton,
              t.Nb(l, 1).uiStateByDabLeft,
              t.Nb(l, 1).uiStateByDabRight,
              t.Nb(l, 1).uiStateLbDabLeft,
              t.Nb(l, 1).uiStateLbDabRight,
            ),
              n(
                l,
                5,
                0,
                t.Nb(l, 8).backgroundColor,
                t.Nb(l, 8).fixedNumberOfLines,
                t.Nb(l, 8).mayContainLatinCharsForArabic,
                t.Nb(l, 8).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
    },
    "89Z2": function (n, l, e) {
      "use strict";
      (e.d(l, "a", function () {
        return a;
      }),
        e.d(l, "b", function () {
          return i;
        }));
      var t = e("kZht"),
        a =
          (e("kqft"),
          e("+sw+"),
          e("FfND"),
          e("bou3"),
          e("yNay"),
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
      function i(n) {
        return t.ac(2, [t.Mb(null, 0)], null, null);
      }
    },
    "8WOv": function (n, l, e) {
      "use strict";
      (e.d(l, "a", function () {
        return p;
      }),
        e.d(l, "b", function () {
          return h;
        }));
      var t = e("kZht"),
        a = e("U6SP"),
        i = e("fu7d"),
        o = e("bou3"),
        u = e("yNay"),
        r = e("ijxY"),
        s = e("OtM5"),
        c = e("9ZFG"),
        b = e("An66"),
        d = e("1ZTq"),
        p =
          (e("zPMi"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;position:relative;direction:ltr;height:119px;border:solid #fff;border-image:linear-gradient(0deg,hsla(0,0%,100%,.7),transparent 80%) 1 1}[_nghost-%COMP%]:after{content:"";position:absolute;bottom:-1px;width:2px;height:2px;background:#000}[_nghost-%COMP%]   .steering-wheel-left[_nghost-%COMP%], .steering-wheel-left   [_nghost-%COMP%]{border-width:0 0 0 1px;margin-right:2px}[_nghost-%COMP%]   .steering-wheel-left[_nghost-%COMP%]:after, .steering-wheel-left   [_nghost-%COMP%]:after{left:auto;right:-2px}[_nghost-%COMP%]   .steering-wheel-right[_nghost-%COMP%], .steering-wheel-right   [_nghost-%COMP%]{border-width:0 1px 0 0;margin-left:2px}[_nghost-%COMP%]   .steering-wheel-right[_nghost-%COMP%]:after, .steering-wheel-right   [_nghost-%COMP%]:after{left:-2px;right:auto}.tl-item--background-gradient[_nghost-%COMP%]{background-image:linear-gradient(0deg,hsla(0,0%,100%,.19),transparent 61%)}[_nghost-%COMP%]     .button__icon, [_nghost-%COMP%]     .button__text{top:12px}.title-line-item__button[_ngcontent-%COMP%]{height:119px}.tl-item--placeholder[_nghost-%COMP%]{border-width:0;width:120px}.tl-button--centered[_ngcontent-%COMP%]{justify-content:center}.tl-icon--rotation[_ngcontent-%COMP%]     .button__icon{animation:spin 1.4s linear infinite;transform-origin:59px 59px}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',
              ],
            ],
            data: {},
          }));
      function h(n) {
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
              "au3-button",
              [
                ["class", "title-line-item__button"],
                ["id", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "tl-button--centered", null],
                [2, "tl-icon--rotation", null],
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "button--activated", null],
                [2, "button--horizontal", null],
                [2, "button--with-border", null],
                [2, "button--with-thick-border", null],
              ],
              null,
              null,
              a.b,
              a.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              i.a,
              [t.l, t.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"] },
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
              147456,
              null,
              0,
              s.a,
              [c.a, t.h, u.a, [3, s.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            t.Pb(131072, b.b, [t.h]),
            t.xb(
              5,
              49152,
              null,
              0,
              d.b,
              [],
              {
                hasText: [0, "hasText"],
                developerText: [1, "developerText"],
                nonI18nText: [2, "nonI18nText"],
                icon: [3, "icon"],
                iconCategory: [4, "iconCategory"],
                hasOnlyText: [5, "hasOnlyText"],
                layoutHorizontal: [6, "layoutHorizontal"],
              },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, ""),
              n(l, 2, 0, !e.hasText),
              n(
                l,
                3,
                0,
                t.Yb(
                  l,
                  3,
                  0,
                  t
                    .Nb(l, 4)
                    .transform(
                      null == e.disabledDirective
                        ? null
                        : e.disabledDirective.disabled$,
                    ),
                ),
              ),
              n(
                l,
                5,
                0,
                e.hasText,
                e.text,
                e.nonI18nText,
                e.icon,
                e.iconCategory,
                e.hasOnlyText,
                !0,
              ));
          },
          function (n, l) {
            var e = l.component;
            n(
              l,
              0,
              0,
              e.centered,
              e.iconRotation,
              t.Nb(l, 3).combinedDisabled,
              t.Nb(l, 3).useBrighterIcon,
              t.Nb(l, 5).activated,
              t.Nb(l, 5).layoutHorizontal,
              t.Nb(l, 5).thinBorder,
              t.Nb(l, 5).thickBorder,
            );
          },
        );
      }
    },
    EOxa: function (n, l, e) {
      "use strict";
      (e.d(l, "a", function () {
        return s;
      }),
        e.d(l, "b", function () {
          return b;
        }));
      var t = e("erIP"),
        a = e("kZht"),
        i = e("An66"),
        o = e("l9Gk"),
        u = e("8Wo1"),
        r = e("CDcS"),
        s =
          (e("Kds7"),
          e("yNay"),
          a.wb({
            encapsulation: 0,
            styles: [
              t.a,
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.icon__fallback-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;image-rendering:-webkit-optimize-contrast}.icon-element--hidden[_ngcontent-%COMP%], .lock-state-hidden[_nghost-%COMP%]{visibility:hidden}.lock-state-faded[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}",
              ],
            ],
            data: {},
          }));
      function c(n) {
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
              "img",
              [
                ["class", "icon__content icon__fallback-content"],
                ["draggable", "false"],
                ["ttDoNotToggleChildren", ""],
              ],
              [
                [8, "src", 4],
                [4, "object-fit", null],
              ],
              null,
              null,
              null,
              null,
            )),
            a.xb(
              1,
              278528,
              null,
              0,
              i.i,
              [a.s, a.t, a.l, a.D],
              { klass: [0, "klass"], ngClass: [1, "ngClass"] },
              null,
            ),
            a.xb(2, 16384, null, 0, o.a, [], null, null),
            a.xb(
              3,
              212992,
              null,
              0,
              u.a,
              [[3, r.a], a.l, a.z],
              { blocksRouting: [0, "blocksRouting"] },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "icon__content icon__fallback-content", e.iconClass),
              n(l, 3, 0, e.blocksRouting));
          },
          function (n, l) {
            var e = l.component;
            n(l, 0, 0, e.fallbackIconUrl, e.scaleMode);
          },
        );
      }
      function b(n) {
        return a.ac(
          2,
          [
            a.Tb(402653184, 1, { iconElement: 0 }),
            (n()(),
            a.yb(
              1,
              0,
              [
                [1, 0],
                ["icon", 1],
              ],
              null,
              2,
              "img",
              [
                ["class", "icon__content"],
                ["draggable", "false"],
              ],
              [
                [2, "icon-element--hidden", null],
                [8, "src", 4],
                [4, "object-fit", null],
              ],
              null,
              null,
              null,
              null,
            )),
            a.xb(
              2,
              278528,
              null,
              0,
              i.i,
              [a.s, a.t, a.l, a.D],
              { klass: [0, "klass"], ngClass: [1, "ngClass"] },
              null,
            ),
            a.xb(
              3,
              212992,
              null,
              0,
              u.a,
              [[3, r.a], a.l, a.z],
              { blocksRouting: [0, "blocksRouting"] },
              null,
            ),
            (n()(), a.hb(16777216, null, null, 1, null, c)),
            a.xb(
              5,
              16384,
              null,
              0,
              i.k,
              [a.P, a.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 2, 0, "icon__content", e.iconClass),
              n(l, 3, 0, e.blocksRouting),
              n(l, 5, 0, e.showFallbackIcon));
          },
          function (n, l) {
            var e = l.component;
            n(l, 1, 0, e.iconElementHidden, e.iconUrl, e.scaleMode);
          },
        );
      }
    },
    VUTu: function (n, l, e) {
      "use strict";
      (e.d(l, "a", function () {
        return y;
      }),
        e.d(l, "b", function () {
          return A;
        }));
      var t = e("kZht"),
        a = e("HVUF"),
        i = e("B3Zb"),
        o = e("yNay"),
        u = e("8TlW"),
        r = e("fu7d"),
        s = e("bou3"),
        c = e("ijxY"),
        b = e("Xo58"),
        d = e("m3Ja"),
        p = e("r+e+"),
        h = e("bmFL"),
        m = e("T8E5"),
        g = e("An66"),
        f = e("gKAS"),
        x = e("Brsi"),
        y =
          (e("nK9R"),
          e("qzuC"),
          e("8yWk"),
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
              a.b,
              a.a,
            )),
            t.xb(
              1,
              4243456,
              null,
              0,
              i.b,
              [o.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (n, l) {
            n(
              l,
              1,
              0,
              "E163_breadcrump_back.webp",
              l.component.iconCategoryBreadcrumb,
            );
          },
          function (n, l) {
            n(l, 0, 0, t.Nb(l, 1).iconComponentHidden);
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
          function (n, l) {
            n(l, 0, 0, l.component.hideRightPadding);
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
              [t.l, t.D, s.a, o.a, [3, r.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              c.a,
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
              [[6, r.a], d.a, t.h, t.l, t.D, [2, p.a], [2, c.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, e.primaryId, e.primaryIdEnumType),
              n(
                l,
                2,
                0,
                !e.hasPrimaryText ||
                  !(e.primaryIdEnumType || e.primaryDeveloperText),
              ),
              n(
                l,
                3,
                0,
                e.primaryDeveloperText,
                e.primaryId,
                e.primaryNonI18nText,
              ));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              t.Nb(l, 3).backgroundColor,
              t.Nb(l, 3).fixedNumberOfLines,
              t.Nb(l, 3).mayContainLatinCharsForArabic,
              t.Nb(l, 3).shortenWithEllipsisForArabic,
            );
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
              2,
              "au3-icon",
              [
                ["class", "content__title--icon"],
                ["ttDoNotToggle", ""],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              a.b,
              a.a,
            )),
            t.xb(
              1,
              16384,
              null,
              0,
              m.a,
              [],
              { ttDoNotToggleDynamicValue: [0, "ttDoNotToggleDynamicValue"] },
              null,
            ),
            t.xb(
              2,
              4243456,
              null,
              0,
              i.b,
              [o.a, t.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, !e.possibleIcon),
              n(l, 2, 0, e.icon, e.iconCategoryBreadcrumb));
          },
          function (n, l) {
            n(l, 0, 0, t.Nb(l, 2).iconComponentHidden);
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
              [t.l, t.D, s.a, o.a, [3, r.a], [8, null]],
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
              [t.l, t.D, s.a, o.a, [3, r.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              4,
              16384,
              null,
              0,
              c.a,
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
              [[6, r.a], d.a, t.h, t.l, t.D, [2, p.a], [2, c.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, C)),
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
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "SecondaryText"),
              n(l, 3, 0, e.secondaryId, e.secondaryIdEnumType),
              n(
                l,
                4,
                0,
                !e.hasSecondaryText ||
                  !(e.secondaryIdEnumType || e.secondaryDeveloperText),
              ),
              n(
                l,
                5,
                0,
                e.secondaryDeveloperText,
                e.secondaryId,
                e.secondaryNonI18nText,
              ),
              n(l, 7, 0, !!e.icon));
          },
          function (n, l) {
            n(
              l,
              2,
              0,
              t.Nb(l, 5).backgroundColor,
              t.Nb(l, 5).fixedNumberOfLines,
              t.Nb(l, 5).mayContainLatinCharsForArabic,
              t.Nb(l, 5).shortenWithEllipsisForArabic,
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
              1,
              "au3-title-line-loader-item",
              [["class", "title-line__loader"]],
              [
                [2, "title-line__loader--display-none", null],
                [2, "title-line__loader--visible", null],
              ],
              null,
              null,
              f.b,
              f.a,
            )),
            t.xb(
              1,
              49152,
              null,
              0,
              x.a,
              [],
              { animated: [0, "animated"] },
              null,
            ),
          ],
          function (n, l) {
            n(l, 1, 0, l.component.loaderActive);
          },
          function (n, l) {
            var e = l.component;
            n(l, 0, 0, !e.textToolHasLoader, e.loaderActive);
          },
        );
      }
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
            (n()(), t.hb(16777216, null, null, 1, null, T)),
            t.xb(
              4,
              16384,
              null,
              0,
              g.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, N)),
            t.xb(
              6,
              16384,
              null,
              0,
              g.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, P)),
            t.xb(
              8,
              16384,
              null,
              0,
              g.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 4, 0, e.hasPrimaryText),
              n(l, 6, 0, e.hasSecondaryText),
              n(l, 8, 0, e.hasLoader));
          },
          function (n, l) {
            n(l, 2, 0, l.component.hasLoader);
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
      function D(n) {
        return t.ac(
          0,
          [t.Mb(null, 4), (n()(), t.hb(0, null, null, 0))],
          null,
          null,
        );
      }
      function A(n) {
        return t.ac(
          2,
          [
            (n()(), t.hb(16777216, null, null, 1, null, _)),
            t.xb(
              1,
              16384,
              null,
              0,
              g.k,
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
              g.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            t.Pb(131072, g.b, [t.h]),
            (n()(), t.hb(16777216, null, null, 1, null, O)),
            t.xb(
              8,
              16384,
              null,
              0,
              g.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), t.hb(0, [["center", 2]], null, 0, null, I)),
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
            (n()(), t.hb(16777216, null, null, 2, null, M)),
            t.xb(
              13,
              540672,
              null,
              0,
              g.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            t.Pb(131072, g.b, [t.h]),
            (n()(), t.hb(0, [["done", 2]], null, 0, null, S)),
            (n()(), t.hb(0, [["edit", 2]], null, 0, null, D)),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, e.showBreadcrumbsIcon),
              n(
                l,
                5,
                0,
                t.Yb(l, 5, 0, t.Nb(l, 6).transform(e.editButtonLeft$))
                  ? t.Nb(l, 16)
                  : t.Nb(l, 15),
              ),
              n(l, 8, 0, e.hasTextInput, t.Nb(l, 9)),
              n(
                l,
                13,
                0,
                t.Yb(l, 13, 0, t.Nb(l, 14).transform(e.editButtonLeft$))
                  ? t.Nb(l, 15)
                  : t.Nb(l, 16),
              ));
          },
          null,
        );
      }
    },
    Xl9s: function (n, l, e) {
      "use strict";
      (e.d(l, "a", function () {
        return c;
      }),
        e.d(l, "b", function () {
          return d;
        }));
      var t = e("kZht"),
        a = e("HVUF"),
        i = e("B3Zb"),
        o = e("yNay"),
        u = e("EOxa"),
        r = e("Kds7"),
        s = e("An66"),
        c =
          (e("IPO3"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                ".icon__content[_ngcontent-%COMP%], [_nghost-%COMP%]{position:relative}.icon__overlay-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0}",
              ],
            ],
            data: {},
          }));
      function b(n) {
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
              [["class", "icon__overlay-content"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              a.b,
              a.a,
            )),
            t.xb(
              1,
              4243456,
              null,
              0,
              i.b,
              [o.a, t.z],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                scaleMode: [2, "scaleMode"],
                blocksRouting: [3, "blocksRouting"],
                ignoreCategorySize: [4, "ignoreCategorySize"],
              },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            n(
              l,
              1,
              0,
              e.overlayFileName,
              e.category,
              e.scaleMode,
              e.blocksRouting,
              e.ignoreCategorySize,
            );
          },
          function (n, l) {
            n(l, 0, 0, t.Nb(l, 1).iconComponentHidden);
          },
        );
      }
      function d(n) {
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
              "au3-icon-with-fallback",
              [["class", "icon__content"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              u.b,
              u.a,
            )),
            t.xb(
              1,
              4964352,
              null,
              0,
              r.a,
              [t.h, t.z, o.a],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                scaleMode: [2, "scaleMode"],
                blocksRouting: [3, "blocksRouting"],
                iconContext: [4, "iconContext"],
                ignoreCategorySize: [5, "ignoreCategorySize"],
                queryIconWidth: [6, "queryIconWidth"],
                queryIconHeight: [7, "queryIconHeight"],
                fallbackFileName: [8, "fallbackFileName"],
              },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, b)),
            t.xb(
              3,
              16384,
              null,
              0,
              s.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(
              l,
              1,
              0,
              e.fileName,
              e.category,
              e.scaleMode,
              e.blocksRouting,
              e.iconContext,
              e.ignoreCategorySize,
              e.queryIconWidth,
              e.queryIconHeight,
              e.fallbackFileName,
            ),
              n(l, 3, 0, !!e.overlayFileName));
          },
          function (n, l) {
            n(l, 0, 0, t.Nb(l, 1).iconComponentHidden);
          },
        );
      }
    },
    Z2XD: function (n, l, e) {
      "use strict";
      (e.d(l, "a", function () {
        return a;
      }),
        e.d(l, "b", function () {
          return i;
        }));
      var t = e("kZht"),
        a =
          (e("y9xZ"),
          e("yNay"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;padding:16px 48px 25px}.steering-wheel-left[_nghost-%COMP%], .steering-wheel-left   [_nghost-%COMP%]{padding-right:56px}.steering-wheel-right[_nghost-%COMP%], .steering-wheel-right   [_nghost-%COMP%]{padding-left:56px}",
              ],
            ],
            data: {},
          }));
      function i(n) {
        return t.ac(0, [t.Mb(null, 0)], null, null);
      }
    },
    ZXHi: function (n, l, e) {
      "use strict";
      (e.d(l, "a", function () {
        return o;
      }),
        e.d(l, "b", function () {
          return u;
        }));
      var t = e("kZht"),
        a = e("EyLa"),
        i = e("4nnk"),
        o =
          (e("IRNg"),
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
              a.b,
              a.a,
            )),
            t.xb(
              4,
              49152,
              null,
              0,
              i.a,
              [t.l, t.h],
              { current: [0, "current"] },
              null,
            ),
          ],
          function (n, l) {
            n(l, 4, 0, l.component.current);
          },
          function (n, l) {
            n(l, 3, 0, t.Nb(l, 4).shouldRotateForSxm, t.Nb(l, 4).infinite);
          },
        );
      }
    },
    apBa: function (n, l, e) {
      "use strict";
      (e.d(l, "a", function () {
        return j;
      }),
        e.d(l, "b", function () {
          return V;
        }));
      var t = e("kZht"),
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
        g = e("9ZFG"),
        f = e("bMuc"),
        x = e("ZIdM"),
        y = e("3bpu"),
        _ = e("6zvu"),
        v = e("VcEz"),
        O = e("y9xZ"),
        T = e("+sw+"),
        C = e("BMrr"),
        N = e("IEns"),
        P = e("z6QT"),
        I = e("flsk"),
        M = e("FQEI"),
        S = e("O82V"),
        D = e("Eln4"),
        A = e("evAh"),
        L = e("Ps6X"),
        k = e("CpzC"),
        w = e("0Bsn"),
        E = e("5GjX"),
        U = e("mYyF"),
        R = e("v98a"),
        F = e("aOG8"),
        B = e("Krzs"),
        z = e("An66"),
        $ = e("nQV3"),
        H = e("3+OJ"),
        j =
          (e("xMt+"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.list-item__click-area[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.list-item__click-area[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;flex-grow:1;min-width:0;padding:0 20px}.list-item__text-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0}.list-item__checkbox[_ngcontent-%COMP%]{pointer-events:none}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%]{margin-right:30px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%]{margin-left:30px}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.list-item__text[_ngcontent-%COMP%]{flex:1 1 auto}.list-item__text--small[_ngcontent-%COMP%]{flex:1 1 auto;font-size:30px}.list-item__text--small--light[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular)}',
              ],
            ],
            data: {},
          }));
      function W(n) {
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
            t.xb(
              1,
              212992,
              null,
              0,
              i.a,
              [t.l, t.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            t.xb(
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
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "list-item__icon--begin"),
              n(
                l,
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
      function Y(n) {
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
            t.xb(
              1,
              212992,
              null,
              0,
              i.a,
              [t.l, t.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              2,
              16384,
              null,
              0,
              c.a,
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
              [[6, i.a], d.a, t.h, t.l, t.D, [2, p.a], [2, c.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            t.xb(
              4,
              147456,
              null,
              0,
              m.a,
              [g.a, t.h, u.a, [3, m.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(
              l,
              1,
              0,
              e.subtitleTextId
                ? e.subtitleTextId
                : "ListRouteItemSecondaryText",
              e.subtitleIdEnumType,
            ),
              n(l, 2, 0, !e.hasSubtitle),
              n(
                l,
                3,
                0,
                e.subtitleDeveloperText,
                e.subtitleTextId
                  ? e.subtitleTextId
                  : "ListRouteItemSecondaryText",
                1,
                e.subtitleNonI18nText,
              ),
              n(l, 4, 0, e.labelDisabled));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              l.component.lightSubtitle,
              t.Nb(l, 3).backgroundColor,
              t.Nb(l, 3).fixedNumberOfLines,
              t.Nb(l, 3).mayContainLatinCharsForArabic,
              t.Nb(l, 3).shortenWithEllipsisForArabic,
              t.Nb(l, 4).combinedDisabled,
              t.Nb(l, 4).useBrighterIcon,
            );
          },
        );
      }
      function V(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
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
              function (n, l, e) {
                var t = !0,
                  a = n.component;
                return (
                  "mib3Tap" === l && (t = !1 !== a.itemTapped() && t),
                  "mib3FocusPress" === l && (t = !1 !== a.focusPressed() && t),
                  t
                );
              },
              null,
              null,
            )),
            t.xb(1, 147456, null, 0, f.a, [t.l, t.z], null, null),
            t.xb(
              2,
              147456,
              null,
              0,
              x.a,
              [f.a, [2, y.a], [2, i.a], u.a],
              null,
              null,
            ),
            t.xb(
              3,
              212992,
              null,
              0,
              _.a,
              [
                u.a,
                v.b,
                x.a,
                [2, y.a],
                [2, i.a],
                [2, m.a],
                [2, O.a],
                [2, T.a],
                t.z,
                C.a,
                t.l,
                [2, N.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            t.Sb(131584, null, P.a, P.a, [[3, P.a]]),
            t.xb(
              5,
              4407296,
              null,
              0,
              I.a,
              [
                t.l,
                M.a,
                t.h,
                P.a,
                [2, S.a],
                [2, y.b],
                [2, y.a],
                [2, D.a],
                [2, A.a],
              ],
              null,
              null,
            ),
            t.xb(
              6,
              212992,
              null,
              0,
              L.a,
              [[2, _.a], [8, null], [3, L.a], t.l, t.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            t.xb(
              7,
              147456,
              null,
              0,
              k.a,
              [[2, _.a], [2, m.a], [2, w.a], [2, I.a], [2, E.b], t.l, U.a, R.b],
              null,
              null,
            ),
            t.xb(
              8,
              147456,
              null,
              0,
              F.a,
              [[2, I.a], [2, _.a], [2, v.b], B.a],
              null,
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, W)),
            t.xb(
              10,
              16384,
              null,
              0,
              z.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            t.yb(
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
            (n()(),
            t.yb(
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
            t.xb(
              13,
              212992,
              null,
              0,
              i.a,
              [t.l, t.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              14,
              16384,
              null,
              0,
              c.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            t.xb(
              15,
              245760,
              null,
              0,
              b.a,
              [[6, i.a], d.a, t.h, t.l, t.D, [2, p.a], [2, c.a], [2, h.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            t.xb(
              16,
              147456,
              null,
              0,
              m.a,
              [g.a, t.h, u.a, [3, m.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, Y)),
            t.xb(
              18,
              16384,
              null,
              0,
              z.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            t.yb(
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
              $.b,
              $.a,
            )),
            t.xb(
              20,
              49152,
              null,
              0,
              H.a,
              [],
              { checked: [0, "checked"] },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 3, 0),
              n(l, 5, 0),
              n(l, 6, 0, e.uiStateType),
              n(l, 10, 0, e.icon || e.iconFallback),
              n(
                l,
                13,
                0,
                e.titleTextId ? e.titleTextId : "ListRouteItemText",
                e.titleIdEnumType,
              ),
              n(l, 14, 0, !e.titleDeveloperText && !e.titleIdEnumType),
              n(
                l,
                15,
                0,
                e.titleDeveloperText,
                e.titleTextId ? e.titleTextId : "ListRouteItemText",
                1,
                e.titleNonI18nText,
              ),
              n(l, 16, 0, e.labelDisabled),
              n(l, 18, 0, e.hasSubtitle),
              n(l, 20, 0, e.checked));
          },
          function (n, l) {
            (n(l, 0, 1, [
              t.Nb(l, 5).markerClassEnabled,
              t.Nb(l, 6).uiStateListHorizontal,
              t.Nb(l, 6).uiStateListVertical,
              t.Nb(l, 6).uiStateCoverLeft,
              t.Nb(l, 6).uiStateCoverRight,
              t.Nb(l, 6).uiStateCoverBottom,
              t.Nb(l, 6).uiStateButton,
              t.Nb(l, 6).uiStateByDabLeft,
              t.Nb(l, 6).uiStateByDabRight,
              t.Nb(l, 6).uiStateLbDabLeft,
              t.Nb(l, 6).uiStateLbDabRight,
            ]),
              n(
                l,
                12,
                0,
                t.Nb(l, 15).backgroundColor,
                t.Nb(l, 15).fixedNumberOfLines,
                t.Nb(l, 15).mayContainLatinCharsForArabic,
                t.Nb(l, 15).shortenWithEllipsisForArabic,
                t.Nb(l, 16).combinedDisabled,
                t.Nb(l, 16).useBrighterIcon,
              ));
          },
        );
      }
    },
    eZMD: function (n, l, e) {
      "use strict";
      (e.d(l, "a", function () {
        return h;
      }),
        e.d(l, "b", function () {
          return f;
        }));
      var t = e("kZht"),
        a = e("8TlW"),
        i = e("fu7d"),
        o = e("bou3"),
        u = e("yNay"),
        r = e("ijxY"),
        s = e("Xo58"),
        c = e("m3Ja"),
        b = e("r+e+"),
        d = e("bmFL"),
        p = e("An66"),
        h =
          (e("HD2x"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;max-height:100%;max-width:100%;overflow:hidden}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;text-align:center;flex:1 1 0;font-size:40px;min-height:0}.secondary-text[_ngcontent-%COMP%]{padding-top:40px;font-size:30px}[_nghost-%COMP%]     [instruction-text-operational-panel], [_nghost-%COMP%]     au3-operation-panel{padding-top:9px;padding-bottom:8px}.component-layout-arabic[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .content[_ngcontent-%COMP%]{direction:rtl}.component-layout-latin[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .content[_ngcontent-%COMP%]{direction:ltr}.steering-wheel-left[_nghost-%COMP%]   .action-area[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .action-area[_ngcontent-%COMP%]{flex-direction:row}.steering-wheel-right[_nghost-%COMP%]   .action-area[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .action-area[_ngcontent-%COMP%]{flex-direction:row-reverse}",
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
              a.b,
              a.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              i.a,
              [t.l, t.D, o.a, u.a, [3, i.a], [8, null]],
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
              s.a,
              [[6, i.a], c.a, t.h, t.l, t.D, [2, b.a], [2, r.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(
              l,
              1,
              0,
              e.primaryTextId ? e.primaryTextId : "PrimaryText",
              e.primaryTextIdEnum,
            ),
              n(l, 2, 0, !e.hasPrimaryText),
              n(
                l,
                3,
                0,
                e.primaryDeveloperText,
                e.primaryTextId ? e.primaryTextId : "PrimaryText",
                e.primaryFixedNumberOfLines,
                e.primaryNonI18nText,
              ));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              t.Nb(l, 3).backgroundColor,
              t.Nb(l, 3).fixedNumberOfLines,
              t.Nb(l, 3).mayContainLatinCharsForArabic,
              t.Nb(l, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
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
              a.b,
              a.a,
            )),
            t.xb(
              1,
              212992,
              null,
              0,
              i.a,
              [t.l, t.D, o.a, u.a, [3, i.a], [8, null]],
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
              s.a,
              [[6, i.a], c.a, t.h, t.l, t.D, [2, b.a], [2, r.a], [2, d.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(
              l,
              1,
              0,
              e.secondaryTextId ? e.secondaryTextId : "SecondaryText",
              e.secondaryTextIdEnum,
            ),
              n(
                l,
                2,
                0,
                !e.hasSecondaryText ||
                  (!e.secondaryDeveloperText && !e.secondaryTextIdEnum),
              ),
              n(
                l,
                3,
                0,
                e.secondaryDeveloperText,
                e.secondaryTextId ? e.secondaryTextId : "SecondaryText",
                e.secondaryFixedNumberOfLines,
                e.secondaryNonI18nText,
              ));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              t.Nb(l, 3).backgroundColor,
              t.Nb(l, 3).fixedNumberOfLines,
              t.Nb(l, 3).mayContainLatinCharsForArabic,
              t.Nb(l, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function f(n) {
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
            (n()(), t.hb(16777216, null, null, 1, null, m)),
            t.xb(
              2,
              16384,
              null,
              0,
              p.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), t.hb(16777216, null, null, 1, null, g)),
            t.xb(
              4,
              16384,
              null,
              0,
              p.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            t.Mb(null, 0),
            t.Mb(null, 1),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 2, 0, e.hasPrimaryText), n(l, 4, 0, e.hasSecondaryText));
          },
          null,
        );
      }
    },
    ihOk: function (n, l, e) {
      "use strict";
      (e.d(l, "a", function () {
        return h;
      }),
        e.d(l, "b", function () {
          return x;
        }));
      var t = e("kZht"),
        a = e("An66"),
        i = e("fu7d"),
        o = e("bou3"),
        u = e("yNay"),
        r = e("8TlW"),
        s = e("Xo58"),
        c = e("m3Ja"),
        b = e("r+e+"),
        d = e("ijxY"),
        p = e("bmFL"),
        h =
          (e("ZMtB"),
          e("fzcM"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{height:100%;width:100%;max-height:100%;max-width:100%;min-height:0;display:flex;justify-content:center;flex-direction:column}.disclaimer-description[_ngcontent-%COMP%]{width:100%;font-size:40px;text-align:center}',
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
            t.xb(
              1,
              540672,
              null,
              0,
              a.r,
              [t.P],
              { ngTemplateOutlet: [0, "ngTemplateOutlet"] },
              null,
            ),
            (n()(), t.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(l, 1, 0, l.component.contentTemplate);
          },
          null,
        );
      }
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
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            t.Mb(null, 0),
            (n()(), t.hb(16777216, null, null, 1, null, m)),
            t.xb(
              3,
              16384,
              null,
              0,
              a.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), t.hb(0, null, null, 0)),
          ],
          function (n, l) {
            n(l, 3, 0, l.component.hasContentTemplate);
          },
          null,
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
              4,
              "span",
              [["id", "Disclaimer"]],
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
              i.a,
              [t.l, t.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (n()(),
            t.yb(
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
            t.xb(
              3,
              212992,
              null,
              0,
              i.a,
              [t.l, t.D, o.a, u.a, [3, i.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            t.xb(
              4,
              245760,
              null,
              0,
              s.a,
              [[6, i.a], c.a, t.h, t.l, t.D, [2, b.a], [2, d.a], [2, p.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (n, l) {
            var e = l.component;
            (n(l, 1, 0, "Disclaimer"),
              n(
                l,
                3,
                0,
                e.restrictionReason && e.disabledTextEnum[e.restrictionReason]
                  ? e.restrictionReason
                  : e.disabledReasonEnum.ERROR,
                e.disabledTextEnum,
              ),
              n(
                l,
                4,
                0,
                e.disabledTextEnum[e.restrictionReason] ||
                  e.disabledTextEnum.ERROR,
                e.restrictionReason && e.disabledTextEnum[e.restrictionReason]
                  ? e.restrictionReason
                  : e.disabledReasonEnum.ERROR,
                6,
                e.nonI18nDisabledText,
              ));
          },
          function (n, l) {
            n(
              l,
              2,
              0,
              t.Nb(l, 4).backgroundColor,
              t.Nb(l, 4).fixedNumberOfLines,
              t.Nb(l, 4).mayContainLatinCharsForArabic,
              t.Nb(l, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function x(n) {
        return t.ac(
          2,
          [
            (n()(), t.hb(16777216, null, null, 1, null, g)),
            t.xb(
              1,
              16384,
              null,
              0,
              a.k,
              [t.P, t.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), t.hb(0, [["disclaimerText", 2]], null, 0, null, f)),
          ],
          function (n, l) {
            n(l, 1, 0, !l.component.active, t.Nb(l, 2));
          },
          null,
        );
      }
    },
    nQV3: function (n, l, e) {
      "use strict";
      (e.d(l, "a", function () {
        return u;
      }),
        e.d(l, "b", function () {
          return r;
        }));
      var t = e("kZht"),
        a = e("fu7d"),
        i = e("bou3"),
        o = e("yNay"),
        u =
          (e("3+OJ"),
          t.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block;width:46px;height:50px}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr;padding-left:20px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:ltr;padding-right:20px}.checkbox[_ngcontent-%COMP%]{width:100%;height:100%}.checkbox__frame[_ngcontent-%COMP%]{display:block;position:absolute;width:24px;height:24px;transform:translateY(50%);border:1px solid #fff}.checkbox__checkmark[_ngcontent-%COMP%]{display:none;width:28px;height:12px;border:solid #fff;border-width:0 0 2px 2px;transform:translate3d(-1%,68%,0) rotate(-55deg) skewX(-20deg);box-shadow:inset 0 -5px #000,5px 4px #000}.checkbox__checkmark--checked[_ngcontent-%COMP%]{display:block}",
              ],
            ],
            data: {},
          }));
      function r(n) {
        return t.ac(
          2,
          [
            (n()(),
            t.yb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "checkbox"]],
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
              a.a,
              [t.l, t.D, i.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (n()(),
            t.yb(
              2,
              0,
              null,
              null,
              0,
              "div",
              [["class", "checkbox__frame"]],
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
              0,
              "div",
              [["class", "checkbox__checkmark"]],
              [[2, "checkbox__checkmark--checked", null]],
              null,
              null,
              null,
              null,
            )),
          ],
          function (n, l) {
            n(l, 1, 0, l.component.id);
          },
          function (n, l) {
            n(l, 3, 0, l.component.checked);
          },
        );
      }
    },
  },
]);
