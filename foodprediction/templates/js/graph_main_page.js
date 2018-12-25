
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
          labels: ["carbohydrates", "proteins", "fats"],
          datasets: [{
              label: "Nutrients",
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [3, 10, 5],
          }]
      },

      // Configuration options go here
      options: {}
  });
