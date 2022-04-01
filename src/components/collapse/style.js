import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemList: {
    width: "100%",
    minHeight: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    borderRadius: 7,
    shadowRadius: 10,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowColor: "#999999",
  },

  headCollapse: {
    height: 40,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  titleItemList: {
    color: "#444444",
    fontWeight: "bold",
  },

  dateStyle: {
    padding: 5,
    backgroundColor: "#FF1493",
    color: "#fff",
    borderRadius: 5,
    marginLeft: "auto",
    marginRight: 20,
  },
});
