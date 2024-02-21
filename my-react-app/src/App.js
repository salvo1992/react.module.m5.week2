import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import Details from "./Pages/Details/Details";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />} />

      <Route path="book/:id" element={<Details />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
