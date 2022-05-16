import React from 'react';
import './right.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayCounter">
          <img className="birthImg" src="/assets/gift.png" alt="giftimg" />
          <span className="birthdayText">
            <span> Pola Faster </span>and 3 other friends have a birthday today
          </span>
          {/* finish birthdaycounter */}
        </div>
        <img src="/assets/ad.png" alt="addimg" className="rightadd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Dubai</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Pakistan</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Married</span>
          </div>
        </div>

        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowImg"
              src="/assets/person/1.jpeg"
              alt="followingimg"
            />
            <span className="rightbarFollowingName">Jone Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img
              className="rightbarFollowImg"
              src="/assets/person/2.jpeg"
              alt="followingimg"
            />
            <span className="rightbarFollowingName">Jone Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img
              className="rightbarFollowImg"
              src="/assets/person/3.jpeg"
              alt="followingimg"
            />
            <span className="rightbarFollowingName">Jone Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img
              className="rightbarFollowImg"
              src="/assets/person/4.jpeg"
              alt="followingimg"
            />
            <span className="rightbarFollowingName">Jone Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img
              className="rightbarFollowImg"
              src="/assets/person/5.jpeg"
              alt="followingimg"
            />
            <span className="rightbarFollowingName">Jone Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img
              className="rightbarFollowImg"
              src="/assets/person/6.jpeg"
              alt="followingimg"
            />
            <span className="rightbarFollowingName">Jone Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="right">
      <div className="rightWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}

        {/* finsih right wrapper */}
      </div>
    </div>
  );
};
export default Rightbar;
