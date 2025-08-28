import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams, Stack } from 'expo-router';

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      {/* Correct usage of Stack.Screen */}
      <Stack.Screen options={{ title: 'Details' }} />
      <Text>ProductDetailsScreen id: {id}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
