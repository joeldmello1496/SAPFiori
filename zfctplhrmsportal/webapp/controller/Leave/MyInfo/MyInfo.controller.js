sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/BusyIndicator"
], (Controller,MessageToast,BusyIndicator) => {
    "use strict";

    return Controller.extend("zfctplhrmsportal.controller.Leave.MyInfo.MyInfo", {
        onInit() {
           
        },

        onViewPress(){
            var sEmployee = this.byId("idEmployee").getValue();

            if(sEmployee){
                MessageToast.show("Please enter Employee ID");
                return;
            }
             
            var sPath = "/Orders(" +sEmployee+ ")";
            this.getView().bindElement({
                path: sPath,
                parameters: {
                    expand: "Order_Details"
                },
                events:{
                    dataRequested(){
                        BusyIndicator.show(0);
                    },
                    dataRecived(){
                        BusyIndicator.hide();
                    }
                }
            })
        },

        onResetPress(){
            this.byId("idEmployee").setValue();
            this.byId("idPeriod").setValue();
            this.byId("idLeaveType").setValue();

            this.getView().unbindElement();
        }
    });
});