import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const FilteredProducts = () => {
  const products = useSelector((state: any) => state.products.filteredProducts)

  const { type } = useParams<{ type: string }>()
  console.log("type", type)
  return <h1>Products</h1>
}

export default FilteredProducts
