import {ITopicWithLessons, IState} from "../../../constants/interfaces";
import axios from "../../../axios";

export const getLessonsByTopicId = async (
    set: (partial: Partial<IState>) => void,
    get: () => IState,
    topicId: string
): Promise<ITopicWithLessons | void> => {

    try {
        const response = await axios.get<ITopicWithLessons>(
            `/lesson/topic/${topicId}`,
        );
        return response.data
    } catch (error: any) {
        console.log(error)
    }
};
