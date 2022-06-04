const gastos = [];
const usuarios = [];
const usuario = document.getElementById("nombre");
const gasto = document.getElementById("gasto");
const lista = document.getElementById("list-group");
const resultado = document.getElementById("total");

function repartir() {
  agregarGastosAListas();
  ultimoAPantalla();
  mostrarPagoIndividualEnHTML();
}

function agregarGastosAListas() {
  usuarios.push(usuario.value);
  gastos.push(gasto.value);
}

function ultimoAPantalla() {
  const li = document.createElement("li");
  const text = document.createTextNode(`${usuario.value}: $${gasto.value}`);
  li.classList.add("list-group-item");

  li.appendChild(text);
  lista.appendChild(li);
}

function sumarValores(gastos) {
  let suma = 0;
  for (let gasto of gastos) {
    suma += Number(gasto);
  }
  return suma;
}

function mostrarPagoIndividualEnHTML() {
  const total = sumarValores(gastos);
  const aporteIndividual = total / gastos.length;
  resultado.innerHTML = `Total: $${total}
                         A cada uno le toca aportar: $${aporteIndividual}`;
}
