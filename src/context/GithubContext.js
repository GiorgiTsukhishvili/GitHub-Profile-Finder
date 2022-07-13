import { createContext, useState } from "react";
import axios from "axios";

export const GithubContext = createContext();

export const GithubProvider = (props) => {
  const [users, setUsers] = useState([]);

  const getData = async (term) => {
    const data = await axios.get(
      `https://api.github.com/search/users?q=${term}`
    );

    setUsers(data.data.items);
  };

  return (
    <GithubContext.Provider value={{ users, getData, setUsers }}>
      {props.children}
    </GithubContext.Provider>
  );
};
