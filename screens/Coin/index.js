import React from 'react'
import { View , Text } from 'react-native'

import styles from './styles'
import { GridPrice } from '../../components'

const CoinScreen = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.layout}>
                    <View style={styles.layoutTitle}>
                        <View style={styles.column}>
                            <Text style={styles.layoutTextHeader}>Name</Text>
                        </View> 
                        <View style={styles.column} >
                            <Text style={styles.layoutTextHeader}>Price (USD)</Text>
                        </View>
                        <View style={styles.column} >
                            <Text style={styles.layoutTextHeader}>Change 24 (%)</Text>
                        </View>
                    </View>
                    <GridPrice />
                    <GridPrice numberDown/>
                    <GridPrice />
                    <GridPrice numberDown/>
                </View>
            </View>
        </>
    )
}

export default CoinScreen