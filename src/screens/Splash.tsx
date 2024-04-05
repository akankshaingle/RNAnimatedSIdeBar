import LottieView from 'lottie-react-native';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {height} from '../utils/scale';
import * as Strings from '../utils/strings';
import * as Images from '../utils/imagePath';

const Splash = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Strings.rDrawerStack);
    }, 1500);
  }, [navigation]);
  const animation = React.useRef(null);

  return (
    <View style={styles.container}>
      <LottieView
        ref={animation}
        source={Images.splash}
        style={styles.lottie}
        autoPlay={true}
        loop={false}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    top: height * 0.15,
    textAlign: 'center',
  },
  text2: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    top: height * 0.15,
    textAlign: 'center',
  },
  lottie: {
    height: '100%',
    width: '100%',
  },
  splash: {
    height: '100%',
    width: '100%',
  },
});
