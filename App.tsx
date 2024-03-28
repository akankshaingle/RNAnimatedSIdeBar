import React, {useEffect, useRef} from 'react';
import {
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Cart from './src/screens/Cart.js';
import Home from './src/screens/Home.js';
import Notification from './src/screens/Notification.js';
import Profile from './src/screens/Profile.js';
import * as constantsJs from './src/utils/constants.js';

const Tab = createBottomTabNavigator();

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    icon: <Ionicons name={'home-outline'} size={30} color={'white'} />,
    component: Home,
  },
  {
    route: 'Notification',
    label: 'Notification',
    icon: (
      <MaterialCommunityIcons name={'bell-outline'} size={30} color={'white'} />
    ),
    component: Notification,
  },
  {
    route: 'Cart',
    label: 'Cart',
    icon: (
      <MaterialCommunityIcons name={'cart-heart'} size={30} color={'white'} />
    ),
    component: Cart,
  },
  {
    route: 'Profile',
    label: 'Profile',
    icon: <Ionicons name={'person-outline'} size={30} color={'white'} />,
    component: Profile,
  },
];

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;

  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (viewRef.current && circleRef.current && textRef.current) {
      if (focused) {
        viewRef.current.animate(constantsJs.animate1);
        circleRef.current.animate(constantsJs.circle1);
        textRef.current.transition({scale: 1});
      } else {
        viewRef.current.animate(constantsJs.animate2);
        circleRef.current.animate(constantsJs.circle2);
        textRef.current.transition({scale: 0});
      }
    }
  }, [focused]);

  const Icon = item.icon;

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={styles.container}>
      <Animatable.View style={styles.container} ref={viewRef} duration={400}>
        <View
          style={[styles.btn, {borderColor: focused ? 'white' : '#D95B43'}]}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          {Icon}
        </View>
        <Animatable.Text
          ref={textRef}
          style={[styles.text, focused ? {opacity: 1} : {opacity: 0}]}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'white'}
      />
      <Tab.Navigator
        screenOptions={{headerShown: false, tabBarStyle: styles.tabBarStyle}}>
        {TabArr.map((item, index) => (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  tabBarStyle: {
    position: 'absolute',
    height: 70,
    bottom: 24,
    right: 16,
    left: 16,
    borderRadius: 16,
    backgroundColor: '#D95B43',
    borderTopWidth: 1,
  },
  btn: {
    width: 55,
    height: 55,
    borderWidth: 4,
    backgroundColor: 'transparent',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    marginTop: 6,
    fontWeight: '500',
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D95B43',
    borderRadius: 25,
  },
});

export default App;
