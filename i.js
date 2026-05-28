const API_KEY = "DEMO_KEY";

const resultados = document.getElementById("results");



fetch('https://api.nasa.gov/planetary/apod?api_key=${API_KEY}') 
  .then(respuesta => respuesta.json())
  .then(foto => {

    resultados.innerHTML = `
      <div class="card">
        <h2>${foto.title}</h2>

        <img src="${foto.url}" alt="${foto.title}">

        <p>${foto.date}</p>

        <p>${foto.explanation}</p>
      </div>
    `;
  });



document.getElementById ("searchDateBtn").onclick = function () {

  const fecha = document.getElementById("dateInput").value;

  fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${fecha}`)
    .then(respuesta => respuesta.json())
    .then(foto => {

      resultados.innerHTML = `
        <div class="card">
          <h2>${foto.title} </h2>

          <img src="${foto.url}" alt="${foto.title}">

          <p>${foto.date}</p>

          <p>${foto.explanation}</p>
        </div>
      `;
    });

};