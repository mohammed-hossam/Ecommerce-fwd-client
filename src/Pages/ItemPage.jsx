import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Components/Item";
import Spinner from "../Components/Spinner";
import CarouselComp from "../Components/CarouselComp";

const ItemPage = () => {
  const id = useParams().id.substring(1);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [items, setItems] = useState(null);
  const [catLoading, setCatLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
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
  }, []);

  const fetchCategory = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((items) => {
        setItems(items.filter((item) => item.id !== parseInt(id)));
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
        <Item item={item} />
      )}
      {catLoading ? (
        <Spinner />
      ) : error ? (
        <div>{error.message}</div>
      ) : (
        <>
        <h2 style={{padding:"0 20px"}}>Related Products</h2>
          <CarouselComp list={items} />
        </>
      )}
    </Stack>
  );
};

export default ItemPage;
