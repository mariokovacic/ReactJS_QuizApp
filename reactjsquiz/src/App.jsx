import "./App.css";
import { Kviz } from "./components/kviz";

function App() {
  const mainTitle = document.getElementById("mainTitle");

  return (
    <div className="App">
      <h1 className="theMainTitle" id="theMainTitle">
        How well do you know me QUIZ?
      </h1>
      {/* OUR MAIN COMPONENT IS HERE */}
      <Kviz mainTitle={mainTitle} />
    </div>
  );
}

export default App;
