export interface IState {
    token: string | null,
    modal: IModal,
    alert: IAlert | null,
    setToken: (token: string | null) => void,
    setModal: ({isModalOpen, ModalType}:IModal) => void,
    getAllCourses: () => Promise<ICourse[] | void>,
    getCourseById: (courseId: string) => Promise<ICourse | void>,
    login: (email: string, password: string) => void,
    getMyOrganizations: () => Promise<IOrganization[] | void>,
    getTopicByCourseId: (courseId: string) => Promise<ITopic[] | void>,
    getLessonsByCourseId: (courseId: string) => Promise<ILessonWithTopic[] | void>,
    setAlert: (information: IAlert | null) => void,
    enrollToCourse: (courseId: number) => Promise<IRequestEnrollment | void>
    getEnrolledCourse: (courseId: number) => Promise<IRequestEnrollment | void>
}

export interface IAlert{
    typeAlert: "success" | "error" | "warning",
    message: string,
    code?: number
}

export interface IModal {
    isModalOpen: boolean,
    ModalType: null | 'course-price'
}

export interface ICategory {
    id: number,
    name: string
}

export interface ICourse {
    id: number,
    name: string,
    category_id: number,
    icon_url: string,
    difficulty: string,
    description: string,
    image_url: string,
    "category": ICategory | null
}

export interface IRequestEnrollment {
    course: ICourse,
    course_id: number,
    id: number,
    status: "pending" | "approved" | "rejected",
    user_id: number,
}

export interface ILesson {
    id: number,
    topic_id: number,
    description: string,
    video_url: string,
    source_url: string,
    name: string,
    created_at: string
}

export interface IOrganization {
    id: number,
    name: string,
    description: string,
    address: string,
    phone: string,
    email: string,
    owner_id: 1
}

export interface ITopic {
    id: number,
    course_id: number,
    name: string,
    description: string
}

export interface ILoginResponse {
    access_token: string
}

export interface ILessonWithTopic extends ITopic {
    lessons: ILesson[]
}
