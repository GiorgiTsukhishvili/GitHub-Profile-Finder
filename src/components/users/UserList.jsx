import React, { useContext } from "react";
import SingleUser from "./SingleUser";
import "./UserList.css";
import { GithubContext } from "../../context/GithubContext";

function UserList() {
  const { users } = useContext(GithubContext);

  return (
    <div className="users-list">
      {users.map((user, i) => {
        return <SingleUser key={i} user={user} />;
      })}
    </div>
  );
}

export default UserList;
