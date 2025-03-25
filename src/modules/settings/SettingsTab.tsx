import React, { Fragment, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, useTheme } from "react-native-paper";
import { AppHeader } from "~/components";
import { LicenseSlot } from "./slots";

const SlotsList = [
  {
    id: "license",
    title: "Open Source Licenses",
    slot: <LicenseSlot />,
  },
] as const;

type TSelectedType = (typeof SlotsList)[number]["id"];

function SettingsTab() {
  const [selectdSlot, setSelectedSlot] = useState<TSelectedType>("license");
  const [selectedSlotComponent, setSelectedSlotComponent] = useState<React.JSX.Element | null>(
    null,
  );

  const theme = useTheme();

  useEffect(() => {
    /** Delay Update Ui */
    const t = setTimeout(() => {
      setSelectedSlotComponent(SlotsList.find((slot) => slot.id === selectdSlot)?.slot!);
    }, 100);

    return () => clearTimeout(t);
  }, [selectdSlot]);

  return (
    <Fragment>
      <AppHeader title="Settings" />
      <ScrollView stickyHeaderIndices={[0]} contentContainerStyle={styles.contentContainer}>
        <View>
          <ScrollView
            horizontal
            alwaysBounceHorizontal={false}
            alwaysBounceVertical={false}
            bounces={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={[
              styles.settingsOptionsContainer,
              { backgroundColor: theme.colors.elevation.level2 },
            ]}
            contentContainerStyle={[styles.container]}
          >
            {SlotsList.map((slot) => (
              <Button
                mode={slot.id === selectdSlot ? "contained" : "contained-tonal"}
                key={slot.id}
                onPress={() => setSelectedSlot(slot.id)}
              >
                {slot.title}
              </Button>
            ))}
          </ScrollView>
        </View>

        <View style={{ height: 16 }} />

        {selectedSlotComponent}
      </ScrollView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 16,
  },
  settingsOptionsContainer: {
    borderRadius: 16,
  },
  container: {
    padding: 16,
    flexDirection: "row",
    gap: 16,
  },
});

export default SettingsTab;
