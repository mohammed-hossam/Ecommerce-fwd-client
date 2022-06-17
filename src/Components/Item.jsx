import React from "react";
import { Stack, Button } from "@mui/material";
import QtyComponents from "./QtyComponents";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Store/cartSlice";
import { IMAGEPATH } from "../helper/const";
import { useState } from "react";

const Item = (props) => {
  const { item } = props;
  const [images, setImages] = useState(
    item.images.filter((img) => img !== null)
  );

  console.log('in first render : ',images);

  const dispatch = useDispatch();
  const isAdded = useSelector((state) =>
    state.cart.find((item) => item.id === props.item._id)
  );
  const handleAdd = () => {
    item.qty = 1;
    dispatch(addItem(item));
  };

  const handleImageClick = (imageIndex) => {
    const fImage = images[imageIndex];
    const newImages = images[0];
    console.log('print image detial :',imageIndex,fImage, newImages);
    setImages(images.filter((img) => img !== fImage && img !== newImages));
    console.log('image after delete targe : ',images);
    setImages((pr) => [...pr, fImage, newImages]);
    console.log('images after modfiy : ',images);
  };

  return (
    <Stack margin={"10px"} direction={"row"}>
      <div className="item">
        <h1>{item.title}</h1>
        <div>
          <span>Category :</span>
          {item.category}
        </div>
        <div>
          <span>Description : </span>
          {item.description}
        </div>
        <div>
          <span>Rate : </span>
          {item.rating}
        </div>
        <div>
          <span>Price : </span>
          {item.price} $
        </div>
        {isAdded ? (
          <QtyComponents item={item} />
        ) : (
          <div>
            <Button
              onClick={handleAdd}
              variant="contained"
              size="medium"
              style={{ borderRadius: "50px", margin: "0 auto" }}
            >
              Add To Cart
            </Button>
          </div>
        )}
      </div>
      <div className="item-image">
        <img
          className="master-image"
          width={"100%"}
          src={`${IMAGEPATH}${images[0]}`}
          alt={item.name}
        />
        {images
          .filter((img) => img !== images[0])
          .map((image, index) => (
            <img
              key={index}
              className="child-image"
              width={"50px"}
              height={"50px"}
              src={`${IMAGEPATH}${image}`}
              alt={image}
              onClick={() => handleImageClick(index)}
            />
          ))}
      </div>
    </Stack>
  );
};

export default Item;
