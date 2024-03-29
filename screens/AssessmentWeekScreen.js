import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import jsonData from '../data/data.json'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card, Title } from 'react-native-paper';

const AssessmentWeekScreen = ({ route }) => {
  const { standard, sample } = route.params;
  const navigation = useNavigation();
  const weeks = Object.keys(jsonData[standard][sample]);

  const handleWeekPress = (weekKey) => {
    navigation.navigate('TeacherInputScreen', {
      standard,
      sample,
      weekKey,
      sections: jsonData[standard][sample][weekKey],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`${standard} ${sample}`}</Text>
      {weeks.map(weekKey => (
        <TouchableOpacity
          key={weekKey}
          onPress={() => handleWeekPress(weekKey)}
        >
          <Card style={styles.cardContainer}>
            <Card.Content>
              <Title>{weekKey}</Title>
            </Card.Content>
          </Card>
        
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default AssessmentWeekScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  cardContainer: {
    marginTop: 10
  },
  title: {
    fontSize: 18,
  }
})