import React from "react";

import items from "../../../data/items.json";

export default function Main() {
  const [selectedCategory, setSelectedCategory] = React.useState(
    items?.[0]?.id
  );

  return (
    <div className="flex flex-col">
      <div className="flex flex-col container mx-auto px-10">
        <div className="border-x-2 flex h-[80vh] border-small-width">
          <div className="border-r-2 border-small-width-right w-1/4 overflow-y-scroll pt-5">
            {items?.map((e, i) => (
              <button
                onClick={() => {
                  setSelectedCategory(e.id);
                }}
                className={`${
                  selectedCategory === e.id
                    ? "border-l-green-600 bg-green-50"
                    : "border-l-white"
                } border-l-4 w-full border-b-2 border-small-width-bottom text-xs flex items-center px-5 py-3`}
              >
                <div className="bg-zinc-100 rounded-md h-[50px] w-[50px] overflow-hidden">
                  <img
                    style={{
                      transform:
                        selectedCategory === e.id
                          ? "scale(1.1) translateY(0)"
                          : "scale(1) translateY(10px)",
                    }}
                    className="transition-all duration-500 object-cover"
                    src={e.categoryImage}
                    alt=""
                  />
                </div>
                <p
                  className="ml-2"
                  style={{
                    fontWeight: 600,
                  }}
                >
                  {e.categoryName}
                </p>
              </button>
            ))}
          </div>
          <div className="overflow-y-scroll flex-1 flex flex-col bg-zinc-100">
            <div className="bg-white flex justify-between items-center p-3 text-sm">
              <h2 className="font-bold">
                {items.find((e) => e.id === selectedCategory).showText}
              </h2>
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
                  <div className="w-1/5 p-1">
                    <div className="flex flex-col justify-between rounded-lg bg-white overflow-hidden">
                      <div className="flex flex-col text-xs px-3 pb-3">
                        <img src={e.productImage} alt="" />
                        <p
                          style={{
                            fontWeight: 600,
                          }}
                        >
                          {e.productName}
                        </p>
                        <p className="text-zinc-500 mt-2">
                          {e.productQuantity}
                        </p>
                      </div>
                      <div className="text-xs flex flex-col px-3 pb-2">
                        <div className="flex justify-between items-center">
                          <div className="flex flex-col">
                            <p className="font-bold">₹{e.sellingPrice}</p>
                            {e.sellingPrice !== e.actualPrice ? (
                              <div className="relative">
                                <p className="text-zinc-500">
                                  ₹{e.actualPrice}
                                </p>
                                <div className="absolute top-0 bottom-0 w-full flex justify-center items-center">
                                  <div className="w-full h-[2px] bg-zinc-500"></div>
                                </div>
                              </div>
                            ) : null}
                          </div>
                          <button
                            className="bg-green-50 border-small-width px-5 py-2 border-2 border-green-700 rounded-md text-sm text-green-700"
                            style={{
                              fontWeight: 600,
                            }}
                          >
                            Add
                          </button>
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
