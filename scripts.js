// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const disciplinas = [
        { name: "Estrutura de Dados", aulas: ["Aula 1", "Aula 2", "Aula 3", "Aula 4", "Aula 5", "Aula 6", "Aula 7", "Aula 8", "Aula 9", "Aula 10", "Aula 11", "Aula 12", "Aula 13", "Aula 14", "Aula 15", "Aula 16", "Aula 17", "Aula 18", "Aula 19", "Aula 20"] },
        { name: "Prog. Web e BD", aulas: [{ title: "Aula 1 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },
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
                                          { title: "Aula 40 - Introdução a JavaScript", link: "ProgWebEBD/aula3-introducao-javascript.html" },] 
        },
        { name: "Prog. para Dispositivos Móveis", aulas: ["Aula 1", "Aula 2", "Aula 3", "Aula 4", "Aula 5", "Aula 6", "Aula 7", "Aula 8", "Aula 9", "Aula 10", "Aula 11", "Aula 12", "Aula 13", "Aula 14", "Aula 15", "Aula 16", "Aula 17", "Aula 18", "Aula 19", "Aula 20"] }
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
                aulaLink.target = "_blank"; // Abrir em uma nova aba
                aulaDiv.appendChild(aulaLink);
            }
            aulasDiv.appendChild(aulaDiv);
        });
    }
});
