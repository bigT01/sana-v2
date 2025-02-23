export interface IState {
    token: string | null,
    setToken: (token: string | null) => void
    modal: IModal,
    setModal: ({isModalOpen, ModalType}:IModal) => void
    getAllCourses: () => Promise<ICourse[] | void>
    getCourseById: (courseId: string) => Promise<ICourse | void>,
    login: (email: string, password: string) => void
    getMyOrganizations: () => Promise<IOrganization[] | void>
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

export interface IOrganization {
    id: number,
    name: string,
    description: string,
    address: string,
    phone: string,
    email: string,
    owner_id: 1
}

export interface ILoginResponse {
    access_token: string
}
