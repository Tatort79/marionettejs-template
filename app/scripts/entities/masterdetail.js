define(['application', 'backbone.picky'], function (App) {
    App.module('Entities', function (Entities, App, Backbone) {
        Entities.MasterDetail = Backbone.Model.extend({
            urlRoot: '/api/masterdetail',
            initialize: function () {
                var selectable = new Backbone.Picky.Selectable(this);
                _.extend(this, selectable);
            }
        });

        Entities.MasterDetailCollection = Backbone.Collection.extend({
            model: Entities.MasterDetail,
            url: '/api/masterdetail',

            initialize: function () {
                var singleSelect = new Backbone.Picky.SingleSelect(this);
                _.extend(this, singleSelect);
            }
        });

        var API = {
            getEntities: function () {
                var entities = new Entities.MasterDetailCollection();
                var defer = $.Deferred();

                entities.fetch({
                    success: function(data){
                        defer.resolve(data);
                    }
                });

                return defer.promise();
            },
            getEntity: function (id) {
                var entity = new Entities.MasterDetail({id: id});
                var defer = $.Deferred();

                entity.fetch({
                    success: function(data){
                        defer.resolve(data);
                    }
                });

                return defer.promise();
            }
        };

        App.reqres.setHandler('masterdetail:entities', function () {
            return API.getEntities();
        });

        App.reqres.setHandler('masterdetail:entity', function (id) {
            return API.getEntity(id);
        });
    });

    return;
});