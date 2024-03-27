import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Card, Paragraph, Title } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import jsonData from "../data/data.json";
import { useNavigation } from "@react-navigation/native";

const AssessmentScreen = () => {
  const navigation = useNavigation();

  const handleCardPress = (standardKey, sampleKey) => {
    navigation.navigate("AssessmentWeek", {
      standard: standardKey,
      sample: sampleKey,
    });
  };

  return (
    <View>
      <Text style={styles.title}>Assessments</Text>
    <ScrollView contentContainerStyle={styles.container}>
      {Object.keys(jsonData).map((standardKey) =>
        Object.keys(jsonData[standardKey]).map((sampleKey) => (
          <TouchableOpacity
            key={`${standardKey}-${sampleKey}`}
            onPress={() => handleCardPress(standardKey, sampleKey)}
          >
            <Card style={styles.cardContainer}>
              <Card.Content>
                <Title>{`${standardKey} `}</Title>
                <Paragraph>{`${sampleKey}`}</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
    </View>
  );
};

export default AssessmentScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  cardContainer: {
    marginTop: 20,
  },
  title: {
    marginTop: 40,
    fontSize: 20, 
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
