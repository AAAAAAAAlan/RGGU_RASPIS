// ==UserScript==
// @name         Raspis
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.rsuh.ru/raspis/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
let filters = document.querySelector('#filters');

filters.click();

var form = document.getElementsByName("sform")[0];

var button = document.createElement("Button");
button.innerHTML = "Автоввод";
button.style = "margin-left: 6px";
button.type = "button";
form.appendChild(button);

button.onclick = function() {
    var list = document.getElementById("caf");
    list.value = "435";

    var listKurs = document.getElementById("kyrs");
    listKurs.value = "2";

    var listWeek = document.getElementById("srok");
    listWeek.selectedIndex = "1";
};

})();