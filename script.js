const html = document.querySelector('html');
const focoBt = document.querySelector(".app__card-button--foco");
const bt_descanso_curto = document.querySelector(".app__card-button--curto");
const bt_descanso_longo = document.querySelector(".app__card-button--longo");
const botaoComecarePausar = document.querySelector('#start-pause');
const iniciarouPausarBt = document.querySelector('#start-pause span') //Pego extamente onde a palavra começar está inserida
let iconePlayPause = document.querySelector('.app__card-primary-butto-icon');

const tempoNaTela = document.querySelector('#timer')

//Temporizador
let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

const botoes = document.querySelectorAll('.app__card-button');

//Botão de Música checkbox
const musicaFocoInput = document.querySelector('#alternar-musica')

//Pegando o audio
const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;

const audioPlay = new Audio('./sons/play.wav');
const audioPausa = new Audio ('./sons/pause.mp3');
const audioTerminou = new Audio ('./sons/beep.mp3');

//Mudar Imagem
const imagem = document.querySelector('.app__image'); 

//Mudar Título
const titulo = document.querySelector(".app__title");


function alterarContexto(contexto) {
    mostrarTempo()
    botoes.forEach(function(contexto){
            contexto.classList.remove('active')
        })

        /* Aqui, está removendo a classe active de todos os botões, garantindo que nenhum deles permaneça com a aparência de "ativo". No entanto, o botão clicado é marcado como "ativo" novamente após essa operação. */
        
    html.setAttribute('data-contexto', contexto)
    imagem.setAttribute('src', `/imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
            ` 
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
            `
        default:
            break;
    }
}

focoBt.addEventListener('click', () => {
    alterarContexto("foco");
    focoBt.classList.add('active')
    tempoDecorridoEmSegundos = 1500;
})

bt_descanso_curto.addEventListener('click', () => {
    alterarContexto("descanso-curto");
    bt_descanso_curto.classList.add('active')
    tempoDecorridoEmSegundos = 300;
})

bt_descanso_longo.addEventListener('click', () => {
    alterarContexto("descanso-longo"); 
    bt_descanso_longo.classList.add('active')
    tempoDecorridoEmSegundos = 900; //900 segundos 15 minutos = (60 x 15)

})

//Alterando a música de ativa para pausada
musicaFocoInput.addEventListener('change', () => {
    if(musica.paused){
        musica.play()
    } else {
        musica.pause()
    }
})

//Manipulando o Temporizador - Set interval (não entendi muito bem)
const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        audioTerminou.play();
        alert('Tempo Finalizado');
        zerar()
        return //Serve para interromper a execução do código
    }
    tempoDecorridoEmSegundos -= 1
    mostrarTempo()
}

botaoComecarePausar.addEventListener('click', iniciarouPausar);

function iniciarouPausar (){
    if (intervaloId){
        audioPausa.play();
        zerar()
        return
    }
    intervaloId = setInterval(contagemRegressiva,1000);
    audioPlay.play();
    iconePlayPause.setAttribute('src', `./imagens/pause.png`)
    iniciarouPausarBt.textContent = "Pausar"
    
    
}

/* intevaloID: Por que precisamos desse identificador?
Porque ele é a única maneira de parar o cronômetro! 
Se você não guardar esse identificador, não terá como interromper a execução repetida da função contagemRegressiva. 
Seria como ter um cronômetro que você iniciou, mas sem botão para pará-lo.*/

function zerar (){
    clearInterval(intervaloId)
     iniciarouPausarBt.textContent = "Começar"
     iconePlayPause.setAttribute('src', `./imagens/play_arrow.png`)
    intervaloId = null
}
//Limpar o meu intervalo depois que o valor for negativo

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleString('pt-Br', {minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo()