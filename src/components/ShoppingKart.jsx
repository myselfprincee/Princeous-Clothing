import React from "react";
import { MdCancel } from "react-icons/md";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import myStore from "./Store";
import { useAuth } from "@clerk/clerk-react";
import { IncrementBtn, DecrementBtn } from "./IncrementBtn.jsx";
import { DataContext } from "../App.jsx";
import { ShowKart } from "./Navbar.jsx";
import CloseBtn from "./Small Components/CloseBtn.jsx";

const ShoppingKart = () => {
  const Data = React.useContext(DataContext);
  const { DBItems } = Data;
  const { count, reset, cart, removeCart, clearCart } = myStore();
  const { userId } = useAuth();
  const [isClear, setIsClear] = React.useState(false);
  const [Empty, setEmpty] = React.useState(true);
  const [disabled, setDisabled] = React.useState(
    "cursor-not-allowed disabled opacity-50 pointer-events-none"
  );

  React.useEffect(() => {
    setIsClear(count >= 1);

    if (count === 0) {
      setEmpty(true);
      setDisabled(
        "opacity-20 btn-disabled pointer-events-none cursor-not-allowed"
      );
    } else if (count > 0) {
      setEmpty(false);
      setDisabled("opacity-100");
      return ShowKart();
    } else {
      setEmpty(false);
      setDisabled("opacity-100");
    }

    HidetheKart();
  }, [count]);

  const ChangeTheState = () => {
    setIsClear(false);
    setEmpty(true);
    setDisabled("cursor-not-allowed opacity-50 pointer-events-none disabled");
    reset();
  };

  const HidetheKart = () => {
    const cancel = document.querySelector(".hide-the-kart");
    cancel.style.transition = "all 100ms ease-out";
    const kart = document.querySelector(".cart-section");
    kart.style.transform = "translateX(340%)";
    kart.style.transition = "all 100ms ease-out";
    kart.style.pointerEvents = "none";
    if (window.innerWidth <= 768) {
      kart.style.width = "100%";
      kart.style.maxWidth = "100%";
    }
  };

  return (
    <div
      className="cart-section
     Mobile:w-[100%] left-0 overflow-y-scroll
    "
    >
      <h2 className="ml-8 mx-6 mt-6 text-[1.4rem] inline-flex">
        Shopping Kart
      </h2>
      <IconContext.Provider
        value={{
          color: "#610ee4",
          className: "hide-the-kart mt-[-2.1rem]",
          size: "2.5rem",
        }}
      >
        <MdCancel onClick={HidetheKart} />
      </IconContext.Provider>

      {/* <CloseBtn className="bg-[#610ee4] hide-the-kart mt-[-2.1rem]" onClick={HidetheKart}/> */}

      <div className="ml-6 mx-6">
        {Empty && <p className="ml-4 mt-5 font-bold">🤦‍♀️Your Cart is Empty !</p>}

        {isClear && (
          <div className="mx-1 my-4 w-[95%] flex justify-center items-center">
            {/* {cart.map((item) => { */}
            <div className="flex flex-col">
              <div className="flex">
                <div className="relative">
                  <p className="flex justify-center items-center text-[9px] font-[Satoshi-Medium] text-white rounded-full bg-[#610ee4] absolute left-[80%] top-[-5%] h-4 w-4">
                    {count}
                  </p>
                  <img
                    className="h-[5rem] w-[4rem] rounded-md"
                    src=" https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="lmvsdl"
                  />
                </div>

                <div className="flex flex-col ml-3  text-[14px] w-[60%] text-[#610ee4]">
                  <p className="font-[Satoshi-Black]">
                    Princeous Osaka Japan Edition
                  </p>
                  <p className="font-[Satoshi-Regular] text-[10px]">
                    (XL/Pink)
                  </p>
                  <p className="font-[Satoshi-Regular] text-[14px]">
                    Price : <strong>₹599</strong>
                  </p>
                </div>
              </div>
            </div>
            {/* })} */}

            <div className="ml-1 flex justify-center items-center">
              <DecrementBtn />
              <p className="mx-2 font-[Satoshi-Black]">{count}</p>
              <IncrementBtn />
            </div>
          </div>
        )}

        <h3 className="mt-7 mx-1">Subtotal: ₹0</h3>

        <button
          className={`btn px-5 mb-10 mt-5 ml-2 py-1 rounded-full text-white ${disabled}`}
          disabled={true}
        >
          <Link
            to={
              userId
                ? "/product/t-shirt/wolverine-design-tshirt-plainWhite/Checkout"
                : "/sign-up"
            }
          >
            Checkout
          </Link>
        </button>

        <button
          className={`btn px-5 mt-6 ml-2 py-1 rounded-full text-white ${disabled}`}
          onClick={ChangeTheState}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default ShoppingKart;
