import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import Grid from "@mui/material/Grid";

export default function ItemList(props) {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((items) => {
        setItems(items);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        setItems(null);
      });
  }, []);

  return (
    <div style={{ padding: "100px 10px 0" }}>
      {loading ? (
        <div style={{ fontSize: "36px", textAlign: "center" }}>Loading...</div>
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {items.map((i) => (
            <Grid item xs={2} sm={4} md={4} key={i.id}>
                <ItemCard addItems={props.addItems} item={i} />             
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}
