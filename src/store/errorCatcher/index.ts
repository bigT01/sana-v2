import {IState} from "../../constants/interfaces";
import {UnAuthorization} from "./unAuthorization";

export const ErrorCatcher = (error: any, set: (partial: Partial<IState>) => void): void => {
    switch (error.status){
        case 401:
            UnAuthorization(set)
            break;
        default:
            console.log(error)
    }
}