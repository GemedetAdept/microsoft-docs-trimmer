// ==UserScript==
// @name         Microsoft Documentation Trimmer
// @namespace    https://github.com/GemedetAdept
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://learn.microsoft.com/en-us/powershell/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=microsoft.com
// @grant        GM_registerMenuCommand
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