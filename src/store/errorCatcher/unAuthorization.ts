import {IState} from "../../constants/interfaces";

export const UnAuthorization = (set: (partial: Partial<IState>) => void): void => {
    set({token: null})
}