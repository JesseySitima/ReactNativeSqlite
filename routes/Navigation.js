import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddScoreScreen from '../screens/AddScoreScreen';
import ViewScoresScreen from '../screens/ViewScoreScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddScore">
        <Stack.Screen name="AddScore" component={AddScoreScreen} options={{ title: 'Add Score' }} />
        <Stack.Screen name="ViewScores" component={ViewScoresScreen} options={{ title: 'View Scores' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
