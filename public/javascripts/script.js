var regras = document.getElementById("regras");

var adicionar = document.getElementById("adicionar");

var remover = document.getElementById("remover");

adicionar.onclick = function () {
  var newField = document.createElement("input");
  newField.setAttribute("type", "text");
  newField.setAttribute("name", "regras[]");
  newField.setAttribute("class", "regras");
  newField.setAttribute("siz", 50);
  newField.setAttribute("placeholder", "Nova Regra");
  regras.appendChild(newField);
};

remover.onclick = function () {
  var input_tags = regras.getElementsByTagName("input");
  if (input_tags.length > 2) {
    regras.removeChild(input_tags[input_tags.length - 1]);
  }
};

var regras2 = document.getElementById("regras2");

var adicionar2 = document.getElementById("adicionar2");

var remover2 = document.getElementById("remover2");

adicionar2.onclick = function () {
  var newField2 = document.createElement("input2");
  newField2.setAttribute("type", "text");
  newField2.setAttribute("name", "regras[]");
  newField2.setAttribute("class", "regras");
  newField2.setAttribute("siz", 50);
  newField2.setAttribute("placeholder", "Nova Regra");
  regras2.appendChild(newField2);
};

remover2.onclick = function () {
  var input_tags2 = regras2.getElementsByTagName("input2");
  if (input_tags2.length > 2) {
    regras2.removeChild(input_tags2[input_tags2.length - 1]);
  }
};

//botoes efeito

const $ = document.querySelector.bind(document);

function TabNavigation() {
  const html = {
    links: [...$(".tab-links").children],
    contents: [...$(".tab-content").children],
    openTab: $("[data-open]"),
    // links: document.querySelector(".tab-links"),
    //contents: document.querySelector(".tab-content"),
  };

  function hideAllTabContent() {
    html.contents.forEach((section) => {
      section.style.display = "none";
    });
  }
  function removeAllActiveClass() {
    html.links.forEach((tab) => {
      tab.className = tab.className.replace(" active", "");
    });
  }
  function showCurrentTab(id) {
    const tabcontent = $("#" + id);
    tabcontent.style.display = "block";
  }
  function selectTab(event) {
    hideAllTabContent();
    removeAllActiveClass();
    const target = event.currentTarget;
    showCurrentTab(target.dataset.id);
    target.className += " active";
  }
  function listenForChange() {
    html.links.forEach((tab) => {
      tab.addEventListener("click", selectTab);
    });
  }
  function init() {
    hideAllTabContent();
    listenForChange();
    html.openTab.click();
  }
  return {
    init,
  };
}

window.addEventListener("load", () => {
  const tabNavigation = TabNavigation();
  tabNavigation.init();
});
