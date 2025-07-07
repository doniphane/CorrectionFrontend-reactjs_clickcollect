import type Product from "@/types/Product"
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MinusIcon, PlusIcon } from "lucide-react"

function ProductCard({product}:{product:Product}) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src="https://github.com/shadcn.png" alt="" width={"100%"} />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="cursor-pointer"><MinusIcon/></Button>
        {product.price}€
        <Button className="cursor-pointer"><PlusIcon/></Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
