
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IUserState } from '../reducers/UserReducer';

export enum UserActionTypes {
    LOG_IN = 'LOG_IN',
}

export interface IUserAnyAction {
    type: UserActionTypes.LOG_IN;
    key: string;
    value: string;
}

export type UserActions = IUserAnyAction;

export const UpdateUser: ActionCreator<ThunkAction<Promise<any>, IUserState, null, IUserAnyAction>> = (key, value) => {
    return async (dispatch: Dispatch) => {
        try {
            // Your logic here
            dispatch({
                type: UserActionTypes.LOG_IN,
                key,
                value
            })
        } catch (err) {
            console.error(err);
        }
    };
};