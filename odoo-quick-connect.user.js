// ==UserScript==
// @name         Odoo Quick Connect
// @icon         http://github.com/Maurin3/Userscripts/blob/master/images/oqc.png?raw=true
// @namespace    https://github.com/Maurin3
// @version      1.0
// @description  Select the impersonation in runbots of odoo.com (and local instance)
// @author       Maurin3
// @include      /^http://[0-9]{6}\-(saas\-)?[0-9]{2}\-[0-9]+\-[a-z0-9]{6}\.runbot[0-9]{2}\.odoo\.com/web/login*$/
// @match        http://localhost:8069/web/login*
// @match        http://localhost/web/login*
// @downloadURL  https://raw.githubusercontent.com/Maurin3/Userscripts/master/odoo-quick-connect.user.js
// @updateURL    https://raw.githubusercontent.com/Maurin3/Userscripts/master/odoo-quick-connect.user.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Functions
    function classUndisplay(elements){
        for (let element of elements){
            element.classList.remove('d-inline');
            element.classList.add('d-none');
        }
    }

    function classDisplay(elements){
        for (let element of elements){
            element.classList.remove('d-none');
            element.classList.add('d-inline');
        }
    }

    function styleUndisplay(elements){
        for (let element of elements){
            element.style.display = 'none';
        }
    }

    function styleDisplay(elements){
        for (let element of elements){
            element.style.display = 'block';
        }
    }

    function connect(value){
        login.value = value;
        password.value = value;
        if (errors.length == 0){
            form.submit();
        }
    }

    let errors = document.getElementsByClassName('alert-danger');

    let login = document.getElementById("login");
    let password = document.getElementById("password");

    let loginDiv = document.getElementsByClassName('field-login');
    let passwordDiv = document.getElementsByClassName('field-password');
    let button = document.getElementsByClassName('oe_login_buttons');

    styleUndisplay([loginDiv[0], passwordDiv[0], button[0]]);

    let adminConnect = function(event){
        connect('admin');
    }

    let demoConnect = function(event){
        connect('demo');
    }

    let otherConnect = function(event){
        styleDisplay([loginDiv[0], passwordDiv[0], button[0], cancelOtherButton]);
        classUndisplay([adminInput, demoInput, otherInput]);
    }

    let cancelOther = function(event){
        styleUndisplay([loginDiv[0], passwordDiv[0], button[0], cancelOtherButton]);
        classDisplay([adminInput, demoInput, otherInput]);
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

    function createButton(elemType, name, parentElem, color){
        let button = document.createElement(elemType);
        button.setAttribute('type', 'button');
        parentElem.appendChild(button);
        cancelOtherButton.addEventListener('click', cancelOther, false);
    }

    let form = document.forms[0];
    form.insertBefore(impersonate, button[0]);
})();