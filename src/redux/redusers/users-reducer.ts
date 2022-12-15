import {ActionTypes} from "../actions/actions";

export type UserType = {
  id: number
  fullName: string
  status: string
  location: {
    city: string
    country: string
  }
  isFollow: boolean
}

type InitialStateType = Array<UserType>

const initialState: InitialStateType = [
  {
    id: 1,
    fullName: 'Dmitriy',
    status: 'Boss',
    location: {
      city: 'Minsk',
      country: 'Belarus'
    },
    isFollow: false
  },
  {
    id: 2,
    fullName: 'Andrey',
    status: 'Web Developer',
    location: {
      city: 'Moscow',
      country: 'Russia'
    },
    isFollow: false
  },
  {
    id: 3,
    fullName: 'Bob',
    status: 'Mobile Developer',
    location: {
      city: 'Washington',
      country: 'USA'
    },
    isFollow: false
  }
]

export const usersReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case "TOGGLE-FOLLOW":
      return state.map(user => {
        if(user.id === action.payload){
          return {...user, isFollow: !user.isFollow}
        }
        return user;
      })
    default:
      return state;
  }
}

/*{
  id: 1,
    fullName: 'Dmitriy',
  status: 'Boss',
  location: {
  city: 'Minsk',
    country: 'Belarus'
},
  isFollow: false
},
{
  id: 2,
    fullName: 'Andrey',
  status: 'Web Developer',
  location: {
  city: 'Moscow',
    country: 'Russia'
},
  isFollow: false
},
{
  id: 3,
    fullName: 'Bob',
  status: 'Mobile Developer',
  location: {
  city: 'Washington',
    country: 'USA'
},
  isFollow: false
}*/
