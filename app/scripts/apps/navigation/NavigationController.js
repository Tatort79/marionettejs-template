define(['application', 'apps/navigation/NavigationView', 'underscore'], function (App, View, _) {
    return {
        listNavigation: function () {
            require(['entities/header'], function () {
                var links = App.request('header:entities');
                var navigationView = new View.Navigation({collection: links});

                navigationView.on('itemview:navigate', function (childView, model) {
                    var trigger = model.get('navigationTrigger');

                    if (!_.isArray(trigger)) {
                        trigger = [trigger];
                    }

                    App.trigger.apply(App, trigger);
                });

                App.navigationRegion.show(navigationView);
            });
        },

        setActiveNavigation: function (headerUrl) {
            var links = App.request('header:entities');
            var headerToSelect = links.find(function (header) {
                return header.get('url') === headerUrl;
            });
            headerToSelect.select();
            links.trigger('reset');
        }
    };
});
