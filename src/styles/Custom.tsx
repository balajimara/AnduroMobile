import { StyleSheet } from "react-native";
import { background,primary} from "./Variables";
export default StyleSheet.create({

    bgview: {
        backgroundColor: background,
        height: '100%',
        // alignItems:"center",
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
      },
    cancelButton: {
        borderColor: primary,
        borderRadius: 30,
        borderWidth: 1,
    },
    container: {
        justifyContent : "flex-end"
    },
    textstyle:{
        fontFamily:'Roboto Mono',
        fontSize:16,
        textAlign: 'center',
        marginTop:'5%',
        marginBottom:100,
        color: '#030202',
    },
    logintextstyle:{
        fontFamily:'Roboto Mono',
        fontSize:32,
        textAlign: 'center',
        textAlignVertical: 'center',
        overflow: 'hidden',
        marginTop:80,
        color: '#030202',
    },
    logoimgget: {
        width: 200,
        resizeMode: 'contain'
    },
    logoimg: {
    marginLeft: 'auto',
    marginRight: 'auto',
    },

});