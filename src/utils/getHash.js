//si solo vamos a retornar un elemento que estamos utilizando dentro de la lógica no es necesario utilizar brakers
const getHash = () =>
// location.hash trae el fragmento de la url a partir de donde encuentre un #. En este caso traería #/1/
// .slice(1)  toma un “trozo” de un array en este caso corta la url y muestra a partir del primer elemento. En este Caso el resultado es /1/
// .toLocaleLowerCase() convierte a minúscula la cadena
// .split(’/’) separa la cadena en un array, y elimina el / quedando un espacio vacio Ej [’’, ‘1’ ,’’]
// [1] trae el primer elemento del split anterior que en este caso es 1 (representa la id 1)

  location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';    // ['','1','']

export default getHash;