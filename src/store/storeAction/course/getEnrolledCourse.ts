import {ICourse, IRequestEnrollment, IState} from "../../../constants/interfaces";
import axios from "../../../axios";
import { AuthonticationCatcher } from "../../../feature/authonticationCatcher";

export const getEnrolledCourse = async (
    set: (partial: Partial<IState>) => void,
    get: () => IState,
    courseId: number,
): Promise<IRequestEnrollment | void> => {

    try {
        const {token} = get();
        const response = await axios.get<IRequestEnrollment>(
            `/enroll-to-course/get-enrollments/${courseId}`, {
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
