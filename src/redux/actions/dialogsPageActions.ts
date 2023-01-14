import {NewMessageType} from '../../AppTypes';

export type CreateMessageActionType = {
  type: 'CREATE-MESSAGE'
  payload: NewMessageType
}

export const createMessageAC = ({userID, message}: NewMessageType): CreateMessageActionType => {
  return {type: 'CREATE-MESSAGE', payload: {userID, message}};
};
