define(['application', 'backbone.picky'], function (App) {
    App.module('Entities', function (Entities, App, Backbone) {
        Entities.Header = Backbone.Model.extend({
            initialize: function () {
                var selectable = new Backbone.Picky.Selectable(this);
                _.extend(this, selectable);
            }
        });

        Entities.HeaderCollection = Backbone.Collection.extend({
            model: Entities.Header,

            initialize: function () {
                var singleSelect = new Backbone.Picky.SingleSelect(this);
                _.extend(this, singleSelect);
            }
        });

        var initializeHeaders = function () {
            Entities.headers = new Entities.HeaderCollection([
                { name: 'Home', icon: 'home', url: '/start', navigationTrigger: 'default:start' },
                { name: 'API-Accounts', icon: 'inbox', url: '/police', navigationTrigger: 'default:police' },
                { name: 'Music-Playlists', icon: 'bar-chart-o', url: '/playlists', navigationTrigger: 'default:playlists' },
                { name: 'Administration', icon: 'desktop', url: '/demo', navigationTrigger: 'demo:demo' }
            ]);
        };

        var API = {
            getHeaders: function () {
                if (Entities.headers === undefined) {
                    initializeHeaders();
                }
                return Entities.headers;
            }
        };

        App.reqres.setHandler('header:entities', function () {
            return API.getHeaders();
        });
    });

    return;
});
