import React from "react";

import { Image, Pressable, Text, SafeAreaView } from "react-native";
import { styles } from './style'

export const Initial = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logoStyle}
        source={require("../../assets/logo.png")}
      />
      <Text style={styles.titleInitial}>Bem vindo(a)!</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('lista')}>
        <Text style={styles.buttonTitle}>INICIAR</Text>
      </Pressable>
    </SafeAreaView>
  );
};
