import { fetcheDataFromApi } from "./app";

export function rendering() {
  fetcheDataFromApi().then((data) => {
    console.log(data.statewise);
    let col = [];
    for (let i = 0; i < data.statewise.length; i++) {
      for (let key in data.statewise[i]) {
        // console.log(key);

        if (col.indexOf(key) === -1 && key === "confirmed") {
          col.unshift(key);
          console.log(key.toUpperCase);
        }
        if (col.indexOf(key) === -1 && key === "recovered") {
          col.push(key);
        }
        if (col.indexOf(key) === -1 && key === "deaths") {
          col.push(key);
        }
        if (col.indexOf(key) === -1 && key === "state") {
          col.unshift(key);
        }
        if (col.indexOf(key) === -1 && key === "active") {
          col.push(key);
        }
      }
    }

    console.log(col.splice(3, 1, "recovered"));
    console.log(col.splice(4, 1, "deaths"));
    console.log(col);

    const table = document.createElement("table");
    const tr = table.insertRow(-1);
    for (let i = 0; i < col.length; i++) {
      //const th = tr.insertCell(-1);
      const th = document.createElement("th");
      th.textContent = col[i].toUpperCase();
      tr.append(th);
    }

    for (let i = 1; i < data.statewise.length; i++) {
      const tr = table.insertRow(-1);
      for (let j = 0; j < col.length; j++) {
        const td = tr.insertCell(-1);
        td.textContent = data.statewise[i][col[j]];
      }
    }

    const showtable = document.getElementById("showData");

    showtable.append(table);
  });
}
