import { createSlice } from "@reduxjs/toolkit"
import { sliderData } from "../../assets/data/dummyData"

interface State {
  value: number
  length: number
}

const initialState: State = {
  value: 0,
  length: sliderData.length - 1,
}

export const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    nextSlide(state, action) {
      console.log("action.payload", action.payload)
      state.value = action.payload > state.length ? 0 : action.payload
    },
    prevSlide(state, action) {
      console.log("action.payload", action.payload)
      state.value = action.payload < 0 ? state.length : action.payload
    },
    dotSlide(state, action) {
      const slide = action.payload
      console.log("dot", slide)
      state.value = slide
    },
  },
})

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions

export default sliderSlice.reducer
