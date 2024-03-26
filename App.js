
import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import AssessmentScreen from './screens/AssessmentScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddScoreScreen from './screens/AddScoreScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SkillChartScreen from './screens/SkillChartScreen';
import AssessmentWeekScreen from './screens/AssessmentWeekScreen';
import QuizPage from './screens/QuizPage';
import AssessmentSectionScreen from './screens/AssessmentSectionScreen';
import AssessmentScoreScreen from './screens/AssessmentScoreScreen';
import { initializeDatabase } from './data/db';
import AssessmentResults from './screens/AssessmentResults';
import Standard1SampleA from './screens/skillcharts/Standard1SampleA';
import Standard2SampleA from './screens/skillcharts/Standard2SampleA';
import Standard2SampleB from './screens/skillcharts/Standard2SampleB';
import Standard1SampleB from './screens/skillcharts/Standard1SampleB';
import StudentInputScreen from './screens/StudentInputScreen';
import GroupsScreen from './screens/GroupsScreen';
import SettingsScreen from './screens/SettingsScreen';

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
  },
  tabBarLabelStyle: {
    fontSize: 16, // Adjust the font size as needed
  },
}
const TabBarIcon = ({ name, color, size }) => {
  return <Icon name={name} size={size} color={color} />;
};

const App = () => {

  useEffect(() => {
    initializeDatabase(); // Call initializeDatabase when the component mounts
  }, []);
  
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
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <TabBarIcon name="home" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="SkillChart"
              component={SkillChartScreen}
              options={{
                title:'Skill Charts',
                tabBarIcon: ({ color, size }) => (
                  <TabBarIcon name="bar-chart" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Groups"
              component={GroupsScreen}
              options={{
                
                tabBarIcon: ({ color, size }) => (
                  <TabBarIcon name="group" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <TabBarIcon name="cog" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        )}
      </Stack.Screen>
      <Stack.Screen
        name="AddScoreScreen"
        component={AddScoreScreen}
        options={{ headerShown: false }} // Hide the header for this screen
      />
      <Stack.Screen
        name="Assessment"
        component={AssessmentScreen}
        options={{ title: 'Assessments and Remediation' }}
      />
      <Stack.Screen
        name="AssessmentWeek"
        component={AssessmentWeekScreen}
        options={{ title: 'Assessments Week' }}
      />
      <Stack.Screen
        name="AssessmentSection"
        component={AssessmentSectionScreen}
        options={{ title: 'Assessment Section' }}
      />
      <Stack.Screen
        name="QuizPage"
        component={QuizPage}
        options={{ title: 'Assessment' }}
      />
      <Stack.Screen
        name="AsssessmentScore"
        component={AssessmentScoreScreen}
        options={{ title: 'Assessment Score' }}
      />
      <Stack.Screen
        name="Standard1ASkillChart"
        component={Standard1SampleA}
        options={{ title: 'Standard 1 Skill Chart A' }}
      />
      <Stack.Screen
        name="Standard1BSkillChart"
        component={Standard1SampleB}
        options={{ title: 'Standard 1 Skill Chart B' }}
      />
      <Stack.Screen
        name="Standard2ASkillChart"
        component={Standard2SampleA}
        options={{ title: 'Standard 2 Skill Chart A' }}
      />
      <Stack.Screen
        name="Standard2BSkillChart"
        component={Standard2SampleB}
        options={{ title: 'Standard 2 Skill Chart B' }}
      />
      <Stack.Screen
        name='StudentInputScreen'
        component={StudentInputScreen}
        options={{ title: 'Student' }}
      >

      </Stack.Screen>
  
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App