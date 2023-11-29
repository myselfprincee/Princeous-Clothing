import { Link } from "react-router-dom";

const GetAddress = () => {
  return (
    <>
      {/* <h1 className="text-2xl font-[Satoshi-Black] text-[#610ee4] m-8 mb-0">
        Enter Your Delivery Address
      </h1> */}
      {/* <form action="POST">
        <p>
          **Don&apos;t Worry We will Save it So that you don&apos;t have to
          Enter It again.
        </p>
      </form>
      <form action="">
        <div className="flex">
          <input
            className="focus:outline-none focus:border-[#610ee4] py-2  enterpincode rounded-full placeholder:px-1 px-5 border-2 border-[#610ee4]"
            type="text"
            placeholder="Enter Your Name"
            autoComplete="true"
          />
          <input
            className="focus:outline-none focus:border-[#610ee4] py-2  enterpincode rounded-full placeholder:px-1 px-5 border-2 border-[#610ee4]"
            type="text"
            placeholder="Enter Your Email"
          />
        </div>
        <div>
          <textarea
            className="Mobile:w-[90%] focus:outline-none focus:border-[#610ee4] py-2 border-2 border-[#610ee4] rounded-3xl resize-none"
            type="text"
            placeholder="Enter your Address"
          />
        </div>
        <select className="border-2 py-2 focus:outline-none bg-white rounded-full px-2 text-[#610ee4] font-[Satoshi-Black] border-[#610ee4] ">
          <option value="select" id="CountrySelect" disabled selected>
            Select
          </option>
          <option value="India">India</option>
          <option value="select">United States</option>
          <option value="select">New Zealand</option>
          <option value="select">Australia</option>
          <option value="select">West Indies</option>
          <option value="select">Ireland</option>
          <option value="select">Sri Lanka</option>
          <option value="select">Nigeria</option>
        </select>
        <input
          className="focus:outline-none focus:border-[#610ee4] py-2  enterpincode rounded-full placeholder:px-1 px-5 border-2 border-[#610ee4]"
          type="Number"
          placeholder="Enter Your Phone Number"
        />
        <input
          className="focus:outline-none focus:border-[#610ee4] py-2  enterpincode rounded-full placeholder:px-1 px-5 border-2 border-[#610ee4]"
          type="Number"
          id="myNumberInput"
          pattern="[0-9]{6}"
          onWheelCapture={(e) => e.preventDefault()}
          placeholder="Enter Your Pincode"
        />
        <div>
          <input
            className="focus:outline-none focus:border-[#610ee4] py-2  enterpincode rounded-full placeholder:px-1 px-5 border-2 border-[#610ee4]"
            type="text"
            placeholder="Enter your State"
          />
          <input
            className="focus:outline-none focus:border-[#610ee4] py-2  enterpincode rounded-full placeholder:px-1 px-5 border-2 border-[#610ee4]"
            type="text"
            placeholder="Enter your District"
          />
          <div>
            <input
              className=" block py-2 text-white rounded-full px-5 cursor-pointer bg-[#610ee4]"
              type="Submit"
              value={"Let's Review Items"}
            />
          </div>
        </div>
      </form> */}

      <div>
        <p className="text-[#610ee4] font-[Satoshi-Black] text-xl mt-20 Mobile:w-[90%] m-auto">
          Wohoo! 🥳 Your Address had been Saved Already
        </p>
        <div className="bg-[#dfcef9] Mobile:w-[90%] py-3 rounded-2xl px-3 mx-auto mt-5">
          <span className="flex items-center">
            <img
              draggable="false"
              className="pointer-events-none w-5 h-5"
              src="https://res.cloudinary.com/dmy3ymbnl/image/upload/v1697218655/icons8-info_gadn3g.svg"
              alt=""
            />
            <p className="text-[#610ee4] font-[Satoshi-Black] text-lg">
              Your Address is :
            </p>
          </span>

          <p className="text-[#610ee4] font-[Satoshi-Black] text-sm">
            Plot No. 216B G/3 Block Hari Nagar Uttam Nagar, Delhi - 110059
          </p>
        </div>
      </div>
      <button className="bg-[#610ee4] text-white p-3 rounded-full flex justify-center m-auto mt-4">
        <Link
          to={"/product/t-shirt/wolverine-design-tshirt-plainWhite/Checkout"}
        >
          Continue to Checkout
        </Link>
      </button>
    </>
  );
};

export default GetAddress;
