// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const disciplinas = [
        { name: "Estrutura de Dados", aulas: ["Aula 1", "Aula 2", "Aula 3", "Aula 4", "Aula 5", "Aula 6", "Aula 7", "Aula 8", "Aula 9", "Aula 10", "Aula 11", "Aula 12", "Aula 13", "Aula 14", "Aula 15", "Aula 16", "Aula 17", "Aula 18", "Aula 19", "Aula 20"] },
        { name: "Prog. Web e BD", aulas: ["Aula 1", "Aula 2", "Aula 3", "Aula 4", "Aula 5", "Aula 6", "Aula 7", "Aula 8", "Aula 9", "Aula 10", "Aula 11", "Aula 12", "Aula 13", "Aula 14", "Aula 15", "Aula 16", "Aula 17", "Aula 18", "Aula 19", "Aula 20"] },
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
