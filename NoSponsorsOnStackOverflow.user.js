// ==UserScript==
// @name         No Sponsors on Stack Overflow
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove all sponsorship icons on Stack Overflow
// @author       default locale
// @match        https://stackoverflow.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var tags = document.getElementsByClassName('post-tag');
    tags.forEach(tag => tag.getElementsByTagName('img')[0].remove());
})();
