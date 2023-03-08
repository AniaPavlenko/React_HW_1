import "../App.css";
import React, { useState } from "react";
import Card from "./Card";
import { userData } from "../userData";
import Modal from "./Modal";

function App() {
  const [users, setUsers] = useState(userData);
  const [isShownModal, setIsShownModal] = useState(false);
  const [modalCard, setModalCard] = useState(null);
  const [filter, setFilter] = useState({
    name: "",
    sort: "default",
  });

  const sortByAge = () => {
    const ageAsc = [...userData].sort((a, b) => a.age - b.age);
    const ageDesc = [...userData].sort((a, b) => b.age - a.age);

    const sortUser = filter.sort === "asc" ? ageAsc : ageDesc;
    return sortUser;
  };

  const handleSortedByAge = (event) => {
    const sortedUserd = sortByAge(event.value);
    setFilter(sortedUserd);
  };

  const filterUsers = (name) => {
    const nameToLowerCase = name.toLowerCase();
    return userData.filter((user) =>
      user.name.toLowerCase().includes(nameToLowerCase)
    );
  };

  const handleUserSearch = (event) => {
    const filteredUsers = filterUsers(event.target.value);
    setUsers(filteredUsers);
  };
  const handleShowModal = (user) => {
    setIsShownModal(true);
    setModalCard(user);
  };

  const handleCloseModal = () => {
    setIsShownModal(false);
    setModalCard(null);
  };

  return (
    <>
      {isShownModal && (
        <Modal handleCloseModal={handleCloseModal} user={modalCard} />
      )}
      <form className="search-form" action="">
        <input
          className="search-input"
          type="text"
          placeholder="search"
          onChange={handleUserSearch}
        />

        <select
          className="search-select"
          name=""
          id=""
          onChange={handleSortedByAge}
        >
          <option value="default">default</option>
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </select>
      </form>

      <div className="user-container">
        {users.map((user, index) => (
          <Card
            user={user}
            key={index.toString()}
            handleShowModal={() => handleShowModal(user)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
