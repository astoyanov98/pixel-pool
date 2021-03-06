
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IBasicState } from '../reducers/BasicReducer';

export enum BasicActionTypes {
    LOG_IN = 'LOG_IN',
}

export interface IBasicAnyAction {
    type: BasicActionTypes.LOG_IN;
    key: string;
    value: string;
}

export type BasicActions = IBasicAnyAction;

export const BasicAction: ActionCreator<ThunkAction<Promise<any>, IBasicState, null, IBasicAnyAction>> = (key, value) => {
    return async (dispatch: Dispatch) => {
        try {
            // Your logic here
            dispatch({
                type: BasicActionTypes.LOG_IN,
                key,
                value
            })
        } catch (err) {
            console.error(err);
        }
    };
};