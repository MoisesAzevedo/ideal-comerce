export type ModalProps = {
  open: boolean;
  onClose: () => void;
};

export type ConfirmationModalProps = ModalProps & {
  productName?: string;
  onViewCart?: () => void;
  productPrice?: number;
  subtotal?: number;
};
