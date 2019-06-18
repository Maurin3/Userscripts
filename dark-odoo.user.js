// ==UserScript==
// @name         Dark theme for Odoo
// @icon         http://github.com/Maurin3/Userscripts/blob/master/images/doo.png?raw=true
// @namespace    https://github.com/Maurin3
// @version      0.1.0
// @description  Make all odoo.com domains dark (local version too)
// @author       Maurin3
// @match        https://www.*.odoo.com/web*
// @match        https://www.*.dev.odoo.com/web*
// @match        https://*.odoo.com/web*
// @include      /^http://[0-9]{6}\-[a-z0-9]{2}\-0\-[a-z0-9]{6}\.runbot[0-9]{2}\.odoo\.com/web(.*)$/
// @match        https://www.odoo.com/web*
// @match        http://localhost:8069/web*
// @run-at       document-start
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/Maurin3/Userscripts/master/dark-odoo.user.js
// @updateURL    https://raw.githubusercontent.com/Maurin3/Userscripts/master/dark-odoo.user.js
// ==/UserScript==

(function() {
var css = "";
if (false || (document.domain == "odoo.com/web" || document.domain.substring(document.domain.indexOf(".odoo.com/web") + 1) == "odoo.com/web")
            || (new RegExp("((http|https)://)?(www[.])?odoo.com/web.+")).test(document.location.href)
            || (new RegExp("((http|https)://)?localhost:8069/web.+")).test(document.location.href)
            || (new RegExp("/^http://[0-9]{6}\-[a-z0-9]{2}\-0\-[a-z0-9]{6}\.runbot[0-9]{2}\.odoo\.com/web(.*)$/")).test(document.location.href))
    css += [
        "body{",
        "    background-color: #222222;",
        "    color: #bfbfbf;",
        "}",
        "h1, h2, h3, h4, h5, .h1, .h2, .h3, .h4, .h5 {",
        "    color: #FFFFFF;",
        "}",
        // Modals
        ".modal-header, .modal-footer{",
        "    background-color: #222222;",
        "    color: #FFFFFF;",
        "    border-color: #808080;",
        "}",
        ".modal-body, .modal-content{",
        "    background-color: #222222;",
        "    color: #bfbfbf;",
        "}",
        // Chatter
        ".close, .o_thread_message .o_mail_discussion, .o_attachment, .o_chatter_topbar, .o_mail_activity.o_field_widget, .o_form_view > .oe_chatter, .o_mail_thread .o_mail_thread_content, .o_thread_message .o_mail_discussion strong, o_chatter oe_chatter {",
        "    background-color: #222222;",
        "    color: #bfbfbf;",
        "}",
        ".o_mail_thread .o_thread_message .o_thread_message_core .o_mail_info strong {",
        "    color: #bfbfbf;",
        "}",
        ".o_mail_thread .o_thread_message.o_mail_not_discussion {",
        "    background-color: rgba(128, 128, 128, 0.25);",
        "    border-color: #222222;",
        "    color: #bfbfbf;",
        "}",
        ".o_content, .o_mail_thread .o_thread_date_separator .o_thread_date {",
        "    background-color: #222222;",
        "    color: #bfbfbf;",
        "}",
        ".o_followers .o_followers_actions .o_followers_follow_button {",
        "    color: #bfbfbf;",
        "}",
        // Control Panel
        ".o_control_panel{",
        "    background-color: #0d0d0d;",
        "    color: #bfbfbf;",
        "    border-color: #bfbfbf;",
        "}",
        ".o_control_panel .o_form_statusbar .o_statusbar_buttons{",
        "    background-color: #0d0d0d;",
        "    border-color: #0d0d0d;",
        "}",
        ".o_control_panel .btn-primary, .o_control_panel .btn-primary:hover, .o_control_panel .btn-primary:active{",
        "    color: #0d0d0d;",
        "    border-color: #0d0d0d;",
        "}",
        ".o_control_panel .btn-secondary{",
        "    background-color: #0d0d0d;",
        "    border-color: #0d0d0d;",
        "}",
        ".o_control_panel .btn-secondary:hover, .o_control_panel .btn-secondary:active{",
        "    background-color: #222222;",
        "    border-color: #222222;",
        "    color: #FFFFFF;",
        "}",
        ".breadcrumb, .o_dropdown, .dropdown-item{",
        "    background-color: #0d0d0d;",
        "    color: #bfbfbf;",
        "}",
        ".dropdown-menu{",
        "    background-color: #0d0d0d;",
        "    color: #bfbfbf;",
        "    border-color: #bfbfbf;",
        "}",
        ".o_cp_searchview, .o_searchview_facet, .o_searchview .o_searchview_input_container .o_searchview_input, .o_cp_searchview .o_searchview_facet{",
        "    background-color: #0d0d0d;",
        "    color: #bfbfbf;",
        "}",
        // General
        ".btn.btn-secondary.o_arrow_button{",
        "    background-color: #222222;",
        "    border-color: #222222;",
        "}",
        ".btn-secondary{",
        "    background-color: #222222;",
        "    border-color: #222222;",
        "}",
        ".btn-primary, .btn-primary:hover, .btn-primary:active{",
        "    color: #222222;",
        "}",
        ".btn-secondary:hover, .btn-secondary:active{",
        "    background-color: #222222;",
        "    border-color: #222222;",
        "    color: #FFFFFF;",
        "}",
        ".btn-primary:hover{",
        "    color: #0d0d0d;",
        "}",
        ".fa.fa-trash-o, .fa.fa-fw.o_button_icon.fa-list{",
        "    color: #bfbfbf;",
        "}",
        ".fa.fa-search-plus{",
        "    color: #bfbfbf;",
        "    opacity: 1;",
        "}",
        ".o_field_widget.o_field_many2one > button{",
        "    background-color: #222222;",
        "    opacity: 1;",
        "}",
        ".o_view_controller{",
        "    background-color: #222222;",
        "    color: #bfbfbf;",
        "}",
        ".ui-autocomplete,.ui-autocomplete .ui-menu-item {",
        "    background-color: #222222;",
        "    color: #bfbfbf;",
        "}",
        ".ui-autocomplete .ui-menu-item:active {",
        "    background-color: #222222;",
        "    color: #FFFFFF;",
        "}",
        // List view
        ".o_list_view, .o_list_view tfoot{",
        "    background-color: #222222;",
        "    color: #bfbfbf;",
        "}",
        ".o_list_view thead{",
        "    background-color: #222222;",
        "    color: #bfbfbf;",
        "    border-bottom: 1px solid #bfbfbf;",
        "}",
        ".table-striped tbody tr:nth-of-type(odd) {",
        "    background-color: rgba(0, 0, 0, 0.25);",
        "}",
        // Form view
        ".o_form_view, .o_form_sheet_bg, .o_form_sheet, .o_form_statusbar, .o_form_label, .o_form_view .o_form_sheet_bg > .o_form_sheet, .o_form_view .o_form_sheet_bg{",
        "    background-color: #222222;",
        "    color: #bfbfbf;",
        "}",
        ".o_form_view .o_form_statusbar, .o_form_view .o_form_statusbar > .o_statusbar_status{",
        "    background-color: #222222;",
        "    border-color: #bfbfbf;",
        "    color: #bfbfbf;",
        "}",
        ".o_form_view .o_form_statusbar > .o_statusbar_status > .o_arrow_button:not(:first-child):after {",
        "    border-left: 11px solid #222;",
        "}",
        ".o_form_view .o_form_statusbar > .o_statusbar_status > .o_arrow_button:not(:first-child):before {",
        "    right: -11px;",
        "    border-left-color: #bfbfbf;",
        "}",
        ".o_form_view .o_notebook > .nav.nav-tabs > .nav-item > .nav-link.active{",
        "    background-color: #222222;",
        "    color: #bfbfbf;",
        "    border-top: 2px solid #875A7B;",
        "}",
        ".o_form_view .o_notebook > .nav.nav-tabs > .nav-item > .nav-link{",
        "    background-color: #222222;",
        "}",
        ".o_input{",
        "    background-color: #222222;",
        "    color: #bfbfbf;",
        "}",
        ".o_list_view .o_data_row.o_selected_row > .o_data_cell:not(.o_readonly_modifier) .o_input {",
        "    background-color: #222222;",
        "    border-color: #222222;",
        "    color: #bfbfbf;",
        "}",
        // Grid view
        ".o_web_client .o_view_grid > table > thead{",
        "    background-color: #222222;",
        "    color: #FFFFFF;",
        "}",
        ".o_web_client .o_view_grid tbody, .o_web_client .o_view_grid tbody.o_grid_section tr:first-child {",
        "    background-color: #222222;",
        "}",
        ".o_grid_current .o_grid_cell_empty > .o_grid_input , .o_grid_current .o_grid_cell_empty .fa.fa-search-plus {",
        "    color: #222222;",
        "    opacity: 0.75 !important;",
        "}",
        ".o_web_client .o_view_grid .o_grid_current:not(.o_grid_total) {",
        "    background-color: rgba(0, 160, 157, 0.90);",
        "    color: #222222;",
        "}",
        // Kanban view
        ".o_kanban_view.o_kanban_grouped {",
        "    background-color: #222222;",
        "}",
        ".o_kanban_view.o_kanban_ungrouped .o_kanban_record {",
        "    background-color: rgba(0, 0, 0, 0.25);",
        "    border-bottom: 1px solid #bfbfbf;",
        "}",
        ".o_kanban_view .o_kanban_record, .o_kanban_view .o_kanban_quick_create, .o_kanban_view .o_kanban_group.o_column_folded {",
        "    background-color: rgba(0, 0, 0, 0.25);",
        "}",
        ".o_kanban_view .o_kanban_record .o_kanban_record_title, .o_kanban_view .o_kanban_group .o_kanban_header > .o_kanban_header_title, .o_kanban_counter > .o_kanban_counter_side, .o_kanban_view .o_column_quick_create .o_column_header, .o_kanban_view.o_kanban_dashboard .o_kanban_record .o_kanban_primary_left .o_primary > span:first-child {",
        "    color: #FFFFFF;",
        "}",
        // Settings view
        ".o_base_settings .o_setting_container .settings {",
        "    background-color: #222222;",
        "}",
        ".o_base_settings .o_setting_container .settings > .app_settings_block h2 {",
        "    background-color: rgba(0, 0, 0, 0.25);",
        "}",
        ".o_base_settings .o_control_panel .o_panel .o_setting_search .searchInput {",
        "    background-color: #0d0d0d;",
        "}",
        ".o_web_settings_dashboard {",
        "    background-color: #222222;",
        "    color: #FFFFFF;",
        "}",
        ".o_web_settings_dashboard .o_web_settings_dashboard_col > div {",
        "    background-color: rgba(0, 0, 0, 0.25);",
        "}",
        //special : container o_stock_reports_page o_stock_reports_no_print
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