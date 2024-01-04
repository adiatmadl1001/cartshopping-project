import { useDispatch } from "react-redux"
import { filterByCategory } from "./filterSlice"
import Filter from "../../assets/filter.svg"
import PropTypes from "prop-types"

const SelectCategory = ({ handleOpenModalFilter }) => {
  const dispatch = useDispatch()
  const handleClickCategory = (e) => {
    dispatch(filterByCategory(e))
  }
  return (
    <>
      <div className="flex overflow-x-scroll categories-filter items-center space-x-4 lg:space-x-2 mt-2">
        <button
          onClick={() => handleClickCategory("")}
          className="w-full lg:py-2.5 lg:px-5 py-2 px-2 text-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
        >
          All Products
        </button>
        <button
          onClick={() => handleClickCategory("men's clothing")}
          className="w-full lg:py-2.5 lg:px-5 py-2 px-2 text-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
        >
          Mens Clothing
        </button>
        <button
          onClick={() => handleClickCategory("electronics")}
          className="w-full lg:py-2.5 lg:px-5 py-2 px-2 text-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
        >
          Electronics
        </button>
        <button
          onClick={() => handleClickCategory("jewelery")}
          className="w-full lg:py-2.5 lg:px-5 py-2 px-2 text-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
        >
          Jewelry
        </button>
        <button
          onClick={() => handleClickCategory("women's clothing")}
          className="w-full lg:py-2.5 lg:px-5 py-2 px-2 text-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
        >
          Womens Clothing
        </button>
        <button
          onClick={handleOpenModalFilter}
          className="w-full lg:py-2.5 lg:px-5 py-2 px-2 text-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
        >
          <div className="flex flex-row items-center justify-center">
          <span>
            Sort By
          </span>
          <img src={Filter} alt="filter " className="w-3 h-3 ml-1 " />
          </div>       
        </button>
      </div>
    </>
  )
}

SelectCategory.propTypes = {
  handleOpenModalFilter: PropTypes.func.isRequired,
}

export default SelectCategory
