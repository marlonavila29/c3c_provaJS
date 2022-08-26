function bhaskara (a,b,c){

    //calculando o delta: delta=b2-4*a*c
    const delta = b*b-4*a*c;
		//console.log(delta);

    if(delta<0){
        return "O Delta é Negativo";
    }
    else if(delta==0){
        //só há uma raiz;
        return -b/2*a;
    }
    //logo delta é positivo, então há duaz raízes
    let raiz1;
    let raiz2;

    raiz1= (-b-Math.sqrt(delta))/2*a;
    raiz2= (-b+Math.sqrt(delta))/2*a;

    return [raiz1,raiz2];
}

const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const resultado = document.querySelector("#resultado");
const btn = document.querySelector("#calcularBhaskara");

//console.log(a);
btn.onclick = () => {
	resultado.value=(bhaskara(a.value,b.value,c.value));
  
}