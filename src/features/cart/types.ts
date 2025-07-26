export type CartItem = {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

export type CartContextType = {
  cartItems: CartItem[]
  addToCart: (product: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  cartCount: number
}