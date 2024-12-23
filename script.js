const html = document.querySelector('html');
const focoBt = document.querySelector(".app__card-button--foco");
const bt_descanso_curto = document.querySelector(".app__card-button--curto");
const bt_descanso_longo = document.querySelector(".app__card-button--longo");


focoBt.addEventListener('click', () => {
    html.setAttribute("data-contexto","foco")
})

bt_descanso_curto.addEventListener('click', () => {
    html.setAttribute("data-contexto","descanso-curto")
})

bt_descanso_longo.addEventListener('click', () => {
    html.setAttribute("data-contexto","descanso-longo" )
})