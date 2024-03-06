import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { initDatabase } from './data/db';
import AddScoreScreen from './screens/AddScoreScreen';
import ViewScoresScreen from './screens/ViewScoreScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  React.useEffect(() => {
    initDatabase();
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddScore">
        <Stack.Screen name="AddScore" component={AddScoreScreen} options={{ title: 'Add Score' }} />
        <Stack.Screen name="ViewScores" component={ViewScoresScreen} options={{ title: 'View Scores' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
