function adicionarTarefa(){
    // recebe o valor do input do usuário
    let campoTarefa = document.getElementById("inputTarefa") //defino a variável campoTarefa e que seu valor vem do inputTarefa
    let tarefa = campoTarefa.value //defino a variável tarefa e que seu valor é igual ao do campoTarefa

    //criar novo item <li> e insere na nossa <ul>
    let lista = document.getElementById("listaTarefas") //defino a variável lista e que seu valor vem da listaTarefas
    let novaTarefa = document.createElement("li") //defino a variável novaTarefa e que seu valor cria um elemento <li>
    novaTarefa.textContent = tarefa //chamo a variável novaTarefa e determino que ele imprimirá um texto com o valor da variável tarefa
    lista.appendChild(novaTarefa) //a lista agora tem como elemento filho a variável novaTarefa

    //mensagem "tarefa adicionada com sucesso"
    let mensagem = "Tarefa adicionada com sucesso!" //defino que a variável mensagem tem o valor de um texto
    document.getElementById("mensagem").textContent = mensagem // realizo a impressão do que foi determinado na variável mensagem

    //limpa o input do usuário
    campoTarefa.value = ""//determino o valor do campoTareda como vazio
}

