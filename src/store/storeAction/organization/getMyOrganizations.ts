import {IOrganization, IState} from "../../../constants/interfaces";
import axios from "../../../axios";
import {ErrorCatcher} from "../../errorCatcher";

export const getMyOrganizations = async (
    set: (partial: Partial<IState>) => void,
    get: () => IState,
): Promise<IOrganization[] | void> => {
    const {token} = get()
    try {
        const response = await axios.get<IOrganization[]>(
            "/organization-participant/my-organizations",
            {headers: {Authorization: `Bearer ${token}`}},
        );
        return response.data
    } catch (error: any) {
        ErrorCatcher(error, set)
    }
};
