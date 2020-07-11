const Total = document.getElementById("total");
const totNumber = Total.querySelector("div");
const Active = document.getElementById("active");
const activeNumber = Active.querySelector("div");
const Recovered = document.getElementById("recovered");
const recNumber = Recovered.querySelector("div");
const Deaths = document.getElementById("deaths");
const deathsNumber = Deaths.querySelector("div");
const tableDiv = document.getElementById("table");

function fetched() {
  return fetch("https://api.covid19india.org/data.json");
}

async function getData() {
  const response = await fetched();
  const data =await response.json()
    
      console.log(data.statewise);
      totNumber.textContent = data.statewise[0].confirmed;
      activeNumber.textContent = data.statewise[0].active;
      recNumber.textContent = data.statewise[0].recovered;
      deathsNumber.textContent = data.statewise[0].deaths;
   
}

getData();

