// ==UserScript==
// @name         Microsoft Doc Page Trimmer
// @namespace    https://github.com/GemedetAdept/microsoft-docs-trimmer/
// @version      1.0
// @description  A userscript to remove the sidebars and have adaptive scaling on Microsoft's documentation pages.
// @author       https://github.com/GemedetAdept
// @match        *://learn.microsoft.com/*
// @icon         https://github.com/GemedetAdept/microsoft-docs-trimmer/blob/e7fbe7666d1595155d88729b84bfcdd60d7f1ba0/resources/favicon.png
// @grant        GM_registerMenuCommand
// @license      GNU General Public License v3.0
// ==/UserScript==

var rightContainer = document.getElementById("ms--additional-resources");
rightContainer.remove();

var leftContainer = document.getElementById("left-container");
leftContainer.remove();

var primaryHolder = document.getElementsByClassName("primary-holder column is-two-thirds-tablet is-three-quarters-desktop")[0];
primaryHolder.classList.remove("column");
primaryHolder.classList.remove("is-two-thirds-tablet");
primaryHolder.classList.remove("is-three-quarters-desktop");

var columnHolder = document.getElementsByClassName("columns has-large-gaps is-gapless-mobile ")[0];
columnHolder.classList.add("column-holder");
columnHolder.classList.remove("columns");
columnHolder.classList.remove("has-large-gaps");
columnHolder.classList.remove("is-gapless-mobile");

var mainColumn = document.getElementById("main-column");
mainColumn.classList.remove("is-8-desktop");