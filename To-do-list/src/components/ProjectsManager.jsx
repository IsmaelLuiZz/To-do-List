export default function ProjectsManager() {
  return (
    <div id="projetos-section" className="hidden">
      <h3>Gerenciar Projetos</h3>
      <input id="project-input" type="text" placeholder="Digite o nome do projeto" />
      <button id="add-project">Salvar Projeto</button>

      <h4>Projetos Salvos:</h4>
      <ul id="project-list"></ul>
    </div>
  );
}
