let indice = 1
let filtros = []
let elements = []
let contElement = []
let clic = 0
for(let i =0;i<19;i++){
    filtros.push(false)
}
function agregarItem(dir,ind){
    let div1 = document.createElement('div')
    div1.className="col-lg-3 text-center"
    div1.style = "padding-top: 10px;padding-bottom: 30px;display:block"
    let aa = document.createElement('a')
    aa.href = "detalle.html"
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
    if(condicionPage(i)){
        let dirs = (i+1).toString()
        agregarItem("stock/"+dirs+".jpg",i)
    }
}
//document.getElementById("1").style = "display:none"
function actCheck(ind,p){
    if(document.getElementById(ind).checked ===true){
        filtros[p]=true;    
    }
    else{
        filtros[p]=false
    }
}

function mostMarcas(mar){
    for(let i=0;i<elements.length;i++){
        let pos = elements[i]
        if(inventario[pos].marca===mar) contElement[i]++; 
    }
}
function mostTallas(datl){
    for(let i=0;i<elements.length;i++){
        let pos = elements[i]
        let aux = false;
        for(let j=0;j<inventario[pos].tallas.length;j++){
            for(let k = 0;k<datl.length;k++){
                if(inventario[pos].tallas[j]===datl[k]) aux=true; 
            }
        }
        if(aux) contElement[i]++;
    }
}
function mostColores(dat){
    for(let i=0;i<elements.length;i++){
        let pos = elements[i]
        let aux = false;
        for(let j=0;j<inventario[pos].colores.length;j++){
            for(let k=0;k<dat.length;k++){
             if(inventario[pos].colores[j]===dat[k]) aux=true;
            } 
        }
        if(aux) contElement[i]++;
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
    clic = 0
    actCheck(ind,p)
    contElement = []
    for(let i=0;i<elements.length;i++){
        document.getElementById((i+1).toString()).style.display="none"
        contElement.push(0)
    }
    let cot = false;
    if(filtros[0]) {mostMarcas("Bata");cot=true}
    if(filtros[1]) {mostMarcas("Power");cot=true}
    if(filtros[2]) {mostMarcas("North Star");cot=true}
    if(filtros[3]) {mostMarcas("Marie Claire");cot=true}
    if(cot) clic++;
    let entrada = []
    if(filtros[4]) entrada.push(36)
    if(filtros[5]) entrada.push(38)
    if(filtros[6]) entrada.push(40)
    if(filtros[7]) entrada.push(42)
    if(filtros[8]) entrada.push(44)
    if(entrada.length>0){
        clic++;
        mostTallas(entrada)
    }
    entrada = []
    if(filtros[9]) entrada.push('rojo')
    if(filtros[10]) entrada.push('azul')
    if(filtros[11]) entrada.push('marron')
    if(filtros[12]) entrada.push('negro')
    if(filtros[13]) entrada.push('blanco')
    if(filtros[14]) entrada.push('rosado')
    if(entrada.length>0){
        clic++
        mostColores(entrada)
    }
    cot = false;
    if(filtros[15]) {mostPrecio(50,150);cot=true}
    if(filtros[16]) {mostPrecio(150,250);cot=true}
    if(filtros[17]) {mostPrecio(250,350);cot=true}
    if(filtros[18]) {mostPrecio(350,450);cot=true}
    if(filtros[19]) {mostPrecio(450,550);cot=true}
    if(cot) clic++
    for(let i=0;i<contElement.length;i++){
        if(contElement[i]===clic)
        document.getElementById((i+1).toString()).style.display="block"
    }
}
for(let i=0;i<elements.length;i++){
    document.getElementById((i+1).toString()).addEventListener('click',function(){
        localStorage.setItem('item',elements[i].toString())
    })
}