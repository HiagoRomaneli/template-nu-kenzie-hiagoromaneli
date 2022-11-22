import "./card.css";

export const Card = ({ transaction, deleteTransaction }) => {
  return (
    <div className="div-card">
      <div>
        <h3>{transaction.description}</h3>
        <p>{transaction.type}</p>
      </div>
      <div>
        <p>R$ {transaction.value},00</p>
        <button onClick={() => deleteTransaction(transaction)}></button>
      </div>
    </div>
  );
};
