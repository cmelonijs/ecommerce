import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const SingleProduct = () => {
  const product = useSelector((state: any) => state.products.singleProduct)

  console.log("product", product)
  return <h1>Product</h1>
}

export default SingleProduct
