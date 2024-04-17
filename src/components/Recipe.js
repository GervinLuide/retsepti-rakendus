import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Recipe = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {/* Add more fields as needed (ingredients, instructions, etc.) */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
});

export default Recipe;
