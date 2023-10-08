import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import NoPage from "./pages/404";

function App() {

  return (
    <BrowserRouter>
      {/* you can make it null */}
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
