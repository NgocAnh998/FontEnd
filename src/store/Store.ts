import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
import storage from "redux-persist/es/storage";

import ProductListSlice from "./slice/ProductListSlice";
import WishlistSlice from "./slice/WishlistSlice";
import CartSlice from "./slice/CartSlice";

const rootReducer = combineReducers({
    products: ProductListSlice,
    wishlist: WishlistSlice,
    cart: CartSlice
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["wishlist", "cart"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;