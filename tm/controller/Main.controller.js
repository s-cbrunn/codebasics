sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter"
], function(Controller, JSONModel, Filter) {
	"use strict";

	return Controller.extend("de.brunner.tm.controller.Main", {

		onInit: function () {
			var me = this;
			me.sKey = "allRecipes";
			me.oModel = new JSONModel();
			me.oModel.loadData("model/recipe.json")
			me.getView().setModel(me.oModel, "recipes");
		},

		onSearch : function (oEvent) {
			var me = this;
			var aFilters = [];
			var aFilter = [];
			if(oEvent.getParameters().clearButtonPressed){
				me.onSelectTab(oEvent);
			}else {

				var sQuery = oEvent.getSource().getValue();
				if (sQuery && sQuery.length > 2) {
					aFilters.push(new Filter("name", sap.ui.model.FilterOperator.Contains, sQuery));
					aFilter.push(new sap.ui.model.Filter(aFilters));
				}
			
				// update list binding
				var list = me.getView().byId("idRecipes");
				var binding = list.getBinding("items");
				binding.filter(aFilter, "Application");
			}
		},

		onSelectTab : function (oEvent){
			var me = this;
			var aFilters = [];
			var aFilter = [];
			if(oEvent.getParameter("key") !== undefined){
				me.sKey = oEvent.getParameter("key");
			} else if (me.sKey === undefined){
				me.sKey = "allRecipes";
			}
				
			
			if (me.sKey === "allRecipes" ){
				aFilter = [];
			} else if ( me.sKey === "" || me.sKey === undefined){
				aFilter = [];
			}else { // Filter
				var i=0;
				for (i = 0; i < 20; i++) {
  					aFilters.push(new Filter("categories/"+i+"/code", sap.ui.model.FilterOperator.EQ, me.sKey));
				}
				aFilters.push(new Filter("recipe/primaryCategory/code", sap.ui.model.FilterOperator.EQ, me.sKey));
				aFilter.push(new sap.ui.model.Filter({filters: aFilters, and:false}));
			} 

			// update list binding
			var list = this.getView().byId("idRecipes");
			var binding = list.getBinding("items");
			binding.filter(aFilter, "Application");
		},

		onDetail: function(oEvent){
			var me = this;

			var oModel = me.getView().getModel("recipes");
      	  	var sPath = oEvent.getSource().getBindingContext("recipes").getPath();
			var oRecipe = oModel.getProperty(sPath);

			sap.ui.getCore().setModel(oRecipe, "detailRecipe");  

			me.getOwnerComponent().getRouter().navTo("detail", { recipe:  oRecipe});
		},

		calcTime: function(time){
			var hours   = Math.floor(time / 3600);
    		var minutes = Math.floor((time - (hours * 3600)) / 60);
    		var seconds = time - (hours * 3600) - (minutes * 60);

			if(hours < 1){
				return minutes+'m'
			}else{
				return hours+'h '+minutes+'m';
			}

		},

		difficulty: function(diff){
			switch(diff){
				case "EASY":
					return "einfach"
				case "MEDIUM":
					return "mittel"
				case "ADVANCED":
					return "aufwendig"
				default:
					return diff;
			}
		}


	});
});