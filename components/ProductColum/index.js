import { Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import styles from './styles'
import Icon from '../Icon'
const ProductColum = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.boxImg}>
        <Image style={styles.img} source={require('../../data/images/meal/m1.png')} />
      </View>
      <View style={styles.boxContent}>
        <Text style={styles.title}>
          Xe tang vật chất đống, phơi nắng mưa vì vướng quy định
        </Text>
        <View style={styles.time}>
          <Icon name="time" />
          <Text style={styles.timeText}>
            12/12/2023
          </Text>
        </View>
      </View>

    </TouchableOpacity>
  )
}

export default ProductColum

