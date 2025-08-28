import { View, Text, Image , StyleSheet} from 'react-native';
import React from 'react';
import { useLocalSearchParams, Stack } from 'expo-router';
import products from '@/assets/data/products';

const ProductDetailsScreen = () => {
  const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png';

  const { id } = useLocalSearchParams<{ id: string }>();

  const product = products.find((p) => p.id.toString() === id);

  if(!product){
    return <Text>Product not found</Text>
  }
  return (
    <View style={Styles.container}>
      {/* Correct usage of Stack.Screen */}
      <Stack.Screen options={{ title: product.name}} />
      <Image 
        source={{uri: product.image || defaultPizzaImage}} 
        style={Styles.image} />
      <Text style={Styles.price}>${product.price}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10
  },
  image: {
    width: '100%',
    aspectRatio: 1
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ProductDetailsScreen;
