import './Review.css'
import { Link } from 'react-router-dom'
import { Rating } from '@mui/material'
import logo from '../../assets/images/LPlogo.png'

export default function Review() {

    return (
        <div>
            <div className="nav-bar">
                <div className="logo"> <img src={logo} alt="logo"/> </div>
                <div className="headers">
                    <Link to="/booking" className="title"> <div> Book </div> </Link>  
                    <Link to="/review" className="title"> <div> Reviews </div> </Link> 
                    <Link to="/payment" className="title"> <div> Payment </div> </Link> 
                </div>
            </div>
            <div className="image"> <img src="https://media.istockphoto.com/photos/concept-image-of-a-magnifying-glass-on-blue-background-with-a-word-picture-id1316134499?b=1&k=20&m=1316134499&s=170667a&w=0&h=DsKKZ2Sc6k7bZQpxZTcHyV7AJqyy-haTXYZlrA2Jy-c=" style={{width:"65%", boxShadow:"8px 8px #69FFF1"}} alt="station"/> </div>
            <center> 
                <form className="rating-form">
                    <div className="details">
                        <p>
                        <b> Station Name </b> : Birla Town <br/>
                        <b> Address </b> : 145, Hamilton Street,North  California <br/>
                        <b> Phone No. </b>: 9375246635 <br/>
                        </p>
                    </div>   
                    <div className="stars">
                        <div> <b> Star rating </b> </div>
                        <div id="star-rate"> <Rating name="size-large" size="large" sx={{color:"#69FFF1"}}/> </div>
                    </div>
                    <div className="feedback">
                        <div> <label> <b> Feedback </b> </label> </div>
                        <div> <input className="input-field"/> </div>
                    </div>
                    <button className="submit"> SUBMIT </button>
                    <div className="rating-footer">
                    <div> Phone </div>
                    <div> Email </div>
                    <div> Address </div>
                </div>
                </form> 
            </center>
        </div>
    )
}