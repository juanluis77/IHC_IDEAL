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
    


}