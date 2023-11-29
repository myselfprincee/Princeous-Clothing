import { Link, Routes } from "react-router-dom";
import { ScrollToTop } from "../../App";
import { Route } from "react-router-dom";
import GetAllProducts from "../../DataQueries/AllProducts";
import SpecificProduct from "./SpecificProduct";

const TShirtRange = () => {
  const { data, isLoading, isFetching, isError, error } = GetAllProducts();

  console.log(data?.category);

  if (isLoading || isFetching) {
    return (
      <>
        <div className="w-11/12 mt-24 m-auto">
          <div className="flex">
            <h1
              style={{ fontWeight: "bold" }}
              className="text-3xl font-bold justify-start"
            >
              Explore the Princeous Men&apos;s Range
            </h1>
            <svg
              className="Mobile:animate-pulse m-3 my-3.5 Mobile:rotate-90 Mobile:mr-10 Mobile:translate-y-10"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              id="arrow"
            >
              <path
                className="p-10 flex justify-center items-center"
                fill="none"
                fillRule="evenodd"
                stroke="#610ee4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 7h16M11 1l6 6-6 6"
              ></path>
            </svg>
          </div>

          <span className="flex my-6 text-[15px] font-[Satoshi-Black] Mobile:overflow-scroll Mobile:overflow-x-auto w-[95%] hideHorizontalScroll scroll-smooth">
            <button className="border-2 border-gray-400 p-1 cursor-pointer ml-2 rounded-xl whitespace-nowrap px-3">
              All
            </button>
            <button className=" border-[#e5e7eb] p-1 cursor-pointer ml-2 inline-flex border-2 rounded-lg whitespace-nowrap px-3">
              T-Shirts
            </button>
            <button className="border-2 border-[#e5e7eb] p-1 cursor-pointer ml-2 rounded-xl whitespace-nowrap px-3">
              Pants
            </button>
            <button className="border-2 border-[#e5e7eb] p-1 cursor-pointer ml-2 rounded-xl whitespace-nowrap px-3">
              Hoodies
            </button>
            <button className="border-2 border-[#e5e7eb] p-1 cursor-pointer ml-2 rounded-xl whitespace-nowrap px-3">
              Shirts
            </button>
            <button className="border-2 border-[#e5e7eb] p-1 cursor-pointer ml-2 rounded-xl whitespace-nowrap px-3">
              Shorts
            </button>
            <button className="border-2 border-[#e5e7eb] p-1 cursor-pointer ml-2 rounded-xl whitespace-nowrap px-3">
              Hats
            </button>
            <button className="border-2 border-[#e5e7eb] p-1 cursor-pointer ml-2 rounded-xl whitespace-nowrap px-3">
              Socks
            </button>
            <button className="border-2 border-[#e5e7eb] p-1 cursor-pointer ml-2 rounded-xl whitespace-nowrap px-3">
              Cargo Pants
            </button>
            <button className="border-2 border-[#e5e7eb] p-1 cursor-pointer ml-2 rounded-xl whitespace-nowrap px-3">
              Jacket
            </button>
          </span>
        </div>
        <div className="animate-pulse flex justify-center items-center  flex-wrap mt-16">
          {[...Array(10)].map((id, index) => (
            <div key={index} className="w-[16%] mx-4 mb-8">
              <div className="w-full h-64 bg-gray-300 rounded"></div>
              <div className="h-8 my-2 bg-gray-300 rounded"></div>
              <div className="h-4 my-2 bg-gray-300 rounded"></div>
              <div className="h-4 my-2 bg-gray-300 rounded"></div>
              <div className="h-4 my-2 bg-gray-300 rounded"></div>
              <div className="h-4 my-2 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </>
    );
  }

  if (isError) {
    return <h1 className="mt-24">Error Loading Data {error.message}</h1>;
  }


  //Have to Change this...
  const product = data.map((item) => item.category.toLowerCase());
  const uniqueItemsArr = [...new Set(product)];
  const uniqueItems = uniqueItemsArr.map((uniqueItem) => {
    const item = uniqueItem.charAt(0).toUpperCase() + uniqueItem.slice(1)
    return item;
  });

  return (
    <>
      <Routes>
        <Route
          path="/wearables/t-shirt/:id/:productName/*"
          element={<SpecificProduct />}
        />
      </Routes>
      <div className="w-11/12 m-auto">
        <div
          className="flex flex-col justify-start items-start"
          style={{ marginTop: "6rem" }}
          onClick={ScrollToTop}
        >
          <div className="flex">
            <h1
              style={{ fontWeight: "bold" }}
              className="text-3xl font-bold justify-start"
            >
              Explore the Princeous Men&apos;s Range
            </h1>
            <svg
              className="Mobile:animate-pulse m-3 my-3.5 Mobile:rotate-90 Mobile:mr-10 Mobile:translate-y-10"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              id="arrow"
            >
              <path
                className="p-10 flex justify-center items-center"
                fill="none"
                fillRule="evenodd"
                stroke="#610ee4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 7h16M11 1l6 6-6 6"
              ></path>
            </svg>
          </div>

          <span className="flex my-6 text-[15px] font-[Satoshi-Black] Mobile:overflow-scroll Mobile:overflow-x-auto w-[95%] hideHorizontalScroll scroll-smooth">
            <button className="border-2 border-gray-400 p-1 cursor-pointer ml-2 rounded-xl whitespace-nowrap px-3">
              All
            </button>

            {uniqueItems.map((item, index) => (
              <>
                <button key={index} className=" border-[#e5e7eb] p-1 cursor-pointer ml-2 inline-flex border-2 rounded-lg whitespace-nowrap px-3">
                  {item}
                </button>
              </>
            ))}
          </span>
        </div>

        <div className="card cursor-pointer flex Mobile:justify-evenly Mobile:flex-wrap flex-wrap">
          {data.map((item) => {
            return (
              <div
                key={item._id}
                className="Mobile:w-[40%] w-[16%] mx-4"
                onClick={ScrollToTop}
              >
                <Link
                  className=" Mobile:w-[50%]w-[16%]"
                  to={`/wearables/t-shirt/${item._id}/${item.name
                    .toLowerCase()
                    .replace(/ /g, "-")}?color=${item.colors[0].name}&size=${
                    item.availableSizes[0]
                  }`}
                >
                  <img
                    draggable="false"
                    src={item.mainImg.src}
                    width={"160px"}
                    height={"100px"}
                    className="pointer-events-none"
                    alt=""
                  />
                  <div>
                    <h6 className="weird-change text-[12px] mt-[5px]">
                      {item.specials ? (
                        <span className="flex items-center">
                          <strong className="text-white px-[3px] py-[1px] text-[10px] rounded-sm bg-[#610ee4]">
                            #1
                          </strong>
                          <p className="font-[Satoshi-Medium] ml-1">
                            Princeous Special&apos;s
                          </p>
                        </span>
                      ) : null}
                    </h6>
                  </div>
                  <h5 className="category-title text-gray-500 mt-[5px]">
                    {item.category}
                  </h5>
                  <h2 className="inline-flex flex-wrap shrink">
                    {item.name} (XL/Plain White)
                  </h2>

                  <div className="available-sizes my-2 flex flex-1 basis-2 left-0 text-[.8rem]">
                    <span className="inline-flex border-2 px-2 mx-1 rounded-lg">
                      {item.availableSizes[0]}
                    </span>
                    <span className="inline-flex border-2 px-2 mr-1 rounded-lg">
                      {item.availableSizes[1]}
                    </span>
                    <span className="inline-flex border-2 px-2 rounded-lg">
                      {item.availableSizes[2]}
                    </span>
                    {item.availableSizes[3] && (
                      <span className="inline-flex border-2 px-2 rounded-lg mx-1">
                        {item.availableSizes[3]}
                      </span>
                    )}
                    {item.availableSizes[4] && (
                      <span className="inline-flex border-2 px-2 rounded-lg mx-1">
                        {item.availableSizes[4]}
                      </span>
                    )}
                    {item.availableSizes[5] && (
                      <span className="inline-flex border-2 px-2 rounded-lg mx-1">
                        {item.availableSizes[5]}
                      </span>
                    )}
                  </div>

                  <p className="price-tag">&#8377;{item.price}</p>

                  {/* <div className="total-available-colors flex">
                    <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
                    <div
                      className={`rounded-full h-5 w-5 bg-${
                        Object.keys(item.colors[0])[0]
                      }-500 bg-${
                        Object.keys(item.colors[0])[0]
                      }-500 mt-2 mx-0.5`}
                    ></div>
                    <div
                      className={`rounded-full h-5 bg-${green}-500 available-colors mt-2 mx-0.5`}
                    />
                    <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
                  </div> */}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TShirtRange;
