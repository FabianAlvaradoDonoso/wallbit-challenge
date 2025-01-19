import { Cart } from '@/sections/Cart'
import { AddProducts } from '@/sections/AddProducts'

const HomePage = () => (
  <div className="flex h-full w-full flex-col items-center justify-center space-y-4 md:flex-row md:space-x-2 md:space-y-0">
    <AddProducts />
    <Cart />
  </div>
)

export default HomePage
