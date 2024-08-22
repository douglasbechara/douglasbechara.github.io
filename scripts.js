// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const disciplinas = [
        { name: "Matemática", aulas: ["Aula 1", "Aula 2", "Aula 3"] },
        { name: "Física", aulas: ["Aula 1", "Aula 2"] },
        { name: "Química", aulas: ["Aula 1"] }
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
            aulaDiv.textContent = aula;
            aulasDiv.appendChild(aulaDiv);
        });
    }
});
