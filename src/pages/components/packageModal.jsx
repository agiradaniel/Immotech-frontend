import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from '../../assets/closebutton.png'

function PackageModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [phoneNumber, setPhoneNumber] = useState(null);

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{backgroundColor:"#EF6332", color:"white", border:"none",height:"33px",width:"90px", borderRadius:"5px", margin:"auto"}}>
        Buy
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{backgroundColor: "#EF6332", height:"200px", color:"white"}}>
            <img src={CloseButton} style={{position:"absolute", top:"20px", right:"20px", width:"18px", height:"18px", cursor:"pointer"}} onClick={handleClose}/>
          <Modal.Title style={{textAlign:"center", margin:"auto"}}>{props.title}<br/> @ {props.amount}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:"#D9D9D9", textAlign:"center"}}>
            <ul style={{listStyleType: "square"}}>
                <li>Enter your <b>phone number</b> <b>below</b> to receive a payment <b>popup</b> on your phone</li>
                <li>Once the popup appears on your phone enter your <b>M-pesa pin</b> and <b>send</b></li>
            </ul>

            <div style={{textAlign: "center", margin:"auto", display:"flex", flexDirection: "column", width:"40%"}}>
                <input placeholder="Enter Phone Number" style={{height:"35px", width:"200px", textAlign:"center"}} onChange={(e)=>setPhoneNumber(e.target.value)}/>
                <button type="submit" className="btn my-4" style={{backgroundColor: "#EF6332", color: "white"}}>Request Popup</button>
            </div>

            <p className="sms">** Once payment is completed you will <strong>immediately</strong> receive your <strong>Voucher Code</strong> via <strong>SMS</strong> to your phone. **</p>
            <p className="sms">** If it happens that you don't receive a voucher within <strong>5 mins</strong> after receiving MPESA confirmation SMS, kindly <a href="sms://+254794911941?body=UNLIMITED%20Wi~Fi:%20Kindly%20assist.%20I%20purchased%20a%20Wi~Fi%20voucher%20at%20..."> <strong> <em> SMS us for assistance </em> </strong> </a> on +254794911941 **</p>

        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default PackageModal;