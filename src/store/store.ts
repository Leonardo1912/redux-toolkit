import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsAPI } from "../services/postsServices";

const rootReducer = combineReducers({
  [postsAPI.reducerPath]: postsAPI.reducer,
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postsAPI.middleware),
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
