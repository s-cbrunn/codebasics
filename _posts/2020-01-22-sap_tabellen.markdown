---
title:  "Allgemeine SAP Tabellen"
date:   2020-01-30 11:05:00
categories: [SAP]
tags: [SAP, ABAP]
---


### Verzeichnis
<br>

#### [Konstanten in Interfaces finden](#constinferface)
#### [Nachrichtenklasse und Nachrichtennummer ermitteln](#messages)

***
<br>


#### **Konstanten in Interfaces finden** <a name="constinferface"></a>

Möchte man Konstanten schnell in Interfaces auffinden, dann kann die Tabelle SEOCOMPODF weiterhelfen

1) SE16N mit der Tabelle SEOCOMPODF öffnen

2) Bei Objekttypname z.B. auf Kundennamensraum eingschränken und bei Initialwert den gesuchten Konstantenwert eingegben (Hochkomma berücksichtigen!)

![SEOCOMPODF](/knowledgevault/images/screenshot/SE16_SEOCOMPODF.PNG "Tabelle SEOCOMPODF")


3) Aus der Ergebnismenge kann das passende Konstanten-Interface ausgewählt werden

![Result](/knowledgevault/images/screenshot/message_type_se16n.PNG "Result SEOCOMPODF")
<br>
<br>

#### **Nachrichtenklasse und Nachrichtennummer ermitteln** <a name="messages"></a>

Um passende Nachrichten für eine Ausgabe im Programm zu finden oder die Nachrichtenklasse einer Meldung zu bestimmten, geht man häufig in die Transaktion SE16/SE16N und sucht innerhalb der Tabelle T100 innerhalb des Feldes TEXT mit einem Teilstring und *.

Hinweis: Im Feld TEXT wird Groß-/Kleinschreibung beachtet.

![T100](/knowledgevault/images/screenshot/SE16_T100.PNG "Tabelle T100")

![Result](/knowledgevault/images/screenshot/messages_se16.PNG "Result T100")

