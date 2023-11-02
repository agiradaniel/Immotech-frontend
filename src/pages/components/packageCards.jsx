import React from 'react'
import PackageModal from './packageModal'
import '../../styles/packagecards.css'

const PackageCards = (props) => {
  return (
    <div>
        

       
            <div className="cardcontainer">
                <div style={{width:"100%", padding:"25px 0 5px", textAlign:"center"}}>
                    <p style={{color:"white", fontWeight:"bold"}}>{props.title}</p>
                </div>
                <div style={{width:"100%", backgroundColor:"#DACCC6", borderRadius:"0 0 5px 5px", textAlign:"center", paddingBottom:"20px"}}>
                    <p style={{fontWeight:"bold", marginTop:"15px"}}>{props.amount}</p>
                    
                   <PackageModal title={props.title} amount={props.amount}/>
                </div>
            </div>

    </div>
  )
}

export default PackageCards