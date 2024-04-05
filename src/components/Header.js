import {useDrawerStatus} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {height} from '../utils/scale';

const Header = () => {
  const navigation = useNavigation();
  const [isDrawerOpen, setIsDrawerOpen] = useState('closed');

  const currentDrawerStatus = useDrawerStatus();

  useEffect(() => {
    setIsDrawerOpen(currentDrawerStatus);
  }, [currentDrawerStatus]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.profileView}
        onPress={() => {
          if (isDrawerOpen === 'open') {
            navigation.closeDrawer();
            setIsDrawerOpen('closed');
          } else {
            navigation.openDrawer();
            setIsDrawerOpen('open');
          }
        }}>
        {isDrawerOpen === 'open' ? (
          <AntDesign name={'menu-fold'} size={30} color={'black'} />
        ) : (
          <AntDesign name={'menu-unfold'} size={30} color={'black'} />
        )}
      </TouchableOpacity>
      <Ionicons name="notifications-outline" size={30} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        paddingTop: height * 0.07,
      },
      android: {
        paddingTop: height * 0.05,
      },
    }),
    backgroundColor: 'white',
  },
  profileView: {
    flex: 1,
  },
});
