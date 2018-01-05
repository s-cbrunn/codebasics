sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("de.brunner.tm.controller.Detail", {

		onInit: function () {
			var me = this;
			var oRouter = sap.ui.core.UIComponent.getRouterFor(me);
			oRouter.getRoute("detail").attachPatternMatched(me._loadNavObjects, me);
			me.recipeSteps = 0;
			me.recipeList = 0;
			debugger;

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
		}

	});
});