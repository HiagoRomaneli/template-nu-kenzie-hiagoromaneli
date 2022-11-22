import "./buttonsFilter.css";

export const ButtonsFilter = ({ setFilter }) => {
  return (
    <div className="div-filters">
      <h3>Resumo financeiro</h3>
      <div className="div-buttons-filter">
        <button className="btn-filter" onClick={() => setFilter("todos")}>
          Todos
        </button>
        <button className="btn-filter" onClick={() => setFilter("entrada")}>
          Entrada
        </button>
        <button className="btn-filter" onClick={() => setFilter("despesas")}>
          Despesas
        </button>
      </div>
    </div>
  );
};
