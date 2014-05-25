define(['application', 'apps/header/HeaderController'], function (App, HeaderController) {
    App.module('HeaderApp', function (HeaderApp) {
        var API = {
            listCustomers: function () {
                HeaderController.listCustomers();
            }
        };

        App.commands.setHandler('set:active:customer', function (name) {
            HeaderController.setActiveCustomer(name);
        });

        HeaderApp.on('start', function () {
            API.listCustomers();
        });
    });

    return App.HeaderApp;
});
