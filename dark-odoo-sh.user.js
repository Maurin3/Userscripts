// ==UserScript==
// @name         Dark theme for odoo.sh
// @icon         http://github.com/Maurin3/Userscripts/blob/master/images/dsh.png?raw=true
// @namespace    https://github.com/Maurin3
// @version      1.0
// @description  Make odoo.sh dark
// @author       Maurin3
// @match        https://www.odoo.sh/*
// @include      /^https://eupp[0-9]*.odoo\.com/paas/*
// @include      /^https://eupd[0-9]*.odoo\.com/paas/*
// @grant        none
// @run-at       document-start
// @downloadURL  https://raw.githubusercontent.com/Maurin3/Userscripts/master/dark-odoo-sh.user.js
// @updateURL    https://raw.githubusercontent.com/Maurin3/Userscripts/master/dark-odoo-sh.user.js
// ==/UserScript==

(function() {
    'use strict';
    var css = [
        // General
        "main{",
        "    background-color: #1a1a1a;",
        "    color: #FFFFFF;",
        "}",
        "#wrapwrap{",
        "    background-color: #222222;",
        "}",
        "h1, h2, h3, h4, h5{",
        "    color: #FFFFFF;",
        "}",
        "a:hover{",
        "    color: #00b3b0;",
        "}",
        ".btn-link, a {",
        "    color: #bfbfbf;",
        "}",

        // Projects Page
        ".o_sh_projects_cards > .o_project_cards > .o_project_create_new > a > .o_project_card{",
        "    background-color: #1a1a1a;",
        "    color: #FFFFFF;",
        "}",
        ".o_project_cards > .o_project_card_container > .o_project_card{",
        "    background-color: #1a1a1a;",
        "    color: #FFFFFF;",
        "    box-shadow: 0 1px 3px 0 #808080, 0 0 0 1px #808080;",
        "}",
        ".o_project_title, body .text-black{",
        "    color: #FFFFFF;",
        "}",
        ".o_sh_projects_search  {",
        "    color: initial;",
        "}",

        // Home Page
        ".bg-gray-lighter > .container > div > div>  h1,.bg-gray-lighter > .container > div > div > h2, .bg-gray-lighter > .container > div > div > h3, .bg-gray-lighter > .container > div > div > h4, .bg-gray-lighter > .container > div > div > h5{",
        "    color: #21313a;",
        "}",

        // Project/Branch History Page
        ".o_branch_history, .o_branch_history .o_tracking_date_separator .o_tracking_date {",
        "    background-color: #222222;",
        "    color: #FFFFFF;",
        "}",
        ".o_branch_history .o_tracking .o_tracking_commits .o_tracking_commit .o_tracking_commit_body{",
        "    background-color: rgba(128, 128, 128, 0.25);",
        "}",

        // General Settings Page
        ".help-block {",
        "    background-color: #222222;",
        "    color: #999999;",
        "}",
        ".o_github_search_box .input-group-btn .btn{",
        "    background-color: #00A09D !important;",
        "    color: #FFFFFF !important;",
        "}",
        ".o_branch_settings_wrapper, .o_settings_wrapper {",
        "    background-color: #222222;",
        "    color: #FFFFFF;",
        "}",
        ".o_settings_section_body .alert-danger {",
        "    background-color: #2e2705;",
        "    color: #bfbfbf;",
        "}",
        ".o_settings_wrapper .o_github_search_result {",
        "    background-color: #000000;",
        "}",
        ".o_settings_wrapper .o_github_search_result li:hover {",
        "    background-color: rgba(0, 0, 0, 0.25);",
        "}",
        ".o_settings_code.btn.btn-secondary {",
        "    background-color: #734d69;",
        "}",

        // Branch Settings Page
        ".o_branch_settings_wrapper .o_settings_pricing .table tr:nth-last-child(n + 1) td, .o_settings_wrapper .o_settings_pricing .table tr:nth-last-child(n + 1) td, .list-group-item, .o_settings_wrapper .o_github_search_box .form-control  {",
        "    background-color: rgba(128, 128, 128, 0.25);",
        "    color: #FFFFFF;",
        "}",
        ".o_tracking_stage_change.small.text-uppercase{",
        "    color: #222222;",
        "}",
        ".o_branch_history .js_history_item + .js_history_item{",
        "    border-color: #222222;",
        "}",

        // Builds Page
        ".o_builds_view .o_builds_card.o_success {",
        "    background-color: #15250e;",
        "}",
        ".o_builds_view .o_builds_card.o_warning {",
        "    background-color: #2e2705;",
        "}",
        ".o_builds_view .o_builds_card.o_failed {",
        "    background-color: #240f0f;",
        "}",
        ".o_sh_row .o_sh_panel_right{",
        "    background-color: #222222;",
        "    color: #FFFFFF;",
        "}",
        ".o_sh_row .o_sh_panel_left{",
        "    background-color: #222222;",
        "    color: #FFFFFF;",
        "}",
        ".o_builds_view .o_builds_card {",
        "    border-right: 1px solid #222222;",
        "}",


        // Create Project Page
        ".o_location .panel label.control-label {",
        "    color: #bfbfbf;",
        "}",
        ".panel, .panel .thumbnail, .panel .form-control {",
        "    background-color: #222222;",
        "    color: #bfbfbf;",
        "}",
        ".well {",
        "    background-color: rgba(0,0,0,0.5);",
        "}",
        ".form-control option{",
        "    background-color: #222222;",
        "}",


        // .o_project_container.o_sh_projects_list .o_project_cards .o_projects_head --> color : #dfdfdf;
        
        // Branch Logs Page
        ".o_sh_log_form{",
        "    background-color: #222;",
        "}",
        ".o_sh_iframe_tab",
        ".o_sh_iframe_tab body{",
        "    background-color: #222222;",
        "}",
        ".header{",
        "    background-color: #222222;",
        "    border-bottom: 2px solid #222222;",
        "    box-shadow: 0 0 6px #555;",
        "    color:#dfdfdf;",
        "}",
        ".o-logs{",
        "    background-color: #222222;",
        "    color: #dfdfdf;",
        "}",

        // Branch Mail Page
        ".paas-worker-mail,",
        ".paas-worker-mail .paas-worker-messages-container,",
        ".paas-worker-header .navbar-default,",
        ".paas-worker-table-messages {",
        "    background-color: #222222;",
        "    color: #dfdfdf;",
        "    border-color : #222222;",
        "}",
        ".table.table.table-condensed.paas-worker-table-messages{",
        "    box-shadow: 0 0 6px #555;",
        "}",
        ".table-striped > tbody > tr:nth-of-type(odd) {",
        "    background-color: rgba(0, 0, 0, 0.25);",
        "}",

        // Status Page
        ".o_sh_status .o_sh_server_lists_container tbody > tr:first-child td:first-child  {",
        "    color: #efefef;",
        "}",
        ".o_sh_value.h1.text-default {",
        "    color: #efefef;",
        "}",
        ".o_sh_status .o_sh_global_data_container {",
        "    background-color: #222222;",
        "}",
        // Modals
        ".modal-header,",
        ".modal-title,",
        ".modal-body,",
        ".modal-footer {",
        "    background-color: #222222 !important;",
        "    color: #dfdfdf !important;",
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