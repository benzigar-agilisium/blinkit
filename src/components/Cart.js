import React from "react";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart } from "react-icons/ai";
import useCart from "../hooks/useCart";
import { BiRupee } from "react-icons/bi";
import { BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const {
    cart,
    getItemCount,
    getProductDiscount,
    getActualTotalAmount,
    getTotalAmount,
    removeQuantity,
    addQuantity,
    getQuantityInCart,
  } = useCart();

  const [showCart, setShowCart] = React.useState(false);
  const navigate = useNavigate();

  return (
    <>
      {showCart ? (
        <div className="flex fixed inset-0 bg-black z-50 bg-opacity-75">
          <div className="flex-1"></div>
          <div className="flex flex-col bg-white w-[400px] text-black">
            <div className="p-5 flex items-center justify-between">
              <h1 className="font-bold">My Cart</h1>
              <button
                onClick={() => {
                  setShowCart(!showCart);
                }}
              >
                <AiOutlineClose />
              </button>
            </div>
            {getItemCount() > 0 ? (
              <>
                <div className="flex-1 bg-zinc-100 overflow-y-scroll p-3">
                  <div className="bg-white flex-col p-3 rounded-lg">
                    <div className="flex items-center">
                      <img
                        className="h-14"
                        src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/assets/eta-icons/30-mins-filled.png"
                        alt=""
                      />
                      <div className="ml-4 flex-1 text-xs flex flex-col">
                        <p className="font-bold text-sm mb-1">Delivery in 15 minutes</p>
                        <p className="text-zinc-500">
                          Shipment of {getItemCount()} {getItemCount() === 1 ? "item" : "items"}
                        </p>
                      </div>
                    </div>
                    <div>
                      {cart.map((e) => (
                        <div className="mt-5 flex text-xs">
                          <div className="text-xs border-2 rounded-md border-small-width overflow-hidden">
                            <img className="h-16 aspect-square" src={e.productImage} alt="" />
                          </div>
                          <div className="flex-1 ml-3 flex justify-between flex-col">
                            <div className="max-w-[150px] flex flex-col">
                              <p
                                style={{
                                  fontWeight: 300,
                                }}
                              >
                                {e.productName}
                              </p>
                              {e.productQuantity ? <p className="text-zinc-500">{e.productQuantity}</p> : null}
                            </div>
                            <div className="flex items-center font-bold">
                              <BiRupee className="text-md m-0" />
                              <p>{e.sellingPrice}</p>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="min-w-[80px] font-bold justify-between flex items-center border-small-width border-green-700 px-2 bg-green-700 rounded-md text-xs text-white">
                              <button
                                className="py-3"
                                onClick={() => {
                                  removeQuantity(e.id);
                                }}
                              >
                                <AiOutlineMinus className="text-md" />
                              </button>
                              <p>{getQuantityInCart(e.id)}</p>
                              <button
                                className="py-3"
                                onClick={() => {
                                  addQuantity(e.id);
                                }}
                              >
                                <AiOutlinePlus className="text-md" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-xs bg-white mt-3 flex-col p-3 rounded-lg">
                    <h3 className="font-bold text-sm">Bill Details</h3>
                    <p className="mt-2 flex justify-between items-center text-zinc-500">
                      <p>MRP</p>
                      <div className="flex items-center">
                        <BiRupee className="text-md m-0" />
                        <p>{getActualTotalAmount()}</p>
                      </div>
                    </p>
                    <p className="mt-2 flex justify-between items-center text-zinc-500">
                      <p>Delivery charge</p>
                      <p className="text-green-600">FREE</p>
                    </p>
                    {getProductDiscount() ? (
                      <p className="mt-2 flex justify-between items-center text-zinc-500">
                        <p>Product Discount</p>
                        <div className="text-green-600 flex items-center">
                          <p>-</p>
                          <BiRupee className="text-md m-0" />
                          <p>{getProductDiscount()}</p>
                        </div>
                      </p>
                    ) : null}
                    <p className="mt-5 font-bold flex justify-between items-center text-zinc-800 text-sm">
                      <p>Grand total</p>
                      <div className="flex items-center">
                        <BiRupee className="text-md m-0" />
                        <p>{getTotalAmount()}</p>
                      </div>
                    </p>
                    <p className="mt-4 text-xs text-zinc-500">Coupons are only applicable on the Blinkit app</p>
                  </div>
                  <div className="text-xs bg-white mt-3 flex-col p-3 rounded-lg">
                    <h3 className="font-bold text-sm">Cancellation Policy</h3>
                    <p className="mt-1 text-zinc-500">
                      Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be
                      provided, if applicable.
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-100 flex flex-col">
                  <div className="bg-white rounded-t-xl shadow-2xl flex flex-col">
                    <button className="bg-green-700 hover:bg-green-800 transition-all flex items-center justify-between text-white p-3 rounded-md m-5 px-4">
                      <div className="flex flex-col items-start">
                        <div className="font-bold flex items-center">
                          <BiRupee className="text-md m-0" />
                          <p>{getTotalAmount()}</p>
                        </div>
                        <p className="text-xs opacity-75 uppercase">Total</p>
                      </div>
                      <div className="flex items-center">
                        <p>Continue</p>
                        <BsChevronRight />
                      </div>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 bg-zinc-100 p-3">
                <div className="text-sm bg-white rounded-md p-3 flex flex-col justify-center items-center">
                  <img
                    className="h-20 aspect-square"
                    src="https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png"
                    alt=""
                  />
                  <h1 className="font-bold mt-2 text-md">You don't have any items in your cart</h1>
                  <p className="text-xs mt-3 text-zinc-400">Your favourite items are just a click away</p>
                  <button
                    onClick={() => {
                      setShowCart(false);
                    }}
                    className="mt-5 bg-green-700 rounded-md text-xs text-white px-4 py-2"
                  >
                    Start Shopping
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
      <button
        onClick={() => {
          // setShowCart(!showCart);
          navigate("/cart");
        }}
        className="flex flex-col bg-green-700 text-white py-3 rounded-lg px-4"
      >
        <div className="min-w-[90px] flex items-center">
          <AiOutlineShoppingCart className="hover:rotate-12 transition-all text-3xl" />
          {cart?.length > 0 ? (
            <div className="font-bold ml-2 flex text-xs flex-col items-start">
              <p>
                {getItemCount()} {getItemCount() === 1 ? "item" : "items"}
              </p>
              <p className="flex items-center">
                <BiRupee className="text-md m-0" />
                <p>{getTotalAmount()}</p>
              </p>
            </div>
          ) : (
            <p className="text-xs font-bold ml-2">My Cart</p>
          )}
        </div>
      </button>
    </>
  );
}
