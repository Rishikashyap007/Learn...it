// import { configureStore } from "@reduxjs/toolkit";
// import CartReducer from "../Features/CartSlice.js";

// export const store = configureStore({
//     reducer:{
//         Cart:CartReducer
//     }
// })

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import CartReducer from "../Features/CartSlice.js";
import { combineReducers } from "redux";

// Combine your reducers
const rootReducer = combineReducers({
  Cart: CartReducer,
});

// Configuring persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['Cart'] // Specify which reducers you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuring the store
export const store = configureStore({
  reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
});

export const persistor = persistStore(store);
