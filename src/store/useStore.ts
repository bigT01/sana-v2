import {devtools, persist} from "zustand/middleware";
import {create} from "zustand/react";
import {IAlert, IModal, IState} from "../constants/interfaces";
import {getAllCourses} from "./storeAction/course/getAllCourses";
import {getCourseById} from "./storeAction/course/getCourseById";
import {Login} from "./storeAction/auth/Login";
import {getMyOrganizations} from "./storeAction/organization/getMyOrganizations";
import {getTopicByCourseId} from "./storeAction/topic/getTopicByCourseId";
import {getLessonsByCourseId} from "./storeAction/lesson/GetLessonsByCourseId";
import { enrollToCourse } from "./storeAction/course/enrollToCourse";
import { getEnrolledCourse } from "./storeAction/course/getEnrolledCourse";
import { Logout } from "./storeAction/auth/Logout";

export const useStore = create<IState>()(
    devtools(
        persist(
            (set, get) => ({
                token: null,
                modal: {isModalOpen: false, ModalType: null},
                alert: null,
                setToken: (token) => set({token: token} ,false, 'set-token'),
                setModal: ({isModalOpen, ModalType}: IModal) => set({modal: {isModalOpen, ModalType}}, false, 'set-modal'),
                getAllCourses: () => getAllCourses(set, get),
                getCourseById: (courseId) => getCourseById(set, get, courseId),
                login: (email, password) => Login(set, get, email, password),
                logout: () => Logout(set, get),
                getMyOrganizations: () => getMyOrganizations(set, get),
                getTopicByCourseId: (courseId) => getTopicByCourseId(set, get, courseId),
                getLessonsByCourseId: (courseId) => getLessonsByCourseId(set, get, courseId),
                setAlert: (information: IAlert | null) => set({alert: information}, false, "set-alert"),
                enrollToCourse: (courseId, organizationId) => enrollToCourse(set, get, courseId, organizationId),
                getEnrolledCourse: (courseId) => getEnrolledCourse(set, get, courseId),
            }), {name: "quiz-storage"}
        )
    )
)