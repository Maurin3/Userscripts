// ==UserScript==
// @name         Dark theme for odoo.sh
// @icon         http://github.com/Maurin3/Userscripts/blob/master/images/dsh.png?raw=true
// @namespace    https://github.com/Maurin3
// @version      0.1.0
// @description  Make odoo.sh dark
// @author       Maurin3
// @match        https://www.odoo.sh/*
// @grant        none
// @run-at       document-start
// @downloadURL  https://raw.githubusercontent.com/Maurin3/Userscripts/master/dark-odoo-sh.user.js
// @updateURL    https://raw.githubusercontent.com/Maurin3/Userscripts/master/dark-odoo-sh.user.js
// ==/UserScript==

(function() {
    'use strict';

    var css = "";
if (false || (document.domain == "odoo.sh" || document.domain.substring(document.domain.indexOf(".odoo.sh") + 1) == "odoo.sh")
          || (new RegExp("((http|https)://)?(www[.])?odoo.sh/.+")).test(document.location.href))
    css += [
        "main{",
        "    background-color: #1a1a1a;",
        "    color: #FFFFFF;",
        "}",
        "h1, h2, h3, h4, h5{",
        "    color: #FFFFFF;",
        "}",
        ".o_sh_projects_cards > .o_project_cards > .o_project_create_new > a > .o_project_card{",
        "    background-color: #1a1a1a;",
        "    color: #FFFFFF;",
        "}",
        ".o_project_cards > .o_project_card_container > .o_project_card{",
        "    background-color: #1a1a1a;",
        "    color: #FFFFFF;",
        "    box-shadow: 0 1px 3px 0 #808080, 0 0 0 1px #808080;",
        "}",
        ".o_project_title{",
        "    background-color: #1a1a1a;",
        "    color: #FFFFFF;",
        "}",
        ".bg-gray-lighter > .container > div > div>  h1,.bg-gray-lighter > .container > div > div > h2, .bg-gray-lighter > .container > div > div > h3, .bg-gray-lighter > .container > div > div > h4, .bg-gray-lighter > .container > div > div > h5{",
        "    color: #21313a;",
        "}",
        ".o_branch_history, .o_branch_history .o_tracking_date_separator .o_tracking_date {",
        "    background-color: #222222;",
        "    color: #FFFFFF;",
        "}",
        ".o_branch_history .o_tracking .o_tracking_commits .o_tracking_commit .o_tracking_commit_body{",
        "    background-color: rgba(128, 128, 128, 0.25);",
        "}",
        ".help-block {",
        "    background-color: #222222;",
        "    color: #666666;",
        "}",
        ".o_branch_settings_wrapper .o_settings_pricing .table tr:nth-last-child(n + 1) td, .o_settings_wrapper .o_settings_pricing .table tr:nth-last-child(n + 1) td, .list-group-item, .o_settings_wrapper .o_github_search_box .form-control  {",
        "    background-color: rgba(128, 128, 128, 0.25);",
        "    color: #FFFFFF;",
        "}",
        ".o_github_search_box .input-group-btn .btn{",
        "    background-color: #00A09D !important;",
        "    color: #FFFFFF !important;",
        "}",
        ".o_tracking_stage_change.small.text-uppercase{",
        "    color: #222222;",
        "}",
        ".o_branch_history .js_history_item + .js_history_item{",
        "    border-color: #222222;",
        "}",
        ".o_sh_row .o_sh_panel_left, .o_sh_row.o_search .o_sh_panel_right{",
        "    color: #808080;",
        "}",
         ".o_branch_settings_wrapper, .o_settings_wrapper {",
        "    background-color: #222222;",
        "    color: #FFFFFF;",
        "}",
        ".o_sh_row .o_sh_panel_right{",
        "    background-color: #222222;",
        "    color: #FFFFFF;",
        "}",
        ".o_sh_row .o_sh_panel_left{",
        "    background-color: #222222;",
        "    color: #FFFFFF;",
        "}",
        ".o_builds_view .o_builds_card.o_success {",
        "    background-color: #15250e;",
        "}",
        ".o_builds_view .o_builds_card.o_warning {",
        "    background-color: #2e2705;",
        "}",
        ".o_builds_view .o_builds_card.o_failed {",
        "    background-color: #240f0f;",
        "}",
        ".o_builds_view .o_builds_card {",
        "    border-right: 1px solid #222222;",
        "}",
    ].join("\n");
if (typeof GM_addStyle != "undefined") {
    GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
    PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
    addStyle(css);
} else {
    var node = document.createElement("style");
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
})();