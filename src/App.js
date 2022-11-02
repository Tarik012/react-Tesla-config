import logo from "./logo.svg";
import "./App.css";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tesla config</h1>
        <Section
          textH2="Sélectionnez votre véhicule"
          text1="Grande autonomie"
          text2="Performance"
        />
        <Section textH2="Sélectionnez la couleur" />
      </header>
    </div>
  );
}

export default App;
