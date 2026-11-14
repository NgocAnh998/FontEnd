import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'

import storage from './storage'
import uiReducer from './uiSlice'
import productReducer from './productSlice'
import wishlistReducer from './wishlistSlice'

const rootReducer = combineReducers({
    ui: uiReducer,
    products: productReducer,
    wishlist: wishlistReducer,
})

// Chỉ lưu yêu thích và trạng thái UI; bộ lọc sản phẩm không lưu lại
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['ui', 'wishlist'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
