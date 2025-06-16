console.log(alunos);

function getBarColor(evasao) {
    if (evasao > 0.7) return "bg-danger";
    if (evasao > 0.4) return "bg-warning";
    if (evasao > 0.2) return "bg-info";
    return "bg-success";
}

function obterMatriculaDaURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("matricula");
}

// Função para buscar os dados do aluno pela matrícula
function carregarDadosAluno(matricula) {
    // Busca o aluno no array de alunos
    const aluno = alunos.find(aluno => aluno.matricula === parseInt(matricula, 10));

    if (!aluno) {
        console.error("Aluno não encontrado!");
        return;
    }

    // Preenche os dados do aluno na página
    document.getElementById("nome-aluno").textContent = aluno.nome;
    document.getElementById("matricula-aluno").textContent = aluno.matricula;
    document.getElementById("curso-aluno").textContent = aluno.curso;
    document.getElementById("evasao-aluno").textContent = `${(aluno.probabilidade_evasao * 100).toFixed(1)}%`;

    // Renderiza o gráfico de probabilidade de evasão (exemplo fictício)
    renderizarGraficoEvasao(aluno);
}

// Função para renderizar o gráfico de evasão (exemplo fictício)
function renderizarGraficoEvasao(aluno) {
    const ctx = document.getElementById("graficoEvasao").getContext("2d");

    // Dados fictícios para o gráfico (substitua por dados reais, se necessário)
    const anos = ["2020", "2021", "2022", "2023", "2024"];
    const probabilidades = Object.values(aluno.historico_probabilidade_evasao).map(p => p * 100); // Exemplo aleatório

    new Chart(ctx, {
        type: "line",
        data: {
            labels: anos,
            datasets: [{
                label: "Probabilidade de Evasão (%)",
                data: probabilidades,
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderWidth: 2,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: "top"
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + "%";
                        }
                    }
                }
            }
        }
    });
}

// Chama a função para carregar os dados do aluno (substitua pela matrícula desejada)
document.addEventListener("DOMContentLoaded", () => {
    const matriculaAluno = obterMatriculaDaURL(); // Matrícula do aluno a ser carregado
    if (matriculaAluno) {
        carregarDadosAluno(matriculaAluno);
    } else {
        console.error("Matrícula não encontrada na URL!");
    }
});