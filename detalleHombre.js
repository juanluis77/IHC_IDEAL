let indice = 1
let filtros = []
let clic = 0
let elements = []
for(let i =0;i<20;i++){
    filtros.push(false)
}
function agregarItem(dir,ind){
    let div1 = document.createElement('div')
    div1.className="col-lg-3 text-center"
    div1.style = "padding-top: 10px;padding-bottom: 30px;display:block"
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
        elements.push(ind)
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
//document.getElementById("1").style = "display:none"
function actCheck(ind,p){
    if(document.getElementById(ind).checked ===true){
        filtros[p]=true;
        clic++;
    }
    else{
        filtros[p]=false
        clic--
    }
}

function mostMarcas(mar){
    for(let i=0;i<elements.length;i++){
        let pos = elements[i]
        let aux = (i+1).toString()
        if(inventario[pos].marca===mar) document.getElementById(aux).style.display="block"
    }
}
function filtrar(ind,p){
    actCheck(ind,p)
    for(let i=0;i<elements.length;i++){
        document.getElementById((i+1).toString()).style.display="none"
    }
    if(filtros[0]) mostMarcas("Bata")
    if(filtros[1]) mostMarcas("Power")
    if(filtros[2]) mostMarcas("North Star")
    if(filtros[3]) mostMarcas("King Street")
    if(filtros[4]) mostMarcas("Sparx")
    if(clic===0){
        for(let i=0;i<elements.length;i++){
            document.getElementById((i+1).toString()).style.display="block"
        }    
    }
}
