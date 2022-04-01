import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    height: '100%'
  },

  dataPickerStyle: {
    width: "80%",
    marginVertical: 10
  },

  titleButton: {
    color: "#fff",
    fontWeight: "bold",
  },

  buttonSend: {
    padding: 10,
    backgroundColor: '#FF1493',
    borderRadius: 8,
    width: "80%",
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center'
  },

  inputStyle: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
    marginVertical: 10,
    minHeight: 40,
    width: "80%",
    padding: 5,
    backgroundColor: "#fff",
    shadowRadius: 10,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowColor: "#e5e5e5",
  },
});
