let indice = 1
let filtros = []
let clic = 0
let elements = []
let contElement = []
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
        if(inventario[pos].marca===mar) contElement[i]++; 
    }
}
function mostTallas(dat){
    for(let i=0;i<elements.length;i++){
        let pos = elements[i]
        for(let j=0;j<inventario[pos].tallas.length;j++){
            if(inventario[pos].tallas[j]===dat) contElement[i]++; 
        }
    }
}
function mostColores(dat){
    for(let i=0;i<elements.length;i++){
        let pos = elements[i]
        for(let j=0;j<inventario[pos].colores.length;j++){
            if(inventario[pos].colores[j]===dat) contElement[i]++; 
        }
    }
}
function mostPrecio(dat1,dat2){
    for(let i=0;i<elements.length;i++){
        let pos = elements[i]
        let aux = inventario[pos].precio
        if(aux>=dat1 && aux<=dat2) contElement[i]++; 
    }
}
function filtrar(ind,p){
    actCheck(ind,p)
    contElement = []
    for(let i=0;i<elements.length;i++){
        document.getElementById((i+1).toString()).style.display="none"
        contElement.push(0)
    }
    if(filtros[0]) mostMarcas("Bata")
    if(filtros[1]) mostMarcas("Power")
    if(filtros[2]) mostMarcas("North Star")
    if(filtros[3]) mostMarcas("King Street")
    if(filtros[4]) mostMarcas("Sparx")
    if(filtros[5]) mostTallas(36)
    if(filtros[6]) mostTallas(38)
    if(filtros[7]) mostTallas(40)
    if(filtros[8]) mostTallas(42)
    if(filtros[9]) mostTallas(44)
    if(filtros[10]) mostColores('rojo')
    if(filtros[11]) mostColores('azul')
    if(filtros[12]) mostColores('marron')
    if(filtros[13]) mostColores('negro')
    if(filtros[14]) mostColores('blanco')
    if(filtros[15]) mostPrecio(50,150)
    if(filtros[16]) mostPrecio(150,250)
    if(filtros[17]) mostPrecio(250,350)
    if(filtros[18]) mostPrecio(350,450)
    if(filtros[19]) mostPrecio(450,550)
    for(let i=0;i<contElement.length;i++){
        if(contElement[i]===clic)
        document.getElementById((i+1).toString()).style.display="block"
    }
}
