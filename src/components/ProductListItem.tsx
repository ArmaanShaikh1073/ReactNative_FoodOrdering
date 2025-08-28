import { StyleSheet, Image } from 'react-native';
import { Text, View } from '@/src/components/Themed';
import Colors from '@/src/constants/Colors';
import { Product } from '../types';

const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png';

type ProductListItemProps = {
    product : Product;
}

const ProductListItem = ({product}: ProductListItemProps) => {

  return (
    <View style={styles.container}>
      <Image source={{uri : product.image || defaultPizzaImage}} style={styles.image} />
      <Text style={[styles.title]} > {product.name} </Text>
      <Text style={styles.price}>${product.price} </Text>
    </View>
  );
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    color: '#000',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: '50%',
  },
  title: { 
    fontSize: 18, 
    fontWeight: '600',
    marginVertical: 10,
    color: Colors.light.text
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  }
});
