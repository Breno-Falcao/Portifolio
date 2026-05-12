/* portifolio */
const aa = document.getElementsByClassName("portifolio-section-works-a-galeria")[0]
const ab = document.getElementsByClassName("portifolio-section-works-a-galeria-h2")[0]
const ac = document.getElementsByClassName("portifolio-section-works-a-galeria-p")[0]

const ad = document.getElementsByClassName("portifolio-section-works-a-portifolio")[0]
const abb = document.getElementsByClassName("portifolio-section-works-a-galeria-h2")[1]
const acc = document.getElementsByClassName("portifolio-section-works-a-galeria-p")[1]

const ae = document.getElementsByClassName("portifolio-section-works-a-hqs")[0]
const abbb = document.getElementsByClassName("portifolio-section-works-a-galeria-h2")[2]
const accc = document.getElementsByClassName("portifolio-section-works-a-galeria-p")[2]

const af = document.getElementsByClassName("portifolio-section-works-a-templates")[0]
const abbbb = document.getElementsByClassName("portifolio-section-works-a-galeria-h2")[3]
const acccc = document.getElementsByClassName("portifolio-section-works-a-galeria-p")[3]

/* ao passar o mousse */
aa.addEventListener("mouseover",function(){
    aa.className="portifolio-section-works-a-hover"
    ab.className="portifolio-section-works-a-h2-display"
    ac.className="portifolio-section-works-a-p-display"
})
/* ao retirar o mousse */
aa.addEventListener("mouseout",function(){
    aa.className="portifolio-section-works-a-galeria"
    ab.className="portifolio-section-works-a-galeria-h2"
    ac.className="portifolio-section-works-a-galeria-p"
})
ad.addEventListener("mouseover",function(){
    ad.className="portifolio-section-works-a-hover"
    abb.className="portifolio-section-works-a-h2-display"
    acc.className="portifolio-section-works-a-p-display"
})
ad.addEventListener("mouseout",function(){
    ad.className="portifolio-section-works-a-galeria"
    abb.className="portifolio-section-works-a-galeria-h2"
    acc.className="portifolio-section-works-a-galeria-p"
})
ae.addEventListener("mouseover",function(){
    ae.className="portifolio-section-works-a-hover2"
    abbb.className="portifolio-section-works-a-h2-display"
    accc.className="portifolio-section-works-a-p-display"
})
ae.addEventListener("mouseout",function(){
    ae.className="portifolio-section-works-a-hqs"
    abbb.className="portifolio-section-works-a-galeria-h2"
    accc.className="portifolio-section-works-a-galeria-p"
})
af.addEventListener("mouseover",function(){
    af.className="portifolio-section-works-a-hover2"
    abbbb.className="portifolio-section-works-a-h2-display"
    acccc.className="portifolio-section-works-a-p-display"
})
af.addEventListener("mouseout",function(){
    af.className="portifolio-section-works-a-hqs"
    abbbb.className="portifolio-section-works-a-galeria-h2"
    acccc.className="portifolio-section-works-a-galeria-p"
})


