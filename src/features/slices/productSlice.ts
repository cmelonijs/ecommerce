import { createSlice } from "@reduxjs/toolkit"
import { storeData } from "../../assets/data/dummyData"

interface Product {
  id: string
  img: string
  name: string
  text: string
  type: string
  size: string[]
  color: string[]
  gender: string
  price: number
}

interface State {
  filteredProducts: Product[] | any[]
}

const initialState: State = {
  filteredProducts:
    JSON.parse(sessionStorage.getItem("filteredProducts")!) || storeData,
}

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      try {
        const filter = storeData.filter((product) => {
          return product.type === action.payload
        })
        state.filteredProducts = filter
        const saveState = JSON.stringify(filter)
        sessionStorage.setItem("filteredProducts", saveState)
      } catch (err) {}
    },
  },
})

export const { filterProducts } = productSlice.actions
export default productSlice.reducer
