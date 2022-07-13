import React from "react";
import { Link } from "react-router-dom";
import "./SingleUser.css";

function SingleUser({ user }) {
  return (
    <div className="single-user">
      <img src={user.avatar_url} className="user-image" alt="User Image" />
      <div>
        <p className="user-name">{user.login}</p>
        <Link to={`/user/${user.login}`} className="user-link">
          Visit Profile
        </Link>
      </div>
    </div>
  );
}

export default SingleUser;
