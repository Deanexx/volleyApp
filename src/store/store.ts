import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/user/userSlice";
import voteSlice from "./reducers/vote/sliceVote";

const store = configureStore({
    reducer: {
        vote: voteSlice,
        user: userSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;