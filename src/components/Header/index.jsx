import "./header.css";

export const Header = ({ setPages }) => {
  return (
    <header>
      <div>
        <div className="title"></div>
        <button
          type="button"
          onClick={() => setPages("HomePage")}
          className="btn-header"
        >
          Inicio
        </button>
      </div>
    </header>
  );
};
