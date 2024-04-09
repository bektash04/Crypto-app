import "./App.css";
import { CryptoContextProvider } from "./context/crypto-context";
import AppLayout from "./components/Layuot/AppLayout";


function App() {
  return (
    <div className="App">
<CryptoContextProvider>
     <AppLayout/>
      </CryptoContextProvider>

    </div>
  );
}

export default App;
