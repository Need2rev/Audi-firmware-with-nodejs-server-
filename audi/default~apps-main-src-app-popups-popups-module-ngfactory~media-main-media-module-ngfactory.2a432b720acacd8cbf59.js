(window.webpackJsonp = window.webpackJsonp || []).push([
  [41],
  {
    "4cVW": function (n, l, t) {
      "use strict";
      (t.d(l, "a", function () {
        return tn;
      }),
        t.d(l, "b", function () {
          return un;
        }));
      var e = t("kZht"),
        i = t("oWpa"),
        a = t("fu7d"),
        r = t("bou3"),
        o = t("yNay"),
        u = t("yegR"),
        s = t("yuP3"),
        b = t("bMuc"),
        c = t("ZIdM"),
        d = t("3bpu"),
        h = t("OtM5"),
        f = t("9ZFG"),
        p = t("6zvu"),
        y = t("VcEz"),
        g = t("y9xZ"),
        m = t("+sw+"),
        x = t("BMrr"),
        E = t("IEns"),
        O = t("vwU6"),
        w = t("z6QT"),
        L = t("flsk"),
        C = t("FQEI"),
        T = t("O82V"),
        v = t("Eln4"),
        _ = t("evAh"),
        I = t("YcCK"),
        N = t("mYyF"),
        P = t("v98a"),
        M = t("CpzC"),
        S = t("0Bsn"),
        R = t("5GjX"),
        A = t("aOG8"),
        k = t("Krzs"),
        D = t("tZrF"),
        F = t("N2Hj"),
        z = t("UbWD"),
        $ = t("2rvh"),
        B = t("odRV"),
        U = t("Udyh"),
        V = t("I3ve"),
        j = t("qiAR"),
        H = t("007S"),
        W = t("oeT7"),
        G = t("oxWk"),
        K = t("Tr//"),
        Z = t("JDb9"),
        Y = t("4ZeQ"),
        X = t("tZxQ"),
        Q = t("hHAo"),
        J = t("VWff"),
        q = t("1qmX"),
        nn = t("An66"),
        ln = t("0qMr"),
        tn =
          (t("Bizr"),
          t("zRUB"),
          t("E2zj"),
          t("zSEC"),
          e.wb({
            encapsulation: 0,
            styles: [
              [
                "[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;height:100%}.statustext[_ngcontent-%COMP%]{text-align:center;flex-grow:1;font-size:40px}.list[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%}",
              ],
            ],
            data: {},
          }));
      function en(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-statustext",
              [
                ["class", "statustext"],
                ["id", "EmptyBrowser"],
              ],
              null,
              null,
              null,
              i.b,
              i.a,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [e.l, e.D, r.a, o.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              2,
              49152,
              null,
              0,
              u.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
              },
              null,
            ),
          ],
          function (n, l) {
            (n(l, 1, 0, "EmptyBrowser"),
              n(
                l,
                2,
                0,
                2,
                "Die Auswahl aus der Mediathek\nenth\xe4lt keine Elemente",
              ));
          },
          null,
        );
      }
      function an(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-media-browser-list-item",
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
              function (n, l, t) {
                var e = !0,
                  i = n.component;
                return (
                  "mib3Tap" === l &&
                    (e =
                      !1 !== i.selectBrowserEntry$$.next(n.context.$implicit) &&
                      e),
                  "mib3Longpress" === l &&
                    (e =
                      !1 !== i.itemLongpressed.emit(n.context.$implicit) && e),
                  e
                );
              },
              s.b,
              s.a,
            )),
            e.xb(1, 147456, null, 0, b.a, [e.l, e.z], null, null),
            e.xb(
              2,
              147456,
              null,
              0,
              c.a,
              [b.a, [2, d.a], [2, a.a], o.a],
              null,
              null,
            ),
            e.xb(
              3,
              147456,
              null,
              0,
              h.a,
              [f.a, e.h, o.a, [3, h.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            e.xb(
              4,
              212992,
              null,
              0,
              p.a,
              [
                o.a,
                y.b,
                c.a,
                [2, d.a],
                [2, a.a],
                [2, h.a],
                [2, g.a],
                [2, m.a],
                e.z,
                x.a,
                e.l,
                [2, E.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            e.xb(
              5,
              212992,
              null,
              0,
              O.a,
              [
                o.a,
                e.z,
                e.l,
                y.b,
                x.a,
                c.a,
                [2, d.a],
                [2, a.a],
                [2, h.a],
                [2, g.a],
                [2, m.a],
                [2, E.a],
              ],
              null,
              { longpress: "mib3Longpress" },
            ),
            e.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            e.xb(
              7,
              4407296,
              null,
              0,
              L.a,
              [
                e.l,
                C.a,
                e.h,
                w.a,
                [2, T.a],
                [2, d.b],
                [2, d.a],
                [2, v.a],
                [2, _.a],
              ],
              null,
              null,
            ),
            e.xb(
              8,
              147456,
              null,
              0,
              I.a,
              [[2, O.a], e.l, N.a, P.b],
              null,
              null,
            ),
            e.xb(
              9,
              147456,
              null,
              0,
              M.a,
              [[2, p.a], [2, h.a], [2, S.a], [2, L.a], [2, R.b], e.l, N.a, P.b],
              null,
              null,
            ),
            e.xb(
              10,
              147456,
              null,
              0,
              A.a,
              [[2, L.a], [2, p.a], [2, y.b], k.a],
              null,
              null,
            ),
            e.xb(
              11,
              49152,
              null,
              0,
              D.a,
              [],
              {
                item: [0, "item"],
                pathType: [1, "pathType"],
                isOneLineLayout: [2, "isOneLineLayout"],
              },
              null,
            ),
          ],
          function (n, l) {
            var t = l.component;
            (n(
              l,
              3,
              0,
              null == l.context.$implicit ? null : l.context.$implicit.hasError,
            ),
              n(l, 4, 0),
              n(l, 5, 0),
              n(l, 7, 0),
              n(
                l,
                11,
                0,
                l.context.$implicit,
                null == t.lastBrowserPath
                  ? null
                  : t.lastBrowserPath.contentType,
                t.isOneLineLayout(l.context.$implicit),
              ));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              e.Nb(l, 3).combinedDisabled,
              e.Nb(l, 3).useBrighterIcon,
              e.Nb(l, 7).markerClassEnabled,
            );
          },
        );
      }
      function rn(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              8,
              "au3-list",
              [["au3ListDomPaging", ""]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              F.b,
              F.a,
            )),
            e.Sb(6144, null, z.a, null, [$.a]),
            e.xb(2, 16384, null, 0, B.a, [e.l], null, null),
            e.xb(
              3,
              16384,
              null,
              0,
              U.a,
              [o.a],
              { itemHeightGuess: [0, "itemHeightGuess"] },
              null,
            ),
            e.xb(
              4,
              12828672,
              [[1, 4]],
              1,
              $.a,
              [
                [2, U.a],
                [2, V.a],
                [8, null],
                [2, a.a],
                [2, j.a],
                [2, H.a],
                [2, y.b],
                W.i,
                e.z,
                e.h,
                o.a,
                G.a,
                K.a,
                [2, C.a],
                d.a,
                [2, W.a],
              ],
              {
                itemHeightGuess: [0, "itemHeightGuess"],
                itemHeightFunction: [1, "itemHeightFunction"],
                lineNumbers: [2, "lineNumbers"],
                items: [3, "items"],
                stabilized: [4, "stabilized"],
              },
              null,
            ),
            e.Tb(603979776, 2, { template: 0 }),
            e.xb(
              6,
              212992,
              null,
              0,
              Z.a,
              [[4, $.a], [2, Y.a], X.a, Q.b, o.a],
              { lineNumbers: [0, "lineNumbers"] },
              null,
            ),
            e.xb(
              7,
              4341760,
              null,
              0,
              J.a,
              [Q.b, [4, $.a], o.a, [2, q.b]],
              { lineNumbers: [0, "lineNumbers"] },
              null,
            ),
            (n()(), e.hb(0, [[2, 2]], 0, 0, null, an)),
          ],
          function (n, l) {
            var t = l.component;
            (n(l, 3, 0, 120),
              n(
                l,
                4,
                0,
                120,
                t.calculateItemHeight,
                t.isSds,
                l.parent.context.mib3Let,
                !0,
              ),
              n(l, 6, 0, t.isSds),
              n(l, 7, 0, t.isSds));
          },
          function (n, l) {
            n(l, 0, 0, e.Nb(l, 4).showLineNumbers);
          },
        );
      }
      function on(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
            (n()(), e.hb(16777216, null, null, 1, null, en)),
            e.xb(
              2,
              16384,
              null,
              0,
              nn.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), e.hb(0, [["list", 2]], null, 0, null, rn)),
          ],
          function (n, l) {
            n(
              l,
              2,
              0,
              0 ===
                (null == l.context.mib3Let || null == l.context.mib3Let.paging
                  ? null
                  : l.context.mib3Let.paging.total),
              e.Nb(l, 3),
            );
          },
          null,
        );
      }
      function un(n) {
        return e.ac(
          0,
          [
            e.Tb(671088640, 1, { browserList: 0 }),
            (n()(), e.hb(16777216, null, null, 2, null, on)),
            e.xb(
              2,
              16384,
              null,
              0,
              ln.a,
              [e.L, e.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            e.Pb(131072, nn.b, [e.h]),
          ],
          function (n, l) {
            var t = l.component;
            n(l, 2, 0, e.Yb(l, 2, 0, e.Nb(l, 3).transform(t.items$)));
          },
          null,
        );
      }
    },
    Bizr: function (n, l, t) {
      "use strict";
      t.d(l, "a", function () {
        return m;
      });
      var e = t("kZht"),
        i = (t("zRUB"), t("Yi6/"), t("RJia")),
        a = t("QQZH"),
        r = t("ZTXN"),
        o = t("ROBh"),
        u = (t("zSEC"), t("Ohay")),
        s = t("8j5Y"),
        b = t("ZzcO"),
        c = t("kuMc"),
        d = t("YtkY"),
        h = t("TLy2"),
        f = t("E2zj"),
        p = t("qMQG"),
        y = t("wOB0");
      class g extends y.a {
        constructor(n, l) {
          (super(n), (this.referenceType = l), (this.referenceType = l));
        }
      }
      let m = (() => {
        class n {
          constructor(n, l, t, i) {
            ((this.browserService = n),
              (this.mediaRoutingService = l),
              (this.dialogService = t),
              (this.isSds = !1),
              (this.itemLongpressed = new e.n()),
              (this.items$$ = new a.a(1)),
              (this.items$ = this.items$$.pipe(Object(u.a)())),
              (this.selectBrowserEntry$$ = new r.a()),
              (this.takeUntil$$ = new r.a()),
              (this.listFrozen$$ = new r.a()),
              (this.logger = i.getLogger("media.MediaBrowserListComponent")),
              (this.calculateItemHeight = this.calculateItemHeight.bind(this)),
              this.selectBrowserEntry$$
                .pipe(
                  Object(s.a)((n) =>
                    this.logger.info("browser entry selected: ", n),
                  ),
                  Object(b.a)((n) =>
                    this.isSds
                      ? this.selectEntrySds(n)
                      : this.selectEntryHaptic(n),
                  ),
                  Object(c.a)(this.takeUntil$$),
                )
                .subscribe((n) => {
                  this.logger.info(
                    "selectBrowserEntry$$: select browser entry finished with: ",
                    n,
                  );
                }));
          }
          static isOneLineLayout(n, l) {
            return !(
              (n && n.hasError) ||
              (l && this.isTwoLineLayoutFilter.includes(l)) ||
              ((!n || n.type !== i.f.VIDEO) &&
                (!l || !this.isOneLineLayoutFilter.includes(l)))
            );
          }
          ngAfterViewInit() {
            let n = this.browserService.createBrowserList(
              this.browserList.requestedDynamicListCombined$,
            );
            (this.isSds &&
              (this.browserList.itemsWithLineNumbers$
                .pipe(Object(c.a)(this.takeUntil$$))
                .subscribe((n) => (this.visibleItems = n)),
              (n = n.pipe(
                Object(d.a)(
                  (n) => (
                    (n.data = n.data.map(
                      (n) => new g(n, this.getBrowserEntrySdsReferenceType(n)),
                    )),
                    n
                  ),
                ),
              ))),
              n
                .pipe(
                  Object(c.a)(this.listFrozen$$),
                  Object(c.a)(this.takeUntil$$),
                )
                .subscribe((n) => this.items$$.next(n)));
          }
          ngOnDestroy() {
            (this.browserService.browserSelectionActive$$.next(!1),
              this.takeUntil$$.next());
          }
          selectEntryHaptic(n) {
            return n.type === i.f.AUDIO || n.type === i.f.VIDEO
              ? (this.browserService.browserSelectionActive$$.next(!0),
                this.browserService.startPlaybackOfCurrentBrowserPath(n).pipe(
                  Object(s.a)(() =>
                    this.browserService.browserSelectionActive$$.next(!1),
                  ),
                  Object(h.a)((n) =>
                    n ? this.mediaRoutingService.goToNps() : Object(o.a)(!1),
                  ),
                ))
              : (this.logger.info("selectEntryHaptic: browse deeper", n),
                n.pathElement
                  ? (this.listFrozen$$.next(),
                    this.browserService
                      .browseInto(n.pathElement)
                      .pipe(
                        Object(h.a)(() =>
                          this.mediaRoutingService.goTo(
                            this.mediaRoutingService.currentRouteSnapshot ===
                              f.a.Browser.children.List
                              ? f.a.Browser.children.List2
                              : f.a.Browser.children.List,
                          ),
                        ),
                      ))
                  : (this.logger.error(
                      `selectEntryHaptic: Invalid path element for browser entry ${n.id}`,
                    ),
                    Object(o.a)(!1)));
          }
          selectEntrySds(n) {
            const l = this.visibleItems.find((l) => l.item === n);
            return l
              ? (this.logger.info(
                  `selectEntrySds: selecting visible item ${l.index}`,
                ),
                this.dialogService.selectListItem(l.index),
                Object(o.a)(!0))
              : (this.logger.warn(
                  `selectEntrySds: could not find selected entry ${JSON.stringify(n)} in visible items`,
                ),
                Object(o.a)(!1));
          }
          calculateItemHeight(n) {
            return this.isOneLineLayout(n) ? 100 : 120;
          }
          isOneLineLayout(l) {
            return n.isOneLineLayout(
              l,
              this.lastBrowserPath ? this.lastBrowserPath.contentType : void 0,
            );
          }
          getBrowserEntrySdsReferenceType(n) {
            switch (n.type) {
              case i.f.ALBUM:
                return p.d.ALBUM;
              case i.f.ARTIST:
                return p.d.ARTIST;
              case i.f.GENRE:
                return p.d.GENRE;
              case i.f.AUDIO:
                return p.d.TITLE;
              default:
                return (
                  this.logger.warn(
                    "getBrowserEntrySdsReferenceType: unexpected type in entry. Will return referenceType ARTIST.",
                    n,
                  ),
                  p.d.TITLE
                );
            }
          }
        }
        return (
          (n.isOneLineLayoutFilter = [
            i.f.FOLDER,
            i.f.PLAYLISTFOLDER,
            i.f.PLAYLIST,
            i.f.ALBUM,
            i.f.COMPILATIONFOLDER,
            i.f.COMPILATION,
            i.f.COMPOSER,
            i.f.ITUNESRADIOFOLDER,
            i.f.COMPOSERFOLDER,
          ]),
          (n.isTwoLineLayoutFilter = [
            i.f.GENREFOLDER,
            i.f.ALBUMFOLDER,
            i.f.ARTISTFOLDER,
            i.f.ARTIST,
            i.f.GENRE,
            i.f.VIDEOFOLDER,
          ]),
          n
        );
      })();
    },
    tZrF: function (n, l, t) {
      "use strict";
      t.d(l, "a", function () {
        return o;
      });
      var e = t("RJia"),
        i = (t("wOB0"), t("Yi6/")),
        a = t("kGpN"),
        r = (function (n) {
          return (
            (n.GENRES = "GENRES"),
            (n.ALBUMS = "ALBUMS"),
            (n.TITLE = "TITLE"),
            (n.ARTISTS = "ARTISTS"),
            (n.ARTIST = "ARTIST"),
            (n.VIDEOS = "VIDEOS"),
            (n.ERROR = "ERROR"),
            n
          );
        })({});
      class o {
        constructor() {
          ((this.environment = i.gd),
            (this.titleI18KeyEnum = e.e),
            (this.artistI18KeyEnum = e.b),
            (this.albumI18KeyEnum = e.a),
            (this.additionalTextTypeEnum = r),
            (this.browserListEntryFlagEnum = e.g),
            (this.iconCategoryEnum = i.Z),
            (this.sourceUnit = i.vc.SECONDS),
            (this.formattingRule = a.a.DurationInMMSS),
            (this.hasListIcon = !0),
            (this.isOneLineLayout = !1),
            (this.uiStateType = i.uc.ListHorizontal),
            (this.hasNoListIconFilter = [
              e.f.ARTISTFOLDER,
              e.f.PLAYLISTFOLDER,
              e.f.GENREFOLDER,
              e.f.VIDEOFOLDER,
              e.f.COMPOSERFOLDER,
            ]));
        }
        set item(n) {
          ((this.browserEntry = n), this.updateLayout());
        }
        set pathType(n) {
          ((this.layoutType = n), this.updateLayout());
        }
        updateLayout() {
          (this.layoutType &&
            (this.hasListIcon = !this.hasNoListIconFilter.includes(
              this.layoutType,
            )),
            this.browserEntry && this.browserEntry.hasError
              ? (this.additionalTextType = r.ERROR)
              : this.layoutType &&
                (this.additionalTextType =
                  this.layoutType === e.f.GENREFOLDER
                    ? r.GENRES
                    : this.layoutType === e.f.ALBUMFOLDER ||
                        this.layoutType === e.f.COMPOSERFOLDER
                      ? r.ALBUMS
                      : this.layoutType === e.f.ARTISTFOLDER ||
                          this.layoutType === e.f.GENRE
                        ? r.ARTISTS
                        : this.layoutType === e.f.ARTIST
                          ? r.ARTIST
                          : this.layoutType === e.f.VIDEOFOLDER
                            ? r.VIDEOS
                            : r.TITLE),
            this.browserEntry &&
              (this.listIconUrl =
                this.layoutType && this.layoutType === e.f.FOLDER
                  ? this.browserEntry.getDefaultCoverForFolderBrowsing()
                  : this.browserEntry.coverUrl));
        }
      }
    },
    yuP3: function (n, l, t) {
      "use strict";
      (t.d(l, "a", function () {
        return L;
      }),
        t.d(l, "b", function () {
          return U;
        }));
      var e = t("kZht"),
        i = t("HVUF"),
        a = t("B3Zb"),
        r = t("yNay"),
        o = t("DElP"),
        u = t("oeT7"),
        s = t("8TlW"),
        b = t("fu7d"),
        c = t("bou3"),
        d = t("Xo58"),
        h = t("m3Ja"),
        f = t("r+e+"),
        p = t("ijxY"),
        y = t("bmFL"),
        g = t("An66"),
        m = t("3EdB"),
        x = t("eoEw"),
        E = t("SOvQ"),
        O = t("Ps6X"),
        w = t("6zvu"),
        L =
          (t("tZrF"),
          e.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:block}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.component-layout-latin[_nghost-%COMP%]   .cover[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .cover[_ngcontent-%COMP%]{margin-left:0}.component-layout-latin[_nghost-%COMP%]   .entry[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .entry[_ngcontent-%COMP%]{padding-right:0;padding-left:30px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .cover[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .cover[_ngcontent-%COMP%]{margin-right:0}.component-layout-arabic[_nghost-%COMP%]   .entry[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .entry[_ngcontent-%COMP%]{padding-left:0;padding-right:30px}.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding-left:20px;padding-right:20px}.oneline[_ngcontent-%COMP%]{height:120px}.oneline-without-cover[_ngcontent-%COMP%]{height:100px}.twoline[_ngcontent-%COMP%]{height:120px}.cover[_ngcontent-%COMP%]{flex-shrink:0}.cover--oneline[_ngcontent-%COMP%], .cover--twoline[_ngcontent-%COMP%]{margin-top:11px;margin-bottom:9px}.entry[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;flex:1 1 auto;min-width:0}.first-line[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;text-align:start}.first-line--oneline[_ngcontent-%COMP%]{padding-top:35px}.first-line--oneline-without-cover[_ngcontent-%COMP%]{padding-top:25px}.first-line--twoline[_ngcontent-%COMP%]{padding-top:13px;padding-bottom:5px}.first-line__text[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;font-size:40px}.first-line__icon[_ngcontent-%COMP%]{width:40px;height:40px;padding-top:6px;margin-right:20px}.second-line[_ngcontent-%COMP%]{display:flex;flex-direction:row;text-align:start}.second-line__text[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;font-size:30px}.second-line__separator[_ngcontent-%COMP%]{flex-shrink:0;font-size:30px}',
              ],
            ],
            data: {},
          }));
      function C(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["au3ImageLockingCategory", ""],
                ["class", "cover"],
              ],
              [
                [2, "cover--twoline", null],
                [2, "cover--oneline", null],
                [2, "icon-component--hidden", null],
                [2, "lock-state-hidden", null],
                [2, "lock-state-faded", null],
              ],
              null,
              null,
              i.b,
              i.a,
            )),
            e.xb(
              1,
              4243456,
              null,
              0,
              a.b,
              [r.a, e.z],
              {
                fileName: [0, "fileName"],
                category: [1, "category"],
                blocksRouting: [2, "blocksRouting"],
              },
              null,
            ),
            e.xb(2, 212992, null, 0, o.a, [u.i, [2, u.a], e.h], null, null),
          ],
          function (n, l) {
            var t = l.component;
            (n(
              l,
              1,
              0,
              t.listIconUrl,
              t.isOneLineLayout && t.environment.isBentley
                ? t.iconCategoryEnum.ListOneline
                : t.iconCategoryEnum.ListTwoline,
              !1,
            ),
              n(l, 2, 0));
          },
          function (n, l) {
            var t = l.component;
            n(
              l,
              0,
              0,
              !t.isOneLineLayout,
              t.isOneLineLayout,
              e.Nb(l, 1).iconComponentHidden,
              e.Nb(l, 2).hide,
              e.Nb(l, 2).fade,
            );
          },
        );
      }
      function T(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "title-info__icon"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            e.yb(
              1,
              0,
              null,
              null,
              1,
              "au3-icon",
              [],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              i.b,
              i.a,
            )),
            e.xb(
              2,
              4243456,
              null,
              0,
              a.b,
              [r.a, e.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (n, l) {
            var t = l.component;
            n(
              l,
              2,
              0,
              null == t.browserEntry ? null : t.browserEntry.statusIconFileName,
              t.iconCategoryEnum.List,
            );
          },
          function (n, l) {
            n(l, 1, 0, e.Nb(l, 2).iconComponentHidden);
          },
        );
      }
      function v(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
            (n()(),
            e.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "second-line__text"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              s.b,
              s.a,
            )),
            e.xb(
              2,
              212992,
              null,
              0,
              b.a,
              [e.l, e.D, c.a, r.a, [3, b.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            e.xb(
              3,
              245760,
              null,
              0,
              d.a,
              [[6, b.a], h.a, e.h, e.l, e.D, [2, f.a], [2, p.a], [2, y.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
            (n()(),
            e.yb(
              4,
              0,
              null,
              null,
              1,
              "span",
              [["class", "second-line__separator"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), e.Xb(-1, null, ["\xa0-\xa0"])),
            (n()(),
            e.yb(
              6,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "second-line__text"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              s.b,
              s.a,
            )),
            e.xb(
              7,
              212992,
              null,
              0,
              b.a,
              [e.l, e.D, c.a, r.a, [3, b.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            e.xb(
              8,
              245760,
              null,
              0,
              d.a,
              [[6, b.a], h.a, e.h, e.l, e.D, [2, f.a], [2, p.a], [2, y.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (n, l) {
            var t = l.component;
            (n(
              l,
              2,
              0,
              null == t.browserEntry
                ? null
                : t.browserEntry.artistInternationalKey,
              t.artistI18KeyEnum,
            ),
              n(
                l,
                3,
                0,
                "Unbekannter Interpret",
                null == t.browserEntry
                  ? null
                  : t.browserEntry.artistInternationalKey,
                null == t.browserEntry || null == t.browserEntry.artist
                  ? null
                  : t.browserEntry.artist.token,
              ),
              n(
                l,
                7,
                0,
                null == t.browserEntry
                  ? null
                  : t.browserEntry.albumInternationalKey,
                t.albumI18KeyEnum,
              ),
              n(
                l,
                8,
                0,
                "Unbekanntes Album",
                null == t.browserEntry
                  ? null
                  : t.browserEntry.albumInternationalKey,
                null == t.browserEntry || null == t.browserEntry.album
                  ? null
                  : t.browserEntry.album.token,
              ));
          },
          function (n, l) {
            (n(
              l,
              1,
              0,
              e.Nb(l, 3).backgroundColor,
              e.Nb(l, 3).fixedNumberOfLines,
              e.Nb(l, 3).mayContainLatinCharsForArabic,
              e.Nb(l, 3).shortenWithEllipsisForArabic,
            ),
              n(
                l,
                6,
                0,
                e.Nb(l, 8).backgroundColor,
                e.Nb(l, 8).fixedNumberOfLines,
                e.Nb(l, 8).mayContainLatinCharsForArabic,
                e.Nb(l, 8).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function _(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "second-line__text"],
                ["id", "Interpreten"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              s.b,
              s.a,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              b.a,
              [e.l, e.D, c.a, r.a, [3, b.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              2,
              245760,
              null,
              0,
              d.a,
              [[6, b.a], h.a, e.h, e.l, e.D, [2, f.a], [2, p.a], [2, y.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (n, l) {
            (n(l, 1, 0, "Interpreten"),
              n(l, 2, 0, "Interpreten", "Interpreten"));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              e.Nb(l, 2).backgroundColor,
              e.Nb(l, 2).fixedNumberOfLines,
              e.Nb(l, 2).mayContainLatinCharsForArabic,
              e.Nb(l, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function I(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "second-line__text"],
                ["id", "Interpret"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              s.b,
              s.a,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              b.a,
              [e.l, e.D, c.a, r.a, [3, b.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              2,
              245760,
              null,
              0,
              d.a,
              [[6, b.a], h.a, e.h, e.l, e.D, [2, f.a], [2, p.a], [2, y.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (n, l) {
            (n(l, 1, 0, "Interpret"), n(l, 2, 0, "Interpret", "Interpret"));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              e.Nb(l, 2).backgroundColor,
              e.Nb(l, 2).fixedNumberOfLines,
              e.Nb(l, 2).mayContainLatinCharsForArabic,
              e.Nb(l, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function N(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
            e.yb(
              1,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "second-line__text"],
                ["id", "ArtistNumber"],
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
              s.b,
              s.a,
            )),
            e.xb(
              2,
              212992,
              null,
              0,
              b.a,
              [e.l, e.D, c.a, r.a, [3, b.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(3, 16384, null, 0, p.a, [], null, null),
            e.xb(
              4,
              245760,
              null,
              0,
              d.a,
              [[6, b.a], h.a, e.h, e.l, e.D, [2, f.a], [2, p.a], [2, y.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            (n()(),
            e.yb(
              5,
              0,
              null,
              null,
              1,
              "span",
              [["class", "second-line__separator"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), e.Xb(-1, null, ["\xa0"])),
            (n()(), e.hb(16777216, null, null, 1, null, _)),
            e.xb(
              8,
              16384,
              null,
              0,
              g.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), e.hb(0, [["interpret", 2]], null, 0, null, I)),
          ],
          function (n, l) {
            var t = l.component;
            (n(l, 2, 0, "ArtistNumber"),
              n(
                l,
                4,
                0,
                "ArtistNumber",
                (null == t.browserEntry ? null : t.browserEntry.folderCount) +
                  "",
              ),
              n(
                l,
                8,
                0,
                (null == t.browserEntry ? null : t.browserEntry.folderCount) >
                  1,
                e.Nb(l, 9),
              ));
          },
          function (n, l) {
            n(
              l,
              1,
              0,
              e.Nb(l, 4).backgroundColor,
              e.Nb(l, 4).fixedNumberOfLines,
              e.Nb(l, 4).mayContainLatinCharsForArabic,
              e.Nb(l, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function P(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "second-line__text"],
                ["id", "Alben"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              s.b,
              s.a,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              b.a,
              [e.l, e.D, c.a, r.a, [3, b.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              2,
              245760,
              null,
              0,
              d.a,
              [[6, b.a], h.a, e.h, e.l, e.D, [2, f.a], [2, p.a], [2, y.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (n, l) {
            (n(l, 1, 0, "Alben"), n(l, 2, 0, "Alben", "Alben"));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              e.Nb(l, 2).backgroundColor,
              e.Nb(l, 2).fixedNumberOfLines,
              e.Nb(l, 2).mayContainLatinCharsForArabic,
              e.Nb(l, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function M(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "second-line__text"],
                ["id", "Album"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              s.b,
              s.a,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              b.a,
              [e.l, e.D, c.a, r.a, [3, b.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              2,
              245760,
              null,
              0,
              d.a,
              [[6, b.a], h.a, e.h, e.l, e.D, [2, f.a], [2, p.a], [2, y.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (n, l) {
            (n(l, 1, 0, "Album"), n(l, 2, 0, "Album", "Album"));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              e.Nb(l, 2).backgroundColor,
              e.Nb(l, 2).fixedNumberOfLines,
              e.Nb(l, 2).mayContainLatinCharsForArabic,
              e.Nb(l, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function S(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              11,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            e.yb(
              1,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "second-line__text"],
                ["id", "AlbumNumber"],
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
              s.b,
              s.a,
            )),
            e.xb(
              2,
              212992,
              null,
              0,
              b.a,
              [e.l, e.D, c.a, r.a, [3, b.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(3, 16384, null, 0, p.a, [], null, null),
            e.xb(
              4,
              245760,
              null,
              0,
              d.a,
              [[6, b.a], h.a, e.h, e.l, e.D, [2, f.a], [2, p.a], [2, y.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            (n()(),
            e.yb(
              5,
              0,
              null,
              null,
              1,
              "span",
              [["class", "second-line__separator"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), e.Xb(-1, null, ["\xa0"])),
            (n()(), e.hb(16777216, null, null, 1, null, P)),
            e.xb(
              8,
              16384,
              null,
              0,
              g.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), e.hb(0, [["album", 2]], null, 0, null, M)),
            (n()(),
            e.yb(
              10,
              0,
              null,
              null,
              1,
              "span",
              [["class", "second-line__separator"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), e.Xb(-1, null, ["\xa0-\xa0"])),
          ],
          function (n, l) {
            var t = l.component;
            (n(l, 2, 0, "AlbumNumber"),
              n(
                l,
                4,
                0,
                "AlbumNumber",
                (null == t.browserEntry ? null : t.browserEntry.folderCount) +
                  "",
              ),
              n(
                l,
                8,
                0,
                (null == t.browserEntry ? null : t.browserEntry.folderCount) >
                  1,
                e.Nb(l, 9),
              ));
          },
          function (n, l) {
            n(
              l,
              1,
              0,
              e.Nb(l, 4).backgroundColor,
              e.Nb(l, 4).fixedNumberOfLines,
              e.Nb(l, 4).mayContainLatinCharsForArabic,
              e.Nb(l, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function R(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
            (n()(),
            e.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "second-line__text"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              s.b,
              s.a,
            )),
            e.xb(
              2,
              212992,
              null,
              0,
              b.a,
              [e.l, e.D, c.a, r.a, [3, b.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            e.xb(
              3,
              245760,
              null,
              0,
              d.a,
              [[6, b.a], h.a, e.h, e.l, e.D, [2, f.a], [2, p.a], [2, y.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
            (n()(),
            e.yb(
              4,
              0,
              null,
              null,
              1,
              "span",
              [["class", "second-line__separator"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), e.Xb(-1, null, ["\xa0-\xa0"])),
          ],
          function (n, l) {
            var t = l.component;
            (n(
              l,
              2,
              0,
              null == t.browserEntry
                ? null
                : t.browserEntry.artistInternationalKey,
              t.artistI18KeyEnum,
            ),
              n(
                l,
                3,
                0,
                "Unbekannter Artist",
                null == t.browserEntry
                  ? null
                  : t.browserEntry.artistInternationalKey,
                null == t.browserEntry || null == t.browserEntry.artist
                  ? null
                  : t.browserEntry.artist.token,
              ));
          },
          function (n, l) {
            n(
              l,
              1,
              0,
              e.Nb(l, 3).backgroundColor,
              e.Nb(l, 3).fixedNumberOfLines,
              e.Nb(l, 3).mayContainLatinCharsForArabic,
              e.Nb(l, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function A(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
            (n()(),
            e.yb(
              1,
              0,
              null,
              null,
              1,
              "au3-formatted-unit-renderer",
              [["class", "second-line__text"]],
              [[2, "invisible", null]],
              null,
              null,
              m.b,
              m.a,
            )),
            e.xb(
              2,
              180224,
              null,
              0,
              x.b,
              [h.a, E.a, e.h],
              {
                rawValue: [0, "rawValue"],
                rawValueUnit: [1, "rawValueUnit"],
                rawValueFormattingRule: [2, "rawValueFormattingRule"],
              },
              null,
            ),
          ],
          function (n, l) {
            var t = l.component;
            n(
              l,
              2,
              0,
              null == t.browserEntry ? null : t.browserEntry.totalPlaytime,
              t.sourceUnit,
              t.formattingRule,
            );
          },
          function (n, l) {
            n(l, 1, 0, e.Nb(l, 2).isInvisible);
          },
        );
      }
      function k(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
            (n()(),
            e.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "second-line__text"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              s.b,
              s.a,
            )),
            e.xb(
              2,
              212992,
              null,
              0,
              b.a,
              [e.l, e.D, c.a, r.a, [3, b.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            e.xb(
              3,
              245760,
              null,
              0,
              d.a,
              [[6, b.a], h.a, e.h, e.l, e.D, [2, f.a], [2, p.a], [2, y.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (n, l) {
            var t = l.component;
            (n(
              l,
              2,
              0,
              null == t.browserEntry ? null : t.browserEntry.error,
              t.browserListEntryFlagEnum,
            ),
              n(
                l,
                3,
                0,
                null == t.browserEntry ? null : t.browserEntry.error,
                null == t.browserEntry ? null : t.browserEntry.error,
              ));
          },
          function (n, l) {
            n(
              l,
              1,
              0,
              e.Nb(l, 3).backgroundColor,
              e.Nb(l, 3).fixedNumberOfLines,
              e.Nb(l, 3).mayContainLatinCharsForArabic,
              e.Nb(l, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function D(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "second-line__text"],
                ["id", "Titels"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              s.b,
              s.a,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              b.a,
              [e.l, e.D, c.a, r.a, [3, b.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              2,
              245760,
              null,
              0,
              d.a,
              [[6, b.a], h.a, e.h, e.l, e.D, [2, f.a], [2, p.a], [2, y.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (n, l) {
            (n(l, 1, 0, "Titels"), n(l, 2, 0, "Titel", "Titels"));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              e.Nb(l, 2).backgroundColor,
              e.Nb(l, 2).fixedNumberOfLines,
              e.Nb(l, 2).mayContainLatinCharsForArabic,
              e.Nb(l, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function F(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "second-line__text"],
                ["id", "Titel"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              s.b,
              s.a,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              b.a,
              [e.l, e.D, c.a, r.a, [3, b.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(
              2,
              245760,
              null,
              0,
              d.a,
              [[6, b.a], h.a, e.h, e.l, e.D, [2, f.a], [2, p.a], [2, y.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (n, l) {
            (n(l, 1, 0, "Titel"), n(l, 2, 0, "Titel", "Titel"));
          },
          function (n, l) {
            n(
              l,
              0,
              0,
              e.Nb(l, 2).backgroundColor,
              e.Nb(l, 2).fixedNumberOfLines,
              e.Nb(l, 2).mayContainLatinCharsForArabic,
              e.Nb(l, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function z(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
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
            (n()(),
            e.yb(
              1,
              0,
              null,
              null,
              1,
              "span",
              [["class", "second-line__separator"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), e.Xb(-1, null, ["\xa0"])),
            (n()(), e.hb(16777216, null, null, 1, null, D)),
            e.xb(
              4,
              16384,
              null,
              0,
              g.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), e.hb(0, [["title", 2]], null, 0, null, F)),
          ],
          function (n, l) {
            var t = l.component;
            n(
              l,
              4,
              0,
              (null == t.browserEntry ? null : t.browserEntry.fileCount) > 1,
              e.Nb(l, 5),
            );
          },
          null,
        );
      }
      function $(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              6,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            e.yb(
              1,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "second-line__text"],
                ["id", "TitleNumber"],
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
              s.b,
              s.a,
            )),
            e.xb(
              2,
              212992,
              null,
              0,
              b.a,
              [e.l, e.D, c.a, r.a, [3, b.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            e.xb(3, 16384, null, 0, p.a, [], null, null),
            e.xb(
              4,
              245760,
              null,
              0,
              d.a,
              [[6, b.a], h.a, e.h, e.l, e.D, [2, f.a], [2, p.a], [2, y.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            (n()(), e.hb(16777216, null, null, 1, null, z)),
            e.xb(
              6,
              16384,
              null,
              0,
              g.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), e.hb(0, null, null, 0)),
          ],
          function (n, l) {
            var t = l.component;
            (n(l, 2, 0, "TitleNumber"),
              n(
                l,
                4,
                0,
                "TitleNumber",
                (null == t.browserEntry ? null : t.browserEntry.fileCount) + "",
              ),
              n(
                l,
                6,
                0,
                (null == t.browserEntry ? null : t.browserEntry.fileCount) &&
                  (null == t.browserEntry ? null : t.browserEntry.fileCount) >
                    0,
              ));
          },
          function (n, l) {
            n(
              l,
              1,
              0,
              e.Nb(l, 4).backgroundColor,
              e.Nb(l, 4).fixedNumberOfLines,
              e.Nb(l, 4).mayContainLatinCharsForArabic,
              e.Nb(l, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function B(n) {
        return e.ac(
          0,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              17,
              "div",
              [
                ["class", "second-line"],
                ["id", "SecondLine"],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            e.xb(
              1,
              212992,
              null,
              0,
              b.a,
              [e.l, e.D, c.a, r.a, [3, b.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (n()(),
            e.yb(
              2,
              0,
              null,
              null,
              13,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            e.xb(
              3,
              16384,
              null,
              0,
              g.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (n()(), e.hb(16777216, null, null, 1, null, v)),
            e.xb(
              5,
              278528,
              null,
              0,
              g.p,
              [e.P, e.L, g.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), e.hb(16777216, null, null, 1, null, N)),
            e.xb(
              7,
              278528,
              null,
              0,
              g.p,
              [e.P, e.L, g.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), e.hb(16777216, null, null, 1, null, S)),
            e.xb(
              9,
              278528,
              null,
              0,
              g.p,
              [e.P, e.L, g.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), e.hb(16777216, null, null, 1, null, R)),
            e.xb(
              11,
              278528,
              null,
              0,
              g.p,
              [e.P, e.L, g.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), e.hb(16777216, null, null, 1, null, A)),
            e.xb(
              13,
              278528,
              null,
              0,
              g.p,
              [e.P, e.L, g.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), e.hb(16777216, null, null, 1, null, k)),
            e.xb(
              15,
              278528,
              null,
              0,
              g.p,
              [e.P, e.L, g.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), e.hb(16777216, null, null, 1, null, $)),
            e.xb(
              17,
              16384,
              null,
              0,
              g.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, l) {
            var t = l.component;
            (n(l, 1, 0, "SecondLine"),
              n(l, 3, 0, t.additionalTextType),
              n(l, 5, 0, t.additionalTextTypeEnum.TITLE),
              n(l, 7, 0, t.additionalTextTypeEnum.GENRES),
              n(l, 9, 0, t.additionalTextTypeEnum.ARTISTS),
              n(l, 11, 0, t.additionalTextTypeEnum.ALBUMS),
              n(l, 13, 0, t.additionalTextTypeEnum.VIDEOS),
              n(l, 15, 0, t.additionalTextTypeEnum.ERROR),
              n(
                l,
                17,
                0,
                t.additionalTextType === t.additionalTextTypeEnum.ALBUMS ||
                  t.additionalTextType === t.additionalTextTypeEnum.ARTISTS ||
                  t.additionalTextType === t.additionalTextTypeEnum.ARTIST,
              ));
          },
          null,
        );
      }
      function U(n) {
        return e.ac(
          2,
          [
            (n()(),
            e.yb(
              0,
              0,
              null,
              null,
              13,
              "div",
              [["class", "wrapper"]],
              [
                [2, "oneline", null],
                [2, "oneline-without-cover", null],
                [2, "twoline", null],
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
            e.xb(
              1,
              212992,
              null,
              0,
              O.a,
              [[2, w.a], [8, null], [3, O.a], e.l, e.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (n()(), e.hb(16777216, null, null, 1, null, C)),
            e.xb(
              3,
              16384,
              null,
              0,
              g.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            e.yb(
              4,
              0,
              null,
              null,
              9,
              "div",
              [
                ["class", "entry"],
                ["id", "FirstLine"],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            e.xb(
              5,
              212992,
              null,
              0,
              b.a,
              [e.l, e.D, c.a, r.a, [3, b.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (n()(),
            e.yb(
              6,
              0,
              null,
              null,
              5,
              "div",
              [["class", "first-line"]],
              [
                [2, "first-line--oneline", null],
                [2, "first-line--oneline-without-cover", null],
                [2, "first-line--twoline", null],
              ],
              null,
              null,
              null,
              null,
            )),
            (n()(),
            e.yb(
              7,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "first-line__text"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              s.b,
              s.a,
            )),
            e.xb(
              8,
              212992,
              null,
              0,
              b.a,
              [e.l, e.D, c.a, r.a, [3, b.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            e.xb(
              9,
              245760,
              null,
              0,
              d.a,
              [[6, b.a], h.a, e.h, e.l, e.D, [2, f.a], [2, p.a], [2, y.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
            (n()(), e.hb(16777216, null, null, 1, null, T)),
            e.xb(
              11,
              16384,
              null,
              0,
              g.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), e.hb(16777216, null, null, 1, null, B)),
            e.xb(
              13,
              16384,
              null,
              0,
              g.k,
              [e.P, e.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, l) {
            var t = l.component;
            (n(l, 1, 0, t.uiStateType),
              n(l, 3, 0, t.hasListIcon),
              n(l, 5, 0, "FirstLine"),
              n(
                l,
                8,
                0,
                null == t.browserEntry
                  ? null
                  : t.browserEntry.titleInternationalKey,
                t.titleI18KeyEnum,
              ),
              n(
                l,
                9,
                0,
                null == t.browserEntry
                  ? null
                  : t.browserEntry.titleInternationalKey,
                null == t.browserEntry
                  ? null
                  : t.browserEntry.titleInternationalKey,
                null == t.browserEntry || null == t.browserEntry.title
                  ? null
                  : t.browserEntry.title.token,
              ),
              n(
                l,
                11,
                0,
                (null == t.browserEntry
                  ? null
                  : t.browserEntry.isOnlineTitle) ||
                  (null == t.browserEntry ? null : t.browserEntry.hasError),
              ),
              n(l, 13, 0, !t.isOneLineLayout));
          },
          function (n, l) {
            var t = l.component;
            (n(l, 0, 1, [
              t.isOneLineLayout && t.hasListIcon,
              t.isOneLineLayout && !t.hasListIcon,
              !t.isOneLineLayout,
              e.Nb(l, 1).uiStateListHorizontal,
              e.Nb(l, 1).uiStateListVertical,
              e.Nb(l, 1).uiStateCoverLeft,
              e.Nb(l, 1).uiStateCoverRight,
              e.Nb(l, 1).uiStateCoverBottom,
              e.Nb(l, 1).uiStateButton,
              e.Nb(l, 1).uiStateByDabLeft,
              e.Nb(l, 1).uiStateByDabRight,
              e.Nb(l, 1).uiStateLbDabLeft,
              e.Nb(l, 1).uiStateLbDabRight,
            ]),
              n(
                l,
                6,
                0,
                t.isOneLineLayout && t.hasListIcon,
                t.isOneLineLayout && !t.hasListIcon,
                !t.isOneLineLayout,
              ),
              n(
                l,
                7,
                0,
                e.Nb(l, 9).backgroundColor,
                e.Nb(l, 9).fixedNumberOfLines,
                e.Nb(l, 9).mayContainLatinCharsForArabic,
                e.Nb(l, 9).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
    },
  },
]);
