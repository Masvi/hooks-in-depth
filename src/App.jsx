import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import UseRef from "./routes/UseRef";
import UseReducerComponent from "./routes/UseReducer";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/useReducer" element={<UseReducerComponent />} />
      </Routes>
    </div>
  );
}

export default App;
