import {ILoginResponse, IState} from "../../../constants/interfaces";
import axios from "../../../axios";

export const Login = async (
    set: (partial: Partial<IState>) => void,
    get: () => IState,
    email: string,
    password: string
) => {

    try {
        const response = await axios.post<ILoginResponse>(
            `/auth/login`, {
                email,
                password
            });

        set({token: response.data.access_token})
    } catch (error: any) {
        console.log(error)
    }
};
