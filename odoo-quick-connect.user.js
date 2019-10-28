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

    let adminConnect = function(event){
        login.value = 'admin';
        password.value = 'admin';
        if (errors.length == 0){
            form.submit();
        }
    }

    let demoConnect = function(event){
        login.value = 'demo';
        password.value = 'demo';
        if (errors.length == 0){
            form.submit();
        }
    }

    let otherConnect = function(event){
        loginDiv[0].style.display = 'block';
        passwordDiv[0].style.display = 'block';
        button[0].style.display = 'block';
        adminInput.classList.remove('d-inline');
        adminInput.classList.add('d-none');
        demoInput.classList.remove('d-inline');
        demoInput.classList.add('d-none');
        otherInput.classList.remove('d-inline');
        otherInput.classList.add('d-none');
        cancelOtherButton.style.display = 'block';
    }

    let cancelOther = function(event){
        loginDiv[0].style.display = 'none';
        passwordDiv[0].style.display = 'none';
        button[0].style.display = 'none';
        adminInput.classList.remove('d-none');
        adminInput.classList.add('d-inline');
        demoInput.classList.remove('d-none');
        demoInput.classList.add('d-inline');
        otherInput.classList.remove('d-none');
        otherInput.classList.add('d-inline');
        cancelOtherButton.style.display = 'none';
    }

    let impersonate = document.createElement('div');
    impersonate.classList.add('form-group', 'text-center');

    let adminInput = document.createElement('input');
    adminInput.classList.add('form-control', 'd-inline', 'btn', 'btn-outline-primary');
    adminInput.setAttribute('type', 'button');
    adminInput.style.width = 'calc(100% / 4)';
    adminInput.value = 'Admin';
    impersonate.appendChild(adminInput);
    adminInput.addEventListener('click', adminConnect, false);

    let demoInput = document.createElement('input');
    demoInput.classList.add('form-control', 'd-inline', 'mx-3', 'btn', 'btn-outline-secondary');
    demoInput.style.width = 'calc(100% / 4)';
    demoInput.setAttribute('type', 'button');
    demoInput.value = 'Demo';
    impersonate.appendChild(demoInput);
    demoInput.addEventListener('click', demoConnect, false);

    let otherInput = document.createElement('input');
    otherInput.classList.add('form-control', 'd-inline', 'btn', 'btn-outline-dark');
    otherInput.setAttribute('type', 'button');
    otherInput.style.width = 'calc(100% / 4)';
    otherInput.value = 'Other';
    impersonate.appendChild(otherInput);
    otherInput.addEventListener('click', otherConnect, false);

    let cancelOtherButton = document.createElement('button');
    cancelOtherButton.style.display = 'none';
    cancelOtherButton.innerHTML = 'Cancel';
    cancelOtherButton.classList.add('btn', 'btn-outline-secondary', 'w-100');
    cancelOtherButton.setAttribute('type', 'button');
    impersonate.appendChild(cancelOtherButton);
    cancelOtherButton.addEventListener('click', cancelOther, false);

    let form = document.forms[0];
    form.insertBefore(impersonate, button[0]);
})();