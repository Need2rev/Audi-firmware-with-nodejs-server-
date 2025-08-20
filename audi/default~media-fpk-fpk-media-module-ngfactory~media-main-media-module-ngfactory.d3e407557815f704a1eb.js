(window.webpackJsonp = window.webpackJsonp || []).push([
  [54],
  {
    "+Cqr": function (t, n, e) {
      "use strict";
      (e.d(n, "a", function () {
        return l;
      }),
        e.d(n, "b", function () {
          return a;
        }),
        e.d(n, "c", function () {
          return o;
        }),
        e.d(n, "d", function () {
          return r;
        }));
      var i = e("X4XO");
      const l = new Map();
      (l.set(i.f.CARDMISSING, "E860_media_tv_cas_missing.webp"),
        l.set(i.f.CARDERROR, "E861_media_tv_cas_error.webp"),
        l.set(i.f.LOCKED, "EAA2_media_tv_cas_locked.webp"),
        l.set(i.f.OK, ""));
      const a = new Map();
      (a.set(i.p.AUDIOGOOD, ""),
        a.set(i.p.DROPOUT, "ES01B_audio_low_signal.webp"),
        a.set(i.p.NORECEPTION, "ES01B_audio_low_signal.webp"),
        a.set(i.p.NOAUDIOSERVICE, "ES01F_audio_mute.webp"));
      const o = new Map();
      (o.set(i.p.AUDIOGOOD, ""),
        o.set(i.p.DROPOUT, "E01B_audio_low_signal.webp"),
        o.set(i.p.NORECEPTION, "E01B_audio_low_signal.webp"),
        o.set(i.p.NOAUDIOSERVICE, "E01F_audio_mute.webp"));
      const r = new Map();
      (r.set(i.n.DTVHDTV, "E9C6_media_hdtv.webp"),
        r.set(i.n.AUDIO, "E851_media_stationtype_audio.webp"),
        r.set(i.n.DATA, "E853_media_stationtype_row.webp"),
        r.set(i.n.CASPAYTV, "E854_media_stationtype_encrypted.webp"),
        r.set(i.n.VISUALAUDIO, "E855_media_stationtype_slideshow.webp"),
        r.set(i.n.CMMB, "E856_media_stationtype_cmmb.webp"),
        r.set(i.n.CMMBAUDIO, "E857_media_stationtype_cmmb_audio.webp"),
        r.set(i.n.ISDBSUBSERVICE1, "E858_media_stationtype_seg.webp"),
        r.set(i.n.ISDBSUBSERVICE2, "E852_media_stationtype_jp.webp"),
        r.set(i.n.UNKNOWN, ""),
        r.set(i.n.DTV, ""),
        r.set(i.n.DTVSUBSERVICE2, ""),
        r.set(i.n.DTVSUBSERVICE3, ""),
        r.set(i.n.DTVSUBSERVICE4, ""),
        r.set(i.n.DTVSUBSERVICE5, ""),
        r.set(i.n.DUMMY, ""));
    },
    "6LP9": function (t, n, e) {
      "use strict";
      (e.d(n, "a", function () {
        return d;
      }),
        e.d(n, "b", function () {
          return h;
        }));
      var i = e("kZht"),
        l = e("VKfg"),
        a = e("EkEa"),
        o = e("oPv+"),
        r = e("An66"),
        u = e("EyLa"),
        s = e("4nnk"),
        c = e("0qMr"),
        d =
          (e("L8Px"),
          e("74Ku"),
          e("yNay"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                ".progressbar__times[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.progressbar__process[_ngcontent-%COMP%]{margin:15px 0}",
              ],
            ],
            data: {},
          }));
      function b(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              4,
              "div",
              [["class", "progressbar__times"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              1,
              0,
              null,
              null,
              1,
              "au3-time-display",
              [],
              null,
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(2, 49152, null, 0, a.a, [o.a], { time: [0, "time"] }, null),
            (t()(),
            i.yb(
              3,
              0,
              null,
              null,
              1,
              "au3-time-display",
              [],
              null,
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(4, 49152, null, 0, a.a, [o.a], { time: [0, "time"] }, null),
          ],
          function (t, n) {
            (t(n, 2, 0, n.parent.context.mib3Let.nowStartTimeInMs),
              t(n, 4, 0, n.parent.context.mib3Let.nowEndTimeInMs));
          },
          null,
        );
      }
      function p(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
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
            (t()(), i.hb(16777216, null, null, 2, null, b)),
            i.xb(
              2,
              16384,
              null,
              0,
              r.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            i.Pb(131072, r.b, [i.h]),
            (t()(),
            i.yb(
              4,
              0,
              null,
              null,
              1,
              "au3-progressbar",
              [["class", "progressbar__process"]],
              [
                [2, "sxm--rotate", null],
                [2, "progressbar--infinite", null],
              ],
              null,
              null,
              u.b,
              u.a,
            )),
            i.xb(
              5,
              49152,
              null,
              0,
              s.a,
              [i.l, i.h],
              { min: [0, "min"], max: [1, "max"], current: [2, "current"] },
              null,
            ),
          ],
          function (t, n) {
            var e = n.component;
            (t(
              n,
              2,
              0,
              e.isTimeVisible &&
                i.Yb(n, 2, 0, i.Nb(n, 3).transform(e.isTimeValid$$)),
            ),
              t(
                n,
                5,
                0,
                n.context.mib3Let.nowStartTimeInMs,
                n.context.mib3Let.nowEndTimeInMs,
                n.context.mib3Let.nowTimeInMs,
              ));
          },
          function (t, n) {
            t(n, 4, 0, i.Nb(n, 5).shouldRotateForSxm, i.Nb(n, 5).infinite);
          },
        );
      }
      function h(t) {
        return i.ac(
          2,
          [
            (t()(), i.hb(16777216, null, null, 2, null, p)),
            i.xb(
              1,
              16384,
              null,
              0,
              c.a,
              [i.L, i.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            i.Pb(131072, r.b, [i.h]),
          ],
          function (t, n) {
            var e = n.component;
            t(
              n,
              1,
              0,
              i.Yb(n, 1, 0, i.Nb(n, 2).transform(e.tvProgressbarTimes$$)),
            );
          },
          null,
        );
      }
    },
    AuHH: function (t, n, e) {
      "use strict";
      (e.d(n, "a", function () {
        return v;
      }),
        e.d(n, "b", function () {
          return T;
        }));
      var i = e("kZht"),
        l = e("8TlW"),
        a = e("An66"),
        o = e("fu7d"),
        r = e("bou3"),
        u = e("yNay"),
        s = e("ijxY"),
        c = e("Xo58"),
        d = e("m3Ja"),
        b = e("r+e+"),
        p = e("bmFL"),
        h = e("VKfg"),
        m = e("EkEa"),
        f = e("oPv+"),
        v =
          (e("Su7d"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row}.main-font-size[_ngcontent-%COMP%]{font-size:30px}.fpk[_ngcontent-%COMP%]{width:590px}.fpk--font-size[_ngcontent-%COMP%]{font-size:28px}.fpk-stage-small[_nghost-%COMP%]   .fpk[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .fpk[_ngcontent-%COMP%]{width:340px}",
              ],
            ],
            data: {},
          }));
      function S(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              5,
              "au3-i18n-label",
              [
                ["id", "TimeSpacer"],
                ["nonI18nValue", " - "],
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
              l.b,
              l.a,
            )),
            i.xb(
              1,
              278528,
              null,
              0,
              a.i,
              [i.s, i.t, i.l, i.D],
              { ngClass: [0, "ngClass"] },
              null,
            ),
            i.Qb(2, { "fpk--font-size": 0 }),
            i.xb(
              3,
              212992,
              null,
              0,
              o.a,
              [i.l, i.D, r.a, u.a, [3, o.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(4, 16384, null, 0, s.a, [], null, null),
            i.xb(
              5,
              245760,
              null,
              0,
              c.a,
              [[6, o.a], d.a, i.h, i.l, i.D, [2, b.a], [2, s.a], [2, p.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (t, n) {
            var e = t(n, 2, 0, n.component.isFpk);
            (t(n, 1, 0, e),
              t(n, 3, 0, "TimeSpacer"),
              t(n, 5, 0, "TimeSpacer", " - "));
          },
          function (t, n) {
            t(
              n,
              0,
              0,
              i.Nb(n, 5).backgroundColor,
              i.Nb(n, 5).fixedNumberOfLines,
              i.Nb(n, 5).mayContainLatinCharsForArabic,
              i.Nb(n, 5).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function g(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              20,
              "div",
              [["class", "container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            i.xb(
              1,
              278528,
              null,
              0,
              a.i,
              [i.s, i.t, i.l, i.D],
              { klass: [0, "klass"], ngClass: [1, "ngClass"] },
              null,
            ),
            i.Qb(2, { container: 0, fpk: 1, "main-font-size": 2 }),
            (t()(),
            i.yb(
              3,
              0,
              null,
              null,
              1,
              "au3-time-display",
              [],
              null,
              null,
              null,
              h.b,
              h.a,
            )),
            i.xb(4, 49152, null, 0, m.a, [f.a], { time: [0, "time"] }, null),
            (t()(), i.hb(16777216, null, null, 1, null, S)),
            i.xb(
              6,
              16384,
              null,
              0,
              a.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(),
            i.yb(
              7,
              0,
              null,
              null,
              1,
              "au3-time-display",
              [],
              null,
              null,
              null,
              h.b,
              h.a,
            )),
            i.xb(8, 49152, null, 0, m.a, [f.a], { time: [0, "time"] }, null),
            (t()(),
            i.yb(
              9,
              0,
              null,
              null,
              5,
              "au3-i18n-label",
              [
                ["id", "DetailSpacer"],
                ["nonI18nValue", " "],
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
              l.b,
              l.a,
            )),
            i.xb(
              10,
              278528,
              null,
              0,
              a.i,
              [i.s, i.t, i.l, i.D],
              { ngClass: [0, "ngClass"] },
              null,
            ),
            i.Qb(11, { "fpk--font-size": 0 }),
            i.xb(
              12,
              212992,
              null,
              0,
              o.a,
              [i.l, i.D, r.a, u.a, [3, o.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(13, 16384, null, 0, s.a, [], null, null),
            i.xb(
              14,
              245760,
              null,
              0,
              c.a,
              [[6, o.a], d.a, i.h, i.l, i.D, [2, b.a], [2, s.a], [2, p.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            (t()(),
            i.yb(
              15,
              0,
              null,
              null,
              5,
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
              l.b,
              l.a,
            )),
            i.xb(
              16,
              278528,
              null,
              0,
              a.i,
              [i.s, i.t, i.l, i.D],
              { ngClass: [0, "ngClass"] },
              null,
            ),
            i.Qb(17, { "fpk--font-size": 0 }),
            i.xb(
              18,
              212992,
              null,
              0,
              o.a,
              [i.l, i.D, r.a, u.a, [3, o.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(19, 16384, null, 0, s.a, [], null, null),
            i.xb(
              20,
              245760,
              null,
              0,
              c.a,
              [[6, o.a], d.a, i.h, i.l, i.D, [2, b.a], [2, s.a], [2, p.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
          ],
          function (t, n) {
            var e = n.component,
              i = t(n, 2, 0, !0, e.isFpk, !e.isFpk);
            (t(n, 1, 0, "container", i),
              t(
                n,
                4,
                0,
                null == e.tvStation || null == e.tvStation.selectedStation
                  ? null
                  : e.tvStation.selectedStation.nowStartTime,
              ),
              t(
                n,
                6,
                0,
                (null == e.tvStation || null == e.tvStation.selectedStation
                  ? null
                  : e.tvStation.selectedStation.nowStartTime) ||
                  (null == e.tvStation || null == e.tvStation.selectedStation
                    ? null
                    : e.tvStation.selectedStation.nowEndTime),
              ),
              t(
                n,
                8,
                0,
                null == e.tvStation || null == e.tvStation.selectedStation
                  ? null
                  : e.tvStation.selectedStation.nowEndTime,
              ));
            var l = t(n, 11, 0, e.isFpk);
            (t(n, 10, 0, l),
              t(n, 12, 0, "DetailSpacer"),
              t(n, 14, 0, "DetailSpacer", " "));
            var a = t(n, 17, 0, e.isFpk);
            (t(n, 16, 0, a),
              t(n, 18, 0, "TvStationDetailInfo"),
              t(
                n,
                20,
                0,
                "TvStationDetailInfo",
                null == e.tvStation || null == e.tvStation.selectedStation
                  ? null
                  : e.tvStation.selectedStation.nowProgramInfo,
              ));
          },
          function (t, n) {
            (t(
              n,
              9,
              0,
              i.Nb(n, 14).backgroundColor,
              i.Nb(n, 14).fixedNumberOfLines,
              i.Nb(n, 14).mayContainLatinCharsForArabic,
              i.Nb(n, 14).shortenWithEllipsisForArabic,
            ),
              t(
                n,
                15,
                0,
                i.Nb(n, 20).backgroundColor,
                i.Nb(n, 20).fixedNumberOfLines,
                i.Nb(n, 20).mayContainLatinCharsForArabic,
                i.Nb(n, 20).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function T(t) {
        return i.ac(
          2,
          [
            (t()(), i.hb(16777216, null, null, 1, null, g)),
            i.xb(
              1,
              16384,
              null,
              0,
              a.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, n) {
            var e = n.component;
            t(
              n,
              1,
              0,
              null == e.tvStation ? null : e.tvStation.selectedStation,
            );
          },
          null,
        );
      }
    },
    B0zL: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return r;
      });
      var i = e("HM3f"),
        l = e("Yi6/"),
        a = e("YtkY"),
        o = e("E2zj");
      e("ZiU+");
      class r extends l.bc {
        constructor(t, n) {
          (super(n.getLogger("media.MediaOnlineBrowserGuard")),
            (this.mediaOnlineBrowserService = t));
        }
        checkActivation(t, n) {
          return Object(i.b)(
            this.mediaOnlineBrowserService.initialized$,
            this.mediaOnlineBrowserService.hasBrowserError$,
          ).pipe(
            Object(a.a)(([n, e]) =>
              n
                ? e
                  ? l.i.matchIntendedRoute(t, o.a.Online.children.Error)
                  : l.i.matchIntendedRoute(t, o.a.Online.children.List) ||
                    l.i.matchIntendedRoute(t, o.a.Online.children.List2) ||
                    l.i.matchIntendedRoute(t, o.a.Online.children.Tiles)
                : l.i.matchIntendedRoute(t, o.a.Online.children.Loading),
            ),
          );
        }
      }
    },
    ElNB: function (t, n, e) {
      "use strict";
      (e.d(n, "f", function () {
        return r;
      }),
        e.d(n, "e", function () {
          return u;
        }),
        e.d(n, "i", function () {
          return s;
        }),
        e.d(n, "g", function () {
          return c;
        }),
        e.d(n, "b", function () {
          return d;
        }),
        e.d(n, "a", function () {
          return b;
        }),
        e.d(n, "h", function () {
          return p;
        }),
        e.d(n, "c", function () {
          return h;
        }),
        e.d(n, "d", function () {
          return m;
        }));
      var i = e("X4XO"),
        l = e("Yi6/"),
        a = e("E2zj"),
        o = e("VWFL");
      const r = {
          icon: "",
          textId: o.a.SaveAsShortcut,
          developerText: "Als Shortcut speichern",
          visible: !l.gd.isBentley,
          enabled: !1,
        },
        u = {
          icon: "E0FC_radio_Favorit.webp",
          textId: o.a.SaveAsFavorite,
          developerText: "Als Favorit speichern",
          visible: !0,
          enabled: !1,
        },
        s = {
          icon: "EA68_media_tv_teletext.webp",
          textId: o.a.Teletext,
          developerText: "Teletext",
          visible: !1,
          enabled: !1,
          terminalMode: i.o.TELETEXT,
          routeTo: a.a.Tv.children.TvTerminal,
        },
        c = {
          icon: "E855_media_stationtype_slideshow.webp",
          textId: o.a.SlideshowVisualAudio,
          developerText: "Slideshow /\nVisual Audio",
          visible: !1,
          enabled: !1,
          terminalMode: i.o.VISUALAUDIO,
          routeTo: a.a.Tv.children.TvTerminal,
        },
        d = {
          icon: "E862_radio_epg.webp",
          textId: o.a.Epg,
          developerText: "EPG / Programmf\xfchrer",
          visible: !1,
          enabled: !1,
          terminalMode: i.o.EPG,
          routeTo: a.a.Tv.children.TvTerminal,
        },
        b = {
          icon: "E863_media_tv_db.webp",
          textId: o.a.Databroadcast,
          developerText: "Databroadcast",
          visible: !1,
          enabled: !1,
          terminalMode: i.o.DATABROADCAST,
          routeTo: a.a.Tv.children.TvTerminal,
        },
        p = {
          icon: "E98F_media_channel_classification.webp",
          textId: o.a.StationClassification,
          developerText: "Senderklassifizierung",
          visible: !1,
          enabled: !1,
        },
        h = [
          u,
          r,
          s,
          c,
          d,
          b,
          {
            icon: "E98E_media_audio_track.webp",
            textId: o.a.Soundchannel,
            developerText: "Audiospur",
            visible: !0,
            enabled: !0,
          },
          p,
        ],
        m = [u, r, p];
    },
    FdP4: function (t, n, e) {
      "use strict";
      (e.d(n, "b", function () {
        return r;
      }),
        e.d(n, "a", function () {
          return u;
        }));
      var i = e("Ngpk"),
        l = e("aMy3"),
        a = e("Yi6/"),
        o = e("H4ln");
      class r {
        constructor(t, n, e, i) {
          ((this.sourceType = t),
            (this.notAvailableText = n),
            (this.availableDevicesTexts = e),
            (this.mediaType = i));
        }
      }
      class u {
        constructor(t) {
          ((this.source = t), (this.highlighted = !1), (this.disabled = !0));
        }
        static createItem(t, n, e) {
          const r = new u(t);
          ((r.highlighted = !!n && t.id === n.id),
            (r.icon = t.icon),
            (r.dynamicIcon = t.dynamicIcon),
            (r.sourceId = t.id));
          const s = e.find((n) =>
            t.mediaType === i.d.IPOD || t.mediaType === i.d.APPLECARPLAY
              ? n.sourceType === t.type && n.mediaType === t.mediaType
              : n.sourceType === t.type,
          );
          return (
            s
              ? ((r.disabled =
                  t.sourceState === i.f.EMPTY ||
                  (t.sourceState === i.f.ERROR &&
                    !t.isActiveAndroidAutoSource)),
                t.sourceState === i.f.EMPTY
                  ? (r.textI18n = s.notAvailableText)
                  : t.deviceName && t.deviceName.trim().length > 0
                    ? (r.textDynamic = t.deviceName)
                    : t.deviceIndex >= 0 &&
                        t.deviceIndex < s.availableDevicesTexts.length
                      ? (r.textI18n = s.availableDevicesTexts[t.deviceIndex])
                      : (r.textDynamic = "" + t.deviceIndex))
              : t.isOnlineMediaSource
                ? (t.providerName && t.providerName.trim().length > 0
                    ? (r.textDynamic = t.providerName)
                    : (r.textI18n = l.c.ONLINEMEDIA),
                  (r.disabled =
                    t.sourceState === i.f.ERROR || t.sourceState === i.f.EMPTY),
                  r.disabled &&
                    t.errorStates &&
                    t.errorStates.includes(i.e.DISABLEREASONPRIVACYCONFLICT) &&
                    (r.disabledReason = {
                      popup:
                        a.Ob
                          .POPUP_SETUP_DATA_MGT_PRIVACY_STAGED_BLOCKED_FUNCTION_POPUP,
                      requestedPopupData: {
                        data: { setting: o.c.PersonalData },
                      },
                      type: a.A.SHOW_PRIVACY_POPUP,
                    }))
                : (r.textDynamic = "???"),
            r
          );
        }
      }
    },
    "G/4o": function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return u;
      });
      var i = e("RJia"),
        l = e("YtkY"),
        a = e("Ohay"),
        o = (e("I7iC"), e("Yi6/")),
        r = e("VlZA");
      class u {
        constructor(t) {
          ((this.mediaPlayerService = t),
            (this.titleInternationalKeyEnum = r.c),
            (this.artistInternationalKeyEnum = i.b),
            (this.currentChapter$ = this.mediaPlayerService.player$.pipe(
              Object(l.a)((t) =>
                t && Object(o.wd)(t.currentChapter) ? t.currentChapter : 0,
              ),
              Object(a.a)(),
            )),
            (this.numberOfChapters$ = this.mediaPlayerService.player$.pipe(
              Object(l.a)((t) =>
                t && Object(o.wd)(t.numberOfChapters) ? t.numberOfChapters : 0,
              ),
              Object(a.a)(),
            )));
        }
      }
    },
    HlX9: function (t, n, e) {
      "use strict";
      (e.d(n, "a", function () {
        return f;
      }),
        e.d(n, "b", function () {
          return T;
        }));
      var i = e("kZht"),
        l = e("8TlW"),
        a = e("fu7d"),
        o = e("bou3"),
        r = e("yNay"),
        u = e("bmFL"),
        s = e("An66"),
        c = e("Xo58"),
        d = e("m3Ja"),
        b = e("r+e+"),
        p = e("ijxY"),
        h = e("XK+j"),
        m = e("0qMr"),
        f =
          (e("G/4o"),
          e("I7iC"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{display:block;height:100%}.text-wrapper[_ngcontent-%COMP%]{display:flex;height:100%;flex-direction:column;justify-content:space-between}.text[_ngcontent-%COMP%]{font-family:var(--font-config-plain,Audi Type Display High,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular)}.text--prio1[_ngcontent-%COMP%]{width:100%;font-size:40px}.text--prio2[_ngcontent-%COMP%]{width:100%;font-size:30px;line-height:40px}au3-fpk-screen[_nghost-%COMP%]   .text--prio1[_ngcontent-%COMP%], au3-fpk-screen   [_nghost-%COMP%]   .text--prio1[_ngcontent-%COMP%]{font-size:38px}au3-fpk-screen[_nghost-%COMP%]   .text--prio2[_ngcontent-%COMP%], au3-fpk-screen   [_nghost-%COMP%]   .text--prio2[_ngcontent-%COMP%]{font-size:28px}',
              ],
            ],
            data: {},
          }));
      function v(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              5,
              "au3-i18n-label",
              [["id", "Chapters"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [i.l, i.D, o.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              16384,
              null,
              0,
              u.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            i.Pb(131072, s.b, [i.h]),
            i.Qb(4, { currentChapter: 0, numberOfChapters: 1 }),
            i.xb(
              5,
              245760,
              null,
              0,
              c.a,
              [[6, a.a], d.a, i.h, i.l, i.D, [2, b.a], [2, p.a], [2, u.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (t, n) {
            var e = n.component;
            t(n, 1, 0, "Chapters");
            var l = null,
              a = t(
                n,
                4,
                0,
                null ==
                  (l = i.Yb(n, 2, 0, i.Nb(n, 3).transform(e.currentChapter$)))
                  ? null
                  : l.toString(),
                null == n.parent.context.mib3Let
                  ? null
                  : n.parent.context.mib3Let.toString(),
              );
            (t(n, 2, 0, a),
              t(
                n,
                5,
                0,
                "Kapitel {{currentChapter}} von {{numberOfChapters}}",
                "Chapters",
                1,
              ));
          },
          function (t, n) {
            t(
              n,
              0,
              0,
              i.Nb(n, 5).backgroundColor,
              i.Nb(n, 5).fixedNumberOfLines,
              i.Nb(n, 5).mayContainLatinCharsForArabic,
              i.Nb(n, 5).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function S(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              9,
              "div",
              [["class", "text text--prio2"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              1,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "text__artist"],
                ["testId", "artist"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(
              2,
              212992,
              null,
              0,
              a.a,
              [i.l, i.D, o.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              3,
              245760,
              null,
              0,
              c.a,
              [[6, a.a], d.a, i.h, i.l, i.D, [2, b.a], [2, p.a], [2, u.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            i.xb(
              4,
              16384,
              null,
              0,
              h.a,
              [i.l, i.D],
              { testId: [0, "testId"] },
              null,
            ),
            (t()(),
            i.yb(
              5,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "text__album"],
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
              l.b,
              l.a,
            )),
            i.xb(
              6,
              212992,
              null,
              0,
              a.a,
              [i.l, i.D, o.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              7,
              245760,
              null,
              0,
              c.a,
              [[6, a.a], d.a, i.h, i.l, i.D, [2, b.a], [2, p.a], [2, u.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, v)),
            i.xb(
              9,
              16384,
              null,
              0,
              s.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, n) {
            (t(
              n,
              2,
              0,
              null == n.parent.context.mib3Let
                ? null
                : n.parent.context.mib3Let.artistInternationalKey,
              n.component.artistInternationalKeyEnum,
            ),
              t(
                n,
                3,
                0,
                null == n.parent.context.mib3Let
                  ? null
                  : n.parent.context.mib3Let.artistInternationalKey,
                null == n.parent.context.mib3Let
                  ? null
                  : n.parent.context.mib3Let.artistInternationalKey,
                1,
                null == n.parent.context.mib3Let
                  ? null
                  : n.parent.context.mib3Let.artistOriginalText,
              ),
              t(n, 4, 0, "artist"),
              t(n, 6, 0, "Album"),
              t(
                n,
                7,
                0,
                "Album Unknown",
                "Album",
                1,
                null == n.parent.context.mib3Let
                  ? null
                  : n.parent.context.mib3Let.albumOriginalText,
              ),
              t(n, 9, 0, !!n.context.mib3Let && n.context.mib3Let > 0));
          },
          function (t, n) {
            (t(
              n,
              1,
              0,
              i.Nb(n, 3).backgroundColor,
              i.Nb(n, 3).fixedNumberOfLines,
              i.Nb(n, 3).mayContainLatinCharsForArabic,
              i.Nb(n, 3).shortenWithEllipsisForArabic,
            ),
              t(
                n,
                5,
                0,
                i.Nb(n, 7).backgroundColor,
                i.Nb(n, 7).fixedNumberOfLines,
                i.Nb(n, 7).mayContainLatinCharsForArabic,
                i.Nb(n, 7).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function g(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              9,
              "div",
              [["class", "text-wrapper"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              1,
              0,
              null,
              null,
              5,
              "div",
              [["class", "text text--prio1"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              2,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["class", "text__title"],
                ["id", "Title"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(
              3,
              212992,
              null,
              0,
              a.a,
              [i.l, i.D, o.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              4,
              16384,
              null,
              0,
              u.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            i.Qb(5, { number: 0 }),
            i.xb(
              6,
              245760,
              null,
              0,
              c.a,
              [[6, a.a], d.a, i.h, i.l, i.D, [2, b.a], [2, p.a], [2, u.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 2, null, S)),
            i.xb(
              8,
              16384,
              null,
              0,
              m.a,
              [i.L, i.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            i.Pb(131072, s.b, [i.h]),
          ],
          function (t, n) {
            var e = n.component;
            t(
              n,
              3,
              0,
              null == n.context.mib3Let
                ? null
                : n.context.mib3Let.titleInternationalTextIdKey,
              e.titleInternationalKeyEnum,
            );
            var l = t(
              n,
              5,
              0,
              null != n.context.mib3Let && n.context.mib3Let.titleAdditionalText
                ? null == n.context.mib3Let
                  ? null
                  : n.context.mib3Let.titleAdditionalText
                : "",
            );
            (t(n, 4, 0, l),
              t(
                n,
                6,
                0,
                null == n.context.mib3Let
                  ? null
                  : n.context.mib3Let.titleInternationalTextIdKey,
                null == n.context.mib3Let
                  ? null
                  : n.context.mib3Let.titleInternationalTextIdKey,
                1,
                (null == n.context.mib3Let
                  ? null
                  : n.context.mib3Let.titleOriginalText) || void 0,
              ),
              t(
                n,
                8,
                0,
                i.Yb(n, 8, 0, i.Nb(n, 9).transform(e.numberOfChapters$)),
              ));
          },
          function (t, n) {
            t(
              n,
              2,
              0,
              i.Nb(n, 6).backgroundColor,
              i.Nb(n, 6).fixedNumberOfLines,
              i.Nb(n, 6).mayContainLatinCharsForArabic,
              i.Nb(n, 6).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function T(t) {
        return i.ac(
          2,
          [
            (t()(), i.hb(16777216, null, null, 2, null, g)),
            i.xb(
              1,
              16384,
              null,
              0,
              m.a,
              [i.L, i.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            i.Pb(131072, s.b, [i.h]),
          ],
          function (t, n) {
            var e = n.component;
            t(
              n,
              1,
              0,
              i.Yb(
                n,
                1,
                0,
                i.Nb(n, 2).transform(e.mediaPlayerService.detailInfo$),
              ),
            );
          },
          null,
        );
      }
    },
    L8Px: function (t, n, e) {
      "use strict";
      (e.d(n, "a", function () {
        return d;
      }),
        e("Yi6/"));
      var i = e("wgY5"),
        l = e("C05f"),
        a = e("QQZH"),
        o = e("kuMc"),
        r = e("TLy2"),
        u = e("J+dc"),
        s = e("YtkY");
      e("oPv+");
      class c {
        constructor() {
          ((this.nowStartTimeInMs = 0),
            (this.nowEndTimeInMs = 0),
            (this.nowTimeInMs = 0));
        }
      }
      e("74Ku");
      class d {
        constructor(t, n, e) {
          ((this.generalSettingsService = t),
            (this.tvService = n),
            (this.isTimeVisible = !1),
            (this.tvProgressbarTimes$$ = new l.a(new c())),
            (this.isTimeValid$$ = new l.a(!1)),
            (this.time12pmAsMs = 864e5),
            (this.destroyed$$ = new a.a(1)),
            (this.logger = e.getLogger("tv.TvProgressbarComponent")));
        }
        ngOnInit() {
          this.setTimes();
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        setTimes() {
          this.tvService.activeRsiTvTuner$
            .pipe(
              Object(o.a)(this.destroyed$$),
              Object(r.a)((t) =>
                this.generalSettingsService.time$.pipe(
                  Object(u.a)(1),
                  Object(s.a)((n) => ({ rsiTvTuner: t, valueControl: n })),
                ),
              ),
            )
            .subscribe(({ rsiTvTuner: t, valueControl: n }) => {
              const e = new c();
              this.isStartAndEndTimeValid(t)
                ? ((e.nowStartTimeInMs = t.selectedStation.nowStartTime),
                  (e.nowEndTimeInMs = t.selectedStation.nowEndTime),
                  (e.nowTimeInMs = this.getNowTimeInMs(n)),
                  this.adjustTimesIfEndTimeSmallerStartTime(e),
                  this.logger.info("setTimes: tvProgressBarTimes:", e),
                  this.tvProgressbarTimes$$.next(e),
                  this.isTimeValid$$.next(!0))
                : this.isTimeValid$$.next(!1);
            });
        }
        isStartAndEndTimeValid(t) {
          if (!t || !t.selectedStation) return !1;
          const n = t.selectedStation;
          return (
            this.logger.info(
              "isStartAndEndTimeValid: rsiTvTuner.selectedStation:",
              n,
            ),
            void 0 !== n.nowStartTime && void 0 !== n.nowEndTime
          );
        }
        getNowTimeInMs(t) {
          if ((this.logger.info("getNowTimeInMs: valueControl:", t), !t))
            return (
              this.logger.error("getNowTimeInMs: valueControl not valid:", t),
              0
            );
          const n = i.utc(t.timeValue, "HH:mm:ssZ", !0),
            e = n.hours(),
            l = n.minutes(),
            a = n.seconds(),
            o = 1e3 * (60 * e * 60 + 60 * l + a);
          return (
            this.logger.info(
              "getNowTimeInMs: nowTimeSeconds as time:",
              `${e}:${l}:${a}`,
            ),
            this.logger.info("getNowTimeInMs: nowTimeSeconds:", o),
            o
          );
        }
        adjustTimesIfEndTimeSmallerStartTime(t) {
          t.nowEndTimeInMs < t.nowStartTimeInMs &&
            ((t.nowEndTimeInMs += this.time12pmAsMs),
            t.nowTimeInMs < t.nowStartTimeInMs &&
              (t.nowTimeInMs += this.time12pmAsMs));
        }
      }
    },
    QL04: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return i;
      });
      class i {
        constructor() {
          ((this.showCover = !1), (this.coverUpdated = !1));
        }
        set isListScrolling(t) {
          ((this.isScrolling = t), this.updateCoverVisibility());
        }
        itemUpdated(t) {
          this.hasCoverChanged(t) && this.setCoverChanged();
        }
        setCoverChanged() {
          ((this.coverUpdated = !0),
            (this.showCover = !1),
            this.updateCoverVisibility());
        }
        updateCoverVisibility() {
          this.coverUpdated &&
            !this.isScrolling &&
            ((this.coverUpdated = !1), (this.showCover = !0));
        }
      }
    },
    S3zX: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return u;
      });
      var i = e("Yi6/"),
        l = e("J+dc"),
        a = e("YtkY"),
        o = e("hNdd"),
        r = e("E2zj");
      e("vcDZ");
      class u extends i.bc {
        constructor(t, n) {
          (super(n.getLogger("media.MediaPlayerGuard")),
            (this.mediaStateService = t));
        }
        checkActivation(t, n) {
          return this.mediaStateService.loadingState$.pipe(
            Object(l.a)(1),
            Object(a.a)((n) =>
              i.i.matchIntendedRoute(t, r.a.Player.children.Error)
                ? n === o.a.ERROR
                : i.i.matchIntendedRoute(t, r.a.Player.children.Loading)
                  ? n === o.a.LOADING_SOURCE
                  : !!this.isPlayerRoute(t) && n === o.a.READY_PLAYVIEWORNPS,
            ),
          );
        }
        isPlayerRoute(t) {
          return (
            i.i.matchIntendedRoute(t, r.a.Player.children.PlayviewOrNps) ||
            i.i.matchIntendedRoute(t, r.a.Player.children.Options) ||
            i.i.matchIntendedRoute(
              t,
              r.a.Player.children.Options.children.Subtitle,
            ) ||
            i.i.matchIntendedRoute(
              t,
              r.a.Player.children.Options.children.AudioChannel,
            )
          );
        }
      }
    },
    Su7d: function (t, n, e) {
      "use strict";
      (e.d(n, "a", function () {
        return i;
      }),
        e("vY32"));
      class i {
        constructor() {
          this.isFpk = !1;
        }
      }
    },
    VWFL: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return i;
      });
      var i = (function (t) {
        return (
          (t.SaveAsShortcut = "Save_Shortcut"),
          (t.SaveAsFavorite = "Save_Favorite"),
          (t.Teletext = "Teletext"),
          (t.SlideshowVisualAudio = "Slideshow/Visual Audio"),
          (t.Epg = "EPG"),
          (t.Databroadcast = "Databroadcast"),
          (t.Soundchannel = "Soundchannel"),
          (t.StationClassification = "Station classification"),
          (t.TvToRse = "TV_to_RSE"),
          t
        );
      })({});
    },
    VZeB: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return o;
      });
      var i = e("X4XO"),
        l = e("ElNB"),
        a = e("kZht");
      let o = (() => {
        class t {
          setStationClassification(t, n) {
            this.isClassificationSupported(t, n)
              ? ((l.h.visible = !0), (l.h.enabled = !0))
              : ((l.h.visible = !1), (l.h.enabled = !1));
          }
          isClassificationSupported(t, n) {
            return i.j.PRESORTED === n && i.m.TV === t;
          }
        }
        return (
          (t.ɵprov = a.bc({
            factory: function () {
              return new t();
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    "WK/K": function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return s;
      });
      var i = e("Yi6/"),
        l = e("QQZH"),
        a = e("jOdJ"),
        o = e("kuMc"),
        r = e("dcC6"),
        u = e("VWFL");
      class s {
        constructor(t, n, e, i, a, o, r, u, s) {
          ((this.tvService = t),
            (this.tvSettingsService = n),
            (this.optionMenuService = e),
            (this.tvClassificationOptionsService = i),
            (this.tvShortcutOptionsService = a),
            (this.tvTerminalOptionsService = o),
            (this.tvFavoriteOptionsService = r),
            (this.mediaRoutingService = u),
            (this.logger = s),
            (this.destroy$$ = new l.a(1)));
        }
        ngOnDestroy() {
          (this.destroy$$.next(), this.destroy$$.complete());
        }
        onOptionTap(t) {
          const n = t.option,
            e = t.item;
          if (
            (this.logger.info("onOptionTap: Tapped on optionWithItem:", t),
            n.terminalMode)
          )
            return (
              this.logger.info("onOptionTap: routes to terminal", n.textId),
              void this.tvTerminalOptionsService.activateTerminalMode(
                n.terminalMode,
              )
            );
          switch (n.textId) {
            case u.a.Soundchannel:
              this.mediaRoutingService.goToTvAudioSourceSelection();
              break;
            case u.a.SaveAsFavorite:
              this.addTvStationToFavoritesAndToShortcuts(e, !1);
              break;
            case u.a.StationClassification:
              this.mediaRoutingService.goToTvStationClassification(e.id);
              break;
            case u.a.SaveAsShortcut:
              this.tvFavoriteOptionsService
                .isFavorite$(e)
                .pipe(Object(a.a)())
                .subscribe((t) => {
                  t
                    ? this.getTvFavoriteStationAndAddToShortcuts(e)
                    : this.addTvStationToFavoritesAndToShortcuts(e, !0);
                });
          }
        }
        showOptionMenu(t) {
          this.tvFavoriteOptionsService
            .getNumberOfFavoritesAndCheckIfStationIsFavorite(t)
            .pipe(Object(a.a)(), Object(o.a)(this.destroy$$))
            .subscribe(([n, e]) => {
              (this.tvFavoriteOptionsService.setSaveAsFavorite(t, n, e),
                this.tvShortcutOptionsService.setTvOptionSaveAsShortcut(t, n),
                this.optionMenuService.showOptionMenu(t, i.Lb.MoreMenu));
            });
        }
        addTvStationToFavoritesAndToShortcuts(t, n) {
          (this.tvFavoriteOptionsService.responseOfAddTvStationToFavorites$$
            .pipe(Object(a.a)())
            .subscribe((e) => {
              if (n) {
                const n = Object(i.Wc)(e);
                this.tvShortcutOptionsService.createAndAddStationToShortcuts(
                  t,
                  n,
                );
              }
            }),
            this.tvFavoriteOptionsService
              .addTvStationToFavoritesAndShowPopupOnSuccess(t)
              .pipe(Object(a.a)(), Object(o.a)(this.destroy$$))
              .subscribe((e) => {
                if (
                  (this.logger.info(
                    "addTvStationToFavoritesAndToShortcuts: added tvStation to favorites:",
                    t,
                  ),
                  this.logger.info(
                    "addTvStationToFavoritesAndToShortcuts: uriResponse:",
                    e,
                  ),
                  n)
                ) {
                  const n = Object(i.Wc)(e);
                  this.tvShortcutOptionsService.createAndAddStationToShortcuts(
                    t,
                    n,
                  );
                } else
                  this.tvFavoriteOptionsService.showPopupForSavingStationAsFavorite();
              }));
        }
        getTvFavoriteStationAndAddToShortcuts(t) {
          this.tvService
            .getTvFavoriteByNamePid$(t.namePID)
            .pipe(Object(a.a)(), Object(o.a)(this.destroy$$))
            .subscribe((t) => {
              const n = r.a.createPersistableShortcutFromTvStation(t),
                e = new r.a(n, this.tvSettingsService.isTvTunerAvailable$);
              this.tvShortcutOptionsService.addShortcut(e);
            });
        }
        get isOptionMenuVisible$() {
          return this.optionMenuService.isOptionMenuVisible$;
        }
      }
    },
    Woni: function (t, n, e) {
      "use strict";
      (e.d(n, "a", function () {
        return m;
      }),
        e.d(n, "b", function () {
          return g;
        }));
      var i = e("kZht"),
        l = e("8TlW"),
        a = e("fu7d"),
        o = e("bou3"),
        r = e("yNay"),
        u = e("Xo58"),
        s = e("m3Ja"),
        c = e("r+e+"),
        d = e("ijxY"),
        b = e("bmFL"),
        p = e("An66"),
        h = e("0qMr"),
        m =
          (e("pDjz"),
          e("1hWf"),
          e("74Ku"),
          i.wb({ encapsulation: 2, styles: [], data: {} }));
      function f(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["fixedNumberOfLines", "1"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [i.l, i.D, o.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              2,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, i.h, i.l, i.D, [2, c.a], [2, d.a], [2, b.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (t, n) {
            (t(
              n,
              1,
              0,
              null == n.parent.context.mib3Let
                ? null
                : n.parent.context.mib3Let.classificationGroupI18n,
              n.component.TvClassificationFilterI18nEnum,
            ),
              t(
                n,
                2,
                0,
                null == n.parent.context.mib3Let
                  ? null
                  : n.parent.context.mib3Let.classificationGroupI18n,
                null == n.parent.context.mib3Let
                  ? null
                  : n.parent.context.mib3Let.classificationGroupI18n,
                "1",
              ));
          },
          function (t, n) {
            t(
              n,
              0,
              0,
              i.Nb(n, 2).backgroundColor,
              i.Nb(n, 2).fixedNumberOfLines,
              i.Nb(n, 2).mayContainLatinCharsForArabic,
              i.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function v(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
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
            (t()(), i.hb(16777216, null, null, 1, null, f)),
            i.xb(
              2,
              16384,
              null,
              0,
              p.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(0, null, null, 0)),
          ],
          function (t, n) {
            t(
              n,
              2,
              0,
              null == n.context.mib3Let
                ? null
                : n.context.mib3Let.classificationGroupI18n,
            );
          },
          null,
        );
      }
      function S(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
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
            (t()(), i.hb(16777216, null, null, 2, null, v)),
            i.xb(
              2,
              16384,
              null,
              0,
              h.a,
              [i.L, i.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            i.Pb(131072, p.b, [i.h]),
            (t()(), i.hb(0, null, null, 0)),
          ],
          function (t, n) {
            var e = n.component;
            t(
              n,
              2,
              0,
              i.Yb(n, 2, 0, i.Nb(n, 3).transform(e.tvService.selectedStation$)),
            );
          },
          null,
        );
      }
      function g(t) {
        return i.ac(
          2,
          [
            (t()(), i.hb(16777216, null, null, 2, null, S)),
            i.xb(
              1,
              16384,
              null,
              0,
              p.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            i.Pb(131072, p.b, [i.h]),
          ],
          function (t, n) {
            var e,
              l = n.component;
            t(
              n,
              1,
              0,
              (null ==
              (e = i.Yb(
                n,
                1,
                0,
                i.Nb(n, 2).transform(l.tvSettingsService.tvSettings$),
              ))
                ? null
                : e.stationSorting) === l.PRESORTED,
            );
          },
          null,
        );
      }
    },
    Y7V8: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return c;
      });
      var i = e("Yi6/"),
        l = e("HM3f"),
        a = e("xVbo"),
        o = e("kuMc"),
        r = e("YtkY"),
        u =
          (e("xS3h"),
          e("E2zj"),
          e("1hWf"),
          e("74Ku"),
          e("VZeB"),
          e("fK0r"),
          e("m/uT"),
          e("xcls"),
          e("ElNB")),
        s = e("WK/K");
      class c extends s.a {
        constructor(t, n, e, i, l, a, o, r, u, s) {
          (super(
            n,
            e,
            l,
            u,
            s,
            t,
            r,
            i,
            a.getLogger("tv.TvOptionsMenuOptionsService"),
          ),
            this.setOptions());
        }
        setOptions() {
          this.options$ = Object(l.b)([
            this.tvSettingsService.tvSettings$,
            this.optionMenuService.item$.pipe(Object(a.a)(i.wd)),
          ]).pipe(
            Object(o.a)(this.destroy$$),
            Object(r.a)(
              ([t, n]) => (
                this.tvClassificationOptionsService.setStationClassification(
                  n.list,
                  t.stationSorting,
                ),
                u.d
              ),
            ),
          );
        }
      }
    },
    dxd1: function (t, n, e) {
      "use strict";
      (e.d(n, "a", function () {
        return m;
      }),
        e.d(n, "b", function () {
          return v;
        }));
      var i = e("kZht"),
        l = e("8TlW"),
        a = e("fu7d"),
        o = e("bou3"),
        r = e("yNay"),
        u = e("Xo58"),
        s = e("m3Ja"),
        c = e("r+e+"),
        d = e("ijxY"),
        b = e("bmFL"),
        p = e("0qMr"),
        h = e("An66"),
        m =
          (e("sYA+"),
          e("74Ku"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.content-group-text[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:30px}',
              ],
            ],
            data: {},
          }));
      function f(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "content-group-text"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [i.l, i.D, o.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              2,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, i.h, i.l, i.D, [2, c.a], [2, d.a], [2, b.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (t, n) {
            (t(
              n,
              1,
              0,
              null == n.context.mib3Let
                ? null
                : n.context.mib3Let.contentGroupI18n,
              n.component.TvStationContentGroupI18nEnum,
            ),
              t(
                n,
                2,
                0,
                null == n.context.mib3Let
                  ? null
                  : n.context.mib3Let.contentGroupI18n,
                null == n.context.mib3Let
                  ? null
                  : n.context.mib3Let.contentGroupI18n,
                1,
              ));
          },
          function (t, n) {
            t(
              n,
              0,
              0,
              i.Nb(n, 2).backgroundColor,
              i.Nb(n, 2).fixedNumberOfLines,
              i.Nb(n, 2).mayContainLatinCharsForArabic,
              i.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function v(t) {
        return i.ac(
          2,
          [
            (t()(), i.hb(16777216, null, null, 2, null, f)),
            i.xb(
              1,
              16384,
              null,
              0,
              p.a,
              [i.L, i.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            i.Pb(131072, h.b, [i.h]),
          ],
          function (t, n) {
            var e = n.component;
            t(
              n,
              1,
              0,
              i.Yb(n, 1, 0, i.Nb(n, 2).transform(e.tvService.selectedStation$)),
            );
          },
          null,
        );
      }
    },
    fK0r: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return f;
      });
      var i = e("X4XO"),
        l = e("lKZL"),
        a = e("Yi6/"),
        o = e("ZTXN"),
        r = e("QQZH"),
        u = e("HM3f"),
        s = e("kuMc"),
        c = e("jOdJ"),
        d = e("YtkY"),
        b = e("ElNB"),
        p = e("kZht"),
        h = e("sg2e"),
        m = e("yNay");
      let f = (() => {
        class t {
          constructor(t, n, e) {
            ((this.rudiTvService = t),
              (this.popupManagementService = n),
              (this.responseOfAddTvStationToFavorites$$ = new o.a()),
              (this.destroy$$ = new r.a(1)),
              (this.logger = e.getLogger("tv.TvFavoriteOptionsService")));
          }
          ngOnDestroy() {
            (this.destroy$$.next(), this.destroy$$.complete());
          }
          getNumberOfFavoritesAndCheckIfStationIsFavorite(t) {
            return Object(u.b)(
              this.getNumberOfFavorites$(),
              this.isFavorite$(t),
            ).pipe(Object(s.a)(this.destroy$$));
          }
          isFavorite$(t) {
            return this.rudiTvService.stations
              .retrieveStationObjects({
                search: { namePID: t.namePID, list: i.m.FAVORITES },
              })
              .pipe(
                Object(s.a)(this.destroy$$),
                Object(c.a)(),
                Object(d.a)((t) => !!t && t.data.length >= 1),
              );
          }
          addTvStationToFavoritesAndShowPopupOnSuccess(t) {
            return this.rudiTvService.favorites
              .insertFavoriteObject({ station: t })
              .pipe(
                Object(s.a)(this.destroy$$),
                Object(c.a)(),
                Object(a.Mc)(
                  this.logger,
                  `addTvStationToFavoritesAndShowPopupOnSuccess: could not add tvStation to favorites: ${t}`,
                ),
              );
          }
          setSaveAsFavorite(t, n, e) {
            const l = this.isMaximumOfFavoritesReached(n),
              a = !e && !l;
            ((b.e.visible = i.m.FAVORITES !== t.list),
              (b.e.enabled = !e && !l),
              (b.e.disabledReason = this.getPopupIdForDisabledReason(l, a)),
              this.logger.info("updateSaveAsFavorite: Option:", b.e));
          }
          showPopupForSavingStationAsFavorite() {
            this.popupManagementService.request(
              a.Ob.POPUP_TV_OPT_POPUP_SAVE_STATION_FAV,
            );
          }
          isMaximumOfFavoritesReached(n) {
            return n >= t.MAX_NUMBER_OF_FAVORITES;
          }
          getNumberOfFavorites$() {
            return this.rudiTvService.favorites
              .retrieveFavoriteObjects({ offset: 0, limit: 0 })
              .pipe(
                Object(s.a)(this.destroy$$),
                Object(c.a)(),
                Object(a.pd)(this.logger, "getNumberOfFavorites$:"),
                Object(d.a)((t) => t.total),
              );
          }
          getPopupIdForDisabledReason(t, n) {
            return t
              ? a.Ob.POPUP_TV_OPT_POPUP_STATION_FAV_MEMORY_FULL
              : n
                ? ""
                : a.Ob.POPUP_TV_OPT_POPUP_STATION_ALREADY_FAV;
          }
        }
        return (
          (t.MAX_NUMBER_OF_FAVORITES = 30),
          (t.ɵprov = p.bc({
            factory: function () {
              return new t(p.cc(l.a), p.cc(h.a), p.cc(m.a));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    "fZ+u": function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return o;
      });
      var i = e("X4XO"),
        l = e("qrqQ"),
        a = (e("vY32"), e("c0kj"));
      (e("1hWf"), e("74Ku"));
      class o {
        constructor(t, n) {
          ((this.tvSettingsService = t),
            (this.tvService = n),
            (this.TvStationContentGroupI18nEnum = a.a),
            (this.SettingObjectStationSortingEnum = i.j),
            (this.TvClassificationFilterI18nEnum = l.a),
            (this.TvTunerObjectTypeEnum = i.s));
        }
      }
    },
    "m/uT": function (t, n, e) {
      "use strict";
      (e.d(n, "a", function () {
        return d;
      }),
        e("Yi6/"));
      var i = e("xS3h"),
        l = e("dcC6"),
        a = e("VWFL"),
        o = e("1hWf"),
        r = e("ElNB"),
        u = e("fK0r"),
        s = e("kZht"),
        c = e("yNay");
      let d = (() => {
        class t {
          constructor(t, n, e, i) {
            ((this.tvSettingsService = t),
              (this.shortcutsOptionsService = n),
              (this.tvFavoriteOptionsService = e),
              (this.logger = i.getLogger("tv.TvShortcutOptionsService")));
          }
          setTvOptionSaveAsShortcut(t, n) {
            const e =
                this.tvFavoriteOptionsService.isMaximumOfFavoritesReached(n),
              i = l.a.createPersistableShortcutFromTvStation(t),
              o = new l.a(i, this.tvSettingsService.isTvTunerAvailable$),
              u = this.shortcutsOptionsService.saveShortcutOption(o);
            (this.logger.info("setTvOptionSaveAsShortcut: tvStation:", t),
              this.logger.info("setTvOptionSaveAsShortcut: tvShortcut:", o),
              this.logger.info("setTvOptionSaveAsShortcut: option:", u),
              this.logger.info(
                "setTvOptionSaveAsShortcut: isMaximumOfFavoritesReached:",
                e,
              ),
              u.enabled && (u.enabled = !e),
              Object.assign(r.f, u),
              (r.f.textId = a.a.SaveAsShortcut));
          }
          addShortcut(t) {
            (this.logger.info("addShortcut: tvShortcut", t),
              this.shortcutsOptionsService.saveShortcut(t));
          }
          createAndAddStationToShortcuts(t, n) {
            const e = this.createShortcutFromTvStationAndIdOfFavoriteStation(
              t,
              n,
            );
            (this.logger.info("createAndAddStationToShortcuts: tvShortcut", e),
              this.shortcutsOptionsService.saveShortcut(e));
          }
          createShortcutFromTvStationAndIdOfFavoriteStation(t, n) {
            const e = l.a.createPersistableShortcutFromTvStation(t);
            return (
              (e.payload = n),
              (e.name = t.namePID),
              new l.a(e, this.tvSettingsService.isTvTunerAvailable$)
            );
          }
        }
        return (
          (t.ɵprov = s.bc({
            factory: function () {
              return new t(s.cc(o.a), s.cc(i.b), s.cc(u.a), s.cc(c.a));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    mAkA: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return i;
      });
      class i {}
    },
    oWpa: function (t, n, e) {
      "use strict";
      (e.d(n, "a", function () {
        return f;
      }),
        e.d(n, "b", function () {
          return S;
        }));
      var i = e("kZht"),
        l = e("HVUF"),
        a = e("B3Zb"),
        o = e("yNay"),
        r = e("8TlW"),
        u = e("fu7d"),
        s = e("bou3"),
        c = e("bmFL"),
        d = e("Xo58"),
        b = e("m3Ja"),
        p = e("r+e+"),
        h = e("ijxY"),
        m = e("An66"),
        f =
          (e("yegR"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;display:block}.container[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.container--column[_ngcontent-%COMP%]{flex-direction:column;align-items:center;justify-content:center}.lines[_ngcontent-%COMP%]{flex:1 1 0;line-height:65px;max-width:100%}.fpk-stage-big[_nghost-%COMP%]   .lines[_ngcontent-%COMP%], .fpk-stage-big   [_nghost-%COMP%]   .lines[_ngcontent-%COMP%], .fpk-stage-small[_nghost-%COMP%]   .lines[_ngcontent-%COMP%], .fpk-stage-small   [_nghost-%COMP%]   .lines[_ngcontent-%COMP%]{line-height:59px}.lines--column[_ngcontent-%COMP%]{flex:0 1 auto}.icon[_ngcontent-%COMP%]{margin-left:30px}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{flex-direction:row}.component-layout-latin[_nghost-%COMP%]   .line[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .line[_ngcontent-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{margin-left:30px;margin-right:0}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{flex-direction:row-reverse}.component-layout-arabic[_nghost-%COMP%]   .line[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .line[_ngcontent-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{margin-left:0;margin-right:30px}",
              ],
            ],
            data: {},
          }));
      function v(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
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
            i.xb(
              1,
              4243456,
              null,
              0,
              a.b,
              [o.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (t, n) {
            var e = n.component;
            t(n, 1, 0, e.iconFilename, e.iconCategory);
          },
          function (t, n) {
            t(n, 0, 0, i.Nb(n, 1).iconComponentHidden);
          },
        );
      }
      function S(t) {
        return i.ac(
          2,
          [
            i.Tb(402653184, 1, { container: 0 }),
            (t()(),
            i.yb(
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
            (t()(),
            i.yb(
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
              r.b,
              r.a,
            )),
            i.xb(
              3,
              212992,
              null,
              0,
              u.a,
              [i.l, i.D, s.a, o.a, [3, u.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              4,
              16384,
              null,
              0,
              c.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            i.xb(
              5,
              245760,
              null,
              0,
              d.a,
              [[6, u.a], b.a, i.h, i.l, i.D, [2, p.a], [2, h.a], [2, c.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, v)),
            i.xb(
              7,
              16384,
              null,
              0,
              m.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (t, n) {
            var e = n.component;
            (t(n, 3, 0, "StatustextLines"),
              t(n, 4, 0, e.ttInterpolateParams),
              t(
                n,
                5,
                0,
                e.developerText,
                "StatustextLines",
                e.maxNumberOfLines,
                e.nonI18nText,
              ),
              t(n, 7, 0, e.iconFilename && e.iconCategory));
          },
          function (t, n) {
            var e = n.component;
            (t(n, 1, 0, e.iconBelowText),
              t(
                n,
                2,
                0,
                e.iconBelowText,
                i.Nb(n, 5).backgroundColor,
                i.Nb(n, 5).fixedNumberOfLines,
                i.Nb(n, 5).mayContainLatinCharsForArabic,
                i.Nb(n, 5).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
    },
    pDjz: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return a;
      });
      var i = e("X4XO"),
        l = e("qrqQ");
      (e("1hWf"), e("74Ku"));
      class a {
        constructor(t, n) {
          ((this.tvSettingsService = t),
            (this.tvService = n),
            (this.PRESORTED = i.j.PRESORTED),
            (this.TvClassificationFilterI18nEnum = l.a));
        }
      }
    },
    qsYA: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return u;
      });
      var i = e("J+dc"),
        l = e("YtkY"),
        a = e("Yi6/"),
        o = e("zRUB"),
        r = e("E2zj");
      class u extends a.bc {
        constructor(t, n) {
          (super(n.getLogger("media.MediaBrowserGuard")),
            (this.mediaBrowserService = t));
        }
        checkActivation(t, n) {
          return this.mediaBrowserService.browserState$.pipe(
            Object(i.a)(1),
            Object(l.a)((n) => {
              switch (n) {
                case o.a.ERROR:
                  return a.i.matchIntendedRoute(t, r.a.Browser.children.Error);
                case o.a.READY:
                  return (
                    a.i.matchIntendedRoute(t, r.a.Browser.children.Tiles) ||
                    a.i.matchIntendedRoute(t, r.a.Browser.children.List) ||
                    a.i.matchIntendedRoute(t, r.a.Browser.children.List2)
                  );
                case o.a.UNDEFINED:
                case o.a.LOADING:
                  return a.i.matchIntendedRoute(
                    t,
                    r.a.Browser.children.Loading,
                  );
                default:
                  return !1;
              }
            }),
          );
        }
      }
    },
    "sYA+": function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return l;
      });
      var i = e("c0kj");
      e("74Ku");
      class l {
        constructor(t) {
          ((this.tvService = t), (this.TvStationContentGroupI18nEnum = i.a));
        }
      }
    },
    skXE: function (t, n, e) {
      "use strict";
      (e.d(n, "a", function () {
        return s;
      }),
        e.d(n, "b", function () {
          return p;
        }));
      var i = e("kZht"),
        l = e("3EdB"),
        a = e("eoEw"),
        o = e("m3Ja"),
        r = e("SOvQ"),
        u = e("An66"),
        s =
          (e("w4OF"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                "[_nghost-%COMP%]{display:flex}.entertainment-playtime--not-fixed[_nghost-%COMP%]   .entertainment-playtime__current-time[_ngcontent-%COMP%], .entertainment-playtime--not-fixed[_nghost-%COMP%]   .entertainment-playtime__time-remaining[_ngcontent-%COMP%]{width:auto}.entertainment-playtime__current-time[_ngcontent-%COMP%], .entertainment-playtime__current-time-sxm[_ngcontent-%COMP%]{width:110px;margin-right:15px;text-align:end;text-overflow:ellipsis;overflow:hidden}.entertainment-playtime__current-time-sxm[_ngcontent-%COMP%]{width:140px}.entertainment-playtime__separator[_ngcontent-%COMP%]{width:2px;height:36px;background:#fff}.entertainment-playtime__time-remaining--align-right[_ngcontent-%COMP%]{justify-content:flex-end}.entertainment-playtime__time-remaining[_ngcontent-%COMP%]{display:flex;width:120px;margin-left:15px;text-overflow:ellipsis;overflow:hidden}.entertainment-playtime__time-remaining[_ngcontent-%COMP%]   au3-formatted-unit-renderer[_ngcontent-%COMP%]     .content{flex-direction:row;justify-content:center;text-align:left}",
              ],
            ],
            data: {},
          }));
      function c(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
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
            (t()(),
            i.yb(
              1,
              0,
              null,
              null,
              2,
              "span",
              [["class", "entertainment-playtime__current-time"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              2,
              0,
              null,
              null,
              1,
              "au3-formatted-unit-renderer",
              [],
              [[2, "invisible", null]],
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(
              3,
              180224,
              null,
              0,
              a.b,
              [o.a, r.a, i.h],
              {
                rawValue: [0, "rawValue"],
                rawValueUnit: [1, "rawValueUnit"],
                rawValueFormattingRule: [2, "rawValueFormattingRule"],
              },
              null,
            ),
            (t()(),
            i.yb(
              4,
              0,
              null,
              null,
              2,
              "span",
              [],
              null,
              null,
              null,
              null,
              null,
            )),
            i.xb(
              5,
              278528,
              null,
              0,
              u.i,
              [i.s, i.t, i.l, i.D],
              { ngClass: [0, "ngClass"] },
              null,
            ),
            i.Qb(6, {
              "entertainment-playtime__separator": 0,
              "entertainment-playtime__separator-wide": 1,
            }),
            (t()(),
            i.yb(
              7,
              0,
              null,
              null,
              4,
              "span",
              [["class", "entertainment-playtime__time-remaining"]],
              null,
              null,
              null,
              null,
              null,
            )),
            i.xb(
              8,
              278528,
              null,
              0,
              u.i,
              [i.s, i.t, i.l, i.D],
              { klass: [0, "klass"], ngClass: [1, "ngClass"] },
              null,
            ),
            i.Qb(9, {
              "entertainment-playtime__time-remaining--align-right": 0,
            }),
            (t()(),
            i.yb(
              10,
              0,
              null,
              null,
              1,
              "au3-formatted-unit-renderer",
              [],
              [[2, "invisible", null]],
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(
              11,
              180224,
              null,
              0,
              a.b,
              [o.a, r.a, i.h],
              {
                prefixNonI18nText: [0, "prefixNonI18nText"],
                separatePrefixAndValue: [1, "separatePrefixAndValue"],
                rawValue: [2, "rawValue"],
                rawValueUnit: [3, "rawValueUnit"],
                rawValueFormattingRule: [4, "rawValueFormattingRule"],
              },
              null,
            ),
          ],
          function (t, n) {
            var e = n.component;
            t(n, 3, 0, e.currentTime, e.sourceUnit, e.formattingRule);
            var i = t(n, 6, 0, !e.wideSeparator, e.wideSeparator);
            t(n, 5, 0, i);
            var l = t(n, 9, 0, e.alignRemainingPlaytimeRight);
            (t(n, 8, 0, "entertainment-playtime__time-remaining", l),
              t(
                n,
                11,
                0,
                "-",
                !1,
                e.timeRemaining,
                e.sourceUnit,
                e.formattingRule,
              ));
          },
          function (t, n) {
            (t(n, 2, 0, i.Nb(n, 3).isInvisible),
              t(n, 10, 0, i.Nb(n, 11).isInvisible));
          },
        );
      }
      function d(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
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
            (t()(),
            i.yb(
              1,
              0,
              null,
              null,
              2,
              "span",
              [["class", "entertainment-playtime__current-time-sxm"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              2,
              0,
              null,
              null,
              1,
              "au3-formatted-unit-renderer",
              [],
              [[2, "invisible", null]],
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(
              3,
              180224,
              null,
              0,
              a.b,
              [o.a, r.a, i.h],
              {
                rawValue: [0, "rawValue"],
                rawValueUnit: [1, "rawValueUnit"],
                rawValueFormattingRule: [2, "rawValueFormattingRule"],
              },
              null,
            ),
          ],
          function (t, n) {
            var e = n.component;
            t(
              n,
              3,
              0,
              e.currentTime,
              e.sourceUnit,
              e.formattingRuleHHMMSSwithOptionalHours,
            );
          },
          function (t, n) {
            t(n, 2, 0, i.Nb(n, 3).isInvisible);
          },
        );
      }
      function b(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
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
            (t()(),
            i.yb(
              1,
              0,
              null,
              null,
              2,
              "span",
              [["class", "entertainment-playtime__current-time-sxm"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(),
            i.yb(
              2,
              0,
              null,
              null,
              1,
              "au3-formatted-unit-renderer",
              [],
              [[2, "invisible", null]],
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(
              3,
              180224,
              null,
              0,
              a.b,
              [o.a, r.a, i.h],
              {
                prefixNonI18nText: [0, "prefixNonI18nText"],
                separatePrefixAndValue: [1, "separatePrefixAndValue"],
                rawValue: [2, "rawValue"],
                rawValueUnit: [3, "rawValueUnit"],
                rawValueFormattingRule: [4, "rawValueFormattingRule"],
              },
              null,
            ),
          ],
          function (t, n) {
            var e = n.component;
            t(
              n,
              3,
              0,
              "-",
              !1,
              e.currentTime,
              e.sourceUnit,
              e.formattingRuleHHMMSSwithOptionalHours,
            );
          },
          function (t, n) {
            t(n, 2, 0, i.Nb(n, 3).isInvisible);
          },
        );
      }
      function p(t) {
        return i.ac(
          2,
          [
            (t()(),
            i.yb(
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
            i.xb(
              1,
              16384,
              null,
              0,
              u.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, c)),
            i.xb(
              3,
              278528,
              null,
              0,
              u.p,
              [i.P, i.L, u.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, d)),
            i.xb(
              5,
              278528,
              null,
              0,
              u.p,
              [i.P, i.L, u.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (t()(), i.hb(16777216, null, null, 1, null, b)),
            i.xb(
              7,
              278528,
              null,
              0,
              u.p,
              [i.P, i.L, u.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
          ],
          function (t, n) {
            var e = n.component;
            (t(n, 1, 0, e.variant),
              t(n, 3, 0, e.type.Default),
              t(n, 5, 0, e.type.SxmHHMMSS),
              t(n, 7, 0, e.type.SxmBufferTime));
          },
          null,
        );
      }
    },
    soYi: function (t, n, e) {
      "use strict";
      (e.d(n, "a", function () {
        return h;
      }),
        e.d(n, "b", function () {
          return f;
        }));
      var i = e("kZht"),
        l = e("X4XO"),
        a = e("Yi6/"),
        o = e("QQZH"),
        r = e("HM3f"),
        u = e("kuMc"),
        s = e("J+dc"),
        c = e("YtkY"),
        d = e("Ohay"),
        b = e("0Woy"),
        p = e("VWFL"),
        h =
          (e("Y7V8"),
          e("1hWf"),
          e("74Ku"),
          (function (t) {
            return (
              (t[(t.TV_LIST_STATIONS = 0)] = "TV_LIST_STATIONS"),
              (t[(t.TV_LIST_HISTORY_EMPTY = 1)] = "TV_LIST_HISTORY_EMPTY"),
              (t[(t.TV_LIST_FAV_EMPTY = 2)] = "TV_LIST_FAV_EMPTY"),
              t
            );
          })({}));
      class m {
        constructor(t, n, e) {
          ((this.tvStationList = t),
            (this.isPrivacyHintVisible = n),
            (this.tvListDisplayEnum = e));
        }
      }
      class f {
        constructor(t, n, e, l) {
          ((this.tvService = t),
            (this.tvSettingsService = n),
            (this.tvOptionsMenuOptionsService = e),
            (this.showOsd = new i.n()),
            (this.hasEntries = new i.n()),
            (this.uiStateType = a.uc.ListHorizontal),
            (this.TvListDisplayEnum = h),
            (this.TvOptionType = p.a),
            (this.destroyed$$ = new o.a(1)),
            (this.isTvListEmpty = !0),
            (this.logger = l.getLogger("tv.TvStationListComponent")),
            (this.tvStationsDisplayState$ =
              this.initTvStationsDisplayState$()));
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        ngAfterViewInit() {
          (Object(r.b)(
            this.stationElement.changes,
            this.tvService.activeRsiTvTuner$,
          )
            .pipe(Object(u.a)(this.destroyed$$), Object(s.a)(1))
            .subscribe(([, t]) => {
              this.isTvListEmpty ||
                void 0 === t.selectedStationIndex ||
                this.scrollToActiveStation(t.selectedStationIndex);
            }),
            Object(r.b)(
              this.stationElement.changes,
              this.tvService.activeRsiTvTuner$,
            )
              .pipe(
                Object(c.a)(([, t]) => t.selectedStationIndex),
                Object(d.a)(),
                Object(b.a)(),
                Object(u.a)(this.destroyed$$),
              )
              .subscribe(([t, n]) => {
                this.isTvListEmpty ||
                  this.stationElement.first.keepSelectionFocused(t, n);
              }));
        }
        tvStationClicked(t) {
          (this.logger.info("tvStationClicked: station name", t.name),
            this.tvService.updateSelectedTvStation(t).subscribe(
              (t) => {
                (this.logger.info("tvStationClicked: Response of update:", t),
                  this.showOsd.emit());
              },
              (t) => {
                this.logger.error(
                  "tvStationClicked: Could not update tv station. Response:",
                  t,
                );
              },
            ));
        }
        onIdleTimer() {
          (this.logger.info("onIdleTimer was fired"), this.showOsd.emit());
        }
        openOptionsMenu(t) {
          this.tvOptionsMenuOptionsService.showOptionMenu(t);
        }
        get isOptionMenuOpened$() {
          return this.tvOptionsMenuOptionsService.isOptionMenuVisible$;
        }
        initTvStationsDisplayState$() {
          return Object(r.b)(
            this.tvService.tvStationList$,
            this.tvSettingsService.tvSettings$,
          ).pipe(
            Object(c.a)(([t, n]) => {
              ((this.isTvListEmpty = 0 === t.stations.paging.total),
                this.hasEntries.emit(this.isTvListEmpty));
              const e = this.getTvListDisplayEnum(t);
              return new m(t, l.s.RECENTS === t.tunerType && n.privacy, e);
            }),
            Object(u.a)(this.destroyed$$),
            Object(a.pd)(this.logger, "initTvStationsDisplayState$:"),
          );
        }
        scrollToActiveStation(t) {
          this.stationElement.first.selectIndex(t);
        }
        getTvListDisplayEnum(t) {
          return this.isTvListEmpty
            ? l.s.RECENTS === t.tunerType && this.isTvListEmpty
              ? h.TV_LIST_HISTORY_EMPTY
              : l.s.FAVORITES === t.tunerType && this.isTvListEmpty
                ? h.TV_LIST_FAV_EMPTY
                : h.TV_LIST_STATIONS
            : h.TV_LIST_STATIONS;
        }
      }
    },
    tTyz: function (t, n, e) {
      "use strict";
      (e.d(n, "a", function () {
        return h;
      }),
        e.d(n, "b", function () {
          return x;
        }));
      var i = e("kZht"),
        l = e("8TlW"),
        a = e("fu7d"),
        o = e("bou3"),
        r = e("yNay"),
        u = e("Xo58"),
        s = e("m3Ja"),
        c = e("r+e+"),
        d = e("ijxY"),
        b = e("bmFL"),
        p = e("An66"),
        h =
          (e("fZ+u"),
          e("1hWf"),
          e("74Ku"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.content[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}",
              ],
            ],
            data: {},
          }));
      function m(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
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
      function f(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "content"],
                ["fixedNumberOfLines", "1"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [i.l, i.D, o.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              2,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, i.h, i.l, i.D, [2, c.a], [2, d.a], [2, b.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (t, n) {
            var e = n.component;
            (t(
              n,
              1,
              0,
              null == e.tvStation ? null : e.tvStation.contentGroupI18n,
              e.TvStationContentGroupI18nEnum,
            ),
              t(
                n,
                2,
                0,
                null == e.tvStation ? null : e.tvStation.contentGroupI18n,
                null == e.tvStation ? null : e.tvStation.contentGroupI18n,
                "1",
              ));
          },
          function (t, n) {
            t(
              n,
              0,
              0,
              i.Nb(n, 2).backgroundColor,
              i.Nb(n, 2).fixedNumberOfLines,
              i.Nb(n, 2).mayContainLatinCharsForArabic,
              i.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function v(t) {
        return i.ac(
          0,
          [
            (t()(), i.hb(16777216, null, null, 1, null, f)),
            i.xb(
              1,
              16384,
              null,
              0,
              p.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(0, null, null, 0)),
          ],
          function (t, n) {
            var e = n.component;
            t(
              n,
              1,
              0,
              null == e.tvStation ? null : e.tvStation.contentGroupI18n,
            );
          },
          null,
        );
      }
      function S(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "content"],
                ["fixedNumberOfLines", "1"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              l.b,
              l.a,
            )),
            i.xb(
              1,
              212992,
              null,
              0,
              a.a,
              [i.l, i.D, o.a, r.a, [3, a.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            i.xb(
              2,
              245760,
              null,
              0,
              u.a,
              [[6, a.a], s.a, i.h, i.l, i.D, [2, c.a], [2, d.a], [2, b.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (t, n) {
            var e = n.component;
            (t(
              n,
              1,
              0,
              null == e.tvStation ? null : e.tvStation.classificationGroupI18n,
              e.TvClassificationFilterI18nEnum,
            ),
              t(
                n,
                2,
                0,
                null == e.tvStation
                  ? null
                  : e.tvStation.classificationGroupI18n,
                null == e.tvStation
                  ? null
                  : e.tvStation.classificationGroupI18n,
                "1",
              ));
          },
          function (t, n) {
            t(
              n,
              0,
              0,
              i.Nb(n, 2).backgroundColor,
              i.Nb(n, 2).fixedNumberOfLines,
              i.Nb(n, 2).mayContainLatinCharsForArabic,
              i.Nb(n, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function g(t) {
        return i.ac(
          0,
          [
            (t()(), i.hb(16777216, null, null, 1, null, S)),
            i.xb(
              1,
              16384,
              null,
              0,
              p.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (t()(), i.hb(0, null, null, 0)),
          ],
          function (t, n) {
            var e = n.component;
            t(
              n,
              1,
              0,
              null == e.tvStation ? null : e.tvStation.classificationGroupI18n,
            );
          },
          null,
        );
      }
      function T(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
              0,
              0,
              null,
              null,
              4,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (t()(), i.hb(16777216, null, null, 1, null, m)),
            i.xb(
              2,
              16384,
              null,
              0,
              p.k,
              [i.P, i.L],
              {
                ngIf: [0, "ngIf"],
                ngIfThen: [1, "ngIfThen"],
                ngIfElse: [2, "ngIfElse"],
              },
              null,
            ),
            (t()(), i.hb(0, [["contentGroup", 2]], null, 0, null, v)),
            (t()(), i.hb(0, [["classificationGroup", 2]], null, 0, null, g)),
          ],
          function (t, n) {
            t(
              n,
              2,
              0,
              n.context.ngIf.stationSorting ===
                n.component.SettingObjectStationSortingEnum.ALPHABETICAL,
              i.Nb(n, 3),
              i.Nb(n, 4),
            );
          },
          null,
        );
      }
      function O(t) {
        return i.ac(
          0,
          [
            (t()(),
            i.yb(
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
            (t()(), i.hb(16777216, null, null, 2, null, T)),
            i.xb(
              2,
              16384,
              null,
              0,
              p.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            i.Pb(131072, p.b, [i.h]),
            (t()(), i.hb(0, null, null, 0)),
          ],
          function (t, n) {
            var e = n.component;
            t(
              n,
              2,
              0,
              i.Yb(
                n,
                2,
                0,
                i.Nb(n, 3).transform(e.tvSettingsService.tvSettings$),
              ),
            );
          },
          null,
        );
      }
      function x(t) {
        return i.ac(
          2,
          [
            (t()(), i.hb(16777216, null, null, 2, null, O)),
            i.xb(
              1,
              16384,
              null,
              0,
              p.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            i.Pb(131072, p.b, [i.h]),
          ],
          function (t, n) {
            var e,
              l = n.component;
            t(
              n,
              1,
              0,
              (null ==
              (e = i.Yb(
                n,
                1,
                0,
                i.Nb(n, 2).transform(l.tvService.activeRsiTvTuner$),
              ))
                ? null
                : e.type) === l.TvTunerObjectTypeEnum.TV,
            );
          },
          null,
        );
      }
    },
    w4OF: function (t, n, e) {
      "use strict";
      (e.d(n, "b", function () {
        return o;
      }),
        e.d(n, "a", function () {
          return r;
        }));
      var i = e("Yi6/"),
        l = e("kGpN"),
        a = e("eoEw"),
        o = (function (t) {
          return (
            (t[(t.Default = 0)] = "Default"),
            (t[(t.SxmHHMMSS = 1)] = "SxmHHMMSS"),
            (t[(t.SxmBufferTime = 2)] = "SxmBufferTime"),
            t
          );
        })({});
      class r {
        constructor() {
          ((this.variant = o.Default),
            (this.wideSeparator = !1),
            (this.alignRemainingPlaytimeRight = !1),
            (this.sourceUnit = i.vc.SECONDS),
            (this.formattingRule = l.a.DurationInMMSS),
            (this.formattingRuleHHMMSSwithOptionalHours =
              l.a.DurationInHHMMSSwithOptionalHours),
            (this.type = o),
            (this.alignment = a.a));
        }
        get timeRemaining() {
          return this.totalTime - this.currentTime;
        }
      }
    },
    wcHP: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return p;
      });
      var i = e("X4XO"),
        l = e("Yi6/"),
        a = e("HM3f"),
        o = e("YtkY"),
        r = e("xVbo");
      class u {}
      var s = e("74Ku"),
        c = e("+Cqr"),
        d = e("kZht"),
        b = e("yNay");
      let p = (() => {
        class t {
          constructor(t, n) {
            ((this.tvService = t),
              (this.logger = n.getLogger("tv.TvAudioStateService")),
              (this.tvAudioState$ = this.initTvAudioState$()));
          }
          getTvAudioStateIcon$() {
            return this.tvAudioState$.pipe(
              Object(o.a)((t) => this.getAudioStateIcon(t)),
              Object(r.a)(l.wd),
              Object(l.pd)(this.logger.in, "getTvAudioStateIcon$:"),
            );
          }
          getAudioStateIconForFpkNps$() {
            return Object(a.b)(
              this.tvService.isMuted$,
              this.tvService.activeRsiTvTuner$,
            ).pipe(
              Object(o.a)(([t, n]) => {
                const e = n.selectedStation,
                  l = e ? e.casStatus : void 0,
                  a =
                    e && e.availableAudioChannels
                      ? e.availableAudioChannels.length
                      : void 0,
                  o = n.muteState;
                if (t) return "E01F_audio_mute.webp";
                if (o && i.p.AUDIOGOOD !== o) {
                  const t = this.getFpkIconForMuteState(o);
                  if (void 0 !== t) return t;
                }
                if (l && i.f.OK !== l) {
                  const t = c.a.get(l);
                  if (void 0 !== t) return t;
                }
                return a && a > 1 ? "E859_media_tv_multichannel.webp" : "";
              }),
              Object(l.Xc)(this.logger, "getAudioStateIconForFpkNps$: icon"),
            );
          }
          getAudioStateIconForMainListAndFpkList(t) {
            if (t.hasSelectedStation) {
              const n = t.muteState,
                e = t.selectedStation.casStatus;
              if (e && i.f.OK !== e) {
                const t = c.a.get(e);
                return (
                  this.logger.debug(
                    "getAudioStateIconForMainListAndFpkList: casIcon:",
                    t,
                  ),
                  t
                );
              }
              if (n && i.p.AUDIOGOOD !== n) {
                const t = c.c.get(n);
                return (
                  this.logger.debug(
                    "getAudioStateIconForMainListAndFpkList: muteStateIcon:",
                    n,
                  ),
                  t
                );
              }
            }
            const n = c.d.get(t.type);
            return (
              this.logger.debug(
                "getAudioStateIconForMainListAndFpkList: stationTypeIcon:",
                n,
              ),
              n || ""
            );
          }
          initTvAudioState$() {
            return Object(a.b)(
              this.tvService.activeRsiTvTuner$,
              this.tvService.isMuted$,
            ).pipe(
              Object(o.a)(([t, n]) => {
                const e = new u();
                return (
                  (e.tunerSignalState = t.muteState),
                  (e.userMuteState = n),
                  e
                );
              }),
              Object(l.pd)(this.logger, "initTvAudioState$:"),
            );
          }
          getAudioStateIcon(t) {
            const n = t.tunerSignalState;
            return t.userMuteState
              ? c.b.get(i.p.NOAUDIOSERVICE)
              : n
                ? c.b.get(n)
                : (this.logger.warn(
                    "getAudioStateIcon: Unknown signal state, update IconMaps if necessary.",
                  ),
                  "");
          }
          getFpkIconForMuteState(t) {
            switch (t) {
              case i.p.DROPOUT:
              case i.p.NORECEPTION:
                return "E01B_audio_low_signal.webp";
              case i.p.NOAUDIOSERVICE:
                return "E01F_audio_mute.webp";
              default:
                return "";
            }
          }
        }
        return (
          (t.ɵprov = d.bc({
            factory: function () {
              return new t(d.cc(s.a), d.cc(b.a));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    xcls: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return c;
      });
      var i = e("Yi6/"),
        l = e("E2zj"),
        a = e("QQZH"),
        o = e("kuMc"),
        r = e("kZht"),
        u = e("fzcM"),
        s = e("yNay");
      let c = (() => {
        class t {
          constructor(t, n, e) {
            ((this.mediaRoutingService = t),
              (this.disclaimerService = n),
              (this.destroy$$ = new a.a(1)),
              (this.isDisclaimerActive = !1),
              (this.logger = e.getLogger("tv.TvTerminalOptionsService")),
              this.disclaimerService.active$
                .pipe(Object(o.a)(this.destroy$$))
                .subscribe((t) => (this.isDisclaimerActive = t)));
          }
          ngOnDestroy() {
            (this.destroy$$.next(), this.destroy$$.complete());
          }
          setStatusOfTerminalMode(t, n) {
            return t
              ? i.gd.isBentley &&
                t &&
                "FULL_AVAILABLE" === t.toString() &&
                this.isDisclaimerActive &&
                ("EPG" === n.textId || "Teletext" === n.textId)
                ? ((n.visible = !0), (n.enabled = !1), n)
                : t && "FULL_AVAILABLE" === t.toString()
                  ? ((n.visible = !0), (n.enabled = !0), n)
                  : !t ||
                      ("LOADING" !== t.toString() &&
                        "NOT_AVAILABLE" !== t.toString())
                    ? ((n.visible = !1), (n.enabled = !1), n)
                    : ((n.visible = !0), (n.enabled = !1), n)
              : (this.logger.warn(
                  "setStatusOfTerminalMode: terminalMode in not defined",
                ),
                (n.visible = !1),
                (n.enabled = !1),
                n);
          }
          activateTerminalMode(t) {
            this.mediaRoutingService.goTo(l.a.Tv.children.TvTerminal, void 0, {
              navigationExtras: { queryParams: { terminalMode: t } },
            });
          }
        }
        return (
          (t.ɵprov = r.bc({
            factory: function () {
              return new t(r.cc(l.b), r.cc(u.a), r.cc(s.a));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
    },
    yNl6: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return i;
      });
      class i {}
    },
    zKYc: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return a;
      });
      var i = e("Yi6/"),
        l = e("jOdJ");
      e("74Ku");
      class a extends i.bc {
        constructor(t, n) {
          (super(n.getLogger("tv.TvInitGuard"), 1e3), (this.tvService = t));
        }
        checkActivation(t, n) {
          return this.tvService.tvAvailable$.pipe(Object(l.a)());
        }
      }
    },
  },
]);
