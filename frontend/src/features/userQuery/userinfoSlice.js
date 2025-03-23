import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4} from "uuid"


const initialinfo = {
    userinfo : {
        id : "",
        token : "",
        name : "",
        role : "",
    }
}

export const userinfoSlice = createSlice ( {
    name : "userinfo",
    initialState : initialinfo,
    reducers : {
        getInfo : (state) => {
            const info = JSON.parse(localStorage.getItem("userinfo"));
            if(info?.token) {
                state.userinfo = {
                    ...state.userinfo,
                    id : info.id,
                    name : info.name,
                    token : info.token,
                    role : info.role
                }
            } else {
                state.userinfo = {id : "",name : "", token : "", role : ""};
            }
        }
    }
});

export const { getInfo} = userinfoSlice.actions;
export default userinfoSlice.reducer;