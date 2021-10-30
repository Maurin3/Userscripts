// ==UserScript==
// @name         Dark theme for odoo.sh
// @icon         http://github.com/Maurin3/Userscripts/blob/master/images/dsh.png?raw=true
// @namespace    https://github.com/Maurin3
// @version      1.2.3
// @description  Make odoo.sh dark
// @author       Maurin3
// @match        https://www.odoo.sh/*
// @include      /^https://eupp[0-9]*.odoo\.com/paas/*
// @include      /^https://eupd[0-9]*.odoo\.com/paas/*
// @run-at       document-start
// @grant        GM.getValue
// @grant        GM_getValue
// @grant        GM.setValue
// @grant        GM_setValue
// @grant        GM.xmlHttpRequest
// @grant        GM_xmlhttpRequest
// @connect      localhost
// @connect      raw.githubusercontent.com
// @downloadURL  https://raw.githubusercontent.com/Maurin3/Userscripts/master/dark-odoo-sh.user.js
// @updateURL    https://raw.githubusercontent.com/Maurin3/Userscripts/master/dark-odoo-sh.user.js
// ==/UserScript==

(async() => {
    'use strict';
    var css = false;
    // NOTE: run python to get elements available locally
    // CMD: python -m SimpleHTTPServer
    const isDebug = false;

    async function init() {
        await retrieveCss();
        dark();
        graphana();
    }

    window.onload = await init();

    function graphana(){
        let lightGrafanaList = document.querySelectorAll('[href ^= "public/build/grafana.light"]');
        if (lightGrafanaList.length > 0){
            let lightGrafana = lightGrafanaList[0]
            let darkGraphana = lightGrafana.cloneNode()
            darkGraphana.href = lightGrafana.href.replace('light', 'dark');
            darkGraphana.id = 'darkGraphana';
            var heads = document.getElementsByTagName("head");
            if (heads.length > 0) {
                heads[0].appendChild(darkGraphana);
            }
        }
    }

    function dark() {
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

    async function retrieveCss() {
        var root = "";
        if (isDebug){
            root = "http://localhost:8000/css/";
        }
        else{
            root = "https://raw.githubusercontent.com/Maurin3/Userscripts/master/css/";
        }
        console.info(`Fetching ${root}dsh.css`);
        await GM.xmlHttpRequest({
            method: "GET",
            url: `${root}dsh.css`,
            onload: response => {
                css = response.responseText;
            }
        });
    }
})();