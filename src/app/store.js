import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "../features/comment/commentSlice";
import friendReducer from "../features/friend/friendSlice";
import postReducer from "../features/post/postSlice";
import userReducer from "../features/user/userSlice";

const RootReducer = {
  comment: commentReducer,
  post: postReducer,
  friend: friendReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: RootReducer,
});

export default store;
