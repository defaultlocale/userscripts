// ==UserScript==
// @name         No Sponsors for C#
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove a sponsorship icon from C# tags on Stack Overflow
// @author       default locale
// @match        https://stackoverflow.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var cSharpTags = document.querySelectorAll('a[href="/questions/tagged/c%23"]');
    cSharpTags.forEach(tag => tag.getElementsByTagName('img')[0].remove());
})();
