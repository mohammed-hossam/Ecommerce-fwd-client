import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarouselComp from "../Components/CarouselComp";
import Item from "../Components/Item";
import Spinner from "../Components/Spinner";

const ItemPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [catLoading, setCatLoading] = useState(true);

  const [error, setError] = useState(null);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id.substring(1)}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((item) => {
        console.log(item);
        setItem(item);
        setLoading(false);
        setError(null);
        fetchItemsByCat(item.category);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        setItem(null);
      });
  }, []);

  const fetchItemsByCat = (category) => {
    console.log(
      "running fetchItemsByCat",
      `https://fakestoreapi.com/products/category/${category}`
    );

    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((items) => {
        setItems(items.filter((item) => item.id !== parseInt(id.substring(1))));
        setCatLoading(false);
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        //setError(err);
        setCatLoading(false);
        setItems(null);
      });
  };

  return (
    <>
      <Box sx={{ width: "100%", height: "150px", my: "10px" }}></Box>
      {loading ? (
        <Spinner />
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <>
          <Item item={item} />
          {catLoading ? (
            <Spinner />
          ) : (
            <div style={{ margin: "0 20px" }}>
              <Box component="h3">Related Products</Box>
              <CarouselComp list={items} />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ItemPage;
