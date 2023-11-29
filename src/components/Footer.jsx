import { Link } from "react-router-dom";
import Logo from "../components/img-assets/logo.svg";
import { ScrollToTop } from "../App";

const Footer = () => {
  return (
    <>
      <footer className=" mt-5 bg-[#8f4ef4] text-white bottom-0">
        <div className="flex w-auto m-5   Mobile:flex-col">
          <Link to={"/"} className="Logo-cont m-5 mt-10 w-auto block" onClick={ScrollToTop}>
            <div className="flex items-center">
              <img
                className="logo text-white Logo-w-link"
                src={Logo}
                draggable="false"
              />
              <p className="logo-caption text-white">Princeous</p>
            </div>
            <p className="w-[300px]">
              Wear the code Premium coding tshirts, hoodies and apparals
            </p>
          </Link>
          <div className="flex mt-5  Mobile:flex-col Mobile:text-center Mobile:m-auto">
            <ul className="m-5 mx-10">
              SHOP
              <li className="footer-li mt-2"><Link to={"/wearables/t-shirt"}  onClick={ScrollToTop}>T-Shirts</Link></li>
              <li className="footer-li ">Sweatshirts</li>
              <li className="footer-li ">Hoodies</li>
              <li className="footer-li ">Zipper Hoodies</li>
            </ul>
            <ul className="m-5 mx-10">
              CUSTOMER SERVICE
              <li className="footer-li mt-2">Contact us</li>
              <li className="footer-li ">About us</li>
              <li className="footer-li ">Return Policy</li>
            </ul>
            <ul className="m-5 mx-10">
              POLICY
              <li className="footer-li mt-2">Privact Policy</li>
              <li className="footer-li " onClick={ScrollToTop}><Link to={"/terms-&-conditions"}>Terms & Conditions</Link></li>
            </ul>
            {/* <ul className="m-5 mx-10">
              OUR SOCIALS
              <div className="flex items-center align-middle mt-2">
                
                <li className="footer-li ">Instagram</li>
              </div>
              <div className="flex items-center">
                
                <li className="footer-li ">Youtube</li>
              </div>
              <li className="footer-li ">Facebook</li>
              <li className="footer-li ">Twitter</li>
            </ul> */}
          </div>
        </div>

        <div className="flex items-center justify-between w-[95%] m-auto">
          <div className="py-5 flex">
            <a className="">© 2023 Princeous Clothing</a>
            <p className="Mobile:hidden"> — All Rights Reserved</p>
          </div>

          <div className="icons flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="mx-1 cursor-pointer"
              width="30"
              height="30"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FF3D00"
                d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
              ></path>
              <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="cursor-pointer"
              width="28"
              height="28"
              viewBox="0 0 48 48"
            >
              <radialGradient
                id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                cx="19.38"
                cy="42.035"
                r="44.899"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#fd5"></stop>
                <stop offset=".328" stopColor="#ff543f"></stop>
                <stop offset=".348" stopColor="#fc5245"></stop>
                <stop offset=".504" stopColor="#e64771"></stop>
                <stop offset=".643" stopColor="#d53e91"></stop>
                <stop offset=".761" stopColor="#cc39a4"></stop>
                <stop offset=".841" stopColor="#c837ab"></stop>
              </radialGradient>
              <path
                fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
              ></path>
              <radialGradient
                id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                cx="11.786"
                cy="5.54"
                r="29.813"
                gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#4168c9"></stop>
                <stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop>
              </radialGradient>
              <path
                fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
              ></path>
              <path
                fill="#fff"
                d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
              ></path>
              <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
              <path
                fill="#fff"
                d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="mx-1 cursor-pointer"
              width="25"
              height="25"
              viewBox="0 0 48 48"
            >
              <linearGradient
                id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                x1="9.993"
                x2="40.615"
                y1="9.993"
                y2="40.615"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#2aa4f4"></stop>
                <stop offset="1" stopColor="#007ad9"></stop>
              </linearGradient>
              <path
                fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
              ></path>
              <path
                fill="#fff"
                d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="mt-[1.6px] cursor-pointer"
              width="23"
              height="23"
              viewBox="0 0 50 50"
            >
              <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
            </svg>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
