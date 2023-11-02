import { React, useState } from 'react';
import BackgroundImage from '../assets/background.jpg'
import PackageCards from './components/packageCards';
import PackageModal from './components/packageModal';
import "../styles/home.css"

const Home = () => {

  const [customAmount, setCustomAmount] = useState("");
  const [voucher, setVoucher] = useState("");

  return (
    <div style={{backgroundImage: `url(${BackgroundImage})`, backgroundSize: "cover", height:"100vh", width:"100%", position:"fixed", overflow:"scroll"}}>
      <h3 style={{color:"#ED462F", textAlign:"center", paddingTop:"20px"}}>UNLIMITED INTERNET</h3>
      
       <div className="maincontainer">
         
        <div className='buypackage'>
          
          <h5 style={{textAlign:"center", paddingTop:"15px"}}>Buy A Package</h5>

          <div className="packagecontainer">

            <PackageCards title="UNLIMITED 2Hrs" amount="KES 20/="/>
            <PackageCards title="UNLIMITED Daily" amount="KES 50/="/>
            <PackageCards title="UNLIMITED 2 Days" amount="KES 100/="/>
            <PackageCards title="UNLIMITED 4 Days" amount="KES 200/="/>
            <PackageCards title="UNLIMITED Weekly" amount="KES 250/="/>
            <PackageCards title="UNLIMITED Monthly" amount="KES 800/="/>
          
          </div> 
         

          <div className="customcard">
              <div style={{width:"100%",padding:"25px 0 5px", textAlign:"center"}}>
              <p style={{color:"white", fontWeight:"bold"}}>Custom Amount</p>
              </div>
              <div style={{width:"100%", backgroundColor:"#DACCC6", borderRadius:"0 0 5px 5px", textAlign:"center", display:"flex", flexDirection:"column", justifyContent:"space-evenly", paddingBottom:"20px"}}>
                <p style={{fontWeight:"bold", marginTop:"15px"}}>We charge KES 1 = 2 minutes for any <br/> Custom Amount</p>
                <input className='custominput' type="text" onChange={(e)=>setCustomAmount(e.target.value)} placeholder='Enter Amount'/>
                <PackageModal title={`KES `+ customAmount} amount="KES 1 for 2 Mins"/>
              </div>
          </div> 

        </div>

        <div className="connectioncontainer">
         
         <div style={{width:"100%", backgroundColor:"#4FA846", borderRadius:"5px 5px 0 0", padding:"15px 0"}}>
          <h3 style={{textAlign:"center", color:"white"}}>Connect To The Internet</h3>
        </div> 

        <div style={{padding:"0 20px"}}>
          <p style={{paddingTop:"20px"}}>** Once payment is completed you will <b>immediately</b> receive your Voucher Code via SMS to your phone. **</p>
          <p >Once you receive your voucher, Input it into the textbox below then click connect</p>
          <input className='voucherinput' type="text" onChange={(e)=> setVoucher(e.target.value)} placeholder='INPUT YOUR VOUCHER CARD HERE'/>
          <button style={{backgroundColor:"#4FA846", color:"white", border:"none",height:"35px",width:"190px", borderRadius:"5px", margin:"20px auto"}}>Connect To Internet</button>
          <p style={{fontWeight:"bold"}}>Please Note</p>
          <p style={{fontWeight:"bold"}}>** Month = 28 Days **</p>
          <p>** If it happens that you don't receive a voucher within <b>5 mins</b> after receiving MPESA confirmation SMS, kindly <a style={{textDecoration:"none", fontWeight:"bold", }} href="sms://+254794911941?body=UNLIMITED%20Wi~Fi:%20Kindly%20assist.%20I%20purchased%20a%20Wi~Fi%20voucher%20at%20...">SMS us for assistance</a> on +254794911941 **</p>
          <p>** <b>DO NOT</b> make Payment from a <b>Till / Paybill</b> or using <b>Bonga points</b> as these will not be processed automatically.**</p>
          <p style={{fontWeight:"bold", color:"red"}}>For any Enquiries, Concerns and/or Feedback, please contact us:</p>
          <a style={{textDecoration:"none"}} href="sms://+254794911941?body=UNLIMITED%20Wi~Fi:%20Kindly%20assist.%20I%20purchased%20a%20Wi~Fi%20voucher%20at%20...">Send Us an SMS</a>
        </div>

        </div>

      </div>  

      <footer className="py-5">
        <div className="container">
            
			<p className="m-0 text-center text-white">Copyright &copy; Imot Spaxx 2023 <br /> <a href="https://www.imottechsolutions.com" target="_blank"> ImotTech Solutions </a></p>
			
        </div>

    </footer>

    </div>
  )
}

export default Home