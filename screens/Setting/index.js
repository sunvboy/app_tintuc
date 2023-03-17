import React from 'react';
import { View , Text } from 'react-native';
import styles from './styles'

import { CategorySetting } from '../../components'
import { useSelector } from 'react-redux';
const SettingScreen = () => {

    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>Danh mục</Text>
            
            <CategorySetting />
        </View>
      </View>
  )
}


export default SettingScreen