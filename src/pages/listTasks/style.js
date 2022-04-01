import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      height: 400,
      backgroundColor: "#fafafa",
      alignItems: "center",
      justifyContent: "center",
    },

    titleButton: {
      color: "#fff",
      fontWeight: "bold",
    },
  
    addNewTaskButton: {
      position: "absolute",
      right: 20,
      bottom: 20,
      padding: 10,
      backgroundColor: "#FF1493",
      borderRadius: 70,
    },

    buttonRedirect: {
      position: "absolute",
      right: 100,
      bottom: 25,
      padding: 10,
      color: "#fff",
      backgroundColor: "#FF1493",
      borderRadius: 10,
    },
  
    listStyle: {
      width: "90%",
      padding: 10,
    },
  });