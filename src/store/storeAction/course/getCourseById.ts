import {ICourse, IState} from "../../../constants/interfaces";
import axios from "../../../axios";
import { AuthonticationCatcher } from "../../../feature/authonticationCatcher";

export const getCourseById = async (
    set: (partial: Partial<IState>) => void,
    get: () => IState,
    courseId: string
): Promise<ICourse | void> => {

    try {
        const response = await axios.get<ICourse>(
            `/course/${courseId}`,
        );
        return response.data
    } catch (error: any) {
        AuthonticationCatcher(error);
        console.log(error)
    }
};
