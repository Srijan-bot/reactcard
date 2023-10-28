import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} />
      <div className="card-info">
        <h3>{item.name}</h3>
        <h4>{item.location}</h4>
        <p>{item.speciality}</p>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default Card;
