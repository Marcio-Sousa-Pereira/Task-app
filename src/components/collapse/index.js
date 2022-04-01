import React, { useState } from "react";

import IconArrow from "react-native-vector-icons/MaterialIcons";

import { View, Text, Pressable } from "react-native";

import { styles } from "./style";

export const Collapse = ({ title, date, children }) => {
  const [collapseOpen, setCollapseOpen] = useState(false);

  const formatedDate = () => {
    let currentDate = new Date(date);
    let day = currentDate.getDay();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();

    if (day < 9 && month < 9) {
      return `0${day}/0${month}/${year}`;
    }

    if (day < 9) {
      return `0${day}/${month}/${year}`;
    }

    if (month < 9) {
      return `${day}/0${month}/${year}`;
    }
    return `${day}/${month}/${year}`;
  };

  return (
    <View style={styles.itemList}>
      <Pressable
        style={styles.headCollapse}
        onPress={() => setCollapseOpen(!collapseOpen)}
      >
        <Text selectable={false} style={styles.titleItemList}>
          {title}
        </Text>
        <Text selectable={false} style={styles.dateStyle}>
          {formatedDate()}
        </Text>
        {collapseOpen ? (
          <>
            <IconArrow selectable={false} name="arrow-drop-up" size={25} />
          </>
        ) : (
          <IconArrow selectable={false} name="arrow-drop-down" size={25} />
        )}
      </Pressable>
      {collapseOpen && (
        <View>
          <Text>{children.description_task}</Text>
        </View>
      )}
    </View>
  );
};
