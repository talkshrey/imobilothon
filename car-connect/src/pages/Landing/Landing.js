import React, { useEffect } from "react";
import "./Landing.css";
import SimpleBottomNavigation from "../../components/BottomNav/BottomNav";
import PrimarySearchAppBar from "../../components/TopNav/TopNav";
import { Grid, IconButton, Paper, Typography } from "@mui/material";
import ColorToggleButton from "./Mode";
import carimg from "../../assets/images/car.png";
import MediaControlCard from "./Card";
import GearToggleButton from "./Gear";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
import BoltIcon from "@mui/icons-material/Bolt";
import LightModeIcon from "@mui/icons-material/LightMode";
import SpeedCard from "./Speed";
import speedimg from "../../assets/images/speed.png";
import detailimg from "../../assets/images/details.png";

function Landing() {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${localStorage.getItem("token")}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    fetch("http://localhost:8000/station", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PrimarySearchAppBar />
      <div className="landingContainer">
        <Grid container>
          <Grid item xs={6}>
            <Grid container>
              <Grid
                item
                xs={6}
                sx={{
                  paddingBlock: 4,
                  textAlign: "center",
                }}
              >
                <ColorToggleButton />
              </Grid>
              <Grid item xs={6} sx={{ paddingBlock: 4, textAlign: "center" }}>
                <GearToggleButton />
              </Grid>
              <Grid item xs={6}>
                <img src={carimg} alt="carimg" />
              </Grid>
              <Grid item xs={6}>
                <SpeedCard source={detailimg} />
                <SpeedCard source={speedimg} />
                <MediaControlCard />
              </Grid>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  paddingBlock: 1,
                }}
                spacing={2}
              >
                <Grid sx={{ textAlign: "center" }} item xs={2}>
                  <Paper elevation={2}>
                    <IconButton>
                      <BluetoothIcon fontSize="large" />
                    </IconButton>
                    <Typography> Bluetooth </Typography>
                  </Paper>
                </Grid>
                <Grid sx={{ textAlign: "center" }} item xs={2}>
                  <Paper elevation={2}>
                    <IconButton>
                      <AcUnitIcon fontSize="large" />
                    </IconButton>
                    <Typography> Conditioner </Typography>
                  </Paper>
                </Grid>
                <Grid sx={{ textAlign: "center" }} item xs={2}>
                  <Paper elevation={2}>
                    <IconButton>
                      <BoltIcon fontSize="large" />
                    </IconButton>
                    <Typography> Charge </Typography>
                  </Paper>
                </Grid>
                <Grid sx={{ textAlign: "center" }} item xs={2}>
                  <Paper elevation={2}>
                    <IconButton>
                      <LightModeIcon fontSize="large" />
                    </IconButton>
                    <Typography> Car Lights </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30143.81258780415!2d72.8292709322786!3d19.196225527242774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sev%20station%20near%20me!5e0!3m2!1sen!2sin!4v1698647831891!5m2!1sen!2sin"
              height="100%"
              width="99%"
              allowfullscreen="true"
              title="map"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </Grid>
        </Grid>
        <SimpleBottomNavigation />
      </div>
    </>
  );
}

export default Landing;
