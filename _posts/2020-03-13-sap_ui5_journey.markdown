---
title:  "SAP UI5 Journey Teil1 - Architektur"
date:   2020-03-13 21:26:00
categories: [SAP]
tags: [SAP, UI5]
---


Meine SAPUI5 Reise ist ledigleich eine Wissenssammlung d.h. für Anfänger kann es unter Umständen etwas schwer sein den Themen zu folgen. 

# Architektur

## Bibliotheken  

SAPUI5 ist in mehrere Bibliotheken organisiert. Die wichtigste Bibliothek ist **sap.ui.core**, nachfolgend *Core* genannt. Ohne den Core kann SAPUI5 nicht ausgeführt werden.

Der Prozess zum Land und Initialisieren von SAPUI5 wird Bootstrap genannt. 

Bei den SAPUI5-Bibliotheken können nicht alle Bibiotheken miteinander kombiniert werden bzw. wurde von SAP nicht getest und kann somit zu Problemen führen.

Folgende Bibliotheken können kombiniert werden
* sap.ui.comp
* sap.suite
* sap.m
* sap.ushell

Auch diese Bibliotheken können nur untereinander verwendet werden
* sap.ui.commmons
* sap.ui.richtexteditor
* sap.ui.suite
* sap.ui.ux3


Die folgenden Bibliotheken können mit allen UI5-Bibliothekn verwendet werden
* sap.ui.core
* sap.ui.ayout
* sap.ui.unified
* sap.ui.table
* sap.viz


## Lebenszyklus

Die Views werden vor den Controllern instanziiert. Der Lebenzyklus sieht wie folgt aus

1. View und Controls werden instanziiert
2. Controller wird geladen
3. onInit Mehtode im Controller wird aufgerufen
4. onBeforeRendering im Controller wird aufgerufen
5. View wird gerendert
6. onAfterRendering im Controller wird aufgerufen
7. onExit im Controller wird aufgerufen wenn der View geschlossen wird
8. View und Controller sind zerstört


## Klassenhierarchien

Die Basisklasse für alle Objekte innerhalb von SAPUI5 ist **sap.ui.base.Object**. Im Namensraum sap.ui.base gibt es andere Klassen, die ähnlich tief mit UI5 verwurzelt sind. Sogar sap.ui.core.Core wird von sap.ui.base.Object vererbt.

Namensraum der Vererbungshierachie (von oben nach unten)

1. sap.ui.base
2. sap.ui.core
3. sap.m





