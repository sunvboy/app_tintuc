import React from 'react';
import {View, Text} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import {GoldScreen} from '../screens'
import {COLORS} from '../contains'
import {IconHeader} from '../components'

const GoldStack = createStackNavigator();
const GoldStackScreen = () => {
    return (
      <GoldStack.Navigator
        screenOptions ={{
          headerStyle:{
            backgroundColor: COLORS.primary
          },
          headerTintColor: COLORS.second
        }}
      >
      <GoldStack.Screen 
      name="GoldScreen" 
      component={GoldScreen} 
      options={{
        title: 'Giá vàng',
        headerLeft: () => (
          <IconHeader />
        ),
      }}/>
    </GoldStack.Navigator>

    
    );
}
export default GoldStackScreen