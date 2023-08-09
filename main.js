const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./img/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./img/reprovado.png" alt="Emoji triste" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat((prompt('Digite a nota mínima:')))

let linhas = '';

form.addEventListener('submit', (e) => {

    e.preventDefault(); // Removendo a atualização da página ao realizar o submit

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();

})

function adicionaLinha() {
    const nomeAtividade = document.getElementById('nome-atividade');
    const notaAtividade = document.getElementById('nota-atividade');

    //Verificando se a atividade já foi registrada
    
    if (atividades.includes(nomeAtividade.value)) {
        alert(`A atividade ${nomeAtividade.value} já foi registrada.`)
    }

    else {

        //Adição de dados aos arrays

        atividades.push(nomeAtividade.value);
        notas.push(parseFloat(notaAtividade.value));

        //Adição de linhas com dados à tabela

        let dados = '<tr>'
        dados += `<td>${nomeAtividade.value}</td>`; // += é concatenação
        dados += `<td>${notaAtividade.value}</td>`;
        dados += `<td>${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`; // Operadores Ternários: "?" = if e ":" = else
        dados += '<tr>'

        linhas += dados;

    }

    nomeAtividade.value = ''
    notaAtividade.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}

function calculaMediaFinal() {
    let somaNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;
}

function atualizaMediaFinal() {

    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(1);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

}