let fechaSeleccionada = new Date();
let h1 = document.createElement("h1");
h1.setAttribute("id", "tabla");
h1.innerHTML = `Fecha límite: ${fechaSeleccionada}`;
document.body.insertBefore(h1, document.body.firstChild);
let dia, hora, mes,minuto, segundo =0 ;
let fin = false;
let finDistancia = false;
//funcion que genera la tabla
function crearTabla() {
  let contenedor = document.getElementById("contenedor");
  let tabla = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  let fila = document.createElement("tr");
  let col1 = document.createElement("th");
  let col2 = document.createElement("th");
  let col3 = document.createElement("th");
  let col4 = document.createElement("th");
  let col5 = document.createElement("th");
  col1.textContent = "Mes";
  col2.textContent = "Días";
  col3.textContent = "Horas";
  col4.textContent = "Minutos";
  col5.textContent = "Segundos";

  fila.append(col1, col2, col3, col4, col5);
  thead.appendChild(fila);
  tabla.append(thead, tbody);

  contenedor.append(tabla);
  tabla.setAttribute("id", "tabla");
  let newFila2 = document.createElement("tr");
  
  if (dia==14){
    newFila2.style.backgroundColor = "rgb(255, 102, 0)";
  }
  if (dia<8){
    newFila2.style.backgroundColor = "rgb(255, 0, 0)";}
    if (dia > 14 ){newFila2.style.backgroundColor = "rgb(161, 208, 244)";}


  newFila2.style.padding = "5px";
  col1.textContent = mes;
  col2.textContent = dia;
  col3.textContent = hora;
  col4.textContent = minuto;
  col5.textContent = segundo;
  fila.append(col1, col2,col3,col4,col5);
  thead.appendChild(fila)
  tabla.append(thead, tbody);

}

//funcion que genera el boton 'Introducir fecha'
function crearBotonIntroducirFecha() {
  let contenedor = document.createElement("div");
  document.body.appendChild(contenedor);

  let boton1 = document.createElement("button");
  boton1.textContent = "Introduce una fecha";
  contenedor.append(boton1);
  boton1.setAttribute("id", "boton1");

  // Crear el input de tipo fecha
  let labelFecha = document.createElement("label");
  labelFecha.textContent = "Fecha";
  contenedor.appendChild(labelFecha);

  let input = document.createElement("input");
  input.type = "date";
  input.id = "timeEnd";
  contenedor.appendChild(input);

  input.addEventListener("input", function () {
    let fechaSeleccionada = new Date(this.value);
    console.log("Fecha seleccionada:", fechaSeleccionada);
    mostrarFecha(fechaSeleccionada);
  });
  // Función para mostrar la fecha seleccionada
  function mostrarFecha(fechaSeleccionada) {
    let fechaActual = new Date();
    if (fechaSeleccionada > fechaActual) {
      alert("La fecha seleccionada es: " + fechaSeleccionada);
      document.body.insertBefore(h1, document.body.firstChild);
      let finDistancia = false;
      do {
        calcularFecha(fechaSeleccionada);
      } while (!finDistancia);
      fin === true;
    } else {
      alert("Por favor, selecciona una fecha.");
    }
  }

  // Asignar la función al evento click del botón
  boton1.addEventListener("click", function () {
    let fechaSeleccionada = new Date(document.getElementById("timeEnd").value);
    mostrarFecha(fechaSeleccionada);
  });
  return fechaSeleccionada;
}

// Función calcular fecha
function calcularFecha(fechaSeleccionada) {
  console.log(fechaSeleccionada);

  let fechaActual = new Date();
  let distancia = (fechaSeleccionada.getTime() - fechaActual.getTime()) / 1000;
  if (distancia > 0) {
    let segundo = Math.floor(distancia) % 60;
    let minuto = Math.floor(distancia / 60) % 60;
    let hora = Math.floor(distancia / 3600) % 24;
    let dia = Math.floor(distancia / 3600 / 24) % 30;
    let mes = Math.floor(distancia / 3600 / 24 / 30) % 12;

    console.log(
      `Mes: ${mes}, Día: ${dia}, Hora: ${hora}, Minuto: ${minuto}, Segundo: ${segundo}`
    );
  } else {
    console.log(
      `Mes: ${0}, Día: ${0}, Hora: ${0}, Minuto: ${0}, Segundo: ${0}`);
    
  }
}

 crearTabla();
 crearBotonIntroducirFecha(); 

