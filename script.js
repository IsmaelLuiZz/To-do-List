    // Permitir arrastar o elemento
function allowDrop(event) {
    event.preventDefault();
}

    // Função para iniciar o arrastar
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

    // Função para soltar o cartão na coluna
function drop(event) {
    event.preventDefault();
    const cardId = event.dataTransfer.getData("text");
    const card = document.getElementById(cardId);
    event.target.appendChild(card);
}

    // Função para adicionar um novo cartão
function addCard(columnId) {
    const cardText = prompt("Digite o texto da nova tarefa:");
    if (!cardText) return;

    const cardId = `card-${new Date().getTime()}`;
    const cardElement = document.createElement("div");
    cardElement.id = cardId;
    cardElement.className = "kanban-card";
    cardElement.draggable = true;
    cardElement.ondragstart = drag;
    cardElement.textContent = cardText;

    // Botão para remover o cartão
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.onclick = () => cardElement.remove();
    removeButton.style.marginTop = "5px";
    removeButton.style.backgroundColor = "#dc3545";

    cardElement.appendChild(removeButton);
    document.getElementById(columnId).appendChild(cardElement);
}

// Referências aos elementos da interface
const sidebar = document.querySelector('.sidebar');
const toggleSidebarButton = document.querySelector('.toggle-sidebar');
const projetosButton = document.getElementById('btn-projetos');
const projetosSection = document.getElementById('projetos-section');
const projectInput = document.getElementById('project-input');
const addProjectButton = document.getElementById('add-project');
const projectList = document.getElementById('project-list');

// Alternar a visibilidade da barra lateral
toggleSidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Alternar exibição da seção de projetos
projetosButton.addEventListener('click', () => {
    projetosSection.classList.toggle('hidden');
});

// Função para carregar projetos salvos
function loadProjects() {
    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    projectList.innerHTML = ''; // Limpa a lista
    savedProjects.forEach((project, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${project}
            <button onclick="deleteProject(${index})">&times;</button>
        `;
        projectList.appendChild(listItem);
    });
}

// Salvar novo projeto
function saveProject() {
    const projectName = projectInput.value.trim();
    if (projectName === '') {
        alert('Por favor, insira um nome para o projeto!');
        return;
    }

    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    savedProjects.push(projectName);
    localStorage.setItem('projects', JSON.stringify(savedProjects));
    projectInput.value = ''; // Limpa o campo
    loadProjects(); // Atualiza a lista
}

// Excluir projeto
function deleteProject(index) {
    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    savedProjects.splice(index, 1);
    localStorage.setItem('projects', JSON.stringify(savedProjects));
    loadProjects();
}

// Eventos
addProjectButton.addEventListener('click', saveProject);

// Carregar projetos ao carregar a página
window.addEventListener('DOMContentLoaded', loadProjects);
