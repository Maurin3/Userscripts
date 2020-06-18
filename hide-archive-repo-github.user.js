// ==UserScript==
// @name         Hide Archived Repos GitHub
// @icon         https://github.githubassets.com/pinned-octocat.svg
// @namespace    https://github.com/Maurin3
// @version      1.1
// @description  Hide archived repositories (private and public) on GitHub
// @author       Maurin3
// @include      https://github.com/*
// @grant        none
// @run-at       document-end
// @downloadURL  https://raw.githubusercontent.com/Maurin3/Userscripts/master/hide-archive-repo-github.user.js
// @updateURL    https://raw.githubusercontent.com/Maurin3/Userscripts/master/hide-archive-repo-github.user.js
// ==/UserScript==

(function() {
    'use strict';
    function removeArchived(){
        if(new RegExp("^https:\/\/github\.com\/.+\\?tab=repositories$").test(document.location.href)){
            var observer = new MutationObserver(function () {
                let archivedRepos = document.getElementsByClassName('archived');
                if (archivedRepos.length > 0) {
                    // It exists now
                    for(let repo of archivedRepos){
                        repo.classList.add('d-none');
                    }
                    observer.disconnect();
                }
            });
            observer.observe(document.documentElement, { childList: true, subtree: true });
        }
    }

    window.onload = function() {
        removeArchived();
    }
    window.onbeforeunload = function() {
        removeArchived();
    }
})();