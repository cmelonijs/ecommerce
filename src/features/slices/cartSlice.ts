import { createSlice } from "@reduxjs/toolkit"

interface State {
  cart: any[]
  amount: number
  totalAmount: number
  totalPrice: number
}

const initialState: State = {
  cart: [],
  amount: 0,
  totalAmount: 0,
  totalPrice: 0,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productId = action.payload
      try {
        const exists = state.cart.find(
          (item) => item.id === productId && item.size === productId.size,
        )
        if (exists) {
          exists.amount++
          exists.totalPrice += productId.price
          state.totalAmount++
          state.totalPrice += productId.price
        } else {
          state.cart.push({
            id: productId.id,
            price: productId.price,
            size: productId.size,
            amount: 1,
            totalPrice: productId.price,
            name: productId.name,
          })
          state.totalAmount++
          state.totalPrice += productId.price
        }
      } catch (err) {
        console.log(err)
      }
    },
  },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
