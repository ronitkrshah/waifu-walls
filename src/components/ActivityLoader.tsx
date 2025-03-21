import { createContext, Fragment, PropsWithChildren, useContext, useRef, useState } from "react";
import DialogModal, { DialogModalRef } from "./DialogModal";
import { ActivityIndicator, Dialog, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";

type TActivityLoader = {
  present(message: string): void;
  close(): void;
};

const LoaderContext = createContext<TActivityLoader>({} as TActivityLoader);

export function useActivityLoader() {
  return useContext(LoaderContext);
}

export function ActivityLoaderProvider({ children }: PropsWithChildren) {
  const [text, setText] = useState("");
  const modalRef = useRef<DialogModalRef>(null);

  function showModal(text: string) {
    setText(text);
    modalRef.current?.show();
  }

  function hideModal() {
    modalRef.current?.hide();
  }

  return (
    <LoaderContext.Provider value={{ present: showModal, close: hideModal }}>
      {children}
      <DialogModal dismissable={false} ref={modalRef}>
        <Dialog.Content>
          <View style={styles.container}>
            <ActivityIndicator size={"large"} />
            <Text>{text}</Text>
          </View>
        </Dialog.Content>
      </DialogModal>
    </LoaderContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
});
