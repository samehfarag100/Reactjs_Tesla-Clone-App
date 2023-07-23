import "./App.css";
import HeaderComponents from "./components/header/HeaderComponents";
import HomeComponents from "./components/home/HomeComponents";

function App() {
  return (
    <div className="App">
      {/* ########### Header ########### */}
      <HeaderComponents />
      {/* ########### Home ########### */}
      <HomeComponents />
    </div>
  );
}

export default App;
