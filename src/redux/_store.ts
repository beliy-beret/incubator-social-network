import {rerenderTree} from "../render";

export const _store = {
  _state: {
    profilePage: {
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
      ],
    },
    dialogsPage: {
      dialogs: {
        userList: [
          {id: 1, name: 'Andrey'},
          {id: 2, name: 'Viktor'},
          {id: 3, name: 'Anna'},
          {id: 4, name: 'Niki'},
          {id: 5, name: 'Vlad'}
        ],
        messageList: [
          {userID: 1, messageList: ['Hello !', 'My name is Andrey']},
          {userID: 2, messageList: ['Hello !', 'My name is Viktor']},
          {userID: 3, messageList: ['Hello !', 'My name is Anna']},
          {userID: 4, messageList: ['Hello !', 'My name is Niki']},
          {userID: 5, messageList: ['Hello !', 'My name is Vlad']}
        ]
      },
    },
  },
  getState(){
    return this._state;
  },
}

export function addPost(text: string){
  function createID(){
    return Date.now();
  }
  const newPost = {
    id: createID(),
    title: 'New post',
    body: text
  }
  _store._state.profilePage.posts.push(newPost);
  rerenderTree(_store._state);
}

export type StateType = typeof _store._state;
