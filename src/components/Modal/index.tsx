import React from 'react';
import {Modal} from "@mui/material";
import {useStore} from "../../store/useStore";
import {IState} from "../../constants/interfaces";
import PricingPlans from "./ModalComponents/PricingPlans";

const ModalContent = () => {
    const setModal = useStore((state: IState) => state.setModal)
    const modal = useStore((state: IState) => state.modal)
    return (
        <Modal
            open={modal.isModalOpen}
            onClose={() => setModal({isModalOpen: false, ModalType: null})}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <PricingPlans/>
        </Modal>
    );
};

export default ModalContent;