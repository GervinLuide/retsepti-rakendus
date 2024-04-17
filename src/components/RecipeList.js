import React from 'react';
import { FlatList } from 'react-native';
import Recipe from './Recipe';

const RecipeList = ({ recipes }) => {
  return (
    <FlatList
      data={recipes}
      renderItem={({ item }) => <Recipe title={item.title} description={item.description} />}
      keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()} // Updated keyExtractor
    />
  );
};


export default RecipeList;
