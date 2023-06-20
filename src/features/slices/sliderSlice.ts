import { createSlice } from "@reduxjs/toolkit"

interface State {
  value: number
  length: number
}

const initialState: State = {
  value: 0,
  length: 4,
}

export const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    nextSlide(state, action) {
      console.log("state", state)
      console.log("action.payload", action.payload)
      state.value = action.payload > state.length ? 0 : action.payload
    },
    prevSlide(state, action) {
      console.log("state", state)
      console.log("action.payload", action.payload)
      state.value = action.payload < 0 ? state.length : action.payload
    },
    dotSlide() {},
  },
})

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions

export default sliderSlice.reducer
