import {IProfile, IState} from "../../../constants/interfaces";
import axios from "../../../axios";
import { AuthonticationCatcher } from "../../../feature/authonticationCatcher";

export const getProfile = async (
    set: (partial: Partial<IState>) => void,
    get: () => IState,
) => {

    try {
        const {token} = get();
        const response = await axios.get<IProfile>(
            `/user/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

        return response.data
    } catch (error: any) {
        AuthonticationCatcher(error);
        console.log(error)
    }
};
