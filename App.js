import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { Initial } from './src/pages/initial'
import { ListTasks } from './src/pages/listTasks'
import { FormTask } from './src/pages/formTask'
import { ListVideo } from './src/pages/listVideo'


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="initialScreen">
        <Stack.Screen name="initialScreen" options={{headerShown: false}}  component={Initial} />
        <Stack.Screen name="lista" component={ListTasks} />
        <Stack.Screen name="NewTask"  component={FormTask} />
        <Stack.Screen name="ListVideo"  component={ListVideo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
