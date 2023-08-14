document.addEventListener('DOMContentLoaded', function() {
    var tableBody = document.querySelector('tbody');

    function createTableRow(data) {
      var row = document.createElement('tr');
      row.innerHTML = `
        <td>${data.id}</td>
        <td>${data.author}</td>
        <td>${data.text}</td>
        <td>${data.polarity}</td>
        <td>${data.tag}</td>
        <td>${data.createdAt}</td>
      `;
      return row;
    }

    fetch('http://localhost:8080/api/get-tweets')
    .then(response => response.json())
    .then(data => {
      data.forEach(function(tweet) {
        var row = createTableRow(tweet);
        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Erro ao obter dados da API:', error);
    });
    
  });