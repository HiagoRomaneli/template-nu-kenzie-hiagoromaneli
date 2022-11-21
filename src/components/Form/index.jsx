import "./form.css";
import { useState } from "react";

export const Form = ({ listTransactions, setListTransactions }) => {
  const [newDescription, setNewDescription] = useState("");
  const [newValue, setNewValue] = useState("");
  const [newType, setNewType] = useState("entrada");

  const addNewTransaction = () => {
    if (newDescription !== "" && newValue !== "") {
      const newData = {
        description: newDescription,
        type: newType,
        value: Number(newValue),
      };

      setListTransactions([...listTransactions, newData]);
    }
  };

  return (
    <form onSubmit={(event) => addNewTransaction(event.preventDefault())}>
      <label htmlFor="">Descrição</label>
      <input
        placeholder="Digite aqui sua descrição"
        type="text"
        value={newDescription}
        onChange={(event) => setNewDescription(event.target.value)}
      />
      <div className="div-form">
        <div>
          <label htmlFor="">Valor</label>
          <input
            placeholder="0"
            type="number"
            value={newValue}
            onChange={(event) => setNewValue(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tipo-value">Tipo de valor</label>
          <select
            name="tipo-value"
            id="tipo-value"
            value={newType}
            onChange={(event) => setNewType(event.target.value)}
          >
            <option value="despesas">despesas</option>
            <option value="entrada">entrada</option>
          </select>
        </div>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
};
