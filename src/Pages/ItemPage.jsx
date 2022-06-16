import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Components/Item";
import Spinner from "../Components/Spinner";
import CarouselComp from "../Components/CarouselComp";
import CustomerReview from "../Components/CustomerReview";

const ItemPage = (props) => {
  
  const id = useParams().id.substring(1);

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [items, setItems] = useState(null);
  const [catLoading, setCatLoading] = useState(true);

  useEffect(() => {
     
    console.log("useEffect");
    fetch(`https://e-shop-udacity-13.herokuapp.com/product/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((item) => {
        setItem(item);
        setLoading(false);
        setError(null);
        fetchCategory(item.category);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        setItem(null);
        
      });
  }, [id]);

  const fetchCategory = (category) => {
    fetch(`https://e-shop-udacity-13.herokuapp.com/product/active?category=${category}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((items) => {
        setItems(items.filter((item) => item._id !== parseInt(id)));
        setCatLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setCatLoading(false);
        setItems(null);
      });
  };



  return (
    <Stack>
      {loading ? (
        <Spinner />
      ) : error ? (
        <div>{error.message}</div>
      ) : (
        <>
        <Item item={item} />
        <CustomerReview />
        </>
      )}
      {catLoading ? (
        <Spinner />
      ) : error ? (
        <div>{error.message}</div>
      ) : (
        <>
          <h2 style={{ padding: "0 20px" }}>Related Products</h2>
          <CarouselComp list={items} />
        </>
      )}

    </Stack>
  );
};

export default ItemPage;
