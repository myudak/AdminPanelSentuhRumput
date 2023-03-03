const dataDonut = {
  labels: ["Organic", "Social Media", "Websites"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

const dataTable = [
  {
    name: "Rona",
    Email: "ronarohmatullah24@gmail.com",
    Location: "Indonesia, Jakarta",
  },
  {
    name: "Awal",
    Email: "awalariansyah7@gmail.com",
    Location: "Indonesia, Jakarta",
  },
  {
    name: "Hervin",
    Email: "hervinabz12@gmail.com",
    Location: "Indonesia, Jakarta",
  },
];

const dataLine = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "User Active/ month",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
    },
  ],
};

export { dataLine, dataDonut, dataTable };
