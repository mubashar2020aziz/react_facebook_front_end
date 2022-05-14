import React from 'react';
import Share from '../share/Share';

import './feed.css';

const Feed = () => {
  return (
    <React.Fragment>
      <div className="feed">
        <div className="feedWrapper">
          <Share />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Feed;
