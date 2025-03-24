import {StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';
import Input from './components/Input/index';
import Button from './components/button/index';
import Title from './components/title/index';

const Signin = () => {
  //let title = 'Welcome!!!'; //variabel biasa
  const [title, setTitle] = useState('Welcome!!');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    setTitle('Selamat Datang');
    console.log(title);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {/* <Title titleText="Welcome" /> */}
      <Input
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={e => setUsername(e)}
      />
      <Input
        label="Password"
        placeholder="Masukan password anda"
        onChangeText={e => setPassword(e)}
      />
      <Input label="Alamat" placeholder="Masukan alamat anda" />
      <Input label="No Tlp" placeholder="Masukan nomor tlpn anda" />
      <Button label="Sign In" />
      <Button label="Sign In with Google" color="red" />
      <Button label="Sign In with facebook" color="blue" />
      <Button label="Sign In with Apple" color="black" />
      <Button label="Sign In" onPress={onSubmit} />
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
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
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
