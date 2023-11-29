// import React from 'react'
import { Link } from "react-router-dom";
import Man from "../img-assets/Man.webp";
import woman from "../img-assets/woman.webp";
import Boy from "../img-assets/boy.webp";

export default function MobileNavigation() {

     function handleReload() {
        window.location.reload();
    }
  return (
    <>
      <div className="h-[100%] z-50 w-[100%] top-0 left-0 fixed bg-white">
        `
        <div className="h-[100%] w-[100%] mt-12 fixed bg-white">

            <h5 className="text-[1.5rem] my-3 mb-8 font-[Satoshi-Bold] text-center text-[#610ee4]">Categories</h5>
        <div className="gender-catego-container pb-2" onClick={handleReload}>
          <Link
            className="gender-catego-container-links"
            to={"/wearables/t-shirt"}
          >
            <img
              className="h-[6rem] ml-2 rounded-lg"
              src={Man}
              draggable="false"
            />
            <div className="ml-3 flex flex-col justify-center">
              <h4 className="text-[17px] font-[Satoshi-Bold]">
                Explore Latest Men&apos;s Fashion Trends!
              </h4>
              <p className="text-[13px]">
                Check out our latest collection of men&apos;s clothing,
                including shirts, pants, and jackets.
              </p>
            </div>
          </Link>
          </div>

          <div className="gender-catego-container pb-2" onClick={handleReload}>
          <Link className="gender-catego-container-links" to={"/women"}>
            <img
              className="h-[6rem] ml-2 rounded-lg"
              src={woman}
              draggable="false"
            />
            <div className="ml-3 flex flex-col justify-center">
              <h4 className="text-[17px] font-[Satoshi-Bold]">
                Shop Women&apos;s Design & Elegance
              </h4>
              <p className="text-[13px]">
                Explore our newest women&apos;s apparel line – from elegant
                dresses to trendy tops and versatile jackets. Elevate your style
                today!
              </p>
            </div>
          </Link>
          </div>


          <div className="gender-catego-container pb-2" onClick={handleReload}>
          <Link className="gender-catego-container-links" to={"/kids"}>
            <img
              className="h-[6rem] w-[4rem] object-cover ml-2 rounded-lg"
              src={Boy} 
              draggable="false"
            />
            <div className="ml-3 flex flex-col justify-center">
              <h4 className="text-[17px] font-[Satoshi-Bold]">
                Shop Kids Fashion & More !
              </h4>
              <p className="text-[13px]">
                Discover the Latest Kids Collection: Stylish Shirts,
                Pants, & Cool Jackets! Get them ready for fun adventures in
                style!!
              </p>
            </div>
          </Link>
          </div>

         
        </div>
        1`
      </div>
    </>
  );
}
