import { Product } from '@/components/Product'
import { useCart } from '@/context/cartContext'
import { Separator } from '@/components/ui/separator'
import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card'

export const Cart = () => {
  const { products, startedDate, getTotalPrice, getTotalProducts } = useCart()

  return (
    <Card className="flex h-[60vh] w-full flex-col md:w-[500px] lg:w-[600px]">
      <CardHeader>
        <CardTitle className="flex flex-row justify-between">
          <p className="text-primary/90">My Cart ({getTotalProducts})</p>
          <span className="text-sm font-light">{startedDate.toLocaleString()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-grow flex-col justify-between overflow-y-auto p-4">
        <section className="flex flex-col space-y-3 overflow-y-auto border-gray-200 dark:border-gray-800">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </section>
        <div>
          <Separator className="my-3" />
          <div className="flex flex-row items-center justify-between">
            <h3>Total:</h3>
            <p>${getTotalPrice.toFixed(2)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
