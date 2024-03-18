import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Paragraph, Title } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SkillChartScreen = () => {
  const navigation = useNavigation();

  const std1AButton = () => {
    navigation.navigate('Standard1ASkillChart')
  }
  const std1BButton = () => {
    navigation.navigate('Standard1BSkillChar')
  }
  const std2AButton = () => {
    navigation.navigate('Standard2ASkillChart')
  }
  const std2BButton = () => {
    navigation.navigate('Standard2BSkillChart')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={std1AButton}>
        <Card style={styles.cardContainer}>
          <Card.Content>
            <Title>Standard 1 Skill Chart</Title>
            <Paragraph>Sample A</Paragraph>
          </Card.Content>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={std1BButton}>
        <Card style={styles.cardContainer}>
          <Card.Content>
            <Title>Standard 1 Skill Chart</Title>
            <Paragraph>Sample B</Paragraph>
          </Card.Content>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={std2AButton}>
        <Card style={styles.cardContainer}>
          <Card.Content>
            <Title>Standard 2 Skill Chart</Title>
            <Paragraph>Sample A</Paragraph>
          </Card.Content>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={std2BButton}>
        <Card style={styles.cardContainer}>
          <Card.Content>
            <Title>Standard 2 Skill Chart</Title>
            <Paragraph>Sample B</Paragraph>
          </Card.Content>
        </Card>
      </TouchableOpacity>


    </View>
  )
}

export default SkillChartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  cardContainer: {
    marginTop: 20
  }
})