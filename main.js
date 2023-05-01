const formulario = document.getElementById('novoItem')
const lista = document.getElementById("lista")

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault()
    /*Toda vez que o formulário for submetido, a função criaElemento() será acionada.*/
    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})  

function criaElemento(nome, quantidade){
    //constroi um novo elemento e adiciona na lista 
    const novoItem =  document.createElement("li")
    novoItem.classList.add("item")

    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = quantidade;
    
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome
    
    lista.appendChild(novoItem)
}