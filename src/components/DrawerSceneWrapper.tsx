import {useDrawerProgress} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

const DrawerSceneWrapper = ({children}: any) => {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {perspective: 1000},
      {scale: interpolate(progress.value, [0, 1], [1, 0.8], 'clamp')},
      {
        rotateY: `${interpolate(progress.value, [0, 1], [0, -10], 'clamp')}deg`,
      },
      {
        rotateX: `${interpolate(progress.value, [0, 1], [0, 0.6], 'clamp')}deg`,
      },
    ],
    borderRadius: interpolate(progress.value, [0, 1], [5, 20], 'extend'),
    overflow: 'hidden',
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

export default DrawerSceneWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
