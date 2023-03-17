import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './styles'
import Icon from '../Icon'

const ProductGrid = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.product}>
                <View style={styles.boxImg}>
                    <Image style={styles.img} source={require('../../data/images/meal/m10.png')} />
                </View>
                <View style={styles.boxContent}>
                    <Text style={styles.title}>Culpa id esse cillum qui aute anim magna </Text>
                    <View style={styles.time}>
                        <Icon />
                        <Text style={styles.timeText}>12/12/2021</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductGrid