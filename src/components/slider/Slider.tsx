import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../features/slices/sliderSlice"
import { useSelector, useDispatch } from "react-redux"
import { sliderData } from "../../assets/data/dummyData"

interface SliderItem {
  id: string
  img: string
  text: string
}

const Slider = () => {
  const sliderIndex = useSelector((state: any) => state.slider.value)
  const dispatch = useDispatch()
  console.log("sliderIndex", sliderIndex)
  return (
    <div className="relative pb-4">
      <div>
        {sliderData.map((slide: SliderItem) => (
          <div
            key={slide.id}
            className={
              parseInt(slide.id) === sliderIndex
                ? "opacity-100 duration-700 ease-in-out scale-100"
                : "opacity-0 duration-700 ease-in-out scale-95"
            }
          >
            <div>
              {parseInt(slide.id) === sliderIndex && (
                <img src={slide.img} alt={slide.text} />
              )}
            </div>
            <div className="absolute top-44 mx-auto inset-x-1/4">
              {parseInt(slide.id) === sliderIndex && (
                <p className="bg-black text-white text-4xl font-bold tracking-normal leading-none">
                  {slide.text}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex absolute bottom-10 left-[45%]">
        {sliderData.map((slide: SliderItem, index: number) => (
          <div className="mr-4" key={index}>
            <div
              className={
                index === sliderIndex
                  ? "bg-green-300 rounded-full p-4 cursor-pointer"
                  : "bg-white rounded-full p-4 cursor-pointer"
              }
              onClick={() => dispatch(dotSlide(index))}
            ></div>
          </div>
        ))}
      </div>
      <div>
        <button
          className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300"
          onClick={() => dispatch(prevSlide(sliderIndex - 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </button>
        <button
          className="absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300"
          onClick={() => dispatch(nextSlide(sliderIndex + 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Slider
