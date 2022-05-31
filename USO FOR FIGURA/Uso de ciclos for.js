//Programas para uso de ciclos con FOR
//Leer un numero y imprimir en consola.
//Alumno: Barreda Martínez Sergio Emmanuel || 2°A

 //Inicio de código: Un cuadrado de *

 let num = parseInt(prompt("Introduzca un numero"));
   for ( i=1; i<=num; i++){
     let a = "";
     for(k=1; k<=num; k++){
      a+="*";
    }
     console.log (a);
   }
  

 //Inicio de código: Un triangulo

 let num = parseInt(prompt("Introduzca un numero"));
  
   for ( let i=1; i<=num; i++){
     let a = "";
     for(k=1; k<=i; k++){
      a+="*";
    }
     console.log (a);
   }
  

  
 //Inicio de código: Un triangulo invertido

   let num = parseInt(prompt("Introduzca un numero"));
  
   for ( let i=1; i<=num; i++){
     let a = "";
     for(let k=num; k>=i; k--){
      a+="*";
    }
     console.log (a);
   }

   
 //Inicio de código: Un triangulo alineado a la derecha

 let num=parseInt(prompt('Introduce un numero')); 
  
  for (let i = 0; i < num; i++) {
    let a = '';
    for (let espacio = 1; espacio < num - i; espacio++) {
          a += ' ';
        }
    for (let k = 0; k < i + 1; k++) {
      a += '*';
    }
    console.log(a);
  }
  
  

    
   