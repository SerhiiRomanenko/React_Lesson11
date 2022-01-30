import React, {useEffect, useState} from "react";

export function Catalog() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("initial");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://61f5558a62f1e300173c40f3.mockapi.io/products")
      .then(response => response.json())
      .then(date => {
        setData(date);
      })
      .catch((err) => {
        console.error('Error:', err);
      });
  },[]);
  console.log(data)

  return <main>
    {data !== null ?
      data.map((product) => {
        return <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <p>{product.rating}</p>
          <p>{product.photo}</p>
        </div>
      })
       : <h2>Empty</h2>
    }
  </main>
}