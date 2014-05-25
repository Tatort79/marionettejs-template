define(['application',
    'backbone',
    'bsPopover',
    'hbs!apps/header/templates/headerLayout'],
    function (App, Backbone, bootstrapDownDown, headerLayoutTpl) {
        var views = {};

        views.Header = Backbone.Marionette.ItemView.extend({
            template: headerLayoutTpl,
            tagName: 'header',
            id: 'header',

            events: {
                'click a': 'navigate'
            },
        });

        return views;
    });
