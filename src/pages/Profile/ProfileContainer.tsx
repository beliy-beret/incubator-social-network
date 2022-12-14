import React from 'react';
import Profile, {PostType} from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/_store";
import {addPostAC} from "../../redux/actions/actions";

type PropType = {
  postList: Array<PostType>
}

const mapState = (state: RootStateType): PropType => (
  {
    postList: state.profilePage.posts
  }
)
const mapDispatch = {
    addPost:(text: string) => addPostAC(text)
}

const ProfileContainer = connect(mapState, mapDispatch)(Profile);

export default ProfileContainer;
