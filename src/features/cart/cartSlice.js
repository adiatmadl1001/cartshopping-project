import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload
      const selectCartIndex = state.items.findIndex(
        (product) => product.id === newItem.id
      )
      if (selectCartIndex !== -1) {
        state.items[selectCartIndex].quantity += 1
        state.items[selectCartIndex].totalPrice =
          state.items[selectCartIndex].quantity * newItem.price
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        })
      }
    },
    decreaseItemFromCart: (state, action) => {
      const itemNow = action.payload
      const selectCartIndex = state.items.findIndex(
        (product) => product.id === itemNow.id
      )
      if (selectCartIndex !== -1) {
        if (state.items[selectCartIndex].quantity > 1) {
          state.items[selectCartIndex].quantity -= 1
          state.items[selectCartIndex].totalPrice =
            state.items[selectCartIndex].quantity * itemNow.price
        } else {
          state.items.splice(selectCartIndex, 1)
        }
      }
    },
    removeItemFromCart: (state, action) =>{
      const itemNow = action.payload
      const index = state.items.findIndex((product) => product.id === itemNow)
      index !== -1 ? state.items.splice(index, 1) : alert("Error removing")
    },
  },
})

export const { addItemToCart, decreaseItemFromCart, removeItemFromCart } =
  cartSlice.actions

export default cartSlice

export const selectCartItems = (state) => state.cart.items
export const selectCartTotalItems = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0)
export const selectCartTotalPrice = (state) =>
  state.cart.items.reduce((total, item) => total + item.totalPrice, 0)
