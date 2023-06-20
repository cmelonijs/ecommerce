import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import ProductCard from "./ProductCard"
import { Product } from "../../features/slices/productSlice"

const FilteredProducts = () => {
  const products = useSelector((state: any) => state.products.filteredProducts)

  const { type } = useParams<{ type: string }>()
  console.log("type", type)
  return (
    <>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-4xl text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>
        </div>
        <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
          {products.map((product: Product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FilteredProducts
