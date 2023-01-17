import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "./reducers/counterReducer";
import userReducer from "./reducers/userReducer";

/**
 * description :- rootReducer with combination of local reducers
 * created_at  :- 17/01/2023 11:06:44
 */
const rootReducer = combineReducers({
    counterReducer,
    userReducer,
});

/**
 * description :- persist config
 * created_at  :- 17/01/2023 11:07:17
 */
const persistConfig = {
    key: "root",
    version: 1,
    storage,
    /* if you do not want to persist this part of the state */
    // blacklist: ['counterReducer'],
};

/**
 * description :- persistReducer
 * created_at  :- 17/01/2023 11:07:27
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * description :- export store , persistor
 * created_at  :- 17/01/2023 11:07:34
 */
let store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
let persistor = persistStore(store);

export { store, persistor };
