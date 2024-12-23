const html = document.querySelector('html');
const focoBt = document.querySelector(".app__card-button--foco");
const bt_descanso_curto = document.querySelector(".app__card-button--curto");
const bt_descanso_longo = document.querySelector(".app__card-button--longo");


//Mudar Imagem
const imagem = document.querySelector('.app__image'); 

//Mudar Título
const titulo = document.querySelector(".app__title");


function alterarContexto(contexto) {
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
})

bt_descanso_curto.addEventListener('click', () => {
    alterarContexto("descanso-curto");

})

bt_descanso_longo.addEventListener('click', () => {
    alterarContexto("descanso-longo"); 

})

