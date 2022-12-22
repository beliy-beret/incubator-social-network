import React from 'react';
import Post from "./Post/Post";
import {PostType} from "../../../AppTypes";

type ComponentProps = {
  postList: Array<PostType>
}

function UserPosts({postList}: ComponentProps) {
  return (
    <div>
      {postList.map(item => <Post key={item.id} post={item}/>)}
    </div>
  );
}

export default UserPosts;
