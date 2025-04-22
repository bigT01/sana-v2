import {IRequestEnrollment, IState} from "../../../constants/interfaces";
import axios from "../../../axios";
import { AuthonticationCatcher } from "../../../feature/authonticationCatcher";

export const giveAccessToStudent = async (
    set: (partial: Partial<IState>) => void,
    get: () => IState,
    id: number,
    isAccess: boolean
): Promise<IRequestEnrollment | void> => {

    try {
        const {token} = get();
        const response = await axios.put<IRequestEnrollment>(
            "/enroll-to-course/give-access", {
                id: id,
                isAccess: isAccess
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
        return response.data
    } catch (error: any) {
        AuthonticationCatcher(error)
        console.log(error)
    }
};
