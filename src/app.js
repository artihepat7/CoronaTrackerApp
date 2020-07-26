import { chartprint } from "./chart";
import { rendering } from "./rendering";
import './app.css'

const Total = document.getElementById("total");
const totNumber = Total.querySelector("div");
const Active = document.getElementById("active");
const activeNumber = Active.querySelector("div");
const Recovered = document.getElementById("recovered");
const recNumber = Recovered.querySelector("div");
const Deaths = document.getElementById("deaths");
const deathsNumber = Deaths.querySelector("div");
const tableDiv = document.getElementById("table");

export function fetcheDataFromApi() {
  return fetch("https://api.covid19india.org/data.json").then((response) => {
    return response.json();
  });
}

async function getData() {
  const data = await fetcheDataFromApi();

  console.log(data.statewise);
  totNumber.textContent = data.statewise[0].confirmed;
  activeNumber.textContent = data.statewise[0].active;
  recNumber.textContent = data.statewise[0].recovered;
  deathsNumber.textContent = data.statewise[0].deaths;
}

getData();

rendering();

window.onload = chartprint;
