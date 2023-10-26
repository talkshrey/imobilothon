import React, { useEffect, useState } from "react";
import landingScreenImg from "../../assets/images/landing.png";
import "./Landing.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

function Landing() {
  const [station, setStation] = useState([
    {
      id: "",
      station_name: "",
      address: "",
      number: "",
    },
  ]);

  const [search, setSearch] = useState([
    {
      id: "",
      station_name: "",
      address: "",
      number: "",
    },
  ]);

  const [input, setInput] = useState("");

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${localStorage.getItem("token")}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    fetch("https://findmyplug.herokuapp.com/station", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setStation(result);
      })
      .catch((error) => console.log("error", error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="landingContainer">
      <div className="landingImg">
        <div className="overlay">
          <img
            src={landingScreenImg}
            className="landingScreenImg"
            alt="cover"
          />
        </div>
      </div>
      <div className="SearchBar">
        <form className="searchForm">
          <Paper
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Locate nearby charging stations.."
              inputProps={{ "aria-label": "Locate nearby charging stations.." }}
              onChange={(event) => {
                console.log(event.target.value);
                setInput(event.target.value);
                setSearch(
                  station.filter((station) =>
                    station.station_name
                      .toLowerCase()
                      .startsWith(event.target.value)
                  )
                );
              }}
              value={input}
            />

            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          {search.map((item, index) => (
            <div key={index} style={{margin:"0 3px"}} className="paper">
              <Link
                to={`/booking/${item.id}`}
                state={{
                  name: item.station_name,
                  address: item.location,
                  number: item.phone_no,
                }}
                className="link"
              >
                {item.station_name}
              </Link>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default Landing;
