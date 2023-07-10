import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function ProductCard({
  id,
  imageurl,
  name,
  description,
  price,
  onAddToCart,
}) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia component="img" height="200" image={imageurl} />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {description}
        </Typography>
        <Typography gutterBottom variant="h5">
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          target="_blank"
          size="small"
          endIcon={<AddCircleIcon />}
          onClick={() => onAddToCart(id)}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
