import React from "react";

import items from "../../../data/items.json";
import useCart from "../../../hooks/useCart";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BiRupee, BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";

export default function Main() {
  const [selectedCategory, setSelectedCategory] = React.useState(items?.[0]?.id);
  const { addToCart, isInCart, getQuantityInCart, addQuantity, removeQuantity } = useCart();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col container mx-auto px-10">
        <div className="border-x-2 flex h-[80vh] border-small-width">
          <div className="border-r-2 border-small-width-right w-1/5 overflow-y-scroll pt-5">
            {items?.map((e, i) => (
              <button
                onClick={() => {
                  setSelectedCategory(e.id);
                }}
                className={`${
                  selectedCategory === e.id ? "border-l-green-600 bg-green-50" : "border-l-white"
                } transition-all duration-300 border-l-4 w-full border-b-2 border-small-width-bottom text-xs flex items-center px-5 py-3`}
              >
                <div className="bg-zinc-100 rounded-md h-[50px] w-[50px] overflow-hidden">
                  <img
                    style={{
                      transform: selectedCategory === e.id ? "scale(1) translateY(0)" : "scale(0.8) translateY(10px)",
                    }}
                    className="transition-all duration-500 object-cover"
                    src={e.categoryImage}
                    alt=""
                  />
                </div>
                <p
                  className="ml-2"
                  style={{
                    fontWeight: 500,
                  }}
                >
                  {e.categoryName}
                </p>
              </button>
            ))}
          </div>
          <div className="overflow-y-scroll flex-1 flex flex-col bg-zinc-100">
            <div className="bg-white flex justify-between items-center p-3 text-sm">
              <h2 className="font-bold">{items.find((e) => e.id === selectedCategory).showText}</h2>
              <div className="text-zinc-500 text-xs flex items-center">
                <p className="">Sort by</p>
                <select
                  className="focus:outline-none border-small-width text-green-800 border-2 pl-1 pr-10 rounded-sm ml-3 py-1 border-zinc-200"
                  name=""
                  id=""
                >
                  <option value="">Relevance</option>
                  <option value="">Ascending</option>
                  <option value="">Descending</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap p-1">
              {items
                .find((e) => e.id === selectedCategory)
                .products?.map((e) => (
                  <div className="w-1/5 p-1 flex flex-col">
                    <div className="flex-1 flex flex-col justify-between rounded-lg bg-white overflow-hidden">
                      <div className="relative flex flex-col text-xs px-3 pb-3">
                        <img className="w-full aspect-square object-cover" src={e.productImage} alt="" />
                        {e.discountPercentage ? (
                          <div className="absolute top-0 left-0 ml-2">
                            <div className="relative">
                              <img className="h-8" src="/badge.svg" alt="" />
                              <div
                                style={{
                                  fontSize: 9,
                                }}
                                className="font-bold text-white absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-xs"
                              >
                                <p className="m-0">{e.discountPercentage + "%"}</p>
                                <p className="-mt-1">OFF</p>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                      <div className="text-xs flex flex-col px-3 pb-2">
                        {e.deliveryTime ? (
                          <div className="flex">
                            <div className="bg-zinc-100 px-1 mb-2 rounded-md flex items-center">
                              <img
                                className="h-3 w-3"
                                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png"
                                alt=""
                              />
                              <p
                                style={{
                                  fontWeight: 600,
                                  fontSize: 10,
                                }}
                              >
                                {e.deliveryTime}
                              </p>
                            </div>
                          </div>
                        ) : null}
                        <p
                          style={{
                            fontWeight: 600,
                          }}
                        >
                          {e.productName}
                        </p>
                        <p className="text-zinc-500 mt-2">{e.productQuantity}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex flex-col">
                            <div className="flex items-center font-bold">
                              <BiRupee className="text-md m-0" />
                              <p>{e.sellingPrice}</p>
                            </div>
                            {e.sellingPrice !== e.actualPrice ? (
                              <div className="relative">
                                <p className="text-zinc-500">₹{e.actualPrice}</p>
                                <div className="absolute top-0 bottom-0 w-full flex justify-center items-center">
                                  <div className="w-full h-[2px] bg-zinc-500"></div>
                                </div>
                              </div>
                            ) : null}
                          </div>
                          {isInCart(e.id) ? (
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
                          ) : (
                            <button
                              onClick={() => {
                                addToCart(e);
                              }}
                              className="min-w-[80px] bg-green-50 border-small-width px-5 py-2 border-2 border-green-700 rounded-md text-sm text-green-700"
                              style={{
                                fontWeight: 600,
                              }}
                            >
                              Add
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
