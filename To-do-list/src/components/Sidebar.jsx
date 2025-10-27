import ProfileSection from "./ProfileSection";
import ProjectsManager from "./ProjectsManager";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ProfileSection />

      <ul className="menu">
        <li><button id="btn-projetos" className="menu-item">Projetos</button></li>
        <li><a href="#">Configurações</a></li>
        <li><a href="#">Ajuda</a></li>
      </ul>

      <ProjectsManager />
    </aside>
  );
}
