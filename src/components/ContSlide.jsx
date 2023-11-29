import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function SampleNextArrow(props) {
const [left, setLeft] = useState("99.4%");
useEffect(() => {
  if (window.innerWidth <= 720){
setLeft("90%")
  }}, []);

  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundImage:
          "url('https://res.cloudinary.com/dmy3ymbnl/image/upload/v1695277552/btn_reqhfj.svg')",
        backgroundSize: "cover",
        left: left,
        height: "60px",
        width: "40px",
        zIndex: "100",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundImage:
          "url('https://res.cloudinary.com/dmy3ymbnl/image/upload/v1695277552/btn_reqhfj.svg')",
        backgroundSize: "cover",
        left: "-3.5%",
        borderRadius: "200px",
        height: "60px",
        width: "40px",
        position: "absolute",
        rotate: "180deg",
        marginTop: "-3.38rem",
        zIndex: "100",
      }}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider() {
  const [slidesToShow, setSlidesToShow] = useState(7);
  const [slidesToScroll, setSlidesToScroll] = useState(5);

  useEffect(() => {
    if (window.innerWidth <= 720){
      setSlidesToShow(2)
      setSlidesToScroll(2)
  }else{
    setSlidesToShow(7)
    setSlidesToScroll(5)
  }
}, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrows: true,
    draggable: true,
    className: "Slider",
    accessibility: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => <a className="Slider">{dots}</a>,
  };
  return (
    <Slider {...settings}>
      <div className="card cursor-pointer w-2/6 flex justify-center items-center ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
      <div className="card cursor-pointer w-2/6 ">
        <Link to={"/product/t-shirt/wolverine-design-tshirt-plainWhite"}>
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={"150px"}
            height={"100px"}
            className=""
            alt=""
          />
          <h5 className="category-title text-gray-500 mt-3">
            T-SHIRTS FOR MEN
          </h5>
          <h2 className="inline-flex flex-wrap w-40 shrink text-[16px]">
            Wolverine Design Tshirt1
          </h2>
          <p className=" price-tag">&#8377;599</p>

          <div className="total-available-colors flex">
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 w-5 bg-red-900 mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 available-colors mt-2 mx-0.5"></div>
            <div className="rounded-full h-5 bg-red-500 available-colors mt-2 mx-0.5"></div>
          </div>

          <div className="available-sizes my-2 flex left-0">
            <span className="inline-flex border-2 px-2 rounded-lg">S</span>
            <span className="inline-flex border-2 px-2 mx-1 rounded-lg">M</span>
            <span className="inline-flex border-2 px-2 rounded-lg">XL</span>
          </div>
        </Link>
      </div>
    </Slider>
  );
}
