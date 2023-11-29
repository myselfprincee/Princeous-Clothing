import { Link } from "react-router-dom";

const RefundPolicy = () => {
  return (
    <div className="mt-20 w-[95%] flex flex-col m-auto">
      <h1 className="text-[2rem]">Refund and Cancellation Policy</h1>
      <h2 className="mt-10 text-[1.3rem]">Refund Policy</h2>
      <p>
        At{" "}
        <Link
          className="text-[#610ee4] font-bold underline"
          to="https://www.princeous.princegupta.me"
        >
          Princeous
        </Link>
        , our primary focus is customer satisfaction, which is why we strive to
        provide the best products and services. Please note that product images
        on our website are for representational purposes only and may vary
        slightly due to lighting conditions or other factors.
      </p>

      <p className="mt-3">
        At <Link className="text-[#610ee4] font-bold">Princeous</Link>, our
        primary focus is customer satisfaction, which is why we strive to
        provide the best products and services. Please note that product images
        on our website are for representational purposes only and may vary
        slightly due to lighting conditions or other factors.
      </p>
      <ul>
        <li className="mt-3 mb-3 font-bold">
          Items can only be returned within a 7-day window from the date of
          delivery.
        </li>
        <li className="mt-3 mb-3 font-bold">
          To initiate a return request, customers can visit{" "}
          <Link
            href="http://192.168.0.153:5173/return"
            className="text-[#610ee4] font-bold underline"
          >
            Princeousclothing.com/return
          </Link>
        </li>
        <li>A valid reason is required for returning an item.</li>
        <li>
          Repeatedly returning items as an abuse of our return policy may result
          in declined return requests.
        </li>
        <li className="mt-3">
        <span className="font-bold">
          Customers cannot apply for a full refund if the item is part of a
          <p className="inline ">&ldquo;Deal of the Day&ldquo;</p> offer.
        </span>
        </li>
        
        <li className="mt-3">
          In some cases where there is a slight mismatch between the product
          pictures and the actual product, return requests related to such
          mismatches may be rejected.
        </li>
        <li className="mt-3">
          In rare cases where return pickup is not available with our courier
          partner, the customer is responsible for sending the product back to
          us for refund or replacement processing.
        </li>
      </ul>

      <h2 className="mt-[2rem] text-[1.3rem]">Cancellation Policy</h2>
      <p>
        To cancel your order, please contact us using the provided contact link.
        Orders can be canceled until they are shipped from our warehouse.
        Requests received more than 7 business days prior to the product
        delivery date will not be processed.
      </p>
      <p className="mt-3">
        If you have any questions or concerns regarding our Refund and
        Cancellation Policy,
        <p className="weird-change text-[#610ee4] text-[1.2rem] mt-4 ">
          Please Contact us at:
        </p>
      </p>
      <div className="mt-2">
        <ul className="flex items-center">
          <li className="weird-change text-[#610ee4] mr-1">Call/Whatsapp:</li>
          <a
            href="tel:9871890758"
            className=" text-purple-400 active:text-purple-700"
          >
            +91-9871890758
          </a>
        </ul>
        <ul className="flex items-center">
          <li className="weird-change text-[#610ee4] mr-1">Email: </li>
          <a
            href="mailto:care@princeous.in"
            className=" text-purple-400 active:text-purple-700"
          >
            care@princeous.in
          </a>
        </ul>
        <ul className="flex items-center">
          <li className="weird-change text-[#610ee4] mr-1">Support Hours: </li>
          <li className=" text-purple-400 active:text-purple-700">
            10 AM - 6 PM
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RefundPolicy;
