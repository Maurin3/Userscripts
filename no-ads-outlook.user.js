// ==UserScript==
// @name         Remove ads for Outlook 
// @namespace    https://github.com/Maurin3
// @version      1.0
// @description  Remove the display of ads in Outlook
// @author       Maurin3
// @match        https://outlook.live.com/mail/0/inbox/*
// @grant        none
// @run-at       document-end
// @downloadURL  https://raw.githubusercontent.com/Maurin3/Userscripts/master/no-ads-tab-for-a-cause.user.js
// @updateURL    https://raw.githubusercontent.com/Maurin3/Userscripts/master/no-ads-tab-for-a-cause.user.js
// ==/UserScript==

(function() {
    'use strict';
    var observer = new MutationObserver(function () {
        let ads = document.getElementsByClassName('_3_hHr3kfEhbNYRFM5YJxH9')[0];
        if (ads != undefined || ads != null) {
            ads.style.display = 'none';
            observer.disconnect();
        }
    });
    observer.observe(document.documentElement,{ childList: true, subtree: true });
})();