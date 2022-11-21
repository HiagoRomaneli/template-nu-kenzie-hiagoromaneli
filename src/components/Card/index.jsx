import "./card.css";
import imgDelete from "../../img/ButtonTrash.png";

export const Card = ({ transaction, deleteTransaction }) => {
  return (
    <div className="div-card">
      <div>
        <h3>{transaction.description}</h3>
        <p>{transaction.type}</p>
      </div>
      <div>
        <p>R$ {transaction.value},00</p>
        <button onClick={() => deleteTransaction(transaction)}>
          <img src={imgDelete} alt="imagem do botao"></img>
        </button>
      </div>
    </div>
  );
};
