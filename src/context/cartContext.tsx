import { useState, useEffect, useContext, createContext } from 'react'

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
  const [products, setProducts] = useState<IProduct[]>([])
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

  useEffect(() => {
    const data = localStorage.getItem('cart')
    const dataJson = JSON.parse(data as string)

    if (dataJson.length > 0) {
      console.log('data', dataJson)
      setProducts(dataJson)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(products))
  }, [products])

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
