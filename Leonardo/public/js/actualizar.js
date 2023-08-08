document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (event) => {
      event.preventDefault();
      const nombre = document.getElementById("nombre").value;
      const correo = document.getElementById("correo").value;
      const nuevoNombre=document.getElementById("nuevoNombre").value;
      const nuevoCorreo=document.getElementById("nuevoCorreo").value;
     
      const data = { nombre, correo,nuevoNombre,nuevoCorreo };
      fetch('/cuenta-modficiada', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Se mando la peticion");
          formulario.reset();
        })
        .catch((error) => {
          console.log("Error:", error);
          alert("Ocurrió un error al enviar el formulario.");
        });
    });
  }); 