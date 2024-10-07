import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from './theme';

export const GlobalStyleSheet = StyleSheet.create({
    container: {
        padding: 15,
        maxWidth: SIZES.container,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%'
    },
    formControl: {
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.borderColor,
        paddingHorizontal: 15,
    },
    activeInput: {
        borderColor: COLORS.primary,
    },
    label: {
        ...FONTS.font,
        color: COLORS.label,
        marginBottom: 8,
    },
    inputGroup: {
        marginBottom: 15,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: -5,
    },
    rowcenter: {
        flexDirection:'row',
        alignItems:'center',
        gap:5
    },
    col50: {
        width: '50%',
        paddingHorizontal: 5,
    },
    col60: {
        width: '60%',
        paddingHorizontal: 5,
    },
    col40: {
        width: '40%',
        paddingHorizontal: 5,
    },
    col33: {
        width: '33.33%',
        paddingHorizontal: 5,
    },
    col35: {
        width: '35%',
        paddingHorizontal: 5,
    },
    col65: {
        width: '65%',
        paddingHorizontal: 5,
    },
    card: {
        marginBottom: 15,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius_lg,
    },
    cardHeader: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.inputborder,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderStyle:'dashed'
    },
    cardBody: {
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    shadow: {
        shadowColor: "rgba(0,0,0,.5)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    shadow2: {
        borderWidth: 1,
        borderRadius: SIZES.radius,
        shadowColor: "rgba(0,0,0,.5)",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    image: {
        width: 20,
        height: 20,
        tintColor: 'red',
        resizeMode: 'contain',
    },
    image2: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    image3: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    inputBox: {
        height: 48,
        paddingLeft: 50,
        justifyContent: 'center',
        marginBottom: 15,
    },
    background: {
        backgroundColor: 'rgba(0,0, 0, 0.20)',
        height: 35,
        width: 35,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        ...FONTS.font,
        color: 'red',
        marginLeft: 10,
    },
    TouchableOpacity2: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        height: 47,
        justifyContent: 'center',
        borderRadius: 50,
    },
    shadowPrimary: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: .5,
        shadowRadius: 5,
    },
    notification: {
        height: 16,
        width: 16,
        backgroundColor: '#FF3131',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputimage: {
        position: 'absolute',
        left: 15,
        height: 16,
        width: 16,
        resizeMode: 'contain',
        opacity: .8,
    },
    backbtn:{
        height:35,
        width:35,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
    },
    border:{
        borderTopWidth:1,
        borderColor:COLORS.borderColor
    },
    inputborder:{
        borderWidth:1,
        borderRadius:8,
        borderColor:COLORS.inputborder,
        paddingRight:35,
        paddingHorizontal:15,
        paddingVertical:10
    },
    flexend:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    flexcenter:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    flex:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    background2:{
        height:35,
        width:35,
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center',
    },
    background3:{
        height:40,
        width:40,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
    },
    Arrival2:{
        height: 48,
        alignItems: 'center',
        gap:5,
        flexDirection:'row',
        borderRadius: 6,
        paddingHorizontal: 5,
        paddingVertical: 5,
        overflow:'hidden'
    },
    Arrival:{
        height: 35,
        alignItems: 'center',
        gap:5,
        flexDirection:'row',
        borderRadius: 34,
        borderWidth:1,
        paddingHorizontal: 5,
        paddingVertical: 5,
        overflow:'hidden',
        paddingRight:10
    },
    imagebanner:{
        height:undefined,
        width:'100%',
        aspectRatio:1/1.1,
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center',
    },
    countcricle:{
        height:18,
        width:18,
        borderRadius:30,
        backgroundColor:COLORS.card,
        alignItems:'center',
        justifyContent:'center',
    },
    outline:{
        height:2,
        flex:1,
        backgroundColor:COLORS.card,
        opacity:.3,
        marginHorizontal:10
    },
    checkboximage:{
        height:20,
        width:20,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
    },
    bottombtn:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:5,
        marginTop:10
    }
});