import "./Review.css";
import { Rating } from "@mui/material";
import SimpleBottomNavigation from "../../components/BottomNav/BottomNav";
import PrimarySearchAppBar from "../../components/TopNav/TopNav";
import station from "../../assets/images/landing.png";

export default function Review() {
  return (
    <div>
      <PrimarySearchAppBar />
      <img
        src={station}
        style={{
          width: "25%",
          boxShadow: "8px 8px #69FFF1",
          marginLeft: "55rem",
          marginTop: "2rem"
        }}
        alt="station"
      />
      <center>
        <form className="rating-form">
          <div className="details">
            <p>
              <b> Station Name </b> : Birla Town <br />
              <b> Address </b> : 145, Hamilton Street,North California <br />
              <b> Phone No. </b>: 9375246635 <br />
            </p>
          </div>
          <div className="stars">
            <div>
              <b> Star rating </b>
            </div>
            <div id="star-rate">
              <Rating
                name="size-large"
                size="large"
                sx={{ color: "#69FFF1" }}
              />
            </div>
          </div>
          <div className="feedback">
            <div>
              <label>
                <b> Feedback </b>
              </label>
            </div>
            <div>
              <input className="input-field" />
            </div>
          </div>
          <button className="submit"> SUBMIT </button>
          <div className="rating-footer">
            <div> Phone </div>
            <div> Email </div>
            <div> Address </div>
          </div>
        </form>
      </center>

      <SimpleBottomNavigation />
    </div>
  );
}
