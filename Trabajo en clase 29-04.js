var text = 'mañana vamos a comer un churchill al puerto, y luego vamos a la playa';
function busqueda_profunda(texto) {
    
    if (texto.includes('playa')){
        if (texto.includes('si')){
            console.log('que rica esta el agua');
    }else{
        console.log('no vamos a la playa');
    }
   }else{
    console.log('que rica esta el agua')
    }
  }
busqueda_profunda(text);

var numero_a_evaluar = 25;
function log5 (number){
    return Math.log5(number);
}
console.log (log5(numero_a_evaluar));








