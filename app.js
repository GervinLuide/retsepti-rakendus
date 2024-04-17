import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RecipeList from './src/components/RecipeList';
import AddRecipeForm from './src/components/AddRecipeForm';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <View style={styles.container}>
      <AddRecipeForm onSubmit={handleAddRecipe} />
      <RecipeList recipes={recipes} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});

export default App;
