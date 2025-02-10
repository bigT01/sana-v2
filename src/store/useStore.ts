import {devtools, persist} from "zustand/middleware";
import {create} from "zustand/react";
import {IState} from "../constants/interfaces";

export const useStore = create<IState>()(
    devtools(
        persist(
            (set, get) => ({
                token: null,
                setToken: (token) => set({token: token})
            }), {name: "quiz-storage"}
        )
    )
)