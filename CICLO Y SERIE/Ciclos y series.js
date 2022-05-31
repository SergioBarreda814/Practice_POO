//CICLOS Y SERIES
//Alumno:Barreda Martínez Sergio Emmanuel ||2°A

//FUNCIONES UTILIZADAS EN LOS CODIGOS:

  function factorial(n){
    let fac = 1; 
	for (let i=1; i<=n; i++)
		fac = fac * i;
  
	return fac;
  }
  
  function exponente(n0, n1){
    let expo = n0;
     for (let i=1; i<n1; i++)
       expo*=n0;
    return expo;
  }
  
  
  //EJERCICIO #1:Aproximación de e:    
  let total = 1;
  let numerador = 1;
  let e = parseInt(prompt('Numero:')); 
   for(let i=1; i<=e;i++){
     total= total + numerador/factorial(i);
   }
  console.log(total);
     
  
  //EJERCICIO #2: Aproximación de e^x
  let result = 1;
  let x = parseInt(prompt('Numero:')); 
   for(let i=1; i<=x;i++){
     let suma=exponente(x,i)/factorial(i);
     result+=suma;
    
   }
  console.log(result);
   