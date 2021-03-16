import React, { useState } from "react";
import ReactDOM from "react-dom";

function fetchUser() {
  const url = "https://reqres.in/api/users/3";
  return fetch(url)
    .then((res) => res.json())
    .then((res) => res.data);
}

function User(props) {
  return (
    <div className="User">
      <ul>
        <li>First Name: {props.first_name}</li>
        <li>Last Name: {props.last_name}</li>
        <li>E: {props.email}</li>
      </ul>
    </div>
  );
}

function App() {
  const [user, setUser] = useState([]);
  return (
    <div className="App">
      <h1>User Details</h1>
      <button
        onClick={() => {
          fetchUser().then((user) => {
            setUser(user);
          });
        }}
      >
        Get user
      </button>
      <User {...user} />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
