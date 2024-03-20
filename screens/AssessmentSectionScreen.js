import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import jsonData from '../data/data.json';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card, Title } from 'react-native-paper';

const AssessmentSectionScreen = ({ route }) => {
  const { standard, sample, weekKey, sections, studentName } = route.params;
  const navigation = useNavigation();

  const handleSubItemClick = (sectionKey) => {
    navigation.navigate('QuizPage', {
      standard,
      sample,
      weekKey,
      sectionKey,
      studentName,
      sections,
      items: jsonData[standard][sample][weekKey][sectionKey],
    });
  };

  return (
    <View style={styles.container}>
      <Text>{`${standard} ${sample} ${weekKey}`}</Text>
      {Object.keys(sections).map((sectionKey, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleSubItemClick(sectionKey)}
        >
          <Card style={styles.cardContainer}>
            <Card.Content>
              <Title>{sectionKey}</Title>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      ))}
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