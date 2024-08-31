import { View, Text,Image} from 'react-native';
import { useTranslation } from "react-i18next"
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Dialog } from '@rneui/themed';
import  Icon  from 'react-native-vector-icons/FontAwesome';

interface popupProps {
isvisible?: boolean
onbackdrop?: () => void
callback: (value: any) => void
disabled:boolean
  }

const PopupVW = (props:popupProps) => {
    const {
        isvisible,
        onbackdrop,
        callback,
        disabled
      } = props
          return(
    <Dialog overlayStyle={{ borderRadius: 8, borderWidth: 1, backgroundColor: '#231B19', borderColor: '#342d2b', width: "90%", position: 'absolute', bottom:20, }}
    isVisible={isvisible} onBackdropPress={onbackdrop}>
    <View className="mb-2.5 w-14 h-14 w-full-in h-auto-in opacity-70"><Icon name='crosshairs' size={50} color="#FAFAFA" /></View>
    <View className="mb-0.5">
     <Text className="text-base text-lightgray opacity-95 leading-5 font-geistsemibold font-semibold">Warning</Text>
    </View>
    <View className="opacity-70 pt-2">
     <Text className="font-geistregular text-headingcolor text-xs">Warning: Due to security reasons, we strongly recommend you set the password for the wallet</Text>
    </View>
    <View className="flex-row flex-wrap pt-4">
     <View className="w-1/2 pr-1">
         <Button className="w-full"
           title="Continue"
           onPress={callback ? () => callback("continue") : () => {}}
           buttonStyle={{
             backgroundColor: 'transparent',
             borderWidth:1,
             borderColor:'#514e4e',
             borderRadius: 0,
             height: 40,
           }}
           titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 14 }}
         />
     </View>
     <View className="w-1/2 pl-1">
     <Button className="w-full"
       title="Close"
       onPress={callback ? () => callback("close") : () => {}}
       buttonStyle={{
         backgroundColor: '#E8705C',
         borderWidth:1,
         borderColor: '#E8705C',
         borderRadius: 0,
         height: 40,
       }}
       titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 14 }}
     />
     </View>
    </View>
   </Dialog>
    )
}


export default PopupVW