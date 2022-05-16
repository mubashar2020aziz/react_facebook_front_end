import React from 'react';
import './profile.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/right/Rightbar';

const Profile = () => {
  return (
    <React.Fragment>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="/assets/post/3.jpeg"
                alt="post3"
                className="profileCoverImg"
              />
              <img
                src="/assets/person/7.jpeg"
                alt="person7"
                className="profileUserImg"
              />
              {/* profile Cover end */}
            </div>
            {/* prfileInfo start */}

            <div className="profileInfo">
              <h4 className="profileInfoName">Jone koko</h4>
              <span className="profileinfodesc">Hello world</span>
            </div>
            {/* profile Info end */}
            {/* profileTop Cover end */}
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
        {/* end profile */}
      </div>
    </React.Fragment>
  );
};
export default Profile;
