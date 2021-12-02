import { applyMiddleware, combineReducers, createStore, Store, compose } from 'redux';
import thunk from 'redux-thunk';
import { BasicReducer, IBasicState } from '../reducers/BasicReducer';

// Create an interface for the application state
export interface IAppState {
    user: IBasicState
}

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
    user: BasicReducer
});

export const composeEnhancers =
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {
    const store = createStore(rootReducer, undefined, compose(applyMiddleware(thunk), composeEnhancers()));
    return store;
}