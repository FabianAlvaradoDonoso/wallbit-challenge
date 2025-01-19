import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import LabelIcon from '@/components/icons/labelIcon'
import { Separator } from '@radix-ui/react-separator'
import { useCart, type IProduct } from '@/context/cartContext'

interface IProductElement {
  product: IProduct
}

export const Product = ({ product }: IProductElement) => {
  const { updateProduct, deleteProduct } = useCart()
  return (
    <article
      key={product.id}
      className="flex space-x-2 rounded-md border border-gray-200 px-3 py-2 dark:border-gray-800"
    >
      <div className="flex flex-row items-center space-x-5">
        <img src={product.image} alt={product.title} className="h-12 w-12 flex-shrink-0" />
        <div className="flex flex-col space-y-2">
          <h3 className="inline-block w-96 truncate">{product.title}</h3>
          <Badge className="w-fit space-x-2 bg-secondary text-primary hover:bg-secondary hover:text-primary">
            <LabelIcon width={12} className="mr-1" />
            {product.category}
          </Badge>
          <Separator className="my-3" />
          <div className="flex flex-row items-center justify-between">
            <div className="my-2 flex h-5 flex-row items-center space-x-2">
              <Button
                size="sm"
                onClick={() => {
                  deleteProduct(product.id)
                }}
              >
                Eliminar
              </Button>

              <Separator orientation="vertical" />

              <div className="flex items-center space-x-2 rounded-lg border border-secondary">
                <Button
                  size="sm"
                  variant="ghost"
                  className="rounded-none border-r hover:rounded-l-sm"
                  onClick={() => {
                    if (product.quantity <= 1) return
                    updateProduct({ ...product, quantity: product.quantity - 1 })
                  }}
                >
                  -
                </Button>
                <p className="p-1 text-sm">{product.quantity}</p>
                <Button
                  size="sm"
                  variant="ghost"
                  className="rounded-none border-l hover:rounded-r-sm"
                  onClick={() => {
                    updateProduct({ ...product, quantity: product.quantity + 1 })
                  }}
                >
                  +
                </Button>
              </div>
            </div>
            <p>${(product.price * product.quantity).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
