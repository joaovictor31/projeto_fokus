const html = document.querySelector('html');
const focoBt = document.querySelector(".app__card-button--foco");
const bt_descanso_curto = document.querySelector(".app__card-button--curto");
const bt_descanso_longo = document.querySelector(".app__card-button--longo");

const imagem = document.querySelector('.app__image'); 


focoBt.addEventListener('click', () => {
    html.setAttribute("data-contexto","foco");
    imagem.src = "./imagens/foco.png"
    //Aqui também posso utilizar o setAttribute. EX: minhaImagem.setAttribute("src", "caminho/da/nova/imagem.jpg");
    
})

bt_descanso_curto.addEventListener('click', () => {
    html.setAttribute("data-contexto","descanso-curto");
    imagem.src = "./imagens/descanso-curto.png"
})

bt_descanso_longo.addEventListener('click', () => {
    html.setAttribute("data-contexto","descanso-longo");
    imagem.src = "./imagens/descanso-longo.png"
})