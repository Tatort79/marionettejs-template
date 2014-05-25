require([
	'backbone',
    'backbone.marionette',
	'application',
    'apps/header/HeaderApp',
    'apps/navigation/NavigationApp',
    'apps/notification/NotificationApp'
],
function (Backbone, Marionette, App) {
    'use strict';

	App.start();
});
