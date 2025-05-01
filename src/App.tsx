import "./Style.css";
import Resumo from "./Pages/Resumo";
import Sidenav from "./Components/Sidenav";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Sidenav />
      <Header />
      <Resumo />
    </div>
  );
}

export default App;
