import Modal from "../../components/Modal"
import PropTypes from "prop-types"
import Trash from "../../assets/trash.svg"
import { useDispatch, useSelector } from "react-redux"
import {
  decreaseItemFromCart,
  selectCartItems,
  selectCartTotalItems,
  selectCartTotalPrice,
  addItemToCart,
  removeItemFromCart,
} from "./cartSlice"
import EmptyMess from "./EmptyMess"

const CartModal = ({ handleHideModal }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const totalItems = useSelector(selectCartTotalItems)
  const totalPrice = useSelector(selectCartTotalPrice)

  const handleCheckoutToWhatsapp = () => {
    if (totalItems === 0) return

    const phoneNumber = "6282193704228"
    const message = encodeURIComponent(
      `Halo, saya ingin membeli ${totalItems} item dengan total harga $${totalPrice}`
    )
    const URL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`

    window.open(URL, "_blank")
  }

  const handleClickMinButton = (data) => {
    dispatch(decreaseItemFromCart(data))
  }

  const handleClickPlusButton = (data) => {
    dispatch(addItemToCart(data))
  }

  const handleClickRemoveButton = (id) => {
    dispatch(removeItemFromCart(id))
  }

  return (
    <Modal>
      {totalItems === 0 ? (
        <EmptyMess handleHideModal={handleHideModal}/>
      ) : (
        <div className="flex flex-col gap-6 p-1: sm:p-2 w-full lg:w-[900px] mt-5">
          <div className="flex flex-col gap-6 max-h-[500px] overflow-auto">
            {cartItems.map((product) => {
              return (
                <div
                  className="w-full border-b-4 border-blue-200 pb-4"
                  key={product.id}
                >
                  <div className="flex items-center w-full">
                    <div className="w-[120px] h-auto overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-10 w-[75%]">
                      <h3 className="capitalize mt-3 text-lg">
                        {product.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm">${product.price}</h4>
                        <h3 className="text-lg font-bold">
                          ${product.totalPrice.toFixed(2)}
                        </h3>
                      </div>
                      <div className="flex items-center gap-4 mt-4 ml-auto">
                        <button
                          type="button"
                          className="rounded-full bg-blue-400 w-5 h-5 text-white flex items-center justify-center"
                          onClick={() => handleClickMinButton(product)}
                        >
                          -
                        </button>
                        <h3>{product.quantity}</h3>
                        <button
                          type="button"
                          className="rounded-full bg-blue-400 w-5 h-5 text-white flex items-center justify-center"
                          onClick={() => handleClickPlusButton(product)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                      <button onClick={()=>handleClickRemoveButton(product.id)}>
                        <img src={Trash} alt="trash" className="w-8 h-6" />
                      </button>
                  </div>
                </div>
              )
            })}
          </div>
          <div>
            <h3 className="text-md font-bold">Total Item: {totalItems}</h3>
            <h3 className="text-md font-bold">
              Total Price: ${totalPrice.toFixed(2)}
            </h3>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="bg-slate-600 hover:bg-slate-800 text-white py-3 px-8 rounded-xl text-sm"
              onClick={handleHideModal}
            >
              Close
            </button>
            <button
              type="button"
              className="bg-green-600 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl text-sm"
              onClick={handleCheckoutToWhatsapp}
            >
              Checkout (whatsapp)
            </button>
          </div>
        </div>
      )}
    </Modal>
  )
}

CartModal.propTypes = {
  handleHideModal: PropTypes.func.isRequired,
}

export default CartModal
