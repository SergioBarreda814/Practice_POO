// Trabajo con Vectores - Coladera de Eratostenes
//Alumno: Barreda Martínez Sergio Emmanuel || 2°A
//Encontrar los numeros primos menores a 1000 usando el metodo de la coladera de eratostenes.

//Generar un arreglo de 1000 elementos:
let a=[];
 for(i=0;i<1000;i++)
//Inicializar elementos en uno:
    a[i]=1;
 	
//Establecer en 0 los multiplos:
 for(i=2;i<1000;i++)
    if(a[i]==1)
      for(j=i+1;j<1000;j++)
         if(j%i==0)
           a[j]=0;

//Imprimir los numeros que sigan establecidos en 1:
 for(i=2 ;i<1000; i++)
    if(a[i]==1)
       console.log(i);

