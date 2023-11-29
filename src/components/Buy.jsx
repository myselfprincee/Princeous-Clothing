import { useState } from "react";
import { toast, Toaster } from "sonner";
import { Link } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import myStore from "./Store";
import {IncrementBtn, DecrementBtn } from "./IncrementBtn";

const Buy = () => {
  const { userId } = useAuth();
  const { count } = myStore();

  const [COD, setCOD] = useState("flex");
  const [type, setType] = useState("" && false);

  const HidePromo = () => {
    if (COD === "flex") {
      setCOD("hidden");
      setType(" (Cash On Delivery)");
      toast.warning("Promo Code is not applicable on COD Orders 🥺", {
        position: "top-center",
        richColors: true,
        duration: 1000
      });
    } else {
      setCOD("flex");
      setType("");
    }
  };

  const PromoCodeApplied = () => {
    console.log("Promo Code Applied");
    toast.success("Congratulations 🎉 Promo Code has been Applied", {
      position: "top-center",
      richColors: true,
      duration: 1000,
      style: { color: "#610ee4" , backgroundColor: "#efe6fc", border: "1px solid #610ee4", borderOpacity: "0.5"},
    });
  };

  return (
    <div className="mt-20 w-[90%] m-auto">
      <Toaster className="h-5" richColors={true} />
      <h3 className="text-2xl font-bold flex items-center Mobile:w-[90%] m-auto">Review Cart Items Pay</h3>

      <div className="bg-[#dfcef9] Mobile:w-[90%] py-3 rounded-2xl px-3 mx-auto mt-5">
        <div className=" mx-auto mt-5">
        <div className="mt-2 w-[95%] flex justify-center items-center bg-[#efe6fc] p-2 py-4 rounded-xl m-auto">
          <div className="relative">
            <p className="flex justify-center items-center text-[9px] font-[Satoshi-Medium] text-white rounded-full bg-[#610ee4] absolute left-[80%] top-[-5%] h-4 w-4">
              {count}
            </p>
            <img
              className="h-[4rem] w-[4rem]"
              src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
              alt=""
            />
          </div>

          <p className="ml-3 font-[Satoshi-Black] text-[14px] w-[60%] text-[#610ee4]">
            {/* {item.value.name} */}adaafa
          </p>

          <div className="ml-1 flex justify-center items-center">
            <DecrementBtn />
            <p className="mx-2 font-[Satoshi-Black]"> {count} </p>
            <IncrementBtn />
          </div>
        </div>

        <h3 className="mt-3 flex">Subtotal : ₹0</h3>
        </div>
      </div>

      <div className="mt-4 flex items-center flex-col">
        <div className={`${COD} mb-4`}>
          <input
            type="text"
            className="focus:outline-none focus:border-[#610ee4] py-2  enterpincode rounded-full placeholder:px-1 px-5 border-2 border-[#610ee4]"
            placeholder="Enter Promo Code"
          />
          <input
            className="py-2 ml-2 select-none rounded-full cursor-pointer placeholder:px-1 px-5 bg-[#610ee4] text-white"
            type="submit"
            value={"Apply"}
            onClick={PromoCodeApplied}
          />
        </div>

        <span className="flex items-center w-[90%] left-0 right-0 m-auto">
          <label htmlFor="" className="custom-checkbox">
            <input
              className="scale-125 flex items-center justify-center appearance-none border-[1.3px] h-5 w-5 rounded-md border-[#610ee4] before:content-[''] checked:before:content-['✔'] mr-3 ml-3 checked:text-[#610ee4] focus:outline-none"
              type="checkbox"
              name=""
              id=""
              onClick={HidePromo}
            />
            <span className="checkmark"></span>
          </label>

          <p className="Mobile:text-[12px] text-[#610ee4]">
            Pay via Cash on Delivery (Coupon Code not applicable)
          </p>
        </span>
        <Link
          // to={
          //   userId
          //     ?  `/product/t-shirt/${item.value.name.toLowerCase().replace(/ /g, "-")}/Checkout`
          //     : "/sign-up"
          // }
        >
          <button className="mt-5 py-2 ml-2 rounded-full placeholder:px-1 px-5 bg-[#610ee4] text-white">
            {`Pay ₹400` + type}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Buy;
