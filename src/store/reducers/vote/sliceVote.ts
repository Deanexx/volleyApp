import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { vote } from "../../../models/voteModel"

interface voteState {
    loading: boolean,
    votes: [] | vote[]
}

const initialState: voteState = {
    loading: false,
    votes : []
}

const voteSlice = createSlice({
    name: "Vote",
    initialState,
    reducers: {
        startFetching: (state) => {
            state.loading = true
        },
        fetchVotes: (state, action: PayloadAction<vote[]>) => {
            state.votes = action.payload
        },
        endFetching: (state) => {
            state.loading = false
        }
    }
})

export default voteSlice.reducer;
export const { startFetching, fetchVotes, endFetching } = voteSlice.actions