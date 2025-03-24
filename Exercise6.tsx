import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Input from './components/Input/index';
import Button from './components/button/index';
import Title from './components/title/index';

const Signin = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSubmit = () => {
    console.log(name, username, email, address, phoneNumber);
  };

  return (
    <View style={styles.container}>
      <Title titleText="Registration" />
      <Input
        label="Name"
        placeholder="Masukan nama lengkap anda"
        onChangeText={e => setName(e)}
      />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={e => setUsername(e)}
      />
      <Input
        label="Email"
        placeholder="Masukan email anda"
        onChangeText={e => setEmail(e)}
      />
      <Input
        label="Address"
        placeholder="Masukan alanat anda"
        onChangeText={e => setAddress(e)}
      />
      <Input
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        keyboardType="numeric"
        onChangeText={e => setPhoneNumber(e.replace(/[^0-9]/g, ''))}
      />
      <Button label="Register" onPress={onSubmit} />
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 40,
    color: 'black',
    fontWeight: '700',
    marginBottom: 20,
  },
  label: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    fontSize: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'orange',
    padding: 15,
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
