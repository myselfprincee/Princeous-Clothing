import { Link } from "react-router-dom";
import Logo from "../components/img-assets/logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { IoBag } from "react-icons/io5";
import { IconContext } from "react-icons";
import Man from "./img-assets/Man.webp";
import woman from "./img-assets/woman.webp";
import Boy from "./img-assets/boy.webp";
import { UserButton, useAuth } from "@clerk/clerk-react";
import myStore from "./Store";
import { ScrollToTop } from "../App";

export const ShowKart = () => {
  const cancel = document.querySelector(".hide-the-kart");
  cancel.style.transition = "all 400ms ease-out";
  const kart = document.querySelector(".cart-section");
  kart.style.transition = "all 100ms ease-out";
  kart.style.opacity = "100%";
  kart.style.transform = "translateX(233%)";

  if (window.innerWidth <= 768) {
    kart.style.transform = "translateX(0)";
    kart.style.width = "100%";
  }
  kart.style.pointerEvents = "all";
};

const Navbar = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { count } = myStore();

  const ShowAgePopOver = async () => {
    const popover = document.querySelector(".categories-popover");
    popover.style.display = popover.style.display === "none" ? "block" : "none";
    popover.style.transition = "all 300ms ease-in-out";
  };

  return (
    <nav className="navbar top-0 left-0">
      <div className="nav-container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="Logo-cont">
            <Link to={"/"} className="Logo-w-link" onClick={ScrollToTop}>
              <img className="logo" src={Logo} draggable="false" />
              <p className="logo-caption">Princeous</p>
            </Link>
          </div>
          <ul className="nav-list Mobile:hidden">
            <div className="text-categories" onClick={ShowAgePopOver}>
              <li className="nav-list-li">Categories</li>

              <div className="categories-popover">
                <div className="gender-catego-container">
                  <Link
                    className="gender-catego-container-links"
                    to={"/wearables/t-shirt"}
                    onClick={ScrollToTop}
                  >
                    <img
                      className="categories-logo-man categories-logo"
                      src={Man}
                      draggable="false"
                    />
                    <div className="gender-catego-innerText">
                      <h4>Explore Latest Men&apos;s Fashion Trends!</h4>
                      <p>
                        Check out our latest collection of men&apos;s clothing,
                        including shirts, pants, and jackets.
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="gender-catego-container">
                  <Link className="gender-catego-container-links" to={"/women"}>
                    <img
                      className="categories-logo-woman categories-logo"
                      src={woman}
                      draggable="false"
                    />
                    <div className="gender-catego-innerText">
                      <h4>Shop Women&apos;s Design & Elegance</h4>
                      <p>
                        Explore our newest women&apos;s apparel line – from
                        elegant dresses to trendy tops and versatile jackets.
                        Elevate your style today!
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="gender-catego-container">
                  <Link className="gender-catego-container-links" to={"/kids"}>
                    <img
                      className="categories-logo-boy categories-logo"
                      src={Boy}
                      draggable="false"
                    />
                    <div className="gender-catego-innerText">
                      <h4>Shop Adorable Kids Fashion & More !</h4>
                      <p>
                        Discover the Latest Kids Collection: Stylish Shirts,
                        Trendy Pants, & Cool Jackets! Get them ready for fun
                        adventures in style!!
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/blog" className="nav-list-li">
              Blog
            </Link>
          </ul>
        </div>
        <div
          className="nav-rightside"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="search-container Mobile:hidden">
            <input
              className="search"
              type="search"
              name=""
              id=""
              placeholder="Search for products, brands and more"
            />
            <IconContext.Provider
              value={{
                className: "search-icon-provider",
                style: { marginLeft: "10px", cursor: "pointer" },
              }}
            >
              <AiOutlineSearch
                size={"1.5rem"}
                className="search-icon"
                color="#610ee4"
              />
            </IconContext.Provider>
          </div>
          {userId ? (
            <UserButton rel="preload" className="userbutton" />
          ) : (
            <Link to="/sign-up">
              <BsPersonCircle
                size={"1.5rem"}
                className="Person-icon mr-[.5rem] Mobile:mr-0"
                color="#610ee4"
              />
            </Link>
          )}
          <div
            className="relative ml-[2rem] Mobile:ml-[1.4rem] Mobile:mr-[.7rem] cursor-pointer"
            onClick={ShowKart}
          >
            <IoBag size={"1.6rem"} color="#610ee4" />
            <span className="h-4 w-4 left-[60%] rounded-full absolute block text-center text-[12px] text-[white] bg-[#610ee4] top-0">
              {count}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
ShowKart;
