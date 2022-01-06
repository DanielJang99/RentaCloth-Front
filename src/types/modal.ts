export default interface ModalProps {
    content: React.ReactElement | string;
    isOpen: boolean;
    handleClose: () => void;
}
