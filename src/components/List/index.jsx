import "./list.css";
import { Card } from "../Card";
import { PageNotFound } from "../PageNotFound";

export const List = ({ listTransactions, deleteTransaction }) => {
  return (
    <div className="list">
      {listTransactions.length === 0 && <PageNotFound />}
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
