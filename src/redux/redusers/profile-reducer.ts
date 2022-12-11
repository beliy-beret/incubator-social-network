import {ActionTypes, ProfilePageType} from "../_store";

export const profileReducer = (state: ProfilePageType, action: ActionTypes) => {
  switch (action.type) {
    case 'ADD-POST':
      const ID = Date.now();
      const newPost = {
        id: ID,
        title: 'New post',
        body: action.payload
      }
      state.posts.push(newPost);
      return;
    default:
      return state;
  }
}
