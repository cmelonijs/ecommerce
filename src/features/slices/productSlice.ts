import { createSlice } from "@reduxjs/toolkit"
import { storeData } from "../../assets/data/dummyData"

export interface Product {
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
  singleProduct: Product | any
}

const initialState: State = {
  filteredProducts:
    JSON.parse(sessionStorage.getItem("filteredProducts")!) || storeData,
  singleProduct: JSON.parse(sessionStorage.getItem("singleProduct")!) || {},
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
      } catch (err) {
        console.log(err)
      }
    },
    singleProduct: (state, action) => {
      try {
        const singleProduct = storeData.filter((product) => {
          return product.id === action.payload
        })
        state.singleProduct = singleProduct
        const saveState = JSON.stringify(singleProduct)
        sessionStorage.setItem("singleProduct", saveState)
      } catch (err) {
        console.log(err)
      }
    },
  },
})

export const { filterProducts, singleProduct } = productSlice.actions
export default productSlice.reducer
