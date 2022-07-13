import React, { Fragment } from "react";
import UserList from "../components/users/UserList";
import UserSearch from "../components/users/UserSearch";

function Home() {
  return (
    <Fragment>
      <UserSearch />
      <UserList />
    </Fragment>
  );
}

export default Home;
