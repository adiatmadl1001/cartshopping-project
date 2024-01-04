import { useDispatch } from "react-redux"
import Modal from "../../components/Modal"
import PropTypes from "prop-types"
import { filterSortBy } from "./filterSlice"

const FilterModal = ({ handleCloseModalFilter }) => {
  const dispatch = useDispatch()

  const handleClickFilter = (e) => {
    dispatch(filterSortBy(e))
  }

  return (
    <Modal>
      <ul
        className="p-3 space-y-1 text-sm text-gray-700"
        aria-labelledby="dropdownRadioBgHoverButton"
      >
        <li>
          <div className="flex items-center p-2 rounded hover:bg-gray-100">
            <input
              id="radio9"
              onChange={() => handleClickFilter("none")}
              type="radio"
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="radio9"
              className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
            >
              None
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center p-2 rounded hover:bg-gray-100">
            <input
              id="radio1"
              onChange={() => handleClickFilter("A-Z")}
              type="radio"
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="radio1"
              className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
            >
              Title: A to Z
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center p-2 rounded hover:bg-gray-100">
            <input
              id="radio2"
              onChange={() => handleClickFilter("Z-A")}
              type="radio"
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="radio2"
              className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
            >
              Title: Z to A
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center p-2 rounded hover:bg-gray-100">
            <input
              id="radio3"
              onChange={() => handleClickFilter("low")}
              type="radio"
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="radio3"
              className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
            >
              Price: Low to High
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center p-2 rounded hover:bg-gray-100">
            <input
              id="radio4"
              onChange={() => handleClickFilter("high")}
              type="radio"
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="radio4"
              className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
            >
              Price: High to Low
            </label>
          </div>
        </li>
        <div className="flex justify-center">
          <button
            className="bg-slate-600 hover:bg-slate-800 text-white py-3 px-8 rounded-xl text-sm"
            type="button"
            onClick={handleCloseModalFilter}
          >
            Close
          </button>
        </div>
      </ul>
    </Modal>
  )
}

FilterModal.propTypes = {
  handleCloseModalFilter: PropTypes.func.isRequired,
}
export default FilterModal
