import {ILesson, IState} from "../../../constants/interfaces";
import axios from "../../../axios";

export const getLessonById = async (
    set: (partial: Partial<IState>) => void,
    get: () => IState,
    lessonId: string
): Promise<ILesson | void> => {

    try {
        const response = await axios.get<ILesson>(
            `/lesson/${lessonId}`,
        );
        return response.data
    } catch (error: any) {
        console.log(error)
    }
};
