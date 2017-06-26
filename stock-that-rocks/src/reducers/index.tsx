import { combineReducers } from 'redux';

import { Action } from '../actions';
import { Store } from './store';


const initialState: Store.Basic = {
    value: "generalUser",
}

function basic(state: Store.Basic = initialState, action: Action): Store.Basic {
    switch (action.type) {
        case 'CHANGE_PROFILE':
            return { value: action.profile };
        case 'DEFAULT_PROFILE':
            return { value: "generalUser" };
    }

    return state;
}

export const reducers = combineReducers({basic});