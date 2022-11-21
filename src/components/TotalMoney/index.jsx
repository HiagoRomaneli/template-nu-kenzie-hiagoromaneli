import "./totalMoney.css";

export const TotalMoney = ({ listTransactions }) => {
  const total = listTransactions.reduce((acc, current) => {
    return current.value + acc;
  }, 0);

  return (
    <div className="div-total-money">
      <div>
        <h3>Valor total:</h3>
        <p>O valor se refere ao saldo</p>
      </div>
      <div>
        <p className="value">$ {total}</p>
      </div>
    </div>
  );
};
