//PROGRAMAS PARA USOS DE CICLO FOR:
//Leer un numero y imprimir en consola.
//Alumno: Barreda Martínez Sergio Emmanuel || 2°A

//Variable para leer el numero:
 let num;
 //Inicio de código: Un cuadrado de *

 num = parseInt(prompt("Numero/cuadrado"));
   for ( let i=1; i<=num; i++){
     let cuadro = "";
     for( let k=1; k<=num; k++){
      cuadro+="*";
    }
     console.log (cuadro);
   }
  

 //Inicio de código: Un triangulo

 num = parseInt(prompt("Numero/triangulo"));
  
   for ( let i=1; i<=num; i++){
     let triangulo = "";
     for(let k=1; k<=i; k++){
      triangulo+="*";
    }
     console.log (triangulo);
   }
  

  
 //Inicio de código: Un triangulo invertido

   num = parseInt(prompt("Numero/t_invertido"));
  
   for ( let i=1; i<=num; i++){
     let tinvertido = "";
     for(let k=num; k>=i; k--){
      tinvertido+="*";
    }
     console.log (tinvertido);
   }

   
 //Inicio de código: Un triangulo alineado a la derecha

 num=parseInt(prompt("Numero/t_a la derecha")); 
  
  for (let i = 0; i < num; i++) {
    let tderecha = '';
    for (let espacio = 1; espacio < num - i; espacio++) {
          tderecha += ' ';
        }
    for (let k = 0; k < i + 1; k++) {
      tderecha += '*';
    }
    console.log(tderecha);
  }
  
  
  

    
   