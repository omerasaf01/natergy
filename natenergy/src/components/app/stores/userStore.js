import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import apis from "../../configs/api";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userDatas: {
            accessToken: "",
            refreshToken: "",
            email: "",
            password: "",
            name: "",
            surname: "",
            isSuccess: false,
        },
    },
    reducers: {
        login: (state, actions) => {
            state.userDatas.email = actions.payload.email;
            state.userDatas.password = actions.payload.password;
            axios
                .post(
                    apis.auth.login,
                    {
                        email: state.userDatas.email,
                        password: state.userDatas.password,
                    },
                    [
                        {
                            headers: {
                                "content-type": "application/json",
                            },
                        },
                    ]
                )
                .then((response) => {
                    console.log(response);
                    if (response.data.isSuccess == true) {
                        var decodedToken = jwtDecode(response.data.accessToken);
                        localStorage.setItem("Token", JSON.stringify(decodedToken));
                        state = {
                            userDatas: {
                                isSuccess: true,
                                refreshToken: response.data.refreshToken,
                                accessToken: response.data.accessToken,
                            },
                        };
                        localStorage.setItem(
                            "UserAccess",
                            JSON.stringify(state.userDatas)
                        );

                        window.location.replace("/");
                    } else {
                        state.userDatas.isSuccess = false;
                    }
                });
        },
    },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
