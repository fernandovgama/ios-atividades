function adicionarTarefa(){
    
    // recebe valor do input do usuário
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem")

    // se o valor do input for vazio mostre uma mensagem de erro para o usuário

    if (tarefa == ""){ 
        //mostre uma mensagem de erro
        let mensagemErro = "Digite alguma tarefa!!!"
        mensagem.textContent = mensagemErro
        alert("UPEA RATINHOOO")
    }   

    else{ 
        //mensagem de tarefa adicionada com sucesso
        let mensagemSucesso = "Tarefa adicionada com sucesso"
        mensagem.textContent = mensagemSucesso
        
        //cria um novo item <li> e insere na lista
        const listaTarefa = document.getElementById("listaTarefa")
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefa
        listaTarefa.appendChild(novaTarefa) 
    }
    inputTarefa.value = ""
}