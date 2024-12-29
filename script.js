const html = document.querySelector('html');
const focoBt = document.querySelector(".app__card-button--foco");
const bt_descanso_curto = document.querySelector(".app__card-button--curto");
const bt_descanso_longo = document.querySelector(".app__card-button--longo");

const botoes = document.querySelectorAll('.app__card-button');

const musicaFocoInput = document.querySelector('#alternar-musica')

//Mudar Imagem
const imagem = document.querySelector('.app__image'); 

//Mudar Título
const titulo = document.querySelector(".app__title");


function alterarContexto(contexto) {
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
})

bt_descanso_curto.addEventListener('click', () => {
    alterarContexto("descanso-curto");
    bt_descanso_curto.classList.add('active')
})

bt_descanso_longo.addEventListener('click', () => {
    alterarContexto("descanso-longo"); 
    bt_descanso_longo.classList.add('active')

})

