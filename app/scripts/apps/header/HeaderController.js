define(['application', 'apps/header/HeaderView', 'underscore'], function (App, View, _) {
    return {
        listCustomers: function () {
            require(['entities/header'], function () {
               var headerView = new View.Header();
                App.headerRegion.show(headerView);
            });
        },

       
    };
});
