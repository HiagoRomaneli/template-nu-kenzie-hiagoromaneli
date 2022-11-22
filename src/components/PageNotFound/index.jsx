import "./pageNotFound.css";
import NoCard from "../../img/NoCard.png";

export const PageNotFound = () => {
  return (
    <div>
      <h3>Você ainda não possui nenhum lançamento!</h3>
      <img src={NoCard} alt="" />
    </div>
  );
};
