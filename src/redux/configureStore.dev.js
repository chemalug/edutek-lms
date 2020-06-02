import { createStore, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "redux/reducers/root.reducer";

import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: storage,
};

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { persistor, store };

/*export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  return createStore(pReducer, composeEnhancers(applyMiddleware(thunk)));
}

export const persistor = () => persistStore(configureStore);*/
