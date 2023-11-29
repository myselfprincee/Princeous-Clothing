import { Link } from "react-router-dom";
import React from "react";
import Recommended from "../Recommended";
import myStore from "../Store";
import { useAuth } from "@clerk/clerk-react";
import { Toaster, toast } from "sonner";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
// import ShoppingKart from "../ShoppingKart";
import CloseBtn from "../Small Components/CloseBtn";
import GetAllProducts from "../../DataQueries/AllProducts";

const SpecificProduct = () => {
  const { id, productName } = useParams();
  console.log(id, productName);

  const { data, isError, isFetching } = GetAllProducts();

  const product = data?.find((item) => item._id === id);
  console.log(product);

  const [doubleTap, setDoubleTap] = React.useState("zoom-in");
  const { userId } = useAuth();

  const [displaySizing, setDisplaySizing] = React.useState("hidden");
  const [DefaultImg, setDefaultImg] = React.useState({
    src: product?.mainImg?.src,
    alt: product?.mainImg?.alt,
  });

  // const size = product?.availableSizes[0];
  // const color = product?.colors[0].name;

  // console.log(color, size);

  // const [border, setBorder] = useState("");
  const [pincode, setPincode] = React.useState("");
  const [submittedPincode, setSubmittedPincode] = React.useState("");
  const [notification, setNotification] = React.useState(false);
  const [disable, setDisable] = React.useState("cursor-not-allowed opacity-50");
  const [searchParams, setSearchParams] = useSearchParams(
    `&color=${product?.colors?.[0].name}&size=${product?.availableSizes?.[0]}`
  );
  const { count, Increment } = myStore();

  const handleChange = (e) => {
    setPincode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pincodes = [
      110001, 110002, 110003, 110004, 110005, 110006, 110007, 110008, 110009,
      110010, 110011, 110012, 110013, 110014, 110015, 110016, 110017, 110018,
      110019, 110020, 110021, 110022, 110023, 110050, 110051, 110056, 110048,
      110057, 110058, 110059, 110060, 110061, 110062, 110063, 110064,
    ];

    const pincodeStrings = pincodes.map((pincode) => String(pincode));
    const regexPattern = new RegExp(`^(${pincodeStrings.join("|")})$`);
    setSubmittedPincode(pincode);
    if (regexPattern.test(pincode)) {
      toast.success("Congratulations 🎉 This Pincode is servicable", {
        position: "top-center",
        richColors: true,
        duration: 2000,
        style: { color: "#610ee4" },
      });
      setDisable("");
    } else if (pincode === "") {
      toast.error(
        "Please enter a Pincode to Check whether It is servicable or not !",
        {
          position: "top-center",
          richColors: true,
          duration: 2000,
          style: {
            color: "red",
            backgroundColor: "white",
            fontWeight: "bold",
            fontSize: ".9rem",
            fontFamily: "Satoshi",
          },
        }
      );
      setDisable("cursor-not-allowed opacity-50");
    } else if (pincode.length > 6 || pincode.length < 6) {
      toast.error("Hey! you Serious ? This isn't a 6 Digit Pincode", {
        position: "top-center",
        richColors: true,
        duration: 2000,
        style: {
          color: "red",
          backgroundColor: "white",
          fontWeight: "bold",
          fontSize: ".9rem",
          fontFamily: "Satoshi",
        },
      });
      setDisable("cursor-not-allowed opacity-50");
    } else {
      toast.error("Sorry! 🙇 We do not deliver to this pincode yet", {
        position: "top-center",
        richColors: true,
        duration: 2000,
        style: { color: "red" },
      });
      setDisable("cursor-not-allowed opacity-50");
    }
  };

  if (isError) {
    return <h1>odfgodsfno</h1>;
  }
  if (isFetching) {
    return <h1>odfgodsfno</h1>;
  }

  return (
    <>
      <Toaster className="h-5" />
      {
        <div className="box-border mt-24 flex w-full Mobile:flex-col Mobile:w-[95%] Mobile:mx-auto">
          <div className="flex flex-row w-[40%] Mobile:w-[100%] justify-center Mobile:m-auto Mobile:flex-col">
            <div className="hideHorizontalScroll w-[20%] Mobile: Mobile:w-[100%] Mobile:overflow-scroll justify-start small-img-container Mobile:flex Mobile:mb-4 Mobile:overflow-x-auto Mobile:whitespace-nowrap">
              <img
                draggable="false"
                className="rounded h-[150px] Mobile:mx-1 Mobile:h-[20rem] object-fill Mobile:w-[15rem] cursor-pointer"
                src={product.mainImg.src}
                alt={product.mainImg.alt}
                onClick={() =>
                  setDefaultImg({
                    src: product.Img2.src,
                    alt: product.Img2.alt,
                  })
                }
              />
              <img
                draggable="false"
                className={`my-4 Mobile:my-0 rounded h-[150px] Mobile:h-[20rem] Mobile:mx-1 Mobile:w-[15rem] object-cover cursor-pointer`}
                src={product.Img3.src}
                alt={product.Img3.alt}
                onClick={() =>
                  setDefaultImg({
                    src: product.Img3.src,
                    alt: product.Img3.alt,
                  })
                }
              />
              <img
                draggable="false"
                className={`my-4 Mobile:my-0 rounded h-[150px] Mobile:h-[20rem] Mobile:w-[15rem] Mobile:mx-1 object-cover cursor-pointer`}
                src={product.Img4.src}
                alt={product.Img4.alt}
                onClick={() => {
                  setDefaultImg({
                    src: product.Img4.src,
                    alt: product.Img4.alt,
                  });
                }}
              />
              <img
                draggable="false"
                className="my-4 Mobile:my-0 rounded h-[150px] Mobile:mx-1 Mobile:h-[20rem] Mobile:w-[15rem] object-cover cursor-pointer"
                src={product.Img5.src}
                alt={product.Img5.alt}
                onClick={() =>
                  setDefaultImg({
                    src: product.Img5.src,
                    alt: product.Img4.alt,
                  })
                }
              />
              <img
                draggable="false"
                className="my-4 Mobile:my-0 rounded h-[150px] Mobile:mx-1 Mobile:h-[20rem] Mobile:w-[15rem] object-cover cursor-pointer"
                src={product.Img6.src}
                alt={product.Img6.alt}
                onClick={() =>
                  setDefaultImg({
                    src: product.Img6.src,
                    alt: product.Img6.alt,
                  })
                }
              />
            </div>

            <div className="ml-5 Mobile:hidden relative image-cont w-[60%] Mobile:w-[100%] Mobile:overflow-x-scroll Mobile:m-auto">
              <TransformWrapper
                initialScale={1}
                centerZoomedOut
                limitToBounds
                smooth
                doubleClick={{ mode: setDoubleTap, animationTime: 200 }}
                zoomAnimation={{ size: 300, animationType: "easeInOutCubic" }}
                wheel={{ step: 300 }}
                velocityAnimation={{
                  animationType: "easeOutCubic",
                  duration: 0.1,
                }}
              >
                {({ resetTransform, zoomIn, zoomOut }) => (
                  <>
                    <div className="flex justify-evenly items-center absolute z-30 left-0 right-0 m-auto text-center text-[12px] text-white rounded-md top-[23rem]">
                      <button
                        className="flex bg-[#610ee4] rounded-full hover:bg-[#440aa0] transition-all"
                        onClick={() => {
                          resetTransform();
                        }}
                      >
                        <CloseBtn />
                      </button>
                      <button
                        className="flex bg-[#610ee4] rounded-full hover:bg-[#440aa0] transition-all"
                        onClick={() => {
                          zoomIn();
                        }}
                      >
                        <svg
                          width={40}
                          height={40}
                          viewBox="0 0 15 15"
                          fill="none"
                          className="p-2"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159ZM4.25 6.5C4.25 6.22386 4.47386 6 4.75 6H6V4.75C6 4.47386 6.22386 4.25 6.5 4.25C6.77614 4.25 7 4.47386 7 4.75V6H8.25C8.52614 6 8.75 6.22386 8.75 6.5C8.75 6.77614 8.52614 7 8.25 7H7V8.25C7 8.52614 6.77614 8.75 6.5 8.75C6.22386 8.75 6 8.52614 6 8.25V7H4.75C4.47386 7 4.25 6.77614 4.25 6.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            data-dm-inline-fill=""
                            style={{
                              "--dm-inline-fill": "currentColor",
                            }}
                          />
                        </svg>
                      </button>
                      <button
                        className="flex bg-[#610ee4] rounded-full hover:bg-[#440aa0] transition-all"
                        onClick={() => {
                          zoomOut();
                        }}
                      >
                        <svg
                          width={40}
                          height={40}
                          className="p-2"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.5 10C8.433 10 10 8.433 10 6.5C10 4.567 8.433 3 6.5 3C4.567 3 3 4.567 3 6.5C3 8.433 4.567 10 6.5 10ZM6.5 11C7.56251 11 8.53901 10.6318 9.30884 10.0159L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L10.0159 9.30884C10.6318 8.53901 11 7.56251 11 6.5C11 4.01472 8.98528 2 6.5 2C4.01472 2 2 4.01472 2 6.5C2 8.98528 4.01472 11 6.5 11ZM4.75 6C4.47386 6 4.25 6.22386 4.25 6.5C4.25 6.77614 4.47386 7 4.75 7H8.25C8.52614 7 8.75 6.77614 8.75 6.5C8.75 6.22386 8.52614 6 8.25 6H4.75Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            data-dm-inline-fill=""
                            style={{
                              "--dm-inline-fill": "currentColor",
                            }}
                          />
                        </svg>
                      </button>
                    </div>

                    <TransformComponent>
                      <img
                        className="rounded h-[27rem] Mobile:h-[20rem] Mobile:flex Mobile:justify-center object-cover"
                        src={DefaultImg.src || product.mainImg.src}
                        alt={DefaultImg.alt || product.mainImg.alt}
                      />
                    </TransformComponent>
                  </>
                )}
              </TransformWrapper>
            </div>
          </div>

          <div className="w-[56%] Mobile:w-[95%]">
            {product.specials && (
              <p className="weird-change">
                <strong className="text-white p-[3px] rounded-sm bg-[#610ee4]">
                  #1
                </strong>{" "}
                Princeous Special&apos;s
              </p>
            )}
            <div className="flex flex-wrap items-center">
              <h1 className="text-3xl my-2 shirt-name">{product.name}</h1>
              <p
                className={`text-2xl px-2 py-1 rounded-md text-white mx-3 my-2 shirt-name inline-flex bg-[#610ee4]`}
              >
                (
                {` ${
                  searchParams.get("size")
                    ? searchParams.get("size")
                    : product.colors[0].name
                } / ${
                  searchParams.get("color")
                    ? searchParams.get("color")
                    : product.availableSizes[0]
                } `}
                )
              </p>
            </div>
            <h5 className="weird-change mt-3">Product Description:</h5>
            <p className="">{product.productDescription}</p>

            <div>
              <h5 className="weird-change mt-3">Product Highlights:</h5>
              <ul className="list-disc ml-4 marker:text-[#610ee4]">
                {product.highlights.map((Highlight, i) => (
                  <li key={i}>{(i, Highlight)}</li>
                )) || (
                  <>
                    <li>Made from a soft and durable cotton blend</li>
                    <li>
                      Features the iconic &quot;Wings of Freedom&quot;design
                    </li>
                    <li>
                      Great for everyday wear or for showing off your fandom
                    </li>
                    <li>Bold and eye-catching design is sure to turn heads</li>
                    <li>Available in a range of sizes to fit any fan</li>
                  </>
                )}
              </ul>
            </div>

            <div>
              <h5 className="weird-change mt-3">Colors : </h5>
              <div className="my-4 flex flex-row">
                {product.colors.map((color, i) => (
                  <p
                    key={i}
                    onClick={() => {
                      setSearchParams(
                        `color=${color.name}&size=${searchParams.get("size")}`
                      );
                    }}
                    className={`select-none flex rounded relative flex-col mx-1 items-center justify-center border-[2px] ${
                      searchParams.get("color") === color.name
                        ? "border-[#610ee4] border-[2px]"
                        : ""
                    }}`}
                  >
                    <img
                      draggable="false"
                      className="w-24 mx-0 rounded-sm mb-5"
                      src={color.image.src}
                      alt={color.image.alt}
                    />
                    <p className="rounded-b-sm absolute left-0 right-0 mx-auto text-center bottom-0 bg-[#610ee4] width-[100%] font-[Satoshi-Bold] text-white">
                      {color.name}
                    </p>
                  </p>
                ))}
              </div>

              <div>
                <h5 className="weird-change">
                  Sizes :
                  {product.availableSizes.map((size, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        setSearchParams(
                          `color=${searchParams.get("color")}&size=${size}`
                        );
                      }}
                      className={`inline-flex select-none text-[#610ee4] border-[#610ee4] border-2 ml-2 mx-1 px-2 rounded-lg cursor-pointer ${
                        searchParams.get("size") === size
                          ? "bg-[#610ee4]"
                          : "bg-white"
                      }`}
                    >
                      <Link
                        className={`font-[Satoshi-Black] ${
                          searchParams.get("size") === size
                            ? "text-white"
                            : "text-[#610ee4]"
                        }`}
                      >
                        {size}
                      </Link>
                    </div>
                  ))}
                </h5>

                <div className="h-0.5 my-4 rounded bg-[#610ee4]"></div>

                <div className="flex flex-row">
                  <h5 className="text-2xl md:text-3xl line-through text-gray-400 font-semibold px-2">
                    ₹{product.realPrice}
                  </h5>
                  <h5 className="flex ml-[-5px] flex-row text-2xl md:text-3xl text-black font-semibold px-2">
                    ₹{product.price}
                  </h5>
                  <p>(Free Shipping)</p>
                </div>
              </div>
            </div>

            {product.availableQty ? (
              <>
                <form
                  className="mt-5 Mobile:flex"
                  // onSubmit={getData}
                >
                  <input
                    className="focus:outline-none focus:border-[#610ee4] py-2  enterpincode rounded-full placeholder:px-1 px-5 border-2 border-[#610ee4]"
                    type="number"
                    onWheel={(e) => e.target.blur()}
                    value={pincode}
                    pattern="[0-9]{6}"
                    placeholder="Enter your Pincode"
                    // onChange={getData}
                    onChange={handleChange}
                  />
                  <input
                    type="submit"
                    className="bg-[#610ee4] px-5 ml-2 py-2 rounded-full cursor-pointer text-white"
                    onClick={handleSubmit}
                    value={"Check"}
                  />
                </form>

                <span className="flex mt-4">
                  <Link
                    to={
                      userId
                        ? `/wearables/t-shirt/${product.name
                            .toLowerCase()
                            .replace(/ /g, "-")}/Checkout`
                        : "/sign-in"
                    }
                  >
                    <button
                      className={`bg-[#610ee4] buynow-btn px-5 py-2 rounded-full ${disable} text-white select-none`}
                    >
                      Buy Now
                    </button>
                  </Link>
                  <button
                    className="bg-[#610ee4] px-5 py-2 ml-3 rounded-full text-white"
                    onClick={() => {
                      Increment();
                      // addToCart(damn);

                      if (count === 10) {
                        return toast.error(
                          "Sorry! 🙇 You can only ADD 10 items in Cart 🛒",
                          {
                            position: "top-center",
                            richColors: true,
                            duration: 1000,
                            style: { color: "red" },
                          }
                        );
                      } else {
                        return toast.success(
                          "The Selected Item has been Added to the Cart 🛒",
                          {
                            position: "top-center",
                            richColors: true,
                            duration: 1000,
                            style: {
                              color: "#610ee4",
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "",
                            },
                          }
                        );
                      }
                    }}
                  >
                    Add to Cart
                  </button>
                </span>
              </>
            ) : (
              <>
                <p className="text-red-600 font-[Satoshi-Black] text-[1.7rem] mt-4">
                  Currently Unavailable as It is Out Of Stock
                </p>
                <div className="flex items-center">
                  <div className="h-[40px] w-[40px] bg-[#b891f8] rounded-full">
                    {notification ? (
                      <img
                        draggable="false"
                        className="m-[5px] cursor-pointer"
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios-glyphs/480/610ee4/alarm.png"
                        alt="alarm"
                      />
                    ) : (
                      <svg
                        onClick={() => {
                          let promise = Notification.requestPermission();
                          promise
                            .then((permission) => {
                              if (permission === "granted") {
                                new Notification(
                                  "Notification Alert Confirmed!!",
                                  {
                                    body: "You will be notified when the product becomes available",
                                    icon: "https://store.typerium.com/cdn/shop/products/44-01.jpg?v=1677842194&width=1280",
                                  }
                                );
                              }
                            })
                            .catch((err) => {
                              console.log(err);
                            });
                          setNotification(true);
                        }}
                        className={`absolute m-[5px] cursor-pointer hover:animate-pulse`}
                        width="30"
                        height="30"
                        viewBox="0 0 480 480"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M352 236.112V192C352 130.144 301.856 80 240 80C178.144 80 128 130.144 128 192V236.112C128 279.584 110.736 321.264 80 352V384H400V352C369.264 321.264 352 279.584 352 236.112Z"
                          fill="#610ee4"
                        />
                        <path
                          d="M240 464C266.512 464 288 442.512 288 416H192C192 442.512 213.488 464 240 464Z"
                          fill="#610ee4"
                        />
                        <path
                          d="M272 112H208V80C208 62.32 222.32 48 240 48C257.68 48 272 62.32 272 80V112Z"
                          fill="#610ee4"
                        />
                        <path
                          d="M400 384C408.837 384 416 376.837 416 368C416 359.163 408.837 352 400 352C391.163 352 384 359.163 384 368C384 376.837 391.163 384 400 384Z"
                          fill="#610ee4"
                        />
                        <path
                          d="M80 384C88.8366 384 96 376.837 96 368C96 359.163 88.8366 352 80 352C71.1634 352 64 359.163 64 368C64 376.837 71.1634 384 80 384Z"
                          fill="#610ee4"
                        />
                      </svg>
                    )}
                  </div>

                  {notification ? (
                    <p className="ml-3 opacity-100 transition-all">
                      You will be notified when the Product will be Available.
                    </p>
                  ) : (
                    <p className="ml-3 opacity-100 transition-all">
                      Get Notified when the Product becomes Available.
                    </p>
                  )}
                </div>
              </>
            )}

            <div className="flex mt-5">
              <h4 className="weird-change">Size Chart : </h4>
              <img
                draggable="false"
                onClick={() => {
                  setDisplaySizing("flex");
                }}
                className="flex justify-center items-center my-[5px] ml-2 cursor-pointer h-3.5"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIxMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMyODc0RjAiIHN0cm9rZS13aWR0aD0iMS4zIj48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0zNy4zNS42NUguNjV2MTAuN2gzNi43Vi42NXoiLz48cGF0aCBmaWxsPSIjODc4Nzg3IiBkPSJNNi42NSA4LjY1aDF2Mi43aC0xem00LTNIMTFsLS4zNS0uMzVWNWwtLjE1LjE1LS4xNS0uMTV2LjNsLS4zNS4zNWguMzV2NS43SDEwbC4zNS4zNXYuM2wuMTUtLjE1LjE1LjE1di0uM2wuMzUtLjM1aC0uMzV2LTUuN3ptNSAzSDE2bC0uMzUtLjM1VjhsLS4xNS4xNS0uMTUtLjE1di4zbC0uMzUuMzVoLjM1djIuN0gxNWwuMzUuMzV2LjNsLjE1LS4xNS4xNS4xNXYtLjNsLjM1LS4zNWgtLjM1di0yLjd6bTQtM2gxdjUuN2gtMXptNCAzaDF2Mi43aC0xem05IDBoMXYyLjdoLTF6bS00LTNoMXY1LjdoLTF6Ii8+PC9nPjwvc3ZnPg=="
                alt=""
              />

              <div className={displaySizing} draggable="true">
                <img
                  draggable="false"
                  src="https://codeswear.nyc3.digitaloceanspaces.com/sizecharts/tshirt.webp"
                  className="fixed h-[80vh] Mobile:w-[23rem] object-cover Mobile:h-[23rem] left-0 right-0 top-[5rem] max-w-full m-auto z-[1] Mobile:rounded"
                  alt=""
                />
                <svg
                  className="z-10 fixed top-[6rem] h-10 left-0 right-0 max-w-full m-auto translate-x-[23rem] Mobile:translate-x-[9.4rem] Mobile:top-[5.5rem] cursor-pointer fill-[#610ee4]"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                  onClick={() => {
                    setDisplaySizing("hidden");
                  }}
                >
                  <path d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"></path>
                </svg>
              </div>
            </div>

            <div className="mt-4">
              <h5 className="weird-change">Exciting Offers:</h5>
              <div className="flex items-center  m-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-green-500 mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"></path>
                </svg>
                <span className="Mobile:w-[300px]">
                  Get Flat 10% off on all prepaid orders above ₹249 Use Code
                  <p className="ml-1 inline text-[#610ee4] font-[Satoshi-bold]">
                    PRINCEOUS10
                  </p>
                </span>
              </div>
              <div className="flex items-center m-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-green-500 mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"></path>
                </svg>
                <span className="w-[300px]">
                  Get Customized
                  <p className="ml-1 mr-1 inline text-[#610ee4] font-[Satoshi-bold]">
                    T-Shirts
                  </p>
                  at only ₹549.
                </span>
              </div>
              <div className="flex items-center p-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-green-500 mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"></path>
                </svg>
                <span className="Mobile:w-[300px]">
                  Buy 2 get 1 Free and buy 3 get 2 Free on all
                  <p className="ml-1 mr-1 inline text-[#610ee4] font-[Satoshi-bold]">
                    Caps
                  </p>
                  - Prepaid orders only.
                </span>
              </div>
              <div className="flex items-center m-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-green-500 mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"></path>
                </svg>
                <span className="Mobile:w-[300px]">
                  Buy 2 get 1 Free and buy 3 get 2 Free on all
                  <p className="ml-1 mr-1 inline text-[#610ee4] font-[Satoshi-bold]">
                    MousePads
                  </p>
                  - Prepaid orders only.
                </span>
              </div>
            </div>
          </div>
        </div>
      }
      <Recommended />
    </>
  );
};

export default SpecificProduct;
