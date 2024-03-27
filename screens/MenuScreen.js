import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, IconButton } from 'react-native-paper';

const MenuScreen = ({ navigation }) => {
  const menuItems = [
    { title: 'Assessments', screen: 'Main', icon: 'clipboard-check' },
    { title: 'Skill Charts', screen: 'SkillChart', icon: 'chart-bar' },
    { title: 'Groups', screen: 'Groups', icon: 'account-group' },
    { title: 'Settings', screen: 'Settings', icon: 'cog' },
  ];

  const renderMenuItem = ({ item }) => (
    <Card style={styles.card} onPress={() => navigation.navigate(item.screen)}>
      <Card.Content style={styles.cardContent}>
        <IconButton icon={item.icon} size={30} />
        <Title style={styles.title}>{item.title}</Title>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <View key={index}>{renderMenuItem({ item })}</View>
      ))}
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    marginBottom: 20,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
    fontSize: 20,
  },
});
