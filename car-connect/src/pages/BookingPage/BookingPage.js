import "./Booking.css";
import { Box } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import CardInfo from "./CardInfo";
import { useEffect, useState } from "react";
import image from "../../assets/images/image.png";
import SimpleBottomNavigation from "../../components/BottomNav/BottomNav";
import PrimarySearchAppBar from "../../components/TopNav/TopNav";

export default function Booking() {
  const [data, setData] = useState([]);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${localStorage.getItem("token")}`);

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
      <PrimarySearchAppBar />
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
