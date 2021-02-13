---
title:  "SAP UI5 Journey Teil 3 - MVC Pattern"
date:   2020-04-04 22:11:00
categories: [SAP]
tags: [SAP, UI5]
---


# Aufbau von MVC-Anwendungen

MVC ist ein Softwarearchitektur-Muster, das Anwendungen in drei miteinander verbundene Teile unterteilt: Model, View und Controller


* **Model** - enthält alle Anwendungsdaten
* **View** - stellt die Andwendungsdaten und die Benutzeroberflächen dar
* **Controller** - steuert die Anwendungsdaten und die Benutzerinteraktion 

### Struktur 

Jede UI5-Applikation sollte die folgende Struktur besitzen 

    myUI5App
     |
     | index.html
     +---webapp
         |   Component.js
         |   manifest.json
         |
         +---controller
         |     Detail.controller.js
         |     Master.controller.js
         |
         +---i18n
         |     i18n.properties
         |
         +---service
         |     data.json
         |
         \---view
              App.view.xml
              Detail.view.xml
              Master.view.xml

Mit der Datei Component.js wird die gesamte Anwendung eingerichtet. Hierzu gehören auch die Konfiguration des Routings, die Erstellung von Modellen und die Instanziierung von Views. Informationen über das Routing und die betroffenen Modelle können in einer separaten Datei, manifest.json, die auch Anwendungsdeskriptor genannt wird, gespeichert werden. Im Anwendungsdeskriptor sind Informationen über die Anwendung wie Name, Version und Beschreibung, die verwendeten SAPUI5-Bibiotheken, die verschiedenen verwendeten Modelle und der Speicherort der Daten, die Routinginformationen usw. enthalten.



### Views

In SAPUI5 können unterschiedliche Typen von Views erstellt werden. Diese können über JavaScript-Code oder deklarativ mit XML, JSON, oder HTML definiert werden. Der von SAP am häufigsten verwendete View ist der XML-View. Der am zweithäufigsten verwendete View ist der JavaScript-View.

Dateinamenskonvention für unterschiedliche Typen von Views

|View-Typen       |Dateiendung | 
|-----------------|------------|
|JavaScript-View  |.view.js          
|XML-View         |.view.xml
|HTML-View        |.view.html
|JSON-View        |.view.json


### Package-Konzept

SAPUI5 konzentriert sich primär auf den AMD-Einsatz. UI5 hat hierzu eine spezielle Syntax. Die Basissyntax von sap.ui.define lautet wie folgt:

sap.ui.define(sModuleName?, aDependencies?, vFactory, bExport?)

Beispiel:

```
 sap.ui.define([
     "sap/ui/core/mvc/Controller"
 ], function(Controller) {}
```

Konvention zum Laden von Modulen:

* Verwende sap.ui.define, um einen globalen Namensraum für die Module zu definieren und abhängige Module zu laden

* Verwende sap.ui.require, um abhängige Module ohne Deklaration eines globalen Namensraum zu laden

* Es müssen keine Dateiendungen .js bereitgestellt werden. Dies erfolgt automatisch.

* Benenne den Funktionsparameter wie das Artefakt (z.B. Controller) und nicht wie den Namensraum sap.ui.core.mvc.Controller.

* mit ./ kann sich auf das aktuelle Verzeichnis bezogen werden

* Die Reihenfolge der geladenen Module in der Reihenfolge der Abhängigkeiten ist nicht garantiert

* Wenn in der Anwendung eine synchrone Moduldefiniton bzw. ein synchrones Laden der Abhängigkeit sichergestellt werden muss, muss jQuery.sap.declare oder jQuery.sap.require verwendet werden.
