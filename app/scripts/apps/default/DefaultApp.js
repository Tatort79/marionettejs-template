define(['application', 'loglevel'], function (App, log) {
    App.module('DefaultApp', function (DefaultApp) {
        DefaultApp.startWithParent = false;

        DefaultApp.onStart = function () {
            log.debug('starting DefaultApp');
        };

        DefaultApp.onStop = function () {
            log.debug('stopping DefaultApp');
        };
    });

    App.module('Routers.DefaultApp', function (DefaultAppRouter, App, Backbone) {
        var executeAction = function (action, arg) {
            App.startSubApp('DefaultApp');
            action(arg);
        };

        DefaultAppRouter.Router = Backbone.Marionette.AppRouter.extend({
            appRoutes: {
                'start': 'showStart',
                'playlists': 'showPlaylists',
                'police': 'showPolice'
            }
        });

        var API = {
            showStart: function (criterion) {
                require(['apps/default/DefaultController'], function (DefaultController) {
                    App.execute('set:active:navigation', '/start');
                    executeAction(DefaultController.showStart, criterion);
                });
            },

            showPlaylists: function () {
                require(['apps/default/DefaultController'], function (DefaultController) {
                    App.execute('set:active:navigation', '/playlists');
                    executeAction(DefaultController.showPlaylists);
                });
            },

            showPolice: function () {
                require(['apps/default/DefaultController'], function (DefaultController) {
                    App.execute('set:active:navigation', '/police');
                    executeAction(DefaultController.showPolice);
                });
            }
        };

        App.on('default:start', function () {
            App.navigate('start');
            API.showStart();
        });

        App.on('default:playlists', function () {
            App.navigate('playlists');
            API.showPlaylists();
        });

        App.on('default:police', function () {
            App.navigate('police');
            API.showPolice();
        });

        App.addInitializer(function () {
            new DefaultAppRouter.Router({
                controller: API
            });
        });
    });

    return App.DefaultAppRouter;
});
