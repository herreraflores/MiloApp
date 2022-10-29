import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native' ;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>APPLE.</Text>
      <Image source={{uri: 'https://w7.pngwing.com/pngs/973/255/png-transparent-red-apple-apple-fruit-apple-natural-foods-food-grocery-store-thumbnail.png'}}
       style={{width: 400, height: 400}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#884DFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
