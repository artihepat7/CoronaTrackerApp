import { fetcheDataFromApi} from './app'

export function chartprint() {
  var dataPoints = [];

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: " Total Corona Cases in India",
    },
    axisY: {
      title: "Corona Cases",
      titleFontSize: 20,
    },
    axisX: {
      title: "Months",
      titleFontSize: 20,
      valueFormatString: "DD MMM ",
    },
    data: [
      {
        type: "column",
        yValueFormatString: "#,### Units",
        dataPoints: dataPoints,
      },
    ],
  });

  const monthDates = {
    "January": 31,
    "February": 28,
    "March": 31,
    "April": 30,
    "May": 31,
    "June": 30,
    "July": 31,
    "August": 31,
    "September": 30,
    "October": 31,
    "November": 30,
    "December": 31,
  };

  async function addData() {
    //const response = await fetcheDataFromApi();
    const data = await fetcheDataFromApi();
    console.log(data.cases_time_series);
    for (let i = 0; i < data.cases_time_series.length; i++) {
      const words = data.cases_time_series[i].date.split(" ");
      console.log(words); //["31", "January", ""]
      const month = words[1];
      const monthEndDate = monthDates[month];

      if (monthEndDate === +words[0]) {
        dataPoints.push({
          x: new Date(data.cases_time_series[i].date),
          y: +data.cases_time_series[i].totalconfirmed,
        });
      }
    }
    console.log(dataPoints);
    chart.render();
  }

  addData();
};
