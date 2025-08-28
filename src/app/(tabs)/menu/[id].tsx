import { View, Text, Image , StyleSheet, Pressable} from 'react-native';
import React from 'react';
import { useLocalSearchParams, Stack } from 'expo-router';
import products from '@/assets/data/products';
import { useState } from 'react';

const sizes = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
  //const [selectedSize, setSelectedSize] = useState('M');
  const [selectedSize, setSelectedSize] = useState('M');

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

      <Text>Select Size</Text>

      <View style={Styles.sizes}>
          {sizes.map((size) => (
            <Pressable 
            onPress={() => {
              setSelectedSize(size);
            }}
            style={[
              Styles.size, 
              {
                backgroundColor: selectedSize === size ? 'gainsboro' : 'white',
              }
            ]} key={size}>
              <Text style={[Styles.sizeText,
                {
                  color: selectedSize === size ? 'black' : 'gainsboro',
                }
              ]} >{size}</Text>
            </Pressable>
          ))}
      </View>
      

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
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
 size: {
    backgroundColor: 'gainsboro',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: 20,
    fontWeight: 500,
  },
});

export default ProductDetailsScreen;
