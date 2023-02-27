import "../App.css";
import React, { useState } from "react";
import Card from "./Card";
import { userData } from "../userData";

function App() {
  const [users, setUsers] = useState(userData);

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

  return (
    <>
      <form className="search-form" action="">
        <input
          className="search-input"
          type="text"
          placeholder="search"
          onChange={handleUserSearch}
        />

        <select className="search-select" name="" id="">
          <option value="default">default</option>
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </select>
      </form>

      <div className="user-container">
        {users.map((user, index) => (
          <Card user={user} key={index.toString()} />
        ))}
      </div>
    </>
  );
}

export default App;
