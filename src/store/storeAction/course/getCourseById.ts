import {ICourse, IState} from "../../../constants/interfaces";
import axios from "../../../axios";

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
        console.log(error)
    }
};
