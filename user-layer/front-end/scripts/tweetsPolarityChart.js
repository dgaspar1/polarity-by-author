var ctx;
var chart;
document.addEventListener('DOMContentLoaded', function() {
    const mockData = [
      { createdAt: '2023-03-22T10:00:00Z', polarity: 0.8 },
      { createdAt: '2023-03-22T12:00:00Z', polarity: 0.6 },
      { createdAt: '2023-03-22T14:00:00Z', polarity: -0.2 },
      { createdAt: '2023-03-22T16:00:00Z', polarity: 0.4 },
      { createdAt: '2023-03-22T18:00:00Z', polarity: -0.5 }
    ];

    const createdAt = mockData.map(item => new Date(item.createdAt));
    const polarity = mockData.map(item => item.polarity);

    ctx = document.getElementById('chart').getContext('2d');
    chart = new Chart(ctx, {
      type: 'scatter',
      data: {
        labels: [],
        datasets: [{
          label: 'Dispersão de Polarity por Data',
          data: createdAt.map((date, index) => ({ x: date, y: polarity[index] })),
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          showLine: false
        }]
      },
      options: {
        scales: {
          y: {
            ticks: {
              callback: function(value, index, values) {
                return value > 0 ? 'Positivo' : 'Negativo';
              }
            }
          }
        }
      }
    });
  });