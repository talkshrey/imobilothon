import React, { useEffect, useState, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import "./Book.css";
import EvStationIcon from "@mui/icons-material/EvStation";
import { useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
import logo from "../../assets/images/LPlogo.png";
import { Button } from "@mui/material";
import { Slider } from "@material-ui/core";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

function Book() {
  const location = useLocation();
  var num = location.pathname.split("/")[2];
  const [booking, setBooking] = useState({
    station: "",
    capacity: "",
    duration: "",
    start_time: "",
    end_time: "",
    date: "",
    plug: "",
  });

  const [open, setOpen] = useState(false);
  const anchorRef = useRef("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // function handleClick() {
  //   console.log(charger[selectedIndex].id)
  //   setBooking({ ...booking, plug:  });
  // };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 15,
      label: "15",
    },
    {
      value: 30,
      label: "30",
    },
    {
      value: 45,
      label: "45",
    },
  ];

  // checking available plugs
  const [timings, setTimings] = useState([]);
  const [charger, setCharger] = useState([
    {
      id: 0,
      station_name: {
        id: 0,
        city: "",
        active_status: "",
        location: "",
        phone_no: "",
        star_rating: "",
        station_name: "",
        working_hours: "",
        photos: "",
      },
      charger_type: "",
      charging_rate: "",
      charging_speed: "",
    },
  ]);

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${localStorage.getItem("token")}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    fetch(
      `http://localhost:8000/slot/?station=${num}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setCharger(result);
      })
      .catch((error) => console.log("error", error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setBooking({ ...booking, [name]: value ? value : "" });
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    var formdata = new FormData();
    formdata.append("date", booking.date);
    formdata.append("duration", booking.duration);
    formdata.append("plug", charger[selectedIndex].id);

    var requestOptions2 = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    await fetch("http://localhost:8000/slot/", requestOptions2)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.slots.slice(2, -2).split("', '"));
        setTimings(result.slots.slice(2, -2).split("', '"));
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <img
        src={logo}
        alt="cover-img"
        style={{
          marginTop: "25px",
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "50px",
        }}
      />
      <div className="BookContent">
        <Grid container className="BookContainerGrid">
          <div className="circle">
            <EvStationIcon className="EVIcon" />
          </div>
          <Grid item className="BookingInfoOuterGrid">
            <Grid container className="BookingDetailsGrid">
              <Grid item className="BookingDetailsGridItem">
                <p className="BookingInfo">
                  <b>Station Name : </b>
                  {location.state.name}
                </p>
                <p className="BookingInfo">
                  <b>Address : </b>
                  {location.state.address}
                </p>
                <p className="BookingInfo">
                  <b>Phone Number : </b>
                  {location.state.number}
                </p>
              </Grid>
              <Grid item>
                <div className="priceDiv">
                  <h2>
                    {" "}
                    &#8377;{" "}
                    {charger[selectedIndex].charging_rate *
                      charger[selectedIndex].charging_speed *
                      booking.duration *
                      booking.capacity}
                  </h2>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className="BookingFormOuterDiv">
            <h2 style={{ textAlign: "left" }}>Details : </h2>
            <Grid container className="BookingFormInnerDiv">
              <Grid container justifyContent="center" alignItems="center">
                <Grid item md={6} sm={12} style={{ textAlign: "center" }}>
                  <TextField
                    margin="normal"
                    required
                    id="outlined-required"
                    value={booking.date}
                    onChange={handleChange}
                    name="date"
                    type="Date"
                    className="textField"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  sm={12}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <h3 className="duration">Duration &nbsp;</h3>
                  <ButtonGroup variant="outlined" margin="normal" size="large">
                    <Button
                      name="duration"
                      onClick={() => setBooking({ ...booking, duration: "1" })}
                      className="duration_button"
                      id="duration_button_left"
                    >
                      1h
                    </Button>
                    <Button
                      name="duration"
                      onClick={() => setBooking({ ...booking, duration: "2" })}
                      className="duration_button"
                      id="duration_button_center"
                    >
                      2h
                    </Button>
                    <Button
                      name="duration"
                      onClick={() => setBooking({ ...booking, duration: "3" })}
                      className="duration_button"
                      id="duration_button_right"
                    >
                      3h
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
              <Grid container className="textFieldContainer">
                <Grid item md={6} sm={12} style={{ textAlign: "center" }}>
                  <Box sx={{ marginInline: "15%" }}>
                    <h3 className="duration">
                      {" "}
                      Capacity &nbsp;{" "}
                      {booking.capacity ? booking.capacity : "0"} kW{" "}
                    </h3>
                    <Slider
                      onChange={(e, value) =>
                        setBooking({ ...booking, capacity: value })
                      }
                      step={15}
                      name="capacity"
                      marks={marks}
                      max={45}
                    />
                  </Box>
                </Grid>
                <Grid item md={6} sm={12} style={{ textAlign: "center" }}>
                  <React.Fragment>
                    <ButtonGroup
                      variant="outlined"
                      ref={anchorRef}
                      aria-label="split button"
                    >
                      <h3 className="duration"> Charger no. </h3>
                      <Button>
                        {charger[selectedIndex].charger_type +
                          ` ${selectedIndex + 1}`}
                      </Button>
                      <Button
                        size="small"
                        aria-controls={open ? "split-button-menu" : ""}
                        aria-expanded={open ? "true" : ""}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleToggle}
                      >
                        <ArrowDropDownIcon />
                      </Button>
                    </ButtonGroup>
                    <Popper
                      open={open}
                      anchorEl={anchorRef.current}
                      role={""}
                      transition
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === "bottom"
                                ? "center top"
                                : "center bottom",
                          }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList id="split-button-menu">
                                {charger.map((option, index) => (
                                  <MenuItem
                                    key={index}
                                    selected={index === selectedIndex}
                                    onClick={(event) =>
                                      handleMenuItemClick(event, index)
                                    }
                                  >
                                    Charger no. {index + 1}
                                  </MenuItem>
                                ))}
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </React.Fragment>
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="flex-end"
                style={{ padding: "2% 5%" }}
              >
                <Button
                  className="main_bt"
                  style={{ textAlign: "left" }}
                  onClick={handleBooking}
                >
                  Find Slots
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className="BookingFormPaymentMethod">
            <h2 style={{ textAlign: "left" }}>Slots Available : </h2>
            <Grid container spacing={2}>
              {timings
                ? timings.map((time, index) => {
                    return (
                      <Grid key={index} item md={3} sm={12} style={{ textAlign: "center" }}>
                        <Button className="main_bt">{time}</Button>
                      </Grid>
                    );
                  })
                : null}
            </Grid>
          </Grid>

          <Grid item className="BookingFormConfirmReview">
            <h3 style={{ textAlign: "left" }} onClick={handleBooking}>
              Confirm Booking
            </h3>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Book;
