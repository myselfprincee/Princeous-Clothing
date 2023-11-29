// import { Container } from "postcss";
import ContSlide from "../components/ContSlide";

const Recommended = () => {
  return (
    <>
      <h4 className="text-2xl font-[Satoshi-Black] text-[#610ee4] m-8 ">
        Recommended For You
      </h4>

      <div className="flex justify-center items-center m-auto">
        {/* <div className="w-10/12 flex m-auto overflow-x-scroll hidethescrollbar"> */}
        {/* <div className="scrollthescrollbar flex"> */}
        <ContSlide />
        {/* </div> */}
        {/* </div> */}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="right-arrow"
          className="h-[6rem] text-[#610ee4]"
        >
          <path
            fill="#610ee4"
            d="M9.879 17.243a1 1 0 0 1-.707-1.707L12.707 12 9.172 8.464a1 1 0 0 1 1.414-1.414l4.242 4.243a1 1 0 0 1 0 1.414l-4.242 4.243a.997.997 0 0 1-.707.293Z"
          ></path>
        </svg> */}
      </div>
    </>
  );
};

export default Recommended;
