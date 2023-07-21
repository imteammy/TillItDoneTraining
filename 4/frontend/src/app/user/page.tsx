"use client";
import React, { useState } from "react";
import { CreateUser, UsersT } from "./api";

function UserPage() {
  const [Users, setUsers] = useState<UsersT>({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });
  const submitCreateUser = async (e: any) => {
    e.preventDefault();
    const res = await CreateUser(Users);
    console.log(res);
  };
  const userChange = (e: any) => {
    console.log(Users);
    setUsers({ ...Users, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>User Page</h1>
      <form onSubmit={submitCreateUser}>
        <div>
          <label htmlFor="">Fisrt name</label>
          <input
            onChange={userChange}
            type="text"
            name="firstname"
            id="firstname"
            placeholder="firstname"
          />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input
            onChange={userChange}
            type="text"
            name="Lastname"
            id="Lastname"
            placeholder="Lastname"
          />
        </div>
        <div>
          <label htmlFor="">Username</label>
          <input
            onChange={userChange}
            type="text"
            name="username"
            id="username"
            placeholder="username"
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            onChange={userChange}
            type="email"
            name="email"
            id="email"
            placeholder="email"
          />
        </div>
        <div>
          <label htmlFor="">password</label>
          <input
            onChange={userChange}
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </div>

        <div style={{ margin: "2px" }}>
          <button type="submit">Create User</button>
        </div>
      </form>
    </div>
  );
}

export default UserPage;
