import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
