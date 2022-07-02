let indice = 1
function agregarItem(dir,ind){
    let div1 = document.createElement('div')
    div1.className="col-lg-3 text-center"
    div1.style = "padding-top: 10px;padding-bottom: 30px;"
    let aa = document.createElement('a')
    aa.href = "#"
    let ima = document.createElement('img')
    ima.src = dir
    ima.className = 'image'
    ima.style = "width: 200px; height: 200px"
    aa.appendChild(ima)
    div1.appendChild(aa)
    let b = document.createElement('b')
    b.style = 'font-size: 22px;'
    b.innerText = inventario[ind].marca
    div1.appendChild(b)
    let b2 = document.createElement('b')
    b2.style = 'font-size: 28px;'
    b2.innerText = "Bs. "+inventario[ind].precio
    div1.appendChild(document.createElement('br'))
    div1.appendChild(b2)
    for(let i=0;i<3;i++){
        var aux = div1.cloneNode(true)
        aux.id = indice.toString()
        indice++
        document.getElementById('contenido').appendChild(aux)
    }
}
for(let i = 0;i<inventario.length;i++){
    if(inventario[i].genero === "Hombre"){
        let dirs = (i+1).toString()
        agregarItem("stock/"+dirs+".jpg",i)
    }
}
document.getElementById("1").style = "display:none"