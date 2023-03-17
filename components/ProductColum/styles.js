import { StyleSheet } from 'react-native';
import {COLORS} from '../../contains'
const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        alignItems : 'center',
        marginBottom: 16,
        backgroundColor: COLORS.second,
        borderRadius: 15,
        justifyContent: 'center'
    },

    boxImg: {
        flex: 1,
    },
    img:{
        width: '100%',
        height: 120,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        resizeMode: 'cover'

    },
    boxContent:{
        flex: 1.5,
        padding: 12
    },
    title: {
        fontWeight: 'bold',
        color: COLORS.title,
        marginBottom: 0,
        fontSize: 14
    },
    time:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    }
})

export default styles;