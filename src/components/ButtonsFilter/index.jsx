import "./buttonsFilter.css";

export const ButtonsFilter = () => {
  return (
    <div className="div-filters">
      <h3>Resumo financeiro</h3>
      <div className="div-buttons-filter">
        <button className="btn-filter">Todos</button>
        <button className="btn-filter">Entradas</button>
        <button className="btn-filter">Saidas</button>
      </div>
    </div>
  );
};
