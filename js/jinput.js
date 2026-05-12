/* contato */
const a = document.getElementsByClassName("contato-section-form-bt")[0]
const b = document.getElementsByClassName("contato-section-form-i-nome")[0]
const c = document.getElementsByClassName("contato-section-form-i-email")[0]
const d = document.getElementsByClassName("contato-section-form-i-meng")[0]

a.addEventListener("click",function(){
    
    if (b.value==="" || c.value==="" || d.value===""){
        window.alert("Preencha todos os campos para envio")
    } else if (!c.value.includes("@")) {
                alert("E-mail inválido (falta o @)");
        return false;
    }
    else {
    window.alert("Mensagem enviada com sucesso")
    b.value=""
    c.value=""
    d.value=""
    }
})

