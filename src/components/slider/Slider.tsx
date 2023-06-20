import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../features/slices/sliderSlice"
import { useSelector, useDispatch } from "react-redux"

const Slider = () => {
  const sliderIndex = useSelector((state: any) => state.slider.value)
  const dispatch = useDispatch()
  console.log("sliderIndex", sliderIndex)
  return (
    <div>
      <button onClick={() => dispatch(prevSlide(sliderIndex - 1))}>
        Previous
      </button>
      <button onClick={() => dispatch(nextSlide(sliderIndex + 1))}>Next</button>
    </div>
  )
}

export default Slider
