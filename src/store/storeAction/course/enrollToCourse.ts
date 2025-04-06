import {ICourse, IRequestEnrollment, IState} from "../../../constants/interfaces";
import axios from "../../../axios";
import { AuthonticationCatcher } from "../../../feature/authonticationCatcher";

export const enrollToCourse = async (
    set: (partial: Partial<IState>) => void,
    get: () => IState,
    courseId: number,
    organizationId: number
): Promise<IRequestEnrollment | void> => {

    try {
        const {token} = get();
        const response = await axios.post<IRequestEnrollment>(
            "/enroll-to-course", {
                course_id: courseId,
                organization_id: organizationId
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
