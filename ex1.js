const lado1 = document.querySelector("#lado1");
const lado2 = document.querySelector("#lado2");
const lado3 = document.querySelector("#lado3");
const resultado = document.querySelector("#resultado");
const btn = document.querySelector("#calcularTriangulo");

btn.onclick = () => {
  //Verificando se o triagulo é EQUILATERO  
	if(lado1.value == lado2.value && lado2.value ==lado3.value){
		resultado.value = "EQUILATERO";
   }
  //Verificando se o triagulo é ISÓSCELES
  else if((lado1.value == lado2.value && lado2.value != lado3.value) || 	(lado2.value == lado3.value && lado2.value != lado1.value) ||
  (lado1.value == lado3.value && lado3.value != lado2.value)){
    resultado.value = "ISÓSCELES";
   }
  //Verificando se o triagulo é ESCALENO
  else if(lado1.value != lado2.value && lado2.value != lado3.value && lado1.value != lado3.value ){
    resultado.value = "ESCALENO";
   }

    
}

