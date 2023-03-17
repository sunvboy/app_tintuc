import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './navigation'
import SettingNavigation from './navigation/SettingNavigation'
import DrawerContent from './screens/Drawer'
import { Provider } from 'react-redux'
import store from './store'
const Drawer = createDrawerNavigator();

export default function App(props) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator 
        screenOptions={{
          headerShown: false
        }}
      drawerContent = {(props) =>  <DrawerContent  {...props} />}
      initialRouteName="MyTabs">
        <Drawer.Screen name="MyTabs" component={MyTabs} />
        <Drawer.Screen name="SettingNavigation" component={SettingNavigation} />
      </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}