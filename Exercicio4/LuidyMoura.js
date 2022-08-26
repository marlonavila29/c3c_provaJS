function calcularArray (argumento){
    console.log(argumento);
    let vetorResultado=[0];
      for(i=1;i<=argumento;i++)
      {
          if(i%5==0 && i%9==0){
        vetorResultado[i]="LuidyMoura";
        }
          else if(i%5==0)
        {
               vetorResultado[i]="Luidy";
        }
        else if(i%9==0){
            vetorResultado[i]="Moura";
        }
        else{
            vetorResultado[i]=i;
        }
        
      }
      return vetorResultado;
    }
    
    const argumento = document.querySelector("#argumento");
    const resultado = document.querySelector("#resultado");
    const btn = document.querySelector("#calcularArray");
    
    
    btn.onclick = () => {
        resultado.value=(calcularArray(argumento.value));
    }