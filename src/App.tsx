import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./components/main/Main"
import FilteredProducts from "./components/filtered-products/FilteredProducts"
import SingleProduct from "./components/filtered-products/SingleProduct"
import { useSelector } from "react-redux"

function App() {
  const cart = useSelector((state: any) => state.cart.cart)
  const totalAmount = useSelector((state: any) => state.cart.totalAmount)
  const totalPrice = useSelector((state: any) => state.cart.totalPrice)

  console.log("cart", cart)
  console.log("totalAmount", totalAmount)
  console.log("totalPrice", totalPrice)
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
