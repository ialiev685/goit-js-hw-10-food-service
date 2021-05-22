import templateOrderEat from "./templates/service-order-eat.hbs";
import menu from "./menu.json";

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const markup = templateOrderEat(menu);

const refs = {
  checkboxEl: document.querySelector("#theme-switch-toggle"),
  listEl: document.querySelector(".js-menu"),
  bodyEl: document.body,
};

setBackgroud();

refs.checkboxEl.addEventListener("change", onInputCheck);
refs.listEl.insertAdjacentHTML("beforeend", markup);

function onInputCheck(event) {
  if (event.target.checked) {
    saveDataLocalStorage(Theme.DARK);
  } else {
    saveDataLocalStorage(Theme.LIGHT);
  }
}

function saveDataLocalStorage(backgorund) {
  localStorage.setItem("theme", backgorund);
  setBackgroud();
}

function setBackgroud() {
  if (!localStorage.getItem("theme")) return;

  refs.bodyEl.removeAttribute("class");

  const classBody = localStorage.getItem("theme");

  if (classBody === Theme.LIGHT) refs.checkboxEl.checked = false;
  if (classBody === Theme.DARK) refs.checkboxEl.checked = true;

  refs.bodyEl.classList.add(classBody);
}
