import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from '../../assets/closebutton.png';
import '../../styles/packagemodal.css'
import axios from 'axios';
import LoadingContext from '../contexts/loadingContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function PackageModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setErrorMessage(""); setPhoneNumber("")
  }
  const handleShow = () => setShow(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const {setLoading} = useContext(LoadingContext);
  
  const tillNumber = "5004507";
  const accountReference = "Unifi-WiFi";
  const description = "Internet Purchase";


  const sendPopupRequest = async(e) => {
   
    e.preventDefault();
    
    if (!phoneNumber.startsWith('254')){
      setErrorMessage("Invalid Mobile Number. Format should be 254*********")
    }else{
      
      try{

        setLoading(true);
    
        //Simulating an api delay
        //await new Promise(resolve => setTimeout(resolve, 50000));
    
        const response = await axios.post('https://unifi.imottechsolutions.com/mpesaapp/service/mpesa/payonline', 
        { PaybillNo: tillNumber, Amount: props.amount, PhoneNumber: phoneNumber, AccountReference: accountReference, Description: description },
        );
      
        setLoading(false)

        toast.success("Notification sent to phone. Complete for payment.");

        console.log(response.data.ResultDesc)

      }catch (error) {

        setApiResponse(`Error occurred. Desc: ${error.response?.data?.ResultDesc || 'Unknown error'}`);

        toast.error(`Error occurred. Desc: ${error.response?.data?.ResultDesc || 'Unknown error'}`)

      }

    }
    
  }


  return (
    <>

      <ToastContainer position="top-right" autoClose={6000} />

      
      <Button variant="primary" onClick={handleShow} style={{backgroundColor:"#EF6332", color:"white", border:"none",height:"33px",width:"90px", borderRadius:"5px", margin:"auto"}}>
        Buy
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{backgroundColor: "#EF6332", height:"200px", color:"white"}}>
            <img src={CloseButton} style={{position:"absolute", top:"20px", right:"20px", width:"18px", height:"18px", cursor:"pointer"}} onClick={handleClose}/>
          <Modal.Title style={{textAlign:"center", margin:"auto"}}>{props.title}<br/> @ KES {props.amount}/=</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:"#D9D9D9", textAlign:"center"}}>
            <ul style={{listStyleType: "square"}}>
                <li>Enter your <b>phone number</b> <b>below</b> to receive a payment <b>popup</b> on your phone</li>
                <li>Once the popup appears on your phone enter your <b>M-pesa pin</b> and <b>send</b></li>
            </ul>

            <form className='modalinputs'>
                <input type="text" placeholder="Mobile No (254*********):" style={{height:"35px", textAlign:"center"}} onChange={(e)=>setPhoneNumber(e.target.value)} autoComplete="off"/><br/>
                <button onClick={sendPopupRequest} type="submit" className="btn mx-auto mb-3" style={{backgroundColor: "#EF6332", color: "white"}}>Request Popup</button>
            </form>

            <p style={{color:"red", fontWeight:"bolder"}}>{errorMessage}</p>

            <p className="sms">** Once payment is completed you will <strong>immediately</strong> receive your <strong>Voucher Code</strong> via <strong>SMS</strong> to your phone. **</p>
            <p className="sms">** If it happens that you don't receive a voucher within <strong>5 mins</strong> after receiving MPESA confirmation SMS, kindly <a href="sms://+254794911941?body=UNLIMITED%20Wi~Fi:%20Kindly%20assist.%20I%20purchased%20a%20Wi~Fi%20voucher%20at%20..."> <strong> <em> SMS us for assistance </em> </strong> </a> on +254794911941 **</p>

        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default PackageModal;