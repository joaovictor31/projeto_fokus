const html = document.querySelector('html');
const focoBt = document.querySelector(".app__card-button--foco");
const bt_descanso_curto = document.querySelector(".app__card-button--curto");
const bt_descanso_longo = document.querySelector(".app__card-button--longo");

const imagem = document.querySelector('.app__image'); 

function alterarContexto(contexto){
    html.setAttribute("data-contexto",contexto)
    imagem.setAttribute("src",`./imagens/${contexto}.png`)
}

focoBt.addEventListener('click', () => {
    alterarContexto("foco");
    //Aqui também posso utilizar o setAttribute. EX: minhaImagem.setAttribute("src", "caminho/da/nova/imagem.jpg");
    
})

bt_descanso_curto.addEventListener('click', () => {
    alterarContexto("descanso-curto");
})

bt_descanso_longo.addEventListener('click', () => {
    alterarContexto("descanso-longo"); 
})