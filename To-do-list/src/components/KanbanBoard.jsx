import KanbanColumn from "./KanbanColumn";

export default function KanbanBoard() {
  return (
    <div className="kanban-board">
      <KanbanColumn title="A Fazer" columnId="to-do" />
      <KanbanColumn title="Em Progresso" columnId="in-progress" />
      <KanbanColumn title="Concluído" columnId="done" />
    </div>
  );
}
