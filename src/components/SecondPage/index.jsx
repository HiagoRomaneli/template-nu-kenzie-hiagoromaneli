import "./secondPage.css";
import { useState } from "react";
import { ButtonsFilter } from "../ButtonsFilter";
import { Form } from "../Form";
import { Header } from "../Header";
import { List } from "../List";
import { TotalMoney } from "../TotalMoney";

export const SecondPage = ({ setPages }) => {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "despesas", value: -150 },
  ]);

  function deleteTransaction(transactionReceived) {
    const filterTransactions = listTransactions.filter(
      (transaction) => transaction !== transactionReceived
    );

    setListTransactions(filterTransactions);
  }

  return (
    <div className="App">
      <div className="App-header">
        <Header setPages={setPages} />
        <div className="div-main">
          <section className="section-left">
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
            <TotalMoney listTransactions={listTransactions} />
          </section>
          <section className="section-right">
            <ButtonsFilter
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
            <List
              listTransactions={listTransactions}
              deleteTransaction={deleteTransaction}
            />
          </section>
        </div>
      </div>
    </div>
  );
};
