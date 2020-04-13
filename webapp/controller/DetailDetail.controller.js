sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller"
], function(JSONModel, Controller){
	"use strict";
	return Controller.extend("sap.ui.demo.fiori2.controller.DetailDetail", {
		onInit: function(){
			var oOwerComponent = this.getOwnerComponent();
			this.oRouter = oOwerComponent.getRouter();
			this.oModel = oOwerComponent.getModel();
			this.oRouter.getRoute("detailDetail").attachPatternMatched(this._onPatternMatch, this);
		},
		
		_onPatternMatch: function(oEvent){
			this._supplier = oEvent.getParameter("arguments").supplier || this._supplier || "0";
			this._product = oEvent.getParameter("arguments").product || this._product || "0";
			
			this.getView().bindElement({
				path: "/ProductCollectionStats/Filter/1/values" + this._supplier,
				model: "products"
			});
		},
		
		onExit: function(){
			this.oRouter.getRoute("detailDetail").detachPatternMatched(this._onPatternMatch, this);
		}
	});
});