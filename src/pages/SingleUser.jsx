import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import "./SingleUser.css";

function SingleUser() {
  const { userLogin } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(`https://api.github.com/users/${userLogin}`);

      setUser(data.data);
    };

    getData();
  }, [userLogin]);

  return (
    <main className="single-main">
      <div className="main-top">
        <div className="profile-picture">
          <img src={user.avatar_url} />
          <h2>Name: {user.name}</h2>
          <p>Username: {user.login}</p>
        </div>

        <div>
          <div>
            <h1 className="user-hire">
              {user.name}
              <div>{user.type}</div>
              {user.hireable && <div>Hireable</div>}
            </h1>
            <p className="user-bio">{user.bio}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              Visit GitHub Profile
            </a>

            <div className="user-additional-info">
              <div>
                <p>Location</p>
                <h3>{user.location ? user.location : "No location"}</h3>
              </div>

              <div>
                <p>Twitter</p>
                <h3>
                  {user.twitter_username ? user.twitter_username : "No Twitter"}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-center">
        <div className="main-center-content">
          <div>
            <p>Followers</p>
            <h1>{user.followers}</h1>
          </div>
          <FaUserFriends className="main-icon" />
        </div>
        <div className="main-center-content">
          <div>
            <p>Following</p>
            <h1>{user.following}</h1>
          </div>
          <FaUsers className="main-icon" />
        </div>
        <div className="main-center-content">
          <div>
            <p>Public Repos</p>
            <h1>{user.public_repos}</h1>
          </div>
          <FaCodepen className="main-icon" />
        </div>
        <div className="main-center-content">
          <div>
            <p>Public Gists</p>
            <h1>{user.public_gists}</h1>
          </div>
          <FaStore className="main-icon" />
        </div>
      </div>
    </main>
  );
}

export default SingleUser;
