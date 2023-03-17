import { Ionicons } from '@expo/vector-icons'; 
import { Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import {COLORS} from '../../contains'
const Icon = ({name}) => {
  return (
    <View style={styles.container}>
        <Ionicons name={name} size={24} color={COLORS.icon} />
    </View>
  )
}

export default Icon

