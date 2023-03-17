import { Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import ProductColum from '../ProductColum'
const CategoryColum = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.box}>
        <ProductColum />
        <ProductColum />
      </View>
    </View>
  )
}
export default CategoryColum

