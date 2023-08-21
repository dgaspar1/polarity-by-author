const filterButton = document.getElementById("filterButton");

function createTableRow(data) {
  var row = document.createElement('tr');
  if(data){
    row.innerHTML = `
      <td>${data.id}</td>
      <td>${data.author}</td>
      <td>${data.text}</td>
      <td>${data.polarity}</td>
      <td>${data.tag}</td>
      <td>${data.createdAt}</td>
    `;
  } else{
    row.innerHTML = '';
  }
  return row;
}

filterButton.addEventListener("click", () => {
    const authorSelectedFieldOptions = authorSelect.selectedOptions;
    const selectedAuthorsValues = [];

    for (const index in authorSelectedFieldOptions) {
      if (authorSelectedFieldOptions.hasOwnProperty(index)) {
        selectedAuthorsValues.push(authorSelectedFieldOptions[index].value);
      }
    }

    const selectedTag = tagSelect.value;
    const body = {
      authors: selectedAuthorsValues,
      tag: selectedTag,
    };

    var tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';

    fetch('http://localhost:8080/api/get-tweets-params', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(data => {
      // Atualiza a tabela
      data.forEach(function(tweet) {
        var row = createTableRow(tweet);
        tableBody.appendChild(row);
      });

      // Atualiza o gráfico
      updateChart(data);
    })
    .catch(error => {
      console.error('Erro ao obter dados da API:', error);
    });  
  });

function updateChart(data) {
  const createdAt = data.map(item => new Date(item.createdAt));
  console.log(createdAt);
  console.log(createdAt[0].getUTCDate());
  const polarity = data.map(item => item.polarity);

  chart.destroy();
  chart = new Chart(ctx, {
    type: 'scatter',
      data: {
        labels: [],
        datasets: [{
          label: 'Dispersão de Polarity por Data',
          data: createdAt.map((date, index) => ({ x: date.getUTCDate(), y: polarity[index] })),
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
}