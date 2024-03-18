import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import jsonData from '../data/data.json';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card, Title } from 'react-native-paper';

const AssessmentSectionScreen = ({ route }) => {
  const { standard, sample, weekKey } = route.params;
  const { sounds, letters } = jsonData[standard][sample][weekKey];
  const navigation = useNavigation();

  const handleCardPress = (type) => {
    navigation.navigate('QuizPage', {
      type,
      data: type === 'sounds' ? sounds : letters,
      standard,
      sample,
      weekKey
    });
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleCardPress('sounds')}>
        <Card style={styles.cardContainer}>
          <Card.Content>
            <Title>Sounds</Title>
          </Card.Content>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleCardPress('letters')}>
        <Card style={styles.cardContainer}>
          <Card.Content>
            <Title>Letters</Title>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export default AssessmentSectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  cardContainer: {
    marginTop: 10
  }
});