import React from 'react';
import './right.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

const Rightbar = () => {
  return (
    <React.Fragment>
      <div className="right">
        <div className="rightWrapper">
          <div className="birthdayCounter">
            <img className="birthImg" src="/assets/gift.png" alt="giftimg" />
            <span className="birthdayText">
              <span> Pola Faster </span>and 3 other friends have a birthday
              today
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

          {/* finsih right wrapper */}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Rightbar;
