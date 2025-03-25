import { Fragment, useEffect, useRef, useState } from "react";
import { Dimensions, ScrollView, ScrollViewBase, StyleSheet, View } from "react-native";
import { Button, Dialog, Surface, Text, useTheme } from "react-native-paper";
import { DialogModal, DialogModalRef } from "~/components";

const licenseList = [
  {
    name: "Waifu Pics Api",
    licenseType: "ISC",
    copyrightYear: "2020",
    author: "Riku32",
    licenseText: `Copyright 2020 Riku32

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`,
  },
];

export default function LicenseSlot() {
  const [licenceText, setLicenceText] = useState("");
  const theme = useTheme();
  const dialogModalRef = useRef<DialogModalRef>(null);

  function handleShowLicense(license: string) {
    setLicenceText(license);
    dialogModalRef.current?.show();
  }

  return (
    <Fragment>
      {licenseList.map((license) => (
        <Surface key={license.name} style={styles.surface}>
          <View style={styles.headerContainer}>
            <Text variant="titleMedium" style={{ color: theme.colors.primary, flex: 1 }}>
              {license.name}
            </Text>
            <Text variant="titleMedium">{license.copyrightYear} - </Text>
            <Text variant="titleMedium">{license.licenseType}</Text>
          </View>
          <Text variant="labelLarge" numberOfLines={3} style={{ lineHeight: 24 }}>
            {license.licenseText}
          </Text>
          <Button onPress={() => handleShowLicense(license.licenseText)}>Show License</Button>
        </Surface>
      ))}

      <DialogModal ref={dialogModalRef} onDismiss={() => dialogModalRef.current?.hide()}>
        <Dialog.Content>
          <ScrollView style={{ maxHeight: Dimensions.get("window").height * 0.5 }}>
            <Text style={{ lineHeight: 28 }} variant="bodyMedium">
              {licenceText}
            </Text>
          </ScrollView>
        </Dialog.Content>
      </DialogModal>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  surface: {
    padding: 16,
    borderRadius: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
