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
    list.value = "431";

    var listKurs = document.getElementById("kyrs");
    listKurs.value = "2";

    var listWeek = document.getElementById("srok");
    listWeek.selectedIndex = "1";
};

