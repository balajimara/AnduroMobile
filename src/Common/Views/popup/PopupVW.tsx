

import { View, Text,Image, TouchableOpacity, StyleSheet} from 'react-native';
import { useTranslation } from "react-i18next"
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Dialog, Input } from '@rneui/themed';
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
  const [password, setPassword] = React.useState<string>("")
  const [showPassword, setShowPassword] = React.useState<boolean>(false)
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
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 12 }}
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
        titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 12 }}
        />
        </View>
       </View>
       </View>
      </Dialog>
      )}
      {type === "password" && (
        <View className="absolute border border-popupoutline top-0 left-0 w-full bg-popupclr rounded-lg p-5 shadow-lg z-20 z-50">
          <View className="w-full">
            <View className="pb-4 flex-row justify-between items-start border-b border-[#877f7e] border-b-[1px]">
              <Text className="text-base text-lightgray opacity-95 leading-5 font-geistsemibold font-semibold">
                {t("revealseedphrase")}
              </Text>
              <TouchableOpacity onPress={callback ? () => callback(null) : () => {}}>
                <Image resizeMode={"contain"} source={require("../../../assets/images/close.png")} className="w-3" />
              </TouchableOpacity>
            </View>
            <View className="py-4 pb-3">
              <Text className="block text-lightgray text-sm font-inter mb-2">{t("password")}</Text>
              <View className="relative">
              <View className="absolute top-3 right-4 z-10 opacity-60">
            <TouchableOpacity onPress={()=> setShowPassword(!showPassword)}
            ><Icon name={showPassword ? 'eye' : 'eye-slash'} size={18} color="#FAFAFA" /></TouchableOpacity>
            </View>
                <Input
                  placeholder='Enter Your Password'
                  placeholderTextColor="#5a4e4c"
                  inputContainerStyle={styles.inputOne}
                  style={styles.input}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={!showPassword}
                  />
              </View>
            </View>
            <View className="mb-5">
              <Button
                className="w-full"
                title={t("confirm")}
                onPress={callback ? () => callback(password) : () => {}}
                buttonStyle={{
                  backgroundColor: '#E8705C',
                  borderRadius: 8,
                  height: 48,
                }}
                containerStyle={{ borderRadius: 8 }}
                titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16 }}
              />
            </View>
          </View>
        </View>
      )}
      </SafeAreaView>
   );
 };

 const styles = StyleSheet.create({
  input: {
    height: 40,
    fontFamily:'JetBrainsMono-SemiBold',
    fontSize: 14,
    padding:0,
    color: '#fff',
  },
  inputOne: {
    borderBottomWidth:0,
    borderRadius:8,
    paddingLeft:10,
    paddingTop:3
  }
});

export default PopupVW