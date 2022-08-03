obtenerCaptura();
var cuentas = [
    { nombre: "Arisahi", saldo: 500, contraseña: "contraseña"},
    { nombre: "Juan", saldo: 800, contraseña: "contraseña1"},
    { nombre: "Edith", saldo: 100,contraseña: "contraseña2"}
  ];

  let maximo = 990;
  let minimo = 10;
 
  function obtenerCaptura(){
    // localStorage.getItem("guardarUsuario");
        //que exista el nombre en localstorage
    usuarioObtenido = localStorage.getItem("guardarUsuario");
       //alert(usuarioObtenido)
    
    // else{
    //     localStorage.removeItem("");
    //     alert("No existe sesion abierta");
    // //    window.location.href=""
    // }
    saldoObtenido0 = localStorage.getItem("guardarSaldo0");
    saldoObtenido1 = localStorage.getItem("guardarSaldo1");
    saldoObtenido2 = localStorage.getItem("guardarSaldo2");

}

// obtener el nombre de usuario
function capturar(){
    usuario = document.getElementById('user').value;
    password = document.getElementById("password").value;
    // boton = document.getElementsByClassName("button");
    // document.getElementById("resultado").innerHTML = usuario;
    localStorage.setItem('guardarUsuario', JSON.stringify(usuario)); // setitem se trae el dato

    //Validacion de usuarios
    if(usuario == cuentas[0].nombre && password == cuentas[0].contraseña 
    || usuario == cuentas[1].nombre && password == cuentas[1].contraseña 
    || usuario == cuentas[2].nombre && password == cuentas[2].contraseña ){
        
        window.location.href="banco.html";

    }
    else{
        alert("Usuario/contraseña incorrectos. Favor de validar");
    }
}

//Mostar saldo inicial en pantalla
function verSaldo(){
  
    saldoObtenido0 = cuentas[0].saldo;
    saldoObtenido1 = cuentas[1].saldo;
    saldoObtenido2 = cuentas[2].saldo;
    // saldo = document.getElementById("btnSaldo").value;
    usuario2 = usuarioObtenido.replace(/["']/g, ""); // quitar comillas del usuario obtenido
    if(usuario2 == cuentas[0].nombre){
        alert("Saldo inicial: $"+ saldoObtenido0);
        localStorage.setItem('guardarSaldo0', JSON.stringify(cuentas[0].saldo));
    }
    else if(usuario2 == cuentas[1].nombre){
        alert("Saldo inicial: $"+ saldoObtenido1);
        localStorage.setItem('guardarSaldo1', JSON.stringify(cuentas[1].saldo));
    }
    else if(usuario2 == cuentas[2].nombre){
        // cuentas[2].saldo = saldoObtenido2 ;
         alert("Saldo inicial: $"+ saldoObtenido2);
        localStorage.setItem('guardarSaldo2', JSON.stringify(cuentas[2].saldo));
    }
}

function depositar(){
    usuario2 = usuarioObtenido.replace(/["']/g, ""); 

    montoDeposito = document.getElementById("ingreseMonto").value;
    // console.log(guardarUsuario);
   
    if(usuario2 == cuentas[0].nombre ){
        cuentas[0].saldo = parseInt(cuentas[0].saldo) + parseInt(montoDeposito);
        if(cuentas[0].saldo  < minimo){
            alert("Su saldo no puede ser menor a 10");
        }
        else if(cuentas[0].saldo > maximo){
            alert("Su saldo no puede ser mayor a 990");
        }
        else if(montoDeposito == ""){
            alert("Debe ingresar un monto");
        }
        else{
            alert("El monto que ingreso es: $"+montoDeposito + " \nSu saldo actual es: $"+ cuentas[0].saldo); 
        }
    }
    else if (usuario2 == cuentas[1].nombre ){
        cuentas[1].saldo  = parseInt(cuentas[1].saldo ) + parseInt(montoDeposito);
        if(cuentas[1].saldo  < minimo){
            alert("Su saldo no puede ser menor a 10");
        }
        else if(cuentas[1].saldo  > maximo){
            alert("Su saldo no puede ser mayor a 990");
        }
        else if(montoDeposito == ""){
            alert("Debe ingresar un monto");
        }
        else{
            alert("El monto que ingreso es: $"+montoDeposito + " \nSu saldo actual es: $"+ cuentas[1].saldo ); 
        }
    }
    else if (usuario2 == cuentas[2].nombre){
        cuentas[2].saldo  = parseInt(cuentas[2].saldo) + parseInt(montoDeposito);
        console.log(montoDeposito);
        if(cuentas[2].saldo < minimo){
            alert("Su saldo no puede ser menor a 10");
        }
        else if(cuentas[2].saldo > maximo){
            alert("Su saldo no puede ser mayor a 990");
        }
        else if(montoDeposito == ""){
            alert("Debe ingresar un monto");
        }
        else{
            alert("El monto que ingreso es: $"+montoDeposito + " \nSu saldo actual es: $"+cuentas[2].saldo); 
        }
    }  
}

function retirar(){
    usuario2 = usuarioObtenido.replace(/["']/g, ""); 

    montoDeposito = document.getElementById("ingreseMonto").value;
    // alert(montoDeposito);
   
    if(usuario2 == cuentas[0].nombre && parseInt(saldoObtenido0) == cuentas[0].saldo){
        cuentas[0].saldo  = parseInt(cuentas[0].saldo) - parseInt(montoDeposito);
        if(cuentas[0].saldo  < minimo){
            alert("Su saldo no puede ser menor a 10");
        }
        else if(cuentas[0].saldo  > maximo){
            alert("Su saldo no puede ser mayor a 990");
        }
        else if(montoDeposito == ""){
            alert("Debe ingresar un monto");
        }
        else{
            alert("El monto que ingreso es: $"+montoDeposito + "\nSu saldo actual es: $"+ cuentas[0].saldo ); 
        }
    }
    else if (usuario2 == cuentas[1].nombre && parseInt(saldoObtenido1) == cuentas[1].saldo){
        cuentas[1].saldo = parseInt(cuentas[1].saldo) - parseInt(montoDeposito);
        if(cuentas[1].saldo  < minimo){
            alert("Su saldo no puede ser menor a 10");
        }
        else if(cuentas[1].saldo  > maximo){
            alert("Su saldo no puede ser mayor a 990");
        }
        else if(montoDeposito == ""){
            alert("Debe ingresar un monto");
        }
        else{
            alert("El monto que ingreso es: $"+montoDeposito + "\nSu saldo actual es: $"+ cuentas[1].saldo ); 
        }
    }
    else if (usuario2 == cuentas[2].nombre && parseInt(saldoObtenido2) == cuentas[2].saldo){
        cuentas[2].saldo  = parseInt(cuentas[2].saldo) - parseInt(montoDeposito);
        if(cuentas[2].saldo < minimo){
            alert("Su saldo no puede ser menor a 10");
        }
        else if(cuentas[2].saldo > maximo){
            alert("Su saldo no puede ser mayor a 990");
        }
        else if(montoDeposito == ""){
            alert("Debe ingresar un monto");
        }
        else{
            alert("El monto que ingreso es: $"+montoDeposito + "\nSu saldo actual es: $"+ cuentas[2].saldo); 
        }
    } 
}

function salir(){
    window.location.href="index.html";
    localStorage.clear();
}


 


