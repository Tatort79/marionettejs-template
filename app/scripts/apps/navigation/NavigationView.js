define(['application',
    'backbone',
    'hbs!apps/navigation/templates/navigation',
    'hbs!apps/navigation/templates/navigationItem'],
    function (App, Backbone, listTpl, listItemTpl) {
        var views = {};

        views.NavigationItem = Backbone.Marionette.ItemView.extend({
            template: listItemTpl,
            tagName: 'li',

            events: {
                'click a': 'navigate'
            },

            navigate: function (e) {
                e.preventDefault();
                this.trigger('navigate', this.model);
            },

            onRender: function () {
                console.log(this.model);
                if (this.model.selected) {
                    
                    // add class so Bootstrap will highlight the active entry in the navbar
                    this.$el.addClass('active');
                }
            }
        });

        views.Navigation = Backbone.Marionette.CompositeView.extend({
            template: listTpl,
            itemView: views.NavigationItem,
            itemViewContainer: 'ul',

           
        });
        return views;
    });
