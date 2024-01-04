import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItemToCart } from "../cart/cartSlice"
import Loading, { EmptyProduct } from "./Loading"
import Star from "../../assets/star.svg"

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const searchKey = useSelector((state) =>
    state.filter.filters.search.toLowerCase()
  )
  const category = useSelector((state) => state.filter.filters.category)
  const sortData = useSelector((state) => state.filter.filters.sort)

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(searchKey)
      const matchesCategory = category === "" || product.category === category
      return matchesSearch && matchesCategory
    })

    switch (sortData) {
      case "A-Z":
        return filtered.slice().sort((a, b) => a.title.localeCompare(b.title))
      case "Z-A":
        return filtered.slice().sort((a, b) => b.title.localeCompare(a.title))
      case "low":
        return filtered.slice().sort((a, b) => a.price - b.price)
      case "high":
        return filtered.slice().sort((a, b) => b.price - a.price)
      case "none":
        default:
        return filtered
    }
  }, [products, category, searchKey, sortData])

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const handleClickBuy = (product) => {
    dispatch(addItemToCart(product))
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="w-full h-full grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 py-5 px-10">
            {filteredProducts.length === 0 ?  <EmptyProduct/> : (filteredProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-xl border shadow p-4"
                >
                  <div className="relative w-[50%] h-[200px] mx-auto overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-all duration-500 ease-in-out"
                    />
                  </div>
                  <div className="flex flex-col gap-2 mt-8">
                    <button
                      type="button"
                      className="bg-blue-700 text-white hover:bg-blue-800 rounded-lg text-sm py-3 px-8"
                      onClick={() => handleClickBuy(product)}
                    >
                      BUY NOW
                    </button>
                    <h2 className="text-sm text-slate-500">
                      {product.category}
                    </h2>
                    <h1 className="font-bold text-sm">{product.title}</h1>
                    <div className="flex space-x-2">
                      <img
                        width={20}
                        height={20}
                        src={Star}
                        alt={product.title}
                      />
                      <h2 className="text-sm font-medium">{product.rating.rate}</h2>
                    </div>
                    <h2 className="italic font-medium text-sm text-green-500">${product.price} USD</h2>
                  </div>
                </div>
              )
            }))}
          </div>
        </>
      )}
    </>
  )
}

export default ProductList
