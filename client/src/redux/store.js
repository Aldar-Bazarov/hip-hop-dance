import { legacy_createStore as createStore} from "redux"; 
// import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    // profilePage: profileReducer,
    // dialogsPage: dialogsReducer,
    // usersPage: usersReducer,
    // auth: authReducer,
    // form: formReducer
});

let store = createStore(reducers);

export default store;