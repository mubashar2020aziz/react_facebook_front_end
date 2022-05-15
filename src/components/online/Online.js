import React from 'react';
import './online.css';

const Online = ({ user }) => {
  return (
    <div>
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img
            src={user.profilePicture}
            alt="person3"
            className="rightbarProfileImg"
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarusername">{user.username}</span>
      </li>
    </div>
  );
};
export default Online;
