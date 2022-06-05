import React from "react";
import { useParams } from "react-router-dom";
const ItemPage = () => {
  const id = useParams().id.substring(1);
  console.log(id);
  return <div></div>;
};

export default ItemPage;
