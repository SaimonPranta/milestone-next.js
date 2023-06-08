"use client";

import Nav from "@/components/Header/Nav";
import { addUser, deleteUser } from "@/redux/slices/userSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./user.module.css";

const Page = () => {
  const [input, setInput] = useState({});
  const dispatch = useDispatch()
  const users = useSelector((state) => state.user.data);

  const handleInput = (e) => {
    const currentInput = { ...input };
    const name = e.target.name;
    const value = e.target.value;

    currentInput[name] = value;
    setInput(currentInput);
  };

  return (
    <div>
      <Nav />
      <div className={styles.add_user}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={handleInput}
            value={input.name ? input.name : ""}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="text"
            name="age"
            onChange={handleInput}
            value={input.name ? input.age : ""}
          />
        </div>
        <div>
          <label>Score</label>
          <input
            type="text"
            name="score"
            onChange={handleInput}
            value={input.name ? input.score : ""}
          />
        </div>
        <div>
          <button onClick={() => dispatch(addUser(input))}>Sumbit</button>
        </div>
      </div>
      <div>
        <div className={styles.user_container}>
          {users?.length > 0 &&
            users.map((user) => {
              console.log(user);
              return (
                <div key={user.id}>
                  <h6>Name: {user.name}</h6>
                  <p>Age: {user.age} years old</p>
                  <p>Score: {user.score} points</p>
                  <button onClick={() => dispatch(deleteUser(user.id))}>
                    Delete
                  </button>
                </div>
              );
            })}
          {users.length < 1 && (
            <div>
              <h2>You have no user yet, Please add some user.</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
