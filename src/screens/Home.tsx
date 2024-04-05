import React from 'react';
import {Platform, StyleSheet, TextInput, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import {height, width} from '../utils/scale';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.bar}>
        <TextInput
          placeholder="Search Book"
          style={styles.input}
          onChangeText={text => {}}
        />
        <Ionicons name="search-circle" size={40} color={'black'} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.04,
    backgroundColor: 'white',
  },
  input: {
    paddingStart: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  bar: {
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginVertical: height * 0.03,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ADADAD30',
    ...Platform.select({
      ios: {
        shadow: 15,
        shadowColor: '#000000',
        shadowRadius: 5,
      },
      android: {
        elavation: 5,
      },
    }),
  },
});
