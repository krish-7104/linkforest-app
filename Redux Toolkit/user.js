import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {
        name: "",
        username: "",
        email: "",
        image: "",
        uid: ""
    }
};

export const userSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = { ...state.data, ...action.payload };
        }
    }
});

export const { setData } = userSlice.actions;

export default userSlice.reducer;
