import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" index element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
