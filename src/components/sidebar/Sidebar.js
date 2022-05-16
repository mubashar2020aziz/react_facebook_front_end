import React from 'react';
import './sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import CloseFriend from '../closeFriend/CloseFriend';
import { Users } from '../../dummyData';

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="sidebar">
        <div className="sidebarWrapper">
          {/* sidebar list start */}
          <div className="sidebarList">
            <div className="sidebarListItems">
              <RssFeedIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </div>

            <div className="sidebarListItems">
              <ChatIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Chats</span>
            </div>

            <div className="sidebarListItems">
              <OndemandVideoIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Videos</span>
            </div>

            <div className="sidebarListItems">
              <GroupsIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Groups</span>
            </div>

            <div className="sidebarListItems">
              <BookmarkIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Bookmarks</span>
            </div>

            <div className="sidebarListItems">
              <HelpOutlineIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Questions</span>
            </div>

            <div className="sidebarListItems">
              <WorkIcon className="sidebarIcon" />
              <span className="sidebarListItemText">jobs</span>
            </div>

            <div className="sidebarListItems">
              <EventIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Events</span>
            </div>

            <div className="sidebarListItems">
              <SchoolIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Courses</span>
            </div>

            {/* sidebar list end */}
          </div>
          <button className="sidebarbutton">Show More</button>
          <hr className="sidebarhr" />
          <ul className="sidebarFriendList">
            {Users.map((u) => (
              <CloseFriend key={u.id} user={u} />
            ))}
          </ul>
          {/* wrapper end */}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Sidebar;
