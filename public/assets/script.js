// public/script.js
const btnHome = document.querySelector(".btn");

btnHome.addEventListener('click', regresarHome);

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("form");
    formulario.addEventListener("submit", (event) => {
      event.preventDefault();
      const nombreCompleto = document.getElementById("nombreCompleto").value;
      const correoElectronico = document.getElementById("correoElectronico").value;
      const informacion = document.getElementById("informacion").value;
      const data = { nombreCompleto, correoElectronico, informacion };
  
      fetch("/enviar-correo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message);
          location.href = "/"
          formulario.reset();
        })
        .catch((error) => {
          console.log("Error:", error);
          alert("Ocurrió un error al enviar el formulario.");
        });
    });
  });  

function regresarHome(){

  location.href = '/';

}