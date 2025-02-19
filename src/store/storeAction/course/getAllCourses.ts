import {ICourse, IState} from "../../../constants/interfaces";
import axios from "../../../axios";

export const getAllCourses = async (
    set: (partial: Partial<IState>) => void,
    get: () => IState,
): Promise<ICourse[] | void> => {

    try {
        const response = await axios.get<ICourse[]>(
            "/course",
        );
        return response.data
    } catch (error: any) {
        console.log(error)
    }
};
