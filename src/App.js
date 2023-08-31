import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="info/:id" element={<Info/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
