//Programa para recorrer Vector
//Alumno: Barreda Martínez Sergio Emmanuel  || 2°A
  
//Declaración de un vector de 10 elementos.
  let vec = new Array(10);
  
//Ciclo para llenar su vector con numero aleatorios entre 1 y 20.
  for (i=0; i<vec.length; i++){
    vec[i]=Math.floor(Math.random()*20+1);
  }
//Mostrar el vector.
  console.log(vec);

//Código con el que mueven (recorrer) el contenido del vector.
  function recorreradelante(vector){
  let espacio_aux=vec[vector.length-1];
  for (let i=vector.length-1; i>0; i--)
    vector[i]=vector[i-1];
  vec[0]=espacio_aux;
}
  recorreradelante(vec);
//Mostrar de nuevo el contenido del vector.
  console.log(vec);
