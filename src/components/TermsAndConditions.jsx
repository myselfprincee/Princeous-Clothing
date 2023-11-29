import { Link } from 'react-router-dom';
import Navbar from "./Navbar";


const TermsAndConditions = () => {
    return (
        <div>
        <Navbar/>
        <div className="Privacy-policy-container mt-16">
            <h1 className="Mobile:text-[1.7rem] about-sub-cont">Terms & Conditions</h1>
            <p>Last Updated: 28/07/23</p>
            
            <p>Welcome to Princeous Clothing. These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of our website, mobile applications, and services (&ldquo;Services&rdquo;). Please read these Terms carefully before using our Services. By accessing or using our Services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our Services.</p>

            <h2 className="mt-4 text-[1.3rem]">Use of Services:</h2>
            <h3 className="mt-2">a. Eligibility:</h3>
            <ul><li>You must be at least 18 years old to use our Services. If you are under 18, you may only use our Services with the involvement and consent of a parent or guardian.</li></ul>

            <h3 className="mt-2">b. Account Information:</h3>
            <ul><li>You may need to create an account to access certain features of our Services. You are responsible for providing accurate and complete information during the registration process. Ensure that your account credentials (username and password) are kept confidential and not shared with others. You are solely responsible for any activity that occurs under your account.</li></ul>

            <h3 className="mt-2">c. Prohibited Activities:</h3>
            <ul><li>You agree not to use our Services for any illegal, unauthorized, or prohibited purpose. This includes, but is not limited to, engaging in fraudulent activities, violating intellectual property rights, spamming, or conducting any harmful actions that may compromise the integrity of our Services.</li></ul>

            <h2 className="mt-4 text-[1.3rem]">Product Information:</h2>
            <h3 className="mt-2">a. Product Descriptions:</h3>
            <ul><li>We strive to provide accurate and detailed information about our products. However, we do not warrant that product descriptions or any other content on our website are error-free, complete, or current. We reserve the right to modify product information, including prices, at any time without prior notice.</li></ul>

            <h3 className="mt-2">b. Availability:</h3>
            <ul><li>Product availability is subject to change and may vary depending on demand and inventory. We are not liable for any lack of availability or delays in delivery.</li></ul>

            <h2 className="mt-4 text-[1.3rem]">Ordering and Payments:</h2>
            <h3 className="mt-2">a. Order Acceptance:</h3>
            <ul><li>All orders placed through our Services are subject to acceptance. We reserve the right to refuse or cancel any order for any reason, including but not limited to inaccuracies in product information, pricing errors, or suspicion of fraudulent activity.</li></ul>

            <h3 className="mt-2">b. Payment:</h3>
            <ul><li>All payments made through our Services are processed securely. We accept various payment methods, and you agree to provide accurate payment information. You are responsible for any additional fees or charges imposed by your payment provider.</li></ul>

            <h2 className="mt-4 text-[1.3rem]">Shipping and Returns:</h2>
            <h3 className="mt-2">a. Shipping:</h3>
            <ul><li>We will make reasonable efforts to deliver your orders within the estimated timeframe. However, shipping times may vary based on your location and other factors beyond our control.</li></ul>
            <h3 className="mt-2">b. Returns and Exchanges:</h3>
            <ul><li>Please refer to our separate &ldquo;Return and Exchange Policy&rdquo; for information about returning or exchanging products purchased through our Services.</li></ul>


            <h2 className="mt-4 text-[1.3rem]">Intellectual Property:</h2>
            <h3 className="mt-2">a. Ownership:</h3>
            <ul><li>All content, trademarks, logos, and intellectual property displayed on our Services are the property of Princeous Clothing or its licensors. You may not use, reproduce, modify, or distribute our intellectual property without our explicit permission.</li></ul>

            <h2 className="mt-4 text-[1.3rem]">Limitation of Liability:</h2>
            <h3 className="mt-2">a. Disclaimer of Warranties:</h3>
            <ul><li>Our Services are provided on an &ldquo;as is&ldquo; and &ldquo;as available&ldquo; basis. We make no warranties, express or implied, regarding the accuracy, reliability, or availability of our Services. We disclaim all warranties and conditions, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
</li></ul>

<h3 className="mt-2">b. Limitation of Liability:</h3>
<ul><li>Princeous Clothing shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our Services or any products purchased through our Services.</li></ul>

<h2 className="mt-4 text-[1.3rem]">Indemnification:</h2>
<p>You agree to indemnify and hold Princeous Clothing and its affiliates, officers, employees, and agents harmless from any claims, losses, damages, liabilities, and expenses (including attorneys fees) arising out of or in connection with your use of our Services or violation of these Terms.</p>

<h2 className="mt-4 text-[1.3rem]">Modifications to Terms:</h2>
<p>We reserve the right to modify or update these Terms at any time without prior notice. Any changes will be effective immediately upon posting the revised Terms on our website. Your continued use of our Services after such modifications will constitute your acceptance of the updated Terms.</p>

<h2 className="mt-4 text-[1.3rem]">Governing Law:</h2>
<p>These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflicts of law principles.</p>

<h2 className="mt-4 text-[1.3rem]">Contact Us:</h2>
<p>If you have any questions or concerns regarding these Terms or our Services, please contact us at <Link to="mailto:yourwebdevprince@gmail.com" className='text-blue-500'>yourwebdevprince@gmail.com</Link>.

By using our Services, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.</p>





        </div>
        </div>
    );
};
export default TermsAndConditions;
