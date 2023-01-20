// ==UserScript==
// @name         Dark Mode Odoo (Attribute)
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Add a new attribute on body to enable Odoo Dark Mode userstyle without interfering with integrated Dark Mode of Odoo (from 16.0)
// @author       Maurin3
// @include      /^http(s)?:\/\/[0-9]{5,}\-((saas\-)?[0-9]{2}|master)(\-[0-9]{1})?(\-all)?\.runbot[0-9]{2,}\.odoo\.com(\/)?[a-z]{0,2}(_)?[A-Z]{0,2}\/web(.*)$/
// @match        https://www.odoo.com/web*
// @include      /^http(s)?:\/\/localhost(:)?[0-9]{0,5}(\/)?[a-z]{0,2}(_)?[A-Z]{0,2}\/web(.*)$/
// @downloadURL  https://raw.githubusercontent.com/Maurin3/Userscripts/master/odoo-dark-old.user.js
// @updateURL    https://raw.githubusercontent.com/Maurin3/Userscripts/master/odoo-dark-old.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // This Userscript can be deprecated once Odoo will be the last version supported.
    window.onload = function(){
        let links = document.getElementsByTagName("link");
        let darkmode = false;
        for(let link of links){
            darkmode = link.href.includes("dark_mode");
            if (darkmode){
                break;
            }
        }
        let setDark = (darkmode)? "true": "false";
        let body = document.body;
        body.setAttribute("data-has-intergrated-dark-mode", setDark);
        console.log(darkmode);
    }
})();
