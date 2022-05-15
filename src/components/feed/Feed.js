import React from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import { Posts } from '../../dummyData';

import './feed.css';

const Feed = () => {
  return (
    <React.Fragment>
      <div className="feed">
        <div className="feedWrapper">
          <Share />
          {Posts.map((p) => (
            <Post key={p.id} post={p} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Feed;
