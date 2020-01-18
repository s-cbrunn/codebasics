---
title:  "ABAP Programming Model für SAP Fiori - Tipps & Tricks"
date:   2020-01-17 20:43:00
categories: [SAP]
tags: [SAP, UI5, ABAP]
---

*Hinweis: Ab der S/4 HANA 1909 heißt das Programmiermodell "ABAP-RESTful-Programmiermodell"*

### Verzeichnis
<br>

#### [Löschen eines CDS-generierten Business Objektes oder eines Knotens](#cdsbopfdelete)
#### [CDS-basierte Business Objekt-Generierung - Protokollierung (SLG1)](#cdsbopfslg1)

***
<br>


#### **Löschen eines CDS-generierten Business Objektes oder eines Knotens** <a name="cdsbopfdelete"></a>
BOPF-Objekte, welche aus CDS-Views generiert wurden, lassen sich nicht mehr ohne weiteres löschen. Wenn ein Knoten aus der transaktionalen CDS-View-Komposition gelöscht wird, so wird der Knoten nicht automatisch aus dem Business Objekt gelöscht. Der Knoten wird in einem 1. Schritt nur mit der Bescheibung '>>>DELETED [CDS BO SYNC]<<<' und einem Löschkennzeichen versehen. Der Benutzer muß dann in einem 2. Schritt den Knoten im Business Objekt-Editor (Eclipse oder Transaktion BOBX) löschen.

Details sind im SAP Hinweis 2443333 beschrieben


<br>
<br>

#### **CDS-basierte Business Objekt-Generierung - Protokollierung (SLG1)** <a name="cdsbopfslg1"></a>
CDS-basierte Business Objekte werden beim Generieren bzw. Synchronisieren im SLG1 protokolliert.

* Objekt: /BOBF/
* Subobjekt: CDS_BO_SYNC

Sollte das Log nicht vollständig oder fehlerhaft sein, dann könnte der SAP Hinweis 2678934 weiterhelfen

