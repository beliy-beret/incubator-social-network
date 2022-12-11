type NewMessageType = {
  userID: number
  message: string
}

export type CreateMessageActionType = {
  type: 'CREATE-MESSAGE'
  payload: NewMessageType
}

export const createMessageAC = ({userID, message}: NewMessageType): CreateMessageActionType => {
  return {type: "CREATE-MESSAGE", payload: {userID,message}}
}

export type AddPostActionType = {
  type: 'ADD-POST'
  payload: string
};

export const addPostAC = (text: string): AddPostActionType => {
  return {type: 'ADD-POST', payload: text}
}

export type ActionTypes = AddPostActionType | CreateMessageActionType
