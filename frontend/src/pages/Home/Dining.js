import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import bowl1 from "../../images/home/dining/bowl1.jpg";
import GradeIcon from "@mui/icons-material/Grade";
import { diningData } from "../../Data";
import ItemCard from "../../components/ItemCard";
import  Grid  from "@mui/material/Grid";

function Dining() {
  console.log(diningData);
  return (
    <>
      
      {diningData.map((data) => (
        <Grid xs ={12}  md ={6} lg ={4}>
        <ItemCard
          itemPic={data.itemPic[0]}c
          itemName={data.itemName}
          itemMRP={data.itemMRP}
          itemDiscount={data.itemDiscount}
          itemSalesPrice={data.itemSalesPrice}
          />
          </Grid>
      ))}
      {/* {diningData.map((data) => (
        <Card sx={{ maxWidth: 345, textAlign: "left" }}>
          <CardMedia
            component="img"
            height="194"
            image={data.itemPic[0]}
            alt="Paella dish"
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="div">
              {data.itemName}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              MRP: ₹<span style={{ textDecoration: "line-through" }}>500</span>{" "}
              898{" "}
            </Typography>

            <Typography variant="caption" color="error">
              -{data.itemDiscount}%
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
      ))} */}
    </>
  );
}

export default Dining;
