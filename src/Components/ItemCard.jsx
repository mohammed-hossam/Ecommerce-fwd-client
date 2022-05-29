import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Rating from "@mui/material/Rating";


export default function ItemCard(props) {
  const item = props.item;
  const rate = item.rating.rate;

  return (
      <Card
        sx={{ maxWidth: 345, height: 1 }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {item.category[0]}
            </Avatar>
          }
          title={item.name}
        />
        <CardContent>
          <Typography component="legend">Rate</Typography>
          <Rating name="read-only" value={rate} readOnly />
        </CardContent>

        <CardMedia
          component="img"
          height="194"
          image={item.image}
          alt={item.name}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to Cart" style={{color:"black"}} onClick={()=>{props.addItems(item.id)}}>
            <AddShoppingCartIcon style={{fontSize:'2.5rem'}}/>
          </IconButton>
        </CardActions>
        <CardContent>
        <Typography variant="h5">Price :{item.price} $</Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          
        </CardContent>
        
      </Card>
    
  );
}
