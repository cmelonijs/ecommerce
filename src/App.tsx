import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./components/main/Main"
import FilteredProducts from "./components/filtered-products/FilteredProducts"
import SingleProduct from "./components/filtered-products/SingleProduct"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/filtered-products/:type"
            element={<FilteredProducts />}
          />
          <Route
            path="/filtered-products/:type/:id"
            element={<SingleProduct />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
