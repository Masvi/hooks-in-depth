import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import UseRef from "./routes/UseRef";
import UseReducerComponent from "./routes/UseReducer";
import UseMemo from "./routes/UseMemo";
import UseCallback from "./routes/UseCallback";
import UseLayoutEffect from "./routes/UseLayoutEffect";
import UseIdComponent from "./routes/UseId";

import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/useReducer" element={<UseReducerComponent />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/useCallback" element={<UseCallback />} />
        <Route path="/useLayoutEffect" element={<UseLayoutEffect />} />
        <Route path="/useId" element={<UseIdComponent /> } />
      </Routes>
    </div>
  );
}

export default App;
