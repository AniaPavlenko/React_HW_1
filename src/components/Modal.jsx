import React from "react";

const Modal = ({ handleCloseModal, user }) => {
  console.log(user);
  return (
    <div className="overlay" onClick={handleCloseModal}>
      <div className="card-modal">
        <h3 className="modal-title">Contact Info</h3>
        <p>Full Name: {user.name}</p>
        <p>Company: {user.company}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Address: {user.address}</p>
      </div>
    </div>
  );
};

export default Modal;
