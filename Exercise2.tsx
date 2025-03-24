import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

const Exercise2 = () => {
  return (
    //jsx
    //view as a container
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Biodata</Text>
      </View>
      <View style={styles.rowContainer}>
        <Image style={styles.img2} source={require('./assets/angel.jpg')} />
        <Text style={styles.subTitle}>Hi! {'\n'} This is Angel</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.title2}>My Personal Data</Text>
      </View>
      <View style={styles.rowContainer2}>
        <Text style={styles.subTitle3}>Name</Text>
        <View style={styles.container3}>
          <Text style={styles.subTitle3}>Angelika Farah Manoppo</Text>
        </View>
      </View>
      <View style={styles.rowContainer2}>
        <Text style={styles.subTitle3}>Email</Text>
        <View style={styles.container3}>
          <Text style={styles.subTitleEmail}>angelikamanoppo02@gmail.com</Text>
        </View>
      </View>
      <View style={styles.rowContainer2}>
        <Text style={styles.subTitle3}>Date of Birth</Text>
        <View style={styles.container3}>
          <Text style={styles.subTitle3}>August 2, 2004</Text>
        </View>
      </View>
      <View style={styles.rowContainer2}>
        <Text style={styles.subTitle3}>Birth of Place</Text>
        <View style={styles.container3}>
          <Text style={styles.subTitle3}>Bitung, North Sulawesi</Text>
        </View>
      </View>
      <View style={styles.rowContainer2}>
        <Text style={styles.subTitle3}>Telephone</Text>
        <View style={styles.container3}>
          <Text style={styles.subTitle3}>089631038443</Text>
        </View>
      </View>
      <View style={styles.container4}>
        <Text style={styles.title2}>Contact Me</Text>
      </View>
      <View style={styles.rowContainer}>
        <Image style={styles.img3} source={require('./assets/instagram.png')} />
        <Text style={styles.subTitleContact}> angelikamnpp_</Text>
        <Image style={styles.img3} source={require('./assets/whatsapp.png')} />
        <Text style={styles.subTitleContact}> 089631038443</Text>
      </View>
    </ScrollView>
  );
};

//3.export component
export default Exercise2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A37E84',
    borderColor: '#EBD7CE',
    borderWidth: 5,
    borderRadius: 20, //untuk ujung container atau border
    marginBottom: 10,
    margin: 30, //border with komponen terluar
    padding: 20, //border with text component(inner)
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  rowContainer2: {
    flexDirection: 'row',
    alignItems: 'center', // Mengatur agar sejajar tengah
    marginHorizontal: 5,
    paddingVertical: 5, // Memberi jarak agar lebih rapi
  },

  container2: {
    backgroundColor: '#A37E84',
    borderColor: '#EBD7CE',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    marginBottom: 10,
  },

  container3: {
    backgroundColor: '#EBD7CE',
    borderRadius: 10,
    padding: 7,
    flex: 2, // Mengatur agar semua input memiliki lebar yang sama
    alignItems: 'center', // Membuat teks di dalamnya sejajar tengah
  },

  container4: {
    backgroundColor: '#A37E84',
    borderColor: '#EBD7CE',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    marginBottom: 10,
    marginTop: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: '600',
    color: '#EBD7CE',
    textAlign: 'center',
    //margin bisa juga dilakukan disini
  },

  title2: {
    fontSize: 18,
    fontWeight: '600',
    color: '#EBD7CE',
    textAlign: 'left',
    marginLeft: 12,
    //margin bisa juga dilakukan disini
  },

  subTitle: {
    fontSize: 30,
    fontWeight: 600,
    color: '#A37E84',
    textAlign: 'right',
    marginBottom: 20,
    marginLeft: 5,
  },

  subTitle2: {
    fontSize: 30,
    fontWeight: 500,
    color: '#A37E84',
    textAlign: 'center',
  },

  subTitle3: {
    fontSize: 20,
    fontWeight: '500',
    color: '#A37E84',
    textAlign: 'left',
    flex: 1, // Agar label sejajar rata kiri
    marginLeft: 10,
  },

  subTitleEmail: {
    fontSize: 17,
    fontWeight: '500',
    color: '#A37E84',
    textAlign: 'center', // Agar teks di dalam container sejajar tengah
  },

  img2: {
    height: 180,
    width: 180,
    marginLeft: 20,
    marginVertical: 20,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#A37E84',
    borderRadius: 5,
  },

  img3: {
    height: 30,
    width: 30,
    marginLeft: 20,
    marginVertical: 20,
    marginBottom: 20,
  },

  subTitleContact: {
    fontSize: 17,
    fontWeight: '500',
    color: '#A37E84',
  },
});
