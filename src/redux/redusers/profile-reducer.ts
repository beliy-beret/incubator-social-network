import {AddPostActionType} from "../actions/actions";

const InitialState = {
  posts: [
    {
      id: 1,
      title: '1st Post',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio explicabo nemo neque officia,' +
        ' rerum temporibus! Adipisci amet consectetur, doloribus et illo iste pariatur perspiciatis quam repudiandae' +
        ' sequi, tempore voluptatum!',
    },
    {
      id: 2,
      title: 'Second Post',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio explicabo nemo neque officia,' +
        ' rerum temporibus! Adipisci amet consectetur, doloribus et illo iste pariatur perspiciatis quam repudiandae' +
        ' sequi, tempore voluptatum!',
    },
    {
      id: 3,
      title: 'Third Post',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio explicabo nemo neque officia,' +
        ' rerum temporibus! Adipisci amet consectetur, doloribus et illo iste pariatur perspiciatis quam repudiandae' +
        ' sequi, tempore voluptatum!',
    },
  ]
}

type InitialStateType = typeof InitialState;

export const profileReducer = (state: InitialStateType = InitialState, action: AddPostActionType) => {
  switch (action.type) {
    case 'ADD-POST':
      const ID = Date.now();
      const newPost = {
        id: ID,
        title: 'New post',
        body: action.payload
      }
      state.posts.push(newPost);
      return state;
    default:
      return state;
  }
}
