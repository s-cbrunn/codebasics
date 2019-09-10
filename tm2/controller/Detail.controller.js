sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/Dialog",
	"sap/m/List",
	"sap/m/StandardListItem",
	"sap/m/Button",
	"sap/m/Table",
	"sap/m/ObjectIdentifier",
	"sap/m/MessageBox"
], function(Controller, JSONModel, Dialog, List, StandardListItem, Button, Table, ObjectIdentifier, MessageBox) {
	"use strict";

	return Controller.extend("de.brunner.tm.controller.Detail", {

		onInit: function () {
			var me = this;
			var oRouter = sap.ui.core.UIComponent.getRouterFor(me);
			oRouter.getRoute("detail").attachPatternMatched(me._loadNavObjects, me);
			me.recipeSteps = 0;
			me.recipeList = 0;

			var oPanelRight = me.getView().byId("idStepGroup");
			oPanelRight.onAfterRendering = function() {
				if (sap.m.Panel.prototype.onAfterRendering) {
          			sap.m.Panel.prototype.onAfterRendering.apply(this, arguments);
        		}

				me.recipeSteps = 0;
			};

			var oPanelLeft = me.getView().byId("idRecipeList");
			oPanelLeft.onAfterRendering = function() {
				me.recipeList = 0;
			}

		},

		_loadNavObjects: function (oEvent) {
			var me = this;
			var oModel = new JSONModel();
			me.oData = sap.ui.getCore().getModel("detailRecipe");   
			oModel.setData(me.oData);
			me.getView().setModel(oModel, "recipes");

			var oPage = me.getView().byId("idPage");

			oPage.setTitle(me.oData.name);

			console.log(me.oData);
		},

		onBack : function(oEvent){
			var me = this;
			me.getOwnerComponent().getRouter().navTo("main");
		},

		preparation1: function(oObject){
			var me = this;
			if(me.recipeSteps < oObject.length){
				if(oObject[me.recipeSteps].name !== undefined){
					var index = me.recipeSteps;
					me.recipeSteps++;
					return oObject[index].name;
				}else{
					me.recipeSteps=0;
					return "";
				}
			}
		},

		preparation2: function(oObject){
			var me = this;
			if(me.recipeList < oObject.length){
				if(oObject[me.recipeList].name !== undefined){
					var index = me.recipeList;
					me.recipeList++;
					return oObject[index].name;
				}else{
					me.recipeList=0;
					return "";
				}
			}
		},

		onDialogPress: function () {
			var me = this;

			if(me.oData.tipps !== ""){
				MessageBox.alert(me.oData.tipps, {
					icon: MessageBox.Icon.INFORMATION,
					title: "Tipps & Tricks"
				});
			}else{
				MessageBox.alert("Keine Tipps & Tricks vorhanden", {
					icon: MessageBox.Icon.INFORMATION,
					title: "Tipps & Tricks",
				});
			}
		},

		quantity: function(obj){
			var sQuantity = "";
			if(obj.quantity.value !== undefined && obj.quantity.value !== 0){
				sQuantity += obj.quantity.value;
			}else if(obj.quantity.from !== undefined && obj.quantity.to !== undefined){
				sQuantity = obj.quantity.from + " - " + obj.quantity.to;
			}

			if(obj.recipeIngredientUnits.length > 0){
				if(obj.recipeIngredientUnits[0].notation !== undefined){
					sQuantity += " " + obj.recipeIngredientUnits[0].notation
				}
			}
			if(obj.ingredient.name === undefined){
				sQuantity += " " + obj.notation;
			}else{
				sQuantity += " " + obj.ingredient.name;
			}
				
			if(obj.optional === true){
				sQuantity += " (optional)";
			}
				return sQuantity;
		}

	});
});