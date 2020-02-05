// ==UserScript==
// @name         Remove ads for Tab for a Cause
// @icon         http://github.com/Maurin3/Userscripts/blob/master/images/tfc.png?raw=true
// @namespace    https://github.com/Maurin3
// @version      0.1
// @description  Remove the display of ads in a tab with Tab For A Cause in URL
// @author       Maurin3
// @match        https://tab.gladly.io/newtab/
// @grant        none
// @run-at       document-end
// @downloadURL  https://raw.githubusercontent.com/Maurin3/Userscripts/master/no-ads-tab-for-a-cause.user.js
// @updateURL    https://raw.githubusercontent.com/Maurin3/Userscripts/master/no-ads-tab-for-a-cause.user.js
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(
        function(){
            let ads = document.querySelector('[data-test-id="app-dashboard"]').lastChild;
            ads.style.display = 'none';
        },
        3200
    );
})();