import React from 'react';
import './Home.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/right/Rightbar';

const Home = () => {
  return (
    <React.Fragment>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </React.Fragment>
  );
};

export default Home;
