import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label, color = 'purple', onPress}) => {
  return (
    <TouchableOpacity style={styles.button(color)} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: '#C13DFA',
    padding: 10,
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 25,
  }),
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
