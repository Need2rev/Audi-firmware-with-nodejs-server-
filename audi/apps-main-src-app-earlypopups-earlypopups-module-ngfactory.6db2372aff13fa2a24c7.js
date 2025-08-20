(window.webpackJsonp = window.webpackJsonp || []).push([
  [62, 105],
  {
    TJMC: function (n, t, e) {
      "use strict";
      (e.d(t, "a", function () {
        return i;
      }),
        e.d(t, "b", function () {
          return a;
        }));
      var l = e("kZht"),
        i =
          (e("JIjU"),
          e("OtM5"),
          l.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;width:50px;height:50px}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.radio-button__label[_ngcontent-%COMP%]{display:block;width:28px;height:28px;border:2px solid #fff;border-radius:50%}.radio-button__button[_ngcontent-%COMP%]{display:none}.radio-button__button[_ngcontent-%COMP%]:checked + .radio-button__label[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.radio-button__button[_ngcontent-%COMP%]:checked + .radio-button__label[_ngcontent-%COMP%]:before{content:"";display:block;width:10px;height:10px;border-radius:50%;background-color:#fff}',
              ],
            ],
            data: {},
          }));
      function a(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              0,
              "input",
              [
                ["class", "radio-button__button"],
                ["type", "radio"],
              ],
              [
                [8, "id", 0],
                [8, "name", 0],
                [8, "disabled", 0],
                [8, "checked", 0],
              ],
              [[null, "change"]],
              function (n, t, e) {
                var l = !0,
                  i = n.component;
                return (
                  "change" === t &&
                    (l = !1 !== i.selectionChangeRequested.emit(i.value) && l),
                  l
                );
              },
              null,
              null,
            )),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              0,
              "label",
              [["class", "radio-button__label"]],
              [[8, "htmlFor", 0]],
              null,
              null,
              null,
              null,
            )),
          ],
          null,
          function (n, t) {
            var e = t.component;
            (n(t, 0, 0, e.id, e.group, e.disabled, e.checked),
              n(t, 1, 0, e.id));
          },
        );
      }
    },
    "W+o6": function (n, t, e) {
      "use strict";
      (e.r(t),
        e.d(t, "EarlypopupsModuleNgFactory", function () {
          return Vu;
        }));
      var l = e("kZht");
      class i {}
      var a = e("2QJK"),
        o = e("UbWD"),
        u = e("1qmX"),
        r = e("Pqed"),
        s = e("fu7d"),
        c = e("bou3"),
        p = e("yNay"),
        b = e("odRV"),
        d = e("O82V"),
        m = e("Eln4"),
        h = e("sg2e"),
        g = e("ZUXc"),
        f = e("nSAP"),
        x = e("1VvW"),
        _ = e("M+lD"),
        P = e("8yWk"),
        C = e("m3Ja"),
        y = e("v98a"),
        O = e("ENSU"),
        v = e("3bpu"),
        w = e("HVUF"),
        S = e("B3Zb"),
        N = e("8TlW"),
        M = e("Xo58"),
        T = e("r+e+"),
        A = e("ijxY"),
        L = e("bmFL"),
        E = e("OtM5"),
        k = e("9ZFG"),
        I = e("EyLa"),
        D = e("4nnk"),
        F = e("bMuc"),
        z = e("ZIdM"),
        R = e("6zvu"),
        B = e("VcEz"),
        H = e("y9xZ"),
        U = e("+sw+"),
        V = e("BMrr"),
        $ = e("IEns"),
        W = e("6480"),
        Y = e("FfND"),
        G = e("oeT7"),
        j = e("t7cT"),
        K = e("z6QT"),
        Z = e("flsk"),
        J = e("FQEI"),
        X = e("evAh"),
        q = e("Ps6X"),
        Q = e("CpzC"),
        nn = e("0Bsn"),
        tn = e("5GjX"),
        en = e("mYyF"),
        ln = e("aOG8"),
        an = e("Krzs"),
        on = e("ZTXN"),
        un = e("bwdy"),
        rn = e("Yi6/"),
        sn = e("RGxT"),
        cn = e("69kq"),
        pn = e("H+fK"),
        bn = e("Vc2n"),
        dn = e("sK8D"),
        mn = e("aehS"),
        hn = e("P1io"),
        gn = e("JcTI"),
        fn = e("tZxQ"),
        xn = (function (n) {
          return (
            (n.NAVIGATION = "NAVIGATION"),
            (n.TA = "TA"),
            (n.SDS = "SDS"),
            (n.RINGTONE = "RINGTONE"),
            (n.PHONE_CALL = "PHONE_CALL"),
            (n.TMC = "TMC"),
            (n.READOUT_CONTACT = "READOUT_CONTACT"),
            (n.READOUT_MESSAGE = "READOUT_MESSAGE"),
            (n.ECALL_CONNECTED_GATEWAY = "ECALL_CONNECTED_GATEWAY"),
            (n.READINESS_SOUND = "READINESS_SOUND"),
            (n.ENTERTAINMENT = "ENTERTAINMENT"),
            (n.LOCKED = "LOCKED"),
            (n.NOT_ACTIVE = "NOT_ACTIVE"),
            (n.NOT_AVAILABLE = "NOT_AVAILABLE"),
            (n.NAVIGATION_ASTERIX = "NAVIGATION_ASTERIX"),
            n
          );
        })({});
      class _n {
        constructor(n, t, e, l, i, a, o, u, r, s) {
          ((this.activeVolumesService = n),
            (this.settingsRoutingService = t),
            (this.phoneRoutingService = e),
            (this.naviRoutingService = l),
            (this.popupManager = i),
            (this.actionsService = a),
            (this.dataDictionary = o),
            (this.cdr = u),
            (this.uiStateType = rn.uc.ListHorizontal),
            (this.context = rn.s.Home),
            (this.PopupType = rn.Rb),
            (this.volumePopupId = rn.Ob.POPUP_VOLUME_POPUP),
            (this.audioContextEnum = xn),
            (this.SETTINGS_ICON_CATEGORY = rn.Z.ListTwoline),
            (this.MUTE_ICON_CATEGORY = rn.Z.List),
            (this.AUTOHIDE_TIME = this.dataDictionary.t_volumepopup_fadeout),
            (this.soundRoute = pn.a.Main.children.Sound),
            (this.currentAudioContext = xn.ENTERTAINMENT.toString()),
            (this.autoHideSubject$ = new on.a()),
            (this.subscription = un.a.EMPTY),
            (this.logger = s.getLogger("volumepopup")));
          const c = r.currentAppRouteSnapshot;
          this.asiActive =
            !!c &&
            !!c.appContext &&
            Object(rn.Dc)(c.appContext, hn.a) &&
            c.path === gn.a.VideoStream.path;
        }
        ngOnInit() {
          this.subscription = this.activeVolumesService.activeVolume$.subscribe(
            (n) => {
              (this.logger.in.debug(
                "VolumepopupComponent new activeVolume data",
                n,
              ),
                (this.disabled = void 0 !== n.disableReason));
              const t = this.currentAudioContext;
              ((this.currentAudioContext = this.disabled
                ? n.disableReason
                  ? xn[n.disableReason]
                  : ""
                : n.context
                  ? xn[n.context]
                  : ""),
                this.currentAudioContext !== t &&
                  this.logger.info(
                    `VolumepopupComponent set new audioContext from ${this.disabled ? "volumeElement.disabledReason" : "volumeElement.context"}: "${this.currentAudioContext}"`,
                  ),
                n.valueChangeActive &&
                  this.autoHideSubject$.next(this.AUTOHIDE_TIME),
                (this.currentVolume = n.currentValue),
                (this.volumeMin = n.minValue),
                (this.volumeMax = n.maxValue),
                (this.muted = n.userMuted),
                this.logger.info(
                  `VolumepopupComponent got new volume: ${this.currentVolume}, muted: ${this.muted}, valueChangeActive: ${n.valueChangeActive}`,
                ),
                this.cdr.markForCheck());
            },
          );
        }
        ngOnDestroy() {
          this.subscription.unsubscribe();
        }
        gotoSettings() {
          (this.disabled
            ? this.settingsRoutingService.goToSound(!0)
            : this.currentAudioContext === xn.TMC ||
                this.currentAudioContext === xn.NAVIGATION ||
                this.currentAudioContext === xn.READINESS_SOUND
              ? this.naviRoutingService.goTo(
                  dn.b.NaviSettings.children.AudioSettings,
                )
              : this.currentAudioContext === xn.SDS
                ? (this.logger.info(
                    "VolumepopupComponent settingsbutton pressed during SDS -> stopping speech dialog",
                  ),
                  this.actionsService
                    .requestAction(sn.a.STOP)
                    .then(() => {
                      (this.logger.info(
                        "VolumepopupComponent speech dialog stopped -> going to tone main screen",
                      ),
                        this.settingsRoutingService.goToSound(!0));
                    })
                    .catch((n) => {
                      this.logger.error(
                        "VolumepopupComponent stopping speech dialog failed",
                        n,
                      );
                    }))
                : this.currentAudioContext === xn.PHONE_CALL ||
                    this.currentAudioContext === xn.RINGTONE ||
                    this.currentAudioContext === xn.ECALL_CONNECTED_GATEWAY
                  ? this.phoneRoutingService.goTo(mn.a.children.ToneTel)
                  : this.currentAudioContext === xn.TA
                    ? this.settingsRoutingService.goTo(
                        pn.a.Main.children.Entertainment,
                      )
                    : this.settingsRoutingService.goToSound(!0),
            this.popupManager.unrequest(this.volumePopupId));
        }
      }
      var Pn = l.wb({
        encapsulation: 0,
        styles: [
          [
            '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}.content[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:849px;height:120px}.content__left[_ngcontent-%COMP%]{flex-shrink:1;flex-grow:1;width:calc(100% - 160px);height:100%;padding-left:24px;padding-right:30px}.content__left--top[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;height:86px;padding-top:20px}.content__left--top-muteicon[_ngcontent-%COMP%]{float:left;flex-shrink:0;flex-grow:0;padding-right:15px}.content__left--top-text[_ngcontent-%COMP%]{flex-shrink:1;flex-grow:1;margin-top:-3px;text-align:center}.content__left--bottom[_ngcontent-%COMP%]{width:100%;height:calc(100% - 86px)}.content__left--bottom.state-disabled[_ngcontent-%COMP%]{filter:grayscale(100%) brightness(.4)}.content__right[_ngcontent-%COMP%]{flex-shrink:0;flex-grow:0;width:160px;height:100%}.content__right[_ngcontent-%COMP%]:before{content:"";position:absolute;top:12px;display:block;width:3px;height:calc(100% - 24px);background-image:linear-gradient(90deg,rgba(0,0,0,.7) 2px,hsla(0,0%,100%,.7) 3px)}.settingsicon[_ngcontent-%COMP%]{padding:11px 30px}',
          ],
        ],
        data: {
          animation: [
            {
              type: 7,
              name: "childAnim",
              definitions: [
                {
                  type: 1,
                  expr: ":leave",
                  animation: {
                    type: 11,
                    selector: ":leave",
                    animation: { type: 9, options: null },
                    options: null,
                  },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function Cn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              35,
              "au3-popup",
              [["id", ""]],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (n, t, e) {
                var i = !0;
                return (
                  "component:@a276-popup-animation.start" === t &&
                    (i = !1 !== l.Nb(n, 7).animationStart(e) && i),
                  "component:@a276-popup-animation.done" === t &&
                    (i = !1 !== l.Nb(n, 7).animationFinished(e) && i),
                  "popup:keydown.Backspace" === t &&
                    (i = !1 !== l.Nb(n, 7).handleHkBackEvent() && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            l.Sb(6144, null, o.a, null, [u.b]),
            l.Sb(6144, null, r.b, null, [u.b]),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(4, 16384, null, 0, b.a, [l.l], null, null),
            l.Sb(512, null, d.a, d.a, []),
            l.Sb(131584, null, m.a, m.a, []),
            l.xb(
              7,
              4964352,
              null,
              1,
              u.b,
              [
                h.a,
                g.a,
                d.a,
                l.l,
                f.a,
                x.m,
                _.a,
                p.a,
                l.h,
                P.a,
                C.a,
                m.a,
                y.b,
                O.b,
                l.z,
                [2, v.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                autoHideTime: [2, "autoHideTime"],
                autoHideReset$: [3, "autoHideReset$"],
                dynamicSize: [4, "dynamicSize"],
                width: [5, "width"],
                height: [6, "height"],
                hasText: [7, "hasText"],
              },
              null,
            ),
            l.Tb(603979776, 1, { dialogButtons: 1 }),
            (n()(),
            l.yb(
              9,
              0,
              null,
              1,
              26,
              "div",
              [["class", "content"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              10,
              0,
              null,
              null,
              12,
              "div",
              [["class", "content__left"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              11,
              0,
              null,
              null,
              6,
              "div",
              [["class", "content__left--top"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              12,
              0,
              null,
              null,
              1,
              "au3-icon",
              [
                ["class", "content__left--top-muteicon"],
                ["fileName", "E01F_audio_mute.webp"],
              ],
              [
                [4, "visibility", null],
                [2, "icon-component--hidden", null],
              ],
              null,
              null,
              w.b,
              w.a,
            )),
            l.xb(
              13,
              4243456,
              null,
              0,
              S.b,
              [p.a, l.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (n()(),
            l.yb(
              14,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [["class", "content__left--top-text"]],
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
              N.b,
              N.a,
            )),
            l.xb(
              15,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            l.xb(
              16,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
            l.xb(
              17,
              147456,
              null,
              0,
              E.a,
              [k.a, l.h, p.a, [3, E.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            (n()(),
            l.yb(
              18,
              0,
              null,
              null,
              4,
              "div",
              [["class", "content__left--bottom"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              null,
              null,
              null,
              null,
            )),
            l.xb(
              19,
              147456,
              null,
              0,
              E.a,
              [k.a, l.h, p.a, [3, E.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            (n()(),
            l.yb(
              20,
              0,
              null,
              null,
              2,
              "au3-progressbar",
              [["id", ""]],
              [
                [2, "sxm--rotate", null],
                [2, "progressbar--infinite", null],
              ],
              null,
              null,
              I.b,
              I.a,
            )),
            l.xb(
              21,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              22,
              49152,
              null,
              0,
              D.a,
              [l.l, l.h],
              { min: [0, "min"], max: [1, "max"], current: [2, "current"] },
              null,
            ),
            (n()(),
            l.yb(
              23,
              0,
              null,
              null,
              12,
              "div",
              [["class", "content__right"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              24,
              0,
              null,
              null,
              11,
              "au3-icon",
              [
                ["class", "settingsicon"],
                ["fileName", "E186_settings.webp"],
              ],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
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
              function (n, t, e) {
                var l = !0;
                return (
                  "mib3Tap" === t &&
                    (l = !1 !== n.component.gotoSettings() && l),
                  l
                );
              },
              w.b,
              w.a,
            )),
            l.xb(
              25,
              147456,
              null,
              0,
              E.a,
              [k.a, l.h, p.a, [3, E.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            l.xb(26, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              27,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              28,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.xb(
              29,
              671744,
              null,
              0,
              W.a,
              [Y.a, G.i, E.a, R.a, W.b, j.a],
              {
                routeInfo: [0, "routeInfo"],
                preventGoToRoute: [1, "preventGoToRoute"],
                settingsButton: [2, "settingsButton"],
              },
              null,
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              31,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              32,
              4243456,
              null,
              0,
              S.b,
              [p.a, l.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            l.xb(
              33,
              212992,
              null,
              0,
              q.a,
              [[2, R.a], [8, null], [3, q.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            l.xb(
              34,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              35,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, ""),
              n(
                t,
                7,
                0,
                e.volumePopupId,
                e.PopupType.Toast,
                e.AUTOHIDE_TIME,
                e.autoHideSubject$,
                !1,
                849,
                120,
                !1,
              ),
              n(t, 13, 0, "E01F_audio_mute.webp", e.MUTE_ICON_CATEGORY),
              n(t, 15, 0, e.currentAudioContext, e.audioContextEnum),
              n(t, 16, 0, e.currentAudioContext, e.currentAudioContext),
              n(t, 17, 0, e.disabled),
              n(t, 19, 0, e.disabled),
              n(t, 21, 0, ""),
              n(t, 22, 0, e.volumeMin, e.volumeMax, e.currentVolume),
              n(t, 25, 0, e.asiActive),
              n(t, 28, 0),
              n(t, 29, 0, e.soundRoute, !0, !0),
              n(t, 31, 0),
              n(t, 32, 0, "E186_settings.webp", e.SETTINGS_ICON_CATEGORY),
              n(t, 33, 0, e.uiStateType));
          },
          function (n, t) {
            var e = t.component;
            (n(
              t,
              0,
              0,
              l.Nb(t, 7).popupAnimBinding,
              l.Nb(t, 7).animated,
              l.Nb(t, 7).numberOfButtonsCSSVariable,
            ),
              n(
                t,
                12,
                0,
                e.muted ? "inherit" : "hidden",
                l.Nb(t, 13).iconComponentHidden,
              ),
              n(
                t,
                14,
                0,
                l.Nb(t, 16).backgroundColor,
                l.Nb(t, 16).fixedNumberOfLines,
                l.Nb(t, 16).mayContainLatinCharsForArabic,
                l.Nb(t, 16).shortenWithEllipsisForArabic,
                l.Nb(t, 17).combinedDisabled,
                l.Nb(t, 17).useBrighterIcon,
              ),
              n(
                t,
                18,
                0,
                l.Nb(t, 19).combinedDisabled,
                l.Nb(t, 19).useBrighterIcon,
              ),
              n(t, 20, 0, l.Nb(t, 22).shouldRotateForSxm, l.Nb(t, 22).infinite),
              n(t, 24, 1, [
                l.Nb(t, 25).combinedDisabled,
                l.Nb(t, 25).useBrighterIcon,
                l.Nb(t, 31).markerClassEnabled,
                l.Nb(t, 32).iconComponentHidden,
                l.Nb(t, 33).uiStateListHorizontal,
                l.Nb(t, 33).uiStateListVertical,
                l.Nb(t, 33).uiStateCoverLeft,
                l.Nb(t, 33).uiStateCoverRight,
                l.Nb(t, 33).uiStateCoverBottom,
                l.Nb(t, 33).uiStateButton,
                l.Nb(t, 33).uiStateByDabLeft,
                l.Nb(t, 33).uiStateByDabRight,
                l.Nb(t, 33).uiStateLbDabLeft,
                l.Nb(t, 33).uiStateLbDabRight,
              ]));
          },
        );
      }
      var yn = e("An66");
      class On {
        constructor() {
          this.iconCategoryEnum = rn.Z;
        }
      }
      var vn = l.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;height:98px;width:100%}.ftw-sidebar-icon[_ngcontent-%COMP%]{position:relative;width:40px;height:40px}.ftw-sidebar-icon--finished[_ngcontent-%COMP%]{position:absolute;bottom:39px;right:50px}.ftw-sidebar-icon--deselected[_ngcontent-%COMP%]{filter:brightness(50%)}",
          ],
        ],
        data: {},
      });
      function wn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [
                ["class", "ftw-sidebar-icon--finished"],
                ["fileName", "E2C3_ftu_checkmark.webp"],
              ],
              [
                [2, "ftw-sidebar-icon--deselected", null],
                [2, "icon-component--hidden", null],
              ],
              null,
              null,
              w.b,
              w.a,
            )),
            l.xb(
              1,
              4243456,
              null,
              0,
              S.b,
              [p.a, l.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (n, t) {
            n(
              t,
              1,
              0,
              "E2C3_ftu_checkmark.webp",
              t.component.iconCategoryEnum.List,
            );
          },
          function (n, t) {
            n(t, 0, 0, t.component.isDisabled, l.Nb(t, 1).iconComponentHidden);
          },
        );
      }
      function Sn(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-icon",
              [["class", "ftw-sidebar-icon"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
                [2, "icon-component--hidden", null],
              ],
              null,
              null,
              w.b,
              w.a,
            )),
            l.xb(
              1,
              147456,
              null,
              0,
              E.a,
              [k.a, l.h, p.a, [3, E.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            l.xb(
              2,
              4243456,
              null,
              0,
              S.b,
              [p.a, l.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, wn)),
            l.xb(
              4,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, e.isDisabled),
              n(t, 2, 0, e.icon, e.iconCategoryEnum.List),
              n(t, 4, 0, e.isFinished));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 1).combinedDisabled,
              l.Nb(t, 1).useBrighterIcon,
              l.Nb(t, 2).iconComponentHidden,
            );
          },
        );
      }
      var Nn = e("ihOk"),
        Mn = e("ZMtB"),
        Tn = e("fzcM"),
        An = e("0qMr");
      class Ln {
        constructor(n) {
          this.displayService = n;
        }
      }
      var En = l.wb({
        encapsulation: 0,
        styles: [
          [
            '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.ftw-main__title[_ngcontent-%COMP%]{text-align:center;text-wrap:normal;width:1208px;max-height:98px;margin:20px 38px 38px;font-size:40px}.ftw-main__title--med[_ngcontent-%COMP%]{margin:20px 17px 38px;width:985px}.ftw-main__text[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);margin-left:50px;width:800px;font-size:30px}.ftw-main__text--med[_ngcontent-%COMP%]{margin-left:30px;width:665px}.component-layout-latin[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:rtl}.decorator[_ngcontent-%COMP%]{position:absolute;height:392px;width:439px;bottom:0;right:0}',
          ],
        ],
        data: {},
      });
      function kn(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__title"],
                ["id", "ftwFirstPageTitle"],
              ],
              [
                [2, "ftw-main__title--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
            (n()(),
            l.yb(
              3,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "ftwFirstPageText"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              4,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              5,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            l.yb(
              6,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "decorator"],
                ["id", "ftwFirstPageDecorator"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              w.b,
              w.a,
            )),
            l.xb(
              7,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              8,
              4243456,
              null,
              0,
              S.b,
              [p.a, l.z],
              { fileName: [0, "fileName"] },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "ftwFirstPageTitle"),
              n(
                t,
                2,
                0,
                "Mithilfe des Einrichtungsassistenten machen Sie diesen Audi\nzu Ihrem Audi.",
                "ftwFirstPageTitle",
              ),
              n(t, 4, 0, "ftwFirstPageText"),
              n(
                t,
                5,
                0,
                "Dies ist der Assistent, der Sie bei der Einrichtung Ihres\nFahrzeugs unterst\xfctzt. Bitte folgen Sie allen\nEinzelschritten, um alle Funktionen dieses Fahrzeugs\nnutzen zu k\xf6nnen.",
                "ftwFirstPageText",
                6,
              ),
              n(t, 7, 0, "ftwFirstPageDecorator"),
              n(
                t,
                8,
                0,
                "/decorators/W768_Helpconcept/G35/W768_help_concept/Wizard/W768_HelpConcept_Wizard_decorator_flat_ringe.webp",
              ));
          },
          function (n, t) {
            var e = t.component;
            (n(
              t,
              0,
              0,
              !e.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            ),
              n(
                t,
                3,
                0,
                !e.displayService.isHighResolution,
                l.Nb(t, 5).backgroundColor,
                l.Nb(t, 5).fixedNumberOfLines,
                l.Nb(t, 5).mayContainLatinCharsForArabic,
                l.Nb(t, 5).shortenWithEllipsisForArabic,
              ),
              n(t, 6, 0, l.Nb(t, 8).iconComponentHidden));
          },
        );
      }
      var In = e("TJMC"),
        Dn = e("JIjU"),
        Fn = e("N2Hj"),
        zn = e("2rvh"),
        Rn = e("Udyh"),
        Bn = e("I3ve"),
        Hn = e("qiAR"),
        Un = e("007S"),
        Vn = e("oxWk"),
        $n = e("Tr//"),
        Wn = e("C05f"),
        Yn = e("QQZH"),
        Gn = e("kuMc"),
        jn = e("AEBN");
      class Kn {
        constructor(n) {
          ((this.languageService = n),
            (this.localizedIds = jn.o),
            (this.englishIds = jn.j),
            (this.languageList$$ = new Wn.a([])),
            (this.destroy$$ = new Yn.a(1)),
            (this.selectedLanguageEmitter = new l.n()),
            this.languageService.visibleGuiLanguages$
              .pipe(Object(jn.y)(), Object(Gn.a)(this.destroy$$))
              .subscribe((n) => {
                ((this.currentVisibleGuiLanguageList = n),
                  this.languageList$$.next(this.currentVisibleGuiLanguageList));
              }));
        }
        ngOnInit() {
          this.languageService.currentLanguage$
            .pipe(Object(Gn.a)(this.destroy$$))
            .subscribe((n) => {
              (this.onLanguageSelected(n),
                requestAnimationFrame(() => this.languageList$$.next([])),
                requestAnimationFrame(() =>
                  this.languageList$$.next(this.currentVisibleGuiLanguageList),
                ));
            });
        }
        onLanguageSelected(n) {
          ((this.selectedLanguage = n),
            this.selectedLanguageEmitter.emit(this.selectedLanguage));
        }
        ngOnDestroy() {
          (this.destroy$$.next(), this.destroy$$.complete());
        }
      }
      var Zn = e("6ifu"),
        Jn = l.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;width:100%}.language-list-container[_ngcontent-%COMP%]{position:relative;height:100%;width:93%}.language-list[_ngcontent-%COMP%]{position:relative;height:100%;width:100%}.language[_ngcontent-%COMP%]{display:flex;width:100%;height:120px;align-items:center;padding:0 20px}.language__texts[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1;max-width:calc(100% - 50px)}.language__name--localized[_ngcontent-%COMP%]{font-size:40px;flex-shrink:0}.language__name--english[_ngcontent-%COMP%]{flex-grow:1;font-size:30px}",
            ],
          ],
          data: {},
        });
      function Xn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              17,
              "div",
              [
                ["class", "language"],
                ["id", "language"],
              ],
              [[2, "mib3-haptic", null]],
              [[null, "mib3Tap"]],
              function (n, t, e) {
                var l = !0;
                return (
                  "mib3Tap" === t &&
                    (l =
                      !1 !==
                        n.component.onLanguageSelected(n.context.$implicit) &&
                      l),
                  l
                );
              },
              null,
              null,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              4,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              6,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              7,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              8,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
            (n()(),
            l.yb(
              9,
              0,
              null,
              null,
              6,
              "div",
              [["class", "language__texts"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              10,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "language__name--localized"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              11,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            l.xb(
              12,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            l.yb(
              13,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "language__name--english"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              14,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            l.xb(
              15,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            l.yb(
              16,
              0,
              null,
              null,
              1,
              "au3-radio-button",
              [["class", "language__radio-button"]],
              null,
              [[null, "selectionChangeRequested"]],
              function (n, t, e) {
                var l = !0;
                return (
                  "selectionChangeRequested" === t &&
                    (l =
                      !1 !==
                        n.component.onLanguageSelected(n.context.$implicit) &&
                      l),
                  l
                );
              },
              In.b,
              In.a,
            )),
            l.xb(
              17,
              180224,
              null,
              0,
              Dn.a,
              [[2, E.a], l.h],
              {
                group: [0, "group"],
                value: [1, "value"],
                checked: [2, "checked"],
              },
              { selectionChangeRequested: "selectionChangeRequested" },
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "language"),
              n(t, 4, 0),
              n(t, 6, 0),
              n(t, 11, 0, t.context.$implicit, e.localizedIds),
              n(t, 12, 0, t.context.$implicit, t.context.$implicit, 1),
              n(t, 14, 0, t.context.$implicit, e.englishIds),
              n(t, 15, 0, t.context.$implicit, t.context.$implicit, 1),
              n(
                t,
                17,
                0,
                "languages",
                t.context.$implicit,
                t.context.$implicit === e.selectedLanguage,
              ));
          },
          function (n, t) {
            (n(t, 0, 0, l.Nb(t, 6).markerClassEnabled),
              n(
                t,
                10,
                0,
                l.Nb(t, 12).backgroundColor,
                l.Nb(t, 12).fixedNumberOfLines,
                l.Nb(t, 12).mayContainLatinCharsForArabic,
                l.Nb(t, 12).shortenWithEllipsisForArabic,
              ),
              n(
                t,
                13,
                0,
                l.Nb(t, 15).backgroundColor,
                l.Nb(t, 15).fixedNumberOfLines,
                l.Nb(t, 15).mayContainLatinCharsForArabic,
                l.Nb(t, 15).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function qn(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              8,
              "div",
              [["class", "language-list-container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              7,
              "au3-list",
              [
                ["class", "language-list"],
                ["id", "languageList"],
              ],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Fn.b,
              Fn.a,
            )),
            l.Sb(6144, null, o.a, null, [zn.a]),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(4, 16384, null, 0, b.a, [l.l], null, null),
            l.xb(
              5,
              12828672,
              null,
              1,
              zn.a,
              [
                [2, Rn.a],
                [2, Bn.a],
                [8, null],
                [2, s.a],
                [2, Hn.a],
                [2, Un.a],
                [2, B.b],
                G.i,
                l.z,
                l.h,
                p.a,
                Vn.a,
                $n.a,
                [2, J.a],
                v.a,
                [2, G.a],
              ],
              { items: [0, "items"] },
              null,
            ),
            l.Tb(603979776, 1, { template: 0 }),
            l.Pb(131072, yn.b, [l.h]),
            (n()(), l.hb(0, [[1, 2]], 0, 0, null, Xn)),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, "languageList"),
              n(
                t,
                5,
                0,
                l.Yb(t, 5, 0, l.Nb(t, 7).transform(e.languageList$$)),
              ));
          },
          function (n, t) {
            n(t, 1, 0, l.Nb(t, 5).showLineNumbers);
          },
        );
      }
      var Qn = e("cNKu"),
        nt = e("a8ry"),
        tt = e("YtkY"),
        et = e("J+dc"),
        lt = e("3Sae"),
        it = e("CYdq");
      class at {
        constructor(n, t, e, l) {
          ((this.displayService = n),
            (this.userManagementService = t),
            (this.iconCategory = rn.Z.List),
            (this.userRoles = nt.e),
            (this.personalizedIconList = [
              "E401_car_personalize_profile_guest.webp",
              "E400_1_car_personalize_profile.webp",
              "E400_2_car_personalize_profile.webp",
              "E400_3_car_personalize_profile.webp",
              "E400_4_car_personalize_profile.webp",
              "E400_5_car_personalize_profile.webp",
              "E400_6_car_personalize_profile.webp",
            ]),
            (this.destroyed$$ = new Yn.a(1)),
            (this.logger = l.getLogger("FTW.FtwAccountOverviewComponent")),
            e
              .getRequestData(rn.Ob.POPUP_FTW)
              .pipe(
                Object(tt.a)((n) => (n && n.context ? n.context : null)),
                Object(et.a)(1),
                Object(Gn.a)(this.destroyed$$),
              )
              .subscribe((n) => {
                this.openedInPsoAddAccountContext =
                  n === it.a.RETURN_AFTER_ADD_ACCOUNT;
              }));
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
        getPersonalizeIcon(n) {
          return n && n.role && n.iaaUserID
            ? n.role === this.userRoles.AnonymousGuestUser ||
              n.role === this.userRoles.OfflineGuestUser ||
              n.role === this.userRoles.OnlineGuestUser ||
              n.iaaUserID >= this.personalizedIconList.length
              ? this.personalizedIconList[0]
              : this.personalizedIconList[n.iaaUserID]
            : (this.logger.error("activeUser or activeUser role is undefined!"),
              this.personalizedIconList[0]);
        }
      }
      var ot = l.wb({
        encapsulation: 0,
        styles: [
          [
            '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.ftw-main__title[_ngcontent-%COMP%]{text-align:center;text-wrap:normal;width:1208px;max-height:98px;margin:20px 38px 38px;font-size:40px}.ftw-main__title--med[_ngcontent-%COMP%]{margin:20px 17px 38px;width:985px}.ftw-main__text[_ngcontent-%COMP%]{margin-left:50px;width:800px}.ftw-main__profile-name[_ngcontent-%COMP%], .ftw-main__text[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);font-size:30px}.ftw-main__profile-name[_ngcontent-%COMP%]{position:relative}.ftw-main__text--med[_ngcontent-%COMP%]{margin-left:30px;width:665px}.component-layout-latin[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:rtl}.personalize-icon[_ngcontent-%COMP%]{margin-left:15px;margin-right:15px;width:40px;height:40px}.profile-info[_ngcontent-%COMP%]{position:relative;display:flex;align-items:flex-end;margin-left:50px;margin-top:20px;max-width:800px}.profile-info--med[_ngcontent-%COMP%]{margin-left:30px;max-width:665px}.decorator[_ngcontent-%COMP%]{position:absolute;height:392px;width:439px;bottom:0;right:0}',
          ],
        ],
        data: {},
      });
      function ut(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__profile-name"],
                ["id", "ftwAccountOverViewProfileGuest"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "ftwAccountOverViewProfileGuest"),
              n(t, 2, 0, "Gast", "ftwAccountOverViewProfileGuest", 1));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function rt(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["class", "ftw-main__profile-name"],
                ["id", "ftwAccountOverViewProfileName"],
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
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 16384, null, 0, A.a, [], null, null),
            l.xb(
              3,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              { id: [0, "id"], nonI18nValue: [1, "nonI18nValue"] },
              null,
            ),
            l.Rb(4, 1),
          ],
          function (n, t) {
            n(t, 1, 0, "ftwAccountOverViewProfileName");
            var e = l.Yb(
              t,
              3,
              1,
              n(
                t,
                4,
                0,
                l.Nb(t.parent.parent.parent, 0),
                t.parent.parent.context.mib3Let,
              ),
            );
            n(t, 3, 0, "ftwAccountOverViewProfileName", e);
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 3).backgroundColor,
              l.Nb(t, 3).fixedNumberOfLines,
              l.Nb(t, 3).mayContainLatinCharsForArabic,
              l.Nb(t, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function st(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              7,
              "div",
              [
                ["class", "profile-info"],
                ["id", "ftwAccountOverViewProfileInfo"],
              ],
              [[2, "profile-info--med", null]],
              null,
              null,
              null,
              null,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, ut)),
            l.xb(
              3,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), l.hb(0, [["profileName", 2]], null, 0, null, rt)),
            (n()(),
            l.yb(
              5,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "personalize-icon"],
                ["id", "ftwPersonalizedIcon"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              w.b,
              w.a,
            )),
            l.xb(
              6,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              7,
              4243456,
              null,
              0,
              S.b,
              [p.a, l.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "ftwAccountOverViewProfileInfo"),
              n(
                t,
                3,
                0,
                (null == t.parent.context.mib3Let
                  ? null
                  : t.parent.context.mib3Let.role) ===
                  e.userRoles.AnonymousGuestUser,
                l.Nb(t, 4),
              ),
              n(t, 6, 0, "ftwPersonalizedIcon"),
              n(
                t,
                7,
                0,
                e.getPersonalizeIcon(t.parent.context.mib3Let),
                e.iconCategory,
              ));
          },
          function (n, t) {
            (n(t, 0, 0, !t.component.displayService.isHighResolution),
              n(t, 5, 0, l.Nb(t, 7).iconComponentHidden));
          },
        );
      }
      function ct(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
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
            (n()(), l.hb(16777216, null, null, 1, null, st)),
            l.xb(
              2,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(0, null, null, 0)),
          ],
          function (n, t) {
            n(
              t,
              2,
              0,
              t.context.mib3Let && !t.component.openedInPsoAddAccountContext,
            );
          },
          null,
        );
      }
      function pt(n) {
        return l.ac(
          2,
          [
            l.Pb(0, Qn.a, []),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__title"],
                ["id", "ftwAccountOverviewTitle"],
              ],
              [
                [2, "ftw-main__title--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              2,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              3,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
            (n()(),
            l.yb(
              4,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "ftwAccountOverviewText"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              5,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              6,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 2, null, ct)),
            l.xb(
              8,
              16384,
              null,
              0,
              An.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
            (n()(),
            l.yb(
              10,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "decorator"],
                ["id", "ftwAccountOverviewDecorator"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              w.b,
              w.a,
            )),
            l.xb(
              11,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              12,
              4243456,
              null,
              0,
              S.b,
              [p.a, l.z],
              { fileName: [0, "fileName"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 2, 0, "ftwAccountOverviewTitle"),
              n(t, 3, 0, "Account", "ftwAccountOverviewTitle"),
              n(t, 5, 0, "ftwAccountOverviewText"),
              n(
                t,
                6,
                0,
                "F\xfcgen Sie einen Nutzer hinzu, um Ihre individuellen\nFahrzeug-, Komfort- und Infotainmenteinstellungen zu\nspeichern.\nWenn Sie im Moment keinen neuen Nutzer hinzuf\xfcgen\nm\xf6chten, \xfcberspringen Sie diesen Schritt.",
                "ftwAccountOverviewText",
                6,
              ),
              n(
                t,
                8,
                0,
                l.Yb(
                  t,
                  8,
                  0,
                  l.Nb(t, 9).transform(e.userManagementService.activeUser$),
                ),
              ),
              n(t, 11, 0, "ftwAccountOverviewDecorator"),
              n(
                t,
                12,
                0,
                "/decorators/W789_Einrichtungsassistent/High/High_W789_Einrichtungsassistent_Profil.webp",
              ));
          },
          function (n, t) {
            var e = t.component;
            (n(
              t,
              1,
              0,
              !e.displayService.isHighResolution,
              l.Nb(t, 3).backgroundColor,
              l.Nb(t, 3).fixedNumberOfLines,
              l.Nb(t, 3).mayContainLatinCharsForArabic,
              l.Nb(t, 3).shortenWithEllipsisForArabic,
            ),
              n(
                t,
                4,
                0,
                !e.displayService.isHighResolution,
                l.Nb(t, 6).backgroundColor,
                l.Nb(t, 6).fixedNumberOfLines,
                l.Nb(t, 6).mayContainLatinCharsForArabic,
                l.Nb(t, 6).shortenWithEllipsisForArabic,
              ),
              n(t, 10, 0, l.Nb(t, 12).iconComponentHidden));
          },
        );
      }
      class bt {
        constructor(n) {
          this.displayService = n;
        }
      }
      var dt = l.wb({
        encapsulation: 0,
        styles: [
          [
            '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ftw-main__text[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);margin-left:50px;margin-top:106px;width:1190px;font-size:30px}.ftw-main__text--med[_ngcontent-%COMP%]{margin-left:30px;width:969px}.component-layout-latin[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%]{direction:rtl}',
          ],
        ],
        data: {},
      });
      function mt(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "ftwAccountOverviewText"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "ftwAccountOverviewText"),
              n(
                t,
                2,
                0,
                "Wenn Sie den vollen Funktionsumfang benutzen m\xf6chten, f\xfcgen\nSie einen myAudi Nutzer hinzu.\nAlternativ dazu k\xf6nnen Sie einen lokalen Nutzer ohne myAudi\nanlegen. Ihre individuellen Einstellungen k\xf6nnen Sie dann nur in\ndiesem Fahrzeug nutzen. In diesem Fall stehen Ihnen keine\npersonalisierten online Funktionen zur Verf\xfcgung.\n",
                "ftwAccountOverviewText",
                6,
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      class ht {
        constructor(n, t) {
          ((this.displayService = n), (this.systemConfigService = t));
        }
      }
      var gt = l.wb({
        encapsulation: 0,
        styles: [
          [
            '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.ftw-main__title[_ngcontent-%COMP%]{text-align:center;text-wrap:normal;width:1208px;max-height:98px;margin:20px 38px 38px;font-size:40px}.ftw-main__title--med[_ngcontent-%COMP%]{margin:20px 17px 38px;width:985px}.ftw-main__text[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);margin-left:50px;width:800px;font-size:30px}.ftw-main__text--med[_ngcontent-%COMP%]{margin-left:30px;width:665px}.component-layout-latin[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:rtl}.decorator[_ngcontent-%COMP%]{position:absolute;height:392px;width:439px;bottom:0;right:0}',
          ],
        ],
        data: {},
      });
      function ft(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "ftwMyAudiNewTextCN"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "ftwMyAudiNewTextCN"),
              n(
                t,
                2,
                0,
                "You can use Audi Connect Car 2x with your smart phone\nPlease install the App and register on\nwww.my-audi.com.cn. For detailed information,\nplease contact your dealer.",
                "ftwMyAudiNewTextCN",
                7,
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function xt(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "ftwMyAudiNewTextEce"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "ftwMyAudiNewTextEce"),
              n(
                t,
                2,
                0,
                "Installieren Sie die myAudi App auf Ihrem Smartphone\nund registrieren Sie sich im Anschluss.\nDiese ist im App Store oder Google Play Store\nverf\xfcgbar. Folgen Sie dem gef\xfchrten Dialog in der App.\nWenn Sie die myAudi App bereits besitzen, \xf6ffnen Sie\ndiese bitte f\xfcr die n\xe4chsten Schritte. F\xfcgen Sie Ihr\nFahrzeug in der App manuell hinzu.",
                "ftwMyAudiNewTextEce",
                7,
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function _t(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__title"],
                ["id", "ftwMyAudiNewTitle"],
              ],
              [
                [2, "ftw-main__title--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, ft)),
            l.xb(
              4,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), l.hb(0, [["myAudiNewTextEce", 2]], null, 0, null, xt)),
            (n()(),
            l.yb(
              6,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "decorator"],
                ["id", "ftwFirstPageDecorator"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              w.b,
              w.a,
            )),
            l.xb(
              7,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              8,
              4243456,
              null,
              0,
              S.b,
              [p.a, l.z],
              { fileName: [0, "fileName"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "ftwMyAudiNewTitle"),
              n(t, 2, 0, "myAudi App", "ftwMyAudiNewTitle"),
              n(t, 4, 0, e.systemConfigService.isChinaRegion(), l.Nb(t, 5)),
              n(t, 7, 0, "ftwFirstPageDecorator"),
              n(
                t,
                8,
                0,
                "/decorators/W789_Einrichtungsassistent/High/High_W789_Einrichtungsassistent_AppStore.webp",
              ));
          },
          function (n, t) {
            (n(
              t,
              0,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            ),
              n(t, 6, 0, l.Nb(t, 8).iconComponentHidden));
          },
        );
      }
      var Pt = e("z+Ui");
      class Ct {
        constructor(n, t) {
          ((this.displayService = n), (this.wifiService = t));
        }
      }
      var yt = l.wb({
        encapsulation: 0,
        styles: [
          [
            '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.ftw-main__title[_ngcontent-%COMP%]{text-align:center;text-wrap:normal;width:1208px;max-height:98px;margin:20px 38px 38px;font-size:40px}.ftw-main__title--med[_ngcontent-%COMP%]{margin:20px 17px 38px;width:985px}.ftw-main__text[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);margin-left:50px;width:800px;font-size:30px}.ftw-main__text--med[_ngcontent-%COMP%]{margin-left:30px;width:665px}.ftw-main__wlan-text-container[_ngcontent-%COMP%]{margin-top:48px}.component-layout-latin[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:rtl}.decorator[_ngcontent-%COMP%]{position:absolute;height:392px;width:439px;bottom:0;right:0}',
          ],
        ],
        data: {},
      });
      function Ot(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              10,
              "div",
              [["class", "ftw-main__wlan-text-container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "ftwMainMyAudiAddCarWifiWlanName"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              2,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              3,
              16384,
              null,
              0,
              L.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            l.Qb(4, { ssid: 0 }),
            l.xb(
              5,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            l.yb(
              6,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "ftwMainMyAudiAddCarWifiPassword"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              7,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              8,
              16384,
              null,
              0,
              L.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            l.Qb(9, { password: 0 }),
            l.xb(
              10,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            n(t, 2, 0, "ftwMainMyAudiAddCarWifiWlanName");
            var e = n(
              t,
              4,
              0,
              (null == t.context.mib3Let ? null : t.context.mib3Let.name) || "",
            );
            (n(t, 3, 0, e),
              n(
                t,
                5,
                0,
                "WLAN Name: {{ssid}}",
                "ftwMainMyAudiAddCarWifiWlanName",
                6,
              ),
              n(t, 7, 0, "ftwMainMyAudiAddCarWifiPassword"));
            var l = n(
              t,
              9,
              0,
              (null == t.context.mib3Let ? null : t.context.mib3Let.password) ||
                "",
            );
            (n(t, 8, 0, l),
              n(
                t,
                10,
                0,
                "Passwort: {{password}}",
                "ftwMainMyAudiAddCarWifiPassword",
                1,
              ));
          },
          function (n, t) {
            var e = t.component;
            (n(
              t,
              1,
              0,
              !e.displayService.isHighResolution,
              l.Nb(t, 5).backgroundColor,
              l.Nb(t, 5).fixedNumberOfLines,
              l.Nb(t, 5).mayContainLatinCharsForArabic,
              l.Nb(t, 5).shortenWithEllipsisForArabic,
            ),
              n(
                t,
                6,
                0,
                !e.displayService.isHighResolution,
                l.Nb(t, 10).backgroundColor,
                l.Nb(t, 10).fixedNumberOfLines,
                l.Nb(t, 10).mayContainLatinCharsForArabic,
                l.Nb(t, 10).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function vt(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
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
            l.yb(
              1,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "ftwMainMyAudiAddCarWifiText"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              2,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              3,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 2, null, Ot)),
            l.xb(
              5,
              16384,
              null,
              0,
              An.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
            (n()(), l.hb(0, null, null, 0)),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 2, 0, "ftwMainMyAudiAddCarWifiText"),
              n(
                t,
                3,
                0,
                "Verbinden Sie ihr Smartphone mit dem WLAN-\nHotspot um ihr Fahrzeug automatisch Ihrem Account\nhinzuzuf\xfcgen und sich im Fahrzeug einzuloggen.",
                "ftwMainMyAudiAddCarWifiText",
                7,
              ),
              n(
                t,
                5,
                0,
                l.Yb(t, 5, 0, l.Nb(t, 6).transform(e.wifiService.mainAP$)),
              ));
          },
          function (n, t) {
            n(
              t,
              1,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 3).backgroundColor,
              l.Nb(t, 3).fixedNumberOfLines,
              l.Nb(t, 3).mayContainLatinCharsForArabic,
              l.Nb(t, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function wt(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "ftwMainMyAudiAddCarWifiOffText"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "ftwMainMyAudiAddCarWifiOffText"),
              n(
                t,
                2,
                0,
                "Der Wlan Hotspot ist derzeit deaktiviert. F\xfcr die\nEinrichtung ihrer myAudi Services wird dies ben\xf6tigt.\nSomit k\xf6nnen sie von allen myAudi Services\nprofitieren und diese vollumf\xe4nglich nutzen.",
                "ftwMainMyAudiAddCarWifiOffText",
                7,
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function St(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__title"],
                ["id", "ftwMainMyAudiAddCarWifiTitle"],
              ],
              [
                [2, "ftw-main__title--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 2, null, vt)),
            l.xb(
              4,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
            (n()(), l.hb(0, [["wifiOffTemplate", 2]], null, 0, null, wt)),
            (n()(),
            l.yb(
              7,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "decorator"],
                ["id", "ftwFirstPageDecorator"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              w.b,
              w.a,
            )),
            l.xb(
              8,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              9,
              4243456,
              null,
              0,
              S.b,
              [p.a, l.z],
              { fileName: [0, "fileName"] },
              null,
            ),
          ],
          function (n, t) {
            var e,
              i = t.component;
            (n(t, 1, 0, "ftwMainMyAudiAddCarWifiTitle"),
              n(
                t,
                2,
                0,
                "Verbinden zum Wifi Hotspot",
                "ftwMainMyAudiAddCarWifiTitle",
              ),
              n(
                t,
                4,
                0,
                null ==
                  (e = l.Yb(
                    t,
                    4,
                    0,
                    l.Nb(t, 5).transform(i.wifiService.wifiState$),
                  ))
                  ? null
                  : e.enabled,
                l.Nb(t, 6),
              ),
              n(t, 8, 0, "ftwFirstPageDecorator"),
              n(
                t,
                9,
                0,
                "/decorators/W789_Einrichtungsassistent/High/High_W789_Einrichtungsassistent_Fahrzeug_hinzuf\xfcgen.webp",
              ));
          },
          function (n, t) {
            (n(
              t,
              0,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            ),
              n(t, 7, 0, l.Nb(t, 9).iconComponentHidden));
          },
        );
      }
      class Nt {
        constructor(n, t, e) {
          ((this.displayService = n),
            (this.systemConfigService = t),
            (this.vehicleInfoService = e));
        }
      }
      var Mt = e("DlQy"),
        Tt = l.wb({
          encapsulation: 0,
          styles: [
            [
              '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.ftw-main__title[_ngcontent-%COMP%]{text-align:center;text-wrap:normal;width:1208px;max-height:98px;margin:20px 38px 38px;font-size:40px}.ftw-main__title--med[_ngcontent-%COMP%]{margin:20px 17px 38px;width:985px}.ftw-main__text[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);margin-left:50px;width:800px;font-size:30px}.ftw-main__text--med[_ngcontent-%COMP%]{margin-left:30px;width:665px}.ftw-main__vin-text[_ngcontent-%COMP%]{margin-top:48px}.component-layout-latin[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:rtl}.decorator[_ngcontent-%COMP%]{position:absolute;height:392px;width:439px;bottom:0;right:0}',
            ],
          ],
          data: {},
        });
      function At(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__title"],
                ["id", "ftwMainMyAudiCreateCarVinCNTitle"],
              ],
              [
                [2, "ftw-main__title--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "ftwMainMyAudiCreateCarVinCNTitle"),
              n(
                t,
                2,
                0,
                "Add car to your account",
                "ftwMainMyAudiCreateCarVinCNTitle",
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Lt(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__title"],
                ["id", "ftwMainMyAudiCreateCarVinTitle"],
              ],
              [
                [2, "ftw-main__title--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "ftwMainMyAudiCreateCarVinTitle"),
              n(
                t,
                2,
                0,
                "Fahrzeug zu myAudi hinzuf\xfcgen",
                "ftwMainMyAudiCreateCarVinTitle",
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Et(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "ftwMainMyAudiCreateCarVinCNText"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "ftwMainMyAudiCreateCarVinCNText"),
              n(
                t,
                2,
                0,
                "Please add your car in myAudi App or on\nwww.my-audi.com.cn by inputting the VIN number.\nPlease find the VIN number in the car document\nor contact your dealer.",
                "ftwMainMyAudiCreateCarVinCNText",
                6,
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function kt(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "ftwMainMyAudiCreateCarVinText"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "ftwMainMyAudiCreateCarVinText"),
              n(
                t,
                2,
                0,
                "Bitte geben Sie in der myAudi App Ihre\nFahrzeugidentifikationsnummer (VIN) ein, um Ihr\nFahrzeug Ihrem Account hinzuzuf\xfcgen.",
                "ftwMainMyAudiCreateCarVinText",
                3,
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function It(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "ftwMainMyAudiCreateCarOVinText"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "ftwMainMyAudiCreateCarOVinText"),
              n(
                t,
                2,
                0,
                "Bitte geben Sie in der myAudi App Ihre\nFahrzeugidentifikationsnummer (VIN) ein, um Ihr\nFahrzeug Ihrem Account hinzuzuf\xfcgen.\nSie finden diese im Fahrzeugbrief.",
                "ftwMainMyAudiCreateCarOVinText",
                7,
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Dt(n) {
        return l.ac(
          0,
          [
            (n()(), l.hb(16777216, null, null, 1, null, kt)),
            l.xb(
              1,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), l.hb(0, [["noVinTemplate", 2]], null, 0, null, It)),
          ],
          function (n, t) {
            n(
              t,
              1,
              0,
              !(
                null == t.parent.context.mib3Let ||
                !t.parent.context.mib3Let.text
              ),
              l.Nb(t, 2),
            );
          },
          null,
        );
      }
      function Ft(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text ftw-main__vin-text"],
                ["id", "ftwMainMyAudiCreateCarVin"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              16384,
              null,
              0,
              L.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            l.Qb(3, { vin: 0 }),
            l.xb(
              4,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            n(t, 1, 0, "ftwMainMyAudiCreateCarVin");
            var e = n(
              t,
              3,
              0,
              null == t.parent.context.mib3Let
                ? null
                : t.parent.context.mib3Let.text,
            );
            (n(t, 2, 0, e),
              n(
                t,
                4,
                0,
                "Fahrzeugidentifikationsnummer (17-stellig)\n{{vin}}",
                "ftwMainMyAudiCreateCarVin",
                2,
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 4).backgroundColor,
              l.Nb(t, 4).fixedNumberOfLines,
              l.Nb(t, 4).mayContainLatinCharsForArabic,
              l.Nb(t, 4).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function zt(n) {
        return l.ac(
          0,
          [
            (n()(),
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
            (n()(), l.hb(16777216, null, null, 1, null, Et)),
            l.xb(
              2,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), l.hb(0, [["myAudiECEText", 2]], null, 0, null, Dt)),
            (n()(), l.hb(16777216, null, null, 1, null, Ft)),
            l.xb(
              5,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(0, null, null, 0)),
          ],
          function (n, t) {
            (n(
              t,
              2,
              0,
              t.component.systemConfigService.isChinaRegion(),
              l.Nb(t, 3),
            ),
              n(
                t,
                5,
                0,
                !(null == t.context.mib3Let || !t.context.mib3Let.text),
              ));
          },
          null,
        );
      }
      function Rt(n) {
        return l.ac(
          2,
          [
            (n()(), l.hb(16777216, null, null, 1, null, At)),
            l.xb(
              1,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), l.hb(0, [["myAudiECETitle", 2]], null, 0, null, Lt)),
            (n()(), l.hb(16777216, null, null, 2, null, zt)),
            l.xb(
              4,
              16384,
              null,
              0,
              An.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
            (n()(),
            l.yb(
              6,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "decorator"],
                ["id", "ftwFirstPageDecorator"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              w.b,
              w.a,
            )),
            l.xb(
              7,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              8,
              4243456,
              null,
              0,
              S.b,
              [p.a, l.z],
              { fileName: [0, "fileName"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, e.systemConfigService.isChinaRegion(), l.Nb(t, 2)),
              n(
                t,
                4,
                0,
                l.Yb(
                  t,
                  4,
                  0,
                  l
                    .Nb(t, 5)
                    .transform(
                      e.vehicleInfoService.vehicleIdentificationNumber$,
                    ),
                ),
              ),
              n(t, 7, 0, "ftwFirstPageDecorator"),
              n(
                t,
                8,
                0,
                "/decorators/W789_Einrichtungsassistent/High/High_W789_Einrichtungsassistent_VIN.webp",
              ));
          },
          function (n, t) {
            n(t, 6, 0, l.Nb(t, 8).iconComponentHidden);
          },
        );
      }
      class Bt {
        constructor(n, t) {
          ((this.displayService = n), (this.systemConfigService = t));
        }
      }
      var Ht = l.wb({
        encapsulation: 0,
        styles: [
          [
            '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.ftw-main__title[_ngcontent-%COMP%]{text-align:center;text-wrap:normal;width:1208px;max-height:98px;margin:20px 38px 38px;font-size:40px}.ftw-main__title--med[_ngcontent-%COMP%]{margin:20px 17px 38px;width:985px}.ftw-main__text[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);margin-left:50px;width:800px;font-size:30px}.ftw-main__text--med[_ngcontent-%COMP%]{margin-left:30px;width:665px}.component-layout-latin[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:rtl}.decorator[_ngcontent-%COMP%]{position:absolute;height:392px;width:439px;bottom:0;right:0}',
          ],
        ],
        data: {},
      });
      function Ut(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "ftwMainUserNominationInstructionTextCN"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "ftwMainUserNominationInstructionTextCN"),
              n(
                t,
                2,
                0,
                "After you finish the Main users contract by dealer,\nyou can now nominate as the main user. You can\nfind the FPIN on your key chain.",
                "ftwMainUserNominationInstructionTextCN",
                7,
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Vt(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "ftwMainUserNominationInstructionTextEce"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "ftwMainUserNominationInstructionTextEce"),
              n(
                t,
                2,
                0,
                "Nachdem Sie den Hauptnutzervertrag abgeschlossen\nhaben, k\xf6nnen Sie den Hauptnutzer im Fahrzeug\nfestlegen. Hierf\xfcr ben\xf6tigen Sie den 10-stelligen\nFahrzeug Code, den Sie unter der blickdichten\nSicherheitsfolie am Schl\xfcsselanh\xe4nger an Ihrem\nFahrzeugschl\xfcssel finden. Rubbeln Sie den Code\nmit einem festen Gegenstand frei.",
                "ftwMainUserNominationInstructionTextEce",
                7,
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function $t(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__title"],
                ["id", "ftwMainUserNominationInstructionTitle"],
              ],
              [
                [2, "ftw-main__title--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Ut)),
            l.xb(
              4,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(),
            l.hb(
              0,
              [["mainUserNominationInstructionTextEce", 2]],
              null,
              0,
              null,
              Vt,
            )),
            (n()(),
            l.yb(
              6,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "decorator"],
                ["id", "ftwFirstPageDecorator"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              w.b,
              w.a,
            )),
            l.xb(
              7,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              8,
              4243456,
              null,
              0,
              S.b,
              [p.a, l.z],
              { fileName: [0, "fileName"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "ftwMainUserNominationInstructionTitle"),
              n(
                t,
                2,
                0,
                "Hauptnutzernominierung",
                "ftwMainUserNominationInstructionTitle",
              ),
              n(t, 4, 0, e.systemConfigService.isChinaRegion(), l.Nb(t, 5)),
              n(t, 7, 0, "ftwFirstPageDecorator"),
              n(
                t,
                8,
                0,
                "/decorators/W789_Einrichtungsassistent/High/High_W789_Einrichtungsassistent_F_PIN.webp",
              ));
          },
          function (n, t) {
            (n(
              t,
              0,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            ),
              n(t, 6, 0, l.Nb(t, 8).iconComponentHidden));
          },
        );
      }
      var Wt = e("Nd8J"),
        Yt = e("rZwJ"),
        Gt = e("XgBi"),
        jt = e("sJfC"),
        Kt = e("HM3f"),
        Zt = e("AL/M"),
        Jt = e("dr0G");
      class Xt {
        constructor(n, t, e) {
          ((this.displayService = n),
            (this.privacyService = t),
            (this.speechSettingsService = e),
            (this.popupIds = rn.Ob),
            (this.uiStateType = rn.uc.ListHorizontal),
            (this.flingDirection = rn.K.Horizontal));
        }
        ngOnInit() {
          ((this.eulaAccepted$ = this.speechSettingsService.setting$(
            sn.e.EULA,
          )),
            (this.eulaAcceptedDisabled$ = Object(Kt.b)(
              this.privacyService.privacyModeEnabled$,
              this.speechSettingsService.eulaDisabled$,
            ).pipe(Object(tt.a)((n) => n.some((n) => n)))),
            (this.eulaAcceptedDisabledReason$ = Object(Kt.b)(
              this.privacyService.privacyModeEnabled$,
              this.speechSettingsService.getEulaDisabledReason$(),
            ).pipe(
              Object(tt.a)(([n, t]) =>
                n
                  ? {
                      type: rn.A.SHOW_POPUP,
                      popup:
                        rn.Ob.POPUP_SETUP_DATA_MGT_PRIVACY_STAGED_FTW_POPUP,
                    }
                  : t,
              ),
            )));
        }
        itemTapped(n) {
          this.switchButton.nativeElement.contains(n.target) ||
            this.switchButtonComponent.onTap();
        }
        onFling(n) {
          n.direction === rn.P.LEFT
            ? this.switchButtonComponent.onFling(!1)
            : n.direction === rn.P.RIGHT &&
              this.switchButtonComponent.onFling(!0);
        }
      }
      var qt = l.wb({
        encapsulation: 0,
        styles: [
          [
            '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}.ftw-main__title[_ngcontent-%COMP%]{text-align:center;text-wrap:normal;width:1208px;max-height:98px;margin:20px 38px 38px;font-size:40px}.ftw-main__title--med[_ngcontent-%COMP%]{margin:20px 17px 38px;width:985px}.ftw-main__text[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);margin-left:50px;width:1190px;height:98px;text-align:center;font-size:40px}.ftw-main__text--med[_ngcontent-%COMP%]{margin-left:30px;width:969px}.ftw-main__sub-text-container[_ngcontent-%COMP%]{display:flex;position:relative;margin:50px 38px;align-items:center}.ftw-main__sub-text-container.state-disabled[_ngcontent-%COMP%]{filter:grayscale(100%) brightness(.4)}.ftw-main__sub-text-container--med[_ngcontent-%COMP%]{margin:50px 38px}.ftw-main__sub-text[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);width:1090px;font-size:40px;height:118px}.ftw-main__sub-text--med[_ngcontent-%COMP%]{width:869px}.component-layout-latin[_nghost-%COMP%]   .ftw-main__sub-text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__sub-text[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__sub-text--med[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__sub-text--med[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__sub-text-container[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__sub-text-container[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%]   .ftw-main__sub-text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__sub-text[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__sub-text--med[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__sub-text--med[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__sub-text-container[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__sub-text-container[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:rtl}',
          ],
        ],
        data: {},
      });
      function Qt(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              18,
              "div",
              [
                ["class", "ftw-main__sub-text-container"],
                ["id", "FtwEulaShortSubtextContainer"],
              ],
              [
                [2, "ftw-main__sub-text-container--med", null],
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
              [
                [null, "mib3TapPointer"],
                [null, "mib3Fling"],
              ],
              function (n, t, e) {
                var l = !0,
                  i = n.component;
                return (
                  "mib3TapPointer" === t && (l = !1 !== i.itemTapped(e) && l),
                  "mib3Fling" === t && (l = !1 !== i.onFling(e) && l),
                  l
                );
              },
              null,
              null,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              4,
              147456,
              null,
              0,
              E.a,
              [k.a, l.h, p.a, [3, E.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tapPointer: "mib3TapPointer" },
            ),
            l.xb(
              6,
              212992,
              null,
              0,
              Wt.b,
              [l.l, l.z, B.b, V.a, p.a, F.a, [2, E.a], [2, Yt.a], [2, s.a]],
              { mib3DragAndFlingDirection: [0, "mib3DragAndFlingDirection"] },
              { mib3Fling: "mib3Fling" },
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              8,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              9,
              212992,
              null,
              0,
              q.a,
              [[2, R.a], [8, null], [3, q.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              11,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
            (n()(),
            l.yb(
              12,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__sub-text"],
                ["id", "FtwEulaShortText"],
              ],
              [
                [2, "ftw-main__sub-text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              13,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              14,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            l.yb(
              15,
              0,
              [[1, 0]],
              null,
              3,
              "au3-switch-button",
              [["id", "FtwEulaShortSwitchButton"]],
              [[2, "checked", null]],
              [[null, "checkedChange"]],
              function (n, t, e) {
                var l = !0;
                return (
                  "checkedChange" === t &&
                    (l =
                      !1 !==
                        n.component.speechSettingsService.updateEulaSetting(
                          e,
                        ) && l),
                  l
                );
              },
              Gt.b,
              Gt.a,
            )),
            l.xb(
              16,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              17,
              4374528,
              [
                [2, 4],
                ["switchButton", 4],
              ],
              0,
              jt.a,
              [l.h, [2, E.a]],
              { checked: [0, "checked"] },
              { checkedChange: "checkedChange" },
            ),
            l.Pb(131072, yn.b, [l.h]),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "FtwEulaShortSubtextContainer"),
              n(
                t,
                4,
                0,
                t.context.mib3Let.disabled,
                t.context.mib3Let.disabledReason,
              ),
              n(t, 5, 0),
              n(t, 6, 0, e.flingDirection),
              n(t, 8, 0),
              n(t, 9, 0, e.uiStateType),
              n(t, 13, 0, "FtwEulaShortText"),
              n(
                t,
                14,
                0,
                "Ich akzeptiere die Bedingungen und stimme dem\nUmgang mit meinen Daten (siehe EULA) zu.",
                "FtwEulaShortText",
                2,
              ),
              n(t, 16, 0, "FtwEulaShortSwitchButton"),
              n(
                t,
                17,
                0,
                l.Yb(t, 17, 0, l.Nb(t, 18).transform(e.eulaAccepted$)),
              ));
          },
          function (n, t) {
            var e = t.component;
            (n(t, 0, 1, [
              !e.displayService.isHighResolution,
              l.Nb(t, 4).combinedDisabled,
              l.Nb(t, 4).useBrighterIcon,
              l.Nb(t, 8).markerClassEnabled,
              l.Nb(t, 9).uiStateListHorizontal,
              l.Nb(t, 9).uiStateListVertical,
              l.Nb(t, 9).uiStateCoverLeft,
              l.Nb(t, 9).uiStateCoverRight,
              l.Nb(t, 9).uiStateCoverBottom,
              l.Nb(t, 9).uiStateButton,
              l.Nb(t, 9).uiStateByDabLeft,
              l.Nb(t, 9).uiStateByDabRight,
              l.Nb(t, 9).uiStateLbDabLeft,
              l.Nb(t, 9).uiStateLbDabRight,
            ]),
              n(
                t,
                12,
                0,
                !e.displayService.isHighResolution,
                l.Nb(t, 14).backgroundColor,
                l.Nb(t, 14).fixedNumberOfLines,
                l.Nb(t, 14).mayContainLatinCharsForArabic,
                l.Nb(t, 14).shortenWithEllipsisForArabic,
              ),
              n(t, 15, 0, l.Nb(t, 17).checkedInternal));
          },
        );
      }
      function ne(n) {
        return l.ac(
          2,
          [
            l.Tb(671088640, 1, { switchButton: 0 }),
            l.Tb(671088640, 2, { switchButtonComponent: 0 }),
            (n()(),
            l.yb(
              2,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__title"],
                ["id", "FtwEulaShortTitle"],
              ],
              [
                [2, "ftw-main__title--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              4,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
            (n()(),
            l.yb(
              5,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "FtwEulaShortDescriptionText"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              6,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              7,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 4, null, Qt)),
            l.xb(
              9,
              16384,
              null,
              0,
              An.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
            l.Pb(131072, yn.b, [l.h]),
            l.Qb(12, { disabled: 0, disabledReason: 1 }),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, "FtwEulaShortTitle"),
              n(t, 4, 0, "EULA", "FtwEulaShortTitle"),
              n(t, 6, 0, "FtwEulaShortDescriptionText"),
              n(
                t,
                7,
                0,
                "Einwilligungserkl\xe4rung zum Online-Erkenner f\xfcr\nSprachdialogsysteme.",
                "FtwEulaShortDescriptionText",
              ));
            var i = n(
              t,
              12,
              0,
              l.Yb(t, 9, 0, l.Nb(t, 10).transform(e.eulaAcceptedDisabled$)),
              l.Yb(
                t,
                9,
                0,
                l.Nb(t, 11).transform(e.eulaAcceptedDisabledReason$),
              ),
            );
            n(t, 9, 0, i);
          },
          function (n, t) {
            var e = t.component;
            (n(
              t,
              2,
              0,
              !e.displayService.isHighResolution,
              l.Nb(t, 4).backgroundColor,
              l.Nb(t, 4).fixedNumberOfLines,
              l.Nb(t, 4).mayContainLatinCharsForArabic,
              l.Nb(t, 4).shortenWithEllipsisForArabic,
            ),
              n(
                t,
                5,
                0,
                !e.displayService.isHighResolution,
                l.Nb(t, 7).backgroundColor,
                l.Nb(t, 7).fixedNumberOfLines,
                l.Nb(t, 7).mayContainLatinCharsForArabic,
                l.Nb(t, 7).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      class te {
        constructor(n) {
          ((this.displayService = n),
            (this.eulaText =
              "Ich bin damit einverstanden, dass bei der Verwendung des Dienstes\n\u201eOnline Hybrid Speech Recognition\u201c meine Sprachdaten (und darin\nenthaltene personenbezogene Daten) inklusive der aktuellen\nGeopositionsdaten des Fahrzeugs \xfcber die AUDI AG an deren\nServiceprovider Nuance Communications Ireland Limited zu Zwecken\nder Umwandlung in Text weitergeleitet werden. Dieser Text wird \xfcber\ndie AUDI AG an das Fahrzeug zur\xfcck \xfcbermittelt.\n\nWeiterhin bin ich mit einer Weiterleitung, Verarbeitung und\nSpeicherung meiner Sprachdaten durch Nuance zum Zwecke der\nUmwandlung in Text innerhalb des Gebiets der EU und nach/bzw. in\nden USA einverstanden und willige ein, dass diese Sprachdaten und\nzugeh\xf6rigen Texte zum Zwecke einer permanenten Optimierung und\nWeiterentwicklung der Spracherkennung verwendet und dauerhaft von\nNuance gespeichert werden. Im Falle der Verweigerung der\nZustimmung kann der Dienst \u201eOnline Hybrid Speech Recognition\u201c nicht\ngenutzt werden. Ich stelle sicher, dass auch weitere Nutzer des\nDienstes in diesem Fahrzeug mit den obigen Bedingungen\neinverstanden sind.\n\nIch m\xf6chte zur Verbesserung der Sprachbedienung beitragen und bin\ndamit einverstanden, dass die AUDI AG Sprach- und Textdaten meiner\nAnfragen anonymisiert speichert und auswertet.\n\nIch kann diese Einwilligungen mit Wirkung f\xfcr die Zukunft jederzeit\nbei der AUDI AG und in den Einstellungen des Sprachdialogsystems\nwiderrufen."));
        }
      }
      var ee = l.wb({
        encapsulation: 0,
        styles: [
          [
            '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{max-width:100%}.ftw-main__title[_ngcontent-%COMP%]{text-align:center;text-wrap:normal;width:1208px;max-height:98px;margin:20px 38px 38px;font-size:40px}.ftw-main__title--med[_ngcontent-%COMP%]{margin:20px 17px 38px;width:985px}.ftw-main__eula-list[_ngcontent-%COMP%]{margin-left:50px;margin-right:50px;height:262px}.ftw-main__eula-list--med[_ngcontent-%COMP%]{margin-left:30px;margin-right:30px}.ftw-main__eula-text[_ngcontent-%COMP%]{font-size:30px;max-width:100%}.component-layout-latin[_nghost-%COMP%]   .ftw-main__eula-text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__eula-text[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%]   .ftw-main__eula-text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__eula-text[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:rtl}',
          ],
        ],
        data: {},
      });
      function le(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__title"],
                ["id", "FtwEulaLongTitle"],
              ],
              [
                [2, "ftw-main__title--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
            (n()(),
            l.yb(
              3,
              0,
              null,
              null,
              8,
              "au3-list",
              [
                ["class", "ftw-main__eula-list"],
                ["id", "FtwEulaLongList"],
              ],
              [
                [2, "ftw-main__eula-list--med", null],
                [2, "list--with-line-numbers", null],
              ],
              null,
              null,
              Fn.b,
              Fn.a,
            )),
            l.Sb(6144, null, o.a, null, [zn.a]),
            l.xb(
              5,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(6, 16384, null, 0, b.a, [l.l], null, null),
            l.xb(
              7,
              12828672,
              null,
              1,
              zn.a,
              [
                [2, Rn.a],
                [2, Bn.a],
                [8, null],
                [2, s.a],
                [2, Hn.a],
                [2, Un.a],
                [2, B.b],
                G.i,
                l.z,
                l.h,
                p.a,
                Vn.a,
                $n.a,
                [2, J.a],
                v.a,
                [2, G.a],
              ],
              { showSeparators: [0, "showSeparators"] },
              null,
            ),
            l.Tb(603979776, 1, { template: 0 }),
            (n()(),
            l.yb(
              9,
              0,
              null,
              0,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__eula-text"],
                ["id", "FtwEulaLongText"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              10,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              11,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "FtwEulaLongTitle"),
              n(t, 2, 0, "EULA", "FtwEulaLongTitle"),
              n(t, 5, 0, "FtwEulaLongList"),
              n(t, 7, 0, !1),
              n(t, 10, 0, "FtwEulaLongText"),
              n(t, 11, 0, e.eulaText, "FtwEulaLongText", 99));
          },
          function (n, t) {
            var e = t.component;
            (n(
              t,
              0,
              0,
              !e.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            ),
              n(
                t,
                3,
                0,
                !e.displayService.isHighResolution,
                l.Nb(t, 7).showLineNumbers,
              ),
              n(
                t,
                9,
                0,
                l.Nb(t, 11).backgroundColor,
                l.Nb(t, 11).fixedNumberOfLines,
                l.Nb(t, 11).mayContainLatinCharsForArabic,
                l.Nb(t, 11).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      var ie = e("QSdq"),
        ae = e("D0GA");
      class oe {
        constructor(n, t, e, l) {
          ((this.systemConfigService = n),
            (this.displayService = t),
            (this.privacyService = e),
            (this.speechSettingsService = l),
            (this.popupIds = rn.Ob));
        }
        ngOnInit() {
          ((this.keywordActivation$ = this.speechSettingsService.setting$(
            sn.e.KEYWORDACTIVATION,
          )),
            (this.keywordActivationDisabled$ =
              this.speechSettingsService.keywordActivationDisabled$),
            (this.keywordActivationDisabledReason$ =
              this.speechSettingsService.getKeywordActivationDisabledReason$()));
        }
        updateKeywordActivationSetting(n) {
          this.speechSettingsService.setSettingValue(
            sn.e.KEYWORDACTIVATION,
            n ? sn.l.ON : sn.l.OFF,
          );
        }
      }
      var ue = l.wb({
        encapsulation: 0,
        styles: [
          [
            '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{width:100%}.ftw-main__title[_ngcontent-%COMP%]{text-align:center;text-wrap:normal;width:1208px;max-height:98px;margin:20px 38px 38px;font-size:40px}.ftw-main__title--med[_ngcontent-%COMP%]{margin:20px 17px 38px;width:985px}.ftw-main__text[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);margin-left:50px;margin-right:50px;display:block;font-size:30px}.ftw-main__text--med[_ngcontent-%COMP%]{margin-left:30px;margin-right:30px}.ftw-main__switch-text[_ngcontent-%COMP%]{margin-top:48px}.ftw-main__switch[_ngcontent-%COMP%]{height:100px;font-size:40px}.ftw-main__margin[_ngcontent-%COMP%]{margin-left:50px;margin-right:50px}.ftw-main__margin--med[_ngcontent-%COMP%]{margin-left:30px;margin-right:30px}.component-layout-latin[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:rtl}.decorator[_ngcontent-%COMP%]{position:absolute;height:392px;width:439px;bottom:0;right:0}',
          ],
        ],
        data: {},
      });
      function re(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "ftwMainKeywordActivationText"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "ftwMainKeywordActivationText"),
              n(
                t,
                2,
                0,
                'Wenn Keywords aktiviert sind, kann das Sprachdialog System aktiviert\nwerden, ohne die Lenkradtaste zu bedienen. Zu den Keywords geh\xf6ren\n"Hey Audi", Amazon Alexa und Siri',
                "ftwMainKeywordActivationText",
                4,
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function se(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "ftwMainKeywordActivationTextBasic"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "ftwMainKeywordActivationTextBasic"),
              n(
                t,
                2,
                0,
                'Wenn Keywords aktiviert sind, kann das Sprachdialog System aktiviert\nwerden, ohne die Lenkradtaste zu bedienen. Zu den Keywords geh\xf6ren\n"Hey Audi"',
                "ftwMainKeywordActivationTextBasic",
                4,
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function ce(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__title"],
                ["id", "ftwMainKeyWordActivationTitle"],
              ],
              [
                [2, "ftw-main__title--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, re)),
            l.xb(
              4,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(),
            l.hb(
              0,
              [["basicSystemsDisclaimerTemplate", 2]],
              null,
              0,
              null,
              se,
            )),
            (n()(),
            l.yb(
              6,
              0,
              null,
              null,
              6,
              "au3-list-switch-item",
              [
                ["class", "ftw-main__switch ftw-main__margin"],
                ["id", "SdsKeywordActivation"],
              ],
              [
                [2, "ftw-main__margin--med", null],
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "valueChange"]],
              function (n, t, e) {
                var l = !0;
                return (
                  "valueChange" === t &&
                    (l =
                      !1 !== n.component.updateKeywordActivationSetting(e) &&
                      l),
                  l
                );
              },
              ie.b,
              ie.a,
            )),
            l.xb(
              7,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              8,
              147456,
              null,
              0,
              E.a,
              [k.a, l.h, p.a, [3, E.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
            l.Pb(131072, yn.b, [l.h]),
            l.xb(
              11,
              49152,
              null,
              0,
              ae.a,
              [[2, E.a]],
              {
                textId: [0, "textId"],
                developerText: [1, "developerText"],
                value: [2, "value"],
              },
              { valueChange: "valueChange" },
            ),
            l.Pb(131072, yn.b, [l.h]),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "ftwMainKeyWordActivationTitle"),
              n(t, 2, 0, "Keyword Activation", "ftwMainKeyWordActivationTitle"),
              n(t, 4, 0, !e.systemConfigService.isBaseVariant(), l.Nb(t, 5)),
              n(t, 7, 0, "SdsKeywordActivation"),
              n(
                t,
                8,
                0,
                l.Yb(
                  t,
                  8,
                  0,
                  l.Nb(t, 9).transform(e.keywordActivationDisabled$),
                ),
                l.Yb(
                  t,
                  8,
                  1,
                  l.Nb(t, 10).transform(e.keywordActivationDisabledReason$),
                ),
              ),
              n(
                t,
                11,
                0,
                "SdsKeywordActivation",
                '"Hey Audi" aktivieren',
                l.Yb(t, 11, 2, l.Nb(t, 12).transform(e.keywordActivation$)),
              ));
          },
          function (n, t) {
            var e = t.component;
            (n(
              t,
              0,
              0,
              !e.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            ),
              n(
                t,
                6,
                0,
                !e.displayService.isHighResolution,
                l.Nb(t, 8).combinedDisabled,
                l.Nb(t, 8).useBrighterIcon,
              ));
          },
        );
      }
      class pe {
        constructor(n) {
          this.displayService = n;
        }
      }
      var be = l.wb({
        encapsulation: 0,
        styles: [
          [
            '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{width:100%}.ftw-main__title[_ngcontent-%COMP%]{text-align:center;text-wrap:normal;width:1208px;max-height:98px;margin:20px 38px 38px;font-size:40px}.ftw-main__title--med[_ngcontent-%COMP%]{margin:20px 17px 38px;width:985px}.ftw-main__text[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);margin-left:50px;margin-right:50px;display:block;font-size:30px}.ftw-main__text--med[_ngcontent-%COMP%]{margin-left:30px;margin-right:30px}.component-layout-latin[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:rtl}.decorator[_ngcontent-%COMP%]{position:absolute;height:392px;width:439px;bottom:0;right:0}',
          ],
        ],
        data: {},
      });
      function de(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__title"],
                ["id", "ftwMainAlexaAccountLinkingTitle"],
              ],
              [
                [2, "ftw-main__title--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
            (n()(),
            l.yb(
              3,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "ftwMainAlexaAccountLinkingText"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              4,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              5,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "ftwMainAlexaAccountLinkingTitle"),
              n(t, 2, 0, "Amazon Alexa", "ftwMainAlexaAccountLinkingTitle"),
              n(t, 4, 0, "ftwMainAlexaAccountLinkingText"),
              n(
                t,
                5,
                0,
                "Sie k\xf6nnen mit Ihrem myAudi Nutzer die Amazon Alexa Sprachbedienung\nin Ihrem Fahrzeug verwenden.\nM\xf6chten Sie Ihren myAudi Nutzer mit Amazon Alexa verkn\xfcpfen?\n",
                "ftwMainAlexaAccountLinkingText",
                4,
              ));
          },
          function (n, t) {
            var e = t.component;
            (n(
              t,
              0,
              0,
              !e.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            ),
              n(
                t,
                3,
                0,
                !e.displayService.isHighResolution,
                l.Nb(t, 5).backgroundColor,
                l.Nb(t, 5).fixedNumberOfLines,
                l.Nb(t, 5).mayContainLatinCharsForArabic,
                l.Nb(t, 5).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      var me = (function (n) {
        return (
          (n[(n.Standard = 0)] = "Standard"),
          (n[(n.HighNAR = 1)] = "HighNAR"),
          (n[(n.HighEU = 2)] = "HighEU"),
          (n[(n.China = 3)] = "China"),
          n
        );
      })({});
      class he {
        constructor(n, t) {
          ((this.systemConfigService = n),
            (this.displayService = t),
            (this.phoneOverviewVariants = me),
            (this.currentPhoneOverviewVariant = me.Standard));
        }
        ngOnInit() {
          this.setPhoneOverviewVariant();
        }
        setPhoneOverviewVariant() {
          this.currentPhoneOverviewVariant =
            this.systemConfigService.isHighVariant() &&
            this.systemConfigService.isNorthAmericaRegion()
              ? me.HighNAR
              : this.systemConfigService.isHighVariant() &&
                  this.systemConfigService.isEURegion()
                ? me.HighEU
                : this.systemConfigService.isChinaRegion()
                  ? me.China
                  : me.Standard;
        }
      }
      var ge = l.wb({
        encapsulation: 0,
        styles: [
          [
            '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.ftw-main__title[_ngcontent-%COMP%]{text-align:center;text-wrap:normal;width:1208px;max-height:98px;margin:20px 38px 38px;font-size:40px}.ftw-main__title--med[_ngcontent-%COMP%]{margin:20px 17px 38px;width:985px}.ftw-main__text[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);margin-left:50px;height:250px;width:850px;font-size:30px}.ftw-main__text--med[_ngcontent-%COMP%]{margin-left:30px;width:665px}.component-layout-latin[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:rtl}.decorator[_ngcontent-%COMP%]{position:absolute;height:392px;width:439px;bottom:0;right:0}',
          ],
        ],
        data: {},
      });
      function fe(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "ftwPhoneOverviewTextStandard"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "ftwPhoneOverviewTextStandard"),
              n(
                t,
                2,
                0,
                "Sie k\xf6nnen Ihr Telefon mit dem MMI verbinden.\nAbh\xe4ngig von Ihrem Endger\xe4t haben Sie zus\xe4tzlich\nzum Telefonieren Zugriff auf die SMS-Funktion\nIhres Endger\xe4tes am MMI.\n",
                "ftwPhoneOverviewTextStandard",
                7,
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function xe(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "ftwPhoneOverviewTextHighNAR"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "ftwPhoneOverviewTextHighNAR"),
              n(
                t,
                2,
                0,
                "Sie k\xf6nnen bis zu zwei Telefone mit dem MMI verbinden.\nAbh\xe4ngig von Ihrem Endger\xe4t haben Sie zus\xe4tzlich\nzum Telefonieren Zugriff auf die SMS- und E-Mail\nFunktion Ihres Endger\xe4tes am MMI.\nAu\xdferdem k\xf6nnen Sie die Fahrzeug-Fernbedienung f\xfcr\nIhr Telefon einrichten.",
                "ftwPhoneOverviewTextHighNAR",
                7,
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function _e(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "ftwPhoneOverviewTextHighEU"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "ftwPhoneOverviewTextHighEU"),
              n(
                t,
                2,
                0,
                "Sie k\xf6nnen bis zu zwei Endger\xe4te mit dem MMI verbinden.\nDazu steht Ihnen eine Bluetooth-Verbindung zur\nVerf\xfcgung. Abh\xe4ngig von Ihrem Endger\xe4t haben Sie\nzus\xe4tzlich zum Telefonieren Zugriff auf die SMS- und\nE-Mail Funktion Ihres Endger\xe4tes am MMI. Au\xdferdem\nk\xf6nnen Sie die Fahrzeug-Fernbedienung f\xfcr Ihr\nTelefon einrichten.",
                "ftwPhoneOverviewTextHighEU",
                7,
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Pe(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "ftwPhoneOverviewTextChina"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "ftwPhoneOverviewTextChina"),
              n(
                t,
                2,
                0,
                "Sie k\xf6nnen bis zu zwei Endger\xe4te mit dem MMI verbinden.\nDazu steht Ihnen eine Bluetooth-Verbindung sowie ein\nSIM-Karten-Slot zur Verf\xfcgung. Sie finden den\nSIM-Kartenslot in der Mittelkonsole unter der Armlehne.\nAbh\xe4ngig von Ihrem Endger\xe4t haben Sie zus\xe4tzlich zum\nTelefonieren Zugriff auf die SMS-Funktion Ihres\nEndger\xe4tes am MMI. Au\xdferdem k\xf6nnen Sie die\nFahrzeug-Fernbedienung f\xfcr Ihr Telefon einrichten.",
                "ftwPhoneOverviewTextChina",
                8,
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Ce(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              15,
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
              yn.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (n()(),
            l.yb(
              2,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__title"],
                ["id", "ftwPhoneOverviewTitle"],
              ],
              [
                [2, "ftw-main__title--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              4,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, fe)),
            l.xb(
              6,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, xe)),
            l.xb(
              8,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, _e)),
            l.xb(
              10,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Pe)),
            l.xb(
              12,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(),
            l.yb(
              13,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "decorator"],
                ["id", "ftwPhoneOverviewDecorator"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              w.b,
              w.a,
            )),
            l.xb(
              14,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              15,
              4243456,
              null,
              0,
              S.b,
              [p.a, l.z],
              { fileName: [0, "fileName"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, e.currentPhoneOverviewVariant),
              n(t, 3, 0, "ftwPhoneOverviewTitle"),
              n(t, 4, 0, "Telefon", "ftwPhoneOverviewTitle"),
              n(t, 6, 0, e.phoneOverviewVariants.Standard),
              n(t, 8, 0, e.phoneOverviewVariants.HighNAR),
              n(t, 10, 0, e.phoneOverviewVariants.HighEU),
              n(t, 12, 0, e.phoneOverviewVariants.China),
              n(t, 14, 0, "ftwPhoneOverviewDecorator"),
              n(
                t,
                15,
                0,
                "/decorators/W789_Einrichtungsassistent/High/High_W789_Einrichtungsassistent_kein_NAD_NAR.webp",
              ));
          },
          function (n, t) {
            (n(
              t,
              2,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 4).backgroundColor,
              l.Nb(t, 4).fixedNumberOfLines,
              l.Nb(t, 4).mayContainLatinCharsForArabic,
              l.Nb(t, 4).shortenWithEllipsisForArabic,
            ),
              n(t, 13, 0, l.Nb(t, 15).iconComponentHidden));
          },
        );
      }
      var ye = e("SCem");
      class Oe {
        constructor(n, t) {
          ((this.displayService = n), (this.ftwContextChangeService = t));
        }
      }
      var ve = l.wb({
        encapsulation: 0,
        styles: [
          [
            '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.ftw-main__title[_ngcontent-%COMP%]{text-align:center;text-wrap:normal;width:1208px;max-height:98px;margin:20px 38px 38px;font-size:40px}.ftw-main__title--med[_ngcontent-%COMP%]{margin:20px 17px 38px;width:985px}.ftw-main__text[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);margin-left:50px;width:800px;font-size:30px}.ftw-main__text--med[_ngcontent-%COMP%]{margin-left:30px;width:665px}.component-layout-latin[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-latin[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:ltr}.component-layout-arabic[_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__text--med[_ngcontent-%COMP%], .component-layout-arabic[_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .ftw-main__title[_ngcontent-%COMP%]{direction:rtl}.decorator[_ngcontent-%COMP%]{position:absolute;height:392px;width:439px;bottom:0;right:0}',
          ],
        ],
        data: {},
      });
      function we(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "ftwLastPageSetupDoneText"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "ftwLastPageSetupDoneText"),
              n(
                t,
                2,
                0,
                "Sie haben jetzt alle einrichtungsrelevanten\nEinstellungen vorgenommen. \nAnpassungen k\xf6nnen Sie jederzeit in den\njeweiligen Funktionsmen\xfcs t\xe4tigen.",
                "ftwLastPageSetupDoneText",
                6,
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Se(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__text"],
                ["id", "ftwLastPageText"],
              ],
              [
                [2, "ftw-main__text--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "ftwLastPageText"),
              n(
                t,
                2,
                0,
                "Sie haben einrichtungsrelevante Einstellungen\nvorgenommen. F\xfcr den Abschluss\ndes Einrichtungsassistenten k\xf6nnen Sie diesen\njederzeit aufrufen und beenden.",
                "ftwLastPageText",
                6,
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Ne(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [
                ["class", "ftw-main__title"],
                ["id", "ftwLastPageTitle"],
              ],
              [
                [2, "ftw-main__title--med", null],
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, we)),
            l.xb(
              4,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), l.hb(0, [["ftwNotDone", 2]], null, 0, null, Se)),
            (n()(),
            l.yb(
              6,
              0,
              null,
              null,
              2,
              "au3-icon",
              [
                ["class", "decorator"],
                ["id", "ftwLastPageDecorator"],
              ],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              w.b,
              w.a,
            )),
            l.xb(
              7,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              8,
              4243456,
              null,
              0,
              S.b,
              [p.a, l.z],
              { fileName: [0, "fileName"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "ftwLastPageTitle"),
              n(t, 2, 0, "Gl\xfcckwunsch zu Ihrem Audi!", "ftwLastPageTitle"),
              n(
                t,
                4,
                0,
                e.ftwContextChangeService.isFtwSetupCompleteFinished,
                l.Nb(t, 5),
              ),
              n(t, 7, 0, "ftwLastPageDecorator"),
              n(
                t,
                8,
                0,
                "/decorators/W768_Helpconcept/G35/W768_help_concept/Wizard/W768_HelpConcept_Wizard_decorator_flat_ringe.webp",
              ));
          },
          function (n, t) {
            (n(
              t,
              0,
              0,
              !t.component.displayService.isHighResolution,
              l.Nb(t, 2).backgroundColor,
              l.Nb(t, 2).fixedNumberOfLines,
              l.Nb(t, 2).mayContainLatinCharsForArabic,
              l.Nb(t, 2).shortenWithEllipsisForArabic,
            ),
              n(t, 6, 0, l.Nb(t, 8).iconComponentHidden));
          },
        );
      }
      var Me = e("VFXE");
      class Te {
        constructor() {
          ((this.currentFtwContextEnum = Me.e),
            (this.selectedLanguageEmitter = new l.n()));
        }
        onSelectedLanguage(n) {
          this.selectedLanguageEmitter.emit(n);
        }
      }
      var Ae = l.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.content[_ngcontent-%COMP%]{position:relative;display:flex;width:100%;height:100%}.content[_ngcontent-%COMP%], .steering-wheel-left[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .content[_ngcontent-%COMP%]{flex-direction:row}.steering-wheel-right[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .content[_ngcontent-%COMP%]{flex-direction:row-reverse}.separator[_ngcontent-%COMP%]{min-width:1px;height:100%;background-image:linear-gradient(0deg,#535353,grey)}",
          ],
        ],
        data: {},
      });
      function Le(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-first-page",
              [["id", "FtwFirstPage"]],
              null,
              null,
              null,
              kn,
              En,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, Ln, [y.b], null, null),
          ],
          function (n, t) {
            n(t, 1, 0, "FtwFirstPage");
          },
          null,
        );
      }
      function Ee(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-language-change",
              [["id", "FtwLanguageChange"]],
              null,
              [[null, "selectedLanguageEmitter"]],
              function (n, t, e) {
                var l = !0;
                return (
                  "selectedLanguageEmitter" === t &&
                    (l = !1 !== n.component.onSelectedLanguage(e) && l),
                  l
                );
              },
              qn,
              Jn,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 245760, null, 0, Kn, [Zn.a], null, {
              selectedLanguageEmitter: "selectedLanguageEmitter",
            }),
          ],
          function (n, t) {
            (n(t, 1, 0, "FtwLanguageChange"), n(t, 2, 0));
          },
          null,
        );
      }
      function ke(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-account-overview",
              [["id", "FtwAccountOverview"]],
              null,
              null,
              null,
              pt,
              ot,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 180224, null, 0, at, [y.b, lt.a, h.a, p.a], null, null),
          ],
          function (n, t) {
            n(t, 1, 0, "FtwAccountOverview");
          },
          null,
        );
      }
      function Ie(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-account-choice",
              [["id", "FtwAccountChoice"]],
              null,
              null,
              null,
              mt,
              dt,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, bt, [y.b], null, null),
          ],
          function (n, t) {
            n(t, 1, 0, "FtwAccountChoice");
          },
          null,
        );
      }
      function De(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-account-myaudi-new",
              [["id", "FtwAccountMyaudiNew"]],
              null,
              null,
              null,
              _t,
              gt,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, ht, [y.b, c.a], null, null),
          ],
          function (n, t) {
            n(t, 1, 0, "FtwAccountMyaudiNew");
          },
          null,
        );
      }
      function Fe(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-myaudi-add-car-wifi",
              [["id", "FtwMyaudiAddCarWifi"]],
              null,
              null,
              null,
              St,
              yt,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, Ct, [y.b, Pt.a], null, null),
          ],
          function (n, t) {
            n(t, 1, 0, "FtwMyaudiAddCarWifi");
          },
          null,
        );
      }
      function ze(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-myaudi-create-car-vin",
              [["id", "FtwMyaudiCreateCarVin"]],
              null,
              null,
              null,
              Rt,
              Tt,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, Nt, [y.b, c.a, Mt.a], null, null),
          ],
          function (n, t) {
            n(t, 1, 0, "FtwMyaudiCreateCarVin");
          },
          null,
        );
      }
      function Re(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-main-user-nomination-inst",
              [["id", "FtwMainUserNominationInst"]],
              null,
              null,
              null,
              $t,
              Ht,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, Bt, [y.b, c.a], null, null),
          ],
          function (n, t) {
            n(t, 1, 0, "FtwMainUserNominationInst");
          },
          null,
        );
      }
      function Be(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-eula-short",
              [["id", "FtwEulaShort"]],
              null,
              null,
              null,
              ne,
              qt,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 114688, null, 0, Xt, [y.b, Jt.a, Zt.a], null, null),
          ],
          function (n, t) {
            (n(t, 1, 0, "FtwEulaShort"), n(t, 2, 0));
          },
          null,
        );
      }
      function He(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-eula-long",
              [["id", "FtwEulaLong"]],
              null,
              null,
              null,
              le,
              ee,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, te, [y.b], null, null),
          ],
          function (n, t) {
            n(t, 1, 0, "FtwEulaLong");
          },
          null,
        );
      }
      function Ue(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-keyword-activation",
              [["id", "FtwKeywordActivation"]],
              null,
              null,
              null,
              ce,
              ue,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 114688, null, 0, oe, [c.a, y.b, Jt.a, Zt.a], null, null),
          ],
          function (n, t) {
            (n(t, 1, 0, "FtwKeywordActivation"), n(t, 2, 0));
          },
          null,
        );
      }
      function Ve(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-alexa-account-linking",
              [["id", "FtwAlexaAccountLinking"]],
              null,
              null,
              null,
              de,
              be,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, pe, [y.b], null, null),
          ],
          function (n, t) {
            n(t, 1, 0, "FtwAlexaAccountLinking");
          },
          null,
        );
      }
      function $e(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-phone-overview",
              [["id", "FtwPhoneOverview"]],
              null,
              null,
              null,
              Ce,
              ge,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 114688, null, 0, he, [c.a, y.b], null, null),
          ],
          function (n, t) {
            (n(t, 1, 0, "FtwPhoneOverview"), n(t, 2, 0));
          },
          null,
        );
      }
      function We(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-last-page",
              [["id", "FtwLastPage"]],
              null,
              null,
              null,
              Ne,
              ve,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, Oe, [y.b, ye.a], null, null),
          ],
          function (n, t) {
            n(t, 1, 0, "FtwLastPage");
          },
          null,
        );
      }
      function Ye(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              30,
              "div",
              [["class", "content"]],
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
              yn.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (n()(),
            l.yb(
              2,
              0,
              null,
              null,
              0,
              "div",
              [["class", "separator"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), l.hb(16777216, null, null, 1, null, Le)),
            l.xb(
              4,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Ee)),
            l.xb(
              6,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, ke)),
            l.xb(
              8,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Ie)),
            l.xb(
              10,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, De)),
            l.xb(
              12,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Fe)),
            l.xb(
              14,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, ze)),
            l.xb(
              16,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Re)),
            l.xb(
              18,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Be)),
            l.xb(
              20,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, He)),
            l.xb(
              22,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Ue)),
            l.xb(
              24,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Ve)),
            l.xb(
              26,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, $e)),
            l.xb(
              28,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, We)),
            l.xb(
              30,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, e.currentFtwContext),
              n(t, 4, 0, e.currentFtwContextEnum.firstFtwPage),
              n(t, 6, 0, e.currentFtwContextEnum.languageSelection),
              n(t, 8, 0, e.currentFtwContextEnum.accountOverview),
              n(t, 10, 0, e.currentFtwContextEnum.accountChoice),
              n(t, 12, 0, e.currentFtwContextEnum.accountMyAudiNew),
              n(t, 14, 0, e.currentFtwContextEnum.myAudiAddCarWifi),
              n(t, 16, 0, e.currentFtwContextEnum.myAudiCreateCarVin),
              n(
                t,
                18,
                0,
                e.currentFtwContextEnum.mainUserNominationInstruction,
              ),
              n(t, 20, 0, e.currentFtwContextEnum.eulaShort),
              n(t, 22, 0, e.currentFtwContextEnum.eulaLong),
              n(t, 24, 0, e.currentFtwContextEnum.keywordActivation),
              n(t, 26, 0, e.currentFtwContextEnum.alexaAccountLinking),
              n(t, 28, 0, e.currentFtwContextEnum.phoneSettings),
              n(t, 30, 0, e.currentFtwContextEnum.lastFtwPage));
          },
          null,
        );
      }
      var Ge = e("erFY"),
        je = e("5wO1"),
        Ke = e("M706"),
        Ze = e("aMc6");
      class Je {
        constructor() {
          ((this.uiStateTypesEnum = rn.uc),
            (this.nextPageDisabled = !1),
            (this.skipFtwState = Me.i.skipPage),
            (this.nextPageFtwState = Me.i.nextFtwPage),
            (this.nextPageButtonText = "Weiter"),
            (this.skipPageButtonText = "\xdcberspringen"),
            (this.hasSkipButton = !0),
            (this.nextPageEmitter = new l.n()),
            (this.skipPageEmitter = new l.n()));
        }
      }
      var Xe = l.wb({
        encapsulation: 0,
        styles: [
          [
            '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.first-time-wizard-op[_ngcontent-%COMP%]{position:relative;top:30px}.first-time-wizard-op__next-button[_ngcontent-%COMP%]{width:466px}.first-time-wizard-op__skip-button[_ngcontent-%COMP%]{width:402px}.op-item--prio2.first-time-wizard-op--wider-button[_ngcontent-%COMP%]{max-width:402px}.first-time-wizard-op__my-audi-prio1-button[_ngcontent-%COMP%]{width:466px}',
          ],
        ],
        data: {},
      });
      function qe(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-operation-panel-item",
              [
                [
                  "class",
                  "first-time-wizard-op__skip-button first-time-wizard-op--wider-button",
                ],
                ["id", "ftwSkip"],
                ["right", ""],
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
              function (n, t, e) {
                var l = !0,
                  i = n.component;
                return (
                  "mib3Tap" === t &&
                    (l = !1 !== i.skipPageEmitter.emit(i.skipFtwState) && l),
                  l
                );
              },
              Ge.b,
              Ge.a,
            )),
            l.xb(
              1,
              147456,
              null,
              0,
              E.a,
              [k.a, l.h, p.a, [3, E.a]],
              null,
              null,
            ),
            l.xb(2, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              4,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.xb(
              6,
              671744,
              null,
              0,
              W.a,
              [Y.a, G.i, E.a, R.a, W.b, j.a],
              {
                routeInfo: [0, "routeInfo"],
                preventGoToRoute: [1, "preventGoToRoute"],
              },
              null,
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              8,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              9,
              49152,
              null,
              0,
              je.a,
              [],
              { developerText: [0, "developerText"] },
              null,
            ),
            l.xb(
              10,
              212992,
              null,
              0,
              q.a,
              [[2, R.a], [8, null], [3, q.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            l.xb(
              11,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              12,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, "ftwSkip"),
              n(t, 5, 0),
              n(t, 6, 0, e.skipPageRoutingTarget, !!e.skipPageRoutingTarget),
              n(t, 8, 0),
              n(t, 9, 0, e.skipPageButtonText),
              n(t, 10, 0, e.uiStateTypesEnum.ListHorizontal));
          },
          function (n, t) {
            n(t, 0, 1, [
              l.Nb(t, 1).combinedDisabled,
              l.Nb(t, 1).useBrighterIcon,
              l.Nb(t, 8).markerClassEnabled,
              l.Nb(t, 9).showSeparatorLeft,
              l.Nb(t, 9).showSeparatorRight,
              l.Nb(t, 9).prio1Main,
              l.Nb(t, 9).prio1SmallScale,
              l.Nb(t, 9).prio2SmallScale,
              l.Nb(t, 9).prio1,
              l.Nb(t, 9).prio2,
              l.Nb(t, 9).prio1IconText,
              l.Nb(t, 9).prio1IconOnly,
              l.Nb(t, 9).prio1TextOnly,
              l.Nb(t, 9).prio2IconText,
              l.Nb(t, 9).prio2IconOnly,
              l.Nb(t, 9).prio2TextOnly,
              l.Nb(t, 9).useDefaultMaxWidth,
              l.Nb(t, 9).isDummy,
              l.Nb(t, 10).uiStateListHorizontal,
              l.Nb(t, 10).uiStateListVertical,
              l.Nb(t, 10).uiStateCoverLeft,
              l.Nb(t, 10).uiStateCoverRight,
              l.Nb(t, 10).uiStateCoverBottom,
              l.Nb(t, 10).uiStateButton,
              l.Nb(t, 10).uiStateByDabLeft,
              l.Nb(t, 10).uiStateByDabRight,
              l.Nb(t, 10).uiStateLbDabLeft,
              l.Nb(t, 10).uiStateLbDabRight,
            ]);
          },
        );
      }
      function Qe(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              16,
              "au3-operation-panel",
              [
                ["class", "first-time-wizard-op"],
                ["id", "ftwOperationPanelFooterSkipOrNext"],
              ],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              Ze.a,
              [Tn.a],
              { alignItemsInside: [0, "alignItemsInside"] },
              null,
            ),
            (n()(),
            l.yb(
              3,
              0,
              null,
              1,
              11,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["id", "ftwNext"],
              ],
              [
                [8, "className", 0],
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
              function (n, t, e) {
                var l = !0,
                  i = n.component;
                return (
                  "mib3Tap" === t &&
                    (l =
                      !1 !== i.nextPageEmitter.emit(i.nextPageFtwState) && l),
                  l
                );
              },
              Ge.b,
              Ge.a,
            )),
            l.xb(
              4,
              147456,
              null,
              0,
              E.a,
              [k.a, l.h, p.a, [3, E.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            l.xb(5, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              6,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              7,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              8,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.xb(
              9,
              671744,
              null,
              0,
              W.a,
              [Y.a, G.i, E.a, R.a, W.b, j.a],
              {
                routeInfo: [0, "routeInfo"],
                preventGoToRoute: [1, "preventGoToRoute"],
              },
              null,
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              11,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              12,
              49152,
              null,
              0,
              je.a,
              [],
              {
                hasText: [0, "hasText"],
                developerText: [1, "developerText"],
                prio1Item: [2, "prio1Item"],
              },
              null,
            ),
            l.xb(
              13,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              14,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
            (n()(), l.hb(16777216, null, 2, 1, null, qe)),
            l.xb(
              16,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "ftwOperationPanelFooterSkipOrNext"),
              n(t, 2, 0, !0),
              n(t, 4, 0, e.nextPageDisabled, e.nextPageDisabledReason),
              n(t, 6, 0, "ftwNext"),
              n(t, 8, 0),
              n(t, 9, 0, e.nextPageRoutingTarget, !!e.nextPageRoutingTarget),
              n(t, 11, 0),
              n(t, 12, 0, !0, e.nextPageButtonText, !0),
              n(t, 16, 0, e.hasSkipButton));
          },
          function (n, t) {
            var e = t.component;
            (n(t, 0, 0, l.Nb(t, 2).alignInside, l.Nb(t, 2).alignOutside),
              n(t, 3, 1, [
                e.hasSkipButton
                  ? "first-time-wizard-op__next-button"
                  : "first-time-wizard-op__my-audi-prio1-button",
                l.Nb(t, 4).combinedDisabled,
                l.Nb(t, 4).useBrighterIcon,
                l.Nb(t, 11).markerClassEnabled,
                l.Nb(t, 12).showSeparatorLeft,
                l.Nb(t, 12).showSeparatorRight,
                l.Nb(t, 12).prio1Main,
                l.Nb(t, 12).prio1SmallScale,
                l.Nb(t, 12).prio2SmallScale,
                l.Nb(t, 12).prio1,
                l.Nb(t, 12).prio2,
                l.Nb(t, 12).prio1IconText,
                l.Nb(t, 12).prio1IconOnly,
                l.Nb(t, 12).prio1TextOnly,
                l.Nb(t, 12).prio2IconText,
                l.Nb(t, 12).prio2IconOnly,
                l.Nb(t, 12).prio2TextOnly,
                l.Nb(t, 12).useDefaultMaxWidth,
                l.Nb(t, 12).isDummy,
              ]));
          },
        );
      }
      var nl = e("wReH");
      class tl {
        constructor(n, t, e, i, a) {
          ((this.languageService = n),
            (this.i18nService = t),
            (this.popupService = e),
            (this.logService = i),
            (this.ftwLanguageChangeService = a),
            (this.contextChangeEmitter = new l.n()),
            (this.destroy$$ = new Yn.a(1)),
            (this.logger = this.logService.getLogger(
              "help.FtwFooterLanguageChangeComponent",
            )));
        }
        ngOnInit() {
          this.languageService.currentLanguage$
            .pipe(Object(et.a)(1))
            .subscribe((n) => (this.selectedLanguage = n));
        }
        onUpdateLanguage() {
          this.selectedLanguage &&
            (this.i18nService.isEnabled() || this.i18nService.setI18nMode(!0),
            this.popupService.request(rn.Ob.POPUP_TOAST_SETUP_LANGUAGE_APPLY),
            (this.ftwLanguageChangeService.triggerLanguageChangeFromFtw = !0),
            this.languageService
              .updateLanguage$(this.selectedLanguage)
              .pipe(Object(Gn.a)(this.destroy$$))
              .subscribe(
                (n) => {
                  this.logger.debug("Language changed to: ", n.newLanguage);
                },
                (n) => this.logger.error("Error changing language:", n),
              ));
        }
        onNextPage() {
          this.contextChangeEmitter.emit();
        }
        ngOnDestroy() {
          (this.destroy$$.next(), this.destroy$$.complete());
        }
      }
      var el = l.wb({
        encapsulation: 0,
        styles: [
          [
            '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.first-time-wizard-op[_ngcontent-%COMP%]{position:relative;top:30px}.first-time-wizard-op__ok-button[_ngcontent-%COMP%]{width:466px}',
          ],
        ],
        data: {},
      });
      function ll(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["class", "first-time-wizard-op__ok-button"],
                ["id", "Continue"],
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
              function (n, t, e) {
                var l = !0;
                return (
                  "mib3Tap" === t && (l = !1 !== n.component.onNextPage() && l),
                  l
                );
              },
              Ge.b,
              Ge.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              4,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              6,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              7,
              49152,
              null,
              0,
              je.a,
              [],
              {
                hasText: [0, "hasText"],
                developerText: [1, "developerText"],
                prio1Item: [2, "prio1Item"],
              },
              null,
            ),
            l.xb(
              8,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "Continue"),
              n(t, 4, 0),
              n(t, 6, 0),
              n(t, 7, 0, !0, "Weiter", !0));
          },
          function (n, t) {
            n(t, 0, 1, [
              l.Nb(t, 6).markerClassEnabled,
              l.Nb(t, 7).showSeparatorLeft,
              l.Nb(t, 7).showSeparatorRight,
              l.Nb(t, 7).prio1Main,
              l.Nb(t, 7).prio1SmallScale,
              l.Nb(t, 7).prio2SmallScale,
              l.Nb(t, 7).prio1,
              l.Nb(t, 7).prio2,
              l.Nb(t, 7).prio1IconText,
              l.Nb(t, 7).prio1IconOnly,
              l.Nb(t, 7).prio1TextOnly,
              l.Nb(t, 7).prio2IconText,
              l.Nb(t, 7).prio2IconOnly,
              l.Nb(t, 7).prio2TextOnly,
              l.Nb(t, 7).useDefaultMaxWidth,
              l.Nb(t, 7).isDummy,
            ]);
          },
        );
      }
      function il(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["class", "first-time-wizard-op__ok-button"],
                ["id", "Apply"],
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
              function (n, t, e) {
                var l = !0;
                return (
                  "mib3Tap" === t &&
                    (l = !1 !== n.component.onUpdateLanguage() && l),
                  l
                );
              },
              Ge.b,
              Ge.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              4,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              6,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              7,
              49152,
              null,
              0,
              je.a,
              [],
              {
                hasText: [0, "hasText"],
                developerText: [1, "developerText"],
                prio1Item: [2, "prio1Item"],
              },
              null,
            ),
            l.xb(
              8,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "Apply"),
              n(t, 4, 0),
              n(t, 6, 0),
              n(t, 7, 0, !0, "\xdcbernehmen", !0));
          },
          function (n, t) {
            n(t, 0, 1, [
              l.Nb(t, 6).markerClassEnabled,
              l.Nb(t, 7).showSeparatorLeft,
              l.Nb(t, 7).showSeparatorRight,
              l.Nb(t, 7).prio1Main,
              l.Nb(t, 7).prio1SmallScale,
              l.Nb(t, 7).prio2SmallScale,
              l.Nb(t, 7).prio1,
              l.Nb(t, 7).prio2,
              l.Nb(t, 7).prio1IconText,
              l.Nb(t, 7).prio1IconOnly,
              l.Nb(t, 7).prio1TextOnly,
              l.Nb(t, 7).prio2IconText,
              l.Nb(t, 7).prio2IconOnly,
              l.Nb(t, 7).prio2TextOnly,
              l.Nb(t, 7).useDefaultMaxWidth,
              l.Nb(t, 7).isDummy,
            ]);
          },
        );
      }
      function al(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              6,
              "au3-operation-panel",
              [
                ["class", "first-time-wizard-op"],
                ["id", "operationPanelLanguageChange"],
              ],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              Ze.a,
              [Tn.a],
              { alignItemsInside: [0, "alignItemsInside"] },
              null,
            ),
            (n()(), l.hb(16777216, null, 1, 2, null, ll)),
            l.xb(
              4,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
            (n()(), l.hb(0, [["apply", 2]], 1, 0, null, il)),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "operationPanelLanguageChange"),
              n(t, 2, 0, !0),
              n(
                t,
                4,
                0,
                e.selectedLanguage ===
                  l.Yb(
                    t,
                    4,
                    0,
                    l.Nb(t, 5).transform(e.languageService.currentLanguage$),
                  ),
                l.Nb(t, 6),
              ));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).alignInside, l.Nb(t, 2).alignOutside);
          },
        );
      }
      var ol = e("1e4c");
      class ul {
        constructor(n) {
          ((this.umActivitiesService = n),
            (this.uiStateTypesEnum = rn.uc),
            (this.popupIds = rn.Ob),
            (this.UsersRoutes = ol.b),
            (this.myAudiLoginChoiceEmitter = new l.n()),
            (this.offlineAccountChoiceEmitter = new l.n()));
        }
      }
      var rl = l.wb({
        encapsulation: 0,
        styles: [
          [
            '.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.first-time-wizard-op[_ngcontent-%COMP%]{position:relative;top:30px}.first-time-wizard-op__my-audi-account-button[_ngcontent-%COMP%]{width:466px}.first-time-wizard-op__offline-account-button[_ngcontent-%COMP%]{width:402px}.op-item--prio2.first-time-wizard-op--wider-button[_ngcontent-%COMP%]{max-width:402px}',
          ],
        ],
        data: {},
      });
      function sl(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              11,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["class", "first-time-wizard-op__my-audi-account-button"],
                ["id", "ftwNext"],
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
              function (n, t, e) {
                var l = !0;
                return (
                  "mib3Tap" === t &&
                    (l =
                      !1 !== n.component.myAudiLoginChoiceEmitter.emit() && l),
                  l
                );
              },
              Ge.b,
              Ge.a,
            )),
            l.xb(
              1,
              147456,
              null,
              0,
              E.a,
              [k.a, l.h, p.a, [3, E.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            l.xb(2, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              4,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.xb(
              6,
              671744,
              null,
              0,
              W.a,
              [Y.a, G.i, E.a, R.a, W.b, j.a],
              {
                routeInfo: [0, "routeInfo"],
                preventGoToRoute: [1, "preventGoToRoute"],
              },
              null,
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              8,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              9,
              49152,
              null,
              0,
              je.a,
              [],
              {
                hasText: [0, "hasText"],
                developerText: [1, "developerText"],
                prio1Item: [2, "prio1Item"],
              },
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              11,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(
              t,
              1,
              0,
              e.umActivitiesService.getActivityDisabled(t.context.mib3Let),
              e.umActivitiesService.getActivityDisabledReason(
                t.context.mib3Let,
                !0,
              ),
            ),
              n(t, 3, 0, "ftwNext"),
              n(t, 5, 0),
              n(t, 6, 0, e.UsersRoutes.MyAudiLogin, !0),
              n(t, 8, 0),
              n(t, 9, 0, !0, "myAudi Nutzer", !0));
          },
          function (n, t) {
            n(t, 0, 1, [
              l.Nb(t, 1).combinedDisabled,
              l.Nb(t, 1).useBrighterIcon,
              l.Nb(t, 8).markerClassEnabled,
              l.Nb(t, 9).showSeparatorLeft,
              l.Nb(t, 9).showSeparatorRight,
              l.Nb(t, 9).prio1Main,
              l.Nb(t, 9).prio1SmallScale,
              l.Nb(t, 9).prio2SmallScale,
              l.Nb(t, 9).prio1,
              l.Nb(t, 9).prio2,
              l.Nb(t, 9).prio1IconText,
              l.Nb(t, 9).prio1IconOnly,
              l.Nb(t, 9).prio1TextOnly,
              l.Nb(t, 9).prio2IconText,
              l.Nb(t, 9).prio2IconOnly,
              l.Nb(t, 9).prio2TextOnly,
              l.Nb(t, 9).useDefaultMaxWidth,
              l.Nb(t, 9).isDummy,
            ]);
          },
        );
      }
      function cl(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-operation-panel-item",
              [
                [
                  "class",
                  "first-time-wizard-op__offline-account-button first-time-wizard-op--wider-button",
                ],
                ["id", "ftwSkip"],
                ["right", ""],
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
              function (n, t, e) {
                var l = !0;
                return (
                  "mib3Tap" === t &&
                    (l =
                      !1 !== n.component.offlineAccountChoiceEmitter.emit() &&
                      l),
                  l
                );
              },
              Ge.b,
              Ge.a,
            )),
            l.xb(
              1,
              147456,
              null,
              0,
              E.a,
              [k.a, l.h, p.a, [3, E.a]],
              { disabled: [0, "disabled"], reason: [1, "reason"] },
              null,
            ),
            l.xb(2, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              4,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.xb(
              6,
              671744,
              null,
              0,
              W.a,
              [Y.a, G.i, E.a, R.a, W.b, j.a],
              {
                routeInfo: [0, "routeInfo"],
                preventGoToRoute: [1, "preventGoToRoute"],
              },
              null,
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              8,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              9,
              49152,
              null,
              0,
              je.a,
              [],
              { developerText: [0, "developerText"] },
              null,
            ),
            l.xb(
              10,
              212992,
              null,
              0,
              q.a,
              [[2, R.a], [8, null], [3, q.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            l.xb(
              11,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              12,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(
              t,
              1,
              0,
              e.umActivitiesService.getActivityDisabled(t.context.mib3Let),
              e.umActivitiesService.getActivityDisabledReason(
                t.context.mib3Let,
                !0,
              ),
            ),
              n(t, 3, 0, "ftwSkip"),
              n(t, 5, 0),
              n(t, 6, 0, e.UsersRoutes.AddOfflineAccount, !0),
              n(t, 8, 0),
              n(t, 9, 0, "lokaler Nutzer"),
              n(t, 10, 0, e.uiStateTypesEnum.ListHorizontal));
          },
          function (n, t) {
            n(t, 0, 1, [
              l.Nb(t, 1).combinedDisabled,
              l.Nb(t, 1).useBrighterIcon,
              l.Nb(t, 8).markerClassEnabled,
              l.Nb(t, 9).showSeparatorLeft,
              l.Nb(t, 9).showSeparatorRight,
              l.Nb(t, 9).prio1Main,
              l.Nb(t, 9).prio1SmallScale,
              l.Nb(t, 9).prio2SmallScale,
              l.Nb(t, 9).prio1,
              l.Nb(t, 9).prio2,
              l.Nb(t, 9).prio1IconText,
              l.Nb(t, 9).prio1IconOnly,
              l.Nb(t, 9).prio1TextOnly,
              l.Nb(t, 9).prio2IconText,
              l.Nb(t, 9).prio2IconOnly,
              l.Nb(t, 9).prio2TextOnly,
              l.Nb(t, 9).useDefaultMaxWidth,
              l.Nb(t, 9).isDummy,
              l.Nb(t, 10).uiStateListHorizontal,
              l.Nb(t, 10).uiStateListVertical,
              l.Nb(t, 10).uiStateCoverLeft,
              l.Nb(t, 10).uiStateCoverRight,
              l.Nb(t, 10).uiStateCoverBottom,
              l.Nb(t, 10).uiStateButton,
              l.Nb(t, 10).uiStateByDabLeft,
              l.Nb(t, 10).uiStateByDabRight,
              l.Nb(t, 10).uiStateLbDabLeft,
              l.Nb(t, 10).uiStateLbDabRight,
            ]);
          },
        );
      }
      function pl(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              8,
              "au3-operation-panel",
              [
                ["class", "first-time-wizard-op"],
                ["id", "ftwOperationPanelAccountChoice"],
              ],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              Ze.a,
              [Tn.a],
              { alignItemsInside: [0, "alignItemsInside"] },
              null,
            ),
            (n()(), l.hb(16777216, null, 1, 2, null, sl)),
            l.xb(
              4,
              16384,
              null,
              0,
              An.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
            (n()(), l.hb(16777216, null, 2, 2, null, cl)),
            l.xb(
              7,
              16384,
              null,
              0,
              An.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "ftwOperationPanelAccountChoice"),
              n(t, 2, 0, !0),
              n(
                t,
                4,
                0,
                l.Yb(
                  t,
                  4,
                  0,
                  l
                    .Nb(t, 5)
                    .transform(e.umActivitiesService.addOnlineUserActivity$),
                ),
              ),
              n(
                t,
                7,
                0,
                l.Yb(
                  t,
                  7,
                  0,
                  l
                    .Nb(t, 8)
                    .transform(e.umActivitiesService.addOfflineUserActivity$),
                ),
              ));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).alignInside, l.Nb(t, 2).alignOutside);
          },
        );
      }
      class bl {
        constructor(n, t) {
          ((this.wifiSettingsService = n),
            (this.cdr = t),
            (this.uiStateTypesEnum = rn.uc),
            (this.wifiActivationTriggered = !1),
            (this.contextChangeEmitter = new l.n()));
        }
        onAddCarWifiOffActivate() {
          ((this.wifiActivationTriggered = !0),
            this.cdr.detectChanges(),
            this.wifiSettingsService.setWifiActivated(!0).catch(() => {
              ((this.wifiActivationTriggered = !1),
                this.cdr.markForCheck(),
                this.onAddCarWifiOffDontActivate());
            }));
        }
        onAddCarWifiOffDontActivate() {
          this.contextChangeEmitter.emit(Me.i.nextFtwPage);
        }
        skip() {
          this.contextChangeEmitter.emit(Me.i.skipContext);
        }
        continue() {
          this.wifiSettingsService.wifiClients$
            .pipe(
              Object(et.a)(1),
              Object(rn.Qd)(this),
              Object(tt.a)((n) =>
                n.find(
                  (n) =>
                    void 0 !== n.connectedAp &&
                    !!this.wifiSettingsService.mainAP &&
                    n.connectedAp.id === this.wifiSettingsService.mainAP.id,
                ),
              ),
            )
            .subscribe((n) => {
              this.contextChangeEmitter.emit(
                void 0 !== n ? Me.i.skipContext : Me.i.nextFtwPage,
              );
            });
        }
        ngOnDestroy() {}
      }
      var dl = l.wb({
        encapsulation: 0,
        styles: [
          [
            '.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.first-time-wizard-op[_ngcontent-%COMP%]{position:relative;top:30px}.first-time-wizard-op__my-audi-prio1-button[_ngcontent-%COMP%]{width:466px}.first-time-wizard-op__my-audi-prio2-button[_ngcontent-%COMP%]{width:402px}.op-item--prio2.first-time-wizard-op--wider-button[_ngcontent-%COMP%]{max-width:402px}',
          ],
        ],
        data: {},
      });
      function ml(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["class", "first-time-wizard-op__my-audi-prio1-button"],
                ["id", "ftwAddCarWifiNext"],
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
              function (n, t, e) {
                var l = !0;
                return (
                  "mib3Tap" === t &&
                    (l = !1 !== n.component.onAddCarWifiOffActivate() && l),
                  l
                );
              },
              Ge.b,
              Ge.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              4,
              147456,
              null,
              0,
              E.a,
              [k.a, l.h, p.a, [3, E.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              7,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              8,
              49152,
              null,
              0,
              je.a,
              [],
              {
                hasText: [0, "hasText"],
                developerText: [1, "developerText"],
                prio1Item: [2, "prio1Item"],
              },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "ftwAddCarWifiNext"),
              n(t, 4, 0, e.wifiActivationTriggered),
              n(t, 5, 0),
              n(t, 7, 0),
              n(t, 8, 0, !0, "aktivieren", !0));
          },
          function (n, t) {
            n(t, 0, 1, [
              l.Nb(t, 4).combinedDisabled,
              l.Nb(t, 4).useBrighterIcon,
              l.Nb(t, 7).markerClassEnabled,
              l.Nb(t, 8).showSeparatorLeft,
              l.Nb(t, 8).showSeparatorRight,
              l.Nb(t, 8).prio1Main,
              l.Nb(t, 8).prio1SmallScale,
              l.Nb(t, 8).prio2SmallScale,
              l.Nb(t, 8).prio1,
              l.Nb(t, 8).prio2,
              l.Nb(t, 8).prio1IconText,
              l.Nb(t, 8).prio1IconOnly,
              l.Nb(t, 8).prio1TextOnly,
              l.Nb(t, 8).prio2IconText,
              l.Nb(t, 8).prio2IconOnly,
              l.Nb(t, 8).prio2TextOnly,
              l.Nb(t, 8).useDefaultMaxWidth,
              l.Nb(t, 8).isDummy,
            ]);
          },
        );
      }
      function hl(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-operation-panel-item",
              [
                [
                  "class",
                  "first-time-wizard-op__my-audi-prio2-button first-time-wizard-op--wider-button",
                ],
                ["id", "ftwAddCarWifiSkip"],
                ["right", ""],
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
              function (n, t, e) {
                var l = !0;
                return (
                  "mib3Tap" === t &&
                    (l = !1 !== n.component.onAddCarWifiOffDontActivate() && l),
                  l
                );
              },
              Ge.b,
              Ge.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              4,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              6,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              7,
              49152,
              null,
              0,
              je.a,
              [],
              { developerText: [0, "developerText"] },
              null,
            ),
            l.xb(
              8,
              212992,
              null,
              0,
              q.a,
              [[2, R.a], [8, null], [3, q.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "ftwAddCarWifiSkip"),
              n(t, 4, 0),
              n(t, 6, 0),
              n(t, 7, 0, "nicht aktivieren"),
              n(t, 8, 0, e.uiStateTypesEnum.ListHorizontal));
          },
          function (n, t) {
            n(t, 0, 1, [
              l.Nb(t, 6).markerClassEnabled,
              l.Nb(t, 7).showSeparatorLeft,
              l.Nb(t, 7).showSeparatorRight,
              l.Nb(t, 7).prio1Main,
              l.Nb(t, 7).prio1SmallScale,
              l.Nb(t, 7).prio2SmallScale,
              l.Nb(t, 7).prio1,
              l.Nb(t, 7).prio2,
              l.Nb(t, 7).prio1IconText,
              l.Nb(t, 7).prio1IconOnly,
              l.Nb(t, 7).prio1TextOnly,
              l.Nb(t, 7).prio2IconText,
              l.Nb(t, 7).prio2IconOnly,
              l.Nb(t, 7).prio2TextOnly,
              l.Nb(t, 7).useDefaultMaxWidth,
              l.Nb(t, 7).isDummy,
              l.Nb(t, 8).uiStateListHorizontal,
              l.Nb(t, 8).uiStateListVertical,
              l.Nb(t, 8).uiStateCoverLeft,
              l.Nb(t, 8).uiStateCoverRight,
              l.Nb(t, 8).uiStateCoverBottom,
              l.Nb(t, 8).uiStateButton,
              l.Nb(t, 8).uiStateByDabLeft,
              l.Nb(t, 8).uiStateByDabRight,
              l.Nb(t, 8).uiStateLbDabLeft,
              l.Nb(t, 8).uiStateLbDabRight,
            ]);
          },
        );
      }
      function gl(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              9,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["class", "first-time-wizard-op__my-audi-prio1-button"],
                ["id", "ftwNext"],
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
              function (n, t, e) {
                var l = !0;
                return (
                  "mib3Tap" === t && (l = !1 !== n.component.continue() && l),
                  l
                );
              },
              Ge.b,
              Ge.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              4,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              6,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              7,
              49152,
              null,
              0,
              je.a,
              [],
              {
                hasText: [0, "hasText"],
                developerText: [1, "developerText"],
                prio1Item: [2, "prio1Item"],
              },
              null,
            ),
            l.xb(
              8,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "ftwNext"),
              n(t, 4, 0),
              n(t, 6, 0),
              n(t, 7, 0, !0, "Weiter", !0));
          },
          function (n, t) {
            n(t, 0, 1, [
              l.Nb(t, 6).markerClassEnabled,
              l.Nb(t, 7).showSeparatorLeft,
              l.Nb(t, 7).showSeparatorRight,
              l.Nb(t, 7).prio1Main,
              l.Nb(t, 7).prio1SmallScale,
              l.Nb(t, 7).prio2SmallScale,
              l.Nb(t, 7).prio1,
              l.Nb(t, 7).prio2,
              l.Nb(t, 7).prio1IconText,
              l.Nb(t, 7).prio1IconOnly,
              l.Nb(t, 7).prio1TextOnly,
              l.Nb(t, 7).prio2IconText,
              l.Nb(t, 7).prio2IconOnly,
              l.Nb(t, 7).prio2TextOnly,
              l.Nb(t, 7).useDefaultMaxWidth,
              l.Nb(t, 7).isDummy,
            ]);
          },
        );
      }
      function fl(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-operation-panel-item",
              [
                [
                  "class",
                  "first-time-wizard-op__my-audi-prio2-button first-time-wizard-op--wider-button",
                ],
                ["id", "ftwSkip"],
                ["right", ""],
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
              function (n, t, e) {
                var l = !0;
                return (
                  "mib3Tap" === t && (l = !1 !== n.component.skip() && l),
                  l
                );
              },
              Ge.b,
              Ge.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              4,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              6,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              7,
              49152,
              null,
              0,
              je.a,
              [],
              { developerText: [0, "developerText"] },
              null,
            ),
            l.xb(
              8,
              212992,
              null,
              0,
              q.a,
              [[2, R.a], [8, null], [3, q.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "ftwSkip"),
              n(t, 4, 0),
              n(t, 6, 0),
              n(t, 7, 0, "\xdcberspringen"),
              n(t, 8, 0, e.uiStateTypesEnum.ListHorizontal));
          },
          function (n, t) {
            n(t, 0, 1, [
              l.Nb(t, 6).markerClassEnabled,
              l.Nb(t, 7).showSeparatorLeft,
              l.Nb(t, 7).showSeparatorRight,
              l.Nb(t, 7).prio1Main,
              l.Nb(t, 7).prio1SmallScale,
              l.Nb(t, 7).prio2SmallScale,
              l.Nb(t, 7).prio1,
              l.Nb(t, 7).prio2,
              l.Nb(t, 7).prio1IconText,
              l.Nb(t, 7).prio1IconOnly,
              l.Nb(t, 7).prio1TextOnly,
              l.Nb(t, 7).prio2IconText,
              l.Nb(t, 7).prio2IconOnly,
              l.Nb(t, 7).prio2TextOnly,
              l.Nb(t, 7).useDefaultMaxWidth,
              l.Nb(t, 7).isDummy,
              l.Nb(t, 8).uiStateListHorizontal,
              l.Nb(t, 8).uiStateListVertical,
              l.Nb(t, 8).uiStateCoverLeft,
              l.Nb(t, 8).uiStateCoverRight,
              l.Nb(t, 8).uiStateCoverBottom,
              l.Nb(t, 8).uiStateButton,
              l.Nb(t, 8).uiStateByDabLeft,
              l.Nb(t, 8).uiStateByDabRight,
              l.Nb(t, 8).uiStateLbDabLeft,
              l.Nb(t, 8).uiStateLbDabRight,
            ]);
          },
        );
      }
      function xl(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              7,
              "au3-operation-panel",
              [["class", "first-time-wizard-op"]],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            l.xb(
              1,
              49152,
              null,
              0,
              Ze.a,
              [Tn.a],
              { alignItemsInside: [0, "alignItemsInside"] },
              null,
            ),
            (n()(), l.hb(16777216, null, 1, 1, null, ml)),
            l.xb(
              3,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), l.hb(16777216, null, 2, 1, null, hl)),
            l.xb(
              5,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            (n()(), l.hb(0, [["nextButtonTemplate", 2]], 1, 0, null, gl)),
            (n()(), l.hb(0, [["skipButtonTemplate", 2]], 1, 0, null, fl)),
          ],
          function (n, t) {
            (n(t, 1, 0, !0),
              n(
                t,
                3,
                0,
                !(null != t.context.mib3Let && t.context.mib3Let.enabled),
                l.Nb(t, 6),
              ),
              n(
                t,
                5,
                0,
                !(null != t.context.mib3Let && t.context.mib3Let.enabled),
                l.Nb(t, 7),
              ));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 1).alignInside, l.Nb(t, 1).alignOutside);
          },
        );
      }
      function _l(n) {
        return l.ac(
          2,
          [
            (n()(), l.hb(16777216, null, null, 2, null, xl)),
            l.xb(
              1,
              16384,
              null,
              0,
              An.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
          ],
          function (n, t) {
            var e = t.component;
            n(
              t,
              1,
              0,
              l.Yb(
                t,
                1,
                0,
                l.Nb(t, 2).transform(e.wifiSettingsService.wifiState$),
              ),
            );
          },
          null,
        );
      }
      class Pl {
        constructor() {
          ((this.uiStateTypesEnum = rn.uc),
            (this.contextChangeEmitter = new l.n()));
        }
        onRead() {
          this.contextChangeEmitter.emit(Me.i.nextFtwPage);
        }
        onAccept() {
          this.contextChangeEmitter.emit(Me.i.nextFtwContext);
        }
      }
      var Cl = l.wb({
        encapsulation: 0,
        styles: [
          [
            '.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.first-time-wizard-op[_ngcontent-%COMP%]{position:relative;top:30px}.first-time-wizard-op__accept-button[_ngcontent-%COMP%]{width:466px}.first-time-wizard-op__read-button[_ngcontent-%COMP%]{width:402px}.op-item--prio2.first-time-wizard-op--wider-button[_ngcontent-%COMP%]{max-width:402px}',
          ],
        ],
        data: {},
      });
      function yl(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              23,
              "au3-operation-panel",
              [
                ["class", "first-time-wizard-op"],
                ["id", "FtwOperationPanelEulaShort"],
              ],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              Ze.a,
              [Tn.a],
              { alignItemsInside: [0, "alignItemsInside"] },
              null,
            ),
            (n()(),
            l.yb(
              3,
              0,
              null,
              0,
              10,
              "au3-operation-panel-item",
              [
                [
                  "class",
                  "first-time-wizard-op__read-button first-time-wizard-op--wider-button",
                ],
                ["id", "FtwEulaShortRead"],
                ["left", ""],
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
              function (n, t, e) {
                var l = !0;
                return (
                  "mib3Tap" === t && (l = !1 !== n.component.onRead() && l),
                  l
                );
              },
              Ge.b,
              Ge.a,
            )),
            l.xb(
              4,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(5, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              6,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              7,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              9,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              10,
              49152,
              null,
              0,
              je.a,
              [],
              { developerText: [0, "developerText"] },
              null,
            ),
            l.xb(
              11,
              212992,
              null,
              0,
              q.a,
              [[2, R.a], [8, null], [3, q.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            l.xb(
              12,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              13,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
            (n()(),
            l.yb(
              14,
              0,
              null,
              1,
              9,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["class", "first-time-wizard-op__accept-button"],
                ["id", "FtwEulaShortAccept"],
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
              function (n, t, e) {
                var l = !0;
                return (
                  "mib3Tap" === t && (l = !1 !== n.component.onAccept() && l),
                  l
                );
              },
              Ge.b,
              Ge.a,
            )),
            l.xb(
              15,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(16, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              17,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              18,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              20,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              21,
              49152,
              null,
              0,
              je.a,
              [],
              {
                hasText: [0, "hasText"],
                developerText: [1, "developerText"],
                prio1Item: [2, "prio1Item"],
              },
              null,
            ),
            l.xb(
              22,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              23,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "FtwOperationPanelEulaShort"),
              n(t, 2, 0, !0),
              n(t, 4, 0, "FtwEulaShortRead"),
              n(t, 7, 0),
              n(t, 9, 0),
              n(t, 10, 0, "lesen"),
              n(t, 11, 0, e.uiStateTypesEnum.ListHorizontal),
              n(t, 15, 0, "FtwEulaShortAccept"),
              n(t, 18, 0),
              n(t, 20, 0),
              n(t, 21, 0, !0, "Weiter", !0));
          },
          function (n, t) {
            (n(t, 0, 0, l.Nb(t, 2).alignInside, l.Nb(t, 2).alignOutside),
              n(t, 3, 1, [
                l.Nb(t, 9).markerClassEnabled,
                l.Nb(t, 10).showSeparatorLeft,
                l.Nb(t, 10).showSeparatorRight,
                l.Nb(t, 10).prio1Main,
                l.Nb(t, 10).prio1SmallScale,
                l.Nb(t, 10).prio2SmallScale,
                l.Nb(t, 10).prio1,
                l.Nb(t, 10).prio2,
                l.Nb(t, 10).prio1IconText,
                l.Nb(t, 10).prio1IconOnly,
                l.Nb(t, 10).prio1TextOnly,
                l.Nb(t, 10).prio2IconText,
                l.Nb(t, 10).prio2IconOnly,
                l.Nb(t, 10).prio2TextOnly,
                l.Nb(t, 10).useDefaultMaxWidth,
                l.Nb(t, 10).isDummy,
                l.Nb(t, 11).uiStateListHorizontal,
                l.Nb(t, 11).uiStateListVertical,
                l.Nb(t, 11).uiStateCoverLeft,
                l.Nb(t, 11).uiStateCoverRight,
                l.Nb(t, 11).uiStateCoverBottom,
                l.Nb(t, 11).uiStateButton,
                l.Nb(t, 11).uiStateByDabLeft,
                l.Nb(t, 11).uiStateByDabRight,
                l.Nb(t, 11).uiStateLbDabLeft,
                l.Nb(t, 11).uiStateLbDabRight,
              ]),
              n(t, 14, 1, [
                l.Nb(t, 20).markerClassEnabled,
                l.Nb(t, 21).showSeparatorLeft,
                l.Nb(t, 21).showSeparatorRight,
                l.Nb(t, 21).prio1Main,
                l.Nb(t, 21).prio1SmallScale,
                l.Nb(t, 21).prio2SmallScale,
                l.Nb(t, 21).prio1,
                l.Nb(t, 21).prio2,
                l.Nb(t, 21).prio1IconText,
                l.Nb(t, 21).prio1IconOnly,
                l.Nb(t, 21).prio1TextOnly,
                l.Nb(t, 21).prio2IconText,
                l.Nb(t, 21).prio2IconOnly,
                l.Nb(t, 21).prio2TextOnly,
                l.Nb(t, 21).useDefaultMaxWidth,
                l.Nb(t, 21).isDummy,
              ]));
          },
        );
      }
      class Ol {
        constructor() {
          ((this.uiStateTypesEnum = rn.uc),
            (this.contextChangeEmitter = new l.n()));
        }
        onHide() {
          this.contextChangeEmitter.emit(Me.i.previousFtwPage);
        }
        onAccept() {
          this.contextChangeEmitter.emit(Me.i.nextFtwPage);
        }
      }
      var vl = l.wb({
        encapsulation: 0,
        styles: [
          [
            '.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.first-time-wizard-op[_ngcontent-%COMP%]{position:relative;top:30px}.first-time-wizard-op__accept-button[_ngcontent-%COMP%]{width:466px}.first-time-wizard-op__hide-button[_ngcontent-%COMP%]{width:402px}.op-item--prio2.first-time-wizard-op--wider-button[_ngcontent-%COMP%]{max-width:402px}',
          ],
        ],
        data: {},
      });
      function wl(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              23,
              "au3-operation-panel",
              [
                ["class", "first-time-wizard-op"],
                ["id", "FtwOperationPanelEulaLong"],
              ],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              Ze.a,
              [Tn.a],
              { alignItemsInside: [0, "alignItemsInside"] },
              null,
            ),
            (n()(),
            l.yb(
              3,
              0,
              null,
              0,
              10,
              "au3-operation-panel-item",
              [
                [
                  "class",
                  "first-time-wizard-op__hide-button first-time-wizard-op--wider-button",
                ],
                ["id", "FtwEulaLongHideText"],
                ["left", ""],
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
              function (n, t, e) {
                var l = !0;
                return (
                  "mib3Tap" === t && (l = !1 !== n.component.onHide() && l),
                  l
                );
              },
              Ge.b,
              Ge.a,
            )),
            l.xb(
              4,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(5, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              6,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              7,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              9,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              10,
              49152,
              null,
              0,
              je.a,
              [],
              { developerText: [0, "developerText"] },
              null,
            ),
            l.xb(
              11,
              212992,
              null,
              0,
              q.a,
              [[2, R.a], [8, null], [3, q.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            l.xb(
              12,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              13,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
            (n()(),
            l.yb(
              14,
              0,
              null,
              1,
              9,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["class", "first-time-wizard-op__accept-button"],
                ["id", "FtwEulaLongAccept"],
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
              function (n, t, e) {
                var l = !0;
                return (
                  "mib3Tap" === t && (l = !1 !== n.component.onAccept() && l),
                  l
                );
              },
              Ge.b,
              Ge.a,
            )),
            l.xb(
              15,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(16, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              17,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              18,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              20,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              21,
              49152,
              null,
              0,
              je.a,
              [],
              {
                hasText: [0, "hasText"],
                developerText: [1, "developerText"],
                prio1Item: [2, "prio1Item"],
              },
              null,
            ),
            l.xb(
              22,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              23,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "FtwOperationPanelEulaLong"),
              n(t, 2, 0, !0),
              n(t, 4, 0, "FtwEulaLongHideText"),
              n(t, 7, 0),
              n(t, 9, 0),
              n(t, 10, 0, "ausblenden"),
              n(t, 11, 0, e.uiStateTypesEnum.ListHorizontal),
              n(t, 15, 0, "FtwEulaLongAccept"),
              n(t, 18, 0),
              n(t, 20, 0),
              n(t, 21, 0, !0, "Weiter", !0));
          },
          function (n, t) {
            (n(t, 0, 0, l.Nb(t, 2).alignInside, l.Nb(t, 2).alignOutside),
              n(t, 3, 1, [
                l.Nb(t, 9).markerClassEnabled,
                l.Nb(t, 10).showSeparatorLeft,
                l.Nb(t, 10).showSeparatorRight,
                l.Nb(t, 10).prio1Main,
                l.Nb(t, 10).prio1SmallScale,
                l.Nb(t, 10).prio2SmallScale,
                l.Nb(t, 10).prio1,
                l.Nb(t, 10).prio2,
                l.Nb(t, 10).prio1IconText,
                l.Nb(t, 10).prio1IconOnly,
                l.Nb(t, 10).prio1TextOnly,
                l.Nb(t, 10).prio2IconText,
                l.Nb(t, 10).prio2IconOnly,
                l.Nb(t, 10).prio2TextOnly,
                l.Nb(t, 10).useDefaultMaxWidth,
                l.Nb(t, 10).isDummy,
                l.Nb(t, 11).uiStateListHorizontal,
                l.Nb(t, 11).uiStateListVertical,
                l.Nb(t, 11).uiStateCoverLeft,
                l.Nb(t, 11).uiStateCoverRight,
                l.Nb(t, 11).uiStateCoverBottom,
                l.Nb(t, 11).uiStateButton,
                l.Nb(t, 11).uiStateByDabLeft,
                l.Nb(t, 11).uiStateByDabRight,
                l.Nb(t, 11).uiStateLbDabLeft,
                l.Nb(t, 11).uiStateLbDabRight,
              ]),
              n(t, 14, 1, [
                l.Nb(t, 20).markerClassEnabled,
                l.Nb(t, 21).showSeparatorLeft,
                l.Nb(t, 21).showSeparatorRight,
                l.Nb(t, 21).prio1Main,
                l.Nb(t, 21).prio1SmallScale,
                l.Nb(t, 21).prio2SmallScale,
                l.Nb(t, 21).prio1,
                l.Nb(t, 21).prio2,
                l.Nb(t, 21).prio1IconText,
                l.Nb(t, 21).prio1IconOnly,
                l.Nb(t, 21).prio1TextOnly,
                l.Nb(t, 21).prio2IconText,
                l.Nb(t, 21).prio2IconOnly,
                l.Nb(t, 21).prio2TextOnly,
                l.Nb(t, 21).useDefaultMaxWidth,
                l.Nb(t, 21).isDummy,
              ]));
          },
        );
      }
      class Sl {
        constructor() {
          this.closePopupEmitter = new l.n();
        }
        onOk() {
          this.closePopupEmitter.emit();
        }
      }
      var Nl = l.wb({
        encapsulation: 0,
        styles: [
          [
            '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.first-time-wizard-op[_ngcontent-%COMP%]{position:relative;top:30px}.first-time-wizard-op__ok-button[_ngcontent-%COMP%]{width:466px}',
          ],
        ],
        data: {},
      });
      function Ml(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-operation-panel",
              [
                ["class", "first-time-wizard-op"],
                ["id", "operationPanelLastPage"],
              ],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              Ze.a,
              [Tn.a],
              { alignItemsInside: [0, "alignItemsInside"] },
              null,
            ),
            (n()(),
            l.yb(
              3,
              0,
              null,
              1,
              9,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["class", "first-time-wizard-op__ok-button"],
                ["id", "Ok"],
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
              function (n, t, e) {
                var l = !0;
                return (
                  "mib3Tap" === t && (l = !1 !== n.component.onOk() && l),
                  l
                );
              },
              Ge.b,
              Ge.a,
            )),
            l.xb(
              4,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(5, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              6,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              7,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              9,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              10,
              49152,
              null,
              0,
              je.a,
              [],
              {
                hasText: [0, "hasText"],
                developerText: [1, "developerText"],
                prio1Item: [2, "prio1Item"],
              },
              null,
            ),
            l.xb(
              11,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              12,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "operationPanelLastPage"),
              n(t, 2, 0, !0),
              n(t, 4, 0, "Ok"),
              n(t, 7, 0),
              n(t, 9, 0),
              n(t, 10, 0, !0, "OK", !0));
          },
          function (n, t) {
            (n(t, 0, 0, l.Nb(t, 2).alignInside, l.Nb(t, 2).alignOutside),
              n(t, 3, 1, [
                l.Nb(t, 9).markerClassEnabled,
                l.Nb(t, 10).showSeparatorLeft,
                l.Nb(t, 10).showSeparatorRight,
                l.Nb(t, 10).prio1Main,
                l.Nb(t, 10).prio1SmallScale,
                l.Nb(t, 10).prio2SmallScale,
                l.Nb(t, 10).prio1,
                l.Nb(t, 10).prio2,
                l.Nb(t, 10).prio1IconText,
                l.Nb(t, 10).prio1IconOnly,
                l.Nb(t, 10).prio1TextOnly,
                l.Nb(t, 10).prio2IconText,
                l.Nb(t, 10).prio2IconOnly,
                l.Nb(t, 10).prio2TextOnly,
                l.Nb(t, 10).useDefaultMaxWidth,
                l.Nb(t, 10).isDummy,
              ]));
          },
        );
      }
      var Tl = e("etBF");
      class Al {
        constructor(n, t) {
          ((this.usermanagementActivitiesService = n),
            (this.externalAssistantService = t),
            (this.currentFtwContextEnum = Me.e),
            (this.NextState = Me.i),
            (this.LeaveAndReturnContexts = Me.h),
            (this.UsersRoutes = ol.b),
            (this.contextChangeEmitter = new l.n()),
            (this.closePopupEmitter = new l.n()),
            (this.leaveAndReturnToFtwToDoSettingEmitter = new l.n()));
        }
        ngOnInit() {
          this.alexaLoginDisabledReason$ =
            this.externalAssistantService.alexaLoginDisabledReason$(!0);
        }
        onNextPage() {
          this.contextChangeEmitter.emit(Me.i.nextFtwPage);
        }
        moveToContext(n) {
          this.contextChangeEmitter.emit(n);
        }
        onSkip() {
          this.closePopupEmitter.emit();
        }
        onOk() {
          this.closePopupEmitter.emit();
        }
      }
      var Ll = l.wb({
        encapsulation: 0,
        styles: [
          [
            ".separator[_ngcontent-%COMP%]{height:1px;background:linear-gradient(90deg,#4e4e4e,#fff,#4e4e4e);filter:brightness(150%)}",
          ],
        ],
        data: {},
      });
      function El(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-footer-skip-or-next",
              [["id", "FtwFooterFirstPage"]],
              null,
              [
                [null, "nextPageEmitter"],
                [null, "skipPageEmitter"],
              ],
              function (n, t, e) {
                var l = !0,
                  i = n.component;
                return (
                  "nextPageEmitter" === t && (l = !1 !== i.onNextPage() && l),
                  "skipPageEmitter" === t && (l = !1 !== i.onSkip() && l),
                  l
                );
              },
              Qe,
              Xe,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              Je,
              [],
              { skipPageButtonText: [0, "skipPageButtonText"] },
              {
                nextPageEmitter: "nextPageEmitter",
                skipPageEmitter: "skipPageEmitter",
              },
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "FtwFooterFirstPage"),
              n(t, 2, 0, "Sp\xe4ter einrichten"));
          },
          null,
        );
      }
      function kl(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-footer-language-change",
              [["id", "FtwFooterLanguageChange"]],
              null,
              [[null, "contextChangeEmitter"]],
              function (n, t, e) {
                var l = !0;
                return (
                  "contextChangeEmitter" === t &&
                    (l = !1 !== n.component.onNextPage() && l),
                  l
                );
              },
              al,
              el,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              tl,
              [Zn.a, C.a, h.a, p.a, nl.a],
              { selectedLanguage: [0, "selectedLanguage"] },
              { contextChangeEmitter: "contextChangeEmitter" },
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "FtwFooterLanguageChange"),
              n(t, 2, 0, e.selectedLanguage));
          },
          null,
        );
      }
      function Il(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-footer-skip-or-next",
              [["id", "FtwFooterAccountOverview"]],
              null,
              [
                [null, "nextPageEmitter"],
                [null, "skipPageEmitter"],
              ],
              function (n, t, e) {
                var l = !0,
                  i = n.component;
                return (
                  "nextPageEmitter" === t && (l = !1 !== i.onNextPage() && l),
                  "skipPageEmitter" === t &&
                    (l = !1 !== i.moveToContext(e) && l),
                  l
                );
              },
              Qe,
              Xe,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              Je,
              [],
              {
                nextPageDisabled: [0, "nextPageDisabled"],
                nextPageDisabledReason: [1, "nextPageDisabledReason"],
                skipFtwState: [2, "skipFtwState"],
              },
              {
                nextPageEmitter: "nextPageEmitter",
                skipPageEmitter: "skipPageEmitter",
              },
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "FtwFooterAccountOverview"),
              n(
                t,
                2,
                0,
                e.usermanagementActivitiesService.addingUsersIsBlocked,
                e.usermanagementActivitiesService
                  .addingUserBlockedDisabledReason,
                e.NextState.skipContext,
              ));
          },
          null,
        );
      }
      function Dl(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-footer-account-choice",
              [["id", "FtwFooterAccountChoice"]],
              null,
              [
                [null, "myAudiLoginChoiceEmitter"],
                [null, "offlineAccountChoiceEmitter"],
              ],
              function (n, t, e) {
                var l = !0,
                  i = n.component;
                return (
                  "myAudiLoginChoiceEmitter" === t &&
                    (l =
                      !1 !==
                        i.leaveAndReturnToFtwToDoSettingEmitter.emit(
                          i.LeaveAndReturnContexts.leaveForMyAudiLogin,
                        ) && l),
                  "offlineAccountChoiceEmitter" === t &&
                    (l =
                      !1 !==
                        i.leaveAndReturnToFtwToDoSettingEmitter.emit(
                          i.LeaveAndReturnContexts.leaveToAddOfflineAccount,
                        ) && l),
                  l
                );
              },
              pl,
              rl,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, ul, [it.b], null, {
              myAudiLoginChoiceEmitter: "myAudiLoginChoiceEmitter",
              offlineAccountChoiceEmitter: "offlineAccountChoiceEmitter",
            }),
          ],
          function (n, t) {
            n(t, 1, 0, "FtwFooterAccountChoice");
          },
          null,
        );
      }
      function Fl(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-footer-skip-or-next",
              [["id", "FtwFooterAccountMyaudiNew"]],
              null,
              [
                [null, "skipPageEmitter"],
                [null, "nextPageEmitter"],
              ],
              function (n, t, e) {
                var l = !0,
                  i = n.component;
                return (
                  "skipPageEmitter" === t &&
                    (l = !1 !== i.moveToContext(e) && l),
                  "nextPageEmitter" === t && (l = !1 !== i.onNextPage() && l),
                  l
                );
              },
              Qe,
              Xe,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              Je,
              [],
              { skipFtwState: [0, "skipFtwState"] },
              {
                nextPageEmitter: "nextPageEmitter",
                skipPageEmitter: "skipPageEmitter",
              },
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "FtwFooterAccountMyaudiNew"),
              n(t, 2, 0, e.NextState.skipContext));
          },
          null,
        );
      }
      function zl(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-footer-myaudi-add-car-wifi",
              [["id", "FtwFooterMyaudiAddCarWifi"]],
              null,
              [[null, "contextChangeEmitter"]],
              function (n, t, e) {
                var l = !0;
                return (
                  "contextChangeEmitter" === t &&
                    (l = !1 !== n.component.moveToContext(e) && l),
                  l
                );
              },
              _l,
              dl,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 180224, null, 0, bl, [Pt.a, l.h], null, {
              contextChangeEmitter: "contextChangeEmitter",
            }),
          ],
          function (n, t) {
            n(t, 1, 0, "FtwFooterMyaudiAddCarWifi");
          },
          null,
        );
      }
      function Rl(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-footer-skip-or-next",
              [["id", "FtwFooterMyaudiCreateCarVin"]],
              null,
              [[null, "nextPageEmitter"]],
              function (n, t, e) {
                var l = !0;
                return (
                  "nextPageEmitter" === t &&
                    (l = !1 !== n.component.moveToContext(e) && l),
                  l
                );
              },
              Qe,
              Xe,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              Je,
              [],
              {
                nextPageFtwState: [0, "nextPageFtwState"],
                hasSkipButton: [1, "hasSkipButton"],
              },
              { nextPageEmitter: "nextPageEmitter" },
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "FtwFooterMyaudiCreateCarVin"),
              n(t, 2, 0, e.NextState.nextFtwPage, !1));
          },
          null,
        );
      }
      function Bl(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-footer-skip-or-next",
              [["id", "FtwFooterMainUserNominationInst"]],
              null,
              [
                [null, "nextPageEmitter"],
                [null, "skipPageEmitter"],
              ],
              function (n, t, e) {
                var l = !0,
                  i = n.component;
                return (
                  "nextPageEmitter" === t &&
                    (l =
                      !1 !==
                        i.leaveAndReturnToFtwToDoSettingEmitter.emit(
                          i.LeaveAndReturnContexts.leaveToNominateMainUser,
                        ) && l),
                  "skipPageEmitter" === t &&
                    (l = !1 !== i.moveToContext(e) && l),
                  l
                );
              },
              Qe,
              Xe,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              Je,
              [],
              {
                nextPageDisabled: [0, "nextPageDisabled"],
                nextPageDisabledReason: [1, "nextPageDisabledReason"],
                nextPageRoutingTarget: [2, "nextPageRoutingTarget"],
                skipFtwState: [3, "skipFtwState"],
              },
              {
                nextPageEmitter: "nextPageEmitter",
                skipPageEmitter: "skipPageEmitter",
              },
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "FtwFooterMainUserNominationInst"),
              n(
                t,
                2,
                0,
                e.usermanagementActivitiesService.getActivityDisabled(
                  t.context.mib3Let,
                ),
                e.usermanagementActivitiesService.getActivityDisabledReason(
                  t.context.mib3Let,
                  !0,
                ),
                e.UsersRoutes.UserAccountList.children.OnlineAccount.children
                  .PrimaryUserSettings.children.NominatePrimaryUser,
                e.NextState.skipPage,
              ));
          },
          null,
        );
      }
      function Hl(n) {
        return l.ac(
          0,
          [
            (n()(),
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
            (n()(), l.hb(16777216, null, null, 2, null, Bl)),
            l.xb(
              2,
              16384,
              null,
              0,
              An.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
            (n()(), l.hb(0, null, null, 0)),
          ],
          function (n, t) {
            var e = t.component;
            n(
              t,
              2,
              0,
              l.Yb(
                t,
                2,
                0,
                l
                  .Nb(t, 3)
                  .transform(
                    e.usermanagementActivitiesService
                      .nominatePrimaryUserActivity$,
                  ),
              ),
            );
          },
          null,
        );
      }
      function Ul(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-footer-eula-short",
              [["id", "FtwFooterEulaShort"]],
              null,
              [[null, "contextChangeEmitter"]],
              function (n, t, e) {
                var l = !0;
                return (
                  "contextChangeEmitter" === t &&
                    (l = !1 !== n.component.moveToContext(e) && l),
                  l
                );
              },
              yl,
              Cl,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, Pl, [], null, {
              contextChangeEmitter: "contextChangeEmitter",
            }),
          ],
          function (n, t) {
            n(t, 1, 0, "FtwFooterEulaShort");
          },
          null,
        );
      }
      function Vl(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-footer-eula-long",
              [["id", "FtwFooterEulaLong"]],
              null,
              [[null, "contextChangeEmitter"]],
              function (n, t, e) {
                var l = !0;
                return (
                  "contextChangeEmitter" === t &&
                    (l = !1 !== n.component.moveToContext(e) && l),
                  l
                );
              },
              wl,
              vl,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, Ol, [], null, {
              contextChangeEmitter: "contextChangeEmitter",
            }),
          ],
          function (n, t) {
            n(t, 1, 0, "FtwFooterEulaLong");
          },
          null,
        );
      }
      function $l(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-footer-skip-or-next",
              [["id", "FtwFooterKeywordActivation"]],
              null,
              [[null, "nextPageEmitter"]],
              function (n, t, e) {
                var l = !0;
                return (
                  "nextPageEmitter" === t &&
                    (l = !1 !== n.component.onNextPage() && l),
                  l
                );
              },
              Qe,
              Xe,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              Je,
              [],
              { hasSkipButton: [0, "hasSkipButton"] },
              { nextPageEmitter: "nextPageEmitter" },
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "FtwFooterKeywordActivation"), n(t, 2, 0, !1));
          },
          null,
        );
      }
      function Wl(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-footer-skip-or-next",
              [["id", "FtwFooterAlexaAccountLinking"]],
              null,
              [
                [null, "nextPageEmitter"],
                [null, "skipPageEmitter"],
              ],
              function (n, t, e) {
                var l = !0,
                  i = n.component;
                return (
                  "nextPageEmitter" === t &&
                    (l =
                      !1 !==
                        i.leaveAndReturnToFtwToDoSettingEmitter.emit(
                          i.LeaveAndReturnContexts.leaveToEnterAlexaLoginWebApp,
                        ) && l),
                  "skipPageEmitter" === t &&
                    (l = !1 !== i.moveToContext(e) && l),
                  l
                );
              },
              Qe,
              Xe,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              Je,
              [],
              {
                nextPageDisabled: [0, "nextPageDisabled"],
                nextPageDisabledReason: [1, "nextPageDisabledReason"],
                nextPageButtonText: [2, "nextPageButtonText"],
              },
              {
                nextPageEmitter: "nextPageEmitter",
                skipPageEmitter: "skipPageEmitter",
              },
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, "FtwFooterAlexaAccountLinking"),
              n(
                t,
                2,
                0,
                !!t.context.mib3Let,
                t.context.mib3Let,
                "Verkn\xfcpfen",
              ));
          },
          null,
        );
      }
      function Yl(n) {
        return l.ac(
          0,
          [
            (n()(),
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
            (n()(), l.hb(16777216, null, null, 2, null, Wl)),
            l.xb(
              2,
              16384,
              null,
              0,
              An.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
            (n()(), l.hb(0, null, null, 0)),
          ],
          function (n, t) {
            var e = t.component;
            n(
              t,
              2,
              0,
              l.Yb(t, 2, 0, l.Nb(t, 3).transform(e.alexaLoginDisabledReason$)),
            );
          },
          null,
        );
      }
      function Gl(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-footer-skip-or-next",
              [["id", "FtwFooterPhoneOverview"]],
              null,
              [
                [null, "nextPageEmitter"],
                [null, "skipPageEmitter"],
              ],
              function (n, t, e) {
                var l = !0,
                  i = n.component;
                return (
                  "nextPageEmitter" === t &&
                    (l =
                      !1 !==
                        i.leaveAndReturnToFtwToDoSettingEmitter.emit(
                          i.LeaveAndReturnContexts.leaveForPhoneSetup,
                        ) && l),
                  "skipPageEmitter" === t &&
                    (l = !1 !== i.moveToContext(e) && l),
                  l
                );
              },
              Qe,
              Xe,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              Je,
              [],
              { skipFtwState: [0, "skipFtwState"] },
              {
                nextPageEmitter: "nextPageEmitter",
                skipPageEmitter: "skipPageEmitter",
              },
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "FtwFooterPhoneOverview"),
              n(t, 2, 0, e.NextState.skipPage));
          },
          null,
        );
      }
      function jl(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-ftw-footer-last-page",
              [["id", "FtwFooterLastPage"]],
              null,
              [[null, "closePopupEmitter"]],
              function (n, t, e) {
                var l = !0;
                return (
                  "closePopupEmitter" === t &&
                    (l = !1 !== n.component.onOk() && l),
                  l
                );
              },
              Ml,
              Nl,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, Sl, [], null, {
              closePopupEmitter: "closePopupEmitter",
            }),
          ],
          function (n, t) {
            n(t, 1, 0, "FtwFooterLastPage");
          },
          null,
        );
      }
      function Kl(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              0,
              "div",
              [["class", "separator"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              29,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            l.xb(
              2,
              16384,
              null,
              0,
              yn.o,
              [],
              { ngSwitch: [0, "ngSwitch"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, El)),
            l.xb(
              4,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, kl)),
            l.xb(
              6,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Il)),
            l.xb(
              8,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Dl)),
            l.xb(
              10,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Fl)),
            l.xb(
              12,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, zl)),
            l.xb(
              14,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Rl)),
            l.xb(
              16,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Hl)),
            l.xb(
              18,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Ul)),
            l.xb(
              20,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Vl)),
            l.xb(
              22,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, $l)),
            l.xb(
              24,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Yl)),
            l.xb(
              26,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Gl)),
            l.xb(
              28,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, jl)),
            l.xb(
              30,
              278528,
              null,
              0,
              yn.p,
              [l.P, l.L, yn.o],
              { ngSwitchCase: [0, "ngSwitchCase"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 2, 0, e.currentFtwContext),
              n(t, 4, 0, e.currentFtwContextEnum.firstFtwPage),
              n(t, 6, 0, e.currentFtwContextEnum.languageSelection),
              n(t, 8, 0, e.currentFtwContextEnum.accountOverview),
              n(t, 10, 0, e.currentFtwContextEnum.accountChoice),
              n(t, 12, 0, e.currentFtwContextEnum.accountMyAudiNew),
              n(t, 14, 0, e.currentFtwContextEnum.myAudiAddCarWifi),
              n(t, 16, 0, e.currentFtwContextEnum.myAudiCreateCarVin),
              n(
                t,
                18,
                0,
                e.currentFtwContextEnum.mainUserNominationInstruction,
              ),
              n(t, 20, 0, e.currentFtwContextEnum.eulaShort),
              n(t, 22, 0, e.currentFtwContextEnum.eulaLong),
              n(t, 24, 0, e.currentFtwContextEnum.keywordActivation),
              n(t, 26, 0, e.currentFtwContextEnum.alexaAccountLinking),
              n(t, 28, 0, e.currentFtwContextEnum.phoneSettings),
              n(t, 30, 0, e.currentFtwContextEnum.lastFtwPage));
          },
          null,
        );
      }
      var Zl = e("D57K"),
        Jl = e("TLy2"),
        Xl = e("Ohay"),
        ql = e("3mST"),
        Ql = e("BwBJ"),
        ni = e("jIqt"),
        ti = e("ROBh"),
        ei = e("6qsK"),
        li = e("csfA");
      let ii = (() => {
        class n {
          constructor(n, t, e, l, i, a, o, u) {
            ((this.ftwService = n),
              (this.globalRoutingService = t),
              (this.externalAssistantService = e),
              (this.disclaimerService = l),
              (this.languageService = i),
              (this.popupManger = a),
              (this.popupType = rn.Rb),
              (this.popupIds = rn.Ob),
              (this.currentFtwContextEnum = Me.e),
              (this.currentFtwIconContextEnum = Me.a),
              (this.FtwDefaultContexts = Me.f),
              (this.destroy$$ = new Yn.a(1)),
              (this.sidebarCategoryPlaceholders = []),
              (this.logger = u.getLogger("help.FirstTimeWizardComponent")),
              (this.artf18DisclaimerSubscription = l.registerDisclaimer({
                priority: rn.D.LockingFTW,
                enabled$: o
                  .getProperty(Me.b[0].lockingKey)
                  .pipe(Object(Jl.a)((n) => n.lock$)),
                reason$: Object(ti.a)(rn.Db.DEFAULT_LOCKING_DISCLAIMER),
              })));
            const r = {
                type: rn.Eb.SCREEN,
                context: rn.Bb.DEFAULT_CONTEXT,
                category: rn.Ab.LONG_TEXT,
              },
              s = this.ftwService.currentFtwContext$.pipe(
                Object(Xl.a)(),
                Object(tt.a)((n) => {
                  const t =
                    n !== Me.e.languageSelection &&
                    n !== Me.e.keywordActivation;
                  return (
                    this.logger.info(
                      `constructor: currentFtwContext=${n}, ${t ? "enable" : "disable"} for artf6.`,
                    ),
                    t
                  );
                }),
                Object(Gn.a)(this.destroy$$),
              );
            ((this.artf6DisclaimerSubscription = l.registerDisclaimer({
              priority: rn.D.LockingLongText,
              enabled$: Object(Kt.b)(
                s,
                o.getProperty(r).pipe(Object(Jl.a)((n) => n.lock$)),
              ).pipe(Object(tt.a)(([n, t]) => n && t)),
              reason$: Object(ti.a)(rn.B.LOCKING_LONG_TEXT),
            })),
              (this.triggerTitleTranslation$ =
                this.languageService.currentLanguage$.pipe(
                  Object(ql.a)(1),
                  Object(Xl.a)(),
                  Object(Gn.a)(this.destroy$$),
                  Object(Jl.a)(() =>
                    Object(ti.a)(void 0).pipe(
                      Object(Ql.a)(1),
                      Object(ni.a)(""),
                    ),
                  ),
                )));
          }
          ngOnInit() {
            (this.popupManger
              .getRequestData(rn.Ob.POPUP_FTW)
              .pipe(
                Object(et.a)(1),
                Object(tt.a)((n) => (n ? n.context : void 0)),
              )
              .subscribe((n) => {
                (this.ftwService.setPushNotificationOnFtwCloseBlocked(!1),
                  Object(rn.wd)(n) &&
                    (this.logger.info(
                      "ngOnInit(): FTW was requested with context ",
                      n,
                    ),
                    n === it.a.ADD_OFFLINE_ACCOUNT
                      ? (this.logger.info(
                          ".... will open user account settings page",
                          n,
                        ),
                        this.ftwService.configureFtwToStartFromPsoContext(!1))
                      : n === it.a.RETURN_AFTER_ADD_ACCOUNT
                        ? (this.logger.info(
                            ".... will skip to next available FTW page",
                            n,
                          ),
                          this.ftwService.configureFtwToStartFromPsoContext(!0))
                        : n === it.a.ALEXA_ACCOUNT_LINKING
                          ? (this.logger.info(
                              ".... will go to next FTW page after Alexa account linking",
                              n,
                            ),
                            this.onNextFtwPage(Me.i.nextFtwPage))
                          : n === it.a.ABORT_EXTERNAL_CONFIGURATION &&
                            this.ftwService.getActiveFtwLeaveAndReturnContext() ===
                              Me.h.leaveToNominateMainUser &&
                            (this.logger.info(
                              ".... will skip to next available FTW context after main user nomination",
                              n,
                            ),
                            this.onNextFtwPage(Me.i.nextFtwPage))),
                  this.ftwService.setActiveFtwLeaveAndReturnContext(void 0),
                  this.ftwService.setStartUpContext());
              }),
              (this.languageSelectionFinished$ =
                this.ftwService.isContextFinished$(Me.e.languageSelection)),
              (this.phoneSettingsAvailable$ =
                this.ftwService.isContextAvailable$(Me.e.phoneSettings)),
              (this.phoneSettingsFinished$ = this.ftwService.isContextFinished$(
                Me.e.phoneSettings,
              )),
              (this.profileSettingsAvailable$ =
                this.ftwService.isCategoryAvailable$(Me.d.accountSettings)),
              (this.profileSettingsFinished$ =
                this.ftwService.isCategoryFinished$(Me.d.accountSettings)),
              (this.myAudiSettingsAvailable$ = Object(Kt.b)(
                this.ftwService.isCategoryAvailable$(Me.d.eula),
                this.ftwService.isCategoryAvailable$(Me.d.myAudi),
                this.ftwService.isCategoryAvailable$(Me.d.mainUserNomination),
              ).pipe(Object(tt.a)(([n, t, e]) => n || t || e))),
              (this.myAudiSettingsFinished$ = Object(Kt.b)(
                this.ftwService.isCategoryFinished$(Me.d.myAudi),
                this.ftwService.isCategoryFinished$(Me.d.mainUserNomination),
                this.ftwService.isCategoryFinished$(Me.d.eula),
              ).pipe(Object(tt.a)(([n, t, e]) => n && t && e))),
              this.initSidebarCategoryPlaceholders());
          }
          initSidebarCategoryPlaceholders() {
            Object(Kt.b)(
              this.profileSettingsAvailable$.pipe(Object(ni.a)(!1)),
              this.myAudiSettingsAvailable$.pipe(Object(ni.a)(!1)),
              this.phoneSettingsAvailable$.pipe(Object(ni.a)(!1)),
            )
              .pipe(
                Object(tt.a)((n) => n.filter((n) => !!n).length),
                Object(Gn.a)(this.destroy$$),
              )
              .subscribe((n) => {
                this.sidebarCategoryPlaceholders = new Array(3 - n);
              });
          }
          onNextFtwPage(n) {
            this.ftwService.currentFtwContext !== Me.e.accountOverview ||
            n !== Me.i.nextFtwPage ||
            this.ftwService.isMyAudiLoginAvailable
              ? this.ftwService.nextPage(n)
              : this.onLeaveFtwPopupThenReturn(Me.h.leaveToAddOfflineAccount);
          }
          onPreviousPage() {
            this.ftwService.nextPage(Me.i.previousFtwPage);
          }
          onClosePopup() {
            (this.ftwService.setPushNotificationOnFtwCloseBlocked(!0),
              this.popup && this.popup.onCloseTapped());
          }
          onSelectedLanguage(n) {
            this.selectedLanguage = n;
          }
          onLeaveFtwPopupThenReturn(n) {
            switch (n) {
              case Me.h.leaveForPhoneSetup:
                if (this.ftwService.canBondMorePhones) {
                  this.goToExternalContextScreen(ei.b.NotConnected, n);
                  break;
                }
                return (
                  this.logger.warn(
                    "onLeaveFtwPopupThenReturn: skip Phone Context. Cannot add more phones.",
                  ),
                  void this.ftwService.nextPage(Me.i.nextFtwPage)
                );
              case Me.h.leaveToNominateMainUser:
                this.goToExternalContextScreen(
                  ol.b.UserAccountList.children.OnlineAccount.children
                    .PrimaryUserSettings.children.NominatePrimaryUser,
                  n,
                );
                break;
              case Me.h.leaveToAddOfflineAccount:
                this.goToExternalContextScreen(
                  this.ftwService.isMyAudiLoginAvailable
                    ? ol.b.AddOfflineAccount.children.Info
                    : ol.b.AddOfflineAccount,
                  n,
                );
                break;
              case Me.h.leaveForMyAudiLogin:
                this.goToExternalContextScreen(ol.b.MyAudiLogin, n);
                break;
              case Me.h.leaveToEnterAlexaLoginWebApp:
                this.onEnterAlexaLoginApp();
            }
          }
          goToExternalContextScreen(n, t) {
            (void 0 !== t &&
              this.ftwService.setActiveFtwLeaveAndReturnContext(t),
              this.globalRoutingService.goTo(n, null, {
                navigationExtras: {
                  queryParams: { [li.a.RETURN_TO_FIRST_TIME_WIZARD]: !0 },
                },
              }),
              this.popup && this.popup.onCloseTapped());
          }
          onEnterAlexaLoginApp() {
            (this.ftwService.setActiveFtwLeaveAndReturnContext(
              Me.h.leaveToEnterAlexaLoginWebApp,
            ),
              this.externalAssistantService.enterAlexaLoginApp(!0),
              this.popup && this.popup.onCloseTapped());
          }
          ngOnDestroy() {
            (this.disclaimerService.unregisterDisclaimer(
              this.artf18DisclaimerSubscription,
            ),
              this.disclaimerService.unregisterDisclaimer(
                this.artf6DisclaimerSubscription,
              ),
              this.destroy$$.next(),
              this.destroy$$.complete());
          }
        }
        return (
          Object(Zl.b)(
            [
              rn.jb,
              Object(Zl.c)("design:type", Function),
              Object(Zl.c)("design:paramtypes", []),
              Object(Zl.c)("design:returntype", void 0),
            ],
            n.prototype,
            "initSidebarCategoryPlaceholders",
            null,
          ),
          n
        );
      })();
      var ai = l.wb({
        encapsulation: 0,
        styles: [
          [
            '@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{position:relative;display:block;height:640px}.ftw-popup--high[_nghost-%COMP%]{width:1438px}.ftw-popup--med[_nghost-%COMP%]{width:1178px}.first-time-wizard__title[_ngcontent-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular)}.disclaimer[_ngcontent-%COMP%]{height:100%;max-width:100%}.first-time-wizard-content[_ngcontent-%COMP%]{display:grid;position:relative;height:538px}.first-time-wizard-footer[_ngcontent-%COMP%]{position:relative;display:block;grid-area:footer;height:146px}.first-time-wizard-sidebar[_ngcontent-%COMP%]{position:relative;grid-area:sidebar;width:149px;height:392px;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.first-time-wizard-main[_ngcontent-%COMP%]{position:relative;grid-area:main;height:392px}.steering-wheel-left[_nghost-%COMP%]   .first-time-wizard-content[_ngcontent-%COMP%], .steering-wheel-left   [_nghost-%COMP%]   .first-time-wizard-content[_ngcontent-%COMP%]{grid-template-areas:"sidebar main" "footer footer";grid-template-columns:149px calc(100% - 149px)}.steering-wheel-right[_nghost-%COMP%]   .first-time-wizard-content[_ngcontent-%COMP%], .steering-wheel-right   [_nghost-%COMP%]   .first-time-wizard-content[_ngcontent-%COMP%]{grid-template-areas:"main sidebar" "footer footer";grid-template-columns:calc(100% - 149px) 149px}',
          ],
        ],
        data: {
          animation: [
            {
              type: 7,
              name: "childAnim",
              definitions: [
                {
                  type: 1,
                  expr: ":leave",
                  animation: {
                    type: 11,
                    selector: ":leave",
                    animation: { type: 9, options: null },
                    options: null,
                  },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function oi(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-first-time-wizard-sidebar-category",
              [],
              null,
              null,
              null,
              Sn,
              vn,
            )),
            l.xb(
              1,
              49152,
              null,
              0,
              On,
              [],
              {
                isFinished: [0, "isFinished"],
                isDisabled: [1, "isDisabled"],
                icon: [2, "icon"],
              },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
          ],
          function (n, t) {
            var e = t.component;
            n(
              t,
              1,
              0,
              l.Yb(t, 1, 0, l.Nb(t, 2).transform(e.profileSettingsFinished$)),
              t.parent.context.mib3Let !==
                e.currentFtwIconContextEnum.profileSettings,
              "E401_car_personalize_profile_guest.webp",
            );
          },
          null,
        );
      }
      function ui(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-first-time-wizard-sidebar-category",
              [],
              null,
              null,
              null,
              Sn,
              vn,
            )),
            l.xb(
              1,
              49152,
              null,
              0,
              On,
              [],
              {
                isFinished: [0, "isFinished"],
                isDisabled: [1, "isDisabled"],
                icon: [2, "icon"],
              },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
          ],
          function (n, t) {
            var e = t.component;
            n(
              t,
              1,
              0,
              l.Yb(t, 1, 0, l.Nb(t, 2).transform(e.myAudiSettingsFinished$)),
              t.parent.context.mib3Let !==
                e.currentFtwIconContextEnum.myaudiSettings,
              "E410_wizard_connect_myaudi.webp",
            );
          },
          null,
        );
      }
      function ri(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-first-time-wizard-sidebar-category",
              [],
              null,
              null,
              null,
              Sn,
              vn,
            )),
            l.xb(
              1,
              49152,
              null,
              0,
              On,
              [],
              {
                isFinished: [0, "isFinished"],
                isDisabled: [1, "isDisabled"],
                icon: [2, "icon"],
              },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
          ],
          function (n, t) {
            var e = t.component;
            n(
              t,
              1,
              0,
              l.Yb(t, 1, 0, l.Nb(t, 2).transform(e.phoneSettingsFinished$)),
              t.parent.context.mib3Let !==
                e.currentFtwIconContextEnum.phoneSettings,
              "E00A_phone.webp",
            );
          },
          null,
        );
      }
      function si(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              13,
              "div",
              [
                ["class", "first-time-wizard-sidebar"],
                ["id", "FirstTimeWizardSidebar"],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (n()(),
            l.yb(
              2,
              0,
              null,
              null,
              2,
              "au3-first-time-wizard-sidebar-category",
              [],
              null,
              null,
              null,
              Sn,
              vn,
            )),
            l.xb(
              3,
              49152,
              null,
              0,
              On,
              [],
              {
                isFinished: [0, "isFinished"],
                isDisabled: [1, "isDisabled"],
                icon: [2, "icon"],
              },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
            (n()(), l.hb(16777216, null, null, 2, null, oi)),
            l.xb(
              6,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
            (n()(), l.hb(16777216, null, null, 2, null, ui)),
            l.xb(
              9,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
            (n()(), l.hb(16777216, null, null, 2, null, ri)),
            l.xb(
              12,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "FirstTimeWizardSidebar"),
              n(
                t,
                3,
                0,
                l.Yb(
                  t,
                  3,
                  0,
                  l.Nb(t, 4).transform(e.languageSelectionFinished$),
                ),
                t.context.mib3Let !==
                  e.currentFtwIconContextEnum.languageSelection,
                "E28A_ftu_language_selection.webp",
              ),
              n(
                t,
                6,
                0,
                l.Yb(
                  t,
                  6,
                  0,
                  l.Nb(t, 7).transform(e.profileSettingsAvailable$),
                ),
              ),
              n(
                t,
                9,
                0,
                l.Yb(
                  t,
                  9,
                  0,
                  l.Nb(t, 10).transform(e.myAudiSettingsAvailable$),
                ),
              ),
              n(
                t,
                12,
                0,
                l.Yb(
                  t,
                  12,
                  0,
                  l.Nb(t, 13).transform(e.phoneSettingsAvailable$),
                ),
              ));
          },
          null,
        );
      }
      function ci(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              21,
              "au3-popup",
              [
                ["class", "first-time-wizard__title"],
                ["id", "POPUP:PopupFirstTimeWizard"],
              ],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                [null, "backTapped"],
                [null, "returnMessage"],
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (n, t, e) {
                var i = !0,
                  a = n.component;
                return (
                  "component:@a276-popup-animation.start" === t &&
                    (i = !1 !== l.Nb(n, 7).animationStart(e) && i),
                  "component:@a276-popup-animation.done" === t &&
                    (i = !1 !== l.Nb(n, 7).animationFinished(e) && i),
                  "popup:keydown.Backspace" === t &&
                    (i = !1 !== l.Nb(n, 7).handleHkBackEvent() && i),
                  "backTapped" === t && (i = !1 !== a.onPreviousPage() && i),
                  "returnMessage" === t &&
                    (i = !1 !== a.ftwService.processClosingFtw() && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            l.Sb(6144, null, o.a, null, [u.b]),
            l.Sb(6144, null, r.b, null, [u.b]),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(4, 16384, null, 0, b.a, [l.l], null, null),
            l.Sb(512, null, d.a, d.a, []),
            l.Sb(131584, null, m.a, m.a, []),
            l.xb(
              7,
              4964352,
              [
                [1, 4],
                ["PopupFirstTimeWizard", 4],
              ],
              1,
              u.b,
              [
                h.a,
                g.a,
                d.a,
                l.l,
                f.a,
                x.m,
                _.a,
                p.a,
                l.h,
                P.a,
                C.a,
                m.a,
                y.b,
                O.b,
                l.z,
                [2, v.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                popupTitle: [2, "popupTitle"],
                nonI18nTitle: [3, "nonI18nTitle"],
                surviveScreenChange: [4, "surviveScreenChange"],
                darkenBackground: [5, "darkenBackground"],
                dynamicSize: [6, "dynamicSize"],
                backButtonVisible: [7, "backButtonVisible"],
                closeOnBack: [8, "closeOnBack"],
                hasText: [9, "hasText"],
              },
              { backTapped: "backTapped", returnMessage: "returnMessage" },
            ),
            l.Tb(603979776, 2, { dialogButtons: 1 }),
            l.Pb(131072, yn.b, [l.h]),
            (n()(),
            l.yb(
              10,
              0,
              null,
              1,
              11,
              "au3-disclaimer",
              [
                ["class", "disclaimer"],
                ["id", "FirstTimeWizardDisclaimer"],
              ],
              null,
              null,
              null,
              Nn.b,
              Nn.a,
            )),
            l.xb(
              11,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              12,
              4440064,
              null,
              0,
              Mn.a,
              [Tn.a, [2, s.a], l.h, p.a],
              null,
              null,
            ),
            (n()(),
            l.yb(
              13,
              0,
              [["firstTimeWizardContent", 1]],
              0,
              8,
              "div",
              [["class", "first-time-wizard-content"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), l.hb(16777216, null, null, 1, null, si)),
            l.xb(
              15,
              16384,
              null,
              0,
              An.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            (n()(),
            l.yb(
              16,
              0,
              null,
              null,
              2,
              "au3-first-time-wizard-main",
              [
                ["class", "first-time-wizard-main"],
                ["id", "FirstTimeWizardMainContent"],
              ],
              null,
              [[null, "selectedLanguageEmitter"]],
              function (n, t, e) {
                var l = !0;
                return (
                  "selectedLanguageEmitter" === t &&
                    (l = !1 !== n.component.onSelectedLanguage(e) && l),
                  l
                );
              },
              Ye,
              Ae,
            )),
            l.xb(
              17,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              18,
              49152,
              null,
              0,
              Te,
              [],
              { currentFtwContext: [0, "currentFtwContext"] },
              { selectedLanguageEmitter: "selectedLanguageEmitter" },
            ),
            (n()(),
            l.yb(
              19,
              0,
              null,
              null,
              2,
              "au3-first-time-wizard-footer",
              [
                ["class", "first-time-wizard-footer"],
                ["id", "FirstTimeWizardFooter"],
              ],
              null,
              [
                [null, "contextChangeEmitter"],
                [null, "leaveAndReturnToFtwToDoSettingEmitter"],
                [null, "closePopupEmitter"],
              ],
              function (n, t, e) {
                var l = !0,
                  i = n.component;
                return (
                  "contextChangeEmitter" === t &&
                    (l = !1 !== i.onNextFtwPage(e) && l),
                  "leaveAndReturnToFtwToDoSettingEmitter" === t &&
                    (l = !1 !== i.onLeaveFtwPopupThenReturn(e) && l),
                  "closePopupEmitter" === t &&
                    (l = !1 !== i.onClosePopup() && l),
                  l
                );
              },
              Kl,
              Ll,
            )),
            l.xb(
              20,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              21,
              114688,
              null,
              0,
              Al,
              [it.b, Tl.a],
              {
                currentFtwContext: [0, "currentFtwContext"],
                selectedLanguage: [1, "selectedLanguage"],
              },
              {
                contextChangeEmitter: "contextChangeEmitter",
                closePopupEmitter: "closePopupEmitter",
                leaveAndReturnToFtwToDoSettingEmitter:
                  "leaveAndReturnToFtwToDoSettingEmitter",
              },
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, "POPUP:PopupFirstTimeWizard"),
              n(
                t,
                7,
                0,
                e.popupIds.POPUP_FTW,
                e.popupType.FullscreenPopup,
                "Herzlich Willkommen",
                l.Yb(t, 7, 3, l.Nb(t, 9).transform(e.triggerTitleTranslation$)),
                !0,
                !0,
                !1,
                t.context.mib3Let !== e.currentFtwContextEnum.firstFtwPage,
                !1,
                !1,
              ),
              n(t, 11, 0, "FirstTimeWizardDisclaimer"),
              n(t, 12, 0),
              n(
                t,
                15,
                0,
                null == e.FtwDefaultContexts[t.context.mib3Let]
                  ? null
                  : e.FtwDefaultContexts[t.context.mib3Let].contextIcon,
              ),
              n(t, 17, 0, "FirstTimeWizardMainContent"),
              n(t, 18, 0, t.context.mib3Let),
              n(t, 20, 0, "FirstTimeWizardFooter"),
              n(t, 21, 0, t.context.mib3Let, e.selectedLanguage));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 7).popupAnimBinding,
              l.Nb(t, 7).animated,
              l.Nb(t, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      function pi(n) {
        return l.ac(
          2,
          [
            l.Tb(671088640, 1, { popup: 0 }),
            (n()(), l.hb(16777216, null, null, 2, null, ci)),
            l.xb(
              2,
              16384,
              null,
              0,
              An.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
          ],
          function (n, t) {
            var e = t.component;
            n(
              t,
              2,
              0,
              l.Yb(
                t,
                2,
                0,
                l
                  .Nb(t, 3)
                  .transform(
                    null == e.ftwService
                      ? null
                      : e.ftwService.currentFtwContext$,
                  ),
              ),
            );
          },
          null,
        );
      }
      var bi = e("DMnB"),
        di = e("ujto"),
        mi = e("x/EA");
      class hi {
        constructor() {
          ((this.PopupType = rn.Rb),
            (this.popupId = rn.Ob.POPUP_PHONE_POPUP_cBox_NOT_FUNC));
        }
      }
      var gi = l.wb({
        encapsulation: 0,
        styles: [["[_nghost-%COMP%]{display:block}"]],
        data: {
          animation: [
            {
              type: 7,
              name: "childAnim",
              definitions: [
                {
                  type: 1,
                  expr: ":leave",
                  animation: {
                    type: 11,
                    selector: ":leave",
                    animation: { type: 9, options: null },
                    options: null,
                  },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function fi(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-popup",
              [["id", "CBoxNotFunctionalPopup"]],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (n, t, e) {
                var i = !0;
                return (
                  "component:@a276-popup-animation.start" === t &&
                    (i = !1 !== l.Nb(n, 7).animationStart(e) && i),
                  "component:@a276-popup-animation.done" === t &&
                    (i = !1 !== l.Nb(n, 7).animationFinished(e) && i),
                  "popup:keydown.Backspace" === t &&
                    (i = !1 !== l.Nb(n, 7).handleHkBackEvent() && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            l.Sb(6144, null, o.a, null, [u.b]),
            l.Sb(6144, null, r.b, null, [u.b]),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(4, 16384, null, 0, b.a, [l.l], null, null),
            l.Sb(512, null, d.a, d.a, []),
            l.Sb(131584, null, m.a, m.a, []),
            l.xb(
              7,
              4964352,
              null,
              1,
              u.b,
              [
                h.a,
                g.a,
                d.a,
                l.l,
                f.a,
                x.m,
                _.a,
                p.a,
                l.h,
                P.a,
                C.a,
                m.a,
                y.b,
                O.b,
                l.z,
                [2, v.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                popupTitle: [2, "popupTitle"],
                backButtonVisible: [3, "backButtonVisible"],
                text: [4, "text"],
              },
              null,
            ),
            l.Tb(603979776, 1, { dialogButtons: 1 }),
            (n()(),
            l.yb(
              9,
              0,
              null,
              2,
              3,
              "au3-popup-dialog-button",
              [["id", "ConfirmPopupButton"]],
              null,
              null,
              null,
              bi.b,
              bi.a,
            )),
            l.xb(
              10,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              11,
              49152,
              null,
              0,
              di.a,
              [[2, s.a], l.l],
              { developerText: [0, "developerText"] },
              null,
            ),
            l.Sb(2048, [[1, 4]], mi.a, null, [di.a]),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, "CBoxNotFunctionalPopup"),
              n(
                t,
                7,
                0,
                e.popupId,
                e.PopupType.FullscreenPopup,
                "Hinweis",
                !0,
                "Die Telefoniefunktion ist im Moment nicht verf\xfcgbar.",
              ),
              n(t, 10, 0, "ConfirmPopupButton"),
              n(t, 11, 0, "OK"));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 7).popupAnimBinding,
              l.Nb(t, 7).animated,
              l.Nb(t, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      var xi = e("XOjC"),
        _i = e("7r1m"),
        Pi = e("948h"),
        Ci = e("YEFf"),
        yi = e("Zbi+"),
        Oi = e("hBG2"),
        vi = e("xVbo"),
        wi = e("YzIb"),
        Si = e("AYqq");
      class Ni {
        constructor(n, t, e, l, i) {
          ((this.phoneService = n),
            (this.callOperationsService = t),
            (this.popupManager = e),
            (this.rejectWithSmsService = l),
            (this.context = rn.s.Phone),
            (this.popupType = rn.Rb.FullscreenPopup),
            (this.popupId = rn.Ob.POPUP_PHONE_CALL_INCOMING),
            (this.callOperationEnum = Oi.a),
            (this.callTextEnum = wi.c),
            (this.destroyed$$ = new Yn.a(1)),
            (this.logger = i.getLogger("phone.IncomingCallComponent")));
        }
        get phoneName() {
          const n =
            this.call &&
            this.call.phoneDevice &&
            this.phoneService.getDeviceForId(this.call.phoneDevice.id);
          return (n && n.name) || void 0;
        }
        ngOnInit() {
          ((this.canAcceptToActive$ = this.phoneService.calls$.pipe(
            Object(tt.a)((n) => {
              const t = n.incomingCall;
              if (n.filter((n) => !n.isIncoming).length >= 2) return !1;
              {
                const n = this.callOperationsService.isPossible(t, Oi.a.Accept),
                  e = this.callOperationsService.isPossible(
                    t,
                    Oi.a.AcceptAndReplace,
                  );
                return n || e ? t && n : null;
              }
            }),
            Object(vi.a)(rn.wd),
          )),
            (this.canAcceptToHold$ = this.phoneService.calls$.pipe(
              Object(tt.a)((n) => {
                const t = n.incomingCall;
                return (
                  !(n.filter((n) => !n.isIncoming).length >= 2) &&
                  !(!t || !t.availableTransitions) &&
                  t.availableTransitions.includes(yi.c.ACCEPTTOHOLD)
                );
              }),
            )),
            this.phoneService.calls$
              .pipe(
                Object(tt.a)((n) => n.incomingCall),
                Object(Gn.a)(this.destroyed$$),
              )
              .subscribe((n) => {
                n || rn.gd.textToolMode
                  ? (this.call = n)
                  : this.popupManager.unrequest(this.popupId);
              }));
        }
        hangUpCall() {
          (this.call &&
            (this.logger.info(
              "hanging up incoming call and setting its ID",
              this.call.id,
            ),
            (this.phoneService.hungUpIncomingCallId = this.call.id)),
            this.callOperationsService.perform(this.call, Oi.a.HangUp));
        }
        ngOnDestroy() {
          this.destroyed$$.next();
        }
      }
      var Mi = l.wb({
        encapsulation: 0,
        styles: [
          [
            ".content[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column;justify-content:space-between}.call-info[_ngcontent-%COMP%]{margin:-7px 48px 0 42px}.operation-panel[_ngcontent-%COMP%]{margin-bottom:20px}.accept[_ngcontent-%COMP%]{max-width:500px}",
          ],
        ],
        data: {
          animation: [
            {
              type: 7,
              name: "childAnim",
              definitions: [
                {
                  type: 1,
                  expr: ":leave",
                  animation: {
                    type: 11,
                    selector: ":leave",
                    animation: { type: 9, options: null },
                    options: null,
                  },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function Ti(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["class", "accept"],
                ["developerText", "Annehmen"],
                ["icon", "E6C5_phone_continue_call.webp"],
                ["id", "Annehmen"],
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
              function (n, t, e) {
                var l = !0,
                  i = n.component;
                return (
                  "mib3Tap" === t &&
                    (l =
                      !1 !==
                        i.callOperationsService.perform(
                          i.call,
                          i.callOperationEnum.Accept,
                        ) && l),
                  l
                );
              },
              Ge.b,
              Ge.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              4,
              147456,
              null,
              0,
              E.a,
              [k.a, l.h, p.a, [3, E.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              7,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              8,
              49152,
              null,
              0,
              je.a,
              [],
              {
                developerText: [0, "developerText"],
                icon: [1, "icon"],
                prio1Item: [2, "prio1Item"],
              },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "Annehmen"),
              n(
                t,
                4,
                0,
                !e.callOperationsService.isPossible(
                  e.call,
                  e.callOperationEnum.Accept,
                ),
              ),
              n(t, 5, 0),
              n(t, 7, 0),
              n(t, 8, 0, "Annehmen", "E6C5_phone_continue_call.webp", !0));
          },
          function (n, t) {
            n(t, 0, 1, [
              l.Nb(t, 4).combinedDisabled,
              l.Nb(t, 4).useBrighterIcon,
              l.Nb(t, 7).markerClassEnabled,
              l.Nb(t, 8).showSeparatorLeft,
              l.Nb(t, 8).showSeparatorRight,
              l.Nb(t, 8).prio1Main,
              l.Nb(t, 8).prio1SmallScale,
              l.Nb(t, 8).prio2SmallScale,
              l.Nb(t, 8).prio1,
              l.Nb(t, 8).prio2,
              l.Nb(t, 8).prio1IconText,
              l.Nb(t, 8).prio1IconOnly,
              l.Nb(t, 8).prio1TextOnly,
              l.Nb(t, 8).prio2IconText,
              l.Nb(t, 8).prio2IconOnly,
              l.Nb(t, 8).prio2TextOnly,
              l.Nb(t, 8).useDefaultMaxWidth,
              l.Nb(t, 8).isDummy,
            ]);
          },
        );
      }
      function Ai(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-operation-panel-item",
              [
                ["center", ""],
                ["class", "accept"],
                ["icon", "E6C5_phone_continue_call.webp"],
                ["id", "Ersetzen"],
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
              function (n, t, e) {
                var l = !0,
                  i = n.component;
                return (
                  "mib3Tap" === t &&
                    (l =
                      !1 !==
                        i.callOperationsService.perform(
                          i.call,
                          i.callOperationEnum.AcceptAndReplace,
                        ) && l),
                  l
                );
              },
              Ge.b,
              Ge.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              4,
              147456,
              null,
              0,
              E.a,
              [k.a, l.h, p.a, [3, E.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              7,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              8,
              49152,
              null,
              0,
              je.a,
              [],
              {
                developerText: [0, "developerText"],
                icon: [1, "icon"],
                prio1Item: [2, "prio1Item"],
              },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "Ersetzen"),
              n(
                t,
                4,
                0,
                !e.callOperationsService.isPossible(
                  e.call,
                  e.callOperationEnum.AcceptAndReplace,
                ),
              ),
              n(t, 5, 0),
              n(t, 7, 0),
              n(
                t,
                8,
                0,
                e.callTextEnum.ReplaceCall,
                "E6C5_phone_continue_call.webp",
                !0,
              ));
          },
          function (n, t) {
            n(t, 0, 1, [
              l.Nb(t, 4).combinedDisabled,
              l.Nb(t, 4).useBrighterIcon,
              l.Nb(t, 7).markerClassEnabled,
              l.Nb(t, 8).showSeparatorLeft,
              l.Nb(t, 8).showSeparatorRight,
              l.Nb(t, 8).prio1Main,
              l.Nb(t, 8).prio1SmallScale,
              l.Nb(t, 8).prio2SmallScale,
              l.Nb(t, 8).prio1,
              l.Nb(t, 8).prio2,
              l.Nb(t, 8).prio1IconText,
              l.Nb(t, 8).prio1IconOnly,
              l.Nb(t, 8).prio1TextOnly,
              l.Nb(t, 8).prio2IconText,
              l.Nb(t, 8).prio2IconOnly,
              l.Nb(t, 8).prio2TextOnly,
              l.Nb(t, 8).useDefaultMaxWidth,
              l.Nb(t, 8).isDummy,
            ]);
          },
        );
      }
      function Li(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-operation-panel-item",
              [
                ["icon", "E055_phone_hold_call.webp"],
                ["id", "Halten"],
                ["right", ""],
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
              function (n, t, e) {
                var l = !0,
                  i = n.component;
                return (
                  "mib3Tap" === t &&
                    (l =
                      !1 !==
                        i.callOperationsService.perform(
                          i.call,
                          i.callOperationEnum.AcceptAndHold,
                        ) && l),
                  l
                );
              },
              Ge.b,
              Ge.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              4,
              147456,
              null,
              0,
              E.a,
              [k.a, l.h, p.a, [3, E.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              7,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              8,
              49152,
              null,
              0,
              je.a,
              [],
              {
                developerText: [0, "developerText"],
                icon: [1, "icon"],
                showSeparatorRight: [2, "showSeparatorRight"],
              },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "Halten"),
              n(
                t,
                4,
                0,
                !e.callOperationsService.isPossible(
                  e.call,
                  e.callOperationEnum.AcceptAndHold,
                ),
              ),
              n(t, 5, 0),
              n(t, 7, 0),
              n(
                t,
                8,
                0,
                e.callTextEnum.HoldCall,
                "E055_phone_hold_call.webp",
                !0,
              ));
          },
          function (n, t) {
            n(t, 0, 1, [
              l.Nb(t, 4).combinedDisabled,
              l.Nb(t, 4).useBrighterIcon,
              l.Nb(t, 7).markerClassEnabled,
              l.Nb(t, 8).showSeparatorLeft,
              l.Nb(t, 8).showSeparatorRight,
              l.Nb(t, 8).prio1Main,
              l.Nb(t, 8).prio1SmallScale,
              l.Nb(t, 8).prio2SmallScale,
              l.Nb(t, 8).prio1,
              l.Nb(t, 8).prio2,
              l.Nb(t, 8).prio1IconText,
              l.Nb(t, 8).prio1IconOnly,
              l.Nb(t, 8).prio1TextOnly,
              l.Nb(t, 8).prio2IconText,
              l.Nb(t, 8).prio2IconOnly,
              l.Nb(t, 8).prio2TextOnly,
              l.Nb(t, 8).useDefaultMaxWidth,
              l.Nb(t, 8).isDummy,
            ]);
          },
        );
      }
      function Ei(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              10,
              "au3-operation-panel-item",
              [
                ["icon", "E188_phone_sms.webp"],
                ["id", "AblehnenRight"],
                ["right", ""],
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
              function (n, t, e) {
                var l = !0,
                  i = n.component;
                return (
                  "mib3Tap" === t &&
                    (l =
                      !1 !==
                        (null == i.rejectWithSmsService
                          ? null
                          : i.rejectWithSmsService.rejectWithSms(i.call)) && l),
                  l
                );
              },
              Ge.b,
              Ge.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              3,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              4,
              147456,
              null,
              0,
              E.a,
              [k.a, l.h, p.a, [3, E.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            l.xb(
              5,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              7,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              8,
              49152,
              null,
              0,
              je.a,
              [],
              { developerText: [0, "developerText"], icon: [1, "icon"] },
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "AblehnenRight"),
              n(
                t,
                4,
                0,
                !(
                  (null != e.call && e.call.hasName) ||
                  (null != e.call && e.call.number)
                ),
              ),
              n(t, 5, 0),
              n(t, 7, 0),
              n(t, 8, 0, e.callTextEnum.RejectCall, "E188_phone_sms.webp"));
          },
          function (n, t) {
            n(t, 0, 1, [
              l.Nb(t, 4).combinedDisabled,
              l.Nb(t, 4).useBrighterIcon,
              l.Nb(t, 7).markerClassEnabled,
              l.Nb(t, 8).showSeparatorLeft,
              l.Nb(t, 8).showSeparatorRight,
              l.Nb(t, 8).prio1Main,
              l.Nb(t, 8).prio1SmallScale,
              l.Nb(t, 8).prio2SmallScale,
              l.Nb(t, 8).prio1,
              l.Nb(t, 8).prio2,
              l.Nb(t, 8).prio1IconText,
              l.Nb(t, 8).prio1IconOnly,
              l.Nb(t, 8).prio1TextOnly,
              l.Nb(t, 8).prio2IconText,
              l.Nb(t, 8).prio2IconOnly,
              l.Nb(t, 8).prio2TextOnly,
              l.Nb(t, 8).useDefaultMaxWidth,
              l.Nb(t, 8).isDummy,
            ]);
          },
        );
      }
      function ki(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              37,
              "au3-popup",
              [["id", "AnrufAuf"]],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (n, t, e) {
                var i = !0;
                return (
                  "component:@a276-popup-animation.start" === t &&
                    (i = !1 !== l.Nb(n, 9).animationStart(e) && i),
                  "component:@a276-popup-animation.done" === t &&
                    (i = !1 !== l.Nb(n, 9).animationFinished(e) && i),
                  "popup:keydown.Backspace" === t &&
                    (i = !1 !== l.Nb(n, 9).handleHkBackEvent() && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            l.Sb(6144, null, o.a, null, [u.b]),
            l.Sb(6144, null, r.b, null, [u.b]),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              4,
              16384,
              null,
              0,
              L.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            l.Qb(5, { phoneName: 0 }),
            l.xb(6, 16384, null, 0, b.a, [l.l], null, null),
            l.Sb(512, null, d.a, d.a, []),
            l.Sb(131584, null, m.a, m.a, []),
            l.xb(
              9,
              4964352,
              null,
              1,
              u.b,
              [
                h.a,
                g.a,
                d.a,
                l.l,
                f.a,
                x.m,
                _.a,
                p.a,
                l.h,
                P.a,
                C.a,
                m.a,
                y.b,
                O.b,
                l.z,
                [2, v.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                popupTitle: [2, "popupTitle"],
                backButtonVisible: [3, "backButtonVisible"],
                hasText: [4, "hasText"],
              },
              null,
            ),
            l.Tb(603979776, 1, { dialogButtons: 1 }),
            (n()(),
            l.yb(
              11,
              0,
              null,
              1,
              26,
              "div",
              [["class", "content"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              12,
              0,
              null,
              null,
              2,
              "au3-call-info",
              [
                ["class", "call-info"],
                ["id", ""],
              ],
              null,
              null,
              null,
              xi.b,
              xi.a,
            )),
            l.xb(
              13,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              14,
              49152,
              null,
              0,
              _i.a,
              [Pi.a, p.a],
              { call: [0, "call"] },
              null,
            ),
            (n()(),
            l.yb(
              15,
              0,
              null,
              null,
              22,
              "au3-operation-panel",
              [["class", "operation-panel"]],
              [
                [2, "op--align-items-inside", null],
                [2, "op--align-items-outside", null],
              ],
              null,
              null,
              Ke.b,
              Ke.a,
            )),
            l.xb(
              16,
              49152,
              null,
              0,
              Ze.a,
              [Tn.a],
              {
                alignItemsInside: [0, "alignItemsInside"],
                ignoreLocking: [1, "ignoreLocking"],
              },
              null,
            ),
            (n()(),
            l.yb(
              17,
              0,
              null,
              0,
              10,
              "au3-operation-panel-item",
              [
                ["icon", "E04E_phone_no_call.webp"],
                ["id", "AblehnenLeft"],
                ["left", ""],
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
              function (n, t, e) {
                var l = !0;
                return (
                  "mib3Tap" === t && (l = !1 !== n.component.hangUpCall() && l),
                  l
                );
              },
              Ge.b,
              Ge.a,
            )),
            l.xb(
              18,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(19, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              20,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              21,
              147456,
              null,
              0,
              E.a,
              [k.a, l.h, p.a, [3, E.a]],
              {
                mib3DisabledBrighterIcon: [0, "mib3DisabledBrighterIcon"],
                disabled: [1, "disabled"],
              },
              null,
            ),
            l.xb(
              22,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              24,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              25,
              49152,
              null,
              0,
              je.a,
              [],
              { developerText: [0, "developerText"], icon: [1, "icon"] },
              null,
            ),
            l.xb(
              26,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              27,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
            (n()(), l.hb(16777216, null, 1, 2, null, Ti)),
            l.xb(
              29,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
            (n()(), l.hb(0, [["replace", 2]], 1, 0, null, Ai)),
            (n()(), l.hb(16777216, null, 2, 2, null, Li)),
            l.xb(
              33,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
            (n()(), l.hb(16777216, null, 2, 2, null, Ei)),
            l.xb(
              36,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
          ],
          function (n, t) {
            var e = t.component;
            n(t, 3, 0, "AnrufAuf");
            var i = n(t, 5, 0, e.phoneName || "");
            (n(t, 4, 0, i),
              n(
                t,
                9,
                0,
                e.popupId,
                e.popupType,
                "Anruf auf {{phoneName}}",
                !1,
                !1,
              ),
              n(t, 13, 0, ""),
              n(t, 14, 0, e.call),
              n(t, 16, 0, !0, !0),
              n(t, 18, 0, "AblehnenLeft"),
              n(
                t,
                21,
                0,
                !0,
                !e.callOperationsService.isPossible(
                  e.call,
                  e.callOperationEnum.HangUp,
                ),
              ),
              n(t, 22, 0),
              n(t, 24, 0),
              n(t, 25, 0, e.callTextEnum.RejectCall, "E04E_phone_no_call.webp"),
              n(
                t,
                29,
                0,
                l.Yb(t, 29, 0, l.Nb(t, 30).transform(e.canAcceptToActive$)),
                l.Nb(t, 31),
              ),
              n(
                t,
                33,
                0,
                l.Yb(t, 33, 0, l.Nb(t, 34).transform(e.canAcceptToHold$)),
              ),
              n(
                t,
                36,
                0,
                l.Yb(
                  t,
                  36,
                  0,
                  l
                    .Nb(t, 37)
                    .transform(
                      null == e.rejectWithSmsService
                        ? null
                        : e.rejectWithSmsService.isRejectWithSmsShown$,
                    ),
                ),
              ));
          },
          function (n, t) {
            (n(
              t,
              0,
              0,
              l.Nb(t, 9).popupAnimBinding,
              l.Nb(t, 9).animated,
              l.Nb(t, 9).numberOfButtonsCSSVariable,
            ),
              n(t, 15, 0, l.Nb(t, 16).alignInside, l.Nb(t, 16).alignOutside),
              n(t, 17, 1, [
                l.Nb(t, 21).combinedDisabled,
                l.Nb(t, 21).useBrighterIcon,
                l.Nb(t, 24).markerClassEnabled,
                l.Nb(t, 25).showSeparatorLeft,
                l.Nb(t, 25).showSeparatorRight,
                l.Nb(t, 25).prio1Main,
                l.Nb(t, 25).prio1SmallScale,
                l.Nb(t, 25).prio2SmallScale,
                l.Nb(t, 25).prio1,
                l.Nb(t, 25).prio2,
                l.Nb(t, 25).prio1IconText,
                l.Nb(t, 25).prio1IconOnly,
                l.Nb(t, 25).prio1TextOnly,
                l.Nb(t, 25).prio2IconText,
                l.Nb(t, 25).prio2IconOnly,
                l.Nb(t, 25).prio2TextOnly,
                l.Nb(t, 25).useDefaultMaxWidth,
                l.Nb(t, 25).isDummy,
              ]));
          },
        );
      }
      class Ii {
        constructor() {
          ((this.popupName = rn.Ob.POPUP_PHONE_CALL_INCOMING_SMS),
            (this.popupType = rn.Rb.Toast));
        }
      }
      var Di = l.wb({
        encapsulation: 2,
        styles: [],
        data: {
          animation: [
            {
              type: 7,
              name: "childAnim",
              definitions: [
                {
                  type: 1,
                  expr: ":leave",
                  animation: {
                    type: 11,
                    selector: ":leave",
                    animation: { type: 9, options: null },
                    options: null,
                  },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function Fi(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              8,
              "au3-popup",
              [["id", "CallRejectedWithSmsToast"]],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (n, t, e) {
                var i = !0;
                return (
                  "component:@a276-popup-animation.start" === t &&
                    (i = !1 !== l.Nb(n, 7).animationStart(e) && i),
                  "component:@a276-popup-animation.done" === t &&
                    (i = !1 !== l.Nb(n, 7).animationFinished(e) && i),
                  "popup:keydown.Backspace" === t &&
                    (i = !1 !== l.Nb(n, 7).handleHkBackEvent() && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            l.Sb(6144, null, o.a, null, [u.b]),
            l.Sb(6144, null, r.b, null, [u.b]),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(4, 16384, null, 0, b.a, [l.l], null, null),
            l.Sb(512, null, d.a, d.a, []),
            l.Sb(131584, null, m.a, m.a, []),
            l.xb(
              7,
              4964352,
              null,
              1,
              u.b,
              [
                h.a,
                g.a,
                d.a,
                l.l,
                f.a,
                x.m,
                _.a,
                p.a,
                l.h,
                P.a,
                C.a,
                m.a,
                y.b,
                O.b,
                l.z,
                [2, v.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                text: [2, "text"],
              },
              null,
            ),
            l.Tb(603979776, 1, { dialogButtons: 1 }),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, e.popupName),
              n(
                t,
                7,
                0,
                e.popupName,
                e.popupType,
                "Der Anruf wurde via SMS abgelehnt.",
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 7).popupAnimBinding,
              l.Nb(t, 7).animated,
              l.Nb(t, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      class zi {
        constructor() {
          ((this.popupType = rn.Rb), (this.popupIds = rn.Ob));
        }
      }
      var Ri = l.wb({
        encapsulation: 0,
        styles: [["[_nghost-%COMP%]{display:block}"]],
        data: {
          animation: [
            {
              type: 7,
              name: "childAnim",
              definitions: [
                {
                  type: 1,
                  expr: ":leave",
                  animation: {
                    type: 11,
                    selector: ":leave",
                    animation: { type: 9, options: null },
                    options: null,
                  },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function Bi(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              8,
              "au3-popup",
              [["id", "PowerWarningBemPrewarningAndTelmaxPopup"]],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (n, t, e) {
                var i = !0;
                return (
                  "component:@a276-popup-animation.start" === t &&
                    (i = !1 !== l.Nb(n, 7).animationStart(e) && i),
                  "component:@a276-popup-animation.done" === t &&
                    (i = !1 !== l.Nb(n, 7).animationFinished(e) && i),
                  "popup:keydown.Backspace" === t &&
                    (i = !1 !== l.Nb(n, 7).handleHkBackEvent() && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            l.Sb(6144, null, o.a, null, [u.b]),
            l.Sb(6144, null, r.b, null, [u.b]),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(4, 16384, null, 0, b.a, [l.l], null, null),
            l.Sb(512, null, d.a, d.a, []),
            l.Sb(131584, null, m.a, m.a, []),
            l.xb(
              7,
              4964352,
              null,
              1,
              u.b,
              [
                h.a,
                g.a,
                d.a,
                l.l,
                f.a,
                x.m,
                _.a,
                p.a,
                l.h,
                P.a,
                C.a,
                m.a,
                y.b,
                O.b,
                l.z,
                [2, v.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                popupTitle: [2, "popupTitle"],
                surviveScreenChange: [3, "surviveScreenChange"],
                backButtonVisible: [4, "backButtonVisible"],
                closeButtonVisible: [5, "closeButtonVisible"],
                hasText: [6, "hasText"],
                text: [7, "text"],
              },
              null,
            ),
            l.Tb(603979776, 1, { dialogButtons: 1 }),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, "PowerWarningBemPrewarningAndTelmaxPopup"),
              n(
                t,
                7,
                0,
                e.popupIds.POPUP_BANNER_SYSTEM_BATTERY_LOW,
                e.popupType.FullscreenPopup,
                "Note",
                !0,
                !1,
                !1,
                !0,
                "Please activate the drive system, otherwise the system will be\nswitched off shortly.",
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 7).popupAnimBinding,
              l.Nb(t, 7).animated,
              l.Nb(t, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      class Hi {
        constructor() {
          ((this.popupType = rn.Rb), (this.popupIds = rn.Ob));
        }
      }
      var Ui = l.wb({
        encapsulation: 0,
        styles: [["[_nghost-%COMP%]{display:block}"]],
        data: {
          animation: [
            {
              type: 7,
              name: "childAnim",
              definitions: [
                {
                  type: 1,
                  expr: ":leave",
                  animation: {
                    type: 11,
                    selector: ":leave",
                    animation: { type: 9, options: null },
                    options: null,
                  },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function Vi(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              8,
              "au3-popup",
              [["id", "PowerWarningOverheatingPopup"]],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (n, t, e) {
                var i = !0;
                return (
                  "component:@a276-popup-animation.start" === t &&
                    (i = !1 !== l.Nb(n, 7).animationStart(e) && i),
                  "component:@a276-popup-animation.done" === t &&
                    (i = !1 !== l.Nb(n, 7).animationFinished(e) && i),
                  "popup:keydown.Backspace" === t &&
                    (i = !1 !== l.Nb(n, 7).handleHkBackEvent() && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            l.Sb(6144, null, o.a, null, [u.b]),
            l.Sb(6144, null, r.b, null, [u.b]),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(4, 16384, null, 0, b.a, [l.l], null, null),
            l.Sb(512, null, d.a, d.a, []),
            l.Sb(131584, null, m.a, m.a, []),
            l.xb(
              7,
              4964352,
              null,
              1,
              u.b,
              [
                h.a,
                g.a,
                d.a,
                l.l,
                f.a,
                x.m,
                _.a,
                p.a,
                l.h,
                P.a,
                C.a,
                m.a,
                y.b,
                O.b,
                l.z,
                [2, v.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                popupTitle: [2, "popupTitle"],
                surviveScreenChange: [3, "surviveScreenChange"],
                backButtonVisible: [4, "backButtonVisible"],
                closeButtonVisible: [5, "closeButtonVisible"],
                hasText: [6, "hasText"],
                text: [7, "text"],
              },
              null,
            ),
            l.Tb(603979776, 1, { dialogButtons: 1 }),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, "PowerWarningOverheatingPopup"),
              n(
                t,
                7,
                0,
                e.popupIds.POPUP_BANNER_SYSTEM_OVERHEATING,
                e.popupType.FullscreenPopup,
                "Note",
                !0,
                !1,
                !1,
                !0,
                "The MMI is overheating and will now switch off.",
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 7).popupAnimBinding,
              l.Nb(t, 7).animated,
              l.Nb(t, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      class $i {
        constructor() {
          ((this.popupType = rn.Rb), (this.popupIds = rn.Ob));
        }
      }
      var Wi = l.wb({
        encapsulation: 0,
        styles: [["[_nghost-%COMP%]{display:block}"]],
        data: {
          animation: [
            {
              type: 7,
              name: "childAnim",
              definitions: [
                {
                  type: 1,
                  expr: ":leave",
                  animation: {
                    type: 11,
                    selector: ":leave",
                    animation: { type: 9, options: null },
                    options: null,
                  },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function Yi(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-popup",
              [["id", "PowerWarningStandbyPopup"]],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (n, t, e) {
                var i = !0;
                return (
                  "component:@a276-popup-animation.start" === t &&
                    (i = !1 !== l.Nb(n, 7).animationStart(e) && i),
                  "component:@a276-popup-animation.done" === t &&
                    (i = !1 !== l.Nb(n, 7).animationFinished(e) && i),
                  "popup:keydown.Backspace" === t &&
                    (i = !1 !== l.Nb(n, 7).handleHkBackEvent() && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            l.Sb(6144, null, o.a, null, [u.b]),
            l.Sb(6144, null, r.b, null, [u.b]),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(4, 16384, null, 0, b.a, [l.l], null, null),
            l.Sb(512, null, d.a, d.a, []),
            l.Sb(131584, null, m.a, m.a, []),
            l.xb(
              7,
              4964352,
              null,
              1,
              u.b,
              [
                h.a,
                g.a,
                d.a,
                l.l,
                f.a,
                x.m,
                _.a,
                p.a,
                l.h,
                P.a,
                C.a,
                m.a,
                y.b,
                O.b,
                l.z,
                [2, v.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                popupTitle: [2, "popupTitle"],
                surviveScreenChange: [3, "surviveScreenChange"],
                backButtonVisible: [4, "backButtonVisible"],
                text: [5, "text"],
              },
              null,
            ),
            l.Tb(603979776, 1, { dialogButtons: 1 }),
            (n()(),
            l.yb(
              9,
              0,
              null,
              2,
              3,
              "au3-popup-dialog-button",
              [["id", "OkButton"]],
              null,
              null,
              null,
              bi.b,
              bi.a,
            )),
            l.xb(
              10,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              11,
              49152,
              null,
              0,
              di.a,
              [[2, s.a], l.l],
              { developerText: [0, "developerText"] },
              null,
            ),
            l.Sb(2048, [[1, 4]], mi.a, null, [di.a]),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, "PowerWarningStandbyPopup"),
              n(
                t,
                7,
                0,
                e.popupIds.POPUP_BANNER_SYSTEM_STANDBY,
                e.popupType.FullscreenPopup,
                "Note",
                !0,
                !1,
                "Preparing sleep mode. Cancel with system input or by switching\non ignition",
              ),
              n(t, 10, 0, "OkButton"),
              n(t, 11, 0, "Ok"));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 7).popupAnimBinding,
              l.Nb(t, 7).animated,
              l.Nb(t, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      class Gi {
        constructor() {
          ((this.popupType = rn.Rb), (this.popupIds = rn.Ob));
        }
      }
      var ji = l.wb({
        encapsulation: 0,
        styles: [["[_nghost-%COMP%]{display:block}"]],
        data: {
          animation: [
            {
              type: 7,
              name: "childAnim",
              definitions: [
                {
                  type: 1,
                  expr: ":leave",
                  animation: {
                    type: 11,
                    selector: ":leave",
                    animation: { type: 9, options: null },
                    options: null,
                  },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function Ki(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-popup",
              [["id", "SystemComponentProtectionPopup"]],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (n, t, e) {
                var i = !0;
                return (
                  "component:@a276-popup-animation.start" === t &&
                    (i = !1 !== l.Nb(n, 7).animationStart(e) && i),
                  "component:@a276-popup-animation.done" === t &&
                    (i = !1 !== l.Nb(n, 7).animationFinished(e) && i),
                  "popup:keydown.Backspace" === t &&
                    (i = !1 !== l.Nb(n, 7).handleHkBackEvent() && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            l.Sb(6144, null, o.a, null, [u.b]),
            l.Sb(6144, null, r.b, null, [u.b]),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(4, 16384, null, 0, b.a, [l.l], null, null),
            l.Sb(512, null, d.a, d.a, []),
            l.Sb(131584, null, m.a, m.a, []),
            l.xb(
              7,
              4964352,
              null,
              1,
              u.b,
              [
                h.a,
                g.a,
                d.a,
                l.l,
                f.a,
                x.m,
                _.a,
                p.a,
                l.h,
                P.a,
                C.a,
                m.a,
                y.b,
                O.b,
                l.z,
                [2, v.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                popupTitle: [2, "popupTitle"],
                surviveScreenChange: [3, "surviveScreenChange"],
                backButtonVisible: [4, "backButtonVisible"],
                hasText: [5, "hasText"],
                text: [6, "text"],
              },
              null,
            ),
            l.Tb(603979776, 1, { dialogButtons: 1 }),
            (n()(),
            l.yb(
              9,
              0,
              null,
              2,
              3,
              "au3-popup-dialog-button",
              [["id", "OK"]],
              null,
              null,
              null,
              bi.b,
              bi.a,
            )),
            l.xb(
              10,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              11,
              49152,
              null,
              0,
              di.a,
              [[2, s.a], l.l],
              { developerText: [0, "developerText"] },
              null,
            ),
            l.Sb(2048, [[1, 4]], mi.a, null, [di.a]),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, "SystemComponentProtectionPopup"),
              n(
                t,
                7,
                0,
                e.popupIds.POPUP_BANNER_SYSTEM_COMPONENT_PROTECTION,
                e.popupType.FullscreenPopup,
                "Komponentenschutz",
                !0,
                !1,
                !0,
                "Das Infotainmentsystem ist zur Zeit nur eingeschr\xe4nkt verf\xfcgbar.\nBitte Z\xfcndung einschalten.",
              ),
              n(t, 10, 0, "OK"),
              n(t, 11, 0, "OK"));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 7).popupAnimBinding,
              l.Nb(t, 7).animated,
              l.Nb(t, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      var Zi = e("2Uk/"),
        Ji = e("wa3p"),
        Xi = (function (n) {
          return ((n.StartOPR = "StartOPR"), (n.StartECall = "StartECall"), n);
        })({});
      class qi {
        constructor(n, t) {
          ((this.eCallOPRService = n),
            (this.popupType = rn.Rb.Dialog),
            (this.actionEnum = Xi),
            (this.popupActionEnum = rn.Nb),
            (this.logger = t.getLogger("phone.OPRAutomaticComponent")));
        }
        ngOnInit() {
          this.auto
            ? ((this.title = "Audi Schadenservice"),
              (this.oprButton = "Audi Schadenservice anrufen"),
              (this.text =
                "Ihr Auto hat ein Schadenereignis festgestellt.\nSie k\xf6nnen eine der folgenden Aktionen starten:"))
            : ((this.title = "Online Pannenruf"),
              (this.oprButton = "Online Pannenruf anrufen"),
              (this.text =
                "Der Online Pannenruf wurde aktiviert. Sie\nk\xf6nnen eine der folgenden Aktionen starten:"));
        }
        get auto() {
          return this.id === rn.Ob.POPUP_OPR_POPUP_AUTOMATIC_AUTO;
        }
        startOPR() {
          this.eCallOPRService.startService(
            this.auto ? Ji.m.Usm : Ji.m.ServiceBreakdownCall,
          );
        }
        startECall() {
          this.eCallOPRService.startService(Ji.m.Mec);
        }
        cancel() {
          (this.eCallOPRService.cancelService(Ji.m.Mec),
            this.eCallOPRService.cancelService(
              this.auto ? Ji.m.Usm : Ji.m.ServiceBreakdownCall,
            ));
        }
        onClose(n) {
          (this.logger.info("onClose with returnMessage:", n),
            n.content !== Xi.StartECall
              ? n.content !== Xi.StartOPR
                ? (n.content !== rn.Nb.CANCEL && n.action !== rn.Nb.CLOSE) ||
                  this.cancel()
                : this.startOPR()
              : this.startECall());
        }
      }
      var Qi = l.wb({
        encapsulation: 0,
        styles: [["[_nghost-%COMP%]{display:block}"]],
        data: {
          animation: [
            {
              type: 7,
              name: "childAnim",
              definitions: [
                {
                  type: 1,
                  expr: ":leave",
                  animation: {
                    type: 11,
                    selector: ":leave",
                    animation: { type: 9, options: null },
                    options: null,
                  },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function na(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              20,
              "au3-popup",
              [],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                [null, "returnMessage"],
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (n, t, e) {
                var i = !0,
                  a = n.component;
                return (
                  "component:@a276-popup-animation.start" === t &&
                    (i = !1 !== l.Nb(n, 7).animationStart(e) && i),
                  "component:@a276-popup-animation.done" === t &&
                    (i = !1 !== l.Nb(n, 7).animationFinished(e) && i),
                  "popup:keydown.Backspace" === t &&
                    (i = !1 !== l.Nb(n, 7).handleHkBackEvent() && i),
                  "returnMessage" === t && (i = !1 !== a.onClose(e) && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            l.Sb(6144, null, o.a, null, [u.b]),
            l.Sb(6144, null, r.b, null, [u.b]),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(4, 16384, null, 0, b.a, [l.l], null, null),
            l.Sb(512, null, d.a, d.a, []),
            l.Sb(131584, null, m.a, m.a, []),
            l.xb(
              7,
              4964352,
              null,
              1,
              u.b,
              [
                h.a,
                g.a,
                d.a,
                l.l,
                f.a,
                x.m,
                _.a,
                p.a,
                l.h,
                P.a,
                C.a,
                m.a,
                y.b,
                O.b,
                l.z,
                [2, v.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                popupTitle: [2, "popupTitle"],
                surviveScreenChange: [3, "surviveScreenChange"],
                closeWhenClickedOutside: [4, "closeWhenClickedOutside"],
                backButtonVisible: [5, "backButtonVisible"],
                closeButtonVisible: [6, "closeButtonVisible"],
                text: [7, "text"],
              },
              { returnMessage: "returnMessage" },
            ),
            l.Tb(603979776, 1, { dialogButtons: 1 }),
            (n()(),
            l.yb(
              9,
              0,
              null,
              2,
              3,
              "au3-popup-dialog-button",
              [["id", "oprButton"]],
              null,
              null,
              null,
              bi.b,
              bi.a,
            )),
            l.xb(
              10,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              11,
              49152,
              null,
              0,
              di.a,
              [[2, s.a], l.l],
              {
                developerText: [0, "developerText"],
                closePopupAfterClick: [1, "closePopupAfterClick"],
                returnMessageContent: [2, "returnMessageContent"],
              },
              null,
            ),
            l.Sb(2048, [[1, 4]], mi.a, null, [di.a]),
            (n()(),
            l.yb(
              13,
              0,
              null,
              2,
              3,
              "au3-popup-dialog-button",
              [
                ["developerText", "Notruf anrufen"],
                ["id", "eCallButton"],
              ],
              null,
              null,
              null,
              bi.b,
              bi.a,
            )),
            l.xb(
              14,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              15,
              49152,
              null,
              0,
              di.a,
              [[2, s.a], l.l],
              {
                developerText: [0, "developerText"],
                closePopupAfterClick: [1, "closePopupAfterClick"],
                returnMessageContent: [2, "returnMessageContent"],
              },
              null,
            ),
            l.Sb(2048, [[1, 4]], mi.a, null, [di.a]),
            (n()(),
            l.yb(
              17,
              0,
              null,
              2,
              3,
              "au3-popup-dialog-button",
              [
                ["developerText", "Abbrechen"],
                ["id", "cancelButton"],
              ],
              null,
              null,
              null,
              bi.b,
              bi.a,
            )),
            l.xb(
              18,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              19,
              49152,
              null,
              0,
              di.a,
              [[2, s.a], l.l],
              {
                developerText: [0, "developerText"],
                closePopupAfterClick: [1, "closePopupAfterClick"],
                returnMessageContent: [2, "returnMessageContent"],
              },
              null,
            ),
            l.Sb(2048, [[1, 4]], mi.a, null, [di.a]),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, "POPUP:" + e.id),
              n(t, 7, 0, e.id, e.popupType, e.title, !0, !1, !1, !0, e.text),
              n(t, 10, 0, "oprButton"),
              n(t, 11, 0, e.oprButton, !0, e.actionEnum.StartOPR),
              n(t, 14, 0, "eCallButton"),
              n(t, 15, 0, "Notruf anrufen", !0, e.actionEnum.StartECall),
              n(t, 18, 0, "cancelButton"),
              n(t, 19, 0, "Abbrechen", !0, e.popupActionEnum.CANCEL));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 7).popupAnimBinding,
              l.Nb(t, 7).animated,
              l.Nb(t, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      class ta {
        constructor(n) {
          ((this.eCallOPRService = n),
            (this.popupType = rn.Rb.FullscreenPopup),
            (this.popupActions = rn.Nb),
            (this.id = rn.Ob.POPUP_SOS_POPUP_LICENCE_MAIN),
            (this.text =
              "Die Lizenzlaufzeit f\xfcr den Notruf ist\nabgelaufen. Informationen zu Verl\xe4ngerungs-\nm\xf6glichkeiten erhalten Sie bei Ihrem Audi\nPartner oder auf der Audi Website."));
        }
        onClose(n) {
          n.action === rn.Nb.OK &&
            this.eCallOPRService.confirmLicenseExpiration();
        }
      }
      var ea = l.wb({
        encapsulation: 0,
        styles: [["[_nghost-%COMP%]{display:block}"]],
        data: {
          animation: [
            {
              type: 7,
              name: "childAnim",
              definitions: [
                {
                  type: 1,
                  expr: ":leave",
                  animation: {
                    type: 11,
                    selector: ":leave",
                    animation: { type: 9, options: null },
                    options: null,
                  },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function la(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-popup",
              [["id", "SosLicenceMain"]],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                [null, "returnMessage"],
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (n, t, e) {
                var i = !0,
                  a = n.component;
                return (
                  "component:@a276-popup-animation.start" === t &&
                    (i = !1 !== l.Nb(n, 7).animationStart(e) && i),
                  "component:@a276-popup-animation.done" === t &&
                    (i = !1 !== l.Nb(n, 7).animationFinished(e) && i),
                  "popup:keydown.Backspace" === t &&
                    (i = !1 !== l.Nb(n, 7).handleHkBackEvent() && i),
                  "returnMessage" === t && (i = !1 !== a.onClose(e) && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            l.Sb(6144, null, o.a, null, [u.b]),
            l.Sb(6144, null, r.b, null, [u.b]),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(4, 16384, null, 0, b.a, [l.l], null, null),
            l.Sb(512, null, d.a, d.a, []),
            l.Sb(131584, null, m.a, m.a, []),
            l.xb(
              7,
              4964352,
              null,
              1,
              u.b,
              [
                h.a,
                g.a,
                d.a,
                l.l,
                f.a,
                x.m,
                _.a,
                p.a,
                l.h,
                P.a,
                C.a,
                m.a,
                y.b,
                O.b,
                l.z,
                [2, v.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                popupTitle: [2, "popupTitle"],
                surviveScreenChange: [3, "surviveScreenChange"],
                backButtonVisible: [4, "backButtonVisible"],
                closeButtonVisible: [5, "closeButtonVisible"],
                text: [6, "text"],
              },
              { returnMessage: "returnMessage" },
            ),
            l.Tb(603979776, 1, { dialogButtons: 1 }),
            (n()(),
            l.yb(
              9,
              0,
              null,
              2,
              3,
              "au3-popup-dialog-button",
              [["id", "okButton"]],
              null,
              null,
              null,
              bi.b,
              bi.a,
            )),
            l.xb(
              10,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              11,
              49152,
              null,
              0,
              di.a,
              [[2, s.a], l.l],
              {
                developerText: [0, "developerText"],
                closePopupAfterClick: [1, "closePopupAfterClick"],
                popupAction: [2, "popupAction"],
              },
              null,
            ),
            l.Sb(2048, [[1, 4]], mi.a, null, [di.a]),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, "SosLicenceMain"),
              n(t, 7, 0, e.id, e.popupType, "Hinweis", !0, !1, !0, e.text),
              n(t, 10, 0, "okButton"),
              n(t, 11, 0, "OK", !0, e.popupActions.OK));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 7).popupAnimBinding,
              l.Nb(t, 7).animated,
              l.Nb(t, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      var ia = e("YI95"),
        aa = e("oPv+"),
        oa = e("wgY5"),
        ua = e("8lto"),
        ra = e("AfGm"),
        sa = e("B0wk");
      class ca {
        constructor(n, t, e, l, i, a) {
          ((this.eCallOPRService = n),
            (this.generalSettingsService = t),
            (this.onlineRoutingService = e),
            (this.popupManager = l),
            (this.systemConfigService = i),
            (this.webappResourcesService = a),
            (this.popupActions = rn.Nb),
            (this.popupType = rn.Rb.FullscreenPopup),
            (this.popupId = rn.Ob.POPUP_SOS_POPUP_LICENCE_EXPIRE_MAIN),
            (this.baseConfigVariant = sa.l.BASE),
            (this.licenseAppAvailable$ = a.webappList$.pipe(
              Object(tt.a)((n) =>
                n.some((n) => n.serviceId === ra.a.LICENSE && !!n.verified),
              ),
              Object(ni.a)(!1),
            )));
        }
        onClose(n) {
          n.action === rn.Nb.MORE_INFO
            ? this.onlineRoutingService.goToLicenseAppInSettings()
            : n.action === rn.Nb.OK &&
              this.eCallOPRService.confirmLicenseExpiryWarning();
        }
        ngOnInit() {
          ((this.expirationDate$ = this.popupManager
            .getRequestData(this.popupId)
            .pipe(
              Object(vi.a)(rn.wd),
              Object(Xl.a)(),
              Object(tt.a)((n) => {
                const t = n.data;
                return t ? oa.utc(t, "YYYYMMDDHHmm") : void 0;
              }),
            )),
            (this.dateFormat$ = this.generalSettingsService.dateFormat$.pipe(
              Object(tt.a)((n) => n.activeDateFormatForMoment),
            )));
        }
      }
      var pa = l.wb({
        encapsulation: 0,
        styles: [["[_nghost-%COMP%]{display:block}"]],
        data: {
          animation: [
            {
              type: 7,
              name: "childAnim",
              definitions: [
                {
                  type: 1,
                  expr: ":leave",
                  animation: {
                    type: 11,
                    selector: ":leave",
                    animation: { type: 9, options: null },
                    options: null,
                  },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function ba(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              5,
              "au3-popup-dialog-button",
              [["id", "overviewButton"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              null,
              null,
              bi.b,
              bi.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              147456,
              null,
              0,
              E.a,
              [k.a, l.h, p.a, [3, E.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
            l.xb(
              4,
              49152,
              null,
              0,
              di.a,
              [[2, s.a], l.l],
              {
                developerText: [0, "developerText"],
                closePopupAfterClick: [1, "closePopupAfterClick"],
                popupAction: [2, "popupAction"],
              },
              null,
            ),
            l.Sb(2048, [[1, 4]], mi.a, null, [di.a]),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "overviewButton"),
              n(
                t,
                2,
                0,
                !l.Yb(t, 2, 0, l.Nb(t, 3).transform(e.licenseAppAvailable$)),
              ),
              n(
                t,
                4,
                0,
                "\xdcbersicht Lizenzen",
                !0,
                e.popupActions.MORE_INFO,
              ));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).combinedDisabled, l.Nb(t, 2).useBrighterIcon);
          },
        );
      }
      function da(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              18,
              "au3-popup",
              [["id", "SosLicenceExpireMain"]],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                [null, "returnMessage"],
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (n, t, e) {
                var i = !0,
                  a = n.component;
                return (
                  "component:@a276-popup-animation.start" === t &&
                    (i = !1 !== l.Nb(n, 10).animationStart(e) && i),
                  "component:@a276-popup-animation.done" === t &&
                    (i = !1 !== l.Nb(n, 10).animationFinished(e) && i),
                  "popup:keydown.Backspace" === t &&
                    (i = !1 !== l.Nb(n, 10).handleHkBackEvent() && i),
                  "returnMessage" === t && (i = !1 !== a.onClose(e) && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            l.Sb(6144, null, o.a, null, [u.b]),
            l.Sb(6144, null, r.b, null, [u.b]),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              4,
              16384,
              null,
              0,
              L.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            l.Rb(5, 2),
            l.Qb(6, { date: 0 }),
            l.xb(7, 16384, null, 0, b.a, [l.l], null, null),
            l.Sb(512, null, d.a, d.a, []),
            l.Sb(131584, null, m.a, m.a, []),
            l.xb(
              10,
              4964352,
              null,
              1,
              u.b,
              [
                h.a,
                g.a,
                d.a,
                l.l,
                f.a,
                x.m,
                _.a,
                p.a,
                l.h,
                P.a,
                C.a,
                m.a,
                y.b,
                O.b,
                l.z,
                [2, v.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                popupTitle: [2, "popupTitle"],
                surviveScreenChange: [3, "surviveScreenChange"],
                backButtonVisible: [4, "backButtonVisible"],
                closeButtonVisible: [5, "closeButtonVisible"],
                text: [6, "text"],
              },
              { returnMessage: "returnMessage" },
            ),
            l.Tb(603979776, 1, { dialogButtons: 1 }),
            (n()(), l.hb(16777216, null, 2, 2, null, ba)),
            l.xb(
              13,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
            (n()(),
            l.yb(
              15,
              0,
              null,
              2,
              3,
              "au3-popup-dialog-button",
              [["id", "okButton"]],
              null,
              null,
              null,
              bi.b,
              bi.a,
            )),
            l.xb(
              16,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              17,
              49152,
              null,
              0,
              di.a,
              [[2, s.a], l.l],
              {
                developerText: [0, "developerText"],
                closePopupAfterClick: [1, "closePopupAfterClick"],
                popupAction: [2, "popupAction"],
              },
              null,
            ),
            l.Sb(2048, [[1, 4]], mi.a, null, [di.a]),
          ],
          function (n, t) {
            var e = t.component;
            n(t, 3, 0, "SosLicenceExpireMain");
            var i = n(
              t,
              6,
              0,
              l.Yb(
                t,
                4,
                0,
                n(
                  t,
                  5,
                  0,
                  l.Nb(t.parent, 0),
                  t.context.mib3Let.expirationDate,
                  t.context.mib3Let.dateFormat,
                ),
              ) || "",
            );
            (n(t, 4, 0, i),
              n(
                t,
                10,
                0,
                e.popupId,
                e.popupType,
                "Hinweis",
                !0,
                !1,
                !0,
                "Die Lizenzlaufzeit f\xfcr den Notruf l\xe4uft am {{date}} ab.\nInformationen zu Verl\xe4ngerungsm\xf6glichkeiten erhalten Sie\nbei Ihrem Audi Partner oder auf der Audi Website.",
              ),
              n(
                t,
                13,
                0,
                l.Yb(
                  t,
                  13,
                  0,
                  l.Nb(t, 14).transform(e.systemConfigService.variant$),
                ) !== e.baseConfigVariant,
              ),
              n(t, 16, 0, "okButton"),
              n(t, 17, 0, "OK", !0, e.popupActions.OK));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 10).popupAnimBinding,
              l.Nb(t, 10).animated,
              l.Nb(t, 10).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      function ma(n) {
        return l.ac(
          2,
          [
            l.Pb(0, ia.a, []),
            (n()(), l.hb(16777216, null, null, 4, null, da)),
            l.xb(
              2,
              16384,
              null,
              0,
              An.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
            l.Pb(131072, yn.b, [l.h]),
            l.Qb(5, { expirationDate: 0, dateFormat: 1 }),
          ],
          function (n, t) {
            var e = t.component,
              i = n(
                t,
                5,
                0,
                l.Yb(t, 2, 0, l.Nb(t, 3).transform(e.expirationDate$)),
                l.Yb(t, 2, 0, l.Nb(t, 4).transform(e.dateFormat$)),
              );
            n(t, 2, 0, i);
          },
          null,
        );
      }
      var ha = e("/SfN"),
        ga = e("DexO"),
        fa = e("4C60"),
        xa = e("woiT");
      class _a {
        constructor(n, t, e, l, i, a, o) {
          ((this.eCallOPRService = n),
            (this.addressFormattingService = t),
            (this.locationService = e),
            (this.guidanceService = l),
            (this.naviRoutingService = i),
            (this.demoService = a),
            (this.popupManager = o),
            (this.popupType = rn.Rb.Dialog),
            (this.id = rn.Ob.POPUP_OPR_POPUP_DESTINATION),
            (this.destroy$$ = new Yn.a(1)),
            (this.location$ = this.eCallOPRService.destination$.pipe(
              Object(tt.a)((n) =>
                null == n ||
                null == n.positionLatitude ||
                null == n.positionLongitude
                  ? null
                  : {
                      city: n.addressTown,
                      country: n.addressCountry,
                      state: n.addressState,
                      housenumber: n.addressNumber,
                      phoneNumber: n.addressTelephone,
                      street: n.addressStreet,
                      zipCode: n.addressPostalCode,
                      coordinates: {
                        latitudeDegree: n.positionLatitude,
                        longitudeDegree: n.positionLongitude,
                      },
                    },
              ),
            )),
            (this.address$ = this.location$.pipe(
              Object(vi.a)(rn.wd),
              Object(tt.a)((n) =>
                this.addressFormattingService
                  .getLines(2, Object(fa.a)(n))
                  .join("\n"),
              ),
            )));
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
        startGuidance() {
          (this.deactivateDemoMode(),
            this.location$
              .pipe(
                Object(et.a)(1),
                Object(vi.a)(rn.wd),
                Object(Jl.a)((n) =>
                  this.locationService.resolveLocationByCoordinates(n),
                ),
                Object(et.a)(1),
                Object(Gn.a)(this.destroy$$),
              )
              .subscribe((n) => {
                (this.guidanceService.startGuidance(n.id, !1),
                  this.naviRoutingService.goToMap().then(() => {
                    (this.popupManager.unrequest(this.id), this.onClose());
                  }));
              }));
        }
        deactivateDemoMode() {
          this.demoService.demoMode && this.demoService.setDemoMode(!1);
        }
        onClose() {
          this.eCallOPRService.acknowledgeDestination();
        }
      }
      var Pa = e("SFb6"),
        Ca = l.wb({
          encapsulation: 0,
          styles: [
            [
              "[_nghost-%COMP%]{display:block}.content[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;line-height:65px;align-items:stretch;text-align:center;overflow:hidden;word-break:break-all;text-overflow:ellipsis}",
            ],
          ],
          data: {
            animation: [
              {
                type: 7,
                name: "childAnim",
                definitions: [
                  {
                    type: 1,
                    expr: ":leave",
                    animation: {
                      type: 11,
                      selector: ":leave",
                      animation: { type: 9, options: null },
                      options: null,
                    },
                    options: null,
                  },
                ],
                options: {},
              },
            ],
          },
        });
      function ya(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              19,
              "au3-popup",
              [["popupTitle", "ONLINE ZIELVORSCHLAG"]],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                [null, "returnMessage"],
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (n, t, e) {
                var i = !0,
                  a = n.component;
                return (
                  "component:@a276-popup-animation.start" === t &&
                    (i = !1 !== l.Nb(n, 10).animationStart(e) && i),
                  "component:@a276-popup-animation.done" === t &&
                    (i = !1 !== l.Nb(n, 10).animationFinished(e) && i),
                  "popup:keydown.Backspace" === t &&
                    (i = !1 !== l.Nb(n, 10).handleHkBackEvent() && i),
                  "returnMessage" === t && (i = !1 !== a.onClose() && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            l.Sb(6144, null, o.a, null, [u.b]),
            l.Sb(6144, null, r.b, null, [u.b]),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              4,
              16384,
              null,
              0,
              L.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
            l.Qb(6, { address: 0 }),
            l.xb(7, 16384, null, 0, b.a, [l.l], null, null),
            l.Sb(512, null, d.a, d.a, []),
            l.Sb(131584, null, m.a, m.a, []),
            l.xb(
              10,
              4964352,
              null,
              1,
              u.b,
              [
                h.a,
                g.a,
                d.a,
                l.l,
                f.a,
                x.m,
                _.a,
                p.a,
                l.h,
                P.a,
                C.a,
                m.a,
                y.b,
                O.b,
                l.z,
                [2, v.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                popupTitle: [2, "popupTitle"],
                surviveScreenChange: [3, "surviveScreenChange"],
                backButtonVisible: [4, "backButtonVisible"],
                closeButtonVisible: [5, "closeButtonVisible"],
                hasText: [6, "hasText"],
                text: [7, "text"],
              },
              { returnMessage: "returnMessage" },
            ),
            l.Tb(603979776, 1, { dialogButtons: 1 }),
            (n()(),
            l.yb(
              12,
              0,
              null,
              2,
              3,
              "au3-popup-dialog-button",
              [
                ["developerText", "Ziel anfahren"],
                ["id", "startGuidance"],
              ],
              null,
              [[null, "tapPopupButtonEvent"]],
              function (n, t, e) {
                var l = !0;
                return (
                  "tapPopupButtonEvent" === t &&
                    (l = !1 !== n.component.startGuidance() && l),
                  l
                );
              },
              bi.b,
              bi.a,
            )),
            l.xb(
              13,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              14,
              49152,
              null,
              0,
              di.a,
              [[2, s.a], l.l],
              {
                developerText: [0, "developerText"],
                closePopupAfterClick: [1, "closePopupAfterClick"],
              },
              { tapPopupButtonEvent: "tapPopupButtonEvent" },
            ),
            l.Sb(2048, [[1, 4]], mi.a, null, [di.a]),
            (n()(),
            l.yb(
              16,
              0,
              null,
              2,
              3,
              "au3-popup-dialog-button",
              [
                ["developerText", "Abbrechen"],
                ["id", "cancel"],
              ],
              null,
              null,
              null,
              bi.b,
              bi.a,
            )),
            l.xb(
              17,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              18,
              49152,
              null,
              0,
              di.a,
              [[2, s.a], l.l],
              {
                developerText: [0, "developerText"],
                closePopupAfterClick: [1, "closePopupAfterClick"],
              },
              null,
            ),
            l.Sb(2048, [[1, 4]], mi.a, null, [di.a]),
          ],
          function (n, t) {
            var e = t.component;
            n(t, 3, 0, "POPUP:" + e.id);
            var i = n(t, 6, 0, l.Yb(t, 4, 0, l.Nb(t, 5).transform(e.address$)));
            (n(t, 4, 0, i),
              n(
                t,
                10,
                0,
                e.id,
                e.popupType,
                "ONLINE ZIELVORSCHLAG",
                !0,
                !1,
                !0,
                !0,
                "{{address}}\nAnfahren, um dort Hilfe zu erhalten?",
              ),
              n(t, 13, 0, "startGuidance"),
              n(t, 14, 0, "Ziel anfahren", !1),
              n(t, 17, 0, "cancel"),
              n(t, 18, 0, "Abbrechen", !0));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 10).popupAnimBinding,
              l.Nb(t, 10).animated,
              l.Nb(t, 10).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      var Oa = e("Q/h1"),
        va = e("M7T0");
      class wa {
        constructor(n, t) {
          ((this.popupManager = n),
            (this.routingService = t),
            (this.popupId = rn.Ob.POPUP_POPUP_FUNCTIONS_EXPIRED),
            (this.PopupType = rn.Rb),
            (this.IconCategory = rn.Z),
            (this.FodFunction = va.a),
            (this.destroyed$$ = new Yn.a(1)),
            (this.expiredFunctions$ = this.popupManager
              .getRequestData(this.popupId)
              .pipe(
                Object(vi.a)(rn.wd),
                Object(tt.a)((n) => (n && n.data && n.data.expired) || []),
                Object(Gn.a)(this.destroyed$$),
              )));
        }
        ngOnDestroy() {
          (this.destroyed$$.next(), this.destroyed$$.complete());
        }
        goToBoughtFunctions() {
          this.routingService.goTo(Oa.a.BoughtFunctions);
        }
      }
      var Sa = l.wb({
        encapsulation: 0,
        styles: [
          [
            ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.list__item[_ngcontent-%COMP%]{height:100px;padding:0 20px;width:100%;min-width:100%;max-width:100%;display:flex;align-items:center;overflow:hidden}.list-item__label[_ngcontent-%COMP%]{font-size:40px;flex:1 1 0;overflow:hidden}.list-item__icon[_ngcontent-%COMP%]{margin-left:30px;margin-right:0}.component-layout-latin[_nghost-%COMP%]   .list__item[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list__item[_ngcontent-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .list-item__icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list-item__icon[_ngcontent-%COMP%]{margin-left:30px;margin-right:0}.component-layout-arabic[_nghost-%COMP%]   .list__item[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list__item[_ngcontent-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .list-item__icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list-item__icon[_ngcontent-%COMP%]{margin-right:30px;margin-left:0}",
          ],
        ],
        data: {
          animation: [
            {
              type: 7,
              name: "childAnim",
              definitions: [
                {
                  type: 1,
                  expr: ":leave",
                  animation: {
                    type: 11,
                    selector: ":leave",
                    animation: { type: 9, options: null },
                    options: null,
                  },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function Na(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              10,
              "div",
              [["class", "list__item"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              9,
              "au3-i18n-label",
              [["class", "list-item__label"]],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
                [2, "mib3-haptic", null],
              ],
              [[null, "mib3Tap"]],
              function (n, t, e) {
                var l = !0;
                return (
                  "mib3Tap" === t &&
                    (l = !1 !== n.component.goToBoughtFunctions() && l),
                  l
                );
              },
              N.b,
              N.a,
            )),
            l.xb(
              2,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            l.xb(
              3,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            l.xb(4, 147456, null, 0, F.a, [l.l, l.z], null, null),
            l.xb(
              5,
              147456,
              null,
              0,
              z.a,
              [F.a, [2, v.a], [2, s.a], p.a],
              null,
              null,
            ),
            l.xb(
              6,
              212992,
              null,
              0,
              R.a,
              [
                p.a,
                B.b,
                z.a,
                [2, v.a],
                [2, s.a],
                [2, E.a],
                [2, H.a],
                [2, U.a],
                l.z,
                V.a,
                l.l,
                [2, $.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, K.a, K.a, [[3, K.a]]),
            l.xb(
              8,
              4407296,
              null,
              0,
              Z.a,
              [
                l.l,
                J.a,
                l.h,
                K.a,
                [2, d.a],
                [2, v.b],
                [2, v.a],
                [2, m.a],
                [2, X.a],
              ],
              null,
              null,
            ),
            l.xb(
              9,
              147456,
              null,
              0,
              Q.a,
              [
                [2, R.a],
                [2, E.a],
                [2, nn.a],
                [2, Z.a],
                [2, tn.b],
                l.l,
                en.a,
                y.b,
              ],
              null,
              null,
            ),
            l.xb(
              10,
              147456,
              null,
              0,
              ln.a,
              [[2, Z.a], [2, R.a], [2, B.b], an.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            (n(t, 2, 0, t.context.$implicit.name, t.component.FodFunction),
              n(t, 3, 0, t.context.$implicit.name, t.context.$implicit.name, 1),
              n(t, 6, 0),
              n(t, 8, 0));
          },
          function (n, t) {
            n(
              t,
              1,
              0,
              l.Nb(t, 3).backgroundColor,
              l.Nb(t, 3).fixedNumberOfLines,
              l.Nb(t, 3).mayContainLatinCharsForArabic,
              l.Nb(t, 3).shortenWithEllipsisForArabic,
              l.Nb(t, 8).markerClassEnabled,
            );
          },
        );
      }
      function Ma(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              15,
              "au3-popup",
              [],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (n, t, e) {
                var i = !0;
                return (
                  "component:@a276-popup-animation.start" === t &&
                    (i = !1 !== l.Nb(n, 7).animationStart(e) && i),
                  "component:@a276-popup-animation.done" === t &&
                    (i = !1 !== l.Nb(n, 7).animationFinished(e) && i),
                  "popup:keydown.Backspace" === t &&
                    (i = !1 !== l.Nb(n, 7).handleHkBackEvent() && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            l.Sb(6144, null, o.a, null, [u.b]),
            l.Sb(6144, null, r.b, null, [u.b]),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(4, 16384, null, 0, b.a, [l.l], null, null),
            l.Sb(512, null, d.a, d.a, []),
            l.Sb(131584, null, m.a, m.a, []),
            l.xb(
              7,
              4964352,
              null,
              1,
              u.b,
              [
                h.a,
                g.a,
                d.a,
                l.l,
                f.a,
                x.m,
                _.a,
                p.a,
                l.h,
                P.a,
                C.a,
                m.a,
                y.b,
                O.b,
                l.z,
                [2, v.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                popupTitle: [2, "popupTitle"],
                backButtonVisible: [3, "backButtonVisible"],
                hasText: [4, "hasText"],
              },
              null,
            ),
            l.Tb(603979776, 1, { dialogButtons: 1 }),
            (n()(),
            l.yb(
              9,
              0,
              null,
              1,
              6,
              "au3-list",
              [["class", "expiredFunctions"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Fn.b,
              Fn.a,
            )),
            l.Sb(6144, null, o.a, null, [zn.a]),
            l.xb(11, 16384, null, 0, b.a, [l.l], null, null),
            l.xb(
              12,
              12828672,
              null,
              1,
              zn.a,
              [
                [2, Rn.a],
                [2, Bn.a],
                [8, null],
                [2, s.a],
                [2, Hn.a],
                [2, Un.a],
                [2, B.b],
                G.i,
                l.z,
                l.h,
                p.a,
                Vn.a,
                $n.a,
                [2, J.a],
                v.a,
                [2, G.a],
              ],
              {
                defaultTemplate: [0, "defaultTemplate"],
                scrollbarInsideLayout: [1, "scrollbarInsideLayout"],
                items: [2, "items"],
              },
              null,
            ),
            l.Tb(603979776, 2, { template: 0 }),
            l.Pb(131072, yn.b, [l.h]),
            (n()(),
            l.hb(
              0,
              [
                [2, 2],
                ["defaultTemplate", 2],
              ],
              0,
              0,
              null,
              Na,
            )),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, e.popupId),
              n(
                t,
                7,
                0,
                e.popupId,
                e.PopupType.FullscreenPopup,
                "Nicht mehr verf\xfcgbare Funktionen",
                !1,
                !1,
              ),
              n(
                t,
                12,
                0,
                l.Nb(t, 15),
                !0,
                l.Yb(t, 12, 2, l.Nb(t, 14).transform(e.expiredFunctions$)),
              ));
          },
          function (n, t) {
            (n(
              t,
              0,
              0,
              l.Nb(t, 7).popupAnimBinding,
              l.Nb(t, 7).animated,
              l.Nb(t, 7).numberOfButtonsCSSVariable,
            ),
              n(t, 9, 0, l.Nb(t, 12).showLineNumbers));
          },
        );
      }
      var Ta = e("PyrH"),
        Aa = e("rFja"),
        La = e("dxLW"),
        Ea = e("tYr6"),
        ka = e("XKT5");
      class Ia {
        constructor(n, t) {
          ((this.xUrgentMessage$$ = new Wn.a(void 0)),
            (this.popupName = rn.Ob.POPUP_NAV_TRAFFIC_URGENT_MESSAGE),
            (this.popupType = rn.Rb.FullscreenPopup),
            (this.popupTitle = "Wichtige Meldung"),
            (this.ttsAutoHideReset$$ = new Wn.a(0)),
            (this.onDestroy$$ = new Yn.a(1)),
            (this.logger = t.getLogger("popups.XUrgentTrafficComponent")),
            n
              .getRequestData(this.popupName)
              .pipe(Object(et.a)(1), Object(Gn.a)(this.onDestroy$$))
              .subscribe((n) => {
                n
                  ? (this.xUrgentMessage$$.next(n.data),
                    this.logger.info(
                      "constructor: Popup opened with requestData: ",
                      n.data,
                    ))
                  : this.logger.error(
                      "constructor: NAV_TRAFFIC_URGENT_MESSAGE - requestData is null or undefined",
                    );
              }));
        }
        ngOnDestroy() {
          this.onDestroy$$.next();
        }
      }
      var Da = l.wb({
        encapsulation: 0,
        styles: [
          [
            "[_nghost-%COMP%]{text-align:center}.wrapper[_ngcontent-%COMP%]{margin-top:50px;height:100%;width:100%}.traffic-details[_ngcontent-%COMP%]     .first-line__ramp-location-wrapper, .traffic-details[_ngcontent-%COMP%]     .first-line__ramp-text, .traffic-details[_ngcontent-%COMP%]     .first-line__single-label-and-car2x-wrapper, .traffic-details[_ngcontent-%COMP%]     .first-lines__ramp{max-width:1150px;width:1150px}.traffic-details[_ngcontent-%COMP%]     .first-line__traffic-location-from, .traffic-details[_ngcontent-%COMP%]     .first-line__traffic-location-to{max-width:1150px}.traffic-details[_ngcontent-%COMP%]     .first-line__location-and-car2x-wrapper{width:1200px}",
          ],
        ],
        data: {
          animation: [
            {
              type: 7,
              name: "childAnim",
              definitions: [
                {
                  type: 1,
                  expr: ":leave",
                  animation: {
                    type: 11,
                    selector: ":leave",
                    animation: { type: 9, options: null },
                    options: null,
                  },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function Fa(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-popup",
              [],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (n, t, e) {
                var i = !0;
                return (
                  "component:@a276-popup-animation.start" === t &&
                    (i = !1 !== l.Nb(n, 6).animationStart(e) && i),
                  "component:@a276-popup-animation.done" === t &&
                    (i = !1 !== l.Nb(n, 6).animationFinished(e) && i),
                  "popup:keydown.Backspace" === t &&
                    (i = !1 !== l.Nb(n, 6).handleHkBackEvent() && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            l.Sb(6144, null, o.a, null, [u.b]),
            l.Sb(6144, null, r.b, null, [u.b]),
            l.xb(3, 16384, null, 0, b.a, [l.l], null, null),
            l.Sb(512, null, d.a, d.a, []),
            l.Sb(131584, null, m.a, m.a, []),
            l.xb(
              6,
              4964352,
              null,
              1,
              u.b,
              [
                h.a,
                g.a,
                d.a,
                l.l,
                f.a,
                x.m,
                _.a,
                p.a,
                l.h,
                P.a,
                C.a,
                m.a,
                y.b,
                O.b,
                l.z,
                [2, v.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                popupTitle: [2, "popupTitle"],
                autoHideTime: [3, "autoHideTime"],
                backButtonVisible: [4, "backButtonVisible"],
                hasText: [5, "hasText"],
              },
              null,
            ),
            l.Tb(603979776, 1, { dialogButtons: 1 }),
            l.Pb(131072, yn.b, [l.h]),
            (n()(),
            l.yb(
              9,
              0,
              null,
              1,
              3,
              "div",
              [["class", "wrapper"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              10,
              0,
              null,
              null,
              2,
              "au3-traffic-details-view",
              [["class", "traffic-details"]],
              null,
              null,
              null,
              Ta.b,
              Ta.a,
            )),
            l.xb(
              11,
              245760,
              null,
              0,
              Aa.a,
              [La.a, Ea.a, y.b, G.i, ka.a, c.a, Zn.a, p.a],
              { currentTrafficItem: [0, "currentTrafficItem"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
          ],
          function (n, t) {
            var e = t.component;
            (n(
              t,
              6,
              0,
              e.popupName,
              e.popupType,
              e.popupTitle,
              l.Yb(t, 6, 3, l.Nb(t, 8).transform(e.ttsAutoHideReset$$)),
              !1,
              !1,
            ),
              n(
                t,
                11,
                0,
                l.Yb(t, 11, 0, l.Nb(t, 12).transform(e.xUrgentMessage$$)),
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 6).popupAnimBinding,
              l.Nb(t, 6).animated,
              l.Nb(t, 6).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      var za = e("6dmc");
      e("uWIZ");
      class Ra {
        constructor(n) {
          ((this.iconCategoryList = rn.Z.List),
            (this.eventIconsScaleMode = rn.ab.None),
            (this.logger = n.getLogger(
              "navi.trafficevents.VicsEmergencyDialogComponent",
              [za.a.NAVVICS],
            )));
        }
        set currentVicsEmergencyEntry(n) {
          ((this._currentVicsMessage = n),
            this.logger.info("received vics emergency message:", n));
        }
        get currentVicsTrafficMessage() {
          const n =
            this._currentVicsMessage &&
            this._currentVicsMessage.trafficMessageAttributes
              ? this._currentVicsMessage.trafficMessageAttributes
              : void 0;
          return n
            ? Object(ti.a)({
                id: this._currentVicsMessage.id,
                name: this._currentVicsMessage.name,
                uri: this._currentVicsMessage.uri,
                area: n.area,
                shortenedEventDescription: {
                  icon: n.shortenedEventDescription
                    ? n.shortenedEventDescription.icon
                    : "",
                  text: n.shortenedEventDescription
                    ? n.shortenedEventDescription.text
                    : "",
                },
                detailedEventDescription: [
                  {
                    icon:
                      n.detailedEventDescription &&
                      n.detailedEventDescription[0]
                        ? n.detailedEventDescription[0].icon
                        : "",
                    text:
                      n.detailedEventDescription &&
                      n.detailedEventDescription[0]
                        ? n.detailedEventDescription[0].text
                        : "",
                  },
                ],
              })
            : Object(ti.a)(void 0);
        }
      }
      var Ba = l.wb({
        encapsulation: 0,
        styles: [
          [
            ".vics-message[_ngcontent-%COMP%]{height:100%;display:flex;align-content:center;justify-content:center;flex-direction:column;text-align:center;font-size:40px}.first-line__text[_ngcontent-%COMP%], .second-line__text[_ngcontent-%COMP%], .third-line[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;display:block;margin-top:20px;line-height:49px}.third-line[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-wrap:nowrap}.third-line__event-text-wrapper[_ngcontent-%COMP%]{max-height:147px}.third-line__event-text[_ngcontent-%COMP%]{text-align:center;white-space:normal}",
          ],
        ],
        data: {},
      });
      function Ha(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              15,
              "div",
              [["class", "vics-message"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "first-line__text"],
                ["id", "EventType"],
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
              N.b,
              N.a,
            )),
            l.xb(
              2,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(3, 16384, null, 0, A.a, [], null, null),
            l.xb(
              4,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                id: [0, "id"],
                fixedNumberOfLines: [1, "fixedNumberOfLines"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
            (n()(),
            l.yb(
              5,
              0,
              null,
              null,
              4,
              "au3-i18n-label",
              [
                ["class", "second-line__text"],
                ["id", "InArea"],
              ],
              [
                [4, "background-color", null],
                [2, "fixed-lines", null],
                [2, "label--latin-chars-for-arabic", null],
                [2, "label--shortening-ellipsis-for-arabic", null],
              ],
              null,
              null,
              N.b,
              N.a,
            )),
            l.xb(
              6,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              7,
              16384,
              null,
              0,
              L.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            l.Qb(8, { area: 0 }),
            l.xb(
              9,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
              },
              null,
            ),
            (n()(),
            l.yb(
              10,
              0,
              null,
              null,
              5,
              "div",
              [["class", "third-line"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              11,
              0,
              null,
              null,
              4,
              "div",
              [["class", "third-line__event-text-wrapper"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              12,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "third-line__event-text"],
                ["id", "DetailedEventText"],
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
              N.b,
              N.a,
            )),
            l.xb(
              13,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(14, 16384, null, 0, A.a, [], null, null),
            l.xb(
              15,
              245760,
              null,
              0,
              M.a,
              [[6, s.a], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                id: [0, "id"],
                fixedNumberOfLines: [1, "fixedNumberOfLines"],
                nonI18nValue: [2, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 2, 0, "EventType"),
              n(
                t,
                4,
                0,
                "EventType",
                1,
                null == t.context.mib3Let ||
                  null == t.context.mib3Let.shortenedEventDescription
                  ? null
                  : t.context.mib3Let.shortenedEventDescription.text,
              ),
              n(t, 6, 0, "InArea"));
            var e = n(
              t,
              8,
              0,
              null == t.context.mib3Let ? null : t.context.mib3Let.area,
            );
            (n(t, 7, 0, e),
              n(t, 9, 0, "In {{area}}", "InArea", 1),
              n(t, 13, 0, "DetailedEventText"),
              n(
                t,
                15,
                0,
                "DetailedEventText",
                3,
                null == t.context.mib3Let ||
                  null == t.context.mib3Let.detailedEventDescription[0]
                  ? null
                  : t.context.mib3Let.detailedEventDescription[0].text,
              ));
          },
          function (n, t) {
            (n(
              t,
              1,
              0,
              l.Nb(t, 4).backgroundColor,
              l.Nb(t, 4).fixedNumberOfLines,
              l.Nb(t, 4).mayContainLatinCharsForArabic,
              l.Nb(t, 4).shortenWithEllipsisForArabic,
            ),
              n(
                t,
                5,
                0,
                l.Nb(t, 9).backgroundColor,
                l.Nb(t, 9).fixedNumberOfLines,
                l.Nb(t, 9).mayContainLatinCharsForArabic,
                l.Nb(t, 9).shortenWithEllipsisForArabic,
              ),
              n(
                t,
                12,
                0,
                l.Nb(t, 15).backgroundColor,
                l.Nb(t, 15).fixedNumberOfLines,
                l.Nb(t, 15).mayContainLatinCharsForArabic,
                l.Nb(t, 15).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      function Ua(n) {
        return l.ac(
          0,
          [
            (n()(), l.hb(16777216, null, null, 2, null, Ha)),
            l.xb(
              1,
              16384,
              null,
              0,
              An.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
          ],
          function (n, t) {
            var e = t.component;
            n(
              t,
              1,
              0,
              l.Yb(t, 1, 0, l.Nb(t, 2).transform(e.currentVicsTrafficMessage)),
            );
          },
          null,
        );
      }
      var Va = e("1Eyf"),
        $a = e("vyNh");
      class Wa {
        constructor(n, t, e, l, i) {
          ((this.vicsEmergencyMessagesService = n),
            (this.navRoutingService = t),
            (this.popupManager = e),
            (this.cdr = l),
            (this.destroy$$ = new Yn.a(1)),
            (this.shownIds = []),
            (this.emergencyMessageList$$ = new Wn.a([])),
            (this.currentVicsMessage$$ = new Wn.a(void 0)),
            (this.popupName = rn.Ob.POPUP_ASIA_JP_VICS_EMERGENCY_INFO),
            (this.popupType = rn.Rb.FullscreenPopup),
            (this.popupContext = rn.s.Navi),
            (this.currentEntryIndex = 0),
            (this.logger = i.getLogger(
              "navi.trafficevents.VicsEmergencyDialogComponent",
              [za.a.NAVVICS],
            )));
        }
        ngOnInit() {
          this.subscribeToRequestedData();
        }
        ngOnDestroy() {
          ((this.vicsEmergencyMessagesService.shownPopupIds = this.shownIds),
            this.destroy$$.next());
        }
        showNextMessage() {
          this.currentEntryIndex <
          this.emergencyMessageList$$.getValue().length - 1
            ? (this.currentEntryIndex++,
              this.shownIds.push(
                this.emergencyMessageList$$.getValue()[this.currentEntryIndex]
                  .id,
              ),
              this.currentVicsMessage$$.next(
                this.emergencyMessageList$$.getValue()[this.currentEntryIndex],
              ),
              this.cdr.markForCheck())
            : this.logger.warn(
                `showNextMessage: currentEntryIndex (${this.currentEntryIndex}) exceeds ArrayLength (${this.emergencyMessageList$$.getValue().length})!`,
              );
        }
        showOnMap() {
          const n = this.currentVicsMessage$$.getValue();
          Object(rn.wd)(n) &&
          n.trafficMessageAttributes &&
          Object(rn.wd)(n.trafficMessageAttributes.key)
            ? (this.logger.info(
                "showOnMap: go to big preview map to show current VICS area emergency message:",
                n.trafficMessageAttributes.key,
              ),
              this.navRoutingService.goToMapPreview(
                n.trafficMessageAttributes.key,
                Va.b.TRAFFICMESSAGE,
              ))
            : this.logger.error(
                "showOnMap: there is no currentVicsMessage to show on map!",
                n,
              );
        }
        subscribeToRequestedData() {
          this.popupManager
            .getRequestData(this.popupName)
            .pipe(
              Object(vi.a)(rn.wd),
              Object(rn.pd)(this.logger, "subscribeToRequestedData:"),
              Object(et.a)(1),
              Object(Gn.a)(this.destroy$$),
            )
            .subscribe((n) => {
              const t = n.data;
              (t && t.length > 0
                ? (this.shownIds.push(t[0].id),
                  this.logger.info(
                    "subscribeToRequestedData: vics emergency messages received, number of list entries:",
                    t.length,
                  ),
                  this.emergencyMessageList$$.next(t),
                  this.currentVicsMessage$$.next(t[0]))
                : this.logger.error(
                    "subscribeToRequestedData: No vics emergency messages received, list is empty",
                  ),
                this.cdr.markForCheck());
            });
        }
      }
      var Ya = l.wb({
        encapsulation: 0,
        styles: [
          [
            "host[_ngcontent-%COMP%]{display:block}.vics-emergency-message__content[_ngcontent-%COMP%]{height:100%;width:100%}",
          ],
        ],
        data: {},
      });
      function Ga(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-popup-dialog-button",
              [["id", "NextButton"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "tapPopupButtonEvent"]],
              function (n, t, e) {
                var l = !0;
                return (
                  "tapPopupButtonEvent" === t &&
                    (l = !1 !== n.component.showNextMessage() && l),
                  l
                );
              },
              bi.b,
              bi.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              147456,
              null,
              0,
              E.a,
              [k.a, l.h, p.a, [3, E.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            l.xb(
              3,
              49152,
              null,
              0,
              di.a,
              [[2, s.a], l.l],
              {
                developerText: [0, "developerText"],
                closePopupAfterClick: [1, "closePopupAfterClick"],
              },
              { tapPopupButtonEvent: "tapPopupButtonEvent" },
            ),
            l.Sb(2048, [[1, 4]], mi.a, null, [di.a]),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, "NextButton"),
              n(
                t,
                2,
                0,
                e.currentEntryIndex >= t.parent.context.mib3Let.length - 1,
              ),
              n(t, 3, 0, "Show next", !1));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).combinedDisabled, l.Nb(t, 2).useBrighterIcon);
          },
        );
      }
      function ja(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              17,
              "au3-popup",
              [["id", "VicsEmergencyMessage"]],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (n, t, e) {
                var i = !0;
                return (
                  "component:@a276-popup-animation.start" === t &&
                    (i = !1 !== l.Nb(n, 7).animationStart(e) && i),
                  "component:@a276-popup-animation.done" === t &&
                    (i = !1 !== l.Nb(n, 7).animationFinished(e) && i),
                  "popup:keydown.Backspace" === t &&
                    (i = !1 !== l.Nb(n, 7).handleHkBackEvent() && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            l.Sb(6144, null, o.a, null, [u.b]),
            l.Sb(6144, null, r.b, null, [u.b]),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(4, 16384, null, 0, b.a, [l.l], null, null),
            l.Sb(512, null, d.a, d.a, []),
            l.Sb(131584, null, m.a, m.a, []),
            l.xb(
              7,
              4964352,
              null,
              1,
              u.b,
              [
                h.a,
                g.a,
                d.a,
                l.l,
                f.a,
                x.m,
                _.a,
                p.a,
                l.h,
                P.a,
                C.a,
                m.a,
                y.b,
                O.b,
                l.z,
                [2, v.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                hasTitle: [2, "hasTitle"],
                popupTitle: [3, "popupTitle"],
                popupTitleId: [4, "popupTitleId"],
                context: [5, "context"],
                surviveScreenChange: [6, "surviveScreenChange"],
                hasText: [7, "hasText"],
              },
              null,
            ),
            l.Tb(603979776, 1, { dialogButtons: 1 }),
            (n()(),
            l.yb(
              9,
              0,
              null,
              2,
              3,
              "au3-popup-dialog-button",
              [["id", "ShowOnMapButton"]],
              null,
              [[null, "tapPopupButtonEvent"]],
              function (n, t, e) {
                var l = !0;
                return (
                  "tapPopupButtonEvent" === t &&
                    (l = !1 !== n.component.showOnMap() && l),
                  l
                );
              },
              bi.b,
              bi.a,
            )),
            l.xb(
              10,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              11,
              49152,
              null,
              0,
              di.a,
              [[2, s.a], l.l],
              {
                developerText: [0, "developerText"],
                closePopupAfterClick: [1, "closePopupAfterClick"],
              },
              { tapPopupButtonEvent: "tapPopupButtonEvent" },
            ),
            l.Sb(2048, [[1, 4]], mi.a, null, [di.a]),
            (n()(), l.hb(16777216, null, 2, 1, null, Ga)),
            l.xb(
              14,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            l.yb(
              15,
              0,
              null,
              1,
              2,
              "au3-vics-emergency-message-view",
              [["class", "vics-emergency-message__content"]],
              null,
              null,
              null,
              Ua,
              Ba,
            )),
            l.xb(
              16,
              49152,
              null,
              0,
              Ra,
              [p.a],
              { currentVicsEmergencyEntry: [0, "currentVicsEmergencyEntry"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, "VicsEmergencyMessage"),
              n(
                t,
                7,
                0,
                e.popupName,
                e.popupType,
                !0,
                "Emergency Info",
                "EmergencyInfo",
                e.popupContext,
                !0,
                !1,
              ),
              n(t, 10, 0, "ShowOnMapButton"),
              n(t, 11, 0, "Show on map", !0),
              n(t, 14, 0, t.context.mib3Let.length > 1),
              n(
                t,
                16,
                0,
                l.Yb(t, 16, 0, l.Nb(t, 17).transform(e.currentVicsMessage$$)),
              ));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 7).popupAnimBinding,
              l.Nb(t, 7).animated,
              l.Nb(t, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      function Ka(n) {
        return l.ac(
          2,
          [
            (n()(), l.hb(16777216, null, null, 2, null, ja)),
            l.xb(
              1,
              16384,
              null,
              0,
              An.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
          ],
          function (n, t) {
            var e = t.component;
            n(
              t,
              1,
              0,
              l.Yb(t, 1, 0, l.Nb(t, 2).transform(e.emergencyMessageList$$)),
            );
          },
          null,
        );
      }
      var Za = e("oWpa"),
        Ja = e("yegR"),
        Xa = e("Olpa"),
        qa = e("Bfm3"),
        Qa = e("Bw87");
      class no {
        constructor(n) {
          ((this.etcCardStatusService = n),
            (this.popupName = rn.Ob.POPUP_ETC_ERROR),
            (this.popupType = rn.Rb.Dialog),
            (this.popupActionEnum = rn.Nb),
            (this.ETCStatusText = qa.b),
            (this.contextEnum = rn.s),
            (this.cardStatus = this.etcCardStatusService.cardState));
        }
      }
      var to = l.wb({
        encapsulation: 0,
        styles: [
          [
            ".status-text[_ngcontent-%COMP%]{font-size:40px;color:#fff;text-align:center}",
          ],
        ],
        data: {
          animation: [
            {
              type: 7,
              name: "childAnim",
              definitions: [
                {
                  type: 1,
                  expr: ":leave",
                  animation: {
                    type: 11,
                    selector: ":leave",
                    animation: { type: 9, options: null },
                    options: { optional: !0 },
                  },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function eo(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              5,
              "au3-statustext",
              [["class", "status-text"]],
              null,
              null,
              null,
              Za.b,
              Za.a,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            l.xb(
              2,
              16384,
              null,
              0,
              L.a,
              [],
              { ttInterpolateParams: [0, "ttInterpolateParams"] },
              null,
            ),
            l.Qb(3, { statusCode: 0 }),
            l.xb(
              4,
              49152,
              null,
              0,
              Ja.a,
              [],
              {
                maxNumberOfLines: [0, "maxNumberOfLines"],
                developerText: [1, "developerText"],
                ttInterpolateParams: [2, "ttInterpolateParams"],
              },
              null,
            ),
            l.Qb(5, { statusCode: 0 }),
          ],
          function (n, t) {
            var e = t.component;
            n(t, 1, 0, t.context.mib3Let, e.ETCStatusText);
            var l = n(
              t,
              3,
              0,
              null == e.cardStatus ? null : e.cardStatus.errorCode,
            );
            n(t, 2, 0, l);
            var i = t.context.mib3Let,
              a = n(
                t,
                5,
                0,
                null == e.cardStatus ? null : e.cardStatus.errorCode,
              );
            n(t, 4, 0, 4, i, a);
          },
          null,
        );
      }
      function lo(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              4,
              "au3-disclaimer",
              [],
              null,
              null,
              null,
              Nn.b,
              Nn.a,
            )),
            l.xb(
              1,
              4440064,
              null,
              0,
              Mn.a,
              [Tn.a, [2, s.a], l.h, p.a],
              null,
              null,
            ),
            (n()(), l.hb(16777216, null, 0, 2, null, eo)),
            l.xb(
              3,
              16384,
              null,
              0,
              An.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            l.Rb(4, 1),
          ],
          function (n, t) {
            var e = t.component;
            n(t, 1, 0);
            var i = l.Yb(t, 3, 0, n(t, 4, 0, l.Nb(t.parent, 0), e.cardStatus));
            n(t, 3, 0, i);
          },
          null,
        );
      }
      function io(n) {
        return l.ac(
          2,
          [
            l.Pb(0, Xa.a, [p.a]),
            (n()(),
            l.yb(
              1,
              0,
              null,
              null,
              14,
              "au3-popup",
              [["id", "EtcError--CL32--"]],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (n, t, e) {
                var i = !0;
                return (
                  "component:@a276-popup-animation.start" === t &&
                    (i = !1 !== l.Nb(n, 8).animationStart(e) && i),
                  "component:@a276-popup-animation.done" === t &&
                    (i = !1 !== l.Nb(n, 8).animationFinished(e) && i),
                  "popup:keydown.Backspace" === t &&
                    (i = !1 !== l.Nb(n, 8).handleHkBackEvent() && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            l.Sb(6144, null, o.a, null, [u.b]),
            l.Sb(6144, null, r.b, null, [u.b]),
            l.xb(
              4,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(5, 16384, null, 0, b.a, [l.l], null, null),
            l.Sb(512, null, d.a, d.a, []),
            l.Sb(131584, null, m.a, m.a, []),
            l.xb(
              8,
              4964352,
              null,
              1,
              u.b,
              [
                h.a,
                g.a,
                d.a,
                l.l,
                f.a,
                x.m,
                _.a,
                p.a,
                l.h,
                P.a,
                C.a,
                m.a,
                y.b,
                O.b,
                l.z,
                [2, v.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                popupTitle: [2, "popupTitle"],
                context: [3, "context"],
                autoHideTime: [4, "autoHideTime"],
                darkenBackground: [5, "darkenBackground"],
                dynamicSize: [6, "dynamicSize"],
                hasText: [7, "hasText"],
              },
              null,
            ),
            l.Tb(603979776, 1, { dialogButtons: 1 }),
            (n()(), l.hb(16777216, null, 1, 1, null, lo)),
            l.xb(
              11,
              16384,
              null,
              0,
              An.a,
              [l.L, l.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            (n()(),
            l.yb(
              12,
              0,
              null,
              2,
              3,
              "au3-popup-dialog-button",
              [["id", "Close"]],
              null,
              null,
              null,
              bi.b,
              bi.a,
            )),
            l.xb(
              13,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              14,
              49152,
              null,
              0,
              di.a,
              [[2, s.a], l.l],
              {
                developerText: [0, "developerText"],
                popupAction: [1, "popupAction"],
              },
              null,
            ),
            l.Sb(2048, [[1, 4]], mi.a, null, [di.a]),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 4, 0, "EtcError--CL32--"),
              n(
                t,
                8,
                0,
                e.popupName,
                e.popupType,
                "ETC",
                e.contextEnum.Car,
                e.autoHideTime,
                !0,
                !0,
                !1,
              ),
              n(t, 11, 0, e.cardStatus),
              n(t, 13, 0, "Close"),
              n(t, 14, 0, "Close", e.popupActionEnum.CLOSE));
          },
          function (n, t) {
            n(
              t,
              1,
              0,
              l.Nb(t, 8).popupAnimBinding,
              l.Nb(t, 8).animated,
              l.Nb(t, 8).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      var ao = e("NiMd");
      class oo {
        constructor(n) {
          ((this.koreanPublicAlertSystemService = n),
            (this.popupType = rn.Rb.FullscreenPopup),
            (this.id = rn.Ob.POPUP_DW_POPUP_MAIN));
        }
        onClose() {
          this.koreanPublicAlertSystemService.nextDisasterWarning();
        }
      }
      var uo = l.wb({
        encapsulation: 0,
        styles: [
          [
            ".content[_ngcontent-%COMP%]{display:flex;height:100%;flex-direction:column;align-content:center;text-align:center}.content[_ngcontent-%COMP%], .list[_ngcontent-%COMP%]{width:100%}.text[_ngcontent-%COMP%]{flex-grow:1;max-width:100%;word-break:normal;white-space:pre-line;font-size:37px}",
          ],
        ],
        data: {
          animation: [
            {
              type: 7,
              name: "childAnim",
              definitions: [
                {
                  type: 1,
                  expr: ":leave",
                  animation: {
                    type: 11,
                    selector: ":leave",
                    animation: { type: 9, options: null },
                    options: null,
                  },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function ro(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              24,
              "au3-popup",
              [["id", "DisasterWarning"]],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                [null, "returnMessage"],
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (n, t, e) {
                var i = !0,
                  a = n.component;
                return (
                  "component:@a276-popup-animation.start" === t &&
                    (i = !1 !== l.Nb(n, 7).animationStart(e) && i),
                  "component:@a276-popup-animation.done" === t &&
                    (i = !1 !== l.Nb(n, 7).animationFinished(e) && i),
                  "popup:keydown.Backspace" === t &&
                    (i = !1 !== l.Nb(n, 7).handleHkBackEvent() && i),
                  "returnMessage" === t && (i = !1 !== a.onClose() && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            l.Sb(6144, null, o.a, null, [u.b]),
            l.Sb(6144, null, r.b, null, [u.b]),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(4, 16384, null, 0, b.a, [l.l], null, null),
            l.Sb(512, null, d.a, d.a, []),
            l.Sb(131584, null, m.a, m.a, []),
            l.xb(
              7,
              4964352,
              null,
              1,
              u.b,
              [
                h.a,
                g.a,
                d.a,
                l.l,
                f.a,
                x.m,
                _.a,
                p.a,
                l.h,
                P.a,
                C.a,
                m.a,
                y.b,
                O.b,
                l.z,
                [2, v.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                popupTitle: [2, "popupTitle"],
                closeWhenClickedOutside: [3, "closeWhenClickedOutside"],
                backButtonVisible: [4, "backButtonVisible"],
                closeButtonVisible: [5, "closeButtonVisible"],
                hasText: [6, "hasText"],
              },
              { returnMessage: "returnMessage" },
            ),
            l.Tb(603979776, 1, { dialogButtons: 1 }),
            (n()(),
            l.yb(
              9,
              0,
              null,
              1,
              11,
              "au3-disclaimer",
              [],
              null,
              null,
              null,
              Nn.b,
              Nn.a,
            )),
            l.xb(
              10,
              4440064,
              null,
              0,
              Mn.a,
              [Tn.a, [2, s.a], l.h, p.a],
              null,
              null,
            ),
            (n()(),
            l.yb(
              11,
              0,
              null,
              0,
              9,
              "div",
              [["class", "content"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              12,
              0,
              null,
              null,
              8,
              "au3-list",
              [["class", "list"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Fn.b,
              Fn.a,
            )),
            l.Sb(6144, null, o.a, null, [zn.a]),
            l.xb(14, 16384, null, 0, b.a, [l.l], null, null),
            l.xb(
              15,
              12828672,
              null,
              1,
              zn.a,
              [
                [2, Rn.a],
                [2, Bn.a],
                [8, null],
                [2, s.a],
                [2, Hn.a],
                [2, Un.a],
                [2, B.b],
                G.i,
                l.z,
                l.h,
                p.a,
                Vn.a,
                $n.a,
                [2, J.a],
                v.a,
                [2, G.a],
              ],
              { showSeparators: [0, "showSeparators"] },
              null,
            ),
            l.Tb(603979776, 2, { template: 0 }),
            (n()(),
            l.yb(
              17,
              0,
              null,
              0,
              3,
              "au3-i18n-label",
              [
                ["class", "text"],
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
              N.b,
              N.a,
            )),
            l.xb(18, 16384, null, 0, A.a, [], null, null),
            l.xb(
              19,
              245760,
              null,
              0,
              M.a,
              [[8, null], C.a, l.h, l.l, l.D, [2, T.a], [2, A.a], [2, L.a]],
              {
                fixedNumberOfLines: [0, "fixedNumberOfLines"],
                nonI18nValue: [1, "nonI18nValue"],
              },
              null,
            ),
            l.Pb(131072, yn.b, [l.h]),
            (n()(),
            l.yb(
              21,
              0,
              null,
              2,
              3,
              "au3-popup-dialog-button",
              [["id", "okButton"]],
              null,
              null,
              null,
              bi.b,
              bi.a,
            )),
            l.xb(
              22,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              23,
              49152,
              null,
              0,
              di.a,
              [[2, s.a], l.l],
              {
                developerText: [0, "developerText"],
                closePopupAfterClick: [1, "closePopupAfterClick"],
              },
              null,
            ),
            l.Sb(2048, [[1, 4]], mi.a, null, [di.a]),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, "DisasterWarning"),
              n(
                t,
                7,
                0,
                e.id,
                e.popupType,
                "Public Warning Message",
                !1,
                !1,
                !0,
                !1,
              ),
              n(t, 10, 0),
              n(t, 15, 0, !1),
              n(
                t,
                19,
                0,
                99,
                l.Yb(
                  t,
                  19,
                  1,
                  l
                    .Nb(t, 20)
                    .transform(
                      e.koreanPublicAlertSystemService
                        .activeDisasterWarningMessage$,
                    ),
                ),
              ),
              n(t, 22, 0, "okButton"),
              n(t, 23, 0, "OK", !0));
          },
          function (n, t) {
            (n(
              t,
              0,
              0,
              l.Nb(t, 7).popupAnimBinding,
              l.Nb(t, 7).animated,
              l.Nb(t, 7).numberOfButtonsCSSVariable,
            ),
              n(t, 12, 0, l.Nb(t, 15).showLineNumbers),
              n(
                t,
                17,
                0,
                l.Nb(t, 19).backgroundColor,
                l.Nb(t, 19).fixedNumberOfLines,
                l.Nb(t, 19).mayContainLatinCharsForArabic,
                l.Nb(t, 19).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
      var so = e("8lHc");
      class co {
        constructor(n, t) {
          ((this.popupManager = n),
            (this.dataDictionary = t),
            (this.popupType = rn.Rb.FullscreenPopup),
            (this.popupId = rn.Ob.POPUP_BANNER_SYSTEM_DISCLAIMER_JP),
            (this.destroy$$ = new Yn.a(1)));
        }
        ngOnInit() {
          Object(so.a)(this.dataDictionary.t_SysDisclaimer_JP)
            .pipe(Object(Gn.a)(this.destroy$$))
            .subscribe(() => this.closePopup());
        }
        closePopup() {
          this.popupManager.unrequest(this.popupId);
        }
        ngOnDestroy() {
          this.destroy$$.next();
        }
      }
      var po = l.wb({
        encapsulation: 2,
        styles: [],
        data: {
          animation: [
            {
              type: 7,
              name: "childAnim",
              definitions: [
                {
                  type: 1,
                  expr: ":leave",
                  animation: {
                    type: 11,
                    selector: ":leave",
                    animation: { type: 9, options: null },
                    options: null,
                  },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function bo(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-popup",
              [["id", "BannerSystemDisclaimerJP"]],
              [
                [2, "popup", null],
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (n, t, e) {
                var i = !0;
                return (
                  "component:@a276-popup-animation.start" === t &&
                    (i = !1 !== l.Nb(n, 7).animationStart(e) && i),
                  "component:@a276-popup-animation.done" === t &&
                    (i = !1 !== l.Nb(n, 7).animationFinished(e) && i),
                  "popup:keydown.Backspace" === t &&
                    (i = !1 !== l.Nb(n, 7).handleHkBackEvent() && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            l.Sb(6144, null, o.a, null, [u.b]),
            l.Sb(6144, null, r.b, null, [u.b]),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(4, 16384, null, 0, b.a, [l.l], null, null),
            l.Sb(512, null, d.a, d.a, []),
            l.Sb(131584, null, m.a, m.a, []),
            l.xb(
              7,
              4964352,
              null,
              1,
              u.b,
              [
                h.a,
                g.a,
                d.a,
                l.l,
                f.a,
                x.m,
                _.a,
                p.a,
                l.h,
                P.a,
                C.a,
                m.a,
                y.b,
                O.b,
                l.z,
                [2, v.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                popupTitle: [2, "popupTitle"],
                backButtonVisible: [3, "backButtonVisible"],
                hasText: [4, "hasText"],
                text: [5, "text"],
              },
              null,
            ),
            l.Tb(603979776, 1, { dialogButtons: 1 }),
            (n()(),
            l.yb(
              9,
              0,
              null,
              2,
              3,
              "au3-popup-dialog-button",
              [["id", "OK"]],
              null,
              null,
              null,
              bi.b,
              bi.a,
            )),
            l.xb(
              10,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              11,
              49152,
              null,
              0,
              di.a,
              [[2, s.a], l.l],
              { developerText: [0, "developerText"] },
              null,
            ),
            l.Sb(2048, [[1, 4]], mi.a, null, [di.a]),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, "BannerSystemDisclaimerJP"),
              n(
                t,
                7,
                0,
                e.popupId,
                e.popupType,
                "Hinweis",
                !1,
                !0,
                "The Audi MMI should only be used when it is safe and appropiate.",
              ),
              n(t, 10, 0, "OK"),
              n(t, 11, 0, "Ok"));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              !0,
              l.Nb(t, 7).popupAnimBinding,
              l.Nb(t, 7).animated,
              l.Nb(t, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      var mo = e("xwkZ"),
        ho = e("qoeV"),
        go = e("/CBQ"),
        fo = e("lsvA"),
        xo = e("IbSj"),
        _o = e("D+TJ"),
        Po = e("feZC"),
        Co = l.wb({
          encapsulation: 0,
          styles: [
            [
              ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:block}.container[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:row;align-items:center;width:100%;height:100%}.tile-list[_ngcontent-%COMP%]{flex:1 0 0;height:100%}.tile-list-item[_ngcontent-%COMP%]{height:100px}.tile[_ngcontent-%COMP%]{flex:0 0 228px}.component-layout-latin[_nghost-%COMP%]   .tile[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .tile[_ngcontent-%COMP%]{margin-left:56px}.component-layout-arabic[_nghost-%COMP%]   .container[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .container[_ngcontent-%COMP%]{flex-direction:row-reverse}.component-layout-arabic[_nghost-%COMP%]   .tile[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .tile[_ngcontent-%COMP%]{margin-right:56px}",
            ],
          ],
          data: {
            animation: [
              {
                type: 7,
                name: "childAnim",
                definitions: [
                  {
                    type: 1,
                    expr: ":leave",
                    animation: {
                      type: 11,
                      selector: ":leave",
                      animation: { type: 9, options: null },
                      options: null,
                    },
                    options: null,
                  },
                ],
                options: {},
              },
            ],
          },
        });
      function yo(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-list-radiobutton-item",
              [["class", "tile-list-item"]],
              [
                [2, "state-disabled", null],
                [2, "state-disabled-brighter", null],
              ],
              [[null, "valueChange"]],
              function (n, t, e) {
                var l = !0;
                return (
                  "valueChange" === t &&
                    (l =
                      !1 !== n.component.tileSelected(n.context.$implicit) &&
                      l),
                  l
                );
              },
              mo.b,
              mo.a,
            )),
            l.xb(
              1,
              147456,
              null,
              0,
              E.a,
              [k.a, l.h, p.a, [3, E.a]],
              { disabled: [0, "disabled"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              ho.a,
              [],
              {
                titleTextId: [0, "titleTextId"],
                titleIdEnumType: [1, "titleIdEnumType"],
                titleDeveloperText: [2, "titleDeveloperText"],
                checked: [3, "checked"],
              },
              { valueChange: "valueChange" },
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, e.isTileAlreadyInDashboard(t.context.$implicit)),
              n(
                t,
                2,
                0,
                t.context.$implicit,
                e.DashboardTileId,
                t.context.$implicit,
                e.selectedTile === t.context.$implicit,
              ));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 1).combinedDisabled, l.Nb(t, 1).useBrighterIcon);
          },
        );
      }
      function Oo(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              22,
              "au3-popup",
              [["id", "DashboardEditMode"]],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (n, t, e) {
                var i = !0;
                return (
                  "component:@a276-popup-animation.start" === t &&
                    (i = !1 !== l.Nb(n, 7).animationStart(e) && i),
                  "component:@a276-popup-animation.done" === t &&
                    (i = !1 !== l.Nb(n, 7).animationFinished(e) && i),
                  "popup:keydown.Backspace" === t &&
                    (i = !1 !== l.Nb(n, 7).handleHkBackEvent() && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            l.Sb(6144, null, o.a, null, [u.b]),
            l.Sb(6144, null, r.b, null, [u.b]),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(4, 16384, null, 0, b.a, [l.l], null, null),
            l.Sb(512, null, d.a, d.a, []),
            l.Sb(131584, null, m.a, m.a, []),
            l.xb(
              7,
              4964352,
              null,
              1,
              u.b,
              [
                h.a,
                g.a,
                d.a,
                l.l,
                f.a,
                x.m,
                _.a,
                p.a,
                l.h,
                P.a,
                C.a,
                m.a,
                y.b,
                O.b,
                l.z,
                [2, v.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                popupTitle: [2, "popupTitle"],
                surviveScreenChange: [3, "surviveScreenChange"],
                backButtonVisible: [4, "backButtonVisible"],
                hasText: [5, "hasText"],
              },
              null,
            ),
            l.Tb(603979776, 1, { dialogButtons: 1 }),
            (n()(),
            l.yb(
              9,
              0,
              null,
              1,
              9,
              "div",
              [["class", "container"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            l.yb(
              10,
              0,
              null,
              null,
              6,
              "au3-list",
              [["class", "tile-list"]],
              [[2, "list--with-line-numbers", null]],
              null,
              null,
              Fn.b,
              Fn.a,
            )),
            l.Sb(6144, null, o.a, null, [zn.a]),
            l.xb(12, 16384, null, 0, b.a, [l.l], null, null),
            l.xb(
              13,
              12828672,
              null,
              1,
              zn.a,
              [
                [2, Rn.a],
                [2, Bn.a],
                [8, null],
                [2, s.a],
                [2, Hn.a],
                [2, Un.a],
                [2, B.b],
                G.i,
                l.z,
                l.h,
                p.a,
                Vn.a,
                $n.a,
                [2, J.a],
                v.a,
                [2, G.a],
              ],
              { defaultTemplate: [0, "defaultTemplate"], items: [1, "items"] },
              null,
            ),
            l.Tb(603979776, 2, { template: 0 }),
            l.Pb(131072, yn.b, [l.h]),
            (n()(),
            l.hb(
              0,
              [
                [2, 2],
                ["defaultTemplate", 2],
              ],
              0,
              0,
              null,
              yo,
            )),
            (n()(),
            l.yb(
              17,
              0,
              null,
              null,
              1,
              "au3-dashboard-tile-container",
              [["class", "tile"]],
              null,
              null,
              null,
              go.b,
              go.a,
            )),
            l.xb(18, 49152, null, 0, fo.a, [], { tileId: [0, "tileId"] }, null),
            (n()(),
            l.yb(
              19,
              0,
              null,
              2,
              3,
              "au3-popup-dialog-button",
              [["id", "OkButton"]],
              null,
              [[null, "tapPopupButtonEvent"]],
              function (n, t, e) {
                var l = !0,
                  i = n.component;
                return (
                  "tapPopupButtonEvent" === t &&
                    (l =
                      !1 !==
                        i.confirmSelection(
                          null == i.tileData ? null : i.tileData.tilePosition,
                        ) && l),
                  l
                );
              },
              bi.b,
              bi.a,
            )),
            l.xb(
              20,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              21,
              49152,
              null,
              0,
              di.a,
              [[2, s.a], l.l],
              {
                developerText: [0, "developerText"],
                popupAction: [1, "popupAction"],
                returnMessageContent: [2, "returnMessageContent"],
              },
              { tapPopupButtonEvent: "tapPopupButtonEvent" },
            ),
            l.Sb(2048, [[1, 4]], mi.a, null, [di.a]),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, "DashboardEditMode"),
              n(
                t,
                7,
                0,
                e.PopupIds.POPUP_DASHBOARD_CONFIGURATION_MODE_POPUP,
                e.PopupType.FullscreenPopup,
                "Dashboard Edit Mode",
                !1,
                !1,
                !1,
              ),
              n(
                t,
                13,
                0,
                l.Nb(t, 16),
                l.Yb(t, 13, 1, l.Nb(t, 15).transform(e.tiles$)),
              ),
              n(t, 18, 0, e.selectedTile),
              n(t, 20, 0, "OkButton"),
              n(t, 21, 0, "Ok", e.PopupAction.OK, e.selectedTile));
          },
          function (n, t) {
            (n(
              t,
              0,
              0,
              l.Nb(t, 7).popupAnimBinding,
              l.Nb(t, 7).animated,
              l.Nb(t, 7).numberOfButtonsCSSVariable,
            ),
              n(t, 10, 0, l.Nb(t, 13).showLineNumbers));
          },
        );
      }
      class vo {
        constructor() {
          ((this.popupType = rn.Rb), (this.popupIds = rn.Ob));
        }
      }
      var wo = l.wb({
        encapsulation: 0,
        styles: [["[_nghost-%COMP%]{display:block}"]],
        data: {
          animation: [
            {
              type: 7,
              name: "childAnim",
              definitions: [
                {
                  type: 1,
                  expr: ":leave",
                  animation: {
                    type: 11,
                    selector: ":leave",
                    animation: { type: 9, options: null },
                    options: null,
                  },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function So(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-popup",
              [["id", "PowerWarningStandbyPopup"]],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (n, t, e) {
                var i = !0;
                return (
                  "component:@a276-popup-animation.start" === t &&
                    (i = !1 !== l.Nb(n, 7).animationStart(e) && i),
                  "component:@a276-popup-animation.done" === t &&
                    (i = !1 !== l.Nb(n, 7).animationFinished(e) && i),
                  "popup:keydown.Backspace" === t &&
                    (i = !1 !== l.Nb(n, 7).handleHkBackEvent() && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            l.Sb(6144, null, o.a, null, [u.b]),
            l.Sb(6144, null, r.b, null, [u.b]),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(4, 16384, null, 0, b.a, [l.l], null, null),
            l.Sb(512, null, d.a, d.a, []),
            l.Sb(131584, null, m.a, m.a, []),
            l.xb(
              7,
              4964352,
              null,
              1,
              u.b,
              [
                h.a,
                g.a,
                d.a,
                l.l,
                f.a,
                x.m,
                _.a,
                p.a,
                l.h,
                P.a,
                C.a,
                m.a,
                y.b,
                O.b,
                l.z,
                [2, v.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                popupTitle: [2, "popupTitle"],
                surviveScreenChange: [3, "surviveScreenChange"],
                backButtonVisible: [4, "backButtonVisible"],
                hasText: [5, "hasText"],
                text: [6, "text"],
              },
              null,
            ),
            l.Tb(603979776, 1, { dialogButtons: 1 }),
            (n()(),
            l.yb(
              9,
              0,
              null,
              2,
              3,
              "au3-popup-dialog-button",
              [["id", "OkButton"]],
              null,
              null,
              null,
              bi.b,
              bi.a,
            )),
            l.xb(
              10,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              11,
              49152,
              null,
              0,
              di.a,
              [[2, s.a], l.l],
              { developerText: [0, "developerText"] },
              null,
            ),
            l.Sb(2048, [[1, 4]], mi.a, null, [di.a]),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, "PowerWarningStandbyPopup"),
              n(
                t,
                7,
                0,
                e.popupIds.POPUP_BANNER_SYSTEM_CONNECT_APP_FAILURE,
                e.popupType.FullscreenPopup,
                "Connect app Failure",
                !0,
                !1,
                !0,
                "Functionality Disabled \n Please contact your Audi dealer!",
              ),
              n(t, 10, 0, "OkButton"),
              n(t, 11, 0, "Ok"));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 7).popupAnimBinding,
              l.Nb(t, 7).animated,
              l.Nb(t, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      class No {
        constructor() {
          ((this.popupType = rn.Rb.Dialog), (this.popupActionEnum = rn.Nb));
        }
        ngOnInit() {
          this.title = this.auto ? "Audi Schadenservice" : "Online Pannenruf";
        }
        get auto() {
          return this.id === rn.Ob.POPUP_OPR_POPUP_FLEETMODE_AUTO;
        }
      }
      var Mo = l.wb({
        encapsulation: 0,
        styles: [["[_nghost-%COMP%]{display:block}"]],
        data: {
          animation: [
            {
              type: 7,
              name: "childAnim",
              definitions: [
                {
                  type: 1,
                  expr: ":leave",
                  animation: {
                    type: 11,
                    selector: ":leave",
                    animation: { type: 9, options: null },
                    options: null,
                  },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function To(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              12,
              "au3-popup",
              [],
              [
                [40, "@a276-popup-animation", 0],
                [2, "animated", null],
                [1, "style", 2],
              ],
              [
                ["component", "@a276-popup-animation.start"],
                ["component", "@a276-popup-animation.done"],
                ["popup", "keydown.Backspace"],
              ],
              function (n, t, e) {
                var i = !0;
                return (
                  "component:@a276-popup-animation.start" === t &&
                    (i = !1 !== l.Nb(n, 7).animationStart(e) && i),
                  "component:@a276-popup-animation.done" === t &&
                    (i = !1 !== l.Nb(n, 7).animationFinished(e) && i),
                  "popup:keydown.Backspace" === t &&
                    (i = !1 !== l.Nb(n, 7).handleHkBackEvent() && i),
                  i
                );
              },
              a.b,
              a.a,
            )),
            l.Sb(6144, null, o.a, null, [u.b]),
            l.Sb(6144, null, r.b, null, [u.b]),
            l.xb(
              3,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(4, 16384, null, 0, b.a, [l.l], null, null),
            l.Sb(512, null, d.a, d.a, []),
            l.Sb(131584, null, m.a, m.a, []),
            l.xb(
              7,
              4964352,
              null,
              1,
              u.b,
              [
                h.a,
                g.a,
                d.a,
                l.l,
                f.a,
                x.m,
                _.a,
                p.a,
                l.h,
                P.a,
                C.a,
                m.a,
                y.b,
                O.b,
                l.z,
                [2, v.a],
              ],
              {
                popupName: [0, "popupName"],
                popupType: [1, "popupType"],
                popupTitle: [2, "popupTitle"],
                surviveScreenChange: [3, "surviveScreenChange"],
                closeWhenClickedOutside: [4, "closeWhenClickedOutside"],
                backButtonVisible: [5, "backButtonVisible"],
                closeButtonVisible: [6, "closeButtonVisible"],
                text: [7, "text"],
              },
              null,
            ),
            l.Tb(603979776, 1, { dialogButtons: 1 }),
            (n()(),
            l.yb(
              9,
              0,
              null,
              2,
              3,
              "au3-popup-dialog-button",
              [
                ["developerText", "OK"],
                ["id", "OkButton"],
              ],
              null,
              null,
              null,
              bi.b,
              bi.a,
            )),
            l.xb(
              10,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              11,
              49152,
              null,
              0,
              di.a,
              [[2, s.a], l.l],
              {
                developerText: [0, "developerText"],
                closePopupAfterClick: [1, "closePopupAfterClick"],
                returnMessageContent: [2, "returnMessageContent"],
              },
              null,
            ),
            l.Sb(2048, [[1, 4]], mi.a, null, [di.a]),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0, "POPUP:" + e.id),
              n(
                t,
                7,
                0,
                e.id,
                e.popupType,
                e.title,
                !0,
                !1,
                !1,
                !0,
                "Funktion wurde vom Flottenmanager deaktiviert.",
              ),
              n(t, 10, 0, "OkButton"),
              n(t, 11, 0, "OK", !0, e.popupActionEnum.OK));
          },
          function (n, t) {
            n(
              t,
              0,
              0,
              l.Nb(t, 7).popupAnimBinding,
              l.Nb(t, 7).animated,
              l.Nb(t, 7).numberOfButtonsCSSVariable,
            );
          },
        );
      }
      var Ao = e("rMug"),
        Lo = l.wb({
          encapsulation: 0,
          styles: [["[_nghost-%COMP%] > *[_ngcontent-%COMP%]{float:left}"]],
          data: {},
        });
      function Eo(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-volumepopup",
              [],
              [
                [40, "@childAnim", 0],
                [8, "className", 0],
              ],
              null,
              null,
              Cn,
              Pn,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              _n,
              [cn.a, pn.b, bn.a, dn.c, h.a, fn.a, _.a, l.h, Y.a, p.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, t.component.PopupIds.POPUP_VOLUME_POPUP), n(t, 2, 0));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).childAnimBinding, l.Nb(t, 2).context);
          },
        );
      }
      function ko(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-first-time-wizard",
              [],
              [[40, "@childAnim", 0]],
              null,
              null,
              pi,
              ai,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              ii,
              [ye.a, Y.a, Tl.a, Tn.a, Zn.a, h.a, G.i, p.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, t.component.PopupIds.POPUP_FTW), n(t, 2, 0));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).childAnimBinding);
          },
        );
      }
      function Io(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-cbox-not-functional",
              [],
              [[40, "@childAnim", 0]],
              null,
              null,
              fi,
              gi,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, hi, [], null, null),
          ],
          function (n, t) {
            n(t, 1, 0, t.component.PopupIds.POPUP_PHONE_POPUP_cBox_NOT_FUNC);
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).childAnimBinding);
          },
        );
      }
      function Do(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-incoming-call",
              [],
              [
                [40, "@childAnim", 0],
                [8, "className", 0],
              ],
              null,
              null,
              ki,
              Mi,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              Ni,
              [Ci.c, Oi.b, h.a, Si.b, p.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, t.component.PopupIds.POPUP_PHONE_CALL_INCOMING),
              n(t, 2, 0));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).childAnimBinding, l.Nb(t, 2).context);
          },
        );
      }
      function Fo(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-call-rejected-sms-toast",
              [],
              [[40, "@childAnim", 0]],
              null,
              null,
              Fi,
              Di,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, Ii, [], null, null),
          ],
          function (n, t) {
            n(t, 1, 0, t.component.PopupIds.POPUP_PHONE_CALL_INCOMING_SMS);
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).childAnimBinding);
          },
        );
      }
      function zo(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-system-power-warning-bem-prewarning-and-telmax",
              [],
              [[40, "@childAnim", 0]],
              null,
              null,
              Bi,
              Ri,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, zi, [], null, null),
          ],
          function (n, t) {
            n(t, 1, 0, t.component.PopupIds.POPUP_BANNER_SYSTEM_BATTERY_LOW);
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).childAnimBinding);
          },
        );
      }
      function Ro(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-system-power-warning-overheating",
              [],
              [[40, "@childAnim", 0]],
              null,
              null,
              Vi,
              Ui,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, Hi, [], null, null),
          ],
          function (n, t) {
            n(t, 1, 0, t.component.PopupIds.POPUP_BANNER_SYSTEM_OVERHEATING);
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).childAnimBinding);
          },
        );
      }
      function Bo(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-system-power-warning-standby",
              [],
              [[40, "@childAnim", 0]],
              null,
              null,
              Yi,
              Wi,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, $i, [], null, null),
          ],
          function (n, t) {
            n(t, 1, 0, t.component.PopupIds.POPUP_BANNER_SYSTEM_STANDBY);
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).childAnimBinding);
          },
        );
      }
      function Ho(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-system-component-protection",
              [],
              [[40, "@childAnim", 0]],
              null,
              null,
              Ki,
              ji,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, Gi, [], null, null),
          ],
          function (n, t) {
            n(
              t,
              1,
              0,
              t.component.PopupIds.POPUP_BANNER_SYSTEM_COMPONENT_PROTECTION,
            );
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).childAnimBinding);
          },
        );
      }
      function Uo(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-opr-automatic",
              [],
              [[40, "@childAnim", 0]],
              null,
              null,
              na,
              Qi,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 114688, null, 0, qi, [Zi.a, p.a], { id: [0, "id"] }, null),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, e.PopupIds.POPUP_OPR_POPUP_AUTOMATIC_AUTO),
              n(t, 2, 0, e.PopupIds.POPUP_OPR_POPUP_AUTOMATIC_AUTO));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).childAnimBinding);
          },
        );
      }
      function Vo(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-opr-automatic",
              [],
              [[40, "@childAnim", 0]],
              null,
              null,
              na,
              Qi,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 114688, null, 0, qi, [Zi.a, p.a], { id: [0, "id"] }, null),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, e.PopupIds.POPUP_OPR_POPUP_AUTOMATIC_USER),
              n(t, 2, 0, e.PopupIds.POPUP_OPR_POPUP_AUTOMATIC_USER));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).childAnimBinding);
          },
        );
      }
      function $o(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-sos-licence-main",
              [],
              [[40, "@childAnim", 0]],
              null,
              null,
              la,
              ea,
            )),
            l.xb(1, 49152, null, 0, ta, [Zi.a], null, null),
          ],
          null,
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 1).childAnimBinding);
          },
        );
      }
      function Wo(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-sos-licence-expire-main",
              [],
              [[40, "@childAnim", 0]],
              null,
              null,
              ma,
              pa,
            )),
            l.xb(
              1,
              114688,
              null,
              0,
              ca,
              [Zi.a, aa.a, ua.a, h.a, c.a, ra.b],
              null,
              null,
            ),
          ],
          function (n, t) {
            n(t, 1, 0);
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 1).childAnimBinding);
          },
        );
      }
      function Yo(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-opr-destination",
              [],
              [[40, "@childAnim", 0]],
              null,
              null,
              ya,
              Ca,
            )),
            l.xb(
              1,
              180224,
              null,
              0,
              _a,
              [Zi.a, Pa.a, ga.a, ha.b, dn.c, xa.a, h.a],
              null,
              null,
            ),
          ],
          null,
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 1).childAnimBinding);
          },
        );
      }
      function Go(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-fod-functions-expired",
              [],
              [[40, "@childAnim", 0]],
              null,
              null,
              Ma,
              Sa,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 180224, null, 0, wa, [h.a, ua.a], null, null),
          ],
          function (n, t) {
            n(t, 1, 0, t.component.PopupIds.POPUP_POPUP_FUNCTIONS_EXPIRED);
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).childAnimBinding);
          },
        );
      }
      function jo(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-x-urgent-traffic",
              [],
              [[40, "@childAnim", 0]],
              null,
              null,
              Fa,
              Da,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 180224, null, 0, Ia, [h.a, p.a], null, null),
          ],
          function (n, t) {
            n(t, 1, 0, t.component.PopupIds.POPUP_NAV_TRAFFIC_URGENT_MESSAGE);
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).childAnimBinding);
          },
        );
      }
      function Ko(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-vics-emergency-dialog",
              [],
              null,
              null,
              null,
              Ka,
              Ya,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              245760,
              null,
              0,
              Wa,
              [$a.a, dn.c, h.a, l.h, p.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, t.component.PopupIds.POPUP_ASIA_JP_VICS_EMERGENCY_INFO),
              n(t, 2, 0));
          },
          null,
        );
      }
      function Zo(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-etc-status-popup",
              [],
              [[40, "@childAnim", 0]],
              null,
              null,
              io,
              to,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              49152,
              null,
              0,
              no,
              [Qa.a],
              { autoHideTime: [0, "autoHideTime"] },
              null,
            ),
          ],
          function (n, t) {
            (n(t, 1, 0, t.component.PopupIds.POPUP_ETC_ERROR), n(t, 2, 0, 7e3));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).childAnimBinding);
          },
        );
      }
      function Jo(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-disaster-warning",
              [],
              [[40, "@childAnim", 0]],
              null,
              null,
              ro,
              uo,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, oo, [ao.a], null, null),
          ],
          function (n, t) {
            n(t, 1, 0, t.component.PopupIds.POPUP_DW_POPUP_MAIN);
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).childAnimBinding);
          },
        );
      }
      function Xo(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-japan-locking",
              [],
              [[40, "@childAnim", 0]],
              null,
              null,
              bo,
              po,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 245760, null, 0, co, [h.a, _.a], null, null),
          ],
          function (n, t) {
            (n(t, 1, 0, t.component.PopupIds.POPUP_BANNER_SYSTEM_DISCLAIMER_JP),
              n(t, 2, 0));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).childAnimBinding);
          },
        );
      }
      function qo(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-dashboard-edit-mode",
              [],
              [[40, "@childAnim", 0]],
              null,
              null,
              Oo,
              Co,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(
              2,
              180224,
              null,
              0,
              xo.a,
              [_o.a, Po.e, h.a, l.h, p.a],
              null,
              null,
            ),
          ],
          function (n, t) {
            n(
              t,
              1,
              0,
              t.component.PopupIds.POPUP_DASHBOARD_CONFIGURATION_MODE_POPUP,
            );
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).childAnimBinding);
          },
        );
      }
      function Qo(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-asterix-defective",
              [],
              [[40, "@childAnim", 0]],
              null,
              null,
              So,
              wo,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 49152, null, 0, vo, [], null, null),
          ],
          function (n, t) {
            n(
              t,
              1,
              0,
              t.component.PopupIds.POPUP_BANNER_SYSTEM_CONNECT_APP_FAILURE,
            );
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).childAnimBinding);
          },
        );
      }
      function nu(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-opr-fleetmode",
              [],
              [[40, "@childAnim", 0]],
              null,
              null,
              To,
              Mo,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 114688, null, 0, No, [], { id: [0, "id"] }, null),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, e.PopupIds.POPUP_OPR_POPUP_FLEETMODE_USER),
              n(t, 2, 0, e.PopupIds.POPUP_OPR_POPUP_FLEETMODE_USER));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).childAnimBinding);
          },
        );
      }
      function tu(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-opr-fleetmode",
              [],
              [[40, "@childAnim", 0]],
              null,
              null,
              To,
              Mo,
            )),
            l.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [l.l, l.D, c.a, p.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            l.xb(2, 114688, null, 0, No, [], { id: [0, "id"] }, null),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 1, 0, e.PopupIds.POPUP_OPR_POPUP_FLEETMODE_AUTO),
              n(t, 2, 0, e.PopupIds.POPUP_OPR_POPUP_FLEETMODE_AUTO));
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 2).childAnimBinding);
          },
        );
      }
      function eu(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              48,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), l.hb(16777216, null, null, 1, null, Eo)),
            l.xb(
              2,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, ko)),
            l.xb(
              4,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Io)),
            l.xb(
              6,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Do)),
            l.xb(
              8,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Fo)),
            l.xb(
              10,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, zo)),
            l.xb(
              12,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Ro)),
            l.xb(
              14,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Bo)),
            l.xb(
              16,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Ho)),
            l.xb(
              18,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Uo)),
            l.xb(
              20,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Vo)),
            l.xb(
              22,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, $o)),
            l.xb(
              24,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Wo)),
            l.xb(
              26,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Yo)),
            l.xb(
              28,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Go)),
            l.xb(
              30,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, jo)),
            l.xb(
              32,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Ko)),
            l.xb(
              34,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Zo)),
            l.xb(
              36,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Jo)),
            l.xb(
              38,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Xo)),
            l.xb(
              40,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, qo)),
            l.xb(
              42,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, Qo)),
            l.xb(
              44,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, nu)),
            l.xb(
              46,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, tu)),
            l.xb(
              48,
              16384,
              null,
              0,
              yn.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 2, 0, e.isActive(e.PopupIds.POPUP_VOLUME_POPUP)),
              n(t, 4, 0, e.isActive(e.PopupIds.POPUP_FTW)),
              n(
                t,
                6,
                0,
                e.isActive(e.PopupIds.POPUP_PHONE_POPUP_cBox_NOT_FUNC),
              ),
              n(t, 8, 0, e.isActive(e.PopupIds.POPUP_PHONE_CALL_INCOMING)),
              n(t, 10, 0, e.isActive(e.PopupIds.POPUP_PHONE_CALL_INCOMING_SMS)),
              n(
                t,
                12,
                0,
                e.isActive(e.PopupIds.POPUP_BANNER_SYSTEM_BATTERY_LOW),
              ),
              n(
                t,
                14,
                0,
                e.isActive(e.PopupIds.POPUP_BANNER_SYSTEM_OVERHEATING),
              ),
              n(t, 16, 0, e.isActive(e.PopupIds.POPUP_BANNER_SYSTEM_STANDBY)),
              n(
                t,
                18,
                0,
                e.isActive(e.PopupIds.POPUP_BANNER_SYSTEM_COMPONENT_PROTECTION),
              ),
              n(
                t,
                20,
                0,
                e.isActive(e.PopupIds.POPUP_OPR_POPUP_AUTOMATIC_AUTO),
              ),
              n(
                t,
                22,
                0,
                e.isActive(e.PopupIds.POPUP_OPR_POPUP_AUTOMATIC_USER),
              ),
              n(t, 24, 0, e.isActive(e.PopupIds.POPUP_SOS_POPUP_LICENCE_MAIN)),
              n(
                t,
                26,
                0,
                e.isActive(e.PopupIds.POPUP_SOS_POPUP_LICENCE_EXPIRE_MAIN),
              ),
              n(t, 28, 0, e.isActive(e.PopupIds.POPUP_OPR_POPUP_DESTINATION)),
              n(t, 30, 0, e.isActive(e.PopupIds.POPUP_POPUP_FUNCTIONS_EXPIRED)),
              n(
                t,
                32,
                0,
                e.isActive(e.PopupIds.POPUP_NAV_TRAFFIC_URGENT_MESSAGE),
              ),
              n(
                t,
                34,
                0,
                e.isActive(e.PopupIds.POPUP_ASIA_JP_VICS_EMERGENCY_INFO),
              ),
              n(t, 36, 0, e.isActive(e.PopupIds.POPUP_ETC_ERROR)),
              n(t, 38, 0, e.isActive(e.PopupIds.POPUP_DW_POPUP_MAIN)),
              n(
                t,
                40,
                0,
                e.isActive(e.PopupIds.POPUP_BANNER_SYSTEM_DISCLAIMER_JP),
              ),
              n(
                t,
                42,
                0,
                e.isActive(e.PopupIds.POPUP_DASHBOARD_CONFIGURATION_MODE_POPUP),
              ),
              n(
                t,
                44,
                0,
                e.isActive(e.PopupIds.POPUP_BANNER_SYSTEM_CONNECT_APP_FAILURE),
              ),
              n(
                t,
                46,
                0,
                e.isActive(e.PopupIds.POPUP_OPR_POPUP_FLEETMODE_USER),
              ),
              n(
                t,
                48,
                0,
                e.isActive(e.PopupIds.POPUP_OPR_POPUP_FLEETMODE_AUTO),
              ));
          },
          null,
        );
      }
      function lu(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              2,
              "au3-preloadpopups",
              [],
              null,
              null,
              null,
              eu,
              Lo,
            )),
            l.Sb(4608, null, Tn.a, Tn.a, [p.a]),
            l.xb(
              2,
              49152,
              null,
              0,
              Ao.a,
              [g.a, y.b, l.z, l.h, Y.a],
              null,
              null,
            ),
          ],
          null,
          null,
        );
      }
      var iu = l.ub("au3-preloadpopups", Ao.a, lu, {}, {}, []),
        au = e("aDqW"),
        ou = e("/W5r"),
        uu = e("+Qv1"),
        ru = e("XtoR"),
        su = e("jTHl"),
        cu = e("zL3T"),
        pu = e("JPnh"),
        bu = e("50DD"),
        du = e("S1OC"),
        mu = e("zm/l"),
        hu = e("XOcJ"),
        gu = e("doQC"),
        fu = e("nRk7"),
        xu = e("K3fK"),
        _u = e("3LDm"),
        Pu = e("aujg"),
        Cu = e("+epw"),
        yu = e("zMPs"),
        Ou = e("6Yk8"),
        vu = e("u6+O"),
        wu = e("CIQC"),
        Su = e("REmV"),
        Nu = e("Y3N+"),
        Mu = e("MJxn"),
        Tu = e("eIOF"),
        Au = e("t+4g"),
        Lu = e("myjn"),
        Eu = e("fOZ7"),
        ku = e("QDrj"),
        Iu = e("jKfI"),
        Du = e("TBks"),
        Fu = e("yUFt"),
        zu = e("YCQm"),
        Ru = e("6gUO"),
        Bu = e("dezT"),
        Hu = e("BLvE"),
        Uu = e("TDBs"),
        Vu = l.vb(i, [], function (n) {
          return l.Kb([
            l.Lb(512, l.j, l.X, [[8, [iu]], [3, l.j], l.x]),
            l.Lb(4608, yn.m, yn.l, [l.u]),
            l.Lb(4608, au.h, au.g, []),
            l.Lb(4608, au.d, au.f, []),
            l.Lb(4608, au.j, au.e, []),
            l.Lb(4608, au.c, au.b, []),
            l.Lb(4608, au.k, au.k, [
              au.l,
              au.h,
              au.d,
              au.j,
              au.c,
              au.m,
              au.o,
              au.n,
              au.a,
            ]),
            l.Lb(4608, ou.b, ou.b, [uu.e, [2, ou.a]]),
            l.Lb(4608, ru.b, ru.b, [uu.e, [2, ru.a]]),
            l.Lb(4608, su.b, su.b, [uu.e, [2, su.a]]),
            l.Lb(4608, cu.b, cu.b, [uu.e, [2, cu.a]]),
            l.Lb(4608, pu.a, pu.a, [lt.a, p.a]),
            l.Lb(4608, bu.a, bu.a, [du.a, p.a]),
            l.Lb(4608, mu.a, mu.a, [Ci.c, p.a]),
            l.Lb(4608, hu.a, hu.a, [Ci.c, p.a]),
            l.Lb(4608, gu.a, gu.a, [Ci.c, p.a]),
            l.Lb(4608, fu.a, fu.a, [Ci.c, p.a]),
            l.Lb(4608, xu.a, xu.a, [Zi.a, p.a]),
            l.Lb(4608, Pa.a, _u.a, [C.a, Pu.a, p.a]),
            l.Lb(1073742336, yn.c, yn.c, []),
            l.Lb(1073742336, au.i, au.i, []),
            l.Lb(1073742336, Cu.a, Cu.a, []),
            l.Lb(1073742336, yu.a, yu.a, []),
            l.Lb(1073742336, Ou.a, Ou.a, []),
            l.Lb(1073742336, vu.a, vu.a, []),
            l.Lb(1073742336, wu.a, wu.a, []),
            l.Lb(1073742336, Su.a, Su.a, []),
            l.Lb(1073742336, Nu.a, Nu.a, []),
            l.Lb(1073742336, Mu.a, Mu.a, []),
            l.Lb(1073742336, Tu.a, Tu.a, []),
            l.Lb(1073742336, Au.a, Au.a, []),
            l.Lb(1073742336, Lu.a, Lu.a, []),
            l.Lb(1073742336, Eu.a, Eu.a, []),
            l.Lb(1073742336, ku.a, ku.a, []),
            l.Lb(1073742336, Iu.a, Iu.a, []),
            l.Lb(1073742336, Du.a, Du.a, []),
            l.Lb(1073742336, Fu.a, Fu.a, []),
            l.Lb(1073742336, zu.a, zu.a, []),
            l.Lb(1073742336, Ru.a, Ru.a, []),
            l.Lb(1073742336, Bu.a, Bu.a, []),
            l.Lb(1073742336, Hu.a, Hu.a, []),
            l.Lb(1073742336, Uu.a, Uu.a, []),
            l.Lb(1073742336, i, i, []),
            l.Lb(256, au.o, void 0, []),
            l.Lb(256, au.m, void 0, []),
            l.Lb(256, au.n, void 0, []),
            l.Lb(256, au.a, void 0, []),
          ]);
        });
    },
    cNKu: function (n, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return i;
      });
      var l = e("a8ry");
      class i {
        transform(n) {
          if (n && n.role !== l.e.AnonymousGuestUser) {
            if (n.firstName || n.lastName) {
              let t = "";
              return (
                n.firstName
                  ? ((t = n.firstName), n.lastName && (t += " " + n.lastName))
                  : (t = n.lastName),
                t
              );
            }
            return n.name;
          }
        }
      }
    },
    xwkZ: function (n, t, e) {
      "use strict";
      (e.d(t, "a", function () {
        return V;
      }),
        e.d(t, "b", function () {
          return Y;
        }));
      var l = e("kZht"),
        i = e("HVUF"),
        a = e("B3Zb"),
        o = e("yNay"),
        u = e("8TlW"),
        r = e("fu7d"),
        s = e("bou3"),
        c = e("ijxY"),
        p = e("Xo58"),
        b = e("m3Ja"),
        d = e("r+e+"),
        m = e("bmFL"),
        h = e("bMuc"),
        g = e("ZIdM"),
        f = e("3bpu"),
        x = e("6zvu"),
        _ = e("VcEz"),
        P = e("OtM5"),
        C = e("y9xZ"),
        y = e("+sw+"),
        O = e("BMrr"),
        v = e("IEns"),
        w = e("z6QT"),
        S = e("flsk"),
        N = e("FQEI"),
        M = e("O82V"),
        T = e("Eln4"),
        A = e("evAh"),
        L = e("Ps6X"),
        E = e("CpzC"),
        k = e("0Bsn"),
        I = e("5GjX"),
        D = e("mYyF"),
        F = e("v98a"),
        z = e("aOG8"),
        R = e("Krzs"),
        B = e("An66"),
        H = e("TJMC"),
        U = e("JIjU"),
        V =
          (e("qoeV"),
          l.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}.list-item__click-area[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.list-item__click-area[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;flex-grow:1;min-width:0;padding:0 20px}.list-item__text-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0}.list-item__checkbox[_ngcontent-%COMP%]{pointer-events:none;flex:0 0 50px}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%]{margin-right:30px}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .list-item__icon--begin[_ngcontent-%COMP%]{margin-left:30px}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.list-item__text[_ngcontent-%COMP%]{flex:1 1 auto}.list-item__text--small[_ngcontent-%COMP%]{flex:1 1 auto;font-size:30px}.e-mode-item[_ngcontent-%COMP%]{max-width:991px}',
              ],
            ],
            data: {},
          }));
      function $(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [["class", "list-item__icon--begin"]],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              i.b,
              i.a,
            )),
            l.xb(
              1,
              4243456,
              null,
              0,
              a.b,
              [o.a, l.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            n(t, 1, 0, e.icon, e.iconCategory);
          },
          function (n, t) {
            n(t, 0, 0, l.Nb(t, 1).iconComponentHidden);
          },
        );
      }
      function W(n) {
        return l.ac(
          0,
          [
            (n()(),
            l.yb(
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
                [2, "e-mode-item", null],
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
            l.xb(
              1,
              212992,
              null,
              0,
              r.a,
              [l.l, l.D, s.a, o.a, [3, r.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            l.xb(
              2,
              16384,
              null,
              0,
              c.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            l.xb(
              3,
              245760,
              null,
              0,
              p.a,
              [[6, r.a], b.a, l.h, l.l, l.D, [2, d.a], [2, c.a], [2, m.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(
              t,
              1,
              0,
              e.subtitleTextId
                ? e.subtitleTextId
                : "ListRouteItemSecondaryText",
              e.subtitleTextIdEnum,
            ),
              n(t, 2, 0, !e.hasSubtitle || !e.subtitleDeveloperText),
              n(
                t,
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
          function (n, t) {
            n(
              t,
              0,
              0,
              t.component.isEmodeItem,
              l.Nb(t, 3).backgroundColor,
              l.Nb(t, 3).fixedNumberOfLines,
              l.Nb(t, 3).mayContainLatinCharsForArabic,
              l.Nb(t, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function Y(n) {
        return l.ac(
          2,
          [
            (n()(),
            l.yb(
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
              [[null, "mib3Tap"]],
              function (n, t, e) {
                var l = !0;
                return (
                  "mib3Tap" === t && (l = !1 !== n.component.itemTapped() && l),
                  l
                );
              },
              null,
              null,
            )),
            l.xb(1, 147456, null, 0, h.a, [l.l, l.z], null, null),
            l.xb(
              2,
              147456,
              null,
              0,
              g.a,
              [h.a, [2, f.a], [2, r.a], o.a],
              null,
              null,
            ),
            l.xb(
              3,
              212992,
              null,
              0,
              x.a,
              [
                o.a,
                _.b,
                g.a,
                [2, f.a],
                [2, r.a],
                [2, P.a],
                [2, C.a],
                [2, y.a],
                l.z,
                O.a,
                l.l,
                [2, v.a],
              ],
              null,
              { tap: "mib3Tap" },
            ),
            l.Sb(131584, null, w.a, w.a, [[3, w.a]]),
            l.xb(
              5,
              4407296,
              null,
              0,
              S.a,
              [
                l.l,
                N.a,
                l.h,
                w.a,
                [2, M.a],
                [2, f.b],
                [2, f.a],
                [2, T.a],
                [2, A.a],
              ],
              null,
              null,
            ),
            l.xb(
              6,
              212992,
              null,
              0,
              L.a,
              [[2, x.a], [8, null], [3, L.a], l.l, l.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            l.xb(
              7,
              147456,
              null,
              0,
              E.a,
              [[2, x.a], [2, P.a], [2, k.a], [2, S.a], [2, I.b], l.l, D.a, F.b],
              null,
              null,
            ),
            l.xb(
              8,
              147456,
              null,
              0,
              z.a,
              [[2, S.a], [2, x.a], [2, _.b], R.a],
              null,
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, $)),
            l.xb(
              10,
              16384,
              null,
              0,
              B.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            l.yb(
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
            l.yb(
              12,
              0,
              null,
              null,
              2,
              "au3-i18n-label",
              [["class", "list-item__text"]],
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
            l.xb(
              13,
              212992,
              null,
              0,
              r.a,
              [l.l, l.D, s.a, o.a, [3, r.a], [8, null]],
              { id: [0, "id"], idEnumType: [1, "idEnumType"] },
              null,
            ),
            l.xb(
              14,
              245760,
              null,
              0,
              p.a,
              [[6, r.a], b.a, l.h, l.l, l.D, [2, d.a], [2, c.a], [2, m.a]],
              {
                developerText: [0, "developerText"],
                id: [1, "id"],
                fixedNumberOfLines: [2, "fixedNumberOfLines"],
                nonI18nValue: [3, "nonI18nValue"],
              },
              null,
            ),
            (n()(),
            l.yb(
              15,
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
            l.xb(
              16,
              212992,
              null,
              0,
              r.a,
              [l.l, l.D, s.a, o.a, [3, r.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            (n()(), l.hb(16777216, null, null, 1, null, W)),
            l.xb(
              18,
              16384,
              null,
              0,
              B.k,
              [l.P, l.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (n()(),
            l.yb(
              19,
              0,
              null,
              null,
              1,
              "au3-radio-button",
              [["class", "list-item__checkbox"]],
              null,
              null,
              null,
              H.b,
              H.a,
            )),
            l.xb(
              20,
              180224,
              null,
              0,
              U.a,
              [[2, P.a], l.h],
              { group: [0, "group"], checked: [1, "checked"] },
              null,
            ),
          ],
          function (n, t) {
            var e = t.component;
            (n(t, 3, 0),
              n(t, 5, 0),
              n(t, 6, 0, e.uiStateType),
              n(t, 10, 0, e.icon || e.offsetFolding),
              n(
                t,
                13,
                0,
                e.titleTextId ? e.titleTextId : "ListRouteItemText",
                e.titleIdEnumType,
              ),
              n(
                t,
                14,
                0,
                e.titleDeveloperText,
                e.titleTextId ? e.titleTextId : "ListRouteItemText",
                1,
                e.titleNonI18nText,
              ),
              n(t, 16, 0, "subtitleContainer"),
              n(t, 18, 0, e.hasSubtitle),
              n(t, 20, 0, e.group, e.checked));
          },
          function (n, t) {
            (n(t, 0, 1, [
              l.Nb(t, 5).markerClassEnabled,
              l.Nb(t, 6).uiStateListHorizontal,
              l.Nb(t, 6).uiStateListVertical,
              l.Nb(t, 6).uiStateCoverLeft,
              l.Nb(t, 6).uiStateCoverRight,
              l.Nb(t, 6).uiStateCoverBottom,
              l.Nb(t, 6).uiStateButton,
              l.Nb(t, 6).uiStateByDabLeft,
              l.Nb(t, 6).uiStateByDabRight,
              l.Nb(t, 6).uiStateLbDabLeft,
              l.Nb(t, 6).uiStateLbDabRight,
            ]),
              n(
                t,
                12,
                0,
                l.Nb(t, 14).backgroundColor,
                l.Nb(t, 14).fixedNumberOfLines,
                l.Nb(t, 14).mayContainLatinCharsForArabic,
                l.Nb(t, 14).shortenWithEllipsisForArabic,
              ));
          },
        );
      }
    },
  },
]);
