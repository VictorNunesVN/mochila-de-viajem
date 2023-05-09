const formulario = document.getElementById('novoItem')
const lista = document.getElementById("lista")

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault()
    /*Toda vez que o formulário for submetido, a função criaElemento() será acionada.*/

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    criaElemento(nome.value, quantidade.value)

    nome.value =''
    quantidade.value =''
    nome.focus()
    
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

    // Armazena os valores de nome e quantidade no localStorage, mas os valores são substituidos a cana nova inserção. 
    localStorage.setItem('nome',nome) 
    localStorage.setItem('quantidade',quantidade)
}