const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
}

// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");

  // js code to keep user selected mode even page refresh or file reopen
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});

// js code to toggle search box
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

//   js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", (e) => {
  let clickedElm = e.target;

  if (
    !clickedElm.classList.contains("sidebarOpen") &&
    !clickedElm.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});

// menu items

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active-one");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active-one");
    });
    tab.classList.add("active-one");
    target.classList.add("active-one");
  });
});

// !left button js html
function infofunc(e, info) {
  var i, content, links;
  content = document.getElementsByClassName("tabsButton2");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
  links = document.getElementsByClassName("tabsButton");
  for (i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(" tabsButtonActive", "");
  }
  document.getElementById(info).style.display = "block";
  e.currentTarget.className += " tabsButtonActive";
}
document.getElementById("current").click();

// !left button js css
function infofunccss(ec, info) {
  var j, contentcss, linksCss;
  contentcss = document.getElementsByClassName("leftTabsButtoncsscss");
  for (j = 0; j < contentcss.length; j++) {
    contentcss[j].style.display = "none";
  }
  linksCss = document.getElementsByClassName("leftTabsButtoncss");
  for (j = 0; j < linksCss.length; j++) {
    linksCss[j].className = linksCss[j].className.replace(
      " leftTabsButtoncssActive",
      ""
    );
  }
  document.getElementById(info).style.display = "block";
  ec.currentTarget.className += " leftTabsButtoncssActive";
}

// !left button javascript
function infofuncJavascript(ejs, info) {
  var j, contentJavascript, linksJs;
  contentJavascript = document.getElementsByClassName(
    "leftTabsButtonJavascriptJavascript"
  );
  for (j = 0; j < contentJavascript.length; j++) {
    contentJavascript[j].style.display = "none";
  }
  linksJs = document.getElementsByClassName("leftTabsButtonJavascript");
  for (j = 0; j < linksJs.length; j++) {
    linksJs[j].className = linksJs[j].className.replace(
      " leftTabsButtonJavascriptActive",
      ""
    );
  }
  document.getElementById(info).style.display = "block";
  ejs.currentTarget.className += " leftTabsButtonJavascriptActive";
}
document.getElementById("currentJs").click();
document.getElementById("currentCss").click();
// ! gradient color generator
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bodyGradient = document.querySelector(".change");

// Changing color for the gradient
// function changeGradient() {
//   bodyGradient.style.background =
//     "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

//   css.textContent = bodyGradient.style.background + ";";
// }

// color1.addEventListener("input", changeGradient);

// color2.addEventListener("input", changeGradient);
