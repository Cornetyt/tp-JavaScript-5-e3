function agregarTarea() {
  const tarea = document.getElementById("tareaInput").value;

  if (tarea.trim() !== "") {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.className =
      "list-group-item d-flex justify-content-between align-items-center";
    nuevaTarea.innerHTML = `
      ${tarea}
      <button class="btn btn-danger btn-sm" onclick="eliminarTarea(this)">Eliminar</button>
    `;

    document.getElementById("listaTareas").appendChild(nuevaTarea);

    document.getElementById("tareaInput").value = "";
  } else {
    alert("Por favor, ingrese una tarea válida.");
  }
}

function eliminarTarea(elemento) {
  const tareaAEliminar = elemento.parentElement;

  document.getElementById("listaTareas").removeChild(tareaAEliminar);
}
