// Custom Css Style
import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('screen');

export default mStyle = StyleSheet.create({

    //#region Colors

    primaryColor: '#116D6E',
    secondaryColor: '#CD1818',
    white: '#fff',
    black: '#000',
    red: '#F52A2A',
    light: '#d9d9d9',
    gray: '#f2f2f2',
    dark: "#808080",
    darkGray: "#999999",
    darkLight: "#b3b3b3",
    orange : "#ffbf00",
    mcontainer: "#f0f0f0",
    darkTransparent: "rgba(0, 0, 0, 0.2)",
    grayTransparent: "rgba(144, 144, 144, 0.2)",
    primaryTransparent: '', /**"rgba(153, 51, 255, 0.3)",**/
    secondaryTransparent: '', 
    lightTransparent: "rgba(256, 256, 256, 1)",
    transparent: "transparent",

    //#endregion

    //#region Grids

    container: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
    },
    col: {
        flexDirection: 'column',
    },
    f: (ValueP) => ({
        flex: ValueP,
    }),
    h: (ValueP) => ({
        height: ValueP,
    }),
    w: (ValueP) => ({
        width: ValueP,
    }),
    minH: (ValueP) => ({
        minHeight: ValueP
    }),
    minW: (ValueP) => ({
        minWidth: ValueP
    }),
    maxh: (ValueP) => ({
        maxHeight: ValueP
    }),
    maxw: (ValueP) => ({
        maxWidth: ValueP
    }),
    resH: (ValueP) => ({
        height: height*ValueP
    }),
    resW: (ValueP) => ({
        width: width*ValueP
    }),

    //#endregion

    //#region Border Width, Border Color and Radius 

    b:(ValueP) => ({
        borderWidth: ValueP,
    }),
    btW:(ValueP) => ({
        borderTopWidth: ValueP
    }),
    bbW:(ValueP) => ({
        borderBottomWidth: ValueP,
    }),
    blW: (ValueP) => ({
        borderLeftWidth: ValueP,
    }),
    brW: (ValueP) => ({
        borderRightWidth: ValueP,
    }),
    bC: (ValueP) => ({
        borderColor: ValueP,
    }),

    rad: (ValueP) => ({
        borderRadius: ValueP,
    }),
    
    radtl: (ValueP) => ({
        borderTopLeftRadius: ValueP,
    }),

    radbl: (ValueP) => ({
        borderBottomLeftRadius: ValueP
    }),

    radbr: (ValueP) => ({
        borderBottomRightRadius: ValueP
    }),

    radtr: (ValueP) => ({
        borderTopRightRadius: ValueP
    }),

    //#endregion

    //#region Shadow

    s : (SColor, sw, sh, sOpacity, sRad, elevation) => ({
        shadowColor: SColor,
        shadowOffset: {
            width: sw,
            height: sh
        },
        shadowOpacity: sOpacity,
        shadowRadius: sRad,
        elevation: elevation
    }),

    //#endregion

    //#region Positions

    abslt: {
        position: 'absolute',
    },
    reltv: {
        position: 'relative',
    },
    posT: (ValueP) => ({
        top: ValueP,
    }),
    posB: (ValueP) => ({
        bottom: ValueP,
    }),
    posL: (ValueP) => ({
        left: ValueP,
    }),
    posR: (ValueP) => ({
        right: ValueP,
    }),


    //#endregion

    //#region Margin and Padding

    m: (ValueP) => ({
        margin: ValueP,
    }),
    mt: (ValueP) => ({
        marginTop: ValueP,
    }),
    ml: (ValueP) => ({
        marginLeft: ValueP,
    }),
    mr: (ValueP) => ({
        marginRight: ValueP,
    }),
    mb: (ValueP) => ({
        marginBottom: ValueP,
    }),
    mv: (ValueP) => ({
        marginVertical: ValueP,
    }),
    mh: (ValueP) => ({
        marginHorizontal: ValueP,
    }),

    p: (ValueP) => ({
        padding: ValueP,
    }),
    pt: (ValueP) => ({
        paddingTop: ValueP,
    }),
    pl: (ValueP) => ({
        paddingLeft: ValueP,
    }),
    pr: (ValueP) => ({
        paddingRight: ValueP,
    }),
    pb: (ValueP) => ({
        paddingBottom: ValueP,
    }),
    pv: (ValueP) => ({
        paddingVertical: ValueP,
    }),
    ph: (ValueP) => ({
        paddingHorizontal: ValueP,
    }),

    //#endregion
    
    //#region Horizontal Align

    hcenter: {
        justifyContent: 'center',
    },
    hstart: {
        justifyContent: 'flex-start',
    },
    hend: {
        justifyContent: 'flex-end',
    },
    haround: {
        justifyContent: 'space-around',
    },
    hbetween: {
        justifyContent: 'space-between',
    },
    hevenly: {
        justifyContent: 'space-evenly',
    },

    //#endregion

    //#region Vertical Align

    vcenter: {
        alignItems: 'center'
    },
    vbaseline: {
        alignItems: 'baseline'
    },
    vstart: {
        alignItems: 'flex-start'
    },
    vend: {
        alignItems: 'flex-end',
    },
    vstrech: {
        alignItems: 'stretch',
    },

    //#endregion

    //#region Fonts and Back Colors

    bg: (ValueP) => ({
        backgroundColor: ValueP,
    }),

    fc: (ValueP) => ({
        color: ValueP,
    }),

    fSize: (ValueP) => ({
        fontSize: ValueP
    }),

    fontSCW:(SizeP,ColorP,WeightP) => ({
        fontSize:SizeP,
        color:ColorP,
        fontWeight:WeightP,

    }),

    //#endregion

    //#region Text Align

    tcenter: {
        textAlign: 'center'
    },
    tleft: {
        textAlign: 'left'
    },
    tright: {
        textAlign: 'right'
    },
    tjustify: {
        textAlign: 'justify'
    },
    tauto: {
        textAlign: 'auto'
    },

    //#endregion
})