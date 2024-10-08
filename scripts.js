// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const disciplinas = [
        { name: "Estrutura de Dados", aulas: [{ title: "Aula 1 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html"  },
                                              { title: "Aula 2 - Variáveis Locais e Globais", link: "EstruturaDados/aula1-conteudo.html"  },
                                              { title: "Aula 3 - Funções e procedimentos", link: "EstruturaDados/aula3/aula3-funcoes-e-procedimentos.html"  },
                                              { title: "Aula 4 - Estruturas de Dados Homogêneas (vetores)", link: "EstruturaDados/aula1-conteudo.html"  },
                                              { title: "Aula 5 - Estruturas de Dados Homogêneas (matrizes)", link: "EstruturaDados/aula1-conteudo.html"  },
                                              { title: "Aula 6 - Estruturas de Dados Heterogênas (arquivos)", link: "EstruturaDados/aula1-conteudo.html"  },
                                              { title: "Aula 7 - Estruturas de Dados Heterogênas (registros)", link: "EstruturaDados/aula1-conteudo.html"  },
                                              { title: "Aula 8 - Ponteiros", link: "EstruturaDados/aula1-conteudo.html"  },
                                              { title: "Aula 9 - Listas", link: "EstruturaDados/aula1-conteudo.html"  },
                                              { title: "Aula 10 - Filas", link: "EstruturaDados/aula1-conteudo.html"  },
                                              { title: "Aula 11 - Pilhas", link: "EstruturaDados/aula1-conteudo.html"  },
                                              { title: "Aula 12 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html"  },
                                              { title: "Aula 13 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 14 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html"  },
                                              { title: "Aula 15 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 16 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 17 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 18 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 19 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 20 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 21 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 22 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 23 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 24 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 25 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 26 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 27 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 28 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 29 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 30 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 31 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 32 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 33 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 34 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 35 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 36 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 37 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 38 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 39 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" },
                                              { title: "Aula 40 - Estrutura de Dados", link: "EstruturaDados/aula1-conteudo.html" }
                                             ] 
        },
        { name: "Prog. Web e BD", aulas: [{ title: "Aula 1 - Ementa da disciplina", link: "ProgWebEBD/aula1/aula1-prog-web-e-banco-de-dados.html" },
                                          { title: "Aula 2 - Introdução a HTML", link: "ProgWebEBD/aula2/aula2-prog-web-e-banco-de-dados.html" },
                                          { title: "Aula 3 - Introdução a CSS", link: "ProgWebEBD/aula3/aula3-prog-web-e-banco-de-dados.html" },
                                          { title: "Aula 4 - Introdução a JavaScript", link: "ProgWebEBD/aula4/aula4-prog-web-e-banco-de-dados.html" },
                                          { title: "Aula 5 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 6 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 7 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 8 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 9 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 10 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 11 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 12 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 13 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 14 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 15 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 16 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 17 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 18 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 19 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 20 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 21 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 22 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 23 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 24 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 25 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 26 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 27 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 28 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 29 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 30 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 31 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 32 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 33 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 34 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 35 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 36 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 37 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 38 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 39 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                          { title: "Aula 40 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" }
                                         ] 
        },
        { name: "Prog. para Dispositivos Móveis", aulas: [{ title: "Aula 1 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 2 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 3 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 4 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 5 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 6 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 7 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 8 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 9 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 10 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 11 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 12 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 13 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 14 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 15 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 16 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 17 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 18 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 19 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 20 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 21 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 22 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 23 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 24 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 25 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 26 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 27 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 28 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 29 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 30 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 31 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 32 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 33 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 34 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 35 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 36 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 37 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 38 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 39 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
                                                          { title: "Aula 40 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" }
                                                        ]
        }
    ];

    const disciplinasList = document.getElementById("disciplinas");
    const aulasDiv = document.getElementById("aulas");

    disciplinas.forEach(disciplina => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = disciplina.name;
        a.href = "#";
        a.addEventListener("click", function (e) {
            e.preventDefault();
            loadAulas(disciplina.aulas);
        });
        li.appendChild(a);
        disciplinasList.appendChild(li);
    });

    function loadAulas(aulas) {
        aulasDiv.innerHTML = ""; // Limpa as aulas existentes
        aulas.forEach(aula => {
            const aulaDiv = document.createElement("div");
            
            if (typeof aula === "string") {
                aulaDiv.textContent = aula;
            } else if (typeof aula === "object" && aula.link) {
                const aulaLink = document.createElement("a");
                aulaLink.href = aula.link;
                aulaLink.textContent = aula.title;
               // aulaLink.target = "_blank"; // Abrir em uma nova aba
                aulaDiv.appendChild(aulaLink);
            }
            aulasDiv.appendChild(aulaDiv);
        });
    }
});
