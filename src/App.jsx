import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import UseRef from "./routes/UseRef";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useRef" element={<UseRef />} />
      </Routes>
    </div>
  );
}

export default App;
