import { View, Text } from 'react-native';
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import AssessmentScreen from './screens/AssessmentScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddScoreScreen from './screens/AddScoreScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const screenOptions = {
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,

  }
}
const TabBarIcon = ({ name, color, size }) => {
  return <Icon name={name} size={size} color={color} />;
};

const App = () => {
  
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        options={{ headerShown: false }}
      >
        {() => (
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
              name="Assessments"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <TabBarIcon name="home" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="SkillChart"
              component={AssessmentScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <TabBarIcon name="bar-chart" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        )}
      </Stack.Screen>
      <Stack.Screen
        name="Other"
        component={AddScoreScreen}
        options={{ headerShown: false }} // Hide the header for this screen
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App