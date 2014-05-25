define(['application', 'apps/default/DefaultView'], function (App, View) {
    return {
        showStart: function () {
            var view = new View.Start({});
            view.on('dialog:show', function () {
                var dialog = new View.Dialog({});
                App.dialogRegion.show(dialog);
            });
            App.mainRegion.show(view);
        },

        showPlaylists: function (name) {
            require(['entities/default'], function () {
                var fetchEntity = App.request('test:hello', name);
                var view = new View.Hello();
                App.mainRegion.show(view);
                
            });
        },

        showPolice: function (name) {
            var view = new View.Police();
            App.mainRegion.show(view);
           
        }
    };
});

