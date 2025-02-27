import {ILessonWithTopic, IState} from "../../../constants/interfaces";
import axios from "../../../axios";

export const getLessonsByCourseId = async (
    set: (partial: Partial<IState>) => void,
    get: () => IState,
    courseId: string
): Promise<ILessonWithTopic[] | void> => {

    try {
        const response = await axios.get<ILessonWithTopic[]>(
            `/lesson/course/${courseId}`,
        );
        return response.data
    } catch (error: any) {
        console.log(error)
    }
};
