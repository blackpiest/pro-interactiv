import newsReducer from "./newsReducer";

const { combineReducers, createStore } = require("redux");

let reducers = combineReducers ({
    newsData: newsReducer
});


let store = createStore(reducers);

window.store = store;

export default store;
