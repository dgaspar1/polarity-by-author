async function fetchSelectOptions(url, selectId) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const select = document.getElementById(selectId);

    data.forEach(item => {
      const option = document.createElement("option");
      option.value = item.name;
      option.text = item.name;
      select.appendChild(option);
    });

    M.FormSelect.init(select);
  } catch (error) {
    console.error("Erro ao buscar opções:", error);
  }
}

async function updateAuthorOptions(){
  const authorSelect = document.getElementById("authorSelect");
  const tagSelect = document.getElementById("tagSelect");

  const selectedTag = tagSelect.value;

  fetch(`http://localhost:8080/api/get-authors-by-tag/${selectedTag}`)
  .then(response => response.json())
  .then(data => {
    authorSelect.innerHTML = "";
    data.forEach(authors => {
      const option = document.createElement("option");
      option.value = authors.author;
      option.text = authors.author;
      authorSelect.appendChild(option);
    });
    M.FormSelect.init(authorSelect);
  })
  .catch(error => {
    console.error('Erro ao obter tags da API:', error);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchSelectOptions("http://localhost:8080/api/get-authors", "authorSelect");
  fetchSelectOptions("http://localhost:8080/api/get-tags", "tagSelect");
});

  
