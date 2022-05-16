import React from 'react';
import './closefriend.css';
const CloseFriend = ({ user }) => {
  return (
    <div>
      <li className="sidebarFriend">
        <img
          className="sidebarFriendImg"
          src={user.profilePicture}
          alt="person2"
        />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </div>
  );
};
export default CloseFriend;
