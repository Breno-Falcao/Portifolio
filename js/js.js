/* sessao formaçao - capturando tanto o lado seleçao quanto o display */
const a = document.getElementsByClassName("formacao-section-selecao-a-formacao")[0]
const b = document.getElementsByClassName("formacao-section-selecao-a-cursos")[0]
const c = document.getElementsByClassName("formacao-section-selecao-a-idioma")[0]
const d = document.getElementsByClassName("formacao-section-display-a-formacao")[0]
const e = document.getElementsByClassName("formacao-section-display-a-cursos")[0]
const f = document.getElementsByClassName("formacao-section-display-a-idioma")[0]

/* sessao formaçao - aplico a funçao que altera a opacidade quando passar o mousse por cima de um elemento especifico */
a.addEventListener("mouseover",function(){
    d.className="formacao-section-display-a-opacity"
})
a.addEventListener("mouseout",function(){
    d.className="formacao-section-display-a-formacao"
})
b.addEventListener("mouseover",function(){
    e.className="formacao-section-display-a-opacity"
})
b.addEventListener("mouseout",function(){
    e.className="formacao-section-display-a-formacao"
})
c.addEventListener("mouseover",function(){
    f.className="formacao-section-display-a-opacity"
})
c.addEventListener("mouseout",function(){
    f.className="formacao-section-display-a-formacao"
})

