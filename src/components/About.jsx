import Logo from "../components/img-assets/logo.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <img
        src={Logo}
        className="flex m-auto h-[10rem] mt-[6rem] select-none Mobile:h-[5rem]"
        alt="Princeous Logo"
        draggable="false"
      />
      <h2 className="aboutus-greet text-center mt-8 Mobile:text-[2rem] Mobile:w-[85%] Mobile:m-auto Mobile:mt-10">
        Welcome to Princeous Clothing
      </h2>
      <p className="aboutus-greet-p w-[85%] text-center m-auto Mobile:mt-5 Mobile:text-[1rem]">
        At Princeous Clothing, we believe that fashion is a powerful form of
        self-expression. Our journey began more than a decade ago in the
        bustling streets of Delhi, India, where we set out on a mission to
        redefine style and offer our customers an exquisite range of
        high-quality clothing.
      </p>

      <div className="About-1-container mt-8 Mobile:mt-12 Mobile:flex Mobile:flex-col left-0 right-0 m-auto Mobile:font-[Satoshi-Variable]">
        <div>
          <h2 className="Mobile:text-[1.7rem] about-sub-cont">Our Vision</h2>
          <p className="Mobile:text-[1rem]">
            Our vision is to become the go-to destination for fashion
            enthusiasts seeking the latest trends and styles. We aim to inspire
            and empower individuals to embrace their uniqueness and confidence
            through our diverse collection of apparel.
          </p>
        </div>

        <div>
          <h2 className="about-sub-cont Mobile:mt-5">A Legacy of Excellence</h2>
          <p>
            With a passion for creativity and a commitment to excellence,
            we&apos;ve established ourselves as one of the leading clothing
            brands in the region. We take pride in our meticulous attention to
            detail and the use of premium materials to ensure that every piece
            of clothing we create reflects the highest standards of quality.
          </p>
        </div>
      </div>

      <div className="w-[90%] m-auto mt-12 Mobile:mt-5">
        <h2 className="about-sub-cont ">Fashion That Tells Your Story</h2>
        <p>
          At Princeous Clothing, we believe that fashion is not just about what
          you wear; it&apos;s about telling your story to the world. Our
          collections are thoughtfully curated to cater to diverse tastes and
          preferences, ensuring that there&apos;s something for everyone.
          Whether you&apos;re dressing up for a special occasion or looking for
          everyday comfort, we&apos;ve got you covered.
        </p>
      </div>

      <div className="About-1-container Mobile:mt-5">
        <div>
          {/* <h2 className="about-sub-cont">Embrace Your Style, Embrace Your Identity</h2> */}
          <div className="flex items-center">
            <h1 className="text-[2rem]">Embrace</h1>
            <div className="mt-2 ml-2">
              <h3 className="text-[.7rem]">Your Style</h3>
              <h3 className="text-[.7rem]">Your Identity</h3>
            </div>
          </div>
          <p>
            Princeous Clothing celebrates diversity and individuality. We
            encourage our customers to express themselves fearlessly through
            fashion and embrace their unique identity. Our clothing is not just
            about trends; it&apos;s about embracing the beauty of being
            yourself.
          </p>
        </div>
        <div>
          <h2 className="about-sub-cont Mobile:mt-5">
            Join the Princeous Family
          </h2>
          <p>
            We are grateful for the support and love we have received from our
            customers throughout our journey. Join the Princeous family and be a
            part of a community that appreciates the art of fashion and
            celebrates individuality..
          </p>
        </div>
      </div>

      <div className="w-[90%] m-auto mt-12 Mobile:mt-5">
        <h2 className="about-sub-cont ">Our Stores Across Delhi</h2>
        <p>
          We are delighted to serve our esteemed customers at multiple locations
          across Delhi. Our stores are designed to provide a delightful shopping
          experience, with expert stylists ready to assist you in finding the
          perfect outfit that complements your style and personality.
        </p>

        <p className="mt-5 text-[#6608ee] font-[Satoshi-Black] Mobile:text-[1.2rem]">
          Visit our stores at the following locations:
        </p>
        <ul className="storeaddress-ul w-[90%]">
          <li className="font-semibold">
            Store 1:
            <Link
              className="underline"
              to={
                "https://www.google.com/maps/search/+B-228,+Okhla+Induastrial+Area,+Phase+-+I,+New+Delhi/@28.5401197,77.2525528,14z/data=!3m1!4b1?entry=ttu"
              }
              target="_blank"
            >
              {" "}
              B-228, Okhla Induastrial Area, Phase - I, New Delhi
            </Link>
          </li>
          <li className="font-semibold">
            Store 2:
            <Link
              className="underline"
              to={
                "https://www.google.com/maps/search/+House+no+90+pocket+F+25,+Sector+7+Rohinii,+New+Delhi/@28.5703783,77.1674054,17z/data=!3m1!4b1?entry=ttu"
              }
              target="_blank"
            >
              House no 90 pocket F 25, Sector 7 Rohinii, New Delhi
            </Link>
          </li>
          <li className="font-semibold">
            Store 3:
            <Link
              className="underline"
              to={
                "https://www.google.com/maps/search/No.+32-E,+Near+Alchon+International+School,+Patparganj,+Delhi/@28.6245048,77.2749251,14z/data=!3m1!4b1?entry=ttu"
              }
              target="_blank"
            >
              {" "}
              No. 32-E, Near Alchon International School, Patparganj, Delhi
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
