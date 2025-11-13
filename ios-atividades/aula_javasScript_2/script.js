function adicionarTarefa(){
    // recebe o valor do input do usuário
    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value

    //criar novo item <li> e insere na nossa <ul>

    let listaTarefa = document.getElementById("listaTarefa")
    let novaTarefa = document.createElement("li")
    novaTarefa.textContent = tarefa
    listaTarefa.appendChild(novaTarefa)

    //mensagem "tarefa adicionada com sucesso"
    let mensagem = "Tarefa adicionada com sucesso!"
    document.getElementById("mensagem").textContent = mensagem

    //limpa o input do usuário
    inputTarefa.value = ""
}

