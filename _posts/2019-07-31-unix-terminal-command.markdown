---
title:  "Unix Terminal Commands"
date:   2019-07-31 20:57:00
categories: [Unix]
tags: [Unix]
---

Unix commands

***

**ls** steht für list und zeigt den Inhalt eines Verzeichnisses bzw. Ordners an

```
 ls [OPTION] [VERZEICHNIS] 
```

| Option        | Beschreibung  | 
| ------------- |:-------------
| -A            | listet auch versteckte Dateien auf  
| -a            | listet auch versteckte Dateien und Verzeichniseinträge wie . und .. auf     |  
| -c            | Datum der letzten Änderung     
| -C            | Namen nebeneinander ausgeben (Standard)      
| -d            | Verzeichnisse und keine Inhalte anzeigen      
| -h            | gibt in Kombination mit -l die Größe in einem für Menschen besser lesbaren Format aus       
| -m            | Namen in einer Zeile ausgeben       
| -R            | Auch in Unterverzeichnisse absteigen     
| -l            | Datei-Informationen in Langform ausgeben      |  

---

**ln** steht für link und erzeugt eine Verknüpfung zu einer Datei oder einem Verzeichnis. 

```
ln [OPTION]... ZIEL [VERKNÜPFUNGSNAME] 
``` 

| Option        | Beschreibung  | 
| ------------- |:-------------
| -i            | fragt vor dem Überschreiben nach
| -s            | erzeugt eine symbolische Verknüpfung anstatt eines Hardlinks     |  
| -r            | erzeugt - auch bei Angabe absoluter Pfade - eine Verknüpfung mit relativen Pfaden zueinander (setzt -s voraus)
| -f            | vorhandene mit dem VERKNÜPFUNGSNAMEn gleichnamige Verknüpfungen oder auch Dateien überschreiben
    
