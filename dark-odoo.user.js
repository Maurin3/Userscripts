// ==UserScript==
// @name         Dark theme for Odoo
// @icon         http://github.com/Maurin3/Userscripts/blob/master/images/doo.png?raw=true
// @namespace    https://github.com/Maurin3
// @version      1.2.2
// @description  Make all odoo.com domains dark (local version too)
// @author       Maurin3
// @match        https://www.*.odoo.com/web*
// @match        https://www.*.dev.odoo.com/web*
// @match        https://*.odoo.com/web*
// @include      /^http://[0-9]{5,}\-[a-z0-9]{2}\-0\-[a-z0-9]{5,}\.runbot[0-9]{2}\.odoo\.com/web(.*)$/
// @match        https://www.odoo.com/web*
// @include      /^http://localhost(:)?[0-9]{0,5}(/)?[a-z]{0,4}/web(.*)$/
// @run-at       document-start
// @grant        GM.getValue
// @grant        GM_getValue
// @grant        GM.setValue
// @grant        GM_setValue
// @grant        GM.xmlHttpRequest
// @grant        GM_xmlhttpRequest
// @connect      raw.githubusercontent.com
// @connect      localhost
// @downloadURL  https://raw.githubusercontent.com/Maurin3/Userscripts/master/dark-odoo.user.js
// @updateURL    https://raw.githubusercontent.com/Maurin3/Userscripts/master/dark-odoo.user.js
// ==/UserScript==

(async () => {
    'use strict';
    var defaults = { 'dark': false };
    let data = {};
    var css = false;
    // NOTE: run python to get elements available locally
    // CMD: python -m SimpleHTTPServer
    const isDebug = true;

    function setStyle(element) {
        element.style.height = '46px';
        element.style.padding = '0 10px';
        element.style.lineHeight = '46px';
        element.style.textAlign = 'left';
        window.addEventListener("hashchange", () => {
            if (new RegExp('home').test(window.location.href)
                || new RegExp(/\?#$/).test(window.location.href)
                || new RegExp(/#$/).test(window.location.href)
                || new RegExp(/\?debug=1#$/).test(window.location.href)
                || new RegExp(/\?debug=0#$/).test(window.location.href)){
                element.onpointerover = null;
                element.onpointerout = null;
            }
            else{
                element.onpointerover = () => {element.style.backgroundColor = '#68465f'};
                element.onpointerout = () => {element.style.backgroundColor = 'rgba(0, 0, 0, 0)'};
            }
        });
    }

    async function getData() {
        data = await GM.getValue("data", defaults);
        try {
            data = JSON.parse(data);
            if (!Object.keys(data).length || ({}).toString.call(data) !== "[object Object]") {
                throw new Error();
            }
        }
        catch (err) {
            data = await GM.getValue("data", defaults);
        }
    }

    async function init() {
        await retrieveCss();
        let darkMode = document.getElementsByClassName('o_dark_mode');
        if (darkMode.length == 0) {
            let darkMode = document.createElement('li');
            darkMode.classList.add('o_dark_mode');
            let clickable = document.createElement('span');
            setStyle(clickable);
            await getData();
            if (!data.dark) {
                clickable.classList.add('fa', 'fa-moon-o');
            }
            else {
                clickable.classList.add('fa', 'fa-sun-o');
            }
            var observer = new MutationObserver(function () {
                let debugMenu = document.getElementsByClassName('o_menu_systray');
                if (debugMenu.length > 0) {
                    // It exists now
                    let elemMenu = document.getElementsByClassName('o_user_menu');
                    darkMode.appendChild(clickable);
                    debugMenu[0].insertBefore(darkMode, elemMenu[0]);
                    observer.disconnect();
                }
            });
            observer.observe(document.documentElement, { childList: true, subtree: true });
            clickable.addEventListener('click', addCss, false);
            if (data.dark) {
                dark(clickable);
            }
        }
    }

    window.onload = await init();

    async function addCss(ev) {
        var clickable = document.getElementsByClassName('o_dark_mode')[0].lastChild;
        await getData();
        if (!data.dark || clickable.classList.contains('fa-moon-o')) {
            dark(clickable);
            await GM.setValue("data", JSON.stringify({ 'dark': true }));
        }
        else {
            light(clickable);
            await GM.setValue("data", JSON.stringify({ 'dark': false }));
        }
    }

    function dark(clickable) {
        clickable.classList.remove('fa-moon-o');
        clickable.classList.add('fa-sun-o');
        var node = document.createElement("style");
        node.setAttribute('id', 'style');
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        var heads = document.getElementsByTagName("head");
        if (heads.length > 0) {
            heads[0].appendChild(node);
        } else {
            // no head yet, stick it whereever
            document.documentElement.appendChild(node);
        }
    }

    function light(clickable) {
        clickable.classList.remove('fa-sun-o');
        clickable.classList.add('fa-moon-o');
        var node = document.getElementById('style');
        var heads = document.getElementsByTagName("head");
        if (heads.length > 0) {
            if (node) heads[0].removeChild(node);
        } else {
            // no head yet, stick it whereever
            if (node) document.documentElement.removeChild(node);
        }
    }

    async function retrieveCss() {
        var root = "";
        if (isDebug){
            root = "http://localhost:8000/css/";
        }
        else{
            root = "https://raw.githubusercontent.com/Maurin3/Userscripts/master/css/";
        }
        console.info(`Fetching ${root}doo.css`);
        await GM.xmlHttpRequest({
            method: "GET",
            url: `${root}doo.css`,
            onload: response => {
                css = response.responseText;
            }
        });
    }
})();