import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from '../screens'
import {COLORS} from '../contains'
import {IconHeader} from '../components'
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
    initialRouteName={'Home'}
    screenOptions ={{
      headerStyle:{
        backgroundColor: COLORS.primary
      },
      headerTintColor: COLORS.second,
      headerShadowVisible: false
    }}
    >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} 
        options={{
          title: 'Trang chủ',
          headerLeft: () => (
            <IconHeader />
          ),
        }}/>
     
    </HomeStack.Navigator>
  );
}
export default HomeStackScreen