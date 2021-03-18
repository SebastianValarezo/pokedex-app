import "./normalize.css";
import "./styles.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="App">
        <Searchbar></Searchbar>
      </div>
    </div>
  );
}

export default App;
