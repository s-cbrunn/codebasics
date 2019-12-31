---
title:  "SAP S/4 HANA Grundlagen"
date:   2019-08-07 22:04:00
categories: [SAP]
tags: [SAP, ABAP, S/4HANA]
---

SAP S/4HANA ist die neueste und vierte Generation Unternehmenssoftware von SAP. Das System von SAP setzt ausschließlich auf die In-Memory-Plattform SAP HANA. Mit dieser Datenbank können nun auch analytische Szenarien auf Basis operativer Daten in Echzeit ausgeführt werden. 

Die S/4 folgt neben den Echtzeitanalysen auch dem "Principle of One" Ansatz. In den vergangenen SAP ERP-Systemen wurden redundante Frameworks und Datenmodelle zugelassen, welche nun mit der S/4 HANA bereinigt werden. Anders als bei den vorherigen ERP-Systemen, existiert für ein Geschäftsobjekt lediglich ein Datenmodell. D.h. Tabellen mit aggregierten Daten werden in Zukunft wegfallen, da die Informationen während der Laufzeit in Sekunden berechnet werden können. Ein parade Beispiel dafür liefert der SAP Hinweis 2206980, welcher die Änderungen des Datenmodell für die Materialbestände beschreibt.

Die folgenden Punkte sind weitere charakteristische Merkmale der S/4 HANA, die im neuen ERP-System eine zentrale Rolle spielen werden

* Core Data Services (CDS), welche für das virtuelle Datenmodell benötigt werden
* OData-Services (REST)
* Fiori (UI5)
* SAP HANA


Neu ist auch, dass das SAP-System in der Cloud betrieben werden kann. SAP bietet hier verschiedene Bereitstellungsoptionen des ERP-Systems an. Grundsätzlich unterscheidet man zwischen On-Premise und Cloud Systemen. Welches Deployment-Szenario sich im konkreten Fall empfiehlt, ist eine Frage des Architekurmanagements. Die Codeline von S/4 HANA ist immer identisch. Lediglich das Lizenz-, Erweiterungs- und Betriebsmodell kann variieren. 

Hier eine kleine Aufstellung der verschiedenen Bereitstellungsoptionen

**On-Premise**

* S/4 HANA on premise - Managed by customer
    * Voller Funktionsumfang
    * Sämtiche Branchen werden unterstützt
    * Anpassbar und erweiterbar
    * Jährliche Releases; Kunden entscheiden über Upgrades
    * Upgrade-Aufwand entspricht dem einer On-Premise Lösung
    * Klassische Softwarelizenz
    * Läuft auf der kundeneigenen Infrastruktur

* S/4 HANA on premise - Managed by partner
    * Voller Funktionsumfang
    * Sämtliche Branchen werden unterstützt
    * Anpassbar und erweiterbar
    * Jährliche Releases; Kunde entscheidet über Upgrades
    * Upgrade-Aufwand entspricht dem einer On-Premise Lösung
    * Klassische Softwarelizenz
    * Läuft auf der Inftrastruktur eines Hosting-Partners

* S/4 HANA private managed cloud - Managed by SAP
    * Voller Funktionsumfang
    * Sämtliche Branchen werden unterstützt
    * Anpassbar und erweiterbar
    * Jährliche Releases; Kunden entscheiden über Upgrades
    * Upgrade-Aufwand entspricht dem einer On-Premise Lösung
    * Kundenspezifsiche Systemlandschaft
    * Läuft auf der SAP HANA Enterprise Cloud
    * SAP Managed Services auf Basis einer Private-Cloud Infrastruktur (SAP, AWS, Google oder Azure)

**Cloud ERP**

* S/4 HANA Cloud - single tenant 
    * Konfigurierbare und anpassbare Prozesse für FI, HR, Vertrieb und zahreiche weitere Geschäftsprozesse
    * S/4 HANA Extensibility Framework über die SAP Cloud Platform
    * Sämtliche Branchen werden unterstützt
    * Halbjährliche Releases; der Kunde entscheidet innerhab eines Zeitfensters von 12 Monaten über Upgrades

* S/4 HANA Cloud - multi tenant
    * Konfigurierbare Standardprozesse und Best Practise für FI, HR Beschaffung und Vertrieb
    * Erweiterungen über die SAP Cloud Platform 
    * Umfassende Branchenfunktionen für Dienstleister und Komponentenfertiger; weitere Branchen in Planung
    * Vierteljährliche Releases 



Bei den beiden Cloud-Varianten der S/4 HANA lässt 