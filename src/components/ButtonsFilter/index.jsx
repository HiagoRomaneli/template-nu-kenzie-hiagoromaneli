import "./buttonsFilter.css";

export const ButtonsFilter = ({ setFilter }) => {
  return (
    <div className="div-filters">
      <h3>Resumo financeiro</h3>
      <div className="div-buttons-filter">
        <button className="btn-filter" onClick={() => setFilter("todos")}>
          todos
        </button>
        <button className="btn-filter" onClick={() => setFilter("entrada")}>
          entrada
        </button>
        <button className="btn-filter" onClick={() => setFilter("despesas")}>
          despesas
        </button>
      </div>
    </div>
  );
};
