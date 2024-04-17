import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
// import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

function ItemCard({itemPic, itemName, itemMRP, itemDiscount, itemSalesPrice}) {
  return (
    <Card sx={{ maxWidth: 345, textAlign: "left" }}>
      <CardMedia
        component="img"
        height="194"
        image={itemPic[0]}
        alt="Paella dish"
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          {itemName}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
                  MRP: ₹<span style={{ textDecoration: "line-through" }}>{itemMRP}</span> {itemSalesPrice}{" "}
        </Typography>

        <Typography variant="caption" color="error">
          -{itemDiscount}%
        </Typography>
        <Typography variant="caption">Inclusive of all taxes</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">
          Add to Cart
        </Button>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ItemCard;
