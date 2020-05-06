// ==UserScript==
// @name         Remove ads for Tab for a Cause
// @icon         http://github.com/Maurin3/Userscripts/blob/master/images/tfc.png?raw=true
// @namespace    https://github.com/Maurin3
// @version      1.0
// @description  Remove the display of ads in a tab with Tab For A Cause in URL
// @author       Maurin3
// @match        https://tab.gladly.io/newtab
// @grant        none
// @run-at       document-end
// @downloadURL  https://raw.githubusercontent.com/Maurin3/Userscripts/master/no-ads-tab-for-a-cause.user.js
// @updateURL    https://raw.githubusercontent.com/Maurin3/Userscripts/master/no-ads-tab-for-a-cause.user.js
// ==/UserScript==

(function() {
    'use strict';
    var observer = new MutationObserver(function () {
        let ads = document.querySelector('[data-test-id="app-dashboard"]');
        if (ads != undefined || ads != null) {
            let child = ads.lastChild;
            child.style.display = 'none';
            observer.disconnect();
        }
    });
    observer.observe(document.documentElement,{ childList: true, subtree: true });
})();