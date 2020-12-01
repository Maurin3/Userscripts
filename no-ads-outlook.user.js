// ==UserScript==
// @name         Remove ads for Outlook
// @namespace    https://github.com/Maurin3
// @icon         http://github.com/Maurin3/Userscripts/blob/master/images/nao.png?raw=true
// @version      1.2
// @description  Remove the display of ads in Outlook
// @author       Maurin3
// @match        https://outlook.live.com/mail/*
// @grant        none
// @run-at       document-end
// @downloadURL  https://raw.githubusercontent.com/Maurin3/Userscripts/master/no-ads-outlook.user.js
// @updateURL    https://raw.githubusercontent.com/Maurin3/Userscripts/master/no-ads-outlook.user.js
// ==/UserScript==

(function() {
    'use strict';
    // Vertical ad pane
    var observer = new MutationObserver(function () {
        let ads = document.getElementsByClassName('_3_hHr3kfEhbNYRFM5YJxH9')[0];
        if (ads != undefined || ads != null) {
            ads.style.display = 'none';
            observer.disconnect();
        }
    });
    observer.observe(document.documentElement,{ childList: true, subtree: true });

    // Horizontal ad pane 
    var observer2 = new MutationObserver(function () {
        let ads = document.getElementsByClassName('_3aRm9-c4VI9gXlSh855LSx')[0];
        if (ads != undefined || ads != null) {
            ads.style.display = 'none';
            observer.disconnect();
        }
    });
    observer2.observe(document.documentElement,{ childList: true, subtree: true });
})();