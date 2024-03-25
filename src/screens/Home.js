/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import React from 'react';
import {height, width} from '../utils/scale';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.profileView}>
          <Image
            source={require('../assets/images/profile.jpeg')}
            style={styles.profile}
          />
        </TouchableOpacity>
        <Ionicons name="notifications-outline" size={30} />
      </View>
      <View style={styles.bar}>
        <TextInput placeholder="Search Book" style={styles.input} />
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
    ...Platform.select({
      ios:{
        paddingTop: height * 0.07,
      },
      android:{
        paddingTop: height * 0.02,
      }
    }),
    backgroundColor:'white'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  profileView: {
    flex: 1,
  },
  profile: {
    width: height * 0.06,
    height: height * 0.06,
    borderRadius: 100,
  },
  bar: {
    // borderWidth: 1,
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
  input: {
    paddingStart: 10,
    fontSize: 16,
    fontWeight: '500',
  },
});
