import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Strings from '././src/utils/strings.js';
import * as Images from './src/utils/imagePath.tsx';
import DrawerSceneWrapper from './src/components/DrawerSceneWrapper.tsx';
import Cart from './src/screens/Cart.tsx';
import Home from './src/screens/Home.tsx';
import Notification from './src/screens/Notification.tsx';
import Profile from './src/screens/Profile.tsx';
import {height, width} from './src/utils/scale.js';
import colors from './src/utils/colors.tsx';
import Splash from './src/screens/Splash.tsx';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const TabArr = [
  {
    route: 'tab1',
    label: 'Home',
    component: Notification,
  },
  {
    route: 'tab2',
    label: 'Notification',
    component: Notification,
  },
  {
    route: 'tab3',
    label: 'Cart',
    component: Cart,
  },
  {
    route: 'tab4',
    label: 'Profile',
    component: Profile,
  },
];

const CustomDrawerContent = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigateTo = (screen: string) => {
    props.navigation.navigate(screen);
  };
  return (
    <View style={[styles.MenuContainer]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        translucent={true}
        backgroundColor="transparent"
      />
      <DrawerContentScrollView {...props}>
        <View style={[styles.profileView]}>
          <TouchableOpacity style={styles.avatarShadow}>
            <Image source={Images.profile} style={[styles.profile]} />
          </TouchableOpacity>
          <Text style={styles.name}>Harriet Tubman</Text>
        </View>
        <View style={styles.line} />
        {[
          {
            screen: Strings.rHomeStackScreen,
            icon: 'home-outline',
            label: 'Home',
          },
          {
            screen: Strings.rNotificationStackScreen,
            icon: 'notifications-outline',
            label: 'Notification',
          },
          {
            screen: Strings.rProfileStackScreen,
            icon: 'person-outline',
            label: 'Profile',
          },
          {
            screen: Strings.rCartStackScreen,
            icon: 'cart-outline',
            label: 'Cart',
          },
          {
            screen: Strings.rTabNavigator,
            icon: 'settings-outline',
            label: 'Settings',
          },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.drawerItemView}
            onPress={() => navigateTo(item.screen)}>
            <Ionicons name={item.icon} size={22} color={colors.white} />
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </DrawerContentScrollView>
      <TouchableOpacity
        style={styles.bottomView}
        onPress={() => props.navigation.navigate(Strings.rHome)}>
        <Ionicons name={'log-out-outline'} size={22} color={colors.white} />
        <Text style={[styles.label]}>Signout</Text>
      </TouchableOpacity>
    </View>
  );
};

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: 'back',
        headerShown: false,
        overlayColor: 'transparent',
        drawerStyle: styles.drawerStyle,
        drawerStatusBarAnimation: 'slide',
        sceneContainerStyle: {
          backgroundColor: colors.primary,
        },
      }}>
      {[
        {name: Strings.rHomeStackScreen, component: HomeStackScreen},
        {
          name: Strings.rNotificationStackScreen,
          component: NotificationStackScreen,
        },
        {name: Strings.rCartStackScreen, component: CartStackScreen},
        {name: Strings.rProfileStackScreen, component: ProfileStackScreen},
        {name: Strings.rTabNavigator, component: TabNavigator},
      ].map((item, index) => (
        <Drawer.Screen
          key={index}
          name={item.name}
          component={item.component}
        />
      ))}
    </Drawer.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <DrawerSceneWrapper>
      <HomeStack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: styles.contentStyle,
        }}>
        <HomeStack.Screen name={Strings.rHome} component={Home} />
      </HomeStack.Navigator>
    </DrawerSceneWrapper>
  );
};
const NotificationStackScreen = () => {
  return (
    <DrawerSceneWrapper>
      <NotificationStack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: styles.contentStyle,
        }}>
        <NotificationStack.Screen
          name={Strings.rNotification}
          component={Notification}
        />
      </NotificationStack.Navigator>
    </DrawerSceneWrapper>
  );
};
const CartStackScreen = () => {
  return (
    <DrawerSceneWrapper>
      <CartStack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: styles.contentStyle,
        }}>
        <CartStack.Screen name={Strings.rCart} component={Cart} />
      </CartStack.Navigator>
    </DrawerSceneWrapper>
  );
};
const ProfileStackScreen = () => {
  return (
    <DrawerSceneWrapper>
      <ProfileStack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: styles.contentStyle,
        }}>
        <ProfileStack.Screen name={Strings.rCart} component={Cart} />
      </ProfileStack.Navigator>
    </DrawerSceneWrapper>
  );
};
const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;

  const renderIcon = () => {
    switch (item.label) {
      case 'Home':
        return focused ? (
          <Ionicons name={'home'} size={25} color={colors.primary} />
        ) : (
          <Ionicons name={'home-outline'} size={25} color={colors.primary} />
        );
      case 'Notification':
        return focused ? (
          <MaterialCommunityIcons
            name={'bell'}
            size={25}
            color={colors.primary}
          />
        ) : (
          <MaterialCommunityIcons
            name={'bell-outline'}
            size={25}
            color={colors.primary}
          />
        );
      case 'Cart':
        return focused ? (
          <MaterialCommunityIcons
            name={'cart'}
            size={25}
            color={colors.primary}
          />
        ) : (
          <MaterialCommunityIcons
            name={'cart-outline'}
            size={25}
            color={colors.primary}
          />
        );
      case 'Profile':
        return focused ? (
          <Ionicons name={'person'} size={25} color={colors.primary} />
        ) : (
          <Ionicons name={'person-outline'} size={25} color={colors.primary} />
        );

      default:
        break;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={styles.container}>
      {renderIcon()}
    </TouchableOpacity>
  );
};
const TabNavigator = () => {
  return (
    <DrawerSceneWrapper>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
        }}>
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
    </DrawerSceneWrapper>
  );
};

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.white}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Strings.rSplash} component={Splash} />
        <Stack.Screen name={Strings.rDrawerStack} component={DrawerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    paddingTop: 15,
    height: 70,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.white,
  },
  MenuContainer: {
    flex: 1,
  },
  profileView: {
    flex: 1,
    marginHorizontal: 15,
    ...Platform.select({
      ios: {
        paddingTop: height * 0.03,
      },
      android: {
        paddingTop: height * 0.08,
      },
    }),
  },
  avatarShadow: {
    borderRadius: 100,
    backgroundColor: colors.white,
    elevation: 24,
    shadowColor: '#3A5160',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    width: height * 0.08,
    height: height * 0.08,
  },
  profile: {
    width: height * 0.08,
    height: height * 0.08,
    borderRadius: 100,
  },
  line: {
    borderWidth: 1,
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,
    borderColor: colors.white,
  },
  name: {
    fontSize: 20,
    paddingTop: 20,
    color: colors.white,
    fontWeight: '700',
  },
  drawerItemView: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 15,
    alignItems: 'center',
  },
  label: {
    color: colors.white,
    fontSize: 18,
    paddingStart: 15,
    fontWeight: '500',
  },
  drawerSceneContainer: {
    elevation: 24,
    shadowColor: '#000',
    backgroundColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
  },
  drawerStyle: {
    backgroundColor: colors.primary,
    width: 250,
  },
  bottomView: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 15,
    alignItems: 'center',
    marginBottom: width * 0.2,
  },
  contentStyle: {
    elevation: 24,
    shadowColor: '#000',
    backgroundColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
  },
});

export default App;
