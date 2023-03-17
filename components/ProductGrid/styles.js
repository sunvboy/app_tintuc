import { StyleSheet } from 'react-native';
import {COLORS} from '../../contains'

const styles = StyleSheet.create({
    container : {
        marginBottom: 16,
        backgroundColor: COLORS.second,
        borderRadius: 15,
        with: '100%',
        marginRight: 8,
        marginLeft: 8,
    },
    product:{
        flex: 1,
        borderRadius: 15
    },
    boxImg: {
        width: '100%',
        height: 120
    },
    img:{
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        resizeMode: 'cover'
    },
    boxContent:{
        padding: 12,
    },
    title: {
        fontWeight: 'bold',
        color: COLORS.title,
        marginBottom: 0,
        fontSize: 14
    },
    time:{
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    }
})
export default styles;