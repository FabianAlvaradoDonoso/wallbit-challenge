import { useState } from 'react'
import { apiUrl } from '@/config'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/cartContext'
import { Separator } from '@/components/ui/separator'
import { Card, CardHeader, CardContent } from '@/components/ui/card'

interface ISelectProduct {
  id: number
  quantity: number
}

export const AddProducts = () => {
  const { clearProducts, addProduct, products, updateProduct } = useCart()
  const [product, setProduct] = useState<ISelectProduct>({
    id: 1,
    quantity: 1,
  })

  const handleAddProduct = async () => {
    const res = await fetch(`${apiUrl}/${product.id}`)
    const data = await res.json()

    if (!data) return

    const existingProduct = products.find((p) => p.id === product.id)

    if (existingProduct) {
      updateProduct({ ...existingProduct, quantity: existingProduct.quantity + product.quantity })
      return
    }

    const newProduct = {
      ...data,
      quantity: product.quantity,
    }

    addProduct(newProduct)
    setProduct({ id: 1, quantity: 1 })
  }

  return (
    <Card className="flex h-[60vh] w-full flex-col md:w-fit">
      <CardHeader className="text-primary/90">Add Products</CardHeader>
      <CardContent className="flex flex-grow flex-col justify-between overflow-y-auto p-4">
        <div className="flex flex-col space-y-3">
          <div>
            <Label htmlFor="product" className="mb-2 block">
              Product
            </Label>
            <Input
              id="product"
              type="number"
              placeholder="Select product"
              value={product.id}
              onChange={(e) => setProduct({ ...product, id: Number(e.target.value) })}
              max={20}
              min={1}
            />
          </div>
          <div>
            <Label htmlFor="quantity" className="mb-2 block">
              Quantity
            </Label>
            <Input
              id="quantity"
              type="number"
              placeholder="Quantity"
              min={1}
              value={product.quantity}
              onChange={(e) => setProduct({ ...product, quantity: Number(e.target.value) })}
            />
          </div>

          <Button className="my-2 w-full" onClick={handleAddProduct}>
            Add Product
          </Button>
        </div>

        <div className="">
          <Separator className="my-4" />

          <Button className="w-full" onClick={clearProducts} disabled={!products.length}>
            Clear Products
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
