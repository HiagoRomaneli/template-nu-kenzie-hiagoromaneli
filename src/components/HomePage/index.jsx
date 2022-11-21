import "./home.css";

export const HomePage = ({ setPages }) => {
  return (
    <div>
      <div className="home-main">
        <section className="section-home-left">
          <div className="div-title"></div>
          <h2>Centralize o controle das suas finanças</h2>
          <p>de forma rápida e segura</p>
          <button type="button" onClick={() => setPages("SecondPage")}>
            Iniciar
          </button>
        </section>
        <section className="section-home-right">
          <div className="img-home-page"></div>
        </section>
      </div>
    </div>
  );
};
