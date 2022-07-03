let item = null
if (typeof(Storage) !== "undefined") {
    item = localStorage.getItem('item')
} 
if(item!=null){
    let ind = parseInt(item)
    let ob = inventario[ind]
    document.getElementById("1").src = "stock/"+ob.id.toString()+".jpg"
    document.getElementById("2").src = "stock/"+ob.id.toString()+"_1.jpg"
    document.getElementById("3").src = "stock/"+ob.id.toString()+"_2.jpg"
    document.getElementById("4").src = "stock/"+ob.id.toString()+".jpg"
    document.getElementById("5").src = "stock/"+ob.id.toString()+"_1.jpg"
    document.getElementById("6").src = "stock/"+ob.id.toString()+"_2.jpg"
    document.getElementById("nombre").innerText = ob.nombre
    document.getElementById("marca").innerText = ob.marca
    document.getElementById("precio").innerText = "Bs. "+ob.precio
    for(let i = 0;i<ob.tallas.length;i++){
        let aux = document.getElementById('tallas')
        let oby = document.createElement('p')
        oby.style="background-color: rgb(206, 194, 194); width: 25px; display: inline-block;margin-right: 5px;margin-left: 5px;"
        oby.className = "text-center"
        oby.innerText=ob.tallas[i]
        aux.appendChild(oby.cloneNode(true))
        
    }
    for(let i = 0;i<ob.colores.length;i++){
        let aux = document.getElementById('colores')
        let oby= document.createElement('p')
        oby.style="display: inline-block;padding-right: 15px;"
        let cir = document.createElement('span')
        let dcir = document.createElement('b')
        if(ob.colores[i]==='rojo') cir.style="background-color: red; display: inline-block;height: 25px;width: 25px;border-radius: 50%;vertical-align: sub;"
        if(ob.colores[i]==='azul') cir.style="background-color: blue; display: inline-block;height: 25px;width: 25px;border-radius: 50%;vertical-align: sub;"
        if(ob.colores[i]==='marron') cir.style="background-color: brown; display: inline-block;height: 25px;width: 25px;border-radius: 50%;vertical-align: sub;"
        if(ob.colores[i]==='negro') cir.style="background-color: black; display: inline-block;height: 25px;width: 25px;border-radius: 50%;vertical-align: sub;"
        if(ob.colores[i]==='blanco') cir.style="background-color: white; display: inline-block;height: 25px;width: 25px;border-radius: 50%;vertical-align: sub;border-style: solid;"
        dcir.innerText = "  "+ob.colores[i] 
        oby.appendChild(cir)
        oby.appendChild(dcir)
        aux.appendChild(oby.cloneNode(true))
        
    }


}