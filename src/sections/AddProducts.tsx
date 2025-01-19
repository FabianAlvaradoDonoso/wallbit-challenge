import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Card, CardHeader, CardContent } from '@/components/ui/card'

export const AddProducts = () => (
  <Card className="flex h-[60vh] flex-col">
    <CardHeader className="text-primary/90">Add Products</CardHeader>
    <CardContent className="flex flex-grow flex-col justify-between overflow-y-auto p-4">
      <div className="flex flex-col space-y-3">
        <div>
          <Label htmlFor="product" className="mb-2 block">
            Product
          </Label>
          <Input id="product" type="number" placeholder="Select product" max={20} min={1} />
        </div>
        <div>
          <Label htmlFor="quantity" className="mb-2 block">
            Quantity
          </Label>
          <Input id="quantity" type="number" placeholder="Quantity" defaultValue={1} min={1} />
        </div>

        <Button className="my-2 w-full">Add Product</Button>
      </div>

      <div className="">
        <Separator className="my-4" />

        <Button className="w-full">Clear Products</Button>
      </div>
    </CardContent>
  </Card>
)
