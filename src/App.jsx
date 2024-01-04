import { useState } from "react"
import Header from "./components/Header"
import ProductList from "./features/produclist/ProductList"
import InputSearch from "./features/filtering/InputSearch"
import SelectCategory from "./features/filtering/SelectCategory"
import CartModal from "./features/cart/CartModal"
import FilterModal from "./features/filtering/FilterModal"
import "./App.css"

function App() {
  const [isOpenModalCart, setIsOpenModalCart] = useState(false)
  const [isOpenModalFilter, setIsOpenModalFilter] = useState(false)

  const handleOpenModalFilter = () => {
    setIsOpenModalFilter(true)
  }
  const handleCloseModalFilter = () => {
    setIsOpenModalFilter(false)
  }

  const handleOpenModal = () => {
    setIsOpenModalCart(true)
  }
  const handleHideModal = () => {
    setIsOpenModalCart(false)
  }

  return (
    <>
      {isOpenModalCart ? <CartModal handleHideModal={handleHideModal} /> : null}
      {isOpenModalFilter ? <FilterModal handleCloseModalFilter={handleCloseModalFilter} /> : null}
      <Header handleOpenModal={handleOpenModal} />
      <main className="max-w-7xl mx-auto px-10 mt-20">
        <InputSearch />
        <SelectCategory handleOpenModalFilter={handleOpenModalFilter} />
        <ProductList />
      </main>
    </>
  )
}

export default App
