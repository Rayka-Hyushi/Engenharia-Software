console.log(alunos);
console.log(codigosParaNomes);

function getBarColor(evasao) {
    if (evasao > 0.7) return "bg-danger";
    if (evasao > 0.4) return "bg-warning";
    if (evasao > 0.2) return "bg-info";
    return "bg-success";
}

function getCodigoCurso() {
    const params = new URLSearchParams(window.location.search);
    return params.get('codigo');
}

const tbody = document.getElementById("tabela-alunos");
const inputPesquisa = document.querySelector('.input-group input');
const codigoCurso = getCodigoCurso();
const nomeCurso = codigosParaNomes[codigoCurso];

let alunosFiltrados = alunos.filter(aluno => aluno.curso === nomeCurso);
let filtroAtual = 'evasao';
let ordemCrescente = false;

document.querySelector('.container h2')?.remove(); // Remove se já existir
const titulo = document.createElement('h2');
titulo.className = "mb-4";
titulo.textContent = nomeCurso ? `Alunos do curso: ${nomeCurso}` : "Curso não encontrado";
titulo.style.color = "#212529"; // Cor escura para melhor contraste
titulo.style.backgroundColor = "#fff"; // Fundo branco para contraste
titulo.style.padding = "0.5rem 1rem";
titulo.style.borderRadius = "0.25rem";
document.querySelector('.container').prepend(titulo);

function renderTabela(lista) {
    tbody.innerHTML = '';
    lista.forEach(aluno => {
        const row = document.createElement("tr");
        row.style.cursor = "pointer";
        row.addEventListener("click", () => {
            window.location.href = `aluno.html?matricula=${encodeURIComponent(aluno.matricula)}`;
        });
        row.innerHTML = `
                        <td>${aluno.nome}</td>
                        <td>${aluno.matricula}</td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar ${getBarColor(aluno.probabilidade_evasao)}" style="width: ${(aluno.probabilidade_evasao * 100).toFixed(1)}%; min-width: 60px;">
                                    ${(aluno.probabilidade_evasao * 100).toFixed(1).replace('.', ',')}%
                                </div>
                            </div>
                        </td>`;
        tbody.appendChild(row);
    });
}

function filtrarTabela() {
    const termo = inputPesquisa.value.trim().toLowerCase();
    alunosFiltrados = alunos.filter(aluno =>
        aluno.nome.toLowerCase().includes(termo) ||
        String(aluno.matricula).includes(termo) ||
        (aluno.probabilidade_evasao * 100).toFixed(1).replace('.', ',').includes(termo) ||
        (aluno.probabilidade_evasao * 100).toFixed(1).includes(termo)
    );
    ordenarTabela();
}

function ordenarTabela() {
    alunosFiltrados.sort((a, b) => {
        let valA, valB;
        if (filtroAtual === 'nome') {
            valA = a.nome.toLowerCase();
            valB = b.nome.toLowerCase();
            if (valA < valB) return ordemCrescente ? -1 : 1;
            if (valA > valB) return ordemCrescente ? 1 : -1;
            return 0;
        } else if (filtroAtual === 'matricula') {
            valA = a.matricula;
            valB = b.matricula;
            return ordemCrescente ? valA - valB : valB - valA;
        } else if (filtroAtual === 'evasao') {
            valA = a.probabilidade_evasao;
            valB = b.probabilidade_evasao;
            return ordemCrescente ? valA - valB : valB - valA;
        }
        return 0;
    });
    renderTabela(alunosFiltrados);
}

function setFiltro(filtro, crescente) {
    filtroAtual = filtro;
    ordemCrescente = crescente;
    const nomesFiltro = {
        nome: "Nome",
        matricula: "Matrícula",
        evasao: "Evasão"
    };
    const ordem = ordemCrescente ? "↑" : "↓";
    document.getElementById('texto-filtro').textContent = `${nomesFiltro[filtro]} ${ordem}`;
    ordenarTabela();
}

// Eventos
inputPesquisa.addEventListener('input', filtrarTabela);

// Inicialização
ordenarTabela();