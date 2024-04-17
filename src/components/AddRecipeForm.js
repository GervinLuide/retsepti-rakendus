import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddRecipeForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // Validation and submission logic
    const newRecipe = { title, description };
    onSubmit(newRecipe);
    setTitle('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Recipe Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Recipe Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
        style={styles.input}
        multiline
      />
      <Button title="Add Recipe" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
  },
});

export default AddRecipeForm;
