import React from "react";
import useCart from "../../../hooks/useCart";
import { BiRupee } from "react-icons/bi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    getItemCount,
    cart,
    removeQuantity,
    getProductDiscount,
    getTotalAmount,
    addQuantity,
    getActualTotalAmount,
    getQuantityInCart,
  } = useCart();
  return (
    <div>
      <div className="container mx-auto flex justify-center">
        <div className="w-[800px]">
          {getItemCount() > 0 ? (
            <>
              <div className="mt-5 flex-1 overflow-y-scroll">
                <div className="bg-white flex-col p-3 rounded-lg">
                  <h1 className="text-xl font-bold mb-5">Place Order</h1>
                  <div className="flex items-center">
                    <div className="flex-1 text-xs flex flex-col">
                      <p className="font-bold text-sm mb-1">Delivery in 15 minutes</p>
                      <p className="text-zinc-500">
                        {getItemCount()} {getItemCount() === 1 ? "item" : "items"}
                      </p>
                    </div>
                  </div>
                  <div>
                    {cart.map((e) => (
                      <div className="mt-10 flex text-xs">
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
                          <div className="flex">
                            <div className="flex items-center font-bold">
                              <BiRupee className="text-md m-0" />
                              <p>{e.sellingPrice}</p>
                            </div>
                            {e.sellingPrice !== e.actualPrice ? (
                              <div className="ml-3 relative">
                                <p className="text-zinc-500">₹{e.actualPrice}</p>
                                <div className="absolute top-0 bottom-0 w-full flex justify-center items-center">
                                  <div className="w-full h-[2px] bg-zinc-500"></div>
                                </div>
                              </div>
                            ) : null}
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
              </div>
              <div className="mt-5 bg-zinc-50 rounded-t-xl flex flex-col">
                <button className="bg-green-700 hover:bg-green-800 transition-all flex items-center justify-between text-white p-3 rounded-md m-5 px-4">
                  <div className="flex items-center">
                    <p className="text-xs">
                      {getItemCount()} {getItemCount() === 1 ? "item" : "items"}
                    </p>
                    <div className="mx-2 h-1 w-1 rounded-full bg-white"></div>
                    <div className="font-bold flex items-center">
                      <BiRupee className="text-md m-0" />
                      <p>{getTotalAmount()}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p>Proceed</p>
                    <BsChevronRight />
                  </div>
                </button>
              </div>
            </>
          ) : (
            <div className="my-32 flex-1 p-3">
              <div className="text-sm bg-white rounded-md p-3 flex flex-col justify-center items-center">
                <img
                  className="h-20 aspect-square"
                  src="https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png"
                  alt=""
                />
                <h1 className="font-bold mt-2 text-md">You don't have any items in your cart</h1>
                <p className="text-xs mt-3 text-zinc-400">Your favourite items are just a click away</p>
                <Link replace to={"/"}>
                  <button className="mt-5 bg-green-700 rounded-md text-xs text-white px-4 py-2">Start Shopping</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
