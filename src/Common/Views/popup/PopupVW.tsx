

import { View, Text,Image} from 'react-native';
import { useTranslation } from "react-i18next"
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Dialog } from '@rneui/themed';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { Navigation } from 'react-native-navigation';
import route from '../../../Route/Route';
import React, { useState } from 'react';

interface popupProps {
isvisible?: boolean
onbackdrop?: () => void
callback?: (value: any) => void
disabled?:boolean
type:string
  }

const PopupVW = (props:popupProps) => {
  const {t} = useTranslation()
  const [title, setTitle] = useState<string>(t("continue"))
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false)
    const {
        isvisible,
        onbackdrop,
        callback,
        type,
      } = props
  
      React.useEffect(() => {
        if (isDisabled) {
          if (callback) {
            callback("continue")
            setIsDisabled(false)
          }          
        }
      }, [isDisabled])

      const createwallet = () => {
        setIsDisabled(true)
        setTitle(t("Loading"))
      }
  return(
    <SafeAreaView>
    {type === 'createpassword' && (
    <Dialog overlayStyle={{ borderRadius: 8, borderWidth: 1, backgroundColor: '#231B19', borderColor: '#342d2b', width: "90%", position: 'absolute', bottom:20, }}
    isVisible={isvisible} onBackdropPress={onbackdrop}>
    <View className="mb-2.5 w-14 h-14 w-full-in h-auto-in opacity-70"><Icon name='crosshairs' size={50} color="#FAFAFA" /></View>
    <View className="mb-0.5">
     <Text className="text-base text-lightgray opacity-95 leading-5 font-geistsemibold font-semibold">{t("warning")}</Text>
    </View>
    <View className="opacity-70 pt-2">
     <Text className="font-geistregular text-headingcolor text-xs">{t("passwordwarning")}</Text>
    </View>
    <View className="flex-row flex-wrap pt-4">
     <View className="w-1/2 pr-1">
         <Button className="w-full"
           title={title}
           onPress={callback ? () => createwallet() : () => {}}
           buttonStyle={{
             backgroundColor: 'transparent',
             borderWidth:1,
             borderColor:'#514e4e',
             borderRadius: 0, 
             height: 40,
           }}
           titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 14 }}
           disabled={isDisabled}
           disabledStyle={{backgroundColor:'#E8705C', borderColor:'#fff',opacity:0.40}}
         />
     </View>
     <View className="w-1/2 pl-1">
     <Button className="w-full"
       title={t("close")}
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
     )}
      {type === "logout" && (
        <Dialog overlayStyle={{ borderRadius: 12, borderWidth: 1, backgroundColor: '#231B19', borderColor: '#342d2b', width: "90%", position: 'absolute' }}  isVisible={isvisible} onBackdropPress={onbackdrop}>
      <View className="p-1">
       <View className="mb-4 w-20 h-20 w-full-in h-auto-in rounded-2xl bg-backuphighlightbg flex items-center justify-center">
        <Icon name='crosshairs' size={40} color="#FAFAFA" />
        </View>
        <View className="mb-1 w-60">
        <Text className="font-geistsemibold text-lightgray text-xl">{t("logouttext")}</Text>
        </View>
        <View className="flex-row flex-wrap pt-4">
        <View className="w-1/2 pr-1">
            <Button className="w-full"
            title={t("no")}
            buttonStyle={{
                backgroundColor: 'transparent',
                borderWidth:1,
                borderColor:'#514e4e',
                borderRadius: 8,
                height: 40,
            }}
            onPress={callback ? () => callback("close") : () => {}}
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 13 }}
            />
        </View>
        <View className="w-1/2 pl-1">
        <Button className="w-full"
        title={t("logmeout")}
        onPress={callback ? () => callback("continue") : () => {}}
        buttonStyle={{
            backgroundColor: '#E8705C',
            borderWidth:1,
            borderColor: '#E8705C',
            borderRadius: 8,
            height: 40,
        }}
        titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 13 }}
        />
        </View>
       </View>
       </View>
      </Dialog>
      )}
      </SafeAreaView>
   );
 };


export default PopupVW