import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type TitleProps = {
  titleText: string;
};

const Title: React.FC<TitleProps> = ({titleText}) => {
  return (
    <View>
      <Text style={styles.title}>{titleText}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    textAlign: 'left',
    color: 'black',
    fontWeight: '700',
    marginBottom: 50,
    marginTop: 20,
  },
});
