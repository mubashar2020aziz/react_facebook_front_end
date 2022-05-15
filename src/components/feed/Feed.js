import React from 'react';
import Post from '../post/Post';
import Share from '../share/Share';

import './feed.css';

const Feed = () => {
  return (
    <React.Fragment>
      <div className="feed">
        <div className="feedWrapper">
          <Share />
          <Post />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Feed;
