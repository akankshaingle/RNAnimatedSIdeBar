import {StyleSheet, View} from 'react-native';
import React from 'react';
import {width} from '../utils/scale';
import Header from '../components/Header';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: width * 0.04,
  },
});
