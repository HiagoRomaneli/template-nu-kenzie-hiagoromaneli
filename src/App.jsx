import { useState } from "react";
import { HomePage } from "./components/HomePage";
import { SecondPage } from "./components/SecondPage";
import "./App.css";

function App() {
  const [pages, setPages] = useState("");

  switch (pages) {
    case "SecondPage":
      return <SecondPage setPages={setPages} />;
    case "HomePage":
      return <HomePage setPages={setPages} />;
    default:
      return <HomePage setPages={setPages} />;
  }
}

export default App;
