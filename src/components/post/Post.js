import React from 'react';
import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/person/1.jpeg"
              alt="postimg"
            />
            <span className="postUserName">kate</span>
            <span className="postDate">5 mins ago</span>
            {/* post top left finish */}
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
            {/* post top right finish */}
          </div>
        </div>
        <div className="postCenter"></div>
        <div className="postBottom"></div>
        {/* finish postwrapper */}
      </div>
    </div>
  );
};
export default Post;
