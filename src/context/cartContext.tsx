import { useState, useContext, createContext } from 'react'

interface IElement {
  children: JSX.Element | JSX.Element[]
}

export interface IProduct {
  id: number
  title: string
  price: number
  category: string
  image: string
  quantity: number
}

const initialProducts: IProduct[] = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.94,
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    quantity: 2,
  },
  {
    id: 13,
    title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
    price: 599,
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
    quantity: 1,
  },
  {
    id: 8,
    title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    price: 10.99,
    image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
    category: 'jewelery',
    quantity: 3,
  },
]

interface ICartContext {
  products: IProduct[]
  startedDate: Date
  startDate: () => void
  addProduct: (product: IProduct) => void
  updateProduct: (product: IProduct) => void
  deleteProduct: (productId: IProduct['id']) => void
  clearProducts: () => void
  getTotalProducts: number
  getTotalPrice: number
}

export const CartContext = createContext<ICartContext>({
  products: [] as IProduct[],
  startedDate: new Date(),
  startDate: () => {},
  addProduct: (product: IProduct) => {},
  updateProduct: (product: IProduct) => {},
  deleteProduct: (productId: IProduct['id']) => {},
  clearProducts: () => {},
  getTotalProducts: 0,
  getTotalPrice: 0,
})

export const CartProvider = ({ children }: IElement) => {
  const [products, setProducts] = useState<IProduct[]>(initialProducts)
  const [startedDate, setStartedDate] = useState(new Date())

  const startDate = () => {
    setStartedDate(new Date())
  }

  const addProduct = (product: IProduct) => {
    setProducts((prev) => [...prev, product])
  }

  const updateProduct = (product: IProduct) => {
    const updatedProducts = products.map((p) => (p.id === product.id ? product : p))
    setProducts(updatedProducts)
  }

  const deleteProduct = (productId: IProduct['id']) => {
    const updatedProducts = products.filter((p) => p.id !== productId)
    setProducts(updatedProducts)
  }

  const clearProducts = () => {
    setProducts([])
  }

  const getTotalProducts = products.reduce((acc, product) => acc + product.quantity, 0)

  const getTotalPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0)

  const state = {
    products,
    startedDate,
    startDate,
    addProduct,
    updateProduct,
    deleteProduct,
    clearProducts,
    getTotalProducts,
    getTotalPrice,
  }

  return <CartContext.Provider value={state}>{children}</CartContext.Provider>
}

// ----------------------------------------------------------------------
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
