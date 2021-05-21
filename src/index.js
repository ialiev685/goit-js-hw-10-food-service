const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const refs = {
  checkboxEl: document.querySelector("#theme-switch-toggle"),
  bodyEl: document.body,
};

refs.checkboxEl.addEventListener("change", onInputCheck);

function onInputCheck(event) {
  if (event.target.checked) {
    saveDataLocalStorage(Theme.DARK);
  } else {
    saveDataLocalStorage(Theme.LIGHT);
  }
}

function saveDataLocalStorage(backgorund) {
  removePrevBackgound();
  localStorage.setItem("theme", backgorund);
  setBackgroud();
}

function removePrevBackgound() {
  if (!localStorage.getItem("theme")) return;
  const prevClass = localStorage.getItem("theme");

  refs.bodyEl.classList.remove(prevClass);
}

function setBackgroud() {
  if (!localStorage.getItem("theme")) return;
  const classBody = localStorage.getItem("theme");

  if (classBody === Theme.LIGHT) refs.checkboxEl.checked = false;
  if (classBody === Theme.DARK) refs.checkboxEl.checked = true;

  refs.bodyEl.classList.add(classBody);
}

setBackgroud();
