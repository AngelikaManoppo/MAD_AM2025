//1.import component raect-native
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
//2.buat component
// component adalah function yang return jsx
const App = () => {
  return (
    //jsx
    //view as a container
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Basic React Native</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.subTitle}>Core Component in React Native</Text>
      </View>
      <TextInput style={styles.input} placeholder="Enter Your Email" />
      <TextInput
        style={styles.input}
        placeholder="Enter Your Password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <Text style={styles.subTitle2}>Image From URI</Text>
      <Image
        style={styles.img1}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
      <Text style={styles.subTitle2}>Image From Local Directory</Text>
      <Image style={styles.img2} source={require('./assets/bunga3.png')} />
      <Text style={styles.subTitle2}>Image From base64</Text>
      <Image
        style={styles.img3}
        source={{
          uri: 'data:image/jpeg;base64,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',
        }}
      />
    </ScrollView>
  );
};

//3.export component
export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A37E84',
    borderColor: '#EBD7CE',
    borderWidth: 5,
    borderRadius: 20, //untuk ujung container atau border
    marginBottom: 10,
    margin: 30, //border with komponen terluar
    padding: 30, //border with text component(inner)
  },

  container2: {
    backgroundColor: '#EBD7CE',
    borderColor: '#A37E84',
    borderWidth: 5,
    borderRadius: 20,
    margin: 30,
    padding: 30,
  },

  title: {
    fontSize: 35,
    fontWeight: '600',
    color: '#EBD7CE',
    textAlign: 'center',
    //margin bisa juga dilakukan disini
  },

  subTitle: {
    fontSize: 30,
    fontWeight: 500,
    color: '#A37E84',
    textAlign: 'center',
  },
  subTitle2: {
    fontSize: 25,
    fontWeight: 600,
    color: '#A37E84',
    textAlign: 'center',
    marginBottom: 20,
  },
  img1: {
    height: 200 / 2,
    width: 200 / 2,
    marginLeft: 150,
    marginBottom: 20,
  },
  img2: {
    height: 150,
    width: 150,
    marginLeft: 125,
    marginBottom: 20,
  },
  img3: {
    height: 150,
    width: 150,
    marginLeft: 125,
    marginBottom: 20,
  },
  input: {
    borderColor: '#A37E84',
    borderWidth: 3,
    margin: 20,
    //marginHorizontal: 20, margin kiri dan kanan
    fontSize: 20,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#A37E84',
    margin: 15,
    padding: 15,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    color: '#EBD7CE',
  },
});
