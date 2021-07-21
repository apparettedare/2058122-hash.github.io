var labels=['January', 'February', 'March', 'April', 'May', 'June'];

var data={
    labels: labels,
    datasets: [{
        label: '初めてのグラフ用データセット',
        borderColor: 'rgb(255,100,130)',
        backgroundColor: 'rgb(150,50,60)',
        data: [0,10,15,3,60,10],
    }]
};


var config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

var lineChart= new Chart(
    document.getElementById('lineChart'),
    config,
);