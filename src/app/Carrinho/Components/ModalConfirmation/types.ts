export type ModalProps = {
  open: boolean;
  onClose: () => void;
  panelClassName?: string;
};

export type ConfirmationModalProps = ModalProps & {
  productName?: string;
  onViewCart?: () => void;
  productPrice?: number;
  subtotal?: number;
};
