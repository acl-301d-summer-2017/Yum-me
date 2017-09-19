'use strict';
var app = app || {};

page('/', app.homeControl.init);
page('/grid', app.gridControl.init);
page('/settings', app.settingsControl.init);


page();