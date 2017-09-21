'use strict';
var app = app || {};

page('/', app.homeControl.init);
page('/home', app.homeView.init);
page('/grid', app.gridControl.display);
page('/settings', app.settingsControl.display);


page();


