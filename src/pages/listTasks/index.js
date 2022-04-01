import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList, Text, Pressable } from "react-native";
import api from "axios";

import Icon from "react-native-vector-icons/AntDesign";
import { styles } from "./style";

import { Collapse } from "../../components/collapse";

export const ListTasks = ({ navigation }) => {
  const [listTasks, setListTasks] = useState([]);

  useEffect(() => {
    api.get("http://192.168.1.5:3002/api/tasks").then((response) => {
      const dataOrder = response.data.sort((a, b) => {
        let x = new Date(a.createdAt).getTime();
        let y = new Date(b.createdAt).getTime();
        return y - x;
      });
      setListTasks(dataOrder);
    }).catch(error => {
      console.log('erro aqui', error)
    })
  }, []);

  const renderItem = ({ item }) => (
    <Collapse
      key={item.id}
      title={item.title}
      date={item.createdAt}
      children={item}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.listStyle}
        data={listTasks}
        renderItem={renderItem}
      />
      <Pressable
        onPress={() => navigation.navigate("NewTask")}
        style={styles.addNewTaskButton}
      >
        <Icon name="plus" color="#fff" size={25} />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("ListVideo")}
        style={styles.buttonRedirect}
      >
        <Text style={styles.titleButton}>LISTA DE VIDEOS</Text>
      </Pressable>
    </SafeAreaView>
  );
};
