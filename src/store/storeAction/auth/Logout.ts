import {ILoginResponse, IState} from "../../../constants/interfaces";
import axios from "../../../axios";

export const Logout = async (
    set: (partial: Partial<IState>) => void,
    get: () => IState,
) => {
    try {
        set({token: null})
    } catch (error: any) {
        console.log(error)
    }
};
