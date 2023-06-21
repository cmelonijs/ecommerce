import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Product } from "../../features/slices/productSlice"
import { useState } from "react"
import { Button, Tooltip } from "@material-tailwind/react"

const SingleProduct = () => {
  const product = useSelector((state: any) => state.products.singleProduct)
  const { id } = useParams()
  const productSize = product[0].size ? product[0].size[0] : ""
  const [size, setSize] = useState(productSize)

  return (
    <div>
      {product
        .filter((product: Product) => product.id === id)
        .map((item: any, idx: number) => (
          <div key={idx} className="flex justify-center items-center py-10">
            <div className="pl-44 grow-[2]">
              <img
                src={item.img}
                className="h-[850px] rounded-lg"
                alt="img-blur-shadow"
              />
            </div>
            <div className="grow-[3]">
              <div className="max-w-lg">
                <h5 className="text-2xl font-bold tracking-normal leading-none">
                  {item.name}
                </h5>
                <p className="text-orange-700 text-xl font-bold tracking-normal leading-none pb-4">
                  15% OFF
                </p>
                <p className="text-gray-700 text-xl font-bold tracking-normal leading-none pb-4">
                  {item.text}
                </p>
                <div className="pb-4">
                  {item.size && (
                    <div>
                      <label
                        htmlFor="countries"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Pick a size
                      </label>
                      <select
                        onChange={(e) => setSize(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        {item.size.map((size: string) => (
                          <option key={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                  )}
                  <Tooltip content="Add to cart" placement="bottom">
                    <Button
                      color="gray"
                      size="lg"
                      ripple={true}
                      variant="outlined"
                    >
                      Add to cart
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default SingleProduct
