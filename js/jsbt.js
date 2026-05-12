const bt=document.getElementById("menu-bt")
const nav=document.getElementsByClassName("nav")[0]


/* aqui é para o botao mudar o display do menu, ele mostra e tambem esconde */
bt.addEventListener("click",function(){
    if (nav.style.display==="none"){
        (nav.style.display="flex")
    } else  {
        (nav.style.display="none")
    }
})

/* esse evento aqui é para quando eu redimensionar a tela ele verifica se a sessao do botao ta none ou flex, como o botao esconde ou mostra o menu , quando o menu esta automaticamente flex nas outras dimensoes o botao ja ta off, e quando eu desligo o menu pelo botao e redimensiono a tela e o botao some, o menu tem que estar de volta flex, e isso é possivel pelo monitoramento de redimensionamento da tela */
window.addEventListener("resize",function(){
    const hsec=document.getElementsByClassName("h-section")[0]
    const displayHsec = window.getComputedStyle(hsec).display;
    if (displayHsec==="none"){
        nav.style.display="flex"
    } else {
        nav.style.display="none"
    }
})