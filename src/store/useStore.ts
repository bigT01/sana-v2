import {devtools, persist} from "zustand/middleware";
import {create} from "zustand/react";
import {IModal, IState} from "../constants/interfaces";
import {getAllCourses} from "./storeAction/course/getAllCourses";
import {getCourseById} from "./storeAction/course/getCourseById";
import {Login} from "./storeAction/auth/Login";
import {getMyOrganizations} from "./storeAction/organization/getMyOrganizations";

export const useStore = create<IState>()(
    devtools(
        persist(
            (set, get) => ({
                token: null,
                modal: {isModalOpen: false, ModalType: null},
                setToken: (token) => set({token: token} ,false, 'set-token'),
                setModal: ({isModalOpen, ModalType}: IModal) => set({modal: {isModalOpen, ModalType}}, false, 'set-modal'),
                getAllCourses: () => getAllCourses(set, get),
                getCourseById: (courseId) => getCourseById(set, get, courseId),
                login: (email, password) => Login(set, get, email, password),
                getMyOrganizations: () => getMyOrganizations(set, get)
            }), {name: "quiz-storage"}
        )
    )
)