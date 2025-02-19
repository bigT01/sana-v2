import {devtools, persist} from "zustand/middleware";
import {create} from "zustand/react";
import {IModal, IState} from "../constants/interfaces";

export const useStore = create<IState>()(
    devtools(
        persist(
            (set, get) => ({
                token: null,
                modal: {isModalOpen: false, ModalType: null},
                setToken: (token) => set({token: token} ,false, 'set-token'),
                setModal: ({isModalOpen, ModalType}: IModal) => set({modal: {isModalOpen, ModalType}}, false, 'set-modal')

            }), {name: "quiz-storage"}
        )
    )
)