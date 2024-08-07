let banco = [
    {'tarefa': 'estudar', 'status':''},
    {'tarefa': 'ler', 'status': 'checked'}
];

const criaritem = (tarefa, status) => {
    const item = document.createElement('label');
    item.classList.add('item');
    item.innerHTML = `
        <input type="checkbox" ${status}>
        <div>${tarefa}</div>
        <input type="button" value="done">
    `;
    document.getElementById('items').appendChild(item);
};

const limpartarefas=()=> {
    const limpartela = document.getElementById('items')
    while (limpartela.firstChild){
        limpartela.removeChild(limpartela.lastChild)
    }
}

const atualizartela = () => {
    // Limpe a lista atual
    document.getElementById('items').innerHTML = '';

    // Adicione cada item da lista
    banco.forEach(item => criaritem(item.tarefa, item.status));
};

const newtask = () => {
    // Obtenha o valor do campo de texto
    const input = document.getElementById('newitem');
    const tarefa = input.value.trim();

    // Verifique se o campo não está vazio
    if (tarefa !== '') {
        // Adicione a nova tarefa ao array banco
        banco.push({ tarefa: tarefa, status: '' });

        // Limpe o campo de texto
        input.value = '';

        // Atualize a tela para mostrar a nova tarefa
        atualizartela();
    } else {
        alert('Por favor, insira uma tarefa.');
    }
};

atualizartela();

