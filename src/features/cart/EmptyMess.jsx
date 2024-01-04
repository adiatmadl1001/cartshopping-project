import EmptyCart from "../../assets/cart.png"
import PropTypes from "prop-types"

function EmptyMess({ handleHideModal }) {
  return (
    <>
      <div className="flex flex-col items-center space-y-2 m-4">
        <img src={EmptyCart} alt="EmptyCart" className="" />
        <h1 className="text-lg font-bold">Your Cart is Empty</h1>
        <p className="text-sm text-slate-500">Looks like you have not added anything to your cart</p>
        <button
          className="bg-blue-700 text-white hover:bg-blue-800 rounded-lg text-sm font-semibold text-sm py-3 px-8"
          onClick={handleHideModal}
        >
          Go Shopping
        </button>
      </div>
    </>
  )
}

EmptyMess.propTypes = {
  handleHideModal: PropTypes.func.isRequired,
}

export default EmptyMess
