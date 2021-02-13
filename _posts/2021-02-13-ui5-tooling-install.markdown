---
title:  "UI5 Tooling"
date:   2021-02-13 19:50:00
categories: [SAP]
tags: [node.js, UI5]
---


# UI5-Tooling Grundlagen

Mit dem UI5-Tooling ist es möglich lokal auf dem eigenen Rechner UI5-Anwendungen zu entwickeln. 

 * Voraussetzung ist eine Node.js Installation (>= Version 10)
<br>
<br>
<br>

## UI5-Tooling installieren
<br>

```
npm install --global @ui5/cli
```

### Aufsetzen eines UI-Projekts mit dem UI5-Tooling

* Verzeichnis anlegen, wo später alle UI5-Entwicklungen enthalten sind

* Innerhalb des Verzeichnis muss ein Ordner mit dem Namen "webapp" angelegt werden

* package.json erzeugen (siehe Codesnippet). Dies ist eine Art manifest-Datei im Projekt. Sie kann als zentrales Repository für die Konfiguration von Werkzeugen eingesetzt werden.

```
npm init --yes
```

* ui5.yaml Datei erzeugen (mit folgenden Befehl)

```
ui5 init
```

* manifest.json Datei innerhalb des Verzeichnis webapp anlegen

* UI5 Implementierung vornehmen

* UI5 Applikation mit dem folgenden npm Befehl im Projektordner (Root-Verzeichnis - nicht im webapp Verzeichnis!)

```
ui5 serve
```

* UI5-Applikation kann jetzt unter der Url http://localhost:8080 aufgerufen werden