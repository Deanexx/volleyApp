import { AppDispatch } from "../../store";
import Cookies from 'js-cookie';

import instance from "../../../server";

import { setUser } from "./userSlice";
import { userModel } from "../../../models/userModel";

export const loginUser = (userName?: string) => async (dispatch: AppDispatch) => {
    let user: userModel | null = null;

        // if we pass value, then we loging in manually

    if (userName) {
        const { data } : { 
            data: 
                    { 
                        data: userModel, 
                        status: string
                    }
                } = await instance.post("/user/login", { name: userName })
        if ( data.status === "sucess" )
            user = data.data ;
    }
        // othervise we loggining once app starts 
    else {
        let test: any = Cookies.get("user");
        console.log(test);
        // user = Cookies.get("user");
    }
    if (user)
        dispatch(setUser(user))
}