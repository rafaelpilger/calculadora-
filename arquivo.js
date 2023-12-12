let calculo = document.querySelector("#display");
let operador = "";
let parar = false;

function limpar() {
  calculo.value = "";
  document.querySelector("#history").innerHTML = "";
  operador = ""
}

//function para os numeros
function add_numero(string) {
  if (!parar) {
    if (string === '.' && calculo.value.indexOf(".") === -1 || string !== '.') {
      calculo.value = calculo.value + string;
      history.value = calculo.value;
    }
  } else {
    if (string === '.' && calculo.value.indexOf(".") === -1 || string !== '.') {
      calculo.value = "";
      parar = false;
      document.querySelector("#history").innerHTML = "";
      operador = "";

      calculo.value = calculo.value + string;
    }
  }
}
//function para os operadores
function add_operador(op) {
  if (calculo.value == "") {
    calculo.value = "0";
  }

  if (operador == "") {
    operador = op;
    calculo.value = calculo.value + op;
  } else {
    total()
    calculo.value = calculo.value + op;
    operador = op;
    parar=false;
  }
}

//function para os resultados
function total() {
  if (!parar) {
    numeros = calculo.value.split(operador);

    if (numeros[1] == "") {
      calculo.value = calculo.value + '0';
      numeros[1] = 0;

    }

    document.querySelector("#history").innerHTML = calculo.value;

    switch (operador) {
      case "+":
        calculo.value = Number(numeros[0]) + Number(numeros[1]);
        break;

      case "-":
        calculo.value = numeros[0] - numeros[1];
        break;

      case "*":
        calculo.value = numeros[0] * numeros[1];
        break;

      case "/":
        calculo.value = numeros[0] / numeros[1];
        break;
    }

    parar = true;
  }
}
