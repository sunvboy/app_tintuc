import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../contains'
import HomeStackScreen from './HomeNavigation'
import GoldStackScreen from './GoldNavigation'
import CoinStackScreen from './CoinNavigation'

const Tab = createBottomTabNavigator();
const MyTabs = () => {
   return (
    <Tab.Navigator
    //set giá trị khởi tạo ban đầu
    initialRouteName={'Home'}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        switch (route.name) {
          case 'Home':
            iconName = focused ? 'ios-home' : 'ios-home-outline'
            break;
          case 'Gold':
            iconName = focused ? 'podium' : 'podium-outline'
            break;

          case 'Coin':
            iconName = focused ? 'pulse' : 'pulse-outline'
            break;

          default:
            break;
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: COLORS.active,
      tabBarInactiveTintColor: COLORS.second,
      tabBarStyle:{
        backgroundColor: COLORS.primary,
        height: 65,
        paddingBottom: 10
      },
      tabBarLabelStyle:{
        fontSize: 13
      },
      headerShown: false
    })}
  >
    <Tab.Screen name="Home" component={HomeStackScreen} options={{title: 'Trang chủ'}}/>
    <Tab.Screen name="Gold" component={GoldStackScreen} options={{title: 'Giá vàng'}}/>
    <Tab.Screen name="Coin" component={CoinStackScreen} options={{title: 'Giá coin'}}/>

    </Tab.Navigator>
   )
}
export default MyTabs