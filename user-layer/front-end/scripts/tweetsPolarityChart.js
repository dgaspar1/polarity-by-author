document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('chart').getContext('2d');
    var chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan 2015', 'Feb 2015', 'Mar 2015', 'Apr 2015', 'May 2015', 'Jun 2015', 'Jul 2015', 'Aug 2015', 'Sep 2015', 'Oct 2015', 'Nov 2015', 'Dec 2015',
                 'Jan 2016', 'Feb 2016', 'Mar 2016', 'Apr 2016', 'May 2016', 'Jun 2016', 'Jul 2016', 'Aug 2016', 'Sep 2016', 'Oct 2016', 'Nov 2016', 'Dec 2016',
                 'Jan 2017', 'Feb 2017', 'Mar 2017', 'Apr 2017', 'May 2017', 'Jun 2017', 'Jul 2017', 'Aug 2017', 'Sep 2017', 'Oct 2017', 'Nov 2017', 'Dec 2017',
                 'Jan 2018', 'Feb 2018', 'Mar 2018', 'Apr 2018', 'May 2018', 'Jun 2018', 'Jul 2018', 'Aug 2018', 'Sep 2018', 'Oct 2018', 'Nov 2018', 'Dec 2018',
                 'Jan 2019', 'Feb 2019', 'Mar 2019', 'Apr 2019', 'May 2019', 'Jun 2019', 'Jul 2019', 'Aug 2019', 'Sep 2019', 'Oct 2019', 'Nov 2019', 'Dec 2019',
                 'Jan 2020', 'Feb 2020', 'Mar 2020', 'Apr 2020', 'May 2020', 'Jun 2020'],
        datasets: [{
          label: 'Sentimento',
          data: [0.2, 0.3, 0.5, -0.1, -0.3, -0.2, 0.4, 0.6, 0.7, 0.9, 0.8, 0.5,
                 0.7, 0.6, 0.8, 0.5, 0.4, -0.1, -0.2, -0.3, -0.4, -0.2, -0.1, 0.1,
                 0.3, 0.4, 0.5, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.2, 0.1, 0.0,
                 -0.2, -0.3, -0.4, -0.2, -0.1, 0.0, 0.1, 0.2, 0.4, 0.5, 0.6, 0.7,
                 0.6, 0.5, 0.4, 0.2, 0.1, 0.0, -0.1, -0.2, -0.3, -0.2, -0.1, 0.1,
                 0.2, 0.3, 0.5, -0.1, -0.3, -0.2, 0.4, 0.6, 0.7, 0.9, 0.8, 0.5,
                 0.7, 0.6, 0.8, 0.5],
          borderColor: function(context) {
            var value = context.dataset.data[context.dataIndex];
            return value > 0 ? 'green' : 'red';
          },
          fill: false
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