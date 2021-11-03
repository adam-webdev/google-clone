import "./App.css";
import Routing from "./components/Routing";
import Navbar from "./components/Navbar";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Navbar />
      <List />
      <Routing />
    </div>
  );
}

export default App;
