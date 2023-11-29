import "./App.css";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import Signup from "./Signup.jsx";
import Signin from "./Signin";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Blog from "./components/Blog";
import About from "./components/About";
import TSHIRTRange from "./components/Genderwise/TSHIRTRange";
import WomensRange from "./components/Genderwise/WomensRange";
import KidsRange from "./components/Genderwise/KidsRange";
import ErrorPage from "./components/ErrorPage";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundPolicy from "./components/RefundPolicy";
import Navbar from "./components/Navbar";
import SpecificProduct from "./components/Genderwise/SpecificProduct";
import Footer from "./components/Footer";
import ShoppingKart from "./components/ShoppingKart";
import Buy from "./components/Buy";
import GetAddress from "./components/GetAddress";
// import { useAuth } from "@clerk/clerk-react";
import OnScreenNav from "./components/Small Components/OnScreenNav.jsx";

export const DataContext = React.createContext();

export const ScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function App() {
  return (
    <Suspense fallback={<p>Loading......</p>}>
      <DataContext.Provider value={{}}>
        <ShoppingKart />
        <Navbar />
        <OnScreenNav />
        {/* <RemoveDrag /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/wearables/t-shirt" element={<TSHIRTRange />} />
          <Route path="/women" element={<WomensRange />} />
          <Route path="/kids" element={<KidsRange />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-&-conditions" element={<TermsAndConditions />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route
            path="/wearables/t-shirt/:id/:productName"
            element={<SpecificProduct />}
          />
          <Route path="/*" element={<ErrorPage />} />

          <Route
            path="/wearables/t-shirt/wolverine-design-tshirt-plainWhite/address"
            element={<GetAddress />}
          />
          <Route
            path="/wearables/t-shirt/:productName"
            element={<SpecificProduct />}
          />
          <Route path={`/wearables/t-shirt/Checkout`} element={<Buy />} />
        </Routes>
        <Footer />
      </DataContext.Provider>
    </Suspense>
  );
}
