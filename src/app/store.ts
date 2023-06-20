import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import sliderReducer from "../features/slices/sliderSlice"
import productsReducer from "../features/slices/productSlice"

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
