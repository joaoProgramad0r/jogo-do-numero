    alert('olá papai,bem-vindo ao jogo de advinhar o numero secreto');
    let numeroMaximo = 100
    let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1) ;
    console.log(numeroSecreto);
    let chute;
    let tentativas = 1; 

    //enquanto o chute não for igual o numero secreto
    while (chute != numeroSecreto) {
        chute = prompt(`escolha um numero entre 1 e ${numeroMaximo}`);
    
    //se chute for igual ao o numero secreto
        if(numeroSecreto == chute) {
            break;
            
        } else{
        if (numeroSecreto > chute) {
            alert(`o numero secreto é maior que ${chute}`);
        } else { 
            alert (`o numero secreto é menor que ${chute}`);
        }   
        //tentativa = tentativa +1
        tentativas++;
    }
}
let palavreatentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`acerto miseravi, ${numeroSecreto} com ${tentativas} ${palavreatentativa}`)

//if (tentativas > 1){
//  alert(`acerto miseravi, ${numeroSecreto} com ${tentativas} tentativas`);
//} else{
//    alert(`acerto miseravi, ${numeroSecreto} com ${tentativas} tentativa`);
//}
