import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {CoinScreen} from '../screens'
import {COLORS} from '../contains'
import {IconHeader} from '../components'

const CoinStack = createStackNavigator();
const CoinStackScreen = () => {
    return (
      <CoinStack.Navigator
        screenOptions ={{
          headerStyle:{
            backgroundColor: COLORS.primary
          },
          headerTintColor: COLORS.second
        }}
      >
      <CoinStack.Screen 
        name="CoinScreen" 
        component={CoinScreen} 
        options={{
          title: 'Giá coin',
          headerLeft: () => (
            <IconHeader />
          ),
        }}

        />
    </CoinStack.Navigator>

    
    );
}
export default CoinStackScreen