const formulario = document.getElementById('novoItem')
const lista = document.getElementById("lista")

/* O JSON.parse(jsonString) serve para transformar uma string JSON em um objeto javaScript, tanto que o metodo push() de lista não estava funcionando.  
*/
const itens =JSON.parse(localStorage.getItem('itens') )|| []

console.log(itens)

itens.forEach( (elemento)=>{
    // desta forma os elementos html criados não serão excluidos ao recarregar/fechar a página
    // eles serão carregados diretamente do localStorage. 
    criaElemento(elemento)
})

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault()
    /*Toda vez que o formulário for submetido, a função criaElemento() será acionada.*/

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    // verifica se o elemento que foi digitado existe na lista de elementos 
    const existe = itens.find(elemento => elemento.nome === nome.value)
    
    const itemAtual = {
        //colocando o código aqui, é necessário colocar .value 
        'nome': nome.value,
        'quantidade' : quantidade.value
    }



    // criaElemento(nome.value, quantidade.value)
    // agora apenas é necessário passar o itemAtual pois ele já contém os dois valores necessários. 
    criaElemento(itemAtual)

    //transformando itemAtual em objeto para evitar que os dados futuros sejam sobscritos no localStorage
    //JSON.stringify(var) > transforma em uma string
    
    // criando a lista ITEM e colocando cada item atual lá, quando for passar para o localStorage, passa-se a lista
    // para um item novo não subscreva o item antigo. Criando assim, uma lista com os itens salvos no localStorage.
    itens.push(itemAtual)
    localStorage.setItem('itens',JSON.stringify(itens))

    /*Armazena os valores de nome e quantidade no localStorage, mas os valores são substituidos a cana nova inserção. obs: o localStorage só lê obgetos do tipo json,só lê string
    localStorage.setItem('nome',nome) 
    localStorage.setItem('quantidade',quantidade)*/

    nome.value =''
    quantidade.value =''
    nome.focus()
    
})  

function criaElemento(item){
    //constroi um novo elemento e adiciona na lista 
    const novoItem =  document.createElement("li")
    novoItem.classList.add("item")

    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = item.quantidade;
    
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item.nome
    
    lista.appendChild(novoItem)
    
//obs: a criação da JSON string foi colocada dentro da formulário.addEventListener()

}