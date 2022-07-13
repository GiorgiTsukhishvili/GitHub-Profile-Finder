import { useState, useContext } from "react";
import { BiSearch } from "react-icons/bi";
import "./UserSearch.css";
import { GithubContext } from "../../context/GithubContext";

function UserSearch() {
  const { getData, setUsers } = useContext(GithubContext);

  const [text, setText] = useState("");

  const searchSubmit = (e) => {
    e.preventDefault();

    if (text.length === 0) {
      return;
    }

    getData(text);

    setText("");
  };

  const clear = () => {
    setUsers([]);
  };

  return (
    <div className="user-search">
      <form onSubmit={(e) => searchSubmit(e)}>
        <input
          placeholder="Search for user"
          className="search-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="search-button">
          <BiSearch className="search-icon" />
        </button>
      </form>
      <button className="search-clear" onClick={clear}>
        Clear
      </button>
    </div>
  );
}

export default UserSearch;
