export const BarData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales (in USD)",
      data: [4000, 3000, 5000, 7000, 6000, 8000],
      backgroundColor: [
        "rgba(255, 99, 132, 0.8)",
        "rgba(54, 162, 235, 0.8)",
        "rgba(255, 206, 86, 0.8)",
        "rgba(75, 192, 192, 0.8)",
        "rgba(153, 102, 255, 0.8)",
        "rgba(255, 159, 64, 0.8)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 2,
      borderRadius: 6,
      barPercentage: 0.7,
      hoverBackgroundColor: "rgba(0, 0, 0, 0.2)",
    },
  ],
};
