import "./list.css";
import { Card } from "../Card";

export const List = ({ listTransactions, deleteTransaction }) => {
  return (
    <div className="list">
      {listTransactions.map((transaction, index) => (
        <Card
          transaction={transaction}
          deleteTransaction={deleteTransaction}
          key={index}
        />
      ))}
    </div>
  );
};
