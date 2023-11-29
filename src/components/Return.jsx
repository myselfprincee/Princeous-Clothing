
const Return = () => {
  return (
    <div className="form-container">
        <h1>Place a Return Request</h1>
            <form className='form-contact'>
            <h2>Please fill out these details correctly:</h2>
          <div className='form-container-2'>
            <span className='name-container'>
              <div className='input-container'>
                <input type="text" placeholder="Enter your First Name" name="from_name" className='username-input first-name' autoComplete="off" required />
                <label htmlFor="username" className="labelname">First Name</label>
              </div>
              <div className='input-container'>
                <input type="text" placeholder="Enter your Last Name" name='user_lastname' className='username-input last-name' autoComplete="off" required />
                <label htmlFor="username" className="labelname">Last Name</label>
              </div>
            </span>
            <div className='input-container email-container'>
              <input type="email" placeholder="Enter your Email Address" name="user_email" className='username-input email-address' autoComplete="off" required />
              <label htmlFor="username" className="labelname">Email Address</label>
            </div>
            <div className='phone-container'>
              {/* <Phone name="user_country" /> */}
              <div className='input-container'>
                <input type="tel" placeholder="Enter your 10 Digit Phone Number" className='username-input' name='user_phone' autoComplete="off" required />
                <label htmlFor="username" className="labelname">Phone Number</label>
              </div>
            </div>
            <div className='input-container'>
                <input type="text" placeholder="Entered Address must be the same as Address that the Order was Shipped to." name='user_lastname' className='username-input last-name' autoComplete="off" required />
                <label htmlFor="username" className="labelname">Correct Address</label>
              </div>
            <div className='phone-container'  style={{marginTop:"20px"}}>
            <span className='name-container'>
              <div className='input-container'>
                <input type="tel" placeholder="Ensure the Order ID is Correct" name="from_name" className='username-input first-name' autoComplete="off" required/>
                <label htmlFor="username" className="labelname">Order ID</label>
              </div>
              <div className='input-container'>
                <input type="text" placeholder="Enter your Pincode" name='user_lastname' className='username-input last-name' autoComplete="off" required />
                <label htmlFor="username" className="labelname">Pincode</label>
              </div>
            </span>
            </div>

            <span className='name-container' style={{marginTop:"20px", marginBottom:"20px"}}>
              <div className='input-container'>
                <input type="tel" placeholder="Please Ensure that the Order ID is Correct" name="from_name" className='username-input first-name' autoComplete="off" required/>
                <label htmlFor="username" className="labelname">State</label>
              </div>
              <div className='input-container'>
                <input type="text" placeholder="Enter your Pincode" name='user_lastname' className='username-input last-name' autoComplete="off" required />
                <label htmlFor="username" className="labelname">District</label>
              </div>
            </span>

            <div className='input-container textarea-container'>
              <textarea type="text" placeholder="Enter your messege" className='username-input messege' name='user_messege' autoComplete="off" cols={10} rows={5} />
              <label htmlFor="username" className="labelname">Messege</label>
            </div>
          </div>

          <input type="submit" className='form2-submit' value={"Place Return Request"} />
        </form>
    </div>
  )
}

export default Return