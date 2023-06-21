import { Product } from "../../features/slices/productSlice"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react"
import { useDispatch } from "react-redux"
import { singleProduct } from "../../features/slices/productSlice"
import { Link, useParams } from "react-router-dom"

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch()
  const { type } = useParams()
  return (
    <Link to={`/filtered-products/${type}/${product.id}`}>
      <Card
        className="mt-6 w-96"
        onClick={() => dispatch(singleProduct(product.id))}
      >
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={product.img} alt="img-blur-shadow" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {product.name}
          </Typography>
          <Typography>{product.text}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Typography>{product.price}</Typography>
          <Typography>
            {product.color.map((color: string) => (
              <i className={"mr-2"} style={{ background: color }}>
                {color}
              </i>
            ))}
          </Typography>
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default ProductCard
