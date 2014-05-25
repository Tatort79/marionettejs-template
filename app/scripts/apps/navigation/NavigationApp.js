define(['application', 'apps/navigation/NavigationController'], function (App, NavigationController) {
    App.module('NavigationApp', function (NavigationApp) {
        var API = {
            listNavigation: function () {
                NavigationController.listNavigation();
            }
        };

        App.commands.setHandler('set:active:navigation', function (name) {
            NavigationController.setActiveNavigation(name);
        });

        NavigationApp.on('start', function () {
            API.listNavigation();
        });
    });

    return App.NavigationApp;
});
