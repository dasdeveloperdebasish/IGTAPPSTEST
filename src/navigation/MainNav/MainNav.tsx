import CustomDrawerContent from '@components/CustomSidebar/CustomSidebar';
import CustomTabBar from '@components/CustomTabBar/CustomTabBar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@screens/Home/Home';
import Login from '@screens/Login/Login';
import Profile from '@screens/Profile/Profile';
import QrCode from '@screens/QrCode';
import React from 'react';
import auth from '@react-native-firebase/auth';

const Tab = createBottomTabNavigator();

const navOptionHandler = {
  headerShown: false,
};

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} options={navOptionHandler} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={navOptionHandler}
      />
    </Tab.Navigator>
  );
}

// Drawer Screen
const Drawer = createDrawerNavigator();

function DrawerNavigator({navigation}: any) {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={navOptionHandler}
      />
      <Drawer.Screen
        name="QrCode"
        component={QrCode}
        options={navOptionHandler}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={navOptionHandler}
      />
    </Drawer.Navigator>
  );
}

const StackApp = createNativeStackNavigator();

export default function MainNav() {
  const user = auth().currentUser;

  return (
    <NavigationContainer>
      <StackApp.Navigator
        initialRouteName={`${user ? 'DrawerNavigator' : 'Login'}`}>
        <StackApp.Screen
          name="Login"
          component={Login}
          options={navOptionHandler}
        />

        <StackApp.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={navOptionHandler}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
