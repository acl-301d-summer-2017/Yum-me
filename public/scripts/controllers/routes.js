'use strict';
var app = app || {};

page('/', app.homeControl.init);
page('/home', app.homeControl.display);
page('/grid', app.gridControl.display);
page('/settings', app.settingsControl.display);


page();


