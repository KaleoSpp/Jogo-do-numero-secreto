//variável para guardar o número aleatório gerado
let listasNumerosSortidos = [];
let = numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;
console.log(numeroSecreto);

//função para gerar um número aleatório entre 1 e 10
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosLista = listasNumerosSortidos.length;
    if (quantidadeDeElementosLista == numeroLimite){
        listasNumerosSortidos = [];
    }
    if (listasNumerosSortidos.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listasNumerosSortidos.push(numeroEscolhido);
        console.log(listasNumerosSortidos);
        return numeroEscolhido;
    }
}

//função para alterar a mensagem das tags html h1 e p
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

   

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

//função para verificar o chute
function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
//variavéis para exibir mensagens caso acerte ou erre
    let dica = numeroSecreto > chute ? 'maior' : 'menor';
    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
    let mensagemh1 = chute == numeroSecreto ? 'Acertou!' : 'Tente novamente';
    let mensagemP = chute == numeroSecreto ? `Parabéns, você descobriu o número secreto com ${tentativa} ${palavraTentativa}!` : `O número secreto é ${dica} que ${chute}`;
//ativa o botão Novo Jogo caso acerte o número secreto
    if (chute == numeroSecreto){
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    exibirTextoNaTela('h1', `${mensagemh1}`);
    exibirTextoNaTela('p', `${mensagemP}`);
    //o número de tentativa aumenta a cada tentativa
    tentativa++;
    limparCampo();
    }
//função para limpar o valor do campo do input a cada tentativa
    function limparCampo() {
        chute = document.querySelector('input');
        chute.value = '';
        
    }
//função para reiniciar o jogo caso clique em no botão Novo Jogo
    function reiniciarJogo(){
        numeroSecreto = gerarNumeroAleatorio();
        exibirMensagemInicial();
        tentativa = 1;
        limparCampo();
        document.getElementById('reiniciar').setAttribute('disabled', true);
        console.log(numeroSecreto);
    }