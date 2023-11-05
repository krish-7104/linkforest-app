import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './Dashboard/Profile';
import Links from './Dashboard/Links';
import Themes from './Dashboard/Themes';
import Settings from './Dashboard/Settings';
import {colors} from '../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Dashboard = ({navigation}) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;
          if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Links') {
            iconName = focused ? 'link' : 'link-outline';
          } else if (route.name === 'Themes') {
            iconName = focused ? 'color-filter' : 'color-filter-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: 'gray',
        gestureEnabled: true,
        swipeEnabled: true,
        tabBarStyle: {
          height: 65,
          padding: 10,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontFamily: 'Montserrat-Medium',
        },
      })}>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Links"
        component={Links}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Themes"
        component={Themes}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
