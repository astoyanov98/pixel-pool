import { Reducer } from 'redux';
import { BasicActions, BasicActionTypes } from '../actions/BasicActions';

export interface IBasicState {
  userName: String,
  password: String,
  loggedIn: boolean
}

const initialUserState: IBasicState = {
  userName: '',
  password: '',
  loggedIn: false
};

export const BasicReducer: Reducer<IBasicState, BasicActions> = (
  state = initialUserState,
  action
) => {

  switch (action.type) {

    case BasicActionTypes.LOG_IN: {
      return {
        ...state,
        [action.key]: action.value
      };
    }

    default:
      return state;
  }
};