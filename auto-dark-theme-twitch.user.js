// ==UserScript==
// @name         Auto Dark Theme for Twitch
// @namespace    https://github.com/Maurin3
// @version      1.0
// @description  Automatically apply the dark theme of Twitch
// @author       Maurin3
// @match        https://www.twitch.tv/*
// @grant        none
// @run-at       document-end
// @downloadURL  https://raw.githubusercontent.com/Maurin3/Userscripts/master/auto-dark-theme-twitch.user.js
// @updateURL    https://raw.githubusercontent.com/Maurin3/Userscripts/master/auto-dark-theme-twitch.user.js
// ==/UserScript==

(function() {
    'use strict';

    var darkModeObserver = new MutationObserver(function () {
        if (document.documentElement.classList.contains('tw-root--hover')) {
            document.documentElement.classList.remove('tw-root--theme-light');
            document.documentElement.classList.add('tw-root--theme-dark');
            darkModeObserver.disconnect();
        }
    });
    darkModeObserver.observe(document.documentElement,{ childList: true, subtree: true });

    var menuObserver = new MutationObserver(function () {
        let option = document.querySelector('[data-test-selector="user-menu__dark-mode-toggle"]');
        console.log(option);
        if (option != undefined || option != null) {
            debugger;
            option.firstChild.checked = true;
            menuObserver.disconnect();
        }
    });
    menuObserver.observe(document.documentElement,{ childList: true, subtree: true });
})();