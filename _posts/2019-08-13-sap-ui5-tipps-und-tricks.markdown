---
title:  "SAP UI5 - Tipps & Tricks"
date:   2019-08-13 11:11:00
categories: [SAP]
tags: [SAP, UI5]
---

### Verzeichnis
<br>

#### [UI5 debug mode aktivieren](#debug_mode)
#### [UI5 Releasezyklen](#releasezyklen)
#### [UI5 Version im SAP-System ermitteln](#versionui5)
#### [SAPUI5-Bibliothek vom lokalen ABAP-Server für eine eigenständige Fiori-App ohne Launchpad laden](#ui5libload)
#### [UI5 Maintenance Status](#ui5versionsupport)


***
<br>


#### **UI5 debug mode aktivieren** <a name="debug_mode"></a>
Bei der Minifizierung der UI5-Ressourcen wird der komplette Javascript-Code in der Datei *Component-preload.js* abgelegt. In dieser Datei ist der Code sehr schwer lesbar bzw. lässt sich kaum debuggen. Damit auf produktiven Umgebungen sich der UI5-Code debuggen lässt, kann man mit dem folgenden Shortcut die UI5-Ressourcen in lesbarer Form nachladen, sodass auch ein ordentliches debuggen wieder möglich ist.

Str + Alt + Shift + S &rarr; Diagnostics &rarr; Technical Information &rarr; Debug Sources "ON"

![Diagnostics](/knowledgevault/images/screenshot/ui5_diagnostics.PNG "UI5 Diagnostics")


<br>
<br>

#### **UI5 Releasezyklen** <a name="releasezyklen"></a>
Eine typische Versionsnummer für ein SAPUI5-Release kann wie folgt aussehen:<br>
SAPUI5-Version **1.32**.*9* <br>

Die **fett** hervorgehobenen Zeichen geben die Hauptversionsnummer an, während die kursiv gekennzeichneten Zeichen für die aktuelle Patchversion stehen. Alle geradzahligen Releases sind externe Releases, die für SAP-Kunden und Partner zur Verfügung stehen. Die ungeraden Zahlen stehen für interne Releases, die der Öffentlichkeit nicht zur Verfügung stehen 

<br>
<br>

#### **UI5 Version im SAP-System ermitteln** <a name="versionui5"></a>
Für die Ermittlung der UI5 Version im SAP Backend System gibt es mehrere Möglichkeiten. Ist bereits ein Fiori Launchpad konfiguriert, so kann mit dem Shortcut Ctrl+Shift+Alt+P ein kleines Info-Fenster über die vorhandene UI5 Version geöffnet werden <br>

Auch über die URL *host*:*port*/sap/public/bc/ui5_ui5/index.html kann die UI5 Version bestimmt werden <br>

Weitere Tipps gibt es im SAP Hinweis 2363155 

<br>
<br>

#### **SAPUI5-Bibliothek vom lokalen ABAP-Server für eine eigenständige Fiori-App laden (ohne Launchpad)** <a name="ui5libload"></a>

 Um eine eigene Fiori-App auf dem ABAP-Server im Standalone-Modus zu starten ohne das Fiori Launchpad zu verwenden, muss eine index.html Datei mit den folgenden Coding angelegt werden.

```
<script id="sap-ui-bootstrap"
type="text/javascript"
src="/sap/public/bc/ui5_ui5/1/resources/sap-ui-core.js"
data-sap-ui-theme="sap_goldreflection"
data-sap-ui-libs="sap.ui.commons"> oder "...sap.m"
</script>
```

Siehe auch SAP Hinweis 2669705

<br>
<br>

#### **UI5 Maintenance Status** <a name="ui5versionsupport"></a>

Wann und in welcher UI-Komponenten Version welche UI5-Version unterstütz wird, lässt sich auf den folgenden Seiten ermitteln 

* <https://sapui5.hana.ondemand.com/versionoverview.html>

* <https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/schedules-for-maintenance-deliveries/SAP_UI-schedule.html>