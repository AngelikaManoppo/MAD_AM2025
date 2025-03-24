import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const UserItem = ({user}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: user.avatar}} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>
          <Text style={styles.bold}>{user.last_name}</Text> {user.first_name}
        </Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 35,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'grey',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 20,
    marginLeft: -2,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 23,
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
  },
  email: {
    fontSize: 18,
    color: 'black',
  },
});

export default UserItem;
