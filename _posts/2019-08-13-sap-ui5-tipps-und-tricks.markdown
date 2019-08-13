---
title:  "SAP UI5 - Tipps & Tricks"
date:   2019-08-13 11:11:00
categories: [SAP]
tags: [SAP, UI5]
---

### Verzeichnis
<br>

#### [UI5 debug mode aktivieren](#debug_mode)
***
<br>


#### **UI5 debug mode aktivieren** <a name="debug_mode"></a>
Bei der Minifizierung der UI5-Ressourcen wird der komplette Javascript-Code in der Datei *Component-preload.js* abgelegt. In dieser Datei ist der Code sehr schwer lesbar bzw. lässt sich kaum debuggen. Damit auf produktiven Umgebungen sich der UI5-Code debuggen lässt, kann man mit dem folgenden Shortcut die UI5-Ressourcen in lesbarer Form nachladen, sodass auch ein ordentliches debuggen wieder möglich ist.

Str + Alt + Shift + S &rarr; Diagnostics &rarr; Technical Information &rarr; Debug Sources "ON"

![Diagnostics](/knowledgevault/images/screenshot/ui5_diagnostics.PNG "UI5 Diagnostics")


