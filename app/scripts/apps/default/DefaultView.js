define([
    'application',
    'backbone',
    'hbs!apps/default/templates/start',
    'hbs!apps/default/templates/dialog',
    'hbs!apps/default/templates/hello',
    'hbs!apps/default/templates/police'
], function (App, Backbone, startTpl, dialogTpl, helloTpl, policeTpl) {
    var views = { };

    views.Start = Backbone.Marionette.ItemView.extend({
        template: startTpl,
        triggers: {
            'click .open-dialog': 'dialog:show'
        }
    });

    views.Hello = Backbone.Marionette.ItemView.extend({
        template: helloTpl
    });

    views.Police = Backbone.Marionette.ItemView.extend({
        template: policeTpl
    });

    views.Dialog = Backbone.Marionette.ItemView.extend({
        template: dialogTpl,
        triggers: {
            'click .dialog-close': 'dialog:close'
        }
    });

    return views;
});
