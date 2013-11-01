define(['application', 'apps/header/HeaderView'], function (App, View) {
    return {
        listHeader: function () {
            require(['entities/header'], function () {
                var links = App.request('header:entities');
                var headers = new View.Headers({collection: links});

                headers.on('brand:clicked', function () {
                    App.trigger('default:start');
                });

                headers.on('itemview:navigate', function (childView, model) {
                    var trigger = model.get('navigationTrigger');
                    App.trigger(trigger);
                });

                App.headerRegion.show(headers);
            });
        },

        setActiveHeader: function (headerUrl) {
            var links = App.request('header:entities');
            var headerToSelect = links.find(function (header) {
                return header.get('url') === headerUrl;
            });
            headerToSelect.select();
            links.trigger('reset');
        }
    };
});