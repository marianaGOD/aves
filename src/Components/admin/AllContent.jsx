import React, { useEffect } from "react";

import { gql, useQuery } from "@apollo/client";

const GET_PRODUCTS_QUERY = gql`
  query GetBirds {
    birds {
      id
      price
      race
      title
      images {
        url
      }
    }
  }
`;

export default function AllContent() {
  const { loading, error, data } = useQuery(GET_PRODUCTS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.birds.map(({ id, price, race, title, images, description }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{price}€</p>
          <p>{race}</p>
          {images.map((img) => {
            return (
              <img
                loading="lazy"
                key={img.url}
                src={img.url}
                style={{ maxWidth: "200px" }}
              ></img>
            );
          })}
        </div>
      ))}
    </div>
  );
}
