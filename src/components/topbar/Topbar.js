import React from 'react';
import './topbar.css';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';

const Topbar = () => {
  return (
    <React.Fragment>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">E-Social</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input
              placeholder="search for video,post etc"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src="/assets/person/1.jpeg" className="topbarImg" alt="img-1" />
        </div>
        {/* end container div */}
      </div>

      {/* main div end */}
    </React.Fragment>
  );
};
export default Topbar;
