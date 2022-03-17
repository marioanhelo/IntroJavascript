// Con ayuda de alerts y promts haremos un cajero automático
// Nos permitirá abrir una cuenta con mínimo $100
// De no ingresar el monto mínimo, no se podrá crear
// Una vez creado, se podrá ingresar o retirar dinero
const clientes = [];
menu();
function menu() {
  let clientes = [];
  let opcion = prompt(
    "Bienvenido a DevBanco, selecciona una opción \n 1. Crear cuenta\n 2. Ingresar a cuenta \n 3. Revisar Clientes"
  );
  switch (opcion) {
    case "1":
      registroCuenta();
      break;
    case "2":
      ingresarCuenta();
      break;
    case "3":
      revisarClientes();
      break;
    default:
      alert("Opción no válida");
  }
}
function registroCuenta() {
  let nuevoCliente = prompt("Ingresa tu nombre");
  let contrasena = prompt("Ingresa una contraseña");
  let monto = parseFloat(prompt("Ingresa el monto a guardar"));
  if (monto < 100) {
    alert("La cantidad minima a guardar debe ser igual o mayor a 100");
    menu();
  } else if (isNaN(monto)) {
    alert("Ingresa una cantidad válida");
    menu();
  } else {
    let cliente = {
      nombre: nuevoCliente,
      password: contrasena,
      saldo: monto,
    };
    clientes.push(cliente);
    alert(`Cuenta registrada:\n Nombre:${nuevoCliente} \n Monto: ${monto}`);
    menu();
  }
}

function ingresarCuenta() {
  let cuenta = prompt("Ingresa tu nombre de la cuenta");
  let obtenerCliente = clientes.find((clientes) => clientes.nombre === cuenta);
  if (obtenerCliente === undefined) {
    alert("No se encontro la cuenta ingresada");
    menu();
  } else {
    let pass = prompt("Ingresa tu contraseña");
    let checkPass = clientes.find(
      (clientes) => clientes.nombre === cuenta && clientes.password === pass
    );
    if (checkPass === undefined) {
      alert("La contraseña es incorrecta");
      menu();
    } else {
      let IdCuenta = clientes.findIndex(
        (clientes) => clientes.nombre === cuenta && clientes.password === pass
      );
      menuCuenta(IdCuenta);
    }
  }
}
function revisarClientes() {
  let pass = prompt("Ingresa el password");
  let checkpassword = verifyPass(pass);
  if (checkpassword === "OK") {
    alert("Password correcto");
    mostrarClientes();
  } else {
    alert("Password incorrecto");
    menu();
  }
}
function verifyPass(pass) {
  if (pass === "root") {
    return "OK";
  } else {
    return "Incorrecto";
  }
}
function mostrarClientes() {
  for (let i = 0; i < clientes.length; i++) {
    document.write(
      `<p>Cliente: ${clientes[i].nombre} Monto: $${clientes[i].saldo}</p>`
    );
  }
}
function menuCuenta(CuentaID) {
  let opcion = prompt(
    `Hola ${clientes[CuentaID].nombre}, que deseas hacer? \n 1. Consultar Saldo\n 2. Ahorrar \n 3. Retirar \n 4. Menú Principal \n 5. Salir`
  );
  switch (opcion) {
    case "1":
      alert(`Tu saldo es $${clientes[CuentaID].saldo}`);
      menuCuenta(CuentaID);
      break;
    case "2":
      let ahorro = parseFloat(prompt("Cuanto deseas ahorrar?"));
      if (isNaN(ahorro)) {
        alert("Ingresa una cantidad válida");
        menuCuenta(CuentaID)
      } else {
        let saldo = clientes[CuentaID].saldo + ahorro;
        clientes[CuentaID].saldo = saldo;
        alert(`Tu saldo nuevo es $${saldo}`);
        menuCuenta(CuentaID);
      }
      break;
    case "3":
      let retiro = parseFloat(
        prompt(
          `Cuanto deseas retirar? El máximo es ${clientes[CuentaID].saldo}`
        )
      );
      if(isNaN(retiro)){
        alert("Ingresa una cantidad válida")
        menuCuenta(CuentaID)
      }else if (retiro > clientes[CuentaID].saldo) {
        alert("La cantidad ingresada es mayor al saldo registrado");
        menuCuenta(CuentaID);
      } else {
        let saldo = clientes[CuentaID].saldo - retiro;
        clientes[CuentaID].saldo = saldo;
        alert(`Tu saldo nuevo es $${saldo}`);
        menuCuenta(CuentaID);
      }
      break;
    case "4":
      menu();
      break;
    case "5":
      salir();
      break;
    default:
      alert("Opción no válida");
  }
}
function salir() {
  window.location.href = "https://www.google.com/";
}
