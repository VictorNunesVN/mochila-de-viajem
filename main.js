const formulario = document.getElementById('novoItem')
const lista = document.getElementById("lista")
const item = []

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
    

    //transformando itemAtual em objeto para evitar que os dados futuros sejam sobscritos no localStorage
    //JSON.stringify(var) > transforma em uma string
    const itemAtual = {
        'nome': nome,
        'quantidade' : quantidade
    }
    // criando a lista ITEM e colocando cada item atual lá, quando for passar para o localStorage, passa-se a lista
    // para um item novo não subscreva o item antigo. Criando assim, uma lista com os itens salvos no localStorage.
    item.push(itemAtual)
    localStorage.setItem('item',JSON.stringify(item))

    /*Armazena os valores de nome e quantidade no localStorage, mas os valores são substituidos a cana nova inserção. obs: o localStorage só lê obgetos do tipo json,só lê string
    localStorage.setItem('nome',nome) 
    localStorage.setItem('quantidade',quantidade)*/

}