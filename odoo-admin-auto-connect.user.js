// ==UserScript==
// @name         Odoo Admin Auto Connect
// @icon         http://github.com/Maurin3/Userscripts/blob/master/images/aac.png?raw=true
// @namespace    https://github.com/Maurin3
// @version      1.0
// @description  Auto connect as admin in runbots of odoo.com (and local instance)
// @author       Maurin3
// @include      /^http://[0-9]{6}\-(saas\-)?[0-9]{2}\-[0-9]+\-[a-z0-9]{6}\.runbot[0-9]{2}\.odoo\.com/web/login$/
// @match        http://localhost:8069/web/login
// @match        http://localhost/web/login
// @downloadURL  https://raw.githubusercontent.com/Maurin3/Userscripts/master/odoo-admin-auto-connect.user.js
// @updateURL    https://raw.githubusercontent.com/Maurin3/Userscripts/master/odoo-admin-auto-connect.user.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let errors = document.getElementsByClassName('alert-danger');

    //I admitted that admin login/password is admin/admin
    let login = document.getElementById("login");
    let password = document.getElementById("password");

    login.value = 'admin';
    password.value = 'admin';

    //I admitted there is only one form on this page
    let form = document.forms[0];

    //In case of wrong login/password : not submitting form
    if (errors.length == 0){
        form.submit();
    }
})();