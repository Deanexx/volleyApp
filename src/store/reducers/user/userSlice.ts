import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userModel } from "../../../models/userModel"

const initialState: userModel = {
    name: "",
    _id: "",
}

const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<userModel>) => {
            state = action.payload
        }
    }
})

export default userSlice.reducer;
export const { setUser } = userSlice.actions;