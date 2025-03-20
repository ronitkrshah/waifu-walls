import { ForwardedRef, forwardRef, PropsWithChildren, useImperativeHandle, useState } from "react";
import { Dialog, Portal } from "react-native-paper";

export type DialogModalRef = {
  show(): void;
  hide(): void;
};

type TProps = {
  dismissable?: boolean;
  onDismiss?(): void;
} & PropsWithChildren;

function DialogModal(
  { children, dismissable, onDismiss }: TProps,
  ref: ForwardedRef<DialogModalRef>,
) {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    show() {
      setVisible(true);
    },
    hide() {
      setVisible(false);
    },
  }));

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss} dismissable={dismissable}>
        {children}
      </Dialog>
    </Portal>
  );
}

export default forwardRef(DialogModal);
