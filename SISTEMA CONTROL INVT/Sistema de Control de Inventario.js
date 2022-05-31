<div id='app'>
<h2>Control de Inventario</h2>
<form>
  <label for="txtCodigo">Codigo:</label><br>
  <input type="text" id="txtCodigo"><br>
  <label>
  Nombre:<br>
  <input type="text" id="txtNombre" placeholder="Producto"></label><br>
  <label>
  Precio:<br>
  <input type="text" id="txtPrecio"></label><br>  <label>
  Cantidad:<br>
  <input type="text" id="txtCantidad" placeholder="1"></label><br><br>
  <button type='button' id='btnAgregar'>Agregar</button>
  <button type='button' id='btnBuscar'>Buscar</button>
  <button type='button' id='btnListar'>Listar</button>
  <button type='reset'>Cancelar</button>
  <button type= 'button' id='btnBorrar'>Borrar</button>
</form>
</div>
<div id='detalles'></div>
<script>
  //producto.js
class Producto {
  constructor(codigo, nombre, cantidad, precio){
    this.codigo=codigo;
    this.nombre=nombre;
    this.cantidad=cantidad;
    this.precio=precio;
    this.siguiente=null;
  }
  info( ){
      return `(${this.cantidad}) ${this.nombre} $${this.precio} :${this.codigo}`;
  }
  infoHtml(){
      return `<p>(${this.cantidad}) ${this.nombre} $${this.precio} :${this.codigo}</p>`;
  }
}
  //Inventario.js
class Inventario{
  constructor( ){
    this.inicio=null;
  }
  agregar(producto){
    if (this.inicio==null)
      this.inicio=producto;
    else{
      let ultimo=this.inicio;
      while ( ultimo.siguiente!=null ){
        ultimo=ultimo.siguiente;
      }
      ultimo.siguiente=producto;
    }
  }
  eliminar(codigo){
    let temp=this.inicio;
    if(codigo==temp.codigo)
      this.inicio=temp.siguiente;
    while(temp!=null && codigo!=temp.siguiente.codigo){
      temp=temp.siguiente;
    }
    temp.siguiente=temp.siguiente.siguiente;
  }
  buscar(codigo) {
    let temp=this.inicio;
    while(temp!=null && codigo!=temp.codigo){
      temp=temp.siguiente;
    }
    return temp;
  }
  listar( ) {
    let res='';
    let temp=this.inicio;
    while( temp!=null ){
      res += temp.infoHtml();
      temp=temp.siguiente;
    }
    return res;
  }
}
//app.js
  const almacen=new Inventario();
  const btnAgregar=document.getElementById('btnAgregar');
  btnAgregar.addEventListener('click',()=>{
    let codigo=document.getElementById('txtCodigo').value;
    let nombre=document.getElementById('txtNombre').value;
    let precio=document.getElementById('txtPrecio').value;
    let cantidad=document.getElementById('txtCantidad').value;
    let nuevo=new Producto(codigo,nombre,cantidad,precio);
    almacen.agregar(nuevo);
    console.log(almacen);
    let detalles=document.getElementById('detalles');
    detalles.innerHTML+='<h2>Objeto Agregado</h2>';
    detalles.innerHTML+='<p>Se agrego el producto ' + codigo + '</p>';
  });
  const btnListar=document.getElementById('btnListar');
  btnListar.addEventListener('click',()=>{
    let detalles=document.getElementById('detalles');
    detalles.innerHTML ='<p>La lista es: </p>';
    detalles.innerHTML+=almacen.listar();
  });
  const btnBuscar=document.getElementById('btnBuscar');
  btnBuscar.addEventListener('click',()=>{
    let codigo = document.getElementById('txtCodigo').value;
    let resultado=almacen.buscar(codigo);
    let detalles=document.getElementById('detalles');
    if (resultado==null)
      detalles.innerHTML ='<p>No existe</p>';
    else{
      detalles.innerHTML ='<p>Si existe</p>';
      detalles.innerHTML +=resultado.infoHtml();
    }
  });
  const btnBorrar=document.getElementById('btnBorrar');
  btnBorrar.addEventListener('click',()=>{
    let codigo =document.getElementById('txtCodigo').value;
    let borrado=almacen.eliminar(codigo);
    let detalles=document.getElementById('detalles');
    detalles.innerHTML = '<p>Objeto Eliminado</p>';
  });
</script>