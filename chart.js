window.onload = function () {
  var dataPoints = [];

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: " Total Corona Cases in India",
    },
    axisY: {
      title: "Corona Cases",
      titleFontSize: 30,
    },
    axisX: {
      title: "Months",
      titleFontSize: 30,
      valueFormatString: "DD MMM 2020",
    },
    data: [
      {
        type: "column",
        yValueFormatString: "#,### Units",

        dataPoints: dataPoints,
      },
    ],
  });

  async function addData() {
    const response = await fetcheDataFromApi();
    const data = await response.json();
    console.log(data.cases_time_series);
    for (let i = 62; i < data.cases_time_series.length; i++) {
      console.log(
        data.cases_time_series[i].date,
        data.cases_time_series[i].totalconfirmed
      );

      dataPoints.push({
        x: new Date(data.cases_time_series[i].date),
        y: +data.cases_time_series[i].totalconfirmed,
      });
    }
    console.log(dataPoints);
    chart.render();
  }

  addData();
};
