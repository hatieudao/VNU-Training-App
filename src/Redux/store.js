import { combineReducers, createStore } from "redux";
import userReducer from "./Reducers/userReducer";



const rootReducer = combineReducers({
    userReducer: userReducer
})

const configureStore = () => createStore(rootReducer)

export default configureStore;