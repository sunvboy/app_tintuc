import { StyleSheet } from 'react-native'
import {Dimensions} from 'react-native'
import {COLORS} from '../../contains'
const height = Dimensions.get('window').height - 200;

const styles = StyleSheet.create({
    container : {
        width: '100%',
    },
    title : {
        height : 30,
        borderBottomColor: COLORS.primary,
        borderBottomWidth: 3,
        marginBottom: 15
    },
    titleText:{
        backgroundColor: COLORS.primary,
        textAlign: 'center',
        maxWidth: 140,
        height: '100%',
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.second,
        lineHeight: 30
    },
    box:{
        flex: 1,
        flexDirection: 'row',
        marginLeft: -8,
        marginRight: -8
    },
    boxProduct: {
        flex: 1,
        flexWrap: 'wrap',        
    }
})

export default styles;