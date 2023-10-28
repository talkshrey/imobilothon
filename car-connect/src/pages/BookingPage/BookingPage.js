import "./Booking.css";
import { Box } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import CardInfo from "./CardInfo";
import logo from "../../assets/images/LPlogo.png";
import { useEffect, useState } from "react";
import image from "../../assets/images/image.png";
import SimpleBottomNavigation from "../../components/BottomNav/BottomNav";

export default function Booking() {
  const [data, setData] = useState([]);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${localStorage.getItem("token")}`);
    myHeaders.append(
      "Cookie",
      "csrftoken=PNWvCigcHKd01ul44FUpyLNwLbkVZTJNHv4NtPEwmhnedricHyK02uduZJy3Uump"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://localhost:8000/station/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <Box>
      <Grid container spacing={0} className="nav_bar">
        <Grid item xs={12} sm={12} md={2} lg={2} className="bookingpage_logo">
          <img src={logo} alt="logo" />
        </Grid>
        <Grid item xs="auto" sm="auto" md={10} lg={10} />
      </Grid>

      <center>
        <Grid container spacing={2} style={{ width: "90%" }}>
          {data.map((item, index) => (
            <Grid item xs={12} md={4} sm={6} lg={3} key={index}>
              <CardInfo
                name={item.station_name}
                address={item.location}
                number={item.phone_no}
                value={item.star_rating}
                id={item.id}
                img={item.photos ? item.photos.slice(0, -15) : image}
                workinghours={item.working_hours}
              />
            </Grid>
          ))}
        </Grid>
      </center>

      <SimpleBottomNavigation />
    </Box>
  );
}
