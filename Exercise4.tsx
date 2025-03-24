import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const Exercise4 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.RedContainer}>
        <View style={styles.BlackContainer}></View>
        <View style={styles.YellowContainer}></View>
        <View style={styles.BlackContainer}></View>
      </View>
      <View style={styles.WhiteContainer}>
        <Image
          style={styles.img}
          source={require('./assets/logo-with-motto-3.png')}
        />
      </View>
      <View style={styles.BlueContainer}>
        <View style={styles.BlackContainer}></View>
        <View style={styles.YellowContainer}></View>
        <View style={styles.BlackContainer}></View>
      </View>
    </View>
  );
};
export default Exercise4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  RedContainer: {
    backgroundColor: 'red',
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingRight: 100,
    gap: 10,
  },

  WhiteContainer: {
    backgroundColor: 'white',
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BlueContainer: {
    backgroundColor: 'blue',
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  BlackContainer: {
    backgroundColor: 'black',
    height: 80,
    width: 80,
  },
  YellowContainer: {
    backgroundColor: 'yellow',
    height: 80,
    width: 80,
  },
  img: {
    height: 80,
    width: 350,
  },
});
