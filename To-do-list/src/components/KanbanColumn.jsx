export default function KanbanColumn({ title, columnId }) {
  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      <div
        className="kanban-cards"
        id={columnId}
      />
      <button>Adicionar Tarefa</button>
    </div>
  );
}
