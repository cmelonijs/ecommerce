import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./components/main/Main"
import FilteredProducts from "./components/filtered-products/FilteredProducts"

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
