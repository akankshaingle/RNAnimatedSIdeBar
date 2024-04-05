import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {width} from '../utils/scale';

const Notification = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: width * 0.04,
  },
});
