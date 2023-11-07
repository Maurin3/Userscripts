// ==UserScript==
// @name         Odoo Quick Connect
// @icon         http://github.com/Maurin3/Userscripts/blob/master/images/oqc.png?raw=true
// @namespace    https://github.com/Maurin3
// @version      2.1.1
// @description  Select the impersonation in runbots of odoo.com (and local instance)
// @author       Maurin3
// @include      /^http(s)?:\/\/[0-9]{5,}\-((saas\-)?[0-9]{2}|master)(\-[0-9]{1})?(\-all)?\.runbot[0-9]{2,}\.odoo\.com(\/)?[a-z]{0,2}(_)?[A-Z]{0,2}\/web\/login(\?debug=)?$/
// @include      /^http(s)?:\/\/localhost(:)?[0-9]{0,5}(\/)?[a-z]{0,2}(_)?[A-Z]{0,2}\/web\/login(\?debug=)?/
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
            element.style="display:none !important";
        }
    }

    function styleDisplay(elements){
        for (let element of elements){
            element.style.display = '';
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

    let loginDiv = login.labels[0].parentElement || login.parentElement;
    let passwordDiv = password.labels[0].parentElement || password.parentElement;
    let button = document.getElementsByClassName('oe_login_buttons');

    styleUndisplay([loginDiv, passwordDiv, button[0]]);

    let adminConnect = function(event){
        connect('admin');
    }

    let demoConnect = function(event){
        connect('demo');
    }

    let portalConnect = function(event){
        connect("portal");
    }

    let otherConnect = function(event){
        styleDisplay([loginDiv, passwordDiv, button[0], cancelOtherButton]);
        classUndisplay([adminInput, demoInput, portalInput, otherInput]);
    }

    let cancelOther = function(event){
        styleUndisplay([loginDiv, passwordDiv, button[0], cancelOtherButton]);
        classDisplay([adminInput, demoInput, portalInput, otherInput]);
    }

    let impersonate = document.createElement('div');
    impersonate.classList.add('form-group', 'text-center');

    let adminInput = createButton('input', 'Admin', impersonate, adminConnect);
    let demoInput = createButton('input', 'Demo', impersonate, demoConnect);
    let portalInput = createButton('input', 'Portal', impersonate, portalConnect);
    let otherInput = createButton('input', 'Other', impersonate, otherConnect);
    let cancelOtherButton = createButton('button', 'Cancel', impersonate, cancelOther);


    function createButton(elemType, name, parentElem, action){
        let button = document.createElement(elemType);
        button.setAttribute('type', 'button');
        if (name === 'Admin' || name === 'Demo' || name === 'Portal' || name === 'Other'){
            button.classList.add('form-control', 'd-inline', 'btn', 'my-2');
            button.value = name;
        }
        switch(name){
            case 'Admin':
                button.classList.add('btn-primary');
                break;
            case 'Demo':
                button.classList.add('btn-secondary');
                break;
            case 'Portal':
                button.classList.add('btn-dark');
                break;
            case 'Other':
                button.classList.add('btn-info');
                break;
            default: // cancelOtherButton, name = 'Cancel'
                button.classList.add('btn', 'btn-info', 'w-100');
                button.style.display = 'none';
                button.innerHTML = name;
        }
        parentElem.appendChild(button);
        button.addEventListener('click', action, false);
        return button;
    }

    let form = document.getElementsByClassName('oe_login_form')[0];
    form.insertBefore(impersonate, button[0]);
})();
