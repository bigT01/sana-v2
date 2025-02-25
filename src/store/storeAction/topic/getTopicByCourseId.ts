import {IState, ITopic} from "../../../constants/interfaces";
import axios from "../../../axios";
import {ErrorCatcher} from "../../errorCatcher";

export const getTopicByCourseId = async (
    set: (partial: Partial<IState>) => void,
    get: () => IState,
    courseId: string
): Promise<ITopic[] | void> => {
    const {token} = get()
    try {
        const response = await axios.get<ITopic[]>(
            `/topic/course/${courseId}`,
            {headers: {Authorization: `Bearer ${token}`}},
        );
        return response.data
    } catch (error: any) {
        ErrorCatcher(error, set)
    }
};
