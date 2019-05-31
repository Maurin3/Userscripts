// ==UserScript==
// @name         Odoo Admin Auto Connect
// @icon         http://raw.githubusercontent.com/Maurin3/userscripts/master/images/aac.png
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Auto connect as admin in runbots of odoo.com (and local instance)
// @author       Maurin3
// @include      https://*.runbot*.odoo.com/web/login
// @include      (http|https)://([0-9]{6})-([a-z0-9]{2})-0-([a-z0-9]{6})\.runbot([0-9]{2})\.odoo\.com/web/login
// @include      http://localhost:8069/web/login
// @downloadURL  https://raw.githubusercontent.com/Maurin3/userscripts/master/odoo-admin-auto-connect.user.js
// @updateURL    https://raw.githubusercontent.com/Maurin3/userscripts/master/odoo-admin-auto-connect.user.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

//Doesn't work on runbots --> must find the correct regex

(function() {
    'use strict';

    //I admitted that admin login/password is admin/admin   
    let login = document.getElementById("login");
    let password = document.getElementById("password");

    login.value = 'admin';
    password.value = 'admin';

    //I admitted there is only one form on this page
    let form = document.forms[0];

    form.submit();
})();