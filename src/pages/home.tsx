import { Cart } from '@/sections/Cart'
import { AddProducts } from '@/sections/AddProducts'

const HomePage = () => (
  <div className="flex h-full w-full items-center justify-center space-x-2">
    <AddProducts />
    <Cart />
  </div>
)

export default HomePage
