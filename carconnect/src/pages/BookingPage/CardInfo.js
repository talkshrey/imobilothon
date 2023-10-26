import "./CardInfo.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CardInfo(props) {
	
  const navigate = useNavigate();
  return (
    <Card className="card_grid">
      <CardMedia
        className="card_media"
        component="img"
        image={props.img}
        alt={props.name}
        border="5px  #1F2128"
        // border radius = "50px"
      />
      <CardContent className="card_content">
        <Typography
          variant="body2"
          color="text.secondary"
          className="st_name"
          sx={{ paddingTop: "4px" }}
        >
          Station Name : {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="address">
          Address : {props.address}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          className="workinghours"
        >
          Working Hours : {props.workinghours}
        </Typography>
      </CardContent>
      <div className="star_rating">
        <div>
          <Rating
            name="simple-controlled"
            value={props.value}
            style={{ color: "#69FFF1", textAlign: "center", paddingTop: "5px" }}
          />
        </div>
      </div>
      <CardActions className="buttons">
        <Button
          className="rate_button"
          onClick={() => {
            navigate("/review");
          }}
          component="span"
          sx={{
            border: 1,
            borderColor: "#69FFF1",
            color: "#69FFF1",
            display: "flex",
            flexGrow: 1,
            "&:hover": {
              backgroundColor: "#69FFF1",
              color: "black",
              fontWeight: "bolder",
              border: 1,
            },
          }}
        >
          Rate
        </Button>
        <Link
          to={`/booking/${props.id}`}
          state={{
            name: props.name,
            address: props.address,
            number: props.number,
          }}
          className="book_button"
          sx={{
            border: 1,
            borderColor: "#69FFF1",
            color: "#69FFF1",
            display: "flex",
            flexGrow: 1,
            "&:hover": {
              backgroundColor: "#69FFF1",
              color: "black",
              fontWeight: "bolder",
              border: 1,
            },
          }}
        >
          BOOK
        </Link>
      </CardActions>
    </Card>
  );
}
