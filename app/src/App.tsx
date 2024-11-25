import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TravelListPage from "./pages/TravelListPage"
import TravelSinglePage from "./pages/TravelSinglePage";
import TravelEditPage from "./pages/TravelEditPage";
import CategoryListPage from "./pages/CategoryListPage";
import CategoryEditPage from "./pages/CategoryEditPage";

function App() {

  return (
    <BrowserRouter>
      <nav className="flex gap-4 items-center p-4 bg-red-400 text-white">
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
      </nav>

      <div className="container mx-auto mt-10">
        <Routes>
          <Route path="/" element={<TravelListPage />} />
          <Route path="/:id" element={<TravelSinglePage />} />
          <Route path="/edit/:id" element={<TravelEditPage/>} />
          <Route path="/categories" element={<CategoryListPage/>} />
          <Route path="/categories/:id" element={<CategoryEditPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
