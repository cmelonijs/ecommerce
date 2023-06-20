import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import sliderReducer from "../features/slices/sliderSlice"

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
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
