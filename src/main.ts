import { configure } from "onedollarstats";

configure({
  hostname: "alasti.company",
  devmode: false,
});

if (window.location.pathname === "/github" || window.location.pathname === "/github/") {
  window.location.replace("https://github.com/alasti-company");
}

const year = document.querySelector<HTMLElement>("#year");
if (year) year.textContent = String(new Date().getFullYear());
