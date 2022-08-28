
    const nota = document.querySelector("#nota");
    const resultado = document.querySelector("#resultado");
    const btn = document.querySelector("#calcularNota");
    
    
    btn.onclick = () => {
        if(nota.value <= 0 || nota.value > 100){
            resultado.value="Digite uma nota entre 0 a 100";
        }
        else if(nota.value<38){
            resultado.value="Reprovado!";
        }
        else{       
            let aux=parseInt(nota.value);  
            let notaArredondada=parseInt(nota.value);
            for(i=1;i<=3;i++){
                if((parseInt(aux)+i)%5==0){
                //Então há arrendoamento
                        notaArredondada=aux+i;
                }
            }
            
            if(notaArredondada>=40){
                resultado.value=notaArredondada;
                    
            }
            else{
                resultado.value="Reprovado!";
            }
      
        } 
       
    }