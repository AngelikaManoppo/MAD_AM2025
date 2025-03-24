import React from 'react';
import {StyleSheet, View} from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.RedContainer}></View>
      <View style={styles.GreenContainer}></View>
      <View style={styles.BlueContainer}></View>
    </View>
  );
};
export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', //mengatur arah komponen kemana
    justifyContent: 'center', //tergantung column/row atau main axis
    alignItems: 'center', //tengahnya yang jadi axis
  },

  RedContainer: {
    backgroundColor: '#FF968A',
    height: 100,
    width: 100,
  },

  GreenContainer: {
    backgroundColor: '#97C1A9',
    height: 100,
    width: 100,
  },

  BlueContainer: {
    backgroundColor: '#55CBDB',
    height: 100,
    width: 100,
  },
});
