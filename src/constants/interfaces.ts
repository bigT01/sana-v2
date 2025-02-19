export interface IState {
    token: string | null,
    setToken: (token: string | null) => void
    modal: IModal,
    setModal: ({isModalOpen, ModalType}:IModal) => void
}

export interface IModal {
    isModalOpen: boolean,
    ModalType: null | 'course-price'
}