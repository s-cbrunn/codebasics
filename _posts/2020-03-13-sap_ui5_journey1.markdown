---
title:  "SAP UI5 Journey Teil 2 - Hello, SAPUI5 World"
date:   2020-03-13 22:20:00
categories: [SAP]
tags: [SAP, UI5]
---


# Let's start coding!

## Javascript-Namenskonventionen

|Namensbeispiel   |Datentyp   | 
|-----------------|-----------|
|sId              |String          
|oObject          |Objekt
|$DomRef          |jQuery-Objekt
|iCount           |Int
|mParameters      |map/assoc-Array
|aEntries         |Array
|dToday           |Datum
|fDecimal         |Float
|bEnabled         |Boolean
|rPattern         |RegExp
|fnFunction       |Funktion
|vVariant         |Variantentypen


## Bootstrapping in UI5

Der Bootstrap Code befindet sich im Anfangsabschnitt der HTML-Seite

```
<script 
        id="sap-ui-bootstrap"
        type="text/javascript"
        src="/sap/public/bc/ui5_ui5/1/resources/sap-ui-core.js"
        data-sap-ui-theme="sap_goldreflection"
        data-sap-ui-libs="sap.m">
</script>
``` 

* **src** zeigt der Anwendung, wo sich die SAPUI5 Bibliotheken befinden
* **data-sap-ui-theme** teilt SAPUI5 mit, welches Theme geladen werden soll
* **data-sap-ui-libs** teilt SAPUI5 mit, welche Bibliotheken geladen werden sollen


## Eine anonyme Funktion

Eine "anonyme Funktion" ist eine Funktion, die ohne Zuweisung zu einem benannten Bezeichner deklariert wird. Eine anonyme Funktion kann später nicht anhand ihres Namens aufgerufen werden, da sie keinen Namen besitzt. 


## Event-Handler 

Ein Event-Handler ist eine Funktion, die auf eine bestimmte Benutzeraktion reagiert z.B. auf das Anklicken eines Buttons. 

Jeder Event-Handler hat ein Ereignisobjekt (z.B. oEvent). Dieses Objekt enthält viele Informationen über das Ereignis (z.B. welchem Control es ausgelöst wurde). Mit dem folgenden Coding kann man die Ereignisquelle abfragen

```
 var oSrc = oEvent.getSource();
````

Das zurückgegebene Objekt ist wiederum ein Control, wo bestimmte Informationen zum ausgelösten Objekt endlich ermittelt werden können

```
 var sId = oSrc.getId();
```

## Komplexe Controls

### Aggregationen und Assoziationen 

#### Aggregation

Aggregationen sind Referenzen aus übergeordneten Controls auf untergeordnetet Controls. Sie verfügen über eine Kardinalität von 0:1 bzw. 0:n. Dies bedeutet, dass es Aggregationen gibt, die entweder nur ein untergeordnetes Control oder aber mehrere Controls beinhaltet. Ein untergeordnetes Control kann aber nie mehr als ein übergeordnetes Control besitzen. 

Ein RadioButtonGroup Control kann als Aggregation mehrere RadioButton-Controlss haben. Diese RadioButtons-Controls teilen sich den Lebenszyklus des übergeordneten Controls. Wenn z.B. das übergeordnete Control zerstört wird, erteilt die aggregierten Controls ebenfalls dieses Schicksal.

Es gibt verschieden Möglichkeiten, um Controls zu einer Aggregation hinzuzufügen. Alle Controls erben die Methode addAggregation von Managed-Object. In der Regel bieten die Controls aber typisierte Methoden für die Aggregationen. Bei RadioButtonGroup gibt es die Mehtode addButton.

Wenn die Kardinalität einer Aggregation mehrere aggregierte Controls erlaubt, heißt die Methode zum Hinzufügen von Controls zur Aggregation addAggregationName. Ist die Kardinalität allerdings nur 0:1, lautet der Name der Methode setAggregationName.

#### Assoziaton 

Ebenso wie Aggregationen sind Assoziationen Referenzen von einem Control zu einem anderen. Der Hauptunterschied zwischen Aggregationen und Assoziationen ist, dass assoziierte Controls nicht den Lebenszykus der übergeordneten Controls teilen.


## API der Controls

Alle Controls erben aus der Control-Basisklasse. Diese Klasse wiederum erbt von ManagedObject. Dies bedeutet, dass für jede Control-Eigenschaft eine Getter- und Setter-Methode aus diesem übergeordneten Control kommt. Die meisten Controls verfügen auch über typisierte Getter- und Setter-Methoden für ihre Eigenschaften.

```
 oImage.setProperty("src", "path-to-image");
 oImage.setSrc("path-to-image" );
```

Wird die typisierte Methode nicht im Control überschrieben, können beide Methoden mit gleicher Wirkung eingesetzt werden. Die typisierten Methoden sollten bevorzugt werden


## Layouts

Das GridLayout arbeitet mit einem Raster. Das Raster selbst hat ein zwölfspaltiges Layout, in dem alle Spalten gleichmäßig auf die Bildschirmbreite verteilt sind. Standardmäßig sieht die Konfiguration des Rasters vor, dass sich die Controls auf großen Bildschirmen über drei spalten, auf mittleren Bildschirmen über sechs Spalten und auf kleinen Smartphone-Bildschirmen über zwölf Spalten erstrecken dürfen.

Dieses Standardverhalten kann beeinflusst werden, indem die Konfiguration überschrieben und einen anderen Wert für die Eigenschaft "default-Span" gesetzt wird. "defaultSpan" ist eine String-Eigenschaft, die einen Wert nach einem bestimmten Muster erwartet 

"XL[a] L[b] M[c] S[d]"

[a],[b],[c] und [d] werden durch die Anzahl an Spalten ersetzt, über die sich die im Raster geschachtelten Controls erstrecken sollen.