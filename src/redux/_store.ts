import {profileReducer} from "./redusers/profile-reducer";
import {dialogsReducer} from "./redusers/dialogs-reducer";

type ObserverType = () => void;

type NewMessageType = {
  userID: number
  message: string
}
type CreateMessageActionType = {
  type: 'CREATE-MESSAGE'
  payload: NewMessageType
}
export const createMessageAC = ({userID, message}: NewMessageType): CreateMessageActionType => {
  return {type: "CREATE-MESSAGE", payload: {userID,message}}
}

type AddPostActionType = {
  type: 'ADD-POST'
  payload: string
};
export const addPostAC = (text: string): AddPostActionType => {
  return {type: 'ADD-POST', payload: text}
}

export type ActionTypes = AddPostActionType | CreateMessageActionType

const _store = {
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
  _callSubscriber() {
    console.log('State was changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer: ObserverType) {
    this._callSubscriber = observer;
  },
  dispatch(action: ActionTypes) {
    profileReducer(this._state.profilePage, action);
    dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber();
  },
}

export type StateType = typeof _store._state;
export type ProfilePageType = typeof _store._state.profilePage;
export type DialogsPageType = typeof _store._state.dialogsPage;
export default _store;
