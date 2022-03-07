import "./App.css";
import Wild from "./Wild.png";
import Dictionary from "./Dictionary";
import "./Dictionary.css";

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <img src={Wild} className="img-fluid App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="travel" />
        </main>
        <footer className="App-footer">Coded by Julia Planchon</footer>
      </div>
    </div>
  );
}

export default App;
