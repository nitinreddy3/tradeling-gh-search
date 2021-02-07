import { createStore, applyMiddleware, Store } from 'redux'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore, persistReducer, Persistor } from 'redux-persist'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './rootReducer'
const middleWare = [];

middleWare.push(thunk)

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});
middleWare.push(loggerMiddleware)

const persistedReducer = persistReducer({
  key: 'root', storage,
}, reducer)
export const store: Store = createStore(persistedReducer, {}, applyMiddleware(...middleWare))
export const persistor: Persistor = persistStore(store)