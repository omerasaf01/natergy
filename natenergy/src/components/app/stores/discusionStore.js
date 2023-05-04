import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apis from "../../configs/api";

export const discusionSlice = createSlice({
    name: "discusion",
    initialState: {
        datas: {
            discusions: [],
            categories: [],
        },
    },
    reducers: {
        getDiscusions: (state, action) => {
            state.datas.discusions = action.payload;
        },

        getCategories: (state, action) => {
            state.datas.categories = action.payload;
        },
    },
});

export const { getDiscusions, getCategories } = discusionSlice.actions;

export default discusionSlice.reducer;
