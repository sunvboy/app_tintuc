import { Ionicons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import {COLORS} from '../../contains'
import { useNavigation } from '@react-navigation/native';
const IconHeader = () => {
  const navigation = useNavigation()
  const openDrawer = () => {
    navigation.openDrawer()
  }
  return (
    <TouchableOpacity onPress={openDrawer} style={styles.container}>
      <Ionicons name="menu" size={30} color={COLORS.second} />
    </TouchableOpacity>
  )
}
export default IconHeader

