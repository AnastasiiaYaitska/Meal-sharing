import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { normalizeDateTime } from "../../utils/normalizeDate";
import Button from "@mui/material/Button";
import { Img } from "./MealIem.styled";

const MealItem = ({ meal }) => {
  const [expanded, setExpanded] = useState(false);
  const {
    Id,
    Title,
    Price,
    Max_reservations,
    When,
    Total_reservations = Total_reservations === null ? 0 : Total_reservations,
  } = meal;

  const availableSlot = Max_reservations - Total_reservations;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ boxShadow: 3, width: 2 / 2 }}>
      <Img
        src="https://i.pinimg.com/originals/5e/70/67/5e7067c21fdab0ae703533adf3b41958.jpg"
        alt=""
        width={50}
        height="30px"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {Title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {normalizeDateTime(When)}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Price: {Price} kr
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Available reservations: {availableSlot <= 0 ? 0 : availableSlot}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={Id}>Learn More</Link>
      </CardActions>
    </Card>
  );
};

export default MealItem;
