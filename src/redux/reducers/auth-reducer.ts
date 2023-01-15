import { ActionTypes } from './../actions/appActions';
import { AuthDataType } from './../../AppTypes';

type InitialStateType = {
    authData: AuthDataType | Record<string, never>
    isAuth: boolean
}

const InitialState: InitialStateType = {
    authData: {
        id: null,
        email: '',
        login: ''
    },    
    isAuth: false
};

export const authReducer = (state: InitialStateType = InitialState, action: ActionTypes) => {
    switch (action.type) {
        case 'SET-AUTH-DATA':
            return (
                { ...state, authData: {...action.payload}, isAuth: true }
            );
        case 'DELETE-AUTH-DATA':
            return({
                ...state,
                authData: {},
                isAuth: false
            });
        default:
            return state;
    }
};
