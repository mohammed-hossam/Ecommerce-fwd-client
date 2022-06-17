import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Button, Divider } from "@mui/material";
import QtyComponents from "./QtyComponents";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../Store/cartSlice";
import { useSelector } from "react-redux";
import { IMAGEPATH } from "../helper/const";

export default function ItemCard(props) {

  const isAdded = useSelector((state) =>
    state.cart.find((item) => item.id === props.item._id)
  );

  const dispatch = useDispatch();
  const item = props.item;
  const rate = item.rating;
  
  const handleAdd = () => {
    item.qty = 1;
    dispatch(addItem(item));
  };

  return (
    <Card raised={true} sx={{ maxWidth: 250, height: 1 }}>
      <Link to={`/item/:${item._id}`}>
        <CardMedia
          component="img"
          height="194"
          image={`${IMAGEPATH}${item.images[0]}`}
          alt={item.name}
        />
        <CardContent>
          <Typography align="center" fontSize={14} fontWeight="bold">
            {item.category}
          </Typography>
          <Typography fontSize={18} fontWeight={500}>
            {item.name.length > 15
              ? `${item.name.slice(0, 15)}...`
              : item.name}
          </Typography>
          <Typography component="legend">
            <span style={{ verticalAlign: "top" }}>Rate :</span>{" "}
            <Rating name="read-only" value={rate} readOnly />
          </Typography>
          <Typography variant="h5" fontWeight={600} color="#4141e1">
            Price :{item.price} $
          </Typography>
        </CardContent>
      </Link>
      <Divider />

      <CardActions disableSpacing sx={{ padding: 2 }}>
        {isAdded ? (
          <QtyComponents item={item}/>
        ) : (
          <Button
            onClick={handleAdd}
            variant="contained"
            size="medium"
            style={{ borderRadius: "50px", margin: "0 auto" }}
          >
            Add To Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

/*
Ahmed Saeed10:21 PM
_id: string,
name: string,
price: number,
quantity: integer,
category: string,
description: string,
rating: integer

*/
