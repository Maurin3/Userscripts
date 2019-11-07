// ==UserScript==
// @name         Dark theme for Odoo
// @icon         http://github.com/Maurin3/Userscripts/blob/master/images/doo.png?raw=true
// @namespace    https://github.com/Maurin3
// @version      0.3.0
// @description  Make all odoo.com domains dark (local version too)
// @author       Maurin3
// @match        https://www.*.odoo.com/web*
// @match        https://www.*.dev.odoo.com/web*
// @match        https://*.odoo.com/web*
// @include      /^http://[0-9]{6}\-[a-z0-9]{2}\-0\-[a-z0-9]{6}\.runbot[0-9]{2}\.odoo\.com/web(.*)$/
// @match        https://www.odoo.com/web*
// @match        http://localhost:8069/web*
// @match        http://localhost/web*
// @run-at       document-start
// @grant        GM.getValue
// @grant        GM_getValue
// @grant        GM.setValue
// @grant        GM_setValue
// @downloadURL  https://raw.githubusercontent.com/Maurin3/Userscripts/master/dark-odoo.user.js
// @updateURL    https://raw.githubusercontent.com/Maurin3/Userscripts/master/dark-odoo.user.js
// ==/UserScript==

(async () => {
    'use strict';
    var defaults = {'dark' : false};
    let data = {};

    function setStyle(element){
        element.style.height = '46px';
        element.style.padding = '0 10px';
        element.style.lineHeight = '46px';
        element.style.textAlign = 'left';
    }

    async function getData(){
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
        let darkMode = document.getElementsByClassName('o_dark_mode');
        if (darkMode.length == 0){
            let darkMode = document.createElement('li');
            darkMode.classList.add('o_dark_mode');
            let clickable = document.createElement('span');
            setStyle(clickable);
            await getData();
            if (!data.dark){
                clickable.classList.add('fa', 'fa-moon-o');
            }
            else{
                clickable.classList.add('fa', 'fa-sun-o');
            }
            setTimeout(function () {
                let debugMenu = document.getElementsByClassName('o_menu_systray');
                let elemMenu = document.getElementsByClassName('o_mail_systray_item');
                if (debugMenu.length > 0){
                    darkMode.appendChild(clickable);
                    debugMenu[0].insertBefore(darkMode, elemMenu[0]);
                }
            }, 3600);
            clickable.addEventListener('click', addCss, false);
            if (data.dark){
                 dark(clickable);
            }
        }
    }

    var css = [
            "body{",
            "    background-color: #222222;",
            "    color: #bfbfbf;",
            "}",
            "h1, h2, h3, h4, h5,",
            ".h1, .h2, .h3, .h4, .h5 {",
            "    color: #FFFFFF;",
            "}",
            "pre {",
            "    color: #bfbfbf;",
            "}",
            "a:hover{",
            "    color: #00b3b0;",
            "}",
            ".btn.btn-secondary.o_arrow_button{",
            "    background-color: #222222;",
            "    border-color: #222222;",
            "}",
            ".btn-secondary{",
            "    background-color: #222222;",
            "    border-color: #222222;",
            "}",
            ".btn-secondary.disabled{",
            "    background-color: #222222;",
            "    border-color: #222222;",
            "    color: #666666;",
            "}",
            ".btn-primary{",
            "    color: #222222;",
            "}",
            ".btn-primary:hover,",
            ".btn-primary:not(:disabled):not(.disabled):active{",
            "    background-color: #00b3b0;",
            "    color: #222222;",
            "}",
            ".btn-secondary:hover,",
            ".btn-secondary:not(:disabled):not(.disabled):active{",
            "    background-color: #222222;",
            "    border-color: #222222;",
            "    color: #FFFFFF;",
            "}",
            ".btn-primary:hover{",
            "    color: #0d0d0d;",
            "}",
            ".fa{",
            "    color: #bfbfbf;",
            "}",
            ".o_main_navbar .fa{",
            "    color: #FFFFFF;",
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
            ".ui-autocomplete,",
            ".ui-autocomplete .ui-menu-item {",
            "    background-color: #222222;",
            "    color: #dfdfdf;",
            "}",
            ".ui-autocomplete .ui-menu-item:active {",
            "    background-color: #222222;",
            "    color: #FFFFFF;",
            "}",
            ".ui-autocomplete .ui-menu-item.ui-state-focus,",
            ".ui-autocomplete .ui-menu-item.ui-state-focus > a {",
            "    background-color: #000000;",
            "    color: #FFFFFF;",
            "}",
            ".ui-autocomplete .ui-menu-item:hover {",
            "    background-color: #000000;",
            "    color: #FFFFFF;",
            "}",
            ".btn-link:hover{",
            "    color: #00b3b0;",
            "}",
            ".btn-secondary:not(:disabled):not(.disabled).active{",
            "    background-color: rgba(255, 255, 255, 0.25);",
            "    color: #FFFFFF;",
            "    border-color: #222222;",
            "}",
            ".btn-outline-secondary{",
            "    background-color: #222222;",
            "    color: #FFFFFF;",
            "    border-color: #bfbfbf;",
            "}",
            ".alert-danger {",
            "    background-color: #240f0f;",
            "    color: #c78785;",
            "    border-color: #d0352f;",
            "}",
            ".alert-warning {",
            "    background-color: #2e2705;",
            "    color: #d3ad78;",
            "    border-color: #eb9114;",
            "}",
            ".alert-info {",
            "    background-color: #0e1f25;",
            "    color: #92b0b9;",
            "    border-color: #469ab9;",
            "}",
            ".o_notification{",
            "    background-color: #59550d !important;",
            "    color: #bfbfbf;",
            "}",
            ".o_notification_manager .o_notification .o_close,",
            ".o_notification_manager .o_notification .o_icon{",
            "    color: rgba(255, 255, 255, 0.3) !important;",
            "}",
            "header {",
            "    background-color: #875A7B;",
            "}",
            // Modals
            ".modal-header,",
            ".modal-footer{",
            "    background-color: #222222;",
            "    color: #FFFFFF;",
            "    border-color: #808080;",
            "}",
            ".modal-body,",
            ".modal-content{",
            "    background-color: #222222;",
            "    color: #bfbfbf;",
            "}",
            // Chatter
            ".close,",
            ".o_thread_message .o_mail_discussion,",
            ".o_attachment,",
            ".o_chatter_topbar,",
            ".o_form_view > .oe_chatter,",
            ".o_mail_thread .o_mail_thread_content,",
            ".o_thread_message .o_mail_discussion strong,",
            ".o_chatter .oe_chatter,",
            ".o_thread_window .o_mail_thread,",
            ".o_thread_composer .o_composer {",
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
            ".o_content,",
            ".o_mail_thread .o_thread_date_separator .o_thread_date,",
            ".o_thread_window .o_mail_thread .o_thread_date_separator .o_thread_date {",
            "    background-color: #222222;",
            "    color: #bfbfbf;",
            "}",
            ".o_followers .o_followers_actions .o_followers_follow_button {",
            "    color: #bfbfbf;",
            "}",
            ".o_mail_discuss .o_mail_discuss_content .o_mail_thread,",
            ".o_thread_composer,",
            ".o_thread_composer:not(.o_chat_mini_composer):not(.o_chat_inline_composer) .o_composer_container,",
            ".o_mail_discuss .o_mail_discuss_content .o_mail_thread, .o_thread_composer,",
            ".o_mail_activity .o_thread_date_separator .o_thread_date,",
            ".o_mail_chatter_attachments .o_chatter_attachment .o_border_dashed .o_attach_title {",
            "    background-color: #222222;",
            "    color: #bfbfbf;",
            "}",
            ".o_mail_preview{",
            "    background-color: #222222;",
            "}",
            ".o_mail_preview:hover{",
            "    background-color: rgba(255, 255, 255, 0.15);",
            "}",
            "o_mail_preview:hover .o_preview_name{",
            "    color: #FFFFFF;",
            "}",
            ".o_chatter.o_chatter_composer_active .o_chatter_topbar > .btn.o_active {",
            "    color: #222222;",
            "    background-color: #875A7B;",
            "}",
            ".o_mail_activity .o_thread_message .o_thread_message_core .o_mail_info strong {",
            "    color: #bfbfbf;",
            "}",
            ".o_mail_preview .o_preview_info .o_preview_title {",
            "    color: #FFFFFF;",
            "}",
            ".o_mail_preview:hover .o_preview_name {",
            "    color: #FFFFFF;",
            "}",
            ".o_chatter_topbar .fa{",
            "    color: #008784;",
            "}",
            ".o_chatter_topbar .btn.btn-link:hover .fa{",
            "    color: #00b3b0;",
            "}",
            ".o_mail_preview.o_preview_unread:hover {",
            "    background-color: rgba(135, 90, 123, 0.5);",
            "}",
            ".o_mail_preview .o_mail_preview_image .o_user_online.fa{",
            "    color: #00A09D;",
            "}",
            ".o_mail_preview .o_mail_preview_image .o_user_idle.fa{",
            "    color: #F0AD4E;",
            "}",
            ".o_thread_window .o_out_of_office {",
            "    background-color: #0e1f25;",
            "    color: #92b0b9;",
            "}",
            // Control Panel
            ".o_control_panel{",
            "    background-color: #0d0d0d;",
            "    color: #bfbfbf;",
            "    border-color: #bfbfbf;",
            "}",
            ".o_control_panel .btn-primary,",
            ".o_control_panel .btn-primary:hover,",
            ".o_control_panel .btn-primary:active{",
            "    color: #0d0d0d;",
            "    border-color: #0d0d0d;",
            "}",
            ".o_dropdown_toggler_btn {",
            "    color: #bfbfbf;",
            "}",
            ".o_control_panel .btn-secondary,",
            ".o_control_panel .btn-secondary.disabled,",
            ".o_control_panel .btn-secondary.disabled:hover{",
            "    background-color: transparent;",
            "    border-color: #0d0d0d;",
            "}",
            ".o_control_panel .btn-secondary:hover,",
            ".o_control_panel .btn-secondary:active,",
            ".o_control_panel .btn-secondary:not(:disabled):not(.disabled):active{",
            "    background-color: #222222;",
            "    border-color: #222222;",
            "    color: #FFFFFF;",
            "}",
            ".breadcrumb,",
            ".breadcrumb-item.active,",
            ".o_dropdown, .dropdown-item,",
            ".o_dropdown_menu .o_menu_item > .dropdown-item{",
            "    background-color: #0d0d0d;",
            "    color: #bfbfbf;",
            "}",
            ".dropdown-item:active,",
            ".dropdown-item:focus,",
            ".dropdown-item:hover,",
            ".o_dropdown_menu .o_menu_item > .dropdown-item:hover{",
            "    background-color: rgba(255, 255, 255, 0.05);",
            "    color: #bfbfbf;",
            "}",
            ".o_dropdown_toggler_btn:hover,",
            ".o_dropdown_toggler_btn:hover:active,",
            ".o_dropdown_toggler_btn:focus,",
            ".o_dropdown_toggler_btn:focus:active,",
            ".o_dropdown_toggler_btn:active, .show > .o_dropdown_toggler_btn.dropdown-toggle,",
            ".show > .o_dropdown_toggler_btn.dropdown-toggle:active,",
            ".show > .o_dropdown_toggler_btn.dropdown-toggle:hover,",
            ".show > .o_dropdown_toggler_btn.dropdown-toggle:hover:active,",
            ".show > .o_dropdown_toggler_btn.dropdown-toggle:focus,",
            ".show > .o_dropdown_toggler_btn.dropdown-toggle:focus:active{",
            "    color: #FFFFFF;",
            '}',
            ".dropdown-menu{",
            "    background-color: #0d0d0d;",
            "    color: #bfbfbf;",
            "    border-color: #bfbfbf;",
            "}",
            ".o_cp_searchview,",
            ".o_searchview_facet, .o_searchview .o_searchview_input_container .o_searchview_input,",
            ".o_cp_searchview .o_searchview_facet{",
            "    background-color: #0d0d0d;",
            "    color: #bfbfbf;",
            "}",
            ".o_input.o_searchview_extended_prop_field > option,",
            ".o_input.o_searchview_extended_prop_op > option,",
            ".o_input o_group_selector.o_add_group > option{",
            "    background-color: #0d0d0d;",
            "    color: #bfbfbf;",
            "}",
            ".o_chatter_topbar > .btn.btn-link:hover{",
            "    color: #00b3b0;",
            "}",
            ".o_followers .o_followers_actions .dropdown-toggle{",
            "    opacity: 1;",
            "}",
            ".o_control_panel .o_statusbar_buttons{",
            "    background-color: #0d0d0d;",
            "}",
            ".o_add_condition .fa{",
            "    color: #00A09D;",
            "}",
            ".o_add_condition:hover .fa{",
            "    color: #FFFFFF;",
            "}",
            // List view
            ".o_list_view,",
            ".o_list_view tfoot{",
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
            ".o_list_view tbody tr:focus-within {",
            "    background-color: #222222;",
            "    color: #ffffff;",
            "}",
            ".o_list_view .o_column_sortable.o-sort-up,",
            ".o_list_view .o_column_sortable.o-sort-down {",
            "    color: #FFFFFF;",
            "}",
            // Form view
            ".o_form_view, ",
            ".o_form_sheet_bg,",
            ".o_form_sheet,",
            ".o_form_statusbar,",
            ".o_form_label,",
            ".o_form_view .o_form_sheet_bg > .o_form_sheet,",
            ".o_form_view .o_form_sheet_bg{",
            "    background-color: #222222;",
            "    color: #bfbfbf;",
            "}",
            ".o_form_view .o_form_statusbar,",
            ".o_form_view .o_form_statusbar > .o_statusbar_status,",
            ".o_form_view .o_form_statusbar > .o_statusbar_status > .o_arrow_button{",
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
            ".o_form_view .o_form_statusbar > .o_statusbar_status > .o_arrow_button.btn-primary.disabled{",
            "    background-color: #875a7b;",
            "    border-color: #bfbfbf;",
            "    color: #FFFFFF;",
            "}",
            ".o_form_view .o_form_statusbar > .o_statusbar_status > .o_arrow_button.btn-primary.disabled:before,",
            ".o_form_view .o_form_statusbar > .o_statusbar_status > .o_arrow_button.btn-primary.disabled:after {",
            "    border-left-color: #875a7b;",
            "}",
             ".o_form_view .o_form_statusbar > .o_statusbar_status > .o_arrow_button:not(.disabled):hover{",
            "    background-color: #00A09D;",
            "    border-color: #bfbfbf;",
            "    color: #FFFFFF;",
            "}",
            ".o_form_view .o_form_statusbar > .o_statusbar_status > .o_arrow_button:not(.disabled):hover:after,",
            ".o_form_view .o_form_statusbar > .o_statusbar_status > .o_arrow_button:not(.disabled):active:after,",
            ".o_form_view .o_form_statusbar > .o_statusbar_status > .o_arrow_button:not(.disabled):focus:after {",
            "    border-left-color: #00A09D;",
            "}",
            ".o_form_view .o_notebook > .nav.nav-tabs > .nav-item > .nav-link.active,",
            ".o_form_view .o_notebook > .nav.nav-tabs > .nav-item > .nav-link.active:focus,",
            ".o_form_view .o_notebook > .nav.nav-tabs > .nav-item > .nav-link.active:hover{",
            "    background-color: #875A7B;",
            "    color: #222222;",
            "    border-top: 1px solid #bfbfbf;",
            "    border-bottom: 1px solid #bfbfbf;",
            "}",
            ".o_form_view .o_notebook > .nav.nav-tabs > .nav-item > .nav-link{",
            "    background-color: #222222;",
            "    color: #bfbfbf;",
            "}",
            ".o_form_view .o_notebook > .nav.nav-tabs > .nav-item > .nav-link:hover{",
            "    background-color: #00A09D;",
            "    color: #222222;",
            "}",
            ".o_form_view .o_notebook > .nav.nav-tabs > .nav-item > .nav-link{",
            "    background-color: #222222;",
            "}",
            ".o_input,",
            ".o_form_view .oe_button_box .btn.oe_stat_button{",
            "    background-color: transparent;",
            "    color: #bfbfbf;",
            "}",
            ".o_list_view .o_data_row.o_selected_row > .o_data_cell:not(.o_readonly_modifier) .o_input,",
            ".o_view_nocontent .o_nocontent_help > p:first-of-type {",
            "    background-color: #222222;",
            "    border-color: #222222;",
            "    color: #bfbfbf;",
            "}",
            ".o_view_nocontent .o_nocontent_help > p:first-of-type{",
            "    background-color: transparent;",
            "    border-color: #222222;",
            "    color: #bfbfbf;",
            "}",
            ".o_form_view .o_form_uri:hover{",
            "    color: #00b3b0;",
            "}",
            ".o_form_view .oe_button_box .btn.oe_stat_button:hover,",
            ".o_form_view .oe_button_box .btn.oe_stat_button:focus {",
            "    background-color: rgba(0, 0, 0, 0.25);",
            "    color: #FFFFFF;",
            "}",
            // Make an Exception to HTML fields (they are fully customisable)
            // And I suppose they are only in form views
            ".note-editor .note-toolbar{",
            "    background-color: #222222;",
            "    color: #bfbfbf;",
            "}",
            ".note-editor .note-toolbar > .btn-group .btn-group.show .dropdown-toggle{",
            "    background-color: rgba(255, 255, 255, 0.05) !important;",
            "}",
            ".o_form_view .o_notebook > .tab-content > .tab-pane > :first-child.oe_form_field_html,",
            ".o_form_view .o_notebook > .tab-content > .tab-pane > :first-child.oe_form_field_html pre,",
            ".o_form_view .o_notebook > .tab-content > .tab-pane > :first-child.oe_form_field_html_text{",
            "    background-color: #ffffff !important;",
            "    color: #000000 !important;",
            "}",
            ".note-editor .note-toolbar .dropdown-menu > .dropdown-item {",
            "   color: #666666 !important;",
            "    background-color: #ffffff;",
            "}",
            ".note-editor .note-toolbar .dropdown-menu > .dropdown-item > h1,",
            ".note-editor .note-toolbar .dropdown-menu > .dropdown-item > h2,",
            ".note-editor .note-toolbar .dropdown-menu > .dropdown-item > h3,",
            ".note-editor .note-toolbar .dropdown-menu > .dropdown-item > h4,",
            ".note-editor .note-toolbar .dropdown-menu > .dropdown-item > h5,",
            ".note-editor .note-toolbar .dropdown-menu > .dropdown-item > h6 {",
            "   color: #666666 !important;",
            "}",
            ".o_form_view .o_notebook > .tab-content > .tab-pane > :first-child.oe_form_field_html_text .note-toolbar.panel-heading {",
            "    background-color: #222222;",
            "}",
            ".o_form_view .o_notebook > .tab-content > .tab-pane > :first-child.oe_form_field_html_text .note-toolbar.panel-heading .btn-secondary {",
            "    background-color: #222222;",
            "    border-color: #222222;",
            "}",
            ".o_form_view .o_notebook > .tab-content > .tab-pane > :first-child.oe_form_field_html_text .note-toolbar.panel-heading .btn-secondary:hover {",
            "    background-color: #222222;",
            "    border-color: #222222;",
            "    color: #008784;",
            "}",
            ".o_form_view .o_notebook > .tab-content > .tab-pane > :first-child.oe_form_field_html_text .note-toolbar.panel-heading .btn-secondary .fa:hover {",
            "    color: #008784;",
            "}",
            ".note-editor .note-toolbar .dropdown-menu .note-btn:hover {",
            "    background-color: #ffffff !important;",
            "    color: #000000 !important;",
            "}",
            ".panel-heading.note-toolbar .dropdown-menu,",
            ".panel-heading.note-toolbar .dropdown-menu > li{",
            "    background-color: #ffffff !important;",
            "    color: #000000;",
            "}",
            ".note-editor .note-color .dropdown-menu {",
            "    background-color: #ffffff !important;",
            "    color: #000000;",
            "}",
            ".oe_form_field_html h1,",
            ".oe_form_field_html h2,",
            ".oe_form_field_html h3,",
            ".oe_form_field_html h4,",
            ".oe_form_field_html h5{",
            "    background-color: initial;",
            "    color: initial;",
            "}",
            ".ace-tm .ace_meta.ace_tag {",
            "    color: rgb(128, 147, 255) !important;",
            "}",
            ".ace-tm .ace_string {",
            "    color: rgb(156, 252, 159) !important;",
            "}",
            ".ace-tm, .ace-tm .ace_keyword.ace_operator {",
            "    background-color: #222222 !important;",
            "    color: #dfdfdf !important;",
            "}",
            ".ace-tm .ace_storage, .ace-tm .ace_keyword {",
            "    color: dodgerblue !important;",
            "}",
            ".ace-tm .ace_constant.ace_language {",
            "    color: darkturquoise !important;",
            "}",
            ".ace-tm .ace_cursor {",
            "    color: #dfdfdf !important;",
            "}",
            ".note-style.btn-group > div > ul,",".note-style.btn-group > div > ul > li,",".note-style.btn-group > div > ul > li > a {",
            "    color: initial;",
            "    background-color: initial;",
            "}",
            // ".note-fontsize.btn-group > div > div"
            // ".note-fore-color-preview.mx-1 > ul"
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
            "    background-color: rgba(0, 0, 0, 0.25) !important;",
            "    border-bottom: 1px solid #bfbfbf;",
            "}",
            ".o_kanban_view .o_kanban_record,",
            ".o_kanban_view .o_kanban_quick_create,",
            ".o_kanban_view .o_kanban_group.o_column_folded {",
            "    background-color: rgba(0, 0, 0, 0.25);",
            "}",
            ".o_kanban_view .o_kanban_record .o_kanban_record_title,",
            ".o_kanban_view .o_kanban_group .o_kanban_header > .o_kanban_header_title,",
            ".o_kanban_counter > .o_kanban_counter_side,",
            ".o_kanban_view .o_column_quick_create .o_column_header,",
            ".o_kanban_view.o_kanban_dashboard .o_kanban_record .o_kanban_primary_left .o_primary > span:first-child,",
            ".o_kanban_view.o_kanban_dashboard .o_kanban_record .o_kanban_card_header_title .o_primary{",
            "    color: #FFFFFF;",
            "}",

            // Accounting Dashboard
            "svg text{",
            "    fill: currentColor;",
            "}",
            "svg .o_dashboard_graph.o_graph_barchart > svg g.nv-barsWrap g.nv-group.nv-series-0 g.past{",
            "    opacity: 0.70;",
            "}",
            // Website Dashboard
            ".o_dashboard_view,",
            ".o_graph .o_graph_container .o_graph_svg_container svg {",
            "    background-color: #222222 !important;",
            "}",
            ".o_dashboard_view .o_group .o_aggregate > label {",
            "   color: #FFFFFF;",
            "}",
            ".nvd3 .nv-axis line{",
            "    stroke: #666666 !important;",
            "}",
            ".nvd3-svg .nv-axis text,",
            ".nvd3 text {",
            "    fill: #FFFFFF !important;",
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
            // Calendar view
            ".fc-unthemed tbody {",
            "    background-color: #222222;",
            "}",
            ".o_calendar_container .o_calendar_view .o_calendar_widget .fc-week-number,",
            ".o_calendar_container .o_calendar_view .o_calendar_widget .fc-widget-header {",
            "    background-color: rgba(0, 0, 0, 0.35);",
            "}",
            ".o_calendar_container .o_calendar_sidebar_container .o_calendar_sidebar {",
            "    background-color: #222222;",
            "}",
            ".o_calendar_container .o_calendar_color_6 {",
            "    background-color: #2a4d00;",
            "    border-color: #2a4d00;",
            "    opacity: 0.9;",
            "    color: #bfbfbf !important;",
            "}",
            ".o_calendar_container .o_calendar_color_6:hover {",
            "    color: #FFFFFF !important;",
            "}",
            ".ui-datepicker table {",
            "    background-color: #222222;",
            "    color: #bfbfbf;",
            "}",
            ".ui-widget-content {",
            "    background-color: #222222 !important;",
            "    color: #bfbfbf;",
            "}",
            ".o_calendar_container .o_calendar_sidebar_container .ui-datepicker .ui-widget-header {",
            "    background-color: #000000;",
            "    border-color: #000000;",
            "    color: #ffffff;",
            "}",
            ".o_calendar_container .o_calendar_sidebar_container .ui-datepicker table td {",
            "    background-color: #000000;",
            "}",
            ".o_calendar_container .o_calendar_sidebar_container .ui-datepicker table td a {",
            "    background-color: #222222;",
            "    border-color: #bfbfbf;",
            "}",
            ".o_calendar_container .o_calendar_sidebar_container .ui-datepicker table .o_selected_range.o_color {",
            "    background-color: #222222;",
            "    border-color: #bfbfbf;",
            "    animation: backgroundfade 3s backwards reverse;",
            "}",
            ".fc-unthemed .fc-today {",
            "    background-color: #875a7b !important;",
            "}",
            // Pivot view
            ".o_pivot table,",
            ".o_pivot table th,",
            ".o_pivot table .o_pivot_header_cell_closed,",
            ".o_pivot table .o_pivot_header_cell_opened {",
            "    background-color: #222222 !important;",
            "}",
            ".o_pivot table .o_pivot_measure_row:hover,",
            ".o_pivot table .o_pivot_header_cell_closed:hover,",
            ".o_pivot table .o_pivot_header_cell_opened:hover{",
            "    background-color: rgba(0, 0, 0, 0.25) !important;",
            "}",
            //special : container o_stock_reports_page o_stock_reports_no_print
            // Special
            ".o_lunch_kanban .o_lunch_kanban_banner,",
            ".o_kanban_with_searchpanel .o_search_panel,",
            ".list-group-item {",
            "    background-color: #222222;",
            "    color: #bfbfbf;",
            "}",
            ".o_kanban_with_searchpanel .o_search_panel .list-group-item span.o_search_panel_label_title {",
            "    color: #bfbfbf;",
            "}",
            ".o_kanban_with_searchpanel .o_search_panel .list-group-item header.active {",
            "    background-color: rgba(0, 0, 0, 0.25);",
            "}",
            ".bg-white {",
            "   background-color: #222222 !important;",
            "    color: #bfbfbf;",
            "}",
            ".list-group-item-action:hover,",
            ".list-group-item-action:focus {",
            "   background-color: rgba(0, 0, 0, 0.25); !important;",
            "    color: #bfbfbf;",
            "}",
            ".o_documents_kanban .o_documents_selector .list-group-item span.o_docs_label_title{",
            "    color: #bfbfbf;",
            "}",
            ".o_documents_kanban .o_documents_selector .list-group-item header.active{",
            "    background-color: #000000;",
            "}",
            ".o_list_view.o_list_view_grouped > tbody > tr.o_group_header {",
            "   background-color: #000000;",
            "    color: #bfbfbf !important;",
            "}",
            ".o_list_view.o_list_view_grouped > tbody > tr.o_group_header.o_group_has_content.o_group_open {",
            "    color: #999999 !important;",
            "}",
            "#o_employee_right .o_org_chart_group_up .o_org_chart_entry:last-of-type:before {",
            "    background-color: #222222;",
            "    border: 1px solid #bfbfbf;",
            "    border-width: 0 0 1px 1px;",
            "}",
            "#o_employee_right .o_org_chart_group_up:before {",
            "    border: 1px solid #bfbfbf;",
            "}",
            "#o_employee_right .o_org_chart_group_down .o_org_chart_entry:before {",
            "    background-color: #222222;",
            "    border: 0px solid #bfbfbf;",
            "    border-top-width: 1px;",
            "}",
            ".o_media_object.rounded-circle.o_employee_redirect{",
            "    background-color: #222222;",
            "}",
            // Studio
            ".o_web_studio_menu .o_web_studio_breadcrumb > ol > li.active:not(:first-child) {",
            "    background-color: initial;",
            "}",
            ".o_web_studio_editX2Many.btn {",
            "    color: #dfdfdf;",
            "}",
            ".o_in_studio header{",
            "    background-color: #262C34;",
            "}",
    ].join("\n");

    window.onload = await init();

    async function addCss(ev){
        var clickable = document.getElementsByClassName('o_dark_mode')[0].lastChild;
        await getData();
        if (!data.dark || clickable.classList.contains('fa-moon-o')){
            dark(clickable);
            await GM.setValue("data", JSON.stringify({ 'dark': true }));
        }
        else{
            light(clickable);
            await GM.setValue("data", JSON.stringify({ 'dark': false }));
        }
    }

    function dark(clickable){
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

    function light(clickable){
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
})();