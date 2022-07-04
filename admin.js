function addColores(){
    let aux = document.getElementById('col').value
    let cont = document.getElementById('colores').innerText 
    aux = aux + ";"
    document.getElementById('colores').innerText =cont + aux
}
function addTallas(){
    let aux = document.getElementById('tal').value
    let cont = document.getElementById('tallas').innerText 
    aux = aux + ";"
    document.getElementById('tallas').innerText =cont + aux
}