import {ICourse, IState} from "../../../constants/interfaces";
import axios from "../../../axios";

export const getCourseByOrganizationId = async (
    set: (partial: Partial<IState>) => void,
    get: () => IState,
    organizationId: string,
): Promise<ICourse[] | void> => {

    try {
        const response = await axios.get<ICourse[]>(
            `/course/organization/${organizationId}`,
        );
        return response.data
    } catch (error: any) {
        console.log(error)
    }
};
