sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "com/tema/pedidos/model/models"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, UIComponent, Model) {
        "use strict";

        return Controller.extend("com.tema.pedidos.controller.Home", {
            onInit: function () {
                var oRouter = UIComponent.getRouterFor(this);

                //   Se actualizan los datos de la lista de pedidos
				oRouter.getRoute("RouteHome").attachPatternMatched(this.onRouteMatched, this);
            },

            onRouteMatched: function (oEvent) {
                //   Se obtiene y carga la información de la vista
				this.getViewData();
            },

            getViewData: function (){
                const uriPOrdersSet = this.getOwnerComponent().getModel().sServiceUrl + '/PedidoCabeceraSet';
                const oModelPOrders = Model.createPOrdersModel(uriPOrdersSet);

                //   Se actualiza el modelo de pedidos
				this.getView().setModel(oModelPOrders, 'porderList');
            },

            onPressItem: function (oEvent) {
                var oRouter = UIComponent.getRouterFor(this);
				var oItem = oEvent.getSource();

                oRouter.navTo("Details", {
					NumeroPedido: oItem.getBindingContext('porderList').getObject().NumeroPedido
				});
            }
        });
    });
