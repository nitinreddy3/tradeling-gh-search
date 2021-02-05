import { createStore, applyMiddleware, Store } from 'redux'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore, persistReducer, Persistor } from 'redux-persist'
import logger from 'redux-logger'
import reducer from './rootReducer'

const persistedReducer = persistReducer({
  key: 'root', storage,
}, reducer)
export const store: Store = createStore(persistedReducer, {}, applyMiddleware(logger))
export const persistor: Persistor = persistStore(store)