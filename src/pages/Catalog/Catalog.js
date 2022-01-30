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
        setError(null);
        setStatus("success")
      })
      .catch((err) => {
        setData(null);
        setError(err);
        setStatus("error");
      });
  },[]);
  console.log(data)

  return <main>
    {status === "initial" || status === 'loading' ?
      <h2>
        Loading...
      </h2>
       :
      data.map((product) => {
        return <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <p>{product.rating}</p>
          <p>{product.photo}</p>
        </div>
      })
    }
  </main>
}