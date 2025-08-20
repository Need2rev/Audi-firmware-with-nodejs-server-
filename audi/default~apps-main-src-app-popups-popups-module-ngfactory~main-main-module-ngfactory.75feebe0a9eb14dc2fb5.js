(window.webpackJsonp = window.webpackJsonp || []).push([
  [40],
  {
    "/mCV": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var i = n("Yi6/"),
        r = n("H+fK"),
        l = n("OhEM"),
        o = n("P1io"),
        a = n("qMQG"),
        s = n("kZht"),
        u = n("yNay"),
        c = n("1VvW");
      let d = (() => {
        class e extends i.i {
          constructor(e, t, n) {
            (super(
              t,
              e.getLogger("help.HelpRoutingService"),
              o.q,
              l.a,
              a.a.HOME,
              i.Bb.DEFAULT_CONTEXT,
            ),
              (this.settingsRoutingService = n));
          }
          goToHelpSettings() {
            return this.settingsRoutingService.goTo(
              r.a.Main.children.Help,
              null,
              {
                goBack: this.enterContext.bind(this),
                goUp: this.enterContext.bind(this),
              },
            );
          }
        }
        return (
          (e.ɵprov = s.bc({
            factory: function () {
              return new e(s.cc(u.a), s.cc(c.m), s.cc(r.b));
            },
            token: e,
            providedIn: "root",
          })),
          e
        );
      })();
    },
    "2ozK": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var i = n("1+5f"),
        r = n("Yi6/"),
        l = n("kGpN");
      class o {
        constructor() {
          ((this.distanceFormattingRule = l.a.DistanceToDestination),
            (this.sourceUnit = r.vc.METERS));
        }
        isDirectionAndDistanceValid() {
          const e = this.getDistanceValue();
          return null != e && !isNaN(e);
        }
        getDisplayableArrow() {
          return null == this.distance || null == this.distance.direction
            ? null
            : {
                distanceType:
                  this.distance.withRoadDistance &&
                  Object(r.wd)(this.distance.roaddistance)
                    ? i.m.ROAD
                    : i.m.AIR,
                rotationAngle: this.distance.direction,
              };
        }
        getDistanceValue() {
          return this.distance &&
            this.distance.withRoadDistance &&
            null != this.distance.roaddistance
            ? this.distance.roaddistance
            : this.distance && null != this.distance.airdistance
              ? this.distance.airdistance
              : NaN;
        }
      }
    },
    EAb0: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return i;
      }),
        n("2IWi"));
      class i {
        constructor(e) {
          this.restrictionReasonTransformService = e;
        }
        transform(e, t) {
          const n =
            this.restrictionReasonTransformService.getMostImportantReason(e);
          return n && n.name ? n.name.toString() : void 0;
        }
      }
    },
    ExWD: function (e, t, n) {
      "use strict";
      (n.d(t, "c", function () {
        return p;
      }),
        n.d(t, "d", function () {
          return g;
        }),
        n.d(t, "h", function () {
          return h;
        }),
        n.d(t, "g", function () {
          return b;
        }),
        n.d(t, "f", function () {
          return f;
        }),
        n.d(t, "b", function () {
          return m;
        }),
        n.d(t, "a", function () {
          return y;
        }),
        n.d(t, "e", function () {
          return C;
        }));
      var i = n("aOYA"),
        r = n("SOvQ"),
        l = n("xRrm"),
        o = n("Yi6/"),
        a = n("kGpN"),
        s = n("QQZH"),
        u = n("kZht"),
        c = n("bou3"),
        d = n("yNay"),
        p = (function (e) {
          return (
            (e.App =
              "Das Update wurde unterbrochen.\nVerbinden Sie bitte das Mobilger\xe4t wieder."),
            (e.Ota =
              "Das Update wurde unterbrochen.\nBitte stellen Sie wieder eine Online-Verbindung her."),
            (e.Tester =
              "Das Update wurde unterbrochen.\nBitte legen Sie den Updatedatentr\xe4ger Diagnosemodul wieder ein."),
            (e.Usb =
              "Das Update wurde unterbrochen.\nBitte legen Sie den Updatedatentr\xe4ger USB-Stick wieder ein."),
            (e.Unknown =
              "Das Update wurde unterbrochen.\nBitte legen Sie den Updatedatentr\xe4ger wieder ein."),
            e
          );
        })({}),
        g = (function (e) {
          return (
            (e.DownloadConfirmed = "Herunterladen wird vorbereitet..."),
            (e.DownloadRunning = "Daten werden heruntergeladen..."),
            (e.DownloadRunningSpeed = "Herunterladen mit {{downloadSpeed}}"),
            (e.DownloadRunningCgwClamp15Off =
              "Download-Fortschritt nur bei eingeschalteteter Z\xfcndung"),
            (e.DownloadPaused = "Herunterladen pausiert."),
            (e.DownloadVerifiying =
              "Verifikation der heruntergeladenen Daten..."),
            (e.DownloadPostProcessing =
              "Heruntergeladene Daten werden verarbeitet..."),
            (e.LanguageChangeInProgress =
              "Sprachwechsel wird duchgef\xfchrt..."),
            (e.DownloadFinished = "Herunterladen abgeschlossen."),
            (e.DownloadFinishedCgw =
              "Herunterladen abgeschlossen. Bitte warten..."),
            (e.Idle = "Herunterladen inaktiv."),
            (e.DownloadAvailable =
              "Es sind Updatedaten zum Download verf\xfcgbar"),
            (e.DownloadAvailableApp =
              "Daten auf dem Smartphone verf\xfcgbar. Ins Fahrzeug \xfcbertragen?"),
            (e.DownloadNotAvailable =
              "Keine Daten zum Herunterladen verf\xfcgbar."),
            (e.ChecksumError = "Download fehlerhaft - korrupte Daten!"),
            (e.DownloadAbortedByBackend = "Die Aktualisierung wurde beendet."),
            (e.DownloadAbortedByCustomer =
              "Herunterladen abgebrochen durch Kunden."),
            (e.DownloadAbortedByDownloadManager =
              "Herunterladen abgebrochen durch Download-Manager!"),
            (e.DownloadAuthCancelled =
              "Autorisierungspr\xfcfung zum Herunterladen wurde unterbrochen!"),
            (e.DownloadAuthError = "Autorisierungsfehler beim Herunterladen!"),
            (e.DownloadAuthRequired =
              "Autorisierung zum Herunterladen ben\xf6tigt."),
            (e.DownloadError = "Allgemeiner Fehler beim Herunterladen!"),
            (e.DownloadErrorConfirmed = "Update wurde beendet."),
            (e.DownloadErrorNoOnlineConnection =
              "Keine Verbindung. Pr\xfcfen Sie ihre Datenverbindung!"),
            (e.DownloadErrorNoAppConnection =
              "Fehler: Smartphone verbinden zum Fortsetzen!"),
            (e.BlockedByOtherInstallation =
              "Vorgang blockiert, bis das andere Update abgeschlossen ist."),
            (e.BlockedByInstallManager = "Software Update wird initialisiert."),
            (e.Unknown = "Info zu Download wird ermittelt..."),
            e
          );
        })({}),
        h = (function (e) {
          return (
            (e.Unspecific = "Der Vorgang konnte nicht durchgef\xfchrt werden."),
            (e.Downgrade =
              "Die Aktualisierungsdaten sind veraltet.\nAuf www.myAudi.de stehen Daten zum Download bereit."),
            (e.Equalgrade =
              "Die Aktualisierungsdaten sind aktuell.\nAuf www.myAudi.de stehen Daten zum Download bereit."),
            (e.Incompatible =
              "Die Aktualisierungsdaten sind nicht mit Ihrem Fahrzeug\nkompatibel.\nAuf www.myAudi.de stehen Daten zum Download bereit."),
            (e.InsufficientSpace =
              "Die Aktualisierungsdaten auf dem Datentr\xe4ger\nsind nicht vollst\xe4ndig."),
            (e.ManifestNotAuthenticated =
              "Die Aktualisierungsdaten sind fehlerhaft."),
            (e.NoLicence =
              "Kein g\xfcltiger Freischaltcode f\xfcr die Navigationsdatenbank vorhanden.\nKontaktieren Sie Ihren H\xe4ndler."),
            e
          );
        })({}),
        b = (function (e) {
          return (
            (e.Unspecific = "Der Vorgang konnte nicht durchgef\xfchrt werden."),
            (e.InsertSwup =
              "Die Aktualisierungsdaten auf dem Datentr\xe4ger sind ung\xfcltig."),
            (e.Other =
              "Der Datentr\xe4ger ist nicht f\xfcr ein Kundenupdate geeignet."),
            e
          );
        })({}),
        f = (function (e) {
          return (
            (e.InstallationWaitingForPreconditions =
              "Vorbedingungen der Installation werden nicht erf\xfcllt!"),
            (e.ReadyForInstallation = "Das Update ist bereit zur Installation"),
            (e.ReadyForInstallationSysOta =
              "Zur Installation des Updates das Fahrzeug abstellen"),
            (e.InstallationConfirmed = "Installation wird vorbereitet"),
            (e.InstallationRunning = "Wird installiert..."),
            (e.InstallationRunningCgw = "Nicht fahren! Wird installiert..."),
            (e.InstallationRunningWithFinalization =
              "Installation beendet \u2013 ein Neustart schlie\xdft das Update ab."),
            (e.InstallationError = "Allgemeiner Fehler bei der Installation"),
            (e.InstallationErrorFatal =
              "St\xf6rung: Fahren Sie nicht. Service kontaktieren."),
            (e.InstallationRetry = "Erneuter Installationsversuch..."),
            (e.InstallationPausedBySystem =
              "Installation pausiert durch das System."),
            (e.InstallationFinished = "Die Daten sind aktuell."),
            (e.InstallationFinishedConfirmed = "Installation abgeschlossen."),
            (e.InstallationErrorConfirmed = "Installation wurde beendet."),
            (e.InstallationErrorConfirmedWithFinalization =
              "Installation wird beendet..."),
            (e.InstallationMediumDetected = "Aktualisierungsmedium erkannt."),
            (e.SourceErrorUnspecific = "Aktualisierungsfehler"),
            (e.SourceErrorDowngradeSwup =
              "Aktualisierungsfehler: veraltete Daten"),
            (e.SourceErrorEqualgradeSwup = "Die Daten sind aktuell."),
            (e.SourceErrorIncompatible =
              "Aktualisierungsfehler: Inkompatible Daten"),
            (e.SourceErrorInsertSwup =
              "Aktualisierungsfehler: Daten sind ung\xfcltig"),
            (e.SourceErrorInsufficientSpace =
              "Aktualisierungsfehler: Daten sind unvollst\xe4ndig"),
            (e.SourceErrorManifestNotAuthenticated =
              "Aktualisierungsfehler: Korrupte Daten"),
            (e.SourceErrorNoLicence =
              "Aktualisierungsfehler: Kein g\xfcltiger Freischaltcode (FEC)"),
            (e.SourceErrorOtherSwup = "Aktualisierungsfehler: Werkstattmedium"),
            (e.SourceRemoved = "Installationsquelle wurde entfernt!"),
            (e.BlockedByOtherInstallation =
              "Vorgang blockiert, bis das andere Update abgeschlossen ist."),
            (e.BlockedByInstallManager = "Software Update wird initialisiert."),
            (e.Idle = "Update steht bereit"),
            (e.Unknown = "Info zu Update wird ermittelt..."),
            e
          );
        })({}),
        m = (function (e) {
          return (
            (e.DeviceTypeEcu = "Systemupdate online"),
            (e.DeviceTypeNavDB = "Kartenupdate online"),
            (e.DeviceTypeNavDbApp = "Kartenupdate \xfcber die myAudi App"),
            (e.DeviceTypeUnknown = "Unbekanntes Update"),
            e
          );
        })({}),
        y = (function (e) {
          return (
            (e.DeviceTypeNotifEcu = "Update: Systemupdate online"),
            (e.DeviceTypeNotifNavDB = "Update: Kartenupdate online"),
            (e.DeviceTypeNotifNavDbApp =
              "Update: Kartenupdate \xfcber die myAudi App"),
            (e.DeviceTypeNotifUnknown = "Update: Unbekanntes Update"),
            e
          );
        })({});
      let C = (() => {
        class e {
          constructor(e, t, n, i) {
            ((this.swupUtilsService = e),
              (this.translatedUnitsService = t),
              (this.systemConfigService = n),
              (this.destroyed$$ = new s.a(1)),
              (this.logger = i.getLogger(
                "settings.SoftwareUpdateTextToolService",
              )));
          }
          ngOnDestroy() {
            (this.destroyed$$.next(), this.destroyed$$.complete());
          }
          getUpdateCategoryText(e) {
            const t = this.swupUtilsService.getFirstDeviceType(e),
              n = this.swupUtilsService.getFirstDeviceSource(e);
            if (!t || !n) return m.DeviceTypeUnknown;
            switch (t) {
              case i.a.Ecu:
              case i.a.HvEcu:
                return m.DeviceTypeEcu;
              case i.a.NavDB:
              case i.a.NavRegion:
                return n === i.b.App ? m.DeviceTypeNavDbApp : m.DeviceTypeNavDB;
              default:
                return m.DeviceTypeUnknown;
            }
          }
          getUpdateCategoryNotificationText(e) {
            switch (this.getUpdateCategoryText(e)) {
              case m.DeviceTypeEcu:
                return y.DeviceTypeNotifEcu;
              case m.DeviceTypeNavDB:
                return y.DeviceTypeNotifNavDB;
              case m.DeviceTypeNavDbApp:
                return y.DeviceTypeNotifNavDbApp;
              default:
                return y.DeviceTypeNotifUnknown;
            }
          }
          getUpdateNameOrNewVersion(e) {
            if (!e) return "";
            if (
              this.swupUtilsService.isSystemOnlineUpdate(e) ||
              this.swupUtilsService.isAutomaticNavUpdate(e)
            )
              return e.name;
            if (this.swupUtilsService.isCustomerUpdate(e)) {
              const t = this.swupUtilsService.getFirstDevice(e);
              if (t && t.newVersion) return t.newVersion;
            }
            return "";
          }
          getDownloadStatusText(e, t, n, r, l) {
            const a = this.swupUtilsService.getDownloadStatus(e);
            if (!a) return g.Unknown;
            if (!n) return g.BlockedByInstallManager;
            if (
              e &&
              Object(o.wd)(e.blockedByOtherInstallation) &&
              e.blockedByOtherInstallation
            )
              return g.BlockedByOtherInstallation;
            if (
              r &&
              this.swupUtilsService.getDownloadStatus(e) === i.d.DownloadRunning
            )
              return this.swupUtilsService.isNavAppUpdate(e)
                ? g.DownloadErrorNoAppConnection
                : g.DownloadErrorNoOnlineConnection;
            if (
              l &&
              this.swupUtilsService.getDownloadStatus(e) === i.d.DownloadRunning
            )
              return this.swupUtilsService.isNavAppUpdate(e)
                ? g.DownloadErrorNoAppConnection
                : g.DownloadErrorNoOnlineConnection;
            switch (a) {
              case i.d.DownloadConfirmed:
              case i.d.DownloadPreparing:
                return this.swupUtilsService.isCgwUpdate(e) && !t
                  ? g.DownloadRunningCgwClamp15Off
                  : g.DownloadConfirmed;
              case i.d.DownloadRunning:
                if (this.swupUtilsService.isCgwUpdate(e) && !t)
                  return g.DownloadRunningCgwClamp15Off;
                const n = e && e.download;
                return n && n.downloadSpeed && n.downloadSpeed >= 0
                  ? g.DownloadRunningSpeed
                  : g.DownloadRunning;
              case i.d.DownloadPaused:
                return g.DownloadPaused;
              case i.d.DownloadVerifiying:
                return g.DownloadVerifiying;
              case i.d.DownloadPostProcessing:
                return g.DownloadPostProcessing;
              case i.d.LanguageChangeInProgress:
                return g.LanguageChangeInProgress;
              case i.d.DownloadFinished:
                return this.swupUtilsService.isCgwUpdate(e)
                  ? g.DownloadFinishedCgw
                  : g.DownloadFinished;
              case i.d.Idle:
                return g.Idle;
              case i.d.DownloadAvailable:
                return this.swupUtilsService.isNavAppUpdate(e)
                  ? g.DownloadAvailableApp
                  : g.DownloadAvailable;
              case i.d.DownloadNotAvailable:
                return g.DownloadNotAvailable;
              case i.d.ChecksumError:
                return g.ChecksumError;
              case i.d.DownloadAbortedByBackend:
                return g.DownloadAbortedByBackend;
              case i.d.DownloadAbortedByCustomer:
                return g.DownloadAbortedByCustomer;
              case i.d.DownloadAbortedByDownloadManager:
                return g.DownloadAbortedByDownloadManager;
              case i.d.DownloadAuthCancelled:
                return g.DownloadAuthCancelled;
              case i.d.DownloadAuthError:
                return g.DownloadAuthError;
              case i.d.DownloadAuthRequired:
                return g.DownloadAuthRequired;
              case i.d.DownloadError:
                return g.DownloadError;
              case i.d.DownloadErrorConfirmed:
                return g.DownloadErrorConfirmed;
              default:
                return g.Unknown;
            }
          }
          getUpdateStatusText(e, t, n) {
            if (!e || !e.updateStatus) return f.Unknown;
            if (!n) return f.BlockedByInstallManager;
            if (e.blockedByOtherInstallation)
              return f.BlockedByOtherInstallation;
            if (this.swupUtilsService.hasCriticalOrFatalError(e))
              return f.InstallationErrorFatal;
            const r = this.swupUtilsService.getFirstDevice(e),
              l = r ? r.sourceErrorCathegory : void 0;
            switch (e.updateStatus) {
              case i.l.InstallationWaitingForPreconditions:
                return f.InstallationWaitingForPreconditions;
              case i.l.ReadyForInstallation:
              case i.l.InstallationPostponed:
                return this.swupUtilsService.isSystemOnlineUpdate(e) && t
                  ? f.ReadyForInstallationSysOta
                  : f.ReadyForInstallation;
              case i.l.InstallationConfirmed:
                return f.InstallationConfirmed;
              case i.l.InstallationRunning:
                return this.swupUtilsService.isCgwUpdate(e)
                  ? f.InstallationRunningCgw
                  : this.swupUtilsService.isInstallationRunningWithFinalization(
                        e,
                        this.systemConfigService.isAsiaRegion(),
                      )
                    ? f.InstallationRunningWithFinalization
                    : f.InstallationRunning;
              case i.l.InstallationError:
                return f.InstallationError;
              case i.l.InstallationRetry:
                return f.InstallationRetry;
              case i.l.InstallationPausedBySystem:
                return f.InstallationPausedBySystem;
              case i.l.InstallationFinished:
                return f.InstallationFinished;
              case i.l.InstallationFinishedConfirmed:
                return f.InstallationFinishedConfirmed;
              case i.l.InstallationErrorConfirmed:
                return this.swupUtilsService.isCustomerUpdate(e)
                  ? f.InstallationErrorConfirmedWithFinalization
                  : f.InstallationErrorConfirmed;
              case i.l.ChecksumError:
                return f.SourceErrorManifestNotAuthenticated;
              case i.l.SourceError:
                switch (l) {
                  case i.c.DowngradeSwup:
                    return f.SourceErrorDowngradeSwup;
                  case i.c.EqualgradeSwup:
                    return f.SourceErrorEqualgradeSwup;
                  case i.c.Incompatible:
                    return f.SourceErrorIncompatible;
                  case i.c.InsertSwup:
                    return f.SourceErrorInsertSwup;
                  case i.c.InsufficientSpace:
                    return f.SourceErrorInsufficientSpace;
                  case i.c.ManifestNotAuthenticated:
                    return f.SourceErrorManifestNotAuthenticated;
                  case i.c.NoLicence:
                    return f.SourceErrorNoLicence;
                  case i.c.OtherSwup:
                    return f.SourceErrorOtherSwup;
                  default:
                    return f.SourceErrorUnspecific;
                }
              case i.l.SourceRemoved:
                return l === i.c.OtherSwup
                  ? f.SourceErrorOtherSwup
                  : f.SourceRemoved;
              case i.l.Idle:
                return f.Idle;
              default:
                return f.Unknown;
            }
          }
          getInitialSourceErrorLongText(e) {
            if (!e || e.updateStatus !== i.l.SourceError)
              return (
                this.logger.warn(
                  "getInitialSourceErrorLongText: updateStatus is expected to be SourceError for update=",
                  e,
                ),
                h.Unspecific
              );
            switch (this.swupUtilsService.getSourceErrorCategory(e)) {
              case i.c.DowngradeSwup:
                return h.Downgrade;
              case i.c.EqualgradeSwup:
                return h.Equalgrade;
              case i.c.Incompatible:
                return h.Incompatible;
              case i.c.InsufficientSpace:
                return h.InsufficientSpace;
              case i.c.ManifestNotAuthenticated:
                return h.ManifestNotAuthenticated;
              case i.c.NoLicence:
                return h.NoLicence;
              default:
                return h.Unspecific;
            }
          }
          getInbetweenSourceErrorLongText(e) {
            if (!e || e.updateStatus !== i.l.SourceError)
              return (
                this.logger.warn(
                  "getInbetweenSourceErrorLongText: updateStatus is expected to be SourceError for update=",
                  e,
                ),
                b.Unspecific
              );
            switch (this.swupUtilsService.getSourceErrorCategory(e)) {
              case i.c.InsertSwup:
                return b.InsertSwup;
              case i.c.OtherSwup:
                return b.Other;
              default:
                return b.Unspecific;
            }
          }
          getCustomerUpdateMediumRemovedText(e) {
            switch (this.swupUtilsService.getFirstDeviceSource(e)) {
              case i.b.App:
                return p.App;
              case i.b.Ota:
                return p.Ota;
              case i.b.Tester:
                return p.Tester;
              case i.b.Usb1:
              case i.b.Usb2:
              case i.b.Usb3:
              case i.b.Usb4:
                return p.Usb;
              case i.b.Sd1:
              case i.b.Sd2:
              default:
                return p.Unknown;
            }
          }
          formatDownloadSize(e) {
            const t = this.translatedUnitsService.format(
              e,
              o.vc.KILOBYTE,
              a.a.DataMemory,
            );
            return `${t.value} ${t.unit}`;
          }
          formatDownloadloadSpeed(e) {
            const t = this.translatedUnitsService.format(
              e,
              o.vc.KILOBYTE_PER_SECOND,
              a.a.DataTransfer,
            );
            return t ? `${t.value} ${t.unit}` : "ERROR";
          }
        }
        return (
          (e.ɵprov = u.bc({
            factory: function () {
              return new e(u.cc(l.b), u.cc(r.a), u.cc(c.a), u.cc(d.a));
            },
            token: e,
            providedIn: "root",
          })),
          e
        );
      })();
    },
    I9PG: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var i = n("kZht"),
        r = n("Yi6/"),
        l = n("kuMc");
      class o extends r.c {
        constructor(e, t, n, l, o, a, s, u) {
          (super(
            [r.db.UgdoPress],
            t,
            n,
            l,
            o,
            a,
            s,
            u,
            e.getLogger("car.directives.au3UgdoPress"),
          ),
            (this.au3UgdoPress = new i.n()),
            (this.ugdoPressed = !1),
            this.initAbstractPressSubscriptions());
        }
        initAbstractPressSubscriptions() {
          (this.pressStart$
            .pipe(Object(l.a)(this.destroyed$$))
            .subscribe(() => {
              this.onPressed();
            }),
            this.pressCancel$
              .pipe(Object(l.a)(this.destroyed$$))
              .subscribe(() => {
                this.onReleased();
              }),
            this.pressEnd$
              .pipe(Object(l.a)(this.destroyed$$))
              .subscribe((e) => {
                this.onReleased();
              }));
        }
        ngOnDestroy() {
          (super.ngOnDestroy(), this.onReleased());
        }
        setPressed(e) {
          this.ugdoPressed !==
            (e =
              e &&
              !(this.disabledDirective && this.disabledDirective.disabled)) &&
            ((this.ugdoPressed = e), this.au3UgdoPress.emit(this.ugdoPressed));
        }
        onPressed() {
          this.setPressed(!0);
        }
        onReleased() {
          this.setPressed(!1);
        }
        get name() {
          return `UgdoPressDirective (${this.getIdentification()})`;
        }
      }
    },
    OhEM: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      const i = {
        Init: { path: "init", mainScreen: !1, skipHistory: !0 },
        Main: {
          path: "main",
          mainScreen: !0,
          clearHistory: !0,
          children: { ScreenLayerShow: { path: "screen-layer-show" } },
        },
        WebApp: n("ybXq").b,
      };
    },
    PXit: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return C;
      }),
        n.d(t, "b", function () {
          return w;
        }));
      var i = n("kZht"),
        r = n("HVUF"),
        l = n("B3Zb"),
        o = n("yNay"),
        a = n("8TlW"),
        s = n("fu7d"),
        u = n("bou3"),
        c = n("ijxY"),
        d = n("Xo58"),
        p = n("m3Ja"),
        g = n("r+e+"),
        h = n("bmFL"),
        b = n("l9Gk"),
        f = n("Ps6X"),
        m = n("6zvu"),
        y = n("An66"),
        C =
          (n("p7sD"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .ui-state--list-horizontal[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .ui-state--list-horizontal[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-top:21px solid;border-bottom:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow.webp);border-image-slice:21 0;image-rendering:-webkit-optimize-contrast;transform:scaleX(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-horizontal[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-horizontal[_nghost-%COMP%]:after{transform:scaleX(1);transition:transform .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:before, .ui-state--list-vertical[_nghost-%COMP%]:before{position:absolute;display:block;pointer-events:none;top:0;left:0;right:0;bottom:0;content:" ";background-color:var(--current-context);z-index:1;backface-visibility:hidden;mix-blend-mode:screen;opacity:0;transition:opacity .25s}.state-pressed.ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:before, .state-pressed[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before, .state-pressed   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:before{opacity:.15;transition:opacity .4s}.ui-state--list-vertical[_ngcontent-%COMP%]:after, .ui-state--list-vertical[_nghost-%COMP%]:after{position:absolute;display:block;pointer-events:none;z-index:1;backface-visibility:hidden;top:0;left:0;right:0;bottom:0;content:" ";filter:var(--current-context-hue);border-left:21px solid;border-right:21px solid;border-image:url(/decorators/UIStates/uistate_list_glow_vertical.webp);border-image-slice:0 21;image-rendering:-webkit-optimize-contrast;transform:scaleY(0);transform-origin:inherit;transition:transform .25s}.state-hovered.ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_ngcontent-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered[_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered   [_nghost-%COMP%]   .ui-state--list-vertical[_ngcontent-%COMP%]:after, .state-hovered[_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after, .state-hovered   [_nghost-%COMP%] -no-combinator.ui-state--list-vertical[_nghost-%COMP%]:after{transform:scaleY(1);transition:transform .4s}[_nghost-%COMP%]{display:inline-block;position:relative;margin-right:2px}.led-button-container[_ngcontent-%COMP%]{padding:0 22px 0 20px}.au3-led-button--with-background[_nghost-%COMP%]{background:linear-gradient(0deg,hsla(0,0%,100%,.18),transparent 64%)}.au3-led-button--with-borders[_nghost-%COMP%]{border-width:0 0 2px 1px;border-style:solid;border-image:linear-gradient(0deg,hsla(0,0%,100%,.7),transparent 80%) 1 2%}.au3-led-button--with-borders[_nghost-%COMP%]:after{content:"";position:absolute;top:0;bottom:0;right:-2px;width:1px;background:linear-gradient(0deg,hsla(0,0%,100%,.7),transparent 80%)}.au3-led-button--with-background.au3-led-button--vertically-reversed[_nghost-%COMP%]{background:linear-gradient(180deg,hsla(0,0%,100%,.18),transparent 64%)}.au3-led-button--with-borders.au3-led-button--vertically-reversed[_nghost-%COMP%]{border-width:2px 0 0 1px;border-image:linear-gradient(180deg,hsla(0,0%,100%,.7),transparent 80%) 1 2%}.au3-led-button--with-borders.au3-led-button--vertically-reversed[_nghost-%COMP%]:after{background:linear-gradient(180deg,hsla(0,0%,100%,.7),transparent 80%)}.state-disabled[_nghost-%COMP%]{filter:grayscale(100%) brightness(.4)}.leds[_ngcontent-%COMP%]{position:absolute;display:flex;flex-direction:row;top:4px;left:4px;right:2px}.leds--bottom[_ngcontent-%COMP%]{top:auto;bottom:4px}.leds--small[_ngcontent-%COMP%]{left:31px;right:29px}.led[_ngcontent-%COMP%]{flex-grow:1;height:4px;margin-right:3px;border-width:1px 0 0 1px;border-top-color:#313131;border-left-color:rgba(49,49,49,.75);box-shadow:inset -1px -1px hsla(0,0%,100%,.5)}.led[_ngcontent-%COMP%]:last-of-type{margin-right:0}.led--on.led--red[_ngcontent-%COMP%]{background:red}.led--on.led--blue[_ngcontent-%COMP%]{background:#00baff}.led--on.led--green[_ngcontent-%COMP%]{background:#0f0}.led--on.led--white[_ngcontent-%COMP%]{background:#fff}.led--on.led--depending-on-context[_ngcontent-%COMP%]{background:var(--current-context)}.leds--overlap-border.leds[_ngcontent-%COMP%]{left:0;right:-1px;top:-3px;bottom:auto}.leds--overlap-border.leds--bottom[_ngcontent-%COMP%]{top:auto;bottom:-3px}.leds--overlap-border[_ngcontent-%COMP%]   .led[_ngcontent-%COMP%]{height:6px;box-shadow:none;margin-right:0;border:1px solid transparent}.leds--overlap-border[_ngcontent-%COMP%]   .led--on[_ngcontent-%COMP%]{border:1px solid #000}.led-button-container--width-text[_ngcontent-%COMP%]{position:relative;height:100%;width:100%;display:flex;justify-content:center;align-items:center;font-size:40px}.button-text[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;position:relative;text-align:center;color:#fff;max-width:100%;max-height:100%}',
              ],
            ],
            data: {},
          }));
      function v(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "au3-icon",
              [],
              [[2, "icon-component--hidden", null]],
              null,
              null,
              r.b,
              r.a,
            )),
            i.xb(
              1,
              4243456,
              null,
              0,
              l.b,
              [o.a, i.z],
              { fileName: [0, "fileName"], category: [1, "category"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            e(t, 1, 0, n.icon, n.iconCategory);
          },
          function (e, t) {
            e(t, 0, 0, i.Nb(t, 1).iconComponentHidden);
          },
        );
      }
      function D(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              3,
              "au3-i18n-label",
              [
                ["class", "button-text"],
                ["id", "LedButtonLabel"],
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
            i.xb(
              1,
              212992,
              null,
              0,
              s.a,
              [i.l, i.D, u.a, o.a, [3, s.a], [8, null]],
              { id: [0, "id"] },
              null,
            ),
            i.xb(
              2,
              16384,
              null,
              0,
              c.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            i.xb(
              3,
              245760,
              null,
              0,
              d.a,
              [[6, s.a], p.a, i.h, i.l, i.D, [2, g.a], [2, c.a], [2, h.a]],
              { developerText: [0, "developerText"], id: [1, "id"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, "LedButtonLabel"),
              e(t, 2, 0, !n.hasText),
              e(t, 3, 0, n.developerText, "LedButtonLabel"));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              i.Nb(t, 3).backgroundColor,
              i.Nb(t, 3).fixedNumberOfLines,
              i.Nb(t, 3).mayContainLatinCharsForArabic,
              i.Nb(t, 3).shortenWithEllipsisForArabic,
            );
          },
        );
      }
      function S(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              0,
              "div",
              [["class", "led"]],
              [
                [2, "led--on", null],
                [2, "led--red", null],
                [2, "led--blue", null],
                [2, "led--green", null],
                [2, "led--white", null],
                [2, "led--depending-on-context", null],
              ],
              null,
              null,
              null,
              null,
            )),
          ],
          null,
          function (e, t) {
            var n = t.component;
            e(
              t,
              0,
              0,
              t.context.index < n.ledsActive,
              n.ledColor === n.ledColorEnum.RED,
              n.ledColor === n.ledColorEnum.BLUE,
              n.ledColor === n.ledColorEnum.GREEN,
              n.ledColor === n.ledColorEnum.WHITE,
              n.ledColor === n.ledColorEnum.DEPENDING_ON_CONTEXT,
            );
          },
        );
      }
      function w(e) {
        return i.ac(
          2,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              10,
              "div",
              [
                ["class", "led-button-container"],
                ["ttDoNotToggleChildren", ""],
                ["ttIgnore", ""],
              ],
              [
                [2, "led-button-container--width-text", null],
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
            i.xb(
              1,
              16384,
              null,
              0,
              c.a,
              [],
              { ttIgnoreDynamicValue: [0, "ttIgnoreDynamicValue"] },
              null,
            ),
            i.xb(
              2,
              16384,
              null,
              0,
              b.a,
              [],
              { ttDoNotToggleDynamicValue: [0, "ttDoNotToggleDynamicValue"] },
              null,
            ),
            i.xb(
              3,
              212992,
              null,
              0,
              f.a,
              [[2, m.a], [8, null], [3, f.a], i.l, i.h],
              { au3UiState: [0, "au3UiState"] },
              null,
            ),
            (e()(), i.hb(16777216, null, null, 1, null, v)),
            i.xb(
              5,
              16384,
              null,
              0,
              y.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), i.hb(16777216, null, null, 1, null, D)),
            i.xb(
              7,
              16384,
              null,
              0,
              y.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            i.yb(
              8,
              0,
              null,
              null,
              2,
              "div",
              [["class", "leds"]],
              [
                [2, "leds--small", null],
                [2, "leds--bottom", null],
                [2, "leds--overlap-border", null],
              ],
              null,
              null,
              null,
              null,
            )),
            (e()(), i.hb(16777216, null, null, 1, null, S)),
            i.xb(
              10,
              278528,
              null,
              0,
              y.j,
              [i.P, i.L, i.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 1, 0, !n.hasText),
              e(t, 2, 0, !n.hasText),
              e(t, 3, 0, n.uiStateType),
              e(t, 5, 0, n.icon && n.iconCategory),
              e(t, 7, 0, n.hasText),
              e(t, 10, 0, n.leds));
          },
          function (e, t) {
            var n = t.component;
            (e(t, 0, 1, [
              n.hasText,
              i.Nb(t, 3).uiStateListHorizontal,
              i.Nb(t, 3).uiStateListVertical,
              i.Nb(t, 3).uiStateCoverLeft,
              i.Nb(t, 3).uiStateCoverRight,
              i.Nb(t, 3).uiStateCoverBottom,
              i.Nb(t, 3).uiStateButton,
              i.Nb(t, 3).uiStateByDabLeft,
              i.Nb(t, 3).uiStateByDabRight,
              i.Nb(t, 3).uiStateLbDabLeft,
              i.Nb(t, 3).uiStateLbDabRight,
            ]),
              e(t, 8, 0, n.ledsSmall, n.ledsBottom, n.ledsOverlapBorder));
          },
        );
      }
    },
    RPdF: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var i = n("Yi6/"),
        r = (n("uszR"), n("B0wk")),
        l = n("ROBh"),
        o = n("YtkY"),
        a = n("jIqt");
      class s {
        constructor(e, t, n, s, u, c, d) {
          ((this.popupManager = e),
            (this.carRoutingService = u),
            (this.globalRoutingService = c),
            (this.systemConfigurationService = d),
            (this.featureConfig = i.id),
            (this.PopupType = i.Rb),
            (this.PopupIds = i.Ob),
            (this.isKorea$ = i.gd.textToolMode
              ? Object(l.a)(!1)
              : this.systemConfigurationService.region$.pipe(
                  Object(o.a)((e) => e === r.k.KR),
                  Object(a.a)(!1),
                )),
            (this.WebappPopupIds = [
              i.Ob.POPUP_GENERIC_WEBAPP_POPUP_FULLSCREEN,
              i.Ob.POPUP_GENERIC_WEBAPP_POPUP_DIALOG,
              i.Ob.POPUP_GENERIC_WEBAPP_POPUP_TOAST,
              i.Ob.POPUP_LOGBOOK_GOODBYE_SUCCESS_TOAST,
            ]),
            this.popupManager.activePopups$.subscribe(() => {
              n.run(() => {
                s.markForCheck();
              });
            }));
        }
        isActive(e) {
          return this.popupManager.isCurrentlyActive(e);
        }
      }
    },
    Tyvc: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var i = n("Yi6/"),
        r = n("bkj4"),
        l = n("klo+"),
        o = n("nMmM");
      class a {
        constructor(e) {
          ((this.logService = e),
            (this.logger = this.logService.getLogger(
              "etc.FormatTollCostPipe",
            )));
        }
        transform(e, t) {
          const n = this.mapToPaymentInfo(e);
          if (n) {
            const e = this.getTollCost(n);
            return void 0 !== e ? `${e.unit} ${e.value}` : "--";
          }
          return "undefined";
        }
        mapToPaymentInfo(e) {
          if (Object(i.rd)(e))
            return void this.logger.error(
              "mapToPaymentInfo: Value object was undefined",
            );
          let t = l.c.JPY;
          return (
            e && e.currencyCode
              ? (t = e.currencyCode)
              : e && e.currency && (t = e.currency),
            { amount: e.amount, currencyCode: t }
          );
        }
        getTollCost(e) {
          return Object(o.a)(
            this.logger,
            e.amount,
            this.mapCurrencyCode(e.currencyCode),
          );
        }
        mapCurrencyCode(e) {
          switch (e) {
            case l.c.CNY:
            case r.h.CNY:
              return r.d.CNY;
            case l.c.EUR:
            case r.h.EUR:
              return r.d.EUR;
            case l.c.GBP:
            case r.h.GBP:
              return r.d.GBP;
            case l.c.JPY:
            case r.h.JPY:
              return r.d.JPY;
            case l.c.KRW:
            case r.h.KRW:
              return r.d.KRW;
            case l.c.TWD:
            case r.h.TWD:
              return r.d.TWD;
            case l.c.USD:
            case r.h.USD:
              return r.d.USD;
            default:
              return (
                this.logger.error(
                  `mapCurrencyCode Could not map currency ${e}`,
                ),
                r.d.JPY
              );
          }
        }
      }
    },
    WABo: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return h;
      });
      var i = n("bwdy"),
        r = n("ROBh"),
        l = n("TLy2"),
        o = n("Yi6/"),
        a = n("ZVJ/"),
        s = n("kZht"),
        u = n("FfND"),
        c = n("fzcM"),
        d = n("oeT7"),
        p = n("yNay");
      const g = (e, t, n, i, r) =>
        h.createRoutingDisclaimerService(e, t, n, i, r);
      let h = (() => {
        class e {
          constructor(e, t, n, r) {
            ((this.disclaimerService = e),
              (this.lockingService = t),
              (this.textinputLockingService = r),
              (this.routeSubscription = i.a.EMPTY),
              (this.disclaimerSubscriptions = []),
              (this.logger = n.getLogger("locking.RoutingDisclaimerService")));
          }
          static createRoutingDisclaimerService(t, n, i, r, l) {
            const o = new e(n, i, r, l);
            return (o.init(t.currentAppRoute$), o);
          }
          init(e) {
            this.routeSubscription = e.subscribe((e) => this.onRouteChanged(e));
          }
          ngOnDestroy() {
            (this.routeSubscription.unsubscribe(),
              this.disclaimerSubscriptions.forEach((e) =>
                this.disclaimerService.unregisterDisclaimer(e),
              ));
          }
          onRouteChanged(e) {
            (this.disclaimerSubscriptions.forEach((e) =>
              this.disclaimerService.unregisterDisclaimer(e),
            ),
              (this.disclaimerSubscriptions = []));
            const t = e.lockingContext;
            if (t) {
              if (
                (this.logger.debug("Registering disclaimer locks", {
                  complexScreen: e.complexScreen,
                  textInfoContexts: e.textInputContexts,
                  longTextScreen: e.longTextScreen,
                  context: t,
                }),
                e.complexScreen &&
                  this.disclaimerSubscriptions.push(
                    this.registerDisclaimerForLocking(
                      { context: t, type: o.Eb.SCREEN, category: o.Ab.COMPLEX },
                      o.Db.DEFAULT_LOCKING_DISCLAIMER,
                    ),
                  ),
                (e.longTextScreen || e.longTextTextOnlyScreen) &&
                  this.disclaimerSubscriptions.push(
                    this.registerDisclaimerForLocking(
                      {
                        context: t,
                        type: o.Eb.SCREEN,
                        category: o.Ab.LONG_TEXT,
                      },
                      o.B.LOCKING_LONG_TEXT,
                      !0,
                    ),
                  ),
                e.textInputContexts)
              ) {
                const n =
                    this.textinputLockingService.getLockingPropertyForContexts(
                      e.textInputContexts,
                      t,
                    ).lock$,
                  i = Object(r.a)(o.Db.DEFAULT_LOCKING_DISCLAIMER);
                this.disclaimerSubscriptions.push(
                  this.disclaimerService.registerDisclaimer({
                    enabled$: n,
                    reason$: i,
                    priority: o.D.LockingComplex,
                  }),
                );
              }
              this.disclaimerSubscriptions.push(
                this.registerDisclaimerForRouteInfo(e),
              );
            } else
              this.logger.error(
                "Invalid locking context for route info",
                Object(o.kd)(e),
              );
          }
          registerDisclaimerForRouteInfo(e) {
            const t = this.lockingService
                .getPropertyForRouteInfo(e)
                .pipe(Object(l.a)((e) => e.lock$)),
              n = o.D.LockingComplex,
              i = Object(r.a)(o.Db.DEFAULT_LOCKING_DISCLAIMER);
            return this.disclaimerService.registerDisclaimer({
              enabled$: t,
              priority: n,
              reason$: i,
            });
          }
          registerDisclaimerForLocking(e, t, n = !1) {
            const i = this.lockingService
                .getProperty(e)
                .pipe(Object(l.a)((e) => e.lock$)),
              a = o.D.LockingComplex,
              s = Object(r.a)(t);
            return this.disclaimerService.registerDisclaimer({
              enabled$: i,
              priority: a,
              reason$: s,
              allowOperationPanel: n,
            });
          }
        }
        return (
          (e.ɵprov = s.bc({
            factory: function () {
              return g(s.cc(u.a), s.cc(c.a), s.cc(d.i), s.cc(p.a), s.cc(a.a));
            },
            token: e,
            providedIn: "root",
          })),
          e
        );
      })();
    },
    Xs8a: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return i;
      }),
        n("2IWi"));
      class i {
        constructor(e) {
          this.restrictionReasonTransformService = e;
        }
        transform(e, t) {
          return this.restrictionReasonTransformService.getDisabledState(e);
        }
      }
    },
    cOck: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return d;
      }),
        n.d(t, "b", function () {
          return g;
        }));
      var i = n("kZht"),
        r = n("ZRMe"),
        l = n("0Z+c"),
        o = n("3EdB"),
        a = n("eoEw"),
        s = n("m3Ja"),
        u = n("SOvQ"),
        c = n("An66"),
        d =
          (n("2ozK"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                '.tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}@font-face{font-family:Audi Type Plain PCSim;src:url(/fonts/AudiTypeDisplayHigh-Normal_13_ohne_Hints.ttf)}@font-face{font-family:Audi Type Light PCSim;src:url(/fonts/AudiTypeDisplayHigh-Light.ttf)}@font-face{font-family:ZYHei_GB18030_c PCSim;src:url("/fonts/ZYHei_GB18030_c(20131128).ttf")}@font-face{font-family:Source Han Sans JP PCSim;src:url(/fonts/SourceHanSansJP-Regular.otf)}@font-face{font-family:Source Han Sans KR PCSim;src:url(/fonts/SourceHanSansKR-Regular.otf)}@font-face{font-family:Audi Type Arabic PCSim;src:url(/fonts/AudiTypeArabic-Normal.otf)}[_nghost-%COMP%]{font-family:var(--font-config-light,Audi Type Display High Light,Audi Type Arabic,ZYHei_GB18030_c,Source Han Sans KR Regular,Source Han Sans JP Regular);display:grid;width:100%;grid-template-rows:100%;grid-template-columns:55px calc(100% - 55px);grid-template-areas:"arrow distance"}.direction-distance__icon[_ngcontent-%COMP%]{grid-area:arrow;display:flex;align-items:center;justify-content:center}.direction-distance__distance[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;grid-area:distance;display:flex;align-items:center}.component-layout-latin[_nghost-%COMP%], .component-layout-latin   [_nghost-%COMP%]{direction:ltr}.component-layout-latin[_nghost-%COMP%]   .direction-distance__distance[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .direction-distance__distance[_ngcontent-%COMP%]{justify-content:flex-end}.component-layout-latin[_nghost-%COMP%]   .direction-distance__icon[_ngcontent-%COMP%], .component-layout-latin   [_nghost-%COMP%]   .direction-distance__icon[_ngcontent-%COMP%]{padding:7px 15px 7px 0}.component-layout-arabic[_nghost-%COMP%], .component-layout-arabic   [_nghost-%COMP%]{direction:rtl}.component-layout-arabic[_nghost-%COMP%]   .direction-distance__icon[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .direction-distance__icon[_ngcontent-%COMP%]{padding:7px 0 7px 15px}.component-layout-arabic[_nghost-%COMP%]   .direction-distance__distance[_ngcontent-%COMP%], .component-layout-arabic   [_nghost-%COMP%]   .direction-distance__distance[_ngcontent-%COMP%]{justify-content:flex-start}',
              ],
            ],
            data: {},
          }));
      function p(e) {
        return i.ac(
          0,
          [
            (e()(),
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
            (e()(),
            i.yb(
              1,
              0,
              null,
              null,
              2,
              "div",
              [["class", "direction-distance__icon"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              2,
              0,
              null,
              null,
              1,
              "au3-direction-arrow",
              [],
              null,
              null,
              null,
              r.b,
              r.a,
            )),
            i.xb(
              3,
              49152,
              null,
              0,
              l.a,
              [],
              { displayableArrow: [0, "displayableArrow"] },
              null,
            ),
            (e()(),
            i.yb(
              4,
              0,
              null,
              null,
              1,
              "au3-formatted-unit-renderer",
              [["class", "direction-distance__distance"]],
              [[2, "invisible", null]],
              null,
              null,
              o.b,
              o.a,
            )),
            i.xb(
              5,
              180224,
              null,
              0,
              a.b,
              [s.a, u.a, i.h],
              {
                smallerFontForUnit: [0, "smallerFontForUnit"],
                rawValue: [1, "rawValue"],
                rawValueUnit: [2, "rawValueUnit"],
                rawValueFormattingRule: [3, "rawValueFormattingRule"],
              },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 3, 0, n.getDisplayableArrow()),
              e(
                t,
                5,
                0,
                !0,
                n.getDistanceValue(),
                n.sourceUnit,
                n.distanceFormattingRule,
              ));
          },
          function (e, t) {
            e(t, 4, 0, i.Nb(t, 5).isInvisible);
          },
        );
      }
      function g(e) {
        return i.ac(
          2,
          [
            (e()(), i.hb(16777216, null, null, 1, null, p)),
            i.xb(
              1,
              16384,
              null,
              0,
              c.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
          ],
          function (e, t) {
            e(t, 1, 0, t.component.isDirectionAndDistanceValid());
          },
          null,
        );
      }
    },
    hHAo: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return O;
      }),
        n.d(t, "b", function () {
          return E;
        }));
      var i = n("D57K"),
        r = n("Yi6/"),
        l = n("GzxT"),
        o = n("x8jN"),
        a = n("QQZH"),
        s = n("HM3f"),
        u = n("ROBh"),
        c = n("P4Xx"),
        d = n("xVbo"),
        p = n("J+dc"),
        g = n("14JN"),
        h = n("YtkY"),
        b = n("xOLM"),
        f = n("8j5Y"),
        m = n("BwBJ"),
        y = n("jIqt"),
        C = n("7SLS"),
        v = n("n6NA"),
        D = n("qIdC"),
        S = n("R0ft"),
        w = n("kZht"),
        P = n("bou3"),
        x = n("yNay"),
        O = (function (e) {
          return ((e.Screen = "Screen"), (e.Popup = "Popup"), e);
        })({});
      let E = (() => {
        class e {
          constructor(e, t, n, i, r, o) {
            ((this.perceivableContextService = e),
              (this.perceivableContextRsiClient = t),
              (this.startupService = n),
              (this.systemConfigService = i),
              (this.asterixSyncService = r),
              (this.destroy$$ = new a.a(1)),
              (this.currentContext = O.Screen),
              (this.displayStates = new Map([
                [
                  O.Popup,
                  {
                    internalRequestId: 0,
                    currentPage: l.a.SINGLE,
                    displayElements: [],
                  },
                ],
                [
                  O.Screen,
                  {
                    internalRequestId: 0,
                    currentPage: l.a.SINGLE,
                    displayElements: [],
                  },
                ],
              ])),
              (this.displayElementsMarkedForDeletion = []),
              (this.logger = o.getLogger("main.MainPerceivableContextService")),
              (this.mergeLogger = o.getMergelogLogger()),
              this.perceivableContextRsiClient.displays
                .isPresent()
                .pipe(
                  Object(d.a)((e) => e),
                  Object(p.a)(1),
                )
                .subscribe(() => {
                  this.mergeLogger.log(
                    "RUDI resource presence: /perceivablecontext/displays is present",
                  );
                }));
          }
          static toPerceivableContextPage(e) {
            switch (e) {
              case r.t.FIRST:
                return l.a.FIRST;
              case r.t.LAST:
                return l.a.LAST;
              case r.t.MIDDLE:
                return l.a.MIDDLE;
              case r.t.SINGLE:
                return l.a.SINGLE;
              default:
                return;
            }
          }
          initSubscriptions() {
            (this.perceivableContextRsiClient.start(),
              Object(s.b)(
                this.perceivableContextService.mainDisplay$.pipe(
                  Object(p.a)(1),
                ),
                this.perceivableContextRsiClient.displays
                  .isPresent()
                  .pipe(Object(g.b)((e) => e)),
                this.startupService.lastMode$.pipe(
                  Object(h.a)(D.c),
                  Object(p.a)(1),
                ),
                this.readyForRenderingMainDisplay$().pipe(Object(p.a)(1)),
              ).subscribe(([e, t, n]) => {
                e || this.createMainDisplayObject(n || l.b.HOME);
              }));
          }
          ngOnDestroy() {
            (this.deleteMainDisplay(), this.destroy$$.next());
          }
          updateVisibleItems(e, t) {
            const n = e
              .map((e) =>
                null == e
                  ? null
                  : {
                      visibleLineNumber: e.index > 0 ? e.index : void 0,
                      referenceId: e.item.referenceId,
                      referenceType: e.item.referenceType,
                      referenceIndex: e.item.referenceIndex,
                      selectable:
                        null == e.item.sdsSelectable || e.item.sdsSelectable,
                    },
              )
              .filter(r.wd);
            return this.updateDisplayElements(n, t);
          }
          updateDisplayElements(e, t) {
            return Object(i.a)(this, void 0, void 0, function* () {
              (this.logger.info(
                `updateDisplayelementObjects: for context ${t}. Current context: ${this.currentContext}). items:  `,
                e,
              ),
                t === O.Popup && (this.currentContext = O.Popup));
              const n = this.displayStates.get(t),
                i = n.displayElements
                  .map(({ displayElement: e }) => e)
                  .filter(Object(r.yd)("id"));
              i.length > 0 &&
                (this.logger.info(
                  "updateDisplayElements: update overwrites old rsi elements, which will be marked for deletion: ",
                  n.displayElements,
                ),
                this.markDisplayElementsForDeletion(i));
              const l = e.map((e, t) => ({
                displayElement: e,
                internalRequestId: n.internalRequestId + t,
              }));
              return (
                (n.displayElements = l),
                (n.internalRequestId += n.displayElements.length),
                0 === l.length
                  ? this.updateMainDisplay({ displayElements: [] }).then(
                      () => {},
                    )
                  : this.insertDisplayElements(l, t)
              );
            });
          }
          updateCurrentPage(t, n) {
            return Object(i.a)(this, void 0, void 0, function* () {
              const i = e.toPerceivableContextPage(t);
              null != i
                ? (this.logger.info(
                    `updateCurrentPage: for ${n}. currentContext: ${this.currentContext}): new currentListPage:`,
                    t,
                  ),
                  n === O.Popup && (this.currentContext = O.Popup),
                  (this.displayStates.get(n).currentPage = i),
                  n === this.currentContext &&
                    (yield this.updateMainDisplay({ currentPage: i }).catch(
                      (e) =>
                        this.logger.error(
                          "updateCurrentPage: Could not update current list page: ",
                          e,
                        ),
                    )))
                : this.logger.error(
                    `updateCurrentPage: called with invalid currentListPage: ${t} for context ${n}`,
                  );
            });
          }
          clearContext(e) {
            if (e === this.currentContext) {
              const t = this.displayStates.get(O.Screen);
              if (
                e === O.Screen &&
                t.currentPage === l.a.SINGLE &&
                0 === t.displayElements.length
              )
                return (
                  this.logger.info(
                    `clearContext: skip clearContext for ${e}. Already cleared context.`,
                  ),
                  Promise.resolve()
                );
              (this.logger.info(`clearContext: for context ${e}`),
                this.markContextDisplayElementsForDeletion(e),
                this.logger.info(
                  "clearContext: delete all displayElements marked for deletion",
                ),
                this.deleteMarkedDisplayElements(),
                this.logger.info(
                  `clearContext: clear displayState for context ${e}`,
                ),
                (this.displayStates.get(e).currentPage = l.a.SINGLE),
                (this.displayStates.get(e).displayElements = []),
                (this.currentContext = O.Screen));
              const n = { currentPage: l.a.SINGLE, displayElements: [] };
              if (e === O.Popup) {
                const { currentPage: e, displayElements: i } = t;
                ((n.currentPage = e),
                  i.length > 0 &&
                    i.every(({ displayElement: e }) => null != e.id) &&
                    (n.displayElements = i.map(
                      ({ displayElement: e }) => e.id,
                    )),
                  this.logger.info(
                    `clearContext: restore displayState of context ${O.Screen}`,
                  ));
              }
              return this.updateMainDisplay(n)
                .then(() => {})
                .catch((e) =>
                  this.logger.error(
                    `clearContext: Could not restore displayStaet of context ${O.Screen}: `,
                    e,
                  ),
                );
            }
            return (
              this.logger.info(
                `clearContext: skip clearContext for ${e}. Already cleared context.`,
              ),
              Promise.resolve()
            );
          }
          updateMainDisplay(e) {
            this.logger.info("updateMainDisplay: ", e);
            const t = this.perceivableContextService.mainDisplay;
            return t
              ? this.perceivableContextRsiClient.displays
                  .updateDisplayObject(t.id, e)
                  .toPromise()
                  .then(
                    (t) => (this.logger.info("updateMainDisplay: done", e), t),
                  )
              : Promise.reject(new Error("Main display object not ready yet!"));
          }
          removeScreenInfo() {
            this.logger.info("removeScreenInfo: ");
            const e = this.perceivableContextService.mainDisplay;
            return e
              ? this.perceivableContextRsiClient.displays
                  .deleteDisplayObject(e.id, ["screenInfo"])
                  .pipe(Object(r.pd)(this.logger, "removeScreenInfo: done"))
                  .toPromise()
              : Promise.reject(new Error("Main display object not ready yet!"));
          }
          createMainDisplayObject(e) {
            const t = {
              name: l.c.MAIN,
              domain: e === l.b.NAVI ? l.b.MAP : e,
              currentPage: l.a.SINGLE,
              displayElements: [],
            };
            (this.mergeLogger.log(
              `${r.hc.CREATING_PERCEIVABLE_CONTEXT} with domain ${t.domain}`,
            ),
              this.perceivableContextRsiClient.displays
                .insertDisplayObject(t)
                .pipe(
                  Object(b.a)((e) =>
                    e.pipe(
                      Object(f.a)((e) =>
                        this.logger.debug(
                          "Error trying to create main display object: ",
                          e,
                        ),
                      ),
                      Object(m.a)(3e3),
                    ),
                  ),
                )
                .subscribe((e) => {
                  this.logger.debug("Inserted initial display object:", e);
                }));
          }
          deleteMainDisplay() {
            const e = this.perceivableContextService.mainDisplay;
            return e
              ? this.perceivableContextRsiClient.displays
                  .deleteDisplayObject(e.id)
                  .toPromise()
              : Promise.reject(new Error("Main display object not ready yet!"));
          }
          readyForRenderingMainDisplay$() {
            const e = Object(s.b)(
              this.asterixSyncService.asterixIsReady$.pipe(Object(y.a)(!1)),
              this.asterixSyncService.asterixIsFunctional$,
            ).pipe(
              Object(h.a)(([e, t]) =>
                e && t
                  ? (this.logger.info(
                      "readyForRenderingMainDisplay$: Asterix is ready for rendering - proceed with perceivable context creation",
                    ),
                    !0)
                  : !t &&
                    (this.logger.warn(
                      "readyForRenderingMainDisplay$: Asterix is not functional - proceed with perceivable context creation anyway to show MIB system as fallback",
                    ),
                    !0),
              ),
              Object(d.a)((e) => e),
              Object(C.a)(void 0),
            );
            return this.systemConfigService.isAsterixAvailable()
              ? e
              : Object(u.a)(void 0);
          }
          insertDisplayElements(e, t) {
            this.logger.info("insertDisplayelementObjects: ", e);
            const n = this.perceivableContextService.mainDisplay;
            if (!n)
              throw new Error("No display object for main display available.");
            return Promise.all(
              e
                .map((e) =>
                  Object.assign(Object.assign({}, e), {
                    displayElement: Object.assign(
                      Object.assign({}, e.displayElement),
                      { name: "", selectable: !0, display: n.uri },
                    ),
                  }),
                )
                .map((e) =>
                  this.perceivableContextRsiClient.displayelements
                    .insertDisplayelementObject(e.displayElement)
                    .toPromise()
                    .then((t) => ({
                      id: t.split("/").pop(),
                      internalRequestId: e.internalRequestId,
                    })),
                ),
            )
              .then((n) => {
                this.logger.info(
                  "insertDisplayelementObjects: created new displayelements: ",
                  n,
                );
                const i = this.displayStates.get(t).displayElements,
                  r = i.map((e) => e.internalRequestId);
                return n.length === r.length &&
                  n.every(({ internalRequestId: e }, t) => e === r[t])
                  ? ((this.displayStates.get(t).displayElements = i.map(
                      ({ displayElement: e, internalRequestId: t }, i) => ({
                        displayElement: Object.assign(Object.assign({}, e), {
                          id: n[i].id,
                        }),
                        internalRequestId: t,
                      }),
                    )),
                    this.logger.info(
                      "insertDisplayElements: inserted displayElements match expected internalRequestIds.",
                    ),
                    t === this.currentContext
                      ? (this.logger.info(
                          `insertDisplayElements: context ${t} is current context. Update main display with new displayElements`,
                        ),
                        this.updateMainDisplay({
                          displayElements: n.map(({ id: e }) => e),
                        }).then((e) => {
                          this.logger.info(
                            "insertDisplayelementObjects: updated main display with new displayelements: ",
                            e,
                          );
                        }))
                      : void 0)
                  : (this.logger.info(
                      "insertDisplayElementObjects: expected internalRequestIds: ",
                      r,
                    ),
                    this.logger.info(
                      "insertDisplayElementObjects: after all insert requests original internalRequestIds do notmatch the current state. This most likely means that there was another update of the displayElements in themeantime. Skip update of mainDisplay with inserted displayElements and mark inserted displayelements for deletion.",
                    ),
                    void this.markDisplayElementsForDeletion(
                      e.map((e, t) =>
                        Object.assign(Object.assign({}, e.displayElement), {
                          id: n[t].id,
                        }),
                      ),
                    ));
              })
              .catch((e) => {
                this.logger.error("Could not update visible items: ", e);
              });
          }
          markDisplayElementsForDeletion(t) {
            (this.logger.info(
              "markDisplayElementsForDeletion: marking displayElements for deletion: ",
              t,
            ),
              this.displayElementsMarkedForDeletion.push(...t),
              this.displayElementsMarkedForDeletion.length >
                e.MAX_MARKED_DISPLAYELEMENTS &&
                (this.logger.info(
                  `markDisplayElementsForDeletion: more than ${e.MAX_MARKED_DISPLAYELEMENTS} displayElements already marked for deletion. Trigger intermediate cleanup`,
                ),
                this.deleteMarkedDisplayElements()));
          }
          markContextDisplayElementsForDeletion(e) {
            const t = this.displayStates
              .get(e)
              .displayElements.map(({ displayElement: e }) => e)
              .filter(Object(r.yd)("id"));
            t.length > 0
              ? (this.logger.info(
                  `markContextDisplayElementsForDeletion: context ${e} has display elements.`,
                ),
                this.markDisplayElementsForDeletion(t))
              : this.logger.info(
                  `markContextDisplayElementsForDeletion: not marking any displayElements for deletion. Context ${e} either has no displayElements or they are still being inserted in the RSI: `,
                  t,
                );
          }
          deleteMarkedDisplayElements() {
            if (0 === this.displayElementsMarkedForDeletion.length)
              return void this.logger.info(
                "deleteMarkedDisplayElements: no elements currently marked for deletion, skipping.",
              );
            this.logger.info(
              "deleteMarkedDisplayElements: delete all displayelements marked for deletion: ",
              this.displayElementsMarkedForDeletion,
            );
            const e = this.displayElementsMarkedForDeletion;
            this.displayElementsMarkedForDeletion = [];
            const t = e.map((e) => e.id);
            Object(r.od)(() => {
              Object(c.a)(
                t.map((e) =>
                  this.perceivableContextRsiClient.displayelements.deleteDisplayelementObject(
                    e,
                  ),
                ),
              )
                .toPromise()
                .then(() => {
                  this.logger.info(
                    "deleteMarkedDisplayElements: deleted displayElements with ids: ",
                    t,
                  );
                })
                .catch((e) =>
                  this.logger.error(
                    `deleteMarkedDisplayElements: error trying to delete displayelements with ids ${t}: `,
                    e,
                  ),
                );
            });
          }
        }
        return (
          (e.MAX_MARKED_DISPLAYELEMENTS = 25),
          (e.ɵprov = w.bc({
            factory: function () {
              return new e(
                w.cc(o.a),
                w.cc(l.g),
                w.cc(v.a),
                w.cc(P.a),
                w.cc(S.a),
                w.cc(x.a),
              );
            },
            token: e,
            providedIn: "root",
          })),
          e
        );
      })();
    },
    jWDW: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return h;
        }));
      var i = n("kZht"),
        r = n("An66"),
        l = n("0qMr"),
        o =
          (n("K2sB"),
          n("84ht"),
          n("yNay"),
          n("R+4K"),
          n("1VvW"),
          n("bou3"),
          n("ZUXc"),
          n("1bQX"),
          i.wb({
            encapsulation: 0,
            styles: [
              [
                ".tl-button--edit-mode[_ngcontent-%COMP%]{width:231px}.list--edit-mode[_ngcontent-%COMP%]{height:351px}.operation-panel--edit-mode[_ngcontent-%COMP%]{height:110px}[_nghost-%COMP%]{display:flex;flex-direction:row-reverse;right:0;top:0;pointer-events:none;z-index:1020;color:red;font-size:12px;background-color:rgba(10,10,10,.5)}.debug-info[_ngcontent-%COMP%]{padding:5px 10px;max-width:400px}.debug-info[_ngcontent-%COMP%]:not(:last-child){border-left:1px solid rgba(255,0,0,.5)}.debug-info--extra-dark[_ngcontent-%COMP%]{background-color:rgba(10,10,10,.5)}.debug-info__text[_ngcontent-%COMP%]{margin:0;padding:2px 0}.debug-info__text--linebreak[_ngcontent-%COMP%]{white-space:pre}",
              ],
            ],
            data: {},
          }));
      function a(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "p",
              [["class", "debug-info__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.Xb(1, null, [" ", ": ", " "])),
          ],
          null,
          function (e, t) {
            e(t, 1, 0, t.context.$implicit.name, t.context.$implicit.text);
          },
        );
      }
      function s(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "p",
              [["class", "debug-info__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.Xb(1, null, ["Used CPU cores: ", ""])),
          ],
          null,
          function (e, t) {
            e(t, 1, 0, t.component.cpuCores);
          },
        );
      }
      function u(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "p",
              [["class", "debug-info__text debug-info__text--linebreak"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.Xb(1, null, ["visible Popups: ", ""])),
          ],
          null,
          function (e, t) {
            e(t, 1, 0, t.component.visiblePopups);
          },
        );
      }
      function c(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "p",
              [["class", "debug-info__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.Xb(1, null, ["SDS PopupID: ", ""])),
          ],
          null,
          function (e, t) {
            e(t, 1, 0, t.component.currentSdsPopupId);
          },
        );
      }
      function d(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "p",
              [["class", "debug-info__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.Xb(1, null, ["Time since last S2R: ", ""])),
          ],
          null,
          function (e, t) {
            e(t, 1, 0, t.component.timeSinceLastS2R);
          },
        );
      }
      function p(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              1,
              "p",
              [["class", "debug-info__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.Xb(1, null, [" ", ": ", "ms"])),
          ],
          null,
          function (e, t) {
            e(
              t,
              1,
              0,
              null == t.context.$implicit ? null : t.context.$implicit.message,
              null == t.context.$implicit
                ? null
                : t.context.$implicit.timestamp,
            );
          },
        );
      }
      function g(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              9,
              "div",
              [["class", "debug-info debug-info--extra-dark"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              1,
              0,
              null,
              null,
              1,
              "p",
              [["class", "debug-info__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.Xb(2, null, ["S2R Counter: ", ""])),
            (e()(), i.hb(16777216, null, null, 1, null, d)),
            i.xb(
              4,
              16384,
              null,
              0,
              r.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            i.yb(
              5,
              0,
              null,
              null,
              0,
              "p",
              [["class", "debug-info__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              6,
              0,
              null,
              null,
              1,
              "p",
              [["class", "debug-info__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.Xb(-1, null, ["UI startup times"])),
            (e()(), i.hb(16777216, null, null, 1, null, p)),
            i.xb(
              9,
              278528,
              null,
              0,
              r.j,
              [i.P, i.L, i.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
          ],
          function (e, t) {
            var n = t.component;
            (e(t, 4, 0, t.context.mib3Let > 0), e(t, 9, 0, n.startupTimes));
          },
          function (e, t) {
            e(t, 2, 0, t.context.mib3Let);
          },
        );
      }
      function h(e) {
        return i.ac(
          0,
          [
            (e()(),
            i.yb(
              0,
              0,
              null,
              null,
              5,
              "div",
              [["class", "debug-info debug-info--extra-dark"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.hb(16777216, null, null, 2, null, a)),
            i.xb(
              2,
              278528,
              null,
              0,
              r.j,
              [i.P, i.L, i.s],
              { ngForOf: [0, "ngForOf"] },
              null,
            ),
            i.Pb(131072, r.b, [i.h]),
            (e()(), i.hb(16777216, null, null, 1, null, s)),
            i.xb(
              5,
              16384,
              null,
              0,
              r.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            i.yb(
              6,
              0,
              null,
              null,
              8,
              "div",
              [["class", "debug-info"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              7,
              0,
              null,
              null,
              1,
              "p",
              [["class", "debug-info__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.Xb(8, null, ["Route: ", ""])),
            (e()(),
            i.yb(
              9,
              0,
              null,
              null,
              1,
              "p",
              [["class", "debug-info__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.Xb(10, null, ["Screen: ", ""])),
            (e()(), i.hb(16777216, null, null, 1, null, u)),
            i.xb(
              12,
              16384,
              null,
              0,
              r.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(), i.hb(16777216, null, null, 1, null, c)),
            i.xb(
              14,
              16384,
              null,
              0,
              r.k,
              [i.P, i.L],
              { ngIf: [0, "ngIf"] },
              null,
            ),
            (e()(),
            i.yb(
              15,
              0,
              null,
              null,
              14,
              "div",
              [["class", "debug-info"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              16,
              0,
              null,
              null,
              1,
              "p",
              [["class", "debug-info__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.Xb(17, null, ["Chrome Version: ", ""])),
            (e()(),
            i.yb(
              18,
              0,
              null,
              null,
              1,
              "p",
              [["class", "debug-info__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.Xb(19, null, ["UI Version: ", ""])),
            (e()(),
            i.yb(
              20,
              0,
              null,
              null,
              1,
              "p",
              [["class", "debug-info__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.Xb(21, null, ["FW Version: ", ""])),
            (e()(),
            i.yb(
              22,
              0,
              null,
              null,
              1,
              "p",
              [["class", "debug-info__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.Xb(23, null, ["Angular Version: ", ""])),
            (e()(),
            i.yb(
              24,
              0,
              null,
              null,
              1,
              "p",
              [["class", "debug-info__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.Xb(25, null, ["Angular Animations Version: ", ""])),
            (e()(),
            i.yb(
              26,
              0,
              null,
              null,
              1,
              "p",
              [["class", "debug-info__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.Xb(27, null, ["TT Version: ", ""])),
            (e()(),
            i.yb(
              28,
              0,
              null,
              null,
              1,
              "p",
              [["class", "debug-info__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.Xb(29, null, ["Assets Version: ", ""])),
            (e()(),
            i.yb(
              30,
              0,
              null,
              null,
              6,
              "div",
              [["class", "debug-info"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(),
            i.yb(
              31,
              0,
              null,
              null,
              1,
              "p",
              [["class", "debug-info__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.Xb(32, null, ["jsHeapSizeLimit: ", ""])),
            (e()(),
            i.yb(
              33,
              0,
              null,
              null,
              1,
              "p",
              [["class", "debug-info__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.Xb(34, null, ["totalJSHeapSize: ", ""])),
            (e()(),
            i.yb(
              35,
              0,
              null,
              null,
              1,
              "p",
              [["class", "debug-info__text"]],
              null,
              null,
              null,
              null,
              null,
            )),
            (e()(), i.Xb(36, null, ["usedJSHeapSize: ", ""])),
            (e()(), i.hb(16777216, null, null, 2, null, g)),
            i.xb(
              38,
              16384,
              null,
              0,
              l.a,
              [i.L, i.P],
              { mib3Let: [0, "mib3Let"] },
              null,
            ),
            i.Pb(131072, r.b, [i.h]),
          ],
          function (e, t) {
            var n = t.component;
            (e(
              t,
              2,
              0,
              i.Yb(t, 2, 0, i.Nb(t, 3).transform(n.osdDisplayables$)),
            ),
              e(t, 5, 0, !n.pcSim),
              e(t, 12, 0, n.visiblePopups),
              e(t, 14, 0, null != n.currentSdsPopupId),
              e(
                t,
                38,
                0,
                i.Yb(
                  t,
                  38,
                  0,
                  i.Nb(t, 39).transform(n.debuggingService.s2rCounter$$),
                ),
              ));
          },
          function (e, t) {
            var n = t.component;
            (e(t, 8, 0, n.currentRoute),
              e(t, 10, 0, n.currentScreen),
              e(t, 17, 0, n.chromeVersion),
              e(t, 19, 0, n.uiVersion),
              e(t, 21, 0, n.fwVersion),
              e(t, 23, 0, n.angularVersion),
              e(t, 25, 0, n.angularAnimationsVersion),
              e(t, 27, 0, n.ttVersion),
              e(t, 29, 0, n.assetsVersion),
              e(t, 32, 0, n.jsHeapSizeLimit),
              e(t, 34, 0, n.totalJSHeapSize),
              e(t, 36, 0, n.usedJSHeapSize));
          },
        );
      }
    },
    nMmM: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var i = n("bkj4"),
        r = n("Yi6/");
      function l(e, t, n) {
        let l;
        switch (n) {
          case i.d.CNY:
            l = r.vc.CURRENCY_CNY;
            break;
          case i.d.EUR:
            l = r.vc.CURRENCY_EUR;
            break;
          case i.d.GBP:
            l = r.vc.CURRENCY_GBP;
            break;
          case i.d.JPY:
            l = r.vc.CURRENCY_JPY;
            break;
          case i.d.KRW:
            l = r.vc.CURRENCY_KRW;
            break;
          case i.d.TWD:
            l = r.vc.CURRENCY_TWD;
            break;
          case i.d.USD:
            l = r.vc.CURRENCY_USD;
            break;
          default:
            (e.error(
              `getTollCost: cannot map currency unit ${n} to a unit from UnitsService`,
            ),
              (l = r.vc.CURRENCY_EUR));
        }
        return { value: "" + t, unit: l };
      }
    },
    zcBZ: function (e, t, n) {
      "use strict";
      var i = n("7wm6");
      (n.d(t, "a", function () {
        return i.a;
      }),
        n.d(t, "b", function () {
          return i.b;
        }),
        n.d(t, "c", function () {
          return i.c;
        }),
        n.d(t, "d", function () {
          return i.e;
        }),
        n.d(t, "e", function () {
          return i.f;
        }),
        n.d(t, "f", function () {
          return i.g;
        }),
        n("LYHs"),
        n("RPSR"),
        n("BqeB"),
        n("rrFM"));
    },
  },
]);
