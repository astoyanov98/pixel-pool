import { Reducer } from 'redux';
import { UserActions, UserActionTypes } from '../actions/UserActions';

export interface IUserState {
    userName: String,
    password: String,
    loggedIn: boolean
}

const initialUserState: IUserState = {
    userName: '',
    password: '',
    loggedIn: false
};

export const UserReducer: Reducer<IUserState, UserActions> = (
    state = initialUserState,
    action
) => {

    switch (action.type) {

        case UserActionTypes.LOG_IN: {
            return {
                ...state,
                [action.key]: action.value
            };
        }

        default:
            return state;
    }
};