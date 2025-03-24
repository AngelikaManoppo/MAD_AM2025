import React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Exercise2 = () => {
  return (
    //jsx
    //view as a container
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle1}>Username</Text>
      <TextInput style={styles.input} placeholder="Masukan username anda" />
      <Text style={styles.subtitle2}>Password</Text>
      <TextInput style={styles.input} placeholder="Masukan password anda" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

//3.export component
export default Exercise2;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: 'black',
    textAlign: 'left',
    marginLeft: 30,
    marginTop: 20,
  },
  subtitle1: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 30,
    marginTop: 35,
    marginBottom: 5,
  },

  subtitle2: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 5,
  },

  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 30,
    fontSize: 14,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#FF8000',
    marginHorizontal: 30,
    marginTop: 30,
    padding: 14,
    borderRadius: 10,
  },

  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
});
