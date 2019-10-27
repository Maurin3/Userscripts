// ==UserScript==
// @name         Odoo Quick Connect
// @icon         http://github.com/Maurin3/Userscripts/blob/master/images/oqc.png?raw=true
// @namespace    https://github.com/Maurin3
// @version      1.0
// @description  Select the impersonation in runbots of odoo.com (and local instance)
// @author       Maurin3
// @include      /^http://[0-9]{6}\-(saas\-)?[0-9]{2}\-[0-9]+\-[a-z0-9]{6}\.runbot[0-9]{2}\.odoo\.com/web/login$/
// @match        http://localhost:8069/web/login
// @match        http://localhost/web/login
// @downloadURL  https://raw.githubusercontent.com/Maurin3/Userscripts/master/odoo-quick-connect.user.js
// @updateURL    https://raw.githubusercontent.com/Maurin3/Userscripts/master/odoo-quick-connect.user.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let errors = document.getElementsByClassName('alert-danger');

    let login = document.getElementById("login");
    let password = document.getElementById("password");

    let loginDiv = document.getElementsByClassName('field-login');
    let passwordDiv = document.getElementsByClassName('field-password');
    let button = document.getElementsByClassName('oe_login_buttons');

    loginDiv[0].style.display = 'none';
    passwordDiv[0].style.display = 'none';
    button[0].style.display = 'none';

    function adminConnect(event){
        console.log('hello');
        login.value = 'admin';
        password.value = 'admin';
        if (errors.length == 0){
          form.submit();
      }
    }

    let impersonate = document.createElement('div');
    impersonate.classList.add('form-group');

    let adminInput = document.createElement('input');
    adminInput.classList.add('form-control');
    adminInput.setAttribute('type', 'button');
    adminInput.value = 'admin';
    impersonate.appendChild(adminInput);
    adminInput.addEventListener('onclick', adminConnect, false);

    let form = document.forms[0];
    form.insertBefore(impersonate, button[0]);

    //I admitted there is only one form on this page
    //let form = document.forms[0];

    //In case of wrong login/password : not submitting form
    //if (errors.length == 0){
    //    form.submit();
    //}
})();