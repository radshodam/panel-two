import React, { useEffect, useState } from "react";
const ProductManegment = () => {
  const [products, setProducts] =
    useState<{ id: number; title: string; price: number | undefined }[]>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setProducts(result));
  }, []);
  products?.map((item)=>{
    return(
      <>
      <h1>{item.id}</h1>
      <h1>{item.title}</h1>
      <h1>{item.price}</h1>
      </>
    )
  })
};
export default ProductManegment;
