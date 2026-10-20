const objeto =  { 
  key:"value",
  clave:"valor",
  num:8,
  bool:true

}


const persona = {
  peso:70,
  altura:167,
  edad:37,
  isloading:true
}

let array = ["pedro", "juan", "maría"]

let arregloApi = [
  {
    nombre:"pedro",
    apellido:"gomez",
    edad: 19,
    bool:true
  }, 
  {
    nombre:"Mariana",
    apellido:"gomez",
    edad: 12,
    bool:false
  }, 
  {
    nombre:"Luciano",
    apellido:"gomez",
    edad: 33,
    bool:true
  }, 

]

/* arregloApi.forEach(e => {
console.log(`Hola tu nombre es ${e.nombre} y tu apellido es ${e.apellido} y tu edad es ${e.edad}`);
});
 */






/* 
1. Crear un Array con N objetos y cada uno debe incluir una propiedad booleana. 
2. utilizar un for each para mostrar los elementos que cumplan o no dicha propiedad booleana. 
3 imprimir por pantalla solo los elementos que correspondan. 

*/



arregloApi.forEach(e => {
  
  if (e.bool === true) {
    console.log(`hola tu nombre es ${e.nombre} y tu apellido es ${e.apellido}`);
    
  }


});




