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
                { name: 'Start', url: '/start', navigationTrigger: 'default:start' },
                { name: 'Hello', url: '/hello/Name', navigationTrigger: ['default:hello', 'Name'] },
                { name: 'MasterDetail', url: '/masterdetail', navigationTrigger: 'masterdetail:start' },
                { name: 'Notifications', url: '/demo', navigationTrigger: 'demo:demo' }
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
