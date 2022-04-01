import React, { useEffect, useState } from "react";
import DatePicker from "react-native-datepicker";
import api from "axios"

import { SafeAreaView, TextInput, Pressable, Text } from "react-native";
import { styles } from "./style";

export const FormTask = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [dateSend, setDateSend] = useState()

  useEffect(() => {
    let dateForm = new Date(date);
    setDateSend(dateForm)
  }, [date]);


  const dataNewTask = {
    title: title,
    description_task: description,
    date_task: dateSend,
  };

  const saveNewTask = () => {
    api
      .post("http://192.168.1.5:3002/api/tasks", dataNewTask)
      .then((response) => {
        navigation.navigate("lista")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        onChangeText={setTitle}
        value={title}
        placeholder="titulo da atividade"
      />
      <TextInput
        style={styles.inputStyle}
        onChangeText={setDescription}
        value={description}
        maxLength={255}
        placeholder="descrição da atividade"
      />

      <DatePicker
        mode="date"
        onDateChange={setDate}
        style={styles.dataPickerStyle}
        format="DD/MM/YYYY"
        date={date}
      />

      <Pressable style={styles.buttonSend} onPress={saveNewTask}>
        <Text style={styles.titleButton}>CRIAR</Text>
      </Pressable>
    </SafeAreaView>
  );
};
