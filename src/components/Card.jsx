import React from "react";

const Card = ({ user }) => {
  return (
    <div className="card">
      <img src={user.picture} alt="user" />
      <p className="user-name">{user.name}</p>
      <p>Age: {user.age} y.o</p>
      <p>Gender: {user.gender}</p>
      <p>Balance: {user.balance}</p>
    </div>
  );
};

export default Card;
