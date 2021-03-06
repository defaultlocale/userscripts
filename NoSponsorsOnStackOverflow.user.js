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

    var images = document.getElementsByClassName('sponsor-tag-img');
    Array.from(images).forEach(image => image.remove());
})();
