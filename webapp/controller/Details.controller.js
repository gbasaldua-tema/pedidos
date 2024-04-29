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

        return Controller.extend("com.tema.pedidos.controller.Details", {
            onInit: function () {
                var oRouter = UIComponent.getRouterFor(this);

                //   Se actualizan los datos de la lista de pedidos
				oRouter.getRoute("Details").attachPatternMatched(this.onRouteMatched, this);
            },

            onRouteMatched: function (oEvent) {
                const pedido = oEvent.getParameter("arguments").NumeroPedido;

                this.numeroPedido = pedido;

                var sPath = this.getView().getModel().createKey("PedidoCabeceraSet", {
                    NumeroPedido: pedido
                });

                this.getView().bindElement("/"+sPath);
            }
        });
    });
